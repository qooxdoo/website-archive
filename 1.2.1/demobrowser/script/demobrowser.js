(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.2.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.2.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"190a8f485898"},
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

qx.$$packageData['190a8f485898']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/help-faq.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
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
(function(){var w="on",u="qx.debug",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",d="qx.client",k="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e=".",h="qx.core.Variant",a="mshtml",j="gecko";
qx.Bootstrap.define(h,{statics:{__bg:{},__bh:{},compilerIsSet:function(){return true;
},define:function(K,L,M){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__bk(L)){throw new Error('Allowed values of variant "'+K+'" must be defined!');
}
if(M===undefined){throw new Error('Default value of variant "'+K+'" must be defined!');
}}
if(!this.__bg[K]){this.__bg[K]={};
}else if(qx.core.Variant.compilerIsSet(u,w)){if(this.__bg[K].defaultValue!==undefined){throw new Error('Variant "'+K+'" is already defined!');
}}this.__bg[K].allowedValues=L;
this.__bg[K].defaultValue=M;
},get:function(N){var O=this.__bg[N];

if(qx.core.Variant.compilerIsSet(u,w)){if(O===undefined){throw new Error('Variant "'+N+'" is not defined.');
}}
if(O.value!==undefined){return O.value;
}return O.defaultValue;
},__bi:function(){if(window.qxvariants){for(var z in qxvariants){if(qx.core.Variant.compilerIsSet(u,w)){if((z.split(e)).length<2){throw new Error('Malformed settings key "'+z+'". Must be following the schema "namespace.key".');
}}
if(!this.__bg[z]){this.__bg[z]={};
}this.__bg[z].value=qxvariants[z];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(J){}this.__bj(this.__bg);
}},__bj:function(){if(qx.core.Setting.get(m)!=true){return;
}var P=document.location.search.slice(1).split(p);

for(var i=0;i<P.length;i++){var Q=P[i].split(f);

if(Q.length!=3||Q[0]!=c){continue;
}var R=Q[1];

if(!this.__bg[R]){this.__bg[R]={};
}this.__bg[R].value=decodeURIComponent(Q[2]);
}},select:function(A,B){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__bl(this.__bg[A])){throw new Error("Variant \""+A+"\" is not defined");
}
if(!this.__bl(B)){throw new Error("the second parameter must be a map!");
}}
for(var C in B){if(this.isSet(A,C)){return B[C];
}}
if(B[r]!==undefined){return B[r];
}
if(qx.core.Variant.compilerIsSet(u,w)){throw new Error('No match for variant "'+A+'" in variants ['+qx.Bootstrap.getKeysAsString(B)+'] found, and no default ("default") given');
}},isSet:function(E,F){var G=E+n+F;

if(this.__bh[G]!==undefined){return this.__bh[G];
}var I=false;
if(F.indexOf(s)<0){I=this.get(E)===F;
}else{var H=F.split(s);

for(var i=0,l=H.length;i<l;i++){if(this.get(E)===H[i]){I=true;
break;
}}}this.__bh[G]=I;
return I;
},__bk:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__bl:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__bm:function(x,y){for(var i=0,l=x.length;i<l;i++){if(x[i]==y){return true;
}}return false;
}},defer:function(D){D.define(d,[j,a,b,g],qx.bom.client.Engine.NAME);
D.define(u,[w,t],w);
D.define(o,[w,t],t);
D.define(k,[w,t],w);
D.__bi();
}});
})();
(function(){var D="qx.debug",C="object",B="Interface",A="on",z="string",y="function",x="Boolean",w="qx.Interface",v="events",u="toggle",o="properties",t="]",r="members",n="number",m="boolean",q="is",p="[Interface ",s="statics";
qx.Bootstrap.define(w,{statics:{define:function(name,E){if(E){if(E.extend&&!(E.extend instanceof Array)){E.extend=[E.extend];
}if(qx.core.Variant.isSet(D,A)){this.__l(name,E);
}var F=E.statics?E.statics:{};
if(E.extend){F.$$extends=E.extend;
}
if(E.properties){F.$$properties=E.properties;
}
if(E.members){F.$$members=E.members;
}
if(E.events){F.$$events=E.events;
}}else{var F={};
}F.$$type=B;
F.name=name;
F.toString=this.genericToString;
F.basename=qx.Bootstrap.createNamespace(name,F);
qx.Interface.$$registry[name]=F;
return F;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(J){if(!J){return [];
}var K=J.concat();

for(var i=0,l=J.length;i<l;i++){if(J[i].$$extends){K.push.apply(K,this.flatten(J[i].$$extends));
}}return K;
},__f:function(b,c,d,e){var j=d.$$members;

if(j){for(var h in j){if(qx.Bootstrap.isFunction(j[h])){var g=this.__g(c,h);
var f=g||qx.Bootstrap.isFunction(b[h]);

if(!f){throw new Error('Implementation of method "'+h+'" is missing in class "'+c.classname+'" required by interface "'+d.name+'"');
}var k=e===true&&!g&&!qx.Bootstrap.hasInterface(c,d);

if(k){b[h]=this.__j(d,b[h],h,j[h]);
}}else{if(typeof b[h]===undefined){if(typeof b[h]!==y){throw new Error('Implementation of member "'+h+'" is missing in class "'+c.classname+'" required by interface "'+d.name+'"');
}}}}}},__g:function(U,V){var ba=V.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!ba){return false;
}var W=qx.Bootstrap.firstLow(ba[2]);
var X=qx.Bootstrap.getPropertyDefinition(U,W);

if(!X){return false;
}var Y=ba[0]==q||ba[0]==u;

if(Y){return qx.Bootstrap.getPropertyDefinition(U,W).check==x;
}return true;
},__h:function(G,H){if(H.$$properties){for(var I in H.$$properties){if(!qx.Bootstrap.getPropertyDefinition(G,I)){throw new Error('The property "'+I+'" is not supported by Class "'+G.classname+'"!');
}}}},__i:function(bb,bc){if(bc.$$events){for(var bd in bc.$$events){if(!qx.Bootstrap.supportsEvent(bb,bd)){throw new Error('The event "'+bd+'" is not supported by Class "'+bb.classname+'"!');
}}}},assertObject:function(be,bf){var bh=be.constructor;
this.__f(be,bh,bf,false);
this.__h(bh,bf);
this.__i(bh,bf);
var bg=bf.$$extends;

if(bg){for(var i=0,l=bg.length;i<l;i++){this.assertObject(be,bg[i]);
}}},assert:function(bi,bj,bk){this.__f(bi.prototype,bi,bj,bk);
this.__h(bi,bj);
this.__i(bi,bj);
var bl=bj.$$extends;

if(bl){for(var i=0,l=bl.length;i<l;i++){this.assert(bi,bl[i],bk);
}}},genericToString:function(){return p+this.name+t;
},$$registry:{},__j:qx.core.Variant.select(D,{"on":function(L,M,N,O){function P(){O.apply(this,arguments);
return M.apply(this,arguments);
}M.wrapper=P;
return P;
},"default":function(){}}),__k:qx.core.Variant.select(D,{"on":{"extend":C,"statics":C,"members":C,"properties":C,"events":C},"default":null}),__l:qx.core.Variant.select(D,{"on":function(name,Q){if(qx.core.Variant.isSet(D,A)){var T=this.__k;

for(var S in Q){if(T[S]===undefined){throw new Error('The configuration key "'+S+'" in class "'+name+'" is not allowed!');
}
if(Q[S]==null){throw new Error("Invalid key '"+S+"' in interface '"+name+"'! The value is undefined/null!");
}
if(T[S]!==null&&typeof Q[S]!==T[S]){throw new Error('Invalid type of key "'+S+'" in interface "'+name+'"! The type of the key must be "'+T[S]+'"!');
}}var R=[s,r,o,v];

for(var i=0,l=R.length;i<l;i++){var S=R[i];

if(Q[S]!==undefined&&(Q[S] instanceof Array||Q[S] instanceof RegExp||Q[S] instanceof Date||Q[S].classname!==undefined)){throw new Error('Invalid key "'+S+'" in interface "'+name+'"! The value needs to be a map!');
}}if(Q.extend){for(var i=0,a=Q.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==B){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(Q.statics){for(var S in Q.statics){if(S.toUpperCase()!==S){throw new Error('Invalid key "'+S+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof Q.statics[S]){case m:case z:case n:break;
default:throw new Error('Invalid key "'+S+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,s){if(s){if(s.include&&!(s.include instanceof Array)){s.include=[s.include];
}if(qx.core.Variant.isSet(q,e)){this.__n(name,s);
}var u=s.statics?s.statics:{};
qx.Bootstrap.setDisplayNames(u,name);

for(var t in u){if(u[t] instanceof Function){u[t].$$mixin=u;
}}if(s.construct){u.$$constructor=s.construct;
qx.Bootstrap.setDisplayName(s.construct,name,k);
}
if(s.include){u.$$includes=s.include;
}
if(s.properties){u.$$properties=s.properties;
}
if(s.members){u.$$members=s.members;
qx.Bootstrap.setDisplayNames(s.members,name+m);
}
for(var t in u.$$members){if(u.$$members[t] instanceof Function){u.$$members[t].$$mixin=u;
}}
if(s.events){u.$$events=s.events;
}
if(s.destruct){u.$$destructor=s.destruct;
qx.Bootstrap.setDisplayName(s.destruct,name,d);
}}else{var u={};
}u.$$type=o;
u.name=name;
u.toString=this.genericToString;
u.basename=qx.Bootstrap.createNamespace(name,u);
this.$$registry[name]=u;
return u;
},checkCompatibility:function(B){var E=this.flatten(B);
var F=E.length;

if(F<2){return true;
}var I={};
var H={};
var G={};
var D;

for(var i=0;i<F;i++){D=E[i];

for(var C in D.events){if(G[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+G[C]+'" in member "'+C+'"!');
}G[C]=D.name;
}
for(var C in D.properties){if(I[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+I[C]+'" in property "'+C+'"!');
}I[C]=D.name;
}
for(var C in D.members){if(H[C]){throw new Error('Conflict between mixin "'+D.name+'" and "'+H[C]+'" in member "'+C+'"!');
}H[C]=D.name;
}}return true;
},isCompatible:function(J,K){var L=qx.Bootstrap.getMixins(K);
L.push(J);
return qx.Mixin.checkCompatibility(L);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(v){if(!v){return [];
}var w=v.concat();

for(var i=0,l=v.length;i<l;i++){if(v[i].$$includes){w.push.apply(w,this.flatten(v[i].$$includes));
}}return w;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__m:qx.core.Variant.select(q,{"on":{"include":r,"statics":r,"members":r,"properties":r,"events":r,"destruct":p,"construct":p},"default":null}),__n:qx.core.Variant.select(q,{"on":function(name,x){var A=this.__m;

for(var z in x){if(!A[z]){throw new Error('The configuration key "'+z+'" in mixin "'+name+'" is not allowed!');
}
if(x[z]==null){throw new Error('Invalid key "'+z+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(A[z]!==null&&typeof x[z]!==A[z]){throw new Error('Invalid type of key "'+z+'" in mixin "'+name+'"! The type of the key must be "'+A[z]+'"!');
}}var y=[b,g,c,f];

for(var i=0,l=y.length;i<l;i++){var z=y[i];

if(x[z]!==undefined&&(x[z] instanceof Array||x[z] instanceof RegExp||x[z] instanceof Date||x[z].classname!==undefined)){throw new Error('Invalid key "'+z+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(x.include){for(var i=0,a=x.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==o){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(x.include);
}},"default":function(){}})}});
})();
(function(){var dx=';',dw="on",dv='return this.',du="string",dt="qx.debug",ds="",dr="boolean",dq="setThemed",dp='!==undefined)',dn="this.",dc="set",db="resetThemed",da="setRuntime",cY="init",cX="qx.propertyDebugLevel",cW='else if(this.',cV="resetRuntime",cU="reset",cT="();",cS='else ',dE='if(this.',dF="return this.",dC="get",dD=";",dA="(a[",dB="value",dy=' of an instance of ',dz="refresh",dG=' is not (yet) ready!");',dH="]);",dg='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',df='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',di='value !== null && value.nodeType === 9 && value.documentElement',dh='value !== null && value.$$type === "Mixin"',dk='return init;',dj='var init=this.',dm='value !== null && value.nodeType === 1 && value.attributes',dl="var parent = this.getLayoutParent();",de="Error in property ",dd="property",bQ='qx.core.Assert.assertInstance(value, Date, msg) || true',bR="if (!parent) return;",bS=" in method ",bT='qx.core.Assert.assertInstance(value, Error, msg) || true',bU='Undefined value is not allowed!',bV="inherit",bW='Is invalid!',bX="MSIE 6.0",bY="': ",ca=" of class ",dL='value !== null && value.nodeType !== undefined',dK='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',dJ='qx.core.Assert.assertPositiveInteger(value, msg) || true',dI='if(init==qx.core.Property.$$inherit)init=null;',dP='value !== null && value.$$type === "Interface"',dO='var inherit=prop.$$inherit;',dN="var value = parent.",dM="$$useinit_",dR="(value);",dQ='Requires exactly one argument!',cz="$$runtime_",cA="$$user_",cx='qx.core.Assert.assertArray(value, msg) || true',cy='qx.core.Assert.assertPositiveNumber(value, msg) || true',cD=".prototype",cE="Boolean",cB='return value;',cC='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cv='Does not allow any arguments!',cw="()",ci="var a=arguments[0] instanceof Array?arguments[0]:arguments;",ch='value !== null && value.$$type === "Theme"',ck="())",cj='return null;',ce='qx.core.Assert.assertObject(value, msg) || true',cd='qx.core.Assert.assertString(value, msg) || true',cg="if (value===undefined) value = parent.",cf='value !== null && value.$$type === "Class"',cc='qx.core.Assert.assertFunction(value, msg) || true',cb=".",cJ="object",cK="$$init_",cL="$$theme_",cM='qx.core.Assert.assertMap(value, msg) || true',cF="qx.aspects",cG='qx.core.Assert.assertNumber(value, msg) || true',cH='Null value is not allowed!',cI='qx.core.Assert.assertInteger(value, msg) || true',cN="rv:1.8.1",cO="shorthand",cs='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cr='value !== null && value.type !== undefined',cq='value !== null && value.document',cp='throw new Error("Property ',co="(!this.",cn='qx.core.Assert.assertBoolean(value, msg) || true',cm="toggle",cl="$$inherit_",cu=" with incoming value '",ct="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cP="qx.core.Property",cQ="is",cR='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cP,{statics:{__o:{"Boolean":cn,"String":cd,"Number":cG,"Integer":cI,"PositiveNumber":cy,"PositiveInteger":dJ,"Error":bT,"RegExp":cs,"Object":ce,"Array":cx,"Map":cM,"Function":cc,"Date":bQ,"Node":dL,"Element":dm,"Document":di,"Window":cq,"Event":cr,"Class":cf,"Mixin":dh,"Interface":dP,"Theme":ch,"Color":dg,"Decorator":dK,"Font":df},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bV,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:du,dereference:dr,inheritable:dr,nullable:dr,themeable:dr,refine:dr,init:null,apply:du,event:du,check:null,transform:du,deferredInit:dr,validate:null},$$allowedGroupKeys:{name:du,group:cJ,mode:du,themeable:dr},$$inheritable:{},__q:function(bz){var bA=this.__r(bz);

if(!bA.length){var bB=qx.lang.Function.empty;
}else{bB=this.__s(bA);
}bz.prototype.$$refreshInheritables=bB;
},__r:function(bw){var by=[];

while(bw){var bx=bw.$$properties;

if(bx){for(var name in this.$$inheritable){if(bx[name]&&bx[name].inheritable){by.push(name);
}}}bw=bw.superclass;
}return by;
},__s:function(f){var k=this.$$store.inherit;
var j=this.$$store.init;
var h=this.$$method.refresh;
var g=[dl,bR];

for(var i=0,l=f.length;i<l;i++){var name=f[i];
g.push(dN,k[name],dD,cg,j[name],dD,dn,h[name],dR);
}return new Function(g.join(ds));
},attachRefreshInheritables:function(z){z.prototype.$$refreshInheritables=function(){qx.core.Property.__q(z);
return this.$$refreshInheritables();
};
},attachMethods:function(dS,name,dT){dT.group?this.__t(dS,dT,name):this.__u(dS,dT,name);
},__t:function(bD,bE,name){var bL=qx.Bootstrap.firstUp(name);
var bK=bD.prototype;
var bM=bE.themeable===true;

if(qx.core.Variant.isSet(dt,dw)){if(qx.core.Setting.get(cX)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var bN=[];
var bH=[];

if(bM){var bF=[];
var bJ=[];
}var bI=ci;
bN.push(bI);

if(bM){bF.push(bI);
}
if(bE.mode==cO){var bG=ct;
bN.push(bG);

if(bM){bF.push(bG);
}}
for(var i=0,a=bE.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(dt,dw)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}bN.push(dn,this.$$method.set[a[i]],dA,i,dH);
bH.push(dn,this.$$method.reset[a[i]],cT);

if(bM){if(qx.core.Variant.isSet(dt,dw)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}bF.push(dn,this.$$method.setThemed[a[i]],dA,i,dH);
bJ.push(dn,this.$$method.resetThemed[a[i]],cT);
}}this.$$method.set[name]=dc+bL;
bK[this.$$method.set[name]]=new Function(bN.join(ds));
this.$$method.reset[name]=cU+bL;
bK[this.$$method.reset[name]]=new Function(bH.join(ds));

if(bM){this.$$method.setThemed[name]=dq+bL;
bK[this.$$method.setThemed[name]]=new Function(bF.join(ds));
this.$$method.resetThemed[name]=db+bL;
bK[this.$$method.resetThemed[name]]=new Function(bJ.join(ds));
}},__u:function(p,q,name){var s=qx.Bootstrap.firstUp(name);
var u=p.prototype;

if(qx.core.Variant.isSet(dt,dw)){if(qx.core.Setting.get(cX)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(q.dereference===undefined&&typeof q.check===du){q.dereference=this.__v(q.check);
}var t=this.$$method;
var r=this.$$store;
r.runtime[name]=cz+name;
r.user[name]=cA+name;
r.theme[name]=cL+name;
r.init[name]=cK+name;
r.inherit[name]=cl+name;
r.useinit[name]=dM+name;
t.get[name]=dC+s;
u[t.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,p,name,dC);
};
t.set[name]=dc+s;
u[t.set[name]]=function(bO){return qx.core.Property.executeOptimizedSetter(this,p,name,dc,arguments);
};
t.reset[name]=cU+s;
u[t.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,cU);
};

if(q.inheritable||q.apply||q.event||q.deferredInit){t.init[name]=cY+s;
u[t.init[name]]=function(V){return qx.core.Property.executeOptimizedSetter(this,p,name,cY,arguments);
};
}
if(q.inheritable){t.refresh[name]=dz+s;
u[t.refresh[name]]=function(bP){return qx.core.Property.executeOptimizedSetter(this,p,name,dz,arguments);
};
}t.setRuntime[name]=da+s;
u[t.setRuntime[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,p,name,da,arguments);
};
t.resetRuntime[name]=cV+s;
u[t.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,cV);
};

if(q.themeable){t.setThemed[name]=dq+s;
u[t.setThemed[name]]=function(dU){return qx.core.Property.executeOptimizedSetter(this,p,name,dq,arguments);
};
t.resetThemed[name]=db+s;
u[t.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,p,name,db);
};
}
if(q.check===cE){u[cm+s]=new Function(dF+t.set[name]+co+t.get[name]+ck);
u[cQ+s]=new Function(dF+t.get[name]+cw);
}},__v:function(ei){return !!this.__p[ei];
},__w:function(bs){return this.__p[bs]||qx.Bootstrap.classIsDefined(bs)||(qx.Interface&&qx.Interface.isDefined(bs));
},__x:{0:cR,1:dQ,2:bU,3:cv,4:cH,5:bW},error:function(dV,dW,dX,dY,ea){var eb=dV.constructor.classname;
var ec=de+dX+ca+eb+bS+this.$$method[dY][dX]+cu+ea+bY;
throw new Error(ec+(this.__x[dW]||"Unknown reason: "+dW));
},__y:function(P,Q,name,R,S,T){var U=this.$$method[R][name];
if(qx.core.Variant.isSet(dt,dw)){if(qx.core.Setting.get(cX)>1){qx.Bootstrap.debug("Code["+this.$$method[R][name]+"]: "+S.join(""));
}try{Q[U]=new Function(dB,S.join(ds));
}catch(ed){throw new Error("Malformed generated code to unwrap method: "+this.$$method[R][name]+"\n"+S.join(""));
}}else{Q[U]=new Function(dB,S.join(ds));
}if(qx.core.Variant.isSet(cF,dw)){Q[U]=qx.core.Aspect.wrap(P.classname+cb+U,Q[U],dd);
}qx.Bootstrap.setDisplayName(Q[U],P.classname+cD,U);
if(T===undefined){return P[U]();
}else if(qx.core.Variant.isSet(dt,dw)){return P[U].apply(P,T);
}else{return P[U](T[0]);
}},executeOptimizedGetter:function(bl,bm,name,bn){var bp=bm.$$properties[name];
var br=bm.prototype;
var bo=[];
var bq=this.$$store;
bo.push(dE,bq.runtime[name],dp);
bo.push(dv,bq.runtime[name],dx);

if(bp.inheritable){bo.push(cW,bq.inherit[name],dp);
bo.push(dv,bq.inherit[name],dx);
bo.push(cS);
}bo.push(dE,bq.user[name],dp);
bo.push(dv,bq.user[name],dx);

if(bp.themeable){bo.push(cW,bq.theme[name],dp);
bo.push(dv,bq.theme[name],dx);
}
if(bp.deferredInit&&bp.init===undefined){bo.push(cW,bq.init[name],dp);
bo.push(dv,bq.init[name],dx);
}bo.push(cS);

if(bp.init!==undefined){if(bp.inheritable){bo.push(dj,bq.init[name],dx);

if(bp.nullable){bo.push(dI);
}else if(bp.init!==undefined){bo.push(dv,bq.init[name],dx);
}else{bo.push(cC,name,dy,bm.classname,dG);
}bo.push(dk);
}else{bo.push(dv,bq.init[name],dx);
}}else if(bp.inheritable||bp.nullable){bo.push(cj);
}else{bo.push(cp,name,dy,bm.classname,dG);
}return this.__y(bl,br,name,bn,bo);
},executeOptimizedSetter:function(bb,bc,name,bd,be){var bj=bc.$$properties[name];
var bi=bc.prototype;
var bg=[];
var bf=bd===dc||bd===dq||bd===da||(bd===cY&&bj.init===undefined);
var bh=bj.apply||bj.event||bj.inheritable;
var bk=this.__z(bd,name);
this.__A(bg,bj,name,bd,bf);

if(bf){this.__B(bg,bc,bj,name);
}
if(bh){this.__C(bg,bf,bk,bd);
}
if(bj.inheritable){bg.push(dO);
}
if(qx.core.Variant.isSet(dt,dw)){if(bf){this.__D(bg,bj,bc,name,bd);
}}
if(!bh){this.__E(bg,name,bd,bf);
}else{this.__F(bg,bj,name,bd,bf);
}
if(bj.inheritable){this.__G(bg,bj,name,bd);
}else if(bh){this.__H(bg,bj,name,bd);
}
if(bh){this.__I(bg,bj,name);
if(bj.inheritable&&bi._getChildren){this.__J(bg,name);
}}if(bf){bg.push(cB);
}return this.__y(bb,bi,name,bd,bg,be);
},__z:function(F,name){if(F===da||F===cV){var G=this.$$store.runtime[name];
}else if(F===dq||F===db){G=this.$$store.theme[name];
}else if(F===cY){G=this.$$store.init[name];
}else{G=this.$$store.user[name];
}return G;
},__A:function(v,w,name,x,y){if(qx.core.Variant.isSet("qx.debug","on")){v.push('var prop=qx.core.Property;');

if(x==="init"){v.push('if(this.$$initialized)prop.error(this,0,"',name,'","',x,'",value);');
}
if(x==="refresh"){}else if(y){v.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',x,'",value);');
v.push('if(value===undefined)prop.error(this,2,"',name,'","',x,'",value);');
}else{v.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',x,'",value);');
}}else{if(!w.nullable||w.check||w.inheritable){v.push('var prop=qx.core.Property;');
}if(x==="set"){v.push('if(value===undefined)prop.error(this,2,"',name,'","',x,'",value);');
}}},__B:function(bt,bu,bv,name){if(bv.transform){bt.push('value=this.',bv.transform,'(value);');
}if(bv.validate){if(typeof bv.validate==="string"){bt.push('this.',bv.validate,'(value);');
}else if(bv.validate instanceof Function){bt.push(bu.classname,'.$$properties.',name);
bt.push('.validate.call(this, value);');
}}},__C:function(H,I,J,K){var L=(K==="reset"||K==="resetThemed"||K==="resetRuntime");

if(I){H.push('if(this.',J,'===value)return value;');
}else if(L){H.push('if(this.',J,'===undefined)return;');
}},__D:qx.core.Variant.select("qx.debug",{"on":function(W,X,Y,name,ba){if(!X.nullable){W.push('if(value===null)prop.error(this,4,"',name,'","',ba,'",value);');
}if(X.check!==undefined){W.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+Y.classname+'\'";');
if(X.nullable){W.push('if(value!==null)');
}if(X.inheritable){W.push('if(value!==inherit)');
}W.push('if(');

if(this.__o[X.check]!==undefined){W.push('!(',this.__o[X.check],')');
}else if(qx.Class.isDefined(X.check)){W.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',X.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(X.check)){W.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',X.check,'"), msg)');
}else if(typeof X.check==="function"){W.push('!',Y.classname,'.$$properties.',name);
W.push('.check.call(this, value)');
}else if(typeof X.check==="string"){W.push('!(',X.check,')');
}else if(X.check instanceof Array){W.push('qx.core.Assert.assertInArray(value, ',Y.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+Y.classname);
}W.push(')prop.error(this,5,"',name,'","',ba,'",value);');
}},"off":undefined}),__E:function(m,name,n,o){if(n==="setRuntime"){m.push('this.',this.$$store.runtime[name],'=value;');
}else if(n==="resetRuntime"){m.push('if(this.',this.$$store.runtime[name],'!==undefined)');
m.push('delete this.',this.$$store.runtime[name],';');
}else if(n==="set"){m.push('this.',this.$$store.user[name],'=value;');
}else if(n==="reset"){m.push('if(this.',this.$$store.user[name],'!==undefined)');
m.push('delete this.',this.$$store.user[name],';');
}else if(n==="setThemed"){m.push('this.',this.$$store.theme[name],'=value;');
}else if(n==="resetThemed"){m.push('if(this.',this.$$store.theme[name],'!==undefined)');
m.push('delete this.',this.$$store.theme[name],';');
}else if(n==="init"&&o){m.push('this.',this.$$store.init[name],'=value;');
}},__F:function(ee,ef,name,eg,eh){if(ef.inheritable){ee.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{ee.push('var computed, old;');
}ee.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(eg==="setRuntime"){ee.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(eg==="resetRuntime"){ee.push('delete this.',this.$$store.runtime[name],';');
ee.push('if(this.',this.$$store.user[name],'!==undefined)');
ee.push('computed=this.',this.$$store.user[name],';');
ee.push('else if(this.',this.$$store.theme[name],'!==undefined)');
ee.push('computed=this.',this.$$store.theme[name],';');
ee.push('else if(this.',this.$$store.init[name],'!==undefined){');
ee.push('computed=this.',this.$$store.init[name],';');
ee.push('this.',this.$$store.useinit[name],'=true;');
ee.push('}');
}else{ee.push('old=computed=this.',this.$$store.runtime[name],';');
if(eg==="set"){ee.push('this.',this.$$store.user[name],'=value;');
}else if(eg==="reset"){ee.push('delete this.',this.$$store.user[name],';');
}else if(eg==="setThemed"){ee.push('this.',this.$$store.theme[name],'=value;');
}else if(eg==="resetThemed"){ee.push('delete this.',this.$$store.theme[name],';');
}else if(eg==="init"&&eh){ee.push('this.',this.$$store.init[name],'=value;');
}}ee.push('}');
ee.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(eg==="set"){if(!ef.inheritable){ee.push('old=this.',this.$$store.user[name],';');
}ee.push('computed=this.',this.$$store.user[name],'=value;');
}else if(eg==="reset"){if(!ef.inheritable){ee.push('old=this.',this.$$store.user[name],';');
}ee.push('delete this.',this.$$store.user[name],';');
ee.push('if(this.',this.$$store.runtime[name],'!==undefined)');
ee.push('computed=this.',this.$$store.runtime[name],';');
ee.push('if(this.',this.$$store.theme[name],'!==undefined)');
ee.push('computed=this.',this.$$store.theme[name],';');
ee.push('else if(this.',this.$$store.init[name],'!==undefined){');
ee.push('computed=this.',this.$$store.init[name],';');
ee.push('this.',this.$$store.useinit[name],'=true;');
ee.push('}');
}else{if(eg==="setRuntime"){ee.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ef.inheritable){ee.push('computed=this.',this.$$store.user[name],';');
}else{ee.push('old=computed=this.',this.$$store.user[name],';');
}if(eg==="setThemed"){ee.push('this.',this.$$store.theme[name],'=value;');
}else if(eg==="resetThemed"){ee.push('delete this.',this.$$store.theme[name],';');
}else if(eg==="init"&&eh){ee.push('this.',this.$$store.init[name],'=value;');
}}ee.push('}');
if(ef.themeable){ee.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!ef.inheritable){ee.push('old=this.',this.$$store.theme[name],';');
}
if(eg==="setRuntime"){ee.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(eg==="set"){ee.push('computed=this.',this.$$store.user[name],'=value;');
}else if(eg==="setThemed"){ee.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(eg==="resetThemed"){ee.push('delete this.',this.$$store.theme[name],';');
ee.push('if(this.',this.$$store.init[name],'!==undefined){');
ee.push('computed=this.',this.$$store.init[name],';');
ee.push('this.',this.$$store.useinit[name],'=true;');
ee.push('}');
}else if(eg==="init"){if(eh){ee.push('this.',this.$$store.init[name],'=value;');
}ee.push('computed=this.',this.$$store.theme[name],';');
}else if(eg==="refresh"){ee.push('computed=this.',this.$$store.theme[name],';');
}ee.push('}');
}ee.push('else if(this.',this.$$store.useinit[name],'){');

if(!ef.inheritable){ee.push('old=this.',this.$$store.init[name],';');
}
if(eg==="init"){if(eh){ee.push('computed=this.',this.$$store.init[name],'=value;');
}else{ee.push('computed=this.',this.$$store.init[name],';');
}}else if(eg==="set"||eg==="setRuntime"||eg==="setThemed"||eg==="refresh"){ee.push('delete this.',this.$$store.useinit[name],';');

if(eg==="setRuntime"){ee.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(eg==="set"){ee.push('computed=this.',this.$$store.user[name],'=value;');
}else if(eg==="setThemed"){ee.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(eg==="refresh"){ee.push('computed=this.',this.$$store.init[name],';');
}}ee.push('}');
if(eg==="set"||eg==="setRuntime"||eg==="setThemed"||eg==="init"){ee.push('else{');

if(eg==="setRuntime"){ee.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(eg==="set"){ee.push('computed=this.',this.$$store.user[name],'=value;');
}else if(eg==="setThemed"){ee.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(eg==="init"){if(eh){ee.push('computed=this.',this.$$store.init[name],'=value;');
}else{ee.push('computed=this.',this.$$store.init[name],';');
}ee.push('this.',this.$$store.useinit[name],'=true;');
}ee.push('}');
}},__G:function(b,c,name,d){b.push('if(computed===undefined||computed===inherit){');

if(d==="refresh"){b.push('computed=value;');
}else{b.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}b.push('if((computed===undefined||computed===inherit)&&');
b.push('this.',this.$$store.init[name],'!==undefined&&');
b.push('this.',this.$$store.init[name],'!==inherit){');
b.push('computed=this.',this.$$store.init[name],';');
b.push('this.',this.$$store.useinit[name],'=true;');
b.push('}else{');
b.push('delete this.',this.$$store.useinit[name],';}');
b.push('}');
b.push('if(old===computed)return value;');
b.push('if(computed===inherit){');
b.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
b.push('}');
b.push('else if(computed===undefined)');
b.push('delete this.',this.$$store.inherit[name],';');
b.push('else this.',this.$$store.inherit[name],'=computed;');
b.push('var backup=computed;');
if(c.init!==undefined&&d!=="init"){b.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{b.push('if(old===undefined)old=null;');
}b.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(M,N,name,O){if(O!=="set"&&O!=="setRuntime"&&O!=="setThemed"){M.push('if(computed===undefined)computed=null;');
}M.push('if(old===computed)return value;');
if(N.init!==undefined&&O!=="init"){M.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{M.push('if(old===undefined)old=null;');
}},__I:function(D,E,name){if(E.apply){D.push('this.',E.apply,'(computed, old, "',name,'");');
}if(E.event){D.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",E.event,"')){","reg.fireEvent(this, '",E.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(bC,name){bC.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
bC.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
bC.push('}');
}},defer:function(A){var C=navigator.userAgent.indexOf(bX)!=-1;
var B=navigator.userAgent.indexOf(cN)!=-1;
if(C||B){A.__v=A.__w;
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
(function(){var cd="on",cc="qx.debug",cb="qx.aspects",ca=".",bY="static",bX="[Class ",bW="]",bV="abstract",bU="constructor",bT="extend",bQ="qx.Class",bS="singleton",bR='Assumed static class because no "extend" key was found. ';
qx.Bootstrap.define(bQ,{statics:{define:function(name,H){if(!H){var H={};
}if(H.include&&!(H.include instanceof Array)){H.include=[H.include];
}if(H.implement&&!(H.implement instanceof Array)){H.implement=[H.implement];
}var I=false;

if(!H.hasOwnProperty(bT)&&!H.type){H.type=bY;
I=true;
}if(qx.core.Variant.isSet(cc,cd)){try{this.__M(name,H);
}catch(ch){if(I){ch.message=bR+ch.message;
}throw ch;
}}var J=this.__O(name,H.type,H.extend,H.statics,H.construct,H.destruct,H.include);
if(H.extend){if(H.properties){this.__Q(J,H.properties,true);
}if(H.members){this.__S(J,H.members,true,true,false);
}if(H.events){this.__P(J,H.events,true);
}if(H.include){for(var i=0,l=H.include.length;i<l;i++){this.__W(J,H.include[i],false);
}}}if(H.settings){for(var K in H.settings){qx.core.Setting.define(K,H.settings[K]);
}}if(H.variants){for(var K in H.variants){qx.core.Variant.define(K,H.variants[K].allowedValues,H.variants[K].defaultValue);
}}if(H.implement){for(var i=0,l=H.implement.length;i<l;i++){this.__U(J,H.implement[i]);
}}
if(qx.core.Variant.isSet(cc,cd)){this.__N(J);
}if(H.defer){H.defer.self=J;
H.defer(J,J.prototype,{add:function(name,cp){var cq={};
cq[name]=cp;
qx.Class.__Q(J,cq,true);
}});
}return J;
},undefine:function(name){delete this.$$registry[name];
var bN=name.split(ca);
var bP=[window];

for(var i=0;i<bN.length;i++){bP.push(bP[i][bN[i]]);
}for(var i=bP.length-1;i>=1;i--){var bO=bP[i];
var parent=bP[i-1];

if(qx.Bootstrap.isFunction(bO)||qx.Bootstrap.objectGetLength(bO)===0){delete parent[bN[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(F,G){if(qx.core.Variant.isSet(cc,cd)){if(!G){throw new Error("The mixin to include into class '"+F.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(G,F);
}qx.Class.__W(F,G,false);
},patch:function(bb,bc){if(qx.core.Variant.isSet(cc,cd)){if(!bc){throw new Error("The mixin to patch class '"+bb.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bc,bb);
}qx.Class.__W(bb,bc,true);
},isSubClassOf:function(Y,ba){if(!Y){return false;
}
if(Y==ba){return true;
}
if(Y.prototype instanceof ba){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(x){var y=[];

while(x){if(x.$$properties){y.push.apply(y,qx.Bootstrap.getKeys(x.$$properties));
}x=x.superclass;
}return y;
},getByProperty:function(j,name){while(j){if(j.$$properties&&j.$$properties[name]){return j;
}j=j.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(v,w){return v.$$includes&&v.$$includes.indexOf(w)!==-1;
},getByMixin:function(s,t){var u,i,l;

while(s){if(s.$$includes){u=s.$$flatIncludes;

for(i=0,l=u.length;i<l;i++){if(u[i]===t){return s;
}}}s=s.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bf,bg){return !!this.getByMixin(bf,bg);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(ci){var cj=[];

while(ci){if(ci.$$implements){cj.push.apply(cj,ci.$$flatImplements);
}ci=ci.superclass;
}return cj;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bs,bt){var bu=bs.constructor;

if(this.hasInterface(bu,bt)){return true;
}
try{qx.Interface.assertObject(bs,bt);
return true;
}catch(ck){}
try{qx.Interface.assert(bu,bt,false);
return true;
}catch(B){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bX+this.classname+bW;
},$$registry:qx.Bootstrap.$$registry,__K:qx.core.Variant.select("qx.debug",{"on":{"type":"string","extend":"function","implement":"object","include":"object","construct":"function","statics":"object","properties":"object","members":"object","settings":"object","variants":"object","events":"object","defer":"function","destruct":"function"},"default":null}),__L:qx.core.Variant.select("qx.debug",{"on":{"type":"string","statics":"object","settings":"object","variants":"object","defer":"function"},"default":null}),__M:qx.core.Variant.select("qx.debug",{"on":function(name,cl){if(cl.type&&!(cl.type==="static"||cl.type==="abstract"||cl.type==="singleton")){throw new Error('Invalid type "'+cl.type+'" definition for class "'+name+'"!');
}if(cl.type&&cl.type!=="static"&&!cl.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var co=cl.type==="static"?this.__L:this.__K;

for(var cn in cl){if(!co[cn]){throw new Error('The configuration key "'+cn+'" in class "'+name+'" is not allowed!');
}
if(cl[cn]==null){throw new Error('Invalid key "'+cn+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof cl[cn]!==co[cn]){throw new Error('Invalid type of key "'+cn+'" in class "'+name+'"! The type of the key must be "'+co[cn]+'"!');
}}var cm=["statics","properties","members","settings","variants","events"];

for(var i=0,l=cm.length;i<l;i++){var cn=cm[i];

if(cl[cn]!==undefined&&(cl[cn].$$hash!==undefined||!qx.Bootstrap.isObject(cl[cn]))){throw new Error('Invalid key "'+cn+'" in class "'+name+'"! The value needs to be a map!');
}}if(cl.include){if(cl.include instanceof Array){for(var i=0,a=cl.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Mixin"){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(cl.implement){if(cl.implement instanceof Array){for(var i=0,a=cl.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Interface"){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(cl.include){try{qx.Mixin.checkCompatibility(cl.include);
}catch(ce){throw new Error('Error in include definition of class "'+name+'"! '+ce.message);
}}if(cl.settings){for(var cn in cl.settings){if(cn.substr(0,cn.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden setting "'+cn+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(cl.variants){for(var cn in cl.variants){if(cn.substr(0,cn.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden variant "'+cn+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__N:qx.core.Variant.select("qx.debug",{"on":function(p){var r=p.superclass;

while(r){if(r.$$classtype!=="abstract"){break;
}var q=r.$$implements;

if(q){for(var i=0;i<q.length;i++){qx.Interface.assert(p,q[i],true);
}}r=r.superclass;
}},"default":function(){}}),__O:function(name,L,M,N,O,P,Q){var T;

if(!M&&qx.core.Variant.isSet("qx.aspects","off")){T=N||{};
qx.Bootstrap.setDisplayNames(T,name);
}else{var T={};

if(M){if(!O){O=this.__X();
}
if(this.__ba(M,Q)){T=this.__bb(O,name,L);
}else{T=O;
}if(L==="singleton"){T.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(O,name,"constructor");
}if(N){qx.Bootstrap.setDisplayNames(N,name);
var U;

for(var i=0,a=qx.Bootstrap.getKeys(N),l=a.length;i<l;i++){U=a[i];
var R=N[U];

if(qx.core.Variant.isSet("qx.aspects","on")){if(R instanceof Function){R=qx.core.Aspect.wrap(name+"."+U,R,"static");
}T[U]=R;
}else{T[U]=R;
}}}}var S=qx.Bootstrap.createNamespace(name,T);
T.name=T.classname=name;
T.basename=S;
T.$$type="Class";

if(L){T.$$classtype=L;
}if(!T.hasOwnProperty("toString")){T.toString=this.genericToString;
}
if(M){qx.Bootstrap.extendClass(T,O,M,name,S);
if(P){if(qx.core.Variant.isSet("qx.aspects","on")){P=qx.core.Aspect.wrap(name,P,"destructor");
}T.$$destructor=P;
qx.Bootstrap.setDisplayName(P,name,"destruct");
}}this.$$registry[name]=T;
return T;
},__P:function(k,m,n){if(qx.core.Variant.isSet("qx.debug","on")){if(typeof m!=="object"||m instanceof Array){throw new Error(k.classname+": the events must be defined as map!");
}
for(var o in m){if(typeof m[o]!=="string"){throw new Error(k.classname+"/"+o+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(k.$$events&&n!==true){for(var o in m){if(k.$$events[o]!==undefined&&k.$$events[o]!==m[o]){throw new Error(k.classname+"/"+o+": the event value/type cannot be changed from "+k.$$events[o]+" to "+m[o]);
}}}}
if(k.$$events){for(var o in m){k.$$events[o]=m[o];
}}else{k.$$events=m;
}},__Q:function(bn,bo,bp){var bq;

if(bp===undefined){bp=false;
}var br=bn.prototype;

for(var name in bo){bq=bo[name];
if(qx.core.Variant.isSet("qx.debug","on")){this.__R(bn,name,bq,bp);
}bq.name=name;
if(!bq.refine){if(bn.$$properties===undefined){bn.$$properties={};
}bn.$$properties[name]=bq;
}if(bq.init!==undefined){bn.prototype["$$init_"+name]=bq.init;
}if(bq.event!==undefined){var event={};
event[bq.event]="qx.event.type.Data";
this.__P(bn,event,bp);
}if(bq.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!br.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bn);
}}
if(!bq.refine){qx.core.Property.attachMethods(bn,name,bq);
}}},__R:qx.core.Variant.select("qx.debug",{"on":function(cs,name,ct,cu){var cw=this.hasProperty(cs,name);

if(cw){var cv=this.getPropertyDefinition(cs,name);

if(ct.refine&&cv.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+cs.classname+"'.");
}}
if(!cw&&ct.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+cs.classname+"'!");
}
if(cw&&!cu){throw new Error("Class "+cs.classname+" already has a property: "+name+"!");
}
if(cw&&cu){if(!ct.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+cs.classname+', original class: '+this.getByProperty(cs,name).classname+'.');
}
for(var cx in ct){if(cx!=="init"&&cx!=="refine"){throw new Error("Class "+cs.classname+" could not refine property: "+name+"! Key: "+cx+" could not be refined!");
}}}var cy=ct.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cx in ct){if(cy[cx]===undefined){throw new Error('The configuration key "'+cx+'" of property "'+name+'" in class "'+cs.classname+'" is not allowed!');
}
if(ct[cx]===undefined){throw new Error('Invalid key "'+cx+'" of property "'+name+'" in class "'+cs.classname+'"! The value is undefined: '+ct[cx]);
}
if(cy[cx]!==null&&typeof ct[cx]!==cy[cx]){throw new Error('Invalid type of key "'+cx+'" of property "'+name+'" in class "'+cs.classname+'"! The type of the key must be "'+cy[cx]+'"!');
}}
if(ct.transform!=null){if(!(typeof ct.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+cs.classname+'"! Needs to be a String.');
}}
if(ct.check!=null){if(!qx.Bootstrap.isString(ct.check)&&!qx.Bootstrap.isArray(ct.check)&&!qx.Bootstrap.isFunction(ct.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+cs.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__S:function(bv,bw,bx,by,bz){var bA=bv.prototype;
var bC,bB;
qx.Bootstrap.setDisplayNames(bw,bv.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bw),l=a.length;i<l;i++){bC=a[i];
bB=bw[bC];

if(qx.core.Variant.isSet("qx.debug","on")){if(bA[bC]!==undefined&&bC.charAt(0)=="_"&&bC.charAt(1)=="_"){throw new Error('Overwriting private member "'+bC+'" of Class "'+bv.classname+'" is not allowed!');
}
if(bx!==true&&bA.hasOwnProperty(bC)){throw new Error('Overwriting member "'+bC+'" of Class "'+bv.classname+'" is not allowed!');
}}if(by!==false&&bB instanceof Function&&bB.$$type==null){if(bz==true){bB=this.__T(bB,bA[bC]);
}else{if(bA[bC]){bB.base=bA[bC];
}bB.self=bv;
}
if(qx.core.Variant.isSet("qx.aspects","on")){bB=qx.core.Aspect.wrap(bv.classname+"."+bC,bB,"member");
}}bA[bC]=bB;
}},__T:function(z,A){if(A){return function(){var cg=z.base;
z.base=A;
var cf=z.apply(this,arguments);
z.base=cg;
return cf;
};
}else{return z;
}},__U:function(C,D){if(qx.core.Variant.isSet("qx.debug","on")){if(!C||!D){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(C,D)){throw new Error('Interface "'+D.name+'" is already used by Class "'+C.classname+'!');
}if(C.$$classtype!=="abstract"){qx.Interface.assert(C,D,true);
}}var E=qx.Interface.flatten([D]);

if(C.$$implements){C.$$implements.push(D);
C.$$flatImplements.push.apply(C.$$flatImplements,E);
}else{C.$$implements=[D];
C.$$flatImplements=E;
}},__V:function(bH){var name=bH.classname;
var bI=this.__bb(bH,name,bH.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bJ=a[i];
bI[bJ]=bH[bJ];
}bI.prototype=bH.prototype;
var bL=bH.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bL),l=a.length;i<l;i++){bJ=a[i];
var bM=bL[bJ];
if(bM&&bM.self==bH){bM.self=bI;
}}for(var bJ in this.$$registry){var bK=this.$$registry[bJ];

if(!bK){continue;
}
if(bK.base==bH){bK.base=bI;
}
if(bK.superclass==bH){bK.superclass=bI;
}
if(bK.$$original){if(bK.$$original.base==bH){bK.$$original.base=bI;
}
if(bK.$$original.superclass==bH){bK.$$original.superclass=bI;
}}}qx.Bootstrap.createNamespace(name,bI);
this.$$registry[name]=bI;
return bI;
},__W:function(bh,bi,bj){if(qx.core.Variant.isSet("qx.debug","on")){if(!bh||!bi){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bh,bi)){return;
}var bm=bh.$$original;

if(bi.$$constructor&&!bm){bh=this.__V(bh);
}var bl=qx.Mixin.flatten([bi]);
var bk;

for(var i=0,l=bl.length;i<l;i++){bk=bl[i];
if(bk.$$events){this.__P(bh,bk.$$events,bj);
}if(bk.$$properties){this.__Q(bh,bk.$$properties,bj);
}if(bk.$$members){this.__S(bh,bk.$$members,bj,bj,bj);
}}if(bh.$$includes){bh.$$includes.push(bi);
bh.$$flatIncludes.push.apply(bh.$$flatIncludes,bl);
}else{bh.$$includes=[bi];
bh.$$flatIncludes=bl;
}},__X:function(){function cr(){cr.base.apply(this,arguments);
}return cr;
},__Y:function(){return function(){};
},__ba:function(bD,bE){if(qx.core.Variant.isSet(cc,cd)){return true;
}if(bD&&bD.$$includes){var bF=bD.$$flatIncludes;

for(var i=0,l=bF.length;i<l;i++){if(bF[i].$$constructor){return true;
}}}if(bE){var bG=qx.Mixin.flatten(bE);

for(var i=0,l=bG.length;i<l;i++){if(bG[i].$$constructor){return true;
}}}return false;
},__bb:function(e,name,f){var h=function(){var X=h;

if(qx.core.Variant.isSet(cc,cd)){if(!(this instanceof X)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(f===bV){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(f===bS){if(!X.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var W=X.$$original.apply(this,arguments);
if(X.$$includes){var V=X.$$flatIncludes;

for(var i=0,l=V.length;i<l;i++){if(V[i].$$constructor){V[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(cc,cd)){if(this.classname===name){this.$$initialized=true;
}}return W;
};

if(qx.core.Variant.isSet(cb,cd)){var g=qx.core.Aspect.wrap(name,h,bU);
h.$$original=e;
h.constructor=g;
h=g;
}h.$$original=e;
e.wrapper=h;
return h;
}},defer:function(){if(qx.core.Variant.isSet(cb,cd)){for(var b in qx.Bootstrap.$$registry){var c=qx.Bootstrap.$$registry[b];

for(var d in c){if(c[d] instanceof Function){c[d]=qx.core.Aspect.wrap(b+ca+d,c[d],bY);
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
(function(){var ch="qx.debug",cg="on",cf="|bubble",ce="|capture",cd="|",cc="': ",cb="'",ca="",bY="_",bX="Invalid Target.",cG="Invalid event type.",cF="Invalid event target.",cE=" from the target '",cD="Invalid callback function",cC="unload",cB="Failed to remove event listener for id '",cA="Invalid context for callback.",cz="Invalid capture flag.",cy="Failed to add event listener for type '",cx="UNKNOWN_",co="capture",cp="qx.event.Manager",cm="Could not dispatch event '",cn="DOM_",ck="QX_",cl=" to the target '",ci="Failed to remove event listener for type '",cj="Invalid capture falg.",cq="__br",cr="c",ct="Invalid id type.",cs="' on target '",cv="WIN_",cu="Invalid event object.",cw="__bs";
qx.Class.define(cp,{extend:Object,construct:function(bO,bP){this.__bn=bO;
this.__bo=qx.core.ObjectRegistry.toHashCode(bO);
this.__bp=bP;
if(bO.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bO,cC,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bO,cC,arguments.callee);
self.dispose();
}));
}this.__bq={};
this.__br={};
this.__bs={};
this.__bt={};
},statics:{__bu:0,getNextUniqueId:function(){return (this.__bu++)+ca;
}},members:{__bp:null,__bq:null,__bs:null,__bv:null,__br:null,__bt:null,__bn:null,__bo:null,getWindow:function(){return this.__bn;
},getWindowId:function(){return this.__bo;
},getHandler:function(bm){var bn=this.__br[bm.classname];

if(bn){return bn;
}return this.__br[bm.classname]=new bm(this);
},getDispatcher:function(a){var b=this.__bs[a.classname];

if(b){return b;
}return this.__bs[a.classname]=new a(this,this.__bp);
},getListeners:function(s,t,u){var v=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);
var x=this.__bq[v];

if(!x){return null;
}var y=t+(u?ce:cf);
var w=x[y];
return w?w.concat():null;
},serializeListeners:function(cH){var cO=cH.$$hash||qx.core.ObjectRegistry.toHashCode(cH);
var cQ=this.__bq[cO];
var cM=[];

if(cQ){var cK,cP,cI,cL,cN;

for(var cJ in cQ){cK=cJ.indexOf(cd);
cP=cJ.substring(0,cK);
cI=cJ.charAt(cK+1)==cr;
cL=cQ[cJ];

for(var i=0,l=cL.length;i<l;i++){cN=cL[i];
cM.push({self:cN.context,handler:cN.handler,type:cP,capture:cI});
}}}return cM;
},toggleAttachedEvents:function(bd,be){var bj=bd.$$hash||qx.core.ObjectRegistry.toHashCode(bd);
var bl=this.__bq[bj];

if(bl){var bg,bk,bf,bh;

for(var bi in bl){bg=bi.indexOf(cd);
bk=bi.substring(0,bg);
bf=bi.charCodeAt(bg+1)===99;
bh=bl[bi];

if(be){this.__bw(bd,bk,bf);
}else{this.__bx(bd,bk,bf);
}}}},hasListener:function(k,m,n){if(qx.core.Variant.isSet(ch,cg)){if(k==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+k);
}}var o=k.$$hash||qx.core.ObjectRegistry.toHashCode(k);
var q=this.__bq[o];

if(!q){return false;
}var r=m+(n?ce:cf);
var p=q[r];
return p&&p.length>0;
},importListeners:function(cR,cS){if(qx.core.Variant.isSet(ch,cg)){if(cR==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+cR);
}}var cY=cR.$$hash||qx.core.ObjectRegistry.toHashCode(cR);
var da=this.__bq[cY]={};
var cV=qx.event.Manager;

for(var cT in cS){var cW=cS[cT];
var cX=cW.type+(cW.capture?ce:cf);
var cU=da[cX];

if(!cU){cU=da[cX]=[];
this.__bw(cR,cW.type,cW.capture);
}cU.push({handler:cW.listener,context:cW.self,unique:cW.unique||(cV.__bu++)+ca});
}},addListener:function(Q,R,S,self,T){if(qx.core.Variant.isSet(ch,cg)){var X=cy+R+cb+cl+Q.classname+cc;
qx.core.Assert.assertObject(Q,X+bX);
qx.core.Assert.assertString(R,X+cG);
qx.core.Assert.assertFunction(S,X+cD);

if(T!==undefined){qx.core.Assert.assertBoolean(T,cz);
}}var Y=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var bb=this.__bq[Y];

if(!bb){bb=this.__bq[Y]={};
}var W=R+(T?ce:cf);
var V=bb[W];

if(!V){V=bb[W]=[];
}if(V.length===0){this.__bw(Q,R,T);
}var ba=(qx.event.Manager.__bu++)+ca;
var U={handler:S,context:self,unique:ba};
V.push(U);
return W+cd+ba;
},findHandler:function(D,E){var O=false,H=false,P=false;
var N;

if(D.nodeType===1){O=true;
N=cn+D.tagName.toLowerCase()+bY+E;
}else if(D==this.__bn){H=true;
N=cv+E;
}else if(D.classname){P=true;
N=ck+D.classname+bY+E;
}else{N=cx+D+bY+E;
}var J=this.__bt;

if(J[N]){return J[N];
}var M=this.__bp.getHandlers();
var I=qx.event.IEventHandler;
var K,L,G,F;

for(var i=0,l=M.length;i<l;i++){K=M[i];
G=K.SUPPORTED_TYPES;

if(G&&!G[E]){continue;
}F=K.TARGET_CHECK;

if(F){if(!O&&F===I.TARGET_DOMNODE){continue;
}else if(!H&&F===I.TARGET_WINDOW){continue;
}else if(!P&&F===I.TARGET_OBJECT){continue;
}}L=this.getHandler(M[i]);

if(K.IGNORE_CAN_HANDLE||L.canHandleEvent(D,E)){J[N]=L;
return L;
}}return null;
},__bw:function(z,A,B){var C=this.findHandler(z,A);

if(C){C.registerEvent(z,A,B);
return;
}
if(qx.core.Variant.isSet(ch,cg)){qx.log.Logger.warn(this,"There is no event handler for the event '"+A+"' on target '"+z+"'!");
}},removeListener:function(bo,bp,bq,self,br){if(qx.core.Variant.isSet(ch,cg)){var bv=ci+bp+cb+cE+bo.classname+cc;
qx.core.Assert.assertObject(bo,bv+bX);
qx.core.Assert.assertString(bp,bv+cG);
qx.core.Assert.assertFunction(bq,bv+cD);

if(self!==undefined){qx.core.Assert.assertObject(self,cA);
}
if(br!==undefined){qx.core.Assert.assertBoolean(br,cj);
}}var bw=bo.$$hash||qx.core.ObjectRegistry.toHashCode(bo);
var bx=this.__bq[bw];

if(!bx){return false;
}var bs=bp+(br?ce:cf);
var bt=bx[bs];

if(!bt){return false;
}var bu;

for(var i=0,l=bt.length;i<l;i++){bu=bt[i];

if(bu.handler===bq&&bu.context===self){qx.lang.Array.removeAt(bt,i);

if(bt.length==0){this.__bx(bo,bp,br);
}return true;
}}return false;
},removeListenerById:function(bC,bD){if(qx.core.Variant.isSet(ch,cg)){var bJ=cB+bD+cb+cE+bC.classname+cc;
qx.core.Assert.assertObject(bC,bJ+bX);
qx.core.Assert.assertString(bD,bJ+ct);
}var bH=bD.split(cd);
var bM=bH[0];
var bE=bH[1].charCodeAt(0)==99;
var bL=bH[2];
var bK=bC.$$hash||qx.core.ObjectRegistry.toHashCode(bC);
var bN=this.__bq[bK];

if(!bN){return false;
}var bI=bM+(bE?ce:cf);
var bG=bN[bI];

if(!bG){return false;
}var bF;

for(var i=0,l=bG.length;i<l;i++){bF=bG[i];

if(bF.unique===bL){qx.lang.Array.removeAt(bG,i);

if(bG.length==0){this.__bx(bC,bM,bE);
}return true;
}}return false;
},removeAllListeners:function(bQ){var bU=bQ.$$hash||qx.core.ObjectRegistry.toHashCode(bQ);
var bW=this.__bq[bU];

if(!bW){return false;
}var bS,bV,bR;

for(var bT in bW){if(bW[bT].length>0){bS=bT.split(cd);
bV=bS[0];
bR=bS[1]===co;
this.__bx(bQ,bV,bR);
}}delete this.__bq[bU];
return true;
},deleteAllListeners:function(bc){delete this.__bq[bc];
},__bx:function(by,bz,bA){var bB=this.findHandler(by,bz);

if(bB){bB.unregisterEvent(by,bz,bA);
return;
}
if(qx.core.Variant.isSet(ch,cg)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bz+"' on target '"+by+"'!");
}},dispatchEvent:function(c,event){if(qx.core.Variant.isSet(ch,cg)){var h=cm+event+cs+c.classname+cc;
qx.core.Assert.assertNotUndefined(c,h+cF);
qx.core.Assert.assertNotNull(c,h+cF);
qx.core.Assert.assertInstance(event,qx.event.type.Event,h+cu);
}var j=event.getType();

if(!event.getBubbles()&&!this.hasListener(c,j)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(c);
}var g=this.__bp.getDispatchers();
var f;
var e=false;

for(var i=0,l=g.length;i<l;i++){f=this.getDispatcher(g[i]);
if(f.canDispatchEvent(c,event,j)){f.dispatchEvent(c,event,j);
e=true;
break;
}}
if(!e){if(qx.core.Variant.isSet(ch,cg)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+j+" on "+c);
}return true;
}var d=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !d;
},dispose:function(){this.__bp.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cq);
qx.util.DisposeUtil.disposeMap(this,cw);
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
(function(){var T="qx.debug",S="on",R="The second parameter must be an array.",Q="mshtml",P="The first parameter must be an array.",O="Parameter must be an array.",N="qx.client",M="[object Array]",L="qx.lang.Array",K="qx",I="number",J="string";
qx.Class.define(L,{statics:{toArray:function(u,v){return this.cast(u,Array,v);
},cast:function(c,d,e){if(c.constructor===d){return c;
}
if(qx.Class.hasInterface(c,qx.data.IListData)){var c=c.toArray();
}var f=new d;
if(qx.core.Variant.isSet(N,Q)){if(c.item){for(var i=e||0,l=c.length;i<l;i++){f.push(c[i]);
}return f;
}}if(Object.prototype.toString.call(c)===M&&e==null){f.push.apply(f,c);
}else{f.push.apply(f,Array.prototype.slice.call(c,e||0));
}return f;
},fromArguments:function(bq,br){return Array.prototype.slice.call(bq,br||0);
},fromCollection:function(g){if(qx.core.Variant.isSet(N,Q)){if(g.item){var h=[];

for(var i=0,l=g.length;i<l;i++){h[i]=g[i];
}return h;
}}return Array.prototype.slice.call(g,0);
},fromShortHand:function(r){var t=r.length;
var s=qx.lang.Array.clone(r);
switch(t){case 1:s[1]=s[2]=s[3]=s[0];
break;
case 2:s[2]=s[0];
case 3:s[3]=s[1];
}return s;
},clone:function(b){return b.concat();
},insertAt:function(p,q,i){p.splice(i,0,q);
return p;
},insertBefore:function(D,E,F){var i=D.indexOf(F);

if(i==-1){D.push(E);
}else{D.splice(i,0,E);
}return D;
},insertAfter:function(j,k,m){var i=j.indexOf(m);

if(i==-1||i==(j.length-1)){j.push(k);
}else{j.splice(i+1,0,k);
}return j;
},removeAt:function(a,i){return a.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(n,o){if(qx.core.Variant.isSet(T,S)){qx.core.Assert&&qx.core.Assert.assertArray(n,P);
qx.core.Assert&&qx.core.Assert.assertArray(o,R);
}Array.prototype.push.apply(n,o);
return n;
},exclude:function(bs,bt){if(qx.core.Variant.isSet(T,S)){qx.core.Assert&&qx.core.Assert.assertArray(bs,P);
qx.core.Assert&&qx.core.Assert.assertArray(bt,R);
}
for(var i=0,bv=bt.length,bu;i<bv;i++){bu=bs.indexOf(bt[i]);

if(bu!=-1){bs.splice(bu,1);
}}return bs;
},remove:function(bb,bc){var i=bb.indexOf(bc);

if(i!=-1){bb.splice(i,1);
return bc;
}},contains:function(B,C){return B.indexOf(C)!==-1;
},equals:function(w,x){var length=w.length;

if(length!==x.length){return false;
}
for(var i=0;i<length;i++){if(w[i]!==x[i]){return false;
}}return true;
},sum:function(z){var A=0;

for(var i=0,l=z.length;i<l;i++){A+=z[i];
}return A;
},max:function(U){if(qx.core.Variant.isSet(T,S)){qx.core.Assert&&qx.core.Assert.assertArray(U,O);
}var i,W=U.length,V=U[0];

for(i=1;i<W;i++){if(U[i]>V){V=U[i];
}}return V===undefined?null:V;
},min:function(X){if(qx.core.Variant.isSet(T,S)){qx.core.Assert&&qx.core.Assert.assertArray(X,O);
}var i,ba=X.length,Y=X[0];

for(i=1;i<ba;i++){if(X[i]<Y){Y=X[i];
}}return Y===undefined?null:Y;
},unique:function(bd){var bn=[],bf={},bi={},bk={};
var bj,be=0;
var bo=K+qx.lang.Date.now();
var bg=false,bm=false,bp=false;
for(var i=0,bl=bd.length;i<bl;i++){bj=bd[i];
if(bj===null){if(!bg){bg=true;
bn.push(bj);
}}else if(bj===undefined){}else if(bj===false){if(!bm){bm=true;
bn.push(bj);
}}else if(bj===true){if(!bp){bp=true;
bn.push(bj);
}}else if(typeof bj===J){if(!bf[bj]){bf[bj]=1;
bn.push(bj);
}}else if(typeof bj===I){if(!bi[bj]){bi[bj]=1;
bn.push(bj);
}}else{bh=bj[bo];

if(bh==null){bh=bj[bo]=be++;
}
if(!bk[bh]){bk[bh]=bj;
bn.push(bj);
}}}for(var bh in bk){try{delete bk[bh][bo];
}catch(H){try{bk[bh][bo]=null;
}catch(y){throw new Error("Cannot clean-up map entry doneObjects["+bh+"]["+bo+"]");
}}}return bn;
}}});
})();
(function(){var n="()",m="qx.debug",l=".",k=".prototype.",j="on",i="Invalid parameter 'func'.",h='anonymous()',g="Trying to call a bound function with a disposed object as context: ",f=" :: ",e="qx.lang.Function",d=".constructor()";
qx.Class.define(e,{statics:{getCaller:function(r){return r.caller?r.caller.callee:r.callee.caller;
},getName:function(v){if(v.displayName){return v.displayName;
}
if(v.$$original||v.wrapper||v.classname){return v.classname+d;
}
if(v.$$mixin){for(var x in v.$$mixin.$$members){if(v.$$mixin.$$members[x]==v){return v.$$mixin.name+k+x+n;
}}for(var x in v.$$mixin){if(v.$$mixin[x]==v){return v.$$mixin.name+l+x+n;
}}}
if(v.self){var y=v.self.constructor;

if(y){for(var x in y.prototype){if(y.prototype[x]==v){return y.classname+k+x+n;
}}for(var x in y){if(y[x]==v){return y.classname+l+x+n;
}}}}var w=v.toString().match(/function\s*(\w*)\s*\(.*/);

if(w&&w.length>=1&&w[1]){return w[1]+n;
}return h;
},globalEval:function(t){if(window.execScript){return window.execScript(t);
}else{return eval.call(window,t);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(z,A){if(qx.core.Variant.isSet(m,j)){qx.core.Assert&&qx.core.Assert.assertFunction(z,i);
}if(!A){return z;
}if(!(A.self||A.args||A.delay!=null||A.periodical!=null||A.attempt)){return z;
}return function(event){if(qx.core.Variant.isSet(m,j)){if(A.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(A.self.isDisposed(),g+A.self.toString()+f+qx.lang.Function.getName(z));
}}var p=qx.lang.Array.fromArguments(arguments);
if(A.args){p=A.args.concat(p);
}
if(A.delay||A.periodical){var o=qx.event.GlobalError.observeMethod(function(){return z.apply(A.self||this,p);
});

if(A.delay){return window.setTimeout(o,A.delay);
}
if(A.periodical){return window.setInterval(o,A.periodical);
}}else if(A.attempt){var q=false;

try{q=z.apply(A.self||this,p);
}catch(u){}return q;
}else{return z.apply(A.self||this,p);
}};
},bind:function(E,self,F){return this.create(E,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(I,J){return this.create(I,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);
};
}else{var D=qx.lang.Array.fromArguments(arguments,2);
return function(event){var s=[event||window.event];
s.push.apply(s,D);
B.apply(self||this,s);
};
}},attempt:function(G,self,H){return this.create(G,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(K,L,self,M){return this.create(K,{delay:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(a,b,self,c){return this.create(a,{periodical:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var r="qx.debug",q="on",p="Invalid event target.",o="Invalid event dispatcher!",n="': ",m="Invalid event handler.",l="' on target '",k="Could not fire event '",j="undefined",i="qx.event.Registration";
qx.Class.define(i,{statics:{__by:{},getManager:function(A){if(A==null){if(qx.core.Variant.isSet(r,q)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}A=window;
}else if(A.nodeType){A=qx.dom.Node.getWindow(A);
}else if(!qx.dom.Node.isWindow(A)){A=window;
}var C=A.$$hash||qx.core.ObjectRegistry.toHashCode(A);
var B=this.__by[C];

if(!B){B=new qx.event.Manager(A,this);
this.__by[C]=B;
}return B;
},removeManager:function(s){var t=s.getWindowId();
delete this.__by[t];
},addListener:function(w,x,y,self,z){return this.getManager(w).addListener(w,x,y,self,z);
},removeListener:function(P,Q,R,self,S){return this.getManager(P).removeListener(P,Q,R,self,S);
},removeListenerById:function(G,H){return this.getManager(G).removeListenerById(G,H);
},removeAllListeners:function(V){return this.getManager(V).removeAllListeners(V);
},deleteAllListeners:function(D){var E=D.$$hash;

if(E){this.getManager(D).deleteAllListeners(E);
}},hasListener:function(I,J,K){return this.getManager(I).hasListener(I,J,K);
},serializeListeners:function(T){return this.getManager(T).serializeListeners(T);
},createEvent:function(L,M,N){if(qx.core.Variant.isSet(r,q)){if(arguments.length>1&&M===undefined){throw new Error("Create event of type "+L+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(M==null){M=qx.event.type.Event;
}var O=qx.event.Pool.getInstance().getObject(M);
N?O.init.apply(O,N):O.init();
if(L){O.setType(L);
}return O;
},dispatchEvent:function(U,event){return this.getManager(U).dispatchEvent(U,event);
},fireEvent:function(c,d,e,f){if(qx.core.Variant.isSet(r,q)){if(arguments.length>2&&e===undefined&&f!==undefined){throw new Error("Create event of type "+d+" with undefined class. Please use null to explicit fallback to default event type!");
}var g=k+d+l+(c?c.classname:j)+n;
qx.core.Assert.assertNotUndefined(c,g+p);
qx.core.Assert.assertNotNull(c,g+p);
}var h=this.createEvent(d,e||null,f);
return this.getManager(c).dispatchEvent(c,h);
},fireNonBubblingEvent:function(W,X,Y,ba){if(qx.core.Variant.isSet(r,q)){if(arguments.length>2&&Y===undefined&&ba!==undefined){throw new Error("Create event of type "+X+" with undefined class. Please use null to explicit fallback to default event type!");
}}var bb=this.getManager(W);

if(!bb.hasListener(W,X,false)){return true;
}var bc=this.createEvent(X,Y||null,ba);
return bb.dispatchEvent(W,bc);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bz:[],addHandler:function(F){if(qx.core.Variant.isSet(r,q)){qx.core.Assert.assertInterface(F,qx.event.IEventHandler,m);
}this.__bz.push(F);
this.__bz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bz;
},__bA:[],addDispatcher:function(u,v){if(qx.core.Variant.isSet(r,q)){qx.core.Assert.assertInterface(u,qx.event.IEventDispatcher,o);
}this.__bA.push(u);
this.__bA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bA;
}}});
})();
(function(){var m="on",k="qx.debug",j="$$hash",h="",g="qx.core.ObjectRegistry";
qx.Class.define(g,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(c){var f=this.__bc;

if(!f){return;
}var e=c.$$hash;

if(e==null){var d=this.__be;

if(d.length>0){e=d.pop();
}else{e=(this.__bd++)+h;
}c.$$hash=e;
}
if(qx.core.Variant.isSet(k,m)){if(!c.dispose){throw new Error("Invalid object: "+c);
}}f[e]=c;
},unregister:function(w){var x=w.$$hash;

if(x==null){return;
}var y=this.__bc;

if(y&&y[x]){delete y[x];
this.__be.push(x);
}try{delete w.$$hash;
}catch(s){if(w.removeAttribute){w.removeAttribute(j);
}}},toHashCode:function(o){if(qx.core.Variant.isSet(k,m)){if(o==null){throw new Error("Invalid object: "+o);
}}var q=o.$$hash;

if(q!=null){return q;
}var p=this.__be;

if(p.length>0){q=p.pop();
}else{q=(this.__bd++)+h;
}return o.$$hash=q;
},clearHashCode:function(u){if(qx.core.Variant.isSet(k,m)){if(u==null){throw new Error("Invalid object: "+u);
}}var v=u.$$hash;

if(v!=null){this.__be.push(v);
try{delete u.$$hash;
}catch(r){if(u.removeAttribute){u.removeAttribute(j);
}}}},fromHashCode:function(n){return this.__bc[n]||null;
},shutdown:function(){this.inShutDown=true;
var A=this.__bc;
var C=[];

for(var B in A){C.push(B);
}C.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var z,i=0,l=C.length;

while(true){try{for(;i<l;i++){B=C[i];
z=A[B];

if(z&&z.dispose){z.dispose();
}}}catch(t){qx.Bootstrap.error(this,"Could not dispose object "+z.toString()+": "+t);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==d||i instanceof Date));
},isError:function(a){return (a!==null&&(this.getClass(a)==f||a instanceof Error));
}}});
})();
(function(){var cj="",ci="!",ch="'!",cg="'",cf="Expected '",ce="' (rgb(",cd=",",cc=")), but found value '",cb="Event (",ca="Expected value to be the CSS color '",dr="' but found ",dq="The value '",dp=" != ",dn="qx.core.Object",dm="Expected value to be an array but found ",dl=") was fired.",dk="Expected value to be an integer >= 0 but found ",dj="' to be not equal with '",di="' to '",dh="qx.ui.core.Widget",cq="Called assertTrue with '",cr="Expected value to be a map but found ",co="The function did not raise an exception!",cp="Expected value to be undefined but found ",cm="Expected value to be a DOM element but found  '",cn="Expected value to be a regular expression but found ",ck="' to implement the interface '",cl="Expected value to be null but found ",cy="Invalid argument 'type'",cz="Called assert with 'false'",cL="Assertion error! ",cH="Expected value to be a string but found ",cT="null",cO="' but found '",dd="' must must be a key of the map '",cY="The String '",cD="Expected value not to be undefined but found ",dg="qx.util.ColorUtil",df=": ",de="The raised exception does not have the expected type! ",cC=") not fired.",cF="qx.core.Assert",cG="Expected value to be typeof object but found ",cJ="' (identical) but found '",cM="' must have any of the values defined in the array '",cP="Expected value to be a number but found ",cV="Called assertFalse with '",db="]",cs="Expected value to be a qooxdoo object but found ",ct="' arguments.",cE="Expected value not to be null but found ",cS="Array[",cR="' does not match the regular expression '",cQ="' to be not identical with '",cX="' arguments but found '",cW="', which cannot be converted to a CSS color!",cN="Expected object '",cU="qx.core.AssertionError",bW="Expected value to be a boolean but found ",da="))!",cu="Expected value to be a qooxdoo widget but found ",cv="Expected value '%1' to be in the range '%2'..'%3'!",cI="Expected value to be typeof '",bX="Expected value to be typeof function but found ",bY="Expected value to be an integer but found ",cB="Called fail().",cw="The parameter 're' must be a string or a regular expression.",cx="Expected value to be a number >= 0 but found ",cA="Expected value to be instanceof '",cK="Wrong number of arguments given. Expected '",dc="object";
qx.Class.define(cF,{statics:{__qo:true,__qp:function(K,L){var M=cj;

for(var i=1,l=arguments.length;i<l;i++){M=M+this.__qq(arguments[i]);
}var O=cL+K+df+M;

if(this.__qo){qx.Bootstrap.error(O);
}
if(qx.Class.isDefined(cU)){var N=new qx.core.AssertionError(K,M);

if(this.__qo){qx.Bootstrap.error("Stack trace: \n"+N.getStackTrace());
}throw N;
}else{throw new Error(O);
}},__qq:function(bt){var bu;

if(bt===null){bu=cT;
}else if(qx.lang.Type.isArray(bt)&&bt.length>10){bu=cS+bt.length+db;
}else if((bt instanceof Object)&&(bt.toString==null)){bu=qx.lang.Json.stringify(bt,null,2);
}else{try{bu=bt.toString();
}catch(e){bu=cj;
}}return bu;
},assert:function(c,d){c==true||this.__qp(d||cj,cz);
},fail:function(bV){this.__qp(bV||cj,cB);
},assertTrue:function(dR,dS){(dR===true)||this.__qp(dS||cj,cq,dR,cg);
},assertFalse:function(bK,bL){(bK===false)||this.__qp(bL||cj,cV,bK,cg);
},assertEquals:function(U,V,W){U==V||this.__qp(W||cj,cf,U,cO,V,ch);
},assertNotEquals:function(bM,bN,bO){bM!=bN||this.__qp(bO||cj,cf,bM,dj,bN,ch);
},assertIdentical:function(h,j,k){h===j||this.__qp(k||cj,cf,h,cJ,j,ch);
},assertNotIdentical:function(dC,dD,dE){dC!==dD||this.__qp(dE||cj,cf,dC,cQ,dD,ch);
},assertNotUndefined:function(f,g){f!==undefined||this.__qp(g||cj,cD,f,ci);
},assertUndefined:function(n,o){n===undefined||this.__qp(o||cj,cp,n,ci);
},assertNotNull:function(bf,bg){bf!==null||this.__qp(bg||cj,cE,bf,ci);
},assertNull:function(a,b){a===null||this.__qp(b||cj,cl,a,ci);
},assertJsonEquals:function(bE,bF,bG){this.assertEquals(qx.lang.Json.stringify(bE),qx.lang.Json.stringify(bF),bG);
},assertMatch:function(ba,bb,bc){this.assertString(ba);
this.assert(qx.lang.Type.isRegExp(bb)||qx.lang.Type.isString(bb),cw);
ba.search(bb)>=0||this.__qp(bc||cj,cY,ba,cR,bb.toString(),ch);
},assertArgumentsCount:function(B,C,D,E){var F=B.length;
(F>=C&&F<=D)||this.__qp(E||cj,cK,C,di,D,cX,arguments.length,ct);
},assertEventFired:function(bh,event,bi,bj,bk){var bm=false;
var bl=function(e){if(bj){bj.call(bh,e);
}bm=true;
};
var bn=bh.addListener(event,bl,bh);
bi.call();
bm===true||this.__qp(bk||cj,cb,event,cC);
bh.removeListenerById(bn);
},assertEventNotFired:function(dI,event,dJ,dK){var dM=false;
var dL=function(e){dM=true;
};
var dN=dI.addListener(event,dL,dI);
dJ.call();
dM===false||this.__qp(dK||cj,cb,event,dl);
dI.removeListenerById(dN);
},assertException:function(P,Q,R,S){var Q=Q||Error;
var T;

try{this.__qo=false;
P();
}catch(m){T=m;
}finally{this.__qo=true;
}
if(T==null){this.__qp(S||cj,co);
}T instanceof Q||this.__qp(S||cj,de,Q,dp,T);

if(R){this.assertMatch(T.toString(),R,S);
}},assertInArray:function(bz,bA,bB){bA.indexOf(bz)!==-1||this.__qp(bB||cj,dq,bz,cM,bA,cg);
},assertArrayEquals:function(bP,bQ,bR){this.assertArray(bP,bR);
this.assertArray(bQ,bR);
this.assertEquals(bP.length,bQ.length,bR);

for(var i=0;i<bP.length;i++){this.assertIdentical(bP[i],bQ[i],bR);
}},assertKeyInMap:function(bS,bT,bU){bT[bS]!==undefined||this.__qp(bU||cj,dq,bS,dd,bT,cg);
},assertFunction:function(dG,dH){qx.lang.Type.isFunction(dG)||this.__qp(dH||cj,bX,dG,ci);
},assertString:function(bd,be){qx.lang.Type.isString(bd)||this.__qp(be||cj,cH,bd,ci);
},assertBoolean:function(bv,bw){qx.lang.Type.isBoolean(bv)||this.__qp(bw||cj,bW,bv,ci);
},assertNumber:function(r,s){(qx.lang.Type.isNumber(r)&&isFinite(r))||this.__qp(s||cj,cP,r,ci);
},assertPositiveNumber:function(I,J){(qx.lang.Type.isNumber(I)&&isFinite(I)&&I>=0)||this.__qp(J||cj,cx,I,ci);
},assertInteger:function(bx,by){(qx.lang.Type.isNumber(bx)&&isFinite(bx)&&bx%1===0)||this.__qp(by||cj,bY,bx,ci);
},assertPositiveInteger:function(dV,dW){var dX=(qx.lang.Type.isNumber(dV)&&isFinite(dV)&&dV%1===0&&dV>=0);
dX||this.__qp(dW||cj,dk,dV,ci);
},assertInRange:function(x,y,z,A){(x>=y&&x<=z)||this.__qp(A||cj,qx.lang.String.format(cv,[x,y,z]));
},assertObject:function(bo,bp){var bq=bo!==null&&(qx.lang.Type.isObject(bo)||typeof bo===dc);
bq||this.__qp(bp||cj,cG,(bo),ci);
},assertArray:function(p,q){qx.lang.Type.isArray(p)||this.__qp(q||cj,dm,p,ci);
},assertMap:function(X,Y){qx.lang.Type.isObject(X)||this.__qp(Y||cj,cr,X,ci);
},assertRegExp:function(br,bs){qx.lang.Type.isRegExp(br)||this.__qp(bs||cj,cn,br,ci);
},assertType:function(dO,dP,dQ){this.assertString(dP,cy);
typeof (dO)===dP||this.__qp(dQ||cj,cI,dP,dr,dO,ci);
},assertInstance:function(t,u,v){var w=u.classname||u+cj;
t instanceof u||this.__qp(v||cj,cA,w,dr,t,ci);
},assertInterface:function(bH,bI,bJ){qx.Class.implementsInterface(bH,bI)||this.__qp(bJ||cj,cN,bH,ck,bI,ch);
},assertCssColor:function(dv,dw,dx){var dy=qx.Class.getByName(dg);

if(!dy){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dA=dy.stringToRgb(dv);

try{var dz=dy.stringToRgb(dw);
}catch(dF){this.__qp(dx||cj,ca,dv,ce,dA.join(cd),cc,dw,cW);
}var dB=dA[0]==dz[0]&&dA[1]==dz[1]&&dA[2]==dz[2];
dB||this.__qp(dx||cj,ca,dA,ce,dA.join(cd),cc,dw,ce,dz.join(cd),da);
},assertElement:function(dT,dU){!!(dT&&dT.nodeType===1)||this.__qp(dU||cj,cm,dT,ch);
},assertQxObject:function(bC,bD){this.__qr(bC,dn)||this.__qp(bD||cj,cs,bC,ci);
},assertQxWidget:function(G,H){this.__qr(G,dh)||this.__qp(H||cj,cu,G,ci);
},__qr:function(ds,dt){if(!ds){return false;
}var du=ds.constructor;

while(du){if(du.classname===dt){return true;
}du=du.superclass;
}return false;
}}});
})();
(function(){var m="qx.core.MAssert";
qx.Mixin.define(m,{members:{assert:function(bb,bc){qx.core.Assert.assert(bb,bc);
},fail:function(bS){qx.core.Assert.fail(bS);
},assertTrue:function(t,u){qx.core.Assert.assertTrue(t,u);
},assertFalse:function(bj,bk){qx.core.Assert.assertFalse(bj,bk);
},assertEquals:function(bl,bm,bn){qx.core.Assert.assertEquals(bl,bm,bn);
},assertNotEquals:function(y,z,A){qx.core.Assert.assertNotEquals(y,z,A);
},assertIdentical:function(bt,bu,bv){qx.core.Assert.assertIdentical(bt,bu,bv);
},assertNotIdentical:function(bJ,bK,bL){qx.core.Assert.assertNotIdentical(bJ,bK,bL);
},assertNotUndefined:function(S,T){qx.core.Assert.assertNotUndefined(S,T);
},assertUndefined:function(bX,bY){qx.core.Assert.assertUndefined(bX,bY);
},assertNotNull:function(O,P){qx.core.Assert.assertNotNull(O,P);
},assertNull:function(bH,bI){qx.core.Assert.assertNull(bH,bI);
},assertJsonEquals:function(n,o,p){qx.core.Assert.assertJsonEquals(n,o,p);
},assertMatch:function(bd,be,bf){qx.core.Assert.assertMatch(bd,be,bf);
},assertArgumentsCount:function(a,b,c,d){qx.core.Assert.assertArgumentsCount(a,b,c,d);
},assertEventFired:function(K,event,L,M,N){qx.core.Assert.assertEventFired(K,event,L,M,N);
},assertEventNotFired:function(j,event,k,l){qx.core.Assert.assertEventNotFired(j,event,k,l);
},assertException:function(bw,bx,by,bz){qx.core.Assert.assertException(bw,bx,by,bz);
},assertInArray:function(q,r,s){qx.core.Assert.assertInArray(q,r,s);
},assertArrayEquals:function(bg,bh,bi){qx.core.Assert.assertArrayEquals(bg,bh,bi);
},assertKeyInMap:function(e,f,g){qx.core.Assert.assertKeyInMap(e,f,g);
},assertFunction:function(bo,bp){qx.core.Assert.assertFunction(bo,bp);
},assertString:function(bT,bU){qx.core.Assert.assertString(bT,bU);
},assertBoolean:function(I,J){qx.core.Assert.assertBoolean(I,J);
},assertNumber:function(bM,bN){qx.core.Assert.assertNumber(bM,bN);
},assertPositiveNumber:function(h,i){qx.core.Assert.assertPositiveNumber(h,i);
},assertInteger:function(bV,bW){qx.core.Assert.assertInteger(bV,bW);
},assertPositiveInteger:function(bQ,bR){qx.core.Assert.assertPositiveInteger(bQ,bR);
},assertInRange:function(B,C,D,E){qx.core.Assert.assertInRange(B,C,D,E);
},assertObject:function(bD,bE){qx.core.Assert.assertObject(bD,bE);
},assertArray:function(Q,R){qx.core.Assert.assertArray(Q,R);
},assertMap:function(W,X){qx.core.Assert.assertMap(W,X);
},assertRegExp:function(U,V){qx.core.Assert.assertRegExp(U,V);
},assertType:function(F,G,H){qx.core.Assert.assertType(F,G,H);
},assertInstance:function(bA,bB,bC){qx.core.Assert.assertInstance(bA,bB,bC);
},assertInterface:function(v,w,x){qx.core.Assert.assertInterface(v,w,x);
},assertCssColor:function(bq,br,bs){qx.core.Assert.assertCssColor(bq,br,bs);
},assertElement:function(bO,bP){qx.core.Assert.assertElement(bO,bP);
},assertQxObject:function(Y,ba){qx.core.Assert.assertQxObject(Y,ba);
},assertQxWidget:function(bF,bG){qx.core.Assert.assertQxWidget(bF,bG);
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
(function(){var n="qx.debug",m="on",k="unknown",j="node",h="error",g="...(+",f="array",e=")",d="info",c="instance",K="string",J="null",I="class",H="number",G="stringify",F="]",E="function",D="boolean",C="debug",B="map",u="undefined",v="qx.log.Logger",s=")}",t="#",q="warn",r="document",o="{...(",p="[",w="text[",x="[...(",z="\n",y=")]",A="object";
qx.Class.define(v,{statics:{__bJ:C,setLevel:function(bl){this.__bJ=bl;
},getLevel:function(){return this.__bJ;
},setTreshold:function(L){this.__bM.setMaxMessages(L);
},getTreshold:function(){return this.__bM.getMaxMessages();
},__bK:{},__bL:0,register:function(by){if(by.$$id){return;
}var bz=this.__bL++;
this.__bK[bz]=by;
by.$$id=bz;
var bA=this.__bM.getAllLogEvents();

for(var i=0,l=bA.length;i<l;i++){by.process(bA[i]);
}},unregister:function(bw){var bx=bw.$$id;

if(bx==null){return;
}delete this.__bK[bx];
delete bw.$$id;
},debug:function(bo,bp){qx.log.Logger.__bO(C,arguments);
},info:function(bG,bH){qx.log.Logger.__bO(d,arguments);
},warn:function(bj,bk){qx.log.Logger.__bO(q,arguments);
},error:function(bm,bn){qx.log.Logger.__bO(h,arguments);
},trace:function(bi){qx.log.Logger.__bO(d,[bi,qx.dev.StackTrace.getStackTrace().join(z)]);
},deprecatedMethodWarning:function(bt,bu){if(qx.core.Variant.isSet(n,m)){var bv=qx.lang.Function.getName(bt);
this.warn("The method '"+bv+"' is deprecated: "+(bu||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(bI,bJ){if(qx.core.Variant.isSet(n,m)){var bK=bI.classname||k;
this.warn("The class '"+bK+"' is deprecated: "+(bJ||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bL,event,bM){if(qx.core.Variant.isSet(n,m)){var bN=bL.self?bL.self.classname:k;
this.warn("The event '"+(event||"unknown")+"' from class '"+bN+"' is deprecated: "+(bM||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bq,br){if(qx.core.Variant.isSet(n,m)){var bs=bq?bq.name:k;
this.warn("The mixin '"+bs+"' is deprecated: "+(br||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bO,bP,bQ){if(qx.core.Variant.isSet(n,m)){if(bO.__defineGetter__){var self=this;
var bR=bO[bP];
bO.__defineGetter__(bP,function(){self.warn("The constant '"+bP+"' is deprecated: "+(bQ||"Please consult the API documentation for alternatives."));
self.trace();
return bR;
});
}}},deprecateMethodOverriding:function(bB,bC,bD,bE){if(qx.core.Variant.isSet(n,m)){var bF=bB.constructor;

while(bF.classname!==bC.classname){if(bF.prototype.hasOwnProperty(bD)){this.warn("The method '"+qx.lang.Function.getName(bB[bD])+"' overrides a deprecated method: "+(bE||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bF=bF.superclass;
}}},clear:function(){this.__bM.clearHistory();
},__bM:new qx.log.appender.RingBuffer(50),__bN:{debug:0,info:1,warn:2,error:3},__bO:function(M,N){var S=this.__bN;

if(S[M]<S[this.__bJ]){return;
}var P=N.length<2?null:N[0];
var R=P?1:0;
var O=[];

for(var i=R,l=N.length;i<l;i++){O.push(this.__bQ(N[i],true));
}var T=new Date;
var U={time:T,offset:T-qx.Bootstrap.LOADSTART,level:M,items:O,win:window};
if(P){if(P instanceof qx.core.Object){U.object=P.$$hash;
}else if(P.$$type){U.clazz=P;
}}this.__bM.process(U);
var V=this.__bK;

for(var Q in V){V[Q].process(U);
}},__bP:function(W){if(W===undefined){return u;
}else if(W===null){return J;
}
if(W.$$type){return I;
}var X=typeof W;

if(X===E||X==K||X===H||X===D){return X;
}else if(X===A){if(W.nodeType){return j;
}else if(W.classname){return c;
}else if(W instanceof Array){return f;
}else if(W instanceof Error){return h;
}else{return B;
}}
if(W.toString){return G;
}return k;
},__bQ:function(Y,ba){var bh=this.__bP(Y);
var bd=k;
var bc=[];

switch(bh){case J:case u:bd=bh;
break;
case K:case H:case D:bd=Y;
break;
case j:if(Y.nodeType===9){bd=r;
}else if(Y.nodeType===3){bd=w+Y.nodeValue+F;
}else if(Y.nodeType===1){bd=Y.nodeName.toLowerCase();

if(Y.id){bd+=t+Y.id;
}}else{bd=j;
}break;
case E:bd=qx.lang.Function.getName(Y)||bh;
break;
case c:bd=Y.basename+p+Y.$$hash+F;
break;
case I:case G:bd=Y.toString();
break;
case h:bc=qx.dev.StackTrace.getStackTraceFromError(Y);
bd=Y.toString();
break;
case f:if(ba){bd=[];

for(var i=0,l=Y.length;i<l;i++){if(bd.length>20){bd.push(g+(l-i)+e);
break;
}bd.push(this.__bQ(Y[i],false));
}}else{bd=x+Y.length+y;
}break;
case B:if(ba){var bb;
var bg=[];

for(var bf in Y){bg.push(bf);
}bg.sort();
bd=[];

for(var i=0,l=bg.length;i<l;i++){if(bd.length>20){bd.push(g+(l-i)+e);
break;
}bf=bg[i];
bb=this.__bQ(Y[bf],false);
bb.key=bf;
bd.push(bb);
}}else{var be=0;

for(var bf in Y){be++;
}bd=o+be+s;
}break;
}return {type:bh,text:bd,trace:bc};
}},defer:function(a){var b=qx.Bootstrap.$$logs;

for(var i=0;i<b.length;i++){a.__bO(b[i][0],b[i][1]);
}qx.Bootstrap.debug=a.debug;
qx.Bootstrap.info=a.info;
qx.Bootstrap.warn=a.warn;
qx.Bootstrap.error=a.error;
qx.Bootstrap.trace=a.trace;
}});
})();
(function(){var w="qx.debug",v="on",u="qx.disposerDebugLevel",t="set",s="MSIE 6.0",r="rv:1.8.1",q="get",p="reset",o="qx.core.Object",n="]",j="[",m="$$user_",k="object",h="Object";
qx.Class.define(o,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:h},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+j+this.$$hash+n;
},base:function(bI,bJ){if(qx.core.Variant.isSet(w,v)){if(!qx.Bootstrap.isFunction(bI.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+bI.callee.displayName);
}}
if(arguments.length===1){return bI.callee.base.call(this);
}else{return bI.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bd){return bd.callee.self;
},clone:function(){var bp=this.constructor;
var bo=new bp;
var br=qx.Class.getProperties(bp);
var bq=qx.core.Property.$$store.user;
var bs=qx.core.Property.$$method.set;
var name;
for(var i=0,l=br.length;i<l;i++){name=br[i];

if(this.hasOwnProperty(bq[name])){bo[bs[name]](this[bq[name]]);
}}return bo;
},set:function(O,P){var R=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(O)){if(!this[R[O]]){if(this[t+qx.Bootstrap.firstUp(O)]!=undefined){this[t+qx.Bootstrap.firstUp(O)](P);
return this;
}
if(qx.core.Variant.isSet(w,v)){qx.Bootstrap.error("No such property: "+O);
return this;
}}return this[R[O]](P);
}else{for(var Q in O){if(!this[R[Q]]){if(this[t+qx.Bootstrap.firstUp(Q)]!=undefined){this[t+qx.Bootstrap.firstUp(Q)](O[Q]);
continue;
}
if(qx.core.Variant.isSet(w,v)){qx.Bootstrap.error("No such property: "+Q);
return this;
}}this[R[Q]](O[Q]);
}return this;
}},get:function(bk){var bl=qx.core.Property.$$method.get;

if(!this[bl[bk]]){if(this[q+qx.Bootstrap.firstUp(bk)]!=undefined){return this[q+qx.Bootstrap.firstUp(bk)]();
}
if(qx.core.Variant.isSet(w,v)){qx.Bootstrap.error("No such property: "+bk);
return this;
}}return this[bl[bk]]();
},reset:function(bm){var bn=qx.core.Property.$$method.reset;

if(!this[bn[bm]]){if(this[p+qx.Bootstrap.firstUp(bm)]!=undefined){this[p+qx.Bootstrap.firstUp(bm)]();
return;
}
if(qx.core.Variant.isSet(w,v)){qx.Bootstrap.error("No such property: "+bm);
return;
}}this[bn[bm]]();
},__bR:qx.event.Registration,addListener:function(A,B,self,C){if(!this.$$disposed){return this.__bR.addListener(this,A,B,self,C);
}return null;
},addListenerOnce:function(bt,bu,self,bv){var bw=function(e){bu.call(self||this,e);
this.removeListener(bt,bw,this,bv);
};
return this.addListener(bt,bw,this,bv);
},removeListener:function(L,M,self,N){if(!this.$$disposed){return this.__bR.removeListener(this,L,M,self,N);
}return false;
},removeListenerById:function(U){if(!this.$$disposed){return this.__bR.removeListenerById(this,U);
}return false;
},hasListener:function(V,W){return this.__bR.hasListener(this,V,W);
},dispatchEvent:function(a){if(!this.$$disposed){return this.__bR.dispatchEvent(this,a);
}return true;
},fireEvent:function(d,f,g){if(!this.$$disposed){return this.__bR.fireEvent(this,d,f,g);
}return true;
},fireNonBubblingEvent:function(bz,bA,bB){if(!this.$$disposed){return this.__bR.fireNonBubblingEvent(this,bz,bA,bB);
}return true;
},fireDataEvent:function(Y,ba,bb,bc){if(!this.$$disposed){if(bb===undefined){bb=null;
}return this.__bR.fireNonBubblingEvent(this,Y,qx.event.type.Data,[ba,bb,!!bc]);
}return true;
},__bS:null,setUserData:function(y,z){if(!this.__bS){this.__bS={};
}this.__bS[y]=z;
},getUserData:function(S){if(!this.__bS){return null;
}var T=this.__bS[S];
return T===undefined?null:T;
},__bT:qx.log.Logger,debug:function(b){this.__bT.debug(this,b);
},info:function(bj){this.__bT.info(this,bj);
},warn:function(bx){this.__bT.warn(this,bx);
},error:function(X){this.__bT.error(this,X);
},trace:function(){this.__bT.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(u)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bE=this.constructor;
var bC;

while(bE.superclass){if(bE.$$destructor){bE.$$destructor.call(this);
}if(bE.$$includes){bC=bE.$$flatIncludes;

for(var i=0,l=bC.length;i<l;i++){if(bC[i].$$destructor){bC[i].$$destructor.call(this);
}}}bE=bE.superclass;
}if(this.__bU){this.__bU();
}if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(u)>0){var bF,bD;

for(bF in this){bD=this[bF];
if(bD!==null&&typeof bD===k&&!(qx.Bootstrap.isString(bD))){if(this.constructor.prototype[bF]!=null){continue;
}var bH=navigator.userAgent.indexOf(r)!=-1;
var bG=navigator.userAgent.indexOf(s)!=-1;
if(bH||bG){if(bD instanceof qx.core.Object||qx.core.Setting.get(u)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bF+"' in "+this.classname+"["+this.toHashCode()+"]: "+bD);
delete this[bF];
}}else{if(qx.core.Setting.get(u)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bF+"' in "+this.classname+"["+this.toHashCode()+"]: "+bD);
delete this[bF];
}}}}}}},__bU:null,__bV:function(){var x=qx.Class.getProperties(this.constructor);

for(var i=0,l=x.length;i<l;i++){delete this[m+x[i]];
}},_disposeObjects:function(bK){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(be){qx.util.DisposeUtil.disposeArray(this,be);
},_disposeMap:function(c){qx.util.DisposeUtil.disposeMap(this,c);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bf,bg){if(qx.core.Variant.isSet(w,v)){qx.Class.include(bf,qx.core.MAssert);
}var bi=navigator.userAgent.indexOf(s)!=-1;
var bh=navigator.userAgent.indexOf(r)!=-1;
if(bi||bh){bg.__bU=bg.__bV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bS=null;
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
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(h,i){var j=qx.locale.Manager;

if(j){return j.tr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(b,c,d){var e=qx.locale.Manager;

if(e){return e.trc.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(f){var g=qx.locale.Manager;

if(g){return g.marktr.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__rB:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__rB;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__rB=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__rB=null;
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
(function(){var j="qx.debug",i="on",h="Cannot stop propagation on a non bubbling event: ",g="Invalid argument value 'cancelable'.",f="Cannot prevent default action on a non cancelable event: ",e="Invalid argument value 'canBubble'.",d="qx.event.type.Event";
qx.Class.define(d,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(l,m){if(qx.core.Variant.isSet(j,i)){if(l!==undefined){qx.core.Assert.assertBoolean(l,e);
}
if(m!==undefined){qx.core.Assert.assertBoolean(m,g);
}}this._type=null;
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
},clone:function(a){if(a){var b=a;
}else{var b=qx.event.Pool.getInstance().getObject(this.constructor);
}b._type=this._type;
b._target=this._target;
b._currentTarget=this._currentTarget;
b._relatedTarget=this._relatedTarget;
b._originalTarget=this._originalTarget;
b._stopPropagation=this._stopPropagation;
b._bubbles=this._bubbles;
b._preventDefault=this._preventDefault;
b._cancelable=this._cancelable;
return b;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){if(qx.core.Variant.isSet(j,i)){this.assertTrue(this._bubbles,h+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(j,i)){this.assertTrue(this._cancelable,f+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(k){this._type=k;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(o){this._target=o;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(p){this._currentTarget=p;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(s){this._relatedTarget=s;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(r){this._originalTarget=r;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(n){this._bubbles=n;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(q){this._cancelable=q;
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
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__cA=b+(e&&e.message?e.message:e);
Error.call(this,this.__cA);
this.__cB=f;
this.__cC=e;
},members:{__cC:null,__cB:null,__cA:null,toString:function(){return this.__cA;
},getArguments:function(){return this.__cB;
},getSourceException:function(){return this.__cC;
}},destruct:function(){this.__cC=null;
this.__cB=null;
this.__cA=null;
}});
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
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__qs:null,__qt:null,__qu:null,__qv:null,stringify:function(bf,bg,bh){this.__qs=p;
this.__qt=p;
this.__qv=[];

if(qx.lang.Type.isNumber(bh)){var bh=Math.min(10,Math.floor(bh));

for(var i=0;i<bh;i+=1){this.__qt+=O;
}}else if(qx.lang.Type.isString(bh)){if(bh.length>10){bh=bh.slice(0,10);
}this.__qt=bh;
}if(bg&&(qx.lang.Type.isFunction(bg)||qx.lang.Type.isArray(bg))){this.__qu=bg;
}else{this.__qu=null;
}return this.__qw(p,{'':bf});
},__qw:function(bs,bt){var bw=this.__qs,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__qu===e){bx=this.__qu.call(bt,bs,bx);
}
if(bx===null){return h;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case R:return this.__qx(bx);
case B:return isFinite(bx)?String(bx):h;
case Q:return String(bx);
case J:this.__qs+=this.__qt;
bu=[];

if(this.__qv.indexOf(bx)!==-1){throw new TypeError(V);
}this.__qv.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__qw(i,bx)||h;
}this.__qv.pop();
if(bu.length===0){var bv=s;
}else if(this.__qs){bv=E+this.__qs+bu.join(Y+this.__qs)+b+bw+l;
}else{bv=N+bu.join(d)+l;
}this.__qs=bw;
return bv;
case z:this.__qs+=this.__qt;
bu=[];

if(this.__qv.indexOf(bx)!==-1){throw new TypeError(V);
}this.__qv.push(bx);
if(this.__qu&&typeof this.__qu===f){var length=this.__qu.length;

for(var i=0;i<length;i+=1){var k=this.__qu[i];

if(typeof k===W){var v=this.__qw(k,bx);

if(v){bu.push(this.__qx(k)+(this.__qs?g:m)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__qw(k,bx);

if(v){bu.push(this.__qx(k)+(this.__qs?g:m)+v);
}}}}this.__qv.pop();
if(bu.length===0){var bv=A;
}else if(this.__qs){bv=w+this.__qs+bu.join(Y+this.__qs)+b+bw+S;
}else{bv=C+bu.join(d)+S;
}this.__qs=bw;
return bv;
}},dateToJSON:function(bp){var bq=function(n){return n<10?U+n:n;
};
var br=function(n){var bi=bq(n);
return n<100?U+bi:bi;
};
return isFinite(bp.valueOf())?bp.getUTCFullYear()+T+bq(bp.getUTCMonth()+1)+T+bq(bp.getUTCDate())+M+bq(bp.getUTCHours())+m+bq(bp.getUTCMinutes())+m+bq(bp.getUTCSeconds())+F+br(bp.getUTCMilliseconds())+q:null;
},__qx:function(bm){var bn={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bo=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bo.lastIndex=0;

if(bo.test(bm)){return o+
bm.replace(bo,function(a){var c=bn[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bm+o;
}},parse:function(bj,bk){var bl=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bl.lastIndex=0;
if(bl.test(bj)){bj=bj.replace(bl,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bj.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bj+D);
return typeof bk===e?this.__qy({'':j},p,bk):j;
}throw new SyntaxError(P);
},__qy:function(bb,bc,bd){var be=bb[bc];

if(be&&typeof be===f){for(var k in be){if(Object.hasOwnProperty.call(be,k)){var v=this.__qy(be,k,bd);

if(v!==undefined){be[k]=v;
}else{delete be[k];
}}}}return bd.call(bb,bc,be);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var cs="get",cr="",cq="[",cp=".",co="last",cn="change",cm="]",cl="Number",ck="String",cj="set",cM="deepBinding",cL="item",cK="reset",cJ="' (",cI="on",cH="qx.debug",cG="Boolean",cF=") to the object '",cE="Integer",cD="qx.event.type.Data",cz="qx.data.SingleValueBinding",cA="No event could be found for the property",cx="Can not remove the bindings for null object!",cy="Binding from '",cv="PositiveNumber",cw="PositiveInteger",ct="Binding does not exist!",cu=" is not an data (qx.event.type.Data) event on ",cB=").",cC="Date";
qx.Class.define(cz,{statics:{DEBUG_ON:false,__ce:{},bind:function(Y,ba,bb,bc,bd){var bn=this.__cg(Y,ba,bb,bc,bd);
var bi=ba.split(cp);
var bf=this.__cn(bi);
var bm=[];
var bj=[];
var bk=[];
var bg=[];
var bh=Y;
for(var i=0;i<bi.length;i++){if(bf[i]!==cr){bg.push(cn);
}else{bg.push(this.__ci(bh,bi[i]));
}bm[i]=bh;
if(i==bi.length-1){if(bf[i]!==cr){var bq=bf[i]===co?bh.length-1:bf[i];
var be=bh.getItem(bq);
this.__cm(be,bb,bc,bd,Y);
bk[i]=this.__co(bh,bg[i],bb,bc,bd,bf[i]);
}else{if(bi[i]!=null&&bh[cs+qx.lang.String.firstUp(bi[i])]!=null){var be=bh[cs+qx.lang.String.firstUp(bi[i])]();
this.__cm(be,bb,bc,bd,Y);
}bk[i]=this.__co(bh,bg[i],bb,bc,bd);
}}else{var bo={index:i,propertyNames:bi,sources:bm,listenerIds:bk,arrayIndexValues:bf,targetObject:bb,targetPropertyChain:bc,options:bd,listeners:bj};
var bl=qx.lang.Function.bind(this.__cf,this,bo);
bj.push(bl);
bk[i]=bh.addListener(bg[i],bl);
}if(bh[cs+qx.lang.String.firstUp(bi[i])]==null){bh=null;
}else if(bf[i]!==cr){bh=bh[cs+qx.lang.String.firstUp(bi[i])](bf[i]);
}else{bh=bh[cs+qx.lang.String.firstUp(bi[i])]();
}
if(!bh){break;
}}var bp={type:cM,listenerIds:bk,sources:bm,targetListenerIds:bn.listenerIds,targets:bn.targets};
this.__cp(bp,Y,ba,bb,bc);
return bp;
},__cf:function(cU){if(cU.options&&cU.options.onUpdate){cU.options.onUpdate(cU.sources[cU.index],cU.targetObject);
}for(var j=cU.index+1;j<cU.propertyNames.length;j++){var cY=cU.sources[j];
cU.sources[j]=null;

if(!cY){continue;
}cY.removeListenerById(cU.listenerIds[j]);
}var cY=cU.sources[cU.index];
for(var j=cU.index+1;j<cU.propertyNames.length;j++){if(cU.arrayIndexValues[j-1]!==cr){cY=cY[cs+qx.lang.String.firstUp(cU.propertyNames[j-1])](cU.arrayIndexValues[j-1]);
}else{cY=cY[cs+qx.lang.String.firstUp(cU.propertyNames[j-1])]();
}cU.sources[j]=cY;
if(!cY){this.__cj(cU.targetObject,cU.targetPropertyChain);
break;
}if(j==cU.propertyNames.length-1){if(qx.Class.implementsInterface(cY,qx.data.IListData)){var da=cU.arrayIndexValues[j]===co?cY.length-1:cU.arrayIndexValues[j];
var cW=cY.getItem(da);
this.__cm(cW,cU.targetObject,cU.targetPropertyChain,cU.options,cU.sources[cU.index]);
cU.listenerIds[j]=this.__co(cY,cn,cU.targetObject,cU.targetPropertyChain,cU.options,cU.arrayIndexValues[j]);
}else{if(cU.propertyNames[j]!=null&&cY[cs+qx.lang.String.firstUp(cU.propertyNames[j])]!=null){var cW=cY[cs+qx.lang.String.firstUp(cU.propertyNames[j])]();
this.__cm(cW,cU.targetObject,cU.targetPropertyChain,cU.options,cU.sources[cU.index]);
}var cX=this.__ci(cY,cU.propertyNames[j]);
cU.listenerIds[j]=this.__co(cY,cX,cU.targetObject,cU.targetPropertyChain,cU.options);
}}else{if(cU.listeners[j]==null){var cV=qx.lang.Function.bind(this.__cf,this,cU);
cU.listeners.push(cV);
}if(qx.Class.implementsInterface(cY,qx.data.IListData)){var cX=cn;
}else{var cX=this.__ci(cY,cU.propertyNames[j]);
}cU.listenerIds[j]=cY.addListener(cX,cU.listeners[j]);
}}},__cg:function(w,x,y,z,A){var E=z.split(cp);
var C=this.__cn(E);
var J=[];
var I=[];
var G=[];
var F=[];
var D=y;
for(var i=0;i<E.length-1;i++){if(C[i]!==cr){F.push(cn);
}else{try{F.push(this.__ci(D,E[i]));
}catch(e){break;
}}J[i]=D;
var H=function(){for(var j=i+1;j<E.length-1;j++){var cP=J[j];
J[j]=null;

if(!cP){continue;
}cP.removeListenerById(G[j]);
}var cP=J[i];
for(var j=i+1;j<E.length-1;j++){var cN=qx.lang.String.firstUp(E[j-1]);
if(C[j-1]!==cr){var cQ=C[j-1]===co?cP.getLength()-1:C[j-1];
cP=cP[cs+cN](cQ);
}else{cP=cP[cs+cN]();
}J[j]=cP;
if(I[j]==null){I.push(H);
}if(qx.Class.implementsInterface(cP,qx.data.IListData)){var cO=cn;
}else{try{var cO=qx.data.SingleValueBinding.__ci(cP,E[j]);
}catch(e){break;
}}G[j]=cP.addListener(cO,I[j]);
}qx.data.SingleValueBinding.__ch(w,x,y,z,A);
};
I.push(H);
G[i]=D.addListener(F[i],H);
var B=qx.lang.String.firstUp(E[i]);
if(D[cs+B]==null){D=null;
}else if(C[i]!==cr){D=D[cs+B](C[i]);
}else{D=D[cs+B]();
}
if(!D){break;
}}return {listenerIds:G,targets:J};
},__ch:function(bO,bP,bQ,bR,bS){var bW=this.__cl(bO,bP);

if(bW!=null){var bY=bP.substring(bP.lastIndexOf(cp)+1,bP.length);
if(bY.charAt(bY.length-1)==cm){var bT=bY.substring(bY.lastIndexOf(cq)+1,bY.length-1);
var bV=bY.substring(0,bY.lastIndexOf(cq));
var bX=bW[cs+qx.lang.String.firstUp(bV)]();

if(bT==co){bT=bX.length-1;
}
if(bX!=null){var bU=bX.getItem(bT);
}}else{var bU=bW[cs+qx.lang.String.firstUp(bY)]();
}}bU=qx.data.SingleValueBinding.__cq(bU,bQ,bR,bS);
this.__ck(bQ,bR,bU);
},__ci:function(db,dc){var dd=this.__cr(db,dc);
if(dd==null){if(qx.Class.supportsEvent(db.constructor,dc)){dd=dc;
}else if(qx.Class.supportsEvent(db.constructor,cn+qx.lang.String.firstUp(dc))){dd=cn+qx.lang.String.firstUp(dc);
}else{throw new qx.core.AssertionError(cA,dc);
}}return dd;
},__cj:function(cf,cg){var ch=this.__cl(cf,cg);

if(ch!=null){var ci=cg.substring(cg.lastIndexOf(cp)+1,cg.length);
if(ci.charAt(ci.length-1)==cm){this.__ck(cf,cg,null);
return;
}if(ch[cK+qx.lang.String.firstUp(ci)]!=undefined){ch[cK+qx.lang.String.firstUp(ci)]();
}else{ch[cj+qx.lang.String.firstUp(ci)](null);
}}},__ck:function(bC,bD,bE){var bI=this.__cl(bC,bD);

if(bI!=null){var bJ=bD.substring(bD.lastIndexOf(cp)+1,bD.length);
if(bJ.charAt(bJ.length-1)==cm){var bF=bJ.substring(bJ.lastIndexOf(cq)+1,bJ.length-1);
var bH=bJ.substring(0,bJ.lastIndexOf(cq));
var bG=bI[cs+qx.lang.String.firstUp(bH)]();

if(bF==co){bF=bG.length-1;
}
if(bG!=null){bG.setItem(bF,bE);
}}else{bI[cj+qx.lang.String.firstUp(bJ)](bE);
}}},__cl:function(de,df){var di=df.split(cp);
var dj=de;
for(var i=0;i<di.length-1;i++){try{var dh=di[i];
if(dh.indexOf(cm)==dh.length-1){var dg=dh.substring(dh.indexOf(cq)+1,dh.length-1);
dh=dh.substring(0,dh.indexOf(cq));
}dj=dj[cs+qx.lang.String.firstUp(dh)]();

if(dg!=null){if(dg==co){dg=dj.length-1;
}dj=dj.getItem(dg);
dg=null;
}}catch(a){return null;
}}return dj;
},__cm:function(ca,cb,cc,cd,ce){ca=this.__cq(ca,cb,cc,cd);
if(ca==null){this.__cj(cb,cc);
}if(ca!=undefined){try{this.__ck(cb,cc,ca);
if(cd&&cd.onUpdate){cd.onUpdate(ce,cb,ca);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cd&&cd.onSetFail){cd.onSetFail(e);
}else{this.warn("Failed so set value "+ca+" on "+cb+". Error message: "+e);
}}}},__cn:function(bL){var bM=[];
for(var i=0;i<bL.length;i++){var name=bL[i];
if(qx.lang.String.endsWith(name,cm)){var bN=name.substring(name.indexOf(cq)+1,name.indexOf(cm));
if(name.indexOf(cm)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bN!==co){if(bN==cr||isNaN(parseInt(bN))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cq)!=0){bL[i]=name.substring(0,name.indexOf(cq));
bM[i]=cr;
bM[i+1]=bN;
bL.splice(i+1,0,cL);
i++;
}else{bM[i]=bN;
bL.splice(i,1,cL);
}}else{bM[i]=cr;
}}return bM;
},__co:function(b,c,d,f,g,h){if(qx.core.Variant.isSet(cH,cI)){var k=qx.Class.getEventType(b.constructor,c);
qx.core.Assert.assertEquals(cD,k,c+cu+b+cp);
}var m=function(n,e){if(n!==cr){if(n===co){n=b.length-1;
}var q=b.getItem(n);
if(q==undefined){qx.data.SingleValueBinding.__cj(d,f);
}var o=e.getData().start;
var p=e.getData().end;

if(n<o||n>p){return;
}}else{var q=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+b+" by "+c+" to "+d+" ("+f+")");
qx.log.Logger.debug("Data before conversion: "+q);
}q=qx.data.SingleValueBinding.__cq(q,d,f,g);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+q);
}try{if(q!=undefined){qx.data.SingleValueBinding.__ck(d,f,q);
}else{qx.data.SingleValueBinding.__cj(d,f);
}if(g&&g.onUpdate){g.onUpdate(b,d,q);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(g&&g.onSetFail){g.onSetFail(e);
}else{this.warn("Failed so set value "+q+" on "+d+". Error message: "+e);
}}};
if(!h){h=cr;
}m=qx.lang.Function.bind(m,b,h);
var l=b.addListener(c,m);
return l;
},__cp:function(r,s,t,u,v){if(this.__ce[s.toHashCode()]===undefined){this.__ce[s.toHashCode()]=[];
}this.__ce[s.toHashCode()].push([r,s,t,u,v]);
},__cq:function(M,N,O,P){if(P&&P.converter){var R;

if(N.getModel){R=N.getModel();
}return P.converter(M,R);
}else{var T=this.__cl(N,O);
var U=O.substring(O.lastIndexOf(cp)+1,O.length);
if(T==null){return M;
}var S=qx.Class.getPropertyDefinition(T.constructor,U);
var Q=S==null?cr:S.check;
return this.__cs(M,Q);
}},__cr:function(bz,bA){var bB=qx.Class.getPropertyDefinition(bz.constructor,bA);

if(bB==null){return null;
}return bB.event;
},__cs:function(V,W){var X=qx.lang.Type.getClass(V);
if((X==cl||X==ck)&&(W==cE||W==cw)){V=parseInt(V);
}if((X==cG||X==cl||X==cC)&&W==ck){V=V+cr;
}if((X==cl||X==ck)&&(W==cl||W==cv)){V=parseFloat(V);
}return V;
},removeBindingFromObject:function(cR,cS){if(cS.type==cM){for(var i=0;i<cS.sources.length;i++){if(cS.sources[i]){cS.sources[i].removeListenerById(cS.listenerIds[i]);
}}for(var i=0;i<cS.targets.length;i++){if(cS.targets[i]){cS.targets[i].removeListenerById(cS.targetListenerIds[i]);
}}}else{cR.removeListenerById(cS);
}var cT=this.__ce[cR.toHashCode()];
if(cT!=undefined){for(var i=0;i<cT.length;i++){if(cT[i][0]==cS){qx.lang.Array.remove(cT,cT[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bv){if(qx.core.Variant.isSet(cH,cI)){qx.core.Assert.assertNotNull(bv,cx);
}var bw=this.__ce[bv.toHashCode()];

if(bw!=undefined){for(var i=bw.length-1;i>=0;i--){this.removeBindingFromObject(bv,bw[i][0]);
}}},getAllBindingsForObject:function(bK){if(this.__ce[bK.toHashCode()]===undefined){this.__ce[bK.toHashCode()]=[];
}return this.__ce[bK.toHashCode()];
},removeAllBindings:function(){for(var by in this.__ce){var bx=qx.core.ObjectRegistry.fromHashCode(by);
if(bx==null){delete this.__ce[by];
continue;
}this.removeAllBindingsForObject(bx);
}this.__ce={};
},getAllBindings:function(){return this.__ce;
},showBindingInLog:function(br,bs){var bu;
for(var i=0;i<this.__ce[br.toHashCode()].length;i++){if(this.__ce[br.toHashCode()][i][0]==bs){bu=this.__ce[br.toHashCode()][i];
break;
}}
if(bu===undefined){var bt=ct;
}else{var bt=cy+bu[1]+cJ+bu[2]+cF+bu[3]+cJ+bu[4]+cB;
}qx.log.Logger.debug(bt);
},showAllBindingsInLog:function(){for(var L in this.__ce){var K=qx.core.ObjectRegistry.fromHashCode(L);

for(var i=0;i<this.__ce[L].length;i++){this.showBindingInLog(K,this.__ce[L][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
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
(function(){var h="object",g="_applyTheme",f="__gW",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__gW:null,resolve:function(m){if(!m){return null;
}
if(typeof m===h){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__gW;

if(!q){q=this.__gW={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(i){if(typeof i===b){return this.isDynamic(i);
}else if(typeof i===h){var j=i.constructor;
return qx.Class.hasInterface(j,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(k){if(!k){return false;
}var l=this.getTheme();

if(!l){return false;
}return !!l.decorations[k];
},_applyTheme:function(s,t){var v=qx.util.AliasManager.getInstance();

if(t){for(var u in t.aliases){v.remove(u);
}}
if(s){for(var u in s.aliases){v.add(u,s.aliases[u]);
}}
if(!s){this.__gW={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
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
(function(){var g="qx.theme.manager.Font",f="Theme",e="changeTheme",d="_applyTheme",c="singleton";
qx.Class.define(g,{type:c,extend:qx.util.ValueManager,properties:{theme:{check:f,nullable:true,apply:d,event:e}},members:{resolveDynamic:function(a){var b=this._dynamic;
return a instanceof qx.bom.Font?a:b[a];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(o){var q=this._dynamic;

if(o&&(o instanceof qx.bom.Font||q[o]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&o&&p.fonts[o]){q[o]=(new qx.bom.Font).set(p.fonts[o]);
return true;
}return false;
},__iV:function(h,i){if(h[i].include){var j=h[h[i].include];
h[i].include=null;
delete h[i].include;
h[i]=qx.lang.Object.mergeWith(h[i],j,false);
this.__iV(h,i);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__iV(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(J,K){qx.core.Object.call(this);

if(J!==undefined){this.setSize(J);
}
if(K!==undefined){this.setFamily(K);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case c:P.setBold(true);
break;
case e:P.setItalic(true);
break;
case j:P.setDecoration(j);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,g)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__iW:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__iW;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__jd:null,_applySize:function(Q,R){this.__iX=Q===null?null:Q+g;
},_applyLineHeight:function(C,D){this.__jd=C===null?null:C;
},_applyFamily:function(E,F){var G=k;

for(var i=0,l=E.length;i<l;i++){if(E[i].indexOf(o)>0){G+=f+E[i]+f;
}else{G+=E[i];
}
if(i!==l-1){G+=n;
}}this.__iY=G;
},_applyBold:function(S,T){this.__ja=S===null?null:S?c:d;
},_applyItalic:function(y,z){this.__jb=y===null?null:y?e:d;
},_applyDecoration:function(A,B){this.__jc=A===null?null:A;
},getStyles:function(){return {fontFamily:this.__iY,fontSize:this.__iX,fontWeight:this.__ja,fontStyle:this.__jb,textDecoration:this.__jc,lineHeight:this.__jd};
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
(function(){var o="qx.debug",n="on",m="Invalid argument 'map'",k="Invalid argument 'minLength'",j="Invalid argument 'source'",h="Invalid argument 'target'",g="function",f="Invalid argument 'array'",e="qx.lang.Object",d="undefined",c="object";
qx.Class.define(e,{statics:{empty:function(a){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(a,m);
}
for(var b in a){if(a.hasOwnProperty(b)){delete a[b];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(T){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(T,m);
}return T.__count__===0;
}:
function(L){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(L,m);
}
for(var M in L){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(H,I){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(H,m);
qx.core.Assert&&qx.core.Assert.assertInteger(I,k);
}return H.__count__>=I;
}:
function(N,O){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(N,m);
qx.core.Assert&&qx.core.Assert.assertInteger(O,k);
}
if(O<=0){return true;
}var length=0;

for(var P in N){if((++length)>=O){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(p){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(p,m);
}var r=[];
var q=this.getKeys(p);

for(var i=0,l=q.length;i<l;i++){r.push(p[q[i]]);
}return r;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(J,K){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(J,h);
qx.core.Assert&&qx.core.Assert.assertMap(K,j);
}return qx.lang.Object.mergeWith(J,K,false);
},merge:function(u,v){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(u,h);
}var w=arguments.length;

for(var i=1;i<w;i++){qx.lang.Object.mergeWith(u,arguments[i]);
}return u;
},clone:function(z){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(z,j);
}var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(Q){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(Q,m);
}var R={};

for(var S in Q){R[Q[S].toString()]=S;
}return R;
},getKeyFromValue:function(E,F){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(E,m);
}
for(var G in E){if(E.hasOwnProperty(G)&&E[G]===F){return G;
}}return null;
},contains:function(C,D){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(C,m);
}return this.getKeyFromValue(C,D)!==null;
},select:function(s,t){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(t,m);
}return t[s];
},fromArray:function(x){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertArray(x,f);
}var y={};

for(var i=0,l=x.length;i<l;i++){if(qx.core.Variant.isSet(o,n)){switch(typeof x[i]){case c:case g:case d:throw new Error("Could not convert complex objects like "+x[i]+" at array index "+i+" to map syntax");
}}y[x[i].toString()]=true;
}return y;
}}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hS={};
this.__hT={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hU:{},__hS:null,__hT:null,_applyTheme:function(K,L){this.__hT={};
this.__hS={};
},__hV:function(z,A,B){var F=A.appearances;
var I=F[z];

if(!I){var J=b;
var C=[];
var H=z.split(J);
var G;

while(!I&&H.length>0){C.unshift(H.pop());
var D=H.join(J);
I=F[D];

if(I){G=I.alias||I;

if(typeof G===h){var E=G+J+C.join(J);
return this.__hV(E,A,B);
}}}if(B!=null){return this.__hV(B,A);
}return null;
}else if(typeof I===h){return this.__hV(I,A,B);
}else if(I.include&&!I.style){return this.__hV(I.include,A,B);
}return z;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__hT;
var m=r[i];

if(!m){m=r[i]=this.__hV(i,k,l);
}var w=k.appearances[m];

if(!w){this.warn("Missing appearance: "+i);
return null;
}if(!w.style){return null;
}var x=m;

if(j){var y=w.$$bits;

if(!y){y=w.$$bits={};
w.$$length=0;
}var p=0;

for(var s in j){if(!j[s]){continue;
}
if(y[s]==null){y[s]=1<<w.$$length++;
}p+=y[s];
}if(p>0){x+=e+p;
}}var q=this.__hS;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__hU;
}var u;
if(w.include||w.base){var o=w.style(j);
var n;

if(w.include){n=this.styleFrom(w.include,j,k,l);
}u={};
if(w.base){var t=this.styleFrom(m,j,w.base,l);

if(w.include){for(var v in t){if(!n.hasOwnProperty(v)&&!o.hasOwnProperty(v)){u[v]=t[v];
}}}else{for(var v in t){if(!o.hasOwnProperty(v)){u[v]=t[v];
}}}}if(w.include){for(var v in n){if(!o.hasOwnProperty(v)){u[v]=n[v];
}}}for(var v in o){u[v]=o[v];
}}else{u=w.style(j);
}return q[x]=u||null;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var B="object",A="qx.debug",z="Theme",y="widgets",x="undefined",w="fonts",v="string",u="colors",t="decorations",s="on",m="meta",r="appearances",p="borders",k="icons",j="other",o="qx.Theme",n="]",q="[Theme ";
qx.Bootstrap.define(o,{statics:{define:function(name,G){if(!G){var G={};
}G.include=this.__rr(G.include);
G.patch=this.__rr(G.patch);
if(qx.core.Variant.isSet(A,s)){this.__ry(name,G);
}var H={$$type:z,name:name,title:G.title,toString:this.genericToString};
if(G.extend){H.supertheme=G.extend;
}H.basename=qx.Bootstrap.createNamespace(name,H);
this.__ru(H,G);
this.__rs(H,G);
this.$$registry[name]=H;
for(var i=0,a=G.include,l=a.length;i<l;i++){this.include(H,a[i]);
}
for(var i=0,a=G.patch,l=a.length;i<l;i++){this.patch(H,a[i]);
}},__rr:function(F){if(!F){return [];
}
if(qx.Bootstrap.isArray(F)){return F;
}else{return [F];
}},__rs:function(C,D){var E=D.aliases||{};

if(D.extend&&D.extend.aliases){qx.Bootstrap.objectMergeWith(E,D.extend.aliases,false);
}C.aliases=E;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return q+this.name+n;
},__rt:function(O){for(var i=0,P=this.__rv,l=P.length;i<l;i++){if(O[P[i]]){return P[i];
}}},__ru:function(b,c){var f=this.__rt(c);
if(c.extend&&!f){f=c.extend.type;
}b.type=f||j;
if(!f){return;
}var h=function(){};
if(c.extend){h.prototype=new c.extend.$$clazz;
}var g=h.prototype;
var e=c[f];
for(var d in e){g[d]=e[d];
if(g[d].base){if(qx.core.Variant.isSet(A,s)){if(!c.extend){throw new Error("Found base flag in entry '"+d+"' of theme '"+c.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}g[d].base=c.extend;
}}b.$$clazz=h;
b[f]=new h;
},$$registry:{},__rv:[u,p,t,w,k,y,r,m],__rw:qx.core.Variant.select(A,{"on":{"title":v,"aliases":B,"type":v,"extend":B,"colors":B,"borders":B,"decorations":B,"fonts":B,"icons":B,"widgets":B,"appearances":B,"meta":B,"include":B,"patch":B},"default":null}),__rx:qx.core.Variant.select(A,{"on":{"color":B,"border":B,"decoration":B,"font":B,"icon":B,"appearance":B,"widget":B},"default":null}),__ry:qx.core.Variant.select(A,{"on":function(name,W){var bc=this.__rw;

for(var bb in W){if(bc[bb]===undefined){throw new Error('The configuration key "'+bb+'" in theme "'+name+'" is not allowed!');
}
if(W[bb]==null){throw new Error('Invalid key "'+bb+'" in theme "'+name+'"! The value is undefined/null!');
}
if(bc[bb]!==null&&typeof W[bb]!==bc[bb]){throw new Error('Invalid type of key "'+bb+'" in theme "'+name+'"! The type of the key must be "'+bc[bb]+'"!');
}}var ba=[u,p,t,w,k,y,r,m];

for(var i=0,l=ba.length;i<l;i++){var bb=ba[i];

if(W[bb]!==undefined&&(W[bb] instanceof Array||W[bb] instanceof RegExp||W[bb] instanceof Date||W[bb].classname!==undefined)){throw new Error('Invalid key "'+bb+'" in theme "'+name+'"! The value needs to be a map!');
}}var X=0;

for(var i=0,l=ba.length;i<l;i++){var bb=ba[i];

if(W[bb]){X++;
}
if(X>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!W.extend&&X===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(W.meta){var Y;

for(var bb in W.meta){Y=W.meta[bb];

if(this.__rx[bb]===undefined){throw new Error('The key "'+bb+'" is not allowed inside a meta theme block.');
}
if(typeof Y!==this.__rx[bb]){throw new Error('The type of the key "'+bb+'" inside the meta block is wrong.');
}
if(!(typeof Y===B&&Y!==null&&Y.$$type===z)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+bb+'" in theme "'+name+'" is invalid: '+Y);
}}}if(W.extend&&W.extend.$$type!==z){throw new Error('Invalid extend in theme "'+name+'": '+W.extend);
}if(W.include){for(var i=0,l=W.include.length;i<l;i++){if(typeof (W.include[i])==x||W.include[i].$$type!==z){throw new Error('Invalid include in theme "'+name+'": '+W.include[i]);
}}}if(W.patch){for(var i=0,l=W.patch.length;i<l;i++){if(typeof (W.patch[i])==x||W.patch[i].$$type!==z){throw new Error('Invalid patch in theme "'+name+'": '+W.patch[i]);
}}}},"default":function(){}}),patch:function(I,J){var L=this.__rt(J);

if(L!==this.__rt(I)){throw new Error("The mixins '"+I.name+"' are not compatible '"+J.name+"'!");
}var K=J[L];
var M=I.$$clazz.prototype;

for(var N in K){M[N]=K[N];
}},include:function(Q,R){var T=R.type;

if(T!==Q.type){throw new Error("The mixins '"+Q.name+"' are not compatible '"+R.name+"'!");
}var S=R[T];
var U=Q.$$clazz.prototype;

for(var V in S){if(U[V]!==undefined){continue;
}U[V]=S[V];
}}}});
})();
(function(){var x="Boolean",w="focusout",v="interval",u="mouseover",t="mouseout",s="mousemove",r="__rF",q="widget",p="Use isShowInvalidToolTips() instead.",o="qx.ui.tooltip.ToolTip",h="Use setShowInvalidToolTips() instead.",n="Use initShowInvalidToolTips() instead.",k="Use resetShowInvalidToolTips() instead.",f="_applyCurrent",d="qx.ui.tooltip.Manager",j="__rD",i="__rC",l="tooltip-error",c="Use toggleShowInvalidToolTips() instead.",m="singleton",g="Use getShowInvalidToolTips() instead.";
qx.Class.define(d,{type:m,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,u,this.__rM,this,true);
this.__rC=new qx.event.Timer();
this.__rC.addListener(v,this.__rJ,this);
this.__rD=new qx.event.Timer();
this.__rD.addListener(v,this.__rK,this);
this.__rE={left:0,top:0};
},properties:{current:{check:o,nullable:true,apply:f},showInvalidToolTips:{check:x,init:true},showToolTips:{check:x,init:true}},members:{__rE:null,__rD:null,__rC:null,__rF:null,__rG:null,__rH:function(){if(!this.__rF){this.__rF=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__rF;
},__rI:function(){if(!this.__rG){this.__rG=new qx.ui.tooltip.ToolTip().set({appearance:l});
this.__rG.syncAppearance();
}return this.__rG;
},_applyCurrent:function(K,L){if(L&&qx.ui.core.Widget.contains(L,K)){return;
}if(L){if(!L.isDisposed()){L.exclude();
}this.__rC.stop();
this.__rD.stop();
}var N=qx.event.Registration;
var M=document.body;
if(K){this.__rC.startWith(K.getShowTimeout());
N.addListener(M,t,this.__rN,this,true);
N.addListener(M,w,this.__rO,this,true);
N.addListener(M,s,this.__rL,this,true);
}else{N.removeListener(M,t,this.__rN,this,true);
N.removeListener(M,w,this.__rO,this,true);
N.removeListener(M,s,this.__rL,this,true);
}},__rJ:function(e){var D=this.getCurrent();

if(D&&!D.isDisposed()){this.__rD.startWith(D.getHideTimeout());

if(D.getPlaceMethod()==q){D.placeToWidget(D.getOpener());
}else{D.placeToPoint(this.__rE);
}D.show();
}this.__rC.stop();
},__rK:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){z.exclude();
}this.__rD.stop();
this.resetCurrent();
},__rL:function(e){var y=this.__rE;
y.left=e.getDocumentLeft();
y.top=e.getDocumentTop();
},__rM:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I,J,G,F;
while(H!=null){I=H.getToolTip();
J=H.getToolTipText()||null;
G=H.getToolTipIcon()||null;

if(qx.Class.hasInterface(H.constructor,qx.ui.form.IForm)&&!H.isValid()){F=H.getInvalidMessage();
}
if(I||J||G||F){break;
}H=H.getLayoutParent();
}if(!H||
!H.getEnabled()||
H.isBlockToolTip()||
(!F&&!this.getShowToolTips())||(F&&!this.getShowInvalidToolTips())){return;
}
if(F){I=this.__rI().set({label:F});
}
if(!I){I=this.__rH().set({label:J,icon:G});
}this.setCurrent(I);
I.setOpener(H);
},__rN:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!B){return;
}var C=this.getCurrent();
if(C&&(B==C||qx.ui.core.Widget.contains(C,B))){return;
}if(B&&A&&qx.ui.core.Widget.contains(A,B)){return;
}if(C&&!B){this.setCurrent(null);
}else{this.resetCurrent();
}},__rO:function(e){var a=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!a){return;
}var b=this.getCurrent();
if(b&&b==a.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.setShowInvalidToolTips(E);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,u,this.__rM,this,true);
this._disposeObjects(i,j,r);
this.__rE=null;
}});
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
(function(){var b="qx.ui.core.MChildrenHandling";
qx.Mixin.define(b,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(n){return this._indexOf(n);
},add:function(l,m){this._add(l,m);
},addAt:function(i,j,k){this._addAt(i,j,k);
},addBefore:function(c,d,e){this._addBefore(c,d,e);
},addAfter:function(f,g,h){this._addAfter(f,g,h);
},remove:function(o){this._remove(o);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(a){a.getChildren=a._getChildren;
a.hasChildren=a._hasChildren;
a.indexOf=a._indexOf;
a.add=a._add;
a.addAt=a._addAt;
a.addBefore=a._addBefore;
a.addAfter=a._addAfter;
a.remove=a._remove;
a.removeAt=a._removeAt;
a.removeAll=a._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var y="Integer",x="_applyDimension",w="Boolean",v="_applyStretching",u="_applyMargin",t="shorthand",s="_applyAlign",r="qx.debug",q="on",p="allowShrinkY",U="Wrong 'width' argument. ",T="Something went wrong with the layout of ",S="bottom",R="Wrong 'left' argument. ",Q="baseline",P="marginBottom",O="qx.ui.core.LayoutItem",N="center",M="marginTop",L="!",F="allowGrowX",G="middle",D="marginLeft",E="allowShrinkX",B="top",C="right",z="marginRight",A="abstract",H="Wrong 'top' argument. ",I="Wrong 'height' argument. ",K="allowGrowY",J="left";
qx.Class.define(O,{type:A,extend:qx.core.Object,properties:{minWidth:{check:y,nullable:true,apply:x,init:null,themeable:true},width:{check:y,nullable:true,apply:x,init:null,themeable:true},maxWidth:{check:y,nullable:true,apply:x,init:null,themeable:true},minHeight:{check:y,nullable:true,apply:x,init:null,themeable:true},height:{check:y,nullable:true,apply:x,init:null,themeable:true},maxHeight:{check:y,nullable:true,apply:x,init:null,themeable:true},allowGrowX:{check:w,apply:v,init:true,themeable:true},allowShrinkX:{check:w,apply:v,init:true,themeable:true},allowGrowY:{check:w,apply:v,init:true,themeable:true},allowShrinkY:{check:w,apply:v,init:true,themeable:true},allowStretchX:{group:[F,E],mode:t,themeable:true},allowStretchY:{group:[K,p],mode:t,themeable:true},marginTop:{check:y,init:0,apply:u,themeable:true},marginRight:{check:y,init:0,apply:u,themeable:true},marginBottom:{check:y,init:0,apply:u,themeable:true},marginLeft:{check:y,init:0,apply:u,themeable:true},margin:{group:[M,z,P,D],mode:t,themeable:true},alignX:{check:[J,N,C],nullable:true,apply:s,themeable:true},alignY:{check:[B,G,S,Q],nullable:true,apply:s,themeable:true}},members:{__gh:null,__gi:null,__gj:null,__gk:null,__gl:null,__gm:null,__gn:null,getBounds:function(){return this.__gm||this.__gi||null;
},clearSeparators:function(){},renderSeparator:function(f,g){},renderLayout:function(V,top,W,X){if(qx.core.Variant.isSet(r,q)){var Y=T+this.toString()+L;
this.assertInteger(V,R+Y);
this.assertInteger(top,H+Y);
this.assertInteger(W,U+Y);
this.assertInteger(X,I+Y);
}var ba=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var ba=this._getHeightForWidth(W);
}
if(ba!=null&&ba!==this.__gh){this.__gh=ba;
qx.ui.core.queue.Layout.add(this);
return null;
}var bc=this.__gi;

if(!bc){bc=this.__gi={};
}var bb={};

if(V!==bc.left||top!==bc.top){bb.position=true;
bc.left=V;
bc.top=top;
}
if(W!==bc.width||X!==bc.height){bb.size=true;
bc.width=W;
bc.height=X;
}if(this.__gj){bb.local=true;
delete this.__gj;
}
if(this.__gl){bb.margin=true;
delete this.__gl;
}return bb;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__gj;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__gj=true;
this.__gk=null;
},getSizeHint:function(n){var o=this.__gk;

if(o){return o;
}
if(n===false){return null;
}o=this.__gk=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__gh&&this.getHeight()==null){o.height=this.__gh;
}if(o.minWidth>o.width){o.width=o.minWidth;
}
if(o.maxWidth<o.width){o.width=o.maxWidth;
}
if(!this.getAllowGrowX()){o.maxWidth=o.width;
}
if(!this.getAllowShrinkX()){o.minWidth=o.width;
}if(o.minHeight>o.height){o.height=o.minHeight;
}
if(o.maxHeight<o.height){o.height=o.maxHeight;
}
if(!this.getAllowGrowY()){o.maxHeight=o.height;
}
if(!this.getAllowShrinkY()){o.minHeight=o.height;
}return o;
},_computeSizeHint:function(){var bh=this.getMinWidth()||0;
var be=this.getMinHeight()||0;
var bi=this.getWidth()||bh;
var bg=this.getHeight()||be;
var bd=this.getMaxWidth()||Infinity;
var bf=this.getMaxHeight()||Infinity;
return {minWidth:bh,width:bi,maxWidth:bd,minHeight:be,height:bg,maxHeight:bf};
},_hasHeightForWidth:function(){var c=this._getLayout();

if(c){return c.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(a){var b=this._getLayout();

if(b&&b.hasHeightForWidth()){return b.getHeightForWidth(a);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__gl=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__gm;
},setUserBounds:function(h,top,i,j){this.__gm={left:h,top:top,width:i,height:j};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__gm;
qx.ui.core.queue.Layout.add(this);
},__go:{},setLayoutProperties:function(bj){if(bj==null){return;
}var bk=this.__gn;

if(!bk){bk=this.__gn={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bj);
}for(var bl in bj){if(bj[bl]==null){delete bk[bl];
}else{bk[bl]=bj[bl];
}}},getLayoutProperties:function(){return this.__gn||this.__go;
},clearLayoutProperties:function(){delete this.__gn;
},updateLayoutProperties:function(k){var l=this._getLayout();

if(l){if(qx.core.Variant.isSet(r,q)){if(k){for(var m in k){if(k[m]!==null){l.verifyLayoutProperty(this,m,k[m]);
}}}}l.invalidateChildrenCache();
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
},clone:function(){var d=qx.core.Object.prototype.clone.call(this);
var e=this.__gn;

if(e){d.__gn=qx.lang.Object.clone(e);
}return d;
}},destruct:function(){this.$$parent=this.$$subparent=this.__gn=this.__gi=this.__gm=this.__gk=null;
}});
})();
(function(){var k="qx.debug",j="qx.ui.core.DecoratorFactory",i="qxType",h="",g="decorator",f="$$nopool$$",e="qx.ui.core.DecoratorFactory[",d="] ",c="on",b="keys: ",a=", elements: ";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gp={};
},statics:{MAX_SIZE:15,__gq:f},members:{__gp:null,getDecoratorElement:function(l){var q=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(l)){var o=l;
var n=qx.theme.manager.Decoration.getInstance().resolve(l);
}else{var o=q.__gq;
n=l;
}var p=this.__gp;

if(p[o]&&p[o].length>0){var m=p[o].pop();
}else{var m=this._createDecoratorElement(n,o);
}m.$$pooled=false;
return m;
},poolDecorator:function(w){if(!w||w.$$pooled||w.isDisposed()){return;
}var z=qx.ui.core.DecoratorFactory;
var x=w.getId();

if(x==z.__gq){w.dispose();
return;
}var y=this.__gp;

if(!y[x]){y[x]=[];
}
if(y[x].length>z.MAX_SIZE){w.dispose();
}else{w.$$pooled=true;
y[x].push(w);
}},_createDecoratorElement:function(A,B){var C=new qx.html.Decorator(A,B);

if(qx.core.Variant.isSet(k,c)){C.setAttribute(i,g);
}return C;
},toString:qx.core.Variant.select(k,{"on":function(){var t=0;
var u=0;

for(var v in this.__gp){t+=1;
u+=this.__gp[v].length;
}return [e,this.$$hash,d,b,t,a,u].join(h);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var s=this.__gp;

for(var r in s){qx.util.DisposeUtil.disposeArray(s,r);
}}this.__gp=null;
}});
})();
(function(){var eK="on",eJ="px",eI="qx.debug",eH="Boolean",eG="qx.event.type.Mouse",eF="qx.event.type.Drag",eE="visible",eD="qx.event.type.Focus",eC="Integer",eB="excluded",dQ="qx.event.type.Data",dP="_applyPadding",dO="qx.event.type.Event",dN="hidden",dM="contextmenu",dL="String",dK="tabIndex",dJ="backgroundColor",dI="focused",dH="changeVisibility",eR="mshtml",eS="hovered",eP="qx.event.type.KeySequence",eQ="qx.client",eN="absolute",eO="drag",eL="div",eM="object",eT="disabled",eU="move",eq="dragstart",ep="qx.dynlocale",es="dragchange",er="dragend",eu="resize",et="Decorator",ew="zIndex",ev="opacity",eo="default",en="Color",cx="qxType",cy="changeToolTipText",cz="beforeContextmenuOpen",cA="_applyNativeContextMenu",cB="content",cC="_applyBackgroundColor",cD="_applyFocusable",cE="changeShadow",cF="__gr",cG="qx.event.type.KeyInput",eY="createChildControl",eX="Invalid left decorator inset detected: ",eW="Font",eV="_applyShadow",fd="Invalid layout data: ",fc="Could not add widget to itself: ",fb="_applyEnabled",fa="_applySelectable",ff="Number",fe="_applyKeepActive",dg="__gC",dh="_applyVisibility",de="The 'after' widget is not a child of this widget!",df="repeat",dk="qxDraggable",dl="syncAppearance",di="paddingLeft",dj="_applyDroppable",dc="Wrong 'left' argument. ",dd="protector",cO="#",cN="qx.event.type.MouseWheel",cQ="_applyCursor",cP="_applyDraggable",cK="changeTextColor",cJ="$$widget",cM="changeContextMenu",cL="paddingTop",cI="changeSelectable",cH="hideFocus",dr="Invalid top decorator inset detected: ",ds="none",dt="outline",du="The 'before' widget is not a child of this widget!",dm="__gw",dn="_applyAppearance",dp="__gE",dq=" returned an invalid size hint!",dv="_applyOpacity",dw="url(",cY=")",cX="qx.ui.core.Widget",cW="minHeight is larger than maxHeight!",cV="_applyFont",cU="cursor",cT="qxDroppable",cS="__gv",cR="changeZIndex",db="changeEnabled",da="changeFont",dx="_applyDecorator",dy="_applyZIndex",dz="_applyTextColor",dA="qx.ui.menu.Menu",dB="Invalid right decorator inset detected: ",dC="Invalid widget to add: ",dD="_applyToolTipText",dE="The layout of the widget",dF="true",dG="widget",dU="Wrong 'top' argument. ",dT="changeDecorator",dS="changeBackgroundColor",dR="_applyTabIndex",dY="Invalid bottom decorator inset detected: ",dX="changeAppearance",dW="shorthand",dV="/",eb="__gx",ea="",ei="_applyContextMenu",ej="container",eg="paddingBottom",eh="changeNativeContextMenu",ee="__gs",ef="qx.ui.tooltip.ToolTip",ec="qxKeepActive",ed="_applyKeepFocus",ek="paddingRight",em="minWidth is larger than maxWidth!",ey="changeLocale",ex="__gA",eA="qxKeepFocus",ez="qx/static/blank.gif";
qx.Class.define(cX,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__gr=this._createContainerElement();
this.__gs=this.__gD();
this.__gr.add(this.__gs);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dO,disappear:dO,createChildControl:dQ,resize:dQ,move:dQ,syncAppearance:dQ,mousemove:eG,mouseover:eG,mouseout:eG,mousedown:eG,mouseup:eG,click:eG,dblclick:eG,contextmenu:eG,beforeContextmenuOpen:eG,mousewheel:cN,keyup:eP,keydown:eP,keypress:eP,keyinput:cG,focus:eD,blur:eD,focusin:eD,focusout:eD,activate:eD,deactivate:eD,capture:dO,losecapture:dO,drop:eF,dragleave:eF,dragover:eF,drag:eF,dragstart:eF,dragend:eF,dragchange:eF,droprequest:eF},properties:{paddingTop:{check:eC,init:0,apply:dP,themeable:true},paddingRight:{check:eC,init:0,apply:dP,themeable:true},paddingBottom:{check:eC,init:0,apply:dP,themeable:true},paddingLeft:{check:eC,init:0,apply:dP,themeable:true},padding:{group:[cL,ek,eg,di],mode:dW,themeable:true},zIndex:{nullable:true,init:null,apply:dy,event:cR,check:eC,themeable:true},decorator:{nullable:true,init:null,apply:dx,event:dT,check:et,themeable:true},shadow:{nullable:true,init:null,apply:eV,event:cE,check:et,themeable:true},backgroundColor:{nullable:true,check:en,apply:cC,event:dS,themeable:true},textColor:{nullable:true,check:en,apply:dz,event:cK,themeable:true,inheritable:true},font:{nullable:true,apply:cV,check:eW,event:da,themeable:true,inheritable:true,dereference:true},opacity:{check:ff,apply:dv,themeable:true,nullable:true,init:null},cursor:{check:dL,apply:cQ,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:ef,nullable:true},toolTipText:{check:dL,nullable:true,event:cy,apply:dD},toolTipIcon:{check:dL,nullable:true,event:cy},blockToolTip:{check:eH,init:false},visibility:{check:[eE,dN,eB],init:eE,apply:dh,event:dH},enabled:{init:true,check:eH,inheritable:true,apply:fb,event:db},anonymous:{init:false,check:eH},tabIndex:{check:eC,nullable:true,apply:dR},focusable:{check:eH,init:false,apply:cD},keepFocus:{check:eH,init:false,apply:ed},keepActive:{check:eH,init:false,apply:fe},draggable:{check:eH,init:false,apply:cP},droppable:{check:eH,init:false,apply:dj},selectable:{check:eH,init:false,event:cI,apply:fa},contextMenu:{check:dA,apply:ei,nullable:true,event:cM},nativeContextMenu:{check:eH,init:false,themeable:true,event:eh,apply:cA},appearance:{check:dL,init:dG,apply:dn,event:dX}},statics:{DEBUG:false,getWidgetByElement:function(w){while(w){var x=w.$$widget;
if(x!=null){return qx.core.ObjectRegistry.fromHashCode(x);
}try{w=w.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,ci){while(ci){if(parent==ci){return true;
}ci=ci.getLayoutParent();
}return false;
},__gt:new qx.ui.core.DecoratorFactory(),__gu:new qx.ui.core.DecoratorFactory()},members:{__gr:null,__gs:null,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,_getLayout:function(){return this.__gA;
},_setLayout:function(hk){if(qx.core.Variant.isSet(eI,eK)){if(hk){this.assertInstance(hk,qx.ui.layout.Abstract);
}}
if(this.__gA){this.__gA.connectToWidget(null);
}
if(hk){hk.connectToWidget(this);
}this.__gA=hk;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var hs=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(hs);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(hs);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__gB:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fs=qx.theme.manager.Decoration.getInstance();
var fu=fs.resolve(a).getInsets();
var ft=fs.resolve(b).getInsets();

if(fu.top!=ft.top||fu.right!=ft.right||fu.bottom!=ft.bottom||fu.left!=ft.left){return true;
}return false;
},renderLayout:function(bw,top,bx,by){var bH=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,bw,top,bx,by);
if(!bH){return;
}var bA=this.getContainerElement();
var content=this.getContentElement();
var bE=bH.size||this._updateInsets;
var bI=eJ;
var bF={};
if(bH.position){bF.left=bw+bI;
bF.top=top+bI;
}if(bH.size){bF.width=bx+bI;
bF.height=by+bI;
}
if(bH.position||bH.size){bA.setStyles(bF);
}
if(bE||bH.local||bH.margin){var bz=this.getInsets();
var innerWidth=bx-bz.left-bz.right;
var innerHeight=by-bz.top-bz.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bC={};

if(this._updateInsets){bC.left=bz.left+bI;
bC.top=bz.top+bI;
}
if(bE){bC.width=innerWidth+bI;
bC.height=innerHeight+bI;
}
if(bE||this._updateInsets){content.setStyles(bC);
}
if(bH.size){var bG=this.__gx;

if(bG){bG.setStyles({width:bx+eJ,height:by+eJ});
}}
if(bH.size||this._updateInsets){if(this.__gv){this.__gv.resize(bx,by);
}}
if(bH.size){if(this.__gw){var bz=this.__gw.getInsets();
var bD=bx+bz.left+bz.right;
var bB=by+bz.top+bz.bottom;
this.__gw.resize(bD,bB);
}}
if(bE||bH.local||bH.margin){if(this.__gA&&this.hasLayoutChildren()){this.__gA.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(bH.position&&this.hasListener(eU)){this.fireDataEvent(eU,this.getBounds());
}
if(bH.size&&this.hasListener(eu)){this.fireDataEvent(eu,this.getBounds());
}delete this._updateInsets;
return bH;
},__gC:null,clearSeparators:function(){var z=this.__gC;

if(!z){return;
}var A=qx.ui.core.Widget.__gt;
var content=this.getContentElement();
var y;

for(var i=0,l=z.length;i<l;i++){y=z[i];
A.poolDecorator(y);
content.remove(y);
}z.length=0;
},renderSeparator:function(M,N){var O=qx.ui.core.Widget.__gt.getDecoratorElement(M);
this.getContentElement().add(O);
O.resize(N.width,N.height);
O.setStyles({left:N.left+eJ,top:N.top+eJ});
if(!this.__gC){this.__gC=[O];
}else{this.__gC.push(O);
}},_computeSizeHint:function(){var gM=this.getWidth();
var gL=this.getMinWidth();
var gH=this.getMaxWidth();
var gK=this.getHeight();
var gI=this.getMinHeight();
var gJ=this.getMaxHeight();

if(qx.core.Variant.isSet(eI,eK)){if(gL!==null&&gH!==null){this.assert(gL<=gH,em);
}
if(gI!==null&&gJ!==null){this.assert(gI<=gJ,cW);
}}var gN=this._getContentHint();
var gG=this.getInsets();
var gP=gG.left+gG.right;
var gO=gG.top+gG.bottom;

if(gM==null){gM=gN.width+gP;
}
if(gK==null){gK=gN.height+gO;
}
if(gL==null){gL=gP;

if(gN.minWidth!=null){gL+=gN.minWidth;
}}
if(gI==null){gI=gO;

if(gN.minHeight!=null){gI+=gN.minHeight;
}}
if(gH==null){if(gN.maxWidth==null){gH=Infinity;
}else{gH=gN.maxWidth+gP;
}}
if(gJ==null){if(gN.maxHeight==null){gJ=Infinity;
}else{gJ=gN.maxHeight+gO;
}}return {width:gM,minWidth:gL,maxWidth:gH,height:gK,minHeight:gI,maxHeight:gJ};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__gA){this.__gA.invalidateLayoutCache();
}},_getContentHint:function(){var cu=this.__gA;

if(cu){if(this.hasLayoutChildren()){var cv=cu.getSizeHint();

if(qx.core.Variant.isSet(eI,eK)){var ct=dE+this.toString()+dq;
this.assertInteger(cv.width,dc+ct);
this.assertInteger(cv.height,dU+ct);
}return cv;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(bW){var cb=this.getInsets();
var ce=cb.left+cb.right;
var cd=cb.top+cb.bottom;
var cc=bW-ce;
var bY=this._getLayout();

if(bY&&bY.hasHeightForWidth()){var bX=bY.getHeightForWidth(bW);
}else{bX=this._getContentHeightForWidth(cc);
}var ca=bX+cd;
return ca;
},_getContentHeightForWidth:function(cs){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fB=this.getPaddingRight();
var fD=this.getPaddingBottom();
var fC=this.getPaddingLeft();

if(this.__gv){var fA=this.__gv.getInsets();

if(qx.core.Variant.isSet(eI,eK)){this.assertNumber(fA.top,dr+fA.top);
this.assertNumber(fA.right,dB+fA.right);
this.assertNumber(fA.bottom,dY+fA.bottom);
this.assertNumber(fA.left,eX+fA.left);
}top+=fA.top;
fB+=fA.right;
fD+=fA.bottom;
fC+=fA.left;
}return {"top":top,"right":fB,"bottom":fD,"left":fC};
},getInnerSize:function(){var u=this.getBounds();

if(!u){return null;
}var t=this.getInsets();
return {width:u.width-t.left-t.right,height:u.height-t.top-t.bottom};
},show:function(){this.setVisibility(eE);
},hide:function(){this.setVisibility(dN);
},exclude:function(){this.setVisibility(eB);
},isVisible:function(){return this.getVisibility()===eE;
},isHidden:function(){return this.getVisibility()!==eE;
},isExcluded:function(){return this.getVisibility()===eB;
},isSeeable:function(){var bj=this.getContainerElement().getDomElement();

if(bj){return bj.offsetWidth>0;
}var bi=this;

do{if(!bi.isVisible()){return false;
}
if(bi.isRootWidget()){return true;
}bi=bi.getLayoutParent();
}while(bi);
return false;
},_createContainerElement:function(){var bv={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(eI,eK)){bv.qxType=ej;
bv.qxClass=this.classname;
}var bu={zIndex:0,position:eN};
return new qx.html.Element(eL,bu,bv);
},__gD:function(){var fV=this._createContentElement();

if(qx.core.Variant.isSet(eI,eK)){fV.setAttribute(cx,cB);
}fV.setStyles({"position":eN,"zIndex":10});
return fV;
},_createContentElement:function(){return new qx.html.Element(eL,{overflowX:dN,overflowY:dN});
},getContainerElement:function(){return this.__gr;
},getContentElement:function(){return this.__gs;
},getDecoratorElement:function(){return this.__gv||null;
},getShadowElement:function(){return this.__gw||null;
},__gE:null,getLayoutChildren:function(){var fN=this.__gE;

if(!fN){return this.__gF;
}var fO;

for(var i=0,l=fN.length;i<l;i++){var fM=fN[i];

if(fM.hasUserBounds()||fM.isExcluded()){if(fO==null){fO=fN.concat();
}qx.lang.Array.remove(fO,fM);
}}return fO||fN;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var hr=this.__gA;

if(hr){hr.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var fv=this.__gE;

if(!fv){return false;
}var fw;

for(var i=0,l=fv.length;i<l;i++){fw=fv[i];

if(!fw.hasUserBounds()&&!fw.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__gF:[],_getChildren:function(){return this.__gE||this.__gF;
},_indexOf:function(B){var C=this.__gE;

if(!C){return -1;
}return C.indexOf(B);
},_hasChildren:function(){var q=this.__gE;
return q!=null&&(!!q[0]);
},addChildrenToQueue:function(go){var gp=this.__gE;

if(!gp){return;
}var gq;

for(var i=0,l=gp.length;i<l;i++){gq=gp[i];
go[gq.$$hash]=gq;
gq.addChildrenToQueue(go);
}},_add:function(bU,bV){if(bU.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,bU);
}
if(this.__gE){this.__gE.push(bU);
}else{this.__gE=[bU];
}this.__gG(bU,bV);
},_addAt:function(fG,fH,fI){if(!this.__gE){this.__gE=[];
}if(fG.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,fG);
}var fJ=this.__gE[fH];

if(fJ===fG){return fG.setLayoutProperties(fI);
}
if(fJ){qx.lang.Array.insertBefore(this.__gE,fG,fJ);
}else{this.__gE.push(fG);
}this.__gG(fG,fI);
},_addBefore:function(fx,fy,fz){if(qx.core.Variant.isSet(eI,eK)){this.assertInArray(fy,this._getChildren(),du);
}
if(fx==fy){return;
}
if(!this.__gE){this.__gE=[];
}if(fx.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,fx);
}qx.lang.Array.insertBefore(this.__gE,fx,fy);
this.__gG(fx,fz);
},_addAfter:function(ho,hp,hq){if(qx.core.Variant.isSet(eI,eK)){this.assertInArray(hp,this._getChildren(),de);
}
if(ho==hp){return;
}
if(!this.__gE){this.__gE=[];
}if(ho.getLayoutParent()==this){qx.lang.Array.remove(this.__gE,ho);
}qx.lang.Array.insertAfter(this.__gE,ho,hp);
this.__gG(ho,hq);
},_remove:function(s){if(!this.__gE){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__gE,s);
this.__gH(s);
},_removeAt:function(fi){if(!this.__gE){throw new Error("This widget has no children!");
}var fj=this.__gE[fi];
qx.lang.Array.removeAt(this.__gE,fi);
this.__gH(fj);
return fj;
},_removeAll:function(){if(!this.__gE){return;
}var fP=this.__gE.concat();
this.__gE.length=0;

for(var i=fP.length-1;i>=0;i--){this.__gH(fP[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__gG:function(gg,gh){if(qx.core.Variant.isSet(eI,eK)){this.assertInstance(gg,qx.ui.core.LayoutItem,dC+gg);
this.assertNotIdentical(gg,this,fc+gg);

if(gh!=null){this.assertType(gh,eM,fd+gh);
}}var parent=gg.getLayoutParent();

if(parent&&parent!=this){parent._remove(gg);
}gg.setLayoutParent(this);
if(gh){gg.setLayoutProperties(gh);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gg);
}},__gH:function(L){if(qx.core.Variant.isSet(eI,eK)){this.assertNotUndefined(L);
}
if(L.getLayoutParent()!==this){throw new Error("Remove Error: "+L+" is not a child of this widget!");
}L.setLayoutParent(null);
if(this.__gA){this.__gA.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(L);
}},capture:function(v){this.getContainerElement().capture(v);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(U,V,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__gx){return;
}var cq=this.__gx=new qx.html.Element;

if(qx.core.Variant.isSet(eI,eK)){cq.setAttribute(cx,dd);
}cq.setStyles({position:eN,top:0,left:0,zIndex:7});
var cr=this.getBounds();

if(cr){this.__gx.setStyles({width:cr.width+eJ,height:cr.height+eJ});
}if(qx.core.Variant.isSet(eQ,eR)){cq.setStyles({backgroundImage:dw+qx.util.ResourceManager.getInstance().toUri(ez)+cY,backgroundRepeat:df});
}this.getContainerElement().add(cq);
},_applyDecorator:function(gQ,gR){if(qx.core.Variant.isSet(eI,eK)){if(gQ&&typeof gQ===eM){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+gQ);
}}}var gV=qx.ui.core.Widget.__gt;
var gT=this.getContainerElement();
if(!this.__gx&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gR){gT.remove(this.__gv);
gV.poolDecorator(this.__gv);
}if(gQ){var gU=this.__gv=gV.getDecoratorElement(gQ);
gU.setStyle(ew,5);
var gS=this.getBackgroundColor();
gU.tint(gS);
gT.add(gU);
}else{delete this.__gv;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gQ&&!gR&&gS){this.getContainerElement().setStyle(dJ,null);
}if(this.__gB(gR,gQ)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gQ){var gW=this.getBounds();

if(gW){gU.resize(gW.width,gW.height);
this.__gx&&
this.__gx.setStyles({width:gW.width+eJ,height:gW.height+eJ});
}}},_applyShadow:function(c,d){var n=qx.ui.core.Widget.__gu;
var g=this.getContainerElement();
if(d){g.remove(this.__gw);
n.poolDecorator(this.__gw);
}if(c){var j=this.__gw=n.getDecoratorElement(c);
g.add(j);
var m=j.getInsets();
j.setStyles({left:(-m.left)+eJ,top:(-m.top)+eJ});
var k=this.getBounds();

if(k){var h=k.width+m.left+m.right;
var f=k.height+m.top+m.bottom;
j.resize(h,f);
}j.tint(null);
}else{delete this.__gw;
}},_applyToolTipText:function(bM,bN){if(qx.core.Variant.isSet(ep,eK)){if(this.__gz){return;
}var bO=qx.locale.Manager.getInstance();
this.__gz=bO.addListener(ey,function(){if(bM&&bM.translate){this.setToolTipText(bM.translate());
}},this);
}},_applyTextColor:function(gr,gs){},_applyZIndex:function(P,Q){this.getContainerElement().setStyle(ew,P==null?0:P);
},_applyVisibility:function(cl,cm){var cn=this.getContainerElement();

if(cl===eE){cn.show();
}else{cn.hide();
}var parent=this.$$parent;

if(parent&&(cm==null||cl==null||cm===eB||cl===eB)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gt,gu){this.getContainerElement().setStyle(ev,gt==1?null:gt);
if(qx.core.Variant.isSet(eQ,eR)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gv=(gt==1||gt==null)?null:0.99;
this.getContentElement().setStyle(ev,gv);
}}},_applyCursor:function(bs,bt){if(bs==null&&!this.isSelectable()){bs=eo;
}this.getContainerElement().setStyle(cU,bs,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bP,bQ){var bR=this.getBackgroundColor();
var bT=this.getContainerElement();

if(this.__gv){this.__gv.tint(bR);
bT.setStyle(dJ,null);
}else{var bS=qx.theme.manager.Color.getInstance().resolve(bR);
bT.setStyle(dJ,bS);
}},_applyFont:function(bg,bh){},__gI:null,$$stateChanges:null,_forwardStates:null,hasState:function(fE){var fF=this.__gI;
return !!fF&&!!fF[fE];
},addState:function(hd){var he=this.__gI;

if(!he){he=this.__gI={};
}
if(he[hd]){return;
}this.__gI[hd]=true;
if(hd===eS){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var hh=this.__gL;

if(forward&&forward[hd]&&hh){var hf;

for(var hg in hh){hf=hh[hg];

if(hf instanceof qx.ui.core.Widget){hh[hg].addState(hd);
}}}},removeState:function(D){var E=this.__gI;

if(!E||!E[D]){return;
}delete this.__gI[D];
if(D===eS){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var H=this.__gL;

if(forward&&forward[D]&&H){for(var G in H){var F=H[G];

if(F instanceof qx.ui.core.Widget){F.removeState(D);
}}}},replaceState:function(bm,bn){var bo=this.__gI;

if(!bo){bo=this.__gI={};
}
if(!bo[bn]){bo[bn]=true;
}
if(bo[bm]){delete bo[bm];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var br=this.__gL;

if(forward&&forward[bn]&&br){for(var bq in br){var bp=br[bq];

if(bp instanceof qx.ui.core.Widget){bp.replaceState(bm,bn);
}}}},__gJ:null,__gK:null,syncAppearance:function(){var gA=this.__gI;
var gz=this.__gJ;
var gB=qx.theme.manager.Appearance.getInstance();
var gx=qx.core.Property.$$method.setThemed;
var gF=qx.core.Property.$$method.resetThemed;
if(this.__gK){delete this.__gK;
if(gz){var gw=gB.styleFrom(gz,gA,null,this.getAppearance());
if(gw){gz=null;
}}}if(!gz){var gy=this;
var gE=[];

do{gE.push(gy.$$subcontrol||gy.getAppearance());
}while(gy=gy.$$subparent);
gz=this.__gJ=gE.reverse().join(dV).replace(/#[0-9]+/g,ea);
}var gC=gB.styleFrom(gz,gA,null,this.getAppearance());

if(gC){if(gw){for(var gD in gw){if(gC[gD]===undefined){this[gF[gD]]();
}}}if(qx.core.Variant.isSet(eI,eK)){for(var gD in gC){if(!this[gx[gD]]){throw new Error(this.classname+' has no themeable property "'+gD+'" while styling '+gz);
}}}for(var gD in gC){gC[gD]===undefined?this[gF[gD]]():this[gx[gD]](gC[gD]);
}}else if(gw){for(var gD in gw){this[gF[gD]]();
}}this.fireDataEvent(dl,this.__gI);
},_applyAppearance:function(fg,fh){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__gy){qx.ui.core.queue.Appearance.add(this);
this.__gy=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__gK=true;
qx.ui.core.queue.Appearance.add(this);
var bL=this.__gL;

if(bL){var bJ;

for(var bK in bL){bJ=bL[bK];

if(bJ instanceof qx.ui.core.Widget){bJ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var r=this;

while(r.getAnonymous()){r=r.getLayoutParent();

if(!r){return null;
}}return r;
},getFocusTarget:function(){var I=this;

if(!I.getEnabled()){return null;
}
while(I.getAnonymous()||!I.getFocusable()){I=I.getLayoutParent();

if(!I||!I.getEnabled()){return null;
}}return I;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gk,gl){var gm=this.getFocusElement();
if(gk){var gn=this.getTabIndex();

if(gn==null){gn=1;
}gm.setAttribute(dK,gn);
if(qx.core.Variant.isSet(eQ,eR)){gm.setAttribute(cH,dF);
}else{gm.setStyle(dt,ds);
}}else{if(gm.isNativelyFocusable()){gm.setAttribute(dK,-1);
}else if(gl){gm.setAttribute(dK,null);
}}},_applyKeepFocus:function(gc){var gd=this.getFocusElement();
gd.setAttribute(eA,gc?eK:null);
},_applyKeepActive:function(fK){var fL=this.getContainerElement();
fL.setAttribute(ec,fK?eK:null);
},_applyTabIndex:function(ch){if(ch==null){ch=1;
}else if(ch<1||ch>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&ch!=null){this.getFocusElement().setAttribute(dK,ch);
}},_applySelectable:function(fW,fX){if(fX!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(fW);
this.getContentElement().setSelectable(fW);
},_applyEnabled:function(fT,fU){if(fT===false){this.addState(eT);
this.removeState(eS);
if(this.isFocusable()){this.removeState(dI);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eT);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(fq,fr,name){},_applyContextMenu:function(fo,fp){if(fp){fp.removeState(dM);

if(fp.getOpener()==this){fp.resetOpener();
}
if(!fo){this.removeListener(dM,this._onContextMenuOpen);
fp.removeListener(dH,this._onBeforeContextMenuOpen,this);
}}
if(fo){fo.setOpener(this);
fo.addState(dM);

if(!fp){this.addListener(dM,this._onContextMenuOpen);
fo.addListener(dH,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==eE&&this.hasListener(cz)){this.fireDataEvent(cz,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cj,ck){if(!this.isEnabled()&&cj===true){cj=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cj){this.addListener(eq,this._onDragStart);
this.addListener(eO,this._onDrag);
this.addListener(er,this._onDragEnd);
this.addListener(es,this._onDragChange);
}else{this.removeListener(eq,this._onDragStart);
this.removeListener(eO,this._onDrag);
this.removeListener(er,this._onDragEnd);
this.removeListener(es,this._onDragChange);
}this.getContainerElement().setAttribute(dk,cj?eK:null);
},_applyDroppable:function(hm,hn){if(!this.isEnabled()&&hm===true){hm=false;
}this.getContainerElement().setAttribute(cT,hm?eK:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eo);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var J=qx.ui.core.DragDropCursor.getInstance();
var K=e.getCurrentAction();
K?J.setAction(K):J.resetAction();
},visualizeFocus:function(){this.addState(dI);
},visualizeBlur:function(){this.removeState(dI);
},scrollChildIntoView:function(fk,fl,fm,fn){this.scrollChildIntoViewX(fk,fl,fn);
this.scrollChildIntoViewY(fk,fm,fn);
},scrollChildIntoViewX:function(fY,ga,gb){this.getContentElement().scrollChildIntoViewX(fY.getContainerElement(),ga,gb);
},scrollChildIntoViewY:function(fQ,fR,fS){this.getContentElement().scrollChildIntoViewY(fQ.getContainerElement(),fR,fS);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(hl){if(!this.__gL){return false;
}return !!this.__gL[hl];
},__gL:null,_getCreatedChildControls:function(){return this.__gL;
},getChildControl:function(R,S){if(!this.__gL){if(S){return null;
}this.__gL={};
}var T=this.__gL[R];

if(T){return T;
}
if(S===true){return null;
}return this._createChildControl(R);
},_showChildControl:function(W){var X=this.getChildControl(W);
X.show();
return X;
},_excludeChildControl:function(ht){var hu=this.getChildControl(ht,true);

if(hu){hu.exclude();
}},_isChildControlVisible:function(co){var cp=this.getChildControl(co,true);

if(cp){return cp.isVisible();
}return false;
},_createChildControl:function(Y){if(!this.__gL){this.__gL={};
}else if(this.__gL[Y]){throw new Error("Child control '"+Y+"' already created!");
}var bd=Y.indexOf(cO);

if(bd==-1){var ba=this._createChildControlImpl(Y);
}else{var ba=this._createChildControlImpl(Y.substring(0,bd));
}
if(!ba){throw new Error("Unsupported control: "+Y);
}ba.$$subcontrol=Y;
ba.$$subparent=this;
var bb=this.__gI;
var forward=this._forwardStates;

if(bb&&forward&&ba instanceof qx.ui.core.Widget){for(var bc in bb){if(forward[bc]){ba.addState(bc);
}}}this.fireDataEvent(eY,ba);
return this.__gL[Y]=ba;
},_createChildControlImpl:function(cw){return null;
},_disposeChildControls:function(){var hc=this.__gL;

if(!hc){return;
}var ha=qx.ui.core.Widget;

for(var hb in hc){var gY=hc[hb];

if(!ha.contains(this,gY)){gY.destroy();
}else{gY.dispose();
}}delete this.__gL;
},_findTopControl:function(){var gX=this;

while(gX){if(!gX.$$subparent){return gX;
}gX=gX.$$subparent;
}return null;
},getContainerLocation:function(o){var p=this.getContainerElement().getDomElement();
return p?qx.bom.element.Location.get(p,o):null;
},getContentLocation:function(gi){var gj=this.getContentElement().getDomElement();
return gj?qx.bom.element.Location.get(gj,gi):null;
},setDomLeft:function(cf){var cg=this.getContainerElement().getDomElement();

if(cg){cg.style.left=cf+eJ;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(be){var bf=this.getContainerElement().getDomElement();

if(bf){bf.style.top=be+eJ;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(bk,top){var bl=this.getContainerElement().getDomElement();

if(bl){bl.style.left=bk+eJ;
bl.style.top=top+eJ;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hi=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hj=this.getChildren();

for(var i=0,l=hj.length;i<l;i++){hi.add(hj[i].clone());
}}return hi;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(ep,eK)){if(this.__gz){qx.locale.Manager.getInstance().removeListenerById(this.__gz);
}}this.getContainerElement().setAttribute(cJ,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var gf=qx.ui.core.Widget;
var ge=this.getContainerElement();

if(this.__gv){ge.remove(this.__gv);
gf.__gt.poolDecorator(this.__gv);
}
if(this.__gw){ge.remove(this.__gw);
gf.__gu.poolDecorator(this.__gw);
}this.clearSeparators();
this.__gv=this.__gw=this.__gC=null;
}else{this._disposeArray(dg);
this._disposeObjects(cS,dm);
}this._disposeArray(dp);
this.__gI=this.__gL=null;
this._disposeObjects(ex,cF,ee,eb);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){qx.ui.core.Widget.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(a){this.fireNonBubblingEvent(c,qx.event.type.Data,[a]);
},_afterRemoveChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
}},defer:function(g,h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__im:null,__in:null,__io:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(y,z){if(z){this.__ip();
this.__im=qx.lang.Function.bind(this.placeToWidget,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__im);
this.__io=function(){this.__ip();
};
this.addListener(g,this.__io,this);
}var A=y.getContainerLocation()||this.getLayoutLocation(y);
this.__ir(A);
},__ip:function(){if(this.__im){qx.event.Idle.getInstance().removeListener(i,this.__im);
this.__im=null;
}
if(this.__io){this.removeListener(g,this.__io,this);
this.__io=null;
}},placeToMouse:function(event){var J=event.getDocumentLeft();
var top=event.getDocumentTop();
var I={left:J,top:top,right:J,bottom:top};
this.__ir(I);
},placeToElement:function(B,C){var location=qx.bom.element.Location.get(B);
var D={left:location.left,top:location.top,right:location.left+B.offsetWidth,bottom:location.top+B.offsetHeight};
if(C){this.__im=qx.lang.Function.bind(this.placeToElement,this,B,false);
qx.event.Idle.getInstance().addListener(i,this.__im);
this.addListener(g,function(){if(this.__im){qx.event.Idle.getInstance().removeListener(i,this.__im);
this.__im=null;
}},this);
}this.__ir(D);
},placeToPoint:function(Q){var R={left:Q.left,top:Q.top,right:Q.left,bottom:Q.top};
this.__ir(R);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__iq:function(F){var G=null;

if(this._computePlacementSize){var G=this._computePlacementSize();
}else if(this.isVisible()){var G=this.getBounds();
}
if(G==null){this.addListenerOnce(q,function(){this.__iq(F);
},this);
}else{F.call(this,G);
}},__ir:function(H){this.__iq(function(S){var T=qx.util.placement.Placement.compute(S,this.getLayoutParent().getBounds(),H,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(T.left,T.top);
});
}},destruct:function(){this.__ip();
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
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(s,t){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(s!=null){this.setLabel(s);
}
if(t!=null){this.setIcon(t);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case l:y=new qx.ui.basic.Atom;
this._add(y);
break;
}return y||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,x);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(l);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(m,n){var o=this.getChildControl(l);
m==null?o.resetLabel():o.setLabel(m);
},_applyRich:function(p,q){var r=this.getChildControl(l);
r.setRich(p);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gc:{},remove:function(m){delete this.__gc[m.$$hash];
},add:function(c){this.__gc[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__gf();
for(var i=d.length-1;i>=0;i--){var e=d[i];
if(e.hasValidLayout()){continue;
}if(e.isRootWidget()&&!e.hasUserBounds()){var g=e.getSizeHint();
e.renderLayout(0,0,g.width,g.height);
}else{var f=e.getBounds();
e.renderLayout(f.left,f.top,f.width,f.height);
}}},getNestingLevel:function(h){var j=this.__ge;
var l=0;
var parent=h;
while(true){if(j[parent.$$hash]!=null){l+=j[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
l+=1;
}var k=l;

while(h&&h!==parent){j[h.$$hash]=k--;
h=h.$$parent;
}return l;
},__gd:function(){var A=qx.ui.core.queue.Visibility;
this.__ge={};
var z=[];
var y=this.__gc;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__gf:function(){var q=[];
var s=this.__gd();

for(var p=s.length-1;p>=0;p--){if(!s[p]){continue;
}
for(var o in s[p]){var n=s[p][o];
if(p==0||n.isRootWidget()||n.hasUserBounds()){q.push(n);
n.invalidateLayoutCache();
continue;
}var u=n.getSizeHint(false);

if(u){n.invalidateLayoutCache();
var r=n.getSizeHint();
var t=(!n.getBounds()||u.minWidth!==r.minWidth||u.width!==r.width||u.maxWidth!==r.maxWidth||u.minHeight!==r.minHeight||u.height!==r.height||u.maxHeight!==r.maxHeight);
}else{t=true;
}
if(t){var parent=n.getLayoutParent();

if(!s[p-1]){s[p-1]={};
}s[p-1][parent.$$hash]=parent;
}else{q.push(n);
}}}return q;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__cJ=b;
this.__cK=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__cJ:null,__cK:null,canHandleEvent:function(d,e){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__cJ=this.__cK=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__cL={};
this.__cM=qx.lang.Function.bind(this.__cQ,this);
this.__cN=false;
},members:{__cO:null,__cP:null,__cL:null,__cN:null,__cM:null,schedule:function(g){if(this.__cO==null){this.__cO=window.setTimeout(this.__cM,0);
}var h=g.toHashCode();
if(this.__cP&&this.__cP[h]){return;
}this.__cL[h]=g;
this.__cN=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__cP&&this.__cP[d]){this.__cP[d]=null;
return;
}delete this.__cL[d];
if(qx.lang.Object.isEmpty(this.__cL)&&this.__cO!=null){window.clearTimeout(this.__cO);
this.__cO=null;
}},__cQ:qx.event.GlobalError.observeMethod(function(){this.__cO=null;
while(this.__cN){this.__cP=qx.lang.Object.clone(this.__cL);
this.__cL={};
this.__cN=false;

for(var f in this.__cP){var e=this.__cP[f];

if(e){this.__cP[f]=null;
e.call();
}}}this.__cP=null;
})},destruct:function(){if(this.__cO!=null){window.clearTimeout(this.__cO);
}this.__cM=this.__cL=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__cR=d;
this.__cS=e||null;
this.__cT=qx.util.DeferredCallManager.getInstance();
},members:{__cR:null,__cS:null,__cT:null,cancel:function(){this.__cT.cancel(this);
},schedule:function(){this.__cT.schedule(this);
},call:function(){this.__cS?this.__cR.apply(this.__cS):this.__cR();
}},destruct:function(a,b){this.cancel();
this.__cS=this.__cR=this.__cT=null;
}});
})();
(function(){var di="on",dh="element",dg="qx.debug",df="qx.client",de="qxSelectable",dd="off",dc="': ",da="Invalid context for callback.",cY="div",cX="'",dN="Invalid event type.",dM="Invalid callback function",dL="",dK="mshtml",dJ="none",dI="scroll",dH="text",dG="|bubble|",dF="qx.html.Element",dE="|capture|",dq="Invalid capture flag.",dr="focus",dn="Failed to add event listener for type '",dp="blur",dl="deactivate",dm="capture",dj="userSelect",dk=" from the target '",ds="-moz-none",dt="visible",dw="releaseCapture",dv="tabIndex",dy="activate",dx="MozUserSelect",dA="normal",dz=" to the target '",du="Failed to remove event listener for type '",dD="__dr",dC="Invalid capture falg.",dB="hidden";
qx.Class.define(dF,{extend:qx.core.Object,construct:function(bI,bJ,bK){qx.core.Object.call(this);
this.__cU=bI||cY;
this.__cV=bJ||null;
this.__cW=bK||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cX:{},_scheduleFlush:function(cB){qx.html.Element.__dC.schedule();
},flush:function(){var G;

if(qx.core.Variant.isSet(dg,di)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var w=this.__cY();
var v=w.getFocus();

if(v&&this.__dd(v)){w.blur(v);
}var N=w.getActive();

if(N&&this.__dd(N)){qx.bom.Element.deactivate(N);
}var B=this.__db();

if(B&&this.__dd(B)){qx.bom.Element.releaseCapture(B);
}var H=[];
var I=this._modified;

for(var F in I){G=I[F];
if(G.__dv()){if(G.__de&&qx.dom.Hierarchy.isRendered(G.__de)){H.push(G);
}else{if(qx.core.Variant.isSet(dg,di)){if(this.DEBUG){G.debug("Flush invisible element");
}}G.__du();
}delete I[F];
}}
for(var i=0,l=H.length;i<l;i++){G=H[i];

if(qx.core.Variant.isSet(dg,di)){if(this.DEBUG){G.debug("Flush rendered element");
}}G.__du();
}var D=this._visibility;

for(var F in D){G=D[F];
var J=G.__de;

if(!J){delete D[F];
continue;
}
if(qx.core.Variant.isSet(dg,di)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+G.__dh);
}}if(!G.$$disposed){J.style.display=G.__dh?dL:dJ;
if(qx.core.Variant.isSet(df,dK)){if(!(document.documentMode>=8)){J.style.visibility=G.__dh?dt:dB;
}}}delete D[F];
}var scroll=this._scroll;

for(var F in scroll){G=scroll[F];
var O=G.__de;

if(O&&O.offsetWidth){var A=true;
if(G.__dk!=null){G.__de.scrollLeft=G.__dk;
delete G.__dk;
}if(G.__dl!=null){G.__de.scrollTop=G.__dl;
delete G.__dl;
}var K=G.__di;

if(K!=null){var E=K.element.getDomElement();

if(E&&E.offsetWidth){qx.bom.element.Scroll.intoViewX(E,O,K.align);
delete G.__di;
}else{A=false;
}}var L=G.__dj;

if(L!=null){var E=L.element.getDomElement();

if(E&&E.offsetWidth){qx.bom.element.Scroll.intoViewY(E,O,L.align);
delete G.__dj;
}else{A=false;
}}if(A){delete scroll[F];
}}}var z={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var M=this._actions[i];
var J=M.element.__de;

if(!J||!z[M.type]&&!M.element.__dv()){continue;
}var C=M.args;
C.unshift(J);
qx.bom.Element[M.type].apply(qx.bom.Element,C);
}this._actions=[];
for(var F in this.__cX){var u=this.__cX[F];
var O=u.element.__de;

if(O){qx.bom.Selection.set(O,u.start,u.end);
delete this.__cX[F];
}}qx.event.handler.Appear.refresh();
},__cY:function(){if(!this.__da){var ct=qx.event.Registration.getManager(window);
this.__da=ct.getHandler(qx.event.handler.Focus);
}return this.__da;
},__db:function(){if(!this.__dc){var by=qx.event.Registration.getManager(window);
this.__dc=by.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dc.getCaptureElement();
},__dd:function(cE){var cF=qx.core.ObjectRegistry.fromHashCode(cE.$$element);
return cF&&!cF.__dv();
}},members:{__cU:null,__de:null,__df:false,__dg:true,__dh:true,__di:null,__dj:null,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__cV:null,__cW:null,__dp:null,__dq:null,__dr:null,__ds:null,__dt:null,_scheduleChildrenUpdate:function(){if(this.__ds){return;
}this.__ds=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
},_createDomElement:function(){return qx.bom.Element.create(this.__cU);
},__du:function(){if(qx.core.Variant.isSet(dg,di)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var m=this.__dr;

if(m){var length=m.length;
var n;

for(var i=0;i<length;i++){n=m[i];

if(n.__dh&&n.__dg&&!n.__de){n.__du();
}}}
if(!this.__de){this.__de=this._createDomElement();
this.__de.$$element=this.$$hash;
this._copyData(false);

if(m&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ds){this._syncChildren();
}}delete this.__ds;
},_insertChildren:function(){var dV=this.__dr;
var length=dV.length;
var dX;

if(length>2){var dW=document.createDocumentFragment();

for(var i=0;i<length;i++){dX=dV[i];

if(dX.__de&&dX.__dg){dW.appendChild(dX.__de);
}}this.__de.appendChild(dW);
}else{var dW=this.__de;

for(var i=0;i<length;i++){dX=dV[i];

if(dX.__de&&dX.__dg){dW.appendChild(dX.__de);
}}}},_syncChildren:function(){var bw=qx.core.ObjectRegistry;
var bn=this.__dr;
var bu=bn.length;
var bo;
var bs;
var bq=this.__de;
var bt=bq.childNodes;
var bp=0;
var br;

if(qx.core.Variant.isSet(dg,di)){var bv=0;
}for(var i=bt.length-1;i>=0;i--){br=bt[i];
bs=bw.fromHashCode(br.$$element);

if(!bs||!bs.__dg||bs.__dt!==this){bq.removeChild(br);

if(qx.core.Variant.isSet(dg,di)){bv++;
}}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__dg){bs=bo.__de;
br=bt[bp];

if(!bs){continue;
}if(bs!=br){if(br){bq.insertBefore(bs,br);
}else{bq.appendChild(bs);
}
if(qx.core.Variant.isSet(dg,di)){bv++;
}}bp++;
}}if(qx.core.Variant.isSet(dg,di)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bv+" operations");
}}},_copyData:function(ef){var ej=this.__de;
var ei=this.__cW;

if(ei){var eg=qx.bom.element.Attribute;

for(var ek in ei){eg.set(ej,ek,ei[ek]);
}}var ei=this.__cV;

if(ei){var eh=qx.bom.element.Style;

if(ef){eh.setStyles(ej,ei);
}else{eh.setCss(ej,eh.compile(ei));
}}var ei=this.__dp;

if(ei){for(var ek in ei){this._applyProperty(ek,ei[ek]);
}}var ei=this.__dq;

if(ei){qx.event.Registration.getManager(ej).importListeners(ej,ei);
delete this.__dq;
}},_syncData:function(){var be=this.__de;
var bd=qx.bom.element.Attribute;
var bb=qx.bom.element.Style;
var bc=this.__dn;

if(bc){var bh=this.__cW;

if(bh){var bf;

for(var bg in bc){bf=bh[bg];

if(bf!==undefined){bd.set(be,bg,bf);
}else{bd.reset(be,bg);
}}}this.__dn=null;
}var bc=this.__dm;

if(bc){var bh=this.__cV;

if(bh){var ba={};

for(var bg in bc){ba[bg]=bh[bg];
}bb.setStyles(be,ba);
}this.__dm=null;
}var bc=this.__do;

if(bc){var bh=this.__dp;

if(bh){var bf;

for(var bg in bc){this._applyProperty(bg,bh[bg]);
}}this.__do=null;
}},__dv:function(){var cs=this;
while(cs){if(cs.__df){return true;
}
if(!cs.__dg||!cs.__dh){return false;
}cs=cs.__dt;
}return false;
},__dw:function(cM){if(cM.__dt===this){throw new Error("Child is already in: "+cM);
}
if(cM.__df){throw new Error("Root elements could not be inserted into other ones.");
}if(cM.__dt){cM.__dt.remove(cM);
}cM.__dt=this;
if(!this.__dr){this.__dr=[];
}if(this.__de){this._scheduleChildrenUpdate();
}},__dx:function(bF){if(bF.__dt!==this){throw new Error("Has no child: "+bF);
}if(this.__de){this._scheduleChildrenUpdate();
}delete bF.__dt;
},__dy:function(dY){if(dY.__dt!==this){throw new Error("Has no child: "+dY);
}if(this.__de){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dr||null;
},getChild:function(bL){var bM=this.__dr;
return bM&&bM[bL]||null;
},hasChildren:function(){var ca=this.__dr;
return ca&&ca[0]!==undefined;
},indexOf:function(a){var b=this.__dr;
return b?b.indexOf(a):-1;
},hasChild:function(X){var Y=this.__dr;
return Y&&Y.indexOf(X)!==-1;
},add:function(ea){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dw(arguments[i]);
}this.__dr.push.apply(this.__dr,arguments);
}else{this.__dw(ea);
this.__dr.push(ea);
}return this;
},addAt:function(bk,bl){this.__dw(bk);
qx.lang.Array.insertAt(this.__dr,bk,bl);
return this;
},remove:function(c){var d=this.__dr;

if(!d){return;
}
if(arguments[1]){var f;

for(var i=0,l=arguments.length;i<l;i++){f=arguments[i];
this.__dx(f);
qx.lang.Array.remove(d,f);
}}else{this.__dx(c);
qx.lang.Array.remove(d,c);
}return this;
},removeAt:function(h){var j=this.__dr;

if(!j){throw new Error("Has no children!");
}var k=j[h];

if(!k){throw new Error("Has no child at this position!");
}this.__dx(k);
qx.lang.Array.removeAt(this.__dr,h);
return this;
},removeAll:function(){var cN=this.__dr;

if(cN){for(var i=0,l=cN.length;i<l;i++){this.__dx(cN[i]);
}cN.length=0;
}return this;
},getParent:function(){return this.__dt||null;
},insertInto:function(parent,g){parent.__dw(this);

if(g==null){parent.__dr.push(this);
}else{qx.lang.Array.insertAt(this.__dr,this,g);
}return this;
},insertBefore:function(W){var parent=W.__dt;
parent.__dw(this);
qx.lang.Array.insertBefore(parent.__dr,this,W);
return this;
},insertAfter:function(dO){var parent=dO.__dt;
parent.__dw(this);
qx.lang.Array.insertAfter(parent.__dr,this,dO);
return this;
},moveTo:function(bi){var parent=this.__dt;
parent.__dy(this);
var bj=parent.__dr.indexOf(this);

if(bj===bi){throw new Error("Could not move to same index!");
}else if(bj<bi){bi--;
}qx.lang.Array.removeAt(parent.__dr,bj);
qx.lang.Array.insertAt(parent.__dr,this,bi);
return this;
},moveBefore:function(ec){var parent=this.__dt;
return this.moveTo(parent.__dr.indexOf(ec));
},moveAfter:function(co){var parent=this.__dt;
return this.moveTo(parent.__dr.indexOf(co)+1);
},free:function(){var parent=this.__dt;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dr){return;
}parent.__dx(this);
qx.lang.Array.remove(parent.__dr,this);
return this;
},getDomElement:function(){return this.__de||null;
},getNodeName:function(){return this.__cU;
},setNodeName:function(name){this.__cU=name;
},setRoot:function(bG){this.__df=bG;
},useMarkup:function(cb){if(this.__de){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(df,dK)){var cc=document.createElement(cY);
}else{var cc=qx.bom.Element.getHelperElement();
}cc.innerHTML=cb;
this.useElement(cc.firstChild);
return this.__de;
},useElement:function(cC){if(this.__de){throw new Error("Could not overwrite existing element!");
}this.__de=cC;
this.__de.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cP=this.getAttribute(dv);

if(cP>=1){return true;
}var cO=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cP>=0&&cO[this.__cU]){return true;
}return false;
},setSelectable:qx.core.Variant.select(df,{"webkit":function(bH){this.setAttribute(de,bH?di:dd);
this.setStyle(dj,bH?dA:dJ);
},"gecko":function(ee){this.setAttribute(de,ee?di:dd);
this.setStyle(dx,ee?dH:ds);
},"default":function(bx){this.setAttribute(de,bx?di:dd);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cU];
},include:function(){if(this.__dg){return;
}delete this.__dg;

if(this.__dt){this.__dt._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dg){return;
}this.__dg=false;

if(this.__dt){this.__dt._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dg===true;
},show:function(){if(this.__dh){return;
}
if(this.__de){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}if(this.__dt){this.__dt._scheduleChildrenUpdate();
}delete this.__dh;
},hide:function(){if(!this.__dh){return;
}
if(this.__de){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}this.__dh=false;
},isVisible:function(){return this.__dh===true;
},scrollChildIntoViewX:function(o,p,q){var r=this.__de;
var s=o.getDomElement();

if(q!==false&&r&&r.offsetWidth&&s&&s.offsetWidth){qx.bom.element.Scroll.intoViewX(s,r,p);
}else{this.__di={element:o,align:p};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}delete this.__dk;
},scrollChildIntoViewY:function(bN,bO,bP){var bQ=this.__de;
var bR=bN.getDomElement();

if(bP!==false&&bQ&&bQ.offsetWidth&&bR&&bR.offsetWidth){qx.bom.element.Scroll.intoViewY(bR,bQ,bO);
}else{this.__dj={element:bN,align:bO};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}delete this.__dl;
},scrollToX:function(x,Q){var R=this.__de;

if(Q!==true&&R&&R.offsetWidth){R.scrollLeft=x;
}else{this.__dk=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}delete this.__di;
},getScrollX:function(){var eo=this.__de;

if(eo){return eo.scrollLeft;
}return this.__dk||0;
},scrollToY:function(y,cV){var cW=this.__de;

if(cV!==true&&cW&&cW.offsetWidth){cW.scrollTop=y;
}else{this.__dl=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}delete this.__dj;
},getScrollY:function(){var eb=this.__de;

if(eb){return eb.scrollTop;
}return this.__dl||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(dI,this.__dA,this);
},enableScrolling:function(){this.removeListener(dI,this.__dA,this);
},__dz:null,__dA:function(e){if(!this.__dz){this.__dz=true;
this.__de.scrollTop=0;
this.__de.scrollLeft=0;
delete this.__dz;
}},getTextSelection:function(){var cG=this.__de;

if(cG){return qx.bom.Selection.get(cG);
}return null;
},getTextSelectionLength:function(){var cL=this.__de;

if(cL){return qx.bom.Selection.getLength(cL);
}return null;
},getTextSelectionStart:function(){var P=this.__de;

if(P){return qx.bom.Selection.getStart(P);
}return null;
},getTextSelectionEnd:function(){var ed=this.__de;

if(ed){return qx.bom.Selection.getEnd(ed);
}return null;
},setTextSelection:function(S,T){var U=this.__de;

if(U){qx.bom.Selection.set(U,S,T);
return;
}qx.html.Element.__cX[this.toHashCode()]={element:this,start:S,end:T};
qx.html.Element._scheduleFlush(dh);
},clearTextSelection:function(){var bm=this.__de;

if(bm){qx.bom.Selection.clear(bm);
}delete qx.html.Element.__cX[this.toHashCode()];
},__dB:function(cp,cq){var cr=qx.html.Element._actions;
cr.push({type:cp,element:this,args:cq||[]});
qx.html.Element._scheduleFlush(dh);
},focus:function(){this.__dB(dr);
},blur:function(){this.__dB(dp);
},activate:function(){this.__dB(dy);
},deactivate:function(){this.__dB(dl);
},capture:function(bS){this.__dB(dm,[bS!==false]);
},releaseCapture:function(){this.__dB(dw);
},setStyle:function(bz,bA,bB){if(!this.__cV){this.__cV={};
}
if(this.__cV[bz]==bA){return;
}
if(bA==null){delete this.__cV[bz];
}else{this.__cV[bz]=bA;
}if(this.__de){if(bB){qx.bom.element.Style.set(this.__de,bz,bA);
return this;
}if(!this.__dm){this.__dm={};
}this.__dm[bz]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}return this;
},setStyles:function(cu,cv){var cw=qx.bom.element.Style;

if(!this.__cV){this.__cV={};
}
if(this.__de){if(!this.__dm){this.__dm={};
}
for(var cy in cu){var cx=cu[cy];

if(this.__cV[cy]==cx){continue;
}
if(cx==null){delete this.__cV[cy];
}else{this.__cV[cy]=cx;
}if(cv){cw.set(this.__de,cy,cx);
continue;
}this.__dm[cy]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}else{for(var cy in cu){var cx=cu[cy];

if(this.__cV[cy]==cx){continue;
}
if(cx==null){delete this.__cV[cy];
}else{this.__cV[cy]=cx;
}}}return this;
},removeStyle:function(cz,cA){this.setStyle(cz,null,cA);
},getStyle:function(cK){return this.__cV?this.__cV[cK]:null;
},getAllStyles:function(){return this.__cV||null;
},setAttribute:function(dS,dT,dU){if(!this.__cW){this.__cW={};
}
if(this.__cW[dS]==dT){return;
}
if(dT==null){delete this.__cW[dS];
}else{this.__cW[dS]=dT;
}if(this.__de){if(dU){qx.bom.element.Attribute.set(this.__de,dS,dT);
return this;
}if(!this.__dn){this.__dn={};
}this.__dn[dS]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}return this;
},setAttributes:function(cH,cI){for(var cJ in cH){this.setAttribute(cJ,cH[cJ],cI);
}return this;
},removeAttribute:function(em,en){this.setAttribute(em,null,en);
},getAttribute:function(t){return this.__cW?this.__cW[t]:null;
},_applyProperty:function(name,dR){},_setProperty:function(bC,bD,bE){if(!this.__dp){this.__dp={};
}
if(this.__dp[bC]==bD){return;
}
if(bD==null){delete this.__dp[bC];
}else{this.__dp[bC]=bD;
}if(this.__de){if(bE){this._applyProperty(bC,bD);
return this;
}if(!this.__do){this.__do={};
}this.__do[bC]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(dh);
}return this;
},_removeProperty:function(dP,dQ){this._setProperty(dP,null,dQ);
},_getProperty:function(cl){var cm=this.__dp;

if(!cm){return null;
}var cn=cm[cl];
return cn==null?null:cn;
},addListener:function(bT,bU,self,bV){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(dg,di)){var bW=dn+bT+cX+dz+this+dc;
this.assertString(bT,bW+dN);
this.assertFunction(bU,bW+dM);

if(self!==undefined){this.assertObject(self,da);
}
if(bV!==undefined){this.assertBoolean(bV,dC);
}}
if(this.__de){return qx.event.Registration.addListener(this.__de,bT,bU,self,bV);
}
if(!this.__dq){this.__dq={};
}
if(bV==null){bV=false;
}var bX=qx.event.Manager.getNextUniqueId();
var bY=bT+(bV?dE:dG)+bX;
this.__dq[bY]={type:bT,listener:bU,self:self,capture:bV,unique:bX};
return bY;
},removeListener:function(cd,ce,self,cf){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(dg,di)){var cg=du+cd+cX+dk+this+dc;
this.assertString(cd,cg+dN);
this.assertFunction(ce,cg+dM);

if(self!==undefined){this.assertObject(self,da);
}
if(cf!==undefined){this.assertBoolean(cf,dq);
}}
if(this.__de){qx.event.Registration.removeListener(this.__de,cd,ce,self,cf);
}else{var ci=this.__dq;
var ch;

if(cf==null){cf=false;
}
for(var cj in ci){ch=ci[cj];
if(ch.listener===ce&&ch.self===self&&ch.capture===cf&&ch.type===cd){delete ci[cj];
break;
}}}return this;
},removeListenerById:function(ck){if(this.$$disposed){return null;
}
if(this.__de){qx.event.Registration.removeListenerById(this.__de,ck);
}else{delete this.__dq[ck];
}return this;
},hasListener:function(cQ,cR){if(this.$$disposed){return false;
}
if(this.__de){return qx.event.Registration.hasListener(this.__de,cQ,cR);
}var cT=this.__dq;
var cS;

if(cR==null){cR=false;
}
for(var cU in cT){cS=cT[cU];
if(cS.capture===cR&&cS.type===cQ){return true;
}}return false;
}},defer:function(V){V.__dC=new qx.util.DeferredCall(V.flush,V);
},destruct:function(){var cD=this.__de;

if(cD){qx.event.Registration.getManager(cD).removeAllListeners(cD);
cD.$$element=dL;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dt;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(dD);
this.__cW=this.__cV=this.__dq=this.__dp=this.__dn=this.__dm=this.__do=this.__de=this.__dt=this.__di=this.__dj=null;
}});
})();
(function(){var d="qx.debug",c="on",b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__dD:false,__dE:{},__dF:0,MAX_RETRIES:10,scheduleFlush:function(l){var self=qx.ui.core.queue.Manager;
self.__dE[l]=true;

if(!self.__dD){self.__dI.schedule();
self.__dD=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__dG){return;
}self.__dG=true;
self.__dI.cancel();
var k=self.__dE;
self.__dH(function(){while(k.visibility||k.widget||k.appearance||k.layout||k.element){if(k.widget){delete k.widget;
qx.ui.core.queue.Widget.flush();
}
if(k.visibility){delete k.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(k.appearance){delete k.appearance;
qx.ui.core.queue.Appearance.flush();
}if(k.widget||k.visibility||k.appearance){continue;
}
if(k.layout){delete k.layout;
qx.ui.core.queue.Layout.flush();
}if(k.widget||k.visibility||k.appearance||k.layout){continue;
}
if(k.element){delete k.element;
qx.html.Element.flush();
}}},function(){self.__dD=false;
});
self.__dH(function(){if(k.dispose){delete k.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__dG=false;
});
self.__dF=0;
},__dH:qx.core.Variant.select(d,{"on":function(i,j){i();
j();
},"off":function(f,g){var self=qx.ui.core.queue.Manager;

try{f();
}catch(e){if(qx.core.Variant.isSet(d,c)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__dD=false;
self.__dG=false;
self.__dF+=1;

if(self.__dF<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__dF-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{g();
}}})},defer:function(h){h.__dI=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,a,h.flush);
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
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(o,stop,p){var parent=o.parentNode;
var u=qx.dom.Node.getDocument(o);
var q=u.body;
var C,A,x;
var E,v,F;
var y,G,J;
var H,s,B,r;
var w,I,z;
var t=p===g;
var D=p===c;
stop=stop?stop.parentNode:u;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===q||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===q){A=parent.scrollLeft;
x=A+qx.bom.Viewport.getWidth();
E=qx.bom.Viewport.getWidth();
v=parent.clientWidth;
F=parent.scrollWidth;
y=0;
G=0;
J=0;
}else{C=qx.bom.element.Location.get(parent);
A=C.left;
x=C.right;
E=parent.offsetWidth;
v=parent.clientWidth;
F=parent.scrollWidth;
y=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
G=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
J=E-v-y-G;
}H=qx.bom.element.Location.get(o);
s=H.left;
B=H.right;
r=o.offsetWidth;
w=s-A-y;
I=B-x+G;
z=0;
if(t){z=w;
}else if(D){z=I+J;
}else if(w<0||r>v){z=w;
}else if(I>0){z=I+J;
}parent.scrollLeft+=z;
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===q){break;
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
}},intoView:function(l,stop,m,n){this.intoViewX(l,stop,m);
this.intoViewY(l,stop,n);
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
(function(){var v="qx.client",u="",t="qx.debug",s="boxSizing",r="on",q="box-sizing",p=":",o="border-box",n="qx.bom.element.BoxSizing",m="KhtmlBoxSizing",f="-moz-box-sizing",k="WebkitBoxSizing",j=";",e="-khtml-box-sizing",d="content-box",h="-webkit-box-sizing",g="MozBoxSizing";
qx.Class.define(n,{statics:{__fE:qx.core.Variant.select(v,{"mshtml":null,"webkit":[s,m,k],"gecko":[g],"opera":[s]}),__fF:qx.core.Variant.select(v,{"mshtml":null,"webkit":[q,e,h],"gecko":[f],"opera":[q]}),__fG:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__fH:function(E){var F=this.__fG;
return F.tags[E.tagName.toLowerCase()]||F.types[E.type];
},compile:qx.core.Variant.select(v,{"mshtml":function(C){if(qx.core.Variant.isSet(t,r)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(a){var c=this.__fF;
var b=u;

if(c){for(var i=0,l=c.length;i<l;i++){b+=c[i]+p+a+j;
}}return b;
}}),get:qx.core.Variant.select(v,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__fH(D)){return d;
}}return o;
},"default":function(w){var y=this.__fE;
var x;

if(y){for(var i=0,l=y.length;i<l;i++){x=qx.bom.element.Style.get(w,y[i],null,false);

if(x!=null&&x!==u){return x;
}}}return u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(H,I){if(qx.core.Variant.isSet(t,r)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(z,A){var B=this.__fE;

if(B){for(var i=0,l=B.length;i<l;i++){z.style[B[i]]=A;
}}}}),reset:function(G){this.set(G,u);
}}});
})();
(function(){var m="",k="qx.client",h="userSelect",g="qx.debug",f="on",e="Invalid argument 'smart'",d="style",c="Invalid argument 'element'",b="MozUserModify",a="px",L="float",K="borderImage",J="styleFloat",I="appearance",H="pixelHeight",G='Ms',F=":",E="cssFloat",D="pixelTop",C="Invalid argument 'name'",t="pixelLeft",u='O',r="Invalid argument 'styles'",s="qx.bom.element.Style",p='Khtml',q='string',n="pixelRight",o='Moz',v="pixelWidth",w="pixelBottom",y=";",x="textOverflow",A="userModify",z='Webkit',B="WebkitUserModify";
qx.Class.define(s,{statics:{__fI:function(){var by=[I,h,x,K];
var bC={};
var bz=document.documentElement.style;
var bD=[o,z,p,u,G];

for(var i=0,l=by.length;i<l;i++){var bE=by[i];
var bA=bE;

if(bz[bE]){bC[bA]=bE;
continue;
}bE=qx.lang.String.firstUp(bE);

for(var j=0,bF=bD.length;j<bF;j++){var bB=bD[j]+bE;

if(typeof bz[bB]==q){bC[bA]=bB;
break;
}}}this.__fJ=bC;
this.__fJ[A]=qx.core.Variant.select(k,{"gecko":b,"webkit":B,"default":h});
this.__fK={};

for(var bA in bC){this.__fK[bA]=this.__fO(bC[bA]);
}this.__fJ[L]=qx.core.Variant.select(k,{"mshtml":J,"default":E});
},__fL:{width:v,height:H,left:t,right:n,top:D,bottom:w},__fM:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bh){var bj=[];
var bl=this.__fM;
var bk=this.__fK;
var name,bi;

for(name in bh){bi=bh[name];

if(bi==null){continue;
}name=bk[name]||name;
if(bl[name]){bj.push(bl[name].compile(bi));
}else{bj.push(this.__fO(name),F,bi,y);
}}return bj.join(m);
},__fN:{},__fO:function(Y){var ba=this.__fN;
var bb=ba[Y];

if(!bb){bb=ba[Y]=qx.lang.String.hyphenate(Y);
}return bb;
},setCss:qx.core.Variant.select(k,{"mshtml":function(bm,bn){bm.style.cssText=bn;
},"default":function(bw,bx){bw.setAttribute(d,bx);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(bo){return bo.style.cssText.toLowerCase();
},"default":function(M){return M.getAttribute(d);
}}),isPropertySupported:function(bJ){return (this.__fM[bJ]||this.__fJ[bJ]||bJ in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(N,name,O,P){if(qx.core.Variant.isSet(g,f)){qx.core.Assert.assertElement(N,c);
qx.core.Assert.assertString(name,C);

if(P!==undefined){qx.core.Assert.assertBoolean(P,e);
}}name=this.__fJ[name]||name;
if(P!==false&&this.__fM[name]){return this.__fM[name].set(N,O);
}else{N.style[name]=O!==null?O:m;
}},setStyles:function(Q,R,S){if(qx.core.Variant.isSet(g,f)){qx.core.Assert.assertElement(Q,c);
qx.core.Assert.assertMap(R,r);

if(S!==undefined){qx.core.Assert.assertBoolean(S,e);
}}var V=this.__fJ;
var X=this.__fM;
var T=Q.style;

for(var W in R){var U=R[W];
var name=V[W]||W;

if(U===undefined){if(S!==false&&X[name]){X[name].reset(Q);
}else{T[name]=m;
}}else{if(S!==false&&X[name]){X[name].set(Q,U);
}else{T[name]=U!==null?U:m;
}}}},reset:function(bG,name,bH){name=this.__fJ[name]||name;
if(bH!==false&&this.__fM[name]){return this.__fM[name].reset(bG);
}else{bG.style[name]=m;
}},get:qx.core.Variant.select(k,{"mshtml":function(bp,name,bq,br){name=this.__fJ[name]||name;
if(br!==false&&this.__fM[name]){return this.__fM[name].get(bp,bq);
}if(!bp.currentStyle){return bp.style[name]||m;
}switch(bq){case this.LOCAL_MODE:return bp.style[name]||m;
case this.CASCADED_MODE:return bp.currentStyle[name]||m;
default:var bv=bp.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bv)){return bv;
}var bu=this.__fL[name];

if(bu){var bs=bp.style[name];
bp.style[name]=bv||0;
var bt=bp.style[bu]+a;
bp.style[name]=bs;
return bt;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bv)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bv;
}},"default":function(bc,name,bd,be){name=this.__fJ[name]||name;
if(be!==false&&this.__fM[name]){return this.__fM[name].get(bc,bd);
}switch(bd){case this.LOCAL_MODE:return bc.style[name]||m;
case this.CASCADED_MODE:if(bc.currentStyle){return bc.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bf=qx.dom.Node.getDocument(bc);
var bg=bf.defaultView.getComputedStyle(bc,null);
return bg?bg[name]:m;
}}})},defer:function(bI){bI.__fI();
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__fW:{},remove:function(c){delete this.__fW[c.$$hash];
},add:function(d){var e=this.__fW;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__fW;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__fW={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__fX:{},__fY:{},remove:function(f){var g=f.$$hash;
delete this.__fY[g];
delete this.__fX[g];
},isVisible:function(e){return this.__fY[e.$$hash]||false;
},__ga:function(h){var j=this.__fY;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__ga(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(c){var d=this.__fX;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__fX;
var p=this.__fY;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__ga(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__fX={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gb:{},remove:function(c){delete this.__gb[c.$$hash];
},add:function(i){var j=this.__gb;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(h){return !!this.__gb[h.$$hash];
},flush:function(){var g=qx.ui.core.queue.Visibility;
var d=this.__gb;
var f;

for(var e in d){f=d[e];
delete d[e];
if(g.isVisible(f)){f.syncAppearance();
}else{f.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gg:{},add:function(f){var g=this.__gg;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__gg;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__gg={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}qx.html.Element.call(this,null,i);
this.__gY=g;
this.__ha=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__ha:null,__gY:null,getId:function(){return this.__ha;
},getDecorator:function(){return this.__gY;
},resize:function(e,f){this.__gY.resize(this.getDomElement(),e,f);
},tint:function(d){this.__gY.tint(this.getDomElement(),d);
},getInsets:function(){return this.__gY.getInsets();
}},destruct:function(){this.__gY=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__hb=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hb:null,__hc:{focusin:1,focusout:1,focus:1,blur:1},__hd:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(p){var u=p.getTarget();
var t=qx.ui.core.Widget.getWidgetByElement(u);
var v=false;

while(t&&t.isAnonymous()){var v=true;
t=t.getLayoutParent();
}if(t&&v&&p.getType()==a){t.getContainerElement().activate();
}if(this.__hc[p.getType()]){t=t&&t.getFocusTarget();
if(!t){return;
}}if(p.getRelatedTarget){var C=p.getRelatedTarget();
var B=qx.ui.core.Widget.getWidgetByElement(C);

while(B&&B.isAnonymous()){B=B.getLayoutParent();
}
if(B){if(this.__hc[p.getType()]){B=B.getFocusTarget();
}if(B===t){return;
}}}var x=p.getCurrentTarget();
var z=qx.ui.core.Widget.getWidgetByElement(x);

if(!z||z.isAnonymous()){return;
}if(this.__hc[p.getType()]){z=z.getFocusTarget();
}var A=p.getType();

if(!z||!(z.isEnabled()||this.__hd[A])){return;
}var q=p.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var w=this.__hb.getListeners(z,A,q);

if(!w||w.length===0){return;
}var r=qx.event.Pool.getInstance().getObject(p.constructor);
p.clone(r);
r.setTarget(t);
r.setRelatedTarget(B||null);
r.setCurrentTarget(z);
var D=p.getOriginalTarget();

if(D){var s=qx.ui.core.Widget.getWidgetByElement(D);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}r.setOriginalTarget(s);
}else{r.setOriginalTarget(u);
}for(var i=0,l=w.length;i<l;i++){var y=w[i].context||z;
w[i].handler.call(y,r);
}if(r.getPropagationStopped()){p.stopPropagation();
}
if(r.getDefaultPrevented()){p.preventDefault();
}qx.event.Pool.getInstance().poolObject(r);
},registerEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(k,m,n){var o;

if(m===e||m===f){o=k.getFocusElement();
}else if(m===c||m===d){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.removeListener(m,this._dispatchEvent,this,n);
}}},destruct:function(){this.__hb=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var d="abstract",c="qx.debug",b="qx.ui.layout.Abstract";
qx.Class.define(b,{type:d,extend:qx.core.Object,members:{__iF:null,_invalidChildrenCache:null,__iG:null,invalidateLayoutCache:function(){this.__iF=null;
},renderLayout:function(k,l){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iF){return this.__iF;
}return this.__iF=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(a){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(i,name,j){},"off":null}),_clearSeparators:function(){var e=this.__iG;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(f,g){this.__iG.renderSeparator(f,g);
},connectToWidget:function(h){if(h&&this.__iG){throw new Error("It is not possible to manually set the connected widget.");
}this.__iG=h;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__iG;
},_applyLayoutChange:function(){if(this.__iG){this.__iG.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__iG.getLayoutChildren();
}},destruct:function(){this.__iG=this.__iF=null;
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
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hg:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hg();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(z){var z=z||v;
this.__hh=z;
this.length=z.length;
},members:{$$isString:true,length:0,__hh:null,toString:function(){return this.__hh;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(A,B){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(w,x){if(qx.core.Variant.isSet(o,f)){qx.Class.include(w,qx.core.MAssert);
}var y=[j,k,s,u,b,p,m,n,t,g,e,c,d,a,r,h];
x.valueOf=x.toString;

if(new w(v).valueOf()==null){delete x.valueOf;
}
for(var i=0,l=y.length;i<l;i++){x[y[i]]=String.prototype[y[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hi=c;
this.__hj=d;
},members:{__hi:null,__hj:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hi,this.__hj);
}}});
})();
(function(){var o="_",n="",m="_applyLocale",l="changeLocale",k="C",j="qx.dynlocale",h="on",g="qx.locale.Manager",f="String",e="singleton";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hk=qx.$$translations||{};
this.__hl=qx.$$locales||{};
var C=qx.bom.client.Locale;
var A=C.LOCALE;
var B=C.VARIANT;

if(B!==n){A+=o+B;
}this.setLocale(A||this.__hm);
},statics:{tr:function(F,G){var H=qx.lang.Array.fromArguments(arguments);
H.splice(0,1);
return qx.locale.Manager.getInstance().translate(F,H);
},trn:function(I,J,K,L){var M=qx.lang.Array.fromArguments(arguments);
M.splice(0,3);
if(K!=1){return qx.locale.Manager.getInstance().translate(J,M);
}else{return qx.locale.Manager.getInstance().translate(I,M);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(x){return x;
}},properties:{locale:{check:f,nullable:true,apply:m,event:l}},members:{__hm:k,__hn:null,__ho:null,__hk:null,__hl:null,getLanguage:function(){return this.__ho;
},getTerritory:function(){return this.getLocale().split(o)[1]||n;
},getAvailableLocales:function(){var E=[];

for(var D in this.__hl){if(D!=this.__hm){E.push(D);
}}return E;
},__hp:function(ba){var bc;
var bb=ba.indexOf(o);

if(bb==-1){bc=ba;
}else{bc=ba.substring(0,bb);
}return bc;
},_applyLocale:function(y,z){this.__hn=y;
this.__ho=this.__hp(y);
},addTranslation:function(V,W){var X=this.__hk;

if(X[V]){for(var Y in W){X[V][Y]=W[Y];
}}else{X[V]=W;
}},addLocale:function(t,u){var v=this.__hl;

if(v[t]){for(var w in u){v[t][w]=u[w];
}}else{v[t]=u;
}},translate:function(p,q,r){var s=this.__hk;
return this.__hq(s,p,q,r);
},localize:function(bd,be,bf){var bg=this.__hl;
return this.__hq(bg,bd,be,bf);
},__hq:function(N,O,P,Q){var R;

if(!N){return O;
}
if(Q){var T=this.__hp(Q);
}else{Q=this.__hn;
T=this.__ho;
}if(!R&&N[Q]){R=N[Q][O];
}if(!R&&N[T]){R=N[T][O];
}if(!R&&N[this.__hm]){R=N[this.__hm][O];
}
if(!R){R=O;
}
if(P.length>0){var S=[];

for(var i=0;i<P.length;i++){var U=P[i];

if(U&&U.translate){S[i]=U.translate();
}else{S[i]=U;
}}R=qx.lang.String.format(R,S);
}
if(qx.core.Variant.isSet(j,h)){R=new qx.locale.LocalizedString(R,O,P);
}return R;
}},destruct:function(){this.__hk=this.__hl=null;
}});
})();
(function(){var l="px",k="qx.client",j="div",i="img",h="",g="no-repeat",f="qx.debug",d="scale-x",c="mshtml",b="on",J="repeat",I="scale",H="scale-y",G="qx/icon",F=".png",E="crop",D="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",C='<div style="',B="repeat-y",A='<img src="',s="qx.bom.element.Decoration",t="', sizingMethod='",q="png",r="')",o='"></div>',p='"/>',m='" style="',n="none",u="webkit",v=" ",x="repeat-x",w="DXImageTransform.Microsoft.AlphaImageLoader",z="qx/static/blank.gif",y="absolute";
qx.Class.define(s,{statics:{DEBUG:false,__hr:{},__hs:qx.core.Variant.isSet(k,c),__ht:qx.core.Variant.select(k,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hu:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(bh,bi,bj,bk){var bm=this.getTagName(bj,bi);

if(bm!=bh.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bn=this.getAttributes(bi,bj,bk);

if(bm===i){bh.src=bn.src||qx.util.ResourceManager.getInstance().toUri(z);
}if(bh.style.backgroundPosition!=h&&bn.style.backgroundPosition===undefined){bn.style.backgroundPosition=null;
}if(bh.style.clip!=h&&bn.style.clip===undefined){bn.style.clip=null;
}var bl=qx.bom.element.Style;
bl.setStyles(bh,bn.style);
if(this.__hs){try{bh.filters[w].apply();
}catch(e){}}},create:function(bI,bJ,bK){var bL=this.getTagName(bJ,bI);
var bN=this.getAttributes(bI,bJ,bK);
var bM=qx.bom.element.Style.compile(bN.style);

if(bL===i){return A+bN.src+m+bM+p;
}else{return C+bM+o;
}},getTagName:function(bO,bP){if(qx.core.Variant.isSet(k,c)){if(bP&&this.__hs&&this.__ht[bO]&&qx.lang.String.endsWith(bP,F)){return j;
}}return this.__hu[bO];
},getAttributes:function(bv,bw,bx){if(!bx){bx={};
}
if(!bx.position){bx.position=y;
}
if(qx.core.Variant.isSet(k,c)){bx.fontSize=0;
bx.lineHeight=0;
}else if(qx.core.Variant.isSet(k,u)){bx.WebkitUserDrag=n;
}var bz=qx.util.ResourceManager.getInstance().getImageFormat(bv)||qx.io.ImageLoader.getFormat(bv);

if(qx.core.Variant.isSet(f,b)){if(bv!=null&&bz==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bv+"'!");
}}var by;
if(this.__hs&&this.__ht[bw]&&bz===q){by=this.__hx(bx,bw,bv);
}else{if(bw===I){by=this.__hy(bx,bw,bv);
}else if(bw===d||bw===H){by=this.__hz(bx,bw,bv);
}else{by=this.__hC(bx,bw,bv);
}}return by;
},__hv:function(K,L,M){if(K.width==null&&L!=null){K.width=L+l;
}
if(K.height==null&&M!=null){K.height=M+l;
}return K;
},__hw:function(bF){var bG=qx.util.ResourceManager.getInstance().getImageWidth(bF)||qx.io.ImageLoader.getWidth(bF);
var bH=qx.util.ResourceManager.getInstance().getImageHeight(bF)||qx.io.ImageLoader.getHeight(bF);
return {width:bG,height:bH};
},__hx:function(N,O,P){var S=this.__hw(P);
N=this.__hv(N,S.width,S.height);
var R=O==g?E:I;
var Q=D+qx.util.ResourceManager.getInstance().toUri(P)+t+R+r;
N.filter=Q;
N.backgroundImage=N.backgroundRepeat=h;
return {style:N};
},__hy:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().toUri(bC);
var bE=this.__hw(bC);
bA=this.__hv(bA,bE.width,bE.height);
return {src:bD,style:bA};
},__hz:function(bQ,bR,bS){var bW=qx.util.ResourceManager.getInstance();
var bV=bW.isClippedImage(bS);
var bX=this.__hw(bS);

if(bV){var bU=bW.getData(bS);
var bT=bW.toUri(bU[4]);

if(bR===d){bQ=this.__hA(bQ,bU,bX.height);
}else{bQ=this.__hB(bQ,bU,bX.width);
}return {src:bT,style:bQ};
}else{if(qx.core.Variant.isSet(f,b)){this.__hE(bS);
}
if(bR==d){bQ.height=bX.height==null?null:bX.height+l;
}else if(bR==H){bQ.width=bX.width==null?null:bX.width+l;
}var bT=bW.toUri(bS);
return {src:bT,style:bQ};
}},__hA:function(bY,ca,cb){var cc=qx.util.ResourceManager.getInstance().getImageHeight(ca[4]);
bY.clip={top:-ca[6],height:cb};
bY.height=cc+l;
if(bY.top!=null){bY.top=(parseInt(bY.top,10)+ca[6])+l;
}else if(bY.bottom!=null){bY.bottom=(parseInt(bY.bottom,10)+cb-cc-ca[6])+l;
}return bY;
},__hB:function(bc,bd,be){var bf=qx.util.ResourceManager.getInstance().getImageWidth(bd[4]);
bc.clip={left:-bd[5],width:be};
bc.width=bf+l;
if(bc.left!=null){bc.left=(parseInt(bc.left,10)+bd[5])+l;
}else if(bc.right!=null){bc.right=(parseInt(bc.right,10)+be-bf-bd[5])+l;
}return bc;
},__hC:function(T,U,V){var bb=qx.util.ResourceManager.getInstance().isClippedImage(V);
var ba=this.__hw(V);
if(bb&&U!==J){var Y=qx.util.ResourceManager.getInstance().getData(V);
var X=qx.bom.element.Background.getStyles(Y[4],U,Y[5],Y[6]);

for(var W in X){T[W]=X[W];
}
if(ba.width!=null&&T.width==null&&(U==B||U===g)){T.width=ba.width+l;
}
if(ba.height!=null&&T.height==null&&(U==x||U===g)){T.height=ba.height+l;
}return {style:T};
}else{if(qx.core.Variant.isSet(f,b)){if(U!==J){this.__hE(V);
}}T=this.__hv(T,ba.width,ba.height);
T=this.__hD(T,V,U);
return {style:T};
}},__hD:function(bo,bp,bq){var top=null;
var bu=null;

if(bo.backgroundPosition){var br=bo.backgroundPosition.split(v);
bu=parseInt(br[0]);

if(isNaN(bu)){bu=br[0];
}top=parseInt(br[1]);

if(isNaN(top)){top=br[1];
}}var bt=qx.bom.element.Background.getStyles(bp,bq,bu,top);

for(var bs in bt){bo[bs]=bt[bs];
}if(bo.filter){bo.filter=h;
}return bo;
},__hE:function(a){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(a)&&a.indexOf(G)==-1){if(!this.__hr[a]){qx.log.Logger.debug("Potential clipped image candidate: "+a);
this.__hr[a]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(k,{"mshtml":function(){return qx.bom.element.Decoration.__hs;
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
}}},_createDomElement:function(){var m=this._getProperty(i);
var n=m?i:h;

if(qx.core.Variant.isSet(g,f)){var l=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n,l));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(n));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(k){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(o){this._setProperty(j,o);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(p){this._setProperty(i,p);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var L="nonScaled",K="scaled",J="alphaScaled",I=".png",H="qx.client",G="div",F="replacement",E="qx.event.type.Event",D="hidden",C="Boolean",be="px",bd="http",bc="scale",bb="changeSource",ba="qx.ui.basic.Image",Y="qx.debug",X="loaded",W="-disabled.$1",V="loadingFailed",U="String",S="__hW",T="_applySource",Q="img",R="image",O="mshtml",P="_applyScale",M="no-repeat",N="on";
qx.Class.define(ba,{extend:qx.ui.core.Widget,construct:function(l){this.__hW={};
qx.ui.core.Widget.call(this);

if(l){this.setSource(l);
}},properties:{source:{check:U,init:null,nullable:true,event:bb,apply:T,themeable:true},scale:{check:C,init:false,themeable:true,apply:P},appearance:{refine:true,init:R},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:E,loaded:E},members:{__hX:null,__hY:null,__ia:null,__hW:null,getContentElement:function(){return this.__ie();
},_createContentElement:function(){return this.__ie();
},_getContentHint:function(){return {width:this.__hX||0,height:this.__hY||0};
},_applyEnabled:function(bq,br){qx.ui.core.Widget.prototype._applyEnabled.call(this,bq,br);

if(this.getSource()){this._styleSource();
}},_applySource:function(bs){this._styleSource();
},_applyScale:function(w){this._styleSource();
},__ib:function(y){this.__ia=y;
},__ic:function(){if(this.__ia==null){var B=this.getSource();
var A=false;

if(B!=null){A=qx.lang.String.endsWith(B,I);
}
if(this.getScale()&&A&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__ia=J;
}else if(this.getScale()){this.__ia=K;
}else{this.__ia=L;
}}return this.__ia;
},__id:function(h){var i;
var j;

if(h==J){i=true;
j=G;
}else if(h==L){i=false;
j=G;
}else{i=true;
j=Q;
}var k=new qx.html.Image(j);
k.setScale(i);
k.setStyles({"overflowX":D,"overflowY":D});
return k;
},__ie:function(){var z=this.__ic();

if(this.__hW[z]==null){this.__hW[z]=this.__id(z);
}return this.__hW[z];
},_styleSource:function(){var f=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!f){this.getContentElement().resetSource();
return;
}this.__if(f);

if(qx.core.Variant.isSet(H,O)){var g=this.getScale()?bc:M;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(g,f);
}if(qx.util.ResourceManager.getInstance().has(f)){this.__ih(this.getContentElement(),f);
}else if(qx.io.ImageLoader.isLoaded(f)){this.__ii(this.getContentElement(),f);
}else{this.__ij(this.getContentElement(),f);
}},__if:qx.core.Variant.select(H,{"mshtml":function(t){var v=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var u=qx.lang.String.endsWith(t,I);

if(v&&u){if(this.getScale()&&this.__ic()!=J){this.__ib(J);
}else if(!this.getScale()&&this.__ic()!=L){this.__ib(L);
}}else{if(this.getScale()&&this.__ic()!=K){this.__ib(K);
}else if(!this.getScale()&&this.__ic()!=L){this.__ib(L);
}}this.__ig(this.__ie());
},"default":function(x){if(this.getScale()&&this.__ic()!=K){this.__ib(K);
}else if(!this.getScale()&&this.__ic(L)){this.__ib(L);
}this.__ig(this.__ie());
}}),__ig:function(m){var p=this.getContainerElement();
var q=p.getChild(0);

if(q!=m){if(q!=null){var s=be;
var n={};
var o=this.getInnerSize();

if(o!=null){n.width=o.width+s;
n.height=o.height+s;
}var r=this.getInsets();
n.left=r.left+s;
n.top=r.top+s;
n.zIndex=10;
m.setStyles(n,true);
m.setSelectable(this.getSelectable());
}p.removeAt(0);
p.addAt(m,0);
}},__ih:function(bf,bg){var bi=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bh=bg.replace(/\.([a-z]+)$/,W);

if(bi.has(bh)){bg=bh;
this.addState(F);
}else{this.removeState(F);
}}if(bf.getSource()===bg){return;
}bf.setSource(bg);
this.__il(bi.getImageWidth(bg),bi.getImageHeight(bg));
},__ii:function(bl,bm){var bo=qx.io.ImageLoader;
bl.setSource(bm);
var bn=bo.getWidth(bm);
var bp=bo.getHeight(bm);
this.__il(bn,bp);
},__ij:function(c,d){var e=qx.io.ImageLoader;

if(qx.core.Variant.isSet(Y,N)){if(!qx.lang.String.startsWith(d.toLowerCase(),bd)){var self=this.self(arguments);

if(!self.__Cv){self.__Cv={};
}
if(!self.__Cv[d]){this.debug("try to load a unmanaged relative image: "+d);
self.__Cv[d]=true;
}}}if(!e.isFailed(d)){e.load(d,this.__ik,this);
}else{if(c!=null){c.resetSource();
}}},__ik:function(bj,bk){if(this.$$disposed===true){return;
}if(bj!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bk.failed){this.warn("Image could not be loaded: "+bj);
this.fireEvent(V);
}else{this.fireEvent(X);
}this._styleSource();
},__il:function(a,b){if(a!==this.__hX||b!==this.__hY){this.__hX=a;
this.__hY=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(S);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){qx.ui.basic.Image.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__is=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__is:null,_applyTimeoutInterval:function(h){this.__is.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__is){this.__is.stop();
}this.__is=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E="target.bottom",D="offsets",C="size.width",B="offsets.bottom",A='__it',z="qx.util.placement.Placement",y="qx.debug",x="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__it=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__iu:null,compute:function(J,K,L,M,N,O,P){this.__iu=this.__iu||new qx.util.placement.Placement();
var S=N.split(a);
var R=S[0];
var Q=S[1];
this.__iu.set({axisX:this.__iy(O),axisY:this.__iy(P),edge:R,align:Q});
return this.__iu.compute(J,K,L,M);
},__iv:null,__iw:null,__ix:null,__iy:function(T){switch(T){case r:this.__iv=this.__iv||new qx.util.placement.DirectAxis();
return this.__iv;
case x:this.__iw=this.__iw||new qx.util.placement.KeepAlignAxis();
return this.__iw;
case G:this.__ix=this.__ix||new qx.util.placement.BestFitAxis();
return this.__ix;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__it:null,compute:function(U,V,W,X){if(qx.core.Variant.isSet(y,v)){this.assertObject(U,F);
this.assertNumber(U.width,C);
this.assertNumber(U.height,u);
this.assertObject(V,n);
this.assertNumber(V.width,t);
this.assertNumber(V.height,l);
this.assertObject(W,p);
this.assertNumber(W.top,k);
this.assertNumber(W.right,q);
this.assertNumber(W.bottom,E);
this.assertNumber(W.left,s);
this.assertObject(X,D);
this.assertNumber(X.top,w);
this.assertNumber(X.right,o);
this.assertNumber(X.bottom,B);
this.assertNumber(X.left,m);
}var Y=this.getAxisX()||this.__it;
var bb=Y.computeStart(U.width,{start:W.left,end:W.right},{start:X.left,end:X.right},V.width,this.__iz());
var ba=this.getAxisY()||this.__it;
var top=ba.computeStart(U.height,{start:W.top,end:W.bottom},{start:X.top,end:X.bottom},V.height,this.__iA());
return {left:bb,top:top};
},__iz:function(){var bd=this.getEdge();
var bc=this.getAlign();

if(bd==g){return f;
}else if(bd==i){return c;
}else if(bc==g){return e;
}else if(bc==i){return d;
}},__iA:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==j){return f;
}else if(I==h){return c;
}else if(H==j){return e;
}else if(H==h){return d;
}}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(k,l,m,n){switch(n){case e:return l.start-m.end-k;
case b:return l.end+m.start;
case d:return l.start+m.start;
case c:return l.end-m.end-k;
}},_isInRange:function(o,p,q){return o>=0&&o+p<=q;
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
(function(){var k="mousedown",j="qx.debug",i="on",h="blur",g="qx.ui.popup.Manager",f="__mH",d="singleton";
qx.Class.define(g,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mH={};
qx.event.Registration.addListener(document.documentElement,k,this.__mJ,this,true);
qx.bom.Element.addListener(window,h,this.hideAll,this);
},members:{__mH:null,add:function(n){if(qx.core.Variant.isSet(j,i)){if(!(n instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+n);
}}this.__mH[n.$$hash]=n;
this.__mI();
},remove:function(l){if(qx.core.Variant.isSet(j,i)){if(!(l instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+l);
}}var m=this.__mH;

if(m){delete m[l.$$hash];
this.__mI();
}},hideAll:function(){var t=this.__mH;

if(t){for(var s in t){t[s].exclude();
}}},__mI:function(){var c=1e7;
var b=this.__mH;

for(var a in b){b[a].setZIndex(c++);
}},__mJ:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var r=this.__mH;

for(var p in r){var o=r[p];

if(!o.getAutoHide()||q==o||qx.ui.core.Widget.contains(o,q)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__mJ,this,true);
this._disposeMap(f);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(w,name,x){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(p,q){var u=this._getLayoutChildren();
var t,v,s,r;
for(var i=0,l=u.length;i<l;i++){t=u[i];
v=t.getSizeHint();
s=p;

if(s<v.minWidth){s=v.minWidth;
}else if(s>v.maxWidth){s=v.maxWidth;
}r=q;

if(r<v.minHeight){r=v.minHeight;
}else if(r>v.maxHeight){r=v.maxHeight;
}t.renderLayout(0,0,s,r);
}},_computeSizeHint:function(){var m=this._getLayoutChildren();
var j,o;
var n=0,k=0;
var h=0,f=0;
var e=Infinity,g=Infinity;
for(var i=0,l=m.length;i<l;i++){j=m[i];
o=j.getSizeHint();
n=Math.max(n,o.width);
k=Math.max(k,o.height);
h=Math.max(h,o.minWidth);
f=Math.max(f,o.minHeight);
e=Math.min(e,o.maxWidth);
g=Math.min(g,o.maxHeight);
}return {width:n,height:k,minWidth:h,minHeight:f,maxWidth:e,maxHeight:g};
}}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",n="_applyShow",o="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(S){var T;

switch(S){case j:T=new qx.ui.basic.Label(this.getLabel());
T.setAnonymous(true);
T.setRich(this.getRich());
this._add(T);

if(this.getLabel()==null||this.getShow()===i){T.exclude();
}break;
case i:T=new qx.ui.basic.Image(this.getIcon());
T.setAnonymous(true);
this._addAt(T,0);

if(this.getIcon()==null||this.getShow()===j){T.exclude();
}break;
}return T||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,S);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(B,C){var D=this.getChildControl(j,true);

if(D){D.setValue(B);
}this._handleLabel();
},_applyRich:function(P,Q){var R=this.getChildControl(j,true);

if(R){R.setRich(P);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(I,J){this._getLayout().setGap(I);
},_applyShow:function(N,O){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(G,H){this._getLayout().setIconPosition(G);
},_applyCenter:function(E,F){this._getLayout().setCenter(E);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(o,name,p){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(q,r){var A=qx.ui.layout.Util;
var t=this.getIconPosition();
var w=this._getLayoutChildren();
var length=w.length;
var K,top,B,u;
var G,z;
var E=this.getGap();
var J=this.getCenter();
if(t===n||t===j){var C=length-1;
var x=-1;
var v=-1;
}else{var C=0;
var x=length;
var v=1;
}if(t==l||t==n){if(J){var F=0;

for(var i=C;i!=x;i+=v){u=w[i].getSizeHint().height;

if(u>0){F+=u;

if(i!=C){F+=E;
}}}top=Math.round((r-F)/2);
}else{top=0;
}
for(var i=C;i!=x;i+=v){G=w[i];
z=G.getSizeHint();
B=Math.min(z.maxWidth,Math.max(q,z.minWidth));
u=z.height;
K=A.computeHorizontalAlignOffset(e,B,q);
G.renderLayout(K,top,B,u);
if(u>0){top+=u+E;
}}}else{var y=q;
var s=null;
var I=0;

for(var i=C;i!=x;i+=v){G=w[i];
B=G.getSizeHint().width;

if(B>0){if(!s&&G instanceof qx.ui.basic.Label){s=G;
}else{y-=B;
}I++;
}}
if(I>1){var H=(I-1)*E;
y-=H;
}
if(s){var z=s.getSizeHint();
var D=Math.max(z.minWidth,Math.min(y,z.maxWidth));
y-=D;
}
if(J&&y>0){K=Math.round(y/2);
}else{K=0;
}
for(var i=C;i!=x;i+=v){G=w[i];
z=G.getSizeHint();
u=Math.min(z.maxHeight,Math.max(r,z.minHeight));

if(G===s){B=D;
}else{B=z.width;
}top=A.computeVerticalAlignOffset(h,z.height,r);
G.renderLayout(K,top,B,u);
if(B>0){K+=B+E;
}}}},_computeSizeHint:function(){var V=this._getLayoutChildren();
var length=V.length;
var N,T;
if(length===1){var N=V[0].getSizeHint();
T={width:N.width,height:N.height,minWidth:N.minWidth,minHeight:N.minHeight};
}else{var R=0,S=0;
var O=0,Q=0;
var P=this.getIconPosition();
var U=this.getGap();

if(P===l||P===n){var L=0;

for(var i=0;i<length;i++){N=V[i].getSizeHint();
S=Math.max(S,N.width);
R=Math.max(R,N.minWidth);
if(N.height>0){Q+=N.height;
O+=N.minHeight;
L++;
}}
if(L>1){var M=(L-1)*U;
Q+=M;
O+=M;
}}else{var L=0;

for(var i=0;i<length;i++){N=V[i].getSizeHint();
Q=Math.max(Q,N.height);
O=Math.max(O,N.minHeight);
if(N.width>0){S+=N.width;
R+=N.minWidth;
L++;
}}
if(L>1){var M=(L-1)*U;
S+=M;
R+=M;
}}T={minWidth:R,width:S,minHeight:O,height:Q};
}return T;
}}});
})();
(function(){var o="middle",n="qx.ui.layout.Util",m="left",k="center",j="top",h="bottom",g="right";
qx.Class.define(n,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(z,A,B){var D,H,C,I;
var E=A>B;
var J=Math.abs(A-B);
var K,F;
var G={};

for(H in z){D=z[H];
G[H]={potential:E?D.max-D.value:D.value-D.min,flex:E?D.flex:1/D.flex,offset:0};
}while(J!=0){I=Infinity;
C=0;

for(H in G){D=G[H];

if(D.potential>0){C+=D.flex;
I=Math.min(I,D.potential/D.flex);
}}if(C==0){break;
}I=Math.min(J,I*C)/C;
K=0;

for(H in G){D=G[H];

if(D.potential>0){F=Math.min(J,D.potential,Math.ceil(I*D.flex));
K+=F-I*D.flex;

if(K>=1){K-=1;
F-=1;
}D.potential-=F;

if(E){D.offset+=F;
}else{D.offset-=F;
}J-=F;
}}}return G;
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
},collapseMargins:function(L){var M=0,O=0;

for(var i=0,l=arguments.length;i<l;i++){var N=arguments[i];

if(N<0){O=Math.min(O,N);
}else if(N>0){M=Math.max(M,N);
}}return M+O;
},computeHorizontalGaps:function(v,w,x){if(w==null){w=0;
}var y=0;

if(x){y+=v[0].getMarginLeft();

for(var i=1,l=v.length;i<l;i+=1){y+=this.collapseMargins(w,v[i-1].getMarginRight(),v[i].getMarginLeft());
}y+=v[l-1].getMarginRight();
}else{for(var i=1,l=v.length;i<l;i+=1){y+=v[i].getMarginLeft()+v[i].getMarginRight();
}y+=(w*(l-1));
}return y;
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
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(p,q,r,s,t,u){if(q<p||t<s){if(q<p&&t<s){q=p;
t=s;
}else if(q<p){t-=(p-q);
q=p;
if(t<s){t=s;
}}else if(t<s){q-=(s-t);
t=s;
if(q<p){q=p;
}}}
if(q>r||t>u){if(q>r&&t>u){q=r;
t=u;
}else if(q>r){t+=(q-r);
q=r;
if(t>u){t=u;
}}else if(t>u){q+=(t-u);
t=u;
if(q>r){q=r;
}}}return {begin:q,end:t};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="on",j="qx.dynlocale",i="text",h="Boolean",g="color",f="userSelect",d="changeLocale",c="qx.debug",b="enabled",a="none",I="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",r="whiteSpace",s="_applyValue",p="center",q="_applyBuddy",n="String",o="textAlign",l="right",m="changeRich",t="normal",u="_applyRich",w="click",v="label",y="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(K){qx.ui.core.Widget.call(this);

if(K!=null){this.setValue(K);
}
if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:h,init:false,event:m,apply:u},wrap:{check:h,init:true,apply:E},value:{check:n,apply:s,event:D,nullable:true},buddy:{check:H,apply:q,nullable:true,init:null,dereference:true},textAlign:{check:[x,p,l],nullable:true,themeable:true,apply:I,event:F},appearance:{refine:true,init:v},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iH:null,__iI:null,__iJ:null,__iK:null,_getContentHint:function(){if(this.__iI){this.__iL=this.__iM();
delete this.__iI;
}return {width:this.__iL.width,height:this.__iL.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(L){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(L&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,L);
if(qx.core.Variant.isSet(C,y)){this.getContainerElement().setStyle(f,L?i:a);
this.getContentElement().setStyle(f,L?i:a);
}},_getContentHeightForWidth:function(V){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iM(V).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(o,O);
},_applyTextColor:function(M,N){if(M){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(M));
}else{this.getContentElement().removeStyle(g);
}},__iL:{width:0,height:0},_applyFont:function(W,X){var Y;

if(W){this.__iH=qx.theme.manager.Font.getInstance().resolve(W);
Y=this.__iH.getStyles();
}else{this.__iH=null;
Y=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(Y);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
},__iM:function(bb){var bf=qx.bom.Label;
var bd=this.getFont();
var bc=bd?this.__iH.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var be=this.getRich();
return be?bf.getHtmlSize(content,bc,bb):bf.getTextSize(content,bc);
},_applyBuddy:function(Q,R){if(R!=null){R.removeBinding(this.__iJ);
this.__iJ=null;
this.removeListenerById(this.__iK);
this.__iK=null;
}
if(Q!=null){this.__iJ=Q.bind(b,this,b);
this.__iK=this.addListener(w,function(){if(Q.isFocusable()){Q.focus.apply(Q);
}},this);
}},_applyRich:function(J){this.getContentElement().setRich(J);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(S,T){if(S&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var U=S?t:G;
this.getContentElement().setStyle(r,U);
}},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(bg,bh){this.getContentElement().setValue(bg);
this.__iI=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,bg,bh);
}},destruct:function(){if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__iJ!=null){var ba=this.getBuddy();

if(ba!=null&&!ba.isDisposed()){ba.removeBinding(this.__iJ);
}}this.__iH=this.__iJ=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__iN:null,_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);

if(name==b){var f=this.getDomElement();
qx.bom.Label.setValue(f,e);
}},_createDomElement:function(){var j=this.__iN;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__iN==c){return;
}this.__iN=c;
return this;
},setValue:function(g){this._setProperty(b,g);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",g="qx.client",f="auto",E="0",D="ellipsis",C="normal",B="label",A="px",z="crop",y="gecko",x="end",w="100%",v="visible",t="qx.bom.Label",u="opera",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(t,{statics:{__iO:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iP:function(){var W=this.__iR(false);
document.body.insertBefore(W,document.body.firstChild);
return this._textElement=W;
},__iQ:function(){var Q=this.__iR(true);
document.body.insertBefore(Q,document.body.firstChild);
return this._htmlElement=Q;
},__iR:function(a){var b=qx.bom.Element.create(o);
var c=b.style;
c.width=c.height=f;
c.left=c.top=p;
c.visibility=j;
c.position=q;
c.overflow=v;

if(a){c.whiteSpace=C;
}else{c.whiteSpace=h;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var d=document.createElementNS(i,B);
var c=d.style;
c.padding=E;

for(var e in this.__iO){c[e]=n;
}b.appendChild(d);
}}return b;
},__iS:function(F){var G={};

if(F){G.whiteSpace=C;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){G.display=r;
}else{G.overflow=j;
G.whiteSpace=h;
G.textOverflow=D;
G.userSelect=s;
if(qx.core.Variant.isSet(g,u)){G.OTextOverflow=D;
}}return G;
},create:function(content,X,Y){if(!Y){Y=window;
}
if(X){var ba=Y.document.createElement(o);
ba.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var ba=Y.document.createElement(o);
var bc=Y.document.createElementNS(i,B);
var bb=bc.style;
bb.cursor=n;
bb.color=n;
bb.overflow=j;
bb.maxWidth=w;
bb.padding=E;
for(var bd in this.__iO){bc.style[bd]=n;
}bc.setAttribute(z,x);
ba.appendChild(bc);
}else{var ba=Y.document.createElement(o);
qx.bom.element.Style.setStyles(ba,this.__iS(X));
}
if(content){this.setValue(ba,content);
}return ba;
},setValue:function(H,I){I=I||k;

if(H.useHtml){H.innerHTML=I;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){H.firstChild.setAttribute(l,I);
}else{qx.bom.element.Attribute.set(H,m,I);
}},getValue:function(P){if(P.useHtml){return P.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return P.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(P,m);
}},getHtmlSize:function(content,J,K){var L=this._htmlElement||this.__iQ();
L.style.width=K!==undefined?K+A:f;
L.innerHTML=content;
return this.__iT(L,J);
},getTextSize:function(M,N){var O=this._textElement||this.__iP();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){O.firstChild.setAttribute(l,M);
}else{qx.bom.element.Attribute.set(O,m,M);
}return this.__iT(O,N);
},__iT:function(R,S){var T=this.__iO;

if(!S){S={};
}
for(var U in T){R.style[U]=S[U]||k;
}var V=qx.bom.element.Dimension.getSize(R);

if(qx.core.Variant.isSet(g,y)){if(!qx.bom.client.Platform.WIN){V.width++;
}}return V;
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
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(g){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(e){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__nY",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__nY=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__nY:null,_applyBlockerColor:function(h,i){this.__nY.setColor(h);
},_applyBlockerOpacity:function(j,k){this.__nY.setOpacity(j);
},block:function(){this.__nY.block();
},isBlocked:function(){return this.__nY.isBlocked();
},unblock:function(){this.__nY.unblock();
},forceUnblock:function(){this.__nY.forceUnblock();
},blockContent:function(g){this.__nY.blockContent(g);
},isContentBlocked:function(){return this.__nY.isContentBlocked();
},unblockContent:function(){this.__nY.unblockContent();
},forceUnblockContent:function(){this.__nY.forceUnblockContent();
},getBlocker:function(){return this.__nY;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__oa",b="__ob",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__oa:null,__ob:null,getWindowManager:function(){if(!this.__ob){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ob;
},supportsMaximize:function(){return true;
},setWindowManager:function(l){if(this.__ob){this.__ob.setDesktop(null);
}l.setDesktop(this);
this.__ob=l;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(m,n){this.getWindowManager().changeActiveWindow(m,n);
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(k){if(!qx.lang.Array.contains(this.getWindows(),k)){this.getWindows().push(k);
k.addListener(f,this._onChangeActive,this);
k.addListener(h,this._onChangeModal,this);
k.addListener(g,this._onChangeVisibility,this);
}
if(k.getActive()){this.setActiveWindow(k);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(j){qx.lang.Array.remove(this.getWindows(),j);
j.removeListener(f,this._onChangeActive,this);
j.removeListener(h,this._onChangeModal,this);
j.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__oa){this.__oa=[];
}return this.__oa;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__oc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(w,x){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__oc;

if(!v){this.__oc=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(y,z){if(z===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(y===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__oc=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(y){this.__od=qx.dom.Node.getWindow(y);
this.__oe=y;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__od,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__od:null,__oe:null,_createContainerElement:function(){var o=this.__oe;
if(qx.core.Variant.isSet(f,k)){if(!o.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var s=o.documentElement.style;
var p=o.body.style;
s.overflow=p.overflow=g;
s.padding=s.margin=p.padding=p.margin=l;
s.width=s.height=p.width=p.height=c;
var r=o.createElement(d);
o.body.appendChild(r);
var q=new qx.html.Root(r);
q.setStyle(m,b);
q.setAttribute(i,this.toHashCode());
return q;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var t=qx.bom.Viewport.getWidth(this.__od);
var u=qx.bom.Viewport.getHeight(this.__od);
return {minWidth:t,width:t,maxWidth:t,minHeight:u,height:u,maxHeight:u};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(v,w){qx.ui.root.Abstract.prototype._applyDecorator.call(this,v,w);

if(!v){return;
}var x=this.getDecoratorElement().getInsets();

if(x.left||x.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__od=this.__oe=null;
}});
})();
(function(){var o="zIndex",n="px",m="keydown",l="deactivate",k="resize",j="keyup",h="keypress",g="backgroundColor",f="_applyOpacity",d="Boolean",A="__nN",z="opacity",y="interval",x="Tab",w="__nP",v="Color",u="qx.ui.root.Page",t="Number",s="__nL",r="qx.ui.core.Blocker",p="qx.ui.root.Application",q="_applyColor";
qx.Class.define(r,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this._widget=c;
this._isPageRoot=(qx.Class.isDefined(u)&&c instanceof qx.ui.root.Page);

if(this._isPageRoot){c.addListener(k,this.__nQ,this);
}
if(qx.Class.isDefined(p)&&c instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__nI=[];
this.__nJ=[];
this.__nK=[];
},properties:{color:{check:v,init:null,nullable:true,apply:q,themeable:true},opacity:{check:t,init:1,apply:f,themeable:true},keepBlockerActive:{check:d,init:false}},members:{__nL:null,__nM:0,__nN:null,__nK:null,__nI:null,__nJ:null,__nO:null,__nP:null,_isPageRoot:false,_widget:null,__nQ:function(e){var M=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:M.width,height:M.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:M.width,height:M.height});
}},_applyColor:function(I,J){var K=qx.theme.manager.Color.getInstance().resolve(I);
this.__nR(g,K);
},_applyOpacity:function(T,U){this.__nR(z,T);
},__nR:function(B,C){var D=[];
this.__nL&&D.push(this.__nL);
this.__nN&&D.push(this.__nN);

for(var i=0;i<D.length;i++){D[i].setStyle(B,C);
}},_backupActiveWidget:function(){var Q=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nI.push(Q.getActive());
this.__nJ.push(Q.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var P=this.__nI.length;

if(P>0){var O=this.__nI[P-1];

if(O){qx.bom.Element.activate(O);
}this.__nI.pop();
}var N=this.__nJ.length;

if(N>0){var O=this.__nJ[N-1];

if(O){qx.bom.Element.focus(this.__nJ[N-1]);
}this.__nJ.pop();
}},__nS:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__nL){this.__nL=this.__nS();
this.__nL.setStyle(o,15);
this._widget.getContainerElement().add(this.__nL);
this.__nL.exclude();
}return this.__nL;
},block:function(){this.__nM++;

if(this.__nM<2){this._backupActiveWidget();
var F=this.getBlockerElement();
F.include();
F.activate();
F.addListener(l,this.__nX,this);
F.addListener(h,this.__nW,this);
F.addListener(m,this.__nW,this);
F.addListener(j,this.__nW,this);
}},isBlocked:function(){return this.__nM>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nM--;

if(this.__nM<1){this.__nT();
this.__nM=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nM=0;
this.__nT();
},__nT:function(){this._restoreActiveWidget();
var E=this.getBlockerElement();
E.removeListener(l,this.__nX,this);
E.removeListener(h,this.__nW,this);
E.removeListener(m,this.__nW,this);
E.removeListener(j,this.__nW,this);
E.exclude();
},getContentBlockerElement:function(){if(!this.__nN){this.__nN=this.__nS();
this._widget.getContentElement().add(this.__nN);
this.__nN.exclude();
}return this.__nN;
},blockContent:function(a){var b=this.getContentBlockerElement();
b.setStyle(o,a);
this.__nK.push(a);

if(this.__nK.length<2){b.include();

if(this._isPageRoot){if(!this.__nP){this.__nP=new qx.event.Timer(300);
this.__nP.addListener(y,this.__nV,this);
}this.__nP.start();
this.__nV();
}}},isContentBlocked:function(){return this.__nK.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nK.pop();
var G=this.__nK[this.__nK.length-1];
var H=this.getContentBlockerElement();
H.setStyle(o,G);

if(this.__nK.length<1){this.__nU();
this.__nK=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nK=[];
var L=this.getContentBlockerElement();
L.setStyle(o,null);
this.__nU();
},__nU:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nP.stop();
}},__nV:function(){var R=this._widget.getContainerElement().getDomElement();
var S=qx.dom.Node.getDocument(R);
this.getContentBlockerElement().setStyles({height:S.documentElement.scrollHeight+n,width:S.documentElement.scrollWidth+n});
},__nW:function(e){if(e.getKeyIdentifier()==x){e.stop();
}},__nX:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(k,this.__nQ,this);
}this._disposeObjects(A,s,w);
this.__nO=this.__nI=this.__nJ=this._widget=this.__nK=null;
}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="qx.client",b="div",a="dblclick",w="mousewheel",v="qx.html.Blocker",u="mousemove",t="mouseover",s="appear",r="click",q="mshtml",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(v,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if(qx.core.Variant.isSet(c,q)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,b,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(w,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(s,this.__ou,this);
this.addListener(n,this.__ou,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__ou:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var bb="keypress",ba="focusout",Y="activate",X="Tab",W="singleton",V="__of",U="deactivate",T="focusin",S="qx.ui.core.FocusHandler";
qx.Class.define(S,{extend:qx.core.Object,type:W,construct:function(){qx.core.Object.call(this);
this.__of={};
},members:{__of:null,__og:null,__oh:null,__oi:null,connectTo:function(Q){Q.addListener(bb,this.__oj,this);
Q.addListener(T,this._onFocusIn,this,true);
Q.addListener(ba,this._onFocusOut,this,true);
Q.addListener(Y,this._onActivate,this,true);
Q.addListener(U,this._onDeactivate,this,true);
},addRoot:function(bc){this.__of[bc.$$hash]=bc;
},removeRoot:function(R){delete this.__of[R.$$hash];
},getActiveWidget:function(){return this.__og;
},isActive:function(bi){return this.__og==bi;
},getFocusedWidget:function(){return this.__oh;
},isFocused:function(v){return this.__oh==v;
},isFocusRoot:function(P){return !!this.__of[P.$$hash];
},_onActivate:function(e){var s=e.getTarget();
this.__og=s;
var r=this.__ok(s);

if(r!=this.__oi){this.__oi=r;
}},_onDeactivate:function(e){var a=e.getTarget();

if(this.__og==a){this.__og=null;
}},_onFocusIn:function(e){var b=e.getTarget();

if(b!=this.__oh){this.__oh=b;
b.visualizeFocus();
}},_onFocusOut:function(e){var n=e.getTarget();

if(n==this.__oh){this.__oh=null;
n.visualizeBlur();
}},__oj:function(e){if(e.getKeyIdentifier()!=X){return;
}
if(!this.__oi){return;
}e.stopPropagation();
e.preventDefault();
var bg=this.__oh;

if(!e.isShiftPressed()){var bh=bg?this.__oo(bg):this.__om();
}else{var bh=bg?this.__op(bg):this.__on();
}if(bh){bh.tabFocus();
}},__ok:function(t){var u=this.__of;

while(t){if(u[t.$$hash]){return t;
}t=t.getLayoutParent();
}return null;
},__ol:function(E,F){if(E===F){return 0;
}var H=E.getTabIndex()||0;
var G=F.getTabIndex()||0;

if(H!=G){return H-G;
}var M=E.getContainerElement().getDomElement();
var L=F.getContainerElement().getDomElement();
var K=qx.bom.element.Location;
var J=K.get(M);
var I=K.get(L);
if(J.top!=I.top){return J.top-I.top;
}if(J.left!=I.left){return J.left-I.left;
}var N=E.getZIndex();
var O=F.getZIndex();

if(N!=O){return N-O;
}return 0;
},__om:function(){return this.__os(this.__oi,null);
},__on:function(){return this.__ot(this.__oi,null);
},__oo:function(A){var B=this.__oi;

if(B==A){return this.__om();
}
while(A&&A.getAnonymous()){A=A.getLayoutParent();
}
if(A==null){return [];
}var C=[];
this.__oq(B,A,C);
C.sort(this.__ol);
var D=C.length;
return D>0?C[0]:this.__om();
},__op:function(c){var d=this.__oi;

if(d==c){return this.__on();
}
while(c&&c.getAnonymous()){c=c.getLayoutParent();
}
if(c==null){return [];
}var f=[];
this.__or(d,c,f);
f.sort(this.__ol);
var g=f.length;
return g>0?f[g-1]:this.__on();
},__oq:function(parent,w,x){var y=parent.getLayoutChildren();
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];
if(!(z instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(z)&&z.isEnabled()&&z.isVisible()){if(z.isTabable()&&this.__ol(w,z)<0){x.push(z);
}this.__oq(z,w,x);
}}},__or:function(parent,h,j){var k=parent.getLayoutChildren();
var m;

for(var i=0,l=k.length;i<l;i++){m=k[i];
if(!(m instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(m)&&m.isEnabled()&&m.isVisible()){if(m.isTabable()&&this.__ol(h,m)>0){j.push(m);
}this.__or(m,h,j);
}}},__os:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__ol(bf,bd)<0){bd=bf;
}}bd=this.__os(bf,bd);
}}return bd;
},__ot:function(parent,o){var p=parent.getLayoutChildren();
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];
if(!(q instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(q)&&q.isEnabled()&&q.isVisible()){if(q.isTabable()){if(o==null||this.__ol(q,o)>0){o=q;
}}o=this.__ot(q,o);
}}return o;
}},destruct:function(){this._disposeMap(V);
this.__oh=this.__og=this.__oi=null;
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
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(S,name,T){var U={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(U[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(T,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof T===k){this.assertInteger(T);
}else if(qx.lang.Type.isString(T)){this.assertMatch(T,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+T+b);
}}},"off":null}),renderLayout:function(D,E){var P=this._getLayoutChildren();
var H,O,M;
var R,top,F,G,J,I;
var N,L,Q,K;

for(var i=0,l=P.length;i<l;i++){H=P[i];
O=H.getSizeHint();
M=H.getLayoutProperties();
N=H.getMarginTop();
L=H.getMarginRight();
Q=H.getMarginBottom();
K=H.getMarginLeft();
R=M.left!=null?M.left:M.edge;

if(qx.lang.Type.isString(R)){R=Math.round(parseFloat(R)*D/100);
}F=M.right!=null?M.right:M.edge;

if(qx.lang.Type.isString(F)){F=Math.round(parseFloat(F)*D/100);
}top=M.top!=null?M.top:M.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*E/100);
}G=M.bottom!=null?M.bottom:M.edge;

if(qx.lang.Type.isString(G)){G=Math.round(parseFloat(G)*E/100);
}if(R!=null&&F!=null){J=D-R-F-K-L;
if(J<O.minWidth){J=O.minWidth;
}else if(J>O.maxWidth){J=O.maxWidth;
}R+=K;
}else{J=M.width;

if(J==null){J=O.width;
}else{J=Math.round(parseFloat(J)*D/100);
if(J<O.minWidth){J=O.minWidth;
}else if(J>O.maxWidth){J=O.maxWidth;
}}
if(F!=null){R=D-J-F-L-K;
}else if(R==null){R=K;
}else{R+=K;
}}if(top!=null&&G!=null){I=E-top-G-N-Q;
if(I<O.minHeight){I=O.minHeight;
}else if(I>O.maxHeight){I=O.maxHeight;
}top+=N;
}else{I=M.height;

if(I==null){I=O.height;
}else{I=Math.round(parseFloat(I)*E/100);
if(I<O.minHeight){I=O.minHeight;
}else if(I>O.maxHeight){I=O.maxHeight;
}}
if(G!=null){top=E-I-G-Q-N;
}else if(top==null){top=N;
}else{top+=N;
}}H.renderLayout(R,top,J,I);
}},_computeSizeHint:function(){var B=0,A=0;
var y=0,w=0;
var u,t;
var s,q;
var m=this._getLayoutChildren();
var p,z,o;
var C,top,n,r;

for(var i=0,l=m.length;i<l;i++){p=m[i];
z=p.getLayoutProperties();
o=p.getSizeHint();
var x=p.getMarginLeft()+p.getMarginRight();
var v=p.getMarginTop()+p.getMarginBottom();
u=o.width+x;
t=o.minWidth+x;
C=z.left!=null?z.left:z.edge;

if(C&&typeof C===k){u+=C;
t+=C;
}n=z.right!=null?z.right:z.edge;

if(n&&typeof n===k){u+=n;
t+=n;
}B=Math.max(B,u);
A=Math.max(A,t);
s=o.height+v;
q=o.minHeight+v;
top=z.top!=null?z.top:z.edge;

if(top&&typeof top===k){s+=top;
q+=top;
}r=z.bottom!=null?z.bottom:z.edge;

if(r&&typeof r===k){s+=r;
q+=r;
}y=Math.max(y,s);
w=Math.max(w,q);
}return {width:B,minWidth:A,height:y,minHeight:w};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){qx.html.Element.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){qx.html.Element.prototype.useElement.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
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
(function(){var cK="/",cJ="",cI="current",cH="visible",cG="excluded",cF="modelLink",cE="category",cD="all",cC="qx.version",cB="widget",ee="node",ed="tags",ec="_demoView",eb="html",ea="horizontal",dY="~",dX="separator-vertical",dW="request",dV="tree1",dU="_leftComposite",cR="_status",cS='_cmdRunSample',cP="^.*",cQ="_navPart",cN="changeValue",cO='_cmdNextSample',cL="_iframe",cM="execute",da="Filter...",db="__Lr",dv="logappender",dr="http://demo.qooxdoo.org/",dD=".html",dy="Demo Browser",dP="interval",dJ="__Ls",di="_tree",dT="app-header",dR="demobrowser.DemoBrowser",dQ="f2",dg="value",dm="_stopbutton",dp='_cmdNamespacePollution',dt="runbutton",dw="changeSelection",dz="ig",dF="f1",dL="_",cT="viewGroup",cU="icon/16/actions/edit-find.png",dk="/playground/",dC="?qx.theme=",dB="__Lx",dA="animation",dH="textfield",dG="qooxdoo ",dx='_cmdDisposeSample',dE="qx.theme.Modern",cv='_cmdSampleInOwnWindow',dK="mainsplit",cV=".",cW="right",ds="main",cx="failed",cA="toolbar",df='_cmdObjectSummary',cX="filled",cY="js",dd="_searchTextField",du="demo/welcome.html",dN="completed",dM='demo/',dn="_history",dO=".*",dh="__Lt",dI=" ",dc="background-splitpane",de="left",cz="__Lz",dq="_infosplit",dj="log",dS="_runbutton",dl='_cmdPrevSample',cy="__Ly";
qx.Class.define(dR,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var N=new qx.ui.layout.VBox;
N.setSeparator(dX);
this.setLayout(N);
this.add(this._createHeader());
this.widgets={};
this.tests={};
this.__Lq=dE;
this.__LB();
this.__Lr=this.__LI();
this.add(this.__Lr);
var R=new qx.ui.splitpane.Pane(ea);
this.mainsplit=R;
var O=new qx.ui.splitpane.Pane(ea);
O.setDecorator(null);
this._infosplit=O;
this.add(R,{flex:1});
var S=this._leftComposite=new qx.ui.container.Composite();
S.setLayout(new qx.ui.layout.VBox(3));
S.setBackgroundColor(dc);
R.add(S,0);
{};
var M=new qx.ui.container.Composite();
M.setLayout(new qx.ui.layout.HBox(3));
M.setAppearance(dH);
S.add(M);
var T=new qx.ui.basic.Image(cU);
M.add(T);
this._searchTextField=new qx.ui.form.TextField();
this._searchTextField.setLiveUpdate(true);
this._searchTextField.setAppearance(cB);
this._searchTextField.setPlaceholder(da);
this._searchTextField.addListener(cN,function(e){this.filter(e.getData());
},this);
M.add(this._searchTextField,{flex:1});
this._status=new qx.ui.basic.Label(cJ);
this._status.setAppearance(cB);
this._status.setWidth(80);
this._status.setTextAlign(cW);
M.add(this._status);
R.add(O,1);
this._tree=this.__LN();
S.add(this._tree,{flex:1});
this._demoView=this.__LJ();
{O.add(this._demoView,2);
};
var K=this.__LL();
var L=this.__LM();
var P=this.__LK();
var Q=new qx.ui.container.Stack;
Q.setDecorator(ds);
Q.add(K);
Q.add(L);
Q.add(P);
this.viewGroup.addListener(dw,function(e){var q=e.getData()[0];
var v=q!=null?q.getUserData(dg):cJ;

switch(v){case eb:this.setSelection([K]);
Q.show();
break;
case cY:this.setSelection([L]);
Q.show();
break;
case dj:this.setSelection([P]);
Q.show();
break;
default:this.resetSelection();
Q.exclude();
}},Q);
O.add(Q,1);
Q.resetSelection();
Q.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(dW,function(e){var bx=e.getData().replace(dY,cK);

if(this._currentSample!=bx){this.setCurrentSample(bx);
}},this);
this.__Ls=[this.__Lx,this.__Ly,this.__Lz];
{this.__Ls.push(this.__Lv);
};
this.__Lt=new qx.event.Timer(250);
this.__Lt.addListener(dP,this.__LP,this);
this.__Lt.start();
},properties:{playDemos:{check:[cD,cE,cI],init:cI}},members:{_iframe:null,__Lq:null,__Lt:null,__Lu:null,_tree:null,_status:null,_searchTextField:null,__Lv:null,__Lw:null,__Ls:null,_versionFilter:null,__Lx:null,__Ly:null,__Lz:null,__LA:null,__Lr:null,_leftComposite:null,_infosplit:null,_demoView:null,defaultUrl:du,playgroundUrl:dr+qx.core.Setting.get(cC)+dk,__LB:function(){this._cmdObjectSummary=new qx.ui.core.Command("Ctrl+O");
this._cmdObjectSummary.addListener("execute",this.__LC,this);
this._cmdRunSample=new qx.ui.core.Command("F5");
this._cmdRunSample.addListener("execute",this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command("Ctrl+Left");
this._cmdPrevSample.addListener("execute",this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command("Ctrl+Right");
this._cmdNextSample.addListener("execute",this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command("Ctrl+N");
this._cmdSampleInOwnWindow.addListener("execute",this.__LD,this);
this._cmdDisposeSample=new qx.ui.core.Command("Ctrl+D");
this._cmdDisposeSample.addListener("execute",this.__LG,this);
this._cmdNamespacePollution=new qx.ui.core.Command("Ctrl+P");
this._cmdNamespacePollution.addListener("execute",this.__LH,this);
},__LC:function(){var f=this._iframe.getWindow();

if(f&&f.qx){alert(f.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__LD:function(){var ej=this._iframe.getSource();
window.open(ej,"_blank");
},__LE:function(n){var o=!!n;
var p=this._tree.getSelection()[0].getUserData("tags");

if(p){o=o&&!qx.lang.Array.contains(p,"noPlayground");
}this.__Lw=n;
},__LF:function(){if(this.__Lw){var eQ=this.__Lw;
var eP='{"code": '+'"'+encodeURIComponent(eQ)+'"}';
var eO=this.playgroundUrl+"#"+encodeURIComponent(eP);
window.open(eO,"_blank");
}else{alert(this.tr("Could not open the Playground."));
}},__LG:function(e){var ek=this._iframe.getWindow();

if(ek&&ek.qx){ek.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__LH:function(e){var co=this._iframe.getWindow();

if(co&&co.qx){alert(co.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__LI:function(){var ev=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
ev.add(this._navPart);
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
var eJ=new qx.ui.toolbar.Button(this.tr("Previous"),"icon/22/actions/go-previous.png");
eJ.addListener("execute",this.playPrev,this);
eJ.setToolTipText("Run previous demo");
this._navPart.add(eJ);
var eM=new qx.ui.toolbar.Button(this.tr("Next"),"icon/22/actions/go-next.png");
eM.addListener("execute",this.playNext,this);
eM.setToolTipText("Run next demo");
this._navPart.add(eM);
var eF=new qx.ui.toolbar.Button(this.tr("Own Window"),"icon/22/actions/edit-redo.png");
eF.addListener("execute",this.__LD,this);
eF.setToolTipText("Open demo in new window");
this.__Lx=eF;
this._navPart.add(eF);
{var eu=new qx.ui.toolbar.Button(this.tr("To Playground"),"icon/22/actions/application-exit.png");
eu.addListener("execute",this.__LF,this);
eu.setToolTipText("Open demo in the playground");
eu.setEnabled(false);
if(qx.core.Variant.isSet("qx.client","mshtml")){eu.exclude();
}this.__Lv=eu;
this._navPart.add(eu);
};
var ew=new qx.ui.toolbar.Part;
this.__Lz=ew;
ev.add(ew);
{var eI=new qx.ui.menu.Menu;
this.__LA=eI;
var eD=new qx.ui.menu.RadioButton("Modern Theme");
var eB=new qx.ui.menu.RadioButton("Classic Theme");
eD.setUserData("value","qx.theme.Modern");
eD.setValue(true);
eB.setUserData("value","qx.theme.Classic");
var eK=new qx.ui.form.RadioGroup(eD,eB);
eK.addListener("changeSelection",this.__LU,this);
eI.add(eD);
eI.add(eB);
var es=new qx.ui.toolbar.MenuButton(this.tr("Theme"),"icon/22/apps/utilities-color-chooser.png",eI);
es.setToolTipText("Choose theme");
ew.add(es);
};
var ez=new qx.ui.menu.Menu;
{var eA=new qx.ui.menu.Button(this.tr("Object Summary"));
eA.setCommand(this._cmdObjectSummary);
ez.add(eA);
var eL=new qx.ui.menu.Button(this.tr("Global Namespace Pollution"));
eL.setCommand(this._cmdNamespacePollution);
ez.add(eL);
};
var eG=new qx.ui.menu.Button(this.tr("Dispose Demo"));
eG.setCommand(this._cmdDisposeSample);
ez.add(eG);
var eH=new qx.ui.toolbar.MenuButton(this.tr("Debug"),"icon/22/apps/office-spreadsheet.png",ez);
eH.setToolTipText("Debugging options");
ew.add(eH);
var et=new qx.ui.toolbar.Part;
this.__Ly=et;
ev.addSpacer();
ev.add(et);
{var eN=new qx.ui.toolbar.RadioButton("HTML Code","icon/22/apps/internet-web-browser.png");
eN.setToolTipText("Display HTML source");
var eE=new qx.ui.toolbar.RadioButton("JS Code","icon/22/mimetypes/executable.png");
eE.setToolTipText("Display JavaScript source");
eN.setUserData("value","html");
eE.setUserData("value","js");
et.add(eN);
et.add(eE);
};
var eC=new qx.ui.toolbar.RadioButton("Log File","icon/22/apps/utilities-log-viewer.png");
eC.setToolTipText("Display log file");
eC.setUserData("value","log");
et.add(eC);
var ey=this.viewGroup=new qx.ui.form.RadioGroup;
ey.setAllowEmptySelection(true);
ey.add(eC);
{ey.add(eN,eE);
};
return ev;
},__LJ:function(){var cu=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
cu.addListener("load",this.__LO,this);
this._iframe=cu;
return cu;
},__LK:function(){var cr=new qx.ui.layout.VBox(0,"middle","main");
cr.setAlignX("right");
var ct=new qx.ui.container.Composite(cr);
var cp=new qx.ui.decoration.Background().set({backgroundColor:"background-medium"});
ct.setDecorator(cp);
var cs=new qx.ui.form.Button(this.tr("Clear log"),"icon/22/actions/edit-clear.png");
cs.setAllowGrowX(false);
cs.setMargin(5);
cs.addListener("execute",function(){this.logappender.clear();
},this);
ct.add(cs,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow("auto","auto");
this.f2.setFont("monospace");
this.f2.setBackgroundColor("white");
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var cq=document.createElement("div");
this.logelem=document.createElement("div");
this.logelem.style.padding="8px";
this.logappender.setElement(this.logelem);
cq.appendChild(this.logelem);
this.f2.getContentElement().useElement(cq);
ct.add(this.f2,{flex:1});
return ct;
},__LL:function(){var bl=new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
bl.setOverflow("auto","auto");
bl.setFont("monospace");
bl.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.html.page"]=bl;
bl.getContentElement().setAttribute("id","qx_srcview");
return bl;
},__LM:function(){var a=new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
a.setOverflow("auto","auto");
a.setFont("monospace");
a.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.js.page"]=a;
a.getContentElement().setAttribute("id","qx_srcview");
return a;
},__LN:function(){var bU=new qx.ui.tree.Tree();
var bT=new qx.ui.tree.TreeFolder("Demos");
bU.setAppearance("demo-tree");
bU.setRoot(bT);
bU.setSelection([bT]);
this.tree=this.widgets["treeview.flat"]=bU;
bU.addListener("changeSelection",this.treeGetSelection,this);
bU.addListener("dblclick",function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return bU;
},treeGetSelection:function(e){var b=this.tree.getSelection()[0];
var c=b.getUserData(cF);
this.tests.selected=this.tests.handler.getFullName(c);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var bV=this._sampleToTreeNodeMap;
var cc=null;
var cf=null;
var ce;
{ce=/\?autorun=true/.test(location.href);
};
var cb=this._history.getState();
var bY=cb.match(/([^~]+)~/);

if(bY){cc=bY[1];
}else{var bW=cb.match(/([^~][\w]*)/);

if(bW){cc=bW[1];

if(ce){this.setPlayDemos(cE);
}}else{cc=dA;

if(ce){this.setPlayDemos(cD);
}}}function cd(by,bz){var bD=bz.getChildren();
var t;

for(var i=0;i<bD.length;i++){var bA=bD[i];

if(bA.hasChildren()){t=new qx.ui.tree.TreeFolder(bX.polish(bA.label));
t.setUserData(cX,false);
t.setUserData(ee,bA);
cd(t,t.getUserData(ee));

if(bA.label==cc){cf=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(bX.polish(bA.label));
var bC=bA.pwd().slice(1).join(cK)+cK+bA.label;

if(bA.tags){var j,m,bB;
t.setUserData(ed,bA.tags);
{};
}bV[bC]=t;
}by.add(t);
t.setUserData(cF,bA);
bA.widgetLinkFull=t;
}}var ca=this.tests.handler.ttree;
var bX=this;
this.tree.setUserData(cF,ca);
this.tree.getRoot().setOpen(true);
cd(this.tree.getRoot(),ca);
{};

if(cf!=null){this.tree.setSelection([cf]);
}},runSample:function(e){if(e&&e.getType()===cM){if(this.tests.selected===cJ){this.setPlayDemos(cD);
}else if(this.tests.selected.indexOf(eb)>0){this.setPlayDemos(cI);
}else{this.setPlayDemos(cE);
}}this._runbutton.setVisibility(cG);
this._stopbutton.setVisibility(cH);

if(this.tests.selected!=cJ){var z=this.tests.selected.replace(cV,cK);
this.setCurrentSample(z);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(cI);
this._stopbutton.setVisibility(cG);
this._runbutton.setVisibility(cH);
},setCurrentSample:function(eo){if(!eo){return;
}
if(!this._sampleToTreeNodeMap){return;
}var ep;
var eq=this._sampleToTreeNodeMap[eo];

if(eq){eq.getTree().setSelection([eq]);
ep=dM+eo;
{ep+=dC+this.__Lq;
};
}else{ep=this.defaultUrl;
}
if(this._iframe.getSource()==ep){this._iframe.reload();
}else{this.__Lu=false;
this._iframe.setSource(ep);
}if(ep==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=eo;
this._currentSampleUrl=ep;
},__LO:function(){var bL=this._iframe.getWindow();
var bR=this._iframe.getSource();

if(bR!=null&&bR!=this.defaultUrl){var bK;

try{bK=bL.location.href;
}catch(d){bK=window.location.href;
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
}},__LP:function(e){var U=this._iframe.getWindow();

try{if(U&&U.qx&&U.qx.log&&U.qx.log.appender){if(!this.__Lu){this.__Lu=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{U.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__LQ(this._currentSampleUrl);
}}}else{this.__Lu=false;
}}catch(cn){this.__Lu=false;
}},filter:function(bn){var bv=new RegExp(cP+bn+dO,dz);
var bt=this._tree.getRoot().getItems(true,true);
var bu=0;
var bo=0;

for(var i=0;i<bt.length;i++){var bw=bt[i];
var parent=bw.getParent();
var bs=bw.getUserData(ed);
var bp=false;

if(bs!=null){for(var j=0;j<bs.length;j++){bp=!!bs[j].match(bv);

if(bp){break;
}}}
if(bw.getChildren().length==0){bo++;
}
if((bp||(bw.getLabel().search(bv)!=-1)||(parent.getLabel().search(bv)!=-1))){if(bw.getChildren().length==0){bu++;
}bw.show();
bw.getParent().setOpen(true);
bw.getParent().show();
}else{bw.exclude();
}}if(bn==cJ){var br=this._tree.getRoot().getItems(false,true);
var bq=this._tree.getSelection();
for(var i=0;i<br.length;i++){if(br[i]==bq[0]||br[i]==bq[0].getParent()){continue;
}br[i].setOpen(false);
}}this._status.setValue(bu+cK+bo);
},__LQ:function(g){if(typeof (g)!="string"){return;
}var h=new qx.io.remote.Request(g);
h.setTimeout(180000);
h.setProhibitCaching(false);
h.addListener("completed",function(A){var content=A.getContent();
if(content){{var D=content.indexOf("<script",content.indexOf("<script")+7);
var J=content.indexOf("src",D);
var C=content.indexOf("\"",J+5);
var E=content.substring(J+5,C);
var H=E.substring(4,E.length-3)+".src.js";
var u="script/demobrowser.demo";
var G=g.split('/');
var F=G[1];
var I=G[2];
I=I.substr(0,I.indexOf('.html'));
u+="."+F+"."+I+".src.js";
H=u;
var B=new qx.io.remote.Request(H);
B.setTimeout(180000);
B.setProhibitCaching(false);
B.addListener("completed",function(bb){var bc=bb.getContent();
this.__LE(bc);

if(bc){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__LR(bc,"javascript"));
}},this);
B.addListener("failed",function(ck){this.error("Couldn't load file: "+g);
},this);
B.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__LR(content));
};
}},this);
h.addListener("failed",function(ef){this.error("Couldn't load file: "+g);
},this);
h.send();
},dataLoader:function(x){var y=new qx.io.remote.Request(x);
y.setTimeout(180000);
y.setProhibitCaching(false);
y.addListener(dN,function(Y){var content=Y.getContent();
var ba=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(ba);
this.leftReloadTree();
var cm=this._history.getState();

if(cm){this.setCurrentSample(cm.replace(dY,cK));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
y.addListener(cx,function(cl){this.error("Couldn't load file: "+x);
},this);
y.send();
},playPrev:function(e){this.setPlayDemos(cI);
var bH=this.tree.getSelection()[0];

if(bH){var bE=this.tree.getPreviousNodeOf(bH,false);

if(!bE||bE==this.tree.getRoot()){return;
}
while(bE.isVisible&&!bE.isVisible()){bE=this.tree.getPreviousNodeOf(bE,false);
}
if(bE.getParent()==this.tree.getRoot()){var bG=this.tree.getPreviousNodeOf(bE,false);

while(bG.isVisible&&!bG.isVisible()){bG=this.tree.getPreviousNodeOf(bG,false);
}
if(bG.getParent()==this.tree.getRoot()){bG.setOpen(true);
var bF=this.tree.getPreviousNodeOf(bE,false);

while(bF.isVisible&&!bF.isVisible()){bF=this.tree.getPreviousNodeOf(bF,false);
}
if(bG!==bF){bE=bF;
}}else{bE=bG;
}}
if(!bE||bE===bH){this._stopbutton.setVisibility(cG);
this._runbutton.setVisibility(cH);
return;
}else{this.tree.setSelection([bE]);
this.runSample();
}}},playNext:function(e){var X=this.tree.getSelection()[0];

if(X){var V=this.tree.getNextNodeOf(X,false);

if(!V){return;
}
if(V.getParent()==this.tree.getRoot()){V.setOpen(true);
V=this.tree.getNextNodeOf(V,false);
}
if(!V){return;
}
while(!V.isVisible()){var W=this.tree.getNextNodeOf(V,false);

if(!W){return ;
}
if(W.getParent()==this.tree.getRoot()){V.setOpen(true);
var W=this.tree.getNextNodeOf(W,false);
}V=W;
}
if(V){this.tree.setSelection([V]);
this.runSample();
}else{this._stopbutton.setVisibility(cG);
this._runbutton.setVisibility(cH);
}}},__LR:function(bd,be){var bf=new qx.util.StringBuilder("<pre class='script'>");
var bh=[];
var bi=new qx.util.StringBuilder();
var bj=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var bg=/^\s*<\/script>\s*$/i;
bd=bd.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var bh=bd.split('\n');
if(be=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(bd)+"</div></pre>";
}
for(var i=0;i<bh.length;i++){if(bj.exec(bh[i])){bf.add(this.__LS(qx.bom.String.escape(bi.get()+bh[i])));
bi.clear();
}else if(bg.exec(bh[i])){var bk=qx.dev.Tokenizer.javaScriptToHtml(bi.get());
bf.add('<div class="script">',bk,'</div>');
bi.clear();
bi.add(bh[i],'\n');
}else{bi.add(bh[i],'\n');
}}bf.add(this.__LS(qx.bom.String.escape(bi.get())),"</pre>");
return bf.get();
},disableMenuButtons:function(){var bm=this.__Ls;

for(var i=0;i<bm.length;i++){bm[i].setEnabled(false);
}},enableMenuButtons:function(){var k=this.__Ls;

for(var i=0;i<k.length;i++){k[i].setEnabled(true);
}},__LS:function(el){var en=el;
function em(eg){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var eh;
var ei=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){eh=arguments[i];

if(eh=="/"){ei=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(eh))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((ei?"/":""));
}s.add('&gt;');
return s.get();
}en=en.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,em);
return en;
},polish:function(l){return l.replace(dD,cJ).replace(dL,dI);
},__LT:function(){var w=this._iframe.getWindow();
var er;

if(w.qx&&w.qx.log&&w.qx.log.Logger){er=w.qx.log.Logger;
er.register(this.logappender);
er.clear();
er.unregister(this.logappender);
}},__LU:function(e){this.__Lq=e.getData()[0].getUserData("value");
this.runSample();
},_createHeader:function(){var ci=new qx.ui.layout.HBox();
var cg=new qx.ui.container.Composite(ci);
cg.setAppearance(dT);
var cj=new qx.ui.basic.Label(dy);
var ch=new qx.ui.basic.Label(dG+qx.core.Setting.get(cC));
cg.add(cj);
cg.add(new qx.ui.core.Spacer,{flex:1});
cg.add(ch);
return cg;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(dK,dV,de,dt,cA,dF,dQ,dn,dv,df,cS,dl,cO,cv,dx,dp,cQ,dS,dm,dB,cz,cy,cT,db,dq,dd,cR,di,cL,ec,dJ,dh,dU,ec);
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(bp,bq,br){qx.ui.layout.Abstract.call(this);

if(bp){this.setSpacing(bp);
}
if(bq){this.setAlignY(bq);
}
if(br){this.setSeparator(br);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__lv:null,__lw:null,__lx:null,__ly:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lz:function(){var Y=this._getLayoutChildren();
var length=Y.length;
var U=false;
var T=this.__lv&&this.__lv.length!=length&&this.__lw&&this.__lv;
var W;
var V=T?this.__lv:new Array(length);
var X=T?this.__lw:new Array(length);
if(this.getReversed()){Y=Y.concat().reverse();
}for(var i=0;i<length;i++){W=Y[i].getLayoutProperties();

if(W.height!=null){V[i]=parseFloat(W.height)/100;
}
if(W.flex!=null){X[i]=W.flex;
U=true;
}else{X[i]=0;
}}if(!T){this.__lv=V;
this.__lw=X;
}this.__lx=U;
this.__ly=Y;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(t,name,u){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(u,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(u);
this.assert(u>=0);
}},"off":null}),renderLayout:function(v,w){if(this._invalidChildrenCache){this.__lz();
}var D=this.__ly;
var length=D.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var A=N.computeVerticalSeparatorGaps(D,M,Q);
}else{var A=N.computeVerticalGaps(D,M,true);
}var i,y,z,H;
var I=[];
var O=A;

for(i=0;i<length;i+=1){H=this.__lv[i];
z=H!=null?Math.floor((w-A)*H):D[i].getSizeHint().height;
I.push(z);
O+=z;
}if(this.__lx&&O!=w){var F={};
var L,P;

for(i=0;i<length;i+=1){L=this.__lw[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lz();
}var bg=qx.ui.layout.Util;
var bo=this.__ly;
var bc=0,bf=0,be=0;
var ba=0,bh=0;
var bl,bb,bn;
for(var i=0,l=bo.length;i<l;i+=1){bl=bo[i];
bb=bl.getSizeHint();
bf+=bb.height;
var bk=this.__lw[i];
var bd=this.__lv[i];

if(bk){bc+=bb.minHeight;
}else if(bd){be=Math.max(be,Math.round(bb.minHeight/bd));
}else{bc+=bb.height;
}bn=bl.getMarginLeft()+bl.getMarginRight();
if((bb.width+bn)>bh){bh=bb.width+bn;
}if((bb.minWidth+bn)>ba){ba=bb.minWidth+bn;
}}bc+=be;
var bj=this.getSpacing();
var bm=this.getSeparator();

if(bm){var bi=bg.computeVerticalSeparatorGaps(bo,bj,bm);
}else{var bi=bg.computeVerticalGaps(bo,bj,true);
}return {minHeight:bc+bi,height:bf+bi,minWidth:ba,width:bh};
}},destruct:function(){this.__lv=this.__lw=this.__ly=null;
}});
})();
(function(){var V="splitter",U="slider",T="mousedown",S="mouseout",R="mousemove",Q="mouseup",P="losecapture",O="active",N="horizontal",M="vertical",bm="knob",bl="Integer",bk="height",bj="row-resize",bi="move",bh="maxHeight",bg="width",bf="_applyOrientation",be="mouseover",bd="splitpane",bb="qx.ui.splitpane.Pane",bc="_applyOffset",Y="minHeight",ba="minWidth",W="col-resize",X="maxWidth";
qx.Class.define(bb,{extend:qx.ui.core.Widget,construct:function(B){qx.ui.core.Widget.call(this);
this.__rh=[];
if(B){this.setOrientation(B);
}else{this.initOrientation();
}this.addListener(T,this._onMouseDown);
this.addListener(Q,this._onMouseUp);
this.addListener(R,this._onMouseMove);
this.addListener(S,this._onMouseOut);
this.addListener(P,this._onMouseUp);
},properties:{appearance:{refine:true,init:bd},offset:{check:bl,init:6,apply:bc},orientation:{init:N,check:[N,M],apply:bf}},members:{__ri:null,__rj:false,__rk:null,__rl:null,__rm:null,__rn:null,__ro:null,__rh:null,_createChildControlImpl:function(C){var D;

switch(C){case U:D=new qx.ui.splitpane.Slider(this);
D.exclude();
this._add(D,{type:C});
break;
case V:D=new qx.ui.splitpane.Splitter(this);
this._add(D,{type:C});
D.addListener(bi,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){D.addListener(be,this._onSplitterMouseOver,D);
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,C);
},_applyOrientation:function(F,G){var H=this.getChildControl(U);
var K=this.getChildControl(V);
this.__rm=F===N;
var J=this._getLayout();

if(J){J.dispose();
}var I=F===M?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(I);
K.removeState(G);
K.addState(F);
K.getChildControl(bm).removeState(G);
K.getChildControl(bm).addState(F);
H.removeState(G);
H.addState(F);
},_applyOffset:function(bx,by){var bz=this.getChildControl(V);

if(by===0){bz.removeListener(T,this._onMouseDown,this);
bz.removeListener(R,this._onMouseMove,this);
bz.removeListener(S,this._onMouseOut,this);
bz.removeListener(Q,this._onMouseUp,this);
bz.removeListener(P,this._onMouseUp,this);
this.addListener(T,this._onMouseDown);
this.addListener(Q,this._onMouseUp);
this.addListener(R,this._onMouseMove);
this.addListener(S,this._onMouseOut);
this.addListener(P,this._onMouseUp);
}
if(bx===0){this.removeListener(T,this._onMouseDown);
this.removeListener(Q,this._onMouseUp);
this.removeListener(R,this._onMouseMove);
this.removeListener(S,this._onMouseOut);
this.removeListener(P,this._onMouseUp);
bz.addListener(T,this._onMouseDown,this);
bz.addListener(R,this._onMouseMove,this);
bz.addListener(S,this._onMouseOut,this);
bz.addListener(Q,this._onMouseUp,this);
bz.addListener(P,this._onMouseUp,this);
}},add:function(bA,bB){if(bB==null){this._add(bA);
}else{this._add(bA,{flex:bB});
}this.__rh.push(bA);
},remove:function(E){this._remove(E);
qx.lang.Array.remove(this.__rh,E);
},getChildren:function(){return this.__rh;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var u=this.getChildControl(V);
var w=u.getContainerLocation();
var v=this.getContentLocation();
this.__ri=this.__rm?e.getDocumentLeft()-w.left+v.left:e.getDocumentTop()-w.top+v.top;
var A=this.getChildControl(U);
var z=u.getBounds();
A.setUserBounds(z.left,z.top,z.width,z.height);
A.setZIndex(u.getZIndex()+1);
A.show();
this.__rj=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__rj){this.__rq();
var a=this.getChildControl(U);
var b=this.__rn;

if(this.__rm){a.setDomLeft(b);
}else{a.setDomTop(b);
}e.stop();
}else{this.__rp();
}},_onMouseOut:function(e){this._setLastMousePosition(-100,-100);
this.__rp();
},_onMouseUp:function(e){if(!this.__rj){return;
}this._finalizeSizes();
var L=this.getChildControl(U);
L.exclude();
this.__rj=false;
this.releaseCapture();
this.__rp();
e.stop();
},_onSplitterMove:function(){this.__rp();
},_onSplitterMouseOver:function(){this.addState(O);
},_finalizeSizes:function(){var q=this.__rn;
var n=this.__ro;

if(q==null){return;
}var s=this._getChildren();
var r=s[2];
var o=s[3];
var p=r.getLayoutProperties().flex;
var t=o.getLayoutProperties().flex;
if((p!=0)&&(t!=0)){r.setLayoutProperties({flex:q});
o.setLayoutProperties({flex:n});
}else{if(this.__rm){r.setWidth(q);
o.setWidth(n);
}else{r.setHeight(q);
o.setHeight(n);
}}},_isNear:function(){var c=this.getChildControl(V);
var f=c.getBounds();
var h=c.getContainerLocation();
var d=this.getOffset();
if(!h){return;
}var i=this.__rk;
var j=f.width;
var g=h.left;

if(j<d){g-=Math.floor((d-j)/2);
j=d;
}
if(i<g||i>(g+j)){return false;
}var i=this.__rl;
var j=f.height;
var g=h.top;

if(j<d){g-=Math.floor((d-j)/2);
j=d;
}
if(i<g||i>(g+j)){return false;
}return true;
},__rp:function(){var l=this.getChildControl(V);
var m=this.getApplicationRoot();
if(this.__rj||this._isNear()){var k=this.__rm?W:bj;
this.setCursor(k);
m.setGlobalCursor(k);
l.addState(O);
}else if(l.hasState(O)){this.resetCursor();
m.resetGlobalCursor();
l.removeState(O);
}},__rq:function(){if(this.__rm){var bp=ba,bw=bg,bq=X,bu=this.__rk;
}else{var bp=Y,bw=bk,bq=bh,bu=this.__rl;
}var bv=this._getChildren();
var bn=bv[2].getSizeHint();
var bs=bv[3].getSizeHint();
var bt=bv[2].getBounds()[bw]+bv[3].getBounds()[bw];
var br=bu-this.__ri;
var bo=bt-br;
if(br<bn[bp]){bo-=bn[bp]-br;
br=bn[bp];
}else if(bo<bs[bp]){br-=bs[bp]-bo;
bo=bs[bp];
}if(br>bn[bq]){bo+=br-bn[bq];
br=bn[bq];
}else if(bo>bs[bq]){br+=bo-bs[bq];
bo=bs[bq];
}this.__rn=br;
this.__ro=bo;
},_isActiveDragSession:function(){return this.__rj;
},_setLastMousePosition:function(x,y){this.__rk=x;
this.__rl=y;
}},destruct:function(){this.__rh=null;
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
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(T,U,V){qx.ui.layout.Abstract.call(this);

if(T){this.setSpacing(T);
}
if(U){this.setAlignX(U);
}
if(V){this.setSeparator(V);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__lq:null,__lr:null,__ls:null,__lt:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lu:function(){var br=this._getLayoutChildren();
var length=br.length;
var bo=false;
var bm=this.__lq&&this.__lq.length!=length&&this.__lr&&this.__lq;
var bp;
var bn=bm?this.__lq:new Array(length);
var bq=bm?this.__lr:new Array(length);
if(this.getReversed()){br=br.concat().reverse();
}for(var i=0;i<length;i++){bp=br[i].getLayoutProperties();

if(bp.width!=null){bn[i]=parseFloat(bp.width)/100;
}
if(bp.flex!=null){bq[i]=bp.flex;
bo=true;
}else{bq[i]=0;
}}if(!bm){this.__lq=bn;
this.__lr=bq;
}this.__ls=bo;
this.__lt=br;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(R,name,S){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(S,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(S);
this.assert(S>=0);
}},"off":null}),renderLayout:function(t,u){if(this._invalidChildrenCache){this.__lu();
}var A=this.__lt;
var length=A.length;
var J=qx.ui.layout.Util;
var I=this.getSpacing();
var M=this.getSeparator();

if(M){var x=J.computeHorizontalSeparatorGaps(A,I,M);
}else{var x=J.computeHorizontalGaps(A,I,true);
}var i,v,G,F;
var L=[];
var B=x;

for(i=0;i<length;i+=1){F=this.__lq[i];
G=F!=null?Math.floor((t-x)*F):A[i].getSizeHint().width;
L.push(G);
B+=G;
}if(this.__ls&&B!=t){var D={};
var H,K;

for(i=0;i<length;i+=1){H=this.__lr[i];

if(H>0){C=A[i].getSizeHint();
D[i]={min:C.minWidth,value:L[i],max:C.maxWidth,flex:H};
}}var y=J.computeFlexOffsets(D,t,B);

for(i in y){K=y[i].offset;
L[i]+=K;
B+=K;
}}var Q=A[0].getMarginLeft();
if(B<t&&this.getAlignX()!=r){Q=t-B;

if(this.getAlignX()===p){Q=Math.round(Q/2);
}}var C,top,w,G,z,O,E;
var I=this.getSpacing();
this._clearSeparators();
if(M){var N=qx.theme.manager.Decoration.getInstance().resolve(M).getInsets();
var P=N.left+N.right;
}for(i=0;i<length;i+=1){v=A[i];
G=L[i];
C=v.getSizeHint();
O=v.getMarginTop();
E=v.getMarginBottom();
w=Math.max(C.minHeight,Math.min(u-O-E,C.maxHeight));
top=J.computeVerticalAlignOffset(v.getAlignY()||this.getAlignY(),w,u,O,E);
if(i>0){if(M){Q+=z+I;
this._renderSeparator(M,{left:Q,top:0,width:P,height:u});
Q+=P+I+v.getMarginLeft();
}else{Q+=J.collapseMargins(I,z,v.getMarginLeft());
}}v.renderLayout(Q,top,G,w);
Q+=G;
z=v.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lu();
}var bd=qx.ui.layout.Util;
var bl=this.__lt;
var W=0,be=0,bb=0;
var ba=0,bc=0;
var bi,X,bk;
for(var i=0,l=bl.length;i<l;i+=1){bi=bl[i];
X=bi.getSizeHint();
be+=X.width;
var bh=this.__lr[i];
var Y=this.__lq[i];

if(bh){W+=X.minWidth;
}else if(Y){bb=Math.max(bb,Math.round(X.minWidth/Y));
}else{W+=X.width;
}bk=bi.getMarginTop()+bi.getMarginBottom();
if((X.height+bk)>bc){bc=X.height+bk;
}if((X.minHeight+bk)>ba){ba=X.minHeight+bk;
}}W+=bb;
var bg=this.getSpacing();
var bj=this.getSeparator();

if(bj){var bf=bd.computeHorizontalSeparatorGaps(bl,bg,bj);
}else{var bf=bd.computeHorizontalGaps(bl,bg,true);
}return {minWidth:W+bf,width:be+bf,minHeight:ba,height:bc};
}},destruct:function(){this.__lq=this.__lr=this.__lt=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(D,name,E){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(E);
}
if(name==g){this.assertString(E);
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
}}},_computeSizeHint:function(){var O=this._getLayoutChildren();
var length=O.length;
var H,G,N;
var I=0,K=0,J=0;
var L=0,M=0,F=0;

for(var i=0;i<length;i++){H=O[i];
N=H.getLayoutProperties();
if(N.type===h){continue;
}G=H.getSizeHint();
I+=G.minHeight;
K+=G.height;
J+=G.maxHeight;

if(G.minWidth>L){L=G.minWidth;
}
if(G.width>M){M=G.width;
}
if(G.maxWidth>F){F=G.maxWidth;
}}return {minHeight:I,height:K,maxHeight:J,minWidth:L,width:M,maxWidth:F};
}}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.HLayout",c="' is not supported by the split layout!",b="The property '",a="qx.debug";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(N,name,O){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(O);
}
if(name==g){this.assertString(O);
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
}}},_computeSizeHint:function(){var M=this._getLayoutChildren();
var length=M.length;
var F,E,L;
var J=0,K=0,D=0;
var G=0,I=0,H=0;

for(var i=0;i<length;i++){F=M[i];
L=F.getLayoutProperties();
if(L.type===h){continue;
}E=F.getSizeHint();
J+=E.minWidth;
K+=E.width;
D+=E.maxWidth;

if(E.minHeight>G){G=E.minHeight;
}
if(E.height>I){I=E.height;
}
if(E.maxHeight>H){H=E.maxHeight;
}}return {minWidth:J,width:K,maxWidth:D,minHeight:G,height:I,maxHeight:H};
}}});
})();
(function(){var i="Boolean",h="changeInvalidMessage",g="String",f="invalid",e="qx.ui.form.MForm",d="_applyValid",c="",b="changeRequired",a="changeValid";
qx.Mixin.define(e,{properties:{valid:{check:i,init:true,apply:d,event:a},required:{check:i,init:false,event:b},invalidMessage:{check:g,init:c,event:h},requiredInvalidMessage:{check:g,nullable:true,event:h}},members:{_applyValid:function(j,k){j?this.removeState(f):this.addState(f);
}}});
})();
(function(){var p="showingPlaceholder",o="color",n="",m="none",l="qx.dynlocale",k="Boolean",j="qx.client",i="qx.event.type.Data",h="readonly",g="input",be="focusin",bd="visibility",bc="focusout",bb="changeLocale",ba="hidden",Y="on",X="absolute",W="readOnly",V="text",U="_applyTextAlign",w="px",x="RegExp",u=")",v="syncAppearance",s="changeValue",t="A",q="change",r="textAlign",A="focused",B="center",I="visible",G="disabled",M="url(",K="off",Q="String",O="resize",D="qx.ui.form.AbstractField",T="transparent",S="spellcheck",R="false",C="right",E="PositiveInteger",F="mshtml",H="abstract",J="block",L="webkit",N="_applyReadOnly",P="_applyPlaceholder",y="left",z="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:H,construct:function(bO){qx.ui.core.Widget.call(this);

if(bO!=null){this.setValue(bO);
}this.getContentElement().addListener(q,this._onChangeContent,this);
this.addListener(v,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(l,Y)){qx.locale.Manager.getInstance().addListener(bb,this._onChangeLocale,this);
}},events:{"input":i,"changeValue":i},properties:{textAlign:{check:[y,B,C],nullable:true,themeable:true,apply:U},readOnly:{check:k,apply:N,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:E,init:Infinity},liveUpdate:{check:k,init:false},placeholder:{check:Q,nullable:true,apply:P},filter:{check:x,nullable:true,init:null}},members:{__lT:true,__lU:null,__lV:null,__lW:null,getFocusElement:function(){var bA=this.getContentElement();

if(bA){return bA;
}},_createInputElement:function(){return new qx.html.Input(V);
},renderLayout:function(bF,top,bG,bH){var bI=this._updateInsets;
var bM=qx.ui.core.Widget.prototype.renderLayout.call(this,bF,top,bG,bH);
if(!bM){return;
}var bK=bM.size||bI;
var bN=w;

if(bK||bM.local||bM.margin){var bJ=this.getInsets();
var innerWidth=bG-bJ.left-bJ.right;
var innerHeight=bH-bJ.top-bJ.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bL=this.getContentElement();

if(bI){this.__ma().setStyles({"left":bJ.left+bN,"top":bJ.top+bN});
}
if(bK){this.__ma().setStyles({"width":innerWidth+bN,"height":innerHeight+bN});
bL.setStyles({"width":innerWidth+bN,"height":innerHeight+bN});
}},_createContentElement:function(){var bx=this._createInputElement();
bx.setStyles({"border":m,"padding":0,"margin":0,"display":J,"background":T,"outline":m,"appearance":m,"position":X,"autoComplete":K});
bx.setSelectable(this.getSelectable());
bx.setEnabled(this.getEnabled());
bx.addListener(g,this._onHtmlInput,this);
bx.setAttribute(S,R);
if(qx.core.Variant.isSet(j,L)){bx.setStyle(O,m);
}if(qx.core.Variant.isSet(j,F)){bx.setStyles({backgroundImage:M+qx.util.ResourceManager.getInstance().toUri(z)+u});
}return bx;
},_applyEnabled:function(br,bs){qx.ui.core.Widget.prototype._applyEnabled.call(this,br,bs);
this.getContentElement().setEnabled(br);

if(br){this._showPlaceholder();
}else{this._removePlaceholder();
}},__lX:{width:16,height:16},_getContentHint:function(){return {width:this.__lX.width*10,height:this.__lX.height||16};
},_applyFont:function(bt,bu){var bv;

if(bt){var bw=qx.theme.manager.Font.getInstance().resolve(bt);
bv=bw.getStyles();
}else{bv=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bv);
this.__ma().setStyles(bv);
if(bt){this.__lX=qx.bom.Label.getTextSize(t,bv);
}else{delete this.__lX;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(by,bz){if(by){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(by));
this.__ma().setStyle(o,qx.theme.manager.Color.getInstance().resolve(by));
}else{this.getContentElement().removeStyle(o);
this.__ma().removeStyle(o);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__lX;
},_onHtmlInput:function(e){var d=e.getData();
var c=true;
this.__lT=false;
if(this.getFilter()!=null){var f=n;
var a=d.search(this.getFilter());
var b=d;

while(a>=0){f=f+(b.charAt(a));
b=b.substring(a+1,b.length);
a=b.search(this.getFilter());
}
if(f!=d){c=false;
d=f;
this.getContentElement().setValue(d);
}}if(d.length>this.getMaxLength()){var c=false;
this.getContentElement().setValue(d.substr(0,this.getMaxLength()));
}if(c){this.fireDataEvent(g,d,this.__lW);
this.__lW=d;
if(this.getLiveUpdate()){this.__lY(d);
}}},__lY:function(bB){if(this.__lV!=bB){this.fireNonBubblingEvent(s,qx.event.type.Data,[bB,this.__lV]);
this.__lV=bB;
}},setValue:function(bl){if(bl===null){if(this.__lT){return bl;
}bl=n;
this.__lT=true;
}else{this.__lT=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bl)){var bn=this.getContentElement();

if(bl.length>this.getMaxLength()){bl=bl.substr(0,this.getMaxLength());
}
if(bn.getValue()!=bl){var bo=bn.getValue();
bn.setValue(bl);
var bm=this.__lT?null:bl;
this.__lV=bo;
this.__lY(bm);
}this._showPlaceholder();
return bl;
}throw new Error("Invalid value type: "+bl);
},getValue:function(){var bP=this.getContentElement().getValue();
return this.__lT?null:bP;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__lT=e.getData()===null;
this.__lY(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bj,bk){this.getContentElement().setTextSelection(bj,bk);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bg=this.getValue()||n;
var bf=this.getPlaceholder();

if(bf!=null&&bg==n&&!this.hasState(A)&&!this.hasState(G)){if(this.hasState(p)){this._syncPlaceholder();
}else{this.addState(p);
}}},_removePlaceholder:function(){if(this.hasState(p)){this.__ma().setStyle(bd,ba);
this.removeState(p);
}},_syncPlaceholder:function(){if(this.hasState(p)){this.__ma().setStyle(bd,I);
}},__ma:function(){if(this.__lU==null){this.__lU=new qx.html.Label();
this.__lU.setStyles({"visibility":ba,"zIndex":6,"position":X});
this.getContainerElement().add(this.__lU);
}return this.__lU;
},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bp,bq){this.__ma().setValue(bp);

if(bp!=null){this.addListener(be,this._removePlaceholder,this);
this.addListener(bc,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(be,this._removePlaceholder,this);
this.removeListener(bc,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bh,bi){this.getContentElement().setStyle(r,bh);
},_applyReadOnly:function(bC,bD){var bE=this.getContentElement();
bE.setAttribute(W,bC);

if(bC){this.addState(h);
this.setFocusable(false);
}else{this.removeState(h);
this.setFocusable(true);
}}},destruct:function(){this.__lU=null;

if(qx.core.Variant.isSet(l,Y)){qx.locale.Manager.getInstance().removeListener(bb,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(x,y,z){if(x===e||x===l){var A=x;
}else{A=c;
}qx.html.Element.call(this,A,y,z);
this.__mb=x;
},members:{__mb:null,__mc:null,__md:null,_createDomElement:function(){return qx.bom.Input.create(this.__mb);
},_applyProperty:function(name,r){qx.html.Element.prototype._applyProperty.call(this,name,r);
var s=this.getDomElement();

if(name===n){qx.bom.Input.setValue(s,r);
}else if(name===o){qx.bom.Input.setWrap(s,r);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(v){this.__md=v;

if(!v){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__mc?null:p});
}},"default":function(q){this.setAttribute(b,q===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(C){this.__mc=C;
this.setAttribute(i,C?j:k);
if(qx.core.Variant.isSet(m,g)){var D=this.__md?C?null:p:p;
this.setStyle(d,D);
}},"default":function(B){this.setAttribute(i,B?j:k);
}}),setValue:function(t){var u=this.getDomElement();

if(u){if(u.value!=t){qx.bom.Input.setValue(u,t);
}}else{this._setProperty(n,t);
}return this;
},getValue:function(){var w=this.getDomElement();

if(w){return qx.bom.Input.getValue(w);
}return this._getProperty(n)||h;
},setWrap:function(E){if(this.__mb===l){this._setProperty(o,E);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__mb===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
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
(function(){var n="",m="select",k="qx.client",j="soft",h="off",g="text",f="Unsupported input type.",e="nowrap",d="radio",c="textarea",A="auto",z="qx.debug",y="input",x="option",w="value",v="number",u="qx.bom.Input",t="normal",s="mshtml",r="wrap",p="checkbox",q="select-one",o="on";
qx.Class.define(u,{statics:{__mk:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(Y,ba,bb){if(qx.core.Variant.isSet(z,o)){qx.core.Assert.assertKeyInMap(Y,this.__mk,f);
}var ba=ba?qx.lang.Object.clone(ba):{};
var bc;

if(Y===c||Y===m){bc=Y;
}else{bc=y;
ba.type=Y;
}return qx.bom.Element.create(bc,ba,bb);
},setValue:function(B,C){var H=B.nodeName.toLowerCase();
var E=B.type;
var Array=qx.lang.Array;
var I=qx.lang.Type;

if(typeof C===v){C+=n;
}
if((E===p||E===d)){if(I.isArray(C)){B.checked=Array.contains(C,B.value);
}else{B.checked=B.value==C;
}}else if(H===m){var D=I.isArray(C);
var J=B.options;
var F,G;

for(var i=0,l=J.length;i<l;i++){F=J[i];
G=F.getAttribute(w);

if(G==null){G=F.text;
}F.selected=D?Array.contains(C,G):C==G;
}
if(D&&C.length==0){B.selectedIndex=-1;
}}else if(E===g&&qx.core.Variant.isSet(k,s)){B.$$inValueSet=true;
B.value=C;
B.$$inValueSet=null;
}else{B.value=C;
}},getValue:function(K){var Q=K.nodeName.toLowerCase();

if(Q===x){return (K.attributes.value||{}).specified?K.value:K.text;
}
if(Q===m){var L=K.selectedIndex;
if(L<0){return null;
}var R=[];
var T=K.options;
var S=K.type==q;
var P=qx.bom.Input;
var O;
for(var i=S?L:0,N=S?L+1:T.length;i<N;i++){var M=T[i];

if(M.selected){O=P.getValue(M);
if(S){return O;
}R.push(O);
}}return R;
}else{return (K.value||n).replace(/\r/g,n);
}},setWrap:qx.core.Variant.select(k,{"mshtml":function(bd,be){bd.wrap=be?j:h;
},"gecko|webkit":function(U,V){var X=V?j:h;
var W=V?n:A;
U.setAttribute(r,X);
U.style.overflow=W;
},"default":function(a,b){a.style.whiteSpace=b?t:e;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(c){return arguments.length==1;
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__je",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__je:null,getSelection:function(){var g=this.__jf().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__jf().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__jf().resetSelected();
},isSelected:function(n){return this.__jf().isSelected(n);
},isSelectionEmpty:function(){return this.__jf().isSelectionEmpty();
},getSelectables:function(l){return this.__jf().getSelectables(l);
},_onChangeSelected:function(e){var k=e.getData();
var j=e.getOldData();
k==null?k=[]:k=[k];
j==null?j=[]:j=[j];
this.fireDataEvent(d,k,j);
},__jf:function(){if(this.__je==null){var i=this;
this.__je=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(m){if(i._isItemSelectable){return i._isItemSelectable(m);
}else{return m.isVisible();
}}});
this.__je.addListener(c,this._onChangeSelected,this);
}this.__je.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__je;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__re,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(j){var m=this._getChildren();
var k=this.getSelection()[0];
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];

if(n!=k){if(j){m[i].exclude();
}else{m[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(h){return true;
},__re:function(e){var z=e.getOldData()[0];
var A=e.getData()[0];

if(z){if(this.isDynamic()){z.exclude();
}else{z.hide();
}}
if(A){A.show();
}},add:function(f){this._add(f);
var g=this.getSelection()[0];

if(!g){this.setSelection([f]);
}else if(g!==f){if(this.isDynamic()){f.exclude();
}else{f.hide();
}}},remove:function(o){this._remove(o);

if(this.getSelection()[0]===o){var p=this._getChildren()[0];

if(p){this.setSelection([p]);
}else{this.resetSelection();
}}},indexOf:function(u){return this._indexOf(u);
},getChildren:function(){return this._getChildren();
},previous:function(){var x=this.getSelection()[0];
var v=this._indexOf(x)-1;
var y=this._getChildren();

if(v<0){v=y.length-1;
}var w=y[v];
this.setSelection([w]);
},next:function(){var r=this.getSelection()[0];
var q=this._indexOf(r)+1;
var s=this._getChildren();
var t=s[q]||s[0];
this.setSelection([t]);
}}});
})();
(function(){var l="__jn",k="__jo",j="Boolean",h="qx.ui.core.SingleSelectionManager",g="__jm",f="qx.debug",e="Invalid selectionProvider!",d="changeSelected",c="on",b="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);

if(qx.core.Variant.isSet(f,c)){qx.core.Assert.assertInterface(n,qx.ui.core.ISingleSelectionProvider,e);
}this.__jm=n;
},events:{"changeSelected":b},properties:{allowEmptySelection:{check:j,init:true,apply:k}},members:{__jn:null,__jm:null,getSelected:function(){return this.__jn;
},setSelected:function(a){if(!this.__jq(a)){throw new Error("Could not select "+a+", because it is not a child element!");
}this.__jp(a);
},resetSelected:function(){this.__jp(null);
},isSelected:function(m){if(!this.__jq(m)){throw new Error("Could not check if "+m+" is selected,"+" because it is not a child element!");
}return this.__jn===m;
},isSelectionEmpty:function(){return this.__jn==null;
},getSelectables:function(s){var t=this.__jm.getItems();
var u=[];

for(var i=0;i<t.length;i++){if(this.__jm.isItemSelectable(t[i])){u.push(t[i]);
}}if(!s){for(var i=u.length-1;i>=0;i--){if(!u[i].getEnabled()){u.splice(i,1);
}}}return u;
},__jo:function(x,y){if(!x){this.__jp(this.__jn);
}},__jp:function(o){var r=this.__jn;
var q=o;

if(q!=null&&r===q){return;
}
if(!this.isAllowEmptySelection()&&q==null){var p=this.getSelectables(true)[0];

if(p){q=p;
}}this.__jn=q;
this.fireDataEvent(d,q,r);
},__jq:function(v){var w=this.__jm.getItems();

for(var i=0;i<w.length;i++){if(w[i]===v){return true;
}}return false;
}},destruct:function(){if(this.__jm.toHashCode){this._disposeObjects(g);
}else{this.__jm=null;
}this._disposeObjects(l);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var o="",n='#',m="String",l="request",k="mshtml",j="changeTitle",i="abstract",h="_applyState",g="qx.client",f="changeState",c="qx.bom.History",e="_applyTitle",d="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,type:i,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(n)[0]+n;
this.__sb={};
this._setInitialState();
},events:{"request":d},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(g,k)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:m,event:j,nullable:true,apply:e},state:{check:m,event:f,nullable:true,apply:h}},members:{__sb:null,_applyState:function(x,y){this._writeState(x);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(u){if(qx.lang.Type.isString(u)){return encodeURIComponent(u);
}return o;
},_decode:function(s){if(qx.lang.Type.isString(s)){return decodeURIComponent(s);
}return o;
},_applyTitle:function(t){if(t!=null){document.title=t||o;
}},addToHistory:function(a,b){if(!qx.lang.Type.isString(a)){a=a+o;
}
if(qx.lang.Type.isString(b)){this.setTitle(b);
this.__sb[a]=b;
}
if(this.getState()!==a){this._writeState(a);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(v){this.setState(v);
this.fireDataEvent(l,v);

if(this.__sb[v]!=null){this.setTitle(this.__sb[v]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(p){var q=this._baseUrl+(p||o);
var r=window.location;

if(q!=r.href){r.href=q;
}},_getHash:function(){var w=/#(.*)$/.exec(window.location.href);
return w&&w[1]?w[1]:o;
}},destruct:function(){this.__sb=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__sd();
},members:{__sc:null,__sd:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__sc=qx.lang.Function.bind(this.__sf,this);
qx.bom.Event.addNativeListener(window,d,this.__sc);
}else{qx.event.Idle.getInstance().addListener(c,this.__sf,this);
}},__se:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__sc);
}else{qx.event.Idle.getInstance().removeListener(c,this.__sf,this);
}},__sf:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(e){qx.event.Timer.once(function(){this._setHash(this._encode(e));
},this,0);
},"default":function(g){this._setHash(this._encode(g));
}})},destruct:function(){this.__se();
}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__sj();
},members:{__sg:null,__sh:false,__si:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__si=this._getHash();
},_setHash:function(p){qx.bom.History.prototype._setHash.call(this,p);
this.__si=this._encode(p);
},_readState:function(){if(!this.__sh){return this._decode(this._getHash());
}var y=this.__sg.contentWindow.document;
var z=y.getElementById(i);
return z?this._decode(z.innerText):l;
},_writeState:function(A){var A=this._encode(A);
this._setHash(A);
this.__si=A;

try{var B=this.__sg.contentWindow.document;
B.open();
B.write(h+A+g);
B.close();
}catch(w){}},__sj:function(){this.__sn(function(){qx.event.Idle.getInstance().addListener(o,this.__sk,this);
});
},__sk:function(e){var s=null;
var r=this._getHash();

if(!this.__sm(r)){s=this.__sl(r);
}else{s=this._readState();
}
if(qx.lang.Type.isString(s)&&s!=this.getState()){this._onHistoryLoad(s);
}},__sl:function(a){a=this._decode(a);
this._writeState(a);
return a;
},__sm:function(q){return qx.lang.Type.isString(q)&&q==this.__si;
},__sn:function(x){this.__sg=this.__so();
document.body.appendChild(this.__sg);
this.__sp(function(){this._writeState(this.getState());

if(x){x.call(this);
}},this);
},__so:function(){var C=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
C.style.visibility=f;
C.style.position=c;
C.style.left=n;
C.style.top=n;
return C;
},__sp:function(t,u,v){if(typeof v===d){v=0;
}
if(!this.__sg.contentWindow||!this.__sg.contentWindow.document){if(v>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__sp(t,u,++v);
},this,10);
return;
}this.__sh=true;
t.call(u||window);
}},destruct:function(){this.__sg=null;
qx.event.Idle.getInstance().addListener(o,this.__sk,this);
}});
}})();
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
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(q);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(p){this._shortcut.setEnabled(p);
},_applyShortcut:function(s){this._shortcut.setShortcut(s);
},execute:function(r){this.fireDataEvent(n,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bg){qx.core.Object.call(this);
this.__wD={};
this.__wE=null;

if(bg!=null){this.setShortcut(bg);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__wD:g,__wE:g,execute:function(bi){this.fireDataEvent(L,bi);
},__wF:function(event){if(this.getEnabled()&&this.__wH(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__wG:function(event){if(this.getEnabled()&&this.__wH(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bj,bk){if(bj){qx.event.Registration.addListener(document.documentElement,h,this.__wF,this);
qx.event.Registration.addListener(document.documentElement,d,this.__wG,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__wF,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__wG,this);
}},_applyShortcut:function(ba,bb){if(ba){if(ba.search(/[\s]+/)!=-1){var be=y;
this.error(be);
throw new Error(be);
}this.__wD={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__wE=null;
var bc;
var a=[];

while(ba.length>0&&bc!=-1){bc=ba.search(/[-+]+/);
a.push((ba.length==1||bc==-1)?ba:ba.substring(0,bc));
ba=ba.substring(bc+1);
}var bd=a.length;

for(var i=0;i<bd;i++){var bf=this.__wJ(a[i]);

switch(bf){case f:case u:case K:case C:this.__wD[bf]=true;
break;
case m:var be=F+a[i];
this.error(be);
throw be;
default:if(this.__wE){var be=r;
this.error(be);
throw be;
}this.__wE=bf;
}}}return true;
},__wH:function(e){var bh=this.__wE;

if(!bh){return ;
}if((!this.__wD.Shift&&e.isShiftPressed())||(this.__wD.Shift&&!e.isShiftPressed())||(!this.__wD.Control&&e.isCtrlPressed())||(this.__wD.Control&&!e.isCtrlPressed())||(!this.__wD.Meta&&e.isMetaPressed())||(this.__wD.Meta&&!e.isMetaPressed())||(!this.__wD.Alt&&e.isAltPressed())||(this.__wD.Alt&&!e.isAltPressed())){return false;
}
if(bh==e.getKeyIdentifier()){return true;
}return false;
},__wI:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__wJ:function(T){var U=qx.event.handler.Keyboard;
var V=m;

if(U.isValidKeyIdentifier(T)){return T;
}
if(T.length==1&&T>=G&&T<=x){return T.toUpperCase();
}T=T.toLowerCase();
var V=this.__wI[T]||qx.lang.String.firstUp(T);

if(U.isValidKeyIdentifier(V)){return V;
}else{return m;
}},toString:function(){var Y=this.__wE;
var X=[];

for(var W in this.__wD){if(this.__wD[W]){X.push(qx.locale.Key.getKeyName(j,W));
}}
if(Y){X.push(qx.locale.Key.getKeyName(j,Y));
}return X.join(k);
}},destruct:function(){this.setEnabled(false);
this.__wD=this.__wE=null;
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
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__ox:false,_setAllowMenuOpenHover:function(t){this.__ox=t;
},_isAllowMenuOpenHover:function(){return this.__ox;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var s=new qx.ui.core.Spacer;
this._add(s,{flex:1});
return s;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}else if(r instanceof qx.ui.toolbar.Part){p.push.apply(p,r.getMenuButtons());
}}return p;
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
(function(){var o="execute",n="toolTipText",m="icon",l="label",k="qx.ui.core.MExecutable",j="value",h="qx.event.type.Event",g="_applyCommand",f="enabled",d="menu",b="changeCommand",c="qx.ui.core.Command";
qx.Mixin.define(k,{events:{"execute":h},properties:{command:{check:c,apply:g,event:b,nullable:true}},members:{__iB:null,__iC:false,__iD:null,_bindableProperties:[f,l,m,n,j,d],execute:function(){var a=this.getCommand();

if(a){if(this.__iC){this.__iC=false;
}else{this.__iC=true;
a.execute(this);
}}this.fireEvent(o);
},__iE:function(e){if(this.__iC){this.__iC=false;
return;
}this.__iC=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__iD);
}
if(p!=null){this.__iD=p.addListener(o,this.__iE,this);
}var t=this.__iB;

if(t==null){this.__iB=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__iB=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){qx.ui.basic.Atom.call(this,r,s);

if(t!=null){this.setCommand(t);
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
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
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
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="submenu",h="Enter",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",c="abandoned",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(n,o,p){qx.ui.form.Button.call(this,n,o);
if(p!=null){this.setMenu(p);
}},properties:{menu:{check:j,nullable:true,apply:b,event:f}},members:{_applyMenu:function(q,r){if(r){r.removeListener(k,this._onMenuChange,this);
r.resetOpener();
}
if(q){q.addListener(k,this._onMenuChange,this);
q.setOpener(this);
q.removeState(i);
q.removeState(g);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.setOpener(this);
t.open();
if(s){var u=t.getSelectables()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var w=this.getMenu();

if(w.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case h:this.removeState(c);
this.addState(m);
var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
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
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var a=this.getMenu();

if(a&&a.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var y="keypress",x="qx.debug",w="interval",v="keydown",u="on",t="mousedown",s="keyup",r="blur",q="Enter",p="__nw",h="__nv",o="__nx",l="Up",g="Escape",f="qx.ui.menu.Manager",k="Left",j="Down",m="Right",d="singleton",n="Space";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nv=[];
var I=document.body;
var J=qx.event.Registration;
J.addListener(window.document.documentElement,t,this._onMouseDown,this,true);
J.addListener(I,v,this._onKeyUpDown,this,true);
J.addListener(I,s,this._onKeyUpDown,this,true);
J.addListener(I,y,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,r,this.hideAll,this);
this.__nw=new qx.event.Timer;
this.__nw.addListener(w,this._onOpenInterval,this);
this.__nx=new qx.event.Timer;
this.__nx.addListener(w,this._onCloseInterval,this);
},members:{__ny:null,__nz:null,__nw:null,__nx:null,__nv:null,_getChild:function(z,A,B,C){var D=z.getChildren();
var length=D.length;
var E;

for(var i=A;i<length&&i>=0;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}
if(C){i=i==length?0:length-1;

for(;i!=A;i+=B){E=D[i];

if(E.isEnabled()&&!E.isAnonymous()){return E;
}}}return null;
},_isInMenu:function(b){while(b){if(b instanceof qx.ui.menu.Menu){return true;
}b=b.getLayoutParent();
}return false;
},_getMenuButton:function(c){while(c){if(c instanceof qx.ui.menu.AbstractButton){return c;
}c=c.getLayoutParent();
}return null;
},add:function(bp){if(qx.core.Variant.isSet(x,u)){if(!(bp instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bp);
}}var bq=this.__nv;
bq.push(bp);
bp.setZIndex(1e6+bq.length);
},remove:function(bw){if(qx.core.Variant.isSet(x,u)){if(!(bw instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bw);
}}var bx=this.__nv;

if(bx){qx.lang.Array.remove(bx,bw);
}},hideAll:function(){var bo=this.__nv;

if(bo){for(var i=bo.length-1;i>=0;i--){bo[i].exclude();
}}},getActiveMenu:function(){var br=this.__nv;
return br.length>0?br[br.length-1]:null;
},scheduleOpen:function(by){this.cancelClose(by);
if(by.isVisible()){if(this.__ny){this.cancelOpen(this.__ny);
}}else if(this.__ny!=by){this.__ny=by;
this.__nw.restartWith(by.getOpenInterval());
}},scheduleClose:function(bC){this.cancelOpen(bC);
if(!bC.isVisible()){if(this.__nz){this.cancelClose(this.__nz);
}}else if(this.__nz!=bC){this.__nz=bC;
this.__nx.restartWith(bC.getCloseInterval());
}},cancelOpen:function(a){if(this.__ny==a){this.__nw.stop();
this.__ny=null;
}},cancelClose:function(P){if(this.__nz==P){this.__nx.stop();
this.__nz=null;
}},_onOpenInterval:function(e){this.__nw.stop();
this.__ny.open();
this.__ny=null;
},_onCloseInterval:function(e){this.__nx.stop();
this.__nz.exclude();
this.__nz=null;
},_onMouseDown:function(e){var H=e.getTarget();
H=qx.ui.core.Widget.getWidgetByElement(H);
if(H==null){this.hideAll();
return;
}if(H.getMenu&&H.getMenu()&&H.getMenu().isVisible()){return;
}if(this.__nv.length>0&&!this._isInMenu(H)){this.hideAll();
}},__nA:{"Enter":1,"Space":1},__nB:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bh=this.getActiveMenu();

if(!bh){return;
}var bi=e.getKeyIdentifier();

if(this.__nB[bi]||(this.__nA[bi]&&bh.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var K=this.getActiveMenu();

if(!K){return;
}var L=e.getKeyIdentifier();
var N=this.__nB[L];
var M=this.__nA[L];

if(N){switch(L){case l:this._onKeyPressUp(K);
break;
case j:this._onKeyPressDown(K);
break;
case k:this._onKeyPressLeft(K);
break;
case m:this._onKeyPressRight(K);
break;
case g:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(M){var O=K.getSelectedButton();

if(O){switch(L){case q:this._onKeyPressEnter(K,O,e);
break;
case n:this._onKeyPressSpace(K,O,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bj){var bk=bj.getSelectedButton();
var bl=bj.getChildren();
var bn=bk?bj.indexOf(bk)-1:bl.length-1;
var bm=this._getChild(bj,bn,-1,true);
if(bm){bj.setSelectedButton(bm);
}else{bj.resetSelectedButton();
}},_onKeyPressDown:function(bs){var bt=bs.getSelectedButton();
var bv=bt?bs.indexOf(bt)+1:0;
var bu=this._getChild(bs,bv,1,true);
if(bu){bs.setSelectedButton(bu);
}else{bs.resetSelectedButton();
}},_onKeyPressLeft:function(Q){var V=Q.getOpener();

if(!V){return;
}if(V instanceof qx.ui.menu.Button){var S=V.getLayoutParent();
S.resetOpenedButton();
S.setSelectedButton(V);
}else if(V instanceof qx.ui.menubar.Button){var U=V.getMenuBar().getMenuButtons();
var R=U.indexOf(V);
if(R===-1){return;
}var W=null;
var length=U.length;

for(var i=1;i<=length;i++){var T=U[(R-i+length)%length];

if(T.isEnabled()){W=T;
break;
}}
if(W&&W!=V){W.open(true);
}}},_onKeyPressRight:function(X){var ba=X.getSelectedButton();
if(ba){var Y=ba.getMenu();

if(Y){X.setOpenedButton(ba);
var bg=this._getChild(Y,0,1);

if(bg){Y.setSelectedButton(bg);
}return;
}}else if(!X.getOpenedButton()){var bg=this._getChild(X,0,1);

if(bg){X.setSelectedButton(bg);

if(bg.getMenu()){X.setOpenedButton(bg);
}return;
}}var be=X.getOpener();
if(be instanceof qx.ui.menu.Button&&ba){while(be){be=be.getLayoutParent();

if(be instanceof qx.ui.menu.Menu){be=be.getOpener();

if(be instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!be){return;
}}if(be instanceof qx.ui.menubar.Button){var bd=be.getMenuBar().getMenuButtons();
var bb=bd.indexOf(be);
if(bb===-1){return;
}var bf=null;
var length=bd.length;

for(var i=1;i<=length;i++){var bc=bd[(bb+i)%length];

if(bc.isEnabled()){bf=bc;
break;
}}
if(bf&&bf!=be){bf.open(true);
}}},_onKeyPressEnter:function(bz,bA,e){if(bA.hasListener(y)){var bB=e.clone();
bB.setBubbles(false);
bB.setTarget(bA);
bA.dispatchEvent(bB);
}this.hideAll();
},_onKeyPressSpace:function(bD,bE,e){if(bE.hasListener(y)){var bF=e.clone();
bF.setBubbles(false);
bF.setTarget(bE);
bE.dispatchEvent(bF);
}}},destruct:function(){var G=qx.event.Registration;
var F=document.body;
G.removeListener(window.document.documentElement,t,this._onMouseDown,this,true);
G.removeListener(F,v,this._onKeyUpDown,this,true);
G.removeListener(F,s,this._onKeyUpDown,this,true);
G.removeListener(F,y,this._onKeyPress,this,true);
this._disposeObjects(p,o);
this._disposeArray(h);
}});
})();
(function(){var m="indexOf",l="addAfter",k="add",j="addBefore",i="_",h="addAt",g="hasChildren",f="removeAt",e="removeAll",d="getChildren",b="remove",c="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(c,{members:{__nC:function(A,B,C,D){var E=this.getChildrenContainer();

if(E===this){A=i+A;
}return (E[A])(B,C,D);
},getChildren:function(){return this.__nC(d);
},hasChildren:function(){return this.__nC(g);
},add:function(r,s){return this.__nC(k,r,s);
},remove:function(a){return this.__nC(b,a);
},removeAll:function(){return this.__nC(e);
},indexOf:function(t){return this.__nC(m,t);
},addAt:function(u,v,w){this.__nC(h,u,v,w);
},addBefore:function(o,p,q){this.__nC(j,o,p,q);
},addAfter:function(x,y,z){this.__nC(l,x,y,z);
},removeAt:function(n){this.__nC(f,n);
}}});
})();
(function(){var S="slidebar",R="Integer",Q="resize",P="qx.ui.core.Widget",O="selected",N="visible",M="Boolean",L="mouseout",K="excluded",J="menu",bi="_applySelectedButton",bh="_applyOpenInterval",bg="_applySpacingY",bf="_blocker",be="_applyCloseInterval",bd="_applyBlockerColor",bc="_applyIconColumnWidth",bb="mouseover",ba="qx.ui.menu.Menu",Y="Color",W="Number",X="_applyOpenedButton",U="_applySpacingX",V="_applyBlockerOpacity",T="_applyArrowColumnWidth";
qx.Class.define(ba,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var br=this.getApplicationRoot();
br.add(this);
this.addListener(bb,this._onMouseOver);
this.addListener(L,this._onMouseOut);
this.addListener(Q,this._onResize,this);
br.addListener(Q,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(br);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:J},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:K},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:R,apply:U,init:0,themeable:true},spacingY:{check:R,apply:bg,init:0,themeable:true},iconColumnWidth:{check:R,init:0,themeable:true,apply:bc},arrowColumnWidth:{check:R,init:0,themeable:true,apply:T},blockerColor:{check:Y,init:null,nullable:true,apply:bd,themeable:true},blockerOpacity:{check:W,init:1,apply:V,themeable:true},selectedButton:{check:P,nullable:true,apply:bi},openedButton:{check:P,nullable:true,apply:X},opener:{check:P,nullable:true},openInterval:{check:R,themeable:true,init:250,apply:bh},closeInterval:{check:R,themeable:true,init:250,apply:be},blockBackground:{check:M,themeable:true,init:false}},members:{__nD:null,__nE:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__nG();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__nG();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(g){this.placeToPoint(g);
this.__nG();
this.show();
this._placementTarget=g;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var u=[];
var v=this.getChildren();

for(var i=0;i<v.length;i++){if(v[i].isEnabled()){u.push(v[i]);
}}return u;
},_applyIconColumnWidth:function(H,I){this._getMenuLayout().setIconColumnWidth(H);
},_applyArrowColumnWidth:function(bk,bl){this._getMenuLayout().setArrowColumnWidth(bk);
},_applySpacingX:function(B,C){this._getMenuLayout().setColumnSpacing(B);
},_applySpacingY:function(d,f){this._getMenuLayout().setSpacing(d);
},_applyVisibility:function(o,p){qx.ui.core.Widget.prototype._applyVisibility.call(this,o,p);
var q=qx.ui.menu.Manager.getInstance();

if(o===N){q.add(this);
var r=this.getParentMenu();

if(r){r.setOpenedButton(this.getOpener());
}}else if(p===N){q.remove(this);
var r=this.getParentMenu();

if(r&&r.getOpenedButton()==this.getOpener()){r.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__nF();
},__nF:function(){if(this.isVisible()){if(this.getBlockBackground()){var G=this.getZIndex();
this._blocker.blockContent(G-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var A=this.getOpener();

if(!A||!(A instanceof qx.ui.menu.AbstractButton)){return null;
}
while(A&&!(A instanceof qx.ui.menu.Menu)){A=A.getLayoutParent();
}return A;
},_applySelectedButton:function(y,z){if(z){z.removeState(O);
}
if(y){y.addState(O);
}},_applyOpenedButton:function(b,c){if(c){c.getMenu().exclude();
}
if(b){b.getMenu().open();
}},_applyBlockerColor:function(w,x){this._blocker.setColor(w);
},_applyBlockerOpacity:function(h,j){this._blocker.setOpacity(h);
},getChildrenContainer:function(){return this.getChildControl(S,true)||this;
},_createChildControlImpl:function(bm){var bn;

switch(bm){case S:var bn=new qx.ui.menu.MenuSlideBar();
var bp=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bo=bn.getLayout();
bn.setLayout(bp);
bo.dispose();
var bq=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bq.length;i++){bn.add(bq[i]);
}this.removeListener(Q,this._onResize,this);
bn.getChildrenContainer().addListener(Q,this._onResize,this);
this._add(bn);
break;
}return bn||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bm);
},_getMenuLayout:function(){if(this.hasChildControl(S)){return this.getChildControl(S).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(S)){return this.getChildControl(S).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__nG:function(){var E=this._getMenuBounds();

if(!E){this.addListenerOnce(Q,this.__nG,this);
return;
}var D=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var F=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(E.height+top);
this.moveTo(F,0);
});
}else if(top+E.height>D){this._assertSlideBar(function(){this.setHeight(D-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bj){if(this.hasChildControl(S)){return bj.call(this);
}this.__nE=bj;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(S);

if(this.__nE){this.__nE.call(this);
delete this.__nE;
}},_onResize:function(){if(this.isVisible()){var a=this._placementTarget;

if(!a){return;
}else if(a instanceof qx.ui.core.Widget){this.placeToWidget(a);
}else if(a.top!==undefined){this.placeToPoint(a);
}else{throw new Error("Unknown target: "+a);
}this.__nG();
}},_onMouseOver:function(e){var l=qx.ui.menu.Manager.getInstance();
l.cancelClose(this);
var m=e.getTarget();

if(m.isEnabled()&&m instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(m);
var k=m.getMenu&&m.getMenu();

if(k){k.setOpener(m);
l.scheduleOpen(k);
this.__nD=k;
}else{var n=this.getOpenedButton();

if(n){l.scheduleClose(n.getMenu());
}
if(this.__nD){l.cancelOpen(this.__nD);
this.__nD=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var s=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var t=this.getOpenedButton();
t?this.setSelectedButton(t):this.resetSelectedButton();
if(t){s.cancelClose(t.getMenu());
}if(this.__nD){s.cancelOpen(this.__nD);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(Q,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bf);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__nH:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__nH=[0,0,0,0];
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
},getColumnSizes:function(){return this.__nH||null;
}},destruct:function(){this.__nH=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(E){var F;

switch(E){case t:F=new qx.ui.basic.Image;
F.setAnonymous(true);
this._add(F,{column:0});
break;
case s:F=new qx.ui.basic.Label;
F.setAnonymous(true);
this._add(F,{column:1});
break;
case q:F=new qx.ui.basic.Label;
F.setAnonymous(true);
this._add(F,{column:2});
break;
case r:F=new qx.ui.basic.Image;
F.setAnonymous(true);
this._add(F,{column:3});
break;
}return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_forwardStates:{selected:1},getChildrenSizes:function(){var G=0,H=0,I=0,M=0;

if(this._isChildControlVisible(t)){var N=this.getChildControl(t);
G=N.getMarginLeft()+N.getSizeHint().width+N.getMarginRight();
}
if(this._isChildControlVisible(s)){var K=this.getChildControl(s);
H=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(q)){var J=this.getChildControl(q);
I=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(r)){var L=this.getChildControl(r);
M=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}return [G,H,I,M];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var y=e.getData();

if(qx.core.Variant.isSet(o,m)){var w=e.getOldData();

if(!w){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!y){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var x=y!=null?y.toString():h;
this.getChildControl(q).setValue(x);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var z=this.getCommand();

if(z!=null){this.getChildControl(q).setValue(z.toString());
}},"off":null}),_applyIcon:function(u,v){if(u){this._showChildControl(t).setSource(u);
}else{this._excludeChildControl(t);
}},_applyLabel:function(A,B){if(A){this._showChildControl(s).setValue(A);
}else{this._excludeChildControl(s);
}},_applyMenu:function(C,D){if(D){D.resetOpener();
D.removeState(n);
}
if(C){this._showChildControl(r);
C.setOpener(this);
C.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(x,name,y){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(h,j){var u=this._getLayoutChildren();
var t;
var m;
var n=[];

for(var i=0,l=u.length;i<l;i++){t=u[i];
m=t.getLayoutProperties().column;
n[m]=t;
}var s=this.__ov(u[0]);
var v=s.getColumnSizes();
var p=s.getSpacingX();
var o=qx.lang.Array.sum(v)+p*(v.length-1);

if(o<h){v[1]+=h-o;
}var w=0,top=0;
var q=qx.ui.layout.Util;

for(var i=0,l=v.length;i<l;i++){t=n[i];

if(t){var k=t.getSizeHint();
var top=q.computeVerticalAlignOffset(t.getAlignY()||c,k.height,j,0,0);
var r=q.computeHorizontalAlignOffset(t.getAlignX()||d,k.width,v[i],t.getMarginLeft(),t.getMarginRight());
t.renderLayout(w+r,top,k.width,k.height);
}w+=v[i]+p;
}},__ov:function(D){while(!(D instanceof qx.ui.menu.Menu)){D=D.getLayoutParent();
}return D;
},_computeSizeHint:function(){var B=this._getLayoutChildren();
var A=0;
var C=0;

for(var i=0,l=B.length;i<l;i++){var z=B[i].getSizeHint();
C+=z.width;
A=Math.max(A,z.height);
}return {width:C,height:A};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(G){qx.ui.core.Widget.call(this);
var H=this.getChildControl(r);
this._add(H,{flex:1});

if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(w){var x;

switch(w){case o:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case p:x=new qx.ui.form.RepeatButton;
x.addListener(m,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case n:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(x);
break;
case r:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(g,this._onResize,this);
x.addListener(f,this._onScroll,this);
x.addListener(k,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollByX(a);
}else{b.scrollByY(a);
}},scrollTo:function(I){var J=this.getChildControl(r);

if(this.getOrientation()===s){J.scrollToX(I);
}else{J.scrollToY(I);
}},_applyOrientation:function(B,C){var F=[this.getLayout(),this._getLayout()];
var E=this.getChildControl(o);
var D=this.getChildControl(p);
if(C==q){E.removeState(q);
D.removeState(q);
E.addState(s);
D.addState(s);
}else if(C==s){E.removeState(s);
D.removeState(s);
E.addState(q);
D.addState(q);
}
if(B==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(F[0]){F[0].dispose();
}
if(F[1]){F[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var y=this.getInnerSize();
var A=content.getBounds();
var z=(this.getOrientation()===s)?A.width>y.width:A.height>y.height;

if(z){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var u=this.getChildControl(r);

if(this.getOrientation()===s){var t=u.getScrollX();
var v=u.getScrollMaxX();
}else{var t=u.getScrollY();
var v=u.getScrollMaxY();
}this.getChildControl(p).setEnabled(t>0);
this.getChildControl(o).setEnabled(t<v);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="execute",b="__lk";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__lk=new qx.event.AcceleratingTimer();
this.__lk.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__ll:null,__lk:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lm();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__ll){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ln();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__ln();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lk.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lk.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lm();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__ll){this.execute();
}}this.__ln();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__ll){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ln();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lm();
}},_onInterval:function(e){this.__ll=true;
this.fireEvent(c);
},__lm:function(){this.fireEvent(g);
this.__ll=false;
this.__lk.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ln:function(){this.fireEvent(d);
this.__lk.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var e="Integer",d="interval",c="__lo",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lo=new qx.event.Timer(this.getInterval());
this.__lo.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lo:null,__lp:null,start:function(){this.__lo.setInterval(this.getFirstInterval());
this.__lo.start();
},stop:function(){this.__lo.stop();
this.__lp=null;
},_onInterval:function(){this.__lo.stop();

if(this.__lp==null){this.__lp=this.getInterval();
}this.__lp=Math.max(this.getMinimum(),this.__lp-this.getDecrease());
this.__lo.setInterval(this.__lp);
this.__lo.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var C="resize",B="scrollY",A="update",z="scrollX",w="_applyScrollX",v="_applyScrollY",u="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",t="appear",s="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",r="qx.event.type.Event",p="qx.ui.core.scroll.ScrollPane",q="scroll";
qx.Class.define(p,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(C,this._onUpdate);
var H=this.getContentElement();
H.addListener(q,this._onScroll,this);
H.addListener(t,this._onAppear,this);
},events:{update:r},properties:{scrollX:{check:u,apply:w,event:z,init:0},scrollY:{check:s,apply:v,event:B,init:0}},members:{add:function(D){var E=this._getChildren()[0];

if(E){this._remove(E);
E.removeListener(C,this._onUpdate,this);
}
if(D){this._add(D);
D.addListener(C,this._onUpdate,this);
}},remove:function(G){if(G){this._remove(G);
G.removeListener(C,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(A);
},_onScroll:function(e){var g=this.getContentElement();
this.setScrollX(g.getScrollX());
this.setScrollY(g.getScrollY());
},_onAppear:function(e){var L=this.getContentElement();
var I=this.getScrollX();
var J=L.getScrollX();

if(I!=J){L.scrollToX(I);
}var M=this.getScrollY();
var K=L.getScrollY();

if(M!=K){L.scrollToY(M);
}},getItemTop:function(N){var top=0;

do{top+=N.getBounds().top;
N=N.getLayoutParent();
}while(N&&N!==this);
return top;
},getItemBottom:function(F){return this.getItemTop(F)+F.getBounds().height;
},getItemLeft:function(b){var c=0;
var parent;

do{c+=b.getBounds().left;
parent=b.getLayoutParent();

if(parent){c+=parent.getInsets().left;
}b=parent;
}while(b&&b!==this);
return c;
},getItemRight:function(a){return this.getItemLeft(a)+a.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var f=this.getInnerSize();
var d=this.getScrollSize();

if(f&&d){return Math.max(0,d.width-f.width);
}return 0;
},getScrollMaxY:function(){var o=this.getInnerSize();
var n=this.getScrollSize();

if(o&&n){return Math.max(0,n.height-o.height);
}return 0;
},scrollToX:function(j){var k=this.getScrollMaxX();

if(j<0){j=0;
}else if(j>k){j=k;
}this.setScrollX(j);
},scrollToY:function(l){var m=this.getScrollMaxY();

if(l<0){l=0;
}else if(l>m){l=m;
}this.setScrollY(l);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(h){this.getContentElement().scrollToX(h);
},_applyScrollY:function(i){this.getContentElement().scrollToY(i);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="__ow",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__ow=new qx.event.AcceleratingTimer();
this.__ow.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__ow:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__ow.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__ow.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__ow.stop();
}}},destruct:function(){this._disposeObjects(b);
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
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(q){var r;

switch(q){case k:r=new qx.ui.basic.Image();
r.setAlignY(g);
this._add(r);
break;
case m:r=new qx.ui.toolbar.PartContainer;
this._add(r);
break;
}return r||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,q);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(n,o){var p=this.getChildControl(m).getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
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
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="__jg",c="changeSelection",b="on",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__jg=new qx.data.Array();
this.__jg.addListener(f,this.__jj,this);
this.addListener(c,this.__ji,this);
},events:{changeModelSelection:a},members:{__jg:null,__jh:false,__ji:function(){if(this.__jh){return;
}var t=this.getSelection();
var r=[];

for(var i=0;i<t.length;i++){var u=t[i];
var s=u.getModel?u.getModel():null;

if(s!==null){r.push(s);
}}if(r.length===t.length){this.setModelSelection(r);
}},__jj:function(){this.__jh=true;
var l=this.getSelectables(true);
var n=[];
var m=this.__jg.toArray();

for(var i=0;i<m.length;i++){var p=m[i];

for(var j=0;j<l.length;j++){var q=l[j];
var k=q.getModel?q.getModel():null;

if(p===k){n.push(q);
break;
}}}this.setSelection(n);
this.__jh=false;
var o=this.getSelection();

if(!qx.lang.Array.equals(o,n)){this.__ji();
}},getModelSelection:function(){return this.__jg;
},setModelSelection:function(v){if(!v){this.__jg.removeAll();
return;
}
if(qx.core.Variant.isSet(e,b)){this.assertArray(v,h);
}v.unshift(this.__jg.getLength());
v.unshift(0);
var w=this.__jg.splice.apply(this.__jg,v);
w.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="changeSelection",b="_applyEnabled",a="__jk";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(x){qx.core.Object.call(this);
this.__jk=[];
this.addListener(d,this.__jl,this);

if(x!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:b,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__jk:null,getItems:function(){return this.__jk;
},add:function(y){var z=this.__jk;
var A;

for(var i=0,l=arguments.length;i<l;i++){A=arguments[i];

if(qx.lang.Array.contains(z,A)){continue;
}A.addListener(p,this._onItemChangeChecked,this);
z.push(A);
A.setGroup(this);
if(A.getValue()){this.setSelection([A]);
}}if(!this.isAllowEmptySelection()&&z.length>0&&!this.getSelection()[0]){this.setSelection([z[0]]);
}},remove:function(G){var H=this.__jk;

if(qx.lang.Array.contains(H,G)){qx.lang.Array.remove(H,G);
if(G.getGroup()===this){G.resetGroup();
}G.removeListener(p,this._onItemChangeChecked,this);
if(G.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__jk;
},_onItemChangeChecked:function(e){var K=e.getTarget();

if(K.getValue()){this.setSelection([K]);
}else if(this.getSelection()[0]==K){this.resetSelection();
}},_applyInvalidMessage:function(I,J){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setInvalidMessage(I);
}},_applyValid:function(L,M){for(var i=0;i<this.__jk.length;i++){this.__jk[i].setValid(L);
}},_applyEnabled:function(N,O){var P=this.__jk;

if(N==null){for(var i=0,l=P.length;i<l;i++){P[i].resetEnabled();
}}else{for(var i=0,l=P.length;i<l;i++){P[i].setEnabled(N);
}}},_applyAllowEmptySelection:function(s,t){if(!s&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var u=this.getSelection()[0];
var w=this.__jk;
var v=w.indexOf(u);

if(v==-1){return;
}var i=0;
var length=w.length;
if(this.getWrap()){v=(v+1)%length;
}else{v=Math.min(v+1,length-1);
}
while(i<length&&!w[v].getEnabled()){v=(v+1)%length;
i++;
}this.setSelection([w[v]]);
},selectPrevious:function(){var D=this.getSelection()[0];
var F=this.__jk;
var E=F.indexOf(D);

if(E==-1){return;
}var i=0;
var length=F.length;
if(this.getWrap()){E=(E-1+length)%length;
}else{E=Math.max(E-1,0);
}
while(i<length&&!F[E].getEnabled()){E=(E-1+length)%length;
i++;
}this.setSelection([F[E]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__jl:function(e){var C=e.getData()[0];
var B=e.getOldData()[0];

if(B){B.setValue(false);
}
if(C){C.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(q,r,name){this.fireDataEvent(c,{value:q,name:name,old:r});
this._registerEventChaining(q,r,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__jr,this,name);
var v=s.addListener(c,u,this);
s.setUserData(d,v);
}if(t!=null&&t.getUserData&&t.getUserData(d)!=null){t.removeListenerById(t.getUserData(d));
}},__jr:function(name,e){var p=e.getData();
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
(function(){var bd="change",bc="add",bb="remove",ba="order",Y="qx.event.type.Data",X="The parameter must be an array.",W="",V="qx.data.Array",U="?",T="changeBubble",Q="number",S="on",R="changeLength",P="qx.debug";
qx.Class.define(V,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(n){qx.core.Object.call(this);
if(n==undefined){this.__js=[];
}else if(arguments.length>1){this.__js=[];

for(var i=0;i<arguments.length;i++){this.__js.push(arguments[i]);
}}else if(typeof n==Q){this.__js=new Array(n);
}else if(n instanceof Array){this.__js=qx.lang.Array.clone(n);
}else{this.__js=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(this.__js[i],null,i);
}this.__jt();
},events:{"change":Y,"changeLength":Y},members:{__js:null,concat:function(v){if(v){var w=this.__js.concat(v);
}else{var w=this.__js.concat();
}return new qx.data.Array(w);
},join:function(m){return this.__js.join(m);
},pop:function(){var D=this.__js.pop();
this.__jt();
this._applyEventPropagation(null,D,this.length-1);
this.fireDataEvent(bd,{start:this.length-1,end:this.length-1,type:bb,items:[D]},null);
return D;
},push:function(O){for(var i=0;i<arguments.length;i++){this.__js.push(arguments[i]);
this.__jt();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(bd,{start:this.length-1,end:this.length-1,type:bc,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__js.reverse();
this.fireDataEvent(bd,{start:0,end:this.length-1,type:ba,items:null},null);
},shift:function(){var x=this.__js.shift();
this.__jt();
this._applyEventPropagation(null,x,this.length-1);
this.fireDataEvent(bd,{start:0,end:this.length-1,type:bb,items:[x]},null);
return x;
},slice:function(G,H){return new qx.data.Array(this.__js.slice(G,H));
},splice:function(c,d,e){var l=this.__js.length;
var h=this.__js.splice.apply(this.__js,arguments);
if(this.__js.length!=l){this.__jt();
}var j=d>0;
var f=arguments.length>2;
var g=null;

if(j||f){if(this.__js.length>l){var k=bc;
}else if(this.__js.length<l){var k=bb;
g=h;
}else{var k=ba;
}this.fireDataEvent(bd,{start:c,end:this.length-1,type:k,items:g},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,c+i);
}this.fireDataEvent(T,{value:this,name:U,old:h});
for(var i=0;i<h.length;i++){this._applyEventPropagation(null,h[i],i);
}return (new qx.data.Array(h));
},sort:function(N){this.__js.sort.apply(this.__js,arguments);
this.fireDataEvent(bd,{start:0,end:this.length-1,type:ba,items:null},null);
},unshift:function(F){for(var i=arguments.length-1;i>=0;i--){this.__js.unshift(arguments[i]);
this.__jt();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(bd,{start:0,end:this.length-1,type:bc,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__js;
},getItem:function(C){return this.__js[C];
},setItem:function(K,L){var M=this.__js[K];
this.__js[K]=L;
this._applyEventPropagation(L,M,K);
if(this.length!=this.__js.length){this.__jt();
}this.fireDataEvent(bd,{start:K,end:K,type:bc,items:[L]},null);
},getLength:function(){return this.length;
},indexOf:function(E){return this.__js.indexOf(E);
},toString:function(){if(this.__js!=null){return this.__js.toString();
}return W;
},contains:function(y){return this.__js.indexOf(y)!==-1;
},copy:function(){return this.concat();
},insertAt:function(bk,bl){this.splice(bk,0,bl);
},insertBefore:function(z,A){var B=this.indexOf(z);

if(B==-1){this.push(A);
}else{this.splice(B,0,A);
}},insertAfter:function(s,t){var u=this.indexOf(s);

if(u==-1||u==(this.length-1)){this.push(t);
}else{this.splice(u+1,0,t);
}},removeAt:function(o){return this.splice(o,1)[0];
},removeAll:function(){for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(null,this.__js[i],i);
}var bf=this.getLength();
var be=this.__js.concat();
this.__js.length=0;
this.__jt();
this.fireDataEvent(bd,{start:0,end:bf-1,type:bb,items:be},null);
},append:function(a){if(a instanceof qx.data.Array){a=a.toArray();
}if(qx.core.Variant.isSet(P,S)){qx.core.Assert.assertArray(a,X);
}for(var i=0;i<a.length;i++){this._applyEventPropagation(a[i],null,this.__js.length+i);
}Array.prototype.push.apply(this.__js,a);
var b=this.length;
this.__jt();
this.fireDataEvent(bd,{start:b,end:this.length-1,type:bc,items:a},null);
},remove:function(bi){var bj=this.indexOf(bi);

if(bj!=-1){this.splice(bj,1);
return bi;
}},equals:function(I){if(this.length!==I.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==I.getItem(i)){return false;
}}return true;
},sum:function(){var p=0;

for(var i=0;i<this.length;i++){p+=this.getItem(i);
}return p;
},max:function(){var bh=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bh){bh=this.getItem(i);
}}return bh===undefined?null:bh;
},min:function(){var bg=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bg){bg=this.getItem(i);
}}return bg===undefined?null:bg;
},forEach:function(q,r){for(var i=0;i<this.__js.length;i++){q.call(r,this.__js[i]);
}},__jt:function(){var J=this.length;
this.length=this.__js.length;
this.fireDataEvent(R,this.length,J);
}},destruct:function(){for(var i=0;i<this.__js.length;i++){this._applyEventPropagation(null,this.__js[i],i);
}this.__js=null;
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
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(l){qx.ui.core.Widget.call(this);

if(l){this.setSource(l);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(j,k){this._getIframeElement().setSource(j);
},_applyFrameName:function(h,i){this._getIframeElement().setAttribute(e,h);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var z="Please use the 'scrollbar' property instead.",y="qx.client",x="auto",w="mousedown",v="qx.debug",u="load",t="visible",s="hidden",r="help",q="overflowY",be="mouseup",bd="losecapture",bc="contextmenu",bb="overflowX",ba="none",Y="on",X="display",W="scroll",V="no",U="Boolean",G="px",H="url(",E=")",F="gecko",C="repeat",D="div",A="_applyScrollbar",B="DOMNodeInserted",I="_applyNativeHelp",J="yes",M="scrolling",L="/",O="__Fk",N="appear",Q="mshtml",P="block",K="qx.ui.embed.Iframe",T="iframe",S="qx/static/blank.gif",R="absolute";
qx.Class.define(K,{extend:qx.ui.embed.AbstractIframe,construct:function(bg){if(bg!=null){this.__Fj=bg;
}qx.ui.embed.AbstractIframe.call(this,bg);
qx.event.Registration.addListener(document.body,w,this.block,this,true);
qx.event.Registration.addListener(document.body,be,this.release,this,true);
qx.event.Registration.addListener(document.body,bd,this.release,this,true);
this.__Fk=this._createBlockerElement();
this.getContainerElement().add(this.__Fk);

if(qx.core.Variant.isSet(y,F)){this.addListenerOnce(N,function(e){var f=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(f,B,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:T},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:U,init:false,apply:I},scrollbar:{check:[x,V,J],nullable:true,themeable:true,apply:A}},members:{__Fj:null,__Fk:null,renderLayout:function(g,top,h,i){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,g,top,h,i);
var k=G;
var j=this.getInsets();
this.__Fk.setStyles({"left":j.left+k,"top":j.top+k,"width":(h-j.left-j.right)+k,"height":(i-j.top-j.bottom)+k});
},_createContentElement:function(){var bf=new qx.html.Iframe(this.__Fj);
bf.addListener(u,this._onIframeLoad,this);
return bf;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var bk=new qx.html.Element(D);
bk.setStyles({"zIndex":20,"position":R,"display":ba});
if(qx.core.Variant.isSet(y,Q)){bk.setStyles({backgroundImage:H+qx.util.ResourceManager.getInstance().toUri(S)+E,backgroundRepeat:C});
}return bk;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(u);
},block:function(){this.__Fk.setStyle(X,P);
},release:function(){this.__Fk.setStyle(X,ba);
},_applyNativeContextMenu:function(a,b){if(a!==false&&b!==false){return;
}var c=this.getDocument();

if(!c){return;
}
try{var d=c.documentElement;
}catch(e){return ;
}
if(b===false){qx.event.Registration.removeListener(d,bc,this._onNativeContextMenu,this,true);
}
if(a===false){qx.event.Registration.addListener(d,bc,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(y,{"mshtml":function(bi,bj){var document=this.getDocument();

if(!document){return;
}
try{if(bj===false){qx.bom.Event.removeNativeListener(document,r,qx.lang.Function.returnFalse);
}
if(bi===false){qx.bom.Event.addNativeListener(document,r,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var bn=this.getContentElement().getDomElement();
var bm=bn.src;
if(bm.charAt(bm.length-1)==L){bm=bm.substring(0,bm.length-1);
}
if(bm!=this.getSource()){qx.bom.Iframe.getWindow(bn).stop();
bn.src=this.getSource();
}},_applyScrollbar:function(m){this.getContentElement().setAttribute(M,m);
},setOverflow:function(n,o){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);

if(arguments[0] instanceof Array){this.setOverflowX(n[0]);
this.setOverflowY(n[1]);
}else{this.setOverflowX(n);
this.setOverflowY(o);
}},resetOverflow:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.resetOverflowX();
this.resetOverflowY();
},setOverflowX:function(p){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);

if(qx.core.Variant.isSet(v,Y)){qx.core.Assert.assertInArray(p,[s,t,W,x,null]);
}this.getContentElement().setStyle(bb,p);
},getOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return this.getContentElement().getStyle(bb);
},initOverflowX:function(bh){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.setOverflowX(bh);
},resetOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.setOverflowX(null);
},setOverflowY:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);

if(qx.core.Variant.isSet(v,Y)){qx.core.Assert.assertInArray(l,[s,t,W,x,null]);
}this.getContentElement().setStyle(q,l);
},getOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
return this.getContentElement().getStyle(q);
},initOverflowY:function(bl){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.setOverflowY(bl);
},resetOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
this.setOverflowY(null);
}},destruct:function(){this._disposeObjects(O);
qx.event.Registration.removeListener(document.body,w,this.block,this,true);
qx.event.Registration.removeListener(document.body,be,this.release,this,true);
qx.event.Registration.removeListener(document.body,bd,this.release,this,true);
}});
})();
(function(){var e="source",d="name",c="qx.html.Iframe",b="qx.event.type.Event",a="iframe";
qx.Class.define(c,{extend:qx.html.Element,construct:function(i,j,k){qx.html.Element.call(this,a,j,k);
this._setProperty(e,i);
},events:{"load":b},members:{_applyProperty:function(name,f){qx.html.Element.prototype._applyProperty.call(this,name,f);

if(name==e){var g=this.getDomElement();
qx.bom.Iframe.setSource(g,f);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var m=this.getDomElement();

if(m){return qx.bom.Iframe.getWindow(m);
}else{return null;
}},getDocument:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getDocument(h);
}else{return null;
}},getBody:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getBody(l);
}else{return null;
}},setSource:function(n){this._setProperty(e,n);
return this;
},getSource:function(){return this._getProperty(e);
},setName:function(name){this.setAttribute(d,name);
return this;
},getName:function(){return this.getAttribute(d);
},reload:function(){var p=this.getDomElement();

if(p){var o=this.getSource();
this.setSource(null);
this.setSource(o);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__sq:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__sq=null;
},getInsets:function(){if(this.__sq){return this.__sq;
}var l=this._getDefaultInsets();
return this.__sq={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__sq=null;
}},destruct:function(){this.__sq=null;
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
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(k){qx.ui.decoration.Abstract.call(this);

if(k!=null){this.setBackgroundColor(k);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__ss:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ss;
},getMarkup:function(){if(this.__ss){return this.__ss;
}var i={position:a,top:0,left:0};
var j=this._generateBackgroundMarkup(i);
return this.__ss=j;
},resize:function(o,p,q){o.style.width=p+h;
o.style.height=q+h;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__ss=null;
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
},_applyHtml:function(v,w){var x=this.getContentElement();
x.setAttribute(a,v||m);
x.setStyles({"padding":i,"border":o});
},_applyCssClass:function(y,z){this.getContentElement().setAttribute(c,y);
},_applySelectable:function(p){qx.ui.core.Widget.prototype._applySelectable.call(this,p);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,p?n:o);
this.getContentElement().setStyle(l,p?n:o);
}},_applyFont:function(s,t){var u=s?qx.theme.manager.Font.getInstance().resolve(s).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(u);
},_applyTextColor:function(q,r){if(q){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(q));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var r="",q='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',p='.qxappender .type-instance{color:#565656;font-weight:bold}',o="qx.log.appender.Element",n='.qxappender .level-info{background:#DEEDFA}',m='.qxappender .type-stringify{color:#565656;font-weight:bold}',l='.qxappender .type-number{color:#155791;font-weight:normal;}',k="qxappender",j='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',i='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',d='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',h='.qxappender .level-error{background:#FFE2D5}',g='.qxappender .level-debug{background:white}',c='.qxappender .type-key{color:#565656;font-style:italic}',b='.qxappender .level-user{background:#E3EFE9}',f='.qxappender .level-warn{background:#FFF7D5}',e='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(o,{extend:qx.core.Object,construct:function(v){qx.core.Object.call(this);
var w=[g,n,f,h,b,e,l,d,q,j,c,i,p,m];
qx.bom.Stylesheet.createElement(w.join(r));
qx.log.Logger.register(this);
},members:{__DA:null,setElement:function(a){this.clear();
if(a){qx.bom.element.Class.add(a,k);
}this.__DA=a;
},clear:function(){var s=this.__DA;
if(s){s.innerHTML=r;
}},process:function(t){var u=this.__DA;

if(!u){return;
}u.appendChild(qx.log.appender.Util.toHtml(t));
u.scrollTop=u.scrollHeight;
}},destruct:function(){this.__DA=null;
}});
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
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var w="scrollbar-y",v="scrollbar-x",u="pane",t="auto",s="corner",r="on",q="changeVisibility",p="scroll",o="_computeScrollbars",n="off",g="scrollY",m="qx.ui.core.scroll.AbstractScrollArea",j="abstract",d="update",c="scrollX",i="mousewheel",h="scrollbarY",k="scrollbarX",b="horizontal",l="scrollarea",f="vertical";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:j,construct:function(){qx.ui.core.Widget.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbarY:{check:[t,r,n],init:t,themeable:true,apply:o},scrollbar:{group:[k,h]}},members:{_createChildControlImpl:function(L){var M;

switch(L){case u:M=new qx.ui.core.scroll.ScrollPane();
M.addListener(d,this._computeScrollbars,this);
M.addListener(c,this._onScrollPaneX,this);
M.addListener(g,this._onScrollPaneY,this);
this._add(M,{row:0,column:0});
break;
case v:M=this._createScrollBar(b);
M.setMinWidth(0);
M.exclude();
M.addListener(p,this._onScrollBarX,this);
M.addListener(q,this._onChangeScrollbarXVisibility,this);
this._add(M,{row:1,column:0});
break;
case w:M=this._createScrollBar(f);
M.setMinHeight(0);
M.exclude();
M.addListener(p,this._onScrollBarY,this);
M.addListener(q,this._onChangeScrollbarYVisibility,this);
this._add(M,{row:0,column:1});
break;
case s:M=new qx.ui.core.Widget();
M.setWidth(0);
M.setHeight(0);
M.exclude();
this._add(M,{row:1,column:1});
break;
}return M||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,L);
},getPaneSize:function(){return this.getChildControl(u).getInnerSize();
},getItemTop:function(W){return this.getChildControl(u).getItemTop(W);
},getItemBottom:function(K){return this.getChildControl(u).getItemBottom(K);
},getItemLeft:function(x){return this.getChildControl(u).getItemLeft(x);
},getItemRight:function(Q){return this.getChildControl(u).getItemRight(Q);
},scrollToX:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollTo(U);
},scrollByX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(v).scrollBy(X);
},getScrollX:function(){var Y=this.getChildControl(v,true);
return Y?Y.getPosition():0;
},scrollToY:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollTo(ba);
},scrollByY:function(V){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollBy(V);
},getScrollY:function(){var T=this.getChildControl(w,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(u).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(u).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var O=this._isChildControlVisible(v);
var P=this._isChildControlVisible(w);
var N=(P)?this.getChildControl(w,true):(O?this.getChildControl(v,true):null);

if(N){N.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var y=this._isChildControlVisible(v);
var z=this._isChildControlVisible(w);

if(!y){this.scrollToX(0);
}y&&z?this._showChildControl(s):this._excludeChildControl(s);
},_onChangeScrollbarYVisibility:function(e){var R=this._isChildControlVisible(v);
var S=this._isChildControlVisible(w);

if(!S){this.scrollToY(0);
}R&&S?this._showChildControl(s):this._excludeChildControl(s);
},_computeScrollbars:function(){var G=this.getChildControl(u);
var content=G.getChildren()[0];

if(!content){this._excludeChildControl(v);
this._excludeChildControl(w);
return;
}var A=this.getInnerSize();
var F=G.getInnerSize();
var D=G.getScrollSize();
if(!F||!D){return;
}var H=this.getScrollbarX();
var I=this.getScrollbarY();

if(H===t&&I===t){var E=D.width>A.width;
var J=D.height>A.height;
if((E||J)&&!(E&&J)){if(E){J=D.height>F.height;
}else if(J){E=D.width>F.width;
}}}else{var E=H===r;
var J=I===r;
if(D.width>(E?F.width:A.width)&&H===t){E=true;
}
if(D.height>(E?F.height:A.height)&&I===t){J=true;
}}if(E){var C=this.getChildControl(v);
C.show();
C.setMaximum(Math.max(0,D.width-F.width));
C.setKnobFactor((D.width===0)?0:F.width/D.width);
}else{this._excludeChildControl(v);
}
if(J){var B=this.getChildControl(w);
B.show();
B.setMaximum(Math.max(0,D.height-F.height));
B.setKnobFactor((D.height===0)?0:F.height/D.height);
}else{this._excludeChildControl(w);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var B="single",A="Boolean",z="one",y="changeSelection",x="mouseup",w="mousedown",v="__kn",u="losecapture",t="multi",s="_applyQuickSelection",l="mouseover",r="_applySelectionMode",o="_applyDragSelection",k="qx.ui.core.MMultiSelectionHandling",j="removeItem",n="keypress",m="qx.event.type.Data",p="addItem",h="additive",q="mousemove";
qx.Mixin.define(k,{construct:function(){var J=this.SELECTION_MANAGER;
var I=this.__kn=new J(this);
this.addListener(w,I.handleMouseDown,I);
this.addListener(x,I.handleMouseUp,I);
this.addListener(l,I.handleMouseOver,I);
this.addListener(q,I.handleMouseMove,I);
this.addListener(u,I.handleLoseCapture,I);
this.addListener(n,I.handleKeyPress,I);
this.addListener(p,I.handleAddItem,I);
this.addListener(j,I.handleRemoveItem,I);
I.addListener(y,this._onSelectionChange,this);
},events:{"changeSelection":m},properties:{selectionMode:{check:[B,t,h,z],init:B,apply:r},dragSelection:{check:A,init:false,apply:o},quickSelection:{check:A,init:false,apply:s}},members:{__kn:null,selectAll:function(){this.__kn.selectAll();
},isSelected:function(M){if(!qx.ui.core.Widget.contains(this,M)){throw new Error("Could not test if "+M+" is selected, because it is not a child element!");
}return this.__kn.isItemSelected(M);
},addToSelection:function(H){if(!qx.ui.core.Widget.contains(this,H)){throw new Error("Could not add + "+H+" to selection, because it is not a child element!");
}this.__kn.addItem(H);
},removeFromSelection:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not remove "+L+" from selection, because it is not a child element!");
}this.__kn.removeItem(L);
},selectRange:function(f,g){this.__kn.selectItemRange(f,g);
},resetSelection:function(){this.__kn.clearSelection();
},setSelection:function(F){for(var i=0;i<F.length;i++){if(!qx.ui.core.Widget.contains(this,F[i])){throw new Error("Could not select "+F[i]+", because it is not a child element!");
}}
if(F.length===0){this.resetSelection();
}else{var G=this.getSelection();

if(!qx.lang.Array.equals(G,F)){this.__kn.replaceSelection(F);
}}},getSelection:function(){return this.__kn.getSelection();
},getSortedSelection:function(){return this.__kn.getSortedSelection();
},isSelectionEmpty:function(){return this.__kn.isSelectionEmpty();
},getSelectionContext:function(){return this.__kn.getSelectionContext();
},_getManager:function(){return this.__kn;
},getSelectables:function(E){return this.__kn.getSelectables(E);
},invertSelection:function(){this.__kn.invertSelection();
},_getLeadItem:function(){var K=this.__kn.getMode();

if(K===B||K===z){return this.__kn.getSelectedItem();
}else{return this.__kn.getLeadItem();
}},_applySelectionMode:function(C,D){this.__kn.setMode(C);
},_applyDragSelection:function(c,d){this.__kn.setDrag(c);
},_applyQuickSelection:function(a,b){this.__kn.setQuick(a);
},_onSelectionChange:function(e){this.fireDataEvent(y,e.getData());
}},destruct:function(){this._disposeObjects(v);
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
(function(){var bL="one",bK="single",bJ="selected",bI="additive",bH="multi",bG="PageUp",bF="under",bE="Left",bD="lead",bC="Down",ck="Up",cj="Boolean",ci="PageDown",ch="anchor",cg="End",cf="Home",ce="Right",cd="right",cc="click",cb="above",bS="left",bT="Escape",bQ="__kt",bR="A",bO="Space",bP="_applyMode",bM="interval",bN="changeSelection",bU="qx.event.type.Data",bV="quick",bX="key",bW="abstract",ca="drag",bY="qx.ui.core.selection.Abstract";
qx.Class.define(bY,{type:bW,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kq={};
},events:{"changeSelection":bU},properties:{mode:{check:[bK,bH,bI,bL],init:bK,apply:bP},drag:{check:cj,init:false},quick:{check:cj,init:false}},members:{__kr:0,__ks:0,__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,__ky:null,__kz:null,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,__kG:null,__kH:null,__kq:null,__kI:null,__kJ:null,_userInteraction:false,getSelectionContext:function(){return this.__kG;
},selectAll:function(){var n=this.getMode();

if(n==bK||n==bL){throw new Error("Can not select all items in selection mode: "+n);
}this._selectAllItems();
this._fireChange();
},selectItem:function(by){this._setSelectedItem(by);
var bz=this.getMode();

if(bz!==bK&&bz!==bL){this._setLeadItem(by);
this._setAnchorItem(by);
}this._scrollItemIntoView(by);
this._fireChange();
},addItem:function(j){var k=this.getMode();

if(k===bK||k===bL){this._setSelectedItem(j);
}else{if(!this._getAnchorItem()){this._setAnchorItem(j);
}this._setLeadItem(j);
this._addToSelection(j);
}this._scrollItemIntoView(j);
this._fireChange();
},removeItem:function(g){this._removeFromSelection(g);

if(this.getMode()===bL&&this.isSelectionEmpty()){var h=this._getFirstSelectable();

if(h){this.addItem(h);
}if(h==g){return;
}}
if(this.getLeadItem()==g){this._setLeadItem(null);
}
if(this._getAnchorItem()==g){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(o,p){var q=this.getMode();

if(q==bK||q==bL){throw new Error("Can not select multiple items in selection mode: "+q);
}this._selectItemRange(o,p);
this._setAnchorItem(o);
this._setLeadItem(p);
this._scrollItemIntoView(p);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bL){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(T){var U=this.getMode();

if(U==bL||U===bK){if(T.length>1){throw new Error("Could not select more than one items in mode: "+U+"!");
}
if(T.length==1){this.selectItem(T[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(T);
}},getSelectedItem:function(){var M=this.getMode();

if(M===bK||M===bL){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__kq);
},getSortedSelection:function(){var ct=this.getSelectables();
var cs=qx.lang.Object.getValues(this.__kq);
cs.sort(function(a,b){return ct.indexOf(a)-ct.indexOf(b);
});
return cs;
},isItemSelected:function(cO){var cP=this._selectableToHashCode(cO);
return this.__kq[cP]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__kq);
},invertSelection:function(){var bq=this.getMode();

if(bq===bK||bq===bL){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bp=this.getSelectables();

for(var i=0;i<bp.length;i++){this._toggleInSelection(bp[i]);
}this._fireChange();
},_setLeadItem:function(x){var y=this.__kH;

if(y!==null){this._styleSelectable(y,bD,false);
}
if(x!==null){this._styleSelectable(x,bD,true);
}this.__kH=x;
},getLeadItem:function(){return this.__kH!==null?this.__kH:null;
},_setAnchorItem:function(t){var u=this.__kI;

if(u){this._styleSelectable(u,ch,false);
}
if(t){this._styleSelectable(t,ch,true);
}this.__kI=t;
},_getAnchorItem:function(){return this.__kI!==null?this.__kI:null;
},_isSelectable:function(bB){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bA=event.getTarget();
return this._isSelectable(bA)?bA:null;
},_selectableToHashCode:function(cC){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(I,J,K){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(c){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(R){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cl,cm){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cQ){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(S){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cU,cV){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bb,bc){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(r,s){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(B,C){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(B===bL){var D=this._getFirstSelectable();

if(D){this._setSelectedItem(D);
this._scrollItemIntoView(D);
}}this._fireChange();
},handleMouseOver:function(event){this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var H=this.getMode();

if(H!==bL&&H!==bK){this._userInteraction=false;
return;
}var G=this._getSelectableFromMouseEvent(event);

if(G===null){this._userInteraction=false;
return;
}this._setSelectedItem(G);
this._fireChange(bV);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var W=this._getSelectableFromMouseEvent(event);

if(W===null){this._userInteraction=false;
return;
}var Y=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var V=event.isShiftPressed();
if(this.isItemSelected(W)&&!V&&!Y&&!this.getDrag()){this.__kJ=W;
this._userInteraction=false;
return;
}else{this.__kJ=null;
}this._scrollItemIntoView(W);
switch(this.getMode()){case bK:case bL:this._setSelectedItem(W);
break;
case bI:this._setLeadItem(W);
this._setAnchorItem(W);
this._toggleInSelection(W);
break;
case bH:this._setLeadItem(W);
if(V){var X=this._getAnchorItem();

if(X===null){X=this._getFirstSelectable();
this._setAnchorItem(X);
}this._selectItemRange(X,W,Y);
}else if(Y){this._setAnchorItem(W);
this._toggleInSelection(W);
}else{this._setAnchorItem(W);
this._setSelectedItem(W);
}break;
}var ba=this.getMode();

if(this.getDrag()&&ba!==bK&&ba!==bL&&!V&&!Y){this.__kx=this._getLocation();
this.__ku=this._getScroll();
this.__ky=event.getDocumentLeft()+this.__ku.left;
this.__kz=event.getDocumentTop()+this.__ku.top;
this.__kA=true;
this._capture();
}this._fireChange(cc);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var Q=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var N=event.isShiftPressed();

if(!Q&&!N&&this.__kJ){var O=this._getSelectableFromMouseEvent(event);

if(O===null||!this.isItemSelected(O)){this._userInteraction=false;
return;
}var P=this.getMode();

if(P===bI){this._removeFromSelection(O);
}else{this._setSelectedItem(O);

if(this.getMode()===bH){this._setLeadItem(O);
this._setAnchorItem(O);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__kA){return;
}this.__kB=event.getDocumentLeft();
this.__kC=event.getDocumentTop();
this._userInteraction=true;
var A=this.__kB+this.__ku.left;

if(A>this.__ky){this.__kD=1;
}else if(A<this.__ky){this.__kD=-1;
}else{this.__kD=0;
}var z=this.__kC+this.__ku.top;

if(z>this.__kz){this.__kE=1;
}else if(z<this.__kz){this.__kE=-1;
}else{this.__kE=0;
}var location=this.__kx;

if(this.__kB<location.left){this.__kr=this.__kB-location.left;
}else if(this.__kB>location.right){this.__kr=this.__kB-location.right;
}else{this.__kr=0;
}
if(this.__kC<location.top){this.__ks=this.__kC-location.top;
}else if(this.__kC>location.bottom){this.__ks=this.__kC-location.bottom;
}else{this.__ks=0;
}if(!this.__kt){this.__kt=new qx.event.Timer(100);
this.__kt.addListener(bM,this._onInterval,this);
}this.__kt.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var m=e.getData();

if(this.getMode()===bL&&this.isSelectionEmpty()){this.addItem(m);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__kA){return;
}if(this.__kF){this._fireChange(cc);
}delete this.__kA;
delete this.__kv;
delete this.__kw;
this._releaseCapture();
if(this.__kt){this.__kt.stop();
}},_onInterval:function(e){this._scrollBy(this.__kr,this.__ks);
this.__ku=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bl=this._getDimension();
var be=Math.max(0,Math.min(this.__kB-this.__kx.left,bl.width))+this.__ku.left;
var bd=Math.max(0,Math.min(this.__kC-this.__kx.top,bl.height))+this.__ku.top;
if(this.__kv===be&&this.__kw===bd){return;
}this.__kv=be;
this.__kw=bd;
var bn=this._getAnchorItem();
var bg=bn;
var bj=this.__kD;
var bm,bf;

while(bj!==0){bm=bj>0?this._getRelatedSelectable(bg,cd):this._getRelatedSelectable(bg,bS);
if(bm!==null){bf=this._getSelectableLocationX(bm);
if((bj>0&&bf.left<=be)||(bj<0&&bf.right>=be)){bg=bm;
continue;
}}break;
}var bk=this.__kE;
var bi,bh;

while(bk!==0){bi=bk>0?this._getRelatedSelectable(bg,bF):this._getRelatedSelectable(bg,cb);
if(bi!==null){bh=this._getSelectableLocationY(bi);
if((bk>0&&bh.top<=bd)||(bk<0&&bh.bottom>=bd)){bg=bi;
continue;
}}break;
}var bo=this.getMode();

if(bo===bH){this._selectItemRange(bn,bg);
}else if(bo===bI){if(this.isItemSelected(bn)){this._selectItemRange(bn,bg,true);
}else{this._deselectItemRange(bn,bg);
}this._setAnchorItem(bg);
}this._fireChange(ca);
},__kK:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cI,cH;
var cK=event.getKeyIdentifier();
var cJ=this.getMode();
var cE=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cF=event.isShiftPressed();
var cG=false;

if(cK===bR&&cE){if(cJ!==bK&&cJ!==bL){this._selectAllItems();
cG=true;
}}else if(cK===bT){if(cJ!==bK&&cJ!==bL){this._clearSelection();
cG=true;
}}else if(cK===bO){var cD=this.getLeadItem();

if(cD&&!cF){if(cE||cJ===bI){this._toggleInSelection(cD);
}else{this._setSelectedItem(cD);
}cG=true;
}}else if(this.__kK[cK]){cG=true;

if(cJ===bK||cJ==bL){cI=this._getSelectedItem();
}else{cI=this.getLeadItem();
}
if(cI!==null){switch(cK){case cf:cH=this._getFirstSelectable();
break;
case cg:cH=this._getLastSelectable();
break;
case ck:cH=this._getRelatedSelectable(cI,cb);
break;
case bC:cH=this._getRelatedSelectable(cI,bF);
break;
case bE:cH=this._getRelatedSelectable(cI,bS);
break;
case ce:cH=this._getRelatedSelectable(cI,cd);
break;
case bG:cH=this._getPage(cI,true);
break;
case ci:cH=this._getPage(cI,false);
break;
}}else{switch(cK){case cf:case bC:case ce:case ci:cH=this._getFirstSelectable();
break;
case cg:case ck:case bE:case bG:cH=this._getLastSelectable();
break;
}}if(cH!==null){switch(cJ){case bK:case bL:this._setSelectedItem(cH);
break;
case bI:this._setLeadItem(cH);
break;
case bH:if(cF){var cL=this._getAnchorItem();

if(cL===null){this._setAnchorItem(cL=this._getFirstSelectable());
}this._setLeadItem(cH);
this._selectItemRange(cL,cH,cE);
}else{this._setAnchorItem(cH);
this._setLeadItem(cH);

if(!cE){this._setSelectedItem(cH);
}}break;
}this._scrollItemIntoView(cH);
}}
if(cG){event.stop();
this._fireChange(bX);
}this._userInteraction=false;
},_selectAllItems:function(){var cn=this.getSelectables();

for(var i=0,l=cn.length;i<l;i++){this._addToSelection(cn[i]);
}},_clearSelection:function(){var E=this.__kq;

for(var F in E){this._removeFromSelection(E[F]);
}this.__kq={};
},_selectItemRange:function(br,bs,bt){var bw=this._getSelectableRange(br,bs);
if(!bt){var bv=this.__kq;
var bx=this.__kL(bw);

for(var bu in bv){if(!bx[bu]){this._removeFromSelection(bv[bu]);
}}}for(var i=0,l=bw.length;i<l;i++){this._addToSelection(bw[i]);
}},_deselectItemRange:function(cW,cX){var cY=this._getSelectableRange(cW,cX);

for(var i=0,l=cY.length;i<l;i++){this._removeFromSelection(cY[i]);
}},__kL:function(cp){var cr={};
var cq;

for(var i=0,l=cp.length;i<l;i++){cq=cp[i];
cr[this._selectableToHashCode(cq)]=cq;
}return cr;
},_getSelectedItem:function(){for(var L in this.__kq){return this.__kq[L];
}return null;
},_setSelectedItem:function(cR){if(this._isSelectable(cR)){var cS=this.__kq;
var cT=this._selectableToHashCode(cR);

if(!cS[cT]||qx.lang.Object.hasMinLength(cS,2)){this._clearSelection();
this._addToSelection(cR);
}}},_addToSelection:function(cM){var cN=this._selectableToHashCode(cM);

if(!this.__kq[cN]&&this._isSelectable(cM)){this.__kq[cN]=cM;
this._styleSelectable(cM,bJ,true);
this.__kF=true;
}},_toggleInSelection:function(d){var f=this._selectableToHashCode(d);

if(!this.__kq[f]){this.__kq[f]=d;
this._styleSelectable(d,bJ,true);
}else{delete this.__kq[f];
this._styleSelectable(d,bJ,false);
}this.__kF=true;
},_removeFromSelection:function(v){var w=this._selectableToHashCode(v);

if(this.__kq[w]!=null){delete this.__kq[w];
this._styleSelectable(v,bJ,false);
this.__kF=true;
}},_replaceMultiSelection:function(cu){var cx=false;
var cA,cz;
var cv={};

for(var i=0,l=cu.length;i<l;i++){cA=cu[i];

if(this._isSelectable(cA)){cz=this._selectableToHashCode(cA);
cv[cz]=cA;
}}var cB=cu[0];
var cw=cA;
var cy=this.__kq;

for(var cz in cy){if(cv[cz]){delete cv[cz];
}else{cA=cy[cz];
delete cy[cz];
this._styleSelectable(cA,bJ,false);
cx=true;
}}for(var cz in cv){cA=cy[cz]=cv[cz];
this._styleSelectable(cA,bJ,true);
cx=true;
}if(!cx){return false;
}this._scrollItemIntoView(cw);
this._setLeadItem(cB);
this._setAnchorItem(cB);
this.__kF=true;
this._fireChange();
},_fireChange:function(co){if(this.__kF){this.__kG=co||null;
this.fireDataEvent(bN,this.getSelection());
delete this.__kF;
}}},destruct:function(){this._disposeObjects(bQ);
this.__kq=this.__kJ=this.__kI=null;
this.__kH=null;
}});
})();
(function(){var L="vertical",K="under",J="above",I="qx.ui.core.selection.Widget",H="left",G="right";
qx.Class.define(I,{extend:qx.ui.core.selection.Abstract,construct:function(F){qx.ui.core.selection.Abstract.call(this);
this.__kM=F;
},members:{__kM:null,_isSelectable:function(R){return this._isItemSelectable(R)&&R.getLayoutParent()===this.__kM;
},_selectableToHashCode:function(A){return A.$$hash;
},_styleSelectable:function(h,j,k){k?h.addState(j):h.removeState(j);
},_capture:function(){this.__kM.capture();
},_releaseCapture:function(){this.__kM.releaseCapture();
},_isItemSelectable:function(a){if(this._userInteraction){return a.isVisible()&&a.isEnabled();
}else{return a.isVisible();
}},_getWidget:function(){return this.__kM;
},_getLocation:function(){var z=this.__kM.getContentElement().getDomElement();
return z?qx.bom.element.Location.get(z):null;
},_getDimension:function(){return this.__kM.getInnerSize();
},_getSelectableLocationX:function(d){var e=d.getBounds();

if(e){return {left:e.left,right:e.left+e.width};
}},_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){return {top:g.top,bottom:g.top+g.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(B,C){},_scrollItemIntoView:function(c){this.__kM.scrollChildIntoView(c);
},getSelectables:function(M){var N=false;

if(!M){N=this._userInteraction;
this._userInteraction=true;
}var Q=this.__kM.getChildren();
var O=[];
var P;

for(var i=0,l=Q.length;i<l;i++){P=Q[i];

if(this._isItemSelectable(P)){O.push(P);
}}this._userInteraction=N;
return O;
},_getSelectableRange:function(s,t){if(s===t){return [s];
}var x=this.__kM.getChildren();
var u=[];
var w=false;
var v;

for(var i=0,l=x.length;i<l;i++){v=x[i];

if(v===s||v===t){if(w){u.push(v);
break;
}else{w=true;
}}
if(w&&this._isItemSelectable(v)){u.push(v);
}}return u;
},_getFirstSelectable:function(){var b=this.__kM.getChildren();

for(var i=0,l=b.length;i<l;i++){if(this._isItemSelectable(b[i])){return b[i];
}}return null;
},_getLastSelectable:function(){var y=this.__kM.getChildren();

for(var i=y.length-1;i>0;i--){if(this._isItemSelectable(y[i])){return y[i];
}}return null;
},_getRelatedSelectable:function(m,n){var q=this.__kM.getOrientation()===L;
var p=this.__kM.getChildren();
var o=p.indexOf(m);
var r;

if((q&&n===J)||(!q&&n===H)){for(var i=o-1;i>=0;i--){r=p[i];

if(this._isItemSelectable(r)){return r;
}}}else if((q&&n===K)||(!q&&n===G)){for(var i=o+1;i<p.length;i++){r=p[i];

if(this._isItemSelectable(r)){return r;
}}}return null;
},_getPage:function(D,E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__kM=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var f=this._getWidget();
return {left:f.getScrollX(),top:f.getScrollY()};
},_scrollBy:function(c,d){var e=this._getWidget();
e.scrollByX(c);
e.scrollByY(d);
},_getPage:function(g,h){var m=this.getSelectables();
var length=m.length;
var p=m.indexOf(g);
if(p===-1){throw new Error("Invalid lead item: "+g);
}var j=this._getWidget();
var r=j.getScrollY();
var innerHeight=j.getInnerSize().height;
var top,l,q;

if(h){var o=r;
var i=p;
while(1){for(;i>=0;i--){top=j.getItemTop(m[i]);
if(top<o){q=i+1;
break;
}}if(q==null){var s=this._getFirstSelectable();
return s==g?null:s;
}if(q>=p){o-=innerHeight+r-j.getItemBottom(g);
q=null;
continue;
}return m[q];
}}else{var n=innerHeight+r;
var i=p;
while(1){for(;i<length;i++){l=j.getItemBottom(m[i]);
if(l>n){q=i-1;
break;
}}if(q==null){var k=this._getLastSelectable();
return k==g?null:k;
}if(q<=p){n+=j.getItemTop(g)-r;
q=null;
continue;
}return m[q];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(g){var h=g.getBounds();

if(h){var top=this._getWidget().getItemTop(g);
return {top:top,bottom:top+h.height};
}},_isSelectable:function(f){return this._isItemSelectable(f)&&f instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(p){var s=false;

if(!p){s=this._userInteraction;
this._userInteraction=true;
}var r=this._getWidget();
var t=[];

if(r.getRoot()!=null){var q=r.getRoot().getItems(true,!!p,r.getHideRoot());

for(var i=0;i<q.length;i++){if(this._isSelectable(q[i])){t.push(q[i]);
}}}this._userInteraction=s;
return t;
},_getSelectableRange:function(k,l){if(k===l){return [k];
}var m=this.getSelectables();
var n=m.indexOf(k);
var o=m.indexOf(l);

if(n<0||o<0){return [];
}
if(n<o){return m.slice(n,o+1);
}else{return m.slice(o,n+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var j=this.getSelectables();

if(j.length>0){return j[j.length-1];
}else{return null;
}},_getRelatedSelectable:function(u,v){var w=this._getWidget();
var x=null;

switch(v){case d:x=w.getPreviousNodeOf(u,false);
break;
case b:x=w.getNextNodeOf(u,false);
break;
case c:case e:break;
}
if(!x){return null;
}
if(this._isSelectable(x)){return x;
}else{return this._getRelatedSelectable(x,v);
}}}});
})();
(function(){var n="dblclick",m="click",l="Boolean",k="excluded",j="visible",h="qx.event.type.Data",g="_applyOpenMode",f="Space",d="Left",c="Enter",B="changeOpenMode",A="__kN",z="_applyRootOpenClose",y="changeSelection",x="qx.ui.tree.Tree",w="tree",v="_applyHideRoot",u="changeRoot",t="_applyRoot",s="keypress",q="none",r="pane",o="Right",p="qx.ui.tree.AbstractTreeItem";
qx.Class.define(x,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__kN=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(r).add(this.__kN);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(y,this._onChangeSelection,this);
this.addListener(s,this._onKeyPress,this);
},events:{addItem:h,removeItem:h},properties:{openMode:{check:[m,n,q],init:n,apply:g,event:B,themeable:true},root:{check:p,init:null,nullable:true,event:u,apply:t},hideRoot:{check:l,init:false,apply:v},rootOpenClose:{check:l,init:false,apply:z},appearance:{refine:true,init:w},focusable:{refine:true,init:true}},members:{__kN:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__kN;
},_applyRoot:function(ba,bb){var bc=this.getChildrenContainer();

if(bb){bc.remove(bb);

if(bb.hasChildren()){bc.remove(bb.getChildrenContainer());
}}
if(ba){bc.add(ba);

if(ba.hasChildren()){bc.add(ba.getChildrenContainer());
}ba.setVisibility(this.getHideRoot()?k:j);
ba.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(L,M){var N=this.getRoot();

if(!N){return;
}N.setVisibility(L?k:j);
N.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(C,D){var E=this.getRoot();

if(!E){return;
}E.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__kN;
},getNextNodeOf:function(bd,be){if((be!==false||bd.isOpen())&&bd.hasChildren()){return bd.getChildren()[0];
}
while(bd){var parent=bd.getParent();

if(!parent){return null;
}var bg=parent.getChildren();
var bf=bg.indexOf(bd);

if(bf>-1&&bf<bg.length-1){return bg[bf+1];
}bd=parent;
}return null;
},getPreviousNodeOf:function(T,U){var parent=T.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==T){return null;
}}}else{if(T==this.getRoot()){return null;
}}var X=parent.getChildren();
var V=X.indexOf(T);

if(V>0){var W=X[V-1];

while((U!==false||W.isOpen())&&W.hasChildren()){var Y=W.getChildren();
W=Y[Y.length-1];
}return W;
}else{return parent;
}},getNextSiblingOf:function(O){if(O==this.getRoot()){return null;
}var parent=O.getParent();
var P=parent.getChildren();
var Q=P.indexOf(O);

if(Q<P.length-1){return P[Q+1];
}return null;
},getPreviousSiblingOf:function(F){if(F==this.getRoot()){return null;
}var parent=F.getParent();
var G=parent.getChildren();
var H=G.indexOf(F);

if(H>0){return G[H-1];
}return null;
},getItems:function(a,b){if(this.getRoot()!=null){return this.getRoot().getItems(a,b,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(K){while(K){if(K==this){return null;
}
if(K instanceof qx.ui.tree.AbstractTreeItem){return K;
}K=K.getLayoutParent();
}return null;
},_applyOpenMode:function(R,S){if(S==m){this.removeListener(m,this._onOpen,this);
}else if(S==n){this.removeListener(n,this._onOpen,this);
}
if(R==m){this.addListener(m,this._onOpen,this);
}else if(R==n){this.addListener(n,this._onOpen,this);
}},_onOpen:function(e){var I=this.getTreeItem(e.getTarget());

if(!I||!I.isOpenable()){return;
}I.setOpen(!I.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bi=e.getData();
for(var i=0;i<bi.length;i++){var bh=bi[i];
while(bh.getParent()!=null){bh=bh.getParent();
bh.setOpen(true);
}}},_onKeyPress:function(e){var J=this._getLeadItem();

if(J!==null){switch(e.getKeyIdentifier()){case d:if(J.isOpenable()&&J.isOpen()){J.setOpen(false);
}break;
case o:if(J.isOpenable()&&!J.isOpen()){J.setOpen(true);
}break;
case c:case f:if(J.isOpenable()){J.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(A);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="__kS",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",p="mouseup",q="Number",n="_applyPosition",o="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(a){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(a!=null){this.setOrientation(a);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[l,i],init:l,apply:v},maximum:{check:s,apply:x,init:100},position:{check:q,init:0,apply:n,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__kR:null,__kS:null,_getScrollPaneElement:function(){if(!this.__kS){this.__kS=new qx.html.Element();
}return this.__kS;
},renderLayout:function(H,top,I,J){var K=qx.ui.core.Widget.prototype.renderLayout.call(this,H,top,I,J);
this._updateScrollBar();
return K;
},_getContentHint:function(){var G=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__kR?100:G,maxWidth:this.__kR?null:G,minWidth:this.__kR?null:G,height:this.__kR?G:100,maxHeight:this.__kR?G:null,minHeight:this.__kR?G:null};
},_applyEnabled:function(E,F){qx.ui.core.Widget.prototype._applyEnabled.call(this,E,F);
this._updateScrollBar();
},_applyMaximum:function(L){this._updateScrollBar();
},_applyPosition:function(T){var content=this.getContentElement();

if(this.__kR){content.scrollToX(T);
}else{content.scrollToY(T);
}},_applyOrientation:function(M,N){var O=this.__kR=M===l;
this.set({allowGrowX:O,allowShrinkX:O,allowGrowY:!O,allowShrinkY:!O});

if(O){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:O?j:d,overflowY:O?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var Q=this.__kR;
var R=this.getBounds();

if(!R){return;
}
if(this.isEnabled()){var S=Q?R.width:R.height;
var P=this.getMaximum()+S;
}else{P=0;
}if(qx.core.Variant.isSet(g,r)){var R=this.getBounds();
this.getContentElement().setStyles({left:Q?f:h,top:Q?h:f,width:(Q?R.width:R.width+1)+k,height:(Q?R.height+1:R.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(Q?P:1)+k,height:(Q?1:P)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(U){this.setPosition(Math.max(0,Math.min(this.getMaximum(),U)));
},scrollBy:function(D){this.scrollTo(this.getPosition()+D);
},scrollBySteps:function(B){var C=this.getSingleStep();
this.scrollBy(B*C);
},_onScroll:function(e){var W=this.getContentElement();
var V=this.__kR?W.getScrollX():W.getScrollY();
this.setPosition(V);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(w);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(R){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(R!=null){this.setOrientation(R);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__kT:2,_createChildControlImpl:function(P){var Q;

switch(P){case l:Q=new qx.ui.core.scroll.ScrollSlider();
Q.setPageStep(100);
Q.setFocusable(false);
Q.addListener(y,this._onChangeSliderValue,this);
this._add(Q,{flex:1});
break;
case j:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteBegin,this);
this._add(Q);
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteEnd,this);
this._add(Q);
break;
}return Q||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,P);
},_applyMaximum:function(G){this.getChildControl(l).setMaximum(G);
},_applyPosition:function(H){this.getChildControl(l).setValue(H);
},_applyKnobFactor:function(I){this.getChildControl(l).setKnobFactor(I);
},_applyPageStep:function(a){this.getChildControl(l).setPageStep(a);
},_applyOrientation:function(D,E){var F=this._getLayout();

if(F){F.dispose();
}if(D===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(D);
},scrollTo:function(C){this.getChildControl(l).slideTo(C);
},scrollBy:function(B){this.getChildControl(l).slideBy(B);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(l).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var J=this.getChildControl(l).getChildControl(v);
var M=J.getSizeHint();
var K=false;
var L=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(L.height<M.minHeight+this.__kT){K=true;
}}else{if(L.width<M.minWidth+this.__kT){K=true;
}}
if(K){J.exclude();
}else{J.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var R="knob",Q="horizontal",P="vertical",O="Integer",N="hovered",M="left",L="top",K="mouseup",J="pressed",I="px",bD="changeValue",bC="interval",bB="mousemove",bA="resize",bz="slider",by="mousedown",bx="PageUp",bw="mouseout",bv='qx.event.type.Data',bu="Left",Y="Down",ba="Up",W="dblclick",X="qx.ui.form.Slider",U="PageDown",V="mousewheel",S="_applyValue",T="_applyKnobFactor",bb="End",bc="height",bj="Right",bh="width",bn="_applyOrientation",bl="Home",bq="mouseover",bp="floor",be="_applyMinimum",bt="click",bs="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",br="keypress",bd="ceil",bf="losecapture",bg="contextmenu",bi="_applyMaximum",bk="Number",bm="changeMaximum",bo="changeMinimum";
qx.Class.define(X,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(br,this._onKeyPress);
this.addListener(V,this._onMouseWheel);
this.addListener(by,this._onMouseDown);
this.addListener(K,this._onMouseUp);
this.addListener(bf,this._onMouseUp);
this.addListener(bA,this._onUpdate);
this.addListener(bg,this._onStopEvent);
this.addListener(bt,this._onStopEvent);
this.addListener(W,this._onStopEvent);
if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}},events:{changeValue:bv},properties:{appearance:{refine:true,init:bz},focusable:{refine:true,init:true},orientation:{check:[Q,P],init:Q,apply:bn},value:{check:bs,init:0,apply:S,nullable:true},minimum:{check:O,init:0,apply:be,event:bo},maximum:{check:O,init:100,apply:bi,event:bm},singleStep:{check:O,init:1},pageStep:{check:O,init:10},knobFactor:{check:bk,apply:T,nullable:true}},members:{__kU:null,__kV:null,__kW:null,__kX:null,__kY:null,__la:null,__lb:null,__lc:null,__ld:null,__le:null,__lf:null,__lg:null,_forwardStates:{invalid:true},_createChildControlImpl:function(A){var B;

switch(A){case R:B=new qx.ui.core.Widget();
B.addListener(bA,this._onUpdate,this);
B.addListener(bq,this._onMouseOver);
B.addListener(bw,this._onMouseOut);
this._add(B);
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,A);
},_onMouseOver:function(e){this.addState(N);
},_onMouseOut:function(e){this.removeState(N);
},_onMouseWheel:function(e){var bM=e.getWheelDelta()>0?1:-1;
this.slideBy(bM*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bL=this.getOrientation()===Q;
var bK=bL?bu:ba;
var forward=bL?bj:Y;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bK:this.slideBack();
break;
case U:this.slidePageForward();
break;
case bx:this.slidePageBack();
break;
case bl:this.slideToBegin();
break;
case bb:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__kX){return;
}var cc=this.__li;
var ca=this.getChildControl(R);
var cb=cc?M:L;
var ce=cc?e.getDocumentLeft():e.getDocumentTop();
var cf=this.__kU=qx.bom.element.Location.get(this.getContentElement().getDomElement())[cb];
var cd=this.__kV=qx.bom.element.Location.get(ca.getContainerElement().getDomElement())[cb];

if(e.getTarget()===ca){this.__kX=true;

if(!this.__le){this.__le=new qx.event.Timer(100);
this.__le.addListener(bC,this._fireValue,this);
}this.__le.start();
this.__kY=ce+cf-cd;
ca.addState(J);
}else{this.__la=true;
this.__lb=ce<=cd?-1:1;
this.__lj(e);
this._onInterval();
if(!this.__ld){this.__ld=new qx.event.Timer(100);
this.__ld.addListener(bC,this._onInterval,this);
}this.__ld.start();
}this.addListener(bB,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__kX){this.releaseCapture();
delete this.__kX;
this.__le.stop();
this._fireValue();
delete this.__kY;
this.getChildControl(R).removeState(J);
if(e.getType()===K){var w;
var x;
var v;

if(this.__li){w=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__kU);
v=qx.bom.element.Location.get(this.getContentElement().getDomElement())[L];
x=e.getDocumentTop()-(v+this.getChildControl(R).getBounds().top);
}else{w=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__kU);
v=qx.bom.element.Location.get(this.getContentElement().getDomElement())[M];
x=e.getDocumentLeft()-(v+this.getChildControl(R).getBounds().left);
}
if(x<0||x>this.__kW||w<0||w>this.__kW){this.getChildControl(R).removeState(N);
}}}else if(this.__la){this.__ld.stop();
this.releaseCapture();
delete this.__la;
delete this.__lb;
delete this.__lc;
}this.removeListener(bB,this._onMouseMove);
if(e.getType()===K){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__kX){var H=this.__li?e.getDocumentLeft():e.getDocumentTop();
var G=H-this.__kY;
this.slideTo(this._positionToValue(G));
}else if(this.__la){this.__lj(e);
}e.stopPropagation();
},_onInterval:function(e){var bI=this.getValue()+(this.__lb*this.getPageStep());
if(bI<this.getMinimum()){bI=this.getMinimum();
}else if(bI>this.getMaximum()){bI=this.getMaximum();
}var bJ=this.__lb==-1;

if((bJ&&bI<=this.__lc)||(!bJ&&bI>=this.__lc)){bI=this.__lc;
}this.slideTo(bI);
},_onUpdate:function(e){var bO=this.getInnerSize();
var bP=this.getChildControl(R).getBounds();
var bN=this.__li?bh:bc;
this._updateKnobSize();
this.__lh=bO[bN]-bP[bN];
this.__kW=bP[bN];
this._updateKnobPosition();
},__li:false,__lh:0,__lj:function(e){var j=this.__li;
var q=j?e.getDocumentLeft():e.getDocumentTop();
var s=this.__kU;
var k=this.__kV;
var u=this.__kW;
var r=q-s;

if(q>=k){r-=u;
}var o=this._positionToValue(r);
var l=this.getMinimum();
var m=this.getMaximum();

if(o<l){o=l;
}else if(o>m){o=m;
}else{var p=this.getValue();
var n=this.getPageStep();
var t=this.__lb<0?bp:bd;
o=p+(Math[t]((o-p)/n)*n);
}if(this.__lc==null||(this.__lb==-1&&o<=this.__lc)||(this.__lb==1&&o>=this.__lc)){this.__lc=o;
}},_positionToValue:function(c){var d=this.__lh;
if(d==null||d==0){return 0;
}var g=c/d;

if(g<0){g=0;
}else if(g>1){g=1;
}var f=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(f*g);
},_valueToPosition:function(bV){var bW=this.__lh;

if(bW==null){return 0;
}var bX=this.getMaximum()-this.getMinimum();
if(bX==0){return 0;
}var bV=bV-this.getMinimum();
var bY=bV/bX;

if(bY<0){bY=0;
}else if(bY>1){bY=1;
}return Math.round(bW*bY);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(h){var i=this.getChildControl(R).getContainerElement();

if(this.__li){i.setStyle(M,h+I,true);
}else{i.setStyle(L,h+I,true);
}},_updateKnobSize:function(){var bU=this.getKnobFactor();

if(bU==null){return;
}var bT=this.getInnerSize();

if(bT==null){return;
}if(this.__li){this.getChildControl(R).setWidth(Math.round(bU*bT.width));
}else{this.getChildControl(R).setHeight(Math.round(bU*bT.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(z){this.slideTo(this.getValue()+z);
},slideTo:function(bE){if(bE<this.getMinimum()){bE=this.getMinimum();
}else if(bE>this.getMaximum()){bE=this.getMaximum();
}else{bE=this.getMinimum()+Math.round((bE-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bE);
},_applyOrientation:function(bQ,bR){var bS=this.getChildControl(R);
this.__li=bQ===Q;
if(this.__li){this.removeState(P);
bS.removeState(P);
this.addState(Q);
bS.addState(Q);
bS.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(Q);
bS.removeState(Q);
this.addState(P);
bS.addState(P);
bS.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(C,D){if(C!=null){this._updateKnobSize();
}else{if(this.__li){this.getChildControl(R).resetWidth();
}else{this.getChildControl(R).resetHeight();
}}},_applyValue:function(bG,bH){if(bG!=null){this._updateKnobPosition();

if(this.__kX){this.__lg=[bG,bH];
}else{this.fireEvent(bD,qx.event.type.Data,[bG,bH]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__lg){return;
}var bF=this.__lg;
this.__lg=null;
this.fireEvent(bD,qx.event.type.Data,bF);
},_applyMinimum:function(E,F){if(this.getValue()<E){this.setValue(E);
}this._updateKnobPosition();
},_applyMaximum:function(a,b){if(this.getValue()>a){this.setValue(a);
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
(function(){var dp="top",dn="left",dm="qx.debug",dl="bottom",dk="hAlign",dj="vAlign",di="Integer",dh="_applyLayoutChange",dg="center",df="middle",dE="right",dD="flex",dC="on",dB="height",dA="' is not supported by the Grid layout!",dz="Invalid parameter 'column'",dy="The property '",dx="Value must be positive",dw="qx.ui.layout.Grid",dv="maxHeight",dt="width",du="minHeight",dr="minWidth",ds="maxWidth",dq="Invalid parameter 'row'";
qx.Class.define(dw,{extend:qx.ui.layout.Abstract,construct:function(T,U){qx.ui.layout.Abstract.call(this);
this.__ju=[];
this.__jv=[];

if(T){this.setSpacingX(T);
}
if(U){this.setSpacingY(U);
}},properties:{spacingX:{check:di,init:0,apply:dh},spacingY:{check:di,init:0,apply:dh}},members:{__jw:null,__ju:null,__jv:null,__jx:null,__jy:null,__jz:null,__jA:null,__jB:null,__jC:null,verifyLayoutProperty:qx.core.Variant.select(dm,{"on":function(bg,name,bh){var bi={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(bi[name]==1,dy+name+dA);
this.assertInteger(bh);
this.assert(bh>=0,dx);
},"off":null}),__jD:function(){var bq=[];
var bp=[];
var br=[];
var bn=-1;
var bm=-1;
var bt=this._getLayoutChildren();

for(var i=0,l=bt.length;i<l;i++){var bo=bt[i];
var bs=bo.getLayoutProperties();
var bu=bs.row;
var bl=bs.column;
bs.colSpan=bs.colSpan||1;
bs.rowSpan=bs.rowSpan||1;
if(bu==null||bl==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bo+"' must be defined!");
}
if(bq[bu]&&bq[bu][bl]){throw new Error("Cannot add widget '"+bo+"'!. "+"There is already a widget '"+bq[bu][bl]+"' in this cell ("+bu+", "+bl+")");
}
for(var x=bl;x<bl+bs.colSpan;x++){for(var y=bu;y<bu+bs.rowSpan;y++){if(bq[y]==undefined){bq[y]=[];
}bq[y][x]=bo;
bm=Math.max(bm,x);
bn=Math.max(bn,y);
}}
if(bs.rowSpan>1){br.push(bo);
}
if(bs.colSpan>1){bp.push(bo);
}}for(var y=0;y<=bn;y++){if(bq[y]==undefined){bq[y]=[];
}}this.__jw=bq;
this.__jx=bp;
this.__jy=br;
this.__jz=bn;
this.__jA=bm;
this.__jB=null;
this.__jC=null;
delete this._invalidChildrenCache;
},_setRowData:function(ba,bb,bc){var bd=this.__ju[ba];

if(!bd){this.__ju[ba]={};
this.__ju[ba][bb]=bc;
}else{bd[bb]=bc;
}},_setColumnData:function(v,w,z){var A=this.__jv[v];

if(!A){this.__jv[v]={};
this.__jv[v][w]=z;
}else{A[w]=z;
}},setSpacing:function(bI){this.setSpacingY(bI);
this.setSpacingX(bI);
return this;
},setColumnAlign:function(o,p,q){if(qx.core.Variant.isSet(dm,dC)){this.assertInteger(o,dz);
this.assertInArray(p,[dn,dg,dE]);
this.assertInArray(q,[dp,df,dl]);
}this._setColumnData(o,dk,p);
this._setColumnData(o,dj,q);
this._applyLayoutChange();
return this;
},getColumnAlign:function(f){var g=this.__jv[f]||{};
return {vAlign:g.vAlign||dp,hAlign:g.hAlign||dn};
},setRowAlign:function(bY,ca,cb){if(qx.core.Variant.isSet(dm,dC)){this.assertInteger(bY,dq);
this.assertInArray(ca,[dn,dg,dE]);
this.assertInArray(cb,[dp,df,dl]);
}this._setRowData(bY,dk,ca);
this._setRowData(bY,dj,cb);
this._applyLayoutChange();
return this;
},getRowAlign:function(bJ){var bK=this.__ju[bJ]||{};
return {vAlign:bK.vAlign||dp,hAlign:bK.hAlign||dn};
},getCellWidget:function(dM,dN){if(this._invalidChildrenCache){this.__jD();
}var dM=this.__jw[dM]||{};
return dM[dN]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jD();
}return this.__jz+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jD();
}return this.__jA+1;
},getCellAlign:function(dQ,dR){var dX=dp;
var dV=dn;
var dW=this.__ju[dQ];
var dT=this.__jv[dR];
var dS=this.__jw[dQ][dR];

if(dS){var dU={vAlign:dS.getAlignY(),hAlign:dS.getAlignX()};
}else{dU={};
}if(dU.vAlign){dX=dU.vAlign;
}else if(dW&&dW.vAlign){dX=dW.vAlign;
}else if(dT&&dT.vAlign){dX=dT.vAlign;
}if(dU.hAlign){dV=dU.hAlign;
}else if(dT&&dT.hAlign){dV=dT.hAlign;
}else if(dW&&dW.hAlign){dV=dW.hAlign;
}return {vAlign:dX,hAlign:dV};
},setColumnFlex:function(h,k){this._setColumnData(h,dD,k);
this._applyLayoutChange();
return this;
},getColumnFlex:function(V){var W=this.__jv[V]||{};
return W.flex!==undefined?W.flex:0;
},setRowFlex:function(be,bf){this._setRowData(be,dD,bf);
this._applyLayoutChange();
return this;
},getRowFlex:function(dF){var dG=this.__ju[dF]||{};
var dH=dG.flex!==undefined?dG.flex:0;
return dH;
},setColumnMaxWidth:function(bG,bH){this._setColumnData(bG,ds,bH);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(en){var eo=this.__jv[en]||{};
return eo.maxWidth!==undefined?eo.maxWidth:Infinity;
},setColumnWidth:function(bW,bX){this._setColumnData(bW,dt,bX);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dI){var dJ=this.__jv[dI]||{};
return dJ.width!==undefined?dJ.width:null;
},setColumnMinWidth:function(dK,dL){this._setColumnData(dK,dr,dL);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(r){var s=this.__jv[r]||{};
return s.minWidth||0;
},setRowMaxHeight:function(cj,ck){this._setRowData(cj,dv,ck);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(t){var u=this.__ju[t]||{};
return u.maxHeight||Infinity;
},setRowHeight:function(m,n){this._setRowData(m,dB,n);
this._applyLayoutChange();
return this;
},getRowHeight:function(dO){var dP=this.__ju[dO]||{};
return dP.height!==undefined?dP.height:null;
},setRowMinHeight:function(bj,bk){this._setRowData(bj,du,bk);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(X){var Y=this.__ju[X]||{};
return Y.minHeight||0;
},__jE:function(a){var e=a.getSizeHint();
var d=a.getMarginLeft()+a.getMarginRight();
var c=a.getMarginTop()+a.getMarginBottom();
var b={height:e.height+c,width:e.width+d,minHeight:e.minHeight+c,minWidth:e.minWidth+d,maxHeight:e.maxHeight+c,maxWidth:e.maxWidth+d};
return b;
},_fixHeightsRowSpan:function(cQ){var dc=this.getSpacingY();

for(var i=0,l=this.__jy.length;i<l;i++){var cT=this.__jy[i];
var cV=this.__jE(cT);
var cW=cT.getLayoutProperties();
var cS=cW.row;
var da=dc*(cW.rowSpan-1);
var cR=da;
var cY={};

for(var j=0;j<cW.rowSpan;j++){var de=cW.row+j;
var cU=cQ[de];
var dd=this.getRowFlex(de);

if(dd>0){cY[de]={min:cU.minHeight,value:cU.height,max:cU.maxHeight,flex:dd};
}da+=cU.height;
cR+=cU.minHeight;
}if(da<cV.height){var db=qx.ui.layout.Util.computeFlexOffsets(cY,cV.height,da);

for(var j=0;j<cW.rowSpan;j++){var cX=db[cS+j]?db[cS+j].offset:0;
cQ[cS+j].height+=cX;
}}if(cR<cV.minHeight){var db=qx.ui.layout.Util.computeFlexOffsets(cY,cV.minHeight,cR);

for(var j=0;j<cW.rowSpan;j++){var cX=db[cS+j]?db[cS+j].offset:0;
cQ[cS+j].minHeight+=cX;
}}}},_fixWidthsColSpan:function(dY){var ed=this.getSpacingX();

for(var i=0,l=this.__jx.length;i<l;i++){var ea=this.__jx[i];
var ec=this.__jE(ea);
var ef=ea.getLayoutProperties();
var eb=ef.column;
var el=ed*(ef.colSpan-1);
var ee=el;
var eg={};
var ei;

for(var j=0;j<ef.colSpan;j++){var em=ef.column+j;
var ek=dY[em];
var ej=this.getColumnFlex(em);
if(ej>0){eg[em]={min:ek.minWidth,value:ek.width,max:ek.maxWidth,flex:ej};
}el+=ek.width;
ee+=ek.minWidth;
}if(el<ec.width){var eh=qx.ui.layout.Util.computeFlexOffsets(eg,ec.width,el);

for(var j=0;j<ef.colSpan;j++){ei=eh[eb+j]?eh[eb+j].offset:0;
dY[eb+j].width+=ei;
}}if(ee<ec.minWidth){var eh=qx.ui.layout.Util.computeFlexOffsets(eg,ec.minWidth,ee);

for(var j=0;j<ef.colSpan;j++){ei=eh[eb+j]?eh[eb+j].offset:0;
dY[eb+j].minWidth+=ei;
}}}},_getRowHeights:function(){if(this.__jB!=null){return this.__jB;
}var bU=[];
var bN=this.__jz;
var bM=this.__jA;

for(var bV=0;bV<=bN;bV++){var bO=0;
var bQ=0;
var bP=0;

for(var bT=0;bT<=bM;bT++){var bL=this.__jw[bV][bT];

if(!bL){continue;
}var bR=bL.getLayoutProperties().rowSpan||0;

if(bR>1){continue;
}var bS=this.__jE(bL);

if(this.getRowFlex(bV)>0){bO=Math.max(bO,bS.minHeight);
}else{bO=Math.max(bO,bS.height);
}bQ=Math.max(bQ,bS.height);
}var bO=Math.max(bO,this.getRowMinHeight(bV));
var bP=this.getRowMaxHeight(bV);

if(this.getRowHeight(bV)!==null){var bQ=this.getRowHeight(bV);
}else{var bQ=Math.max(bO,Math.min(bQ,bP));
}bU[bV]={minHeight:bO,height:bQ,maxHeight:bP};
}
if(this.__jy.length>0){this._fixHeightsRowSpan(bU);
}this.__jB=bU;
return bU;
},_getColWidths:function(){if(this.__jC!=null){return this.__jC;
}var bz=[];
var bw=this.__jA;
var by=this.__jz;

for(var bE=0;bE<=bw;bE++){var bC=0;
var bB=0;
var bx=Infinity;

for(var bF=0;bF<=by;bF++){var bv=this.__jw[bF][bE];

if(!bv){continue;
}var bA=bv.getLayoutProperties().colSpan||0;

if(bA>1){continue;
}var bD=this.__jE(bv);

if(this.getColumnFlex(bE)>0){bB=Math.max(bB,bD.minWidth);
}else{bB=Math.max(bB,bD.width);
}bC=Math.max(bC,bD.width);
}var bB=Math.max(bB,this.getColumnMinWidth(bE));
var bx=this.getColumnMaxWidth(bE);

if(this.getColumnWidth(bE)!==null){var bC=this.getColumnWidth(bE);
}else{var bC=Math.max(bB,Math.min(bC,bx));
}bz[bE]={minWidth:bB,width:bC,maxWidth:bx};
}
if(this.__jx.length>0){this._fixWidthsColSpan(bz);
}this.__jC=bz;
return bz;
},_getColumnFlexOffsets:function(M){var N=this.getSizeHint();
var R=M-N.width;

if(R==0){return {};
}var P=this._getColWidths();
var O={};

for(var i=0,l=P.length;i<l;i++){var S=P[i];
var Q=this.getColumnFlex(i);

if((Q<=0)||(S.width==S.maxWidth&&R>0)||(S.width==S.minWidth&&R<0)){continue;
}O[i]={min:S.minWidth,value:S.width,max:S.maxWidth,flex:Q};
}return qx.ui.layout.Util.computeFlexOffsets(O,M,N.width);
},_getRowFlexOffsets:function(cc){var cd=this.getSizeHint();
var cg=cc-cd.height;

if(cg==0){return {};
}var ch=this._getRowHeights();
var ce={};

for(var i=0,l=ch.length;i<l;i++){var ci=ch[i];
var cf=this.getRowFlex(i);

if((cf<=0)||(ci.height==ci.maxHeight&&cg>0)||(ci.height==ci.minHeight&&cg<0)){continue;
}ce[i]={min:ci.minHeight,value:ci.height,max:ci.maxHeight,flex:cf};
}return qx.ui.layout.Util.computeFlexOffsets(ce,cc,cd.height);
},renderLayout:function(cl,cm){if(this._invalidChildrenCache){this.__jD();
}var cA=qx.ui.layout.Util;
var co=this.getSpacingX();
var cu=this.getSpacingY();
var cF=this._getColWidths();
var cE=this._getColumnFlexOffsets(cl);
var cp=[];
var cH=this.__jA;
var cn=this.__jz;
var cG;

for(var cI=0;cI<=cH;cI++){cG=cE[cI]?cE[cI].offset:0;
cp[cI]=cF[cI].width+cG;
}var cx=this._getRowHeights();
var cz=this._getRowFlexOffsets(cm);
var cO=[];

for(var cv=0;cv<=cn;cv++){cG=cz[cv]?cz[cv].offset:0;
cO[cv]=cx[cv].height+cG;
}var cP=0;

for(var cI=0;cI<=cH;cI++){var top=0;

for(var cv=0;cv<=cn;cv++){var cC=this.__jw[cv][cI];
if(!cC){top+=cO[cv]+cu;
continue;
}var cq=cC.getLayoutProperties();
if(cq.row!==cv||cq.column!==cI){top+=cO[cv]+cu;
continue;
}var cN=co*(cq.colSpan-1);

for(var i=0;i<cq.colSpan;i++){cN+=cp[cI+i];
}var cD=cu*(cq.rowSpan-1);

for(var i=0;i<cq.rowSpan;i++){cD+=cO[cv+i];
}var cr=cC.getSizeHint();
var cL=cC.getMarginTop();
var cB=cC.getMarginLeft();
var cy=cC.getMarginBottom();
var ct=cC.getMarginRight();
var cw=Math.max(cr.minWidth,Math.min(cN-cB-ct,cr.maxWidth));
var cM=Math.max(cr.minHeight,Math.min(cD-cL-cy,cr.maxHeight));
var cJ=this.getCellAlign(cv,cI);
var cK=cP+cA.computeHorizontalAlignOffset(cJ.hAlign,cw,cN,cB,ct);
var cs=top+cA.computeVerticalAlignOffset(cJ.vAlign,cM,cD,cL,cy);
cC.renderLayout(cK,cs,cw,cM);
top+=cO[cv]+cu;
}cP+=cp[cI]+co;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jC=null;
this.__jB=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jD();
}var F=this._getColWidths();
var H=0,I=0;

for(var i=0,l=F.length;i<l;i++){var J=F[i];

if(this.getColumnFlex(i)>0){H+=J.minWidth;
}else{H+=J.width;
}I+=J.width;
}var K=this._getRowHeights();
var D=0,G=0;

for(var i=0,l=K.length;i<l;i++){var L=K[i];

if(this.getRowFlex(i)>0){D+=L.minHeight;
}else{D+=L.height;
}G+=L.height;
}var C=this.getSpacingX()*(F.length-1);
var B=this.getSpacingY()*(K.length-1);
var E={minWidth:H+C,width:I+C,minHeight:D+B,height:G+B};
return E;
}},destruct:function(){this.__jw=this.__ju=this.__jv=this.__jx=this.__jy=this.__jC=this.__jB=null;
}});
})();
(function(){var o="open",n="auto",m="qx.debug",k="middle",j="icon",h="label",g="on",f="changeOpen",d="excluded",c="visible",K="String",J="opened",I="always",H="qx.ui.tree.AbstractTreeItem",G="addItem",F="Boolean",E="Invalid child index: ",D="Integer",C="_applyIndent",B="changeOpenSymbolMode",v="_applyOpenSymbolMode",w="resize",t="",u="removeItem",r="__lA",s="__lE",p="abstract",q="never",x="_applyIcon",y="__lB",A="_applyOpen",z="_applyLabel";
qx.Class.define(H,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__lA=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:F,init:false,event:f,apply:A},openSymbolMode:{check:[I,q,n],init:n,event:B,apply:v},indent:{check:D,init:19,apply:C,themeable:true},parent:{check:H,nullable:true},icon:{check:K,apply:x,nullable:true,themeable:true},label:{check:K,apply:z,init:t}},members:{__lA:null,__lB:null,__lC:null,__lD:null,__lE:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bJ){var bK;

switch(bJ){case h:bK=new qx.ui.basic.Label().set({alignY:k,value:this.getLabel()});
break;
case j:bK=new qx.ui.basic.Image().set({alignY:k,source:this.getIcon()});
break;
case o:bK=new qx.ui.tree.FolderOpenButton().set({alignY:k});
bK.addListener(f,this._onChangeOpen,this);
bK.addListener(w,this._updateIndent,this);
break;
}return bK||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bJ);
},getTree:function(){var by=this;

while(by.getParent()){by=by.getParent();
}var bx=by.getLayoutParent()?by.getLayoutParent().getLayoutParent():0;

if(bx&&bx instanceof qx.ui.core.scroll.ScrollPane){return bx.getLayoutParent();
}return null;
},addWidget:function(bs,bt){this._add(bs,bt);
},addSpacer:function(){if(!this.__lE){this.__lE=new qx.ui.core.Spacer();
}else{this._remove(this.__lE);
}this._add(this.__lE);
},addOpenButton:function(){this._add(this.getChildControl(o));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bm=this.getChildControl(j);

if(this.__lD){this._remove(bm);
}this._add(bm);
this.__lD=true;
},addLabel:function(U){var V=this.getChildControl(h);

if(this.__lC){this._remove(V);
}
if(U){this.setLabel(U);
}else{V.setValue(this.getLabel());
}this._add(V);
this.__lC=true;
},addState:function(bg){qx.ui.core.Widget.prototype.addState.call(this,bg);
var bi=this._getChildren();

for(var i=0,l=bi.length;i<l;i++){var bh=bi[i];

if(bh.addState){bi[i].addState(bg);
}}},removeState:function(Q){qx.ui.core.Widget.prototype.removeState.call(this,Q);
var S=this._getChildren();

for(var i=0,l=S.length;i<l;i++){var R=S[i];

if(R.addState){S[i].removeState(Q);
}}},_applyIcon:function(bz,bA){var bB=this.getChildControl(j,true);

if(bB){bB.setSource(bz);
}},_applyLabel:function(bC,bD){var bE=this.getChildControl(h,true);

if(bE){bE.setValue(bC);
}},_applyOpen:function(bH,bI){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bH?c:d);
}var open=this.getChildControl(o,true);

if(open){open.setOpen(bH);
}bH?this.addState(J):this.removeState(J);
},isOpenable:function(){var T=this.getOpenSymbolMode();
return (T===I||T===n&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(o,true);

if(!open){return false;
}var bl=this.getTree();

if(!bl.getRootOpenClose()){if(bl.getHideRoot()){if(bl.getRoot()==this.getParent()){return false;
}}else{if(bl.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(be,bf){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var b=0;
var open=this.getChildControl(o,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var a=open.getBounds();

if(a){b=a.width;
}else{return;
}}else{open.exclude();
}}
if(this.__lE){this.__lE.setWidth((this.getLevel()+1)*this.getIndent()-b);
}},_applyIndent:function(bF,bG){this._updateIndent();
},getLevel:function(){var L=this.getTree();

if(!L){return;
}var M=this;
var N=-1;

while(M){M=M.getParent();
N+=1;
}if(L.getHideRoot()){N-=1;
}
if(!L.getRootOpenClose()){N-=1;
}return N;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__lB){this.__lB=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?c:d});
}return this.__lB;
},hasChildrenContainer:function(){return this.__lB;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__lA;
},hasChildren:function(){return this.__lA?this.__lA.length>0:false;
},getItems:function(bR,bS,bT){if(bT!==false){var bU=[];
}else{var bU=[this];
}var bX=this.hasChildren()&&(bS!==false||this.isOpen());

if(bX){var bW=this.getChildren();

if(bR===false){bU=bU.concat(bW);
}else{for(var i=0,bV=bW.length;i<bV;i++){bU=bU.concat(bW[i].getItems(bR,bS,false));
}}}return bU;
},recursiveAddToWidgetQueue:function(){var bu=this.getItems(true,true,false);

for(var i=0,l=bu.length;i<l;i++){qx.ui.core.queue.Widget.add(bu[i]);
}},__lF:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bL){var bM=this.getChildrenContainer();
var bP=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bQ=arguments[i];
var bO=bQ.getParent();

if(bO){bO.remove(bQ);
}bQ.setParent(this);
var bN=this.hasChildren();
bM.add(bQ);

if(bQ.hasChildren()){bM.add(bQ.getChildrenContainer());
}this.__lA.push(bQ);

if(!bN){this.__lF();
}
if(bP){bQ.recursiveAddToWidgetQueue();
bP.fireNonBubblingEvent(G,qx.event.type.Data,[bQ]);
}}
if(bP){qx.ui.core.queue.Widget.add(this);
}},addAt:function(X,Y){if(qx.core.Variant.isSet(m,g)){this.assert(Y<=this.__lA.length&&Y>=0,E+Y);
}
if(Y==this.__lA.length){this.add(X);
return;
}var bd=X.getParent();

if(bd){bd.remove(X);
}var bb=this.getChildrenContainer();
X.setParent(this);
var bc=this.hasChildren();
var ba=this.__lA[Y];
bb.addBefore(X,ba);

if(X.hasChildren()){bb.addAfter(X.getChildrenContainer(),X);
}qx.lang.Array.insertAt(this.__lA,X,Y);

if(!bc){this.__lF();
}
if(this.getTree()){X.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(O,P){if(qx.core.Variant.isSet(m,g)){this.assert(this.__lA.indexOf(P)>=0);
}this.addAt(O,this.__lA.indexOf(P));
},addAfter:function(bj,bk){if(qx.core.Variant.isSet(m,g)){this.assert(this.__lA.indexOf(bk)>=0);
}this.addAt(bj,this.__lA.indexOf(bk)+1);
},addAtBegin:function(W){this.addAt(W,0);
},remove:function(bn){for(var i=0,l=arguments.length;i<l;i++){var br=arguments[i];

if(this.__lA.indexOf(br)==-1){this.warn("Cannot remove treeitem '"+br+"'. It is not a child of this tree item.");
return;
}var bo=this.getChildrenContainer();

if(br.hasChildrenContainer()){var bq=br.getChildrenContainer();

if(bo.getChildren().indexOf(bq)>=0){bo.remove(bq);
}}qx.lang.Array.remove(this.__lA,br);
br.setParent(null);
bo.remove(br);
}var bp=this.getTree();

if(bp){bp.fireNonBubblingEvent(u,qx.event.type.Data,[br]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bv){var bw=this.__lA[bv];

if(bw){this.remove(bw);
}},removeAll:function(){for(var i=this.__lA.length-1;i>=0;i--){this.remove(this.__lA[i]);
}}},destruct:function(){this._disposeArray(r);
this._disposeObjects(s,y);
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
(function(){var q="Boolean",p="qx.event.type.Event",o="queued",n="String",m="sending",l="receiving",k="aborted",j="failed",i="nocache",h="completed",Y="qx.io.remote.Response",X="POST",W="configured",V="timeout",U="GET",T="Pragma",S="no-url-params-on-post",R="PUT",Q="no-cache",P="Cache-Control",y="Content-Type",z="text/plain",w="application/xml",x="application/json",t="text/html",u="qx.ioRemoteDebug",r="application/x-www-form-urlencoded",s="qx.io.remote.Exchange",A="Integer",B="X-Qooxdoo-Response-Type",H="HEAD",G="qx.io.remote.Request",J="qx.debug",I="_applyResponseType",L="_applyState",K="text/javascript",D="changeState",O="_applyProhibitCaching",N="",M="_applyMethod",C="DELETE",E="boolean",F="on";
qx.Class.define(G,{extend:qx.core.Object,construct:function(bk,bl,bm){qx.core.Object.call(this);
this.__qG={};
this.__qH={};
this.__qI={};
this.__qJ={};

if(bk!==undefined){this.setUrl(bk);
}
if(bl!==undefined){this.setMethod(bl);
}
if(bm!==undefined){this.setResponseType(bm);
}this.setProhibitCaching(true);
this.__qK=++qx.io.remote.Request.__qK;
},events:{"created":p,"configured":p,"sending":p,"receiving":p,"completed":Y,"aborted":p,"failed":Y,"timeout":Y},statics:{__qK:0,methodAllowsRequestBody:function(bj){return (bj==X)||(bj==R);
}},properties:{url:{check:n,init:N},method:{check:[U,X,R,H,C],apply:M,init:U},asynchronous:{check:q,init:true},data:{check:n,nullable:true},username:{check:n,nullable:true},password:{check:n,nullable:true},state:{check:[W,o,m,l,h,k,V,j],init:W,apply:L,event:D},responseType:{check:[z,K,x,w,t],init:z,apply:I},timeout:{check:A,nullable:true},prohibitCaching:{check:function(v){return typeof v==E||v===S;
},init:true,apply:O},crossDomain:{check:q,init:false},fileUpload:{check:q,init:false},transport:{check:s,nullable:true},useBasicHttpAuth:{check:q,init:false},parseJson:{check:q,init:true}},members:{__qG:null,__qH:null,__qI:null,__qJ:null,__qK:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case m:case l:this.error("Aborting already sent request!");
case o:this.abort();
break;
}},isConfigured:function(){return this.getState()===W;
},isQueued:function(){return this.getState()===o;
},isSending:function(){return this.getState()===m;
},isReceiving:function(){return this.getState()===l;
},isCompleted:function(){return this.getState()===h;
},isAborted:function(){return this.getState()===k;
},isTimeout:function(){return this.getState()===V;
},isFailed:function(){return this.getState()===j;
},__qL:function(e){var bn=e.clone();
bn.setTarget(this);
this.dispatchEvent(bn);
},_onqueued:function(e){this.setState(o);
this.__qL(e);
},_onsending:function(e){this.setState(m);
this.__qL(e);
},_onreceiving:function(e){this.setState(l);
this.__qL(e);
},_oncompleted:function(e){this.setState(h);
this.__qL(e);
this.dispose();
},_onaborted:function(e){this.setState(k);
this.__qL(e);
this.dispose();
},_ontimeout:function(e){this.setState(V);
this.__qL(e);
this.dispose();
},_onfailed:function(e){this.setState(j);
this.__qL(e);
this.dispose();
},_applyState:function(c,d){if(qx.core.Variant.isSet(J,F)){if(qx.core.Setting.get(u)){this.debug("State: "+c);
}}},_applyProhibitCaching:function(bw,bx){if(!bw){this.removeParameter(i);
this.removeRequestHeader(T);
this.removeRequestHeader(P);
return;
}if(bw!==S||this.getMethod()!=X){this.setParameter(i,new Date().valueOf());
}else{this.removeParameter(i);
}this.setRequestHeader(T,Q);
this.setRequestHeader(P,Q);
},_applyMethod:function(bo,bp){if(qx.io.remote.Request.methodAllowsRequestBody(bo)){this.setRequestHeader(y,r);
}else{this.removeRequestHeader(y);
}var bq=this.getProhibitCaching();
this._applyProhibitCaching(bq,bq);
},_applyResponseType:function(f,g){this.setRequestHeader(B,f);
},setRequestHeader:function(ba,bb){this.__qG[ba]=bb;
},removeRequestHeader:function(bd){delete this.__qG[bd];
},getRequestHeader:function(bg){return this.__qG[bg]||null;
},getRequestHeaders:function(){return this.__qG;
},setParameter:function(br,bs,bt){if(bt){this.__qI[br]=bs;
}else{this.__qH[br]=bs;
}},removeParameter:function(be,bf){if(bf){delete this.__qI[be];
}else{delete this.__qH[be];
}},getParameter:function(bh,bi){if(bi){return this.__qI[bh]||null;
}else{return this.__qH[bh]||null;
}},getParameters:function(bv){return (bv?this.__qI:this.__qH);
},setFormField:function(a,b){this.__qJ[a]=b;
},removeFormField:function(bu){delete this.__qJ[bu];
},getFormField:function(bc){return this.__qJ[bc]||null;
},getFormFields:function(){return this.__qJ;
},getSequenceNumber:function(){return this.__qK;
}},destruct:function(){this.setTransport(null);
this.__qG=this.__qH=this.__qI=this.__qJ=null;
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
(function(){var n="qx.ioRemoteDebug",m="Integer",l="qx.debug",k="on",j="aborted",h="_onaborted",g="_on",f="Boolean",d="singleton",c="interval",z="receiving",y="Request-Queue Progress: ",x="queued",w="/",v="_applyEnabled",u="__qN",t="sending",s="completed",r="failed",q="__qP",o="qx.io.remote.RequestQueue",p="timeout";
qx.Class.define(o,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qM=[];
this.__qN=[];
this.__qO=0;
this.__qP=new qx.event.Timer(500);
this.__qP.addListener(c,this._oninterval,this);
},properties:{enabled:{init:true,check:f,apply:v},maxTotalRequests:{check:m,nullable:true},maxConcurrentRequests:{check:m,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:m,init:5000}},members:{__qM:null,__qN:null,__qO:null,__qP:null,getRequestQueue:function(){return this.__qM;
},getActiveQueue:function(){return this.__qN;
},_debug:function(){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){var N=this.__qN.length+w+(this.__qM.length+this.__qN.length);
this.debug("Progress: "+N);
window.status=y+N;
}}},_check:function(){this._debug();
if(this.__qN.length==0&&this.__qM.length==0){this.__qP.stop();
}if(!this.getEnabled()){return;
}if(this.__qM.length==0||(this.__qM[0].isAsynchronous()&&this.__qN.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__qO>=this.getMaxTotalRequests()){return;
}var a=this.__qM.shift();
var b=new qx.io.remote.Exchange(a);
this.__qO++;
this.__qN.push(b);
this._debug();
b.addListener(t,this._onsending,this);
b.addListener(z,this._onreceiving,this);
b.addListener(s,this._oncompleted,this);
b.addListener(j,this._oncompleted,this);
b.addListener(p,this._oncompleted,this);
b.addListener(r,this._oncompleted,this);
b._start=(new Date).valueOf();
b.send();
if(this.__qM.length>0){this._check();
}},_remove:function(E){qx.lang.Array.remove(this.__qN,E);
E.dispose();
this._check();
},__qQ:0,_onsending:function(e){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){this.__qQ++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__qQ);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){if(e.getTarget()._counted){this.__qQ--;
this.debug("ActiveCount: "+this.__qQ);
}}}var Q=e.getTarget().getRequest();
var P=g+e.getType();
try{if(Q[P]){Q[P](e);
}}catch(A){var O=qx.dev.StackTrace.getStackTraceFromError(A);
this.error("Request "+Q+" handler "+P+" threw an error: "+A+"\nStack Trace:\n"+O);
try{if(Q[h]){var event=qx.event.Registration.createEvent(j,qx.event.type.Event);
Q[h](event);
}}catch(F){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var M=this.__qN;

if(M.length==0){this.__qP.stop();
return;
}var H=(new Date).valueOf();
var K;
var I;
var L=this.getDefaultTimeout();
var J;
var G;

for(var i=M.length-1;i>=0;i--){K=M[i];
I=K.getRequest();

if(I.isAsynchronous()){J=I.getTimeout();
if(J==0){continue;
}
if(J==null){J=L;
}G=H-K._start;

if(G>J){this.warn("Timeout: transport "+K.toHashCode());
this.warn(G+"ms > "+J+"ms");
K.timeout();
}}}},_applyEnabled:function(B,C){if(B){this._check();
}this.__qP.setEnabled(B);
},add:function(D){D.setState(x);

if(D.isAsynchronous()){this.__qM.push(D);
}else{this.__qM.unshift(D);
}this._check();

if(this.getEnabled()){this.__qP.start();
}},abort:function(R){var S=R.getTransport();

if(S){S.abort();
}else if(qx.lang.Array.contains(this.__qM,R)){qx.lang.Array.remove(this.__qM,R);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(q);
this.__qM=null;
}});
})();
(function(){var T="qx.ioRemoteDebug",S="qx.debug",R="on",Q="failed",P="sending",O="completed",N="receiving",M="aborted",L="timeout",K="qx.event.type.Event",bV="Connection dropped",bU="qx.io.remote.Response",bT="configured",bS="Unknown status code. ",bR="=",bQ="qx.io.remote.transport.XmlHttp",bP="qx.io.remote.transport.Abstract",bO="Request-URL too large",bN="MSHTML-specific HTTP status code",bM="Not available",bb="Precondition failed",bc="Server error",Y="&",ba="qx.io.remote.Exchange",W="Possibly due to a cross-domain request?",X="Bad gateway",U="Gone",V="See other",bh="Partial content",bi="Server timeout",bs="qx.io.remote.transport.Script",bp="HTTP version not supported",bA="Unauthorized",bv="Possibly due to application URL using 'file:' protocol?",bI="Multiple choices",bF="Payment required",bl="Not implemented",bL="Proxy authentication required",bK="Length required",bJ="_applyState",bk="changeState",bn="Not modified",bo="Not acceptable",br="qx.io.remote.Request",bt="Connection closed by server",bw="Moved permanently",bC="_applyImplementation",bH="Method not allowed",bd="Moved temporarily",be="Forbidden",bm="Use proxy",bz="Ok",by="Conflict",bx="Not found",bE="Request time-out",bD="Bad request",bu="No content",bB="file:",H="qx.io.remote.transport.Iframe",bG="Request entity too large",bf="Unknown status code",bg="Unsupported media type",bq="Gateway time-out",I="created",J="Out of resources",bj="undefined";
qx.Class.define(ba,{extend:qx.core.Object,construct:function(m){qx.core.Object.call(this);
this.setRequest(m);
m.setTransport(this);
},events:{"sending":K,"receiving":K,"completed":bU,"aborted":K,"failed":bU,"timeout":bU},statics:{typesOrder:[bQ,H,bs],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bW,bX){qx.io.remote.Exchange.typesAvailable[bX]=bW;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var t in qx.io.remote.Exchange.typesAvailable){var s=qx.io.remote.Exchange.typesAvailable[t];

if(s.isSupported()){qx.io.remote.Exchange.typesSupported[t]=s;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(v,w,x){if(!qx.lang.Array.contains(v.handles.responseTypes,x)){return false;
}
for(var y in w){if(!v.handles[y]){return false;
}}return true;
},_nativeMap:{0:I,1:bT,2:P,3:N,4:O},wasSuccessful:function(E,F,G){if(G){switch(E){case null:case 0:return true;
case -1:return F<4;
default:return typeof E===bj;
}}else{switch(E){case -1:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)&&F>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+F);
}}return F<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)&&F===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return F!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+E);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+E);
}}return false;
default:if(E>206&&E<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+E+" ("+F+")");
return false;
}}},statusCodeToString:function(z){switch(z){case -1:return bM;
case 0:var A=window.location.href;
if(qx.lang.String.startsWith(A.toLowerCase(),bB)){return (bS+bv);
}else{return (bS+W);
}break;
case 200:return bz;
case 304:return bn;
case 206:return bh;
case 204:return bu;
case 300:return bI;
case 301:return bw;
case 302:return bd;
case 303:return V;
case 305:return bm;
case 400:return bD;
case 401:return bA;
case 402:return bF;
case 403:return be;
case 404:return bx;
case 405:return bH;
case 406:return bo;
case 407:return bL;
case 408:return bE;
case 409:return by;
case 410:return U;
case 411:return bK;
case 412:return bb;
case 413:return bG;
case 414:return bO;
case 415:return bg;
case 500:return bc;
case 501:return bl;
case 502:return X;
case 503:return J;
case 504:return bq;
case 505:return bp;
case 12002:return bi;
case 12029:return bV;
case 12030:return bV;
case 12031:return bV;
case 12152:return bt;
case 13030:return bN;
default:return bf;
}}},properties:{request:{check:br,nullable:true},implementation:{check:bP,nullable:true,apply:bC},state:{check:[bT,P,N,O,M,L,Q],init:bT,event:bk,apply:bJ}},members:{send:function(){var cc=this.getRequest();

if(!cc){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var ca=qx.io.remote.Exchange.typesOrder;
var bY=qx.io.remote.Exchange.typesSupported;
var ce=cc.getResponseType();
var cf={};

if(cc.getAsynchronous()){cf.asynchronous=true;
}else{cf.synchronous=true;
}
if(cc.getCrossDomain()){cf.crossDomain=true;
}
if(cc.getFileUpload()){cf.fileUpload=true;
}for(var cd in cc.getFormFields()){cf.programaticFormFields=true;
break;
}var cg,cb;

for(var i=0,l=ca.length;i<l;i++){cg=bY[ca[i]];

if(cg){if(!qx.io.remote.Exchange.canHandle(cg,cf,ce)){continue;
}
try{if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){this.debug("Using implementation: "+cg.classname);
}}cb=new cg;
this.setImplementation(cb);
cb.setUseBasicHttpAuth(cc.getUseBasicHttpAuth());
cb.send();
return true;
}catch(D){this.error("Request handler throws error");
this.error(D);
return;
}}}this.error("There is no transport implementation available to handle this request: "+cc);
},abort:function(){var C=this.getImplementation();

if(C){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){this.debug("Abort: implementation "+C.toHashCode());
}}C.abort();
}else{if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){this.debug("Abort: forcing state to be aborted");
}}this.setState(M);
}},timeout:function(){var u=this.getImplementation();

if(u){this.warn("Timeout: implementation "+u.toHashCode());
u.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(L);
}this.__qR();
},__qR:function(){var a=this.getRequest();

if(a){a.setTimeout(0);
}},_onsending:function(e){this.setState(P);
},_onreceiving:function(e){this.setState(N);
},_oncompleted:function(e){this.setState(O);
},_onabort:function(e){this.setState(M);
},_onfailed:function(e){this.setState(Q);
},_ontimeout:function(e){this.setState(L);
},_applyImplementation:function(b,c){if(c){c.removeListener(P,this._onsending,this);
c.removeListener(N,this._onreceiving,this);
c.removeListener(O,this._oncompleted,this);
c.removeListener(M,this._onabort,this);
c.removeListener(L,this._ontimeout,this);
c.removeListener(Q,this._onfailed,this);
}
if(b){var f=this.getRequest();
b.setUrl(f.getUrl());
b.setMethod(f.getMethod());
b.setAsynchronous(f.getAsynchronous());
b.setUsername(f.getUsername());
b.setPassword(f.getPassword());
b.setParameters(f.getParameters(false));
b.setFormFields(f.getFormFields());
b.setRequestHeaders(f.getRequestHeaders());
if(b instanceof qx.io.remote.transport.XmlHttp){b.setParseJson(f.getParseJson());
}var j=f.getData();

if(j===null){var k=f.getParameters(true);
var h=[];

for(var d in k){var g=k[d];

if(g instanceof Array){for(var i=0;i<g.length;i++){h.push(encodeURIComponent(d)+bR+encodeURIComponent(g[i]));
}}else{h.push(encodeURIComponent(d)+bR+encodeURIComponent(g));
}}
if(h.length>0){b.setData(h.join(Y));
}}else{b.setData(j);
}b.setResponseType(f.getResponseType());
b.addListener(P,this._onsending,this);
b.addListener(N,this._onreceiving,this);
b.addListener(O,this._oncompleted,this);
b.addListener(M,this._onabort,this);
b.addListener(L,this._ontimeout,this);
b.addListener(Q,this._onfailed,this);
}},_applyState:function(n,o){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){this.debug("State: "+o+" => "+n);
}}
switch(n){case P:this.fireEvent(P);
break;
case N:this.fireEvent(N);
break;
case O:case M:case L:case Q:var q=this.getImplementation();

if(!q){break;
}this.__qR();

if(this.hasListener(n)){var r=qx.event.Registration.createEvent(n,qx.io.remote.Response);

if(n==O){var p=q.getResponseContent();
r.setContent(p);
if(p===null){if(qx.core.Variant.isSet(S,R)){if(qx.core.Setting.get(T)){this.debug("Altered State: "+n+" => failed");
}}n=Q;
}}else if(n==Q){r.setContent(q.getResponseContent());
}r.setStatusCode(q.getStatusCode());
r.setResponseHeaders(q.getResponseHeaders());
this.dispatchEvent(r);
}this.setImplementation(null);
q.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var B=this.getImplementation();

if(B){this.setImplementation(null);
B.dispose();
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
},setRequestHeader:function(w,x){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(y){throw new Error("getResponseHeader is abstract");
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
var N=(new Date).valueOf();
var O=B+N;
var P=w+N;
if(qx.core.Variant.isSet(b,v)){this.__qS=document.createElement(o+O+y);
}else{this.__qS=document.createElement(x);
}this.__qS.src=s;
this.__qS.id=this.__qS.name=O;
this.__qS.onload=qx.lang.Function.bind(this._onload,this);
this.__qS.style.display=J;
document.body.appendChild(this.__qS);
this.__qT=document.createElement(q);
this.__qT.target=O;
this.__qT.id=this.__qT.name=P;
this.__qT.style.display=J;
document.body.appendChild(this.__qT);
this.__qU=document.createElement(K);
this.__qU.id=this.__qU.name=u;
this.__qT.appendChild(this.__qU);
this.__qS.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[I,H,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__qU:null,__qV:0,__qT:null,__qS:null,send:function(){var U=this.getMethod();
var W=this.getUrl();
var bb=this.getParameters(false);
var ba=[];

for(var V in bb){var X=bb[V];

if(X instanceof Array){for(var i=0;i<X.length;i++){ba.push(encodeURIComponent(V)+j+encodeURIComponent(X[i]));
}}else{ba.push(encodeURIComponent(V)+j+encodeURIComponent(X));
}}
if(ba.length>0){W+=(W.indexOf(E)>=0?h:E)+ba.join(h);
}if(this.getData()===null){var bb=this.getParameters(true);
var ba=[];

for(var V in bb){var X=bb[V];

if(X instanceof Array){for(var i=0;i<X.length;i++){ba.push(encodeURIComponent(V)+j+encodeURIComponent(X[i]));
}}else{ba.push(encodeURIComponent(V)+j+encodeURIComponent(X));
}}
if(ba.length>0){this.setData(ba.join(h));
}}var T=this.getFormFields();

for(var V in T){var Y=document.createElement(K);
Y.name=V;
Y.appendChild(document.createTextNode(T[V]));
this.__qT.appendChild(Y);
}this.__qT.action=W;
this.__qT.method=U;
this.__qU.appendChild(document.createTextNode(this.getData()));
this.__qT.submit();
this.setState(p);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__qT.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__qS.readyState]);
}),_switchReadyState:function(L){switch(this.getState()){case F:case t:case n:case A:this.warn("Ignore Ready State Change");
return;
}while(this.__qV<L){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qV]);
}},setRequestHeader:function(bd,be){},getResponseHeader:function(R){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__qS);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__qS);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__qS);
},getIframeTextContent:function(){var Q=this.getIframeBody();

if(!Q){return null;
}
if(!Q.firstChild){return G;
}if(Q.firstChild.tagName&&Q.firstChild.tagName.toLowerCase()==r){return Q.firstChild.innerHTML;
}else{return Q.innerHTML;
}},getIframeHtmlContent:function(){var M=this.getIframeBody();
return M?M.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var S=this.getIframeTextContent();

switch(this.getResponseType()){case I:if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return S;
break;
case d:S=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return S;
break;
case f:S=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return S&&S.length>0?qx.util.Json.parse(S,false):null;
}catch(bc){return this.error("Could not execute json: ("+S+")",bc);
}case H:S=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return S&&S.length>0?window.eval(S):null;
}catch(a){return this.error("Could not execute javascript: ("+S+")",a);
}case g:S=this.getIframeDocument();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return S;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__qS){this.__qS.onload=null;
this.__qS.onreadystatechange=null;
if(qx.core.Variant.isSet(b,C)){this.__qS.src=qx.util.ResourceManager.getInstance().toUri(z);
}document.body.removeChild(this.__qS);
}
if(this.__qT){document.body.removeChild(this.__qT);
}this.__qS=this.__qT=this.__qU=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j='"',h="))",g=':',f="qx.jsonDebugging",e='-',Q='\\u00',P="__jX",O='\\\\',N='\\f',M="__jN",L='\\"',K='Z',J='T',I="}",H="__jP",w='(',x='.',u="{",v='\\r',s=":",t='\\t',q="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",r="]",y="qx.jsonEncodeUndefined",z="__jY",C="[",B="__jO",E='\\b',D="qx.util.Json",G=')',F='\\n',A="__jQ";
qx.Class.define(D,{statics:{__jL:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__jM:{"function":M,"boolean":B,"number":H,"string":A,"object":P,"undefined":z},__jN:function(bq,br){return String(bq);
},__jO:function(c,d){return String(c);
},__jP:function(bg,bh){return isFinite(bg)?String(bg):m;
},__jQ:function(bj,bk){var bl;

if(/["\\\x00-\x1f]/.test(bj)){bl=bj.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__jS);
}else{bl=bj;
}return j+bl+j;
},__jR:{'\b':E,'\t':t,'\n':F,'\f':N,'\r':v,'"':L,'\\':O},__jS:function(a,b){var bf=qx.util.Json.__jR[b];

if(bf){return bf;
}bf=b.charCodeAt();
return Q+Math.floor(bf/16).toString(16)+(bf%16).toString(16);
},__jT:function(U,V){var X=[],bb=true,ba,W;
var Y=qx.util.Json.__kb;
X.push(C);

if(Y){qx.util.Json.__jU+=qx.util.Json.BEAUTIFYING_INDENT;
X.push(qx.util.Json.__jU);
}
for(var i=0,l=U.length;i<l;i++){W=U[i];
ba=this.__jM[typeof W];

if(ba){W=this[ba](W,i+o);

if(typeof W==n){if(!bb){X.push(p);

if(Y){X.push(qx.util.Json.__jU);
}}X.push(W);
bb=false;
}}}
if(Y){qx.util.Json.__jU=qx.util.Json.__jU.substring(0,qx.util.Json.__jU.length-qx.util.Json.BEAUTIFYING_INDENT.length);
X.push(qx.util.Json.__jU);
}X.push(r);
return X.join(o);
},__jV:function(bs,bt){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
var bv=bs.getUTCFullYear()+p+bs.getUTCMonth()+p+bs.getUTCDate()+p+bs.getUTCHours()+p+bs.getUTCMinutes()+p+bs.getUTCSeconds()+p+bs.getUTCMilliseconds();
return k+bv+h;
}else if(!qx.util.Json.CONVERT_DATES){if(bs.toJSON){return bs.toJSON();
}var bu=qx.util.format.NumberFormat.getInstance();
bu.setMinimumIntegerDigits(2);
var bw=bs.getUTCFullYear()+e+bu.format(bs.getUTCMonth()+1)+e+bu.format(bs.getUTCDate())+J+bu.format(bs.getUTCHours())+g+bu.format(bs.getUTCMinutes())+g+bu.format(bs.getUTCSeconds())+x;
bu.setMinimumIntegerDigits(3);
return bw+bu.format(bs.getUTCMilliseconds())+K;
}else{var bv=bs.getUTCFullYear()+p+bs.getUTCMonth()+p+bs.getUTCDate()+p+bs.getUTCHours()+p+bs.getUTCMinutes()+p+bs.getUTCSeconds()+p+bs.getUTCMilliseconds();
return k+bv+h;
}},__jW:function(bA,bB){var bE=[],bG=true,bD,bC;
var bF=qx.util.Json.__kb;
bE.push(u);

if(bF){qx.util.Json.__jU+=qx.util.Json.BEAUTIFYING_INDENT;
bE.push(qx.util.Json.__jU);
}
for(var bB in bA){bC=bA[bB];
bD=this.__jM[typeof bC];

if(bD){bC=this[bD](bC,bB);

if(typeof bC==n){if(!bG){bE.push(p);

if(bF){bE.push(qx.util.Json.__jU);
}}bE.push(this.__jQ(bB),s,bC);
bG=false;
}}}
if(bF){qx.util.Json.__jU=qx.util.Json.__jU.substring(0,qx.util.Json.__jU.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bE.push(qx.util.Json.__jU);
}bE.push(I);
return bE.join(o);
},__jX:function(bo,bp){if(bo){if(qx.lang.Type.isFunction(bo.toJSON)&&bo.toJSON!==this.__jL){return this.__ka(bo.toJSON(bp),bp);
}else if(qx.lang.Type.isDate(bo)){return this.__jV(bo,bp);
}else if(qx.lang.Type.isArray(bo)){return this.__jT(bo,bp);
}else if(qx.lang.Type.isObject(bo)){return this.__jW(bo,bp);
}return o;
}return m;
},__jY:function(bm,bn){if(qx.core.Setting.get(y)){return m;
}},__ka:function(S,T){return this[this.__jM[typeof S]](S,T);
},stringify:function(bx,by){this.__kb=by;
this.__jU=this.BEAUTIFYING_LINE_END;
var bz=this.__ka(bx,o);

if(typeof bz!=n){bz=null;
}if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON request: "+bz);
}return bz;
},parse:function(bc,bd){if(bd===undefined){bd=true;
}
if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON response: "+bc);
}
if(bd){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bc.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var be=(bc&&bc.length>0)?eval(w+bc+G):null;
return be;
}catch(R){throw new Error("Could not evaluate JSON string: "+R.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bi){bi.__jL=Date.prototype.toJSON;
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(Q){qx.core.Object.call(this);
this.__kc=Q;
},statics:{getIntegerInstance:function(){var u=qx.util.format.NumberFormat;

if(u._integerInstance==null){u._integerInstance=new u();
u._integerInstance.setMaximumFractionDigits(0);
}return u._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__kc:null,format:function(v){switch(v){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var z=(v<0);

if(z){v=-v;
}
if(this.getMaximumFractionDigits()!=null){var G=Math.pow(10,this.getMaximumFractionDigits());
v=Math.round(v*G)/G;
}var F=String(Math.floor(v)).length;
var w=t+v;
var C=w.substring(0,F);

while(C.length<this.getMinimumIntegerDigits()){C=q+C;
}
if(this.getMaximumIntegerDigits()!=null&&C.length>this.getMaximumIntegerDigits()){C=C.substring(C.length-this.getMaximumIntegerDigits());
}var B=w.substring(F+1);

while(B.length<this.getMinimumFractionDigits()){B+=q;
}
if(this.getMaximumFractionDigits()!=null&&B.length>this.getMaximumFractionDigits()){B=B.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var y=C;
C=t;
var E;

for(E=y.length;E>3;E-=3){C=t+qx.locale.Number.getGroupSeparator(this.__kc)+y.substring(E-3,E)+C;
}C=y.substring(0,E)+C;
}var A=this.getPrefix()?this.getPrefix():t;
var x=this.getPostfix()?this.getPostfix():t;
var D=A+(z?r:t)+C;

if(B.length>0){D+=t+qx.locale.Number.getDecimalSeparator(this.__kc)+B;
}D+=x;
return D;
},parse:function(H){var M=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__kc)+t);
var K=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__kc)+t);
var I=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+M+g+n+K+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var L=I.exec(H);

if(L==null){throw new Error("Number string '"+H+"' does not match the number format");
}var N=(L[1]==r);
var P=L[2];
var O=L[3];
P=P.replace(new RegExp(M,m),t);
var J=(N?r:t)+P;

if(O!=null&&O.length!=0){O=O.replace(new RegExp(K),t);
J+=h+O;
}return parseFloat(J);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(e){return qx.locale.Manager.getInstance().localize(d,[],e);
},getGroupSeparator:function(g){return qx.locale.Manager.getInstance().localize(a,[],g);
},getPercentFormat:function(f){return qx.locale.Manager.getInstance().localize(c,[],f);
}}});
})();
(function(){var v="qx.debug",u="on",t="&",s="=",r="qx.ioRemoteDebug",q="application/json",p="completed",o="text/plain",n="qx.ioRemoteDebugData",m="text/javascript",e="?",l="qx.io.remote.transport.Script",h="",c="_ScriptTransport_data",b="failed",g="script",f="timeout",j="_ScriptTransport_",a="_ScriptTransport_id",k="aborted",d="utf-8";
qx.Class.define(l,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var D=++qx.io.remote.transport.Script.__qW;

if(D>=2000000000){qx.io.remote.transport.Script.__qW=D=1;
}this.__qX=null;
this.__qW=D;
},statics:{__qW:0,_instanceRegistry:{},ScriptTransport_PREFIX:j,ScriptTransport_ID_PARAM:a,ScriptTransport_DATA_PARAM:c,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,m,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(E,content){var F=qx.io.remote.transport.Script._instanceRegistry[E];

if(F==null){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{F._responseContent=content;
F._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qY:0,__qX:null,__qW:null,send:function(){var y=this.getUrl();
y+=(y.indexOf(e)>=0?t:e)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__qW;
var B=this.getParameters();
var A=[];

for(var x in B){if(x.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var z=B[x];

if(z instanceof Array){for(var i=0;i<z.length;i++){A.push(encodeURIComponent(x)+s+encodeURIComponent(z[i]));
}}else{A.push(encodeURIComponent(x)+s+encodeURIComponent(z));
}}
if(A.length>0){y+=t+A.join(t);
}var w=this.getData();

if(w!=null){y+=t+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+s+encodeURIComponent(w);
}qx.io.remote.transport.Script._instanceRegistry[this.__qW]=this;
this.__qX=document.createElement(g);
this.__qX.charset=d;
this.__qX.src=y;

if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Request: "+y);
}}document.body.appendChild(this.__qX);
},_switchReadyState:function(G){switch(this.getState()){case p:case k:case b:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__qY<G){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qY]);
}},setRequestHeader:function(I,J){},getResponseHeader:function(C){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return h;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==p){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case o:case q:case m:if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Response: "+this._responseContent);
}}var H=this._responseContent;
return (H===0?0:(H||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,l);
},destruct:function(){if(this.__qX){delete qx.io.remote.transport.Script._instanceRegistry[this.__qW];
document.body.removeChild(this.__qX);
}this.__qX=this._responseContent=null;
}});
})();
(function(){var n="qx.debug",m="on",k="qx.ioRemoteDebugData",j="failed",h="qx.ioRemoteDebug",g="completed",f="=",d="aborted",c="",b="sending",O="&",N="configured",M="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="qx.client",G="receiving",F="text/plain",v="text/javascript",w="created",t="?",u="Boolean",q='Referer',r='Basic ',o="\n</pre>",p="string",x='Authorization',y="<pre>Could not execute json: \n",A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",z=':',C="parseerror",B="file:",E="webkit",D="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[F,v,J,L,I]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(H,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:u,init:true}},members:{__ra:false,__rb:0,__rc:null,getRequest:function(){if(this.__rc===null){this.__rc=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__rc.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__rc;
},send:function(){this.__rb=0;
var bJ=this.getRequest();
var bF=this.getMethod();
var bM=this.getAsynchronous();
var bL=this.getUrl();
var bH=(window.location.protocol===B&&!(/^http(s){0,1}\:/.test(bL)));
this.__ra=bH;
var bP=this.getParameters(false);
var bN=[];

for(var bG in bP){var bK=bP[bG];

if(bK instanceof Array){for(var i=0;i<bK.length;i++){bN.push(encodeURIComponent(bG)+f+encodeURIComponent(bK[i]));
}}else{bN.push(encodeURIComponent(bG)+f+encodeURIComponent(bK));
}}
if(bN.length>0){bL+=(bL.indexOf(t)>=0?O:t)+bN.join(O);
}if(this.getData()===null){var bP=this.getParameters(true);
var bN=[];

for(var bG in bP){var bK=bP[bG];

if(bK instanceof Array){for(var i=0;i<bK.length;i++){bN.push(encodeURIComponent(bG)+f+encodeURIComponent(bK[i]));
}}else{bN.push(encodeURIComponent(bG)+f+encodeURIComponent(bK));
}}
if(bN.length>0){this.setData(bN.join(O));
}}var bO=function(bp){var bu=A;
var by=c;
var bs,br,bq;
var bv,bw,bx,bt;
var i=0;

do{bs=bp.charCodeAt(i++);
br=bp.charCodeAt(i++);
bq=bp.charCodeAt(i++);
bv=bs>>2;
bw=((bs&3)<<4)|(br>>4);
bx=((br&15)<<2)|(bq>>6);
bt=bq&63;

if(isNaN(br)){bx=bt=64;
}else if(isNaN(bq)){bt=64;
}by+=bu.charAt(bv)+bu.charAt(bw)+bu.charAt(bx)+bu.charAt(bt);
}while(i<bp.length);
return by;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bJ.open(bF,bL,bM);
bJ.setRequestHeader(x,r+bO(this.getUsername()+z+this.getPassword()));
}else{bJ.open(bF,bL,bM,this.getUsername(),this.getPassword());
}}else{bJ.open(bF,bL,bM);
}}catch(bC){this.error("Failed with exception: "+bC);
this.failed();
return;
}if(!qx.core.Variant.isSet(H,E)){bJ.setRequestHeader(q,window.location.href);
}var bI=this.getRequestHeaders();

for(var bG in bI){bJ.setRequestHeader(bG,bI[bG]);
}try{if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Request: "+this.getData());
}}bJ.send(this.getData());
}catch(T){if(bH){this.failedLocally();
}else{this.error("Failed to send data: "+T,"send");
this.failed();
}return;
}if(!bM){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===j){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case g:case d:case j:case M:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(h)){this.warn("Ignore Ready State Change");
}}return;
}var U=this.getReadyState();

if(U==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),U,this.__ra)){if(this.getState()===N){this.setState(b);
}this.failed();
return;
}}while(this.__rb<U){this.setState(qx.io.remote.Exchange._nativeMap[++this.__rb]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bo){}return bl;
},setRequestHeader:function(bD,bE){this.getRequestHeaders()[bD]=bE;
},getResponseHeader:function(ba){var bb=null;

try{bb=this.getRequest().getResponseHeader(ba)||null;
}catch(bz){}return bb;
},getStringResponseHeaders:function(){var R=null;

try{var Q=this.getRequest().getAllResponseHeaders();

if(Q){R=Q;
}}catch(bB){}return R;
},getResponseHeaders:function(){var bS=this.getStringResponseHeaders();
var bT={};

if(bS){var bQ=bS.split(/[\r\n]+/g);

for(var i=0,l=bQ.length;i<l;i++){var bR=bQ[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bR){bT[bR[1]]=bR[2];
}}}return bT;
},getStatusCode:function(){var bj=-1;

try{bj=this.getRequest().status;
}catch(bi){}return bj;
},getStatusText:function(){var S=c;

try{S=this.getRequest().statusText;
}catch(bA){}return S;
},getResponseText:function(){var bn=null;

try{bn=this.getRequest().responseText;
}catch(a){bn=null;
}return bn;
},getResponseXml:function(){var bg=null;
var be=this.getStatusCode();
var bf=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(be,bf,this.__ra)){try{bg=this.getRequest().responseXML;
}catch(bm){}}if(typeof bg==D&&bg!=null){if(!bg.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,c);
bg.loadXML(s);
}if(!bg.documentElement){throw new Error("Missing Document Element!");
}
if(bg.documentElement.tagName==C){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bg;
},getFetchedLength:function(){var bk=this.getResponseText();
return typeof bk==p?bk.length:0;
},getResponseContent:function(){var V=this.getState();

if(V!==g&&V!=j){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(h)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(h)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var X=this.getResponseText();

if(V==j){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Failed: "+X);
}}return X;
}
switch(this.getResponseType()){case F:case I:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Response: "+X);
}}return X;
case J:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Response: "+X);
}}
try{if(X&&X.length>0){var W;

if(this.getParseJson()){W=qx.util.Json.parse(X,false);
W=(W===0?0:(W||null));
}else{W=X;
}return W;
}else{return null;
}}catch(P){this.error("Could not execute json: ["+X+"]",P);
return y+X+o;
}case v:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Response: "+X);
}}
try{if(X&&X.length>0){var W=window.eval(X);
return (W===0?0:(W||null));
}else{return null;
}}catch(Y){this.error("Could not execute javascript: ["+X+"]",Y);
return null;
}case L:X=this.getResponseXml();

if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(k)){this.debug("Response: "+X);
}}return (X===0?0:(X||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bc,bd){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(h)){this.debug("State: "+bc);
}}
switch(bc){case w:this.fireEvent(w);
break;
case N:this.fireEvent(N);
break;
case b:this.fireEvent(b);
break;
case G:this.fireEvent(G);
break;
case g:this.fireEvent(g);
break;
case j:this.fireEvent(j);
break;
case d:this.getRequest().abort();
this.fireEvent(d);
break;
case M:this.getRequest().abort();
this.fireEvent(M);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bh=this.getRequest();

if(bh){bh.onreadystatechange=qx.lang.Function.empty;
switch(bh.readyState){case 1:case 2:case 3:bh.abort();
}}this.__rc=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.setType(this.getType());
g.setState(this.getState());
g.setStatusCode(this.getStatusCode());
g.setContent(this.getContent());
g.setResponseHeaders(this.getResponseHeaders());
return g;
},getResponseHeader:function(d){var e=this.getResponseHeaders();

if(e){return e[d]||null;
}return null;
}}});
})();
(function(){var Q="test",P="",O="^",N="demobrowser.TreeDataHandler",M="ttree",L="All",K="\\.[^\\.]+$",J=".",I="depth";
qx.Class.define(N,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.tmap=c;
this.ttree=this.__LV(c);
},members:{__LV:function(Y){var bb=Y;
function ba(bh,bi){var bl=bi.classname;
var bj=bl.split(".");
function bk(parent,r){if(!r.length){return parent;
}else{var s=r[0];
var t=r.slice(1,r.length);
var u=null;
var v=null;
var w=parent.getChildren();

for(var i=0;i<w.length;i++){if(w[i].label==s){v=w[i];
break;
}}if(v==null){v=new demobrowser.Tree(s);
parent.add(v);
}u=bk(v,t);
return u;
}}var bm=bk(bh,bj);

if(!bm){throw new Error("No target to insert tests");
}bc.readTree(bi,bm);
}function bd(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var be=new demobrowser.Tree("All");
var bc=this;
bb.sort(bd);

for(var i=0;i<bb.length;i++){ba(be,bb[i]);
}return be;
},readTree:function(T,U){var W=arguments[1]||new demobrowser.Tree(T.classname);
var U;
function V(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}
if(T.tests){T.tests.sort(V);

for(var j=0;j<T.tests.length;j++){U=new demobrowser.Tree(T.tests[j].name);
U.tags=T.tests[j].tags;
U.type=Q;
U.desc=T.tests[j].desc;
U.manifest=T.tests[j].manifest;
W.add(U);
}}if(T.children&&T.children.length){for(var j=0;j<T.children.length;j++){var X=this.readTree(T.children[j]);
{};
W.add(X);
}}{};
return W;
},getRoot:function(){if(!this.Root){var bg={classname:P,tests:[]};
var bf=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(bg.classname.length>bf[i].classname.length){bg=bf[i];
}}this.Root=bg;
}return this.Root.classname;
},getChilds:function(e){var f=[];
var h=this.tmap;
var g=O+e+K;
var k=new RegExp(g);

for(var i=0;i<h.length;i++){if(h[i].classname.match(k)){f.push(h[i]);
}}return f;
},getTests:function(p){var q=this.tmap;

for(var i=0;i<q.length;i++){if(q[i].classname==p){return q[i].tests;
}}return [];
},getPath:function(l){if(!l){return P;
}var m=l.pwd();
m.shift();
if(this.isClass(l)){m=m.concat(l.label);
}return m;
},getChildren:function(bn){if(bn==L){var bo=this.tmap;
var bp=[];

for(var i=0;i<bo.length;i++){bp.push(bo[i].classname);
}return bp;
}else if(this.isClass(bn)){return this.getTests(bn);
}else{return [];
}},isClass:function(d){if(d.type&&d.type==Q){return false;
}else{return true;
}},hasTests:function(D){if(!this.isClass(D)){return false;
}else{var E=D.getChildren();

for(var i=0;i<E.length;i++){if(E[i].type&&E[i].type==Q){return true;
}}return false;
}},classFromTest:function(F){var G=P;
var H=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==F){G=this.tmap[i].classname;
break classloop;
}}}return G;
},getFullName:function(R){if(!R){return P;
}var S=this.getPath(R);

if(R.type&&R.type==Q){S=S.concat(R.label);
}return S.join(J);
},getPreviousNode:function(x){var y=x.getPrevSibling();

if(y){return y;
}},getNextNode:function(n){var o=n.getNextSibling();

if(o){return o;
}},testCount:function(z){if(z.type&&z.type==Q){return 1;
}else{var A=0;
var C=z.getIterator(I);
var B;

while(B=C()){if(B.type&&B.type==Q){A++;
}}return A;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(M);
}});
})();
(function(){var n="depth",m="tags",l="",k="widgetLinkFlat",j="widgetLinkFull",h="parent",g="manifest",e="children",d="demobrowser.Tree";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||l;
this.children=[];
this.tags=null;
this.parent=null;
this.manifest=null;
this.readme=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(x,y){var z=n;
var A=this;
var B=this.getIterator(z);

while(A=B()){x.apply(A,y);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(a){var c=[this];
var b=a==n?1:0;
function f(){var v;

if(c.length){v=c.shift();
var w=v.getChildren();

if(w.length){if(b){c=w.concat(c);
}else{c=c.concat(w);
}}}else{v=null;
}return v;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(o){var p=this.parent.getChildren();
var q=this.self(arguments).indexOf(p,this);
var r=q+o;

if(p[r]){return p[r];
}},add:function(s){this.children.push(s);
s.parent=this;
}},statics:{indexOf:function(t,u){for(var i=0;i<t.length;i++){if(t[i]==u){return i;
}}}},destruct:function(){this._disposeObjects(j,k,h);
this._disposeArray(e);
this._disposeArray(m);
this._disposeMap(g);
}});
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
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(j){return qx.util.StringEscape.unescape(j,qx.bom.String.TO_CHARCODE);
},fromText:function(o){return qx.bom.String.escape(o).replace(/(  |\n)/g,function(m){var n={"  ":e,"\n":d};
return n[m]||m;
});
},toText:function(l){return qx.bom.String.unescape(l.replace(/\s+|<([^>])+>/gi,function(k){if(k.indexOf(f)===0){return b;
}else if(k.length>0&&k.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(i){i.FROM_CHARCODE=qx.lang.Object.invert(i.TO_CHARCODE);
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
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(p){var q=p;
var p=p.substring(1,p.length-1);
var r=t[p];

if(r){q=String.fromCharCode(r);
}else{if(p.charAt(0)==c){if(p.charAt(1).toUpperCase()==e){r=p.substring(2);
if(r.match(/^[0-9A-Fa-f]+$/gi)){q=String.fromCharCode(parseInt(r,16));
}}else{r=p.substring(1);
if(r.match(/^\d+$/gi)){q=String.fromCharCode(parseInt(r,10));
}}}}return q;
});
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var q="qx.debug",p="_applyStyle",o="on",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",c="_applyWidth",g="qx.ui.decoration.Uniform",f="px ",b=" ",a="scale",e="PositiveInteger",d="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(E,F,G){qx.ui.decoration.Abstract.call(this);
if(E!=null){this.setWidth(E);
}
if(F!=null){this.setStyle(F);
}
if(G!=null){this.setColor(G);
}},properties:{width:{check:e,init:0,apply:c},style:{nullable:true,check:[k,j,h,i],init:k,apply:p},color:{nullable:true,check:m,apply:p},backgroundColor:{check:m,nullable:true,apply:p}},members:{__sr:null,_getDefaultInsets:function(){var A=this.getWidth();
return {top:A,right:A,bottom:A,left:A};
},_isInitialized:function(){return !!this.__sr;
},getMarkup:function(){if(this.__sr){return this.__sr;
}var r={position:d,top:0,left:0};
var s=this.getWidth();

if(qx.core.Variant.isSet(q,o)){if(s===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var u=qx.theme.manager.Color.getInstance();
r.border=s+f+this.getStyle()+b+(u.resolve(this.getColor())||n);
var t=this._generateBackgroundMarkup(r);
return this.__sr=t;
},resize:function(v,w,x){var z=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;

if(z||qx.bom.client.Feature.CONTENT_BOX){var y=this.getWidth()*2;
w-=y;
x-=y;
if(w<0){w=0;
}
if(x<0){x=0;
}}v.style.width=w+l;
v.style.height=x+l;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||n;
},_applyWidth:function(){if(qx.core.Variant.isSet(q,o)){if(this.__sr){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(q,o)){if(this.__sr){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sr=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(N,O,P){qx.ui.decoration.Abstract.call(this);
if(N!=null){this.setWidth(N);
}
if(O!=null){this.setStyle(O);
}
if(P!=null){this.setColor(P);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__st:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__st;
},getMarkup:function(Q){if(this.__st){return this.__st;
}var R=qx.theme.manager.Color.getInstance();
var S={};
var U=this.getWidthTop();

if(U>0){S[s]=U+e+this.getStyleTop()+H+(R.resolve(this.getColorTop())||g);
}var U=this.getWidthRight();

if(U>0){S[v]=U+e+this.getStyleRight()+H+(R.resolve(this.getColorRight())||g);
}var U=this.getWidthBottom();

if(U>0){S[x]=U+e+this.getStyleBottom()+H+(R.resolve(this.getColorBottom())||g);
}var U=this.getWidthLeft();

if(U>0){S[t]=U+e+this.getStyleLeft()+H+(R.resolve(this.getColorLeft())||g);
}if(qx.core.Variant.isSet(G,E)){if(S.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}S.position=w;
S.top=0;
S.left=0;
var T=this._generateBackgroundMarkup(S);
return this.__st=T;
},resize:function(I,J,K){var M=this.getBackgroundImage()&&this.getBackgroundRepeat()==l;

if(M||qx.bom.client.Feature.CONTENT_BOX){var L=this.getInsets();
J-=L.left+L.right;
K-=L.top+L.bottom;
if(J<0){J=0;
}
if(K<0){K=0;
}}I.style.width=J+D;
I.style.height=K+D;
},tint:function(V,W){var X=qx.theme.manager.Color.getInstance();

if(W==null){W=this.getBackgroundColor();
}V.style.backgroundColor=X.resolve(W)||g;
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__st){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__st){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__st=null;
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
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",x='</div>',w="qx.ui.decoration.Beveled",v="qx.debug",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r='border-left:',q='border-top:',p="Number",o='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on",l="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(R,S,T){qx.ui.decoration.Abstract.call(this);
if(R!=null){this.setOuterColor(R);
}
if(S!=null){this.setInnerColor(S);
}
if(T!=null){this.setInnerOpacity(T);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:p,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__sw:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sw;
},_applyStyle:function(){if(qx.core.Variant.isSet(v,k)){if(this.__sw){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__sw){return this.__sw;
}var y=qx.theme.manager.Color.getInstance();
var z=[];
var C=d+y.resolve(this.getOuterColor())+b;
var B=d+y.resolve(this.getInnerColor())+b;
z.push(n);
z.push(f);
z.push(e,C);
z.push(qx.bom.element.Opacity.compile(0.35));
z.push(i);
z.push(o);
z.push(r,C);
z.push(s,C);
z.push(i);
z.push(f);
z.push(m);
z.push(q,C);
z.push(t,C);
z.push(i);
var A={position:l,top:g,left:g};
z.push(this._generateBackgroundMarkup(A));
z.push(u);
z.push(e,B);
z.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
z.push(i);
z.push(x);
return this.__sw=z.join(c);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=a;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(D,E){var F=qx.theme.manager.Color.getInstance();

if(E==null){E=this.getBackgroundColor();
}D.childNodes[3].style.backgroundColor=F.resolve(E)||c;
}},destruct:function(){this.__sw=null;
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
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();
(function(){var l="_applyStyle",k="stretch",j="Integer",i="px",h=" ",g="repeat",f="round",e="shorthand",d="px ",c="sliceBottom",C=";'></div>",B="<div style='",A="qx.debug",z="sliceLeft",y="sliceRight",x="repeatX",w="String",v="qx.ui.decoration.css3.BorderImage",u="border-box",t="",r='") ',s="sliceTop",p='url("',q="hidden",n="on",o="repeatY",m="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,construct:function(a,b){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setBorderImage(a);
}
if(b!=null){this.setSlice(b);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:w,nullable:true,apply:l},sliceTop:{check:j,init:0,apply:l},sliceRight:{check:j,init:0,apply:l},sliceBottom:{check:j,init:0,apply:l},sliceLeft:{check:j,init:0,apply:l},slice:{group:[s,y,c,z],mode:e},repeatX:{check:[k,g,f],init:k,apply:l},repeatY:{check:[k,g,f],init:k,apply:l},repeat:{group:[x,o],mode:e}},members:{__sx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sx;
},getMarkup:function(){if(this.__sx){return this.__sx;
}var D=this._resolveImageUrl(this.getBorderImage());
var E=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var F=[this.getRepeatX(),this.getRepeatY()].join(h);
this.__sx=[B,qx.bom.element.Style.compile({"borderImage":p+D+r+E.join(h)+h+F,position:m,lineHeight:0,fontSize:0,overflow:q,boxSizing:u,borderWidth:E.join(d)+i}),C].join(t);
return this.__sx;
},resize:function(I,J,K){I.style.width=J+i;
I.style.height=K+i;
},tint:function(G,H){},_applyStyle:function(){if(qx.core.Variant.isSet(A,n)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(L){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(L));
}},destruct:function(){this.__sx=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",B="qx.client",A="-br",z="-t",y="-tl",x="-r",w='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',v="qx.debug",u="_applyBaseImage",t="-b",s="String",q="",r="-bl",o="qx.ui.decoration.GridDiv",p="-c",m="mshtml",n="on";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(M,N){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setBaseImage(M);
}
if(N!=null){this.setInsets(N);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__sy:null,__sz:null,__sA:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sy;
},getMarkup:function(){if(this.__sy){return this.__sy;
}var S=qx.bom.element.Decoration;
var T=this.__sz;
var U=this.__sA;
var V=[];
V.push(w);
V.push(S.create(T.tl,i,{top:0,left:0}));
V.push(S.create(T.t,h,{top:0,left:U.left+l}));
V.push(S.create(T.tr,i,{top:0,right:0}));
V.push(S.create(T.bl,i,{bottom:0,left:0}));
V.push(S.create(T.b,h,{bottom:0,left:U.left+l}));
V.push(S.create(T.br,i,{bottom:0,right:0}));
V.push(S.create(T.l,g,{top:U.top+l,left:0}));
V.push(S.create(T.c,c,{top:U.top+l,left:U.left+l}));
V.push(S.create(T.r,g,{top:U.top+l,right:0}));
V.push(d);
return this.__sy=V.join(q);
},resize:function(O,P,Q){var R=this.__sA;
var innerWidth=P-R.left-R.right;
var innerHeight=Q-R.top-R.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}O.style.width=P+l;
O.style.height=Q+l;
O.childNodes[1].style.width=innerWidth+l;
O.childNodes[4].style.width=innerWidth+l;
O.childNodes[7].style.width=innerWidth+l;
O.childNodes[6].style.height=innerHeight+l;
O.childNodes[7].style.height=innerHeight+l;
O.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(B,m)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(P%2==1){O.childNodes[2].style.marginRight=j;
O.childNodes[5].style.marginRight=j;
O.childNodes[8].style.marginRight=j;
}else{O.childNodes[2].style.marginRight=k;
O.childNodes[5].style.marginRight=k;
O.childNodes[8].style.marginRight=k;
}
if(Q%2==1){O.childNodes[3].style.marginBottom=j;
O.childNodes[4].style.marginBottom=j;
O.childNodes[5].style.marginBottom=j;
}else{O.childNodes[3].style.marginBottom=k;
O.childNodes[4].style.marginBottom=k;
O.childNodes[5].style.marginBottom=k;
}}}},tint:function(C,D){},_applyBaseImage:function(E,F){if(qx.core.Variant.isSet(v,n)){if(this.__sy){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(E){var J=this._resolveImageUrl(E);
var K=/(.*)(\.[a-z]+)$/.exec(J);
var I=K[1];
var H=K[2];
var G=this.__sz={tl:I+y+H,t:I+z+H,tr:I+f+H,bl:I+r+H,b:I+t+H,br:I+A+H,l:I+e+H,c:I+p+H,r:I+x+H};
this.__sA=this._computeEdgeSizes(G);
}},_resolveImageUrl:function(L){return qx.util.AliasManager.getInstance().resolve(L);
},_computeEdgeSizes:function(a){var b=qx.util.ResourceManager.getInstance();
return {top:b.getImageHeight(a.t),bottom:b.getImageHeight(a.b),left:b.getImageWidth(a.l),right:b.getImageWidth(a.r)};
}},destruct:function(){this.__sy=this.__sz=this.__sA=null;
}});
})();


qx.$$loader.init();

