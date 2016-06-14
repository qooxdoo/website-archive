(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.1.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.1.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"98debd0487ee"},
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  
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
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
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

qx.$$packageData['98debd0487ee']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-113,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
(function(){var bv="toString",bu=".",bt="default",bs="Object",br='"',bq="Array",bp="()",bo="String",bn="Function",bm=".prototype",bU="function",bT="Boolean",bS="Error",bR="constructor",bQ="warn",bP="hasOwnProperty",bO="string",bN="toLocaleString",bM="RegExp",bL='\", "',bC="info",bD="BROKEN_IE",bA="isPrototypeOf",bB="Date",by="",bz="qx.Bootstrap",bw="]",bx="Class",bE="error",bF="[Class ",bH="valueOf",bG="Number",bJ="count",bI="debug",bK="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bF+this.classname+bw;
},createNamespace:function(name,bc){var be=name.split(bu);
var parent=window;
var bd=be[0];

for(var i=0,bf=be.length-1;i<bf;i++,bd=be[i]){if(!parent[bd]){parent=parent[bd]={};
}else{parent=parent[bd];
}}parent[bd]=bc;
return bd;
},setDisplayName:function(ba,bb,name){ba.displayName=bb+bu+name+bp;
},setDisplayNames:function(H,I){for(var name in H){var J=H[name];

if(J instanceof Function){J.displayName=I+bu+name+bp;
}}},define:function(name,P){if(!P){var P={statics:{}};
}var U;
var S=null;
qx.Bootstrap.setDisplayNames(P.statics,name);

if(P.members||P.extend){qx.Bootstrap.setDisplayNames(P.members,name+bm);
U=P.construct||new Function;

if(P.extend){this.extendClass(U,U,P.extend,name,T);
}var Q=P.statics||{};
for(var i=0,V=qx.Bootstrap.getKeys(Q),l=V.length;i<l;i++){var W=V[i];
U[W]=Q[W];
}S=U.prototype;
var R=P.members||{};
for(var i=0,V=qx.Bootstrap.getKeys(R),l=V.length;i<l;i++){var W=V[i];
S[W]=R[W];
}}else{U=P.statics||{};
}var T=this.createNamespace(name,U);
U.name=U.classname=name;
U.basename=T;
U.$$type=bx;
if(!U.hasOwnProperty(bv)){U.toString=this.genericToString;
}if(P.defer){P.defer(U,S);
}qx.Bootstrap.$$registry[name]=P.statics;
return U;
}};
qx.Bootstrap.define(bz,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(o,p,q,name,r){var u=q.prototype;
var t=new Function;
t.prototype=u;
var s=new t;
o.prototype=s;
s.name=s.classname=name;
s.basename=r;
p.base=o.superclass=q;
p.self=o.constructor=s.constructor=o;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(X){return X.__count__;
},"default":function(bi){var length=0;

for(var bj in bi){length++;
}return length;
}})[(({}).__count__==0)?bJ:bt],objectMergeWith:function(j,k,m){if(m===undefined){m=true;
}
for(var n in k){if(m||j[n]===undefined){j[n]=k[n];
}}return j;
},__gL:[bA,bP,bN,bv,bH,bR],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(ce){var cf=[];
var ch=Object.prototype.hasOwnProperty;

for(var ci in ce){if(ch.call(ce,ci)){cf.push(ci);
}}var cg=qx.Bootstrap.__gL;

for(var i=0,a=cg,l=a.length;i<l;i++){if(ch.call(ce,a[i])){cf.push(a[i]);
}}return cf;
},"default":function(v){var w=[];
var x=Object.prototype.hasOwnProperty;

for(var y in v){if(x.call(v,y)){w.push(y);
}}return w;
}})[typeof (Object.keys)==
bU?bK:
(function(){for(var N in {toString:1}){return N;
}})()!==bv?bD:bt],getKeysAsString:function(e){var f=qx.Bootstrap.getKeys(e);

if(f.length==0){return by;
}return br+f.join(bL)+br;
},__gM:{"[object String]":bo,"[object Array]":bq,"[object Object]":bs,"[object RegExp]":bM,"[object Number]":bG,"[object Boolean]":bT,"[object Date]":bB,"[object Function]":bn,"[object Error]":bS},bind:function(bY,self,ca){var cb=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var d=Array.prototype.slice.call(arguments,0,arguments.length);
return bY.apply(self,cb.concat(d));
};
},firstUp:function(bV){return bV.charAt(0).toUpperCase()+bV.substr(1);
},firstLow:function(bg){return bg.charAt(0).toLowerCase()+bg.substr(1);
},getClass:function(B){var C=Object.prototype.toString.call(B);
return (qx.Bootstrap.__gM[C]||C.slice(8,-1));
},isString:function(bh){return (bh!==null&&(typeof bh===bO||qx.Bootstrap.getClass(bh)==bo||bh instanceof String||(!!bh&&!!bh.$$isString)));
},isArray:function(D){return (D!==null&&(D instanceof Array||(D&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(D.constructor,qx.data.IListData))||qx.Bootstrap.getClass(D)==bq||(!!D&&!!D.$$isArray)));
},isObject:function(K){return (K!==undefined&&K!==null&&qx.Bootstrap.getClass(K)==bs);
},isFunction:function(Y){return qx.Bootstrap.getClass(Y)==bn;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(M,name){while(M){if(M.$$properties&&M.$$properties[name]){return M.$$properties[name];
}M=M.superclass;
}return null;
},hasProperty:function(h,name){return !!qx.Bootstrap.getPropertyDefinition(h,name);
},getEventType:function(O,name){var O=O.constructor;

while(O.superclass){if(O.$$events&&O.$$events[name]!==undefined){return O.$$events[name];
}O=O.superclass;
}return null;
},supportsEvent:function(L,name){return !!qx.Bootstrap.getEventType(L,name);
},getByInterface:function(E,F){var G,i,l;

while(E){if(E.$$implements){G=E.$$flatImplements;

for(i=0,l=G.length;i<l;i++){if(G[i]===F){return E;
}}}E=E.superclass;
}return null;
},hasInterface:function(z,A){return !!qx.Bootstrap.getByInterface(z,A);
},getMixins:function(bW){var bX=[];

while(bW){if(bW.$$includes){bX.push.apply(bX,bW.$$flatIncludes);
}bW=bW.superclass;
}return bX;
},$$logs:[],debug:function(cj,ck){qx.Bootstrap.$$logs.push([bI,arguments]);
},info:function(cc,cd){qx.Bootstrap.$$logs.push([bC,arguments]);
},warn:function(bk,bl){qx.Bootstrap.$$logs.push([bQ,arguments]);
},error:function(b,c){qx.Bootstrap.$$logs.push([bE,arguments]);
},trace:function(g){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__dM:{},define:function(j,k){if(k===undefined){throw new Error('Default value of setting "'+j+'" must be defined!');
}
if(!this.__dM[j]){this.__dM[j]={};
}else if(this.__dM[j].defaultValue!==undefined){throw new Error('Setting "'+j+'" is already defined!');
}this.__dM[j].defaultValue=k;
},get:function(n){var o=this.__dM[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(l,m){if((l.split(a)).length<2){throw new Error('Malformed settings key "'+l+'". Must be following the schema "namespace.key".');
}
if(!this.__dM[l]){this.__dM[l]={};
}this.__dM[l].value=m;
},__dN:function(){if(window.qxsettings){for(var r in window.qxsettings){this.set(r,window.qxsettings[r]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(p){}this.__dO();
}},__dO:function(){if(this.get(h)!=true){return;
}var t=document.location.search.slice(1).split(g);

for(var i=0;i<t.length;i++){var s=t[i].split(b);

if(s.length!=3||s[0]!=c){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(q){q.define(h,false);
q.define(e,false);
q.define(d,0);
q.__dN();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dL:function(){var u=d;
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
}},defer:function(t){t.__dL();
}});
})();
(function(){var w="on",u="qx.debug",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",d="qx.client",k="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e=".",h="qx.core.Variant",a="mshtml",j="gecko";
qx.Bootstrap.define(h,{statics:{__jH:{},__jI:{},compilerIsSet:function(){return true;
},define:function(L,M,N){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__jL(M)){throw new Error('Allowed values of variant "'+L+'" must be defined!');
}
if(N===undefined){throw new Error('Default value of variant "'+L+'" must be defined!');
}}
if(!this.__jH[L]){this.__jH[L]={};
}else if(qx.core.Variant.compilerIsSet(u,w)){if(this.__jH[L].defaultValue!==undefined){throw new Error('Variant "'+L+'" is already defined!');
}}this.__jH[L].allowedValues=M;
this.__jH[L].defaultValue=N;
},get:function(I){var J=this.__jH[I];

if(qx.core.Variant.compilerIsSet(u,w)){if(J===undefined){throw new Error('Variant "'+I+'" is not defined.');
}}
if(J.value!==undefined){return J.value;
}return J.defaultValue;
},__jJ:function(){if(window.qxvariants){for(var Q in qxvariants){if(qx.core.Variant.compilerIsSet(u,w)){if((Q.split(e)).length<2){throw new Error('Malformed settings key "'+Q+'". Must be following the schema "namespace.key".');
}}
if(!this.__jH[Q]){this.__jH[Q]={};
}this.__jH[Q].value=qxvariants[Q];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(R){}this.__jK(this.__jH);
}},__jK:function(){if(qx.core.Setting.get(m)!=true){return;
}var x=document.location.search.slice(1).split(p);

for(var i=0;i<x.length;i++){var y=x[i].split(f);

if(y.length!=3||y[0]!=c){continue;
}var z=y[1];

if(!this.__jH[z]){this.__jH[z]={};
}this.__jH[z].value=decodeURIComponent(y[2]);
}},select:function(F,G){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__jM(this.__jH[F])){throw new Error("Variant \""+F+"\" is not defined");
}
if(!this.__jM(G)){throw new Error("the second parameter must be a map!");
}}
for(var H in G){if(this.isSet(F,H)){return G[H];
}}
if(G[r]!==undefined){return G[r];
}
if(qx.core.Variant.compilerIsSet(u,w)){throw new Error('No match for variant "'+F+'" in variants ['+qx.Bootstrap.getKeysAsString(G)+'] found, and no default ("default") given');
}},isSet:function(A,B){var C=A+n+B;

if(this.__jI[C]!==undefined){return this.__jI[C];
}var E=false;
if(B.indexOf(s)<0){E=this.get(A)===B;
}else{var D=B.split(s);

for(var i=0,l=D.length;i<l;i++){if(this.get(A)===D[i]){E=true;
break;
}}}this.__jI[C]=E;
return E;
},__jL:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__jM:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__jN:function(O,P){for(var i=0,l=O.length;i<l;i++){if(O[i]==P){return true;
}}return false;
}},defer:function(K){K.define(d,[j,a,b,g],qx.bom.client.Engine.NAME);
K.define(u,[w,t],w);
K.define(o,[w,t],t);
K.define(k,[w,t],w);
K.__jJ();
}});
})();
(function(){var z="qx.debug",y="object",x="Interface",w="on",v="string",u="function",t="Boolean",s="qx.Interface",r="events",q="toggle",j="properties",p="]",n="members",h="number",g="boolean",m="is",k="[Interface ",o="statics";
qx.Bootstrap.define(s,{statics:{define:function(name,C){if(C){if(C.extend&&!(C.extend instanceof Array)){C.extend=[C.extend];
}if(qx.core.Variant.isSet(z,w)){this.__fc(name,C);
}var D=C.statics?C.statics:{};
if(C.extend){D.$$extends=C.extend;
}
if(C.properties){D.$$properties=C.properties;
}
if(C.members){D.$$members=C.members;
}
if(C.events){D.$$events=C.events;
}}else{var D={};
}D.$$type=x;
D.name=name;
D.toString=this.genericToString;
D.basename=qx.Bootstrap.createNamespace(name,D);
qx.Interface.$$registry[name]=D;
return D;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(A){if(!A){return [];
}var B=A.concat();

for(var i=0,l=A.length;i<l;i++){if(A[i].$$extends){B.push.apply(B,this.flatten(A[i].$$extends));
}}return B;
},__eV:function(E,F,G,H){var L=G.$$members;

if(L){for(var K in L){if(qx.Bootstrap.isFunction(L[K])){var J=this.__eW(F,K);
var I=J||qx.Bootstrap.isFunction(E[K]);

if(!I){throw new Error('Implementation of method "'+K+'" is missing in class "'+F.classname+'" required by interface "'+G.name+'"');
}var M=H===true&&!J&&!qx.Bootstrap.hasInterface(F,G);

if(M){E[K]=this.__fa(G,E[K],K,L[K]);
}}else{if(typeof E[K]===undefined){if(typeof E[K]!==u){throw new Error('Implementation of member "'+K+'" is missing in class "'+F.classname+'" required by interface "'+G.name+'"');
}}}}}},__eW:function(Y,ba){var be=ba.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!be){return false;
}var bb=qx.Bootstrap.firstLow(be[2]);
var bc=qx.Bootstrap.getPropertyDefinition(Y,bb);

if(!bc){return false;
}var bd=be[0]==m||be[0]==q;

if(bd){return qx.Bootstrap.getPropertyDefinition(Y,bb).check==t;
}return true;
},__eX:function(bf,bg){if(bg.$$properties){for(var bh in bg.$$properties){if(!qx.Bootstrap.getPropertyDefinition(bf,bh)){throw new Error('The property "'+bh+'" is not supported by Class "'+bf.classname+'"!');
}}}},__eY:function(N,O){if(O.$$events){for(var P in O.$$events){if(!qx.Bootstrap.supportsEvent(N,P)){throw new Error('The event "'+P+'" is not supported by Class "'+N.classname+'"!');
}}}},assertObject:function(U,V){var X=U.constructor;
this.__eV(U,X,V,false);
this.__eX(X,V);
this.__eY(X,V);
var W=V.$$extends;

if(W){for(var i=0,l=W.length;i<l;i++){this.assertObject(U,W[i]);
}}},assert:function(Q,R,S){this.__eV(Q.prototype,Q,R,S);
this.__eX(Q,R);
this.__eY(Q,R);
var T=R.$$extends;

if(T){for(var i=0,l=T.length;i<l;i++){this.assert(Q,T[i],S);
}}},genericToString:function(){return k+this.name+p;
},$$registry:{},__fa:qx.core.Variant.select(z,{"on":function(b,c,d,e){function f(){e.apply(this,arguments);
return c.apply(this,arguments);
}c.wrapper=f;
return f;
},"default":function(){}}),__fb:qx.core.Variant.select(z,{"on":{"extend":y,"statics":y,"members":y,"properties":y,"events":y},"default":null}),__fc:qx.core.Variant.select(z,{"on":function(name,bi){if(qx.core.Variant.isSet(z,w)){var bl=this.__fb;

for(var bk in bi){if(bl[bk]===undefined){throw new Error('The configuration key "'+bk+'" in class "'+name+'" is not allowed!');
}
if(bi[bk]==null){throw new Error("Invalid key '"+bk+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bl[bk]!==null&&typeof bi[bk]!==bl[bk]){throw new Error('Invalid type of key "'+bk+'" in interface "'+name+'"! The type of the key must be "'+bl[bk]+'"!');
}}var bj=[o,n,j,r];

for(var i=0,l=bj.length;i<l;i++){var bk=bj[i];

if(bi[bk]!==undefined&&(bi[bk] instanceof Array||bi[bk] instanceof RegExp||bi[bk] instanceof Date||bi[bk].classname!==undefined)){throw new Error('Invalid key "'+bk+'" in interface "'+name+'"! The value needs to be a map!');
}}if(bi.extend){for(var i=0,a=bi.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==x){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(bi.statics){for(var bk in bi.statics){if(bk.toUpperCase()!==bk){throw new Error('Invalid key "'+bk+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof bi.statics[bk]){case g:case v:case h:break;
default:throw new Error('Invalid key "'+bk+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var u="object",t="qx.debug",s="function",r="Mixin",q="qx.Mixin",p=".prototype",o="constructor",n="[Mixin ",m="]",k="members",g="destruct",j="events",h="on",f="properties",e="statics";
qx.Bootstrap.define(q,{statics:{define:function(name,J){if(J){if(J.include&&!(J.include instanceof Array)){J.include=[J.include];
}if(qx.core.Variant.isSet(t,h)){this.__dK(name,J);
}var L=J.statics?J.statics:{};
qx.Bootstrap.setDisplayNames(L,name);

for(var K in L){if(L[K] instanceof Function){L[K].$$mixin=L;
}}if(J.construct){L.$$constructor=J.construct;
qx.Bootstrap.setDisplayName(J.construct,name,o);
}
if(J.include){L.$$includes=J.include;
}
if(J.properties){L.$$properties=J.properties;
}
if(J.members){L.$$members=J.members;
qx.Bootstrap.setDisplayNames(J.members,name+p);
}
for(var K in L.$$members){if(L.$$members[K] instanceof Function){L.$$members[K].$$mixin=L;
}}
if(J.events){L.$$events=J.events;
}
if(J.destruct){L.$$destructor=J.destruct;
qx.Bootstrap.setDisplayName(J.destruct,name,g);
}}else{var L={};
}L.$$type=r;
L.name=name;
L.toString=this.genericToString;
L.basename=qx.Bootstrap.createNamespace(name,L);
this.$$registry[name]=L;
return L;
},checkCompatibility:function(z){var C=this.flatten(z);
var D=C.length;

if(D<2){return true;
}var G={};
var F={};
var E={};
var B;

for(var i=0;i<D;i++){B=C[i];

for(var A in B.events){if(E[A]){throw new Error('Conflict between mixin "'+B.name+'" and "'+E[A]+'" in member "'+A+'"!');
}E[A]=B.name;
}
for(var A in B.properties){if(G[A]){throw new Error('Conflict between mixin "'+B.name+'" and "'+G[A]+'" in property "'+A+'"!');
}G[A]=B.name;
}
for(var A in B.members){if(F[A]){throw new Error('Conflict between mixin "'+B.name+'" and "'+F[A]+'" in member "'+A+'"!');
}F[A]=B.name;
}}return true;
},isCompatible:function(b,c){var d=qx.Bootstrap.getMixins(c);
d.push(b);
return qx.Mixin.checkCompatibility(d);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(H){if(!H){return [];
}var I=H.concat();

for(var i=0,l=H.length;i<l;i++){if(H[i].$$includes){I.push.apply(I,this.flatten(H[i].$$includes));
}}return I;
},genericToString:function(){return n+this.name+m;
},$$registry:{},__dJ:qx.core.Variant.select(t,{"on":{"include":u,"statics":u,"members":u,"properties":u,"events":u,"destruct":s,"construct":s},"default":null}),__dK:qx.core.Variant.select(t,{"on":function(name,v){var y=this.__dJ;

for(var x in v){if(!y[x]){throw new Error('The configuration key "'+x+'" in mixin "'+name+'" is not allowed!');
}
if(v[x]==null){throw new Error('Invalid key "'+x+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(y[x]!==null&&typeof v[x]!==y[x]){throw new Error('Invalid type of key "'+x+'" in mixin "'+name+'"! The type of the key must be "'+y[x]+'"!');
}}var w=[e,k,f,j];

for(var i=0,l=w.length;i<l;i++){var x=w[i];

if(v[x]!==undefined&&(v[x] instanceof Array||v[x] instanceof RegExp||v[x] instanceof Date||v[x].classname!==undefined)){throw new Error('Invalid key "'+x+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(v.include){for(var i=0,a=v.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==r){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(v.include);
}},"default":function(){}})}});
})();
(function(){var fb=';',fa='computed=this.',eY='=value;',eX='this.',eW="setThemed",eV="set",eU="init",eT="setRuntime",eS='if(this.',eR='delete this.',dT='!==undefined)',dS="on",dR='}',dQ="qx.debug",dP="resetThemed",dO='else if(this.',dN="string",dM="boolean",dL='return this.',dK="reset",fi='","',fj='",value);',fg="",fh="refresh",fe="resetRuntime",ff='!==undefined){',fc='=true;',fd="this.",fk=";",fl='old=this.',eA="qx.propertyDebugLevel",ez='.$$properties.',eC="();",eB='else ',eE='if(old===undefined)old=this.',eD='old=computed=this.',eG='if(value===undefined)prop.error(this,2,"',eF="return this.",ey="get",ew='(value);',co="(a[",cp='if(old===computed)return value;',cq='"), msg)',cr='!(',cs="value",ct=' of an instance of ',cu='var prop=qx.core.Property;',cv='if(old===undefined)old=null;',cw=')',cx=' is not (yet) ready!");',fz="]);",fy='!==inherit){',fx='var msg = "Invalid incoming value for property \'',fw='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',fD='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',fC='qx.core.Assert.assertInstance(value, Date, msg) || true',fB='value !== null && value.nodeType === 9 && value.documentElement',fA='===value)return value;',fF='value !== null && value.$$type === "Mixin"',fE='return init;',dj='var init=this.',dk=')prop.error(this,5,"',dh='value !== null && value.nodeType === 1 && value.attributes',di="var parent = this.getLayoutParent();",dn="Error in property ",dp='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dl="property",dm='.check.call(this, value)',df='if((computed===undefined||computed===inherit)&&',dg='.validate.call(this, value);',cP="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cO='else{',cR="if (!parent) return;",cQ=" in method ",cL='qx.core.Assert.assertInstance(value, Error, msg) || true',cK='=computed;',cN='Undefined value is not allowed!',cM='(backup);',cJ="MSIE 6.0",cI='if(computed===inherit){',du="inherit",dv='Is invalid!',dw='var computed, old=this.',dx='else if(computed===undefined)',dq="': ",dr=" of class ",ds='value !== null && value.nodeType !== undefined',dt='===undefined)return;',dy='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',dz="')){",db='qx.core.Assert.assertPositiveInteger(value, msg) || true',da='else this.',cY='value=this.',cX='if(init==qx.core.Property.$$inherit)init=null;',cW='qx.core.Assert.assertInArray(value, ',cV='value !== null && value.$$type === "Interface"',cU='var inherit=prop.$$inherit;',cT="', qx.event.type.Data, [computed, old]",de="var value = parent.",dd="$$useinit_",dA='computed=undefined;delete this.',dB="(value);",dC='Requires exactly one argument!',dD='computed=value;',dE="$$runtime_",dF='if(this.$$initialized)prop.error(this,0,"',dG='qx.core.Assert.assertInstance(value, qx.Class.getByName("',dH="$$user_",dI='if(value===null)prop.error(this,4,"',dJ='){',eb='!',ea='qx.core.Assert.assertArray(value, msg) || true',dY='if(computed===undefined||computed===inherit){',dX='qx.core.Assert.assertPositiveNumber(value, msg) || true',ef=".prototype",ee="function",ed="qx.core.Property.refresh() is deprecated. Please use the member function '$$refreshInheritables()'",ec="Boolean",ei=")}",eh='(computed, old, "',es='return value;',et='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',eq='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',er='}else{',eo="if(reg.hasListener(this, '",ep='Does not allow any arguments!',em='\'";',en=')a[i].',eu="()",ev=';}',eK='if(',eJ='value !== null && value.$$type === "Theme"',eM='if(value!==null)',eL="var reg=qx.event.Registration;",eO="())",eN='return null;',eQ='qx.core.Assert.assertObject(value, msg) || true',eP='");',eI='qx.core.Assert.assertString(value, msg) || true',eH='!==undefined&&',fs='var pa=this.getLayoutParent();if(pa)computed=pa.',ft="if (value===undefined) value = parent.",fu='value !== null && value.$$type === "Class"',fv='qx.core.Assert.assertFunction(value, msg) || true',fo='var computed, old;',fp='var backup=computed;',fq=".",fr="object",fm="$$init_",fn="$$theme_",cn='if(computed===undefined)computed=null;',cm='\' of class \'',cl='if(arguments.length!==1)prop.error(this,1,"',ck='qx.core.Assert.assertMap(value, msg) || true',cj="qx.aspects",ci='qx.core.Assert.assertNumber(value, msg) || true',ch="reg.fireEvent(this, '",cg='Null value is not allowed!',cf='if(value!==inherit)',ce='qx.core.Assert.assertInteger(value, msg) || true',cA="rv:1.8.1",cB="shorthand",cy='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cz='value !== null && value.type !== undefined',cE='value !== null && value.document',cF='throw new Error("Property ',cC="(!this.",cD='qx.core.Assert.assertBoolean(value, msg) || true',cG='if(a[i].',cH='.check, msg)',ej="toggle",eg="$$inherit_",el=" with incoming value '",ek='if(arguments.length!==0)prop.error(this,3,"',dV="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",dU='if(computed===undefined||computed==inherit)computed=null;',cS="qx.core.Property",dW="is",dc='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cS,{statics:{__kp:{"Boolean":cD,"String":eI,"Number":ci,"Integer":ce,"PositiveNumber":dX,"PositiveInteger":db,"Error":cL,"RegExp":cy,"Object":eQ,"Array":ea,"Map":ck,"Function":fv,"Date":fC,"Node":ds,"Element":dh,"Document":fB,"Window":cE,"Event":cz,"Class":fu,"Mixin":fF,"Interface":cV,"Theme":eJ,"Color":fw,"Decorator":dy,"Font":fD},__kq:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:du,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:dN,dispose:dM,dereference:dM,inheritable:dM,nullable:dM,themeable:dM,refine:dM,init:null,apply:dN,event:dN,check:null,transform:dN,deferredInit:dM,validate:null},$$allowedGroupKeys:{name:dN,group:fr,mode:dN,themeable:dM},$$inheritable:{},__kr:function(cb){var cc=this.__ks(cb);

if(!cc.length){var cd=qx.lang.Function.empty;
}else{cd=this.__kt(cc);
}cb.prototype.$$refreshInheritables=cd;
},__ks:function(T){var V=[];

while(T){var U=T.$$properties;

if(U){for(var name in this.$$inheritable){if(U[name]&&U[name].inheritable){V.push(name);
}}}T=T.superclass;
}return V;
},__kt:function(x){var B=this.$$store.inherit;
var A=this.$$store.init;
var z=this.$$method.refresh;
var y=[di,cR];

for(var i=0,l=x.length;i<l;i++){var name=x[i];
y.push(de,B[name],fk,ft,A[name],fk,fd,z[name],dB);
}return new Function(y.join(fg));
},refresh:function(fG){if(qx.core.Variant.isSet(dQ,dS)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,ed);
}fG.$$refreshInheritables();
},attachRefreshInheritables:function(fI){fI.prototype.$$refreshInheritables=function(){qx.core.Property.__kr(fI);
return this.$$refreshInheritables();
};
},attachMethods:function(u,name,v){v.group?this.__ku(u,v,name):this.__kv(u,v,name);
},__ku:function(be,bf,name){var bm=qx.Bootstrap.firstUp(name);
var bl=be.prototype;
var bn=bf.themeable===true;

if(qx.core.Variant.isSet(dQ,dS)){if(qx.core.Setting.get(eA)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var bo=[];
var bi=[];

if(bn){var bg=[];
var bk=[];
}var bj=cP;
bo.push(bj);

if(bn){bg.push(bj);
}
if(bf.mode==cB){var bh=dV;
bo.push(bh);

if(bn){bg.push(bh);
}}
for(var i=0,a=bf.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(dQ,dS)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}bo.push(fd,this.$$method.set[a[i]],co,i,fz);
bi.push(fd,this.$$method.reset[a[i]],eC);

if(bn){if(qx.core.Variant.isSet(dQ,dS)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}bg.push(fd,this.$$method.setThemed[a[i]],co,i,fz);
bk.push(fd,this.$$method.resetThemed[a[i]],eC);
}}this.$$method.set[name]=eV+bm;
bl[this.$$method.set[name]]=new Function(bo.join(fg));
this.$$method.reset[name]=dK+bm;
bl[this.$$method.reset[name]]=new Function(bi.join(fg));

if(bn){this.$$method.setThemed[name]=eW+bm;
bl[this.$$method.setThemed[name]]=new Function(bg.join(fg));
this.$$method.resetThemed[name]=dP+bm;
bl[this.$$method.resetThemed[name]]=new Function(bk.join(fg));
}},__kv:function(D,E,name){var G=qx.Bootstrap.firstUp(name);
var I=D.prototype;

if(qx.core.Variant.isSet(dQ,dS)){if(qx.core.Setting.get(eA)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(qx.core.Variant.isSet(dQ,dS)){if(E.dispose){if(!E.dereference){E.dereference=E.dispose;
}qx.log.Logger.warn("The property key 'dispose' is deprecated: "+"Please use 'dereference' instead.");
qx.log.Logger.trace();
}}if(E.dereference===undefined&&typeof E.check===dN){E.dereference=this.__kw(E.check);
}var H=this.$$method;
var F=this.$$store;
F.runtime[name]=dE+name;
F.user[name]=dH+name;
F.theme[name]=fn+name;
F.init[name]=fm+name;
F.inherit[name]=eg+name;
F.useinit[name]=dd+name;
H.get[name]=ey+G;
I[H.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,D,name,ey);
};
H.set[name]=eV+G;
I[H.set[name]]=function(w){return qx.core.Property.executeOptimizedSetter(this,D,name,eV,arguments);
};
H.reset[name]=dK+G;
I[H.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,D,name,dK);
};

if(E.inheritable||E.apply||E.event||E.deferredInit){H.init[name]=eU+G;
I[H.init[name]]=function(W){return qx.core.Property.executeOptimizedSetter(this,D,name,eU,arguments);
};
}
if(E.inheritable){H.refresh[name]=fh+G;
I[H.refresh[name]]=function(S){return qx.core.Property.executeOptimizedSetter(this,D,name,fh,arguments);
};
}H.setRuntime[name]=eT+G;
I[H.setRuntime[name]]=function(bG){return qx.core.Property.executeOptimizedSetter(this,D,name,eT,arguments);
};
H.resetRuntime[name]=fe+G;
I[H.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,D,name,fe);
};

if(E.themeable){H.setThemed[name]=eW+G;
I[H.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,D,name,eW,arguments);
};
H.resetThemed[name]=dP+G;
I[H.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,D,name,dP);
};
}
if(E.check===ec){I[ej+G]=new Function(eF+H.set[name]+cC+H.get[name]+eO);
I[dW+G]=new Function(eF+H.get[name]+eu);
}},__kw:function(C){return !!this.__kq[C];
},__kx:function(bF){return this.__kq[bF]||qx.Bootstrap.classIsDefined(bF)||(qx.Interface&&qx.Interface.isDefined(bF));
},__ky:{0:dc,1:dC,2:cN,3:ep,4:cg,5:dv},error:function(bu,bv,bw,bx,by){var bz=bu.constructor.classname;
var bA=dn+bw+dr+bz+cQ+this.$$method[bx][bw]+el+by+dq;
throw new Error(bA+(this.__ky[bv]||"Unknown reason: "+bv));
},__kz:function(o,p,name,q,r,s){var t=this.$$method[q][name];
if(qx.core.Variant.isSet(dQ,dS)){if(qx.core.Setting.get(eA)>1){qx.Bootstrap.debug("Code["+this.$$method[q][name]+"]: "+r.join(""));
}try{p[t]=new Function(cs,r.join(fg));
}catch(fH){throw new Error("Malformed generated code to unwrap method: "+this.$$method[q][name]+"\n"+r.join(""));
}}else{p[t]=new Function(cs,r.join(fg));
}if(qx.core.Variant.isSet(cj,dS)){p[t]=qx.core.Aspect.wrap(o.classname+fq+t,p[t],dl);
}qx.Bootstrap.setDisplayName(p[t],o.classname+ef,t);
if(s===undefined){return o[t]();
}else if(qx.core.Variant.isSet(dQ,dS)){return o[t].apply(o,s);
}else{return o[t](s[0]);
}},executeOptimizedGetter:function(L,M,name,N){var P=M.$$properties[name];
var R=M.prototype;
var O=[];
var Q=this.$$store;
O.push(eS,Q.runtime[name],dT);
O.push(dL,Q.runtime[name],fb);

if(P.inheritable){O.push(dO,Q.inherit[name],dT);
O.push(dL,Q.inherit[name],fb);
O.push(eB);
}O.push(eS,Q.user[name],dT);
O.push(dL,Q.user[name],fb);

if(P.themeable){O.push(dO,Q.theme[name],dT);
O.push(dL,Q.theme[name],fb);
}
if(P.deferredInit&&P.init===undefined){O.push(dO,Q.init[name],dT);
O.push(dL,Q.init[name],fb);
}O.push(eB);

if(P.init!==undefined){if(P.inheritable){O.push(dj,Q.init[name],fb);

if(P.nullable){O.push(cX);
}else if(P.init!==undefined){O.push(dL,Q.init[name],fb);
}else{O.push(et,name,ct,M.classname,cx);
}O.push(fE);
}else{O.push(dL,Q.init[name],fb);
}}else if(P.inheritable||P.nullable){O.push(eN);
}else{O.push(cF,name,ct,M.classname,cx);
}return this.__kz(L,R,name,N,O);
},executeOptimizedSetter:function(bL,bM,name,bN,bO){var bT=bM.$$properties[name];
var bS=bM.prototype;
var bQ=[];
var bP=bN===eV||bN===eW||bN===eT||(bN===eU&&bT.init===undefined);
var bR=bT.apply||bT.event||bT.inheritable;
var bU=this.__kA(bN,name);
this.__kB(bQ,bT,name,bN,bP);

if(bP){this.__kC(bQ,bM,bT,name);
}
if(bR){this.__kD(bQ,bP,bU,bN);
}
if(bT.inheritable){bQ.push(cU);
}
if(qx.core.Variant.isSet(dQ,dS)){if(bP){this.__kE(bQ,bT,bM,name,bN);
}}
if(!bR){this.__kF(bQ,name,bN,bP);
}else{this.__kG(bQ,bT,name,bN,bP);
}
if(bT.inheritable){this.__kH(bQ,bT,name,bN);
}else if(bR){this.__kI(bQ,bT,name,bN);
}
if(bR){this.__kJ(bQ,bT,name);
if(bT.inheritable&&bS._getChildren){this.__kK(bQ,name);
}}if(bP){bQ.push(es);
}return this.__kz(bL,bS,name,bN,bQ,bO);
},__kA:function(J,name){if(J===eT||J===fe){var K=this.$$store.runtime[name];
}else if(J===eW||J===dP){K=this.$$store.theme[name];
}else if(J===eU){K=this.$$store.init[name];
}else{K=this.$$store.user[name];
}return K;
},__kB:function(bB,bC,name,bD,bE){if(qx.core.Variant.isSet(dQ,dS)){bB.push(cu);

if(bD===eU){bB.push(dF,name,fi,bD,fj);
}
if(bD===fh){}else if(bE){bB.push(cl,name,fi,bD,fj);
bB.push(eG,name,fi,bD,fj);
}else{bB.push(ek,name,fi,bD,fj);
}}else{if(!bC.nullable||bC.check||bC.inheritable){bB.push(cu);
}if(bD===eV){bB.push(eG,name,fi,bD,fj);
}}},__kC:function(X,Y,ba,name){if(ba.transform){X.push(cY,ba.transform,ew);
}if(ba.validate){if(typeof ba.validate===dN){X.push(eX,ba.validate,ew);
}else if(ba.validate instanceof Function){X.push(Y.classname,ez,name);
X.push(dg);
}}},__kD:function(bV,bW,bX,bY){var ca=(bY===dK||bY===dP||bY===fe);

if(bW){bV.push(eS,bX,fA);
}else if(ca){bV.push(eS,bX,dt);
}},__kE:qx.core.Variant.select(dQ,{"on":function(c,d,e,name,f){if(!d.nullable){c.push(dI,name,fi,f,fj);
}if(d.check!==undefined){c.push(fx+name+cm+e.classname+em);
if(d.nullable){c.push(eM);
}if(d.inheritable){c.push(cf);
}c.push(eK);

if(this.__kp[d.check]!==undefined){c.push(cr,this.__kp[d.check],cw);
}else if(qx.Class.isDefined(d.check)){c.push(dG,d.check,cq);
}else if(qx.Interface&&qx.Interface.isDefined(d.check)){c.push(eq,d.check,cq);
}else if(typeof d.check===ee){c.push(eb,e.classname,ez,name);
c.push(dm);
}else if(typeof d.check===dN){c.push(cr,d.check,cw);
}else if(d.check instanceof Array){c.push(cW,e.classname,ez,name,cH);
}else{throw new Error("Could not add check to property "+name+" of class "+e.classname);
}c.push(dk,name,fi,f,fj);
}},"off":undefined}),__kF:function(bb,name,bc,bd){if(bc===eT){bb.push(eX,this.$$store.runtime[name],eY);
}else if(bc===fe){bb.push(eS,this.$$store.runtime[name],dT);
bb.push(eR,this.$$store.runtime[name],fb);
}else if(bc===eV){bb.push(eX,this.$$store.user[name],eY);
}else if(bc===dK){bb.push(eS,this.$$store.user[name],dT);
bb.push(eR,this.$$store.user[name],fb);
}else if(bc===eW){bb.push(eX,this.$$store.theme[name],eY);
}else if(bc===dP){bb.push(eS,this.$$store.theme[name],dT);
bb.push(eR,this.$$store.theme[name],fb);
}else if(bc===eU&&bd){bb.push(eX,this.$$store.init[name],eY);
}},__kG:function(bH,bI,name,bJ,bK){if(bI.inheritable){bH.push(dw,this.$$store.inherit[name],fb);
}else{bH.push(fo);
}bH.push(eS,this.$$store.runtime[name],ff);

if(bJ===eT){bH.push(fa,this.$$store.runtime[name],eY);
}else if(bJ===fe){bH.push(eR,this.$$store.runtime[name],fb);
bH.push(eS,this.$$store.user[name],dT);
bH.push(fa,this.$$store.user[name],fb);
bH.push(dO,this.$$store.theme[name],dT);
bH.push(fa,this.$$store.theme[name],fb);
bH.push(dO,this.$$store.init[name],ff);
bH.push(fa,this.$$store.init[name],fb);
bH.push(eX,this.$$store.useinit[name],fc);
bH.push(dR);
}else{bH.push(eD,this.$$store.runtime[name],fb);
if(bJ===eV){bH.push(eX,this.$$store.user[name],eY);
}else if(bJ===dK){bH.push(eR,this.$$store.user[name],fb);
}else if(bJ===eW){bH.push(eX,this.$$store.theme[name],eY);
}else if(bJ===dP){bH.push(eR,this.$$store.theme[name],fb);
}else if(bJ===eU&&bK){bH.push(eX,this.$$store.init[name],eY);
}}bH.push(dR);
bH.push(dO,this.$$store.user[name],ff);

if(bJ===eV){if(!bI.inheritable){bH.push(fl,this.$$store.user[name],fb);
}bH.push(fa,this.$$store.user[name],eY);
}else if(bJ===dK){if(!bI.inheritable){bH.push(fl,this.$$store.user[name],fb);
}bH.push(eR,this.$$store.user[name],fb);
bH.push(eS,this.$$store.runtime[name],dT);
bH.push(fa,this.$$store.runtime[name],fb);
bH.push(eS,this.$$store.theme[name],dT);
bH.push(fa,this.$$store.theme[name],fb);
bH.push(dO,this.$$store.init[name],ff);
bH.push(fa,this.$$store.init[name],fb);
bH.push(eX,this.$$store.useinit[name],fc);
bH.push(dR);
}else{if(bJ===eT){bH.push(fa,this.$$store.runtime[name],eY);
}else if(bI.inheritable){bH.push(fa,this.$$store.user[name],fb);
}else{bH.push(eD,this.$$store.user[name],fb);
}if(bJ===eW){bH.push(eX,this.$$store.theme[name],eY);
}else if(bJ===dP){bH.push(eR,this.$$store.theme[name],fb);
}else if(bJ===eU&&bK){bH.push(eX,this.$$store.init[name],eY);
}}bH.push(dR);
if(bI.themeable){bH.push(dO,this.$$store.theme[name],ff);

if(!bI.inheritable){bH.push(fl,this.$$store.theme[name],fb);
}
if(bJ===eT){bH.push(fa,this.$$store.runtime[name],eY);
}else if(bJ===eV){bH.push(fa,this.$$store.user[name],eY);
}else if(bJ===eW){bH.push(fa,this.$$store.theme[name],eY);
}else if(bJ===dP){bH.push(eR,this.$$store.theme[name],fb);
bH.push(eS,this.$$store.init[name],ff);
bH.push(fa,this.$$store.init[name],fb);
bH.push(eX,this.$$store.useinit[name],fc);
bH.push(dR);
}else if(bJ===eU){if(bK){bH.push(eX,this.$$store.init[name],eY);
}bH.push(fa,this.$$store.theme[name],fb);
}else if(bJ===fh){bH.push(fa,this.$$store.theme[name],fb);
}bH.push(dR);
}bH.push(dO,this.$$store.useinit[name],dJ);

if(!bI.inheritable){bH.push(fl,this.$$store.init[name],fb);
}
if(bJ===eU){if(bK){bH.push(fa,this.$$store.init[name],eY);
}else{bH.push(fa,this.$$store.init[name],fb);
}}else if(bJ===eV||bJ===eT||bJ===eW||bJ===fh){bH.push(eR,this.$$store.useinit[name],fb);

if(bJ===eT){bH.push(fa,this.$$store.runtime[name],eY);
}else if(bJ===eV){bH.push(fa,this.$$store.user[name],eY);
}else if(bJ===eW){bH.push(fa,this.$$store.theme[name],eY);
}else if(bJ===fh){bH.push(fa,this.$$store.init[name],fb);
}}bH.push(dR);
if(bJ===eV||bJ===eT||bJ===eW||bJ===eU){bH.push(cO);

if(bJ===eT){bH.push(fa,this.$$store.runtime[name],eY);
}else if(bJ===eV){bH.push(fa,this.$$store.user[name],eY);
}else if(bJ===eW){bH.push(fa,this.$$store.theme[name],eY);
}else if(bJ===eU){if(bK){bH.push(fa,this.$$store.init[name],eY);
}else{bH.push(fa,this.$$store.init[name],fb);
}bH.push(eX,this.$$store.useinit[name],fc);
}bH.push(dR);
}},__kH:function(g,h,name,j){g.push(dY);

if(j===fh){g.push(dD);
}else{g.push(fs,this.$$store.inherit[name],fb);
}g.push(df);
g.push(eX,this.$$store.init[name],eH);
g.push(eX,this.$$store.init[name],fy);
g.push(fa,this.$$store.init[name],fb);
g.push(eX,this.$$store.useinit[name],fc);
g.push(er);
g.push(eR,this.$$store.useinit[name],ev);
g.push(dR);
g.push(cp);
g.push(cI);
g.push(dA,this.$$store.inherit[name],fb);
g.push(dR);
g.push(dx);
g.push(eR,this.$$store.inherit[name],fb);
g.push(da,this.$$store.inherit[name],cK);
g.push(fp);
if(h.init!==undefined&&j!==eU){g.push(eE,this.$$store.init[name],fk);
}else{g.push(cv);
}g.push(dU);
},__kI:function(bp,bq,name,br){if(br!==eV&&br!==eT&&br!==eW){bp.push(cn);
}bp.push(cp);
if(bq.init!==undefined&&br!==eU){bp.push(eE,this.$$store.init[name],fk);
}else{bp.push(cv);
}},__kJ:function(bs,bt,name){if(bt.apply){bs.push(eX,bt.apply,eh,name,eP);
}if(bt.event){bs.push(eL,eo,bt.event,dz,ch,bt.event,cT,ei);
}},__kK:function(fJ,name){fJ.push(dp);
fJ.push(cG,this.$$method.refresh[name],en,this.$$method.refresh[name],cM);
fJ.push(dR);
}},defer:function(k){var n=navigator.userAgent.indexOf(cJ)!=-1;
var m=navigator.userAgent.indexOf(cA)!=-1;
if(n||m){k.__kw=k.__kx;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__jr:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__jr;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==b)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var h=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,h);
}return h;
};

if(l!==a){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(e,f,g,name){this.__jr.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var H="qx.debug",G="on",F="object",E=".",D="qx.aspects",C="static",B="function",A="string",z="abstract",y="singleton",bi="constructor",bh="_",bg=".prototype",bf="$$init_",be="extend",bd="init",bc="qx.event.type.Data",bb="refine",ba="members",Y="variants",O="off",P="properties",M="statics",N="toString",K="events",L="]",I="Class",J="Interface",Q="qx.Class",R="Mixin",T="settings",S='Assumed static class because no "extend" key was found. ',V="[Class ",U="destructor",X="destruct",W="member";
qx.Bootstrap.define(Q,{statics:{define:function(name,cj){if(!cj){var cj={};
}if(cj.include&&!(cj.include instanceof Array)){cj.include=[cj.include];
}if(cj.implement&&!(cj.implement instanceof Array)){cj.implement=[cj.implement];
}var ck=false;

if(!cj.hasOwnProperty(be)&&!cj.type){cj.type=C;
ck=true;
}if(qx.core.Variant.isSet(H,G)){try{this.__bx(name,cj);
}catch(cC){if(ck){cC.message=S+cC.message;
}throw cC;
}}var cl=this.__bz(name,cj.type,cj.extend,cj.statics,cj.construct,cj.destruct,cj.include);
if(cj.extend){if(cj.properties){this.__bB(cl,cj.properties,true);
}if(cj.members){this.__bD(cl,cj.members,true,true,false);
}if(cj.events){this.__bA(cl,cj.events,true);
}if(cj.include){for(var i=0,l=cj.include.length;i<l;i++){this.__bH(cl,cj.include[i],false);
}}}if(cj.settings){for(var cm in cj.settings){qx.core.Setting.define(cm,cj.settings[cm]);
}}if(cj.variants){for(var cm in cj.variants){qx.core.Variant.define(cm,cj.variants[cm].allowedValues,cj.variants[cm].defaultValue);
}}if(cj.implement){for(var i=0,l=cj.implement.length;i<l;i++){this.__bF(cl,cj.implement[i]);
}}
if(qx.core.Variant.isSet(H,G)){this.__by(cl);
}if(cj.defer){cj.defer.self=cl;
cj.defer(cl,cl.prototype,{add:function(name,bQ){var bR={};
bR[name]=bQ;
qx.Class.__bB(cl,bR,true);
}});
}return cl;
},undefine:function(name){delete this.$$registry[name];
var bE=name.split(E);
var bG=[window];

for(var i=0;i<bE.length;i++){bG.push(bG[i][bE[i]]);
}for(var i=bG.length-1;i>=1;i--){var bF=bG[i];
var parent=bG[i-1];

if(qx.Bootstrap.isFunction(bF)||qx.Bootstrap.objectGetLength(bF)===0){delete parent[bE[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bC,bD){if(qx.core.Variant.isSet(H,G)){if(!bD){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bC.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bD,bC);
}qx.Class.__bH(bC,bD,false);
},patch:function(bt,bu){if(qx.core.Variant.isSet(H,G)){if(!bu){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bt.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bu,bt);
}qx.Class.__bH(bt,bu,true);
},isSubClassOf:function(br,bs){if(!br){return false;
}
if(br==bs){return true;
}
if(br.prototype instanceof bs){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(t){var u=[];

while(t){if(t.$$properties){u.push.apply(u,qx.Bootstrap.getKeys(t.$$properties));
}t=t.superclass;
}return u;
},getByProperty:function(bH,name){while(bH){if(bH.$$properties&&bH.$$properties[name]){return bH;
}bH=bH.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bI,bJ){return bI.$$includes&&bI.$$includes.indexOf(bJ)!==-1;
},getByMixin:function(bo,bp){var bq,i,l;

while(bo){if(bo.$$includes){bq=bo.$$flatIncludes;

for(i=0,l=bq.length;i<l;i++){if(bq[i]===bp){return bo;
}}}bo=bo.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(m,n){return !!this.getByMixin(m,n);
},hasOwnInterface:function(bX,bY){return bX.$$implements&&bX.$$implements.indexOf(bY)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(cn){var co=[];

while(cn){if(cn.$$implements){co.push.apply(co,cn.$$flatImplements);
}cn=cn.superclass;
}return co;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(cP,cQ){var cR=cP.constructor;

if(this.hasInterface(cR,cQ)){return true;
}
try{qx.Interface.assertObject(cP,cQ);
return true;
}catch(bS){}
try{qx.Interface.assert(cR,cQ,false);
return true;
}catch(s){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return V+this.classname+L;
},$$registry:qx.Bootstrap.$$registry,__bv:qx.core.Variant.select(H,{"on":{"type":A,"extend":B,"implement":F,"include":F,"construct":B,"statics":F,"properties":F,"members":F,"settings":F,"variants":F,"events":F,"defer":B,"destruct":B},"default":null}),__bw:qx.core.Variant.select(H,{"on":{"type":A,"statics":F,"settings":F,"variants":F,"defer":B},"default":null}),__bx:qx.core.Variant.select(H,{"on":function(name,o){if(o.type&&!(o.type===C||o.type===z||o.type===y)){throw new Error('Invalid type "'+o.type+'" definition for class "'+name+'"!');
}if(o.type&&o.type!==C&&!o.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var r=o.type===C?this.__bw:this.__bv;

for(var q in o){if(!r[q]){throw new Error('The configuration key "'+q+'" in class "'+name+'" is not allowed!');
}
if(o[q]==null){throw new Error('Invalid key "'+q+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof o[q]!==r[q]){throw new Error('Invalid type of key "'+q+'" in class "'+name+'"! The type of the key must be "'+r[q]+'"!');
}}var p=[M,P,ba,T,Y,K];

for(var i=0,l=p.length;i<l;i++){var q=p[i];

if(o[q]!==undefined&&(o[q].$$hash!==undefined||!qx.Bootstrap.isObject(o[q]))){throw new Error('Invalid key "'+q+'" in class "'+name+'"! The value needs to be a map!');
}}if(o.include){if(o.include instanceof Array){for(var i=0,a=o.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==R){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(o.implement){if(o.implement instanceof Array){for(var i=0,a=o.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==J){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(o.include){try{qx.Mixin.checkCompatibility(o.include);
}catch(ci){throw new Error('Error in include definition of class "'+name+'"! '+ci.message);
}}if(o.settings){for(var q in o.settings){if(q.substr(0,q.indexOf(E))!=name.substr(0,name.indexOf(E))){throw new Error('Forbidden setting "'+q+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(o.variants){for(var q in o.variants){if(q.substr(0,q.indexOf(E))!=name.substr(0,name.indexOf(E))){throw new Error('Forbidden variant "'+q+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__by:qx.core.Variant.select(H,{"on":function(cM){var cO=cM.superclass;

while(cO){if(cO.$$classtype!==z){break;
}var cN=cO.$$implements;

if(cN){for(var i=0;i<cN.length;i++){qx.Interface.assert(cM,cN[i],true);
}}cO=cO.superclass;
}},"default":function(){}}),__bz:function(name,cp,cq,cr,cs,ct,cu){var cx;

if(!cq&&qx.core.Variant.isSet(D,O)){cx=cr||{};
qx.Bootstrap.setDisplayNames(cx,name);
}else{var cx={};

if(cq){if(!cs){cs=this.__bI();
}
if(this.__bK(cq,cu)){cx=this.__bL(cs,name,cp);
}else{cx=cs;
}if(cp===y){cx.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(cs,name,bi);
}if(cr){qx.Bootstrap.setDisplayNames(cr,name);
var cy;

for(var i=0,a=qx.Bootstrap.getKeys(cr),l=a.length;i<l;i++){cy=a[i];
var cv=cr[cy];

if(qx.core.Variant.isSet(D,G)){if(cv instanceof Function){cv=qx.core.Aspect.wrap(name+E+cy,cv,C);
}cx[cy]=cv;
}else{cx[cy]=cv;
}}}}var cw=qx.Bootstrap.createNamespace(name,cx);
cx.name=cx.classname=name;
cx.basename=cw;
cx.$$type=I;

if(cp){cx.$$classtype=cp;
}if(!cx.hasOwnProperty(N)){cx.toString=this.genericToString;
}
if(cq){qx.Bootstrap.extendClass(cx,cs,cq,name,cw);
if(ct){if(qx.core.Variant.isSet(D,G)){ct=qx.core.Aspect.wrap(name,ct,U);
}cx.$$destructor=ct;
qx.Bootstrap.setDisplayName(ct,name,X);
}}this.$$registry[name]=cx;
return cx;
},__bA:function(b,c,d){if(qx.core.Variant.isSet(H,G)){if(typeof c!==F||c instanceof Array){throw new Error(b.classname+": the events must be defined as map!");
}
for(var e in c){if(typeof c[e]!==A){throw new Error(b.classname+"/"+e+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(b.$$events&&d!==true){for(var e in c){if(b.$$events[e]!==undefined&&b.$$events[e]!==c[e]){throw new Error(b.classname+"/"+e+": the event value/type cannot be changed from "+b.$$events[e]+" to "+c[e]);
}}}}
if(b.$$events){for(var e in c){b.$$events[e]=c[e];
}}else{b.$$events=c;
}},__bB:function(f,g,h){var j;

if(h===undefined){h=false;
}var k=f.prototype;

for(var name in g){j=g[name];
if(qx.core.Variant.isSet(H,G)){this.__bC(f,name,j,h);
}j.name=name;
if(!j.refine){if(f.$$properties===undefined){f.$$properties={};
}f.$$properties[name]=j;
}if(j.init!==undefined){f.prototype[bf+name]=j.init;
}if(j.event!==undefined){var event={};
event[j.event]=bc;
this.__bA(f,event,h);
}if(j.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!k.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(f);
}}
if(!j.refine){qx.core.Property.attachMethods(f,name,j);
}}},__bC:qx.core.Variant.select(H,{"on":function(bv,name,bw,bx){var bz=this.hasProperty(bv,name);

if(bz){var by=this.getPropertyDefinition(bv,name);

if(bw.refine&&by.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+bv.classname+"'.");
}}
if(!bz&&bw.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bv.classname+"'!");
}
if(bz&&!bx){throw new Error("Class "+bv.classname+" already has a property: "+name+"!");
}
if(bz&&bx){if(!bw.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bv.classname+', original class: '+this.getByProperty(bv,name).classname+'.');
}
for(var bA in bw){if(bA!==bd&&bA!==bb){throw new Error("Class "+bv.classname+" could not refine property: "+name+"! Key: "+bA+" could not be refined!");
}}}var bB=bw.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var bA in bw){if(bB[bA]===undefined){throw new Error('The configuration key "'+bA+'" of property "'+name+'" in class "'+bv.classname+'" is not allowed!');
}
if(bw[bA]===undefined){throw new Error('Invalid key "'+bA+'" of property "'+name+'" in class "'+bv.classname+'"! The value is undefined: '+bw[bA]);
}
if(bB[bA]!==null&&typeof bw[bA]!==bB[bA]){throw new Error('Invalid type of key "'+bA+'" of property "'+name+'" in class "'+bv.classname+'"! The type of the key must be "'+bB[bA]+'"!');
}}
if(bw.transform!=null){if(!(typeof bw.transform==A)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bv.classname+'"! Needs to be a String.');
}}
if(bw.check!=null){if(!qx.Bootstrap.isString(bw.check)&&!qx.Bootstrap.isArray(bw.check)&&!qx.Bootstrap.isFunction(bw.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bv.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__bD:function(cE,cF,cG,cH,cI){var cJ=cE.prototype;
var cL,cK;
qx.Bootstrap.setDisplayNames(cF,cE.classname+bg);

for(var i=0,a=qx.Bootstrap.getKeys(cF),l=a.length;i<l;i++){cL=a[i];
cK=cF[cL];

if(qx.core.Variant.isSet(H,G)){if(cJ[cL]!==undefined&&cL.charAt(0)==bh&&cL.charAt(1)==bh){throw new Error('Overwriting private member "'+cL+'" of Class "'+cE.classname+'" is not allowed!');
}
if(cG!==true&&cJ.hasOwnProperty(cL)){throw new Error('Overwriting member "'+cL+'" of Class "'+cE.classname+'" is not allowed!');
}}if(cH!==false&&cK instanceof Function&&cK.$$type==null){if(cI==true){cK=this.__bE(cK,cJ[cL]);
}else{if(cJ[cL]){cK.base=cJ[cL];
}cK.self=cE;
}
if(qx.core.Variant.isSet(D,G)){cK=qx.core.Aspect.wrap(cE.classname+E+cL,cK,W);
}}cJ[cL]=cK;
}},__bE:function(ca,cb){if(cb){return function(){var bn=ca.base;
ca.base=cb;
var bm=ca.apply(this,arguments);
ca.base=bn;
return bm;
};
}else{return ca;
}},__bF:function(cz,cA){if(qx.core.Variant.isSet(H,G)){if(!cz||!cA){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(cz,cA)){throw new Error('Interface "'+cA.name+'" is already used by Class "'+cz.classname+'!');
}if(cz.$$classtype!==z){qx.Interface.assert(cz,cA,true);
}}var cB=qx.Interface.flatten([cA]);

if(cz.$$implements){cz.$$implements.push(cA);
cz.$$flatImplements.push.apply(cz.$$flatImplements,cB);
}else{cz.$$implements=[cA];
cz.$$flatImplements=cB;
}},__bG:function(cc){var name=cc.classname;
var cd=this.__bL(cc,name,cc.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(cc),l=a.length;i<l;i++){ce=a[i];
cd[ce]=cc[ce];
}cd.prototype=cc.prototype;
var cg=cc.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(cg),l=a.length;i<l;i++){ce=a[i];
var ch=cg[ce];
if(ch&&ch.self==cc){ch.self=cd;
}}for(var ce in this.$$registry){var cf=this.$$registry[ce];

if(!cf){continue;
}
if(cf.base==cc){cf.base=cd;
}
if(cf.superclass==cc){cf.superclass=cd;
}
if(cf.$$original){if(cf.$$original.base==cc){cf.$$original.base=cd;
}
if(cf.$$original.superclass==cc){cf.$$original.superclass=cd;
}}}qx.Bootstrap.createNamespace(name,cd);
this.$$registry[name]=cd;
return cd;
},__bH:function(bK,bL,bM){if(qx.core.Variant.isSet(H,G)){if(!bK||!bL){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bK,bL)){return;
}var bP=bK.$$original;

if(bL.$$constructor&&!bP){bK=this.__bG(bK);
}var bO=qx.Mixin.flatten([bL]);
var bN;

for(var i=0,l=bO.length;i<l;i++){bN=bO[i];
if(bN.$$events){this.__bA(bK,bN.$$events,bM);
}if(bN.$$properties){this.__bB(bK,bN.$$properties,bM);
}if(bN.$$members){this.__bD(bK,bN.$$members,bM,bM,bM);
}}if(bK.$$includes){bK.$$includes.push(bL);
bK.$$flatIncludes.push.apply(bK.$$flatIncludes,bO);
}else{bK.$$includes=[bL];
bK.$$flatIncludes=bO;
}},__bI:function(){function cD(){cD.base.apply(this,arguments);
}return cD;
},__bJ:function(){return function(){};
},__bK:function(bT,bU){if(qx.core.Variant.isSet(H,G)){return true;
}if(bT&&bT.$$includes){var bV=bT.$$flatIncludes;

for(var i=0,l=bV.length;i<l;i++){if(bV[i].$$constructor){return true;
}}}if(bU){var bW=qx.Mixin.flatten(bU);

for(var i=0,l=bW.length;i<l;i++){if(bW[i].$$constructor){return true;
}}}return false;
},__bL:function(cS,name,cT){var cV=function(){var x=cV;

if(qx.core.Variant.isSet(H,G)){if(!(this instanceof x)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cT===z){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cT===y){if(!x.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var w=x.$$original.apply(this,arguments);
if(x.$$includes){var v=x.$$flatIncludes;

for(var i=0,l=v.length;i<l;i++){if(v[i].$$constructor){v[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(H,G)){if(this.classname===name){this.$$initialized=true;
}}return w;
};

if(qx.core.Variant.isSet(D,G)){var cU=qx.core.Aspect.wrap(name,cV,bi);
cV.$$original=cS;
cV.constructor=cU;
cV=cU;
}cV.$$original=cS;
cS.wrapper=cV;
return cV;
}},defer:function(){if(qx.core.Variant.isSet(D,G)){for(var bj in qx.Bootstrap.$$registry){var bk=qx.Bootstrap.$$registry[bj];

for(var bl in bk){if(bk[bl] instanceof Function){bk[bl]=qx.core.Aspect.wrap(bj+E+bl,bk[bl],C);
}}}}}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(j,k,l){j.attachEvent(h+k,l);
},"default":function(s,t,u){s.addEventListener(t,u,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(v,w,x){try{v.detachEvent(h+w,x);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(m,n,o){m.removeEventListener(n,o,false);
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
}catch(F){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(y){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(p,q){if(document.createEventObject){var r=document.createEventObject();
return p.fireEvent(h+q,r);
}else{var r=document.createEvent(a);
r.initEvent(q,true,true);
return !p.dispatchEvent(r);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(z,A){return z.hasOwnProperty(h+A);
},"default":function(B,C){var D=h+C;
var E=(D in B);

if(!E){E=typeof B[D]==g;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==g;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var q="qx.debug",p="on",o="|bubble",n="|capture",m="|",k="': ",j="'",h="",g="_",f="Invalid Target.",P="Invalid event type.",O="Invalid event target.",N=" from the target '",M="Invalid callback function",L="unload",K="Failed to remove event listener for id '",J="Invalid context for callback.",I="Invalid capture flag.",H="Failed to add event listener for type '",G="UNKNOWN_",x="capture",y="qx.event.Manager",v="__eG",w="Could not dispatch event '",t="DOM_",u="__eF",r="QX_",s=" to the target '",z="Failed to remove event listener for type '",A="Invalid capture falg.",C="c",B="Invalid id type.",E="' on target '",D="WIN_",F="Invalid event object.";
qx.Class.define(y,{extend:Object,construct:function(cY,da){this.__eB=cY;
this.__eC=qx.core.ObjectRegistry.toHashCode(cY);
this.__eD=da;
if(cY.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cY,L,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cY,L,arguments.callee);
self.dispose();
}));
}this.__eE={};
this.__eF={};
this.__eG={};
this.__eH={};
},statics:{__eI:0,getNextUniqueId:function(){return (this.__eI++)+h;
}},members:{__eD:null,__eE:null,__eG:null,__eJ:null,__eF:null,__eH:null,__eB:null,__eC:null,getWindow:function(){return this.__eB;
},getWindowId:function(){return this.__eC;
},getHandler:function(cg){var ch=this.__eF[cg.classname];

if(ch){return ch;
}return this.__eF[cg.classname]=new cg(this);
},getDispatcher:function(ct){var cu=this.__eG[ct.classname];

if(cu){return cu;
}return this.__eG[ct.classname]=new ct(this,this.__eD);
},getListeners:function(cm,cn,co){var cp=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cr=this.__eE[cp];

if(!cr){return null;
}var cs=cn+(co?n:o);
var cq=cr[cs];
return cq?cq.concat():null;
},serializeListeners:function(cC){var cJ=cC.$$hash||qx.core.ObjectRegistry.toHashCode(cC);
var cL=this.__eE[cJ];
var cH=[];

if(cL){var cF,cK,cD,cG,cI;

for(var cE in cL){cF=cE.indexOf(m);
cK=cE.substring(0,cF);
cD=cE.charAt(cF+1)==C;
cG=cL[cE];

for(var i=0,l=cG.length;i<l;i++){cI=cG[i];
cH.push({self:cI.context,handler:cI.handler,type:cK,capture:cD});
}}}return cH;
},toggleAttachedEvents:function(by,bz){var bE=by.$$hash||qx.core.ObjectRegistry.toHashCode(by);
var bG=this.__eE[bE];

if(bG){var bB,bF,bA,bC;

for(var bD in bG){bB=bD.indexOf(m);
bF=bD.substring(0,bB);
bA=bD.charCodeAt(bB+1)===99;
bC=bG[bD];

if(bz){this.__eK(by,bF,bA);
}else{this.__eL(by,bF,bA);
}}}},hasListener:function(ba,bb,bc){if(qx.core.Variant.isSet(q,p)){if(ba==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+ba);
}}var bd=ba.$$hash||qx.core.ObjectRegistry.toHashCode(ba);
var bf=this.__eE[bd];

if(!bf){return false;
}var bg=bb+(bc?n:o);
var be=bf[bg];
return be&&be.length>0;
},importListeners:function(Q,R){if(qx.core.Variant.isSet(q,p)){if(Q==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+Q);
}}var X=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var Y=this.__eE[X]={};
var U=qx.event.Manager;

for(var S in R){var V=R[S];
var W=V.type+(V.capture?n:o);
var T=Y[W];

if(!T){T=Y[W]=[];
this.__eK(Q,V.type,V.capture);
}T.push({handler:V.listener,context:V.self,unique:V.unique||(U.__eI++)+h});
}},addListener:function(bU,bV,bW,self,bX){if(qx.core.Variant.isSet(q,p)){var cc=H+bV+j+s+bU.classname+k;
qx.core.Assert.assertObject(bU,cc+f);
qx.core.Assert.assertString(bV,cc+P);
qx.core.Assert.assertFunction(bW,cc+M);

if(bX!==undefined){qx.core.Assert.assertBoolean(bX,I);
}}var cd=bU.$$hash||qx.core.ObjectRegistry.toHashCode(bU);
var cf=this.__eE[cd];

if(!cf){cf=this.__eE[cd]={};
}var cb=bV+(bX?n:o);
var ca=cf[cb];

if(!ca){ca=cf[cb]=[];
}if(ca.length===0){this.__eK(bU,bV,bX);
}var ce=(qx.event.Manager.__eI++)+h;
var bY={handler:bW,context:self,unique:ce};
ca.push(bY);
return cb+m+ce;
},findHandler:function(bH,bI){var bS=false,bL=false,bT=false;
var bR;

if(bH.nodeType===1){bS=true;
bR=t+bH.tagName.toLowerCase()+g+bI;
}else if(bH==this.__eB){bL=true;
bR=D+bI;
}else if(bH.classname){bT=true;
bR=r+bH.classname+g+bI;
}else{bR=G+bH+g+bI;
}var bN=this.__eH;

if(bN[bR]){return bN[bR];
}var bQ=this.__eD.getHandlers();
var bM=qx.event.IEventHandler;
var bO,bP,bK,bJ;

for(var i=0,l=bQ.length;i<l;i++){bO=bQ[i];
bK=bO.SUPPORTED_TYPES;

if(bK&&!bK[bI]){continue;
}bJ=bO.TARGET_CHECK;

if(bJ){if(!bS&&bJ===bM.TARGET_DOMNODE){continue;
}else if(!bL&&bJ===bM.TARGET_WINDOW){continue;
}else if(!bT&&bJ===bM.TARGET_OBJECT){continue;
}}bP=this.getHandler(bQ[i]);

if(bO.IGNORE_CAN_HANDLE||bP.canHandleEvent(bH,bI)){bN[bR]=bP;
return bP;
}}return null;
},__eK:function(a,b,c){var d=this.findHandler(a,b);

if(d){d.registerEvent(a,b,c);
return;
}
if(qx.core.Variant.isSet(q,p)){qx.log.Logger.warn(this,"There is no event handler for the event '"+b+"' on target '"+a+"'!");
}},removeListener:function(bo,bp,bq,self,br){if(qx.core.Variant.isSet(q,p)){var bv=z+bp+j+N+bo.classname+k;
qx.core.Assert.assertObject(bo,bv+f);
qx.core.Assert.assertString(bp,bv+P);
qx.core.Assert.assertFunction(bq,bv+M);

if(self!==undefined){qx.core.Assert.assertObject(self,J);
}
if(br!==undefined){qx.core.Assert.assertBoolean(br,A);
}}var bw=bo.$$hash||qx.core.ObjectRegistry.toHashCode(bo);
var bx=this.__eE[bw];

if(!bx){return false;
}var bs=bp+(br?n:o);
var bt=bx[bs];

if(!bt){return false;
}var bu;

for(var i=0,l=bt.length;i<l;i++){bu=bt[i];

if(bu.handler===bq&&bu.context===self){qx.lang.Array.removeAt(bt,i);

if(bt.length==0){this.__eL(bo,bp,br);
}return true;
}}return false;
},removeListenerById:function(cM,cN){if(qx.core.Variant.isSet(q,p)){var cT=K+cN+j+N+cM.classname+k;
qx.core.Assert.assertObject(cM,cT+f);
qx.core.Assert.assertString(cN,cT+B);
}var cR=cN.split(m);
var cW=cR[0];
var cO=cR[1].charCodeAt(0)==99;
var cV=cR[2];
var cU=cM.$$hash||qx.core.ObjectRegistry.toHashCode(cM);
var cX=this.__eE[cU];

if(!cX){return false;
}var cS=cW+(cO?n:o);
var cQ=cX[cS];

if(!cQ){return false;
}var cP;

for(var i=0,l=cQ.length;i<l;i++){cP=cQ[i];

if(cP.unique===cV){qx.lang.Array.removeAt(cQ,i);

if(cQ.length==0){this.__eL(cM,cW,cO);
}return true;
}}return false;
},removeAllListeners:function(cv){var cz=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cB=this.__eE[cz];

if(!cB){return false;
}var cx,cA,cw;

for(var cy in cB){if(cB[cy].length>0){cx=cy.split(m);
cA=cx[0];
cw=cx[1]===x;
this.__eL(cv,cA,cw);
}}delete this.__eE[cz];
return true;
},deleteAllListeners:function(e){delete this.__eE[e];
},__eL:function(ci,cj,ck){var cl=this.findHandler(ci,cj);

if(cl){cl.unregisterEvent(ci,cj,ck);
return;
}
if(qx.core.Variant.isSet(q,p)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cj+"' on target '"+ci+"'!");
}},dispatchEvent:function(bh,event){if(qx.core.Variant.isSet(q,p)){var bm=w+event+E+bh.classname+k;
qx.core.Assert.assertNotUndefined(bh,bm+O);
qx.core.Assert.assertNotNull(bh,bm+O);
qx.core.Assert.assertInstance(event,qx.event.type.Event,bm+F);
}var bn=event.getType();

if(!event.getBubbles()&&!this.hasListener(bh,bn)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bh);
}var bl=this.__eD.getDispatchers();
var bk;
var bj=false;

for(var i=0,l=bl.length;i<l;i++){bk=this.getDispatcher(bl[i]);
if(bk.canDispatchEvent(bh,event,bn)){bk.dispatchEvent(bh,event,bn);
bj=true;
break;
}}
if(!bj){if(qx.core.Variant.isSet(q,p)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bn+" on "+bh);
}return true;
}var bi=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bi;
},dispose:function(){this.__eD.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,u);
qx.util.DisposeUtil.disposeMap(this,v);
this.__eE=this.__eB=this.__eJ=null;
this.__eD=this.__eH=null;
}}});
})();
(function(){var d="qx.dom.Node",c="qx.client",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(c,{"mshtml":function(j){if(j.nodeType==null){return j;
}if(j.nodeType!==this.DOCUMENT){j=j.ownerDocument;
}return j.parentWindow;
},"default":function(r){if(r.nodeType==null){return r;
}if(r.nodeType!==this.DOCUMENT){r=r.ownerDocument;
}return r.defaultView;
}}),getDocumentElement:function(k){return this.getDocument(k).documentElement;
},getBodyElement:function(e){return this.getDocument(e).body;
},isNode:function(l){return !!(l&&l.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(p){return !!(p&&p.nodeType===this.DOCUMENT);
},isText:function(f){return !!(f&&f.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(g){if(!g||!g.nodeType){return null;
}
switch(g.nodeType){case 1:var i,a=[],h=g.childNodes,length=h.length;

for(i=0;i<length;i++){a[i]=this.getText(h[i]);
}return a.join(b);
case 2:return g.nodeValue;
break;
case 3:return g.nodeValue;
break;
}return null;
}}});
})();
(function(){var n="qx.debug",m="on",k="The second parameter must be an array.",j="mshtml",h="The first parameter must be an array.",g="Parameter must be an array.",f="qx.client",e="[object Array]",d="qx.lang.Array",c="qx",a="number",b="string";
qx.Class.define(d,{statics:{toArray:function(D,E){return this.cast(D,Array,E);
},cast:function(bb,bc,bd){if(bb.constructor===bc){return bb;
}
if(qx.Class.hasInterface(bb,qx.data.IListData)){var bb=bb.toArray();
}var be=new bc;
if(qx.core.Variant.isSet(f,j)){if(bb.item){for(var i=bd||0,l=bb.length;i<l;i++){be.push(bb[i]);
}return be;
}}if(Object.prototype.toString.call(bb)===e&&bd==null){be.push.apply(be,bb);
}else{be.push.apply(be,Array.prototype.slice.call(bb,bd||0));
}return be;
},fromArguments:function(V,W){return Array.prototype.slice.call(V,W||0);
},fromCollection:function(bo){if(qx.core.Variant.isSet(f,j)){if(bo.item){var bp=[];

for(var i=0,l=bo.length;i<l;i++){bp[i]=bo[i];
}return bp;
}}return Array.prototype.slice.call(bo,0);
},fromShortHand:function(bt){var bv=bt.length;
var bu=qx.lang.Array.clone(bt);
switch(bv){case 1:bu[1]=bu[2]=bu[3]=bu[0];
break;
case 2:bu[2]=bu[0];
case 3:bu[3]=bu[1];
}return bu;
},clone:function(bs){return bs.concat();
},insertAt:function(bq,br,i){bq.splice(i,0,br);
return bq;
},insertBefore:function(bj,bk,bl){var i=bj.indexOf(bl);

if(i==-1){bj.push(bk);
}else{bj.splice(i,0,bk);
}return bj;
},insertAfter:function(A,B,C){var i=A.indexOf(C);

if(i==-1||i==(A.length-1)){A.push(B);
}else{A.splice(i+1,0,B);
}return A;
},removeAt:function(ba,i){return ba.splice(i,1)[0];
},removeAll:function(y){y.length=0;
return this;
},append:function(bm,bn){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertArray(bm,h);
qx.core.Assert&&qx.core.Assert.assertArray(bn,k);
}Array.prototype.push.apply(bm,bn);
return bm;
},exclude:function(bf,bg){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertArray(bf,h);
qx.core.Assert&&qx.core.Assert.assertArray(bg,k);
}
for(var i=0,bi=bg.length,bh;i<bi;i++){bh=bf.indexOf(bg[i]);

if(bh!=-1){bf.splice(bh,1);
}}return bf;
},remove:function(u,v){var i=u.indexOf(v);

if(i!=-1){u.splice(i,1);
return v;
}},contains:function(X,Y){return X.indexOf(Y)!==-1;
},equals:function(o,p){var length=o.length;

if(length!==p.length){return false;
}
for(var i=0;i<length;i++){if(o[i]!==p[i]){return false;
}}return true;
},sum:function(w){var x=0;

for(var i=0,l=w.length;i<l;i++){x+=w[i];
}return x;
},max:function(S){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertArray(S,g);
}var i,U=S.length,T=S[0];

for(i=1;i<U;i++){if(S[i]>T){T=S[i];
}}return T===undefined?null:T;
},min:function(r){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertArray(r,g);
}var i,t=r.length,s=r[0];

for(i=1;i<t;i++){if(r[i]<s){s=r[i];
}}return s===undefined?null:s;
},unique:function(F){var P=[],H={},K={},M={};
var L,G=0;
var Q=c+qx.lang.Date.now();
var I=false,O=false,R=false;
for(var i=0,N=F.length;i<N;i++){L=F[i];
if(L===null){if(!I){I=true;
P.push(L);
}}else if(L===undefined){}else if(L===false){if(!O){O=true;
P.push(L);
}}else if(L===true){if(!R){R=true;
P.push(L);
}}else if(typeof L===b){if(!H[L]){H[L]=1;
P.push(L);
}}else if(typeof L===a){if(!K[L]){K[L]=1;
P.push(L);
}}else{J=L[Q];

if(J==null){J=L[Q]=G++;
}
if(!M[J]){M[J]=L;
P.push(L);
}}}for(var J in M){try{delete M[J][Q];
}catch(z){try{M[J][Q]=null;
}catch(q){throw new Error("Cannot clean-up map entry doneObjects["+J+"]["+Q+"]");
}}}return P;
}}});
})();
(function(){var n="()",m="qx.debug",l=".",k=".prototype.",j="on",i="Invalid parameter 'func'.",h='anonymous()',g="Trying to call a bound function with a disposed object as context: ",f=" :: ",e="qx.lang.Function",d=".constructor()";
qx.Class.define(e,{statics:{getCaller:function(x){return x.caller?x.caller.callee:x.callee.caller;
},getName:function(J){if(J.displayName){return J.displayName;
}
if(J.$$original||J.wrapper||J.classname){return J.classname+d;
}
if(J.$$mixin){for(var L in J.$$mixin.$$members){if(J.$$mixin.$$members[L]==J){return J.$$mixin.name+k+L+n;
}}for(var L in J.$$mixin){if(J.$$mixin[L]==J){return J.$$mixin.name+l+L+n;
}}}
if(J.self){var M=J.self.constructor;

if(M){for(var L in M.prototype){if(M.prototype[L]==J){return M.classname+k+L+n;
}}for(var L in M){if(M[L]==J){return M.classname+l+L+n;
}}}}var K=J.toString().match(/function\s*(\w*)\s*\(.*/);

if(K&&K.length>=1&&K[1]){return K[1]+n;
}return h;
},globalEval:function(C){if(window.execScript){return window.execScript(C);
}else{return eval.call(window,C);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(q,r){if(qx.core.Variant.isSet(m,j)){qx.core.Assert&&qx.core.Assert.assertFunction(q,i);
}if(!r){return q;
}if(!(r.self||r.args||r.delay!=null||r.periodical!=null||r.attempt)){return q;
}return function(event){if(qx.core.Variant.isSet(m,j)){if(r.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(r.self.isDisposed(),g+r.self.toString()+f+qx.lang.Function.getName(q));
}}var F=qx.lang.Array.fromArguments(arguments);
if(r.args){F=r.args.concat(F);
}
if(r.delay||r.periodical){var E=qx.event.GlobalError.observeMethod(function(){return q.apply(r.self||this,F);
});

if(r.delay){return window.setTimeout(E,r.delay);
}
if(r.periodical){return window.setInterval(E,r.periodical);
}}else if(r.attempt){var G=false;

try{G=q.apply(r.self||this,F);
}catch(B){}return G;
}else{return q.apply(r.self||this,F);
}};
},bind:function(o,self,p){return this.create(o,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(H,I){return this.create(H,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(u,self,v){if(arguments.length<3){return function(event){return u.call(self||this,event||window.event);
};
}else{var w=qx.lang.Array.fromArguments(arguments,2);
return function(event){var D=[event||window.event];
D.push.apply(D,w);
u.apply(self||this,D);
};
}},attempt:function(s,self,t){return this.create(s,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(y,z,self,A){return this.create(y,{delay:z,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(a,b,self,c){return this.create(a,{periodical:b,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var m="qx.debug",l="on",k="Invalid event target.",j="Invalid event dispatcher!",i="': ",h="Invalid event handler.",g="' on target '",f="Could not fire event '",e="undefined",d="qx.event.Registration";
qx.Class.define(d,{statics:{__eq:{},getManager:function(U){if(U==null){if(qx.core.Variant.isSet(m,l)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}U=window;
}else if(U.nodeType){U=qx.dom.Node.getWindow(U);
}else if(!qx.dom.Node.isWindow(U)){U=window;
}var W=U.$$hash||qx.core.ObjectRegistry.toHashCode(U);
var V=this.__eq[W];

if(!V){V=new qx.event.Manager(U,this);
this.__eq[W]=V;
}return V;
},removeManager:function(p){var q=p.getWindowId();
delete this.__eq[q];
},addListener:function(B,C,D,self,E){return this.getManager(B).addListener(B,C,D,self,E);
},removeListener:function(Q,R,S,self,T){return this.getManager(Q).removeListener(Q,R,S,self,T);
},removeListenerById:function(n,o){return this.getManager(n).removeListenerById(n,o);
},removeAllListeners:function(M){return this.getManager(M).removeAllListeners(M);
},deleteAllListeners:function(bb){var bc=bb.$$hash;

if(bc){this.getManager(bb).deleteAllListeners(bc);
}},hasListener:function(X,Y,ba){return this.getManager(X).hasListener(X,Y,ba);
},serializeListeners:function(c){return this.getManager(c).serializeListeners(c);
},createEvent:function(x,y,z){if(qx.core.Variant.isSet(m,l)){if(arguments.length>1&&y===undefined){throw new Error("Create event of type "+x+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(y==null){y=qx.event.type.Event;
}var A=qx.event.Pool.getInstance().getObject(y);
z?A.init.apply(A,z):A.init();
if(x){A.setType(x);
}return A;
},dispatchEvent:function(N,event){return this.getManager(N).dispatchEvent(N,event);
},fireEvent:function(F,G,H,I){if(qx.core.Variant.isSet(m,l)){if(arguments.length>2&&H===undefined&&I!==undefined){throw new Error("Create event of type "+G+" with undefined class. Please use null to explicit fallback to default event type!");
}var J=f+G+g+(F?F.classname:e)+i;
qx.core.Assert.assertNotUndefined(F,J+k);
qx.core.Assert.assertNotNull(F,J+k);
}var K=this.createEvent(G,H||null,I);
return this.getManager(F).dispatchEvent(F,K);
},fireNonBubblingEvent:function(r,s,t,u){if(qx.core.Variant.isSet(m,l)){if(arguments.length>2&&t===undefined&&u!==undefined){throw new Error("Create event of type "+s+" with undefined class. Please use null to explicit fallback to default event type!");
}}var v=this.getManager(r);

if(!v.hasListener(r,s,false)){return true;
}var w=this.createEvent(s,t||null,u);
return v.dispatchEvent(r,w);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__er:[],addHandler:function(L){if(qx.core.Variant.isSet(m,l)){qx.core.Assert.assertInterface(L,qx.event.IEventHandler,h);
}this.__er.push(L);
this.__er.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__er;
},__es:[],addDispatcher:function(O,P){if(qx.core.Variant.isSet(m,l)){qx.core.Assert.assertInterface(O,qx.event.IEventDispatcher,j);
}this.__es.push(O);
this.__es.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__es;
}}});
})();
(function(){var h="on",g="qx.debug",f="$$hash",e="",d="qx.core.ObjectRegistry";
qx.Class.define(d,{statics:{inShutDown:false,__gY:{},__ha:0,__hb:[],register:function(y){var B=this.__gY;

if(!B){return;
}var A=y.$$hash;

if(A==null){var z=this.__hb;

if(z.length>0){A=z.pop();
}else{A=(this.__ha++)+e;
}y.$$hash=A;
}
if(qx.core.Variant.isSet(g,h)){if(!y.dispose){throw new Error("Invalid object: "+y);
}}B[A]=y;
},unregister:function(o){var p=o.$$hash;

if(p==null){return;
}var q=this.__gY;

if(q&&q[p]){delete q[p];
this.__hb.push(p);
}try{delete o.$$hash;
}catch(c){if(o.removeAttribute){o.removeAttribute(f);
}}},toHashCode:function(r){if(qx.core.Variant.isSet(g,h)){if(r==null){throw new Error("Invalid object: "+r);
}}var t=r.$$hash;

if(t!=null){return t;
}var s=this.__hb;

if(s.length>0){t=s.pop();
}else{t=(this.__ha++)+e;
}return r.$$hash=t;
},clearHashCode:function(v){if(qx.core.Variant.isSet(g,h)){if(v==null){throw new Error("Invalid object: "+v);
}}var w=v.$$hash;

if(w!=null){this.__hb.push(w);
try{delete v.$$hash;
}catch(u){if(v.removeAttribute){v.removeAttribute(f);
}}}},fromHashCode:function(C){return this.__gY[C]||null;
},shutdown:function(){this.inShutDown=true;
var k=this.__gY;
var n=[];

for(var m in k){n.push(m);
}n.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var j,i=0,l=n.length;

while(true){try{for(;i<l;i++){m=n[i];
j=k[m];

if(j&&j.dispose){j.dispose();
}}}catch(x){qx.Bootstrap.error(this,"Could not dispose object "+j.toString()+": "+x);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__gY;
},getRegistry:function(){return this.__gY;
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Number));
},isBoolean:function(j){return (j!==null&&(this.getClass(j)==a||j instanceof Boolean));
},isDate:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Error));
}}});
})();
(function(){var ci="",ch="!",cg="'!",cf="'",ce="Expected '",cd="' (rgb(",cc=",",cb=")), but found value '",ca="Event (",bY="Expected value to be the CSS color '",dp="' but found ",dn="The value '",dm="qx.core.Object",dl="Expected value to be an array but found ",dk=") was fired.",dj="Expected value to be an integer >= 0 but found ",di="' to be not equal with '",dh="' to '",dg="qx.ui.core.Widget",df="Called assertTrue with '",cp="Expected value to be a map but found ",cq="The function did not raise an exception!",cn="Expected value to be undefined but found ",co="Expected value to be a DOM element but found  '",cl="Expected value to be a regular expression but found ",cm="' to implement the interface '",cj="Expected value to be null but found ",ck="Invalid argument 'type'",cx="Called assert with 'false'",cy="Assertion error! ",cK="Expected value to be a string but found ",cG="null",cS="' but found '",cN="' must must be a key of the map '",db="The String '",cX="Expected value not to be undefined but found ",cC="qx.util.ColorUtil",de=": ",dd="The raised exception does not have the expected type! ",dc=") not fired.",cB="qx.core.Assert",cE="Expected value to be typeof object but found ",cF="' (identical) but found '",cI="' must have any of the values defined in the array '",cL="Expected value to be a number but found ",cO="Called assertFalse with '",cU="]",da="Expected value to be a qooxdoo object but found ",cr="' arguments.",cs="Expected value not to be null but found ",cD="Array[",cR="' does not match the regular expression '",cQ="' to be not identical with '",cP="' arguments but found '",cW="', which cannot be converted to a CSS color!",cV="Expected object '",cM="qx.core.AssertionError",cT="Expected value to be a boolean but found ",bV="))!",cY="Expected value to be a qooxdoo widget but found ",ct="Expected value '%1' to be in the range '%2'..'%3'!",cu="Expected value to be typeof '",cH="Expected value to be typeof function but found ",bW="Expected value to be an integer but found ",bX="Called fail().",cA="The parameter 're' must be a string or a regular expression.",cv="Expected value to be a number >= 0 but found ",cw="Expected value to be instanceof '",cz="Wrong number of arguments given. Expected '",cJ="object";
qx.Class.define(cB,{statics:{__rU:true,__rV:function(bA,bB){var bC=ci;

for(var i=1,l=arguments.length;i<l;i++){bC=bC+this.__rW(arguments[i]);
}var bE=cy+bA+de+bC;

if(this.__rU){qx.Bootstrap.error(bE);
}
if(qx.Class.isDefined(cM)){var bD=new qx.core.AssertionError(bA,bC);

if(this.__rU){qx.Bootstrap.error("Stack trace: \n"+bD.getStackTrace());
}throw bD;
}else{throw new Error(bE);
}},__rW:function(x){var y;

if(x===null){y=cG;
}else if(qx.lang.Type.isArray(x)&&x.length>10){y=cD+x.length+cU;
}else if((x instanceof Object)&&(x.toString==null)){y=qx.lang.Json.stringify(x,null,2);
}else{try{y=x.toString();
}catch(e){y=ci;
}}return y;
},assert:function(dq,dr){dq==true||this.__rV(dr||ci,cx);
},fail:function(bp){this.__rV(bp||ci,bX);
},assertTrue:function(bs,bt){(bs===true)||this.__rV(bt||ci,df,bs,cf);
},assertFalse:function(dv,dw){(dv===false)||this.__rV(dw||ci,cO,dv,cf);
},assertEquals:function(bQ,bR,bS){bQ==bR||this.__rV(bS||ci,ce,bQ,cS,bR,cg);
},assertNotEquals:function(bx,by,bz){bx!=by||this.__rV(bz||ci,ce,bx,di,by,cg);
},assertIdentical:function(ds,dt,du){ds===dt||this.__rV(du||ci,ce,ds,cF,dt,cg);
},assertNotIdentical:function(be,bf,bg){be!==bf||this.__rV(bg||ci,ce,be,cQ,bf,cg);
},assertNotUndefined:function(r,s){r!==undefined||this.__rV(s||ci,cX,r,ch);
},assertUndefined:function(dV,dW){dV===undefined||this.__rV(dW||ci,cn,dV,ch);
},assertNotNull:function(B,C){B!==null||this.__rV(C||ci,cs,B,ch);
},assertNull:function(dM,dN){dM===null||this.__rV(dN||ci,cj,dM,ch);
},assertJsonEquals:function(dA,dB,dC){this.assertEquals(qx.lang.Json.stringify(dA),qx.lang.Json.stringify(dB),dC);
},assertMatch:function(N,O,P){this.assertString(N);
this.assert(qx.lang.Type.isRegExp(O)||qx.lang.Type.isString(O),cA);
N.search(O)>=0||this.__rV(P||ci,db,N,cR,O.toString(),cg);
},assertArgumentsCount:function(bF,bG,bH,bI){var bJ=bF.length;
(bJ>=bG&&bJ<=bH)||this.__rV(bI||ci,cz,bG,dh,bH,cP,arguments.length,cr);
},assertEventFired:function(G,event,H,I,J){var L=false;
var K=function(e){if(I){I.call(G,e);
}L=true;
};
var M=G.addListener(event,K,G);
H.call();
L===true||this.__rV(J||ci,ca,event,dc);
G.removeListenerById(M);
},assertEventNotFired:function(dD,event,dE,dF){var dH=false;
var dG=function(e){dH=true;
};
var dI=dD.addListener(event,dG,dD);
dE.call();
dH===false||this.__rV(dF||ci,ca,event,dk);
dD.removeListenerById(dI);
},assertException:function(U,V,W,X){var V=V||Error;
var Y;

try{this.__rU=false;
U();
}catch(bK){Y=bK;
}finally{this.__rU=true;
}
if(Y==null){this.__rV(X||ci,cq);
}Y instanceof V||this.__rV(X||ci,dd,V);

if(W){this.assertMatch(Y.toString(),W,X);
}},assertInArray:function(bN,bO,bP){bO.indexOf(bN)!==-1||this.__rV(bP||ci,dn,bN,cI,bO,cf);
},assertArrayEquals:function(a,b,c){this.assertArray(a,c);
this.assertArray(b,c);
this.assertEquals(a.length,b.length,c);

for(var i=0;i<a.length;i++){this.assertIdentical(a[i],b[i],c);
}},assertKeyInMap:function(g,h,j){h[g]!==undefined||this.__rV(j||ci,dn,g,cN,h,cf);
},assertFunction:function(bc,bd){qx.lang.Type.isFunction(bc)||this.__rV(bd||ci,cH,bc,ch);
},assertString:function(t,u){qx.lang.Type.isString(t)||this.__rV(u||ci,cK,t,ch);
},assertBoolean:function(bT,bU){qx.lang.Type.isBoolean(bT)||this.__rV(bU||ci,cT,bT,ch);
},assertNumber:function(v,w){(qx.lang.Type.isNumber(v)&&isFinite(v))||this.__rV(w||ci,cL,v,ch);
},assertPositiveNumber:function(bn,bo){(qx.lang.Type.isNumber(bn)&&isFinite(bn)&&bn>=0)||this.__rV(bo||ci,cv,bn,ch);
},assertInteger:function(bq,br){(qx.lang.Type.isNumber(bq)&&isFinite(bq)&&bq%1===0)||this.__rV(br||ci,bW,bq,ch);
},assertPositiveInteger:function(dJ,dK){var dL=(qx.lang.Type.isNumber(dJ)&&isFinite(dJ)&&dJ%1===0&&dJ>=0);
dL||this.__rV(dK||ci,dj,dJ,ch);
},assertInRange:function(n,o,p,q){(n>=o&&n<=p)||this.__rV(q||ci,qx.lang.String.format(ct,[n,o,p]));
},assertObject:function(dx,dy){var dz=dx!==null&&(qx.lang.Type.isObject(dx)||typeof dx===cJ);
dz||this.__rV(dy||ci,cE,(dx),ch);
},assertArray:function(k,m){qx.lang.Type.isArray(k)||this.__rV(m||ci,dl,k,ch);
},assertMap:function(bL,bM){qx.lang.Type.isObject(bL)||this.__rV(bM||ci,cp,bL,ch);
},assertRegExp:function(ba,bb){qx.lang.Type.isRegExp(ba)||this.__rV(bb||ci,cl,ba,ch);
},assertType:function(D,E,F){this.assertString(E,ck);
typeof (D)===E||this.__rV(F||ci,cu,E,dp,D,ch);
},assertInstance:function(bj,bk,bl){var bm=bk.classname||bk+ci;
bj instanceof bk||this.__rV(bl||ci,cw,bm,dp,bj,ch);
},assertInterface:function(Q,R,S){qx.Class.implementsInterface(Q,R)||this.__rV(S||ci,cV,Q,cm,R,cg);
},assertCssColor:function(dO,dP,dQ){var dR=qx.Class.getByName(cC);

if(!dR){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dT=dR.stringToRgb(dO);

try{var dS=dR.stringToRgb(dP);
}catch(T){this.__rV(dQ||ci,bY,dO,cd,dT.join(cc),cb,dP,cW);
}var dU=dT[0]==dS[0]&&dT[1]==dS[1]&&dT[2]==dS[2];
dU||this.__rV(dQ||ci,bY,dT,cd,dT.join(cc),cb,dP,cd,dS.join(cc),bV);
},assertElement:function(z,A){!!(z&&z.nodeType===1)||this.__rV(A||ci,co,z,cg);
},assertQxObject:function(bh,bi){this.__rX(bh,dm)||this.__rV(bi||ci,da,bh,ch);
},assertQxWidget:function(d,f){this.__rX(d,dg)||this.__rV(f||ci,cY,d,ch);
},__rX:function(bu,bv){if(!bu){return false;
}var bw=bu.constructor;

while(bw){if(bw.classname===bv){return true;
}bw=bw.superclass;
}return false;
}}});
})();
(function(){var q="qx.core.MAssert";
qx.Mixin.define(q,{members:{assert:function(bv,bw){qx.core.Assert.assert(bv,bw);
},fail:function(I){qx.core.Assert.fail(I);
},assertTrue:function(bp,bq){qx.core.Assert.assertTrue(bp,bq);
},assertFalse:function(J,K){qx.core.Assert.assertFalse(J,K);
},assertEquals:function(r,s,t){qx.core.Assert.assertEquals(r,s,t);
},assertNotEquals:function(bz,bA,bB){qx.core.Assert.assertNotEquals(bz,bA,bB);
},assertIdentical:function(bI,bJ,bK){qx.core.Assert.assertIdentical(bI,bJ,bK);
},assertNotIdentical:function(R,S,T){qx.core.Assert.assertNotIdentical(R,S,T);
},assertNotUndefined:function(a,b){qx.core.Assert.assertNotUndefined(a,b);
},assertUndefined:function(bS,bT){qx.core.Assert.assertUndefined(bS,bT);
},assertNotNull:function(bX,bY){qx.core.Assert.assertNotNull(bX,bY);
},assertNull:function(bG,bH){qx.core.Assert.assertNull(bG,bH);
},assertJsonEquals:function(bc,bd,be){qx.core.Assert.assertJsonEquals(bc,bd,be);
},assertMatch:function(bm,bn,bo){qx.core.Assert.assertMatch(bm,bn,bo);
},assertArgumentsCount:function(j,k,l,m){qx.core.Assert.assertArgumentsCount(j,k,l,m);
},assertEventFired:function(bO,event,bP,bQ,bR){qx.core.Assert.assertEventFired(bO,event,bP,bQ,bR);
},assertEventNotFired:function(bL,event,bM,bN){qx.core.Assert.assertEventNotFired(bL,event,bM,bN);
},assertException:function(br,bs,bt,bu){qx.core.Assert.assertException(br,bs,bt,bu);
},assertInArray:function(bU,bV,bW){qx.core.Assert.assertInArray(bU,bV,bW);
},assertArrayEquals:function(c,d,e){qx.core.Assert.assertArrayEquals(c,d,e);
},assertKeyInMap:function(u,v,w){qx.core.Assert.assertKeyInMap(u,v,w);
},assertFunction:function(f,g){qx.core.Assert.assertFunction(f,g);
},assertString:function(bC,bD){qx.core.Assert.assertString(bC,bD);
},assertBoolean:function(ba,bb){qx.core.Assert.assertBoolean(ba,bb);
},assertNumber:function(X,Y){qx.core.Assert.assertNumber(X,Y);
},assertPositiveNumber:function(C,D){qx.core.Assert.assertPositiveNumber(C,D);
},assertInteger:function(h,i){qx.core.Assert.assertInteger(h,i);
},assertPositiveInteger:function(bf,bg){qx.core.Assert.assertPositiveInteger(bf,bg);
},assertInRange:function(E,F,G,H){qx.core.Assert.assertInRange(E,F,G,H);
},assertObject:function(bh,bi){qx.core.Assert.assertObject(bh,bi);
},assertArray:function(P,Q){qx.core.Assert.assertArray(P,Q);
},assertMap:function(L,M){qx.core.Assert.assertMap(L,M);
},assertRegExp:function(bx,by){qx.core.Assert.assertRegExp(bx,by);
},assertType:function(bj,bk,bl){qx.core.Assert.assertType(bj,bk,bl);
},assertInstance:function(z,A,B){qx.core.Assert.assertInstance(z,A,B);
},assertInterface:function(U,V,W){qx.core.Assert.assertInterface(U,V,W);
},assertCssColor:function(n,o,p){qx.core.Assert.assertCssColor(n,o,p);
},assertElement:function(x,y){qx.core.Assert.assertElement(x,y);
},assertQxObject:function(bE,bF){qx.core.Assert.assertQxObject(bE,bF);
},assertQxWidget:function(N,O){qx.core.Assert.assertQxWidget(N,O);
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var q=":",p="qx.client",o="anonymous",n="...",m="qx.dev.StackTrace",l="",k="\n",j="/source/class/",h=".";
qx.Class.define(m,{statics:{getStackTrace:qx.core.Variant.select(p,{"gecko":function(){try{throw new Error();
}catch(X){var D=this.getStackTraceFromError(X);
qx.lang.Array.removeAt(D,0);
var B=this.getStackTraceFromCaller(arguments);
var z=B.length>D.length?B:D;

for(var i=0;i<Math.min(B.length,D.length);i++){var A=B[i];

if(A.indexOf(o)>=0){continue;
}var H=A.split(q);

if(H.length!=2){continue;
}var F=H[0];
var y=H[1];
var x=D[i];
var I=x.split(q);
var E=I[0];
var w=I[1];

if(qx.Class.getByName(E)){var C=E;
}else{C=F;
}var G=C+q;

if(y){G+=y+q;
}G+=w;
z[i]=G;
}return z;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var ba;

try{ba.bar();
}catch(W){var bb=this.getStackTraceFromError(W);
qx.lang.Array.removeAt(bb,0);
return bb;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(v){return [];
},"default":function(J){var O=[];
var N=qx.lang.Function.getCaller(J);
var K={};

while(N){var L=qx.lang.Function.getName(N);
O.push(L);

try{N=N.caller;
}catch(Y){break;
}
if(!N){break;
}var M=qx.core.ObjectRegistry.toHashCode(N);

if(K[M]){O.push(n);
break;
}K[M]=N;
}return O;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__jB(S);
R.push(T+q+U);
}return R;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__jB(bc.sourceURL)+q+bc.line];
}else{return [];
}},"opera":function(a){if(a.message.indexOf("Backtrace:")<0){return [];
}var c=[];
var d=qx.lang.String.trim(a.message.split("Backtrace:")[1]);
var e=d.split(k);

for(var i=0;i<e.length;i++){var b=e[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(b&&b.length>=2){var g=b[1];
var f=this.__jB(b[2]);
c.push(f+q+g);
}}return c;
},"default":function(){return [];
}}),__jB:function(r){var u=j;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,h).replace(/\.js$/,l);
return t;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__ke=[];
this.setMaxMessages(i||50);
},members:{__kf:0,__ke:null,__kg:50,setMaxMessages:function(b){this.__kg=b;
this.clearHistory();
},getMaxMessages:function(){return this.__kg;
},process:function(c){var d=this.getMaxMessages();

if(this.__ke.length<d){this.__ke.push(c);
}else{this.__ke[this.__kf++]=c;

if(this.__kf>=d){this.__kf=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(e){if(e>this.__ke.length){e=this.__ke.length;
}
if(this.__ke.length==this.getMaxMessages()){var g=this.__kf-1;
}else{g=this.__ke.length-1;
}var f=g-e+1;

if(f<0){f+=this.__ke.length;
}var h;

if(f<=g){h=this.__ke.slice(f,g+1);
}else{h=this.__ke.slice(f,this.__ke.length).concat(this.__ke.slice(0,g+1));
}return h;
},clearHistory:function(){this.__ke=[];
this.__kf=0;
}}});
})();
(function(){var D="qx.debug",C="on",B="unknown",A="node",z="error",y="...(+",x="array",w=")",v="info",u="instance",bb="string",ba="null",Y="class",X="number",W="stringify",V="]",U="function",T="boolean",S="debug",R="map",K="undefined",L="qx.log.Logger",I=")}",J="#",G="warn",H="document",E="{...(",F="[",M="text[",N="[...(",P="\n",O=")]",Q="object";
qx.Class.define(L,{statics:{__et:S,setLevel:function(bN){this.__et=bN;
},getLevel:function(){return this.__et;
},setTreshold:function(bc){this.__ew.setMaxMessages(bc);
},getTreshold:function(){return this.__ew.getMaxMessages();
},__eu:{},__ev:0,register:function(bP){if(bP.$$id){return;
}var bQ=this.__ev++;
this.__eu[bQ]=bP;
bP.$$id=bQ;
var bR=this.__ew.getAllLogEvents();

for(var i=0,l=bR.length;i<l;i++){bP.process(bR[i]);
}},unregister:function(s){var t=s.$$id;

if(t==null){return;
}delete this.__eu[t];
delete s.$$id;
},debug:function(bI,bJ){qx.log.Logger.__ey(S,arguments);
},info:function(bq,br){qx.log.Logger.__ey(v,arguments);
},warn:function(bG,bH){qx.log.Logger.__ey(G,arguments);
},error:function(bx,by){qx.log.Logger.__ey(z,arguments);
},trace:function(bO){qx.log.Logger.__ey(v,[bO,qx.dev.StackTrace.getStackTrace().join(P)]);
},deprecatedMethodWarning:function(a,b){if(qx.core.Variant.isSet(D,C)){var c=qx.lang.Function.getName(a);
this.warn("The method '"+c+"' is deprecated: "+(b||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(bz,bA){if(qx.core.Variant.isSet(D,C)){var bB=bz.classname||B;
this.warn("The class '"+bB+"' is deprecated: "+(bA||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bK,event,bL){if(qx.core.Variant.isSet(D,C)){var bM=bK.self?bK.self.classname:B;
this.warn("The event '"+(event||"unknown")+"' from class '"+bM+"' is deprecated: "+(bL||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bd,be){if(qx.core.Variant.isSet(D,C)){var bf=bd?bd.name:B;
this.warn("The mixin '"+bf+"' is deprecated: "+(be||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(o,p,q){if(qx.core.Variant.isSet(D,C)){if(o.__defineGetter__){var self=this;
var r=o[p];
o.__defineGetter__(p,function(){self.warn("The constant '"+p+"' is deprecated: "+(q||"Please consult the API documentation for alternatives."));
self.trace();
return r;
});
}}},deprecateMethodOverriding:function(bs,bt,bu,bv){if(qx.core.Variant.isSet(D,C)){var bw=bs.constructor;

while(bw.classname!==bt.classname){if(bw.prototype.hasOwnProperty(bu)){this.warn("The method '"+qx.lang.Function.getName(bs[bu])+"' overrides a deprecated method: "+(bv||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bw=bw.superclass;
}}},clear:function(){this.__ew.clearHistory();
},__ew:new qx.log.appender.RingBuffer(50),__ex:{debug:0,info:1,warn:2,error:3},__ey:function(bg,bh){var bm=this.__ex;

if(bm[bg]<bm[this.__et]){return;
}var bj=bh.length<2?null:bh[0];
var bl=bj?1:0;
var bi=[];

for(var i=bl,l=bh.length;i<l;i++){bi.push(this.__eA(bh[i],true));
}var bn=new Date;
var bo={time:bn,offset:bn-qx.Bootstrap.LOADSTART,level:bg,items:bi,win:window};
if(bj){if(bj instanceof qx.core.Object){bo.object=bj.$$hash;
}else if(bj.$$type){bo.clazz=bj;
}}this.__ew.process(bo);
var bp=this.__eu;

for(var bk in bp){bp[bk].process(bo);
}},__ez:function(bE){if(bE===undefined){return K;
}else if(bE===null){return ba;
}
if(bE.$$type){return Y;
}var bF=typeof bE;

if(bF===U||bF==bb||bF===X||bF===T){return bF;
}else if(bF===Q){if(bE.nodeType){return A;
}else if(bE.classname){return u;
}else if(bE instanceof Array){return x;
}else if(bE instanceof Error){return z;
}else{return R;
}}
if(bE.toString){return W;
}return B;
},__eA:function(d,e){var n=this.__ez(d);
var h=B;
var g=[];

switch(n){case ba:case K:h=n;
break;
case bb:case X:case T:h=d;
break;
case A:if(d.nodeType===9){h=H;
}else if(d.nodeType===3){h=M+d.nodeValue+V;
}else if(d.nodeType===1){h=d.nodeName.toLowerCase();

if(d.id){h+=J+d.id;
}}else{h=A;
}break;
case U:h=qx.lang.Function.getName(d)||n;
break;
case u:h=d.basename+F+d.$$hash+V;
break;
case Y:case W:h=d.toString();
break;
case z:g=qx.dev.StackTrace.getStackTraceFromError(d);
h=d.toString();
break;
case x:if(e){h=[];

for(var i=0,l=d.length;i<l;i++){if(h.length>20){h.push(y+(l-i)+w);
break;
}h.push(this.__eA(d[i],false));
}}else{h=N+d.length+O;
}break;
case R:if(e){var f;
var m=[];

for(var k in d){m.push(k);
}m.sort();
h=[];

for(var i=0,l=m.length;i<l;i++){if(h.length>20){h.push(y+(l-i)+w);
break;
}k=m[i];
f=this.__eA(d[k],false);
f.key=k;
h.push(f);
}}else{var j=0;

for(var k in d){j++;
}h=E+j+I;
}break;
}return {type:n,text:h,trace:g};
}},defer:function(bC){var bD=qx.Bootstrap.$$logs;

for(var i=0;i<bD.length;i++){bC.__ey(bD[i][0],bD[i][1]);
}qx.Bootstrap.debug=bC.debug;
qx.Bootstrap.info=bC.info;
qx.Bootstrap.warn=bC.warn;
qx.Bootstrap.error=bC.error;
qx.Bootstrap.trace=bC.trace;
}});
})();
(function(){var F="qx.debug",E="on",D="qx.disposerDebugLevel",C="set",B="MSIE 6.0",A="rv:1.8.1",z="get",y="reset",x="qx.core.Object",w="]",t="[",v="$$user_",u="object",s="Object";
qx.Class.define(x,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:s},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+t+this.$$hash+w;
},base:function(Q,R){if(qx.core.Variant.isSet(F,E)){if(!qx.Bootstrap.isFunction(Q.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+Q.callee.displayName);
}}
if(arguments.length===1){return Q.callee.base.call(this);
}else{return Q.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(M){return M.callee.self;
},clone:function(){var bh=this.constructor;
var bg=new bh;
var bj=qx.Class.getProperties(bh);
var bi=qx.core.Property.$$store.user;
var bk=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bj.length;i<l;i++){name=bj[i];

if(this.hasOwnProperty(bi[name])){bg[bk[name]](this[bi[name]]);
}}return bg;
},set:function(bs,bt){var bv=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bs)){if(!this[bv[bs]]){if(this[C+qx.Bootstrap.firstUp(bs)]!=undefined){this[C+qx.Bootstrap.firstUp(bs)](bt);
return;
}
if(qx.core.Variant.isSet(F,E)){qx.Bootstrap.error("No such property: "+bs);
return this;
}}return this[bv[bs]](bt);
}else{for(var bu in bs){if(!this[bv[bu]]){if(this[C+qx.Bootstrap.firstUp(bu)]!=undefined){this[C+qx.Bootstrap.firstUp(bu)](bs[bu]);
continue;
}
if(qx.core.Variant.isSet(F,E)){qx.Bootstrap.error("No such property: "+bu);
return this;
}}this[bv[bu]](bs[bu]);
}return this;
}},get:function(bK){var bL=qx.core.Property.$$method.get;

if(!this[bL[bK]]){if(this[z+qx.Bootstrap.firstUp(bK)]!=undefined){return this[z+qx.Bootstrap.firstUp(bK)]();
}
if(qx.core.Variant.isSet(F,E)){qx.Bootstrap.error("No such property: "+bK);
return this;
}}return this[bL[bK]]();
},reset:function(W){var X=qx.core.Property.$$method.reset;

if(!this[X[W]]){if(this[y+qx.Bootstrap.firstUp(W)]!=undefined){this[y+qx.Bootstrap.firstUp(W)]();
return;
}
if(qx.core.Variant.isSet(F,E)){qx.Bootstrap.error("No such property: "+W);
return this;
}}this[X[W]]();
},__kh:qx.event.Registration,addListener:function(N,O,self,P){if(!this.$$disposed){return this.__kh.addListener(this,N,O,self,P);
}return null;
},addListenerOnce:function(o,p,self,q){var r=function(e){p.call(self||this,e);
this.removeListener(o,r,this,q);
};
return this.addListener(o,r,this,q);
},removeListener:function(a,b,self,c){if(!this.$$disposed){return this.__kh.removeListener(this,a,b,self,c);
}return false;
},removeListenerById:function(bw){if(!this.$$disposed){return this.__kh.removeListenerById(this,bw);
}return false;
},hasListener:function(bq,br){return this.__kh.hasListener(this,bq,br);
},dispatchEvent:function(bp){if(!this.$$disposed){return this.__kh.dispatchEvent(this,bp);
}return true;
},fireEvent:function(J,K,L){if(!this.$$disposed){return this.__kh.fireEvent(this,J,K,L);
}return true;
},fireNonBubblingEvent:function(bB,bC,bD){if(!this.$$disposed){return this.__kh.fireNonBubblingEvent(this,bB,bC,bD);
}return true;
},fireDataEvent:function(bx,by,bz,bA){if(!this.$$disposed){if(bz===undefined){bz=null;
}return this.__kh.fireNonBubblingEvent(this,bx,qx.event.type.Data,[by,bz,!!bA]);
}return true;
},__ki:null,setUserData:function(bn,bo){if(!this.__ki){this.__ki={};
}this.__ki[bn]=bo;
},getUserData:function(bd){if(!this.__ki){return null;
}var be=this.__ki[bd];
return be===undefined?null:be;
},__kj:qx.log.Logger,debug:function(bc){this.__kj.debug(this,bc);
},info:function(G){this.__kj.info(this,G);
},warn:function(I){this.__kj.warn(this,I);
},error:function(bl){this.__kj.error(this,bl);
},trace:function(){this.__kj.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(F,E)){if(qx.core.Setting.get(D)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var bG=this.constructor;
var bE;

while(bG.superclass){if(bG.$$destructor){bG.$$destructor.call(this);
}if(bG.$$includes){bE=bG.$$flatIncludes;

for(var i=0,l=bE.length;i<l;i++){if(bE[i].$$destructor){bE[i].$$destructor.call(this);
}}}bG=bG.superclass;
}if(this.__kk){this.__kk();
}if(qx.core.Variant.isSet(F,E)){if(qx.core.Setting.get(D)>0){var bH,bF;

for(bH in this){bF=this[bH];
if(bF!==null&&typeof bF===u&&!(qx.Bootstrap.isString(bF))){if(this.constructor.prototype[bH]!=null){continue;
}var bJ=navigator.userAgent.indexOf(A)!=-1;
var bI=navigator.userAgent.indexOf(B)!=-1;
if(bJ||bI){if(bF instanceof qx.core.Object||qx.core.Setting.get(D)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bH+"' in "+this.classname+"["+this.toHashCode()+"]: "+bF);
delete this[bH];
}}else{if(qx.core.Setting.get(D)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+bH+"' in "+this.classname+"["+this.toHashCode()+"]: "+bF);
delete this[bH];
}}}}}}},__kk:null,__kl:function(){var bb=qx.Class.getProperties(this.constructor);

for(var i=0,l=bb.length;i<l;i++){delete this[v+bb[i]];
}},_disposeFields:function(ba){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bf){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(H){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(Y){qx.util.DisposeUtil.disposeArray(this,Y);
},_disposeMap:function(bm){qx.util.DisposeUtil.disposeMap(this,bm);
}},settings:{"qx.disposerDebugLevel":0},defer:function(S,T){if(qx.core.Variant.isSet(F,E)){qx.Class.include(S,qx.core.MAssert);
}var V=navigator.userAgent.indexOf(B)!=-1;
var U=navigator.userAgent.indexOf(A)!=-1;
if(V||U){T.__kk=T.__kl;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__ki=null;
var g=this.constructor;
var m;
var n=qx.core.Property.$$store;
var j=n.user;
var k=n.theme;
var d=n.inherit;
var h=n.useinit;
var f=n.init;

while(g){m=g.$$properties;

if(m){for(var name in m){if(m[name].dispose||m[name].dereference){this[j[name]]=this[k[name]]=this[d[name]]=this[h[name]]=this[f[name]]=undefined;
}}}g=g.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(d,f){this.__jk=d||null;
this.__jl=f||window;

if(qx.core.Setting.get(c)===b){if(d&&window.onerror){var g=qx.Bootstrap.bind(this.__jn,this);

if(this.__jm==null){this.__jm=window.onerror;
}var self=this;
window.onerror=function(e){self.__jm(e);
g(e);
};
}
if(d&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jn,this);
}if(this.__jk==null){if(this.__jm!=null){window.onerror=this.__jm;
this.__jm=null;
}else{window.onerror=null;
}}}},__jn:function(j,k,l){if(this.__jk){this.handleError(new qx.core.WindowError(j,k,l));
return true;
}},observeMethod:function(m){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__jk){return m.apply(this,arguments);
}
try{return m.apply(this,arguments);
}catch(n){self.handleError(new qx.core.GlobalError(n,arguments));
}};
}else{return m;
}},handleError:function(h){if(this.__jk){this.__jk.call(this.__jl,h);
}}},defer:function(i){qx.core.Setting.define(c,b);
i.setErrorHandler(null,null);
}});
})();
(function(){var m="ready",l="qx.client",k="mshtml",j="load",i="unload",h="qx.event.handler.Application",g="complete",f="gecko|opera|webkit",d="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(x){qx.core.Object.call(this);
this._window=x.getWindow();
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gV();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(u,v,w){},unregisterEvent:function(r,s,t){},__gT:null,__gR:null,__gS:null,__gU:null,__gV:function(){if(!this.__gT&&this.__gR&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(l,k)){if(qx.event.Registration.hasListener(this._window,m)){this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__gT=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__gT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==g||document.readyState==m){this.__gR=true;
this.__gV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(l,f)){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(l,k)){var self=this;
var y=function(){try{document.documentElement.doScroll(d);

if(document.body){self._onNativeLoadWrapped();
}}catch(a){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,j,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,i,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,i,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gR=true;
this.__gV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gU){this.__gU=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this._manager=h;
this._window=h.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(i,j,k){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var c=qx.event.handler.Window.SUPPORTED_TYPES;

for(var b in c){qx.bom.Event.addNativeListener(this._window,b,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(l){qx.event.Registration.addHandler(l);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(d){this._manager=d;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(m,event,n){return !event.getBubbles();
},dispatchEvent:function(e,event,f){if(qx.core.Variant.isSet(b,c)){if(e instanceof qx.core.Object){var j=qx.Class.getEventType(e.constructor,f);
var g=qx.Class.getByName(j);

if(!g){this.error("The event type '"+f+"' declared in the class '"+e.constructor+" is not an available class': "+j);
}else if(!(event instanceof g)){this.error("Expected event type to be instanceof '"+j+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(o){qx.event.Registration.addDispatcher(o);
}});
})();
(function(){var i="ready",h="qx.application",g="beforeunload",f="qx.core.Init",d="shutdown";
qx.Class.define(f,{statics:{getApplication:function(){return this.__jh||null;
},ready:function(){if(this.__jh){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(h);
var c=qx.Class.getByName(b);

if(c){this.__jh=new c;
var a=new Date;
this.__jh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__jh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__ji:function(e){var k=this.__jh;

if(k){e.setReturnValue(k.close());
}},__jj:function(){var j=this.__jh;

if(j){j.terminate();
}}},defer:function(l){qx.event.Registration.addListener(window,i,l.ready,l);
qx.event.Registration.addListener(window,d,l.__jj,l);
qx.event.Registration.addListener(window,g,l.__ji,l);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(k,l){var m=qx.locale.Manager;

if(m){return m.tr.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(b,c,d,e){var f=qx.locale.Manager;

if(f){return f.trn.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(g,h,i){var j=qx.locale.Manager;

if(j){return j.trc.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__lM:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__lM;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__lM=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__lM=null;
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
qx.Class.define(d,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(p,q){if(qx.core.Variant.isSet(j,i)){if(p!==undefined){qx.core.Assert.assertBoolean(p,e);
}
if(q!==undefined){qx.core.Assert.assertBoolean(q,g);
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
},clone:function(n){if(n){var o=n;
}else{var o=qx.event.Pool.getInstance().getObject(this.constructor);
}o._type=this._type;
o._target=this._target;
o._currentTarget=this._currentTarget;
o._relatedTarget=this._relatedTarget;
o._originalTarget=this._originalTarget;
o._stopPropagation=this._stopPropagation;
o._bubbles=this._bubbles;
o._preventDefault=this._preventDefault;
o._cancelable=this._cancelable;
return o;
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
},setType:function(s){this._type=s;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(b){this._currentTarget=b;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(r){this._relatedTarget=r;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(l){this._originalTarget=l;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(m){this._bubbles=m;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(c){this._cancelable=c;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__iB:null,__iC:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__iB=d;
this.__iC=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__iB=this.__iB;
c.__iC=this.__iC;
return c;
},getData:function(){return this.__iB;
},getOldData:function(){return this.__iC;
}},destruct:function(){this.__iB=this.__iC=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__cm=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cm:null,message:null,getComment:function(){return this.__cm;
},toString:function(){return this.__cm+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__km=qx.dev.StackTrace.getStackTrace();
},members:{__km:null,getStackTrace:function(){return this.__km;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(h){},setItem:function(i,j){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cp=c;
this.__cq=d||b;
this.__cr=e===undefined?-1:e;
},members:{__cp:null,__cq:null,__cr:null,toString:function(){return this.__cp;
},getUri:function(){return this.__cq;
},getLineNumber:function(){return this.__cr;
}}});
})();
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__jC=b+(e&&e.message?e.message:e);
Error.call(this,this.__jC);
this.__jD=f;
this.__jE=e;
},members:{__jE:null,__jD:null,__jC:null,toString:function(){return this.__jC;
},getArguments:function(){return this.__jD;
},getSourceException:function(){return this.__jE;
}},destruct:function(){this.__jE=null;
this.__jD=null;
this.__jC=null;
}});
})();
(function(){var m="",l="g",k="0",j='\\$1',h="%",g='-',f="qx.lang.String",e=' ',d='\n',c="undefined";
qx.Class.define(f,{statics:{camelCase:function(A){return A.replace(/\-([a-z])/g,function(t,u){return u.toUpperCase();
});
},hyphenate:function(H){return H.replace(/[A-Z]/g,function(v){return (g+v.charAt(0).toLowerCase());
});
},capitalize:function(I){return I.replace(/\b[a-z]/g,function(z){return z.toUpperCase();
});
},clean:function(n){return this.trim(n.replace(/\s+/g,e));
},trimLeft:function(a){return a.replace(/^\s+/,m);
},trimRight:function(y){return y.replace(/\s+$/,m);
},trim:function(b){return b.replace(/^\s+|\s+$/g,m);
},startsWith:function(o,p){return o.indexOf(p)===0;
},endsWith:function(B,C){return B.substring(B.length-C.length,B.length)===C;
},repeat:function(O,P){return O.length>0?new Array(P+1).join(O):m;
},pad:function(q,length,r){var s=length-q.length;

if(s>0){if(typeof r===c){r=k;
}return this.repeat(r,s)+q;
}else{return q;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(w,x){return w.indexOf(x)!=-1;
},format:function(E,F){var G=E;

for(var i=0;i<F.length;i++){G=G.replace(new RegExp(h+(i+1),l),F[i]);
}return G;
},escapeRegexpChars:function(Q){return Q.replace(/([.*+?^${}()|[\]\/\\])/g,j);
},toArray:function(D){return D.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,m);
},stripScripts:function(J,K){var M=m;
var L=J.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){M+=arguments[1]+d;
return m;
});

if(K===true){qx.lang.Function.globalEval(M);
}return L;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sb:null,__sc:null,__sd:null,__se:null,stringify:function(bh,bi,bj){this.__sb=p;
this.__sc=p;
this.__se=[];

if(qx.lang.Type.isNumber(bj)){var bj=Math.min(10,Math.floor(bj));

for(var i=0;i<bj;i+=1){this.__sc+=O;
}}else if(qx.lang.Type.isString(bj)){if(bj.length>10){bj=bj.slice(0,10);
}this.__sc=bj;
}if(bi&&(qx.lang.Type.isFunction(bi)||qx.lang.Type.isArray(bi))){this.__sd=bi;
}else{this.__sd=null;
}return this.__sf(p,{'':bh});
},__sf:function(bb,bc){var bf=this.__sb,bd,bg=bc[bb];
if(bg&&qx.lang.Type.isFunction(bg.toJSON)){bg=bg.toJSON(bb);
}else if(qx.lang.Type.isDate(bg)){bg=this.dateToJSON(bg);
}if(typeof this.__sd===e){bg=this.__sd.call(bc,bb,bg);
}
if(bg===null){return h;
}
if(bg===undefined){return undefined;
}switch(qx.lang.Type.getClass(bg)){case R:return this.__sg(bg);
case B:return isFinite(bg)?String(bg):h;
case Q:return String(bg);
case J:this.__sb+=this.__sc;
bd=[];

if(this.__se.indexOf(bg)!==-1){throw new TypeError(V);
}this.__se.push(bg);
var length=bg.length;

for(var i=0;i<length;i+=1){bd[i]=this.__sf(i,bg)||h;
}this.__se.pop();
if(bd.length===0){var be=s;
}else if(this.__sb){be=E+this.__sb+bd.join(Y+this.__sb)+b+bf+l;
}else{be=N+bd.join(d)+l;
}this.__sb=bf;
return be;
case z:this.__sb+=this.__sc;
bd=[];

if(this.__se.indexOf(bg)!==-1){throw new TypeError(V);
}this.__se.push(bg);
if(this.__sd&&typeof this.__sd===f){var length=this.__sd.length;

for(var i=0;i<length;i+=1){var k=this.__sd[i];

if(typeof k===W){var v=this.__sf(k,bg);

if(v){bd.push(this.__sg(k)+(this.__sb?g:m)+v);
}}}}else{for(var k in bg){if(Object.hasOwnProperty.call(bg,k)){var v=this.__sf(k,bg);

if(v){bd.push(this.__sg(k)+(this.__sb?g:m)+v);
}}}}this.__se.pop();
if(bd.length===0){var be=A;
}else if(this.__sb){be=w+this.__sb+bd.join(Y+this.__sb)+b+bf+S;
}else{be=C+bd.join(d)+S;
}this.__sb=bf;
return be;
}},dateToJSON:function(bo){var bp=function(n){return n<10?U+n:n;
};
var bq=function(n){var bx=bp(n);
return n<100?U+bx:bx;
};
return isFinite(bo.valueOf())?bo.getUTCFullYear()+T+bp(bo.getUTCMonth()+1)+T+bp(bo.getUTCDate())+M+bp(bo.getUTCHours())+m+bp(bo.getUTCMinutes())+m+bp(bo.getUTCSeconds())+F+bq(bo.getUTCMilliseconds())+q:null;
},__sg:function(bu){var bv={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bw=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bw.lastIndex=0;

if(bw.test(bu)){return o+
bu.replace(bw,function(a){var c=bv[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bu+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__sh({'':j},p,bs):j;
}throw new SyntaxError(P);
},__sh:function(bk,bl,bm){var bn=bk[bl];

if(bn&&typeof bn===f){for(var k in bn){if(Object.hasOwnProperty.call(bn,k)){var v=this.__sh(bn,k,bm);

if(v!==undefined){bn[k]=v;
}else{delete bn[k];
}}}}return bm.call(bk,bl,bn);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var bY="get",bX="",bW="[",bV=".",bU="last",bT="change",bS="]",bR="Number",bQ="String",bP="set",ct="deepBinding",cs="item",cr="reset",cq="' (",cp="on",co="qx.debug",cn="Boolean",cm=") to the object '",cl="Integer",ck="qx.event.type.Data",cg="qx.data.SingleValueBinding",ch="No event could be found for the property",ce="Can not remove the bindings for null object!",cf="Binding from '",cc="PositiveNumber",cd="PositiveInteger",ca="Binding does not exist!",cb=" is not an data (qx.event.type.Data) event on ",ci=").",cj="Date";
qx.Class.define(cg,{statics:{DEBUG_ON:false,__fo:{},bind:function(M,N,O,P,Q){var bb=this.__fq(M,N,O,P,Q);
var V=N.split(bV);
var S=this.__fx(V);
var ba=[];
var W=[];
var X=[];
var T=[];
var U=M;
for(var i=0;i<V.length;i++){if(S[i]!==bX){T.push(bT);
}else{T.push(this.__fs(U,V[i]));
}ba[i]=U;
if(i==V.length-1){if(S[i]!==bX){var be=S[i]===bU?U.length-1:S[i];
var R=U.getItem(be);
this.__fw(R,O,P,Q,M);
X[i]=this.__fy(U,T[i],O,P,Q,S[i]);
}else{if(V[i]!=null&&U[bY+qx.lang.String.firstUp(V[i])]!=null){var R=U[bY+qx.lang.String.firstUp(V[i])]();
this.__fw(R,O,P,Q,M);
}X[i]=this.__fy(U,T[i],O,P,Q);
}}else{var bc={index:i,propertyNames:V,sources:ba,listenerIds:X,arrayIndexValues:S,targetObject:O,targetPropertyChain:P,options:Q,listeners:W};
var Y=qx.lang.Function.bind(this.__fp,this,bc);
W.push(Y);
X[i]=U.addListener(T[i],Y);
}if(U[bY+qx.lang.String.firstUp(V[i])]==null){U=null;
}else if(S[i]!==bX){U=U[bY+qx.lang.String.firstUp(V[i])](S[i]);
}else{U=U[bY+qx.lang.String.firstUp(V[i])]();
}
if(!U){break;
}}var bd={type:ct,listenerIds:X,sources:ba,targetListenerIds:bb.listenerIds,targets:bb.targets};
this.__fz(bd,M,N,O,P);
return bd;
},__fp:function(cP){if(cP.options&&cP.options.onUpdate){cP.options.onUpdate(cP.sources[cP.index],cP.targetObject);
}for(var j=cP.index+1;j<cP.propertyNames.length;j++){var cT=cP.sources[j];
cP.sources[j]=null;

if(!cT){continue;
}cT.removeListenerById(cP.listenerIds[j]);
}var cT=cP.sources[cP.index];
for(var j=cP.index+1;j<cP.propertyNames.length;j++){if(cP.arrayIndexValues[j-1]!==bX){cT=cT[bY+qx.lang.String.firstUp(cP.propertyNames[j-1])](cP.arrayIndexValues[j-1]);
}else{cT=cT[bY+qx.lang.String.firstUp(cP.propertyNames[j-1])]();
}cP.sources[j]=cT;
if(!cT){this.__ft(cP.targetObject,cP.targetPropertyChain);
break;
}if(j==cP.propertyNames.length-1){if(qx.Class.implementsInterface(cT,qx.data.IListData)){var cU=cP.arrayIndexValues[j]===bU?cT.length-1:cP.arrayIndexValues[j];
var cR=cT.getItem(cU);
this.__fw(cR,cP.targetObject,cP.targetPropertyChain,cP.options,cP.sources[cP.index]);
cP.listenerIds[j]=this.__fy(cT,bT,cP.targetObject,cP.targetPropertyChain,cP.options,cP.arrayIndexValues[j]);
}else{if(cP.propertyNames[j]!=null&&cT[bY+qx.lang.String.firstUp(cP.propertyNames[j])]!=null){var cR=cT[bY+qx.lang.String.firstUp(cP.propertyNames[j])]();
this.__fw(cR,cP.targetObject,cP.targetPropertyChain,cP.options,cP.sources[cP.index]);
}var cS=this.__fs(cT,cP.propertyNames[j]);
cP.listenerIds[j]=this.__fy(cT,cS,cP.targetObject,cP.targetPropertyChain,cP.options);
}}else{if(cP.listeners[j]==null){var cQ=qx.lang.Function.bind(this.__fp,this,cP);
cP.listeners.push(cQ);
}if(qx.Class.implementsInterface(cT,qx.data.IListData)){var cS=bT;
}else{var cS=this.__fs(cT,cP.propertyNames[j]);
}cP.listenerIds[j]=cT.addListener(cS,cP.listeners[j]);
}}},__fq:function(bn,bo,bp,bq,br){var bv=bq.split(bV);
var bt=this.__fx(bv);
var bA=[];
var bz=[];
var bx=[];
var bw=[];
var bu=bp;
for(var i=0;i<bv.length-1;i++){if(bt[i]!==bX){bw.push(bT);
}else{try{bw.push(this.__fs(bu,bv[i]));
}catch(e){break;
}}bA[i]=bu;
var by=function(){for(var j=i+1;j<bv.length-1;j++){var cK=bA[j];
bA[j]=null;

if(!cK){continue;
}cK.removeListenerById(bx[j]);
}var cK=bA[i];
for(var j=i+1;j<bv.length-1;j++){var cI=qx.lang.String.firstUp(bv[j-1]);
if(bt[j-1]!==bX){var cL=bt[j-1]===bU?cK.getLength()-1:bt[j-1];
cK=cK[bY+cI](cL);
}else{cK=cK[bY+cI]();
}bA[j]=cK;
if(bz[j]==null){bz.push(by);
}if(qx.Class.implementsInterface(cK,qx.data.IListData)){var cJ=bT;
}else{try{var cJ=qx.data.SingleValueBinding.__fs(cK,bv[j]);
}catch(e){break;
}}bx[j]=cK.addListener(cJ,bz[j]);
}qx.data.SingleValueBinding.__fr(bn,bo,bp,bq,br);
};
bz.push(by);
bx[i]=bu.addListener(bw[i],by);
var bs=qx.lang.String.firstUp(bv[i]);
if(bu[bY+bs]==null){bu=null;
}else if(bt[i]!==bX){bu=bu[bY+bs](bt[i]);
}else{bu=bu[bY+bs]();
}
if(!bu){break;
}}return {listenerIds:bx,targets:bA};
},__fr:function(cu,cv,cw,cx,cy){var cC=this.__fv(cu,cv);

if(cC!=null){var cE=cv.substring(cv.lastIndexOf(bV)+1,cv.length);
if(cE.charAt(cE.length-1)==bS){var cz=cE.substring(cE.lastIndexOf(bW)+1,cE.length-1);
var cB=cE.substring(0,cE.lastIndexOf(bW));
var cD=cC[bY+qx.lang.String.firstUp(cB)]();

if(cz==bU){cz=cD.length-1;
}
if(cD!=null){var cA=cD.getItem(cz);
}}else{var cA=cC[bY+qx.lang.String.firstUp(cE)]();
}}cA=qx.data.SingleValueBinding.__fA(cA,cw,cx,cy);
this.__fu(cw,cx,cA);
},__fs:function(w,x){var y=this.__fB(w,x);
if(y==null){if(qx.Class.supportsEvent(w.constructor,x)){y=x;
}else if(qx.Class.supportsEvent(w.constructor,bT+qx.lang.String.firstUp(x))){y=bT+qx.lang.String.firstUp(x);
}else{throw new qx.core.AssertionError(ch,x);
}}return y;
},__ft:function(z,A){var B=this.__fv(z,A);

if(B!=null){var C=A.substring(A.lastIndexOf(bV)+1,A.length);
if(C.charAt(C.length-1)==bS){this.__fu(z,A,null);
return;
}if(B[cr+qx.lang.String.firstUp(C)]!=undefined){B[cr+qx.lang.String.firstUp(C)]();
}else{B[bP+qx.lang.String.firstUp(C)](null);
}}},__fu:function(h,k,l){var p=this.__fv(h,k);

if(p!=null){var q=k.substring(k.lastIndexOf(bV)+1,k.length);
if(q.charAt(q.length-1)==bS){var m=q.substring(q.lastIndexOf(bW)+1,q.length-1);
var o=q.substring(0,q.lastIndexOf(bW));
var n=p[bY+qx.lang.String.firstUp(o)]();

if(m==bU){m=n.length-1;
}
if(n!=null){n.setItem(m,l);
}}else{p[bP+qx.lang.String.firstUp(q)](l);
}}},__fv:function(bG,bH){var bK=bH.split(bV);
var bL=bG;
for(var i=0;i<bK.length-1;i++){try{var bJ=bK[i];
if(bJ.indexOf(bS)==bJ.length-1){var bI=bJ.substring(bJ.indexOf(bW)+1,bJ.length-1);
bJ=bJ.substring(0,bJ.indexOf(bW));
}bL=bL[bY+qx.lang.String.firstUp(bJ)]();

if(bI!=null){if(bI==bU){bI=bL.length-1;
}bL=bL.getItem(bI);
bI=null;
}}catch(v){return null;
}}return bL;
},__fw:function(bi,bj,bk,bl,bm){bi=this.__fA(bi,bj,bk,bl);
if(bi==null){this.__ft(bj,bk);
}if(bi!=undefined){try{this.__fu(bj,bk,bi);
if(bl&&bl.onUpdate){bl.onUpdate(bm,bj,bi);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bl&&bl.onSetFail){bl.onSetFail(e);
}else{this.warn("Failed so set value "+bi+" on "+bj+". Error message: "+e);
}}}},__fx:function(bB){var bC=[];
for(var i=0;i<bB.length;i++){var name=bB[i];
if(qx.lang.String.endsWith(name,bS)){var bD=name.substring(name.indexOf(bW)+1,name.indexOf(bS));
if(name.indexOf(bS)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bD!==bU){if(bD==bX||isNaN(parseInt(bD))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bW)!=0){bB[i]=name.substring(0,name.indexOf(bW));
bC[i]=bX;
bC[i+1]=bD;
bB.splice(i+1,0,cs);
i++;
}else{bC[i]=bD;
bB.splice(i,1,cs);
}}else{bC[i]=bX;
}}return bC;
},__fy:function(db,dc,dd,de,df,dg){if(qx.core.Variant.isSet(co,cp)){var dh=qx.Class.getEventType(db.constructor,dc);
qx.core.Assert.assertEquals(ck,dh,dc+cb+db+bV);
}var dj=function(r,e){if(r!==bX){if(r===bU){r=db.length-1;
}var u=db.getItem(r);
if(u==undefined){qx.data.SingleValueBinding.__ft(dd,de);
}var s=e.getData().start;
var t=e.getData().end;

if(r<s||r>t){return;
}}else{var u=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+db+" by "+dc+" to "+dd+" ("+de+")");
qx.log.Logger.debug("Data before conversion: "+u);
}u=qx.data.SingleValueBinding.__fA(u,dd,de,df);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+u);
}try{if(u!=undefined){qx.data.SingleValueBinding.__fu(dd,de,u);
}else{qx.data.SingleValueBinding.__ft(dd,de);
}if(df&&df.onUpdate){df.onUpdate(db,dd,u);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(df&&df.onSetFail){df.onSetFail(e);
}else{this.warn("Failed so set value "+u+" on "+dd+". Error message: "+e);
}}};
if(!dg){dg=bX;
}dj=qx.lang.Function.bind(dj,db,dg);
var di=db.addListener(dc,dj);
return di;
},__fz:function(cV,cW,cX,cY,da){if(this.__fo[cW.toHashCode()]===undefined){this.__fo[cW.toHashCode()]=[];
}this.__fo[cW.toHashCode()].push([cV,cW,cX,cY,da]);
},__fA:function(D,E,F,G){if(G&&G.converter){var I;

if(E.getModel){I=E.getModel();
}return G.converter(D,I);
}else{var K=this.__fv(E,F);
var L=F.substring(F.lastIndexOf(bV)+1,F.length);
if(K==null){return D;
}var J=qx.Class.getPropertyDefinition(K.constructor,L);
var H=J==null?bX:J.check;
return this.__fC(D,H);
}},__fB:function(bf,bg){var bh=qx.Class.getPropertyDefinition(bf.constructor,bg);

if(bh==null){return null;
}return bh.event;
},__fC:function(cF,cG){var cH=qx.lang.Type.getClass(cF);
if((cH==bR||cH==bQ)&&(cG==cl||cG==cd)){cF=parseInt(cF);
}if((cH==cn||cH==bR||cH==cj)&&cG==bQ){cF=cF+bX;
}if((cH==bR||cH==bQ)&&(cG==bR||cG==cc)){cF=parseFloat(cF);
}return cF;
},removeBindingFromObject:function(bM,bN){if(bN.type==ct){for(var i=0;i<bN.sources.length;i++){if(bN.sources[i]){bN.sources[i].removeListenerById(bN.listenerIds[i]);
}}for(var i=0;i<bN.targets.length;i++){if(bN.targets[i]){bN.targets[i].removeListenerById(bN.targetListenerIds[i]);
}}}else{bM.removeListenerById(bN);
}var bO=this.__fo[bM.toHashCode()];
if(bO!=undefined){for(var i=0;i<bO.length;i++){if(bO[i][0]==bN){qx.lang.Array.remove(bO,bO[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cM){if(qx.core.Variant.isSet(co,cp)){qx.core.Assert.assertNotNull(cM,ce);
}var cN=this.__fo[cM.toHashCode()];

if(cN!=undefined){for(var i=cN.length-1;i>=0;i--){this.removeBindingFromObject(cM,cN[i][0]);
}}},getAllBindingsForObject:function(cO){if(this.__fo[cO.toHashCode()]===undefined){this.__fo[cO.toHashCode()]=[];
}return this.__fo[cO.toHashCode()];
},removeAllBindings:function(){for(var b in this.__fo){var a=qx.core.ObjectRegistry.fromHashCode(b);
if(a==null){delete this.__fo[b];
continue;
}this.removeAllBindingsForObject(a);
}this.__fo={};
},getAllBindings:function(){return this.__fo;
},showBindingInLog:function(c,d){var g;
for(var i=0;i<this.__fo[c.toHashCode()].length;i++){if(this.__fo[c.toHashCode()][i][0]==d){g=this.__fo[c.toHashCode()][i];
break;
}}
if(g===undefined){var f=ca;
}else{var f=cf+g[1]+cq+g[2]+cm+g[3]+cq+g[4]+ci;
}qx.log.Logger.debug(f);
},showAllBindingsInLog:function(){for(var bF in this.__fo){var bE=qx.core.ObjectRegistry.fromHashCode(bF);

for(var i=0;i<this.__fo[bF].length;i++){this.showBindingInLog(bE,this.__fo[bF][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.__eU={};

if(j!=null){this.setSize(j);
}},properties:{size:{check:a,init:Infinity}},members:{__eU:null,getObject:function(c){if(this.$$disposed){return new c;
}
if(!c){throw new Error("Class needs to be defined!");
}var d=null;
var e=this.__eU[c.classname];

if(e){d=e.pop();
}
if(d){d.$$pooled=false;
}else{d=new c;
}return d;
},poolObject:function(f){if(!this.__eU){return;
}var g=f.classname;
var h=this.__eU[g];

if(f.$$pooled){throw new Error("Object is already pooled: "+f);
}
if(!h){this.__eU[g]=h=[];
}if(h.length>this.getSize()){if(f.destroy){f.destroy();
}else{f.dispose();
}return;
}f.$$pooled=true;
h.push(f);
}},destruct:function(){var n=this.__eU;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__eU;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(g,h){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=h.length;i<l;i++){var name=h[i];

if(g[name]==null||!g.hasOwnProperty(name)){continue;
}g[name]=null;
}},disposeObjects:function(s,t,u){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){if(!u&&s[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{s[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var i=o.length-1;i>=0;i--){n=o[i];

if(n){n.dispose();
}}}catch(j){throw new Error("The array field: "+m+" of object: "+k+" has non disposable entries: "+j);
}o.length=0;
k[m]=null;
},disposeMap:function(c,d){var e=c[d];

if(!e){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{for(var f in e){if(e.hasOwnProperty(f)){e[f].dispose();
}}}catch(b){throw new Error("The map field: "+d+" of object: "+c+" has non disposable entries: "+b);
}c[d]=null;
},disposeTriggeredBy:function(p,q){var r=q.dispose;
q.dispose=function(){r.call(q);
p.dispose();
};
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(b,c,d){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__fP:function(){this.QUIRKS_MODE=this.__fQ();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fQ:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fP();
}});
})();
(function(){var o="qx.debug",n="on",m="Invalid argument 'map'",k="Invalid argument 'minLength'",j="Invalid argument 'source'",h="Invalid argument 'target'",g="function",f="Invalid argument 'array'",e="qx.lang.Object",d="undefined",c="object";
qx.Class.define(e,{statics:{empty:function(p){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(p,m);
}
for(var q in p){if(p.hasOwnProperty(q)){delete p[q];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(D){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(D,m);
}return D.__count__===0;
}:
function(K){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(K,m);
}
for(var L in K){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(r,s){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(r,m);
qx.core.Assert&&qx.core.Assert.assertInteger(s,k);
}return r.__count__>=s;
}:
function(R,S){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(R,m);
qx.core.Assert&&qx.core.Assert.assertInteger(S,k);
}
if(S<=0){return true;
}var length=0;

for(var T in R){if((++length)>=S){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(y){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(y,m);
}var A=[];
var z=this.getKeys(y);

for(var i=0,l=z.length;i<l;i++){A.push(y[z[i]]);
}return A;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(P,Q){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(P,h);
qx.core.Assert&&qx.core.Assert.assertMap(Q,j);
}return qx.lang.Object.mergeWith(P,Q,false);
},merge:function(E,F){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(E,h);
}var G=arguments.length;

for(var i=1;i<G;i++){qx.lang.Object.mergeWith(E,arguments[i]);
}return E;
},clone:function(M){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(M,j);
}var N={};

for(var O in M){N[O]=M[O];
}return N;
},invert:function(H){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(H,m);
}var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(t,u){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(t,m);
}
for(var v in t){if(t.hasOwnProperty(v)&&t[v]===u){return v;
}}return null;
},contains:function(a,b){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(a,m);
}return this.getKeyFromValue(a,b)!==null;
},select:function(w,x){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(x,m);
}return x[w];
},fromArray:function(B){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertArray(B,f);
}var C={};

for(var i=0,l=B.length;i<l;i++){if(qx.core.Variant.isSet(o,n)){switch(typeof B[i]){case c:case g:case d:throw new Error("Could not convert complex objects like "+B[i]+" at array index "+i+" to map syntax");
}}C[B[i].toString()]=true;
}return C;
}}});
})();
(function(){var m="emulated",k="native",j='"',h="qx.lang.Core",g="\\\\",f="\\\"",e="[object Error]";
qx.Class.define(h,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==e)?m:k,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?k:m,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?k:m,{"native":Array.prototype.lastIndexOf,"emulated":function(n,o){if(o==null){o=this.length-1;
}else if(o<0){o=Math.max(0,this.length+o);
}
for(var i=o;i>=0;i--){if(this[i]===n){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?k:m,{"native":Array.prototype.forEach,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){z.call(A||window,B,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?k:m,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?k:m,{"native":Array.prototype.map,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){c[i]=a.call(b||window,d,i,this);
}}return c;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?k:m,{"native":Array.prototype.some,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){if(s.call(t||window,u,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?k:m,{"native":Array.prototype.every,"emulated":function(p,q){var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(!p.call(q||window,r,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?k:m,{"native":String.prototype.quote,"emulated":function(){return j+this.replace(/\\/g,g).replace(/\"/g,f)+j;
}})}});
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
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__en:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__eo:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ep:function(){var K=qx.lang.Generics.__en;

for(var O in K){var M=window[O];
var L=K[O];

for(var i=0,l=L.length;i<l;i++){var N=L[i];

if(!M[N]){M[N]=qx.lang.Generics.__eo(M,N);
}}}}},defer:function(J){J.__ep();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h,i,j,k){qx.event.type.Event.prototype.init.call(this,j,k);
this._target=h||qx.bom.Event.getTarget(g);
this._relatedTarget=i||qx.bom.Event.getRelatedTarget(g);

if(g.timeStamp){this._timeStamp=g.timeStamp;
}this._native=g;
this._returnValue=null;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(e,f){f.preventDefault=qx.lang.Function.empty;
return f;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__js:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__js();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kc:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__kd:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kc){J.push(I);
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
}else{this.NAME=this.__kc[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__kd();
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
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
},_setDynamic:function(c){this._dynamic=c;
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
(function(){var bb=",",ba="rgb(",Y=")",X="qx.theme.manager.Color",W="qx.util.ColorUtil";
qx.Class.define(W,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(c){return this.NAMED[c]!==undefined;
},isSystemColor:function(d){return this.SYSTEM[d]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(X);
},isThemedColor:function(L){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(L);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__fK();
}else if(this.isHex3String(a)){return this.__fM();
}else if(this.isHex6String(a)){return this.__fN();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(s){if(this.isNamedColor(s)){return this.NAMED[s];
}else if(this.isSystemColor(s)){throw new Error("Could not convert system colors to RGB: "+s);
}else if(this.isRgbString(s)){return this.__fK();
}else if(this.isRgbaString(s)){return this.__fL();
}else if(this.isHex3String(s)){return this.__fM();
}else if(this.isHex6String(s)){return this.__fN();
}throw new Error("Could not parse color: "+s);
},stringToRgbString:function(V){return this.rgbToRgbString(this.stringToRgb(V));
},rgbToRgbString:function(bc){return ba+bc[0]+bb+bc[1]+bb+bc[2]+Y;
},rgbToHexString:function(v){return (qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(u){return this.isThemedColor(u)||this.isNamedColor(u)||this.isHex3String(u)||this.isHex6String(u)||this.isRgbString(u);
},isCssString:function(bd){return this.isSystemColor(bd)||this.isNamedColor(bd)||this.isHex3String(bd)||this.isHex6String(bd)||this.isRgbString(bd);
},isHex3String:function(bi){return this.REGEXP.hex3.test(bi);
},isHex6String:function(l){return this.REGEXP.hex6.test(l);
},isRgbString:function(be){return this.REGEXP.rgb.test(be);
},isRgbaString:function(x){return this.REGEXP.rgba.test(x);
},__fK:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fL:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__fM:function(){var o=parseInt(RegExp.$1,16)*17;
var n=parseInt(RegExp.$2,16)*17;
var m=parseInt(RegExp.$3,16)*17;
return [o,n,m];
},__fN:function(){var k=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var j=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var h=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [k,j,h];
},hex3StringToRgb:function(y){if(this.isHex3String(y)){return this.__fM(y);
}throw new Error("Invalid hex3 value: "+y);
},hex6StringToRgb:function(w){if(this.isHex6String(w)){return this.__fN(w);
}throw new Error("Invalid hex6 value: "+w);
},hexStringToRgb:function(e){if(this.isHex3String(e)){return this.__fM(e);
}
if(this.isHex6String(e)){return this.__fN(e);
}throw new Error("Invalid hex value: "+e);
},rgbToHsb:function(z){var B,C,E;
var K=z[0];
var H=z[1];
var A=z[2];
var J=(K>H)?K:H;

if(A>J){J=A;
}var D=(K<H)?K:H;

if(A<D){D=A;
}E=J/255.0;

if(J!=0){C=(J-D)/J;
}else{C=0;
}
if(C==0){B=0;
}else{var G=(J-K)/(J-D);
var I=(J-H)/(J-D);
var F=(J-A)/(J-D);

if(K==J){B=F-I;
}else if(H==J){B=2.0+G-F;
}else{B=4.0+I-G;
}B=B/6.0;

if(B<0){B=B+1.0;
}}return [Math.round(B*360),Math.round(C*100),Math.round(E*100)];
},hsbToRgb:function(P){var i,f,p,q,t;
var Q=P[0]/360;
var R=P[1]/100;
var S=P[2]/100;

if(Q>=1.0){Q%=1.0;
}
if(R>1.0){R=1.0;
}
if(S>1.0){S=1.0;
}var T=Math.floor(255*S);
var U={};

if(R==0.0){U.red=U.green=U.blue=T;
}else{Q*=6.0;
i=Math.floor(Q);
f=Q-i;
p=Math.floor(T*(1.0-R));
q=Math.floor(T*(1.0-(R*f)));
t=Math.floor(T*(1.0-(R*(1.0-f))));

switch(i){case 0:U.red=T;
U.green=t;
U.blue=p;
break;
case 1:U.red=q;
U.green=T;
U.blue=p;
break;
case 2:U.red=p;
U.green=T;
U.blue=t;
break;
case 3:U.red=p;
U.green=q;
U.blue=T;
break;
case 4:U.red=t;
U.green=p;
U.blue=T;
break;
case 5:U.red=T;
U.green=p;
U.blue=q;
break;
}}return [U.red,U.green,U.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var h="object",g="_applyTheme",f="__bR",e="qx.theme.manager.Decoration",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:g,event:c}},members:{__bR:null,resolve:function(q){if(!q){return null;
}
if(typeof q===h){return q;
}var t=this.getTheme();

if(!t){return null;
}var t=this.getTheme();

if(!t){return null;
}var u=this.__bR;

if(!u){u=this.__bR={};
}var r=u[q];

if(r){return r;
}var s=t.decorations[q];

if(!s){return null;
}var v=s.decorator;

if(v==null){throw new Error("Missing definition of which decorator to use in entry: "+q+"!");
}return u[q]=(new v).set(s.style);
},isValidPropertyValue:function(o){if(typeof o===b){return this.isDynamic(o);
}else if(typeof o===h){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(i){if(!i){return false;
}var j=this.getTheme();

if(!j){return false;
}return !!j.decorations[i];
},_applyTheme:function(k,l){var n=qx.util.AliasManager.getInstance();

if(l){for(var m in l.aliases){n.remove(m);
}}
if(k){for(var m in k.aliases){n.add(m,k.aliases[m]);
}}
if(!k){this.__bR={};
}}},destruct:function(){this._disposeMap(f);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fO={};
this.add(a,h);
},members:{__fO:null,_preprocess:function(p){var s=this._getDynamic();

if(s[p]===false){return p;
}else if(s[p]===undefined){if(p.charAt(0)===j||p.charAt(0)===b||p.indexOf(g)===0||p.indexOf(f)===i||p.indexOf(e)===0){s[p]=false;
return p;
}
if(this.__fO[p]){return this.__fO[p];
}var r=p.substring(0,p.indexOf(j));
var q=this.__fO[r];

if(q!==undefined){s[p]=q+p.substring(r.length);
}}return p;
},add:function(l,m){this.__fO[l]=m;
var o=this._getDynamic();
for(var n in o){if(n.substring(0,n.indexOf(j))===l){o[n]=m+n.substring(l.length);
}}},remove:function(k){delete this.__fO[k];
},resolve:function(t){var u=this._getDynamic();

if(t!==null){t=this._preprocess(t);
}return u[t]||t;
}},destruct:function(){this.__fO=null;
}});
})();
(function(){var h="qx.theme.manager.Font",g="Theme",f="changeTheme",e="_applyTheme",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:e,event:f}},members:{resolveDynamic:function(l){var m=this._dynamic;
return l instanceof qx.bom.Font?l:m[l];
},resolve:function(n){var q=this._dynamic;
var o=q[n];

if(o){return o;
}var p=this.getTheme();

if(p!==null&&p.fonts[n]){return q[n]=(new qx.bom.Font).set(p.fonts[n]);
}return n;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(a instanceof qx.bom.Font||c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&b.fonts[a]){c[a]=(new qx.bom.Font).set(b.fonts[a]);
return true;
}return false;
},__gW:function(i,j){if(i[j].include){var k=i[i[j].include];
i[j].include=null;
delete i[j].include;
i[j]=qx.lang.Object.mergeWith(i[j],k,false);
this.__gW(i,j);
}},_applyTheme:function(r){var s=this._getDynamic();

for(var v in s){if(s[v].themed){s[v].dispose();
delete s[v];
}}
if(r){var t=r.fonts;
var u=qx.bom.Font;

for(var v in t){if(t[v].include&&t[t[v].include]){this.__gW(t,v);
}s[v]=(new u).set(t[v]);
s[v].themed=true;
}}this._setDynamic(s);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(G,H){qx.core.Object.call(this);

if(G!==undefined){this.setSize(G);
}
if(H!==undefined){this.setFamily(H);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case c:T.setBold(true);
break;
case e:T.setItalic(true);
break;
case j:T.setDecoration(j);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,g)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(A){var B=new qx.bom.Font;
B.set(A);
return B;
},__ca:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__ca;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,_applySize:function(E,F){this.__cb=E===null?null:E+g;
},_applyLineHeight:function(C,D){this.__cg=C===null?null:C;
},_applyFamily:function(M,N){var O=k;

for(var i=0,l=M.length;i<l;i++){if(M[i].indexOf(o)>0){O+=f+M[i]+f;
}else{O+=M[i];
}
if(i!==l-1){O+=n;
}}this.__cc=O;
},_applyBold:function(K,L){this.__cd=K===null?null:K?c:d;
},_applyItalic:function(y,z){this.__ce=y===null?null:y?e:d;
},_applyDecoration:function(I,J){this.__cf=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__cc,fontSize:this.__cb,fontWeight:this.__cd,fontStyle:this.__ce,textDecoration:this.__cf,lineHeight:this.__cg};
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
this.__de={};
this.__df={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dg:{},__de:null,__df:null,_applyTheme:function(t,u){this.__df={};
this.__de={};
},__dh:function(i,j,k){var o=j.appearances;
var r=o[i];

if(!r){var s=b;
var l=[];
var q=i.split(s);
var p;

while(!r&&q.length>0){l.unshift(q.pop());
var m=q.join(s);
r=o[m];

if(r){p=r.alias||r;

if(typeof p===h){var n=p+s+l.join(s);
return this.__dh(n,j,k);
}}}if(k!=null){return this.__dh(k,j);
}return null;
}else if(typeof r===h){return this.__dh(r,j,k);
}else if(r.include&&!r.style){return this.__dh(r.include,j,k);
}return i;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__df;
var z=E[v];

if(!z){z=E[v]=this.__dh(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__de;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__dg;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__de=this.__df=null;
}});
})();
(function(){var w="object",v="qx.debug",u="Theme",t="widgets",s="undefined",r="fonts",q="string",p="colors",o="decorations",n="on",f="meta",m="appearances",j="borders",e="icons",d="other",h="qx.Theme",g="]",k="[Theme ";
qx.Bootstrap.define(h,{statics:{define:function(name,b){if(!b){var b={};
}b.include=this.__pq(b.include);
b.patch=this.__pq(b.patch);
if(qx.core.Variant.isSet(v,n)){this.__px(name,b);
}var c={$$type:u,name:name,title:b.title,toString:this.genericToString};
if(b.extend){c.supertheme=b.extend;
}c.basename=qx.Bootstrap.createNamespace(name,c);
this.__pt(c,b);
this.__pr(c,b);
this.$$registry[name]=c;
for(var i=0,a=b.include,l=a.length;i<l;i++){this.include(c,a[i]);
}
for(var i=0,a=b.patch,l=a.length;i<l;i++){this.patch(c,a[i]);
}},__pq:function(Y){if(!Y){return [];
}
if(qx.Bootstrap.isArray(Y)){return Y;
}else{return [Y];
}},__pr:function(ba,bb){var bc=bb.aliases||{};

if(bb.extend&&bb.extend.aliases){qx.Bootstrap.objectMergeWith(bc,bb.extend.aliases,false);
}ba.aliases=bc;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return k+this.name+g;
},__ps:function(J){for(var i=0,K=this.__pu,l=K.length;i<l;i++){if(J[K[i]]){return K[i];
}}},__pt:function(R,S){var V=this.__ps(S);
if(S.extend&&!V){V=S.extend.type;
}R.type=V||d;
if(!V){return;
}var X=function(){};
if(S.extend){X.prototype=new S.extend.$$clazz;
}var W=X.prototype;
var U=S[V];
for(var T in U){W[T]=U[T];
if(W[T].base){if(qx.core.Variant.isSet(v,n)){if(!S.extend){throw new Error("Found base flag in entry '"+T+"' of theme '"+S.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}W[T].base=S.extend;
}}R.$$clazz=X;
R[V]=new X;
},$$registry:{},__pu:[p,j,o,r,e,t,m,f],__pv:qx.core.Variant.select(v,{"on":{"title":q,"aliases":w,"type":q,"extend":w,"colors":w,"borders":w,"decorations":w,"fonts":w,"icons":w,"widgets":w,"appearances":w,"meta":w,"include":w,"patch":w},"default":null}),__pw:qx.core.Variant.select(v,{"on":{"color":w,"border":w,"decoration":w,"font":w,"icon":w,"appearance":w,"widget":w},"default":null}),__px:qx.core.Variant.select(v,{"on":function(name,D){var I=this.__pv;

for(var H in D){if(I[H]===undefined){throw new Error('The configuration key "'+H+'" in theme "'+name+'" is not allowed!');
}
if(D[H]==null){throw new Error('Invalid key "'+H+'" in theme "'+name+'"! The value is undefined/null!');
}
if(I[H]!==null&&typeof D[H]!==I[H]){throw new Error('Invalid type of key "'+H+'" in theme "'+name+'"! The type of the key must be "'+I[H]+'"!');
}}var G=[p,j,o,r,e,t,m,f];

for(var i=0,l=G.length;i<l;i++){var H=G[i];

if(D[H]!==undefined&&(D[H] instanceof Array||D[H] instanceof RegExp||D[H] instanceof Date||D[H].classname!==undefined)){throw new Error('Invalid key "'+H+'" in theme "'+name+'"! The value needs to be a map!');
}}var E=0;

for(var i=0,l=G.length;i<l;i++){var H=G[i];

if(D[H]){E++;
}
if(E>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!D.extend&&E===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(D.meta){var F;

for(var H in D.meta){F=D.meta[H];

if(this.__pw[H]===undefined){throw new Error('The key "'+H+'" is not allowed inside a meta theme block.');
}
if(typeof F!==this.__pw[H]){throw new Error('The type of the key "'+H+'" inside the meta block is wrong.');
}
if(!(typeof F===w&&F!==null&&F.$$type===u)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+H+'" in theme "'+name+'" is invalid: '+F);
}}}if(D.extend&&D.extend.$$type!==u){throw new Error('Invalid extend in theme "'+name+'": '+D.extend);
}if(D.include){for(var i=0,l=D.include.length;i<l;i++){if(typeof (D.include[i])==s||D.include[i].$$type!==u){throw new Error('Invalid include in theme "'+name+'": '+D.include[i]);
}}}if(D.patch){for(var i=0,l=D.patch.length;i<l;i++){if(typeof (D.patch[i])==s||D.patch[i].$$type!==u){throw new Error('Invalid patch in theme "'+name+'": '+D.patch[i]);
}}}},"default":function(){}}),patch:function(x,y){var A=this.__ps(y);

if(A!==this.__ps(x)){throw new Error("The mixins '"+x.name+"' are not compatible '"+y.name+"'!");
}var z=y[A];
var B=x.$$clazz.prototype;

for(var C in z){B[C]=z[C];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var p="focusout",o="interval",n="mouseover",m="mouseout",l="mousemove",k="widget",j="qx.ui.tooltip.ToolTip",i="Boolean",h="__pe",g="__pg",c="_applyCurrent",f="qx.ui.tooltip.Manager",d="__pd",b="tooltip-error",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,n,this.__pn,this,true);
this.__pd=new qx.event.Timer();
this.__pd.addListener(o,this.__pk,this);
this.__pe=new qx.event.Timer();
this.__pe.addListener(o,this.__pl,this);
this.__pf={left:0,top:0};
},properties:{current:{check:j,nullable:true,apply:c},showInvalidTooltips:{check:i,init:true}},members:{__pf:null,__pe:null,__pd:null,__pg:null,__ph:null,__pi:function(){if(!this.__pg){this.__pg=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__pg;
},__pj:function(){if(!this.__ph){this.__ph=new qx.ui.tooltip.ToolTip().set({appearance:b});
this.__ph.syncAppearance();
}return this.__ph;
},_applyCurrent:function(t,u){if(u&&qx.ui.core.Widget.contains(u,t)){return;
}if(u){if(!u.isDisposed()){u.exclude();
}this.__pd.stop();
this.__pe.stop();
}var w=qx.event.Registration;
var v=document.body;
if(t){this.__pd.startWith(t.getShowTimeout());
w.addListener(v,m,this.__po,this,true);
w.addListener(v,p,this.__pp,this,true);
w.addListener(v,l,this.__pm,this,true);
}else{w.removeListener(v,m,this.__po,this,true);
w.removeListener(v,p,this.__pp,this,true);
w.removeListener(v,l,this.__pm,this,true);
}},__pk:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){this.__pe.startWith(A.getHideTimeout());

if(A.getPlaceMethod()==k){A.placeToWidget(A.getOpener());
}else{A.placeToPoint(this.__pf);
}A.show();
}this.__pd.stop();
},__pl:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){G.exclude();
}this.__pe.stop();
this.resetCurrent();
},__pm:function(e){var x=this.__pf;
x.left=e.getDocumentLeft();
x.top=e.getDocumentTop();
},__pn:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E;
while(D!=null){var E=D.getToolTip();
var F=D.getToolTipText()||null;
var C=D.getToolTipIcon()||null;

if(qx.Class.hasInterface(D.constructor,qx.ui.form.IForm)&&!D.isValid()){var B=D.getInvalidMessage();
}
if(E||F||C||B){break;
}D=D.getLayoutParent();
}
if(!D){return;
}
if(D.isBlockToolTip()){return;
}if(B&&D.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var E=this.__pj().set({label:B});
}else if(!E){var E=this.__pi().set({label:F,icon:C});
}this.setCurrent(E);
E.setOpener(D);
},__po:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!q){return;
}var r=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!r){return;
}var s=this.getCurrent();
if(s&&(r==s||qx.ui.core.Widget.contains(s,r))){return;
}if(r&&q&&qx.ui.core.Widget.contains(q,r)){return;
}if(s&&!r){this.setCurrent(null);
}else{this.resetCurrent();
}},__pp:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&z==y.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,n,this.__pn,this,true);
this._disposeObjects(d,h,g);
this.__pf=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(p){qx.core.Object.call(this);
this.setEnabled(false);

if(p!=null){this.setInterval(p);
}var self=this;
this.__dP=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(i,j,k){var l=new qx.event.Timer(k);
l.__dQ=i;
l.addListener(h,function(e){l.stop();
i.call(j,e);
l.dispose();
j=null;
},j);
l.start();
return l;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dR:null,__dP:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(r,s){if(s){window.clearInterval(this.__dR);
this.__dR=null;
}else if(r){this.__dR=window.setInterval(this.__dP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(q){this.setInterval(q);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(m){this.stop();
this.startWith(m);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dR){window.clearInterval(this.__dR);
}this.__dR=this.__dP=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(k){return this._indexOf(k);
},add:function(e,f){this._add(e,f);
},addAt:function(h,i,j){this._addAt(h,i,j);
},addBefore:function(a,b,c){this._addBefore(a,b,c);
},addAfter:function(m,n,o){this._addAfter(m,n,o);
},remove:function(g){this._remove(g);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(p){p.getChildren=p._getChildren;
p.hasChildren=p._hasChildren;
p.indexOf=p._indexOf;
p.add=p._add;
p.addAt=p._addAt;
p.addBefore=p._addBefore;
p.addAfter=p._addAfter;
p.remove=p._remove;
p.removeAt=p._removeAt;
p.removeAll=p._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var C="Integer",B="_applyDimension",A="Boolean",z="_applyStretching",y="_applyMargin",x="shorthand",w="_applyAlign",v="qx.debug",u="on",t="allowShrinkY",Y="Wrong 'width' argument. ",X="Something went wrong with the layout of ",W="bottom",V="Wrong 'left' argument. ",U="baseline",T="marginBottom",S="qx.ui.core.LayoutItem",R="center",Q="marginTop",P="!",J="allowGrowX",K="middle",H="marginLeft",I="allowShrinkX",F="top",G="right",D="marginRight",E="abstract",L="Wrong 'top' argument. ",M="Wrong 'height' argument. ",O="allowGrowY",N="left";
qx.Class.define(S,{type:E,extend:qx.core.Object,properties:{minWidth:{check:C,nullable:true,apply:B,init:null,themeable:true},width:{check:C,nullable:true,apply:B,init:null,themeable:true},maxWidth:{check:C,nullable:true,apply:B,init:null,themeable:true},minHeight:{check:C,nullable:true,apply:B,init:null,themeable:true},height:{check:C,nullable:true,apply:B,init:null,themeable:true},maxHeight:{check:C,nullable:true,apply:B,init:null,themeable:true},allowGrowX:{check:A,apply:z,init:true,themeable:true},allowShrinkX:{check:A,apply:z,init:true,themeable:true},allowGrowY:{check:A,apply:z,init:true,themeable:true},allowShrinkY:{check:A,apply:z,init:true,themeable:true},allowStretchX:{group:[J,I],mode:x,themeable:true},allowStretchY:{group:[O,t],mode:x,themeable:true},marginTop:{check:C,init:0,apply:y,themeable:true},marginRight:{check:C,init:0,apply:y,themeable:true},marginBottom:{check:C,init:0,apply:y,themeable:true},marginLeft:{check:C,init:0,apply:y,themeable:true},margin:{group:[Q,D,T,H],mode:x,themeable:true},alignX:{check:[N,R,G],nullable:true,apply:w,themeable:true},alignY:{check:[F,K,W,U],nullable:true,apply:w,themeable:true}},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,getBounds:function(){return this.__eR||this.__eN||null;
},clearSeparators:function(){},renderSeparator:function(h,i){},renderLayout:function(bf,top,bg,bh){if(qx.core.Variant.isSet(v,u)){var bi=X+this.toString()+P;
this.assertInteger(bf,V+bi);
this.assertInteger(top,L+bi);
this.assertInteger(bg,Y+bi);
this.assertInteger(bh,M+bi);
}var bj=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bj=this._getHeightForWidth(bg);
}
if(bj!=null&&bj!==this.__eM){this.__eM=bj;
qx.ui.core.queue.Layout.add(this);
return null;
}var bl=this.__eN;

if(!bl){bl=this.__eN={};
}var bk={};

if(bf!==bl.left||top!==bl.top){bk.position=true;
bl.left=bf;
bl.top=top;
}
if(bg!==bl.width||bh!==bl.height){bk.size=true;
bl.width=bg;
bl.height=bh;
}if(this.__eO){bk.local=true;
delete this.__eO;
}
if(this.__eQ){bk.margin=true;
delete this.__eQ;
}return bk;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eO;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eO=true;
this.__eP=null;
},getSizeHint:function(f){var g=this.__eP;

if(g){return g;
}
if(f===false){return null;
}g=this.__eP=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__eM&&this.getHeight()==null){g.height=this.__eM;
}if(g.minWidth>g.width){g.width=g.minWidth;
}
if(g.maxWidth<g.width){g.width=g.maxWidth;
}
if(!this.getAllowGrowX()){g.maxWidth=g.width;
}
if(!this.getAllowShrinkX()){g.minWidth=g.width;
}if(g.minHeight>g.height){g.height=g.minHeight;
}
if(g.maxHeight<g.height){g.height=g.maxHeight;
}
if(!this.getAllowGrowY()){g.maxHeight=g.height;
}
if(!this.getAllowShrinkY()){g.minHeight=g.height;
}return g;
},_computeSizeHint:function(){var r=this.getMinWidth()||0;
var o=this.getMinHeight()||0;
var s=this.getWidth()||r;
var q=this.getHeight()||o;
var n=this.getMaxWidth()||Infinity;
var p=this.getMaxHeight()||Infinity;
return {minWidth:r,width:s,maxWidth:n,minHeight:o,height:q,maxHeight:p};
},_hasHeightForWidth:function(){var j=this._getLayout();

if(j){return j.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(a){var b=this._getLayout();

if(b&&b.hasHeightForWidth()){return b.getHeightForWidth(a);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eQ=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eR;
},setUserBounds:function(ba,top,bb,bc){this.__eR={left:ba,top:top,width:bb,height:bc};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eR;
qx.ui.core.queue.Layout.add(this);
},__eT:{},setLayoutProperties:function(k){if(k==null){return;
}var l=this.__eS;

if(!l){l=this.__eS={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(k);
}for(var m in k){if(k[m]==null){delete l[m];
}else{l[m]=k[m];
}}},getLayoutProperties:function(){return this.__eS||this.__eT;
},clearLayoutProperties:function(){delete this.__eS;
},updateLayoutProperties:function(c){var d=this._getLayout();

if(d){if(qx.core.Variant.isSet(v,u)){if(c){for(var e in c){if(c[e]!==null){d.verifyLayoutProperty(this,e,c[e]);
}}}}d.invalidateChildrenCache();
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
},clone:function(){var bd=qx.core.Object.prototype.clone.call(this);
var be=this.__eS;

if(be){bd.__eS=qx.lang.Object.clone(be);
}return bd;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eS=this.__eN=this.__eR=this.__eP=null;
}});
})();
(function(){var k="qx.debug",j="qx.ui.core.DecoratorFactory",i="qxType",h="",g="decorator",f="$$nopool$$",e="qx.ui.core.DecoratorFactory[",d="] ",c="on",b="keys: ",a=", elements: ";
qx.Class.define(j,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cn={};
},statics:{MAX_SIZE:15,__co:f},members:{__cn:null,getDecoratorElement:function(x){var C=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(x)){var A=x;
var z=qx.theme.manager.Decoration.getInstance().resolve(x);
}else{var A=C.__co;
z=x;
}var B=this.__cn;

if(B[A]&&B[A].length>0){var y=B[A].pop();
}else{var y=this._createDecoratorElement(z,A);
}y.$$pooled=false;
return y;
},poolDecorator:function(l){if(!l||l.$$pooled||l.isDisposed()){return;
}var o=qx.ui.core.DecoratorFactory;
var m=l.getId();

if(m==o.__co){l.dispose();
return;
}var n=this.__cn;

if(!n[m]){n[m]=[];
}
if(n[m].length>o.MAX_SIZE){l.dispose();
}else{l.$$pooled=true;
n[m].push(l);
}},_createDecoratorElement:function(p,q){var r=new qx.html.Decorator(p,q);

if(qx.core.Variant.isSet(k,c)){r.setAttribute(i,g);
}return r;
},toString:qx.core.Variant.select(k,{"on":function(){var s=0;
var t=0;

for(var u in this.__cn){s+=1;
t+=this.__cn[u].length;
}return [e,this.$$hash,d,b,s,a,t].join(h);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var w=this.__cn;

for(var v in w){qx.util.DisposeUtil.disposeArray(w,v);
}}this.__cn=null;
}});
})();
(function(){var fE="on",fD="px",fC="qx.debug",fB="Boolean",fA="qx.event.type.Mouse",fz="qx.event.type.Drag",fy="visible",fx="qx.event.type.Focus",fw="Integer",fv="excluded",eL="qx.event.type.Data",eK="_applyPadding",eJ="qx.event.type.Event",eI="hidden",eH="contextmenu",eG="String",eF="tabIndex",eE="backgroundColor",eD="focused",eC="changeVisibility",fL="mshtml",fM="hovered",fJ="qx.event.type.KeySequence",fK="qx.client",fH="absolute",fI="drag",fF="div",fG="object",fN="disabled",fO="move",fk="dragstart",fj="qx.dynlocale",fm="dragchange",fl="dragend",fo="resize",fn="Decorator",fq="zIndex",fp="opacity",fi="default",fh="Color",ds="qxType",dt="changeToolTipText",du="beforeContextmenuOpen",dv="_applyNativeContextMenu",dw="content",dx="_applyBackgroundColor",dy="__dj",dz="_applyFocusable",dA="changeShadow",dB="qx.event.type.KeyInput",fS="createChildControl",fR="Invalid left decorator inset detected: ",fQ="Font",fP="_applyShadow",fW="Invalid layout data: ",fV="Could not add widget to itself: ",fU="_applyEnabled",fT="_applySelectable",fY="Number",fX="_applyKeepActive",eb="__dk",ec="_applyVisibility",dY="The 'after' widget is not a child of this widget!",ea="repeat",ef="qxDraggable",eg="syncAppearance",ed="paddingLeft",ee="_applyDroppable",dW="Wrong 'left' argument. ",dX="protector",dJ="#",dI="__ds",dL="qx.event.type.MouseWheel",dK="_applyCursor",dF="_applyDraggable",dE="changeTextColor",dH="$$widget",dG="changeContextMenu",dD="paddingTop",dC="changeSelectable",em="hideFocus",en="Invalid top decorator inset detected: ",eo="none",ep="outline",eh="The 'before' widget is not a child of this widget!",ei="_applyAppearance",ej=" returned an invalid size hint!",ek="_applyOpacity",eq="url(",er=")",dT="qx.ui.core.Widget",dS="minHeight is larger than maxHeight!",dR="_applyFont",dQ="cursor",dP="qxDroppable",dO="__du",dN="__dn",dM="changeZIndex",dV="changeEnabled",dU="changeFont",es="_applyDecorator",et="_applyZIndex",eu="_applyTextColor",ev="qx.ui.menu.Menu",ew="Invalid right decorator inset detected: ",ex="Invalid widget to add: ",ey="__do",ez="_applyToolTipText",eA="The layout of the widget",eB="true",eP="widget",eO="Wrong 'top' argument. ",eN="changeDecorator",eM="changeBackgroundColor",eT="_applyTabIndex",eS="Invalid bottom decorator inset detected: ",eR="changeAppearance",eQ="shorthand",eV="__dw",eU="/",fd="",fe="_applyContextMenu",fb="container",fc="paddingBottom",eY="changeNativeContextMenu",fa="qx.ui.tooltip.ToolTip",eW="qxKeepActive",eX="_applyKeepFocus",ff="__dp",fg="paddingRight",fs="minWidth is larger than maxWidth!",fr="changeLocale",fu="qxKeepFocus",ft="qx/static/blank.gif";
qx.Class.define(dT,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dj=this._createContainerElement();
this.__dk=this.__dv();
this.__dj.add(this.__dk);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eJ,disappear:eJ,createChildControl:eL,resize:eL,move:eL,syncAppearance:eL,mousemove:fA,mouseover:fA,mouseout:fA,mousedown:fA,mouseup:fA,click:fA,dblclick:fA,contextmenu:fA,beforeContextmenuOpen:fA,mousewheel:dL,keyup:fJ,keydown:fJ,keypress:fJ,keyinput:dB,focus:fx,blur:fx,focusin:fx,focusout:fx,activate:fx,deactivate:fx,capture:eJ,losecapture:eJ,drop:fz,dragleave:fz,dragover:fz,drag:fz,dragstart:fz,dragend:fz,dragchange:fz,droprequest:fz},properties:{paddingTop:{check:fw,init:0,apply:eK,themeable:true},paddingRight:{check:fw,init:0,apply:eK,themeable:true},paddingBottom:{check:fw,init:0,apply:eK,themeable:true},paddingLeft:{check:fw,init:0,apply:eK,themeable:true},padding:{group:[dD,fg,fc,ed],mode:eQ,themeable:true},zIndex:{nullable:true,init:null,apply:et,event:dM,check:fw,themeable:true},decorator:{nullable:true,init:null,apply:es,event:eN,check:fn,themeable:true},shadow:{nullable:true,init:null,apply:fP,event:dA,check:fn,themeable:true},backgroundColor:{nullable:true,check:fh,apply:dx,event:eM,themeable:true},textColor:{nullable:true,check:fh,apply:eu,event:dE,themeable:true,inheritable:true},font:{nullable:true,apply:dR,check:fQ,event:dU,themeable:true,inheritable:true,dereference:true},opacity:{check:fY,apply:ek,themeable:true,nullable:true,init:null},cursor:{check:eG,apply:dK,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:fa,nullable:true},toolTipText:{check:eG,nullable:true,event:dt,apply:ez},toolTipIcon:{check:eG,nullable:true,event:dt},blockToolTip:{check:fB,init:false},visibility:{check:[fy,eI,fv],init:fy,apply:ec,event:eC},enabled:{init:true,check:fB,inheritable:true,apply:fU,event:dV},anonymous:{init:false,check:fB},tabIndex:{check:fw,nullable:true,apply:eT},focusable:{check:fB,init:false,apply:dz},keepFocus:{check:fB,init:false,apply:eX},keepActive:{check:fB,init:false,apply:fX},draggable:{check:fB,init:false,apply:dF},droppable:{check:fB,init:false,apply:ee},selectable:{check:fB,init:false,event:dC,apply:fT},contextMenu:{check:ev,apply:fe,nullable:true,event:dG},nativeContextMenu:{check:fB,init:false,themeable:true,event:eY,apply:dv},appearance:{check:eG,init:eP,apply:ei,event:eR}},statics:{DEBUG:false,getWidgetByElement:function(bd){while(bd){var be=bd.$$widget;
if(be!=null){return qx.core.ObjectRegistry.fromHashCode(be);
}try{bd=bd.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,bE){while(bE){if(parent==bE){return true;
}bE=bE.getLayoutParent();
}return false;
},__dl:new qx.ui.core.DecoratorFactory(),__dm:new qx.ui.core.DecoratorFactory()},members:{__dj:null,__dk:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,_getLayout:function(){return this.__ds;
},_setLayout:function(cM){if(qx.core.Variant.isSet(fC,fE)){if(cM){this.assertInstance(cM,qx.ui.layout.Abstract);
}}
if(this.__ds){this.__ds.connectToWidget(null);
}
if(cM){cM.connectToWidget(this);
}this.__ds=cM;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var bt=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(bt);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(bt);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dt:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var gs=qx.theme.manager.Decoration.getInstance();
var gu=gs.resolve(a).getInsets();
var gt=gs.resolve(b).getInsets();

if(gu.top!=gt.top||gu.right!=gt.right||gu.bottom!=gt.bottom||gu.left!=gt.left){return true;
}return false;
},renderLayout:function(bQ,top,bR,bS){var cc=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,bQ,top,bR,bS);
if(!cc){return;
}var bU=this.getContainerElement();
var content=this.getContentElement();
var bY=cc.size||this._updateInsets;
var cd=fD;
var ca={};
if(cc.position){ca.left=bQ+cd;
ca.top=top+cd;
}if(cc.size){ca.width=bR+cd;
ca.height=bS+cd;
}
if(cc.position||cc.size){bU.setStyles(ca);
}
if(bY||cc.local||cc.margin){var bT=this.getInsets();
var innerWidth=bR-bT.left-bT.right;
var innerHeight=bS-bT.top-bT.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bW={};

if(this._updateInsets){bW.left=bT.left+cd;
bW.top=bT.top+cd;
}
if(bY){bW.width=innerWidth+cd;
bW.height=innerHeight+cd;
}
if(bY||this._updateInsets){content.setStyles(bW);
}
if(cc.size){var cb=this.__dp;

if(cb){cb.setStyles({width:bR+fD,height:bS+fD});
}}
if(cc.size||this._updateInsets){if(this.__dn){this.__dn.resize(bR,bS);
}}
if(cc.size){if(this.__do){var bT=this.__do.getInsets();
var bX=bR+bT.left+bT.right;
var bV=bS+bT.top+bT.bottom;
this.__do.resize(bX,bV);
}}
if(bY||cc.local||cc.margin){if(this.__ds&&this.hasLayoutChildren()){this.__ds.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cc.position&&this.hasListener(fO)){this.fireDataEvent(fO,this.getBounds());
}
if(cc.size&&this.hasListener(fo)){this.fireDataEvent(fo,this.getBounds());
}delete this._updateInsets;
return cc;
},__du:null,clearSeparators:function(){var cv=this.__du;

if(!cv){return;
}var cw=qx.ui.core.Widget.__dl;
var content=this.getContentElement();
var cu;

for(var i=0,l=cv.length;i<l;i++){cu=cv[i];
cw.poolDecorator(cu);
content.remove(cu);
}cv.length=0;
},renderSeparator:function(gc,gd){var ge=qx.ui.core.Widget.__dl.getDecoratorElement(gc);
this.getContentElement().add(ge);
ge.resize(gd.width,gd.height);
ge.setStyles({left:gd.left+fD,top:gd.top+fD});
if(!this.__du){this.__du=[ge];
}else{this.__du.push(ge);
}},_computeSizeHint:function(){var q=this.getWidth();
var p=this.getMinWidth();
var k=this.getMaxWidth();
var o=this.getHeight();
var m=this.getMinHeight();
var n=this.getMaxHeight();

if(qx.core.Variant.isSet(fC,fE)){if(p!==null&&k!==null){this.assert(p<=k,fs);
}
if(m!==null&&n!==null){this.assert(m<=n,dS);
}}var r=this._getContentHint();
var j=this.getInsets();
var t=j.left+j.right;
var s=j.top+j.bottom;

if(q==null){q=r.width+t;
}
if(o==null){o=r.height+s;
}
if(p==null){p=t;

if(r.minWidth!=null){p+=r.minWidth;
}}
if(m==null){m=s;

if(r.minHeight!=null){m+=r.minHeight;
}}
if(k==null){if(r.maxWidth==null){k=Infinity;
}else{k=r.maxWidth+t;
}}
if(n==null){if(r.maxHeight==null){n=Infinity;
}else{n=r.maxHeight+s;
}}return {width:q,minWidth:p,maxWidth:k,height:o,minHeight:m,maxHeight:n};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ds){this.__ds.invalidateLayoutCache();
}},_getContentHint:function(){var dq=this.__ds;

if(dq){if(this.hasLayoutChildren()){var dr=dq.getSizeHint();

if(qx.core.Variant.isSet(fC,fE)){var dp=eA+this.toString()+ej;
this.assertInteger(dr.width,dW+dp);
this.assertInteger(dr.height,eO+dp);
}return dr;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(gS){var gW=this.getInsets();
var ha=gW.left+gW.right;
var gY=gW.top+gW.bottom;
var gX=gS-ha;
var gU=this._getLayout();

if(gU&&gU.hasHeightForWidth()){var gT=gU.getHeightForWidth(gS);
}else{gT=this._getContentHeightForWidth(gX);
}var gV=gT+gY;
return gV;
},_getContentHeightForWidth:function(hn){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var D=this.getPaddingRight();
var F=this.getPaddingBottom();
var E=this.getPaddingLeft();

if(this.__dn){var C=this.__dn.getInsets();

if(qx.core.Variant.isSet(fC,fE)){this.assertNumber(C.top,en+C.top);
this.assertNumber(C.right,ew+C.right);
this.assertNumber(C.bottom,eS+C.bottom);
this.assertNumber(C.left,fR+C.left);
}top+=C.top;
D+=C.right;
F+=C.bottom;
E+=C.left;
}return {"top":top,"right":D,"bottom":F,"left":E};
},getInnerSize:function(){var hh=this.getBounds();

if(!hh){return null;
}var hg=this.getInsets();
return {width:hh.width-hg.left-hg.right,height:hh.height-hg.top-hg.bottom};
},show:function(){this.setVisibility(fy);
},hide:function(){this.setVisibility(eI);
},exclude:function(){this.setVisibility(fv);
},isVisible:function(){return this.getVisibility()===fy;
},isHidden:function(){return this.getVisibility()!==fy;
},isExcluded:function(){return this.getVisibility()===fv;
},isSeeable:function(){var dn=this.getContainerElement().getDomElement();

if(dn){return dn.offsetWidth>0;
}var dm=this;

do{if(!dm.isVisible()){return false;
}
if(dm.isRootWidget()){return true;
}dm=dm.getLayoutParent();
}while(dm);
return false;
},_createContainerElement:function(){var R={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(fC,fE)){R.qxType=fb;
R.qxClass=this.classname;
}var Q={zIndex:0,position:fH};
return new qx.html.Element(fF,Q,R);
},__dv:function(){var N=this._createContentElement();

if(qx.core.Variant.isSet(fC,fE)){N.setAttribute(ds,dw);
}N.setStyles({"position":fH,"zIndex":10});
return N;
},_createContentElement:function(){return new qx.html.Element(fF,{overflowX:eI,overflowY:eI});
},getContainerElement:function(){return this.__dj;
},getContentElement:function(){return this.__dk;
},getDecoratorElement:function(){return this.__dn||null;
},getShadowElement:function(){return this.__do||null;
},__dw:null,getLayoutChildren:function(){var bp=this.__dw;

if(!bp){return this.__dx;
}var bq;

for(var i=0,l=bp.length;i<l;i++){var bo=bp[i];

if(bo.hasUserBounds()||bo.isExcluded()){if(bq==null){bq=bp.concat();
}qx.lang.Array.remove(bq,bo);
}}return bq||bp;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var bl=this.__ds;

if(bl){bl.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var G=this.__dw;

if(!G){return false;
}var H;

for(var i=0,l=G.length;i<l;i++){H=G[i];

if(!H.hasUserBounds()&&!H.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dx:[],_getChildren:function(){return this.__dw||this.__dx;
},_indexOf:function(dd){var de=this.__dw;

if(!de){return -1;
}return de.indexOf(dd);
},_hasChildren:function(){var cN=this.__dw;
return cN!=null&&(!!cN[0]);
},addChildrenToQueue:function(hd){var he=this.__dw;

if(!he){return;
}var hf;

for(var i=0,l=he.length;i<l;i++){hf=he[i];
hd[hf.$$hash]=hf;
hf.addChildrenToQueue(hd);
}},_add:function(cz,cA){if(cz.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,cz);
}
if(this.__dw){this.__dw.push(cz);
}else{this.__dw=[cz];
}this.__dy(cz,cA);
},_addAt:function(cf,cg,ch){if(!this.__dw){this.__dw=[];
}if(cf.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,cf);
}var ci=this.__dw[cg];

if(ci===cf){return cf.setLayoutProperties(ch);
}
if(ci){qx.lang.Array.insertBefore(this.__dw,cf,ci);
}else{this.__dw.push(cf);
}this.__dy(cf,ch);
},_addBefore:function(cj,ck,cl){if(qx.core.Variant.isSet(fC,fE)){this.assertInArray(ck,this._getChildren(),eh);
}
if(cj==ck){return;
}
if(!this.__dw){this.__dw=[];
}if(cj.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,cj);
}qx.lang.Array.insertBefore(this.__dw,cj,ck);
this.__dy(cj,cl);
},_addAfter:function(ho,hp,hq){if(qx.core.Variant.isSet(fC,fE)){this.assertInArray(hp,this._getChildren(),dY);
}
if(ho==hp){return;
}
if(!this.__dw){this.__dw=[];
}if(ho.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,ho);
}qx.lang.Array.insertAfter(this.__dw,ho,hp);
this.__dy(ho,hq);
},_remove:function(dl){if(!this.__dw){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dw,dl);
this.__dz(dl);
},_removeAt:function(bh){if(!this.__dw){throw new Error("This widget has no children!");
}var bi=this.__dw[bh];
qx.lang.Array.removeAt(this.__dw,bh);
this.__dz(bi);
return bi;
},_removeAll:function(){if(!this.__dw){return;
}var ba=this.__dw.concat();
this.__dw.length=0;

for(var i=ba.length-1;i>=0;i--){this.__dz(ba[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dy:function(gI,gJ){if(qx.core.Variant.isSet(fC,fE)){this.assertInstance(gI,qx.ui.core.LayoutItem,ex+gI);
this.assertNotIdentical(gI,this,fV+gI);

if(gJ!=null){this.assertType(gJ,fG,fW+gJ);
}}var parent=gI.getLayoutParent();

if(parent&&parent!=this){parent._remove(gI);
}gI.setLayoutParent(this);
if(gJ){gI.setLayoutProperties(gJ);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(gI);
}},__dz:function(f){if(qx.core.Variant.isSet(fC,fE)){this.assertNotUndefined(f);
}
if(f.getLayoutParent()!==this){throw new Error("Remove Error: "+f+" is not a child of this widget!");
}f.setLayoutParent(null);
if(this.__ds){this.__ds.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(f);
}},capture:function(w){this.getContainerElement().capture(w);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(db,dc,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dp){return;
}var bC=this.__dp=new qx.html.Element;

if(qx.core.Variant.isSet(fC,fE)){bC.setAttribute(ds,dX);
}bC.setStyles({position:fH,top:0,left:0,zIndex:7});
var bD=this.getBounds();

if(bD){this.__dp.setStyles({width:bD.width+fD,height:bD.height+fD});
}if(qx.core.Variant.isSet(fK,fL)){bC.setStyles({backgroundImage:eq+qx.util.ResourceManager.getInstance().toUri(ft)+er,backgroundRepeat:ea});
}this.getContainerElement().add(bC);
},_applyDecorator:function(cB,cC){if(qx.core.Variant.isSet(fC,fE)){if(cB&&typeof cB===fG){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+cB);
}}}var cG=qx.ui.core.Widget.__dl;
var cE=this.getContainerElement();
if(!this.__dp&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(cC){cE.remove(this.__dn);
cG.poolDecorator(this.__dn);
}if(cB){var cF=this.__dn=cG.getDecoratorElement(cB);
cF.setStyle(fq,5);
var cD=this.getBackgroundColor();
cF.tint(cD);
cE.add(cF);
}else{delete this.__dn;
this._applyBackgroundColor(this.getBackgroundColor());
}if(cB&&!cC&&cD){this.getContainerElement().setStyle(eE,null);
}if(this.__dt(cC,cB)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(cB){var cH=this.getBounds();

if(cH){cF.resize(cH.width,cH.height);
this.__dp&&
this.__dp.setStyles({width:cH.width+fD,height:cH.height+fD});
}}},_applyShadow:function(cO,cP){var cW=qx.ui.core.Widget.__dm;
var cR=this.getContainerElement();
if(cP){cR.remove(this.__do);
cW.poolDecorator(this.__do);
}if(cO){var cT=this.__do=cW.getDecoratorElement(cO);
cR.add(cT);
var cV=cT.getInsets();
cT.setStyles({left:(-cV.left)+fD,top:(-cV.top)+fD});
var cU=this.getBounds();

if(cU){var cS=cU.width+cV.left+cV.right;
var cQ=cU.height+cV.top+cV.bottom;
cT.resize(cS,cQ);
}cT.tint(null);
}else{delete this.__do;
}},_applyToolTipText:function(gF,gG){if(qx.core.Variant.isSet(fj,fE)){if(this.__dr){return;
}var gH=qx.locale.Manager.getInstance();
this.__dr=gH.addListener(fr,function(){if(gF&&gF.translate){this.setToolTipText(gF.translate());
}},this);
}},_applyTextColor:function(cm,cn){},_applyZIndex:function(bj,bk){this.getContainerElement().setStyle(fq,bj==null?0:bj);
},_applyVisibility:function(dg,dh){var di=this.getContainerElement();

if(dg===fy){di.show();
}else{di.hide();
}var parent=this.$$parent;

if(parent&&(dh==null||dg==null||dh===fv||dg===fv)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(bN,bO){this.getContainerElement().setStyle(fp,bN==1?null:bN);
if(qx.core.Variant.isSet(fK,fL)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var bP=(bN==1||bN==null)?null:0.99;
this.getContentElement().setStyle(fp,bP);
}}},_applyCursor:function(bA,bB){if(bA==null&&!this.isSelectable()){bA=fi;
}this.getContainerElement().setStyle(dQ,bA,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(I,J){var K=this.getBackgroundColor();
var M=this.getContainerElement();

if(this.__dn){this.__dn.tint(K);
M.setStyle(eE,null);
}else{var L=qx.theme.manager.Color.getInstance().resolve(K);
M.setStyle(eE,L);
}},_applyFont:function(cq,cr){},__dA:null,$$stateChanges:null,_forwardStates:null,hasState:function(u){var v=this.__dA;
return !!v&&!!v[u];
},addState:function(S){var T=this.__dA;

if(!T){T=this.__dA={};
}
if(T[S]){return;
}this.__dA[S]=true;
if(S===fM){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var W=this.__dD;

if(forward&&forward[S]&&W){var U;

for(var V in W){U=W[V];

if(U instanceof qx.ui.core.Widget){W[V].addState(S);
}}}},removeState:function(hi){var hj=this.__dA;

if(!hj||!hj[hi]){return;
}delete this.__dA[hi];
if(hi===fM){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var hm=this.__dD;

if(forward&&forward[hi]&&hm){for(var hl in hm){var hk=hm[hl];

if(hk instanceof qx.ui.core.Widget){hk.removeState(hi);
}}}},replaceState:function(gf,gg){var gh=this.__dA;

if(!gh){gh=this.__dA={};
}
if(!gh[gg]){gh[gg]=true;
}
if(gh[gf]){delete gh[gf];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gk=this.__dD;

if(forward&&forward[gg]&&gk){for(var gj in gk){var gi=gk[gj];

if(gi instanceof qx.ui.core.Widget){gi.replaceState(gf,gg);
}}}},__dB:null,__dC:null,syncAppearance:function(){var gz=this.__dA;
var gy=this.__dB;
var gA=qx.theme.manager.Appearance.getInstance();
var gw=qx.core.Property.$$method.setThemed;
var gE=qx.core.Property.$$method.resetThemed;
if(this.__dC){delete this.__dC;
if(gy){var gv=gA.styleFrom(gy,gz,null,this.getAppearance());
if(gv){gy=null;
}}}if(!gy){var gx=this;
var gD=[];

do{gD.push(gx.$$subcontrol||gx.getAppearance());
}while(gx=gx.$$subparent);
gy=this.__dB=gD.reverse().join(eU).replace(/#[0-9]+/g,fd);
}var gB=gA.styleFrom(gy,gz,null,this.getAppearance());

if(gB){if(gv){for(var gC in gv){if(gB[gC]===undefined){this[gE[gC]]();
}}}if(qx.core.Variant.isSet(fC,fE)){for(var gC in gB){if(!this[gw[gC]]){throw new Error(this.classname+' has no themeable property "'+gC+'" while styling '+gy);
}}}for(var gC in gB){gB[gC]===undefined?this[gE[gC]]():this[gw[gC]](gB[gC]);
}}else if(gv){for(var gC in gv){this[gE[gC]]();
}}this.fireDataEvent(eg,this.__dA);
},_applyAppearance:function(bb,bc){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dq){qx.ui.core.queue.Appearance.add(this);
this.__dq=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dC=true;
qx.ui.core.queue.Appearance.add(this);
var z=this.__dD;

if(z){var x;

for(var y in z){x=z[y];

if(x instanceof qx.ui.core.Widget){x.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var ce=this;

while(ce.getAnonymous()){ce=ce.getLayoutParent();

if(!ce){return null;
}}return ce;
},getFocusTarget:function(){var hu=this;

if(!hu.getEnabled()){return null;
}
while(hu.getAnonymous()||!hu.getFocusable()){hu=hu.getLayoutParent();

if(!hu||!hu.getEnabled()){return null;
}}return hu;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(cI,cJ){var cK=this.getFocusElement();
if(cI){var cL=this.getTabIndex();

if(cL==null){cL=1;
}cK.setAttribute(eF,cL);
if(qx.core.Variant.isSet(fK,fL)){cK.setAttribute(em,eB);
}else{cK.setStyle(ep,eo);
}}else{if(cK.isNativelyFocusable()){cK.setAttribute(eF,-1);
}else if(cJ){cK.setAttribute(eF,null);
}}},_applyKeepFocus:function(hb){var hc=this.getFocusElement();
hc.setAttribute(fu,hb?fE:null);
},_applyKeepActive:function(bw){var bx=this.getContainerElement();
bx.setAttribute(eW,bw?fE:null);
},_applyTabIndex:function(bH){if(bH==null){bH=1;
}else if(bH<1||bH>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&bH!=null){this.getFocusElement().setAttribute(eF,bH);
}},_applySelectable:function(X,Y){if(Y!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(X);
this.getContentElement().setSelectable(X);
},_applyEnabled:function(O,P){if(O===false){this.addState(fN);
this.removeState(fM);
if(this.isFocusable()){this.removeState(eD);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(fN);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(br,bs,name){},_applyContextMenu:function(bu,bv){if(bv){bv.removeState(eH);

if(bv.getOpener()==this){bv.resetOpener();
}
if(!bu){this.removeListener(eH,this._onContextMenuOpen);
bv.removeListener(eC,this._onBeforeContextMenuOpen,this);
}}
if(bu){bu.setOpener(this);
bu.addState(eH);

if(!bv){this.addListener(eH,this._onContextMenuOpen);
bu.addListener(eC,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fy&&this.hasListener(du)){this.fireDataEvent(du,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(ga,gb){if(!this.isEnabled()&&ga===true){ga=false;
}qx.ui.core.DragDropCursor.getInstance();
if(ga){this.addListener(fk,this._onDragStart);
this.addListener(fI,this._onDrag);
this.addListener(fl,this._onDragEnd);
this.addListener(fm,this._onDragChange);
}else{this.removeListener(fk,this._onDragStart);
this.removeListener(fI,this._onDrag);
this.removeListener(fl,this._onDragEnd);
this.removeListener(fm,this._onDragChange);
}this.getContainerElement().setAttribute(ef,ga?fE:null);
},_applyDroppable:function(dj,dk){if(!this.isEnabled()&&dj===true){dj=false;
}this.getContainerElement().setAttribute(dP,dj?fE:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fi);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var by=qx.ui.core.DragDropCursor.getInstance();
var bz=e.getCurrentAction();
bz?by.setAction(bz):by.resetAction();
},visualizeFocus:function(){this.addState(eD);
},visualizeBlur:function(){this.removeState(eD);
},scrollChildIntoView:function(gL,gM,gN,gO){this.scrollChildIntoViewX(gL,gM,gO);
this.scrollChildIntoViewY(gL,gN,gO);
},scrollChildIntoViewX:function(gp,gq,gr){this.getContentElement().scrollChildIntoViewX(gp.getContainerElement(),gq,gr);
},scrollChildIntoViewY:function(gP,gQ,gR){this.getContentElement().scrollChildIntoViewY(gP.getContainerElement(),gQ,gR);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(df){if(!this.__dD){return false;
}return !!this.__dD[df];
},__dD:null,_getCreatedChildControls:function(){return this.__dD;
},getChildControl:function(hr,hs){if(!this.__dD){if(hs){return null;
}this.__dD={};
}var ht=this.__dD[hr];

if(ht){return ht;
}
if(hs===true){return null;
}return this._createChildControl(hr);
},_showChildControl:function(A){var B=this.getChildControl(A);
B.show();
return B;
},_excludeChildControl:function(cY){var da=this.getChildControl(cY,true);

if(da){da.exclude();
}},_isChildControlVisible:function(co){var cp=this.getChildControl(co,true);

if(cp){return cp.isVisible();
}return false;
},_createChildControl:function(bI){if(!this.__dD){this.__dD={};
}else if(this.__dD[bI]){throw new Error("Child control '"+bI+"' already created!");
}var bM=bI.indexOf(dJ);

if(bM==-1){var bJ=this._createChildControlImpl(bI);
}else{var bJ=this._createChildControlImpl(bI.substring(0,bM));
}
if(!bJ){throw new Error("Unsupported control: "+bI);
}bJ.$$subcontrol=bI;
bJ.$$subparent=this;
var bK=this.__dA;
var forward=this._forwardStates;

if(bK&&forward&&bJ instanceof qx.ui.core.Widget){for(var bL in bK){if(forward[bL]){bJ.addState(bL);
}}}this.fireDataEvent(fS,bJ);
return this.__dD[bI]=bJ;
},_createChildControlImpl:function(gK){return null;
},_disposeChildControls:function(){var go=this.__dD;

if(!go){return;
}var gm=qx.ui.core.Widget;

for(var gn in go){var gl=go[gn];

if(!gm.contains(this,gl)){gl.destroy();
}else{gl.dispose();
}}delete this.__dD;
},_findTopControl:function(){var cX=this;

while(cX){if(!cX.$$subparent){return cX;
}cX=cX.$$subparent;
}return null;
},getContainerLocation:function(c){var d=this.getContainerElement().getDomElement();
return d?qx.bom.element.Location.get(d,c):null;
},getContentLocation:function(g){var h=this.getContentElement().getDomElement();
return h?qx.bom.element.Location.get(h,g):null;
},setDomLeft:function(bF){var bG=this.getContainerElement().getDomElement();

if(bG){bG.style.left=bF+fD;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bf){var bg=this.getContainerElement().getDomElement();

if(bg){bg.style.top=bf+fD;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cs,top){var ct=this.getContainerElement().getDomElement();

if(ct){ct.style.left=cs+fD;
ct.style.top=top+fD;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var cx=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var cy=this.getChildren();

for(var i=0,l=cy.length;i<l;i++){cx.add(cy[i].clone());
}}return cx;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fj,fE)){if(this.__dr){qx.locale.Manager.getInstance().removeListenerById(this.__dr);
}}this.getContainerElement().setAttribute(dH,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var bn=qx.ui.core.Widget;
var bm=this.getContainerElement();

if(this.__dn){bm.remove(this.__dn);
bn.__dl.poolDecorator(this.__dn);
}
if(this.__do){bm.remove(this.__do);
bn.__dm.poolDecorator(this.__do);
}this.clearSeparators();
this.__dn=this.__do=this.__du=null;
}else{this._disposeArray(dO);
this._disposeObjects(dN,ey);
}this._disposeArray(eV);
this.__dA=this.__dD=null;
this._disposeObjects(dI,dy,eb,ff);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){qx.ui.core.Widget.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var j="keep-align",i="qx.debug",h="'placementModeX' and 'placementModeY' instead.",g="The property 'smart' is deprecated. Please us the properties ",f="on",e="Integer",d="interval",c="direct",b="disappear",a="best-fit",C="mouse",B="bottom-left",A="Boolean",z="Invalid attribute 'value'.",y="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",q="offsetLeft",r="top-left",o="appear",p="offsetBottom",m="top-right",n="offsetTop",k="right-bottom",l="right-top",s="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,m,B,y,v,s,l,k],init:B,themeable:true},placeMethod:{check:[x,C],init:C,themeable:true},domMove:{check:A,init:false},placementModeX:{check:[c,j,a],init:j,themeable:true},placementModeY:{check:[c,j,a],init:j,themeable:true},offsetLeft:{check:e,init:0,themeable:true},offsetTop:{check:e,init:0,themeable:true},offsetRight:{check:e,init:0,themeable:true},offsetBottom:{check:e,init:0,themeable:true},offset:{group:[n,u,p,q],mode:t,themeable:true}},members:{__hr:null,__hs:null,__ht:null,getLayoutLocation:function(J){var M,L,N,top;
L=J.getBounds();
N=L.left;
top=L.top;
var O=L;
J=J.getLayoutParent();

while(J&&!J.isRootWidget()){L=J.getBounds();
N+=L.left;
top+=L.top;
M=J.getInsets();
N+=M.left;
top+=M.top;
J=J.getLayoutParent();
}if(J.isRootWidget()){var K=J.getContainerLocation();

if(K){N+=K.left;
top+=K.top;
}}return {left:N,top:top,right:N+O.width,bottom:top+O.height};
},moveTo:function(H,top){if(this.getDomMove()){this.setDomPosition(H,top);
}else{this.setLayoutProperties({left:H,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__hu();
this.__hr=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(d,this.__hr);
this.__ht=function(){this.__hu();
};
this.addListener(b,this.__ht,this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__hw(R);
},__hu:function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(d,this.__hr);
this.__hr=null;
}
if(this.__ht){this.removeListener(b,this.__ht,this);
this.__ht=null;
}},placeToMouse:function(event){var G=event.getDocumentLeft();
var top=event.getDocumentTop();
var F={left:G,top:top,right:G,bottom:top};
this.__hw(F);
},placeToElement:function(S,T){var location=qx.bom.element.Location.get(S);
var U={left:location.left,top:location.top,right:location.left+S.offsetWidth,bottom:location.top+S.offsetHeight};
if(T){this.__hr=qx.lang.Function.bind(this.placeToElement,this,S,false);
qx.event.Idle.getInstance().addListener(d,this.__hr);
this.addListener(b,function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(d,this.__hr);
this.__hr=null;
}},this);
}this.__hw(U);
},placeToPoint:function(V){var W={left:V.left,top:V.top,right:V.left,bottom:V.top};
this.__hw(W);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hv:function(bc){var bd=null;

if(this._computePlacementSize){var bd=this._computePlacementSize();
}else if(this.isVisible()){var bd=this.getBounds();
}
if(bd==null){this.addListenerOnce(o,function(){this.__hv(bc);
},this);
}else{bc.call(this,bd);
}},__hw:function(I){this.__hv(function(D){var E=qx.util.placement.Placement.compute(D,this.getLayoutParent().getBounds(),I,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(E.left,E.top);
});
},setSmart:function(X){if(qx.core.Variant.isSet(i,f)){qx.core.Assert.assertBoolean(X,z);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,g+h);
}var Y=X?j:c;
this.set({placementModeX:Y,placementModeY:Y});
},getSmart:function(){if(qx.core.Variant.isSet(i,f)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g+h);
}var ba=this.getPlacementModeX()==j?true:false;
var bb=this.getPlacementModeY()==j?true:false;
return ba&&bb;
},resetSmart:function(){if(qx.core.Variant.isSet(i,f)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g+h);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(i,f)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g+h);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(i,f)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g+h);
}this.setSmart(!this.getSmart());
}},destruct:function(){this.__hu();
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
(function(){var o="atom",n="Integer",m="String",l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="mouseover",f="Boolean",d="_applyLabel";
qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(o);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(g,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:i},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:m,nullable:true,apply:d},icon:{check:m,nullable:true,apply:j,themeable:true},rich:{check:f,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(v){var w;

switch(v){case o:w=new qx.ui.basic.Atom;
this._add(w);
break;
}return w||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,v);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(p,q){var r=this.getChildControl(o);
p==null?r.resetIcon():r.setIcon(p);
},_applyLabel:function(a,b){var c=this.getChildControl(o);
a==null?c.resetLabel():c.setLabel(a);
},_applyRich:function(s,t){var u=this.getChildControl(o);
u.setRich(s);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gN:{},remove:function(h){delete this.__gN[h.$$hash];
},add:function(g){this.__gN[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__gQ();
for(var i=c.length-1;i>=0;i--){var d=c[i];
if(d.hasValidLayout()){continue;
}if(d.isRootWidget()&&!d.hasUserBounds()){var f=d.getSizeHint();
d.renderLayout(0,0,f.width,f.height);
}else{var e=d.getBounds();
d.renderLayout(e.left,e.top,e.width,e.height);
}}},getNestingLevel:function(x){var y=this.__gP;
var A=0;
var parent=x;
while(true){if(y[parent.$$hash]!=null){A+=y[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
A+=1;
}var z=A;

while(x&&x!==parent){y[x.$$hash]=z--;
x=x.$$parent;
}return A;
},__gO:function(){var o=qx.ui.core.queue.Visibility;
this.__gP={};
var n=[];
var m=this.__gN;
var j,l;

for(var k in m){j=m[k];

if(o.isVisible(j)){l=this.getNestingLevel(j);
if(!n[l]){n[l]={};
}n[l][k]=j;
delete m[k];
}}return n;
},__gQ:function(){var s=[];
var u=this.__gO();

for(var r=u.length-1;r>=0;r--){if(!u[r]){continue;
}
for(var q in u[r]){var p=u[r][q];
if(r==0||p.isRootWidget()||p.hasUserBounds()){s.push(p);
p.invalidateLayoutCache();
continue;
}var w=p.getSizeHint(false);

if(w){p.invalidateLayoutCache();
var t=p.getSizeHint();
var v=(!p.getBounds()||w.minWidth!==t.minWidth||w.width!==t.width||w.maxWidth!==t.maxWidth||w.minHeight!==t.minHeight||w.height!==t.height||w.maxHeight!==t.maxHeight);
}else{v=true;
}
if(v){var parent=p.getLayoutParent();

if(!u[r-1]){u[r-1]={};
}u[r-1][parent.$$hash]=parent;
}else{s.push(p);
}}}return s;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(b,c){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fi={};
this.__fj=qx.lang.Function.bind(this.__fn,this);
this.__fk=false;
},members:{__fl:null,__fm:null,__fi:null,__fk:null,__fj:null,schedule:function(e){if(this.__fl==null){this.__fl=window.setTimeout(this.__fj,0);
}var f=e.toHashCode();
if(this.__fm&&this.__fm[f]){return;
}this.__fi[f]=e;
this.__fk=true;
},cancel:function(g){var h=g.toHashCode();
if(this.__fm&&this.__fm[h]){this.__fm[h]=null;
return;
}delete this.__fi[h];
if(qx.lang.Object.isEmpty(this.__fi)&&this.__fl!=null){window.clearTimeout(this.__fl);
this.__fl=null;
}},__fn:qx.event.GlobalError.observeMethod(function(){this.__fl=null;
while(this.__fk){this.__fm=qx.lang.Object.clone(this.__fi);
this.__fi={};
this.__fk=false;

for(var d in this.__fm){var c=this.__fm[d];

if(c){this.__fm[d]=null;
c.call();
}}}this.__fm=null;
})},destruct:function(){if(this.__fl!=null){window.clearTimeout(this.__fl);
}this.__fj=this.__fi=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){qx.core.Object.call(this);
this.__gI=d;
this.__gJ=e||null;
this.__gK=qx.util.DeferredCallManager.getInstance();
},members:{__gI:null,__gJ:null,__gK:null,cancel:function(){this.__gK.cancel(this);
},schedule:function(){this.__gK.schedule(this);
},call:function(){this.__gJ?this.__gI.apply(this.__gJ):this.__gI();
}},destruct:function(b,c){this.cancel();
this.__gJ=this.__gI=this.__gK=null;
}});
})();
(function(){var cn="on",cm="element",cl="qx.debug",ck="qx.client",cj="qxSelectable",ci="off",ch="': ",cg="Invalid context for callback.",cf="div",ce="'",cR="Invalid event type.",cQ="Invalid callback function",cP="",cO="mshtml",cN="none",cM="scroll",cL="text",cK="|bubble|",cJ="qx.html.Element",cI="|capture|",cu="Invalid capture flag.",cv="focus",cs="Failed to add event listener for type '",ct="blur",cq="deactivate",cr="capture",co="userSelect",cp=" from the target '",cw="-moz-none",cx="visible",cA="releaseCapture",cz="tabIndex",cC="activate",cB="MozUserSelect",cE="normal",cD=" to the target '",cy="Failed to remove event listener for type '",cH="Invalid capture falg.",cG="hidden",cF="__cR";
qx.Class.define(cJ,{extend:qx.core.Object,construct:function(bX,bY,ca){qx.core.Object.call(this);
this.__cv=bX||cf;
this.__cw=bY||null;
this.__cx=ca||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cy:{},_scheduleFlush:function(bf){qx.html.Element.__dd.schedule();
},flush:function(){var dC;

if(qx.core.Variant.isSet(cl,cn)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var du=this.__cz();
var dt=du.getFocus();

if(dt&&this.__cD(dt)){du.blur(dt);
}var dJ=du.getActive();

if(dJ&&this.__cD(dJ)){qx.bom.Element.deactivate(dJ);
}var dx=this.__cB();

if(dx&&this.__cD(dx)){qx.bom.Element.releaseCapture(dx);
}var dD=[];
var dE=this._modified;

for(var dB in dE){dC=dE[dB];
if(dC.__cV()){if(dC.__cE&&qx.dom.Hierarchy.isRendered(dC.__cE)){dD.push(dC);
}else{if(qx.core.Variant.isSet(cl,cn)){if(this.DEBUG){dC.debug("Flush invisible element");
}}dC.__cU();
}delete dE[dB];
}}
for(var i=0,l=dD.length;i<l;i++){dC=dD[i];

if(qx.core.Variant.isSet(cl,cn)){if(this.DEBUG){dC.debug("Flush rendered element");
}}dC.__cU();
}var dz=this._visibility;

for(var dB in dz){dC=dz[dB];
var dF=dC.__cE;

if(!dF){delete dz[dB];
continue;
}
if(qx.core.Variant.isSet(cl,cn)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+dC.__cH);
}}if(!dC.$$disposed){dF.style.display=dC.__cH?cP:cN;
if(qx.core.Variant.isSet(ck,cO)){if(!(document.documentMode>=8)){dF.style.visibility=dC.__cH?cx:cG;
}}}delete dz[dB];
}var scroll=this._scroll;

for(var dB in scroll){dC=scroll[dB];
var dK=dC.__cE;

if(dK&&dK.offsetWidth){var dw=true;
if(dC.__cK!=null){dC.__cE.scrollLeft=dC.__cK;
delete dC.__cK;
}if(dC.__cL!=null){dC.__cE.scrollTop=dC.__cL;
delete dC.__cL;
}var dG=dC.__cI;

if(dG!=null){var dA=dG.element.getDomElement();

if(dA&&dA.offsetWidth){qx.bom.element.Scroll.intoViewX(dA,dK,dG.align);
delete dC.__cI;
}else{dw=false;
}}var dH=dC.__cJ;

if(dH!=null){var dA=dH.element.getDomElement();

if(dA&&dA.offsetWidth){qx.bom.element.Scroll.intoViewY(dA,dK,dH.align);
delete dC.__cJ;
}else{dw=false;
}}if(dw){delete scroll[dB];
}}}var dv={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dI=this._actions[i];
var dF=dI.element.__cE;

if(!dF||!dv[dI.type]&&!dI.element.__cV()){continue;
}var dy=dI.args;
dy.unshift(dF);
qx.bom.Element[dI.type].apply(qx.bom.Element,dy);
}this._actions=[];
for(var dB in this.__cy){var ds=this.__cy[dB];
var dK=ds.element.__cE;

if(dK){qx.bom.Selection.set(dK,ds.start,ds.end);
delete this.__cy[dB];
}}qx.event.handler.Appear.refresh();
},__cz:function(){if(!this.__cA){var bM=qx.event.Registration.getManager(window);
this.__cA=bM.getHandler(qx.event.handler.Focus);
}return this.__cA;
},__cB:function(){if(!this.__cC){var dd=qx.event.Registration.getManager(window);
this.__cC=dd.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cC.getCaptureElement();
},__cD:function(bF){var bG=qx.core.ObjectRegistry.fromHashCode(bF.$$element);
return bG&&!bG.__cV();
}},members:{__cv:null,__cE:null,__cF:false,__cG:true,__cH:true,__cI:null,__cJ:null,__cK:null,__cL:null,__cM:null,__cN:null,__cO:null,__cw:null,__cx:null,__cP:null,__cQ:null,__cR:null,__cS:null,__cT:null,_scheduleChildrenUpdate:function(){if(this.__cS){return;
}this.__cS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
},_createDomElement:function(){return qx.bom.Element.create(this.__cv);
},__cU:function(){if(qx.core.Variant.isSet(cl,cn)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var bj=this.__cR;

if(bj){var length=bj.length;
var bk;

for(var i=0;i<length;i++){bk=bj[i];

if(bk.__cH&&bk.__cG&&!bk.__cE){bk.__cU();
}}}
if(!this.__cE){this.__cE=this._createDomElement();
this.__cE.$$element=this.$$hash;
this._copyData(false);

if(bj&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cS){this._syncChildren();
}}delete this.__cS;
},_insertChildren:function(){var dp=this.__cR;
var length=dp.length;
var dr;

if(length>2){var dq=document.createDocumentFragment();

for(var i=0;i<length;i++){dr=dp[i];

if(dr.__cE&&dr.__cG){dq.appendChild(dr.__cE);
}}this.__cE.appendChild(dq);
}else{var dq=this.__cE;

for(var i=0;i<length;i++){dr=dp[i];

if(dr.__cE&&dr.__cG){dq.appendChild(dr.__cE);
}}}},_syncChildren:function(){var bu=qx.core.ObjectRegistry;
var bl=this.__cR;
var bs=bl.length;
var bm;
var bq;
var bo=this.__cE;
var br=bo.childNodes;
var bn=0;
var bp;

if(qx.core.Variant.isSet(cl,cn)){var bt=0;
}for(var i=br.length-1;i>=0;i--){bp=br[i];
bq=bu.fromHashCode(bp.$$element);

if(!bq||!bq.__cG||bq.__cT!==this){bo.removeChild(bp);

if(qx.core.Variant.isSet(cl,cn)){bt++;
}}}for(var i=0;i<bs;i++){bm=bl[i];
if(bm.__cG){bq=bm.__cE;
bp=br[bn];

if(!bq){continue;
}if(bq!=bp){if(bp){bo.insertBefore(bq,bp);
}else{bo.appendChild(bq);
}
if(qx.core.Variant.isSet(cl,cn)){bt++;
}}bn++;
}}if(qx.core.Variant.isSet(cl,cn)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bt+" operations");
}}},_copyData:function(dM){var dQ=this.__cE;
var dP=this.__cx;

if(dP){var dN=qx.bom.element.Attribute;

for(var dR in dP){dN.set(dQ,dR,dP[dR]);
}}var dP=this.__cw;

if(dP){var dO=qx.bom.element.Style;

if(dM){dO.setStyles(dQ,dP);
}else{dO.setCss(dQ,dO.compile(dP));
}}var dP=this.__cP;

if(dP){for(var dR in dP){this._applyProperty(dR,dP[dR]);
}}var dP=this.__cQ;

if(dP){qx.event.Registration.getManager(dQ).importListeners(dQ,dP);
delete this.__cQ;
}},_syncData:function(){var N=this.__cE;
var M=qx.bom.element.Attribute;
var K=qx.bom.element.Style;
var L=this.__cN;

if(L){var Q=this.__cx;

if(Q){var O;

for(var P in L){O=Q[P];

if(O!==undefined){M.set(N,P,O);
}else{M.reset(N,P);
}}}this.__cN=null;
}var L=this.__cM;

if(L){var Q=this.__cw;

if(Q){var J={};

for(var P in L){J[P]=Q[P];
}K.setStyles(N,J);
}this.__cM=null;
}var L=this.__cO;

if(L){var Q=this.__cP;

if(Q){var O;

for(var P in L){this._applyProperty(P,Q[P]);
}}this.__cO=null;
}},__cV:function(){var di=this;
while(di){if(di.__cF){return true;
}
if(!di.__cG||!di.__cH){return false;
}di=di.__cT;
}return false;
},__cW:function(bU){if(bU.__cT===this){throw new Error("Child is already in: "+bU);
}
if(bU.__cF){throw new Error("Root elements could not be inserted into other ones.");
}if(bU.__cT){bU.__cT.remove(bU);
}bU.__cT=this;
if(!this.__cR){this.__cR=[];
}if(this.__cE){this._scheduleChildrenUpdate();
}},__cX:function(I){if(I.__cT!==this){throw new Error("Has no child: "+I);
}if(this.__cE){this._scheduleChildrenUpdate();
}delete I.__cT;
},__cY:function(dX){if(dX.__cT!==this){throw new Error("Has no child: "+dX);
}if(this.__cE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cR||null;
},getChild:function(j){var k=this.__cR;
return k&&k[j]||null;
},hasChildren:function(){var R=this.__cR;
return R&&R[0]!==undefined;
},indexOf:function(bh){var bi=this.__cR;
return bi?bi.indexOf(bh):-1;
},hasChild:function(E){var F=this.__cR;
return F&&F.indexOf(E)!==-1;
},add:function(n){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cW(arguments[i]);
}this.__cR.push.apply(this.__cR,arguments);
}else{this.__cW(n);
this.__cR.push(n);
}return this;
},addAt:function(dm,dn){this.__cW(dm);
qx.lang.Array.insertAt(this.__cR,dm,dn);
return this;
},remove:function(ef){var eg=this.__cR;

if(!eg){return;
}
if(arguments[1]){var eh;

for(var i=0,l=arguments.length;i<l;i++){eh=arguments[i];
this.__cX(eh);
qx.lang.Array.remove(eg,eh);
}}else{this.__cX(ef);
qx.lang.Array.remove(eg,ef);
}return this;
},removeAt:function(cY){var da=this.__cR;

if(!da){throw new Error("Has no children!");
}var dc=da[cY];

if(!dc){throw new Error("Has no child at this position!");
}this.__cX(dc);
qx.lang.Array.removeAt(this.__cR,cY);
return this;
},removeAll:function(){var bS=this.__cR;

if(bS){for(var i=0,l=bS.length;i<l;i++){this.__cX(bS[i]);
}bS.length=0;
}return this;
},getParent:function(){return this.__cT||null;
},insertInto:function(parent,c){parent.__cW(this);

if(c==null){parent.__cR.push(this);
}else{qx.lang.Array.insertAt(this.__cR,this,c);
}return this;
},insertBefore:function(bH){var parent=bH.__cT;
parent.__cW(this);
qx.lang.Array.insertBefore(parent.__cR,this,bH);
return this;
},insertAfter:function(D){var parent=D.__cT;
parent.__cW(this);
qx.lang.Array.insertAfter(parent.__cR,this,D);
return this;
},moveTo:function(df){var parent=this.__cT;
parent.__cY(this);
var dg=parent.__cR.indexOf(this);

if(dg===df){throw new Error("Could not move to same index!");
}else if(dg<df){df--;
}qx.lang.Array.removeAt(parent.__cR,dg);
qx.lang.Array.insertAt(parent.__cR,this,df);
return this;
},moveBefore:function(bQ){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(bQ));
},moveAfter:function(G){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(G)+1);
},free:function(){var parent=this.__cT;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cR){return;
}parent.__cX(this);
qx.lang.Array.remove(parent.__cR,this);
return this;
},getDomElement:function(){return this.__cE||null;
},getNodeName:function(){return this.__cv;
},setNodeName:function(name){this.__cv=name;
},setRoot:function(m){this.__cF=m;
},useMarkup:function(S){if(this.__cE){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(ck,cO)){var T=document.createElement(cf);
}else{var T=qx.bom.Element.getHelperElement();
}T.innerHTML=S;
this.useElement(T.firstChild);
return this.__cE;
},useElement:function(bv){if(this.__cE){throw new Error("Could not overwrite existing element!");
}this.__cE=bv;
this.__cE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ee=this.getAttribute(cz);

if(ee>=1){return true;
}var ed=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ee>=0&&ed[this.__cv]){return true;
}return false;
},setSelectable:qx.core.Variant.select(ck,{"webkit":function(eo){this.setAttribute(cj,eo?cn:ci);
this.setStyle(co,eo?cE:cN);
},"gecko":function(bP){this.setAttribute(cj,bP?cn:ci);
this.setStyle(cB,bP?cL:cw);
},"default":function(bR){this.setAttribute(cj,bR?cn:ci);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__cv];
},include:function(){if(this.__cG){return;
}delete this.__cG;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cG){return;
}this.__cG=false;

if(this.__cT){this.__cT._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cG===true;
},show:function(){if(this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}if(this.__cT){this.__cT._scheduleChildrenUpdate();
}delete this.__cH;
},hide:function(){if(!this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}this.__cH=false;
},isVisible:function(){return this.__cH===true;
},scrollChildIntoViewX:function(U,V,W){var X=this.__cE;
var Y=U.getDomElement();

if(W!==false&&X&&X.offsetWidth&&Y&&Y.offsetWidth){qx.bom.element.Scroll.intoViewX(Y,X,V);
}else{this.__cI={element:U,align:V};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}delete this.__cK;
},scrollChildIntoViewY:function(by,bz,bA){var bB=this.__cE;
var bC=by.getDomElement();

if(bA!==false&&bB&&bB.offsetWidth&&bC&&bC.offsetWidth){qx.bom.element.Scroll.intoViewY(bC,bB,bz);
}else{this.__cJ={element:by,align:bz};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}delete this.__cL;
},scrollToX:function(x,dS){var dT=this.__cE;

if(dS!==true&&dT&&dT.offsetWidth){dT.scrollLeft=x;
}else{this.__cK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}delete this.__cI;
},getScrollX:function(){var dL=this.__cE;

if(dL){return dL.scrollLeft;
}return this.__cK||0;
},scrollToY:function(y,bD){var bE=this.__cE;

if(bD!==true&&bE&&bE.offsetWidth){bE.scrollTop=y;
}else{this.__cL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}delete this.__cJ;
},getScrollY:function(){var de=this.__cE;

if(de){return de.scrollTop;
}return this.__cL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cM,this.__db,this);
},enableScrolling:function(){this.removeListener(cM,this.__db,this);
},__da:null,__db:function(e){if(!this.__da){this.__da=true;
this.__cE.scrollTop=0;
this.__cE.scrollLeft=0;
delete this.__da;
}},getTextSelection:function(){var bW=this.__cE;

if(bW){return qx.bom.Selection.get(bW);
}return null;
},getTextSelectionLength:function(){var bT=this.__cE;

if(bT){return qx.bom.Selection.getLength(bT);
}return null;
},getTextSelectionStart:function(){var bV=this.__cE;

if(bV){return qx.bom.Selection.getStart(bV);
}return null;
},getTextSelectionEnd:function(){var h=this.__cE;

if(h){return qx.bom.Selection.getEnd(h);
}return null;
},setTextSelection:function(cb,cc){var cd=this.__cE;

if(cd){qx.bom.Selection.set(cd,cb,cc);
return;
}qx.html.Element.__cy[this.toHashCode()]={element:this,start:cb,end:cc};
qx.html.Element._scheduleFlush(cm);
},clearTextSelection:function(){var dY=this.__cE;

if(dY){qx.bom.Selection.clear(dY);
}delete qx.html.Element.__cy[this.toHashCode()];
},__dc:function(cS,cT){var cU=qx.html.Element._actions;
cU.push({type:cS,element:this,args:cT||[]});
qx.html.Element._scheduleFlush(cm);
},focus:function(){this.__dc(cv);
},blur:function(){this.__dc(ct);
},activate:function(){this.__dc(cC);
},deactivate:function(){this.__dc(cq);
},capture:function(H){this.__dc(cr,[H!==false]);
},releaseCapture:function(){this.__dc(cA);
},setStyle:function(d,f,g){if(!this.__cw){this.__cw={};
}
if(this.__cw[d]==f){return;
}
if(f==null){delete this.__cw[d];
}else{this.__cw[d]=f;
}if(this.__cE){if(g){qx.bom.element.Style.set(this.__cE,d,f);
return this;
}if(!this.__cM){this.__cM={};
}this.__cM[d]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}return this;
},setStyles:function(ei,ej){var ek=qx.bom.element.Style;

if(!this.__cw){this.__cw={};
}
if(this.__cE){if(!this.__cM){this.__cM={};
}
for(var en in ei){var em=ei[en];

if(this.__cw[en]==em){continue;
}
if(em==null){delete this.__cw[en];
}else{this.__cw[en]=em;
}if(ej){ek.set(this.__cE,en,em);
continue;
}this.__cM[en]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}else{for(var en in ei){var em=ei[en];

if(this.__cw[en]==em){continue;
}
if(em==null){delete this.__cw[en];
}else{this.__cw[en]=em;
}}}return this;
},removeStyle:function(bw,bx){this.setStyle(bw,null,bx);
},getStyle:function(ea){return this.__cw?this.__cw[ea]:null;
},getAllStyles:function(){return this.__cw||null;
},setAttribute:function(bI,bJ,bK){if(!this.__cx){this.__cx={};
}
if(this.__cx[bI]==bJ){return;
}
if(bJ==null){delete this.__cx[bI];
}else{this.__cx[bI]=bJ;
}if(this.__cE){if(bK){qx.bom.element.Attribute.set(this.__cE,bI,bJ);
return this;
}if(!this.__cN){this.__cN={};
}this.__cN[bI]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}return this;
},setAttributes:function(dj,dk){for(var dl in dj){this.setAttribute(dl,dj[dl],dk);
}return this;
},removeAttribute:function(eb,ec){this.setAttribute(eb,null,ec);
},getAttribute:function(bO){return this.__cx?this.__cx[bO]:null;
},_applyProperty:function(name,bL){},_setProperty:function(dU,dV,dW){if(!this.__cP){this.__cP={};
}
if(this.__cP[dU]==dV){return;
}
if(dV==null){delete this.__cP[dU];
}else{this.__cP[dU]=dV;
}if(this.__cE){if(dW){this._applyProperty(dU,dV);
return this;
}if(!this.__cO){this.__cO={};
}this.__cO[dU]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cm);
}return this;
},_removeProperty:function(a,b){this._setProperty(a,null,b);
},_getProperty:function(cV){var cW=this.__cP;

if(!cW){return null;
}var cX=cW[cV];
return cX==null?null:cX;
},addListener:function(v,w,self,z){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cl,cn)){var A=cs+v+ce+cD+this+ch;
this.assertString(v,A+cR);
this.assertFunction(w,A+cQ);

if(self!==undefined){this.assertObject(self,cg);
}
if(z!==undefined){this.assertBoolean(z,cH);
}}
if(this.__cE){return qx.event.Registration.addListener(this.__cE,v,w,self,z);
}
if(!this.__cQ){this.__cQ={};
}
if(z==null){z=false;
}var B=qx.event.Manager.getNextUniqueId();
var C=v+(z?cI:cK)+B;
this.__cQ[C]={type:v,listener:w,self:self,capture:z,unique:B};
return C;
},removeListener:function(o,p,self,q){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cl,cn)){var r=cy+o+ce+cp+this+ch;
this.assertString(o,r+cR);
this.assertFunction(p,r+cQ);

if(self!==undefined){this.assertObject(self,cg);
}
if(q!==undefined){this.assertBoolean(q,cu);
}}
if(this.__cE){qx.event.Registration.removeListener(this.__cE,o,p,self,q);
}else{var t=this.__cQ;
var s;

if(q==null){q=false;
}
for(var u in t){s=t[u];
if(s.listener===p&&s.self===self&&s.capture===q&&s.type===o){delete t[u];
break;
}}}return this;
},removeListenerById:function(dh){if(this.$$disposed){return null;
}
if(this.__cE){qx.event.Registration.removeListenerById(this.__cE,dh);
}else{delete this.__cQ[dh];
}return this;
},hasListener:function(ba,bb){if(this.$$disposed){return false;
}
if(this.__cE){return qx.event.Registration.hasListener(this.__cE,ba,bb);
}var bd=this.__cQ;
var bc;

if(bb==null){bb=false;
}
for(var be in bd){bc=bd[be];
if(bc.capture===bb&&bc.type===ba){return true;
}}return false;
}},defer:function(bg){bg.__dd=new qx.util.DeferredCall(bg.flush,bg);
},destruct:function(){var bN=this.__cE;

if(bN){qx.event.Registration.getManager(bN).removeAllListeners(bN);
bN.$$element=cP;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cF);
this.__cx=this.__cw=this.__cQ=this.__cP=this.__cN=this.__cM=this.__cO=this.__cE=this.__cT=this.__cI=this.__cJ=null;
}});
})();
(function(){var d="qx.debug",c="on",b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__jP:false,__jQ:{},__jR:0,MAX_RETRIES:10,scheduleFlush:function(l){var self=qx.ui.core.queue.Manager;
self.__jQ[l]=true;

if(!self.__jP){self.__jU.schedule();
self.__jP=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jS){return;
}self.__jS=true;
self.__jU.cancel();
var f=self.__jQ;
self.__jT(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__jP=false;
});
self.__jT(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jS=false;
});
self.__jR=0;
},__jT:qx.core.Variant.select(d,{"on":function(j,k){j();
k();
},"off":function(h,i){var self=qx.ui.core.queue.Manager;

try{h();
}catch(e){if(qx.core.Variant.isSet(d,c)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__jP=false;
self.__jS=false;
self.__jR+=1;

if(self.__jR<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__jR-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{i();
}}})},defer:function(g){g.__jU=new qx.util.DeferredCall(g.flush);
qx.html.Element._scheduleFlush=g.scheduleFlush;
qx.event.Registration.addListener(window,a,g.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(d){this._manager=d;
},members:{_getParent:function(c){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(e,event,f){var parent=e;
var q=this._manager;
var n,u;
var l;
var p,s;
var r;
var t=[];
n=q.getListeners(e,f,true);
u=q.getListeners(e,f,false);

if(n){t.push(n);
}
if(u){t.push(u);
}var parent=this._getParent(e);
var h=[];
var g=[];
var k=[];
var o=[];
while(parent!=null){n=q.getListeners(parent,f,true);

if(n){k.push(n);
o.push(parent);
}u=q.getListeners(parent,f,false);

if(u){h.push(u);
g.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=k.length-1;i>=0;i--){r=o[i];
event.setCurrentTarget(r);
l=k[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(e);

for(var i=0,v=t.length;i<v;i++){l=t[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||e;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,v=h.length;i<v;i++){r=g[i];
event.setCurrentTarget(r);
l=h[i];

for(var j=0,m=l.length;j<m;j++){p=l[j];
s=p.context||r;
p.handler.call(s,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var bm="keydown",bl="qx.client",bk="keypress",bj="NumLock",bi="keyup",bh="Enter",bg="0",bf="9",be="-",bd="PageUp",cu="+",ct="PrintScreen",cs="gecko",cr="A",cq="Z",cp="Left",co="F5",cn="Down",cm="Up",cl="F11",bt="F6",bu="useraction",br="F3",bs="keyinput",bp="Insert",bq="F8",bn="End",bo="/",bB="Delete",bC="*",bO="cmd",bK="F1",bW="F4",bR="Home",ch="F2",cc="F12",bG="PageDown",ck="F7",cj="Win",ci="F9",bF="F10",bI="Right",bJ="text",bM="Escape",bP="webkit",bS="5",bY="3",ce="Meta",bv="7",bw="CapsLock",bH="input",bV="Control",bU="Space",bT="Tab",cb="Shift",ca="Pause",bQ="Unidentified",bX="qx.event.handler.Keyboard",ba="mshtml|webkit",cd="6",bx="off",by="Apps",bL="4",bb="Alt",bc="mshtml",bE="2",bz="Scroll",bA="1",bD="8",bN="autoComplete",cg=",",cf="Backspace";
qx.Class.define(bX,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(L){qx.core.Object.call(this);
this.__fX=L;
this.__fY=L.getWindow();
if(qx.core.Variant.isSet(bl,cs)){this.__ga=this.__fY;
}else{this.__ga=this.__fY.document.documentElement;
}this.__gb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(m){if(this._identifierToKeyCodeMap[m]){return true;
}
if(m.length!=1){return false;
}
if(m>=bg&&m<=bf){return true;
}
if(m>=cr&&m<=cq){return true;
}
switch(m){case cu:case be:case bC:case bo:return true;
default:return false;
}}},members:{__gc:null,__fX:null,__fY:null,__ga:null,__gb:null,__gd:null,__ge:null,__gf:null,canHandleEvent:function(G,H){},registerEvent:function(I,J,K){},unregisterEvent:function(q,r,s){},_fireInputEvent:function(n,o){var p=this.__gg();
if(p&&p.offsetWidth!=0){var event=qx.event.Registration.createEvent(bs,qx.event.type.KeyInput,[n,p,o]);
this.__fX.dispatchEvent(p,event);
}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[bs]);
}},_fireSequenceEvent:function(h,i,j){var k=this.__gg();
var l=h.keyCode;
var event=qx.event.Registration.createEvent(i,qx.event.type.KeySequence,[h,k,j]);
this.__fX.dispatchEvent(k,event);
if(qx.core.Variant.isSet(bl,ba)){if(i==bm&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(l)&&!this._emulateKeyPress[l]){this._fireSequenceEvent(h,bk,j);
}}}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,bu,qx.event.type.Data,[i]);
}},__gg:function(){var y=this.__fX.getHandler(qx.event.handler.Focus);
var z=y.getActive();
if(!z||z.offsetWidth==0){z=y.getFocus();
}if(!z||z.offsetWidth==0){z=this.__fX.getWindow().document.body;
}return z;
},_initKeyObserver:function(){this.__gc=qx.lang.Function.listener(this.__gh,this);
this.__gf=qx.lang.Function.listener(this.__gj,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ga,bi,this.__gc);
Event.addNativeListener(this.__ga,bm,this.__gc);
Event.addNativeListener(this.__ga,bk,this.__gf);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ga,bi,this.__gc);
Event.removeNativeListener(this.__ga,bm,this.__gc);
Event.removeNativeListener(this.__ga,bk,this.__gf);

for(var B in (this.__ge||{})){var A=this.__ge[B];
Event.removeNativeListener(A.target,bk,A.callback);
}delete (this.__ge);
},__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(V){V=window.event||V;
var Y=V.keyCode;
var W=0;
var X=V.type;
if(!(this.__gb[Y]==bm&&X==bm)){this._idealKeyHandler(Y,W,X,V);
}if(X==bm){if(this._isNonPrintableKeyCode(Y)||this._emulateKeyPress[Y]){this._idealKeyHandler(Y,W,bk,V);
}}this.__gb[Y]=X;
},"gecko":function(N){var R=this._keyCodeFix[N.keyCode]||N.keyCode;
var P=0;
var Q=N.type;
if(qx.bom.client.Platform.WIN){var O=R?this._keyCodeToIdentifier(R):this._charCodeToIdentifier(P);

if(!(this.__gb[O]==bm&&Q==bm)){this._idealKeyHandler(R,P,Q,N);
}this.__gb[O]=Q;
}else{this._idealKeyHandler(R,P,Q,N);
}this.__gi(N.target,Q,R);
},"webkit":function(c){var f=0;
var d=0;
var e=c.type;
if(qx.bom.client.Engine.VERSION<525.13){if(e==bi||e==bm){f=this._charCode2KeyCode[c.charCode]||c.keyCode;
}else{if(this._charCode2KeyCode[c.charCode]){f=this._charCode2KeyCode[c.charCode];
}else{d=c.charCode;
}}this._idealKeyHandler(f,d,e,c);
}else{f=c.keyCode;
if(!(this.__gb[f]==bm&&e==bm)){this._idealKeyHandler(f,d,e,c);
}if(e==bm){if(this._isNonPrintableKeyCode(f)||this._emulateKeyPress[f]){this._idealKeyHandler(f,d,bk,c);
}}this.__gb[f]=e;
}},"opera":function(x){this.__gd=x.keyCode;
this._idealKeyHandler(x.keyCode,0,x.type,x);
}})),__gi:qx.core.Variant.select(bl,{"gecko":function(cv,cw,cx){if(cw===bm&&(cx==33||cx==34||cx==38||cx==40)&&cv.type==bJ&&cv.tagName.toLowerCase()===bH&&cv.getAttribute(bN)!==bx){if(!this.__ge){this.__ge={};
}var cz=qx.core.ObjectRegistry.toHashCode(cv);

if(this.__ge[cz]){return;
}var self=this;
this.__ge[cz]={target:cv,callback:function(w){qx.bom.Event.stopPropagation(w);
self.__gj(w);
}};
var cy=qx.event.GlobalError.observeMethod(this.__ge[cz].callback);
qx.bom.Event.addNativeListener(cv,bk,cy);
}},"default":null}),__gj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bl,{"mshtml":function(b){b=window.event||b;

if(this._charCode2KeyCode[b.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[b.keyCode],0,b.type,b);
}else{this._idealKeyHandler(0,b.keyCode,b.type,b);
}},"gecko":function(C){var F=this._keyCodeFix[C.keyCode]||C.keyCode;
var D=C.charCode;
var E=C.type;
this._idealKeyHandler(F,D,E,C);
},"webkit":function(cJ){if(qx.bom.client.Engine.VERSION<525.13){var cM=0;
var cK=0;
var cL=cJ.type;

if(cL==bi||cL==bm){cM=this._charCode2KeyCode[cJ.charCode]||cJ.keyCode;
}else{if(this._charCode2KeyCode[cJ.charCode]){cM=this._charCode2KeyCode[cJ.charCode];
}else{cK=cJ.charCode;
}}this._idealKeyHandler(cM,cK,cL,cJ);
}else{if(this._charCode2KeyCode[cJ.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cJ.keyCode],0,cJ.type,cJ);
}else{this._idealKeyHandler(0,cJ.keyCode,cJ.type,cJ);
}}},"opera":function(t){var v=t.keyCode;
var u=t.type;
if(v!=this.__gd){this._idealKeyHandler(0,this.__gd,u,t);
}else{if(this._keyCodeToIdentifierMap[t.keyCode]){this._idealKeyHandler(t.keyCode,0,t.type,t);
}else{this._idealKeyHandler(0,t.keyCode,t.type,t);
}}}})),_idealKeyHandler:function(cA,cB,cC,cD){var cE;
if(cA||(!cA&&!cB)){cE=this._keyCodeToIdentifier(cA);
this._fireSequenceEvent(cD,cC,cE);
}else{cE=this._charCodeToIdentifier(cB);
this._fireSequenceEvent(cD,bk,cE);
this._fireInputEvent(cD,cB);
}},_specialCharCodeMap:{8:cf,9:bT,13:bh,27:bM,32:bU},_emulateKeyPress:qx.core.Variant.select(bl,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:cb,17:bV,18:bb,20:bw,224:ce,37:cp,38:cm,39:bI,40:cn,33:bd,34:bG,35:bn,36:bR,45:bp,46:bB,112:bK,113:ch,114:br,115:bW,116:co,117:bt,118:ck,119:bq,120:ci,121:bF,122:cl,123:cc,144:bj,44:ct,145:bz,19:ca,91:qx.bom.client.Platform.MAC?bO:cj,92:cj,93:qx.bom.client.Platform.MAC?bO:by},_numpadToCharCode:{96:bg.charCodeAt(0),97:bA.charCodeAt(0),98:bE.charCodeAt(0),99:bY.charCodeAt(0),100:bL.charCodeAt(0),101:bS.charCodeAt(0),102:cd.charCodeAt(0),103:bv.charCodeAt(0),104:bD.charCodeAt(0),105:bf.charCodeAt(0),106:bC.charCodeAt(0),107:cu.charCodeAt(0),109:be.charCodeAt(0),110:cg.charCodeAt(0),111:bo.charCodeAt(0)},_charCodeA:cr.charCodeAt(0),_charCodeZ:cq.charCodeAt(0),_charCode0:bg.charCodeAt(0),_charCode9:bf.charCodeAt(0),_isNonPrintableKeyCode:function(a){return this._keyCodeToIdentifierMap[a]?true:false;
},_isIdentifiableKeyCode:function(g){if(g>=this._charCodeA&&g<=this._charCodeZ){return true;
}if(g>=this._charCode0&&g<=this._charCode9){return true;
}if(this._specialCharCodeMap[g]){return true;
}if(this._numpadToCharCode[g]){return true;
}if(this._isNonPrintableKeyCode(g)){return true;
}return false;
},_keyCodeToIdentifier:function(T){if(this._isIdentifiableKeyCode(T)){var U=this._numpadToCharCode[T];

if(U){return String.fromCharCode(U);
}return (this._keyCodeToIdentifierMap[T]||this._specialCharCodeMap[T]||String.fromCharCode(T));
}else{return bQ;
}},_charCodeToIdentifier:function(M){return this._specialCharCodeMap[M]||String.fromCharCode(M).toUpperCase();
},_identifierToKeyCode:function(S){return qx.event.handler.Keyboard._identifierToKeyCodeMap[S]||S.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gd=this.__fX=this.__fY=this.__ga=this.__gb=null;
},defer:function(cF,cG,cH){qx.event.Registration.addHandler(cF);
if(!cF._identifierToKeyCodeMap){cF._identifierToKeyCodeMap={};

for(var cI in cG._keyCodeToIdentifierMap){cF._identifierToKeyCodeMap[cG._keyCodeToIdentifierMap[cI]]=parseInt(cI,10);
}
for(var cI in cG._specialCharCodeMap){cF._identifierToKeyCodeMap[cG._specialCharCodeMap[cI]]=parseInt(cI,10);
}}
if(qx.core.Variant.isSet(bl,bc)){cG._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(bl,cs)){cG._keyCodeFix={12:cG._identifierToKeyCode(bj)};
}else if(qx.core.Variant.isSet(bl,bP)){if(qx.bom.client.Engine.VERSION<525.13){cG._charCode2KeyCode={63289:cG._identifierToKeyCode(bj),63276:cG._identifierToKeyCode(bd),63277:cG._identifierToKeyCode(bG),63275:cG._identifierToKeyCode(bn),63273:cG._identifierToKeyCode(bR),63234:cG._identifierToKeyCode(cp),63232:cG._identifierToKeyCode(cm),63235:cG._identifierToKeyCode(bI),63233:cG._identifierToKeyCode(cn),63272:cG._identifierToKeyCode(bB),63302:cG._identifierToKeyCode(bp),63236:cG._identifierToKeyCode(bK),63237:cG._identifierToKeyCode(ch),63238:cG._identifierToKeyCode(br),63239:cG._identifierToKeyCode(bW),63240:cG._identifierToKeyCode(co),63241:cG._identifierToKeyCode(bt),63242:cG._identifierToKeyCode(ck),63243:cG._identifierToKeyCode(bq),63244:cG._identifierToKeyCode(ci),63245:cG._identifierToKeyCode(bF),63246:cG._identifierToKeyCode(cl),63247:cG._identifierToKeyCode(cc),63248:cG._identifierToKeyCode(ct),3:cG._identifierToKeyCode(bh),12:cG._identifierToKeyCode(bj),13:cG._identifierToKeyCode(bh)};
}else{cG._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var u="qx.client",t="mouseup",s="click",r="mousedown",q="contextmenu",p="mousewheel",o="dblclick",n="mshtml",m="mouseover",l="mouseout",g="DOMMouseScroll",k="mousemove",j="on",f="mshtml|webkit|opera",e="useraction",i="gecko|webkit",h="qx.event.handler.Mouse";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dS=d;
this.__dT=d.getWindow();
this.__dU=this.__dT.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__dS:null,__dT:null,__dU:null,canHandleEvent:function(U,V){},registerEvent:qx.bom.client.System.IPHONE?
function(a,b,c){a[j+b]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(N,O,P){N[j+O]=undefined;
}:qx.lang.Function.returnNull,__eb:function(C,D,E){if(!E){E=C.target||C.srcElement;
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==p?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,e,qx.event.type.Data,[D||C.type]);
},_initButtonObserver:function(){this.__dV=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,r,this.__dV);
Event.addNativeListener(this.__dU,t,this.__dV);
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,o,this.__dV);
Event.addNativeListener(this.__dU,q,this.__dV);
},_initMoveObserver:function(){this.__dW=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,k,this.__dW);
Event.addNativeListener(this.__dU,m,this.__dW);
Event.addNativeListener(this.__dU,l,this.__dW);
},_initWheelObserver:function(){this.__dX=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(u,f)?p:g;
var T=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.addNativeListener(T,S,this.__dX);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,r,this.__dV);
Event.removeNativeListener(this.__dU,t,this.__dV);
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,o,this.__dV);
Event.removeNativeListener(this.__dU,q,this.__dV);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,k,this.__dW);
Event.removeNativeListener(this.__dU,m,this.__dW);
Event.removeNativeListener(this.__dU,l,this.__dW);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var Q=qx.core.Variant.isSet(u,f)?p:g;
var R=qx.core.Variant.isSet(u,n)?this.__dU:this.__dT;
Event.removeNativeListener(R,Q,this.__dX);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(y){this.__eb(y);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(J){var K=J.type;
var L=J.target||J.srcElement;
if(qx.core.Variant.isSet(u,i)){if(L&&L.nodeType==3){L=L.parentNode;
}}
if(this.__ec){this.__ec(J,K,L);
}
if(this.__ee){this.__ee(J,K,L);
}this.__eb(J,K,L);

if(this.__ed){this.__ed(J,K,L);
}
if(this.__ef){this.__ef(J,K,L);
}this.__dY=K;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(M){this.__eb(M,p);
}),__ec:qx.core.Variant.select(u,{"webkit":function(z,A,B){if(qx.bom.client.Engine.VERSION<530){if(A==q){this.__eb(z,t,B);
}}},"default":null}),__ed:qx.core.Variant.select(u,{"opera":function(F,G,H){if(G==t&&F.button==2){this.__eb(F,q,H);
}},"default":null}),__ee:qx.core.Variant.select(u,{"mshtml":function(v,w,x){if(w==t&&this.__dY==s){this.__eb(v,r,x);
}else if(w==o){this.__eb(v,s,x);
}},"default":null}),__ef:qx.core.Variant.select(u,{"mshtml":null,"default":function(W,X,Y){switch(X){case r:this.__ea=Y;
break;
case t:if(Y!==this.__ea){var ba=qx.dom.Hierarchy.getCommonParent(Y,this.__ea);
this.__eb(W,s,ba);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dS=this.__dT=this.__dU=this.__ea=null;
},defer:function(I){qx.event.Registration.addHandler(I);
}});
})();
(function(){var b="qx.event.handler.Capture";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Ctrl",d="Shift",c="mousemove",b="move",a="mouseover",A="Alt",z="keyup",y="mouseup",x="dragend",w="on",v="mousedown",u="qxDraggable",t="drag",s="drop",r="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(Y){qx.core.Object.call(this);
this.__ig=Y;
this.__ih=Y.getWindow().document.documentElement;
this.__ig.addListener(this.__ih,v,this._onMouseDown,this);
this.__it();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:false,__ir:0,__is:0,canHandleEvent:function(W,X){},registerEvent:function(ba,bb,bc){},unregisterEvent:function(bi,bj,bk){},addType:function(bl){this.__ik[bl]=true;
},addAction:function(P){this.__il[P]=true;
},supportsType:function(bh){return !!this.__ik[bh];
},supportsAction:function(B){return !!this.__il[B];
},getData:function(F){if(!this.__iA||!this.__ii){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ik[F]){throw new Error("Unsupported data type: "+F+"!");
}
if(!this.__in[F]){this.__io=F;
this.__iv(q,this.__ij,this.__ii,false);
}
if(!this.__in[F]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__in[F]||null;
},getCurrentAction:function(){return this.__ip;
},addData:function(Q,R){this.__in[Q]=R;
},getCurrentType:function(){return this.__io;
},isSessionActive:function(){return this.__iq;
},__it:function(){this.__ik={};
this.__il={};
this.__im={};
this.__in={};
},__iu:function(){if(this.__ij==null){return;
}var E=this.__il;
var C=this.__im;
var D=null;

if(this.__iA){if(C.Shift&&C.Ctrl&&E.alias){D=k;
}else if(C.Shift&&C.Alt&&E.copy){D=j;
}else if(C.Shift&&E.move){D=b;
}else if(C.Alt&&E.alias){D=k;
}else if(C.Ctrl&&E.copy){D=j;
}else if(E.move){D=b;
}else if(E.copy){D=j;
}else if(E.alias){D=k;
}}
if(D!=this.__ip){this.__ip=D;
this.__iv(o,this.__ij,this.__ii,false);
}},__iv:function(I,J,K,L,M){var O=qx.event.Registration;
var N=O.createEvent(I,qx.event.type.Drag,[L,M]);

if(J!==K){N.setRelatedTarget(K);
}return O.dispatchEvent(J,N);
},__iw:function(bm){while(bm&&bm.nodeType==1){if(bm.getAttribute(u)==w){return bm;
}bm=bm.parentNode;
}return null;
},__ix:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(r)==w){return bg;
}bg=bg.parentNode;
}return null;
},__iy:function(){this.__ij=null;
this.__ig.removeListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.removeListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__it();
},__iz:function(){if(this.__iq){this.__ig.removeListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.removeListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.removeListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.removeListener(this.__ih,z,this._onKeyUp,this,true);
this.__iv(x,this.__ij,this.__ii,false);
this.__iq=false;
}this.__iA=false;
this.__ii=null;
this.__iy();
},__iA:false,_onWindowBlur:function(e){this.__iz();
},_onKeyDown:function(e){var S=e.getKeyIdentifier();

switch(S){case A:case f:case d:if(!this.__im[S]){this.__im[S]=true;
this.__iu();
}}},_onKeyUp:function(e){var G=e.getKeyIdentifier();

switch(G){case A:case f:case d:if(this.__im[G]){this.__im[G]=false;
this.__iu();
}}},_onMouseDown:function(e){if(this.__iq){return;
}var H=this.__iw(e.getTarget());

if(H){this.__ir=e.getDocumentLeft();
this.__is=e.getDocumentTop();
this.__ij=H;
this.__ig.addListener(this.__ih,c,this._onMouseMove,this,true);
this.__ig.addListener(this.__ih,y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__iA){this.__iv(s,this.__ii,this.__ij,false,e);
}if(this.__iq){e.stopPropagation();
}this.__iz();
},_onMouseMove:function(e){if(this.__iq){if(!this.__iv(t,this.__ij,this.__ii,true,e)){this.__iz();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ir)>3||Math.abs(e.getDocumentTop()-this.__is)>3){if(this.__iv(n,this.__ij,this.__ii,true,e)){this.__iq=true;
this.__ig.addListener(this.__ih,a,this._onMouseOver,this,true);
this.__ig.addListener(this.__ih,h,this._onMouseOut,this,true);
this.__ig.addListener(this.__ih,g,this._onKeyDown,this,true);
this.__ig.addListener(this.__ih,z,this._onKeyUp,this,true);
var bf=this.__im;
bf.Ctrl=e.isCtrlPressed();
bf.Shift=e.isShiftPressed();
bf.Alt=e.isAltPressed();
this.__iu();
}else{this.__iv(x,this.__ij,this.__ii,false);
this.__iy();
}}}},_onMouseOver:function(e){var bd=e.getTarget();
var be=this.__ix(bd);

if(be&&be!=this.__ii){this.__iA=this.__iv(m,be,this.__ij,true,e);
this.__ii=be;
this.__iu();
}},_onMouseOut:function(e){var V=this.__ix(e.getTarget());
var U=this.__ix(e.getRelatedTarget());

if(V&&V!==U&&V==this.__ii){this.__iv(l,this.__ii,U,false,e);
this.__ii=null;
this.__iA=false;
qx.event.Timer.once(this.__iu,this,0);
}}},destruct:function(){this.__ij=this.__ii=this.__ig=this.__ih=this.__ik=this.__il=this.__im=this.__in=null;
},defer:function(T){qx.event.Registration.addHandler(T);
}});
})();
(function(){var h="-",g="qx.event.handler.Element";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(n){qx.core.Object.call(this);
this._manager=n;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(v,w){},registerEvent:function(a,b,c){var f=qx.core.ObjectRegistry.toHashCode(a);
var d=f+h+b;
var e=qx.lang.Function.listener(this._onNative,this,d);
qx.bom.Event.addNativeListener(a,b,e);
this._registeredEvents[d]={element:a,type:b,listener:e};
},unregisterEvent:function(o,p,q){var t=this._registeredEvents;

if(!t){return;
}var u=qx.core.ObjectRegistry.toHashCode(o);
var r=u+h+p;
var s=this._registeredEvents[r];

if(s){qx.bom.Event.removeNativeListener(o,p,s.listener);
}delete this._registeredEvents[r];
},_onNative:qx.event.GlobalError.observeMethod(function(j,k){var m=this._registeredEvents;

if(!m){return;
}var l=m[k];
qx.event.Registration.fireNonBubblingEvent(l.element,l.type,qx.event.type.Native,[j]);
})},destruct:function(){var x;
var y=this._registeredEvents;

for(var z in y){x=y[z];
qx.bom.Event.removeNativeListener(x.element,x.type,x.listener);
}this._manager=this._registeredEvents=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var e="qx.event.handler.Appear",d="disappear",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__bM=k;
this.__bN={};
qx.event.handler.Appear.__bO[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bO:{},refresh:function(){var w=this.__bO;

for(var x in w){w[x].refresh();
}}},members:{__bM:null,__bN:null,canHandleEvent:function(a,b){},registerEvent:function(l,m,n){var o=qx.core.ObjectRegistry.toHashCode(l)+m;
var p=this.__bN;

if(p&&!p[o]){p[o]=l;
l.$$displayed=l.offsetWidth>0;
}},unregisterEvent:function(r,s,t){var u=qx.core.ObjectRegistry.toHashCode(r)+s;
var v=this.__bN;

if(!v){return;
}
if(v[u]){delete v[u];
}},refresh:function(){var i=this.__bN;
var j;

for(var h in i){j=i[h];
var f=j.offsetWidth>0;

if((!!j.$$displayed)!==f){j.$$displayed=f;
var g=qx.event.Registration.createEvent(f?c:d);
this.__bM.dispatchEvent(j,g);
}}}},destruct:function(){this.__bM=this.__bN=null;
delete qx.event.handler.Appear.__bO[this.$$hash];
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var o="mshtml",n="",m="qx.client",k=">",h=" ",g="<",f="='",e="none",d="qx.bom.Element",c="' ",a="div",b="></";
qx.Class.define(d,{statics:{__jt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__ju:{},getHelperElement:function(z){if(!z){z=window;
}var B=z.location.href;

if(!qx.bom.Element.__ju[B]){var A=qx.bom.Element.__ju[B]=z.document.createElement(a);
if(qx.bom.client.Engine.WEBKIT){A.style.display=e;
z.document.body.appendChild(A);
}}return qx.bom.Element.__ju[B];
},create:function(name,G,H){if(!H){H=window;
}
if(!name){throw new Error("The tag name is missing!");
}var J=this.__jt;
var I=n;

for(var L in G){if(J[L]){I+=L+f+G[L]+c;
}}var M;
if(I!=n){if(qx.bom.client.Engine.MSHTML){M=H.document.createElement(g+name+h+I+k);
}else{var K=qx.bom.Element.getHelperElement(H);
K.innerHTML=g+name+h+I+b+name+k;
M=K.firstChild;
}}else{M=H.document.createElement(name);
}
for(var L in G){if(!J[L]){qx.bom.element.Attribute.set(M,L,G[L]);
}}return M;
},empty:function(bf){return bf.innerHTML=n;
},addListener:function(v,w,x,self,y){return qx.event.Registration.addListener(v,w,x,self,y);
},removeListener:function(p,q,r,self,s){return qx.event.Registration.removeListener(p,q,r,self,s);
},removeListenerById:function(ba,bb){return qx.event.Registration.removeListenerById(ba,bb);
},hasListener:function(D,E,F){return qx.event.Registration.hasListener(D,E,F);
},focus:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).focus(bg);
},blur:function(be){qx.event.Registration.getManager(be).getHandler(qx.event.handler.Focus).blur(be);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(C){qx.event.Registration.getManager(C).getHandler(qx.event.handler.Focus).deactivate(C);
},capture:function(t,u){qx.event.Registration.getManager(t).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(t,u);
},releaseCapture:function(bd){qx.event.Registration.getManager(bd).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bd);
},clone:function(N,O){var R;

if(O||(qx.core.Variant.isSet(m,o)&&!qx.xml.Document.isXmlDocument(N))){var V=qx.event.Registration.getManager(N);
var P=qx.dom.Hierarchy.getDescendants(N);
P.push(N);
}if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],false);
}}var R=N.cloneNode(true);
if(qx.core.Variant.isSet(m,o)){for(var i=0,l=P.length;i<l;i++){V.toggleAttachedEvents(P[i],true);
}}if(O===true){var Y=qx.dom.Hierarchy.getDescendants(R);
Y.push(R);
var Q,T,X,S;

for(var i=0,W=P.length;i<W;i++){X=P[i];
Q=V.serializeListeners(X);

if(Q.length>0){T=Y[i];

for(var j=0,U=Q.length;j<U;j++){S=Q[j];
V.addListener(T,S.type,S.handler,S.self,S.capture);
}}}}return R;
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
(function(){var bf="qx.client",be="blur",bd="focus",bc="mousedown",bb="on",ba="mouseup",Y="DOMFocusOut",X="DOMFocusIn",W="selectstart",V="onmousedown",bz="onfocusout",by="onfocusin",bx="onmouseup",bw="onselectstart",bv="draggesture",bu="qx.event.handler.Focus",bt="_applyFocus",bs="deactivate",br="textarea",bq="_applyActive",bm="input",bn="focusin",bk="qxSelectable",bl="tabIndex",bi="off",bj="activate",bg="mshtml",bh="focusout",bo="qxKeepFocus",bp="qxKeepActive";
qx.Class.define(bu,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this._manager=s;
this._window=s.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bq,nullable:true},focus:{apply:bt,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,canHandleEvent:function(S,T){},registerEvent:function(J,K,L){},unregisterEvent:function(bL,bM,bN){},focus:function(U){if(qx.core.Variant.isSet(bf,bg)){window.setTimeout(function(){try{U.focus();
}catch(a){}},0);
}else{try{U.focus();
}catch(Q){}}this.setFocus(U);
this.setActive(U);
},activate:function(bJ){this.setActive(bJ);
},blur:function(bK){try{bK.blur();
}catch(w){}
if(this.getActive()===bK){this.resetActive();
}
if(this.getFocus()===bK){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(bF){var bG=this.__jc(bF);

if(bG){this.setActive(bG);
}},__iN:function(l,m,n,o){var q=qx.event.Registration;
var p=q.createEvent(n,qx.event.type.Focus,[l,m,o]);
q.dispatchEvent(l,p);
},_windowFocused:true,__iO:function(){if(this._windowFocused){this._windowFocused=false;
this.__iN(this._window,null,be,false);
}},__iP:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iN(this._window,null,bd,false);
}},_initObserver:qx.core.Variant.select(bf,{"gecko":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iH=qx.lang.Function.listener(this.__iQ,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
this._window.addEventListener(bv,this.__iH,true);
},"mshtml":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.attachEvent(V,this.__iD);
this._document.attachEvent(bx,this.__iE);
this._document.attachEvent(by,this.__iJ);
this._document.attachEvent(bz,this.__iK);
this._document.attachEvent(bw,this.__iI);
},"webkit":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._document.addEventListener(W,this.__iI,false);
this._window.addEventListener(Y,this.__iK,true);
this._window.addEventListener(bd,this.__iF,true);
this._window.addEventListener(be,this.__iG,true);
},"opera":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this._document.addEventListener(bc,this.__iD,true);
this._document.addEventListener(ba,this.__iE,true);
this._window.addEventListener(X,this.__iJ,true);
this._window.addEventListener(Y,this.__iK,true);
}}),_stopObserver:qx.core.Variant.select(bf,{"gecko":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(ba,this.__iE,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
this._window.removeEventListener(bv,this.__iH,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,V,this.__iD);
qx.bom.Event.removeNativeListener(this._document,bx,this.__iE);
qx.bom.Event.removeNativeListener(this._document,by,this.__iJ);
qx.bom.Event.removeNativeListener(this._document,bz,this.__iK);
qx.bom.Event.removeNativeListener(this._document,bw,this.__iI);
},"webkit":function(){this._document.removeEventListener(bc,this.__iD,true);
this._document.removeEventListener(W,this.__iI,false);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
},"opera":function(){this._document.removeEventListener(bc,this.__iD,true);
this._window.removeEventListener(X,this.__iJ,true);
this._window.removeEventListener(Y,this.__iK,true);
this._window.removeEventListener(bd,this.__iF,true);
this._window.removeEventListener(be,this.__iG,true);
}}),__iQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(!this.__jd(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){this.__iP();
var O=e.srcElement;
var N=this.__jb(O);

if(N){this.setFocus(N);
}this.tryActivate(O);
},"opera":function(e){var bI=e.target;

if(bI==this._document||bI==this._window){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(bI);
this.tryActivate(bI);
if(!this.__jd(bI)){bI.selectionStart=0;
bI.selectionEnd=0;
}}},"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){if(!e.toElement){this.__iO();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bE=e.target;

if(bE===this.getFocus()){this.resetFocus();
}
if(bE===this.getActive()){this.resetActive();
}},"opera":function(e){var B=e.target;

if(B==this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(B===this.getFocus()){this.resetFocus();
}
if(B===this.getActive()){this.resetActive();
}}},"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bH=e.target;

if(bH===this._window||bH===this._document){this.__iP();
bH=this._body;
}this.setFocus(bH);
this.tryActivate(bH);
},"webkit":function(e){var M=e.target;

if(M===this._window||M===this._document){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(M);
this.tryActivate(M);
}},"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"gecko":function(e){var bA=this.__jb(e.target);

if(!bA){qx.bom.Event.preventDefault(e);
}else if(bA===this._body){this.setFocus(bA);
}},"mshtml":function(e){var y=e.srcElement;
var x=this.__jb(y);

if(x){if(!this.__jd(y)){y.unselectable=bb;
try{document.selection.empty();
}catch(e){}try{x.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jd(y)){y.unselectable=bb;
}}},"webkit":function(e){var A=e.target;
var z=this.__jb(A);

if(z){this.setFocus(z);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__jb(I);

if(!this.__jd(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null})),__iW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml":function(e){var r=e.srcElement;

if(r.unselectable){r.unselectable=bi;
}this.tryActivate(this.__iX(r));
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(this.__iX(e.target));
},"default":null})),__iX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(h){var i=this.getFocus();

if(i&&h!=i&&(i.nodeName.toLowerCase()===bm||i.nodeName.toLowerCase()===br)){h=i;
}return h;
},"default":function(F){return F;
}})),__iY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bf,{"mshtml|webkit":function(e){var P=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jd(P)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ja:function(b){var c=qx.bom.element.Attribute.get(b,bl);

if(c>=1){return true;
}var d=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(c>=0&&d[b.tagName]){return true;
}return false;
},__jb:function(bB){while(bB&&bB.nodeType===1){if(bB.getAttribute(bo)==bb){return null;
}
if(this.__ja(bB)){return bB;
}bB=bB.parentNode;
}return this._body;
},__jc:function(bC){var bD=bC;

while(bC&&bC.nodeType===1){if(bC.getAttribute(bp)==bb){return null;
}bC=bC.parentNode;
}return bD;
},__jd:function(u){while(u&&u.nodeType===1){var v=u.getAttribute(bk);

if(v!=null){return v===bb;
}u=u.parentNode;
}return true;
},_applyActive:function(j,k){if(k){this.__iN(k,j,bs,true);
}
if(j){this.__iN(j,k,bj,true);
}},_applyFocus:function(f,g){if(g){this.__iN(g,f,bh,true);
}
if(f){this.__iN(f,g,bn,true);
}if(g){this.__iN(g,f,be,false);
}
if(f){this.__iN(f,g,bd,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__je=null;
},defer:function(C){qx.event.Registration.addHandler(C);
var D=C.FOCUSABLE_ELEMENTS;

for(var E in D){D[E.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var n="",m="undefined",l="qx.client",k="readOnly",j="accessKey",i="qx.bom.element.Attribute",h="rowSpan",g="vAlign",f="className",e="textContent",C="'",B="htmlFor",A="longDesc",z="cellSpacing",y="frameBorder",x="='",w="useMap",v="innerText",u="innerHTML",t="tabIndex",r="dateTime",s="maxLength",p="mshtml",q="cellPadding",o="colSpan";
qx.Class.define(i,{statics:{__gk:{names:{"class":f,"for":B,html:u,text:qx.core.Variant.isSet(l,p)?v:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:t,maxlength:s,readonly:k,longdesc:A,cellpadding:q,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Variant.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__gk.runtime;

for(var c in a){if(!d[c]){b.push(c,x,a[c],C);
}}return b.join(n);
},get:qx.core.Variant.select(l,{"mshtml":function(K,name){var M=this.__gk;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==m&&L==M.propertyDefault[name]){if(typeof M.bools[name]===m){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(E,name){var G=this.__gk;
var F;
name=G.names[name]||name;
if(G.property[name]){F=E[name];

if(typeof G.propertyDefault[name]!==m&&F==G.propertyDefault[name]){if(typeof G.bools[name]===m){return null;
}else{return F;
}}}else{F=E.getAttribute(name);
}if(G.bools[name]){return !!F;
}return F;
}}),set:function(H,name,I){var J=this.__gk;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]&&(!(H[name]===undefined)||J.qxProperties[name])){if(I==null){if(J.removeableProperties[name]){H.removeAttribute(name);
return;
}else if(typeof J.propertyDefault[name]!==m){I=J.propertyDefault[name];
}}H[name]=I;
}else{if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else{H.setAttribute(name,I);
}}},reset:function(D,name){this.set(D,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(j,k){var k=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,j,k);
k.button=j.button;
k.clientX=j.clientX;
k.clientY=j.clientY;
k.pageX=j.pageX;
k.pageY=j.pageY;
k.screenX=j.screenX;
k.screenY=j.screenY;
k.wheelDelta=j.wheelDelta;
k.detail=j.detail;
k.srcElement=j.srcElement;
return k;
},__jq:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__jq[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(l);
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
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientWidth;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientWidth:l.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(e){if(qx.bom.client.Engine.VERSION<9.5){return (e||window).document.body.clientHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"webkit":function(o){if(qx.bom.client.Engine.VERSION<523.15){return (o||window).innerHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientHeight:r.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(n){return (n||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(i){var j=(i||window).document;
return j.documentElement.scrollTop||j.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return (k||window).document.documentMode===5;
}else{return (k||window).document.compatMode!==f;
}},"webkit":function(m){if(document.compatMode===undefined){var n=(m||window).document.createElement(a);
n.style.cssText=e;
return n.style.width===c?true:false;
}else{return (m||window).document.compatMode!==f;
}},"default":function(l){return (l||window).document.compatMode!==f;
}}),isStandardMode:function(j){return !this.isQuirksMode(j);
},getWidth:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getWidth(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollWidth:h.body.scrollWidth;
return Math.max(scroll,i);
},getHeight:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getHeight(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollHeight:p.body.scrollHeight;
return Math.max(scroll,q);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ko:function(z){var A=navigator.userAgent;
var C=new RegExp(s+z+d);
var D=A.match(C);

if(!D){return;
}var name=D[1].toLowerCase();
var B=D[3];
if(A.match(/Version(\/| )([0-9]+\.[0-9])/)){B=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(A.indexOf(a)!==-1||A.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
B=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=B;
this.VERSION=parseFloat(B,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__ko(o);
},"gecko":function(E){E.__ko(k);
},"mshtml":function(F){F.__ko(v);
},"opera":function(y){y.__ko(p);
}})});
})();
(function(){var N="qx.client",M="qx.dom.Hierarchy",L="previousSibling",K="*",J="nextSibling",I="parentNode";
qx.Class.define(M,{statics:{getNodeIndex:function(O){var P=0;

while(O&&(O=O.previousSibling)){P++;
}return P;
},getElementIndex:function(D){var E=0;
var F=qx.dom.Node.ELEMENT;

while(D&&(D=D.previousSibling)){if(D.nodeType==F){E++;
}}return E;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(T){while(T&&(T=T.previousSibling)&&!qx.dom.Node.isElement(T)){continue;
}return T||null;
},contains:qx.core.Variant.select(N,{"webkit|mshtml|opera":function(t,u){if(qx.dom.Node.isDocument(t)){var v=qx.dom.Node.getDocument(u);
return t&&v==t;
}else if(qx.dom.Node.isDocument(u)){return false;
}else{return t.contains(u);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(a,b){while(b){if(a==b){return true;
}b=b.parentNode;
}return false;
}}),isRendered:function(U){if(!U.offsetParent){return false;
}var V=U.ownerDocument||U.document;
if(V.body.contains){return V.body.contains(U);
}if(V.compareDocumentPosition){return !!(V.compareDocumentPosition(U)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Variant.select(N,{"mshtml|opera":function(o,p){if(o===p){return o;
}
while(o&&qx.dom.Node.isElement(o)){if(o.contains(p)){return o;
}o=o.parentNode;
}return null;
},"default":function(e,f){if(e===f){return e;
}var g={};
var j=qx.core.ObjectRegistry;
var i,h;

while(e||f){if(e){i=j.toHashCode(e);

if(g[i]){return g[i];
}g[i]=e;
e=e.parentNode;
}
if(f){h=j.toHashCode(f);

if(g[h]){return g[h];
}g[h]=f;
f=f.parentNode;
}}return null;
}}),getAncestors:function(n){return this._recursivelyCollect(n,I);
},getChildElements:function(c){c=c.firstChild;

if(!c){return [];
}var d=this.getNextSiblings(c);

if(c.nodeType===1){d.unshift(c);
}return d;
},getDescendants:function(S){return qx.lang.Array.fromCollection(S.getElementsByTagName(K));
},getFirstDescendant:function(l){l=l.firstChild;

while(l&&l.nodeType!=1){l=l.nextSibling;
}return l;
},getLastDescendant:function(C){C=C.lastChild;

while(C&&C.nodeType!=1){C=C.previousSibling;
}return C;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,L);
},getNextSiblings:function(m){return this._recursivelyCollect(m,J);
},_recursivelyCollect:function(x,y){var z=[];

while(x=x[y]){if(x.nodeType==1){z.push(x);
}}return z;
},getSiblings:function(G){return this.getPreviousSiblings(G).reverse().concat(this.getNextSiblings(G));
},isEmpty:function(w){w=w.firstChild;

while(w){if(w.nodeType===qx.dom.Node.ELEMENT||w.nodeType===qx.dom.Node.TEXT){return false;
}w=w.nextSibling;
}return true;
},cleanWhitespace:function(q){var r=q.firstChild;

while(r){var s=r.nextSibling;

if(r.nodeType==3&&!/\S/.test(r.nodeValue)){q.removeChild(r);
}r=s;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f){qx.event.type.Event.prototype.init.call(this,true,e);

if(f){this._native=f.getNativeEvent()||null;
this._originalTarget=f.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var i=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(i);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var d=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(d);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(g){this.getManager().addType(g);
},addAction:function(n){this.getManager().addAction(n);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(o){return this.getManager().supportsAction(o);
},addData:function(j,k){this.getManager().addData(j,k);
},getData:function(h){return this.getManager().getData(h);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var j="losecapture",i="qx.client",h="blur",g="focus",f="click",e="qx.event.dispatch.MouseCapture",d="capture",c="scroll";
qx.Class.define(e,{extend:qx.event.dispatch.AbstractBubbling,construct:function(n,o){qx.event.dispatch.AbstractBubbling.call(this,n);
this.__fD=n.getWindow();
this.__fE=o;
n.addListener(this.__fD,h,this.releaseCapture,this);
n.addListener(this.__fD,g,this.releaseCapture,this);
n.addListener(this.__fD,c,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fE:null,__fF:null,__fG:true,__fD:null,_getParent:function(t){return t.parentNode;
},canDispatchEvent:function(k,event,l){return (this.__fF&&this.__fH[l]);
},dispatchEvent:function(p,event,q){if(q==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fG||!qx.dom.Hierarchy.contains(this.__fF,p)){p=this.__fF;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,q);
},__fH:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(r,s){var s=s!==false;

if(this.__fF===r&&this.__fG==s){return;
}
if(this.__fF){this.releaseCapture();
}this.nativeSetCapture(r,s);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(r,j,function(){qx.bom.Event.removeNativeListener(r,j,arguments.callee);
self.releaseCapture();
});
}this.__fG=s;
this.__fF=r;
this.__fE.fireEvent(r,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fF;
},releaseCapture:function(){var u=this.__fF;

if(!u){return;
}this.__fF=null;
this.__fE.fireEvent(u,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fF=this.__fD=this.__fE=null;
},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
v.setProperty(n,b);

if(u){var w=h;
w+=u;

if(t){w+=f+t+o;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,e);
}})},defer:function(z){if(qx.core.Variant.isSet(r,p)){var A=[a,j];
var B=[c,g];

for(var i=0,l=A.length;i<l;i++){try{new ActiveXObject(A[i]);
new ActiveXObject(B[i]);
}catch(C){continue;
}z.DOMDOC=A[i];
z.XMLHTTP=B[i];
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
(function(){var bp="",bo="qx.client",bn="hidden",bm="-moz-scrollbars-none",bl="overflow",bk=";",bj="overflowY",bi=":",bh="overflowX",bg="overflow:",bB="none",bA="scroll",bz="borderLeftStyle",by="borderRightStyle",bx="div",bw="borderRightWidth",bv="overflow-y",bu="borderLeftWidth",bt="-moz-scrollbars-vertical",bs="100px",bq="qx.bom.element.Overflow",br="overflow-x";
qx.Class.define(bq,{statics:{__jv:null,getScrollbarWidth:function(){if(this.__jv!==null){return this.__jv;
}var g=qx.bom.element.Style;
var i=function(bI,bJ){return parseInt(g.get(bI,bJ))||0;
};
var j=function(a){return (g.get(a,by)==bB?0:i(a,bw));
};
var h=function(ca){return (g.get(ca,bz)==bB?0:i(ca,bu));
};
var l=qx.core.Variant.select(bo,{"mshtml":function(cf){if(g.get(cf,bj)==bn||cf.clientWidth==0){return j(cf);
}return Math.max(0,cf.offsetWidth-cf.clientLeft-cf.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=g.get(o,bl);
var q=(p==bA||p==bt?16:0);
return Math.max(0,j(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-h(o)));
}});
var k=function(bM){return l(bM)-j(bM);
};
var t=document.createElement(bx);
var s=t.style;
s.height=s.width=bs;
s.overflow=bA;
document.body.appendChild(t);
var c=k(t);
this.__jv=c?c:16;
document.body.removeChild(t);
return this.__jv;
},_compile:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(T,U){if(U==bn){U=bm;
}return bg+U+bk;
}:
function(cd,ce){return cd+bi+ce+bk;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bT,bU){return bg+bU+bk;
}:
function(D,E){return D+bi+E+bk;
},"default":function(bN,bO){return bN+bi+bO+bk;
}}),compileX:function(bV){return this._compile(br,bV);
},compileY:function(V){return this._compile(bv,V);
},getX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(K,L){var M=qx.bom.element.Style.get(K,bl,L,false);

if(M===bm){M=bn;
}return M;
}:
function(bE,bF){return qx.bom.element.Style.get(bE,bh,bF,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(P,Q){return qx.bom.element.Style.get(P,bl,Q,false);
}:
function(cb,cc){return qx.bom.element.Style.get(cb,bh,cc,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bh,d,false);
}}),setX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(v,w){if(w==bn){w=bm;
}v.style.overflow=w;
}:
function(bR,bS){bR.style.overflowX=bS;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(z,A){z.style.overflow=A;
}:
function(e,f){e.style.overflowX=f;
},"default":function(G,H){G.style.overflowX=H;
}}),resetX:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bC){bC.style.overflow=bp;
}:
function(F){F.style.overflowX=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bG,bH){bG.style.overflow=bp;
}:
function(R,S){R.style.overflowX=bp;
},"default":function(bb){bb.style.overflowX=bp;
}}),getY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bW,bX){var bY=qx.bom.element.Style.get(bW,bl,bX,false);

if(bY===bm){bY=bn;
}return bY;
}:
function(bP,bQ){return qx.bom.element.Style.get(bP,bj,bQ,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(x,y){return qx.bom.element.Style.get(x,bl,y,false);
}:
function(B,C){return qx.bom.element.Style.get(B,bj,C,false);
},"default":function(N,O){return qx.bom.element.Style.get(N,bj,O,false);
}}),setY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bc,bd){if(bd===bn){bd=bm;
}bc.style.overflow=bd;
}:
function(Y,ba){Y.style.overflowY=ba;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(m,n){m.style.overflow=n;
}:
function(be,bf){be.style.overflowY=bf;
},"default":function(W,X){W.style.overflowY=X;
}}),resetY:qx.core.Variant.select(bo,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bp;
}:
function(r){r.style.overflowY=bp;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(I,J){I.style.overflow=bp;
}:
function(bK,bL){bK.style.overflowY=bp;
},"default":function(bD){bD.style.overflowY=bp;
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
},get:function(p,q){var s=qx.bom.element.Style.get(p,c,q,false);
var x,top,v,u;
var r,t;

if(typeof s===e&&s!==n&&s!==h){s=qx.lang.String.trim(s);
if(/\((.*)\)/.test(s)){var w=RegExp.$1.split(l);
top=qx.lang.String.trim(w[0]);
r=qx.lang.String.trim(w[1]);
t=qx.lang.String.trim(w[2]);
x=qx.lang.String.trim(w[3]);
if(x===n){x=null;
}
if(top===n){top=null;
}
if(r===n){r=null;
}
if(t===n){t=null;
}if(top!=null){top=parseInt(top,10);
}
if(r!=null){r=parseInt(r,10);
}
if(t!=null){t=parseInt(t,10);
}
if(x!=null){x=parseInt(x,10);
}if(r!=null&&x!=null){v=r-x;
}else if(r!=null){v=r;
}
if(t!=null&&top!=null){u=t-top;
}else if(t!=null){u=t;
}}else{throw new Error("Could not parse clip string: "+s);
}}return {left:x||null,top:top||null,width:v||null,height:u||null};
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
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__eg:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(a){return g+(this.__eg[a]||a)+e;
},get:function(o,p){return qx.bom.element.Style.get(o,c,p,false);
},set:function(m,n){m.style.cursor=this.__eg[n]||n;
},reset:function(q){q.style.cursor=h;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(v){if(v>=1){return m;
}
if(v<0.00001){v=0;
}return d+(v*100)+f;
},"gecko":function(C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+C+k;
}else{return i+C+k;
}},"default":function(B){if(B==1){return m;
}return i+B+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(E,F){var G=qx.bom.element.Style.get(E,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(F>=1){E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(F<0.00001){F=0;
}if(!E.currentStyle||!E.currentStyle.hasLayout){E.style.zoom=1;
}E.style.filter=G.replace(/alpha\([^\)]*\)/gi,m)+c+F*100+e;
},"gecko":function(H,I){if(I==1){I=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=I;
}else{H.style.opacity=I;
}},"default":function(w,x){if(x==1){x=m;
}w.style.opacity=x;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(J){var K=qx.bom.element.Style.get(J,j,qx.bom.element.Style.COMPUTED_MODE,false);
J.style.filter=K.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(u){if(qx.bom.client.Engine.VERSION<1.7){u.style.MozOpacity=m;
}else{u.style.opacity=m;
}},"default":function(D){D.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(n,o){var p=qx.bom.element.Style.get(n,j,o,false);

if(p){var q=p.match(/alpha\(opacity=(.*)\)/);

if(q&&q[1]){return parseFloat(q[1])/100;
}}return 1.0;
},"gecko":function(r,s){var t=qx.bom.element.Style.get(r,qx.bom.client.Engine.VERSION<1.7?g:h,s,false);

if(t==0.999999){t=1.0;
}
if(t!=null){return parseFloat(t);
}return 1.0;
},"default":function(y,z){var A=qx.bom.element.Style.get(y,h,z,false);

if(A!=null){return parseFloat(A);
}return 1.0;
}})}});
})();
(function(){var s="qx.client",r="",q="qx.debug",p="boxSizing",o="on",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",c="-moz-box-sizing",g="WebkitBoxSizing",f=";",b="-khtml-box-sizing",a="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(j,{statics:{__ci:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,h,g],"gecko":[d],"opera":[p]}),__cj:qx.core.Variant.select(s,{"mshtml":null,"webkit":[n,b,e],"gecko":[c],"opera":[n]}),__ck:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cl:function(G){var H=this.__ck;
return H.tags[G.tagName.toLowerCase()]||H.types[G.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(C){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(z){var B=this.__cj;
var A=r;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+m+z+f;
}}return A;
}}),get:qx.core.Variant.select(s,{"mshtml":function(y){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(y))){if(!this.__cl(y)){return a;
}}return k;
},"default":function(v){var x=this.__ci;
var w;

if(x){for(var i=0,l=x.length;i<l;i++){w=qx.bom.element.Style.get(v,x[i],null,false);

if(w!=null&&w!==r){return w;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(t,u){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(D,E){var F=this.__ci;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(I){this.set(I,r);
}}});
})();
(function(){var u="",t="qx.client",s="userSelect",r="qx.debug",q="on",p="Invalid argument 'smart'",o="style",n="Invalid argument 'element'",m="MozUserModify",k="px",T="float",S="borderImage",R="styleFloat",Q="appearance",P="pixelHeight",O='Ms',N=":",M="cssFloat",L="pixelTop",K="Invalid argument 'name'",B="pixelLeft",C='O',z="Invalid argument 'styles'",A="qx.bom.element.Style",x='Khtml',y='string',v="pixelRight",w='Moz',D="pixelWidth",E="pixelBottom",G=";",F="textOverflow",I="userModify",H='Webkit',J="WebkitUserModify";
qx.Class.define(A,{statics:{__bS:function(){var a=[Q,s,F,S];
var e={};
var b=document.documentElement.style;
var f=[w,H,x,C,O];

for(var i=0,l=a.length;i<l;i++){var g=a[i];
var c=g;

if(b[g]){e[c]=g;
continue;
}g=qx.lang.String.firstUp(g);

for(var j=0,h=f.length;j<h;j++){var d=f[j]+g;

if(typeof b[d]==y){e[c]=d;
break;
}}}this.__bT=e;
this.__bT[I]=qx.core.Variant.select(t,{"gecko":m,"webkit":J,"default":s});
this.__bU={};

for(var c in e){this.__bU[c]=this.__bY(e[c]);
}this.__bT[T]=qx.core.Variant.select(t,{"mshtml":R,"default":M});
},__bV:{width:D,height:P,left:B,right:v,top:L,bottom:E},__bW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(X){var ba=[];
var bc=this.__bW;
var bb=this.__bU;
var name,Y;

for(name in X){Y=X[name];

if(Y==null){continue;
}name=bb[name]||name;
if(bc[name]){ba.push(bc[name].compile(Y));
}else{ba.push(this.__bY(name),N,Y,G);
}}return ba.join(u);
},__bX:{},__bY:function(bz){var bA=this.__bX;
var bB=bA[bz];

if(!bB){bB=bA[bz]=qx.lang.String.hyphenate(bz);
}return bB;
},setCss:qx.core.Variant.select(t,{"mshtml":function(bC,bD){bC.style.cssText=bD;
},"default":function(bH,bI){bH.setAttribute(o,bI);
}}),getCss:qx.core.Variant.select(t,{"mshtml":function(bJ){return bJ.style.cssText.toLowerCase();
},"default":function(U){return U.getAttribute(o);
}}),isPropertySupported:function(bq){return (this.__bW[bq]||this.__bT[bq]||bq in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bE,name,bF,bG){if(qx.core.Variant.isSet(r,q)){qx.core.Assert.assertElement(bE,n);
qx.core.Assert.assertString(name,K);

if(bG!==undefined){qx.core.Assert.assertBoolean(bG,p);
}}name=this.__bT[name]||name;
if(bG!==false&&this.__bW[name]){return this.__bW[name].set(bE,bF);
}else{bE.style[name]=bF!==null?bF:u;
}},setStyles:function(bi,bj,bk){if(qx.core.Variant.isSet(r,q)){qx.core.Assert.assertElement(bi,n);
qx.core.Assert.assertMap(bj,z);

if(bk!==undefined){qx.core.Assert.assertBoolean(bk,p);
}}var bn=this.__bT;
var bp=this.__bW;
var bl=bi.style;

for(var bo in bj){var bm=bj[bo];
var name=bn[bo]||bo;

if(bm===undefined){if(bk!==false&&bp[name]){bp[name].reset(bi);
}else{bl[name]=u;
}}else{if(bk!==false&&bp[name]){bp[name].set(bi,bm);
}else{bl[name]=bm!==null?bm:u;
}}}},reset:function(V,name,W){name=this.__bT[name]||name;
if(W!==false&&this.__bW[name]){return this.__bW[name].reset(V);
}else{V.style[name]=u;
}},get:qx.core.Variant.select(t,{"mshtml":function(br,name,bs,bt){name=this.__bT[name]||name;
if(bt!==false&&this.__bW[name]){return this.__bW[name].get(br,bs);
}if(!br.currentStyle){return br.style[name]||u;
}switch(bs){case this.LOCAL_MODE:return br.style[name]||u;
case this.CASCADED_MODE:return br.currentStyle[name]||u;
default:var bx=br.currentStyle[name]||u;
if(/^-?[\.\d]+(px)?$/i.test(bx)){return bx;
}var bw=this.__bV[name];

if(bw){var bu=br.style[name];
br.style[name]=bx||0;
var bv=br.style[bw]+k;
br.style[name]=bu;
return bv;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bx)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bx;
}},"default":function(bd,name,be,bf){name=this.__bT[name]||name;
if(bf!==false&&this.__bW[name]){return this.__bW[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||u;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||u;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:u;
}}})},defer:function(by){by.__bS();
}});
})();
(function(){var bt="borderTopWidth",bs="borderLeftWidth",br="marginTop",bq="marginLeft",bp="scroll",bo="qx.client",bn="border-box",bm="borderBottomWidth",bl="borderRightWidth",bk="auto",bI="padding",bH="qx.bom.element.Location",bG="paddingLeft",bF="static",bE="marginBottom",bD="visible",bC="BODY",bB="paddingBottom",bA="paddingTop",bz="marginRight",bx="position",by="margin",bv="overflow",bw="paddingRight",bu="border";
qx.Class.define(bH,{statics:{__hx:function(bi,bj){return qx.bom.element.Style.get(bi,bj,qx.bom.element.Style.COMPUTED_MODE,false);
},__hy:function(a,b){return parseInt(qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hz:function(i){var l=0,top=0;
if(i.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var k=qx.dom.Node.getWindow(i);
l-=qx.bom.Viewport.getScrollLeft(k);
top-=qx.bom.Viewport.getScrollTop(k);
}else{var j=qx.dom.Node.getDocument(i).body;
i=i.parentNode;
while(i&&i!=j){l+=i.scrollLeft;
top+=i.scrollTop;
i=i.parentNode;
}}return {left:l,top:top};
},__hA:qx.core.Variant.select(bo,{"mshtml":function(e){var g=qx.dom.Node.getDocument(e);
var f=g.body;
var h=0;
var top=0;
h-=f.clientLeft+g.documentElement.clientLeft;
top-=f.clientTop+g.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){h+=this.__hy(f,bs);
top+=this.__hy(f,bt);
}return {left:h,top:top};
},"webkit":function(be){var bg=qx.dom.Node.getDocument(be);
var bf=bg.body;
var bh=bf.offsetLeft;
var top=bf.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bh+=this.__hy(bf,bs);
top+=this.__hy(bf,bt);
}return {left:bh,top:top};
},"gecko":function(bL){var bM=qx.dom.Node.getDocument(bL).body;
var bN=bM.offsetLeft;
var top=bM.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bN+=this.__hy(bM,bq);
top+=this.__hy(bM,br);
}if(qx.bom.element.BoxSizing.get(bM)!==bn){bN+=this.__hy(bM,bs);
top+=this.__hy(bM,bt);
}return {left:bN,top:top};
},"default":function(u){var v=qx.dom.Node.getDocument(u).body;
var w=v.offsetLeft;
var top=v.offsetTop;
return {left:w,top:top};
}}),__hB:qx.core.Variant.select(bo,{"mshtml|webkit":function(z){var B=qx.dom.Node.getDocument(z);
if(z.getBoundingClientRect){var C=z.getBoundingClientRect();
var D=C.left;
var top=C.top;
}else{var D=z.offsetLeft;
var top=z.offsetTop;
z=z.offsetParent;
var A=B.body;
while(z&&z!=A){D+=z.offsetLeft;
top+=z.offsetTop;
D+=this.__hy(z,bs);
top+=this.__hy(z,bt);
z=z.offsetParent;
}}return {left:D,top:top};
},"gecko":function(E){if(E.getBoundingClientRect){var H=E.getBoundingClientRect();
var I=Math.round(H.left);
var top=Math.round(H.top);
}else{var I=0;
var top=0;
var F=qx.dom.Node.getDocument(E).body;
var G=qx.bom.element.BoxSizing;

if(G.get(E)!==bn){I-=this.__hy(E,bs);
top-=this.__hy(E,bt);
}
while(E&&E!==F){I+=E.offsetLeft;
top+=E.offsetTop;
if(G.get(E)!==bn){I+=this.__hy(E,bs);
top+=this.__hy(E,bt);
}if(E.parentNode&&this.__hx(E.parentNode,bv)!=bD){I+=this.__hy(E.parentNode,bs);
top+=this.__hy(E.parentNode,bt);
}E=E.offsetParent;
}}return {left:I,top:top};
},"default":function(P){var R=0;
var top=0;
var Q=qx.dom.Node.getDocument(P).body;
while(P&&P!==Q){R+=P.offsetLeft;
top+=P.offsetTop;
P=P.offsetParent;
}return {left:R,top:top};
}}),get:function(U,V){if(U.tagName==bC){var location=this.__hC(U);
var bd=location.left;
var top=location.top;
}else{var W=this.__hA(U);
var bc=this.__hB(U);
var scroll=this.__hz(U);
var bd=bc.left+W.left-scroll.left;
var top=bc.top+W.top-scroll.top;
}var X=bd+U.offsetWidth;
var Y=top+U.offsetHeight;

if(V){if(V==bI||V==bp){var ba=qx.bom.element.Overflow.getX(U);

if(ba==bp||ba==bk){X+=U.scrollWidth-U.offsetWidth+this.__hy(U,bs)+this.__hy(U,bl);
}var bb=qx.bom.element.Overflow.getY(U);

if(bb==bp||bb==bk){Y+=U.scrollHeight-U.offsetHeight+this.__hy(U,bt)+this.__hy(U,bm);
}}
switch(V){case bI:bd+=this.__hy(U,bG);
top+=this.__hy(U,bA);
X-=this.__hy(U,bw);
Y-=this.__hy(U,bB);
case bp:bd-=U.scrollLeft;
top-=U.scrollTop;
X-=U.scrollLeft;
Y-=U.scrollTop;
case bu:bd+=this.__hy(U,bs);
top+=this.__hy(U,bt);
X-=this.__hy(U,bl);
Y-=this.__hy(U,bm);
break;
case by:bd-=this.__hy(U,bq);
top-=this.__hy(U,br);
X+=this.__hy(U,bz);
Y+=this.__hy(U,bE);
break;
}}return {left:bd,top:top,right:X,bottom:Y};
},__hC:qx.core.Variant.select(bo,{"default":function(c){var top=c.offsetTop+this.__hy(c,br);
var d=c.offsetLeft+this.__hy(c,bq);
return {left:d,top:top};
},"mshtml":function(S){var top=S.offsetTop;
var T=S.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hy(S,br);
T+=this.__hy(S,bq);
}return {left:T,top:top};
},"gecko":function(bJ){var top=bJ.offsetTop+this.__hy(bJ,br)+this.__hy(bJ,bs);
var bK=bJ.offsetLeft+this.__hy(bJ,bq)+this.__hy(bJ,bt);
return {left:bK,top:top};
}}),getLeft:function(x,y){return this.get(x,y).left;
},getTop:function(q,r){return this.get(q,r).top;
},getRight:function(s,t){return this.get(s,t).right;
},getBottom:function(bO,bP){return this.get(bO,bP).bottom;
},getRelative:function(J,K,L,M){var O=this.get(J,L);
var N=this.get(K,M);
return {left:O.left-N.left,top:O.top-N.top,right:O.right-N.right,bottom:O.bottom-N.bottom};
},getPosition:function(m){return this.getRelative(m,this.getOffsetParent(m));
},getOffsetParent:function(n){var p=n.offsetParent||document.body;
var o=qx.bom.element.Style;

while(p&&(!/^body|html$/i.test(p.tagName)&&o.get(p,bx)===bF)){p=p.offsetParent;
}return p;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(bg){return bg.selection;
},"default":function(by){return qx.dom.Node.getWindow(by).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(z){var A=qx.bom.Range.get(qx.dom.Node.getDocument(z));
return A.text;
},"default":function(X){if(this.__jO(X)){return X.value.substring(X.selectionStart,X.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(X)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(v){var x=this.get(v);
var w=qx.util.StringSplit.split(x,/\r\n/);
return x.length-(w.length-1);
},"opera":function(br){var bw,bu,bs;

if(this.__jO(br)){var bv=br.selectionStart;
var bt=br.selectionEnd;
bw=br.value.substring(bv,bt);
bu=bt-bv;
}else{bw=qx.bom.Selection.get(br);
bu=bw.length;
}bs=qx.util.StringSplit.split(bw,/\r\n/);
return bu-(bs.length-1);
},"default":function(a){if(this.__jO(a)){return a.selectionEnd-a.selectionStart;
}else{return this.get(a).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(m){if(this.__jO(m)){var r=qx.bom.Range.get();
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
}},"gecko|webkit":function(F){if(this.__jO(F)){return F.selectionStart;
}else{var H=qx.dom.Node.getDocument(F);
var G=this.getSelectionObject(H);
if(G.anchorOffset<G.focusOffset){return G.anchorOffset;
}else{return G.focusOffset;
}}},"default":function(bx){if(this.__jO(bx)){return bx.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bx)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(J){if(this.__jO(J)){var O=qx.bom.Range.get();
if(!J.contains(O.parentElement())){return -1;
}var P=qx.bom.Range.get(J);
var N=J.value.length;
P.moveToBookmark(O.getBookmark());
P.moveStart(f,-N);
return P.text.length;
}else{var P=qx.bom.Range.get(J);
var L=P.parentElement();
var Q=qx.bom.Range.get();
Q.moveToElementText(L);
var N=Q.text.length;
var K=qx.bom.Range.get(qx.dom.Node.getBodyElement(J));
K.setEndPoint(j,P);
K.setEndPoint(g,Q);
if(Q.compareEndPoints(j,K)==0){return N-1;
}var M;
var R=0;

while(true){M=K.moveEnd(k,1);
if(Q.compareEndPoints(j,K)==0){break;
}if(M==0){break;
}else{R++;
}}return N-(++R);
}},"gecko|webkit":function(bh){if(this.__jO(bh)){return bh.selectionEnd;
}else{var bj=qx.dom.Node.getDocument(bh);
var bi=this.getSelectionObject(bj);
if(bi.focusOffset>bi.anchorOffset){return bi.focusOffset;
}else{return bi.anchorOffset;
}}},"default":function(y){if(this.__jO(y)){return y.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(y)).focusOffset;
}}}),__jO:function(Y){return qx.dom.Node.isElement(Y)&&(Y.nodeName.toLowerCase()==i||Y.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(S,T,U){var V;
if(qx.dom.Node.isDocument(S)){S=S.body;
}
if(qx.dom.Node.isElement(S)||qx.dom.Node.isText(S)){switch(S.nodeName.toLowerCase()){case i:case h:case d:if(U===undefined){U=S.value.length;
}
if(T>=0&&T<=S.value.length&&U>=0&&U<=S.value.length){V=qx.bom.Range.get(S);
V.collapse(true);
V.moveStart(k,T);
V.moveEnd(k,U-T);
V.select();
return true;
}break;
case c:if(U===undefined){U=S.nodeValue.length;
}
if(T>=0&&T<=S.nodeValue.length&&U>=0&&U<=S.nodeValue.length){V=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
V.moveToElementText(S.parentNode);
V.collapse(true);
V.moveStart(k,T);
V.moveEnd(k,U-T);
V.select();
return true;
}break;
default:if(U===undefined){U=S.childNodes.length-1;
}if(S.childNodes[T]&&S.childNodes[U]){V=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
V.moveToElementText(S.childNodes[T]);
V.collapse(true);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(S));
W.moveToElementText(S.childNodes[U]);
V.setEndPoint(j,W);
V.select();
return true;
}}}return false;
},"default":function(bk,bl,bm){var bq=bk.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bk)&&(bq==i||bq==h)){if(bm===undefined){bm=bk.value.length;
}if(bl>=0&&bl<=bk.value.length&&bm>=0&&bm<=bk.value.length){bk.focus();
bk.select();
bk.setSelectionRange(bl,bm);
return true;
}}else{var bo=false;
var bp=qx.dom.Node.getWindow(bk).getSelection();
var bn=qx.bom.Range.get(bk);
if(qx.dom.Node.isText(bk)){if(bm===undefined){bm=bk.length;
}
if(bl>=0&&bl<bk.length&&bm>=0&&bm<=bk.length){bo=true;
}}else if(qx.dom.Node.isElement(bk)){if(bm===undefined){bm=bk.childNodes.length-1;
}
if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;
}}else if(qx.dom.Node.isDocument(bk)){bk=bk.body;

if(bm===undefined){bm=bk.childNodes.length-1;
}
if(bl>=0&&bk.childNodes[bl]&&bm>=0&&bk.childNodes[bm]){bo=true;
}}
if(bo){if(!bp.isCollapsed){bp.collapseToStart();
}bn.setStart(bk,bl);
if(qx.dom.Node.isText(bk)){bn.setEnd(bk,bm);
}else{bn.setEndAfter(bk.childNodes[bm]);
}if(bp.rangeCount>0){bp.removeAllRanges();
}bp.addRange(bn);
return true;
}}return false;
}}),setAll:function(I){return qx.bom.Selection.set(I,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(B){var C=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(B));
var D=qx.bom.Range.get(B);
var parent=D.parentElement();
var E=qx.bom.Range.get(qx.dom.Node.getDocument(B));
if(parent==E.parentElement()&&parent==B){C.empty();
}},"default":function(ba){var bc=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(ba));
var be=ba.nodeName.toLowerCase();
if(qx.dom.Node.isElement(ba)&&(be==i||be==h)){ba.setSelectionRange(0,0);
qx.bom.Element.blur(ba);
}else if(qx.dom.Node.isDocument(ba)||be==b){bc.collapse(ba.body?ba.body:ba,0);
}else{var bd=qx.bom.Range.get(ba);

if(!bd.collapsed){var bf;
var bb=bd.commonAncestorContainer;
if(qx.dom.Node.isElement(ba)&&qx.dom.Node.isText(bb)){bf=bb.parentNode;
}else{bf=bb;
}
if(bf==ba){bc.collapse(ba,0);
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
qx.Class.define(b,{statics:{__hq:{},remove:function(c){delete this.__hq[c.$$hash];
},add:function(g){var h=this.__hq;

if(h[g.$$hash]){return;
}h[g.$$hash]=g;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var d=this.__hq;
var f;

for(var e in d){f=d[e];
delete d[e];
f.syncWidget();
}for(var e in d){return;
}this.__hq={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hc:{},__hd:{},remove:function(l){var m=l.$$hash;
delete this.__hd[m];
delete this.__hc[m];
},isVisible:function(p){return this.__hd[p.$$hash]||false;
},__he:function(h){var j=this.__hd;
var i=h.$$hash;
var k;
if(h.isExcluded()){k=false;
}else{var parent=h.$$parent;

if(parent){k=this.__he(parent);
}else{k=h.isRootWidget();
}}return j[i]=k;
},add:function(n){var o=this.__hc;

if(o[n.$$hash]){return;
}o[n.$$hash]=n;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var c=this.__hc;
var g=this.__hd;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__he(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hc={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gz:{},remove:function(f){delete this.__gz[f.$$hash];
},add:function(c){var d=this.__gz;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(e){return !!this.__gz[e.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gz;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__em:{},add:function(c){var d=this.__em;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__em;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__em={};
}}});
})();
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}qx.html.Element.call(this,null,i);
this.__jf=g;
this.__jg=h||g.toHashCode();
this.useMarkup(g.getMarkup());
},members:{__jg:null,__jf:null,getId:function(){return this.__jg;
},getDecorator:function(){return this.__jf;
},resize:function(e,f){this.__jf.resize(this.getDomElement(),e,f);
},tint:function(a){this.__jf.tint(this.getDomElement(),a);
},getInsets:function(){return this.__jf.getInsets();
}},destruct:function(){this.__jf=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dE=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dE:null,__dF:{focusin:1,focusout:1,focus:1,blur:1},__dG:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(n){var s=n.getTarget();
var r=qx.ui.core.Widget.getWidgetByElement(s);
var t=false;

while(r&&r.isAnonymous()){var t=true;
r=r.getLayoutParent();
}if(r&&t&&n.getType()==a){r.getContainerElement().activate();
}if(this.__dF[n.getType()]){r=r&&r.getFocusTarget();
if(!r){return;
}}if(n.getRelatedTarget){var A=n.getRelatedTarget();
var z=qx.ui.core.Widget.getWidgetByElement(A);

while(z&&z.isAnonymous()){z=z.getLayoutParent();
}
if(z){if(this.__dF[n.getType()]){z=z.getFocusTarget();
}if(z===r){return;
}}}var v=n.getCurrentTarget();
var x=qx.ui.core.Widget.getWidgetByElement(v);

if(!x||x.isAnonymous()){return;
}if(this.__dF[n.getType()]){x=x.getFocusTarget();
}var y=n.getType();

if(!x||!(x.isEnabled()||this.__dG[y])){return;
}var o=n.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var u=this.__dE.getListeners(x,y,o);

if(!u||u.length===0){return;
}var p=qx.event.Pool.getInstance().getObject(n.constructor);
n.clone(p);
p.setTarget(r);
p.setRelatedTarget(z||null);
p.setCurrentTarget(x);
var B=n.getOriginalTarget();

if(B){var q=qx.ui.core.Widget.getWidgetByElement(B);

while(q&&q.isAnonymous()){q=q.getLayoutParent();
}p.setOriginalTarget(q);
}else{p.setOriginalTarget(s);
}for(var i=0,l=u.length;i<l;i++){var w=u[i].context||x;
u[i].handler.call(w,p);
}if(p.getPropagationStopped()){n.stopPropagation();
}
if(p.getDefaultPrevented()){n.preventDefault();
}qx.event.Pool.getInstance().poolObject(p);
},registerEvent:function(h,j,k){var m;

if(j===e||j===f){m=h.getFocusElement();
}else if(j===c||j===d){m=h.getContentElement();
}else{m=h.getContainerElement();
}
if(m){m.addListener(j,this._dispatchEvent,this,k);
}},unregisterEvent:function(C,D,E){var F;

if(D===e||D===f){F=C.getFocusElement();
}else if(D===c||D===d){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this.__dE=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__fI:null,_invalidChildrenCache:null,__fJ:null,invalidateLayoutCache:function(){this.__fI=null;
},renderLayout:function(h,i){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fI){return this.__fI;
}return this.__fI=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(l){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(e,name,f){},"off":null}),_clearSeparators:function(){var g=this.__fJ;

if(g instanceof qx.ui.core.LayoutItem){g.clearSeparators();
}},_renderSeparator:function(j,k){this.__fJ.renderSeparator(j,k);
},connectToWidget:function(d){if(d&&this.__fJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__fJ=d;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fJ;
},_applyLayoutChange:function(){if(this.__fJ){this.__fJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fJ.getLayoutChildren();
}},destruct:function(){this.__fJ=this.__fI=null;
}});
})();
(function(){var l="/",k="mshtml",j="",i="qx.client",h="?",g="string",f="qx.util.ResourceManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bP:qx.$$resources||{},__bQ:{}},members:{has:function(q){return !!this.self(arguments).__bP[q];
},getData:function(r){return this.self(arguments).__bP[r]||null;
},getImageWidth:function(A){var B=this.self(arguments).__bP[A];
return B?B[0]:null;
},getImageHeight:function(s){var t=this.self(arguments).__bP[s];
return t?t[1]:null;
},getImageFormat:function(o){var p=this.self(arguments).__bP[o];
return p?p[2]:null;
},isClippedImage:function(m){var n=this.self(arguments).__bP[m];
return n&&n.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__bP[a];

if(!b){return a;
}
if(typeof b===g){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=j;

if(qx.core.Variant.isSet(i,k)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__bQ[d];
}return c+qx.$$libraries[d].resourceUri+l+a;
}},defer:function(u){if(qx.core.Variant.isSet(i,k)){if(qx.bom.client.Feature.SSL){for(var y in qx.$$libraries){var w;

if(qx.$$libraries[y].resourceUri){w=qx.$$libraries[y].resourceUri;
}else{u.__bQ[y]=j;
continue;
}if(w.match(/^\/\//)!=null){u.__bQ[y]=window.location.protocol;
}else if(w.match(/^\.\//)!=null){var v=document.URL;
u.__bQ[y]=v.substring(0,v.lastIndexOf(l)+1);
}else if(w.match(/^http/)!=null){}else{var z=window.location.href.indexOf(h);
var x;

if(z==-1){x=window.location.href;
}else{x=window.location.href.substring(0,z);
}u.__bQ[y]=x.substring(0,x.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__kn:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__kn();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(w){var w=w||v;
this.__kL=w;
this.length=w.length;
},members:{$$isString:true,length:0,__kL:null,toString:function(){return this.__kL;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(x,y){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(z,A){if(qx.core.Variant.isSet(o,f)){qx.Class.include(z,qx.core.MAssert);
}var B=[j,k,s,u,b,p,m,n,t,g,e,c,d,a,r,h];
A.valueOf=A.toString;

if(new z(v).valueOf()==null){delete A.valueOf;
}
for(var i=0,l=B.length;i<l;i++){A[B[i]]=String.prototype[B[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__dH=c;
this.__dI=d;
},members:{__dH:null,__dI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dH,this.__dI);
}}});
})();
(function(){var l="_",k="",j="_applyLocale",h="changeLocale",g="C",f="qx.dynlocale",e="on",d="qx.locale.Manager",c="String",b="singleton";
qx.Class.define(d,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hD=qx.$$translations||{};
this.__hE=qx.$$locales||{};
var H=qx.bom.client.Locale;
var F=H.LOCALE;
var G=H.VARIANT;

if(G!==k){F+=l+G;
}this.setLocale(F||this.__hF);
},statics:{tr:function(U,V){var W=qx.lang.Array.fromArguments(arguments);
W.splice(0,1);
return qx.locale.Manager.getInstance().translate(U,W);
},trn:function(s,t,u,v){var w=qx.lang.Array.fromArguments(arguments);
w.splice(0,3);
if(u!=1){return qx.locale.Manager.getInstance().translate(t,w);
}else{return qx.locale.Manager.getInstance().translate(s,w);
}},trc:function(x,y,z){var A=qx.lang.Array.fromArguments(arguments);
A.splice(0,2);
return qx.locale.Manager.getInstance().translate(y,A);
},marktr:function(a){return a;
}},properties:{locale:{check:c,nullable:true,apply:j,event:h}},members:{__hF:g,__hG:null,__hH:null,__hD:null,__hE:null,getLanguage:function(){return this.__hH;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__hE){if(bf!=this.__hF){bg.push(bf);
}}return bg;
},__hI:function(bc){var be;
var bd=bc.indexOf(l);

if(bd==-1){be=bc;
}else{be=bc.substring(0,bd);
}return be;
},_applyLocale:function(q,r){this.__hG=q;
this.__hH=this.__hI(q);
},addTranslation:function(m,n){var o=this.__hD;

if(o[m]){for(var p in n){o[m][p]=n[p];
}}else{o[m]=n;
}},addLocale:function(Q,R){var S=this.__hE;

if(S[Q]){for(var T in R){S[Q][T]=R[T];
}}else{S[Q]=R;
}},translate:function(B,C,D){var E=this.__hD;
return this.__hJ(E,B,C,D);
},localize:function(X,Y,ba){var bb=this.__hE;
return this.__hJ(bb,X,Y,ba);
},__hJ:function(I,J,K,L){var M;

if(!I){return J;
}
if(L){var O=this.__hI(L);
}else{L=this.__hG;
O=this.__hH;
}if(!M&&I[L]){M=I[L][J];
}if(!M&&I[O]){M=I[O][J];
}if(!M&&I[this.__hF]){M=I[this.__hF][J];
}
if(!M){M=J;
}
if(K.length>0){var N=[];

for(var i=0;i<K.length;i++){var P=K[i];

if(P&&P.translate){N[i]=P.translate();
}else{N[i]=P;
}}M=qx.lang.String.format(M,N);
}
if(qx.core.Variant.isSet(f,e)){M=new qx.locale.LocalizedString(M,J,K);
}return M;
}},destruct:function(){this.__hD=this.__hE=null;
}});
})();
(function(){var q="px",p="qx.client",o="div",n="img",m="",l="no-repeat",k="qx.debug",j="scale-x",i="mshtml",h="on",O="repeat",N="scale",M="scale-y",L="qx/icon",K=".png",J="crop",I="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",H='<div style="',G="repeat-y",F='<img src="',x="qx.bom.element.Decoration",y="', sizingMethod='",v="png",w="')",t='"></div>',u='"/>',r='" style="',s="none",z="webkit",A=" ",C="repeat-x",B="DXImageTransform.Microsoft.AlphaImageLoader",E="qx/static/blank.gif",D="absolute";
qx.Class.define(x,{statics:{DEBUG:false,__gl:{},__gm:qx.core.Variant.isSet(p,i),__gn:qx.core.Variant.select(p,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__go:{"scale-x":n,"scale-y":n,"scale":n,"repeat":o,"no-repeat":o,"repeat-x":o,"repeat-y":o},update:function(bI,bJ,bK,bL){var bN=this.getTagName(bK,bJ);

if(bN!=bI.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bO=this.getAttributes(bJ,bK,bL);

if(bN===n){bI.src=bO.src||qx.util.ResourceManager.getInstance().toUri(E);
}if(bI.style.backgroundPosition!=m&&bO.style.backgroundPosition===undefined){bO.style.backgroundPosition=null;
}if(bI.style.clip!=m&&bO.style.clip===undefined){bO.style.clip=null;
}var bM=qx.bom.element.Style;
bM.setStyles(bI,bO.style);
if(this.__gm){try{bI.filters[B].apply();
}catch(e){}}},create:function(bT,bU,bV){var bW=this.getTagName(bU,bT);
var bY=this.getAttributes(bT,bU,bV);
var bX=qx.bom.element.Style.compile(bY.style);

if(bW===n){return F+bY.src+r+bX+u;
}else{return H+bX+t;
}},getTagName:function(bk,bl){if(qx.core.Variant.isSet(p,i)){if(bl&&this.__gm&&this.__gn[bk]&&qx.lang.String.endsWith(bl,K)){return o;
}}return this.__go[bk];
},getAttributes:function(bD,bE,bF){if(!bF){bF={};
}
if(!bF.position){bF.position=D;
}
if(qx.core.Variant.isSet(p,i)){bF.fontSize=0;
bF.lineHeight=0;
}else if(qx.core.Variant.isSet(p,z)){bF.WebkitUserDrag=s;
}var bH=qx.util.ResourceManager.getInstance().getImageFormat(bD)||qx.io.ImageLoader.getFormat(bD);

if(qx.core.Variant.isSet(k,h)){if(bD!=null&&bH==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bD+"'!");
}}var bG;
if(this.__gm&&this.__gn[bE]&&bH===v){bG=this.__gr(bF,bE,bD);
}else{if(bE===N){bG=this.__gs(bF,bE,bD);
}else if(bE===j||bE===M){bG=this.__gt(bF,bE,bD);
}else{bG=this.__gw(bF,bE,bD);
}}return bG;
},__gp:function(X,Y,ba){if(X.width==null&&Y!=null){X.width=Y+q;
}
if(X.height==null&&ba!=null){X.height=ba+q;
}return X;
},__gq:function(ca){var cb=qx.util.ResourceManager.getInstance().getImageWidth(ca)||qx.io.ImageLoader.getWidth(ca);
var cc=qx.util.ResourceManager.getInstance().getImageHeight(ca)||qx.io.ImageLoader.getHeight(ca);
return {width:cb,height:cc};
},__gr:function(a,b,c){var g=this.__gq(c);
a=this.__gp(a,g.width,g.height);
var f=b==l?J:N;
var d=I+qx.util.ResourceManager.getInstance().toUri(c)+y+f+w;
a.filter=d;
a.backgroundImage=a.backgroundRepeat=m;
return {style:a};
},__gs:function(by,bz,bA){var bB=qx.util.ResourceManager.getInstance().toUri(bA);
var bC=this.__gq(bA);
by=this.__gp(by,bC.width,bC.height);
return {src:bB,style:by};
},__gt:function(bm,bn,bo){var bs=qx.util.ResourceManager.getInstance();
var br=bs.isClippedImage(bo);
var bt=this.__gq(bo);

if(br){var bq=bs.getData(bo);
var bp=bs.toUri(bq[4]);

if(bn===j){bm=this.__gu(bm,bq,bt.height);
}else{bm=this.__gv(bm,bq,bt.width);
}return {src:bp,style:bm};
}else{if(qx.core.Variant.isSet(k,h)){this.__gy(bo);
}
if(bn==j){bm.height=bt.height==null?null:bt.height+q;
}else if(bn==M){bm.width=bt.width==null?null:bt.width+q;
}var bp=bs.toUri(bo);
return {src:bp,style:bm};
}},__gu:function(bP,bQ,bR){var bS=qx.util.ResourceManager.getInstance().getImageHeight(bQ[4]);
bP.clip={top:-bQ[6],height:bR};
bP.height=bS+q;
if(bP.top!=null){bP.top=(parseInt(bP.top,10)+bQ[6])+q;
}else if(bP.bottom!=null){bP.bottom=(parseInt(bP.bottom,10)+bR-bS-bQ[6])+q;
}return bP;
},__gv:function(bu,bv,bw){var bx=qx.util.ResourceManager.getInstance().getImageWidth(bv[4]);
bu.clip={left:-bv[5],width:bw};
bu.width=bx+q;
if(bu.left!=null){bu.left=(parseInt(bu.left,10)+bv[5])+q;
}else if(bu.right!=null){bu.right=(parseInt(bu.right,10)+bw-bx-bv[5])+q;
}return bu;
},__gw:function(P,Q,R){var W=qx.util.ResourceManager.getInstance().isClippedImage(R);
var V=this.__gq(R);
if(W&&Q!==O){var U=qx.util.ResourceManager.getInstance().getData(R);
var T=qx.bom.element.Background.getStyles(U[4],Q,U[5],U[6]);

for(var S in T){P[S]=T[S];
}
if(V.width!=null&&P.width==null&&(Q==G||Q===l)){P.width=V.width+q;
}
if(V.height!=null&&P.height==null&&(Q==C||Q===l)){P.height=V.height+q;
}return {style:P};
}else{if(qx.core.Variant.isSet(k,h)){if(Q!==O){this.__gy(R);
}}P=this.__gp(P,V.width,V.height);
P=this.__gx(P,R,Q);
return {style:P};
}},__gx:function(bc,bd,be){var top=null;
var bj=null;

if(bc.backgroundPosition){var bf=bc.backgroundPosition.split(A);
bj=parseInt(bf[0]);

if(isNaN(bj)){bj=bf[0];
}top=parseInt(bf[1]);

if(isNaN(top)){top=bf[1];
}}var bi=qx.bom.element.Background.getStyles(bd,be,bj,top);

for(var bh in bi){bc[bh]=bi[bh];
}if(bc.filter){bc.filter=m;
}return bc;
},__gy:function(bb){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bb)&&bb.indexOf(L)==-1){if(!this.__gl[bb]){qx.log.Logger.debug("Potential clipped image candidate: "+bb);
this.__gl[bb]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(p,{"mshtml":function(){return qx.bom.element.Decoration.__gm;
},"default":function(){return false;
}})}});
})();
(function(){var h="qx.client",g="load",f="qx.io.ImageLoader";
qx.Bootstrap.define(f,{statics:{__jV:{},__jW:{width:null,height:null},__jX:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(G){var H=this.__jV[G];
return !!(H&&H.loaded);
},isFailed:function(B){var C=this.__jV[B];
return !!(C&&C.failed);
},isLoading:function(r){var s=this.__jV[r];
return !!(s&&s.loading);
},getFormat:function(y){var z=this.__jV[y];
return z?z.format:null;
},getSize:function(v){var w=this.__jV[v];
return w?
{width:w.width,height:w.height}:this.__jW;
},getWidth:function(t){var u=this.__jV[t];
return u?u.width:null;
},getHeight:function(D){var E=this.__jV[D];
return E?E.height:null;
},load:function(j,k,m){var n=this.__jV[j];

if(!n){n=this.__jV[j]={};
}if(k&&!m){m=window;
}if(n.loaded||n.loading||n.failed){if(k){if(n.loading){n.callbacks.push(k,m);
}else{k.call(m,j,n);
}}}else{n.loading=true;
n.callbacks=[];

if(k){n.callbacks.push(k,m);
}var p=new Image();
var o=qx.lang.Function.listener(this.__jY,this,p,j);
p.onload=o;
p.onerror=o;
p.src=j;
}},__jY:qx.event.GlobalError.observeMethod(function(event,a,b){var c=this.__jV[b];
if(event.type===g){c.loaded=true;
c.width=this.__ka(a);
c.height=this.__kb(a);
var d=this.__jX.exec(b);

if(d!=null){c.format=d[1];
}}else{c.failed=true;
}a.onload=a.onerror=null;
var e=c.callbacks;
delete c.loading;
delete c.callbacks;
for(var i=0,l=e.length;i<l;i+=2){e[i].call(e[i+1],b,c);
}}),__ka:qx.core.Variant.select(h,{"gecko":function(F){return F.naturalWidth;
},"default":function(x){return x.width;
}}),__kb:qx.core.Variant.select(h,{"gecko":function(q){return q.naturalHeight;
},"default":function(A){return A.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cs:[i,null,h,b,null,j,e,null,j],__ct:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cu:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==m){top+=0.01;
}
if(t){var v=(typeof t==m)?t+k:t;
}else{v=l;
}
if(top){var w=(typeof top==m)?top+k:top;
}else{w=l;
}return v+d+w;
},compile:function(D,E,F,top){var G=this.__cu(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__cs;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(g);
},getStyles:function(x,y,z,top){if(!x){return this.__ct;
}var A=this.__cu(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C={backgroundPosition:A,backgroundImage:c+B+f};

if(y!=null){C.backgroundRepeat=y;
}return C;
},set:function(n,o,p,q,top){var r=this.getStyles(o,p,q,top);

for(var s in r){n.style[s]=r[s];
}}}});
})();
(function(){var p="source",o="scale",n="no-repeat",m="qx.client",l="mshtml",k="webkit",j="backgroundImage",i="div",h="qx.html.Image",g="qx/static/blank.gif";
qx.Class.define(h,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name===p){var e=this.getDomElement();
var b=this.getAllStyles();

if(this.getNodeName()==i&&this.getStyle(j)){b.backgroundPosition=null;
b.backgroundRepeat=null;
}var c=this._getProperty(p);
var d=this._getProperty(o);
var f=d?o:n;
if(c!=null){qx.bom.element.Decoration.update(e,c,f,b);
}}},_createDomElement:function(){var r=this._getProperty(o);
var s=r?o:n;

if(qx.core.Variant.isSet(m,l)){var q=this._getProperty(p);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(t){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(u){this._setProperty(p,u);
return this;
},getSource:function(){return this._getProperty(p);
},resetSource:function(){if(qx.core.Variant.isSet(m,k)){this._setProperty(p,qx.util.ResourceManager.getInstance().toUri(g));
}else{this._removeProperty(p,true);
}return this;
},setScale:function(v){this._setProperty(o,v);
return this;
},getScale:function(){return this._getProperty(o);
}}});
})();
(function(){var K="nonScaled",J="scaled",I="alphaScaled",H=".png",G="qx.client",F="div",E="replacement",D="hidden",C="Boolean",B="px",ba="http",Y="scale",X="changeSource",W="qx.ui.basic.Image",V="__hK",U="qx.debug",T="-disabled.$1",S="String",R="_applySource",Q="img",O="image",P="mshtml",M="_applyScale",N="no-repeat",L="on";
qx.Class.define(W,{extend:qx.ui.core.Widget,construct:function(x){this.__hK={};
qx.ui.core.Widget.call(this);

if(x){this.setSource(x);
}},properties:{source:{check:S,init:null,nullable:true,event:X,apply:R,themeable:true},scale:{check:C,init:false,themeable:true,apply:M},appearance:{refine:true,init:O},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hL:null,__hM:null,__hN:null,__hK:null,getContentElement:function(){return this.__hR();
},_createContentElement:function(){return this.__hR();
},_getContentHint:function(){return {width:this.__hL||0,height:this.__hM||0};
},_applyEnabled:function(y,z){qx.ui.core.Widget.prototype._applyEnabled.call(this,y,z);

if(this.getSource()){this._styleSource();
}},_applySource:function(A){this._styleSource();
},_applyScale:function(bp){this._styleSource();
},__hO:function(b){this.__hN=b;
},__hP:function(){if(this.__hN==null){var bl=this.getSource();
var bk=false;

if(bl!=null){bk=qx.lang.String.endsWith(bl,H);
}
if(this.getScale()&&bk&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hN=I;
}else if(this.getScale()){this.__hN=J;
}else{this.__hN=K;
}}return this.__hN;
},__hQ:function(r){var s;
var t;

if(r==I){s=true;
t=F;
}else if(r==K){s=false;
t=F;
}else{s=true;
t=Q;
}var u=new qx.html.Image(t);
u.setScale(s);
u.setStyles({"overflowX":D,"overflowY":D});
return u;
},__hR:function(){var h=this.__hP();

if(this.__hK[h]==null){this.__hK[h]=this.__hQ(h);
}return this.__hK[h];
},_styleSource:function(){var c=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!c){this.getContentElement().resetSource();
return;
}this.__hS(c);

if(qx.core.Variant.isSet(G,P)){var d=this.getScale()?Y:N;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(d,c);
}if(qx.util.ResourceManager.getInstance().has(c)){this.__hU(this.getContentElement(),c);
}else if(qx.io.ImageLoader.isLoaded(c)){this.__hV(this.getContentElement(),c);
}else{this.__hW(this.getContentElement(),c);
}},__hS:qx.core.Variant.select(G,{"mshtml":function(bm){var bo=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var bn=qx.lang.String.endsWith(bm,H);

if(bo&&bn){if(this.getScale()&&this.__hP()!=I){this.__hO(I);
}else if(!this.getScale()&&this.__hP()!=K){this.__hO(K);
}}else{if(this.getScale()&&this.__hP()!=J){this.__hO(J);
}else if(!this.getScale()&&this.__hP()!=K){this.__hO(K);
}}this.__hT(this.__hR());
},"default":function(a){if(this.getScale()&&this.__hP()!=J){this.__hO(J);
}else if(!this.getScale()&&this.__hP(K)){this.__hO(K);
}this.__hT(this.__hR());
}}),__hT:function(bd){var bg=this.getContainerElement();
var bh=bg.getChild(0);

if(bh!=bd){if(bh!=null){var bj=B;
var be={};
var bf=this.getInnerSize();

if(bf!=null){be.width=bf.width+bj;
be.height=bf.height+bj;
}var bi=this.getInsets();
be.left=bi.left+bj;
be.top=bi.top+bj;
be.zIndex=10;
bd.setStyles(be,true);
bd.setSelectable(this.getSelectable());
}bg.removeAt(0);
bg.addAt(bd,0);
}},__hU:function(n,o){var q=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var p=o.replace(/\.([a-z]+)$/,T);

if(q.has(p)){o=p;
this.addState(E);
}else{this.removeState(E);
}}if(n.getSource()===o){return;
}n.setSource(o);
this.__hY(q.getImageWidth(o),q.getImageHeight(o));
},__hV:function(i,j){var l=qx.io.ImageLoader;
i.setSource(j);
var k=l.getWidth(j);
var m=l.getHeight(j);
this.__hY(k,m);
},__hW:function(e,f){var g=qx.io.ImageLoader;

if(qx.core.Variant.isSet(U,L)){if(!qx.lang.String.startsWith(f.toLowerCase(),ba)){var self=this.self(arguments);

if(!self.__sp){self.__sp={};
}
if(!self.__sp[f]){this.debug("try to load a unmanaged relative image: "+f);
self.__sp[f]=true;
}}}if(!g.isFailed(f)){g.load(f,this.__hX,this);
}else{if(e!=null){e.resetSource();
}}},__hX:function(bb,bc){if(this.$$disposed===true){return;
}if(bb!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bc.failed){this.warn("Image could not be loaded: "+bb);
}this._styleSource();
},__hY:function(v,w){if(v!==this.__hL||w!==this.__hM){this.__hL=v;
this.__hM=w;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(V);
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
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(f,this._onInterval,this);
h.start();
this.__jw=h;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__jw:null,_applyTimeoutInterval:function(g){this.__jw.setInterval(g);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__jw){this.__jw.stop();
}this.__jw=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E='__gA',D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gA=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__gB:null,compute:function(H,I,J,K,L,M,N){this.__gB=this.__gB||new qx.util.placement.Placement();
var Q=L.split(a);
var P=Q[0];
var O=Q[1];
this.__gB.set({axisX:this.__gF(M),axisY:this.__gF(N),edge:P,align:O});
return this.__gB.compute(H,I,J,K);
},__gC:null,__gD:null,__gE:null,__gF:function(bd){switch(bd){case r:this.__gC=this.__gC||new qx.util.placement.DirectAxis();
return this.__gC;
case x:this.__gD=this.__gD||new qx.util.placement.KeepAlignAxis();
return this.__gD;
case G:this.__gE=this.__gE||new qx.util.placement.BestFitAxis();
return this.__gE;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__gA:null,compute:function(V,W,X,Y){if(qx.core.Variant.isSet(y,v)){this.assertObject(V,F);
this.assertNumber(V.width,B);
this.assertNumber(V.height,u);
this.assertObject(W,n);
this.assertNumber(W.width,t);
this.assertNumber(W.height,l);
this.assertObject(X,p);
this.assertNumber(X.top,k);
this.assertNumber(X.right,q);
this.assertNumber(X.bottom,D);
this.assertNumber(X.left,s);
this.assertObject(Y,C);
this.assertNumber(Y.top,w);
this.assertNumber(Y.right,o);
this.assertNumber(Y.bottom,A);
this.assertNumber(Y.left,m);
}var ba=this.getAxisX()||this.__gA;
var bc=ba.computeStart(V.width,{start:X.left,end:X.right},{start:Y.left,end:Y.right},W.width,this.__gG());
var bb=this.getAxisY()||this.__gA;
var top=bb.computeStart(V.height,{start:X.top,end:X.bottom},{start:Y.top,end:Y.bottom},W.height,this.__gH());
return {left:bc,top:top};
},__gG:function(){var U=this.getEdge();
var T=this.getAlign();

if(U==g){return f;
}else if(U==i){return c;
}else if(T==g){return e;
}else if(T==i){return d;
}},__gH:function(){var S=this.getEdge();
var R=this.getAlign();

if(S==j){return f;
}else if(S==h){return c;
}else if(R==j){return e;
}else if(R==h){return d;
}}},destruct:function(){this._disposeObjects(E);
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
(function(){var h="mousedown",g="qx.debug",f="on",d="__pS",c="blur",b="qx.ui.popup.Manager",a="singleton";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pS={};
qx.event.Registration.addListener(document.documentElement,h,this.__pU,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__pS:null,add:function(t){if(qx.core.Variant.isSet(g,f)){if(!(t instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+t);
}}this.__pS[t.$$hash]=t;
this.__pT();
},remove:function(o){if(qx.core.Variant.isSet(g,f)){if(!(o instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+o);
}}var p=this.__pS;

if(p){delete p[o.$$hash];
this.__pT();
}},hideAll:function(){var n=this.__pS;

if(n){for(var m in n){n[m].exclude();
}}},__pT:function(){var s=1e7;
var r=this.__pS;

for(var q in r){r[q].setZIndex(s++);
}},__pU:function(e){var k=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var l=this.__pS;

for(var j in l){var i=l[j];

if(!i.getAutoHide()||k==i||qx.ui.core.Widget.contains(i,k)){continue;
}i.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,h,this.__pU,this,true);
this._disposeMap(d);
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
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",n="_applyShow",o="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(D,E){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(D!=null){this.setLabel(D);
}
if(E!=null){this.setIcon(E);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(H){var I;

switch(H){case j:I=new qx.ui.basic.Label(this.getLabel());
I.setAnonymous(true);
I.setRich(this.getRich());
this._add(I);

if(this.getLabel()==null||this.getShow()===i){I.exclude();
}break;
case i:I=new qx.ui.basic.Image(this.getIcon());
I.setAnonymous(true);
this._addAt(I,0);

if(this.getIcon()==null||this.getShow()===j){I.exclude();
}break;
}return I||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(R,S){var T=this.getChildControl(j,true);

if(T){T.setValue(R);
}this._handleLabel();
},_applyRich:function(L,M){var N=this.getChildControl(j,true);

if(N){N.setRich(L);
}},_applyIcon:function(O,P){var Q=this.getChildControl(i,true);

if(Q){Q.setSource(O);
}this._handleIcon();
},_applyGap:function(B,C){this._getLayout().setGap(B);
},_applyShow:function(F,G){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(J,K){this._getLayout().setIconPosition(J);
},_applyCenter:function(z,A){this._getLayout().setCenter(z);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(U,name,V){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(z,A){var J=qx.ui.layout.Util;
var C=this.getIconPosition();
var F=this._getLayoutChildren();
var length=F.length;
var T,top,K,D;
var P,I;
var N=this.getGap();
var S=this.getCenter();
if(C===n||C===j){var L=length-1;
var G=-1;
var E=-1;
}else{var L=0;
var G=length;
var E=1;
}if(C==l||C==n){if(S){var O=0;

for(var i=L;i!=G;i+=E){D=F[i].getSizeHint().height;

if(D>0){O+=D;

if(i!=L){O+=N;
}}}top=Math.round((A-O)/2);
}else{top=0;
}
for(var i=L;i!=G;i+=E){P=F[i];
I=P.getSizeHint();
K=Math.min(I.maxWidth,Math.max(z,I.minWidth));
D=I.height;
T=J.computeHorizontalAlignOffset(e,K,z);
P.renderLayout(T,top,K,D);
if(D>0){top+=D+N;
}}}else{var H=z;
var B=null;
var R=0;

for(var i=L;i!=G;i+=E){P=F[i];
K=P.getSizeHint().width;

if(K>0){if(!B&&P instanceof qx.ui.basic.Label){B=P;
}else{H-=K;
}R++;
}}
if(R>1){var Q=(R-1)*N;
H-=Q;
}
if(B){var I=B.getSizeHint();
var M=Math.max(I.minWidth,Math.min(H,I.maxWidth));
H-=M;
}
if(S&&H>0){T=Math.round(H/2);
}else{T=0;
}
for(var i=L;i!=G;i+=E){P=F[i];
I=P.getSizeHint();
D=Math.min(I.maxHeight,Math.max(A,I.minHeight));

if(P===B){K=M;
}else{K=I.width;
}top=J.computeVerticalAlignOffset(h,I.height,A);
P.renderLayout(T,top,K,D);
if(K>0){T+=K+N;
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
(function(){var u="middle",t="qx.ui.layout.Util",s="left",r="center",q="top",p="bottom",o="right";
qx.Class.define(t,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(a,b,c){var e,j,d,k;
var f=b>c;
var m=Math.abs(b-c);
var n,g;
var h={};

for(j in a){e=a[j];
h[j]={potential:f?e.max-e.value:e.value-e.min,flex:f?e.flex:1/e.flex,offset:0};
}while(m!=0){k=Infinity;
d=0;

for(j in h){e=h[j];

if(e.potential>0){d+=e.flex;
k=Math.min(k,e.potential/e.flex);
}}if(d==0){break;
}k=Math.min(m,k*d)/d;
n=0;

for(j in h){e=h[j];

if(e.potential>0){g=Math.min(m,e.potential,Math.ceil(k*e.flex));
n+=g-k*e.flex;

if(n>=1){n-=1;
g-=1;
}e.potential-=g;

if(f){e.offset+=g;
}else{e.offset-=g;
}m-=g;
}}}return h;
},computeHorizontalAlignOffset:function(bk,bl,bm,bn,bo){if(bn==null){bn=0;
}
if(bo==null){bo=0;
}var bp=0;

switch(bk){case s:bp=bn;
break;
case o:bp=bm-bl-bo;
break;
case r:bp=Math.round((bm-bl)/2);
if(bp<bn){bp=bn;
}else if(bp<bo){bp=Math.max(bn,bm-bl-bo);
}break;
}return bp;
},computeVerticalAlignOffset:function(z,A,B,C,D){if(C==null){C=0;
}
if(D==null){D=0;
}var E=0;

switch(z){case q:E=C;
break;
case p:E=B-A-D;
break;
case u:E=Math.round((B-A)/2);
if(E<C){E=C;
}else if(E<D){E=Math.max(C,B-A-D);
}break;
}return E;
},collapseMargins:function(V){var W=0,Y=0;

for(var i=0,l=arguments.length;i<l;i++){var X=arguments[i];

if(X<0){Y=Math.min(Y,X);
}else if(X>0){W=Math.max(W,X);
}}return W+Y;
},computeHorizontalGaps:function(v,w,x){if(w==null){w=0;
}var y=0;

if(x){y+=v[0].getMarginLeft();

for(var i=1,l=v.length;i<l;i+=1){y+=this.collapseMargins(w,v[i-1].getMarginRight(),v[i].getMarginLeft());
}y+=v[l-1].getMarginRight();
}else{for(var i=1,l=v.length;i<l;i+=1){y+=v[i].getMarginLeft()+v[i].getMarginRight();
}y+=(w*(l-1));
}return y;
},computeVerticalGaps:function(ba,bb,bc){if(bb==null){bb=0;
}var bd=0;

if(bc){bd+=ba[0].getMarginTop();

for(var i=1,l=ba.length;i<l;i+=1){bd+=this.collapseMargins(bb,ba[i-1].getMarginBottom(),ba[i].getMarginTop());
}bd+=ba[l-1].getMarginBottom();
}else{for(var i=1,l=ba.length;i<l;i+=1){bd+=ba[i].getMarginTop()+ba[i].getMarginBottom();
}bd+=(bb*(l-1));
}return bd;
},computeHorizontalSeparatorGaps:function(N,O,P){var S=qx.theme.manager.Decoration.getInstance().resolve(P);
var R=S.getInsets();
var Q=R.left+R.right;
var T=0;

for(var i=0,l=N.length;i<l;i++){var U=N[i];
T+=U.getMarginLeft()+U.getMarginRight();
}T+=(O+Q+O)*(l-1);
return T;
},computeVerticalSeparatorGaps:function(F,G,H){var K=qx.theme.manager.Decoration.getInstance().resolve(H);
var J=K.getInsets();
var I=J.top+J.bottom;
var L=0;

for(var i=0,l=F.length;i<l;i++){var M=F[i];
L+=M.getMarginTop()+M.getMarginBottom();
}L+=(G+I+G)*(l-1);
return L;
},arrangeIdeals:function(be,bf,bg,bh,bi,bj){if(bf<be||bi<bh){if(bf<be&&bi<bh){bf=be;
bi=bh;
}else if(bf<be){bi-=(be-bf);
bf=be;
if(bi<bh){bi=bh;
}}else if(bi<bh){bf-=(bh-bi);
bi=bh;
if(bf<be){bf=be;
}}}
if(bf>bg||bi>bj){if(bf>bg&&bi>bj){bf=bg;
bi=bj;
}else if(bf>bg){bi+=(bf-bg);
bf=bg;
if(bi>bj){bi=bj;
}}else if(bi>bj){bf+=(bi-bj);
bi=bj;
if(bf>bg){bf=bg;
}}}return {begin:bf,end:bi};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var m="on",l="qx.dynlocale",k="text",j="Boolean",i="qx.client",h="color",g="userSelect",f="changeLocale",d="qx.debug",c="enabled",L="none",K="_applyTextAlign",J="qx.ui.core.Widget",I="nowrap",H="gecko",G="changeTextAlign",F="_applyWrap",E="changeValue",D="changeContent",C="qx.ui.basic.Label",t="A",u="whiteSpace",r="_applyValue",s="center",p="_applyBuddy",q="String",n="textAlign",o="right",v="changeRich",w="normal",y="_applyRich",x="click",A="label",z="webkit",B="left";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(V){qx.ui.core.Widget.call(this);

if(V!=null){this.setValue(V);
}
if(qx.core.Variant.isSet(l,m)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:v,apply:y},wrap:{check:j,init:true,apply:F},value:{check:q,apply:r,event:E,nullable:true},buddy:{check:J,apply:p,nullable:true,init:null},textAlign:{check:[B,s,o],nullable:true,themeable:true,apply:K,event:G},appearance:{refine:true,init:A},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fR:null,__fS:null,__fT:null,__fU:null,_getContentHint:function(){if(this.__fS){this.__fV=this.__fW();
delete this.__fS;
}return {width:this.__fV.width,height:this.__fV.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bc){if(qx.core.Variant.isSet(i,H)){if(bc&&!this.isRich()){if(qx.core.Variant.isSet(d,m)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bc);
if(qx.core.Variant.isSet(i,z)){this.getContainerElement().setStyle(g,bc?k:L);
this.getContentElement().setStyle(g,bc?k:L);
}},_getContentHeightForWidth:function(bi){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fW(bi).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(T,U){this.getContentElement().setStyle(n,T);
},_applyTextColor:function(a,b){if(a){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(a));
}else{this.getContentElement().removeStyle(h);
}},__fV:{width:0,height:0},_applyFont:function(M,N){var O;

if(M){this.__fR=qx.theme.manager.Font.getInstance().resolve(M);
O=this.__fR.getStyles();
}else{this.__fR=null;
O=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(O);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},__fW:function(bd){var bh=qx.bom.Label;
var bf=this.getFont();
var be=bf?this.__fR.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||t;
var bg=this.getRich();
return bg?bh.getHtmlSize(content,be,bd):bh.getTextSize(content,be);
},_applyBuddy:function(P,Q){if(Q!=null){Q.removeBinding(this.__fT);
this.__fT=null;
this.removeListenerById(this.__fU);
this.__fU=null;
}
if(P!=null){this.__fT=P.bind(c,this,c);
this.__fU=this.addListener(x,function(){if(P.isFocusable()){P.focus.apply(P);
}},this);
}},_applyRich:function(bb){this.getContentElement().setRich(bb);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(W,X){if(W&&!this.isRich()){if(qx.core.Variant.isSet(d,m)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var Y=W?w:I;
this.getContentElement().setStyle(u,Y);
}},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(R,S){this.getContentElement().setValue(R);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(D,R,S);
}},destruct:function(){if(qx.core.Variant.isSet(l,m)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__fT!=null){var ba=this.getBuddy();

if(ba!=null&&!ba.isDisposed()){ba.removeBinding(this.__fT);
}}this.__fR=this.__fT=null;
}});
})();
(function(){var e="value",d="Please use the getValue() method instead.",c="qx.html.Label",b="Please use the setValue() method instead.";
qx.Class.define(c,{extend:qx.html.Element,members:{__di:null,_applyProperty:function(name,j){qx.html.Element.prototype._applyProperty.call(this,name,j);

if(name==e){var k=this.getDomElement();
qx.bom.Label.setValue(k,j);
}},_createDomElement:function(){var g=this.__di;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(m){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__di==h){return;
}this.__di=h;
return this;
},setValue:function(l){this._setProperty(e,l);
return this;
},getValue:function(){return this._getProperty(e);
},setContent:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,b);
return this.setValue(a);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.getValue();
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",G="auto",F="0",E="ellipsis",D="normal",C="label",B="px",A="crop",z="end",y="100%",x="visible",v="qx.bom.Label",w="Please use the setValue() method instead.",t="opera",u="Please use the getValue() method instead.",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(v,{statics:{__ia:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ib:function(){var N=this.__id(false);
document.body.insertBefore(N,document.body.firstChild);
return this._textElement=N;
},__ic:function(){var bi=this.__id(true);
document.body.insertBefore(bi,document.body.firstChild);
return this._htmlElement=bi;
},__id:function(a){var b=qx.bom.Element.create(m);
var c=b.style;
c.width=c.height=G;
c.left=c.top=p;
c.visibility=h;
c.position=q;
c.overflow=x;

if(a){c.whiteSpace=D;
}else{c.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var d=document.createElementNS(g,C);
var c=d.style;
c.padding=F;

for(var e in this.__ia){c[e]=l;
}b.appendChild(d);
}}return b;
},__ie:function(bg){var bh={};

if(bg){bh.whiteSpace=D;
}else if(qx.core.Variant.isSet(o,n)){bh.display=r;
}else{bh.overflow=h;
bh.whiteSpace=f;
bh.textOverflow=E;
bh.userSelect=s;
if(qx.core.Variant.isSet(o,t)){bh.OTextOverflow=E;
}}return bh;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(m);
Y.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var Y=X.document.createElement(m);
var bb=X.document.createElementNS(g,C);
var ba=bb.style;
ba.cursor=l;
ba.color=l;
ba.overflow=h;
ba.maxWidth=y;
ba.padding=F;
for(var bc in this.__ia){bb.style[bc]=l;
}bb.setAttribute(A,z);
Y.appendChild(bb);
}else{var Y=X.document.createElement(m);
qx.bom.element.Style.setStyles(Y,this.__ie(W));
}
if(content){this.setValue(Y,content);
}return Y;
},setValue:function(R,S){S=S||i;

if(R.useHtml){R.innerHTML=S;
}else if(qx.core.Variant.isSet(o,n)){R.firstChild.setAttribute(j,S);
}else{qx.bom.element.Attribute.set(R,k,S);
}},getValue:function(H){if(H.useHtml){return H.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return H.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(H,k);
}},getHtmlSize:function(content,T,U){var V=this._htmlElement||this.__ic();
V.style.width=U!==undefined?U+B:G;
V.innerHTML=content;
return this.__if(V,T);
},getTextSize:function(bd,be){var bf=this._textElement||this.__ib();

if(qx.core.Variant.isSet(o,n)){bf.firstChild.setAttribute(j,bd);
}else{qx.bom.element.Attribute.set(bf,k,bd);
}return this.__if(bf,be);
},__if:function(I,J){var K=this.__ia;

if(!J){J={};
}
for(var L in K){I.style[L]=J[L]||i;
}var M=qx.bom.element.Dimension.getSize(I);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){M.width++;
}}return M;
},setContent:function(O,P){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.setValue(O,P);
},getContent:function(Q){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getValue(Q);
}}});
})();
(function(){var h="0px",g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(v){if(v.getBoundingClientRect){var w=v.getBoundingClientRect();
return Math.round(w.right)-Math.round(w.left);
}else{return v.offsetWidth;
}},"default":function(l){return l.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(j){if(j.getBoundingClientRect){var k=j.getBoundingClientRect();
return Math.round(k.bottom)-Math.round(k.top);
}else{return j.offsetHeight;
}},"default":function(t){return t.offsetHeight;
}}),getSize:function(i){return {width:this.getWidth(i),height:this.getHeight(i)};
},__gX:{visible:true,hidden:true},getContentWidth:function(x){var z=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getX(x);
var B=parseInt(z.get(x,c)||h,10);
var D=parseInt(z.get(x,d)||h,10);

if(this.__gX[A]){return x.clientWidth-B-D;
}else{if(x.clientWidth>=x.scrollWidth){return Math.max(x.clientWidth,x.scrollWidth)-B-D;
}else{var C=x.scrollWidth-B;
var y=qx.bom.client.Engine;

if(y.NAME===g&&y.VERSION==6){C-=D;
}return C;
}}},getContentHeight:function(m){var o=qx.bom.element.Style;
var q=qx.bom.element.Overflow.getY(m);
var r=parseInt(o.get(m,b)||h,10);
var p=parseInt(o.get(m,a)||h,10);

if(this.__gX[q]){return m.clientHeight-r-p;
}else{if(m.clientHeight>=m.scrollHeight){return Math.max(m.clientHeight,m.scrollHeight)-r-p;
}else{var s=m.scrollHeight-r;
var n=qx.bom.client.Engine;

if(n.NAME===g&&n.VERSION==6){s-=p;
}return s;
}}},getContentSize:function(u){return {width:this.getContentWidth(u),height:this.getContentHeight(u)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(f){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__qm";
qx.Mixin.define(d,{construct:function(){this.__qm=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__qm:null,_applyBlockerColor:function(l,m){this.__qm.setColor(l);
},_applyBlockerOpacity:function(i,j){this.__qm.setOpacity(i);
},block:function(){this.__qm.block();
},isBlocked:function(){return this.__qm.isBlocked();
},unblock:function(){this.__qm.unblock();
},forceUnblock:function(){this.__qm.forceUnblock();
},blockContent:function(k){this.__qm.blockContent(k);
},isContentBlocked:function(){return this.__qm.isContentBlocked();
},unblockContent:function(){this.__qm.unblockContent();
},forceUnblockContent:function(){this.__qm.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__qm.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__qm.getBlockerElement();
},getBlocker:function(){return this.__qm;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__mk",b="__ml",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__mk:null,__ml:null,getWindowManager:function(){if(!this.__ml){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ml;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__ml){this.__ml.setDesktop(null);
}o.setDesktop(this);
this.__ml=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);

if(k){k.setActive(true);
}
if(l){l.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._addWindow(j);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(p){if(qx.Class.isDefined(i)&&p instanceof qx.ui.window.Window){this._removeWindow(p);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(f,this._onChangeActive,this);
m.removeListener(h,this._onChangeModal,this);
m.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__mk){this.__mk=[];
}return this.__mk;
}},destruct:function(){this._disposeArray(c);
this._disposeObjects(b);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__lb:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(y,z){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__lb;

if(!v){this.__lb=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,a,qx.bom.element.Cursor.compile(s).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(A,B){if(B===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(A===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__lb=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var p="resize",o="position",n="0px",m="webkit",l="paddingLeft",k="$$widget",j="qx.ui.root.Application",i="hidden",h="qx.client",g="div",c="paddingTop",f="100%",d="absolute";
qx.Class.define(j,{extend:qx.ui.root.Abstract,construct:function(q){this.__qn=qx.dom.Node.getWindow(q);
this.__qo=q;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qn,p,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qn:null,__qo:null,_createContainerElement:function(){var r=this.__qo;
if(qx.core.Variant.isSet(h,m)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=i;
v.padding=v.margin=s.padding=s.margin=n;
v.width=v.height=s.width=s.height=f;
var u=r.createElement(g);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(o,d);
t.setAttribute(k,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var z=qx.bom.Viewport.getWidth(this.__qn);
var A=qx.bom.Viewport.getHeight(this.__qn);
return {minWidth:z,width:z,maxWidth:z,minHeight:A,height:A,maxHeight:A};
},_applyPadding:function(a,b,name){if(a&&(name==c||name==l)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,a,b,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qn=this.__qo=null;
}});
})();
(function(){var r="zIndex",q="px",p="keydown",o="deactivate",n="This method is not needed anymore.",m="resize",l="keyup",k="keypress",j="backgroundColor",h="_applyOpacity",E="Use 'getBlockerElement' instead.",D="__nT",C="opacity",B="interval",A="__nO",z="Tab",y="Color",x="qx.ui.root.Page",w="Use 'getContentBlockerElement' instead.",v="Number",t="qx.ui.core.Blocker",u="__nQ",s="_applyColor";
qx.Class.define(t,{extend:qx.core.Object,construct:function(Q){qx.core.Object.call(this);
this._widget=Q;
this._isPageRoot=(qx.Class.isDefined(x)&&Q instanceof qx.ui.root.Page);

if(this._isPageRoot){Q.addListener(m,this.__nU,this);
}this.__nL=[];
this.__nM=[];
this.__nN=[];
},properties:{color:{check:y,init:null,nullable:true,apply:s,themeable:true},opacity:{check:v,init:1,apply:h,themeable:true}},members:{__nO:null,__nP:0,__nQ:null,__nN:null,__nL:null,__nM:null,__nR:null,__nS:0,__nT:null,_isPageRoot:false,_widget:null,__nU:function(e){var R=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:R.width,height:R.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:R.width,height:R.height});
}},_applyColor:function(d,f){var g=qx.theme.manager.Color.getInstance().resolve(d);
this.__nV(j,g);
},_applyOpacity:function(J,K){this.__nV(C,J);
},__nV:function(L,M){var N=[];
this.__nO&&N.push(this.__nO);
this.__nQ&&N.push(this.__nQ);

for(var i=0;i<N.length;i++){N[i].setStyle(L,M);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.__nS+=1;

if(this.__nS==1){this.__nR=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,n);
this.__nS-=1;

if(this.__nS==0){this._widget.setAnonymous(this.__nR);
}},_backupActiveWidget:function(){var S=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nL.push(S.getActive());
this.__nM.push(S.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var H=this.__nL.length;

if(H>0){var G=this.__nL[H-1];

if(G){qx.bom.Element.activate(G);
}this.__nL.pop();
}var F=this.__nM.length;

if(F>0){var G=this.__nM[F-1];

if(G){qx.bom.Element.focus(this.__nM[F-1]);
}this.__nM.pop();
}},__nW:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__nO){this.__nO=this.__nW();
this.__nO.setStyle(r,15);
this._widget.getContainerElement().add(this.__nO);
this.__nO.exclude();
}return this.__nO;
},block:function(){this.__nP++;

if(this.__nP<2){this._backupActiveWidget();
var I=this.getBlockerElement();
I.include();
I.activate();
I.addListener(o,this.__oc,this);
I.addListener(k,this.__ob,this);
I.addListener(p,this.__ob,this);
I.addListener(l,this.__ob,this);
}},isBlocked:function(){return this.__nP>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nP--;

if(this.__nP<1){this.__nX();
this.__nP=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nP=0;
this.__nX();
},__nX:function(){this._restoreActiveWidget();
var V=this.getBlockerElement();
V.removeListener(o,this.__oc,this);
V.removeListener(k,this.__ob,this);
V.removeListener(p,this.__ob,this);
V.removeListener(l,this.__ob,this);
V.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__nQ){this.__nQ=this.__nW();
this._widget.getContentElement().add(this.__nQ);
this.__nQ.exclude();
}return this.__nQ;
},blockContent:function(T){var U=this.getContentBlockerElement();
U.setStyle(r,T);
this.__nN.push(T);

if(this.__nN.length<2){U.include();

if(this._isPageRoot){if(!this.__nT){this.__nT=new qx.event.Timer(300);
this.__nT.addListener(B,this.__oa,this);
}this.__nT.start();
this.__oa();
}}},isContentBlocked:function(){return this.__nN.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nN.pop();
var a=this.__nN[this.__nN.length-1];
var b=this.getContentBlockerElement();
b.setStyle(r,a);

if(this.__nN.length<1){this.__nY();
this.__nN=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nN=[];
var c=this.getContentBlockerElement();
c.setStyle(r,null);
this.__nY();
},__nY:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nT.stop();
}},__oa:function(){var O=this._widget.getContainerElement().getDomElement();
var P=qx.dom.Node.getDocument(O);
this.getContentBlockerElement().setStyles({height:P.documentElement.scrollHeight+q,width:P.documentElement.scrollWidth+q});
},__ob:function(e){if(e.getKeyIdentifier()==z){e.stop();
}},__oc:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(m,this.__nU,this);
}this._disposeObjects(u,A,D);
this.__nR=this.__nL=this.__nM=this._widget=this.__nN=null;
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
this.addListener(s,this.__pb,this);
this.addListener(n,this.__pb,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pb:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var R="keypress",Q="focusout",P="activate",O="Tab",N="__bg",M="singleton",L="deactivate",K="focusin",J="qx.ui.core.FocusHandler";
qx.Class.define(J,{extend:qx.core.Object,type:M,construct:function(){qx.core.Object.call(this);
this.__bg={};
},members:{__bg:null,__bh:null,__bi:null,__bj:null,connectTo:function(a){a.addListener(R,this.__bk,this);
a.addListener(K,this._onFocusIn,this,true);
a.addListener(Q,this._onFocusOut,this,true);
a.addListener(P,this._onActivate,this,true);
a.addListener(L,this._onDeactivate,this,true);
},addRoot:function(S){this.__bg[S.$$hash]=S;
},removeRoot:function(u){delete this.__bg[u.$$hash];
},getActiveWidget:function(){return this.__bh;
},isActive:function(t){return this.__bh==t;
},getFocusedWidget:function(){return this.__bi;
},isFocused:function(A){return this.__bi==A;
},isFocusRoot:function(o){return !!this.__bg[o.$$hash];
},_onActivate:function(e){var w=e.getTarget();
this.__bh=w;
var v=this.__bl(w);

if(v!=this.__bj){this.__bj=v;
}},_onDeactivate:function(e){var z=e.getTarget();

if(this.__bh==z){this.__bh=null;
}},_onFocusIn:function(e){var I=e.getTarget();

if(I!=this.__bi){this.__bi=I;
I.visualizeFocus();
}},_onFocusOut:function(e){var j=e.getTarget();

if(j==this.__bi){this.__bi=null;
j.visualizeBlur();
}},__bk:function(e){if(e.getKeyIdentifier()!=O){return;
}
if(!this.__bj){return;
}e.stopPropagation();
e.preventDefault();
var b=this.__bi;

if(!e.isShiftPressed()){var c=b?this.__bp(b):this.__bn();
}else{var c=b?this.__bq(b):this.__bo();
}if(c){c.tabFocus();
}},__bl:function(x){var y=this.__bg;

while(x){if(y[x.$$hash]){return x;
}x=x.getLayoutParent();
}return null;
},__bm:function(T,U){if(T===U){return 0;
}var W=T.getTabIndex()||0;
var V=U.getTabIndex()||0;

if(W!=V){return W-V;
}var bc=T.getContainerElement().getDomElement();
var bb=U.getContainerElement().getDomElement();
var ba=qx.bom.element.Location;
var Y=ba.get(bc);
var X=ba.get(bb);
if(Y.top!=X.top){return Y.top-X.top;
}if(Y.left!=X.left){return Y.left-X.left;
}var bd=T.getZIndex();
var be=U.getZIndex();

if(bd!=be){return bd-be;
}return 0;
},__bn:function(){return this.__bt(this.__bj,null);
},__bo:function(){return this.__bu(this.__bj,null);
},__bp:function(d){var f=this.__bj;

if(f==d){return this.__bn();
}
while(d&&d.getAnonymous()){d=d.getLayoutParent();
}
if(d==null){return [];
}var g=[];
this.__br(f,d,g);
g.sort(this.__bm);
var h=g.length;
return h>0?g[0]:this.__bn();
},__bq:function(bf){var bg=this.__bj;

if(bg==bf){return this.__bo();
}
while(bf&&bf.getAnonymous()){bf=bf.getLayoutParent();
}
if(bf==null){return [];
}var bh=[];
this.__bs(bg,bf,bh);
bh.sort(this.__bm);
var bi=bh.length;
return bi>0?bh[bi-1]:this.__bo();
},__br:function(parent,p,q){var r=parent.getLayoutChildren();
var s;

for(var i=0,l=r.length;i<l;i++){s=r[i];
if(!(s instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(s)&&s.isEnabled()&&s.isVisible()){if(s.isTabable()&&this.__bm(p,s)<0){q.push(s);
}this.__br(s,p,q);
}}},__bs:function(parent,E,F){var G=parent.getLayoutChildren();
var H;

for(var i=0,l=G.length;i<l;i++){H=G[i];
if(!(H instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(H)&&H.isEnabled()&&H.isVisible()){if(H.isTabable()&&this.__bm(E,H)>0){F.push(H);
}this.__bs(H,E,F);
}}},__bt:function(parent,B){var C=parent.getLayoutChildren();
var D;

for(var i=0,l=C.length;i<l;i++){D=C[i];
if(!(D instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(D)&&D.isEnabled()&&D.isVisible()){if(D.isTabable()){if(B==null||this.__bm(D,B)<0){B=D;
}}B=this.__bt(D,B);
}}return B;
},__bu:function(parent,k){var m=parent.getLayoutChildren();
var n;

for(var i=0,l=m.length;i<l;i++){n=m[i];
if(!(n instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(n)&&n.isEnabled()&&n.isVisible()){if(n.isTabable()){if(k==null||this.__bm(n,k)>0){k=n;
}}k=this.__bu(n,k);
}}return k;
}},destruct:function(){this._disposeMap(N);
this.__bi=this.__bh=this.__bj=null;
}});
})();
(function(){var o="qx.client",n="head",m="text/css",l="stylesheet",k="}",j='@import "',h="{",g='";',f="qx.bom.Stylesheet",e="link",d="style";
qx.Class.define(f,{statics:{includeFile:function(B,C){if(!C){C=document;
}var D=C.createElement(e);
D.type=m;
D.rel=l;
D.href=qx.util.ResourceManager.getInstance().toUri(B);
var E=C.getElementsByTagName(n)[0];
E.appendChild(D);
},createElement:qx.core.Variant.select(o,{"mshtml":function(I){var J=document.createStyleSheet();

if(I){J.cssText=I;
}return J;
},"default":function(P){var Q=document.createElement(d);
Q.type=m;

if(P){Q.appendChild(document.createTextNode(P));
}document.getElementsByTagName(n)[0].appendChild(Q);
return Q.sheet;
}}),addRule:qx.core.Variant.select(o,{"mshtml":function(F,G,H){F.addRule(G,H);
},"default":function(R,S,T){R.insertRule(S+h+T+k,R.cssRules.length);
}}),removeRule:qx.core.Variant.select(o,{"mshtml":function(U,V){var W=U.rules;
var X=W.length;

for(var i=X-1;i>=0;--i){if(W[i].selectorText==V){U.removeRule(i);
}}},"default":function(Y,ba){var bb=Y.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;--i){if(bb[i].selectorText==ba){Y.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(o,{"mshtml":function(y){var z=y.rules;
var A=z.length;

for(var i=A-1;i>=0;i--){y.removeRule(i);
}},"default":function(p){var q=p.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){p.deleteRule(i);
}}}),addImport:qx.core.Variant.select(o,{"mshtml":function(K,L){K.addImport(L);
},"default":function(w,x){w.insertRule(j+x+g,w.cssRules.length);
}}),removeImport:qx.core.Variant.select(o,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(s,t){var u=s.cssRules;
var v=u.length;

for(var i=v-1;i>=0;i--){if(u[i].href==t){s.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(o,{"mshtml":function(M){var N=M.imports;
var O=N.length;

for(var i=O-1;i>=0;i--){M.removeImport(i);
}},"default":function(a){var b=a.cssRules;
var c=b.length;

for(var i=c-1;i>=0;i--){if(b[i].type==b[i].IMPORT_RULE){a.deleteRule(i);
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
(function(){var l="'>",k="[",h=", ",g="</span>",f="<span class='type-",e="</span> ",d="}",c="",b="]",a="{",I="map",H="<span class='object'>",G="]:",F="&gt;",E="<span class='object' title='Object instance with hash code: ",D="string",C="level-",B="0",A="&lt;",z="<span class='offset'>",s=":",t="qx.log.appender.Util",q="&amp;",r="&#39;",o="DIV",p="<span>",m="&quot;",n="<span class='type-key'>",u="</span>:<span class='type-",v="</span>: ",x=" ",w="]</span>: ",y="?";
qx.Class.define(t,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(z,this.formatOffset(R.offset,6),e);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(E+S.$$hash+l,S.classname,k,S.$$hash,w);
}}else if(R.clazz){bc.push(H+R.clazz.classname,v);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===D){V.push(p+this.escapeHTML(T)+g);
}else if(T.key){V.push(n+T.key+u+T.type+l+this.escapeHTML(T.text)+g);
}else{V.push(f+T.type+l+this.escapeHTML(T.text)+g);
}}bc.push(f+Y.type+l);

if(Y.type===I){bc.push(a,V.join(h),d);
}else{bc.push(k,V.join(h),b);
}bc.push(g);
}else{bc.push(f+Y.type+l+this.escapeHTML(bb)+e);
}}var W=document.createElement(o);
W.innerHTML=bc.join(c);
W.className=C+R.level;
return W;
},formatOffset:function(N,length){var Q=N.toString();
var O=(length||6)-Q.length;
var P=c;

for(var i=0;i<O;i++){P+=B;
}return P+Q;
},escapeHTML:function(K){return String(K).replace(/[<>&"']/g,this.__tA);
},__tA:function(L){var M={"<":A,">":F,"&":q,"'":r,'"':m};
return M[L]||y;
},toText:function(J){return this.toTextArray(J).join(x);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+k+be.$$hash+G);
}}else if(bd.clazz){bl.push(bd.clazz.classname+s);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===I){bl.push(a,bg.join(h),d);
}else{bl.push(k,bg.join(h),b);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var g="debug",f="log",e="qx.log.appender.Native",d="qx.client";
qx.Class.define(e,{statics:{process:qx.core.Variant.select(d,{"gecko":function(h){if(window.console&&console.firebug){console[h.level].call(console,qx.log.appender.Util.toText(h));
}},"mshtml":function(a){if(window.console){var c=a.level;

if(c==g){c=f;
}var b=qx.log.appender.Util.toText(a);
console[c](b);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==g){k=f;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(m){}})},defer:function(l){qx.log.Logger.register(l);
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
this.__FX=X;
this.__FY=X.childNodes[1];
this.__Ga=X.childNodes[2].firstChild;
this.__Gf();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gg,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__FY.innerHTML=k;
},process:function(bc){this.__FY.appendChild(qx.log.appender.Util.toHtml(bc));
this.__Gb();
},__Gb:function(){this.__FY.scrollTop=this.__FY.scrollHeight;
},__Gc:true,toggle:function(){if(!this.__FX){this.init();
}else if(this.__FX.style.display==h){this.show();
}else{this.__FX.style.display=h;
}},show:function(){if(!this.__FX){this.init();
}else{this.__FX.style.display=K;
this.__FY.scrollTop=this.__FY.scrollHeight;
}},__Gd:[],execute:function(){var bg=this.__Ga.value;

if(bg==k){return;
}
if(bg==u){return this.clear();
}var be=document.createElement(V);
be.innerHTML=qx.log.appender.Util.escapeHTML(C+bg);
be.className=U;
this.__Gd.push(bg);
this.__Ge=this.__Gd.length;
this.__FY.appendChild(be);
this.__Gb();

try{var bf=window.eval(bg);
}catch(bb){qx.log.Logger.error(bb);
}
if(bf!==undefined){qx.log.Logger.debug(bf);
}},__Gf:function(e){this.__FY.style.height=(this.__FX.clientHeight-this.__FX.firstChild.offsetHeight-this.__FX.lastChild.offsetHeight)+c;
},__Gg:function(e){var bi=e.getKeyIdentifier();
if((bi==H)||(bi==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__FX){return;
}if(!qx.dom.Hierarchy.contains(this.__FX,e.getTarget())){return;
}if(bi==d&&this.__Ga.value!=k){this.execute();
this.__Ga.value=k;
}if(bi==i||bi==E){this.__Ge+=bi==i?-1:1;
this.__Ge=Math.min(Math.max(0,this.__Ge),this.__Gd.length);
var bh=this.__Gd[this.__Ge];
this.__Ga.value=bh||k;
this.__Ga.select();
}}},defer:function(bd){qx.event.Registration.addListener(document.documentElement,g,bd.__Gg,bd);
}});
})();
(function(){var ew="execute",ev="value",eu="/",et="",es="current",er="excluded",eq="visible",ep="modelLink",eo="tags",en="html",dT="category",dS="all",dR="node",dQ="changeSelection",dP="_blank",dO="qx.theme.Modern",dN="horizontal",dM="~",dL="js",dK="widget",eD="log",eE="separator-vertical",eB="request",eC="^.*",ez="filled",eA="changeValue",ex="right",ey="icon/22/actions/media-playback-start.png",eF="qx.version",eG="demobrowser.DemoBrowser",eg="HTML Code",ef="Run previous demo",ei="_history",eh='_cmdNamespacePollution',ek="icon/22/apps/utilities-color-chooser.png",ej="Ctrl+N",em="completed",el="Previous",ee="Run",ed="failed",cA="Open demo in the playground",cB="f1",cC="Debug",cD="Display log file",cE="icon/22/actions/media-playback-stop.png",cF="icon/22/apps/utilities-log-viewer.png",cG="Ctrl+O",cH="Log File",cI="Stop playback after current demo",cJ="qx.theme.Classic",eK='"',eJ="logappender",eI="Choose theme",eH=".html",eO="icon/22/apps/internet-web-browser.png",eN="#",eM="f2",eL="JS Code",eQ="icon/22/mimetypes/executable.png",eP="ig",dj="noPlayground",dk="Stop",dh='"}',di="animation",dn="icon/22/actions/edit-redo.png",dp='_cmdDisposeSample',dl="toolbar",dm="icon/22/apps/office-spreadsheet.png",df="mshtml",dg="To Playground",cR="demo/welcome.html",cQ='_cmdSampleInOwnWindow',cT=".*",cS=" ",cN="background-splitpane",cM='demo/',cP="Debugging options",cO="Ctrl+P",cL="Filter...",cK="/playground/",du="Dispose Demo",dv='{"code": ',dw="Classic Theme",dx="Global Namespace Pollution",dq="icon/16/actions/edit-find.png",dr="_",ds="Own Window",dt="Display HTML source",dy="main",dz='_cmdObjectSummary',dc='_cmdNextSample',db="left",da=".",cY="Run next demo",cX='_cmdPrevSample',cW="Ctrl+Left",cV="tree1",cU="Display JavaScript source",de='_cmdRunSample',dd="Next",dA="qx.client",dB="F5",dC="http://demo.qooxdoo.org/",dD="Modern Theme",dE="Open demo in new window",dF="interval",dG="runbutton",dH="Ctrl+Right",dI="?qx.theme=",dJ="textfield",dX="Ctrl+D",dW="mainsplit",dV="icon/22/actions/go-previous.png",dU="Object Summary",ec="icon/22/actions/application-exit.png",eb="Run the selected demo(s)",ea="icon/22/actions/go-next.png",dY="Theme";
qx.Class.define(eG,{extend:qx.ui.container.Composite,construct:function(){var M,J,O;
qx.ui.container.Composite.call(this);
var L=new qx.ui.layout.VBox;
L.setSeparator(eE);
this.setLayout(L);
this.add(this.__KM());
this.widgets={};
this.tests={};
this.__Ka=dO;
this.__Ks();
this.__Kb=this.__Kz();
this.add(this.__Kb);
var R=new qx.ui.splitpane.Pane(dN);
this.mainsplit=R;
var U=new qx.ui.splitpane.Pane(dN);
U.setDecorator(null);
this.infosplit=U;
this.add(R,{flex:1});
var S=new qx.ui.container.Composite();
S.setLayout(new qx.ui.layout.VBox(3));
S.setBackgroundColor(cN);
R.add(S,0);
{};
var K=new qx.ui.container.Composite();
K.setLayout(new qx.ui.layout.HBox(3));
K.setAppearance(dJ);
S.add(K);
var N=new qx.ui.basic.Image(dq);
K.add(N);
this.__Kc=new qx.ui.form.TextField();
this.__Kc.setLiveUpdate(true);
this.__Kc.setAppearance(dK);
this.__Kc.setPlaceholder(cL);
this.__Kc.addListener(eA,function(e){this.filter(e.getData());
},this);
K.add(this.__Kc,{flex:1});
{};
this.__Kd=new qx.ui.basic.Label(et);
this.__Kd.setAppearance(dK);
this.__Kd.setWidth(80);
this.__Kd.setTextAlign(ex);
K.add(this.__Kd);
R.add(U,1);
this.__Ke=this.__KE();
S.add(this.__Ke,{flex:1});
var T=this.__KA();
U.add(T,2);
var H=this.__KC();
var I=this.__KD();
var P=this.__KB();
var Q=new qx.ui.container.Stack;
Q.setDecorator(dy);
Q.add(H);
Q.add(I);
Q.add(P);
this.viewGroup.addListener(dQ,function(e){var bv=e.getData()[0];
var bw=bv!=null?bv.getUserData(ev):et;

switch(bw){case en:this.setSelection([H]);
Q.show();
break;
case dL:this.setSelection([I]);
Q.show();
break;
case eD:this.setSelection([P]);
Q.show();
break;
default:this.resetSelection();
Q.exclude();
}},Q);
U.add(Q,1);
Q.resetSelection();
Q.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(eB,function(e){var fs=e.getData().replace(dM,eu);

if(this._currentSample!=fs){this.setCurrentSample(fs);
}},this);
this.__Kf=[this.__Ko,this.__Kj,this.__Kp,this.__Kq];
this.__Kg=new qx.event.Timer(250);
this.__Kg.addListener(dF,this.__KG,this);
this.__Kg.start();
},properties:{playDemos:{check:[dS,dT,es],init:es}},members:{__Kh:null,__Ka:null,__Kg:null,__Ki:null,__Ke:null,__Kd:null,__Kc:null,__Kj:null,__Kk:null,__Kf:null,__Kl:null,__Km:null,__Kn:null,__Ko:null,__Kp:null,__Kq:null,__Kr:null,__Kb:null,defaultUrl:cR,playgroundUrl:dC+qx.core.Setting.get(eF)+cK,__Ks:function(){this._cmdObjectSummary=new qx.ui.core.Command(cG);
this._cmdObjectSummary.addListener(ew,this.__Kt,this);
this._cmdRunSample=new qx.ui.core.Command(dB);
this._cmdRunSample.addListener(ew,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(cW);
this._cmdPrevSample.addListener(ew,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(dH);
this._cmdNextSample.addListener(ew,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(ej);
this._cmdSampleInOwnWindow.addListener(ew,this.__Ku,this);
this._cmdDisposeSample=new qx.ui.core.Command(dX);
this._cmdDisposeSample.addListener(ew,this.__Kx,this);
this._cmdNamespacePollution=new qx.ui.core.Command(cO);
this._cmdNamespacePollution.addListener(ew,this.__Ky,this);
},__Kt:function(){var fz=this.__Kh.getWindow();

if(fz&&fz.qx){alert(fz.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Ku:function(){var G=this.__Kh.getWindow().location.href;
window.open(G,dP);
},__Kv:function(V){var W=!!V;
var X=this.__Ke.getSelection()[0].getUserData(eo);

if(X){W=W&&!qx.lang.Array.contains(X,dj);
}this.__Kk=V;
},__Kw:function(){if(this.__Kk){var l=this.__Kk;
var k=dv+eK+encodeURIComponent(l)+dh;
var h=this.playgroundUrl+eN+encodeURIComponent(k);
window.open(h,dP);
}else{alert(this.tr("Could not open the Playground."));
}},__Kx:function(e){var fn=this.__Kh.getWindow();

if(fn&&fn.qx){fn.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Ky:function(e){var fo=this.__Kh.getWindow();

if(fo&&fo.qx){alert(fo.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__Kz:function(){var bV=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
bV.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(ee),ey);
this._runbutton.addListener(ew,this.runSample,this);
this._runbutton.setToolTipText(eb);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(dk),cE);
this._stopbutton.addListener(ew,this.stopSample,this);
this._stopbutton.setToolTipText(cI);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(er);
this._runbutton.setMinWidth(60);
this._stopbutton.setMinWidth(60);
var cj=new qx.ui.toolbar.Button(this.tr(el),dV);
cj.addListener(ew,this.playPrev,this);
cj.setToolTipText(ef);
this._navPart.add(cj);
var cm=new qx.ui.toolbar.Button(this.tr(dd),ea);
cm.addListener(ew,this.playNext,this);
cm.setToolTipText(cY);
this._navPart.add(cm);
var cf=new qx.ui.toolbar.Button(this.tr(ds),dn);
cf.addListener(ew,this.__Ku,this);
cf.setToolTipText(dE);
this.__Ko=cf;
this._navPart.add(cf);
{var bU=new qx.ui.toolbar.Button(this.tr(dg),ec);
bU.addListener(ew,this.__Kw,this);
bU.setToolTipText(cA);
bU.setEnabled(false);
if(qx.core.Variant.isSet(dA,df)){bU.exclude();
}this.__Kj=bU;
this._navPart.add(bU);
};
var bW=new qx.ui.toolbar.Part;
this.__Kq=bW;
bV.add(bW);
{var ci=new qx.ui.menu.Menu;
this.__Kr=ci;
var cd=new qx.ui.menu.RadioButton(dD);
var cb=new qx.ui.menu.RadioButton(dw);
cd.setUserData(ev,dO);
cd.setValue(true);
cb.setUserData(ev,cJ);
var ck=new qx.ui.form.RadioGroup(cd,cb);
ck.addListener(dQ,this.__KL,this);
ci.add(cd);
ci.add(cb);
var bS=new qx.ui.toolbar.MenuButton(this.tr(dY),ek,ci);
bS.setToolTipText(eI);
bW.add(bS);
};
var bY=new qx.ui.menu.Menu;
{var ca=new qx.ui.menu.Button(this.tr(dU));
ca.setCommand(this._cmdObjectSummary);
bY.add(ca);
var cl=new qx.ui.menu.Button(this.tr(dx));
cl.setCommand(this._cmdNamespacePollution);
bY.add(cl);
};
var cg=new qx.ui.menu.Button(this.tr(du));
cg.setCommand(this._cmdDisposeSample);
bY.add(cg);
var ch=new qx.ui.toolbar.MenuButton(this.tr(cC),dm,bY);
ch.setToolTipText(cP);
bW.add(ch);
var bT=new qx.ui.toolbar.Part;
this.__Kp=bT;
bV.addSpacer();
bV.add(bT);
{var cn=new qx.ui.toolbar.RadioButton(eg,eO);
cn.setToolTipText(dt);
var ce=new qx.ui.toolbar.RadioButton(eL,eQ);
ce.setToolTipText(cU);
cn.setUserData(ev,en);
ce.setUserData(ev,dL);
bT.add(cn);
bT.add(ce);
};
var cc=new qx.ui.toolbar.RadioButton(cH,cF);
cc.setToolTipText(cD);
cc.setUserData(ev,eD);
bT.add(cc);
var bX=this.viewGroup=new qx.ui.form.RadioGroup;
bX.setAllowEmptySelection(true);
bX.add(cc);
{bX.add(cn,ce);
};
return bV;
},__KA:function(){var eR=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
eR.addListener("load",this.__KF,this);
this.__Kh=eR;
return eR;
},__KB:function(){var p=new qx.ui.layout.VBox(0,"middle","main");
p.setAlignX("right");
var v=new qx.ui.container.Composite(p);
var n=new qx.ui.decoration.Background().set({backgroundColor:"background-medium"});
v.setDecorator(n);
var q=new qx.ui.form.Button(this.tr("Clear log"),"icon/22/actions/edit-clear.png");
q.setAllowGrowX(false);
q.setMargin(5);
q.addListener("execute",function(){this.logappender.clear();
},this);
v.add(q,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow("auto","auto");
this.f2.setFont("monospace");
this.f2.setBackgroundColor("white");
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var o=document.createElement("div");
this.logelem=document.createElement("div");
this.logelem.style.padding="8px";
this.logappender.setElement(this.logelem);
o.appendChild(this.logelem);
this.f2.getContentElement().useElement(o);
v.add(this.f2,{flex:1});
return v;
},__KC:function(){var ft=new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
ft.setOverflow("auto","auto");
ft.setFont("monospace");
ft.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.html.page"]=ft;
ft.getContentElement().setAttribute("id","qx_srcview");
return ft;
},__KD:function(){var f=new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
f.setOverflow("auto","auto");
f.setFont("monospace");
f.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.js.page"]=f;
f.getContentElement().setAttribute("id","qx_srcview");
return f;
},__KE:function(){var D=new qx.ui.tree.Tree();
var C=new qx.ui.tree.TreeFolder("Demos");
D.setAppearance("demo-tree");
D.setRoot(C);
D.setSelection([C]);
this.tree=this.widgets["treeview.flat"]=D;
D.addListener("changeSelection",this.treeGetSelection,this);
D.addListener("dblclick",function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return D;
},treeGetSelection:function(e){var fA=this.tree.getSelection()[0];
var fB=fA.getUserData(ep);
this.tests.selected=this.tests.handler.getFullName(fB);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var cp=this._sampleToTreeNodeMap;
var cv=null;
var cz=null;
var cy=/\?autorun=true/.test(location.href);
var cu=this._history.getState();
var cs=cu.match(/([^~]+)~/);

if(cs){cv=cs[1];
}else{var cq=cu.match(/([^~][\w]*)/);

if(cq){cv=cq[1];

if(cy){this.setPlayDemos(dT);
}}else{cv=di;

if(cy){this.setPlayDemos(dS);
}}}function cx(fb,fc){var ff=fc.getChildren();
var t;

for(var i=0;i<ff.length;i++){var fe=ff[i];

if(fe.hasChildren()){t=new qx.ui.tree.TreeFolder(cr.polish(fe.label));
t.setUserData(ez,false);
t.setUserData(dR,fe);
cx(t,t.getUserData(dR));

if(fe.label==cv){cz=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(cr.polish(fe.label));
t.setUserData(eo,fe.tags);
{};
var fd=fe.pwd().slice(1).join(eu)+eu+fe.label;
cp[fd]=t;
}fb.add(t);
t.setUserData(ep,fe);
fe.widgetLinkFull=t;
}}var ct=this.tests.handler.ttree;
var cr=this;
this.tree.setUserData(ep,ct);
this.tree.getRoot().setOpen(true);
cx(this.tree.getRoot(),ct);
{};

if(cz!=null){this.tree.setSelection([cz]);
}},runSample:function(e){if(e&&e.getType()===ew){if(this.tests.selected===et){this.setPlayDemos(dS);
}else if(this.tests.selected.indexOf(en)>0){this.setPlayDemos(es);
}else{this.setPlayDemos(dT);
}}this._runbutton.setVisibility(er);
this._stopbutton.setVisibility(eq);

if(this.tests.selected!=et){var bR=this.tests.selected.replace(da,eu);
this.setCurrentSample(bR);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(es);
this._stopbutton.setVisibility(er);
this._runbutton.setVisibility(eq);
},setCurrentSample:function(fj){if(!fj){return;
}
if(!this._sampleToTreeNodeMap){return;
}var fk;
var fl=this._sampleToTreeNodeMap[fj];

if(fl){fl.getTree().setSelection([fl]);
fk=cM+fj;
{fk+=dI+this.__Ka;
};
}else{fk=this.defaultUrl;
}
if(this.__Kh.getSource()==fk){this.__Kh.reload();
}else{this.__Ki=false;
this.__Kh.setSource(fk);
}if(fk==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=fj;
this._currentSampleUrl=fk;
},__KF:function(){var bE=this.__Kh.getWindow();
var bF=bE.location.pathname+"";
var bM=bF.indexOf("?");

if(bM!=-1){bF=bF.substring(0,bM+1);
}var bL=this.__Kh.getSource();

if(bL!=null&&bL!=this.defaultUrl){var bD=bE.location.href;
var bJ=bD.indexOf("/demo/")+6;
var bG=bD.indexOf("?");
bG=bG==-1?bD.length:bG;
var bH=bD.substring(bJ,bG).split("/");
var bK=String.fromCharCode(187);

if(bH.length==2){var bB=bH[0];
bB=bB.charAt(0).toUpperCase()+bB.substring(1);
var bI=bH[1].replace(".html","").replace("_"," ");
bI=bI.charAt(0).toUpperCase()+bI.substring(1);
var bC="qooxdoo "+bK+" Demo Browser "+bK+" "+bB+" "+bK+" "+bI;
}else{var bC="qooxdoo "+bK+" Demo Browser "+bK+" Start";
}document.title=bC;
}if(this.getPlayDemos()!="current"){if(!bI){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility("excluded");
this._runbutton.setVisibility("visible");
}},__KG:function(e){var fp=this.__Kh.getWindow();

if(fp&&fp.qx&&fp.qx.log&&fp.qx.log.appender){if(!this.__Ki){this.__Ki=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{fp.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__KH(this._currentSampleUrl);
}}}else{this.__Ki=false;
}},filter:function(Y){var bh=new RegExp(eC+Y+cT,eP);
var bf=this.__Ke.getRoot().getItems(true,true);
var bg=0;
var ba=0;

for(var i=0;i<bf.length;i++){var bi=bf[i];
var parent=bi.getParent();
var be=bi.getUserData(eo);
var bb=false;
var bj=false;
{bj=true;
};

if(be!=null){for(var j=0;j<be.length;j++){bb=!!be[j].match(bh);
{if(bb){break;
}};
}}
if(bi.getChildren().length==0){ba++;
}
if((bb||(bi.getLabel().search(bh)!=-1)||(parent.getLabel().search(bh)!=-1))&&bj){if(bi.getChildren().length==0){bg++;
}bi.show();
bi.getParent().setOpen(true);
bi.getParent().show();
}else{bi.exclude();
}}if(Y==et){var bd=this.__Ke.getRoot().getItems(false,true);
var bc=this.__Ke.getSelection();
for(var i=0;i<bd.length;i++){if(bd[i]==bc[0]||bd[i]==bc[0].getParent()){continue;
}bd[i].setOpen(false);
}}this.__Kd.setValue(bg+eu+ba);
},__KH:function(E){if(typeof (E)!="string"){return;
}var F=new qx.io.remote.Request(E);
F.setTimeout(180000);
F.setProhibitCaching(false);
F.addListener("completed",function(bk){var content=bk.getContent();
if(content){{var bn=content.indexOf("<script",content.indexOf("<script")+7);
var bt=content.indexOf("src",bn);
var bm=content.indexOf("\"",bt+5);
var bo=content.substring(bt+5,bm);
var br=bo.substring(4,bo.length-3)+".src.js";
var u="script/demobrowser.demo";
var bq=E.split('/');
var bp=bq[1];
var bs=bq[2];
bs=bs.substr(0,bs.indexOf('.html'));
u+="."+bp+"."+bs+".src.js";
br=u;
var bl=new qx.io.remote.Request(br);
bl.setTimeout(180000);
bl.setProhibitCaching(false);
bl.addListener("completed",function(bN){var bO=bN.getContent();
this.__Kv(bO);

if(bO){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__KI(bO,"javascript"));
}},this);
bl.addListener("failed",function(fm){this.error("Couldn't load file: "+E);
},this);
bl.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__KI(content));
};
}},this);
F.addListener("failed",function(bu){this.error("Couldn't load file: "+E);
},this);
F.send();
},dataLoader:function(bP){var bQ=new qx.io.remote.Request(bP);
bQ.setTimeout(180000);
bQ.setProhibitCaching(false);
bQ.addListener(em,function(A){var content=A.getContent();
var B=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(B);
this.leftReloadTree();
var fr=this._history.getState();

if(fr){this.setCurrentSample(fr.replace(dM,eu));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
bQ.addListener(ed,function(fu){this.error("Couldn't load file: "+bP);
},this);
bQ.send();
},playPrev:function(e){this.setPlayDemos(es);
var d=this.tree.getSelection()[0];

if(d){var a=this.tree.getPreviousNodeOf(d,false);

if(!a||a==this.tree.getRoot()){return;
}
while(a.isVisible&&!a.isVisible()){a=this.tree.getPreviousNodeOf(a,false);
}
if(a.getParent()==this.tree.getRoot()){var c=this.tree.getPreviousNodeOf(a,false);

while(c.isVisible&&!c.isVisible()){c=this.tree.getPreviousNodeOf(c,false);
}
if(c.getParent()==this.tree.getRoot()){c.setOpen(true);
var b=this.tree.getPreviousNodeOf(a,false);

while(b.isVisible&&!b.isVisible()){b=this.tree.getPreviousNodeOf(b,false);
}
if(c!==b){a=b;
}}else{a=c;
}}
if(!a||a===d){this._stopbutton.setVisibility(er);
this._runbutton.setVisibility(eq);
return;
}else{this.tree.setSelection([a]);
this.runSample();
}}},playNext:function(e){var fi=this.tree.getSelection()[0];

if(fi){var fg=this.tree.getNextNodeOf(fi,false);

if(!fg){return;
}
if(fg.getParent()==this.tree.getRoot()){fg.setOpen(true);
fg=this.tree.getNextNodeOf(fg,false);
}
if(!fg){return;
}
while(!fg.isVisible()){var fh=this.tree.getNextNodeOf(fg,false);

if(!fh){return ;
}
if(fh.getParent()==this.tree.getRoot()){fg.setOpen(true);
var fh=this.tree.getNextNodeOf(fh,false);
}fg=fh;
}
if(fg){this.tree.setSelection([fg]);
this.runSample();
}else{this._stopbutton.setVisibility(er);
this._runbutton.setVisibility(eq);
}}},__KI:function(eS,eT){var eU=new qx.util.StringBuilder("<pre class='script'>");
var eW=[];
var eX=new qx.util.StringBuilder();
var eY=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var eV=/^\s*<\/script>\s*$/i;
eS=eS.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var eW=eS.split('\n');
if(eT=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(eS)+"</div></pre>";
}
for(var i=0;i<eW.length;i++){if(eY.exec(eW[i])){eU.add(this.__KJ(qx.bom.String.escape(eX.get()+eW[i])));
eX.clear();
}else if(eV.exec(eW[i])){var fa=qx.dev.Tokenizer.javaScriptToHtml(eX.get());
eU.add('<div class="script">',fa,'</div>');
eX.clear();
eX.add(eW[i],'\n');
}else{eX.add(eW[i],'\n');
}}eU.add(this.__KJ(qx.bom.String.escape(eX.get())),"</pre>");
return eU.get();
},disableMenuButtons:function(){var co=this.__Kf;

for(var i=0;i<co.length;i++){co[i].setEnabled(false);
}},enableMenuButtons:function(){var bA=this.__Kf;

for(var i=0;i<bA.length;i++){bA[i].setEnabled(true);
}},__KJ:function(x){var z=x;
function y(bx){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var by;
var bz=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){by=arguments[i];

if(by=="/"){bz=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(by))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((bz?"/":""));
}s.add('&gt;');
return s.get();
}z=z.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,y);
return z;
},polish:function(g){return g.replace(eH,et).replace(dr,cS);
},__KK:function(){var w=this.__Kh.getWindow();
var fq;

if(w.qx&&w.qx.log&&w.qx.log.Logger){fq=w.qx.log.Logger;
fq.register(this.logappender);
fq.clear();
fq.unregister(this.logappender);
}},__KL:function(e){this.__Ka=e.getData()[0].getUserData("value");
this.runSample();
},__KM:function(){var fx=new qx.ui.layout.HBox();
var fv=new qx.ui.container.Composite(fx);
fv.setAppearance("app-header");
var fy=new qx.ui.basic.Label("Demo Browser");
var fw=new qx.ui.basic.Label("qooxdoo "+qx.core.Setting.get("qx.version"));
fv.add(fy);
fv.add(new qx.ui.core.Spacer,{flex:1});
fv.add(fw);
return fv;
},__KN:undefined,__KO:undefined},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(dW,cV,db,dG,dl,cB,eM,ei,eJ,dz,de,cX,dc,cQ,dp,eh);
}});
})();
(function(){var s="_applyLayoutChange",r="top",q="left",p="height",o="middle",n="Decorator",m="center",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the VBox layout!",g="qx.ui.layout.VBox",f="flex",b="Integer",a="The property '",e="right",d="Boolean";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(v,w,x){qx.ui.layout.Abstract.call(this);

if(v){this.setSpacing(v);
}
if(w){this.setAlignY(w);
}
if(x){this.setSeparator(x);
}},properties:{alignY:{check:[r,o,h],init:r,apply:s},alignX:{check:[q,m,e],init:q,apply:s},spacing:{check:b,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:d,init:false,apply:k}},members:{__eh:null,__ei:null,__ej:null,__ek:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__el:function(){var bc=this._getLayoutChildren();
var length=bc.length;
var X=false;
var W=this.__eh&&this.__eh.length!=length&&this.__ei&&this.__eh;
var ba;
var Y=W?this.__eh:new Array(length);
var bb=W?this.__ei:new Array(length);
if(this.getReversed()){bc=bc.concat().reverse();
}for(var i=0;i<length;i++){ba=bc[i].getLayoutProperties();

if(ba.height!=null){Y[i]=parseFloat(ba.height)/100;
}
if(ba.flex!=null){bb[i]=ba.flex;
X=true;
}else{bb[i]=0;
}}if(!W){this.__eh=Y;
this.__ei=bb;
}this.__ej=X;
this.__ek=bc;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(t,name,u){this.assert(name===f||name===p,a+name+c);

if(name==p){this.assertMatch(u,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(u);
this.assert(u>=0);
}},"off":null}),renderLayout:function(y,z){if(this._invalidChildrenCache){this.__el();
}var G=this.__ek;
var length=G.length;
var Q=qx.ui.layout.Util;
var P=this.getSpacing();
var T=this.getSeparator();

if(T){var D=Q.computeVerticalSeparatorGaps(G,P,T);
}else{var D=Q.computeVerticalGaps(G,P,true);
}var i,B,C,K;
var L=[];
var R=D;

for(i=0;i<length;i+=1){K=this.__eh[i];
C=K!=null?Math.floor((z-D)*K):G[i].getSizeHint().height;
L.push(C);
R+=C;
}if(this.__ej&&R!=z){var I={};
var O,S;

for(i=0;i<length;i+=1){O=this.__ei[i];

if(O>0){H=G[i].getSizeHint();
I[i]={min:H.minHeight,value:L[i],max:H.maxHeight,flex:O};
}}var E=Q.computeFlexOffsets(I,z,R);

for(i in E){S=E[i].offset;
L[i]+=S;
R+=S;
}}var top=G[0].getMarginTop();
if(R<z&&this.getAlignY()!=r){top=z-R;

if(this.getAlignY()===o){top=Math.round(top/2);
}}var H,V,M,C,J,N,F;
this._clearSeparators();
if(T){var U=qx.theme.manager.Decoration.getInstance().resolve(T).getInsets();
var A=U.top+U.bottom;
}for(i=0;i<length;i+=1){B=G[i];
C=L[i];
H=B.getSizeHint();
N=B.getMarginLeft();
F=B.getMarginRight();
M=Math.max(H.minWidth,Math.min(y-N-F,H.maxWidth));
V=Q.computeHorizontalAlignOffset(B.getAlignX()||this.getAlignX(),M,y,N,F);
if(i>0){if(T){top+=J+P;
this._renderSeparator(T,{top:top,left:0,height:A,width:y});
top+=A+P+B.getMarginTop();
}else{top+=Q.collapseMargins(P,J,B.getMarginTop());
}}B.renderLayout(V,top,M,C);
top+=C;
J=B.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__el();
}var bj=qx.ui.layout.Util;
var br=this.__ek;
var bf=0,bi=0,bh=0;
var bd=0,bk=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bi+=be.height;
var bn=this.__ei[i];
var bg=this.__eh[i];

if(bn){bf+=be.minHeight;
}else if(bg){bh=Math.max(bh,Math.round(be.minHeight/bg));
}else{bf+=be.height;
}bq=bo.getMarginLeft()+bo.getMarginRight();
if((be.width+bq)>bk){bk=be.width+bq;
}if((be.minWidth+bq)>bd){bd=be.minWidth+bq;
}}bf+=bh;
var bm=this.getSpacing();
var bp=this.getSeparator();

if(bp){var bl=bj.computeVerticalSeparatorGaps(br,bm,bp);
}else{var bl=bj.computeVerticalGaps(br,bm,true);
}return {minHeight:bf+bl,height:bi+bl,minWidth:bd,width:bk};
}},destruct:function(){this.__eh=this.__ei=this.__ek=null;
}});
})();
(function(){var s="splitter",r="slider",q="mousedown",p="mouseout",o="mousemove",n="mouseup",m="losecapture",l="active",k="horizontal",j="vertical",K="knob",J="Integer",I="height",H="row-resize",G="move",F="maxHeight",E="width",D="_applyOrientation",C="mouseover",B="splitpane",z="qx.ui.splitpane.Pane",A="_applyOffset",v="minHeight",w="minWidth",t="col-resize",u="maxWidth";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(bi){qx.ui.core.Widget.call(this);
this.__lc=[];
if(bi){this.setOrientation(bi);
}else{this.initOrientation();
}this.addListener(q,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(o,this._onMouseMove);
this.addListener(p,this._onMouseOut);
this.addListener(m,this._onMouseUp);
},properties:{appearance:{refine:true,init:B},offset:{check:J,init:6,apply:A},orientation:{init:k,check:[k,j],apply:D}},members:{__ld:null,__le:false,__lf:null,__lg:null,__lh:null,__li:null,__lj:null,__lc:null,_createChildControlImpl:function(M){var N;

switch(M){case r:N=new qx.ui.splitpane.Slider(this);
N.exclude();
this._add(N,{type:M});
break;
case s:N=new qx.ui.splitpane.Splitter(this);
this._add(N,{type:M});
N.addListener(G,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){N.addListener(C,this._onSplitterMouseOver,N);
}break;
}return N||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,M);
},_applyOrientation:function(bc,bd){var be=this.getChildControl(r);
var bh=this.getChildControl(s);
this.__lh=bc===k;
var bg=this._getLayout();

if(bg){bg.dispose();
}var bf=bc===j?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bf);
bh.removeState(bd);
bh.addState(bc);
bh.getChildControl(K).removeState(bd);
bh.getChildControl(K).addState(bc);
be.removeState(bd);
be.addState(bc);
},_applyOffset:function(O,P){var Q=this.getChildControl(s);

if(P===0){Q.removeListener(q,this._onMouseDown,this);
Q.removeListener(o,this._onMouseMove,this);
Q.removeListener(p,this._onMouseOut,this);
Q.removeListener(n,this._onMouseUp,this);
Q.removeListener(m,this._onMouseUp,this);
this.addListener(q,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(o,this._onMouseMove);
this.addListener(p,this._onMouseOut);
this.addListener(m,this._onMouseUp);
}
if(O===0){this.removeListener(q,this._onMouseDown);
this.removeListener(n,this._onMouseUp);
this.removeListener(o,this._onMouseMove);
this.removeListener(p,this._onMouseOut);
this.removeListener(m,this._onMouseUp);
Q.addListener(q,this._onMouseDown,this);
Q.addListener(o,this._onMouseMove,this);
Q.addListener(p,this._onMouseOut,this);
Q.addListener(n,this._onMouseUp,this);
Q.addListener(m,this._onMouseUp,this);
}},add:function(bA,bB){if(bB==null){this._add(bA);
}else{this._add(bA,{flex:bB});
}this.__lc.push(bA);
},remove:function(c){this._remove(c);
qx.lang.Array.remove(this.__lc,c);
},getChildren:function(){return this.__lc;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var d=this.getChildControl(s);
var g=d.getContainerLocation();
var f=this.getContentLocation();
this.__ld=this.__lh?e.getDocumentLeft()-g.left+f.left:e.getDocumentTop()-g.top+f.top;
var i=this.getChildControl(r);
var h=d.getBounds();
i.setUserBounds(h.left,h.top,h.width,h.height);
i.setZIndex(d.getZIndex()+1);
i.show();
this.__le=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__le){this.__ll();
var a=this.getChildControl(r);
var b=this.__li;

if(this.__lh){a.setDomLeft(b);
}else{a.setDomTop(b);
}e.stop();
}else{this.__lk();
}},_onMouseOut:function(e){this._setLastMousePosition(-100,-100);
this.__lk();
},_onMouseUp:function(e){if(!this.__le){return;
}this._finalizeSizes();
var L=this.getChildControl(r);
L.exclude();
this.__le=false;
this.releaseCapture();
this.__lk();
e.stop();
},_onSplitterMove:function(){this.__lk();
},_onSplitterMouseOver:function(){this.addState(l);
},_finalizeSizes:function(){var bm=this.__li;
var bj=this.__lj;

if(bm==null){return;
}var bo=this._getChildren();
var bn=bo[2];
var bk=bo[3];
var bl=bn.getLayoutProperties().flex;
var bp=bk.getLayoutProperties().flex;
if((bl!=0)&&(bp!=0)){bn.setLayoutProperties({flex:bm});
bk.setLayoutProperties({flex:bj});
}else{if(this.__lh){bn.setWidth(bm);
bk.setWidth(bj);
}else{bn.setHeight(bm);
bk.setHeight(bj);
}}},_isNear:function(){var bq=this.getChildControl(s);
var bs=bq.getBounds();
var bu=bq.getContainerLocation();
var br=this.getOffset();
if(!bu){return;
}var bv=this.__lf;
var bw=bs.width;
var bt=bu.left;

if(bw<br){bt-=Math.floor((br-bw)/2);
bw=br;
}
if(bv<bt||bv>(bt+bw)){return false;
}var bv=this.__lg;
var bw=bs.height;
var bt=bu.top;

if(bw<br){bt-=Math.floor((br-bw)/2);
bw=br;
}
if(bv<bt||bv>(bt+bw)){return false;
}return true;
},__lk:function(){var by=this.getChildControl(s);
var bz=this.getApplicationRoot();
if(this.__le||this._isNear()){var bx=this.__lh?t:H;
this.setCursor(bx);
bz.setGlobalCursor(bx);
by.addState(l);
}else if(by.hasState(l)){this.resetCursor();
bz.resetGlobalCursor();
by.removeState(l);
}},__ll:function(){if(this.__lh){var T=w,bb=E,U=u,Y=this.__lf;
}else{var T=v,bb=I,U=F,Y=this.__lg;
}var ba=this._getChildren();
var R=ba[2].getSizeHint();
var W=ba[3].getSizeHint();
var X=ba[2].getBounds()[bb]+ba[3].getBounds()[bb];
var V=Y-this.__ld;
var S=X-V;
if(V<R[T]){S-=R[T]-V;
V=R[T];
}else if(S<W[T]){V-=W[T]-S;
S=W[T];
}if(V>R[U]){S+=V-R[U];
V=R[U];
}else if(S>W[U]){V+=S-W[U];
S=W[U];
}this.__li=V;
this.__lj=S;
},_isActiveDragSession:function(){return this.__le;
},_setLastMousePosition:function(x,y){this.__lf=x;
this.__lg=y;
}},destruct:function(){this.__lc=null;
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
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(R,S,T){qx.ui.layout.Abstract.call(this);

if(R){this.setSpacing(R);
}
if(S){this.setAlignX(S);
}
if(T){this.setSeparator(T);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__fd:null,__fe:null,__ff:null,__fg:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fh:function(){var br=this._getLayoutChildren();
var length=br.length;
var bo=false;
var bm=this.__fd&&this.__fd.length!=length&&this.__fe&&this.__fd;
var bp;
var bn=bm?this.__fd:new Array(length);
var bq=bm?this.__fe:new Array(length);
if(this.getReversed()){br=br.concat().reverse();
}for(var i=0;i<length;i++){bp=br[i].getLayoutProperties();

if(bp.width!=null){bn[i]=parseFloat(bp.width)/100;
}
if(bp.flex!=null){bq[i]=bp.flex;
bo=true;
}else{bq[i]=0;
}}if(!bm){this.__fd=bn;
this.__fe=bq;
}this.__ff=bo;
this.__fg=br;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(U,name,V){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(V,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(V);
this.assert(V>=0);
}},"off":null}),renderLayout:function(t,u){if(this._invalidChildrenCache){this.__fh();
}var A=this.__fg;
var length=A.length;
var J=qx.ui.layout.Util;
var I=this.getSpacing();
var M=this.getSeparator();

if(M){var x=J.computeHorizontalSeparatorGaps(A,I,M);
}else{var x=J.computeHorizontalGaps(A,I,true);
}var i,v,G,F;
var L=[];
var B=x;

for(i=0;i<length;i+=1){F=this.__fd[i];
G=F!=null?Math.floor((t-x)*F):A[i].getSizeHint().width;
L.push(G);
B+=G;
}if(this.__ff&&B!=t){var D={};
var H,K;

for(i=0;i<length;i+=1){H=this.__fe[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fh();
}var bd=qx.ui.layout.Util;
var bl=this.__fg;
var W=0,be=0,bb=0;
var ba=0,bc=0;
var bi,X,bk;
for(var i=0,l=bl.length;i<l;i+=1){bi=bl[i];
X=bi.getSizeHint();
be+=X.width;
var bh=this.__fe[i];
var Y=this.__fd[i];

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
}},destruct:function(){this.__fd=this.__fe=this.__fg=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(N,name,O){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(O);
}
if(name==g){this.assertString(O);
}},"off":null}),renderLayout:function(t,u){var K=this._getLayoutChildren();
var length=K.length;
var G,J;
var w,v,E,x;

for(var i=0;i<length;i++){G=K[i];
J=G.getLayoutProperties().type;

if(J===e){v=G;
}else if(J===h){E=G;
}else if(!w){w=G;
}else{x=G;
}}
if(w&&x){var M=w.getLayoutProperties().flex;
var z=x.getLayoutProperties().flex;

if(M==null){M=1;
}
if(z==null){z=1;
}var L=w.getSizeHint();
var C=v.getSizeHint();
var D=x.getSizeHint();
var y=L.height;
var H=C.height;
var I=D.height;

if(M>0&&z>0){var A=M+z;
var B=u-H;
var y=Math.round((B/A)*M);
var I=B-y;
var F=qx.ui.layout.Util.arrangeIdeals(L.minHeight,y,L.maxHeight,D.minHeight,I,D.maxHeight);
y=F.begin;
I=F.end;
}else if(M>0){y=u-H-I;

if(y<L.minHeight){y=L.minHeight;
}
if(y>L.maxHeight){y=L.maxHeight;
}}else if(z>0){I=u-y-H;

if(I<D.minHeight){I=D.minHeight;
}
if(I>D.maxHeight){I=D.maxHeight;
}}w.renderLayout(0,0,t,y);
v.renderLayout(0,y,t,H);
x.renderLayout(0,y+H,t,I);
}else{v.renderLayout(0,0,0,0);
if(w){w.renderLayout(0,0,t,u);
}else if(x){x.renderLayout(0,0,t,u);
}}},_computeSizeHint:function(){var s=this._getLayoutChildren();
var length=s.length;
var l,k,r;
var m=0,o=0,n=0;
var p=0,q=0,j=0;

for(var i=0;i<length;i++){l=s[i];
r=l.getLayoutProperties();
if(r.type===h){continue;
}k=l.getSizeHint();
m+=k.minHeight;
o+=k.height;
n+=k.maxHeight;

if(k.minWidth>p){p=k.minWidth;
}
if(k.width>q){q=k.width;
}
if(k.maxWidth>j){j=k.maxWidth;
}}return {minHeight:m,height:o,maxHeight:n,minWidth:p,width:q,maxWidth:j};
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
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var m="showingPlaceholder",l="color",k="",j="none",i="qx.dynlocale",h="Boolean",g="qx.client",f="qx.event.type.Data",d="readonly",c="input",bb="focusin",ba="visibility",Y="focusout",X="changeLocale",W="hidden",V="on",U="absolute",T="readOnly",S="text",R="_applyTextAlign",t="px",u="RegExp",r=")",s="syncAppearance",p="changeValue",q="A",n="change",o="textAlign",x="focused",y="center",F="visible",D="disabled",J="url(",H="off",N="String",L="resize",A="qx.ui.form.AbstractField",Q="transparent",P="spellcheck",O="false",z="right",B="PositiveInteger",C="mshtml",E="abstract",G="block",I="webkit",K="_applyReadOnly",M="_applyPlaceholder",v="left",w="qx/static/blank.gif";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:E,construct:function(by){qx.ui.core.Widget.call(this);

if(by!=null){this.setValue(by);
}this.getContentElement().addListener(n,this._onChangeContent,this);
this.addListener(s,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(i,V)){qx.locale.Manager.getInstance().addListener(X,this._onChangeLocale,this);
}},events:{"input":f,"changeValue":f},properties:{textAlign:{check:[v,y,z],nullable:true,themeable:true,apply:R},readOnly:{check:h,apply:K,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:B,init:Infinity},liveUpdate:{check:h,init:false},placeholder:{check:N,nullable:true,apply:M},filter:{check:u,nullable:true,init:null}},members:{__q:true,__r:null,__s:null,__t:null,getFocusElement:function(){var bP=this.getContentElement();

if(bP){return bP;
}},_createInputElement:function(){return new qx.html.Input(S);
},renderLayout:function(bf,top,bg,bh){var bi=this._updateInsets;
var bm=qx.ui.core.Widget.prototype.renderLayout.call(this,bf,top,bg,bh);
if(!bm){return;
}var bk=bm.size||bi;
var bn=t;

if(bk||bm.local||bm.margin){var bj=this.getInsets();
var innerWidth=bg-bj.left-bj.right;
var innerHeight=bh-bj.top-bj.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bl=this.getContentElement();

if(bi){this.__w().setStyles({"left":bj.left+bn,"top":bj.top+bn});
}
if(bk){this.__w().setStyles({"width":innerWidth+bn,"height":innerHeight+bn});
bl.setStyles({"width":innerWidth+bn,"height":innerHeight+bn});
}},_createContentElement:function(){var bx=this._createInputElement();
bx.setStyles({"border":j,"padding":0,"margin":0,"display":G,"background":Q,"outline":j,"appearance":j,"position":U,"autoComplete":H});
bx.setSelectable(this.getSelectable());
bx.setEnabled(this.getEnabled());
bx.addListener(c,this._onHtmlInput,this);
bx.setAttribute(P,O);
if(qx.core.Variant.isSet(g,I)){bx.setStyle(L,j);
}if(qx.core.Variant.isSet(g,C)){bx.setStyles({backgroundImage:J+qx.util.ResourceManager.getInstance().toUri(w)+r});
}return bx;
},_applyEnabled:function(bG,bH){qx.ui.core.Widget.prototype._applyEnabled.call(this,bG,bH);
this.getContentElement().setEnabled(bG);

if(bG){this._showPlaceholder();
}else{this._removePlaceholder();
}},__u:{width:16,height:16},_getContentHint:function(){return {width:this.__u.width*10,height:this.__u.height||16};
},_applyFont:function(bB,bC){var bD;

if(bB){var bE=qx.theme.manager.Font.getInstance().resolve(bB);
bD=bE.getStyles();
}else{bD=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bD);
this.__w().setStyles(bD);
if(bB){this.__u=qx.bom.Label.getTextSize(q,bD);
}else{delete this.__u;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bo,bp){if(bo){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(bo));
this.__w().setStyle(l,qx.theme.manager.Color.getInstance().resolve(bo));
}else{this.getContentElement().removeStyle(l);
this.__w().removeStyle(l);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__u;
},_onHtmlInput:function(e){var bL=e.getData();
var bK=true;
this.__q=false;
if(this.getFilter()!=null){var bM=k;
var bI=bL.search(this.getFilter());
var bJ=bL;

while(bI>=0){bM=bM+(bJ.charAt(bI));
bJ=bJ.substring(bI+1,bJ.length);
bI=bJ.search(this.getFilter());
}
if(bM!=bL){bK=false;
bL=bM;
this.getContentElement().setValue(bL);
}}if(bL.length>this.getMaxLength()){var bK=false;
this.getContentElement().setValue(bL.substr(0,this.getMaxLength()));
}if(bK){this.fireDataEvent(c,bL,this.__t);
this.__t=bL;
if(this.getLiveUpdate()){this.__v(bL);
}}},__v:function(be){if(this.__s!=be){this.fireNonBubblingEvent(p,qx.event.type.Data,[be,this.__s]);
this.__s=be;
}},setValue:function(bt){if(bt===null){if(this.__q){return bt;
}bt=k;
this.__q=true;
}else{this.__q=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bt)){var bv=this.getContentElement();

if(bt.length>this.getMaxLength()){bt=bt.substr(0,this.getMaxLength());
}
if(bv.getValue()!=bt){var bw=bv.getValue();
bv.setValue(bt);
var bu=this.__q?null:bt;
this.__s=bw;
this.__v(bu);
}this._showPlaceholder();
return bt;
}throw new Error("Invalid value type: "+bt);
},getValue:function(){var bF=this.getContentElement().getValue();
return this.__q?null:bF;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__q=e.getData()===null;
this.__v(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bN,bO){this.getContentElement().setTextSelection(bN,bO);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bd=this.getValue()||k;
var bc=this.getPlaceholder();

if(bc!=null&&bd==k&&!this.hasState(x)&&!this.hasState(D)){if(this.hasState(m)){this._syncPlaceholder();
}else{this.addState(m);
}}},_removePlaceholder:function(){if(this.hasState(m)){this.__w().setStyle(ba,W);
this.removeState(m);
}},_syncPlaceholder:function(){if(this.hasState(m)){this.__w().setStyle(ba,F);
}},__w:function(){if(this.__r==null){this.__r=new qx.html.Label();
this.__r.setStyles({"visibility":W,"zIndex":6,"position":U});
this.getContainerElement().add(this.__r);
}return this.__r;
},_onChangeLocale:qx.core.Variant.select(i,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bz,bA){this.__w().setValue(bz);

if(bz!=null){this.addListener(bb,this._removePlaceholder,this);
this.addListener(Y,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bb,this._removePlaceholder,this);
this.removeListener(Y,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(a,b){this.getContentElement().setStyle(o,a);
},_applyReadOnly:function(bq,br){var bs=this.getContentElement();
bs.setAttribute(T,bq);

if(bq){this.addState(d);
this.setFocusable(false);
}else{this.removeState(d);
this.setFocusable(true);
}}},destruct:function(){this.__r=null;

if(qx.core.Variant.isSet(i,V)){qx.locale.Manager.getInstance().removeListener(X,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var q="none",p="wrap",o="value",n="qx.client",m="textarea",l="off",k="on",j="qxSelectable",i="",h="webkit",d="input",g="qx.html.Input",f="select",c="disabled",b="read-only",e="userSelect";
qx.Class.define(g,{extend:qx.html.Element,construct:function(y,z,A){if(y===f||y===m){var B=y;
}else{B=d;
}qx.html.Element.call(this,B,z,A);
this.__c=y;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,u){qx.html.Element.prototype._applyProperty.call(this,name,u);
var v=this.getDomElement();

if(name===o){qx.bom.Input.setValue(v,u);
}else if(name===p){qx.bom.Input.setWrap(v,u);
}},setEnabled:qx.core.Variant.select(n,{"webkit":function(x){this.__e=x;

if(!x){this.setStyles({"userModify":b,"userSelect":q});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:q});
}},"default":function(C){this.setAttribute(c,C===false);
}}),setSelectable:qx.core.Variant.select(n,{"webkit":function(D){this.__d=D;
this.setAttribute(j,D?k:l);
if(qx.core.Variant.isSet(n,h)){var E=this.__e?D?null:q:q;
this.setStyle(e,E);
}},"default":function(r){this.setAttribute(j,r?k:l);
}}),setValue:function(s){var t=this.getDomElement();

if(t){if(t.value!=s){qx.bom.Input.setValue(t,s);
}}else{this._setProperty(o,s);
}return this;
},getValue:function(){var a=this.getDomElement();

if(a){return qx.bom.Input.getValue(a);
}return this._getProperty(o)||i;
},setWrap:function(w){if(this.__c===m){this._setProperty(p,w);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===m){return this._getProperty(p);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(b,c){var d=b.tagName.toLowerCase();

if(c===V&&(d===V||d===P)){return true;
}
if(c===W&&(d===V||d===P||d===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(s,t,u){if(!s.__j){var v=s.tagName.toLowerCase();
var w=s.type;

if(w===T||w===S||v===P||w===R||w===Q){qx.bom.Event.addNativeListener(s,H,this._onPropertyWrapper);
}
if(w!==R&&w!==Q){qx.bom.Event.addNativeListener(s,W,this._onChangeValueWrapper);
}
if(w===T||w===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,s);
qx.bom.Event.addNativeListener(s,O,this._onKeyPressWrapped);
}s.__j=true;
}},"default":function(x,y,z){if(y===V){this.__k(x);
}else if(y===W){if(x.type===Q||x.type===R){qx.bom.Event.addNativeListener(x,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(x,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(x.type===T||x.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,x);
qx.bom.Event.addNativeListener(x,O,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(f){var g=f.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&g==P){qx.bom.Event.addNativeListener(f,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(f,V,this._onInputWrapper);
},"opera":function(a){qx.bom.Event.addNativeListener(a,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(a,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(a,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(a,V,this._onInputWrapper);
},"default":function(bc){qx.bom.Event.addNativeListener(bc,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(A,B){if(A.__j){var C=A.tagName.toLowerCase();
var D=A.type;

if(D===T||D===S||C===P||D===R||D===Q){qx.bom.Event.removeNativeListener(A,H,this._onPropertyWrapper);
}
if(D!==R&&D!==Q){qx.bom.Event.removeNativeListener(A,W,this._onChangeValueWrapper);
}
if(D===T||D===S){qx.bom.Event.removeNativeListener(A,O,this._onKeyPressWrapped);
}
try{delete A.__j;
}catch(bb){A.__j=null;
}}},"default":function(bd,be){if(be===V){this.__k(bd);
}else if(be===W){if(bd.type===Q||bd.type===R){qx.bom.Event.removeNativeListener(bd,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(bd,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(bd.type===T||bd.type===S){qx.bom.Event.removeNativeListener(bd,O,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(h){var j=h.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&j==P){qx.bom.Event.removeNativeListener(h,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(h,V,this._onInputWrapper);
},"opera":function(Y){qx.bom.Event.removeNativeListener(Y,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(Y,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(Y,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(Y,V,this._onInputWrapper);
},"default":function(r){qx.bom.Event.removeNativeListener(r,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,n){if(e.keyCode===13){if(n.value!==this.__i){this.__i=n.value;
qx.event.Registration.fireEvent(n,W,qx.event.type.Data,[n.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var bf=e.target;
if(!this.__g){if(qx.core.Variant.isSet(U,N)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(bf,V,qx.event.type.Data,[bf.value]);
},0);
}else{qx.event.Registration.fireEvent(bf,V,qx.event.type.Data,[bf.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var q=e.target||e.srcElement;
var p=q.value;

if(q.type===F){var p=[];

for(var i=0,o=q.options,l=o.length;i<l;i++){if(o[i].selected){p.push(o[i].value);
}}}qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[p]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var X=e.target;

if(X.type===Q){if(X.checked){qx.event.Registration.fireEvent(X,W,qx.event.type.Data,[X.value]);
}}else{qx.event.Registration.fireEvent(X,W,qx.event.type.Data,[X.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var k=e.target||e.srcElement;
var m=e.propertyName;

if(m===I&&(k.type===T||k.type===S||k.tagName.toLowerCase()===P)){if(!k.$$inValueSet){qx.event.Registration.fireEvent(k,V,qx.event.type.Data,[k.value]);
}}else if(m===J){if(k.type===R){qx.event.Registration.fireEvent(k,W,qx.event.type.Data,[k.checked]);
}else if(k.checked){qx.event.Registration.fireEvent(k,W,qx.event.type.Data,[k.value]);
}}}),"default":function(){}})},defer:function(ba){qx.event.Registration.addHandler(ba);
}});
})();
(function(){var p="",o="select",n="qx.client",m="soft",k="off",j="text",h="Unsupported input type.",g="nowrap",f="radio",e="textarea",C="auto",B="qx.debug",A="input",z="option",y="value",x="number",w="qx.bom.Input",v="normal",u="mshtml",t="wrap",r="checkbox",s="select-one",q="on";
qx.Class.define(w,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(bb,bc,bd){if(qx.core.Variant.isSet(B,q)){qx.core.Assert.assertKeyInMap(bb,this.__f,h);
}var bc=bc?qx.lang.Object.clone(bc):{};
var be;

if(bb===e||bb===o){be=bb;
}else{be=A;
bc.type=bb;
}return qx.bom.Element.create(be,bc,bd);
},setValue:function(D,E){var J=D.nodeName.toLowerCase();
var G=D.type;
var Array=qx.lang.Array;
var K=qx.lang.Type;

if(typeof E===x){E+=p;
}
if((G===r||G===f)){if(K.isArray(E)){D.checked=Array.contains(E,D.value);
}else{D.checked=D.value==E;
}}else if(J===o){var F=K.isArray(E);
var L=D.options;
var H,I;

for(var i=0,l=L.length;i<l;i++){H=L[i];
I=H.getAttribute(y);

if(I==null){I=H.text;
}H.selected=F?Array.contains(E,I):E==I;
}
if(F&&E.length==0){D.selectedIndex=-1;
}}else if(G===j&&qx.core.Variant.isSet(n,u)){D.$$inValueSet=true;
D.value=E;
D.$$inValueSet=null;
}else{D.value=E;
}},getValue:function(M){var S=M.nodeName.toLowerCase();

if(S===z){return (M.attributes.value||{}).specified?M.value:M.text;
}
if(S===o){var N=M.selectedIndex;
if(N<0){return null;
}var T=[];
var V=M.options;
var U=M.type==s;
var R=qx.bom.Input;
var Q;
for(var i=U?N:0,P=U?N+1:V.length;i<P;i++){var O=V[i];

if(O.selected){Q=R.getValue(O);
if(U){return Q;
}T.push(Q);
}}return T;
}else{return (M.value||p).replace(/\r/g,p);
}},setWrap:qx.core.Variant.select(n,{"mshtml":function(Y,ba){Y.wrap=ba?m:k;
},"gecko|webkit":function(a,b){var d=b?m:k;
var c=b?p:C;
a.setAttribute(t,d);
a.style.overflow=c;
},"default":function(W,X){W.style.whiteSpace=X?v:g;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(d){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(c){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var g="__kX",f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":b},members:{__kX:null,getSelection:function(){var l=this.__kY().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(a){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(a.length){case 0:this.resetSelection();
break;
case 1:this.__kY().setSelected(a[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+a.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__kY().resetSelected();
},isSelected:function(m){return this.__kY().isSelected(m);
},isSelectionEmpty:function(){return this.__kY().isSelectionEmpty();
},getSelectables:function(){return this.__kY().getSelectables();
},_onChangeSelected:function(e){var k=e.getData();
var j=e.getOldData();
k==null?k=[]:k=[k];
j==null?j=[]:j=[j];
this.fireDataEvent(d,k,j);
},__kY:function(){if(this.__kX==null){var i=this;
this.__kX=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(h){if(i._isItemSelectable){return i._isItemSelectable(h);
}else{return h.isEnabled()&&h.isVisible();
}}});
this.__kX.addListener(c,this._onChangeSelected,this);
}this.__kX.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kX;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var j="_applyDynamic",h="changeSelection",g="Boolean",f="qx.ui.container.Stack";
qx.Class.define(f,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(h,this.__lL,this);
},properties:{dynamic:{check:g,init:false,apply:j}},members:{_applyDynamic:function(a){var c=this._getChildren();
var b=this.getSelection()[0];
var d;

for(var i=0,l=c.length;i<l;i++){d=c[i];

if(d!=b){if(a){c[i].exclude();
}else{c[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(A){return A.isEnabled();
},__lL:function(e){var k=e.getOldData()[0];
var m=e.getData()[0];

if(k){if(this.isDynamic()){k.exclude();
}else{k.hide();
}}
if(m){m.show();
}},add:function(y){this._add(y);
var z=this.getSelection()[0];

if(!z){this.setSelection([y]);
}else if(z!==y){if(this.isDynamic()){y.exclude();
}else{y.hide();
}}},remove:function(n){this._remove(n);

if(this.getSelection()[0]===n){var o=this._getChildren()[0];

if(o){this.setSelection([o]);
}else{this.resetSelection();
}}},indexOf:function(p){return this._indexOf(p);
},getChildren:function(){return this._getChildren();
},previous:function(){var w=this.getSelection()[0];
var u=this._indexOf(w)-1;
var x=this._getChildren();

if(u<0){u=x.length-1;
}var v=x[u];
this.setSelection([v]);
},next:function(){var r=this.getSelection()[0];
var q=this._indexOf(r)+1;
var s=this._getChildren();
var t=s[q]||s[0];
this.setSelection([t]);
}}});
})();
(function(){var k="Boolean",j="__kS",h="qx.ui.core.SingleSelectionManager",g="qx.debug",f="__kT",e="Invalid selectionProvider!",d="__kU",c="changeSelected",b="on",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);

if(qx.core.Variant.isSet(g,b)){qx.core.Assert.assertInterface(r,qx.ui.core.ISingleSelectionProvider,e);
}this.__kS=r;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:k,init:true,apply:d}},members:{__kT:null,__kS:null,getSelected:function(){return this.__kT;
},setSelected:function(u){if(!this.__kW(u)){throw new Error("Could not select "+u+", because it is not a child element!");
}this.__kV(u);
},resetSelected:function(){this.__kV(null);
},isSelected:function(x){if(!this.__kW(x)){throw new Error("Could not check if "+x+" is selected,"+" because it is not a child element!");
}return this.__kT===x;
},isSelectionEmpty:function(){return this.__kT==null;
},getSelectables:function(){var l=this.__kS.getItems();
var m=[];

for(var i=0;i<l.length;i++){if(this.__kS.isItemSelectable(l[i])){m.push(l[i]);
}}return m;
},__kU:function(v,w){if(!v){this.__kV(this.__kT);
}},__kV:function(n){var q=this.__kT;
var p=n;

if(p!=null&&q===p){return;
}
if(!this.isAllowEmptySelection()&&p==null){var o=this.getSelectables()[0];

if(o){p=o;
}}this.__kT=p;
this.fireDataEvent(c,p,q);
},__kW:function(s){var t=this.__kS.getItems();

for(var i=0;i<t.length;i++){if(t[i]===s){return true;
}}return false;
}},destruct:function(){if(this.__kS.toHashCode){this._disposeObjects(j);
}else{this.__kS=null;
}this._disposeObjects(f);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var r="",q="The property 'timeoutInterval' has been deprecated. The history manager",p="now uses 'qx.event.Idle' for polling.",o="qx.debug",n="on",m='#',l="String",k="request",j="mshtml",i="Invalid attribute 'value'.",c="changeTitle",h="abstract",f="_applyState",b="qx.client",a="changeState",e="qx.bom.History",d="_applyTitle",g="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,type:h,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(m)[0]+m;
this.__tB={};
this._setInitialState();
},events:{"request":g},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(b,j)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:l,event:c,nullable:true,apply:d},state:{check:l,event:a,nullable:true,apply:f}},members:{__tB:null,_applyState:function(w,x){this._writeState(w);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(C){if(qx.lang.Type.isString(C)){return encodeURIComponent(C);
}return r;
},_decode:function(s){if(qx.lang.Type.isString(s)){return decodeURIComponent(s);
}return r;
},_applyTitle:function(D){if(D!=null){document.title=D||r;
}},addToHistory:function(t,u){if(!qx.lang.Type.isString(t)){t=t+r;
}
if(qx.lang.Type.isString(u)){this.setTitle(u);
this.__tB[t]=u;
}
if(this.getState()!==t){this._writeState(t);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(v){this.setState(v);
this.fireDataEvent(k,v);

if(this.__tB[v]!=null){this.setTitle(this.__tB[v]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(y){var z=this._baseUrl+(y||r);
var A=window.location;

if(z!=A.href){A.href=z;
}},_getHash:function(){var E=/#(.*)$/.exec(window.location.href);
return E&&E[1]?E[1]:r;
},setTimeoutInterval:function(B){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertNumber(B,i);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(o,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(o,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}}},destruct:function(){this.__tB=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tD();
},members:{__tC:null,__tD:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__tC=qx.lang.Function.bind(this.__tF,this);
qx.bom.Event.addNativeListener(window,d,this.__tC);
}else{qx.event.Idle.getInstance().addListener(c,this.__tF,this);
}},__tE:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__tC);
}else{qx.event.Idle.getInstance().removeListener(c,this.__tF,this);
}},__tF:function(){var g=this._readState();

if(qx.lang.Type.isString(g)&&g!=this.getState()){this._onHistoryLoad(g);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(f){qx.event.Timer.once(function(){this._setHash(this._encode(f));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__tE();
}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tJ();
},members:{__tG:null,__tH:false,__tI:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__tI=this._getHash();
},_setHash:function(q){qx.bom.History.prototype._setHash.call(this,q);
this.__tI=this._encode(q);
},_readState:function(){if(!this.__tH){return this._decode(this._getHash());
}var t=this.__tG.contentWindow.document;
var u=t.getElementById(i);
return u?this._decode(u.innerText):l;
},_writeState:function(r){var r=this._encode(r);
this._setHash(r);
this.__tI=r;

try{var s=this.__tG.contentWindow.document;
s.open();
s.write(h+r+g);
s.close();
}catch(B){}},__tJ:function(){this.__tN(function(){qx.event.Idle.getInstance().addListener(o,this.__tK,this);
});
},__tK:function(e){var z=null;
var y=this._getHash();

if(!this.__tM(y)){z=this.__tL(y);
}else{z=this._readState();
}
if(qx.lang.Type.isString(z)&&z!=this.getState()){this._onHistoryLoad(z);
}},__tL:function(p){p=this._decode(p);
this._writeState(p);
return p;
},__tM:function(C){return qx.lang.Type.isString(C)&&C==this.__tI;
},__tN:function(a){this.__tG=this.__tO();
document.body.appendChild(this.__tG);
this.__tP(function(){this._writeState(this.getState());

if(a){a.call(this);
}},this);
},__tO:function(){var A=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
A.style.visibility=f;
A.style.position=c;
A.style.left=n;
A.style.top=n;
return A;
},__tP:function(v,w,x){if(typeof x===d){x=0;
}
if(!this.__tG.contentWindow||!this.__tG.contentWindow.document){if(x>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__tP(v,w,++x);
},this,10);
return;
}this.__tH=true;
v.call(w||window);
}},destruct:function(){this.__tG=null;
qx.event.Idle.getInstance().addListener(o,this.__tK,this);
}});
}})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(k){qx.event.Registration.fireEvent(k,b);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===a;
},registerEvent:function(h,i,j){},unregisterEvent:function(e,f,g){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var g="qx.client",f="webkit",e="body",d="iframe",c="qx.bom.Iframe";
qx.Class.define(c,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(t,u){var t=t?qx.lang.Object.clone(t):{};
var v=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var w in v){if(t[w]==null){t[w]=v[w];
}}return qx.bom.Element.create(d,t,u);
},getWindow:qx.core.Variant.select(g,{"mshtml|gecko":function(A){try{return A.contentWindow;
}catch(i){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(h){return null;
}}}),getDocument:qx.core.Variant.select(g,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(j){return null;
}},"default":function(z){try{return z.contentDocument;
}catch(y){return null;
}}}),getBody:function(l){try{var m=this.getDocument(l);
return m?m.getElementsByTagName(e)[0]:null;
}catch(o){return null;
}},setSource:function(B,C){try{if(this.getWindow(B)&&qx.dom.Hierarchy.isRendered(B)){try{if(qx.core.Variant.isSet(g,f)&&qx.bom.client.Platform.MAC){var D=this.getContentWindow();

if(D){D.stop();
}}this.getWindow(B).location.replace(C);
}catch(x){B.src=C;
}}else{B.src=C;
}}catch(k){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(r){var s=this.getDocument(r);

try{if(s&&s.location){return s.location.href;
}}catch(n){}return null;
}}});
})();
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(s){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(p){this._shortcut.setEnabled(p);
},_applyShortcut:function(q){this._shortcut.setShortcut(q);
},execute:function(r){this.fireDataEvent(n,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",T="Escape",S="qx.event.type.Data",R="_applyShortcut",Q="PrintScreen",P="NumLock",O="5",N="8",M="execute",L="Meta",K="0",t="2",u="This message will be made private.",r="Shift",s="You can only specify one non modifier key!",p="3",q="/",n="_applyEnabled",o="String",v="changeEnabled",w="*",C="qx.bom.Shortcut",B="6",E="4",D="1",G="Alt",F="Not a valid key name for a shortcut: ",y="PageDown",J="Whitespaces are not allowed within shortcuts",I="Delete",H="7",x="a",z="z",A="9";
qx.Class.define(C,{extend:qx.core.Object,construct:function(be){qx.core.Object.call(this);
this.__oe={};
this.__of=null;

if(be!=null){this.setShortcut(be);
}this.initEnabled();
},events:{"execute":S},properties:{enabled:{init:true,check:l,event:v,apply:n},shortcut:{check:o,apply:R,nullable:true},autoRepeat:{check:l,init:false}},members:{__oe:g,__of:g,execute:function(U){this.fireDataEvent(M,U);
},__og:function(event){if(this.getEnabled()&&this.__oi(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__oh:function(event){if(this.getEnabled()&&this.__oi(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(Y,ba){if(Y){qx.event.Registration.addListener(document.documentElement,h,this.__og,this);
qx.event.Registration.addListener(document.documentElement,d,this.__oh,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__og,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__oh,this);
}},_applyShortcut:function(bf,bg){if(bf){if(bf.search(/[\s]+/)!=-1){var bj=J;
this.error(bj);
throw new Error(bj);
}this.__oe={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__of=null;
var bh;
var a=[];

while(bf.length>0&&bh!=-1){bh=bf.search(/[-+]+/);
a.push((bf.length==1||bh==-1)?bf:bf.substring(0,bh));
bf=bf.substring(bh+1);
}var bi=a.length;

for(var i=0;i<bi;i++){var bk=this.__ok(a[i]);

switch(bk){case f:case r:case L:case G:this.__oe[bk]=true;
break;
case m:var bj=F+a[i];
this.error(bj);
throw bj;
default:if(this.__of){var bj=s;
this.error(bj);
throw bj;
}this.__of=bk;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.__oi(e);
},__oi:function(e){var bl=this.__of;

if(!bl){return ;
}if((!this.__oe.Shift&&e.isShiftPressed())||(this.__oe.Shift&&!e.isShiftPressed())||(!this.__oe.Control&&e.isCtrlPressed())||(this.__oe.Control&&!e.isCtrlPressed())||(!this.__oe.Meta&&e.isMetaPressed())||(this.__oe.Meta&&!e.isMetaPressed())||(!this.__oe.Alt&&e.isAltPressed())||(this.__oe.Alt&&!e.isAltPressed())){return false;
}
if(bl==e.getKeyIdentifier()){return true;
}return false;
},__oj:{esc:T,ctrl:f,print:Q,del:I,pageup:b,pagedown:y,numlock:P,numpad_0:K,numpad_1:D,numpad_2:t,numpad_3:p,numpad_4:E,numpad_5:O,numpad_6:B,numpad_7:H,numpad_8:N,numpad_9:A,numpad_divide:q,numpad_multiply:w,numpad_minus:c,numpad_plus:k},__ok:function(V){var W=qx.event.handler.Keyboard;
var X=m;

if(W.isValidKeyIdentifier(V)){return V;
}
if(V.length==1&&V>=x&&V<=z){return V.toUpperCase();
}V=V.toLowerCase();
var X=this.__oj[V]||qx.lang.String.firstUp(V);

if(W.isValidKeyIdentifier(X)){return X;
}else{return m;
}},toString:function(){var bd=this.__of;
var bc=[];

for(var bb in this.__oe){if(this.__oe[bb]){bc.push(qx.locale.Key.getKeyName(j,bb));
}}
if(bd){bc.push(qx.locale.Key.getKeyName(j,bd));
}return bc.join(k);
}},destruct:function(){this.setEnabled(false);
this.__oe=this.__of=null;
}});
})();
(function(){var bA="Control",bz="Left",by="Meta",bx="Pause",bw="End",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="Escape",W="key_full_Meta",bH="PrintScreen",bI="NumLock",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="key_full_Enter",bC="key_full_Control",bJ="qx.locale.Key",bK="Tabulator",bk="key_full_Space",bj="key_short_Meta",bm="key_short_PageUp",bl="key_short_Pause",bo="key_full_Down",bn="key_short_Apps",bq="key_short_Win",bp="key_full_Right",bi="key_short_Up",bh="key_full_PageDown",a="key_full_Alt",b="PgDn",c="Esc",d="key_full_Insert",e="key_short_Space",f="key_short_Backspace",g="key_short_Home",h="full",i="key_short_Down",j="PgUp",bO="_Mac",bN="key_short_CapsLock",bM="PageUp",bL="key_full_Up",bS="key_full_Home",bR="key_full_Backspace",bQ="PageDown",bP="CapsLock",bU="Ins",bT="key_short_PrintScreen",G="Tab",H="key_full_Apps",E="key_short_Tab",F="key_short_End",K="_",L="Caps",I="key_short_NumLock",J="Num",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="key_full_Escape",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bJ,{statics:{getKeyName:function(cb,cc,cd){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(cb,[l,h]);
}var cf=s+cb+K+cc;
if(qx.bom.client.Platform.MAC&&cc==bA){cf+=bO;
}var ce=qx.locale.Manager.getInstance().translate(cf,[],cd);

if(ce==cf){return qx.locale.Key._keyNames[cf]||cc;
}else{return ce;
}}},defer:function(bV,bW,bX){var ca={};
var bY=qx.locale.Manager;
ca[bY.marktr(f)]=bf;
ca[bY.marktr(E)]=G;
ca[bY.marktr(e)]=be;
ca[bY.marktr(R)]=bb;
ca[bY.marktr(k)]=bc;
ca[bY.marktr(S)]=bu;
ca[bY.marktr(bG)]=bu;
ca[bY.marktr(bF)]=Y;
ca[bY.marktr(bN)]=L;
ca[bY.marktr(bj)]=by;
ca[bY.marktr(N)]=c;
ca[bY.marktr(D)]=bz;
ca[bY.marktr(bi)]=bd;
ca[bY.marktr(m)]=bg;
ca[bY.marktr(i)]=bv;
ca[bY.marktr(bm)]=j;
ca[bY.marktr(Q)]=b;
ca[bY.marktr(F)]=bw;
ca[bY.marktr(g)]=bt;
ca[bY.marktr(bD)]=bU;
ca[bY.marktr(A)]=bE;
ca[bY.marktr(I)]=J;
ca[bY.marktr(bT)]=P;
ca[bY.marktr(r)]=ba;
ca[bY.marktr(bl)]=bx;
ca[bY.marktr(bq)]=br;
ca[bY.marktr(bn)]=bs;
ca[bY.marktr(bR)]=bf;
ca[bY.marktr(O)]=bK;
ca[bY.marktr(bk)]=be;
ca[bY.marktr(bB)]=bb;
ca[bY.marktr(y)]=bc;
ca[bY.marktr(bC)]=bA;
ca[bY.marktr(t)]=bA;
ca[bY.marktr(a)]=Y;
ca[bY.marktr(V)]=bP;
ca[bY.marktr(W)]=by;
ca[bY.marktr(B)]=X;
ca[bY.marktr(u)]=bz;
ca[bY.marktr(bL)]=bd;
ca[bY.marktr(bp)]=bg;
ca[bY.marktr(bo)]=bv;
ca[bY.marktr(z)]=bM;
ca[bY.marktr(bh)]=bQ;
ca[bY.marktr(v)]=bw;
ca[bY.marktr(bS)]=bt;
ca[bY.marktr(d)]=M;
ca[bY.marktr(w)]=U;
ca[bY.marktr(x)]=bI;
ca[bY.marktr(p)]=bH;
ca[bY.marktr(C)]=ba;
ca[bY.marktr(n)]=bx;
ca[bY.marktr(o)]=br;
ca[bY.marktr(H)]=bs;
bV._keyNames=ca;
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__py:false,_setAllowMenuOpenHover:function(p){this.__py=p;
},_isAllowMenuOpenHover:function(){return this.__py;
},_applySpacing:function(m,n){var o=this._getLayout();
m==null?o.resetSpacing():o.setSpacing(m);
},addSpacer:function(){var q=new qx.ui.core.Spacer;
this._add(q,{flex:1});
return q;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var s=this.getChildren();
var r=[];
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];

if(t instanceof qx.ui.menubar.Button){r.push(t);
}else if(t instanceof qx.ui.toolbar.Part){r.push.apply(r,t.getMenuButtons());
}}return r;
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jx:null,__jy:false,__jz:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jy){this.__jy=false;
}else{this.__jy=true;
o.execute(this);
}}this.fireEvent(n);
},__jA:function(e){if(this.__jy){this.__jy=false;
return;
}this.__jy=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jz);
}
if(p!=null){this.__jz=p.addListener(n,this.__jA,this);
}var t=this.__jx;

if(t==null){this.__jx=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jx=null;
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
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(m,n,o){qx.ui.form.Button.call(this,m,n);
if(o!=null){this.setMenu(o);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(r){var s=this.getMenu();

if(s){qx.ui.menu.Manager.getInstance().hideAll();
s.setOpener(this);
s.open();
if(r){var t=s.getSelectables()[0];

if(t){s.setSelectedButton(t);
}}}},_onMenuChange:function(e){var u=this.getMenu();

if(u.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var v=this.getMenu();

if(v){if(!v.isVisible()){this.open();
}else{v.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){qx.ui.form.Button.prototype._onMouseUp.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(k);
},_onMouseOut:function(e){this.removeState(k);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case g:this.removeState(b);
this.addState(l);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var h="pressed",g="hovered",f="inherit",d="qx.ui.menubar.Button",c="keydown",b="menubar-button",a="keyup";
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(j){qx.ui.form.MenuButton.prototype.open.call(this,j);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var i=this.getMenu();
var menubar=this.getMenuBar();

if(i.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(i);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==i){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){qx.ui.form.MenuButton.prototype._onMouseUp.call(this,e);
var n=this.getMenu();

if(n&&n.isVisible()&&!this.hasState(h)){this.addState(h);
}},_onMouseOver:function(e){this.addState(g);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var bt="keypress",bs="qx.debug",br="interval",bq="keydown",bp="on",bo="mousedown",bn="keyup",bm="__ms",bl="__mq",bk="blur",bd="Enter",bj="__mr",bg="Up",bc="Escape",bb="qx.ui.menu.Manager",bf="Left",be="Down",bh="Right",ba="singleton",bi="Space";
qx.Class.define(bb,{type:ba,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mq=[];
var bE=document.body;
var bF=qx.event.Registration;
bF.addListener(window.document.documentElement,bo,this._onMouseDown,this,true);
bF.addListener(bE,bq,this._onKeyUpDown,this,true);
bF.addListener(bE,bn,this._onKeyUpDown,this,true);
bF.addListener(bE,bt,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bk,this.hideAll,this);
this.__mr=new qx.event.Timer;
this.__mr.addListener(br,this._onOpenInterval,this);
this.__ms=new qx.event.Timer;
this.__ms.addListener(br,this._onCloseInterval,this);
},members:{__mt:null,__mu:null,__mr:null,__ms:null,__mq:null,_getChild:function(d,f,g,h){var j=d.getChildren();
var length=j.length;
var k;

for(var i=f;i<length&&i>=0;i+=g){k=j[i];

if(k.isEnabled()&&!k.isAnonymous()){return k;
}}
if(h){i=i==length?0:length-1;

for(;i!=f;i+=g){k=j[i];

if(k.isEnabled()&&!k.isAnonymous()){return k;
}}}return null;
},_isInMenu:function(C){while(C){if(C instanceof qx.ui.menu.Menu){return true;
}C=C.getLayoutParent();
}return false;
},_getMenuButton:function(F){while(F){if(F instanceof qx.ui.menu.AbstractButton){return F;
}F=F.getLayoutParent();
}return null;
},add:function(bu){if(qx.core.Variant.isSet(bs,bp)){if(!(bu instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bu);
}}var bv=this.__mq;
bv.push(bu);
bu.setZIndex(1e6+bv.length);
},remove:function(bz){if(qx.core.Variant.isSet(bs,bp)){if(!(bz instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bz);
}}var bA=this.__mq;

if(bA){qx.lang.Array.remove(bA,bz);
}},hideAll:function(){var v=this.__mq;

if(v){for(var i=v.length-1;i>=0;i--){v[i].exclude();
}}},getActiveMenu:function(){var w=this.__mq;
return w.length>0?w[w.length-1]:null;
},scheduleOpen:function(E){this.cancelClose(E);
if(E.isVisible()){if(this.__mt){this.cancelOpen(this.__mt);
}}else if(this.__mt!=E){this.__mt=E;
this.__mr.restartWith(E.getOpenInterval());
}},scheduleClose:function(u){this.cancelOpen(u);
if(!u.isVisible()){if(this.__mu){this.cancelClose(this.__mu);
}}else if(this.__mu!=u){this.__mu=u;
this.__ms.restartWith(u.getCloseInterval());
}},cancelOpen:function(D){if(this.__mt==D){this.__mr.stop();
this.__mt=null;
}},cancelClose:function(c){if(this.__mu==c){this.__ms.stop();
this.__mu=null;
}},_onOpenInterval:function(e){this.__mr.stop();
this.__mt.open();
this.__mt=null;
},_onCloseInterval:function(e){this.__ms.stop();
this.__mu.exclude();
this.__mu=null;
},_onMouseDown:function(e){var P=e.getTarget();
P=qx.ui.core.Widget.getWidgetByElement(P);
if(P==null){this.hideAll();
return;
}if(P.getMenu&&P.getMenu()&&P.getMenu().isVisible()){return;
}if(this.__mq.length>0&&!this._isInMenu(P)){this.hideAll();
}},__mv:{"Enter":1,"Space":1},__mw:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var X=this.getActiveMenu();

if(!X){return;
}var Y=e.getKeyIdentifier();

if(this.__mw[Y]||(this.__mv[Y]&&X.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var x=this.getActiveMenu();

if(!x){return;
}var y=e.getKeyIdentifier();
var A=this.__mw[y];
var z=this.__mv[y];

if(A){switch(y){case bg:this._onKeyPressUp(x);
break;
case be:this._onKeyPressDown(x);
break;
case bf:this._onKeyPressLeft(x);
break;
case bh:this._onKeyPressRight(x);
break;
case bc:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(z){var B=x.getSelectedButton();

if(B){switch(y){case bd:this._onKeyPressEnter(x,B,e);
break;
case bi:this._onKeyPressSpace(x,B,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(l){var m=l.getSelectedButton();
var n=l.getChildren();
var p=m?l.indexOf(m)-1:n.length-1;
var o=this._getChild(l,p,-1,true);
if(o){l.setSelectedButton(o);
}else{l.resetSelectedButton();
}},_onKeyPressDown:function(q){var r=q.getSelectedButton();
var t=r?q.indexOf(r)+1:0;
var s=this._getChild(q,t,1,true);
if(s){q.setSelectedButton(s);
}else{q.resetSelectedButton();
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
}}},_onKeyPressEnter:function(bB,bC,e){if(bC.hasListener(bt)){var bD=e.clone();
bD.setBubbles(false);
bD.setTarget(bC);
bC.dispatchEvent(bD);
}this.hideAll();
},_onKeyPressSpace:function(bw,bx,e){if(bx.hasListener(bt)){var by=e.clone();
by.setBubbles(false);
by.setTarget(bx);
bx.dispatchEvent(by);
}}},destruct:function(){var b=qx.event.Registration;
var a=document.body;
b.removeListener(window.document.documentElement,bo,this._onMouseDown,this,true);
b.removeListener(a,bq,this._onKeyUpDown,this,true);
b.removeListener(a,bn,this._onKeyUpDown,this,true);
b.removeListener(a,bt,this._onKeyPress,this,true);
this._disposeObjects(bj,bm);
this._disposeArray(bl);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ch:function(v,w,x,y){var z=this.getChildrenContainer();

if(z===this){v=h+v;
}return (z[v])(w,x,y);
},getChildren:function(){return this.__ch(c);
},hasChildren:function(){return this.__ch(f);
},add:function(D,E){return this.__ch(j,D,E);
},remove:function(q){return this.__ch(a,q);
},removeAll:function(){return this.__ch(d);
},indexOf:function(p){return this.__ch(l,p);
},addAt:function(s,t,u){this.__ch(g,s,t,u);
},addBefore:function(A,B,C){this.__ch(i,A,B,C);
},addAfter:function(m,n,o){this.__ch(k,m,n,o);
},removeAt:function(r){this.__ch(e,r);
}}});
})();
(function(){var o="slidebar",n="Integer",m="resize",l="qx.ui.core.Widget",k="selected",j="visible",h="Boolean",g="mouseout",f="excluded",d="menu",D="_applySelectedButton",C="_applyOpenInterval",B="_applySpacingY",A="_blocker",z="_applyCloseInterval",y="_applyBlockerColor",x="_applyIconColumnWidth",w="mouseover",v="qx.ui.menu.Menu",u="Color",s="Number",t="_applyOpenedButton",q="_applySpacingX",r="_applyBlockerOpacity",p="_applyArrowColumnWidth";
qx.Class.define(v,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var H=this.getApplicationRoot();
H.add(this);
this.addListener(w,this._onMouseOver);
this.addListener(g,this._onMouseOut);
this.addListener(m,this._onResize,this);
H.addListener(m,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(H);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:d},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:f},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:n,apply:q,init:0,themeable:true},spacingY:{check:n,apply:B,init:0,themeable:true},iconColumnWidth:{check:n,init:0,themeable:true,apply:x},arrowColumnWidth:{check:n,init:0,themeable:true,apply:p},blockerColor:{check:u,init:null,nullable:true,apply:y,themeable:true},blockerOpacity:{check:s,init:1,apply:r,themeable:true},selectedButton:{check:l,nullable:true,apply:D},openedButton:{check:l,nullable:true,apply:t},opener:{check:l,nullable:true},openInterval:{check:n,themeable:true,init:250,apply:C},closeInterval:{check:n,themeable:true,init:250,apply:z},blockBackground:{check:h,themeable:true,init:false}},members:{__ly:null,__lz:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__lB();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__lB();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(E){this.placeToPoint(E);
this.__lB();
this.show();
this._placementTarget=E;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bl=[];
var bm=this.getChildren();

for(var i=0;i<bm.length;i++){if(bm[i].isEnabled()){bl.push(bm[i]);
}}return bl;
},_applyIconColumnWidth:function(bh,bi){this._getMenuLayout().setIconColumnWidth(bh);
},_applyArrowColumnWidth:function(bd,be){this._getMenuLayout().setArrowColumnWidth(bd);
},_applySpacingX:function(O,P){this._getMenuLayout().setColumnSpacing(O);
},_applySpacingY:function(W,X){this._getMenuLayout().setSpacing(W);
},_applyVisibility:function(Y,ba){qx.ui.core.Widget.prototype._applyVisibility.call(this,Y,ba);
var bb=qx.ui.menu.Manager.getInstance();

if(Y===j){bb.add(this);
var bc=this.getParentMenu();

if(bc){bc.setOpenedButton(this.getOpener());
}}else if(ba===j){bb.remove(this);
var bc=this.getParentMenu();

if(bc&&bc.getOpenedButton()==this.getOpener()){bc.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__lA();
},__lA:function(){if(this.isVisible()){if(this.getBlockBackground()){var V=this.getZIndex();
this._blocker.blockContent(V-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var N=this.getOpener();

if(!N||!(N instanceof qx.ui.menu.AbstractButton)){return null;
}
while(N&&!(N instanceof qx.ui.menu.Menu)){N=N.getLayoutParent();
}return N;
},_applySelectedButton:function(bf,bg){if(bg){bg.removeState(k);
}
if(bf){bf.addState(k);
}},_applyOpenedButton:function(bn,bo){if(bo){bo.getMenu().exclude();
}
if(bn){bn.getMenu().open();
}},_applyBlockerColor:function(bq,br){this._blocker.setColor(bq);
},_applyBlockerOpacity:function(F,G){this._blocker.setOpacity(F);
},getChildrenContainer:function(){return this.getChildControl(o,true)||this;
},_createChildControlImpl:function(I){var J;

switch(I){case o:var J=new qx.ui.menu.MenuSlideBar();
var L=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var K=J.getLayout();
J.setLayout(L);
K.dispose();
var M=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<M.length;i++){J.add(M[i]);
}this.removeListener(m,this._onResize,this);
J.getChildrenContainer().addListener(m,this._onResize,this);
this._add(J);
break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},_getMenuLayout:function(){if(this.hasChildControl(o)){return this.getChildControl(o).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(o)){return this.getChildControl(o).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__lB:function(){var b=this._getMenuBounds();

if(!b){this.addListenerOnce(m,this.__lB,this);
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
}},_assertSlideBar:function(Q){if(this.hasChildControl(o)){return Q.call(this);
}this.__lz=Q;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(o);

if(this.__lz){this.__lz.call(this);
delete this.__lz;
}},_onResize:function(){if(this.isVisible()){var bp=this._placementTarget;

if(!bp){return;
}else if(bp instanceof qx.ui.core.Widget){this.placeToWidget(bp);
}else if(bp.top!==undefined){this.placeToPoint(bp);
}else{throw new Error("Unknown target: "+bp);
}this.__lB();
}},_onMouseOver:function(e){var S=qx.ui.menu.Manager.getInstance();
S.cancelClose(this);
var T=e.getTarget();

if(T.isEnabled()&&T instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(T);
var R=T.getMenu&&T.getMenu();

if(R){R.setOpener(T);
S.scheduleOpen(R);
this.__ly=R;
}else{var U=this.getOpenedButton();

if(U){S.scheduleClose(U.getMenu());
}
if(this.__ly){S.cancelOpen(this.__ly);
this.__ly=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bj=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bk=this.getOpenedButton();
bk?this.setSelectedButton(bk):this.resetSelectedButton();
if(bk){bj.cancelClose(bk.getMenu());
}if(this.__ly){bj.cancelOpen(this.__ly);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(m,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(A);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oX:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oX=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oX||null;
}},destruct:function(){this.__oX=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(K){var L;

switch(K){case t:L=new qx.ui.basic.Image;
L.setAnonymous(true);
this._add(L,{column:0});
break;
case s:L=new qx.ui.basic.Label;
L.setAnonymous(true);
this._add(L,{column:1});
break;
case q:L=new qx.ui.basic.Label;
L.setAnonymous(true);
this._add(L,{column:2});
break;
case r:L=new qx.ui.basic.Image;
L.setAnonymous(true);
this._add(L,{column:3});
break;
}return L||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,K);
},_forwardStates:{selected:1},getChildrenSizes:function(){var C=0,D=0,E=0,I=0;

if(this._isChildControlVisible(t)){var J=this.getChildControl(t);
C=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(s)){var G=this.getChildControl(s);
D=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(q)){var F=this.getChildControl(q);
E=F.getMarginLeft()+F.getSizeHint().width+F.getMarginRight();
}
if(this._isChildControlVisible(r)){var H=this.getChildControl(r);
I=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}return [C,D,E,I];
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
}},_applyMenu:function(M,N){if(N){N.resetOpener();
N.removeState(n);
}
if(M){this._showChildControl(r);
M.setOpener(this);
M.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(h,name,j){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(p,q){var A=this._getLayoutChildren();
var z;
var s;
var t=[];

for(var i=0,l=A.length;i<l;i++){z=A[i];
s=z.getLayoutProperties().column;
t[s]=z;
}var y=this.__mf(A[0]);
var B=y.getColumnSizes();
var v=y.getSpacingX();
var u=qx.lang.Array.sum(B)+v*(B.length-1);

if(u<p){B[1]+=p-u;
}var C=0,top=0;
var w=qx.ui.layout.Util;

for(var i=0,l=B.length;i<l;i++){z=t[i];

if(z){var r=z.getSizeHint();
var top=w.computeVerticalAlignOffset(z.getAlignY()||c,r.height,q,0,0);
var x=w.computeHorizontalAlignOffset(z.getAlignX()||d,r.width,B[i],z.getMarginLeft(),z.getMarginRight());
z.renderLayout(C+x,top,r.width,r.height);
}C+=B[i]+v;
}},__mf:function(D){while(!(D instanceof qx.ui.menu.Menu)){D=D.getLayoutParent();
}return D;
},_computeSizeHint:function(){var n=this._getLayoutChildren();
var m=0;
var o=0;

for(var i=0,l=n.length;i<l;i++){var k=n[i].getSizeHint();
o+=k.width;
m=Math.max(m,k.height);
}return {width:o,height:m};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var q="horizontal",p="scrollpane",o="vertical",n="button-backward",m="button-forward",l="content",k="execute",j="qx.ui.container.SlideBar",i="scrollY",h="removeChildWidget",c="scrollX",g="_applyOrientation",f="mousewheel",b="Integer",a="slidebar",d="update";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(G){qx.ui.core.Widget.call(this);
var H=this.getChildControl(p);
this._add(H,{flex:1});

if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}this.addListener(f,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:a},orientation:{check:[q,o],init:q,apply:g},scrollStep:{check:b,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(l);
},_createChildControlImpl:function(I){var J;

switch(I){case m:J=new qx.ui.form.RepeatButton;
J.addListener(k,this._onExecuteForward,this);
J.setFocusable(false);
this._addAt(J,2);
break;
case n:J=new qx.ui.form.RepeatButton;
J.addListener(k,this._onExecuteBackward,this);
J.setFocusable(false);
this._addAt(J,0);
break;
case l:J=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){J.addListener(h,this._onRemoveChild,this);
}this.getChildControl(p).add(J);
break;
case p:J=new qx.ui.core.scroll.ScrollPane();
J.addListener(d,this._onResize,this);
J.addListener(c,this._onScroll,this);
J.addListener(i,this._onScroll,this);
break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,I);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(r){var s=this.getChildControl(p);

if(this.getOrientation()===q){s.scrollByX(r);
}else{s.scrollByY(r);
}},scrollTo:function(w){var x=this.getChildControl(p);

if(this.getOrientation()===q){x.scrollToX(w);
}else{x.scrollToY(w);
}},_applyOrientation:function(y,z){var C=[this.getLayout(),this._getLayout()];
var B=this.getChildControl(m);
var A=this.getChildControl(n);
if(z==o){B.removeState(o);
A.removeState(o);
B.addState(q);
A.addState(q);
}else if(z==q){B.removeState(q);
A.removeState(q);
B.addState(o);
A.addState(o);
}
if(y==q){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(C[0]){C[0].dispose();
}
if(C[1]){C[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(p).getChildren()[0];

if(!content){return;
}var t=this.getInnerSize();
var v=content.getBounds();
var u=(this.getOrientation()===q)?v.width>t.width:v.height>t.height;

if(u){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(p).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var E=this.getChildControl(p);

if(this.getOrientation()===q){var D=E.getScrollX();
var F=E.getScrollMaxX();
}else{var D=E.getScrollY();
var F=E.getScrollMaxY();
}this.getChildControl(n).setEnabled(D>0);
this.getChildControl(m).setEnabled(D<F);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__lW",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(q,r){qx.ui.form.Button.call(this,q,r);
this.__lW=new qx.event.AcceleratingTimer();
this.__lW.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lX:null,__lW:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__lY();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lX){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__ma();
},_applyEnabled:function(o,p){qx.ui.form.Button.prototype._applyEnabled.call(this,o,p);

if(!o){this.removeState(n);
this.removeState(m);
this.__ma();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lW.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lW.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__lY();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lX){this.execute();
}}this.__ma();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lX){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__ma();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__lY();
}},_onInterval:function(e){this.__lX=true;
this.fireEvent(b);
},__lY:function(){this.fireEvent(g);
this.__lX=false;
this.__lW.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__ma:function(){this.fireEvent(d);
this.__lW.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="__oY",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__oY=new qx.event.Timer(this.getInterval());
this.__oY.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oY:null,__pa:null,start:function(){this.__oY.setInterval(this.getFirstInterval());
this.__oY.start();
},stop:function(){this.__oY.stop();
this.__pa=null;
},_onInterval:function(){this.__oY.stop();

if(this.__pa==null){this.__pa=this.getInterval();
}this.__pa=Math.max(this.getMinimum(),this.__pa-this.getDecrease());
this.__oY.setInterval(this.__pa);
this.__oY.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var G="resize",F="scrollY",E="update",D="scrollX",C="_applyScrollX",B="_applyScrollY",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",z="appear",w="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",v="qx.event.type.Event",t="qx.ui.core.scroll.ScrollPane",u="scroll";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(G,this._onUpdate);
var n=this.getContentElement();
n.addListener(u,this._onScroll,this);
n.addListener(z,this._onAppear,this);
},events:{update:v},properties:{scrollX:{check:A,apply:C,event:D,init:0},scrollY:{check:w,apply:B,event:F,init:0}},members:{add:function(h){var i=this._getChildren()[0];

if(i){this._remove(i);
i.removeListener(G,this._onUpdate,this);
}
if(h){this._add(h);
h.addListener(G,this._onUpdate,this);
}},remove:function(g){if(g){this._remove(g);
g.removeListener(G,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(E);
},_onScroll:function(e){var j=this.getContentElement();
this.setScrollX(j.getScrollX());
this.setScrollY(j.getScrollY());
},_onAppear:function(e){var K=this.getContentElement();
var H=this.getScrollX();
var I=K.getScrollX();

if(H!=I){K.scrollToX(H);
}var L=this.getScrollY();
var J=K.getScrollY();

if(L!=J){K.scrollToY(L);
}},getItemTop:function(o){var top=0;

do{top+=o.getBounds().top;
o=o.getLayoutParent();
}while(o&&o!==this);
return top;
},getItemBottom:function(k){return this.getItemTop(k)+k.getBounds().height;
},getItemLeft:function(a){var b=0;
var parent;

do{b+=a.getBounds().left;
parent=a.getLayoutParent();

if(parent){b+=parent.getInsets().left;
}a=parent;
}while(a&&a!==this);
return b;
},getItemRight:function(f){return this.getItemLeft(f)+f.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.width-d.width);
}return 0;
},getScrollMaxY:function(){var m=this.getInnerSize();
var l=this.getScrollSize();

if(m&&l){return Math.max(0,l.height-m.height);
}return 0;
},scrollToX:function(r){var s=this.getScrollMaxX();

if(r<0){r=0;
}else if(r>s){r=s;
}this.setScrollX(r);
},scrollToY:function(p){var q=this.getScrollMaxY();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollY(p);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(N){this.getContentElement().scrollToX(N);
},_applyScrollY:function(M){this.getContentElement().scrollToY(M);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="interval",d="mouseover",c="mouseout",b="qx.ui.form.HoverButton",a="__lC";
qx.Class.define(b,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(d,this._onMouseOver,this);
this.addListener(c,this._onMouseOut,this);
this.__lC=new qx.event.AcceleratingTimer();
this.__lC.addListener(f,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__lC:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__lC.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__lC.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__lC.stop();
}}},destruct:function(){this._disposeObjects(a);
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
(function(){var c="qx.ui.form.IRadioItem",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeValue":b},members:{setValue:function(a){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
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
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="changeSelection",c="on",b="__kO",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__kO=new qx.data.Array();
this.__kO.addListener(f,this.__kR,this);
this.addListener(d,this.__kQ,this);
},events:{changeModelSelection:a},members:{__kO:null,__kP:false,__kQ:function(){if(this.__kP){return;
}var m=this.getSelection();
var k=[];

for(var i=0;i<m.length;i++){var n=m[i];
var l=n.getModel?n.getModel():null;

if(l!==null){k.push(l);
}}if(k.length===m.length){this.setModelSelection(k);
}},__kR:function(){this.__kP=true;
var r=this.getSelectables();
var t=[];
var s=this.__kO.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__kP=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__kQ();
}},getModelSelection:function(){return this.__kO;
},setModelSelection:function(o){if(!o){this.__kO.removeAll();
return;
}
if(qx.core.Variant.isSet(e,c)){this.assertArray(o,h);
}o.unshift(this.__kO.getLength());
o.unshift(0);
var p=this.__kO.splice.apply(this.__kO,o);
p.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var u="Boolean",t="changeValue",s="_applyAllowEmptySelection",r="_applyInvalidMessage",q="qx.ui.form.RadioGroup",p="_applyValid",o="",n="changeRequired",m="changeValid",k="changeEnabled",g="__a",j="changeInvalidMessage",h="changeSelection",f="_applyEnabled",d="String";
qx.Class.define(q,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(D){qx.core.Object.call(this);
this.__a=[];
this.addListener(h,this.__b,this);

if(D!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:u,apply:f,event:k,init:true},wrap:{check:u,init:true},allowEmptySelection:{check:u,init:false,apply:s},valid:{check:u,init:true,apply:p,event:m},required:{check:u,init:false,event:n},invalidMessage:{check:d,init:o,event:j,apply:r}},members:{__a:null,getItems:function(){return this.__a;
},add:function(v){var w=this.__a;
var x;

for(var i=0,l=arguments.length;i<l;i++){x=arguments[i];

if(qx.lang.Array.contains(w,x)){continue;
}x.addListener(t,this._onItemChangeChecked,this);
w.push(x);
x.setGroup(this);
if(x.getValue()){this.setSelection([x]);
}}if(!this.isAllowEmptySelection()&&w.length>0&&!this.getSelection()[0]){this.setSelection([w[0]]);
}},remove:function(E){var F=this.__a;

if(qx.lang.Array.contains(F,E)){qx.lang.Array.remove(F,E);
if(E.getGroup()===this){E.resetGroup();
}E.removeListener(t,this._onItemChangeChecked,this);
if(E.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var I=e.getTarget();

if(I.getValue()){this.setSelection([I]);
}else if(this.getSelection()[0]==I){this.resetSelection();
}},_applyInvalidMessage:function(O,P){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(O);
}},_applyValid:function(G,H){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(G);
}},_applyEnabled:function(a,b){var c=this.__a;

if(a==null){for(var i=0,l=c.length;i<l;i++){c[i].resetEnabled();
}}else{for(var i=0,l=c.length;i<l;i++){c[i].setEnabled(a);
}}},_applyAllowEmptySelection:function(y,z){if(!y&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var L=this.getSelection()[0];
var N=this.__a;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M+1)%length;
}else{M=Math.min(M+1,length-1);
}
while(i<length&&!N[M].getEnabled()){M=(M+1)%length;
i++;
}this.setSelection([N[M]]);
},selectPrevious:function(){var A=this.getSelection()[0];
var C=this.__a;
var B=C.indexOf(A);

if(B==-1){return;
}var i=0;
var length=C.length;
if(this.getWrap()){B=(B-1+length)%length;
}else{B=Math.max(B-1,0);
}
while(i<length&&!C[B].getEnabled()){B=(B-1+length)%length;
i++;
}this.setSelection([C[B]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__b:function(e){var K=e.getData()[0];
var J=e.getOldData()[0];

if(J){J.setValue(false);
}
if(K){K.setValue(true);
}}},destruct:function(){this._disposeArray(g);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__la,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__la:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var I="change",H="add",G="remove",F="order",E="The parameter must be an array.",D="",C="qx.data.Array",B="?",A="changeBubble",z="qx.event.type.Event",w="number",y="on",x="changeLength",v="qx.debug",u="qx.event.type.Data";
qx.Class.define(C,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(b){qx.core.Object.call(this);
if(b==undefined){this.__kM=[];
}else if(arguments.length>1){this.__kM=[];

for(var i=0;i<arguments.length;i++){this.__kM.push(arguments[i]);
}}else if(typeof b==w){this.__kM=new Array(b);
}else if(b instanceof Array){this.__kM=qx.lang.Array.clone(b);
}else{this.__kM=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(this.__kM[i],null,i);
}this.__kN();
},events:{"change":u,"changeLength":z},members:{__kM:null,concat:function(j){if(j){var k=this.__kM.concat(j);
}else{var k=this.__kM.concat();
}return new qx.data.Array(k);
},join:function(bi){return this.__kM.join(bi);
},pop:function(){var t=this.__kM.pop();
this.__kN();
this._applyEventPropagation(null,t,this.length-1);
this.fireDataEvent(I,{start:this.length-1,end:this.length-1,type:G,items:[t]},null);
return t;
},push:function(J){for(var i=0;i<arguments.length;i++){this.__kM.push(arguments[i]);
this.__kN();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(I,{start:this.length-1,end:this.length-1,type:H,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kM.reverse();
this.fireDataEvent(I,{start:0,end:this.length-1,type:F,items:null},null);
},shift:function(){var c=this.__kM.shift();
this.__kN();
this._applyEventPropagation(null,c,this.length-1);
this.fireDataEvent(I,{start:0,end:this.length-1,type:G,items:[c]},null);
return c;
},slice:function(Q,R){return new qx.data.Array(this.__kM.slice(Q,R));
},splice:function(W,X,Y){var bf=this.__kM.length;
var bc=this.__kM.splice.apply(this.__kM,arguments);
if(this.__kM.length!=bf){this.__kN();
}var bd=X>0;
var ba=arguments.length>2;
var bb=null;

if(bd||ba){if(this.__kM.length>bf){var be=H;
}else if(this.__kM.length<bf){var be=G;
bb=bc;
}else{var be=F;
}this.fireDataEvent(I,{start:W,end:this.length-1,type:be,items:bb},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,W+i);
}this.fireDataEvent(A,{value:this,name:B,old:bc});
for(var i=0;i<bc.length;i++){this._applyEventPropagation(null,bc[i],i);
}return (new qx.data.Array(bc));
},sort:function(a){this.__kM.sort.apply(this.__kM,arguments);
this.fireDataEvent(I,{start:0,end:this.length-1,type:F,items:null},null);
},unshift:function(d){for(var i=arguments.length-1;i>=0;i--){this.__kM.unshift(arguments[i]);
this.__kN();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(I,{start:0,end:this.length-1,type:H,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kM;
},getItem:function(K){return this.__kM[K];
},setItem:function(bj,bk){var bl=this.__kM[bj];
this.__kM[bj]=bk;
this._applyEventPropagation(bk,bl,bj);
if(this.length!=this.__kM.length){this.__kN();
}this.fireDataEvent(I,{start:bj,end:bj,type:H,items:[bk]},null);
},getLength:function(){return this.length;
},indexOf:function(bg){return this.__kM.indexOf(bg);
},toString:function(){if(this.__kM!=null){return this.__kM.toString();
}return D;
},contains:function(V){return this.__kM.indexOf(V)!==-1;
},copy:function(){return this.concat();
},insertAt:function(r,s){this.splice(r,0,s);
},insertBefore:function(S,T){var U=this.indexOf(S);

if(U==-1){this.push(T);
}else{this.splice(U,0,T);
}},insertAfter:function(o,p){var q=this.indexOf(o);

if(q==-1||q==(this.length-1)){this.push(p);
}else{this.splice(q+1,0,p);
}},removeAt:function(n){return this.splice(n,1)[0];
},removeAll:function(){for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(null,this.__kM[i],i);
}var O=this.getLength();
var N=this.__kM.concat();
this.__kM.length=0;
this.__kN();
this.fireDataEvent(I,{start:0,end:O-1,type:G,items:N},null);
},append:function(g){if(g instanceof qx.data.Array){g=g.toArray();
}if(qx.core.Variant.isSet(v,y)){qx.core.Assert.assertArray(g,E);
}for(var i=0;i<g.length;i++){this._applyEventPropagation(g[i],null,this.__kM.length+i);
}Array.prototype.push.apply(this.__kM,g);
var h=this.length;
this.__kN();
this.fireDataEvent(I,{start:h,end:this.length-1,type:H,items:g},null);
},remove:function(l){var m=this.indexOf(l);

if(m!=-1){this.splice(m,1);
return l;
}},equals:function(f){if(this.length!==f.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==f.getItem(i)){return false;
}}return true;
},sum:function(){var bh=0;

for(var i=0;i<this.length;i++){bh+=this.getItem(i);
}return bh;
},max:function(){var P=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>P){P=this.getItem(i);
}}return P===undefined?null:P;
},min:function(){var e=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<e){e=this.getItem(i);
}}return e===undefined?null:e;
},forEach:function(L,M){for(var i=0;i<this.__kM.length;i++){L.call(M,this.__kM[i]);
}},__kN:function(){this.length=this.__kM.length;
this.fireEvent(x,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kM.length;i++){this._applyEventPropagation(null,this.__kM[i],i);
}this.__kM=null;
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(f){var g;

switch(f){case e:g=new qx.ui.basic.Image();
g.setAnonymous(true);
this._addAt(g,10);
break;
}return g||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,f);
},_applyShowArrow:function(h,i){if(h){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){qx.ui.basic.Atom.call(this,v,w);
this.addListener(c,this._onMouseOver);
this.addListener(i,this._onMouseOut);
this.addListener(l,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(b,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(h,this._onExecute,this);
},properties:{appearance:{refine:true,init:f},focusable:{refine:true,init:true},value:{check:k,nullable:true,event:a,apply:j,init:false}},members:{_applyValue:function(t,u){t?this.addState(p):this.removeState(p);
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
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(h){qx.ui.core.Widget.call(this);

if(h){this.setSource(h);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(i,j){this._getIframeElement().setSource(i);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(e,k);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(j){this.getContentElement().setStyle(h,j);
},_applyOverflowY:function(k){this.getContentElement().setStyle(d,k);
}}});
})();
(function(){var p="qx.client",o="mousedown",n="load",m="help",l="mouseup",k="losecapture",j="contextmenu",i="none",h="display",g="__wc",G="repeat",F="Boolean",E="px",D="url(",C=")",B="gecko",A="div",z="DOMNodeInserted",y="_applyNativeHelp",x="/",v="appear",w="mshtml",t="block",u="qx.ui.embed.Iframe",r="iframe",s="absolute",q="qx/static/blank.gif";
qx.Class.define(u,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(O){if(O!=null){this.__wb=O;
}qx.ui.embed.AbstractIframe.call(this,O);
qx.event.Registration.addListener(document.body,o,this.block,this,true);
qx.event.Registration.addListener(document.body,l,this.release,this,true);
qx.event.Registration.addListener(document.body,k,this.release,this,true);
this.__wc=this._createBlockerElement();
this.getContainerElement().add(this.__wc);

if(qx.core.Variant.isSet(p,B)){this.addListenerOnce(v,function(e){var H=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(H,z,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:r},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:F,init:false,apply:y}},members:{__wb:null,__wc:null,renderLayout:function(a,top,b,c){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,a,top,b,c);
var f=E;
var d=this.getInsets();
this.__wc.setStyles({"left":d.left+f,"top":d.top+f,"width":(b-d.left-d.right)+f,"height":(c-d.top-d.bottom)+f});
},_createContentElement:function(){var P=new qx.html.Iframe(this.__wb);
P.addListener(n,this._onIframeLoad,this);
return P;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var Q=new qx.html.Element(A);
Q.setStyles({"zIndex":20,"position":s,"display":i});
if(qx.core.Variant.isSet(p,w)){Q.setStyles({backgroundImage:D+qx.util.ResourceManager.getInstance().toUri(q)+C,backgroundRepeat:G});
}return Q;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(n);
},block:function(){this.__wc.setStyle(h,t);
},release:function(){this.__wc.setStyle(h,i);
},_applyNativeContextMenu:function(K,L){if(K!==false&&L!==false){return;
}var M=this.getDocument();

if(!M){return;
}
try{var N=M.documentElement;
}catch(e){return ;
}
if(L===false){qx.event.Registration.removeListener(N,j,this._onNativeContextMenu,this,true);
}
if(K===false){qx.event.Registration.addListener(N,j,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(I,J){var document=this.getDocument();

if(!document){return;
}
try{if(J===false){qx.bom.Event.removeNativeListener(document,m,qx.lang.Function.returnFalse);
}
if(I===false){qx.bom.Event.addNativeListener(document,m,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var S=this.getContentElement().getDomElement();
var R=S.src;
if(R.charAt(R.length-1)==x){R=R.substring(0,R.length-1);
}
if(R!=this.getSource()){qx.bom.Iframe.getWindow(S).stop();
S.src=this.getSource();
}}},destruct:function(){this._disposeObjects(g);
qx.event.Registration.removeListener(document.body,o,this.block,this,true);
qx.event.Registration.removeListener(document.body,l,this.release,this,true);
qx.event.Registration.removeListener(document.body,k,this.release,this,true);
}});
})();
(function(){var g="source",f="name",e="qx.html.Iframe",d="qx.event.type.Event",c="iframe";
qx.Class.define(e,{extend:qx.html.Element,construct:function(n,o,p){qx.html.Element.call(this,c,o,p);
this._setProperty(g,n);
},events:{"load":d},members:{_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name==g){var l=this.getDomElement();
qx.bom.Iframe.setSource(l,k);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var m=this.getDomElement();

if(m){return qx.bom.Iframe.getWindow(m);
}else{return null;
}},getDocument:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getDocument(h);
}else{return null;
}},getBody:function(){var j=this.getDomElement();

if(j){return qx.bom.Iframe.getBody(j);
}else{return null;
}},setSource:function(i){this._setProperty(g,i);
return this;
},getSource:function(){return this._getProperty(g);
},setName:function(name){this.setAttribute(f,name);
return this;
},getName:function(){return this.getAttribute(f);
},reload:function(){var b=this.getDomElement();

if(b){var a=this.getSource();
this.setSource(null);
this.setSource(a);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__me:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__me=null;
},getInsets:function(){if(this.__me){return this.__me;
}var l=this._getDefaultInsets();
return this.__me={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__me=null;
}},destruct:function(){this.__me=null;
}});
})();
(function(){var t="_applyBackground",s="repeat",r="qx.debug",q="on",p="mshtml",o="backgroundPositionX",n="",m="backgroundPositionY",l="hidden",k="no-repeat",d="scale",j=" ",g="repeat-x",c="qx.client",b="repeat-y",f="Please provide a map for the 'styles' parameter",e="qx.ui.decoration.MBackgroundImage",h="String",a='"></div>',i='<div style="';
qx.Mixin.define(e,{properties:{backgroundImage:{check:h,nullable:true,apply:t},backgroundRepeat:{check:[s,g,b,k,d],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateBackgroundMarkup:function(u){if(qx.core.Variant.isSet(r,q)){if(qx.lang.Type.isString(u)){qx.log.Logger.deprecatedWarning(arguments.callee,f);
throw new Error("Wrong type for parameter 'styles'.");
}}var y=n;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+j+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if(u){if(qx.core.Variant.isSet(c,p)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){u.overflow=l;
}}y=i+qx.bom.element.Style.compile(u)+a;
}}return y;
},_applyBackground:function(){if(qx.core.Variant.isSet(r,q)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var k="px",j="qx.ui.decoration.Background",i="",h="qx.debug",g="_applyStyle",f="on",e="Color",d="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(n){qx.ui.decoration.Abstract.call(this);

if(n!=null){this.setBackgroundColor(n);
}},properties:{backgroundColor:{check:e,nullable:true,apply:g}},members:{__mj:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mj;
},getMarkup:function(){if(this.__mj){return this.__mj;
}var l={position:d,top:0,left:0};
var m=this._generateBackgroundMarkup(l);
return this.__mj=m;
},resize:function(o,p,q){o.style.width=p+k;
o.style.height=q+k;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||i;
},_applyStyle:function(){if(qx.core.Variant.isSet(h,f)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__mj=null;
}});
})();
(function(){var p="none",o="text",n="",m="userSelect",l="color",k="String",j="0px",i="webkit",h="changeHtml",g="_applyCssClass",d="class",f="qx.ui.embed.Html",e="_applyHtml",c="qx.client",b="html";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(t){qx.ui.core.Widget.call(this);

if(t!=null){this.setHtml(t);
}},properties:{html:{check:k,apply:e,event:h,nullable:true},cssClass:{check:k,init:n,apply:g},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(q,r){var s=this.getContentElement();
s.setAttribute(b,q||n);
s.setStyles({"padding":j,"border":p});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(d,z);
},_applySelectable:function(a){qx.ui.core.Widget.prototype._applySelectable.call(this,a);
if(qx.core.Variant.isSet(c,i)){this.getContainerElement().setStyle(m,a?o:p);
this.getContentElement().setStyle(m,a?o:p);
}},_applyFont:function(w,x){var y=w?qx.theme.manager.Font.getInstance().resolve(w).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(y);
},_applyTextColor:function(u,v){if(u){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(u));
}else{this.getContentElement().removeStyle(l);
}}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
var s=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(s.join(q));
qx.log.Logger.register(this);
},members:{__tz:null,setElement:function(u){this.clear();
if(u){qx.bom.element.Class.add(u,j);
}this.__tz=u;
},clear:function(){var t=this.__tz;
if(t){t.innerHTML=q;
}},process:function(v){var w=this.__tz;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this.__tz=null;
}});
})();
(function(){var m="default",k="native",j="",h=" ",g="\\b",f="(\\s|$)",e="(^|\\s)",d="g",c="qx.bom.element.Class",b="$2",a="\\b|\\b";
qx.Class.define(c,{statics:{__re:/\s+/g,__rf:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(n,name){n.classList.add(name);
return name;
},"default":function(s,name){if(!this.has(s,name)){s.className+=(s.className?h:j)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(o,p){for(var i=0;i<p.length;i++){o.classList.add(p[i]);
}return o.className;
},"default":function(K,L){var M={};
var O;
var N=K.className;

if(N){O=N.split(this.__re);

for(var i=0,l=O.length;i<l;i++){M[O[i]]=true;
}
for(var i=0,l=L.length;i<l;i++){if(!M[L[i]]){O.push(L[i]);
}}}else{O=L;
}return K.className=O.join(h);
}}),get:function(E){return E.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(J,name){return J.classList.contains(name);
},"default":function(F,name){var G=new RegExp(e+name+f);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(D,name){D.classList.remove(name);
return name;
},"default":function(t,name){var u=new RegExp(e+name+f);
t.className=t.className.replace(u,b);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(q,r){for(var i=0;i<r.length;i++){q.classList.remove(r[i]);
}return q.className;
},"default":function(v,w){var x=new RegExp(g+w.join(a)+g,d);
return v.className=v.className.replace(x,j).replace(this.__rf,j).replace(this.__re,h);
}}),replace:function(y,z,A){this.remove(y,z);
return this.add(y,A);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?k:m,{"native":function(B,name,C){if(C===undefined){B.classList.toggle(name);
}else{C?this.add(B,name):this.remove(B,name);
}return name;
},"default":function(H,name,I){if(I==null){I=!this.has(H,name);
}I?this.add(H,name):this.remove(H,name);
return name;
}})}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var L="scrollbar-y",K="scrollbar-x",J="pane",I="auto",H="corner",G="on",F="changeVisibility",E="scroll",D="_computeScrollbars",C="off",v="scrollY",B="qx.ui.core.scroll.AbstractScrollArea",y="abstract",t="update",s="scrollX",x="mousewheel",w="scrollbarY",z="scrollbarX",r="horizontal",A="scrollarea",u="vertical";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:y,construct:function(){qx.ui.core.Widget.call(this);
var d=new qx.ui.layout.Grid();
d.setColumnFlex(0,1);
d.setRowFlex(0,1);
this._setLayout(d);
this.addListener(x,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:A},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbarY:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbar:{group:[z,w]}},members:{_createChildControlImpl:function(g){var h;

switch(g){case J:h=new qx.ui.core.scroll.ScrollPane();
h.addListener(t,this._computeScrollbars,this);
h.addListener(s,this._onScrollPaneX,this);
h.addListener(v,this._onScrollPaneY,this);
this._add(h,{row:0,column:0});
break;
case K:h=this._createScrollBar(r);
h.setMinWidth(0);
h.exclude();
h.addListener(E,this._onScrollBarX,this);
h.addListener(F,this._onChangeScrollbarXVisibility,this);
this._add(h,{row:1,column:0});
break;
case L:h=this._createScrollBar(u);
h.setMinHeight(0);
h.exclude();
h.addListener(E,this._onScrollBarY,this);
h.addListener(F,this._onChangeScrollbarYVisibility,this);
this._add(h,{row:0,column:1});
break;
case H:h=new qx.ui.core.Widget();
h.setWidth(0);
h.setHeight(0);
h.exclude();
this._add(h,{row:1,column:1});
break;
}return h||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,g);
},getPaneSize:function(){return this.getChildControl(J).getInnerSize();
},getItemTop:function(o){return this.getChildControl(J).getItemTop(o);
},getItemBottom:function(p){return this.getChildControl(J).getItemBottom(p);
},getItemLeft:function(ba){return this.getChildControl(J).getItemLeft(ba);
},getItemRight:function(c){return this.getChildControl(J).getItemRight(c);
},scrollToX:function(j){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollTo(j);
},scrollByX:function(q){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollBy(q);
},getScrollX:function(){var k=this.getChildControl(K,true);
return k?k.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollTo(f);
},scrollByY:function(l){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollBy(l);
},getScrollY:function(){var i=this.getChildControl(L,true);
return i?i.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(J).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(J).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var N=this._isChildControlVisible(K);
var O=this._isChildControlVisible(L);
var M=(O)?this.getChildControl(L,true):(N?this.getChildControl(K,true):null);

if(M){M.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var m=this._isChildControlVisible(K);
var n=this._isChildControlVisible(L);

if(!m){this.scrollToX(0);
}m&&n?this._showChildControl(H):this._excludeChildControl(H);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(K);
var b=this._isChildControlVisible(L);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(H):this._excludeChildControl(H);
},_computeScrollbars:function(){var V=this.getChildControl(J);
var content=V.getChildren()[0];

if(!content){this._excludeChildControl(K);
this._excludeChildControl(L);
return;
}var P=this.getInnerSize();
var U=V.getInnerSize();
var S=V.getScrollSize();
if(!U||!S){return;
}var W=this.getScrollbarX();
var X=this.getScrollbarY();

if(W===I&&X===I){var T=S.width>P.width;
var Y=S.height>P.height;
if((T||Y)&&!(T&&Y)){if(T){Y=S.height>U.height;
}else if(Y){T=S.width>U.width;
}}}else{var T=W===G;
var Y=X===G;
if(S.width>(T?U.width:P.width)&&W===I){T=true;
}
if(S.height>(T?U.height:P.height)&&X===I){Y=true;
}}if(T){var R=this.getChildControl(K);
R.show();
R.setMaximum(Math.max(0,S.width-U.width));
R.setKnobFactor((S.width===0)?0:U.width/S.width);
}else{this._excludeChildControl(K);
}
if(Y){var Q=this.getChildControl(L);
Q.show();
Q.setMaximum(Math.max(0,S.height-U.height));
Q.setKnobFactor((S.height===0)?0:U.height/S.height);
}else{this._excludeChildControl(L);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var y="single",x="Boolean",w="one",v="changeSelection",u="__lK",t="mouseup",s="mousedown",r="losecapture",q="multi",p="_applyQuickSelection",h="mouseover",o="_applySelectionMode",l="_applyDragSelection",g="qx.ui.core.MMultiSelectionHandling",f="removeItem",k="keypress",j="qx.event.type.Data",m="addItem",d="additive",n="mousemove";
qx.Mixin.define(g,{construct:function(){var c=this.SELECTION_MANAGER;
var b=this.__lK=new c(this);
this.addListener(s,b.handleMouseDown,b);
this.addListener(t,b.handleMouseUp,b);
this.addListener(h,b.handleMouseOver,b);
this.addListener(n,b.handleMouseMove,b);
this.addListener(r,b.handleLoseCapture,b);
this.addListener(k,b.handleKeyPress,b);
this.addListener(m,b.handleAddItem,b);
this.addListener(f,b.handleRemoveItem,b);
b.addListener(v,this._onSelectionChange,this);
},events:{"changeSelection":j},properties:{selectionMode:{check:[y,q,d,w],init:y,apply:o},dragSelection:{check:x,init:false,apply:l},quickSelection:{check:x,init:false,apply:p}},members:{__lK:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__lK.selectAll();
},isSelected:function(L){if(!qx.ui.core.Widget.contains(this,L)){throw new Error("Could not test if "+L+" is selected, because it is not a child element!");
}return this.__lK.isItemSelected(L);
},addToSelection:function(F){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not add + "+F+" to selection, because it is not a child element!");
}this.__lK.addItem(F);
},removeFromSelection:function(G){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,G)){throw new Error("Could not remove "+G+" from selection, because it is not a child element!");
}this.__lK.removeItem(G);
},selectRange:function(z,A){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lK.selectItemRange(z,A);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__lK.clearSelection();
},setSelection:function(B){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<B.length;i++){if(!qx.ui.core.Widget.contains(this,B[i])){throw new Error("Could not select "+B[i]+", because it is not a child element!");
}}
if(B.length===0){this.resetSelection();
}else{var C=this.getSelection();

if(!qx.lang.Array.equals(C,B)){this.__lK.replaceSelection(B);
}}},getSelection:function(){return this.__lK.getSelection();
},getSortedSelection:function(){return this.__lK.getSortedSelection();
},isSelectionEmpty:function(){return this.__lK.isSelectionEmpty();
},getSelectionContext:function(){return this.__lK.getSelectionContext();
},_getManager:function(){return this.__lK;
},getSelectables:function(){return this.__lK.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lK.invertSelection();
},_getLeadItem:function(){var a=this.__lK.getMode();

if(a===y||a===w){return this.__lK.getSelectedItem();
}else{return this.__lK.getLeadItem();
}},_applySelectionMode:function(D,E){this.__lK.setMode(D);
},_applyDragSelection:function(H,I){this.__lK.setDrag(H);
},_applyQuickSelection:function(J,K){this.__lK.setQuick(J);
},_onSelectionChange:function(e){this.fireDataEvent(v,e.getData());
}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jF:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jG:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jG[name];
s[t]();
}else{var u=this.__jF[name];
s[u](q);
}}}});
})();
(function(){var C="one",B="single",A="selected",z="additive",y="multi",x="PageUp",w="under",v="Left",u="lead",t="Down",be="Up",bd="Boolean",bc="PageDown",bb="anchor",ba="End",Y="Home",X="Right",W="right",V="click",U="above",J="left",K="Escape",H="__nn",I="drag",F="Space",G="A",D="_applyMode",E="qx.debug",L="interval",M="changeSelection",P="Please use public 'getLeadItem' instead.",O="qx.event.type.Data",R="quick",Q="key",T="abstract",S="on",N="qx.ui.core.selection.Abstract";
qx.Class.define(N,{type:T,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nk={};
},events:{"changeSelection":O},properties:{mode:{check:[B,y,z,C],init:B,apply:D},drag:{check:bd,init:false},quick:{check:bd,init:false}},members:{__nl:0,__nm:0,__nn:null,__no:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nk:null,__nC:null,__nD:null,getSelectionContext:function(){return this.__nA;
},selectAll:function(){var cN=this.getMode();

if(cN==B||cN==C){throw new Error("Can not select all items in selection mode: "+cN);
}this._selectAllItems();
this._fireChange();
},selectItem:function(k){this._setSelectedItem(k);
var m=this.getMode();

if(m!==B&&m!==C){this._setLeadItem(k);
this._setAnchorItem(k);
}this._scrollItemIntoView(k);
this._fireChange();
},addItem:function(ch){var ci=this.getMode();

if(ci===B||ci===C){this._setSelectedItem(ch);
}else{if(!this._getAnchorItem()){this._setAnchorItem(ch);
}this._setLeadItem(ch);
this._addToSelection(ch);
}this._scrollItemIntoView(ch);
this._fireChange();
},removeItem:function(cS){this._removeFromSelection(cS);

if(this.getMode()===C&&this.isSelectionEmpty()){var cT=this._getFirstSelectable();

if(cT){this.addItem(cT);
}if(cT==cS){return;
}}
if(this.getLeadItem()==cS){this._setLeadItem(null);
}
if(this._getAnchorItem()==cS){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cO,cP){var cQ=this.getMode();

if(cQ==B||cQ==C){throw new Error("Can not select multiple items in selection mode: "+cQ);
}this._selectItemRange(cO,cP);
this._setAnchorItem(cO);
this._setLeadItem(cP);
this._scrollItemIntoView(cP);
this._fireChange();
},clearSelection:function(){if(this.getMode()==C){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cd){var ce=this.getMode();

if(ce==C||ce===B){if(cd.length>1){throw new Error("Could not select more than one items in mode: "+ce+"!");
}
if(cd.length==1){this.selectItem(cd[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cd);
}},getSelectedItem:function(){var cp=this.getMode();

if(cp===B||cp===C){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__nk);
},getSortedSelection:function(){var da=this.getSelectables();
var cY=qx.lang.Object.getValues(this.__nk);
cY.sort(function(a,b){return da.indexOf(a)-da.indexOf(b);
});
return cY;
},isItemSelected:function(cs){var ct=this._selectableToHashCode(cs);
return this.__nk[ct]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__nk);
},invertSelection:function(){var cv=this.getMode();

if(cv===B||cv===C){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cu=this.getSelectables();

for(var i=0;i<cu.length;i++){this._toggleInSelection(cu[i]);
}this._fireChange();
},_setLeadItem:function(cK){var cL=this.__nB;

if(cL!==null){this._styleSelectable(cL,u,false);
}
if(cK!==null){this._styleSelectable(cK,u,true);
}this.__nB=cK;
},_getLeadItem:function(){if(qx.core.Variant.isSet(E,S)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,P);
}return this.getLeadItem();
},getLeadItem:function(){return this.__nB!==null?this.__nB:null;
},_setAnchorItem:function(bz){var bA=this.__nC;

if(bA){this._styleSelectable(bA,bb,false);
}
if(bz){this._styleSelectable(bz,bb,true);
}this.__nC=bz;
},_getAnchorItem:function(){return this.__nC!==null?this.__nC:null;
},_isSelectable:function(bq){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cR=event.getTarget();
return this._isSelectable(cR)?cR:null;
},_selectableToHashCode:function(db){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(br,bs,bt){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(cM){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bu){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bp){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bv,bw){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(cI,cJ){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bY,ca){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bB,bC){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bB===C){var bD=this._getFirstSelectable();

if(bD){this._setSelectedItem(bD);
this._scrollItemIntoView(bD);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cV=this.getMode();

if(cV!==C&&cV!==B){return;
}var cU=this._getSelectableFromMouseEvent(event);

if(cU===null){return;
}this._setSelectedItem(cU);
this._fireChange(R);
},handleMouseDown:function(event){var f=this._getSelectableFromMouseEvent(event);

if(f===null){return;
}var h=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var d=event.isShiftPressed();
if(this.isItemSelected(f)&&!d&&!h&&!this.getDrag()){this.__nD=f;
return;
}else{this.__nD=null;
}this._scrollItemIntoView(f);
switch(this.getMode()){case B:case C:this._setSelectedItem(f);
break;
case z:this._setLeadItem(f);
this._setAnchorItem(f);
this._toggleInSelection(f);
break;
case y:this._setLeadItem(f);
if(d){var g=this._getAnchorItem();

if(g===null){g=this._getFirstSelectable();
this._setAnchorItem(g);
}this._selectItemRange(g,f,h);
}else if(h){this._setAnchorItem(f);
this._toggleInSelection(f);
}else{this._setAnchorItem(f);
this._setSelectedItem(f);
}break;
}var j=this.getMode();

if(this.getDrag()&&j!==B&&j!==C&&!d&&!h){this.__nr=this._getLocation();
this.__no=this._getScroll();
this.__ns=event.getDocumentLeft()+this.__no.left;
this.__nt=event.getDocumentTop()+this.__no.top;
this.__nu=true;
this._capture();
}this._fireChange(V);
},handleMouseUp:function(event){var s=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var p=event.isShiftPressed();

if(!s&&!p&&this.__nD){var q=this._getSelectableFromMouseEvent(event);

if(q===null||!this.isItemSelected(q)){return;
}var r=this.getMode();

if(r===z){this._removeFromSelection(q);
}else{this._setSelectedItem(q);

if(this.getMode()===y){this._setLeadItem(q);
this._setAnchorItem(q);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__nu){return;
}this.__nv=event.getDocumentLeft();
this.__nw=event.getDocumentTop();
var bP=this.__nv+this.__no.left;

if(bP>this.__ns){this.__nx=1;
}else if(bP<this.__ns){this.__nx=-1;
}else{this.__nx=0;
}var bO=this.__nw+this.__no.top;

if(bO>this.__nt){this.__ny=1;
}else if(bO<this.__nt){this.__ny=-1;
}else{this.__ny=0;
}var location=this.__nr;

if(this.__nv<location.left){this.__nl=this.__nv-location.left;
}else if(this.__nv>location.right){this.__nl=this.__nv-location.right;
}else{this.__nl=0;
}
if(this.__nw<location.top){this.__nm=this.__nw-location.top;
}else if(this.__nw>location.bottom){this.__nm=this.__nw-location.bottom;
}else{this.__nm=0;
}if(!this.__nn){this.__nn=new qx.event.Timer(100);
this.__nn.addListener(L,this._onInterval,this);
}this.__nn.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var o=e.getData();

if(this.getMode()===C&&this.isSelectionEmpty()){this.addItem(o);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__nu){return;
}if(this.__nz){this._fireChange(V);
}delete this.__nu;
delete this.__np;
delete this.__nq;
this._releaseCapture();
if(this.__nn){this.__nn.stop();
}},_onInterval:function(e){this._scrollBy(this.__nl,this.__nm);
this.__no=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cE=this._getDimension();
var cx=Math.max(0,Math.min(this.__nv-this.__nr.left,cE.width))+this.__no.left;
var cw=Math.max(0,Math.min(this.__nw-this.__nr.top,cE.height))+this.__no.top;
if(this.__np===cx&&this.__nq===cw){return;
}this.__np=cx;
this.__nq=cw;
var cG=this._getAnchorItem();
var cz=cG;
var cC=this.__nx;
var cF,cy;

while(cC!==0){cF=cC>0?this._getRelatedSelectable(cz,W):this._getRelatedSelectable(cz,J);
if(cF!==null){cy=this._getSelectableLocationX(cF);
if((cC>0&&cy.left<=cx)||(cC<0&&cy.right>=cx)){cz=cF;
continue;
}}break;
}var cD=this.__ny;
var cB,cA;

while(cD!==0){cB=cD>0?this._getRelatedSelectable(cz,w):this._getRelatedSelectable(cz,U);
if(cB!==null){cA=this._getSelectableLocationY(cB);
if((cD>0&&cA.top<=cw)||(cD<0&&cA.bottom>=cw)){cz=cB;
continue;
}}break;
}var cH=this.getMode();

if(cH===y){this._selectItemRange(cG,cz);
}else if(cH===z){if(this.isItemSelected(cG)){this._selectItemRange(cG,cz,true);
}else{this._deselectItemRange(cG,cz);
}this._setAnchorItem(cz);
}this._fireChange(I);
},__nE:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bK,bJ;
var bM=event.getKeyIdentifier();
var bL=this.getMode();
var bG=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bH=event.isShiftPressed();
var bI=false;

if(bM===G&&bG){if(bL!==B&&bL!==C){this._selectAllItems();
bI=true;
}}else if(bM===K){if(bL!==B&&bL!==C){this._clearSelection();
bI=true;
}}else if(bM===F){var bF=this.getLeadItem();

if(bF&&!bH){if(bG||bL===z){this._toggleInSelection(bF);
}else{this._setSelectedItem(bF);
}bI=true;
}}else if(this.__nE[bM]){bI=true;

if(bL===B||bL==C){bK=this._getSelectedItem();
}else{bK=this.getLeadItem();
}
if(bK!==null){switch(bM){case Y:bJ=this._getFirstSelectable();
break;
case ba:bJ=this._getLastSelectable();
break;
case be:bJ=this._getRelatedSelectable(bK,U);
break;
case t:bJ=this._getRelatedSelectable(bK,w);
break;
case v:bJ=this._getRelatedSelectable(bK,J);
break;
case X:bJ=this._getRelatedSelectable(bK,W);
break;
case x:bJ=this._getPage(bK,true);
break;
case bc:bJ=this._getPage(bK,false);
break;
}}else{switch(bM){case Y:case t:case X:case bc:bJ=this._getFirstSelectable();
break;
case ba:case be:case v:case x:bJ=this._getLastSelectable();
break;
}}if(bJ!==null){switch(bL){case B:case C:this._setSelectedItem(bJ);
break;
case z:this._setLeadItem(bJ);
break;
case y:if(bH){var bN=this._getAnchorItem();

if(bN===null){this._setAnchorItem(bN=this._getFirstSelectable());
}this._setLeadItem(bJ);
this._selectItemRange(bN,bJ,bG);
}else{this._setAnchorItem(bJ);
this._setLeadItem(bJ);

if(!bG){this._setSelectedItem(bJ);
}}break;
}this._scrollItemIntoView(bJ);
}}
if(bI){event.stop();
this._fireChange(Q);
}},_selectAllItems:function(){var bE=this.getSelectables();

for(var i=0,l=bE.length;i<l;i++){this._addToSelection(bE[i]);
}},_clearSelection:function(){var cW=this.__nk;

for(var cX in cW){this._removeFromSelection(cW[cX]);
}this.__nk={};
},_selectItemRange:function(bf,bg,bh){var bk=this._getSelectableRange(bf,bg);
if(!bh){var bj=this.__nk;
var bl=this.__nF(bk);

for(var bi in bj){if(!bl[bi]){this._removeFromSelection(bj[bi]);
}}}for(var i=0,l=bk.length;i<l;i++){this._addToSelection(bk[i]);
}},_deselectItemRange:function(cj,ck){var cl=this._getSelectableRange(cj,ck);

for(var i=0,l=cl.length;i<l;i++){this._removeFromSelection(cl[i]);
}},__nF:function(bm){var bo={};
var bn;

for(var i=0,l=bm.length;i<l;i++){bn=bm[i];
bo[this._selectableToHashCode(bn)]=bn;
}return bo;
},_getSelectedItem:function(){for(var c in this.__nk){return this.__nk[c];
}return null;
},_setSelectedItem:function(cm){if(this._isSelectable(cm)){var cn=this.__nk;
var co=this._selectableToHashCode(cm);

if(!cn[co]||qx.lang.Object.hasMinLength(cn,2)){this._clearSelection();
this._addToSelection(cm);
}}},_addToSelection:function(cf){var cg=this._selectableToHashCode(cf);

if(!this.__nk[cg]&&this._isSelectable(cf)){this.__nk[cg]=cf;
this._styleSelectable(cf,A,true);
this.__nz=true;
}},_toggleInSelection:function(cb){var cc=this._selectableToHashCode(cb);

if(!this.__nk[cc]){this.__nk[cc]=cb;
this._styleSelectable(cb,A,true);
}else{delete this.__nk[cc];
this._styleSelectable(cb,A,false);
}this.__nz=true;
},_removeFromSelection:function(cq){var cr=this._selectableToHashCode(cq);

if(this.__nk[cr]!=null){delete this.__nk[cr];
this._styleSelectable(cq,A,false);
this.__nz=true;
}},_replaceMultiSelection:function(bQ){var bT=false;
var bW,bV;
var bR={};

for(var i=0,l=bQ.length;i<l;i++){bW=bQ[i];

if(this._isSelectable(bW)){bV=this._selectableToHashCode(bW);
bR[bV]=bW;
}}var bX=bQ[0];
var bS=bW;
var bU=this.__nk;

for(var bV in bU){if(bR[bV]){delete bR[bV];
}else{bW=bU[bV];
delete bU[bV];
this._styleSelectable(bW,A,false);
bT=true;
}}for(var bV in bR){bW=bU[bV]=bR[bV];
this._styleSelectable(bW,A,true);
bT=true;
}if(!bT){return false;
}this._scrollItemIntoView(bS);
this._setLeadItem(bX);
this._setAnchorItem(bX);
this.__nz=true;
this._fireChange();
},_fireChange:function(n){if(this.__nz){this.__nA=n||null;
this.fireDataEvent(M,this.getSelection());
delete this.__nz;
}}},destruct:function(){this._disposeObjects(H);
this.__nk=this.__nD=this.__nC=null;
this.__nB=null;
}});
})();
(function(){var g="vertical",f="under",e="above",d="qx.ui.core.selection.Widget",c="left",b="right";
qx.Class.define(d,{extend:qx.ui.core.selection.Abstract,construct:function(w){qx.ui.core.selection.Abstract.call(this);
this.__mb=w;
},members:{__mb:null,_isSelectable:function(h){return h.isEnabled()&&h.isVisible()&&h.getLayoutParent()===this.__mb;
},_selectableToHashCode:function(F){return F.$$hash;
},_styleSelectable:function(x,y,z){z?x.addState(y):x.removeState(y);
},_capture:function(){this.__mb.capture();
},_releaseCapture:function(){this.__mb.releaseCapture();
},_getWidget:function(){return this.__mb;
},_getLocation:function(){var v=this.__mb.getContentElement().getDomElement();
return v?qx.bom.element.Location.get(v):null;
},_getDimension:function(){return this.__mb.getInnerSize();
},_getSelectableLocationX:function(m){var n=m.getBounds();

if(n){return {left:n.left,right:n.left+n.width};
}},_getSelectableLocationY:function(j){var k=j.getBounds();

if(k){return {top:k.top,bottom:k.top+k.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(C){this.__mb.scrollChildIntoView(C);
},getSelectables:function(){var N=this.__mb.getChildren();
var O=[];
var M;

for(var i=0,l=N.length;i<l;i++){M=N[i];

if(M.isEnabled()&&M.isVisible()){O.push(M);
}}return O;
},_getSelectableRange:function(G,H){if(G===H){return [G];
}var L=this.__mb.getChildren();
var I=[];
var K=false;
var J;

for(var i=0,l=L.length;i<l;i++){J=L[i];

if(J===G||J===H){if(K){I.push(J);
break;
}else{K=true;
}}
if(K&&J.isEnabled()&&J.isVisible()){I.push(J);
}}return I;
},_getFirstSelectable:function(){var a=this.__mb.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var u=this.__mb.getChildren();

for(var i=u.length-1;i>0;i--){if(u[i].isEnabled()&&u[i].isVisible()){return u[i];
}}return null;
},_getRelatedSelectable:function(o,p){var s=this.__mb.getOrientation()===g;
var r=this.__mb.getChildren();
var q=r.indexOf(o);
var t;

if((s&&p===e)||(!s&&p===c)){for(var i=q-1;i>=0;i--){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}else if((s&&p===f)||(!s&&p===b)){for(var i=q+1;i<r.length;i++){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}return null;
},_getPage:function(D,E){if(E){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__mb=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(a){return (a.isEnabled()&&a.isVisible()&&a.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var s=this._getWidget();
return {left:s.getScrollX(),top:s.getScrollY()};
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
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(f){var g=f.getBounds();

if(g){var top=this._getWidget().getItemTop(f);
return {top:top,bottom:top+g.height};
}},_isSelectable:function(h){return h instanceof qx.ui.tree.AbstractTreeItem&&h.isEnabled()&&h.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var k=this._getWidget();
var l=[];

if(k.getRoot()!=null){var j=k.getRoot().getItems(true,false,k.getHideRoot());

for(var i=0;i<j.length;i++){if(this._isSelectable(j[i])){l.push(j[i]);
}}}return l;
},_getSelectableRange:function(n,o){if(n===o){return [n];
}var p=this.getSelectables();
var q=p.indexOf(n);
var r=p.indexOf(o);

if(q<0||r<0){return [];
}
if(q<r){return p.slice(q,r+1);
}else{return p.slice(r,q+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var m=this.getSelectables();

if(m.length>0){return m[m.length-1];
}else{return null;
}},_getRelatedSelectable:function(s,t){var u=this._getWidget();
var v=null;

switch(t){case d:v=u.getPreviousNodeOf(s,false);
break;
case b:v=u.getNextNodeOf(s,false);
break;
case c:case e:break;
}
if(!v){return null;
}
if(this._isSelectable(v)){return v;
}else{return this._getRelatedSelectable(v,t);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="qx.event.type.Data",f="visible",d="The invisible and stayInSameNestLevel parameters are deprecated: Use",c="undefined",b="_applyOpenMode",a="Space",D="Left",C="changeOpenMode",B="_applyRootOpenClose",A="changeSelection",z="qx.ui.tree.Tree",y="tree",x=" getPreviousNodeOf() instead.",w="_applyHideRoot",v="changeRoot",u="_applyRoot",s=" getNextNodeOf() instead.",t="qx.ui.tree.AbstractTreeItem",q="Enter",r="keypress",o="none",p="__qC",m="pane",n="Right";
qx.Class.define(z,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__qC=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(m).add(this.__qC);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(A,this._onChangeSelection,this);
this.addListener(r,this._onKeyPress,this);
},events:{addItem:g,removeItem:g},properties:{openMode:{check:[k,l,o],init:l,apply:b,event:C,themeable:true},root:{check:t,init:null,nullable:true,event:v,apply:u},hideRoot:{check:j,init:false,apply:w},rootOpenClose:{check:j,init:false,apply:B},appearance:{refine:true,init:y},focusable:{refine:true,init:true}},members:{__qC:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__qC;
},_applyRoot:function(bl,bm){var bn=this.getChildrenContainer();

if(bm){bn.remove(bm);

if(bm.hasChildren()){bn.remove(bm.getChildrenContainer());
}}
if(bl){bn.add(bl);

if(bl.hasChildren()){bn.add(bl.getChildrenContainer());
}bl.setVisibility(this.getHideRoot()?h:f);
bl.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(Y,ba){var bb=this.getRoot();

if(!bb){return;
}bb.setVisibility(Y?h:f);
bb.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(bi,bj){var bk=this.getRoot();

if(!bk){return;
}bk.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__qC;
},getNextNodeOf:function(bc,bd){if((bd!==false||bc.isOpen())&&bc.hasChildren()){return bc.getChildren()[0];
}
while(bc){var parent=bc.getParent();

if(!parent){return null;
}var bf=parent.getChildren();
var be=bf.indexOf(bc);

if(be>-1&&be<bf.length-1){return bf[be+1];
}bc=parent;
}return null;
},getPreviousNodeOf:function(E,F){var parent=E.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==E){return null;
}}}else{if(E==this.getRoot()){return null;
}}var I=parent.getChildren();
var G=I.indexOf(E);

if(G>0){var H=I[G-1];

while((F!==false||H.isOpen())&&H.hasChildren()){var J=H.getChildren();
H=J[J.length-1];
}return H;
}else{return parent;
}},getNextSiblingOf:function(R,S,T){if(typeof (S)!==c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d+s);

if(!T){return this.getNextNodeOf(R,S);
}}
if(R==this.getRoot()){return null;
}var parent=R.getParent();
var U=parent.getChildren();
var V=U.indexOf(R);

if(V<U.length-1){return U[V+1];
}return null;
},getPreviousSiblingOf:function(K,L,M){if(typeof (L)!==c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d+x);

if(!M){return this.getPreviousNodeOf(K,L);
}}
if(K==this.getRoot()){return null;
}var parent=K.getParent();
var N=parent.getChildren();
var O=N.indexOf(K);

if(O>0){return N[O-1];
}return null;
},getItems:function(P,Q){if(this.getRoot()!=null){return this.getRoot().getItems(P,Q,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(bg){while(bg){if(bg==this){return null;
}
if(bg instanceof qx.ui.tree.AbstractTreeItem){return bg;
}bg=bg.getLayoutParent();
}return null;
},_applyOpenMode:function(W,X){if(X==k){this.removeListener(k,this._onOpen,this);
}else if(X==l){this.removeListener(l,this._onOpen,this);
}
if(W==k){this.addListener(k,this._onOpen,this);
}else if(W==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var bh=this.getTreeItem(e.getTarget());

if(!bh||!bh.isOpenable()){return;
}bh.setOpen(!bh.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bq=e.getData();
for(var i=0;i<bq.length;i++){var bp=bq[i];
while(bp.getParent()!=null){bp=bp.getParent();
bp.setOpen(true);
}}},_onKeyPress:function(e){var bo=this._getLeadItem();

if(bo!==null){switch(e.getKeyIdentifier()){case D:if(bo.isOpenable()&&bo.isOpen()){bo.setOpen(false);
}break;
case n:if(bo.isOpenable()&&!bo.isOpen()){bo.setOpen(true);
}break;
case q:case a:if(bo.isOpenable()){bo.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(p);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="__oH",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",p="mouseup",q="Number",n="_applyPosition",o="scrollbar",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(Q){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(Q!=null){this.setOrientation(Q);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[l,i],init:l,apply:v},maximum:{check:s,apply:w,init:100},position:{check:q,init:0,apply:n,event:j},singleStep:{check:y,init:20},knobFactor:{check:A,nullable:true}},members:{__oG:null,__oH:null,_getScrollPaneElement:function(){if(!this.__oH){this.__oH=new qx.html.Element();
}return this.__oH;
},renderLayout:function(B,top,C,D){var E=qx.ui.core.Widget.prototype.renderLayout.call(this,B,top,C,D);
this._updateScrollBar();
return E;
},_getContentHint:function(){var N=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__oG?100:N,maxWidth:this.__oG?null:N,minWidth:this.__oG?null:N,height:this.__oG?N:100,maxHeight:this.__oG?N:null,minHeight:this.__oG?N:null};
},_applyEnabled:function(O,P){qx.ui.core.Widget.prototype._applyEnabled.call(this,O,P);
this._updateScrollBar();
},_applyMaximum:function(S){this._updateScrollBar();
},_applyPosition:function(R){var content=this.getContentElement();

if(this.__oG){content.scrollToX(R);
}else{content.scrollToY(R);
}},_applyOrientation:function(T,U){var V=this.__oG=T===l;
this.set({allowGrowX:V,allowShrinkX:V,allowGrowY:!V,allowShrinkY:!V});

if(V){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:V?j:d,overflowY:V?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var I=this.__oG;
var J=this.getBounds();

if(!J){return;
}
if(this.isEnabled()){var K=I?J.width:J.height;
var H=this.getMaximum()+K;
}else{H=0;
}if(qx.core.Variant.isSet(g,r)){var J=this.getBounds();
this.getContentElement().setStyles({left:I?f:h,top:I?h:f,width:(I?J.width:J.width+1)+k,height:(I?J.height+1:J.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(I?H:1)+k,height:(I?1:H)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(W){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));
},scrollBy:function(a){this.scrollTo(this.getPosition()+a);
},scrollBySteps:function(F){var G=this.getSingleStep();
this.scrollBy(F*G);
},_onScroll:function(e){var M=this.getContentElement();
var L=this.__oG?M.getScrollX():M.getScrollY();
this.setPosition(L);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(z);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(O){qx.ui.core.Widget.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__mi:2,_createChildControlImpl:function(Q){var R;

switch(Q){case l:R=new qx.ui.core.scroll.ScrollSlider();
R.setPageStep(100);
R.setFocusable(false);
R.addListener(y,this._onChangeSliderValue,this);
this._add(R,{flex:1});
break;
case j:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(f,this._onExecuteBegin,this);
this._add(R);
break;
case h:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(f,this._onExecuteEnd,this);
this._add(R);
break;
}return R||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,Q);
},_applyMaximum:function(a){this.getChildControl(l).setMaximum(a);
},_applyPosition:function(G){this.getChildControl(l).setValue(G);
},_applyKnobFactor:function(P){this.getChildControl(l).setKnobFactor(P);
},_applyPageStep:function(E){this.getChildControl(l).setPageStep(E);
},_applyOrientation:function(B,C){var D=this._getLayout();

if(D){D.dispose();
}if(B===k){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(l).setOrientation(B);
},scrollTo:function(F){this.getChildControl(l).slideTo(F);
},scrollBy:function(H){this.getChildControl(l).slideBy(H);
},scrollBySteps:function(M){var N=this.getSingleStep();
this.getChildControl(l).slideBy(M*N);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var I=this.getChildControl(l).getChildControl(v);
var L=I.getSizeHint();
var J=false;
var K=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(K.height<L.minHeight+this.__mi){J=true;
}}else{if(K.width<L.minWidth+this.__mi){J=true;
}}
if(J){I.exclude();
}else{I.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IRange";
qx.Interface.define(b,{members:{setMinimum:function(a){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(e){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(c){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var p="knob",o="horizontal",n="vertical",m="Integer",l="hovered",k="left",j="top",i="mouseup",h="pressed",g="px",ba="mousemove",Y="resize",X="slider",W="mousedown",V="PageUp",U="mouseout",T="changeValue",S="Left",R="Down",Q="Up",w="dblclick",x="qx.ui.form.Slider",u="PageDown",v="mousewheel",s="interval",t="_applyValue",q="_applyKnobFactor",r="End",y="height",z="Right",G="width",E="_applyOrientation",K="Home",I="mouseover",M="floor",L="_applyMinimum",B="click",P="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",O="keypress",N="ceil",A="losecapture",C="contextmenu",D="_applyMaximum",F="Number",H="changeMaximum",J="changeMinimum";
qx.Class.define(x,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(cd){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(O,this._onKeyPress);
this.addListener(v,this._onMouseWheel);
this.addListener(W,this._onMouseDown);
this.addListener(i,this._onMouseUp);
this.addListener(A,this._onMouseUp);
this.addListener(Y,this._onUpdate);
this.addListener(C,this._onStopEvent);
this.addListener(B,this._onStopEvent);
this.addListener(w,this._onStopEvent);
if(cd!=null){this.setOrientation(cd);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:X},focusable:{refine:true,init:true},orientation:{check:[o,n],init:o,apply:E},value:{check:P,init:0,apply:t,event:T,nullable:true},minimum:{check:m,init:0,apply:L,event:J},maximum:{check:m,init:100,apply:D,event:H},singleStep:{check:m,init:1},pageStep:{check:m,init:10},knobFactor:{check:F,apply:q,nullable:true}},members:{__mH:null,__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bL){var bM;

switch(bL){case p:bM=new qx.ui.core.Widget();
bM.addListener(Y,this._onUpdate,this);
bM.addListener(I,this._onMouseOver);
bM.addListener(U,this._onMouseOut);
this._add(bM);
break;
}return bM||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bL);
},_onMouseOver:function(e){this.addState(l);
},_onMouseOut:function(e){this.removeState(l);
},_onMouseWheel:function(e){var bK=e.getWheelDelta()>0?1:-1;
this.slideBy(bK*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var f=this.getOrientation()===o;
var d=f?S:Q;
var forward=f?z:R;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case d:this.slideBack();
break;
case u:this.slidePageForward();
break;
case V:this.slidePageBack();
break;
case K:this.slideToBegin();
break;
case r:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__mK){return;
}var bg=this.__mR;
var be=this.getChildControl(p);
var bf=bg?k:j;
var bi=bg?e.getDocumentLeft():e.getDocumentTop();
var bj=this.__mH=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bf];
var bh=this.__mI=qx.bom.element.Location.get(be.getContainerElement().getDomElement())[bf];

if(e.getTarget()===be){this.__mK=true;
this.__mL=bi+bj-bh;
be.addState(h);
}else{this.__mM=true;
this.__mN=bi<=bh?-1:1;
this.__mS(e);
this._onInterval();
if(!this.__mP){this.__mP=new qx.event.Timer(100);
this.__mP.addListener(s,this._onInterval,this);
}this.__mP.start();
}this.addListener(ba,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__mK){this.releaseCapture();
delete this.__mK;
delete this.__mL;
this.getChildControl(p).removeState(h);
if(e.getType()===i){var b;
var c;
var a;

if(this.__mR){b=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__mH);
a=qx.bom.element.Location.get(this.getContentElement().getDomElement())[j];
c=e.getDocumentTop()-(a+this.getChildControl(p).getBounds().top);
}else{b=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__mH);
a=qx.bom.element.Location.get(this.getContentElement().getDomElement())[k];
c=e.getDocumentLeft()-(a+this.getChildControl(p).getBounds().left);
}
if(c<0||c>this.__mJ||b<0||b>this.__mJ){this.getChildControl(p).removeState(l);
}}}else if(this.__mM){this.__mP.stop();
this.releaseCapture();
delete this.__mM;
delete this.__mN;
delete this.__mO;
}this.removeListener(ba,this._onMouseMove);
if(e.getType()===i){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__mK){var bQ=this.__mR?e.getDocumentLeft():e.getDocumentTop();
var bP=bQ-this.__mL;
this.slideTo(this._positionToValue(bP));
}else if(this.__mM){this.__mS(e);
}e.stopPropagation();
},_onInterval:function(e){var bR=this.getValue()+(this.__mN*this.getPageStep());
if(bR<this.getMinimum()){bR=this.getMinimum();
}else if(bR>this.getMaximum()){bR=this.getMaximum();
}var bS=this.__mN==-1;

if((bS&&bR<=this.__mO)||(!bS&&bR>=this.__mO)){bR=this.__mO;
}this.slideTo(bR);
},_onUpdate:function(e){var bn=this.getInnerSize();
var bo=this.getChildControl(p).getBounds();
var bm=this.__mR?G:y;
this._updateKnobSize();
this.__mQ=bn[bm]-bo[bm];
this.__mJ=bo[bm];
this._updateKnobPosition();
},__mR:false,__mQ:0,__mS:function(e){var by=this.__mR;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__mH;
var bz=this.__mI;
var bJ=this.__mJ;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__mN<0?M:N;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__mO==null||(this.__mN==-1&&bD<=this.__mO)||(this.__mN==1&&bD>=this.__mO)){this.__mO=bD;
}},_positionToValue:function(bY){var ca=this.__mQ;
if(ca==null||ca==0){return 0;
}var cc=bY/ca;

if(cc<0){cc=0;
}else if(cc>1){cc=1;
}var cb=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(cb*cc);
},_valueToPosition:function(bq){var br=this.__mQ;

if(br==null){return 0;
}var bs=this.getMaximum()-this.getMinimum();
if(bs==0){return 0;
}var bq=bq-this.getMinimum();
var bt=bq/bs;

if(bt<0){bt=0;
}else if(bt>1){bt=1;
}return Math.round(br*bt);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bN){var bO=this.getChildControl(p).getContainerElement();

if(this.__mR){bO.setStyle(k,bN+g,true);
}else{bO.setStyle(j,bN+g,true);
}},_updateKnobSize:function(){var bc=this.getKnobFactor();

if(bc==null){return;
}var bb=this.getInnerSize();

if(bb==null){return;
}if(this.__mR){this.getChildControl(p).setWidth(Math.round(bc*bb.width));
}else{this.getChildControl(p).setHeight(Math.round(bc*bb.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bp){this.slideTo(this.getValue()+bp);
},slideTo:function(bd){if(bd<this.getMinimum()){bd=this.getMinimum();
}else if(bd>this.getMaximum()){bd=this.getMaximum();
}else{bd=this.getMinimum()+Math.round((bd-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bd);
},_applyOrientation:function(bV,bW){var bX=this.getChildControl(p);
this.__mR=bV===o;
if(this.__mR){this.removeState(n);
bX.removeState(n);
this.addState(o);
bX.addState(o);
bX.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(o);
bX.removeState(o);
this.addState(n);
bX.addState(n);
bX.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bT,bU){if(bT!=null){this._updateKnobSize();
}else{if(this.__mR){this.getChildControl(p).resetWidth();
}else{this.getChildControl(p).resetHeight();
}}},_applyValue:function(bu,bv){if(bu!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bw,bx){if(this.getValue()<bw){this.setValue(bw);
}this._updateKnobPosition();
},_applyMaximum:function(bk,bl){if(this.getValue()>bk){this.setValue(bk);
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
(function(){var dz="top",dy="left",dx="qx.debug",dw="bottom",dv="hAlign",du="vAlign",dt="Integer",ds="_applyLayoutChange",dr="center",dq="middle",dO="right",dN="flex",dM="on",dL="height",dK="' is not supported by the Grid layout!",dJ="Invalid parameter 'column'",dI="The property '",dH="Value must be positive",dG="qx.ui.layout.Grid",dF="maxHeight",dD="width",dE="minHeight",dB="minWidth",dC="maxWidth",dA="Invalid parameter 'row'";
qx.Class.define(dG,{extend:qx.ui.layout.Abstract,construct:function(cv,cw){qx.ui.layout.Abstract.call(this);
this.__hf=[];
this.__hg=[];

if(cv){this.setSpacingX(cv);
}
if(cw){this.setSpacingY(cw);
}},properties:{spacingX:{check:dt,init:0,apply:ds},spacingY:{check:dt,init:0,apply:ds}},members:{__hh:null,__hf:null,__hg:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,verifyLayoutProperty:qx.core.Variant.select(dx,{"on":function(H,name,I){var J={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(J[name]==1,dI+name+dK);
this.assertInteger(I);
this.assert(I>=0,dH);
},"off":null}),__ho:function(){var C=[];
var B=[];
var D=[];
var z=-1;
var w=-1;
var F=this._getLayoutChildren();

for(var i=0,l=F.length;i<l;i++){var A=F[i];
var E=A.getLayoutProperties();
var G=E.row;
var v=E.column;
E.colSpan=E.colSpan||1;
E.rowSpan=E.rowSpan||1;
if(G==null||v==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+A+"' must be defined!");
}
if(C[G]&&C[G][v]){throw new Error("Cannot add widget '"+A+"'!. "+"There is already a widget '"+C[G][v]+"' in this cell ("+G+", "+v+")");
}
for(var x=v;x<v+E.colSpan;x++){for(var y=G;y<G+E.rowSpan;y++){if(C[y]==undefined){C[y]=[];
}C[y][x]=A;
w=Math.max(w,x);
z=Math.max(z,y);
}}
if(E.rowSpan>1){D.push(A);
}
if(E.colSpan>1){B.push(A);
}}for(var y=0;y<=z;y++){if(C[y]==undefined){C[y]=[];
}}this.__hh=C;
this.__hi=B;
this.__hj=D;
this.__hk=z;
this.__hl=w;
this.__hm=null;
this.__hn=null;
delete this._invalidChildrenCache;
},_setRowData:function(bT,bU,bV){var bW=this.__hf[bT];

if(!bW){this.__hf[bT]={};
this.__hf[bT][bU]=bV;
}else{bW[bU]=bV;
}},_setColumnData:function(bE,bF,bG){var bH=this.__hg[bE];

if(!bH){this.__hg[bE]={};
this.__hg[bE][bF]=bG;
}else{bH[bF]=bG;
}},setSpacing:function(bD){this.setSpacingY(bD);
this.setSpacingX(bD);
return this;
},setColumnAlign:function(cj,ck,cl){if(qx.core.Variant.isSet(dx,dM)){this.assertInteger(cj,dJ);
this.assertInArray(ck,[dy,dr,dO]);
this.assertInArray(cl,[dz,dq,dw]);
}this._setColumnData(cj,dv,ck);
this._setColumnData(cj,du,cl);
this._applyLayoutChange();
return this;
},getColumnAlign:function(dn){var dp=this.__hg[dn]||{};
return {vAlign:dp.vAlign||dz,hAlign:dp.hAlign||dy};
},setRowAlign:function(dd,de,df){if(qx.core.Variant.isSet(dx,dM)){this.assertInteger(dd,dA);
this.assertInArray(de,[dy,dr,dO]);
this.assertInArray(df,[dz,dq,dw]);
}this._setRowData(dd,dv,de);
this._setRowData(dd,du,df);
this._applyLayoutChange();
return this;
},getRowAlign:function(en){var eo=this.__hf[en]||{};
return {vAlign:eo.vAlign||dz,hAlign:eo.hAlign||dy};
},getCellWidget:function(bz,bA){if(this._invalidChildrenCache){this.__ho();
}var bz=this.__hh[bz]||{};
return bz[bA]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hk+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hl+1;
},getCellAlign:function(ed,ee){var ek=dz;
var ei=dy;
var ej=this.__hf[ed];
var eg=this.__hg[ee];
var ef=this.__hh[ed][ee];

if(ef){var eh={vAlign:ef.getAlignY(),hAlign:ef.getAlignX()};
}else{eh={};
}if(eh.vAlign){ek=eh.vAlign;
}else if(ej&&ej.vAlign){ek=ej.vAlign;
}else if(eg&&eg.vAlign){ek=eg.vAlign;
}if(eh.hAlign){ei=eh.hAlign;
}else if(eg&&eg.hAlign){ei=eg.hAlign;
}else if(ej&&ej.hAlign){ei=ej.hAlign;
}return {vAlign:ek,hAlign:ei};
},setColumnFlex:function(bB,bC){this._setColumnData(bB,dN,bC);
this._applyLayoutChange();
return this;
},getColumnFlex:function(cf){var cg=this.__hg[cf]||{};
return cg.flex!==undefined?cg.flex:0;
},setRowFlex:function(t,u){this._setRowData(t,dN,u);
this._applyLayoutChange();
return this;
},getRowFlex:function(cc){var cd=this.__hf[cc]||{};
var ce=cd.flex!==undefined?cd.flex:0;
return ce;
},setColumnMaxWidth:function(cm,cn){this._setColumnData(cm,dC,cn);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(O){var P=this.__hg[O]||{};
return P.maxWidth!==undefined?P.maxWidth:Infinity;
},setColumnWidth:function(V,W){this._setColumnData(V,dD,W);
this._applyLayoutChange();
return this;
},getColumnWidth:function(K){var L=this.__hg[K]||{};
return L.width!==undefined?L.width:null;
},setColumnMinWidth:function(bm,bn){this._setColumnData(bm,dB,bn);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(ch){var ci=this.__hg[ch]||{};
return ci.minWidth||0;
},setRowMaxHeight:function(M,N){this._setRowData(M,dF,N);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(eb){var ec=this.__hf[eb]||{};
return ec.maxHeight||Infinity;
},setRowHeight:function(el,em){this._setRowData(el,dL,em);
this._applyLayoutChange();
return this;
},getRowHeight:function(ca){var cb=this.__hf[ca]||{};
return cb.height!==undefined?cb.height:null;
},setRowMinHeight:function(bX,bY){this._setRowData(bX,dE,bY);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(r){var s=this.__hf[r]||{};
return s.minHeight||0;
},__hp:function(Q){var U=Q.getSizeHint();
var T=Q.getMarginLeft()+Q.getMarginRight();
var S=Q.getMarginTop()+Q.getMarginBottom();
var R={height:U.height+S,width:U.width+T,minHeight:U.minHeight+S,minWidth:U.minWidth+T,maxHeight:U.maxHeight+S,maxWidth:U.maxWidth+T};
return R;
},_fixHeightsRowSpan:function(X){var bj=this.getSpacingY();

for(var i=0,l=this.__hj.length;i<l;i++){var bb=this.__hj[i];
var bd=this.__hp(bb);
var be=bb.getLayoutProperties();
var ba=be.row;
var bh=bj*(be.rowSpan-1);
var Y=bh;
var bg={};

for(var j=0;j<be.rowSpan;j++){var bl=be.row+j;
var bc=X[bl];
var bk=this.getRowFlex(bl);

if(bk>0){bg[bl]={min:bc.minHeight,value:bc.height,max:bc.maxHeight,flex:bk};
}bh+=bc.height;
Y+=bc.minHeight;
}if(bh<bd.height){var bi=qx.ui.layout.Util.computeFlexOffsets(bg,bd.height,bh);

for(var j=0;j<be.rowSpan;j++){var bf=bi[ba+j]?bi[ba+j].offset:0;
X[ba+j].height+=bf;
}}if(Y<bd.minHeight){var bi=qx.ui.layout.Util.computeFlexOffsets(bg,bd.minHeight,Y);

for(var j=0;j<be.rowSpan;j++){var bf=bi[ba+j]?bi[ba+j].offset:0;
X[ba+j].minHeight+=bf;
}}}},_fixWidthsColSpan:function(a){var e=this.getSpacingX();

for(var i=0,l=this.__hi.length;i<l;i++){var b=this.__hi[i];
var d=this.__hp(b);
var g=b.getLayoutProperties();
var c=g.column;
var p=e*(g.colSpan-1);
var f=p;
var h={};
var m;

for(var j=0;j<g.colSpan;j++){var q=g.column+j;
var o=a[q];
var n=this.getColumnFlex(q);
if(n>0){h[q]={min:o.minWidth,value:o.width,max:o.maxWidth,flex:n};
}p+=o.width;
f+=o.minWidth;
}if(p<d.width){var k=qx.ui.layout.Util.computeFlexOffsets(h,d.width,p);

for(var j=0;j<g.colSpan;j++){m=k[c+j]?k[c+j].offset:0;
a[c+j].width+=m;
}}if(f<d.minWidth){var k=qx.ui.layout.Util.computeFlexOffsets(h,d.minWidth,f);

for(var j=0;j<g.colSpan;j++){m=k[c+j]?k[c+j].offset:0;
a[c+j].minWidth+=m;
}}}},_getRowHeights:function(){if(this.__hm!=null){return this.__hm;
}var bx=[];
var bq=this.__hk;
var bp=this.__hl;

for(var by=0;by<=bq;by++){var br=0;
var bt=0;
var bs=0;

for(var bw=0;bw<=bp;bw++){var bo=this.__hh[by][bw];

if(!bo){continue;
}var bu=bo.getLayoutProperties().rowSpan||0;

if(bu>1){continue;
}var bv=this.__hp(bo);

if(this.getRowFlex(by)>0){br=Math.max(br,bv.minHeight);
}else{br=Math.max(br,bv.height);
}bt=Math.max(bt,bv.height);
}var br=Math.max(br,this.getRowMinHeight(by));
var bs=this.getRowMaxHeight(by);

if(this.getRowHeight(by)!==null){var bt=this.getRowHeight(by);
}else{var bt=Math.max(br,Math.min(bt,bs));
}bx[by]={minHeight:br,height:bt,maxHeight:bs};
}
if(this.__hj.length>0){this._fixHeightsRowSpan(bx);
}this.__hm=bx;
return bx;
},_getColWidths:function(){if(this.__hn!=null){return this.__hn;
}var bM=[];
var bJ=this.__hl;
var bL=this.__hk;

for(var bR=0;bR<=bJ;bR++){var bP=0;
var bO=0;
var bK=Infinity;

for(var bS=0;bS<=bL;bS++){var bI=this.__hh[bS][bR];

if(!bI){continue;
}var bN=bI.getLayoutProperties().colSpan||0;

if(bN>1){continue;
}var bQ=this.__hp(bI);

if(this.getColumnFlex(bR)>0){bO=Math.max(bO,bQ.minWidth);
}else{bO=Math.max(bO,bQ.width);
}bP=Math.max(bP,bQ.width);
}var bO=Math.max(bO,this.getColumnMinWidth(bR));
var bK=this.getColumnMaxWidth(bR);

if(this.getColumnWidth(bR)!==null){var bP=this.getColumnWidth(bR);
}else{var bP=Math.max(bO,Math.min(bP,bK));
}bM[bR]={minWidth:bO,width:bP,maxWidth:bK};
}
if(this.__hi.length>0){this._fixWidthsColSpan(bM);
}this.__hn=bM;
return bM;
},_getColumnFlexOffsets:function(dg){var dh=this.getSizeHint();
var dl=dg-dh.width;

if(dl==0){return {};
}var dj=this._getColWidths();
var di={};

for(var i=0,l=dj.length;i<l;i++){var dm=dj[i];
var dk=this.getColumnFlex(i);

if((dk<=0)||(dm.width==dm.maxWidth&&dl>0)||(dm.width==dm.minWidth&&dl<0)){continue;
}di[i]={min:dm.minWidth,value:dm.width,max:dm.maxWidth,flex:dk};
}return qx.ui.layout.Util.computeFlexOffsets(di,dg,dh.width);
},_getRowFlexOffsets:function(co){var cp=this.getSizeHint();
var cs=co-cp.height;

if(cs==0){return {};
}var ct=this._getRowHeights();
var cq={};

for(var i=0,l=ct.length;i<l;i++){var cu=ct[i];
var cr=this.getRowFlex(i);

if((cr<=0)||(cu.height==cu.maxHeight&&cs>0)||(cu.height==cu.minHeight&&cs<0)){continue;
}cq[i]={min:cu.minHeight,value:cu.height,max:cu.maxHeight,flex:cr};
}return qx.ui.layout.Util.computeFlexOffsets(cq,co,cp.height);
},renderLayout:function(cx,cy){if(this._invalidChildrenCache){this.__ho();
}var cM=qx.ui.layout.Util;
var cA=this.getSpacingX();
var cG=this.getSpacingY();
var cR=this._getColWidths();
var cQ=this._getColumnFlexOffsets(cx);
var cB=[];
var cT=this.__hl;
var cz=this.__hk;
var cS;

for(var cU=0;cU<=cT;cU++){cS=cQ[cU]?cQ[cU].offset:0;
cB[cU]=cR[cU].width+cS;
}var cJ=this._getRowHeights();
var cL=this._getRowFlexOffsets(cy);
var db=[];

for(var cH=0;cH<=cz;cH++){cS=cL[cH]?cL[cH].offset:0;
db[cH]=cJ[cH].height+cS;
}var dc=0;

for(var cU=0;cU<=cT;cU++){var top=0;

for(var cH=0;cH<=cz;cH++){var cO=this.__hh[cH][cU];
if(!cO){top+=db[cH]+cG;
continue;
}var cC=cO.getLayoutProperties();
if(cC.row!==cH||cC.column!==cU){top+=db[cH]+cG;
continue;
}var da=cA*(cC.colSpan-1);

for(var i=0;i<cC.colSpan;i++){da+=cB[cU+i];
}var cP=cG*(cC.rowSpan-1);

for(var i=0;i<cC.rowSpan;i++){cP+=db[cH+i];
}var cD=cO.getSizeHint();
var cX=cO.getMarginTop();
var cN=cO.getMarginLeft();
var cK=cO.getMarginBottom();
var cF=cO.getMarginRight();
var cI=Math.max(cD.minWidth,Math.min(da-cN-cF,cD.maxWidth));
var cY=Math.max(cD.minHeight,Math.min(cP-cX-cK,cD.maxHeight));
var cV=this.getCellAlign(cH,cU);
var cW=dc+cM.computeHorizontalAlignOffset(cV.hAlign,cI,da,cN,cF);
var cE=top+cM.computeVerticalAlignOffset(cV.vAlign,cY,cP,cX,cK);
cO.renderLayout(cW,cE,cI,cY);
top+=db[cH]+cG;
}dc+=cB[cU]+cA;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hn=null;
this.__hm=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ho();
}var dT=this._getColWidths();
var dV=0,dW=0;

for(var i=0,l=dT.length;i<l;i++){var dX=dT[i];

if(this.getColumnFlex(i)>0){dV+=dX.minWidth;
}else{dV+=dX.width;
}dW+=dX.width;
}var dY=this._getRowHeights();
var dR=0,dU=0;

for(var i=0,l=dY.length;i<l;i++){var ea=dY[i];

if(this.getRowFlex(i)>0){dR+=ea.minHeight;
}else{dR+=ea.height;
}dU+=ea.height;
}var dQ=this.getSpacingX()*(dT.length-1);
var dP=this.getSpacingY()*(dY.length-1);
var dS={minWidth:dV+dQ,width:dW+dQ,minHeight:dR+dP,height:dU+dP};
return dS;
}},destruct:function(){this.__hh=this.__hf=this.__hg=this.__hi=this.__hj=this.__hn=this.__hm=null;
}});
})();
(function(){var be="open",bd="auto",bc="qx.debug",bb="middle",ba="icon",Y="label",X="on",W="changeOpen",V="excluded",U="visible",bA="String",bz="opened",by="always",bx="qx.ui.tree.AbstractTreeItem",bw="addItem",bv="Boolean",bu="Invalid child index: ",bt="Integer",bs="_applyIndent",br="changeOpenSymbolMode",bl="_applyOpenSymbolMode",bm="__ol",bj="resize",bk="",bh="removeItem",bi="__op",bf="abstract",bg="never",bn="_applyIcon",bo="_applyOpen",bq="__om",bp="_applyLabel";
qx.Class.define(bx,{extend:qx.ui.core.Widget,type:bf,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__ol=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bv,init:false,event:W,apply:bo},openSymbolMode:{check:[by,bg,bd],init:bd,event:br,apply:bl},indent:{check:bt,init:19,apply:bs,themeable:true},parent:{check:bx,nullable:true},icon:{check:bA,apply:bn,nullable:true,themeable:true},label:{check:bA,apply:bp,init:bk}},members:{__ol:null,__om:null,__on:null,__oo:null,__op:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bW){var bX;

switch(bW){case Y:bX=new qx.ui.basic.Label().set({alignY:bb,value:this.getLabel()});
break;
case ba:bX=new qx.ui.basic.Image().set({alignY:bb,source:this.getIcon()});
break;
case be:bX=new qx.ui.tree.FolderOpenButton().set({alignY:bb});
bX.addListener(W,this._onChangeOpen,this);
bX.addListener(bj,this._updateIndent,this);
break;
}return bX||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bW);
},getTree:function(){var R=this;

while(R.getParent()){R=R.getParent();
}var Q=R.getLayoutParent()?R.getLayoutParent().getLayoutParent():0;

if(Q&&Q instanceof qx.ui.core.scroll.ScrollPane){return Q.getLayoutParent();
}return null;
},addWidget:function(J,K){this._add(J,K);
},addSpacer:function(){if(!this.__op){this.__op=new qx.ui.core.Spacer();
}else{this._remove(this.__op);
}this._add(this.__op);
},addOpenButton:function(){this._add(this.getChildControl(be));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bN=this.getChildControl(ba);

if(this.__oo){this._remove(bN);
}this._add(bN);
this.__oo=true;
},addLabel:function(B){var C=this.getChildControl(Y);

if(this.__on){this._remove(C);
}
if(B){this.setLabel(B);
}else{C.setValue(this.getLabel());
}this._add(C);
this.__on=true;
},addState:function(bO){qx.ui.core.Widget.prototype.addState.call(this,bO);
var bQ=this._getChildren();

for(var i=0,l=bQ.length;i<l;i++){var bP=bQ[i];

if(bP.addState){bQ[i].addState(bO);
}}},removeState:function(E){qx.ui.core.Widget.prototype.removeState.call(this,E);
var G=this._getChildren();

for(var i=0,l=G.length;i<l;i++){var F=G[i];

if(F.addState){G[i].removeState(E);
}}},_applyIcon:function(a,b){var c=this.getChildControl(ba,true);

if(c){c.setSource(a);
}},_applyLabel:function(d,f){var g=this.getChildControl(Y,true);

if(g){g.setValue(d);
}},_applyOpen:function(r,s){if(this.hasChildren()){this.getChildrenContainer().setVisibility(r?U:V);
}var open=this.getChildControl(be,true);

if(open){open.setOpen(r);
}r?this.addState(bz):this.removeState(bz);
},isOpenable:function(){var S=this.getOpenSymbolMode();
return (S===by||S===bd&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(be,true);

if(!open){return false;
}var D=this.getTree();

if(!D.getRootOpenClose()){if(D.getHideRoot()){if(D.getRoot()==this.getParent()){return false;
}}else{if(D.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(t,u){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var I=0;
var open=this.getChildControl(be,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var H=open.getBounds();

if(H){I=H.width;
}else{return;
}}else{open.exclude();
}}
if(this.__op){this.__op.setWidth((this.getLevel()+1)*this.getIndent()-I);
}},_applyIndent:function(bI,bJ){this._updateIndent();
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
},getChildrenContainer:function(){if(!this.__om){this.__om=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?U:V});
}return this.__om;
},hasChildrenContainer:function(){return this.__om;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ol;
},hasChildren:function(){return this.__ol?this.__ol.length>0:false;
},getItems:function(bB,bC,bD){if(bD!==false){var bE=[];
}else{var bE=[this];
}var bH=this.hasChildren()&&(bC!==false||this.isOpen());

if(bH){var bG=this.getChildren();

if(bB===false){bE=bE.concat(bG);
}else{for(var i=0,bF=bG.length;i<bF;i++){bE=bE.concat(bG[i].getItems(bB,bC,false));
}}}return bE;
},recursiveAddToWidgetQueue:function(){var T=this.getItems(true,true,false);

for(var i=0,l=T.length;i<l;i++){qx.ui.core.queue.Widget.add(T[i]);
}},__oq:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(h){var j=this.getChildrenContainer();
var n=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var o=arguments[i];
var m=o.getParent();

if(m){m.remove(o);
}o.setParent(this);
var k=this.hasChildren();
j.add(o);

if(o.hasChildren()){j.add(o.getChildrenContainer());
}this.__ol.push(o);

if(!k){this.__oq();
}
if(n){o.recursiveAddToWidgetQueue();
n.fireNonBubblingEvent(bw,qx.event.type.Data,[o]);
}}
if(n){qx.ui.core.queue.Widget.add(this);
}},addAt:function(v,w){if(qx.core.Variant.isSet(bc,X)){this.assert(w<=this.__ol.length&&w>=0,bu+w);
}
if(w==this.__ol.length){this.add(v);
return;
}var A=v.getParent();

if(A){A.remove(v);
}var y=this.getChildrenContainer();
v.setParent(this);
var z=this.hasChildren();
var x=this.__ol[w];
y.addBefore(v,x);

if(v.hasChildren()){y.addAfter(v.getChildrenContainer(),v);
}qx.lang.Array.insertAt(this.__ol,v,w);

if(!z){this.__oq();
}
if(this.getTree()){v.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(O,P){if(qx.core.Variant.isSet(bc,X)){this.assert(this.__ol.indexOf(P)>=0);
}this.addAt(O,this.__ol.indexOf(P));
},addAfter:function(bL,bM){if(qx.core.Variant.isSet(bc,X)){this.assert(this.__ol.indexOf(bM)>=0);
}this.addAt(bL,this.__ol.indexOf(bM)+1);
},addAtBegin:function(bK){this.addAt(bK,0);
},remove:function(bR){for(var i=0,l=arguments.length;i<l;i++){var bV=arguments[i];

if(this.__ol.indexOf(bV)==-1){this.warn("Cannot remove treeitem '"+bV+"'. It is not a child of this tree item.");
return;
}var bS=this.getChildrenContainer();

if(bV.hasChildrenContainer()){var bU=bV.getChildrenContainer();

if(bS.getChildren().indexOf(bU)>=0){bS.remove(bU);
}}qx.lang.Array.remove(this.__ol,bV);
bV.setParent(null);
bS.remove(bV);
}var bT=this.getTree();

if(bT){bT.fireNonBubblingEvent(bh,qx.event.type.Data,[bV]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(p){var q=this.__ol[p];

if(q){this.remove(q);
}},removeAll:function(){for(var i=this.__ol.length-1;i>=0;i--){this.remove(this.__ol[i]);
}}},destruct:function(){this._disposeArray(bm);
this._disposeObjects(bi,bq);
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
(function(){var N="qx.event.type.Event",M="Boolean",L="queued",K="String",J="sending",I="receiving",H="aborted",G="failed",F="nocache",E="completed",bv="qx.io.remote.Response",bu="POST",bt="configured",bs="timeout",br="GET",bq="Pragma",bp="no-url-params-on-post",bo="no-cache",bn="Cache-Control",bm="Content-Type",U="text/plain",V="application/xml",S="application/json",T="text/html",Q="qx.ioRemoteDebug",R="application/x-www-form-urlencoded",O="qx.io.remote.Exchange",P="Integer",W="X-Qooxdoo-Response-Type",X="HEAD",be="qx.io.remote.Request",bd="qx.debug",bg="_applyResponseType",bf="_applyState",bi="text/javascript",bh="changeState",ba="PUT",bl="_applyProhibitCaching",bk="",bj="_applyMethod",Y="DELETE",bb="boolean",bc="on";
qx.Class.define(be,{extend:qx.core.Object,construct:function(w,x,y){qx.core.Object.call(this);
this.__qw={};
this.__qx={};
this.__qy={};
this.__qz={};

if(w!==undefined){this.setUrl(w);
}
if(x!==undefined){this.setMethod(x);
}
if(y!==undefined){this.setResponseType(y);
}this.setProhibitCaching(true);
this.__qA=++qx.io.remote.Request.__qA;
},events:{"created":N,"configured":N,"sending":N,"receiving":N,"completed":bv,"aborted":N,"failed":bv,"timeout":bv},statics:{__qA:0},properties:{url:{check:K,init:bk},method:{check:[br,bu,ba,X,Y],apply:bj,init:br},asynchronous:{check:M,init:true},data:{check:K,nullable:true},username:{check:K,nullable:true},password:{check:K,nullable:true},state:{check:[bt,L,J,I,E,H,bs,G],init:bt,apply:bf,event:bh},responseType:{check:[U,bi,S,V,T],init:U,apply:bg},timeout:{check:P,nullable:true},prohibitCaching:{check:function(v){return typeof v==bb||v===bp;
},init:true,apply:bl},crossDomain:{check:M,init:false},fileUpload:{check:M,init:false},transport:{check:O,nullable:true},useBasicHttpAuth:{check:M,init:false}},members:{__qw:null,__qx:null,__qy:null,__qz:null,__qA:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case J:case I:this.error("Aborting already sent request!");
case L:this.abort();
break;
}},isConfigured:function(){return this.getState()===bt;
},isQueued:function(){return this.getState()===L;
},isSending:function(){return this.getState()===J;
},isReceiving:function(){return this.getState()===I;
},isCompleted:function(){return this.getState()===E;
},isAborted:function(){return this.getState()===H;
},isTimeout:function(){return this.getState()===bs;
},isFailed:function(){return this.getState()===G;
},__qB:function(e){var bw=e.clone();
bw.setTarget(this);
this.dispatchEvent(bw);
},_onqueued:function(e){this.setState(L);
this.__qB(e);
},_onsending:function(e){this.setState(J);
this.__qB(e);
},_onreceiving:function(e){this.setState(I);
this.__qB(e);
},_oncompleted:function(e){this.setState(E);
this.__qB(e);
this.dispose();
},_onaborted:function(e){this.setState(H);
this.__qB(e);
this.dispose();
},_ontimeout:function(e){this.setState(bs);
this.__qB(e);
this.dispose();
},_onfailed:function(e){this.setState(G);
this.__qB(e);
this.dispose();
},_applyState:function(n,o){if(qx.core.Variant.isSet(bd,bc)){if(qx.core.Setting.get(Q)){this.debug("State: "+n);
}}},_applyProhibitCaching:function(a,b){if(!a){this.removeParameter(F);
this.removeRequestHeader(bq);
this.removeRequestHeader(bn);
return;
}if(a!==bp||this.getMethod()!=bu){this.setParameter(F,new Date().valueOf());
}else{this.removeParameter(F);
}this.setRequestHeader(bq,bo);
this.setRequestHeader(bn,bo);
},_applyMethod:function(c,d){if(c===bu){this.setRequestHeader(bm,R);
}else{this.removeRequestHeader(bm);
}var f=this.getProhibitCaching();
this._applyProhibitCaching(f,f);
},_applyResponseType:function(p,q){this.setRequestHeader(W,p);
},setRequestHeader:function(z,A){this.__qw[z]=A;
},removeRequestHeader:function(m){delete this.__qw[m];
},getRequestHeader:function(C){return this.__qw[C]||null;
},getRequestHeaders:function(){return this.__qw;
},setParameter:function(s,t,u){if(u){this.__qy[s]=t;
}else{this.__qx[s]=t;
}},removeParameter:function(i,j){if(j){delete this.__qy[i];
}else{delete this.__qx[i];
}},getParameter:function(g,h){if(h){return this.__qy[g]||null;
}else{return this.__qx[g]||null;
}},getParameters:function(B){return (B?this.__qy:this.__qx);
},setFormField:function(k,l){this.__qz[k]=l;
},removeFormField:function(D){delete this.__qz[D];
},getFormField:function(r){return this.__qz[r]||null;
},getFormFields:function(){return this.__qz;
},getSequenceNumber:function(){return this.__qA;
}},destruct:function(){this.setTransport(null);
this.__qw=this.__qx=this.__qy=this.__qz=null;
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
(function(){var l="qx.ioRemoteDebug",k="Integer",j="qx.debug",h="on",g="aborted",f="_onaborted",d="_on",c="Boolean",b="singleton",a="qx.io.remote.RequestQueue",x="interval",w="receiving",v="Request-Queue Progress: ",u="queued",t="/",s="_applyEnabled",r="sending",q="completed",p="failed",o="__nJ",m="timeout",n="__nH";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nG=[];
this.__nH=[];
this.__nI=0;
this.__nJ=new qx.event.Timer(500);
this.__nJ.addListener(x,this._oninterval,this);
},properties:{enabled:{init:true,check:c,apply:s},maxTotalRequests:{check:k,nullable:true},maxConcurrentRequests:{check:k,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:k,init:5000}},members:{__nG:null,__nH:null,__nI:null,__nJ:null,getRequestQueue:function(){return this.__nG;
},getActiveQueue:function(){return this.__nH;
},_debug:function(){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){var y=this.__nH.length+t+(this.__nG.length+this.__nH.length);
this.debug("Progress: "+y);
window.status=v+y;
}}},_check:function(){this._debug();
if(this.__nH.length==0&&this.__nG.length==0){this.__nJ.stop();
}if(!this.getEnabled()){return;
}if(this.__nG.length==0||(this.__nG[0].isAsynchronous()&&this.__nH.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__nI>=this.getMaxTotalRequests()){return;
}var P=this.__nG.shift();
var Q=new qx.io.remote.Exchange(P);
this.__nI++;
this.__nH.push(Q);
this._debug();
Q.addListener(r,this._onsending,this);
Q.addListener(w,this._onreceiving,this);
Q.addListener(q,this._oncompleted,this);
Q.addListener(g,this._oncompleted,this);
Q.addListener(m,this._oncompleted,this);
Q.addListener(p,this._oncompleted,this);
Q._start=(new Date).valueOf();
Q.send();
if(this.__nG.length>0){this._check();
}},_remove:function(z){qx.lang.Array.remove(this.__nH,z);
z.dispose();
this._check();
},__nK:0,_onsending:function(e){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){this.__nK++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__nK);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(j,h)){if(qx.core.Setting.get(l)){if(e.getTarget()._counted){this.__nK--;
this.debug("ActiveCount: "+this.__nK);
}}}var M=e.getTarget().getRequest();
var L=d+e.getType();
try{if(M[L]){M[L](e);
}}catch(S){var K=qx.dev.StackTrace.getStackTraceFromError(S);
this.error("Request "+M+" handler "+L+" threw an error: "+S+"\nStack Trace:\n"+K);
try{if(M[f]){var event=qx.event.Registration.createEvent(g,qx.event.type.Event);
M[f](event);
}}catch(R){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var I=this.__nH;

if(I.length==0){this.__nJ.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(N,O){if(N){this._check();
}this.__nJ.setEnabled(N);
},add:function(J){J.setState(u);

if(J.isAsynchronous()){this.__nG.push(J);
}else{this.__nG.unshift(J);
}this._check();

if(this.getEnabled()){this.__nJ.start();
}},abort:function(A){var B=A.getTransport();

if(B){B.abort();
}else if(qx.lang.Array.contains(this.__nG,A)){qx.lang.Array.remove(this.__nG,A);
}}},destruct:function(){this._disposeArray(n);
this._disposeObjects(o);
this.__nG=null;
}});
})();
(function(){var o="qx.ioRemoteDebug",n="qx.debug",m="on",k="failed",j="sending",h="completed",g="receiving",f="aborted",d="timeout",c="qx.event.type.Event",bo="Connection dropped",bn="qx.io.remote.Response",bm="configured",bl="=",bk="Proxy authentication required",bj="qx.io.remote.transport.Abstract",bi="MSHTML-specific HTTP status code",bh="Not available",bg="Precondition failed",bf="Server error",v="&",w="qx.io.remote.Exchange",t="Bad gateway",u="Gone",r="See other",s="Partial content",p="Server timeout",q="qx.io.remote.transport.Script",B="HTTP version not supported",C="Unauthorized",K="Multiple choices",I="Payment required",S="Not implemented",N="Request-URL too large",bb="Length required",X="_applyState",E="changeState",be="Not modified",bd="Not acceptable",bc="qx.io.remote.Request",D="Connection closed by server",G="Moved permanently",H="_applyImplementation",J="Method not allowed",L="Moved temporarily",O="Forbidden",U="Use proxy",ba="Ok",x="Not found",y="Request time-out",F="Bad request",R="Conflict",Q="No content",P="qx.io.remote.transport.XmlHttp",W="qx.io.remote.transport.Iframe",V="Request entity too large",M="Unknown status code",T="Unsupported media type",b="Gateway time-out",Y="created",z="Out of resources",A="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bB){qx.core.Object.call(this);
this.setRequest(bB);
bB.setTransport(this);
},events:{"sending":c,"receiving":c,"completed":bn,"aborted":c,"failed":bn,"timeout":bn},statics:{typesOrder:[P,W,q],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bR,bS){qx.io.remote.Exchange.typesAvailable[bS]=bR;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bA in qx.io.remote.Exchange.typesAvailable){var bz=qx.io.remote.Exchange.typesAvailable[bA];

if(bz.isSupported()){qx.io.remote.Exchange.typesSupported[bA]=bz;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bL,bM,bN){if(!qx.lang.Array.contains(bL.handles.responseTypes,bN)){return false;
}
for(var bO in bM){if(!bL.handles[bO]){return false;
}}return true;
},_nativeMap:{0:Y,1:bm,2:j,3:g,4:h},wasSuccessful:function(bT,bU,bV){if(bV){switch(bT){case null:case 0:return true;
case -1:return bU<4;
default:return typeof bT===A;
}}else{switch(bT){case -1:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)&&bU>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+bU);
}}return bU<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)&&bU===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return bU!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bT);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bT);
}}return false;
default:if(bT>206&&bT<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bT+" ("+bU+")");
return false;
}}},statusCodeToString:function(a){switch(a){case -1:return bh;
case 200:return ba;
case 304:return be;
case 206:return s;
case 204:return Q;
case 300:return K;
case 301:return G;
case 302:return L;
case 303:return r;
case 305:return U;
case 400:return F;
case 401:return C;
case 402:return I;
case 403:return O;
case 404:return x;
case 405:return J;
case 406:return bd;
case 407:return bk;
case 408:return y;
case 409:return R;
case 410:return u;
case 411:return bb;
case 412:return bg;
case 413:return V;
case 414:return N;
case 415:return T;
case 500:return bf;
case 501:return S;
case 502:return t;
case 503:return z;
case 504:return b;
case 505:return B;
case 12002:return p;
case 12029:return bo;
case 12030:return bo;
case 12031:return bo;
case 12152:return D;
case 13030:return bi;
default:return M;
}}},properties:{request:{check:bc,nullable:true},implementation:{check:bj,nullable:true,apply:H},state:{check:[bm,j,g,h,f,d,k],init:bm,event:E,apply:X}},members:{send:function(){var bs=this.getRequest();

if(!bs){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bq=qx.io.remote.Exchange.typesOrder;
var bp=qx.io.remote.Exchange.typesSupported;
var bu=bs.getResponseType();
var bv={};

if(bs.getAsynchronous()){bv.asynchronous=true;
}else{bv.synchronous=true;
}
if(bs.getCrossDomain()){bv.crossDomain=true;
}
if(bs.getFileUpload()){bv.fileUpload=true;
}for(var bt in bs.getFormFields()){bv.programaticFormFields=true;
break;
}var bw,br;

for(var i=0,l=bq.length;i<l;i++){bw=bp[bq[i]];

if(bw){if(!qx.io.remote.Exchange.canHandle(bw,bv,bu)){continue;
}
try{if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){this.debug("Using implementation: "+bw.classname);
}}br=new bw;
this.setImplementation(br);
br.setUseBasicHttpAuth(bs.getUseBasicHttpAuth());
br.send();
return true;
}catch(bP){this.error("Request handler throws error");
this.error(bP);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bs);
},abort:function(){var by=this.getImplementation();

if(by){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){this.debug("Abort: implementation "+by.toHashCode());
}}by.abort();
}else{if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){this.debug("Abort: forcing state to be aborted");
}}this.setState(f);
}},timeout:function(){var bx=this.getImplementation();

if(bx){this.warn("Timeout: implementation "+bx.toHashCode());
bx.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(d);
}this.__pI();
},__pI:function(){var bQ=this.getRequest();

if(bQ){bQ.setTimeout(0);
}},_onsending:function(e){this.setState(j);
},_onreceiving:function(e){this.setState(g);
},_oncompleted:function(e){this.setState(h);
},_onabort:function(e){this.setState(f);
},_onfailed:function(e){this.setState(k);
},_ontimeout:function(e){this.setState(d);
},_applyImplementation:function(bD,bE){if(bE){bE.removeListener(j,this._onsending,this);
bE.removeListener(g,this._onreceiving,this);
bE.removeListener(h,this._oncompleted,this);
bE.removeListener(f,this._onabort,this);
bE.removeListener(d,this._ontimeout,this);
bE.removeListener(k,this._onfailed,this);
}
if(bD){var bG=this.getRequest();
bD.setUrl(bG.getUrl());
bD.setMethod(bG.getMethod());
bD.setAsynchronous(bG.getAsynchronous());
bD.setUsername(bG.getUsername());
bD.setPassword(bG.getPassword());
bD.setParameters(bG.getParameters(false));
bD.setFormFields(bG.getFormFields());
bD.setRequestHeaders(bG.getRequestHeaders());
var bJ=bG.getData();

if(bJ===null){var bK=bG.getParameters(true);
var bI=[];

for(var bF in bK){var bH=bK[bF];

if(bH instanceof Array){for(var i=0;i<bH.length;i++){bI.push(encodeURIComponent(bF)+bl+encodeURIComponent(bH[i]));
}}else{bI.push(encodeURIComponent(bF)+bl+encodeURIComponent(bH));
}}
if(bI.length>0){bD.setData(bI.join(v));
}}else{bD.setData(bJ);
}bD.setResponseType(bG.getResponseType());
bD.addListener(j,this._onsending,this);
bD.addListener(g,this._onreceiving,this);
bD.addListener(h,this._oncompleted,this);
bD.addListener(f,this._onabort,this);
bD.addListener(d,this._ontimeout,this);
bD.addListener(k,this._onfailed,this);
}},_applyState:function(bW,bX){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){this.debug("State: "+bX+" => "+bW);
}}
switch(bW){case j:this.fireEvent(j);
break;
case g:this.fireEvent(g);
break;
case h:case f:case d:case k:var ca=this.getImplementation();

if(!ca){break;
}this.__pI();

if(this.hasListener(bW)){var cb=qx.event.Registration.createEvent(bW,qx.io.remote.Response);

if(bW==h){var bY=ca.getResponseContent();
cb.setContent(bY);
if(bY===null){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(o)){this.debug("Altered State: "+bW+" => failed");
}}bW=k;
}}else if(bW==k){cb.setContent(ca.getResponseContent());
}cb.setStatusCode(ca.getStatusCode());
cb.setResponseHeaders(ca.getResponseHeaders());
this.dispatchEvent(cb);
}this.setImplementation(null);
ca.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bC=this.getImplementation();

if(bC){this.setImplementation(null);
bC.dispose();
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
},getResponseHeader:function(u){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(v,w){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.debug("State: "+v);
}}
switch(v){case m:this.fireEvent(m);
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
(function(){var bo="qx.debug",bn="on",bm="qx.ioRemoteDebugData",bl="failed",bk="qx.ioRemoteDebug",bj="completed",bi="=",bh="aborted",bg="",bf="sending",bN="&",bM="configured",bL="timeout",bK="application/xml",bJ="qx.io.remote.transport.XmlHttp",bI="application/json",bH="text/html",bG="qx.client",bF="receiving",bE="text/plain",bv="text/javascript",bw="created",bt="?",bu='Referer',br='Basic ',bs="\n</pre>",bp="string",bq='Authorization',bx="<pre>Could not execute json: \n",by="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bA=':',bz="parseerror",bC="file:",bB="webkit",bD="object";
qx.Class.define(bJ,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bE,bv,bI,bK,bH]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bG,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__lm:false,__ln:0,__lo:null,getRequest:function(){if(this.__lo===null){this.__lo=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__lo.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__lo;
},send:function(){this.__ln=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===bC&&!(/^http(s){0,1}\:/.test(S)));
this.__lm=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+bi+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+bi+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(bt)>=0?bN:bt)+U.join(bN);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+bi+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+bi+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(bN));
}}var V=function(u){var z=by;
var D=bg;
var x,w,v;
var A,B,C,y;
var i=0;

do{x=u.charCodeAt(i++);
w=u.charCodeAt(i++);
v=u.charCodeAt(i++);
A=x>>2;
B=((x&3)<<4)|(w>>4);
C=((w&15)<<2)|(v>>6);
y=v&63;

if(isNaN(w)){C=y=64;
}else if(isNaN(v)){y=64;
}D+=z.charAt(A)+z.charAt(B)+z.charAt(C)+z.charAt(y);
}while(i<u.length);
return D;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(bq,br+V(this.getUsername()+bA+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(d){this.error("Failed with exception: "+d);
this.failed();
return;
}if(!qx.core.Variant.isSet(bG,bB)){Q.setRequestHeader(bu,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Request: "+this.getData());
}}Q.send(this.getData());
}catch(bb){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bb,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bl){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case bj:case bh:case bl:case bL:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.warn("Ignore Ready State Change");
}}return;
}var bT=this.getReadyState();

if(bT==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bT,this.__lm)){if(this.getState()===bM){this.setState(bf);
}return this.failed();
}}while(this.__ln<bT){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ln]);
}}),getReadyState:function(){var f=null;

try{f=this.getRequest().readyState;
}catch(bU){}return f;
},setRequestHeader:function(r,t){this.getRequestHeaders()[r]=t;
},getResponseHeader:function(E){var F=null;

try{F=this.getRequest().getResponseHeader(E)||null;
}catch(L){}return F;
},getStringResponseHeaders:function(){var K=null;

try{var J=this.getRequest().getAllResponseHeaders();

if(J){K=J;
}}catch(bR){}return K;
},getResponseHeaders:function(){var m=this.getStringResponseHeaders();
var n={};

if(m){var j=m.split(/[\r\n]+/g);

for(var i=0,l=j.length;i<l;i++){var k=j[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(k){n[k[1]]=k[2];
}}}return n;
},getStatusCode:function(){var be=-1;

try{be=this.getRequest().status;
}catch(q){}return be;
},getStatusText:function(){var p=bg;

try{p=this.getRequest().statusText;
}catch(c){}return p;
},getResponseText:function(){var b=null;

try{b=this.getRequest().responseText;
}catch(a){b=null;
}return b;
},getResponseXml:function(){var I=null;
var G=this.getStatusCode();
var H=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(G,H,this.__lm)){try{I=this.getRequest().responseXML;
}catch(bc){}}if(typeof I==bD&&I!=null){if(!I.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,bg);
I.loadXML(s);
}if(!I.documentElement){throw new Error("Missing Document Element!");
}
if(I.documentElement.tagName==bz){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return I;
},getFetchedLength:function(){var X=this.getResponseText();
return typeof X==bp?X.length:0;
},getResponseContent:function(){var bO=this.getState();

if(bO!==bj&&bO!=bl){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bQ=this.getResponseText();

if(bO==bl){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Failed: "+bQ);
}}return bQ;
}
switch(this.getResponseType()){case bE:case bH:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+bQ);
}}return bQ;
case bI:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+bQ);
}}
try{if(bQ&&bQ.length>0){var bP=qx.util.Json.parse(bQ,false);
return (bP===0?0:(bP||null));
}else{return null;
}}catch(o){this.error("Could not execute json: ["+bQ+"]",o);
return bx+bQ+bs;
}case bv:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+bQ);
}}
try{if(bQ&&bQ.length>0){var bP=window.eval(bQ);
return (bP===0?0:(bP||null));
}else{return null;
}}catch(bS){this.error("Could not execute javascript: ["+bQ+"]",bS);
return null;
}case bK:bQ=this.getResponseXml();

if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+bQ);
}}return (bQ===0?0:(bQ||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(Y,ba){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.debug("State: "+Y);
}}
switch(Y){case bw:this.fireEvent(bw);
break;
case bM:this.fireEvent(bM);
break;
case bf:this.fireEvent(bf);
break;
case bF:this.fireEvent(bF);
break;
case bj:this.fireEvent(bj);
break;
case bl:this.fireEvent(bl);
break;
case bh:this.getRequest().abort();
this.fireEvent(bh);
break;
case bL:this.getRequest().abort();
this.fireEvent(bL);
break;
}}},defer:function(g,h){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bJ);
},destruct:function(){var bd=this.getRequest();

if(bd){bd.onreadystatechange=qx.lang.Function.empty;
switch(bd.readyState){case 1:case 2:case 3:bd.abort();
}}this.__lo=null;
}});
})();
(function(){var q=",",p="",o="string",n="null",m='"',k="qx.jsonDebugging",j='\\u00',h="__mX",g="new Date(Date.UTC(",f='\\\\',M='\\f',L="__nh",K='\\"',J="))",I="__mV",H="}",G='(',F=":",E="{",D='\\r',x='\\t',y="]",v="[",w="Use 'parse' instead!",t="qx.jsonEncodeUndefined",u='\\b',r="__mW",s="qx.util.Json",z=')',A='\\n',C="__ng",B="__mY";
qx.Class.define(s,{statics:{__mT:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__mU:{"function":I,"boolean":r,"number":h,"string":B,"object":C,"undefined":L},__mV:function(bp,bq){return String(bp);
},__mW:function(N,O){return String(N);
},__mX:function(bn,bo){return isFinite(bn)?String(bn):n;
},__mY:function(P,Q){var R;

if(/["\\\x00-\x1f]/.test(P)){R=P.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__nb);
}else{R=P;
}return m+R+m;
},__na:{'\b':u,'\t':x,'\n':A,'\f':M,'\r':D,'"':K,'\\':f},__nb:function(a,b){var bA=qx.util.Json.__na[b];

if(bA){return bA;
}bA=b.charCodeAt();
return j+Math.floor(bA/16).toString(16)+(bA%16).toString(16);
},__nc:function(ba,bb){var bd=[],bg=true,bf,bc;
var be=qx.util.Json.__nj;
bd.push(v);

if(be){qx.util.Json.__nd+=qx.util.Json.BEAUTIFYING_INDENT;
bd.push(qx.util.Json.__nd);
}
for(var i=0,l=ba.length;i<l;i++){bc=ba[i];
bf=this.__mU[typeof bc];

if(bf){bc=this[bf](bc,i+p);

if(typeof bc==o){if(!bg){bd.push(q);

if(be){bd.push(qx.util.Json.__nd);
}}bd.push(bc);
bg=false;
}}}
if(be){qx.util.Json.__nd=qx.util.Json.__nd.substring(0,qx.util.Json.__nd.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bd.push(qx.util.Json.__nd);
}bd.push(y);
return bd.join(p);
},__ne:function(c,d){var e=c.getUTCFullYear()+q+c.getUTCMonth()+q+c.getUTCDate()+q+c.getUTCHours()+q+c.getUTCMinutes()+q+c.getUTCSeconds()+q+c.getUTCMilliseconds();
return g+e+J;
},__nf:function(bt,bu){var bx=[],bz=true,bw,bv;
var by=qx.util.Json.__nj;
bx.push(E);

if(by){qx.util.Json.__nd+=qx.util.Json.BEAUTIFYING_INDENT;
bx.push(qx.util.Json.__nd);
}
for(var bu in bt){bv=bt[bu];
bw=this.__mU[typeof bv];

if(bw){bv=this[bw](bv,bu);

if(typeof bv==o){if(!bz){bx.push(q);

if(by){bx.push(qx.util.Json.__nd);
}}bx.push(this.__mY(bu),F,bv);
bz=false;
}}}
if(by){qx.util.Json.__nd=qx.util.Json.__nd.substring(0,qx.util.Json.__nd.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bx.push(qx.util.Json.__nd);
}bx.push(H);
return bx.join(p);
},__ng:function(bl,bm){if(bl){if(qx.lang.Type.isFunction(bl.toJSON)&&bl.toJSON!==this.__mT){return this.__ni(bl.toJSON(bm),bm);
}else if(qx.lang.Type.isDate(bl)){return this.__ne(bl,bm);
}else if(qx.lang.Type.isArray(bl)){return this.__nc(bl,bm);
}else if(qx.lang.Type.isObject(bl)){return this.__nf(bl,bm);
}return p;
}return n;
},__nh:function(br,bs){if(qx.core.Setting.get(t)){return n;
}},__ni:function(U,V){return this[this.__mU[typeof U]](U,V);
},stringify:function(bi,bj){this.__nj=bj;
this.__nd=this.BEAUTIFYING_LINE_END;
var bk=this.__ni(bi,p);

if(typeof bk!=o){bk=null;
}if(qx.core.Setting.get(k)){qx.log.Logger.debug(this,"JSON request: "+bk);
}return bk;
},parse:function(W,X){if(X===undefined){X=true;
}
if(qx.core.Setting.get(k)){qx.log.Logger.debug(this,"JSON response: "+W);
}
if(X){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(W.replace(/"(\\.|[^"\\])*"/g,p))){throw new Error("Could not parse JSON string!");
}}
try{var Y=(W&&W.length>0)?eval(G+W+z):null;
return Y;
}catch(S){throw new Error("Could not evaluate JSON string: "+S.message);
}},parseQx:function(T){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return qx.util.Json.parse(T,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bh){bh.__mT=Date.prototype.toJSON;
}});
})();
(function(){var D="qx.debug",C="on",B="qx.ioRemoteDebugData",A="=",z="&",y="application/xml",x="application/json",w="text/html",v="qx.ioRemoteDebug",u="qx.client",bc="textarea",bb="none",ba="text/plain",Y="text/javascript",X="",W="completed",V="?",U="qx.io.remote.transport.Iframe",T="gecko",S="frame_",K="aborted",L="_data_",I="pre",J="javascript:void(0)",G="sending",H="form",E="failed",F='<iframe name="',M="mshtml",N="form_",P='"></iframe>',O="iframe",R="timeout",Q="qx/static/blank.gif";
qx.Class.define(U,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var f=(new Date).valueOf();
var g=S+f;
var h=N+f;
if(qx.core.Variant.isSet(u,M)){this.__mm=document.createElement(F+g+P);
}else{this.__mm=document.createElement(O);
}this.__mm.src=J;
this.__mm.id=this.__mm.name=g;
this.__mm.onload=qx.lang.Function.bind(this._onload,this);
this.__mm.style.display=bb;
document.body.appendChild(this.__mm);
this.__mn=document.createElement(H);
this.__mn.target=g;
this.__mn.id=this.__mn.name=h;
this.__mn.style.display=bb;
document.body.appendChild(this.__mn);
this.__mo=document.createElement(bc);
this.__mo.id=this.__mo.name=L;
this.__mn.appendChild(this.__mo);
this.__mm.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[ba,Y,x,y,w]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__mo:null,__mp:0,__mn:null,__mm:null,send:function(){var l=this.getMethod();
var n=this.getUrl();
var r=this.getParameters(false);
var q=[];

for(var m in r){var o=r[m];

if(o instanceof Array){for(var i=0;i<o.length;i++){q.push(encodeURIComponent(m)+A+encodeURIComponent(o[i]));
}}else{q.push(encodeURIComponent(m)+A+encodeURIComponent(o));
}}
if(q.length>0){n+=(n.indexOf(V)>=0?z:V)+q.join(z);
}if(this.getData()===null){var r=this.getParameters(true);
var q=[];

for(var m in r){var o=r[m];

if(o instanceof Array){for(var i=0;i<o.length;i++){q.push(encodeURIComponent(m)+A+encodeURIComponent(o[i]));
}}else{q.push(encodeURIComponent(m)+A+encodeURIComponent(o));
}}
if(q.length>0){this.setData(q.join(z));
}}var k=this.getFormFields();

for(var m in k){var p=document.createElement(bc);
p.name=m;
p.appendChild(document.createTextNode(k[m]));
this.__mn.appendChild(p);
}this.__mn.action=n;
this.__mn.method=l;
this.__mo.appendChild(document.createTextNode(this.getData()));
this.__mn.submit();
this.setState(G);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__mn.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__mm.readyState]);
}),_switchReadyState:function(d){switch(this.getState()){case W:case K:case E:case R:this.warn("Ignore Ready State Change");
return;
}while(this.__mp<d){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mp]);
}},setRequestHeader:function(a,b){},getResponseHeader:function(s){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return X;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__mm);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__mm);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__mm);
},getIframeTextContent:function(){var bh=this.getIframeBody();

if(!bh){return null;
}
if(!bh.firstChild){return X;
}if(bh.firstChild.tagName&&bh.firstChild.tagName.toLowerCase()==I){return bh.firstChild.innerHTML;
}else{return bh.innerHTML;
}},getIframeHtmlContent:function(){var j=this.getIframeBody();
return j?j.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==W){if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(v)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(v)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bg=this.getIframeTextContent();

switch(this.getResponseType()){case ba:if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)){this.debug("Response: "+this._responseContent);
}}return bg;
break;
case w:bg=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)){this.debug("Response: "+this._responseContent);
}}return bg;
break;
case x:bg=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)){this.debug("Response: "+this._responseContent);
}}
try{return bg&&bg.length>0?qx.util.Json.parse(bg,false):null;
}catch(t){return this.error("Could not execute json: ("+bg+")",t);
}case Y:bg=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)){this.debug("Response: "+this._responseContent);
}}
try{return bg&&bg.length>0?window.eval(bg):null;
}catch(c){return this.error("Could not execute javascript: ("+bg+")",c);
}case y:bg=this.getIframeDocument();

if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)){this.debug("Response: "+this._responseContent);
}}return bg;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bd,be,bf){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,U);
},destruct:function(){if(this.__mm){this.__mm.onload=null;
this.__mm.onreadystatechange=null;
if(qx.core.Variant.isSet(u,T)){this.__mm.src=qx.util.ResourceManager.getInstance().toUri(Q);
}document.body.removeChild(this.__mm);
}
if(this.__mn){document.body.removeChild(this.__mn);
}this.__mm=this.__mn=this.__mo=null;
}});
})();
(function(){var v="qx.debug",u="on",t="&",s="=",r="qx.ioRemoteDebug",q="application/json",p="completed",o="text/plain",n="qx.ioRemoteDebugData",m="text/javascript",e="?",l="qx.io.remote.transport.Script",h="",c="_ScriptTransport_data",b="failed",g="script",f="timeout",j="_ScriptTransport_",a="_ScriptTransport_id",k="aborted",d="utf-8";
qx.Class.define(l,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var K=++qx.io.remote.transport.Script.__mE;

if(K>=2000000000){qx.io.remote.transport.Script.__mE=K=1;
}this.__mF=null;
this.__mE=K;
},statics:{__mE:0,_instanceRegistry:{},ScriptTransport_PREFIX:j,ScriptTransport_ID_PARAM:a,ScriptTransport_DATA_PARAM:c,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,m,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(B,content){var C=qx.io.remote.transport.Script._instanceRegistry[B];

if(C==null){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{C._responseContent=content;
C._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__mG:0,__mF:null,__mE:null,send:function(){var F=this.getUrl();
F+=(F.indexOf(e)>=0?t:e)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__mE;
var I=this.getParameters();
var H=[];

for(var E in I){if(E.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var G=I[E];

if(G instanceof Array){for(var i=0;i<G.length;i++){H.push(encodeURIComponent(E)+s+encodeURIComponent(G[i]));
}}else{H.push(encodeURIComponent(E)+s+encodeURIComponent(G));
}}
if(H.length>0){F+=t+H.join(t);
}var D=this.getData();

if(D!=null){F+=t+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+s+encodeURIComponent(D);
}qx.io.remote.transport.Script._instanceRegistry[this.__mE]=this;
this.__mF=document.createElement(g);
this.__mF.charset=d;
this.__mF.src=F;

if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Request: "+F);
}}document.body.appendChild(this.__mF);
},_switchReadyState:function(M){switch(this.getState()){case p:case k:case b:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__mG<M){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mG]);
}},setRequestHeader:function(w,x){},getResponseHeader:function(J){return null;
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
}}var L=this._responseContent;
return (L===0?0:(L||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(y,z,A){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,l);
},destruct:function(){if(this.__mF){delete qx.io.remote.transport.Script._instanceRegistry[this.__mE];
document.body.removeChild(this.__mF);
}this.__mF=this._responseContent=null;
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
(function(){var bd="test",bc="",bb="^",ba="demobrowser.TreeDataHandler",Y="ttree",X="All",W="\\.[^\\.]+$",V=".",U="depth";
qx.Class.define(ba,{extend:qx.core.Object,construct:function(E){qx.core.Object.call(this);
this.tmap=E;
this.ttree=this.__KP(E);
},members:{__KP:function(e){var g=e;
function f(y,z){var C=z.classname;
var A=C.split(".");
function B(parent,M){if(!M.length){return parent;
}else{var N=M[0];
var O=M.slice(1,M.length);
var P=null;
var Q=null;
var R=parent.getChildren();

for(var i=0;i<R.length;i++){if(R[i].label==N){Q=R[i];
break;
}}if(Q==null){Q=new demobrowser.Tree(N);
parent.add(Q);
}P=B(Q,O);
return P;
}}var D=B(y,A);

if(!D){throw new Error("No target to insert tests");
}h.readTree(z,D);
}function k(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var l=new demobrowser.Tree("All");
var h=this;
g.sort(k);

for(var i=0;i<g.length;i++){f(l,g[i]);
}return l;
},readTree:function(m,n){var p=arguments[1]||new demobrowser.Tree(m.classname);
var n;
function o(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}m.tests.sort(o);

for(var j=0;j<m.tests.length;j++){n=new demobrowser.Tree(m.tests[j].name);
n.tags=m.tests[j].tags;
n.type=bd;
n.desc=m.tests[j].desc;
p.add(n);
}if(m.children&&m.children.length){for(var j=0;j<m.children.length;j++){p.add(this.readTree(m.children[j]));
}}return p;
},getRoot:function(){if(!this.Root){var T={classname:bc,tests:[]};
var S=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(T.classname.length>S[i].classname.length){T=S[i];
}}this.Root=T;
}return this.Root.classname;
},getChilds:function(F){var G=[];
var I=this.tmap;
var H=bb+F+W;
var J=new RegExp(H);

for(var i=0;i<I.length;i++){if(I[i].classname.match(J)){G.push(I[i]);
}}return G;
},getTests:function(bh){var bi=this.tmap;

for(var i=0;i<bi.length;i++){if(bi[i].classname==bh){return bi[i].tests;
}}return [];
},getPath:function(w){if(!w){return bc;
}var x=w.pwd();
x.shift();
if(this.isClass(w)){x=x.concat(w.label);
}return x;
},getChildren:function(t){if(t==X){var u=this.tmap;
var v=[];

for(var i=0;i<u.length;i++){v.push(u[i].classname);
}return v;
}else if(this.isClass(t)){return this.getTests(t);
}else{return [];
}},isClass:function(be){if(be.type&&be.type==bd){return false;
}else{return true;
}},hasTests:function(bj){if(!this.isClass(bj)){return false;
}else{var bk=bj.getChildren();

for(var i=0;i<bk.length;i++){if(bk[i].type&&bk[i].type==bd){return true;
}}return false;
}},classFromTest:function(q){var r=bc;
var s=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==q){r=this.tmap[i].classname;
break classloop;
}}}return r;
},getFullName:function(c){if(!c){return bc;
}var d=this.getPath(c);

if(c.type&&c.type==bd){d=d.concat(c.label);
}return d.join(V);
},getPreviousNode:function(K){var L=K.getPrevSibling();

if(L){return L;
}},getNextNode:function(bf){var bg=bf.getNextSibling();

if(bg){return bg;
}},testCount:function(bl){if(bl.type&&bl.type==bd){return 1;
}else{var bm=0;
var bo=bl.getIterator(U);
var bn;

while(bn=bo()){if(bn.type&&bn.type==bd){bm++;
}}return bm;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(Y);
}});
})();
(function(){var n="depth",m="",l="widgetLinkFlat",k="widgetLinkFull",j="parent",h="children",g="demobrowser.Tree";
qx.Class.define(g,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||m;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(a,b){var c=n;
var d=this;
var e=this.getIterator(c);

while(d=e()){a.apply(d,b);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(o){var q=[this];
var p=o==n?1:0;
function f(){var u;

if(q.length){u=q.shift();
var v=u.getChildren();

if(v.length){if(p){q=v.concat(q);
}else{q=q.concat(v);
}}}else{u=null;
}return u;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(w){var x=this.parent.getChildren();
var y=this.self(arguments).indexOf(x,this);
var z=y+w;

if(x[z]){return x[z];
}},add:function(r){this.children.push(r);
r.parent=this;
}},statics:{indexOf:function(s,t){for(var i=0;i<s.length;i++){if(s[i]==t){return i;
}}}},destruct:function(){this._disposeObjects(k,l,j);
this._disposeArray(h);
}});
})();
(function(){var j="mshtml",h="pop.push.reverse.shift.sort.splice.unshift.join.slice",g="number",f="qx.type.BaseArray",e="qx.client",d=".";
qx.Class.define(f,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function c(k){if(qx.core.Variant.isSet(e,j)){b.prototype={length:0,$$isArray:true};
var n=h.split(d);

for(var length=n.length;length;){b.prototype[n[--length]]=Array.prototype[n[length]];
}}var o=Array.prototype.slice;
b.prototype.concat=function(){var t=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var s;

if(arguments[i] instanceof b){s=o.call(arguments[i],0);
}else if(arguments[i] instanceof Array){s=arguments[i];
}else{s=[arguments[i]];
}t.push.apply(t,s);
}return t;
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
b.prototype.filter=function(){var u=new this.constructor;
u.push.apply(u,l.apply(this,arguments));
return u;
};
b.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,m.apply(this,arguments));
return p;
};
b.prototype.slice=function(){var q=new this.constructor;
q.push.apply(q,Array.prototype.slice.apply(this,arguments));
return q;
};
b.prototype.splice=function(){var r=new this.constructor;
r.push.apply(r,Array.prototype.splice.apply(this,arguments));
return r;
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
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bp){var bT={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bJ={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bF={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bB=function(bo){return new RegExp(s+bo+u);
};
var bM=L;
var bC=N;
var bw=p;
var bE=n;
var bz=I;
var bH=t;
var bG=v;
var bu=D;
var bP=Y;
var bR=W;
var bA=T;
var bD=[O+bA+M,H+bA+B,w+bA+S,P+bA+X,C+bA+r].join(bc);
var bN=bB(bM);
var bx=bB(bC);
var bK=bB(bw);
var bt=bB(bE);
var bQ=bB(bz);
var bs=bB(bH);
var br=bB(bG);
var bL=bB(bu);
var by=bB(bP);
var bq=bB(bR);
var bv=bB(bD);
var bI=new RegExp([bM,bC,bw,bE,bz,bH,bG,bG,bu,bP,bR,bD,y].join(bc),G);
var bO=[];
var a=bp.match(bI);

for(var i=0;i<a.length;i++){var bS=a[i];

if(bS.match(bN)){bO.push({type:b,value:bS});
}else if(bS.match(bx)){bO.push({type:bb,value:bS});
}else if(bS.match(bv)){bO.push({type:be,value:bS});
}else if(bS.match(br)){bO.push({type:c,value:bS});
}else if(bS.match(bs)){bO.push({type:e,value:bS});
}else if(bT[bS]){bO.push({type:bf,value:bS});
}else if(bJ[bS]){bO.push({type:ba,value:bS});
}else if(bF[bS]){bO.push({type:h,value:bS});
}else if(bS.match(bK)){bO.push({type:bg,value:bS});
}else if(bS.match(bQ)){bO.push({type:q,value:bS});
}else if(bS.match(bt)){bO.push({type:z,value:bS});
}else if(bS.match(by)){bO.push({type:j,value:bS});
}else if(bS.match(bB(bq))){bO.push({type:g,value:bS});
}else if(bS.match(bL)){bO.push({type:A,value:bS});
}else if(bS==f){bO.push({type:k,value:f});
}else if(bS==d){bO.push({type:k,value:d});
}else if(bS==bd){bO.push({type:k,value:bd});
}else{bO.push({type:k,value:bS});
}}return bO;
},javaScriptToHtml:function(bh){var bl=qx.dev.Tokenizer.tokenizeJavaScript(bh);
var bk=new qx.util.StringBuilder();

for(var i=0;i<bl.length;i++){var bm=bl[i];
var bj=qx.bom.String.escape(bm.value);

switch(bm.type){case be:bk.add(Q,bj,l);
break;
case bg:bk.add(E,bj,l);
break;
case b:case bb:bk.add(m,bj,l);
break;
case c:case e:bk.add(o,bj,l);
break;
case bf:case ba:case h:bk.add(U,bm.type,V,bj,l);
break;
case j:var bi=qx.bom.client.Engine.MSHTML?K:R;
bk.add(bi);
break;
case g:var bn=qx.bom.client.Engine.MSHTML?x:J;
bk.add(bn);
break;
default:bk.add(bj);
}}return bk.get();
}}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(k){return qx.util.StringEscape.escape(k,qx.bom.String.FROM_CHARCODE);
},unescape:function(q){return qx.util.StringEscape.unescape(q,qx.bom.String.TO_CHARCODE);
},fromText:function(l){return qx.bom.String.escape(l).replace(/(  |\n)/g,function(i){var j={"  ":e,"\n":d};
return j[i]||i;
});
},toText:function(h){return qx.bom.String.unescape(h.replace(/\s+|<([^>])+>/gi,function(p){if(p.indexOf(f)===0){return b;
}else if(p.length>0&&p.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(m,n,o){m.FROM_CHARCODE=qx.lang.Object.invert(m.TO_CHARCODE);
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
(function(){var q="qx.debug",p="_applyStyle",o="on",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",c="_applyWidth",g="qx.ui.decoration.Uniform",f="px ",b=" ",a="scale",e="PositiveInteger",d="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(z,A,B){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setWidth(z);
}
if(A!=null){this.setStyle(A);
}
if(B!=null){this.setColor(B);
}},properties:{width:{check:e,init:0,apply:c},style:{nullable:true,check:[k,j,h,i],init:k,apply:p},color:{nullable:true,check:m,apply:p},backgroundColor:{check:m,nullable:true,apply:p}},members:{__ql:null,_getDefaultInsets:function(){var G=this.getWidth();
return {top:G,right:G,bottom:G,left:G};
},_isInitialized:function(){return !!this.__ql;
},getMarkup:function(){if(this.__ql){return this.__ql;
}var C={position:d,top:0,left:0};
var D=this.getWidth();

if(qx.core.Variant.isSet(q,o)){if(D===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var F=qx.theme.manager.Color.getInstance();
C.border=D+f+this.getStyle()+b+(F.resolve(this.getColor())||n);
var E=this._generateBackgroundMarkup(C);
return this.__ql=E;
},resize:function(r,s,t){var v=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;

if(v||qx.bom.client.Feature.CONTENT_BOX){var u=this.getWidth()*2;
s-=u;
t-=u;
if(s<0){s=0;
}
if(t<0){t=0;
}}r.style.width=s+l;
r.style.height=t+l;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.style.backgroundColor=y.resolve(x)||n;
},_applyWidth:function(){if(qx.core.Variant.isSet(q,o)){if(this.__ql){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(q,o)){if(this.__ql){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__ql=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(I,J,K){qx.ui.decoration.Abstract.call(this);
if(I!=null){this.setWidth(I);
}
if(J!=null){this.setStyle(J);
}
if(K!=null){this.setColor(K);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__od:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__od;
},getMarkup:function(L){if(this.__od){return this.__od;
}var M=qx.theme.manager.Color.getInstance();
var N={};
var P=this.getWidthTop();

if(P>0){N[s]=P+e+this.getStyleTop()+H+(M.resolve(this.getColorTop())||g);
}var P=this.getWidthRight();

if(P>0){N[v]=P+e+this.getStyleRight()+H+(M.resolve(this.getColorRight())||g);
}var P=this.getWidthBottom();

if(P>0){N[x]=P+e+this.getStyleBottom()+H+(M.resolve(this.getColorBottom())||g);
}var P=this.getWidthLeft();

if(P>0){N[t]=P+e+this.getStyleLeft()+H+(M.resolve(this.getColorLeft())||g);
}if(qx.core.Variant.isSet(G,E)){if(N.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}N.position=w;
N.top=0;
N.left=0;
var O=this._generateBackgroundMarkup(N);
return this.__od=O;
},resize:function(Q,R,S){var U=this.getBackgroundImage()&&this.getBackgroundRepeat()==l;

if(U||qx.bom.client.Feature.CONTENT_BOX){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
if(R<0){R=0;
}
if(S<0){S=0;
}}Q.style.width=R+D;
Q.style.height=S+D;
},tint:function(V,W){var X=qx.theme.manager.Color.getInstance();

if(W==null){W=this.getBackgroundColor();
}V.style.backgroundColor=X.resolve(W)||g;
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__od){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__od){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__od=null;
}});
})();
(function(){var p="Number",o="_applyInsets",n="-l",m="insetRight",l="insetTop",k="_applyBaseImage",j="insetBottom",i="set",h="shorthand",g="-t",d="insetLeft",f="String",e="qx.ui.decoration.Grid";
qx.Class.define(e,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(C,D){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__lR=new qx.ui.decoration.css3.BorderImage();

if(C){this.__lS(C);
}}else{this.__lR=new qx.ui.decoration.GridDiv(C);
}
if(D!=null){this.__lR.setInsets(D);
}},properties:{baseImage:{check:f,nullable:true,apply:k},insetLeft:{check:p,nullable:true,apply:o},insetRight:{check:p,nullable:true,apply:o},insetBottom:{check:p,nullable:true,apply:o},insetTop:{check:p,nullable:true,apply:o},insets:{group:[l,m,j,d],mode:h}},members:{__lR:null,getMarkup:function(){return this.__lR.getMarkup();
},resize:function(a,b,c){this.__lR.resize(a,b,c);
},tint:function(q,r){},getInsets:function(){return this.__lR.getInsets();
},_applyInsets:function(E,F,name){var G=i+qx.lang.String.firstUp(name);
this.__lR[G](E);
},_applyBaseImage:function(s,t){if(this.__lR instanceof qx.ui.decoration.GridDiv){this.__lR.setBaseImage(s);
}else{this.__lS(s);
}},__lS:function(u){this.__lR.setBorderImage(u);
var y=qx.util.AliasManager.getInstance().resolve(u);
var z=/(.*)(\.[a-z]+)$/.exec(y);
var w=z[1];
var x=z[2];
var v=qx.util.ResourceManager.getInstance();
var A=v.getImageHeight(w+g+x);
var B=v.getImageWidth(w+n+x);
this.__lR.setSlice([A,B]);
}},destruct:function(){this.__lR=null;
}});
})();
(function(){var m="_applyStyle",l='"></div>',k="Color",j="1px",i='<div style="',h='border:',g="1px solid ",f="",e=";",d="px",A='</div>',z="qx.ui.decoration.Beveled",y="qx.debug",x='<div style="position:absolute;top:1px;left:1px;',w='border-bottom:',v='border-right:',u='border-left:',t='border-top:',s="Number",r='<div style="position:absolute;top:1px;left:0px;',p='position:absolute;top:0px;left:1px;',q='<div style="overflow:hidden;font-size:0;line-height:0;">',n="on",o="absolute";
qx.Class.define(z,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setOuterColor(a);
}
if(b!=null){this.setInnerColor(b);
}
if(c!=null){this.setInnerOpacity(c);
}},properties:{innerColor:{check:k,nullable:true,apply:m},innerOpacity:{check:s,init:1,apply:m},outerColor:{check:k,nullable:true,apply:m},backgroundColor:{check:k,nullable:true,apply:m}},members:{__pR:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__pR;
},_applyStyle:function(){if(qx.core.Variant.isSet(y,n)){if(this.__pR){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__pR){return this.__pR;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=g+B.resolve(this.getOuterColor())+e;
var E=g+B.resolve(this.getInnerColor())+e;
C.push(q);
C.push(i);
C.push(h,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(l);
C.push(r);
C.push(u,F);
C.push(v,F);
C.push(l);
C.push(i);
C.push(p);
C.push(t,F);
C.push(w,F);
C.push(l);
var D={position:o,top:j,left:j};
C.push(this._generateBackgroundMarkup(D));
C.push(x);
C.push(h,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(l);
C.push(A);
return this.__pR=C.join(f);
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
}var Q=d;
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
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.childNodes[3].style.backgroundColor=T.resolve(S)||f;
}},destruct:function(){this.__pR=null;
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
(function(){var eM="button-frame",eL="atom",eK="widget",eJ="main",eI="button",eH="text-selected",eG="image",eF="bold",eE="middle",eD="background-light",dq="text-disabled",dp="groupbox",dn="decoration/arrows/down.png",dm="cell",dl="selected",dk="border-invalid",dj="input",di="input-disabled",dh="menu-button",dg="input-focused-invalid",eT="toolbar-button",eU="spinner",eR="input-focused",eS="popup",eP="tooltip",eQ="label",eN="list",eO="tree-item",eV="treevirtual-contract",eW="scrollbar",em="datechooser/nav-button",el="text-hovered",eo="center",en="treevirtual-expand",eq="textfield",ep="decoration/arrows/right.png",es="background-application",er="radiobutton",ek="white",ej="invalid",bm="combobox",bn="right-top",bo="checkbox",bp="text-title",bq="qx/static/blank.gif",br="scrollbar/button",bs="right",bt="combobox/button",bu="icon/16/places/folder.png",bv="text-label",fl="decoration/tree/closed.png",fk="scrollbar-slider-horizontal",fj="decoration/arrows/left.png",fi="button-focused",fp="text-light",fo="menu-slidebar-button",fn="text-input",fm="slidebar/button-forward",fr="background-splitpane",fq=".png",co="decoration/tree/open.png",cp="default",cm="decoration/arrows/down-small.png",cn="datechooser",cs="slidebar/button-backward",ct="selectbox",cq="treevirtual-folder",cr="shadow-popup",ck="icon/16/mimetypes/office-document.png",cl="background-medium",bP="table",bO="decoration/arrows/up.png",bR="decoration/form/",bQ="",bL="-invalid",bK="icon/16/places/folder-open.png",bN="button-checked",bM="decoration/window/maximize-active-hovered.png",bJ="radiobutton-hovered",bI="keyboard-focus",cz="decoration/cursors/",cA="slidebar",cB="tooltip-error-arrow",cC="table-scroller-focus-indicator",cv="move-frame",cw="nodrop",cx="decoration/table/boolean-true.png",cy="table-header-cell",cD="menu",cE="app-header",cd="row-layer",cc="text-inactive",cb="move",ca="radiobutton-checked-focused",bY="decoration/window/restore-active-hovered.png",bX="shadow-window",bW="table-column-button",bV="right.png",ch="tabview-page-button-bottom-inactive",cg="tooltip-error",cF="window-statusbar",cG="button-hovered",cH="decoration/scrollbar/scrollbar-",cI="background-tip",cJ="scrollbar-slider-horizontal-disabled",cK="table-scroller-header",cL="button-pressed",cM="table-pane",cN="decoration/window/close-active.png",cO="native",dy="checkbox-hovered",dx="button-invalid-shadow",dw="checkbox-checked",dv="decoration/window/minimize-active-hovered.png",dC="menubar",dB="icon/16/actions/dialog-cancel.png",dA="tabview-page-button-top-inactive",dz="tabview-page-button-left-inactive",dG="menu-slidebar",dF="toolbar-button-checked",ee="decoration/tree/open-selected.png",ef="radiobutton-checked",ec="decoration/window/minimize-inactive.png",ed="icon/16/apps/office-calendar.png",ea="group",eb="tabview-page-button-right-inactive",dX="decoration/window/minimize-active.png",dY="decoration/window/restore-inactive.png",eg="checkbox-checked-focused",eh="splitpane",ew="combobox/textfield",ev="button-preselected-focused",ey="decoration/window/close-active-hovered.png",ex="qx/icon/Tango/16/actions/window-close.png",eA="checkbox-pressed",ez="button-disabled",eC="selected-dragover",eB="border-separator",eu="decoration/window/maximize-inactive.png",et="dragover",fe="scrollarea",ff="scrollbar-vertical",fg="decoration/menu/checkbox-invert.gif",fh="decoration/toolbar/toolbar-handle-knob.gif",fa="icon/22/mimetypes/office-document.png",fb="button-preselected",fc="button-checked-focused",fd="up.png",eX="best-fit",eY="decoration/tree/closed-selected.png",bl="qx.theme.modern.Appearance",bk="text-active",bj="toolbar-button-hovered",bi="progressive-table-header",bh="decoration/table/select-column-order.png",bg="decoration/menu/radiobutton.gif",bf="decoration/arrows/forward.png",be="decoration/table/descending.png",bd="window-captionbar-active",bc="checkbox-checked-hovered",by="scrollbar-slider-vertical",bz="toolbar",bw="alias",bx="decoration/window/restore-active.png",bC="decoration/table/boolean-false.png",bD="checkbox-checked-disabled",bA="icon/32/mimetypes/office-document.png",bB="radiobutton-checked-disabled",bF="tabview-pane",bG="decoration/arrows/rewind.png",dK="checkbox-focused",dE="top",dR="#EEE",dN="icon/16/actions/dialog-ok.png",dt="radiobutton-checked-hovered",dr="table-header-cell-hovered",bT="window",du="text-gray",cf="decoration/menu/radiobutton-invert.gif",ce="text-placeholder",cX="slider",cY="keep-align",da="down.png",db="tabview-page-button-top-active",dc="icon/32/places/folder-open.png",dd="icon/22/places/folder.png",de="decoration/window/maximize-active.png",df="checkbox-checked-pressed",cV="decoration/window/close-inactive.png",cW="tabview-page-button-left-active",ds="toolbar-part",dQ="decoration/splitpane/knob-vertical.png",dP=".gif",dO="icon/22/places/folder-open.png",dV="radiobutton-checked-pressed",dU="table-statusbar",dT="radiobutton-pressed",dS="window-captionbar-inactive",dM="copy",dL="radiobutton-focused",bE="decoration/arrows/down-invert.png",cj="decoration/menu/checkbox.gif",ci="decoration/splitpane/knob-horizontal.png",dD="icon/32/places/folder.png",cu="toolbar-separator",dJ="tabview-page-button-bottom-active",dI="decoration/arrows/up-small.png",dH="decoration/table/ascending.png",bS="decoration/arrows/up-invert.png",dW="small",bH="tabview-page-button-right-active",bU="-disabled",cP="scrollbar-horizontal",cQ="progressive-table-header-cell",cR="menu-separator",cS="pane",cT="decoration/arrows/right-invert.png",cU="left.png",ei="icon/16/actions/view-refresh.png";
qx.Theme.define(bl,{appearances:{"widget":{},"root":{style:function(fH){return {backgroundColor:es,textColor:bv,font:cp};
}},"label":{style:function(gy){return {textColor:gy.disabled?dq:undefined};
}},"move-frame":{style:function(hk){return {decorator:eJ};
}},"resize-frame":cv,"dragdrop-cursor":{style:function(A){var B=cw;

if(A.copy){B=dM;
}else if(A.move){B=cb;
}else if(A.alias){B=bw;
}return {source:cz+B+dP,position:bn,offset:[2,16,2,6]};
}},"image":{style:function(gw){return {opacity:!gw.replacement&&gw.disabled?0.3:1};
}},"atom":{},"atom/label":eQ,"atom/icon":eG,"popup":{style:function(L){return {decorator:eJ,backgroundColor:eD,shadow:cr};
}},"button-frame":{alias:eL,style:function(s){var u,t;

if(s.checked&&s.focused&&!s.inner){u=fc;
t=undefined;
}else if(s.disabled){u=ez;
t=undefined;
}else if(s.pressed){u=cL;
t=el;
}else if(s.checked){u=bN;
t=undefined;
}else if(s.hovered){u=cG;
t=el;
}else if(s.preselected&&s.focused&&!s.inner){u=ev;
t=el;
}else if(s.preselected){u=fb;
t=el;
}else if(s.focused&&!s.inner){u=fi;
t=undefined;
}else{u=eI;
t=undefined;
}return {decorator:u,textColor:t,shadow:s.invalid&&!s.disabled?dx:undefined};
}},"button-frame/image":{style:function(fV){return {opacity:!fV.replacement&&fV.disabled?0.5:1};
}},"button":{alias:eM,include:eM,style:function(G){return {padding:[2,8],center:true};
}},"hover-button":{alias:eL,include:eL,style:function(hO){return {decorator:hO.hovered?dl:undefined,textColor:hO.hovered?eH:undefined};
}},"splitbutton":{},"splitbutton/button":eI,"splitbutton/arrow":{alias:eI,include:eI,style:function(hJ){return {icon:dn,padding:2,marginLeft:1};
}},"checkbox":{alias:eL,style:function(hf){var hh;

if(hf.checked&&hf.focused){hh=eg;
}else if(hf.checked&&hf.disabled){hh=bD;
}else if(hf.checked&&hf.pressed){hh=df;
}else if(hf.checked&&hf.hovered){hh=bc;
}else if(hf.checked){hh=dw;
}else if(hf.focused){hh=dK;
}else if(hf.pressed){hh=eA;
}else if(hf.hovered){hh=dy;
}else{hh=bo;
}var hg=hf.invalid&&!hf.disabled?bL:bQ;
return {icon:bR+hh+hg+fq,gap:6};
}},"radiobutton":{alias:eL,style:function(c){var e;

if(c.checked&&c.focused){e=ca;
}else if(c.checked&&c.disabled){e=bB;
}else if(c.checked&&c.pressed){e=dV;
}else if(c.checked&&c.hovered){e=dt;
}else if(c.checked){e=ef;
}else if(c.focused){e=dL;
}else if(c.pressed){e=dT;
}else if(c.hovered){e=bJ;
}else{e=er;
}var d=c.invalid&&!c.disabled?bL:bQ;
return {icon:bR+e+d+fq,gap:6};
}},"textfield":{style:function(gA){var gF;
var gD=!!gA.focused;
var gE=!!gA.invalid;
var gB=!!gA.disabled;

if(gD&&gE&&!gB){gF=dg;
}else if(gD&&!gE&&!gB){gF=eR;
}else if(gB){gF=di;
}else if(!gD&&gE&&!gB){gF=dk;
}else{gF=dj;
}var gC;

if(gA.disabled){gC=dq;
}else if(gA.showingPlaceholder){gC=ce;
}else{gC=fn;
}return {decorator:gF,padding:[2,4,1],textColor:gC};
}},"textarea":{include:eq,style:function(gu){return {padding:4};
}},"spinner":{style:function(fy){var fC;
var fA=!!fy.focused;
var fB=!!fy.invalid;
var fz=!!fy.disabled;

if(fA&&fB&&!fz){fC=dg;
}else if(fA&&!fB&&!fz){fC=eR;
}else if(fz){fC=di;
}else if(!fA&&fB&&!fz){fC=dk;
}else{fC=dj;
}return {decorator:fC};
}},"spinner/textfield":{style:function(hc){return {marginRight:2,padding:[2,4,1],textColor:hc.disabled?dq:fn};
}},"spinner/upbutton":{alias:eM,include:eM,style:function(m){return {icon:dI,padding:m.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:eM,include:eM,style:function(ia){return {icon:cm,padding:ia.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":bm,"datefield/button":{alias:bt,include:bt,style:function(fM){return {icon:ed,padding:[0,3],decorator:undefined};
}},"datefield/textfield":ew,"datefield/list":{alias:cn,include:cn,style:function(hW){return {decorator:undefined};
}},"groupbox":{style:function(ie){return {legendPosition:dE};
}},"groupbox/legend":{alias:eL,style:function(w){return {padding:[1,0,1,4],textColor:w.invalid?ej:bp,font:eF};
}},"groupbox/frame":{style:function(o){return {padding:12,decorator:ea};
}},"check-groupbox":dp,"check-groupbox/legend":{alias:bo,include:bo,style:function(fx){return {padding:[1,0,1,4],textColor:fx.invalid?ej:bp,font:eF};
}},"radio-groupbox":dp,"radio-groupbox/legend":{alias:er,include:er,style:function(fF){return {padding:[1,0,1,4],textColor:fF.invalid?ej:bp,font:eF};
}},"scrollarea":{style:function(fv){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(fP){return {backgroundColor:es};
}},"scrollarea/pane":eK,"scrollarea/scrollbar-x":eW,"scrollarea/scrollbar-y":eW,"scrollbar":{style:function(go){if(go[cO]){return {};
}return {width:go.horizontal?undefined:16,height:go.horizontal?16:undefined,decorator:go.horizontal?cP:ff,padding:1};
}},"scrollbar/slider":{alias:cX,style:function(T){return {padding:T.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:eM,style:function(gr){var gs=gr.horizontal?fk:by;

if(gr.disabled){gs+=bU;
}return {decorator:gs,minHeight:gr.horizontal?undefined:9,minWidth:gr.horizontal?9:undefined};
}},"scrollbar/button":{alias:eM,include:eM,style:function(J){var K=cH;

if(J.left){K+=cU;
}else if(J.right){K+=bV;
}else if(J.up){K+=fd;
}else{K+=da;
}
if(J.left||J.right){return {padding:[0,0,0,J.left?3:4],icon:K,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:K,width:14,height:15};
}}},"scrollbar/button-begin":br,"scrollbar/button-end":br,"slider":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=dg;
}else if(W&&!X&&!V){Y=eR;
}else if(V){Y=di;
}else if(!W&&X&&!V){Y=dk;
}else{Y=dj;
}return {decorator:Y};
}},"slider/knob":{include:eM,style:function(ft){return {decorator:ft.disabled?cJ:fk,shadow:undefined,height:14,width:14};
}},"list":{alias:fe,style:function(gN){var gR;
var gP=!!gN.focused;
var gQ=!!gN.invalid;
var gO=!!gN.disabled;

if(gP&&gQ&&!gO){gR=dg;
}else if(gP&&!gQ&&!gO){gR=eR;
}else if(gO){gR=di;
}else if(!gP&&gQ&&!gO){gR=dk;
}else{gR=dj;
}return {backgroundColor:eD,decorator:gR};
}},"list/pane":eK,"listitem":{alias:eL,style:function(hP){var hQ;

if(hP.dragover){hQ=hP.selected?eC:et;
}else{hQ=hP.selected?dl:undefined;
}return {padding:hP.dragover?[4,4,2,4]:4,textColor:hP.selected?eH:undefined,decorator:hQ};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:eM,include:eM,style:function(hE){return {padding:5,center:true,icon:hE.vertical?dn:ep};
}},"slidebar/button-backward":{alias:eM,include:eM,style:function(gG){return {padding:5,center:true,icon:gG.vertical?bO:fj};
}},"tabview":{style:function(hu){return {contentPadding:16};
}},"tabview/bar":{alias:cA,style:function(gh){var gi={marginBottom:gh.barTop?-1:0,marginTop:gh.barBottom?-4:0,marginLeft:gh.barRight?-3:0,marginRight:gh.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gh.barTop||gh.barBottom){gi.paddingLeft=5;
gi.paddingRight=7;
}else{gi.paddingTop=5;
gi.paddingBottom=7;
}return gi;
}},"tabview/bar/button-forward":{include:fm,alias:fm,style:function(fS){if(fS.barTop||fS.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:cs,alias:cs,style:function(fK){if(fK.barTop||fK.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gH){return {decorator:bF,minHeight:100,marginBottom:gH.barBottom?-1:0,marginTop:gH.barTop?-1:0,marginLeft:gH.barLeft?-1:0,marginRight:gH.barRight?-1:0};
}},"tabview-page":eK,"tabview-page/button":{alias:eL,style:function(gU){var hb,gW=0;
var ha=0,gV=0,gX=0,gY=0;

if(gU.checked){if(gU.barTop){hb=db;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barBottom){hb=dJ;
gW=[6,14];
gX=gU.firstTab?0:-5;
gY=gU.lastTab?0:-5;
}else if(gU.barRight){hb=bH;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}else{hb=cW;
gW=[6,13];
ha=gU.firstTab?0:-5;
gV=gU.lastTab?0:-5;
}}else{if(gU.barTop){hb=dA;
gW=[4,10];
ha=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barBottom){hb=ch;
gW=[4,10];
gV=4;
gX=gU.firstTab?5:1;
gY=1;
}else if(gU.barRight){hb=eb;
gW=[4,10];
gY=5;
ha=gU.firstTab?5:1;
gV=1;
gX=1;
}else{hb=dz;
gW=[4,10];
gX=5;
ha=gU.firstTab?5:1;
gV=1;
gY=1;
}}return {zIndex:gU.checked?10:5,decorator:hb,padding:gW,marginTop:ha,marginBottom:gV,marginLeft:gX,marginRight:gY,textColor:gU.checked?bk:cc};
}},"tabview-page/button/label":{alias:eQ,style:function(q){return {padding:[0,1,0,1],margin:q.focused?0:1,decorator:q.focused?bI:undefined};
}},"tabview-page/button/close-button":{alias:eL,style:function(hp){return {icon:ex};
}},"toolbar":{style:function(fY){return {decorator:bz,spacing:2};
}},"toolbar/part":{style:function(hi){return {decorator:ds,spacing:2};
}},"toolbar/part/container":{style:function(hV){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hN){return {source:fh,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eL,style:function(D){return {marginTop:2,marginBottom:2,padding:(D.pressed||D.checked||D.hovered)&&!D.disabled||(D.disabled&&D.checked)?3:5,decorator:D.pressed||(D.checked&&!D.hovered)||(D.checked&&D.disabled)?dF:D.hovered&&!D.disabled?bj:undefined};
}},"toolbar-menubutton":{alias:eT,include:eT,style:function(E){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:eG,include:eG,style:function(gm){return {source:cm};
}},"toolbar-splitbutton":{style:function(i){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:eT,include:eT,style:function(fJ){return {icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:eT,include:eT,style:function(h){return {padding:h.pressed||h.checked?1:h.hovered?1:3,icon:dn,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(gL){return {decorator:cu,margin:7};
}},"tree":eN,"tree-item":{style:function(fE){return {padding:[2,6],textColor:fE.selected?eH:undefined,decorator:fE.selected?dl:undefined};
}},"tree-item/icon":{include:eG,style:function(hn){return {paddingRight:5};
}},"tree-item/label":eQ,"tree-item/open":{include:eG,style:function(gb){var gc;

if(gb.selected&&gb.opened){gc=ee;
}else if(gb.selected&&!gb.opened){gc=eY;
}else if(gb.opened){gc=co;
}else{gc=fl;
}return {padding:[0,5,0,2],source:gc};
}},"tree-folder":{include:eO,alias:eO,style:function(gp){var gq;

if(gp.small){gq=gp.opened?bK:bu;
}else if(gp.large){gq=gp.opened?dc:dD;
}else{gq=gp.opened?dO:dd;
}return {icon:gq};
}},"tree-file":{include:eO,alias:eO,style:function(hX){return {icon:hX.small?ck:hX.large?bA:fa};
}},"treevirtual":bP,"treevirtual-folder":{style:function(fX){return {icon:fX.opened?bK:bu};
}},"treevirtual-file":{include:cq,alias:cq,style:function(hx){return {icon:ck};
}},"treevirtual-line":{style:function(F){return {icon:bq};
}},"treevirtual-contract":{style:function(fD){return {icon:co,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(fN){return {icon:fl,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eV,"treevirtual-only-expand":en,"treevirtual-start-contract":eV,"treevirtual-start-expand":en,"treevirtual-end-contract":eV,"treevirtual-end-expand":en,"treevirtual-cross-contract":eV,"treevirtual-cross-expand":en,"treevirtual-end":{style:function(hH){return {icon:bq};
}},"treevirtual-cross":{style:function(hs){return {icon:bq};
}},"tooltip":{include:eS,style:function(r){return {backgroundColor:cI,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eL,"tooltip-error":{include:eP,style:function(H){return {textColor:eH,placeMethod:eK,offset:[0,0,0,14],marginTop:-2,position:bn,showTimeout:100,hideTimeout:10000,decorator:cg,shadow:cB,font:eF};
}},"tooltip-error/atom":eL,"window":{style:function(gg){return {shadow:bX,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(ic){return {decorator:bT};
}},"window/captionbar":{style:function(fG){return {decorator:fG.active?bd:dS,textColor:fG.active?ek:du,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hT){return {margin:[5,0,3,6]};
}},"window/title":{style:function(he){return {alignY:eE,font:eF,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eL,style:function(z){return {icon:z.active?z.hovered?dv:dX:ec,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eL,style:function(id){return {icon:id.active?id.hovered?bY:bx:dY,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eL,style:function(j){return {icon:j.active?j.hovered?bM:de:eu,margin:[4,8,2,0]};
}},"window/close-button":{alias:eL,style:function(p){return {icon:p.active?p.hovered?ey:cN:cV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(fs){return {padding:[2,6],decorator:cF,minHeight:18};
}},"window/statusbar-text":{style:function(fu){return {font:dW};
}},"iframe":{style:function(hw){return {decorator:eJ};
}},"resizer":{style:function(fQ){return {decorator:cS};
}},"splitpane":{style:function(n){return {decorator:eh};
}},"splitpane/splitter":{style:function(R){return {width:R.horizontal?3:undefined,height:R.vertical?3:undefined,backgroundColor:fr};
}},"splitpane/splitter/knob":{style:function(gS){return {source:gS.horizontal?ci:dQ};
}},"splitpane/slider":{style:function(hd){return {width:hd.horizontal?3:undefined,height:hd.vertical?3:undefined,backgroundColor:fr};
}},"selectbox":{alias:eM,include:eM,style:function(fW){return {padding:[2,8]};
}},"selectbox/atom":eL,"selectbox/popup":eS,"selectbox/list":{alias:eN},"selectbox/arrow":{include:eG,style:function(ht){return {source:dn,paddingLeft:5};
}},"datechooser":{style:function(hz){var hD;
var hB=!!hz.focused;
var hC=!!hz.invalid;
var hA=!!hz.disabled;

if(hB&&hC&&!hA){hD=dg;
}else if(hB&&!hC&&!hA){hD=eR;
}else if(hA){hD=di;
}else if(!hB&&hC&&!hA){hD=dk;
}else{hD=dj;
}return {padding:2,decorator:hD,backgroundColor:eD};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:eM,alias:eM,style:function(hF){var hG={padding:[2,4],shadow:undefined};

if(hF.lastYear){hG.icon=bG;
hG.marginRight=1;
}else if(hF.lastMonth){hG.icon=fj;
}else if(hF.nextYear){hG.icon=bf;
hG.marginLeft=1;
}else if(hF.nextMonth){hG.icon=ep;
}return hG;
}},"datechooser/last-year-button-tooltip":eP,"datechooser/last-month-button-tooltip":eP,"datechooser/next-year-button-tooltip":eP,"datechooser/next-month-button-tooltip":eP,"datechooser/last-year-button":em,"datechooser/last-month-button":em,"datechooser/next-month-button":em,"datechooser/next-year-button":em,"datechooser/month-year-label":{style:function(ge){return {font:eF,textAlign:eo,textColor:ge.disabled?dq:undefined};
}},"datechooser/date-pane":{style:function(l){return {textColor:l.disabled?dq:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hS){return {textColor:hS.disabled?dq:hS.weekend?fp:undefined,textAlign:eo,paddingTop:2,backgroundColor:cl};
}},"datechooser/week":{style:function(v){return {textAlign:eo,padding:[2,4],backgroundColor:cl};
}},"datechooser/day":{style:function(ba){return {textAlign:eo,decorator:ba.disabled?undefined:ba.selected?dl:undefined,textColor:ba.disabled?dq:ba.selected?eH:ba.otherMonth?fp:undefined,font:ba.today?eF:undefined,padding:[2,4]};
}},"combobox":{style:function(M){var Q;
var O=!!M.focused;
var P=!!M.invalid;
var N=!!M.disabled;

if(O&&P&&!N){Q=dg;
}else if(O&&!P&&!N){Q=eR;
}else if(N){Q=di;
}else if(!O&&P&&!N){Q=dk;
}else{Q=dj;
}return {decorator:Q};
}},"combobox/popup":eS,"combobox/list":{alias:eN},"combobox/button":{include:eM,alias:eM,style:function(x){var y={icon:dn,padding:2};

if(x.selected){y.decorator=fi;
}return y;
}},"combobox/textfield":{include:eq,style:function(hM){return {decorator:undefined};
}},"menu":{style:function(hK){var hL={decorator:cD,shadow:cr,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hK.submenu||hK.contextmenu?eX:cY};

if(hK.submenu){hL.position=bn;
hL.offset=[-2,-3];
}return hL;
}},"menu/slidebar":dG,"menu-slidebar":eK,"menu-slidebar-button":{style:function(ga){return {decorator:ga.hovered?dl:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:fo,style:function(hy){return {icon:hy.hovered?bS:bO};
}},"menu-slidebar/button-forward":{include:fo,style:function(gx){return {icon:gx.hovered?bE:dn};
}},"menu-separator":{style:function(gv){return {height:0,decorator:cR,margin:[4,2]};
}},"menu-button":{alias:eL,style:function(k){return {decorator:k.selected?dl:undefined,textColor:k.selected?eH:undefined,padding:[4,6]};
}},"menu-button/icon":{include:eG,style:function(fR){return {alignY:eE};
}},"menu-button/label":{include:eQ,style:function(C){return {alignY:eE,padding:1};
}},"menu-button/shortcut":{include:eQ,style:function(gt){return {alignY:eE,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:eG,style:function(ib){return {source:ib.selected?cT:ep,alignY:eE};
}},"menu-checkbox":{alias:dh,include:dh,style:function(gk){return {icon:!gk.checked?undefined:gk.selected?fg:cj};
}},"menu-radiobutton":{alias:dh,include:dh,style:function(hl){return {icon:!hl.checked?undefined:hl.selected?cf:bg};
}},"menubar":{style:function(gK){return {decorator:dC};
}},"menubar-button":{alias:eL,style:function(gd){return {decorator:gd.pressed||gd.hovered?dl:undefined,textColor:gd.pressed||gd.hovered?eH:undefined,padding:[3,8]};
}},"colorselector":eK,"colorselector/control-bar":eK,"colorselector/control-pane":eK,"colorselector/visual-pane":dp,"colorselector/preset-grid":eK,"colorselector/colorbucket":{style:function(hR){return {decorator:eJ,width:16,height:16};
}},"colorselector/preset-field-set":dp,"colorselector/input-field-set":dp,"colorselector/preview-field-set":dp,"colorselector/hex-field-composite":eK,"colorselector/hex-field":eq,"colorselector/rgb-spinner-composite":eK,"colorselector/rgb-spinner-red":eU,"colorselector/rgb-spinner-green":eU,"colorselector/rgb-spinner-blue":eU,"colorselector/hsb-spinner-composite":eK,"colorselector/hsb-spinner-hue":eU,"colorselector/hsb-spinner-saturation":eU,"colorselector/hsb-spinner-brightness":eU,"colorselector/preview-content-old":{style:function(I){return {decorator:eJ,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bb){return {decorator:eJ,backgroundColor:eD,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(a){return {decorator:eJ,margin:5};
}},"colorselector/brightness-field":{style:function(gf){return {decorator:eJ,margin:[5,7]};
}},"colorselector/hue-saturation-pane":eK,"colorselector/hue-saturation-handle":eK,"colorselector/brightness-pane":eK,"colorselector/brightness-handle":eK,"colorpopup":{alias:eS,include:eS,style:function(gM){return {padding:5,backgroundColor:es};
}},"colorpopup/field":{style:function(fI){return {decorator:eJ,margin:2,width:14,height:14,backgroundColor:eD};
}},"colorpopup/selector-button":eI,"colorpopup/auto-button":eI,"colorpopup/preview-pane":dp,"colorpopup/current-preview":{style:function(S){return {height:20,padding:4,marginLeft:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fT){return {height:20,padding:4,marginRight:4,decorator:eJ,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eI,include:eI,style:function(hI){return {icon:dN};
}},"colorpopup/colorselector-cancelbutton":{alias:eI,include:eI,style:function(fL){return {icon:dB};
}},"table":{alias:eK,style:function(g){return {decorator:bP};
}},"table-header":{},"table/statusbar":{style:function(hq){return {decorator:dU,padding:[0,2]};
}},"table/column-button":{alias:eM,style:function(hm){return {decorator:bW,padding:3,icon:bh};
}},"table-column-reset-button":{include:dh,alias:dh,style:function(){return {icon:ei};
}},"table-scroller":eK,"table-scroller/scrollbar-x":eW,"table-scroller/scrollbar-y":eW,"table-scroller/header":{style:function(gJ){return {decorator:cK};
}},"table-scroller/pane":{style:function(fU){return {backgroundColor:cM};
}},"table-scroller/focus-indicator":{style:function(gj){return {decorator:cC};
}},"table-scroller/resize-line":{style:function(fO){return {backgroundColor:eB,width:2};
}},"table-header-cell":{alias:eL,style:function(b){return {minWidth:13,minHeight:20,padding:b.hovered?[3,4,2,4]:[3,4],decorator:b.hovered?dr:cy,sortIcon:b.sorted?(b.sortedAscending?dH:be):undefined};
}},"table-header-cell/label":{style:function(gl){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(ho){return {alignY:eE,alignX:bs};
}},"table-header-cell/icon":{style:function(fw){return {minWidth:0,alignY:eE,paddingRight:5};
}},"table-editor-textfield":{include:eq,style:function(hY){return {decorator:undefined,padding:[2,2],backgroundColor:eD};
}},"table-editor-selectbox":{include:ct,alias:ct,style:function(gz){return {padding:[0,2],backgroundColor:eD};
}},"table-editor-combobox":{include:bm,alias:bm,style:function(gI){return {decorator:undefined,backgroundColor:eD};
}},"progressive-table-header":{alias:eK,style:function(hv){return {decorator:bi};
}},"progressive-table-header-cell":{alias:eL,style:function(ig){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:cQ};
}},"app-header":{style:function(hj){return {font:eF,textColor:eH,padding:[8,12],decorator:cE};
}},"virtual-list":eN,"virtual-list/row-layer":cd,"row-layer":{style:function(hr){return {colorEven:ek,colorOdd:dR};
}},"column-layer":eK,"cell":{style:function(gT){return {textColor:gT.selected?eH:bv,padding:[3,6],font:cp};
}},"cell-string":dm,"cell-number":{include:dm,style:function(f){return {textAlign:bs};
}},"cell-image":dm,"cell-boolean":{include:dm,style:function(gn){return {iconTrue:cx,iconFalse:bC};
}},"cell-atom":dm,"cell-date":dm,"cell-html":dm,"htmlarea":{"include":eK,style:function(hU){return {backgroundColor:ek};
}}}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();
(function(){var m="_applyStyle",l="stretch",k="Integer",j="px",i=" ",h="repeat",g="round",f="shorthand",e="px ",d="sliceBottom",D=";'></div>",C="<div style='",B="qx.debug",A="sliceLeft",z="sliceRight",y="repeatX",x="String",w="qx.ui.decoration.css3.BorderImage",v="border-box",u="",s='") ',t="sliceTop",q='url("',r="hidden",o="on",p="repeatY",n="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,construct:function(H,I){qx.ui.decoration.Abstract.call(this);
if(H!=null){this.setBorderImage(H);
}
if(I!=null){this.setSlice(I);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:x,nullable:true,apply:m},sliceTop:{check:k,init:0,apply:m},sliceRight:{check:k,init:0,apply:m},sliceBottom:{check:k,init:0,apply:m},sliceLeft:{check:k,init:0,apply:m},slice:{group:[t,z,d,A],mode:f},repeatX:{check:[l,h,g],init:l,apply:m},repeatY:{check:[l,h,g],init:l,apply:m},repeat:{group:[y,p],mode:f}},members:{__lN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lN;
},getMarkup:function(){if(this.__lN){return this.__lN;
}var E=this._resolveImageUrl(this.getBorderImage());
var F=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var G=[this.getRepeatX(),this.getRepeatY()].join(i);
this.__lN=[C,qx.bom.element.Style.compile({"borderImage":q+E+s+F.join(i)+i+G,position:n,lineHeight:0,fontSize:0,overflow:r,boxSizing:v,borderWidth:F.join(e)+j}),D].join(u);
return this.__lN;
},resize:function(a,b,c){a.style.width=b+j;
a.style.height=c+j;
},tint:function(K,L){},_applyStyle:function(){if(qx.core.Variant.isSet(B,o)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__lN=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="on";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(K,L){qx.ui.decoration.Abstract.call(this);
if(K!=null){this.setBaseImage(K);
}
if(L!=null){this.setInsets(L);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__lO:null,__lP:null,__lQ:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lO;
},getMarkup:function(){if(this.__lO){return this.__lO;
}var S=qx.bom.element.Decoration;
var T=this.__lP;
var U=this.__lQ;
var V=[];
V.push(u);
V.push(S.create(T.tl,g,{top:0,left:0}));
V.push(S.create(T.t,f,{top:0,left:U.left+j}));
V.push(S.create(T.tr,g,{top:0,right:0}));
V.push(S.create(T.bl,g,{bottom:0,left:0}));
V.push(S.create(T.b,f,{bottom:0,left:U.left+j}));
V.push(S.create(T.br,g,{bottom:0,right:0}));
V.push(S.create(T.l,e,{top:U.top+j,left:0}));
V.push(S.create(T.c,a,{top:U.top+j,left:U.left+j}));
V.push(S.create(T.r,e,{top:U.top+j,right:0}));
V.push(b);
return this.__lO=V.join(o);
},resize:function(O,P,Q){var R=this.__lQ;
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

if(qx.core.Variant.isSet(z,k)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(P%2==1){O.childNodes[2].style.marginRight=h;
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
}}}},tint:function(I,J){},_applyBaseImage:function(A,B){if(qx.core.Variant.isSet(t,l)){if(this.__lO){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(A){var F=this._resolveImageUrl(A);
var G=/(.*)(\.[a-z]+)$/.exec(F);
var E=G[1];
var D=G[2];
var C=this.__lP={tl:E+w+D,t:E+x+D,tr:E+d+D,bl:E+p+D,b:E+r+D,br:E+y+D,l:E+c+D,c:E+n+D,r:E+v+D};
this.__lQ=this._computeEdgeSizes(C);
}},_resolveImageUrl:function(H){return qx.util.AliasManager.getInstance().resolve(H);
},_computeEdgeSizes:function(M){var N=qx.util.ResourceManager.getInstance();
return {top:N.getImageHeight(M.t),bottom:N.getImageHeight(M.b),left:N.getImageWidth(M.l),right:N.getImageWidth(M.r)};
}},destruct:function(){this.__lO=this.__lP=this.__lQ=null;
}});
})();


qx.$$loader.init();

