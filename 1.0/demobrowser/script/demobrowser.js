(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["demobrowser:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"8effa8732dcf"},
  boot : "boot",
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
}

qx.$$loader.signalStartup = function () {
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
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['8effa8732dcf']={"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"}};
(function(){var k=".",j="()",h="[Class ",g=".prototype",f="toString",e="qx.Bootstrap",d="]",c="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return h+this.classname+d;
},createNamespace:function(name,s){var u=name.split(k);
var parent=window;
var t=u[0];

for(var i=0,v=u.length-1;i<v;i++,t=u[i]){if(!parent[t]){parent=parent[t]={};
}else{parent=parent[t];
}}parent[t]=s;
return t;
},setDisplayName:function(a,b,name){a.displayName=b+k+name+j;
},setDisplayNames:function(w,x){for(var name in w){var y=w[name];

if(y instanceof Function){y.displayName=x+k+name+j;
}}},define:function(name,l){if(!l){var l={statics:{}};
}var q;
var o=null;
qx.Bootstrap.setDisplayNames(l.statics,name);

if(l.members){qx.Bootstrap.setDisplayNames(l.members,name+g);
q=l.construct||new Function;
var m=l.statics;

for(var n in m){q[n]=m[n];
}o=q.prototype;
var r=l.members;

for(var n in r){o[n]=r[n];
}}else{q=l.statics||{};
}var p=this.createNamespace(name,q);
q.name=q.classname=name;
q.basename=p;
q.$$type=c;
if(!q.hasOwnProperty(f)){q.toString=this.genericToString;
}if(l.defer){l.defer(q,o);
}qx.Bootstrap.$$registry[name]=l.statics;
return q;
}};
qx.Bootstrap.define(e,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var p="qx.allowUrlSettings",o="&",n="qx.core.Setting",m="qx.allowUrlVariants",l="qx.propertyDebugLevel",k="qxsetting",j=":",h=".";
qx.Bootstrap.define(n,{statics:{__dz:{},define:function(f,g){if(g===undefined){throw new Error('Default value of setting "'+f+'" must be defined!');
}
if(!this.__dz[f]){this.__dz[f]={};
}else if(this.__dz[f].defaultValue!==undefined){throw new Error('Setting "'+f+'" is already defined!');
}this.__dz[f].defaultValue=g;
},get:function(q){var r=this.__dz[q];

if(r===undefined){throw new Error('Setting "'+q+'" is not defined.');
}
if(r.value!==undefined){return r.value;
}return r.defaultValue;
},set:function(c,d){if((c.split(h)).length<2){throw new Error('Malformed settings key "'+c+'". Must be following the schema "namespace.key".');
}
if(!this.__dz[c]){this.__dz[c]={};
}this.__dz[c].value=d;
},__dA:function(){if(window.qxsettings){for(var e in window.qxsettings){this.set(e,window.qxsettings[e]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__dB();
}},__dB:function(){if(this.get(p)!=true){return;
}var b=document.location.search.slice(1).split(o);

for(var i=0;i<b.length;i++){var a=b[i].split(j);

if(a.length!=3||a[0]!=k){continue;
}this.set(a[1],decodeURIComponent(a[2]));
}}},defer:function(s){s.define(p,false);
s.define(m,false);
s.define(l,0);
s.__dA();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dy:function(){var t=d;
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
window.alert("Unsupported client: "+w+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=z;
this.UNKNOWN_VERSION=v;
this.NAME=t;
this.FULLVERSION=x;
this.VERSION=parseFloat(x);
}},defer:function(A){A.__dy();
}});
})();
(function(){var C="on",B="qx.debug",A="off",z="|",y="default",x="object",w="&",u="qx.aspects",t="$",s="qx.allowUrlVariants",k="qx.client",r="qx.dynlocale",o="webkit",j="qxvariant",h="opera",n=":",m=".",p="qx.core.Variant",g="mshtml",q="gecko";
qx.Bootstrap.define(p,{statics:{__jk:{},__jl:{},compilerIsSet:function(){return true;
},define:function(O,P,Q){if(qx.core.Variant.compilerIsSet(B,C)){if(!this.__jo(P)){throw new Error('Allowed values of variant "'+O+'" must be defined!');
}
if(Q===undefined){throw new Error('Default value of variant "'+O+'" must be defined!');
}}
if(!this.__jk[O]){this.__jk[O]={};
}else if(qx.core.Variant.compilerIsSet(B,C)){if(this.__jk[O].defaultValue!==undefined){throw new Error('Variant "'+O+'" is already defined!');
}}this.__jk[O].allowedValues=P;
this.__jk[O].defaultValue=Q;
},get:function(b){var c=this.__jk[b];

if(qx.core.Variant.compilerIsSet(B,C)){if(c===undefined){throw new Error('Variant "'+b+'" is not defined.');
}}
if(c.value!==undefined){return c.value;
}return c.defaultValue;
},__jm:function(){if(window.qxvariants){for(var N in qxvariants){if(qx.core.Variant.compilerIsSet(B,C)){if((N.split(m)).length<2){throw new Error('Malformed settings key "'+N+'". Must be following the schema "namespace.key".');
}}
if(!this.__jk[N]){this.__jk[N]={};
}this.__jk[N].value=qxvariants[N];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(a){}this.__jn(this.__jk);
}},__jn:function(){if(qx.core.Setting.get(s)!=true){return;
}var d=document.location.search.slice(1).split(w);

for(var i=0;i<d.length;i++){var e=d[i].split(n);

if(e.length!=3||e[0]!=j){continue;
}var f=e[1];

if(!this.__jk[f]){this.__jk[f]={};
}this.__jk[f].value=decodeURIComponent(e[2]);
}},select:function(I,J){if(qx.core.Variant.compilerIsSet(B,C)){if(!this.__jp(this.__jk[I])){throw new Error("Variant \""+I+"\" is not defined");
}
if(!this.__jp(J)){throw new Error("the second parameter must be a map!");
}}
for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[y]!==undefined){return J[y];
}
if(qx.core.Variant.compilerIsSet(B,C)){throw new Error('No match for variant "'+I+'" in variants ['+qx.lang.Object.getKeysAsString(J)+'] found, and no default ("default") given');
}},isSet:function(D,E){var F=D+t+E;

if(this.__jl[F]!==undefined){return this.__jl[F];
}var H=false;
if(E.indexOf(z)<0){H=this.get(D)===E;
}else{var G=E.split(z);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__jl[F]=H;
return H;
},__jo:function(v){return typeof v===x&&v!==null&&v instanceof Array;
},__jp:function(v){return typeof v===x&&v!==null&&!(v instanceof Array);
},__jq:function(L,M){for(var i=0,l=L.length;i<l;i++){if(L[i]==M){return true;
}}return false;
}},defer:function(R){R.define(k,[q,g,h,o],qx.bom.client.Engine.NAME);
R.define(B,[C,A],C);
R.define(u,[C,A],A);
R.define(r,[C,A],C);
R.__jm();
}});
})();
(function(){var y="qx.debug",x="on",w="Invalid argument 'map'",v="qx.client",u="Invalid argument 'source'",t="Invalid argument 'target'",s='"',r="Invalid argument 'minLength'",q="valueOf",p="toLocaleString",g="isPrototypeOf",o="",k="toString",f='\", "',e="Invalid argument 'array'",j="qx.lang.Object",h="hasOwnProperty",m="function",d="undefined",n="object";
qx.Bootstrap.define(j,{statics:{empty:function(bq){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bq,w);
}
for(var br in bq){if(bq.hasOwnProperty(br)){delete bq[br];
}}},isEmpty:qx.core.Variant.select(v,{"gecko":function(ba){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(ba,w);
}return ba.__count__===0;
},"default":function(X){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(X,w);
}
for(var Y in X){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(v,{"gecko":function(b,c){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(b,w);
qx.core.Assert&&qx.core.Assert.assertInteger(c,r);
}return b.__count__>=c;
},"default":function(Q,R){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(Q,w);
qx.core.Assert&&qx.core.Assert.assertInteger(R,r);
}
if(R<=0){return true;
}var length=0;

for(var S in Q){if((++length)>=R){return true;
}}return false;
}}),getLength:qx.core.Variant.select(v,{"gecko":function(bp){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bp,w);
}return bp.__count__;
},"default":function(bk){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bk,w);
}var length=0;

for(var bl in bk){length++;
}return length;
}}),_shadowedKeys:[g,h,p,k,q],getKeys:qx.core.Variant.select(v,{"mshtml":function(bd){var be=[];

for(var bg in bd){be.push(bg);
}var bf=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bf.call(bd,a[i])){be.push(a[i]);
}}return be;
},"default":function(G){var H=[];

for(var I in G){H.push(I);
}return H;
}}),getKeysAsString:function(z){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(z,w);
}var A=qx.lang.Object.getKeys(z);

if(A.length==0){return o;
}return s+A.join(f)+s;
},getValues:function(bm){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bm,w);
}var bo=[];
var bn=this.getKeys(bm);

for(var i=0,l=bn.length;i<l;i++){bo.push(bm[bn[i]]);
}return bo;
},mergeWith:function(J,K,L){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(J,t);
qx.core.Assert&&qx.core.Assert.assertMap(K,u);
}
if(L===undefined){L=true;
}
for(var M in K){if(L||J[M]===undefined){J[M]=K[M];
}}return J;
},carefullyMergeWith:function(T,U){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(T,t);
qx.core.Assert&&qx.core.Assert.assertMap(U,u);
}return qx.lang.Object.mergeWith(T,U,false);
},merge:function(N,O){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(N,t);
}var P=arguments.length;

for(var i=1;i<P;i++){qx.lang.Object.mergeWith(N,arguments[i]);
}return N;
},clone:function(bh){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bh,u);
}var bi={};

for(var bj in bh){bi[bj]=bh[bj];
}return bi;
},invert:function(B){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(B,w);
}var C={};

for(var D in B){C[B[D].toString()]=D;
}return C;
},getKeyFromValue:function(bs,bt){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bs,w);
}
for(var bu in bs){if(bs.hasOwnProperty(bu)&&bs[bu]===bt){return bu;
}}return null;
},contains:function(bb,bc){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(bb,w);
}return this.getKeyFromValue(bb,bc)!==null;
},select:function(E,F){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertMap(F,w);
}return F[E];
},fromArray:function(V){if(qx.core.Variant.isSet(y,x)){qx.core.Assert&&qx.core.Assert.assertArray(V,e);
}var W={};

for(var i=0,l=V.length;i<l;i++){if(qx.core.Variant.isSet(y,x)){switch(typeof V[i]){case n:case m:case d:throw new Error("Could not convert complex objects like "+V[i]+" at array index "+i+" to map syntax");
}}W[V[i].toString()]=true;
}return W;
}}});
})();
(function(){var k="Function",j="Boolean",i="Error",h="Number",g="Array",f="Date",e="RegExp",d="String",c="Object",b="qx.lang.Type",a="string";
qx.Bootstrap.define(b,{statics:{__iF:{"[object String]":d,"[object Array]":g,"[object Object]":c,"[object RegExp]":e,"[object Number]":h,"[object Boolean]":j,"[object Date]":f,"[object Function]":k,"[object Error]":i},getClass:function(n){var o=Object.prototype.toString.call(n);
return (this.__iF[o]||o.slice(8,-1));
},isString:function(v){return (v!==null&&(typeof v===a||this.getClass(v)==d||v instanceof String||(!!v&&!!v.$$isString)));
},isArray:function(s){return (s!==null&&(s instanceof Array||(s&&qx.Class.hasInterface(s.constructor,qx.data.IListData))||this.getClass(s)==g||(!!s&&!!s.$$isArray)));
},isObject:function(m){return (m!==undefined&&m!==null&&this.getClass(m)==c);
},isRegExp:function(q){return this.getClass(q)==e;
},isNumber:function(p){return (p!==null&&(this.getClass(p)==h||p instanceof Number));
},isBoolean:function(r){return (r!==null&&(this.getClass(r)==j||r instanceof Boolean));
},isDate:function(t){return (t!==null&&(this.getClass(t)==f||t instanceof Date));
},isError:function(u){return (u!==null&&(this.getClass(u)==i||u instanceof Error));
},isFunction:function(l){return this.getClass(l)==k;
}}});
})();
(function(){var g="qx.core.Aspect",f="before",e="*",d="static";
qx.Bootstrap.define(g,{statics:{__iJ:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__iJ;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==e)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var h=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,h);
}return h;
};

if(l!==d){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(a,b,c,name){this.__iJ.push({fcn:a,pos:b===f?-1:1,type:c,name:name});
}}});
})();
(function(){var ce="qx.debug",cd="on",cc="object",cb=".",ca="qx.aspects",bY="static",bX="function",bW="string",bV="abstract",bU="singleton",cD="constructor",cC="_",cB=".prototype",cA="$$init_",cz="extend",cy="init",cx="qx.event.type.Data",cw="refine",cv="members",cu="variants",cl="off",cm="properties",cj="statics",ck="toString",ch="events",ci="]",cf="Class",cg="Interface",cn="qx.Class",co="Mixin",cq="settings",cp="[Class ",cs="destructor",cr="destruct",ct="member";
qx.Bootstrap.define(cn,{statics:{define:function(name,bI){if(!bI){var bI={};
}if(bI.include&&!(bI.include instanceof Array)){bI.include=[bI.include];
}if(bI.implement&&!(bI.implement instanceof Array)){bI.implement=[bI.implement];
}if(!bI.hasOwnProperty(cz)&&!bI.type){bI.type=bY;
}if(qx.core.Variant.isSet(ce,cd)){this.__br(name,bI);
}var bK=this.__bt(name,bI.type,bI.extend,bI.statics,bI.construct,bI.destruct);
if(bI.extend){if(bI.properties){this.__bv(bK,bI.properties,true);
}if(bI.members){this.__bx(bK,bI.members,true,true,false);
}if(bI.events){this.__bu(bK,bI.events,true);
}if(bI.include){for(var i=0,l=bI.include.length;i<l;i++){this.__bA(bK,bI.include[i],false);
}}}if(bI.settings){for(var bJ in bI.settings){qx.core.Setting.define(bJ,bI.settings[bJ]);
}}if(bI.variants){for(var bJ in bI.variants){qx.core.Variant.define(bJ,bI.variants[bJ].allowedValues,bI.variants[bJ].defaultValue);
}}if(bI.implement){for(var i=0,l=bI.implement.length;i<l;i++){this.__bz(bK,bI.implement[i]);
}}
if(qx.core.Variant.isSet(ce,cd)){this.__bs(bK);
}if(bI.defer){bI.defer.self=bK;
bI.defer(bK,bK.prototype,{add:function(name,j){var k={};
k[name]=j;
qx.Class.__bv(bK,k,true);
}});
}return bK;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(o,p){if(qx.core.Variant.isSet(ce,cd)){if(!p){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+o.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(p,o);
}qx.Class.__bA(o,p,false);
},patch:function(H,I){if(qx.core.Variant.isSet(ce,cd)){if(!I){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+H.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(I,H);
}qx.Class.__bA(H,I,true);
},isSubClassOf:function(q,r){if(!q){return false;
}
if(q==r){return true;
}
if(q.prototype instanceof r){return true;
}return false;
},getPropertyDefinition:function(z,name){while(z){if(z.$$properties&&z.$$properties[name]){return z.$$properties[name];
}z=z.superclass;
}return null;
},getProperties:function(cN){var cO=[];

while(cN){if(cN.$$properties){cO.push.apply(cO,qx.lang.Object.getKeys(cN.$$properties));
}cN=cN.superclass;
}return cO;
},getByProperty:function(bL,name){while(bL){if(bL.$$properties&&bL.$$properties[name]){return bL;
}bL=bL.superclass;
}return null;
},hasProperty:function(y,name){return !!this.getPropertyDefinition(y,name);
},getEventType:function(bH,name){var bH=bH.constructor;

while(bH.superclass){if(bH.$$events&&bH.$$events[name]!==undefined){return bH.$$events[name];
}bH=bH.superclass;
}return null;
},supportsEvent:function(A,name){return !!this.getEventType(A,name);
},hasOwnMixin:function(m,n){return m.$$includes&&m.$$includes.indexOf(n)!==-1;
},getByMixin:function(bh,bi){var bj,i,l;

while(bh){if(bh.$$includes){bj=bh.$$flatIncludes;

for(i=0,l=bj.length;i<l;i++){if(bj[i]===bi){return bh;
}}}bh=bh.superclass;
}return null;
},getMixins:function(bF){var bG=[];

while(bF){if(bF.$$includes){bG.push.apply(bG,bF.$$flatIncludes);
}bF=bF.superclass;
}return bG;
},hasMixin:function(bm,bn){return !!this.getByMixin(bm,bn);
},hasOwnInterface:function(bk,bl){return bk.$$implements&&bk.$$implements.indexOf(bl)!==-1;
},getByInterface:function(bv,bw){var bx,i,l;

while(bv){if(bv.$$implements){bx=bv.$$flatImplements;

for(i=0,l=bx.length;i<l;i++){if(bx[i]===bw){return bv;
}}}bv=bv.superclass;
}return null;
},getInterfaces:function(K){var L=[];

while(K){if(K.$$implements){L.push.apply(L,K.$$flatImplements);
}K=K.superclass;
}return L;
},hasInterface:function(B,C){return !!this.getByInterface(B,C);
},implementsInterface:function(s,t){var u=s.constructor;

if(this.hasInterface(u,t)){return true;
}
try{qx.Interface.assertObject(s,t);
return true;
}catch(v){}
try{qx.Interface.assert(u,t,false);
return true;
}catch(b){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return cp+this.classname+ci;
},$$registry:qx.Bootstrap.$$registry,__bp:qx.core.Variant.select(ce,{"on":{"type":bW,"extend":bX,"implement":cc,"include":cc,"construct":bX,"statics":cc,"properties":cc,"members":cc,"settings":cc,"variants":cc,"events":cc,"defer":bX,"destruct":bX},"default":null}),__bq:qx.core.Variant.select(ce,{"on":{"type":bW,"statics":cc,"settings":cc,"variants":cc,"defer":bX},"default":null}),__br:qx.core.Variant.select(ce,{"on":function(name,D){if(D.type&&!(D.type===bY||D.type===bV||D.type===bU)){throw new Error('Invalid type "'+D.type+'" definition for class "'+name+'"!');
}if(D.type&&D.type!==bY&&!D.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var G=D.type===bY?this.__bq:this.__bp;

for(var F in D){if(!G[F]){throw new Error('The configuration key "'+F+'" in class "'+name+'" is not allowed!');
}
if(D[F]==null){throw new Error('Invalid key "'+F+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof D[F]!==G[F]){throw new Error('Invalid type of key "'+F+'" in class "'+name+'"! The type of the key must be "'+G[F]+'"!');
}}var E=[cj,cm,cv,cq,cu,ch];

for(var i=0,l=E.length;i<l;i++){var F=E[i];

if(D[F]!==undefined&&(D[F].$$hash!==undefined||!qx.lang.Type.isObject(D[F]))){throw new Error('Invalid key "'+F+'" in class "'+name+'"! The value needs to be a map!');
}}if(D.include){if(D.include instanceof Array){for(var i=0,a=D.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==co){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(D.implement){if(D.implement instanceof Array){for(var i=0,a=D.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==cg){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(D.include){try{qx.Mixin.checkCompatibility(D.include);
}catch(J){throw new Error('Error in include definition of class "'+name+'"! '+J.message);
}}if(D.settings){for(var F in D.settings){if(F.substr(0,F.indexOf(cb))!=name.substr(0,name.indexOf(cb))){throw new Error('Forbidden setting "'+F+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(D.variants){for(var F in D.variants){if(F.substr(0,F.indexOf(cb))!=name.substr(0,name.indexOf(cb))){throw new Error('Forbidden variant "'+F+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__bs:qx.core.Variant.select(ce,{"on":function(bo){var bq=bo.superclass;

while(bq){if(bq.$$classtype!==bV){break;
}var bp=bq.$$implements;

if(bp){for(var i=0;i<bp.length;i++){qx.Interface.assert(bo,bp[i],true);
}}bq=bq.superclass;
}},"default":function(){}}),__bt:function(name,M,N,O,P,Q){var V;

if(!N&&qx.core.Variant.isSet(ca,cl)){V=O||{};
qx.Bootstrap.setDisplayNames(V,name);
}else{V={};

if(N){if(!P){P=this.__bB();
}V=this.__bD(P,name,M);
qx.Bootstrap.setDisplayName(P,name,cD);
}if(O){qx.Bootstrap.setDisplayNames(O,name);
var W;

for(var i=0,a=qx.lang.Object.getKeys(O),l=a.length;i<l;i++){W=a[i];
var S=O[W];

if(qx.core.Variant.isSet(ca,cd)){if(S instanceof Function){S=qx.core.Aspect.wrap(name+cb+W,S,bY);
}V[W]=S;
}else{V[W]=S;
}}}}var U=qx.Bootstrap.createNamespace(name,V,false);
V.name=V.classname=name;
V.basename=U;
V.$$type=cf;

if(M){V.$$classtype=M;
}if(!V.hasOwnProperty(ck)){V.toString=this.genericToString;
}
if(N){var X=N.prototype;
var R=this.__bC();
R.prototype=X;
var T=new R;
V.prototype=T;
T.name=T.classname=name;
T.basename=U;
P.base=V.superclass=N;
P.self=V.constructor=T.constructor=V;
if(Q){if(qx.core.Variant.isSet(ca,cd)){Q=qx.core.Aspect.wrap(name,Q,cs);
}V.$$destructor=Q;
qx.Bootstrap.setDisplayName(Q,name,cr);
}}this.$$registry[name]=V;
return V;
},__bu:function(br,bs,bt){if(qx.core.Variant.isSet(ce,cd)){if(typeof bs!==cc||bs instanceof Array){throw new Error(br.classname+": the events must be defined as map!");
}
for(var bu in bs){if(typeof bs[bu]!==bW){throw new Error(br.classname+"/"+bu+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(br.$$events&&bt!==true){for(var bu in bs){if(br.$$events[bu]!==undefined&&br.$$events[bu]!==bs[bu]){throw new Error(br.classname+"/"+bu+": the event value/type cannot be changed from "+br.$$events[bu]+" to "+bs[bu]);
}}}}
if(br.$$events){for(var bu in bs){br.$$events[bu]=bs[bu];
}}else{br.$$events=bs;
}},__bv:function(cI,cJ,cK){var cM;

if(cK===undefined){cK=false;
}var cL=!!cI.$$propertiesAttached;

for(var name in cJ){cM=cJ[name];
if(qx.core.Variant.isSet(ce,cd)){this.__bw(cI,name,cM,cK);
}cM.name=name;
if(!cM.refine){if(cI.$$properties===undefined){cI.$$properties={};
}cI.$$properties[name]=cM;
}if(cM.init!==undefined){cI.prototype[cA+name]=cM.init;
}if(cM.event!==undefined){var event={};
event[cM.event]=cx;
this.__bu(cI,event,cK);
}if(cM.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(cL){qx.core.Property.attachMethods(cI,name,cM);
}}},__bw:qx.core.Variant.select(ce,{"on":function(Y,name,ba,bb){var bd=this.hasProperty(Y,name);

if(bd){var bc=this.getPropertyDefinition(Y,name);

if(ba.refine&&bc.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+Y.classname+"'.");
}}
if(!bd&&ba.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+Y.classname+"'!");
}
if(bd&&!bb){throw new Error("Class "+Y.classname+" already has a property: "+name+"!");
}
if(bd&&bb){if(!ba.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+Y.classname+', original class: '+this.getByProperty(Y,name).classname+'.');
}
for(var be in ba){if(be!==cy&&be!==cw){throw new Error("Class "+Y.classname+" could not refine property: "+name+"! Key: "+be+" could not be refined!");
}}}var bf=ba.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var be in ba){if(bf[be]===undefined){throw new Error('The configuration key "'+be+'" of property "'+name+'" in class "'+Y.classname+'" is not allowed!');
}
if(ba[be]===undefined){throw new Error('Invalid key "'+be+'" of property "'+name+'" in class "'+Y.classname+'"! The value is undefined: '+ba[be]);
}
if(bf[be]!==null&&typeof ba[be]!==bf[be]){throw new Error('Invalid type of key "'+be+'" of property "'+name+'" in class "'+Y.classname+'"! The type of the key must be "'+bf[be]+'"!');
}}
if(ba.transform!=null){if(!(typeof ba.transform==bW)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+Y.classname+'"! Needs to be a String.');
}}
if(ba.check!=null){if(!qx.lang.Type.isString(ba.check)&&!qx.lang.Type.isArray(ba.check)&&!qx.lang.Type.isFunction(ba.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+Y.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__bx:function(bM,bN,bO,bP,bQ){var bR=bM.prototype;
var bT,bS;
qx.Bootstrap.setDisplayNames(bN,bM.classname+cB);

for(var i=0,a=qx.lang.Object.getKeys(bN),l=a.length;i<l;i++){bT=a[i];
bS=bN[bT];

if(qx.core.Variant.isSet(ce,cd)){if(bR[bT]!==undefined&&bT.charAt(0)==cC&&bT.charAt(1)==cC){throw new Error('Overwriting private member "'+bT+'" of Class "'+bM.classname+'" is not allowed!');
}
if(bO!==true&&bR.hasOwnProperty(bT)){throw new Error('Overwriting member "'+bT+'" of Class "'+bM.classname+'" is not allowed!');
}}if(bP!==false&&bS instanceof Function&&bS.$$type==null){if(bQ==true){bS=this.__by(bS,bR[bT]);
}else{if(bR[bT]){bS.base=bR[bT];
}bS.self=bM;
}
if(qx.core.Variant.isSet(ca,cd)){bS=qx.core.Aspect.wrap(bM.classname+cb+bT,bS,ct);
}}bR[bT]=bS;
}},__by:function(w,x){if(x){return function(){var bz=w.base;
w.base=x;
var by=w.apply(this,arguments);
w.base=bz;
return by;
};
}else{return w;
}},__bz:function(c,d){if(qx.core.Variant.isSet(ce,cd)){if(!c||!d){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(c,d)){throw new Error('Interface "'+d.name+'" is already used by Class "'+c.classname+'!');
}if(c.$$classtype!==bV){qx.Interface.assert(c,d,true);
}}var e=qx.Interface.flatten([d]);

if(c.$$implements){c.$$implements.push(d);
c.$$flatImplements.push.apply(c.$$flatImplements,e);
}else{c.$$implements=[d];
c.$$flatImplements=e;
}},__bA:function(bA,bB,bC){if(qx.core.Variant.isSet(ce,cd)){if(!bA||!bB){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bA,bB)){return;
}var bE=qx.Mixin.flatten([bB]);
var bD;

for(var i=0,l=bE.length;i<l;i++){bD=bE[i];
if(bD.$$events){this.__bu(bA,bD.$$events,bC);
}if(bD.$$properties){this.__bv(bA,bD.$$properties,bC);
}if(bD.$$members){this.__bx(bA,bD.$$members,bC,bC,bC);
}}if(bA.$$includes){bA.$$includes.push(bB);
bA.$$flatIncludes.push.apply(bA.$$flatIncludes,bE);
}else{bA.$$includes=[bB];
bA.$$flatIncludes=bE;
}},__bB:function(){function bg(){arguments.callee.base.apply(this,arguments);
}return bg;
},__bC:function(){return function(){};
},__bD:function(cE,name,cF){var cH=function(){var h=arguments.callee.constructor;

if(qx.core.Variant.isSet(ce,cd)){if(!(this instanceof h)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cF===bV){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cF===bU){if(!h.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}if(!h.$$propertiesAttached){qx.core.Property.attach(h);
}var g=h.$$original.apply(this,arguments);
if(h.$$includes){var f=h.$$flatIncludes;

for(var i=0,l=f.length;i<l;i++){if(f[i].$$constructor){f[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return g;
};

if(qx.core.Variant.isSet(ca,cd)){var cG=qx.core.Aspect.wrap(name,cH,cD);
cH.$$original=cE;
cH.constructor=cG;
cH=cG;
}if(cF===bU){cH.getInstance=this.getInstance;
}cH.$$original=cE;
cE.wrapper=cH;
return cH;
}},defer:function(cP){if(qx.core.Variant.isSet(ca,cd)){for(var cQ in qx.Bootstrap.$$registry){var cP=qx.Bootstrap.$$registry[cQ];

for(var cR in cP){if(cP[cR] instanceof Function){cP[cR]=qx.core.Aspect.wrap(cQ+cb+cR,cP[cR],bY);
}}}}}});
})();
(function(){var u="qx.client",t="on",s="function",r="mousedown",q="qx.bom.Event",p="return;",o="mouseover",n="HTMLEvents";
qx.Bootstrap.define(q,{statics:{addNativeListener:qx.core.Variant.select(u,{"mshtml":function(h,i,j){h.attachEvent(t+i,j);
},"default":function(v,w,x){v.addEventListener(w,x,false);
}}),removeNativeListener:qx.core.Variant.select(u,{"mshtml":function(y,z,A){try{y.detachEvent(t+z,A);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(d,f,g){d.removeEventListener(f,g,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(u,{"mshtml":function(e){if(e.type===o){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(u,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==r&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(m){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(a,b){if(document.createEventObject){var c=document.createEventObject();
return a.fireEvent(t+b,c);
}else{var c=document.createEvent(n);
c.initEvent(b,true,true);
return !a.dispatchEvent(c);
}},supportsEvent:qx.core.Variant.select(u,{"webkit":function(k,l){return k.hasOwnProperty(t+l);
},"default":function(B,C){var D=t+C;
var E=(D in B);

if(!E){E=typeof B[D]==s;

if(!E&&B.setAttribute){B.setAttribute(D,p);
E=typeof B[D]==s;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var ce="qx.debug",cd="on",cc="|bubble",cb="|capture",ca="|",bY="': ",bX="'",bW="_",bV="Invalid Target.",bU="Invalid event type.",cC="Invalid event target.",cB=" from the target '",cA="Invalid callback function",cz="unload",cy="Failed to remove event listener for id '",cx="Invalid context for callback.",cw="Invalid capture flag.",cv="Failed to add event listener for type '",cu="__er",ct="UNKNOWN_",cl="__es",cm="capture",cj="qx.event.Manager",ck="Could not dispatch event '",ch="DOM_",ci="QX_",cf=" to the target '",cg="Failed to remove event listener for type '",cn="Invalid capture falg.",co="c",cq="Invalid id type.",cp="' on target '",cs="WIN_",cr="Invalid event object.";
qx.Bootstrap.define(cj,{construct:function(cP,cQ){this.__en=cP;
this.__eo=qx.core.ObjectRegistry.toHashCode(cP);
this.__ep=cQ;
if(cP.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cP,cz,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cP,cz,arguments.callee);
self.dispose();
}));
}this.__eq={};
this.__er={};
this.__es={};
this.__et={};
},statics:{__eu:0,getNextUniqueId:function(){return (this.__eu++).toString(36);
}},members:{__ep:null,__eq:null,__es:null,__ev:null,__er:null,__et:null,__en:null,__eo:null,getWindow:function(){return this.__en;
},getWindowId:function(){return this.__eo;
},getHandler:function(br){var bs=this.__er[br.classname];

if(bs){return bs;
}return this.__er[br.classname]=new br(this);
},getDispatcher:function(cD){var cE=this.__es[cD.classname];

if(cE){return cE;
}return this.__es[cD.classname]=new cD(this,this.__ep);
},getListeners:function(bt,bu,bv){var bw=bt.$$hash||qx.core.ObjectRegistry.toHashCode(bt);
var by=this.__eq[bw];

if(!by){return null;
}var bz=bu+(bv?cb:cc);
var bx=by[bz];
return bx?bx.concat():null;
},serializeListeners:function(X){var bf=X.$$hash||qx.core.ObjectRegistry.toHashCode(X);
var bh=this.__eq[bf];
var bd=[];

if(bh){var bb,bg,Y,bc,be;

for(var ba in bh){bb=ba.indexOf(ca);
bg=ba.substring(0,bb);
Y=ba.charAt(bb+1)==co;
bc=bh[ba];

for(var i=0,l=bc.length;i<l;i++){be=bc[i];
bd.push({self:be.context,handler:be.handler,type:bg,capture:Y});
}}}return bd;
},toggleAttachedEvents:function(D,E){var J=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var L=this.__eq[J];

if(L){var G,K,F,H;

for(var I in L){G=I.indexOf(ca);
K=I.substring(0,G);
F=I.charCodeAt(G+1)===99;
H=L[I];

if(E){this.__ew(D,K,F);
}else{this.__ex(D,K,F);
}}}},hasListener:function(cR,cS,cT){if(qx.core.Variant.isSet(ce,cd)){if(cR==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+cR);
}}var cU=cR.$$hash||qx.core.ObjectRegistry.toHashCode(cR);
var cW=this.__eq[cU];

if(!cW){return false;
}var cX=cS+(cT?cb:cc);
var cV=cW[cX];
return cV&&cV.length>0;
},importListeners:function(bi,bj){if(qx.core.Variant.isSet(ce,cd)){if(bi==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bi);
}}var bp=bi.$$hash||qx.core.ObjectRegistry.toHashCode(bi);
var bq=this.__eq[bp]={};
var bm=qx.event.Manager;

for(var bk in bj){var bn=bj[bk];
var bo=bn.type+(bn.capture?cb:cc);
var bl=bq[bo];

if(!bl){bl=bq[bo]=[];
this.__ew(bi,bn.type,bn.capture);
}bl.push({handler:bn.listener,context:bn.self,unique:bn.unique||(bm.__eu++).toString(36)});
}},addListener:function(s,t,u,self,v){if(qx.core.Variant.isSet(ce,cd)){var z=cv+t+bX+cf+s.classname+bY;
qx.core.Assert.assertObject(s,z+bV);
qx.core.Assert.assertString(t,z+bU);
qx.core.Assert.assertFunction(u,z+cA);

if(v!==undefined){qx.core.Assert.assertBoolean(v,cw);
}}var A=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);
var C=this.__eq[A];

if(!C){C=this.__eq[A]={};
}var y=t+(v?cb:cc);
var x=C[y];

if(!x){x=C[y]=[];
}if(x.length===0){this.__ew(s,t,v);
}var B=(qx.event.Manager.__eu++).toString(36);
var w={handler:u,context:self,unique:B};
x.push(w);
return y+ca+B;
},findHandler:function(bA,bB){var bL=false,bE=false,bM=false;
var bK;

if(bA.nodeType===1){bL=true;
bK=ch+bA.tagName.toLowerCase()+bW+bB;
}else if(bA==this.__en){bE=true;
bK=cs+bB;
}else if(bA.classname){bM=true;
bK=ci+bA.classname+bW+bB;
}else{bK=ct+bA+bW+bB;
}var bG=this.__et;

if(bG[bK]){return bG[bK];
}var bJ=this.__ep.getHandlers();
var bF=qx.event.IEventHandler;
var bH,bI,bD,bC;

for(var i=0,l=bJ.length;i<l;i++){bH=bJ[i];
bD=bH.SUPPORTED_TYPES;

if(bD&&!bD[bB]){continue;
}bC=bH.TARGET_CHECK;

if(bC){if(!bL&&bC===bF.TARGET_DOMNODE){continue;
}else if(!bE&&bC===bF.TARGET_WINDOW){continue;
}else if(!bM&&bC===bF.TARGET_OBJECT){continue;
}}bI=this.getHandler(bJ[i]);

if(bH.IGNORE_CAN_HANDLE||bI.canHandleEvent(bA,bB)){bG[bK]=bI;
return bI;
}}return null;
},__ew:function(o,p,q){var r=this.findHandler(o,p);

if(r){r.registerEvent(o,p,q);
return;
}
if(qx.core.Variant.isSet(ce,cd)){qx.log.Logger.warn(this,"There is no event handler for the event '"+p+"' on target '"+o+"'!");
}},removeListener:function(cF,cG,cH,self,cI){if(qx.core.Variant.isSet(ce,cd)){var cM=cg+cG+bX+cB+cF.classname+bY;
qx.core.Assert.assertObject(cF,cM+bV);
qx.core.Assert.assertString(cG,cM+bU);
qx.core.Assert.assertFunction(cH,cM+cA);

if(self!==undefined){qx.core.Assert.assertObject(self,cx);
}
if(cI!==undefined){qx.core.Assert.assertBoolean(cI,cn);
}}var cN=cF.$$hash||qx.core.ObjectRegistry.toHashCode(cF);
var cO=this.__eq[cN];

if(!cO){return false;
}var cJ=cG+(cI?cb:cc);
var cK=cO[cJ];

if(!cK){return false;
}var cL;

for(var i=0,l=cK.length;i<l;i++){cL=cK[i];

if(cL.handler===cH&&cL.context===self){qx.lang.Array.removeAt(cK,i);

if(cK.length==0){this.__ex(cF,cG,cI);
}return true;
}}return false;
},removeListenerById:function(a,b){if(qx.core.Variant.isSet(ce,cd)){var h=cy+b+bX+cB+a.classname+bY;
qx.core.Assert.assertObject(a,h+bV);
qx.core.Assert.assertString(b,h+cq);
}var f=b.split(ca);
var m=f[0];
var c=f[1].charCodeAt(0)==99;
var k=f[2];
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var n=this.__eq[j];

if(!n){return false;
}var g=m+(c?cb:cc);
var e=n[g];

if(!e){return false;
}var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.unique===k){qx.lang.Array.removeAt(e,i);

if(e.length==0){this.__ex(a,m,c);
}return true;
}}return false;
},removeAllListeners:function(bN){var bR=bN.$$hash||qx.core.ObjectRegistry.toHashCode(bN);
var bT=this.__eq[bR];

if(!bT){return false;
}var bP,bS,bO;

for(var bQ in bT){if(bT[bQ].length>0){bP=bQ.split(ca);
bS=bP[0];
bO=bP[1]===cm;
this.__ex(bN,bS,bO);
}}delete this.__eq[bR];
return true;
},__ex:function(M,N,O){var P=this.findHandler(M,N);

if(P){P.unregisterEvent(M,N,O);
return;
}
if(qx.core.Variant.isSet(ce,cd)){qx.log.Logger.warn(this,"There is no event handler for the event '"+N+"' on target '"+M+"'!");
}},dispatchEvent:function(Q,event){if(qx.core.Variant.isSet(ce,cd)){var V=ck+event+cp+Q.classname+bY;
qx.core.Assert.assertNotUndefined(Q,V+cC);
qx.core.Assert.assertNotNull(Q,V+cC);
qx.core.Assert.assertInstance(event,qx.event.type.Event,V+cr);
}var W=event.getType();

if(!event.getBubbles()&&!this.hasListener(Q,W)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(Q);
}var U=this.__ep.getDispatchers();
var T;
var S=false;

for(var i=0,l=U.length;i<l;i++){T=this.getDispatcher(U[i]);
if(T.canDispatchEvent(Q,event,W)){T.dispatchEvent(Q,event,W);
S=true;
break;
}}
if(!S){qx.log.Logger.error(this,"No dispatcher can handle event of type "+W+" on "+Q);
return true;
}var R=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !R;
},dispose:function(){this.__ep.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cu);
qx.util.DisposeUtil.disposeMap(this,cl);
this.__eq=this.__en=this.__ev=null;
this.__ep=this.__et=null;
}}});
})();
(function(){var g="qx.dom.Node",f="qx.client",e="";
qx.Bootstrap.define(g,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(k){return k.nodeType===
this.DOCUMENT?k:
k.ownerDocument||k.document;
},getWindow:qx.core.Variant.select(f,{"mshtml":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(l){return this.getDocument(l).documentElement;
},getBodyElement:function(d){return this.getDocument(d).body;
},isNode:function(m){return !!(m&&m.nodeType!=null);
},isElement:function(t){return !!(t&&t.nodeType===this.ELEMENT);
},isDocument:function(s){return !!(s&&s.nodeType===this.DOCUMENT);
},isText:function(c){return !!(c&&c.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(q,r){if(!r||!q||!q.nodeName){return false;
}return r.toLowerCase()==qx.dom.Node.getName(q);
},getName:function(j){if(!j||!j.nodeName){return null;
}return j.nodeName.toLowerCase();
},getText:function(n){if(!n||!n.nodeType){return null;
}
switch(n.nodeType){case 1:var i,a=[],o=n.childNodes,length=o.length;

for(i=0;i<length;i++){a[i]=this.getText(o[i]);
}return a.join(e);
case 2:return n.nodeValue;
break;
case 3:return n.nodeValue;
break;
}return null;
}}});
})();
(function(){var D="qx.debug",C="on",B="The second parameter must be an array.",A="mshtml",z="The first parameter must be an array.",y="Parameter must be an array.",x="qx.client",w="[object Array]",v="qx.lang.Array",u="qx",s="number",t="string";
qx.Bootstrap.define(v,{statics:{toArray:function(bj,bk){return this.cast(bj,Array,bk);
},cast:function(bo,bp,bq){if(bo.constructor===bp){return bo;
}
if(qx.Class.hasInterface(bo,qx.data.IListData)){var bo=bo.toArray();
}var br=new bp;
if(qx.core.Variant.isSet(x,A)){if(bo.item){for(var i=bq||0,l=bo.length;i<l;i++){br.push(bo[i]);
}return br;
}}if(Object.prototype.toString.call(bo)===w&&bq==null){br.push.apply(br,bo);
}else{br.push.apply(br,Array.prototype.slice.call(bo,bq||0));
}return br;
},fromArguments:function(N,O){return Array.prototype.slice.call(N,O||0);
},fromCollection:function(bl){if(qx.core.Variant.isSet(x,A)){if(bl.item){var bm=[];

for(var i=0,l=bl.length;i<l;i++){bm[i]=bl[i];
}return bm;
}}return Array.prototype.slice.call(bl,0);
},fromShortHand:function(V){var X=V.length;
var W=qx.lang.Array.clone(V);
switch(X){case 1:W[1]=W[2]=W[3]=W[0];
break;
case 2:W[2]=W[0];
case 3:W[3]=W[1];
}return W;
},clone:function(E){return E.concat();
},insertAt:function(S,T,i){S.splice(i,0,T);
return S;
},insertBefore:function(P,Q,R){var i=P.indexOf(R);

if(i==-1){P.push(Q);
}else{P.splice(i,0,Q);
}return P;
},insertAfter:function(bt,bu,bv){var i=bt.indexOf(bv);

if(i==-1||i==(bt.length-1)){bt.push(bu);
}else{bt.splice(i+1,0,bu);
}return bt;
},removeAt:function(bs,i){return bs.splice(i,1)[0];
},removeAll:function(p){p.length=0;
return this;
},append:function(H,I){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertArray(H,z);
qx.core.Assert.assertArray(I,B);
}Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertArray(J,z);
qx.core.Assert.assertArray(K,B);
}
for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(q,r){var i=q.indexOf(r);

if(i!=-1){q.splice(i,1);
return r;
}},contains:function(F,G){return F.indexOf(G)!==-1;
},equals:function(bb,bc){var length=bb.length;

if(length!==bc.length){return false;
}
for(var i=0;i<length;i++){if(bb[i]!==bc[i]){return false;
}}return true;
},sum:function(Y){var ba=0;

for(var i=0,l=Y.length;i<l;i++){ba+=Y[i];
}return ba;
},max:function(bd){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertArray(bd,y);
}var i,bf=bd.length,be=bd[0];

for(i=1;i<bf;i++){if(bd[i]>be){be=bd[i];
}}return be===undefined?null:be;
},min:function(bg){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertArray(bg,y);
}var i,bi=bg.length,bh=bg[0];

for(i=1;i<bi;i++){if(bg[i]<bh){bh=bg[i];
}}return bh===undefined?null:bh;
},unique:function(a){var m=[],c={},f={},h={};
var g,b=0;
var n=u+qx.lang.Date.now();
var d=false,k=false,o=false;
for(var i=0,j=a.length;i<j;i++){g=a[i];
if(g===null){if(!d){d=true;
m.push(g);
}}else if(g===undefined){}else if(g===false){if(!k){k=true;
m.push(g);
}}else if(g===true){if(!o){o=true;
m.push(g);
}}else if(typeof g===t){if(!c[g]){c[g]=1;
m.push(g);
}}else if(typeof g===s){if(!f[g]){f[g]=1;
m.push(g);
}}else{e=g[n];

if(e==null){e=g[n]=b++;
}
if(!h[e]){h[e]=g;
m.push(g);
}}}for(var e in h){try{delete h[e][n];
}catch(U){try{h[e][n]=null;
}catch(bn){throw new Error("Cannot clean-up map entry doneObjects["+e+"]["+n+"]");
}}}return m;
}}});
})();
(function(){var x="()",w="qx.debug",v=".",u=".prototype.",t="on",s="Invalid parameter 'func'.",r='anonymous()',q="Trying to call a bound function with a disposed object as context: ",p=" :: ",o="qx.lang.Function",n=".constructor()";
qx.Bootstrap.define(o,{statics:{getCaller:function(F){return F.caller?F.caller.callee:F.callee.caller;
},getName:function(i){if(i.displayName){return i.displayName;
}
if(i.$$original||i.wrapper||i.classname){return i.classname+n;
}
if(i.$$mixin){for(var k in i.$$mixin.$$members){if(i.$$mixin.$$members[k]==i){return i.$$mixin.name+u+k+x;
}}for(var k in i.$$mixin){if(i.$$mixin[k]==i){return i.$$mixin.name+v+k+x;
}}}
if(i.self){var l=i.self.constructor;

if(l){for(var k in l.prototype){if(l.prototype[k]==i){return l.classname+u+k+x;
}}for(var k in l){if(l[k]==i){return l.classname+v+k+x;
}}}}var j=i.toString().match(/function\s*(\w*)\s*\(.*/);

if(j&&j.length>=1&&j[1]){return j[1]+x;
}return r;
},globalEval:function(m){if(window.execScript){return window.execScript(m);
}else{return eval.call(window,m);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(y,z){if(qx.core.Variant.isSet(w,t)){qx.core.Assert.assertFunction(y,s);
}if(!z){return y;
}if(!(z.self||z.args||z.delay!=null||z.periodical!=null||z.attempt)){return y;
}return function(event){if(qx.core.Variant.isSet(w,t)){if(z.self instanceof qx.core.Object){qx.core.Assert.assertFalse(z.self.isDisposed(),q+z.self.toString()+p+qx.lang.Function.getName(y));
}}var I=qx.lang.Array.fromArguments(arguments);
if(z.args){I=z.args.concat(I);
}
if(z.delay||z.periodical){var H=qx.event.GlobalError.observeMethod(function(){return y.apply(z.self||this,I);
});

if(z.delay){return window.setTimeout(H,z.delay);
}
if(z.periodical){return window.setInterval(H,z.periodical);
}}else if(z.attempt){var J=false;

try{J=y.apply(z.self||this,I);
}catch(a){}return J;
}else{return y.apply(z.self||this,I);
}};
},bind:function(D,self,E){return this.create(D,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(g,h){return this.create(g,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(K,self,L){if(arguments.length<3){return function(event){return K.call(self||this,event||window.event);
};
}else{var M=qx.lang.Array.fromArguments(arguments,2);
return function(event){var G=[event||window.event];
G.push.apply(G,M);
K.apply(self||this,G);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(A,B,self,C){return this.create(A,{delay:B,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(b,c,self,d){return this.create(b,{periodical:c,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var E="qx.debug",D="on",C="Invalid event target.",B="Invalid event dispatcher!",A="': ",z="Invalid event handler.",y="' on target '",x="Could not fire event '",w="undefined",v="qx.event.Registration";
qx.Bootstrap.define(v,{statics:{__ec:{},getManager:function(P){if(P==null){if(qx.core.Variant.isSet(E,D)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}P=window;
}else if(P.nodeType){P=qx.dom.Node.getWindow(P);
}else if(!qx.dom.Node.isWindow(P)){P=window;
}var R=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var Q=this.__ec[R];

if(!Q){Q=new qx.event.Manager(P,this);
this.__ec[R]=Q;
}return Q;
},removeManager:function(X){var Y=X.getWindowId();
delete this.__ec[Y];
},addListener:function(F,G,H,self,I){return this.getManager(F).addListener(F,G,H,self,I);
},removeListener:function(L,M,N,self,O){return this.getManager(L).removeListener(L,M,N,self,O);
},removeListenerById:function(S,T){return this.getManager(S).removeListenerById(S,T);
},removeAllListeners:function(j){return this.getManager(j).removeAllListeners(j);
},hasListener:function(U,V,W){return this.getManager(U).hasListener(U,V,W);
},serializeListeners:function(u){return this.getManager(u).serializeListeners(u);
},createEvent:function(k,l,m){if(qx.core.Variant.isSet(E,D)){if(arguments.length>1&&l===undefined){throw new Error("Create event of type "+k+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(l==null){l=qx.event.type.Event;
}var n=qx.event.Pool.getInstance().getObject(l);

if(!n){return;
}m?n.init.apply(n,m):n.init();
if(k){n.setType(k);
}return n;
},dispatchEvent:function(c,event){return this.getManager(c).dispatchEvent(c,event);
},fireEvent:function(d,e,f,g){if(qx.core.Variant.isSet(E,D)){if(arguments.length>2&&f===undefined&&g!==undefined){throw new Error("Create event of type "+e+" with undefined class. Please use null to explicit fallback to default event type!");
}var h=x+e+y+(d?d.classname:w)+A;
qx.core.Assert.assertNotUndefined(d,h+C);
qx.core.Assert.assertNotNull(d,h+C);
}var i=this.createEvent(e,f||null,g);
return this.getManager(d).dispatchEvent(d,i);
},fireNonBubblingEvent:function(o,p,q,r){if(qx.core.Variant.isSet(E,D)){if(arguments.length>2&&q===undefined&&r!==undefined){throw new Error("Create event of type "+p+" with undefined class. Please use null to explicit fallback to default event type!");
}}var s=this.getManager(o);

if(!s.hasListener(o,p,false)){return true;
}var t=this.createEvent(p,q||null,r);
return s.dispatchEvent(o,t);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ed:[],addHandler:function(ba){if(qx.core.Variant.isSet(E,D)){qx.core.Assert.assertInterface(ba,qx.event.IEventHandler,z);
}this.__ed.push(ba);
this.__ed.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ed;
},__ee:[],addDispatcher:function(J,K){if(qx.core.Variant.isSet(E,D)){qx.core.Assert.assertInterface(J,qx.event.IEventDispatcher,B);
}this.__ee.push(J);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ee;
}}});
})();
(function(){var dr=';',dq='computed=this.',dp='=value;',dn='this.',dm="set",dl="setThemed",dk="init",dj="setRuntime",di='if(this.',dh='delete this.',cq='!==undefined)',cp="on",co='}',cn="qx.debug",cm="resetThemed",cl='else if(this.',ck="string",cj='return this.',ci="reset",ch='","',dy='",value);',dz="refresh",dw="boolean",dx="resetRuntime",du='!==undefined){',dv="",ds='=true;',dt="qx.propertyDebugLevel",dA="this.",dB='old=this.',cP='.$$properties.',cO="();",cR='else ',cQ='if(old===undefined)old=this.',cT='old=computed=this.',cS='if(value===undefined)prop.error(this,2,"',cV="return this.",cU="get",cN='(value);',cM=";",N="(a[",O='if(old===computed)return value;',P='"), msg)',Q='!(',R="value",S=' of an instance of ',T='var prop=qx.core.Property;',U='if(old===undefined)old=null;',V=')',W=' is not (yet) ready!");',dP="]);",dO='!==inherit){',dN='var msg = "Invalid incoming value for property \'',dM='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dT='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dS='value !== null && value.nodeType === 9 && value.documentElement',dR='===value)return value;',dQ='value !== null && value.$$type === "Mixin"',dV='return init;',dU='var init=this.',bG=')prop.error(this,5,"',bH='value !== null && value.nodeType === 1 && value.attributes',bE="Error in property ",bF='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bK="property",bL='.check.call(this, value)',bI='if((computed===undefined||computed===inherit)&&',bJ='.validate.call(this, value);',bC='qx.core.Assert.assertInstance(value, Date, msg) || true',bD='else{',bp=" in method ",bo='qx.core.Assert.assertInstance(value, Error, msg) || true',br='=computed;',bq='Undefined value is not allowed!',bl='(backup);',bk='if(',bn='if(computed===inherit){',bm="inherit",bj='Is invalid!',bi='var computed, old=this.',bQ='else if(computed===undefined)',bR="': ",bS=" of class ",bT='value !== null && value.nodeType !== undefined',bM='===undefined)return;',bN='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bO="')){",bP='qx.core.Assert.assertPositiveInteger(value, msg) || true',bU='else this.',bV='value=this.',bz='if(init==qx.core.Property.$$inherit)init=null;',by='qx.core.Assert.assertInArray(value, ',bx='value !== null && value.$$type === "Interface"',bw='var inherit=prop.$$inherit;',bv="', qx.event.type.Data, [computed, old]",bu="$$useinit_",bt='computed=undefined;delete this.',bs='computed=value;',bB="$$runtime_",bA='Requires exactly one argument!',bW='if(this.$$initialized)prop.error(this,0,"',bX='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bY="$$user_",ca='if(value===null)prop.error(this,4,"',cb='){',cc='!',cd='qx.core.Assert.assertArray(value, msg) || true',ce='if(computed===undefined||computed===inherit){',cf='qx.core.Assert.assertPositiveNumber(value, msg) || true',cg=".prototype",cu="function",ct="Boolean",cs=")}",cr='(computed, old, "',cy='return value;',cx='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cw='}else{',cv="if(reg.hasListener(this, '",cA='Does not allow any arguments!',cz='\'";',cI=')a[i].',cJ="()",cG=';}',cH="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cE='value !== null && value.$$type === "Theme"',cF='if(value!==null)',cC="var reg=qx.event.Registration;",cD="())",cK='return null;',cL='qx.core.Assert.assertObject(value, msg) || true',da='");',cY='qx.core.Assert.assertString(value, msg) || true',dc='!==undefined&&',db='var pa=this.getLayoutParent();if(pa)computed=pa.',de='value !== null && value.$$type === "Class"',dd='qx.core.Assert.assertFunction(value, msg) || true',dg='var computed, old;',df='var backup=computed;',cX=".",cW="object",dI="$$init_",dJ='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',dK="$$theme_",dL='if(computed===undefined)computed=null;',dE='\' of class \'',dF='if(arguments.length!==1)prop.error(this,1,"',dG='qx.core.Assert.assertMap(value, msg) || true',dH="qx.aspects",dC='qx.core.Assert.assertNumber(value, msg) || true',dD="reg.fireEvent(this, '",M='Null value is not allowed!',L='if(value!==inherit)',K='qx.core.Assert.assertInteger(value, msg) || true',J="shorthand",I='qx.core.Assert.assertInstance(value, RegExp, msg) || true',H='value !== null && value.type !== undefined',G='value !== null && value.document',F='throw new Error("Property ',E="(!this.",D='qx.core.Assert.assertBoolean(value, msg) || true',ba='if(a[i].',bb='.check, msg)',X="toggle",Y="$$inherit_",be=" with incoming value '",bf='if(arguments.length!==0)prop.error(this,3,"',bc="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bd='if(computed===undefined||computed==inherit)computed=null;',bg="qx.core.Property",bh="is",cB='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bg,{statics:{__jP:{"Boolean":D,"String":cY,"Number":dC,"Integer":K,"PositiveNumber":cf,"PositiveInteger":bP,"Error":bo,"RegExp":I,"Object":cL,"Array":cd,"Map":dG,"Function":dd,"Date":bC,"Node":bT,"Element":bH,"Document":dS,"Window":G,"Event":H,"Class":de,"Mixin":dQ,"Interface":bx,"Theme":cE,"Color":dM,"Decorator":bN,"Font":dT},__jQ:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bm,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:ck,dispose:dw,inheritable:dw,nullable:dw,themeable:dw,refine:dw,init:null,apply:ck,event:ck,check:null,transform:ck,deferredInit:dw,validate:null},$$allowedGroupKeys:{name:ck,group:cW,mode:ck,themeable:dw},$$inheritable:{},refresh:function(eS){var parent=eS.getLayoutParent();

if(parent){var eV=eS.constructor;
var eX=this.$$store.inherit;
var eW=this.$$store.init;
var eU=this.$$method.refresh;
var eY;
var eT;

if(qx.core.Variant.isSet(cn,cp)){if(qx.core.Setting.get(dt)>1){eS.debug("Update property inheritance");
}}
while(eV){eY=eV.$$properties;

if(eY){for(var name in this.$$inheritable){if(eY[name]&&eS[eU[name]]){eT=parent[eX[name]];

if(eT===undefined){eT=parent[eW[name]];
}
if(qx.core.Variant.isSet(cn,cp)){if(qx.core.Setting.get(dt)>2){eS.debug("Updating property: "+name+" to '"+eT+"'");
}}eS[eU[name]](eT);
}}}eV=eV.superclass;
}}},attach:function(el){var em=el.$$properties;

if(em){for(var name in em){this.attachMethods(el,name,em[name]);
}}el.$$propertiesAttached=true;
},attachMethods:function(eQ,name,eR){eR.group?this.__jR(eQ,eR,name):this.__jS(eQ,eR,name);
},__jR:function(es,et,name){var eB=qx.lang.String.firstUp(name);
var eA=es.prototype;
var eC=et.themeable===true;

if(qx.core.Variant.isSet(cn,cp)){if(qx.core.Setting.get(dt)>1){qx.log.Logger.debug("Generating property group: "+name);
}}var eD=[];
var ew=[];

if(eC){var eu=[];
var ez=[];
}var ey=cH;
eD.push(ey);

if(eC){eu.push(ey);
}
if(et.mode==J){var ev=bc;
eD.push(ev);

if(eC){eu.push(ev);
}}
for(var i=0,a=et.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(cn,cp)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}eD.push(dA,this.$$method.set[a[i]],N,i,dP);
ew.push(dA,this.$$method.reset[a[i]],cO);

if(eC){if(qx.core.Variant.isSet(cn,cp)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}eu.push(dA,this.$$method.setThemed[a[i]],N,i,dP);
ez.push(dA,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=dm+eB;
eA[this.$$method.set[name]]=new Function(eD.join(dv));
this.$$method.reset[name]=ci+eB;
eA[this.$$method.reset[name]]=new Function(ew.join(dv));

if(eC){this.$$method.setThemed[name]=dl+eB;
eA[this.$$method.setThemed[name]]=new Function(eu.join(dv));
this.$$method.resetThemed[name]=cm+eB;
eA[this.$$method.resetThemed[name]]=new Function(ez.join(dv));
}},__jS:function(fh,fi,name){var fk=qx.lang.String.firstUp(name);
var fm=fh.prototype;

if(qx.core.Variant.isSet(cn,cp)){if(qx.core.Setting.get(dt)>1){qx.log.Logger.debug("Generating property wrappers: "+name);
}}if(fi.dispose===undefined&&typeof fi.check===ck){fi.dispose=this.__jQ[fi.check]||qx.Class.isDefined(fi.check)||qx.Interface.isDefined(fi.check);
}var fl=this.$$method;
var fj=this.$$store;
fj.runtime[name]=bB+name;
fj.user[name]=bY+name;
fj.theme[name]=dK+name;
fj.init[name]=dI+name;
fj.inherit[name]=Y+name;
fj.useinit[name]=bu+name;
fl.get[name]=cU+fk;
fm[fl.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,fh,name,cU);
};
fl.set[name]=dm+fk;
fm[fl.set[name]]=function(g){return qx.core.Property.executeOptimizedSetter(this,fh,name,dm,arguments);
};
fl.reset[name]=ci+fk;
fm[fl.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fh,name,ci);
};

if(fi.inheritable||fi.apply||fi.event||fi.deferredInit){fl.init[name]=dk+fk;
fm[fl.init[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,fh,name,dk,arguments);
};
}
if(fi.inheritable){fl.refresh[name]=dz+fk;
fm[fl.refresh[name]]=function(d){return qx.core.Property.executeOptimizedSetter(this,fh,name,dz,arguments);
};
}fl.setRuntime[name]=dj+fk;
fm[fl.setRuntime[name]]=function(f){return qx.core.Property.executeOptimizedSetter(this,fh,name,dj,arguments);
};
fl.resetRuntime[name]=dx+fk;
fm[fl.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fh,name,dx);
};

if(fi.themeable){fl.setThemed[name]=dl+fk;
fm[fl.setThemed[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,fh,name,dl,arguments);
};
fl.resetThemed[name]=cm+fk;
fm[fl.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,fh,name,cm);
};
}
if(fi.check===ct){fm[X+fk]=new Function(cV+fl.set[name]+E+fl.get[name]+cD);
fm[bh+fk]=new Function(cV+fl.get[name]+cJ);
}},__jT:{0:cB,1:bA,2:bq,3:cA,4:M,5:bj},error:function(fa,fb,fc,fd,fe){var ff=fa.constructor.classname;
var fg=bE+fc+bS+ff+bp+this.$$method[fd][fc]+be+fe+bR;
throw new Error(fg+(this.__jT[fb]||"Unknown reason: "+fb));
},__jU:function(fn,fo,name,fp,fq,fr){var fs=this.$$method[fp][name];
if(qx.core.Variant.isSet(cn,cp)){if(qx.core.Setting.get(dt)>1){qx.log.Logger.debug("Code["+this.$$method[fp][name]+"]: "+fq.join(""));
}try{fo[fs]=new Function(R,fq.join(dv));
}catch(C){throw new Error("Malformed generated code to unwrap method: "+this.$$method[fp][name]+"\n"+fq.join(""));
}}else{fo[fs]=new Function(R,fq.join(dv));
}if(qx.core.Variant.isSet(dH,cp)){fo[fs]=qx.core.Aspect.wrap(fn.classname+cX+fs,fo[fs],bK);
}qx.Bootstrap.setDisplayName(fo[fs],fn.classname+cg,fs);
if(fr===undefined){return fn[fs]();
}else if(qx.core.Variant.isSet(cn,cp)){return fn[fs].apply(fn,fr);
}else{return fn[fs](fr[0]);
}},executeOptimizedGetter:function(eE,eF,name,eG){var eI=eF.$$properties[name];
var eK=eF.prototype;
var eH=[];
var eJ=this.$$store;
eH.push(di,eJ.runtime[name],cq);
eH.push(cj,eJ.runtime[name],dr);

if(eI.inheritable){eH.push(cl,eJ.inherit[name],cq);
eH.push(cj,eJ.inherit[name],dr);
eH.push(cR);
}eH.push(di,eJ.user[name],cq);
eH.push(cj,eJ.user[name],dr);

if(eI.themeable){eH.push(cl,eJ.theme[name],cq);
eH.push(cj,eJ.theme[name],dr);
}
if(eI.deferredInit&&eI.init===undefined){eH.push(cl,eJ.init[name],cq);
eH.push(cj,eJ.init[name],dr);
}eH.push(cR);

if(eI.init!==undefined){if(eI.inheritable){eH.push(dU,eJ.init[name],dr);

if(eI.nullable){eH.push(bz);
}else if(eI.init!==undefined){eH.push(cj,eJ.init[name],dr);
}else{eH.push(cx,name,S,eF.classname,W);
}eH.push(dV);
}else{eH.push(cj,eJ.init[name],dr);
}}else if(eI.inheritable||eI.nullable){eH.push(cK);
}else{eH.push(F,name,S,eF.classname,W);
}return this.__jU(eE,eK,name,eG,eH);
},executeOptimizedSetter:function(dX,dY,name,ea,eb){var eg=dY.$$properties[name];
var ef=dY.prototype;
var ed=[];
var ec=ea===dm||ea===dl||ea===dj||(ea===dk&&eg.init===undefined);
var ee=eg.apply||eg.event||eg.inheritable;
var eh=this.__jV(ea,name);
this.__jW(ed,eg,name,ea,ec);

if(ec){this.__jX(ed,dY,eg,name);
}
if(ee){this.__jY(ed,ec,eh,ea);
}
if(eg.inheritable){ed.push(bw);
}
if(qx.core.Variant.isSet(cn,cp)){if(ec){this.__ka(ed,eg,dY,name,ea);
}}
if(!ee){this.__kb(ed,name,ea,ec);
}else{this.__kc(ed,eg,name,ea,ec);
}
if(eg.inheritable){this.__kd(ed,eg,name,ea);
}else if(ee){this.__ke(ed,eg,name,ea);
}
if(ee){this.__kf(ed,eg,name);
if(eg.inheritable&&ef._getChildren){this.__kg(ed,name);
}}if(ec){ed.push(cy);
}return this.__jU(dX,ef,name,ea,ed,eb);
},__jV:function(eq,name){if(eq===dj||eq===dx){var er=this.$$store.runtime[name];
}else if(eq===dl||eq===cm){er=this.$$store.theme[name];
}else if(eq===dk){er=this.$$store.init[name];
}else{er=this.$$store.user[name];
}return er;
},__jW:function(y,z,name,A,B){if(qx.core.Variant.isSet(cn,cp)){y.push(T);

if(A===dk){y.push(bW,name,ch,A,dy);
}
if(A===dz){}else if(B){y.push(dF,name,ch,A,dy);
y.push(cS,name,ch,A,dy);
}else{y.push(bf,name,ch,A,dy);
}}else{if(!z.nullable||z.check||z.inheritable){y.push(T);
}if(A===dm){y.push(cS,name,ch,A,dy);
}}},__jX:function(en,eo,ep,name){if(ep.transform){en.push(bV,ep.transform,cN);
}if(ep.validate){if(typeof ep.validate===ck){en.push(dn,ep.validate,cN);
}else if(ep.validate instanceof Function){en.push(eo.classname,cP,name);
en.push(bJ);
}}},__jY:function(eL,eM,eN,eO){var eP=(eO===ci||eO===cm||eO===dx);

if(eM){eL.push(di,eN,dR);
}else if(eP){eL.push(di,eN,bM);
}},__ka:qx.core.Variant.select(cn,{"on":function(u,v,w,name,x){if(!v.nullable){u.push(ca,name,ch,x,dy);
}if(v.check!==undefined){u.push(dN+name+dE+w.classname+cz);
if(v.nullable){u.push(cF);
}if(v.inheritable){u.push(L);
}u.push(bk);

if(this.__jP[v.check]!==undefined){u.push(Q,this.__jP[v.check],V);
}else if(qx.Class.isDefined(v.check)){u.push(bX,v.check,P);
}else if(qx.Interface&&qx.Interface.isDefined(v.check)){u.push(dJ,v.check,P);
}else if(typeof v.check===cu){u.push(cc,w.classname,cP,name);
u.push(bL);
}else if(typeof v.check===ck){u.push(Q,v.check,V);
}else if(v.check instanceof Array){u.push(by,w.classname,cP,name,bb);
}else{throw new Error("Could not add check to property "+name+" of class "+w.classname);
}u.push(bG,name,ch,x,dy);
}},"off":undefined}),__kb:function(h,name,j,k){if(j===dj){h.push(dn,this.$$store.runtime[name],dp);
}else if(j===dx){h.push(di,this.$$store.runtime[name],cq);
h.push(dh,this.$$store.runtime[name],dr);
}else if(j===dm){h.push(dn,this.$$store.user[name],dp);
}else if(j===ci){h.push(di,this.$$store.user[name],cq);
h.push(dh,this.$$store.user[name],dr);
}else if(j===dl){h.push(dn,this.$$store.theme[name],dp);
}else if(j===cm){h.push(di,this.$$store.theme[name],cq);
h.push(dh,this.$$store.theme[name],dr);
}else if(j===dk&&k){h.push(dn,this.$$store.init[name],dp);
}},__kc:function(m,n,name,o,p){if(n.inheritable){m.push(bi,this.$$store.inherit[name],dr);
}else{m.push(dg);
}m.push(di,this.$$store.runtime[name],du);

if(o===dj){m.push(dq,this.$$store.runtime[name],dp);
}else if(o===dx){m.push(dh,this.$$store.runtime[name],dr);
m.push(di,this.$$store.user[name],cq);
m.push(dq,this.$$store.user[name],dr);
m.push(cl,this.$$store.theme[name],cq);
m.push(dq,this.$$store.theme[name],dr);
m.push(cl,this.$$store.init[name],du);
m.push(dq,this.$$store.init[name],dr);
m.push(dn,this.$$store.useinit[name],ds);
m.push(co);
}else{m.push(cT,this.$$store.runtime[name],dr);
if(o===dm){m.push(dn,this.$$store.user[name],dp);
}else if(o===ci){m.push(dh,this.$$store.user[name],dr);
}else if(o===dl){m.push(dn,this.$$store.theme[name],dp);
}else if(o===cm){m.push(dh,this.$$store.theme[name],dr);
}else if(o===dk&&p){m.push(dn,this.$$store.init[name],dp);
}}m.push(co);
m.push(cl,this.$$store.user[name],du);

if(o===dm){if(!n.inheritable){m.push(dB,this.$$store.user[name],dr);
}m.push(dq,this.$$store.user[name],dp);
}else if(o===ci){if(!n.inheritable){m.push(dB,this.$$store.user[name],dr);
}m.push(dh,this.$$store.user[name],dr);
m.push(di,this.$$store.runtime[name],cq);
m.push(dq,this.$$store.runtime[name],dr);
m.push(di,this.$$store.theme[name],cq);
m.push(dq,this.$$store.theme[name],dr);
m.push(cl,this.$$store.init[name],du);
m.push(dq,this.$$store.init[name],dr);
m.push(dn,this.$$store.useinit[name],ds);
m.push(co);
}else{if(o===dj){m.push(dq,this.$$store.runtime[name],dp);
}else if(n.inheritable){m.push(dq,this.$$store.user[name],dr);
}else{m.push(cT,this.$$store.user[name],dr);
}if(o===dl){m.push(dn,this.$$store.theme[name],dp);
}else if(o===cm){m.push(dh,this.$$store.theme[name],dr);
}else if(o===dk&&p){m.push(dn,this.$$store.init[name],dp);
}}m.push(co);
if(n.themeable){m.push(cl,this.$$store.theme[name],du);

if(!n.inheritable){m.push(dB,this.$$store.theme[name],dr);
}
if(o===dj){m.push(dq,this.$$store.runtime[name],dp);
}else if(o===dm){m.push(dq,this.$$store.user[name],dp);
}else if(o===dl){m.push(dq,this.$$store.theme[name],dp);
}else if(o===cm){m.push(dh,this.$$store.theme[name],dr);
m.push(di,this.$$store.init[name],du);
m.push(dq,this.$$store.init[name],dr);
m.push(dn,this.$$store.useinit[name],ds);
m.push(co);
}else if(o===dk){if(p){m.push(dn,this.$$store.init[name],dp);
}m.push(dq,this.$$store.theme[name],dr);
}else if(o===dz){m.push(dq,this.$$store.theme[name],dr);
}m.push(co);
}m.push(cl,this.$$store.useinit[name],cb);

if(!n.inheritable){m.push(dB,this.$$store.init[name],dr);
}
if(o===dk){if(p){m.push(dq,this.$$store.init[name],dp);
}else{m.push(dq,this.$$store.init[name],dr);
}}else if(o===dm||o===dj||o===dl||o===dz){m.push(dh,this.$$store.useinit[name],dr);

if(o===dj){m.push(dq,this.$$store.runtime[name],dp);
}else if(o===dm){m.push(dq,this.$$store.user[name],dp);
}else if(o===dl){m.push(dq,this.$$store.theme[name],dp);
}else if(o===dz){m.push(dq,this.$$store.init[name],dr);
}}m.push(co);
if(o===dm||o===dj||o===dl||o===dk){m.push(bD);

if(o===dj){m.push(dq,this.$$store.runtime[name],dp);
}else if(o===dm){m.push(dq,this.$$store.user[name],dp);
}else if(o===dl){m.push(dq,this.$$store.theme[name],dp);
}else if(o===dk){if(p){m.push(dq,this.$$store.init[name],dp);
}else{m.push(dq,this.$$store.init[name],dr);
}m.push(dn,this.$$store.useinit[name],ds);
}m.push(co);
}},__kd:function(r,s,name,t){r.push(ce);

if(t===dz){r.push(bs);
}else{r.push(db,this.$$store.inherit[name],dr);
}r.push(bI);
r.push(dn,this.$$store.init[name],dc);
r.push(dn,this.$$store.init[name],dO);
r.push(dq,this.$$store.init[name],dr);
r.push(dn,this.$$store.useinit[name],ds);
r.push(cw);
r.push(dh,this.$$store.useinit[name],cG);
r.push(co);
r.push(O);
r.push(bn);
r.push(bt,this.$$store.inherit[name],dr);
r.push(co);
r.push(bQ);
r.push(dh,this.$$store.inherit[name],dr);
r.push(bU,this.$$store.inherit[name],br);
r.push(df);
if(s.init!==undefined&&t!==dk){r.push(cQ,this.$$store.init[name],cM);
}else{r.push(U);
}r.push(bd);
},__ke:function(ei,ej,name,ek){if(ek!==dm&&ek!==dj&&ek!==dl){ei.push(dL);
}ei.push(O);
if(ej.init!==undefined&&ek!==dk){ei.push(cQ,this.$$store.init[name],cM);
}else{ei.push(U);
}},__kf:function(b,c,name){if(c.apply){b.push(dn,c.apply,cr,name,da);
}if(c.event){b.push(cC,cv,c.event,bO,dD,c.event,bv,cs);
}},__kg:function(dW,name){dW.push(bF);
dW.push(ba,this.$$method.refresh[name],cI,this.$$method.refresh[name],bl);
dW.push(co);
}}});
})();
(function(){var j="on",h="qx.debug",g="$$hash",f="qx.core.ObjectRegistry";
qx.Bootstrap.define(f,{statics:{inShutDown:false,__gu:{},__gv:0,__gw:[],register:function(w){var z=this.__gu;

if(!z){return;
}var y=w.$$hash;

if(y==null){var x=this.__gw;

if(x.length>0){y=x.pop();
}else{y=(this.__gv++).toString(36);
}w.$$hash=y;
}
if(qx.core.Variant.isSet(h,j)){if(!w.dispose){throw new Error("Invalid object: "+w);
}}z[y]=w;
},unregister:function(k){var m=k.$$hash;

if(m==null){return;
}var n=this.__gu;

if(n&&n[m]){delete n[m];
this.__gw.push(m);
}try{delete k.$$hash;
}catch(A){if(k.removeAttribute){k.removeAttribute(g);
}}},toHashCode:function(p){if(qx.core.Variant.isSet(h,j)){if(p==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+p);
}}var r=p.$$hash;

if(r!=null){return r;
}var q=this.__gw;

if(q.length>0){r=q.pop();
}else{r=(this.__gv++).toString(36);
}return p.$$hash=r;
},clearHashCode:function(c){if(qx.core.Variant.isSet(h,j)){if(c==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+c);
}}var d=c.$$hash;

if(d!=null){this.__gw.push(d);
try{delete c.$$hash;
}catch(B){if(c.removeAttribute){c.removeAttribute(g);
}}}},fromHashCode:function(o){return this.__gu[o]||null;
},shutdown:function(){this.inShutDown=true;
var t=this.__gu;
var v=[];

for(var u in t){v.push(u);
}v.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var s,i=0,l=v.length;

while(true){try{for(;i<l;i++){u=v[i];
s=t[u];

if(s&&s.dispose){s.dispose();
}}}catch(e){qx.log.Logger.error(this,"Could not dispose object "+s.toString()+": "+e);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gu;
},getRegistry:function(){return this.__gu;
}}});
})();
(function(){var bE="",bD="!",bC="'!",bB="'",bA="Expected '",bz="' (rgb(",by=",",bx=")), but found value '",bw="Event (",bv="Expected value to be the CSS color '",cK="' but found ",cJ="The value '",cI="qx.core.Object",cH="Expected value to be an array but found ",cG=") was fired.",cF="Expected value to be an integer >= 0 but found ",cE="' to be not equal with '",cD="' to '",cC="qx.ui.core.Widget",cB="Called assertTrue with '",bL="Expected value to be a map but found ",bM="The function did not raise an exception!",bJ="Expected value to be undefined but found ",bK="Expected value to be a DOM element but found  '",bH="Expected value to be a regular expression but found ",bI="' to implement the interface '",bF="Expected value to be null but found ",bG="Invalid argument 'type'",bT="Called assert with 'false'",bU="Assertion error! ",ch="Expected value to be a string but found ",cd="null",cp="' but found '",ck="' must must be a key of the map '",cx="The String '",cu="Expected value not to be undefined but found ",bY="qx.util.ColorUtil",cA=": ",cz="The raised exception does not have the expected type! ",cy=") not fired.",bX="qx.core.Assert",cb="Expected value to be typeof object but found ",cc="' (identical) but found '",cf="' must have any of the values defined in the array '",ci="Expected value to be a number but found ",cl="Called assertFalse with '",cr="]",cw="Expected value to be a qooxdoo object but found ",bN="' arguments.",bO="Expected value not to be null but found ",ca="Array[",co="' does not match the regular expression '",cn="' to be not identical with '",cm="' arguments but found '",ct="', which cannot be converted to a CSS color!",cs="Expected object '",cj="qx.core.AssertionError",cq="Expected value to be a boolean but found ",bs="))!",cv="Expected value to be a qooxdoo widget but found ",bP="Expected value '%1' to be in the range '%2'..'%3'!",bQ="Expected value to be typeof '",ce="Expected value to be typeof function but found ",bt="Expected value to be an integer but found ",bu="Called fail().",bW="The parameter 're' must be a string or a regular expression.",bR="Expected value to be a number >= 0 but found ",bS="Expected value to be instanceof '",bV="Wrong number of arguments given. Expected '",cg="object";
qx.Bootstrap.define(bX,{statics:{__pQ:true,__pR:function(L,M){var N=bE;

for(var i=1,l=arguments.length;i<l;i++){N=N+this.__pS(arguments[i]);
}var P=bU+L+cA+N;

if(this.__pQ){qx.log.Logger.error(P);
}
if(qx.Class.isDefined(cj)){var O=new qx.core.AssertionError(L,N);

if(this.__pQ){qx.log.Logger.error("Stack trace: \n"+O.getStackTrace());
}throw O;
}else{throw new Error(P);
}},__pS:function(cX){var cY;

if(cX===null){cY=cd;
}else if(qx.lang.Type.isArray(cX)&&cX.length>10){cY=ca+cX.length+cr;
}else if((cX instanceof Object)&&(cX.toString==null)){cY=qx.util.Json.stringify(cX);
}else{try{cY=cX.toString();
}catch(e){cY=bE;
}}return cY;
},assert:function(J,K){J==true||this.__pR(K||bE,bT);
},fail:function(r){this.__pR(r||bE,bu);
},assertTrue:function(dI,dJ){(dI===true)||this.__pR(dJ||bE,cB,dI,bB);
},assertFalse:function(W,X){(W===false)||this.__pR(X||bE,cl,W,bB);
},assertEquals:function(bg,bh,bi){bg==bh||this.__pR(bi||bE,bA,bg,cp,bh,bC);
},assertNotEquals:function(bb,bc,bd){bb!=bc||this.__pR(bd||bE,bA,bb,cE,bc,bC);
},assertIdentical:function(T,U,V){T===U||this.__pR(V||bE,bA,T,cc,U,bC);
},assertNotIdentical:function(k,m,n){k!==m||this.__pR(n||bE,bA,k,cn,m,bC);
},assertNotUndefined:function(dA,dB){dA!==undefined||this.__pR(dB||bE,cu,dA,bD);
},assertUndefined:function(dd,de){dd===undefined||this.__pR(de||bE,bJ,dd,bD);
},assertNotNull:function(dM,dN){dM!==null||this.__pR(dN||bE,bO,dM,bD);
},assertNull:function(cN,cO){cN===null||this.__pR(cO||bE,bF,cN,bD);
},assertJsonEquals:function(dx,dy,dz){this.assertEquals(qx.util.Json.stringify(dx),qx.util.Json.stringify(dy),dz);
},assertMatch:function(da,db,dc){this.assertString(da);
this.assert(qx.lang.Type.isRegExp(db)||qx.lang.Type.isString(db),bW);
da.search(db)>=0||this.__pR(dc||bE,cx,da,co,db.toString(),bC);
},assertArgumentsCount:function(s,t,u,v){var w=s.length;
(w>=t&&w<=u)||this.__pR(v||bE,bV,t,cD,u,cm,arguments.length,bN);
},assertEventFired:function(A,event,B,C,D){var F=false;
var E=function(e){if(C){C.call(A,e);
}F=true;
};
var G=A.addListener(event,E,A);
B.call();
F===true||this.__pR(D||bE,bw,event,cy);
A.removeListenerById(G);
},assertEventNotFired:function(dR,event,dS,dT){var dV=false;
var dU=function(e){dV=true;
};
var dW=dR.addListener(event,dU,dR);
dS.call();
dV===false||this.__pR(dT||bE,bw,event,cG);
dR.removeListenerById(dW);
},assertException:function(cS,cT,cU,cV){var cT=cT||Error;
var cW;

try{this.__pQ=false;
cS();
}catch(dD){cW=dD;
}finally{this.__pQ=true;
}
if(cW==null){this.__pR(cV||bE,bM);
}cW instanceof cT||this.__pR(cV||bE,cz,cT);

if(cU){this.assertMatch(cW.toString(),cU,cV);
}},assertInArray:function(g,h,j){h.indexOf(g)!==-1||this.__pR(j||bE,cJ,g,cf,h,bB);
},assertArrayEquals:function(x,y,z){this.assertArray(x,z);
this.assertArray(y,z);
this.assertEquals(x.length,y.length,z);

for(var i=0;i<x.length;i++){this.assertIdentical(x[i],y[i],z);
}},assertKeyInMap:function(Q,R,S){R[Q]!==undefined||this.__pR(S||bE,cJ,Q,ck,R,bB);
},assertFunction:function(dt,du){qx.lang.Type.isFunction(dt)||this.__pR(du||bE,ce,dt,bD);
},assertString:function(Y,ba){qx.lang.Type.isString(Y)||this.__pR(ba||bE,ch,Y,bD);
},assertBoolean:function(be,bf){qx.lang.Type.isBoolean(be)||this.__pR(bf||bE,cq,be,bD);
},assertNumber:function(dv,dw){(qx.lang.Type.isNumber(dv)&&isFinite(dv))||this.__pR(dw||bE,ci,dv,bD);
},assertPositiveNumber:function(df,dg){(qx.lang.Type.isNumber(df)&&isFinite(df)&&df>=0)||this.__pR(dg||bE,bR,df,bD);
},assertInteger:function(cL,cM){(qx.lang.Type.isNumber(cL)&&isFinite(cL)&&cL%1===0)||this.__pR(cM||bE,bt,cL,bD);
},assertPositiveInteger:function(dO,dP){var dQ=(qx.lang.Type.isNumber(dO)&&isFinite(dO)&&dO%1===0&&dO>=0);
dQ||this.__pR(dP||bE,cF,dO,bD);
},assertInRange:function(dE,dF,dG,dH){(dE>=dF&&dE<=dG)||this.__pR(dH||bE,qx.lang.String.format(bP,[dE,dF,dG]));
},assertObject:function(c,d){var f=c!==null&&(qx.lang.Type.isObject(c)||typeof c===cg);
f||this.__pR(d||bE,cb,(c),bD);
},assertArray:function(dK,dL){qx.lang.Type.isArray(dK)||this.__pR(dL||bE,cH,dK,bD);
},assertMap:function(a,b){qx.lang.Type.isObject(a)||this.__pR(b||bE,bL,a,bD);
},assertRegExp:function(bj,bk){qx.lang.Type.isRegExp(bj)||this.__pR(bk||bE,bH,bj,bD);
},assertType:function(o,p,q){this.assertString(p,bG);
typeof (o)===p||this.__pR(q||bE,bQ,p,cK,o,bD);
},assertInstance:function(dp,dq,dr){var ds=dq.classname||dq+bE;
dp instanceof dq||this.__pR(dr||bE,bS,ds,cK,dp,bD);
},assertInterface:function(cP,cQ,cR){qx.Class.implementsInterface(cP,cQ)||this.__pR(cR||bE,cs,cP,bI,cQ,bC);
},assertCssColor:function(dh,di,dj){var dk=qx.Class.getByName(bY);

if(!dk){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dm=dk.stringToRgb(dh);

try{var dl=dk.stringToRgb(di);
}catch(dC){this.__pR(dj||bE,bv,dh,bz,dm.join(by),bx,di,ct);
}var dn=dm[0]==dl[0]&&dm[1]==dl[1]&&dm[2]==dl[2];
dn||this.__pR(dj||bE,bv,dm,bz,dm.join(by),bx,di,bz,dl.join(by),bs);
},assertElement:function(H,I){!!(H&&H.nodeType===1)||this.__pR(I||bE,bK,H,bC);
},assertQxObject:function(bl,bm){this.__pT(bl,cI)||this.__pR(bm||bE,cw,bl,bD);
},assertQxWidget:function(bq,br){this.__pT(bq,cC)||this.__pR(br||bE,cv,bq,bD);
},__pT:function(bn,bo){if(!bn){return false;
}var bp=bn.constructor;

while(bp){if(bp.classname===bo){return true;
}bp=bp.superclass;
}return false;
}}});
})();
(function(){var y="object",x="qx.debug",w="function",v="Mixin",u="qx.Mixin",t=".prototype",s="constructor",r="[Mixin ",q="]",p="members",m="destruct",o="events",n="on",k="properties",j="statics";
qx.Bootstrap.define(u,{statics:{define:function(name,J){if(J){if(J.include&&!(J.include instanceof Array)){J.include=[J.include];
}if(qx.core.Variant.isSet(x,n)){this.__dx(name,J);
}var L=J.statics?J.statics:{};
qx.Bootstrap.setDisplayNames(L,name);

for(var K in L){if(L[K] instanceof Function){L[K].$$mixin=L;
}}if(J.construct){L.$$constructor=J.construct;
qx.Bootstrap.setDisplayName(J.construct,name,s);
}
if(J.include){L.$$includes=J.include;
}
if(J.properties){L.$$properties=J.properties;
}
if(J.members){L.$$members=J.members;
qx.Bootstrap.setDisplayNames(J.members,name+t);
}
for(var K in L.$$members){if(L.$$members[K] instanceof Function){L.$$members[K].$$mixin=L;
}}
if(J.events){L.$$events=J.events;
}
if(J.destruct){L.$$destructor=J.destruct;
qx.Bootstrap.setDisplayName(J.destruct,name,m);
}}else{var L={};
}L.$$type=v;
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
},isCompatible:function(f,g){var h=qx.Class.getMixins(g);
h.push(f);
return qx.Mixin.checkCompatibility(h);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(H){if(!H){return [];
}var I=H.concat();

for(var i=0,l=H.length;i<l;i++){if(H[i].$$includes){I.push.apply(I,this.flatten(H[i].$$includes));
}}return I;
},genericToString:function(){return r+this.name+q;
},$$registry:{},__dw:qx.core.Variant.select(x,{"on":{"include":y,"statics":y,"members":y,"properties":y,"events":y,"destruct":w,"construct":w},"default":null}),__dx:qx.core.Variant.select(x,{"on":function(name,b){var e=this.__dw;

for(var d in b){if(!e[d]){throw new Error('The configuration key "'+d+'" in mixin "'+name+'" is not allowed!');
}
if(b[d]==null){throw new Error('Invalid key "'+d+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(e[d]!==null&&typeof b[d]!==e[d]){throw new Error('Invalid type of key "'+d+'" in mixin "'+name+'"! The type of the key must be "'+e[d]+'"!');
}}var c=[j,p,k,o];

for(var i=0,l=c.length;i<l;i++){var d=c[i];

if(b[d]!==undefined&&(b[d] instanceof Array||b[d] instanceof RegExp||b[d] instanceof Date||b[d].classname!==undefined)){throw new Error('Invalid key "'+d+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(b.include){for(var i=0,a=b.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==v){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(b.include);
}},"default":function(){}})}});
})();
(function(){var bY="qx.core.MAssert";
qx.Mixin.define(bY,{members:{assert:function(br,bs){qx.core.Assert.assert(br,bs);
},fail:function(be){qx.core.Assert.fail(be);
},assertTrue:function(l,m){qx.core.Assert.assertTrue(l,m);
},assertFalse:function(s,t){qx.core.Assert.assertFalse(s,t);
},assertEquals:function(bt,bu,bv){qx.core.Assert.assertEquals(bt,bu,bv);
},assertNotEquals:function(bV,bW,bX){qx.core.Assert.assertNotEquals(bV,bW,bX);
},assertIdentical:function(w,x,y){qx.core.Assert.assertIdentical(w,x,y);
},assertNotIdentical:function(bM,bN,bO){qx.core.Assert.assertNotIdentical(bM,bN,bO);
},assertNotUndefined:function(bf,bg){qx.core.Assert.assertNotUndefined(bf,bg);
},assertUndefined:function(bl,bm){qx.core.Assert.assertUndefined(bl,bm);
},assertNotNull:function(z,A){qx.core.Assert.assertNotNull(z,A);
},assertNull:function(bP,bQ){qx.core.Assert.assertNull(bP,bQ);
},assertJsonEquals:function(bA,bB,bC){qx.core.Assert.assertJsonEquals(bA,bB,bC);
},assertMatch:function(B,C,D){qx.core.Assert.assertMatch(B,C,D);
},assertArgumentsCount:function(bR,bS,bT,bU){qx.core.Assert.assertArgumentsCount(bR,bS,bT,bU);
},assertEventFired:function(bn,event,bo,bp,bq){qx.core.Assert.assertEventFired(bn,event,bo,bp,bq);
},assertEventNotFired:function(n,event,o,p){qx.core.Assert.assertEventNotFired(n,event,o,p);
},assertException:function(U,V,W,X){qx.core.Assert.assertException(U,V,W,X);
},assertInArray:function(i,j,k){qx.core.Assert.assertInArray(i,j,k);
},assertArrayEquals:function(J,K,L){qx.core.Assert.assertArrayEquals(J,K,L);
},assertKeyInMap:function(a,b,c){qx.core.Assert.assertKeyInMap(a,b,c);
},assertFunction:function(u,v){qx.core.Assert.assertFunction(u,v);
},assertString:function(d,e){qx.core.Assert.assertString(d,e);
},assertBoolean:function(bc,bd){qx.core.Assert.assertBoolean(bc,bd);
},assertNumber:function(bh,bi){qx.core.Assert.assertNumber(bh,bi);
},assertPositiveNumber:function(bK,bL){qx.core.Assert.assertPositiveNumber(bK,bL);
},assertInteger:function(bD,bE){qx.core.Assert.assertInteger(bD,bE);
},assertPositiveInteger:function(H,I){qx.core.Assert.assertPositiveInteger(H,I);
},assertInRange:function(O,P,Q,R){qx.core.Assert.assertInRange(O,P,Q,R);
},assertObject:function(bw,bx){qx.core.Assert.assertObject(bw,bx);
},assertArray:function(by,bz){qx.core.Assert.assertArray(by,bz);
},assertMap:function(bI,bJ){qx.core.Assert.assertMap(bI,bJ);
},assertRegExp:function(S,T){qx.core.Assert.assertRegExp(S,T);
},assertType:function(Y,ba,bb){qx.core.Assert.assertType(Y,ba,bb);
},assertInstance:function(bF,bG,bH){qx.core.Assert.assertInstance(bF,bG,bH);
},assertInterface:function(f,g,h){qx.core.Assert.assertInterface(f,g,h);
},assertCssColor:function(E,F,G){qx.core.Assert.assertCssColor(E,F,G);
},assertElement:function(q,r){qx.core.Assert.assertElement(q,r);
},assertQxObject:function(bj,bk){qx.core.Assert.assertQxObject(bj,bk);
},assertQxWidget:function(M,N){qx.core.Assert.assertQxWidget(M,N);
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Bootstrap.define(b,{construct:function(a){this.__jG=[];
this.setMaxMessages(a||50);
},members:{__jH:0,__jG:null,__jI:50,setMaxMessages:function(c){this.__jI=c;
this.clearHistory();
},getMaxMessages:function(){return this.__jI;
},process:function(h){var i=this.getMaxMessages();

if(this.__jG.length<i){this.__jG.push(h);
}else{this.__jG[this.__jH++]=h;

if(this.__jH>=i){this.__jH=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(d){if(d>this.__jG.length){d=this.__jG.length;
}
if(this.__jG.length==this.getMaxMessages()){var f=this.__jH-1;
}else{f=this.__jG.length-1;
}var e=f-d+1;

if(e<0){e+=this.__jG.length;
}var g;

if(e<=f){g=this.__jG.slice(e,f+1);
}else{g=this.__jG.slice(e,this.__jG.length).concat(this.__jG.slice(0,f+1));
}return g;
},clearHistory:function(){this.__jG=[];
this.__jH=0;
}}});
})();
(function(){var bf="qx.debug",be="unknown",bd="on",bc="node",bb="error",ba="...(+",Y="array",X=")",W="info",V="instance",bC="string",bB="null",bA="class",bz="number",by="stringify",bx="]",bw="function",bv="boolean",bu="debug",bt="map",bm="undefined",bn="qx.log.Logger",bk=")}",bl="#",bi="warn",bj="document",bg="{...(",bh="[",bo="text[",bp="[...(",br="\n",bq=")]",bs="object";
qx.Bootstrap.define(bn,{statics:{__ef:bu,setLevel:function(U){this.__ef=U;
},getLevel:function(){return this.__ef;
},setTreshold:function(bH){this.__ei.setMaxMessages(bH);
},getTreshold:function(){return this.__ei.getMaxMessages();
},__eg:{},__eh:0,register:function(G){if(G.$$id){return;
}var H=this.__eh++;
this.__eg[H]=G;
G.$$id=H;
var I=this.__ei.getAllLogEvents();

for(var i=0,l=I.length;i<l;i++){G.process(I[i]);
}},unregister:function(n){var o=n.$$id;

if(o==null){return;
}delete this.__eg[o];
delete n.$$id;
},debug:function(a,b){this.__ek(bu,arguments);
},info:function(J,K){this.__ek(W,arguments);
},warn:function(L,M){this.__ek(bi,arguments);
},error:function(p,q){this.__ek(bb,arguments);
},trace:function(bG){this.__ek(W,[bG,qx.dev.StackTrace.getStackTrace().join(br)]);
},deprecatedMethodWarning:function(bD,bE){if(qx.core.Variant.isSet(bf,bd)){var bF=qx.lang.Function.getName(bD);
this.warn("The method '"+bF+"' is deprecated: "+(bE||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(bI,bJ){if(qx.core.Variant.isSet(bf,bd)){var bK=bI.classname||be;
this.warn("The class '"+bK+"' is deprecated: "+(bJ||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(N,event,O){if(qx.core.Variant.isSet(bf,bd)){var P=N.self?N.self.classname:be;
this.warn("The event '"+(event||"unknown")+"' from class '"+P+"' is deprecated: "+(O||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(r,s){if(qx.core.Variant.isSet(bf,bd)){var t=r?r.name:be;
this.warn("The mixin '"+t+"' is deprecated: "+(s||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(Q,R,S){if(qx.core.Variant.isSet(bf,bd)){if(Q.__defineGetter__){var self=this;
var T=Q[R];
Q.__defineGetter__(R,function(){self.warn("The constant '"+R+"' is deprecated: "+(S||"Please consult the API documentation for alternatives."));
self.trace();
return T;
});
}}},clear:function(){this.__ei.clearHistory();
},__ei:new qx.log.appender.RingBuffer(50),__ej:{debug:0,info:1,warn:2,error:3},__ek:function(u,v){var A=this.__ej;

if(A[u]<A[this.__ef]){return;
}var x=v.length<2?null:v[0];
var z=x?1:0;
var w=[];

for(var i=z,l=v.length;i<l;i++){w.push(this.__em(v[i],true));
}var B=new Date;
var C={time:B,offset:B-qx.Bootstrap.LOADSTART,level:u,items:w,win:window};
if(x){if(x instanceof qx.core.Object){C.object=x.$$hash;
}else if(x.$$type){C.clazz=x;
}}this.__ei.process(C);
var D=this.__eg;

for(var y in D){D[y].process(C);
}},__el:function(E){if(E===undefined){return bm;
}else if(E===null){return bB;
}
if(E.$$type){return bA;
}var F=typeof E;

if(F===bw||F==bC||F===bz||F===bv){return F;
}else if(F===bs){if(E.nodeType){return bc;
}else if(E.classname){return V;
}else if(E instanceof Array){return Y;
}else if(E instanceof Error){return bb;
}else{return bt;
}}
if(E.toString){return by;
}return be;
},__em:function(c,d){var m=this.__el(c);
var g=be;
var f=[];

switch(m){case bB:case bm:g=m;
break;
case bC:case bz:case bv:g=c;
break;
case bc:if(c.nodeType===9){g=bj;
}else if(c.nodeType===3){g=bo+c.nodeValue+bx;
}else if(c.nodeType===1){g=c.nodeName.toLowerCase();

if(c.id){g+=bl+c.id;
}}else{g=bc;
}break;
case bw:g=qx.lang.Function.getName(c)||m;
break;
case V:g=c.basename+bh+c.$$hash+bx;
break;
case bA:case by:g=c.toString();
break;
case bb:f=qx.dev.StackTrace.getStackTraceFromError(c);
g=c.toString();
break;
case Y:if(d){g=[];

for(var i=0,l=c.length;i<l;i++){if(g.length>20){g.push(ba+(l-i)+X);
break;
}g.push(this.__em(c[i],false));
}}else{g=bp+c.length+bq;
}break;
case bt:if(d){var e;
var k=[];

for(var j in c){k.push(j);
}k.sort();
g=[];

for(var i=0,l=k.length;i<l;i++){if(g.length>20){g.push(ba+(l-i)+X);
break;
}j=k[i];
e=this.__em(c[j],false);
e.key=j;
g.push(e);
}}else{var h=0;

for(var j in c){h++;
}g=bg+h+bk;
}break;
}return {type:m,text:g,trace:f};
}}});
})();
(function(){var bg="qx.debug",bf="on",be="set",bd="qx.disposerDebugLevel",bc="get",bb="reset",ba="qx.core.Object",Y="]",X="Cannot call super class. Method is not derived: ",W="[",T="$$user_",V="object",U="Don't use '_disposeFields' - instead assign directly to 'null'",S="Object";
qx.Class.define(ba,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:S},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+W+this.$$hash+Y;
},base:function(w,x){if(qx.core.Variant.isSet(bg,bf)){this.assertFunction(w.callee.base,X+qx.lang.Function.getName(w.callee));
}
if(arguments.length===1){return w.callee.base.call(this);
}else{return w.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(q){return q.callee.self;
},clone:function(){var bB=this.constructor;
var bA=new bB;
var bD=qx.Class.getProperties(bB);
var bC=qx.core.Property.$$store.user;
var bE=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bD.length;i<l;i++){name=bD[i];

if(this.hasOwnProperty(bC[name])){bA[bE[name]](this[bC[name]]);
}}return bA;
},set:function(bq,br){var bt=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(bq)){if(!this[bt[bq]]){if(this[be+qx.lang.String.firstUp(bq)]!=undefined){this[be+qx.lang.String.firstUp(bq)](br);
return;
}
if(qx.core.Variant.isSet(bg,bf)){this.error("No such property: "+bq);
return this;
}}return this[bt[bq]](br);
}else{for(var bs in bq){if(!this[bt[bs]]){if(this[be+qx.lang.String.firstUp(bs)]!=undefined){this[be+qx.lang.String.firstUp(bs)](bq[bs]);
continue;
}
if(qx.core.Variant.isSet(bg,bf)){this.error("No such property: "+bs);
return this;
}}this[bt[bs]](bq[bs]);
}return this;
}},get:function(bn){var bo=qx.core.Property.$$method.get;

if(!this[bo[bn]]){if(this[bc+qx.lang.String.firstUp(bn)]!=undefined){return this[bc+qx.lang.String.firstUp(bn)]();
}
if(qx.core.Variant.isSet(bg,bf)){this.error("No such property: "+bn);
return this;
}}return this[bo[bn]]();
},reset:function(y){var z=qx.core.Property.$$method.reset;

if(!this[z[y]]){if(this[bb+qx.lang.String.firstUp(y)]!=undefined){this[bb+qx.lang.String.firstUp(y)]();
return;
}
if(qx.core.Variant.isSet(bg,bf)){this.error("No such property: "+y);
return this;
}}this[z[y]]();
},__jJ:qx.event.Registration,addListener:function(bh,bi,self,bj){if(!this.$$disposed){return this.__jJ.addListener(this,bh,bi,self,bj);
}return null;
},addListenerOnce:function(m,n,self,o){var p=function(e){n.call(self||this,e);
this.removeListener(m,p,this,o);
};
return this.addListener(m,p,this,o);
},removeListener:function(H,I,self,J){if(!this.$$disposed){return this.__jJ.removeListener(this,H,I,self,J);
}return false;
},removeListenerById:function(bp){if(!this.$$disposed){return this.__jJ.removeListenerById(this,bp);
}return false;
},hasListener:function(bk,bl){return this.__jJ.hasListener(this,bk,bl);
},dispatchEvent:function(bm){if(!this.$$disposed){return this.__jJ.dispatchEvent(this,bm);
}return true;
},fireEvent:function(bu,bv,bw){if(!this.$$disposed){return this.__jJ.fireEvent(this,bu,bv,bw);
}return true;
},fireNonBubblingEvent:function(A,B,C){if(!this.$$disposed){return this.__jJ.fireNonBubblingEvent(this,A,B,C);
}return true;
},fireDataEvent:function(g,h,j,k){if(!this.$$disposed){if(j===undefined){j=null;
}return this.__jJ.fireNonBubblingEvent(this,g,qx.event.type.Data,[h,j,!!k]);
}return true;
},__jK:null,setUserData:function(F,G){if(!this.__jK){this.__jK={};
}this.__jK[F]=G;
},getUserData:function(r){if(!this.__jK){return null;
}var s=this.__jK[r];
return s===undefined?null:s;
},__jL:qx.log.Logger,debug:function(u){this.__jL.debug(this,u);
},info:function(D){this.__jL.info(this,D);
},warn:function(bx){this.__jL.warn(this,bx);
},error:function(t){this.__jL.error(this,t);
},trace:function(){this.__jL.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bg,bf)){if(qx.core.Setting.get(bd)>1){qx.log.Logger.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var c=this.constructor;
var a;

while(c.superclass){if(c.$$destructor){c.$$destructor.call(this);
}if(c.$$includes){a=c.$$flatIncludes;

for(var i=0,l=a.length;i<l;i++){if(a[i].$$destructor){a[i].$$destructor.call(this);
}}}c=c.superclass;
}var f=qx.Class.getProperties(this.constructor);

for(var i=0,l=f.length;i<l;i++){delete this[T+f[i]];
}if(qx.core.Variant.isSet(bg,bf)){if(qx.core.Setting.get(bd)>0){var d,b;

for(d in this){b=this[d];
if(b!==null&&typeof b===V&&!(qx.lang.Type.isString(b))){if(this.constructor.prototype[d]!=null){continue;
}qx.log.Logger.warn(this,"Missing destruct definition for '"+d+"' in "+this.classname+"["+this.toHashCode()+"]: "+b);
delete this[d];
}}}}},_disposeFields:function(bF){qx.log.Logger.deprecatedMethodWarning(arguments.callee,U);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(E){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(by){qx.util.DisposeUtil.disposeArray(this,by);
},_disposeMap:function(bz){qx.util.DisposeUtil.disposeMap(this,bz);
}},settings:{"qx.disposerDebugLevel":0},defer:function(v){if(qx.core.Variant.isSet(bg,bf)){qx.Class.include(v,qx.core.MAssert);
}},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jK=null;
var M=this.constructor;
var Q;
var R=qx.core.Property.$$store;
var O=R.user;
var P=R.theme;
var K=R.inherit;
var N=R.useinit;
var L=R.init;

while(M){Q=M.$$properties;

if(Q){for(var name in Q){if(Q[name].dispose){this[O[name]]=this[P[name]]=this[K[name]]=this[N[name]]=this[L[name]]=undefined;
}}}M=M.superclass;
}}});
})();
(function(){var S="",R="g",Q="0",P='\\$1',O="%",N='-',M="qx.lang.String",L=' ',K='\n',J="undefined";
qx.Bootstrap.define(M,{statics:{camelCase:function(m){return m.replace(/\-([a-z])/g,function(y,z){return z.toUpperCase();
});
},hyphenate:function(u){return u.replace(/[A-Z]/g,function(e){return (N+e.charAt(0).toLowerCase());
});
},capitalize:function(D){return D.replace(/\b[a-z]/g,function(l){return l.toUpperCase();
});
},clean:function(a){return this.trim(a.replace(/\s+/g,L));
},trimLeft:function(t){return t.replace(/^\s+/,S);
},trimRight:function(C){return C.replace(/\s+$/,S);
},trim:function(E){return E.replace(/^\s+|\s+$/g,S);
},startsWith:function(c,d){return c.indexOf(d)===0;
},endsWith:function(v,w){return v.substring(v.length-w.length,v.length)===w;
},repeat:function(o,p){return o.length>=0?new Array(p+1).join(o):S;
},pad:function(h,length,j){var k=length-h.length;

if(k>0){if(typeof j===J){j=Q;
}return this.repeat(j,k)+h;
}else{return h;
}},firstUp:function(x){return x.charAt(0).toUpperCase()+x.substr(1);
},firstLow:function(g){return g.charAt(0).toLowerCase()+g.substr(1);
},contains:function(A,B){return A.indexOf(B)!=-1;
},format:function(q,r){var s=q;

for(var i=0;i<r.length;i++){s=s.replace(new RegExp(O+(i+1),R),r[i]);
}return s;
},escapeRegexpChars:function(f){return f.replace(/([.*+?^${}()|[\]\/\\])/g,P);
},toArray:function(n){return n.split(/\B|\b/g);
},stripTags:function(b){return b.replace(/<\/?[^>]+>/gi,S);
},stripScripts:function(F,G){var I=S;
var H=F.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){I+=arguments[1]+K;
return S;
});

if(G===true){qx.lang.Function.globalEval(I);
}return H;
}}});
})();
(function(){var U="qx.debug",T="object",S="Interface",R="on",Q="string",P="function",O="Boolean",N="qx.Interface",M="events",L="toggle",F="properties",K="]",I="members",E="number",D="boolean",H="is",G="[Interface ",J="statics";
qx.Bootstrap.define(N,{statics:{define:function(name,k){if(k){if(k.extend&&!(k.extend instanceof Array)){k.extend=[k.extend];
}if(qx.core.Variant.isSet(U,R)){this.__eN(name,k);
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=S;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(bk){if(!bk){return [];
}var bl=bk.concat();

for(var i=0,l=bk.length;i<l;i++){if(bk[i].$$extends){bl.push.apply(bl,this.flatten(bk[i].$$extends));
}}return bl;
},__eH:function(q,r,s,t){var x=s.$$members;

if(x){for(var w in x){if(qx.lang.Type.isFunction(x[w])){var v=this.__eI(r,w);
var u=v||qx.lang.Type.isFunction(q[w]);

if(!u){throw new Error('Implementation of method "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}var y=t===true&&!v&&!qx.Class.hasInterface(r,s);

if(y){q[w]=this.__eL(s,q[w],w,x[w]);
}}else{if(typeof q[w]===undefined){if(typeof q[w]!==P){throw new Error('Implementation of member "'+w+'" is missing in class "'+r.classname+'" required by interface "'+s.name+'"');
}}}}}},__eI:function(ba,bb){var bf=bb.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!bf){return false;
}var bc=qx.lang.String.firstLow(bf[2]);
var bd=qx.Class.hasProperty(ba,bc);

if(!bd){return false;
}var be=bf[0]==H||bf[0]==L;

if(be){return qx.Class.getPropertyDefinition(ba,bc).check==O;
}return true;
},__eJ:function(b,c){if(c.$$properties){for(var d in c.$$properties){if(!qx.Class.hasProperty(b,d)){throw new Error('The property "'+d+'" is not supported by Class "'+b.classname+'"!');
}}}},__eK:function(n,o){if(o.$$events){for(var p in o.$$events){if(!qx.Class.supportsEvent(n,p)){throw new Error('The event "'+p+'" is not supported by Class "'+n.classname+'"!');
}}}},assertObject:function(bg,bh){var bj=bg.constructor;
this.__eH(bg,bj,bh,false);
this.__eJ(bj,bh);
this.__eK(bj,bh);
var bi=bh.$$extends;

if(bi){for(var i=0,l=bi.length;i<l;i++){this.assertObject(bg,bi[i]);
}}},assert:function(z,A,B){this.__eH(z.prototype,z,A,B);
this.__eJ(z,A);
this.__eK(z,A);
var C=A.$$extends;

if(C){for(var i=0,l=C.length;i<l;i++){this.assert(z,C[i],B);
}}},genericToString:function(){return G+this.name+K;
},$$registry:{},__eL:qx.core.Variant.select(U,{"on":function(e,f,g,h){function j(){h.apply(this,arguments);
return f.apply(this,arguments);
}f.wrapper=j;
return j;
},"default":function(){}}),__eM:qx.core.Variant.select(U,{"on":{"extend":T,"statics":T,"members":T,"properties":T,"events":T},"default":null}),__eN:qx.core.Variant.select(U,{"on":function(name,V){if(qx.core.Variant.isSet(U,R)){var Y=this.__eM;

for(var X in V){if(Y[X]===undefined){throw new Error('The configuration key "'+X+'" in class "'+name+'" is not allowed!');
}
if(V[X]==null){throw new Error("Invalid key '"+X+"' in interface '"+name+"'! The value is undefined/null!");
}
if(Y[X]!==null&&typeof V[X]!==Y[X]){throw new Error('Invalid type of key "'+X+'" in interface "'+name+'"! The type of the key must be "'+Y[X]+'"!');
}}var W=[J,I,F,M];

for(var i=0,l=W.length;i<l;i++){var X=W[i];

if(V[X]!==undefined&&(V[X] instanceof Array||V[X] instanceof RegExp||V[X] instanceof Date||V[X].classname!==undefined)){throw new Error('Invalid key "'+X+'" in interface "'+name+'"! The value needs to be a map!');
}}if(V.extend){for(var i=0,a=V.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==S){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(V.statics){for(var X in V.statics){if(X.toUpperCase()!==X){throw new Error('Invalid key "'+X+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof V.statics[X]){case D:case Q:case E:break;
default:throw new Error('Invalid key "'+X+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(a,b,c){},unregisterEvent:function(e,f,g){}}});
})();
(function(){var g="qx.globalErrorHandling",f="on",e="qx.event.GlobalError";
qx.Bootstrap.define(e,{statics:{setErrorHandler:function(b,c){this.__iC=b||null;
this.__iD=c||window;

if(qx.core.Setting.get(g)===f){if(b&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__iE,this);
}
if(!b&&window.onerror){window.onerror=null;
}}},__iE:function(h,i,j){if(this.__iC){this.handleError(new qx.core.WindowError(h,i,j));
return true;
}},observeMethod:function(k){if(qx.core.Setting.get(g)===f){var self=this;
return function(){if(!self.__iC){return k.apply(this,arguments);
}
try{return k.apply(this,arguments);
}catch(a){self.handleError(a);
}};
}else{return k;
}},handleError:function(d){if(this.__iC){this.__iC.call(this.__iD,d);
}}},defer:function(l){qx.core.Setting.define(g,f);
l.setErrorHandler(null,null);
}});
})();
(function(){var t="ready",s="qx.client",r="mshtml",q="load",p="unload",o="qx.event.handler.Application",n="complete",m="gecko|opera|webkit",l="left",k="DOMContentLoaded",j="shutdown";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__gn=false;
this.__go=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gp:false,onScriptLoaded:function(){this.__gp=true;
var u=qx.event.handler.Application.$$instance;

if(u){u.__gs();
}}},members:{canHandleEvent:function(w,x){},registerEvent:function(b,c,d){},unregisterEvent:function(f,g,h){},__gq:null,__gn:null,__go:null,__gr:null,__gs:function(){var a=qx.event.handler.Application;
if(!this.__gq&&this.__gn&&a.__gp){if(qx.core.Variant.isSet(s,r)){if(qx.event.Registration.hasListener(this._window,t)){this.__gq=true;
qx.event.Registration.fireEvent(this._window,t);
}}else{this.__gq=true;
qx.event.Registration.fireEvent(this._window,t);
}}},isApplicationReady:function(){return this.__gq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==n){this.__gn=true;
this.__gs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(s,m)){qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(s,r)){var self=this;
var z=function(){try{document.documentElement.doScroll(l);

if(document.body){self._onNativeLoadWrapped();
}}catch(v){window.setTimeout(z,100);
}};
z();
}qx.bom.Event.addNativeListener(this._window,q,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,p,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,q,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,p,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gn=true;
this.__gs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gr){this.__gr=true;

try{qx.event.Registration.fireEvent(this._window,j);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var b="qx.event.handler.Window";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this._manager=a;
this._window=a.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(t,u){},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,f){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.addNativeListener(this._window,k,this._onNativeWrapper);
}},_stopWindowObserver:function(){var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var p=this._window;

try{var s=p.document;
}catch(e){return ;
}var q=s.documentElement;
var o=e.target||e.srcElement;

if(o==null||o===p||o===s||o===q){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,p]);
qx.event.Registration.dispatchEvent(p,event);
var r=event.getReturnValue();

if(r!=null){e.returnValue=r;
return r;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var e="on",d="qx.debug",c="qx.event.dispatch.Direct";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){this._manager=g;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(a,event,b){return !event.getBubbles();
},dispatchEvent:function(h,event,j){if(qx.core.Variant.isSet(d,e)){if(h instanceof qx.core.Object){var n=qx.Class.getEventType(h.constructor,j);
var k=qx.Class.getByName(n);

if(!k){this.error("The event type '"+j+"' declared in the class '"+h.constructor+" is not an available class': "+n);
}else if(!(event instanceof k)){this.error("Expected event type to be instanceof '"+n+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var o=this._manager.getListeners(h,j,false);

if(o){for(var i=0,l=o.length;i<l;i++){var m=o[i].context||h;
o[i].handler.call(m,event);
}}}},defer:function(f){qx.event.Registration.addDispatcher(f);
}});
})();
(function(){var g="ready",f="qx.application",d="beforeunload",c="qx.core.Init",b="shutdown";
qx.Class.define(c,{statics:{getApplication:function(){return this.__iz||null;
},__iy:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var k=qx.core.Setting.get(f);
var l=qx.Class.getByName(k);

if(l){this.__iz=new l;
var j=new Date;
this.__iz.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-j)+"ms");
var j=new Date;
this.__iz.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-j)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+k);
}},__iA:function(e){var h=this.__iz;

if(h){e.setReturnValue(h.close());
}},__iB:function(){var i=this.__iz;

if(i){i.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iy,a);
qx.event.Registration.addListener(window,b,a.__iB,a);
qx.event.Registration.addListener(window,d,a.__iA,a);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(g,h){var i=qx.locale.Manager;

if(i){return i.tr.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(j){var k=qx.locale.Manager;

if(k){return k.marktr.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__kX:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__kX;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__kX=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__kX=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/sourceview.css",c="script/demodata.js",b="on",a="demobrowser/css/style.css";
qx.Class.define(g,{extend:qx.application.Standalone,construct:function(){arguments.callee.base.call(this);
qx.bom.Stylesheet.includeFile(a);
qx.bom.Stylesheet.includeFile(d);
},members:{main:function(){arguments.callee.base.call(this);
if(qx.core.Variant.isSet(e,b)){qx.log.appender.Native;
qx.log.appender.Console;
}this.viewer=new demobrowser.DemoBrowser;
this.getRoot().add(this.viewer,{edge:0});
},finalize:function(){arguments.callee.base.call(this);
this.viewer.dataLoader(c);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var p="emulated",o="native",n='"',m="qx.lang.Core",k="\\\\",j="\\\"",h="[object Error]";
qx.Bootstrap.define(m,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==h)?p:o,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?o:p,{"native":Array.prototype.indexOf,"emulated":function(w,x){if(x==null){x=0;
}else if(x<0){x=Math.max(0,this.length+x);
}
for(var i=x;i<this.length;i++){if(this[i]===w){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?o:p,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?o:p,{"native":Array.prototype.forEach,"emulated":function(e,f){var l=this.length;

for(var i=0;i<l;i++){var g=this[i];

if(g!==undefined){e.call(f||window,g,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?o:p,{"native":Array.prototype.filter,"emulated":function(a,b){var c=[];
var l=this.length;

for(var i=0;i<l;i++){var d=this[i];

if(d!==undefined){if(a.call(b||window,d,i,this)){c.push(this[i]);
}}}return c;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?o:p,{"native":Array.prototype.map,"emulated":function(y,z){var A=[];
var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){A[i]=y.call(z||window,B,i,this);
}}return A;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?o:p,{"native":Array.prototype.some,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(t.call(u||window,v,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?o:p,{"native":Array.prototype.every,"emulated":function(q,r){var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){if(!q.call(r||window,s,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?o:p,{"native":String.prototype.quote,"emulated":function(){return n+this.replace(/\\/g,k).replace(/\"/g,j)+n;
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
(function(){var n="indexOf",m="lastIndexOf",k="slice",j="concat",h="join",g="toLocaleUpperCase",f="shift",e="substr",d="filter",c="unshift",K="match",J="quote",I="qx.lang.Generics",H="localeCompare",G="sort",F="some",E="charAt",D="split",C="substring",B="pop",v="toUpperCase",w="replace",t="push",u="charCodeAt",q="every",r="reverse",o="search",p="forEach",x="map",y="toLowerCase",A="splice",z="toLocaleLowerCase";
qx.Bootstrap.define(I,{statics:{__cb:{"Array":[h,r,G,t,B,f,c,A,j,k,n,m,p,x,d,F,q],"String":[J,C,y,v,E,u,n,m,z,g,H,K,o,w,D,e,j,k]},__cc:function(a,b){return function(s){return a.prototype[b].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cd:function(){var M=qx.lang.Generics.__cb;

for(var Q in M){var O=window[Q];
var N=M[Q];

for(var i=0,l=N.length;i<l;i++){var P=N[i];

if(!O[P]){O[P]=qx.lang.Generics.__cc(O,P);
}}}}},defer:function(L){L.__cd();
}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(j){},setItem:function(g,h){},splice:function(a,b,c){},contains:function(i){},getLength:function(){},toArray:function(){}}});
})();
(function(){var s=":",r="qx.client",q="anonymous",p="...",o="qx.dev.StackTrace",n="",m="\n",l="/source/class/",k=".";
qx.Bootstrap.define(o,{statics:{getStackTrace:qx.core.Variant.select(r,{"gecko":function(){try{throw new Error();
}catch(j){var B=this.getStackTraceFromError(j);
qx.lang.Array.removeAt(B,0);
var z=this.getStackTraceFromCaller(arguments);
var x=z.length>B.length?z:B;

for(var i=0;i<Math.min(z.length,B.length);i++){var y=z[i];

if(y.indexOf(q)>=0){continue;
}var F=y.split(s);

if(F.length!=2){continue;
}var D=F[0];
var w=F[1];
var v=B[i];
var G=v.split(s);
var C=G[0];
var u=G[1];

if(qx.Class.getByName(C)){var A=C;
}else{A=D;
}var E=A+s;

if(w){E+=w+s;
}E+=u;
x[i]=E;
}return x;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var I;

try{I.bar();
}catch(t){var J=this.getStackTraceFromError(t);
qx.lang.Array.removeAt(J,0);
return J;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(r,{"opera":function(K){return [];
},"default":function(W){var bc=[];
var bb=qx.lang.Function.getCaller(W);
var X={};

while(bb){var Y=qx.lang.Function.getName(bb);
bc.push(Y);

try{bb=bb.caller;
}catch(a){break;
}
if(!bb){break;
}var ba=qx.core.ObjectRegistry.toHashCode(bb);

if(X[ba]){bc.push(p);
break;
}X[ba]=bb;
}return bc;
}}),getStackTraceFromError:qx.core.Variant.select(r,{"gecko":function(P){if(!P.stack){return [];
}var V=/@(.+):(\d+)$/gm;
var Q;
var R=[];

while((Q=V.exec(P.stack))!=null){var S=Q[1];
var U=Q[2];
var T=this.__iS(S);
R.push(T+s+U);
}return R;
},"webkit":function(H){if(H.sourceURL&&H.line){return [this.__iS(H.sourceURL)+s+H.line];
}else{return [];
}},"opera":function(b){if(b.message.indexOf("Backtrace:")<0){return [];
}var d=[];
var e=qx.lang.String.trim(b.message.split("Backtrace:")[1]);
var f=e.split(m);

for(var i=0;i<f.length;i++){var c=f[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(c&&c.length>=2){var h=c[1];
var g=this.__iS(c[2]);
d.push(g+s+h);
}}return d;
},"default":function(){return [];
}}),__iS:function(L){var O=l;
var M=L.indexOf(O);
var N=(M==-1)?L:L.substring(M+O.length).replace(/\//g,k).replace(/\.js$/,n);
return N;
}}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__dY=c;
this.__ea=d||b;
this.__eb=e===undefined?-1:e;
},members:{__dY:null,__ea:null,__eb:null,toString:function(){return this.__dY;
},getUri:function(){return this.__ea;
},getLineNumber:function(){return this.__eb;
}}});
})();
(function(){var m="qx.debug",l="on",k="Cannot stop propagation on a non bubbling event: ",j="Invalid argument value 'cancelable'.",i="Cannot prevent default action on a non cancelable event: ",h="Invalid argument value 'canBubble'.",g="qx.event.type.Event";
qx.Class.define(g,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(n,o){if(qx.core.Variant.isSet(m,l)){if(n!==undefined){qx.core.Assert.assertBoolean(n,h);
}
if(o!==undefined){qx.core.Assert.assertBoolean(o,j);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!n;
this._cancelable=!!o;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(q){if(q){var r=q;
}else{var r=qx.event.Pool.getInstance().getObject(this.constructor);
}r._type=this._type;
r._target=this._target;
r._currentTarget=this._currentTarget;
r._relatedTarget=this._relatedTarget;
r._originalTarget=this._originalTarget;
r._stopPropagation=this._stopPropagation;
r._bubbles=this._bubbles;
r._preventDefault=this._preventDefault;
r._cancelable=this._cancelable;
return r;
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){if(qx.core.Variant.isSet(m,l)){this.assertTrue(this._bubbles,k+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(m,l)){this.assertTrue(this._cancelable,i+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(e){this._type=e;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(p){this._eventPhase=p;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(s){this._currentTarget=s;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(b){this._bubbles=b;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(c){this._cancelable=c;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var d="qx.event.type.Data";
qx.Class.define(d,{extend:qx.event.type.Event,members:{__hS:null,__hT:null,init:function(a,b,c){arguments.callee.base.call(this,false,c);
this.__hS=a;
this.__hT=b;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__hS=this.__hS;
f.__hT=this.__hT;
return f;
},getData:function(){return this.__hS;
},getOldData:function(){return this.__hT;
}},destruct:function(){this.__hS=this.__hT=null;
}});
})();
(function(){var F="get",E="",D="[",C=".",B="last",A="change",z="]",y="Number",x="String",w="set",ba="deepBinding",Y="item",X="reset",W="' (",V="on",U="qx.debug",T="Boolean",S=") to the object '",R="Integer",Q="qx.event.type.Data",M="qx.data.SingleValueBinding",N="No event could be found for the property",K="Can not remove the bindings for null object!",L="Binding from '",I="PositiveNumber",J="PositiveInteger",G="Binding does not exist!",H=" is not an data (qx.event.type.Data) event on ",O=").",P="Date";
qx.Class.define(M,{statics:{DEBUG_ON:false,__fa:{},bind:function(bh,bi,bj,bk,bl){var bv=this.__fc(bh,bi,bj,bk,bl);
var bq=bi.split(C);
var bn=this.__fj(bq);
var bu=[];
var br=[];
var bs=[];
var bo=[];
var bp=bh;
for(var i=0;i<bq.length;i++){if(bn[i]!==E){bo.push(A);
}else{bo.push(this.__fe(bp,bq[i]));
}bu[i]=bp;
if(i==bq.length-1){if(bn[i]!==E){var by=bn[i]===B?bp.length-1:bn[i];
var bm=bp.getItem(by);
this.__fi(bm,bj,bk,bl,bh);
bs[i]=this.__fk(bp,bo[i],bj,bk,bl,bn[i]);
}else{if(bq[i]!=null&&bp[F+qx.lang.String.firstUp(bq[i])]!=null){var bm=bp[F+qx.lang.String.firstUp(bq[i])]();
this.__fi(bm,bj,bk,bl,bh);
}bs[i]=this.__fk(bp,bo[i],bj,bk,bl);
}}else{var bw={index:i,propertyNames:bq,sources:bu,listenerIds:bs,arrayIndexValues:bn,targetObject:bj,targetPropertyChain:bk,options:bl,listeners:br};
var bt=qx.lang.Function.bind(this.__fb,this,bw);
br.push(bt);
bs[i]=bp.addListener(bo[i],bt);
}if(bp[F+qx.lang.String.firstUp(bq[i])]==null){bp=null;
}else if(bn[i]!==E){bp=bp[F+qx.lang.String.firstUp(bq[i])](bn[i]);
}else{bp=bp[F+qx.lang.String.firstUp(bq[i])]();
}
if(!bp){break;
}}var bx={type:ba,listenerIds:bs,sources:bu,targetListenerIds:bv.listenerIds,targets:bv.targets};
this.__fl(bx,bh,bi,bj,bk);
return bx;
},__fb:function(cr){if(cr.options&&cr.options.onUpdate){cr.options.onUpdate(cr.sources[cr.index],cr.targetObject);
}for(var j=cr.index+1;j<cr.propertyNames.length;j++){var cv=cr.sources[j];
cr.sources[j]=null;

if(!cv){continue;
}cv.removeListenerById(cr.listenerIds[j]);
}var cv=cr.sources[cr.index];
for(var j=cr.index+1;j<cr.propertyNames.length;j++){if(cr.arrayIndexValues[j-1]!==E){cv=cv[F+qx.lang.String.firstUp(cr.propertyNames[j-1])](cr.arrayIndexValues[j-1]);
}else{cv=cv[F+qx.lang.String.firstUp(cr.propertyNames[j-1])]();
}cr.sources[j]=cv;
if(!cv){this.__ff(cr.targetObject,cr.targetPropertyChain);
break;
}if(j==cr.propertyNames.length-1){if(qx.Class.implementsInterface(cv,qx.data.IListData)){var cw=cr.arrayIndexValues[j]===B?cv.length-1:cr.arrayIndexValues[j];
var ct=cv.getItem(cw);
this.__fi(ct,cr.targetObject,cr.targetPropertyChain,cr.options,cr.sources[cr.index]);
cr.listenerIds[j]=this.__fk(cv,A,cr.targetObject,cr.targetPropertyChain,cr.options,cr.arrayIndexValues[j]);
}else{if(cr.propertyNames[j]!=null&&cv[F+qx.lang.String.firstUp(cr.propertyNames[j])]!=null){var ct=cv[F+qx.lang.String.firstUp(cr.propertyNames[j])]();
this.__fi(ct,cr.targetObject,cr.targetPropertyChain,cr.options,cr.sources[cr.index]);
}var cu=this.__fe(cv,cr.propertyNames[j]);
cr.listenerIds[j]=this.__fk(cv,cu,cr.targetObject,cr.targetPropertyChain,cr.options);
}}else{if(cr.listeners[j]==null){var cs=qx.lang.Function.bind(this.__fb,this,cr);
cr.listeners.push(cs);
}if(qx.Class.implementsInterface(cv,qx.data.IListData)){var cu=A;
}else{var cu=this.__fe(cv,cr.propertyNames[j]);
}cr.listenerIds[j]=cv.addListener(cu,cr.listeners[j]);
}}},__fc:function(cx,cy,cz,cA,cB){var cF=cA.split(C);
var cD=this.__fj(cF);
var cK=[];
var cJ=[];
var cH=[];
var cG=[];
var cE=cz;
for(var i=0;i<cF.length-1;i++){if(cD[i]!==E){cG.push(A);
}else{try{cG.push(this.__fe(cE,cF[i]));
}catch(e){break;
}}cK[i]=cE;
var cI=function(){for(var j=i+1;j<cF.length-1;j++){var ce=cK[j];
cK[j]=null;

if(!ce){continue;
}ce.removeListenerById(cH[j]);
}var ce=cK[i];
for(var j=i+1;j<cF.length-1;j++){var cc=qx.lang.String.firstUp(cF[j-1]);
if(cD[j-1]!==E){var cf=cD[j-1]===B?ce.getLength()-1:cD[j-1];
ce=ce[F+cc](cf);
}else{ce=ce[F+cc]();
}cK[j]=ce;
if(cJ[j]==null){cJ.push(cI);
}if(qx.Class.implementsInterface(ce,qx.data.IListData)){var cd=A;
}else{try{var cd=qx.data.SingleValueBinding.__fe(ce,cF[j]);
}catch(e){break;
}}cH[j]=ce.addListener(cd,cJ[j]);
}qx.data.SingleValueBinding.__fd(cx,cy,cz,cA);
};
cJ.push(cI);
cH[i]=cE.addListener(cG[i],cI);
var cC=qx.lang.String.firstUp(cF[i]);
if(cE[F+cC]==null){cE=null;
}else if(cD[i]!==E){cE=cE[F+cC](cD[i]);
}else{cE=cE[F+cC]();
}
if(!cE){break;
}}return {listenerIds:cH,targets:cK};
},__fd:function(cL,cM,cN,cO){var cS=this.__fh(cL,cM);

if(cS!=null){var cU=cM.substring(cM.lastIndexOf(C)+1,cM.length);
if(cU.charAt(cU.length-1)==z){var cP=cU.substring(cU.lastIndexOf(D)+1,cU.length-1);
var cR=cU.substring(0,cU.lastIndexOf(D));
var cT=cS[F+qx.lang.String.firstUp(cR)]();

if(cP==B){cP=cT.length-1;
}
if(cT!=null){var cQ=cT.getItem(cP);
}}else{var cQ=cS[F+qx.lang.String.firstUp(cU)]();
}}this.__fg(cN,cO,cQ);
},__fe:function(be,bf){var bg=this.__fn(be,bf);
if(bg==null){if(qx.Class.supportsEvent(be.constructor,bf)){bg=bf;
}else if(qx.Class.supportsEvent(be.constructor,A+qx.lang.String.firstUp(bf))){bg=A+qx.lang.String.firstUp(bf);
}else{throw new qx.core.AssertionError(N,bf);
}}return bg;
},__ff:function(bI,bJ){var bK=this.__fh(bI,bJ);

if(bK!=null){var bL=bJ.substring(bJ.lastIndexOf(C)+1,bJ.length);
if(bL.charAt(bL.length-1)==z){this.__fg(bI,bJ,null);
return;
}if(bK[X+qx.lang.String.firstUp(bL)]!=undefined){bK[X+qx.lang.String.firstUp(bL)]();
}else{bK[w+qx.lang.String.firstUp(bL)](null);
}}},__fg:function(g,h,k){var o=this.__fh(g,h);

if(o!=null){var p=h.substring(h.lastIndexOf(C)+1,h.length);
if(p.charAt(p.length-1)==z){var l=p.substring(p.lastIndexOf(D)+1,p.length-1);
var n=p.substring(0,p.lastIndexOf(D));
var m=o[F+qx.lang.String.firstUp(n)]();

if(l==B){l=m.length-1;
}
if(m!=null){m.setItem(l,k);
}}else{o[w+qx.lang.String.firstUp(p)](k);
}}},__fh:function(dd,de){var dh=de.split(C);
var di=dd;
for(var i=0;i<dh.length-1;i++){try{var dg=dh[i];
if(dg.indexOf(z)==dg.length-1){var df=dg.substring(dg.indexOf(D)+1,dg.length-1);
dg=dg.substring(0,dg.indexOf(D));
}di=di[F+qx.lang.String.firstUp(dg)]();

if(df!=null){if(df==B){df=di.length-1;
}di=di.getItem(df);
df=null;
}}catch(cV){return null;
}}return di;
},__fi:function(bP,bQ,bR,bS,bT){bP=this.__fm(bP,bQ,bR,bS);
if(bP==null){this.__ff(bQ,bR);
}if(bP!=undefined){try{this.__fg(bQ,bR,bP);
if(bS&&bS.onUpdate){bS.onUpdate(bT,bQ,bP);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bS&&bS.onSetFail){bS.onSetFail(e);
}else{this.warn("Failed so set value "+bP+" on "+bQ+". Error message: "+e);
}}}},__fj:function(bU){var bV=[];
for(var i=0;i<bU.length;i++){var name=bU[i];
if(qx.lang.String.endsWith(name,z)){var bW=name.substring(name.indexOf(D)+1,name.indexOf(z));
if(name.indexOf(z)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bW!==B){if(bW==E||isNaN(parseInt(bW))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(D)!=0){bU[i]=name.substring(0,name.indexOf(D));
bV[i]=E;
bV[i+1]=bW;
bU.splice(i+1,0,Y);
i++;
}else{bV[i]=bW;
bU.splice(i,1,Y);
}}else{bV[i]=E;
}}return bV;
},__fk:function(bz,bA,bB,bC,bD,bE){if(qx.core.Variant.isSet(U,V)){var bF=qx.Class.getEventType(bz.constructor,bA);
qx.core.Assert.assertEquals(Q,bF,bA+H+bz+C);
}var bH=function(bX,e){if(bX!==E){if(bX===B){bX=bz.length-1;
}var cb=bz.getItem(bX);
if(cb==undefined){qx.data.SingleValueBinding.__ff(bB,bC);
}var bY=e.getData().start;
var ca=e.getData().end;

if(bX<bY||bX>ca){return;
}}else{var cb=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bz+" by "+bA+" to "+bB+" ("+bC+")");
qx.log.Logger.debug("Data before conversion: "+cb);
}cb=qx.data.SingleValueBinding.__fm(cb,bB,bC,bD);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cb);
}try{if(cb!=undefined){qx.data.SingleValueBinding.__fg(bB,bC,cb);
}else{qx.data.SingleValueBinding.__ff(bB,bC);
}if(bD&&bD.onUpdate){bD.onUpdate(bz,bB,cb);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bD&&bD.onSetFail){bD.onSetFail(e);
}else{this.warn("Failed so set value "+cb+" on "+bB+". Error message: "+e);
}}};
if(!bE){bE=E;
}bH=qx.lang.Function.bind(bH,bz,bE);
var bG=bz.addListener(bA,bH);
return bG;
},__fl:function(a,b,c,d,f){if(this.__fa[b.toHashCode()]===undefined){this.__fa[b.toHashCode()]=[];
}this.__fa[b.toHashCode()].push([a,b,c,d,f]);
},__fm:function(cg,ch,ci,cj){if(cj&&cj.converter){var cl;

if(ch.getModel){cl=ch.getModel();
}return cj.converter(cg,cl);
}else{var cn=this.__fh(ch,ci);
var co=ci.substring(ci.lastIndexOf(C)+1,ci.length);
if(cn==null){return cg;
}var cm=qx.Class.getPropertyDefinition(cn.constructor,co);
var ck=cm==null?E:cm.check;
return this.__fo(cg,ck);
}},__fn:function(bb,bc){var bd=qx.Class.getPropertyDefinition(bb.constructor,bc);

if(bd==null){return null;
}return bd.event;
},__fo:function(bM,bN){var bO=qx.lang.Type.getClass(bM);
if((bO==y||bO==x)&&(bN==R||bN==J)){bM=parseInt(bM);
}if((bO==T||bO==y||bO==P)&&bN==x){bM=bM+E;
}if((bO==y||bO==x)&&(bN==y||bN==I)){bM=parseFloat(bM);
}return bM;
},removeBindingFromObject:function(cW,cX){if(cX.type==ba){for(var i=0;i<cX.sources.length;i++){if(cX.sources[i]){cX.sources[i].removeListenerById(cX.listenerIds[i]);
}}for(var i=0;i<cX.targets.length;i++){if(cX.targets[i]){cX.targets[i].removeListenerById(cX.targetListenerIds[i]);
}}}else{cW.removeListenerById(cX);
}var cY=this.__fa[cW.toHashCode()];
if(cY!=undefined){for(var i=0;i<cY.length;i++){if(cY[i][0]==cX){qx.lang.Array.remove(cY,cY[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(db){if(qx.core.Variant.isSet(U,V)){qx.core.Assert.assertNotNull(db,K);
}var dc=this.__fa[db.toHashCode()];

if(dc!=undefined){for(var i=dc.length-1;i>=0;i--){this.removeBindingFromObject(db,dc[i][0]);
}}},getAllBindingsForObject:function(da){if(this.__fa[da.toHashCode()]===undefined){this.__fa[da.toHashCode()]=[];
}return this.__fa[da.toHashCode()];
},removeAllBindings:function(){for(var cq in this.__fa){var cp=qx.core.ObjectRegistry.fromHashCode(cq);
if(cp==null){delete this.__fa[cq];
continue;
}this.removeAllBindingsForObject(cp);
}this.__fa={};
},getAllBindings:function(){return this.__fa;
},showBindingInLog:function(q,r){var t;
for(var i=0;i<this.__fa[q.toHashCode()].length;i++){if(this.__fa[q.toHashCode()][i][0]==r){t=this.__fa[q.toHashCode()][i];
break;
}}
if(t===undefined){var s=G;
}else{var s=L+t[1]+W+t[2]+S+t[3]+W+t[4]+O;
}qx.log.Logger.debug(s);
},showAllBindingsInLog:function(){for(var v in this.__fa){var u=qx.core.ObjectRegistry.fromHashCode(v);

for(var i=0;i<this.__fa[v].length;i++){this.showBindingInLog(u,this.__fa[v][i][0]);
}}}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bX=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bX:null,message:null,getComment:function(){return this.__bX;
},toString:function(){return this.__bX+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__jM=qx.dev.StackTrace.getStackTrace();
},members:{__jM:null,getStackTrace:function(){return this.__jM;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(d,e){return qx.Class.supportsEvent(d.constructor,e);
},registerEvent:function(a,b,c){},unregisterEvent:function(h,i,j){}},defer:function(f){qx.event.Registration.addHandler(f);
}});
})();
(function(){var k="Don't use 'disposeFields' - instead assign directly to 'null'",j="qx.util.DisposeUtil";
qx.Class.define(j,{statics:{disposeFields:function(a,b){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
var name;

for(var i=0,l=b.length;i<l;i++){var name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}a[name]=null;
}},disposeObjects:function(c,d){var name;

for(var i=0,l=d.length;i<l;i++){name=d[i];

if(c[name]==null||!c.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(c[name].dispose){c[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}c[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(q){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+q);
}h.length=0;
e[f]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(u){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+u);
}m[n]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var j="qx.util.ObjectPool",h="Integer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this.__eG={};

if(d!=null){this.setSize(d);
}},properties:{size:{check:h,init:Infinity}},members:{__eG:null,getObject:function(e){if(this.$$disposed){return;
}
if(!e){throw new Error("Class needs to be defined!");
}var f=null;
var g=this.__eG[e.classname];

if(g){f=g.pop();
}
if(f){f.$$pooled=false;
}else{f=new e;
}return f;
},poolObject:function(k){if(!this.__eG){return;
}var m=k.classname;
var n=this.__eG[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__eG[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var c=this.__eG;
var a,b,i,l;

for(a in c){b=c[a];

for(i=0,l=b.length;i<l;i++){b[i].dispose();
}}delete this.__eG;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var C=",",B="",A="string",z="null",y='"',x="qx.jsonDebugging",w='\\u00',v="new Date(Date.UTC(",u='\\\\',t="__mh",Y='\\f',X='\\"',W="))",V="}",U='(',T=":",S="{",R='\\r',Q="__lX",P='\\t',J="__mi",K="]",H="[",I="Use 'parse' instead!",F="qx.jsonEncodeUndefined",G='\\b',D="qx.util.Json",E=')',L="__lW",M="__ma",O='\\n',N="__lY";
qx.Class.define(D,{statics:{__lU:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__lV:{"function":L,"boolean":Q,"number":N,"string":M,"object":t,"undefined":J},__lW:function(e,f){return String(e);
},__lX:function(bp,bq){return String(bp);
},__lY:function(bk,bl){return isFinite(bk)?String(bk):z;
},__ma:function(h,j){var k;

if(/["\\\x00-\x1f]/.test(h)){k=h.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__mc);
}else{k=h;
}return y+k+y;
},__mb:{'\b':G,'\t':P,'\n':O,'\f':Y,'\r':R,'"':X,'\\':u},__mc:function(a,b){var g=qx.util.Json.__mb[b];

if(g){return g;
}g=b.charCodeAt();
return w+Math.floor(g/16).toString(16)+(g%16).toString(16);
},__md:function(m,n){var p=[],s=true,r,o;
var q=qx.util.Json.__mk;
p.push(H);

if(q){qx.util.Json.__me+=qx.util.Json.BEAUTIFYING_INDENT;
p.push(qx.util.Json.__me);
}
for(var i=0,l=m.length;i<l;i++){o=m[i];
r=this.__lV[typeof o];

if(r){o=this[r](o,i+B);

if(typeof o==A){if(!s){p.push(C);

if(q){p.push(qx.util.Json.__me);
}}p.push(o);
s=false;
}}}
if(q){qx.util.Json.__me=qx.util.Json.__me.substring(0,qx.util.Json.__me.length-qx.util.Json.BEAUTIFYING_INDENT.length);
p.push(qx.util.Json.__me);
}p.push(K);
return p.join(B);
},__mf:function(bh,bi){var bj=bh.getUTCFullYear()+C+bh.getUTCMonth()+C+bh.getUTCDate()+C+bh.getUTCHours()+C+bh.getUTCMinutes()+C+bh.getUTCSeconds()+C+bh.getUTCMilliseconds();
return v+bj+W;
},__mg:function(bu,bv){var by=[],bA=true,bx,bw;
var bz=qx.util.Json.__mk;
by.push(S);

if(bz){qx.util.Json.__me+=qx.util.Json.BEAUTIFYING_INDENT;
by.push(qx.util.Json.__me);
}
for(var bv in bu){bw=bu[bv];
bx=this.__lV[typeof bw];

if(bx){bw=this[bx](bw,bv);

if(typeof bw==A){if(!bA){by.push(C);

if(bz){by.push(qx.util.Json.__me);
}}by.push(this.__ma(bv),T,bw);
bA=false;
}}}
if(bz){qx.util.Json.__me=qx.util.Json.__me.substring(0,qx.util.Json.__me.length-qx.util.Json.BEAUTIFYING_INDENT.length);
by.push(qx.util.Json.__me);
}by.push(V);
return by.join(B);
},__mh:function(br,bs){if(br){if(qx.lang.Type.isFunction(br.toJSON)&&br.toJSON!==this.__lU){return this.__mj(br.toJSON(bs),bs);
}else if(qx.lang.Type.isDate(br)){return this.__mf(br,bs);
}else if(qx.lang.Type.isArray(br)){return this.__md(br,bs);
}else if(qx.lang.Type.isObject(br)){return this.__mg(br,bs);
}return B;
}return z;
},__mi:function(bf,bg){if(qx.core.Setting.get(F)){return z;
}},__mj:function(c,d){return this[this.__lV[typeof c]](c,d);
},stringify:function(bm,bn){this.__mk=bn;
this.__me=this.BEAUTIFYING_LINE_END;
var bo=this.__mj(bm,B);

if(typeof bo!=A){bo=null;
}if(qx.core.Setting.get(x)){qx.log.Logger.debug(this,"JSON request: "+bo);
}return bo;
},parse:function(ba,bb){if(bb===undefined){bb=true;
}
if(qx.core.Setting.get(x)){qx.log.Logger.debug(this,"JSON response: "+ba);
}
if(bb){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(ba.replace(/"(\\.|[^"\\])*"/g,B))){throw new Error("Could not parse JSON string!");
}}
try{var bc=(ba&&ba.length>0)?eval(U+ba+E):null;
return bc;
}catch(bd){throw new Error("Could not evaluate JSON string: "+bd.message);
}},parseQx:function(be){qx.log.Logger.deprecatedMethodWarning(arguments.callee,I);
return qx.util.Json.parse(be,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bt){bt.__lU=Date.prototype.toJSON;
}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){arguments.callee.base.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
this._returnValue=null;
return this;
},clone:function(j){var k=arguments.callee.base.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(g,h){h.preventDefault=qx.lang.Function.empty;
return h;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__iK:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__iK();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Bootstrap.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__jE:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__jF:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__jE){K.push(J);
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
}else{this.NAME=this.__jE[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__jF();
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
(function(){var d="qx.util.ValueManager",c="abstract";
qx.Class.define(d,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(b){return this._dynamic[b];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(a){this._dynamic=a;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="_applyTheme",i="qx.theme.manager.Color",h="Theme",g="changeTheme",f="string",e="singleton";
qx.Class.define(i,{type:e,extend:qx.util.ValueManager,properties:{theme:{check:h,nullable:true,apply:j,event:g}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===f){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(a){var d=this._dynamic;
var b=d[a];

if(b){return b;
}var c=this.getTheme();

if(c!==null&&c.colors[a]){return d[a]=c.colors[a];
}return a;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var bi=",",bh="rgb(",bg=")",bf="qx.theme.manager.Color",be="qx.util.ColorUtil";
qx.Class.define(be,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(bb){return this.NAMED[bb]!==undefined;
},isSystemColor:function(E){return this.SYSTEM[E]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(bf);
},isThemedColor:function(bd){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bd);
},stringToRgb:function(bc){if(this.supportsThemes()&&this.isThemedColor(bc)){var bc=qx.theme.manager.Color.getInstance().resolveDynamic(bc);
}
if(this.isNamedColor(bc)){return this.NAMED[bc];
}else if(this.isSystemColor(bc)){throw new Error("Could not convert system colors to RGB: "+bc);
}else if(this.isRgbString(bc)){return this.__fw();
}else if(this.isHex3String(bc)){return this.__fy();
}else if(this.isHex6String(bc)){return this.__fz();
}throw new Error("Could not parse color: "+bc);
},cssStringToRgb:function(s){if(this.isNamedColor(s)){return this.NAMED[s];
}else if(this.isSystemColor(s)){throw new Error("Could not convert system colors to RGB: "+s);
}else if(this.isRgbString(s)){return this.__fw();
}else if(this.isRgbaString(s)){return this.__fx();
}else if(this.isHex3String(s)){return this.__fy();
}else if(this.isHex6String(s)){return this.__fz();
}throw new Error("Could not parse color: "+s);
},stringToRgbString:function(I){return this.rgbToRgbString(this.stringToRgb(I));
},rgbToRgbString:function(J){return bh+J[0]+bi+J[1]+bi+J[2]+bg;
},rgbToHexString:function(G){return (qx.lang.String.pad(G[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(G[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(G[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(H){return this.isThemedColor(H)||this.isNamedColor(H)||this.isHex3String(H)||this.isHex6String(H)||this.isRgbString(H);
},isCssString:function(K){return this.isSystemColor(K)||this.isNamedColor(K)||this.isHex3String(K)||this.isHex6String(K)||this.isRgbString(K);
},isHex3String:function(F){return this.REGEXP.hex3.test(F);
},isHex6String:function(l){return this.REGEXP.hex6.test(l);
},isRgbString:function(v){return this.REGEXP.rgb.test(v);
},isRgbaString:function(u){return this.REGEXP.rgba.test(u);
},__fw:function(){var o=parseInt(RegExp.$1,10);
var n=parseInt(RegExp.$2,10);
var m=parseInt(RegExp.$3,10);
return [o,n,m];
},__fx:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__fy:function(){var y=parseInt(RegExp.$1,16)*17;
var x=parseInt(RegExp.$2,16)*17;
var w=parseInt(RegExp.$3,16)*17;
return [y,x,w];
},__fz:function(){var C=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var B=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var A=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [C,B,A];
},hex3StringToRgb:function(z){if(this.isHex3String(z)){return this.__fy(z);
}throw new Error("Invalid hex3 value: "+z);
},hex6StringToRgb:function(D){if(this.isHex6String(D)){return this.__fz(D);
}throw new Error("Invalid hex6 value: "+D);
},hexStringToRgb:function(k){if(this.isHex3String(k)){return this.__fy(k);
}
if(this.isHex6String(k)){return this.__fz(k);
}throw new Error("Invalid hex value: "+k);
},rgbToHsb:function(L){var N,O,Q;
var W=L[0];
var T=L[1];
var M=L[2];
var V=(W>T)?W:T;

if(M>V){V=M;
}var P=(W<T)?W:T;

if(M<P){P=M;
}Q=V/255.0;

if(V!=0){O=(V-P)/V;
}else{O=0;
}
if(O==0){N=0;
}else{var S=(V-W)/(V-P);
var U=(V-T)/(V-P);
var R=(V-M)/(V-P);

if(W==V){N=R-U;
}else if(T==V){N=2.0+S-R;
}else{N=4.0+U-S;
}N=N/6.0;

if(N<0){N=N+1.0;
}}return [Math.round(N*360),Math.round(O*100),Math.round(Q*100)];
},hsbToRgb:function(a){var i,f,p,q,t;
var c=a[0]/360;
var d=a[1]/100;
var e=a[2]/100;

if(c>=1.0){c%=1.0;
}
if(d>1.0){d=1.0;
}
if(e>1.0){e=1.0;
}var h=Math.floor(255*e);
var j={};

if(d==0.0){j.red=j.green=j.blue=h;
}else{c*=6.0;
i=Math.floor(c);
f=c-i;
p=Math.floor(h*(1.0-d));
q=Math.floor(h*(1.0-(d*f)));
t=Math.floor(h*(1.0-(d*(1.0-f))));

switch(i){case 0:j.red=h;
j.green=t;
j.blue=p;
break;
case 1:j.red=q;
j.green=h;
j.blue=p;
break;
case 2:j.red=p;
j.green=h;
j.blue=t;
break;
case 3:j.red=p;
j.green=q;
j.blue=h;
break;
case 4:j.red=t;
j.green=p;
j.blue=h;
break;
case 5:j.red=h;
j.green=p;
j.blue=q;
break;
}}return [j.red,j.green,j.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var q="object",p="_applyTheme",o="__bJ",n="qx.theme.manager.Decoration",m="Theme",l="string",k="singleton";
qx.Class.define(n,{type:k,extend:qx.core.Object,properties:{theme:{check:m,nullable:true,apply:p}},members:{__bJ:null,resolve:function(a){if(!a){return null;
}
if(typeof a===q){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__bJ;

if(!e){e=this.__bJ={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(t){if(typeof t===l){return this.isDynamic(t);
}else if(typeof t===q){var u=t.constructor;
return qx.Class.hasInterface(u,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(r){if(!r){return false;
}var s=this.getTheme();

if(!s){return false;
}return !!s.decorations[r];
},_applyTheme:function(g,h){var j=qx.util.AliasManager.getInstance();

if(h){for(var i in h.aliases){j.remove(i);
}}
if(g){for(var i in g.aliases){j.add(i,g.aliases[i]);
}}
if(!g){this.__bJ={};
}}},destruct:function(){this._disposeMap(o);
}});
})();
(function(){var f="qx.ui.decoration.IDecorator";
qx.Interface.define(f,{members:{getMarkup:function(){},resize:function(c,d,e){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var l="/",k="0",j="qx/static",i="http://",h="https://",g="file://",f="qx.util.AliasManager",e="singleton",d=".",c="static";
qx.Class.define(f,{type:e,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fA={};
this.add(c,j);
},members:{__fA:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===l||r.charAt(0)===d||r.indexOf(i)===0||r.indexOf(h)===k||r.indexOf(g)===0){u[r]=false;
return r;
}
if(this.__fA[r]){return this.__fA[r];
}var t=r.substring(0,r.indexOf(l));
var s=this.__fA[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__fA[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(l))===n){q[p]=o+p.substring(n.length);
}}},remove:function(m){delete this.__fA[m];
},resolve:function(a){var b=this._getDynamic();

if(a!==null){a=this._preprocess(a);
}return b[a]||a;
}},destruct:function(){this.__fA=null;
}});
})();
(function(){var j="qx.theme.manager.Font",i="Theme",h="changeTheme",g="_applyTheme",f="singleton";
qx.Class.define(j,{type:f,extend:qx.util.ValueManager,properties:{theme:{check:i,nullable:true,apply:g,event:h}},members:{resolveDynamic:function(o){var p=this._dynamic;
return o instanceof qx.bom.Font?o:p[o];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(q instanceof qx.bom.Font||s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&r.fonts[q]){s[q]=(new qx.bom.Font).set(r.fonts[q]);
return true;
}return false;
},_applyTheme:function(a){var b=this._getDynamic();

for(var e in b){if(b[e].themed){b[e].dispose();
delete b[e];
}}
if(a){var c=a.fonts;
var d=qx.bom.Font;

for(var e in c){b[e]=(new d).set(c[e]);
b[e].themed=true;
}}this._setDynamic(b);
}}});
})();
(function(){var s="",r="underline",q="Boolean",p="px",o='"',n="italic",m="normal",k="bold",j="_applyItalic",h="_applyBold",E="Integer",D="_applyFamily",C="_applyLineHeight",B="Array",A="overline",z="line-through",y="qx.bom.Font",x="Number",w="_applyDecoration",v=" ",t="_applySize",u=",";
qx.Class.define(y,{extend:qx.core.Object,construct:function(M,N){arguments.callee.base.call(this);

if(M!==undefined){this.setSize(M);
}
if(N!==undefined){this.setFamily(N);
}},statics:{fromString:function(H){var L=new qx.bom.Font();
var J=H.split(/\s+/);
var name=[];
var K;

for(var i=0;i<J.length;i++){switch(K=J[i]){case k:L.setBold(true);
break;
case n:L.setItalic(true);
break;
case r:L.setDecoration(r);
break;
default:var I=parseInt(K,10);

if(I==K||qx.lang.String.contains(K,p)){L.setSize(I);
}else{name.push(K);
}break;
}}
if(name.length>0){L.setFamily(name);
}return L;
},fromConfig:function(S){var T=new qx.bom.Font;
T.set(S);
return T;
},__bM:{fontFamily:s,fontSize:s,fontWeight:s,fontStyle:s,textDecoration:s,lineHeight:1.2},getDefaultStyles:function(){return this.__bM;
}},properties:{size:{check:E,nullable:true,apply:t},lineHeight:{check:x,nullable:true,apply:C},family:{check:B,nullable:true,apply:D},bold:{check:q,nullable:true,apply:h},italic:{check:q,nullable:true,apply:j},decoration:{check:[r,z,A],nullable:true,apply:w}},members:{__bN:null,__bO:null,__bP:null,__bQ:null,__bR:null,__bS:null,_applySize:function(d,e){this.__bN=d===null?null:d+p;
},_applyLineHeight:function(f,g){this.__bS=f===null?null:f;
},_applyFamily:function(a,b){var c=s;

for(var i=0,l=a.length;i<l;i++){if(a[i].indexOf(v)>0){c+=o+a[i]+o;
}else{c+=a[i];
}
if(i!==l-1){c+=u;
}}this.__bO=c;
},_applyBold:function(F,G){this.__bP=F===null?null:F?k:m;
},_applyItalic:function(O,P){this.__bQ=O===null?null:O?n:m;
},_applyDecoration:function(Q,R){this.__bR=Q===null?null:Q;
},getStyles:function(){return {fontFamily:this.__bO,fontSize:this.__bN,fontWeight:this.__bP,fontStyle:this.__bQ,textDecoration:this.__bR,lineHeight:this.__bS};
}}});
})();
(function(){var h="qx.theme.manager.Icon",g="Theme",f="_applyTheme",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:f}},members:{_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}}}});
})();
(function(){var A="string",z="_applyTheme",y="qx.theme.manager.Appearance",x=":",w="Theme",v="changeTheme",u="/",t="singleton";
qx.Class.define(y,{type:t,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__cQ={};
this.__cR={};
},properties:{theme:{check:w,nullable:true,event:v,apply:z}},members:{__cS:{},__cQ:null,__cR:null,_applyTheme:function(r,s){this.__cR={};
this.__cQ={};
},__cT:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=u;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===A){var G=I+L+E.join(L);
return this.__cT(G,C,D);
}}}if(D!=null){return this.__cT(D,C);
}return null;
}else if(typeof K===A){return this.__cT(K,C,D);
}else if(K.include&&!K.style){return this.__cT(K.include,C,D);
}return B;
},styleFrom:function(a,b,c,d){if(!c){c=this.getTheme();
}var j=this.__cR;
var e=j[a];

if(!e){e=j[a]=this.__cT(a,c,d);
}var o=c.appearances[e];

if(!o){this.warn("Missing appearance: "+a);
return null;
}if(!o.style){return null;
}var p=e;

if(b){var q=o.$$bits;

if(!q){q=o.$$bits={};
o.$$length=0;
}var h=0;

for(var k in b){if(!b[k]){continue;
}
if(q[k]==null){q[k]=1<<o.$$length++;
}h+=q[k];
}if(h>0){p+=x+h;
}}var i=this.__cQ;

if(i[p]!==undefined){return i[p];
}if(!b){b=this.__cS;
}var m;
if(o.include||o.base){var g=o.style(b);
var f;

if(o.include){f=this.styleFrom(o.include,b,c,d);
}m={};
if(o.base){var l=this.styleFrom(e,b,o.base,d);

if(o.include){for(var n in l){if(!f.hasOwnProperty(n)&&!g.hasOwnProperty(n)){m[n]=l[n];
}}}else{for(var n in l){if(!g.hasOwnProperty(n)){m[n]=l[n];
}}}}if(o.include){for(var n in f){if(!g.hasOwnProperty(n)){m[n]=f[n];
}}}for(var n in g){m[n]=g[n];
}}else{m=o.style(b);
}return i[p]=m||null;
}},destruct:function(){this.__cQ=this.__cR=null;
}});
})();
(function(){var u="object",t="qx.debug",s="Theme",r="widgets",q="undefined",p="fonts",o="string",n="colors",m="decorations",k="on",d="meta",j="appearances",g="borders",c="icons",b="other",f="qx.Theme",e="]",h="[Theme ";
qx.Class.define(f,{statics:{define:function(name,N){if(!N){var N={};
}N.include=this.__ou(N.include);
N.patch=this.__ou(N.patch);
if(qx.core.Variant.isSet(t,k)){this.__oB(name,N);
}var O={$$type:s,name:name,title:N.title,toString:this.genericToString};
if(N.extend){O.supertheme=N.extend;
}O.basename=qx.Bootstrap.createNamespace(name,O);
this.__ox(O,N);
this.__ov(O,N);
this.$$registry[name]=O;
for(var i=0,a=N.include,l=a.length;i<l;i++){this.include(O,a[i]);
}
for(var i=0,a=N.patch,l=a.length;i<l;i++){this.patch(O,a[i]);
}},__ou:function(y){if(!y){return [];
}
if(qx.lang.Type.isArray(y)){return y;
}else{return [y];
}},__ov:function(v,w){var x=w.aliases||{};

if(w.extend&&w.extend.aliases){qx.lang.Object.mergeWith(x,w.extend.aliases,false);
}v.aliases=x;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return h+this.name+e;
},__ow:function(F){for(var i=0,G=this.__oy,l=G.length;i<l;i++){if(F[G[i]]){return G[i];
}}},__ox:function(V,W){var ba=this.__ow(W);
if(W.extend&&!ba){ba=W.extend.type;
}V.type=ba||b;
if(!ba){return;
}var bc=function(){};
if(W.extend){bc.prototype=new W.extend.$$clazz;
}var bb=bc.prototype;
var Y=W[ba];
for(var X in Y){bb[X]=Y[X];
if(bb[X].base){if(qx.core.Variant.isSet(t,k)){if(!W.extend){throw new Error("Found base flag in entry '"+X+"' of theme '"+W.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}bb[X].base=W.extend;
}}V.$$clazz=bc;
V[ba]=new bc;
},$$registry:{},__oy:[n,g,m,p,c,r,j,d],__oz:qx.core.Variant.select(t,{"on":{"title":o,"aliases":u,"type":o,"extend":u,"colors":u,"borders":u,"decorations":u,"fonts":u,"icons":u,"widgets":u,"appearances":u,"meta":u,"include":u,"patch":u},"default":null}),__oA:qx.core.Variant.select(t,{"on":{"color":u,"border":u,"decoration":u,"font":u,"icon":u,"appearance":u,"widget":u},"default":null}),__oB:qx.core.Variant.select(t,{"on":function(name,H){var M=this.__oz;

for(var L in H){if(M[L]===undefined){throw new Error('The configuration key "'+L+'" in theme "'+name+'" is not allowed!');
}
if(H[L]==null){throw new Error('Invalid key "'+L+'" in theme "'+name+'"! The value is undefined/null!');
}
if(M[L]!==null&&typeof H[L]!==M[L]){throw new Error('Invalid type of key "'+L+'" in theme "'+name+'"! The type of the key must be "'+M[L]+'"!');
}}var K=[n,g,m,p,c,r,j,d];

for(var i=0,l=K.length;i<l;i++){var L=K[i];

if(H[L]!==undefined&&(H[L] instanceof Array||H[L] instanceof RegExp||H[L] instanceof Date||H[L].classname!==undefined)){throw new Error('Invalid key "'+L+'" in theme "'+name+'"! The value needs to be a map!');
}}var I=0;

for(var i=0,l=K.length;i<l;i++){var L=K[i];

if(H[L]){I++;
}
if(I>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!H.extend&&I===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(H.meta){var J;

for(var L in H.meta){J=H.meta[L];

if(this.__oA[L]===undefined){throw new Error('The key "'+L+'" is not allowed inside a meta theme block.');
}
if(typeof J!==this.__oA[L]){throw new Error('The type of the key "'+L+'" inside the meta block is wrong.');
}
if(!(typeof J===u&&J!==null&&J.$$type===s)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+L+'" in theme "'+name+'" is invalid: '+J);
}}}if(H.extend&&H.extend.$$type!==s){throw new Error('Invalid extend in theme "'+name+'": '+H.extend);
}if(H.include){for(var i=0,l=H.include.length;i<l;i++){if(typeof (H.include[i])==q||H.include[i].$$type!==s){throw new Error('Invalid include in theme "'+name+'": '+H.include[i]);
}}}if(H.patch){for(var i=0,l=H.patch.length;i<l;i++){if(typeof (H.patch[i])==q||H.patch[i].$$type!==s){throw new Error('Invalid patch in theme "'+name+'": '+H.patch[i]);
}}}},"default":function(){}}),patch:function(P,Q){var S=this.__ow(Q);

if(S!==this.__ow(P)){throw new Error("The mixins '"+P.name+"' are not compatible '"+Q.name+"'!");
}var R=Q[S];
var T=P.$$clazz.prototype;

for(var U in R){T[U]=R[U];
}},include:function(z,A){var C=A.type;

if(C!==z.type){throw new Error("The mixins '"+z.name+"' are not compatible '"+A.name+"'!");
}var B=A[C];
var D=z.$$clazz.prototype;

for(var E in B){if(D[E]!==undefined){continue;
}D[E]=B[E];
}}}});
})();
(function(){var v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="widget",p="qx.ui.tooltip.ToolTip",o="Boolean",n="_applyCurrent",m="__ok",j="qx.ui.tooltip.Manager",l="__oh",k="__oi",i="tooltip-error",h="singleton";
qx.Class.define(j,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,t,this.__or,this,true);
this.__oh=new qx.event.Timer();
this.__oh.addListener(u,this.__oo,this);
this.__oi=new qx.event.Timer();
this.__oi.addListener(u,this.__op,this);
this.__oj={left:0,top:0};
},properties:{current:{check:p,nullable:true,apply:n},showInvalidTooltips:{check:o,init:true}},members:{__oj:null,__oi:null,__oh:null,__ok:null,__ol:null,__om:function(){if(!this.__ok){this.__ok=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ok;
},__on:function(){if(!this.__ol){this.__ol=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__ol.syncAppearance();
}return this.__ol;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__oh.stop();
this.__oi.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__oh.startWith(a.getShowTimeout());
d.addListener(c,s,this.__os,this,true);
d.addListener(c,v,this.__ot,this,true);
d.addListener(c,r,this.__oq,this,true);
}else{d.removeListener(c,s,this.__os,this,true);
d.removeListener(c,v,this.__ot,this,true);
d.removeListener(c,r,this.__oq,this,true);
}},__oo:function(e){var f=this.getCurrent();

if(f&&!f.isDisposed()){this.__oi.startWith(f.getHideTimeout());

if(f.getPlaceMethod()==q){f.placeToWidget(f.getOpener());
}else{f.placeToPoint(this.__oj);
}f.show();
}this.__oh.stop();
},__op:function(e){var g=this.getCurrent();

if(g&&!g.isDisposed()){g.exclude();
}this.__oi.stop();
this.resetCurrent();
},__oq:function(e){var G=this.__oj;
G.left=e.getDocumentLeft();
G.top=e.getDocumentTop();
},__or:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!y){return;
}var z;
while(y!=null){var z=y.getToolTip();
var A=y.getToolTipText()||null;
var x=y.getToolTipIcon()||null;

if(qx.Class.hasInterface(y.constructor,qx.ui.form.IForm)&&!y.isValid()){var w=y.getInvalidMessage();
}
if(z||A||x||w){break;
}y=y.getLayoutParent();
}
if(!y){return;
}
if(y.isBlockToolTip()){return;
}if(w&&y.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var z=this.__on().set({label:w});
}else if(!z){var z=this.__om().set({label:A,icon:x});
}this.setCurrent(z);
z.setOpener(y);
},__os:function(e){var D=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!D){return;
}var E=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!E){return;
}var F=this.getCurrent();
if(F&&(E==F||qx.ui.core.Widget.contains(F,E))){return;
}if(E&&D&&qx.ui.core.Widget.contains(D,E)){return;
}if(F&&!E){this.setCurrent(null);
}else{this.resetCurrent();
}},__ot:function(e){var B=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!B){return;
}var C=this.getCurrent();
if(C&&C==B.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__or,this,true);
this._disposeObjects(l,k,m);
this.__oj=null;
}});
})();
(function(){var l="interval",k="qx.event.Timer",j="_applyInterval",i="_applyEnabled",h="Boolean",g="qx.event.type.Event",f="Integer";
qx.Class.define(k,{extend:qx.core.Object,construct:function(r){arguments.callee.base.call(this);
this.setEnabled(false);

if(r!=null){this.setInterval(r);
}var self=this;
this.__dC=function(){self._oninterval.call(self);
};
},events:{"interval":g},statics:{once:function(a,b,c){var d=new qx.event.Timer(c);
d.addListener(l,function(e){d.stop();
a.call(b,e);
d.dispose();
b=null;
},b);
d.start();
return d;
}},properties:{enabled:{init:true,check:h,apply:i},interval:{check:f,init:1000,apply:j}},members:{__dD:null,__dC:null,_applyInterval:function(m,n){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(o,p){if(p){window.clearInterval(this.__dD);
this.__dD=null;
}else if(o){this.__dD=window.setInterval(this.__dC,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(q){this.stop();
this.startWith(q);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(l);
}})},destruct:function(){if(this.__dD){window.clearInterval(this.__dD);
}this.__dD=this.__dC=null;
}});
})();
(function(){var b="qx.ui.core.MChildrenHandling";
qx.Mixin.define(b,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(a){return this._indexOf(a);
},add:function(n,o){this._add(n,o);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(k,l,m){this._addBefore(k,l,m);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(d){this._remove(d);
},removeAt:function(p){return this._removeAt(p);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(c){c.getChildren=c._getChildren;
c.hasChildren=c._hasChildren;
c.indexOf=c._indexOf;
c.add=c._add;
c.addAt=c._addAt;
c.addBefore=c._addBefore;
c.addAfter=c._addAfter;
c.remove=c._remove;
c.removeAt=c._removeAt;
c.removeAll=c._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var G="Integer",F="_applyDimension",E="Boolean",D="_applyStretching",C="_applyMargin",B="shorthand",A="_applyAlign",z="qx.debug",y="on",x="allowShrinkY",bd="Wrong 'width' argument. ",bc="Something went wrong with the layout of ",bb="bottom",ba="Wrong 'left' argument. ",Y="baseline",X="marginBottom",W="qx.ui.core.LayoutItem",V="center",U="marginTop",T="!",N="allowGrowX",O="middle",L="marginLeft",M="allowShrinkX",J="top",K="right",H="marginRight",I="abstract",P="Wrong 'top' argument. ",Q="Wrong 'height' argument. ",S="allowGrowY",R="left";
qx.Class.define(W,{type:I,extend:qx.core.Object,properties:{minWidth:{check:G,nullable:true,apply:F,init:null,themeable:true},width:{check:G,nullable:true,apply:F,init:null,themeable:true},maxWidth:{check:G,nullable:true,apply:F,init:null,themeable:true},minHeight:{check:G,nullable:true,apply:F,init:null,themeable:true},height:{check:G,nullable:true,apply:F,init:null,themeable:true},maxHeight:{check:G,nullable:true,apply:F,init:null,themeable:true},allowGrowX:{check:E,apply:D,init:true,themeable:true},allowShrinkX:{check:E,apply:D,init:true,themeable:true},allowGrowY:{check:E,apply:D,init:true,themeable:true},allowShrinkY:{check:E,apply:D,init:true,themeable:true},allowStretchX:{group:[N,M],mode:B,themeable:true},allowStretchY:{group:[S,x],mode:B,themeable:true},marginTop:{check:G,init:0,apply:C,themeable:true},marginRight:{check:G,init:0,apply:C,themeable:true},marginBottom:{check:G,init:0,apply:C,themeable:true},marginLeft:{check:G,init:0,apply:C,themeable:true},margin:{group:[U,H,X,L],mode:B,themeable:true},alignX:{check:[R,V,K],nullable:true,apply:A,themeable:true},alignY:{check:[J,O,bb,Y],nullable:true,apply:A,themeable:true}},members:{__ey:null,__ez:null,__eA:null,__eB:null,__eC:null,__eD:null,__eE:null,getBounds:function(){return this.__eD||this.__ez||null;
},clearSeparators:function(){},renderSeparator:function(bg,bh){},renderLayout:function(l,top,m,n){if(qx.core.Variant.isSet(z,y)){var o=bc+this.toString()+T;
this.assertInteger(l,ba+o);
this.assertInteger(top,P+o);
this.assertInteger(m,bd+o);
this.assertInteger(n,Q+o);
}var p=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var p=this._getHeightForWidth(m);
}
if(p!=null&&p!==this.__ey){this.__ey=p;
qx.ui.core.queue.Layout.add(this);
return null;
}var r=this.__ez;

if(!r){r=this.__ez={};
}var q={};

if(l!==r.left||top!==r.top){q.position=true;
r.left=l;
r.top=top;
}
if(m!==r.width||n!==r.height){q.size=true;
r.width=m;
r.height=n;
}if(this.__eA){q.local=true;
delete this.__eA;
}
if(this.__eC){q.margin=true;
delete this.__eC;
}return q;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eA;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eA=true;
this.__eB=null;
},getSizeHint:function(be){var bf=this.__eB;

if(bf){return bf;
}
if(be===false){return null;
}bf=this.__eB=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__ey&&this.getHeight()==null){bf.height=this.__ey;
}if(bf.minWidth>bf.width){bf.width=bf.minWidth;
}
if(bf.maxWidth<bf.width){bf.width=bf.maxWidth;
}
if(!this.getAllowGrowX()){bf.maxWidth=bf.width;
}
if(!this.getAllowShrinkX()){bf.minWidth=bf.width;
}if(bf.minHeight>bf.height){bf.height=bf.minHeight;
}
if(bf.maxHeight<bf.height){bf.height=bf.maxHeight;
}
if(!this.getAllowGrowY()){bf.maxHeight=bf.height;
}
if(!this.getAllowShrinkY()){bf.minHeight=bf.height;
}return bf;
},_computeSizeHint:function(){var j=this.getMinWidth()||0;
var g=this.getMinHeight()||0;
var k=this.getWidth()||j;
var i=this.getHeight()||g;
var f=this.getMaxWidth()||Infinity;
var h=this.getMaxHeight()||Infinity;
return {minWidth:j,width:k,maxWidth:f,minHeight:g,height:i,maxHeight:h};
},_hasHeightForWidth:function(){var bi=this._getLayout();

if(bi){return bi.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(s){var t=this._getLayout();

if(t&&t.hasHeightForWidth()){return t.getHeightForWidth(s);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__eC=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__eD;
},setUserBounds:function(bj,top,bk,bl){this.__eD={left:bj,top:top,width:bk,height:bl};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eD;
qx.ui.core.queue.Layout.add(this);
},__eF:{},setLayoutProperties:function(u){if(u==null){return;
}var v=this.__eE;

if(!v){v=this.__eE={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(u);
}for(var w in u){if(u[w]==null){delete v[w];
}else{v[w]=u[w];
}}},getLayoutProperties:function(){return this.__eE||this.__eF;
},clearLayoutProperties:function(){delete this.__eE;
},updateLayoutProperties:function(a){var b=this._getLayout();

if(b){if(qx.core.Variant.isSet(z,y)){if(a){for(var c in a){if(a[c]!==null){b.verifyLayoutProperty(this,c,a[c]);
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
},clone:function(){var d=arguments.callee.base.call(this);
var e=this.__eE;

if(e){d.__eE=qx.lang.Object.clone(e);
}return d;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eE=this.__ez=this.__eD=this.__eB=null;
}});
})();
(function(){var t="qx.debug",s="qx.ui.core.DecoratorFactory",r="qxType",q="",p="decorator",o="$$nopool$$",n="qx.ui.core.DecoratorFactory[",m="] ",l="on",k="keys: ",j=", elements: ";
qx.Class.define(s,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bY={};
},statics:{MAX_SIZE:15,__ca:o},members:{__bY:null,getDecoratorElement:function(d){var i=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(d)){var g=d;
var f=qx.theme.manager.Decoration.getInstance().resolve(d);
}else{var g=i.__ca;
f=d;
}var h=this.__bY;

if(h[g]&&h[g].length>0){var e=h[g].pop();
}else{var e=this._createDecoratorElement(f,g);
}e.$$pooled=false;
return e;
},poolDecorator:function(w){if(!w||w.$$pooled){return;
}var z=qx.ui.core.DecoratorFactory;
var x=w.getId();

if(x==z.__ca){w.dispose();
return;
}var y=this.__bY;

if(!y[x]){y[x]=[];
}
if(y[x].length>z.MAX_SIZE){w.dispose();
}else{w.$$pooled=true;
y[x].push(w);
}},_createDecoratorElement:function(a,b){var c=new qx.html.Decorator(a,b);

if(qx.core.Variant.isSet(t,l)){c.setAttribute(r,p);
}return c;
},toString:qx.core.Variant.select(t,{"on":function(){var A=0;
var B=0;

for(var C in this.__bY){A+=1;
B+=this.__bY[C].length;
}return [n,this.$$hash,m,k,A,j,B].join(q);
},"off":function(){return arguments.callee.base.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var v=this.__bY;

for(var u in v){qx.util.DisposeUtil.disposeArray(v,u);
}}this.__bY=null;
}});
})();
(function(){var dQ="on",dP="px",dO="qx.debug",dN="Boolean",dM="qx.event.type.Mouse",dL="qx.event.type.Drag",dK="visible",dJ="qx.event.type.Focus",dI="Integer",dH="excluded",cV="qx.event.type.Data",cU="_applyPadding",cT="qx.event.type.Event",cS="hidden",cR="contextmenu",cQ="String",cP="tabIndex",cO="backgroundColor",cN="focused",cM="changeVisibility",dX="mshtml",dY="hovered",dV="qx.event.type.KeySequence",dW="qxType",dT="qx.client",dU="absolute",dR="drag",dS="div",ea="object",eb="disabled",dv="move",du="dragstart",dx="qx.dynlocale",dw="dragchange",dz="dragend",dy="resize",dB="Decorator",dA="zIndex",dt="$$widget",ds="opacity",bD="default",bE="Color",bF="changeToolTipText",bG="beforeContextmenuOpen",bH="_applyNativeContextMenu",bI="content",bJ="_applyBackgroundColor",bK="__dj",bL="_applyFocusable",bM="changeShadow",ef="qx.event.type.KeyInput",ee="__db",ed="createChildControl",ec="Invalid left decorator inset detected: ",ej="Font",ei="_applyShadow",eh="Invalid layout data: ",eg="Could not add widget to itself: ",em="_applyEnabled",ek="_applySelectable",cm="Number",cn="_applyKeepActive",ck="_applyVisibility",cl="The 'after' widget is not a child of this widget!",cq="repeat",cr="qxDraggable",co="syncAppearance",cp="paddingLeft",ci="_applyDroppable",cj="Wrong 'left' argument. ",bU="protector",bT="#",bW="qx.event.type.MouseWheel",bV="_applyCursor",bQ="_applyDraggable",bP="changeTextColor",bS="changeContextMenu",bR="paddingTop",bO="changeSelectable",bN="hideFocus",cw="Invalid top decorator inset detected: ",cx="none",cy="outline",cz="The 'before' widget is not a child of this widget!",cs="_applyAppearance",ct=" returned an invalid size hint!",cu="_applyOpacity",cv="url(",cA=")",cB="qx.ui.core.Widget",cf="__df",ce="minHeight is larger than maxHeight!",cd="_applyFont",cc="__cW",cb="cursor",ca="qxDroppable",bY="changeZIndex",bX="changeEnabled",ch="changeFont",cg="_applyDecorator",cC="_applyZIndex",cD="_applyTextColor",cE="qx.ui.menu.Menu",cF="Invalid right decorator inset detected: ",cG="Invalid widget to add: ",cH="_applyToolTipText",cI="The layout of the widget",cJ="true",cK="widget",cL="Wrong 'top' argument. ",da="qxClass",cY="changeDecorator",cX="__dc",cW="changeBackgroundColor",de="_applyTabIndex",dd="Invalid bottom decorator inset detected: ",dc="__cV",db="changeAppearance",dg="shorthand",df="/",dn="",dp="_applyContextMenu",dl="container",dm="paddingBottom",dj="__dh",dk="changeNativeContextMenu",dh="qx.ui.tooltip.ToolTip",di="qxKeepActive",dq="_applyKeepFocus",dr="paddingRight",dD="minWidth is larger than maxWidth!",dC="changeLocale",dF="qxKeepFocus",dE="__da",dG="qx/static/blank.gif";
qx.Class.define(cB,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__cV=this._createContainerElement();
this.__cW=this.__di();
this.__cV.add(this.__cW);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:cT,disappear:cT,createChildControl:cV,resize:cV,move:cV,syncAppearance:cV,mousemove:dM,mouseover:dM,mouseout:dM,mousedown:dM,mouseup:dM,click:dM,dblclick:dM,contextmenu:dM,beforeContextmenuOpen:dM,mousewheel:bW,keyup:dV,keydown:dV,keypress:dV,keyinput:ef,focus:dJ,blur:dJ,focusin:dJ,focusout:dJ,activate:dJ,deactivate:dJ,capture:cT,losecapture:cT,drop:dL,dragleave:dL,dragover:dL,drag:dL,dragstart:dL,dragend:dL,dragchange:dL,droprequest:dL},properties:{paddingTop:{check:dI,init:0,apply:cU,themeable:true},paddingRight:{check:dI,init:0,apply:cU,themeable:true},paddingBottom:{check:dI,init:0,apply:cU,themeable:true},paddingLeft:{check:dI,init:0,apply:cU,themeable:true},padding:{group:[bR,dr,dm,cp],mode:dg,themeable:true},zIndex:{nullable:true,init:null,apply:cC,event:bY,check:dI,themeable:true},decorator:{nullable:true,init:null,apply:cg,event:cY,check:dB,themeable:true},shadow:{nullable:true,init:null,apply:ei,event:bM,check:dB,themeable:true},backgroundColor:{nullable:true,check:bE,apply:bJ,event:cW,themeable:true},textColor:{nullable:true,check:bE,apply:cD,event:bP,themeable:true,inheritable:true},font:{nullable:true,apply:cd,check:ej,event:ch,themeable:true,inheritable:true,dispose:true},opacity:{check:cm,apply:cu,themeable:true,nullable:true,init:null},cursor:{check:cQ,apply:bV,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dh,nullable:true},toolTipText:{check:cQ,nullable:true,event:bF,apply:cH},toolTipIcon:{check:cQ,nullable:true,event:bF},blockToolTip:{check:dN,init:false},visibility:{check:[dK,cS,dH],init:dK,apply:ck,event:cM},enabled:{init:true,check:dN,inheritable:true,apply:em,event:bX},anonymous:{init:false,check:dN},tabIndex:{check:dI,nullable:true,apply:de},focusable:{check:dN,init:false,apply:bL},keepFocus:{check:dN,init:false,apply:dq},keepActive:{check:dN,init:false,apply:cn},draggable:{check:dN,init:false,apply:bQ},droppable:{check:dN,init:false,apply:ci},selectable:{check:dN,init:false,event:bO,apply:ek},contextMenu:{check:cE,apply:dp,nullable:true,event:bS},nativeContextMenu:{check:dN,init:false,themeable:true,event:dk,apply:bH},appearance:{check:cQ,init:cK,apply:cs,event:db}},statics:{DEBUG:false,getWidgetByElement:function(ev){while(ev){var ew=ev.$$widget;
if(ew!=null){return qx.core.ObjectRegistry.fromHashCode(ew);
}ev=ev.parentNode;
}return null;
},contains:function(parent,gX){while(gX){if(parent==gX){return true;
}gX=gX.getLayoutParent();
}return false;
},__cX:new qx.ui.core.DecoratorFactory(),__cY:new qx.ui.core.DecoratorFactory()},members:{__cV:null,__cW:null,__da:null,__db:null,__dc:null,__dd:null,__de:null,__df:null,_getLayout:function(){return this.__df;
},_setLayout:function(N){if(qx.core.Variant.isSet(dO,dQ)){if(N){this.assertInstance(N,qx.ui.layout.Abstract);
}}
if(this.__df){this.__df.connectToWidget(null);
}
if(N){N.connectToWidget(this);
}this.__df=N;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var hn=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(hn);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(hn);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dg:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var bq=qx.theme.manager.Decoration.getInstance();
var bs=bq.resolve(a).getInsets();
var br=bq.resolve(b).getInsets();

if(bs.top!=br.top||bs.right!=br.right||bs.bottom!=br.bottom||bs.left!=br.left){return true;
}return false;
},renderLayout:function(O,top,P,Q){var ba=arguments.callee.base.call(this,O,top,P,Q);
if(!ba){return;
}var S=this.getContainerElement();
var content=this.getContentElement();
var W=ba.size||this._updateInsets;
var bb=dP;
var X={};
if(ba.position){X.left=O+bb;
X.top=top+bb;
}if(ba.size){X.width=P+bb;
X.height=Q+bb;
}
if(ba.position||ba.size){S.setStyles(X);
}
if(W||ba.local||ba.margin){var R=this.getInsets();
var innerWidth=P-R.left-R.right;
var innerHeight=Q-R.top-R.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var U={};

if(this._updateInsets){U.left=R.left+bb;
U.top=R.top+bb;
}
if(W){U.width=innerWidth+bb;
U.height=innerHeight+bb;
}
if(W||this._updateInsets){content.setStyles(U);
}
if(ba.size){var Y=this.__dc;

if(Y){Y.setStyles({width:P+dP,height:Q+dP});
}}
if(ba.size||this._updateInsets){if(this.__da){this.__da.resize(P,Q);
}}
if(ba.size){if(this.__db){var R=this.__db.getInsets();
var V=P+R.left+R.right;
var T=Q+R.top+R.bottom;
this.__db.resize(V,T);
}}
if(W||ba.local||ba.margin){if(this.__df&&this.hasLayoutChildren()){this.__df.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(ba.position&&this.hasListener(dv)){this.fireDataEvent(dv,this.getBounds());
}
if(ba.size&&this.hasListener(dy)){this.fireDataEvent(dy,this.getBounds());
}delete this._updateInsets;
return ba;
},__dh:null,clearSeparators:function(){var eU=this.__dh;

if(!eU){return;
}var eV=qx.ui.core.Widget.__cX;
var content=this.getContentElement();
var eT;

for(var i=0,l=eU.length;i<l;i++){eT=eU[i];
eV.poolDecorator(eT);
content.remove(eT);
}eU.length=0;
},renderSeparator:function(fp,fq){var fr=qx.ui.core.Widget.__cX.getDecoratorElement(fp);
this.getContentElement().add(fr);
fr.resize(fq.width,fq.height);
fr.setStyles({left:fq.left+dP,top:fq.top+dP});
if(!this.__dh){this.__dh=[fr];
}else{this.__dh.push(fr);
}},_computeSizeHint:function(){var eI=this.getWidth();
var eH=this.getMinWidth();
var eD=this.getMaxWidth();
var eG=this.getHeight();
var eE=this.getMinHeight();
var eF=this.getMaxHeight();

if(qx.core.Variant.isSet(dO,dQ)){if(eH!==null&&eD!==null){this.assert(eH<=eD,dD);
}
if(eE!==null&&eF!==null){this.assert(eE<=eF,ce);
}}var eJ=this._getContentHint();
var eC=this.getInsets();
var eL=eC.left+eC.right;
var eK=eC.top+eC.bottom;

if(eI==null){eI=eJ.width+eL;
}
if(eG==null){eG=eJ.height+eK;
}
if(eH==null){eH=eL;

if(eJ.minWidth!=null){eH+=eJ.minWidth;
}}
if(eE==null){eE=eK;

if(eJ.minHeight!=null){eE+=eJ.minHeight;
}}
if(eD==null){if(eJ.maxWidth==null){eD=Infinity;
}else{eD=eJ.maxWidth+eL;
}}
if(eF==null){if(eJ.maxHeight==null){eF=Infinity;
}else{eF=eJ.maxHeight+eK;
}}return {width:eI,minWidth:eH,maxWidth:eD,height:eG,minHeight:eE,maxHeight:eF};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__df){this.__df.invalidateLayoutCache();
}},_getContentHint:function(){var et=this.__df;

if(et){if(this.hasLayoutChildren()){var eu=et.getSizeHint();

if(qx.core.Variant.isSet(dO,dQ)){var es=cI+this.toString()+ct;
this.assertInteger(eu.width,cj+es);
this.assertInteger(eu.height,cL+es);
}return eu;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(F){var J=this.getInsets();
var M=J.left+J.right;
var L=J.top+J.bottom;
var K=F-M;
var H=this._getLayout();

if(H&&H.hasHeightForWidth()){var G=H.getHeightForWidth(F);
}else{G=this._getContentHeightForWidth(K);
}var I=G+L;
return I;
},_getContentHeightForWidth:function(gR){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var gq=this.getPaddingRight();
var gs=this.getPaddingBottom();
var gr=this.getPaddingLeft();

if(this.__da){var gp=this.__da.getInsets();

if(qx.core.Variant.isSet(dO,dQ)){this.assertNumber(gp.top,cw+gp.top);
this.assertNumber(gp.right,cF+gp.right);
this.assertNumber(gp.bottom,dd+gp.bottom);
this.assertNumber(gp.left,ec+gp.left);
}top+=gp.top;
gq+=gp.right;
gs+=gp.bottom;
gr+=gp.left;
}return {"top":top,"right":gq,"bottom":gs,"left":gr};
},getInnerSize:function(){var eq=this.getBounds();

if(!eq){return null;
}var ep=this.getInsets();
return {width:eq.width-ep.left-ep.right,height:eq.height-ep.top-ep.bottom};
},show:function(){this.setVisibility(dK);
},hide:function(){this.setVisibility(cS);
},exclude:function(){this.setVisibility(dH);
},isVisible:function(){return this.getVisibility()===dK;
},isHidden:function(){return this.getVisibility()!==dK;
},isExcluded:function(){return this.getVisibility()===dH;
},isSeeable:function(){var hp=this.getContainerElement().getDomElement();

if(hp){return hp.offsetWidth>0;
}var ho=this;

do{if(!ho.isVisible()){return false;
}
if(ho.isRootWidget()){return true;
}ho=ho.getLayoutParent();
}while(ho);
return false;
},_createContainerElement:function(){var gO=new qx.html.Element(dS);

if(qx.core.Variant.isSet(dO,dQ)){gO.setAttribute(dW,dl);
}gO.setStyles({"position":dU,"zIndex":0});
gO.setAttribute(dt,this.toHashCode());
if(qx.core.Variant.isSet(dO,dQ)){gO.setAttribute(da,this.classname);
}return gO;
},__di:function(){var hq=this._createContentElement();

if(qx.core.Variant.isSet(dO,dQ)){hq.setAttribute(dW,bI);
}hq.setStyles({"position":dU,"zIndex":10});
return hq;
},_createContentElement:function(){var eM=new qx.html.Element(dS);
eM.setStyles({"overflowX":cS,"overflowY":cS});
return eM;
},getContainerElement:function(){return this.__cV;
},getContentElement:function(){return this.__cW;
},getDecoratorElement:function(){return this.__da||null;
},getShadowElement:function(){return this.__db||null;
},__dj:null,getLayoutChildren:function(){var bd=this.__dj;

if(!bd){return this.__dk;
}var be;

for(var i=0,l=bd.length;i<l;i++){var bc=bd[i];

if(bc.hasUserBounds()||bc.isExcluded()){if(be==null){be=bd.concat();
}qx.lang.Array.remove(be,bc);
}}return be||bd;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var m=this.__df;

if(m){m.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var bo=this.__dj;

if(!bo){return false;
}var bp;

for(var i=0,l=bo.length;i<l;i++){bp=bo[i];

if(!bp.hasUserBounds()&&!bp.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dk:[],_getChildren:function(){return this.__dj||this.__dk;
},_indexOf:function(eW){var eX=this.__dj;

if(!eX){return -1;
}return eX.indexOf(eW);
},_hasChildren:function(){var n=this.__dj;
return n!=null&&(!!n[0]);
},addChildrenToQueue:function(c){var d=this.__dj;

if(!d){return;
}var f;

for(var i=0,l=d.length;i<l;i++){f=d[i];
c[f.$$hash]=f;
f.addChildrenToQueue(c);
}},_add:function(ht,hu){if(ht.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,ht);
}
if(this.__dj){this.__dj.push(ht);
}else{this.__dj=[ht];
}this.__dl(ht,hu);
},_addAt:function(fL,fM,fN){if(!this.__dj){this.__dj=[];
}if(fL.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,fL);
}var fO=this.__dj[fM];

if(fO===fL){return fL.setLayoutProperties(fN);
}
if(fO){qx.lang.Array.insertBefore(this.__dj,fL,fO);
}else{this.__dj.push(fL);
}this.__dl(fL,fN);
},_addBefore:function(gH,gI,gJ){if(qx.core.Variant.isSet(dO,dQ)){this.assertInArray(gI,this._getChildren(),cz);
}
if(gH==gI){return;
}
if(!this.__dj){this.__dj=[];
}if(gH.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,gH);
}qx.lang.Array.insertBefore(this.__dj,gH,gI);
this.__dl(gH,gJ);
},_addAfter:function(fU,fV,fW){if(qx.core.Variant.isSet(dO,dQ)){this.assertInArray(fV,this._getChildren(),cl);
}
if(fU==fV){return;
}
if(!this.__dj){this.__dj=[];
}if(fU.getLayoutParent()==this){qx.lang.Array.remove(this.__dj,fU);
}qx.lang.Array.insertAfter(this.__dj,fU,fV);
this.__dl(fU,fW);
},_remove:function(eP){if(!this.__dj){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dj,eP);
this.__dm(eP);
},_removeAt:function(bu){if(!this.__dj){throw new Error("This widget has no children!");
}var bv=this.__dj[bu];
qx.lang.Array.removeAt(this.__dj,bu);
this.__dm(bv);
return bv;
},_removeAll:function(){if(!this.__dj){return;
}var er=this.__dj.concat();
this.__dj.length=0;

for(var i=er.length-1;i>=0;i--){this.__dm(er[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dl:function(t,u){if(qx.core.Variant.isSet(dO,dQ)){this.assertInstance(t,qx.ui.core.LayoutItem,cG+t);
this.assertNotIdentical(t,this,eg+t);

if(u!=null){this.assertType(u,ea,eh+u);
}}var parent=t.getLayoutParent();

if(parent&&parent!=this){parent._remove(t);
}t.setLayoutParent(this);
if(u){t.setLayoutProperties(u);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(t);
}},__dm:function(bt){if(qx.core.Variant.isSet(dO,dQ)){this.assertNotUndefined(bt);
}
if(bt.getLayoutParent()!==this){throw new Error("Remove Error: "+bt+" is not a child of this widget!");
}bt.setLayoutParent(null);
if(this.__df){this.__df.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bt);
}},capture:function(fo){this.getContainerElement().capture(fo);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(hr,hs,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dc){return;
}var z=this.__dc=new qx.html.Element;

if(qx.core.Variant.isSet(dO,dQ)){z.setAttribute(dW,bU);
}z.setStyles({position:dU,top:0,left:0,zIndex:7});
var A=this.getBounds();

if(A){this.__dc.setStyles({width:A.width+dP,height:A.height+dP});
}if(qx.core.Variant.isSet(dT,dX)){z.setStyles({backgroundImage:cv+qx.util.ResourceManager.getInstance().toUri(dG)+cA,backgroundRepeat:cq});
}this.getContainerElement().add(z);
},_applyDecorator:function(hb,hc){if(qx.core.Variant.isSet(dO,dQ)){if(hb&&typeof hb===ea){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+hb);
}}}var hg=qx.ui.core.Widget.__cX;
var he=this.getContainerElement();
if(!this.__dc&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(hc){he.remove(this.__da);
hg.poolDecorator(this.__da);
}if(hb){var hf=this.__da=hg.getDecoratorElement(hb);
hf.setStyle(dA,5);
var hd=this.getBackgroundColor();
hf.tint(hd);
he.add(hf);
}else{delete this.__da;
this._applyBackgroundColor(this.getBackgroundColor());
}if(hb&&!hc&&hd){this.getContainerElement().setStyle(cO,null);
}if(this.__dg(hc,hb)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(hb){var hh=this.getBounds();

if(hh){hf.resize(hh.width,hh.height);
this.__dc&&
this.__dc.setStyles({width:hh.width+dP,height:hh.height+dP});
}}},_applyShadow:function(fy,fz){var fG=qx.ui.core.Widget.__cY;
var fB=this.getContainerElement();
if(fz){fB.remove(this.__db);
fG.poolDecorator(this.__db);
}if(fy){var fD=this.__db=fG.getDecoratorElement(fy);
fB.add(fD);
var fF=fD.getInsets();
fD.setStyles({left:(-fF.left)+dP,top:(-fF.top)+dP});
var fE=this.getBounds();

if(fE){var fC=fE.width+fF.left+fF.right;
var fA=fE.height+fF.top+fF.bottom;
fD.resize(fC,fA);
}fD.tint(null);
}else{delete this.__db;
}},_applyToolTipText:function(hk,hl){if(qx.core.Variant.isSet(dx,dQ)){if(this.__de){return;
}var hm=qx.locale.Manager.getInstance();
this.__de=hm.addListener(dC,function(){if(hk&&hk.translate){this.setToolTipText(hk.translate());
}},this);
}},_applyTextColor:function(x,y){},_applyZIndex:function(bm,bn){this.getContainerElement().setStyle(dA,bm==null?0:bm);
},_applyVisibility:function(ez,eA){var eB=this.getContainerElement();

if(ez===dK){eB.show();
}else{eB.hide();
}var parent=this.$$parent;

if(parent&&(eA==null||ez==null||eA===dH||ez===dH)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(o,p){this.getContainerElement().setStyle(ds,o==1?null:o);
if(qx.core.Variant.isSet(dT,dX)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var q=(o==1||o==null)?null:0.99;
this.getContentElement().setStyle(ds,q);
}}},_applyCursor:function(en,eo){if(en==null&&!this.isSelectable()){en=bD;
}this.getContainerElement().setStyle(cb,en,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(fe,ff){var fg=this.getBackgroundColor();
var fi=this.getContainerElement();

if(this.__da){this.__da.tint(fg);
fi.setStyle(cO,null);
}else{var fh=qx.theme.manager.Color.getInstance().resolve(fg);
fi.setStyle(cO,fh);
}},_applyFont:function(gv,gw){},__dn:null,$$stateChanges:null,_forwardStates:null,hasState:function(g){var h=this.__dn;
return h&&h[g];
},addState:function(eY){var fa=this.__dn;

if(!fa){fa=this.__dn={};
}
if(fa[eY]){return;
}this.__dn[eY]=true;
if(eY===dY){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fd=this.__dq;

if(forward&&forward[eY]&&fd){var fb;

for(var fc in fd){fb=fd[fc];

if(fb instanceof qx.ui.core.Widget){fd[fc].addState(eY);
}}}},removeState:function(by){var bz=this.__dn;

if(!bz||!bz[by]){return;
}delete this.__dn[by];
if(by===dY){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bC=this.__dq;

if(forward&&forward[by]&&bC){for(var bB in bC){var bA=bC[bB];

if(bA instanceof qx.ui.core.Widget){bA.removeState(by);
}}}},replaceState:function(gg,gh){var gi=this.__dn;

if(!gi){gi=this.__dn={};
}
if(!gi[gh]){gi[gh]=true;
}
if(gi[gg]){delete gi[gg];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gl=this.__dq;

if(forward&&forward[gh]&&gl){for(var gk in gl){var gj=gl[gk];

if(gj instanceof qx.ui.core.Widget){gj.replaceState(gg,gh);
}}}},__do:null,__dp:null,syncAppearance:function(){var gB=this.__dn;
var gA=this.__do;
var gC=qx.theme.manager.Appearance.getInstance();
var gy=qx.core.Property.$$method.setThemed;
var gG=qx.core.Property.$$method.resetThemed;
if(this.__dp){delete this.__dp;
if(gA){var gx=gC.styleFrom(gA,gB,null,this.getAppearance());
if(gx){gA=null;
}}}if(!gA){var gz=this;
var gF=[];

do{gF.push(gz.$$subcontrol||gz.getAppearance());
}while(gz=gz.$$subparent);
gA=this.__do=gF.reverse().join(df).replace(/#[0-9]+/g,dn);
}var gD=gC.styleFrom(gA,gB,null,this.getAppearance());

if(gD){if(gx){for(var gE in gx){if(gD[gE]===undefined){this[gG[gE]]();
}}}if(qx.core.Variant.isSet(dO,dQ)){for(var gE in gD){if(!this[gy[gE]]){throw new Error(this.classname+' has no themeable property "'+gE+'" while styling '+gA);
}}}for(var gE in gD){gD[gE]===undefined?this[gG[gE]]():this[gy[gE]](gD[gE]);
}}else if(gx){for(var gE in gx){this[gG[gE]]();
}}this.fireDataEvent(co,this.__dn);
},_applyAppearance:function(j,k){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dd){qx.ui.core.queue.Appearance.add(this);
this.__dd=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dp=true;
qx.ui.core.queue.Appearance.add(this);
var go=this.__dq;

if(go){var gm;

for(var gn in go){gm=go[gn];

if(gm instanceof qx.ui.core.Widget){gm.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var gQ=this;

while(gQ.getAnonymous()){gQ=gQ.getLayoutParent();

if(!gQ){return null;
}}return gQ;
},getFocusTarget:function(){var fj=this;

if(!fj.getEnabled()){return null;
}
while(fj.getAnonymous()||!fj.getFocusable()){fj=fj.getLayoutParent();

if(!fj||!fj.getEnabled()){return null;
}}return fj;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gK,gL){var gM=this.getFocusElement();
if(gK){var gN=this.getTabIndex();

if(gN==null){gN=1;
}gM.setAttribute(cP,gN);
if(qx.core.Variant.isSet(dT,dX)){gM.setAttribute(bN,cJ);
}else{gM.setStyle(cy,cx);
}}else{if(gM.isNativelyFocusable()){gM.setAttribute(cP,-1);
}else if(gL){gM.setAttribute(cP,null);
}}},_applyKeepFocus:function(gt){var gu=this.getFocusElement();
gu.setAttribute(dF,gt?dQ:null);
},_applyKeepActive:function(fk){var fl=this.getContainerElement();
fl.setAttribute(di,fk?dQ:null);
},_applyTabIndex:function(eS){if(eS==null){eS=1;
}else if(eS<1||eS>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&eS!=null){this.getFocusElement().setAttribute(cP,eS);
}},_applySelectable:function(B){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(B);
this.getContentElement().setSelectable(B);
},_applyEnabled:function(hi,hj){if(hi===false){this.addState(eb);
this.removeState(dY);
if(this.isFocusable()){this.removeState(cN);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(eb);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gY,ha,name){},_applyContextMenu:function(eN,eO){if(eO){eO.removeState(cR);

if(eO.getOpener()==this){eO.resetOpener();
}
if(!eN){this.removeListener(cR,this._onContextMenuOpen);
eO.removeListener(cM,this._onBeforeContextMenuOpen,this);
}}
if(eN){eN.setOpener(this);
eN.addState(cR);

if(!eO){this.addListener(cR,this._onContextMenuOpen);
eN.addListener(cM,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dK&&this.hasListener(bG)){this.fireDataEvent(bG,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(fP,fQ){if(!this.isEnabled()&&fP===true){fP=false;
}qx.ui.core.DragDropCursor.getInstance();
if(fP){this.addListener(du,this._onDragStart);
this.addListener(dR,this._onDrag);
this.addListener(dz,this._onDragEnd);
this.addListener(dw,this._onDragChange);
}else{this.removeListener(du,this._onDragStart);
this.removeListener(dR,this._onDrag);
this.removeListener(dz,this._onDragEnd);
this.removeListener(dw,this._onDragChange);
}this.getContainerElement().setAttribute(cr,fP?dQ:null);
},_applyDroppable:function(fX,fY){if(!this.isEnabled()&&fX===true){fX=false;
}this.getContainerElement().setAttribute(ca,fX?dQ:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bD);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bk=qx.ui.core.DragDropCursor.getInstance();
var bl=e.getCurrentAction();
bl?bk.setAction(bl):bk.resetAction();
},visualizeFocus:function(){this.addState(cN);
},visualizeBlur:function(){this.removeState(cN);
},scrollChildIntoView:function(fs,ft,fu,fv){this.scrollChildIntoViewX(fs,ft,fv);
this.scrollChildIntoViewY(fs,fu,fv);
},scrollChildIntoViewX:function(ga,gb,gc){this.getContentElement().scrollChildIntoViewX(ga.getContainerElement(),gb,gc);
},scrollChildIntoViewY:function(gS,gT,gU){this.getContentElement().scrollChildIntoViewY(gS.getContainerElement(),gT,gU);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(E){if(!this.__dq){return false;
}return !!this.__dq[E];
},__dq:null,_getCreatedChildControls:function(){return this.__dq;
},getChildControl:function(fR,fS){if(!this.__dq){if(fS){return null;
}this.__dq={};
}var fT=this.__dq[fR];

if(fT){return fT;
}
if(fS===true){return null;
}return this._createChildControl(fR);
},_showChildControl:function(bw){var bx=this.getChildControl(bw);
bx.show();
return bx;
},_excludeChildControl:function(ex){var ey=this.getChildControl(ex,true);

if(ey){ey.exclude();
}},_isChildControlVisible:function(fm){var fn=this.getChildControl(fm,true);

if(fn){return fn.isVisible();
}return false;
},_createChildControl:function(bf){if(!this.__dq){this.__dq={};
}else if(this.__dq[bf]){throw new Error("Child control '"+bf+"' already created!");
}var bj=bf.indexOf(bT);

if(bj==-1){var bg=this._createChildControlImpl(bf);
}else{var bg=this._createChildControlImpl(bf.substring(0,bj));
}
if(!bg){throw new Error("Unsupported control: "+bf);
}bg.$$subcontrol=bf;
bg.$$subparent=this;
var bh=this.__dn;
var forward=this._forwardStates;

if(bh&&forward&&bg instanceof qx.ui.core.Widget){for(var bi in bh){if(forward[bi]){bg.addState(bi);
}}}this.fireDataEvent(ed,bg);
return this.__dq[bf]=bg;
},_createChildControlImpl:function(gP){return null;
},_disposeChildControls:function(){var fK=this.__dq;

if(!fK){return;
}var fI=qx.ui.core.Widget;

for(var fJ in fK){var fH=fK[fJ];

if(!fI.contains(this,fH)){fH.destroy();
}else{fH.dispose();
}}delete this.__dq;
},_findTopControl:function(){var gf=this;

while(gf){if(!gf.$$subparent){return gf;
}gf=gf.$$subparent;
}return null;
},getContainerLocation:function(v){var w=this.getContainerElement().getDomElement();
return w?qx.bom.element.Location.get(w,v):null;
},getContentLocation:function(gd){var ge=this.getContentElement().getDomElement();
return ge?qx.bom.element.Location.get(ge,gd):null;
},setDomLeft:function(C){var D=this.getContainerElement().getDomElement();

if(D){D.style.left=C+dP;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(r){var s=this.getContainerElement().getDomElement();

if(s){s.style.top=r+dP;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(gV,top){var gW=this.getContainerElement().getDomElement();

if(gW){gW.style.left=gV+dP;
gW.style.top=top+dP;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fw=arguments.callee.base.call(this);

if(this.getChildren){var fx=this.getChildren();

for(var i=0,l=fx.length;i<l;i++){fw.add(fx[i].clone());
}}return fw;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dx,dQ)){if(this.__de){qx.locale.Manager.getInstance().removeListenerById(this.__de);
}}this.getContainerElement().setAttribute(dt,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var eR=qx.ui.core.Widget;
var eQ=this.getContainerElement();

if(this.__da){eQ.remove(this.__da);
eR.__cX.poolDecorator(this.__da);
}
if(this.__db){eQ.remove(this.__db);
eR.__cY.poolDecorator(this.__db);
}this.clearSeparators();
this.__da=this.__db=this.__dh=null;
}else{this._disposeArray(dj);
this._disposeObjects(dE,ee);
}this._disposeArray(bK);
this.__dn=this.__dq=null;
this._disposeObjects(cf,dc,cc,cX);
}});
})();
(function(){var e="qx.event.type.Data",d="qx.ui.container.Composite",c="addChildWidget",b="removeChildWidget";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this._setLayout(a);
}},events:{addChildWidget:e,removeChildWidget:e},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(c,qx.event.type.Data,[i]);
},_afterRemoveChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
}},defer:function(g,h){qx.ui.core.MChildrenHandling.remap(h);
qx.ui.core.MLayoutHandling.remap(h);
}});
})();
(function(){var m="keep-align",l="qx.debug",k="interval",j="'placementModeX' and 'placementModeY' instead.",i="The property 'smart' is deprecated. Please us the properties ",h="on",g="Integer",f="direct",e="best-fit",d="mouse",F="bottom-left",E="disappear",D="Boolean",C="Invalid attribute 'value'.",B="bottom-right",A="widget",z="qx.ui.core.MPlacement",y="left-top",x="offsetRight",w="shorthand",t="offsetLeft",u="top-left",r="appear",s="offsetBottom",p="top-right",q="offsetTop",n="right-bottom",o="right-top",v="left-bottom";
qx.Mixin.define(z,{properties:{position:{check:[u,p,F,B,y,v,o,n],init:F,themeable:true},placeMethod:{check:[A,d],init:d,themeable:true},domMove:{check:D,init:false},placementModeX:{check:[f,m,e],init:m,themeable:true},placementModeY:{check:[f,m,e],init:m,themeable:true},offsetLeft:{check:g,init:0,themeable:true},offsetTop:{check:g,init:0,themeable:true},offsetRight:{check:g,init:0,themeable:true},offsetBottom:{check:g,init:0,themeable:true},offset:{group:[q,x,s,t],mode:w,themeable:true}},members:{__gM:null,getLayoutLocation:function(N){var Q,P,R,top;
P=N.getBounds();
R=P.left;
top=P.top;
var S=P;
N=N.getLayoutParent();

while(N&&!N.isRootWidget()){P=N.getBounds();
R+=P.left;
top+=P.top;
Q=N.getInsets();
R+=Q.left;
top+=Q.top;
N=N.getLayoutParent();
}if(N.isRootWidget()){var O=N.getContainerLocation();

if(O){R+=O.left;
top+=O.top;
}}return {left:R,top:top,right:R+S.width,bottom:top+S.height};
},moveTo:function(T,top){if(this.getDomMove()){this.setDomPosition(T,top);
}else{this.setLayoutProperties({left:T,top:top});
}},placeToWidget:function(G,H){if(H){this.__gM=qx.lang.Function.bind(this.placeToWidget,this,G,false);
qx.event.Idle.getInstance().addListener(k,this.__gM);
this.addListener(E,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(k,this.__gM);
this.__gM=null;
}},this);
}var I=G.getContainerLocation()||this.getLayoutLocation(G);
this.__gO(I);
},placeToMouse:function(event){var K=event.getDocumentLeft();
var top=event.getDocumentTop();
var J={left:K,top:top,right:K,bottom:top};
this.__gO(J);
},placeToElement:function(bb,bc){var location=qx.bom.element.Location.get(bb);
var bd={left:location.left,top:location.top,right:location.left+bb.offsetWidth,bottom:location.top+bb.offsetHeight};
if(bc){this.__gM=qx.lang.Function.bind(this.placeToElement,this,bb,false);
qx.event.Idle.getInstance().addListener(k,this.__gM);
this.addListener(E,function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(k,this.__gM);
this.__gM=null;
}},this);
}this.__gO(bd);
},placeToPoint:function(U){var V={left:U.left,top:U.top,right:U.left,bottom:U.top};
this.__gO(V);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__gN:function(L){var M=null;

if(this._computePlacementSize){var M=this._computePlacementSize();
}else if(this.isVisible()){var M=this.getBounds();
}
if(M==null){this.addListenerOnce(r,function(){this.__gN(L);
},this);
}else{L.call(this,M);
}},__gO:function(a){this.__gN(function(b){var c=qx.util.placement.Placement.compute(b,this.getLayoutParent().getBounds(),a,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(c.left,c.top);
});
},setSmart:function(Y){if(qx.core.Variant.isSet(l,h)){qx.core.Assert.assertBoolean(Y,C);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,i+j);
}var ba=Y?m:f;
this.set({placementModeX:ba,placementModeY:ba});
},getSmart:function(){if(qx.core.Variant.isSet(l,h)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i+j);
}var W=this.getPlacementModeX()==m?true:false;
var X=this.getPlacementModeY()==m?true:false;
return W&&X;
},resetSmart:function(){if(qx.core.Variant.isSet(l,h)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i+j);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(l,h)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i+j);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(l,h)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i+j);
}this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__gM){qx.event.Idle.getInstance().removeListener(k,this.__gM);
}}});
})();
(function(){var f="qx.ui.popup.Popup",e="visible",d="excluded",c="popup",b="Boolean";
qx.Class.define(f,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(a){arguments.callee.base.call(this,a);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:c},visibility:{refine:true,init:d},autoHide:{check:b,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===e?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var r="atom",q="Integer",p="String",o="_applyRich",n="qx.ui.tooltip.ToolTip",m="_applyIcon",l="tooltip",k="qx.ui.core.Widget",j="mouseover",i="Boolean",h="_applyLabel";
qx.Class.define(n,{extend:qx.ui.popup.Popup,construct:function(x,y){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(r);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(j,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:l},showTimeout:{check:q,init:700,themeable:true},hideTimeout:{check:q,init:4000,themeable:true},label:{check:p,nullable:true,apply:h},icon:{check:p,nullable:true,apply:m,themeable:true},rich:{check:i,init:false,apply:o},opener:{check:k,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case r:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||arguments.callee.base.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(r);
u==null?w.resetIcon:w.setIcon(u);
},_applyLabel:function(a,b){var c=this.getChildControl(r);
a==null?c.resetLabel():c.setLabel(a);
},_applyRich:function(d,f){var g=this.getChildControl(r);
g.setRich(d);
}}});
})();
(function(){var h="qx.ui.core.queue.Layout",g="layout";
qx.Class.define(h,{statics:{__gj:{},remove:function(w){delete this.__gj[w.$$hash];
},add:function(j){this.__gj[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(g);
},flush:function(){var k=this.__gm();
for(var i=k.length-1;i>=0;i--){var l=k[i];
if(l.hasValidLayout()){continue;
}if(l.isRootWidget()&&!l.hasUserBounds()){var n=l.getSizeHint();
l.renderLayout(0,0,n.width,n.height);
}else{var m=l.getBounds();
l.renderLayout(m.left,m.top,m.width,m.height);
}}},getNestingLevel:function(x){var y=this.__gl;
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
},__gk:function(){var f=qx.ui.core.queue.Visibility;
this.__gl={};
var e=[];
var d=this.__gj;
var a,c;

for(var b in d){a=d[b];

if(f.isVisible(a)){c=this.getNestingLevel(a);
if(!e[c]){e[c]={};
}e[c][b]=a;
delete d[b];
}}return e;
},__gm:function(){var r=[];
var t=this.__gk();

for(var q=t.length-1;q>=0;q--){if(!t[q]){continue;
}
for(var p in t[q]){var o=t[q][p];
if(q==0||o.isRootWidget()||o.hasUserBounds()){r.push(o);
o.invalidateLayoutCache();
continue;
}var v=o.getSizeHint(false);

if(v){o.invalidateLayoutCache();
var s=o.getSizeHint();
var u=(!o.getBounds()||v.minWidth!==s.minWidth||v.width!==s.width||v.maxWidth!==s.maxWidth||v.minHeight!==s.minHeight||v.height!==s.height||v.maxHeight!==s.maxHeight);
}else{u=true;
}
if(u){var parent=o.getLayoutParent();

if(!t[q-1]){t[q-1]={};
}t[q-1][parent.$$hash]=parent;
}else{r.push(o);
}}}return r;
}}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){arguments.callee.base.call(this);
this.__iG=e;
this.__iH=e.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iG:null,__iH:null,canHandleEvent:function(i,j){},registerEvent:function(a,b,c){},unregisterEvent:function(f,g,h){}},destruct:function(){this.__iG=this.__iH=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var f="qx.util.DeferredCallManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){this.__eT={};
this.__eU=qx.lang.Function.bind(this.__eY,this);
this.__eV=false;
},members:{__eW:null,__eX:null,__eT:null,__eV:null,__eU:null,schedule:function(g){if(this.__eW==null){this.__eW=window.setTimeout(this.__eU,0);
}var h=g.toHashCode();
if(this.__eX&&this.__eX[h]){return;
}this.__eT[h]=g;
this.__eV=true;
},cancel:function(a){var b=a.toHashCode();
if(this.__eX&&this.__eX[b]){this.__eX[b]=null;
return;
}delete this.__eT[b];
if(qx.lang.Object.isEmpty(this.__eT)&&this.__eW!=null){window.clearTimeout(this.__eW);
this.__eW=null;
}},__eY:qx.event.GlobalError.observeMethod(function(){this.__eW=null;
while(this.__eV){this.__eX=qx.lang.Object.clone(this.__eT);
this.__eT={};
this.__eV=false;

for(var d in this.__eX){var c=this.__eX[d];

if(c){this.__eX[d]=null;
c.call();
}}}this.__eX=null;
})},destruct:function(){if(this.__eW!=null){window.clearTimeout(this.__eW);
}this.__eU=this.__eT=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__gg=d;
this.__gh=e||null;
this.__gi=qx.util.DeferredCallManager.getInstance();
},members:{__gg:null,__gh:null,__gi:null,cancel:function(){this.__gi.cancel(this);
},schedule:function(){this.__gi.schedule(this);
},call:function(){this.__gh?this.__gg.apply(this.__gh):this.__gg();
}},destruct:function(b,c){this.cancel();
this.__gh=this.__gg=this.__gi=null;
}});
})();
(function(){var cF="element",cE="on",cD="qx.debug",cC="qx.client",cB="div",cA="': ",cz="Invalid context for callback.",cy="'",cx="Invalid event type.",cw="Invalid callback function",dj="",di="mshtml",dh="none",dg="scroll",df="|bubble|",de="qx.html.Element",dd="|capture|",dc="Invalid capture flag.",da="activate",cY="Failed to add event listener for type '",cM="blur",cN="deactivate",cK="userSelect",cL="__cD",cI=" from the target '",cJ="capture",cG="visible",cH="releaseCapture",cO="qxSelectable",cP="tabIndex",cS="off",cR="focus",cU="normal",cT=" to the target '",cW="Failed to remove event listener for type '",cV="webkit",cQ="Invalid capture falg.",cX="hidden";
qx.Class.define(de,{extend:qx.core.Object,construct:function(dz){arguments.callee.base.call(this);
this.__ch=dz||cB;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__ci:{},_scheduleFlush:function(H){qx.html.Element.__cP.schedule();
},flush:function(){var bT;

if(qx.core.Variant.isSet(cD,cE)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var bL=this.__cj();
var bK=bL.getFocus();

if(bK&&this.__cn(bK)){bL.blur(bK);
}var cb=bL.getActive();

if(cb&&this.__cn(cb)){qx.bom.Element.deactivate(cb);
}var bO=this.__cl();

if(bO&&this.__cn(bO)){qx.bom.Element.releaseCapture(bO);
}var bU=[];
var bV=this._modified;

for(var bS in bV){bT=bV[bS];
if(bT.__cH()){if(bT.__co&&qx.dom.Hierarchy.isRendered(bT.__co)){bU.push(bT);
}else{if(qx.core.Variant.isSet(cD,cE)){if(this.DEBUG){bT.debug("Flush invisible element");
}}bT.__cG();
}delete bV[bS];
}}
for(var i=0,l=bU.length;i<l;i++){bT=bU[i];

if(qx.core.Variant.isSet(cD,cE)){if(this.DEBUG){bT.debug("Flush rendered element");
}}bT.__cG();
}var bQ=this._visibility;

for(var bS in bQ){bT=bQ[bS];

if(qx.core.Variant.isSet(cD,cE)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+bT.__cr);
}}bT.__co.style.display=bT.__cr?dj:dh;
if(qx.core.Variant.isSet(cC,di)){if(!(document.documentMode>=8)){bT.__co.style.visibility=bT.__cr?cG:cX;
}}delete bQ[bS];
}var scroll=this._scroll;

for(var bS in scroll){bT=scroll[bS];
var cc=bT.__co;

if(cc&&cc.offsetWidth){var bN=true;
if(bT.__cu!=null){bT.__co.scrollLeft=bT.__cu;
delete bT.__cu;
}if(bT.__cv!=null){bT.__co.scrollTop=bT.__cv;
delete bT.__cv;
}var bX=bT.__cs;

if(bX!=null){var bR=bX.element.getDomElement();

if(bR&&bR.offsetWidth){qx.bom.element.Scroll.intoViewX(bR,cc,bX.align);
delete bT.__cs;
}else{bN=false;
}}var bY=bT.__ct;

if(bY!=null){var bR=bY.element.getDomElement();

if(bR&&bR.offsetWidth){qx.bom.element.Scroll.intoViewY(bR,cc,bY.align);
delete bT.__ct;
}else{bN=false;
}}if(bN){delete scroll[bS];
}}}var bM={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var ca=this._actions[i];
var bW=ca.element.__co;

if(!bW||!bM[ca.type]&&!ca.element.__cH()){continue;
}var bP=ca.args;
bP.unshift(bW);
qx.bom.Element[ca.type].apply(qx.bom.Element,bP);
}this._actions=[];
for(var bS in this.__ci){var bJ=this.__ci[bS];
var cc=bJ.element.__co;

if(cc){qx.bom.Selection.set(cc,bJ.start,bJ.end);
delete this.__ci[bS];
}}qx.event.handler.Appear.refresh();
},__cj:function(){if(!this.__ck){var J=qx.event.Registration.getManager(window);
this.__ck=J.getHandler(qx.event.handler.Focus);
}return this.__ck;
},__cl:function(){if(!this.__cm){var cg=qx.event.Registration.getManager(window);
this.__cm=cg.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cm.getCaptureElement();
},__cn:function(O){var P=qx.core.ObjectRegistry.fromHashCode(O.$$element);
return P&&!P.__cH();
}},members:{__ch:null,__co:null,__cp:false,__cq:true,__cr:true,__cs:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:null,__cy:null,__cz:null,__cA:null,__cB:null,__cC:null,__cD:null,__cE:null,__cF:null,_scheduleChildrenUpdate:function(){if(this.__cE){return;
}this.__cE=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
},_createDomElement:function(){return qx.bom.Element.create(this.__ch);
},__cG:function(){if(qx.core.Variant.isSet(cD,cE)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var t=this.__cD;

if(t){var length=t.length;
var u;

for(var i=0;i<length;i++){u=t[i];

if(u.__cr&&u.__cq&&!u.__co){u.__cG();
}}}
if(!this.__co){this.__co=this._createDomElement();
this.__co.$$element=this.$$hash;
this._copyData(false);

if(t&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cE){this._syncChildren();
}}delete this.__cE;
},_insertChildren:function(){var U=this.__cD;
var length=U.length;
var W;

if(length>2){var V=document.createDocumentFragment();

for(var i=0;i<length;i++){W=U[i];

if(W.__co&&W.__cq){V.appendChild(W.__co);
}}this.__co.appendChild(V);
}else{var V=this.__co;

for(var i=0;i<length;i++){W=U[i];

if(W.__co&&W.__cq){V.appendChild(W.__co);
}}}},_syncChildren:function(){var bm=qx.core.ObjectRegistry;
var bd=this.__cD;
var bk=bd.length;
var be;
var bi;
var bg=this.__co;
var bj=bg.childNodes;
var bf=0;
var bh;

if(qx.core.Variant.isSet(cD,cE)){var bl=0;
}for(var i=bj.length-1;i>=0;i--){bh=bj[i];
bi=bm.fromHashCode(bh.$$element);

if(!bi||!bi.__cq||bi.__cF!==this){bg.removeChild(bh);

if(qx.core.Variant.isSet(cD,cE)){bl++;
}}}for(var i=0;i<bk;i++){be=bd[i];
if(be.__cq){bi=be.__co;
bh=bj[bf];

if(!bi){continue;
}if(bi!=bh){if(bh){bg.insertBefore(bi,bh);
}else{bg.appendChild(bi);
}
if(qx.core.Variant.isSet(cD,cE)){bl++;
}}bf++;
}}if(qx.core.Variant.isSet(cD,cE)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+bl+" operations");
}}},_copyData:function(dA){var dE=this.__co;
var dD=this.__cA;

if(dD){var dB=qx.bom.element.Attribute;

for(var dF in dD){dB.set(dE,dF,dD[dF]);
}}var dD=this.__cz;

if(dD){var dC=qx.bom.element.Style;

if(dA){dC.setStyles(dE,dD);
}else{dC.setCss(dE,dC.compile(dD));
}}var dD=this.__cB;

if(dD){for(var dF in dD){this._applyProperty(dF,dD[dF]);
}}var dD=this.__cC;

if(dD){qx.event.Registration.getManager(dE).importListeners(dE,dD);
delete this.__cC;
}},_syncData:function(){var cs=this.__co;
var cr=qx.bom.element.Attribute;
var cp=qx.bom.element.Style;
var cq=this.__cx;

if(cq){var cv=this.__cA;

if(cv){var ct;

for(var cu in cq){ct=cv[cu];

if(ct!==undefined){cr.set(cs,cu,ct);
}else{cr.reset(cs,cu);
}}}this.__cx=null;
}var cq=this.__cw;

if(cq){var cv=this.__cz;

if(cv){var co={};

for(var cu in cq){co[cu]=cv[cu];
}cp.setStyles(cs,co);
}this.__cw=null;
}var cq=this.__cy;

if(cq){var cv=this.__cB;

if(cv){var ct;

for(var cu in cq){this._applyProperty(cu,cv[cu]);
}}this.__cy=null;
}},__cH:function(){var f=this;
while(f){if(f.__cp){return true;
}
if(!f.__cq||!f.__cr){return false;
}f=f.__cF;
}return false;
},__cI:function(dv){if(dv.__cF===this){throw new Error("Child is already in: "+dv);
}
if(dv.__cp){throw new Error("Root elements could not be inserted into other ones.");
}if(dv.__cF){dv.__cF.remove(dv);
}dv.__cF=this;
if(!this.__cD){this.__cD=[];
}if(this.__co){this._scheduleChildrenUpdate();
}},__cJ:function(bb){if(bb.__cF!==this){throw new Error("Has no child: "+bb);
}if(this.__co){this._scheduleChildrenUpdate();
}delete bb.__cF;
},__cK:function(cd){if(cd.__cF!==this){throw new Error("Has no child: "+cd);
}if(this.__co){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cD||null;
},getChild:function(cj){var ck=this.__cD;
return ck&&ck[cj]||null;
},hasChildren:function(){var Y=this.__cD;
return Y&&Y[0]!==undefined;
},indexOf:function(ce){var cf=this.__cD;
return cf?cf.indexOf(ce):-1;
},hasChild:function(bB){var bC=this.__cD;
return bC&&bC.indexOf(bB)!==-1;
},add:function(bt){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cI(arguments[i]);
}this.__cD.push.apply(this.__cD,arguments);
}else{this.__cI(bt);
this.__cD.push(bt);
}return this;
},addAt:function(F,G){this.__cI(F);
qx.lang.Array.insertAt(this.__cD,F,G);
return this;
},remove:function(k){var m=this.__cD;

if(!m){return;
}
if(arguments[1]){var n;

for(var i=0,l=arguments.length;i<l;i++){n=arguments[i];
this.__cJ(n);
qx.lang.Array.remove(m,n);
}}else{this.__cJ(k);
qx.lang.Array.remove(m,k);
}return this;
},removeAt:function(ed){var ee=this.__cD;

if(!ee){throw new Error("Has no children!");
}var ef=ee[ed];

if(!ef){throw new Error("Has no child at this position!");
}this.__cJ(ef);
qx.lang.Array.removeAt(this.__cD,ed);
return this;
},removeAll:function(){var E=this.__cD;

if(E){for(var i=0,l=E.length;i<l;i++){this.__cJ(E[i]);
}E.length=0;
}return this;
},getParent:function(){return this.__cF||null;
},insertInto:function(parent,I){parent.__cI(this);

if(I==null){parent.__cD.push(this);
}else{qx.lang.Array.insertAt(this.__cD,this,I);
}return this;
},insertBefore:function(du){var parent=du.__cF;
parent.__cI(this);
qx.lang.Array.insertBefore(parent.__cD,this,du);
return this;
},insertAfter:function(L){var parent=L.__cF;
parent.__cI(this);
qx.lang.Array.insertAfter(parent.__cD,this,L);
return this;
},moveTo:function(br){var parent=this.__cF;
parent.__cK(this);
var bs=parent.__cD.indexOf(this);

if(bs===br){throw new Error("Could not move to same index!");
}else if(bs<br){br--;
}qx.lang.Array.removeAt(parent.__cD,bs);
qx.lang.Array.insertAt(parent.__cD,this,br);
return this;
},moveBefore:function(dV){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(dV));
},moveAfter:function(eh){var parent=this.__cF;
return this.moveTo(parent.__cD.indexOf(eh)+1);
},free:function(){var parent=this.__cF;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__cD){return;
}parent.__cJ(this);
qx.lang.Array.remove(parent.__cD,this);
return this;
},getDomElement:function(){return this.__co||null;
},getNodeName:function(){return this.__ch;
},setNodeName:function(name){this.__ch=name;
},setRoot:function(eg){this.__cp=eg;
},useMarkup:function(R){if(this.__co){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(cC,di)){var S=document.createElement(cB);
}else{var S=qx.html.Element.__cL;

if(!S){S=qx.html.Element.__cL=document.createElement(cB);
}}S.innerHTML=R;
this.__co=S.firstChild;
this.__co.$$element=this.$$hash;
this._copyData(true);
return this.__co;
},useElement:function(K){if(this.__co){throw new Error("Could not overwrite existing element!");
}this.__co=K;
this.__co.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dx=this.getAttribute(cP);

if(dx>=1){return true;
}var dw=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dx>=0&&dw[this.__ch]){return true;
}return false;
},setSelectable:function(ci){this.setAttribute(cO,ci?cE:cS);
if(qx.core.Variant.isSet(cC,cV)){this.setStyle(cK,ci?cU:dh);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ch];
},include:function(){if(this.__cq){return;
}delete this.__cq;

if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__cq){return;
}this.__cq=false;

if(this.__cF){this.__cF._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__cq===true;
},show:function(){if(this.__cr){return;
}
if(this.__co){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}if(this.__cF){this.__cF._scheduleChildrenUpdate();
}delete this.__cr;
},hide:function(){if(!this.__cr){return;
}
if(this.__co){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}this.__cr=false;
},isVisible:function(){return this.__cr===true;
},scrollChildIntoViewX:function(dL,dM,dN){var dO=this.__co;
var dP=dL.getDomElement();

if(dN!==false&&dO&&dO.offsetWidth&&dP&&dP.offsetWidth){qx.bom.element.Scroll.intoViewX(dP,dO,dM);
}else{this.__cs={element:dL,align:dM};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}delete this.__cu;
},scrollChildIntoViewY:function(dQ,dR,dS){var dT=this.__co;
var dU=dQ.getDomElement();

if(dS!==false&&dT&&dT.offsetWidth&&dU&&dU.offsetWidth){qx.bom.element.Scroll.intoViewY(dU,dT,dR);
}else{this.__ct={element:dQ,align:dR};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}delete this.__cv;
},scrollToX:function(x,M){var N=this.__co;

if(M!==true&&N&&N.offsetWidth){N.scrollLeft=x;
}else{this.__cu=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}delete this.__cs;
},getScrollX:function(){var Q=this.__co;

if(Q){return Q.scrollLeft;
}return this.__cu||0;
},scrollToY:function(y,bp){var bq=this.__co;

if(bp!==true&&bq&&bq.offsetWidth){bq.scrollTop=y;
}else{this.__cv=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}delete this.__ct;
},getScrollY:function(){var j=this.__co;

if(j){return j.scrollTop;
}return this.__cv||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(dg,this.__cN,this);
},enableScrolling:function(){this.removeListener(dg,this.__cN,this);
},__cM:null,__cN:function(e){if(!this.__cM){this.__cM=true;
this.__co.scrollTop=0;
this.__co.scrollLeft=0;
delete this.__cM;
}},getTextSelection:function(){var bc=this.__co;

if(bc){return qx.bom.Selection.get(bc);
}return null;
},getTextSelectionLength:function(){var dK=this.__co;

if(dK){return qx.bom.Selection.getLength(dK);
}return null;
},getTextSelectionStart:function(){var d=this.__co;

if(d){return qx.bom.Selection.getStart(d);
}return null;
},getTextSelectionEnd:function(){var T=this.__co;

if(T){return qx.bom.Selection.getEnd(T);
}return null;
},setTextSelection:function(bD,bE){var bF=this.__co;

if(bF){qx.bom.Selection.set(bF,bD,bE);
return;
}qx.html.Element.__ci[this.toHashCode()]={element:this,start:bD,end:bE};
qx.html.Element._scheduleFlush(cF);
},clearTextSelection:function(){var dG=this.__co;

if(dG){qx.bom.Selection.clear(dG);
}delete qx.html.Element.__ci[this.toHashCode()];
},__cO:function(dH,dI){var dJ=qx.html.Element._actions;
dJ.push({type:dH,element:this,args:dI||[]});
qx.html.Element._scheduleFlush(cF);
},focus:function(){this.__cO(cR);
},blur:function(){this.__cO(cM);
},activate:function(){this.__cO(da);
},deactivate:function(){this.__cO(cN);
},capture:function(D){this.__cO(cJ,[D!==false]);
},releaseCapture:function(){this.__cO(cH);
},setStyle:function(dq,dr,ds){if(!this.__cz){this.__cz={};
}
if(this.__cz[dq]==dr){return;
}
if(dr==null){delete this.__cz[dq];
}else{this.__cz[dq]=dr;
}if(this.__co){if(ds){qx.bom.element.Style.set(this.__co,dq,dr);
return this;
}if(!this.__cw){this.__cw={};
}this.__cw[dq]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}return this;
},setStyles:function(o,p){var q=qx.bom.element.Style;

if(!this.__cz){this.__cz={};
}
if(this.__co){if(!this.__cw){this.__cw={};
}
for(var s in o){var r=o[s];

if(this.__cz[s]==r){continue;
}
if(r==null){delete this.__cz[s];
}else{this.__cz[s]=r;
}if(p){q.set(this.__co,s,r);
continue;
}this.__cw[s]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}else{for(var s in o){var r=o[s];

if(this.__cz[s]==r){continue;
}
if(r==null){delete this.__cz[s];
}else{this.__cz[s]=r;
}}}return this;
},removeStyle:function(g,h){this.setStyle(g,null,h);
},getStyle:function(A){return this.__cz?this.__cz[A]:null;
},getAllStyles:function(){return this.__cz||null;
},setAttribute:function(cl,cm,cn){if(!this.__cA){this.__cA={};
}
if(this.__cA[cl]==cm){return;
}
if(cm==null){delete this.__cA[cl];
}else{this.__cA[cl]=cm;
}if(this.__co){if(cn){qx.bom.element.Attribute.set(this.__co,cl,cm);
return this;
}if(!this.__cx){this.__cx={};
}this.__cx[cl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}return this;
},setAttributes:function(a,b){for(var c in a){this.setAttribute(c,a[c],b);
}return this;
},removeAttribute:function(B,C){this.setAttribute(B,null,C);
},getAttribute:function(ch){return this.__cA?this.__cA[ch]:null;
},_applyProperty:function(name,dy){},_setProperty:function(v,w,z){if(!this.__cB){this.__cB={};
}
if(this.__cB[v]==w){return;
}
if(w==null){delete this.__cB[v];
}else{this.__cB[v]=w;
}if(this.__co){if(z){this._applyProperty(v,w);
return this;
}if(!this.__cy){this.__cy={};
}this.__cy[v]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(cF);
}return this;
},_removeProperty:function(bn,bo){this._setProperty(bn,null,bo);
},_getProperty:function(bG){var bH=this.__cB;

if(!bH){return null;
}var bI=bH[bG];
return bI==null?null:bI;
},addListener:function(dW,dX,self,dY){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cD,cE)){var ea=cY+dW+cy+cT+this+cA;
this.assertString(dW,ea+cx);
this.assertFunction(dX,ea+cw);

if(self!==undefined){this.assertObject(self,cz);
}
if(dY!==undefined){this.assertBoolean(dY,cQ);
}}
if(this.__co){return qx.event.Registration.addListener(this.__co,dW,dX,self,dY);
}
if(!this.__cC){this.__cC={};
}
if(dY==null){dY=false;
}var eb=qx.event.Manager.getNextUniqueId();
var ec=dW+(dY?dd:df)+eb;
this.__cC[ec]={type:dW,listener:dX,self:self,capture:dY,unique:eb};
return ec;
},removeListener:function(bu,bv,self,bw){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(cD,cE)){var bx=cW+bu+cy+cI+this+cA;
this.assertString(bu,bx+cx);
this.assertFunction(bv,bx+cw);

if(self!==undefined){this.assertObject(self,cz);
}
if(bw!==undefined){this.assertBoolean(bw,dc);
}}
if(this.__co){qx.event.Registration.removeListener(this.__co,bu,bv,self,bw);
}else{var bz=this.__cC;
var by;

if(bw==null){bw=false;
}
for(var bA in bz){by=bz[bA];
if(by.listener===bv&&by.self===self&&by.capture===bw&&by.type===bu){delete bz[bA];
break;
}}}return this;
},removeListenerById:function(ba){if(this.$$disposed){return null;
}
if(this.__co){qx.event.Registration.removeListenerById(this.__co,ba);
}else{delete this.__cC[ba];
}return this;
},hasListener:function(dk,dl){if(this.$$disposed){return false;
}
if(this.__co){return qx.event.Registration.hasListener(this.__co,dk,dl);
}var dn=this.__cC;
var dm;

if(dl==null){dl=false;
}
for(var dp in dn){dm=dn[dp];
if(dm.capture===dl&&dm.type===dk){return true;
}}return false;
}},defer:function(X){X.__cP=new qx.util.DeferredCall(X.flush,X);
},destruct:function(){var dt=this.__co;

if(dt){qx.event.Registration.getManager(dt).removeAllListeners(dt);
dt.$$element=dj;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cF;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cL);
this.__cA=this.__cz=this.__cC=this.__cB=this.__cx=this.__cw=this.__cy=this.__co=this.__cF=this.__cs=this.__ct=null;
}});
})();
(function(){var f="on",d="qx.ui.core.queue.Manager",c="qx.debug",b="useraction";
qx.Class.define(d,{statics:{__js:false,__jt:{},__ju:0,MAX_RETRIES:10,scheduleFlush:function(g){var self=qx.ui.core.queue.Manager;
self.__jt[g]=true;

if(!self.__js){self.__jx.schedule();
self.__js=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jv){return;
}self.__jv=true;
self.__jx.cancel();
var a=self.__jt;
self.__jw(function(){while(a.visibility||a.widget||a.appearance||a.layout||a.element){if(a.widget){delete a.widget;
qx.ui.core.queue.Widget.flush();
}
if(a.visibility){delete a.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(a.appearance){delete a.appearance;
qx.ui.core.queue.Appearance.flush();
}if(a.widget||a.visibility||a.appearance){continue;
}
if(a.layout){delete a.layout;
qx.ui.core.queue.Layout.flush();
}if(a.widget||a.visibility||a.appearance||a.layout){continue;
}
if(a.element){delete a.element;
qx.html.Element.flush();
}}},function(){self.__js=false;
});
self.__jw(function(){if(a.dispose){delete a.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jv=false;
});
self.__ju=0;
},__jw:function(i,j){var self=qx.ui.core.queue.Manager;

try{i();
}catch(e){if(qx.core.Variant.isSet(c,f)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__js=false;
self.__jv=false;
self.__ju+=1;

if(self.__ju<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__ju-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{j();
}}},defer:function(h){h.__jx=new qx.util.DeferredCall(h.flush);
qx.html.Element._scheduleFlush=h.scheduleFlush;
qx.event.Registration.addListener(window,b,h.flush);
}});
})();
(function(){var d="abstract",c="qx.event.dispatch.AbstractBubbling";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:d,construct:function(b){this._manager=b;
},members:{_getParent:function(a){throw new Error("Missing implementation");
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
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var x="keydown",w="qx.client",v="keypress",u="NumLock",t="keyup",s="Enter",r="0",q="9",p="-",o="PageUp",bE="+",bD="PrintScreen",bC="gecko",bB="A",bA="Z",bz="Left",by="F5",bx="Down",bw="Up",bv="F11",E="F6",F="useraction",C="F3",D="keyinput",A="Insert",B="F8",y="End",z="/",M="Delete",N="*",ba="F1",V="F4",bi="Home",bd="F2",br="F12",bn="PageDown",R="F7",bu="F9",bt="F10",bs="Right",Q="text",T="Escape",U="webkit",X="5",bb="3",be="Meta",bk="7",bp="CapsLock",G="input",H="Control",S="Space",bh="Tab",bg="Shift",bf="Pause",bm="Unidentified",bl="qx.event.handler.Keyboard",bc="mshtml",bj="mshtml|webkit",l="6",bo="off",I="Apps",J="4",W="Alt",m="2",n="Scroll",P="1",K="8",L="Win",O="autoComplete",Y=",",bq="Backspace";
qx.Class.define(bl,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(ca){arguments.callee.base.call(this);
this.__fJ=ca;
this.__fK=ca.getWindow();
if(qx.core.Variant.isSet(w,bC)){this.__fL=this.__fK;
}else{this.__fL=this.__fK.document.documentElement;
}this.__fM={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cm){if(this._identifierToKeyCodeMap[cm]){return true;
}
if(cm.length!=1){return false;
}
if(cm>=r&&cm<=q){return true;
}
if(cm>=bB&&cm<=bA){return true;
}
switch(cm){case bE:case p:case N:case z:return true;
default:return false;
}}},members:{__fN:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(cI,cJ){},registerEvent:function(cu,cv,cw){},unregisterEvent:function(f,g,h){},_fireInputEvent:function(bF,bG){var bH=this.__fR();
if(bH&&bH.offsetWidth!=0){var event=qx.event.Registration.createEvent(D,qx.event.type.KeyInput,[bF,bH,bG]);
this.__fJ.dispatchEvent(bH,event);
}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,F,qx.event.type.Data,[D]);
}},_fireSequenceEvent:function(cb,cc,cd){var ce=this.__fR();
var cf=cb.keyCode;
var event=qx.event.Registration.createEvent(cc,qx.event.type.KeySequence,[cb,ce,cd]);
this.__fJ.dispatchEvent(ce,event);
if(qx.core.Variant.isSet(w,bj)){if(cc==x&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cf)&&!this._emulateKeyPress[cf]){this._fireSequenceEvent(cb,v,cd);
}}}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,F,qx.event.type.Data,[cc]);
}},__fR:function(){var i=this.__fJ.getHandler(qx.event.handler.Focus);
var j=i.getActive();
if(!j||j.offsetWidth==0){j=i.getFocus();
}if(!j||j.offsetWidth==0){j=this.__fJ.getWindow().document.body;
}return j;
},_initKeyObserver:function(){this.__fN=qx.lang.Function.listener(this.__fS,this);
this.__fQ=qx.lang.Function.listener(this.__fU,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fL,t,this.__fN);
Event.addNativeListener(this.__fL,x,this.__fN);
Event.addNativeListener(this.__fL,v,this.__fQ);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fL,t,this.__fN);
Event.removeNativeListener(this.__fL,x,this.__fN);
Event.removeNativeListener(this.__fL,v,this.__fQ);

for(var cl in (this.__fP||{})){var ck=this.__fP[cl];
Event.removeNativeListener(ck.target,v,ck.callback);
}delete (this.__fP);
},__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(w,{"mshtml":function(cg){cg=window.event||cg;
var cj=cg.keyCode;
var ch=0;
var ci=cg.type;
if(!(this.__fM[cj]==x&&ci==x)){this._idealKeyHandler(cj,ch,ci,cg);
}if(ci==x){if(this._isNonPrintableKeyCode(cj)||this._emulateKeyPress[cj]){this._idealKeyHandler(cj,ch,v,cg);
}}this.__fM[cj]=ci;
},"gecko":function(a){var e=this._keyCodeFix[a.keyCode]||a.keyCode;
var c=0;
var d=a.type;
if(qx.bom.client.Platform.WIN){var b=e?this._keyCodeToIdentifier(e):this._charCodeToIdentifier(c);

if(!(this.__fM[b]==x&&d==x)){this._idealKeyHandler(e,c,d,a);
}this.__fM[b]=d;
}else{this._idealKeyHandler(e,c,d,a);
}this.__fT(a.target,d,e);
},"webkit":function(bI){var bL=0;
var bJ=0;
var bK=bI.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bK==t||bK==x){bL=this._charCode2KeyCode[bI.charCode]||bI.keyCode;
}else{if(this._charCode2KeyCode[bI.charCode]){bL=this._charCode2KeyCode[bI.charCode];
}else{bJ=bI.charCode;
}}this._idealKeyHandler(bL,bJ,bK,bI);
}else{bL=bI.keyCode;
if(!(this.__fM[bL]==x&&bK==x)){this._idealKeyHandler(bL,bJ,bK,bI);
}if(bK==x){if(this._isNonPrintableKeyCode(bL)||this._emulateKeyPress[bL]){this._idealKeyHandler(bL,bJ,v,bI);
}}this.__fM[bL]=bK;
}},"opera":function(bM){this.__fO=bM.keyCode;
this._idealKeyHandler(bM.keyCode,0,bM.type,bM);
}})),__fT:qx.core.Variant.select(w,{"gecko":function(bU,bV,bW){if(bV===x&&(bW==33||bW==34||bW==38||bW==40)&&bU.type==Q&&bU.tagName.toLowerCase()===G&&bU.getAttribute(O)!==bo){if(!this.__fP){this.__fP={};
}var bY=qx.core.ObjectRegistry.toHashCode(bU);

if(this.__fP[bY]){return;
}var self=this;
this.__fP[bY]={target:bU,callback:function(bR){qx.bom.Event.stopPropagation(bR);
self.__fU(bR);
}};
var bX=qx.event.GlobalError.observeMethod(this.__fP[bY].callback);
qx.bom.Event.addNativeListener(bU,v,bX);
}},"default":null}),__fU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(w,{"mshtml":function(cL){cL=window.event||cL;

if(this._charCode2KeyCode[cL.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cL.keyCode],0,cL.type,cL);
}else{this._idealKeyHandler(0,cL.keyCode,cL.type,cL);
}},"gecko":function(cE){var cH=this._keyCodeFix[cE.keyCode]||cE.keyCode;
var cF=cE.charCode;
var cG=cE.type;
this._idealKeyHandler(cH,cF,cG,cE);
},"webkit":function(cA){if(qx.bom.client.Engine.VERSION<525.13){var cD=0;
var cB=0;
var cC=cA.type;

if(cC==t||cC==x){cD=this._charCode2KeyCode[cA.charCode]||cA.keyCode;
}else{if(this._charCode2KeyCode[cA.charCode]){cD=this._charCode2KeyCode[cA.charCode];
}else{cB=cA.charCode;
}}this._idealKeyHandler(cD,cB,cC,cA);
}else{if(this._charCode2KeyCode[cA.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cA.keyCode],0,cA.type,cA);
}else{this._idealKeyHandler(0,cA.keyCode,cA.type,cA);
}}},"opera":function(cx){var cz=cx.keyCode;
var cy=cx.type;
if(cz!=this.__fO){this._idealKeyHandler(0,this.__fO,cy,cx);
}else{if(this._keyCodeToIdentifierMap[cx.keyCode]){this._idealKeyHandler(cx.keyCode,0,cx.type,cx);
}else{this._idealKeyHandler(0,cx.keyCode,cx.type,cx);
}}}})),_idealKeyHandler:function(co,cp,cq,cr){var cs;
if(co||(!co&&!cp)){cs=this._keyCodeToIdentifier(co);
this._fireSequenceEvent(cr,cq,cs);
}else{cs=this._charCodeToIdentifier(cp);
this._fireSequenceEvent(cr,v,cs);
this._fireInputEvent(cr,cp);
}},_specialCharCodeMap:{8:bq,9:bh,13:s,27:T,32:S},_emulateKeyPress:qx.core.Variant.select(w,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bg,17:H,18:W,20:bp,224:be,37:bz,38:bw,39:bs,40:bx,33:o,34:bn,35:y,36:bi,45:A,46:M,112:ba,113:bd,114:C,115:V,116:by,117:E,118:R,119:B,120:bu,121:bt,122:bv,123:br,144:u,44:bD,145:n,19:bf,91:L,93:I},_numpadToCharCode:{96:r.charCodeAt(0),97:P.charCodeAt(0),98:m.charCodeAt(0),99:bb.charCodeAt(0),100:J.charCodeAt(0),101:X.charCodeAt(0),102:l.charCodeAt(0),103:bk.charCodeAt(0),104:K.charCodeAt(0),105:q.charCodeAt(0),106:N.charCodeAt(0),107:bE.charCodeAt(0),109:p.charCodeAt(0),110:Y.charCodeAt(0),111:z.charCodeAt(0)},_charCodeA:bB.charCodeAt(0),_charCodeZ:bA.charCodeAt(0),_charCode0:r.charCodeAt(0),_charCode9:q.charCodeAt(0),_isNonPrintableKeyCode:function(k){return this._keyCodeToIdentifierMap[k]?true:false;
},_isIdentifiableKeyCode:function(cK){if(cK>=this._charCodeA&&cK<=this._charCodeZ){return true;
}if(cK>=this._charCode0&&cK<=this._charCode9){return true;
}if(this._specialCharCodeMap[cK]){return true;
}if(this._numpadToCharCode[cK]){return true;
}if(this._isNonPrintableKeyCode(cK)){return true;
}return false;
},_keyCodeToIdentifier:function(bS){if(this._isIdentifiableKeyCode(bS)){var bT=this._numpadToCharCode[bS];

if(bT){return String.fromCharCode(bT);
}return (this._keyCodeToIdentifierMap[bS]||this._specialCharCodeMap[bS]||String.fromCharCode(bS));
}else{return bm;
}},_charCodeToIdentifier:function(ct){return this._specialCharCodeMap[ct]||String.fromCharCode(ct).toUpperCase();
},_identifierToKeyCode:function(cn){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cn]||cn.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fO=this.__fJ=this.__fK=this.__fL=this.__fM=null;
},defer:function(bN,bO,bP){qx.event.Registration.addHandler(bN);
if(!bN._identifierToKeyCodeMap){bN._identifierToKeyCodeMap={};

for(var bQ in bO._keyCodeToIdentifierMap){bN._identifierToKeyCodeMap[bO._keyCodeToIdentifierMap[bQ]]=parseInt(bQ,10);
}
for(var bQ in bO._specialCharCodeMap){bN._identifierToKeyCodeMap[bO._specialCharCodeMap[bQ]]=parseInt(bQ,10);
}}
if(qx.core.Variant.isSet(w,bc)){bO._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(w,bC)){bO._keyCodeFix={12:bO._identifierToKeyCode(u)};
}else if(qx.core.Variant.isSet(w,U)){if(qx.bom.client.Engine.VERSION<525.13){bO._charCode2KeyCode={63289:bO._identifierToKeyCode(u),63276:bO._identifierToKeyCode(o),63277:bO._identifierToKeyCode(bn),63275:bO._identifierToKeyCode(y),63273:bO._identifierToKeyCode(bi),63234:bO._identifierToKeyCode(bz),63232:bO._identifierToKeyCode(bw),63235:bO._identifierToKeyCode(bs),63233:bO._identifierToKeyCode(bx),63272:bO._identifierToKeyCode(M),63302:bO._identifierToKeyCode(A),63236:bO._identifierToKeyCode(ba),63237:bO._identifierToKeyCode(bd),63238:bO._identifierToKeyCode(C),63239:bO._identifierToKeyCode(V),63240:bO._identifierToKeyCode(by),63241:bO._identifierToKeyCode(E),63242:bO._identifierToKeyCode(R),63243:bO._identifierToKeyCode(B),63244:bO._identifierToKeyCode(bu),63245:bO._identifierToKeyCode(bt),63246:bO._identifierToKeyCode(bv),63247:bO._identifierToKeyCode(br),63248:bO._identifierToKeyCode(bD),3:bO._identifierToKeyCode(s),12:bO._identifierToKeyCode(u),13:bO._identifierToKeyCode(s)};
}else{bO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var L="qx.client",K="mouseup",J="click",I="mousedown",H="contextmenu",G="mousewheel",F="dblclick",E="mshtml",D="mouseover",C="mouseout",x="DOMMouseScroll",B="mousemove",A="on",w="mshtml|webkit|opera",v="useraction",z="gecko|webkit",y="qx.event.handler.Mouse";
qx.Class.define(y,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){arguments.callee.base.call(this);
this.__dE=X;
this.__dF=X.getWindow();
this.__dG=this.__dF.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dE:null,__dF:null,__dG:null,canHandleEvent:function(Y,ba){},registerEvent:qx.bom.client.System.IPHONE?
function(a,b,c){a[A+b]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(p,q,r){p[A+q]=undefined;
}:qx.lang.Function.returnNull,__dM:function(l,m,n){if(!n){n=l.target||l.srcElement;
}if(n&&n.nodeType){qx.event.Registration.fireEvent(n,m||l.type,m==G?qx.event.type.MouseWheel:qx.event.type.Mouse,[l,n,null,true,true]);
}qx.event.Registration.fireEvent(this.__dF,v,qx.event.type.Data,[m||l.type]);
},_initButtonObserver:function(){this.__dH=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,I,this.__dH);
Event.addNativeListener(this.__dG,K,this.__dH);
Event.addNativeListener(this.__dG,J,this.__dH);
Event.addNativeListener(this.__dG,F,this.__dH);
Event.addNativeListener(this.__dG,H,this.__dH);
},_initMoveObserver:function(){this.__dI=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,B,this.__dI);
Event.addNativeListener(this.__dG,D,this.__dI);
Event.addNativeListener(this.__dG,C,this.__dI);
},_initWheelObserver:function(){this.__dJ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var S=qx.core.Variant.isSet(L,w)?G:x;
var T=qx.core.Variant.isSet(L,E)?this.__dG:this.__dF;
Event.addNativeListener(T,S,this.__dJ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,I,this.__dH);
Event.removeNativeListener(this.__dG,K,this.__dH);
Event.removeNativeListener(this.__dG,J,this.__dH);
Event.removeNativeListener(this.__dG,F,this.__dH);
Event.removeNativeListener(this.__dG,H,this.__dH);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,B,this.__dI);
Event.removeNativeListener(this.__dG,D,this.__dI);
Event.removeNativeListener(this.__dG,C,this.__dI);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var M=qx.core.Variant.isSet(L,w)?G:x;
var N=qx.core.Variant.isSet(L,E)?this.__dG:this.__dF;
Event.removeNativeListener(N,M,this.__dJ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(h){this.__dM(h);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(U){var V=U.type;
var W=U.target||U.srcElement;
if(qx.core.Variant.isSet(L,z)){if(W&&W.nodeType==3){W=W.parentNode;
}}
if(this.__dN){this.__dN(U,V,W);
}
if(this.__dP){this.__dP(U,V,W);
}this.__dM(U,V,W);

if(this.__dO){this.__dO(U,V,W);
}
if(this.__dQ){this.__dQ(U,V,W);
}this.__dK=V;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(d){this.__dM(d,G);
}),__dN:qx.core.Variant.select(L,{"webkit":function(e,f,g){if(qx.bom.client.Engine.VERSION<530){if(f==H){this.__dM(e,K,g);
}}},"default":null}),__dO:qx.core.Variant.select(L,{"opera":function(s,t,u){if(t==K&&s.button==2){this.__dM(s,H,u);
}},"default":null}),__dP:qx.core.Variant.select(L,{"mshtml":function(i,j,k){if(j==K&&this.__dK==J){this.__dM(i,I,k);
}else if(j==F){this.__dM(i,J,k);
}},"default":null}),__dQ:qx.core.Variant.select(L,{"mshtml":null,"default":function(O,P,Q){switch(P){case I:this.__dL=Q;
break;
case K:if(Q!==this.__dL){var R=qx.dom.Hierarchy.getCommonParent(Q,this.__dL);
this.__dM(O,J,R);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dE=this.__dF=this.__dG=this.__dL=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var n="alias",m="copy",l="blur",k="mouseout",j="keydown",i="Ctrl",h="Shift",g="mousemove",f="move",d="mouseover",D="Alt",C="keyup",B="mouseup",A="dragend",z="on",y="mousedown",x="qxDraggable",w="drag",v="drop",u="qxDroppable",s="qx.event.handler.DragDrop",t="droprequest",q="dragstart",r="dragchange",o="dragleave",p="dragover";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){arguments.callee.base.call(this);
this.__hx=E;
this.__hy=E.getWindow().document.documentElement;
this.__hx.addListener(this.__hy,y,this._onMouseDown,this);
this.__hK();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:false,__hI:0,__hJ:0,canHandleEvent:function(a,b){},registerEvent:function(U,V,W){},unregisterEvent:function(O,P,Q){},addType:function(S){this.__hB[S]=true;
},addAction:function(X){this.__hC[X]=true;
},supportsType:function(T){return !!this.__hB[T];
},supportsAction:function(F){return !!this.__hC[F];
},getData:function(N){if(!this.__hR||!this.__hz){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hB[N]){throw new Error("Unsupported data type: "+N+"!");
}
if(!this.__hE[N]){this.__hF=N;
this.__hM(t,this.__hA,this.__hz,false);
}
if(!this.__hE[N]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hE[N]||null;
},getCurrentAction:function(){return this.__hG;
},addData:function(G,H){this.__hE[G]=H;
},getCurrentType:function(){return this.__hF;
},__hK:function(){this.__hB={};
this.__hC={};
this.__hD={};
this.__hE={};
},__hL:function(){var M=this.__hC;
var K=this.__hD;
var L=null;

if(this.__hR){if(K.Shift&&K.Ctrl&&M.alias){L=n;
}else if(K.Shift&&K.Alt&&M.copy){L=m;
}else if(K.Shift&&M.move){L=f;
}else if(K.Alt&&M.alias){L=n;
}else if(K.Ctrl&&M.copy){L=m;
}else if(M.move){L=f;
}else if(M.copy){L=m;
}else if(M.alias){L=n;
}}
if(L!=this.__hG){this.__hG=L;
this.__hM(r,this.__hA,this.__hz,false);
}},__hM:function(bc,bd,be,bf,bg){var bi=qx.event.Registration;
var bh=bi.createEvent(bc,qx.event.type.Drag,[bf,bg]);

if(bd!==be){bh.setRelatedTarget(be);
}return bi.dispatchEvent(bd,bh);
},__hN:function(bl){while(bl&&bl.nodeType==1){if(bl.getAttribute(x)==z){return bl;
}bl=bl.parentNode;
}return null;
},__hO:function(R){while(R&&R.nodeType==1){if(R.getAttribute(u)==z){return R;
}R=R.parentNode;
}return null;
},__hP:function(){this.__hA=null;
this.__hx.removeListener(this.__hy,g,this._onMouseMove,this,true);
this.__hx.removeListener(this.__hy,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,l,this._onWindowBlur,this);
this.__hK();
},__hQ:function(){if(this.__hH){this.__hx.removeListener(this.__hy,d,this._onMouseOver,this,true);
this.__hx.removeListener(this.__hy,k,this._onMouseOut,this,true);
this.__hx.removeListener(this.__hy,j,this._onKeyDown,this,true);
this.__hx.removeListener(this.__hy,C,this._onKeyUp,this,true);
this.__hM(A,this.__hA,this.__hz,false);
this.__hH=false;
}this.__hR=false;
this.__hz=null;
this.__hP();
},__hR:false,_onWindowBlur:function(e){this.__hQ();
},_onKeyDown:function(e){var c=e.getKeyIdentifier();

switch(c){case D:case i:case h:if(!this.__hD[c]){this.__hD[c]=true;
this.__hL();
}}},_onKeyUp:function(e){var bm=e.getKeyIdentifier();

switch(bm){case D:case i:case h:if(this.__hD[bm]){this.__hD[bm]=false;
this.__hL();
}}},_onMouseDown:function(e){if(this.__hH){return;
}var Y=this.__hN(e.getTarget());

if(Y){this.__hI=e.getDocumentLeft();
this.__hJ=e.getDocumentTop();
this.__hA=Y;
this.__hx.addListener(this.__hy,g,this._onMouseMove,this,true);
this.__hx.addListener(this.__hy,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,l,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hR){this.__hM(v,this.__hz,this.__hA,false,e);
}if(this.__hH){e.stopPropagation();
}this.__hQ();
},_onMouseMove:function(e){if(this.__hH){if(!this.__hM(w,this.__hA,this.__hz,true,e)){this.__hQ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hI)>3||Math.abs(e.getDocumentTop()-this.__hJ)>3){if(this.__hM(q,this.__hA,this.__hz,true,e)){this.__hH=true;
this.__hx.addListener(this.__hy,d,this._onMouseOver,this,true);
this.__hx.addListener(this.__hy,k,this._onMouseOut,this,true);
this.__hx.addListener(this.__hy,j,this._onKeyDown,this,true);
this.__hx.addListener(this.__hy,C,this._onKeyUp,this,true);
var bk=this.__hD;
bk.Ctrl=e.isCtrlPressed();
bk.Shift=e.isShiftPressed();
bk.Alt=e.isAltPressed();
this.__hL();
}else{this.__hM(A,this.__hA,this.__hz,false);
this.__hP();
}}}},_onMouseOver:function(e){var I=e.getTarget();
var J=this.__hO(I);

if(J&&J!=this.__hz){this.__hR=this.__hM(p,J,this.__hA,true,e);
this.__hz=J;
this.__hL();
}},_onMouseOut:function(e){var bb=this.__hO(e.getTarget());
var ba=this.__hO(e.getRelatedTarget());

if(bb&&bb!==ba&&bb==this.__hz){this.__hM(o,this.__hz,ba,false,e);
this.__hz=null;
this.__hR=false;
qx.event.Timer.once(this.__hL,this,0);
}}},destruct:function(){this.__hA=this.__hz=this.__hx=this.__hy=this.__hB=this.__hC=this.__hD=this.__hE=null;
},defer:function(bj){qx.event.Registration.addHandler(bj);
}});
})();
(function(){var i="-",h="qx.event.handler.Element";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(j){arguments.callee.base.call(this);
this._manager=j;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(u,v){},registerEvent:function(k,l,m){var p=qx.core.ObjectRegistry.toHashCode(k);
var n=p+i+l;
var o=qx.lang.Function.listener(this._onNative,this,n);
qx.bom.Event.addNativeListener(k,l,o);
this._registeredEvents[n]={element:k,type:l,listener:o};
},unregisterEvent:function(a,b,c){var f=this._registeredEvents;

if(!f){return;
}var g=qx.core.ObjectRegistry.toHashCode(a);
var d=g+i+b;
var e=this._registeredEvents[d];
qx.bom.Event.removeNativeListener(a,b,e.listener);
delete this._registeredEvents[d];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var r;
var s=this._registeredEvents;

for(var t in s){r=s[t];
qx.bom.Event.removeNativeListener(r.element,r.type,r.listener);
}this._manager=this._registeredEvents=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var g="qx.event.handler.Appear",f="disappear",e="appear";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__bE=m;
this.__bF={};
qx.event.handler.Appear.__bG[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bG:{},refresh:function(){var a=this.__bG;

for(var b in a){a[b].refresh();
}}},members:{__bE:null,__bF:null,canHandleEvent:function(c,d){},registerEvent:function(h,i,j){var k=qx.core.ObjectRegistry.toHashCode(h)+i;
var l=this.__bF;

if(l&&!l[k]){l[k]=h;
h.$$displayed=h.offsetWidth>0;
}},unregisterEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s)+t;
var w=this.__bF;

if(!w){return;
}
if(w[v]){delete w[v];
}},refresh:function(){var q=this.__bF;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?e:f);
this.__bE.dispatchEvent(r,o);
}}}},destruct:function(){this.__bE=this.__bF=null;
delete qx.event.handler.Appear.__bG[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var D="mshtml",C="",B="qx.client",A=">",z="<",y=" ",x="='",w="qx.bom.Element",v="div",u="' ",t="></";
qx.Class.define(w,{statics:{__iL:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,m,n){if(!n){n=window;
}
if(!name){throw new Error("The tag name is missing!");
}var p=this.__iL;
var o=C;

for(var r in m){if(p[r]){o+=r+x+m[r]+u;
}}var s;
if(o!=C){if(qx.bom.client.Engine.MSHTML){s=n.document.createElement(z+name+y+o+A);
}else{var q=n.document.createElement(v);
q.innerHTML=z+name+y+o+t+name+A;
s=q.firstChild;
}}else{s=n.document.createElement(name);
}
for(var r in m){if(!p[r]){qx.bom.element.Attribute.set(s,r,m[r]);
}}return s;
},empty:function(E){return E.innerHTML=C;
},addListener:function(G,H,I,self,J){return qx.event.Registration.addListener(G,H,I,self,J);
},removeListener:function(d,e,f,self,g){return qx.event.Registration.removeListener(d,e,f,self,g);
},removeListenerById:function(ba,bb){return qx.event.Registration.removeListenerById(ba,bb);
},hasListener:function(a,b,c){return qx.event.Registration.hasListener(a,b,c);
},focus:function(W){qx.event.Registration.getManager(W).getHandler(qx.event.handler.Focus).focus(W);
},blur:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).blur(X);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(F){qx.event.Registration.getManager(F).getHandler(qx.event.handler.Focus).deactivate(F);
},capture:function(h,k){qx.event.Registration.getManager(h).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(h,k);
},releaseCapture:function(bc){qx.event.Registration.getManager(bc).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(bc);
},clone:function(K,L){var O;

if(L||(qx.core.Variant.isSet(B,D)&&!qx.xml.Document.isXmlDocument(K))){var S=qx.event.Registration.getManager(K);
var M=qx.dom.Hierarchy.getDescendants(K);
M.push(K);
}if(qx.core.Variant.isSet(B,D)){for(var i=0,l=M.length;i<l;i++){S.toggleAttachedEvents(M[i],false);
}}var O=K.cloneNode(true);
if(qx.core.Variant.isSet(B,D)){for(var i=0,l=M.length;i<l;i++){S.toggleAttachedEvents(M[i],true);
}}if(L===true){var V=qx.dom.Hierarchy.getDescendants(O);
V.push(O);
var N,Q,U,P;

for(var i=0,T=M.length;i<T;i++){U=M[i];
N=S.serializeListeners(U);

if(N.length>0){Q=V[i];

for(var j=0,R=N.length;j<R;j++){P=N[j];
S.addListener(Q,P.type,P.handler,P.self,P.capture);
}}}}return O;
}}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var u="qx.client",t="blur",s="focus",r="mousedown",q="on",p="mouseup",o="DOMFocusOut",n="DOMFocusIn",m="selectstart",l="onmousedown",Q="onfocusout",P="onfocusin",O="onmouseup",N="onselectstart",M="draggesture",L="gecko",K="qx.event.handler.Focus",J="_applyFocus",I="deactivate",H="textarea",B="qxIsRootPage",C="_applyActive",z="input",A="focusin",x="qxSelectable",y="tabIndex",v="off",w="activate",D="1",E="focusout",G="qxKeepFocus",F="qxKeepActive";
qx.Class.define(K,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bP){arguments.callee.base.call(this);
this._manager=bP;
this._window=bP.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:C,nullable:true},focus:{apply:J,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,canHandleEvent:function(R,S){},registerEvent:function(bw,bx,by){},unregisterEvent:function(T,U,V){},focus:function(bE){try{bE.focus();
}catch(bk){}this.setFocus(bE);
this.setActive(bE);
},activate:function(X){this.setActive(X);
},blur:function(bH){try{bH.blur();
}catch(bD){}
if(this.getActive()===bH){this.resetActive();
}
if(this.getFocus()===bH){this.resetFocus();
}},deactivate:function(bj){if(this.getActive()===bj){this.resetActive();
}},tryActivate:function(d){var f=this.__it(d);

if(f){this.setActive(f);
}},__if:function(bq,br,bs,bt){var bv=qx.event.Registration;
var bu=bv.createEvent(bs,qx.event.type.Focus,[bq,br,bt]);
bv.dispatchEvent(bq,bu);
},_windowFocused:true,__ig:function(){if(this._windowFocused){this._windowFocused=false;
this.__if(this._window,null,t,false);
}},__ih:function(){if(!this._windowFocused){this._windowFocused=true;
this.__if(this._window,null,s,false);
}},_initObserver:qx.core.Variant.select(u,{"gecko":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__hY=qx.lang.Function.listener(this.__ii,this);
this._document.addEventListener(r,this.__hU,true);
this._document.addEventListener(p,this.__hV,true);
this._window.addEventListener(s,this.__hW,true);
this._window.addEventListener(t,this.__hX,true);
this._window.addEventListener(M,this.__hY,true);
},"mshtml":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.attachEvent(l,this.__hU);
this._document.attachEvent(O,this.__hV);
this._document.attachEvent(P,this.__ib);
this._document.attachEvent(Q,this.__ic);
this._document.attachEvent(N,this.__ia);
},"webkit":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.addEventListener(r,this.__hU,true);
this._document.addEventListener(p,this.__hV,true);
this._document.addEventListener(m,this.__ia,false);
this._window.addEventListener(o,this.__ic,true);
this._window.addEventListener(s,this.__hW,true);
this._window.addEventListener(t,this.__hX,true);
},"opera":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this._document.addEventListener(r,this.__hU,true);
this._document.addEventListener(p,this.__hV,true);
this._window.addEventListener(n,this.__ib,true);
this._window.addEventListener(o,this.__ic,true);
}}),_stopObserver:qx.core.Variant.select(u,{"gecko":function(){this._document.removeEventListener(r,this.__hU,true);
this._document.removeEventListener(p,this.__hV,true);
this._window.removeEventListener(s,this.__hW,true);
this._window.removeEventListener(t,this.__hX,true);
this._window.removeEventListener(M,this.__hY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,l,this.__hU);
qx.bom.Event.removeNativeListener(this._document,O,this.__hV);
qx.bom.Event.removeNativeListener(this._document,P,this.__ib);
qx.bom.Event.removeNativeListener(this._document,Q,this.__ic);
qx.bom.Event.removeNativeListener(this._document,N,this.__ia);
},"webkit":function(){this._document.removeEventListener(r,this.__hU,true);
this._document.removeEventListener(m,this.__ia,false);
this._window.removeEventListener(n,this.__ib,true);
this._window.removeEventListener(o,this.__ic,true);
this._window.removeEventListener(s,this.__hW,true);
this._window.removeEventListener(t,this.__hX,true);
},"opera":function(){this._document.removeEventListener(r,this.__hU,true);
this._window.removeEventListener(n,this.__ib,true);
this._window.removeEventListener(o,this.__ic,true);
this._window.removeEventListener(s,this.__hW,true);
this._window.removeEventListener(t,this.__hX,true);
}}),__ii:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"gecko":function(e){if(!this.__iu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ij:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml":function(e){this.__ih();
var bR=e.srcElement;
var bQ=this.__is(bR);

if(bQ){this.setFocus(bQ);
}this.tryActivate(bR);
},"opera":function(e){var c=e.target;

if(c==this._document||c==this._window){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(c);
this.tryActivate(c);
if(!this.__iu(c)){c.selectionStart=0;
c.selectionEnd=0;
}}},"default":null})),__ik:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml":function(e){if(!e.toElement){this.__ig();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bl=e.target;

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(e){var k=e.target;

if(k==this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(k===this.getFocus()){this.resetFocus();
}
if(k===this.getActive()){this.resetActive();
}}},"default":null})),__il:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__im:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"gecko":function(e){var bM=e.target;

if(bM===this._window||bM===this._document){this.__ih();
bM=this._body;
}this.setFocus(bM);
this.tryActivate(bM);
},"webkit":function(e){var ba=e.target;

if(ba===this._window||ba===this._document){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(ba);
this.tryActivate(ba);
}},"default":null})),__in:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"gecko":function(e){var bo=e.target;
var bm=this.__is(bo);
var bn=this.__iu(bo);

if(!bn){qx.bom.Event.preventDefault(e);
if(bm){if(qx.core.Variant.isSet(u,L)){var bp=qx.bom.element.Attribute.get(bm,B)===D;

if(!bp){bm.focus();
}}else{bm.focus();
}}}else if(!bm){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bd=e.srcElement;
var bc=this.__is(bd);

if(bc){if(!this.__iu(bd)){bd.unselectable=q;
try{document.selection.empty();
}catch(e){}try{bc.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iu(bd)){bd.unselectable=q;
}}},"webkit":function(e){var bA=e.target;
var bz=this.__is(bA);

if(bz){this.setFocus(bz);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var i=e.target;
var g=this.__is(i);

if(!this.__iu(i)){qx.bom.Event.preventDefault(e);
if(g){var h=this.getFocus();

if(h&&h.selectionEnd){h.selectionStart=0;
h.selectionEnd=0;
h.blur();
}if(g){this.setFocus(g);
}}}else if(g){this.setFocus(g);
}},"default":null})),__io:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml":function(e){var bL=e.srcElement;

if(bL.unselectable){bL.unselectable=v;
}this.tryActivate(this.__ip(bL));
},"gecko":function(e){var bb=e.target;

while(bb&&bb.offsetWidth===undefined){bb=bb.parentNode;
}
if(bb){this.tryActivate(bb);
}},"webkit|opera":function(e){this.tryActivate(this.__ip(e.target));
},"default":null})),__ip:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml|webkit":function(bF){var bG=this.getFocus();

if(bG&&bF!=bG&&(bG.nodeName.toLowerCase()===z||bG.nodeName.toLowerCase()===H)){bF=bG;
}return bF;
},"default":function(Y){return Y;
}})),__iq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(u,{"mshtml|webkit":function(e){var j=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iu(j)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ir:function(bg){var bh=qx.bom.element.Attribute.get(bg,y);

if(bh>=1){return true;
}var bi=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bh>=0&&bi[bg.tagName]){return true;
}return false;
},__is:function(W){while(W&&W.nodeType===1){if(W.getAttribute(G)==q){return null;
}
if(this.__ir(W)){return W;
}W=W.parentNode;
}return this._body;
},__it:function(bN){var bO=bN;

while(bN&&bN.nodeType===1){if(bN.getAttribute(F)==q){return null;
}bN=bN.parentNode;
}return bO;
},__iu:function(bB){while(bB&&bB.nodeType===1){var bC=bB.getAttribute(x);

if(bC!=null){return bC===q;
}bB=bB.parentNode;
}return true;
},_applyActive:function(a,b){if(b){this.__if(b,a,I,true);
}
if(a){this.__if(a,b,w,true);
}},_applyFocus:function(be,bf){if(bf){this.__if(bf,be,E,true);
}
if(be){this.__if(be,bf,A,true);
}if(bf){this.__if(bf,be,t,false);
}
if(be){this.__if(be,bf,s,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iv=null;
},defer:function(bI){qx.event.Registration.addHandler(bI);
var bJ=bI.FOCUSABLE_ELEMENTS;

for(var bK in bJ){bJ[bK.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var p="",o="qx.client",n="readOnly",m="accessKey",l="qx.bom.element.Attribute",k="rowSpan",j="vAlign",i="className",h="textContent",g="'",D="htmlFor",C="longDesc",B="cellSpacing",A="frameBorder",z="='",y="useMap",x="innerText",w="innerHTML",v="tabIndex",u="dateTime",s="maxLength",t="mshtml",q="cellPadding",r="colSpan";
qx.Class.define(l,{statics:{__fV:{names:{"class":i,"for":D,html:w,text:qx.core.Variant.isSet(o,t)?x:h,colspan:r,rowspan:k,valign:j,datetime:u,accesskey:m,tabindex:v,maxlength:s,readonly:n,longdesc:C,cellpadding:q,cellspacing:B,frameborder:A,usemap:y},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:p,maxLength:10000000,className:p,innerHTML:p,innerText:p,textContent:p,htmlFor:p,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(E){var F=[];
var H=this.__fV.runtime;

for(var G in E){if(!H[G]){F.push(G,z,E[G],g);
}}return F.join(p);
},get:qx.core.Variant.select(o,{"mshtml":function(d,name){var f=this.__fV;
var e;
name=f.names[name]||name;
if(f.original[name]){e=d.getAttribute(name,2);
}else if(f.property[name]){if(f.propertyDefault[name]&&e==f.propertyDefault[name]){return null;
}e=d[name];
}else{e=d.getAttribute(name);
}if(f.bools[name]){return !!e;
}return e;
},"default":function(a,name){var c=this.__fV;
var b;
name=c.names[name]||name;
if(c.property[name]){if(c.propertyDefault[name]&&b==c.propertyDefault[name]){return null;
}b=a[name];

if(b==null){b=a.getAttribute(name);
}}else{b=a.getAttribute(name);
}if(c.bools[name]){return !!b;
}return b;
}}),set:function(I,name,J){var K=this.__fV;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]){if(J==null){J=K.propertyDefault[name];

if(J===undefined){J=null;
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var i="left",h="right",g="middle",f="qx.client",e="dblclick",d="click",c="none",b="contextmenu",a="qx.event.type.Mouse";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(l,m,n,o,p){arguments.callee.base.call(this,l,m,n,o,p);

if(!n){this._relatedTarget=qx.bom.Event.getRelatedTarget(l);
}return this;
},_cloneNativeEvent:function(j,k){var k=arguments.callee.base.call(this,j,k);
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
},__iI:qx.core.Variant.select(f,{"mshtml":{1:i,2:h,4:g},"default":{0:i,2:h,1:g}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case d:case e:return i;
case b:return h;
default:return this.__iI[this._native.button]||c;
}},isLeftPressed:function(){return this.getButton()===i;
},isMiddlePressed:function(){return this.getButton()===g;
},isRightPressed:function(){return this.getButton()===h;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(f,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(f,{"mshtml":function(){var q=qx.dom.Node.getWindow(this._native.srcElement);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var f="qx.client",e="qx.bom.Viewport";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(g){if(qx.bom.client.Engine.VERSION<523.15){return (g||window).innerWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"default":function(l){var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientWidth:m.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(j){if(qx.bom.client.Engine.VERSION<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(o){if(qx.bom.client.Engine.VERSION<523.15){return (o||window).innerHeight;
}else{var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}},"default":function(a){var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(q){var r=(q||window).document;
return r.documentElement.scrollLeft||r.body.scrollLeft;
},"default":function(n){return (n||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollTop||d.body.scrollTop;
},"default":function(i){return (i||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(n){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (n||window).document.compatMode!==f;
}},"webkit":function(l){if(document.compatMode===undefined){var m=(l||window).document.createElement(a);
m.style.cssText=e;
return m.style.width===c?true:false;
}else{return (l||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(k){return !this.isQuirksMode(k);
},getWidth:function(o){var p=(o||window).document;
var q=qx.bom.Viewport.getWidth(o);
var scroll=this.isStandardMode(o)?p.documentElement.scrollWidth:p.body.scrollWidth;
return Math.max(scroll,q);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var r="qx.client",q="ie",p="msie",o="android",n="operamini",m="mobile chrome",l=")(/| )([0-9]+\.[0-9])",k="iemobile",j="opera mobi",i="Mobile Safari",F="operamobile",E="mobile safari",D="IEMobile|Maxthon|MSIE",C="qx.bom.client.Browser",B="opera mini",A="(",z="opera",y="mshtml",x="Opera Mini|Opera Mobi|Opera",w="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",u="webkit",v="5.0",s="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",t="Mobile/";
qx.Bootstrap.define(C,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__jO:function(c){var d=navigator.userAgent;
var f=new RegExp(A+c+l);
var g=d.match(f);

if(!g){return;
}var name=g[1].toLowerCase();
var e=g[3];
if(d.match(/Version(\/| )([0-9]+\.[0-9])/)){e=RegExp.$2;
}
if(qx.core.Variant.isSet(r,u)){if(name===o){name=m;
}else if(d.indexOf(i)!==-1||d.indexOf(t)!==-1){name=E;
}}else if(qx.core.Variant.isSet(r,y)){if(name===p){name=q;
if(qx.bom.client.System.WINCE&&name===q){name=k;
e=v;
}}}else if(qx.core.Variant.isSet(r,z)){if(name===j){name=F;
}else if(name===B){name=n;
}}this.NAME=name;
this.FULLVERSION=e;
this.VERSION=parseFloat(e,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(r,{"webkit":function(G){G.__jO(w);
},"gecko":function(b){b.__jO(s);
},"mshtml":function(a){a.__jO(D);
},"opera":function(h){h.__jO(x);
}})});
})();
(function(){var h="qx.client",g="qx.dom.Hierarchy",f="previousSibling",e="*",d="nextSibling",c="parentNode";
qx.Class.define(g,{statics:{getNodeIndex:function(a){var b=0;

while(a&&(a=a.previousSibling)){b++;
}return b;
},getElementIndex:function(T){var U=0;
var V=qx.dom.Node.ELEMENT;

while(T&&(T=T.previousSibling)){if(T.nodeType==V){U++;
}}return U;
},getNextElementSibling:function(p){while(p&&(p=p.nextSibling)&&!qx.dom.Node.isElement(p)){continue;
}return p||null;
},getPreviousElementSibling:function(S){while(S&&(S=S.previousSibling)&&!qx.dom.Node.isElement(S)){continue;
}return S||null;
},contains:qx.core.Variant.select(h,{"webkit|mshtml|opera":function(A,B){if(qx.dom.Node.isDocument(A)){var C=qx.dom.Node.getDocument(B);
return A&&C==A;
}else if(qx.dom.Node.isDocument(B)){return false;
}else{return A.contains(B);
}},"gecko":function(Q,R){return !!(Q.compareDocumentPosition(R)&16);
},"default":function(O,P){while(P){if(O==P){return true;
}P=P.parentNode;
}return false;
}}),isRendered:function(t){if(!t.offsetParent){return false;
}var u=t.ownerDocument||t.document;
if(u.body.contains){return u.body.contains(t);
}if(u.compareDocumentPosition){return !!(u.compareDocumentPosition(t)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(y,z){return this.contains(z,y);
},getCommonParent:qx.core.Variant.select(h,{"mshtml|opera":function(H,I){if(H===I){return H;
}
while(H&&qx.dom.Node.isElement(H)){if(H.contains(I)){return H;
}H=H.parentNode;
}return null;
},"default":function(j,k){if(j===k){return j;
}var l={};
var o=qx.core.ObjectRegistry;
var n,m;

while(j||k){if(j){n=o.toHashCode(j);

if(l[n]){return l[n];
}l[n]=j;
j=j.parentNode;
}
if(k){m=o.toHashCode(k);

if(l[m]){return l[m];
}l[m]=k;
k=k.parentNode;
}}return null;
}}),getAncestors:function(G){return this._recursivelyCollect(G,c);
},getChildElements:function(J){J=J.firstChild;

if(!J){return [];
}var K=this.getNextSiblings(J);

if(J.nodeType===1){K.unshift(J);
}return K;
},getDescendants:function(F){return qx.lang.Array.fromCollection(F.getElementsByTagName(e));
},getFirstDescendant:function(w){w=w.firstChild;

while(w&&w.nodeType!=1){w=w.nextSibling;
}return w;
},getLastDescendant:function(x){x=x.lastChild;

while(x&&x.nodeType!=1){x=x.previousSibling;
}return x;
},getPreviousSiblings:function(v){return this._recursivelyCollect(v,f);
},getNextSiblings:function(i){return this._recursivelyCollect(i,d);
},_recursivelyCollect:function(L,M){var N=[];

while(L=L[M]){if(L.nodeType==1){N.push(L);
}}return N;
},getSiblings:function(D){return this.getPreviousSiblings(D).reverse().concat(this.getNextSiblings(D));
},isEmpty:function(E){E=E.firstChild;

while(E){if(E.nodeType===qx.dom.Node.ELEMENT||E.nodeType===qx.dom.Node.TEXT){return false;
}E=E.nextSibling;
}return true;
},cleanWhitespace:function(q){var r=q.firstChild;

while(r){var s=r.nextSibling;

if(r.nodeType==3&&!/\S/.test(r.nodeValue)){q.removeChild(r);
}r=s;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(i,j){arguments.callee.base.call(this,true,i);

if(j){this._native=j.getNativeEvent()||null;
this._originalTarget=j.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=arguments.callee.base.call(this,l);
m._native=this._native;
return m;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var h=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(h);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(c){this.getManager().addType(c);
},addAction:function(b){this.getManager().addAction(b);
},supportsType:function(k){return this.getManager().supportsType(k);
},supportsAction:function(a){return this.getManager().supportsAction(a);
},addData:function(n,o){this.getManager().addData(n,o);
},getData:function(g){return this.getManager().getData(g);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var k="losecapture",j="qx.client",i="blur",h="focus",g="click",f="qx.event.dispatch.MouseCapture",e="capture",d="scroll";
qx.Class.define(f,{extend:qx.event.dispatch.AbstractBubbling,construct:function(n,o){arguments.callee.base.call(this,n);
this.__fp=n.getWindow();
this.__fq=o;
n.addListener(this.__fp,i,this.releaseCapture,this);
n.addListener(this.__fp,h,this.releaseCapture,this);
n.addListener(this.__fp,d,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fq:null,__fr:null,__fs:true,__fp:null,_getParent:function(s){return s.parentNode;
},canDispatchEvent:function(p,event,q){return (this.__fr&&this.__ft[q]);
},dispatchEvent:function(a,event,b){if(b==g){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fs||!qx.dom.Hierarchy.contains(this.__fr,a)){a=this.__fr;
}arguments.callee.base.call(this,a,event,b);
},__ft:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fr===l&&this.__fs==m){return;
}
if(this.__fr){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,k,function(){qx.bom.Event.removeNativeListener(l,k,arguments.callee);
self.releaseCapture();
});
}this.__fs=m;
this.__fr=l;
this.__fq.fireEvent(l,e,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fr;
},releaseCapture:function(){var t=this.__fr;

if(!t){return;
}this.__fr=null;
this.__fq.fireEvent(t,k,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(t);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(j,{"mshtml":function(u,v){u.setCapture(v!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(j,{"mshtml":function(c){c.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fr=this.__fp=this.__fq=null;
},defer:function(r){qx.event.Registration.addDispatcher(r);
}});
})();
(function(){var x="qx.client",w="",v="mshtml",u="'",t="SelectionLanguage",s="qx.xml.Document",r=" />",q="MSXML2.DOMDocument.3.0",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="MSXML2.XMLHTTP.3.0",j="MSXML2.XMLHTTP.6.0",n=" xmlns='",m="text/xml",h="XPath",g="MSXML2.DOMDocument.6.0",k="HTML";
qx.Bootstrap.define(s,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(d){if(d.nodeType===9){return d.documentElement.nodeName!==k;
}else if(d.ownerDocument){return this.isXmlDocument(d.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(x,{"mshtml":function(B,C){var D=new ActiveXObject(this.DOMDOC);
D.setProperty(t,h);

if(C){var E=p;
E+=C;

if(B){E+=n+B+u;
}E+=r;
D.loadXML(E);
}return D;
},"default":function(e,f){return document.implementation.createDocument(e||w,f||w,null);
}}),fromString:qx.core.Variant.select(x,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(b){var c=new DOMParser();
return c.parseFromString(b,m);
}})},defer:function(y){if(qx.core.Variant.isSet(x,v)){var z=[g,q];
var A=[j,o];

for(var i=0,l=z.length;i<l;i++){try{new ActiveXObject(z[i]);
new ActiveXObject(A[i]);
}catch(a){continue;
}y.DOMDOC=z[i];
y.XMLHTTP=A[i];
break;
}}}});
})();
(function(){var G="visible",F="scroll",E="borderBottomWidth",D="borderTopWidth",C="left",B="borderLeftWidth",A="bottom",z="top",y="right",x="qx.bom.element.Scroll",w="borderRightWidth";
qx.Class.define(x,{statics:{intoViewX:function(a,stop,b){var parent=a.parentNode;
var g=qx.dom.Node.getDocument(a);
var c=g.body;
var o,m,j;
var q,h,r;
var k,s,v;
var t,e,n,d;
var i,u,l;
var f=b===C;
var p=b===y;
stop=stop?stop.parentNode:g;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===c||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===c){m=parent.scrollLeft;
j=m+qx.bom.Viewport.getWidth();
q=qx.bom.Viewport.getWidth();
h=parent.clientWidth;
r=parent.scrollWidth;
k=0;
s=0;
v=0;
}else{o=qx.bom.element.Location.get(parent);
m=o.left;
j=o.right;
q=parent.offsetWidth;
h=parent.clientWidth;
r=parent.scrollWidth;
k=parseInt(qx.bom.element.Style.get(parent,B),10)||0;
s=parseInt(qx.bom.element.Style.get(parent,w),10)||0;
v=q-h-k-s;
}t=qx.bom.element.Location.get(a);
e=t.left;
n=t.right;
d=a.offsetWidth;
i=e-m-k;
u=n-j+s;
l=0;
if(f){l=i;
}else if(p){l=u+v;
}else if(i<0||d>h){l=i;
}else if(u>0){l=u+v;
}parent.scrollLeft+=l;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===c){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===z;
var T=I===A;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=G)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,D),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,E),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,F);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var Q="",P="qx.client",O="hidden",N="-moz-scrollbars-none",M="overflow",L=";",K="overflowY",J=":",I="overflowX",H="overflow:",bd="none",bc="scroll",bb="borderLeftStyle",ba="borderRightStyle",Y="div",X="borderRightWidth",W="overflow-y",V="borderLeftWidth",U="-moz-scrollbars-vertical",T="100px",R="qx.bom.element.Overflow",S="overflow-x";
qx.Class.define(R,{statics:{__iM:null,getScrollbarWidth:function(){if(this.__iM!==null){return this.__iM;
}var bp=qx.bom.element.Style;
var br=function(v,w){return parseInt(bp.get(v,w))||0;
};
var bs=function(G){return (bp.get(G,ba)==bd?0:br(G,X));
};
var bq=function(bR){return (bp.get(bR,bb)==bd?0:br(bR,V));
};
var bu=qx.core.Variant.select(P,{"mshtml":function(m){if(bp.get(m,K)==O||m.clientWidth==0){return bs(m);
}return Math.max(0,m.offsetWidth-m.clientLeft-m.clientWidth);
},"default":function(bF){if(bF.clientWidth==0){var bG=bp.get(bF,M);
var bH=(bG==bc||bG==U?16:0);
return Math.max(0,bs(bF)+bH);
}return Math.max(0,(bF.offsetWidth-bF.clientWidth-bq(bF)));
}});
var bt=function(bf){return bu(bf)-bs(bf);
};
var t=document.createElement(Y);
var s=t.style;
s.height=s.width=T;
s.overflow=bc;
document.body.appendChild(t);
var c=bt(t);
this.__iM=c?c:16;
document.body.removeChild(t);
return this.__iM;
},_compile:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(k,l){if(l==O){l=N;
}return H+l+L;
}:
function(bJ,bK){return bJ+J+bK+L;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){return H+cd+L;
}:
function(bL,bM){return bL+J+bM+L;
},"default":function(bB,bC){return bB+J+bC+L;
}}),compileX:function(bI){return this._compile(S,bI);
},compileY:function(F){return this._compile(W,F);
},getX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bN,bO){var bP=qx.bom.element.Style.get(bN,M,bO,false);

if(bP===N){bP=O;
}return bP;
}:
function(bv,bw){return qx.bom.element.Style.get(bv,I,bw,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(z,A){return qx.bom.element.Style.get(z,M,A,false);
}:
function(g,h){return qx.bom.element.Style.get(g,I,h,false);
},"default":function(bz,bA){return qx.bom.element.Style.get(bz,I,bA,false);
}}),setX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==O){f=N;
}e.style.overflow=f;
}:
function(r,u){r.style.overflowX=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bU,bV){bU.style.overflow=bV;
}:
function(p,q){p.style.overflowX=q;
},"default":function(x,y){x.style.overflowX=y;
}}),resetX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb){cb.style.overflow=Q;
}:
function(ca){ca.style.overflowX=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bD,bE){bD.style.overflow=Q;
}:
function(bS,bT){bS.style.overflowX=Q;
},"default":function(bQ){bQ.style.overflowX=Q;
}}),getY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bi,bj){var bk=qx.bom.element.Style.get(bi,M,bj,false);

if(bk===N){bk=O;
}return bk;
}:
function(bn,bo){return qx.bom.element.Style.get(bn,K,bo,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bg,bh){return qx.bom.element.Style.get(bg,M,bh,false);
}:
function(B,C){return qx.bom.element.Style.get(B,K,C,false);
},"default":function(i,j){return qx.bom.element.Style.get(i,K,j,false);
}}),setY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(b,d){if(d===O){d=N;
}b.style.overflow=d;
}:
function(D,E){D.style.overflowY=E;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bl,bm){bl.style.overflow=bm;
}:
function(bW,bX){bW.style.overflowY=bX;
},"default":function(n,o){n.style.overflowY=o;
}}),resetY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY){bY.style.overflow=Q;
}:
function(a){a.style.overflowY=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){bx.style.overflow=Q;
}:
function(ce,cf){ce.style.overflowY=Q;
},"default":function(be){be.style.overflowY=Q;
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
},get:function(C,D){var F=qx.bom.element.Style.get(C,c,D,false);
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
},set:function(v,w){if(!w){v.style.clip=a;
return;
}var B=w.left;
var top=w.top;
var A=w.width;
var z=w.height;
var x,y;

if(B==null){x=(A==null?n:A+m);
B=n;
}else{x=(A==null?n:B+A+m);
B=B+m;
}
if(top==null){y=(z==null?n:z+m);
top=n;
}else{y=(z==null?n:top+z+m);
top=top+m;
}v.style.clip=j+top+l+x+l+y+l+B+g;
},reset:function(o){o.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__dR:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__dR[q]||q)+d;
},get:function(l,m){return qx.bom.element.Style.get(l,b,m,false);
},set:function(o,p){o.style.cursor=this.__dR[p]||p;
},reset:function(n){n.style.cursor=g;
}}});
})();
(function(){var w="",v="qx.client",u=";",t="filter",s="opacity:",r="opacity",q="MozOpacity",p=");",o=")",n="zoom:1;filter:alpha(opacity=",k="qx.bom.element.Opacity",m="alpha(opacity=",l="-moz-opacity:";
qx.Class.define(k,{statics:{compile:qx.core.Variant.select(v,{"mshtml":function(A){if(A>=1){return w;
}
if(A<0.00001){A=0;
}return n+(A*100)+p;
},"gecko":function(j){if(j==1){j=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return l+j+u;
}else{return s+j+u;
}},"default":function(B){if(B==1){return w;
}return s+B+u;
}}),set:qx.core.Variant.select(v,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,t,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,w);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,w)+m+y*100+o;
},"gecko":function(G,H){if(H==1){H=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){G.style.MozOpacity=H;
}else{G.style.opacity=H;
}},"default":function(C,D){if(D==1){D=w;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(v,{"mshtml":function(a){var b=qx.bom.element.Style.get(a,t,qx.bom.element.Style.COMPUTED_MODE,false);
a.style.filter=b.replace(/alpha\([^\)]*\)/gi,w);
},"gecko":function(F){if(qx.bom.client.Engine.VERSION<1.7){F.style.MozOpacity=w;
}else{F.style.opacity=w;
}},"default":function(E){E.style.opacity=w;
}}),get:qx.core.Variant.select(v,{"mshtml":function(c,d){var e=qx.bom.element.Style.get(c,t,d,false);

if(e){var f=e.match(/alpha\(opacity=(.*)\)/);

if(f&&f[1]){return parseFloat(f[1])/100;
}}return 1.0;
},"gecko":function(g,h){var i=qx.bom.element.Style.get(g,qx.bom.client.Engine.VERSION<1.7?q:r,h,false);

if(i==0.999999){i=1.0;
}
if(i!=null){return parseFloat(i);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,r,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})}});
})();
(function(){var w="qx.client",v="",u="qx.debug",t="boxSizing",s="on",r="box-sizing",q=":",p="border-box",o="qx.bom.element.BoxSizing",n="KhtmlBoxSizing",g="-moz-box-sizing",m="WebkitBoxSizing",k=";",f="-khtml-box-sizing",e="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(o,{statics:{__bT:qx.core.Variant.select(w,{"mshtml":null,"webkit":[t,n,m],"gecko":[h],"opera":[t]}),__bU:qx.core.Variant.select(w,{"mshtml":null,"webkit":[r,f,j],"gecko":[g],"opera":[r]}),__bV:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bW:function(H){var I=this.__bV;
return I.tags[H.tagName.toLowerCase()]||I.types[H.type];
},compile:qx.core.Variant.select(w,{"mshtml":function(a){if(qx.core.Variant.isSet(u,s)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(b){var d=this.__bU;
var c=v;

if(d){for(var i=0,l=d.length;i<l;i++){c+=d[i]+q+b+k;
}}return c;
}}),get:qx.core.Variant.select(w,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__bW(C)){return e;
}}return p;
},"default":function(z){var B=this.__bT;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==v){return A;
}}}return v;
}}),set:qx.core.Variant.select(w,{"mshtml":function(x,y){if(qx.core.Variant.isSet(u,s)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(D,E){var F=this.__bT;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,v);
}}});
})();
(function(){var D="",C="qx.client",B="user-select",A="userSelect",z="appearance",y="qx.debug",x="Invalid argument 'smart'",w="style",v="on",u="Invalid argument 'element'",bg="MozUserModify",bf="px",be="-webkit-appearance",bd="styleFloat",bc="-webkit-user-select",bb="-moz-appearance",ba="pixelHeight",Y="MozAppearance",X=":",W="pixelTop",K="Invalid argument 'name'",L="pixelLeft",I="text-overflow",J="-moz-user-select",G="Invalid argument 'styles'",H="MozUserSelect",E="qx.bom.element.Style",F="-moz-user-modify",M="-webkit-user-modify",N="WebkitUserSelect",Q="-o-text-overflow",P="pixelRight",S="cssFloat",R="pixelWidth",U="pixelBottom",T=";",O="WebkitUserModify",V="WebkitAppearance";
qx.Class.define(E,{statics:{__bK:{styleNames:{"float":qx.core.Variant.select(C,{"mshtml":bd,"default":S}),"appearance":qx.core.Variant.select(C,{"gecko":Y,"webkit":V,"default":z}),"userSelect":qx.core.Variant.select(C,{"gecko":H,"webkit":N,"default":A}),"userModify":qx.core.Variant.select(C,{"gecko":bg,"webkit":O,"default":A})},cssNames:{"appearance":qx.core.Variant.select(C,{"gecko":bb,"webkit":be,"default":z}),"userSelect":qx.core.Variant.select(C,{"gecko":J,"webkit":bc,"default":B}),"userModify":qx.core.Variant.select(C,{"gecko":F,"webkit":M,"default":B}),"textOverflow":qx.core.Variant.select(C,{"opera":Q,"default":I})},mshtmlPixel:{width:R,height:ba,left:L,right:P,top:W,bottom:U},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bL:{},compile:function(bt){var bx=[];
var bB=this.__bK;
var bA=bB.special;
var by=bB.cssNames;
var bw=this.__bL;
var bz=qx.lang.String;
var name,bv,bu;

for(name in bt){bu=bt[name];

if(bu==null){continue;
}name=by[name]||name;
if(bA[name]){bx.push(bA[name].compile(bu));
}else{bv=bw[name];

if(!bv){bv=bw[name]=bz.hyphenate(name);
}bx.push(bv,X,bu,T);
}}return bx.join(D);
},setCss:qx.core.Variant.select(C,{"mshtml":function(s,t){s.style.cssText=t;
},"default":function(bi,bj){bi.setAttribute(w,bj);
}}),getCss:qx.core.Variant.select(C,{"mshtml":function(bh){return bh.style.cssText.toLowerCase();
},"default":function(bF){return bF.getAttribute(w);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(g,name,h,i){if(qx.core.Variant.isSet(y,v)){qx.core.Assert.assertElement(g,u);
qx.core.Assert.assertString(name,K);

if(i!==undefined){qx.core.Assert.assertBoolean(i,x);
}}var j=this.__bK;
name=j.styleNames[name]||name;
if(i!==false&&j.special[name]){return j.special[name].set(g,h);
}else{g.style[name]=h!==null?h:D;
}},setStyles:function(bk,bl,bm){if(qx.core.Variant.isSet(y,v)){qx.core.Assert.assertElement(bk,u);
qx.core.Assert.assertMap(bl,G);

if(bm!==undefined){qx.core.Assert.assertBoolean(bm,x);
}}var bs=this.__bK;
var bp=bs.styleNames;
var br=bs.special;
var bn=bk.style;

for(var bq in bl){var bo=bl[bq];
var name=bp[bq]||bq;

if(bo===undefined){if(bm!==false&&br[name]){br[name].reset(bk);
}else{bn[name]=D;
}}else{if(bm!==false&&br[name]){br[name].set(bk,bo);
}else{bn[name]=bo!==null?bo:D;
}}}},reset:function(bC,name,bD){var bE=this.__bK;
name=bE.styleNames[name]||name;
if(bD!==false&&bE.special[name]){return bE.special[name].reset(bC);
}else{bC.style[name]=D;
}},get:qx.core.Variant.select(C,{"mshtml":function(k,name,l,m){var r=this.__bK;
name=r.styleNames[name]||name;
if(m!==false&&r.special[name]){return r.special[name].get(k,l);
}if(!k.currentStyle){return k.style[name]||D;
}switch(l){case this.LOCAL_MODE:return k.style[name]||D;
case this.CASCADED_MODE:return k.currentStyle[name]||D;
default:var q=k.currentStyle[name]||D;
if(/^-?[\.\d]+(px)?$/i.test(q)){return q;
}var p=r.mshtmlPixel[name];

if(p){var n=k.style[name];
k.style[name]=q||0;
var o=k.style[p]+bf;
k.style[name]=n;
return o;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(q)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return q;
}},"default":function(a,name,b,c){var f=this.__bK;
name=f.styleNames[name]||name;
if(c!==false&&f.special[name]){return f.special[name].get(a,b);
}switch(b){case this.LOCAL_MODE:return a.style[name]||D;
case this.CASCADED_MODE:if(a.currentStyle){return a.currentStyle[name]||D;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var d=qx.dom.Node.getDocument(a);
var e=d.defaultView.getComputedStyle(a,null);
return e?e[name]:D;
}}})}});
})();
(function(){var by="borderTopWidth",bx="borderLeftWidth",bw="marginTop",bv="marginLeft",bu="scroll",bt="qx.client",bs="border-box",br="borderBottomWidth",bq="borderRightWidth",bp="auto",bN="padding",bM="qx.bom.element.Location",bL="paddingLeft",bK="static",bJ="marginBottom",bI="visible",bH="BODY",bG="paddingBottom",bF="paddingTop",bE="marginRight",bC="position",bD="margin",bA="overflow",bB="paddingRight",bz="border";
qx.Class.define(bM,{statics:{__gP:function(E,F){return qx.bom.element.Style.get(E,F,qx.bom.element.Style.COMPUTED_MODE,false);
},__gQ:function(g,h){return parseInt(qx.bom.element.Style.get(g,h,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gR:function(U){var X=0,top=0;
if(U.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var W=qx.dom.Node.getWindow(U);
X-=qx.bom.Viewport.getScrollLeft(W);
top-=qx.bom.Viewport.getScrollTop(W);
}else{var V=qx.dom.Node.getDocument(U).body;
U=U.parentNode;
while(U&&U!=V){X+=U.scrollLeft;
top+=U.scrollTop;
U=U.parentNode;
}}return {left:X,top:top};
},__gS:qx.core.Variant.select(bt,{"mshtml":function(M){var O=qx.dom.Node.getDocument(M);
var N=O.body;
var P=0;
var top=0;
P-=N.clientLeft+O.documentElement.clientLeft;
top-=N.clientTop+O.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){P+=this.__gQ(N,bx);
top+=this.__gQ(N,by);
}return {left:P,top:top};
},"webkit":function(Q){var S=qx.dom.Node.getDocument(Q);
var R=S.body;
var T=R.offsetLeft;
var top=R.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){T+=this.__gQ(R,bx);
top+=this.__gQ(R,by);
}return {left:T,top:top};
},"gecko":function(bb){var bc=qx.dom.Node.getDocument(bb).body;
var bd=bc.offsetLeft;
var top=bc.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bd+=this.__gQ(bc,bv);
top+=this.__gQ(bc,bw);
}if(qx.bom.element.BoxSizing.get(bc)!==bs){bd+=this.__gQ(bc,bx);
top+=this.__gQ(bc,by);
}return {left:bd,top:top};
},"default":function(bl){var bm=qx.dom.Node.getDocument(bl).body;
var bn=bm.offsetLeft;
var top=bm.offsetTop;
return {left:bn,top:top};
}}),__gT:qx.core.Variant.select(bt,{"mshtml|webkit":function(z){var B=qx.dom.Node.getDocument(z);
if(z.getBoundingClientRect){var C=z.getBoundingClientRect();
var D=C.left;
var top=C.top;
}else{var D=z.offsetLeft;
var top=z.offsetTop;
z=z.offsetParent;
var A=B.body;
while(z&&z!=A){D+=z.offsetLeft;
top+=z.offsetTop;
D+=this.__gQ(z,bx);
top+=this.__gQ(z,by);
z=z.offsetParent;
}}return {left:D,top:top};
},"gecko":function(be){if(be.getBoundingClientRect){var bh=be.getBoundingClientRect();
var bi=Math.round(bh.left);
var top=Math.round(bh.top);
}else{var bi=0;
var top=0;
var bf=qx.dom.Node.getDocument(be).body;
var bg=qx.bom.element.BoxSizing;

if(bg.get(be)!==bs){bi-=this.__gQ(be,bx);
top-=this.__gQ(be,by);
}
while(be&&be!==bf){bi+=be.offsetLeft;
top+=be.offsetTop;
if(bg.get(be)!==bs){bi+=this.__gQ(be,bx);
top+=this.__gQ(be,by);
}if(be.parentNode&&this.__gP(be.parentNode,bA)!=bI){bi+=this.__gQ(be.parentNode,bx);
top+=this.__gQ(be.parentNode,by);
}be=be.offsetParent;
}}return {left:bi,top:top};
},"default":function(J){var L=0;
var top=0;
var K=qx.dom.Node.getDocument(J).body;
while(J&&J!==K){L+=J.offsetLeft;
top+=J.offsetTop;
J=J.offsetParent;
}return {left:L,top:top};
}}),get:function(q,r){if(q.tagName==bH){var location=this.__gU(q);
var y=location.left;
var top=location.top;
}else{var s=this.__gS(q);
var x=this.__gT(q);
var scroll=this.__gR(q);
var y=x.left+s.left-scroll.left;
var top=x.top+s.top-scroll.top;
}var t=y+q.offsetWidth;
var u=top+q.offsetHeight;

if(r){if(r==bN||r==bu){var v=qx.bom.element.Overflow.getX(q);

if(v==bu||v==bp){t+=q.scrollWidth-q.offsetWidth+this.__gQ(q,bx)+this.__gQ(q,bq);
}var w=qx.bom.element.Overflow.getY(q);

if(w==bu||w==bp){u+=q.scrollHeight-q.offsetHeight+this.__gQ(q,by)+this.__gQ(q,br);
}}
switch(r){case bN:y+=this.__gQ(q,bL);
top+=this.__gQ(q,bF);
t-=this.__gQ(q,bB);
u-=this.__gQ(q,bG);
case bu:y-=q.scrollLeft;
top-=q.scrollTop;
t-=q.scrollLeft;
u-=q.scrollTop;
case bz:y+=this.__gQ(q,bx);
top+=this.__gQ(q,by);
t-=this.__gQ(q,bq);
u-=this.__gQ(q,br);
break;
case bD:y-=this.__gQ(q,bv);
top-=this.__gQ(q,bw);
t+=this.__gQ(q,bE);
u+=this.__gQ(q,bJ);
break;
}}return {left:y,top:top,right:t,bottom:u};
},__gU:qx.core.Variant.select(bt,{"default":function(e){var top=e.offsetTop+this.__gQ(e,bw);
var f=e.offsetLeft+this.__gQ(e,bv);
return {left:f,top:top};
},"mshtml":function(o){var top=o.offsetTop;
var p=o.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gQ(o,bw);
p+=this.__gQ(o,bv);
}return {left:p,top:top};
},"gecko":function(a){var top=a.offsetTop+this.__gQ(a,bw)+this.__gQ(a,bx);
var b=a.offsetLeft+this.__gQ(a,bv)+this.__gQ(a,by);
return {left:b,top:top};
}}),getLeft:function(bj,bk){return this.get(bj,bk).left;
},getTop:function(bO,bP){return this.get(bO,bP).top;
},getRight:function(Y,ba){return this.get(Y,ba).right;
},getBottom:function(c,d){return this.get(c,d).bottom;
},getRelative:function(i,j,k,l){var n=this.get(i,k);
var m=this.get(j,l);
return {left:n.left-m.left,top:n.top-m.top,right:n.right-m.right,bottom:n.bottom-m.bottom};
},getPosition:function(bo){return this.getRelative(bo,this.getOffsetParent(bo));
},getOffsetParent:function(G){var I=G.offsetParent||document.body;
var H=qx.bom.element.Style;

while(I&&(!/^body|html$/i.test(I.tagName)&&H.get(I,bC)===bK)){I=I.offsetParent;
}return I;
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Bootstrap.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__fB:function(){this.QUIRKS_MODE=this.__fC();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__fC:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__fB();
}});
})();
(function(){var t="qx.client",s="character",r="EndToEnd",q="input",p="textarea",o="StartToStart",n='character',m="qx.bom.Selection",l="button",k="#text",j="body";
qx.Class.define(m,{statics:{getSelectionObject:qx.core.Variant.select(t,{"mshtml":function(C){return C.selection;
},"default":function(D){return qx.dom.Node.getWindow(D).getSelection();
}}),get:qx.core.Variant.select(t,{"mshtml":function(u){var v=qx.bom.Range.get(qx.dom.Node.getDocument(u));
return v.text;
},"default":function(h){if(this.__jr(h)){return h.value.substring(h.selectionStart,h.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(h)).toString();
}}}),getLength:qx.core.Variant.select(t,{"mshtml":function(br){var bt=this.get(br);
var bs=qx.util.StringSplit.split(bt,/\r\n/);
return bt.length-(bs.length-1);
},"opera":function(a){var f,d,b;

if(this.__jr(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(M){if(this.__jr(M)){return M.selectionEnd-M.selectionStart;
}else{return this.get(M).length;
}}}),getStart:qx.core.Variant.select(t,{"mshtml":function(bi){if(this.__jr(bi)){var bn=qx.bom.Range.get();
if(!bi.contains(bn.parentElement())){return -1;
}var bo=qx.bom.Range.get(bi);
var bm=bi.value.length;
bo.moveToBookmark(bn.getBookmark());
bo.moveEnd(n,bm);
return bm-bo.text.length;
}else{var bo=qx.bom.Range.get(bi);
var bk=bo.parentElement();
var bp=qx.bom.Range.get();
bp.moveToElementText(bk);
var bj=qx.bom.Range.get(qx.dom.Node.getBodyElement(bi));
bj.setEndPoint(o,bo);
bj.setEndPoint(r,bp);
if(bp.compareEndPoints(o,bj)==0){return 0;
}var bl;
var bq=0;

while(true){bl=bj.moveStart(s,-1);
if(bp.compareEndPoints(o,bj)==0){break;
}if(bl==0){break;
}else{bq++;
}}return ++bq;
}},"gecko|webkit":function(J){if(this.__jr(J)){return J.selectionStart;
}else{var L=qx.dom.Node.getDocument(J);
var K=this.getSelectionObject(L);
if(K.anchorOffset<K.focusOffset){return K.anchorOffset;
}else{return K.focusOffset;
}}},"default":function(i){if(this.__jr(i)){return i.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(i)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(t,{"mshtml":function(N){if(this.__jr(N)){var S=qx.bom.Range.get();
if(!N.contains(S.parentElement())){return -1;
}var T=qx.bom.Range.get(N);
var R=N.value.length;
T.moveToBookmark(S.getBookmark());
T.moveStart(n,-R);
return T.text.length;
}else{var T=qx.bom.Range.get(N);
var P=T.parentElement();
var U=qx.bom.Range.get();
U.moveToElementText(P);
var R=U.text.length;
var O=qx.bom.Range.get(qx.dom.Node.getBodyElement(N));
O.setEndPoint(r,T);
O.setEndPoint(o,U);
if(U.compareEndPoints(r,O)==0){return R-1;
}var Q;
var V=0;

while(true){Q=O.moveEnd(s,1);
if(U.compareEndPoints(r,O)==0){break;
}if(Q==0){break;
}else{V++;
}}return R-(++V);
}},"gecko|webkit":function(bf){if(this.__jr(bf)){return bf.selectionEnd;
}else{var bh=qx.dom.Node.getDocument(bf);
var bg=this.getSelectionObject(bh);
if(bg.focusOffset>bg.anchorOffset){return bg.focusOffset;
}else{return bg.anchorOffset;
}}},"default":function(I){if(this.__jr(I)){return I.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(I)).focusOffset;
}}}),__jr:function(g){return qx.dom.Node.isElement(g)&&(g.nodeName.toLowerCase()==q||g.nodeName.toLowerCase()==p);
},set:qx.core.Variant.select(t,{"mshtml":function(bu,bv,bw){var bx;
if(qx.dom.Node.isDocument(bu)){bu=bu.body;
}
if(qx.dom.Node.isElement(bu)||qx.dom.Node.isText(bu)){switch(bu.nodeName.toLowerCase()){case q:case p:case l:if(bw===undefined){bw=bu.value.length;
}
if(bv>=0&&bv<=bu.value.length&&bw>=0&&bw<=bu.value.length){bx=qx.bom.Range.get(bu);
bx.collapse(true);
bx.moveStart(s,bv);
bx.moveEnd(s,bw-bv);
bx.select();
return true;
}break;
case k:if(bw===undefined){bw=bu.nodeValue.length;
}
if(bv>=0&&bv<=bu.nodeValue.length&&bw>=0&&bw<=bu.nodeValue.length){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.parentNode);
bx.collapse(true);
bx.moveStart(s,bv);
bx.moveEnd(s,bw-bv);
bx.select();
return true;
}break;
default:if(bw===undefined){bw=bu.childNodes.length-1;
}if(bu.childNodes[bv]&&bu.childNodes[bw]){bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
bx.moveToElementText(bu.childNodes[bv]);
bx.collapse(true);
var by=qx.bom.Range.get(qx.dom.Node.getBodyElement(bu));
by.moveToElementText(bu.childNodes[bw]);
bx.setEndPoint(r,by);
bx.select();
return true;
}}}return false;
},"default":function(X,Y,ba){var be=X.nodeName.toLowerCase();

if(qx.dom.Node.isElement(X)&&(be==q||be==p)){if(ba===undefined){ba=X.value.length;
}if(Y>=0&&Y<=X.value.length&&ba>=0&&ba<=X.value.length){X.focus();
X.select();
X.setSelectionRange(Y,ba);
return true;
}}else{var bc=false;
var bd=qx.dom.Node.getWindow(X).getSelection();
var bb=qx.bom.Range.get(X);
if(qx.dom.Node.isText(X)){if(ba===undefined){ba=X.length;
}
if(Y>=0&&Y<X.length&&ba>=0&&ba<=X.length){bc=true;
}}else if(qx.dom.Node.isElement(X)){if(ba===undefined){ba=X.childNodes.length-1;
}
if(Y>=0&&X.childNodes[Y]&&ba>=0&&X.childNodes[ba]){bc=true;
}}else if(qx.dom.Node.isDocument(X)){X=X.body;

if(ba===undefined){ba=X.childNodes.length-1;
}
if(Y>=0&&X.childNodes[Y]&&ba>=0&&X.childNodes[ba]){bc=true;
}}
if(bc){if(!bd.isCollapsed){bd.collapseToStart();
}bb.setStart(X,Y);
if(qx.dom.Node.isText(X)){bb.setEnd(X,ba);
}else{bb.setEndAfter(X.childNodes[ba]);
}if(bd.rangeCount>0){bd.removeAllRanges();
}bd.addRange(bb);
return true;
}}return false;
}}),setAll:function(W){return qx.bom.Selection.set(W,0);
},clear:qx.core.Variant.select(t,{"mshtml":function(E){var F=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(E));
var G=qx.bom.Range.get(E);
var parent=G.parentElement();
var H=qx.bom.Range.get(qx.dom.Node.getDocument(E));
if(parent==H.parentElement()&&parent==E){F.empty();
}},"default":function(w){var y=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(w));
var A=w.nodeName.toLowerCase();
if(qx.dom.Node.isElement(w)&&(A==q||A==p)){w.setSelectionRange(0,0);
qx.bom.Element.blur(w);
}else if(qx.dom.Node.isDocument(w)||A==j){y.collapse(w.body?w.body:w,0);
}else{var z=qx.bom.Range.get(w);

if(!z.collapsed){var B;
var x=z.commonAncestorContainer;
if(qx.dom.Node.isElement(w)&&qx.dom.Node.isText(x)){B=x.parentNode;
}else{B=x;
}
if(B==w){y.collapse(w,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(p){if(qx.dom.Node.isElement(p)){switch(p.nodeName.toLowerCase()){case d:switch(p.type){case j:case i:case c:case l:case f:case h:case g:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}break;
case e:case b:case l:return p.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}}else{if(p==null){p=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p)).createRange();
}},"default":function(m){var n=qx.dom.Node.getDocument(m);
var o=qx.bom.Selection.getSelectionObject(n);

if(o.rangeCount>0){return o.getRangeAt(0);
}else{return n.createRange();
}}})}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Bootstrap.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gL:{},remove:function(h){delete this.__gL[h.$$hash];
},add:function(c){var d=this.__gL;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__gL;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__gL={};
}}});
})();
(function(){var f="qx.ui.core.queue.Visibility",e="visibility";
qx.Class.define(f,{statics:{__gx:{},__gy:{},remove:function(c){var d=c.$$hash;
delete this.__gy[d];
delete this.__gx[d];
},isVisible:function(g){return this.__gy[g.$$hash]||false;
},__gz:function(m){var o=this.__gy;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__gz(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(a){var b=this.__gx;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(e);
},flush:function(){var h=this.__gx;
var l=this.__gy;
for(var i in h){if(l[i]!=null){h[i].addChildrenToQueue(h);
}}var k={};

for(var i in h){k[i]=l[i];
l[i]=null;
}for(var i in h){var j=h[i];
delete h[i];
if(l[i]==null){this.__gz(j);
}if(l[i]&&l[i]!=k[i]){j.checkAppearanceNeeds();
}}this.__gx={};
}}});
})();
(function(){var d="appearance",c="qx.ui.core.queue.Appearance";
qx.Class.define(c,{statics:{__fW:{},remove:function(e){delete this.__fW[e.$$hash];
},add:function(a){var b=this.__fW;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(d);
},has:function(f){return !!this.__fW[f.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__fW;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__dX:{},add:function(f){var g=this.__dX;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__dX;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__dX={};
}}});
})();
(function(){var d="none",c="qx.html.Decorator",b="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(g,h){arguments.callee.base.call(this);
this.__iw=g;
this.__ix=h||g.toHashCode();
this.useMarkup(g.getMarkup());
var i={position:b,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=d;
}this.setStyles(i);
},members:{__ix:null,__iw:null,getId:function(){return this.__ix;
},getDecorator:function(){return this.__iw;
},resize:function(e,f){this.__iw.resize(this.getDomElement(),e,f);
},tint:function(a){this.__iw.tint(this.getDomElement(),a);
},getInsets:function(){return this.__iw.getInsets();
}},destruct:function(){this.__iw=null;
}});
})();
(function(){var A="blur",z="focus",y="input",x="load",w="qx.ui.core.EventHandler",v="activate";
qx.Class.define(w,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__dr=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dr:null,__ds:{focusin:1,focusout:1,focus:1,blur:1},__dt:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(C,D){return C instanceof qx.ui.core.Widget;
},_dispatchEvent:function(e){var k=e.getTarget();
var j=qx.ui.core.Widget.getWidgetByElement(k);
var m=false;

while(j&&j.isAnonymous()){var m=true;
j=j.getLayoutParent();
}if(j&&m&&e.getType()==v){j.getContainerElement().activate();
}if(this.__ds[e.getType()]){j=j&&j.getFocusTarget();
if(!j){return;
}}if(e.getRelatedTarget){var t=e.getRelatedTarget();
var s=qx.ui.core.Widget.getWidgetByElement(t);

while(s&&s.isAnonymous()){s=s.getLayoutParent();
}
if(s){if(this.__ds[e.getType()]){s=s.getFocusTarget();
}if(s===j){return;
}}}var o=e.getCurrentTarget();
var q=qx.ui.core.Widget.getWidgetByElement(o);

if(!q||q.isAnonymous()){return;
}if(this.__ds[e.getType()]){q=q.getFocusTarget();
}var r=e.getType();

if(!q||!(q.isEnabled()||this.__dt[r])){return;
}var f=e.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var n=this.__dr.getListeners(q,r,f);

if(!n||n.length===0){return;
}var g=qx.event.Pool.getInstance().getObject(e.constructor);
e.clone(g);
g.setTarget(j);
g.setRelatedTarget(s||null);
g.setCurrentTarget(q);
var u=e.getOriginalTarget();

if(u){var h=qx.ui.core.Widget.getWidgetByElement(u);

while(h&&h.isAnonymous()){h=h.getLayoutParent();
}g.setOriginalTarget(h);
}else{g.setOriginalTarget(k);
}for(var i=0,l=n.length;i<l;i++){var p=n[i].context||q;
n[i].handler.call(p,g);
}if(g.getPropagationStopped()){e.stopPropagation();
}
if(g.getDefaultPrevented()){e.preventDefault();
}qx.event.Pool.getInstance().poolObject(g);
},registerEvent:function(E,F,G){var H;

if(F===z||F===A){H=E.getFocusElement();
}else if(F===x||F===y){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.addListener(F,this._dispatchEvent,this,G);
}},unregisterEvent:function(a,b,c){var d;

if(b===z||b===A){d=a.getFocusElement();
}else if(b===x||b===y){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.removeListener(b,this._dispatchEvent,this,c);
}}},destruct:function(){this.__dr=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var d="abstract",c="qx.debug",b="qx.ui.layout.Abstract";
qx.Class.define(b,{type:d,extend:qx.core.Object,members:{__fu:null,_invalidChildrenCache:null,__fv:null,invalidateLayoutCache:function(){this.__fu=null;
},renderLayout:function(k,l){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fu){return this.__fu;
}return this.__fu=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(a){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(i,name,j){},"off":null}),_clearSeparators:function(){var e=this.__fv;

if(e instanceof qx.ui.core.LayoutItem){e.clearSeparators();
}},_renderSeparator:function(f,g){this.__fv.renderSeparator(f,g);
},connectToWidget:function(h){if(h&&this.__fv){throw new Error("It is not possible to manually set the connected widget.");
}this.__fv=h;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fv;
},_applyLayoutChange:function(){if(this.__fv){this.__fv.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fv.getLayoutChildren();
}},destruct:function(){this.__fv=this.__fu=null;
}});
})();
(function(){var o="/",n="mshtml",m="qx.client",l="",k="?",j="string",i="qx.util.ResourceManager",h="singleton",g="qx.isSource";
qx.Class.define(i,{extend:qx.core.Object,type:h,statics:{__bH:qx.$$resources||{},__bI:{}},members:{has:function(u){return !!arguments.callee.self.__bH[u];
},getData:function(t){return arguments.callee.self.__bH[t]||null;
},getImageWidth:function(v){var w=arguments.callee.self.__bH[v];
return w?w[0]:null;
},getImageHeight:function(p){var q=arguments.callee.self.__bH[p];
return q?q[1]:null;
},getImageFormat:function(r){var s=arguments.callee.self.__bH[r];
return s?s[2]:null;
},isClippedImage:function(x){var y=arguments.callee.self.__bH[x];
return y&&y.length>4;
},toUri:function(z){if(z==null){return z;
}var A=arguments.callee.self.__bH[z];

if(!A){return z;
}
if(typeof A===j){var C=A;
}else{var C=A[3];
if(!C){return z;
}}var B=l;

if(qx.core.Variant.isSet(m,n)&&qx.bom.client.Feature.SSL){B=arguments.callee.self.__bI[C];
}return B+qx.$$libraries[C].resourceUri+o+z;
}},defer:function(a){if(qx.core.Variant.isSet(m,n)){if(qx.bom.client.Feature.SSL){for(var e in qx.$$libraries){var c=qx.$$libraries[e].resourceUri;
if(c.match(/^\/\//)!=null){a.__bI[e]=window.location.protocol;
}else if(c.match(/^\.\//)!=null&&qx.core.Setting.get(g)){var b=document.URL;
a.__bI[e]=b.substring(0,b.lastIndexOf(o));
}else if(c.match(/^http/)!=null){}else{var f=window.location.href.indexOf(k);
var d;

if(f==-1){d=window.location.href;
}else{d=window.location.href.substring(0,f);
}a.__bI[e]=d.substring(0,d.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var d="qx.bom.client.Locale",c="-",b="";
qx.Bootstrap.define(d,{statics:{LOCALE:"",VARIANT:"",__jN:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=b;
var f=e.indexOf(c);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(a){a.__jN();
}});
})();
(function(){var y="",x='indexOf',w='slice',v='concat',u='toLocaleLowerCase',t="qx.type.BaseString",s='match',r="qx.debug",q='search',p='replace',g='toLowerCase',o='charCodeAt',k='split',f='substring',e='lastIndexOf',j="on",h='substr',m='toLocaleUpperCase',d='toUpperCase',n='charAt';
qx.Class.define(t,{extend:Object,construct:function(z){var z=z||y;
this.__kh=z;
this.length=z.length;
},members:{$$isString:true,length:0,__kh:null,toString:function(){return this.__kh;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(A,B){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(a,b){if(qx.core.Variant.isSet(r,j)){qx.Class.include(a,qx.core.MAssert);
}var c=[n,o,v,x,e,s,p,q,w,k,h,f,g,d,u,m];
b.valueOf=b.toString;

if(new a(y).valueOf()==null){delete b.valueOf;
}
for(var i=0,l=c.length;i<l;i++){b[c[i]]=String.prototype[c[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__du=c;
this.__dv=d;
},members:{__du:null,__dv:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__du,this.__dv);
}}});
})();
(function(){var H="_",G="",F="qx.dynlocale",E="on",D="_applyLocale",C="changeLocale",B="C",A="qx.locale.Manager",z="String",y="singleton";
qx.Class.define(A,{type:y,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gV=qx.$$translations||{};
this.__gW=qx.$$locales||{};
var X=qx.bom.client.Locale;
var V=X.LOCALE;
var W=X.VARIANT;

if(W!==G){V+=H+W;
}this.setLocale(V||this.__gX);
},statics:{tr:function(bc,bd){var be=qx.lang.Array.fromArguments(arguments);
be.splice(0,1);
return qx.locale.Manager.getInstance().translate(bc,be);
},trn:function(p,q,r,s){var t=qx.lang.Array.fromArguments(arguments);
t.splice(0,3);
if(r!=1){return qx.locale.Manager.getInstance().translate(q,t);
}else{return qx.locale.Manager.getInstance().translate(p,t);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(Q){return Q;
}},properties:{locale:{check:z,nullable:true,apply:D,event:C}},members:{__gX:B,__gY:null,__ha:null,__gV:null,__gW:null,getLanguage:function(){return this.__ha;
},getTerritory:function(){return this.getLocale().split(H)[1]||G;
},getAvailableLocales:function(){var bg=[];

for(var bf in this.__gW){if(bf!=this.__gX){bg.push(bf);
}}return bg;
},__hb:function(Y){var bb;
var ba=Y.indexOf(H);

if(ba==-1){bb=Y;
}else{bb=Y.substring(0,ba);
}return bb;
},_applyLocale:function(e,f){this.__gY=e;
this.__ha=this.__hb(e);
},addTranslation:function(R,S){var T=this.__gV;

if(T[R]){for(var U in S){T[R][U]=S[U];
}}else{T[R]=S;
}},addLocale:function(u,v){var w=this.__gW;

if(w[u]){for(var x in v){w[u][x]=v[x];
}}else{w[u]=v;
}},translate:function(g,h,j){var o;
var m=this.__gV;

if(!m){return g;
}
if(j){var l=this.__hb(j);
}else{j=this.__gY;
l=this.__ha;
}
if(!o&&m[j]){o=m[j][g];
}
if(!o&&m[l]){o=m[l][g];
}
if(!o&&m[this.__gX]){o=m[this.__gX][g];
}
if(!o){o=g;
}
if(h.length>0){var k=[];

for(var i=0;i<h.length;i++){var n=h[i];

if(n&&n.translate){k[i]=n.translate();
}else{k[i]=n;
}}o=qx.lang.String.format(o,k);
}
if(qx.core.Variant.isSet(F,E)){o=new qx.locale.LocalizedString(o,g,h);
}return o;
},localize:function(I,J,K){var P;
var N=this.__gW;

if(!N){return I;
}
if(K){var M=this.__hb(K);
}else{K=this.__gY;
M=this.__ha;
}
if(!P&&N[K]){P=N[K][I];
}
if(!P&&N[M]){P=N[M][I];
}
if(!P&&N[this.__gX]){P=N[this.__gX][I];
}
if(!P){P=I;
}
if(J.length>0){var L=[];

for(var i=0;i<J.length;i++){var O=J[i];

if(O.translate){L[i]=O.translate();
}else{L[i]=O;
}}P=qx.lang.String.format(P,L);
}
if(qx.core.Variant.isSet(F,E)){P=new qx.locale.LocalizedString(P,I,J);
}return P;
}},destruct:function(){this.__gV=this.__gW=null;
}});
})();
(function(){var i="source",h="scale",g="no-repeat",f="mshtml",e="qx.client",d="qx.html.Image";
qx.Class.define(d,{extend:qx.html.Element,members:{_applyProperty:function(name,k){arguments.callee.base.call(this,name,k);

if(name===i){var o=this.getDomElement();
var l=this.getAllStyles();
var m=this._getProperty(i);
var n=this._getProperty(h);
var p=n?h:g;
qx.bom.element.Decoration.update(o,m,p,l);
}},_createDomElement:function(){var b=this._getProperty(h);
var c=b?h:g;

if(qx.core.Variant.isSet(e,f)){var a=this._getProperty(i);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return arguments.callee.base.call(this);
},_copyData:function(q){return arguments.callee.base.call(this,true);
},setSource:function(j){this._setProperty(i,j);
return this;
},getSource:function(){return this._getProperty(i);
},resetSource:function(){this._removeProperty(i);
return this;
},setScale:function(r){this._setProperty(h,r);
return this;
},getScale:function(){return this._getProperty(h);
}}});
})();
(function(){var x="px",w="qx.client",v="div",u="img",t="",s="no-repeat",r="qx.debug",q="scale-x",p="mshtml",o="on",T="repeat",S="scale",R="scale-y",Q="qx/icon",P=".png",O="crop",N="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",M='<div style="',L="repeat-y",K='<img src="',E="qx.bom.element.Decoration",F="', sizingMethod='",C="png",D="')",A='"/>',B='" style="',y="none",z="webkit",G=" ",H="repeat-x",J='"></div>',I="absolute";
qx.Class.define(E,{statics:{DEBUG:false,__iT:{},__iU:qx.core.Variant.isSet(w,p),__iV:qx.core.Variant.select(w,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iW:{"scale-x":u,"scale-y":u,"scale":u,"repeat":v,"no-repeat":v,"repeat-x":v,"repeat-y":v},update:function(bb,bc,bd,be){var bh=this.getTagName(bd,bc);

if(bh!=bb.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bi=this.getAttributes(bc,bd,be);

if(bh===u){bb.src=bi.src;
}if(bb.style.backgroundPosition!=t&&bi.style.backgroundPosition===undefined){bi.style.backgroundPosition=null;
}if(bb.style.clip!=t&&bi.style.clip===undefined){bi.style.clip=null;
}var bf=qx.bom.element.Style;
bf.setStyles(bb,bi.style);
},create:function(U,V,W){var X=this.getTagName(V,U);
var ba=this.getAttributes(U,V,W);
var Y=qx.bom.element.Style.compile(ba.style);

if(X===u){return K+ba.src+B+Y+A;
}else{return M+Y+J;
}},getTagName:function(h,i){if(qx.core.Variant.isSet(w,p)){if(i&&this.__iU&&this.__iV[h]&&qx.lang.String.endsWith(i,P)){return v;
}}return this.__iW[h];
},getAttributes:function(j,k,l){if(!l){l={};
}
if(!l.position){l.position=I;
}
if(qx.core.Variant.isSet(w,p)){l.fontSize=0;
l.lineHeight=0;
}else if(qx.core.Variant.isSet(w,z)){l.WebkitUserDrag=y;
}var n=qx.util.ResourceManager.getInstance().getImageFormat(j)||qx.io.ImageLoader.getFormat(j);

if(qx.core.Variant.isSet(r,o)){if(j!=null&&n==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+j+"'!");
}}var m;
if(this.__iU&&this.__iV[k]&&n===C){m=this.__ja(l,k,j);
}else{if(k===S){m=this.__jb(l,k,j);
}else if(k===q||k===R){m=this.__jc(l,k,j);
}else{m=this.__jf(l,k,j);
}}return m;
},__iX:function(bj,bk,bl){if(bj.width==null&&bk!=null){bj.width=bk+x;
}
if(bj.height==null&&bl!=null){bj.height=bl+x;
}return bj;
},__iY:function(e){var f=qx.util.ResourceManager.getInstance().getImageWidth(e)||qx.io.ImageLoader.getWidth(e);
var g=qx.util.ResourceManager.getInstance().getImageHeight(e)||qx.io.ImageLoader.getHeight(e);
return {width:f,height:g};
},__ja:function(bT,bU,bV){var bY=this.__iY(bV);
bT=this.__iX(bT,bY.width,bY.height);
var bX=bU==s?O:S;
var bW=N+qx.util.ResourceManager.getInstance().toUri(bV)+F+bX+D;
bT.filter=bW;
bT.backgroundImage=bT.backgroundRepeat=t;
return {style:bT};
},__jb:function(bq,br,bs){var bt=qx.util.ResourceManager.getInstance().toUri(bs);
var bu=this.__iY(bs);
bq=this.__iX(bq,bu.width,bu.height);
return {src:bt,style:bq};
},__jc:function(bv,bw,bx){var bB=qx.util.ResourceManager.getInstance();
var bA=bB.isClippedImage(bx);
var bC=this.__iY(bx);

if(bA){var bz=bB.getData(bx);
var by=bB.toUri(bz[4]);

if(bw===q){bv=this.__jd(bv,bz,bC.height);
}else{bv=this.__je(bv,bz,bC.width);
}return {src:by,style:bv};
}else{if(qx.core.Variant.isSet(r,o)){this.__jh(bx);
}
if(bw==q){bv.height=bC.height==null?null:bC.height+x;
}else if(bw==R){bv.width=bC.width==null?null:bC.width+x;
}var by=bB.toUri(bx);
return {src:by,style:bv};
}},__jd:function(bm,bn,bo){var bp=qx.util.ResourceManager.getInstance().getImageHeight(bn[4]);
bm.clip={top:-bn[6],height:bo};
bm.height=bp+x;
if(bm.top!=null){bm.top=(parseInt(bm.top,10)+bn[6])+x;
}else if(bm.bottom!=null){bm.bottom=(parseInt(bm.bottom,10)+bo-bp-bn[6])+x;
}return bm;
},__je:function(a,b,c){var d=qx.util.ResourceManager.getInstance().getImageWidth(b[4]);
a.clip={left:-b[5],width:c};
a.width=d+x;
if(a.left!=null){a.left=(parseInt(a.left,10)+b[5])+x;
}else if(a.right!=null){a.right=(parseInt(a.right,10)+c-d-b[5])+x;
}return a;
},__jf:function(bD,bE,bF){var bK=qx.util.ResourceManager.getInstance().isClippedImage(bF);
var bJ=this.__iY(bF);
if(bK&&bE!==T){var bI=qx.util.ResourceManager.getInstance().getData(bF);
var bH=qx.bom.element.Background.getStyles(bI[4],bE,bI[5],bI[6]);

for(var bG in bH){bD[bG]=bH[bG];
}
if(bJ.width!=null&&bD.width==null&&(bE==L||bE===s)){bD.width=bJ.width+x;
}
if(bJ.height!=null&&bD.height==null&&(bE==H||bE===s)){bD.height=bJ.height+x;
}return {style:bD};
}else{if(qx.core.Variant.isSet(r,o)){if(bE!==T){this.__jh(bF);
}}bD=this.__iX(bD,bJ.width,bJ.height);
bD=this.__jg(bD,bF,bE);
return {style:bD};
}},__jg:function(bL,bM,bN){var top=null;
var bR=null;

if(bL.backgroundPosition){var bO=bL.backgroundPosition.split(G);
bR=parseInt(bO[0]);

if(isNaN(bR)){bR=bO[0];
}top=parseInt(bO[1]);

if(isNaN(top)){top=bO[1];
}}var bQ=qx.bom.element.Background.getStyles(bM,bN,bR,top);

for(var bP in bQ){bL[bP]=bQ[bP];
}if(bL.filter){bL.filter=t;
}return bL;
},__jh:function(bS){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bS)&&bS.indexOf(Q)==-1){if(!this.__iT[bS]){qx.log.Logger.debug("Potential clipped image candidate: "+bS);
this.__iT[bS]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(w,{"mshtml":function(){return qx.bom.element.Decoration.__iU;
},"default":function(){return false;
}})}});
})();
(function(){var r="qx.client",q="load",p="qx.io.ImageLoader";
qx.Bootstrap.define(p,{statics:{__jy:{},__jz:{width:null,height:null},__jA:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(E){var F=this.__jy[E];
return !!(F&&F.loaded);
},isFailed:function(g){var h=this.__jy[g];
return !!(h&&h.failed);
},isLoading:function(a){var b=this.__jy[a];
return !!(b&&b.loading);
},getFormat:function(c){var d=this.__jy[c];
return d?d.format:null;
},getSize:function(t){var u=this.__jy[t];
return u?
{width:u.width,height:u.height}:this.__jz;
},getWidth:function(G){var H=this.__jy[G];
return H?H.width:null;
},getHeight:function(B){var C=this.__jy[B];
return C?C.height:null;
},load:function(v,w,x){var y=this.__jy[v];

if(!y){y=this.__jy[v]={};
}if(w&&!x){x=window;
}if(y.loaded||y.loading||y.failed){if(w){if(y.loading){y.callbacks.push(w,x);
}else{w.call(x,v,y);
}}}else{y.loading=true;
y.callbacks=[];

if(w){y.callbacks.push(w,x);
}var A=new Image();
var z=qx.lang.Function.listener(this.__jB,this,A,v);
A.onload=z;
A.onerror=z;
A.src=v;
}},__jB:qx.event.GlobalError.observeMethod(function(event,j,k){var m=this.__jy[k];
if(event.type===q){m.loaded=true;
m.width=this.__jC(j);
m.height=this.__jD(j);
var n=this.__jA.exec(k);

if(n!=null){m.format=n[1];
}}else{m.failed=true;
}j.onload=j.onerror=null;
var o=m.callbacks;
delete m.loading;
delete m.callbacks;
for(var i=0,l=o.length;i<l;i+=2){o[i].call(o[i+1],k,m);
}}),__jC:qx.core.Variant.select(r,{"gecko":function(e){return e.naturalWidth;
},"default":function(D){return D.width;
}}),__jD:qx.core.Variant.select(r,{"gecko":function(s){return s.naturalHeight;
},"default":function(f){return f.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__ce:[o,null,n,h,null,p,k,null,p],__cf:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cg:function(F,top){var G=qx.bom.client.Engine;

if(G.GECKO&&G.VERSION<1.9&&F==top&&typeof F==s){top+=0.01;
}
if(F){var H=(typeof F==s)?F+q:F;
}else{H=r;
}
if(top){var I=(typeof top==s)?top+q:top;
}else{I=r;
}return H+j+I;
},compile:function(t,u,v,top){var w=this.__cg(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y=this.__ce;
y[1]=x;
y[4]=w;
y[7]=u;
return y.join(m);
},getStyles:function(z,A,B,top){if(!z){return this.__cf;
}var C=this.__cg(B,top);
var D=qx.util.ResourceManager.getInstance().toUri(z);
var E={backgroundPosition:C,backgroundImage:i+D+l};

if(A!=null){E.backgroundRepeat=A;
}return E;
},set:function(a,b,c,d,top){var e=this.getStyles(b,c,d,top);

for(var f in e){a.style[f]=e[f];
}}}});
})();
(function(){var l="nonScaled",k="scaled",j="alphaScaled",i=".png",h="div",g="replacement",f="hidden",e="Boolean",d="px",c="http",x="changeSource",w="qx.client",v="qx.ui.basic.Image",u="qx.debug",t="-disabled.$1",s="String",r="_applySource",q="img",p="__hc",o="image",m="_applyScale",n="on";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(G){this.__hc={};
arguments.callee.base.call(this);

if(G){this.setSource(G);
}},properties:{source:{check:s,init:null,nullable:true,event:x,apply:r,themeable:true},scale:{check:e,init:false,themeable:true,apply:m},appearance:{refine:true,init:o},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hd:null,__he:null,__hf:null,__hc:null,getContentElement:function(){return this.__hj();
},_createContentElement:function(){return this.__hj();
},_getContentHint:function(){return {width:this.__hd||0,height:this.__he||0};
},_applyEnabled:function(bj,bk){arguments.callee.base.call(this,bj,bk);

if(this.getSource()){this._styleSource();
}},_applySource:function(bl){this._styleSource();
},_applyScale:function(F){this._styleSource();
},__hg:function(S){this.__hf=S;
},__hh:function(){if(this.__hf==null){var b=this.getSource();
var a=false;

if(b!=null){a=qx.lang.String.endsWith(b,i);
}
if(this.getScale()&&a&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hf=j;
}else if(this.getScale()){this.__hf=k;
}else{this.__hf=l;
}}return this.__hf;
},__hi:function(O){var P;
var Q;

if(O==j){P=true;
Q=h;
}else if(O==l){P=false;
Q=h;
}else{P=true;
Q=q;
}var R=new qx.html.Image(Q);
R.setScale(P);
R.setStyles({"overflowX":f,"overflowY":f});
return R;
},__hj:function(){var be=this.__hh();

if(this.__hc[be]==null){this.__hc[be]=this.__hi(be);
}return this.__hc[be];
},_styleSource:function(){var N=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!N){this.getContentElement().resetSource();
return;
}this.__hk(N);
if(qx.util.ResourceManager.getInstance().has(N)){this.__hm(this.getContentElement(),N);
}else if(qx.io.ImageLoader.isLoaded(N)){this.__hn(this.getContentElement(),N);
}else{this.__ho(this.getContentElement(),N);
}},__hk:qx.core.Variant.select(w,{"mshtml":function(bb){var bd=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var bc=qx.lang.String.endsWith(bb,i);

if(bd&&bc){if(this.getScale()&&this.__hh()!=j){this.__hg(j);
}else if(!this.getScale()&&this.__hh()!=l){this.__hg(l);
}}else{if(this.getScale()&&this.__hh()!=k){this.__hg(k);
}else if(!this.getScale()&&this.__hh()!=l){this.__hg(l);
}}this.__hl(this.__hj());
},"default":function(H){if(this.getScale()&&this.__hh()!=k){this.__hg(k);
}else if(!this.getScale()&&this.__hh(l)){this.__hg(l);
}this.__hl(this.__hj());
}}),__hl:function(y){var B=this.getContainerElement();
var C=B.getChild(0);

if(C!=y){if(C!=null){var E=d;
var z={};
var A=this.getInnerSize();

if(A!=null){z.width=A.width+E;
z.height=A.height+E;
}var D=this.getInsets();
z.left=D.left+E;
z.top=D.top+E;
y.setStyles(z,true);
y.setSelectable(this.getSelectable());
}B.removeAt(0);
B.addAt(y,0);
}},__hm:function(bf,bg){var bi=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bh=bg.replace(/\.([a-z]+)$/,t);

if(bi.has(bh)){bg=bh;
this.addState(g);
}else{this.removeState(g);
}}if(bf.getSource()===bg){return;
}bf.setSource(bg);
this.__hq(bi.getImageWidth(bg),bi.getImageHeight(bg));
},__hn:function(V,W){var Y=qx.io.ImageLoader;
V.setSource(W);
var X=Y.getWidth(W);
var ba=Y.getHeight(W);
this.__hq(X,ba);
},__ho:function(I,J){var K=qx.io.ImageLoader;

if(qx.core.Variant.isSet(u,n)){if(!qx.lang.String.startsWith(J.toLowerCase(),c)){var self=arguments.callee.self;

if(!self.__pV){self.__pV={};
}
if(!self.__pV[J]){this.debug("try to load a unmanaged relative image: "+J);
self.__pV[J]=true;
}}}if(!K.isFailed(J)){K.load(J,this.__hp,this);
}else{if(I!=null){I.resetSource();
}}},__hp:function(L,M){if(L!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(M.failed){this.warn("Image could not be loaded: "+L);
}this._styleSource();
},__hq:function(T,U){if(T!==this.__hd||U!==this.__he){this.__hd=T;
this.__he=U;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(p);
}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
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
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
var a=new qx.event.Timer(this.getTimeoutInterval());
a.addListener(g,this._onInterval,this);
a.start();
this.__iN=a;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__iN:null,_applyTimeoutInterval:function(h){this.__iN.setInterval(h);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__iN){this.__iN.stop();
}this.__iN=null;
}});
})();
(function(){var t="top",s="right",r="bottom",q="left",p="edge-start",o="align-start",n="align-end",m="edge-end",l="qx.util.placement.AbstractAxis",k="-",Q="best-fit",P="size",O="target.bottom",N="offsets",M='__fX',L="size.width",K="offsets.bottom",J="qx.util.placement.Placement",I="qx.debug",H="keep-align",A="target.right",B="direct",y="offsets.right",z="target",w="offsets.left",x="area",u="target.top",v="area.height",C="target.left",D="area.width",F="on",E="size.height",G="offsets.top";
qx.Class.define(J,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__fX=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:l},axisY:{check:l},edge:{check:[t,s,r,q],init:t},align:{check:[t,s,r,q],init:s}},statics:{__fY:null,compute:function(a,b,c,d,e,f,g){this.__fY=this.__fY||new qx.util.placement.Placement();
var j=e.split(k);
var i=j[0];
var h=j[1];
this.__fY.set({axisX:this.__gd(f),axisY:this.__gd(g),edge:i,align:h});
return this.__fY.compute(a,b,c,d);
},__ga:null,__gb:null,__gc:null,__gd:function(bd){switch(bd){case B:this.__ga=this.__ga||new qx.util.placement.DirectAxis();
return this.__ga;
case H:this.__gb=this.__gb||new qx.util.placement.KeepAlignAxis();
return this.__gb;
case Q:this.__gc=this.__gc||new qx.util.placement.BestFitAxis();
return this.__gc;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__fX:null,compute:function(T,U,V,W){if(qx.core.Variant.isSet(I,F)){this.assertObject(T,P);
this.assertNumber(T.width,L);
this.assertNumber(T.height,E);
this.assertObject(U,x);
this.assertNumber(U.width,D);
this.assertNumber(U.height,v);
this.assertObject(V,z);
this.assertNumber(V.top,u);
this.assertNumber(V.right,A);
this.assertNumber(V.bottom,O);
this.assertNumber(V.left,C);
this.assertObject(W,N);
this.assertNumber(W.top,G);
this.assertNumber(W.right,y);
this.assertNumber(W.bottom,K);
this.assertNumber(W.left,w);
}var X=this.getAxisX()||this.__fX;
var ba=X.computeStart(T.width,{start:V.left,end:V.right},{start:W.left,end:W.right},U.width,this.__ge());
var Y=this.getAxisY()||this.__fX;
var top=Y.computeStart(T.height,{start:V.top,end:V.bottom},{start:W.top,end:W.bottom},U.height,this.__gf());
return {left:ba,top:top};
},__ge:function(){var bc=this.getEdge();
var bb=this.getAlign();

if(bc==q){return p;
}else if(bc==s){return m;
}else if(bb==q){return o;
}else if(bb==s){return n;
}},__gf:function(){var S=this.getEdge();
var R=this.getAlign();

if(S==t){return p;
}else if(S==r){return m;
}else if(R==t){return o;
}else if(R==r){return n;
}}},destruct:function(){this._disposeObjects(M);
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
(function(){var m="mousedown",l="qx.debug",k="on",j="blur",i="__oW",h="qx.ui.popup.Manager",g="singleton";
qx.Class.define(h,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oW={};
qx.event.Registration.addListener(document.documentElement,m,this.__oY,this,true);
qx.bom.Element.addListener(window,j,this.hideAll,this);
},members:{__oW:null,add:function(t){if(qx.core.Variant.isSet(l,k)){if(!(t instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+t);
}}this.__oW[t.$$hash]=t;
this.__oX();
},remove:function(a){if(qx.core.Variant.isSet(l,k)){if(!(a instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+a);
}}var b=this.__oW;

if(b){delete b[a.$$hash];
this.__oX();
}},hideAll:function(){var o=this.__oW;

if(o){for(var n in o){o[n].exclude();
}}},__oX:function(){var f=1e7;
var d=this.__oW;

for(var c in d){d[c].setZIndex(f++);
}},__oY:function(e){var r=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var s=this.__oW;

for(var q in s){var p=s[q];

if(!p.getAutoHide()||r==p||qx.ui.core.Widget.contains(p,r)){continue;
}p.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,m,this.__oY,this,true);
this._disposeMap(i);
}});
})();
(function(){var d="' is not supported by the Grow layout!",c="qx.ui.layout.Grow",b="qx.debug",a="The property '";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(e,name,f){this.assert(false,a+name+d);
},"off":null}),renderLayout:function(r,s){var w=this._getLayoutChildren();
var v,x,u,t;
for(var i=0,l=w.length;i<l;i++){v=w[i];
x=v.getSizeHint();
u=r;

if(u<x.minWidth){u=x.minWidth;
}else if(u>x.maxWidth){u=x.maxWidth;
}t=s;

if(t<x.minHeight){t=x.minHeight;
}else if(t>x.maxHeight){t=x.maxHeight;
}v.renderLayout(0,0,u,t);
}},_computeSizeHint:function(){var o=this._getLayoutChildren();
var m,q;
var p=0,n=0;
var k=0,h=0;
var g=Infinity,j=Infinity;
for(var i=0,l=o.length;i<l;i++){m=o[i];
q=m.getSizeHint();
p=Math.max(p,q.width);
n=Math.max(n,q.height);
k=Math.max(k,q.minWidth);
h=Math.max(h,q.minHeight);
g=Math.min(g,q.maxWidth);
j=Math.min(j,q.maxHeight);
}return {width:p,height:n,minWidth:k,minHeight:h,maxWidth:g,maxHeight:j};
}}});
})();
(function(){var o="label",n="icon",m="Boolean",l="both",k="String",j="left",i="changeGap",h="changeShow",g="bottom",f="_applyCenter",D="changeIcon",C="qx.ui.basic.Atom",B="changeLabel",A="Integer",z="_applyIconPosition",y="qx.debug",x="top",w="right",v="_applyRich",u="_applyIcon",s="_applyShow",t="on",q="_applyLabel",r="_applyGap",p="atom";
qx.Class.define(C,{extend:qx.ui.core.Widget,construct:function(S,T){if(qx.core.Variant.isSet(y,t)){this.assertArgumentsCount(arguments,0,2);
}arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(S!=null){this.setLabel(S);
}
if(T!=null){this.setIcon(T);
}},properties:{appearance:{refine:true,init:p},label:{apply:q,nullable:true,check:k,event:B},rich:{check:m,init:false,apply:v},icon:{check:k,apply:u,nullable:true,themeable:true,event:D},gap:{check:A,nullable:false,event:i,apply:r,themeable:true,init:4},show:{init:l,check:[l,o,n],themeable:true,inheritable:true,apply:s,event:h},iconPosition:{init:j,check:[x,w,g,j],themeable:true,apply:z},center:{init:false,check:m,themeable:true,apply:f}},members:{_createChildControlImpl:function(G){var H;

switch(G){case o:H=new qx.ui.basic.Label(this.getLabel());
H.setAnonymous(true);
H.setRich(this.getRich());
this._add(H);

if(this.getLabel()==null||this.getShow()===n){H.exclude();
}break;
case n:H=new qx.ui.basic.Image(this.getIcon());
H.setAnonymous(true);
this._addAt(H,0);

if(this.getIcon()==null||this.getShow()===o){H.exclude();
}break;
}return H||arguments.callee.base.call(this,G);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===n){this._excludeChildControl(o);
}else{this._showChildControl(o);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===o){this._excludeChildControl(n);
}else{this._showChildControl(n);
}},_applyLabel:function(N,O){var P=this.getChildControl(o,true);

if(P){P.setValue(N);
}this._handleLabel();
},_applyRich:function(K,L){var M=this.getChildControl(o,true);

if(M){M.setRich(K);
}},_applyIcon:function(a,b){var c=this.getChildControl(n,true);

if(c){c.setSource(a);
}this._handleIcon();
},_applyGap:function(d,e){this._getLayout().setGap(d);
},_applyShow:function(I,J){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(E,F){this._getLayout().setIconPosition(E);
},_applyCenter:function(Q,R){this._getLayout().setCenter(Q);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(o,name,p){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(B,C){var L=qx.ui.layout.Util;
var E=this.getIconPosition();
var H=this._getLayoutChildren();
var length=H.length;
var V,top,U,F;
var Q,K;
var O=this.getGap();
var T=this.getCenter();
if(E===n||E===j){var M=length-1;
var I=-1;
var G=-1;
}else{var M=0;
var I=length;
var G=1;
}if(E==l||E==n){if(T){var P=0;

for(var i=M;i!=I;i+=G){F=H[i].getSizeHint().height;

if(F>0){P+=F;

if(i!=M){P+=O;
}}}top=Math.round((C-P)/2);
}else{top=0;
}
for(var i=M;i!=I;i+=G){Q=H[i];
K=Q.getSizeHint();
U=Math.min(K.maxWidth,Math.max(B,K.minWidth));
F=K.height;
V=L.computeHorizontalAlignOffset(e,U,B);
Q.renderLayout(V,top,U,F);
if(F>0){top+=F+O;
}}}else{var J=B;
var D=null;
var S=0;

for(var i=M;i!=I;i+=G){Q=H[i];
U=Q.getSizeHint().width;

if(U>0){if(!D&&Q instanceof qx.ui.basic.Label){D=Q;
}else{J-=U;
}S++;
}}
if(S>1){var R=(S-1)*O;
J-=R;
}
if(D){var K=D.getSizeHint();
var N=Math.max(K.minWidth,Math.min(J,K.maxWidth));
J-=N;
}
if(T&&J>0){V=Math.round(J/2);
}else{V=0;
}
for(var i=M;i!=I;i+=G){Q=H[i];
K=Q.getSizeHint();
F=Math.min(K.maxHeight,Math.max(C,K.minHeight));

if(Q===D){U=N;
}else{U=K.width;
}top=L.computeVerticalAlignOffset(h,K.height,C);
Q.renderLayout(V,top,U,F);
if(U>0){V+=U+O;
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
(function(){var A="middle",z="qx.ui.layout.Util",y="left",x="center",w="top",v="bottom",u="right";
qx.Class.define(z,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(be,bf,bg){var bi,bm,bh,bn;
var bj=bf>bg;
var bo=Math.abs(bf-bg);
var bp,bk;
var bl={};

for(bm in be){bi=be[bm];
bl[bm]={potential:bj?bi.max-bi.value:bi.value-bi.min,flex:bj?bi.flex:1/bi.flex,offset:0};
}while(bo!=0){bn=Infinity;
bh=0;

for(bm in bl){bi=bl[bm];

if(bi.potential>0){bh+=bi.flex;
bn=Math.min(bn,bi.potential/bi.flex);
}}if(bh==0){break;
}bn=Math.min(bo,bn*bh)/bh;
bp=0;

for(bm in bl){bi=bl[bm];

if(bi.potential>0){bk=Math.min(bo,bi.potential,Math.ceil(bn*bi.flex));
bp+=bk-bn*bi.flex;

if(bp>=1){bp-=1;
bk-=1;
}bi.potential-=bk;

if(bj){bi.offset+=bk;
}else{bi.offset-=bk;
}bo-=bk;
}}}return bl;
},computeHorizontalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case y:G=E;
break;
case u:G=D-C-F;
break;
case x:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},computeVerticalAlignOffset:function(j,k,m,n,o){if(n==null){n=0;
}
if(o==null){o=0;
}var p=0;

switch(j){case w:p=n;
break;
case v:p=m-k-o;
break;
case A:p=Math.round((m-k)/2);
if(p<n){p=n;
}else if(p<o){p=Math.max(n,m-k-o);
}break;
}return p;
},collapseMargins:function(T){var U=0,W=0;

for(var i=0,l=arguments.length;i<l;i++){var V=arguments[i];

if(V<0){W=Math.min(W,V);
}else if(V>0){U=Math.max(U,V);
}}return U+W;
},computeHorizontalGaps:function(q,r,s){if(r==null){r=0;
}var t=0;

if(s){t+=q[0].getMarginLeft();

for(var i=1,l=q.length;i<l;i+=1){t+=this.collapseMargins(r,q[i-1].getMarginRight(),q[i].getMarginLeft());
}t+=q[l-1].getMarginRight();
}else{for(var i=1,l=q.length;i<l;i+=1){t+=q[i].getMarginLeft()+q[i].getMarginRight();
}t+=(r*(l-1));
}return t;
},computeVerticalGaps:function(H,I,J){if(I==null){I=0;
}var K=0;

if(J){K+=H[0].getMarginTop();

for(var i=1,l=H.length;i<l;i+=1){K+=this.collapseMargins(I,H[i-1].getMarginBottom(),H[i].getMarginTop());
}K+=H[l-1].getMarginBottom();
}else{for(var i=1,l=H.length;i<l;i+=1){K+=H[i].getMarginTop()+H[i].getMarginBottom();
}K+=(I*(l-1));
}return K;
},computeHorizontalSeparatorGaps:function(L,M,N){var Q=qx.theme.manager.Decoration.getInstance().resolve(N);
var P=Q.getInsets();
var O=P.left+P.right;
var R=0;

for(var i=0,l=L.length;i<l;i++){var S=L[i];
R+=S.getMarginLeft()+S.getMarginRight();
}R+=(M+O+M)*(l-1);
return R;
},computeVerticalSeparatorGaps:function(a,b,c){var f=qx.theme.manager.Decoration.getInstance().resolve(c);
var e=f.getInsets();
var d=e.top+e.bottom;
var g=0;

for(var i=0,l=a.length;i<l;i++){var h=a[i];
g+=h.getMarginTop()+h.getMarginBottom();
}g+=(b+d+b)*(l-1);
return g;
},arrangeIdeals:function(X,Y,ba,bb,bc,bd){if(Y<X||bc<bb){if(Y<X&&bc<bb){Y=X;
bc=bb;
}else if(Y<X){bc-=(X-Y);
Y=X;
if(bc<bb){bc=bb;
}}else if(bc<bb){Y-=(bb-bc);
bc=bb;
if(Y<X){Y=X;
}}}
if(Y>ba||bc>bd){if(Y>ba&&bc>bd){Y=ba;
bc=bd;
}else if(Y>ba){bc+=(Y-ba);
Y=ba;
if(bc>bd){bc=bd;
}}else if(bc>bd){Y+=(bc-bd);
bc=bd;
if(Y>ba){Y=ba;
}}}return {begin:Y,end:bc};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var q="on",p="qx.dynlocale",o="text",n="Boolean",m="qx.client",l="color",k="userSelect",j="changeLocale",i="qx.debug",h="enabled",M="none",L="_applyTextAlign",K="qx.ui.core.Widget",J="gecko",I="changeTextAlign",H="_applyWrap",G="changeValue",F="changeContent",E="qx.ui.basic.Label",D="A",x="_applyValue",y="center",v="_applyBuddy",w="String",t="textAlign",u="right",r="changeRich",s="_applyRich",z="click",A="label",C="webkit",B="left";
qx.Class.define(E,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(d){arguments.callee.base.call(this);

if(d!=null){this.setValue(d);
}
if(qx.core.Variant.isSet(p,q)){qx.locale.Manager.getInstance().addListener(j,this._onChangeLocale,this);
}},properties:{rich:{check:n,init:false,event:r,apply:s},wrap:{check:n,init:true,apply:H},value:{check:w,apply:x,event:G,nullable:true},buddy:{check:K,apply:v,nullable:true,init:null},textAlign:{check:[B,y,u],nullable:true,themeable:true,apply:L,event:I},appearance:{refine:true,init:A},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fD:null,__fE:null,__fF:null,__fG:null,_getContentHint:function(){if(this.__fE){this.__fH=this.__fI();
delete this.__fE;
}return {width:this.__fH.width,height:this.__fH.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(c){if(qx.core.Variant.isSet(m,J)){if(c&&!this.isRich()){if(qx.core.Variant.isSet(i,q)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}arguments.callee.base.call(this,c);
if(qx.core.Variant.isSet(m,C)){this.getContainerElement().setStyle(k,c?o:M);
this.getContentElement().setStyle(k,c?o:M);
}},_getContentHeightForWidth:function(be){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fI(be).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bc,bd){this.getContentElement().setStyle(t,bc);
},_applyTextColor:function(a,b){if(a){this.getContentElement().setStyle(l,qx.theme.manager.Color.getInstance().resolve(a));
}else{this.getContentElement().removeStyle(l);
}},__fH:{width:0,height:0},_applyFont:function(P,Q){var R;

if(P){this.__fD=qx.theme.manager.Font.getInstance().resolve(P);
R=this.__fD.getStyles();
}else{this.__fD=null;
R=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(R);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},__fI:function(W){var bb=qx.bom.Label;
var Y=this.getFont();
var X=Y?this.__fD.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||D;
var ba=this.getRich();
return ba?bb.getHtmlSize(content,X,W):bb.getTextSize(content,X);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__fF);
this.__fF=null;
this.removeListenerById(this.__fG);
this.__fG=null;
}
if(U!=null){this.__fF=U.bind(h,this,h);
this.__fG=this.addListener(z,U.focus,U);
}},_applyRich:function(O){this.getContentElement().setRich(O);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(f,g){if(f&&!this.isRich()){if(qx.core.Variant.isSet(i,q)){this.warn("Only rich labels support wrap.");
}}},_onChangeLocale:qx.core.Variant.select(p,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(S,T){this.getContentElement().setValue(S);
this.__fE=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(F,S,T);
}},destruct:function(){if(qx.core.Variant.isSet(p,q)){qx.locale.Manager.getInstance().removeListener(j,this._onChangeLocale,this);
}if(this.__fF!=null){var N=this.getBuddy();

if(N!=null&&!N.isDisposed()){N.removeBinding(this.__fF);
}}this.__fD=this.__fF=null;
}});
})();
(function(){var g="value",f="Please use the getValue() method instead.",e="qx.html.Label",d="Please use the setValue() method instead.";
qx.Class.define(e,{extend:qx.html.Element,members:{__cU:null,_applyProperty:function(name,b){arguments.callee.base.call(this,name,b);

if(name==g){var c=this.getDomElement();
qx.bom.Label.setValue(c,b);
}},_createDomElement:function(){var k=this.__cU;
var j=qx.bom.Label.create(this._content,k);
return j;
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__cU==h){return;
}this.__cU=h;
return this;
},setValue:function(l){this._setProperty(g,l);
return this;
},getValue:function(){return this._getProperty(g);
},setContent:function(a){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.setValue(a);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getValue();
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",F="auto",E="ellipsis",D="normal",C="label",B="px",A="crop",z="end",y="100%",x="visible",w="qx.bom.Label",u="Please use the setValue() method instead.",v="opera",s="Please use the getValue() method instead.",t="block",q="none",r="-1000px",p="absolute";
qx.Class.define(w,{statics:{__hr:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__hs:function(){var W=this.__hu(false);
document.body.insertBefore(W,document.body.firstChild);
return this._textElement=W;
},__ht:function(){var e=this.__hu(true);
document.body.insertBefore(e,document.body.firstChild);
return this._htmlElement=e;
},__hu:function(R){var S=qx.bom.Element.create(m);
var T=S.style;
T.width=T.height=F;
T.left=T.top=r;
T.visibility=h;
T.position=p;
T.overflow=x;

if(R){T.whiteSpace=D;
}else{T.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var U=document.createElementNS(g,C);
for(var V in this.__hr){U.style[V]=l;
}S.appendChild(U);
}}return S;
},__hv:function(a){var b={};

if(a){b.whiteSpace=D;
}else if(qx.core.Variant.isSet(o,n)){b.display=t;
}else{b.overflow=h;
b.whiteSpace=f;
b.textOverflow=E;
b.userSelect=q;
if(qx.core.Variant.isSet(o,v)){b.OTextOverflow=E;
}}return b;
},create:function(content,X,Y){if(!Y){Y=window;
}
if(X){var ba=Y.document.createElement(m);
ba.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var ba=Y.document.createElement(m);
var bb=Y.document.createElementNS(g,C);
bb.style.cursor=l;
bb.style.color=l;
bb.style.overflow=h;
bb.style.maxWidth=y;
for(var bc in this.__hr){bb.style[bc]=l;
}bb.setAttribute(A,z);
ba.appendChild(bb);
}else{var ba=Y.document.createElement(m);
qx.bom.element.Style.setStyles(ba,this.__hv(X));
}
if(content){this.setValue(ba,content);
}return ba;
},setValue:function(c,d){d=d||i;

if(c.useHtml){c.innerHTML=d;
}else if(qx.core.Variant.isSet(o,n)){c.firstChild.setAttribute(j,d);
}else{qx.bom.element.Attribute.set(c,k,d);
}},getValue:function(bd){if(bd.useHtml){return bd.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return bd.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(bd,k);
}},getHtmlSize:function(content,G,H){var I=this._htmlElement||this.__ht();
I.style.width=H!==undefined?H+B:F;
I.innerHTML=content;
return this.__hw(I,G);
},getTextSize:function(O,P){var Q=this._textElement||this.__hs();

if(qx.core.Variant.isSet(o,n)){Q.firstChild.setAttribute(j,O);
}else{qx.bom.element.Attribute.set(Q,k,O);
}return this.__hw(Q,P);
},__hw:function(J,K){var L=this.__hr;

if(!K){K={};
}
for(var M in L){J.style[M]=K[M]||i;
}var N=qx.bom.element.Dimension.getSize(J);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){N.width++;
}}return N;
},setContent:function(bf,bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.setValue(bf,bg);
},getContent:function(be){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue(be);
}}});
})();
(function(){var h="mshtml",g="qx.client",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="paddingTop",b="paddingBottom";
qx.Class.define(f,{statics:{getWidth:qx.core.Variant.select(g,{"gecko":function(q){if(q.getBoundingClientRect){var r=q.getBoundingClientRect();
return Math.round(r.right)-Math.round(r.left);
}else{return q.offsetWidth;
}},"default":function(a){return a.offsetWidth;
}}),getHeight:qx.core.Variant.select(g,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.bottom)-Math.round(C.top);
}else{return B.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(A){return {width:this.getWidth(A),height:this.getHeight(A)};
},__gt:{visible:true,hidden:true},getContentWidth:function(t){var v=qx.bom.element.Style;
var w=qx.bom.element.Overflow.getX(t);
var x=parseInt(v.get(t,d),10);
var z=parseInt(v.get(t,e),10);

if(this.__gt[w]){return t.clientWidth-x-z;
}else{if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-x-z;
}else{var y=t.scrollWidth-x;
var u=qx.bom.client.Engine;

if(u.NAME===h&&u.VERSION==6){y-=z;
}return y;
}}},getContentHeight:function(i){var k=qx.bom.element.Style;
var m=qx.bom.element.Overflow.getY(i);
var n=parseInt(k.get(i,c),10);
var l=parseInt(k.get(i,b),10);

if(this.__gt[m]){return i.clientHeight-n-l;
}else{if(i.clientHeight>=i.scrollHeight){return Math.max(i.clientHeight,i.scrollHeight)-n-l;
}else{var o=i.scrollHeight-n;
var j=qx.bom.client.Engine;

if(j.NAME===h&&j.VERSION==6){o-=l;
}return o;
}}},getContentSize:function(s){return {width:this.getContentWidth(s),height:this.getContentHeight(s)};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IForm";
qx.Interface.define(b,{events:{"changeEnabled":c,"changeValid":c,"changeInvalidMessage":c,"changeRequired":c},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(f){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var i="Use 'getBlocker().getContentBlockerElement()' instead.",h="Use 'getBlocker().getBlockerElement()' instead.",g="_applyBlockerColor",f="Number",e="__pB",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color";
qx.Mixin.define(d,{construct:function(){this.__pB=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:g,themeable:true},blockerOpacity:{check:f,init:1,apply:c,themeable:true}},members:{__pB:null,_applyBlockerColor:function(j,k){this.__pB.setColor(j);
},_applyBlockerOpacity:function(l,m){this.__pB.setOpacity(l);
},block:function(){this.__pB.block();
},isBlocked:function(){return this.__pB.isBlocked();
},unblock:function(){this.__pB.unblock();
},forceUnblock:function(){this.__pB.forceUnblock();
},blockContent:function(a){this.__pB.blockContent(a);
},isContentBlocked:function(){return this.__pB.isContentBlocked();
},unblockContent:function(){this.__pB.unblockContent();
},forceUnblockContent:function(){this.__pB.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__pB.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__pB.getBlockerElement();
},getBlocker:function(){return this.__pB;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__ll",f="__lm",d="qx.ui.window.MDesktop";
qx.Mixin.define(d,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__ll:null,__lm:null,getWindowManager:function(){if(!this.__lm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__lm;
},supportsMaximize:function(){return true;
},setWindowManager:function(n){if(this.__lm){this.__lm.setDesktop(null);
}n.setDesktop(this);
this.__lm=n;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(b,c){this.getWindowManager().changeActiveWindow(b,c);

if(b){b.setActive(true);
}
if(c){c.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(l)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(m){if(!qx.lang.Array.contains(this.getWindows(),m)){this.getWindows().push(m);
m.addListener(i,this._onChangeActive,this);
m.addListener(k,this._onChangeModal,this);
m.addListener(j,this._onChangeVisibility,this);
}
if(m.getActive()){this.setActiveWindow(m);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(a){if(qx.Class.isDefined(l)&&a instanceof qx.ui.window.Window){this._removeWindow(a);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(i,this._onChangeActive,this);
p.removeListener(k,this._onChangeModal,this);
p.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ll){this.__ll=[];
}return this.__ll;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(f);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__kw:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(y,z){},"default":function(u,v){var w=qx.bom.Stylesheet;
var x=this.__kw;

if(!x){this.__kw=x=w.createElement();
}w.removeAllRules(x);

if(u){w.addRule(x,c,qx.bom.element.Cursor.compile(u).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(A,B){if(A){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__kw=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var s="resize",r="position",q="0px",p="webkit",o="paddingLeft",n="$$widget",m="qx.ui.root.Application",l="hidden",k="qx.client",j="div",g="paddingTop",i="100%",h="absolute";
qx.Class.define(m,{extend:qx.ui.root.Abstract,construct:function(v){this.__pF=qx.dom.Node.getWindow(v);
this.__pG=v;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__pF,s,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__pF:null,__pG:null,_createContainerElement:function(){var w=this.__pG;

if(qx.core.Variant.isSet(k,p)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=l;
A.padding=A.margin=x.padding=x.margin=q;
A.width=A.height=x.width=x.height=i;
var z=w.createElement(j);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(r,h);
y.setAttribute(n,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var d=qx.bom.Viewport.getWidth(this.__pF);
var f=qx.bom.Viewport.getHeight(this.__pF);
return {minWidth:d,width:d,maxWidth:d,minHeight:f,height:f,maxHeight:f};
},_applyPadding:function(t,u,name){if(t&&(name==g||name==o)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,t,u,name);
},_applyDecorator:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__pF=this.__pG=null;
}});
})();
(function(){var n="zIndex",m="px",l="keydown",k="deactivate",j="This method is not needed anymore.",h="resize",g="keyup",f="keypress",d="backgroundColor",c="_applyOpacity",A="Use 'getBlockerElement' instead.",z="opacity",y="__mR",x="interval",w="__mP",v="Tab",u="Color",t="qx.ui.root.Page",s="Use 'getContentBlockerElement' instead.",r="Number",p="qx.ui.core.Blocker",q="__mU",o="_applyColor";
qx.Class.define(p,{extend:qx.core.Object,construct:function(O){arguments.callee.base.call(this);
this._widget=O;
this._isPageRoot=(qx.Class.isDefined(t)&&O instanceof qx.ui.root.Page);

if(this._isPageRoot){O.addListener(h,this.__mV,this);
}this.__mM=[];
this.__mN=[];
this.__mO=[];
},properties:{color:{check:u,init:null,nullable:true,apply:o,themeable:true},opacity:{check:r,init:1,apply:c,themeable:true}},members:{__mP:null,__mQ:0,__mR:null,__mO:null,__mM:null,__mN:null,__mS:null,__mT:0,__mU:null,_isPageRoot:false,_widget:null,__mV:function(e){var V=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:V.width,height:V.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:V.width,height:V.height});
}},_applyColor:function(D,E){var F=qx.theme.manager.Color.getInstance().resolve(D);
this.__mW(d,F);
},_applyOpacity:function(B,C){this.__mW(z,B);
},__mW:function(L,M){var N=[];
this.__mP&&N.push(this.__mP);
this.__mR&&N.push(this.__mR);

for(var i=0;i<N.length;i++){N[i].setStyle(L,M);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
this.__mT+=1;

if(this.__mT==1){this.__mS=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
this.__mT-=1;

if(this.__mT==0){this._widget.setAnonymous(this.__mS);
}},_backupActiveWidget:function(){var U=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__mM.push(U.getActive());
this.__mN.push(U.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var R=this.__mM.length;

if(R>0){var Q=this.__mM[R-1];

if(Q){qx.bom.Element.activate(Q);
}this.__mM.pop();
}var P=this.__mN.length;

if(P>0){var Q=this.__mN[P-1];

if(Q){qx.bom.Element.focus(this.__mN[P-1]);
}this.__mN.pop();
}},__mX:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mP){this.__mP=this.__mX();
this.__mP.setStyle(n,15);
this._widget.getContainerElement().add(this.__mP);
this.__mP.exclude();
}return this.__mP;
},block:function(){this.__mQ++;

if(this.__mQ<2){this._backupActiveWidget();
var I=this.getBlockerElement();
I.include();
I.activate();
I.addListener(k,this.__nd,this);
I.addListener(f,this.__nc,this);
I.addListener(l,this.__nc,this);
I.addListener(g,this.__nc,this);
}},isBlocked:function(){return this.__mQ>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mQ--;

if(this.__mQ<1){this.__mY();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mQ=0;
this.__mY();
},__mY:function(){this._restoreActiveWidget();
var H=this.getBlockerElement();
H.removeListener(k,this.__nd,this);
H.removeListener(f,this.__nc,this);
H.removeListener(l,this.__nc,this);
H.removeListener(g,this.__nc,this);
H.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mR){this.__mR=this.__mX();
this._widget.getContentElement().add(this.__mR);
this.__mR.exclude();
}return this.__mR;
},blockContent:function(S){var T=this.getContentBlockerElement();
T.setStyle(n,S);
this.__mO.push(S);

if(this.__mO.length<2){T.include();

if(this._isPageRoot){if(!this.__mU){this.__mU=new qx.event.Timer(300);
this.__mU.addListener(x,this.__nb,this);
}this.__mU.start();
this.__nb();
}}},isContentBlocked:function(){return this.__mO.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO.pop();
var J=this.__mO[this.__mO.length-1];
var K=this.getContentBlockerElement();
K.setStyle(n,J);

if(this.__mO.length<1){this.__na();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mO=[];
var G=this.getContentBlockerElement();
G.setStyle(n,null);
this.__na();
},__na:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mU.stop();
}},__nb:function(){var a=this._widget.getContainerElement().getDomElement();
var b=qx.dom.Node.getDocument(a);
this.getContentBlockerElement().setStyles({height:b.documentElement.scrollHeight+m,width:b.documentElement.scrollWidth+m});
},__nc:function(e){if(e.getKeyIdentifier()==v){e.stop();
}},__nd:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(h,this.__mV,this);
}this._disposeObjects(y,w,q);
this.__mS=this.__mM=this.__mN=this._widget=this.__mO=null;
}});
})();
(function(){var w="cursor",v="100%",u="dblclick",t="mshtml",s="mouseup",r="mousedown",q="disappear",p="appear",o="contextmenu",n="mousewheel",g=")",m="mouseover",j="mouseout",d="qx.html.Blocker",c="click",i="repeat",h="mousemove",k="url(",b="qx.client",l="qx/static/blank.gif",f="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:f,width:v,height:v,opacity:y||0,backgroundColor:x});
this.addListener(r,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(h,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(j,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
if(qx.core.Variant.isSet(b,t)){this.setStyles({backgroundImage:k+qx.util.ResourceManager.getInstance().toUri(l)+g,backgroundRepeat:i});
}this.addListener(p,this.__oe,this);
this.addListener(q,this.__oe,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__oe:function(){var a=this.getStyle(w);
this.setStyle(w,null,true);
this.setStyle(w,a,true);
}}});
})();
(function(){var J="keypress",I="focusout",H="activate",G="__ba",F="Tab",E="singleton",D="deactivate",C="focusin",B="qx.ui.core.FocusHandler";
qx.Class.define(B,{extend:qx.core.Object,type:E,construct:function(){arguments.callee.base.call(this);
this.__ba={};
},members:{__ba:null,__bb:null,__bc:null,__bd:null,connectTo:function(Q){Q.addListener(J,this.__be,this);
Q.addListener(C,this._onFocusIn,this,true);
Q.addListener(I,this._onFocusOut,this,true);
Q.addListener(H,this._onActivate,this,true);
Q.addListener(D,this._onDeactivate,this,true);
},addRoot:function(L){this.__ba[L.$$hash]=L;
},removeRoot:function(R){delete this.__ba[R.$$hash];
},getActiveWidget:function(){return this.__bb;
},isActive:function(S){return this.__bb==S;
},getFocusedWidget:function(){return this.__bc;
},isFocused:function(x){return this.__bc==x;
},isFocusRoot:function(bg){return !!this.__ba[bg.$$hash];
},_onActivate:function(e){var A=e.getTarget();
this.__bb=A;
var z=this.__bf(A);

if(z!=this.__bd){this.__bd=z;
}},_onDeactivate:function(e){var y=e.getTarget();

if(this.__bb==y){this.__bb=null;
}},_onFocusIn:function(e){var K=e.getTarget();

if(K!=this.__bc){this.__bc=K;
K.visualizeFocus();
}},_onFocusOut:function(e){var M=e.getTarget();

if(M==this.__bc){this.__bc=null;
M.visualizeBlur();
}},__be:function(e){if(e.getKeyIdentifier()!=F){return;
}
if(!this.__bd){return;
}e.stopPropagation();
e.preventDefault();
var bh=this.__bc;

if(!e.isShiftPressed()){var bi=bh?this.__bj(bh):this.__bh();
}else{var bi=bh?this.__bk(bh):this.__bi();
}if(bi){bi.tabFocus();
}},__bf:function(a){var b=this.__ba;

while(a){if(b[a.$$hash]){return a;
}a=a.getLayoutParent();
}return null;
},__bg:function(g,h){if(g===h){return 0;
}var k=g.getTabIndex()||0;
var j=h.getTabIndex()||0;

if(k!=j){return k-j;
}var q=g.getContainerElement().getDomElement();
var p=h.getContainerElement().getDomElement();
var o=qx.bom.element.Location;
var n=o.get(q);
var m=o.get(p);
if(n.top!=m.top){return n.top-m.top;
}if(n.left!=m.left){return n.left-m.left;
}var r=g.getZIndex();
var s=h.getZIndex();

if(r!=s){return r-s;
}return 0;
},__bh:function(){return this.__bn(this.__bd,null);
},__bi:function(){return this.__bo(this.__bd,null);
},__bj:function(t){var u=this.__bd;

if(u==t){return this.__bh();
}
while(t&&t.getAnonymous()){t=t.getLayoutParent();
}
if(t==null){return [];
}var v=[];
this.__bl(u,t,v);
v.sort(this.__bg);
var w=v.length;
return w>0?v[0]:this.__bh();
},__bk:function(T){var U=this.__bd;

if(U==T){return this.__bi();
}
while(T&&T.getAnonymous()){T=T.getLayoutParent();
}
if(T==null){return [];
}var V=[];
this.__bm(U,T,V);
V.sort(this.__bg);
var W=V.length;
return W>0?V[W-1]:this.__bi();
},__bl:function(parent,bc,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()&&this.__bg(bc,bf)<0){bd.push(bf);
}this.__bl(bf,bc,bd);
}}},__bm:function(parent,X,Y){var ba=parent.getLayoutChildren();
var bb;

for(var i=0,l=ba.length;i<l;i++){bb=ba[i];
if(!(bb instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bb)&&bb.isEnabled()&&bb.isVisible()){if(bb.isTabable()&&this.__bg(X,bb)>0){Y.push(bb);
}this.__bm(bb,X,Y);
}}},__bn:function(parent,N){var O=parent.getLayoutChildren();
var P;

for(var i=0,l=O.length;i<l;i++){P=O[i];
if(!(P instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(P)&&P.isEnabled()&&P.isVisible()){if(P.isTabable()){if(N==null||this.__bg(P,N)<0){N=P;
}}N=this.__bn(P,N);
}}return N;
},__bo:function(parent,c){var d=parent.getLayoutChildren();
var f;

for(var i=0,l=d.length;i<l;i++){f=d[i];
if(!(f instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(f)&&f.isEnabled()&&f.isVisible()){if(f.isTabable()){if(c==null||this.__bg(f,c)>0){c=f;
}}c=this.__bo(f,c);
}}return c;
}},destruct:function(){this._disposeMap(G);
this.__bc=this.__bb=this.__bd=null;
}});
})();
(function(){var H="qx.client",G="head",F="text/css",E="stylesheet",D="}",C='@import "',B="{",A='";',z="qx.bom.Stylesheet",y="link",x="style";
qx.Class.define(z,{statics:{includeFile:function(N,O){if(!O){O=document;
}var P=O.createElement(y);
P.type=F;
P.rel=E;
P.href=qx.util.ResourceManager.getInstance().toUri(N);
var Q=O.getElementsByTagName(G)[0];
Q.appendChild(P);
},createElement:qx.core.Variant.select(H,{"mshtml":function(I){var J=document.createStyleSheet();

if(I){J.cssText=I;
}return J;
},"default":function(n){var o=document.createElement(x);
o.type=F;

if(n){o.appendChild(document.createTextNode(n));
}document.getElementsByTagName(G)[0].appendChild(o);
return o.sheet;
}}),addRule:qx.core.Variant.select(H,{"mshtml":function(T,U,V){T.addRule(U,V);
},"default":function(K,L,M){K.insertRule(L+B+M+D,K.cssRules.length);
}}),removeRule:qx.core.Variant.select(H,{"mshtml":function(f,g){var h=f.rules;
var j=h.length;

for(var i=j-1;i>=0;--i){if(h[i].selectorText==g){f.removeRule(i);
}}},"default":function(t,u){var v=t.cssRules;
var w=v.length;

for(var i=w-1;i>=0;--i){if(v[i].selectorText==u){t.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(H,{"mshtml":function(k){var l=k.rules;
var m=l.length;

for(var i=m-1;i>=0;i--){k.removeRule(i);
}},"default":function(ba){var bb=ba.cssRules;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){ba.deleteRule(i);
}}}),addImport:qx.core.Variant.select(H,{"mshtml":function(R,S){R.addImport(S);
},"default":function(d,e){d.insertRule(C+e+A,d.cssRules.length);
}}),removeImport:qx.core.Variant.select(H,{"mshtml":function(bd,be){var bf=bd.imports;
var bg=bf.length;

for(var i=bg-1;i>=0;i--){if(bf[i].href==be){bd.removeImport(i);
}}},"default":function(p,q){var r=p.cssRules;
var s=r.length;

for(var i=s-1;i>=0;i--){if(r[i].href==q){p.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(H,{"mshtml":function(a){var b=a.imports;
var c=b.length;

for(var i=c-1;i>=0;i--){a.removeImport(i);
}},"default":function(W){var X=W.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].type==X[i].IMPORT_RULE){W.deleteRule(i);
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
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.useElement(a);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var y="'>",x="[",w=", ",v="</span>",u="<span class='type-",t="</span> ",s="}",r="",q="]",p="{",V="map",U="<span class='object'>",T="]:",S="&gt;",R="<span class='object' title='Object instance with hash code: ",Q="string",P="level-",O="0",N="&lt;",M="<span class='offset'>",F=":",G="qx.log.appender.Util",D="&amp;",E="&#39;",B="DIV",C="<span>",z="&quot;",A="<span class='type-key'>",H="</span>:<span class='type-",I="</span>: ",K=" ",J="]</span>: ",L="?";
qx.Class.define(G,{statics:{toHtml:function(a){var m=[];
var h,l,c,e;
m.push(M,this.formatOffset(a.offset,6),t);

if(a.object){var b=a.win.qx.core.ObjectRegistry.fromHashCode(a.object);

if(b){m.push(R+b.$$hash+y,b.classname,x,b.$$hash,J);
}}else if(a.clazz){m.push(U+a.clazz.classname,I);
}var d=a.items;

for(var i=0,k=d.length;i<k;i++){h=d[i];
l=h.text;

if(l instanceof Array){var e=[];

for(var j=0,g=l.length;j<g;j++){c=l[j];

if(typeof c===Q){e.push(C+this.escapeHTML(c)+v);
}else if(c.key){e.push(A+c.key+H+c.type+y+this.escapeHTML(c.text)+v);
}else{e.push(u+c.type+y+this.escapeHTML(c.text)+v);
}}m.push(u+h.type+y);

if(h.type===V){m.push(p,e.join(w),s);
}else{m.push(x,e.join(w),q);
}m.push(v);
}else{m.push(u+h.type+y+this.escapeHTML(l)+t);
}}var f=document.createElement(B);
f.innerHTML=m.join(r);
f.className=P+a.level;
return f;
},formatOffset:function(W,length){var ba=W.toString();
var X=(length||6)-ba.length;
var Y=r;

for(var i=0;i<X;i++){Y+=O;
}return Y+ba;
},escapeHTML:function(bl){return String(bl).replace(/[<>&"']/g,this.__qQ);
},__qQ:function(n){var o={"<":N,">":S,"&":D,"'":E,'"':z};
return o[n]||L;
},toText:function(bb){return this.toTextArray(bb).join(K);
},toTextArray:function(bc){var bk=[];
bk.push(this.formatOffset(bc.offset,6));

if(bc.object){var bd=bc.win.qx.core.ObjectRegistry.fromHashCode(bc.object);

if(bd){bk.push(bd.classname+x+bd.$$hash+T);
}}else if(bc.clazz){bk.push(bc.clazz.classname+F);
}var be=bc.items;
var bh,bj;

for(var i=0,bi=be.length;i<bi;i++){bh=be[i];
bj=bh.text;

if(bj instanceof Array){var bf=[];

for(var j=0,bg=bj.length;j<bg;j++){bf.push(bj[j].text);
}
if(bh.type===V){bk.push(p,bf.join(w),s);
}else{bk.push(x,bf.join(w),q);
}}else{bk.push(bj);
}}return bk;
}}});
})();
(function(){var e="debug",d="log",c="qx.log.appender.Native",b="qx.client";
qx.Bootstrap.define(c,{statics:{process:qx.core.Variant.select(b,{"gecko":function(l){if(window.console&&console.firebug){console[l.level].call(console,qx.log.appender.Util.toText(l));
}},"mshtml":function(f){if(window.console){var h=f.level;

if(h==e){h=d;
}var g=qx.log.appender.Util.toText(f);
console[h](g);
}},"webkit":function(i){if(window.console){var k=i.level;

if(k==e){k=d;
}var j=qx.log.appender.Util.toText(i);
console[k](j);
}},"opera":function(m){}})},defer:function(a){if(window.console&&window.console.clear){console.clear();
}qx.log.Logger.register(a);
}});
})();
(function(){var q="",p='</div>',o="Up",n="none",m="keypress",l='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',k="Enter",j="px",i='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',bc="div",bb="user-command",ba='<div class="command">',Y='.qxconsole .command input:focus{outline:none;}',X='.qxconsole .messages .type-key{color:#565656;font-style:italic}',W='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',V='.qxconsole .messages div{padding:0px 4px;}',U='.qxconsole .messages .level-debug{background:white}',T='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',S="DIV",x='.qxconsole .messages .level-user{background:#E3EFE9}',y='<div class="qxconsole">',v="D",w='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',t='.qxconsole .messages .type-string{color:black;font-weight:normal;}',u='.qxconsole .control a{text-decoration:none;color:black;}',r='<div class="messages">',s='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',z='<input type="text"/>',A="clear",H='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',F='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',L='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',J='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',O='.qxconsole .messages .user-command{color:blue}',N="F7",C="qx.log.appender.Console",R='.qxconsole .messages .level-info{background:#DEEDFA}',Q="block",P='.qxconsole .messages .level-warn{background:#FFF7D5}',B='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',D='.qxconsole .messages .user-error{background:#FFE2D5}',E='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',G='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',I=">>> ",K="Down",M='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(C,{statics:{init:function(){var a=[L,E,u,l,V,O,i,D,U,R,P,h,x,t,M,s,F,w,X,T,W,B,J,H,Y];
qx.bom.Stylesheet.createElement(a.join(q));
var c=[y,G,r,p,ba,z,p,p];
var d=document.createElement(S);
d.innerHTML=c.join(q);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__qH=b;
this.__qI=b.childNodes[1];
this.__qJ=b.childNodes[2].firstChild;
this.__qO();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,m,this.__qP,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__qI.innerHTML=q;
},process:function(be){this.__qI.appendChild(qx.log.appender.Util.toHtml(be));
this.__qK();
},__qK:function(){this.__qI.scrollTop=this.__qI.scrollHeight;
},__qL:true,toggle:function(){if(!this.__qH){this.init();
}else if(this.__qH.style.display==n){this.show();
}else{this.__qH.style.display=n;
}},show:function(){if(!this.__qH){this.init();
}else{this.__qH.style.display=Q;
this.__qI.scrollTop=this.__qI.scrollHeight;
}},__qM:[],execute:function(){var bi=this.__qJ.value;

if(bi==q){return;
}
if(bi==A){return this.clear();
}var bg=document.createElement(bc);
bg.innerHTML=qx.log.appender.Util.escapeHTML(I+bi);
bg.className=bb;
this.__qM.push(bi);
this.__qN=this.__qM.length;
this.__qI.appendChild(bg);
this.__qK();

try{var bh=window.eval(bi);
}catch(bd){qx.log.Logger.error(bd);
}
if(bh!==undefined){qx.log.Logger.debug(bh);
}},__qO:function(e){this.__qI.style.height=(this.__qH.clientHeight-this.__qH.firstChild.offsetHeight-this.__qH.lastChild.offsetHeight)+j;
},__qP:function(e){var g=e.getKeyIdentifier();
if((g==N)||(g==v&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__qH){return;
}if(!qx.dom.Hierarchy.contains(this.__qH,e.getTarget())){return;
}if(g==k&&this.__qJ.value!=q){this.execute();
this.__qJ.value=q;
}if(g==o||g==K){this.__qN+=g==o?-1:1;
this.__qN=Math.min(Math.max(0,this.__qN),this.__qM.length);
var f=this.__qM[this.__qN];
this.__qJ.value=f||q;
this.__qJ.select();
}}},defer:function(bf){qx.event.Registration.addListener(document.documentElement,m,bf.__qP,bf);
}});
})();
(function(){var dN="execute",dM="/",dL="",dK="value",dJ="auto",dI="current",dH=" ",dG="excluded",dF="visible",dE="category",cN='modelLink',cM="modelLink",cL="changeSelection",cK="completed",cJ="tags",cI="failed",cH="white",cG="html",cF="~",cE="qooxdoo ",dU="all",dV=".",dS='\n',dT="monospace",dQ="div",dR="right",dO="qx.version",dP="id",dW="node",dX=".src.js",dm="_blank",dl=" Demo Browser ",dp=".html",dn="<script",dr="qx.theme.Modern",dq="horizontal",dt="javascript",ds="_",dk='</span>',dj="main",bo="qx_srcview",bp="js",bq="\n",br="outputviews.sourcepage.html.page",bs="widget",bt="outputviews.sourcepage.js.page",bu="?",bv="log",bw="separator-vertical",bx="request",em="src",el="icon/22/actions/edit-clear.png",ek="Demos",ej='</div>',eq="^.*",ep="filled",eo="Clear log",en="changeValue",es="dblclick",er="icon/22/actions/media-playback-start.png",cd="<div class='script'>The sample JS source will be displayed here.</div>",ce="demobrowser.DemoBrowser",cb="HTML Code",cc="load",ch='</span>=<span class="string">',ci="Run previous demo",cf="_history",cg='_cmdNamespacePollution',bY="icon/22/apps/utilities-color-chooser.png",ca="Ctrl+N",bL="Previous",bK='.html',bN="Run",bM='<span class="html-tag-name">',bH="<div class='script'>The sample source will be displayed here.</div>",bG="Open demo in the playground",bJ="tree1",bI="f1",bF="Debug",bE="Display log file",cn="script/demobrowser.demo",co="icon/22/actions/media-playback-stop.png",cp="</div></pre>",cq="icon/22/apps/utilities-log-viewer.png",cj="Ctrl+O",ck="Log File",cl="Stop playback after current demo",cm="qx.theme.Classic",cr='"',cs='<div class="script">',bV="logappender",bU="Choose theme",bT="icon/22/apps/internet-web-browser.png",bS="#",bR="f2",bQ="<pre class='script'>",bP="JS Code",bO="icon/22/mimetypes/executable.png",bX="ig",bW="middle",ct="noPlayground",cu="Stop",cv='"}',cx="animation",cy="icon/22/actions/edit-redo.png",cz='_cmdDisposeSample',cA="toolbar",cB="icon/22/apps/office-spreadsheet.png",cC="To Playground",cD="/demo/",cR="demo/welcome.html",cQ='_cmdSampleInOwnWindow',cP=".*",cO="background-splitpane",cV='demo/',cU="</pre>",cT="Debugging options",cS="Ctrl+P",cX="Filter...",cW="app-header",df="/playground/",dg="<pre ><div class='script'>",dd="Dispose Demo",de='{"code": ',db="Classic Theme",dc="Global Namespace Pollution",cY="icon/16/actions/edit-find.png",da="treeview.flat",dh="Own Window",di="Display HTML source",dx='_cmdObjectSummary',dw='/',dz='&gt;',dy='_cmdNextSample',dB="Run next demo",dA='_cmdPrevSample',dD=" Start",dC="\"",dv="background-medium",du="Ctrl+Left",ef="demo-tree",eg="Display JavaScript source",eh='_cmdRunSample',ei="Next",eb="F5",ec="http://demo.qooxdoo.org/",ed="Modern Theme",ee="Open demo in new window",dY="interval",ea="string",bn="runbutton",bm="8px",bl="Ctrl+Right",bk="?qx.theme=",bj="textfield",bi="Ctrl+D",bh="mainsplit",bg="icon/22/actions/go-previous.png",bf="Object Summary",be="Demo Browser",bA="icon/22/actions/application-exit.png",bB=' <span class="keyword">',by="Run the selected demo(s)",bz="left",bC="icon/22/actions/go-next.png",bD="Theme";
qx.Class.define(ce,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var fc=new qx.ui.layout.VBox;
fc.setSeparator(bw);
this.setLayout(fc);
this.add(this.__As());
this.widgets={};
this.tests={};
this.__zO=dr;
this.__zX();
this.add(this.__Af());
var fg=new qx.ui.splitpane.Pane(dq);
this.mainsplit=fg;
var fd=new qx.ui.splitpane.Pane(dq);
fd.setDecorator(null);
this.infosplit=fd;
this.add(fg,{flex:1});
var fh=new qx.ui.container.Composite();
fh.setLayout(new qx.ui.layout.VBox(3));
fh.setBackgroundColor(cO);
fg.add(fh,0);
var fb=new qx.ui.container.Composite();
fb.setLayout(new qx.ui.layout.HBox(3));
fb.setAppearance(bj);
fh.add(fb);
var fj=new qx.ui.basic.Image(cY);
fb.add(fj);
this.__zP=new qx.ui.form.TextField();
this.__zP.setLiveUpdate(true);
this.__zP.setAppearance(bs);
this.__zP.setPlaceholder(cX);
this.__zP.addListener(en,function(e){this.filter(e.getData());
},this);
fb.add(this.__zP,{flex:1});
this.__zQ=new qx.ui.basic.Label(dL);
this.__zQ.setAppearance(bs);
this.__zQ.setWidth(80);
this.__zQ.setTextAlign(dR);
fb.add(this.__zQ);
fg.add(fd,1);
this.__zR=this.__Ak();
fh.add(this.__zR,{flex:1});
var fi=this.__Ag();
fd.add(fi,2);
var eY=this.__Ai();
var fa=this.__Aj();
var fe=this.__Ah();
var ff=new qx.ui.container.Stack;
ff.setDecorator(dj);
ff.add(eY);
ff.add(fa);
ff.add(fe);
this.viewGroup.addListener(cL,function(e){var d=e.getData()[0];
var f=d!=null?d.getUserData(dK):dL;

switch(f){case cG:this.setSelection([eY]);
ff.show();
break;
case bp:this.setSelection([fa]);
ff.show();
break;
case bv:this.setSelection([fe]);
ff.show();
break;
default:this.resetSelection();
ff.exclude();
}},ff);
fd.add(ff,1);
ff.resetSelection();
ff.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(bx,function(e){var gl=e.getData().replace(cF,dM);

if(this._currentSample!=gl){this.setCurrentSample(gl);
}},this);
this.__zS=new qx.event.Timer(250);
this.__zS.addListener(dY,this.__Am,this);
this.__zS.start();
},properties:{playDemos:{check:[dU,dE,dI],init:dI}},members:{__zT:null,__zO:null,__zS:null,__zU:null,__zR:null,__zQ:null,__zP:null,__zV:null,__zW:null,defaultUrl:cR,playgroundUrl:ec+qx.core.Setting.get(dO)+df,__zX:function(){this._cmdObjectSummary=new qx.ui.core.Command(cj);
this._cmdObjectSummary.addListener(dN,this.__zY,this);
this._cmdRunSample=new qx.ui.core.Command(eb);
this._cmdRunSample.addListener(dN,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(du);
this._cmdPrevSample.addListener(dN,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(bl);
this._cmdNextSample.addListener(dN,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(ca);
this._cmdSampleInOwnWindow.addListener(dN,this.__Aa,this);
this._cmdDisposeSample=new qx.ui.core.Command(bi);
this._cmdDisposeSample.addListener(dN,this.__Ad,this);
this._cmdNamespacePollution=new qx.ui.core.Command(cS);
this._cmdNamespacePollution.addListener(dN,this.__Ae,this);
},__zY:function(){var b=this.__zT.getWindow();

if(b&&b.qx){alert(b.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Aa:function(){var eX=this.__zT.getWindow().location.href;
window.open(eX,dm);
},__Ab:function(ey){var ez=!!ey;
var eA=this.__zR.getSelection()[0].getUserData(cJ);

if(eA){ez=ez&&!qx.lang.Array.contains(eA,ct);
}this.__zV.setEnabled(ez);
this.__zW=ey;
},__Ac:function(){if(this.__zW){var fN=this.__zW;
var fM=de+cr+encodeURIComponent(fN)+cv;
var fL=this.playgroundUrl+bS+encodeURIComponent(fM);
window.open(fL,dm);
}else{alert(this.tr("Could not open the Playground."));
}},__Ad:function(e){var n=this.__zT.getWindow();

if(n&&n.qx){n.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Ae:function(e){var o=this.__zT.getWindow();

if(o&&o.qx){alert(o.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__Af:function(){var eE=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
eE.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(bN),er);
this._runbutton.addListener(dN,this.runSample,this);
this._runbutton.setToolTipText(by);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(cu),co);
this._stopbutton.addListener(dN,this.stopSample,this);
this._stopbutton.setToolTipText(cl);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(dG);
var eR=new qx.ui.toolbar.Button(this.tr(bL),bg);
eR.addListener(dN,this.playPrev,this);
eR.setToolTipText(ci);
this._navPart.add(eR);
var eU=new qx.ui.toolbar.Button(this.tr(ei),bC);
eU.addListener(dN,this.playNext,this);
eU.setToolTipText(dB);
this._navPart.add(eU);
var eN=new qx.ui.toolbar.Button(this.tr(dh),cy);
eN.addListener(dN,this.__Aa,this);
eN.setToolTipText(ee);
this._navPart.add(eN);
var eD=new qx.ui.toolbar.Button(this.tr(cC),bA);
eD.addListener(dN,this.__Ac,this);
eD.setToolTipText(bG);
eD.setEnabled(false);
this.__zV=eD;
this._navPart.add(eD);
var eF=new qx.ui.toolbar.Part;
eE.add(eF);
var eQ=new qx.ui.menu.Menu;
var eL=new qx.ui.menu.RadioButton(ed);
var eJ=new qx.ui.menu.RadioButton(db);
eL.setUserData(dK,dr);
eL.setValue(true);
eJ.setUserData(dK,cm);
var eS=new qx.ui.form.RadioGroup(eL,eJ);
eS.addListener(cL,this.__Ar,this);
eQ.add(eL);
eQ.add(eJ);
var eB=new qx.ui.toolbar.MenuButton(this.tr(bD),bY,eQ);
eB.setToolTipText(bU);
eF.add(eB);
var eH=new qx.ui.menu.Menu;
var eI=new qx.ui.menu.Button(this.tr(bf));
eI.setCommand(this._cmdObjectSummary);
eH.add(eI);
var eT=new qx.ui.menu.Button(this.tr(dc));
eT.setCommand(this._cmdNamespacePollution);
eH.add(eT);
var eO=new qx.ui.menu.Button(this.tr(dd));
eO.setCommand(this._cmdDisposeSample);
eH.add(eO);
var eP=new qx.ui.toolbar.MenuButton(this.tr(bF),cB,eH);
eP.setToolTipText(cT);
eF.add(eP);
var eC=new qx.ui.toolbar.Part;
eE.addSpacer();
eE.add(eC);
var eV=new qx.ui.toolbar.RadioButton(cb,bT);
eV.setToolTipText(di);
var eM=new qx.ui.toolbar.RadioButton(bP,bO);
eM.setToolTipText(eg);
var eK=new qx.ui.toolbar.RadioButton(ck,cq);
eK.setToolTipText(bE);
eV.setUserData(dK,cG);
eM.setUserData(dK,bp);
eK.setUserData(dK,bv);
eC.add(eV);
eC.add(eM);
eC.add(eK);
var eG=this.viewGroup=new qx.ui.form.RadioGroup;
eG.setAllowEmptySelection(true);
eG.add(eV,eM,eK);
return eE;
},__Ag:function(){var J=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
J.addListener(cc,this.__Al,this);
this.__zT=J;
return J;
},__Ah:function(){var fq=new qx.ui.layout.VBox(0,bW,dj);
fq.setAlignX(dR);
var fs=new qx.ui.container.Composite(fq);
var fo=new qx.ui.decoration.Background().set({backgroundColor:dv});
fs.setDecorator(fo);
var fr=new qx.ui.form.Button(this.tr(eo),el);
fr.setAllowGrowX(false);
fr.setMargin(5);
fr.addListener(dN,function(){this.logappender.clear();
},this);
fs.add(fr,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(dJ,dJ);
this.f2.setFont(dT);
this.f2.setBackgroundColor(cH);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var fp=document.createElement(dQ);
this.logelem=document.createElement(dQ);
this.logelem.style.padding=bm;
this.logappender.setElement(this.logelem);
fp.appendChild(this.logelem);
this.f2.getContentElement().useElement(fp);
fs.add(this.f2,{flex:1});
return fs;
},__Ai:function(){var a=new qx.ui.embed.Html(bH);
a.setOverflow(dJ,dJ);
a.setFont(dT);
a.setBackgroundColor(cH);
this.widgets[br]=a;
a.getContentElement().setAttribute(dP,bo);
return a;
},__Aj:function(){var et=new qx.ui.embed.Html(cd);
et.setOverflow(dJ,dJ);
et.setFont(dT);
et.setBackgroundColor(cH);
this.widgets[bt]=et;
et.getContentElement().setAttribute(dP,bo);
return et;
},__Ak:function(){var H=new qx.ui.tree.Tree();
var G=new qx.ui.tree.TreeFolder(ek);
H.setAppearance(ef);
H.setRoot(G);
H.setSelection([G]);
this.tree=this.widgets[da]=H;
H.addListener(cL,this.treeGetSelection,this);
H.addListener(es,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return H;
},treeGetSelection:function(e){var q=this.tree.getSelection()[0];
var v=q.getUserData(cM);
this.tests.selected=this.tests.handler.getFullName(v);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var P=this._sampleToTreeNodeMap;
var V=null;
var Y=null;
var X=/\?autorun=true/.test(location.href);
var U=this._history.getState();
var S=U.match(/([^~]+)~/);

if(S){V=S[1];
}else{var Q=U.match(/([^~][\w]*)/);

if(Q){V=Q[1];

if(X){this.setPlayDemos(dE);
}}else{V=cx;

if(X){this.setPlayDemos(dU);
}}}function W(K,L){var O=L.getChildren();
var t;

for(var i=0;i<O.length;i++){var N=O[i];

if(N.hasChildren()){t=new qx.ui.tree.TreeFolder(R.polish(N.label));
t.setUserData(ep,false);
t.setUserData(dW,N);
W(t,t.getUserData(dW));

if(N.label==V){Y=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(R.polish(N.label));
t.setUserData(cJ,N.tags);
var M=N.pwd().slice(1).join(dM)+dM+N.label;
P[M]=t;
}K.add(t);
t.setUserData(cM,N);
N.widgetLinkFull=t;
}}var T=this.tests.handler.ttree;
var R=this;
this.tree.setUserData(cM,T);
this.tree.getRoot().setOpen(true);
W(this.tree.getRoot(),T);

if(Y!=null){this.tree.setSelection([Y]);
}},runSample:function(e){if(e&&e.getType()===dN){if(this.tests.selected===dL){this.setPlayDemos(dU);
}else if(this.tests.selected.indexOf(cG)>0){this.setPlayDemos(dI);
}else{this.setPlayDemos(dE);
}}this._runbutton.setVisibility(dG);
this._stopbutton.setVisibility(dF);

if(this.tests.selected!=dL){var I=this.tests.selected.replace(dV,dM);
this.setCurrentSample(I);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(dI);
this._stopbutton.setVisibility(dG);
this._runbutton.setVisibility(dF);
},setCurrentSample:function(z){if(!z){return;
}
if(!this._sampleToTreeNodeMap){return;
}var A;
var B=this._sampleToTreeNodeMap[z];

if(B){B.getTree().setSelection([B]);
A=cV+z+bk+this.__zO;
}else{A=this.defaultUrl;
}
if(this.__zT.getSource()==A){this.__zT.reload();
}else{this.__zU=false;
this.__zT.setSource(A);
}this._currentSample=z;
this._currentSampleUrl=A;
},__Al:function(){var fR=this.__zT.getWindow();
var fS=fR.location.pathname+dL;
var ga=fS.indexOf(bu);

if(ga!=-1){fS=fS.substring(0,ga+1);
}var fY=this.__zT.getSource();

if(fY!=null&&fY!=this.defaultUrl){var fQ=fR.location.href;
var fW=fQ.indexOf(cD)+6;
var fT=fQ.indexOf(bu);
fT=fT==-1?fQ.length:fT;
var fU=fQ.substring(fW,fT).split(dM);
var fX=String.fromCharCode(187);

if(fU.length==2){var fO=fU[0];
fO=fO.charAt(0).toUpperCase()+fO.substring(1);
var fV=fU[1].replace(dp,dL).replace(ds,dH);
fV=fV.charAt(0).toUpperCase()+fV.substring(1);
var fP=cE+fX+dl+fX+dH+fO+dH+fX+dH+fV;
}else{var fP=cE+fX+dl+fX+dD;
}document.title=fP;
}if(this.getPlayDemos()!=dI){if(!fV){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(dG);
this._runbutton.setVisibility(dF);
}},__Am:function(e){var c=this.__zT.getWindow();

if(c&&c.qx&&c.qx.log&&c.qx.log.appender){if(!this.__zU){this.__zU=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{c.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace(dM,cF),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__An(this._currentSampleUrl);
}}}else{this.__zU=false;
}},filter:function(fA){var fI=new RegExp(eq+fA+cP,bX);
var fG=this.__zR.getRoot().getItems(true,true);
var fH=0;
var fB=0;

for(var i=0;i<fG.length;i++){var fJ=fG[i];
var parent=fJ.getParent();
var fF=fJ.getUserData(cJ);
var fC=false;

if(fF!=null){for(var j=0;j<fF.length;j++){fC=!!fF[j].match(fI);

if(fC){break;
}}}
if(fJ.getChildren().length==0){fB++;
}
if(fC||!fJ.getLabel().search(fI)||!parent.getLabel().search(fI)){if(fJ.getChildren().length==0){fH++;
}fJ.show();
fJ.getParent().setOpen(true);
fJ.getParent().show();
}else{fJ.exclude();
}}if(fA==dL){var fE=this.__zR.getRoot().getItems(false,true);
var fD=this.__zR.getSelection();
for(var i=0;i<fE.length;i++){if(fE[i]==fD[0]||fE[i]==fD[0].getParent()){continue;
}fE[i].setOpen(false);
}}this.__zQ.setValue(fH+dM+fB);
},__An:function(fy){if(typeof (fy)!=ea){return;
}var fz=new qx.io.remote.Request(fy);
fz.setTimeout(180000);
fz.setProhibitCaching(false);
fz.addListener(cK,function(gb){var content=gb.getContent();
if(content){var ge=content.indexOf(dn,content.indexOf(dn)+7);
var gk=content.indexOf(em,ge);
var gd=content.indexOf(dC,gk+5);
var gf=content.substring(gk+5,gd);
var gi=gf.substring(4,gf.length-3)+dX;
var u=cn;
var gh=fy.split(dw);
var gg=gh[1];
var gj=gh[2];
gj=gj.substr(0,gj.indexOf(bK));
u+=dV+gg+dV+gj+dX;
gi=u;
var gc=new qx.io.remote.Request(gi);
gc.setTimeout(180000);
gc.setProhibitCaching(false);
gc.addListener(cK,function(x){var y=x.getContent();
this.__Ab(y);

if(y){this.widgets[bt].setHtml(this.__Ao(y,dt));
}},this);
gc.addListener(cI,function(fu){this.error("Couldn't load file: "+fy);
},this);
gc.send();
this.widgets[br].setHtml(this.__Ao(content));
}},this);
fz.addListener(cI,function(eW){this.error("Couldn't load file: "+fy);
},this);
fz.send();
},dataLoader:function(fv){var fw=new qx.io.remote.Request(fv);
fw.setTimeout(180000);
fw.setProhibitCaching(false);
fw.addListener(cK,function(eu){var content=eu.getContent();
var ev=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(ev);
this.leftReloadTree();
var p=this._history.getState();

if(p){this.setCurrentSample(p.replace(cF,dM));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
fw.addListener(cI,function(fx){this.error("Couldn't load file: "+fv);
},this);
fw.send();
},playPrev:function(e){this.setPlayDemos(dI);
var gv=this.tree.getSelection()[0];

if(gv){if(gv.getUserData(cN).getPrevSibling()){var gu=gv.getUserData(cN).getPrevSibling().widgetLinkFull;

if(gu){this.tree.setSelection([gu]);
this.runSample();
}}}},playNext:function(e){var bd=this.tree.getSelection()[0];

if(bd){try{var ba=bd.getUserData(cN).getChildren()[0].widgetLinkFull;
}catch(ft){try{var ba=bd.getUserData(cN).getNextSibling().widgetLinkFull;
}catch(ew){if(this.getPlayDemos()!==dE){try{var bc=bd.getTree();
var bb=bc.getNextSiblingOf(bd);
bb.setOpen(true);
var ba=bb.getChildren()[0];
}catch(fK){this.debug(fK);
}}}}
if(ba){this.tree.setSelection([ba]);
this.runSample();
}else{this._stopbutton.setVisibility(dG);
this._runbutton.setVisibility(dF);
}}},__Ao:function(gm,gn){var go=new qx.util.StringBuilder(bQ);
var gq=[];
var gr=new qx.util.StringBuilder();
var gs=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var gp=/^\s*<\/script>\s*$/i;
gm=gm.replace(/\r\n/g,bq).replace(/\r/g,bq);
var gq=gm.split(dS);
if(gn==dt){return dg+qx.dev.Tokenizer.javaScriptToHtml(gm)+cp;
}
for(var i=0;i<gq.length;i++){if(gs.exec(gq[i])){go.add(this.__Ap(qx.bom.String.escape(gr.get()+gq[i])));
gr.clear();
}else if(gp.exec(gq[i])){var gt=qx.dev.Tokenizer.javaScriptToHtml(gr.get());
go.add(cs,gt,ej);
gr.clear();
gr.add(gq[i],dS);
}else{gr.add(gq[i],dS);
}}go.add(this.__Ap(qx.bom.String.escape(gr.get())),cU);
return go.get();
},__Ap:function(fk){var fm=fk;
function fl(h){var s=new qx.util.StringBuilder(arguments[1],bM,arguments[2],dk);
var k;
var l=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){k=arguments[i];

if(k==dM){l=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(k))!=null){s.add(bB,r[1],ch,r[2].replace(/\s*$/,dL),dk);
}}}s.add((l?dM:dL));
}s.add(dz);
return s.get();
}fm=fm.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,fl);
return fm;
},polish:function(g){return g.replace(dp,dL).replace(ds,dH);
},__Aq:function(){var w=this.__zT.getWindow();
var fn;

if(w.qx&&w.qx.log&&w.qx.log.Logger){fn=w.qx.log.Logger;
fn.register(this.logappender);
fn.clear();
fn.unregister(this.logappender);
}},__Ar:function(e){this.__zO=e.getData()[0].getUserData(dK);
this.runSample();
},__As:function(){var E=new qx.ui.layout.HBox();
var C=new qx.ui.container.Composite(E);
C.setAppearance(cW);
var F=new qx.ui.basic.Label(be);
var D=new qx.ui.basic.Label(cE+qx.core.Setting.get(dO));
C.add(F);
C.add(new qx.ui.core.Spacer,{flex:1});
C.add(D);
return C;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(bh,bJ,bz,bn,cA,bI,bR,cf,bV,dx,eh,dA,dy,cQ,cz,cg);
}});
})();
(function(){var P="_applyLayoutChange",O="top",N="left",M="height",L="middle",K="Decorator",J="center",I="_applyReversed",H="qx.debug",G="bottom",B="' is not supported by the VBox layout!",F="qx.ui.layout.VBox",E="flex",A="Integer",z="The property '",D="right",C="Boolean";
qx.Class.define(F,{extend:qx.ui.layout.Abstract,construct:function(bp,bq,br){arguments.callee.base.call(this);

if(bp){this.setSpacing(bp);
}
if(bq){this.setAlignY(bq);
}
if(br){this.setSeparator(br);
}},properties:{alignY:{check:[O,L,G],init:O,apply:P},alignX:{check:[N,J,D],init:N,apply:P},spacing:{check:A,init:0,apply:P},separator:{check:K,nullable:true,apply:P},reversed:{check:C,init:false,apply:I}},members:{__dS:null,__dT:null,__dU:null,__dV:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__dW:function(){var y=this._getLayoutChildren();
var length=y.length;
var u=false;
var t=this.__dS&&this.__dS.length!=length&&this.__dT&&this.__dS;
var w;
var v=t?this.__dS:new Array(length);
var x=t?this.__dT:new Array(length);
if(this.getReversed()){y=y.concat().reverse();
}for(var i=0;i<length;i++){w=y[i].getLayoutProperties();

if(w.height!=null){v[i]=parseFloat(w.height)/100;
}
if(w.flex!=null){x[i]=w.flex;
u=true;
}else{x[i]=0;
}}if(!t){this.__dS=v;
this.__dT=x;
}this.__dU=u;
this.__dV=y;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(H,{"on":function(r,name,s){this.assert(name===E||name===M,z+name+B);

if(name==M){this.assertMatch(s,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(s);
this.assert(s>=0);
}},"off":null}),renderLayout:function(Q,R){if(this._invalidChildrenCache){this.__dW();
}var Y=this.__dV;
var length=Y.length;
var bj=qx.ui.layout.Util;
var bi=this.getSpacing();
var bm=this.getSeparator();

if(bm){var V=bj.computeVerticalSeparatorGaps(Y,bi,bm);
}else{var V=bj.computeVerticalGaps(Y,bi,true);
}var i,T,U,bd;
var be=[];
var bk=V;

for(i=0;i<length;i+=1){bd=this.__dS[i];
U=bd!=null?Math.floor((R-V)*bd):Y[i].getSizeHint().height;
be.push(U);
bk+=U;
}if(this.__dU&&bk!=R){var bb={};
var bh,bl;

for(i=0;i<length;i+=1){bh=this.__dT[i];

if(bh>0){ba=Y[i].getSizeHint();
bb[i]={min:ba.minHeight,value:be[i],max:ba.maxHeight,flex:bh};
}}var W=bj.computeFlexOffsets(bb,R,bk);

for(i in W){bl=W[i].offset;
be[i]+=bl;
bk+=bl;
}}var top=Y[0].getMarginTop();
if(bk<R&&this.getAlignY()!=O){top=R-bk;

if(this.getAlignY()===L){top=Math.round(top/2);
}}var ba,bo,bf,U,bc,bg,X;
this._clearSeparators();
if(bm){var bn=qx.theme.manager.Decoration.getInstance().resolve(bm).getInsets();
var S=bn.top+bn.bottom;
}for(i=0;i<length;i+=1){T=Y[i];
U=be[i];
ba=T.getSizeHint();
bg=T.getMarginLeft();
X=T.getMarginRight();
bf=Math.max(ba.minWidth,Math.min(Q-bg-X,ba.maxWidth));
bo=bj.computeHorizontalAlignOffset(T.getAlignX()||this.getAlignX(),bf,Q,bg,X);
if(i>0){if(bm){top+=bc+bi;
this._renderSeparator(bm,{top:top,left:0,height:S,width:Q});
top+=S+bi+T.getMarginTop();
}else{top+=bj.collapseMargins(bi,bc,T.getMarginTop());
}}T.renderLayout(bo,top,bf,U);
top+=U;
bc=T.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__dW();
}var g=qx.ui.layout.Util;
var q=this.__dV;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__dT[i];
var d=this.__dS[i];

if(m){c+=b.minHeight;
}else if(d){e=Math.max(e,Math.round(b.minHeight/d));
}else{c+=b.height;
}p=n.getMarginLeft()+n.getMarginRight();
if((b.width+p)>h){h=b.width+p;
}if((b.minWidth+p)>a){a=b.minWidth+p;
}}c+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeVerticalSeparatorGaps(q,k,o);
}else{var j=g.computeVerticalGaps(q,k,true);
}return {minHeight:c+j,height:f+j,minWidth:a,width:h};
}},destruct:function(){this.__dS=this.__dT=this.__dV=null;
}});
})();
(function(){var bb="splitter",ba="slider",Y="mousedown",X="mouseout",W="mousemove",V="mouseup",U="losecapture",T="active",S="horizontal",R="vertical",br="knob",bq="Integer",bp="height",bo="row-resize",bn="move",bm="maxHeight",bl="width",bk="_applyOrientation",bj="mouseover",bi="splitpane",bg="qx.ui.splitpane.Pane",bh="_applyOffset",be="minHeight",bf="minWidth",bc="col-resize",bd="maxWidth";
qx.Class.define(bg,{extend:qx.ui.core.Widget,construct:function(i){arguments.callee.base.call(this);
this.__kx=[];
if(i){this.setOrientation(i);
}else{this.initOrientation();
}this.addListener(Y,this._onMouseDown);
this.addListener(V,this._onMouseUp);
this.addListener(W,this._onMouseMove);
this.addListener(X,this._onMouseOut);
this.addListener(U,this._onMouseUp);
},properties:{appearance:{refine:true,init:bi},offset:{check:bq,init:6,apply:bh},orientation:{init:S,check:[S,R],apply:bk}},members:{__ky:null,__kz:false,__kA:null,__kB:null,__kC:null,__kD:null,__kE:null,__kx:null,_createChildControlImpl:function(B){var C;

switch(B){case ba:C=new qx.ui.splitpane.Slider(this);
C.exclude();
this._add(C,{type:B});
break;
case bb:C=new qx.ui.splitpane.Splitter(this);
this._add(C,{type:B});
C.addListener(bn,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){C.addListener(bj,this._onSplitterMouseOver,C);
}break;
}return C||arguments.callee.base.call(this,B);
},_applyOrientation:function(l,m){var n=this.getChildControl(ba);
var q=this.getChildControl(bb);
this.__kC=l===S;
var p=this._getLayout();

if(p){p.dispose();
}var o=l===R?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(o);
q.removeState(m);
q.addState(l);
q.getChildControl(br).removeState(m);
q.getChildControl(br).addState(l);
n.removeState(m);
n.addState(l);
},_applyOffset:function(N,O){var P=this.getChildControl(bb);

if(O===0){P.removeListener(Y,this._onMouseDown,this);
P.removeListener(W,this._onMouseMove,this);
P.removeListener(X,this._onMouseOut,this);
P.removeListener(V,this._onMouseUp,this);
P.removeListener(U,this._onMouseUp,this);
this.addListener(Y,this._onMouseDown);
this.addListener(V,this._onMouseUp);
this.addListener(W,this._onMouseMove);
this.addListener(X,this._onMouseOut);
this.addListener(U,this._onMouseUp);
}
if(N===0){this.removeListener(Y,this._onMouseDown);
this.removeListener(V,this._onMouseUp);
this.removeListener(W,this._onMouseMove);
this.removeListener(X,this._onMouseOut);
this.removeListener(U,this._onMouseUp);
P.addListener(Y,this._onMouseDown,this);
P.addListener(W,this._onMouseMove,this);
P.addListener(X,this._onMouseOut,this);
P.addListener(V,this._onMouseUp,this);
P.addListener(U,this._onMouseUp,this);
}},add:function(I,J){if(J==null){this._add(I);
}else{this._add(I,{flex:J});
}this.__kx.push(I);
},remove:function(Q){this._remove(Q);
qx.lang.Array.remove(this.__kx,Q);
},getChildren:function(){return this.__kx;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var D=this.getChildControl(bb);
var F=D.getContainerLocation();
var E=this.getContentLocation();
this.__ky=this.__kC?e.getDocumentLeft()-F.left+E.left:e.getDocumentTop()-F.top+E.top;
var H=this.getChildControl(ba);
var G=D.getBounds();
H.setUserBounds(G.left,G.top,G.width,G.height);
H.setZIndex(D.getZIndex()+1);
H.show();
this.__kz=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__kz){this.__kG();
var j=this.getChildControl(ba);
var k=this.__kD;

if(this.__kC){j.setDomLeft(k);
}else{j.setDomTop(k);
}e.stop();
}else{this.__kF();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__kF();
},_onMouseUp:function(e){if(!this.__kz){return;
}this._finalizeSizes();
var r=this.getChildControl(ba);
r.exclude();
this.__kz=false;
this.releaseCapture();
this.__kF();
e.stop();
},_onSplitterMove:function(){this.__kF();
},_onSplitterMouseOver:function(){this.addState(T);
},_finalizeSizes:function(){var v=this.__kD;
var s=this.__kE;

if(v==null){return;
}var z=this._getChildren();
var w=z[2];
var t=z[3];
var u=w.getLayoutProperties().flex;
var A=t.getLayoutProperties().flex;
if((u!=0)&&(A!=0)){w.setLayoutProperties({flex:v});
t.setLayoutProperties({flex:s});
}else{if(this.__kC){w.setWidth(v);
t.setWidth(s);
}else{w.setHeight(v);
t.setHeight(s);
}}},_isNear:function(){var a=this.getChildControl(bb);
var c=a.getBounds();
var f=a.getContainerLocation();
var b=this.getOffset();
if(!f){return;
}var g=this.__kA;
var h=c.width;
var d=f.left;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}var g=this.__kB;
var h=c.height;
var d=f.top;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}return true;
},__kF:function(){var L=this.getChildControl(bb);
var M=this.getApplicationRoot();
if(this.__kz||this._isNear()){var K=this.__kC?bc:bo;
this.setCursor(K);
M.setGlobalCursor(K);
L.addState(T);
}else if(L.hasState(T)){this.resetCursor();
M.resetGlobalCursor();
L.removeState(T);
}},__kG:function(){if(this.__kC){var bu=bf,bB=bl,bv=bd,bz=this.__kA;
}else{var bu=be,bB=bp,bv=bm,bz=this.__kB;
}var bA=this._getChildren();
var bs=bA[2].getSizeHint();
var bx=bA[3].getSizeHint();
var by=bA[2].getBounds()[bB]+bA[3].getBounds()[bB];
var bw=bz-this.__ky;
var bt=by-bw;
if(bw<bs[bu]){bt-=bs[bu]-bw;
bw=bs[bu];
}else if(bt<bx[bu]){bw-=bx[bu]-bt;
bt=bx[bu];
}if(bw>bs[bv]){bt+=bw-bs[bv];
bw=bs[bv];
}else if(bt>bx[bv]){bw+=bt-bx[bv];
bt=bx[bv];
}this.__kD=bw;
this.__kE=bt;
},_isActiveDragSession:function(){return this.__kz;
},_setLastMousePosition:function(x,y){this.__kA=x;
this.__kB=y;
}},destruct:function(){this.__kx=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(f){arguments.callee.base.call(this);
if(f.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(g){var h;

switch(g){case d:h=new qx.ui.basic.Image;
this._add(h);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var H="_applyLayoutChange",G="left",F="width",E="center",D="top",C="Decorator",B="middle",A="_applyReversed",z="qx.debug",y="bottom",t="' is not supported by the HBox layout!",x="Boolean",w="flex",s="right",r="Integer",v="The property '",u="qx.ui.layout.HBox";
qx.Class.define(u,{extend:qx.ui.layout.Abstract,construct:function(bp,bq,br){arguments.callee.base.call(this);

if(bp){this.setSpacing(bp);
}
if(bq){this.setAlignX(bq);
}
if(br){this.setSeparator(br);
}},properties:{alignX:{check:[G,E,s],init:G,apply:H},alignY:{check:[D,B,y],init:D,apply:H},spacing:{check:r,init:0,apply:H},separator:{check:C,nullable:true,apply:H},reversed:{check:x,init:false,apply:A}},members:{__eO:null,__eP:null,__eQ:null,__eR:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__eS:function(){var bo=this._getLayoutChildren();
var length=bo.length;
var bl=false;
var bj=this.__eO&&this.__eO.length!=length&&this.__eP&&this.__eO;
var bm;
var bk=bj?this.__eO:new Array(length);
var bn=bj?this.__eP:new Array(length);
if(this.getReversed()){bo=bo.concat().reverse();
}for(var i=0;i<length;i++){bm=bo[i].getLayoutProperties();

if(bm.width!=null){bk[i]=parseFloat(bm.width)/100;
}
if(bm.flex!=null){bn[i]=bm.flex;
bl=true;
}else{bn[i]=0;
}}if(!bj){this.__eO=bk;
this.__eP=bn;
}this.__eQ=bl;
this.__eR=bo;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(z,{"on":function(I,name,J){this.assert(name===w||name===F,v+name+t);

if(name==F){this.assertMatch(J,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(J);
this.assert(J>=0);
}},"off":null}),renderLayout:function(K,L){if(this._invalidChildrenCache){this.__eS();
}var R=this.__eR;
var length=R.length;
var bb=qx.ui.layout.Util;
var ba=this.getSpacing();
var be=this.getSeparator();

if(be){var O=bb.computeHorizontalSeparatorGaps(R,ba,be);
}else{var O=bb.computeHorizontalGaps(R,ba,true);
}var i,M,X,W;
var bd=[];
var S=O;

for(i=0;i<length;i+=1){W=this.__eO[i];
X=W!=null?Math.floor((K-O)*W):R[i].getSizeHint().width;
bd.push(X);
S+=X;
}if(this.__eQ&&S!=K){var U={};
var Y,bc;

for(i=0;i<length;i+=1){Y=this.__eP[i];

if(Y>0){T=R[i].getSizeHint();
U[i]={min:T.minWidth,value:bd[i],max:T.maxWidth,flex:Y};
}}var P=bb.computeFlexOffsets(U,K,S);

for(i in P){bc=P[i].offset;
bd[i]+=bc;
S+=bc;
}}var bi=R[0].getMarginLeft();
if(S<K&&this.getAlignX()!=G){bi=K-S;

if(this.getAlignX()===E){bi=Math.round(bi/2);
}}var T,top,N,X,Q,bg,V;
var ba=this.getSpacing();
this._clearSeparators();
if(be){var bf=qx.theme.manager.Decoration.getInstance().resolve(be).getInsets();
var bh=bf.left+bf.right;
}for(i=0;i<length;i+=1){M=R[i];
X=bd[i];
T=M.getSizeHint();
bg=M.getMarginTop();
V=M.getMarginBottom();
N=Math.max(T.minHeight,Math.min(L-bg-V,T.maxHeight));
top=bb.computeVerticalAlignOffset(M.getAlignY()||this.getAlignY(),N,L,bg,V);
if(i>0){if(be){bi+=Q+ba;
this._renderSeparator(be,{left:bi,top:0,width:bh,height:L});
bi+=bh+ba+M.getMarginLeft();
}else{bi+=bb.collapseMargins(ba,Q,M.getMarginLeft());
}}M.renderLayout(bi,top,X,N);
bi+=X;
Q=M.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__eS();
}var g=qx.ui.layout.Util;
var q=this.__eR;
var a=0,h=0,e=0;
var d=0,f=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
h+=b.width;
var m=this.__eP[i];
var c=this.__eO[i];

if(m){a+=b.minWidth;
}else if(c){e=Math.max(e,Math.round(b.minWidth/c));
}else{a+=b.width;
}p=n.getMarginTop()+n.getMarginBottom();
if((b.height+p)>f){f=b.height+p;
}if((b.minHeight+p)>d){d=b.minHeight+p;
}}a+=e;
var k=this.getSpacing();
var o=this.getSeparator();

if(o){var j=g.computeHorizontalSeparatorGaps(q,k,o);
}else{var j=g.computeHorizontalGaps(q,k,true);
}return {minWidth:a+j,width:h+j,minHeight:d,height:f};
}},destruct:function(){this.__eO=this.__eP=this.__eR=null;
}});
})();
(function(){var s="slider",r="type",q="flex",p="splitter",o="qx.ui.splitpane.VLayout",n="qx.debug",m="' is not supported by the split layout!",l="The property '";
qx.Class.define(o,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(n,{"on":function(t,name,u){this.assert(name===r||name===q,l+name+m);

if(name==q){this.assertNumber(u);
}
if(name==r){this.assertString(u);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var I,L;
var y,x,G,z;

for(var i=0;i<length;i++){I=M[i];
L=I.getLayoutProperties().type;

if(L===p){x=I;
}else if(L===s){G=I;
}else if(!y){y=I;
}else{z=I;
}}
if(y&&z){var O=y.getLayoutProperties().flex;
var B=z.getLayoutProperties().flex;

if(O==null){O=1;
}
if(B==null){B=1;
}var N=y.getSizeHint();
var E=x.getSizeHint();
var F=z.getSizeHint();
var A=N.height;
var J=E.height;
var K=F.height;

if(O>0&&B>0){var C=O+B;
var D=w-J;
var A=Math.round((D/C)*O);
var K=D-A;
var H=qx.ui.layout.Util.arrangeIdeals(N.minHeight,A,N.maxHeight,F.minHeight,K,F.maxHeight);
A=H.begin;
K=H.end;
}else if(O>0){A=w-J-K;

if(A<N.minHeight){A=N.minHeight;
}
if(A>N.maxHeight){A=N.maxHeight;
}}else if(B>0){K=w-A-J;

if(K<F.minHeight){K=F.minHeight;
}
if(K>F.maxHeight){K=F.maxHeight;
}}y.renderLayout(0,0,v,A);
x.renderLayout(0,A,v,J);
z.renderLayout(0,A+J,v,K);
}else{x.renderLayout(0,0,0,0);
if(y){y.renderLayout(0,0,v,w);
}else if(z){z.renderLayout(0,0,v,w);
}}},_computeSizeHint:function(){var k=this._getLayoutChildren();
var length=k.length;
var c,b,j;
var d=0,f=0,e=0;
var g=0,h=0,a=0;

for(var i=0;i<length;i++){c=k[i];
j=c.getLayoutProperties();
if(j.type===s){continue;
}b=c.getSizeHint();
d+=b.minHeight;
f+=b.height;
e+=b.maxHeight;

if(b.minWidth>g){g=b.minWidth;
}
if(b.width>h){h=b.width;
}
if(b.maxWidth>a){a=b.maxWidth;
}}return {minHeight:d,height:f,maxHeight:e,minWidth:g,width:h,maxWidth:a};
}}});
})();
(function(){var k="slider",j="type",h="flex",g="splitter",f="qx.ui.splitpane.HLayout",e="' is not supported by the split layout!",d="The property '",c="qx.debug";
qx.Class.define(f,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(a,name,b){this.assert(name===j||name===h,d+name+e);

if(name==h){this.assertNumber(b);
}
if(name==j){this.assertString(b);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var J,L;
var y,x,G,z;

for(var i=0;i<length;i++){J=M[i];
L=J.getLayoutProperties().type;

if(L===g){x=J;
}else if(L===k){G=J;
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
if(t.type===k){continue;
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
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var N="showingPlaceholder",M="color",L="",K="none",J="qx.client",I="changeValue",H="Boolean",G="qx.event.type.Data",F="readonly",E="input",bA="focusin",bz="visibility",by="focusout",bx="hidden",bw="absolute",bv="readOnly",bu="text",bt="_applyTextAlign",bs="px",br="RegExp",U=")",V="syncAppearance",S="gecko",T="A",Q="change",R="textAlign",O="focused",P="center",W="visible",X="disabled",bf="url(",bd="String",bj="resize",bh="qx.ui.form.AbstractField",bn="transparent",bl="off",ba="spellcheck",bq="false",bp="right",bo="PositiveInteger",Y="mshtml",bb="abstract",bc="block",be="webkit",bg="_applyReadOnly",bi="_applyPlaceholder",bk="left",bm="qx/static/blank.gif";
qx.Class.define(bh,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bb,construct:function(D){arguments.callee.base.call(this);

if(D!=null){this.setValue(D);
}this.getContentElement().addListener(Q,this._onChangeContent,this);
this.addListener(V,this._syncPlaceholder,this);
},events:{"input":G,"changeValue":G},properties:{textAlign:{check:[bk,P,bp],nullable:true,themeable:true,apply:bt},readOnly:{check:H,apply:bg,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bo,init:Infinity},liveUpdate:{check:H,init:false},placeholder:{check:bd,nullable:true,apply:bi},filter:{check:br,nullable:true,init:null}},members:{__p:true,__q:null,getFocusElement:function(){var x=this.getContentElement();

if(x){return x;
}},_createInputElement:function(){return new qx.html.Input(bu);
},renderLayout:function(o,top,p,q){var r=this._updateInsets;
var v=arguments.callee.base.call(this,o,top,p,q);
if(!v){return;
}var t=v.size||r;
var w=bs;

if(t||v.local||v.margin){var s=this.getInsets();
var innerWidth=p-s.left-s.right;
var innerHeight=q-s.top-s.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var u=this.getContentElement();

if(r){this.__s().setStyles({"left":s.left+w,"top":s.top+w});
}
if(t){this.__s().setStyles({"width":innerWidth+w,"height":innerHeight+w});
u.setStyles({"width":innerWidth+w,"height":innerHeight+w});
}},_createContentElement:function(){var y=this._createInputElement();
y.setStyles({"border":K,"padding":0,"margin":0,"display":bc,"background":bn,"outline":K,"appearance":K,"position":bw,"autoComplete":bl});
y.setSelectable(this.getSelectable());
y.setEnabled(this.getEnabled());
y.addListener(E,this._onHtmlInput,this);
if(qx.core.Variant.isSet(J,S)){y.setAttribute(ba,bq);
}if(qx.core.Variant.isSet(J,be)){y.setStyle(bj,K);
}if(qx.core.Variant.isSet(J,Y)){y.setStyles({backgroundImage:bf+qx.util.ResourceManager.getInstance().toUri(bm)+U});
}return y;
},_applyEnabled:function(bC,bD){arguments.callee.base.call(this,bC,bD);
this.getContentElement().setEnabled(bC);

if(bC){this._showPlaceholder();
}else{this._removePlaceholder();
}},__r:{width:16,height:16},_getContentHint:function(){return {width:this.__r.width*10,height:this.__r.height||16};
},_applyFont:function(k,l){var m;

if(k){var n=qx.theme.manager.Font.getInstance().resolve(k);
m=n.getStyles();
}else{m=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(m);
this.__s().setStyles(m);
if(k){this.__r=qx.bom.Label.getTextSize(T,m);
}else{delete this.__r;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(z,A){if(z){this.getContentElement().setStyle(M,qx.theme.manager.Color.getInstance().resolve(z));
this.__s().setStyle(M,qx.theme.manager.Color.getInstance().resolve(z));
}else{this.getContentElement().removeStyle(M);
this.__s().removeStyle(M);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__r;
},_onHtmlInput:function(e){var i=e.getData();
var h=true;
this.__p=false;
if(this.getFilter()!=null){var j=L;
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
}if(h){this.fireDataEvent(E,i);
if(this.getLiveUpdate()){this.fireNonBubblingEvent(I,qx.event.type.Data,[i]);
}}},setValue:function(a){if(a===null){if(this.__p){return a;
}a=L;
this.__p=true;
}else{this.__p=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(a)){var c=this.getContentElement();

if(a.length>this.getMaxLength()){a=a.substr(0,this.getMaxLength());
}
if(c.getValue()!=a){var d=c.getValue();
c.setValue(a);
var b=this.__p?null:a;
this.fireNonBubblingEvent(I,qx.event.type.Data,[b,d]);
}this._showPlaceholder();
return a;
}throw new Error("Invalid value type: "+a);
},getValue:function(){var bB=this.getContentElement().getValue();
return this.__p?null:bB;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__p=e.getData()===null;
this.fireNonBubblingEvent(I,qx.event.type.Data,[e.getData()]);
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bL,bM){this.getContentElement().setTextSelection(bL,bM);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var C=this.getValue()||L;
var B=this.getPlaceholder();

if(B!=null&&C==L&&!this.hasState(O)&&!this.hasState(X)){if(this.hasState(N)){this._syncPlaceholder();
}else{this.addState(N);
}}},_removePlaceholder:function(){if(this.hasState(N)){this.__s().setStyle(bz,bx);
this.removeState(N);
}},_syncPlaceholder:function(){if(this.hasState(N)){this.__s().setStyle(bz,W);
}},__s:function(){if(this.__q==null){this.__q=new qx.html.Label();
this.__q.setStyles({"visibility":bx,"zIndex":6,"position":bw});
this.getContainerElement().add(this.__q);
}return this.__q;
},_applyPlaceholder:function(bE,bF){this.__s().setValue(bE);

if(bE!=null){this.addListener(bA,this._removePlaceholder,this);
this.addListener(by,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bA,this._removePlaceholder,this);
this.removeListener(by,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bJ,bK){this.getContentElement().setStyle(R,bJ);
},_applyReadOnly:function(bG,bH){var bI=this.getContentElement();
bI.setAttribute(bv,bG);

if(bG){this.addState(F);
this.setFocusable(false);
}else{this.removeState(F);
this.setFocusable(true);
}}},destruct:function(){this.__q=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(A){arguments.callee.base.call(this);
this.__c=A;
if(A===e||A===l){this.setNodeName(A);
}else{this.setNodeName(c);
}},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,y){arguments.callee.base.call(this,name,y);
var z=this.getDomElement();

if(name===n){qx.bom.Input.setValue(z,y);
}else if(name===o){qx.bom.Input.setWrap(z,y);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(q){this.__e=q;

if(!q){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:p});
}},"default":function(r){this.setAttribute(b,r===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(t){this.__d=t;
this.setAttribute(i,t?j:k);
if(qx.core.Variant.isSet(m,g)){var u=this.__e?t?null:p:p;
this.setStyle(d,u);
}},"default":function(B){this.setAttribute(i,B?j:k);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(n,v);
}return this;
},getValue:function(){var s=this.getDomElement();

if(s){return qx.bom.Input.getValue(s);
}return this._getProperty(n)||h;
},setWrap:function(x){if(this.__c===l){this._setProperty(o,x);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var bd="change",bc="input",bb="checkbox",ba="radio",Y="textarea",X="qx.client",W="text",V="password",U="keypress",T="propertychange",P="select-multiple",S="checked",R="value",O="select",N="qx.event.handler.Input",Q="Enter";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(C,D){var E=C.tagName.toLowerCase();

if(D===bc&&(E===bc||E===Y)){return true;
}
if(D===bd&&(E===bc||E===Y||E===O)){return true;
}return false;
},registerEvent:qx.core.Variant.select(X,{"mshtml":function(I,J,K){if(!I.__h){var L=I.tagName.toLowerCase();
var M=I.type;

if(M===W||M===V||L===Y||M===bb||M===ba){qx.bom.Event.addNativeListener(I,T,this._onPropertyWrapper);
}
if(M!==bb&&M!==ba){qx.bom.Event.addNativeListener(I,bd,this._onChangeValueWrapper);
}this.__k(I,M);
I.__h=true;
}},"default":function(m,n,p){if(n===bc){this.__i(m);
}else if(n===bd){if(m.type===ba||m.type===bb){qx.bom.Event.addNativeListener(m,bd,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(m,bd,this._onChangeValueWrapper);
}this.__k(m,m.type);
}}}),__i:qx.core.Variant.select(X,{"mshtml":null,"webkit":function(A){var B=A.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&B==Y){qx.bom.Event.addNativeListener(A,U,this._onInputWrapper);
}qx.bom.Event.addNativeListener(A,bc,this._onInputWrapper);
},"default":function(a){qx.bom.Event.addNativeListener(a,bc,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(X,{"mshtml":function(w,x){if(w.__h){var y=w.tagName.toLowerCase();
var z=w.type;

if(z===W||z===V||y===Y||z===bb||z===ba){qx.bom.Event.removeNativeListener(w,T,this._onPropertyWrapper);
}
if(z!==bb&&z!==ba){qx.bom.Event.removeNativeListener(w,bd,this._onChangeValueWrapper);
}
try{delete w.__h;
}catch(F){w.__h=null;
}}},"default":function(q,r){if(r===bc){this.__i(q);
}else if(r===bd){if(q.type===ba||q.type===bb){qx.bom.Event.removeNativeListener(q,bd,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(q,bd,this._onChangeValueWrapper);
}}}}),__j:qx.core.Variant.select(X,{"mshtml":null,"webkit":function(s){var t=s.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&t==Y){qx.bom.Event.removeNativeListener(s,U,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(s,bc,this._onInputWrapper);
},"default":function(j){qx.bom.Event.removeNativeListener(j,bc,this._onInputWrapper);
}}),__k:qx.core.Variant.select(X,{"mshtml|opera":function(g,h){if(h===W||h===V){qx.event.Registration.addListener(g,U,function(e){if(e.getKeyIdentifier()===Q){qx.event.Registration.fireEvent(g,bd,qx.event.type.Data,[g.value]);
}});
}},"default":function(b,c){}}),_onInput:qx.event.GlobalError.observeMethod(function(e){var G=e.target;
qx.event.Registration.fireEvent(G,bc,qx.event.type.Data,[G.value]);
}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var f=e.target||e.srcElement;
var d=f.value;

if(f.type===P){var d=[];

for(var i=0,o=f.options,l=o.length;i<l;i++){if(o[i].selected){d.push(o[i].value);
}}}qx.event.Registration.fireEvent(f,bd,qx.event.type.Data,[d]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var k=e.target;

if(k.type===ba){if(k.checked){qx.event.Registration.fireEvent(k,bd,qx.event.type.Data,[k.value]);
}}else{qx.event.Registration.fireEvent(k,bd,qx.event.type.Data,[k.checked]);
}}),_onProperty:qx.core.Variant.select(X,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var u=e.target||e.srcElement;
var v=e.propertyName;

if(v===R&&(u.type===W||u.type===V||u.tagName.toLowerCase()===Y)){if(!u.__inValueSet){qx.event.Registration.fireEvent(u,bc,qx.event.type.Data,[u.value]);
}}else if(v===S){if(u.type===bb){qx.event.Registration.fireEvent(u,bd,qx.event.type.Data,[u.checked]);
}else if(u.checked){qx.event.Registration.fireEvent(u,bd,qx.event.type.Data,[u.value]);
}}}),"default":function(){}})},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var r="",q="select",p="qx.client",o="soft",n="off",m="text",k="Unsupported input type.",j="nowrap",h="radio",g="textarea",E="auto",D="qx.debug",C="input",B="option",A="value",z="number",y="qx.bom.Input",x="normal",w="mshtml",v="wrap",t="checkbox",u="select-one",s="on";
qx.Class.define(y,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(Y,ba,bb){if(qx.core.Variant.isSet(D,s)){qx.core.Assert.assertKeyInMap(Y,this.__f,k);
}var ba=ba?qx.lang.Object.clone(ba):{};
var bc;

if(Y===g||Y===q){bc=Y;
}else{bc=C;
ba.type=Y;
}return qx.bom.Element.create(bc,ba,bb);
},setValue:function(F,G){var L=F.nodeName.toLowerCase();
var I=F.type;
var Array=qx.lang.Array;
var M=qx.lang.Type;

if(typeof G===z){G+=r;
}
if((I===t||I===h)){if(M.isArray(G)){F.checked=Array.contains(G,F.value);
}else{F.checked=F.value==G;
}}else if(L===q){var H=M.isArray(G);
var N=F.options;
var J,K;

for(var i=0,l=N.length;i<l;i++){J=N[i];
K=J.getAttribute(A);

if(K==null){K=J.text;
}J.selected=H?Array.contains(G,K):G==K;
}
if(H&&G.length==0){F.selectedIndex=-1;
}}else if(I===m&&qx.core.Variant.isSet(p,w)){F.__g=true;
F.value=G;
F.__g=null;
}else{F.value=G;
}},getValue:function(O){var U=O.nodeName.toLowerCase();

if(U===B){return (O.attributes.value||{}).specified?O.value:O.text;
}
if(U===q){var P=O.selectedIndex;
if(P<0){return null;
}var V=[];
var X=O.options;
var W=O.type==u;
var T=qx.bom.Input;
var S;
for(var i=W?P:0,R=W?P+1:X.length;i<R;i++){var Q=X[i];

if(Q.selected){S=T.getValue(Q);
if(W){return S;
}V.push(S);
}}return V;
}else{return (O.value||r).replace(/\r/g,r);
}},setWrap:qx.core.Variant.select(p,{"mshtml":function(e,f){e.wrap=f?o:n;
},"gecko|webkit":function(a,b){var d=b?o:n;
var c=b?r:E;
a.setAttribute(v,d);
a.style.overflow=c;
},"default":function(bd,be){bd.style.whiteSpace=be?x:j;
}})}});
})();
(function(){var c="qx.ui.core.ISingleSelection",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeSelection":b},members:{getSelection:function(){return true;
},setSelection:function(a){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__kp",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__kp:null,getSelection:function(){var l=this.__kq().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(j){switch(j.length){case 0:this.resetSelection();
break;
case 1:this.__kq().setSelected(j[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+j.length+" items!");
}},resetSelection:function(){this.__kq().resetSelected();
},isSelected:function(i){return this.__kq().isSelected(i);
},isSelectionEmpty:function(){return this.__kq().isSelectionEmpty();
},getSelectables:function(){return this.__kq().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(g,b,a);
},__kq:function(){if(this.__kp==null){var k=this;
this.__kp=new qx.ui.core.SingleSelectionManager({getItems:function(){return k._getItems();
},isItemSelectable:function(m){if(k._isItemSelectable){return k._isItemSelectable(m);
}else{return m.isEnabled()&&m.isVisible();
}}});
this.__kp.addListener(f,this._onChangeSelected,this);
}this.__kp.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kp;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var k="_applyDynamic",j="changeSelection",h="Boolean",g="qx.ui.container.Stack";
qx.Class.define(g,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(j,this.__kW,this);
},properties:{dynamic:{check:h,init:false,apply:k}},members:{_applyDynamic:function(w){var y=this._getChildren();
var x=this.getSelection()[0];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z!=x){if(w){y[i].exclude();
}else{y[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(A){return A.isEnabled();
},__kW:function(e){var b=e.getOldData()[0];
var c=e.getData()[0];

if(b){if(this.isDynamic()){b.exclude();
}else{b.hide();
}}
if(c){c.show();
}},add:function(d){this._add(d);
var f=this.getSelection()[0];

if(!f){this.setSelection([d]);
}else if(f!==d){if(this.isDynamic()){d.exclude();
}else{d.hide();
}}},remove:function(u){this._remove(u);

if(this.getSelection()[0]===u){var v=this._getChildren()[0];

if(v){this.setSelection([v]);
}else{this.resetSelection();
}}},indexOf:function(a){return this._indexOf(a);
},getChildren:function(){return this._getChildren();
},previous:function(){var s=this.getSelection()[0];
var q=this._indexOf(s)-1;
var t=this._getChildren();

if(q<0){q=t.length-1;
}var r=t[q];
this.setSelection([r]);
},next:function(){var n=this.getSelection()[0];
var m=this._indexOf(n)+1;
var o=this._getChildren();
var p=o[m]||o[0];
this.setSelection([p]);
}}});
})();
(function(){var o="Boolean",n="qx.ui.core.SingleSelectionManager",m="qx.debug",l="__kk",k="Invalid selectionProvider!",j="changeSelected",h="on",g="__kl",f="__km",e="qx.event.type.Data";
qx.Class.define(n,{extend:qx.core.Object,construct:function(v){arguments.callee.base.call(this);

if(qx.core.Variant.isSet(m,h)){qx.core.Assert.assertInterface(v,qx.ui.core.ISingleSelectionProvider,k);
}this.__kk=v;
},events:{"changeSelected":e},properties:{allowEmptySelection:{check:o,init:true,apply:f}},members:{__kl:null,__kk:null,getSelected:function(){return this.__kl;
},setSelected:function(c){if(!this.__ko(c)){throw new Error("Could not select "+c+", because it is not a child element!");
}this.__kn(c);
},resetSelected:function(){this.__kn(null);
},isSelected:function(d){if(!this.__ko(d)){throw new Error("Could not check if "+d+" is selected,"+" because it is not a child element!");
}return this.__kl===d;
},isSelectionEmpty:function(){return this.__kl==null;
},getSelectables:function(){var a=this.__kk.getItems();
var b=[];

for(var i=0;i<a.length;i++){if(this.__kk.isItemSelectable(a[i])){b.push(a[i]);
}}return b;
},__km:function(t,u){if(!t){this.__kn(this.__kl);
}},__kn:function(p){var s=this.__kl;
var r=p;

if(r!=null&&s===r){return;
}
if(!this.isAllowEmptySelection()&&r==null){var q=this.getSelectables()[0];

if(q){r=q;
}}this.__kl=r;
this.fireDataEvent(j,r,s);
},__ko:function(w){var x=this.__kk.getItems();

for(var i=0;i<x.length;i++){if(x[i]===w){return true;
}}return false;
}},destruct:function(){if(this.__kk.toHashCode){this._disposeObjects(l);
}else{this.__kk=null;
}this._disposeObjects(g);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var D="",C="now uses 'qx.event.Idle' for polling.",B="qx.debug",A="The property 'timeoutInterval' has been deprected. The history manager",z="on",y='#',x="String",w="request",v="mshtml",u="Invalid attribute 'value'.",o="changeTitle",t="abstract",r="_applyState",n="qx.client",m="changeState",q="qx.bom.History",p="_applyTitle",s="qx.event.type.Data";
qx.Class.define(q,{extend:qx.core.Object,type:t,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(y)[0]+y;
this.__qs={};
this._setInitialState();
},events:{"request":s},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(n,v)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:x,event:o,nullable:true,apply:p},state:{check:x,event:m,nullable:true,apply:r}},members:{__qs:null,_applyState:function(d,e){this._writeState(d);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(b){if(qx.lang.Type.isString(b)){return encodeURIComponent(b);
}return D;
},_decode:function(h){if(qx.lang.Type.isString(h)){return decodeURIComponent(h);
}return D;
},_applyTitle:function(E){if(E!=null){document.title=E||D;
}},addToHistory:function(f,g){if(!qx.lang.Type.isString(f)){f=f+D;
}
if(qx.lang.Type.isString(g)){this.setTitle(g);
this.__qs[f]=g;
}
if(this.getState()!==f){this._writeState(f);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(c){this.setState(c);
this.fireDataEvent(w,c);

if(this.__qs[c]!=null){this.setTitle(this.__qs[c]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(i){var j=this._baseUrl+(i||D);
var k=window.location;

if(j!=k.href){k.href=j;
}},_getHash:function(){var l=/#(.*)$/.exec(window.location.href);
return l&&l[1]?l[1]:D;
},setTimeoutInterval:function(a){if(qx.core.Variant.isSet(B,z)){qx.core.Assert.assertNumber(a,u);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(B,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(B,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}}},destruct:function(){this.__qs=null;
}});
})();
(function(){var f="hashchange",e="interval",d="qx.bom.NativeHistory",c="qx.client";
qx.Class.define(d,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__qu();
},members:{__qt:null,__qu:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__qt=qx.lang.Function.bind(this.__qw,this);
qx.bom.Event.addNativeListener(window,f,this.__qt);
}else{qx.event.Idle.getInstance().addListener(e,this.__qw,this);
}},__qv:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,f,this.__qt);
}else{qx.event.Idle.getInstance().removeListener(e,this.__qw,this);
}},__qw:function(){var b=this._readState();

if(qx.lang.Type.isString(b)&&b!=this.getState()){this._onHistoryLoad(b);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(c,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(a){this._setHash(this._encode(a));
}})},destruct:function(){this.__qv();
}});
})();
(function(){var t="interval",s="-1000px",r="mshtml",q="",p="qx.bom.IframeHistory",o="qx/static/blank.html",n="state",m='<html><body><div id="state">',l='</div></body></html>',k="hidden",h="qx.client",j="undefined",i="absolute";
if(qx.core.Variant.isSet(h,r)){qx.Class.define(p,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__qA();
},members:{__qx:null,__qy:false,__qz:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__qz=this._getHash();
},_setHash:function(y){arguments.callee.base.call(this,y);
this.__qz=this._encode(y);
},_readState:function(){if(!this.__qy){return this._decode(this._getHash());
}var f=this.__qx.contentWindow.document;
var g=f.getElementById(n);
return g?this._decode(g.innerText):q;
},_writeState:function(z){var z=this._encode(z);
this._setHash(z);
this.__qz=z;

try{var A=this.__qx.contentWindow.document;
A.open();
A.write(m+z+l);
A.close();
}catch(u){}},__qA:function(){this.__qE(function(){qx.event.Idle.getInstance().addListener(t,this.__qB,this);
});
},__qB:function(e){var d=null;
var c=this._getHash();

if(!this.__qD(c)){d=this.__qC(c);
}else{d=this._readState();
}
if(qx.lang.Type.isString(d)&&d!=this.getState()){this._onHistoryLoad(d);
}},__qC:function(B){B=this._decode(B);
this._writeState(B);
return B;
},__qD:function(b){return qx.lang.Type.isString(b)&&b==this.__qz;
},__qE:function(a){this.__qx=this.__qF();
document.body.appendChild(this.__qx);
this.__qG(function(){this._writeState(this.getState());

if(a){a.call(this);
}},this);
},__qF:function(){var C=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(o)});
C.style.visibility=k;
C.style.position=i;
C.style.left=s;
C.style.top=s;
return C;
},__qG:function(v,w,x){if(typeof x===j){x=0;
}
if(!this.__qx.contentWindow||!this.__qx.contentWindow.document){if(x>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__qG(v,w,++x);
},this,10);
return;
}this.__qy=true;
v.call(w||window);
}},destruct:function(){this.__qx=null;
qx.event.Idle.getInstance().addListener(t,this.__qB,this);
}});
}})();
(function(){var g="qx.event.handler.Iframe",f="load",e="iframe";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(h){qx.event.Registration.fireEvent(h,f);
})},members:{canHandleEvent:function(l,m){return l.tagName.toLowerCase()===e;
},registerEvent:function(i,j,k){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var k="qx.client",j="webkit",i="body",h="iframe",g="qx.bom.Iframe";
qx.Class.define(g,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(y,z){var y=y?qx.lang.Object.clone(y):{};
var A=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var B in A){if(y[B]==null){y[B]=A[B];
}}return qx.bom.Element.create(h,y,z);
},getWindow:qx.core.Variant.select(k,{"mshtml|gecko":function(n){try{return n.contentWindow;
}catch(x){return null;
}},"default":function(C){try{var D=this.getDocument(C);
return D?D.defaultView:null;
}catch(p){return null;
}}}),getDocument:qx.core.Variant.select(k,{"mshtml":function(r){try{var s=this.getWindow(r);
return s?s.document:null;
}catch(v){return null;
}},"default":function(w){try{return w.contentDocument;
}catch(o){return null;
}}}),getBody:function(l){try{var m=this.getDocument(l);
return m?m.getElementsByTagName(i)[0]:null;
}catch(t){return null;
}},setSource:function(d,e){try{if(this.getWindow(d)&&qx.dom.Hierarchy.isRendered(d)){try{if(qx.core.Variant.isSet(k,j)&&qx.bom.client.Platform.MAC){var f=this.getContentWindow();

if(f){f.stop();
}}this.getWindow(d).location.replace(e);
}catch(a){d.src=e;
}}else{d.src=e;
}}catch(u){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(b){var c=this.getDocument(b);

try{if(c&&c.location){return c.location.href;
}}catch(q){}return null;
}}});
})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,construct:function(q){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(q);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(s){this._shortcut.setEnabled(s);
},_applyShortcut:function(a){this._shortcut.setShortcut(a);
},execute:function(r){this.fireDataEvent(o,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var v="Unidentified",u="Boolean",t="+",s="short",r="keydown",q="",p="Control",o="keypress",n="-",m="PageUp",bd="Escape",bc="qx.event.type.Data",bb="_applyShortcut",ba="PrintScreen",Y="NumLock",X="5",W="8",V="execute",U="Meta",T="0",C="2",D="This message will be made private.",A="Shift",B="You can only specify one non modifier key!",y="3",z="/",w="_applyEnabled",x="String",E="changeEnabled",F="*",L="qx.bom.Shortcut",K="6",N="4",M="1",P="Alt",O="Not a valid key name for a shortcut: ",H="PageDown",S="Whitespaces are not allowed within shortcuts",R="Delete",Q="7",G="a",I="z",J="9";
qx.Class.define(L,{extend:qx.core.Object,construct:function(bf){arguments.callee.base.call(this);
this.__ni={};
this.__nj=null;

if(bf!=null){this.setShortcut(bf);
}this.initEnabled();
},events:{"execute":bc},properties:{enabled:{init:true,check:u,event:E,apply:w},shortcut:{check:x,apply:bb,nullable:true},autoRepeat:{check:u,init:false}},members:{__ni:q,__nj:q,execute:function(be){this.fireDataEvent(V,be);
},__nk:function(event){if(this.getEnabled()&&this.__nm(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__nl:function(event){if(this.getEnabled()&&this.__nm(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bj,bk){if(bj){qx.event.Registration.addListener(document.documentElement,r,this.__nk,this);
qx.event.Registration.addListener(document.documentElement,o,this.__nl,this);
}else{qx.event.Registration.removeListener(document.documentElement,r,this.__nk,this);
qx.event.Registration.removeListener(document.documentElement,o,this.__nl,this);
}},_applyShortcut:function(f,g){if(f){if(f.search(/[\s]+/)!=-1){var k=S;
this.error(k);
throw new Error(k);
}this.__ni={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__nj=null;
var h;
var a=[];

while(f.length>0&&h!=-1){h=f.search(/[-+]+/);
a.push((f.length==1||h==-1)?f:f.substring(0,h));
f=f.substring(h+1);
}var j=a.length;

for(var i=0;i<j;i++){var l=this.__no(a[i]);

switch(l){case p:case A:case U:case P:this.__ni[l]=true;
break;
case v:var k=O+a[i];
this.error(k);
throw k;
default:if(this.__nj){var k=B;
this.error(k);
throw k;
}this.__nj=l;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.__nm(e);
},__nm:function(e){var bl=this.__nj;

if(!bl){return ;
}if((!this.__ni.Shift&&e.isShiftPressed())||(this.__ni.Shift&&!e.isShiftPressed())||(!this.__ni.Control&&e.isCtrlPressed())||(this.__ni.Control&&!e.isCtrlPressed())||(!this.__ni.Meta&&e.isMetaPressed())||(this.__ni.Meta&&!e.isMetaPressed())||(!this.__ni.Alt&&e.isAltPressed())||(this.__ni.Alt&&!e.isAltPressed())){return false;
}
if(bl==e.getKeyIdentifier()){return true;
}return false;
},__nn:{esc:bd,ctrl:p,print:ba,del:R,pageup:m,pagedown:H,numlock:Y,numpad_0:T,numpad_1:M,numpad_2:C,numpad_3:y,numpad_4:N,numpad_5:X,numpad_6:K,numpad_7:Q,numpad_8:W,numpad_9:J,numpad_divide:z,numpad_multiply:F,numpad_minus:n,numpad_plus:t},__no:function(b){var c=qx.event.handler.Keyboard;
var d=v;

if(c.isValidKeyIdentifier(b)){return b;
}
if(b.length==1&&b>=G&&b<=I){return b.toUpperCase();
}b=b.toLowerCase();
var d=this.__nn[b]||qx.lang.String.firstUp(b);

if(c.isValidKeyIdentifier(d)){return d;
}else{return v;
}},toString:function(){var bi=this.__nj;
var bh=[];

for(var bg in this.__ni){if(this.__ni[bg]){bh.push(qx.locale.Key.getKeyName(s,bg));
}}
if(bi){bh.push(qx.locale.Key.getKeyName(s,bi));
}return bh.join(t);
}},destruct:function(){this.setEnabled(false);
this.__ni=this.__nj=null;
}});
})();
(function(){var bA="Control",bz="End",by="Left",bx="Meta",bw="Pause",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="key_full_Meta",W="PrintScreen",bH="NumLock",bI="Escape",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="Num",bC="key_full_Enter",bJ="key_full_Control",bK="qx.locale.Key",bk="Tabulator",bj="key_full_Space",bm="key_short_Meta",bl="key_short_PageUp",bo="key_short_Pause",bn="key_full_Down",bq="key_short_Apps",bp="key_short_Win",bi="key_full_Right",bh="key_short_Up",a="key_full_PageDown",b="key_full_Alt",c="PgDn",d="key_full_Escape",e="key_full_Insert",f="key_short_Space",g="key_short_Backspace",h="key_short_Home",i="full",j="key_short_Down",bO="PgUp",bN="_Mac",bM="key_short_CapsLock",bL="PageUp",bS="key_full_Up",bR="key_full_Home",bQ="key_full_Backspace",bP="PageDown",bU="CapsLock",bT="Ins",G="key_short_PrintScreen",H="Tab",E="key_full_Apps",F="key_short_Tab",K="key_short_End",L="_",I="Caps",J="key_short_NumLock",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="Esc",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bK,{statics:{getKeyName:function(cb,cc,cd){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(cb,[l,i]);
}var cf=s+cb+L+cc;
if(qx.bom.client.Platform.MAC&&cc==bA){cf+=bN;
}var ce=qx.locale.Manager.getInstance().translate(cf,[],cd);

if(ce==cf){return qx.locale.Key._keyNames[cf]||cc;
}else{return ce;
}}},defer:function(bV,bW,bX){var ca={};
var bY=qx.locale.Manager;
ca[bY.marktr(g)]=bf;
ca[bY.marktr(F)]=H;
ca[bY.marktr(f)]=be;
ca[bY.marktr(R)]=bb;
ca[bY.marktr(k)]=bc;
ca[bY.marktr(S)]=bu;
ca[bY.marktr(bG)]=bu;
ca[bY.marktr(bF)]=Y;
ca[bY.marktr(bM)]=I;
ca[bY.marktr(bm)]=bx;
ca[bY.marktr(N)]=B;
ca[bY.marktr(D)]=by;
ca[bY.marktr(bh)]=bd;
ca[bY.marktr(m)]=bg;
ca[bY.marktr(j)]=bv;
ca[bY.marktr(bl)]=bO;
ca[bY.marktr(Q)]=c;
ca[bY.marktr(K)]=bz;
ca[bY.marktr(h)]=bt;
ca[bY.marktr(bD)]=bT;
ca[bY.marktr(A)]=bE;
ca[bY.marktr(J)]=bB;
ca[bY.marktr(G)]=P;
ca[bY.marktr(r)]=ba;
ca[bY.marktr(bo)]=bw;
ca[bY.marktr(bp)]=br;
ca[bY.marktr(bq)]=bs;
ca[bY.marktr(bQ)]=bf;
ca[bY.marktr(O)]=bk;
ca[bY.marktr(bj)]=be;
ca[bY.marktr(bC)]=bb;
ca[bY.marktr(y)]=bc;
ca[bY.marktr(bJ)]=bA;
ca[bY.marktr(t)]=bA;
ca[bY.marktr(b)]=Y;
ca[bY.marktr(V)]=bU;
ca[bY.marktr(X)]=bx;
ca[bY.marktr(d)]=bI;
ca[bY.marktr(u)]=by;
ca[bY.marktr(bS)]=bd;
ca[bY.marktr(bi)]=bg;
ca[bY.marktr(bn)]=bv;
ca[bY.marktr(z)]=bL;
ca[bY.marktr(a)]=bP;
ca[bY.marktr(v)]=bz;
ca[bY.marktr(bR)]=bt;
ca[bY.marktr(e)]=M;
ca[bY.marktr(w)]=U;
ca[bY.marktr(x)]=bH;
ca[bY.marktr(p)]=W;
ca[bY.marktr(C)]=ba;
ca[bY.marktr(n)]=bw;
ca[bY.marktr(o)]=br;
ca[bY.marktr(E)]=bs;
bV._keyNames=ca;
}});
})();
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{__oC:false,_setAllowMenuOpenHover:function(p){this.__oC=p;
},_isAllowMenuOpenHover:function(){return this.__oC;
},_applySpacing:function(r,s){var t=this._getLayout();
r==null?t.resetSpacing():t.setSpacing(r);
},addSpacer:function(){var q=new qx.ui.core.Spacer;
this._add(q,{flex:1});
return q;
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}else if(c instanceof qx.ui.toolbar.Part){a.push.apply(a,c.getMenuButtons());
}}return a;
}}});
})();
(function(){var d="qx.ui.core.Spacer";
qx.Class.define(d,{extend:qx.ui.core.LayoutItem,construct:function(b,c){arguments.callee.base.call(this);
this.setWidth(b!=null?b:0);
this.setHeight(c!=null?c:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(a){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var b="toolbar-separator",a="qx.ui.toolbar.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true},width:{refine:true,init:0},height:{refine:true,init:0}}});
})();
(function(){var t="execute",s="toolTipText",r="icon",q="label",p="qx.ui.core.MExecutable",o="value",n="qx.event.type.Event",m="_applyCommand",l="enabled",k="menu",h="changeCommand",j="qx.ui.core.Command";
qx.Mixin.define(p,{events:{"execute":n},properties:{command:{check:j,apply:m,event:h,nullable:true}},members:{__iO:null,__iP:false,__iQ:null,_bindableProperties:[l,q,r,s,o,k],execute:function(){var u=this.getCommand();

if(u){if(this.__iP){this.__iP=false;
}else{this.__iP=true;
u.execute(this);
}}this.fireEvent(t);
},__iR:function(e){if(this.__iP){this.__iP=false;
return;
}this.__iP=true;
this.execute();
},_applyCommand:function(a,b){if(b!=null){b.removeListenerById(this.__iQ);
}
if(a!=null){this.__iQ=a.addListener(t,this.__iR,this);
}var f=this.__iO;

if(f==null){this.__iO=f={};
}
for(var i=0;i<this._bindableProperties.length;i++){var d=this._bindableProperties[i];
if(b!=null&&f[d]!=null){b.removeBinding(f[d]);
f[d]=null;
}if(a!=null&&qx.Class.hasProperty(this.constructor,d)){var c=a.get(d);

if(c==null){var g=this.get(d);
}f[d]=a.bind(d,this,d);
if(g){this.set(d,g);
}}}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

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
(function(){var r="pressed",q="hovered",p="changeVisibility",o="qx.ui.menu.Menu",n="submenu",m="Enter",l="contextmenu",k="changeMenu",j="qx.ui.form.MenuButton",i="abandoned",h="_applyMenu";
qx.Class.define(j,{extend:qx.ui.form.Button,construct:function(b,c,d){arguments.callee.base.call(this,b,c);
if(d!=null){this.setMenu(d);
}},properties:{menu:{check:o,nullable:true,apply:h,event:k}},members:{_applyMenu:function(v,w){if(w){w.removeListener(p,this._onMenuChange,this);
w.resetOpener();
}
if(v){v.addListener(p,this._onMenuChange,this);
v.setOpener(this);
v.removeState(n);
v.removeState(l);
}},open:function(s){var t=this.getMenu();

if(t){qx.ui.menu.Manager.getInstance().hideAll();
t.setOpener(this);
t.open();
if(s){var u=t.getSelectables()[0];

if(u){t.setSelectedButton(u);
}}}},_onMenuChange:function(e){var g=this.getMenu();

if(g.isVisible()){this.addState(r);
}else{this.removeState(r);
}},_onMouseDown:function(e){var f=this.getMenu();

if(f){if(!f.isVisible()){this.open();
}else{f.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(q);
},_onMouseOut:function(e){this.removeState(q);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case m:this.removeState(i);
this.addState(r);
var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}}e.stopPropagation();
}},_onKeyUp:function(e){}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}}});
})();
(function(){var i="pressed",h="hovered",g="inherit",f="qx.ui.menubar.Button",d="keydown",c="menubar-button",b="keyup";
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(l,m,n){arguments.callee.base.call(this,l,m,n);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(a){arguments.callee.base.call(this,a);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var k=this.getMenu();

if(k&&k.isVisible()&&!this.hasState(i)){this.addState(i);
}},_onMouseOver:function(e){this.addState(h);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var y="keypress",x="qx.debug",w="interval",v="keydown",u="on",t="mousedown",s="keyup",r="__lr",q="blur",p="Enter",h="__lt",o="__ls",l="Up",g="Escape",f="qx.ui.menu.Manager",k="Left",j="Down",m="Right",d="singleton",n="Space";
qx.Class.define(f,{type:d,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lr=[];
var D=document.body;
var E=qx.event.Registration;
E.addListener(window.document.documentElement,t,this._onMouseDown,this,true);
E.addListener(D,v,this._onKeyUpDown,this,true);
E.addListener(D,s,this._onKeyUpDown,this,true);
E.addListener(D,y,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,q,this.hideAll,this);
this.__ls=new qx.event.Timer;
this.__ls.addListener(w,this._onOpenInterval,this);
this.__lt=new qx.event.Timer;
this.__lt.addListener(w,this._onCloseInterval,this);
},members:{__lu:null,__lv:null,__ls:null,__lt:null,__lr:null,_getChild:function(Y,ba,bb,bc){var bd=Y.getChildren();
var length=bd.length;
var be;

for(var i=ba;i<length&&i>=0;i+=bb){be=bd[i];

if(be.isEnabled()&&!be.isAnonymous()){return be;
}}
if(bc){i=i==length?0:length-1;

for(;i!=ba;i+=bb){be=bd[i];

if(be.isEnabled()&&!be.isAnonymous()){return be;
}}}return null;
},_isInMenu:function(B){while(B){if(B instanceof qx.ui.menu.Menu){return true;
}B=B.getLayoutParent();
}return false;
},_getMenuButton:function(z){while(z){if(z instanceof qx.ui.menu.AbstractButton){return z;
}z=z.getLayoutParent();
}return null;
},add:function(F){if(qx.core.Variant.isSet(x,u)){if(!(F instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+F);
}}var G=this.__lr;
G.push(F);
F.setZIndex(1e6+G.length);
},remove:function(M){if(qx.core.Variant.isSet(x,u)){if(!(M instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+M);
}}var N=this.__lr;

if(N){qx.lang.Array.remove(N,M);
}},hideAll:function(){var a=this.__lr;

if(a){for(var i=a.length-1;i>=0;i--){a[i].exclude();
}}},getActiveMenu:function(){var bu=this.__lr;
return bu.length>0?bu[bu.length-1]:null;
},scheduleOpen:function(c){this.cancelClose(c);
if(c.isVisible()){if(this.__lu){this.cancelOpen(this.__lu);
}}else if(this.__lu!=c){this.__lu=c;
this.__ls.restartWith(c.getOpenInterval());
}},scheduleClose:function(b){this.cancelOpen(b);
if(!b.isVisible()){if(this.__lv){this.cancelClose(this.__lv);
}}else if(this.__lv!=b){this.__lv=b;
this.__lt.restartWith(b.getCloseInterval());
}},cancelOpen:function(C){if(this.__lu==C){this.__ls.stop();
this.__lu=null;
}},cancelClose:function(A){if(this.__lv==A){this.__lt.stop();
this.__lv=null;
}},_onOpenInterval:function(e){this.__ls.stop();
this.__lu.open();
this.__lu=null;
},_onCloseInterval:function(e){this.__lt.stop();
this.__lv.exclude();
this.__lv=null;
},_onMouseDown:function(e){var Q=e.getTarget();
Q=qx.ui.core.Widget.getWidgetByElement(Q);
if(Q==null){this.hideAll();
return;
}if(Q.getMenu&&Q.getMenu()&&Q.getMenu().isVisible()){return;
}if(this.__lr.length>0&&!this._isInMenu(Q)){this.hideAll();
}},__lw:{"Enter":1,"Space":1},__lx:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bv=this.getActiveMenu();

if(!bv){return;
}var bw=e.getKeyIdentifier();

if(this.__lx[bw]||(this.__lw[bw]&&bv.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bj=this.getActiveMenu();

if(!bj){return;
}var bk=e.getKeyIdentifier();
var bm=this.__lx[bk];
var bl=this.__lw[bk];

if(bm){switch(bk){case l:this._onKeyPressUp(bj);
break;
case j:this._onKeyPressDown(bj);
break;
case k:this._onKeyPressLeft(bj);
break;
case m:this._onKeyPressRight(bj);
break;
case g:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bl){var bn=bj.getSelectedButton();

if(bn){switch(bk){case p:this._onKeyPressEnter(bj,bn,e);
break;
case n:this._onKeyPressSpace(bj,bn,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(H){var I=H.getSelectedButton();
var J=H.getChildren();
var L=I?H.indexOf(I)-1:J.length-1;
var K=this._getChild(H,L,-1,true);
if(K){H.setSelectedButton(K);
}else{H.resetSelectedButton();
}},_onKeyPressDown:function(bf){var bg=bf.getSelectedButton();
var bi=bg?bf.indexOf(bg)+1:0;
var bh=this._getChild(bf,bi,1,true);
if(bh){bf.setSelectedButton(bh);
}else{bf.resetSelectedButton();
}},_onKeyPressLeft:function(R){var W=R.getOpener();

if(!W){return;
}if(W instanceof qx.ui.menu.Button){var T=W.getLayoutParent();
T.resetOpenedButton();
T.setSelectedButton(W);
}else if(W instanceof qx.ui.menubar.Button){var V=W.getMenuBar().getMenuButtons();
var S=V.indexOf(W);
if(S===-1){return;
}var X=null;
var length=V.length;

for(var i=1;i<=length;i++){var U=V[(S-i+length)%length];

if(U.isEnabled()){X=U;
break;
}}
if(X&&X!=W){X.open(true);
}}},_onKeyPressRight:function(bx){var bz=bx.getSelectedButton();
if(bz){var by=bz.getMenu();

if(by){bx.setOpenedButton(bz);
var bF=this._getChild(by,0,1);

if(bF){by.setSelectedButton(bF);
}return;
}}else if(!bx.getOpenedButton()){var bF=this._getChild(bx,0,1);

if(bF){bx.setSelectedButton(bF);

if(bF.getMenu()){bx.setOpenedButton(bF);
}return;
}}var bD=bx.getOpener();
if(bD instanceof qx.ui.menu.Button&&bz){while(bD){bD=bD.getLayoutParent();

if(bD instanceof qx.ui.menu.Menu){bD=bD.getOpener();

if(bD instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bD){return;
}}if(bD instanceof qx.ui.menubar.Button){var bC=bD.getMenuBar().getMenuButtons();
var bA=bC.indexOf(bD);
if(bA===-1){return;
}var bE=null;
var length=bC.length;

for(var i=1;i<=length;i++){var bB=bC[(bA+i)%length];

if(bB.isEnabled()){bE=bB;
break;
}}
if(bE&&bE!=bD){bE.open(true);
}}},_onKeyPressEnter:function(br,bs,e){if(bs.hasListener(y)){var bt=e.clone();
bt.setBubbles(false);
bt.setTarget(bs);
bs.dispatchEvent(bt);
}this.hideAll();
},_onKeyPressSpace:function(bo,bp,e){if(bp.hasListener(y)){var bq=e.clone();
bq.setBubbles(false);
bq.setTarget(bp);
bp.dispatchEvent(bq);
}}},destruct:function(){var P=qx.event.Registration;
var O=document.body;
P.removeListener(window.document.documentElement,t,this._onMouseDown,this,true);
P.removeListener(O,v,this._onKeyUpDown,this,true);
P.removeListener(O,s,this._onKeyUpDown,this,true);
P.removeListener(O,y,this._onKeyPress,this,true);
this._disposeObjects(o,h);
this._disposeArray(r);
}});
})();
(function(){var P="slidebar",O="Integer",N="resize",M="qx.ui.core.Widget",L="selected",K="visible",J="Boolean",I="mouseout",H="excluded",G="menu",bf="_applySelectedButton",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="_applyArrowColumnWidth",W="qx.ui.menu.Menu",V="Color",T="Number",U="_applyOpenInterval",R="_applySpacingX",S="_applyBlockerOpacity",Q="_applyOpenedButton";
qx.Class.define(W,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var c=this.getApplicationRoot();
c.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(I,this._onMouseOut);
this.addListener(N,this._onResize,this);
c.addListener(N,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(c);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:G},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:H},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:O,apply:R,init:0,themeable:true},spacingY:{check:O,apply:be,init:0,themeable:true},iconColumnWidth:{check:O,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:O,init:0,themeable:true,apply:X},blockerColor:{check:V,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:T,init:1,apply:S,themeable:true},selectedButton:{check:M,nullable:true,apply:bf},openedButton:{check:M,nullable:true,apply:Q},opener:{check:M,nullable:true},openInterval:{check:O,themeable:true,init:250,apply:U},closeInterval:{check:O,themeable:true,init:250,apply:bc},blockBackground:{check:J,themeable:true,init:false}},members:{__kL:null,__kM:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__kO();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__kO();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(g){this.placeToPoint(g);
this.__kO();
this.show();
this._placementTarget=g;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var j=[];
var k=this.getChildren();

for(var i=0;i<k.length;i++){if(k[i].isEnabled()){j.push(k[i]);
}}return j;
},_applyIconColumnWidth:function(d,f){this._getMenuLayout().setIconColumnWidth(d);
},_applyArrowColumnWidth:function(s,t){this._getMenuLayout().setArrowColumnWidth(s);
},_applySpacingX:function(n,o){this._getMenuLayout().setColumnSpacing(n);
},_applySpacingY:function(l,m){this._getMenuLayout().setSpacing(l);
},_applyVisibility:function(bl,bm){arguments.callee.base.call(this,bl,bm);
var bn=qx.ui.menu.Manager.getInstance();

if(bl===K){bn.add(this);
var bo=this.getParentMenu();

if(bo){bo.setOpenedButton(this.getOpener());
}}else if(bm===K){bn.remove(this);
var bo=this.getParentMenu();

if(bo&&bo.getOpenedButton()==this.getOpener()){bo.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__kN();
},__kN:function(){if(this.isVisible()){if(this.getBlockBackground()){var h=this.getZIndex();
this._blocker.blockContent(h-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var F=this.getOpener();

if(!F||!(F instanceof qx.ui.menu.AbstractButton)){return null;
}
while(F&&!(F instanceof qx.ui.menu.Menu)){F=F.getLayoutParent();
}return F;
},_applySelectedButton:function(bq,br){if(br){br.removeState(L);
}
if(bq){bq.addState(L);
}},_applyOpenedButton:function(A,B){if(B){B.getMenu().exclude();
}
if(A){A.getMenu().open();
}},_applyBlockerColor:function(y,z){this._blocker.setColor(y);
},_applyBlockerOpacity:function(q,r){this._blocker.setOpacity(q);
},_createChildControlImpl:function(bg){var bh;

switch(bg){case P:var bh=new qx.ui.menu.MenuSlideBar();
var bj=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bi=bh.getLayout();
bh.setLayout(bj);
bi.dispose();
var bk=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bk.length;i++){bh.add(bk[i]);
}this.removeListener(N,this._onResize,this);
bh.getChildrenContainer().addListener(N,this._onResize,this);
this.add(bh);
break;
}return bh||arguments.callee.base.call(this,bg);
},_getMenuLayout:function(){if(this.hasChildControl(P)){return this.getChildControl(P).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(P)){return this.getChildControl(P).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__kO:function(){var D=this._getMenuBounds();

if(!D){this.addListenerOnce(N,this.__kO,this);
return;
}var C=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var E=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(D.height+top);
this.moveTo(E,0);
});
}else if(top+D.height>C){this._assertSlideBar(function(){this.setHeight(C-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(p){if(this.hasChildControl(P)){return p.call(this);
}this.__kM=p;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(P);

if(this.__kM){this.__kM.call(this);
delete this.__kM;
}},_onResize:function(){if(this.isVisible()){var bp=this._placementTarget;

if(!bp){return;
}else if(bp instanceof qx.ui.core.Widget){this.placeToWidget(bp);
}else if(bp.top!==undefined){this.placeToPoint(bp);
}else{throw new Error("Unknown target: "+bp);
}this.__kO();
}},_onMouseOver:function(e){var v=qx.ui.menu.Manager.getInstance();
v.cancelClose(this);
var w=e.getTarget();

if(w.isEnabled()&&w instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(w);
var u=w.getMenu&&w.getMenu();

if(u){u.setOpener(w);
v.scheduleOpen(u);
this.__kL=u;
}else{var x=this.getOpenedButton();

if(x){v.scheduleClose(x.getMenu());
}
if(this.__kL){v.cancelOpen(this.__kL);
this.__kL=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var a=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var b=this.getOpenedButton();
b?this.setSelectedButton(b):this.resetSelectedButton();
if(b){a.cancelClose(b.getMenu());
}if(this.__kL){a.cancelOpen(this.__kL);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(N,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__og:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__og=[0,0,0,0];
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
}var p=arguments.callee.base.call(this).height;
return {minHeight:p,height:p,width:qx.lang.Array.sum(h)+f+j};
},getColumnSizes:function(){return this.__og||null;
}},destruct:function(){this.__og=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var w="icon",v="label",u="arrow",t="shortcut",s="changeLocale",r="qx.dynlocale",q="submenu",p="on",o="String",n="qx.ui.menu.Menu",h="qx.ui.menu.AbstractButton",m="keypress",k="",g="_applyIcon",f="mouseup",j="abstract",i="_applyLabel",l="_applyMenu",d="changeCommand";
qx.Class.define(h,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:j,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(f,this._onMouseUp);
this.addListener(m,this._onKeyPress);
this.addListener(d,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:o,apply:i,nullable:true},menu:{check:n,apply:l,nullable:true},icon:{check:o,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(C){var D;

switch(C){case w:D=new qx.ui.basic.Image;
D.setAnonymous(true);
this._add(D,{column:0});
break;
case v:D=new qx.ui.basic.Label;
D.setAnonymous(true);
this._add(D,{column:1});
break;
case t:D=new qx.ui.basic.Label;
D.setAnonymous(true);
this._add(D,{column:2});
break;
case u:D=new qx.ui.basic.Image;
D.setAnonymous(true);
this._add(D,{column:3});
break;
}return D||arguments.callee.base.call(this,C);
},_forwardStates:{selected:1},getChildrenSizes:function(){var G=0,H=0,I=0,M=0;

if(this._isChildControlVisible(w)){var N=this.getChildControl(w);
G=N.getMarginLeft()+N.getSizeHint().width+N.getMarginRight();
}
if(this._isChildControlVisible(v)){var K=this.getChildControl(v);
H=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(t)){var J=this.getChildControl(t);
I=J.getMarginLeft()+J.getSizeHint().width+J.getMarginRight();
}
if(this._isChildControlVisible(u)){var L=this.getChildControl(u);
M=L.getMarginLeft()+L.getSizeHint().width+L.getMarginRight();
}return [G,H,I,M];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(r,p)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(s,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}var b=c!=null?c.toString():k;
this.getChildControl(t).setValue(b);
},_onChangeLocale:qx.core.Variant.select(r,{"on":function(e){var B=this.getCommand();

if(B!=null){this.getChildControl(t).setValue(B.toString());
}},"off":null}),_applyIcon:function(x,y){if(x){this._showChildControl(w).setSource(x);
}else{this._excludeChildControl(w);
}},_applyLabel:function(z,A){if(z){this._showChildControl(v).setValue(z);
}else{this._excludeChildControl(v);
}},_applyMenu:function(E,F){if(F){F.resetOpener();
F.removeState(q);
}
if(E){this._showChildControl(u);
E.setOpener(this);
E.addState(q);
}else{this._excludeChildControl(u);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(r,p)){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}});
})();
(function(){var m="qx.ui.menu.ButtonLayout",k="qx.debug",j="column",h="left",g="middle",f="' is not supported by the MenuButton layout!",e="The property '";
qx.Class.define(m,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(k,{"on":function(B,name,C){this.assert(name==j,e+name+f);
},"off":null}),renderLayout:function(n,o){var y=this._getLayoutChildren();
var x;
var q;
var r=[];

for(var i=0,l=y.length;i<l;i++){x=y[i];
q=x.getLayoutProperties().column;
r[q]=x;
}var w=this.__li(y[0]);
var z=w.getColumnSizes();
var t=w.getSpacingX();
var s=qx.lang.Array.sum(z)+t*(z.length-1);

if(s<n){z[1]+=n-s;
}var A=0,top=0;
var u=qx.ui.layout.Util;

for(var i=0,l=z.length;i<l;i++){x=r[i];

if(x){var p=x.getSizeHint();
var top=u.computeVerticalAlignOffset(x.getAlignY()||g,p.height,o,0,0);
var v=u.computeHorizontalAlignOffset(x.getAlignX()||h,p.width,z[i],x.getMarginLeft(),x.getMarginRight());
x.renderLayout(A+v,top,p.width,p.height);
}A+=z[i]+t;
}},__li:function(D){while(!(D instanceof qx.ui.menu.Menu)){D=D.getLayoutParent();
}return D;
},_computeSizeHint:function(){var c=this._getLayoutChildren();
var b=0;
var d=0;

for(var i=0,l=c.length;i<l;i++){var a=c[i].getSizeHint();
d+=a.width;
b=Math.max(b,a.height);
}return {width:d,height:b};
}}});
})();
(function(){var d="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this.getChildrenContainer().getChildren();
},hasChildren:function(){return this.getChildrenContainer().hasChildren();
},add:function(a,b){return this.getChildrenContainer().add(a,b);
},remove:function(c){return this.getChildrenContainer().remove(c);
},removeAll:function(){return this.getChildrenContainer().removeAll();
},indexOf:function(l){return this.getChildrenContainer().indexOf(l);
},addAt:function(e,f,g){this.getChildrenContainer().addAt(e,f,g);
},addBefore:function(m,n,o){this.getChildrenContainer().addBefore(m,n,o);
},addAfter:function(i,j,k){this.getChildrenContainer().addAfter(i,j,k);
},removeAt:function(h){this.getChildrenContainer().removeAt(h);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(v){arguments.callee.base.call(this);
var w=this.getChildControl(r);
this._add(w,{flex:1});

if(v!=null){this.setOrientation(v);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(C){var D;

switch(C){case o:D=new qx.ui.form.RepeatButton;
D.addListener(m,this._onExecuteForward,this);
D.setFocusable(false);
this._addAt(D,2);
break;
case p:D=new qx.ui.form.RepeatButton;
D.addListener(m,this._onExecuteBackward,this);
D.setFocusable(false);
this._addAt(D,0);
break;
case n:D=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){D.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(D);
break;
case r:D=new qx.ui.core.scroll.ScrollPane();
D.addListener(g,this._onResize,this);
D.addListener(f,this._onScroll,this);
D.addListener(k,this._onScroll,this);
break;
}return D||arguments.callee.base.call(this,C);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(t){var u=this.getChildControl(r);

if(this.getOrientation()===s){u.scrollByX(t);
}else{u.scrollByY(t);
}},scrollTo:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollToX(a);
}else{b.scrollToY(a);
}},_applyOrientation:function(x,y){var B=[this.getLayout(),this._getLayout()];
var A=this.getChildControl(o);
var z=this.getChildControl(p);
if(y==q){A.removeState(q);
z.removeState(q);
A.addState(s);
z.addState(s);
}else if(y==s){A.removeState(s);
z.removeState(s);
A.addState(q);
z.addState(q);
}
if(x==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(B[0]){B[0].dispose();
}
if(B[1]){B[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===s)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var F=this.getChildControl(r);

if(this.getOrientation()===s){var E=F.getScrollX();
var G=F.getScrollMaxX();
}else{var E=F.getScrollY();
var G=F.getScrollMaxY();
}this.getChildControl(p).setEnabled(E>0);
this.getChildControl(o).setEnabled(E<G);
},_showArrows:function(){this._showChildControl(o);
this._showChildControl(p);
},_hideArrows:function(){this._excludeChildControl(o);
this._excludeChildControl(p);
this.scrollTo(0);
}}});
})();
(function(){var f="execute",e="button-backward",d="vertical",c="button-forward",b="menu-slidebar",a="qx.ui.menu.MenuSlideBar";
qx.Class.define(a,{extend:qx.ui.container.SlideBar,construct:function(){arguments.callee.base.call(this,d);
},properties:{appearance:{refine:true,init:b}},members:{_createChildControlImpl:function(g){var h;

switch(g){case c:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteForward,this);
this._addAt(h,2);
break;
case e:h=new qx.ui.form.HoverButton();
h.addListener(f,this._onExecuteBackward,this);
this._addAt(h,0);
break;
}return h||arguments.callee.base.call(this,g);
}}});
})();
(function(){var q="pressed",p="abandoned",o="Integer",n="hovered",m="qx.event.type.Event",l="Enter",k="Space",j="press",i="qx.ui.form.RepeatButton",h="release",d="interval",g="__lc",f="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(b,c){arguments.callee.base.call(this,b,c);
this.__lc=new qx.event.AcceleratingTimer();
this.__lc.addListener(d,this._onInterval,this);
},events:{"execute":m,"press":m,"release":m},properties:{interval:{check:o,init:100},firstInterval:{check:o,init:500},minTimer:{check:o,init:20},timerDecrease:{check:o,init:2}},members:{__ld:null,__lc:null,press:function(){if(this.isEnabled()){if(!this.hasState(q)){this.__le();
}this.removeState(p);
this.addState(q);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(q)){if(!this.__ld){this.execute();
}}this.removeState(q);
this.removeState(p);
this.__lf();
},_applyEnabled:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){this.removeState(q);
this.removeState(p);
this.__lf();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
this.__lc.start();
}this.addState(n);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(n);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
this.__lc.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__le();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(p)){this.addState(n);

if(this.hasState(q)&&!this.__ld){this.execute();
}}this.__lf();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(q)){if(!this.__ld){this.execute();
}this.removeState(q);
this.removeState(p);
e.stopPropagation();
this.__lf();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(p);
this.addState(q);
e.stopPropagation();
this.__le();
}},_onInterval:function(e){this.__ld=true;
this.fireEvent(f);
},__le:function(){this.fireEvent(j);
this.__ld=false;
this.__lc.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(p);
this.addState(q);
},__lf:function(){this.fireEvent(h);
this.__lc.stop();
this.removeState(p);
this.removeState(q);
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var e="Integer",d="interval",c="__oc",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oc=new qx.event.Timer(this.getInterval());
this.__oc.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__oc:null,__od:null,start:function(){this.__oc.setInterval(this.getFirstInterval());
this.__oc.start();
},stop:function(){this.__oc.stop();
this.__od=null;
},_onInterval:function(){this.__oc.stop();

if(this.__od==null){this.__od=this.getInterval();
}this.__od=Math.max(this.getMinimum(),this.__od-this.getDecrease());
this.__oc.setInterval(this.__od);
this.__oc.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var r="resize",q="scrollY",p="update",o="scrollX",n="_applyScrollX",m="_applyScrollY",l="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",k="appear",j="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",i="qx.event.type.Event",g="qx.ui.core.scroll.ScrollPane",h="scroll";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(r,this._onUpdate);
var C=this.getContentElement();
C.addListener(h,this._onScroll,this);
C.addListener(k,this._onAppear,this);
},events:{update:i},properties:{scrollX:{check:l,apply:n,event:o,init:0},scrollY:{check:j,apply:m,event:q,init:0}},members:{add:function(t){var u=this._getChildren()[0];

if(u){this._remove(u);
u.removeListener(r,this._onUpdate,this);
}
if(t){this._add(t);
t.addListener(r,this._onUpdate,this);
}},remove:function(a){if(a){this._remove(a);
a.removeListener(r,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(p);
},_onScroll:function(e){var f=this.getContentElement();
this.setScrollX(f.getScrollX());
this.setScrollY(f.getScrollY());
},_onAppear:function(e){var A=this.getContentElement();
var v=this.getScrollX();
var w=A.getScrollX();

if(v!=w){A.scrollToX(v);
}var B=this.getScrollY();
var z=A.getScrollY();

if(B!=z){A.scrollToY(B);
}},getItemTop:function(d){var top=0;

do{top+=d.getBounds().top;
d=d.getLayoutParent();
}while(d&&d!==this);
return top;
},getItemBottom:function(s){return this.getItemTop(s)+s.getBounds().height;
},getItemLeft:function(M){var N=0;
var parent;

do{N+=M.getBounds().left;
parent=M.getLayoutParent();

if(parent){N+=parent.getInsets().left;
}M=parent;
}while(M&&M!==this);
return N;
},getItemRight:function(b){return this.getItemLeft(b)+b.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var L=this.getInnerSize();
var K=this.getScrollSize();

if(L&&K){return Math.max(0,K.width-L.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(E){var F=this.getScrollMaxY();

if(E<0){E=0;
}else if(E>F){E=F;
}this.setScrollY(E);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(D){this.getContentElement().scrollToX(D);
},_applyScrollY:function(c){this.getContentElement().scrollToY(c);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="__kP",c="qx.ui.form.HoverButton";
qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){arguments.callee.base.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__kP=new qx.event.AcceleratingTimer();
this.__kP.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__kP:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__kP.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__kP.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__kP.stop();
}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.menu.Button",a="menu-button";
qx.Class.define(b,{extend:qx.ui.menu.AbstractButton,construct:function(c,d,f,g){arguments.callee.base.call(this);
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
(function(){var r="container",q="handle",p="both",o="Integer",n="middle",m="qx.ui.toolbar.Part",k="icon",j="label",h="changeShow",g="_applySpacing",f="toolbar/part";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(q);
},properties:{appearance:{refine:true,init:f},show:{init:p,check:[p,j,k],inheritable:true,event:h},spacing:{nullable:true,check:o,themeable:true,apply:g}},members:{_createChildControlImpl:function(d){var e;

switch(d){case q:e=new qx.ui.basic.Image();
e.setAlignY(n);
this._add(e);
break;
case r:e=new qx.ui.toolbar.PartContainer;
this._add(e);
break;
}return e||arguments.callee.base.call(this,d);
},getChildrenContainer:function(){return this.getChildControl(r);
},_applySpacing:function(s,t){var u=this.getChildControl(r).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var b=this.getChildren();
var a=[];
var c;

for(var i=0,l=b.length;i<l;i++){c=b[i];

if(c instanceof qx.ui.menubar.Button){a.push(c);
}}return a;
}}});
})();
(function(){var f="both",e="toolbar/part/container",d="icon",c="changeShow",b="qx.ui.toolbar.PartContainer",a="label";
qx.Class.define(b,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
},properties:{appearance:{refine:true,init:e},show:{init:f,check:[f,a,d],inheritable:true,event:c}}});
})();
(function(){var e="inherit",d="toolbar-button",c="keydown",b="qx.ui.toolbar.Button",a="keyup";
qx.Class.define(b,{extend:qx.ui.form.Button,construct:function(f,g,h){arguments.callee.base.call(this,f,g,h);
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
(function(){var n="checked",m="qx.ui.form.RadioGroup",l="Boolean",k="menu-radiobutton",j="_applyValue",i="qx.ui.menu.RadioButton",h="changeValue",g="_applyGroup",f="execute";
qx.Class.define(i,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(c,d){arguments.callee.base.call(this);
if(c!=null){this.setLabel(c);
}
if(d!=null){this.setMenu(d);
}this.addListener(f,this._onExecute,this);
},properties:{appearance:{refine:true,init:k},value:{check:l,nullable:true,event:h,apply:j,init:false},group:{check:m,nullable:true,apply:g}},members:{_applyValue:function(a,b){a?this.addState(n):this.removeState(n);
},_applyGroup:function(o,p){if(p){p.remove(this);
}
if(o){o.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="__ks",e="change",d="qx.debug",c="changeSelection",b="on",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__ks=new qx.data.Array();
this.__ks.addListener(e,this.__kv,this);
this.addListener(c,this.__ku,this);
},events:{changeModelSelection:a},members:{__ks:null,__kt:false,__ku:function(){if(this.__kt){return;
}var t=this.getSelection();
var r=[];

for(var i=0;i<t.length;i++){var u=t[i];
var s=u.getModel?u.getModel():null;

if(s!==null){r.push(s);
}}this.setModelSelection(r);
},__kv:function(){this.__kt=true;
var l=this.getSelectables();
var n=[];
var m=this.__ks.toArray();

for(var i=0;i<m.length;i++){var p=m[i];

for(var j=0;j<l.length;j++){var q=l[j];
var k=q.getModel?q.getModel():null;

if(p===k){n.push(q);
break;
}}}this.setSelection(n);
this.__kt=false;
var o=this.getSelection();

if(!qx.lang.Array.equals(o,n)){this.__ku();
}},getModelSelection:function(){return this.__ks;
},setModelSelection:function(v){if(!v){this.__ks.removeAll();
return;
}
if(qx.core.Variant.isSet(d,b)){this.assertArray(v,h);
}v.unshift(this.__ks.getLength());
v.unshift(0);
var w=this.__ks.splice.apply(this.__ks,v);
w.dispose();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var v="Boolean",u="changeValue",t="_applyAllowEmptySelection",s="_applyInvalidMessage",r="qx.ui.form.RadioGroup",q="_applyValid",p="",o="changeRequired",n="changeValid",m="changeEnabled",h="__a",k="changeInvalidMessage",j="changeSelection",g="_applyEnabled",f="String";
qx.Class.define(r,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(w){arguments.callee.base.call(this);
this.__a=[];
this.addListener(j,this.__b,this);

if(w!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:v,apply:g,event:m},wrap:{check:v,init:true},allowEmptySelection:{check:v,init:false,apply:t},valid:{check:v,init:true,apply:q,event:n},required:{check:v,init:false,event:o},invalidMessage:{check:f,init:p,event:k,apply:s}},members:{__a:null,getItems:function(){return this.__a;
},add:function(N){var O=this.__a;
var P;

for(var i=0,l=arguments.length;i<l;i++){P=arguments[i];

if(qx.lang.Array.contains(O,P)){continue;
}P.addListener(u,this._onItemChangeChecked,this);
O.push(P);
P.setGroup(this);
if(P.getValue()){this.setSelection([P]);
}}if(!this.isAllowEmptySelection()&&O.length>0&&!this.getSelection()[0]){this.setSelection([O[0]]);
}},remove:function(z){var A=this.__a;

if(qx.lang.Array.contains(A,z)){qx.lang.Array.remove(A,z);
if(z.getGroup()===this){z.resetGroup();
}z.removeListener(u,this._onItemChangeChecked,this);
if(z.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var d=e.getTarget();

if(d.getValue()){this.setSelection([d]);
}else if(this.getSelection()[0]==d){this.resetSelection();
}},_applyInvalidMessage:function(I,J){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(I);
}},_applyValid:function(x,y){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(x);
}},_applyEnabled:function(F,G){var H=this.__a;

if(F==null){for(var i=0,l=H.length;i<l;i++){H[i].resetEnabled();
}}else{for(var i=0,l=H.length;i<l;i++){H[i].setEnabled(F);
}}},_applyAllowEmptySelection:function(B,C){if(!B&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var a=this.getSelection()[0];
var c=this.__a;
var b=c.indexOf(a);

if(b==-1){return;
}var i=0;
var length=c.length;
if(this.getWrap()){b=(b+1)%length;
}else{b=Math.min(b+1,length-1);
}
while(i<length&&!c[b].getEnabled()){b=(b+1)%length;
i++;
}this.setSelection([c[b]]);
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
},__b:function(e){var E=e.getData()[0];
var D=e.getOldData()[0];

if(D){D.setValue(false);
}
if(E){E.setValue(true);
}}},destruct:function(){this._disposeArray(h);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(m,n,name){this.fireDataEvent(c,{value:m,name:name,old:n});
this._registerEventChaining(m,n,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__kr,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__kr:function(name,e){var v=e.getData();
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
(function(){var bc="change",bb="add",ba="remove",Y="order",X="The parameter must be an array.",W="",V="qx.data.Array",U="?",T="changeBubble",S="qx.event.type.Event",P="number",R="on",Q="changeLength",O="qx.debug",N="qx.event.type.Data";
qx.Class.define(V,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(b){arguments.callee.base.call(this);
if(b==undefined){this.__ki=[];
}else if(arguments.length>1){this.__ki=[];

for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
}}else if(typeof b==P){this.__ki=new Array(b);
}else if(b instanceof Array){this.__ki=qx.lang.Array.clone(b);
}else{this.__ki=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(this.__ki[i],null,i);
}this.__kj();
},events:{"change":N,"changeLength":S},members:{__ki:null,concat:function(l){if(l){var m=this.__ki.concat(l);
}else{var m=this.__ki.concat();
}return new qx.data.Array(m);
},join:function(k){return this.__ki.join(k);
},pop:function(){var bj=this.__ki.pop();
this.__kj();
this._applyEventPropagation(null,bj,this.length-1);
this.fireDataEvent(bc,{start:this.length-1,end:this.length-1,type:ba,items:[bj]},null);
return bj;
},push:function(M){for(var i=0;i<arguments.length;i++){this.__ki.push(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(bc,{start:this.length-1,end:this.length-1,type:bb,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__ki.reverse();
this.fireDataEvent(bc,{start:0,end:this.length-1,type:Y,items:null},null);
},shift:function(){var v=this.__ki.shift();
this.__kj();
this._applyEventPropagation(null,v);
this.fireDataEvent(bc,{start:0,end:this.length-1,type:ba,items:[v]},null);
return v;
},slice:function(B,C){return new qx.data.Array(this.__ki.slice(B,C));
},splice:function(D,E,F){var L=this.__ki.length;
var I=this.__ki.splice.apply(this.__ki,arguments);
if(this.__ki.length!=L){this.__kj();
}var J=E>0;
var G=arguments.length>2;
var H=null;

if(J||G){if(this.__ki.length>L){var K=bb;
}else if(this.__ki.length<L){var K=ba;
H=I;
}else{var K=Y;
}this.fireDataEvent(bc,{start:D,end:this.length-1,type:K,items:H},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,D+i);
}this.fireDataEvent(T,{value:this,name:U,old:I});
for(var i=0;i<I.length;i++){this._applyEventPropagation(null,I[i],i);
}return (new qx.data.Array(I));
},sort:function(bk){this.__ki.sort.apply(this.__ki,arguments);
this.fireDataEvent(bc,{start:0,end:this.length-1,type:Y,items:null},null);
},unshift:function(bf){for(var i=arguments.length-1;i>=0;i--){this.__ki.unshift(arguments[i]);
this.__kj();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(bc,{start:0,end:this.length-1,type:bb,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ki;
},getItem:function(q){return this.__ki[q];
},setItem:function(y,z){var A=this.__ki[y];
this.__ki[y]=z;
this._applyEventPropagation(z,A,y);
if(this.length!=this.__ki.length){this.__kj();
}this.fireDataEvent(bc,{start:y,end:y,type:bb,items:[z]},null);
},getLength:function(){return this.length;
},indexOf:function(j){return this.__ki.indexOf(j);
},toString:function(){if(this.__ki!=null){return this.__ki.toString();
}return W;
},contains:function(a){return this.__ki.indexOf(a)!==-1;
},copy:function(){return this.concat();
},insertAt:function(bd,be){this.splice(bd,0,be);
},insertBefore:function(c,d){var e=this.indexOf(c);

if(e==-1){this.push(d);
}else{this.splice(e,0,d);
}},insertAfter:function(f,g){var h=this.indexOf(f);

if(h==-1||h==(this.length-1)){this.push(g);
}else{this.splice(h+1,0,g);
}},removeAt:function(p){return this.splice(p,1)[0];
},removeAll:function(){for(var i=0;i<this.__ki.length;i++){this._applyEventPropagation(null,this.__ki[i],i);
}var u=this.getLength();
var t=this.__ki.concat();
this.__ki.length=0;
this.__kj();
this.fireDataEvent(bc,{start:0,end:u-1,type:ba,items:t},null);
},append:function(bg){if(qx.core.Variant.isSet(O,R)){qx.core.Assert.assertArray(bg,X);
}for(var i=0;i<bg.length;i++){this._applyEventPropagation(bg[i],null,this.__ki.length+i);
}Array.prototype.push.apply(this.__ki,bg);
this.__kj();
},remove:function(r){var s=this.indexOf(r);

if(s!=-1){this.splice(s,1);
return r;
}},equals:function(n){if(this.length!==n.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==n.getItem(i)){return false;
}}return true;
},sum:function(){var o=0;

for(var i=0;i<this.length;i++){o+=this.getItem(i);
}return o;
},max:function(){var w=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>w){w=this.getItem(i);
}}return w===undefined?null:w;
},min:function(){var x=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<x){x=this.getItem(i);
}}return x===undefined?null:x;
},forEach:function(bh,bi){for(var i=0;i<this.__ki.length;i++){bh.call(bi,this.__ki[i]);
}},__kj:function(){this.length=this.__ki.length;
this.fireEvent(Q,qx.event.type.Event);
}},destruct:function(){this.__ki=null;
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(h){var i;

switch(h){case e:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||arguments.callee.base.call(this,h);
},_applyShowArrow:function(f,g){if(f){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="checked",q="Space",p="Enter",o="mouseup",n="mousedown",m="Boolean",l="_applyValue",f="mouseover",k="mouseout",i="qx.ui.form.ToggleButton",d="keydown",c="changeValue",h="button",g="keyup",j="execute";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){arguments.callee.base.call(this,v,w);
this.addListener(f,this._onMouseOver);
this.addListener(k,this._onMouseOut);
this.addListener(n,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(j,this._onExecute,this);
},properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true},value:{check:m,nullable:true,event:c,apply:l,init:false}},members:{_applyValue:function(a,b){a?this.addState(r):this.removeState(r);
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(s);

if(this.hasState(t)){this.removeState(t);
this.addState(u);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(s);

if(this.hasState(u)){if(!this.getValue()){this.removeState(u);
}this.addState(t);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(t);
this.addState(u);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(t)){this.removeState(t);
}else if(this.hasState(u)){this.execute();
}this.removeState(u);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.addState(u);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(u)){return;
}
switch(e.getKeyIdentifier()){case p:case q:this.removeState(t);
this.execute();
this.removeState(u);
e.stopPropagation();
}}}});
})();
(function(){var g="inherit",f="toolbar-button",e="qx.ui.toolbar.CheckBox",d="keydown",c="keyup";
qx.Class.define(e,{extend:qx.ui.form.ToggleButton,construct:function(a,b){arguments.callee.base.call(this,a,b);
this.removeListener(d,this._onKeyDown);
this.removeListener(c,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:g},focusable:{refine:true,init:false}}});
})();
(function(){var c="qx.ui.form.RadioGroup",b="_applyGroup",a="qx.ui.toolbar.RadioButton";
qx.Class.define(a,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:c,apply:b,nullable:true}},members:{_applyValue:function(f,g){arguments.callee.base.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.setSelection([this]);
}}},_applyGroup:function(d,e){if(e){e.remove(this);
}
if(d){d.add(this);
}}}});
})();
(function(){var i="String",h="qx.ui.embed.AbstractIframe",g="name",f="",e="_applySource",d="qx.event.type.Event",c="_applyFrameName";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(l){arguments.callee.base.call(this);

if(l){this.setSource(l);
}},events:{"load":d},properties:{source:{check:i,apply:e,nullable:true},frameName:{check:i,init:f,apply:c}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(j,k){this._getIframeElement().setSource(j);
},_applyFrameName:function(a,b){this._getIframeElement().setAttribute(g,a);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var j="auto",i="overflowX",h="visible",g="hidden",f="scroll",e="overflowY",d="_applyOverflowX",c="_applyOverflowY",b="qx.ui.core.MNativeOverflow";
qx.Mixin.define(b,{properties:{overflowX:{check:[g,h,f,j],nullable:true,apply:d},overflowY:{check:[g,h,f,j],nullable:true,apply:c},overflow:{group:[i,e]}},members:{_applyOverflowX:function(a){this.getContentElement().setStyle(i,a);
},_applyOverflowY:function(k){this.getContentElement().setStyle(e,k);
}}});
})();
(function(){var o="qx.client",n="mousedown",m="load",l="help",k="mouseup",j="losecapture",i="contextmenu",h="none",g="display",f="repeat",F="Boolean",E="px",D="url(",C=")",B="gecko",A="div",z="__rc",y="DOMNodeInserted",x="_applyNativeHelp",w="/",u="appear",v="mshtml",s="block",t="qx.ui.embed.Iframe",q="iframe",r="absolute",p="qx/static/blank.gif";
qx.Class.define(t,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(G){if(G!=null){this.__rb=G;
}arguments.callee.base.call(this,G);
qx.event.Registration.addListener(document.body,n,this.block,this,true);
qx.event.Registration.addListener(document.body,k,this.release,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
this.__rc=this._createBlockerElement();
this.getContainerElement().add(this.__rc);

if(qx.core.Variant.isSet(o,B)){this.addListenerOnce(u,function(e){var c=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(c,y,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:q},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:F,init:false,apply:x}},members:{__rb:null,__rc:null,renderLayout:function(O,top,P,Q){arguments.callee.base.call(this,O,top,P,Q);
var S=E;
var R=this.getInsets();
this.__rc.setStyles({"left":R.left+S,"top":R.top+S,"width":(P-R.left-R.right)+S,"height":(Q-R.top-R.bottom)+S});
},_createContentElement:function(){var d=new qx.html.Iframe(this.__rb);
d.addListener(m,this._onIframeLoad,this);
return d;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var J=new qx.html.Element(A);
J.setStyles({"zIndex":20,"position":r,"display":h});
if(qx.core.Variant.isSet(o,v)){J.setStyles({backgroundImage:D+qx.util.ResourceManager.getInstance().toUri(p)+C,backgroundRepeat:f});
}return J;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(m);
},block:function(){this.__rc.setStyle(g,s);
},release:function(){this.__rc.setStyle(g,h);
},_applyNativeContextMenu:function(K,L){if(K!==false&&L!==false){return;
}var M=this.getDocument();

if(!M){return;
}
try{var N=M.documentElement;
}catch(e){return ;
}
if(L===false){qx.event.Registration.removeListener(N,i,this._onNativeContextMenu,this,true);
}
if(K===false){qx.event.Registration.addListener(N,i,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(o,{"mshtml":function(a,b){var document=this.getDocument();

if(!document){return;
}
try{if(b===false){qx.bom.Event.removeNativeListener(document,l,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,l,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var I=this.getContentElement().getDomElement();
var H=I.src;
if(H.charAt(H.length-1)==w){H=H.substring(0,H.length-1);
}
if(H!=this.getSource()){qx.bom.Iframe.getWindow(I).stop();
I.src=this.getSource();
}}},destruct:function(){this._disposeObjects(z);
qx.event.Registration.removeListener(document.body,n,this.block,this,true);
qx.event.Registration.removeListener(document.body,k,this.release,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
}});
})();
(function(){var j="source",i="name",h="qx.html.Iframe",g="qx.event.type.Event",f="iframe";
qx.Class.define(h,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this,f);
this._setProperty(j,b);
},events:{"load":g},members:{_applyProperty:function(name,l){arguments.callee.base.call(this,name,l);

if(name==j){var m=this.getDomElement();
qx.bom.Iframe.setSource(m,l);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var e=this.getDomElement();

if(e){return qx.bom.Iframe.getWindow(e);
}else{return null;
}},getDocument:function(){var k=this.getDomElement();

if(k){return qx.bom.Iframe.getDocument(k);
}else{return null;
}},getBody:function(){var n=this.getDomElement();

if(n){return qx.bom.Iframe.getBody(n);
}else{return null;
}},setSource:function(a){this._setProperty(j,a);
return this;
},getSource:function(){return this._getProperty(j);
},setName:function(name){this.setAttribute(i,name);
return this;
},getName:function(){return this.getAttribute(i);
},reload:function(){var d=this.getDomElement();

if(d){var c=this.getSource();
this.setSource(null);
this.setSource(c);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__lh:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lh=null;
},getInsets:function(){if(this.__lh){return this.__lh;
}var l=this._getDefaultInsets();
return this.__lh={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__lh=null;
}},destruct:function(){this.__lh=null;
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
(function(){var j="px",i="qx.ui.decoration.Background",h="",g="qx.debug",f="_applyStyle",e="on",d="Color",c="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(k){arguments.callee.base.call(this);

if(k!=null){this.setBackgroundColor(k);
}},properties:{backgroundColor:{check:d,nullable:true,apply:f}},members:{__lk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lk;
},getMarkup:function(){if(this.__lk){return this.__lk;
}var a={position:c,top:0,left:0};
var b=this._generateBackgroundMarkup(a);
return this.__lk=b;
},resize:function(l,m,n){l.style.width=m+j;
l.style.height=n+j;
},tint:function(o,p){var q=qx.theme.manager.Color.getInstance();

if(p==null){p=this.getBackgroundColor();
}o.style.backgroundColor=q.resolve(p)||h;
},_applyStyle:function(){if(qx.core.Variant.isSet(g,e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__lk=null;
}});
})();
(function(){var s="none",r="text",q="",p="userSelect",o="color",n="String",m="0px",l="webkit",k="changeHtml",j="_applyCssClass",g="class",i="qx.ui.embed.Html",h="_applyHtml",f="qx.client",e="html";
qx.Class.define(i,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setHtml(a);
}},properties:{html:{check:n,apply:h,event:k,nullable:true},cssClass:{check:n,init:q,apply:j},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(b,c){var d=this.getContentElement();
d.setAttribute(e,b||q);
d.setStyles({"padding":m,"border":s});
},_applyCssClass:function(u,v){this.getContentElement().setAttribute(g,u);
},_applySelectable:function(t){arguments.callee.base.call(this,t);
if(qx.core.Variant.isSet(f,l)){this.getContainerElement().setStyle(p,t?r:s);
this.getContentElement().setStyle(p,t?r:s);
}},_applyFont:function(w,x){var y=w?qx.theme.manager.Font.getInstance().resolve(w).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(y);
},_applyTextColor:function(z,A){if(z){this.getContentElement().setStyle(o,qx.theme.manager.Color.getInstance().resolve(z));
}else{this.getContentElement().removeStyle(o);
}}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
var v=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(v.join(q));
qx.log.Logger.register(this);
},members:{__rd:null,setElement:function(w){this.clear();
if(w){qx.bom.element.Class.add(w,j);
}this.__rd=w;
},clear:function(){var t=this.__rd;
if(t){t.innerHTML=q;
}},process:function(r){var s=this.__rd;

if(!s){return;
}s.appendChild(qx.log.appender.Util.toHtml(r));
s.scrollTop=s.scrollHeight;
}},destruct:function(){this.__rd=null;
}});
})();
(function(){var j="(\\s|$)",i="(^|\\s)",h="",g="qx.bom.element.Class",f=" ",e="$2";
qx.Class.define(g,{statics:{add:function(a,name){if(!this.has(a,name)){a.className+=(a.className?f:h)+name;
}return name;
},get:function(d){return d.className;
},has:function(k,name){var l=new RegExp(i+name+j);
return l.test(k.className);
},remove:function(b,name){var c=new RegExp(i+name+j);
b.className=b.className.replace(c,e);
return name;
},replace:function(m,n,o){this.remove(m,n);
return this.add(m,o);
},toggle:function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}}});
})();
(function(){var c="qx.nativeScrollBars",b="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(c,false);
qx.Mixin.define(b,{members:{_createScrollBar:function(a){if(qx.core.Setting.get(c)){return new qx.ui.core.scroll.NativeScrollBar(a);
}else{return new qx.ui.core.scroll.ScrollBar(a);
}}}});
})();
(function(){var Q="scrollbar-y",P="scrollbar-x",O="pane",N="auto",M="corner",L="on",K="changeVisibility",J="scroll",I="_computeScrollbars",H="off",A="scrollY",G="qx.ui.core.scroll.AbstractScrollArea",D="abstract",y="update",x="scrollX",C="mousewheel",B="scrollbarY",E="scrollbarX",w="horizontal",F="scrollarea",z="vertical";
qx.Class.define(G,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:D,construct:function(){arguments.callee.base.call(this);
var T=new qx.ui.layout.Grid();
T.setColumnFlex(0,1);
T.setRowFlex(0,1);
this._setLayout(T);
this.addListener(C,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:F},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[N,L,H],init:N,themeable:true,apply:I},scrollbarY:{check:[N,L,H],init:N,themeable:true,apply:I},scrollbar:{group:[E,B]}},members:{_createChildControlImpl:function(ba){var bb;

switch(ba){case O:bb=new qx.ui.core.scroll.ScrollPane();
bb.addListener(y,this._computeScrollbars,this);
bb.addListener(x,this._onScrollPaneX,this);
bb.addListener(A,this._onScrollPaneY,this);
this._add(bb,{row:0,column:0});
break;
case P:bb=this._createScrollBar(w);
bb.setMinWidth(0);
bb.exclude();
bb.addListener(J,this._onScrollBarX,this);
bb.addListener(K,this._onChangeScrollbarXVisibility,this);
this._add(bb,{row:1,column:0});
break;
case Q:bb=this._createScrollBar(z);
bb.setMinHeight(0);
bb.exclude();
bb.addListener(J,this._onScrollBarY,this);
bb.addListener(K,this._onChangeScrollbarYVisibility,this);
this._add(bb,{row:0,column:1});
break;
case M:bb=new qx.ui.core.Widget();
bb.setWidth(0);
bb.setHeight(0);
bb.exclude();
this._add(bb,{row:1,column:1});
break;
}return bb||arguments.callee.base.call(this,ba);
},getPaneSize:function(){return this.getChildControl(O).getInnerSize();
},getItemTop:function(X){return this.getChildControl(O).getItemTop(X);
},getItemBottom:function(u){return this.getChildControl(O).getItemBottom(u);
},getItemLeft:function(U){return this.getChildControl(O).getItemLeft(U);
},getItemRight:function(c){return this.getChildControl(O).getItemRight(c);
},scrollToX:function(V){qx.ui.core.queue.Manager.flush();
this.getChildControl(P).scrollTo(V);
},scrollByX:function(Y){qx.ui.core.queue.Manager.flush();
this.getChildControl(P).scrollBy(Y);
},getScrollX:function(){var v=this.getChildControl(P,true);
return v?v.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(Q).scrollTo(f);
},scrollByY:function(W){qx.ui.core.queue.Manager.flush();
this.getChildControl(Q).scrollBy(W);
},getScrollY:function(){var d=this.getChildControl(Q,true);
return d?d.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(O).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(O).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var h=this._isChildControlVisible(P);
var i=this._isChildControlVisible(Q);
var g=(i)?this.getChildControl(Q,true):(h?this.getChildControl(P,true):null);

if(g){g.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var a=this._isChildControlVisible(P);
var b=this._isChildControlVisible(Q);

if(!a){this.scrollToX(0);
}a&&b?this._showChildControl(M):this._excludeChildControl(M);
},_onChangeScrollbarYVisibility:function(e){var R=this._isChildControlVisible(P);
var S=this._isChildControlVisible(Q);

if(!S){this.scrollToY(0);
}R&&S?this._showChildControl(M):this._excludeChildControl(M);
},_computeScrollbars:function(){var p=this.getChildControl(O);
var content=p.getChildren()[0];

if(!content){this._excludeChildControl(P);
this._excludeChildControl(Q);
return;
}var j=this.getInnerSize();
var o=p.getInnerSize();
var m=p.getScrollSize();
if(!o||!m){return;
}var r=this.getScrollbarX();
var s=this.getScrollbarY();

if(r===N&&s===N){var n=m.width>j.width;
var t=m.height>j.height;
if((n||t)&&!(n&&t)){if(n){t=m.height>o.height;
}else if(t){n=m.width>o.width;
}}}else{var n=r===L;
var t=s===L;
if(m.width>(n?o.width:j.width)&&r===N){n=true;
}
if(m.height>(n?o.height:j.height)&&s===N){t=true;
}}if(n){var l=this.getChildControl(P);
l.show();
var q=Math.max(0,m.width-o.width);
l.setMaximum(q);
l.setKnobFactor(q>0?o.width/m.width:0);
}else{this._excludeChildControl(P);
}
if(t){var k=this.getChildControl(Q);
k.show();
var q=Math.max(0,m.height-o.height);
k.setMaximum(q);
k.setKnobFactor(q>0?o.height/m.height:0);
}else{this._excludeChildControl(Q);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var E="single",D="Boolean",C="one",B="changeSelection",A="mouseup",z="mousedown",y="losecapture",x="multi",w="_applyQuickSelection",v="mouseover",o="_applySelectionMode",u="_applyDragSelection",r="__kV",n="qx.ui.core.MMultiSelectionHandling",m="removeItem",q="keypress",p="qx.event.type.Data",s="addItem",l="additive",t="mousemove";
qx.Mixin.define(n,{construct:function(){var d=this.SELECTION_MANAGER;
var c=this.__kV=new d(this);
this.addListener(z,c.handleMouseDown,c);
this.addListener(A,c.handleMouseUp,c);
this.addListener(v,c.handleMouseOver,c);
this.addListener(t,c.handleMouseMove,c);
this.addListener(y,c.handleLoseCapture,c);
this.addListener(q,c.handleKeyPress,c);
this.addListener(s,c.handleAddItem,c);
this.addListener(m,c.handleRemoveItem,c);
c.addListener(B,this._onSelectionChange,this);
},events:{"changeSelection":p},properties:{selectionMode:{check:[E,x,l,C],init:E,apply:o},dragSelection:{check:D,init:false,apply:u},quickSelection:{check:D,init:false,apply:w}},members:{__kV:null,selectAll:function(){this.__kV.selectAll();
},isSelected:function(F){if(!qx.ui.core.Widget.contains(this,F)){throw new Error("Could not test if "+F+" is selected, because it is not a child element!");
}return this.__kV.isItemSelected(F);
},addToSelection:function(G){if(!qx.ui.core.Widget.contains(this,G)){throw new Error("Could not add + "+G+" to selection, because it is not a child element!");
}this.__kV.addItem(G);
},removeFromSelection:function(h){if(!qx.ui.core.Widget.contains(this,h)){throw new Error("Could not remove "+h+" from selection, because it is not a child element!");
}this.__kV.removeItem(h);
},selectRange:function(I,J){this.__kV.selectItemRange(I,J);
},resetSelection:function(){this.__kV.clearSelection();
},setSelection:function(K){for(var i=0;i<K.length;i++){if(!qx.ui.core.Widget.contains(this,K[i])){throw new Error("Could not select "+K[i]+", because it is not a child element!");
}}
if(K.length===0){this.resetSelection();
}else{var L=this.getSelection();

if(!qx.lang.Array.equals(L,K)){this.__kV.replaceSelection(K);
}}},getSelection:function(){return this.__kV.getSelection();
},getSortedSelection:function(){return this.__kV.getSortedSelection();
},isSelectionEmpty:function(){return this.__kV.isSelectionEmpty();
},getSelectionContext:function(){return this.__kV.getSelectionContext();
},_getManager:function(){return this.__kV;
},getSelectables:function(){return this.__kV.getSelectables();
},invertSelection:function(){this.__kV.invertSelection();
},_getLeadItem:function(){var H=this.__kV.getMode();

if(H===E||H===C){return this.__kV.getSelectedItem();
}else{return this.__kV.getLeadItem();
}},_applySelectionMode:function(f,g){this.__kV.setMode(f);
},_applyDragSelection:function(a,b){this.__kV.setDrag(a);
},_applyQuickSelection:function(j,k){this.__kV.setQuick(j);
},_onSelectionChange:function(e){this.fireDataEvent(B,e.getData());
}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__ji:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jj:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jj[name];
s[t]();
}else{var u=this.__ji[name];
s[u](q);
}}}});
})();
(function(){var z="one",y="single",x="selected",w="additive",v="multi",u="PageUp",t="under",s="Left",r="lead",q="Down",bb="Up",ba="Boolean",Y="PageDown",X="anchor",W="End",V="Home",U="Right",T="right",S="click",R="above",G="left",H="Escape",E="drag",F="Space",C="A",D="_applyMode",A="qx.debug",B="interval",I="changeSelection",J="Please use public 'getLeadItem' instead.",M="qx.event.type.Data",L="quick",O="key",N="__mo",Q="abstract",P="on",K="qx.ui.core.selection.Abstract";
qx.Class.define(K,{type:Q,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__ml={};
},events:{"changeSelection":M},properties:{mode:{check:[y,v,w,z],init:y,apply:D},drag:{check:ba,init:false},quick:{check:ba,init:false}},members:{__mm:0,__mn:0,__mo:null,__mp:null,__mq:null,__mr:null,__ms:null,__mt:null,__mu:null,__mv:null,__mw:null,__mx:null,__my:null,__mz:null,__mA:null,__mB:null,__mC:null,__ml:null,__mD:null,__mE:null,getSelectionContext:function(){return this.__mB;
},selectAll:function(){var cQ=this.getMode();

if(cQ==y||cQ==z){throw new Error("Can not select all items in selection mode: "+cQ);
}this._selectAllItems();
this._fireChange();
},selectItem:function(by){this._setSelectedItem(by);
var bz=this.getMode();

if(bz!==y&&bz!==z){this._setLeadItem(by);
this._setAnchorItem(by);
}this._scrollItemIntoView(by);
this._fireChange();
},addItem:function(n){var o=this.getMode();

if(o===y||o===z){this._setSelectedItem(n);
}else{if(!this._getAnchorItem()){this._setAnchorItem(n);
}this._setLeadItem(n);
this._addToSelection(n);
}this._scrollItemIntoView(n);
this._fireChange();
},removeItem:function(cO){this._removeFromSelection(cO);

if(this.getMode()===z&&this.isSelectionEmpty()){var cP=this._getFirstSelectable();

if(cP){this.addItem(cP);
}if(cP==cO){return;
}}
if(this.getLeadItem()==cO){this._setLeadItem(null);
}
if(this._getAnchorItem()==cO){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bA,bB){var bC=this.getMode();

if(bC==y||bC==z){throw new Error("Can not select multiple items in selection mode: "+bC);
}this._selectItemRange(bA,bB);
this._setAnchorItem(bA);
this._setLeadItem(bB);
this._scrollItemIntoView(bB);
this._fireChange();
},clearSelection:function(){if(this.getMode()==z){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cd){var ce=this.getMode();

if(ce==z||ce===y){if(cd.length>1){throw new Error("Could not select more than one items in mode: "+ce+"!");
}
if(cd.length==1){this.selectItem(cd[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cd);
}},getSelectedItem:function(){var j=this.getMode();

if(j===y||j===z){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__ml);
},getSortedSelection:function(){var ck=this.getSelectables();
var cj=qx.lang.Object.getValues(this.__ml);
cj.sort(function(a,b){return ck.indexOf(a)-ck.indexOf(b);
});
return cj;
},isItemSelected:function(k){var m=this._selectableToHashCode(k);
return this.__ml[m]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__ml);
},invertSelection:function(){var cg=this.getMode();

if(cg===y||cg===z){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cf=this.getSelectables();

for(var i=0;i<cf.length;i++){this._toggleInSelection(cf[i]);
}this._fireChange();
},_setLeadItem:function(bR){var bS=this.__mC;

if(bS!==null){this._styleSelectable(bS,r,false);
}
if(bR!==null){this._styleSelectable(bR,r,true);
}this.__mC=bR;
},_getLeadItem:function(){if(qx.core.Variant.isSet(A,P)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,J);
}return this.getLeadItem();
},getLeadItem:function(){return this.__mC!==null?this.__mC:null;
},_setAnchorItem:function(cM){var cN=this.__mD;

if(cN){this._styleSelectable(cN,X,false);
}
if(cM){this._styleSelectable(cM,X,true);
}this.__mD=cM;
},_getAnchorItem:function(){return this.__mD!==null?this.__mD:null;
},_isSelectable:function(cD){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var p=event.getTarget();
return this._isSelectable(p)?p:null;
},_selectableToHashCode:function(bE){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cV,cW,cX){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bo){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cU){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(c,d){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cr){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bc,bd){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(be,bf){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cK,cL){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cF,cG){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cF===z){var cH=this._getFirstSelectable();

if(cH){this._setSelectedItem(cH);
this._scrollItemIntoView(cH);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cJ=this.getMode();

if(cJ!==z&&cJ!==y){return;
}var cI=this._getSelectableFromMouseEvent(event);

if(cI===null){return;
}this._setSelectedItem(cI);
this._fireChange(L);
},handleMouseDown:function(event){var bh=this._getSelectableFromMouseEvent(event);

if(bh===null){return;
}var bj=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bg=event.isShiftPressed();
if(this.isItemSelected(bh)&&!bg&&!bj&&!this.getDrag()){this.__mE=bh;
return;
}else{this.__mE=null;
}this._scrollItemIntoView(bh);
switch(this.getMode()){case y:case z:this._setSelectedItem(bh);
break;
case w:this._setLeadItem(bh);
this._setAnchorItem(bh);
this._toggleInSelection(bh);
break;
case v:this._setLeadItem(bh);
if(bg){var bi=this._getAnchorItem();

if(bi===null){bi=this._getFirstSelectable();
this._setAnchorItem(bi);
}this._selectItemRange(bi,bh,bj);
}else if(bj){this._setAnchorItem(bh);
this._toggleInSelection(bh);
}else{this._setAnchorItem(bh);
this._setSelectedItem(bh);
}break;
}var bk=this.getMode();

if(this.getDrag()&&bk!==y&&bk!==z&&!bg&&!bj){this.__ms=this._getLocation();
this.__mp=this._getScroll();
this.__mt=event.getDocumentLeft()+this.__mp.left;
this.__mu=event.getDocumentTop()+this.__mp.top;
this.__mv=true;
this._capture();
}this._fireChange(S);
},handleMouseUp:function(event){var cv=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cs=event.isShiftPressed();

if(!cv&&!cs&&this.__mE){var ct=this._getSelectableFromMouseEvent(event);

if(ct===null||!this.isItemSelected(ct)){return;
}var cu=this.getMode();

if(cu===w){this._removeFromSelection(ct);
}else{this._setSelectedItem(ct);

if(this.getMode()===v){this._setLeadItem(ct);
this._setAnchorItem(ct);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__mv){return;
}this.__mw=event.getDocumentLeft();
this.__mx=event.getDocumentTop();
var cm=this.__mw+this.__mp.left;

if(cm>this.__mt){this.__my=1;
}else if(cm<this.__mt){this.__my=-1;
}else{this.__my=0;
}var cl=this.__mx+this.__mp.top;

if(cl>this.__mu){this.__mz=1;
}else if(cl<this.__mu){this.__mz=-1;
}else{this.__mz=0;
}var location=this.__ms;

if(this.__mw<location.left){this.__mm=this.__mw-location.left;
}else if(this.__mw>location.right){this.__mm=this.__mw-location.right;
}else{this.__mm=0;
}
if(this.__mx<location.top){this.__mn=this.__mx-location.top;
}else if(this.__mx>location.bottom){this.__mn=this.__mx-location.bottom;
}else{this.__mn=0;
}if(!this.__mo){this.__mo=new qx.event.Timer(100);
this.__mo.addListener(B,this._onInterval,this);
}this.__mo.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var cE=e.getData();

if(this.getMode()===z&&this.isSelectionEmpty()){this.addItem(cE);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__mv){return;
}if(this.__mA){this._fireChange(S);
}delete this.__mv;
delete this.__mq;
delete this.__mr;
this._releaseCapture();
if(this.__mo){this.__mo.stop();
}},_onInterval:function(e){this._scrollBy(this.__mm,this.__mn);
this.__mp=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bN=this._getDimension();
var bG=Math.max(0,Math.min(this.__mw-this.__ms.left,bN.width))+this.__mp.left;
var bF=Math.max(0,Math.min(this.__mx-this.__ms.top,bN.height))+this.__mp.top;
if(this.__mq===bG&&this.__mr===bF){return;
}this.__mq=bG;
this.__mr=bF;
var bP=this._getAnchorItem();
var bI=bP;
var bL=this.__my;
var bO,bH;

while(bL!==0){bO=bL>0?this._getRelatedSelectable(bI,T):this._getRelatedSelectable(bI,G);
if(bO!==null){bH=this._getSelectableLocationX(bO);
if((bL>0&&bH.left<=bG)||(bL<0&&bH.right>=bG)){bI=bO;
continue;
}}break;
}var bM=this.__mz;
var bK,bJ;

while(bM!==0){bK=bM>0?this._getRelatedSelectable(bI,t):this._getRelatedSelectable(bI,R);
if(bK!==null){bJ=this._getSelectableLocationY(bK);
if((bM>0&&bJ.top<=bF)||(bM<0&&bJ.bottom>=bF)){bI=bK;
continue;
}}break;
}var bQ=this.getMode();

if(bQ===v){this._selectItemRange(bP,bI);
}else if(bQ===w){if(this.isItemSelected(bP)){this._selectItemRange(bP,bI,true);
}else{this._deselectItemRange(bP,bI);
}this._setAnchorItem(bI);
}this._fireChange(E);
},__mF:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bY,bX;
var cb=event.getKeyIdentifier();
var ca=this.getMode();
var bU=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bV=event.isShiftPressed();
var bW=false;

if(cb===C&&bU){if(ca!==y&&ca!==z){this._selectAllItems();
bW=true;
}}else if(cb===H){if(ca!==y&&ca!==z){this._clearSelection();
bW=true;
}}else if(cb===F){var bT=this.getLeadItem();

if(bT&&!bV){if(bU||ca===w){this._toggleInSelection(bT);
}else{this._setSelectedItem(bT);
}bW=true;
}}else if(this.__mF[cb]){bW=true;

if(ca===y||ca==z){bY=this._getSelectedItem();
}else{bY=this.getLeadItem();
}
if(bY!==null){switch(cb){case V:bX=this._getFirstSelectable();
break;
case W:bX=this._getLastSelectable();
break;
case bb:bX=this._getRelatedSelectable(bY,R);
break;
case q:bX=this._getRelatedSelectable(bY,t);
break;
case s:bX=this._getRelatedSelectable(bY,G);
break;
case U:bX=this._getRelatedSelectable(bY,T);
break;
case u:bX=this._getPage(bY,true);
break;
case Y:bX=this._getPage(bY,false);
break;
}}else{switch(cb){case V:case q:case U:case Y:bX=this._getFirstSelectable();
break;
case W:case bb:case s:case u:bX=this._getLastSelectable();
break;
}}if(bX!==null){switch(ca){case y:case z:this._setSelectedItem(bX);
break;
case w:this._setLeadItem(bX);
break;
case v:if(bV){var cc=this._getAnchorItem();

if(cc===null){this._setAnchorItem(cc=this._getFirstSelectable());
}this._setLeadItem(bX);
this._selectItemRange(cc,bX,bU);
}else{this._setAnchorItem(bX);
this._setLeadItem(bX);

if(!bU){this._setSelectedItem(bX);
}}break;
}this._scrollItemIntoView(bX);
}}
if(bW){event.stop();
this._fireChange(O);
}},_selectAllItems:function(){var h=this.getSelectables();

for(var i=0,l=h.length;i<l;i++){this._addToSelection(h[i]);
}},_clearSelection:function(){var ch=this.__ml;

for(var ci in ch){this._removeFromSelection(ch[ci]);
}this.__ml={};
},_selectItemRange:function(br,bs,bt){var bw=this._getSelectableRange(br,bs);
if(!bt){var bv=this.__ml;
var bx=this.__mG(bw);

for(var bu in bv){if(!bx[bu]){this._removeFromSelection(bv[bu]);
}}}for(var i=0,l=bw.length;i<l;i++){this._addToSelection(bw[i]);
}},_deselectItemRange:function(cR,cS){var cT=this._getSelectableRange(cR,cS);

for(var i=0,l=cT.length;i<l;i++){this._removeFromSelection(cT[i]);
}},__mG:function(bl){var bn={};
var bm;

for(var i=0,l=bl.length;i<l;i++){bm=bl[i];
bn[this._selectableToHashCode(bm)]=bm;
}return bn;
},_getSelectedItem:function(){for(var cq in this.__ml){return this.__ml[cq];
}return null;
},_setSelectedItem:function(cn){if(this._isSelectable(cn)){var co=this.__ml;
var cp=this._selectableToHashCode(cn);

if(!co[cp]||qx.lang.Object.hasMinLength(co,2)){this._clearSelection();
this._addToSelection(cn);
}}},_addToSelection:function(f){var g=this._selectableToHashCode(f);

if(!this.__ml[g]&&this._isSelectable(f)){this.__ml[g]=f;
this._styleSelectable(f,x,true);
this.__mA=true;
}},_toggleInSelection:function(bp){var bq=this._selectableToHashCode(bp);

if(!this.__ml[bq]){this.__ml[bq]=bp;
this._styleSelectable(bp,x,true);
}else{delete this.__ml[bq];
this._styleSelectable(bp,x,false);
}this.__mA=true;
},_removeFromSelection:function(cY){var da=this._selectableToHashCode(cY);

if(this.__ml[da]!=null){delete this.__ml[da];
this._styleSelectable(cY,x,false);
this.__mA=true;
}},_replaceMultiSelection:function(cw){var cz=false;
var cC,cB;
var cx={};

for(var i=0,l=cw.length;i<l;i++){cC=cw[i];

if(this._isSelectable(cC)){cB=this._selectableToHashCode(cC);
cx[cB]=cC;
}}var cy=cC;
var cA=this.__ml;

for(var cB in cA){if(cx[cB]){delete cx[cB];
}else{cC=cA[cB];
delete cA[cB];
this._styleSelectable(cC,x,false);
cz=true;
}}for(var cB in cx){cC=cA[cB]=cx[cB];
this._styleSelectable(cC,x,true);
cz=true;
}if(!cz){return false;
}this._scrollItemIntoView(cy);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__mA=true;
this._fireChange();
},_fireChange:function(bD){if(this.__mA){this.__mB=bD||null;
this.fireDataEvent(I,this.getSelection());
delete this.__mA;
}}},destruct:function(){this._disposeObjects(N);
this.__ml=this.__mE=this.__mD=null;
this.__mC=null;
}});
})();
(function(){var B="vertical",A="under",z="above",y="qx.ui.core.selection.Widget",x="left",w="right";
qx.Class.define(y,{extend:qx.ui.core.selection.Abstract,construct:function(k){arguments.callee.base.call(this);
this.__lg=k;
},members:{__lg:null,_isSelectable:function(E){return E.isEnabled()&&E.isVisible()&&E.getLayoutParent()===this.__lg;
},_selectableToHashCode:function(v){return v.$$hash;
},_styleSelectable:function(a,b,c){c?a.addState(b):a.removeState(b);
},_capture:function(){this.__lg.capture();
},_releaseCapture:function(){this.__lg.releaseCapture();
},_getWidget:function(){return this.__lg;
},_getLocation:function(){var K=this.__lg.getContentElement().getDomElement();
return K?qx.bom.element.Location.get(K):null;
},_getDimension:function(){return this.__lg.getInnerSize();
},_getSelectableLocationX:function(m){var n=m.getBounds();

if(n){return {left:n.left,right:n.left+n.width};
}},_getSelectableLocationY:function(L){var M=L.getBounds();

if(M){return {top:M.top,bottom:M.top+M.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(C,D){},_scrollItemIntoView:function(G){this.__lg.scrollChildIntoView(G);
},getSelectables:function(){var I=this.__lg.getChildren();
var J=[];
var H;

for(var i=0,l=I.length;i<l;i++){H=I[i];

if(H.isEnabled()&&H.isVisible()){J.push(H);
}}return J;
},_getSelectableRange:function(d,e){if(d===e){return [d];
}var j=this.__lg.getChildren();
var f=[];
var h=false;
var g;

for(var i=0,l=j.length;i<l;i++){g=j[i];

if(g===d||g===e){if(h){f.push(g);
break;
}else{h=true;
}}
if(h&&g.isEnabled()&&g.isVisible()){f.push(g);
}}return f;
},_getFirstSelectable:function(){var F=this.__lg.getChildren();

for(var i=0,l=F.length;i<l;i++){if(F[i].isEnabled()&&F[i].isVisible()){return F[i];
}}return null;
},_getLastSelectable:function(){var u=this.__lg.getChildren();

for(var i=u.length-1;i>0;i--){if(u[i].isEnabled()&&u[i].isVisible()){return u[i];
}}return null;
},_getRelatedSelectable:function(o,p){var s=this.__lg.getOrientation()===B;
var r=this.__lg.getChildren();
var q=r.indexOf(o);
var t;

if((s&&p===z)||(!s&&p===x)){for(var i=q-1;i>=0;i--){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}else if((s&&p===A)||(!s&&p===w)){for(var i=q+1;i<r.length;i++){t=r[i];

if(t.isEnabled()&&t.isVisible()){return t;
}}}return null;
},_getPage:function(N,O){if(O){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__lg=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(a){return (a.isEnabled()&&a.isVisible()&&a.getLayoutParent()===this._getWidget().getChildrenContainer());
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
(function(){var q="right",p="above",o="left",n="under",m="qx.ui.tree.SelectionManager";
qx.Class.define(m,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(k){var l=k.getBounds();

if(l){var top=this._getWidget().getItemTop(k);
return {top:top,bottom:top+l.height};
}},_isSelectable:function(r){return r instanceof qx.ui.tree.AbstractTreeItem&&r.isEnabled()&&r.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var u=this._getWidget();
var v=[];

if(u.getRoot()!=null){var t=u.getRoot().getItems(true,false,u.getHideRoot());

for(var i=0;i<t.length;i++){if(this._isSelectable(t[i])){v.push(t[i]);
}}}return v;
},_getSelectableRange:function(e,f){if(e===f){return [e];
}var g=this.getSelectables();
var h=g.indexOf(e);
var j=g.indexOf(f);

if(h<0||j<0){return [];
}
if(h<j){return g.slice(h,j+1);
}else{return g.slice(j,h+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var s=this.getSelectables();

if(s.length>0){return s[s.length-1];
}else{return null;
}},_getRelatedSelectable:function(a,b){var c=this._getWidget();
var d=null;

switch(b){case p:d=c.getPreviousSiblingOf(a,false);
break;
case n:d=c.getNextSiblingOf(a,false);
break;
case o:case q:break;
}
if(!d){return null;
}
if(this._isSelectable(d)){return d;
}else{return this._getRelatedSelectable(d,b);
}}}});
})();
(function(){var A="dblclick",z="click",y="Boolean",x="excluded",w="visible",v="qx.event.type.Data",u="_applyOpenMode",t="Space",s="Left",r="__pP",O="Enter",N="changeOpenMode",M="_applyRootOpenClose",L="changeSelection",K="qx.ui.tree.Tree",J="tree",I="_applyHideRoot",H="changeRoot",G="_applyRoot",F="keypress",D="none",E="pane",B="Right",C="qx.ui.tree.AbstractTreeItem";
qx.Class.define(K,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__pP=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(E).add(this.__pP);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(L,this._onChangeSelection,this);
this.addListener(F,this._onKeyPress,this);
},events:{addItem:v,removeItem:v},properties:{openMode:{check:[z,A,D],init:A,apply:u,event:N,themeable:true},root:{check:C,init:null,nullable:true,event:H,apply:G},hideRoot:{check:y,init:false,apply:I},rootOpenClose:{check:y,init:false,apply:M},appearance:{refine:true,init:J},focusable:{refine:true,init:true}},members:{__pP:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__pP;
},_applyRoot:function(W,X){var Y=this.getChildrenContainer();

if(X){Y.remove(X);

if(X.hasChildren()){Y.remove(X.getChildrenContainer());
}}
if(W){Y.add(W);

if(W.hasChildren()){Y.add(W.getChildrenContainer());
}W.setVisibility(this.getHideRoot()?x:w);
W.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(T,U){var V=this.getRoot();

if(!V){return;
}V.setVisibility(T?x:w);
V.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(a,b){var c=this.getRoot();

if(!c){return;
}c.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__pP;
},getNextSiblingOf:function(ba,bb,bc){if((bb!==false||ba.isOpen())&&!(bc==true)&&ba.hasChildren()){return ba.getChildren()[0];
}
while(ba){var parent=ba.getParent();

if(!parent){return null;
}var be=parent.getChildren();
var bd=be.indexOf(ba);

if(bd>-1&&bd<be.length-1){return be[bd+1];
}ba=parent;
}return null;
},getPreviousSiblingOf:function(g,h,j){var parent=g.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==g){return null;
}}}else{if(g==this.getRoot()){return null;
}}var m=parent.getChildren();
var k=m.indexOf(g);

if(k>0){var l=m[k-1];

while((h!==false||l.isOpen())&&!(j==true)&&l.hasChildren()){var n=l.getChildren();
l=n[n.length-1];
}return l;
}else{return parent;
}},getItems:function(d,f){if(this.getRoot()!=null){return this.getRoot().getItems(d,f,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(Q){while(Q){if(Q==this){return null;
}
if(Q instanceof qx.ui.tree.AbstractTreeItem){return Q;
}Q=Q.getLayoutParent();
}return null;
},_applyOpenMode:function(o,p){if(p==z){this.removeListener(z,this._onOpen,this);
}else if(p==A){this.removeListener(A,this._onOpen,this);
}
if(o==z){this.addListener(z,this._onOpen,this);
}else if(o==A){this.addListener(A,this._onOpen,this);
}},_onOpen:function(e){var q=this.getTreeItem(e.getTarget());

if(!q||!q.isOpenable()){return;
}q.setOpen(!q.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var S=e.getData();
for(var i=0;i<S.length;i++){var R=S[i];
while(R.getParent()!=null){R=R.getParent();
R.setOpen(true);
}}},_onKeyPress:function(e){var P=this._getLeadItem();

if(P!==null){switch(e.getKeyIdentifier()){case s:if(P.isOpenable()&&P.isOpen()){P.setOpen(false);
}break;
case B:if(P.isOpenable()&&!P.isOpen()){P.setOpen(true);
}break;
case O:case t:if(P.isOpenable()){P.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(r);
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(a){this.assertNumber(a);
}}});
})();
(function(){var p="horizontal",o="px",n="scroll",m="vertical",l="-1px",k="qx.client",j="0",i="hidden",h="mousedown",g="qx.ui.core.scroll.NativeScrollBar",E="PositiveNumber",D="Integer",C="mousemove",B="_applyMaximum",A="_applyOrientation",z="appear",y="opera",x="PositiveInteger",w="mshtml",v="mouseup",t="Number",u="__nL",r="_applyPosition",s="scrollbar",q="native";
qx.Class.define(g,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(I){arguments.callee.base.call(this);
this.addState(q);
this.getContentElement().addListener(n,this._onScroll,this);
this.addListener(h,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(C,this._stopPropagation,this);

if(qx.core.Variant.isSet(k,y)){this.addListener(z,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:s},orientation:{check:[p,m],init:p,apply:A},maximum:{check:x,apply:B,init:100},position:{check:t,init:0,apply:r,event:n},singleStep:{check:D,init:20},knobFactor:{check:E,nullable:true}},members:{__nK:null,__nL:null,_getScrollPaneElement:function(){if(!this.__nL){this.__nL=new qx.html.Element();
}return this.__nL;
},renderLayout:function(a,top,b,c){var d=arguments.callee.base.call(this,a,top,b,c);
this._updateScrollBar();
return d;
},_getContentHint:function(){var f=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nK?100:f,maxWidth:this.__nK?null:f,minWidth:this.__nK?null:f,height:this.__nK?f:100,maxHeight:this.__nK?f:null,minHeight:this.__nK?f:null};
},_applyEnabled:function(V,W){arguments.callee.base.call(this,V,W);
this._updateScrollBar();
},_applyMaximum:function(T){this._updateScrollBar();
},_applyPosition:function(O){var content=this.getContentElement();

if(this.__nK){content.scrollToX(O);
}else{content.scrollToY(O);
}},_applyOrientation:function(F,G){var H=this.__nK=F===p;
this.set({allowGrowX:H,allowShrinkX:H,allowGrowY:!H,allowShrinkY:!H});

if(H){this.replaceState(m,p);
}else{this.replaceState(p,m);
}this.getContentElement().setStyles({overflowX:H?n:i,overflowY:H?i:n});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var K=this.__nK;
var L=this.getBounds();

if(!L){return;
}
if(this.isEnabled()){var M=K?L.width:L.height;
var J=this.getMaximum()+M;
}else{J=0;
}if(qx.core.Variant.isSet(k,w)){var L=this.getBounds();
this.getContentElement().setStyles({left:K?j:l,top:K?l:j,width:(K?L.width:L.width+1)+o,height:(K?L.height+1:L.height)+o});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(K?J:1)+o,height:(K?1:J)+o});
this.scrollTo(this.getPosition());
},scrollTo:function(U){this.setPosition(Math.max(0,Math.min(this.getMaximum(),U)));
},scrollBy:function(N){this.scrollTo(this.getPosition()+N);
},scrollBySteps:function(P){var Q=this.getSingleStep();
this.scrollBy(P*Q);
},_onScroll:function(e){var S=this.getContentElement();
var R=this.__nK?S.getScrollX():S.getScrollY();
this.setPosition(R);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(u);
}});
})();
(function(){var r="slider",q="horizontal",p="button-begin",o="vertical",n="button-end",m="Integer",l="execute",k="right",j="left",i="down",G="up",F="PositiveNumber",E="changeValue",D="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",C="_applyKnobFactor",B="knob",A="qx.ui.core.scroll.ScrollBar",z="resize",y="_applyOrientation",x="_applyPageStep",v="PositiveInteger",w="scroll",t="_applyPosition",u="scrollbar",s="_applyMaximum";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(L){arguments.callee.base.call(this);
this._createChildControl(p);
this._createChildControl(r).addListener(z,this._onResizeSlider,this);
this._createChildControl(n);
if(L!=null){this.setOrientation(L);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:u},orientation:{check:[q,o],init:q,apply:y},maximum:{check:v,apply:s,init:100},position:{check:D,init:0,apply:t,event:w},singleStep:{check:m,init:20},pageStep:{check:m,init:10,apply:x},knobFactor:{check:F,apply:C,nullable:true}},members:{__lj:2,_createChildControlImpl:function(Q){var R;

switch(Q){case r:R=new qx.ui.core.scroll.ScrollSlider();
R.setPageStep(100);
R.setFocusable(false);
R.addListener(E,this._onChangeSliderValue,this);
this._add(R,{flex:1});
break;
case p:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(l,this._onExecuteBegin,this);
this._add(R);
break;
case n:R=new qx.ui.form.RepeatButton();
R.setFocusable(false);
R.addListener(l,this._onExecuteEnd,this);
this._add(R);
break;
}return R||arguments.callee.base.call(this,Q);
},_applyMaximum:function(M){this.getChildControl(r).setMaximum(M);
},_applyPosition:function(K){this.getChildControl(r).setValue(K);
},_applyKnobFactor:function(h){this.getChildControl(r).setKnobFactor(h);
},_applyPageStep:function(f){this.getChildControl(r).setPageStep(f);
},_applyOrientation:function(H,I){var J=this._getLayout();

if(J){J.dispose();
}if(H===q){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(o,q);
this.getChildControl(p).replaceState(G,j);
this.getChildControl(n).replaceState(i,k);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(q,o);
this.getChildControl(p).replaceState(j,G);
this.getChildControl(n).replaceState(k,i);
}this.getChildControl(r).setOrientation(H);
},scrollTo:function(g){this.getChildControl(r).slideTo(g);
},scrollBy:function(P){this.getChildControl(r).slideBy(P);
},scrollBySteps:function(N){var O=this.getSingleStep();
this.getChildControl(r).slideBy(N*O);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var a=this.getChildControl(r).getChildControl(B);
var d=a.getSizeHint();
var b=false;
var c=this.getChildControl(r).getInnerSize();

if(this.getOrientation()==o){if(c.height<d.minHeight+this.__lj){b=true;
}}else{if(c.width<d.minWidth+this.__lj){b=true;
}}
if(b){a.exclude();
}else{a.show();
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
(function(){var bm="knob",bl="horizontal",bk="vertical",bj="Integer",bi="px",bh="mousemove",bg="resize",bf="left",be="top",bd="mouseup",bQ="slider",bP="PageUp",bO="mousedown",bN="height",bM="changeValue",bL="Left",bK="Down",bJ="Up",bI="dblclick",bH="qx.ui.form.Slider",bt="PageDown",bu="mousewheel",br="interval",bs="_applyValue",bp="_applyKnobFactor",bq="End",bn="width",bo="_applyOrientation",bv="Home",bw="floor",bz="_applyMinimum",by="click",bB="Right",bA="keypress",bD="ceil",bC="losecapture",bx="contextmenu",bG="_applyMaximum",bF="Number",bE="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bH,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(L){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bA,this._onKeyPress);
this.addListener(bu,this._onMouseWheel);
this.addListener(bO,this._onMouseDown);
this.addListener(bd,this._onMouseUp);
this.addListener(bC,this._onMouseUp);
this.addListener(bg,this._onUpdate);
this.addListener(bx,this._onStopEvent);
this.addListener(by,this._onStopEvent);
this.addListener(bI,this._onStopEvent);
if(L!=null){this.setOrientation(L);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bQ},focusable:{refine:true,init:true},orientation:{check:[bl,bk],init:bl,apply:bo},value:{check:bE,init:0,apply:bs,event:bM,nullable:true},minimum:{check:bj,init:0,apply:bz},maximum:{check:bj,init:100,apply:bG},singleStep:{check:bj,init:1},pageStep:{check:bj,init:10},knobFactor:{check:bF,apply:bp,nullable:true}},members:{__lI:null,__lJ:null,__lK:null,__lL:null,__lM:null,__lN:null,__lO:null,__lP:null,__lQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(c){var d;

switch(c){case bm:d=new qx.ui.core.Widget();
d.addListener(bg,this._onUpdate,this);
this._add(d);
break;
}return d||arguments.callee.base.call(this,c);
},_onMouseWheel:function(e){var m=e.getWheelDelta()>0?1:-1;
this.slideBy(m*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var g=this.getOrientation()===bl;
var f=g?bL:bJ;
var forward=g?bB:bK;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case f:this.slideBack();
break;
case bt:this.slidePageForward();
break;
case bP:this.slidePageBack();
break;
case bv:this.slideToBegin();
break;
case bq:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__lL){return;
}var H=this.__lS;
var F=this.getChildControl(bm);
var G=H?bf:be;
var J=H?e.getDocumentLeft():e.getDocumentTop();
var K=this.__lI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[G];
var I=this.__lJ=qx.bom.element.Location.get(F.getContainerElement().getDomElement())[G];

if(e.getTarget()===F){this.__lL=true;
this.__lM=J+K-I;
}else{this.__lN=true;
this.__lO=J<=I?-1:1;
this.__lT(e);
this._onInterval();
if(!this.__lQ){this.__lQ=new qx.event.Timer(100);
this.__lQ.addListener(br,this._onInterval,this);
}this.__lQ.start();
}this.addListener(bh,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__lL){this.releaseCapture();
delete this.__lL;
delete this.__lM;
}else if(this.__lN){this.__lQ.stop();
this.releaseCapture();
delete this.__lN;
delete this.__lO;
delete this.__lP;
}this.removeListener(bh,this._onMouseMove);
if(e.getType()===bd){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__lL){var T=this.__lS?e.getDocumentLeft():e.getDocumentTop();
var S=T-this.__lM;
this.slideTo(this._positionToValue(S));
}else if(this.__lN){this.__lT(e);
}e.stopPropagation();
},_onInterval:function(e){var Q=this.getValue()+(this.__lO*this.getPageStep());
if(Q<this.getMinimum()){Q=this.getMinimum();
}else if(Q>this.getMaximum()){Q=this.getMaximum();
}var R=this.__lO==-1;

if((R&&Q<=this.__lP)||(!R&&Q>=this.__lP)){Q=this.__lP;
}this.slideTo(Q);
},_onUpdate:function(e){var bS=this.getInnerSize();
var bT=this.getChildControl(bm).getBounds();
var bR=this.__lS?bn:bN;
this._updateKnobSize();
this.__lR=bS[bR]-bT[bR];
this.__lK=bT[bR];
this._updateKnobPosition();
},__lS:false,__lR:0,__lT:function(e){var t=this.__lS;
var A=t?e.getDocumentLeft():e.getDocumentTop();
var C=this.__lI;
var u=this.__lJ;
var E=this.__lK;
var B=A-C;

if(A>=u){B-=E;
}var y=this._positionToValue(B);
var v=this.getMinimum();
var w=this.getMaximum();

if(y<v){y=v;
}else if(y>w){y=w;
}else{var z=this.getValue();
var x=this.getPageStep();
var D=this.__lO<0?bw:bD;
y=z+(Math[D]((y-z)/x)*x);
}if(this.__lP==null||(this.__lO==-1&&y<=this.__lP)||(this.__lO==1&&y>=this.__lP)){this.__lP=y;
}},_positionToValue:function(n){var o=this.__lR;
if(o==null||o==0){return 0;
}var q=n/o;

if(q<0){q=0;
}else if(q>1){q=1;
}var p=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(p*q);
},_valueToPosition:function(U){var V=this.__lR;

if(V==null){return 0;
}var W=this.getMaximum()-this.getMinimum();
if(W==0){return 0;
}var U=U-this.getMinimum();
var X=U/W;

if(X<0){X=0;
}else if(X>1){X=1;
}return Math.round(V*X);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(a){var b=this.getChildControl(bm).getContainerElement();

if(this.__lS){b.setStyle(bf,a+bi,true);
}else{b.setStyle(be,a+bi,true);
}},_updateKnobSize:function(){var N=this.getKnobFactor();

if(N==null){return;
}var M=this.getInnerSize();

if(M==null){return;
}if(this.__lS){this.getChildControl(bm).setWidth(Math.round(N*M.width));
}else{this.getChildControl(bm).setHeight(Math.round(N*M.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bc){this.slideTo(this.getValue()+bc);
},slideTo:function(j){if(j<this.getMinimum()){j=this.getMinimum();
}else if(j>this.getMaximum()){j=this.getMaximum();
}else{j=this.getMinimum()+Math.round((j-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(j);
},_applyOrientation:function(Y,ba){var bb=this.getChildControl(bm);
this.__lS=Y===bl;
if(this.__lS){this.removeState(bk);
bb.removeState(bk);
this.addState(bl);
bb.addState(bl);
bb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bl);
bb.removeState(bl);
this.addState(bk);
bb.addState(bk);
bb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(O,P){if(O!=null){this._updateKnobSize();
}else{if(this.__lS){this.getChildControl(bm).resetWidth();
}else{this.getChildControl(bm).resetHeight();
}}},_applyValue:function(k,l){if(k!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(r,s){if(this.getValue()<r){this.setValue(r);
}this._updateKnobPosition();
},_applyMaximum:function(h,i){if(this.getValue()>h){this.setValue(h);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var J="top",I="left",H="qx.debug",G="bottom",F="hAlign",E="vAlign",D="Integer",C="_applyLayoutChange",B="center",A="middle",Y="right",X="flex",W="on",V="height",U="' is not supported by the Grid layout!",T="Invalid parameter 'column'",S="The property '",R="Value must be positive",Q="qx.ui.layout.Grid",P="maxHeight",N="width",O="minHeight",L="minWidth",M="maxWidth",K="Invalid parameter 'row'";
qx.Class.define(Q,{extend:qx.ui.layout.Abstract,construct:function(cj,ck){arguments.callee.base.call(this);
this.__gA=[];
this.__gB=[];

if(cj){this.setSpacingX(cj);
}
if(ck){this.setSpacingY(ck);
}},properties:{spacingX:{check:D,init:0,apply:C},spacingY:{check:D,init:0,apply:C}},members:{__gC:null,__gA:null,__gB:null,__gD:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,verifyLayoutProperty:qx.core.Variant.select(H,{"on":function(cd,name,ce){var cf={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(cf[name]==1,S+name+U);
this.assertInteger(ce);
this.assert(ce>=0,R);
},"off":null}),__gJ:function(){var p=[];
var o=[];
var q=[];
var m=-1;
var k=-1;
var s=this._getLayoutChildren();

for(var i=0,l=s.length;i<l;i++){var n=s[i];
var r=n.getLayoutProperties();
var t=r.row;
var h=r.column;
r.colSpan=r.colSpan||1;
r.rowSpan=r.rowSpan||1;
if(t==null||h==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+n+"' must be defined!");
}
if(p[t]&&p[t][h]){throw new Error("Cannot add widget '"+n+"'!. "+"There is already a widget '"+p[t][h]+"' in this cell ("+t+", "+h+")");
}
for(var x=h;x<h+r.colSpan;x++){for(var y=t;y<t+r.rowSpan;y++){if(p[y]==undefined){p[y]=[];
}p[y][x]=n;
k=Math.max(k,x);
m=Math.max(m,y);
}}
if(r.rowSpan>1){q.push(n);
}
if(r.colSpan>1){o.push(n);
}}for(var y=0;y<=m;y++){if(p[y]==undefined){p[y]=[];
}}this.__gC=p;
this.__gD=o;
this.__gE=q;
this.__gF=m;
this.__gG=k;
this.__gH=null;
this.__gI=null;
delete this._invalidChildrenCache;
},_setRowData:function(u,v,w){var z=this.__gA[u];

if(!z){this.__gA[u]={};
this.__gA[u][v]=w;
}else{z[v]=w;
}},_setColumnData:function(bE,bF,bG){var bH=this.__gB[bE];

if(!bH){this.__gB[bE]={};
this.__gB[bE][bF]=bG;
}else{bH[bF]=bG;
}},setSpacing:function(cp){this.setSpacingY(cp);
this.setSpacingX(cp);
return this;
},setColumnAlign:function(dQ,dR,dS){if(qx.core.Variant.isSet(H,W)){this.assertInteger(dQ,T);
this.assertInArray(dR,[I,B,Y]);
this.assertInArray(dS,[J,A,G]);
}this._setColumnData(dQ,F,dR);
this._setColumnData(dQ,E,dS);
this._applyLayoutChange();
return this;
},getColumnAlign:function(en){var eo=this.__gB[en]||{};
return {vAlign:eo.vAlign||J,hAlign:eo.hAlign||I};
},setRowAlign:function(be,bf,bg){if(qx.core.Variant.isSet(H,W)){this.assertInteger(be,K);
this.assertInArray(bf,[I,B,Y]);
this.assertInArray(bg,[J,A,G]);
}this._setRowData(be,F,bf);
this._setRowData(be,E,bg);
this._applyLayoutChange();
return this;
},getRowAlign:function(eh){var ei=this.__gA[eh]||{};
return {vAlign:ei.vAlign||J,hAlign:ei.hAlign||I};
},getCellWidget:function(cP,cQ){if(this._invalidChildrenCache){this.__gJ();
}var cP=this.__gC[cP]||{};
return cP[cQ]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gF+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__gJ();
}return this.__gG+1;
},getCellAlign:function(bw,bx){var bD=J;
var bB=I;
var bC=this.__gA[bw];
var bz=this.__gB[bx];
var by=this.__gC[bw][bx];

if(by){var bA={vAlign:by.getAlignY(),hAlign:by.getAlignX()};
}else{bA={};
}if(bA.vAlign){bD=bA.vAlign;
}else if(bC&&bC.vAlign){bD=bC.vAlign;
}else if(bz&&bz.vAlign){bD=bz.vAlign;
}if(bA.hAlign){bB=bA.hAlign;
}else if(bz&&bz.hAlign){bB=bz.hAlign;
}else if(bC&&bC.hAlign){bB=bC.hAlign;
}return {vAlign:bD,hAlign:bB};
},setColumnFlex:function(bc,bd){this._setColumnData(bc,X,bd);
this._applyLayoutChange();
return this;
},getColumnFlex:function(ba){var bb=this.__gB[ba]||{};
return bb.flex!==undefined?bb.flex:0;
},setRowFlex:function(ej,ek){this._setRowData(ej,X,ek);
this._applyLayoutChange();
return this;
},getRowFlex:function(cg){var ch=this.__gA[cg]||{};
var ci=ch.flex!==undefined?ch.flex:0;
return ci;
},setColumnMaxWidth:function(cl,cm){this._setColumnData(cl,M,cm);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bI){var bJ=this.__gB[bI]||{};
return bJ.maxWidth!==undefined?bJ.maxWidth:Infinity;
},setColumnWidth:function(ef,eg){this._setColumnData(ef,N,eg);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dO){var dP=this.__gB[dO]||{};
return dP.width!==undefined?dP.width:null;
},setColumnMinWidth:function(el,em){this._setColumnData(el,L,em);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bV){var bW=this.__gB[bV]||{};
return bW.minWidth||0;
},setRowMaxHeight:function(cN,cO){this._setRowData(cN,P,cO);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cq){var cr=this.__gA[cq]||{};
return cr.maxHeight||Infinity;
},setRowHeight:function(bu,bv){this._setRowData(bu,V,bv);
this._applyLayoutChange();
return this;
},getRowHeight:function(cn){var co=this.__gA[cn]||{};
return co.height!==undefined?co.height:null;
},setRowMinHeight:function(bs,bt){this._setRowData(bs,O,bt);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dM){var dN=this.__gA[dM]||{};
return dN.minHeight||0;
},__gK:function(bX){var cc=bX.getSizeHint();
var cb=bX.getMarginLeft()+bX.getMarginRight();
var ca=bX.getMarginTop()+bX.getMarginBottom();
var bY={height:cc.height+ca,width:cc.width+cb,minHeight:cc.minHeight+ca,minWidth:cc.minWidth+cb,maxHeight:cc.maxHeight+ca,maxWidth:cc.maxWidth+cb};
return bY;
},_fixHeightsRowSpan:function(cR){var dd=this.getSpacingY();

for(var i=0,l=this.__gE.length;i<l;i++){var cU=this.__gE[i];
var cW=this.__gK(cU);
var cX=cU.getLayoutProperties();
var cT=cX.row;
var db=dd*(cX.rowSpan-1);
var cS=db;
var da={};

for(var j=0;j<cX.rowSpan;j++){var df=cX.row+j;
var cV=cR[df];
var de=this.getRowFlex(df);

if(de>0){da[df]={min:cV.minHeight,value:cV.height,max:cV.maxHeight,flex:de};
}db+=cV.height;
cS+=cV.minHeight;
}if(db<cW.height){var dc=qx.ui.layout.Util.computeFlexOffsets(da,cW.height,db);

for(var j=0;j<cX.rowSpan;j++){var cY=dc[cT+j]?dc[cT+j].offset:0;
cR[cT+j].height+=cY;
}}if(cS<cW.minHeight){var dc=qx.ui.layout.Util.computeFlexOffsets(da,cW.minHeight,cS);

for(var j=0;j<cX.rowSpan;j++){var cY=dc[cT+j]?dc[cT+j].offset:0;
cR[cT+j].minHeight+=cY;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__gD.length;i<l;i++){var ct=this.__gD[i];
var cv=this.__gK(ct);
var cy=ct.getLayoutProperties();
var cu=cy.column;
var cE=cw*(cy.colSpan-1);
var cx=cE;
var cz={};
var cB;

for(var j=0;j<cy.colSpan;j++){var cF=cy.column+j;
var cD=cs[cF];
var cC=this.getColumnFlex(cF);
if(cC>0){cz[cF]={min:cD.minWidth,value:cD.width,max:cD.maxWidth,flex:cC};
}cE+=cD.width;
cx+=cD.minWidth;
}if(cE<cv.width){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.width,cE);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].width+=cB;
}}if(cx<cv.minWidth){var cA=qx.ui.layout.Util.computeFlexOffsets(cz,cv.minWidth,cx);

for(var j=0;j<cy.colSpan;j++){cB=cA[cu+j]?cA[cu+j].offset:0;
cs[cu+j].minWidth+=cB;
}}}},_getRowHeights:function(){if(this.__gH!=null){return this.__gH;
}var bq=[];
var bj=this.__gF;
var bi=this.__gG;

for(var br=0;br<=bj;br++){var bk=0;
var bm=0;
var bl=0;

for(var bp=0;bp<=bi;bp++){var bh=this.__gC[br][bp];

if(!bh){continue;
}var bn=bh.getLayoutProperties().rowSpan||0;

if(bn>1){continue;
}var bo=this.__gK(bh);

if(this.getRowFlex(br)>0){bk=Math.max(bk,bo.minHeight);
}else{bk=Math.max(bk,bo.height);
}bm=Math.max(bm,bo.height);
}var bk=Math.max(bk,this.getRowMinHeight(br));
var bl=this.getRowMaxHeight(br);

if(this.getRowHeight(br)!==null){var bm=this.getRowHeight(br);
}else{var bm=Math.max(bk,Math.min(bm,bl));
}bq[br]={minHeight:bk,height:bm,maxHeight:bl};
}
if(this.__gE.length>0){this._fixHeightsRowSpan(bq);
}this.__gH=bq;
return bq;
},_getColWidths:function(){if(this.__gI!=null){return this.__gI;
}var dX=[];
var dU=this.__gG;
var dW=this.__gF;

for(var ed=0;ed<=dU;ed++){var eb=0;
var ea=0;
var dV=Infinity;

for(var ee=0;ee<=dW;ee++){var dT=this.__gC[ee][ed];

if(!dT){continue;
}var dY=dT.getLayoutProperties().colSpan||0;

if(dY>1){continue;
}var ec=this.__gK(dT);

if(this.getColumnFlex(ed)>0){ea=Math.max(ea,ec.minWidth);
}else{ea=Math.max(ea,ec.width);
}eb=Math.max(eb,ec.width);
}var ea=Math.max(ea,this.getColumnMinWidth(ed));
var dV=this.getColumnMaxWidth(ed);

if(this.getColumnWidth(ed)!==null){var eb=this.getColumnWidth(ed);
}else{var eb=Math.max(ea,Math.min(eb,dV));
}dX[ed]={minWidth:ea,width:eb,maxWidth:dV};
}
if(this.__gD.length>0){this._fixWidthsColSpan(dX);
}this.__gI=dX;
return dX;
},_getColumnFlexOffsets:function(cG){var cH=this.getSizeHint();
var cL=cG-cH.width;

if(cL==0){return {};
}var cJ=this._getColWidths();
var cI={};

for(var i=0,l=cJ.length;i<l;i++){var cM=cJ[i];
var cK=this.getColumnFlex(i);

if((cK<=0)||(cM.width==cM.maxWidth&&cL>0)||(cM.width==cM.minWidth&&cL<0)){continue;
}cI[i]={min:cM.minWidth,value:cM.width,max:cM.maxWidth,flex:cK};
}return qx.ui.layout.Util.computeFlexOffsets(cI,cG,cH.width);
},_getRowFlexOffsets:function(a){var b=this.getSizeHint();
var e=a-b.height;

if(e==0){return {};
}var f=this._getRowHeights();
var c={};

for(var i=0,l=f.length;i<l;i++){var g=f[i];
var d=this.getRowFlex(i);

if((d<=0)||(g.height==g.maxHeight&&e>0)||(g.height==g.minHeight&&e<0)){continue;
}c[i]={min:g.minHeight,value:g.height,max:g.maxHeight,flex:d};
}return qx.ui.layout.Util.computeFlexOffsets(c,a,b.height);
},renderLayout:function(dg,dh){if(this._invalidChildrenCache){this.__gJ();
}var dw=qx.ui.layout.Util;
var dj=this.getSpacingX();
var dq=this.getSpacingY();
var dB=this._getColWidths();
var dA=this._getColumnFlexOffsets(dg);
var dk=[];
var dD=this.__gG;
var di=this.__gF;
var dC;

for(var dE=0;dE<=dD;dE++){dC=dA[dE]?dA[dE].offset:0;
dk[dE]=dB[dE].width+dC;
}var dt=this._getRowHeights();
var dv=this._getRowFlexOffsets(dh);
var dK=[];

for(var dr=0;dr<=di;dr++){dC=dv[dr]?dv[dr].offset:0;
dK[dr]=dt[dr].height+dC;
}var dL=0;

for(var dE=0;dE<=dD;dE++){var top=0;

for(var dr=0;dr<=di;dr++){var dy=this.__gC[dr][dE];
if(!dy){top+=dK[dr]+dq;
continue;
}var dl=dy.getLayoutProperties();
if(dl.row!==dr||dl.column!==dE){top+=dK[dr]+dq;
continue;
}var dJ=dj*(dl.colSpan-1);

for(var i=0;i<dl.colSpan;i++){dJ+=dk[dE+i];
}var dz=dq*(dl.rowSpan-1);

for(var i=0;i<dl.rowSpan;i++){dz+=dK[dr+i];
}var dm=dy.getSizeHint();
var dH=dy.getMarginTop();
var dx=dy.getMarginLeft();
var du=dy.getMarginBottom();
var dp=dy.getMarginRight();
var ds=Math.max(dm.minWidth,Math.min(dJ-dx-dp,dm.maxWidth));
var dI=Math.max(dm.minHeight,Math.min(dz-dH-du,dm.maxHeight));
var dF=this.getCellAlign(dr,dE);
var dG=dL+dw.computeHorizontalAlignOffset(dF.hAlign,ds,dJ,dx,dp);
var dn=top+dw.computeVerticalAlignOffset(dF.vAlign,dI,dz,dH,du);
dy.renderLayout(dG,dn,ds,dI);
top+=dK[dr]+dq;
}dL+=dk[dE]+dj;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__gI=null;
this.__gH=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__gJ();
}var bO=this._getColWidths();
var bQ=0,bR=0;

for(var i=0,l=bO.length;i<l;i++){var bS=bO[i];

if(this.getColumnFlex(i)>0){bQ+=bS.minWidth;
}else{bQ+=bS.width;
}bR+=bS.width;
}var bT=this._getRowHeights();
var bM=0,bP=0;

for(var i=0,l=bT.length;i<l;i++){var bU=bT[i];

if(this.getRowFlex(i)>0){bM+=bU.minHeight;
}else{bM+=bU.height;
}bP+=bU.height;
}var bL=this.getSpacingX()*(bO.length-1);
var bK=this.getSpacingY()*(bT.length-1);
var bN={minWidth:bQ+bL,width:bR+bL,minHeight:bM+bK,height:bP+bK};
return bN;
}},destruct:function(){this.__gC=this.__gA=this.__gB=this.__gD=this.__gE=this.__gI=this.__gH=null;
}});
})();
(function(){var t="open",s="auto",r="qx.debug",q="middle",p="icon",o="label",n="on",m="changeOpen",k="excluded",j="visible",P="String",O="opened",N="always",M="qx.ui.tree.AbstractTreeItem",L="addItem",K="Boolean",J="__nq",I="Invalid child index: ",H="Integer",G="_applyIndent",A="changeOpenSymbolMode",B="_applyOpenSymbolMode",y="resize",z="__nt",w="",x="removeItem",u="__np",v="abstract",C="never",D="_applyIcon",F="_applyOpen",E="_applyLabel";
qx.Class.define(M,{extend:qx.ui.core.Widget,type:v,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__np=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:K,init:false,event:m,apply:F},openSymbolMode:{check:[N,C,s],init:s,event:A,apply:B},indent:{check:H,init:19,apply:G,themeable:true},parent:{check:M,nullable:true},icon:{check:P,apply:D,nullable:true,themeable:true},label:{check:P,apply:E,init:w}},members:{__np:null,__nq:null,__nr:null,__ns:null,__nt:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bD){var bE;

switch(bD){case o:bE=new qx.ui.basic.Label().set({alignY:q,value:this.getLabel()});
break;
case p:bE=new qx.ui.basic.Image().set({alignY:q,source:this.getIcon()});
break;
case t:bE=new qx.ui.tree.FolderOpenButton().set({alignY:q});
bE.addListener(m,this._onChangeOpen,this);
bE.addListener(y,this._updateIndent,this);
break;
}return bE||arguments.callee.base.call(this,bD);
},getTree:function(){var bS=this;

while(bS.getParent()){bS=bS.getParent();
}var bR=bS.getLayoutParent()?bS.getLayoutParent().getLayoutParent():0;

if(bR&&bR instanceof qx.ui.core.scroll.ScrollPane){return bR.getLayoutParent();
}return null;
},addWidget:function(by,bz){this._add(by,bz);
},addSpacer:function(){if(!this.__nt){this.__nt=new qx.ui.core.Spacer();
}else{this._remove(this.__nt);
}this._add(this.__nt);
},addOpenButton:function(){this._add(this.getChildControl(t));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var br=this.getChildControl(p);

if(this.__ns){this._remove(br);
}this._add(br);
this.__ns=true;
},addLabel:function(g){var h=this.getChildControl(o);

if(this.__nr){this._remove(h);
}
if(g){this.setLabel(g);
}else{h.setValue(this.getLabel());
}this._add(h);
this.__nr=true;
},addState:function(bA){arguments.callee.base.call(this,bA);
var bC=this._getChildren();

for(var i=0,l=bC.length;i<l;i++){var bB=bC[i];

if(bB.addState){bC[i].addState(bA);
}}},removeState:function(bV){arguments.callee.base.call(this,bV);
var bX=this._getChildren();

for(var i=0,l=bX.length;i<l;i++){var bW=bX[i];

if(bW.addState){bX[i].removeState(bV);
}}},_applyIcon:function(bM,bN){var bO=this.getChildControl(p,true);

if(bO){bO.setSource(bM);
}},_applyLabel:function(bj,bk){var bl=this.getChildControl(o,true);

if(bl){bl.setValue(bj);
}},_applyOpen:function(Q,R){if(this.hasChildren()){this.getChildrenContainer().setVisibility(Q?j:k);
}var open=this.getChildControl(t,true);

if(open){open.setOpen(Q);
}Q?this.addState(O):this.removeState(O);
},isOpenable:function(){var bv=this.getOpenSymbolMode();
return (bv===N||bv===s&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(t,true);

if(!open){return false;
}var bu=this.getTree();

if(!bu.getRootOpenClose()){if(bu.getHideRoot()){if(bu.getRoot()==this.getParent()){return false;
}}else{if(bu.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(T,U){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bx=0;
var open=this.getChildControl(t,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bw=open.getBounds();

if(bw){bx=bw.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nt){this.__nt.setWidth((this.getLevel()+1)*this.getIndent()-bx);
}},_applyIndent:function(bs,bt){this._updateIndent();
},getLevel:function(){var c=this.getTree();

if(!c){return;
}var d=this;
var f=-1;

while(d){d=d.getParent();
f+=1;
}if(c.getHideRoot()){f-=1;
}
if(!c.getRootOpenClose()){f-=1;
}return f;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__nq){this.__nq=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:k});
}return this.__nq;
},hasChildrenContainer:function(){return this.__nq;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__np;
},hasChildren:function(){return this.__np?this.__np.length>0:false;
},getItems:function(bc,bd,be){if(be!==false){var bf=[];
}else{var bf=[this];
}var bi=this.hasChildren()&&(bd!==false||this.isOpen());

if(bi){var bh=this.getChildren();

if(bc===false){bf=bf.concat(bh);
}else{for(var i=0,bg=bh.length;i<bg;i++){bf=bf.concat(bh[i].getItems(bc,bd,false));
}}}return bf;
},recursiveAddToWidgetQueue:function(){var S=this.getItems(true,true,false);

for(var i=0,l=S.length;i<l;i++){qx.ui.core.queue.Widget.add(S[i]);
}},__nu:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(V){var W=this.getChildrenContainer();
var ba=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bb=arguments[i];
var Y=bb.getParent();

if(Y){Y.remove(bb);
}bb.setParent(this);
var X=this.hasChildren();
W.add(bb);

if(bb.hasChildren()){W.add(bb.getChildrenContainer());
}this.__np.push(bb);

if(!X){this.__nu();
}
if(ba){bb.recursiveAddToWidgetQueue();
ba.fireNonBubblingEvent(L,qx.event.type.Data,[bb]);
}}
if(ba){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bF,bG){if(qx.core.Variant.isSet(r,n)){this.assert(bG<=this.__np.length&&bG>=0,I+bG);
}
if(bG==this.__np.length){this.add(bF);
return;
}var bK=bF.getParent();

if(bK){bK.remove(bF);
}var bI=this.getChildrenContainer();
bF.setParent(this);
var bJ=this.hasChildren();
var bH=this.__np[bG];
bI.addBefore(bF,bH);

if(bF.hasChildren()){bI.addAfter(bF.getChildrenContainer(),bF);
}qx.lang.Array.insertAt(this.__np,bF,bG);

if(!bJ){this.__nu();
}
if(this.getTree()){bF.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bT,bU){if(qx.core.Variant.isSet(r,n)){this.assert(this.__np.indexOf(bU)>=0);
}this.addAt(bT,this.__np.indexOf(bU));
},addAfter:function(a,b){if(qx.core.Variant.isSet(r,n)){this.assert(this.__np.indexOf(b)>=0);
}this.addAt(a,this.__np.indexOf(b)+1);
},addAtBegin:function(bL){this.addAt(bL,0);
},remove:function(bm){for(var i=0,l=arguments.length;i<l;i++){var bq=arguments[i];

if(this.__np.indexOf(bq)==-1){this.warn("Cannot remove treeitem '"+bq+"'. It is not a child of this tree item.");
return;
}var bn=this.getChildrenContainer();

if(bq.hasChildrenContainer()){var bp=bq.getChildrenContainer();

if(bn.getChildren().indexOf(bp)>=0){bn.remove(bp);
}}qx.lang.Array.remove(this.__np,bq);
bq.setParent(null);
bn.remove(bq);
}var bo=this.getTree();

if(bo){bo.fireNonBubblingEvent(x,qx.event.type.Data,[bq]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bP){var bQ=this.__np[bP];

if(bQ){this.remove(bQ);
}},removeAll:function(){for(var i=this.__np.length-1;i>=0;i--){this.remove(this.__np[i]);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(z,J);
}});
})();
(function(){var k="opened",j="click",i="changeOpen",h="Boolean",g="qx.ui.tree.FolderOpenButton",f="_applyOpen",d="mouseup",c="mousedown";
qx.Class.define(g,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
this.initOpen();
this.addListener(j,this._onClick);
this.addListener(c,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
},properties:{open:{check:h,init:false,event:i,apply:f}},members:{_applyOpen:function(a,b){a?this.addState(k):this.removeState(k);
this.execute();
},_stopPropagation:function(e){e.stopPropagation();
},_onClick:function(e){this.toggleOpen();
e.stopPropagation();
}}});
})();
(function(){var b="tree-folder",a="qx.ui.tree.TreeFolder";
qx.Class.define(a,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:b}},members:{_addWidgets:function(){this.addSpacer();
this.addOpenButton();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var b="qx.ui.tree.TreeFile",a="tree-file";
qx.Class.define(b,{extend:qx.ui.tree.AbstractTreeItem,construct:function(c){arguments.callee.base.call(this);

if(c){this.setLabel(c);
}},properties:{appearance:{refine:true,init:a}},members:{_addWidgets:function(){this.addSpacer();
this.addIcon();
this.addLabel();
}}});
})();
(function(){var C="Boolean",B="qx.event.type.Event",A="queued",z="String",y="sending",x="qx.io.remote.Response",w="receiving",u="aborted",t="failed",s="nocache",bk="completed",bj="POST",bi="configured",bh="timeout",bg="GET",bf="Pragma",be="no-url-params-on-post",bd="no-cache",bc="Cache-Control",bb="Content-Type",J="text/plain",K="application/xml",H="application/json",I="text/html",F="qx.ioRemoteDebug",G="application/x-www-form-urlencoded",D="qx.io.remote.Exchange",E="Integer",L="X-Qooxdoo-Response-Type",M="HEAD",S="qx.io.remote.Request",R="qx.debug",U="_applyResponseType",T="_applyState",W="text/javascript",V="changeState",O="PUT",ba="_applyProhibitCaching",Y="",X="_applyMethod",N="DELETE",P="boolean",Q="on";
qx.Class.define(S,{extend:qx.core.Object,construct:function(a,b,c){arguments.callee.base.call(this);
this.__pJ={};
this.__pK={};
this.__pL={};
this.__pM={};

if(a!==undefined){this.setUrl(a);
}
if(b!==undefined){this.setMethod(b);
}
if(c!==undefined){this.setResponseType(c);
}this.setProhibitCaching(true);
this.__pN=++qx.io.remote.Request.__pN;
},events:{"created":B,"configured":B,"sending":B,"receiving":B,"completed":x,"aborted":x,"failed":x,"timeout":x},statics:{__pN:0},properties:{url:{check:z,init:Y},method:{check:[bg,bj,O,M,N],apply:X,init:bg},asynchronous:{check:C,init:true},data:{check:z,nullable:true},username:{check:z,nullable:true},password:{check:z,nullable:true},state:{check:[bi,A,y,w,bk,u,bh,t],init:bi,apply:T,event:V},responseType:{check:[J,W,H,K,I],init:J,apply:U},timeout:{check:E,nullable:true},prohibitCaching:{check:function(v){return typeof v==P||v===be;
},init:true,apply:ba},crossDomain:{check:C,init:false},fileUpload:{check:C,init:false},transport:{check:D,nullable:true},useBasicHttpAuth:{check:C,init:false}},members:{__pJ:null,__pK:null,__pL:null,__pM:null,__pN:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case y:case w:this.error("Aborting already sent request!");
case A:this.abort();
break;
}},isConfigured:function(){return this.getState()===bi;
},isQueued:function(){return this.getState()===A;
},isSending:function(){return this.getState()===y;
},isReceiving:function(){return this.getState()===w;
},isCompleted:function(){return this.getState()===bk;
},isAborted:function(){return this.getState()===u;
},isTimeout:function(){return this.getState()===bh;
},isFailed:function(){return this.getState()===t;
},__pO:function(e){var l=e.clone();
l.setTarget(this);
this.dispatchEvent(l);
},_onqueued:function(e){this.setState(A);
this.__pO(e);
},_onsending:function(e){this.setState(y);
this.__pO(e);
},_onreceiving:function(e){this.setState(w);
this.__pO(e);
},_oncompleted:function(e){this.setState(bk);
this.__pO(e);
this.dispose();
},_onaborted:function(e){this.setState(u);
this.__pO(e);
this.dispose();
},_ontimeout:function(e){this.setState(bh);
this.__pO(e);
this.dispose();
},_onfailed:function(e){this.setState(t);
this.__pO(e);
this.dispose();
},_applyState:function(g,h){if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(F)){this.debug("State: "+g);
}}},_applyProhibitCaching:function(bp,bq){if(!bp){this.removeParameter(s);
this.removeRequestHeader(bf);
this.removeRequestHeader(bc);
return;
}if(bp!==be||this.getMethod()!=bj){this.setParameter(s,new Date().valueOf());
}else{this.removeParameter(s);
}this.setRequestHeader(bf,bd);
this.setRequestHeader(bc,bd);
},_applyMethod:function(m,n){if(m===bj){this.setRequestHeader(bb,G);
}else{this.removeRequestHeader(bb);
}var o=this.getProhibitCaching();
this._applyProhibitCaching(o,o);
},_applyResponseType:function(i,j){this.setRequestHeader(L,i);
},setRequestHeader:function(p,q){this.__pJ[p]=q;
},removeRequestHeader:function(r){delete this.__pJ[r];
},getRequestHeader:function(k){return this.__pJ[k]||null;
},getRequestHeaders:function(){return this.__pJ;
},setParameter:function(bt,bu,bv){if(bv){this.__pL[bt]=bu;
}else{this.__pK[bt]=bu;
}},removeParameter:function(bn,bo){if(bo){delete this.__pL[bn];
}else{delete this.__pK[bn];
}},getParameter:function(br,bs){if(bs){return this.__pL[br]||null;
}else{return this.__pK[br]||null;
}},getParameters:function(bw){return (bw?this.__pL:this.__pK);
},setFormField:function(d,f){this.__pM[d]=f;
},removeFormField:function(bm){delete this.__pM[bm];
},getFormField:function(bl){return this.__pM[bl]||null;
},getFormFields:function(){return this.__pM;
},getSequenceNumber:function(){return this.__pN;
}},destruct:function(){this.setTransport(null);
this.__pJ=this.__pK=this.__pL=this.__pM=null;
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
(function(){var m="qx.ioRemoteDebug",l="Integer",k="on",j="qx.debug",h="aborted",g="_onaborted",f="_on",d="Boolean",c="singleton",b="__mI",y="interval",x="__mK",w="receiving",v="Request-Queue Progress: ",u="queued",t="/",s="_applyEnabled",r="sending",q="completed",p="failed",n="qx.io.remote.RequestQueue",o="timeout";
qx.Class.define(n,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mH=[];
this.__mI=[];
this.__mJ=0;
this.__mK=new qx.event.Timer(500);
this.__mK.addListener(y,this._oninterval,this);
},properties:{enabled:{init:true,check:d,apply:s},maxTotalRequests:{check:l,nullable:true},maxConcurrentRequests:{check:l,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:l,init:5000}},members:{__mH:null,__mI:null,__mJ:null,__mK:null,getRequestQueue:function(){return this.__mH;
},getActiveQueue:function(){return this.__mI;
},_debug:function(){if(qx.core.Variant.isSet(j,k)){if(qx.core.Setting.get(m)){var G=this.__mI.length+t+(this.__mH.length+this.__mI.length);
this.debug("Progress: "+G);
window.status=v+G;
}}},_check:function(){this._debug();
if(this.__mI.length==0&&this.__mH.length==0){this.__mK.stop();
}if(!this.getEnabled()){return;
}if(this.__mH.length==0||(this.__mH[0].isAsynchronous()&&this.__mI.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__mJ>=this.getMaxTotalRequests()){return;
}var K=this.__mH.shift();
var L=new qx.io.remote.Exchange(K);
this.__mJ++;
this.__mI.push(L);
this._debug();
L.addListener(r,this._onsending,this);
L.addListener(w,this._onreceiving,this);
L.addListener(q,this._oncompleted,this);
L.addListener(h,this._oncompleted,this);
L.addListener(o,this._oncompleted,this);
L.addListener(p,this._oncompleted,this);
L._start=(new Date).valueOf();
L.send();
if(this.__mH.length>0){this._check();
}},_remove:function(S){qx.lang.Array.remove(this.__mI,S);
S.dispose();
this._check();
},__mL:0,_onsending:function(e){if(qx.core.Variant.isSet(j,k)){if(qx.core.Setting.get(m)){this.__mL++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__mL);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(j,k)){if(qx.core.Setting.get(m)){if(e.getTarget()._counted){this.__mL--;
this.debug("ActiveCount: "+this.__mL);
}}}var Q=e.getTarget().getRequest();
var P=f+e.getType();
try{if(Q[P]){Q[P](e);
}}catch(a){var O=qx.dev.StackTrace.getStackTraceFromError(a);
this.error("Request "+Q+" handler "+P+" threw an error: "+a+"\nStack Trace:\n"+O);
try{if(Q[g]){var event=qx.event.Registration.createEvent(h,qx.event.type.Event);
Q[g](event);
}}catch(R){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var F=this.__mI;

if(F.length==0){this.__mK.stop();
return;
}var A=(new Date).valueOf();
var D;
var B;
var E=this.getDefaultTimeout();
var C;
var z;

for(var i=F.length-1;i>=0;i--){D=F[i];
B=D.getRequest();

if(B.isAsynchronous()){C=B.getTimeout();
if(C==0){continue;
}
if(C==null){C=E;
}z=A-D._start;

if(z>C){this.warn("Timeout: transport "+D.toHashCode());
this.warn(z+"ms > "+C+"ms");
D.timeout();
}}}},_applyEnabled:function(M,N){if(M){this._check();
}this.__mK.setEnabled(M);
},add:function(J){J.setState(u);

if(J.isAsynchronous()){this.__mH.push(J);
}else{this.__mH.unshift(J);
}this._check();

if(this.getEnabled()){this.__mK.start();
}},abort:function(H){var I=H.getTransport();

if(I){I.abort();
}else if(qx.lang.Array.contains(this.__mH,H)){qx.lang.Array.remove(this.__mH,H);
}}},destruct:function(){this._disposeArray(b);
this._disposeObjects(x);
this.__mH=null;
}});
})();
(function(){var A="qx.ioRemoteDebug",z="qx.debug",y="on",x="failed",w="sending",v="completed",u="receiving",t="aborted",s="timeout",r="qx.io.remote.Response",by="Connection dropped",bx="configured",bw="qx.event.type.Event",bv="Proxy authentication required",bu="qx.io.remote.transport.Abstract",bt="MSHTML-specific HTTP status code",bs="Not available",br="Precondition failed",bq="Server error",bp="qx.io.remote.Exchange",H="Bad gateway",I="Gone",F="See other",G="Partial content",D="Server timeout",E="qx.io.remote.transport.Script",B="HTTP version not supported",C="Unauthorized",L="Multiple choices",M="Payment required",U="Not implemented",S="Request-URL too large",bd="Length required",X="_applyState",bl="changeState",bi="Not modified",O="Not acceptable",bo="qx.io.remote.Request",bn="Connection closed by server",bm="Moved permanently",N="_applyImplementation",Q="Method not allowed",R="Moved temporarily",T="Forbidden",V="Use proxy",Y="Ok",bf="Not found",bk="Request time-out",J="Bad request",K="Conflict",P="No content",bc="qx.io.remote.transport.XmlHttp",bb="qx.io.remote.transport.Iframe",ba="Request entity too large",bh="Unknown status code",bg="Unsupported media type",W="Gateway time-out",be="created",q="Out of resources",bj="undefined";
qx.Class.define(bp,{extend:qx.core.Object,construct:function(bE){arguments.callee.base.call(this);
this.setRequest(bE);
bE.setTransport(this);
},events:{"sending":bw,"receiving":bw,"completed":r,"aborted":r,"failed":r,"timeout":r},statics:{typesOrder:[bc,bb,E],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bG,bH){qx.io.remote.Exchange.typesAvailable[bH]=bG;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bO in qx.io.remote.Exchange.typesAvailable){var bN=qx.io.remote.Exchange.typesAvailable[bO];

if(bN.isSupported()){qx.io.remote.Exchange.typesSupported[bO]=bN;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bP,bQ,bR){if(!qx.lang.Array.contains(bP.handles.responseTypes,bR)){return false;
}
for(var bS in bQ){if(!bP.handles[bS]){return false;
}}return true;
},_nativeMap:{0:be,1:bx,2:w,3:u,4:v},wasSuccessful:function(a,b,c){if(c){switch(a){case null:case 0:return true;
case -1:return b<4;
default:return typeof a===bj;
}}else{switch(a){case -1:if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)&&b>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+b);
}}return b<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)&&b===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return b!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+a);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+a);
}}return false;
default:if(a>206&&a<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+a+" ("+b+")");
return false;
}}},statusCodeToString:function(bF){switch(bF){case -1:return bs;
case 200:return Y;
case 304:return bi;
case 206:return G;
case 204:return P;
case 300:return L;
case 301:return bm;
case 302:return R;
case 303:return F;
case 305:return V;
case 400:return J;
case 401:return C;
case 402:return M;
case 403:return T;
case 404:return bf;
case 405:return Q;
case 406:return O;
case 407:return bv;
case 408:return bk;
case 409:return K;
case 410:return I;
case 411:return bd;
case 412:return br;
case 413:return ba;
case 414:return S;
case 415:return bg;
case 500:return bq;
case 501:return U;
case 502:return H;
case 503:return q;
case 504:return W;
case 505:return B;
case 12002:return D;
case 12029:return by;
case 12030:return by;
case 12031:return by;
case 12152:return bn;
case 13030:return bt;
default:return bh;
}}},properties:{request:{check:bo,nullable:true},implementation:{check:bu,nullable:true,apply:N},state:{check:[bx,w,u,v,t,s,x],init:bx,event:bl,apply:X}},members:{send:function(){var k=this.getRequest();

if(!k){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var h=qx.io.remote.Exchange.typesOrder;
var g=qx.io.remote.Exchange.typesSupported;
var n=k.getResponseType();
var o={};

if(k.getAsynchronous()){o.asynchronous=true;
}else{o.synchronous=true;
}
if(k.getCrossDomain()){o.crossDomain=true;
}
if(k.getFileUpload()){o.fileUpload=true;
}for(var m in k.getFormFields()){o.programaticFormFields=true;
break;
}var p,j;

for(var i=0,l=h.length;i<l;i++){p=g[h[i]];

if(p){if(!qx.io.remote.Exchange.canHandle(p,o,n)){continue;
}
try{if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){this.debug("Using implementation: "+p.classname);
}}j=new p;
this.setImplementation(j);
j.setUseBasicHttpAuth(k.getUseBasicHttpAuth());
j.send();
return true;
}catch(d){this.error("Request handler throws error");
this.error(d);
return;
}}}this.error("There is no transport implementation available to handle this request: "+k);
},abort:function(){var bJ=this.getImplementation();

if(bJ){if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){this.debug("Abort: implementation "+bJ.toHashCode());
}}bJ.abort();
}else{if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){this.debug("Abort: forcing state to be aborted");
}}this.setState(t);
}},timeout:function(){var bI=this.getImplementation();

if(bI){this.warn("Timeout: implementation "+bI.toHashCode());
bI.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(s);
}this.__oN();
},__oN:function(){var f=this.getRequest();

if(f){f.setTimeout(0);
}},_onsending:function(e){this.setState(w);
},_onreceiving:function(e){this.setState(u);
},_oncompleted:function(e){this.setState(v);
},_onabort:function(e){this.setState(t);
},_onfailed:function(e){this.setState(x);
},_ontimeout:function(e){this.setState(s);
},_applyImplementation:function(bK,bL){if(bL){bL.removeListener(w,this._onsending,this);
bL.removeListener(u,this._onreceiving,this);
bL.removeListener(v,this._oncompleted,this);
bL.removeListener(t,this._onabort,this);
bL.removeListener(s,this._ontimeout,this);
bL.removeListener(x,this._onfailed,this);
}
if(bK){var bM=this.getRequest();
bK.setUrl(bM.getUrl());
bK.setMethod(bM.getMethod());
bK.setAsynchronous(bM.getAsynchronous());
bK.setUsername(bM.getUsername());
bK.setPassword(bM.getPassword());
bK.setParameters(bM.getParameters());
bK.setFormFields(bM.getFormFields());
bK.setRequestHeaders(bM.getRequestHeaders());
bK.setData(bM.getData());
bK.setResponseType(bM.getResponseType());
bK.addListener(w,this._onsending,this);
bK.addListener(u,this._onreceiving,this);
bK.addListener(v,this._oncompleted,this);
bK.addListener(t,this._onabort,this);
bK.addListener(s,this._ontimeout,this);
bK.addListener(x,this._onfailed,this);
}},_applyState:function(bz,bA){if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){this.debug("State: "+bA+" => "+bz);
}}
switch(bz){case w:this.fireEvent(w);
break;
case u:this.fireEvent(u);
break;
case v:case t:case s:case x:var bC=this.getImplementation();

if(!bC){break;
}this.__oN();

if(this.hasListener(bz)){var bD=qx.event.Registration.createEvent(bz,qx.io.remote.Response);

if(bz==v){var bB=bC.getResponseContent();
bD.setContent(bB);
if(bB===null){if(qx.core.Variant.isSet(z,y)){if(qx.core.Setting.get(A)){this.debug("Altered State: "+bz+" => failed");
}}bz=x;
}}else if(bz==x){bD.setContent(bC.getResponseContent());
}bD.setStatusCode(bC.getStatusCode());
bD.setResponseHeaders(bC.getResponseHeaders());
this.dispatchEvent(bD);
}this.setImplementation(null);
bC.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bT=this.getImplementation();

if(bT){this.setImplementation(null);
bT.dispose();
}this.setRequest(null);
}});
})();
(function(){var v="qx.event.type.Event",u="String",t="qx.debug",s="qx.ioRemoteDebug",r="failed",q="timeout",p="on",o="created",n="aborted",m="sending",f="configured",l="receiving",i="completed",e="Object",d="Boolean",h="abstract",g="_applyState",j="GET",c="changeState",k="qx.io.remote.transport.Abstract";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":v,"configured":v,"sending":v,"receiving":v,"completed":v,"aborted":v,"failed":v,"timeout":v},properties:{url:{check:u,nullable:true},method:{check:u,nullable:true,init:j},asynchronous:{check:d,nullable:true,init:true},data:{check:u,nullable:true},username:{check:u,nullable:true},password:{check:u,nullable:true},state:{check:[o,f,m,l,i,n,q,r],init:o,event:c,apply:g},requestHeaders:{check:e,nullable:true},parameters:{check:e,nullable:true},formFields:{check:e,nullable:true},responseType:{check:u,nullable:true},useBasicHttpAuth:{check:d,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(t,p)){if(qx.core.Setting.get(s)){this.warn("Aborting...");
}}this.setState(n);
},timeout:function(){if(qx.core.Variant.isSet(t,p)){if(qx.core.Setting.get(s)){this.warn("Timeout...");
}}this.setState(q);
},failed:function(){if(qx.core.Variant.isSet(t,p)){if(qx.core.Setting.get(s)){this.warn("Failed...");
}}this.setState(r);
},setRequestHeader:function(x,y){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(w){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(a,b){if(qx.core.Variant.isSet(t,p)){if(qx.core.Setting.get(s)){this.debug("State: "+a);
}}
switch(a){case o:this.fireEvent(o);
break;
case f:this.fireEvent(f);
break;
case m:this.fireEvent(m);
break;
case l:this.fireEvent(l);
break;
case i:this.fireEvent(i);
break;
case n:this.fireEvent(n);
break;
case r:this.fireEvent(r);
break;
case q:this.fireEvent(q);
break;
}return true;
}}});
})();
(function(){var A="qx.debug",z="on",y="qx.ioRemoteDebugData",x="failed",w="qx.ioRemoteDebug",v="completed",u="=",t="aborted",r="",q="sending",ba="&",Y="configured",X="timeout",W="application/xml",V="qx.io.remote.transport.XmlHttp",U="application/json",T="text/html",S="qx.client",R="receiving",Q="text/plain",H="text/javascript",I="created",F="?",G='Referer',D='Basic ',E="\n</pre>",B="string",C='Authorization',J="<pre>Could not execute json: \n",K="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",M=':',L="parseerror",O="file:",N="webkit",P="object";
qx.Class.define(V,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[Q,H,U,W,T]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(S,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__pC:false,__pD:0,__pE:null,getRequest:function(){if(this.__pE===null){this.__pE=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__pE.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__pE;
},send:function(){this.__pD=0;
var bx=this.getRequest();
var bt=this.getMethod();
var bA=this.getAsynchronous();
var bz=this.getUrl();
var bv=(window.location.protocol===O&&!(/^http(s){0,1}\:/.test(bz)));
this.__pC=bv;
var bD=this.getParameters(false);
var bB=[];

for(var bu in bD){var by=bD[bu];

if(by instanceof Array){for(var i=0;i<by.length;i++){bB.push(encodeURIComponent(bu)+u+encodeURIComponent(by[i]));
}}else{bB.push(encodeURIComponent(bu)+u+encodeURIComponent(by));
}}
if(bB.length>0){bz+=(bz.indexOf(F)>=0?ba:F)+bB.join(ba);
}if(this.getData()===null){var bD=this.getParameters(true);
var bB=[];

for(var bu in bD){var by=bD[bu];

if(by instanceof Array){for(var i=0;i<by.length;i++){bB.push(encodeURIComponent(bu)+u+encodeURIComponent(by[i]));
}}else{bB.push(encodeURIComponent(bu)+u+encodeURIComponent(by));
}}
if(bB.length>0){this.setData(bB.join(ba));
}}var bC=function(bH){var bM=K;
var bQ=r;
var bK,bJ,bI;
var bN,bO,bP,bL;
var i=0;

do{bK=bH.charCodeAt(i++);
bJ=bH.charCodeAt(i++);
bI=bH.charCodeAt(i++);
bN=bK>>2;
bO=((bK&3)<<4)|(bJ>>4);
bP=((bJ&15)<<2)|(bI>>6);
bL=bI&63;

if(isNaN(bJ)){bP=bL=64;
}else if(isNaN(bI)){bL=64;
}bQ+=bM.charAt(bN)+bM.charAt(bO)+bM.charAt(bP)+bM.charAt(bL);
}while(i<bH.length);
return bQ;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bx.open(bt,bz,bA);
bx.setRequestHeader(C,D+bC(this.getUsername()+M+this.getPassword()));
}else{bx.open(bt,bz,bA,this.getUsername(),this.getPassword());
}}else{bx.open(bt,bz,bA);
}}catch(bp){this.error("Failed with exception: "+bp);
this.failed();
return;
}if(!qx.core.Variant.isSet(S,N)){bx.setRequestHeader(G,window.location.href);
}var bw=this.getRequestHeaders();

for(var bu in bw){bx.setRequestHeader(bu,bw[bu]);
}try{if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Request: "+this.getData());
}}bx.send(this.getData());
}catch(d){if(bv){this.failedLocally();
}else{this.error("Failed to send data: "+d,"send");
this.failed();
}return;
}if(!bA){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===x){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case v:case t:case x:case X:if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(w)){this.warn("Ignore Ready State Change");
}}return;
}var bb=this.getReadyState();

if(bb==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bb,this.__pC)){if(this.getState()===Y){this.setState(q);
}return this.failed();
}}while(this.__pD<bb){this.setState(qx.io.remote.Exchange._nativeMap[++this.__pD]);
}}),getReadyState:function(){var bf=null;

try{bf=this.getRequest().readyState;
}catch(h){}return bf;
},setRequestHeader:function(f,g){this.getRequestHeaders()[f]=g;
},getResponseHeader:function(o){var p=null;

try{p=this.getRequest().getResponseHeader(o)||null;
}catch(br){}return p;
},getStringResponseHeaders:function(){var bG=null;

try{var bF=this.getRequest().getAllResponseHeaders();

if(bF){bG=bF;
}}catch(j){}return bG;
},getResponseHeaders:function(){var bm=this.getStringResponseHeaders();
var bn={};

if(bm){var bk=bm.split(/[\r\n]+/g);

for(var i=0,l=bk.length;i<l;i++){var bl=bk[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bl){bn[bl[1]]=bl[2];
}}}return bn;
},getStatusCode:function(){var bU=-1;

try{bU=this.getRequest().status;
}catch(bq){}return bU;
},getStatusText:function(){var bs=r;

try{bs=this.getRequest().statusText;
}catch(bR){}return bs;
},getResponseText:function(){var bj=null;

try{bj=this.getRequest().responseText;
}catch(bc){bj=null;
}return bj;
},getResponseXml:function(){var n=null;
var k=this.getStatusCode();
var m=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(k,m,this.__pC)){try{n=this.getRequest().responseXML;
}catch(be){}}if(typeof n==P&&n!=null){if(!n.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,r);
n.loadXML(s);
}if(!n.documentElement){throw new Error("Missing Document Element!");
}
if(n.documentElement.tagName==L){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return n;
},getFetchedLength:function(){var bd=this.getResponseText();
return typeof bd==B?bd.length:0;
},getResponseContent:function(){var bg=this.getState();

if(bg!==v&&bg!=x){if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(w)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(w)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bi=this.getResponseText();

if(bg==x){if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Failed: "+bi);
}}return bi;
}
switch(this.getResponseType()){case Q:case T:if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Response: "+bi);
}}return bi;
case U:if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Response: "+bi);
}}
try{if(bi&&bi.length>0){var bh=qx.util.Json.parse(bi,false);
return (bh===0?0:(bh||null));
}else{return null;
}}catch(bo){this.error("Could not execute json: ["+bi+"]",bo);
return J+bi+E;
}case H:if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Response: "+bi);
}}
try{if(bi&&bi.length>0){var bh=window.eval(bi);
return (bh===0?0:(bh||null));
}else{return null;
}}catch(bE){this.error("Could not execute javascript: ["+bi+"]",bE);
return null;
}case W:bi=this.getResponseXml();

if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(y)){this.debug("Response: "+bi);
}}return (bi===0?0:(bi||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bS,bT){if(qx.core.Variant.isSet(A,z)){if(qx.core.Setting.get(w)){this.debug("State: "+bS);
}}
switch(bS){case I:this.fireEvent(I);
break;
case Y:this.fireEvent(Y);
break;
case q:this.fireEvent(q);
break;
case R:this.fireEvent(R);
break;
case v:this.fireEvent(v);
break;
case x:this.fireEvent(x);
break;
case t:this.getRequest().abort();
this.fireEvent(t);
break;
case X:this.getRequest().abort();
this.fireEvent(X);
break;
}}},defer:function(b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,V);
},destruct:function(){var a=this.getRequest();

if(a){a.onreadystatechange=qx.lang.Function.empty;
switch(a.readyState){case 1:case 2:case 3:a.abort();
}}this.__pE=null;
}});
})();
(function(){var o="qx.debug",n="on",m="qx.ioRemoteDebugData",l="=",k="&",j="application/xml",h="application/json",g="text/html",f="qx.ioRemoteDebug",d="qx.client",M="textarea",L="none",K="text/plain",J="text/javascript",I="",H="completed",G="?",F="qx.io.remote.transport.Iframe",E="gecko",D="frame_",v="aborted",w="_data_",t="pre",u="javascript:void(0)",r="sending",s="form",p="failed",q='<iframe name="',x="mshtml",y="form_",A='"></iframe>',z="iframe",C="timeout",B="qx/static/blank.gif";
qx.Class.define(F,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var bf=(new Date).valueOf();
var bg=D+bf;
var bh=y+bf;
if(qx.core.Variant.isSet(d,x)){this.__ln=document.createElement(q+bg+A);
}else{this.__ln=document.createElement(z);
}this.__ln.src=u;
this.__ln.id=this.__ln.name=bg;
this.__ln.onload=qx.lang.Function.bind(this._onload,this);
this.__ln.style.display=L;
document.body.appendChild(this.__ln);
this.__lo=document.createElement(s);
this.__lo.target=bg;
this.__lo.id=this.__lo.name=bh;
this.__lo.style.display=L;
document.body.appendChild(this.__lo);
this.__lp=document.createElement(M);
this.__lp.id=this.__lp.name=w;
this.__lo.appendChild(this.__lp);
this.__ln.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[K,J,h,j,g]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__lp:null,__lq:0,__lo:null,__ln:null,send:function(){var X=this.getMethod();
var ba=this.getUrl();
var be=this.getParameters(false);
var bd=[];

for(var Y in be){var bb=be[Y];

if(bb instanceof Array){for(var i=0;i<bb.length;i++){bd.push(encodeURIComponent(Y)+l+encodeURIComponent(bb[i]));
}}else{bd.push(encodeURIComponent(Y)+l+encodeURIComponent(bb));
}}
if(bd.length>0){ba+=(ba.indexOf(G)>=0?k:G)+bd.join(k);
}if(this.getData()===null){var be=this.getParameters(true);
var bd=[];

for(var Y in be){var bb=be[Y];

if(bb instanceof Array){for(var i=0;i<bb.length;i++){bd.push(encodeURIComponent(Y)+l+encodeURIComponent(bb[i]));
}}else{bd.push(encodeURIComponent(Y)+l+encodeURIComponent(bb));
}}
if(bd.length>0){this.setData(bd.join(k));
}}var W=this.getFormFields();

for(var Y in W){var bc=document.createElement(M);
bc.name=Y;
bc.appendChild(document.createTextNode(W[Y]));
this.__lo.appendChild(bc);
}this.__lo.action=ba;
this.__lo.method=X;
this.__lp.appendChild(document.createTextNode(this.getData()));
this.__lo.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__lo.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__ln.readyState]);
}),_switchReadyState:function(S){switch(this.getState()){case H:case v:case p:case C:this.warn("Ignore Ready State Change");
return;
}while(this.__lq<S){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lq]);
}},setRequestHeader:function(O,P){},getResponseHeader:function(R){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return I;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__ln);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__ln);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__ln);
},getIframeTextContent:function(){var N=this.getIframeBody();

if(!N){return null;
}
if(!N.firstChild){return I;
}if(N.firstChild.tagName&&N.firstChild.tagName.toLowerCase()==t){return N.firstChild.innerHTML;
}else{return N.innerHTML;
}},getIframeHtmlContent:function(){var U=this.getIframeBody();
return U?U.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==H){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(f)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(f)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var T=this.getIframeTextContent();

switch(this.getResponseType()){case K:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+this._responseContent);
}}return T;
break;
case g:T=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+this._responseContent);
}}return T;
break;
case h:T=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+this._responseContent);
}}
try{return T&&T.length>0?qx.util.Json.parse(T,false):null;
}catch(Q){return this.error("Could not execute json: ("+T+")",Q);
}case J:T=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+this._responseContent);
}}
try{return T&&T.length>0?window.eval(T):null;
}catch(V){return this.error("Could not execute javascript: ("+T+")",V);
}case j:T=this.getIframeDocument();

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+this._responseContent);
}}return T;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(a,b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,F);
},destruct:function(){if(this.__ln){this.__ln.onload=null;
this.__ln.onreadystatechange=null;
if(qx.core.Variant.isSet(d,E)){this.__ln.src=qx.util.ResourceManager.getInstance().toUri(B);
}document.body.removeChild(this.__ln);
}
if(this.__lo){document.body.removeChild(this.__lo);
}this.__ln=this.__lo=null;
}});
})();
(function(){var I="qx.debug",H="on",G="&",F="=",E="qx.ioRemoteDebug",D="application/json",C="completed",B="text/plain",A="qx.ioRemoteDebugData",z="text/javascript",s="?",y="qx.io.remote.transport.Script",v="",q="_ScriptTransport_data",p="failed",u="script",t="timeout",w="_ScriptTransport_",o="_ScriptTransport_id",x="aborted",r="utf-8";
qx.Class.define(y,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var M=++qx.io.remote.transport.Script.__lF;

if(M>=2000000000){qx.io.remote.transport.Script.__lF=M=1;
}this.__lG=null;
this.__lF=M;
},statics:{__lF:0,_instanceRegistry:{},ScriptTransport_PREFIX:w,ScriptTransport_ID_PARAM:o,ScriptTransport_DATA_PARAM:q,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[B,z,D]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(f,content){var g=qx.io.remote.transport.Script._instanceRegistry[f];

if(g==null){if(qx.core.Variant.isSet(I,H)){if(qx.core.Setting.get(E)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{g._responseContent=content;
g._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__lH:0,__lG:null,__lF:null,send:function(){var k=this.getUrl();
k+=(k.indexOf(s)>=0?G:s)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+F+this.__lF;
var n=this.getParameters();
var m=[];

for(var j in n){if(j.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var l=n[j];

if(l instanceof Array){for(var i=0;i<l.length;i++){m.push(encodeURIComponent(j)+F+encodeURIComponent(l[i]));
}}else{m.push(encodeURIComponent(j)+F+encodeURIComponent(l));
}}
if(m.length>0){k+=G+m.join(G);
}var h=this.getData();

if(h!=null){k+=G+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+F+encodeURIComponent(h);
}qx.io.remote.transport.Script._instanceRegistry[this.__lF]=this;
this.__lG=document.createElement(u);
this.__lG.charset=r;
this.__lG.src=k;

if(qx.core.Variant.isSet(I,H)){if(qx.core.Setting.get(A)){this.debug("Request: "+k);
}}document.body.appendChild(this.__lG);
},_switchReadyState:function(L){switch(this.getState()){case C:case x:case p:case t:this.warn("Ignore Ready State Change");
return;
}while(this.__lH<L){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lH]);
}},setRequestHeader:function(J,K){},getResponseHeader:function(e){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return v;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==C){if(qx.core.Variant.isSet(I,H)){if(qx.core.Setting.get(E)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(I,H)){if(qx.core.Setting.get(E)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case B:case D:case z:if(qx.core.Variant.isSet(I,H)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}var d=this._responseContent;
return (d===0?0:(d||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(a,b,c){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,y);
},destruct:function(){if(this.__lG){delete qx.io.remote.transport.Script._instanceRegistry[this.__lF];
document.body.removeChild(this.__lG);
}this.__lG=this._responseContent=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(f){var g=arguments.callee.base.call(this,f);
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
(function(){var bc="test",bb="",ba="All",Y=".",X="^",W="demobrowser.TreeDataHandler",V="ttree",U="\\.[^\\.]+$",T="depth";
qx.Class.define(W,{extend:qx.core.Object,construct:function(bo){arguments.callee.base.call(this);
this.tmap=bo;
this.ttree=this.__At(bo);
},members:{__At:function(p){var r=p;
function q(v,w){var z=w.classname;
var x=z.split(Y);
function y(parent,h){if(!h.length){return parent;
}else{var k=h[0];
var l=h.slice(1,h.length);
var m=null;
var n=null;
var o=parent.getChildren();

for(var i=0;i<o.length;i++){if(o[i].label==k){n=o[i];
break;
}}if(n==null){n=new demobrowser.Tree(k);
parent.add(n);
}m=y(n,l);
return m;
}}var A=y(v,x);

if(!A){throw new Error("No target to insert tests");
}s.readTree(w,A);
}function t(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var u=new demobrowser.Tree(ba);
var s=this;
r.sort(t);

for(var i=0;i<r.length;i++){q(u,r[i]);
}return u;
},readTree:function(c,d){var f=arguments[1]||new demobrowser.Tree(c.classname);
var d;
function e(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}c.tests.sort(e);

for(var j=0;j<c.tests.length;j++){d=new demobrowser.Tree(c.tests[j].name);
d.tags=c.tests[j].tags;
d.type=bc;
d.desc=c.tests[j].desc;
f.add(d);
}if(c.children&&c.children.length){for(var j=0;j<c.children.length;j++){f.add(this.readTree(c.children[j]));
}}return f;
},getRoot:function(){if(!this.Root){var L={classname:bb,tests:[]};
var K=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(L.classname.length>K[i].classname.length){L=K[i];
}}this.Root=L;
}return this.Root.classname;
},getChilds:function(bf){var bg=[];
var bi=this.tmap;
var bh=X+bf+U;
var bj=new RegExp(bh);

for(var i=0;i<bi.length;i++){if(bi[i].classname.match(bj)){bg.push(bi[i]);
}}return bg;
},getTests:function(I){var J=this.tmap;

for(var i=0;i<J.length;i++){if(J[i].classname==I){return J[i].tests;
}}return [];
},getPath:function(bk){if(!bk){return bb;
}var bl=bk.pwd();
bl.shift();
if(this.isClass(bk)){bl=bl.concat(bk.label);
}return bl;
},getChildren:function(B){if(B==ba){var C=this.tmap;
var D=[];

for(var i=0;i<C.length;i++){D.push(C[i].classname);
}return D;
}else if(this.isClass(B)){return this.getTests(B);
}else{return [];
}},isClass:function(g){if(g.type&&g.type==bc){return false;
}else{return true;
}},hasTests:function(P){if(!this.isClass(P)){return false;
}else{var Q=P.getChildren();

for(var i=0;i<Q.length;i++){if(Q[i].type&&Q[i].type==bc){return true;
}}return false;
}},classFromTest:function(M){var N=bb;
var O=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==M){N=this.tmap[i].classname;
break classloop;
}}}return N;
},getFullName:function(bm){if(!bm){return bb;
}var bn=this.getPath(bm);

if(bm.type&&bm.type==bc){bn=bn.concat(bm.label);
}return bn.join(Y);
},getPreviousNode:function(R){var S=R.getPrevSibling();

if(S){return S;
}},getNextNode:function(bd){var be=bd.getNextSibling();

if(be){return be;
}},testCount:function(E){if(E.type&&E.type==bc){return 1;
}else{var F=0;
var H=E.getIterator(T);
var G;

while(G=H()){if(G.type&&G.type==bc){F++;
}}return F;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(V);
}});
})();
(function(){var j="depth",h="",g="widgetLinkFlat",e="widgetLinkFull",d="parent",c="children",b="demobrowser.Tree";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.label=arguments[0]||h;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(v,w){var x=j;
var y=this;
var z=this.getIterator(x);

while(y=z()){v.apply(y,w);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(m){var o=[this];
var n=m==j?1:0;
function f(){var k;

if(o.length){k=o.shift();
var l=k.getChildren();

if(l.length){if(n){o=l.concat(o);
}else{o=o.concat(l);
}}}else{k=null;
}return k;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(p){var q=this.parent.getChildren();
var r=arguments.callee.self.indexOf(q,this);
var s=r+p;

if(q[s]){return q[s];
}},add:function(a){this.children.push(a);
a.parent=this;
}},statics:{indexOf:function(t,u){for(var i=0;i<t.length;i++){if(t[i]==u){return i;
}}}},destruct:function(){this._disposeObjects(e,g,d);
this._disposeArray(c);
}});
})();
(function(){var o="mshtml",n="pop.push.reverse.shift.sort.splice.unshift.join.slice",m="number",l="qx.type.BaseArray",k="qx.client",j=".";
qx.Class.define(l,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function u(c){if(qx.core.Variant.isSet(k,o)){t.prototype={length:0,$$isArray:true};
var f=n.split(j);

for(var length=f.length;length;){t.prototype[f[--length]]=Array.prototype[f[length]];
}}var g=Array.prototype.slice;
t.prototype.concat=function(){var b=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var a;

if(arguments[i] instanceof t){a=g.call(arguments[i],0);
}else if(arguments[i] instanceof Array){a=arguments[i];
}else{a=[arguments[i]];
}b.push.apply(b,a);
}return b;
};
t.prototype.toString=function(){return g.call(this,0).toString();
};
t.prototype.toLocaleString=function(){return g.call(this,0).toLocaleString();
};
t.prototype.constructor=t;
t.prototype.indexOf=qx.lang.Core.arrayIndexOf;
t.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
t.prototype.forEach=qx.lang.Core.arrayForEach;
t.prototype.some=qx.lang.Core.arraySome;
t.prototype.every=qx.lang.Core.arrayEvery;
var d=qx.lang.Core.arrayFilter;
var e=qx.lang.Core.arrayMap;
t.prototype.filter=function(){var r=new this.constructor;
r.push.apply(r,d.apply(this,arguments));
return r;
};
t.prototype.map=function(){var q=new this.constructor;
q.push.apply(q,e.apply(this,arguments));
return q;
};
t.prototype.slice=function(){var h=new this.constructor;
h.push.apply(h,Array.prototype.slice.apply(this,arguments));
return h;
};
t.prototype.splice=function(){var p=new this.constructor;
p.push.apply(p,Array.prototype.splice.apply(this,arguments));
return p;
};
t.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
t.prototype.valueOf=function(){return this.length;
};
return t;
}function t(length){if(arguments.length===1&&typeof length===m){this.length=-1<length&&length===length>>.5?length:this.push(length);
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
qx.Class.define(F,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bi){var bM={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bz={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bl={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bv=function(bh){return new RegExp(s+bh+u);
};
var bF=L;
var bw=N;
var bp=p;
var by=n;
var bt=I;
var bB=t;
var bA=v;
var bn=D;
var bI=Y;
var bK=W;
var bu=T;
var bx=[O+bu+M,H+bu+B,w+bu+S,P+bu+X,C+bu+r].join(bc);
var bG=bv(bF);
var bq=bv(bw);
var bD=bv(bp);
var bm=bv(by);
var bJ=bv(bt);
var bs=bv(bB);
var bk=bv(bA);
var bE=bv(bn);
var br=bv(bI);
var bj=bv(bK);
var bo=bv(bx);
var bC=new RegExp([bF,bw,bp,by,bt,bB,bA,bA,bn,bI,bK,bx,y].join(bc),G);
var bH=[];
var a=bi.match(bC);

for(var i=0;i<a.length;i++){var bL=a[i];

if(bL.match(bG)){bH.push({type:b,value:bL});
}else if(bL.match(bq)){bH.push({type:bb,value:bL});
}else if(bL.match(bo)){bH.push({type:be,value:bL});
}else if(bL.match(bk)){bH.push({type:c,value:bL});
}else if(bL.match(bs)){bH.push({type:e,value:bL});
}else if(bM[bL]){bH.push({type:bf,value:bL});
}else if(bz[bL]){bH.push({type:ba,value:bL});
}else if(bl[bL]){bH.push({type:h,value:bL});
}else if(bL.match(bD)){bH.push({type:bg,value:bL});
}else if(bL.match(bJ)){bH.push({type:q,value:bL});
}else if(bL.match(bm)){bH.push({type:z,value:bL});
}else if(bL.match(br)){bH.push({type:j,value:bL});
}else if(bL.match(bv(bj))){bH.push({type:g,value:bL});
}else if(bL.match(bE)){bH.push({type:A,value:bL});
}else if(bL==f){bH.push({type:k,value:f});
}else if(bL==d){bH.push({type:k,value:d});
}else if(bL==bd){bH.push({type:k,value:bd});
}else{bH.push({type:k,value:bL});
}}return bH;
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
(function(){var g="\n",f="",e=" &nbsp;",d="<br>",c=" ",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(a){return qx.util.StringEscape.escape(a,qx.bom.String.FROM_CHARCODE);
},unescape:function(j){return qx.util.StringEscape.unescape(j,qx.bom.String.TO_CHARCODE);
},fromText:function(k){return qx.bom.String.escape(k).replace(/(  |\n)/g,function(h){var i={"  ":e,"\n":d};
return i[h]||h;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(l){if(/\s+/.test(l)){return c;
}else if(/^<BR|^<br/gi.test(l)){return g;
}else{return f;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
}});
})();
(function(){var o=";",n="&",m='X',k="",j='#',h="&#",g="qx.util.StringEscape";
qx.Bootstrap.define(g,{statics:{escape:function(a,b){var d,f=k;

for(var i=0,l=a.length;i<l;i++){var e=a.charAt(i);
var c=e.charCodeAt(0);

if(b[c]){d=n+b[c]+o;
}else{if(c>0x7F){d=h+c+o;
}else{d=e;
}}f+=d;
}return f;
},unescape:function(p,q){return p.replace(/&[#\w]+;/gi,function(r){var s=r;
var r=r.substring(1,r.length-1);
var t=q[r];

if(t){s=String.fromCharCode(t);
}else{if(r.charAt(0)==j){if(r.charAt(1).toUpperCase()==m){t=r.substring(2);
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
(function(){var q="qx.debug",p="_applyStyle",o="on",n="Color",m="px",l="solid",k="dotted",j="double",i="dashed",h="",c="_applyWidth",g="qx.ui.decoration.Uniform",f="px ",b=" ",a="scale",e="PositiveInteger",d="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(v,w,x){arguments.callee.base.call(this);
if(v!=null){this.setWidth(v);
}
if(w!=null){this.setStyle(w);
}
if(x!=null){this.setColor(x);
}},properties:{width:{check:e,init:0,apply:c},style:{nullable:true,check:[l,k,i,j],init:l,apply:p},color:{nullable:true,check:n,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__po:null,_getDefaultInsets:function(){var y=this.getWidth();
return {top:y,right:y,bottom:y,left:y};
},_isInitialized:function(){return !!this.__po;
},getMarkup:function(){if(this.__po){return this.__po;
}var r={position:d,top:0,left:0};
var s=this.getWidth();

if(qx.core.Variant.isSet(q,o)){if(s===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var u=qx.theme.manager.Color.getInstance();
r.border=s+f+this.getStyle()+b+u.resolve(this.getColor());
var t=this._generateBackgroundMarkup(r);
return this.__po=t;
},resize:function(C,D,E){var G=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;

if(G||qx.bom.client.Feature.CONTENT_BOX){var F=this.getWidth()*2;
D-=F;
E-=F;
if(D<0){D=0;
}
if(E<0){E=0;
}}C.style.width=D+m;
C.style.height=E+m;
},tint:function(z,A){var B=qx.theme.manager.Color.getInstance();

if(A==null){A=this.getBackgroundColor();
}z.style.backgroundColor=B.resolve(A)||h;
},_applyWidth:function(){if(qx.core.Variant.isSet(q,o)){if(this.__po){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(q,o)){if(this.__po){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__po=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="double",f="px ",e="dotted",d="_applyWidth",c="dashed",b="Number",a=" ",H="qx.debug",G="shorthand",F="on",E="px",D="widthTop",C="styleRight",B="styleLeft",A="widthLeft",z="widthBottom",y="styleTop",q="colorBottom",r="styleBottom",o="widthRight",p="colorLeft",m="colorRight",n="colorTop",k="scale",l="border-top",s="border-left",t="border-right",v="qx.ui.decoration.Single",u="",x="border-bottom",w="absolute";
qx.Class.define(v,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(Q,R,S){arguments.callee.base.call(this);
if(Q!=null){this.setWidth(Q);
}
if(R!=null){this.setStyle(R);
}
if(S!=null){this.setColor(S);
}},properties:{widthTop:{check:b,init:0,apply:d},widthRight:{check:b,init:0,apply:d},widthBottom:{check:b,init:0,apply:d},widthLeft:{check:b,init:0,apply:d},styleTop:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleRight:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleBottom:{nullable:true,check:[i,e,c,g],init:i,apply:j},styleLeft:{nullable:true,check:[i,e,c,g],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[A,B,p]},right:{group:[o,C,m]},top:{group:[D,y,n]},bottom:{group:[z,r,q]},width:{group:[D,o,z,A],mode:G},style:{group:[y,C,r,B],mode:G},color:{group:[n,m,q,p],mode:G}},members:{__nh:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nh;
},getMarkup:function(I){if(this.__nh){return this.__nh;
}var J=qx.theme.manager.Color.getInstance();
var K={};
var M=this.getWidthTop();

if(M>0){K[l]=M+f+this.getStyleTop()+a+J.resolve(this.getColorTop());
}var M=this.getWidthRight();

if(M>0){K[t]=M+f+this.getStyleRight()+a+J.resolve(this.getColorRight());
}var M=this.getWidthBottom();

if(M>0){K[x]=M+f+this.getStyleBottom()+a+J.resolve(this.getColorBottom());
}var M=this.getWidthLeft();

if(M>0){K[s]=M+f+this.getStyleLeft()+a+J.resolve(this.getColorLeft());
}if(qx.core.Variant.isSet(H,F)){if(K.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}K.position=w;
K.top=0;
K.left=0;
var L=this._generateBackgroundMarkup(K);
return this.__nh=L;
},resize:function(T,U,V){var X=this.getBackgroundImage()&&this.getBackgroundRepeat()==k;

if(X||qx.bom.client.Feature.CONTENT_BOX){var W=this.getInsets();
U-=W.left+W.right;
V-=W.top+W.bottom;
if(U<0){U=0;
}
if(V<0){V=0;
}}T.style.width=U+E;
T.style.height=V+E;
},tint:function(N,O){var P=qx.theme.manager.Color.getInstance();

if(O==null){O=this.getBackgroundColor();
}N.style.backgroundColor=P.resolve(O)||u;
},_applyWidth:function(){if(qx.core.Variant.isSet(H,F)){if(this.__nh){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(H,F)){if(this.__nh){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__nh=null;
}});
})();
(function(){var q="px",p="0px",o="-1px",n="no-repeat",m="scale-x",l="scale-y",k="-tr",j="-l",i='</div>',h="scale",G="qx.client",F="-br",E="-t",D="-tl",C="-r",B='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',A="qx.debug",z="_applyBaseImage",y="-b",x="String",v="",w="-bl",t="-c",u="mshtml",r="on",s="qx.ui.decoration.Grid";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(Q,R){arguments.callee.base.call(this);
if(Q!=null){this.setBaseImage(Q);
}
if(R!=null){this.setInsets(R);
}},properties:{baseImage:{check:x,nullable:true,apply:z}},members:{__ne:null,__nf:null,__ng:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ne;
},getMarkup:function(){if(this.__ne){return this.__ne;
}var d=qx.bom.element.Decoration;
var e=this.__nf;
var f=this.__ng;
var g=[];
g.push(B);
g.push(d.create(e.tl,n,{top:0,left:0}));
g.push(d.create(e.t,m,{top:0,left:f.left+q}));
g.push(d.create(e.tr,n,{top:0,right:0}));
g.push(d.create(e.bl,n,{bottom:0,left:0}));
g.push(d.create(e.b,m,{bottom:0,left:f.left+q}));
g.push(d.create(e.br,n,{bottom:0,right:0}));
g.push(d.create(e.l,l,{top:f.top+q,left:0}));
g.push(d.create(e.c,h,{top:f.top+q,left:f.left+q}));
g.push(d.create(e.r,l,{top:f.top+q,right:0}));
g.push(i);
return this.__ne=g.join(v);
},resize:function(S,T,U){var V=this.__ng;
var innerWidth=T-V.left-V.right;
var innerHeight=U-V.top-V.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}S.style.width=T+q;
S.style.height=U+q;
S.childNodes[1].style.width=innerWidth+q;
S.childNodes[4].style.width=innerWidth+q;
S.childNodes[7].style.width=innerWidth+q;
S.childNodes[6].style.height=innerHeight+q;
S.childNodes[7].style.height=innerHeight+q;
S.childNodes[8].style.height=innerHeight+q;

if(qx.core.Variant.isSet(G,u)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(T%2==1){S.childNodes[2].style.marginRight=o;
S.childNodes[5].style.marginRight=o;
S.childNodes[8].style.marginRight=o;
}else{S.childNodes[2].style.marginRight=p;
S.childNodes[5].style.marginRight=p;
S.childNodes[8].style.marginRight=p;
}
if(U%2==1){S.childNodes[3].style.marginBottom=o;
S.childNodes[4].style.marginBottom=o;
S.childNodes[5].style.marginBottom=o;
}else{S.childNodes[3].style.marginBottom=p;
S.childNodes[4].style.marginBottom=p;
S.childNodes[5].style.marginBottom=p;
}}}},tint:function(b,c){},_applyBaseImage:function(H,I){if(qx.core.Variant.isSet(A,r)){if(this.__ne){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(H){var M=this._resolveImageUrl(H);
var N=/(.*)(\.[a-z]+)$/.exec(M);
var L=N[1];
var K=N[2];
var J=this.__nf={tl:L+D+K,t:L+E+K,tr:L+k+K,bl:L+w+K,b:L+y+K,br:L+F+K,l:L+j+K,c:L+t+K,r:L+C+K};
this.__ng=this._computeEdgeSizes(J);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(O){var P=qx.util.ResourceManager.getInstance();
return {top:P.getImageHeight(O.t),bottom:P.getImageHeight(O.b),left:P.getImageWidth(O.l),right:P.getImageWidth(O.r)};
}},destruct:function(){this.__ne=this.__nf=this.__ng=null;
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="1px",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",I='</div>',H="qx.ui.decoration.Beveled",G="qx.debug",F='<div style="position:absolute;top:1px;left:1px;',E='border-bottom:',D='border-right:',C='border-left:',B='border-top:',A="Number",z='<div style="position:absolute;top:1px;left:0px;',x='position:absolute;top:0px;left:1px;',y='<div style="overflow:hidden;font-size:0;line-height:0;">',v="on",w="absolute";
qx.Class.define(H,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(J,K,L){arguments.callee.base.call(this);
if(J!=null){this.setOuterColor(J);
}
if(K!=null){this.setInnerColor(K);
}
if(L!=null){this.setInnerOpacity(L);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:A,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__oO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oO;
},_applyStyle:function(){if(qx.core.Variant.isSet(G,v)){if(this.__oO){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__oO){return this.__oO;
}var M=qx.theme.manager.Color.getInstance();
var N=[];
var Q=o+M.resolve(this.getOuterColor())+m;
var P=o+M.resolve(this.getInnerColor())+m;
N.push(y);
N.push(q);
N.push(p,Q);
N.push(qx.bom.element.Opacity.compile(0.35));
N.push(t);
N.push(z);
N.push(C,Q);
N.push(D,Q);
N.push(t);
N.push(q);
N.push(x);
N.push(B,Q);
N.push(E,Q);
N.push(t);
var O={position:w,top:r,left:r};
N.push(this._generateBackgroundMarkup(O));
N.push(F);
N.push(p,P);
N.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
N.push(t);
N.push(I);
return this.__oO=N.join(n);
},resize:function(a,b,c){if(b<4){b=4;
}
if(c<4){c=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=b-2;
var outerHeight=c-2;
var i=outerWidth;
var h=outerHeight;
var innerWidth=b-4;
var innerHeight=c-4;
}else{var outerWidth=b;
var outerHeight=c;
var i=b-2;
var h=c-2;
var innerWidth=i;
var innerHeight=h;
}var k=l;
var g=a.childNodes[0].style;
g.width=outerWidth+k;
g.height=outerHeight+k;
var f=a.childNodes[1].style;
f.width=outerWidth+k;
f.height=h+k;
var e=a.childNodes[2].style;
e.width=i+k;
e.height=outerHeight+k;
var d=a.childNodes[3].style;
d.width=i+k;
d.height=h+k;
var j=a.childNodes[4].style;
j.width=innerWidth+k;
j.height=innerHeight+k;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.childNodes[3].style.backgroundColor=T.resolve(S)||n;
}},destruct:function(){this.__oO=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var ee="button-frame",ed="atom",ec="widget",eb="main",ea="button",dY="text-selected",dX="image",dW="bold",dV="middle",dU="background-light",cG="text-disabled",cF="groupbox",cE="decoration/arrows/down.png",cD="cell",cC="selected",cB="border-invalid",cA="input",cz="input-disabled",cy="menu-button",cx="input-focused-invalid",el="toolbar-button",em="spinner",ej="input-focused",ek="popup",eh="tooltip",ei="list",ef="tree-item",eg="treevirtual-contract",en="scrollbar",eo="datechooser/nav-button",dD="text-hovered",dC="center",dF="treevirtual-expand",dE="textfield",dH="label",dG="decoration/arrows/right.png",dJ="background-application",dI="radiobutton",dB="white",dA="invalid",C="combobox",D="right-top",E=".png",F="checkbox",G="text-title",H="qx/static/blank.gif",I="scrollbar/button",J="right",K="combobox/button",L="icon/16/places/folder.png",eC="text-label",eB="decoration/tree/closed.png",eA="scrollbar-slider-horizontal",ez="decoration/arrows/left.png",eG="button-focused",eF="text-light",eE="menu-slidebar-button",eD="text-input",eI="slidebar/button-forward",eH="background-splitpane",bE="decoration/tree/open.png",bF="default",bC="decoration/arrows/down-small.png",bD="datechooser",bI="slidebar/button-backward",bJ="selectbox",bG="treevirtual-folder",bH="shadow-popup",bA="icon/16/mimetypes/office-document.png",bB="background-medium",bg=".gif",bf="table",bi="decoration/arrows/up.png",bh="decoration/form/",bc="",bb="-invalid",be="icon/16/places/folder-open.png",bd="button-checked",ba="decoration/window/maximize-active-hovered.png",Y="radiobutton-hovered",bP="decoration/cursors/",bQ="slidebar",bR="tooltip-error-arrow",bS="table-scroller-focus-indicator",bL="move-frame",bM="nodrop",bN="decoration/table/boolean-true.png",bO="table-header-cell",bT="menu",bU="app-header",bt="row-layer",bs="text-inactive",br="move",bq="radiobutton-checked-focused",bp="decoration/window/restore-active-hovered.png",bo="shadow-window",bn="table-column-button",bm="right.png",bx="tabview-page-button-bottom-inactive",bw="tooltip-error",bV="window-statusbar",bW="button-hovered",bX="decoration/scrollbar/scrollbar-",bY="background-tip",ca="scrollbar-slider-horizontal-disabled",cb="table-scroller-header",cc="radiobutton-disabled",cd="button-pressed",ce="table-pane",cf="decoration/window/close-active.png",cO="native",cN="checkbox-hovered",cM="button-invalid-shadow",cL="checkbox-checked",cS="decoration/window/minimize-active-hovered.png",cR="menubar",cQ="icon/16/actions/dialog-cancel.png",cP="tabview-page-button-top-inactive",cW="tabview-page-button-left-inactive",cV="menu-slidebar",dv="toolbar-button-checked",dw="decoration/tree/open-selected.png",dt="radiobutton-checked",du="decoration/window/minimize-inactive.png",dr="icon/16/apps/office-calendar.png",ds="group",dp="tabview-page-button-right-inactive",dq="decoration/window/minimize-active.png",dx="decoration/window/restore-inactive.png",dy="checkbox-checked-focused",dN="splitpane",dM="combobox/textfield",dP="button-preselected-focused",dO="decoration/window/close-active-hovered.png",dR="qx/icon/Tango/16/actions/window-close.png",dQ="checkbox-pressed",dT="button-disabled",dS="selected-dragover",dL="border-separator",dK="decoration/window/maximize-inactive.png",ev="dragover",ew="scrollarea",ex="scrollbar-vertical",ey="decoration/menu/checkbox-invert.gif",er="decoration/toolbar/toolbar-handle-knob.gif",es="icon/22/mimetypes/office-document.png",et="button-preselected",eu="button-checked-focused",ep="up.png",eq="best-fit",B="decoration/tree/closed-selected.png",A="qx.theme.modern.Appearance",z="text-active",y="checkbox-disabled",x="toolbar-button-hovered",w="progressive-table-header",v="decoration/table/select-column-order.png",u="decoration/menu/radiobutton.gif",t="decoration/arrows/forward.png",s="decoration/table/descending",O="window-captionbar-active",P="checkbox-checked-hovered",M="scrollbar-slider-vertical",N="toolbar",S="alias",T="decoration/window/restore-active.png",Q="decoration/table/boolean-false.png",R="checkbox-checked-disabled",V="icon/32/mimetypes/office-document.png",W="radiobutton-checked-disabled",db="tabview-pane",cU="decoration/arrows/rewind.png",di="checkbox-focused",de="top",cJ="#EEE",cH="icon/16/actions/dialog-ok.png",bk="radiobutton-checked-hovered",cK="table-header-cell-hovered",bv="window",bu="text-gray",cp="decoration/menu/radiobutton-invert.gif",cq="text-placeholder",cr="slider",cs="keep-align",ct="down.png",cu="tabview-page-button-top-active",cv="icon/32/places/folder-open.png",cw="icon/22/places/folder.png",cm="decoration/window/maximize-active.png",cn="checkbox-checked-pressed",cI="decoration/window/close-inactive.png",dh="tabview-page-button-left-active",dg="toolbar-part",df="decoration/splitpane/knob-vertical.png",dm="icon/22/places/folder-open.png",dl="radiobutton-checked-pressed",dk="table-statusbar",dj="radiobutton-pressed",dd="window-captionbar-inactive",dc="copy",U="radiobutton-focused",bz="decoration/arrows/down-invert.png",by="decoration/menu/checkbox.gif",cT="decoration/splitpane/knob-horizontal.png",bK="decoration/table/ascending",da="icon/32/places/folder.png",cY="toolbar-separator",cX="tabview-page-button-bottom-active",bj="decoration/arrows/up-small.png",dn="decoration/arrows/up-invert.png",X="small",bl="tabview-page-button-right-active",cg="-disabled",ch="scrollbar-horizontal",ci="progressive-table-header-cell",cj="menu-separator",ck="pane",cl="decoration/arrows/right-invert.png",dz="left.png",co="icon/16/actions/view-refresh.png";
qx.Theme.define(A,{appearances:{"widget":{},"root":{style:function(fQ){return {backgroundColor:dJ,textColor:eC,font:bF};
}},"label":{style:function(fO){return {textColor:fO.disabled?cG:undefined};
}},"move-frame":{style:function(gE){return {decorator:eb};
}},"resize-frame":bL,"dragdrop-cursor":{style:function(eR){var eS=bM;

if(eR.copy){eS=dc;
}else if(eR.move){eS=br;
}else if(eR.alias){eS=S;
}return {source:bP+eS+bg,position:D,offset:[2,16,2,6]};
}},"image":{style:function(fC){return {opacity:!fC.replacement&&fC.disabled?0.3:1};
}},"atom":{},"atom/label":dH,"atom/icon":dX,"popup":{style:function(gD){return {decorator:eb,backgroundColor:dU,shadow:bH};
}},"button-frame":{alias:ed,style:function(hA){var hC,hB;

if(hA.checked&&hA.focused&&!hA.inner){hC=eu;
hB=undefined;
}else if(hA.disabled){hC=dT;
hB=undefined;
}else if(hA.pressed){hC=cd;
hB=dD;
}else if(hA.checked){hC=bd;
hB=undefined;
}else if(hA.hovered){hC=bW;
hB=dD;
}else if(hA.preselected&&hA.focused&&!hA.inner){hC=dP;
hB=dD;
}else if(hA.preselected){hC=et;
hB=dD;
}else if(hA.focused&&!hA.inner){hC=eG;
hB=undefined;
}else{hC=ea;
hB=undefined;
}return {decorator:hC,textColor:hB,shadow:hA.invalid&&!hA.disabled?cM:undefined};
}},"button-frame/image":{style:function(eT){return {opacity:!eT.replacement&&eT.disabled?0.5:1};
}},"button":{alias:ee,include:ee,style:function(hx){return {padding:[2,8],center:true};
}},"hover-button":{alias:ed,include:ed,style:function(e){return {decorator:e.hovered?cC:undefined,textColor:e.hovered?dY:undefined};
}},"splitbutton":{},"splitbutton/button":ea,"splitbutton/arrow":{alias:ea,include:ea,style:function(gB){return {icon:cE,padding:2,marginLeft:1};
}},"checkbox":{alias:ed,style:function(gy){var gA;

if(gy.checked&&gy.focused){gA=dy;
}else if(gy.checked&&gy.disabled){gA=R;
}else if(gy.checked&&gy.pressed){gA=cn;
}else if(gy.checked&&gy.hovered){gA=P;
}else if(gy.checked){gA=cL;
}else if(gy.disabled){gA=y;
}else if(gy.focused){gA=di;
}else if(gy.pressed){gA=dQ;
}else if(gy.hovered){gA=cN;
}else{gA=F;
}var gz=gy.invalid&&!gy.disabled?bb:bc;
return {icon:bh+gA+gz+E,gap:6};
}},"radiobutton":{alias:ed,style:function(fd){var ff;

if(fd.checked&&fd.focused){ff=bq;
}else if(fd.checked&&fd.disabled){ff=W;
}else if(fd.checked&&fd.pressed){ff=dl;
}else if(fd.checked&&fd.hovered){ff=bk;
}else if(fd.checked){ff=dt;
}else if(fd.disabled){ff=cc;
}else if(fd.focused){ff=U;
}else if(fd.pressed){ff=dj;
}else if(fd.hovered){ff=Y;
}else{ff=dI;
}var fe=fd.invalid&&!fd.disabled?bb:bc;
return {icon:bh+ff+fe+E,gap:6};
}},"textfield":{style:function(hr){var hw;
var hu=!!hr.focused;
var hv=!!hr.invalid;
var hs=!!hr.disabled;

if(hu&&hv&&!hs){hw=cx;
}else if(hu&&!hv&&!hs){hw=ej;
}else if(hs){hw=cz;
}else if(!hu&&hv&&!hs){hw=cB;
}else{hw=cA;
}var ht;

if(hr.disabled){ht=cG;
}else if(hr.showingPlaceholder){ht=cq;
}else{ht=eD;
}return {decorator:hw,padding:[2,4,1],textColor:ht};
}},"textarea":{include:dE,style:function(j){return {padding:4};
}},"spinner":{style:function(gP){var gT;
var gR=!!gP.focused;
var gS=!!gP.invalid;
var gQ=!!gP.disabled;

if(gR&&gS&&!gQ){gT=cx;
}else if(gR&&!gS&&!gQ){gT=ej;
}else if(gQ){gT=cz;
}else if(!gR&&gS&&!gQ){gT=cB;
}else{gT=cA;
}return {decorator:gT};
}},"spinner/textfield":{style:function(hb){return {marginRight:2,padding:[2,4,1],textColor:hb.disabled?cG:eD};
}},"spinner/upbutton":{alias:ee,include:ee,style:function(hD){return {icon:bj,padding:hD.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:ee,include:ee,style:function(c){return {icon:bC,padding:c.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":C,"datefield/button":{alias:K,include:K,style:function(gs){return {icon:dr,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dM,"datefield/list":{alias:bD,include:bD,style:function(fY){return {decorator:undefined};
}},"groupbox":{style:function(fT){return {legendPosition:de};
}},"groupbox/legend":{alias:ed,style:function(fX){return {padding:[1,0,1,4],textColor:fX.invalid?dA:G,font:dW};
}},"groupbox/frame":{style:function(he){return {padding:12,decorator:ds};
}},"check-groupbox":cF,"check-groupbox/legend":{alias:F,include:F,style:function(gt){return {padding:[1,0,1,4],textColor:gt.invalid?dA:G,font:dW};
}},"radio-groupbox":cF,"radio-groupbox/legend":{alias:dI,include:dI,style:function(hH){return {padding:[1,0,1,4],textColor:hH.invalid?dA:G,font:dW};
}},"scrollarea":{style:function(fM){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(fV){return {backgroundColor:dJ};
}},"scrollarea/pane":ec,"scrollarea/scrollbar-x":en,"scrollarea/scrollbar-y":en,"scrollbar":{style:function(eM){if(eM[cO]){return {};
}return {width:eM.horizontal?undefined:16,height:eM.horizontal?16:undefined,decorator:eM.horizontal?ch:ex,padding:1};
}},"scrollbar/slider":{alias:cr,style:function(ha){return {padding:ha.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:ee,style:function(hm){var hn=hm.horizontal?eA:M;

if(hm.disabled){hn+=cg;
}return {decorator:hn,minHeight:hm.horizontal?undefined:9,minWidth:hm.horizontal?9:undefined};
}},"scrollbar/button":{alias:ee,include:ee,style:function(fG){var fH=bX;

if(fG.left){fH+=dz;
}else if(fG.right){fH+=bm;
}else if(fG.up){fH+=ep;
}else{fH+=ct;
}
if(fG.left||fG.right){return {padding:[0,0,0,fG.left?3:4],icon:fH,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:fH,width:14,height:15};
}}},"scrollbar/button-begin":I,"scrollbar/button-end":I,"slider":{style:function(gK){var gO;
var gM=!!gK.focused;
var gN=!!gK.invalid;
var gL=!!gK.disabled;

if(gM&&gN&&!gL){gO=cx;
}else if(gM&&!gN&&!gL){gO=ej;
}else if(gL){gO=cz;
}else if(!gM&&gN&&!gL){gO=cB;
}else{gO=cA;
}return {decorator:gO};
}},"slider/knob":{include:ee,style:function(hj){return {decorator:hj.disabled?ca:eA,shadow:undefined,height:14,width:14};
}},"list":{alias:ew,style:function(eW){var fb;
var eY=!!eW.focused;
var fa=!!eW.invalid;
var eX=!!eW.disabled;

if(eY&&fa&&!eX){fb=cx;
}else if(eY&&!fa&&!eX){fb=ej;
}else if(eX){fb=cz;
}else if(!eY&&fa&&!eX){fb=cB;
}else{fb=cA;
}return {backgroundColor:dU,decorator:fb};
}},"list/pane":ec,"listitem":{alias:ed,style:function(gX){var gY;

if(gX.dragover){gY=gX.selected?dS:ev;
}else{gY=gX.selected?cC:undefined;
}return {padding:gX.dragover?[4,4,2,4]:4,textColor:gX.selected?dY:undefined,decorator:gY};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ee,include:ee,style:function(hf){return {padding:5,center:true,icon:hf.vertical?cE:dG};
}},"slidebar/button-backward":{alias:ee,include:ee,style:function(fU){return {padding:5,center:true,icon:fU.vertical?bi:ez};
}},"tabview":{style:function(fr){return {contentPadding:16};
}},"tabview/bar":{alias:bQ,style:function(gV){var gW={marginBottom:gV.barTop?-1:0,marginTop:gV.barBottom?-4:0,marginLeft:gV.barRight?-3:0,marginRight:gV.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gV.barTop||gV.barBottom){gW.paddingLeft=5;
gW.paddingRight=7;
}else{gW.paddingTop=5;
gW.paddingBottom=7;
}return gW;
}},"tabview/bar/button-forward":{include:eI,alias:eI,style:function(gd){if(gd.barTop||gd.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bI,alias:bI,style:function(hM){if(hM.barTop||hM.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gU){return {decorator:db,minHeight:100,marginBottom:gU.barBottom?-1:0,marginTop:gU.barTop?-1:0,marginLeft:gU.barLeft?-1:0,marginRight:gU.barRight?-1:0};
}},"tabview-page":ec,"tabview-page/button":{alias:ed,style:function(hX){var ie,ia=0;
var id=0,hY=0,ib=0,ic=0;

if(hX.checked){if(hX.barTop){ie=cu;
ia=[6,14];
ib=hX.firstTab?0:-5;
ic=hX.lastTab?0:-5;
}else if(hX.barBottom){ie=cX;
ia=[6,14];
ib=hX.firstTab?0:-5;
ic=hX.lastTab?0:-5;
}else if(hX.barRight){ie=bl;
ia=[6,13];
id=hX.firstTab?0:-5;
hY=hX.lastTab?0:-5;
}else{ie=dh;
ia=[6,13];
id=hX.firstTab?0:-5;
hY=hX.lastTab?0:-5;
}}else{if(hX.barTop){ie=cP;
ia=[4,10];
id=4;
ib=hX.firstTab?5:1;
ic=1;
}else if(hX.barBottom){ie=bx;
ia=[4,10];
hY=4;
ib=hX.firstTab?5:1;
ic=1;
}else if(hX.barRight){ie=dp;
ia=[4,10];
ic=5;
id=hX.firstTab?5:1;
hY=1;
ib=1;
}else{ie=cW;
ia=[4,10];
ib=5;
id=hX.firstTab?5:1;
hY=1;
ic=1;
}}return {zIndex:hX.checked?10:5,decorator:ie,padding:ia,marginTop:id,marginBottom:hY,marginLeft:ib,marginRight:ic,textColor:hX.checked?z:bs};
}},"tabview-page/button/close-button":{alias:ed,style:function(gw){return {icon:dR};
}},"toolbar":{style:function(gm){return {decorator:N,spacing:2};
}},"toolbar/part":{style:function(hI){return {decorator:dg,spacing:2};
}},"toolbar/part/container":{style:function(i){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(gq){return {source:er,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:ed,style:function(hg){return {marginTop:2,marginBottom:2,padding:(hg.pressed||hg.checked||hg.hovered)&&!hg.disabled||(hg.disabled&&hg.checked)?3:5,decorator:hg.pressed||(hg.checked&&!hg.hovered)||(hg.checked&&hg.disabled)?dv:hg.hovered&&!hg.disabled?x:undefined};
}},"toolbar-menubutton":{alias:el,include:el,style:function(hJ){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:dX,include:dX,style:function(gh){return {source:bC};
}},"toolbar-splitbutton":{style:function(hN){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:el,include:el,style:function(eK){return {icon:cE,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:el,include:el,style:function(hc){return {padding:hc.pressed||hc.checked?1:hc.hovered?1:3,icon:cE,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hi){return {decorator:cY,margin:7};
}},"tree":ei,"tree-item":{style:function(hk){return {padding:[2,6],textColor:hk.selected?dY:undefined,decorator:hk.selected?cC:undefined};
}},"tree-item/icon":{include:dX,style:function(gx){return {paddingRight:5};
}},"tree-item/label":dH,"tree-item/open":{include:dX,style:function(fK){var fL;

if(fK.selected&&fK.opened){fL=dw;
}else if(fK.selected&&!fK.opened){fL=B;
}else if(fK.opened){fL=bE;
}else{fL=eB;
}return {padding:[0,5,0,2],source:fL};
}},"tree-folder":{include:ef,alias:ef,style:function(hQ){var hR;

if(hQ.small){hR=hQ.opened?be:L;
}else if(hQ.large){hR=hQ.opened?cv:da;
}else{hR=hQ.opened?dm:cw;
}return {icon:hR};
}},"tree-file":{include:ef,alias:ef,style:function(ge){return {icon:ge.small?bA:ge.large?V:es};
}},"treevirtual":bf,"treevirtual-folder":{style:function(hq){return {icon:hq.opened?be:L};
}},"treevirtual-file":{include:bG,alias:bG,style:function(gg){return {icon:bA};
}},"treevirtual-line":{style:function(gu){return {icon:H};
}},"treevirtual-contract":{style:function(hU){return {icon:bE,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hV){return {icon:eB,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":eg,"treevirtual-only-expand":dF,"treevirtual-start-contract":eg,"treevirtual-start-expand":dF,"treevirtual-end-contract":eg,"treevirtual-end-expand":dF,"treevirtual-cross-contract":eg,"treevirtual-cross-expand":dF,"treevirtual-end":{style:function(fv){return {icon:H};
}},"treevirtual-cross":{style:function(k){return {icon:H};
}},"tooltip":{include:ek,style:function(l){return {backgroundColor:bY,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":ed,"tooltip-error":{include:eh,style:function(d){return {textColor:dY,placeMethod:ec,offset:[0,0,0,14],marginTop:-2,position:D,showTimeout:100,hideTimeout:10000,decorator:bw,shadow:bR,font:dW};
}},"tooltip-error/atom":ed,"window":{style:function(fh){return {shadow:bo,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hz){return {decorator:bv};
}},"window/captionbar":{style:function(fJ){return {decorator:fJ.active?O:dd,textColor:fJ.active?dB:bu,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hL){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hG){return {alignY:dV,font:dW,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:ed,style:function(fA){return {icon:fA.active?fA.hovered?cS:dq:du,margin:[4,8,2,0]};
}},"window/restore-button":{alias:ed,style:function(hl){return {icon:hl.active?hl.hovered?bp:T:dx,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:ed,style:function(hp){return {icon:hp.active?hp.hovered?ba:cm:dK,margin:[4,8,2,0]};
}},"window/close-button":{alias:ed,style:function(gF){return {icon:gF.active?gF.hovered?dO:cf:cI,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(eN){return {padding:[2,6],decorator:bV,minHeight:18};
}},"window/statusbar-text":{style:function(gb){return {font:X};
}},"iframe":{style:function(fB){return {decorator:eb};
}},"resizer":{style:function(fk){return {decorator:ck};
}},"splitpane":{style:function(hP){return {decorator:dN};
}},"splitpane/splitter":{style:function(gJ){return {width:gJ.horizontal?3:undefined,height:gJ.vertical?3:undefined,backgroundColor:eH};
}},"splitpane/splitter/knob":{style:function(fS){return {source:fS.horizontal?cT:df};
}},"splitpane/slider":{style:function(f){return {width:f.horizontal?3:undefined,height:f.vertical?3:undefined,backgroundColor:eH};
}},"selectbox":{alias:ee,include:ee,style:function(gc){return {padding:[2,8]};
}},"selectbox/atom":ed,"selectbox/popup":ek,"selectbox/list":{alias:ei},"selectbox/arrow":{include:dX,style:function(gH){return {source:cE,paddingLeft:5};
}},"datechooser":{style:function(fm){var fq;
var fo=!!fm.focused;
var fp=!!fm.invalid;
var fn=!!fm.disabled;

if(fo&&fp&&!fn){fq=cx;
}else if(fo&&!fp&&!fn){fq=ej;
}else if(fn){fq=cz;
}else if(!fo&&fp&&!fn){fq=cB;
}else{fq=cA;
}return {padding:2,decorator:fq,backgroundColor:dU};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:ee,alias:ee,style:function(fD){var fE={padding:[2,4],shadow:undefined};

if(fD.lastYear){fE.icon=cU;
fE.marginRight=1;
}else if(fD.lastMonth){fE.icon=ez;
}else if(fD.nextYear){fE.icon=t;
fE.marginLeft=1;
}else if(fD.nextMonth){fE.icon=dG;
}return fE;
}},"datechooser/last-year-button-tooltip":eh,"datechooser/last-month-button-tooltip":eh,"datechooser/next-year-button-tooltip":eh,"datechooser/next-month-button-tooltip":eh,"datechooser/last-year-button":eo,"datechooser/last-month-button":eo,"datechooser/next-month-button":eo,"datechooser/next-year-button":eo,"datechooser/month-year-label":{style:function(gr){return {font:dW,textAlign:dC,textColor:gr.disabled?cG:undefined};
}},"datechooser/date-pane":{style:function(eP){return {textColor:eP.disabled?cG:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hW){return {textColor:hW.disabled?cG:hW.weekend?eF:undefined,textAlign:dC,paddingTop:2,backgroundColor:bB};
}},"datechooser/week":{style:function(fy){return {textAlign:dC,padding:[2,4],backgroundColor:bB};
}},"datechooser/day":{style:function(fP){return {textAlign:dC,decorator:fP.disabled?undefined:fP.selected?cC:undefined,textColor:fP.disabled?cG:fP.selected?dY:fP.otherMonth?eF:undefined,font:fP.today?dW:undefined,padding:[2,4]};
}},"combobox":{style:function(n){var r;
var p=!!n.focused;
var q=!!n.invalid;
var o=!!n.disabled;

if(p&&q&&!o){r=cx;
}else if(p&&!q&&!o){r=ej;
}else if(o){r=cz;
}else if(!p&&q&&!o){r=cB;
}else{r=cA;
}return {decorator:r};
}},"combobox/popup":ek,"combobox/list":{alias:ei},"combobox/button":{include:ee,alias:ee,style:function(gj){var gk={icon:cE,padding:2};

if(gj.selected){gk.decorator=eG;
}return gk;
}},"combobox/textfield":{include:dE,style:function(ih){return {decorator:undefined};
}},"menu":{style:function(gn){var go={decorator:bT,shadow:bH,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:gn.submenu||gn.contextmenu?eq:cs};

if(gn.submenu){go.position=D;
go.offset=[-2,-3];
}return go;
}},"menu/slidebar":cV,"menu-slidebar":ec,"menu-slidebar-button":{style:function(gv){return {decorator:gv.hovered?cC:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:eE,style:function(hd){return {icon:hd.hovered?dn:bi};
}},"menu-slidebar/button-forward":{include:eE,style:function(fR){return {icon:fR.hovered?bz:cE};
}},"menu-separator":{style:function(gG){return {height:0,decorator:cj,margin:[4,2]};
}},"menu-button":{alias:ed,style:function(eQ){return {decorator:eQ.selected?cC:undefined,textColor:eQ.selected?dY:undefined,padding:[4,6]};
}},"menu-button/icon":{include:dX,style:function(gi){return {alignY:dV};
}},"menu-button/label":{include:dH,style:function(fu){return {alignY:dV,padding:1};
}},"menu-button/shortcut":{include:dH,style:function(gl){return {alignY:dV,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:dX,style:function(hO){return {source:hO.selected?cl:dG,alignY:dV};
}},"menu-checkbox":{alias:cy,include:cy,style:function(fN){return {icon:!fN.checked?undefined:fN.selected?ey:by};
}},"menu-radiobutton":{alias:cy,include:cy,style:function(ho){return {icon:!ho.checked?undefined:ho.selected?cp:u};
}},"menubar":{style:function(gI){return {decorator:cR};
}},"menubar-button":{alias:ed,style:function(eJ){return {decorator:eJ.pressed||eJ.hovered?cC:undefined,textColor:eJ.pressed||eJ.hovered?dY:undefined,padding:[3,8]};
}},"colorselector":ec,"colorselector/control-bar":ec,"colorselector/control-pane":ec,"colorselector/visual-pane":cF,"colorselector/preset-grid":ec,"colorselector/colorbucket":{style:function(fW){return {decorator:eb,width:16,height:16};
}},"colorselector/preset-field-set":cF,"colorselector/input-field-set":cF,"colorselector/preview-field-set":cF,"colorselector/hex-field-composite":ec,"colorselector/hex-field":dE,"colorselector/rgb-spinner-composite":ec,"colorselector/rgb-spinner-red":em,"colorselector/rgb-spinner-green":em,"colorselector/rgb-spinner-blue":em,"colorselector/hsb-spinner-composite":ec,"colorselector/hsb-spinner-hue":em,"colorselector/hsb-spinner-saturation":em,"colorselector/hsb-spinner-brightness":em,"colorselector/preview-content-old":{style:function(fc){return {decorator:eb,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(m){return {decorator:eb,backgroundColor:dU,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gC){return {decorator:eb,margin:5};
}},"colorselector/brightness-field":{style:function(hS){return {decorator:eb,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ec,"colorselector/hue-saturation-handle":ec,"colorselector/brightness-pane":ec,"colorselector/brightness-handle":ec,"colorpopup":{alias:ek,include:ek,style:function(fw){return {padding:5,backgroundColor:dJ};
}},"colorpopup/field":{style:function(hK){return {decorator:eb,margin:2,width:14,height:14,backgroundColor:dU};
}},"colorpopup/selector-button":ea,"colorpopup/auto-button":ea,"colorpopup/preview-pane":cF,"colorpopup/current-preview":{style:function(fx){return {height:20,padding:4,marginLeft:4,decorator:eb,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(fI){return {height:20,padding:4,marginRight:4,decorator:eb,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ea,include:ea,style:function(hT){return {icon:cH};
}},"colorpopup/colorselector-cancelbutton":{alias:ea,include:ea,style:function(fi){return {icon:cQ};
}},"table":{alias:ec,style:function(fs){return {decorator:bf};
}},"table-header":{},"table/statusbar":{style:function(hE){return {decorator:dk,padding:[0,2]};
}},"table/column-button":{alias:ee,style:function(hF){return {decorator:bn,padding:3,icon:v};
}},"table-column-reset-button":{include:cy,alias:cy,style:function(){return {icon:co};
}},"table-scroller":ec,"table-scroller/scrollbar-x":en,"table-scroller/scrollbar-y":en,"table-scroller/header":{style:function(gf){return {decorator:cb};
}},"table-scroller/pane":{style:function(h){return {backgroundColor:ce};
}},"table-scroller/focus-indicator":{style:function(ft){return {decorator:bS};
}},"table-scroller/resize-line":{style:function(hy){return {backgroundColor:dL,width:2};
}},"table-header-cell":{alias:ed,style:function(a){var b=qx.bom.client.Engine.MSHTML?bg:E;
return {minWidth:13,minHeight:20,padding:a.hovered?[3,4,2,4]:[3,4],decorator:a.hovered?cK:bO,sortIcon:a.sorted?(a.sortedAscending?bK+b:s+b):undefined};
}},"table-header-cell/label":{style:function(hh){return {minWidth:0,alignY:dV,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(fj){return {alignY:dV,alignX:J};
}},"table-header-cell/icon":{style:function(fF){return {minWidth:0,alignY:dV,paddingRight:5};
}},"table-editor-textfield":{include:dE,style:function(ga){return {decorator:undefined,padding:[2,2],backgroundColor:dU};
}},"table-editor-selectbox":{include:bJ,alias:bJ,style:function(fg){return {padding:[0,2],backgroundColor:dU};
}},"table-editor-combobox":{include:C,alias:C,style:function(fl){return {decorator:undefined,backgroundColor:dU};
}},"progressive-table-header":{alias:ec,style:function(fz){return {decorator:w};
}},"progressive-table-header-cell":{alias:ed,style:function(eO){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ci};
}},"app-header":{style:function(eL){return {font:dW,textColor:dY,padding:[8,12],decorator:bU};
}},"virtual-list":ei,"virtual-list/row-layer":bt,"row-layer":{style:function(eU){return {colorEven:dB,colorOdd:cJ};
}},"column-layer":ec,"cell":{style:function(gp){return {textColor:gp.selected?dY:eC,padding:[3,6],font:bF};
}},"cell-string":cD,"cell-number":{include:cD,style:function(g){return {textAlign:J};
}},"cell-image":cD,"cell-boolean":{include:cD,style:function(eV){return {iconTrue:bN,iconFalse:Q};
}},"cell-atom":cD,"cell-date":cD,"cell-html":cD,"htmlarea":{"include":ec,style:function(ig){return {backgroundColor:dB};
}}}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();


qx.$$loader.init();

