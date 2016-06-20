(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.2.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.2.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"0c29430daee5"},
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

qx.$$packageData['0c29430daee5']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-44],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-22],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
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
(function(){var x="on",w="qx.debug",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="$",n="qx.allowUrlVariants",e="qx.client",m="qx.dynlocale",h="webkit",d="qxvariant",c="opera",g=":",f=".",j="qx.core.Variant",b="mshtml",k="gecko";
qx.Bootstrap.define(j,{statics:{__ku:{},__kv:{},compilerIsSet:function(){return true;
},define:function(A,B,C){if(qx.core.Variant.compilerIsSet(w,x)){if(!this.__ky(B)){throw new Error('Allowed values of variant "'+A+'" must be defined!');
}
if(C===undefined){throw new Error('Default value of variant "'+A+'" must be defined!');
}}
if(!this.__ku[A]){this.__ku[A]={};
}else if(qx.core.Variant.compilerIsSet(w,x)){if(this.__ku[A].defaultValue!==undefined){throw new Error('Variant "'+A+'" is already defined!');
}}this.__ku[A].allowedValues=B;
this.__ku[A].defaultValue=C;
},get:function(Q){var R=this.__ku[Q];

if(qx.core.Variant.compilerIsSet(w,x)){if(R===undefined){throw new Error('Variant "'+Q+'" is not defined.');
}}
if(R.value!==undefined){return R.value;
}return R.defaultValue;
},__kw:function(){if(window.qxvariants){for(var z in qxvariants){if(qx.core.Variant.compilerIsSet(w,x)){if((z.split(f)).length<2){throw new Error('Malformed settings key "'+z+'". Must be following the schema "namespace.key".');
}}
if(!this.__ku[z]){this.__ku[z]={};
}this.__ku[z].value=qxvariants[z];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(a){}this.__kx(this.__ku);
}},__kx:function(){if(qx.core.Setting.get(n)!=true){return;
}var G=document.location.search.slice(1).split(q);

for(var i=0;i<G.length;i++){var H=G[i].split(g);

if(H.length!=3||H[0]!=d){continue;
}var I=H[1];

if(!this.__ku[I]){this.__ku[I]={};
}this.__ku[I].value=decodeURIComponent(H[2]);
}},select:function(D,E){if(qx.core.Variant.compilerIsSet(w,x)){if(!this.__kz(this.__ku[D])){throw new Error("Variant \""+D+"\" is not defined");
}
if(!this.__kz(E)){throw new Error("the second parameter must be a map!");
}}
for(var F in E){if(this.isSet(D,F)){return E[F];
}}
if(E[s]!==undefined){return E[s];
}
if(qx.core.Variant.compilerIsSet(w,x)){throw new Error('No match for variant "'+D+'" in variants ['+qx.Bootstrap.getKeysAsString(E)+'] found, and no default ("default") given');
}},isSet:function(L,M){var N=L+o+M;

if(this.__kv[N]!==undefined){return this.__kv[N];
}var P=false;
if(M.indexOf(t)<0){P=this.get(L)===M;
}else{var O=M.split(t);

for(var i=0,l=O.length;i<l;i++){if(this.get(L)===O[i]){P=true;
break;
}}}this.__kv[N]=P;
return P;
},__ky:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__kz:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__kA:function(J,K){for(var i=0,l=J.length;i<l;i++){if(J[i]==K){return true;
}}return false;
}},defer:function(y){y.define(e,[k,b,c,h],qx.bom.client.Engine.NAME);
y.define(w,[x,u],x);
y.define(p,[x,u],u);
y.define(m,[x,u],x);
y.__kw();
}});
})();
(function(){var u="qx.debug",t="object",s="Interface",r="on",q="string",p="function",o="Boolean",n="qx.Interface",m="events",k="toggle",d="properties",j="]",g="members",c="number",b="boolean",f="is",e="[Interface ",h="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,F){if(F){if(F.extend&&!(F.extend instanceof Array)){F.extend=[F.extend];
}if(qx.core.Variant.isSet(u,r)){this.__fE(name,F);
}var G=F.statics?F.statics:{};
if(F.extend){G.$$extends=F.extend;
}
if(F.properties){G.$$properties=F.properties;
}
if(F.members){G.$$members=F.members;
}
if(F.events){G.$$events=F.events;
}}else{var G={};
}G.$$type=s;
G.name=name;
G.toString=this.genericToString;
G.basename=qx.Bootstrap.createNamespace(name,G);
qx.Interface.$$registry[name]=G;
return G;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(W){if(!W){return [];
}var X=W.concat();

for(var i=0,l=W.length;i<l;i++){if(W[i].$$extends){X.push.apply(X,this.flatten(W[i].$$extends));
}}return X;
},__fy:function(H,I,J,K){var O=J.$$members;

if(O){for(var N in O){if(qx.Bootstrap.isFunction(O[N])){var M=this.__fz(I,N);
var L=M||qx.Bootstrap.isFunction(H[N]);

if(!L){throw new Error('Implementation of method "'+N+'" is missing in class "'+I.classname+'" required by interface "'+J.name+'"');
}var P=K===true&&!M&&!qx.Bootstrap.hasInterface(I,J);

if(P){H[N]=this.__fC(J,H[N],N,O[N]);
}}else{if(typeof H[N]===undefined){if(typeof H[N]!==p){throw new Error('Implementation of member "'+N+'" is missing in class "'+I.classname+'" required by interface "'+J.name+'"');
}}}}}},__fz:function(v,w){var A=w.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!A){return false;
}var x=qx.Bootstrap.firstLow(A[2]);
var y=qx.Bootstrap.getPropertyDefinition(v,x);

if(!y){return false;
}var z=A[0]==f||A[0]==k;

if(z){return qx.Bootstrap.getPropertyDefinition(v,x).check==o;
}return true;
},__fA:function(T,U){if(U.$$properties){for(var V in U.$$properties){if(!qx.Bootstrap.getPropertyDefinition(T,V)){throw new Error('The property "'+V+'" is not supported by Class "'+T.classname+'"!');
}}}},__fB:function(Q,R){if(R.$$events){for(var S in R.$$events){if(!qx.Bootstrap.supportsEvent(Q,S)){throw new Error('The event "'+S+'" is not supported by Class "'+Q.classname+'"!');
}}}},assertObject:function(Y,ba){var bc=Y.constructor;
this.__fy(Y,bc,ba,false);
this.__fA(bc,ba);
this.__fB(bc,ba);
var bb=ba.$$extends;

if(bb){for(var i=0,l=bb.length;i<l;i++){this.assertObject(Y,bb[i]);
}}},assert:function(B,C,D){this.__fy(B.prototype,B,C,D);
this.__fA(B,C);
this.__fB(B,C);
var E=C.$$extends;

if(E){for(var i=0,l=E.length;i<l;i++){this.assert(B,E[i],D);
}}},genericToString:function(){return e+this.name+j;
},$$registry:{},__fC:qx.core.Variant.select(u,{"on":function(bh,bi,bj,bk){function bl(){bk.apply(this,arguments);
return bi.apply(this,arguments);
}bi.wrapper=bl;
return bl;
},"default":function(){}}),__fD:qx.core.Variant.select(u,{"on":{"extend":t,"statics":t,"members":t,"properties":t,"events":t},"default":null}),__fE:qx.core.Variant.select(u,{"on":function(name,bd){if(qx.core.Variant.isSet(u,r)){var bg=this.__fD;

for(var bf in bd){if(bg[bf]===undefined){throw new Error('The configuration key "'+bf+'" in class "'+name+'" is not allowed!');
}
if(bd[bf]==null){throw new Error("Invalid key '"+bf+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bg[bf]!==null&&typeof bd[bf]!==bg[bf]){throw new Error('Invalid type of key "'+bf+'" in interface "'+name+'"! The type of the key must be "'+bg[bf]+'"!');
}}var be=[h,g,d,m];

for(var i=0,l=be.length;i<l;i++){var bf=be[i];

if(bd[bf]!==undefined&&(bd[bf] instanceof Array||bd[bf] instanceof RegExp||bd[bf] instanceof Date||bd[bf].classname!==undefined)){throw new Error('Invalid key "'+bf+'" in interface "'+name+'"! The value needs to be a map!');
}}if(bd.extend){for(var i=0,a=bd.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==s){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(bd.statics){for(var bf in bd.statics){if(bf.toUpperCase()!==bf){throw new Error('Invalid key "'+bf+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof bd.statics[bf]){case b:case q:case c:break;
default:throw new Error('Invalid key "'+bf+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,D){if(D){if(D.include&&!(D.include instanceof Array)){D.include=[D.include];
}if(qx.core.Variant.isSet(q,e)){this.__em(name,D);
}var F=D.statics?D.statics:{};
qx.Bootstrap.setDisplayNames(F,name);

for(var E in F){if(F[E] instanceof Function){F[E].$$mixin=F;
}}if(D.construct){F.$$constructor=D.construct;
qx.Bootstrap.setDisplayName(D.construct,name,k);
}
if(D.include){F.$$includes=D.include;
}
if(D.properties){F.$$properties=D.properties;
}
if(D.members){F.$$members=D.members;
qx.Bootstrap.setDisplayNames(D.members,name+m);
}
for(var E in F.$$members){if(F.$$members[E] instanceof Function){F.$$members[E].$$mixin=F;
}}
if(D.events){F.$$events=D.events;
}
if(D.destruct){F.$$destructor=D.destruct;
qx.Bootstrap.setDisplayName(D.destruct,name,d);
}}else{var F={};
}F.$$type=o;
F.name=name;
F.toString=this.genericToString;
F.basename=qx.Bootstrap.createNamespace(name,F);
this.$$registry[name]=F;
return F;
},checkCompatibility:function(v){var y=this.flatten(v);
var z=y.length;

if(z<2){return true;
}var C={};
var B={};
var A={};
var x;

for(var i=0;i<z;i++){x=y[i];

for(var w in x.events){if(A[w]){throw new Error('Conflict between mixin "'+x.name+'" and "'+A[w]+'" in member "'+w+'"!');
}A[w]=x.name;
}
for(var w in x.properties){if(C[w]){throw new Error('Conflict between mixin "'+x.name+'" and "'+C[w]+'" in property "'+w+'"!');
}C[w]=x.name;
}
for(var w in x.members){if(B[w]){throw new Error('Conflict between mixin "'+x.name+'" and "'+B[w]+'" in member "'+w+'"!');
}B[w]=x.name;
}}return true;
},isCompatible:function(s,t){var u=qx.Bootstrap.getMixins(t);
u.push(s);
return qx.Mixin.checkCompatibility(u);
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
(function(){var dr=';',dq='computed=this.',dp='=value;',dn='this.',dm="set",dl="setThemed",dk="init",dj="setRuntime",di='if(this.',dh='delete this.',ck='!==undefined)',cj='}',ci="resetThemed",ch='else if(this.',cg="string",cf="on",ce="qx.debug",cd='return this.',cc="reset",cb='","',dy='",value);',dz="",dw="refresh",dx="boolean",du="resetRuntime",dv='!==undefined){',ds='=true;',dt="this.",dA=";",dB='old=this.',cP="qx.propertyDebugLevel",cO='.$$properties.',cR="();",cQ='else ',cT='if(old===undefined)old=this.',cS='old=computed=this.',cV='if(value===undefined)prop.error(this,2,"',cU="return this.",cN="get",cM='(value);',G="(a[",H='if(old===computed)return value;',I='"), msg)',J='!(',K="value",L=' of an instance of ',M='var prop=qx.core.Property;',N='if(old===undefined)old=null;',O=')',P=' is not (yet) ready!");',dP="]);",dO='!==inherit){',dN='var msg = "Invalid incoming value for property \'',dM='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dT='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dS='value !== null && value.nodeType === 9 && value.documentElement',dR='===value)return value;',dQ='value !== null && value.$$type === "Mixin"',dV='return init;',dU='var init=this.',bA=')prop.error(this,5,"',bB='value !== null && value.nodeType === 1 && value.attributes',by="var parent = this.getLayoutParent();",bz="Error in property ",bE='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bF="property",bC='.check.call(this, value)',bD='if((computed===undefined||computed===inherit)&&',bw='.validate.call(this, value);',bx='qx.core.Assert.assertInstance(value, Date, msg) || true',bi='else{',bh="if (!parent) return;",bk=" in method ",bj='qx.core.Assert.assertInstance(value, Error, msg) || true',be='=computed;',bd='Undefined value is not allowed!',bg='(backup);',bf='if(',bc="MSIE 6.0",bb='if(computed===inherit){',bK="inherit",bL='Is invalid!',bM='var computed, old=this.',bN='else if(computed===undefined)',bG="': ",bH=" of class ",bI='value !== null && value.nodeType !== undefined',bJ='===undefined)return;',bO='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bP="')){",bt='qx.core.Assert.assertPositiveInteger(value, msg) || true',bs='else this.',br='value=this.',bq='if(init==qx.core.Property.$$inherit)init=null;',bp='qx.core.Assert.assertInArray(value, ',bo='value !== null && value.$$type === "Interface"',bn='var inherit=prop.$$inherit;',bm="', qx.event.type.Data, [computed, old]",bv="var value = parent.",bu="$$useinit_",bQ='computed=undefined;delete this.',bR="(value);",bS='Requires exactly one argument!',bT='computed=value;',bU="$$runtime_",bV='if(this.$$initialized)prop.error(this,0,"',bW='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bX="$$user_",bY='if(value===null)prop.error(this,4,"',ca='){',cr='!',cq='qx.core.Assert.assertArray(value, msg) || true',cp='if(computed===undefined||computed===inherit){',co='qx.core.Assert.assertPositiveNumber(value, msg) || true',cv=".prototype",cu="function",ct="Boolean",cs=")}",cy='(computed, old, "',cx='return value;',cI='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cJ='}else{',cG="if(reg.hasListener(this, '",cH='Does not allow any arguments!',cE='\'";',cF=')a[i].',cC="()",cD=';}',cK="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cL='value !== null && value.$$type === "Theme"',da='if(value!==null)',cY="var reg=qx.event.Registration;",dc="())",db='return null;',de='qx.core.Assert.assertObject(value, msg) || true',dd='");',dg='qx.core.Assert.assertString(value, msg) || true',df='!==undefined&&',cX='var pa=this.getLayoutParent();if(pa)computed=pa.',cW="if (value===undefined) value = parent.",dI='value !== null && value.$$type === "Class"',dJ='qx.core.Assert.assertFunction(value, msg) || true',dK='var computed, old;',dL='var backup=computed;',dE=".",dF="object",dG="$$init_",dH='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dC="$$theme_",dD='if(computed===undefined)computed=null;',F='\' of class \'',E='if(arguments.length!==1)prop.error(this,1,"',D='qx.core.Assert.assertMap(value, msg) || true',C="qx.aspects",B='qx.core.Assert.assertNumber(value, msg) || true',A="reg.fireEvent(this, '",z='Null value is not allowed!',y='if(value!==inherit)',x='qx.core.Assert.assertInteger(value, msg) || true',w="rv:1.8.1",S="shorthand",T='qx.core.Assert.assertInstance(value, RegExp, msg) || true',Q='value !== null && value.type !== undefined',R='value !== null && value.document',W='throw new Error("Property ',X="(!this.",U='qx.core.Assert.assertBoolean(value, msg) || true',V='if(a[i].',Y='.check, msg)',ba="toggle",cz="$$inherit_",cw=" with incoming value '",cB='if(arguments.length!==0)prop.error(this,3,"',cA="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cm='if(computed===undefined||computed==inherit)computed=null;',cl="qx.core.Property",bl="is",cn='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cl,{statics:{__la:{"Boolean":U,"String":dg,"Number":B,"Integer":x,"PositiveNumber":co,"PositiveInteger":bt,"Error":bj,"RegExp":T,"Object":de,"Array":cq,"Map":D,"Function":dJ,"Date":bx,"Node":bI,"Element":bB,"Document":dS,"Window":R,"Event":Q,"Class":dI,"Mixin":dQ,"Interface":bo,"Theme":cL,"Color":dM,"Decorator":bO,"Font":dT},__lb:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bK,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cg,dereference:dx,inheritable:dx,nullable:dx,themeable:dx,refine:dx,init:null,apply:cg,event:cg,check:null,transform:cg,deferredInit:dx,validate:null},$$allowedGroupKeys:{name:cg,group:dF,mode:cg,themeable:dx},$$inheritable:{},__lc:function(eA){var eB=this.__ld(eA);

if(!eB.length){var eC=qx.lang.Function.empty;
}else{eC=this.__le(eB);
}eA.prototype.$$refreshInheritables=eC;
},__ld:function(fj){var fl=[];

while(fj){var fk=fj.$$properties;

if(fk){for(var name in this.$$inheritable){if(fk[name]&&fk[name].inheritable){fl.push(name);
}}}fj=fj.superclass;
}return fl;
},__le:function(dX){var ec=this.$$store.inherit;
var eb=this.$$store.init;
var ea=this.$$method.refresh;
var dY=[by,bh];

for(var i=0,l=dX.length;i<l;i++){var name=dX[i];
dY.push(bv,ec[name],dA,cW,eb[name],dA,dt,ea[name],bR);
}return new Function(dY.join(dz));
},attachRefreshInheritables:function(dW){dW.prototype.$$refreshInheritables=function(){qx.core.Property.__lc(dW);
return this.$$refreshInheritables();
};
},attachMethods:function(er,name,es){es.group?this.__lf(er,es,name):this.__lg(er,es,name);
},__lf:function(f,g,name){var p=qx.Bootstrap.firstUp(name);
var o=f.prototype;
var q=g.themeable===true;

if(qx.core.Variant.isSet(ce,cf)){if(qx.core.Setting.get(cP)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var r=[];
var k=[];

if(q){var h=[];
var n=[];
}var m=cK;
r.push(m);

if(q){h.push(m);
}
if(g.mode==S){var j=cA;
r.push(j);

if(q){h.push(j);
}}
for(var i=0,a=g.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(ce,cf)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}r.push(dt,this.$$method.set[a[i]],G,i,dP);
k.push(dt,this.$$method.reset[a[i]],cR);

if(q){if(qx.core.Variant.isSet(ce,cf)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}h.push(dt,this.$$method.setThemed[a[i]],G,i,dP);
n.push(dt,this.$$method.resetThemed[a[i]],cR);
}}this.$$method.set[name]=dm+p;
o[this.$$method.set[name]]=new Function(r.join(dz));
this.$$method.reset[name]=cc+p;
o[this.$$method.reset[name]]=new Function(k.join(dz));

if(q){this.$$method.setThemed[name]=dl+p;
o[this.$$method.setThemed[name]]=new Function(h.join(dz));
this.$$method.resetThemed[name]=ci+p;
o[this.$$method.resetThemed[name]]=new Function(n.join(dz));
}},__lg:function(fC,fD,name){var fF=qx.Bootstrap.firstUp(name);
var fH=fC.prototype;

if(qx.core.Variant.isSet(ce,cf)){if(qx.core.Setting.get(cP)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(fD.dereference===undefined&&typeof fD.check===cg){fD.dereference=this.__lh(fD.check);
}var fG=this.$$method;
var fE=this.$$store;
fE.runtime[name]=bU+name;
fE.user[name]=bX+name;
fE.theme[name]=dC+name;
fE.init[name]=dG+name;
fE.inherit[name]=cz+name;
fE.useinit[name]=bu+name;
fG.get[name]=cN+fF;
fH[fG.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,fC,name,cN);
};
fG.set[name]=dm+fF;
fH[fG.set[name]]=function(eF){return qx.core.Property.executeOptimizedSetter(this,fC,name,dm,arguments);
};
fG.reset[name]=cc+fF;
fH[fG.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fC,name,cc);
};

if(fD.inheritable||fD.apply||fD.event||fD.deferredInit){fG.init[name]=dk+fF;
fH[fG.init[name]]=function(fB){return qx.core.Property.executeOptimizedSetter(this,fC,name,dk,arguments);
};
}
if(fD.inheritable){fG.refresh[name]=dw+fF;
fH[fG.refresh[name]]=function(ef){return qx.core.Property.executeOptimizedSetter(this,fC,name,dw,arguments);
};
}fG.setRuntime[name]=dj+fF;
fH[fG.setRuntime[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,fC,name,dj,arguments);
};
fG.resetRuntime[name]=du+fF;
fH[fG.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fC,name,du);
};

if(fD.themeable){fG.setThemed[name]=dl+fF;
fH[fG.setThemed[name]]=function(eg){return qx.core.Property.executeOptimizedSetter(this,fC,name,dl,arguments);
};
fG.resetThemed[name]=ci+fF;
fH[fG.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fC,name,ci);
};
}
if(fD.check===ct){fH[ba+fF]=new Function(cU+fG.set[name]+X+fG.get[name]+dc);
fH[bl+fF]=new Function(cU+fG.get[name]+cC);
}},__lh:function(s){return !!this.__lb[s];
},__li:function(eD){return this.__lb[eD]||qx.Bootstrap.classIsDefined(eD)||(qx.Interface&&qx.Interface.isDefined(eD));
},__lj:{0:cn,1:bS,2:bd,3:cH,4:z,5:bL},error:function(eR,eS,eT,eU,eV){var eW=eR.constructor.classname;
var eX=bz+eT+bH+eW+bk+this.$$method[eU][eT]+cw+eV+bG;
throw new Error(eX+(this.__lj[eS]||"Unknown reason: "+eS));
},__lk:function(et,eu,name,ev,ew,ey){var ez=this.$$method[ev][name];
if(qx.core.Variant.isSet(ce,cf)){if(qx.core.Setting.get(cP)>1){qx.Bootstrap.debug("Code["+this.$$method[ev][name]+"]: "+ew.join(""));
}try{eu[ez]=new Function(K,ew.join(dz));
}catch(eE){throw new Error("Malformed generated code to unwrap method: "+this.$$method[ev][name]+"\n"+ew.join(""));
}}else{eu[ez]=new Function(K,ew.join(dz));
}if(qx.core.Variant.isSet(C,cf)){eu[ez]=qx.core.Aspect.wrap(et.classname+dE+ez,eu[ez],bF);
}qx.Bootstrap.setDisplayName(eu[ez],et.classname+cv,ez);
if(ey===undefined){return et[ez]();
}else if(qx.core.Variant.isSet(ce,cf)){return et[ez].apply(et,ey);
}else{return et[ez](ey[0]);
}},executeOptimizedGetter:function(ek,el,name,em){var eo=el.$$properties[name];
var eq=el.prototype;
var en=[];
var ep=this.$$store;
en.push(di,ep.runtime[name],ck);
en.push(cd,ep.runtime[name],dr);

if(eo.inheritable){en.push(ch,ep.inherit[name],ck);
en.push(cd,ep.inherit[name],dr);
en.push(cQ);
}en.push(di,ep.user[name],ck);
en.push(cd,ep.user[name],dr);

if(eo.themeable){en.push(ch,ep.theme[name],ck);
en.push(cd,ep.theme[name],dr);
}
if(eo.deferredInit&&eo.init===undefined){en.push(ch,ep.init[name],ck);
en.push(cd,ep.init[name],dr);
}en.push(cQ);

if(eo.init!==undefined){if(eo.inheritable){en.push(dU,ep.init[name],dr);

if(eo.nullable){en.push(bq);
}else if(eo.init!==undefined){en.push(cd,ep.init[name],dr);
}else{en.push(cI,name,L,el.classname,P);
}en.push(dV);
}else{en.push(cd,ep.init[name],dr);
}}else if(eo.inheritable||eo.nullable){en.push(db);
}else{en.push(W,name,L,el.classname,P);
}return this.__lk(ek,eq,name,em,en);
},executeOptimizedSetter:function(fn,fo,name,fp,fq){var fv=fo.$$properties[name];
var fu=fo.prototype;
var fs=[];
var fr=fp===dm||fp===dl||fp===dj||(fp===dk&&fv.init===undefined);
var ft=fv.apply||fv.event||fv.inheritable;
var fw=this.__ll(fp,name);
this.__lm(fs,fv,name,fp,fr);

if(fr){this.__ln(fs,fo,fv,name);
}
if(ft){this.__lo(fs,fr,fw,fp);
}
if(fv.inheritable){fs.push(bn);
}
if(qx.core.Variant.isSet(ce,cf)){if(fr){this.__lp(fs,fv,fo,name,fp);
}}
if(!ft){this.__lq(fs,name,fp,fr);
}else{this.__lr(fs,fv,name,fp,fr);
}
if(fv.inheritable){this.__ls(fs,fv,name,fp);
}else if(ft){this.__lt(fs,fv,name,fp);
}
if(ft){this.__lu(fs,fv,name);
if(fv.inheritable&&fu._getChildren){this.__lv(fs,name);
}}if(fr){fs.push(cx);
}return this.__lk(fn,fu,name,fp,fs,fq);
},__ll:function(ed,name){if(ed===dj||ed===du){var ee=this.$$store.runtime[name];
}else if(ed===dl||ed===ci){ee=this.$$store.theme[name];
}else if(ed===dk){ee=this.$$store.init[name];
}else{ee=this.$$store.user[name];
}return ee;
},__lm:function(fx,fy,name,fz,fA){if(qx.core.Variant.isSet(ce,cf)){fx.push(M);

if(fz===dk){fx.push(bV,name,cb,fz,dy);
}
if(fz===dw){}else if(fA){fx.push(E,name,cb,fz,dy);
fx.push(cV,name,cb,fz,dy);
}else{fx.push(cB,name,cb,fz,dy);
}}else{if(!fy.nullable||fy.check||fy.inheritable){fx.push(M);
}if(fz===dm){fx.push(cV,name,cb,fz,dy);
}}},__ln:function(eJ,eK,eL,name){if(eL.transform){eJ.push(br,eL.transform,cM);
}if(eL.validate){if(typeof eL.validate===cg){eJ.push(dn,eL.validate,cM);
}else if(eL.validate instanceof Function){eJ.push(eK.classname,cO,name);
eJ.push(bw);
}}},__lo:function(eM,eN,eO,eP){var eQ=(eP===cc||eP===ci||eP===du);

if(eN){eM.push(di,eO,dR);
}else if(eQ){eM.push(di,eO,bJ);
}},__lp:qx.core.Variant.select(ce,{"on":function(fb,fc,fd,name,fe){if(!fc.nullable){fb.push(bY,name,cb,fe,dy);
}if(fc.check!==undefined){fb.push(dN+name+F+fd.classname+cE);
if(fc.nullable){fb.push(da);
}if(fc.inheritable){fb.push(y);
}fb.push(bf);

if(this.__la[fc.check]!==undefined){fb.push(J,this.__la[fc.check],O);
}else if(qx.Class.isDefined(fc.check)){fb.push(bW,fc.check,I);
}else if(qx.Interface&&qx.Interface.isDefined(fc.check)){fb.push(dH,fc.check,I);
}else if(typeof fc.check===cu){fb.push(cr,fd.classname,cO,name);
fb.push(bC);
}else if(typeof fc.check===cg){fb.push(J,fc.check,O);
}else if(fc.check instanceof Array){fb.push(bp,fd.classname,cO,name,Y);
}else{throw new Error("Could not add check to property "+name+" of class "+fd.classname);
}fb.push(bA,name,cb,fe,dy);
}},"off":undefined}),__lq:function(eG,name,eH,eI){if(eH===dj){eG.push(dn,this.$$store.runtime[name],dp);
}else if(eH===du){eG.push(di,this.$$store.runtime[name],ck);
eG.push(dh,this.$$store.runtime[name],dr);
}else if(eH===dm){eG.push(dn,this.$$store.user[name],dp);
}else if(eH===cc){eG.push(di,this.$$store.user[name],ck);
eG.push(dh,this.$$store.user[name],dr);
}else if(eH===dl){eG.push(dn,this.$$store.theme[name],dp);
}else if(eH===ci){eG.push(di,this.$$store.theme[name],ck);
eG.push(dh,this.$$store.theme[name],dr);
}else if(eH===dk&&eI){eG.push(dn,this.$$store.init[name],dp);
}},__lr:function(ff,fg,name,fh,fi){if(fg.inheritable){ff.push(bM,this.$$store.inherit[name],dr);
}else{ff.push(dK);
}ff.push(di,this.$$store.runtime[name],dv);

if(fh===dj){ff.push(dq,this.$$store.runtime[name],dp);
}else if(fh===du){ff.push(dh,this.$$store.runtime[name],dr);
ff.push(di,this.$$store.user[name],ck);
ff.push(dq,this.$$store.user[name],dr);
ff.push(ch,this.$$store.theme[name],ck);
ff.push(dq,this.$$store.theme[name],dr);
ff.push(ch,this.$$store.init[name],dv);
ff.push(dq,this.$$store.init[name],dr);
ff.push(dn,this.$$store.useinit[name],ds);
ff.push(cj);
}else{ff.push(cS,this.$$store.runtime[name],dr);
if(fh===dm){ff.push(dn,this.$$store.user[name],dp);
}else if(fh===cc){ff.push(dh,this.$$store.user[name],dr);
}else if(fh===dl){ff.push(dn,this.$$store.theme[name],dp);
}else if(fh===ci){ff.push(dh,this.$$store.theme[name],dr);
}else if(fh===dk&&fi){ff.push(dn,this.$$store.init[name],dp);
}}ff.push(cj);
ff.push(ch,this.$$store.user[name],dv);

if(fh===dm){if(!fg.inheritable){ff.push(dB,this.$$store.user[name],dr);
}ff.push(dq,this.$$store.user[name],dp);
}else if(fh===cc){if(!fg.inheritable){ff.push(dB,this.$$store.user[name],dr);
}ff.push(dh,this.$$store.user[name],dr);
ff.push(di,this.$$store.runtime[name],ck);
ff.push(dq,this.$$store.runtime[name],dr);
ff.push(di,this.$$store.theme[name],ck);
ff.push(dq,this.$$store.theme[name],dr);
ff.push(ch,this.$$store.init[name],dv);
ff.push(dq,this.$$store.init[name],dr);
ff.push(dn,this.$$store.useinit[name],ds);
ff.push(cj);
}else{if(fh===dj){ff.push(dq,this.$$store.runtime[name],dp);
}else if(fg.inheritable){ff.push(dq,this.$$store.user[name],dr);
}else{ff.push(cS,this.$$store.user[name],dr);
}if(fh===dl){ff.push(dn,this.$$store.theme[name],dp);
}else if(fh===ci){ff.push(dh,this.$$store.theme[name],dr);
}else if(fh===dk&&fi){ff.push(dn,this.$$store.init[name],dp);
}}ff.push(cj);
if(fg.themeable){ff.push(ch,this.$$store.theme[name],dv);

if(!fg.inheritable){ff.push(dB,this.$$store.theme[name],dr);
}
if(fh===dj){ff.push(dq,this.$$store.runtime[name],dp);
}else if(fh===dm){ff.push(dq,this.$$store.user[name],dp);
}else if(fh===dl){ff.push(dq,this.$$store.theme[name],dp);
}else if(fh===ci){ff.push(dh,this.$$store.theme[name],dr);
ff.push(di,this.$$store.init[name],dv);
ff.push(dq,this.$$store.init[name],dr);
ff.push(dn,this.$$store.useinit[name],ds);
ff.push(cj);
}else if(fh===dk){if(fi){ff.push(dn,this.$$store.init[name],dp);
}ff.push(dq,this.$$store.theme[name],dr);
}else if(fh===dw){ff.push(dq,this.$$store.theme[name],dr);
}ff.push(cj);
}ff.push(ch,this.$$store.useinit[name],ca);

if(!fg.inheritable){ff.push(dB,this.$$store.init[name],dr);
}
if(fh===dk){if(fi){ff.push(dq,this.$$store.init[name],dp);
}else{ff.push(dq,this.$$store.init[name],dr);
}}else if(fh===dm||fh===dj||fh===dl||fh===dw){ff.push(dh,this.$$store.useinit[name],dr);

if(fh===dj){ff.push(dq,this.$$store.runtime[name],dp);
}else if(fh===dm){ff.push(dq,this.$$store.user[name],dp);
}else if(fh===dl){ff.push(dq,this.$$store.theme[name],dp);
}else if(fh===dw){ff.push(dq,this.$$store.init[name],dr);
}}ff.push(cj);
if(fh===dm||fh===dj||fh===dl||fh===dk){ff.push(bi);

if(fh===dj){ff.push(dq,this.$$store.runtime[name],dp);
}else if(fh===dm){ff.push(dq,this.$$store.user[name],dp);
}else if(fh===dl){ff.push(dq,this.$$store.theme[name],dp);
}else if(fh===dk){if(fi){ff.push(dq,this.$$store.init[name],dp);
}else{ff.push(dq,this.$$store.init[name],dr);
}ff.push(dn,this.$$store.useinit[name],ds);
}ff.push(cj);
}},__ls:function(c,d,name,e){c.push(cp);

if(e===dw){c.push(bT);
}else{c.push(cX,this.$$store.inherit[name],dr);
}c.push(bD);
c.push(dn,this.$$store.init[name],df);
c.push(dn,this.$$store.init[name],dO);
c.push(dq,this.$$store.init[name],dr);
c.push(dn,this.$$store.useinit[name],ds);
c.push(cJ);
c.push(dh,this.$$store.useinit[name],cD);
c.push(cj);
c.push(H);
c.push(bb);
c.push(bQ,this.$$store.inherit[name],dr);
c.push(cj);
c.push(bN);
c.push(dh,this.$$store.inherit[name],dr);
c.push(bs,this.$$store.inherit[name],be);
c.push(dL);
if(d.init!==undefined&&e!==dk){c.push(cT,this.$$store.init[name],dA);
}else{c.push(N);
}c.push(cm);
},__lt:function(eh,ei,name,ej){if(ej!==dm&&ej!==dj&&ej!==dl){eh.push(dD);
}eh.push(H);
if(ei.init!==undefined&&ej!==dk){eh.push(cT,this.$$store.init[name],dA);
}else{eh.push(N);
}},__lu:function(eY,fa,name){if(fa.apply){eY.push(dn,fa.apply,cy,name,dd);
}if(fa.event){eY.push(cY,cG,fa.event,bP,A,fa.event,bm,cs);
}},__lv:function(fm,name){fm.push(bE);
fm.push(V,this.$$method.refresh[name],cF,this.$$method.refresh[name],bg);
fm.push(cj);
}},defer:function(t){var v=navigator.userAgent.indexOf(bc)!=-1;
var u=navigator.userAgent.indexOf(w)!=-1;
if(v||u){t.__lh=t.__li;
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
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__kd:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__kd;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var q=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,q);
}return q;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(n,o,p,name){this.__kd.push({fcn:n,pos:o===c?-1:1,type:p,name:name});
}}});
})();
(function(){var u="qx.debug",t="on",s="object",r=".",q="qx.aspects",p="static",o="function",n="string",m="abstract",k="singleton",U="constructor",T="_",S=".prototype",R="$$init_",Q="extend",P="init",O="qx.event.type.Data",N="refine",M="members",L="variants",B="off",C="properties",z="statics",A="toString",x="events",y="]",v="Class",w="Interface",D="qx.Class",E="Mixin",G="settings",F='Assumed static class because no "extend" key was found. ',I="[Class ",H="destructor",K="destruct",J="member";
qx.Bootstrap.define(D,{statics:{define:function(name,bk){if(!bk){var bk={};
}if(bk.include&&!(bk.include instanceof Array)){bk.include=[bk.include];
}if(bk.implement&&!(bk.implement instanceof Array)){bk.implement=[bk.implement];
}var bl=false;

if(!bk.hasOwnProperty(Q)&&!bk.type){bk.type=p;
bl=true;
}if(qx.core.Variant.isSet(u,t)){try{this.__bY(name,bk);
}catch(cj){if(bl){cj.message=F+cj.message;
}throw cj;
}}var bm=this.__cb(name,bk.type,bk.extend,bk.statics,bk.construct,bk.destruct,bk.include);
if(bk.extend){if(bk.properties){this.__cd(bm,bk.properties,true);
}if(bk.members){this.__cf(bm,bk.members,true,true,false);
}if(bk.events){this.__cc(bm,bk.events,true);
}if(bk.include){for(var i=0,l=bk.include.length;i<l;i++){this.__cj(bm,bk.include[i],false);
}}}if(bk.settings){for(var bn in bk.settings){qx.core.Setting.define(bn,bk.settings[bn]);
}}if(bk.variants){for(var bn in bk.variants){qx.core.Variant.define(bn,bk.variants[bn].allowedValues,bk.variants[bn].defaultValue);
}}if(bk.implement){for(var i=0,l=bk.implement.length;i<l;i++){this.__ch(bm,bk.implement[i]);
}}
if(qx.core.Variant.isSet(u,t)){this.__ca(bm);
}if(bk.defer){bk.defer.self=bm;
bk.defer(bm,bm.prototype,{add:function(name,cy){var cz={};
cz[name]=cy;
qx.Class.__cd(bm,cz,true);
}});
}return bm;
},undefine:function(name){delete this.$$registry[name];
var cT=name.split(r);
var cV=[window];

for(var i=0;i<cT.length;i++){cV.push(cV[i][cT[i]]);
}for(var i=cV.length-1;i>=1;i--){var cU=cV[i];
var parent=cV[i-1];

if(qx.Bootstrap.isFunction(cU)||qx.Bootstrap.objectGetLength(cU)===0){delete parent[cT[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bu,bv){if(qx.core.Variant.isSet(u,t)){if(!bv){throw new Error("The mixin to include into class '"+bu.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bv,bu);
}qx.Class.__cj(bu,bv,false);
},patch:function(ch,ci){if(qx.core.Variant.isSet(u,t)){if(!ci){throw new Error("The mixin to patch class '"+ch.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(ci,ch);
}qx.Class.__cj(ch,ci,true);
},isSubClassOf:function(cr,cs){if(!cr){return false;
}
if(cr==cs){return true;
}
if(cr.prototype instanceof cs){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(e){var f=[];

while(e){if(e.$$properties){f.push.apply(f,qx.Bootstrap.getKeys(e.$$properties));
}e=e.superclass;
}return f;
},getByProperty:function(cx,name){while(cx){if(cx.$$properties&&cx.$$properties[name]){return cx;
}cx=cx.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(cR,cS){return cR.$$includes&&cR.$$includes.indexOf(cS)!==-1;
},getByMixin:function(cb,cc){var cd,i,l;

while(cb){if(cb.$$includes){cd=cb.$$flatIncludes;

for(i=0,l=cd.length;i<l;i++){if(cd[i]===cc){return cb;
}}}cb=cb.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(c,d){return !!this.getByMixin(c,d);
},hasOwnInterface:function(bs,bt){return bs.$$implements&&bs.$$implements.indexOf(bt)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(by){var bz=[];

while(by){if(by.$$implements){bz.push.apply(bz,by.$$flatImplements);
}by=by.superclass;
}return bz;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bh,bi){var bj=bh.constructor;

if(this.hasInterface(bj,bi)){return true;
}
try{qx.Interface.assertObject(bh,bi);
return true;
}catch(b){}
try{qx.Interface.assert(bj,bi,false);
return true;
}catch(bD){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return I+this.classname+y;
},$$registry:qx.Bootstrap.$$registry,__bW:qx.core.Variant.select(u,{"on":{"type":n,"extend":o,"implement":s,"include":s,"construct":o,"statics":s,"properties":s,"members":s,"settings":s,"variants":s,"events":s,"defer":o,"destruct":o},"default":null}),__bX:qx.core.Variant.select(u,{"on":{"type":n,"statics":s,"settings":s,"variants":s,"defer":o},"default":null}),__bY:qx.core.Variant.select(u,{"on":function(name,ct){if(ct.type&&!(ct.type===p||ct.type===m||ct.type===k)){throw new Error('Invalid type "'+ct.type+'" definition for class "'+name+'"!');
}if(ct.type&&ct.type!==p&&!ct.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var cw=ct.type===p?this.__bX:this.__bW;

for(var cv in ct){if(!cw[cv]){throw new Error('The configuration key "'+cv+'" in class "'+name+'" is not allowed!');
}
if(ct[cv]==null){throw new Error('Invalid key "'+cv+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof ct[cv]!==cw[cv]){throw new Error('Invalid type of key "'+cv+'" in class "'+name+'"! The type of the key must be "'+cw[cv]+'"!');
}}var cu=[z,C,M,G,L,x];

for(var i=0,l=cu.length;i<l;i++){var cv=cu[i];

if(ct[cv]!==undefined&&(ct[cv].$$hash!==undefined||!qx.Bootstrap.isObject(ct[cv]))){throw new Error('Invalid key "'+cv+'" in class "'+name+'"! The value needs to be a map!');
}}if(ct.include){if(ct.include instanceof Array){for(var i=0,a=ct.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==E){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(ct.implement){if(ct.implement instanceof Array){for(var i=0,a=ct.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==w){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(ct.include){try{qx.Mixin.checkCompatibility(ct.include);
}catch(cJ){throw new Error('Error in include definition of class "'+name+'"! '+cJ.message);
}}if(ct.settings){for(var cv in ct.settings){if(cv.substr(0,cv.indexOf(r))!=name.substr(0,name.indexOf(r))){throw new Error('Forbidden setting "'+cv+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(ct.variants){for(var cv in ct.variants){if(cv.substr(0,cv.indexOf(r))!=name.substr(0,name.indexOf(r))){throw new Error('Forbidden variant "'+cv+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__ca:qx.core.Variant.select(u,{"on":function(cG){var cI=cG.superclass;

while(cI){if(cI.$$classtype!==m){break;
}var cH=cI.$$implements;

if(cH){for(var i=0;i<cH.length;i++){qx.Interface.assert(cG,cH[i],true);
}}cI=cI.superclass;
}},"default":function(){}}),__cb:function(name,bQ,bR,bS,bT,bU,bV){var bY;

if(!bR&&qx.core.Variant.isSet(q,B)){bY=bS||{};
qx.Bootstrap.setDisplayNames(bY,name);
}else{var bY={};

if(bR){if(!bT){bT=this.__ck();
}
if(this.__cm(bR,bV)){bY=this.__cn(bT,name,bQ);
}else{bY=bT;
}if(bQ===k){bY.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bT,name,U);
}if(bS){qx.Bootstrap.setDisplayNames(bS,name);
var ca;

for(var i=0,a=qx.Bootstrap.getKeys(bS),l=a.length;i<l;i++){ca=a[i];
var bW=bS[ca];

if(qx.core.Variant.isSet(q,t)){if(bW instanceof Function){bW=qx.core.Aspect.wrap(name+r+ca,bW,p);
}bY[ca]=bW;
}else{bY[ca]=bW;
}}}}var bX=qx.Bootstrap.createNamespace(name,bY);
bY.name=bY.classname=name;
bY.basename=bX;
bY.$$type=v;

if(bQ){bY.$$classtype=bQ;
}if(!bY.hasOwnProperty(A)){bY.toString=this.genericToString;
}
if(bR){qx.Bootstrap.extendClass(bY,bT,bR,name,bX);
if(bU){if(qx.core.Variant.isSet(q,t)){bU=qx.core.Aspect.wrap(name,bU,H);
}bY.$$destructor=bU;
qx.Bootstrap.setDisplayName(bU,name,K);
}}this.$$registry[name]=bY;
return bY;
},__cc:function(bE,bF,bG){if(qx.core.Variant.isSet(u,t)){if(typeof bF!==s||bF instanceof Array){throw new Error(bE.classname+": the events must be defined as map!");
}
for(var bH in bF){if(typeof bF[bH]!==n){throw new Error(bE.classname+"/"+bH+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bE.$$events&&bG!==true){for(var bH in bF){if(bE.$$events[bH]!==undefined&&bE.$$events[bH]!==bF[bH]){throw new Error(bE.classname+"/"+bH+": the event value/type cannot be changed from "+bE.$$events[bH]+" to "+bF[bH]);
}}}}
if(bE.$$events){for(var bH in bF){bE.$$events[bH]=bF[bH];
}}else{bE.$$events=bF;
}},__cd:function(bc,bd,be){var bf;

if(be===undefined){be=false;
}var bg=bc.prototype;

for(var name in bd){bf=bd[name];
if(qx.core.Variant.isSet(u,t)){this.__ce(bc,name,bf,be);
}bf.name=name;
if(!bf.refine){if(bc.$$properties===undefined){bc.$$properties={};
}bc.$$properties[name]=bf;
}if(bf.init!==undefined){bc.prototype[R+name]=bf.init;
}if(bf.event!==undefined){var event={};
event[bf.event]=O;
this.__cc(bc,event,be);
}if(bf.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bg.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bc);
}}
if(!bf.refine){qx.core.Property.attachMethods(bc,name,bf);
}}},__ce:qx.core.Variant.select(u,{"on":function(cK,name,cL,cM){var cO=this.hasProperty(cK,name);

if(cO){var cN=this.getPropertyDefinition(cK,name);

if(cL.refine&&cN.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+cK.classname+"'.");
}}
if(!cO&&cL.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+cK.classname+"'!");
}
if(cO&&!cM){throw new Error("Class "+cK.classname+" already has a property: "+name+"!");
}
if(cO&&cM){if(!cL.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+cK.classname+', original class: '+this.getByProperty(cK,name).classname+'.');
}
for(var cP in cL){if(cP!==P&&cP!==N){throw new Error("Class "+cK.classname+" could not refine property: "+name+"! Key: "+cP+" could not be refined!");
}}}var cQ=cL.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var cP in cL){if(cQ[cP]===undefined){throw new Error('The configuration key "'+cP+'" of property "'+name+'" in class "'+cK.classname+'" is not allowed!');
}
if(cL[cP]===undefined){throw new Error('Invalid key "'+cP+'" of property "'+name+'" in class "'+cK.classname+'"! The value is undefined: '+cL[cP]);
}
if(cQ[cP]!==null&&typeof cL[cP]!==cQ[cP]){throw new Error('Invalid type of key "'+cP+'" of property "'+name+'" in class "'+cK.classname+'"! The type of the key must be "'+cQ[cP]+'"!');
}}
if(cL.transform!=null){if(!(typeof cL.transform==n)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+cK.classname+'"! Needs to be a String.');
}}
if(cL.check!=null){if(!qx.Bootstrap.isString(cL.check)&&!qx.Bootstrap.isArray(cL.check)&&!qx.Bootstrap.isFunction(cL.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+cK.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__cf:function(bI,bJ,bK,bL,bM){var bN=bI.prototype;
var bP,bO;
qx.Bootstrap.setDisplayNames(bJ,bI.classname+S);

for(var i=0,a=qx.Bootstrap.getKeys(bJ),l=a.length;i<l;i++){bP=a[i];
bO=bJ[bP];

if(qx.core.Variant.isSet(u,t)){if(bN[bP]!==undefined&&bP.charAt(0)==T&&bP.charAt(1)==T){throw new Error('Overwriting private member "'+bP+'" of Class "'+bI.classname+'" is not allowed!');
}
if(bK!==true&&bN.hasOwnProperty(bP)){throw new Error('Overwriting member "'+bP+'" of Class "'+bI.classname+'" is not allowed!');
}}if(bL!==false&&bO instanceof Function&&bO.$$type==null){if(bM==true){bO=this.__cg(bO,bN[bP]);
}else{if(bN[bP]){bO.base=bN[bP];
}bO.self=bI;
}
if(qx.core.Variant.isSet(q,t)){bO=qx.core.Aspect.wrap(bI.classname+r+bP,bO,J);
}}bN[bP]=bO;
}},__cg:function(bw,bx){if(bx){return function(){var bB=bw.base;
bw.base=bx;
var bA=bw.apply(this,arguments);
bw.base=bB;
return bA;
};
}else{return bw;
}},__ch:function(ck,cl){if(qx.core.Variant.isSet(u,t)){if(!ck||!cl){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ck,cl)){throw new Error('Interface "'+cl.name+'" is already used by Class "'+ck.classname+'!');
}if(ck.$$classtype!==m){qx.Interface.assert(ck,cl,true);
}}var cm=qx.Interface.flatten([cl]);

if(ck.$$implements){ck.$$implements.push(cl);
ck.$$flatImplements.push.apply(ck.$$flatImplements,cm);
}else{ck.$$implements=[cl];
ck.$$flatImplements=cm;
}},__ci:function(V){var name=V.classname;
var W=this.__cn(V,name,V.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(V),l=a.length;i<l;i++){X=a[i];
W[X]=V[X];
}W.prototype=V.prototype;
var ba=V.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(ba),l=a.length;i<l;i++){X=a[i];
var bb=ba[X];
if(bb&&bb.self==V){bb.self=W;
}}for(var X in this.$$registry){var Y=this.$$registry[X];

if(!Y){continue;
}
if(Y.base==V){Y.base=W;
}
if(Y.superclass==V){Y.superclass=W;
}
if(Y.$$original){if(Y.$$original.base==V){Y.$$original.base=W;
}
if(Y.$$original.superclass==V){Y.$$original.superclass=W;
}}}qx.Bootstrap.createNamespace(name,W);
this.$$registry[name]=W;
return W;
},__cj:function(cA,cB,cC){if(qx.core.Variant.isSet(u,t)){if(!cA||!cB){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(cA,cB)){return;
}var cF=cA.$$original;

if(cB.$$constructor&&!cF){cA=this.__ci(cA);
}var cE=qx.Mixin.flatten([cB]);
var cD;

for(var i=0,l=cE.length;i<l;i++){cD=cE[i];
if(cD.$$events){this.__cc(cA,cD.$$events,cC);
}if(cD.$$properties){this.__cd(cA,cD.$$properties,cC);
}if(cD.$$members){this.__cf(cA,cD.$$members,cC,cC,cC);
}}if(cA.$$includes){cA.$$includes.push(cB);
cA.$$flatIncludes.push.apply(cA.$$flatIncludes,cE);
}else{cA.$$includes=[cB];
cA.$$flatIncludes=cE;
}},__ck:function(){function bC(){bC.base.apply(this,arguments);
}return bC;
},__cl:function(){return function(){};
},__cm:function(cn,co){if(qx.core.Variant.isSet(u,t)){return true;
}if(cn&&cn.$$includes){var cp=cn.$$flatIncludes;

for(var i=0,l=cp.length;i<l;i++){if(cp[i].$$constructor){return true;
}}}if(co){var cq=qx.Mixin.flatten(co);

for(var i=0,l=cq.length;i<l;i++){if(cq[i].$$constructor){return true;
}}}return false;
},__cn:function(bo,name,bp){var br=function(){var cg=br;

if(qx.core.Variant.isSet(u,t)){if(!(this instanceof cg)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(bp===m){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(bp===k){if(!cg.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var cf=cg.$$original.apply(this,arguments);
if(cg.$$includes){var ce=cg.$$flatIncludes;

for(var i=0,l=ce.length;i<l;i++){if(ce[i].$$constructor){ce[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(u,t)){if(this.classname===name){this.$$initialized=true;
}}return cf;
};

if(qx.core.Variant.isSet(q,t)){var bq=qx.core.Aspect.wrap(name,br,U);
br.$$original=bo;
br.constructor=bq;
br=bq;
}br.$$original=bo;
bo.wrapper=br;
return br;
}},defer:function(){if(qx.core.Variant.isSet(q,t)){for(var g in qx.Bootstrap.$$registry){var h=qx.Bootstrap.$$registry[g];

for(var j in h){if(h[j] instanceof Function){h[j]=qx.core.Aspect.wrap(g+r+j,h[j],p);
}}}}}});
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
(function(){var F="qx.debug",E="on",D="|bubble",C="|capture",B="|",A="': ",z="'",y="",x="_",w="Invalid Target.",bf="Invalid event type.",be="Invalid event target.",bd=" from the target '",bc="Invalid callback function",bb="unload",ba="Failed to remove event listener for id '",Y="Invalid context for callback.",X="Invalid capture flag.",W="Failed to add event listener for type '",V="UNKNOWN_",M="__fi",N="__fj",K="capture",L="qx.event.Manager",I="Could not dispatch event '",J="DOM_",G="QX_",H=" to the target '",O="Failed to remove event listener for type '",P="Invalid capture falg.",R="c",Q="Invalid id type.",T="' on target '",S="WIN_",U="Invalid event object.";
qx.Class.define(L,{extend:Object,construct:function(cx,cy){this.__fe=cx;
this.__ff=qx.core.ObjectRegistry.toHashCode(cx);
this.__fg=cy;
if(cx.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cx,bb,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cx,bb,arguments.callee);
self.dispose();
}));
}this.__fh={};
this.__fi={};
this.__fj={};
this.__fk={};
},statics:{__fl:0,getNextUniqueId:function(){return (this.__fl++)+y;
}},members:{__fg:null,__fh:null,__fj:null,__fm:null,__fi:null,__fk:null,__fe:null,__ff:null,getWindow:function(){return this.__fe;
},getWindowId:function(){return this.__ff;
},getHandler:function(bL){var bM=this.__fi[bL.classname];

if(bM){return bM;
}return this.__fi[bL.classname]=new bL(this);
},getDispatcher:function(cv){var cw=this.__fj[cv.classname];

if(cw){return cw;
}return this.__fj[cv.classname]=new cv(this,this.__fg);
},getListeners:function(a,b,c){var d=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var f=this.__fh[d];

if(!f){return null;
}var g=b+(c?C:D);
var e=f[g];
return e?e.concat():null;
},serializeListeners:function(cl){var cs=cl.$$hash||qx.core.ObjectRegistry.toHashCode(cl);
var cu=this.__fh[cs];
var cq=[];

if(cu){var co,ct,cm,cp,cr;

for(var cn in cu){co=cn.indexOf(B);
ct=cn.substring(0,co);
cm=cn.charAt(co+1)==R;
cp=cu[cn];

for(var i=0,l=cp.length;i<l;i++){cr=cp[i];
cq.push({self:cr.context,handler:cr.handler,type:ct,capture:cm});
}}}return cq;
},toggleAttachedEvents:function(cz,cA){var cF=cz.$$hash||qx.core.ObjectRegistry.toHashCode(cz);
var cH=this.__fh[cF];

if(cH){var cC,cG,cB,cD;

for(var cE in cH){cC=cE.indexOf(B);
cG=cE.substring(0,cC);
cB=cE.charCodeAt(cC+1)===99;
cD=cH[cE];

if(cA){this.__fn(cz,cG,cB);
}else{this.__fo(cz,cG,cB);
}}}},hasListener:function(bt,bu,bv){if(qx.core.Variant.isSet(F,E)){if(bt==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bt);
}}var bw=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var by=this.__fh[bw];

if(!by){return false;
}var bz=bu+(bv?C:D);
var bx=by[bz];
return bx&&bx.length>0;
},importListeners:function(h,j){if(qx.core.Variant.isSet(F,E)){if(h==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+h);
}}var q=h.$$hash||qx.core.ObjectRegistry.toHashCode(h);
var r=this.__fh[q]={};
var n=qx.event.Manager;

for(var k in j){var o=j[k];
var p=o.type+(o.capture?C:D);
var m=r[p];

if(!m){m=r[p]=[];
this.__fn(h,o.type,o.capture);
}m.push({handler:o.listener,context:o.self,unique:o.unique||(n.__fl++)+y});
}},addListener:function(bA,bB,bC,self,bD){if(qx.core.Variant.isSet(F,E)){var bH=W+bB+z+H+bA.classname+A;
qx.core.Assert.assertObject(bA,bH+w);
qx.core.Assert.assertString(bB,bH+bf);
qx.core.Assert.assertFunction(bC,bH+bc);

if(bD!==undefined){qx.core.Assert.assertBoolean(bD,X);
}}var bI=bA.$$hash||qx.core.ObjectRegistry.toHashCode(bA);
var bK=this.__fh[bI];

if(!bK){bK=this.__fh[bI]={};
}var bG=bB+(bD?C:D);
var bF=bK[bG];

if(!bF){bF=bK[bG]=[];
}if(bF.length===0){this.__fn(bA,bB,bD);
}var bJ=(qx.event.Manager.__fl++)+y;
var bE={handler:bC,context:self,unique:bJ};
bF.push(bE);
return bG+B+bJ;
},findHandler:function(bN,bO){var bY=false,bR=false,ca=false;
var bX;

if(bN.nodeType===1){bY=true;
bX=J+bN.tagName.toLowerCase()+x+bO;
}else if(bN==this.__fe){bR=true;
bX=S+bO;
}else if(bN.classname){ca=true;
bX=G+bN.classname+x+bO;
}else{bX=V+bN+x+bO;
}var bT=this.__fk;

if(bT[bX]){return bT[bX];
}var bW=this.__fg.getHandlers();
var bS=qx.event.IEventHandler;
var bU,bV,bQ,bP;

for(var i=0,l=bW.length;i<l;i++){bU=bW[i];
bQ=bU.SUPPORTED_TYPES;

if(bQ&&!bQ[bO]){continue;
}bP=bU.TARGET_CHECK;

if(bP){if(!bY&&bP===bS.TARGET_DOMNODE){continue;
}else if(!bR&&bP===bS.TARGET_WINDOW){continue;
}else if(!ca&&bP===bS.TARGET_OBJECT){continue;
}}bV=this.getHandler(bW[i]);

if(bU.IGNORE_CAN_HANDLE||bV.canHandleEvent(bN,bO)){bT[bX]=bV;
return bV;
}}return null;
},__fn:function(cW,cX,cY){var da=this.findHandler(cW,cX);

if(da){da.registerEvent(cW,cX,cY);
return;
}
if(qx.core.Variant.isSet(F,E)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cX+"' on target '"+cW+"'!");
}},removeListener:function(cb,cc,cd,self,ce){if(qx.core.Variant.isSet(F,E)){var ci=O+cc+z+bd+cb.classname+A;
qx.core.Assert.assertObject(cb,ci+w);
qx.core.Assert.assertString(cc,ci+bf);
qx.core.Assert.assertFunction(cd,ci+bc);

if(self!==undefined){qx.core.Assert.assertObject(self,Y);
}
if(ce!==undefined){qx.core.Assert.assertBoolean(ce,P);
}}var cj=cb.$$hash||qx.core.ObjectRegistry.toHashCode(cb);
var ck=this.__fh[cj];

if(!ck){return false;
}var cf=cc+(ce?C:D);
var cg=ck[cf];

if(!cg){return false;
}var ch;

for(var i=0,l=cg.length;i<l;i++){ch=cg[i];

if(ch.handler===cd&&ch.context===self){qx.lang.Array.removeAt(cg,i);

if(cg.length==0){this.__fo(cb,cc,ce);
}return true;
}}return false;
},removeListenerById:function(bg,bh){if(qx.core.Variant.isSet(F,E)){var bn=ba+bh+z+bd+bg.classname+A;
qx.core.Assert.assertObject(bg,bn+w);
qx.core.Assert.assertString(bh,bn+Q);
}var bl=bh.split(B);
var bq=bl[0];
var bi=bl[1].charCodeAt(0)==99;
var bp=bl[2];
var bo=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var br=this.__fh[bo];

if(!br){return false;
}var bm=bq+(bi?C:D);
var bk=br[bm];

if(!bk){return false;
}var bj;

for(var i=0,l=bk.length;i<l;i++){bj=bk[i];

if(bj.unique===bp){qx.lang.Array.removeAt(bk,i);

if(bk.length==0){this.__fo(bg,bq,bi);
}return true;
}}return false;
},removeAllListeners:function(cP){var cT=cP.$$hash||qx.core.ObjectRegistry.toHashCode(cP);
var cV=this.__fh[cT];

if(!cV){return false;
}var cR,cU,cQ;

for(var cS in cV){if(cV[cS].length>0){cR=cS.split(B);
cU=cR[0];
cQ=cR[1]===K;
this.__fo(cP,cU,cQ);
}}delete this.__fh[cT];
return true;
},deleteAllListeners:function(bs){delete this.__fh[bs];
},__fo:function(s,t,u){var v=this.findHandler(s,t);

if(v){v.unregisterEvent(s,t,u);
return;
}
if(qx.core.Variant.isSet(F,E)){qx.log.Logger.warn(this,"There is no event handler for the event '"+t+"' on target '"+s+"'!");
}},dispatchEvent:function(cI,event){if(qx.core.Variant.isSet(F,E)){var cN=I+event+T+cI.classname+A;
qx.core.Assert.assertNotUndefined(cI,cN+be);
qx.core.Assert.assertNotNull(cI,cN+be);
qx.core.Assert.assertInstance(event,qx.event.type.Event,cN+U);
}var cO=event.getType();

if(!event.getBubbles()&&!this.hasListener(cI,cO)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cI);
}var cM=this.__fg.getDispatchers();
var cL;
var cK=false;

for(var i=0,l=cM.length;i<l;i++){cL=this.getDispatcher(cM[i]);
if(cL.canDispatchEvent(cI,event,cO)){cL.dispatchEvent(cI,event,cO);
cK=true;
break;
}}
if(!cK){if(qx.core.Variant.isSet(F,E)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cO+" on "+cI);
}return true;
}var cJ=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cJ;
},dispose:function(){this.__fg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,M);
qx.util.DisposeUtil.disposeMap(this,N);
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
(function(){var r="qx.debug",q="on",p="The second parameter must be an array.",o="mshtml",n="The first parameter must be an array.",m="Parameter must be an array.",k="qx.client",j="[object Array]",h="qx.lang.Array",g="qx",e="number",f="string";
qx.Class.define(h,{statics:{toArray:function(D,E){return this.cast(D,Array,E);
},cast:function(bn,bo,bp){if(bn.constructor===bo){return bn;
}
if(qx.Class.hasInterface(bn,qx.data.IListData)){var bn=bn.toArray();
}var bq=new bo;
if(qx.core.Variant.isSet(k,o)){if(bn.item){for(var i=bp||0,l=bn.length;i<l;i++){bq.push(bn[i]);
}return bq;
}}if(Object.prototype.toString.call(bn)===j&&bp==null){bq.push.apply(bq,bn);
}else{bq.push.apply(bq,Array.prototype.slice.call(bn,bp||0));
}return bq;
},fromArguments:function(S,T){return Array.prototype.slice.call(S,T||0);
},fromCollection:function(br){if(qx.core.Variant.isSet(k,o)){if(br.item){var bs=[];

for(var i=0,l=br.length;i<l;i++){bs[i]=br[i];
}return bs;
}}return Array.prototype.slice.call(br,0);
},fromShortHand:function(L){var N=L.length;
var M=qx.lang.Array.clone(L);
switch(N){case 1:M[1]=M[2]=M[3]=M[0];
break;
case 2:M[2]=M[0];
case 3:M[3]=M[1];
}return M;
},clone:function(a){return a.concat();
},insertAt:function(J,K,i){J.splice(i,0,K);
return J;
},insertBefore:function(s,t,u){var i=s.indexOf(u);

if(i==-1){s.push(t);
}else{s.splice(i,0,t);
}return s;
},insertAfter:function(F,G,H){var i=F.indexOf(H);

if(i==-1||i==(F.length-1)){F.push(G);
}else{F.splice(i+1,0,G);
}return F;
},removeAt:function(I,i){return I.splice(i,1)[0];
},removeAll:function(bi){bi.length=0;
return this;
},append:function(Q,R){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(Q,n);
qx.core.Assert&&qx.core.Assert.assertArray(R,p);
}Array.prototype.push.apply(Q,R);
return Q;
},exclude:function(bj,bk){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(bj,n);
qx.core.Assert&&qx.core.Assert.assertArray(bk,p);
}
for(var i=0,bm=bk.length,bl;i<bm;i++){bl=bj.indexOf(bk[i]);

if(bl!=-1){bj.splice(bl,1);
}}return bj;
},remove:function(x,y){var i=x.indexOf(y);

if(i!=-1){x.splice(i,1);
return y;
}},contains:function(z,A){return z.indexOf(A)!==-1;
},equals:function(O,P){var length=O.length;

if(length!==P.length){return false;
}
for(var i=0;i<length;i++){if(O[i]!==P[i]){return false;
}}return true;
},sum:function(v){var w=0;

for(var i=0,l=v.length;i<l;i++){w+=v[i];
}return w;
},max:function(bt){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(bt,m);
}var i,bv=bt.length,bu=bt[0];

for(i=1;i<bv;i++){if(bt[i]>bu){bu=bt[i];
}}return bu===undefined?null:bu;
},min:function(b){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(b,m);
}var i,d=b.length,c=b[0];

for(i=1;i<d;i++){if(b[i]<c){c=b[i];
}}return c===undefined?null:c;
},unique:function(U){var bf=[],W={},ba={},bc={};
var bb,V=0;
var bg=g+qx.lang.Date.now();
var X=false,be=false,bh=false;
for(var i=0,bd=U.length;i<bd;i++){bb=U[i];
if(bb===null){if(!X){X=true;
bf.push(bb);
}}else if(bb===undefined){}else if(bb===false){if(!be){be=true;
bf.push(bb);
}}else if(bb===true){if(!bh){bh=true;
bf.push(bb);
}}else if(typeof bb===f){if(!W[bb]){W[bb]=1;
bf.push(bb);
}}else if(typeof bb===e){if(!ba[bb]){ba[bb]=1;
bf.push(bb);
}}else{Y=bb[bg];

if(Y==null){Y=bb[bg]=V++;
}
if(!bc[Y]){bc[Y]=bb;
bf.push(bb);
}}}for(var Y in bc){try{delete bc[Y][bg];
}catch(C){try{bc[Y][bg]=null;
}catch(B){throw new Error("Cannot clean-up map entry doneObjects["+Y+"]["+bg+"]");
}}}return bf;
}}});
})();
(function(){var E="()",D="qx.debug",C=".",B=".prototype.",A="on",z="Invalid parameter 'func'.",y='anonymous()',x="Trying to call a bound function with a disposed object as context: ",w=" :: ",v="qx.lang.Function",u=".constructor()";
qx.Class.define(v,{statics:{getCaller:function(b){return b.caller?b.caller.callee:b.callee.caller;
},getName:function(k){if(k.displayName){return k.displayName;
}
if(k.$$original||k.wrapper||k.classname){return k.classname+u;
}
if(k.$$mixin){for(var m in k.$$mixin.$$members){if(k.$$mixin.$$members[m]==k){return k.$$mixin.name+B+m+E;
}}for(var m in k.$$mixin){if(k.$$mixin[m]==k){return k.$$mixin.name+C+m+E;
}}}
if(k.self){var n=k.self.constructor;

if(n){for(var m in n.prototype){if(n.prototype[m]==k){return n.classname+B+m+E;
}}for(var m in n){if(n[m]==k){return n.classname+C+m+E;
}}}}var l=k.toString().match(/function\s*(\w*)\s*\(.*/);

if(l&&l.length>=1&&l[1]){return l[1]+E;
}return y;
},globalEval:function(a){if(window.execScript){return window.execScript(a);
}else{return eval.call(window,a);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(F,G){if(qx.core.Variant.isSet(D,A)){qx.core.Assert&&qx.core.Assert.assertFunction(F,z);
}if(!G){return F;
}if(!(G.self||G.args||G.delay!=null||G.periodical!=null||G.attempt)){return F;
}return function(event){if(qx.core.Variant.isSet(D,A)){if(G.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(G.self.isDisposed(),x+G.self.toString()+w+qx.lang.Function.getName(F));
}}var I=qx.lang.Array.fromArguments(arguments);
if(G.args){I=G.args.concat(I);
}
if(G.delay||G.periodical){var H=qx.event.GlobalError.observeMethod(function(){return F.apply(G.self||this,I);
});

if(G.delay){return window.setTimeout(H,G.delay);
}
if(G.periodical){return window.setInterval(H,G.periodical);
}}else if(G.attempt){var J=false;

try{J=F.apply(G.self||this,I);
}catch(j){}return J;
}else{return F.apply(G.self||this,I);
}};
},bind:function(c,self,d){return this.create(c,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(h,i){return this.create(h,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(r,self,s){if(arguments.length<3){return function(event){return r.call(self||this,event||window.event);
};
}else{var t=qx.lang.Array.fromArguments(arguments,2);
return function(event){var g=[event||window.event];
g.push.apply(g,t);
r.apply(self||this,g);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(K,L,self,M){return this.create(K,{delay:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(o,p,self,q){return this.create(o,{periodical:p,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var l="qx.debug",k="on",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__eR:{},getManager:function(m){if(m==null){if(qx.core.Variant.isSet(l,k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}m=window;
}else if(m.nodeType){m=qx.dom.Node.getWindow(m);
}else if(!qx.dom.Node.isWindow(m)){m=window;
}var o=m.$$hash||qx.core.ObjectRegistry.toHashCode(m);
var n=this.__eR[o];

if(!n){n=new qx.event.Manager(m,this);
this.__eR[o]=n;
}return n;
},removeManager:function(E){var F=E.getWindowId();
delete this.__eR[F];
},addListener:function(Q,R,S,self,T){return this.getManager(Q).addListener(Q,R,S,self,T);
},removeListener:function(p,q,r,self,s){return this.getManager(p).removeListener(p,q,r,self,s);
},removeListenerById:function(C,D){return this.getManager(C).removeListenerById(C,D);
},removeAllListeners:function(M){return this.getManager(M).removeAllListeners(M);
},deleteAllListeners:function(U){var V=U.$$hash;

if(V){this.getManager(U).deleteAllListeners(V);
}},hasListener:function(N,O,P){return this.getManager(N).hasListener(N,O,P);
},serializeListeners:function(G){return this.getManager(G).serializeListeners(G);
},createEvent:function(H,I,J){if(qx.core.Variant.isSet(l,k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(v,event){return this.getManager(v).dispatchEvent(v,event);
},fireEvent:function(w,x,y,z){if(qx.core.Variant.isSet(l,k)){if(arguments.length>2&&y===undefined&&z!==undefined){throw new Error("Create event of type "+x+" with undefined class. Please use null to explicit fallback to default event type!");
}var A=e+x+f+(w?w.classname:d)+h;
qx.core.Assert.assertNotUndefined(w,A+j);
qx.core.Assert.assertNotNull(w,A+j);
}var B=this.createEvent(x,y||null,z);
return this.getManager(w).dispatchEvent(w,B);
},fireNonBubblingEvent:function(W,X,Y,ba){if(qx.core.Variant.isSet(l,k)){if(arguments.length>2&&Y===undefined&&ba!==undefined){throw new Error("Create event of type "+X+" with undefined class. Please use null to explicit fallback to default event type!");
}}var bb=this.getManager(W);

if(!bb.hasListener(W,X,false)){return true;
}var bc=this.createEvent(X,Y||null,ba);
return bb.dispatchEvent(W,bc);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__eS:[],addHandler:function(L){if(qx.core.Variant.isSet(l,k)){qx.core.Assert.assertInterface(L,qx.event.IEventHandler,g);
}this.__eS.push(L);
this.__eS.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__eS;
},__eT:[],addDispatcher:function(t,u){if(qx.core.Variant.isSet(l,k)){qx.core.Assert.assertInterface(t,qx.event.IEventDispatcher,i);
}this.__eT.push(t);
this.__eT.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__eT;
}}});
})();
(function(){var g="on",f="qx.debug",e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__hI:{},__hJ:0,__hK:[],register:function(h){var m=this.__hI;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__hK;

if(j.length>0){k=j.pop();
}else{k=(this.__hJ++)+d;
}h.$$hash=k;
}
if(qx.core.Variant.isSet(f,g)){if(!h.dispose){throw new Error("Invalid object: "+h);
}}m[k]=h;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__hI;

if(s&&s[r]){delete s[r];
this.__hK.push(r);
}try{delete q.$$hash;
}catch(C){if(q.removeAttribute){q.removeAttribute(e);
}}},toHashCode:function(y){if(qx.core.Variant.isSet(f,g)){if(y==null){throw new Error("Invalid object: "+y);
}}var A=y.$$hash;

if(A!=null){return A;
}var z=this.__hK;

if(z.length>0){A=z.pop();
}else{A=(this.__hJ++)+d;
}return y.$$hash=A;
},clearHashCode:function(o){if(qx.core.Variant.isSet(f,g)){if(o==null){throw new Error("Invalid object: "+o);
}}var p=o.$$hash;

if(p!=null){this.__hK.push(p);
try{delete o.$$hash;
}catch(t){if(o.removeAttribute){o.removeAttribute(e);
}}}},fromHashCode:function(B){return this.__hI[B]||null;
},shutdown:function(){this.inShutDown=true;
var v=this.__hI;
var x=[];

for(var w in v){x.push(w);
}x.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var u,i=0,l=x.length;

while(true){try{for(;i<l;i++){w=x[i];
u=v[w];

if(u&&u.dispose){u.dispose();
}}}catch(n){qx.Bootstrap.error(this,"Could not dispose object "+u.toString()+": "+n);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__hI;
},getRegistry:function(){return this.__hI;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(j){return this.getClass(j)==d;
},isNumber:function(g){return (g!==null&&(this.getClass(g)==b||g instanceof Number));
},isBoolean:function(h){return (h!==null&&(this.getClass(h)==a||h instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(i){return (i!==null&&(this.getClass(i)==e||i instanceof Error));
}}});
})();
(function(){var y="",x="!",w="'!",v="'",u="Expected '",t="' (rgb(",s=",",r=")), but found value '",q="Event (",p="Expected value to be the CSS color '",bF="' but found ",bE="The value '",bD=" != ",bC="qx.core.Object",bB="Expected value to be an array but found ",bA=") was fired.",bz="Expected value to be an integer >= 0 but found ",by="' to be not equal with '",bx="' to '",bw="qx.ui.core.Widget",F="Called assertTrue with '",G="Expected value to be a map but found ",D="The function did not raise an exception!",E="Expected value to be undefined but found ",B="Expected value to be a DOM element but found  '",C="Expected value to be a regular expression but found ",z="' to implement the interface '",A="Expected value to be null but found ",N="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",W="Expected value to be a string but found ",bj="null",be="' but found '",bs="' must must be a key of the map '",bo="The String '",S="Expected value not to be undefined but found ",bv="qx.util.ColorUtil",bu=": ",bt="The raised exception does not have the expected type! ",R=") not fired.",U="qx.core.Assert",V="Expected value to be typeof object but found ",Y="' (identical) but found '",bc="' must have any of the values defined in the array '",bf="Expected value to be a number but found ",bl="Called assertFalse with '",bq="]",H="Expected value to be a qooxdoo object but found ",I="' arguments.",T="Expected value not to be null but found ",bi="Array[",bh="' does not match the regular expression '",bg="' to be not identical with '",bn="' arguments but found '",bm="', which cannot be converted to a CSS color!",bd="Expected object '",bk="qx.core.AssertionError",m="Expected value to be a boolean but found ",bp="))!",J="Expected value to be a qooxdoo widget but found ",K="Expected value '%1' to be in the range '%2'..'%3'!",X="Expected value to be typeof '",n="Expected value to be typeof function but found ",o="Expected value to be an integer but found ",Q="Called fail().",L="The parameter 're' must be a string or a regular expression.",M="Expected value to be a number >= 0 but found ",P="Expected value to be instanceof '",ba="Wrong number of arguments given. Expected '",br="object";
qx.Class.define(U,{statics:{__sM:true,__sN:function(dz,dA){var dB=y;

for(var i=1,l=arguments.length;i<l;i++){dB=dB+this.__sO(arguments[i]);
}var dD=bb+dz+bu+dB;

if(this.__sM){qx.Bootstrap.error(dD);
}
if(qx.Class.isDefined(bk)){var dC=new qx.core.AssertionError(dz,dB);

if(this.__sM){qx.Bootstrap.error("Stack trace: \n"+dC.getStackTrace());
}throw dC;
}else{throw new Error(dD);
}},__sO:function(dd){var de;

if(dd===null){de=bj;
}else if(qx.lang.Type.isArray(dd)&&dd.length>10){de=bi+dd.length+bq;
}else if((dd instanceof Object)&&(dd.toString==null)){de=qx.lang.Json.stringify(dd,null,2);
}else{try{de=dd.toString();
}catch(e){de=y;
}}return de;
},assert:function(j,k){j==true||this.__sN(k||y,O);
},fail:function(cM){this.__sN(cM||y,Q);
},assertTrue:function(ck,cl){(ck===true)||this.__sN(cl||y,F,ck,v);
},assertFalse:function(du,dv){(du===false)||this.__sN(dv||y,bl,du,v);
},assertEquals:function(dQ,dR,dS){dQ==dR||this.__sN(dS||y,u,dQ,be,dR,w);
},assertNotEquals:function(dV,dW,dX){dV!=dW||this.__sN(dX||y,u,dV,by,dW,w);
},assertIdentical:function(dM,dN,dO){dM===dN||this.__sN(dO||y,u,dM,Y,dN,w);
},assertNotIdentical:function(cf,cg,ch){cf!==cg||this.__sN(ch||y,u,cf,bg,cg,w);
},assertNotUndefined:function(bR,bS){bR!==undefined||this.__sN(bS||y,S,bR,x);
},assertUndefined:function(db,dc){db===undefined||this.__sN(dc||y,E,db,x);
},assertNotNull:function(ds,dt){ds!==null||this.__sN(dt||y,T,ds,x);
},assertNull:function(dE,dF){dE===null||this.__sN(dF||y,A,dE,x);
},assertJsonEquals:function(dw,dx,dy){this.assertEquals(qx.lang.Json.stringify(dw),qx.lang.Json.stringify(dx),dy);
},assertMatch:function(df,dg,dh){this.assertString(df);
this.assert(qx.lang.Type.isRegExp(dg)||qx.lang.Type.isString(dg),L);
df.search(dg)>=0||this.__sN(dh||y,bo,df,bh,dg.toString(),w);
},assertArgumentsCount:function(c,d,f,g){var h=c.length;
(h>=d&&h<=f)||this.__sN(g||y,ba,d,bx,f,bn,arguments.length,I);
},assertEventFired:function(cF,event,cG,cH,cI){var cK=false;
var cJ=function(e){if(cH){cH.call(cF,e);
}cK=true;
};
var cL=cF.addListener(event,cJ,cF);
cG.call();
cK===true||this.__sN(cI||y,q,event,R);
cF.removeListenerById(cL);
},assertEventNotFired:function(cm,event,cn,co){var cq=false;
var cp=function(e){cq=true;
};
var cr=cm.addListener(event,cp,cm);
cn.call();
cq===false||this.__sN(co||y,q,event,bA);
cm.removeListenerById(cr);
},assertException:function(bX,bY,ca,cb){var bY=bY||Error;
var cc;

try{this.__sM=false;
bX();
}catch(dL){cc=dL;
}finally{this.__sM=true;
}
if(cc==null){this.__sN(cb||y,D);
}cc instanceof bY||this.__sN(cb||y,bt,bY,bD,cc);

if(ca){this.assertMatch(cc.toString(),ca,cb);
}},assertInArray:function(cv,cw,cx){cw.indexOf(cv)!==-1||this.__sN(cx||y,bE,cv,bc,cw,v);
},assertArrayEquals:function(cs,ct,cu){this.assertArray(cs,cu);
this.assertArray(ct,cu);
this.assertEquals(cs.length,ct.length,cu);

for(var i=0;i<cs.length;i++){this.assertIdentical(cs[i],ct[i],cu);
}},assertKeyInMap:function(cA,cB,cC){cB[cA]!==undefined||this.__sN(cC||y,bE,cA,bs,cB,v);
},assertFunction:function(dq,dr){qx.lang.Type.isFunction(dq)||this.__sN(dr||y,n,dq,x);
},assertString:function(cD,cE){qx.lang.Type.isString(cD)||this.__sN(cE||y,W,cD,x);
},assertBoolean:function(cP,cQ){qx.lang.Type.isBoolean(cP)||this.__sN(cQ||y,m,cP,x);
},assertNumber:function(dG,dH){(qx.lang.Type.isNumber(dG)&&isFinite(dG))||this.__sN(dH||y,bf,dG,x);
},assertPositiveNumber:function(cd,ce){(qx.lang.Type.isNumber(cd)&&isFinite(cd)&&cd>=0)||this.__sN(ce||y,M,cd,x);
},assertInteger:function(dT,dU){(qx.lang.Type.isNumber(dT)&&isFinite(dT)&&dT%1===0)||this.__sN(dU||y,o,dT,x);
},assertPositiveInteger:function(bO,bP){var bQ=(qx.lang.Type.isNumber(bO)&&isFinite(bO)&&bO%1===0&&bO>=0);
bQ||this.__sN(bP||y,bz,bO,x);
},assertInRange:function(bT,bU,bV,bW){(bT>=bU&&bT<=bV)||this.__sN(bW||y,qx.lang.String.format(K,[bT,bU,bV]));
},assertObject:function(bG,bH){var bI=bG!==null&&(qx.lang.Type.isObject(bG)||typeof bG===br);
bI||this.__sN(bH||y,V,(bG),x);
},assertArray:function(cV,cW){qx.lang.Type.isArray(cV)||this.__sN(cW||y,bB,cV,x);
},assertMap:function(ci,cj){qx.lang.Type.isObject(ci)||this.__sN(cj||y,G,ci,x);
},assertRegExp:function(bJ,bK){qx.lang.Type.isRegExp(bJ)||this.__sN(bK||y,C,bJ,x);
},assertType:function(dI,dJ,dK){this.assertString(dJ,N);
typeof (dI)===dJ||this.__sN(dK||y,X,dJ,bF,dI,x);
},assertInstance:function(cR,cS,cT){var cU=cS.classname||cS+y;
cR instanceof cS||this.__sN(cT||y,P,cU,bF,cR,x);
},assertInterface:function(bL,bM,bN){qx.Class.implementsInterface(bL,bM)||this.__sN(bN||y,bd,bL,z,bM,w);
},assertCssColor:function(di,dj,dk){var dl=qx.Class.getByName(bv);

if(!dl){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dn=dl.stringToRgb(di);

try{var dm=dl.stringToRgb(dj);
}catch(dP){this.__sN(dk||y,p,di,t,dn.join(s),r,dj,bm);
}var dp=dn[0]==dm[0]&&dn[1]==dm[1]&&dn[2]==dm[2];
dp||this.__sN(dk||y,p,dn,t,dn.join(s),r,dj,t,dm.join(s),bp);
},assertElement:function(a,b){!!(a&&a.nodeType===1)||this.__sN(b||y,B,a,w);
},assertQxObject:function(cN,cO){this.__sP(cN,bC)||this.__sN(cO||y,H,cN,x);
},assertQxWidget:function(cy,cz){this.__sP(cy,bw)||this.__sN(cz||y,J,cy,x);
},__sP:function(cX,cY){if(!cX){return false;
}var da=cX.constructor;

while(da){if(da.classname===cY){return true;
}da=da.superclass;
}return false;
}}});
})();
(function(){var q="qx.core.MAssert";
qx.Mixin.define(q,{members:{assert:function(r,s){qx.core.Assert.assert(r,s);
},fail:function(bY){qx.core.Assert.fail(bY);
},assertTrue:function(I,J){qx.core.Assert.assertTrue(I,J);
},assertFalse:function(br,bs){qx.core.Assert.assertFalse(br,bs);
},assertEquals:function(S,T,U){qx.core.Assert.assertEquals(S,T,U);
},assertNotEquals:function(bB,bC,bD){qx.core.Assert.assertNotEquals(bB,bC,bD);
},assertIdentical:function(ba,bb,bc){qx.core.Assert.assertIdentical(ba,bb,bc);
},assertNotIdentical:function(bj,bk,bl){qx.core.Assert.assertNotIdentical(bj,bk,bl);
},assertNotUndefined:function(bt,bu){qx.core.Assert.assertNotUndefined(bt,bu);
},assertUndefined:function(D,E){qx.core.Assert.assertUndefined(D,E);
},assertNotNull:function(o,p){qx.core.Assert.assertNotNull(o,p);
},assertNull:function(bd,be){qx.core.Assert.assertNull(bd,be);
},assertJsonEquals:function(F,G,H){qx.core.Assert.assertJsonEquals(F,G,H);
},assertMatch:function(j,k,l){qx.core.Assert.assertMatch(j,k,l);
},assertArgumentsCount:function(a,b,c,d){qx.core.Assert.assertArgumentsCount(a,b,c,d);
},assertEventFired:function(bE,event,bF,bG,bH){qx.core.Assert.assertEventFired(bE,event,bF,bG,bH);
},assertEventNotFired:function(e,event,f,g){qx.core.Assert.assertEventNotFired(e,event,f,g);
},assertException:function(bI,bJ,bK,bL){qx.core.Assert.assertException(bI,bJ,bK,bL);
},assertInArray:function(N,O,P){qx.core.Assert.assertInArray(N,O,P);
},assertArrayEquals:function(K,L,M){qx.core.Assert.assertArrayEquals(K,L,M);
},assertKeyInMap:function(bM,bN,bO){qx.core.Assert.assertKeyInMap(bM,bN,bO);
},assertFunction:function(bT,bU){qx.core.Assert.assertFunction(bT,bU);
},assertString:function(bm,bn){qx.core.Assert.assertString(bm,bn);
},assertBoolean:function(bz,bA){qx.core.Assert.assertBoolean(bz,bA);
},assertNumber:function(bR,bS){qx.core.Assert.assertNumber(bR,bS);
},assertPositiveNumber:function(m,n){qx.core.Assert.assertPositiveNumber(m,n);
},assertInteger:function(Q,R){qx.core.Assert.assertInteger(Q,R);
},assertPositiveInteger:function(h,i){qx.core.Assert.assertPositiveInteger(h,i);
},assertInRange:function(t,u,v,w){qx.core.Assert.assertInRange(t,u,v,w);
},assertObject:function(bx,by){qx.core.Assert.assertObject(bx,by);
},assertArray:function(V,W){qx.core.Assert.assertArray(V,W);
},assertMap:function(bv,bw){qx.core.Assert.assertMap(bv,bw);
},assertRegExp:function(bf,bg){qx.core.Assert.assertRegExp(bf,bg);
},assertType:function(bo,bp,bq){qx.core.Assert.assertType(bo,bp,bq);
},assertInstance:function(A,B,C){qx.core.Assert.assertInstance(A,B,C);
},assertInterface:function(bV,bW,bX){qx.core.Assert.assertInterface(bV,bW,bX);
},assertCssColor:function(x,y,z){qx.core.Assert.assertCssColor(x,y,z);
},assertElement:function(bP,bQ){qx.core.Assert.assertElement(bP,bQ);
},assertQxObject:function(X,Y){qx.core.Assert.assertQxObject(X,Y);
},assertQxWidget:function(bh,bi){qx.core.Assert.assertQxWidget(bh,bi);
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
(function(){var bg="qx.debug",bf="on",be="unknown",bd="node",bc="error",bb="...(+",ba="array",Y=")",X="info",W="instance",bE="string",bD="null",bC="class",bB="number",bA="stringify",bz="]",by="date",bx="function",bw="boolean",bv="debug",bn="map",bo="undefined",bl="qx.log.Logger",bm="[",bj="#",bk="warn",bh="document",bi="{...(",bp="text[",bq="[...(",bs="\n",br=")}",bu=")]",bt="object";
qx.Class.define(bl,{statics:{__eU:bv,setLevel:function(bT){this.__eU=bT;
},getLevel:function(){return this.__eU;
},setTreshold:function(V){this.__eX.setMaxMessages(V);
},getTreshold:function(){return this.__eX.getMaxMessages();
},__eV:{},__eW:0,register:function(j){if(j.$$id){return;
}var m=this.__eW++;
this.__eV[m]=j;
j.$$id=m;
var k=this.__eY;
var n=this.__eX.getAllLogEvents();

for(var i=0,l=n.length;i<l;i++){if(k[n[i].level]>=k[this.__eU]){j.process(n[i]);
}}},unregister:function(C){var D=C.$$id;

if(D==null){return;
}delete this.__eV[D];
delete C.$$id;
},debug:function(b,c){qx.log.Logger.__fa(bv,arguments);
},info:function(E,F){qx.log.Logger.__fa(X,arguments);
},warn:function(bP,bQ){qx.log.Logger.__fa(bk,arguments);
},error:function(bR,bS){qx.log.Logger.__fa(bc,arguments);
},trace:function(a){qx.log.Logger.__fa(X,[a,qx.dev.StackTrace.getStackTrace().join(bs)]);
},deprecatedMethodWarning:function(d,e){if(qx.core.Variant.isSet(bg,bf)){var f=qx.lang.Function.getName(d);
this.warn("The method '"+f+"' is deprecated: "+(e||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(J,K){if(qx.core.Variant.isSet(bg,bf)){var L=J.classname||be;
this.warn("The class '"+L+"' is deprecated: "+(K||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(o,event,p){if(qx.core.Variant.isSet(bg,bf)){var q=o.self?o.self.classname:be;
this.warn("The event '"+(event||"unknown")+"' from class '"+q+"' is deprecated: "+(p||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(G,H){if(qx.core.Variant.isSet(bg,bf)){var I=G?G.name:be;
this.warn("The mixin '"+I+"' is deprecated: "+(H||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(y,z,A){if(qx.core.Variant.isSet(bg,bf)){if(y.__defineGetter__){var self=this;
var B=y[z];
y.__defineGetter__(z,function(){self.warn("The constant '"+z+"' is deprecated: "+(A||"Please consult the API documentation for alternatives."));
self.trace();
return B;
});
}}},deprecateMethodOverriding:function(r,s,t,u){if(qx.core.Variant.isSet(bg,bf)){var v=r.constructor;

while(v.classname!==s.classname){if(v.prototype.hasOwnProperty(t)){this.warn("The method '"+qx.lang.Function.getName(r[t])+"' overrides a deprecated method: "+(u||"Please consult the API documentation for alternatives."));
this.trace();
break;
}v=v.superclass;
}}},clear:function(){this.__eX.clearHistory();
},__eX:new qx.log.appender.RingBuffer(50),__eY:{debug:0,info:1,warn:2,error:3},__fa:function(bF,bG){var bL=this.__eY;

if(bL[bF]<bL[this.__eU]){return;
}var bI=bG.length<2?null:bG[0];
var bK=bI?1:0;
var bH=[];

for(var i=bK,l=bG.length;i<l;i++){bH.push(this.__fc(bG[i],true));
}var bM=new Date;
var bN={time:bM,offset:bM-qx.Bootstrap.LOADSTART,level:bF,items:bH,win:window};
if(bI){if(bI instanceof qx.core.Object){bN.object=bI.$$hash;
}else if(bI.$$type){bN.clazz=bI;
}}this.__eX.process(bN);
var bO=this.__eV;

for(var bJ in bO){bO[bJ].process(bN);
}},__fb:function(g){if(g===undefined){return bo;
}else if(g===null){return bD;
}
if(g.$$type){return bC;
}var h=typeof g;

if(h===bx||h==bE||h===bB||h===bw){return h;
}else if(h===bt){if(g.nodeType){return bd;
}else if(g.classname){return W;
}else if(g instanceof Array){return ba;
}else if(g instanceof Error){return bc;
}else if(g instanceof Date){return by;
}else{return bn;
}}
if(g.toString){return bA;
}return be;
},__fc:function(M,N){var U=this.__fb(M);
var Q=be;
var P=[];

switch(U){case bD:case bo:Q=U;
break;
case bE:case bB:case bw:case by:Q=M;
break;
case bd:if(M.nodeType===9){Q=bh;
}else if(M.nodeType===3){Q=bp+M.nodeValue+bz;
}else if(M.nodeType===1){Q=M.nodeName.toLowerCase();

if(M.id){Q+=bj+M.id;
}}else{Q=bd;
}break;
case bx:Q=qx.lang.Function.getName(M)||U;
break;
case W:Q=M.basename+bm+M.$$hash+bz;
break;
case bC:case bA:Q=M.toString();
break;
case bc:P=qx.dev.StackTrace.getStackTraceFromError(M);
Q=M.toString();
break;
case ba:if(N){Q=[];

for(var i=0,l=M.length;i<l;i++){if(Q.length>20){Q.push(bb+(l-i)+Y);
break;
}Q.push(this.__fc(M[i],false));
}}else{Q=bq+M.length+bu;
}break;
case bn:if(N){var O;
var T=[];

for(var S in M){T.push(S);
}T.sort();
Q=[];

for(var i=0,l=T.length;i<l;i++){if(Q.length>20){Q.push(bb+(l-i)+Y);
break;
}S=T[i];
O=this.__fc(M[S],false);
O.key=S;
Q.push(O);
}}else{var R=0;

for(var S in M){R++;
}Q=bi+R+br;
}break;
}return {type:U,text:Q,trace:P};
}},defer:function(w){var x=qx.Bootstrap.$$logs;

for(var i=0;i<x.length;i++){w.__fa(x[i][0],x[i][1]);
}qx.Bootstrap.debug=w.debug;
qx.Bootstrap.info=w.info;
qx.Bootstrap.warn=w.warn;
qx.Bootstrap.error=w.error;
qx.Bootstrap.trace=w.trace;
}});
})();
(function(){var C="qx.debug",B="on",A="qx.disposerDebugLevel",z="set",y="MSIE 6.0",x="rv:1.8.1",w="get",v="reset",u="info",t="qx.core.Object",n="error",s="warn",q="]",m="debug",k="[",p="$$user_",o="object",r="Object";
qx.Class.define(t,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:r},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+k+this.$$hash+q;
},base:function(g,h){if(qx.core.Variant.isSet(C,B)){if(!qx.Bootstrap.isFunction(g.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+g.callee.displayName);
}}
if(arguments.length===1){return g.callee.base.call(this);
}else{return g.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(I){return I.callee.self;
},clone:function(){var E=this.constructor;
var D=new E;
var G=qx.Class.getProperties(E);
var F=qx.core.Property.$$store.user;
var H=qx.core.Property.$$method.set;
var name;
for(var i=0,l=G.length;i<l;i++){name=G[i];

if(this.hasOwnProperty(F[name])){D[H[name]](this[F[name]]);
}}return D;
},set:function(bA,bB){var bD=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bA)){if(!this[bD[bA]]){if(this[z+qx.Bootstrap.firstUp(bA)]!=undefined){this[z+qx.Bootstrap.firstUp(bA)](bB);
return this;
}
if(qx.core.Variant.isSet(C,B)){qx.Bootstrap.error(new Error("No such property: "+bA));
return this;
}}return this[bD[bA]](bB);
}else{for(var bC in bA){if(!this[bD[bC]]){if(this[z+qx.Bootstrap.firstUp(bC)]!=undefined){this[z+qx.Bootstrap.firstUp(bC)](bA[bC]);
continue;
}
if(qx.core.Variant.isSet(C,B)){qx.Bootstrap.error(new Error("No such property: "+bC));
return this;
}}this[bD[bC]](bA[bC]);
}return this;
}},get:function(bh){var bi=qx.core.Property.$$method.get;

if(!this[bi[bh]]){if(this[w+qx.Bootstrap.firstUp(bh)]!=undefined){return this[w+qx.Bootstrap.firstUp(bh)]();
}
if(qx.core.Variant.isSet(C,B)){qx.Bootstrap.error(new Error("No such property: "+bh));
return this;
}}return this[bi[bh]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;

if(!this[b[a]]){if(this[v+qx.Bootstrap.firstUp(a)]!=undefined){this[v+qx.Bootstrap.firstUp(a)]();
return;
}
if(qx.core.Variant.isSet(C,B)){qx.Bootstrap.error(new Error("No such property: "+a));
return;
}}this[b[a]]();
},__kQ:qx.event.Registration,addListener:function(c,d,self,f){if(!this.$$disposed){return this.__kQ.addListener(this,c,d,self,f);
}return null;
},addListenerOnce:function(bj,bk,self,bl){var bm=function(e){this.removeListener(bj,bm,this,bl);
bk.call(self||this,e);
};
return this.addListener(bj,bm,this,bl);
},removeListener:function(bF,bG,self,bH){if(!this.$$disposed){return this.__kQ.removeListener(this,bF,bG,self,bH);
}return false;
},removeListenerById:function(W){if(!this.$$disposed){return this.__kQ.removeListenerById(this,W);
}return false;
},hasListener:function(bs,bt){return this.__kQ.hasListener(this,bs,bt);
},dispatchEvent:function(br){if(!this.$$disposed){return this.__kQ.dispatchEvent(this,br);
}return true;
},fireEvent:function(bI,bJ,bK){if(!this.$$disposed){return this.__kQ.fireEvent(this,bI,bJ,bK);
}return true;
},fireNonBubblingEvent:function(K,L,M){if(!this.$$disposed){return this.__kQ.fireNonBubblingEvent(this,K,L,M);
}return true;
},fireDataEvent:function(X,Y,ba,bb){if(!this.$$disposed){if(ba===undefined){ba=null;
}return this.__kQ.fireNonBubblingEvent(this,X,qx.event.type.Data,[Y,ba,!!bb]);
}return true;
},__kR:null,setUserData:function(bn,bo){if(!this.__kR){this.__kR={};
}this.__kR[bn]=bo;
},getUserData:function(bP){if(!this.__kR){return null;
}var bQ=this.__kR[bP];
return bQ===undefined?null:bQ;
},__kS:qx.log.Logger,debug:function(bp){this.__kT(m,arguments);
},info:function(bO){this.__kT(u,arguments);
},warn:function(bE){this.__kT(s,arguments);
},error:function(J){this.__kT(n,arguments);
},trace:function(){this.__kS.trace(this);
},__kT:function(bL,bM){var bN=qx.lang.Array.fromArguments(bM);
bN.unshift(this);
this.__kS[bL].apply(this.__kS,bN);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bw=this.constructor;
var bu;

while(bw.superclass){if(bw.$$destructor){bw.$$destructor.call(this);
}if(bw.$$includes){bu=bw.$$flatIncludes;

for(var i=0,l=bu.length;i<l;i++){if(bu[i].$$destructor){bu[i].$$destructor.call(this);
}}}bw=bw.superclass;
}if(this.__kU){this.__kU();
}if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)>0){var bx,bv;

for(bx in this){bv=this[bx];
if(bv!==null&&typeof bv===o&&!(qx.Bootstrap.isString(bv))){if(this.constructor.prototype[bx]!=null){continue;
}var bz=navigator.userAgent.indexOf(x)!=-1;
var by=navigator.userAgent.indexOf(y)!=-1;
if(bz||by){if(bv instanceof qx.core.Object||qx.core.Setting.get(A)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}else{if(qx.core.Setting.get(A)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bx+"' in "+this.classname+"["+this.toHashCode()+"]: "+bv);
delete this[bx];
}}}}}}},__kU:null,__kV:function(){var j=qx.Class.getProperties(this.constructor);

for(var i=0,l=j.length;i<l;i++){delete this[p+j[i]];
}},_disposeObjects:function(bq){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(N){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bR){qx.util.DisposeUtil.disposeArray(this,bR);
},_disposeMap:function(bc){qx.util.DisposeUtil.disposeMap(this,bc);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bd,be){if(qx.core.Variant.isSet(C,B)){qx.Class.include(bd,qx.core.MAssert);
}var bg=navigator.userAgent.indexOf(y)!=-1;
var bf=navigator.userAgent.indexOf(x)!=-1;
if(bg||bf){be.__kU=be.__kV;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kR=null;
var Q=this.constructor;
var U;
var V=qx.core.Property.$$store;
var S=V.user;
var T=V.theme;
var O=V.inherit;
var R=V.useinit;
var P=V.init;

while(Q){U=Q.$$properties;

if(U){for(var name in U){if(U[name].dereference){this[S[name]]=this[T[name]]=this[O[name]]=this[R[name]]=this[P[name]]=undefined;
}}}Q=Q.superclass;
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
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(e,f,g){var h=qx.locale.Manager;

if(h){return h.trc.apply(h,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(i){var j=qx.locale.Manager;

if(j){return j.marktr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__mQ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__mQ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__mQ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__mQ=null;
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
(function(){var o="qx.debug",n="on",m="Cannot stop propagation on a non bubbling event: ",l="Invalid argument value 'cancelable'.",k="Cannot prevent default action on a non cancelable event: ",j="Invalid argument value 'canBubble'.",i="qx.event.type.Event";
qx.Class.define(i,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(p,q){if(qx.core.Variant.isSet(o,n)){if(p!==undefined){qx.core.Assert.assertBoolean(p,j);
}
if(q!==undefined){qx.core.Assert.assertBoolean(q,l);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!p;
this._cancelable=!!q;
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
}},stopPropagation:function(){if(qx.core.Variant.isSet(o,n)){this.assertTrue(this._bubbles,m+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(o,n)){this.assertTrue(this._cancelable,k+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(s){this._type=s;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(f){this._eventPhase=f;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(r){this._target=r;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(e){this._currentTarget=e;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(h){this._relatedTarget=h;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(d){this._bubbles=d;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(g){this._cancelable=g;
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
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__kp=b+(e&&e.message?e.message:e);
Error.call(this,this.__kp);
this.__kq=f;
this.__kr=e;
},members:{__kr:null,__kq:null,__kp:null,toString:function(){return this.__kp;
},getArguments:function(){return this.__kq;
},getSourceException:function(){return this.__kr;
}},destruct:function(){this.__kr=null;
this.__kq=null;
this.__kp=null;
}});
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
(function(){var s='',r='"',q=':',p=']',o='null',m=': ',l='object',h='function',g=',',f='\n',bd='\\u',bc=',\n',bb='0000',ba='string',Y="Cannot stringify a recursive object.",X='0',W='-',V='}',U='String',T='Boolean',A='\\\\',B='\\f',y='\\t',z='{\n',w='[]',x="qx.lang.JsonImpl",t='Z',u='\\n',C='Object',D='{}',K='@',I='.',N='(',M='Array',P='T',O='\\r',F='{',S='JSON.parse',R=' ',Q='[',E='Number',G=')',H='[\n',J='\\"',L='\\b';
qx.Class.define(x,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sS:null,__sT:null,__sU:null,__sV:null,stringify:function(br,bs,bt){this.__sS=s;
this.__sT=s;
this.__sV=[];

if(qx.lang.Type.isNumber(bt)){var bt=Math.min(10,Math.floor(bt));

for(var i=0;i<bt;i+=1){this.__sT+=R;
}}else if(qx.lang.Type.isString(bt)){if(bt.length>10){bt=bt.slice(0,10);
}this.__sT=bt;
}if(bs&&(qx.lang.Type.isFunction(bs)||qx.lang.Type.isArray(bs))){this.__sU=bs;
}else{this.__sU=null;
}return this.__sW(s,{'':br});
},__sW:function(bl,bm){var bp=this.__sS,bn,bq=bm[bl];
if(bq&&qx.lang.Type.isFunction(bq.toJSON)){bq=bq.toJSON(bl);
}else if(qx.lang.Type.isDate(bq)){bq=this.dateToJSON(bq);
}if(typeof this.__sU===h){bq=this.__sU.call(bm,bl,bq);
}
if(bq===null){return o;
}
if(bq===undefined){return undefined;
}switch(qx.lang.Type.getClass(bq)){case U:return this.__sX(bq);
case E:return isFinite(bq)?String(bq):o;
case T:return String(bq);
case M:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
var length=bq.length;

for(var i=0;i<length;i+=1){bn[i]=this.__sW(i,bq)||o;
}this.__sV.pop();
if(bn.length===0){var bo=w;
}else if(this.__sS){bo=H+this.__sS+bn.join(bc+this.__sS)+f+bp+p;
}else{bo=Q+bn.join(g)+p;
}this.__sS=bp;
return bo;
case C:this.__sS+=this.__sT;
bn=[];

if(this.__sV.indexOf(bq)!==-1){throw new TypeError(Y);
}this.__sV.push(bq);
if(this.__sU&&typeof this.__sU===l){var length=this.__sU.length;

for(var i=0;i<length;i+=1){var k=this.__sU[i];

if(typeof k===ba){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}else{for(var k in bq){if(Object.hasOwnProperty.call(bq,k)){var v=this.__sW(k,bq);

if(v){bn.push(this.__sX(k)+(this.__sS?m:q)+v);
}}}}this.__sV.pop();
if(bn.length===0){var bo=D;
}else if(this.__sS){bo=z+this.__sS+bn.join(bc+this.__sS)+f+bp+V;
}else{bo=F+bn.join(g)+V;
}this.__sS=bp;
return bo;
}},dateToJSON:function(b){var d=function(n){return n<10?X+n:n;
};
var e=function(n){var bu=d(n);
return n<100?X+bu:bu;
};
return isFinite(b.valueOf())?b.getUTCFullYear()+W+d(b.getUTCMonth()+1)+W+d(b.getUTCDate())+P+d(b.getUTCHours())+q+d(b.getUTCMinutes())+q+d(b.getUTCSeconds())+I+e(b.getUTCMilliseconds())+t:null;
},__sX:function(be){var bf={'\b':L,'\t':y,'\n':u,'\f':B,'\r':O,'"':J,'\\':A};
var bg=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bg.lastIndex=0;

if(bg.test(be)){return r+
be.replace(bg,function(a){var c=bf[a];
return typeof c===ba?c:bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
})+r;
}else{return r+be+r;
}},parse:function(bv,bw){var bx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bx.lastIndex=0;
if(bx.test(bv)){bv=bv.replace(bx,function(a){return bd+(bb+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bv.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,K).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,p).replace(/(?:^|:|,)(?:\s*\[)+/g,s))){var j=eval(N+bv+G);
return typeof bw===h?this.__sY({'':j},s,bw):j;
}throw new SyntaxError(S);
},__sY:function(bh,bi,bj){var bk=bh[bi];

if(bk&&typeof bk===l){for(var k in bk){if(Object.hasOwnProperty.call(bk,k)){var v=this.__sY(bk,k,bj);

if(v!==undefined){bk[k]=v;
}else{delete bk[k];
}}}}return bj.call(bh,bi,bk);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var v="get",u="",t="[",s=".",r="last",q="change",p="]",o="Number",n="String",m="set",R="deepBinding",Q="item",P="reset",O="qx.debug",N="' (",M="on",L="Boolean",K=") to the object '",J="Integer",I=" of object ",C="qx.event.type.Data",D="qx.data.SingleValueBinding",A="Binding property ",B="Can not remove the bindings for null object!",y="Binding from '",z="PositiveNumber",w=" not possible: No event available. ",x="PositiveInteger",E="Binding does not exist!",F=" is not an data (qx.event.type.Data) event on ",H=").",G="Date";
qx.Class.define(D,{statics:{DEBUG_ON:false,__fQ:{},bind:function(bq,br,bs,bt,bu){var bE=this.__fS(bq,br,bs,bt,bu);
var bz=br.split(s);
var bw=this.__ga(bz);
var bD=[];
var bA=[];
var bB=[];
var bx=[];
var by=bq;
for(var i=0;i<bz.length;i++){if(bw[i]!==u){bx.push(q);
}else{bx.push(this.__fU(by,bz[i]));
}bD[i]=by;
if(i==bz.length-1){if(bw[i]!==u){var bH=bw[i]===r?by.length-1:bw[i];
var bv=by.getItem(bH);
this.__fY(bv,bs,bt,bu,bq);
bB[i]=this.__gb(by,bx[i],bs,bt,bu,bw[i]);
}else{if(bz[i]!=null&&by[v+qx.lang.String.firstUp(bz[i])]!=null){var bv=by[v+qx.lang.String.firstUp(bz[i])]();
this.__fY(bv,bs,bt,bu,bq);
}bB[i]=this.__gb(by,bx[i],bs,bt,bu);
}}else{var bF={index:i,propertyNames:bz,sources:bD,listenerIds:bB,arrayIndexValues:bw,targetObject:bs,targetPropertyChain:bt,options:bu,listeners:bA};
var bC=qx.lang.Function.bind(this.__fR,this,bF);
bA.push(bC);
bB[i]=by.addListener(bx[i],bC);
}if(by[v+qx.lang.String.firstUp(bz[i])]==null){by=null;
}else if(bw[i]!==u){by=by[v+qx.lang.String.firstUp(bz[i])](bw[i]);
}else{by=by[v+qx.lang.String.firstUp(bz[i])]();
}
if(!by){break;
}}var bG={type:R,listenerIds:bB,sources:bD,targetListenerIds:bE.listenerIds,targets:bE.targets};
this.__gc(bG,bq,br,bs,bt);
return bG;
},__fR:function(bh){if(bh.options&&bh.options.onUpdate){bh.options.onUpdate(bh.sources[bh.index],bh.targetObject);
}for(var j=bh.index+1;j<bh.propertyNames.length;j++){var bl=bh.sources[j];
bh.sources[j]=null;

if(!bl){continue;
}bl.removeListenerById(bh.listenerIds[j]);
}var bl=bh.sources[bh.index];
for(var j=bh.index+1;j<bh.propertyNames.length;j++){if(bh.arrayIndexValues[j-1]!==u){bl=bl[v+qx.lang.String.firstUp(bh.propertyNames[j-1])](bh.arrayIndexValues[j-1]);
}else{bl=bl[v+qx.lang.String.firstUp(bh.propertyNames[j-1])]();
}bh.sources[j]=bl;
if(!bl){this.__fV(bh.targetObject,bh.targetPropertyChain);
break;
}if(j==bh.propertyNames.length-1){if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bm=bh.arrayIndexValues[j]===r?bl.length-1:bh.arrayIndexValues[j];
var bj=bl.getItem(bm);
this.__fY(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
bh.listenerIds[j]=this.__gb(bl,q,bh.targetObject,bh.targetPropertyChain,bh.options,bh.arrayIndexValues[j]);
}else{if(bh.propertyNames[j]!=null&&bl[v+qx.lang.String.firstUp(bh.propertyNames[j])]!=null){var bj=bl[v+qx.lang.String.firstUp(bh.propertyNames[j])]();
this.__fY(bj,bh.targetObject,bh.targetPropertyChain,bh.options,bh.sources[bh.index]);
}var bk=this.__fU(bl,bh.propertyNames[j]);
bh.listenerIds[j]=this.__gb(bl,bk,bh.targetObject,bh.targetPropertyChain,bh.options);
}}else{if(bh.listeners[j]==null){var bi=qx.lang.Function.bind(this.__fR,this,bh);
bh.listeners.push(bi);
}if(qx.Class.implementsInterface(bl,qx.data.IListData)){var bk=q;
}else{var bk=this.__fU(bl,bh.propertyNames[j]);
}bh.listenerIds[j]=bl.addListener(bk,bh.listeners[j]);
}}},__fS:function(bI,bJ,bK,bL,bM){var bQ=bL.split(s);
var bO=this.__ga(bQ);
var bV=[];
var bU=[];
var bS=[];
var bR=[];
var bP=bK;
for(var i=0;i<bQ.length-1;i++){if(bO[i]!==u){bR.push(q);
}else{try{bR.push(this.__fU(bP,bQ[i]));
}catch(e){break;
}}bV[i]=bP;
var bT=function(){for(var j=i+1;j<bQ.length-1;j++){var ck=bV[j];
bV[j]=null;

if(!ck){continue;
}ck.removeListenerById(bS[j]);
}var ck=bV[i];
for(var j=i+1;j<bQ.length-1;j++){var ci=qx.lang.String.firstUp(bQ[j-1]);
if(bO[j-1]!==u){var cl=bO[j-1]===r?ck.getLength()-1:bO[j-1];
ck=ck[v+ci](cl);
}else{ck=ck[v+ci]();
}bV[j]=ck;
if(bU[j]==null){bU.push(bT);
}if(qx.Class.implementsInterface(ck,qx.data.IListData)){var cj=q;
}else{try{var cj=qx.data.SingleValueBinding.__fU(ck,bQ[j]);
}catch(e){break;
}}bS[j]=ck.addListener(cj,bU[j]);
}qx.data.SingleValueBinding.__fT(bI,bJ,bK,bL,bM);
};
bU.push(bT);
bS[i]=bP.addListener(bR[i],bT);
var bN=qx.lang.String.firstUp(bQ[i]);
if(bP[v+bN]==null){bP=null;
}else if(bO[i]!==u){bP=bP[v+bN](bO[i]);
}else{bP=bP[v+bN]();
}
if(!bP){break;
}}return {listenerIds:bS,targets:bV};
},__fT:function(bW,bX,bY,ca,cb){var cf=this.__fX(bW,bX);

if(cf!=null){var ch=bX.substring(bX.lastIndexOf(s)+1,bX.length);
if(ch.charAt(ch.length-1)==p){var cc=ch.substring(ch.lastIndexOf(t)+1,ch.length-1);
var ce=ch.substring(0,ch.lastIndexOf(t));
var cg=cf[v+qx.lang.String.firstUp(ce)]();

if(cc==r){cc=cg.length-1;
}
if(cg!=null){var cd=cg.getItem(cc);
}}else{var cd=cf[v+qx.lang.String.firstUp(ch)]();
}}cd=qx.data.SingleValueBinding.__gd(cd,bY,ca,cb);
this.__fW(bY,ca,cd);
},__fU:function(cs,ct){var cu=this.__ge(cs,ct);
if(cu==null){if(qx.Class.supportsEvent(cs.constructor,ct)){cu=ct;
}else if(qx.Class.supportsEvent(cs.constructor,q+qx.lang.String.firstUp(ct))){cu=q+qx.lang.String.firstUp(ct);
}else{throw new qx.core.AssertionError(A+ct+I+cs+w);
}}return cu;
},__fV:function(co,cp){var cq=this.__fX(co,cp);

if(cq!=null){var cr=cp.substring(cp.lastIndexOf(s)+1,cp.length);
if(cr.charAt(cr.length-1)==p){this.__fW(co,cp,null);
return;
}if(cq[P+qx.lang.String.firstUp(cr)]!=undefined){cq[P+qx.lang.String.firstUp(cr)]();
}else{cq[m+qx.lang.String.firstUp(cr)](null);
}}},__fW:function(cP,cQ,cR){var cV=this.__fX(cP,cQ);

if(cV!=null){var cW=cQ.substring(cQ.lastIndexOf(s)+1,cQ.length);
if(cW.charAt(cW.length-1)==p){var cS=cW.substring(cW.lastIndexOf(t)+1,cW.length-1);
var cU=cW.substring(0,cW.lastIndexOf(t));
var cT=cV[v+qx.lang.String.firstUp(cU)]();

if(cS==r){cS=cT.length-1;
}
if(cT!=null){cT.setItem(cS,cR);
}}else{cV[m+qx.lang.String.firstUp(cW)](cR);
}}},__fX:function(cz,cA){var cD=cA.split(s);
var cE=cz;
for(var i=0;i<cD.length-1;i++){try{var cC=cD[i];
if(cC.indexOf(p)==cC.length-1){var cB=cC.substring(cC.indexOf(t)+1,cC.length-1);
cC=cC.substring(0,cC.indexOf(t));
}cE=cE[v+qx.lang.String.firstUp(cC)]();

if(cB!=null){if(cB==r){cB=cE.length-1;
}cE=cE.getItem(cB);
cB=null;
}}catch(cv){return null;
}}return cE;
},__fY:function(S,T,U,V,W){S=this.__gd(S,T,U,V);
if(S===undefined){this.__fV(T,U);
}if(S!==undefined){try{this.__fW(T,U,S);
if(V&&V.onUpdate){V.onUpdate(W,T,S);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(V&&V.onSetFail){V.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+S+" on "+T+". Error message: "+e);
}}}},__ga:function(da){var db=[];
for(var i=0;i<da.length;i++){var name=da[i];
if(qx.lang.String.endsWith(name,p)){var dc=name.substring(name.indexOf(t)+1,name.indexOf(p));
if(name.indexOf(p)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(dc!==r){if(dc==u||isNaN(parseInt(dc))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(t)!=0){da[i]=name.substring(0,name.indexOf(t));
db[i]=u;
db[i+1]=dc;
da.splice(i+1,0,Q);
i++;
}else{db[i]=dc;
da.splice(i,1,Q);
}}else{db[i]=u;
}}return db;
},__gb:function(dd,de,df,dg,dh,di){if(qx.core.Variant.isSet(O,M)){var dj=qx.Class.getEventType(dd.constructor,de);
qx.core.Assert.assertEquals(C,dj,de+F+dd+s);
}var dl=function(a,e){if(a!==u){if(a===r){a=dd.length-1;
}var d=dd.getItem(a);
if(d===undefined){qx.data.SingleValueBinding.__fV(df,dg);
}var b=e.getData().start;
var c=e.getData().end;

if(a<b||a>c){return;
}}else{var d=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+dd+" by "+de+" to "+df+" ("+dg+")");
qx.log.Logger.debug("Data before conversion: "+d);
}d=qx.data.SingleValueBinding.__gd(d,df,dg,dh);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+d);
}try{if(d!==undefined){qx.data.SingleValueBinding.__fW(df,dg,d);
}else{qx.data.SingleValueBinding.__fV(df,dg);
}if(dh&&dh.onUpdate){dh.onUpdate(dd,df,d);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(dh&&dh.onSetFail){dh.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+d+" on "+df+". Error message: "+e);
}}};
if(!di){di=u;
}dl=qx.lang.Function.bind(dl,dd,di);
var dk=dd.addListener(de,dl);
return dk;
},__gc:function(f,g,h,k,l){if(this.__fQ[g.toHashCode()]===undefined){this.__fQ[g.toHashCode()]=[];
}this.__fQ[g.toHashCode()].push([f,g,h,k,l]);
},__gd:function(X,Y,ba,bb){if(bb&&bb.converter){var bd;

if(Y.getModel){bd=Y.getModel();
}return bb.converter(X,bd);
}else{var bf=this.__fX(Y,ba);
var bg=ba.substring(ba.lastIndexOf(s)+1,ba.length);
if(bf==null){return X;
}var be=qx.Class.getPropertyDefinition(bf.constructor,bg);
var bc=be==null?u:be.check;
return this.__gf(X,bc);
}},__ge:function(cF,cG){var cH=qx.Class.getPropertyDefinition(cF.constructor,cG);

if(cH==null){return null;
}return cH.event;
},__gf:function(cw,cx){var cy=qx.lang.Type.getClass(cw);
if((cy==o||cy==n)&&(cx==J||cx==x)){cw=parseInt(cw);
}if((cy==L||cy==o||cy==G)&&cx==n){cw=cw+u;
}if((cy==o||cy==n)&&(cx==o||cx==z)){cw=parseFloat(cw);
}return cw;
},removeBindingFromObject:function(cI,cJ){if(cJ.type==R){for(var i=0;i<cJ.sources.length;i++){if(cJ.sources[i]){cJ.sources[i].removeListenerById(cJ.listenerIds[i]);
}}for(var i=0;i<cJ.targets.length;i++){if(cJ.targets[i]){cJ.targets[i].removeListenerById(cJ.targetListenerIds[i]);
}}}else{cI.removeListenerById(cJ);
}var cK=this.__fQ[cI.toHashCode()];
if(cK!=undefined){for(var i=0;i<cK.length;i++){if(cK[i][0]==cJ){qx.lang.Array.remove(cK,cK[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cX){if(qx.core.Variant.isSet(O,M)){qx.core.Assert.assertNotNull(cX,B);
}var cY=this.__fQ[cX.toHashCode()];

if(cY!=undefined){for(var i=cY.length-1;i>=0;i--){this.removeBindingFromObject(cX,cY[i][0]);
}}},getAllBindingsForObject:function(bp){if(this.__fQ[bp.toHashCode()]===undefined){this.__fQ[bp.toHashCode()]=[];
}return this.__fQ[bp.toHashCode()];
},removeAllBindings:function(){for(var cn in this.__fQ){var cm=qx.core.ObjectRegistry.fromHashCode(cn);
if(cm==null){delete this.__fQ[cn];
continue;
}this.removeAllBindingsForObject(cm);
}this.__fQ={};
},getAllBindings:function(){return this.__fQ;
},showBindingInLog:function(cL,cM){var cO;
for(var i=0;i<this.__fQ[cL.toHashCode()].length;i++){if(this.__fQ[cL.toHashCode()][i][0]==cM){cO=this.__fQ[cL.toHashCode()][i];
break;
}}
if(cO===undefined){var cN=E;
}else{var cN=y+cO[1]+N+cO[2]+K+cO[3]+N+cO[4]+H;
}qx.log.Logger.debug(cN);
},showAllBindingsInLog:function(){for(var bo in this.__fQ){var bn=qx.core.ObjectRegistry.fromHashCode(bo);

for(var i=0;i<this.__fQ[bo].length;i++){this.showBindingInLog(bn,this.__fQ[bo][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
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
},isValidPropertyValue:function(u){if(typeof u===b){return this.isDynamic(u);
}else if(typeof u===h){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(q,r){var t=qx.util.AliasManager.getInstance();

if(r){for(var s in r.aliases){t.remove(s);
}}
if(q){for(var s in q.aliases){t.add(s,q.aliases[s]);
}}
if(!q){this.__ct={};
}}},destruct:function(){this._disposeMap(d);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
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
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(u){var v=this._dynamic;
return u instanceof qx.bom.Font?u:v[u];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(r){var t=this._dynamic;

if(r&&(r instanceof qx.bom.Font||t[r]!==undefined)){return true;
}var s=this.getTheme();

if(s!==null&&r&&s.fonts[r]){t[r]=(new qx.bom.Font).set(s.fonts[r]);
return true;
}return false;
},__hz:function(f,g){if(f[g].include){var h=f[f[g].include];
f[g].include=null;
delete f[g].include;
f[g]=qx.lang.Object.mergeWith(f[g],h,false);
this.__hz(f,g);
}},_applyTheme:function(i){var j=this._getDynamic();

for(var m in j){if(j[m].themed){j[m].dispose();
delete j[m];
}}
if(i){var k=i.fonts;
var l=qx.bom.Font;

for(var m in k){if(k[m].include&&k[k[m].include]){this.__hz(k,m);
}j[m]=(new l).set(k[m]);
j[m].themed=true;
}}this._setDynamic(j);
}}});
})();
(function(){var o="",n="underline",m="Boolean",k="px",j='"',h="italic",g="normal",f="bold",e="_applyItalic",d="_applyBold",A="Integer",z="_applyFamily",y="_applyLineHeight",x="Array",w="overline",v="line-through",u="qx.bom.Font",t="Number",s="_applyDecoration",r=" ",p="_applySize",q=",";
qx.Class.define(u,{extend:qx.core.Object,construct:function(J,K){qx.core.Object.call(this);

if(J!==undefined){this.setSize(J);
}
if(K!==undefined){this.setFamily(K);
}},statics:{fromString:function(L){var P=new qx.bom.Font();
var N=L.split(/\s+/);
var name=[];
var O;

for(var i=0;i<N.length;i++){switch(O=N[i]){case f:P.setBold(true);
break;
case h:P.setItalic(true);
break;
case n:P.setDecoration(n);
break;
default:var M=parseInt(O,10);

if(M==O||qx.lang.String.contains(O,k)){P.setSize(M);
}else{name.push(O);
}break;
}}
if(name.length>0){P.setFamily(name);
}return P;
},fromConfig:function(B){var C=new qx.bom.Font;
C.set(B);
return C;
},__cB:{fontFamily:o,fontSize:o,fontWeight:o,fontStyle:o,textDecoration:o,lineHeight:1.2},getDefaultStyles:function(){return this.__cB;
}},properties:{size:{check:A,nullable:true,apply:p},lineHeight:{check:t,nullable:true,apply:y},family:{check:x,nullable:true,apply:z},bold:{check:m,nullable:true,apply:d},italic:{check:m,nullable:true,apply:e},decoration:{check:[n,v,w],nullable:true,apply:s}},members:{__cC:null,__cD:null,__cE:null,__cF:null,__cG:null,__cH:null,_applySize:function(S,T){this.__cC=S===null?null:S+k;
},_applyLineHeight:function(D,E){this.__cH=D===null?null:D;
},_applyFamily:function(a,b){var c=o;

for(var i=0,l=a.length;i<l;i++){if(a[i].indexOf(r)>0){c+=j+a[i]+j;
}else{c+=a[i];
}
if(i!==l-1){c+=q;
}}this.__cD=c;
},_applyBold:function(Q,R){this.__cE=Q===null?null:Q?f:g;
},_applyItalic:function(H,I){this.__cF=H===null?null:H?h:g;
},_applyDecoration:function(F,G){this.__cG=F===null?null:F;
},getStyles:function(){return {fontFamily:this.__cD,fontSize:this.__cC,fontWeight:this.__cE,fontStyle:this.__cF,textDecoration:this.__cG,lineHeight:this.__cH};
}}});
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
(function(){var o="qx.debug",n="on",m="Invalid argument 'map'",k="Invalid argument 'minLength'",j="Invalid argument 'source'",h="Invalid argument 'target'",g="function",f="Invalid argument 'array'",e="qx.lang.Object",d="undefined",c="object";
qx.Class.define(e,{statics:{empty:function(u){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(u,m);
}
for(var v in u){if(u.hasOwnProperty(v)){delete u[v];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(I){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(I,m);
}return I.__count__===0;
}:
function(M){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(M,m);
}
for(var N in M){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(a,b){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(a,m);
qx.core.Assert&&qx.core.Assert.assertInteger(b,k);
}return a.__count__>=b;
}:
function(z,A){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(z,m);
qx.core.Assert&&qx.core.Assert.assertInteger(A,k);
}
if(A<=0){return true;
}var length=0;

for(var B in z){if((++length)>=A){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(r,m);
}var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(O,P){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(O,h);
qx.core.Assert&&qx.core.Assert.assertMap(P,j);
}return qx.lang.Object.mergeWith(O,P,false);
},merge:function(F,G){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(F,h);
}var H=arguments.length;

for(var i=1;i<H;i++){qx.lang.Object.mergeWith(F,arguments[i]);
}return F;
},clone:function(J){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(J,j);
}var K={};

for(var L in J){K[L]=J[L];
}return K;
},invert:function(C){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(C,m);
}var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(w,x){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(w,m);
}
for(var y in w){if(w.hasOwnProperty(y)&&w[y]===x){return y;
}}return null;
},contains:function(Q,R){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(Q,m);
}return this.getKeyFromValue(Q,R)!==null;
},select:function(p,q){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(q,m);
}return q[p];
},fromArray:function(S){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertArray(S,f);
}var T={};

for(var i=0,l=S.length;i<l;i++){if(qx.core.Variant.isSet(o,n)){switch(typeof S[i]){case c:case g:case d:throw new Error("Could not convert complex objects like "+S[i]+" at array index "+i+" to map syntax");
}}T[S[i].toString()]=true;
}return T;
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
this.__dF={};
this.__dG={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dH:{},__dF:null,__dG:null,_applyTheme:function(M,N){this.__dG={};
this.__dF={};
},__dI:function(A,B,C){var H=B.appearances;
var K=H[A];

if(!K){var L=b;
var E=[];
var J=A.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===h){var G=I+L+E.join(L);
return this.__dI(G,B,C);
}}}for(var i=0;i<E.length-1;i++){E.shift();
var F=E.join(L);
var D=this.__dI(F,B);

if(D){return D;
}}if(C!=null){return this.__dI(C,B);
}return null;
}else if(typeof K===h){return this.__dI(K,B,C);
}else if(K.include&&!K.style){return this.__dI(K.include,B,C);
}return A;
},styleFrom:function(j,k,l,m){if(!l){l=this.getTheme();
}var s=this.__dG;
var n=s[j];

if(!n){n=s[j]=this.__dI(j,l,m);
}var x=l.appearances[n];

if(!x){this.warn("Missing appearance: "+j);
return null;
}if(!x.style){return null;
}var y=n;

if(k){var z=x.$$bits;

if(!z){z=x.$$bits={};
x.$$length=0;
}var q=0;

for(var t in k){if(!k[t]){continue;
}
if(z[t]==null){z[t]=1<<x.$$length++;
}q+=z[t];
}if(q>0){y+=e+q;
}}var r=this.__dF;

if(r[y]!==undefined){return r[y];
}if(!k){k=this.__dH;
}var v;
if(x.include||x.base){var p=x.style(k);
var o;

if(x.include){o=this.styleFrom(x.include,k,l,m);
}v={};
if(x.base){var u=this.styleFrom(n,k,x.base,m);

if(x.include){for(var w in u){if(!o.hasOwnProperty(w)&&!p.hasOwnProperty(w)){v[w]=u[w];
}}}else{for(var w in u){if(!p.hasOwnProperty(w)){v[w]=u[w];
}}}}if(x.include){for(var w in o){if(!p.hasOwnProperty(w)){v[w]=o[w];
}}}for(var w in p){v[w]=p[w];
}}else{v=x.style(k);
}return r[y]=v||null;
}},destruct:function(){this.__dF=this.__dG=null;
}});
})();
(function(){var u="object",t="qx.debug",s="Theme",r="widgets",q="undefined",p="fonts",o="string",n="colors",m="decorations",k="on",d="meta",j="appearances",g="borders",c="icons",b="other",f="qx.Theme",e="]",h="[Theme ";
qx.Bootstrap.define(f,{statics:{define:function(name,bb){if(!bb){var bb={};
}bb.include=this.__qx(bb.include);
bb.patch=this.__qx(bb.patch);
if(qx.core.Variant.isSet(t,k)){this.__qE(name,bb);
}var bc={$$type:s,name:name,title:bb.title,toString:this.genericToString};
if(bb.extend){bc.supertheme=bb.extend;
}bc.basename=qx.Bootstrap.createNamespace(name,bc);
this.__qA(bc,bb);
this.__qy(bc,bb);
this.$$registry[name]=bc;
for(var i=0,a=bb.include,l=a.length;i<l;i++){this.include(bc,a[i]);
}
for(var i=0,a=bb.patch,l=a.length;i<l;i++){this.patch(bc,a[i]);
}},__qx:function(ba){if(!ba){return [];
}
if(qx.Bootstrap.isArray(ba)){return ba;
}else{return [ba];
}},__qy:function(W,X){var Y=X.aliases||{};

if(X.extend&&X.extend.aliases){qx.Bootstrap.objectMergeWith(Y,X.extend.aliases,false);
}W.aliases=Y;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+e;
},__qz:function(v){for(var i=0,w=this.__qB,l=w.length;i<l;i++){if(v[w[i]]){return w[i];
}}},__qA:function(D,E){var H=this.__qz(E);
if(E.extend&&!H){H=E.extend.type;
}D.type=H||b;
if(!H){return;
}var J=function(){};
if(E.extend){J.prototype=new E.extend.$$clazz;
}var I=J.prototype;
var G=E[H];
for(var F in G){I[F]=G[F];
if(I[F].base){if(qx.core.Variant.isSet(t,k)){if(!E.extend){throw new Error("Found base flag in entry '"+F+"' of theme '"+E.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}I[F].base=E.extend;
}}D.$$clazz=J;
D[H]=new J;
},$$registry:{},__qB:[n,g,m,p,c,r,j,d],__qC:qx.core.Variant.select(t,{"on":{"title":o,"aliases":u,"type":o,"extend":u,"colors":u,"borders":u,"decorations":u,"fonts":u,"icons":u,"widgets":u,"appearances":u,"meta":u,"include":u,"patch":u},"default":null}),__qD:qx.core.Variant.select(t,{"on":{"color":u,"border":u,"decoration":u,"font":u,"icon":u,"appearance":u,"widget":u},"default":null}),__qE:qx.core.Variant.select(t,{"on":function(name,x){var C=this.__qC;

for(var B in x){if(C[B]===undefined){throw new Error('The configuration key "'+B+'" in theme "'+name+'" is not allowed!');
}
if(x[B]==null){throw new Error('Invalid key "'+B+'" in theme "'+name+'"! The value is undefined/null!');
}
if(C[B]!==null&&typeof x[B]!==C[B]){throw new Error('Invalid type of key "'+B+'" in theme "'+name+'"! The type of the key must be "'+C[B]+'"!');
}}var A=[n,g,m,p,c,r,j,d];

for(var i=0,l=A.length;i<l;i++){var B=A[i];

if(x[B]!==undefined&&(x[B] instanceof Array||x[B] instanceof RegExp||x[B] instanceof Date||x[B].classname!==undefined)){throw new Error('Invalid key "'+B+'" in theme "'+name+'"! The value needs to be a map!');
}}var y=0;

for(var i=0,l=A.length;i<l;i++){var B=A[i];

if(x[B]){y++;
}
if(y>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!x.extend&&y===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(x.meta){var z;

for(var B in x.meta){z=x.meta[B];

if(this.__qD[B]===undefined){throw new Error('The key "'+B+'" is not allowed inside a meta theme block.');
}
if(typeof z!==this.__qD[B]){throw new Error('The type of the key "'+B+'" inside the meta block is wrong.');
}
if(!(typeof z===u&&z!==null&&z.$$type===s)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+B+'" in theme "'+name+'" is invalid: '+z);
}}}if(x.extend&&x.extend.$$type!==s){throw new Error('Invalid extend in theme "'+name+'": '+x.extend);
}if(x.include){for(var i=0,l=x.include.length;i<l;i++){if(typeof (x.include[i])==q||x.include[i].$$type!==s){throw new Error('Invalid include in theme "'+name+'": '+x.include[i]);
}}}if(x.patch){for(var i=0,l=x.patch.length;i<l;i++){if(typeof (x.patch[i])==q||x.patch[i].$$type!==s){throw new Error('Invalid patch in theme "'+name+'": '+x.patch[i]);
}}}},"default":function(){}}),patch:function(K,L){var N=this.__qz(L);

if(N!==this.__qz(K)){throw new Error("The mixins '"+K.name+"' are not compatible '"+L.name+"'!");
}var M=L[N];
var O=K.$$clazz.prototype;

for(var P in M){O[P]=M[P];
}},include:function(Q,R){var T=R.type;

if(T!==Q.type){throw new Error("The mixins '"+Q.name+"' are not compatible '"+R.name+"'!");
}var S=R[T];
var U=Q.$$clazz.prototype;

for(var V in S){if(U[V]!==undefined){continue;
}U[V]=S[V];
}}}});
})();
(function(){var w="Boolean",v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="__qk",p="widget",o="Use isShowInvalidToolTips() instead.",n="qx.ui.tooltip.ToolTip",g="Use setShowInvalidToolTips() instead.",m="Use initShowInvalidToolTips() instead.",j="Use resetShowInvalidToolTips() instead.",d="__ql",c="_applyCurrent",i="__qn",h="qx.ui.tooltip.Manager",k="tooltip-error",b="Use toggleShowInvalidToolTips() instead.",l="singleton",f="Use getShowInvalidToolTips() instead.";
qx.Class.define(h,{type:l,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,t,this.__qu,this,true);
this.__qk=new qx.event.Timer();
this.__qk.addListener(u,this.__qr,this);
this.__ql=new qx.event.Timer();
this.__ql.addListener(u,this.__qs,this);
this.__qm={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:c},showInvalidToolTips:{check:w,init:true},showToolTips:{check:w,init:true}},members:{__qm:null,__ql:null,__qk:null,__qn:null,__qo:null,__qp:function(){if(!this.__qn){this.__qn=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qn;
},__qq:function(){if(!this.__qo){this.__qo=new qx.ui.tooltip.ToolTip().set({appearance:k});
this.__qo.syncAppearance();
}return this.__qo;
},_applyCurrent:function(K,L){if(L&&qx.ui.core.Widget.contains(L,K)){return;
}if(L){if(!L.isDisposed()){L.exclude();
}this.__qk.stop();
this.__ql.stop();
}var N=qx.event.Registration;
var M=document.body;
if(K){this.__qk.startWith(K.getShowTimeout());
N.addListener(M,s,this.__qv,this,true);
N.addListener(M,v,this.__qw,this,true);
N.addListener(M,r,this.__qt,this,true);
}else{N.removeListener(M,s,this.__qv,this,true);
N.removeListener(M,v,this.__qw,this,true);
N.removeListener(M,r,this.__qt,this,true);
}},__qr:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){this.__ql.startWith(G.getHideTimeout());

if(G.getPlaceMethod()==p){G.placeToWidget(G.getOpener());
}else{G.placeToPoint(this.__qm);
}G.show();
}this.__qk.stop();
},__qs:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){a.exclude();
}this.__ql.stop();
this.resetCurrent();
},__qt:function(e){var x=this.__qm;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__qu:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C,D,A,z;
while(B!=null){C=B.getToolTip();
D=B.getToolTipText()||null;
A=B.getToolTipIcon()||null;

if(qx.Class.hasInterface(B.constructor,qx.ui.form.IForm)&&!B.isValid()){z=B.getInvalidMessage();
}
if(C||D||A||z){break;
}B=B.getLayoutParent();
}if(!B||
!B.getEnabled()||
B.isBlockToolTip()||
(!z&&!this.getShowToolTips())||(z&&!this.getShowInvalidToolTips())){return;
}
if(z){C=this.__qq().set({label:z});
}
if(!C){C=this.__qp().set({label:D,icon:A});
}this.setCurrent(C);
C.setOpener(B);
},__qv:function(e){var H=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!H){return;
}var I=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!I){return;
}var J=this.getCurrent();
if(J&&(I==J||qx.ui.core.Widget.contains(J,I))){return;
}if(I&&H&&qx.ui.core.Widget.contains(H,I)){return;
}if(J&&!I){this.setCurrent(null);
}else{this.resetCurrent();
}},__qw:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&F==E.getToolTip()){this.setCurrent(null);
}},setShowInvalidTooltips:function(y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.setShowInvalidToolTips(y);
},getShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getShowInvalidToolTips();
},resetShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.resetShowInvalidToolTips();
},isShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o);
return this.isShowInvalidToolTips();
},toggleShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.toggleShowInvalidToolTips();
},initShowInvalidTooltips:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,m);
return this.initShowInvalidToolTips();
}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__qu,this,true);
this._disposeObjects(q,d,i);
this.__qm=null;
}});
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
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(e){return this._indexOf(e);
},add:function(m,n){this._add(m,n);
},addAt:function(b,c,d){this._addAt(b,c,d);
},addBefore:function(f,g,h){this._addBefore(f,g,h);
},addAfter:function(i,j,k){this._addAfter(i,j,k);
},remove:function(p){this._remove(p);
},removeAt:function(l){return this._removeAt(l);
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
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="qx.debug",b="on",a="allowShrinkY",F="Wrong 'width' argument. ",E="Something went wrong with the layout of ",D="bottom",C="Wrong 'left' argument. ",B="baseline",A="marginBottom",z="qx.ui.core.LayoutItem",y="center",x="marginTop",w="!",q="allowGrowX",r="middle",o="marginLeft",p="allowShrinkX",m="top",n="right",k="marginRight",l="abstract",s="Wrong 'top' argument. ",t="Wrong 'height' argument. ",v="allowGrowY",u="left";
qx.Class.define(z,{type:l,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[q,p],mode:e,themeable:true},allowStretchY:{group:[v,a],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[x,k,A,o],mode:e,themeable:true},alignX:{check:[u,y,n],nullable:true,apply:d,themeable:true},alignY:{check:[m,r,D,B],nullable:true,apply:d,themeable:true}},members:{__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,getBounds:function(){return this.__fu||this.__fq||null;
},clearSeparators:function(){},renderSeparator:function(Y,ba){},renderLayout:function(L,top,M,N){if(qx.core.Variant.isSet(c,b)){var O=E+this.toString()+w;
this.assertInteger(L,C+O);
this.assertInteger(top,s+O);
this.assertInteger(M,F+O);
this.assertInteger(N,t+O);
}var P=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var P=this._getHeightForWidth(M);
}
if(P!=null&&P!==this.__fp){this.__fp=P;
qx.ui.core.queue.Layout.add(this);
return null;
}var R=this.__fq;

if(!R){R=this.__fq={};
}var Q={};

if(L!==R.left||top!==R.top){Q.position=true;
R.left=L;
R.top=top;
}
if(M!==R.width||N!==R.height){Q.size=true;
R.width=M;
R.height=N;
}if(this.__fr){Q.local=true;
delete this.__fr;
}
if(this.__ft){Q.margin=true;
delete this.__ft;
}return Q;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__fr;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__fr=true;
this.__fs=null;
},getSizeHint:function(S){var T=this.__fs;

if(T){return T;
}
if(S===false){return null;
}T=this.__fs=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__fp&&this.getHeight()==null){T.height=this.__fp;
}if(T.minWidth>T.width){T.width=T.minWidth;
}
if(T.maxWidth<T.width){T.width=T.maxWidth;
}
if(!this.getAllowGrowX()){T.maxWidth=T.width;
}
if(!this.getAllowShrinkX()){T.minWidth=T.width;
}if(T.minHeight>T.height){T.height=T.minHeight;
}
if(T.maxHeight<T.height){T.height=T.maxHeight;
}
if(!this.getAllowGrowY()){T.maxHeight=T.height;
}
if(!this.getAllowShrinkY()){T.minHeight=T.height;
}return T;
},_computeSizeHint:function(){var bf=this.getMinWidth()||0;
var bc=this.getMinHeight()||0;
var bg=this.getWidth()||bf;
var be=this.getHeight()||bc;
var bb=this.getMaxWidth()||Infinity;
var bd=this.getMaxHeight()||Infinity;
return {minWidth:bf,width:bg,maxWidth:bb,minHeight:bc,height:be,maxHeight:bd};
},_hasHeightForWidth:function(){var X=this._getLayout();

if(X){return X.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(J){var K=this._getLayout();

if(K&&K.hasHeightForWidth()){return K.getHeightForWidth(J);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__ft=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__fu;
},setUserBounds:function(U,top,V,W){this.__fu={left:U,top:top,width:V,height:W};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__fu;
qx.ui.core.queue.Layout.add(this);
},__fw:{},setLayoutProperties:function(bj){if(bj==null){return;
}var bk=this.__fv;

if(!bk){bk=this.__fv={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(bj);
}for(var bl in bj){if(bj[bl]==null){delete bk[bl];
}else{bk[bl]=bj[bl];
}}},getLayoutProperties:function(){return this.__fv||this.__fw;
},clearLayoutProperties:function(){delete this.__fv;
},updateLayoutProperties:function(G){var H=this._getLayout();

if(H){if(qx.core.Variant.isSet(c,b)){if(G){for(var I in G){if(G[I]!==null){H.verifyLayoutProperty(this,I,G[I]);
}}}}H.invalidateChildrenCache();
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
},clone:function(){var bh=qx.core.Object.prototype.clone.call(this);
var bi=this.__fv;

if(bi){bh.__fv=qx.lang.Object.clone(bi);
}return bh;
}},destruct:function(){this.$$parent=this.$$subparent=this.__fv=this.__fq=this.__fu=this.__fs=null;
}});
})();
(function(){var k="qx.debug",j="qx.ui.core.DecoratorFactory",i="qxType",h="",g="decorator",f="$$nopool$$",e="qx.ui.core.DecoratorFactory[",d="] ",c="on",b="keys: ",a=", elements: ";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__cP:f},members:{__cO:null,getDecoratorElement:function(x){var C=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(x)){var A=x;
var z=qx.theme.manager.Decoration.getInstance().resolve(x);
}else{var A=C.__cP;
z=x;
}var B=this.__cO;

if(B[A]&&B[A].length>0){var y=B[A].pop();
}else{var y=this._createDecoratorElement(z,A);
}y.$$pooled=false;
return y;
},poolDecorator:function(l){if(!l||l.$$pooled||l.isDisposed()){return;
}var o=qx.ui.core.DecoratorFactory;
var m=l.getId();

if(m==o.__cP){l.dispose();
return;
}var n=this.__cO;

if(!n[m]){n[m]=[];
}
if(n[m].length>o.MAX_SIZE){l.dispose();
}else{l.$$pooled=true;
n[m].push(l);
}},_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);

if(qx.core.Variant.isSet(k,c)){w.setAttribute(i,g);
}return w;
},toString:qx.core.Variant.select(k,{"on":function(){var r=0;
var s=0;

for(var t in this.__cO){r+=1;
s+=this.__cO[t].length;
}return [e,this.$$hash,d,b,r,a,s].join(h);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cO;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cO=null;
}});
})();
(function(){var ey="on",ex="px",ew="qx.debug",ev="Boolean",eu="qx.event.type.Drag",et="qx.event.type.Mouse",es="visible",er="qx.event.type.Focus",eq="Integer",ep="excluded",dE="qx.event.type.Data",dD="_applyPadding",dC="qx.event.type.Event",dB="hidden",dA="contextmenu",dz="String",dy="tabIndex",dx="focused",dw="changeVisibility",dv="mshtml",eF="hovered",eG="qx.event.type.KeySequence",eD="qx.client",eE="absolute",eB="backgroundColor",eC="drag",ez="div",eA="object",eH="disabled",eI="move",ed="dragstart",ec="qx.dynlocale",ef="dragchange",ee="dragend",eh="resize",eg="Decorator",ej="zIndex",ei="opacity",eb="default",ea="Color",cl="qxType",cm="changeToolTipText",cn="beforeContextmenuOpen",co="_applyNativeContextMenu",cp="content",cq="_applyBackgroundColor",cr="_applyFocusable",cs="changeShadow",ct="qx.event.type.KeyInput",cu="__dX",eM="createChildControl",eL="__dP",eK="Invalid left decorator inset detected: ",eJ="Font",eQ="_applyShadow",eP="Invalid layout data: ",eO="Could not add widget to itself: ",eN="_applyEnabled",eS="_applySelectable",eR="Number",cT="_applyKeepActive",cU="_applyVisibility",cR="The 'after' widget is not a child of this widget!",cS="repeat",cX="qxDraggable",cY="syncAppearance",cV="__dO",cW="paddingLeft",cP="_applyDroppable",cQ="Wrong 'left' argument. ",cC="protector",cB="#",cE="qx.event.type.MouseWheel",cD="_applyCursor",cy="_applyDraggable",cx="__dL",cA="changeTextColor",cz="$$widget",cw="changeContextMenu",cv="paddingTop",de="changeSelectable",df="hideFocus",dg="Invalid top decorator inset detected: ",dh="none",da="__dT",db="outline",dc="The 'before' widget is not a child of this widget!",dd="_applyAppearance",di=" returned an invalid size hint!",dj="_applyOpacity",cM="url(",cL=")",cK="qx.ui.core.Widget",cJ="minHeight is larger than maxHeight!",cI="_applyFont",cH="cursor",cG="qxDroppable",cF="changeZIndex",cO="changeEnabled",cN="changeFont",dk="__dK",dl="_applyDecorator",dm="_applyZIndex",dn="_applyTextColor",dp="qx.ui.menu.Menu",dq="Invalid right decorator inset detected: ",dr="Invalid widget to add: ",ds="_applyToolTipText",dt="The layout of the widget",du="true",dI="widget",dH="Wrong 'top' argument. ",dG="changeDecorator",dF="__dV",dM="changeBackgroundColor",dL="_applyTabIndex",dK="Invalid bottom decorator inset detected: ",dJ="changeAppearance",dO="shorthand",dN="/",dV="",dW="_applyContextMenu",dT="container",dU="paddingBottom",dR="__dQ",dS="changeNativeContextMenu",dP="qx.ui.tooltip.ToolTip",dQ="qxKeepActive",dX="_applyKeepFocus",dY="paddingRight",em="minWidth is larger than maxWidth!",ek="changeLocale",eo="qxKeepFocus",en="qx/static/blank.gif";
qx.Class.define(cK,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dK=this._createContainerElement();
this.__dL=this.__dW();
this.__dK.add(this.__dL);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:dC,disappear:dC,createChildControl:dE,resize:dE,move:dE,syncAppearance:dE,mousemove:et,mouseover:et,mouseout:et,mousedown:et,mouseup:et,click:et,dblclick:et,contextmenu:et,beforeContextmenuOpen:dE,mousewheel:cE,keyup:eG,keydown:eG,keypress:eG,keyinput:ct,focus:er,blur:er,focusin:er,focusout:er,activate:er,deactivate:er,capture:dC,losecapture:dC,drop:eu,dragleave:eu,dragover:eu,drag:eu,dragstart:eu,dragend:eu,dragchange:eu,droprequest:eu},properties:{paddingTop:{check:eq,init:0,apply:dD,themeable:true},paddingRight:{check:eq,init:0,apply:dD,themeable:true},paddingBottom:{check:eq,init:0,apply:dD,themeable:true},paddingLeft:{check:eq,init:0,apply:dD,themeable:true},padding:{group:[cv,dY,dU,cW],mode:dO,themeable:true},zIndex:{nullable:true,init:null,apply:dm,event:cF,check:eq,themeable:true},decorator:{nullable:true,init:null,apply:dl,event:dG,check:eg,themeable:true},shadow:{nullable:true,init:null,apply:eQ,event:cs,check:eg,themeable:true},backgroundColor:{nullable:true,check:ea,apply:cq,event:dM,themeable:true},textColor:{nullable:true,check:ea,apply:dn,event:cA,themeable:true,inheritable:true},font:{nullable:true,apply:cI,check:eJ,event:cN,themeable:true,inheritable:true,dereference:true},opacity:{check:eR,apply:dj,themeable:true,nullable:true,init:null},cursor:{check:dz,apply:cD,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dP,nullable:true},toolTipText:{check:dz,nullable:true,event:cm,apply:ds},toolTipIcon:{check:dz,nullable:true,event:cm},blockToolTip:{check:ev,init:false},visibility:{check:[es,dB,ep],init:es,apply:cU,event:dw},enabled:{init:true,check:ev,inheritable:true,apply:eN,event:cO},anonymous:{init:false,check:ev},tabIndex:{check:eq,nullable:true,apply:dL},focusable:{check:ev,init:false,apply:cr},keepFocus:{check:ev,init:false,apply:dX},keepActive:{check:ev,init:false,apply:cT},draggable:{check:ev,init:false,apply:cy},droppable:{check:ev,init:false,apply:cP},selectable:{check:ev,init:false,event:de,apply:eS},contextMenu:{check:dp,apply:dW,nullable:true,event:cw},nativeContextMenu:{check:ev,init:false,themeable:true,event:dS,apply:co},appearance:{check:dz,init:dI,apply:dd,event:dJ}},statics:{DEBUG:false,getWidgetByElement:function(cf,cg){while(cf){var ch=cf.$$widget;
if(ch!=null){var ci=qx.core.ObjectRegistry.fromHashCode(ch);
if(!cg||!ci.getAnonymous()){return ci;
}}try{cf=cf.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,q){while(q){if(parent==q){return true;
}q=q.getLayoutParent();
}return false;
},__dM:new qx.ui.core.DecoratorFactory(),__dN:new qx.ui.core.DecoratorFactory()},members:{__dK:null,__dL:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,__dT:null,_getLayout:function(){return this.__dT;
},_setLayout:function(by){if(qx.core.Variant.isSet(ew,ey)){if(by){this.assertInstance(by,qx.ui.layout.Abstract);
}}
if(this.__dT){this.__dT.connectToWidget(null);
}
if(by){by.connectToWidget(this);
}this.__dT=by;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var fx=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(fx);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(fx);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dU:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var gY=qx.theme.manager.Decoration.getInstance();
var hb=gY.resolve(a).getInsets();
var ha=gY.resolve(b).getInsets();

if(hb.top!=ha.top||hb.right!=ha.right||hb.bottom!=ha.bottom||hb.left!=ha.left){return true;
}return false;
},renderLayout:function(fy,top,fz,fA){var fJ=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,fy,top,fz,fA);
if(!fJ){return null;
}var fC=this.getContainerElement();
var content=this.getContentElement();
var fG=fJ.size||this._updateInsets;
var fK=ex;
var fH={};
if(fJ.position){fH.left=fy+fK;
fH.top=top+fK;
}if(fJ.size){fH.width=fz+fK;
fH.height=fA+fK;
}
if(fJ.position||fJ.size){fC.setStyles(fH);
}
if(fG||fJ.local||fJ.margin){var fB=this.getInsets();
var innerWidth=fz-fB.left-fB.right;
var innerHeight=fA-fB.top-fB.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var fE={};

if(this._updateInsets){fE.left=fB.left+fK;
fE.top=fB.top+fK;
}
if(fG){fE.width=innerWidth+fK;
fE.height=innerHeight+fK;
}
if(fG||this._updateInsets){content.setStyles(fE);
}
if(fJ.size){var fI=this.__dQ;

if(fI){fI.setStyles({width:fz+ex,height:fA+ex});
}}
if(fJ.size||this._updateInsets){if(this.__dO){this.__dO.resize(fz,fA);
}}
if(fJ.size){if(this.__dP){var fB=this.__dP.getInsets();
var fF=fz+fB.left+fB.right;
var fD=fA+fB.top+fB.bottom;
this.__dP.resize(fF,fD);
}}
if(fG||fJ.local||fJ.margin){if(this.__dT&&this.hasLayoutChildren()){this.__dT.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(fJ.position&&this.hasListener(eI)){this.fireDataEvent(eI,this.getBounds());
}
if(fJ.size&&this.hasListener(eh)){this.fireDataEvent(eh,this.getBounds());
}delete this._updateInsets;
return fJ;
},__dV:null,clearSeparators:function(){var fl=this.__dV;

if(!fl){return;
}var fm=qx.ui.core.Widget.__dM;
var content=this.getContentElement();
var fk;

for(var i=0,l=fl.length;i<l;i++){fk=fl[i];
fm.poolDecorator(fk);
content.remove(fk);
}fl.length=0;
},renderSeparator:function(bO,bP){var bQ=qx.ui.core.Widget.__dM.getDecoratorElement(bO);
this.getContentElement().add(bQ);
bQ.resize(bP.width,bP.height);
bQ.setStyles({left:bP.left+ex,top:bP.top+ex});
if(!this.__dV){this.__dV=[bQ];
}else{this.__dV.push(bQ);
}},_computeSizeHint:function(){var ft=this.getWidth();
var fs=this.getMinWidth();
var fo=this.getMaxWidth();
var fr=this.getHeight();
var fp=this.getMinHeight();
var fq=this.getMaxHeight();

if(qx.core.Variant.isSet(ew,ey)){if(fs!==null&&fo!==null){this.assert(fs<=fo,em);
}
if(fp!==null&&fq!==null){this.assert(fp<=fq,cJ);
}}var fu=this._getContentHint();
var fn=this.getInsets();
var fw=fn.left+fn.right;
var fv=fn.top+fn.bottom;

if(ft==null){ft=fu.width+fw;
}
if(fr==null){fr=fu.height+fv;
}
if(fs==null){fs=fw;

if(fu.minWidth!=null){fs+=fu.minWidth;
}}
if(fp==null){fp=fv;

if(fu.minHeight!=null){fp+=fu.minHeight;
}}
if(fo==null){if(fu.maxWidth==null){fo=Infinity;
}else{fo=fu.maxWidth+fw;
}}
if(fq==null){if(fu.maxHeight==null){fq=Infinity;
}else{fq=fu.maxHeight+fv;
}}return {width:ft,minWidth:fs,maxWidth:fo,height:fr,minHeight:fp,maxHeight:fq};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__dT){this.__dT.invalidateLayoutCache();
}},_getContentHint:function(){var fR=this.__dT;

if(fR){if(this.hasLayoutChildren()){var fS=fR.getSizeHint();

if(qx.core.Variant.isSet(ew,ey)){var fQ=dt+this.toString()+di;
this.assertInteger(fS.width,cQ+fQ);
this.assertInteger(fS.height,dH+fQ);
}return fS;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(d){var j=this.getInsets();
var n=j.left+j.right;
var m=j.top+j.bottom;
var k=d-n;
var g=this._getLayout();

if(g&&g.hasHeightForWidth()){var f=g.getHeightForWidth(d);
}else{f=this._getContentHeightForWidth(k);
}var h=f+m;
return h;
},_getContentHeightForWidth:function(ga){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var gV=this.getPaddingRight();
var gX=this.getPaddingBottom();
var gW=this.getPaddingLeft();

if(this.__dO){var gU=this.__dO.getInsets();

if(qx.core.Variant.isSet(ew,ey)){this.assertNumber(gU.top,dg+gU.top);
this.assertNumber(gU.right,dq+gU.right);
this.assertNumber(gU.bottom,dK+gU.bottom);
this.assertNumber(gU.left,eK+gU.left);
}top+=gU.top;
gV+=gU.right;
gX+=gU.bottom;
gW+=gU.left;
}return {"top":top,"right":gV,"bottom":gX,"left":gW};
},getInnerSize:function(){var hf=this.getBounds();

if(!hf){return null;
}var he=this.getInsets();
return {width:hf.width-he.left-he.right,height:hf.height-he.top-he.bottom};
},show:function(){this.setVisibility(es);
},hide:function(){this.setVisibility(dB);
},exclude:function(){this.setVisibility(ep);
},isVisible:function(){return this.getVisibility()===es;
},isHidden:function(){return this.getVisibility()!==es;
},isExcluded:function(){return this.getVisibility()===ep;
},isSeeable:function(){var fU=this.getContainerElement().getDomElement();

if(fU){return fU.offsetWidth>0;
}var fT=this;

do{if(!fT.isVisible()){return false;
}
if(fT.isRootWidget()){return true;
}fT=fT.getLayoutParent();
}while(fT);
return false;
},_createContainerElement:function(){var gc={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(ew,ey)){gc.qxType=dT;
gc.qxClass=this.classname;
}var gb={zIndex:0,position:eE};
return new qx.html.Element(ez,gb,gc);
},__dW:function(){var E=this._createContentElement();

if(qx.core.Variant.isSet(ew,ey)){E.setAttribute(cl,cp);
}E.setStyles({"position":eE,"zIndex":10});
return E;
},_createContentElement:function(){return new qx.html.Element(ez,{overflowX:dB,overflowY:dB});
},getContainerElement:function(){return this.__dK;
},getContentElement:function(){return this.__dL;
},getDecoratorElement:function(){return this.__dO||null;
},getShadowElement:function(){return this.__dP||null;
},__dX:null,getLayoutChildren:function(){var bf=this.__dX;

if(!bf){return this.__dY;
}var bg;

for(var i=0,l=bf.length;i<l;i++){var be=bf[i];

if(be.hasUserBounds()||be.isExcluded()){if(bg==null){bg=bf.concat();
}qx.lang.Array.remove(bg,be);
}}return bg||bf;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var gz=this.__dT;

if(gz){gz.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var hc=this.__dX;

if(!hc){return false;
}var hd;

for(var i=0,l=hc.length;i<l;i++){hd=hc[i];

if(!hd.hasUserBounds()&&!hd.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dY:[],_getChildren:function(){return this.__dX||this.__dY;
},_indexOf:function(bM){var bN=this.__dX;

if(!bN){return -1;
}return bN.indexOf(bM);
},_hasChildren:function(){var c=this.__dX;
return c!=null&&(!!c[0]);
},addChildrenToQueue:function(O){var P=this.__dX;

if(!P){return;
}var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
O[Q.$$hash]=Q;
Q.addChildrenToQueue(O);
}},_add:function(bH,bI){if(bH.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,bH);
}
if(this.__dX){this.__dX.push(bH);
}else{this.__dX=[bH];
}this.__ea(bH,bI);
},_addAt:function(gr,gs,gt){if(!this.__dX){this.__dX=[];
}if(gr.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,gr);
}var gu=this.__dX[gs];

if(gu===gr){gr.setLayoutProperties(gt);
}
if(gu){qx.lang.Array.insertBefore(this.__dX,gr,gu);
}else{this.__dX.push(gr);
}this.__ea(gr,gt);
},_addBefore:function(gv,gw,gx){if(qx.core.Variant.isSet(ew,ey)){this.assertInArray(gw,this._getChildren(),dc);
}
if(gv==gw){return;
}
if(!this.__dX){this.__dX=[];
}if(gv.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,gv);
}qx.lang.Array.insertBefore(this.__dX,gv,gw);
this.__ea(gv,gx);
},_addAfter:function(B,C,D){if(qx.core.Variant.isSet(ew,ey)){this.assertInArray(C,this._getChildren(),cR);
}
if(B==C){return;
}
if(!this.__dX){this.__dX=[];
}if(B.getLayoutParent()==this){qx.lang.Array.remove(this.__dX,B);
}qx.lang.Array.insertAfter(this.__dX,B,C);
this.__ea(B,D);
},_remove:function(bB){if(!this.__dX){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dX,bB);
this.__eb(bB);
},_removeAt:function(bX){if(!this.__dX){throw new Error("This widget has no children!");
}var bY=this.__dX[bX];
qx.lang.Array.removeAt(this.__dX,bX);
this.__eb(bY);
return bY;
},_removeAll:function(){if(!this.__dX){return;
}var gy=this.__dX.concat();
this.__dX.length=0;

for(var i=gy.length-1;i>=0;i--){this.__eb(gy[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__ea:function(eX,eY){if(qx.core.Variant.isSet(ew,ey)){this.assertInstance(eX,qx.ui.core.LayoutItem,dr+eX);
this.assertNotIdentical(eX,this,eO+eX);

if(eY!=null){this.assertType(eY,eA,eP+eY);
}}var parent=eX.getLayoutParent();

if(parent&&parent!=this){parent._remove(eX);
}eX.setLayoutParent(this);
if(eY){eX.setLayoutProperties(eY);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(eX);
}},__eb:function(gD){if(qx.core.Variant.isSet(ew,ey)){this.assertNotUndefined(gD);
}
if(gD.getLayoutParent()!==this){throw new Error("Remove Error: "+gD+" is not a child of this widget!");
}gD.setLayoutParent(null);
if(this.__dT){this.__dT.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(gD);
}},capture:function(M){this.getContainerElement().capture(M);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(x,y,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dQ){return;
}var gn=this.__dQ=new qx.html.Element;

if(qx.core.Variant.isSet(ew,ey)){gn.setAttribute(cl,cC);
}gn.setStyles({position:eE,top:0,left:0,zIndex:7});
var go=this.getBounds();

if(go){this.__dQ.setStyles({width:go.width+ex,height:go.height+ex});
}if(qx.core.Variant.isSet(eD,dv)){gn.setStyles({backgroundImage:cM+qx.util.ResourceManager.getInstance().toUri(en)+cL,backgroundRepeat:cS});
}this.getContainerElement().add(gn);
},_applyDecorator:function(bs,bt){if(qx.core.Variant.isSet(ew,ey)){if(bs&&typeof bs===eA){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+bs);
}}}var bw=qx.ui.core.Widget.__dM;
var bu=this.getContainerElement();
if(!this.__dQ&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(bt){bu.remove(this.__dO);
bw.poolDecorator(this.__dO);
}if(bs){var bv=this.__dO=bw.getDecoratorElement(bs);
bv.setStyle(ej,5);
bu.add(bv);
}else{delete this.__dO;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__dU(bt,bs)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(bs){var bx=this.getBounds();

if(bx){bv.resize(bx.width,bx.height);
this.__dQ&&
this.__dQ.setStyles({width:bx.width+ex,height:bx.height+ex});
}}},_applyShadow:function(gG,gH){var gO=qx.ui.core.Widget.__dN;
var gJ=this.getContainerElement();
if(gH){gJ.remove(this.__dP);
gO.poolDecorator(this.__dP);
}if(gG){var gL=this.__dP=gO.getDecoratorElement(gG);
gJ.add(gL);
var gN=gL.getInsets();
gL.setStyles({left:(-gN.left)+ex,top:(-gN.top)+ex});
var gM=this.getBounds();

if(gM){var gK=gM.width+gN.left+gN.right;
var gI=gM.height+gN.top+gN.bottom;
gL.resize(gK,gI);
}gL.tint(null);
}else{delete this.__dP;
}},_applyToolTipText:function(bC,bD){if(qx.core.Variant.isSet(ec,ey)){if(this.__dS){return;
}var bE=qx.locale.Manager.getInstance();
this.__dS=bE.addListener(ek,function(){var fL=this.getToolTipText();

if(fL&&fL.translate){this.setToolTipText(fL.translate());
}},this);
}},_applyTextColor:function(bV,bW){},_applyZIndex:function(bz,bA){this.getContainerElement().setStyle(ej,bz==null?0:bz);
},_applyVisibility:function(hg,hh){var hi=this.getContainerElement();

if(hg===es){hi.show();
}else{hi.hide();
}var parent=this.$$parent;

if(parent&&(hh==null||hg==null||hh===ep||hg===ep)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gR,gS){this.getContainerElement().setStyle(ei,gR==1?null:gR);
if(qx.core.Variant.isSet(eD,dv)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gT=(gR==1||gR==null)?null:0.99;
this.getContentElement().setStyle(ei,gT);
}}},_applyCursor:function(hl,hm){if(hl==null&&!this.isSelectable()){hl=eb;
}this.getContainerElement().setStyle(cH,hl,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(ca,cb){var cc=this.getBackgroundColor();
var ce=this.getContainerElement();

if(this.__dO){this.__dO.tint(cc);
ce.setStyle(eB,null);
}else{var cd=qx.theme.manager.Color.getInstance().resolve(cc);
ce.setStyle(eB,cd);
}},_applyFont:function(ge,gf){},__ec:null,$$stateChanges:null,_forwardStates:null,hasState:function(fi){var fj=this.__ec;
return !!fj&&!!fj[fi];
},addState:function(gi){var gj=this.__ec;

if(!gj){gj=this.__ec={};
}
if(gj[gi]){return;
}this.__ec[gi]=true;
if(gi===eF){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gm=this.__ef;

if(forward&&forward[gi]&&gm){var gk;

for(var gl in gm){gk=gm[gl];

if(gk instanceof qx.ui.core.Widget){gm[gl].addState(gi);
}}}},removeState:function(F){var G=this.__ec;

if(!G||!G[F]){return;
}delete this.__ec[F];
if(F===eF){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var J=this.__ef;

if(forward&&forward[F]&&J){for(var I in J){var H=J[I];

if(H instanceof qx.ui.core.Widget){H.removeState(F);
}}}},replaceState:function(bm,bn){var bo=this.__ec;

if(!bo){bo=this.__ec={};
}
if(!bo[bn]){bo[bn]=true;
}
if(bo[bm]){delete bo[bm];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var br=this.__ef;

if(forward&&forward[bn]&&br){for(var bq in br){var bp=br[bq];

if(bp instanceof qx.ui.core.Widget){bp.replaceState(bm,bn);
}}}},__ed:null,__ee:null,syncAppearance:function(){var V=this.__ec;
var U=this.__ed;
var W=qx.theme.manager.Appearance.getInstance();
var S=qx.core.Property.$$method.setThemed;
var bb=qx.core.Property.$$method.resetThemed;
if(this.__ee){delete this.__ee;
if(U){var R=W.styleFrom(U,V,null,this.getAppearance());
if(R){U=null;
}}}if(!U){var T=this;
var ba=[];

do{ba.push(T.$$subcontrol||T.getAppearance());
}while(T=T.$$subparent);
U=this.__ed=ba.reverse().join(dN).replace(/#[0-9]+/g,dV);
}var X=W.styleFrom(U,V,null,this.getAppearance());

if(X){if(R){for(var Y in R){if(X[Y]===undefined){this[bb[Y]]();
}}}if(qx.core.Variant.isSet(ew,ey)){for(var Y in X){if(!this[S[Y]]){throw new Error(this.classname+' has no themeable property "'+Y+'" while styling '+U);
}}}for(var Y in X){X[Y]===undefined?this[bb[Y]]():this[S[Y]](X[Y]);
}}else if(R){for(var Y in R){this[bb[Y]]();
}}this.fireDataEvent(cY,this.__ec);
},_applyAppearance:function(gg,gh){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dR){qx.ui.core.queue.Appearance.add(this);
this.__dR=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__ee=true;
qx.ui.core.queue.Appearance.add(this);
var bL=this.__ef;

if(bL){var bJ;

for(var bK in bL){bJ=bL[bK];

if(bJ instanceof qx.ui.core.Widget){bJ.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fh=this;

while(fh.getAnonymous()){fh=fh.getLayoutParent();

if(!fh){return null;
}}return fh;
},getFocusTarget:function(){var gA=this;

if(!gA.getEnabled()){return null;
}
while(gA.getAnonymous()||!gA.getFocusable()){gA=gA.getLayoutParent();

if(!gA||!gA.getEnabled()){return null;
}}return gA;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(eT,eU){var eV=this.getFocusElement();
if(eT){var eW=this.getTabIndex();

if(eW==null){eW=1;
}eV.setAttribute(dy,eW);
if(qx.core.Variant.isSet(eD,dv)){eV.setAttribute(df,du);
}else{eV.setStyle(db,dh);
}}else{if(eV.isNativelyFocusable()){eV.setAttribute(dy,-1);
}else if(eU){eV.setAttribute(dy,null);
}}},_applyKeepFocus:function(gB){var gC=this.getFocusElement();
gC.setAttribute(eo,gB?ey:null);
},_applyKeepActive:function(gP){var gQ=this.getContainerElement();
gQ.setAttribute(dQ,gP?ey:null);
},_applyTabIndex:function(gd){if(gd==null){gd=1;
}else if(gd<1||gd>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gd!=null){this.getFocusElement().setAttribute(dy,gd);
}},_applySelectable:function(bk,bl){if(bl!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(bk);
this.getContentElement().setSelectable(bk);
},_applyEnabled:function(hj,hk){if(hj===false){this.addState(eH);
this.removeState(eF);
if(this.isFocusable()){this.removeState(dx);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eH);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gE,gF,name){},_applyContextMenu:function(t,u){if(u){u.removeState(dA);

if(u.getOpener()==this){u.resetOpener();
}
if(!t){this.removeListener(dA,this._onContextMenuOpen);
u.removeListener(dw,this._onBeforeContextMenuOpen,this);
}}
if(t){t.setOpener(this);
t.addState(dA);

if(!u){this.addListener(dA,this._onContextMenuOpen);
t.addListener(dw,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==es&&this.hasListener(cn)){this.fireDataEvent(cn,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(o,p){if(!this.isEnabled()&&o===true){o=false;
}qx.ui.core.DragDropCursor.getInstance();
if(o){this.addListener(ed,this._onDragStart);
this.addListener(eC,this._onDrag);
this.addListener(ee,this._onDragEnd);
this.addListener(ef,this._onDragChange);
}else{this.removeListener(ed,this._onDragStart);
this.removeListener(eC,this._onDrag);
this.removeListener(ee,this._onDragEnd);
this.removeListener(ef,this._onDragChange);
}this.getContainerElement().setAttribute(cX,o?ey:null);
},_applyDroppable:function(gp,gq){if(!this.isEnabled()&&gp===true){gp=false;
}this.getContainerElement().setAttribute(cG,gp?ey:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(eb);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bc=qx.ui.core.DragDropCursor.getInstance();
var bd=e.getCurrentAction();
bd?bc.setAction(bd):bc.resetAction();
},visualizeFocus:function(){this.addState(dx);
},visualizeBlur:function(){this.removeState(dx);
},scrollChildIntoView:function(fV,fW,fX,fY){this.scrollChildIntoViewX(fV,fW,fY);
this.scrollChildIntoViewY(fV,fX,fY);
},scrollChildIntoViewX:function(hp,hq,hr){this.getContentElement().scrollChildIntoViewX(hp.getContainerElement(),hq,hr);
},scrollChildIntoViewY:function(bS,bT,bU){this.getContentElement().scrollChildIntoViewY(bS.getContainerElement(),bT,bU);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(N){if(!this.__ef){return false;
}return !!this.__ef[N];
},__ef:null,_getCreatedChildControls:function(){return this.__ef;
},getChildControl:function(fa,fb){if(!this.__ef){if(fb){return null;
}this.__ef={};
}var fc=this.__ef[fa];

if(fc){return fc;
}
if(fb===true){return null;
}return this._createChildControl(fa);
},_showChildControl:function(K){var L=this.getChildControl(K);
L.show();
return L;
},_excludeChildControl:function(bF){var bG=this.getChildControl(bF,true);

if(bG){bG.exclude();
}},_isChildControlVisible:function(ff){var fg=this.getChildControl(ff,true);

if(fg){return fg.isVisible();
}return false;
},_createChildControl:function(hs){if(!this.__ef){this.__ef={};
}else if(this.__ef[hs]){throw new Error("Child control '"+hs+"' already created!");
}var hw=hs.indexOf(cB);

if(hw==-1){var ht=this._createChildControlImpl(hs);
}else{var ht=this._createChildControlImpl(hs.substring(0,hw));
}
if(!ht){throw new Error("Unsupported control: "+hs);
}ht.$$subcontrol=hs;
ht.$$subparent=this;
var hu=this.__ec;
var forward=this._forwardStates;

if(hu&&forward&&ht instanceof qx.ui.core.Widget){for(var hv in hu){if(forward[hv]){ht.addState(hv);
}}}this.fireDataEvent(eM,ht);
return this.__ef[hs]=ht;
},_createChildControlImpl:function(bR){return null;
},_disposeChildControls:function(){var fP=this.__ef;

if(!fP){return;
}var fN=qx.ui.core.Widget;

for(var fO in fP){var fM=fP[fO];

if(!fN.contains(this,fM)){fM.destroy();
}else{fM.dispose();
}}delete this.__ef;
},_findTopControl:function(){var bh=this;

while(bh){if(!bh.$$subparent){return bh;
}bh=bh.$$subparent;
}return null;
},getContainerLocation:function(hn){var ho=this.getContainerElement().getDomElement();
return ho?qx.bom.element.Location.get(ho,hn):null;
},getContentLocation:function(v){var w=this.getContentElement().getDomElement();
return w?qx.bom.element.Location.get(w,v):null;
},setDomLeft:function(bi){var bj=this.getContainerElement().getDomElement();

if(bj){bj.style.left=bi+ex;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(cj){var ck=this.getContainerElement().getDomElement();

if(ck){ck.style.top=cj+ex;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(r,top){var s=this.getContainerElement().getDomElement();

if(s){s.style.left=r+ex;
s.style.top=top+ex;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fd=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fe=this.getChildren();

for(var i=0,l=fe.length;i<l;i++){fd.add(fe[i].clone());
}}return fd;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(ec,ey)){if(this.__dS){qx.locale.Manager.getInstance().removeListenerById(this.__dS);
}}this.getContainerElement().setAttribute(cz,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var A=qx.ui.core.Widget;
var z=this.getContainerElement();

if(this.__dO){z.remove(this.__dO);
A.__dM.poolDecorator(this.__dO);
}
if(this.__dP){z.remove(this.__dP);
A.__dN.poolDecorator(this.__dP);
}this.clearSeparators();
this.__dO=this.__dP=this.__dV=null;
}else{this._disposeArray(dF);
this._disposeObjects(cV,eL);
}this._disposeArray(cu);
this.__ec=this.__ef=null;
this._disposeObjects(da,dk,cx,dR);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){qx.ui.core.Widget.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="best-fit",e="mouse",d="bottom-left",c="direct",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[c,h,f],init:h,themeable:true},placementModeY:{check:[c,h,f],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__ib:null,__ic:null,__id:null,getLayoutLocation:function(O){var R,Q,S,top;
Q=O.getBounds();
S=Q.left;
top=Q.top;
var T=Q;
O=O.getLayoutParent();

while(O&&!O.isRootWidget()){Q=O.getBounds();
S+=Q.left;
top+=Q.top;
R=O.getInsets();
S+=R.left;
top+=R.top;
O=O.getLayoutParent();
}if(O.isRootWidget()){var P=O.getContainerLocation();

if(P){S+=P.left;
top+=P.top;
}}return {left:S,top:top,right:S+T.width,bottom:top+T.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(H,I){if(I){this.__ie();
this.__ib=qx.lang.Function.bind(this.placeToWidget,this,H,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.__id=function(){this.__ie();
};
this.addListener(g,this.__id,this);
}var J=H.getContainerLocation()||this.getLayoutLocation(H);
this.__ig(J);
},__ie:function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}
if(this.__id){this.removeListener(g,this.__id,this);
this.__id=null;
}},placeToMouse:function(event){var L=event.getDocumentLeft();
var top=event.getDocumentTop();
var K={left:L,top:top,right:L,bottom:top};
this.__ig(K);
},placeToElement:function(y,z){var location=qx.bom.element.Location.get(y);
var A={left:location.left,top:location.top,right:location.left+y.offsetWidth,bottom:location.top+y.offsetHeight};
if(z){this.__ib=qx.lang.Function.bind(this.placeToElement,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__ib);
this.addListener(g,function(){if(this.__ib){qx.event.Idle.getInstance().removeListener(i,this.__ib);
this.__ib=null;
}},this);
}this.__ig(A);
},placeToPoint:function(B){var C={left:B.left,top:B.top,right:B.left,bottom:B.top};
this.__ig(C);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__if:function(F){var G=null;

if(this._computePlacementSize){var G=this._computePlacementSize();
}else if(this.isVisible()){var G=this.getBounds();
}
if(G==null){this.addListenerOnce(q,function(){this.__if(F);
},this);
}else{F.call(this,G);
}},__ig:function(D){this.__if(function(M){var N=qx.util.placement.Placement.compute(M,this.getLayoutParent().getBounds(),D,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(N.left,N.top);
});
}},destruct:function(){this.__ie();
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
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case l:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(m,n){var o=this.getChildControl(l);
m==null?o.resetIcon():o.setIcon(m);
},_applyLabel:function(p,q){var r=this.getChildControl(l);
p==null?r.resetLabel():r.setLabel(p);
},_applyRich:function(u,v){var w=this.getChildControl(l);
w.setRich(u);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hq:{},remove:function(z){delete this.__hq[z.$$hash];
},add:function(A){this.__hq[A.$$hash]=A;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var p=this.__ht();
for(var i=p.length-1;i>=0;i--){var q=p[i];
if(q.hasValidLayout()){continue;
}if(q.isRootWidget()&&!q.hasUserBounds()){var s=q.getSizeHint();
q.renderLayout(0,0,s.width,s.height);
}else{var r=q.getBounds();
q.renderLayout(r.left,r.top,r.width,r.height);
}}},getNestingLevel:function(c){var d=this.__hs;
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
},__hr:function(){var y=qx.ui.core.queue.Visibility;
this.__hs={};
var x=[];
var w=this.__hq;
var t,v;

for(var u in w){t=w[u];

if(y.isVisible(t)){v=this.getNestingLevel(t);
if(!x[v]){x[v]={};
}x[v][u]=t;
delete w[u];
}}return x;
},__ht:function(){var k=[];
var m=this.__hr();

for(var j=m.length-1;j>=0;j--){if(!m[j]){continue;
}
for(var h in m[j]){var g=m[j][h];
if(j==0||g.isRootWidget()||g.hasUserBounds()){k.push(g);
g.invalidateLayoutCache();
continue;
}var o=g.getSizeHint(false);

if(o){g.invalidateLayoutCache();
var l=g.getSizeHint();
var n=(!g.getBounds()||o.minWidth!==l.minWidth||o.width!==l.width||o.maxWidth!==l.maxWidth||o.minHeight!==l.minHeight||o.height!==l.height||o.maxHeight!==l.maxHeight);
}else{n=true;
}
if(n){var parent=g.getLayoutParent();

if(!m[j-1]){m[j-1]={};
}m[j-1][parent.$$hash]=parent;
}else{k.push(g);
}}}return k;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jY=k;
this.__ka=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jY:null,__ka:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},destruct:function(){this.__jY=this.__ka=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fK={};
this.__fL=qx.lang.Function.bind(this.__fP,this);
this.__fM=false;
},members:{__fN:null,__fO:null,__fK:null,__fM:null,__fL:null,schedule:function(c){if(this.__fN==null){this.__fN=window.setTimeout(this.__fL,0);
}var d=c.toHashCode();
if(this.__fO&&this.__fO[d]){return;
}this.__fK[d]=c;
this.__fM=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__fO&&this.__fO[h]){this.__fO[h]=null;
return;
}delete this.__fK[h];
if(qx.lang.Object.isEmpty(this.__fK)&&this.__fN!=null){window.clearTimeout(this.__fN);
this.__fN=null;
}},__fP:qx.event.GlobalError.observeMethod(function(){this.__fN=null;
while(this.__fM){this.__fO=qx.lang.Object.clone(this.__fK);
this.__fK={};
this.__fM=false;

for(var f in this.__fO){var e=this.__fO[f];

if(e){this.__fO[f]=null;
e.call();
}}}this.__fO=null;
})},destruct:function(){if(this.__fN!=null){window.clearTimeout(this.__fN);
}this.__fL=this.__fK=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__hl=d;
this.__hm=e||null;
this.__hn=qx.util.DeferredCallManager.getInstance();
},members:{__hl:null,__hm:null,__hn:null,cancel:function(){this.__hn.cancel(this);
},schedule:function(){this.__hn.schedule(this);
},call:function(){this.__hm?this.__hl.apply(this.__hm):this.__hl();
}},destruct:function(b,c){this.cancel();
this.__hm=this.__hl=this.__hn=null;
}});
})();
(function(){var cj="on",ci="element",ch="qx.debug",cg="qx.client",cf="qxSelectable",ce="off",cd="': ",cc="Invalid context for callback.",cb="div",ca="'",cN="Invalid event type.",cM="Invalid callback function",cL="",cK="mshtml",cJ="none",cI="scroll",cH="text",cG="|bubble|",cF="qx.html.Element",cE="|capture|",cq="Invalid capture flag.",cr="focus",co="Failed to add event listener for type '",cp="blur",cm="deactivate",cn="capture",ck="userSelect",cl=" from the target '",cs="-moz-none",ct="visible",cw="releaseCapture",cv="tabIndex",cy="activate",cx="MozUserSelect",cA="normal",cz=" to the target '",cu="Failed to remove event listener for type '",cD="__dt",cC="Invalid capture falg.",cB="hidden";
qx.Class.define(cF,{extend:qx.core.Object,construct:function(bR,bS,bT){qx.core.Object.call(this);
this.__cW=bR||cb;
this.__cX=bS||null;
this.__cY=bT||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__da:{},_scheduleFlush:function(dl){qx.html.Element.__dE.schedule();
},flush:function(){var H;

if(qx.core.Variant.isSet(ch,cj)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var z=this.__db();
var w=z.getFocus();

if(w&&this.__df(w)){z.blur(w);
}var O=z.getActive();

if(O&&this.__df(O)){qx.bom.Element.deactivate(O);
}var C=this.__dd();

if(C&&this.__df(C)){qx.bom.Element.releaseCapture(C);
}var I=[];
var J=this._modified;

for(var G in J){H=J[G];
if(H.__dx()){if(H.__dg&&qx.dom.Hierarchy.isRendered(H.__dg)){I.push(H);
}else{if(qx.core.Variant.isSet(ch,cj)){if(this.DEBUG){H.debug("Flush invisible element");
}}H.__dw();
}delete J[G];
}}
for(var i=0,l=I.length;i<l;i++){H=I[i];

if(qx.core.Variant.isSet(ch,cj)){if(this.DEBUG){H.debug("Flush rendered element");
}}H.__dw();
}var E=this._visibility;

for(var G in E){H=E[G];
var K=H.__dg;

if(!K){delete E[G];
continue;
}
if(qx.core.Variant.isSet(ch,cj)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+H.__dj);
}}if(!H.$$disposed){K.style.display=H.__dj?cL:cJ;
if(qx.core.Variant.isSet(cg,cK)){if(!(document.documentMode>=8)){K.style.visibility=H.__dj?ct:cB;
}}}delete E[G];
}var scroll=this._scroll;

for(var G in scroll){H=scroll[G];
var P=H.__dg;

if(P&&P.offsetWidth){var B=true;
if(H.__dm!=null){H.__dg.scrollLeft=H.__dm;
delete H.__dm;
}if(H.__dn!=null){H.__dg.scrollTop=H.__dn;
delete H.__dn;
}var L=H.__dk;

if(L!=null){var F=L.element.getDomElement();

if(F&&F.offsetWidth){qx.bom.element.Scroll.intoViewX(F,P,L.align);
delete H.__dk;
}else{B=false;
}}var M=H.__dl;

if(M!=null){var F=M.element.getDomElement();

if(F&&F.offsetWidth){qx.bom.element.Scroll.intoViewY(F,P,M.align);
delete H.__dl;
}else{B=false;
}}if(B){delete scroll[G];
}}}var A={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var N=this._actions[i];
var K=N.element.__dg;

if(!K||!A[N.type]&&!N.element.__dx()){continue;
}var D=N.args;
D.unshift(K);
qx.bom.Element[N.type].apply(qx.bom.Element,D);
}this._actions=[];
for(var G in this.__da){var v=this.__da[G];
var P=v.element.__dg;

if(P){qx.bom.Selection.set(P,v.start,v.end);
delete this.__da[G];
}}qx.event.handler.Appear.refresh();
},__db:function(){if(!this.__dc){var dT=qx.event.Registration.getManager(window);
this.__dc=dT.getHandler(qx.event.handler.Focus);
}return this.__dc;
},__dd:function(){if(!this.__de){var ef=qx.event.Registration.getManager(window);
this.__de=ef.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__de.getCaptureElement();
},__df:function(ej){var ek=qx.core.ObjectRegistry.fromHashCode(ej.$$element);
return ek&&!ek.__dx();
}},members:{__cW:null,__dg:null,__dh:false,__di:true,__dj:true,__dk:null,__dl:null,__dm:null,__dn:null,__do:null,__dp:null,__dq:null,__cX:null,__cY:null,__dr:null,__ds:null,__dt:null,__du:null,__dv:null,_scheduleChildrenUpdate:function(){if(this.__du){return;
}this.__du=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
},_createDomElement:function(){return qx.bom.Element.create(this.__cW);
},__dw:function(){if(qx.core.Variant.isSet(ch,cj)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var bw=this.__dt;

if(bw){var length=bw.length;
var bx;

for(var i=0;i<length;i++){bx=bw[i];

if(bx.__dj&&bx.__di&&!bx.__dg){bx.__dw();
}}}
if(!this.__dg){this.__dg=this._createDomElement();
this.__dg.$$element=this.$$hash;
this._copyData(false);

if(bw&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__du){this._syncChildren();
}}delete this.__du;
},_insertChildren:function(){var em=this.__dt;
var length=em.length;
var eo;

if(length>2){var en=document.createDocumentFragment();

for(var i=0;i<length;i++){eo=em[i];

if(eo.__dg&&eo.__di){en.appendChild(eo.__dg);
}}this.__dg.appendChild(en);
}else{var en=this.__dg;

for(var i=0;i<length;i++){eo=em[i];

if(eo.__dg&&eo.__di){en.appendChild(eo.__dg);
}}}},_syncChildren:function(){var bq=qx.core.ObjectRegistry;
var bh=this.__dt;
var bo=bh.length;
var bi;
var bm;
var bk=this.__dg;
var bn=bk.childNodes;
var bj=0;
var bl;

if(qx.core.Variant.isSet(ch,cj)){var bp=0;
}for(var i=bn.length-1;i>=0;i--){bl=bn[i];
bm=bq.fromHashCode(bl.$$element);

if(!bm||!bm.__di||bm.__dv!==this){bk.removeChild(bl);

if(qx.core.Variant.isSet(ch,cj)){bp++;
}}}for(var i=0;i<bo;i++){bi=bh[i];
if(bi.__di){bm=bi.__dg;
bl=bn[bj];

if(!bm){continue;
}if(bm!=bl){if(bl){bk.insertBefore(bm,bl);
}else{bk.appendChild(bm);
}
if(qx.core.Variant.isSet(ch,cj)){bp++;
}}bj++;
}}if(qx.core.Variant.isSet(ch,cj)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bp+" operations");
}}},_copyData:function(dr){var dv=this.__dg;
var du=this.__cY;

if(du){var ds=qx.bom.element.Attribute;

for(var dw in du){ds.set(dv,dw,du[dw]);
}}var du=this.__cX;

if(du){var dt=qx.bom.element.Style;

if(dr){dt.setStyles(dv,du);
}else{dt.setCss(dv,dt.compile(du));
}}var du=this.__dr;

if(du){for(var dw in du){this._applyProperty(dw,du[dw]);
}}var du=this.__ds;

if(du){qx.event.Registration.getManager(dv).importListeners(dv,du);
delete this.__ds;
}},_syncData:function(){var bJ=this.__dg;
var bI=qx.bom.element.Attribute;
var bG=qx.bom.element.Style;
var bH=this.__dp;

if(bH){var bM=this.__cY;

if(bM){var bK;

for(var bL in bH){bK=bM[bL];

if(bK!==undefined){bI.set(bJ,bL,bK);
}else{bI.reset(bJ,bL);
}}}this.__dp=null;
}var bH=this.__do;

if(bH){var bM=this.__cX;

if(bM){var bF={};

for(var bL in bH){bF[bL]=bM[bL];
}bG.setStyles(bJ,bF);
}this.__do=null;
}var bH=this.__dq;

if(bH){var bM=this.__dr;

if(bM){var bK;

for(var bL in bH){this._applyProperty(bL,bM[bL]);
}}this.__dq=null;
}},__dx:function(){var bs=this;
while(bs){if(bs.__dh){return true;
}
if(!bs.__di||!bs.__dj){return false;
}bs=bs.__dv;
}return false;
},__dy:function(bQ){if(bQ.__dv===this){throw new Error("Child is already in: "+bQ);
}
if(bQ.__dh){throw new Error("Root elements could not be inserted into other ones.");
}if(bQ.__dv){bQ.__dv.remove(bQ);
}bQ.__dv=this;
if(!this.__dt){this.__dt=[];
}if(this.__dg){this._scheduleChildrenUpdate();
}},__dz:function(eb){if(eb.__dv!==this){throw new Error("Has no child: "+eb);
}if(this.__dg){this._scheduleChildrenUpdate();
}delete eb.__dv;
},__dA:function(p){if(p.__dv!==this){throw new Error("Has no child: "+p);
}if(this.__dg){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dt||null;
},getChild:function(ec){var ed=this.__dt;
return ed&&ed[ec]||null;
},hasChildren:function(){var dj=this.__dt;
return dj&&dj[0]!==undefined;
},indexOf:function(cU){var cV=this.__dt;
return cV?cV.indexOf(cU):-1;
},hasChild:function(dc){var dd=this.__dt;
return dd&&dd.indexOf(dc)!==-1;
},add:function(bD){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dy(arguments[i]);
}this.__dt.push.apply(this.__dt,arguments);
}else{this.__dy(bD);
this.__dt.push(bD);
}return this;
},addAt:function(dO,dP){this.__dy(dO);
qx.lang.Array.insertAt(this.__dt,dO,dP);
return this;
},remove:function(q){var r=this.__dt;

if(!r){return;
}
if(arguments[1]){var s;

for(var i=0,l=arguments.length;i<l;i++){s=arguments[i];
this.__dz(s);
qx.lang.Array.remove(r,s);
}}else{this.__dz(q);
qx.lang.Array.remove(r,q);
}return this;
},removeAt:function(bt){var bu=this.__dt;

if(!bu){throw new Error("Has no children!");
}var bv=bu[bt];

if(!bv){throw new Error("Has no child at this position!");
}this.__dz(bv);
qx.lang.Array.removeAt(this.__dt,bt);
return this;
},removeAll:function(){var dk=this.__dt;

if(dk){for(var i=0,l=dk.length;i<l;i++){this.__dz(dk[i]);
}dk.length=0;
}return this;
},getParent:function(){return this.__dv||null;
},insertInto:function(parent,bN){parent.__dy(this);

if(bN==null){parent.__dt.push(this);
}else{qx.lang.Array.insertAt(this.__dt,this,bN);
}return this;
},insertBefore:function(bE){var parent=bE.__dv;
parent.__dy(this);
qx.lang.Array.insertBefore(parent.__dt,this,bE);
return this;
},insertAfter:function(da){var parent=da.__dv;
parent.__dy(this);
qx.lang.Array.insertAfter(parent.__dt,this,da);
return this;
},moveTo:function(cQ){var parent=this.__dv;
parent.__dA(this);
var cR=parent.__dt.indexOf(this);

if(cR===cQ){throw new Error("Could not move to same index!");
}else if(cR<cQ){cQ--;
}qx.lang.Array.removeAt(parent.__dt,cR);
qx.lang.Array.insertAt(parent.__dt,this,cQ);
return this;
},moveBefore:function(dU){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(dU));
},moveAfter:function(cS){var parent=this.__dv;
return this.moveTo(parent.__dt.indexOf(cS)+1);
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
},setRoot:function(dL){this.__dh=dL;
},useMarkup:function(bf){if(this.__dg){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cg,cK)){var bg=document.createElement(cb);
}else{var bg=qx.bom.Element.getHelperElement();
}bg.innerHTML=bf;
this.useElement(bg.firstChild);
return this.__dg;
},useElement:function(dM){if(this.__dg){throw new Error("Could not overwrite existing element!");
}this.__dg=dM;
this.__dg.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var be=this.getAttribute(cv);

if(be>=1){return true;
}var bd=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(be>=0&&bd[this.__cW]){return true;
}return false;
},setSelectable:qx.core.Variant.select(cg,{"webkit":function(dQ){this.setAttribute(cf,dQ?cj:ce);
this.setStyle(ck,dQ?cA:cJ);
},"gecko":function(dm){this.setAttribute(cf,dm?cj:ce);
this.setStyle(cx,dm?cH:cs);
},"default":function(ee){this.setAttribute(cf,ee?cj:ce);
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
qx.html.Element._scheduleFlush(ci);
}if(this.__dv){this.__dv._scheduleChildrenUpdate();
}delete this.__dj;
},hide:function(){if(!this.__dj){return;
}
if(this.__dg){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}this.__dj=false;
},isVisible:function(){return this.__dj===true;
},scrollChildIntoViewX:function(S,T,U){var V=this.__dg;
var W=S.getDomElement();

if(U!==false&&V&&V.offsetWidth&&W&&W.offsetWidth){qx.bom.element.Scroll.intoViewX(W,V,T);
}else{this.__dk={element:S,align:T};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}delete this.__dm;
},scrollChildIntoViewY:function(by,bz,bA){var bB=this.__dg;
var bC=by.getDomElement();

if(bA!==false&&bB&&bB.offsetWidth&&bC&&bC.offsetWidth){qx.bom.element.Scroll.intoViewY(bC,bB,bz);
}else{this.__dl={element:by,align:bz};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}delete this.__dn;
},scrollToX:function(x,Q){var R=this.__dg;

if(Q!==true&&R&&R.offsetWidth){R.scrollLeft=x;
}else{this.__dm=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}delete this.__dk;
},getScrollX:function(){var bV=this.__dg;

if(bV){return bV.scrollLeft;
}return this.__dm||0;
},scrollToY:function(y,dD){var dE=this.__dg;

if(dD!==true&&dE&&dE.offsetWidth){dE.scrollTop=y;
}else{this.__dn=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}delete this.__dl;
},getScrollY:function(){var bO=this.__dg;

if(bO){return bO.scrollTop;
}return this.__dn||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cI,this.__dC,this);
},enableScrolling:function(){this.removeListener(cI,this.__dC,this);
},__dB:null,__dC:function(e){if(!this.__dB){this.__dB=true;
this.__dg.scrollTop=0;
this.__dg.scrollLeft=0;
delete this.__dB;
}},getTextSelection:function(){var d=this.__dg;

if(d){return qx.bom.Selection.get(d);
}return null;
},getTextSelectionLength:function(){var dR=this.__dg;

if(dR){return qx.bom.Selection.getLength(dR);
}return null;
},getTextSelectionStart:function(){var f=this.__dg;

if(f){return qx.bom.Selection.getStart(f);
}return null;
},getTextSelectionEnd:function(){var bP=this.__dg;

if(bP){return qx.bom.Selection.getEnd(bP);
}return null;
},setTextSelection:function(dx,dy){var dz=this.__dg;

if(dz){qx.bom.Selection.set(dz,dx,dy);
return;
}qx.html.Element.__da[this.toHashCode()]={element:this,start:dx,end:dy};
qx.html.Element._scheduleFlush(ci);
},clearTextSelection:function(){var X=this.__dg;

if(X){qx.bom.Selection.clear(X);
}delete qx.html.Element.__da[this.toHashCode()];
},__dD:function(cW,cX){var cY=qx.html.Element._actions;
cY.push({type:cW,element:this,args:cX||[]});
qx.html.Element._scheduleFlush(ci);
},focus:function(){this.__dD(cr);
},blur:function(){this.__dD(cp);
},activate:function(){this.__dD(cy);
},deactivate:function(){this.__dD(cm);
},capture:function(br){this.__dD(cn,[br!==false]);
},releaseCapture:function(){this.__dD(cw);
},setStyle:function(bW,bX,bY){if(!this.__cX){this.__cX={};
}
if(this.__cX[bW]==bX){return;
}
if(bX==null){delete this.__cX[bW];
}else{this.__cX[bW]=bX;
}if(this.__dg){if(bY){qx.bom.element.Style.set(this.__dg,bW,bX);
return this;
}if(!this.__do){this.__do={};
}this.__do[bW]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
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
qx.html.Element._scheduleFlush(ci);
}else{for(var di in de){var dh=de[di];

if(this.__cX[di]==dh){continue;
}
if(dh==null){delete this.__cX[di];
}else{this.__cX[di]=dh;
}}}return this;
},removeStyle:function(dn,dp){this.setStyle(dn,null,dp);
},getStyle:function(cT){return this.__cX?this.__cX[cT]:null;
},getAllStyles:function(){return this.__cX||null;
},setAttribute:function(Y,ba,bb){if(!this.__cY){this.__cY={};
}
if(this.__cY[Y]==ba){return;
}
if(ba==null){delete this.__cY[Y];
}else{this.__cY[Y]=ba;
}if(this.__dg){if(bb){qx.bom.element.Attribute.set(this.__dg,Y,ba);
return this;
}if(!this.__dp){this.__dp={};
}this.__dp[Y]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}return this;
},setAttributes:function(a,b){for(var c in a){this.setAttribute(c,a[c],b);
}return this;
},removeAttribute:function(cO,cP){this.setAttribute(cO,null,cP);
},getAttribute:function(bU){return this.__cY?this.__cY[bU]:null;
},_applyProperty:function(name,bc){},_setProperty:function(eg,eh,ei){if(!this.__dr){this.__dr={};
}
if(this.__dr[eg]==eh){return;
}
if(eh==null){delete this.__dr[eg];
}else{this.__dr[eg]=eh;
}if(this.__dg){if(ei){this._applyProperty(eg,eh);
return this;
}if(!this.__dq){this.__dq={};
}this.__dq[eg]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ci);
}return this;
},_removeProperty:function(t,u){this._setProperty(t,null,u);
},_getProperty:function(dA){var dB=this.__dr;

if(!dB){return null;
}var dC=dB[dA];
return dC==null?null:dC;
},addListener:function(dF,dG,self,dH){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(ch,cj)){var dI=co+dF+ca+cz+this+cd;
this.assertString(dF,dI+cN);
this.assertFunction(dG,dI+cM);

if(self!==undefined){this.assertObject(self,cc);
}
if(dH!==undefined){this.assertBoolean(dH,cC);
}}
if(this.__dg){return qx.event.Registration.addListener(this.__dg,dF,dG,self,dH);
}
if(!this.__ds){this.__ds={};
}
if(dH==null){dH=false;
}var dJ=qx.event.Manager.getNextUniqueId();
var dK=dF+(dH?cE:cG)+dJ;
this.__ds[dK]={type:dF,listener:dG,self:self,capture:dH,unique:dJ};
return dK;
},removeListener:function(g,h,self,j){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(ch,cj)){var k=cu+g+ca+cl+this+cd;
this.assertString(g,k+cN);
this.assertFunction(h,k+cM);

if(self!==undefined){this.assertObject(self,cc);
}
if(j!==undefined){this.assertBoolean(j,cq);
}}
if(this.__dg){qx.event.Registration.removeListener(this.__dg,g,h,self,j);
}else{var n=this.__ds;
var m;

if(j==null){j=false;
}
for(var o in n){m=n[o];
if(m.listener===h&&m.self===self&&m.capture===j&&m.type===g){delete n[o];
break;
}}}return this;
},removeListenerById:function(dq){if(this.$$disposed){return null;
}
if(this.__dg){qx.event.Registration.removeListenerById(this.__dg,dq);
}else{delete this.__ds[dq];
}return this;
},hasListener:function(dV,dW){if(this.$$disposed){return false;
}
if(this.__dg){return qx.event.Registration.hasListener(this.__dg,dV,dW);
}var dY=this.__ds;
var dX;

if(dW==null){dW=false;
}
for(var ea in dY){dX=dY[ea];
if(dX.capture===dW&&dX.type===dV){return true;
}}return false;
}},defer:function(dS){dS.__dE=new qx.util.DeferredCall(dS.flush,dS);
},destruct:function(){var dN=this.__dg;

if(dN){qx.event.Registration.getManager(dN).removeAllListeners(dN);
dN.$$element=cL;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dv;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cD);
this.__cY=this.__cX=this.__ds=this.__dr=this.__dp=this.__do=this.__dq=this.__dg=this.__dv=this.__dk=this.__dl=null;
}});
})();
(function(){var h="qx.debug",g='ie',f="on",d="qx.ui.core.queue.Manager",c="useraction";
qx.Class.define(d,{statics:{__kC:false,__kD:{},__kE:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__kD[j]=true;

if(!self.__kC){self.__kH.schedule();
self.__kC=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__kF){return;
}self.__kF=true;
self.__kH.cancel();
var i=self.__kD;
self.__kG(function(){while(i.visibility||i.widget||i.appearance||i.layout||i.element){if(i.widget){delete i.widget;
qx.ui.core.queue.Widget.flush();
}
if(i.visibility){delete i.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(i.appearance){delete i.appearance;
qx.ui.core.queue.Appearance.flush();
}if(i.widget||i.visibility||i.appearance){continue;
}
if(i.layout){delete i.layout;
qx.ui.core.queue.Layout.flush();
}if(i.widget||i.visibility||i.appearance||i.layout){continue;
}
if(i.element){delete i.element;
qx.html.Element.flush();
}}},function(){self.__kC=false;
});
self.__kG(function(){if(i.dispose){delete i.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__kF=false;
});
self.__kE=0;
},__kG:qx.core.Variant.select(h,{"on":function(a,b){a();
b();
},"off":function(l,m){var self=qx.ui.core.queue.Manager;

try{l();
}catch(e){if(qx.core.Variant.isSet(h,f)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__kC=false;
self.__kF=false;
self.__kE+=1;
if(qx.bom.client.Browser.NAME==g&&qx.bom.client.Browser.VERSION<=7){m();
}
if(self.__kE<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__kE-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{m();
}}})},defer:function(k){k.__kH=new qx.util.DeferredCall(k.flush);
qx.html.Element._scheduleFlush=k.scheduleFlush;
qx.event.Registration.addListener(window,c,k.flush);
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
(function(){var s="qx.client",r="",q="qx.debug",p="boxSizing",o="on",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",c="-moz-box-sizing",g="WebkitBoxSizing",f=";",b="-khtml-box-sizing",a="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(j,{statics:{__cJ:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,h,g],"gecko":[d],"opera":[p]}),__cK:qx.core.Variant.select(s,{"mshtml":null,"webkit":[n,b,e],"gecko":[c],"opera":[n]}),__cL:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cM:function(A){var B=this.__cL;
return B.tags[A.tagName.toLowerCase()]||B.types[A.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(C){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(x){var z=this.__cK;
var y=r;

if(z){for(var i=0,l=z.length;i<l;i++){y+=z[i]+m+x+f;
}}return y;
}}),get:qx.core.Variant.select(s,{"mshtml":function(v){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(v))){if(!this.__cM(v)){return a;
}}return k;
},"default":function(G){var I=this.__cJ;
var H;

if(I){for(var i=0,l=I.length;i<l;i++){H=qx.bom.element.Style.get(G,I[i],null,false);

if(H!=null&&H!==r){return H;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(t,u){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(D,E){var F=this.__cJ;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(w){this.set(w,r);
}}});
})();
(function(){var r="",q="qx.client",p="userSelect",o="qx.debug",n="on",m="Invalid argument 'smart'",k="style",h="Invalid argument 'element'",g="MozUserModify",f="px",Q="float",P="borderImage",O="styleFloat",N="appearance",M="pixelHeight",L='Ms',K=":",J="cssFloat",I="pixelTop",H="Invalid argument 'name'",y="pixelLeft",z='O',w="Invalid argument 'styles'",x="qx.bom.element.Style",u='Khtml',v='string',s="pixelRight",t='Moz',A="pixelWidth",B="pixelBottom",D=";",C="textOverflow",F="userModify",E='Webkit',G="WebkitUserModify";
qx.Class.define(x,{statics:{__cu:function(){var by=[N,p,C,P];
var bC={};
var bz=document.documentElement.style;
var bD=[t,E,u,z,L];

for(var i=0,l=by.length;i<l;i++){var bE=by[i];
var bA=bE;

if(bz[bE]){bC[bA]=bE;
continue;
}bE=qx.lang.String.firstUp(bE);

for(var j=0,bF=bD.length;j<bF;j++){var bB=bD[j]+bE;

if(typeof bz[bB]==v){bC[bA]=bB;
break;
}}}this.__cv=bC;
this.__cv[F]=qx.core.Variant.select(q,{"gecko":g,"webkit":G,"default":p});
this.__cw={};

for(var bA in bC){this.__cw[bA]=this.__cA(bC[bA]);
}this.__cv[Q]=qx.core.Variant.select(q,{"mshtml":O,"default":J});
},__cx:{width:A,height:M,left:y,right:s,top:I,bottom:B},__cy:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(a){var c=[];
var e=this.__cy;
var d=this.__cw;
var name,b;

for(name in a){b=a[name];

if(b==null){continue;
}name=d[name]||name;
if(e[name]){c.push(e[name].compile(b));
}else{c.push(this.__cA(name),K,b,D);
}}return c.join(r);
},__cz:{},__cA:function(U){var V=this.__cz;
var W=V[U];

if(!W){W=V[U]=qx.lang.String.hyphenate(U);
}return W;
},setCss:qx.core.Variant.select(q,{"mshtml":function(bI,bJ){bI.style.cssText=bJ;
},"default":function(R,S){R.setAttribute(k,S);
}}),getCss:qx.core.Variant.select(q,{"mshtml":function(bG){return bG.style.cssText.toLowerCase();
},"default":function(bn){return bn.getAttribute(k);
}}),isPropertySupported:function(T){return (this.__cy[T]||this.__cv[T]||T in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bd,name,be,bf){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertElement(bd,h);
qx.core.Assert.assertString(name,H);

if(bf!==undefined){qx.core.Assert.assertBoolean(bf,m);
}}name=this.__cv[name]||name;
if(bf!==false&&this.__cy[name]){return this.__cy[name].set(bd,be);
}else{bd.style[name]=be!==null?be:r;
}},setStyles:function(bq,br,bs){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertElement(bq,h);
qx.core.Assert.assertMap(br,w);

if(bs!==undefined){qx.core.Assert.assertBoolean(bs,m);
}}var bv=this.__cv;
var bx=this.__cy;
var bt=bq.style;

for(var bw in br){var bu=br[bw];
var name=bv[bw]||bw;

if(bu===undefined){if(bs!==false&&bx[name]){bx[name].reset(bq);
}else{bt[name]=r;
}}else{if(bs!==false&&bx[name]){bx[name].set(bq,bu);
}else{bt[name]=bu!==null?bu:r;
}}}},reset:function(bo,name,bp){name=this.__cv[name]||name;
if(bp!==false&&this.__cy[name]){return this.__cy[name].reset(bo);
}else{bo.style[name]=r;
}},get:qx.core.Variant.select(q,{"mshtml":function(bg,name,bh,bi){name=this.__cv[name]||name;
if(bi!==false&&this.__cy[name]){return this.__cy[name].get(bg,bh);
}if(!bg.currentStyle){return bg.style[name]||r;
}switch(bh){case this.LOCAL_MODE:return bg.style[name]||r;
case this.CASCADED_MODE:return bg.currentStyle[name]||r;
default:var bm=bg.currentStyle[name]||r;
if(/^-?[\.\d]+(px)?$/i.test(bm)){return bm;
}var bl=this.__cx[name];

if(bl){var bj=bg.style[name];
bg.style[name]=bm||0;
var bk=bg.style[bl]+f;
bg.style[name]=bj;
return bk;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bm)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bm;
}},"default":function(X,name,Y,ba){name=this.__cv[name]||name;
if(ba!==false&&this.__cy[name]){return this.__cy[name].get(X,Y);
}switch(Y){case this.LOCAL_MODE:return X.style[name]||r;
case this.CASCADED_MODE:if(X.currentStyle){return X.currentStyle[name]||r;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bb=qx.dom.Node.getDocument(X);
var bc=bb.defaultView.getComputedStyle(X,null);
return bc?bc[name]:r;
}}})},defer:function(bH){bH.__cu();
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
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__ia:{},remove:function(f){delete this.__ia[f.$$hash];
},add:function(g){var h=this.__ia;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__ia;
var e;

for(var d in c){e=c[d];
delete c[d];
e.syncWidget();
}for(var d in c){return;
}this.__ia={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hL:{},__hM:{},remove:function(o){var p=o.$$hash;
delete this.__hM[p];
delete this.__hL[p];
},isVisible:function(n){return this.__hM[n.$$hash]||false;
},__hN:function(e){var g=this.__hM;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hN(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(c){var d=this.__hL;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var i=this.__hL;
var m=this.__hM;
for(var j in i){if(m[j]!=null){i[j].addChildrenToQueue(i);
}}var l={};

for(var j in i){l[j]=m[j];
m[j]=null;
}for(var j in i){var k=i[j];
delete i[j];
if(m[j]==null){this.__hN(k);
}if(m[j]&&m[j]!=l[j]){k.checkAppearanceNeeds();
}}this.__hL={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hc:{},remove:function(j){delete this.__hc[j.$$hash];
},add:function(c){var d=this.__hc;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__hc[e.$$hash];
},flush:function(){var i=qx.ui.core.queue.Visibility;
var f=this.__hc;
var h;

for(var g in f){h=f[g];
delete f[g];
if(i.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
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
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}qx.html.Element.call(this,null,i);
this.__jP=g;
this.__jQ=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__jQ:null,__jP:null,getId:function(){return this.__jQ;
},getDecorator:function(){return this.__jP;
},resize:function(e,f){this.__jP.resize(this.getDomElement(),e,f);
},tint:function(a){this.__jP.tint(this.getDomElement(),a);
},getInsets:function(){return this.__jP.getInsets();
}},destruct:function(){this.__jP=null;
}});
})();
(function(){var h="blur",g="focus",f="input",e="load",d="qx.ui.core.EventHandler",c="activate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__eg=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__eg:null,__eh:{focusin:1,focusout:1,focus:1,blur:1},__ei:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(o){var t=o.getTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);
var u=false;

while(s&&s.isAnonymous()){var u=true;
s=s.getLayoutParent();
}if(s&&u&&o.getType()==c){s.getContainerElement().activate();
}if(this.__eh[o.getType()]){s=s&&s.getFocusTarget();
if(!s){return;
}}if(o.getRelatedTarget){var B=o.getRelatedTarget();
var A=qx.ui.core.Widget.getWidgetByElement(B);

while(A&&A.isAnonymous()){A=A.getLayoutParent();
}
if(A){if(this.__eh[o.getType()]){A=A.getFocusTarget();
}if(A===s){return;
}}}var w=o.getCurrentTarget();
var y=qx.ui.core.Widget.getWidgetByElement(w);

if(!y||y.isAnonymous()){return;
}if(this.__eh[o.getType()]){y=y.getFocusTarget();
}var z=o.getType();

if(!y||!(y.isEnabled()||this.__ei[z])){return;
}var p=o.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var v=this.__eg.getListeners(y,z,p);

if(!v||v.length===0){return;
}var q=qx.event.Pool.getInstance().getObject(o.constructor);
o.clone(q);
q.setTarget(s);
q.setRelatedTarget(A||null);
q.setCurrentTarget(y);
var C=o.getOriginalTarget();

if(C){var r=qx.ui.core.Widget.getWidgetByElement(C);

while(r&&r.isAnonymous()){r=r.getLayoutParent();
}q.setOriginalTarget(r);
}else{q.setOriginalTarget(t);
}for(var i=0,l=v.length;i<l;i++){var x=v[i].context||y;
v[i].handler.call(x,q);
}if(q.getPropagationStopped()){o.stopPropagation();
}
if(q.getDefaultPrevented()){o.preventDefault();
}qx.event.Pool.getInstance().poolObject(q);
},registerEvent:function(j,k,m){var n;

if(k===g||k===h){n=j.getFocusElement();
}else if(k===e||k===f){n=j.getContentElement();
}else{n=j.getContainerElement();
}
if(n){n.addListener(k,this._dispatchEvent,this,m);
}},unregisterEvent:function(D,E,F){var G;

if(E===g||E===h){G=D.getFocusElement();
}else if(E===e||E===f){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__eg=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__gl:null,_invalidChildrenCache:null,__gm:null,invalidateLayoutCache:function(){this.__gl=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__gl){return this.__gl;
}return this.__gl=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(j){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(k,name,l){},"off":null}),_clearSeparators:function(){var g=this.__gm;

if(g instanceof qx.ui.core.LayoutItem){g.clearSeparators();
}},_renderSeparator:function(d,e){this.__gm.renderSeparator(d,e);
},connectToWidget:function(f){if(f&&this.__gm){throw new Error("It is not possible to manually set the connected widget.");
}this.__gm=f;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__gm;
},_applyLayoutChange:function(){if(this.__gm){this.__gm.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__gm.getLayoutChildren();
}},destruct:function(){this.__gm=this.__gl=null;
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
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kX:function(){var d=(navigator.userLanguage||navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__kX();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(B){var B=B||v;
this.__lw=B;
this.length=B.length;
},members:{$$isString:true,length:0,__lw:null,toString:function(){return this.__lw;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(z,A){return qx.core.Object.prototype.base.apply(this,arguments);
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
this.__ej=c;
this.__ek=d;
},members:{__ej:null,__ek:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__ej,this.__ek);
}}});
})();
(function(){var o="_",n="",m="on",l="_applyLocale",k="changeLocale",j="C",h="qx.dynlocale",g="qx.locale.Manager",f="String",e="singleton",d="qx.debug";
qx.Class.define(g,{type:e,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__in=qx.$$translations||{};
this.__io=qx.$$locales||{};
var c=qx.bom.client.Locale;
var a=c.LOCALE;
var b=c.VARIANT;

if(b!==n){a+=o+b;
}this.__ip=a;
this.setLocale(a||this.__iq);
},statics:{tr:function(Y,ba){var bb=qx.lang.Array.fromArguments(arguments);
bb.splice(0,1);
return qx.locale.Manager.getInstance().translate(Y,bb);
},trn:function(B,C,D,E){var F=qx.lang.Array.fromArguments(arguments);
F.splice(0,3);
if(D!=1){return qx.locale.Manager.getInstance().translate(C,F);
}else{return qx.locale.Manager.getInstance().translate(B,F);
}},trc:function(be,bf,bg){var bh=qx.lang.Array.fromArguments(arguments);
bh.splice(0,2);
return qx.locale.Manager.getInstance().translate(bf,bh);
},marktr:function(t){return t;
}},properties:{locale:{check:f,nullable:true,apply:l,event:k}},members:{__iq:j,__ir:null,__is:null,__in:null,__io:null,__ip:null,getLanguage:function(){return this.__is;
},getTerritory:function(){return this.getLocale().split(o)[1]||n;
},getAvailableLocales:function(){var bd=[];

for(var bc in this.__io){if(bc!=this.__iq){bd.push(bc);
}}return bd;
},__it:function(u){var w;
var v=u.indexOf(o);

if(v==-1){w=u;
}else{w=u.substring(0,v);
}return w;
},_applyLocale:function(O,P){if(qx.core.Variant.isSet(d,m)){if(!(O in this.__io||O==this.__ip)){qx.log.Logger.warn("Locale: "+O+" not available.");
}}this.__ir=O;
this.__is=this.__it(O);
},addTranslation:function(p,q){var r=this.__in;

if(r[p]){for(var s in q){r[p][s]=q[s];
}}else{r[p]=q;
}},addLocale:function(K,L){var M=this.__io;

if(M[K]){for(var N in L){M[K][N]=L[N];
}}else{M[K]=L;
}},translate:function(x,y,z){var A=this.__in;
return this.__iu(A,x,y,z);
},localize:function(G,H,I){var J=this.__io;
return this.__iu(J,G,H,I);
},__iu:function(Q,R,S,T){var U;

if(!Q){return R;
}
if(T){var W=this.__it(T);
}else{T=this.__ir;
W=this.__is;
}if(!U&&Q[T]){U=Q[T][R];
}if(!U&&Q[W]){U=Q[W][R];
}if(!U&&Q[this.__iq]){U=Q[this.__iq][R];
}
if(!U){U=R;
}
if(S.length>0){var V=[];

for(var i=0;i<S.length;i++){var X=S[i];

if(X&&X.translate){V[i]=X.translate();
}else{V[i]=X;
}}U=qx.lang.String.format(U,V);
}
if(qx.core.Variant.isSet(h,m)){U=new qx.locale.LocalizedString(U,R,S);
}return U;
}},destruct:function(){this.__in=this.__io=null;
}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="qx.debug",c="scale-x",b="mshtml",a="on",I="repeat",H="scale",G="scale-y",F="qx/icon",E=".png",D="crop",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p="png",q="')",n='"></div>',o='"/>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__gN:{},__gO:qx.core.Variant.isSet(j,b),__gP:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__gQ:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(bF,bG,bH,bI){var bK=this.getTagName(bH,bG);

if(bK!=bF.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bL=this.getAttributes(bG,bH,bI);

if(bK===h){bF.src=bL.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(bF.style.backgroundPosition!=g&&bL.style.backgroundPosition===undefined){bL.style.backgroundPosition=null;
}if(bF.style.clip!=g&&bL.style.clip===undefined){bL.style.clip=null;
}var bJ=qx.bom.element.Style;
bJ.setStyles(bF,bL.style);
if(this.__gO){try{bF.filters[v].apply();
}catch(e){}}},create:function(J,K,L){var M=this.getTagName(K,J);
var O=this.getAttributes(J,K,L);
var N=qx.bom.element.Style.compile(O.style);

if(M===h){return z+O.src+l+N+o;
}else{return B+N+n;
}},getTagName:function(bi,bj){if(qx.core.Variant.isSet(j,b)){if(bj&&this.__gO&&this.__gP[bi]&&qx.lang.String.endsWith(bj,E)){return i;
}}return this.__gQ[bi];
},getAttributes:function(bs,bt,bu){if(!bu){bu={};
}
if(!bu.position){bu.position=x;
}
if(qx.core.Variant.isSet(j,b)){bu.fontSize=0;
bu.lineHeight=0;
}else if(qx.core.Variant.isSet(j,t)){bu.WebkitUserDrag=m;
}var bw=qx.util.ResourceManager.getInstance().getImageFormat(bs)||qx.io.ImageLoader.getFormat(bs);

if(qx.core.Variant.isSet(d,a)){if(bs!=null&&bw==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bs+"'!");
}}var bv;
if(this.__gO&&this.__gP[bt]&&bw===p){bv=this.__gT(bu,bt,bs);
}else{if(bt===H){bv=this.__gU(bu,bt,bs);
}else if(bt===c||bt===G){bv=this.__gV(bu,bt,bs);
}else{bv=this.__gY(bu,bt,bs);
}}return bv;
},__gR:function(bV,bW,bX){if(bV.width==null&&bW!=null){bV.width=bW+k;
}
if(bV.height==null&&bX!=null){bV.height=bX+k;
}return bV;
},__gS:function(bR){var bS=qx.util.ResourceManager.getInstance().getImageWidth(bR)||qx.io.ImageLoader.getWidth(bR);
var bT=qx.util.ResourceManager.getInstance().getImageHeight(bR)||qx.io.ImageLoader.getHeight(bR);
return {width:bS,height:bT};
},__gT:function(bb,bc,bd){var bh=this.__gS(bd);
bb=this.__gR(bb,bh.width,bh.height);
var bf=bc==f?D:H;
var be=C+qx.util.ResourceManager.getInstance().toUri(bd)+s+bf+q;
bb.filter=be;
bb.backgroundImage=bb.backgroundRepeat=g;
return {style:bb};
},__gU:function(bM,bN,bO){var bP=qx.util.ResourceManager.getInstance().toUri(bO);
var bQ=this.__gS(bO);
bM=this.__gR(bM,bQ.width,bQ.height);
return {src:bP,style:bM};
},__gV:function(bk,bl,bm){var bq=qx.util.ResourceManager.getInstance();
var bp=bq.isClippedImage(bm);
var br=this.__gS(bm);

if(bp){var bo=bq.getData(bm);
var bn=bq.toUri(bo[4]);

if(bl===c){bk=this.__gW(bk,bo,br.height);
}else{bk=this.__gX(bk,bo,br.width);
}return {src:bn,style:bk};
}else{if(qx.core.Variant.isSet(d,a)){this.__hb(bm);
}
if(bl==c){bk.height=br.height==null?null:br.height+k;
}else if(bl==G){bk.width=br.width==null?null:br.width+k;
}var bn=bq.toUri(bm);
return {src:bn,style:bk};
}},__gW:function(bY,ca,cb){var cc=qx.util.ResourceManager.getInstance().getImageHeight(ca[4]);
bY.clip={top:-ca[6],height:cb};
bY.height=cc+k;
if(bY.top!=null){bY.top=(parseInt(bY.top,10)+ca[6])+k;
}else if(bY.bottom!=null){bY.bottom=(parseInt(bY.bottom,10)+cb-cc-ca[6])+k;
}return bY;
},__gX:function(W,X,Y){var ba=qx.util.ResourceManager.getInstance().getImageWidth(X[4]);
W.clip={left:-X[5],width:Y};
W.width=ba+k;
if(W.left!=null){W.left=(parseInt(W.left,10)+X[5])+k;
}else if(W.right!=null){W.right=(parseInt(W.right,10)+Y-ba-X[5])+k;
}return W;
},__gY:function(bx,by,bz){var bE=qx.util.ResourceManager.getInstance().isClippedImage(bz);
var bD=this.__gS(bz);
if(bE&&by!==I){var bC=qx.util.ResourceManager.getInstance().getData(bz);
var bB=qx.bom.element.Background.getStyles(bC[4],by,bC[5],bC[6]);

for(var bA in bB){bx[bA]=bB[bA];
}
if(bD.width!=null&&bx.width==null&&(by==A||by===f)){bx.width=bD.width+k;
}
if(bD.height!=null&&bx.height==null&&(by==w||by===f)){bx.height=bD.height+k;
}return {style:bx};
}else{if(qx.core.Variant.isSet(d,a)){if(by!==I){this.__hb(bz);
}}bx=this.__gR(bx,bD.width,bD.height);
bx=this.__ha(bx,bz,by);
return {style:bx};
}},__ha:function(P,Q,R){var top=null;
var V=null;

if(P.backgroundPosition){var S=P.backgroundPosition.split(u);
V=parseInt(S[0]);

if(isNaN(V)){V=S[0];
}top=parseInt(S[1]);

if(isNaN(top)){top=S[1];
}}var U=qx.bom.element.Background.getStyles(Q,R,V,top);

for(var T in U){P[T]=U[T];
}if(P.filter){P.filter=g;
}return P;
},__hb:function(bU){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bU)&&bU.indexOf(F)==-1){if(!this.__gN[bU]){qx.log.Logger.debug("Potential clipped image candidate: "+bU);
this.__gN[bU]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__gO;
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
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name===j){var o=this.getDomElement();
var l=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){l.backgroundPosition=null;
l.backgroundRepeat=null;
}var m=this._getProperty(j);
var n=this._getProperty(i);
var p=n?i:h;
if(m!=null){qx.bom.element.Decoration.update(o,m,p,l);
}}},_createDomElement:function(){var u=this._getProperty(i);
var v=u?i:h;

if(qx.core.Variant.isSet(g,f)){var t=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(r){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(q){this._setProperty(j,q);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(s){this._setProperty(i,s);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var B="nonScaled",A="scaled",z="alphaScaled",y=".png",x="qx.client",w="div",v="replacement",u="qx.event.type.Event",t="hidden",s="Boolean",T="px",S="http",R="scale",Q="changeSource",P="qx.ui.basic.Image",O="qx.debug",N="loaded",M="-disabled.$1",L="loadingFailed",K="String",I="_applySource",J="img",G="image",H="__iv",E="mshtml",F="_applyScale",C="no-repeat",D="on";
qx.Class.define(P,{extend:qx.ui.core.Widget,construct:function(i){this.__iv={};
qx.ui.core.Widget.call(this);

if(i){this.setSource(i);
}},properties:{source:{check:K,init:null,nullable:true,event:Q,apply:I,themeable:true},scale:{check:s,init:false,themeable:true,apply:F},appearance:{refine:true,init:G},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:u,loaded:u},members:{__iw:null,__ix:null,__iy:null,__iv:null,getContentElement:function(){return this.__iC();
},_createContentElement:function(){return this.__iC();
},_getContentHint:function(){return {width:this.__iw||0,height:this.__ix||0};
},_applyEnabled:function(n,o){qx.ui.core.Widget.prototype._applyEnabled.call(this,n,o);

if(this.getSource()){this._styleSource();
}},_applySource:function(a){this._styleSource();
},_applyScale:function(k){this._styleSource();
},__iz:function(j){this.__iy=j;
},__iA:function(){if(this.__iy==null){var bp=this.getSource();
var bo=false;

if(bp!=null){bo=qx.lang.String.endsWith(bp,y);
}
if(this.getScale()&&bo&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__iy=z;
}else if(this.getScale()){this.__iy=A;
}else{this.__iy=B;
}}return this.__iy;
},__iB:function(d){var e;
var f;

if(d==z){e=true;
f=w;
}else if(d==B){e=false;
f=w;
}else{e=true;
f=J;
}var g=new qx.html.Image(f);
g.setScale(e);
g.setStyles({"overflowX":t,"overflowY":t});
return g;
},__iC:function(){var r=this.__iA();

if(this.__iv[r]==null){this.__iv[r]=this.__iB(r);
}return this.__iv[r];
},_styleSource:function(){var p=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!p){this.getContentElement().resetSource();
return;
}this.__iD(p);

if(qx.core.Variant.isSet(x,E)){var q=this.getScale()?R:C;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(q,p);
}if(qx.util.ResourceManager.getInstance().has(p)){this.__iF(this.getContentElement(),p);
}else if(qx.io.ImageLoader.isLoaded(p)){this.__iG(this.getContentElement(),p);
}else{this.__iH(this.getContentElement(),p);
}},__iD:qx.core.Variant.select(x,{"mshtml":function(U){var W=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var V=qx.lang.String.endsWith(U,y);

if(W&&V){if(this.getScale()&&this.__iA()!=z){this.__iz(z);
}else if(!this.getScale()&&this.__iA()!=B){this.__iz(B);
}}else{if(this.getScale()&&this.__iA()!=A){this.__iz(A);
}else if(!this.getScale()&&this.__iA()!=B){this.__iz(B);
}}this.__iE(this.__iC());
},"default":function(h){if(this.getScale()&&this.__iA()!=A){this.__iz(A);
}else if(!this.getScale()&&this.__iA(B)){this.__iz(B);
}this.__iE(this.__iC());
}}),__iE:function(bh){var bk=this.getContainerElement();
var bl=bk.getChild(0);

if(bl!=bh){if(bl!=null){var bn=T;
var bi={};
var bj=this.getInnerSize();

if(bj!=null){bi.width=bj.width+bn;
bi.height=bj.height+bn;
}var bm=this.getInsets();
bi.left=bm.left+bn;
bi.top=bm.top+bn;
bi.zIndex=10;
bh.setStyles(bi,true);
bh.setSelectable(this.getSelectable());
}bk.removeAt(0);
bk.addAt(bh,0);
}},__iF:function(X,Y){var bb=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var ba=Y.replace(/\.([a-z]+)$/,M);

if(bb.has(ba)){Y=ba;
this.addState(v);
}else{this.removeState(v);
}}if(X.getSource()===Y){return;
}X.setSource(Y);
this.__iJ(bb.getImageWidth(Y),bb.getImageHeight(Y));
},__iG:function(bc,bd){var bf=qx.io.ImageLoader;
bc.setSource(bd);
var be=bf.getWidth(bd);
var bg=bf.getHeight(bd);
this.__iJ(be,bg);
},__iH:function(bq,br){var bs=qx.io.ImageLoader;

if(qx.core.Variant.isSet(O,D)){if(!qx.lang.String.startsWith(br.toLowerCase(),S)){var self=this.self(arguments);

if(!self.__tf){self.__tf={};
}
if(!self.__tf[br]){this.debug("try to load a unmanaged relative image: "+br);
self.__tf[br]=true;
}}}if(!bs.isFailed(br)){bs.load(br,this.__iI,this);
}else{if(bq!=null){bq.resetSource();
}}},__iI:function(b,c){if(this.$$disposed===true){return;
}if(b!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(c.failed){this.warn("Image could not be loaded: "+b);
this.fireEvent(L);
}else{this.fireEvent(N);
}this._styleSource();
},__iJ:function(l,m){if(l!==this.__iw||m!==this.__ix){this.__iw=l;
this.__ix=m;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(H);
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(g,this._onInterval,this);
a.start();
this.__kj=a;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__kj:null,_applyTimeoutInterval:function(h){this.__kj.setInterval(h);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__kj){this.__kj.stop();
}this.__kj=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E="target.bottom",D="offsets",C="size.width",B="offsets.bottom",A="qx.util.placement.Placement",z="qx.debug",y="keep-align",x="target.right",q="direct",r="offsets.right",o="target",p="offsets.left",m="area",n="target.top",k="area.height",l="target.left",s='__hd',t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(A,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hd=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__he:null,compute:function(T,U,V,W,X,Y,ba){this.__he=this.__he||new qx.util.placement.Placement();
var bd=X.split(a);
var bc=bd[0];
var bb=bd[1];
this.__he.set({axisX:this.__hi(Y),axisY:this.__hi(ba),edge:bc,align:bb});
return this.__he.compute(T,U,V,W);
},__hf:null,__hg:null,__hh:null,__hi:function(Q){switch(Q){case q:this.__hf=this.__hf||new qx.util.placement.DirectAxis();
return this.__hf;
case y:this.__hg=this.__hg||new qx.util.placement.KeepAlignAxis();
return this.__hg;
case G:this.__hh=this.__hh||new qx.util.placement.BestFitAxis();
return this.__hh;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hd:null,compute:function(J,K,L,M){if(qx.core.Variant.isSet(z,v)){this.assertObject(J,F);
this.assertNumber(J.width,C);
this.assertNumber(J.height,u);
this.assertObject(K,m);
this.assertNumber(K.width,t);
this.assertNumber(K.height,k);
this.assertObject(L,o);
this.assertNumber(L.top,n);
this.assertNumber(L.right,x);
this.assertNumber(L.bottom,E);
this.assertNumber(L.left,l);
this.assertObject(M,D);
this.assertNumber(M.top,w);
this.assertNumber(M.right,r);
this.assertNumber(M.bottom,B);
this.assertNumber(M.left,p);
}var N=this.getAxisX()||this.__hd;
var P=N.computeStart(J.width,{start:L.left,end:L.right},{start:M.left,end:M.right},K.width,this.__hj());
var O=this.getAxisY()||this.__hd;
var top=O.computeStart(J.height,{start:L.top,end:L.bottom},{start:M.top,end:M.bottom},K.height,this.__hk());
return {left:P,top:top};
},__hj:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==g){return f;
}else if(I==i){return c;
}else if(H==g){return e;
}else if(H==i){return d;
}},__hk:function(){var S=this.getEdge();
var R=this.getAlign();

if(S==j){return f;
}else if(S==h){return c;
}else if(R==j){return e;
}else if(R==h){return d;
}}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(i,j,k,l){switch(l){case e:return j.start-k.end-i;
case b:return j.end+k.start;
case d:return j.start+k.start;
case c:return j.end-k.end-i;
}},_isInRange:function(f,g,h){return f>=0&&f+g<=h;
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
(function(){var h="mousedown",g="qx.debug",f="on",d="blur",c="qx.ui.popup.Manager",b="__qM",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qM=[];
qx.event.Registration.addListener(document.documentElement,h,this.__qO,this,true);
qx.bom.Element.addListener(window,d,this.hideAll,this);
},members:{__qM:null,add:function(o){if(qx.core.Variant.isSet(g,f)){if(!(o instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+o);
}}this.__qM.push(o);
this.__qN();
},remove:function(n){if(qx.core.Variant.isSet(g,f)){if(!(n instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+n);
}}
if(this.__qM){qx.lang.Array.remove(this.__qM,n);
this.__qN();
}},hideAll:function(){if(this.__qM){for(var i=0;i<this.__qM.length;i++){this.__qM[i].exclude();
}}},__qN:function(){var j=1e7;

for(var i=0;i<this.__qM.length;i++){this.__qM[i].setZIndex(j++);
}},__qO:function(e){var l=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var m=this.__qM;

for(var i=0;i<m.length;i++){var k=m[i];

if(!k.getAutoHide()||l==k||qx.ui.core.Widget.contains(k,l)){continue;
}k.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__qO,this,true);
this._disposeArray(b);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(n,name,o){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(e,f){var k=this._getLayoutChildren();
var j,m,h,g;
for(var i=0,l=k.length;i<l;i++){j=k[i];
m=j.getSizeHint();
h=e;

if(h<m.minWidth){h=m.minWidth;
}else if(h>m.maxWidth){h=m.maxWidth;
}g=f;

if(g<m.minHeight){g=m.minHeight;
}else if(g>m.maxHeight){g=m.maxHeight;
}j.renderLayout(0,0,h,g);
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
(function(){var l="label",k="icon",j="Boolean",i="both",h="String",g="left",f="changeGap",e="changeShow",d="bottom",c="_applyCenter",A="changeIcon",z="qx.ui.basic.Atom",y="changeLabel",x="Integer",w="_applyIconPosition",v="qx.debug",u="top",t="right",s="_applyRich",r="_applyIcon",p="_applyShow",q="on",n="_applyLabel",o="_applyGap",m="atom";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(L,M){if(qx.core.Variant.isSet(v,q)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(L!=null){this.setLabel(L);
}
if(M!=null){this.setIcon(M);
}},properties:{appearance:{refine:true,init:m},label:{apply:n,nullable:true,check:h,event:y},rich:{check:j,init:false,apply:s},icon:{check:h,apply:r,nullable:true,themeable:true,event:A},gap:{check:x,nullable:false,event:f,apply:o,themeable:true,init:4},show:{init:i,check:[i,l,k],themeable:true,inheritable:true,apply:p,event:e},iconPosition:{init:g,check:[u,t,d,g],themeable:true,apply:w},center:{init:false,check:j,themeable:true,apply:c}},members:{_createChildControlImpl:function(a){var b;

switch(a){case l:b=new qx.ui.basic.Label(this.getLabel());
b.setAnonymous(true);
b.setRich(this.getRich());
this._add(b);

if(this.getLabel()==null||this.getShow()===k){b.exclude();
}break;
case k:b=new qx.ui.basic.Image(this.getIcon());
b.setAnonymous(true);
this._addAt(b,0);

if(this.getIcon()==null||this.getShow()===l){b.exclude();
}break;
}return b||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,a);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===k){this._excludeChildControl(l);
}else{this._showChildControl(l);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===l){this._excludeChildControl(k);
}else{this._showChildControl(k);
}},_applyLabel:function(R,S){var T=this.getChildControl(l,true);

if(T){T.setValue(R);
}this._handleLabel();
},_applyRich:function(I,J){var K=this.getChildControl(l,true);

if(K){K.setRich(I);
}},_applyIcon:function(B,C){var D=this.getChildControl(k,true);

if(D){D.setSource(B);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(E,F){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(G,H){this._getLayout().setIconPosition(G);
},_applyCenter:function(P,Q){this._getLayout().setCenter(P);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(o,name,p){this.assert(false,c+name+g);
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
}}}},_computeSizeHint:function(){var A=this._getLayoutChildren();
var length=A.length;
var s,y;
if(length===1){var s=A[0].getSizeHint();
y={width:s.width,height:s.height,minWidth:s.minWidth,minHeight:s.minHeight};
}else{var w=0,x=0;
var t=0,v=0;
var u=this.getIconPosition();
var z=this.getGap();

if(u===l||u===n){var q=0;

for(var i=0;i<length;i++){s=A[i].getSizeHint();
x=Math.max(x,s.width);
w=Math.max(w,s.minWidth);
if(s.height>0){v+=s.height;
t+=s.minHeight;
q++;
}}
if(q>1){var r=(q-1)*z;
v+=r;
t+=r;
}}else{var q=0;

for(var i=0;i<length;i++){s=A[i].getSizeHint();
v=Math.max(v,s.height);
t=Math.max(t,s.minHeight);
if(s.width>0){x+=s.width;
w+=s.minWidth;
q++;
}}
if(q>1){var r=(q-1)*z;
x+=r;
w+=r;
}}y={minWidth:w,width:x,minHeight:t,height:v};
}return y;
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(L,M,N){var P,T,O,U;
var Q=M>N;
var V=Math.abs(M-N);
var W,R;
var S={};

for(T in L){P=L[T];
S[T]={potential:Q?P.max-P.value:P.value-P.min,flex:Q?P.flex:1/P.flex,offset:0};
}while(V!=0){U=Infinity;
O=0;

for(T in S){P=S[T];

if(P.potential>0){O+=P.flex;
U=Math.min(U,P.potential/P.flex);
}}if(O==0){break;
}U=Math.min(V,U*O)/O;
W=0;

for(T in S){P=S[T];

if(P.potential>0){R=Math.min(V,P.potential,Math.ceil(U*P.flex));
W+=R-U*P.flex;

if(W>=1){W-=1;
R-=1;
}P.potential-=R;

if(Q){P.offset+=R;
}else{P.offset-=R;
}V-=R;
}}}return S;
},computeHorizontalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case e:K=I;
break;
case a:K=H-G-J;
break;
case d:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},computeVerticalAlignOffset:function(h,j,k,m,n){if(m==null){m=0;
}
if(n==null){n=0;
}var o=0;

switch(h){case c:o=m;
break;
case b:o=k-j-n;
break;
case g:o=Math.round((k-j)/2);
if(o<m){o=m;
}else if(o<n){o=Math.max(m,k-j-n);
}break;
}return o;
},collapseMargins:function(bm){var bn=0,bp=0;

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];

if(bo<0){bp=Math.min(bp,bo);
}else if(bo>0){bn=Math.max(bn,bo);
}}return bn+bp;
},computeHorizontalGaps:function(B,C,D){if(C==null){C=0;
}var E=0;

if(D){E+=B[0].getMarginLeft();

for(var i=1,l=B.length;i<l;i+=1){E+=this.collapseMargins(C,B[i-1].getMarginRight(),B[i].getMarginLeft());
}E+=B[l-1].getMarginRight();
}else{for(var i=1,l=B.length;i<l;i+=1){E+=B[i].getMarginLeft()+B[i].getMarginRight();
}E+=(C*(l-1));
}return E;
},computeVerticalGaps:function(x,y,z){if(y==null){y=0;
}var A=0;

if(z){A+=x[0].getMarginTop();

for(var i=1,l=x.length;i<l;i+=1){A+=this.collapseMargins(y,x[i-1].getMarginBottom(),x[i].getMarginTop());
}A+=x[l-1].getMarginBottom();
}else{for(var i=1,l=x.length;i<l;i+=1){A+=x[i].getMarginTop()+x[i].getMarginBottom();
}A+=(y*(l-1));
}return A;
},computeHorizontalSeparatorGaps:function(p,q,r){var u=qx.theme.manager.Decoration.getInstance().resolve(r);
var t=u.getInsets();
var s=t.left+t.right;
var v=0;

for(var i=0,l=p.length;i<l;i++){var w=p[i];
v+=w.getMarginLeft()+w.getMarginRight();
}v+=(q+s+q)*(l-1);
return v;
},computeVerticalSeparatorGaps:function(X,Y,ba){var bd=qx.theme.manager.Decoration.getInstance().resolve(ba);
var bc=bd.getInsets();
var bb=bc.top+bc.bottom;
var be=0;

for(var i=0,l=X.length;i<l;i++){var bf=X[i];
be+=bf.getMarginTop()+bf.getMarginBottom();
}be+=(Y+bb+Y)*(l-1);
return be;
},arrangeIdeals:function(bg,bh,bi,bj,bk,bl){if(bh<bg||bk<bj){if(bh<bg&&bk<bj){bh=bg;
bk=bj;
}else if(bh<bg){bk-=(bg-bh);
bh=bg;
if(bk<bj){bk=bj;
}}else if(bk<bj){bh-=(bj-bk);
bk=bj;
if(bh<bg){bh=bg;
}}}
if(bh>bi||bk>bl){if(bh>bi&&bk>bl){bh=bi;
bk=bl;
}else if(bh>bi){bk+=(bh-bi);
bh=bi;
if(bk>bl){bk=bl;
}}else if(bk>bl){bh+=(bk-bl);
bk=bl;
if(bh>bi){bh=bi;
}}}return {begin:bh,end:bk};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="on",j="qx.dynlocale",i="text",h="Boolean",g="color",f="userSelect",d="changeLocale",c="qx.debug",b="enabled",a="none",I="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",r="whiteSpace",s="_applyValue",p="center",q="_applyBuddy",n="String",o="textAlign",l="right",m="changeRich",t="normal",u="_applyRich",w="click",v="label",y="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(X){qx.ui.core.Widget.call(this);

if(X!=null){this.setValue(X);
}
if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:h,init:false,event:m,apply:u},wrap:{check:h,init:true,apply:E},value:{check:n,apply:s,event:D,nullable:true},buddy:{check:H,apply:q,nullable:true,init:null,dereference:true},textAlign:{check:[x,p,l],nullable:true,themeable:true,apply:I,event:F},appearance:{refine:true,init:v},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gu:null,__gv:null,__gw:null,__gx:null,_getContentHint:function(){if(this.__gv){this.__gy=this.__gz();
delete this.__gv;
}return {width:this.__gy.width,height:this.__gy.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(L){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(L&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,L);
if(qx.core.Variant.isSet(C,y)){this.getContainerElement().setStyle(f,L?i:a);
this.getContentElement().setStyle(f,L?i:a);
}},_getContentHeightForWidth:function(O){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__gz(O).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(V,W){this.getContentElement().setStyle(o,V);
},_applyTextColor:function(J,K){if(J){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(J));
}else{this.getContentElement().removeStyle(g);
}},__gy:{width:0,height:0},_applyFont:function(bc,bd){var be;

if(bc){this.__gu=qx.theme.manager.Font.getInstance().resolve(bc);
be=this.__gu.getStyles();
}else{this.__gu=null;
be=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(be);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},__gz:function(P){var T=qx.bom.Label;
var R=this.getFont();
var Q=R?this.__gu.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var S=this.getRich();
return S?T.getHtmlSize(content,Q,P):T.getTextSize(content,Q);
},_applyBuddy:function(Y,ba){if(ba!=null){ba.removeBinding(this.__gw);
this.__gw=null;
this.removeListenerById(this.__gx);
this.__gx=null;
}
if(Y!=null){this.__gw=Y.bind(b,this,b);
this.__gx=this.addListener(w,function(){if(Y.isFocusable()){Y.focus.apply(Y);
}},this);
}},_applyRich:function(bb){this.getContentElement().setRich(bb);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bf,bg){if(bf&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var bh=bf?t:G;
this.getContentElement().setStyle(r,bh);
}},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(M,N){this.getContentElement().setValue(M);
this.__gv=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,M,N);
}},destruct:function(){if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__gw!=null){var U=this.getBuddy();

if(U!=null&&!U.isDisposed()){U.removeBinding(this.__gw);
}}this.__gu=this.__gw=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__dJ:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__dJ;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(i){var j=this.getDomElement();

if(j){throw new Error("The label mode cannot be modified after initial creation");
}i=!!i;

if(this.__dJ==i){return;
}this.__dJ=i;
return this;
},setValue:function(g){this._setProperty(b,g);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var p="div",o="inherit",n="text",m="value",l="",k="hidden",j="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",i="nowrap",h="qx.client",g="auto",F="0",E="ellipsis",D="normal",C="label",B="px",A="crop",z="gecko",y="end",x="100%",w="visible",u="qx.bom.Label",v="opera",s="block",t="none",q="-1000px",r="absolute";
qx.Class.define(u,{statics:{__iK:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iL:function(){var L=this.__iN(false);
document.body.insertBefore(L,document.body.firstChild);
return this._textElement=L;
},__iM:function(){var bd=this.__iN(true);
document.body.insertBefore(bd,document.body.firstChild);
return this._htmlElement=bd;
},__iN:function(P){var Q=qx.bom.Element.create(p);
var R=Q.style;
R.width=R.height=g;
R.left=R.top=q;
R.visibility=k;
R.position=r;
R.overflow=w;

if(P){R.whiteSpace=D;
}else{R.whiteSpace=i;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var S=document.createElementNS(j,C);
var R=S.style;
R.padding=F;

for(var T in this.__iK){R[T]=o;
}Q.appendChild(S);
}}return Q;
},__iO:function(J){var K={};

if(J){K.whiteSpace=D;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){K.display=s;
}else{K.overflow=k;
K.whiteSpace=i;
K.textOverflow=E;
K.userSelect=t;
if(qx.core.Variant.isSet(h,v)){K.OTextOverflow=E;
}}return K;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(p);
c.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var c=b.document.createElement(p);
var e=b.document.createElementNS(j,C);
var d=e.style;
d.cursor=o;
d.color=o;
d.overflow=k;
d.maxWidth=x;
d.padding=F;
for(var f in this.__iK){e.style[f]=o;
}e.setAttribute(A,y);
c.appendChild(e);
}else{var c=b.document.createElement(p);
qx.bom.element.Style.setStyles(c,this.__iO(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(M,N){N=N||l;

if(M.useHtml){M.innerHTML=N;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){M.firstChild.setAttribute(m,N);
}else{qx.bom.element.Attribute.set(M,n,N);
}},getValue:function(O){if(O.useHtml){return O.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return O.firstChild.getAttribute(m)||l;
}else{return qx.bom.element.Attribute.get(O,n);
}},getHtmlSize:function(content,ba,bb){var bc=this._htmlElement||this.__iM();
bc.style.width=bb!==undefined?bb+B:g;
bc.innerHTML=content;
return this.__iP(bc,ba);
},getTextSize:function(G,H){var I=this._textElement||this.__iL();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.firstChild.setAttribute(m,G);
}else{qx.bom.element.Attribute.set(I,n,G);
}return this.__iP(I,H);
},__iP:function(U,V){var W=this.__iK;

if(!V){V={};
}
for(var X in W){U.style[X]=V[X]||l;
}var Y=qx.bom.element.Dimension.getSize(U);

if(qx.core.Variant.isSet(h,z)){if(!qx.bom.client.Platform.WIN){Y.width++;
}}return Y;
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(c){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(g){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(e){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="_applyBlockerColor",e="Number",d="__re",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__re=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:b,themeable:true}},members:{__re:null,_applyBlockerColor:function(i,j){this.__re.setColor(i);
},_applyBlockerOpacity:function(g,h){this.__re.setOpacity(g);
},block:function(){this.__re.block();
},isBlocked:function(){return this.__re.isBlocked();
},unblock:function(){this.__re.unblock();
},forceUnblock:function(){this.__re.forceUnblock();
},blockContent:function(k){this.__re.blockContent(k);
},isContentBlocked:function(){return this.__re.isContentBlocked();
},unblockContent:function(){this.__re.unblockContent();
},forceUnblockContent:function(){this.__re.forceUnblockContent();
},getBlocker:function(){return this.__re;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__no",b="__np",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__no:null,__np:null,getWindowManager:function(){if(!this.__np){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__np;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__np){this.__np.setDesktop(null);
}n.setDesktop(this);
this.__np=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(j,k){this.getWindowManager().changeActiveWindow(j,k);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(f,this._onChangeActive,this);
l.addListener(h,this._onChangeModal,this);
l.addListener(g,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__no){this.__no=[];
}return this.__no;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__mn:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(u,v){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__mn;

if(!B){this.__mn=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(w,x){if(x===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(w===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__mn=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var q="resize",p="position",o="0px",n="webkit",m="paddingLeft",l="$$widget",k="qx.ui.root.Application",j="hidden",i="qx.client",h="div",d="paddingTop",g="100%",f="absolute";
qx.Class.define(k,{extend:qx.ui.root.Abstract,construct:function(A){this.__rf=qx.dom.Node.getWindow(A);
this.__rg=A;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__rf,q,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rf:null,__rg:null,_createContainerElement:function(){var v=this.__rg;
if(qx.core.Variant.isSet(i,n)){if(!v.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var z=v.documentElement.style;
var w=v.body.style;
z.overflow=w.overflow=j;
z.padding=z.margin=w.padding=w.margin=o;
z.width=z.height=w.width=w.height=g;
var y=v.createElement(h);
v.body.appendChild(y);
var x=new qx.html.Root(y);
x.setStyle(p,f);
x.setAttribute(l,this.toHashCode());
return x;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var r=qx.bom.Viewport.getWidth(this.__rf);
var s=qx.bom.Viewport.getHeight(this.__rf);
return {minWidth:r,width:r,maxWidth:r,minHeight:s,height:s,maxHeight:s};
},_applyPadding:function(t,u,name){if(t&&(name==d||name==m)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,t,u,name);
},_applyDecorator:function(a,b){qx.ui.root.Abstract.prototype._applyDecorator.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rf=this.__rg=null;
}});
})();
(function(){var z="zIndex",y="px",x="keydown",w="deactivate",v="resize",u="keypress",t="keyup",s="backgroundColor",r="_applyOpacity",q="Boolean",L="opacity",K="interval",J="Tab",I="Color",H="qx.ui.root.Page",G="__oW",F="__pb",E="__oY",D="Number",C="qx.ui.core.Blocker",A="qx.ui.root.Application",B="_applyColor";
qx.Class.define(C,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this._widget=c;
this._isPageRoot=(qx.Class.isDefined(H)&&c instanceof qx.ui.root.Page);

if(this._isPageRoot){c.addListener(v,this.__pc,this);
}
if(qx.Class.isDefined(A)&&c instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__oT=[];
this.__oU=[];
this.__oV=[];
},properties:{color:{check:I,init:null,nullable:true,apply:B,themeable:true},opacity:{check:D,init:1,apply:r,themeable:true},keepBlockerActive:{check:q,init:false}},members:{__oW:null,__oX:0,__oY:null,__oV:null,__oT:null,__oU:null,__pa:null,__pb:null,_isPageRoot:false,_widget:null,__pc:function(e){var h=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:h.width,height:h.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:h.width,height:h.height});
}},_applyColor:function(Q,R){var S=qx.theme.manager.Color.getInstance().resolve(Q);
this.__pd(s,S);
},_applyOpacity:function(j,k){this.__pd(L,j);
},__pd:function(n,o){var p=[];
this.__oW&&p.push(this.__oW);
this.__oY&&p.push(this.__oY);

for(var i=0;i<p.length;i++){p[i].setStyle(n,o);
}},_backupActiveWidget:function(){var O=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__oT.push(O.getActive());
this.__oU.push(O.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var g=this.__oT.length;

if(g>0){var f=this.__oT[g-1];

if(f){qx.bom.Element.activate(f);
}this.__oT.pop();
}var d=this.__oU.length;

if(d>0){var f=this.__oU[d-1];

if(f){qx.bom.Element.focus(this.__oU[d-1]);
}this.__oU.pop();
}},__pe:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__oW){this.__oW=this.__pe();
this.__oW.setStyle(z,15);
this._widget.getContainerElement().add(this.__oW);
this.__oW.exclude();
}return this.__oW;
},block:function(){this.__oX++;

if(this.__oX<2){this._backupActiveWidget();
var N=this.getBlockerElement();
N.include();
N.activate();
N.addListener(w,this.__pj,this);
N.addListener(u,this.__pi,this);
N.addListener(x,this.__pi,this);
N.addListener(t,this.__pi,this);
}},isBlocked:function(){return this.__oX>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__oX--;

if(this.__oX<1){this.__pf();
this.__oX=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__oX=0;
this.__pf();
},__pf:function(){this._restoreActiveWidget();
var P=this.getBlockerElement();
P.removeListener(w,this.__pj,this);
P.removeListener(u,this.__pi,this);
P.removeListener(x,this.__pi,this);
P.removeListener(t,this.__pi,this);
P.exclude();
},getContentBlockerElement:function(){if(!this.__oY){this.__oY=this.__pe();
this._widget.getContentElement().add(this.__oY);
this.__oY.exclude();
}return this.__oY;
},blockContent:function(T){var U=this.getContentBlockerElement();
U.setStyle(z,T);
this.__oV.push(T);

if(this.__oV.length<2){U.include();

if(this._isPageRoot){if(!this.__pb){this.__pb=new qx.event.Timer(300);
this.__pb.addListener(K,this.__ph,this);
}this.__pb.start();
this.__ph();
}}},isContentBlocked:function(){return this.__oV.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV.pop();
var l=this.__oV[this.__oV.length-1];
var m=this.getContentBlockerElement();
m.setStyle(z,l);

if(this.__oV.length<1){this.__pg();
this.__oV=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__oV=[];
var M=this.getContentBlockerElement();
M.setStyle(z,null);
this.__pg();
},__pg:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__pb.stop();
}},__ph:function(){var a=this._widget.getContainerElement().getDomElement();
var b=qx.dom.Node.getDocument(a);
this.getContentBlockerElement().setStyles({height:b.documentElement.scrollHeight+y,width:b.documentElement.scrollWidth+y});
},__pi:function(e){if(e.getKeyIdentifier()==J){e.stop();
}},__pj:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(v,this.__pc,this);
}this._disposeObjects(E,G,F);
this.__pa=this.__oT=this.__oU=this._widget=this.__oV=null;
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
this.addListener(s,this.__qi,this);
this.addListener(n,this.__qi,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__qi:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var m="keypress",k="focusout",j="__bH",h="activate",g="Tab",f="singleton",d="deactivate",c="focusin",b="qx.ui.core.FocusHandler";
qx.Class.define(b,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__bH={};
},members:{__bH:null,__bI:null,__bJ:null,__bK:null,connectTo:function(bf){bf.addListener(m,this.__bL,this);
bf.addListener(c,this._onFocusIn,this,true);
bf.addListener(k,this._onFocusOut,this,true);
bf.addListener(h,this._onActivate,this,true);
bf.addListener(d,this._onDeactivate,this,true);
},addRoot:function(G){this.__bH[G.$$hash]=G;
},removeRoot:function(a){delete this.__bH[a.$$hash];
},getActiveWidget:function(){return this.__bI;
},isActive:function(bh){return this.__bI==bh;
},getFocusedWidget:function(){return this.__bJ;
},isFocused:function(bi){return this.__bJ==bi;
},isFocusRoot:function(S){return !!this.__bH[S.$$hash];
},_onActivate:function(e){var K=e.getTarget();
this.__bI=K;
var J=this.__bM(K);

if(J!=this.__bK){this.__bK=J;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__bI==u){this.__bI=null;
}},_onFocusIn:function(e){var bg=e.getTarget();

if(bg!=this.__bJ){this.__bJ=bg;
bg.visualizeFocus();
}},_onFocusOut:function(e){var R=e.getTarget();

if(R==this.__bJ){this.__bJ=null;
R.visualizeBlur();
}},__bL:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__bK){return;
}e.stopPropagation();
e.preventDefault();
var H=this.__bJ;

if(!e.isShiftPressed()){var I=H?this.__bQ(H):this.__bO();
}else{var I=H?this.__bR(H):this.__bP();
}if(I){I.tabFocus();
}},__bM:function(L){var M=this.__bH;

while(L){if(M[L.$$hash]){return L;
}L=L.getLayoutParent();
}return null;
},__bN:function(v,w){if(v===w){return 0;
}var y=v.getTabIndex()||0;
var x=w.getTabIndex()||0;

if(y!=x){return y-x;
}var D=v.getContainerElement().getDomElement();
var C=w.getContainerElement().getDomElement();
var B=qx.bom.element.Location;
var A=B.get(D);
var z=B.get(C);
if(A.top!=z.top){return A.top-z.top;
}if(A.left!=z.left){return A.left-z.left;
}var E=v.getZIndex();
var F=w.getZIndex();

if(E!=F){return E-F;
}return 0;
},__bO:function(){return this.__bU(this.__bK,null);
},__bP:function(){return this.__bV(this.__bK,null);
},__bQ:function(T){var U=this.__bK;

if(U==T){return this.__bO();
}
while(T&&T.getAnonymous()){T=T.getLayoutParent();
}
if(T==null){return [];
}var V=[];
this.__bS(U,T,V);
V.sort(this.__bN);
var W=V.length;
return W>0?V[0]:this.__bO();
},__bR:function(X){var Y=this.__bK;

if(Y==X){return this.__bP();
}
while(X&&X.getAnonymous()){X=X.getLayoutParent();
}
if(X==null){return [];
}var ba=[];
this.__bT(Y,X,ba);
ba.sort(this.__bN);
var bb=ba.length;
return bb>0?ba[bb-1]:this.__bP();
},__bS:function(parent,n,o){var p=parent.getLayoutChildren();
var q;

for(var i=0,l=p.length;i<l;i++){q=p[i];
if(!(q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(q)&&q.isEnabled()&&q.isVisible()){if(q.isTabable()&&this.__bN(n,q)<0){o.push(q);
}this.__bS(q,n,o);
}}},__bT:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__bN(N,Q)>0){O.push(Q);
}this.__bT(Q,N,O);
}}},__bU:function(parent,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()){if(r==null||this.__bN(t,r)<0){r=t;
}}r=this.__bU(t,r);
}}return r;
},__bV:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__bN(be,bc)>0){bc=be;
}}bc=this.__bV(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(j);
this.__bJ=this.__bI=this.__bK=null;
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
(function(){var ej="/",ei="visible",eh="excluded",eg="",ef="current",ee=" ",ed="category",ec="modelLink",eb="completed",ea="tags",dM="failed",dL="all",dK="~",dJ="qooxdoo ",dI=".",dH="interval",dG='\n',dF="node",dE="qx.version",dD='</span>',eq=".src.js",er=" Demo Browser ",eo=".html",ep="html",em="<script",en="javascript",ek="_",el="\n",es="widget",et="_demoView",dS="horizontal",dR="separator-vertical",dU="request",dT="src",dW="_leftComposite",dV='</div>',dY="^.*",dX="filled",dQ="changeValue",dP="demobrowser.DemoBrowser",cs="<pre ><div class='script'>",ct='</span>=<span class="string">',cu="changeSelection",cv="outputviews.sourcepage.html.page",cx="_history",cy="__KC",cz="_status",cA='.html',cB='<span class="html-tag-name">',cC="__KD",ez="_searchTextField",ey="f1",ew="script/demobrowser.demo",eu="noPlayground",eD="string",eC="execute",eB='<div class="script">',eA="logappender",eF="_runbutton",eE="f2",dc="<pre class='script'>",dd="_stopbutton",da="__KJ",db="ig",dg="</div></pre>",dh="animation",de='_cmdDisposeSample',df="toolbar",cX="tree1",cY="/demo/",cK="demo/welcome.html",cJ='_cmdSampleInOwnWindow',cM=".*",cL="background-splitpane",cG='demo/',cF="</pre>",cI="__KI",cH='_cmdNamespacePollution',cE="Filter...",cD="/playground/",dm="__KH",dn="viewGroup",dp="icon/16/actions/edit-find.png",dq="right",di="main",dj='_cmdObjectSummary',dk="js",dl='/',dr='_cmdNextSample',ds='&gt;',cU="left",cT='_cmdPrevSample',cS=" Start",cR="\"",cQ='_cmdRunSample',cP="http://demo.qooxdoo.org/",cO="value",cN="_infosplit",cW="runbutton",cV="outputviews.sourcepage.js.page",dt="_navPart",du="?qx.theme=",dv="textfield",dw="_tree",dx="mainsplit",dy="app-header",dz="Demo Browser",dA="?",dB=' <span class="keyword">',dC="__KB",dO="log",dN="_iframe";
qx.Class.define(dP,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
var ch=new qx.ui.layout.VBox;
ch.setSeparator(dR);
this.setLayout(ch);
this.add(this._createHeader());
this.widgets={};
this.tests={};
this.__KA="qx.theme.Modern";
this.__KM();
this.__KB=this.__KT();
this.add(this.__KB);
var cl=new qx.ui.splitpane.Pane(dS);
this.mainsplit=cl;
var ci=new qx.ui.splitpane.Pane(dS);
ci.setDecorator(null);
this._infosplit=ci;
this.add(cl,{flex:1});
var cn=this._leftComposite=new qx.ui.container.Composite();
cn.setLayout(new qx.ui.layout.VBox(3));
cn.setBackgroundColor(cL);
cl.add(cn,0);
{};
var cg=new qx.ui.container.Composite();
cg.setLayout(new qx.ui.layout.HBox(3));
cg.setAppearance(dv);
cn.add(cg);
var co=new qx.ui.basic.Image(dp);
cg.add(co);
this._searchTextField=new qx.ui.form.TextField();
this._searchTextField.setLiveUpdate(true);
this._searchTextField.setAppearance(es);
this._searchTextField.setPlaceholder(cE);
var cm=new qx.event.Timer(500);
cm.addListener(dH,function(v){this.filter(this._searchTextField.getValue());
cm.stop();
},this);
this._searchTextField.addListener(dQ,function(bm){cm.restart();
},this);
cg.add(this._searchTextField,{flex:1});
this._status=new qx.ui.basic.Label(eg);
this._status.setAppearance(es);
this._status.setWidth(80);
this._status.setTextAlign(dq);
cg.add(this._status);
cl.add(ci,1);
this._tree=this.__KY();
cn.add(this._tree,{flex:1});
this._demoView=this.__KU();
{ci.add(this._demoView,2);
};
var ce=this.__KW();
var cf=this.__KX();
var cj=this.__KV();
var ck=new qx.ui.container.Stack;
ck.setDecorator(di);
ck.add(ce);
ck.add(cf);
ck.add(cj);
this.viewGroup.addListener(cu,function(e){var eN=e.getData()[0];
var eO=eN!=null?eN.getUserData(cO):eg;

switch(eO){case ep:this.setSelection([ce]);
ck.show();
break;
case dk:this.setSelection([cf]);
ck.show();
break;
case dO:this.setSelection([cj]);
ck.show();
break;
default:this.resetSelection();
ck.exclude();
}},ck);
ci.add(ck,1);
ck.resetSelection();
ck.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(dU,function(e){var bN=e.getData().replace(dK,ej);

if(this._currentSample!=bN){this.setCurrentSample(bN);
}},this);
this.__KC=[this.__KH,this.__KI,this.__KJ];
{this.__KC.push(this.__KF);
};
this.__KD=new qx.event.Timer(250);
this.__KD.addListener(dH,this.__Lb,this);
this.__KD.start();
},properties:{playDemos:{check:[dL,ed,ef],init:ef}},members:{_iframe:null,__KA:null,__KD:null,__KE:null,_tree:null,_status:null,_searchTextField:null,__KF:null,__KG:null,__KC:null,_versionFilter:null,__KH:null,__KI:null,__KJ:null,__KK:null,__KB:null,_leftComposite:null,_infosplit:null,_demoView:null,__KL:null,defaultUrl:cK,playgroundUrl:cP+qx.core.Setting.get(dE)+cD,__KM:function(){this._cmdObjectSummary=new qx.ui.core.Command("Ctrl+O");
this._cmdObjectSummary.addListener("execute",this.__KN,this);
this._cmdRunSample=new qx.ui.core.Command("F5");
this._cmdRunSample.addListener("execute",this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command("Ctrl+Left");
this._cmdPrevSample.addListener("execute",this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command("Ctrl+Right");
this._cmdNextSample.addListener("execute",this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command("Ctrl+N");
this._cmdSampleInOwnWindow.addListener("execute",this.__KO,this);
this._cmdDisposeSample=new qx.ui.core.Command("Ctrl+D");
this._cmdDisposeSample.addListener("execute",this.__KR,this);
this._cmdNamespacePollution=new qx.ui.core.Command("Ctrl+P");
this._cmdNamespacePollution.addListener("execute",this.__KS,this);
},__KN:function(){var o=this._iframe.getWindow();

if(o&&o.qx){alert(o.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__KO:function(){var eM=this._iframe.getSource();
window.open(eM,"_blank");
},__KP:function(bO){var bP=!!bO;
var bQ=this._tree.getSelection()[0].getUserData("tags");

if(bQ){bP=bP&&!qx.lang.Array.contains(bQ,"noPlayground");
}this.__KF.setEnabled(bP);
this.__KG=bO;
},__KQ:function(){if(this.__KG){var br=this.__KG;
var bq='{"code": '+'"'+encodeURIComponent(br)+'"}';
var bp=this.playgroundUrl+"#"+encodeURIComponent(bq);
window.open(bp,"_blank");
}else{alert(this.tr("Could not open the Playground."));
}},__KR:function(e){var T=this._iframe.getWindow();

if(T&&T.qx){T.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__KS:function(e){var n=this._iframe.getWindow();

if(n&&n.qx){alert(n.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__KT:function(){var fd=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
fd.add(this._navPart);
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
var fq=new qx.ui.toolbar.Button(this.tr("Previous"),"icon/22/actions/go-previous.png");
fq.addListener("execute",this.playPrev,this);
fq.setToolTipText("Run previous demo");
this._navPart.add(fq);
var ft=new qx.ui.toolbar.Button(this.tr("Next"),"icon/22/actions/go-next.png");
ft.addListener("execute",this.playNext,this);
ft.setToolTipText("Run next demo");
this._navPart.add(ft);
var fm=new qx.ui.toolbar.Button(this.tr("Own Window"),"icon/22/actions/edit-redo.png");
fm.addListener("execute",this.__KO,this);
fm.setToolTipText("Open demo in new window");
this.__KH=fm;
this._navPart.add(fm);
{var fc=new qx.ui.toolbar.Button(this.tr("To Playground"),"icon/22/actions/application-exit.png");
fc.addListener("execute",this.__KQ,this);
fc.setToolTipText("Open demo in the playground");
fc.setEnabled(false);
if(qx.core.Variant.isSet("qx.client","mshtml")){fc.exclude();
}this.__KF=fc;
this._navPart.add(fc);
};
var fe=new qx.ui.toolbar.Part;
this.__KJ=fe;
fd.add(fe);
{var fp=new qx.ui.menu.Menu;
this.__KK=fp;
var fk=new qx.ui.menu.RadioButton("Modern Theme");
var fi=new qx.ui.menu.RadioButton("Classic Theme");
fk.setUserData("value","qx.theme.Modern");
fk.setValue(true);
fi.setUserData("value","qx.theme.Classic");
var fr=new qx.ui.form.RadioGroup(fk,fi);
fr.addListener("changeSelection",this.__Lg,this);
fp.add(fk);
fp.add(fi);
var fa=new qx.ui.toolbar.MenuButton(this.tr("Theme"),"icon/22/apps/utilities-color-chooser.png",fp);
fa.setToolTipText("Choose theme");
fe.add(fa);
};
var fg=new qx.ui.menu.Menu;
{var fh=new qx.ui.menu.Button(this.tr("Object Summary"));
fh.setCommand(this._cmdObjectSummary);
fg.add(fh);
var fs=new qx.ui.menu.Button(this.tr("Global Namespace Pollution"));
fs.setCommand(this._cmdNamespacePollution);
fg.add(fs);
};
var fn=new qx.ui.menu.Button(this.tr("Dispose Demo"));
fn.setCommand(this._cmdDisposeSample);
fg.add(fn);
var fo=new qx.ui.toolbar.MenuButton(this.tr("Debug"),"icon/22/apps/office-spreadsheet.png",fg);
fo.setToolTipText("Debugging options");
fe.add(fo);
var fb=new qx.ui.toolbar.Part;
this.__KI=fb;
fd.addSpacer();
fd.add(fb);
{var fu=new qx.ui.toolbar.RadioButton("HTML Code","icon/22/apps/internet-web-browser.png");
fu.setToolTipText("Display HTML source");
var fl=new qx.ui.toolbar.RadioButton("JS Code","icon/22/mimetypes/executable.png");
fl.setToolTipText("Display JavaScript source");
fu.setUserData("value","html");
fl.setUserData("value","js");
fb.add(fu);
fb.add(fl);
};
var fj=new qx.ui.toolbar.RadioButton("Log File","icon/22/apps/utilities-log-viewer.png");
fj.setToolTipText("Display log file");
fj.setUserData("value","log");
fb.add(fj);
var ff=this.viewGroup=new qx.ui.form.RadioGroup;
ff.setAllowEmptySelection(true);
ff.add(fj);
{ff.add(fu,fl);
};
return fd;
},__KU:function(){var bC=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
bC.addListener("load",this.__La,this);
this._iframe=bC;
return bC;
},__KV:function(){var bj=new qx.ui.layout.VBox(0,"middle","main");
bj.setAlignX("right");
var bl=new qx.ui.container.Composite(bj);
var bh=new qx.ui.decoration.Background().set({backgroundColor:"background-medium"});
bl.setDecorator(bh);
var bk=new qx.ui.form.Button(this.tr("Clear log"),"icon/22/actions/edit-clear.png");
bk.setAllowGrowX(false);
bk.setMargin(5);
bk.addListener("execute",function(){this.logappender.clear();
},this);
bl.add(bk,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow("auto","auto");
this.f2.setFont("monospace");
this.f2.setBackgroundColor("white");
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var bi=document.createElement("div");
this.logelem=document.createElement("div");
this.logelem.style.padding="8px";
this.logappender.setElement(this.logelem);
bi.appendChild(this.logelem);
this.f2.getContentElement().useElement(bi);
bl.add(this.f2,{flex:1});
return bl;
},__KW:function(){var bz=new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
bz.setOverflow("auto","auto");
bz.setFont("monospace");
bz.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.html.page"]=bz;
bz.getContentElement().setAttribute("id","qx_srcview");
return bz;
},__KX:function(){var bn=new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
bn.setOverflow("auto","auto");
bn.setFont("monospace");
bn.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.js.page"]=bn;
bn.getContentElement().setAttribute("id","qx_srcview");
return bn;
},__KY:function(){var h=new qx.ui.tree.Tree();
var g=new qx.ui.tree.TreeFolder("Demos");
h.setAppearance("demo-tree");
h.setRoot(g);
h.setSelection([g]);
this.tree=this.widgets["treeview.flat"]=h;
h.addListener("changeSelection",this.treeGetSelection,this);
h.addListener("dblclick",function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return h;
},treeGetSelection:function(e){var bA=this.tree.getSelection()[0];
var bB=bA.getUserData(ec);
this.tests.selected=this.tests.handler.getFullName(bB);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var eP=this._sampleToTreeNodeMap;
var eV=null;
var eY=null;
var eX;
{eX=/\?autorun=true/.test(location.href);
};
var eU=this._history.getState();
var eS=eU.match(/([^~]+)~/);

if(eS){eV=eS[1];
}else{var eQ=eU.match(/([^~][\w]*)/);

if(eQ){eV=eQ[1];

if(eX){this.setPlayDemos(ed);
}}else{eV=dh;

if(eX){this.setPlayDemos(dL);
}}}function eW(bt,bu){var by=bu.getChildren();
var t;

for(var i=0;i<by.length;i++){var bv=by[i];

if(bv.hasChildren()){t=new qx.ui.tree.TreeFolder(eR.polish(bv.label));
t.setUserData(dX,false);
t.setUserData(dF,bv);
eW(t,t.getUserData(dF));

if(bv.label==eV){eY=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(eR.polish(bv.label));
var bx=bv.pwd().slice(1).join(ej)+ej+bv.label;

if(bv.tags){var j,m,bw;
t.setUserData(ea,bv.tags);
{};
}eP[bx]=t;
}bt.add(t);
t.setUserData(ec,bv);
bv.widgetLinkFull=t;
}}var eT=this.tests.handler.ttree;
var eR=this;
this.tree.setUserData(ec,eT);
this.tree.getRoot().setOpen(true);
eW(this.tree.getRoot(),eT);
{};

if(eY!=null){this.tree.setSelection([eY]);
}},runSample:function(e){if(e&&(e.getType()===eC||e.getType()===dH)){if(this.tests.selected===eg){this.setPlayDemos(dL);
}else if(this.tests.selected.indexOf(ep)>0){if(this.__KL){this.__KL.stop();
}this.setPlayDemos(ef);
}else{this.setPlayDemos(ed);
}}this._runbutton.setVisibility(eh);
this._stopbutton.setVisibility(ei);

if(this.tests.selected!=eg){var l=this.tests.selected.replace(dI,ej);
this.setCurrentSample(l);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(ef);
this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
},setCurrentSample:function(F){if(!F){return;
}
if(!this._sampleToTreeNodeMap){return;
}var G;
var I=this._sampleToTreeNodeMap[F];

if(I){I.getTree().setSelection([I]);
G=cG+F;
{G+=du+this.__KA;
};
var H=I.getUserData(ea);

if(H){this.__KF.setEnabled(!qx.lang.Array.contains(H,eu));
}}else{G=this.defaultUrl;
}
if(this._iframe.getSource()==G){this._iframe.reload();
}else{this.__KE=false;
this._iframe.setSource(G);
}if(G==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=F;
this._currentSampleUrl=G;
},__La:function(){var bV=this._iframe.getWindow();
var cc=this._iframe.getSource();

if(cc!=null&&cc!=this.defaultUrl){var bU;

try{bU=bV.location.href;
}catch(eH){bU=window.location.href;
var cd=bU.lastIndexOf(ej);

if(cd!=-1){bU=bU.substring(0,cd+1);
}bU+=cc;
}var ca=bU.indexOf(cY)+6;
var bW=bU.indexOf(dA);
bW=bW==-1?bU.length:bW;
var bX=bU.substring(ca,bW).split(ej);
var cb=String.fromCharCode(187);

if(bX.length==2){var bS=bX[0];
bS=bS.charAt(0).toUpperCase()+bS.substring(1);
var bY=bX[1].replace(eo,eg).replace(ek,ee);
bY=bY.charAt(0).toUpperCase()+bY.substring(1);
var bT=dJ+cb+er+cb+ee+bS+ee+cb+ee+bY;
}else{var bT=dJ+cb+er+cb+cS;
}document.title=bT;
}if(this.getPlayDemos()!=ef){if(!bY){this.playNext();
}else{var self=this;
this.__KL=qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
}},__Lb:function(e){var bR=this._iframe.getWindow();

try{if(bR&&bR.qx&&bR.qx.log&&bR.qx.log.appender){if(!this.__KE){this.__KE=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{bR.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace(ej,dK),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__Lc(this._currentSampleUrl);
}}}else{this.__KE=false;
}}catch(a){this.__KE=false;
}},filter:function(bD){var bL=new RegExp(dY+bD+cM,db);
var bJ=this._tree.getRoot().getItems(true,true);
var bK=0;
var bE=0;

for(var i=0;i<bJ.length;i++){var bM=bJ[i];
var parent=bM.getParent();
var bI=bM.getUserData(ea);
var bF=false;

if(bI!=null){for(var j=0;j<bI.length;j++){bF=!!bI[j].match(bL);

if(bF){break;
}}}
if(bM.getChildren().length==0){bE++;
}
if((bF||(bM.getLabel().search(bL)!=-1)||(parent.getLabel().search(bL)!=-1))){if(bM.getChildren().length==0){bK++;
}bM.show();
bM.getParent().setOpen(true);
bM.getParent().show();
}else{bM.exclude();
}}if(bD==eg){var bH=this._tree.getRoot().getItems(false,true);
var bG=this._tree.getSelection();
for(var i=0;i<bH.length;i++){if(bH[i]==bG[0]||bH[i]==bG[0].getParent()){continue;
}bH[i].setOpen(false);
}}this._status.setValue(bK+ej+bE);
},__Lc:function(W){if(typeof (W)!=eD){return;
}var X=new qx.io.remote.Request(W);
X.setTimeout(180000);
X.setProhibitCaching(false);
X.addListener(eb,function(J){var content=J.getContent();
if(content){{var M=content.indexOf(em,content.indexOf(em)+7);
var S=content.indexOf(dT,M);
var L=content.indexOf(cR,S+5);
var N=content.substring(S+5,L);
var Q=N.substring(4,N.length-3)+eq;
var u=ew;
var P=W.split(dl);
var O=P[1];
var R=P[2];
R=R.substr(0,R.indexOf(cA));
u+=dI+O+dI+R+eq;
Q=u;
var K=new qx.io.remote.Request(Q);
K.setTimeout(180000);
K.setProhibitCaching(false);
K.addListener(eb,function(eK){var eL=eK.getContent();
this.__KP(eL);

if(eL){this.widgets[cV].setHtml(this.__Ld(eL,en));
}},this);
K.addListener(dM,function(bg){this.error("Couldn't load file: "+W);
},this);
K.send();
this.widgets[cv].setHtml(this.__Ld(content));
};
}},this);
X.addListener(dM,function(V){this.error("Couldn't load file: "+W);
},this);
X.send();
},dataLoader:function(p){var q=new qx.io.remote.Request(p);
q.setTimeout(180000);
q.setProhibitCaching(false);
q.addListener(eb,function(eI){var content=eI.getContent();
var eJ=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(eJ);
this.leftReloadTree();
var fy=this._history.getState();

if(fy){this.setCurrentSample(fy.replace(dK,ej));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
q.addListener(dM,function(bo){this.error("Couldn't load file: "+p);
},this);
q.send();
},playPrev:function(e){this.setPlayDemos(ef);
var f=this.tree.getSelection()[0];

if(f){var b=this.tree.getPreviousNodeOf(f,false);

if(!b||b==this.tree.getRoot()){return;
}
while(b.isVisible&&!b.isVisible()){b=this.tree.getPreviousNodeOf(b,false);
}
if(b.getParent()==this.tree.getRoot()){var d=this.tree.getPreviousNodeOf(b,false);

while(d.isVisible&&!d.isVisible()){d=this.tree.getPreviousNodeOf(d,false);
}
if(d.getParent()==this.tree.getRoot()){d.setOpen(true);
var c=this.tree.getPreviousNodeOf(b,false);

while(c.isVisible&&!c.isVisible()){c=this.tree.getPreviousNodeOf(c,false);
}
if(d!==c){b=c;
}}else{b=d;
}}
if(!b||b===f){this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
return;
}else{this.tree.setSelection([b]);
this.runSample();
}}},playNext:function(e){var fx=this.tree.getSelection()[0];

if(fx){var fv=this.tree.getNextNodeOf(fx);

if(!fv){this.setPlayDemos(ef);
this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
return;
}
if(fv.getParent()==this.tree.getRoot()){if(this.getPlayDemos()==ed){if(fv!=fx&&fv!=fx.getParent()){this.setPlayDemos(ef);
this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
return;
}}fv.setOpen(true);
fv=this.tree.getNextNodeOf(fv);
}
if(!fv){this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
return;
}
while(!fv.isVisible()){var fw=this.tree.getNextNodeOf(fv);

if(!fw){this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
return;
}
if(fw.getParent()==this.tree.getRoot()){fv.setOpen(true);
var fw=this.tree.getNextNodeOf(fw);
}fv=fw;
}
if(fv){this.tree.setSelection([fv]);
this.runSample();
}else{this._stopbutton.setVisibility(eh);
this._runbutton.setVisibility(ei);
}}},__Ld:function(x,y){var z=new qx.util.StringBuilder(dc);
var B=[];
var C=new qx.util.StringBuilder();
var D=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var A=/^\s*<\/script>\s*$/i;
x=x.replace(/\r\n/g,el).replace(/\r/g,el);
var B=x.split(dG);
if(y==en){return cs+qx.dev.Tokenizer.javaScriptToHtml(x)+dg;
}
for(var i=0;i<B.length;i++){if(D.exec(B[i])){z.add(this.__Le(qx.bom.String.escape(C.get()+B[i])));
C.clear();
}else if(A.exec(B[i])){var E=qx.dev.Tokenizer.javaScriptToHtml(C.get());
z.add(eB,E,dV);
C.clear();
C.add(B[i],dG);
}else{C.add(B[i],dG);
}}z.add(this.__Le(qx.bom.String.escape(C.get())),cF);
return z.get();
},disableMenuButtons:function(){var k=this.__KC;

for(var i=0;i<k.length;i++){k[i].setEnabled(false);
}},enableMenuButtons:function(){var bs=this.__KC;

for(var i=0;i<bs.length;i++){bs[i].setEnabled(true);
}},__Le:function(cp){var cr=cp;
function cq(bd){var s=new qx.util.StringBuilder(arguments[1],cB,arguments[2],dD);
var be;
var bf=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){be=arguments[i];

if(be==ej){bf=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(be))!=null){s.add(dB,r[1],ct,r[2].replace(/\s*$/,eg),dD);
}}}s.add((bf?ej:eg));
}s.add(ds);
return s.get();
}cr=cr.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,cq);
return cr;
},polish:function(U){return U.replace(eo,eg).replace(ek,ee);
},__Lf:function(){var w=this._iframe.getWindow();
var eG;

if(w.qx&&w.qx.log&&w.qx.log.Logger){eG=w.qx.log.Logger;
eG.register(this.logappender);
eG.clear();
eG.unregister(this.logappender);
}},__Lg:function(e){this.__KA=e.getData()[0].getUserData("value");
this.runSample();
},_createHeader:function(){var bb=new qx.ui.layout.HBox();
var Y=new qx.ui.container.Composite(bb);
Y.setAppearance(dy);
var bc=new qx.ui.basic.Label(dz);
var ba=new qx.ui.basic.Label(dJ+qx.core.Setting.get(dE));
Y.add(bc);
Y.add(new qx.ui.core.Spacer,{flex:1});
Y.add(ba);
return Y;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(dx,cX,cU,cW,df,ey,eE,cx,eA,dj,cQ,cT,dr,cJ,de,cH,dt,eF,dd,dm,da,cI,dn,dC,cN,ez,cz,dw,dN,et,cy,cC,dW,et);
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(K,L,M){qx.ui.layout.Abstract.call(this);

if(K){this.setSpacing(K);
}
if(L){this.setAlignY(L);
}
if(M){this.setSeparator(M);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__eI:null,__eJ:null,__eK:null,__eL:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eM:function(){var S=this._getLayoutChildren();
var length=S.length;
var O=false;
var N=this.__eI&&this.__eI.length!=length&&this.__eJ&&this.__eI;
var Q;
var P=N?this.__eI:new Array(length);
var R=N?this.__eJ:new Array(length);
if(this.getReversed()){S=S.concat().reverse();
}for(var i=0;i<length;i++){Q=S[i].getLayoutProperties();

if(Q.height!=null){P[i]=parseFloat(Q.height)/100;
}
if(Q.flex!=null){R[i]=Q.flex;
O=true;
}else{R[i]=0;
}}if(!N){this.__eI=P;
this.__eJ=R;
}this.__eK=O;
this.__eL=S;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(t,name,u){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(u,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(u);
this.assert(u>=0);
}},"off":null}),renderLayout:function(T,U){if(this._invalidChildrenCache){this.__eM();
}var bc=this.__eL;
var length=bc.length;
var bm=qx.ui.layout.Util;
var bl=this.getSpacing();
var bp=this.getSeparator();

if(bp){var Y=bm.computeVerticalSeparatorGaps(bc,bl,bp);
}else{var Y=bm.computeVerticalGaps(bc,bl,true);
}var i,W,X,bg;
var bh=[];
var bn=Y;

for(i=0;i<length;i+=1){bg=this.__eI[i];
X=bg!=null?Math.floor((U-Y)*bg):bc[i].getSizeHint().height;
bh.push(X);
bn+=X;
}if(this.__eK&&bn!=U){var be={};
var bk,bo;

for(i=0;i<length;i+=1){bk=this.__eJ[i];

if(bk>0){bd=bc[i].getSizeHint();
be[i]={min:bd.minHeight,value:bh[i],max:bd.maxHeight,flex:bk};
}}var ba=bm.computeFlexOffsets(be,U,bn);

for(i in ba){bo=ba[i].offset;
bh[i]+=bo;
bn+=bo;
}}var top=bc[0].getMarginTop();
if(bn<U&&this.getAlignY()!=r){top=U-bn;

if(this.getAlignY()===o){top=Math.round(top/2);
}}var bd,br,bi,X,bf,bj,bb;
this._clearSeparators();
if(bp){var bq=qx.theme.manager.Decoration.getInstance().resolve(bp).getInsets();
var V=bq.top+bq.bottom;
}for(i=0;i<length;i+=1){W=bc[i];
X=bh[i];
bd=W.getSizeHint();
bj=W.getMarginLeft();
bb=W.getMarginRight();
bi=Math.max(bd.minWidth,Math.min(T-bj-bb,bd.maxWidth));
br=bm.computeHorizontalAlignOffset(W.getAlignX()||this.getAlignX(),bi,T,bj,bb);
if(i>0){if(bp){top+=bf+bl;
this._renderSeparator(bp,{top:top,left:0,height:V,width:T});
top+=V+bl+W.getMarginTop();
}else{top+=bm.collapseMargins(bl,bf,W.getMarginTop());
}}W.renderLayout(br,top,bi,X);
top+=X;
bf=W.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eM();
}var B=qx.ui.layout.Util;
var J=this.__eL;
var x=0,A=0,z=0;
var v=0,C=0;
var G,w,I;
for(var i=0,l=J.length;i<l;i+=1){G=J[i];
w=G.getSizeHint();
A+=w.height;
var F=this.__eJ[i];
var y=this.__eI[i];

if(F){x+=w.minHeight;
}else if(y){z=Math.max(z,Math.round(w.minHeight/y));
}else{x+=w.height;
}I=G.getMarginLeft()+G.getMarginRight();
if((w.width+I)>C){C=w.width+I;
}if((w.minWidth+I)>v){v=w.minWidth+I;
}}x+=z;
var E=this.getSpacing();
var H=this.getSeparator();

if(H){var D=B.computeVerticalSeparatorGaps(J,E,H);
}else{var D=B.computeVerticalGaps(J,E,true);
}return {minHeight:x+D,height:A+D,minWidth:v,width:C};
}},destruct:function(){this.__eI=this.__eJ=this.__eL=null;
}});
})();
(function(){var l="splitter",k="slider",j="mousedown",i="mouseout",h="mousemove",g="mouseup",f="losecapture",d="active",c="horizontal",b="vertical",D="knob",C="Integer",B="height",A="row-resize",z="move",w="maxHeight",v="width",u="_applyOrientation",t="mouseover",s="splitpane",q="qx.ui.splitpane.Pane",r="_applyOffset",o="minHeight",p="minWidth",m="col-resize",n="maxWidth";
qx.Class.define(q,{extend:qx.ui.core.Widget,construct:function(J){qx.ui.core.Widget.call(this);
this.__mo=[];
if(J){this.setOrientation(J);
}else{this.initOrientation();
}this.addListener(j,this._onMouseDown);
this.addListener(g,this._onMouseUp);
this.addListener(h,this._onMouseMove);
this.addListener(i,this._onMouseOut);
this.addListener(f,this._onMouseUp);
},properties:{appearance:{refine:true,init:s},offset:{check:C,init:6,apply:r},orientation:{init:c,check:[c,b],apply:u}},members:{__mp:null,__mq:false,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mo:null,_createChildControlImpl:function(H){var I;

switch(H){case k:I=new qx.ui.splitpane.Slider(this);
I.exclude();
this._add(I,{type:H});
break;
case l:I=new qx.ui.splitpane.Splitter(this);
this._add(I,{type:H});
I.addListener(z,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){I.addListener(t,this._onSplitterMouseOver,I);
}break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},_applyOrientation:function(R,S){var T=this.getChildControl(k);
var W=this.getChildControl(l);
this.__mt=R===c;
var V=this._getLayout();

if(V){V.dispose();
}var U=R===b?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(U);
W.removeState(S);
W.addState(R);
W.getChildControl(D).removeState(S);
W.getChildControl(D).addState(R);
T.removeState(S);
T.addState(R);
},_applyOffset:function(X,Y){var ba=this.getChildControl(l);

if(Y===0){ba.removeListener(j,this._onMouseDown,this);
ba.removeListener(h,this._onMouseMove,this);
ba.removeListener(i,this._onMouseOut,this);
ba.removeListener(g,this._onMouseUp,this);
ba.removeListener(f,this._onMouseUp,this);
this.addListener(j,this._onMouseDown);
this.addListener(g,this._onMouseUp);
this.addListener(h,this._onMouseMove);
this.addListener(i,this._onMouseOut);
this.addListener(f,this._onMouseUp);
}
if(X===0){this.removeListener(j,this._onMouseDown);
this.removeListener(g,this._onMouseUp);
this.removeListener(h,this._onMouseMove);
this.removeListener(i,this._onMouseOut);
this.removeListener(f,this._onMouseUp);
ba.addListener(j,this._onMouseDown,this);
ba.addListener(h,this._onMouseMove,this);
ba.addListener(i,this._onMouseOut,this);
ba.addListener(g,this._onMouseUp,this);
ba.addListener(f,this._onMouseUp,this);
}},add:function(bj,bk){if(bk==null){this._add(bj);
}else{this._add(bj,{flex:bk});
}this.__mo.push(bj);
},remove:function(bb){this._remove(bb);
qx.lang.Array.remove(this.__mo,bb);
},getChildren:function(){return this.__mo;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var bx=this.getChildControl(l);
var bz=bx.getContainerLocation();
var by=this.getContentLocation();
this.__mp=this.__mt?e.getDocumentLeft()-bz.left+by.left:e.getDocumentTop()-bz.top+by.top;
var bB=this.getChildControl(k);
var bA=bx.getBounds();
bB.setUserBounds(bA.left,bA.top,bA.width,bA.height);
bB.setZIndex(bx.getZIndex()+1);
bB.show();
this.__mq=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__mq){this.__mx();
var bl=this.getChildControl(k);
var bm=this.__mu;

if(this.__mt){bl.setDomLeft(bm);
}else{bl.setDomTop(bm);
}e.stop();
}else{this.__mw();
}},_onMouseOut:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
this.__mw();
},_onMouseUp:function(e){if(!this.__mq){return;
}this._finalizeSizes();
var a=this.getChildControl(k);
a.exclude();
this.__mq=false;
this.releaseCapture();
this.__mw();
e.stop();
},_onSplitterMove:function(){this.__mw();
},_onSplitterMouseOver:function(){this.addState(d);
},_finalizeSizes:function(){var N=this.__mu;
var K=this.__mv;

if(N==null){return;
}var P=this._getChildren();
var O=P[2];
var L=P[3];
var M=O.getLayoutProperties().flex;
var Q=L.getLayoutProperties().flex;
if((M!=0)&&(Q!=0)){O.setLayoutProperties({flex:N});
L.setLayoutProperties({flex:K});
}else{if(this.__mt){O.setWidth(N);
L.setWidth(K);
}else{O.setHeight(N);
L.setHeight(K);
}}},_isNear:function(){var bc=this.getChildControl(l);
var be=bc.getBounds();
var bg=bc.getContainerLocation();
var bd=this.getOffset();
if(!bg){return false;
}var bh=this.__mr;
var bi=be.width;
var bf=bg.left;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}var bh=this.__ms;
var bi=be.height;
var bf=bg.top;

if(bi<bd){bf-=Math.floor((bd-bi)/2);
bi=bd;
}
if(bh<bf||bh>(bf+bi)){return false;
}return true;
},__mw:function(){var F=this.getChildControl(l);
var G=this.getApplicationRoot();
if(this.__mq||this._isNear()){var E=this.__mt?m:A;
this.setCursor(E);
G.setGlobalCursor(E);
F.addState(d);
}else if(F.hasState(d)){this.resetCursor();
G.resetGlobalCursor();
F.removeState(d);
}},__mx:function(){if(this.__mt){var bp=p,bw=v,bq=n,bu=this.__mr;
}else{var bp=o,bw=B,bq=w,bu=this.__ms;
}var bv=this._getChildren();
var bn=bv[2].getSizeHint();
var bs=bv[3].getSizeHint();
var bt=bv[2].getBounds()[bw]+bv[3].getBounds()[bw];
var br=bu-this.__mp;
var bo=bt-br;
if(br<bn[bp]){bo-=bn[bp]-br;
br=bn[bp];
}else if(bo<bs[bp]){br-=bs[bp]-bo;
bo=bs[bp];
}if(br>bn[bq]){bo+=br-bn[bq];
br=bn[bq];
}else if(bo>bs[bq]){br+=bo-bs[bq];
bo=bs[bq];
}this.__mu=br;
this.__mv=bo;
},_isActiveDragSession:function(){return this.__mq;
},_setLastMousePosition:function(x,y){this.__mr=x;
this.__ms=y;
}},destruct:function(){this.__mo=null;
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
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__fF:null,__fG:null,__fH:null,__fI:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fJ:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__fF&&this.__fF.length!=length&&this.__fG&&this.__fF;
var z;
var x=w?this.__fF:new Array(length);
var A=w?this.__fG:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__fF=x;
this.__fG=A;
}this.__fH=y;
this.__fI=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(bq,name,br){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(br,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(br);
this.assert(br>=0);
}},"off":null}),renderLayout:function(C,D){if(this._invalidChildrenCache){this.__fJ();
}var J=this.__fI;
var length=J.length;
var S=qx.ui.layout.Util;
var R=this.getSpacing();
var V=this.getSeparator();

if(V){var G=S.computeHorizontalSeparatorGaps(J,R,V);
}else{var G=S.computeHorizontalGaps(J,R,true);
}var i,E,P,O;
var U=[];
var K=G;

for(i=0;i<length;i+=1){O=this.__fF[i];
P=O!=null?Math.floor((C-G)*O):J[i].getSizeHint().width;
U.push(P);
K+=P;
}if(this.__fH&&K!=C){var M={};
var Q,T;

for(i=0;i<length;i+=1){Q=this.__fG[i];

if(Q>0){L=J[i].getSizeHint();
M[i]={min:L.minWidth,value:U[i],max:L.maxWidth,flex:Q};
}}var H=S.computeFlexOffsets(M,C,K);

for(i in H){T=H[i].offset;
U[i]+=T;
K+=T;
}}var ba=J[0].getMarginLeft();
if(K<C&&this.getAlignX()!=r){ba=C-K;

if(this.getAlignX()===p){ba=Math.round(ba/2);
}}var L,top,F,P,I,X,N;
var R=this.getSpacing();
this._clearSeparators();
if(V){var W=qx.theme.manager.Decoration.getInstance().resolve(V).getInsets();
var Y=W.left+W.right;
}for(i=0;i<length;i+=1){E=J[i];
P=U[i];
L=E.getSizeHint();
X=E.getMarginTop();
N=E.getMarginBottom();
F=Math.max(L.minHeight,Math.min(D-X-N,L.maxHeight));
top=S.computeVerticalAlignOffset(E.getAlignY()||this.getAlignY(),F,D,X,N);
if(i>0){if(V){ba+=I+R;
this._renderSeparator(V,{left:ba,top:0,width:Y,height:D});
ba+=Y+R+E.getMarginLeft();
}else{ba+=S.collapseMargins(R,I,E.getMarginLeft());
}}E.renderLayout(ba,top,P,F);
ba+=P;
I=E.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fJ();
}var bh=qx.ui.layout.Util;
var bp=this.__fI;
var bb=0,bi=0,bf=0;
var be=0,bg=0;
var bm,bc,bo;
for(var i=0,l=bp.length;i<l;i+=1){bm=bp[i];
bc=bm.getSizeHint();
bi+=bc.width;
var bl=this.__fG[i];
var bd=this.__fF[i];

if(bl){bb+=bc.minWidth;
}else if(bd){bf=Math.max(bf,Math.round(bc.minWidth/bd));
}else{bb+=bc.width;
}bo=bm.getMarginTop()+bm.getMarginBottom();
if((bc.height+bo)>bg){bg=bc.height+bo;
}if((bc.minHeight+bo)>be){be=bc.minHeight+bo;
}}bb+=bf;
var bk=this.getSpacing();
var bn=this.getSeparator();

if(bn){var bj=bh.computeHorizontalSeparatorGaps(bp,bk,bn);
}else{var bj=bh.computeHorizontalGaps(bp,bk,true);
}return {minWidth:bb+bj,width:bi+bj,minHeight:be,height:bg};
}},destruct:function(){this.__fF=this.__fG=this.__fI=null;
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
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(j,name,k){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var J,L;
var y,x,G,z;

for(var i=0;i<length;i++){J=M[i];
L=J.getLayoutProperties().type;

if(L===e){x=J;
}else if(L===h){G=J;
}else if(!y){y=J;
}else{z=J;
}}
if(y&&z){var O=y.getLayoutProperties().flex;
var A=z.getLayoutProperties().flex;

if(O==null){O=1;
}
if(A==null){A=1;
}var N=y.getSizeHint();
var D=x.getSizeHint();
var F=z.getSizeHint();
var K=N.width;
var I=D.width;
var H=F.width;

if(O>0&&A>0){var B=O+A;
var C=v-I;
var K=Math.round((C/B)*O);
var H=C-K;
var E=qx.ui.layout.Util.arrangeIdeals(N.minWidth,K,N.maxWidth,F.minWidth,H,F.maxWidth);
K=E.begin;
H=E.end;
}else if(O>0){K=v-I-H;

if(K<N.minWidth){K=N.minWidth;
}
if(K>N.maxWidth){K=N.maxWidth;
}}else if(A>0){H=v-K-I;

if(H<F.minWidth){H=F.minWidth;
}
if(H>F.maxWidth){H=F.maxWidth;
}}y.renderLayout(0,0,K,w);
x.renderLayout(K,0,I,w);
z.renderLayout(K+I,0,H,w);
}else{x.renderLayout(0,0,0,0);
if(y){y.renderLayout(0,0,v,w);
}else if(z){z.renderLayout(0,0,v,w);
}}},_computeSizeHint:function(){var u=this._getLayoutChildren();
var length=u.length;
var n,m,t;
var r=0,s=0,l=0;
var o=0,q=0,p=0;

for(var i=0;i<length;i++){n=u[i];
t=n.getLayoutProperties();
if(t.type===h){continue;
}m=n.getSizeHint();
r+=m.minWidth;
s+=m.width;
l+=m.maxWidth;

if(m.minHeight>o){o=m.minHeight;
}
if(m.height>q){q=m.height;
}
if(m.maxHeight>p){p=m.maxHeight;
}}return {minWidth:r,width:s,maxWidth:l,minHeight:o,height:q,maxHeight:p};
}}});
})();
(function(){var o="qx.dynlocale",n="Boolean",m="changeLocale",l="changeInvalidMessage",k="on",j="String",i="invalid",h="",g="qx.ui.form.MForm",f="_applyValid",c="changeRequired",d="changeValid";
qx.Mixin.define(g,{construct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().addListener(m,this.__fd,this);
}},properties:{valid:{check:n,init:true,apply:f,event:d},required:{check:n,init:false,event:c},invalidMessage:{check:j,init:h,event:l},requiredInvalidMessage:{check:j,nullable:true,event:l}},members:{_applyValid:function(p,q){p?this.removeState(i):this.addState(i);
},__fd:qx.core.Variant.select(o,{"on":function(e){var a=this.getInvalidMessage();

if(a&&a.translate){this.setInvalidMessage(a.translate());
}var b=this.getRequiredInvalidMessage();

if(b&&b.translate){this.setRequiredInvalidMessage(b.translate());
}},"off":null})},destruct:function(){if(qx.core.Variant.isSet(o,k)){qx.locale.Manager.getInstance().removeListener(m,this.__fd,this);
}}});
})();
(function(){var Y="showingPlaceholder",X="",W="none",V="qx.dynlocale",U="Boolean",T="qx.client",S="color",R="qx.event.type.Data",Q="readonly",P="input",bL="focusin",bK="visibility",bJ="focusout",bI="changeLocale",bH="on",bG="readOnly",bF="text",bE="_applyTextAlign",bD="px",bC="RegExp",bg=")",bh="syncAppearance",be="change",bf="textAlign",bc="focused",bd="center",ba="visible",bb="disabled",bi="url(",bj="off",bq="String",bo="resize",bu="qx.ui.form.AbstractField",bs="transparent",by="spellcheck",bw="false",bl="right",bB="PositiveInteger",bA="mshtml",bz="abstract",bk="block",bm="webkit",bn="_applyReadOnly",bp="_applyPlaceholder",br="hidden",bt="left",bv="qx/static/blank.gif",bx="absolute";
qx.Class.define(bu,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bz,construct:function(E){qx.ui.core.Widget.call(this);

if(E!=null){this.setValue(E);
}this.getContentElement().addListener(be,this._onChangeContent,this);
this.addListener(bh,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().addListener(bI,this._onChangeLocale,this);
}},events:{"input":R,"changeValue":R},properties:{textAlign:{check:[bt,bd,bl],nullable:true,themeable:true,apply:bE},readOnly:{check:U,apply:bn,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bB,init:Infinity},liveUpdate:{check:U,init:false},placeholder:{check:bq,nullable:true,apply:bp},filter:{check:bC,nullable:true,init:null}},members:{__J:true,__K:null,__L:null,__M:null,getFocusElement:function(){var bM=this.getContentElement();

if(bM){return bM;
}},_createInputElement:function(){return new qx.html.Input(bF);
},renderLayout:function(t,top,u,v){var w=this._updateInsets;
var A=qx.ui.core.Widget.prototype.renderLayout.call(this,t,top,u,v);
if(!A){return;
}var y=A.size||w;
var B=bD;

if(y||A.local||A.margin){var x=this.getInsets();
var innerWidth=u-x.left-x.right;
var innerHeight=v-x.top-x.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var z=this.getContentElement();

if(w){this.__P().setStyles({"left":x.left+B,"top":x.top+B});
}
if(y){this.__P().setStyles({"width":innerWidth+B,"height":innerHeight+B});
z.setStyles({"width":innerWidth+B,"height":innerHeight+B});
this._renderContentElement(innerHeight,z);
}},_renderContentElement:function(innerHeight,F){},_createContentElement:function(){var M=this._createInputElement();
M.setStyles({"border":W,"padding":0,"margin":0,"display":bk,"background":bs,"outline":W,"appearance":W,"position":bx,"autoComplete":bj});
M.setSelectable(this.getSelectable());
M.setEnabled(this.getEnabled());
M.addListener(P,this._onHtmlInput,this);
M.setAttribute(by,bw);
if(qx.core.Variant.isSet(T,bm)){M.setStyle(bo,W);
}if(qx.core.Variant.isSet(T,bA)){M.setStyles({backgroundImage:bi+qx.util.ResourceManager.getInstance().toUri(bv)+bg});
}return M;
},_applyEnabled:function(G,H){qx.ui.core.Widget.prototype._applyEnabled.call(this,G,H);
this.getContentElement().setEnabled(G);

if(G){this._showPlaceholder();
}else{this._removePlaceholder();
}},__N:{width:16,height:16},_getContentHint:function(){return {width:this.__N.width*10,height:this.__N.height||16};
},_applyFont:function(I,J){var K;

if(I){var L=qx.theme.manager.Font.getInstance().resolve(I);
K=L.getStyles();
}else{K=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(K);
this.__P().setStyles(K);
if(I){this.__N=qx.bom.Label.getTextSize("A",K);
}else{delete this.__N;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(c,d){if(c){this.getContentElement().setStyle(S,qx.theme.manager.Color.getInstance().resolve(c));
}else{this.getContentElement().removeStyle(S);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__N;
},_onHtmlInput:function(e){var i=e.getData();
var h=true;
this.__J=false;
if(this.getFilter()!=null){var j=X;
var f=i.search(this.getFilter());
var g=i;

while(f>=0){j=j+(g.charAt(f));
g=g.substring(f+1,g.length);
f=g.search(this.getFilter());
}
if(j!=i){h=false;
i=j;
this.getContentElement().setValue(i);
}}if(i.length>this.getMaxLength()){var h=false;
this.getContentElement().setValue(i.substr(0,this.getMaxLength()));
}if(h){this.fireDataEvent(P,i,this.__M);
this.__M=i;
if(this.getLiveUpdate()){this.__O(i);
}}},__O:function(bP){var bQ=this.__L;
this.__L=bP;

if(bQ!=bP){this.fireNonBubblingEvent("changeValue",qx.event.type.Data,[bP,bQ]);
}},setValue:function(p){if(p===null){if(this.__J){return p;
}p=X;
this.__J=true;
}else{this.__J=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(p)){var r=this.getContentElement();

if(p.length>this.getMaxLength()){p=p.substr(0,this.getMaxLength());
}
if(r.getValue()!=p){var s=r.getValue();
r.setValue(p);
var q=this.__J?null:p;
this.__L=s;
this.__O(q);
}this._showPlaceholder();
return p;
}throw new Error("Invalid value type: "+p);
},getValue:function(){var o=this.getContentElement().getValue();
return this.__J?null:o;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__J=e.getData()===null;
this.__O(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(a,b){this.getContentElement().setTextSelection(a,b);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var O=this.getValue()||X;
var N=this.getPlaceholder();

if(N!=null&&O==X&&!this.hasState(bc)&&!this.hasState(bb)){if(this.hasState(Y)){this._syncPlaceholder();
}else{this.addState(Y);
}}},_removePlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,br);
this.removeState(Y);
}},_syncPlaceholder:function(){if(this.hasState(Y)){this.__P().setStyle(bK,ba);
}},__P:function(){if(this.__K==null){this.__K=new qx.html.Label();
var k=qx.theme.manager.Color.getInstance();
this.__K.setStyles({"visibility":"hidden","zIndex":6,"position":"absolute","color":k.resolve("text-placeholder")});
this.getContainerElement().add(this.__K);
}return this.__K;
},_onChangeLocale:qx.core.Variant.select(V,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bN,bO){this.__P().setValue(bN);

if(bN!=null){this.addListener(bL,this._removePlaceholder,this);
this.addListener(bJ,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bL,this._removePlaceholder,this);
this.removeListener(bJ,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(C,D){this.getContentElement().setStyle(bf,C);
},_applyReadOnly:function(l,m){var n=this.getContentElement();
n.setAttribute(bG,l);

if(l){this.addState(Q);
this.setFocusable(false);
}else{this.removeState(Q);
this.setFocusable(true);
}}},destruct:function(){this.__K=null;

if(qx.core.Variant.isSet(V,bH)){qx.locale.Manager.getInstance().removeListener(bI,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_renderContentElement:function(innerHeight,c){}}});
})();
(function(){var r="none",q="wrap",p="value",o="qx.client",n="textarea",m="off",l="on",k="qxSelectable",j="",i="webkit",e="input",h="qx.html.Input",g="select",d="disabled",c="read-only",f="userSelect";
qx.Class.define(h,{extend:qx.html.Element,construct:function(A,B,C){if(A===g||A===n){var D=A;
}else{D=e;
}qx.html.Element.call(this,D,B,C);
this.__c=A;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);
var b=this.getDomElement();

if(name===p){qx.bom.Input.setValue(b,a);
}else if(name===q){qx.bom.Input.setWrap(b,a);
}},setEnabled:qx.core.Variant.select(o,{"webkit":function(y){this.__e=y;

if(!y){this.setStyles({"userModify":c,"userSelect":r});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:r});
}},"default":function(E){this.setAttribute(d,E===false);
}}),setSelectable:qx.core.Variant.select(o,{"webkit":function(v){this.__d=v;
this.setAttribute(k,v?l:m);
if(qx.core.Variant.isSet(o,i)){var w=this.__e?v?null:r:r;
this.setStyle(f,w);
}},"default":function(s){this.setAttribute(k,s?l:m);
}}),setValue:function(t){var u=this.getDomElement();

if(u){if(u.value!=t){qx.bom.Input.setValue(u,t);
}}else{this._setProperty(p,t);
}return this;
},getValue:function(){var x=this.getDomElement();

if(x){return qx.bom.Input.getValue(x);
}return this._getProperty(p)||j;
},setWrap:function(z){if(this.__c===n){this._setProperty(q,z);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===n){return this._getProperty(q);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
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
(function(){var n="",m="select",k="qx.client",j="textarea",h="soft",g="off",f="text",e="Unsupported input type.",d="nowrap",c="radio",A="auto",z="qx.debug",y="input",x="option",w="value",v="number",u="qx.bom.Input",t="normal",s="mshtml",r="wrap",p="checkbox",q="select-one",o="on";
qx.Class.define(u,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(bb,bc,bd){if(qx.core.Variant.isSet(z,o)){qx.core.Assert.assertKeyInMap(bb,this.__f,e);
}var bc=bc?qx.lang.Object.clone(bc):{};
var be;

if(bb===j||bb===m){be=bb;
}else{be=y;
bc.type=bb;
}return qx.bom.Element.create(be,bc,bd);
},setValue:function(N,O){var T=N.nodeName.toLowerCase();
var Q=N.type;
var Array=qx.lang.Array;
var U=qx.lang.Type;

if(typeof O===v){O+=n;
}
if((Q===p||Q===c)){if(U.isArray(O)){N.checked=Array.contains(O,N.value);
}else{N.checked=N.value==O;
}}else if(T===m){var P=U.isArray(O);
var V=N.options;
var R,S;

for(var i=0,l=V.length;i<l;i++){R=V[i];
S=R.getAttribute(w);

if(S==null){S=R.text;
}R.selected=P?Array.contains(O,S):O==S;
}
if(P&&O.length==0){N.selectedIndex=-1;
}}else if((Q===f||Q===j)&&qx.core.Variant.isSet(k,s)){N.$$inValueSet=true;
N.value=O;
N.$$inValueSet=null;
}else{N.value=O;
}},getValue:function(B){var H=B.nodeName.toLowerCase();

if(H===x){return (B.attributes.value||{}).specified?B.value:B.text;
}
if(H===m){var C=B.selectedIndex;
if(C<0){return null;
}var I=[];
var K=B.options;
var J=B.type==q;
var G=qx.bom.Input;
var F;
for(var i=J?C:0,E=J?C+1:K.length;i<E;i++){var D=K[i];

if(D.selected){F=G.getValue(D);
if(J){return F;
}I.push(F);
}}return I;
}else{return (B.value||n).replace(/\r/g,n);
}},setWrap:qx.core.Variant.select(k,{"mshtml":function(a,b){a.wrap=b?h:g;
},"gecko|webkit":function(W,X){var ba=X?h:g;
var Y=X?n:A;
W.setAttribute(r,ba);
W.style.overflow=Y;
},"default":function(L,M){L.style.whiteSpace=M?t:d;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(e){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(d){return arguments.length==1;
}}});
})();
(function(){var g="qx.ui.core.MSingleSelectionHandling",f="changeSelection",d="changeSelected",c="__lS",b="qx.event.type.Data";
qx.Mixin.define(g,{events:{"changeSelection":b},members:{__lS:null,getSelection:function(){var a=this.__lT().getSelected();

if(a){return [a];
}else{return [];
}},setSelection:function(j){switch(j.length){case 0:this.resetSelection();
break;
case 1:this.__lT().setSelected(j[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+j.length+" items!");
}},resetSelection:function(){this.__lT().resetSelected();
},isSelected:function(l){return this.__lT().isSelected(l);
},isSelectionEmpty:function(){return this.__lT().isSelectionEmpty();
},getSelectables:function(h){return this.__lT().getSelectables(h);
},_onChangeSelected:function(e){var n=e.getData();
var m=e.getOldData();
n==null?n=[]:n=[n];
m==null?m=[]:m=[m];
this.fireDataEvent(f,n,m);
},__lT:function(){if(this.__lS==null){var i=this;
this.__lS=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(k){if(i._isItemSelectable){return i._isItemSelectable(k);
}else{return k.isVisible();
}}});
this.__lS.addListener(d,this._onChangeSelected,this);
}this.__lS.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__lS;
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var g="_applyDynamic",f="changeSelection",d="Boolean",c="qx.ui.container.Stack";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(f,this.__mP,this);
},properties:{dynamic:{check:d,init:false,apply:g}},members:{_applyDynamic:function(j){var m=this._getChildren();
var k=this.getSelection()[0];
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];

if(n!=k){if(j){m[i].exclude();
}else{m[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(h){return true;
},__mP:function(e){var r=e.getOldData()[0];
var s=e.getData()[0];

if(r){if(this.isDynamic()){r.exclude();
}else{r.hide();
}}
if(s){s.show();
}},add:function(o){this._add(o);
var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},remove:function(a){this._remove(a);

if(this.getSelection()[0]===a){var b=this._getChildren()[0];

if(b){this.setSelection([b]);
}else{this.resetSelection();
}}},indexOf:function(q){return this._indexOf(q);
},getChildren:function(){return this._getChildren();
},previous:function(){var z=this.getSelection()[0];
var x=this._indexOf(z)-1;
var A=this._getChildren();

if(x<0){x=A.length-1;
}var y=A[x];
this.setSelection([y]);
},next:function(){var u=this.getSelection()[0];
var t=this._indexOf(u)+1;
var v=this._getChildren();
var w=v[t]||v[0];
this.setSelection([w]);
}}});
})();
(function(){var k="__lO",j="__lP",h="Boolean",g="qx.ui.core.SingleSelectionManager",f="qx.debug",e="Invalid selectionProvider!",d="changeSelected",c="on",b="__lN",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);

if(qx.core.Variant.isSet(f,c)){qx.core.Assert.assertInterface(l,qx.ui.core.ISingleSelectionProvider,e);
}this.__lN=l;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:h,init:true,apply:j}},members:{__lO:null,__lN:null,getSelected:function(){return this.__lO;
},setSelected:function(s){if(!this.__lR(s)){throw new Error("Could not select "+s+", because it is not a child element!");
}this.__lQ(s);
},resetSelected:function(){this.__lQ(null);
},isSelected:function(r){if(!this.__lR(r)){throw new Error("Could not check if "+r+" is selected,"+" because it is not a child element!");
}return this.__lO===r;
},isSelectionEmpty:function(){return this.__lO==null;
},getSelectables:function(o){var p=this.__lN.getItems();
var q=[];

for(var i=0;i<p.length;i++){if(this.__lN.isItemSelectable(p[i])){q.push(p[i]);
}}if(!o){for(var i=q.length-1;i>=0;i--){if(!q[i].getEnabled()){q.splice(i,1);
}}}return q;
},__lP:function(m,n){if(!m){this.__lQ(this.__lO);
}},__lQ:function(t){var w=this.__lO;
var v=t;

if(v!=null&&w===v){return;
}
if(!this.isAllowEmptySelection()&&v==null){var u=this.getSelectables(true)[0];

if(u){v=u;
}}this.__lO=v;
this.fireDataEvent(d,v,w);
},__lR:function(x){var y=this.__lN.getItems();

for(var i=0;i<y.length;i++){if(y[i]===x){return true;
}}return false;
}},destruct:function(){if(this.__lN.toHashCode){this._disposeObjects(b);
}else{this.__lN=null;
}this._disposeObjects(k);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var o="",n='#',m="String",l="request",k="mshtml",j="changeTitle",i="abstract",h="_applyState",g="qx.client",f="changeState",c="qx.bom.History",e="_applyTitle",d="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,type:i,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(n)[0]+n;
this.__ut={};
this._setInitialState();
},events:{"request":d},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(g,k)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:m,event:j,nullable:true,apply:e},state:{check:m,event:f,nullable:true,apply:h}},members:{__ut:null,_applyState:function(x,y){this._writeState(x);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(p){if(qx.lang.Type.isString(p)){return encodeURIComponent(p);
}return o;
},_decode:function(v){if(qx.lang.Type.isString(v)){return decodeURIComponent(v);
}return o;
},_applyTitle:function(u){if(u!=null){document.title=u||o;
}},addToHistory:function(a,b){if(!qx.lang.Type.isString(a)){a=a+o;
}
if(qx.lang.Type.isString(b)){this.setTitle(b);
this.__ut[a]=b;
}
if(this.getState()!==a){this._writeState(a);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(w){this.setState(w);
this.fireDataEvent(l,w);

if(this.__ut[w]!=null){this.setTitle(this.__ut[w]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(q){var r=this._baseUrl+(q||o);
var s=window.location;

if(r!=s.href){s.href=r;
}},_getHash:function(){var t=/#(.*)$/.exec(window.location.href);
return t&&t[1]?t[1]:o;
}},destruct:function(){this.__ut=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__uv();
},members:{__uu:null,__uv:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__uu=qx.lang.Function.bind(this.__ux,this);
qx.bom.Event.addNativeListener(window,d,this.__uu);
}else{qx.event.Idle.getInstance().addListener(c,this.__ux,this);
}},__uw:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__uu);
}else{qx.event.Idle.getInstance().removeListener(c,this.__ux,this);
}},__ux:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__uw();
}});
})();
(function(){var n="interval",m="-1000px",l="mshtml",k="",j="qx.bom.IframeHistory",i="qx/static/blank.html",h="state",g='<html><body><div id="state">',f='</div></body></html>',d="hidden",a="qx.client",c="undefined",b="absolute";
if(qx.core.Variant.isSet(a,l)){qx.Class.define(j,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__uB();
},members:{__uy:null,__uz:false,__uA:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__uA=this._getHash();
},_setHash:function(x){qx.bom.History.prototype._setHash.call(this,x);
this.__uA=this._encode(x);
},_readState:function(){if(!this.__uz){return this._decode(this._getHash());
}var p=this.__uy.contentWindow.document;
var q=p.getElementById(h);
return q?this._decode(q.innerText):k;
},_writeState:function(u){var u=this._encode(u);
this._setHash(u);
this.__uA=u;

try{var v=this.__uy.contentWindow.document;
v.open();
v.write(g+u+f);
v.close();
}catch(z){}},__uB:function(){this.__uF(function(){qx.event.Idle.getInstance().addListener(n,this.__uC,this);
});
},__uC:function(e){var B=null;
var A=this._getHash();

if(!this.__uE(A)){B=this.__uD(A);
}else{B=this._readState();
}
if(qx.lang.Type.isString(B)&&B!=this.getState()){this._onHistoryLoad(B);
}},__uD:function(C){C=this._decode(C);
this._writeState(C);
return C;
},__uE:function(y){return qx.lang.Type.isString(y)&&y==this.__uA;
},__uF:function(o){this.__uy=this.__uG();
document.body.appendChild(this.__uy);
this.__uH(function(){this._writeState(this.getState());

if(o){o.call(this);
}},this);
},__uG:function(){var w=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(i)});
w.style.visibility=d;
w.style.position=b;
w.style.left=m;
w.style.top=m;
return w;
},__uH:function(r,s,t){if(typeof t===c){t=0;
}
if(!this.__uy.contentWindow||!this.__uy.contentWindow.document){if(t>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__uH(r,s,++t);
},this,10);
return;
}this.__uz=true;
r.call(s||window);
}},destruct:function(){this.__uy=null;
qx.event.Idle.getInstance().addListener(n,this.__uC,this);
}});
}})();
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
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(q);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(p){this._shortcut.setEnabled(p);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(s){this.fireDataEvent(n,s);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",S="Escape",R="qx.event.type.Data",Q="_applyShortcut",P="PrintScreen",O="NumLock",N="5",M="8",L="execute",K="Meta",J="0",t="2",u="Shift",r="You can only specify one non modifier key!",s="3",p="/",q="Delete",n="String",o="changeEnabled",v="*",w="qx.bom.Shortcut",B="6",A="4",D="1",C="Alt",F="Not a valid key name for a shortcut: ",E="PageDown",y="Whitespaces are not allowed within shortcuts",I="_applyEnabled",H="7",G="a",x="z",z="9";
qx.Class.define(w,{extend:qx.core.Object,construct:function(T){qx.core.Object.call(this);
this.__pl={};
this.__pm=null;

if(T!=null){this.setShortcut(T);
}this.initEnabled();
},events:{"execute":R},properties:{enabled:{init:true,check:l,event:o,apply:I},shortcut:{check:n,apply:Q,nullable:true},autoRepeat:{check:l,init:false}},members:{__pl:g,__pm:g,execute:function(U){this.fireDataEvent(L,U);
},__pn:function(event){if(this.getEnabled()&&this.__pp(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__po:function(event){if(this.getEnabled()&&this.__pp(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bd,be){if(bd){qx.event.Registration.addListener(document.documentElement,h,this.__pn,this);
qx.event.Registration.addListener(document.documentElement,d,this.__po,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__pn,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__po,this);
}},_applyShortcut:function(V,W){if(V){if(V.search(/[\s]+/)!=-1){var ba=y;
this.error(ba);
throw new Error(ba);
}this.__pl={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__pm=null;
var X;
var a=[];

while(V.length>0&&X!=-1){X=V.search(/[-+]+/);
a.push((V.length==1||X==-1)?V:V.substring(0,X));
V=V.substring(X+1);
}var Y=a.length;

for(var i=0;i<Y;i++){var bb=this.__pr(a[i]);

switch(bb){case f:case u:case K:case C:this.__pl[bb]=true;
break;
case m:var ba=F+a[i];
this.error(ba);
throw ba;
default:if(this.__pm){var ba=r;
this.error(ba);
throw ba;
}this.__pm=bb;
}}}return true;
},__pp:function(e){var bc=this.__pm;

if(!bc){return ;
}if((!this.__pl.Shift&&e.isShiftPressed())||(this.__pl.Shift&&!e.isShiftPressed())||(!this.__pl.Control&&e.isCtrlPressed())||(this.__pl.Control&&!e.isCtrlPressed())||(!this.__pl.Meta&&e.isMetaPressed())||(this.__pl.Meta&&!e.isMetaPressed())||(!this.__pl.Alt&&e.isAltPressed())||(this.__pl.Alt&&!e.isAltPressed())){return false;
}
if(bc==e.getKeyIdentifier()){return true;
}return false;
},__pq:{esc:S,ctrl:f,print:P,del:q,pageup:b,pagedown:E,numlock:O,numpad_0:J,numpad_1:D,numpad_2:t,numpad_3:s,numpad_4:A,numpad_5:N,numpad_6:B,numpad_7:H,numpad_8:M,numpad_9:z,numpad_divide:p,numpad_multiply:v,numpad_minus:c,numpad_plus:k},__pr:function(bi){var bj=qx.event.handler.Keyboard;
var bk=m;

if(bj.isValidKeyIdentifier(bi)){return bi;
}
if(bi.length==1&&bi>=G&&bi<=x){return bi.toUpperCase();
}bi=bi.toLowerCase();
var bk=this.__pq[bi]||qx.lang.String.firstUp(bi);

if(bj.isValidKeyIdentifier(bk)){return bk;
}else{return m;
}},toString:function(){var bh=this.__pm;
var bg=[];

for(var bf in this.__pl){if(this.__pl[bf]){bg.push(qx.locale.Key.getKeyName(j,bf));
}}
if(bh){bg.push(qx.locale.Key.getKeyName(j,bh));
}return bg.join(k);
}},destruct:function(){this.setEnabled(false);
this.__pl=this.__pm=null;
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
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__qG:false,_setAllowMenuOpenHover:function(s){this.__qG=s;
},_isAllowMenuOpenHover:function(){return this.__qG;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var t=new qx.ui.core.Spacer;
this._add(t,{flex:1});
return t;
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
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){qx.ui.core.LayoutItem.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(b){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__kk:null,__kl:false,__km:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__kl){this.__kl=false;
}else{this.__kl=true;
o.execute(this);
}}this.fireEvent(n);
},__kn:function(e){if(this.__kl){this.__kl=false;
return;
}this.__kl=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__km);
}
if(p!=null){this.__km=p.addListener(n,this.__kn,this);
}var t=this.__kk;

if(t==null){this.__kk=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__kk=null;
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
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){qx.ui.form.Button.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(m,n){if(n){n.removeListener(j,this._onMenuChange,this);
n.resetOpener();
}
if(m){m.addListener(j,this._onMenuChange,this);
m.setOpener(this);
m.removeState(h);
m.removeState(f);
}},open:function(o){var p=this.getMenu();

if(p){qx.ui.menu.Manager.getInstance().hideAll();
p.setOpener(this);
p.open();
if(o){var q=p.getSelectables()[0];

if(q){p.setSelectedButton(q);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){qx.ui.form.Button.prototype._onMouseDown.call(this,e);
var t=this.getMenu();

if(t){if(!t.isVisible()){this.open();
}else{t.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var s=this.getMenu();

if(s){if(!s.isVisible()){this.open();
}else{s.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(i,j,k){qx.ui.form.MenuButton.call(this,i,j,k);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(m){qx.ui.form.MenuButton.prototype.open.call(this,m);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var l=this.getMenu();

if(l&&l.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bq="keypress",bp="qx.debug",bo="interval",bn="keydown",bm="on",bl="mousedown",bk="keyup",bj="blur",bi="Enter",bh="__nw",ba="__nv",bg="__nu",bd="Up",Y="Escape",X="qx.ui.menu.Manager",bc="Left",bb="Down",be="Right",W="singleton",bf="Space";
qx.Class.define(X,{type:W,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nu=[];
var n=document.body;
var o=qx.event.Registration;
o.addListener(window.document.documentElement,bl,this._onMouseDown,this,true);
o.addListener(n,bn,this._onKeyUpDown,this,true);
o.addListener(n,bk,this._onKeyUpDown,this,true);
o.addListener(n,bq,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bj,this.hideAll,this);
this.__nv=new qx.event.Timer;
this.__nv.addListener(bo,this._onOpenInterval,this);
this.__nw=new qx.event.Timer;
this.__nw.addListener(bo,this._onCloseInterval,this);
},members:{__nx:null,__ny:null,__nv:null,__nw:null,__nu:null,_getChild:function(bA,bB,bC,bD){var bE=bA.getChildren();
var length=bE.length;
var bF;

for(var i=bB;i<length&&i>=0;i+=bC){bF=bE[i];

if(bF.isEnabled()&&!bF.isAnonymous()){return bF;
}}
if(bD){i=i==length?0:length-1;

for(;i!=bB;i+=bC){bF=bE[i];

if(bF.isEnabled()&&!bF.isAnonymous()){return bF;
}}}return null;
},_isInMenu:function(w){while(w){if(w instanceof qx.ui.menu.Menu){return true;
}w=w.getLayoutParent();
}return false;
},_getMenuButton:function(bz){while(bz){if(bz instanceof qx.ui.menu.AbstractButton){return bz;
}bz=bz.getLayoutParent();
}return null;
},add:function(U){if(qx.core.Variant.isSet(bp,bm)){if(!(U instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+U);
}}var V=this.__nu;
V.push(U);
U.setZIndex(1e6+V.length);
},remove:function(u){if(qx.core.Variant.isSet(bp,bm)){if(!(u instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+u);
}}var v=this.__nu;

if(v){qx.lang.Array.remove(v,u);
}},hideAll:function(){var R=this.__nu;

if(R){for(var i=R.length-1;i>=0;i--){R[i].exclude();
}}},getActiveMenu:function(){var Q=this.__nu;
return Q.length>0?Q[Q.length-1]:null;
},scheduleOpen:function(t){this.cancelClose(t);
if(t.isVisible()){if(this.__nx){this.cancelOpen(this.__nx);
}}else if(this.__nx!=t){this.__nx=t;
this.__nv.restartWith(t.getOpenInterval());
}},scheduleClose:function(d){this.cancelOpen(d);
if(!d.isVisible()){if(this.__ny){this.cancelClose(this.__ny);
}}else if(this.__ny!=d){this.__ny=d;
this.__nw.restartWith(d.getCloseInterval());
}},cancelOpen:function(bx){if(this.__nx==bx){this.__nv.stop();
this.__nx=null;
}},cancelClose:function(bw){if(this.__ny==bw){this.__nw.stop();
this.__ny=null;
}},_onOpenInterval:function(e){this.__nv.stop();
this.__nx.open();
this.__nx=null;
},_onCloseInterval:function(e){this.__nw.stop();
this.__ny.exclude();
this.__ny=null;
},_onMouseDown:function(e){var by=e.getTarget();
by=qx.ui.core.Widget.getWidgetByElement(by,true);
if(by==null){this.hideAll();
return;
}if(by.getMenu&&by.getMenu()&&by.getMenu().isVisible()){return;
}if(this.__nu.length>0&&!this._isInMenu(by)){this.hideAll();
}},__nz:{"Enter":1,"Space":1},__nA:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var S=this.getActiveMenu();

if(!S){return;
}var T=e.getKeyIdentifier();

if(this.__nA[T]||(this.__nz[T]&&S.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var h=this.getActiveMenu();

if(!h){return;
}var j=e.getKeyIdentifier();
var l=this.__nA[j];
var k=this.__nz[j];

if(l){switch(j){case bd:this._onKeyPressUp(h);
break;
case bb:this._onKeyPressDown(h);
break;
case bc:this._onKeyPressLeft(h);
break;
case be:this._onKeyPressRight(h);
break;
case Y:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(k){var m=h.getSelectedButton();

if(m){switch(j){case bi:this._onKeyPressEnter(h,m,e);
break;
case bf:this._onKeyPressSpace(h,m,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(br){var bs=br.getSelectedButton();
var bt=br.getChildren();
var bv=bs?br.indexOf(bs)-1:bt.length-1;
var bu=this._getChild(br,bv,-1,true);
if(bu){br.setSelectedButton(bu);
}else{br.resetSelectedButton();
}},_onKeyPressDown:function(p){var q=p.getSelectedButton();
var s=q?p.indexOf(q)+1:0;
var r=this._getChild(p,s,1,true);
if(r){p.setSelectedButton(r);
}else{p.resetSelectedButton();
}},_onKeyPressLeft:function(G){var L=G.getOpener();

if(!L){return;
}if(L instanceof qx.ui.menu.AbstractButton){var I=L.getLayoutParent();
I.resetOpenedButton();
I.setSelectedButton(L);
}else if(L instanceof qx.ui.menubar.Button){var K=L.getMenuBar().getMenuButtons();
var H=K.indexOf(L);
if(H===-1){return;
}var M=null;
var length=K.length;

for(var i=1;i<=length;i++){var J=K[(H-i+length)%length];

if(J.isEnabled()){M=J;
break;
}}
if(M&&M!=L){M.open(true);
}}},_onKeyPressRight:function(x){var z=x.getSelectedButton();
if(z){var y=z.getMenu();

if(y){x.setOpenedButton(z);
var F=this._getChild(y,0,1);

if(F){y.setSelectedButton(F);
}return;
}}else if(!x.getOpenedButton()){var F=this._getChild(x,0,1);

if(F){x.setSelectedButton(F);

if(F.getMenu()){x.setOpenedButton(F);
}return;
}}var D=x.getOpener();
if(D instanceof qx.ui.menu.Button&&z){while(D){D=D.getLayoutParent();

if(D instanceof qx.ui.menu.Menu){D=D.getOpener();

if(D instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!D){return;
}}if(D instanceof qx.ui.menubar.Button){var C=D.getMenuBar().getMenuButtons();
var A=C.indexOf(D);
if(A===-1){return;
}var E=null;
var length=C.length;

for(var i=1;i<=length;i++){var B=C[(A+i)%length];

if(B.isEnabled()){E=B;
break;
}}
if(E&&E!=D){E.open(true);
}}},_onKeyPressEnter:function(a,b,e){if(b.hasListener(bq)){var c=e.clone();
c.setBubbles(false);
c.setTarget(b);
b.dispatchEvent(c);
}this.hideAll();
},_onKeyPressSpace:function(N,O,e){if(O.hasListener(bq)){var P=e.clone();
P.setBubbles(false);
P.setTarget(O);
O.dispatchEvent(P);
}}},destruct:function(){var g=qx.event.Registration;
var f=document.body;
g.removeListener(window.document.documentElement,bl,this._onMouseDown,this,true);
g.removeListener(f,bn,this._onKeyUpDown,this,true);
g.removeListener(f,bk,this._onKeyUpDown,this,true);
g.removeListener(f,bq,this._onKeyPress,this,true);
this._disposeObjects(ba,bh);
this._disposeArray(bg);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__cI:function(t,u,v,w){var x=this.getChildrenContainer();

if(x===this){t=h+t;
}return (x[t])(u,v,w);
},getChildren:function(){return this.__cI(c);
},hasChildren:function(){return this.__cI(f);
},add:function(C,D){return this.__cI(j,C,D);
},remove:function(p){return this.__cI(a,p);
},removeAll:function(){return this.__cI(d);
},indexOf:function(E){return this.__cI(l,E);
},addAt:function(z,A,B){this.__cI(g,z,A,B);
},addBefore:function(m,n,o){this.__cI(i,m,n,o);
},addAfter:function(q,r,s){this.__cI(k,q,r,s);
},removeAt:function(y){this.__cI(e,y);
}}});
})();
(function(){var ba="slidebar",Y="Integer",X="resize",W="qx.ui.core.Widget",V="selected",U="visible",T="Boolean",S="mouseout",R="excluded",Q="menu",bp="_applySelectedButton",bo="_applyOpenInterval",bn="_applySpacingY",bm="_blocker",bl="_applyCloseInterval",bk="_applyBlockerColor",bj="_applyIconColumnWidth",bi="mouseover",bh="qx.ui.menu.Menu",bg="Color",be="Number",bf="_applyOpenedButton",bc="_applySpacingX",bd="_applyBlockerOpacity",bb="_applyArrowColumnWidth";
qx.Class.define(bh,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var F=this.getApplicationRoot();
F.add(this);
this.addListener(bi,this._onMouseOver);
this.addListener(S,this._onMouseOut);
this.addListener(X,this._onResize,this);
F.addListener(X,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(F);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:Q},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:R},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:Y,apply:bc,init:0,themeable:true},spacingY:{check:Y,apply:bn,init:0,themeable:true},iconColumnWidth:{check:Y,init:0,themeable:true,apply:bj},arrowColumnWidth:{check:Y,init:0,themeable:true,apply:bb},blockerColor:{check:bg,init:null,nullable:true,apply:bk,themeable:true},blockerOpacity:{check:be,init:1,apply:bd,themeable:true},selectedButton:{check:W,nullable:true,apply:bp},openedButton:{check:W,nullable:true,apply:bf},opener:{check:W,nullable:true},openInterval:{check:Y,themeable:true,init:250,apply:bo},closeInterval:{check:Y,themeable:true,init:250,apply:bl},blockBackground:{check:T,themeable:true,init:false}},members:{__mB:null,__mC:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mE();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mE();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(br){this.placeToPoint(br);
this.__mE();
this.show();
this._placementTarget=br;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var y=[];
var z=this.getChildren();

for(var i=0;i<z.length;i++){if(z[i].isEnabled()){y.push(z[i]);
}}return y;
},_applyIconColumnWidth:function(g,h){this._getMenuLayout().setIconColumnWidth(g);
},_applyArrowColumnWidth:function(G,H){this._getMenuLayout().setArrowColumnWidth(G);
},_applySpacingX:function(D,E){this._getMenuLayout().setColumnSpacing(D);
},_applySpacingY:function(w,x){this._getMenuLayout().setSpacing(w);
},_applyVisibility:function(j,k){qx.ui.core.Widget.prototype._applyVisibility.call(this,j,k);
var l=qx.ui.menu.Manager.getInstance();

if(j===U){l.add(this);
var m=this.getParentMenu();

if(m){m.setOpenedButton(this.getOpener());
}}else if(k===U){l.remove(this);
var m=this.getParentMenu();

if(m&&m.getOpenedButton()==this.getOpener()){m.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mD();
},__mD:function(){if(this.isVisible()){if(this.getBlockBackground()){var C=this.getZIndex();
this._blocker.blockContent(C-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var n=this.getOpener();

if(!n||!(n instanceof qx.ui.menu.AbstractButton)){return null;
}
while(n&&!(n instanceof qx.ui.menu.Menu)){n=n.getLayoutParent();
}return n;
},_applySelectedButton:function(t,u){if(u){u.removeState(V);
}
if(t){t.addState(V);
}},_applyOpenedButton:function(M,N){if(N){N.getMenu().exclude();
}
if(M){M.getMenu().open();
}},_applyBlockerColor:function(d,f){this._blocker.setColor(d);
},_applyBlockerOpacity:function(O,P){this._blocker.setOpacity(O);
},getChildrenContainer:function(){return this.getChildControl(ba,true)||this;
},_createChildControlImpl:function(o){var p;

switch(o){case ba:var p=new qx.ui.menu.MenuSlideBar();
var r=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var q=p.getLayout();
p.setLayout(r);
q.dispose();
var s=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<s.length;i++){p.add(s[i]);
}this.removeListener(X,this._onResize,this);
p.getChildrenContainer().addListener(X,this._onResize,this);
this._add(p);
break;
}return p||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,o);
},_getMenuLayout:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(ba)){return this.getChildControl(ba).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mE:function(){var b=this._getMenuBounds();

if(!b){this.addListenerOnce(X,this.__mE,this);
return;
}var a=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var c=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(b.height+top);
this.moveTo(c,0);
});
}else if(top+b.height>a){this._assertSlideBar(function(){this.setHeight(a-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bq){if(this.hasChildControl(ba)){return bq.call(this);
}this.__mC=bq;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(ba);

if(this.__mC){this.__mC.call(this);
delete this.__mC;
}},_onResize:function(){if(this.isVisible()){var v=this._placementTarget;

if(!v){return;
}else if(v instanceof qx.ui.core.Widget){this.placeToWidget(v);
}else if(v.top!==undefined){this.placeToPoint(v);
}else{throw new Error("Unknown target: "+v);
}this.__mE();
}},_onMouseOver:function(e){var J=qx.ui.menu.Manager.getInstance();
J.cancelClose(this);
var K=e.getTarget();

if(K.isEnabled()&&K instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(K);
var I=K.getMenu&&K.getMenu();

if(I){I.setOpener(K);
J.scheduleOpen(I);
this.__mB=I;
}else{var L=this.getOpenedButton();

if(L){J.scheduleClose(L.getMenu());
}
if(this.__mB){J.cancelOpen(this.__mB);
this.__mB=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var A=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var B=this.getOpenedButton();
B?this.setSelectedButton(B):this.resetSelectedButton();
if(B){A.cancelClose(B.getMenu());
}if(this.__mB){A.cancelOpen(this.__mB);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(X,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bm);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__qf:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__qf=[0,0,0,0];
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
},getColumnSizes:function(){return this.__qf||null;
}},destruct:function(){this.__qf=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true,dereference:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(x){var y;

switch(x){case t:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:0});
break;
case s:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:1});
break;
case q:y=new qx.ui.basic.Label;
y.setAnonymous(true);
this._add(y,{column:2});
break;
case r:y=new qx.ui.basic.Image;
y.setAnonymous(true);
this._add(y,{column:3});
break;
}return y||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,x);
},_forwardStates:{selected:1},getChildrenSizes:function(){var E=0,F=0,G=0,K=0;

if(this._isChildControlVisible(t)){var L=this.getChildControl(t);
E=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}
if(this._isChildControlVisible(s)){var I=this.getChildControl(s);
F=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}
if(this._isChildControlVisible(q)){var H=this.getChildControl(q);
G=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(r)){var J=this.getChildControl(r);
K=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}return [E,F,G,K];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var D=e.getData();

if(qx.core.Variant.isSet(o,m)){var B=e.getOldData();

if(!B){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!D){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var C=D!=null?D.toString():h;
this.getChildControl(q).setValue(C);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var w=this.getCommand();

if(w!=null){this.getChildControl(q).setValue(w.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(t).setSource(M);
}else{this._excludeChildControl(t);
}},_applyLabel:function(z,A){if(z){this._showChildControl(s).setValue(z);
}else{this._excludeChildControl(s);
}},_applyMenu:function(u,v){if(v){v.resetOpener();
v.removeState(n);
}
if(u){this._showChildControl(r);
u.setOpener(this);
u.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(h,name,j){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(k,m){var w=this._getLayoutChildren();
var v;
var o;
var p=[];

for(var i=0,l=w.length;i<l;i++){v=w[i];
o=v.getLayoutProperties().column;
p[o]=v;
}var u=this.__nj(w[0]);
var x=u.getColumnSizes();
var r=u.getSpacingX();
var q=qx.lang.Array.sum(x)+r*(x.length-1);

if(q<k){x[1]+=k-q;
}var y=0,top=0;
var s=qx.ui.layout.Util;

for(var i=0,l=x.length;i<l;i++){v=p[i];

if(v){var n=v.getSizeHint();
var top=s.computeVerticalAlignOffset(v.getAlignY()||c,n.height,m,0,0);
var t=s.computeHorizontalAlignOffset(v.getAlignX()||d,n.width,x[i],v.getMarginLeft(),v.getMarginRight());
v.renderLayout(y+t,top,n.width,n.height);
}y+=x[i]+r;
}},__nj:function(D){while(!(D instanceof qx.ui.menu.Menu)){D=D.getLayoutParent();
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
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){qx.ui.core.Widget.call(this);
var w=this.getChildControl(p);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(t){var u;

switch(t){case m:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteForward,this);
u.setFocusable(false);
this._addAt(u,2);
break;
case n:u=new qx.ui.form.RepeatButton;
u.addListener(k,this._onExecuteBackward,this);
u.setFocusable(false);
this._addAt(u,0);
break;
case l:u=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){u.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(u);
break;
case p:u=new qx.ui.core.scroll.ScrollPane();
u.addListener(d,this._onResize,this);
u.addListener(c,this._onScroll,this);
u.addListener(i,this._onScroll,this);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(x){var y=this.getChildControl(p);

if(this.getOrientation()===q){y.scrollByX(x);
}else{y.scrollByY(x);
}},scrollTo:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollToX(r);
}else{s.scrollToY(r);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(m);
var E=this.getChildControl(n);
if(D==o){F.removeState(o);
E.removeState(o);
F.addState(q);
E.addState(q);
}else if(D==q){F.removeState(q);
E.removeState(q);
F.addState(o);
E.addState(o);
}
if(C==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(G[0]){G[0].dispose();
}
if(G[1]){G[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var z=this.getInnerSize();
var B=content.getBounds();
var A=(this.getOrientation()===q)?B.width>z.width:B.height>z.height;

if(A){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var I=this.getChildControl(p);

if(this.getOrientation()===q){var H=I.getScrollX();
var J=I.getScrollMaxX();
}else{var H=I.getScrollY();
var J=I.getScrollMaxY();
}this.getChildControl(n).setEnabled(H>0);
this.getChildControl(m).setEnabled(H<J);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__nb",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__nb=new qx.event.AcceleratingTimer();
this.__nb.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__nc:null,__nb:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__nd();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__nc){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ne();
},_applyEnabled:function(q,r){qx.ui.form.Button.prototype._applyEnabled.call(this,q,r);

if(!q){this.removeState(n);
this.removeState(m);
this.__ne();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__nb.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__nb.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__nd();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__nc){this.execute();
}}this.__ne();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__nc){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ne();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__nd();
}},_onInterval:function(e){this.__nc=true;
this.fireEvent(b);
},__nd:function(){this.fireEvent(g);
this.__nc=false;
this.__nb.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ne:function(){this.fireEvent(d);
this.__nb.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__qg",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qg=new qx.event.Timer(this.getInterval());
this.__qg.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__qg:null,__qh:null,start:function(){this.__qg.setInterval(this.getFirstInterval());
this.__qg.start();
},stop:function(){this.__qg.stop();
this.__qh=null;
},_onInterval:function(){this.__qg.stop();

if(this.__qh==null){this.__qh=this.getInterval();
}this.__qh=Math.max(this.getMinimum(),this.__qh-this.getDecrease());
this.__qg.setInterval(this.__qh);
this.__qg.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var p="resize",o="scrollY",n="update",m="scrollX",l="_applyScrollX",k="_applyScrollY",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",i="appear",h="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",g="qx.event.type.Event",d="qx.ui.core.scroll.ScrollPane",f="scroll";
qx.Class.define(d,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(p,this._onUpdate);
var G=this.getContentElement();
G.addListener(f,this._onScroll,this);
G.addListener(i,this._onAppear,this);
},events:{update:g},properties:{scrollX:{check:j,apply:l,event:m,init:0},scrollY:{check:h,apply:k,event:o,init:0}},members:{add:function(H){var I=this._getChildren()[0];

if(I){this._remove(I);
I.removeListener(p,this._onUpdate,this);
}
if(H){this._add(H);
H.addListener(p,this._onUpdate,this);
}},remove:function(F){if(F){this._remove(F);
F.removeListener(p,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(n);
},_onScroll:function(e){var D=this.getContentElement();
this.setScrollX(D.getScrollX());
this.setScrollY(D.getScrollY());
},_onAppear:function(e){var B=this.getContentElement();
var w=this.getScrollX();
var z=B.getScrollX();

if(w!=z){B.scrollToX(w);
}var C=this.getScrollY();
var A=B.getScrollY();

if(C!=A){B.scrollToY(C);
}},getItemTop:function(E){var top=0;

do{top+=E.getBounds().top;
E=E.getLayoutParent();
}while(E&&E!==this);
return top;
},getItemBottom:function(J){return this.getItemTop(J)+J.getBounds().height;
},getItemLeft:function(M){var N=0;
var parent;

do{N+=M.getBounds().left;
parent=M.getLayoutParent();

if(parent){N+=parent.getInsets().left;
}M=parent;
}while(M&&M!==this);
return N;
},getItemRight:function(s){return this.getItemLeft(s)+s.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.width-r.width);
}return 0;
},getScrollMaxY:function(){var b=this.getInnerSize();
var a=this.getScrollSize();

if(b&&a){return Math.max(0,a.height-b.height);
}return 0;
},scrollToX:function(K){var L=this.getScrollMaxX();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollX(K);
},scrollToY:function(t){var u=this.getScrollMaxY();

if(t<0){t=0;
}else if(t>u){t=u;
}this.setScrollY(t);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(c){this.getContentElement().scrollToX(c);
},_applyScrollY:function(v){this.getContentElement().scrollToY(v);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mF",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mF=new qx.event.AcceleratingTimer();
this.__mF.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mF:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mF.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mF.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mF.stop();
}}},destruct:function(){this._disposeObjects(f);
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
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
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
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){qx.ui.menu.AbstractButton.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(m,n){m?this.addState(j):this.removeState(j);
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
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="changeSelection",c="on",b="__lJ",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__lJ=new qx.data.Array();
this.__lJ.addListener(f,this.__lM,this);
this.addListener(d,this.__lL,this);
},events:{changeModelSelection:a},members:{__lJ:null,__lK:false,__lL:function(){if(this.__lK){return;
}var o=this.getSelection();
var m=[];

for(var i=0;i<o.length;i++){var p=o[i];
var n=p.getModel?p.getModel():null;

if(n!==null){m.push(n);
}}if(m.length===o.length){this.setModelSelection(m);
}},__lM:function(){this.__lK=true;
var r=this.getSelectables(true);
var t=[];
var s=this.__lJ.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__lK=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__lL();
}},getModelSelection:function(){return this.__lJ;
},setModelSelection:function(k){if(!k){this.__lJ.removeAll();
return;
}
if(qx.core.Variant.isSet(e,c)){this.assertArray(k,h);
}k.unshift(this.__lJ.getLength());
k.unshift(0);
var l=this.__lJ.splice.apply(this.__lJ,k);
l.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__a",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(L){qx.core.Object.call(this);
this.__a=[];
this.addListener(b,this.__b,this);

if(L!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(F){var G=this.__a;
var H;

for(var i=0,l=arguments.length;i<l;i++){H=arguments[i];

if(qx.lang.Array.contains(G,H)){continue;
}H.addListener(p,this._onItemChangeChecked,this);
G.push(H);
H.setGroup(this);
if(H.getValue()){this.setSelection([H]);
}}if(!this.isAllowEmptySelection()&&G.length>0&&!this.getSelection()[0]){this.setSelection([G[0]]);
}},remove:function(J){var K=this.__a;

if(qx.lang.Array.contains(K,J)){qx.lang.Array.remove(K,J);
if(J.getGroup()===this){J.resetGroup();
}J.removeListener(p,this._onItemChangeChecked,this);
if(J.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var I=e.getTarget();

if(I.getValue()){this.setSelection([I]);
}else if(this.getSelection()[0]==I){this.resetSelection();
}},_applyInvalidMessage:function(O,P){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(O);
}},_applyValid:function(s,t){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(s);
}},_applyEnabled:function(C,D){var E=this.__a;

if(C==null){for(var i=0,l=E.length;i<l;i++){E[i].resetEnabled();
}}else{for(var i=0,l=E.length;i<l;i++){E[i].setEnabled(C);
}}},_applyAllowEmptySelection:function(u,v){if(!u&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var w=this.getSelection()[0];
var y=this.__a;
var x=y.indexOf(w);

if(x==-1){return;
}var i=0;
var length=y.length;
if(this.getWrap()){x=(x+1)%length;
}else{x=Math.min(x+1,length-1);
}
while(i<length&&!y[x].getEnabled()){x=(x+1)%length;
i++;
}this.setSelection([y[x]]);
},selectPrevious:function(){var z=this.getSelection()[0];
var B=this.__a;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A-1+length)%length;
}else{A=Math.max(A-1,0);
}
while(i<length&&!B[A].getEnabled()){A=(A-1+length)%length;
i++;
}this.setSelection([B[A]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var N=e.getData()[0];
var M=e.getOldData()[0];

if(M){M.setValue(false);
}
if(N){N.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__lU,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__lU:function(name,e){var t=e.getData();
var p=t.value;
var n=t.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(t.name.indexOf){var s=t.name.indexOf(f)!=-1?t.name.indexOf(f):t.name.length;
var q=t.name.indexOf(h)!=-1?t.name.indexOf(h):t.name.length;

if(s<q){var m=t.name.substring(0,s);
var r=t.name.substring(s+1,t.name.length);

if(r[0]!=h){r=f+r;
}var o=name+h+m+g+r;
}else if(q<s){var m=t.name.substring(0,q);
var r=t.name.substring(q,t.name.length);
var o=name+h+m+g+r;
}else{var o=name+h+t.name+g;
}}else{var o=name+h+t.name+g;
}}else{var o=name+f+t.name;
}this.fireDataEvent(c,{value:p,name:o,old:n});
}}});
})();
(function(){var Q="change",P="add",O="remove",N="order",M="qx.event.type.Data",L="The parameter must be an array.",K="",J="qx.data.Array",I="?",H="changeBubble",E="number",G="on",F="changeLength",D="qx.debug";
qx.Class.define(J,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(bb){qx.core.Object.call(this);
if(bb==undefined){this.__lG=[];
}else if(arguments.length>1){this.__lG=[];

for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
}}else if(typeof bb==E){this.__lG=new Array(bb);
}else if(bb instanceof Array){this.__lG=qx.lang.Array.clone(bb);
}else{this.__lG=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(this.__lG[i],null,i);
}this.__lH();
},events:{"change":M,"changeLength":M},members:{__lG:null,concat:function(x){if(x){var y=this.__lG.concat(x);
}else{var y=this.__lG.concat();
}return new qx.data.Array(y);
},join:function(n){return this.__lG.join(n);
},pop:function(){var f=this.__lG.pop();
this.__lH();
this._applyEventPropagation(null,f,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:O,items:[f]},null);
return f;
},push:function(e){for(var i=0;i<arguments.length;i++){this.__lG.push(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__lG.reverse();
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},shift:function(){var d=this.__lG.shift();
this.__lH();
this._applyEventPropagation(null,d,this.length-1);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:O,items:[d]},null);
return d;
},slice:function(U,V){return new qx.data.Array(this.__lG.slice(U,V));
},splice:function(bd,be,bf){var bl=this.__lG.length;
var bi=this.__lG.splice.apply(this.__lG,arguments);
if(this.__lG.length!=bl){this.__lH();
}var bj=be>0;
var bg=arguments.length>2;
var bh=null;

if(bj||bg){if(this.__lG.length>bl){var bk=P;
}else if(this.__lG.length<bl){var bk=O;
bh=bi;
}else{var bk=N;
}this.fireDataEvent(Q,{start:bd,end:this.length-1,type:bk,items:bh},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,bd+i);
}this.fireDataEvent(H,{value:this,name:I,old:bi});
for(var i=0;i<bi.length;i++){this._applyEventPropagation(null,bi[i],i);
}return (new qx.data.Array(bi));
},sort:function(m){this.__lG.sort.apply(this.__lG,arguments);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},unshift:function(w){for(var i=arguments.length-1;i>=0;i--){this.__lG.unshift(arguments[i]);
this.__lH();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__lG;
},getItem:function(a){return this.__lG[a];
},setItem:function(g,h){var j=this.__lG[g];
if(j===h){return;
}this.__lG[g]=h;
this._applyEventPropagation(h,j,g);
if(this.length!=this.__lG.length){this.__lH();
}this.fireDataEvent(Q,{start:g,end:g,type:P,items:[h]},null);
},getLength:function(){return this.length;
},indexOf:function(bc){return this.__lG.indexOf(bc);
},toString:function(){if(this.__lG!=null){return this.__lG.toString();
}return K;
},contains:function(o){return this.__lG.indexOf(o)!==-1;
},copy:function(){return this.concat();
},insertAt:function(k,l){this.splice(k,0,l);
},insertBefore:function(R,S){var T=this.indexOf(R);

if(T==-1){this.push(S);
}else{this.splice(T,0,S);
}},insertAfter:function(z,A){var B=this.indexOf(z);

if(B==-1||B==(this.length-1)){this.push(A);
}else{this.splice(B+1,0,A);
}},removeAt:function(q){return this.splice(q,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}var v=this.getLength();
var u=this.__lG.concat();
this.__lG.length=0;
this.__lH();
this.fireDataEvent(Q,{start:0,end:v-1,type:O,items:u},null);
},append:function(r){if(r instanceof qx.data.Array){r=r.toArray();
}if(qx.core.Variant.isSet(D,G)){qx.core.Assert.assertArray(r,L);
}for(var i=0;i<r.length;i++){this._applyEventPropagation(r[i],null,this.__lG.length+i);
}Array.prototype.push.apply(this.__lG,r);
var s=this.length;
this.__lH();
this.fireDataEvent(Q,{start:s,end:this.length-1,type:P,items:r},null);
},remove:function(Y){var ba=this.indexOf(Y);

if(ba!=-1){this.splice(ba,1);
return Y;
}},equals:function(C){if(this.length!==C.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==C.getItem(i)){return false;
}}return true;
},sum:function(){var b=0;

for(var i=0;i<this.length;i++){b+=this.getItem(i);
}return b;
},max:function(){var t=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>t){t=this.getItem(i);
}}return t===undefined?null:t;
},min:function(){var c=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<c){c=this.getItem(i);
}}return c===undefined?null:c;
},forEach:function(W,X){for(var i=0;i<this.__lG.length;i++){W.call(X,this.__lG[i]);
}},__lH:function(){var p=this.length;
this.length=this.__lG.length;
this.fireDataEvent(F,this.length,p);
}},destruct:function(){for(var i=0;i<this.__lG.length;i++){this._applyEventPropagation(null,this.__lG[i],i);
}this.__lG=null;
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
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(d,f){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,d,f);

if(d){var g=this.getGroup();

if(g){g.setSelection([this]);
}}},_applyGroup:function(i,j){if(j){j.remove(this);
}
if(i){i.add(this);
}},_onExecute:function(e){var h=this.getGroup();

if(h&&h.getAllowEmptySelection()||!h){this.toggleValue();
}else{this.setValue(true);
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
(function(){var y="Please use the 'scrollbar' property instead.",x="qx.client",w="auto",v="mousedown",u="qx.debug",t="load",s="visible",r="hidden",q="help",p="overflowY",bd="mouseup",bc="losecapture",bb="contextmenu",ba="overflowX",Y="none",X="on",W="display",V="scroll",U="no",T="Boolean",F="px",G="url(",D=")",E="gecko",B="repeat",C="div",z="_applyScrollbar",A="DOMNodeInserted",H="_applyNativeHelp",I="yes",L="scrolling",K="/",N="appear",M="__yI",P="mshtml",O="block",J="qx.ui.embed.Iframe",S="iframe",R="qx/static/blank.gif",Q="absolute";
qx.Class.define(J,{extend:qx.ui.embed.AbstractIframe,construct:function(bi){if(bi!=null){this.__yH=bi;
}qx.ui.embed.AbstractIframe.call(this,bi);
qx.event.Registration.addListener(document.body,v,this.block,this,true);
qx.event.Registration.addListener(document.body,bd,this.release,this,true);
qx.event.Registration.addListener(document.body,bc,this.release,this,true);
this.__yI=this._createBlockerElement();
this.getContainerElement().add(this.__yI);

if(qx.core.Variant.isSet(x,E)){this.addListenerOnce(N,function(e){var j=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(j,A,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:S},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:T,init:false,apply:H},scrollbar:{check:[w,U,I],nullable:true,themeable:true,apply:z}},members:{__yH:null,__yI:null,renderLayout:function(k,top,l,m){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,k,top,l,m);
var o=F;
var n=this.getInsets();
this.__yI.setStyles({"left":n.left+o,"top":n.top+o,"width":(l-n.left-n.right)+o,"height":(m-n.top-n.bottom)+o});
},_createContentElement:function(){var a=new qx.html.Iframe(this.__yH);
a.addListener(t,this._onIframeLoad,this);
return a;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var f=new qx.html.Element(C);
f.setStyles({"zIndex":20,"position":Q,"display":Y});
if(qx.core.Variant.isSet(x,P)){f.setStyles({backgroundImage:G+qx.util.ResourceManager.getInstance().toUri(R)+D,backgroundRepeat:B});
}return f;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(t);
},block:function(){this.__yI.setStyle(W,O);
},release:function(){this.__yI.setStyle(W,Y);
},_applyNativeContextMenu:function(bk,bl){if(bk!==false&&bl!==false){return;
}var bm=this.getDocument();

if(!bm){return;
}
try{var bn=bm.documentElement;
}catch(e){return ;
}
if(bl===false){qx.event.Registration.removeListener(bn,bb,this._onNativeContextMenu,this,true);
}
if(bk===false){qx.event.Registration.addListener(bn,bb,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(x,{"mshtml":function(bg,bh){var document=this.getDocument();

if(!document){return;
}
try{if(bh===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(bg===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var bf=this.getContentElement().getDomElement();
var be=bf.src;
if(be.charAt(be.length-1)==K){be=be.substring(0,be.length-1);
}
if(be!=this.getSource()){qx.bom.Iframe.getWindow(bf).stop();
bf.src=this.getSource();
}},_applyScrollbar:function(b){this.getContentElement().setAttribute(L,b);
},setOverflow:function(g,h){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(arguments[0] instanceof Array){this.setOverflowX(g[0]);
this.setOverflowY(g[1]);
}else{this.setOverflowX(g);
this.setOverflowY(h);
}},resetOverflow:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.resetOverflowX();
this.resetOverflowY();
},setOverflowX:function(d){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(qx.core.Variant.isSet(u,X)){qx.core.Assert.assertInArray(d,[r,s,V,w,null]);
}this.getContentElement().setStyle(ba,d);
},getOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getContentElement().getStyle(ba);
},initOverflowX:function(i){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowX(i);
},resetOverflowX:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowX(null);
},setOverflowY:function(bj){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);

if(qx.core.Variant.isSet(u,X)){qx.core.Assert.assertInArray(bj,[r,s,V,w,null]);
}this.getContentElement().setStyle(p,bj);
},getOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getContentElement().getStyle(p);
},initOverflowY:function(c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowY(c);
},resetOverflowY:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setOverflowY(null);
}},destruct:function(){this._disposeObjects(M);
qx.event.Registration.removeListener(document.body,v,this.block,this,true);
qx.event.Registration.removeListener(document.body,bd,this.release,this,true);
qx.event.Registration.removeListener(document.body,bc,this.release,this,true);
}});
})();
(function(){var g="source",f="name",e="qx.html.Iframe",d="qx.event.type.Event",c="iframe";
qx.Class.define(e,{extend:qx.html.Element,construct:function(m,n,o){qx.html.Element.call(this,c,n,o);
this._setProperty(g,m);
},events:{"load":d},members:{_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name==g){var b=this.getDomElement();
qx.bom.Iframe.setSource(b,a);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var l=this.getDomElement();

if(l){return qx.bom.Iframe.getWindow(l);
}else{return null;
}},getDocument:function(){var i=this.getDomElement();

if(i){return qx.bom.Iframe.getDocument(i);
}else{return null;
}},getBody:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getBody(h);
}else{return null;
}},setSource:function(p){this._setProperty(g,p);
return this;
},getSource:function(){return this._getProperty(g);
},setName:function(name){this.setAttribute(f,name);
return this;
},getName:function(){return this.getAttribute(f);
},reload:function(){var k=this.getDomElement();

if(k){var j=this.getSource();
this.setSource(null);
this.setSource(j);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__ni:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__ni=null;
},getInsets:function(){if(this.__ni){return this.__ni;
}var l=this._getDefaultInsets();
return this.__ni={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__ni=null;
}},destruct:function(){this.__ni=null;
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
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(r){qx.ui.decoration.Abstract.call(this);

if(r!=null){this.setBackgroundColor(r);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__nn:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nn;
},getMarkup:function(){if(this.__nn){return this.__nn;
}var m={position:a,top:0,left:0};
var n=this._generateBackgroundMarkup(m);
return this.__nn=n;
},resize:function(i,j,k){var l=this.getInsets();
i.style.width=(j-l.left-l.right)+h;
i.style.height=(k-l.top-l.bottom)+h;
i.style.left=l.left+h;
i.style.top=l.top+h;
},tint:function(o,p){var q=qx.theme.manager.Color.getInstance();

if(p==null){p=this.getBackgroundColor();
}o.style.backgroundColor=q.resolve(p)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__nn=null;
}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(y){qx.ui.core.Widget.call(this);

if(y!=null){this.setHtml(y);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(s,t){var u=this.getContentElement();
u.setAttribute(a,s||m);
u.setStyles({"padding":i,"border":o});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(c,z);
},_applySelectable:function(v){qx.ui.core.Widget.prototype._applySelectable.call(this,v);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,v?n:o);
this.getContentElement().setStyle(l,v?n:o);
}},_applyFont:function(p,q){var r=p?qx.theme.manager.Font.getInstance().resolve(p).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(r);
},_applyTextColor:function(w,x){if(w){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(w));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var s="",r='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',q='.qxappender .type-instance{color:#565656;font-weight:bold}',p="qx.log.appender.Element",o='.qxappender .level-info{background:#DEEDFA}',n='.qxappender .type-stringify{color:#565656;font-weight:bold}',m='.qxappender .type-number{color:#155791;font-weight:normal;}',l="qxappender",k='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',j='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',e='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',i='.qxappender .level-error{background:#FFE2D5}',h='.qxappender .level-debug{background:white}',d='.qxappender .type-key{color:#565656;font-style:italic}',c='.qxappender .level-user{background:#E3EFE9}',g='.qxappender .level-warn{background:#FFF7D5}',f='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(p,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
var b=[h,o,g,i,c,f,m,e,r,k,d,j,q,n];
qx.bom.Stylesheet.createElement(b.join(s));
qx.log.Logger.register(this);
},members:{__ur:null,setElement:function(t){this.clear();
if(t){qx.bom.element.Class.add(t,l);
}this.__ur=t;
},clear:function(){var u=this.__ur;
if(u){u.innerHTML=s;
}},process:function(v){var w=this.__ur;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this.__ur=null;
}});
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
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var X="scrollbar-y",W="scrollbar-x",V="pane",U="auto",T="corner",S="on",R="changeVisibility",Q="scroll",P="_computeScrollbars",O="off",H="scrollY",N="qx.ui.core.scroll.AbstractScrollArea",K="abstract",F="update",E="scrollX",J="mousewheel",I="scrollbarY",L="scrollbarX",D="horizontal",M="scrollarea",G="vertical";
qx.Class.define(N,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:K,construct:function(){qx.ui.core.Widget.call(this);
var a=new qx.ui.layout.Grid();
a.setColumnFlex(0,1);
a.setRowFlex(0,1);
this._setLayout(a);
this.addListener(J,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:M},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbarY:{check:[U,S,O],init:U,themeable:true,apply:P},scrollbar:{group:[L,I]}},members:{_createChildControlImpl:function(z){var A;

switch(z){case V:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(F,this._computeScrollbars,this);
A.addListener(E,this._onScrollPaneX,this);
A.addListener(H,this._onScrollPaneY,this);
this._add(A,{row:0,column:0});
break;
case W:A=this._createScrollBar(D);
A.setMinWidth(0);
A.exclude();
A.addListener(Q,this._onScrollBarX,this);
A.addListener(R,this._onChangeScrollbarXVisibility,this);
this._add(A,{row:1,column:0});
break;
case X:A=this._createScrollBar(G);
A.setMinHeight(0);
A.exclude();
A.addListener(Q,this._onScrollBarY,this);
A.addListener(R,this._onChangeScrollbarYVisibility,this);
this._add(A,{row:0,column:1});
break;
case T:A=new qx.ui.core.Widget();
A.setWidth(0);
A.setHeight(0);
A.exclude();
this._add(A,{row:1,column:1});
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,z);
},getPaneSize:function(){return this.getChildControl(V).getInnerSize();
},getItemTop:function(v){return this.getChildControl(V).getItemTop(v);
},getItemBottom:function(Y){return this.getChildControl(V).getItemBottom(Y);
},getItemLeft:function(w){return this.getChildControl(V).getItemLeft(w);
},getItemRight:function(t){return this.getChildControl(V).getItemRight(t);
},scrollToX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollTo(ba);
},scrollByX:function(x){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollBy(x);
},getScrollX:function(){var f=this.getChildControl(W,true);
return f?f.getPosition():0;
},scrollToY:function(y){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollTo(y);
},scrollByY:function(u){qx.ui.core.queue.Manager.flush();
this.getChildControl(X).scrollBy(u);
},getScrollY:function(){var g=this.getChildControl(X,true);
return g?g.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(V).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(V).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var c=this._isChildControlVisible(W);
var d=this._isChildControlVisible(X);
var b=(d)?this.getChildControl(X,true):(c?this.getChildControl(W,true):null);

if(b){b.scrollBySteps(e.getWheelDelta());
e.stop();
}},_onChangeScrollbarXVisibility:function(e){var B=this._isChildControlVisible(W);
var C=this._isChildControlVisible(X);

if(!B){this.scrollToX(0);
}B&&C?this._showChildControl(T):this._excludeChildControl(T);
},_onChangeScrollbarYVisibility:function(e){var h=this._isChildControlVisible(W);
var i=this._isChildControlVisible(X);

if(!i){this.scrollToY(0);
}h&&i?this._showChildControl(T):this._excludeChildControl(T);
},_computeScrollbars:function(){var p=this.getChildControl(V);
var content=p.getChildren()[0];

if(!content){this._excludeChildControl(W);
this._excludeChildControl(X);
return;
}var j=this.getInnerSize();
var o=p.getInnerSize();
var m=p.getScrollSize();
if(!o||!m){return;
}var q=this.getScrollbarX();
var r=this.getScrollbarY();

if(q===U&&r===U){var n=m.width>j.width;
var s=m.height>j.height;
if((n||s)&&!(n&&s)){if(n){s=m.height>o.height;
}else if(s){n=m.width>o.width;
}}}else{var n=q===S;
var s=r===S;
if(m.width>(n?o.width:j.width)&&q===U){n=true;
}
if(m.height>(n?o.height:j.height)&&r===U){s=true;
}}if(n){var l=this.getChildControl(W);
l.show();
l.setMaximum(Math.max(0,m.width-o.width));
l.setKnobFactor((m.width===0)?0:o.width/m.width);
}else{this._excludeChildControl(W);
}
if(s){var k=this.getChildControl(X);
k.show();
k.setMaximum(Math.max(0,m.height-o.height));
k.setKnobFactor((m.height===0)?0:o.height/m.height);
}else{this._excludeChildControl(X);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var I="single",H="Boolean",G="one",F="changeSelection",E="mouseup",D="mousedown",C="losecapture",B="multi",A="_applyQuickSelection",z="mouseover",s="_applySelectionMode",y="__mO",v="_applyDragSelection",r="qx.ui.core.MMultiSelectionHandling",q="removeItem",u="keypress",t="qx.event.type.Data",w="addItem",p="additive",x="mousemove";
qx.Mixin.define(r,{construct:function(){var n=this.SELECTION_MANAGER;
var m=this.__mO=new n(this);
this.addListener(D,m.handleMouseDown,m);
this.addListener(E,m.handleMouseUp,m);
this.addListener(z,m.handleMouseOver,m);
this.addListener(x,m.handleMouseMove,m);
this.addListener(C,m.handleLoseCapture,m);
this.addListener(u,m.handleKeyPress,m);
this.addListener(w,m.handleAddItem,m);
this.addListener(q,m.handleRemoveItem,m);
m.addListener(F,this._onSelectionChange,this);
},events:{"changeSelection":t},properties:{selectionMode:{check:[I,B,p,G],init:I,apply:s},dragSelection:{check:H,init:false,apply:v},quickSelection:{check:H,init:false,apply:A}},members:{__mO:null,selectAll:function(){this.__mO.selectAll();
},isSelected:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not test if "+L+" is selected, because it is not a child element!");
}return this.__mO.isItemSelected(L);
},addToSelection:function(o){if(!qx.ui.core.Widget.contains(this,o)){throw new Error("Could not add + "+o+" to selection, because it is not a child element!");
}this.__mO.addItem(o);
},removeFromSelection:function(h){if(!qx.ui.core.Widget.contains(this,h)){throw new Error("Could not remove "+h+" from selection, because it is not a child element!");
}this.__mO.removeItem(h);
},selectRange:function(f,g){this.__mO.selectItemRange(f,g);
},resetSelection:function(){this.__mO.clearSelection();
},setSelection:function(a){for(var i=0;i<a.length;i++){if(!qx.ui.core.Widget.contains(this,a[i])){throw new Error("Could not select "+a[i]+", because it is not a child element!");
}}
if(a.length===0){this.resetSelection();
}else{var b=this.getSelection();

if(!qx.lang.Array.equals(b,a)){this.__mO.replaceSelection(a);
}}},getSelection:function(){return this.__mO.getSelection();
},getSortedSelection:function(){return this.__mO.getSortedSelection();
},isSelectionEmpty:function(){return this.__mO.isSelectionEmpty();
},getSelectionContext:function(){return this.__mO.getSelectionContext();
},_getManager:function(){return this.__mO;
},getSelectables:function(M){return this.__mO.getSelectables(M);
},invertSelection:function(){this.__mO.invertSelection();
},_getLeadItem:function(){var l=this.__mO.getMode();

if(l===I||l===G){return this.__mO.getSelectedItem();
}else{return this.__mO.getLeadItem();
}},_applySelectionMode:function(j,k){this.__mO.setMode(j);
},_applyDragSelection:function(c,d){this.__mO.setDrag(c);
},_applyQuickSelection:function(J,K){this.__mO.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(F,e.getData());
}},destruct:function(){this._disposeObjects(y);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ks:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__kt:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__kt[name];
s[t]();
}else{var u=this.__ks[name];
s[u](q);
}}}});
})();
(function(){var E="one",D="single",C="selected",B="additive",A="multi",z="PageUp",y="under",x="Left",w="lead",v="Down",bd="Up",bc="Boolean",bb="PageDown",ba="anchor",Y="End",X="Home",W="Right",V="right",U="click",T="above",L="left",M="Escape",J="A",K="Space",H="_applyMode",I="interval",F="changeSelection",G="qx.event.type.Data",N="quick",O="key",Q="__or",P="abstract",S="drag",R="qx.ui.core.selection.Abstract";
qx.Class.define(R,{type:P,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oo={};
},events:{"changeSelection":G},properties:{mode:{check:[D,A,B,E],init:D,apply:H},drag:{check:bc,init:false},quick:{check:bc,init:false}},members:{__op:0,__oq:0,__or:null,__os:null,__ot:null,__ou:null,__ov:null,__ow:null,__ox:null,__oy:null,__oz:null,__oA:null,__oB:null,__oC:null,__oD:null,__oE:null,__oF:null,__oo:null,__oG:null,__oH:null,_userInteraction:false,__oI:null,getSelectionContext:function(){return this.__oE;
},selectAll:function(){var cU=this.getMode();

if(cU==D||cU==E){throw new Error("Can not select all items in selection mode: "+cU);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cr){this._setSelectedItem(cr);
var cs=this.getMode();

if(cs!==D&&cs!==E){this._setLeadItem(cr);
this._setAnchorItem(cr);
}this._scrollItemIntoView(cr);
this._fireChange();
},addItem:function(bB){var bC=this.getMode();

if(bC===D||bC===E){this._setSelectedItem(bB);
}else{if(!this._getAnchorItem()){this._setAnchorItem(bB);
}this._setLeadItem(bB);
this._addToSelection(bB);
}this._scrollItemIntoView(bB);
this._fireChange();
},removeItem:function(t){this._removeFromSelection(t);

if(this.getMode()===E&&this.isSelectionEmpty()){var u=this._getFirstSelectable();

if(u){this.addItem(u);
}if(u==t){return;
}}
if(this.getLeadItem()==t){this._setLeadItem(null);
}
if(this._getAnchorItem()==t){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cv,cw){var cx=this.getMode();

if(cx==D||cx==E){throw new Error("Can not select multiple items in selection mode: "+cx);
}this._selectItemRange(cv,cw);
this._setAnchorItem(cv);
this._setLeadItem(cw);
this._scrollItemIntoView(cw);
this._fireChange();
},clearSelection:function(){if(this.getMode()==E){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bq){var br=this.getMode();

if(br==E||br===D){if(bq.length>1){throw new Error("Could not select more than one items in mode: "+br+"!");
}
if(bq.length==1){this.selectItem(bq[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bq);
}},getSelectedItem:function(){var s=this.getMode();

if(s===D||s===E){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__oo);
},getSortedSelection:function(){var cj=this.getSelectables();
var ci=qx.lang.Object.getValues(this.__oo);
ci.sort(function(a,b){return cj.indexOf(a)-cj.indexOf(b);
});
return ci;
},isItemSelected:function(bs){var bt=this._selectableToHashCode(bs);
return this.__oo[bt]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__oo);
},invertSelection:function(){var cW=this.getMode();

if(cW===D||cW===E){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cV=this.getSelectables();

for(var i=0;i<cV.length;i++){this._toggleInSelection(cV[i]);
}this._fireChange();
},_setLeadItem:function(cS){var cT=this.__oF;

if(cT!==null){this._styleSelectable(cT,w,false);
}
if(cS!==null){this._styleSelectable(cS,w,true);
}this.__oF=cS;
},getLeadItem:function(){return this.__oF!==null?this.__oF:null;
},_setAnchorItem:function(cX){var cY=this.__oG;

if(cY){this._styleSelectable(cY,ba,false);
}
if(cX){this._styleSelectable(cX,ba,true);
}this.__oG=cX;
},_getAnchorItem:function(){return this.__oG!==null?this.__oG:null;
},_isSelectable:function(cP){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bE=event.getTarget();
if(bE&&this._isSelectable(bE)){return bE;
}return null;
},_selectableToHashCode:function(cL){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bw,bx,by){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bm){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cR){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bS,bT){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bD){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(cQ){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bW,bX){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bU,bV){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(ck,cl){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bh,bi){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bh===E){var bj=this._getFirstSelectable();

if(bj){this._setSelectedItem(bj);
this._scrollItemIntoView(bj);
}}this._fireChange();
},handleMouseOver:function(event){if(this.__oI!=null&&this.__oI!=this._getScroll().top){this.__oI=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var cq=this.getMode();

if(cq!==E&&cq!==D){this._userInteraction=false;
return;
}var cp=this._getSelectableFromMouseEvent(event);

if(cp===null){this._userInteraction=false;
return;
}this._setSelectedItem(cp);
this._fireChange(N);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bO=this._getSelectableFromMouseEvent(event);

if(bO===null){this._userInteraction=false;
return;
}var bQ=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bN=event.isShiftPressed();
if(this.isItemSelected(bO)&&!bN&&!bQ&&!this.getDrag()){this.__oH=bO;
this._userInteraction=false;
return;
}else{this.__oH=null;
}this._scrollItemIntoView(bO);
switch(this.getMode()){case D:case E:this._setSelectedItem(bO);
break;
case B:this._setLeadItem(bO);
this._setAnchorItem(bO);
this._toggleInSelection(bO);
break;
case A:this._setLeadItem(bO);
if(bN){var bP=this._getAnchorItem();

if(bP===null){bP=this._getFirstSelectable();
this._setAnchorItem(bP);
}this._selectItemRange(bP,bO,bQ);
}else if(bQ){this._setAnchorItem(bO);
this._toggleInSelection(bO);
}else{this._setAnchorItem(bO);
this._setSelectedItem(bO);
}break;
}var bR=this.getMode();

if(this.getDrag()&&bR!==D&&bR!==E&&!bN&&!bQ){this.__ov=this._getLocation();
this.__os=this._getScroll();
this.__ow=event.getDocumentLeft()+this.__os.left;
this.__ox=event.getDocumentTop()+this.__os.top;
this.__oy=true;
this._capture();
}this._fireChange(U);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var r=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var o=event.isShiftPressed();

if(!r&&!o&&this.__oH){var p=this._getSelectableFromMouseEvent(event);

if(p===null||!this.isItemSelected(p)){this._userInteraction=false;
return;
}var q=this.getMode();

if(q===B){this._removeFromSelection(p);
}else{this._setSelectedItem(p);

if(this.getMode()===A){this._setLeadItem(p);
this._setAnchorItem(p);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oy){return;
}this.__oz=event.getDocumentLeft();
this.__oA=event.getDocumentTop();
this._userInteraction=true;
var cu=this.__oz+this.__os.left;

if(cu>this.__ow){this.__oB=1;
}else if(cu<this.__ow){this.__oB=-1;
}else{this.__oB=0;
}var ct=this.__oA+this.__os.top;

if(ct>this.__ox){this.__oC=1;
}else if(ct<this.__ox){this.__oC=-1;
}else{this.__oC=0;
}var location=this.__ov;

if(this.__oz<location.left){this.__op=this.__oz-location.left;
}else if(this.__oz>location.right){this.__op=this.__oz-location.right;
}else{this.__op=0;
}
if(this.__oA<location.top){this.__oq=this.__oA-location.top;
}else if(this.__oA>location.bottom){this.__oq=this.__oA-location.bottom;
}else{this.__oq=0;
}if(!this.__or){this.__or=new qx.event.Timer(100);
this.__or.addListener(I,this._onInterval,this);
}this.__or.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var cK=e.getData();

if(this.getMode()===E&&this.isSelectionEmpty()){this.addItem(cK);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oy){return;
}if(this.__oD){this._fireChange(U);
}delete this.__oy;
delete this.__ot;
delete this.__ou;
this._releaseCapture();
if(this.__or){this.__or.stop();
}},_onInterval:function(e){this._scrollBy(this.__op,this.__oq);
this.__os=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cG=this._getDimension();
var cz=Math.max(0,Math.min(this.__oz-this.__ov.left,cG.width))+this.__os.left;
var cy=Math.max(0,Math.min(this.__oA-this.__ov.top,cG.height))+this.__os.top;
if(this.__ot===cz&&this.__ou===cy){return;
}this.__ot=cz;
this.__ou=cy;
var cI=this._getAnchorItem();
var cB=cI;
var cE=this.__oB;
var cH,cA;

while(cE!==0){cH=cE>0?this._getRelatedSelectable(cB,V):this._getRelatedSelectable(cB,L);
if(cH!==null){cA=this._getSelectableLocationX(cH);
if((cE>0&&cA.left<=cz)||(cE<0&&cA.right>=cz)){cB=cH;
continue;
}}break;
}var cF=this.__oC;
var cD,cC;

while(cF!==0){cD=cF>0?this._getRelatedSelectable(cB,y):this._getRelatedSelectable(cB,T);
if(cD!==null){cC=this._getSelectableLocationY(cD);
if((cF>0&&cC.top<=cy)||(cF<0&&cC.bottom>=cy)){cB=cD;
continue;
}}break;
}var cJ=this.getMode();

if(cJ===A){this._selectItemRange(cI,cB);
}else if(cJ===B){if(this.isItemSelected(cI)){this._selectItemRange(cI,cB,true);
}else{this._deselectItemRange(cI,cB);
}this._setAnchorItem(cB);
}this._fireChange(S);
},__oJ:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var ce,cd;
var cg=event.getKeyIdentifier();
var cf=this.getMode();
var ca=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cb=event.isShiftPressed();
var cc=false;

if(cg===J&&ca){if(cf!==D&&cf!==E){this._selectAllItems();
cc=true;
}}else if(cg===M){if(cf!==D&&cf!==E){this._clearSelection();
cc=true;
}}else if(cg===K){var bY=this.getLeadItem();

if(bY&&!cb){if(ca||cf===B){this._toggleInSelection(bY);
}else{this._setSelectedItem(bY);
}cc=true;
}}else if(this.__oJ[cg]){cc=true;

if(cf===D||cf==E){ce=this._getSelectedItem();
}else{ce=this.getLeadItem();
}
if(ce!==null){switch(cg){case X:cd=this._getFirstSelectable();
break;
case Y:cd=this._getLastSelectable();
break;
case bd:cd=this._getRelatedSelectable(ce,T);
break;
case v:cd=this._getRelatedSelectable(ce,y);
break;
case x:cd=this._getRelatedSelectable(ce,L);
break;
case W:cd=this._getRelatedSelectable(ce,V);
break;
case z:cd=this._getPage(ce,true);
break;
case bb:cd=this._getPage(ce,false);
break;
}}else{switch(cg){case X:case v:case W:case bb:cd=this._getFirstSelectable();
break;
case Y:case bd:case x:case z:cd=this._getLastSelectable();
break;
}}if(cd!==null){switch(cf){case D:case E:this._setSelectedItem(cd);
break;
case B:this._setLeadItem(cd);
break;
case A:if(cb){var ch=this._getAnchorItem();

if(ch===null){this._setAnchorItem(ch=this._getFirstSelectable());
}this._setLeadItem(cd);
this._selectItemRange(ch,cd,ca);
}else{this._setAnchorItem(cd);
this._setLeadItem(cd);

if(!ca){this._setSelectedItem(cd);
}}break;
}this.__oI=this._getScroll().top;
this._scrollItemIntoView(cd);
}}
if(cc){event.stop();
this._fireChange(O);
}this._userInteraction=false;
},_selectAllItems:function(){var c=this.getSelectables();

for(var i=0,l=c.length;i<l;i++){this._addToSelection(c[i]);
}},_clearSelection:function(){var bz=this.__oo;

for(var bA in bz){this._removeFromSelection(bz[bA]);
}this.__oo={};
},_selectItemRange:function(bG,bH,bI){var bL=this._getSelectableRange(bG,bH);
if(!bI){var bK=this.__oo;
var bM=this.__oK(bL);

for(var bJ in bK){if(!bM[bJ]){this._removeFromSelection(bK[bJ]);
}}}for(var i=0,l=bL.length;i<l;i++){this._addToSelection(bL[i]);
}},_deselectItemRange:function(cM,cN){var cO=this._getSelectableRange(cM,cN);

for(var i=0,l=cO.length;i<l;i++){this._removeFromSelection(cO[i]);
}},__oK:function(cm){var co={};
var cn;

for(var i=0,l=cm.length;i<l;i++){cn=cm[i];
co[this._selectableToHashCode(cn)]=cn;
}return co;
},_getSelectedItem:function(){for(var bp in this.__oo){return this.__oo[bp];
}return null;
},_setSelectedItem:function(be){if(this._isSelectable(be)){var bf=this.__oo;
var bg=this._selectableToHashCode(be);

if(!bf[bg]||qx.lang.Object.hasMinLength(bf,2)){this._clearSelection();
this._addToSelection(be);
}}},_addToSelection:function(bn){var bo=this._selectableToHashCode(bn);

if(!this.__oo[bo]&&this._isSelectable(bn)){this.__oo[bo]=bn;
this._styleSelectable(bn,C,true);
this.__oD=true;
}},_toggleInSelection:function(bu){var bv=this._selectableToHashCode(bu);

if(!this.__oo[bv]){this.__oo[bv]=bu;
this._styleSelectable(bu,C,true);
}else{delete this.__oo[bv];
this._styleSelectable(bu,C,false);
}this.__oD=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__oo[bl]!=null){delete this.__oo[bl];
this._styleSelectable(bk,C,false);
this.__oD=true;
}},_replaceMultiSelection:function(d){var h=false;
var m,k;
var f={};

for(var i=0,l=d.length;i<l;i++){m=d[i];

if(this._isSelectable(m)){k=this._selectableToHashCode(m);
f[k]=m;
}}var n=d[0];
var g=m;
var j=this.__oo;

for(var k in j){if(f[k]){delete f[k];
}else{m=j[k];
delete j[k];
this._styleSelectable(m,C,false);
h=true;
}}for(var k in f){m=j[k]=f[k];
this._styleSelectable(m,C,true);
h=true;
}if(!h){return false;
}this._scrollItemIntoView(g);
this._setLeadItem(n);
this._setAnchorItem(n);
this.__oD=true;
this._fireChange();
},_fireChange:function(bF){if(this.__oD){this.__oE=bF||null;
this.fireDataEvent(F,this.getSelection());
delete this.__oD;
}}},destruct:function(){this._disposeObjects(Q);
this.__oo=this.__oH=this.__oG=null;
this.__oF=null;
}});
})();
(function(){var B="vertical",A="under",z="above",y="qx.ui.core.selection.Widget",x="left",w="right";
qx.Class.define(y,{extend:qx.ui.core.selection.Abstract,construct:function(P){qx.ui.core.selection.Abstract.call(this);
this.__nf=P;
},members:{__nf:null,_isSelectable:function(j){return this._isItemSelectable(j)&&j.getLayoutParent()===this.__nf;
},_selectableToHashCode:function(h){return h.$$hash;
},_styleSelectable:function(e,f,g){g?e.addState(f):e.removeState(f);
},_capture:function(){this.__nf.capture();
},_releaseCapture:function(){this.__nf.releaseCapture();
},_isItemSelectable:function(C){if(this._userInteraction){return C.isVisible()&&C.isEnabled();
}else{return C.isVisible();
}},_getWidget:function(){return this.__nf;
},_getLocation:function(){var a=this.__nf.getContentElement().getDomElement();
return a?qx.bom.element.Location.get(a):null;
},_getDimension:function(){return this.__nf.getInnerSize();
},_getSelectableLocationX:function(Q){var R=Q.getBounds();

if(R){return {left:R.left,right:R.left+R.width};
}},_getSelectableLocationY:function(u){var v=u.getBounds();

if(v){return {top:v.top,bottom:v.top+v.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(b,c){},_scrollItemIntoView:function(t){this.__nf.scrollChildIntoView(t);
},getSelectables:function(K){var L=false;

if(!K){L=this._userInteraction;
this._userInteraction=true;
}var O=this.__nf.getChildren();
var M=[];
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];

if(this._isItemSelectable(N)){M.push(N);
}}this._userInteraction=L;
return M;
},_getSelectableRange:function(D,E){if(D===E){return [D];
}var I=this.__nf.getChildren();
var F=[];
var H=false;
var G;

for(var i=0,l=I.length;i<l;i++){G=I[i];

if(G===D||G===E){if(H){F.push(G);
break;
}else{H=true;
}}
if(H&&this._isItemSelectable(G)){F.push(G);
}}return F;
},_getFirstSelectable:function(){var d=this.__nf.getChildren();

for(var i=0,l=d.length;i<l;i++){if(this._isItemSelectable(d[i])){return d[i];
}}return null;
},_getLastSelectable:function(){var J=this.__nf.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__nf.getOrientation()===B;
var o=this.__nf.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===z)||(!p&&m===x)){for(var i=n-1;i>=0;i--){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}else if((p&&m===A)||(!p&&m===w)){for(var i=n+1;i<o.length;i++){q=o[i];

if(this._isItemSelectable(q)){return q;
}}}return null;
},_getPage:function(r,s){if(s){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__nf=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return this._isItemSelectable(s)&&s.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var o=this._getWidget();
return {left:o.getScrollX(),top:o.getScrollY()};
},_scrollBy:function(p,q){var r=this._getWidget();
r.scrollByX(p);
r.scrollByY(q);
},_getPage:function(b,c){var g=this.getSelectables();
var length=g.length;
var k=g.indexOf(b);
if(k===-1){throw new Error("Invalid lead item: "+b);
}var d=this._getWidget();
var m=d.getScrollY();
var innerHeight=d.getInnerSize().height;
var top,f,l;

if(c){var j=m;
var i=k;
while(1){for(;i>=0;i--){top=d.getItemTop(g[i]);
if(top<j){l=i+1;
break;
}}if(l==null){var n=this._getFirstSelectable();
return n==b?null:n;
}if(l>=k){j-=innerHeight+m-d.getItemBottom(b);
l=null;
continue;
}return g[l];
}}else{var h=innerHeight+m;
var i=k;
while(1){for(;i<length;i++){f=d.getItemBottom(g[i]);
if(f>h){l=i-1;
break;
}}if(l==null){var e=this._getLastSelectable();
return e==b?null:e;
}if(l<=k){h+=d.getItemTop(b)-m;
l=null;
continue;
}return g[l];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(v){var w=v.getBounds();

if(w){var top=this._getWidget().getItemTop(v);
return {top:top,bottom:top+w.height};
}},_isSelectable:function(x){return this._isItemSelectable(x)&&x instanceof qx.ui.tree.AbstractTreeItem;
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(l){var o=false;

if(!l){o=this._userInteraction;
this._userInteraction=true;
}var n=this._getWidget();
var p=[];

if(n.getRoot()!=null){var m=n.getRoot().getItems(true,!!l,n.getHideRoot());

for(var i=0;i<m.length;i++){if(this._isSelectable(m[i])){p.push(m[i]);
}}}this._userInteraction=o;
return p;
},_getSelectableRange:function(f,g){if(f===g){return [f];
}var h=this.getSelectables();
var j=h.indexOf(f);
var k=h.indexOf(g);

if(j<0||k<0){return [];
}
if(j<k){return h.slice(j,k+1);
}else{return h.slice(k,j+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var u=this.getSelectables();

if(u.length>0){return u[u.length-1];
}else{return null;
}},_getRelatedSelectable:function(q,r){var s=this._getWidget();
var t=null;

switch(r){case d:t=s.getPreviousNodeOf(q,false);
break;
case b:t=s.getNextNodeOf(q,false);
break;
case c:case e:break;
}
if(!t){return null;
}
if(this._isSelectable(t)){return t;
}else{return this._getRelatedSelectable(t,r);
}}}});
})();
(function(){var o="dblclick",n="click",m="Boolean",l="excluded",k="visible",j="qx.event.type.Data",h="_applyOpenMode",g="Space",f="Left",d="Enter",C="changeOpenMode",B="_applyRootOpenClose",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x="_applyHideRoot",w="changeRoot",v="_applyRoot",u="__ru",t="keypress",r="none",s="pane",p="Right",q="qx.ui.tree.AbstractTreeItem";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection,qx.ui.form.IForm],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection,qx.ui.form.MForm],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__ru=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(s).add(this.__ru);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(t,this._onKeyPress,this);
},events:{addItem:j,removeItem:j},properties:{openMode:{check:[n,o,r],init:o,apply:h,event:C,themeable:true},root:{check:q,init:null,nullable:true,event:w,apply:v},hideRoot:{check:m,init:false,apply:x},rootOpenClose:{check:m,init:false,apply:B},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__ru:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ru;
},_applyRoot:function(a,b){var c=this.getChildrenContainer();

if(b){c.remove(b);

if(b.hasChildren()){c.remove(b.getChildrenContainer());
}}
if(a){c.add(a);

if(a.hasChildren()){c.add(a.getChildrenContainer());
}a.setVisibility(this.getHideRoot()?l:k);
a.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(bg,bh){var bi=this.getRoot();

if(!bi){return;
}bi.setVisibility(bg?l:k);
bi.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(P,Q){var R=this.getRoot();

if(!R){return;
}R.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ru;
},getNextNodeOf:function(D,E){if((E!==false||D.isOpen())&&D.hasChildren()){return D.getChildren()[0];
}
while(D){var parent=D.getParent();

if(!parent){return null;
}var G=parent.getChildren();
var F=G.indexOf(D);

if(F>-1&&F<G.length-1){return G[F+1];
}D=parent;
}return null;
},getPreviousNodeOf:function(H,I){var parent=H.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==H){return null;
}}}else{if(H==this.getRoot()){return null;
}}var L=parent.getChildren();
var J=L.indexOf(H);

if(J>0){var K=L[J-1];

while((I!==false||K.isOpen())&&K.hasChildren()){var M=K.getChildren();
K=M[M.length-1];
}return K;
}else{return parent;
}},getNextSiblingOf:function(bd){if(bd==this.getRoot()){return null;
}var parent=bd.getParent();
var be=parent.getChildren();
var bf=be.indexOf(bd);

if(bf<be.length-1){return be[bf+1];
}return null;
},getPreviousSiblingOf:function(ba){if(ba==this.getRoot()){return null;
}var parent=ba.getParent();
var bb=parent.getChildren();
var bc=bb.indexOf(ba);

if(bc>0){return bb[bc-1];
}return null;
},getItems:function(S,T){if(this.getRoot()!=null){return this.getRoot().getItems(S,T,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(N){while(N){if(N==this){return null;
}
if(N instanceof qx.ui.tree.AbstractTreeItem){return N;
}N=N.getLayoutParent();
}return null;
},_applyOpenMode:function(V,W){if(W==n){this.removeListener(n,this._onOpen,this);
}else if(W==o){this.removeListener(o,this._onOpen,this);
}
if(V==n){this.addListener(n,this._onOpen,this);
}else if(V==o){this.addListener(o,this._onOpen,this);
}},_onOpen:function(e){var O=this.getTreeItem(e.getTarget());

if(!O||!O.isOpenable()){return;
}O.setOpen(!O.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var Y=e.getData();
for(var i=0;i<Y.length;i++){var X=Y[i];
while(X.getParent()!=null){X=X.getParent();
X.setOpen(true);
}}},_onKeyPress:function(e){var U=this._getLeadItem();

if(U!==null){switch(e.getKeyIdentifier()){case f:if(U.isOpenable()&&U.isOpen()){U.setOpen(false);
}break;
case p:if(U.isOpenable()&&!U.isOpen()){U.setOpen(true);
}break;
case d:case g:if(U.isOpenable()){U.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(c){this.assertNumber(c);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="__pO",u="_applyOrientation",t="appear",s="opera",r="PositiveInteger",q="mshtml",o="mouseup",p="Number",m="_applyPosition",n="scrollbar",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(Q){qx.ui.core.Widget.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,s)){this.addListener(t,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(Q!=null){this.setOrientation(Q);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[k,h],init:k,apply:u},maximum:{check:r,apply:w,init:100},position:{check:p,init:0,apply:m,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__pN:null,__pO:null,_getScrollPaneElement:function(){if(!this.__pO){this.__pO=new qx.html.Element();
}return this.__pO;
},renderLayout:function(L,top,M,N){var O=qx.ui.core.Widget.prototype.renderLayout.call(this,L,top,M,N);
this._updateScrollBar();
return O;
},_getContentHint:function(){var K=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__pN?100:K,maxWidth:this.__pN?null:K,minWidth:this.__pN?null:K,height:this.__pN?K:100,maxHeight:this.__pN?K:null,minHeight:this.__pN?K:null};
},_applyEnabled:function(A,B){qx.ui.core.Widget.prototype._applyEnabled.call(this,A,B);
this._updateScrollBar();
},_applyMaximum:function(C){this._updateScrollBar();
},_applyPosition:function(P){var content=this.getContentElement();

if(this.__pN){content.scrollToX(P);
}else{content.scrollToY(P);
}},_applyOrientation:function(U,V){var W=this.__pN=U===k;
this.set({allowGrowX:W,allowShrinkX:W,allowGrowY:!W,allowShrinkY:!W});

if(W){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:W?i:c,overflowY:W?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var G=this.__pN;
var H=this.getBounds();

if(!H){return;
}
if(this.isEnabled()){var I=G?H.width:H.height;
var F=this.getMaximum()+I;
}else{F=0;
}if(qx.core.Variant.isSet(f,q)){var H=this.getBounds();
this.getContentElement().setStyles({left:G?d:g,top:G?g:d,width:(G?H.width:H.width+1)+j,height:(G?H.height+1:H.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(G?F:1)+j,height:(G?1:F)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(R){this.setPosition(Math.max(0,Math.min(this.getMaximum(),R)));
},scrollBy:function(J){this.scrollTo(this.getPosition()+J);
},scrollBySteps:function(D){var E=this.getSingleStep();
this.scrollBy(D*E);
},_onScroll:function(e){var T=this.getContentElement();
var S=this.__pN?T.getScrollX():T.getScrollY();
this.setPosition(S);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(H){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(H!=null){this.setOrientation(H);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__nm:2,_createChildControlImpl:function(I){var J;

switch(I){case l:J=new qx.ui.core.scroll.ScrollSlider();
J.setPageStep(100);
J.setFocusable(false);
J.addListener(y,this._onChangeSliderValue,this);
this._add(J,{flex:1});
break;
case j:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteBegin,this);
this._add(J);
break;
case h:J=new qx.ui.form.RepeatButton();
J.setFocusable(false);
J.addListener(f,this._onExecuteEnd,this);
this._add(J);
break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},_applyMaximum:function(M){this.getChildControl(l).setMaximum(M);
},_applyPosition:function(F){this.getChildControl(l).setValue(F);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(G){this.getChildControl(l).setPageStep(G);
},_applyOrientation:function(C,D){var E=this._getLayout();

if(E){E.dispose();
}if(C===k){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(l).setOrientation(C);
},scrollTo:function(N){this.getChildControl(l).slideTo(N);
},scrollBy:function(a){this.getChildControl(l).slideBy(a);
},scrollBySteps:function(K){var L=this.getSingleStep();
this.getChildControl(l).slideBy(K*L);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var O=this.getChildControl(l).getChildControl(v);
var R=O.getSizeHint();
var P=false;
var Q=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(Q.height<R.minHeight+this.__nm){P=true;
}}else{if(Q.width<R.minWidth+this.__nm){P=true;
}}
if(P){O.exclude();
}else{O.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(c){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(b){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var x="knob",w="horizontal",v="vertical",u="Integer",t="hovered",s="left",r="top",q="mouseup",p="pressed",o="px",bj="changeValue",bi="interval",bh="mousemove",bg="resize",bf="slider",be="mousedown",bd="PageUp",bc="mouseout",bb='qx.event.type.Data',ba="Left",E="Down",F="Up",C="dblclick",D="qx.ui.form.Slider",A="PageDown",B="mousewheel",y="_applyValue",z="_applyKnobFactor",G="End",H="height",O="Right",M="width",S="_applyOrientation",Q="Home",V="mouseover",U="floor",J="_applyMinimum",Y="click",X="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",W="keypress",I="ceil",K="losecapture",L="contextmenu",N="_applyMaximum",P="Number",R="changeMaximum",T="changeMinimum";
qx.Class.define(D,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(ca){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(W,this._onKeyPress);
this.addListener(B,this._onMouseWheel);
this.addListener(be,this._onMouseDown);
this.addListener(q,this._onMouseUp);
this.addListener(K,this._onMouseUp);
this.addListener(bg,this._onUpdate);
this.addListener(L,this._onStopEvent);
this.addListener(Y,this._onStopEvent);
this.addListener(C,this._onStopEvent);
if(ca!=null){this.setOrientation(ca);
}else{this.initOrientation();
}},events:{changeValue:bb},properties:{appearance:{refine:true,init:bf},focusable:{refine:true,init:true},orientation:{check:[w,v],init:w,apply:S},value:{check:X,init:0,apply:y,nullable:true},minimum:{check:u,init:0,apply:J,event:T},maximum:{check:u,init:100,apply:N,event:R},singleStep:{check:u,init:1},pageStep:{check:u,init:10},knobFactor:{check:P,apply:z,nullable:true}},members:{__nI:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,__nP:null,__nQ:null,__nR:null,__nS:null,__nT:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bW){var bX;

switch(bW){case x:bX=new qx.ui.core.Widget();
bX.addListener(bg,this._onUpdate,this);
bX.addListener(V,this._onMouseOver);
bX.addListener(bc,this._onMouseOut);
this._add(bX);
break;
}return bX||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bW);
},_onMouseOver:function(e){this.addState(t);
},_onMouseOut:function(e){this.removeState(t);
},_onMouseWheel:function(e){var m=e.getWheelDelta()>0?1:-1;
this.slideBy(m*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bM=this.getOrientation()===w;
var bL=bM?ba:F;
var forward=bM?O:E;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bL:this.slideBack();
break;
case A:this.slidePageForward();
break;
case bd:this.slidePageBack();
break;
case Q:this.slideToBegin();
break;
case G:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nL){return;
}var i=this.__nV;
var g=this.getChildControl(x);
var h=i?s:r;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__nI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__nJ=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__nL=true;

if(!this.__nR){this.__nR=new qx.event.Timer(100);
this.__nR.addListener(bi,this._fireValue,this);
}this.__nR.start();
this.__nM=k+l-j;
g.addState(p);
}else{this.__nN=true;
this.__nO=k<=j?-1:1;
this.__nW(e);
this._onInterval();
if(!this.__nQ){this.__nQ=new qx.event.Timer(100);
this.__nQ.addListener(bi,this._onInterval,this);
}this.__nQ.start();
}this.addListener(bh,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nL){this.releaseCapture();
delete this.__nL;
this.__nR.stop();
this._fireValue();
delete this.__nM;
this.getChildControl(x).removeState(p);
if(e.getType()===q){var bJ;
var bK;
var bI;

if(this.__nV){bJ=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[r];
bK=e.getDocumentTop()-(bI+this.getChildControl(x).getBounds().top);
}else{bJ=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__nI);
bI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[s];
bK=e.getDocumentLeft()-(bI+this.getChildControl(x).getBounds().left);
}
if(bK<0||bK>this.__nK||bJ<0||bJ>this.__nK){this.getChildControl(x).removeState(t);
}}}else if(this.__nN){this.__nQ.stop();
this.releaseCapture();
delete this.__nN;
delete this.__nO;
delete this.__nP;
}this.removeListener(bh,this._onMouseMove);
if(e.getType()===q){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nL){var bO=this.__nV?e.getDocumentLeft():e.getDocumentTop();
var bN=bO-this.__nM;
this.slideTo(this._positionToValue(bN));
}else if(this.__nN){this.__nW(e);
}e.stopPropagation();
},_onInterval:function(e){var bU=this.getValue()+(this.__nO*this.getPageStep());
if(bU<this.getMinimum()){bU=this.getMinimum();
}else if(bU>this.getMaximum()){bU=this.getMaximum();
}var bV=this.__nO==-1;

if((bV&&bU<=this.__nP)||(!bV&&bU>=this.__nP)){bU=this.__nP;
}this.slideTo(bU);
},_onUpdate:function(e){var bQ=this.getInnerSize();
var bR=this.getChildControl(x).getBounds();
var bP=this.__nV?M:H;
this._updateKnobSize();
this.__nU=bQ[bP]-bR[bP];
this.__nK=bR[bP];
this._updateKnobPosition();
},__nV:false,__nU:0,__nW:function(e){var bk=this.__nV;
var br=bk?e.getDocumentLeft():e.getDocumentTop();
var bt=this.__nI;
var bl=this.__nJ;
var bv=this.__nK;
var bs=br-bt;

if(br>=bl){bs-=bv;
}var bp=this._positionToValue(bs);
var bm=this.getMinimum();
var bn=this.getMaximum();

if(bp<bm){bp=bm;
}else if(bp>bn){bp=bn;
}else{var bq=this.getValue();
var bo=this.getPageStep();
var bu=this.__nO<0?U:I;
bp=bq+(Math[bu]((bp-bq)/bo)*bo);
}if(this.__nP==null||(this.__nO==-1&&bp<=this.__nP)||(this.__nO==1&&bp>=this.__nP)){this.__nP=bp;
}},_positionToValue:function(by){var bz=this.__nU;
if(bz==null||bz==0){return 0;
}var bB=by/bz;

if(bB<0){bB=0;
}else if(bB>1){bB=1;
}var bA=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bA*bB);
},_valueToPosition:function(bC){var bD=this.__nU;

if(bD==null){return 0;
}var bE=this.getMaximum()-this.getMinimum();
if(bE==0){return 0;
}var bC=bC-this.getMinimum();
var bF=bC/bE;

if(bF<0){bF=0;
}else if(bF>1){bF=1;
}return Math.round(bD*bF);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(x).getContainerElement();

if(this.__nV){bT.setStyle(s,bS+o,true);
}else{bT.setStyle(r,bS+o,true);
}},_updateKnobSize:function(){var b=this.getKnobFactor();

if(b==null){return;
}var a=this.getInnerSize();

if(a==null){return;
}if(this.__nV){this.getChildControl(x).setWidth(Math.round(b*a.width));
}else{this.getChildControl(x).setHeight(Math.round(b*a.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(cf){this.slideTo(this.getValue()+cf);
},slideTo:function(n){if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}else{n=this.getMinimum()+Math.round((n-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(n);
},_applyOrientation:function(c,d){var f=this.getChildControl(x);
this.__nV=c===w;
if(this.__nV){this.removeState(v);
f.removeState(v);
this.addState(w);
f.addState(w);
f.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(w);
f.removeState(w);
this.addState(v);
f.addState(v);
f.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bG,bH){if(bG!=null){this._updateKnobSize();
}else{if(this.__nV){this.getChildControl(x).resetWidth();
}else{this.getChildControl(x).resetHeight();
}}},_applyValue:function(bw,bx){if(bw!=null){this._updateKnobPosition();

if(this.__nL){this.__nT=[bw,bx];
}else{this.fireEvent(bj,qx.event.type.Data,[bw,bx]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__nT){return;
}var bY=this.__nT;
this.__nT=null;
this.fireEvent(bj,qx.event.type.Data,bY);
},_applyMinimum:function(cb,cc){if(this.getValue()<cb){this.setValue(cb);
}this._updateKnobPosition();
},_applyMaximum:function(cd,ce){if(this.getValue()>cd){this.setValue(cd);
}this._updateKnobPosition();
}}});
})();
(function(){var d="horizontal",c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(g){qx.ui.form.Slider.call(this,g);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
},members:{getSizeHint:function(e){var f=qx.ui.form.Slider.prototype.getSizeHint.call(this);
if(this.getOrientation()===d){f.width=0;
}else{f.height=0;
}return f;
}}});
})();
(function(){var cs="top",cr="left",cq="qx.debug",cp="bottom",co="hAlign",cn="vAlign",cm="Integer",cl="_applyLayoutChange",ck="center",cj="middle",cH="right",cG="flex",cF="on",cE="height",cD="' is not supported by the Grid layout!",cC="Invalid parameter 'column'",cB="The property '",cA="Value must be positive",cz="qx.ui.layout.Grid",cy="maxHeight",cw="width",cx="minHeight",cu="minWidth",cv="maxWidth",ct="Invalid parameter 'row'";
qx.Class.define(cz,{extend:qx.ui.layout.Abstract,construct:function(e,f){qx.ui.layout.Abstract.call(this);
this.__hO=[];
this.__hP=[];

if(e){this.setSpacingX(e);
}
if(f){this.setSpacingY(f);
}},properties:{spacingX:{check:cm,init:0,apply:cl},spacingY:{check:cm,init:0,apply:cl}},members:{__hQ:null,__hO:null,__hP:null,__hR:null,__hS:null,__hT:null,__hU:null,__hV:null,__hW:null,verifyLayoutProperty:qx.core.Variant.select(cq,{"on":function(cg,name,ch){var ci={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(ci[name]==1,cB+name+cD);
this.assertInteger(ch);
this.assert(ch>=0,cA);
},"off":null}),__hX:function(){var bB=[];
var bA=[];
var bC=[];
var by=-1;
var bx=-1;
var bE=this._getLayoutChildren();

for(var i=0,l=bE.length;i<l;i++){var bz=bE[i];
var bD=bz.getLayoutProperties();
var bF=bD.row;
var bw=bD.column;
bD.colSpan=bD.colSpan||1;
bD.rowSpan=bD.rowSpan||1;
if(bF==null||bw==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bz+"' must be defined!");
}
if(bB[bF]&&bB[bF][bw]){throw new Error("Cannot add widget '"+bz+"'!. "+"There is already a widget '"+bB[bF][bw]+"' in this cell ("+bF+", "+bw+")");
}
for(var x=bw;x<bw+bD.colSpan;x++){for(var y=bF;y<bF+bD.rowSpan;y++){if(bB[y]==undefined){bB[y]=[];
}bB[y][x]=bz;
bx=Math.max(bx,x);
by=Math.max(by,y);
}}
if(bD.rowSpan>1){bC.push(bz);
}
if(bD.colSpan>1){bA.push(bz);
}}for(var y=0;y<=by;y++){if(bB[y]==undefined){bB[y]=[];
}}this.__hQ=bB;
this.__hR=bA;
this.__hS=bC;
this.__hT=by;
this.__hU=bx;
this.__hV=null;
this.__hW=null;
delete this._invalidChildrenCache;
},_setRowData:function(dI,dJ,dK){var dL=this.__hO[dI];

if(!dL){this.__hO[dI]={};
this.__hO[dI][dJ]=dK;
}else{dL[dJ]=dK;
}},_setColumnData:function(dd,de,df){var dg=this.__hP[dd];

if(!dg){this.__hP[dd]={};
this.__hP[dd][de]=df;
}else{dg[de]=df;
}},setSpacing:function(m){this.setSpacingY(m);
this.setSpacingX(m);
return this;
},setColumnAlign:function(da,db,dc){if(qx.core.Variant.isSet(cq,cF)){this.assertInteger(da,cC);
this.assertInArray(db,[cr,ck,cH]);
this.assertInArray(dc,[cs,cj,cp]);
}this._setColumnData(da,co,db);
this._setColumnData(da,cn,dc);
this._applyLayoutChange();
return this;
},getColumnAlign:function(cc){var cd=this.__hP[cc]||{};
return {vAlign:cd.vAlign||cs,hAlign:cd.hAlign||cr};
},setRowAlign:function(ep,eq,er){if(qx.core.Variant.isSet(cq,cF)){this.assertInteger(ep,ct);
this.assertInArray(eq,[cr,ck,cH]);
this.assertInArray(er,[cs,cj,cp]);
}this._setRowData(ep,co,eq);
this._setRowData(ep,cn,er);
this._applyLayoutChange();
return this;
},getRowAlign:function(p){var q=this.__hO[p]||{};
return {vAlign:q.vAlign||cs,hAlign:q.hAlign||cr};
},getCellWidget:function(dh,di){if(this._invalidChildrenCache){this.__hX();
}var dh=this.__hQ[dh]||{};
return dh[di]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hT+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__hX();
}return this.__hU+1;
},getCellAlign:function(dO,dP){var dV=cs;
var dT=cr;
var dU=this.__hO[dO];
var dR=this.__hP[dP];
var dQ=this.__hQ[dO][dP];

if(dQ){var dS={vAlign:dQ.getAlignY(),hAlign:dQ.getAlignX()};
}else{dS={};
}if(dS.vAlign){dV=dS.vAlign;
}else if(dU&&dU.vAlign){dV=dU.vAlign;
}else if(dR&&dR.vAlign){dV=dR.vAlign;
}if(dS.hAlign){dT=dS.hAlign;
}else if(dR&&dR.hAlign){dT=dR.hAlign;
}else if(dU&&dU.hAlign){dT=dU.hAlign;
}return {vAlign:dV,hAlign:dT};
},setColumnFlex:function(ce,cf){this._setColumnData(ce,cG,cf);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bu){var bv=this.__hP[bu]||{};
return bv.flex!==undefined?bv.flex:0;
},setRowFlex:function(r,s){this._setRowData(r,cG,s);
this._applyLayoutChange();
return this;
},getRowFlex:function(cP){var cQ=this.__hO[cP]||{};
var cR=cQ.flex!==undefined?cQ.flex:0;
return cR;
},setColumnMaxWidth:function(t,u){this._setColumnData(t,cv,u);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bo){var bp=this.__hP[bo]||{};
return bp.maxWidth!==undefined?bp.maxWidth:Infinity;
},setColumnWidth:function(a,b){this._setColumnData(a,cw,b);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dM){var dN=this.__hP[dM]||{};
return dN.width!==undefined?dN.width:null;
},setColumnMinWidth:function(bq,br){this._setColumnData(bq,cu,br);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dv){var dw=this.__hP[dv]||{};
return dw.minWidth||0;
},setRowMaxHeight:function(en,eo){this._setRowData(en,cy,eo);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(c){var d=this.__hO[c]||{};
return d.maxHeight||Infinity;
},setRowHeight:function(cN,cO){this._setRowData(cN,cE,cO);
this._applyLayoutChange();
return this;
},getRowHeight:function(bs){var bt=this.__hO[bs]||{};
return bt.height!==undefined?bt.height:null;
},setRowMinHeight:function(n,o){this._setRowData(n,cx,o);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(g){var h=this.__hO[g]||{};
return h.minHeight||0;
},__hY:function(cI){var cM=cI.getSizeHint();
var cL=cI.getMarginLeft()+cI.getMarginRight();
var cK=cI.getMarginTop()+cI.getMarginBottom();
var cJ={height:cM.height+cK,width:cM.width+cL,minHeight:cM.minHeight+cK,minWidth:cM.minWidth+cL,maxHeight:cM.maxHeight+cK,maxWidth:cM.maxWidth+cL};
return cJ;
},_fixHeightsRowSpan:function(dW){var ek=this.getSpacingY();

for(var i=0,l=this.__hS.length;i<l;i++){var ea=this.__hS[i];
var ec=this.__hY(ea);
var ed=ea.getLayoutProperties();
var dY=ed.row;
var ei=ek*(ed.rowSpan-1);
var dX=ei;
var ef={};

for(var j=0;j<ed.rowSpan;j++){var em=ed.row+j;
var eb=dW[em];
var el=this.getRowFlex(em);

if(el>0){ef[em]={min:eb.minHeight,value:eb.height,max:eb.maxHeight,flex:el};
}ei+=eb.height;
dX+=eb.minHeight;
}if(ei<ec.height){if(!qx.lang.Object.isEmpty(ef)){var ej=qx.ui.layout.Util.computeFlexOffsets(ef,ec.height,ei);

for(var k=0;k<ed.rowSpan;k++){var ee=ej[dY+k]?ej[dY+k].offset:0;
dW[dY+k].height+=ee;
}}else{var eg=ek*(ed.rowSpan-1);
var eh=ec.height-eg;
var eb=Math.floor(eh/ed.rowSpan);

for(var k=0;k<ed.rowSpan;k++){dW[dY+k].height=eb;
}}}if(dX<ec.minHeight){var ej=qx.ui.layout.Util.computeFlexOffsets(ef,ec.minHeight,dX);

for(var j=0;j<ed.rowSpan;j++){var ee=ej[dY+j]?ej[dY+j].offset:0;
dW[dY+j].minHeight+=ee;
}}}},_fixWidthsColSpan:function(bN){var bR=this.getSpacingX();

for(var i=0,l=this.__hR.length;i<l;i++){var bO=this.__hR[i];
var bQ=this.__hY(bO);
var bT=bO.getLayoutProperties();
var bP=bT.column;
var ca=bR*(bT.colSpan-1);
var bS=ca;
var bU={};
var bW;

for(var j=0;j<bT.colSpan;j++){var cb=bT.column+j;
var bY=bN[cb];
var bX=this.getColumnFlex(cb);
if(bX>0){bU[cb]={min:bY.minWidth,value:bY.width,max:bY.maxWidth,flex:bX};
}ca+=bY.width;
bS+=bY.minWidth;
}if(ca<bQ.width){var bV=qx.ui.layout.Util.computeFlexOffsets(bU,bQ.width,ca);

for(var j=0;j<bT.colSpan;j++){bW=bV[bP+j]?bV[bP+j].offset:0;
bN[bP+j].width+=bW;
}}if(bS<bQ.minWidth){var bV=qx.ui.layout.Util.computeFlexOffsets(bU,bQ.minWidth,bS);

for(var j=0;j<bT.colSpan;j++){bW=bV[bP+j]?bV[bP+j].offset:0;
bN[bP+j].minWidth+=bW;
}}}},_getRowHeights:function(){if(this.__hV!=null){return this.__hV;
}var G=[];
var z=this.__hT;
var w=this.__hU;

for(var H=0;H<=z;H++){var A=0;
var C=0;
var B=0;

for(var F=0;F<=w;F++){var v=this.__hQ[H][F];

if(!v){continue;
}var D=v.getLayoutProperties().rowSpan||0;

if(D>1){continue;
}var E=this.__hY(v);

if(this.getRowFlex(H)>0){A=Math.max(A,E.minHeight);
}else{A=Math.max(A,E.height);
}C=Math.max(C,E.height);
}var A=Math.max(A,this.getRowMinHeight(H));
var B=this.getRowMaxHeight(H);

if(this.getRowHeight(H)!==null){var C=this.getRowHeight(H);
}else{var C=Math.max(A,Math.min(C,B));
}G[H]={minHeight:A,height:C,maxHeight:B};
}
if(this.__hS.length>0){this._fixHeightsRowSpan(G);
}this.__hV=G;
return G;
},_getColWidths:function(){if(this.__hW!=null){return this.__hW;
}var dn=[];
var dk=this.__hU;
var dm=this.__hT;

for(var dt=0;dt<=dk;dt++){var dr=0;
var dq=0;
var dl=Infinity;

for(var du=0;du<=dm;du++){var dj=this.__hQ[du][dt];

if(!dj){continue;
}var dp=dj.getLayoutProperties().colSpan||0;

if(dp>1){continue;
}var ds=this.__hY(dj);

if(this.getColumnFlex(dt)>0){dq=Math.max(dq,ds.minWidth);
}else{dq=Math.max(dq,ds.width);
}dr=Math.max(dr,ds.width);
}var dq=Math.max(dq,this.getColumnMinWidth(dt));
var dl=this.getColumnMaxWidth(dt);

if(this.getColumnWidth(dt)!==null){var dr=this.getColumnWidth(dt);
}else{var dr=Math.max(dq,Math.min(dr,dl));
}dn[dt]={minWidth:dq,width:dr,maxWidth:dl};
}
if(this.__hR.length>0){this._fixWidthsColSpan(dn);
}this.__hW=dn;
return dn;
},_getColumnFlexOffsets:function(cS){var cT=this.getSizeHint();
var cX=cS-cT.width;

if(cX==0){return {};
}var cV=this._getColWidths();
var cU={};

for(var i=0,l=cV.length;i<l;i++){var cY=cV[i];
var cW=this.getColumnFlex(i);

if((cW<=0)||(cY.width==cY.maxWidth&&cX>0)||(cY.width==cY.minWidth&&cX<0)){continue;
}cU[i]={min:cY.minWidth,value:cY.width,max:cY.maxWidth,flex:cW};
}return qx.ui.layout.Util.computeFlexOffsets(cU,cS,cT.width);
},_getRowFlexOffsets:function(bG){var bH=this.getSizeHint();
var bK=bG-bH.height;

if(bK==0){return {};
}var bL=this._getRowHeights();
var bI={};

for(var i=0,l=bL.length;i<l;i++){var bM=bL[i];
var bJ=this.getRowFlex(i);

if((bJ<=0)||(bM.height==bM.maxHeight&&bK>0)||(bM.height==bM.minHeight&&bK<0)){continue;
}bI[i]={min:bM.minHeight,value:bM.height,max:bM.maxHeight,flex:bJ};
}return qx.ui.layout.Util.computeFlexOffsets(bI,bG,bH.height);
},renderLayout:function(I,J){if(this._invalidChildrenCache){this.__hX();
}var X=qx.ui.layout.Util;
var L=this.getSpacingX();
var R=this.getSpacingY();
var bd=this._getColWidths();
var bc=this._getColumnFlexOffsets(I);
var M=[];
var bf=this.__hU;
var K=this.__hT;
var be;

for(var bg=0;bg<=bf;bg++){be=bc[bg]?bc[bg].offset:0;
M[bg]=bd[bg].width+be;
}var U=this._getRowHeights();
var W=this._getRowFlexOffsets(J);
var bm=[];

for(var S=0;S<=K;S++){be=W[S]?W[S].offset:0;
bm[S]=U[S].height+be;
}var bn=0;

for(var bg=0;bg<=bf;bg++){var top=0;

for(var S=0;S<=K;S++){var ba=this.__hQ[S][bg];
if(!ba){top+=bm[S]+R;
continue;
}var N=ba.getLayoutProperties();
if(N.row!==S||N.column!==bg){top+=bm[S]+R;
continue;
}var bl=L*(N.colSpan-1);

for(var i=0;i<N.colSpan;i++){bl+=M[bg+i];
}var bb=R*(N.rowSpan-1);

for(var i=0;i<N.rowSpan;i++){bb+=bm[S+i];
}var O=ba.getSizeHint();
var bj=ba.getMarginTop();
var Y=ba.getMarginLeft();
var V=ba.getMarginBottom();
var Q=ba.getMarginRight();
var T=Math.max(O.minWidth,Math.min(bl-Y-Q,O.maxWidth));
var bk=Math.max(O.minHeight,Math.min(bb-bj-V,O.maxHeight));
var bh=this.getCellAlign(S,bg);
var bi=bn+X.computeHorizontalAlignOffset(bh.hAlign,T,bl,Y,Q);
var P=top+X.computeVerticalAlignOffset(bh.vAlign,bk,bb,bj,V);
ba.renderLayout(bi,P,T,bk);
top+=bm[S]+R;
}bn+=M[bg]+L;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hW=null;
this.__hV=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__hX();
}var dB=this._getColWidths();
var dD=0,dE=0;

for(var i=0,l=dB.length;i<l;i++){var dF=dB[i];

if(this.getColumnFlex(i)>0){dD+=dF.minWidth;
}else{dD+=dF.width;
}dE+=dF.width;
}var dG=this._getRowHeights();
var dz=0,dC=0;

for(var i=0,l=dG.length;i<l;i++){var dH=dG[i];

if(this.getRowFlex(i)>0){dz+=dH.minHeight;
}else{dz+=dH.height;
}dC+=dH.height;
}var dy=this.getSpacingX()*(dB.length-1);
var dx=this.getSpacingY()*(dG.length-1);
var dA={minWidth:dD+dy,width:dE+dy,minHeight:dz+dx,height:dC+dx};
return dA;
}},destruct:function(){this.__hQ=this.__hO=this.__hP=this.__hR=this.__hS=this.__hW=this.__hV=null;
}});
})();
(function(){var q="open",p="auto",o="qx.debug",n="middle",m="icon",k="label",j="on",h="changeOpen",g="excluded",f="visible",M="String",L="opened",K="always",J="qx.ui.tree.AbstractTreeItem",I="addItem",H="Boolean",G="Invalid child index: ",F="Integer",E="_applyIndent",D="changeOpenSymbolMode",x="_applyOpenSymbolMode",y="__pt",v="resize",w="__ps",t="",u="removeItem",r="abstract",s="never",z="_applyIcon",A="_applyOpen",C="_applyLabel",B="__pw";
qx.Class.define(J,{extend:qx.ui.core.Widget,type:r,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__ps=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:H,init:false,event:h,apply:A},openSymbolMode:{check:[K,s,p],init:p,event:D,apply:x},indent:{check:F,init:19,apply:E,themeable:true},parent:{check:J,nullable:true},icon:{check:M,apply:z,nullable:true,themeable:true},label:{check:M,apply:C,init:t}},members:{__ps:null,__pt:null,__pu:null,__pv:null,__pw:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(c){var d;

switch(c){case k:d=new qx.ui.basic.Label().set({alignY:n,value:this.getLabel()});
break;
case m:d=new qx.ui.basic.Image().set({alignY:n,source:this.getIcon()});
break;
case q:d=new qx.ui.tree.FolderOpenButton().set({alignY:n});
d.addListener(h,this._onChangeOpen,this);
d.addListener(v,this._updateIndent,this);
break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},getTree:function(){var ca=this;

while(ca.getParent()){ca=ca.getParent();
}var bY=ca.getLayoutParent()?ca.getLayoutParent().getLayoutParent():0;

if(bY&&bY instanceof qx.ui.core.scroll.ScrollPane){return bY.getLayoutParent();
}return null;
},addWidget:function(bl,bm){this._add(bl,bm);
},addSpacer:function(){if(!this.__pw){this.__pw=new qx.ui.core.Spacer();
}else{this._remove(this.__pw);
}this._add(this.__pw);
},addOpenButton:function(){this._add(this.getChildControl(q));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var O=this.getChildControl(m);

if(this.__pv){this._remove(O);
}this._add(O);
this.__pv=true;
},addLabel:function(bM){var bN=this.getChildControl(k);

if(this.__pu){this._remove(bN);
}
if(bM){this.setLabel(bM);
}else{bN.setValue(this.getLabel());
}this._add(bN);
this.__pu=true;
},addState:function(V){qx.ui.core.Widget.prototype.addState.call(this,V);
var X=this._getChildren();

for(var i=0,l=X.length;i<l;i++){var W=X[i];

if(W.addState){X[i].addState(V);
}}},removeState:function(bA){qx.ui.core.Widget.prototype.removeState.call(this,bA);
var bC=this._getChildren();

for(var i=0,l=bC.length;i<l;i++){var bB=bC[i];

if(bB.addState){bC[i].removeState(bA);
}}},_applyIcon:function(bV,bW){var bX=this.getChildControl(m,true);

if(bX){bX.setSource(bV);
}},_applyLabel:function(bf,bg){var bh=this.getChildControl(k,true);

if(bh){bh.setValue(bf);
}},_applyOpen:function(Q,R){if(this.hasChildren()){this.getChildrenContainer().setVisibility(Q?f:g);
}var open=this.getChildControl(q,true);

if(open){open.setOpen(Q);
}Q?this.addState(L):this.removeState(L);
},isOpenable:function(){var N=this.getOpenSymbolMode();
return (N===K||N===p&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(q,true);

if(!open){return false;
}var P=this.getTree();

if(!P.getRootOpenClose()){if(P.getHideRoot()){if(P.getRoot()==this.getParent()){return false;
}}else{if(P.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(by,bz){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bu=0;
var open=this.getChildControl(q,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bt=open.getBounds();

if(bt){bu=bt.width;
}else{return;
}}else{open.exclude();
}}
if(this.__pw){this.__pw.setWidth((this.getLevel()+1)*this.getIndent()-bu);
}},_applyIndent:function(a,b){this._updateIndent();
},getLevel:function(){var S=this.getTree();

if(!S){return;
}var T=this;
var U=-1;

while(T){T=T.getParent();
U+=1;
}if(S.getHideRoot()){U-=1;
}
if(!S.getRootOpenClose()){U-=1;
}return U;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__pt){this.__pt=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?f:g});
}return this.__pt;
},hasChildrenContainer:function(){return this.__pt;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ps;
},hasChildren:function(){return this.__ps?this.__ps.length>0:false;
},getItems:function(bO,bP,bQ){if(bQ!==false){var bR=[];
}else{var bR=[this];
}var bU=this.hasChildren()&&(bP!==false||this.isOpen());

if(bU){var bT=this.getChildren();

if(bO===false){bR=bR.concat(bT);
}else{for(var i=0,bS=bT.length;i<bS;i++){bR=bR.concat(bT[i].getItems(bO,bP,false));
}}}return bR;
},recursiveAddToWidgetQueue:function(){var bi=this.getItems(true,true,false);

for(var i=0,l=bi.length;i<l;i++){qx.ui.core.queue.Widget.add(bi[i]);
}},__px:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bD){var bE=this.getChildrenContainer();
var bH=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bI=arguments[i];
var bG=bI.getParent();

if(bG){bG.remove(bI);
}bI.setParent(this);
var bF=this.hasChildren();
bE.add(bI);

if(bI.hasChildren()){bE.add(bI.getChildrenContainer());
}this.__ps.push(bI);

if(!bF){this.__px();
}
if(bH){bI.recursiveAddToWidgetQueue();
bH.fireNonBubblingEvent(I,qx.event.type.Data,[bI]);
}}
if(bH){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bn,bo){if(qx.core.Variant.isSet(o,j)){this.assert(bo<=this.__ps.length&&bo>=0,G+bo);
}
if(bo==this.__ps.length){this.add(bn);
return;
}var bs=bn.getParent();

if(bs){bs.remove(bn);
}var bq=this.getChildrenContainer();
bn.setParent(this);
var br=this.hasChildren();
var bp=this.__ps[bo];
bq.addBefore(bn,bp);

if(bn.hasChildren()){bq.addAfter(bn.getChildrenContainer(),bn);
}qx.lang.Array.insertAt(this.__ps,bn,bo);

if(!br){this.__px();
}
if(this.getTree()){bn.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bJ,bK){if(qx.core.Variant.isSet(o,j)){this.assert(this.__ps.indexOf(bK)>=0);
}var bL=bJ.getParent();

if(bL){bL.remove(bJ);
}this.addAt(bJ,this.__ps.indexOf(bK));
},addAfter:function(bv,bw){if(qx.core.Variant.isSet(o,j)){this.assert(this.__ps.indexOf(bw)>=0);
}var bx=bv.getParent();

if(bx){bx.remove(bv);
}this.addAt(bv,this.__ps.indexOf(bw)+1);
},addAtBegin:function(Y){this.addAt(Y,0);
},remove:function(ba){for(var i=0,l=arguments.length;i<l;i++){var be=arguments[i];

if(this.__ps.indexOf(be)==-1){this.warn("Cannot remove treeitem '"+be+"'. It is not a child of this tree item.");
return;
}var bb=this.getChildrenContainer();

if(be.hasChildrenContainer()){var bd=be.getChildrenContainer();

if(bb.getChildren().indexOf(bd)>=0){bb.remove(bd);
}}qx.lang.Array.remove(this.__ps,be);
be.setParent(null);
bb.remove(be);
}var bc=this.getTree();

if(bc){bc.fireNonBubblingEvent(u,qx.event.type.Data,[be]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bj){var bk=this.__ps[bj];

if(bk){this.remove(bk);
}},removeAll:function(){for(var i=this.__ps.length-1;i>=0;i--){this.remove(this.__ps[i]);
}}},destruct:function(){this._disposeArray(w);
this._disposeObjects(B,y);
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
qx.Class.define(E,{extend:qx.core.Object,construct:function(bv,bw,bx){qx.core.Object.call(this);
this.__ro={};
this.__rp={};
this.__rq={};
this.__rr={};

if(bv!==undefined){this.setUrl(bv);
}
if(bw!==undefined){this.setMethod(bw);
}
if(bx!==undefined){this.setResponseType(bx);
}this.setProhibitCaching(true);
this.__rs=++qx.io.remote.Request.__rs;
},events:{"created":n,"configured":n,"sending":n,"receiving":n,"completed":W,"aborted":n,"failed":W,"timeout":W},statics:{__rs:0,methodAllowsRequestBody:function(bu){return (bu==V)||(bu==P);
}},properties:{url:{check:l,init:L},method:{check:[S,V,P,F,A],apply:K,init:S},asynchronous:{check:o,init:true},data:{check:l,nullable:true},username:{check:l,nullable:true},password:{check:l,nullable:true},state:{check:[U,m,k,j,f,i,T,h],init:U,apply:J,event:B},responseType:{check:[x,I,u,t,r],init:x,apply:G},timeout:{check:y,nullable:true},prohibitCaching:{check:function(v){return typeof v==C||v===Q;
},init:true,apply:M},crossDomain:{check:o,init:false},fileUpload:{check:o,init:false},transport:{check:q,nullable:true},useBasicHttpAuth:{check:o,init:false},parseJson:{check:o,init:true}},members:{__ro:null,__rp:null,__rq:null,__rr:null,__rs:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
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
},__rt:function(e){var bt=e.clone();
bt.setTarget(this);
this.dispatchEvent(bt);
},_onqueued:function(e){this.setState(m);
this.__rt(e);
},_onsending:function(e){this.setState(k);
this.__rt(e);
},_onreceiving:function(e){this.setState(j);
this.__rt(e);
},_oncompleted:function(e){this.setState(f);
this.__rt(e);
this.dispose();
},_onaborted:function(e){this.setState(i);
this.__rt(e);
this.dispose();
},_ontimeout:function(e){this.setState(T);
this.__rt(e);
this.dispose();
},_onfailed:function(e){this.setState(h);
this.__rt(e);
this.dispose();
},_applyState:function(bb,bc){if(qx.core.Variant.isSet(H,D)){if(qx.core.Setting.get(s)){this.debug("State: "+bb);
}}},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(g);
this.removeRequestHeader(R);
this.removeRequestHeader(N);
return;
}if(X!==Q||this.getMethod()!=V){this.setParameter(g,new Date().valueOf());
}else{this.removeParameter(g);
}this.setRequestHeader(R,O);
this.setRequestHeader(N,O);
},_applyMethod:function(bl,bm){if(qx.io.remote.Request.methodAllowsRequestBody(bl)){this.setRequestHeader(w,p);
}else{this.removeRequestHeader(w);
}var bn=this.getProhibitCaching();
this._applyProhibitCaching(bn,bn);
},_applyResponseType:function(a,b){this.setRequestHeader(z,a);
},setRequestHeader:function(bo,bp){this.__ro[bo]=bp;
},removeRequestHeader:function(bh){delete this.__ro[bh];
},getRequestHeader:function(ba){return this.__ro[ba]||null;
},getRequestHeaders:function(){return this.__ro;
},setParameter:function(bd,be,bf){if(bf){this.__rq[bd]=be;
}else{this.__rp[bd]=be;
}},removeParameter:function(br,bs){if(bs){delete this.__rq[br];
}else{delete this.__rp[br];
}},getParameter:function(c,d){if(d){return this.__rq[c]||null;
}else{return this.__rp[c]||null;
}},getParameters:function(bi){return (bi?this.__rq:this.__rp);
},setFormField:function(bj,bk){this.__rr[bj]=bk;
},removeFormField:function(bg){delete this.__rr[bg];
},getFormField:function(bq){return this.__rr[bq]||null;
},getFormFields:function(){return this.__rr;
},getSequenceNumber:function(){return this.__rs;
}},destruct:function(){this.setTransport(null);
this.__ro=this.__rp=this.__rq=this.__rr=null;
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
(function(){var l="qx.ioRemoteDebug",k="Integer",j="qx.debug",h="on",g="aborted",f="_onaborted",d="_on",c="Boolean",b="singleton",a="__oO",x="interval",w="receiving",v="Request-Queue Progress: ",u="queued",t="/",s="_applyEnabled",r="sending",q="completed",p="__oM",o="failed",m="qx.io.remote.RequestQueue",n="timeout";
qx.Class.define(m,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oL=[];
this.__oM=[];
this.__oN=0;
this.__oO=new qx.event.Timer(500);
this.__oO.addListener(x,this._oninterval,this);
},properties:{enabled:{init:true,check:c,apply:s},maxTotalRequests:{check:k,nullable:true},maxConcurrentRequests:{check:k,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:k,init:5000}},members:{__oL:null,__oM:null,__oN:null,__oO:null,getRequestQueue:function(){return this.__oL;
},getActiveQueue:function(){return this.__oM;
},_debug:function(){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){var I=this.__oM.length+t+(this.__oL.length+this.__oM.length);
this.debug("Progress: "+I);
window.status=v+I;
}}},_check:function(){this._debug();
if(this.__oM.length==0&&this.__oL.length==0){this.__oO.stop();
}if(!this.getEnabled()){return;
}if(this.__oL.length==0||(this.__oL[0].isAsynchronous()&&this.__oM.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oN>=this.getMaxTotalRequests()){return;
}var G=this.__oL.shift();
var H=new qx.io.remote.Exchange(G);
this.__oN++;
this.__oM.push(H);
this._debug();
H.addListener(r,this._onsending,this);
H.addListener(w,this._onreceiving,this);
H.addListener(q,this._oncompleted,this);
H.addListener(g,this._oncompleted,this);
H.addListener(n,this._oncompleted,this);
H.addListener(o,this._oncompleted,this);
H._start=(new Date).valueOf();
H.send();
if(this.__oL.length>0){this._check();
}},_remove:function(F){qx.lang.Array.remove(this.__oM,F);
F.dispose();
this._check();
},__oP:0,_onsending:function(e){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){this.__oP++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__oP);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){if(e.getTarget()._counted){this.__oP--;
this.debug("ActiveCount: "+this.__oP);
}}}var A=e.getTarget().getRequest();
var z=d+e.getType();
try{if(A[z]){A[z](e);
}}catch(y){this.error("Request "+A+" handler "+z+" threw an error: ",y);
try{if(A[f]){var event=qx.event.Registration.createEvent(g,qx.event.type.Event);
A[f](event);
}}catch(D){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var P=this.__oM;

if(P.length==0){this.__oO.stop();
return;
}var K=(new Date).valueOf();
var N;
var L;
var O=this.getDefaultTimeout();
var M;
var J;

for(var i=P.length-1;i>=0;i--){N=P[i];
L=N.getRequest();

if(L.isAsynchronous()){M=L.getTimeout();
if(M==0){continue;
}
if(M==null){M=O;
}J=K-N._start;

if(J>M){this.warn("Timeout: transport "+N.toHashCode());
this.warn(J+"ms > "+M+"ms");
N.timeout();
}}}},_applyEnabled:function(B,C){if(B){this._check();
}this.__oO.setEnabled(B);
},add:function(E){E.setState(u);

if(E.isAsynchronous()){this.__oL.push(E);
}else{this.__oL.unshift(E);
}this._check();

if(this.getEnabled()){this.__oO.start();
}},abort:function(Q){var R=Q.getTransport();

if(R){R.abort();
}else if(qx.lang.Array.contains(this.__oL,Q)){qx.lang.Array.remove(this.__oL,Q);
}}},destruct:function(){this._disposeArray(p);
this._disposeObjects(a);
this.__oL=null;
}});
})();
(function(){var p="qx.ioRemoteDebug",o="qx.debug",n="on",m="failed",k="sending",j="completed",h="receiving",g="aborted",f="timeout",d="qx.event.type.Event",br="Connection dropped",bq="qx.io.remote.Response",bp="configured",bo="Unknown status code. ",bn="=",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",w="Precondition failed",x="Server error",u="&",v="qx.io.remote.Exchange",s="Possibly due to a cross-domain request?",t="Bad gateway",q="Gone",r="See other",C="Partial content",D="Server timeout",N="qx.io.remote.transport.Script",K="HTTP version not supported",V="Unauthorized",Q="Possibly due to application URL using 'file:' protocol?",be="Multiple choices",bb="Payment required",G="Not implemented",bh="Proxy authentication required",bg="Length required",bf="_applyState",F="changeState",I="Not modified",J="Not acceptable",M="qx.io.remote.Request",O="Connection closed by server",R="Moved permanently",X="_applyImplementation",bd="Method not allowed",y="Moved temporarily",z="Forbidden",H="Use proxy",U="Ok",T="Conflict",S="Not found",ba="Request time-out",Y="Bad request",P="No content",W="file:",a="qx.io.remote.transport.Iframe",bc="Request entity too large",A="Unknown status code",B="Unsupported media type",L="Gateway time-out",b="created",c="Out of resources",E="undefined";
qx.Class.define(v,{extend:qx.core.Object,construct:function(ca){qx.core.Object.call(this);
this.setRequest(ca);
ca.setTransport(this);
},events:{"sending":d,"receiving":d,"completed":bq,"aborted":d,"failed":bq,"timeout":bq},statics:{typesOrder:[bm,a,N],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bS,bT){qx.io.remote.Exchange.typesAvailable[bT]=bS;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var cc in qx.io.remote.Exchange.typesAvailable){var cb=qx.io.remote.Exchange.typesAvailable[cc];

if(cb.isSupported()){qx.io.remote.Exchange.typesSupported[cc]=cb;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bw,bx,by){if(!qx.lang.Array.contains(bw.handles.responseTypes,by)){return false;
}
for(var bz in bx){if(!bw.handles[bz]){return false;
}}return true;
},_nativeMap:{0:b,1:bp,2:k,3:h,4:j},wasSuccessful:function(bt,bu,bv){if(bv){switch(bt){case null:case 0:return true;
case -1:return bu<4;
default:return typeof bt===E;
}}else{switch(bt){case -1:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)&&bu>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+bu);
}}return bu<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)&&bu===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return bu!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bt);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bt);
}}return false;
default:if(bt>206&&bt<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bt+" ("+bu+")");
return false;
}}},statusCodeToString:function(cd){switch(cd){case -1:return bi;
case 0:var ce=window.location.href;
if(qx.lang.String.startsWith(ce.toLowerCase(),W)){return (bo+Q);
}else{return (bo+s);
}break;
case 200:return U;
case 304:return I;
case 206:return C;
case 204:return P;
case 300:return be;
case 301:return R;
case 302:return y;
case 303:return r;
case 305:return H;
case 400:return Y;
case 401:return V;
case 402:return bb;
case 403:return z;
case 404:return S;
case 405:return bd;
case 406:return J;
case 407:return bh;
case 408:return ba;
case 409:return T;
case 410:return q;
case 411:return bg;
case 412:return w;
case 413:return bc;
case 414:return bk;
case 415:return B;
case 500:return x;
case 501:return G;
case 502:return t;
case 503:return c;
case 504:return L;
case 505:return K;
case 12002:return D;
case 12029:return br;
case 12030:return br;
case 12031:return br;
case 12152:return O;
case 13030:return bj;
default:return A;
}}},properties:{request:{check:M,nullable:true},implementation:{check:bl,nullable:true,apply:X},state:{check:[bp,k,h,j,g,f,m],init:bp,event:F,apply:bf}},members:{send:function(){var bL=this.getRequest();

if(!bL){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bJ=qx.io.remote.Exchange.typesOrder;
var bI=qx.io.remote.Exchange.typesSupported;
var bN=bL.getResponseType();
var bO={};

if(bL.getAsynchronous()){bO.asynchronous=true;
}else{bO.synchronous=true;
}
if(bL.getCrossDomain()){bO.crossDomain=true;
}
if(bL.getFileUpload()){bO.fileUpload=true;
}for(var bM in bL.getFormFields()){bO.programaticFormFields=true;
break;
}var bP,bK;

for(var i=0,l=bJ.length;i<l;i++){bP=bI[bJ[i]];

if(bP){if(!qx.io.remote.Exchange.canHandle(bP,bO,bN)){continue;
}
try{if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){this.debug("Using implementation: "+bP.classname);
}}bK=new bP;
this.setImplementation(bK);
bK.setUseBasicHttpAuth(bL.getUseBasicHttpAuth());
bK.send();
return true;
}catch(bR){this.error("Request handler throws error");
this.error(bR);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bL);
},abort:function(){var bs=this.getImplementation();

if(bs){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){this.debug("Abort: implementation "+bs.toHashCode());
}}bs.abort();
}else{if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){this.debug("Abort: forcing state to be aborted");
}}this.setState(g);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){this.warn("Timeout: implementation "+bQ.toHashCode());
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(f);
}this.__qK();
},__qK:function(){var cf=this.getRequest();

if(cf){cf.setTimeout(0);
}},_onsending:function(e){this.setState(k);
},_onreceiving:function(e){this.setState(h);
},_oncompleted:function(e){this.setState(j);
},_onabort:function(e){this.setState(g);
},_onfailed:function(e){this.setState(m);
},_ontimeout:function(e){this.setState(f);
},_applyImplementation:function(bA,bB){if(bB){bB.removeListener(k,this._onsending,this);
bB.removeListener(h,this._onreceiving,this);
bB.removeListener(j,this._oncompleted,this);
bB.removeListener(g,this._onabort,this);
bB.removeListener(f,this._ontimeout,this);
bB.removeListener(m,this._onfailed,this);
}
if(bA){var bD=this.getRequest();
bA.setUrl(bD.getUrl());
bA.setMethod(bD.getMethod());
bA.setAsynchronous(bD.getAsynchronous());
bA.setUsername(bD.getUsername());
bA.setPassword(bD.getPassword());
bA.setParameters(bD.getParameters(false));
bA.setFormFields(bD.getFormFields());
bA.setRequestHeaders(bD.getRequestHeaders());
if(bA instanceof qx.io.remote.transport.XmlHttp){bA.setParseJson(bD.getParseJson());
}var bG=bD.getData();

if(bG===null){var bH=bD.getParameters(true);
var bF=[];

for(var bC in bH){var bE=bH[bC];

if(bE instanceof Array){for(var i=0;i<bE.length;i++){bF.push(encodeURIComponent(bC)+bn+encodeURIComponent(bE[i]));
}}else{bF.push(encodeURIComponent(bC)+bn+encodeURIComponent(bE));
}}
if(bF.length>0){bA.setData(bF.join(u));
}}else{bA.setData(bG);
}bA.setResponseType(bD.getResponseType());
bA.addListener(k,this._onsending,this);
bA.addListener(h,this._onreceiving,this);
bA.addListener(j,this._oncompleted,this);
bA.addListener(g,this._onabort,this);
bA.addListener(f,this._ontimeout,this);
bA.addListener(m,this._onfailed,this);
}},_applyState:function(bU,bV){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){this.debug("State: "+bV+" => "+bU);
}}
switch(bU){case k:this.fireEvent(k);
break;
case h:this.fireEvent(h);
break;
case j:case g:case f:case m:var bX=this.getImplementation();

if(!bX){break;
}this.__qK();

if(this.hasListener(bU)){var bY=qx.event.Registration.createEvent(bU,qx.io.remote.Response);

if(bU==j){var bW=bX.getResponseContent();
bY.setContent(bW);
if(bW===null){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(p)){this.debug("Altered State: "+bU+" => failed");
}}bU=m;
}}else if(bU==m){bY.setContent(bX.getResponseContent());
}bY.setStatusCode(bX.getStatusCode());
bY.setResponseHeaders(bX.getResponseHeaders());
this.dispatchEvent(bY);
}this.setImplementation(null);
bX.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
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
(function(){var E="qx.debug",D="on",C="qx.ioRemoteDebugData",B="=",A="&",z="application/xml",y="application/json",x="text/html",w="qx.ioRemoteDebug",v="qx.client",bd="textarea",bc="none",bb="text/plain",ba="text/javascript",Y="",X="completed",W="?",V="qx.io.remote.transport.Iframe",U="gecko",T="frame_",L="aborted",M="_data_",J="pre",K="javascript:void(0)",H="sending",I="form",F="failed",G='<iframe name="',N="mshtml",O="form_",Q='"></iframe>',P="iframe",S="timeout",R="qx/static/blank.gif";
qx.Class.define(V,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var c=(new Date).valueOf();
var d=T+c;
var f=O+c;
if(qx.core.Variant.isSet(v,N)){this.__nq=document.createElement(G+d+Q);
}else{this.__nq=document.createElement(P);
}this.__nq.src=K;
this.__nq.id=this.__nq.name=d;
this.__nq.onload=qx.lang.Function.bind(this._onload,this);
this.__nq.style.display=bc;
document.body.appendChild(this.__nq);
this.__nr=document.createElement(I);
this.__nr.target=d;
this.__nr.id=this.__nr.name=f;
this.__nr.style.display=bc;
document.body.appendChild(this.__nr);
this.__ns=document.createElement(bd);
this.__ns.id=this.__ns.name=M;
this.__nr.appendChild(this.__ns);
this.__nq.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[bb,ba,y,z,x]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__ns:null,__nt:0,__nr:null,__nq:null,send:function(){var k=this.getMethod();
var m=this.getUrl();
var q=this.getParameters(false);
var p=[];

for(var l in q){var n=q[l];

if(n instanceof Array){for(var i=0;i<n.length;i++){p.push(encodeURIComponent(l)+B+encodeURIComponent(n[i]));
}}else{p.push(encodeURIComponent(l)+B+encodeURIComponent(n));
}}
if(p.length>0){m+=(m.indexOf(W)>=0?A:W)+p.join(A);
}if(this.getData()===null){var q=this.getParameters(true);
var p=[];

for(var l in q){var n=q[l];

if(n instanceof Array){for(var i=0;i<n.length;i++){p.push(encodeURIComponent(l)+B+encodeURIComponent(n[i]));
}}else{p.push(encodeURIComponent(l)+B+encodeURIComponent(n));
}}
if(p.length>0){this.setData(p.join(A));
}}var j=this.getFormFields();

for(var l in j){var o=document.createElement(bd);
o.name=l;
o.appendChild(document.createTextNode(j[l]));
this.__nr.appendChild(o);
}this.__nr.action=m;
this.__nr.method=k;
this.__ns.appendChild(document.createTextNode(this.getData()));
this.__nr.submit();
this.setState(H);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__nr.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__nq.readyState]);
}),_switchReadyState:function(a){switch(this.getState()){case X:case L:case F:case S:this.warn("Ignore Ready State Change");
return;
}while(this.__nt<a){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nt]);
}},setRequestHeader:function(s,t){},getResponseHeader:function(be){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return Y;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__nq);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__nq);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__nq);
},getIframeTextContent:function(){var r=this.getIframeBody();

if(!r){return null;
}
if(!r.firstChild){return Y;
}if(r.firstChild.tagName&&r.firstChild.tagName.toLowerCase()==J){return r.firstChild.innerHTML;
}else{return r.innerHTML;
}},getIframeHtmlContent:function(){var h=this.getIframeBody();
return h?h.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==X){if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(w)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(w)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var u=this.getIframeTextContent();

switch(this.getResponseType()){case bb:if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(C)){this.debug("Response: "+this._responseContent);
}}return u;
break;
case x:u=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(C)){this.debug("Response: "+this._responseContent);
}}return u;
break;
case y:u=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(C)){this.debug("Response: "+this._responseContent);
}}
try{return u&&u.length>0?qx.util.Json.parse(u,false):null;
}catch(b){return this.error("Could not execute json: ("+u+")",b);
}case ba:u=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(C)){this.debug("Response: "+this._responseContent);
}}
try{return u&&u.length>0?window.eval(u):null;
}catch(g){return this.error("Could not execute javascript: ("+u+")",g);
}case z:u=this.getIframeDocument();

if(qx.core.Variant.isSet(E,D)){if(qx.core.Setting.get(C)){this.debug("Response: "+this._responseContent);
}}return u;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,V);
},destruct:function(){if(this.__nq){this.__nq.onload=null;
this.__nq.onreadystatechange=null;
if(qx.core.Variant.isSet(v,U)){this.__nq.src=qx.util.ResourceManager.getInstance().toUri(R);
}document.body.removeChild(this.__nq);
}
if(this.__nr){document.body.removeChild(this.__nr);
}this.__nq=this.__nr=this.__ns=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k="new Date(Date.UTC(",j='"',h="))",g=':',f="qx.jsonDebugging",e='-',Q='\\u00',P="__od",O='\\\\',N="__ob",M='\\f',L='\\"',K='Z',J='T',I="}",H='(',w='.',x="{",u='\\r',v="__ol",s=":",t='\\t',q="__oc",r="__oa",y="The default returned parsed date format will change. Use the CONVERT_DATES flag to change the behavior.",z="]",C="[",B="qx.jsonEncodeUndefined",E='\\b',D="qx.util.Json",G=')',F="__ok",A='\\n';
qx.Class.define(D,{statics:{__nX:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",CONVERT_DATES:null,__nY:{"function":r,"boolean":N,"number":q,"string":P,"object":F,"undefined":v},__oa:function(R,S){return String(R);
},__ob:function(c,d){return String(c);
},__oc:function(bC,bD){return isFinite(bC)?String(bC):m;
},__od:function(bE,bF){var bG;

if(/["\\\x00-\x1f]/.test(bE)){bG=bE.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__of);
}else{bG=bE;
}return j+bG+j;
},__oe:{'\b':E,'\t':t,'\n':A,'\f':M,'\r':u,'"':L,'\\':O},__of:function(a,b){var T=qx.util.Json.__oe[b];

if(T){return T;
}T=b.charCodeAt();
return Q+Math.floor(T/16).toString(16)+(T%16).toString(16);
},__og:function(bm,bn){var bp=[],bs=true,br,bo;
var bq=qx.util.Json.__on;
bp.push(C);

if(bq){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
bp.push(qx.util.Json.__oh);
}
for(var i=0,l=bm.length;i<l;i++){bo=bm[i];
br=this.__nY[typeof bo];

if(br){bo=this[br](bo,i+o);

if(typeof bo==n){if(!bs){bp.push(p);

if(bq){bp.push(qx.util.Json.__oh);
}}bp.push(bo);
bs=false;
}}}
if(bq){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bp.push(qx.util.Json.__oh);
}bp.push(z);
return bp.join(o);
},__oi:function(U,V){if(qx.util.Json.CONVERT_DATES===null){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
var X=U.getUTCFullYear()+p+U.getUTCMonth()+p+U.getUTCDate()+p+U.getUTCHours()+p+U.getUTCMinutes()+p+U.getUTCSeconds()+p+U.getUTCMilliseconds();
return k+X+h;
}else if(!qx.util.Json.CONVERT_DATES){if(U.toJSON){return U.toJSON();
}var W=qx.util.format.NumberFormat.getInstance();
W.setMinimumIntegerDigits(2);
var Y=U.getUTCFullYear()+e+W.format(U.getUTCMonth()+1)+e+W.format(U.getUTCDate())+J+W.format(U.getUTCHours())+g+W.format(U.getUTCMinutes())+g+W.format(U.getUTCSeconds())+w;
W.setMinimumIntegerDigits(3);
return Y+W.format(U.getUTCMilliseconds())+K;
}else{var X=U.getUTCFullYear()+p+U.getUTCMonth()+p+U.getUTCDate()+p+U.getUTCHours()+p+U.getUTCMinutes()+p+U.getUTCSeconds()+p+U.getUTCMilliseconds();
return k+X+h;
}},__oj:function(bc,bd){var bg=[],bi=true,bf,be;
var bh=qx.util.Json.__on;
bg.push(x);

if(bh){qx.util.Json.__oh+=qx.util.Json.BEAUTIFYING_INDENT;
bg.push(qx.util.Json.__oh);
}
for(var bd in bc){be=bc[bd];
bf=this.__nY[typeof be];

if(bf){be=this[bf](be,bd);

if(typeof be==n){if(!bi){bg.push(p);

if(bh){bg.push(qx.util.Json.__oh);
}}bg.push(this.__od(bd),s,be);
bi=false;
}}}
if(bh){qx.util.Json.__oh=qx.util.Json.__oh.substring(0,qx.util.Json.__oh.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bg.push(qx.util.Json.__oh);
}bg.push(I);
return bg.join(o);
},__ok:function(bj,bk){if(bj){if(qx.lang.Type.isFunction(bj.toJSON)&&bj.toJSON!==this.__nX){return this.__om(bj.toJSON(bk),bk);
}else if(qx.lang.Type.isDate(bj)){return this.__oi(bj,bk);
}else if(qx.lang.Type.isArray(bj)){return this.__og(bj,bk);
}else if(qx.lang.Type.isObject(bj)){return this.__oj(bj,bk);
}return o;
}return m;
},__ol:function(ba,bb){if(qx.core.Setting.get(B)){return m;
}},__om:function(bx,by){return this[this.__nY[typeof bx]](bx,by);
},stringify:function(bz,bA){this.__on=bA;
this.__oh=this.BEAUTIFYING_LINE_END;
var bB=this.__om(bz,o);

if(typeof bB!=n){bB=null;
}if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON request: "+bB);
}return bB;
},parse:function(bu,bv){if(bv===undefined){bv=true;
}
if(qx.core.Setting.get(f)){qx.log.Logger.debug(this,"JSON response: "+bu);
}
if(bv){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bu.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bw=(bu&&bu.length>0)?eval(H+bu+G):null;
return bw;
}catch(bt){throw new Error("Could not evaluate JSON string: "+bt.message);
}}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bl){bl.__nX=Date.prototype.toJSON;
}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(c){},parse:function(b){}}});
})();
(function(){var t="",s="Number",r="-",q="0",p="String",o="changeNumberFormat",n='(',m="g",l="Boolean",k="$",d="NaN",j='([0-9]{1,3}(?:',g='{0,1}[0-9]{3}){0,})',c='\\d+){0,1}',b="qx.util.format.NumberFormat",f="Infinity",e="^",h=".",a="-Infinity",i='([-+]){0,1}';
qx.Class.define(b,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(u){qx.core.Object.call(this);
this.__qF=u;
},statics:{getIntegerInstance:function(){var v=qx.util.format.NumberFormat;

if(v._integerInstance==null){v._integerInstance=new v();
v._integerInstance.setMaximumFractionDigits(0);
}return v._integerInstance;
},getInstance:function(){if(!this._instance){this._instance=new this;
}return this._instance;
}},properties:{minimumIntegerDigits:{check:s,init:0},maximumIntegerDigits:{check:s,nullable:true},minimumFractionDigits:{check:s,init:0},maximumFractionDigits:{check:s,nullable:true},groupingUsed:{check:l,init:true},prefix:{check:p,init:t,event:o},postfix:{check:p,init:t,event:o}},members:{__qF:null,format:function(w){switch(w){case Infinity:return f;
case -Infinity:return a;
case NaN:return d;
}var A=(w<0);

if(A){w=-w;
}
if(this.getMaximumFractionDigits()!=null){var H=Math.pow(10,this.getMaximumFractionDigits());
w=Math.round(w*H)/H;
}var G=String(Math.floor(w)).length;
var x=t+w;
var D=x.substring(0,G);

while(D.length<this.getMinimumIntegerDigits()){D=q+D;
}
if(this.getMaximumIntegerDigits()!=null&&D.length>this.getMaximumIntegerDigits()){D=D.substring(D.length-this.getMaximumIntegerDigits());
}var C=x.substring(G+1);

while(C.length<this.getMinimumFractionDigits()){C+=q;
}
if(this.getMaximumFractionDigits()!=null&&C.length>this.getMaximumFractionDigits()){C=C.substring(0,this.getMaximumFractionDigits());
}if(this.getGroupingUsed()){var z=D;
D=t;
var F;

for(F=z.length;F>3;F-=3){D=t+qx.locale.Number.getGroupSeparator(this.__qF)+z.substring(F-3,F)+D;
}D=z.substring(0,F)+D;
}var B=this.getPrefix()?this.getPrefix():t;
var y=this.getPostfix()?this.getPostfix():t;
var E=B+(A?r:t)+D;

if(C.length>0){E+=t+qx.locale.Number.getDecimalSeparator(this.__qF)+C;
}E+=y;
return E;
},parse:function(I){var N=qx.lang.String.escapeRegexpChars(qx.locale.Number.getGroupSeparator(this.__qF)+t);
var L=qx.lang.String.escapeRegexpChars(qx.locale.Number.getDecimalSeparator(this.__qF)+t);
var J=new RegExp(e+qx.lang.String.escapeRegexpChars(this.getPrefix())+i+j+N+g+n+L+c+qx.lang.String.escapeRegexpChars(this.getPostfix())+k);
var M=J.exec(I);

if(M==null){throw new Error("Number string '"+I+"' does not match the number format");
}var O=(M[1]==r);
var Q=M[2];
var P=M[3];
Q=Q.replace(new RegExp(N,m),t);
var K=(O?r:t)+Q;

if(P!=null&&P.length!=0){P=P.replace(new RegExp(L),t);
K+=h+P;
}return parseFloat(K);
}}});
})();
(function(){var d="cldr_number_decimal_separator",c="cldr_number_percent_format",b="qx.locale.Number",a="cldr_number_group_separator";
qx.Class.define(b,{statics:{getDecimalSeparator:function(f){return qx.locale.Manager.getInstance().localize(d,[],f);
},getGroupSeparator:function(e){return qx.locale.Manager.getInstance().localize(a,[],e);
},getPercentFormat:function(g){return qx.locale.Manager.getInstance().localize(c,[],g);
}}});
})();
(function(){var v="qx.debug",u="on",t="&",s="=",r="qx.ioRemoteDebug",q="application/json",p="completed",o="text/plain",n="qx.ioRemoteDebugData",m="text/javascript",e="?",l="qx.io.remote.transport.Script",h="",c="_ScriptTransport_data",b="failed",g="script",f="timeout",j="_ScriptTransport_",a="_ScriptTransport_id",k="aborted",d="utf-8";
qx.Class.define(l,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var H=++qx.io.remote.transport.Script.__oQ;

if(H>=2000000000){qx.io.remote.transport.Script.__oQ=H=1;
}this.__oR=null;
this.__oQ=H;
},statics:{__oQ:0,_instanceRegistry:{},ScriptTransport_PREFIX:j,ScriptTransport_ID_PARAM:a,ScriptTransport_DATA_PARAM:c,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,m,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(F,content){var G=qx.io.remote.transport.Script._instanceRegistry[F];

if(G==null){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{G._responseContent=content;
G._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oS:0,__oR:null,__oQ:null,send:function(){var B=this.getUrl();
B+=(B.indexOf(e)>=0?t:e)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__oQ;
var E=this.getParameters();
var D=[];

for(var A in E){if(A.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var C=E[A];

if(C instanceof Array){for(var i=0;i<C.length;i++){D.push(encodeURIComponent(A)+s+encodeURIComponent(C[i]));
}}else{D.push(encodeURIComponent(A)+s+encodeURIComponent(C));
}}
if(D.length>0){B+=t+D.join(t);
}var z=this.getData();

if(z!=null){B+=t+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+s+encodeURIComponent(z);
}qx.io.remote.transport.Script._instanceRegistry[this.__oQ]=this;
this.__oR=document.createElement(g);
this.__oR.charset=d;
this.__oR.src=B;

if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Request: "+B);
}}document.body.appendChild(this.__oR);
},_switchReadyState:function(w){switch(this.getState()){case p:case k:case b:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__oS<w){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oS]);
}},setRequestHeader:function(I,J){},getResponseHeader:function(y){return null;
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
}}var x=this._responseContent;
return (x===0?0:(x||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,l);
},destruct:function(){if(this.__oR){delete qx.io.remote.transport.Script._instanceRegistry[this.__oQ];
document.body.removeChild(this.__oR);
}this.__oR=this._responseContent=null;
}});
})();
(function(){var q="qx.debug",p="on",o="qx.ioRemoteDebugData",n="failed",m="qx.ioRemoteDebug",k="completed",j="=",h="aborted",g="",f="sending",R="&",Q="configured",P="timeout",O="application/xml",N="qx.io.remote.transport.XmlHttp",M="application/json",L="text/html",K="qx.client",J="receiving",I="text/plain",y="text/javascript",z="created",w="?",x="Boolean",u='Referer',v='Basic ',r="\n</pre>",t="string",A='Authorization',B="<pre>Could not execute json: \n",D="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",C=':',F="parseerror",E="file:",H="webkit",G="object";
qx.Class.define(N,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[I,y,M,O,L]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(K,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:x,init:true}},members:{__my:false,__mz:0,__mA:null,getRequest:function(){if(this.__mA===null){this.__mA=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__mA.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__mA;
},send:function(){this.__mz=0;
var bI=this.getRequest();
var bE=this.getMethod();
var bL=this.getAsynchronous();
var bK=this.getUrl();
var bG=(window.location.protocol===E&&!(/^http(s){0,1}\:/.test(bK)));
this.__my=bG;
var bO=this.getParameters(false);
var bM=[];

for(var bF in bO){var bJ=bO[bF];

if(bJ instanceof Array){for(var i=0;i<bJ.length;i++){bM.push(encodeURIComponent(bF)+j+encodeURIComponent(bJ[i]));
}}else{bM.push(encodeURIComponent(bF)+j+encodeURIComponent(bJ));
}}
if(bM.length>0){bK+=(bK.indexOf(w)>=0?R:w)+bM.join(R);
}if(this.getData()===null){var bO=this.getParameters(true);
var bM=[];

for(var bF in bO){var bJ=bO[bF];

if(bJ instanceof Array){for(var i=0;i<bJ.length;i++){bM.push(encodeURIComponent(bF)+j+encodeURIComponent(bJ[i]));
}}else{bM.push(encodeURIComponent(bF)+j+encodeURIComponent(bJ));
}}
if(bM.length>0){this.setData(bM.join(R));
}}var bN=function(be){var bj=D;
var bn=g;
var bh,bg,bf;
var bk,bl,bm,bi;
var i=0;

do{bh=be.charCodeAt(i++);
bg=be.charCodeAt(i++);
bf=be.charCodeAt(i++);
bk=bh>>2;
bl=((bh&3)<<4)|(bg>>4);
bm=((bg&15)<<2)|(bf>>6);
bi=bf&63;

if(isNaN(bg)){bm=bi=64;
}else if(isNaN(bf)){bi=64;
}bn+=bj.charAt(bk)+bj.charAt(bl)+bj.charAt(bm)+bj.charAt(bi);
}while(i<be.length);
return bn;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bI.open(bE,bK,bL);
bI.setRequestHeader(A,v+bN(this.getUsername()+C+this.getPassword()));
}else{bI.open(bE,bK,bL,this.getUsername(),this.getPassword());
}}else{bI.open(bE,bK,bL);
}}catch(bs){this.error("Failed with exception: "+bs);
this.failed();
return;
}if(!qx.core.Variant.isSet(K,H)){bI.setRequestHeader(u,window.location.href);
}var bH=this.getRequestHeaders();

for(var bF in bH){bI.setRequestHeader(bF,bH[bF]);
}try{if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Request: "+this.getData());
}}bI.send(this.getData());
}catch(bc){if(bG){this.failedLocally();
}else{this.error("Failed to send data: "+bc,"send");
this.failed();
}return;
}if(!bL){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===n){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case n:case P:if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(m)){this.warn("Ignore Ready State Change");
}}return;
}var bd=this.getReadyState();

if(bd==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bd,this.__my)){if(this.getState()===Q){this.setState(f);
}this.failed();
return;
}}while(this.__mz<bd){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mz]);
}}),getReadyState:function(){var bb=null;

try{bb=this.getRequest().readyState;
}catch(X){}return bb;
},setRequestHeader:function(bo,bp){this.getRequestHeaders()[bo]=bp;
},getResponseHeader:function(bC){var bD=null;

try{bD=this.getRequest().getResponseHeader(bC)||null;
}catch(d){}return bD;
},getStringResponseHeaders:function(){var bT=null;

try{var bS=this.getRequest().getAllResponseHeaders();

if(bS){bT=bS;
}}catch(br){}return bT;
},getResponseHeaders:function(){var V=this.getStringResponseHeaders();
var W={};

if(V){var T=V.split(/[\r\n]+/g);

for(var i=0,l=T.length;i<l;i++){var U=T[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(U){W[U[1]]=U[2];
}}}return W;
},getStatusCode:function(){var bt=-1;

try{bt=this.getRequest().status;
}catch(S){}return bt;
},getStatusText:function(){var bu=g;

try{bu=this.getRequest().statusText;
}catch(ba){}return bu;
},getResponseText:function(){var bz=null;

try{bz=this.getRequest().responseText;
}catch(bv){bz=null;
}return bz;
},getResponseXml:function(){var by=null;
var bw=this.getStatusCode();
var bx=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bw,bx,this.__my)){try{by=this.getRequest().responseXML;
}catch(bq){}}if(typeof by==G&&by!=null){if(!by.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,g);
by.loadXML(s);
}if(!by.documentElement){throw new Error("Missing Document Element!");
}
if(by.documentElement.tagName==F){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return by;
},getFetchedLength:function(){var bB=this.getResponseText();
return typeof bB==t?bB.length:0;
},getResponseContent:function(){var bP=this.getState();

if(bP!==k&&bP!=n){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(m)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(m)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bR=this.getResponseText();

if(bP==n){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Failed: "+bR);
}}return bR;
}
switch(this.getResponseType()){case I:case L:if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Response: "+bR);
}}return bR;
case M:if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Response: "+bR);
}}
try{if(bR&&bR.length>0){var bQ;

if(this.getParseJson()){bQ=qx.util.Json.parse(bR,false);
bQ=(bQ===0?0:(bQ||null));
}else{bQ=bR;
}return bQ;
}else{return null;
}}catch(Y){this.error("Could not execute json: ["+bR+"]",Y);
return B+bR+r;
}case y:if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Response: "+bR);
}}
try{if(bR&&bR.length>0){var bQ=window.eval(bR);
return (bQ===0?0:(bQ||null));
}else{return null;
}}catch(bA){this.error("Could not execute javascript: ["+bR+"]",bA);
return null;
}case O:bR=this.getResponseXml();

if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(o)){this.debug("Response: "+bR);
}}return (bR===0?0:(bR||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(b,c){if(qx.core.Variant.isSet(q,p)){if(qx.core.Setting.get(m)){this.debug("State: "+b);
}}
switch(b){case z:this.fireEvent(z);
break;
case Q:this.fireEvent(Q);
break;
case f:this.fireEvent(f);
break;
case J:this.fireEvent(J);
break;
case k:this.fireEvent(k);
break;
case n:this.fireEvent(n);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case P:this.getRequest().abort();
this.fireEvent(P);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,N);
},destruct:function(){var a=this.getRequest();

if(a){a.onreadystatechange=qx.lang.Function.empty;
switch(a.readyState){case 1:case 2:case 3:a.abort();
}}this.__mA=null;
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
(function(){var bc="test",bb="",ba="All",Y=".",X="^",W="demobrowser.TreeDataHandler",V="ttree",U="\\.[^\\.]+$",T="depth";
qx.Class.define(W,{extend:qx.core.Object,construct:function(S){qx.core.Object.call(this);
this.tmap=S;
this.ttree=this.__Lh(S);
},members:{__Lh:function(e){var g=e;
function f(t,u){var x=u.classname;
var v=x.split(Y);
function w(parent,I){if(!I.length){return parent;
}else{var J=I[0];
var K=I.slice(1,I.length);
var L=null;
var M=null;
var N=parent.getChildren();

for(var i=0;i<N.length;i++){if(N[i].label==J){M=N[i];
break;
}}if(M==null){M=new demobrowser.Tree(J);
parent.add(M);
}L=w(M,K);
return L;
}}var y=w(t,v);

if(!y){throw new Error("No target to insert tests");
}h.readTree(u,y);
}function k(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var l=new demobrowser.Tree(ba);
var h=this;
g.sort(k);

for(var i=0;i<g.length;i++){f(l,g[i]);
}return l;
},readTree:function(bl,bm){var bo=arguments[1]||new demobrowser.Tree(bl.classname);
var bm;
function bn(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}
if(bl.tests){bl.tests.sort(bn);

for(var j=0;j<bl.tests.length;j++){bm=new demobrowser.Tree(bl.tests[j].name);
bm.tags=bl.tests[j].tags;
bm.type=bc;
bm.desc=bl.tests[j].desc;
bm.manifest=bl.tests[j].manifest;
bo.add(bm);
}}if(bl.children&&bl.children.length){for(var j=0;j<bl.children.length;j++){var bp=this.readTree(bl.children[j]);
{};
bo.add(bp);
}}{};
return bo;
},getRoot:function(){if(!this.Root){var R={classname:bb,tests:[]};
var Q=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(R.classname.length>Q[i].classname.length){R=Q[i];
}}this.Root=R;
}return this.Root.classname;
},getChilds:function(D){var E=[];
var G=this.tmap;
var F=X+D+U;
var H=new RegExp(F);

for(var i=0;i<G.length;i++){if(G[i].classname.match(H)){E.push(G[i]);
}}return E;
},getTests:function(m){var n=this.tmap;

for(var i=0;i<n.length;i++){if(n[i].classname==m){return n[i].tests;
}}return [];
},getPath:function(O){if(!O){return bb;
}var P=O.pwd();
P.shift();
if(this.isClass(O)){P=P.concat(O.label);
}return P;
},getChildren:function(bh){if(bh==ba){var bi=this.tmap;
var bj=[];

for(var i=0;i<bi.length;i++){bj.push(bi[i].classname);
}return bj;
}else if(this.isClass(bh)){return this.getTests(bh);
}else{return [];
}},isClass:function(bk){if(bk.type&&bk.type==bc){return false;
}else{return true;
}},hasTests:function(c){if(!this.isClass(c)){return false;
}else{var d=c.getChildren();

for(var i=0;i<d.length;i++){if(d[i].type&&d[i].type==bc){return true;
}}return false;
}},classFromTest:function(o){var p=bb;
var q=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==o){p=this.tmap[i].classname;
break classloop;
}}}return p;
},getFullName:function(B){if(!B){return bb;
}var C=this.getPath(B);

if(B.type&&B.type==bc){C=C.concat(B.label);
}return C.join(Y);
},getPreviousNode:function(z){var A=z.getPrevSibling();

if(A){return A;
}},getNextNode:function(r){var s=r.getNextSibling();

if(s){return s;
}},testCount:function(bd){if(bd.type&&bd.type==bc){return 1;
}else{var be=0;
var bg=bd.getIterator(T);
var bf;

while(bf=bg()){if(bf.type&&bf.type==bc){be++;
}}return be;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(V);
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
},map:function(t,u){var v=k;
var w=this;
var x=this.getIterator(v);

while(w=x()){t.apply(w,u);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(l){var n=[this];
var m=l==k?1:0;
function f(){var r;

if(n.length){r=n.shift();
var s=r.getChildren();

if(s.length){if(m){n=s.concat(n);
}else{n=n.concat(s);
}}}else{r=null;
}return r;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(y){var z=this.parent.getChildren();
var A=this.self(arguments).indexOf(z,this);
var B=A+y;

if(z[B]){return z[B];
}},add:function(q){this.children.push(q);
q.parent=this;
}},statics:{indexOf:function(o,p){for(var i=0;i<o.length;i++){if(o[i]==p){return i;
}}}},destruct:function(){this._disposeObjects(e,g,d);
this._disposeArray(b);
this._disposeArray(j);
this._disposeMap(c);
}});
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
var bt=function(bT){return new RegExp(s+bT+u);
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
},javaScriptToHtml:function(bM){var bQ=qx.dev.Tokenizer.tokenizeJavaScript(bM);
var bP=new qx.util.StringBuilder();

for(var i=0;i<bQ.length;i++){var bR=bQ[i];
var bO=qx.bom.String.escape(bR.value);

switch(bR.type){case be:bP.add(Q,bO,l);
break;
case bg:bP.add(E,bO,l);
break;
case b:case bb:bP.add(m,bO,l);
break;
case c:case e:bP.add(o,bO,l);
break;
case bf:case ba:case h:bP.add(U,bR.type,V,bO,l);
break;
case j:var bN=qx.bom.client.Engine.MSHTML?K:R;
bP.add(bN);
break;
case g:var bS=qx.bom.client.Engine.MSHTML?x:J;
bP.add(bS);
break;
default:bP.add(bO);
}}return bP.get();
}}});
})();
(function(){var h="",g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(j){return qx.util.StringEscape.escape(j,qx.bom.String.FROM_CHARCODE);
},unescape:function(o){return qx.util.StringEscape.unescape(o,qx.bom.String.TO_CHARCODE);
},fromText:function(n){return qx.bom.String.escape(n).replace(/(  |\n)/g,function(k){var l={"  ":f,"\n":e};
return l[k]||k;
});
},toText:function(i){return qx.bom.String.unescape(i.replace(/\s+|<([^>])+>/gi,function(a){if(a.indexOf(g)===0){return c;
}else if(a.length>0&&a.replace(/^\s*/,h).replace(/\s*$/,h)==h){return d;
}else{return h;
}}));
}},defer:function(m){m.FROM_CHARCODE=qx.lang.Object.invert(m.TO_CHARCODE);
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
}},properties:{width:{check:i,init:0,apply:g},style:{nullable:true,check:[o,n,l,m],init:o,apply:t},color:{nullable:true,check:q,apply:t},backgroundColor:{check:q,nullable:true,apply:t}},members:{__rd:null,_getDefaultInsets:function(){var v=this.getWidth();
return {top:v,right:v,bottom:v,left:v};
},_isInitialized:function(){return !!this.__rd;
},getMarkup:function(){if(this.__rd){return this.__rd;
}var a={position:h,top:0,left:0};
var b=this.getWidth();

if(qx.core.Variant.isSet(u,s)){if(b===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var d=qx.theme.manager.Color.getInstance();
a.border=b+j+this.getStyle()+f+(d.resolve(this.getColor())||r);
var c=this._generateBackgroundMarkup(a);
return this.__rd=c;
},resize:function(z,A,B){var D=this.getBackgroundImage()&&this.getBackgroundRepeat()==e;

if(D||qx.bom.client.Feature.CONTENT_BOX){var C=this.getWidth()*2;
A-=C;
B-=C;
if(A<0){A=0;
}
if(B<0){B=0;
}}z.style.width=A+p;
z.style.height=B+p;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.style.backgroundColor=y.resolve(x)||r;
},_applyWidth:function(){if(qx.core.Variant.isSet(u,s)){if(this.__rd){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(u,s)){if(this.__rd){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__rd=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px",d="px ",c="dotted",b="_applyWidth",a="dashed",G="Number",F=" ",E="qx.debug",D="shorthand",C="on",B="widthTop",A="styleRight",z="styleLeft",y="widthLeft",x="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="border-top",s="border-left",t="border-right",v="qx.ui.decoration.Single",u="border-bottom",w="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){qx.ui.decoration.Abstract.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:G,init:0,apply:b},widthRight:{check:G,init:0,apply:b},widthBottom:{check:G,init:0,apply:b},widthLeft:{check:G,init:0,apply:b},styleTop:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleRight:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,c,a,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,c,a,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[y,z,m]},right:{group:[p,A,n]},top:{group:[B,q,k]},bottom:{group:[x,o,r]},width:{group:[B,p,x,y],mode:D},style:{group:[q,A,o,z],mode:D},color:{group:[k,n,r,m],mode:D}},members:{__pk:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__pk;
},getMarkup:function(O){if(this.__pk){return this.__pk;
}var P=qx.theme.manager.Color.getInstance();
var Q={};
var S=this.getWidthTop();

if(S>0){Q[l]=S+d+this.getStyleTop()+F+(P.resolve(this.getColorTop())||g);
}var S=this.getWidthRight();

if(S>0){Q[t]=S+d+this.getStyleRight()+F+(P.resolve(this.getColorRight())||g);
}var S=this.getWidthBottom();

if(S>0){Q[u]=S+d+this.getStyleBottom()+F+(P.resolve(this.getColorBottom())||g);
}var S=this.getWidthLeft();

if(S>0){Q[s]=S+d+this.getStyleLeft()+F+(P.resolve(this.getColorLeft())||g);
}if(qx.core.Variant.isSet(E,C)){if(Q.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}Q.position=w;
Q.top=0;
Q.left=0;
var R=this._generateBackgroundMarkup(Q);
return this.__pk=R;
},resize:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}H.style.width=I+e;
H.style.height=J+e;
H.style.left=(parseInt(H.style.left)+K.left-this.getWidthLeft())+e;
H.style.top=(parseInt(H.style.top)+K.top-this.getWidthTop())+e;
},tint:function(L,M){var N=qx.theme.manager.Color.getInstance();

if(M==null){M=this.getBackgroundColor();
}L.style.backgroundColor=N.resolve(M)||g;
},_applyWidth:function(){if(qx.core.Variant.isSet(E,C)){if(this.__pk){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(E,C)){if(this.__pk){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__pk=null;
}});
})();
(function(){var s="Number",r="_applyInsets",q="-l",p="Please verify the image '",o="' is present.",n="-t",m="insetRight",l="insetTop",k="qx.debug",j="The value of the property 'topSlice' is null! ",d="The value of the property 'leftSlice' is null! ",i="_applyBaseImage",g="insetBottom",c="set",b="shorthand",f="insetLeft",e="String",h="qx.ui.decoration.Grid",a="on";
qx.Class.define(h,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(B,C){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mV=new qx.ui.decoration.css3.BorderImage();

if(B){this.__mW(B);
}}else{this.__mV=new qx.ui.decoration.GridDiv(B);
}
if(C!=null){this.__mV.setInsets(C);
}},properties:{baseImage:{check:e,nullable:true,apply:i},insetLeft:{check:s,nullable:true,apply:r},insetRight:{check:s,nullable:true,apply:r},insetBottom:{check:s,nullable:true,apply:r},insetTop:{check:s,nullable:true,apply:r},insets:{group:[l,m,g,f],mode:b}},members:{__mV:null,getMarkup:function(){return this.__mV.getMarkup();
},resize:function(y,z,A){this.__mV.resize(y,z,A);
},tint:function(w,x){},getInsets:function(){return this.__mV.getInsets();
},_applyInsets:function(t,u,name){var v=c+qx.lang.String.firstUp(name);
this.__mV[v](t);
},_applyBaseImage:function(N,O){if(this.__mV instanceof qx.ui.decoration.GridDiv){this.__mV.setBaseImage(N);
}else{this.__mW(N);
}},__mW:function(D){this.__mV.setBorderImage(D);
var J=qx.util.AliasManager.getInstance().resolve(D);
var K=/(.*)(\.[a-z]+)$/.exec(J);
var G=K[1];
var I=K[2];
var E=qx.util.ResourceManager.getInstance();
var L=E.getImageHeight(G+n+I);
var M=E.getImageWidth(G+q+I);

if(qx.core.Variant.isSet(k,a)){var F=j+p+G+n+I+o;
var H=d+p+G+q+I+o;
qx.core.Assert.assertNotNull(L,F);
qx.core.Assert.assertNotNull(M,H);
}this.__mV.setSlice([L,M]);
}},destruct:function(){this.__mV=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",x='</div>',w="qx.ui.decoration.Beveled",v="qx.debug",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r='border-left:',q='border-top:',p="Number",o='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on",l="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(J,K,L){qx.ui.decoration.Abstract.call(this);
if(J!=null){this.setOuterColor(J);
}
if(K!=null){this.setInnerColor(K);
}
if(L!=null){this.setInnerOpacity(L);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:p,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__qL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__qL;
},_applyStyle:function(){if(qx.core.Variant.isSet(v,k)){if(this.__qL){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__qL){return this.__qL;
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
N.push(qx.bom.element.Opacity.compile(1));
N.push(i);
N.push(f);
N.push(m);
N.push(q,Q);
N.push(t,Q);
N.push(qx.bom.element.Opacity.compile(1));
N.push(i);
var O={position:l,top:g,left:g,opacity:1};
N.push(this._generateBackgroundMarkup(O));
N.push(u);
N.push(e,P);
N.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
N.push(i);
N.push(x);
return this.__qL=N.join(c);
},resize:function(y,z,A){if(z<4){z=4;
}
if(A<4){A=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=z-2;
var outerHeight=A-2;
var G=outerWidth;
var F=outerHeight;
var innerWidth=z-4;
var innerHeight=A-4;
}else{var outerWidth=z;
var outerHeight=A;
var G=z-2;
var F=A-2;
var innerWidth=G;
var innerHeight=F;
}var I=a;
var E=y.childNodes[0].style;
E.width=outerWidth+I;
E.height=outerHeight+I;
var D=y.childNodes[1].style;
D.width=outerWidth+I;
D.height=F+I;
var C=y.childNodes[2].style;
C.width=G+I;
C.height=outerHeight+I;
var B=y.childNodes[3].style;
B.width=G+I;
B.height=F+I;
var H=y.childNodes[4].style;
H.width=innerWidth+I;
H.height=innerHeight+I;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.childNodes[3].style.backgroundColor=T.resolve(S)||c;
}},destruct:function(){this.__qL=null;
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
(function(){var gR="button-frame",gQ="atom",gP="widget",gO="main",gN="button",gM="text-selected",gL="image",gK="bold",gJ="middle",gI="background-light",fw="text-disabled",fv="groupbox",fu="decoration/arrows/down.png",ft="cell",fs="selected",fr="border-invalid",fq="input",fp="input-disabled",fo="menu-button",fn="input-focused-invalid",gY="toolbar-button",ha="spinner",gW="input-focused",gX="popup",gU="tooltip",gV="label",gS="list",gT="white",hb="tree-item",hc="treevirtual-contract",gr="scrollbar",gq="datechooser/nav-button",gt="text-hovered",gs="center",gv="treevirtual-expand",gu="textfield",gx="decoration/arrows/right.png",gw="background-application",gp="radiobutton",go="invalid",du="combobox",dv="right-top",dw="checkbox",dx="text-title",dy="qx/static/blank.gif",dz="scrollbar/button",dA="right",dB="combobox/button",dC="icon/16/places/folder.png",dD="text-label",hq="decoration/tree/closed.png",hp="scrollbar-slider-horizontal",ho="checkbox-checked",hn="decoration/arrows/left.png",hu="button-focused",ht="text-light",hs="menu-slidebar-button",hr="text-input",hw="slidebar/button-forward",hv="background-splitpane",ew=".png",ex="decoration/tree/open.png",eu="default",ev="decoration/arrows/down-small.png",eA="datechooser",eB="slidebar/button-backward",ey="selectbox",ez="treevirtual-folder",es="shadow-popup",et="icon/16/mimetypes/office-document.png",dX="background-medium",dW="table",ea="decoration/arrows/up.png",dY="decoration/form/",dT="",dS="-invalid",dV="icon/16/places/folder-open.png",dU="button-checked",dR="decoration/window/maximize-active-hovered.png",dQ="radiobutton-hovered",eH="keyboard-focus",eI="decoration/cursors/",eJ="slidebar",eK="tooltip-error-arrow",eD="table-scroller-focus-indicator",eE="move-frame",eF="nodrop",eG="decoration/table/boolean-true.png",eL="table-header-cell",eM="menu",el="app-header",ek="row-layer",ej="text-inactive",ei="move",eh="radiobutton-checked-focused",eg="decoration/window/restore-active-hovered.png",ef="shadow-window",ee="table-column-button",ep="right.png",eo="tabview-page-button-bottom-inactive",eN="tooltip-error",eO="window-statusbar",eP="button-hovered",eQ="decoration/scrollbar/scrollbar-",eR="background-tip",eS="scrollbar-slider-horizontal-disabled",eT="table-scroller-header",eU="button-pressed",eV="table-pane",eW="decoration/window/close-active.png",fE="native",fD="checkbox-hovered",fC="button-invalid-shadow",fB="decoration/window/minimize-active-hovered.png",fI="menubar",fH="icon/16/actions/dialog-cancel.png",fG="tabview-page-button-top-inactive",fF="tabview-page-button-left-inactive",fM="menu-slidebar",fL="toolbar-button-checked",gk="decoration/tree/open-selected.png",gl="radiobutton-checked",gi="decoration/window/minimize-inactive.png",gj="icon/16/apps/office-calendar.png",gg="group",gh="tabview-page-button-right-inactive",ge="decoration/window/minimize-active.png",gf="decoration/window/restore-inactive.png",gm="checkbox-checked-focused",gn="splitpane",gB="combobox/textfield",gA="button-preselected-focused",gD="decoration/window/close-active-hovered.png",gC="qx/icon/Tango/16/actions/window-close.png",gF="checkbox-pressed",gE="button-disabled",gH="selected-dragover",gG="border-separator",gz="decoration/window/maximize-inactive.png",gy="dragover",hj="scrollarea",hk="scrollbar-vertical",hl="decoration/menu/checkbox-invert.gif",hm="decoration/toolbar/toolbar-handle-knob.gif",hf="icon/22/mimetypes/office-document.png",hg="button-preselected",hh="button-checked-focused",hi="up.png",hd="best-fit",he="decoration/tree/closed-selected.png",dt="qx.theme.modern.Appearance",ds="text-active",dr="toolbar-button-hovered",dq="progressive-table-header",dp="decoration/table/select-column-order.png",dn="decoration/menu/radiobutton.gif",dm="decoration/arrows/forward.png",dl="decoration/table/descending.png",dk="window-captionbar-active",dj="checkbox-checked-hovered",dG="scrollbar-slider-vertical",dH="toolbar",dE="alias",dF="decoration/window/restore-active.png",dK="decoration/table/boolean-false.png",dL="icon/32/mimetypes/office-document.png",dI="radiobutton-checked-disabled",dJ="tabview-pane",dN="decoration/arrows/rewind.png",dO="checkbox-focused",fQ="top",fK="icon/16/actions/dialog-ok.png",fX="radiobutton-checked-hovered",fT="table-header-cell-hovered",fz="window",fx="text-gray",ec="decoration/menu/radiobutton-invert.gif",fA="text-placeholder",en="slider",em="keep-align",ff="down.png",fg="tabview-page-button-top-active",fh="icon/32/places/folder-open.png",fi="icon/22/places/folder.png",fj="decoration/window/maximize-active.png",fk="checkbox-checked-pressed",fl="decoration/window/close-inactive.png",fm="tabview-page-button-left-active",fd="toolbar-part",fe="decoration/splitpane/knob-vertical.png",fy=".gif",fW="icon/22/places/folder-open.png",fV="radiobutton-checked-pressed",fU="table-statusbar",gc="radiobutton-pressed",gb="window-captionbar-inactive",ga="copy",fY="radiobutton-focused",fS="decoration/arrows/down-invert.png",fR="decoration/menu/checkbox.gif",dM="decoration/splitpane/knob-horizontal.png",er="icon/32/places/folder.png",eq="toolbar-separator",fJ="tabview-page-button-bottom-active",eC="decoration/arrows/up-small.png",fP="decoration/table/ascending.png",fO="decoration/arrows/up-invert.png",fN="small",eb="tabview-page-button-right-active",gd="-disabled",dP="scrollbar-horizontal",ed="progressive-table-header-cell",eX="menu-separator",eY="pane",fa="decoration/arrows/right-invert.png",fb="left.png",fc="icon/16/actions/view-refresh.png";
qx.Theme.define(dt,{appearances:{"widget":{},"root":{style:function(hM){return {backgroundColor:gw,textColor:dD,font:eu};
}},"label":{style:function(cj){return {textColor:cj.disabled?fw:undefined};
}},"move-frame":{style:function(cd){return {decorator:gO};
}},"resize-frame":eE,"dragdrop-cursor":{style:function(g){var h=eF;

if(g.copy){h=ga;
}else if(g.move){h=ei;
}else if(g.alias){h=dE;
}return {source:eI+h+fy,position:dv,offset:[2,16,2,6]};
}},"image":{style:function(bA){return {opacity:!bA.replacement&&bA.disabled?0.3:1};
}},"atom":{},"atom/label":gV,"atom/icon":gL,"popup":{style:function(m){return {decorator:gO,backgroundColor:gI,shadow:es};
}},"button-frame":{alias:gQ,style:function(ck){var cm,cl;

if(ck.checked&&ck.focused&&!ck.inner){cm=hh;
cl=undefined;
}else if(ck.disabled){cm=gE;
cl=undefined;
}else if(ck.pressed){cm=eU;
cl=gt;
}else if(ck.checked){cm=dU;
cl=undefined;
}else if(ck.hovered){cm=eP;
cl=gt;
}else if(ck.preselected&&ck.focused&&!ck.inner){cm=gA;
cl=gt;
}else if(ck.preselected){cm=hg;
cl=gt;
}else if(ck.focused&&!ck.inner){cm=hu;
cl=undefined;
}else{cm=gN;
cl=undefined;
}return {decorator:cm,textColor:cl,shadow:ck.invalid&&!ck.disabled?fC:undefined};
}},"button-frame/image":{style:function(cc){return {opacity:!cc.replacement&&cc.disabled?0.5:1};
}},"button":{alias:gR,include:gR,style:function(N){return {padding:[2,8],center:true};
}},"hover-button":{alias:gQ,include:gQ,style:function(hx){return {decorator:hx.hovered?fs:undefined,textColor:hx.hovered?gM:undefined};
}},"splitbutton":{},"splitbutton/button":gN,"splitbutton/arrow":{alias:gN,include:gN,style:function(by){return {icon:fu,padding:2,marginLeft:1};
}},"checkbox":{alias:gQ,style:function(cy){var cA;
if(cy.checked){if(cy.disabled){cA=ho;
}else if(cy.focused){cA=gm;
}else if(cy.pressed){cA=fk;
}else if(cy.hovered){cA=dj;
}else{cA=ho;
}}else if(!cy.disabled){if(cy.focused){cA=dO;
}else if(cy.pressed){cA=gF;
}else if(cy.hovered){cA=fD;
}}cA=cA||dw;
var cz=cy.invalid&&!cy.disabled?dS:dT;
return {icon:dY+cA+cz+ew,gap:6};
}},"radiobutton":{alias:gQ,style:function(hD){var hF;

if(hD.checked&&hD.focused){hF=eh;
}else if(hD.checked&&hD.disabled){hF=dI;
}else if(hD.checked&&hD.pressed){hF=fV;
}else if(hD.checked&&hD.hovered){hF=fX;
}else if(hD.checked){hF=gl;
}else if(hD.focused){hF=fY;
}else if(hD.pressed){hF=gc;
}else if(hD.hovered){hF=dQ;
}else{hF=gp;
}var hE=hD.invalid&&!hD.disabled?dS:dT;
return {icon:dY+hF+hE+ew,gap:6};
}},"textfield":{style:function(bq){var bv;
var bt=!!bq.focused;
var bu=!!bq.invalid;
var br=!!bq.disabled;

if(bt&&bu&&!br){bv=fn;
}else if(bt&&!bu&&!br){bv=gW;
}else if(br){bv=fp;
}else if(!bt&&bu&&!br){bv=fr;
}else{bv=fq;
}var bs;

if(bq.disabled){bs=fw;
}else if(bq.showingPlaceholder){bs=fA;
}else{bs=hr;
}return {decorator:bv,padding:[2,4,1],textColor:bs};
}},"textarea":{include:gu,style:function(w){return {padding:4};
}},"spinner":{style:function(ce){var ci;
var cg=!!ce.focused;
var ch=!!ce.invalid;
var cf=!!ce.disabled;

if(cg&&ch&&!cf){ci=fn;
}else if(cg&&!ch&&!cf){ci=gW;
}else if(cf){ci=fp;
}else if(!cg&&ch&&!cf){ci=fr;
}else{ci=fq;
}return {decorator:ci};
}},"spinner/textfield":{style:function(cJ){return {marginRight:2,padding:[2,4,1],textColor:cJ.disabled?fw:hr};
}},"spinner/upbutton":{alias:gR,include:gR,style:function(W){return {icon:eC,padding:W.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gR,include:gR,style:function(bJ){return {icon:ev,padding:bJ.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":du,"datefield/button":{alias:dB,include:dB,style:function(ic){return {icon:gj,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gB,"datefield/list":{alias:eA,include:eA,style:function(hS){return {decorator:undefined};
}},"groupbox":{style:function(T){return {legendPosition:fQ};
}},"groupbox/legend":{alias:gQ,style:function(i){return {padding:[1,0,1,4],textColor:i.invalid?go:dx,font:gK};
}},"groupbox/frame":{style:function(I){return {padding:12,decorator:gg};
}},"check-groupbox":fv,"check-groupbox/legend":{alias:dw,include:dw,style:function(cS){return {padding:[1,0,1,4],textColor:cS.invalid?go:dx,font:gK};
}},"radio-groupbox":fv,"radio-groupbox/legend":{alias:gp,include:gp,style:function(bI){return {padding:[1,0,1,4],textColor:bI.invalid?go:dx,font:gK};
}},"scrollarea":{style:function(cv){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(x){return {backgroundColor:gw};
}},"scrollarea/pane":gP,"scrollarea/scrollbar-x":gr,"scrollarea/scrollbar-y":gr,"scrollbar":{style:function(co){if(co[fE]){return {};
}return {width:co.horizontal?undefined:16,height:co.horizontal?16:undefined,decorator:co.horizontal?dP:hk,padding:1};
}},"scrollbar/slider":{alias:en,style:function(r){return {padding:r.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gR,style:function(p){var q=p.horizontal?hp:dG;

if(p.disabled){q+=gd;
}return {decorator:q,minHeight:p.horizontal?undefined:9,minWidth:p.horizontal?9:undefined};
}},"scrollbar/button":{alias:gR,include:gR,style:function(bF){var bG=eQ;

if(bF.left){bG+=fb;
}else if(bF.right){bG+=ep;
}else if(bF.up){bG+=hi;
}else{bG+=ff;
}
if(bF.left||bF.right){return {padding:[0,0,0,bF.left?3:4],icon:bG,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bG,width:14,height:15};
}}},"scrollbar/button-begin":dz,"scrollbar/button-end":dz,"slider":{style:function(bW){var cb;
var bY=!!bW.focused;
var ca=!!bW.invalid;
var bX=!!bW.disabled;

if(bY&&ca&&!bX){cb=fn;
}else if(bY&&!ca&&!bX){cb=gW;
}else if(bX){cb=fp;
}else if(!bY&&ca&&!bX){cb=fr;
}else{cb=fq;
}return {decorator:cb};
}},"slider/knob":{include:gR,style:function(cX){return {decorator:cX.disabled?eS:hp,shadow:undefined,height:14,width:14};
}},"list":{alias:hj,style:function(O){var S;
var Q=!!O.focused;
var R=!!O.invalid;
var P=!!O.disabled;

if(Q&&R&&!P){S=fn;
}else if(Q&&!R&&!P){S=gW;
}else if(P){S=fp;
}else if(!Q&&R&&!P){S=fr;
}else{S=fq;
}return {backgroundColor:gI,decorator:S};
}},"list/pane":gP,"listitem":{alias:gQ,style:function(cQ){var cR;

if(cQ.dragover){cR=cQ.selected?gH:gy;
}else{cR=cQ.selected?fs:undefined;
}return {padding:cQ.dragover?[4,4,2,4]:4,textColor:cQ.selected?gM:undefined,decorator:cR};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gR,include:gR,style:function(hT){return {padding:5,center:true,icon:hT.vertical?fu:gx};
}},"slidebar/button-backward":{alias:gR,include:gR,style:function(bE){return {padding:5,center:true,icon:bE.vertical?ea:hn};
}},"tabview":{style:function(hX){return {contentPadding:16};
}},"tabview/bar":{alias:eJ,style:function(F){var G={marginBottom:F.barTop?-1:0,marginTop:F.barBottom?-4:0,marginLeft:F.barRight?-3:0,marginRight:F.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(F.barTop||F.barBottom){G.paddingLeft=5;
G.paddingRight=7;
}else{G.paddingTop=5;
G.paddingBottom=7;
}return G;
}},"tabview/bar/button-forward":{include:hw,alias:hw,style:function(cK){if(cK.barTop||cK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eB,alias:eB,style:function(hR){if(hR.barTop||hR.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(U){return {decorator:dJ,minHeight:100,marginBottom:U.barBottom?-1:0,marginTop:U.barTop?-1:0,marginLeft:U.barLeft?-1:0,marginRight:U.barRight?-1:0};
}},"tabview-page":gP,"tabview-page/button":{alias:gQ,style:function(bi){var bo,bk=0;
var bn=0,bj=0,bl=0,bm=0;

if(bi.checked){if(bi.barTop){bo=fg;
bk=[6,14];
bl=bi.firstTab?0:-5;
bm=bi.lastTab?0:-5;
}else if(bi.barBottom){bo=fJ;
bk=[6,14];
bl=bi.firstTab?0:-5;
bm=bi.lastTab?0:-5;
}else if(bi.barRight){bo=eb;
bk=[6,13];
bn=bi.firstTab?0:-5;
bj=bi.lastTab?0:-5;
}else{bo=fm;
bk=[6,13];
bn=bi.firstTab?0:-5;
bj=bi.lastTab?0:-5;
}}else{if(bi.barTop){bo=fG;
bk=[4,10];
bn=4;
bl=bi.firstTab?5:1;
bm=1;
}else if(bi.barBottom){bo=eo;
bk=[4,10];
bj=4;
bl=bi.firstTab?5:1;
bm=1;
}else if(bi.barRight){bo=gh;
bk=[4,10];
bm=5;
bn=bi.firstTab?5:1;
bj=1;
bl=1;
}else{bo=fF;
bk=[4,10];
bl=5;
bn=bi.firstTab?5:1;
bj=1;
bm=1;
}}return {zIndex:bi.checked?10:5,decorator:bo,padding:bk,marginTop:bn,marginBottom:bj,marginLeft:bl,marginRight:bm,textColor:bi.checked?ds:ej};
}},"tabview-page/button/label":{alias:gV,style:function(hU){return {padding:[0,1,0,1],margin:hU.focused?0:1,decorator:hU.focused?eH:undefined};
}},"tabview-page/button/close-button":{alias:gQ,style:function(cW){return {icon:gC};
}},"toolbar":{style:function(hV){return {decorator:dH,spacing:2};
}},"toolbar/part":{style:function(hO){return {decorator:fd,spacing:2};
}},"toolbar/part/container":{style:function(bN){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(D){return {source:hm,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gQ,style:function(cn){return {marginTop:2,marginBottom:2,padding:(cn.pressed||cn.checked||cn.hovered)&&!cn.disabled||(cn.disabled&&cn.checked)?3:5,decorator:cn.pressed||(cn.checked&&!cn.hovered)||(cn.checked&&cn.disabled)?fL:cn.hovered&&!cn.disabled?dr:undefined};
}},"toolbar-menubutton":{alias:gY,include:gY,style:function(hN){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gL,include:gL,style:function(bT){return {source:ev};
}},"toolbar-splitbutton":{style:function(n){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gY,include:gY,style:function(bc){return {icon:fu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gY,include:gY,style:function(k){if(k.pressed||k.checked||(k.hovered&&!k.disabled)){var l=1;
}else{var l=3;
}return {padding:l,icon:fu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hW){return {decorator:eq,margin:7};
}},"tree":gS,"tree-item":{style:function(dg){return {padding:[2,6],textColor:dg.selected?gM:undefined,decorator:dg.selected?fs:undefined};
}},"tree-item/icon":{include:gL,style:function(bV){return {paddingRight:5};
}},"tree-item/label":gV,"tree-item/open":{include:gL,style:function(cY){var da;

if(cY.selected&&cY.opened){da=gk;
}else if(cY.selected&&!cY.opened){da=he;
}else if(cY.opened){da=ex;
}else{da=hq;
}return {padding:[0,5,0,2],source:da};
}},"tree-folder":{include:hb,alias:hb,style:function(B){var C;

if(B.small){C=B.opened?dV:dC;
}else if(B.large){C=B.opened?fh:er;
}else{C=B.opened?fW:fi;
}return {icon:C};
}},"tree-file":{include:hb,alias:hb,style:function(bK){return {icon:bK.small?et:bK.large?dL:hf};
}},"treevirtual":dW,"treevirtual-folder":{style:function(cU){return {icon:cU.opened?dV:dC};
}},"treevirtual-file":{include:ez,alias:ez,style:function(df){return {icon:et};
}},"treevirtual-line":{style:function(cp){return {icon:dy};
}},"treevirtual-contract":{style:function(L){return {icon:ex,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cs){return {icon:hq,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hc,"treevirtual-only-expand":gv,"treevirtual-start-contract":hc,"treevirtual-start-expand":gv,"treevirtual-end-contract":hc,"treevirtual-end-expand":gv,"treevirtual-cross-contract":hc,"treevirtual-cross-expand":gv,"treevirtual-end":{style:function(cP){return {icon:dy};
}},"treevirtual-cross":{style:function(hY){return {icon:dy};
}},"tooltip":{include:gX,style:function(bL){return {backgroundColor:eR,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gQ,"tooltip-error":{include:gU,style:function(cM){return {textColor:gM,placeMethod:gP,offset:[0,0,0,14],marginTop:-2,position:dv,showTimeout:100,hideTimeout:10000,decorator:eN,shadow:eK,font:gK};
}},"tooltip-error/atom":gQ,"window":{style:function(bC){return {shadow:ef,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(f){return {decorator:fz};
}},"window/captionbar":{style:function(a){return {decorator:a.active?dk:gb,textColor:a.active?gT:fx,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bb){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ct){return {alignY:gJ,font:gK,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gQ,style:function(bw){return {icon:bw.active?bw.hovered?fB:ge:gi,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gQ,style:function(J){return {icon:J.active?J.hovered?eg:dF:gf,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gQ,style:function(dc){return {icon:dc.active?dc.hovered?dR:fj:gz,margin:[4,8,2,0]};
}},"window/close-button":{alias:gQ,style:function(be){return {icon:be.active?be.hovered?gD:eW:fl,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(dd){return {padding:[2,6],decorator:eO,minHeight:18};
}},"window/statusbar-text":{style:function(K){return {font:fN};
}},"iframe":{style:function(cG){return {decorator:gO};
}},"resizer":{style:function(cL){return {decorator:eY};
}},"splitpane":{style:function(hP){return {decorator:gn};
}},"splitpane/splitter":{style:function(o){return {width:o.horizontal?3:undefined,height:o.vertical?3:undefined,backgroundColor:hv};
}},"splitpane/splitter/knob":{style:function(bH){return {source:bH.horizontal?dM:fe};
}},"splitpane/slider":{style:function(hQ){return {width:hQ.horizontal?3:undefined,height:hQ.vertical?3:undefined,backgroundColor:hv};
}},"selectbox":{alias:gR,include:gR,style:function(id){return {padding:[2,8]};
}},"selectbox/atom":gQ,"selectbox/popup":gX,"selectbox/list":{alias:gS},"selectbox/arrow":{include:gL,style:function(hB){return {source:fu,paddingLeft:5};
}},"datechooser":{style:function(bO){var bS;
var bQ=!!bO.focused;
var bR=!!bO.invalid;
var bP=!!bO.disabled;

if(bQ&&bR&&!bP){bS=fn;
}else if(bQ&&!bR&&!bP){bS=gW;
}else if(bP){bS=fp;
}else if(!bQ&&bR&&!bP){bS=fr;
}else{bS=fq;
}return {padding:2,decorator:bS,backgroundColor:gI};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gR,alias:gR,style:function(u){var v={padding:[2,4],shadow:undefined};

if(u.lastYear){v.icon=dN;
v.marginRight=1;
}else if(u.lastMonth){v.icon=hn;
}else if(u.nextYear){v.icon=dm;
v.marginLeft=1;
}else if(u.nextMonth){v.icon=gx;
}return v;
}},"datechooser/last-year-button-tooltip":gU,"datechooser/last-month-button-tooltip":gU,"datechooser/next-year-button-tooltip":gU,"datechooser/next-month-button-tooltip":gU,"datechooser/last-year-button":gq,"datechooser/last-month-button":gq,"datechooser/next-month-button":gq,"datechooser/next-year-button":gq,"datechooser/month-year-label":{style:function(ie){return {font:gK,textAlign:gs,textColor:ie.disabled?fw:undefined};
}},"datechooser/date-pane":{style:function(hK){return {textColor:hK.disabled?fw:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(cr){return {textColor:cr.disabled?fw:cr.weekend?ht:undefined,textAlign:gs,paddingTop:2,backgroundColor:dX};
}},"datechooser/week":{style:function(j){return {textAlign:gs,padding:[2,4],backgroundColor:dX};
}},"datechooser/day":{style:function(hC){return {textAlign:gs,decorator:hC.disabled?undefined:hC.selected?fs:undefined,textColor:hC.disabled?fw:hC.selected?gM:hC.otherMonth?ht:undefined,font:hC.today?gK:undefined,padding:[2,4]};
}},"combobox":{style:function(cB){var cF;
var cD=!!cB.focused;
var cE=!!cB.invalid;
var cC=!!cB.disabled;

if(cD&&cE&&!cC){cF=fn;
}else if(cD&&!cE&&!cC){cF=gW;
}else if(cC){cF=fp;
}else if(!cD&&cE&&!cC){cF=fr;
}else{cF=fq;
}return {decorator:cF};
}},"combobox/popup":gX,"combobox/list":{alias:gS},"combobox/button":{include:gR,alias:gR,style:function(hG){var hH={icon:fu,padding:2};

if(hG.selected){hH.decorator=hu;
}return hH;
}},"combobox/textfield":{include:gu,style:function(hA){return {decorator:undefined};
}},"menu":{style:function(bf){var bg={decorator:eM,shadow:es,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:bf.submenu||bf.contextmenu?hd:em};

if(bf.submenu){bg.position=dv;
bg.offset=[-2,-3];
}return bg;
}},"menu/slidebar":fM,"menu-slidebar":gP,"menu-slidebar-button":{style:function(bz){return {decorator:bz.hovered?fs:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hs,style:function(ba){return {icon:ba.hovered?fO:ea};
}},"menu-slidebar/button-forward":{include:hs,style:function(H){return {icon:H.hovered?fS:fu};
}},"menu-separator":{style:function(cx){return {height:0,decorator:eX,margin:[4,2]};
}},"menu-button":{alias:gQ,style:function(cH){return {decorator:cH.selected?fs:undefined,textColor:cH.selected?gM:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gL,style:function(hL){return {alignY:gJ};
}},"menu-button/label":{include:gV,style:function(cN){return {alignY:gJ,padding:1};
}},"menu-button/shortcut":{include:gV,style:function(bU){return {alignY:gJ,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gL,style:function(c){return {source:c.selected?fa:gx,alignY:gJ};
}},"menu-checkbox":{alias:fo,include:fo,style:function(bp){return {icon:!bp.checked?undefined:bp.selected?hl:fR};
}},"menu-radiobutton":{alias:fo,include:fo,style:function(bM){return {icon:!bM.checked?undefined:bM.selected?ec:dn};
}},"menubar":{style:function(M){return {decorator:fI};
}},"menubar-button":{alias:gQ,style:function(bD){return {decorator:(bD.pressed||bD.hovered)&&!bD.disabled?fs:undefined,textColor:bD.pressed||bD.hovered?gM:undefined,padding:[3,8]};
}},"colorselector":gP,"colorselector/control-bar":gP,"colorselector/control-pane":gP,"colorselector/visual-pane":fv,"colorselector/preset-grid":gP,"colorselector/colorbucket":{style:function(db){return {decorator:gO,width:16,height:16};
}},"colorselector/preset-field-set":fv,"colorselector/input-field-set":fv,"colorselector/preview-field-set":fv,"colorselector/hex-field-composite":gP,"colorselector/hex-field":gu,"colorselector/rgb-spinner-composite":gP,"colorselector/rgb-spinner-red":ha,"colorselector/rgb-spinner-green":ha,"colorselector/rgb-spinner-blue":ha,"colorselector/hsb-spinner-composite":gP,"colorselector/hsb-spinner-hue":ha,"colorselector/hsb-spinner-saturation":ha,"colorselector/hsb-spinner-brightness":ha,"colorselector/preview-content-old":{style:function(hJ){return {decorator:gO,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cu){return {decorator:gO,backgroundColor:gI,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(E){return {decorator:gO,margin:5};
}},"colorselector/brightness-field":{style:function(bx){return {decorator:gO,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gP,"colorselector/hue-saturation-handle":gP,"colorselector/brightness-pane":gP,"colorselector/brightness-handle":gP,"colorpopup":{alias:gX,include:gX,style:function(V){return {padding:5,backgroundColor:gw};
}},"colorpopup/field":{style:function(cO){return {decorator:gO,margin:2,width:14,height:14,backgroundColor:gI};
}},"colorpopup/selector-button":gN,"colorpopup/auto-button":gN,"colorpopup/preview-pane":fv,"colorpopup/current-preview":{style:function(cq){return {height:20,padding:4,marginLeft:4,decorator:gO,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bd){return {height:20,padding:4,marginRight:4,decorator:gO,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gN,include:gN,style:function(Y){return {icon:fK};
}},"colorpopup/colorselector-cancelbutton":{alias:gN,include:gN,style:function(X){return {icon:fH};
}},"table":{alias:gP,style:function(ib){return {decorator:dW};
}},"table-header":{},"table/statusbar":{style:function(de){return {decorator:fU,padding:[0,2]};
}},"table/column-button":{alias:gR,style:function(e){return {decorator:ee,padding:3,icon:dp};
}},"table-column-reset-button":{include:fo,alias:fo,style:function(){return {icon:fc};
}},"table-scroller":gP,"table-scroller/scrollbar-x":gr,"table-scroller/scrollbar-y":gr,"table-scroller/header":{style:function(cw){return {decorator:eT};
}},"table-scroller/pane":{style:function(ia){return {backgroundColor:eV};
}},"table-scroller/focus-indicator":{style:function(b){return {decorator:eD};
}},"table-scroller/resize-line":{style:function(t){return {backgroundColor:gG,width:2};
}},"table-header-cell":{alias:gQ,style:function(dh){return {minWidth:13,minHeight:20,padding:dh.hovered?[3,4,2,4]:[3,4],decorator:dh.hovered?fT:eL,sortIcon:dh.sorted?(dh.sortedAscending?fP:dl):undefined};
}},"table-header-cell/label":{style:function(cT){return {minWidth:0,alignY:gJ,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hy){return {alignY:gJ,alignX:dA};
}},"table-header-cell/icon":{style:function(cI){return {minWidth:0,alignY:gJ,paddingRight:5};
}},"table-editor-textfield":{include:gu,style:function(bB){return {decorator:undefined,padding:[2,2],backgroundColor:gI};
}},"table-editor-selectbox":{include:ey,alias:ey,style:function(bh){return {padding:[0,2],backgroundColor:gI};
}},"table-editor-combobox":{include:du,alias:du,style:function(y){return {decorator:undefined,backgroundColor:gI};
}},"progressive-table-header":{alias:gP,style:function(A){return {decorator:dq};
}},"progressive-table-header-cell":{alias:gQ,style:function(s){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ed};
}},"app-header":{style:function(cV){return {font:gK,textColor:gM,padding:[8,12],decorator:el};
}},"virtual-list":gS,"virtual-list/row-layer":ek,"row-layer":{style:function(hI){return {colorEven:gT,colorOdd:gT};
}},"column-layer":gP,"cell":{style:function(d){return {textColor:d.selected?gM:dD,padding:[3,6],font:eu};
}},"cell-string":ft,"cell-number":{include:ft,style:function(z){return {textAlign:dA};
}},"cell-image":ft,"cell-boolean":{include:ft,style:function(di){return {iconTrue:eG,iconFalse:dK};
}},"cell-atom":ft,"cell-date":ft,"cell-html":ft,"htmlarea":{"include":gP,style:function(hz){return {backgroundColor:gT};
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
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:u,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[q,w,a,x],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[v,m],mode:c}},members:{__mR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mR;
},getMarkup:function(){if(this.__mR){return this.__mR;
}var J=this._resolveImageUrl(this.getBorderImage());
var K=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var L=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__mR=[z,qx.bom.element.Style.compile({"borderImage":n+J+p+K.join(f)+f+L,position:k,lineHeight:0,fontSize:0,overflow:o,boxSizing:s,borderWidth:K.join(b)+g}),A].join(r);
return this.__mR;
},resize:function(D,E,F){D.style.width=E+g;
D.style.height=F+g;
},tint:function(B,C){},_applyStyle:function(){if(qx.core.Variant.isSet(y,l)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(I){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(I));
}},destruct:function(){this.__mR=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="on";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBaseImage(F);
}
if(G!=null){this.setInsets(G);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__mS:null,__mT:null,__mU:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mS;
},getMarkup:function(){if(this.__mS){return this.__mS;
}var H=qx.bom.element.Decoration;
var I=this.__mT;
var J=this.__mU;
var K=[];
K.push(u);
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
},resize:function(L,M,N){var O=this.__mU;
var innerWidth=M-O.left-O.right;
var innerHeight=N-O.top-O.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}L.style.width=M+j;
L.style.height=N+j;
L.childNodes[1].style.width=innerWidth+j;
L.childNodes[4].style.width=innerWidth+j;
L.childNodes[7].style.width=innerWidth+j;
L.childNodes[6].style.height=innerHeight+j;
L.childNodes[7].style.height=innerHeight+j;
L.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(z,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(M%2==1){L.childNodes[2].style.marginRight=h;
L.childNodes[5].style.marginRight=h;
L.childNodes[8].style.marginRight=h;
}else{L.childNodes[2].style.marginRight=i;
L.childNodes[5].style.marginRight=i;
L.childNodes[8].style.marginRight=i;
}
if(N%2==1){L.childNodes[3].style.marginBottom=h;
L.childNodes[4].style.marginBottom=h;
L.childNodes[5].style.marginBottom=h;
}else{L.childNodes[3].style.marginBottom=i;
L.childNodes[4].style.marginBottom=i;
L.childNodes[5].style.marginBottom=i;
}}}},tint:function(C,D){},_applyBaseImage:function(P,Q){if(qx.core.Variant.isSet(t,l)){if(this.__mS){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(P){var U=this._resolveImageUrl(P);
var V=/(.*)(\.[a-z]+)$/.exec(U);
var T=V[1];
var S=V[2];
var R=this.__mT={tl:T+w+S,t:T+x+S,tr:T+d+S,bl:T+p+S,b:T+r+S,br:T+y+S,l:T+c+S,c:T+n+S,r:T+v+S};
this.__mU=this._computeEdgeSizes(R);
}},_resolveImageUrl:function(E){return qx.util.AliasManager.getInstance().resolve(E);
},_computeEdgeSizes:function(A){var B=qx.util.ResourceManager.getInstance();
return {top:B.getImageHeight(A.t),bottom:B.getImageHeight(A.b),left:B.getImageWidth(A.l),right:B.getImageWidth(A.r)};
}},destruct:function(){this.__mS=this.__mT=this.__mU=null;
}});
})();


qx.$$loader.init();

