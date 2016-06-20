(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.0.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.2"}};
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
  packageHashes : {"0":"edcce39c75d0"},
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

qx.$$packageData['edcce39c75d0']={"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"}};
(function(){var bi="toString",bh=".",bg="default",bf="Object",be='"',bd="Array",bc="()",bb="String",ba="Function",Y=".prototype",bG="function",bF="Boolean",bE="Error",bD="RegExp",bC="warn",bB="hasOwnProperty",bA="string",bz="toLocaleString",by='\", "',bx="info",bp="BROKEN_IE",bq="isPrototypeOf",bn="Date",bo="",bl="qx.Bootstrap",bm="]",bj="Class",bk="error",br="[Class ",bs="valueOf",bu="Number",bt="count",bw="debug",bv="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return br+this.classname+bm;
},createNamespace:function(name,y){var A=name.split(bh);
var parent=window;
var z=A[0];

for(var i=0,B=A.length-1;i<B;i++,z=A[i]){if(!parent[z]){parent=parent[z]={};
}else{parent=parent[z];
}}parent[z]=y;
return z;
},setDisplayName:function(I,J,name){I.displayName=J+bh+name+bc;
},setDisplayNames:function(K,L){for(var name in K){var M=K[name];

if(M instanceof Function){M.displayName=L+bh+name+bc;
}}},define:function(name,bN){if(!bN){var bN={statics:{}};
}var bS;
var bQ=null;
qx.Bootstrap.setDisplayNames(bN.statics,name);

if(bN.members){qx.Bootstrap.setDisplayNames(bN.members,name+Y);
bS=bN.construct||new Function;
var bO=bN.statics||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bO),l=bT.length;i<l;i++){var bU=bT[i];
bS[bU]=bO[bU];
}bQ=bS.prototype;
var bP=bN.members||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bP),l=bT.length;i<l;i++){var bU=bT[i];
bQ[bU]=bP[bU];
}}else{bS=bN.statics||{};
}var bR=this.createNamespace(name,bS);
bS.name=bS.classname=name;
bS.basename=bR;
bS.$$type=bj;
if(!bS.hasOwnProperty(bi)){bS.toString=this.genericToString;
}if(bN.defer){bN.defer(bS,bQ);
}qx.Bootstrap.$$registry[name]=bN.statics;
return bS;
}};
qx.Bootstrap.define(bl,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(g){return g.__count__;
},"default":function(bV){var length=0;

for(var bW in bV){length++;
}return length;
}})[(({}).__count__==0)?bt:bg],objectMergeWith:function(r,s,t){if(t===undefined){t=true;
}
for(var u in s){if(t||r[u]===undefined){r[u]=s[u];
}}return r;
},__a:[bq,bB,bz,bi,bs],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(j){var k=[];

for(var o in j){k.push(o);
}var m=qx.Bootstrap.__a;
var n=Object.prototype.hasOwnProperty;

for(var i=0,a=m,l=a.length;i<l;i++){if(n.call(j,a[i])){k.push(a[i]);
}}return k;
},"default":function(d){var e=[];

for(var f in d){e.push(f);
}return e;
}})[typeof (Object.keys)==
bG?bv:
(function(){for(var p in {toString:1}){return p;
}})()!==bi?bp:bg],getKeysAsString:function(bJ){var bK=qx.Bootstrap.getKeys(bJ);

if(bK.length==0){return bo;
}return be+bK.join(by)+be;
},__b:{"[object String]":bb,"[object Array]":bd,"[object Object]":bf,"[object RegExp]":bD,"[object Number]":bu,"[object Boolean]":bF,"[object Date]":bn,"[object Function]":ba,"[object Error]":bE},firstUp:function(X){return X.charAt(0).toUpperCase()+X.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(C){var D=Object.prototype.toString.call(C);
return (qx.Bootstrap.__b[D]||D.slice(8,-1));
},isString:function(bH){return (bH!==null&&(typeof bH===bA||qx.Bootstrap.getClass(bH)==bb||bH instanceof String||(!!bH&&!!bH.$$isString)));
},isArray:function(R){return (R!==null&&(R instanceof Array||(R&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(R.constructor,qx.data.IListData))||qx.Bootstrap.getClass(R)==bd||(!!R&&!!R.$$isArray)));
},isObject:function(q){return (q!==undefined&&q!==null&&qx.Bootstrap.getClass(q)==bf);
},isFunction:function(x){return qx.Bootstrap.getClass(x)==ba;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(G,name){while(G){if(G.$$properties&&G.$$properties[name]){return G.$$properties[name];
}G=G.superclass;
}return null;
},hasProperty:function(H,name){return !!qx.Bootstrap.getPropertyDefinition(H,name);
},getEventType:function(bM,name){var bM=bM.constructor;

while(bM.superclass){if(bM.$$events&&bM.$$events[name]!==undefined){return bM.$$events[name];
}bM=bM.superclass;
}return null;
},supportsEvent:function(bI,name){return !!qx.Bootstrap.getEventType(bI,name);
},getByInterface:function(U,V){var W,i,l;

while(U){if(U.$$implements){W=U.$$flatImplements;

for(i=0,l=W.length;i<l;i++){if(W[i]===V){return U;
}}}U=U.superclass;
}return null;
},hasInterface:function(P,Q){return !!qx.Bootstrap.getByInterface(P,Q);
},getMixins:function(E){var F=[];

while(E){if(E.$$includes){F.push.apply(F,E.$$flatIncludes);
}E=E.superclass;
}return F;
},$$logs:[],debug:function(S,T){qx.Bootstrap.$$logs.push([bw,arguments]);
},info:function(b,c){qx.Bootstrap.$$logs.push([bx,arguments]);
},warn:function(v,w){qx.Bootstrap.$$logs.push([bC,arguments]);
},error:function(N,O){qx.Bootstrap.$$logs.push([bk,arguments]);
},trace:function(h){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__c[a]){this.__c[a]={};
}else if(this.__c[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__c[a].defaultValue=b;
},get:function(l){var m=this.__c[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var n in window.qxsettings){this.set(n,window.qxsettings[n]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(o){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var t=document.location.search.slice(1).split(j);

for(var i=0;i<t.length;i++){var s=t[i].split(d);

if(s.length!=3||s[0]!=e){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(k,false);
r.define(g,false);
r.define(f,0);
r.__d();
}});
})();
(function(){var a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__X:function(){var b="unknown";
var f="0.0.0";
var e=window.navigator.userAgent;
var h=false;
var d=false;

if(window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"){b="opera";
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(e)){f=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){f+="."+RegExp.$3;
}}else{d=true;
f="9.6.0";
}}else if(window.navigator.userAgent.indexOf("AppleWebKit/")!=-1){b="webkit";
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(e)){f=RegExp.$1;
var g=RegExp("[^\\.0-9]").exec(f);

if(g){f=f.slice(0,g.index);
}}else{d=true;
f="525.26";
}}else if(window.controllers&&window.navigator.product==="Gecko"){b="gecko";
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(e)){f=RegExp.$1;
}else{d=true;
f="1.9.0.0";
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(e)){b="mshtml";
f=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(f<8&&/Trident\/([^\);]+)(\)|;)/.test(e)){if(RegExp.$1==="4.0"){f="8.0";
}}this.MSHTML=true;
}else{var c=window.qxFail;

if(c&&typeof c==="function"){var b=c();

if(b.NAME&&b.FULLVERSION){b=b.NAME;
this[b.toUpperCase()]=true;
f=b.FULLVERSION;
}}else{h=true;
d=true;
f="1.9.0.0";
b="gecko";
this.GECKO=true;
window.alert("Unsupported client: "+e+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=h;
this.UNKNOWN_VERSION=d;
this.NAME=b;
this.FULLVERSION=f;
this.VERSION=parseFloat(f);
}},defer:function(i){i.__X();
}});
})();
(function(){var w="on",u="qx.debug",t="off",s="|",r="default",q="object",p="&",o="qx.aspects",n="$",m="qx.allowUrlVariants",d="qx.client",k="qx.dynlocale",g="webkit",c="qxvariant",b="opera",f=":",e=".",h="qx.core.Variant",a="mshtml",j="gecko";
qx.Bootstrap.define(h,{statics:{__Y:{},__ba:{},compilerIsSet:function(){return true;
},define:function(P,Q,R){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__bd(Q)){throw new Error('Allowed values of variant "'+P+'" must be defined!');
}
if(R===undefined){throw new Error('Default value of variant "'+P+'" must be defined!');
}}
if(!this.__Y[P]){this.__Y[P]={};
}else if(qx.core.Variant.compilerIsSet(u,w)){if(this.__Y[P].defaultValue!==undefined){throw new Error('Variant "'+P+'" is already defined!');
}}this.__Y[P].allowedValues=Q;
this.__Y[P].defaultValue=R;
},get:function(M){var N=this.__Y[M];

if(qx.core.Variant.compilerIsSet(u,w)){if(N===undefined){throw new Error('Variant "'+M+'" is not defined.');
}}
if(N.value!==undefined){return N.value;
}return N.defaultValue;
},__bb:function(){if(window.qxvariants){for(var O in qxvariants){if(qx.core.Variant.compilerIsSet(u,w)){if((O.split(e)).length<2){throw new Error('Malformed settings key "'+O+'". Must be following the schema "namespace.key".');
}}
if(!this.__Y[O]){this.__Y[O]={};
}this.__Y[O].value=qxvariants[O];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(x){}this.__bc(this.__Y);
}},__bc:function(){if(qx.core.Setting.get(m)!=true){return;
}var y=document.location.search.slice(1).split(p);

for(var i=0;i<y.length;i++){var z=y[i].split(f);

if(z.length!=3||z[0]!=c){continue;
}var A=z[1];

if(!this.__Y[A]){this.__Y[A]={};
}this.__Y[A].value=decodeURIComponent(z[2]);
}},select:function(G,H){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__be(this.__Y[G])){throw new Error("Variant \""+G+"\" is not defined");
}
if(!this.__be(H)){throw new Error("the second parameter must be a map!");
}}
for(var I in H){if(this.isSet(G,I)){return H[I];
}}
if(H[r]!==undefined){return H[r];
}
if(qx.core.Variant.compilerIsSet(u,w)){throw new Error('No match for variant "'+G+'" in variants ['+qx.Bootstrap.getKeysAsString(H)+'] found, and no default ("default") given');
}},isSet:function(B,C){var D=B+n+C;

if(this.__ba[D]!==undefined){return this.__ba[D];
}var F=false;
if(C.indexOf(s)<0){F=this.get(B)===C;
}else{var E=C.split(s);

for(var i=0,l=E.length;i<l;i++){if(this.get(B)===E[i]){F=true;
break;
}}}this.__ba[D]=F;
return F;
},__bd:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__be:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__bf:function(J,K){for(var i=0,l=J.length;i<l;i++){if(J[i]==K){return true;
}}return false;
}},defer:function(L){L.define(d,[j,a,b,g],qx.bom.client.Engine.NAME);
L.define(u,[w,t],w);
L.define(o,[w,t],t);
L.define(k,[w,t],w);
L.__bb();
}});
})();
(function(){var x="qx.debug",w="object",v="Interface",u="on",t="string",s="function",r="Boolean",q="qx.Interface",p="events",o="toggle",g="properties",n="]",k="members",f="number",e="boolean",j="is",h="[Interface ",m="statics";
qx.Bootstrap.define(q,{statics:{define:function(name,H){if(H){if(H.extend&&!(H.extend instanceof Array)){H.extend=[H.extend];
}if(qx.core.Variant.isSet(x,u)){this.__l(name,H);
}var I=H.statics?H.statics:{};
if(H.extend){I.$$extends=H.extend;
}
if(H.properties){I.$$properties=H.properties;
}
if(H.members){I.$$members=H.members;
}
if(H.events){I.$$events=H.events;
}}else{var I={};
}I.$$type=v;
I.name=name;
I.toString=this.genericToString;
I.basename=qx.Bootstrap.createNamespace(name,I);
qx.Interface.$$registry[name]=I;
return I;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(bk){if(!bk){return [];
}var bl=bk.concat();

for(var i=0,l=bk.length;i<l;i++){if(bk[i].$$extends){bl.push.apply(bl,this.flatten(bk[i].$$extends));
}}return bl;
},__f:function(y,z,A,B){var F=A.$$members;

if(F){for(var E in F){if(qx.Bootstrap.isFunction(F[E])){var D=this.__g(z,E);
var C=D||qx.Bootstrap.isFunction(y[E]);

if(!C){throw new Error('Implementation of method "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}var G=B===true&&!D&&!qx.Bootstrap.hasInterface(z,A);

if(G){y[E]=this.__j(A,y[E],E,F[E]);
}}else{if(typeof y[E]===undefined){if(typeof y[E]!==s){throw new Error('Implementation of member "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}}}}}},__g:function(be,bf){var bj=bf.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!bj){return false;
}var bg=qx.Bootstrap.firstLow(bj[2]);
var bh=qx.Bootstrap.getPropertyDefinition(be,bg);

if(!bh){return false;
}var bi=bj[0]==j||bj[0]==o;

if(bi){return qx.Bootstrap.getPropertyDefinition(be,bg).check==r;
}return true;
},__h:function(b,c){if(c.$$properties){for(var d in c.$$properties){if(!qx.Bootstrap.getPropertyDefinition(b,d)){throw new Error('The property "'+d+'" is not supported by Class "'+b.classname+'"!');
}}}},__i:function(V,W){if(W.$$events){for(var X in W.$$events){if(!qx.Bootstrap.supportsEvent(V,X)){throw new Error('The event "'+X+'" is not supported by Class "'+V.classname+'"!');
}}}},assertObject:function(N,O){var Q=N.constructor;
this.__f(N,Q,O,false);
this.__h(Q,O);
this.__i(Q,O);
var P=O.$$extends;

if(P){for(var i=0,l=P.length;i<l;i++){this.assertObject(N,P[i]);
}}},assert:function(R,S,T){this.__f(R.prototype,R,S,T);
this.__h(R,S);
this.__i(R,S);
var U=S.$$extends;

if(U){for(var i=0,l=U.length;i<l;i++){this.assert(R,U[i],T);
}}},genericToString:function(){return h+this.name+n;
},$$registry:{},__j:qx.core.Variant.select(x,{"on":function(Y,ba,bb,bc){function bd(){bc.apply(this,arguments);
return ba.apply(this,arguments);
}ba.wrapper=bd;
return bd;
},"default":function(){}}),__k:qx.core.Variant.select(x,{"on":{"extend":w,"statics":w,"members":w,"properties":w,"events":w},"default":null}),__l:qx.core.Variant.select(x,{"on":function(name,J){if(qx.core.Variant.isSet(x,u)){var M=this.__k;

for(var L in J){if(M[L]===undefined){throw new Error('The configuration key "'+L+'" in class "'+name+'" is not allowed!');
}
if(J[L]==null){throw new Error("Invalid key '"+L+"' in interface '"+name+"'! The value is undefined/null!");
}
if(M[L]!==null&&typeof J[L]!==M[L]){throw new Error('Invalid type of key "'+L+'" in interface "'+name+'"! The type of the key must be "'+M[L]+'"!');
}}var K=[m,k,g,p];

for(var i=0,l=K.length;i<l;i++){var L=K[i];

if(J[L]!==undefined&&(J[L] instanceof Array||J[L] instanceof RegExp||J[L] instanceof Date||J[L].classname!==undefined)){throw new Error('Invalid key "'+L+'" in interface "'+name+'"! The value needs to be a map!');
}}if(J.extend){for(var i=0,a=J.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==v){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(J.statics){for(var L in J.statics){if(L.toUpperCase()!==L){throw new Error('Invalid key "'+L+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof J.statics[L]){case e:case t:case f:break;
default:throw new Error('Invalid key "'+L+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,F){if(F){if(F.include&&!(F.include instanceof Array)){F.include=[F.include];
}if(qx.core.Variant.isSet(q,e)){this.__n(name,F);
}var H=F.statics?F.statics:{};
qx.Bootstrap.setDisplayNames(H,name);

for(var G in H){if(H[G] instanceof Function){H[G].$$mixin=H;
}}if(F.construct){H.$$constructor=F.construct;
qx.Bootstrap.setDisplayName(F.construct,name,k);
}
if(F.include){H.$$includes=F.include;
}
if(F.properties){H.$$properties=F.properties;
}
if(F.members){H.$$members=F.members;
qx.Bootstrap.setDisplayNames(F.members,name+m);
}
for(var G in H.$$members){if(H.$$members[G] instanceof Function){H.$$members[G].$$mixin=H;
}}
if(F.events){H.$$events=F.events;
}
if(F.destruct){H.$$destructor=F.destruct;
qx.Bootstrap.setDisplayName(F.destruct,name,d);
}}else{var H={};
}H.$$type=o;
H.name=name;
H.toString=this.genericToString;
H.basename=qx.Bootstrap.createNamespace(name,H);
this.$$registry[name]=H;
return H;
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
},isCompatible:function(C,D){var E=qx.Bootstrap.getMixins(D);
E.push(C);
return qx.Mixin.checkCompatibility(E);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(A){if(!A){return [];
}var B=A.concat();

for(var i=0,l=A.length;i<l;i++){if(A[i].$$includes){B.push.apply(B,this.flatten(A[i].$$includes));
}}return B;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__m:qx.core.Variant.select(q,{"on":{"include":r,"statics":r,"members":r,"properties":r,"events":r,"destruct":p,"construct":p},"default":null}),__n:qx.core.Variant.select(q,{"on":function(name,I){var L=this.__m;

for(var K in I){if(!L[K]){throw new Error('The configuration key "'+K+'" in mixin "'+name+'" is not allowed!');
}
if(I[K]==null){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(L[K]!==null&&typeof I[K]!==L[K]){throw new Error('Invalid type of key "'+K+'" in mixin "'+name+'"! The type of the key must be "'+L[K]+'"!');
}}var J=[b,g,c,f];

for(var i=0,l=J.length;i<l;i++){var K=J[i];

if(I[K]!==undefined&&(I[K] instanceof Array||I[K] instanceof RegExp||I[K] instanceof Date||I[K].classname!==undefined)){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(I.include){for(var i=0,a=I.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==o){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(I.include);
}},"default":function(){}})}});
})();
(function(){var cy=';',cx="on",cw="qx.debug",cv="string",cu='!==undefined)',ct='if(this.',cs='return this.',cr='","',cq='",value);',cp="boolean",bK="set",bJ="resetThemed",bI="setThemed",bH="init",bG="",bF="qx.propertyDebugLevel",bE="resetRuntime",bD="reset",bC='this.',bB="setRuntime",cF="this.",cG='=value;',cD='else if(this.',cE='delete this.',cB='.$$properties.',cC="refresh",cz="();",cA='else ',cH='if(value===undefined)prop.error(this,2,"',cI="return this.",ci="get",ch='(value);',ck="(a[",cj='"), msg)',cm='!(',cl="value",co=' of an instance of ',cn='var prop=qx.core.Property;',cg=')',cf=' is not (yet) ready!");',s="]);",t='var msg = "Invalid incoming value for property \'',u='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',v='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',w='value !== null && value.nodeType === 9 && value.documentElement',x='===value)return value;',y='value !== null && value.$$type === "Mixin"',z='return init;',A='var init=this.',B=')prop.error(this,5,"',cM='value !== null && value.nodeType === 1 && value.attributes',cL="Error in property ",cK="property",cJ='.check.call(this, value)',cQ='.validate.call(this, value);',cP='qx.core.Assert.assertInstance(value, Date, msg) || true',cO=" in method ",cN='qx.core.Assert.assertInstance(value, Error, msg) || true',cS='Undefined value is not allowed!',cR='if(',bb="inherit",bc='Is invalid!',Y="': ",ba=" of class ",bf='value !== null && value.nodeType !== undefined',bg='===undefined)return;',bd='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',be='qx.core.Assert.assertPositiveInteger(value, msg) || true',W='value=this.',X='if(init==qx.core.Property.$$inherit)init=null;',J='qx.core.Assert.assertInArray(value, ',I='value !== null && value.$$type === "Interface"',L='var inherit=prop.$$inherit;',K="$$useinit_",F="$$runtime_",E='Requires exactly one argument!',H='if(this.$$initialized)prop.error(this,0,"',G='qx.core.Assert.assertInstance(value, qx.Class.getByName("',D="$$user_",C='if(value===null)prop.error(this,4,"',bl='!',bm='qx.core.Assert.assertArray(value, msg) || true',bn='qx.core.Assert.assertPositiveNumber(value, msg) || true',bo=".prototype",bh="function",bi="Boolean",bj='return value;',bk='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bp='Does not allow any arguments!',bq='\'";',T="()",S="var a=arguments[0] instanceof Array?arguments[0]:arguments;",R='value !== null && value.$$type === "Theme"',Q='if(value!==null)',P="())",O='return null;',N='qx.core.Assert.assertObject(value, msg) || true',M='qx.core.Assert.assertString(value, msg) || true',V='value !== null && value.$$type === "Class"',U='qx.core.Assert.assertFunction(value, msg) || true',br=".",bs="object",bt="$$init_",bu='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',bv="$$theme_",bw='\' of class \'',bx='if(arguments.length!==1)prop.error(this,1,"',by='qx.core.Assert.assertMap(value, msg) || true',bz="qx.aspects",bA='qx.core.Assert.assertNumber(value, msg) || true',bO='Null value is not allowed!',bN='if(value!==inherit)',bM='qx.core.Assert.assertInteger(value, msg) || true',bL="shorthand",bS='qx.core.Assert.assertInstance(value, RegExp, msg) || true',bR='value !== null && value.type !== undefined',bQ='value !== null && value.document',bP='throw new Error("Property ',bU="(!this.",bT='qx.core.Assert.assertBoolean(value, msg) || true',cc='.check, msg)',cd="toggle",ca="$$inherit_",cb=" with incoming value '",bX='if(arguments.length!==0)prop.error(this,3,"',bY="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bV="qx.core.Property",bW="is",ce='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bV,{statics:{__o:{"Boolean":bT,"String":M,"Number":bA,"Integer":bM,"PositiveNumber":bn,"PositiveInteger":be,"Error":cN,"RegExp":bS,"Object":N,"Array":bm,"Map":by,"Function":U,"Date":cP,"Node":bf,"Element":cM,"Document":w,"Window":bQ,"Event":bR,"Class":V,"Mixin":y,"Interface":I,"Theme":R,"Color":u,"Decorator":bd,"Font":v},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bb,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cv,dispose:cp,inheritable:cp,nullable:cp,themeable:cp,refine:cp,init:null,apply:cv,event:cv,check:null,transform:cv,deferredInit:cp,validate:null},$$allowedGroupKeys:{name:cv,group:bs,mode:cv,themeable:cp},$$inheritable:{},refresh:function(es){var parent=es.getLayoutParent();

if(parent){var ev=es.constructor;
var ey=this.$$store.inherit;
var ew=this.$$store.init;
var eu=this.$$method.refresh;
var ez;
var et;

if(qx.core.Variant.isSet(cw,cx)){if(qx.core.Setting.get(bF)>1){es.debug("Update property inheritance");
}}
while(ev){ez=ev.$$properties;

if(ez){for(var name in this.$$inheritable){if(ez[name]&&es[eu[name]]){et=parent[ey[name]];

if(et===undefined){et=parent[ew[name]];
}
if(qx.core.Variant.isSet(cw,cx)){if(qx.core.Setting.get(bF)>2){es.debug("Updating property: "+name+" to '"+et+"'");
}}es[eu[name]](et);
}}}ev=ev.superclass;
}}},attach:function(eA){var eB=eA.$$properties;

if(eB){for(var name in eB){this.attachMethods(eA,name,eB[name]);
}}eA.$$propertiesAttached=true;
},attachMethods:function(de,name,df){df.group?this.__q(de,df,name):this.__r(de,df,name);
},__q:function(ed,ee,name){var el=qx.Bootstrap.firstUp(name);
var ek=ed.prototype;
var em=ee.themeable===true;

if(qx.core.Variant.isSet(cw,cx)){if(qx.core.Setting.get(bF)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var en=[];
var eh=[];

if(em){var ef=[];
var ej=[];
}var ei=S;
en.push(ei);

if(em){ef.push(ei);
}
if(ee.mode==bL){var eg=bY;
en.push(eg);

if(em){ef.push(eg);
}}
for(var i=0,a=ee.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(cw,cx)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}en.push(cF,this.$$method.set[a[i]],ck,i,s);
eh.push(cF,this.$$method.reset[a[i]],cz);

if(em){if(qx.core.Variant.isSet(cw,cx)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}ef.push(cF,this.$$method.setThemed[a[i]],ck,i,s);
ej.push(cF,this.$$method.resetThemed[a[i]],cz);
}}this.$$method.set[name]=bK+el;
ek[this.$$method.set[name]]=new Function(en.join(bG));
this.$$method.reset[name]=bD+el;
ek[this.$$method.reset[name]]=new Function(eh.join(bG));

if(em){this.$$method.setThemed[name]=bI+el;
ek[this.$$method.setThemed[name]]=new Function(ef.join(bG));
this.$$method.resetThemed[name]=bJ+el;
ek[this.$$method.resetThemed[name]]=new Function(ej.join(bG));
}},__r:function(cT,cU,name){var cW=qx.Bootstrap.firstUp(name);
var cY=cT.prototype;

if(qx.core.Variant.isSet(cw,cx)){if(qx.core.Setting.get(bF)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(cU.dispose===undefined&&typeof cU.check===cv){cU.dispose=this.__p[cU.check]||qx.Bootstrap.classIsDefined(cU.check)||(qx.Interface&&qx.Interface.isDefined(cU.check));
}var cX=this.$$method;
var cV=this.$$store;
cV.runtime[name]=F+name;
cV.user[name]=D+name;
cV.theme[name]=bv+name;
cV.init[name]=bt+name;
cV.inherit[name]=ca+name;
cV.useinit[name]=K+name;
cX.get[name]=ci+cW;
cY[cX.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cT,name,ci);
};
cX.set[name]=bK+cW;
cY[cX.set[name]]=function(dv){return qx.core.Property.executeOptimizedSetter(this,cT,name,bK,arguments);
};
cX.reset[name]=bD+cW;
cY[cX.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bD);
};

if(cU.inheritable||cU.apply||cU.event||cU.deferredInit){cX.init[name]=bH+cW;
cY[cX.init[name]]=function(dp){return qx.core.Property.executeOptimizedSetter(this,cT,name,bH,arguments);
};
}
if(cU.inheritable){cX.refresh[name]=cC+cW;
cY[cX.refresh[name]]=function(dQ){return qx.core.Property.executeOptimizedSetter(this,cT,name,cC,arguments);
};
}cX.setRuntime[name]=bB+cW;
cY[cX.setRuntime[name]]=function(dR){return qx.core.Property.executeOptimizedSetter(this,cT,name,bB,arguments);
};
cX.resetRuntime[name]=bE+cW;
cY[cX.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bE);
};

if(cU.themeable){cX.setThemed[name]=bI+cW;
cY[cX.setThemed[name]]=function(n){return qx.core.Property.executeOptimizedSetter(this,cT,name,bI,arguments);
};
cX.resetThemed[name]=bJ+cW;
cY[cX.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,bJ);
};
}
if(cU.check===bi){cY[cd+cW]=new Function(cI+cX.set[name]+bU+cX.get[name]+P);
cY[bW+cW]=new Function(cI+cX.get[name]+T);
}},__s:{0:ce,1:E,2:cS,3:bp,4:bO,5:bc},error:function(dS,dT,dU,dV,dW){var dX=dS.constructor.classname;
var dY=cL+dU+ba+dX+cO+this.$$method[dV][dU]+cb+dW+Y;
throw new Error(dY+(this.__s[dT]||"Unknown reason: "+dT));
},__t:function(f,g,name,h,j,k){var m=this.$$method[h][name];
if(qx.core.Variant.isSet(cw,cx)){if(qx.core.Setting.get(bF)>1){qx.Bootstrap.debug("Code["+this.$$method[h][name]+"]: "+j.join(""));
}try{g[m]=new Function(cl,j.join(bG));
}catch(dw){throw new Error("Malformed generated code to unwrap method: "+this.$$method[h][name]+"\n"+j.join(""));
}}else{g[m]=new Function(cl,j.join(bG));
}if(qx.core.Variant.isSet(bz,cx)){g[m]=qx.core.Aspect.wrap(f.classname+br+m,g[m],cK);
}qx.Bootstrap.setDisplayName(g[m],f.classname+bo,m);
if(k===undefined){return f[m]();
}else if(qx.core.Variant.isSet(cw,cx)){return f[m].apply(f,k);
}else{return f[m](k[0]);
}},executeOptimizedGetter:function(dx,dy,name,dz){var dB=dy.$$properties[name];
var dD=dy.prototype;
var dA=[];
var dC=this.$$store;
dA.push(ct,dC.runtime[name],cu);
dA.push(cs,dC.runtime[name],cy);

if(dB.inheritable){dA.push(cD,dC.inherit[name],cu);
dA.push(cs,dC.inherit[name],cy);
dA.push(cA);
}dA.push(ct,dC.user[name],cu);
dA.push(cs,dC.user[name],cy);

if(dB.themeable){dA.push(cD,dC.theme[name],cu);
dA.push(cs,dC.theme[name],cy);
}
if(dB.deferredInit&&dB.init===undefined){dA.push(cD,dC.init[name],cu);
dA.push(cs,dC.init[name],cy);
}dA.push(cA);

if(dB.init!==undefined){if(dB.inheritable){dA.push(A,dC.init[name],cy);

if(dB.nullable){dA.push(X);
}else if(dB.init!==undefined){dA.push(cs,dC.init[name],cy);
}else{dA.push(bk,name,co,dy.classname,cf);
}dA.push(z);
}else{dA.push(cs,dC.init[name],cy);
}}else if(dB.inheritable||dB.nullable){dA.push(O);
}else{dA.push(bP,name,co,dy.classname,cf);
}return this.__t(dx,dD,name,dz,dA);
},executeOptimizedSetter:function(dG,dH,name,dI,dJ){var dO=dH.$$properties[name];
var dN=dH.prototype;
var dL=[];
var dK=dI===bK||dI===bI||dI===bB||(dI===bH&&dO.init===undefined);
var dM=dO.apply||dO.event||dO.inheritable;
var dP=this.__u(dI,name);
this.__v(dL,dO,name,dI,dK);

if(dK){this.__w(dL,dH,dO,name);
}
if(dM){this.__x(dL,dK,dP,dI);
}
if(dO.inheritable){dL.push(L);
}
if(qx.core.Variant.isSet(cw,cx)){if(dK){this.__y(dL,dO,dH,name,dI);
}}
if(!dM){this.__z(dL,name,dI,dK);
}else{this.__A(dL,dO,name,dI,dK);
}
if(dO.inheritable){this.__B(dL,dO,name,dI);
}else if(dM){this.__C(dL,dO,name,dI);
}
if(dM){this.__D(dL,dO,name);
if(dO.inheritable&&dN._getChildren){this.__E(dL,name);
}}if(dK){dL.push(bj);
}return this.__t(dG,dN,name,dI,dL,dJ);
},__u:function(dE,name){if(dE===bB||dE===bE){var dF=this.$$store.runtime[name];
}else if(dE===bI||dE===bJ){dF=this.$$store.theme[name];
}else if(dE===bH){dF=this.$$store.init[name];
}else{dF=this.$$store.user[name];
}return dF;
},__v:function(eo,ep,name,eq,er){if(qx.core.Variant.isSet(cw,cx)){eo.push(cn);

if(eq===bH){eo.push(H,name,cr,eq,cq);
}
if(eq===cC){}else if(er){eo.push(bx,name,cr,eq,cq);
eo.push(cH,name,cr,eq,cq);
}else{eo.push(bX,name,cr,eq,cq);
}}else{if(!ep.nullable||ep.check||ep.inheritable){eo.push(cn);
}if(eq===bK){eo.push(cH,name,cr,eq,cq);
}}},__w:function(ds,dt,du,name){if(du.transform){ds.push(W,du.transform,ch);
}if(du.validate){if(typeof du.validate===cv){ds.push(bC,du.validate,ch);
}else if(du.validate instanceof Function){ds.push(dt.classname,cB,name);
ds.push(cQ);
}}},__x:function(dg,dh,di,dj){var dk=(dj===bD||dj===bJ||dj===bE);

if(dh){dg.push(ct,di,x);
}else if(dk){dg.push(ct,di,bg);
}},__y:qx.core.Variant.select(cw,{"on":function(da,db,dc,name,dd){if(!db.nullable){da.push(C,name,cr,dd,cq);
}if(db.check!==undefined){da.push(t+name+bw+dc.classname+bq);
if(db.nullable){da.push(Q);
}if(db.inheritable){da.push(bN);
}da.push(cR);

if(this.__o[db.check]!==undefined){da.push(cm,this.__o[db.check],cg);
}else if(qx.Class.isDefined(db.check)){da.push(G,db.check,cj);
}else if(qx.Interface&&qx.Interface.isDefined(db.check)){da.push(bu,db.check,cj);
}else if(typeof db.check===bh){da.push(bl,dc.classname,cB,name);
da.push(cJ);
}else if(typeof db.check===cv){da.push(cm,db.check,cg);
}else if(db.check instanceof Array){da.push(J,dc.classname,cB,name,cc);
}else{throw new Error("Could not add check to property "+name+" of class "+dc.classname);
}da.push(B,name,cr,dd,cq);
}},"off":undefined}),__z:function(b,name,c,d){if(c===bB){b.push(bC,this.$$store.runtime[name],cG);
}else if(c===bE){b.push(ct,this.$$store.runtime[name],cu);
b.push(cE,this.$$store.runtime[name],cy);
}else if(c===bK){b.push(bC,this.$$store.user[name],cG);
}else if(c===bD){b.push(ct,this.$$store.user[name],cu);
b.push(cE,this.$$store.user[name],cy);
}else if(c===bI){b.push(bC,this.$$store.theme[name],cG);
}else if(c===bJ){b.push(ct,this.$$store.theme[name],cu);
b.push(cE,this.$$store.theme[name],cy);
}else if(c===bH&&d){b.push(bC,this.$$store.init[name],cG);
}},__A:function(o,p,name,q,r){if(p.inheritable){o.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{o.push('var computed, old;');
}o.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(q==="setRuntime"){o.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(q==="resetRuntime"){o.push('delete this.',this.$$store.runtime[name],';');
o.push('if(this.',this.$$store.user[name],'!==undefined)');
o.push('computed=this.',this.$$store.user[name],';');
o.push('else if(this.',this.$$store.theme[name],'!==undefined)');
o.push('computed=this.',this.$$store.theme[name],';');
o.push('else if(this.',this.$$store.init[name],'!==undefined){');
o.push('computed=this.',this.$$store.init[name],';');
o.push('this.',this.$$store.useinit[name],'=true;');
o.push('}');
}else{o.push('old=computed=this.',this.$$store.runtime[name],';');
if(q==="set"){o.push('this.',this.$$store.user[name],'=value;');
}else if(q==="reset"){o.push('delete this.',this.$$store.user[name],';');
}else if(q==="setThemed"){o.push('this.',this.$$store.theme[name],'=value;');
}else if(q==="resetThemed"){o.push('delete this.',this.$$store.theme[name],';');
}else if(q==="init"&&r){o.push('this.',this.$$store.init[name],'=value;');
}}o.push('}');
o.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(q==="set"){if(!p.inheritable){o.push('old=this.',this.$$store.user[name],';');
}o.push('computed=this.',this.$$store.user[name],'=value;');
}else if(q==="reset"){if(!p.inheritable){o.push('old=this.',this.$$store.user[name],';');
}o.push('delete this.',this.$$store.user[name],';');
o.push('if(this.',this.$$store.runtime[name],'!==undefined)');
o.push('computed=this.',this.$$store.runtime[name],';');
o.push('if(this.',this.$$store.theme[name],'!==undefined)');
o.push('computed=this.',this.$$store.theme[name],';');
o.push('else if(this.',this.$$store.init[name],'!==undefined){');
o.push('computed=this.',this.$$store.init[name],';');
o.push('this.',this.$$store.useinit[name],'=true;');
o.push('}');
}else{if(q==="setRuntime"){o.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(p.inheritable){o.push('computed=this.',this.$$store.user[name],';');
}else{o.push('old=computed=this.',this.$$store.user[name],';');
}if(q==="setThemed"){o.push('this.',this.$$store.theme[name],'=value;');
}else if(q==="resetThemed"){o.push('delete this.',this.$$store.theme[name],';');
}else if(q==="init"&&r){o.push('this.',this.$$store.init[name],'=value;');
}}o.push('}');
if(p.themeable){o.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!p.inheritable){o.push('old=this.',this.$$store.theme[name],';');
}
if(q==="setRuntime"){o.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(q==="set"){o.push('computed=this.',this.$$store.user[name],'=value;');
}else if(q==="setThemed"){o.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(q==="resetThemed"){o.push('delete this.',this.$$store.theme[name],';');
o.push('if(this.',this.$$store.init[name],'!==undefined){');
o.push('computed=this.',this.$$store.init[name],';');
o.push('this.',this.$$store.useinit[name],'=true;');
o.push('}');
}else if(q==="init"){if(r){o.push('this.',this.$$store.init[name],'=value;');
}o.push('computed=this.',this.$$store.theme[name],';');
}else if(q==="refresh"){o.push('computed=this.',this.$$store.theme[name],';');
}o.push('}');
}o.push('else if(this.',this.$$store.useinit[name],'){');

if(!p.inheritable){o.push('old=this.',this.$$store.init[name],';');
}
if(q==="init"){if(r){o.push('computed=this.',this.$$store.init[name],'=value;');
}else{o.push('computed=this.',this.$$store.init[name],';');
}}else if(q==="set"||q==="setRuntime"||q==="setThemed"||q==="refresh"){o.push('delete this.',this.$$store.useinit[name],';');

if(q==="setRuntime"){o.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(q==="set"){o.push('computed=this.',this.$$store.user[name],'=value;');
}else if(q==="setThemed"){o.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(q==="refresh"){o.push('computed=this.',this.$$store.init[name],';');
}}o.push('}');
if(q==="set"||q==="setRuntime"||q==="setThemed"||q==="init"){o.push('else{');

if(q==="setRuntime"){o.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(q==="set"){o.push('computed=this.',this.$$store.user[name],'=value;');
}else if(q==="setThemed"){o.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(q==="init"){if(r){o.push('computed=this.',this.$$store.init[name],'=value;');
}else{o.push('computed=this.',this.$$store.init[name],';');
}o.push('this.',this.$$store.useinit[name],'=true;');
}o.push('}');
}},__B:function(dl,dm,name,dn){dl.push('if(computed===undefined||computed===inherit){');

if(dn==="refresh"){dl.push('computed=value;');
}else{dl.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dl.push('if((computed===undefined||computed===inherit)&&');
dl.push('this.',this.$$store.init[name],'!==undefined&&');
dl.push('this.',this.$$store.init[name],'!==inherit){');
dl.push('computed=this.',this.$$store.init[name],';');
dl.push('this.',this.$$store.useinit[name],'=true;');
dl.push('}else{');
dl.push('delete this.',this.$$store.useinit[name],';}');
dl.push('}');
dl.push('if(old===computed)return value;');
dl.push('if(computed===inherit){');
dl.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dl.push('}');
dl.push('else if(computed===undefined)');
dl.push('delete this.',this.$$store.inherit[name],';');
dl.push('else this.',this.$$store.inherit[name],'=computed;');
dl.push('var backup=computed;');
if(dm.init!==undefined&&dn!=="init"){dl.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dl.push('if(old===undefined)old=null;');
}dl.push('if(computed===undefined||computed==inherit)computed=null;');
},__C:function(ea,eb,name,ec){if(ec!=="set"&&ec!=="setRuntime"&&ec!=="setThemed"){ea.push('if(computed===undefined)computed=null;');
}ea.push('if(old===computed)return value;');
if(eb.init!==undefined&&ec!=="init"){ea.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{ea.push('if(old===undefined)old=null;');
}},__D:function(dq,dr,name){if(dr.apply){dq.push('this.',dr.apply,'(computed, old, "',name,'");');
}if(dr.event){dq.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dr.event,"')){","reg.fireEvent(this, '",dr.event,"', qx.event.type.Data, [computed, old]",")}");
}},__E:function(e,name){e.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
e.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
e.push('}');
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__wk:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__wk;
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
},addAdvice:function(e,f,g,name){this.__wk.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var bA="on",bz="qx.debug",by="static",bx="[Class ",bw="]",bv="qx.aspects",bu="extend",bt="qx.Class",bs=".";
qx.Bootstrap.define(bt,{statics:{define:function(name,ba){if(!ba){var ba={};
}if(ba.include&&!(ba.include instanceof Array)){ba.include=[ba.include];
}if(ba.implement&&!(ba.implement instanceof Array)){ba.implement=[ba.implement];
}if(!ba.hasOwnProperty(bu)&&!ba.type){ba.type=by;
}if(qx.core.Variant.isSet(bz,bA)){this.__H(name,ba);
}var bc=this.__J(name,ba.type,ba.extend,ba.statics,ba.construct,ba.destruct);
if(ba.extend){if(ba.properties){this.__L(bc,ba.properties,true);
}if(ba.members){this.__N(bc,ba.members,true,true,false);
}if(ba.events){this.__K(bc,ba.events,true);
}if(ba.include){for(var i=0,l=ba.include.length;i<l;i++){this.__Q(bc,ba.include[i],false);
}}}if(ba.settings){for(var bb in ba.settings){qx.core.Setting.define(bb,ba.settings[bb]);
}}if(ba.variants){for(var bb in ba.variants){qx.core.Variant.define(bb,ba.variants[bb].allowedValues,ba.variants[bb].defaultValue);
}}if(ba.implement){for(var i=0,l=ba.implement.length;i<l;i++){this.__P(bc,ba.implement[i]);
}}
if(qx.core.Variant.isSet(bz,bA)){this.__I(bc);
}if(ba.defer){ba.defer.self=bc;
ba.defer(bc,bc.prototype,{add:function(name,u){var v={};
v[name]=u;
qx.Class.__L(bc,v,true);
}});
}return bc;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bm,bn){if(qx.core.Variant.isSet(bz,bA)){if(!bn){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bm.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bn,bm);
}qx.Class.__Q(bm,bn,false);
},patch:function(b,c){if(qx.core.Variant.isSet(bz,bA)){if(!c){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+b.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(c,b);
}qx.Class.__Q(b,c,true);
},isSubClassOf:function(bJ,bK){if(!bJ){return false;
}
if(bJ==bK){return true;
}
if(bJ.prototype instanceof bK){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(p){var q=[];

while(p){if(p.$$properties){q.push.apply(q,qx.Bootstrap.getKeys(p.$$properties));
}p=p.superclass;
}return q;
},getByProperty:function(bi,name){while(bi){if(bi.$$properties&&bi.$$properties[name]){return bi;
}bi=bi.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(n,o){return n.$$includes&&n.$$includes.indexOf(o)!==-1;
},getByMixin:function(bp,bq){var br,i,l;

while(bp){if(bp.$$includes){br=bp.$$flatIncludes;

for(i=0,l=br.length;i<l;i++){if(br[i]===bq){return bp;
}}}bp=bp.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(T,U){return !!this.getByMixin(T,U);
},hasOwnInterface:function(bd,be){return bd.$$implements&&bd.$$implements.indexOf(be)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bL){var bM=[];

while(bL){if(bL.$$implements){bM.push.apply(bM,bL.$$flatImplements);
}bL=bL.superclass;
}return bM;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(w,x){var y=w.constructor;

if(this.hasInterface(y,x)){return true;
}
try{qx.Interface.assertObject(w,x);
return true;
}catch(G){}
try{qx.Interface.assert(y,x,false);
return true;
}catch(bf){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bx+this.classname+bw;
},$$registry:qx.Bootstrap.$$registry,__F:qx.core.Variant.select("qx.debug",{"on":{"type":"string","extend":"function","implement":"object","include":"object","construct":"function","statics":"object","properties":"object","members":"object","settings":"object","variants":"object","events":"object","defer":"function","destruct":"function"},"default":null}),__G:qx.core.Variant.select("qx.debug",{"on":{"type":"string","statics":"object","settings":"object","variants":"object","defer":"function"},"default":null}),__H:qx.core.Variant.select("qx.debug",{"on":function(name,bN){if(bN.type&&!(bN.type==="static"||bN.type==="abstract"||bN.type==="singleton")){throw new Error('Invalid type "'+bN.type+'" definition for class "'+name+'"!');
}if(bN.type&&bN.type!=="static"&&!bN.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var bQ=bN.type==="static"?this.__G:this.__F;

for(var bP in bN){if(!bQ[bP]){throw new Error('The configuration key "'+bP+'" in class "'+name+'" is not allowed!');
}
if(bN[bP]==null){throw new Error('Invalid key "'+bP+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof bN[bP]!==bQ[bP]){throw new Error('Invalid type of key "'+bP+'" in class "'+name+'"! The type of the key must be "'+bQ[bP]+'"!');
}}var bO=["statics","properties","members","settings","variants","events"];

for(var i=0,l=bO.length;i<l;i++){var bP=bO[i];

if(bN[bP]!==undefined&&(bN[bP].$$hash!==undefined||!qx.Bootstrap.isObject(bN[bP]))){throw new Error('Invalid key "'+bP+'" in class "'+name+'"! The value needs to be a map!');
}}if(bN.include){if(bN.include instanceof Array){for(var i=0,a=bN.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Mixin"){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(bN.implement){if(bN.implement instanceof Array){for(var i=0,a=bN.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Interface"){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(bN.include){try{qx.Mixin.checkCompatibility(bN.include);
}catch(bo){throw new Error('Error in include definition of class "'+name+'"! '+bo.message);
}}if(bN.settings){for(var bP in bN.settings){if(bP.substr(0,bP.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden setting "'+bP+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(bN.variants){for(var bP in bN.variants){if(bP.substr(0,bP.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden variant "'+bP+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__I:qx.core.Variant.select("qx.debug",{"on":function(bj){var bl=bj.superclass;

while(bl){if(bl.$$classtype!=="abstract"){break;
}var bk=bl.$$implements;

if(bk){for(var i=0;i<bk.length;i++){qx.Interface.assert(bj,bk[i],true);
}}bl=bl.superclass;
}},"default":function(){}}),__J:function(name,H,I,J,K,L){var Q;

if(!I&&qx.core.Variant.isSet("qx.aspects","off")){Q=J||{};
qx.Bootstrap.setDisplayNames(Q,name);
}else{Q={};

if(I){if(!K){K=this.__R();
}Q=this.__T(K,name,H);
qx.Bootstrap.setDisplayName(K,name,"constructor");
}if(J){qx.Bootstrap.setDisplayNames(J,name);
var R;

for(var i=0,a=qx.Bootstrap.getKeys(J),l=a.length;i<l;i++){R=a[i];
var N=J[R];

if(qx.core.Variant.isSet("qx.aspects","on")){if(N instanceof Function){N=qx.core.Aspect.wrap(name+"."+R,N,"static");
}Q[R]=N;
}else{Q[R]=N;
}}}}var P=qx.Bootstrap.createNamespace(name,Q,false);
Q.name=Q.classname=name;
Q.basename=P;
Q.$$type="Class";

if(H){Q.$$classtype=H;
}if(!Q.hasOwnProperty("toString")){Q.toString=this.genericToString;
}
if(I){var S=I.prototype;
var M=this.__S();
M.prototype=S;
var O=new M;
Q.prototype=O;
O.name=O.classname=name;
O.basename=P;
K.base=Q.superclass=I;
K.self=Q.constructor=O.constructor=Q;
if(L){if(qx.core.Variant.isSet("qx.aspects","on")){L=qx.core.Aspect.wrap(name,L,"destructor");
}Q.$$destructor=L;
qx.Bootstrap.setDisplayName(L,name,"destruct");
}}this.$$registry[name]=Q;
return Q;
},__K:function(ca,cb,cc){if(qx.core.Variant.isSet("qx.debug","on")){if(typeof cb!=="object"||cb instanceof Array){throw new Error(ca.classname+": the events must be defined as map!");
}
for(var cd in cb){if(typeof cb[cd]!=="string"){throw new Error(ca.classname+"/"+cd+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(ca.$$events&&cc!==true){for(var cd in cb){if(ca.$$events[cd]!==undefined&&ca.$$events[cd]!==cb[cd]){throw new Error(ca.classname+"/"+cd+": the event value/type cannot be changed from "+ca.$$events[cd]+" to "+cb[cd]);
}}}}
if(ca.$$events){for(var cd in cb){ca.$$events[cd]=cb[cd];
}}else{ca.$$events=cb;
}},__L:function(bT,bU,bV){var bX;

if(bV===undefined){bV=false;
}var bW=!!bT.$$propertiesAttached;

for(var name in bU){bX=bU[name];
if(qx.core.Variant.isSet("qx.debug","on")){this.__M(bT,name,bX,bV);
}bX.name=name;
if(!bX.refine){if(bT.$$properties===undefined){bT.$$properties={};
}bT.$$properties[name]=bX;
}if(bX.init!==undefined){bT.prototype["$$init_"+name]=bX.init;
}if(bX.event!==undefined){var event={};
event[bX.event]="qx.event.type.Data";
this.__K(bT,event,bV);
}if(bX.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bW){qx.core.Property.attachMethods(bT,name,bX);
}}},__M:qx.core.Variant.select("qx.debug",{"on":function(z,name,A,B){var D=this.hasProperty(z,name);

if(D){var C=this.getPropertyDefinition(z,name);

if(A.refine&&C.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+z.classname+"'.");
}}
if(!D&&A.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+z.classname+"'!");
}
if(D&&!B){throw new Error("Class "+z.classname+" already has a property: "+name+"!");
}
if(D&&B){if(!A.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+z.classname+', original class: '+this.getByProperty(z,name).classname+'.');
}
for(var E in A){if(E!=="init"&&E!=="refine"){throw new Error("Class "+z.classname+" could not refine property: "+name+"! Key: "+E+" could not be refined!");
}}}var F=A.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var E in A){if(F[E]===undefined){throw new Error('The configuration key "'+E+'" of property "'+name+'" in class "'+z.classname+'" is not allowed!');
}
if(A[E]===undefined){throw new Error('Invalid key "'+E+'" of property "'+name+'" in class "'+z.classname+'"! The value is undefined: '+A[E]);
}
if(F[E]!==null&&typeof A[E]!==F[E]){throw new Error('Invalid type of key "'+E+'" of property "'+name+'" in class "'+z.classname+'"! The type of the key must be "'+F[E]+'"!');
}}
if(A.transform!=null){if(!(typeof A.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+z.classname+'"! Needs to be a String.');
}}
if(A.check!=null){if(!qx.Bootstrap.isString(A.check)&&!qx.Bootstrap.isArray(A.check)&&!qx.Bootstrap.isFunction(A.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+z.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__N:function(d,e,f,g,h){var j=d.prototype;
var m,k;
qx.Bootstrap.setDisplayNames(e,d.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(e),l=a.length;i<l;i++){m=a[i];
k=e[m];

if(qx.core.Variant.isSet("qx.debug","on")){if(j[m]!==undefined&&m.charAt(0)=="_"&&m.charAt(1)=="_"){throw new Error('Overwriting private member "'+m+'" of Class "'+d.classname+'" is not allowed!');
}
if(f!==true&&j.hasOwnProperty(m)){throw new Error('Overwriting member "'+m+'" of Class "'+d.classname+'" is not allowed!');
}}if(g!==false&&k instanceof Function&&k.$$type==null){if(h==true){k=this.__O(k,j[m]);
}else{if(j[m]){k.base=j[m];
}k.self=d;
}
if(qx.core.Variant.isSet("qx.aspects","on")){k=qx.core.Aspect.wrap(d.classname+"."+m,k,"member");
}}j[m]=k;
}},__O:function(bg,bh){if(bh){return function(){var bS=bg.base;
bg.base=bh;
var bR=bg.apply(this,arguments);
bg.base=bS;
return bR;
};
}else{return bg;
}},__P:function(ce,cf){if(qx.core.Variant.isSet("qx.debug","on")){if(!ce||!cf){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(ce,cf)){throw new Error('Interface "'+cf.name+'" is already used by Class "'+ce.classname+'!');
}if(ce.$$classtype!=="abstract"){qx.Interface.assert(ce,cf,true);
}}var cg=qx.Interface.flatten([cf]);

if(ce.$$implements){ce.$$implements.push(cf);
ce.$$flatImplements.push.apply(ce.$$flatImplements,cg);
}else{ce.$$implements=[cf];
ce.$$flatImplements=cg;
}},__Q:function(bB,bC,bD){if(qx.core.Variant.isSet("qx.debug","on")){if(!bB||!bC){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bB,bC)){return;
}var bF=qx.Mixin.flatten([bC]);
var bE;

for(var i=0,l=bF.length;i<l;i++){bE=bF[i];
if(bE.$$events){this.__K(bB,bE.$$events,bD);
}if(bE.$$properties){this.__L(bB,bE.$$properties,bD);
}if(bE.$$members){this.__N(bB,bE.$$members,bD,bD,bD);
}}if(bB.$$includes){bB.$$includes.push(bC);
bB.$$flatIncludes.push.apply(bB.$$flatIncludes,bF);
}else{bB.$$includes=[bC];
bB.$$flatIncludes=bF;
}},__R:function(){function bY(){arguments.callee.base.apply(this,arguments);
}return bY;
},__S:function(){return function(){};
},__T:function(V,name,W){var Y=function(){var bI=arguments.callee.constructor;

if(qx.core.Variant.isSet("qx.debug","on")){if(!(this instanceof bI)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(W==="abstract"){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(W==="singleton"){if(!bI.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}if(!bI.$$propertiesAttached){qx.core.Property.attach(bI);
}var bH=bI.$$original.apply(this,arguments);
if(bI.$$includes){var bG=bI.$$flatIncludes;

for(var i=0,l=bG.length;i<l;i++){if(bG[i].$$constructor){bG[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bH;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var X=qx.core.Aspect.wrap(name,Y,"constructor");
Y.$$original=V;
Y.constructor=X;
Y=X;
}if(W==="singleton"){Y.getInstance=this.getInstance;
}Y.$$original=V;
V.wrapper=Y;
return Y;
}},defer:function(){if(qx.core.Variant.isSet(bv,bA)){for(var r in qx.Bootstrap.$$registry){var s=qx.Bootstrap.$$registry[r];

for(var t in s){if(s[t] instanceof Function){s[t]=qx.core.Aspect.wrap(r+bs+t,s[t],by);
}}}}}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(a,b,c){a.attachEvent(k+b,c);
},"default":function(y,z,A){y.addEventListener(z,A,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(B,C,D){try{B.detachEvent(k+C,D);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(p,q,r){p.removeEventListener(q,r,false);
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
}catch(t){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(s){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(m,n){if(document.createEventObject){var o=document.createEventObject();
return m.fireEvent(k+n,o);
}else{var o=document.createEvent(d);
o.initEvent(n,true,true);
return !m.dispatchEvent(o);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(E,F){return E.hasOwnProperty(k+F);
},"default":function(u,v){var w=k+v;
var x=(w in u);

if(!x){x=typeof u[w]==j;

if(!x&&u.setAttribute){u.setAttribute(w,g);
x=typeof u[w]==j;
u.removeAttribute(w);
}}return x;
}})}});
})();
(function(){var cc="qx.debug",cb="on",ca="|bubble",bY="|capture",bX="|",bW="': ",bV="'",bU="_",bT="Invalid Target.",bS="Invalid event type.",cA="Invalid event target.",cz=" from the target '",cy="Invalid callback function",cx="unload",cw="Failed to remove event listener for id '",cv="Invalid context for callback.",cu="Invalid capture flag.",ct="Failed to add event listener for type '",cs="UNKNOWN_",cr="capture",cj="qx.event.Manager",ck="Could not dispatch event '",ch="DOM_",ci="QX_",cf=" to the target '",cg="Failed to remove event listener for type '",cd="__bl",ce="Invalid capture falg.",cl="c",cm="Invalid id type.",co="' on target '",cn="WIN_",cq="__bk",cp="Invalid event object.";
qx.Class.define(cj,{extend:Object,construct:function(W,X){this.__bg=W;
this.__bh=qx.core.ObjectRegistry.toHashCode(W);
this.__bi=X;
if(W.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(W,cx,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(W,cx,arguments.callee);
self.dispose();
}));
}this.__bj={};
this.__bk={};
this.__bl={};
this.__bm={};
},statics:{__bn:0,getNextUniqueId:function(){return (this.__bn++).toString(36);
}},members:{__bi:null,__bj:null,__bl:null,__bo:null,__bk:null,__bm:null,__bg:null,__bh:null,getWindow:function(){return this.__bg;
},getWindowId:function(){return this.__bh;
},getHandler:function(h){var j=this.__bk[h.classname];

if(j){return j;
}return this.__bk[h.classname]=new h(this);
},getDispatcher:function(U){var V=this.__bl[U.classname];

if(V){return V;
}return this.__bl[U.classname]=new U(this,this.__bi);
},getListeners:function(bL,bM,bN){var bO=bL.$$hash||qx.core.ObjectRegistry.toHashCode(bL);
var bQ=this.__bj[bO];

if(!bQ){return null;
}var bR=bM+(bN?bY:ca);
var bP=bQ[bR];
return bP?bP.concat():null;
},serializeListeners:function(Y){var bg=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var bi=this.__bj[bg];
var be=[];

if(bi){var bc,bh,ba,bd,bf;

for(var bb in bi){bc=bb.indexOf(bX);
bh=bb.substring(0,bc);
ba=bb.charAt(bc+1)==cl;
bd=bi[bb];

for(var i=0,l=bd.length;i<l;i++){bf=bd[i];
be.push({self:bf.context,handler:bf.handler,type:bh,capture:ba});
}}}return be;
},toggleAttachedEvents:function(cI,cJ){var cO=cI.$$hash||qx.core.ObjectRegistry.toHashCode(cI);
var cQ=this.__bj[cO];

if(cQ){var cL,cP,cK,cM;

for(var cN in cQ){cL=cN.indexOf(bX);
cP=cN.substring(0,cL);
cK=cN.charCodeAt(cL+1)===99;
cM=cQ[cN];

if(cJ){this.__bp(cI,cP,cK);
}else{this.__bq(cI,cP,cK);
}}}},hasListener:function(cR,cS,cT){if(qx.core.Variant.isSet(cc,cb)){if(cR==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+cR);
}}var cU=cR.$$hash||qx.core.ObjectRegistry.toHashCode(cR);
var cW=this.__bj[cU];

if(!cW){return false;
}var cX=cS+(cT?bY:ca);
var cV=cW[cX];
return cV&&cV.length>0;
},importListeners:function(k,m){if(qx.core.Variant.isSet(cc,cb)){if(k==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+k);
}}var s=k.$$hash||qx.core.ObjectRegistry.toHashCode(k);
var t=this.__bj[s]={};
var p=qx.event.Manager;

for(var n in m){var q=m[n];
var r=q.type+(q.capture?bY:ca);
var o=t[r];

if(!o){o=t[r]=[];
this.__bp(k,q.type,q.capture);
}o.push({handler:q.listener,context:q.self,unique:q.unique||(p.__bn++).toString(36)});
}},addListener:function(bA,bB,bC,self,bD){if(qx.core.Variant.isSet(cc,cb)){var bH=ct+bB+bV+cf+bA.classname+bW;
qx.core.Assert.assertObject(bA,bH+bT);
qx.core.Assert.assertString(bB,bH+bS);
qx.core.Assert.assertFunction(bC,bH+cy);

if(bD!==undefined){qx.core.Assert.assertBoolean(bD,cu);
}}var bI=bA.$$hash||qx.core.ObjectRegistry.toHashCode(bA);
var bK=this.__bj[bI];

if(!bK){bK=this.__bj[bI]={};
}var bG=bB+(bD?bY:ca);
var bF=bK[bG];

if(!bF){bF=bK[bG]=[];
}if(bF.length===0){this.__bp(bA,bB,bD);
}var bJ=(qx.event.Manager.__bn++).toString(36);
var bE={handler:bC,context:self,unique:bJ};
bF.push(bE);
return bG+bX+bJ;
},findHandler:function(bn,bo){var by=false,br=false,bz=false;
var bx;

if(bn.nodeType===1){by=true;
bx=ch+bn.tagName.toLowerCase()+bU+bo;
}else if(bn==this.__bg){br=true;
bx=cn+bo;
}else if(bn.classname){bz=true;
bx=ci+bn.classname+bU+bo;
}else{bx=cs+bn+bU+bo;
}var bt=this.__bm;

if(bt[bx]){return bt[bx];
}var bw=this.__bi.getHandlers();
var bs=qx.event.IEventHandler;
var bu,bv,bq,bp;

for(var i=0,l=bw.length;i<l;i++){bu=bw[i];
bq=bu.SUPPORTED_TYPES;

if(bq&&!bq[bo]){continue;
}bp=bu.TARGET_CHECK;

if(bp){if(!by&&bp===bs.TARGET_DOMNODE){continue;
}else if(!br&&bp===bs.TARGET_WINDOW){continue;
}else if(!bz&&bp===bs.TARGET_OBJECT){continue;
}}bv=this.getHandler(bw[i]);

if(bu.IGNORE_CAN_HANDLE||bv.canHandleEvent(bn,bo)){bt[bx]=bv;
return bv;
}}return null;
},__bp:function(G,H,I){var J=this.findHandler(G,H);

if(J){J.registerEvent(G,H,I);
return;
}
if(qx.core.Variant.isSet(cc,cb)){qx.log.Logger.warn(this,"There is no event handler for the event '"+H+"' on target '"+G+"'!");
}},removeListener:function(K,L,M,self,N){if(qx.core.Variant.isSet(cc,cb)){var R=cg+L+bV+cz+K.classname+bW;
qx.core.Assert.assertObject(K,R+bT);
qx.core.Assert.assertString(L,R+bS);
qx.core.Assert.assertFunction(M,R+cy);

if(self!==undefined){qx.core.Assert.assertObject(self,cv);
}
if(N!==undefined){qx.core.Assert.assertBoolean(N,ce);
}}var S=K.$$hash||qx.core.ObjectRegistry.toHashCode(K);
var T=this.__bj[S];

if(!T){return false;
}var O=L+(N?bY:ca);
var P=T[O];

if(!P){return false;
}var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];

if(Q.handler===M&&Q.context===self){qx.lang.Array.removeAt(P,i);

if(P.length==0){this.__bq(K,L,N);
}return true;
}}return false;
},removeListenerById:function(u,v){if(qx.core.Variant.isSet(cc,cb)){var B=cw+v+bV+cz+u.classname+bW;
qx.core.Assert.assertObject(u,B+bT);
qx.core.Assert.assertString(v,B+cm);
}var z=v.split(bX);
var E=z[0];
var w=z[1].charCodeAt(0)==99;
var D=z[2];
var C=u.$$hash||qx.core.ObjectRegistry.toHashCode(u);
var F=this.__bj[C];

if(!F){return false;
}var A=E+(w?bY:ca);
var y=F[A];

if(!y){return false;
}var x;

for(var i=0,l=y.length;i<l;i++){x=y[i];

if(x.unique===D){qx.lang.Array.removeAt(y,i);

if(y.length==0){this.__bq(u,E,w);
}return true;
}}return false;
},removeAllListeners:function(cB){var cF=cB.$$hash||qx.core.ObjectRegistry.toHashCode(cB);
var cH=this.__bj[cF];

if(!cH){return false;
}var cD,cG,cC;

for(var cE in cH){if(cH[cE].length>0){cD=cE.split(bX);
cG=cD[0];
cC=cD[1]===cr;
this.__bq(cB,cG,cC);
}}delete this.__bj[cF];
return true;
},__bq:function(bj,bk,bl){var bm=this.findHandler(bj,bk);

if(bm){bm.unregisterEvent(bj,bk,bl);
return;
}
if(qx.core.Variant.isSet(cc,cb)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bk+"' on target '"+bj+"'!");
}},dispatchEvent:function(a,event){if(qx.core.Variant.isSet(cc,cb)){var f=ck+event+co+a.classname+bW;
qx.core.Assert.assertNotUndefined(a,f+cA);
qx.core.Assert.assertNotNull(a,f+cA);
qx.core.Assert.assertInstance(event,qx.event.type.Event,f+cp);
}var g=event.getType();

if(!event.getBubbles()&&!this.hasListener(a,g)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(a);
}var e=this.__bi.getDispatchers();
var d;
var c=false;

for(var i=0,l=e.length;i<l;i++){d=this.getDispatcher(e[i]);
if(d.canDispatchEvent(a,event,g)){d.dispatchEvent(a,event,g);
c=true;
break;
}}
if(!c){qx.log.Logger.error(this,"No dispatcher can handle event of type "+g+" on "+a);
return true;
}var b=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !b;
},dispose:function(){this.__bi.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,cq);
qx.util.DisposeUtil.disposeMap(this,cd);
this.__bj=this.__bg=this.__bo=null;
this.__bi=this.__bm=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.parentWindow;
},"default":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.defaultView;
}}),getDocumentElement:function(j){return this.getDocument(j).documentElement;
},getBodyElement:function(f){return this.getDocument(f).body;
},isNode:function(t){return !!(t&&t.nodeType!=null);
},isElement:function(n){return !!(n&&n.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(r){return !!(r&&r.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(k,l){if(!l||!k||!k.nodeName){return false;
}return l.toLowerCase()==qx.dom.Node.getName(k);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(c);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var bc="qx.debug",bb="on",ba="The second parameter must be an array.",Y="mshtml",X="The first parameter must be an array.",W="Parameter must be an array.",V="qx.client",U="[object Array]",T="qx.lang.Array",S="qx",Q="number",R="string";
qx.Class.define(T,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(L,M,N){if(L.constructor===M){return L;
}
if(qx.Class.hasInterface(L,qx.data.IListData)){var L=L.toArray();
}var O=new M;
if(qx.core.Variant.isSet(V,Y)){if(L.item){for(var i=N||0,l=L.length;i<l;i++){O.push(L[i]);
}return O;
}}if(Object.prototype.toString.call(L)===U&&N==null){O.push.apply(O,L);
}else{O.push.apply(O,Array.prototype.slice.call(L,N||0));
}return O;
},fromArguments:function(x,y){return Array.prototype.slice.call(x,y||0);
},fromCollection:function(k){if(qx.core.Variant.isSet(V,Y)){if(k.item){var m=[];

for(var i=0,l=k.length;i<l;i++){m[i]=k[i];
}return m;
}}return Array.prototype.slice.call(k,0);
},fromShortHand:function(B){var D=B.length;
var C=qx.lang.Array.clone(B);
switch(D){case 1:C[1]=C[2]=C[3]=C[0];
break;
case 2:C[2]=C[0];
case 3:C[3]=C[1];
}return C;
},clone:function(G){return G.concat();
},insertAt:function(n,o,i){n.splice(i,0,o);
return n;
},insertBefore:function(bg,bh,bi){var i=bg.indexOf(bi);

if(i==-1){bg.push(bh);
}else{bg.splice(i,0,bh);
}return bg;
},insertAfter:function(u,v,w){var i=u.indexOf(w);

if(i==-1||i==(u.length-1)){u.push(v);
}else{u.splice(i+1,0,v);
}return u;
},removeAt:function(p,i){return p.splice(i,1)[0];
},removeAll:function(P){P.length=0;
return this;
},append:function(z,A){if(qx.core.Variant.isSet(bc,bb)){qx.core.Assert&&qx.core.Assert.assertArray(z,X);
qx.core.Assert&&qx.core.Assert.assertArray(A,ba);
}Array.prototype.push.apply(z,A);
return z;
},exclude:function(q,r){if(qx.core.Variant.isSet(bc,bb)){qx.core.Assert&&qx.core.Assert.assertArray(q,X);
qx.core.Assert&&qx.core.Assert.assertArray(r,ba);
}
for(var i=0,t=r.length,s;i<t;i++){s=q.indexOf(r[i]);

if(s!=-1){q.splice(s,1);
}}return q;
},remove:function(f,g){var i=f.indexOf(g);

if(i!=-1){f.splice(i,1);
return g;
}},contains:function(bd,be){return bd.indexOf(be)!==-1;
},equals:function(a,b){var length=a.length;

if(length!==b.length){return false;
}
for(var i=0;i<length;i++){if(a[i]!==b[i]){return false;
}}return true;
},sum:function(E){var F=0;

for(var i=0,l=E.length;i<l;i++){F+=E[i];
}return F;
},max:function(c){if(qx.core.Variant.isSet(bc,bb)){qx.core.Assert&&qx.core.Assert.assertArray(c,W);
}var i,e=c.length,d=c[0];

for(i=1;i<e;i++){if(c[i]>d){d=c[i];
}}return d===undefined?null:d;
},min:function(I){if(qx.core.Variant.isSet(bc,bb)){qx.core.Assert&&qx.core.Assert.assertArray(I,W);
}var i,K=I.length,J=I[0];

for(i=1;i<K;i++){if(I[i]<J){J=I[i];
}}return J===undefined?null:J;
},unique:function(bj){var bt=[],bl={},bo={},bq={};
var bp,bk=0;
var bu=S+qx.lang.Date.now();
var bm=false,bs=false,bv=false;
for(var i=0,br=bj.length;i<br;i++){bp=bj[i];
if(bp===null){if(!bm){bm=true;
bt.push(bp);
}}else if(bp===undefined){}else if(bp===false){if(!bs){bs=true;
bt.push(bp);
}}else if(bp===true){if(!bv){bv=true;
bt.push(bp);
}}else if(typeof bp===R){if(!bl[bp]){bl[bp]=1;
bt.push(bp);
}}else if(typeof bp===Q){if(!bo[bp]){bo[bp]=1;
bt.push(bp);
}}else{bn=bp[bu];

if(bn==null){bn=bp[bu]=bk++;
}
if(!bq[bn]){bq[bn]=bp;
bt.push(bp);
}}}for(var bn in bq){try{delete bq[bn][bu];
}catch(H){try{bq[bn][bu]=null;
}catch(bf){throw new Error("Cannot clean-up map entry doneObjects["+bn+"]["+bu+"]");
}}}return bt;
}}});
})();
(function(){var o="()",n="qx.debug",m=".",l=".prototype.",k="on",j="Invalid parameter 'func'.",i='anonymous()',h="Trying to call a bound function with a disposed object as context: ",g=" :: ",f="qx.lang.Function",e=".constructor()";
qx.Class.define(f,{statics:{getCaller:function(A){return A.caller?A.caller.callee:A.callee.caller;
},getName:function(D){if(D.displayName){return D.displayName;
}
if(D.$$original||D.wrapper||D.classname){return D.classname+e;
}
if(D.$$mixin){for(var F in D.$$mixin.$$members){if(D.$$mixin.$$members[F]==D){return D.$$mixin.name+l+F+o;
}}for(var F in D.$$mixin){if(D.$$mixin[F]==D){return D.$$mixin.name+m+F+o;
}}}
if(D.self){var G=D.self.constructor;

if(G){for(var F in G.prototype){if(G.prototype[F]==D){return G.classname+l+F+o;
}}for(var F in G){if(G[F]==D){return G.classname+m+F+o;
}}}}var E=D.toString().match(/function\s*(\w*)\s*\(.*/);

if(E&&E.length>=1&&E[1]){return E[1]+o;
}return i;
},globalEval:function(J){if(window.execScript){return window.execScript(J);
}else{return eval.call(window,J);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(B,C){if(qx.core.Variant.isSet(n,k)){qx.core.Assert&&qx.core.Assert.assertFunction(B,j);
}if(!C){return B;
}if(!(C.self||C.args||C.delay!=null||C.periodical!=null||C.attempt)){return B;
}return function(event){if(qx.core.Variant.isSet(n,k)){if(C.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(C.self.isDisposed(),h+C.self.toString()+g+qx.lang.Function.getName(B));
}}var y=qx.lang.Array.fromArguments(arguments);
if(C.args){y=C.args.concat(y);
}
if(C.delay||C.periodical){var x=qx.event.GlobalError.observeMethod(function(){return B.apply(C.self||this,y);
});

if(C.delay){return window.setTimeout(x,C.delay);
}
if(C.periodical){return window.setInterval(x,C.periodical);
}}else if(C.attempt){var z=false;

try{z=B.apply(C.self||this,y);
}catch(I){}return z;
}else{return B.apply(C.self||this,y);
}};
},bind:function(v,self,w){return this.create(v,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(p,self,q){if(arguments.length<3){return function(event){return p.call(self||this,event||window.event);
};
}else{var r=qx.lang.Array.fromArguments(arguments,2);
return function(event){var H=[event||window.event];
H.push.apply(H,r);
p.apply(self||this,H);
};
}},attempt:function(c,self,d){return this.create(c,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(s,t,self,u){return this.create(s,{delay:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(K,L,self,M){return this.create(K,{periodical:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var o="qx.debug",n="on",m="Invalid event target.",l="Invalid event dispatcher!",k="': ",j="Invalid event handler.",i="' on target '",h="Could not fire event '",g="undefined",f="qx.event.Registration";
qx.Class.define(f,{statics:{__br:{},getManager:function(p){if(p==null){if(qx.core.Variant.isSet(o,n)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}p=window;
}else if(p.nodeType){p=qx.dom.Node.getWindow(p);
}else if(!qx.dom.Node.isWindow(p)){p=window;
}var r=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var q=this.__br[r];

if(!q){q=new qx.event.Manager(p,this);
this.__br[r]=q;
}return q;
},removeManager:function(U){var V=U.getWindowId();
delete this.__br[V];
},addListener:function(W,X,Y,self,ba){return this.getManager(W).addListener(W,X,Y,self,ba);
},removeListener:function(z,A,B,self,C){return this.getManager(z).removeListener(z,A,B,self,C);
},removeListenerById:function(x,y){return this.getManager(x).removeListenerById(x,y);
},removeAllListeners:function(J){return this.getManager(J).removeAllListeners(J);
},hasListener:function(c,d,e){return this.getManager(c).hasListener(c,d,e);
},serializeListeners:function(Q){return this.getManager(Q).serializeListeners(Q);
},createEvent:function(t,u,v){if(qx.core.Variant.isSet(o,n)){if(arguments.length>1&&u===undefined){throw new Error("Create event of type "+t+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(u==null){u=qx.event.type.Event;
}var w=qx.event.Pool.getInstance().getObject(u);

if(!w){return;
}v?w.init.apply(w,v):w.init();
if(t){w.setType(t);
}return w;
},dispatchEvent:function(s,event){return this.getManager(s).dispatchEvent(s,event);
},fireEvent:function(D,E,F,G){if(qx.core.Variant.isSet(o,n)){if(arguments.length>2&&F===undefined&&G!==undefined){throw new Error("Create event of type "+E+" with undefined class. Please use null to explicit fallback to default event type!");
}var H=h+E+i+(D?D.classname:g)+k;
qx.core.Assert.assertNotUndefined(D,H+m);
qx.core.Assert.assertNotNull(D,H+m);
}var I=this.createEvent(E,F||null,G);
return this.getManager(D).dispatchEvent(D,I);
},fireNonBubblingEvent:function(K,L,M,N){if(qx.core.Variant.isSet(o,n)){if(arguments.length>2&&M===undefined&&N!==undefined){throw new Error("Create event of type "+L+" with undefined class. Please use null to explicit fallback to default event type!");
}}var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bs:[],addHandler:function(T){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertInterface(T,qx.event.IEventHandler,j);
}this.__bs.push(T);
this.__bs.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bs;
},__bt:[],addDispatcher:function(R,S){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertInterface(R,qx.event.IEventDispatcher,l);
}this.__bt.push(R);
this.__bt.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bt;
}}});
})();
(function(){var f="on",e="qx.debug",d="$$hash",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(r){var u=this.__U;

if(!u){return;
}var t=r.$$hash;

if(t==null){var s=this.__W;

if(s.length>0){t=s.pop();
}else{t=(this.__V++).toString(36);
}r.$$hash=t;
}
if(qx.core.Variant.isSet(e,f)){if(!r.dispose){throw new Error("Invalid object: "+r);
}}u[t]=r;
},unregister:function(w){var x=w.$$hash;

if(x==null){return;
}var y=this.__U;

if(y&&y[x]){delete y[x];
this.__W.push(x);
}try{delete w.$$hash;
}catch(m){if(w.removeAttribute){w.removeAttribute(d);
}}},toHashCode:function(z){if(qx.core.Variant.isSet(e,f)){if(z==null){throw new Error("Invalid object: "+z);
}}var B=z.$$hash;

if(B!=null){return B;
}var A=this.__W;

if(A.length>0){B=A.pop();
}else{B=(this.__V++).toString(36);
}return z.$$hash=B;
},clearHashCode:function(p){if(qx.core.Variant.isSet(e,f)){if(p==null){throw new Error("Invalid object: "+p);
}}var q=p.$$hash;

if(q!=null){this.__W.push(q);
try{delete p.$$hash;
}catch(o){if(p.removeAttribute){p.removeAttribute(d);
}}}},fromHashCode:function(v){return this.__U[v]||null;
},shutdown:function(){this.inShutDown=true;
var h=this.__U;
var k=[];

for(var j in h){k.push(j);
}k.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var g,i=0,l=k.length;

while(true){try{for(;i<l;i++){j=k[i];
g=h[j];

if(g&&g.dispose){g.dispose();
}}}catch(n){qx.Bootstrap.error(this,"Could not dispose object "+g.toString()+": "+n);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==b||a instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==d||h instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var cb="",ca="!",bY="'!",bX="'",bW="Expected '",bV="' (rgb(",bU=",",bT=")), but found value '",bS="Event (",bR="Expected value to be the CSS color '",dh="' but found ",dg="The value '",df="qx.core.Object",de="Expected value to be an array but found ",dd=") was fired.",dc="Expected value to be an integer >= 0 but found ",db="' to be not equal with '",da="' to '",cY="qx.ui.core.Widget",cX="Called assertTrue with '",ci="Expected value to be a map but found ",cj="The function did not raise an exception!",cg="Expected value to be undefined but found ",ch="Expected value to be a DOM element but found  '",ce="Expected value to be a regular expression but found ",cf="' to implement the interface '",cc="Expected value to be null but found ",cd="Invalid argument 'type'",cq="Called assert with 'false'",cr="Assertion error! ",cD="Expected value to be a string but found ",cz="null",cL="' but found '",cG="' must must be a key of the map '",cT="The String '",cQ="Expected value not to be undefined but found ",cv="qx.util.ColorUtil",cW=": ",cV="The raised exception does not have the expected type! ",cU=") not fired.",cu="qx.core.Assert",cx="Expected value to be typeof object but found ",cy="' (identical) but found '",cB="' must have any of the values defined in the array '",cE="Expected value to be a number but found ",cH="Called assertFalse with '",cN="]",cS="Expected value to be a qooxdoo object but found ",ck="' arguments.",cl="Expected value not to be null but found ",cw="Array[",cK="' does not match the regular expression '",cJ="' to be not identical with '",cI="' arguments but found '",cP="', which cannot be converted to a CSS color!",cO="Expected object '",cF="qx.core.AssertionError",cM="Expected value to be a boolean but found ",bO="))!",cR="Expected value to be a qooxdoo widget but found ",cm="Expected value '%1' to be in the range '%2'..'%3'!",cn="Expected value to be typeof '",cA="Expected value to be typeof function but found ",bP="Expected value to be an integer but found ",bQ="Called fail().",ct="The parameter 're' must be a string or a regular expression.",co="Expected value to be a number >= 0 but found ",cp="Expected value to be instanceof '",cs="Wrong number of arguments given. Expected '",cC="object";
qx.Class.define(cu,{statics:{__oI:true,__oJ:function(dC,dD){var dE=cb;

for(var i=1,l=arguments.length;i<l;i++){dE=dE+this.__oK(arguments[i]);
}var dG=cr+dC+cW+dE;

if(this.__oI){qx.Bootstrap.error(dG);
}
if(qx.Class.isDefined(cF)){var dF=new qx.core.AssertionError(dC,dE);

if(this.__oI){qx.Bootstrap.error("Stack trace: \n"+dF.getStackTrace());
}throw dF;
}else{throw new Error(dG);
}},__oK:function(bE){var bF;

if(bE===null){bF=cz;
}else if(qx.lang.Type.isArray(bE)&&bE.length>10){bF=cw+bE.length+cN;
}else if((bE instanceof Object)&&(bE.toString==null)){bF=qx.lang.Json.stringify(bE,null,2);
}else{try{bF=bE.toString();
}catch(e){bF=cb;
}}return bF;
},assert:function(Q,R){Q==true||this.__oJ(R||cb,cq);
},fail:function(bD){this.__oJ(bD||cb,bQ);
},assertTrue:function(bv,bw){(bv===true)||this.__oJ(bw||cb,cX,bv,bX);
},assertFalse:function(x,y){(x===false)||this.__oJ(y||cb,cH,x,bX);
},assertEquals:function(bx,by,bz){bx==by||this.__oJ(bz||cb,bW,bx,cL,by,bY);
},assertNotEquals:function(dL,dM,dN){dL!=dM||this.__oJ(dN||cb,bW,dL,db,dM,bY);
},assertIdentical:function(n,o,p){n===o||this.__oJ(p||cb,bW,n,cy,o,bY);
},assertNotIdentical:function(ds,dt,du){ds!==dt||this.__oJ(du||cb,bW,ds,cJ,dt,bY);
},assertNotUndefined:function(U,V){U!==undefined||this.__oJ(V||cb,cQ,U,ca);
},assertUndefined:function(br,bs){br===undefined||this.__oJ(bs||cb,cg,br,ca);
},assertNotNull:function(dV,dW){dV!==null||this.__oJ(dW||cb,cl,dV,ca);
},assertNull:function(dJ,dK){dJ===null||this.__oJ(dK||cb,cc,dJ,ca);
},assertJsonEquals:function(I,J,K){this.assertEquals(qx.lang.Json.stringify(I),qx.lang.Json.stringify(J),K);
},assertMatch:function(bG,bH,bI){this.assertString(bG);
this.assert(qx.lang.Type.isRegExp(bH)||qx.lang.Type.isString(bH),ct);
bG.search(bH)>=0||this.__oJ(bI||cb,cT,bG,cK,bH.toString(),bY);
},assertArgumentsCount:function(W,X,Y,ba){var bb=W.length;
(bb>=X&&bb<=Y)||this.__oJ(ba||cb,cs,X,da,Y,cI,arguments.length,ck);
},assertEventFired:function(dv,event,dw,dx,dy){var dA=false;
var dz=function(e){if(dx){dx.call(dv,e);
}dA=true;
};
var dB=dv.addListener(event,dz,dv);
dw.call();
dA===true||this.__oJ(dy||cb,bS,event,cU);
dv.removeListenerById(dB);
},assertEventNotFired:function(f,event,g,h){var k=false;
var j=function(e){k=true;
};
var m=f.addListener(event,j,f);
g.call();
k===false||this.__oJ(h||cb,bS,event,dd);
f.removeListenerById(m);
},assertException:function(L,M,N,O){var M=M||Error;
var P;

try{this.__oI=false;
L();
}catch(d){P=d;
}finally{this.__oI=true;
}
if(P==null){this.__oJ(O||cb,cj);
}P instanceof M||this.__oJ(O||cb,cV,M);

if(N){this.assertMatch(P.toString(),N,O);
}},assertInArray:function(bc,bd,be){bd.indexOf(bc)!==-1||this.__oJ(be||cb,dg,bc,cB,bd,bX);
},assertArrayEquals:function(bL,bM,bN){this.assertArray(bL,bN);
this.assertArray(bM,bN);
this.assertEquals(bL.length,bM.length,bN);

for(var i=0;i<bL.length;i++){this.assertIdentical(bL[i],bM[i],bN);
}},assertKeyInMap:function(a,b,c){b[a]!==undefined||this.__oJ(c||cb,dg,a,cG,b,bX);
},assertFunction:function(F,G){qx.lang.Type.isFunction(F)||this.__oJ(G||cb,cA,F,ca);
},assertString:function(dn,dp){qx.lang.Type.isString(dn)||this.__oJ(dp||cb,cD,dn,ca);
},assertBoolean:function(dq,dr){qx.lang.Type.isBoolean(dq)||this.__oJ(dr||cb,cM,dq,ca);
},assertNumber:function(dH,dI){(qx.lang.Type.isNumber(dH)&&isFinite(dH))||this.__oJ(dI||cb,cE,dH,ca);
},assertPositiveNumber:function(D,E){(qx.lang.Type.isNumber(D)&&isFinite(D)&&D>=0)||this.__oJ(E||cb,co,D,ca);
},assertInteger:function(z,A){(qx.lang.Type.isNumber(z)&&isFinite(z)&&z%1===0)||this.__oJ(A||cb,bP,z,ca);
},assertPositiveInteger:function(bo,bp){var bq=(qx.lang.Type.isNumber(bo)&&isFinite(bo)&&bo%1===0&&bo>=0);
bq||this.__oJ(bp||cb,dc,bo,ca);
},assertInRange:function(dO,dP,dQ,dR){(dO>=dP&&dO<=dQ)||this.__oJ(dR||cb,qx.lang.String.format(cm,[dO,dP,dQ]));
},assertObject:function(dS,dT){var dU=dS!==null&&(qx.lang.Type.isObject(dS)||typeof dS===cC);
dU||this.__oJ(dT||cb,cx,(dS),ca);
},assertArray:function(bm,bn){qx.lang.Type.isArray(bm)||this.__oJ(bn||cb,de,bm,ca);
},assertMap:function(bJ,bK){qx.lang.Type.isObject(bJ)||this.__oJ(bK||cb,ci,bJ,ca);
},assertRegExp:function(bt,bu){qx.lang.Type.isRegExp(bt)||this.__oJ(bu||cb,ce,bt,ca);
},assertType:function(bA,bB,bC){this.assertString(bB,cd);
typeof (bA)===bB||this.__oJ(bC||cb,cn,bB,dh,bA,ca);
},assertInstance:function(t,u,v){var w=u.classname||u+cb;
t instanceof u||this.__oJ(v||cb,cp,w,dh,t,ca);
},assertInterface:function(q,r,s){qx.Class.implementsInterface(q,r)||this.__oJ(s||cb,cO,q,cf,r,bY);
},assertCssColor:function(bf,bg,bh){var bi=qx.Class.getByName(cv);

if(!bi){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bk=bi.stringToRgb(bf);

try{var bj=bi.stringToRgb(bg);
}catch(H){this.__oJ(bh||cb,bR,bf,bV,bk.join(bU),bT,bg,cP);
}var bl=bk[0]==bj[0]&&bk[1]==bj[1]&&bk[2]==bj[2];
bl||this.__oJ(bh||cb,bR,bk,bV,bk.join(bU),bT,bg,bV,bj.join(bU),bO);
},assertElement:function(S,T){!!(S&&S.nodeType===1)||this.__oJ(T||cb,ch,S,bY);
},assertQxObject:function(di,dj){this.__oL(di,df)||this.__oJ(dj||cb,cS,di,ca);
},assertQxWidget:function(B,C){this.__oL(B,cY)||this.__oJ(C||cb,cR,B,ca);
},__oL:function(dk,dl){if(!dk){return false;
}var dm=dk.constructor;

while(dm){if(dm.classname===dl){return true;
}dm=dm.superclass;
}return false;
}}});
})();
(function(){var bL="qx.core.MAssert";
qx.Mixin.define(bL,{members:{assert:function(bV,bW){qx.core.Assert.assert(bV,bW);
},fail:function(K){qx.core.Assert.fail(K);
},assertTrue:function(L,M){qx.core.Assert.assertTrue(L,M);
},assertFalse:function(R,S){qx.core.Assert.assertFalse(R,S);
},assertEquals:function(Y,ba,bb){qx.core.Assert.assertEquals(Y,ba,bb);
},assertNotEquals:function(bn,bo,bp){qx.core.Assert.assertNotEquals(bn,bo,bp);
},assertIdentical:function(bD,bE,bF){qx.core.Assert.assertIdentical(bD,bE,bF);
},assertNotIdentical:function(F,G,H){qx.core.Assert.assertNotIdentical(F,G,H);
},assertNotUndefined:function(a,b){qx.core.Assert.assertNotUndefined(a,b);
},assertUndefined:function(P,Q){qx.core.Assert.assertUndefined(P,Q);
},assertNotNull:function(bJ,bK){qx.core.Assert.assertNotNull(bJ,bK);
},assertNull:function(p,q){qx.core.Assert.assertNull(p,q);
},assertJsonEquals:function(j,k,l){qx.core.Assert.assertJsonEquals(j,k,l);
},assertMatch:function(bG,bH,bI){qx.core.Assert.assertMatch(bG,bH,bI);
},assertArgumentsCount:function(B,C,D,E){qx.core.Assert.assertArgumentsCount(B,C,D,E);
},assertEventFired:function(bw,event,bx,by,bz){qx.core.Assert.assertEventFired(bw,event,bx,by,bz);
},assertEventNotFired:function(w,event,x,y){qx.core.Assert.assertEventNotFired(w,event,x,y);
},assertException:function(bq,br,bs,bt){qx.core.Assert.assertException(bq,br,bs,bt);
},assertInArray:function(t,u,v){qx.core.Assert.assertInArray(t,u,v);
},assertArrayEquals:function(bO,bP,bQ){qx.core.Assert.assertArrayEquals(bO,bP,bQ);
},assertKeyInMap:function(e,f,g){qx.core.Assert.assertKeyInMap(e,f,g);
},assertFunction:function(bR,bS){qx.core.Assert.assertFunction(bR,bS);
},assertString:function(z,A){qx.core.Assert.assertString(z,A);
},assertBoolean:function(bl,bm){qx.core.Assert.assertBoolean(bl,bm);
},assertNumber:function(bX,bY){qx.core.Assert.assertNumber(bX,bY);
},assertPositiveNumber:function(N,O){qx.core.Assert.assertPositiveNumber(N,O);
},assertInteger:function(h,i){qx.core.Assert.assertInteger(h,i);
},assertPositiveInteger:function(I,J){qx.core.Assert.assertPositiveInteger(I,J);
},assertInRange:function(be,bf,bg,bh){qx.core.Assert.assertInRange(be,bf,bg,bh);
},assertObject:function(c,d){qx.core.Assert.assertObject(c,d);
},assertArray:function(bu,bv){qx.core.Assert.assertArray(bu,bv);
},assertMap:function(bM,bN){qx.core.Assert.assertMap(bM,bN);
},assertRegExp:function(r,s){qx.core.Assert.assertRegExp(r,s);
},assertType:function(bi,bj,bk){qx.core.Assert.assertType(bi,bj,bk);
},assertInstance:function(m,n,o){qx.core.Assert.assertInstance(m,n,o);
},assertInterface:function(T,U,V){qx.core.Assert.assertInterface(T,U,V);
},assertCssColor:function(bA,bB,bC){qx.core.Assert.assertCssColor(bA,bB,bC);
},assertElement:function(W,X){qx.core.Assert.assertElement(W,X);
},assertQxObject:function(bc,bd){qx.core.Assert.assertQxObject(bc,bd);
},assertQxWidget:function(bT,bU){qx.core.Assert.assertQxWidget(bT,bU);
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
}catch(o){var w=this.getStackTraceFromError(o);
qx.lang.Array.removeAt(w,0);
var u=this.getStackTraceFromCaller(arguments);
var s=u.length>w.length?u:w;

for(var i=0;i<Math.min(u.length,w.length);i++){var t=u[i];

if(t.indexOf(h)>=0){continue;
}var A=t.split(k);

if(A.length!=2){continue;
}var y=A[0];
var r=A[1];
var q=w[i];
var B=q.split(k);
var x=B[0];
var p=B[1];

if(qx.Class.getByName(x)){var v=x;
}else{v=y;
}var z=v+k;

if(r){z+=r+k;
}z+=p;
s[i]=z;
}return s;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var l;

try{l.bar();
}catch(bc){var m=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(m,0);
return m;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(n){return [];
},"default":function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(a){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(g);
break;
}I[K]=L;
}return M;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__bu(X);
W.push(Y+k+ba);
}return W;
},"webkit":function(G){if(G.sourceURL&&G.line){return [this.__bu(G.sourceURL)+k+G.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(d);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__bu(O[2]);
P.push(S+k+T);
}}return P;
},"default":function(){return [];
}}),__bu:function(C){var F=c;
var D=C.indexOf(F);
var E=(D==-1)?C:C.substring(D+F.length).replace(/\//g,b).replace(/\.js$/,e);
return E;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__bv=[];
this.setMaxMessages(i||50);
},members:{__bw:0,__bv:null,__bx:50,setMaxMessages:function(b){this.__bx=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bx;
},process:function(g){var h=this.getMaxMessages();

if(this.__bv.length<h){this.__bv.push(g);
}else{this.__bv[this.__bw++]=g;

if(this.__bw>=h){this.__bw=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bv.length){c=this.__bv.length;
}
if(this.__bv.length==this.getMaxMessages()){var e=this.__bw-1;
}else{e=this.__bv.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bv.length;
}var f;

if(d<=e){f=this.__bv.slice(d,e+1);
}else{f=this.__bv.slice(d,this.__bv.length).concat(this.__bv.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bv=[];
this.__bw=0;
}}});
})();
(function(){var bd="qx.debug",bc="unknown",bb="on",ba="node",Y="error",X="...(+",W="array",V=")",U="info",T="instance",bA="string",bz="null",by="class",bx="number",bw="stringify",bv="]",bu="function",bt="boolean",bs="debug",br="map",bk="undefined",bl="qx.log.Logger",bi=")}",bj="#",bg="warn",bh="document",be="{...(",bf="[",bm="text[",bn="[...(",bp="\n",bo=")]",bq="object";
qx.Class.define(bl,{statics:{__by:bs,setLevel:function(e){this.__by=e;
},getLevel:function(){return this.__by;
},setTreshold:function(z){this.__bB.setMaxMessages(z);
},getTreshold:function(){return this.__bB.getMaxMessages();
},__bz:{},__bA:0,register:function(C){if(C.$$id){return;
}var D=this.__bA++;
this.__bz[D]=C;
C.$$id=D;
var E=this.__bB.getAllLogEvents();

for(var i=0,l=E.length;i<l;i++){C.process(E[i]);
}},unregister:function(bL){var bM=bL.$$id;

if(bM==null){return;
}delete this.__bz[bM];
delete bL.$$id;
},debug:function(bD,bE){qx.log.Logger.__bD(bs,arguments);
},info:function(c,d){qx.log.Logger.__bD(U,arguments);
},warn:function(o,p){qx.log.Logger.__bD(bg,arguments);
},error:function(bB,bC){qx.log.Logger.__bD(Y,arguments);
},trace:function(j){qx.log.Logger.__bD(U,[j,qx.dev.StackTrace.getStackTrace().join(bp)]);
},deprecatedMethodWarning:function(f,g){if(qx.core.Variant.isSet(bd,bb)){var h=qx.lang.Function.getName(f);
this.warn("The method '"+h+"' is deprecated: "+(g||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(k,m){if(qx.core.Variant.isSet(bd,bb)){var n=k.classname||bc;
this.warn("The class '"+n+"' is deprecated: "+(m||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bI,event,bJ){if(qx.core.Variant.isSet(bd,bb)){var bK=bI.self?bI.self.classname:bc;
this.warn("The event '"+(event||"unknown")+"' from class '"+bK+"' is deprecated: "+(bJ||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bF,bG){if(qx.core.Variant.isSet(bd,bb)){var bH=bF?bF.name:bc;
this.warn("The mixin '"+bH+"' is deprecated: "+(bG||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(F,G,H){if(qx.core.Variant.isSet(bd,bb)){if(F.__defineGetter__){var self=this;
var I=F[G];
F.__defineGetter__(G,function(){self.warn("The constant '"+G+"' is deprecated: "+(H||"Please consult the API documentation for alternatives."));
self.trace();
return I;
});
}}},clear:function(){this.__bB.clearHistory();
},__bB:new qx.log.appender.RingBuffer(50),__bC:{debug:0,info:1,warn:2,error:3},__bD:function(J,K){var P=this.__bC;

if(P[J]<P[this.__by]){return;
}var M=K.length<2?null:K[0];
var O=M?1:0;
var L=[];

for(var i=O,l=K.length;i<l;i++){L.push(this.__bF(K[i],true));
}var Q=new Date;
var R={time:Q,offset:Q-qx.Bootstrap.LOADSTART,level:J,items:L,win:window};
if(M){if(M instanceof qx.core.Object){R.object=M.$$hash;
}else if(M.$$type){R.clazz=M;
}}this.__bB.process(R);
var S=this.__bz;

for(var N in S){S[N].process(R);
}},__bE:function(a){if(a===undefined){return bk;
}else if(a===null){return bz;
}
if(a.$$type){return by;
}var b=typeof a;

if(b===bu||b==bA||b===bx||b===bt){return b;
}else if(b===bq){if(a.nodeType){return ba;
}else if(a.classname){return T;
}else if(a instanceof Array){return W;
}else if(a instanceof Error){return Y;
}else{return br;
}}
if(a.toString){return bw;
}return bc;
},__bF:function(q,r){var y=this.__bE(q);
var u=bc;
var t=[];

switch(y){case bz:case bk:u=y;
break;
case bA:case bx:case bt:u=q;
break;
case ba:if(q.nodeType===9){u=bh;
}else if(q.nodeType===3){u=bm+q.nodeValue+bv;
}else if(q.nodeType===1){u=q.nodeName.toLowerCase();

if(q.id){u+=bj+q.id;
}}else{u=ba;
}break;
case bu:u=qx.lang.Function.getName(q)||y;
break;
case T:u=q.basename+bf+q.$$hash+bv;
break;
case by:case bw:u=q.toString();
break;
case Y:t=qx.dev.StackTrace.getStackTraceFromError(q);
u=q.toString();
break;
case W:if(r){u=[];

for(var i=0,l=q.length;i<l;i++){if(u.length>20){u.push(X+(l-i)+V);
break;
}u.push(this.__bF(q[i],false));
}}else{u=bn+q.length+bo;
}break;
case br:if(r){var s;
var x=[];

for(var w in q){x.push(w);
}x.sort();
u=[];

for(var i=0,l=x.length;i<l;i++){if(u.length>20){u.push(X+(l-i)+V);
break;
}w=x[i];
s=this.__bF(q[w],false);
s.key=w;
u.push(s);
}}else{var v=0;

for(var w in q){v++;
}u=be+v+bi;
}break;
}return {type:y,text:u,trace:t};
}},defer:function(A){var B=qx.Bootstrap.$$logs;

for(var i=0;i<B.length;i++){this.__bD(B[i][0],B[i][1]);
}qx.Bootstrap.debug=A.debug;
qx.Bootstrap.info=A.info;
qx.Bootstrap.warn=A.warn;
qx.Bootstrap.error=A.error;
qx.Bootstrap.trace=A.trace;
}});
})();
(function(){var bl="qx.debug",bk="on",bj="set",bi="qx.disposerDebugLevel",bh="get",bg="reset",bf="qx.core.Object",be="]",bd="[",bc="$$user_",ba="object",bb="Object";
qx.Class.define(bf,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bb},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bd+this.$$hash+be;
},base:function(d,f){if(qx.core.Variant.isSet(bl,bk)){if(!qx.Bootstrap.isFunction(d.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+d.callee.displayName);
}}
if(arguments.length===1){return d.callee.base.call(this);
}else{return d.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(L){return L.callee.self;
},clone:function(){var s=this.constructor;
var r=new s;
var u=qx.Class.getProperties(s);
var t=qx.core.Property.$$store.user;
var v=qx.core.Property.$$method.set;
var name;
for(var i=0,l=u.length;i<l;i++){name=u[i];

if(this.hasOwnProperty(t[name])){r[v[name]](this[t[name]]);
}}return r;
},set:function(g,h){var k=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(g)){if(!this[k[g]]){if(this[bj+qx.Bootstrap.firstUp(g)]!=undefined){this[bj+qx.Bootstrap.firstUp(g)](h);
return;
}
if(qx.core.Variant.isSet(bl,bk)){qx.Bootstrap.error("No such property: "+g);
return this;
}}return this[k[g]](h);
}else{for(var j in g){if(!this[k[j]]){if(this[bj+qx.Bootstrap.firstUp(j)]!=undefined){this[bj+qx.Bootstrap.firstUp(j)](g[j]);
continue;
}
if(qx.core.Variant.isSet(bl,bk)){qx.Bootstrap.error("No such property: "+j);
return this;
}}this[k[j]](g[j]);
}return this;
}},get:function(p){var q=qx.core.Property.$$method.get;

if(!this[q[p]]){if(this[bh+qx.Bootstrap.firstUp(p)]!=undefined){return this[bh+qx.Bootstrap.firstUp(p)]();
}
if(qx.core.Variant.isSet(bl,bk)){qx.Bootstrap.error("No such property: "+p);
return this;
}}return this[q[p]]();
},reset:function(bo){var bp=qx.core.Property.$$method.reset;

if(!this[bp[bo]]){if(this[bg+qx.Bootstrap.firstUp(bo)]!=undefined){this[bg+qx.Bootstrap.firstUp(bo)]();
return;
}
if(qx.core.Variant.isSet(bl,bk)){qx.Bootstrap.error("No such property: "+bo);
return this;
}}this[bp[bo]]();
},__bG:qx.event.Registration,addListener:function(I,J,self,K){if(!this.$$disposed){return this.__bG.addListener(this,I,J,self,K);
}return null;
},addListenerOnce:function(O,P,self,Q){var R=function(e){P.call(self||this,e);
this.removeListener(O,R,this,Q);
};
return this.addListener(O,R,this,Q);
},removeListener:function(m,n,self,o){if(!this.$$disposed){return this.__bG.removeListener(this,m,n,self,o);
}return false;
},removeListenerById:function(bD){if(!this.$$disposed){return this.__bG.removeListenerById(this,bD);
}return false;
},hasListener:function(T,U){return this.__bG.hasListener(this,T,U);
},dispatchEvent:function(bm){if(!this.$$disposed){return this.__bG.dispatchEvent(this,bm);
}return true;
},fireEvent:function(D,E,F){if(!this.$$disposed){return this.__bG.fireEvent(this,D,E,F);
}return true;
},fireNonBubblingEvent:function(a,b,c){if(!this.$$disposed){return this.__bG.fireNonBubblingEvent(this,a,b,c);
}return true;
},fireDataEvent:function(bq,br,bs,bt){if(!this.$$disposed){if(bs===undefined){bs=null;
}return this.__bG.fireNonBubblingEvent(this,bq,qx.event.type.Data,[br,bs,!!bt]);
}return true;
},__bH:null,setUserData:function(X,Y){if(!this.__bH){this.__bH={};
}this.__bH[X]=Y;
},getUserData:function(B){if(!this.__bH){return null;
}var C=this.__bH[B];
return C===undefined?null:C;
},__bI:qx.log.Logger,debug:function(S){this.__bI.debug(this,S);
},info:function(H){this.__bI.info(this,H);
},warn:function(M){this.__bI.warn(this,M);
},error:function(bu){this.__bI.error(this,bu);
},trace:function(){this.__bI.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bl,bk)){if(qx.core.Setting.get(bi)>1){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var y=this.constructor;
var w;

while(y.superclass){if(y.$$destructor){y.$$destructor.call(this);
}if(y.$$includes){w=y.$$flatIncludes;

for(var i=0,l=w.length;i<l;i++){if(w[i].$$destructor){w[i].$$destructor.call(this);
}}}y=y.superclass;
}var A=qx.Class.getProperties(this.constructor);

for(var i=0,l=A.length;i<l;i++){delete this[bc+A[i]];
}if(qx.core.Variant.isSet(bl,bk)){if(qx.core.Setting.get(bi)>0){var z,x;

for(z in this){x=this[z];
if(x!==null&&typeof x===ba&&!(qx.Bootstrap.isString(x))){if(this.constructor.prototype[z]!=null){continue;
}qx.Bootstrap.warn(this,"Missing destruct definition for '"+z+"' in "+this.classname+"["+this.toHashCode()+"]: "+x);
delete this[z];
}}}}},_disposeFields:function(G){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bn){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(V){qx.util.DisposeUtil.disposeArray(this,V);
},_disposeMap:function(W){qx.util.DisposeUtil.disposeMap(this,W);
}},settings:{"qx.disposerDebugLevel":0},defer:function(N){if(qx.core.Variant.isSet(bl,bk)){qx.Class.include(N,qx.core.MAssert);
}},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bH=null;
var bx=this.constructor;
var bB;
var bC=qx.core.Property.$$store;
var bz=bC.user;
var bA=bC.theme;
var bv=bC.inherit;
var by=bC.useinit;
var bw=bC.init;

while(bx){bB=bx.$$properties;

if(bB){for(var name in bB){if(bB[name].dispose){this[bz[name]]=this[bA[name]]=this[bv[name]]=this[by[name]]=this[bw[name]]=undefined;
}}}bx=bx.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(k,l){this.__cS=k||null;
this.__cT=l||window;

if(qx.core.Setting.get(f)===e){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__cU,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__cU:function(a,b,c){if(this.__cS){this.handleError(new qx.core.WindowError(a,b,c));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__cS){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(h){self.handleError(new qx.core.GlobalError(h,arguments));
}};
}else{return i;
}},handleError:function(j){if(this.__cS){this.__cS.call(this.__cT,j);
}}},defer:function(g){qx.core.Setting.define(f,e);
g.setErrorHandler(null,null);
}});
})();
(function(){var l="ready",k="qx.client",j="mshtml",i="load",h="unload",g="qx.event.handler.Application",f="complete",d="gecko|opera|webkit",c="left",b="DOMContentLoaded",a="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__gt=false;
this.__gu=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gv:false,onScriptLoaded:function(){this.__gv=true;
var w=qx.event.handler.Application.$$instance;

if(w){w.__gy();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(s,t,u){},unregisterEvent:function(o,p,q){},__gw:null,__gt:null,__gu:null,__gx:null,__gy:function(){var x=qx.event.handler.Application;
if(!this.__gw&&this.__gt&&x.__gv){if(qx.core.Variant.isSet(k,j)){if(qx.event.Registration.hasListener(this._window,l)){this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}else{this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}},isApplicationReady:function(){return this.__gw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__gt=true;
this.__gy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,d)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,j)){var self=this;
var m=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(n){window.setTimeout(m,100);
}};
m();
}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gt=true;
this.__gy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gx){this.__gx=true;

try{qx.event.Registration.fireEvent(this._window,a);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);
}},_stopWindowObserver:function(){var f=qx.event.handler.Window.SUPPORTED_TYPES;

for(var d in f){qx.bom.Event.removeNativeListener(this._window,d,this._onNativeWrapper);
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
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var j="on",h="qx.debug",g="qx.event.dispatch.Direct";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(m){this._manager=m;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(n,event,o){return !event.getBubbles();
},dispatchEvent:function(a,event,b){if(qx.core.Variant.isSet(h,j)){if(a instanceof qx.core.Object){var e=qx.Class.getEventType(a.constructor,b);
var c=qx.Class.getByName(e);

if(!c){this.error("The event type '"+b+"' declared in the class '"+a.constructor+" is not an available class': "+e);
}else if(!(event instanceof c)){this.error("Expected event type to be instanceof '"+e+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__gA||null;
},__gz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__gA=new j;
var h=new Date;
this.__gA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gB:function(e){var g=this.__gA;

if(g){e.setReturnValue(g.close());
}},__gC:function(){var l=this.__gA;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__gz,k);
qx.event.Registration.addListener(window,a,k.__gC,k);
qx.event.Registration.addListener(window,c,k.__gB,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(d,e){var f=qx.locale.Manager;

if(f){return f.tr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(g,h,i,j){var k=qx.locale.Manager;

if(k){return k.trn.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(b){var c=qx.locale.Manager;

if(c){return c.marktr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__qJ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__qJ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__qJ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__qJ=null;
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var g="demobrowser.Application",f="viewer",e="qx.debug",d="demobrowser/css/sourceview.css",c="script/demodata.json",b="on",a="demobrowser/css/style.css";
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
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cw:function(){this.QUIRKS_MODE=this.__cx();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cx:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cw();
}});
})();
(function(){var n="qx.debug",m="on",k="Invalid argument 'map'",j="Invalid argument 'minLength'",h="Invalid argument 'source'",g="Invalid argument 'target'",f="function",e="Invalid argument 'array'",d="qx.lang.Object",c="undefined",b="object";
qx.Class.define(d,{statics:{empty:function(D){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(D,k);
}
for(var E in D){if(D.hasOwnProperty(E)){delete D[E];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(a){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(a,k);
}return a.__count__===0;
}:
function(N){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(N,k);
}
for(var O in N){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(v,w){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(v,k);
qx.core.Assert&&qx.core.Assert.assertInteger(w,j);
}return v.__count__>=w;
}:
function(A,B){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(A,k);
qx.core.Assert&&qx.core.Assert.assertInteger(B,j);
}
if(B<=0){return true;
}var length=0;

for(var C in A){if((++length)>=B){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(R){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(R,k);
}var T=[];
var S=this.getKeys(R);

for(var i=0,l=S.length;i<l;i++){T.push(R[S[i]]);
}return T;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(P,Q){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(P,g);
qx.core.Assert&&qx.core.Assert.assertMap(Q,h);
}return qx.lang.Object.mergeWith(P,Q,false);
},merge:function(K,L){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(K,g);
}var M=arguments.length;

for(var i=1;i<M;i++){qx.lang.Object.mergeWith(K,arguments[i]);
}return K;
},clone:function(s){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(s,h);
}var t={};

for(var u in s){t[u]=s[u];
}return t;
},invert:function(H){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(H,k);
}var I={};

for(var J in H){I[H[J].toString()]=J;
}return I;
},getKeyFromValue:function(x,y){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(x,k);
}
for(var z in x){if(x.hasOwnProperty(z)&&x[z]===y){return z;
}}return null;
},contains:function(q,r){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(q,k);
}return this.getKeyFromValue(q,r)!==null;
},select:function(F,G){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertMap(G,k);
}return G[F];
},fromArray:function(o){if(qx.core.Variant.isSet(n,m)){qx.core.Assert&&qx.core.Assert.assertArray(o,e);
}var p={};

for(var i=0,l=o.length;i<l;i++){if(qx.core.Variant.isSet(n,m)){switch(typeof o[i]){case b:case f:case c:throw new Error("Could not convert complex objects like "+o[i]+" at array index "+i+" to map syntax");
}}p[o[i].toString()]=true;
}return p;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(k,m){if(m==null){m=0;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i<this.length;i++){if(this[i]===k){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){s[i]=q.call(r||window,t,i,this);
}}return s;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(x,y){var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(x.call(y||window,z,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?h:j,{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
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
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dc=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dc:null,message:null,getComment:function(){return this.__dc;
},toString:function(){return this.__dc+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dd=qx.dev.StackTrace.getStackTrace();
},members:{__dd:null,getStackTrace:function(){return this.__dd;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var r="qx.debug",q="on",p="Cannot stop propagation on a non bubbling event: ",o="Invalid argument value 'cancelable'.",n="Cannot prevent default action on a non cancelable event: ",m="Invalid argument value 'canBubble'.",l="qx.event.type.Event";
qx.Class.define(l,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){if(qx.core.Variant.isSet(r,q)){if(d!==undefined){qx.core.Assert.assertBoolean(d,m);
}
if(e!==undefined){qx.core.Assert.assertBoolean(e,o);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!d;
this._cancelable=!!e;
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
}},stopPropagation:function(){if(qx.core.Variant.isSet(r,q)){this.assertTrue(this._bubbles,p+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(r,q)){this.assertTrue(this._cancelable,n+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(c){this._eventPhase=c;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(g){this._target=g;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(h){this._relatedTarget=h;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(j){this._originalTarget=j;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(s){this._bubbles=s;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(k){this._cancelable=k;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cB:null,__cC:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__cB=d;
this.__cC=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__cB=this.__cB;
c.__cC=this.__cC;
return c;
},getData:function(){return this.__cB;
},getOldData:function(){return this.__cC;
}},destruct:function(){this.__cB=this.__cC=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cV=c;
this.__cW=d||b;
this.__cX=e===undefined?-1:e;
},members:{__cV:null,__cW:null,__cX:null,toString:function(){return this.__cV;
},getUri:function(){return this.__cW;
},getLineNumber:function(){return this.__cX;
}}});
})();
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__cY=b+(e&&e.message?e.message:e);
Error.call(this,this.__cY);
this.__da=f;
this.__db=e;
},members:{__db:null,__da:null,__cY:null,toString:function(){return this.__cY;
},getArguments:function(){return this.__da;
},getSourceException:function(){return this.__db;
}},destruct:function(){this.__db=null;
this.__da=null;
this.__cY=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__de={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__de:null,getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__de[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__de){return;
}var h=g.classname;
var j=this.__de[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__de[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__de;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__de;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(f,g){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=g.length;i<l;i++){var name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}f[name]=null;
}},disposeObjects:function(o,p){var name;

for(var i=0,l=p.length;i<l;i++){name=p[i];

if(o[name]==null||!o.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(o[name].dispose){o[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}o[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(n){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+n);
}t.length=0;
q[r]=null;
},disposeMap:function(h,j){var k=h[j];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{for(var m in k){if(k.hasOwnProperty(m)){k[m].dispose();
}}}catch(e){throw new Error("The map field: "+j+" of object: "+h+" has non disposable entries: "+e);
}h[j]=null;
},disposeTriggeredBy:function(b,c){var d=c.dispose;
c.dispose=function(){d.call(c);
b.dispose();
};
}}});
})();
(function(){var cf="get",ce="",cd="[",cc=".",cb="last",ca="change",bY="]",bX="Number",bW="String",bV="set",cz="deepBinding",cy="item",cx="reset",cw="' (",cv="on",cu="qx.debug",ct="Boolean",cs=") to the object '",cr="Integer",cq="qx.event.type.Data",cm="qx.data.SingleValueBinding",cn="No event could be found for the property",ck="Can not remove the bindings for null object!",cl="Binding from '",ci="PositiveNumber",cj="PositiveInteger",cg="Binding does not exist!",ch=" is not an data (qx.event.type.Data) event on ",co=").",cp="Date";
qx.Class.define(cm,{statics:{DEBUG_ON:false,__cD:{},bind:function(cK,cL,cM,cN,cO){var cY=this.__cF(cK,cL,cM,cN,cO);
var cT=cL.split(cc);
var cQ=this.__cM(cT);
var cX=[];
var cU=[];
var cV=[];
var cR=[];
var cS=cK;
for(var i=0;i<cT.length;i++){if(cQ[i]!==ce){cR.push(ca);
}else{cR.push(this.__cH(cS,cT[i]));
}cX[i]=cS;
if(i==cT.length-1){if(cQ[i]!==ce){var dc=cQ[i]===cb?cS.length-1:cQ[i];
var cP=cS.getItem(dc);
this.__cL(cP,cM,cN,cO,cK);
cV[i]=this.__cN(cS,cR[i],cM,cN,cO,cQ[i]);
}else{if(cT[i]!=null&&cS[cf+qx.lang.String.firstUp(cT[i])]!=null){var cP=cS[cf+qx.lang.String.firstUp(cT[i])]();
this.__cL(cP,cM,cN,cO,cK);
}cV[i]=this.__cN(cS,cR[i],cM,cN,cO);
}}else{var da={index:i,propertyNames:cT,sources:cX,listenerIds:cV,arrayIndexValues:cQ,targetObject:cM,targetPropertyChain:cN,options:cO,listeners:cU};
var cW=qx.lang.Function.bind(this.__cE,this,da);
cU.push(cW);
cV[i]=cS.addListener(cR[i],cW);
}if(cS[cf+qx.lang.String.firstUp(cT[i])]==null){cS=null;
}else if(cQ[i]!==ce){cS=cS[cf+qx.lang.String.firstUp(cT[i])](cQ[i]);
}else{cS=cS[cf+qx.lang.String.firstUp(cT[i])]();
}
if(!cS){break;
}}var db={type:cz,listenerIds:cV,sources:cX,targetListenerIds:cY.listenerIds,targets:cY.targets};
this.__cO(db,cK,cL,cM,cN);
return db;
},__cE:function(bm){if(bm.options&&bm.options.onUpdate){bm.options.onUpdate(bm.sources[bm.index],bm.targetObject);
}for(var j=bm.index+1;j<bm.propertyNames.length;j++){var bq=bm.sources[j];
bm.sources[j]=null;

if(!bq){continue;
}bq.removeListenerById(bm.listenerIds[j]);
}var bq=bm.sources[bm.index];
for(var j=bm.index+1;j<bm.propertyNames.length;j++){if(bm.arrayIndexValues[j-1]!==ce){bq=bq[cf+qx.lang.String.firstUp(bm.propertyNames[j-1])](bm.arrayIndexValues[j-1]);
}else{bq=bq[cf+qx.lang.String.firstUp(bm.propertyNames[j-1])]();
}bm.sources[j]=bq;
if(!bq){this.__cI(bm.targetObject,bm.targetPropertyChain);
break;
}if(j==bm.propertyNames.length-1){if(qx.Class.implementsInterface(bq,qx.data.IListData)){var br=bm.arrayIndexValues[j]===cb?bq.length-1:bm.arrayIndexValues[j];
var bo=bq.getItem(br);
this.__cL(bo,bm.targetObject,bm.targetPropertyChain,bm.options,bm.sources[bm.index]);
bm.listenerIds[j]=this.__cN(bq,ca,bm.targetObject,bm.targetPropertyChain,bm.options,bm.arrayIndexValues[j]);
}else{if(bm.propertyNames[j]!=null&&bq[cf+qx.lang.String.firstUp(bm.propertyNames[j])]!=null){var bo=bq[cf+qx.lang.String.firstUp(bm.propertyNames[j])]();
this.__cL(bo,bm.targetObject,bm.targetPropertyChain,bm.options,bm.sources[bm.index]);
}var bp=this.__cH(bq,bm.propertyNames[j]);
bm.listenerIds[j]=this.__cN(bq,bp,bm.targetObject,bm.targetPropertyChain,bm.options);
}}else{if(bm.listeners[j]==null){var bn=qx.lang.Function.bind(this.__cE,this,bm);
bm.listeners.push(bn);
}if(qx.Class.implementsInterface(bq,qx.data.IListData)){var bp=ca;
}else{var bp=this.__cH(bq,bm.propertyNames[j]);
}bm.listenerIds[j]=bq.addListener(bp,bm.listeners[j]);
}}},__cF:function(G,H,I,J,K){var O=J.split(cc);
var M=this.__cM(O);
var T=[];
var S=[];
var Q=[];
var P=[];
var N=I;
for(var i=0;i<O.length-1;i++){if(M[i]!==ce){P.push(ca);
}else{try{P.push(this.__cH(N,O[i]));
}catch(e){break;
}}T[i]=N;
var R=function(){for(var j=i+1;j<O.length-1;j++){var bT=T[j];
T[j]=null;

if(!bT){continue;
}bT.removeListenerById(Q[j]);
}var bT=T[i];
for(var j=i+1;j<O.length-1;j++){var bR=qx.lang.String.firstUp(O[j-1]);
if(M[j-1]!==ce){var bU=M[j-1]===cb?bT.getLength()-1:M[j-1];
bT=bT[cf+bR](bU);
}else{bT=bT[cf+bR]();
}T[j]=bT;
if(S[j]==null){S.push(R);
}if(qx.Class.implementsInterface(bT,qx.data.IListData)){var bS=ca;
}else{try{var bS=qx.data.SingleValueBinding.__cH(bT,O[j]);
}catch(e){break;
}}Q[j]=bT.addListener(bS,S[j]);
}qx.data.SingleValueBinding.__cG(G,H,I,J);
};
S.push(R);
Q[i]=N.addListener(P[i],R);
var L=qx.lang.String.firstUp(O[i]);
if(N[cf+L]==null){N=null;
}else if(M[i]!==ce){N=N[cf+L](M[i]);
}else{N=N[cf+L]();
}
if(!N){break;
}}return {listenerIds:Q,targets:T};
},__cG:function(w,x,y,z){var D=this.__cK(w,x);

if(D!=null){var F=x.substring(x.lastIndexOf(cc)+1,x.length);
if(F.charAt(F.length-1)==bY){var A=F.substring(F.lastIndexOf(cd)+1,F.length-1);
var C=F.substring(0,F.lastIndexOf(cd));
var E=D[cf+qx.lang.String.firstUp(C)]();

if(A==cb){A=E.length-1;
}
if(E!=null){var B=E.getItem(A);
}}else{var B=D[cf+qx.lang.String.firstUp(F)]();
}}this.__cJ(y,z,B);
},__cH:function(t,u){var v=this.__cQ(t,u);
if(v==null){if(qx.Class.supportsEvent(t.constructor,u)){v=u;
}else if(qx.Class.supportsEvent(t.constructor,ca+qx.lang.String.firstUp(u))){v=ca+qx.lang.String.firstUp(u);
}else{throw new qx.core.AssertionError(cn,u);
}}return v;
},__cI:function(bs,bt){var bu=this.__cK(bs,bt);

if(bu!=null){var bv=bt.substring(bt.lastIndexOf(cc)+1,bt.length);
if(bv.charAt(bv.length-1)==bY){this.__cJ(bs,bt,null);
return;
}if(bu[cx+qx.lang.String.firstUp(bv)]!=undefined){bu[cx+qx.lang.String.firstUp(bv)]();
}else{bu[bV+qx.lang.String.firstUp(bv)](null);
}}},__cJ:function(cC,cD,cE){var cI=this.__cK(cC,cD);

if(cI!=null){var cJ=cD.substring(cD.lastIndexOf(cc)+1,cD.length);
if(cJ.charAt(cJ.length-1)==bY){var cF=cJ.substring(cJ.lastIndexOf(cd)+1,cJ.length-1);
var cH=cJ.substring(0,cJ.lastIndexOf(cd));
var cG=cI[cf+qx.lang.String.firstUp(cH)]();

if(cF==cb){cF=cG.length-1;
}
if(cG!=null){cG.setItem(cF,cE);
}}else{cI[bV+qx.lang.String.firstUp(cJ)](cE);
}}},__cK:function(n,o){var r=o.split(cc);
var s=n;
for(var i=0;i<r.length-1;i++){try{var q=r[i];
if(q.indexOf(bY)==q.length-1){var p=q.substring(q.indexOf(cd)+1,q.length-1);
q=q.substring(0,q.indexOf(cd));
}s=s[cf+qx.lang.String.firstUp(q)]();

if(p!=null){if(p==cb){p=s.length-1;
}s=s.getItem(p);
p=null;
}}catch(bz){return null;
}}return s;
},__cL:function(X,Y,ba,bb,bc){X=this.__cP(X,Y,ba,bb);
if(X==null){this.__cI(Y,ba);
}if(X!=undefined){try{this.__cJ(Y,ba,X);
if(bb&&bb.onUpdate){bb.onUpdate(bc,Y,X);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bb&&bb.onSetFail){bb.onSetFail(e);
}else{this.warn("Failed so set value "+X+" on "+Y+". Error message: "+e);
}}}},__cM:function(bO){var bP=[];
for(var i=0;i<bO.length;i++){var name=bO[i];
if(qx.lang.String.endsWith(name,bY)){var bQ=name.substring(name.indexOf(cd)+1,name.indexOf(bY));
if(name.indexOf(bY)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bQ!==cb){if(bQ==ce||isNaN(parseInt(bQ))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cd)!=0){bO[i]=name.substring(0,name.indexOf(cd));
bP[i]=ce;
bP[i+1]=bQ;
bO.splice(i+1,0,cy);
i++;
}else{bP[i]=bQ;
bO.splice(i,1,cy);
}}else{bP[i]=ce;
}}return bP;
},__cN:function(bB,bC,bD,bE,bF,bG){if(qx.core.Variant.isSet(cu,cv)){var bH=qx.Class.getEventType(bB.constructor,bC);
qx.core.Assert.assertEquals(cq,bH,bC+ch+bB+cc);
}var bJ=function(bK,e){if(bK!==ce){if(bK===cb){bK=bB.length-1;
}var bN=bB.getItem(bK);
if(bN==undefined){qx.data.SingleValueBinding.__cI(bD,bE);
}var bL=e.getData().start;
var bM=e.getData().end;

if(bK<bL||bK>bM){return;
}}else{var bN=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+bB+" by "+bC+" to "+bD+" ("+bE+")");
qx.log.Logger.debug("Data before conversion: "+bN);
}bN=qx.data.SingleValueBinding.__cP(bN,bD,bE,bF);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bN);
}try{if(bN!=undefined){qx.data.SingleValueBinding.__cJ(bD,bE,bN);
}else{qx.data.SingleValueBinding.__cI(bD,bE);
}if(bF&&bF.onUpdate){bF.onUpdate(bB,bD,bN);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bF&&bF.onSetFail){bF.onSetFail(e);
}else{this.warn("Failed so set value "+bN+" on "+bD+". Error message: "+e);
}}};
if(!bG){bG=ce;
}bJ=qx.lang.Function.bind(bJ,bB,bG);
var bI=bB.addListener(bC,bJ);
return bI;
},__cO:function(c,d,f,g,h){if(this.__cD[d.toHashCode()]===undefined){this.__cD[d.toHashCode()]=[];
}this.__cD[d.toHashCode()].push([c,d,f,g,h]);
},__cP:function(bd,be,bf,bg){if(bg&&bg.converter){var bi;

if(be.getModel){bi=be.getModel();
}return bg.converter(bd,bi);
}else{var bk=this.__cK(be,bf);
var bl=bf.substring(bf.lastIndexOf(cc)+1,bf.length);
if(bk==null){return bd;
}var bj=qx.Class.getPropertyDefinition(bk.constructor,bl);
var bh=bj==null?ce:bj.check;
return this.__cR(bd,bh);
}},__cQ:function(bw,bx){var by=qx.Class.getPropertyDefinition(bw.constructor,bx);

if(by==null){return null;
}return by.event;
},__cR:function(k,l){var m=qx.lang.Type.getClass(k);
if((m==bX||m==bW)&&(l==cr||l==cj)){k=parseInt(k);
}if((m==ct||m==bX||m==cp)&&l==bW){k=k+ce;
}if((m==bX||m==bW)&&(l==bX||l==ci)){k=parseFloat(k);
}return k;
},removeBindingFromObject:function(U,V){if(V.type==cz){for(var i=0;i<V.sources.length;i++){if(V.sources[i]){V.sources[i].removeListenerById(V.listenerIds[i]);
}}for(var i=0;i<V.targets.length;i++){if(V.targets[i]){V.targets[i].removeListenerById(V.targetListenerIds[i]);
}}}else{U.removeListenerById(V);
}var W=this.__cD[U.toHashCode()];
if(W!=undefined){for(var i=0;i<W.length;i++){if(W[i][0]==V){qx.lang.Array.remove(W,W[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dh){if(qx.core.Variant.isSet(cu,cv)){qx.core.Assert.assertNotNull(dh,ck);
}var di=this.__cD[dh.toHashCode()];

if(di!=undefined){for(var i=di.length-1;i>=0;i--){this.removeBindingFromObject(dh,di[i][0]);
}}},getAllBindingsForObject:function(bA){if(this.__cD[bA.toHashCode()]===undefined){this.__cD[bA.toHashCode()]=[];
}return this.__cD[bA.toHashCode()];
},removeAllBindings:function(){for(var b in this.__cD){var a=qx.core.ObjectRegistry.fromHashCode(b);
if(a==null){delete this.__cD[b];
continue;
}this.removeAllBindingsForObject(a);
}this.__cD={};
},getAllBindings:function(){return this.__cD;
},showBindingInLog:function(dd,de){var dg;
for(var i=0;i<this.__cD[dd.toHashCode()].length;i++){if(this.__cD[dd.toHashCode()][i][0]==de){dg=this.__cD[dd.toHashCode()][i];
break;
}}
if(dg===undefined){var df=cg;
}else{var df=cl+dg[1]+cw+dg[2]+cs+dg[3]+cw+dg[4]+co;
}qx.log.Logger.debug(df);
},showAllBindingsInLog:function(){for(var cB in this.__cD){var cA=qx.core.ObjectRegistry.fromHashCode(cB);

for(var i=0;i<this.__cD[cB].length;i++){this.showBindingInLog(cA,this.__cD[cB][i][0]);
}}}}});
})();
(function(){var l="",k="g",j="0",h='\\$1',g="%",f='-',e="qx.lang.String",d=' ',c='\n',b="undefined";
qx.Class.define(e,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(P){return P.replace(/[A-Z]/g,function(B){return (f+B.charAt(0).toLowerCase());
});
},capitalize:function(H){return H.replace(/\b[a-z]/g,function(I){return I.toUpperCase();
});
},clean:function(Q){return this.trim(Q.replace(/\s+/g,d));
},trimLeft:function(O){return O.replace(/^\s+/,l);
},trimRight:function(N){return N.replace(/\s+$/,l);
},trim:function(J){return J.replace(/^\s+|\s+$/g,l);
},startsWith:function(C,D){return C.indexOf(D)===0;
},endsWith:function(m,n){return m.substring(m.length-n.length,m.length)===n;
},repeat:function(t,u){return t.length>0?new Array(u+1).join(t):l;
},pad:function(E,length,F){var G=length-E.length;

if(G>0){if(typeof F===b){F=j;
}return this.repeat(F,G)+E;
}else{return E;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(L,M){return L.indexOf(M)!=-1;
},format:function(q,r){var s=q;

for(var i=0;i<r.length;i++){s=s.replace(new RegExp(g+(i+1),k),r[i]);
}return s;
},escapeRegexpChars:function(p){return p.replace(/([.*+?^${}()|[\]\/\\])/g,h);
},toArray:function(o){return o.split(/\B|\b/g);
},stripTags:function(K){return K.replace(/<\/?[^>]+>/gi,l);
},stripScripts:function(x,y){var A=l;
var z=x.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){A+=arguments[1]+c;
return l;
});

if(y===true){qx.lang.Function.globalEval(A);
}return z;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var t='',s='"',r=':',q=']',p='null',o=': ',m='object',l='function',h=',',g='\n',be='\\u',bd=',\n',bc='0000',bb='string',ba="Cannot stringify a recursive object.",Y='0',X='-',W='}',V='String',U='Boolean',B='\\\\',C='\\f',z='\\t',A='{\n',x='[]',y="qx.lang.JsonImpl",u='Z',w='\\n',D='Object',E='{}',L='@',J='.',O='(',N='Array',Q='T',P='\\r',G='{',T='JSON.parse',S=' ',R='[',F='Number',H=')',I='[\n',K='\\"',M='\\b';
qx.Class.define(y,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__oM:null,__oN:null,__oO:null,__oP:null,stringify:function(bi,bj,bk){this.__oM=t;
this.__oN=t;
this.__oP=[];

if(qx.lang.Type.isNumber(bk)){var bk=Math.min(10,Math.floor(bk));

for(var i=0;i<bk;i+=1){this.__oN+=S;
}}else if(qx.lang.Type.isString(bk)){if(bk.length>10){bk=bk.slice(0,10);
}this.__oN=bk;
}if(bj&&(qx.lang.Type.isFunction(bj)||qx.lang.Type.isArray(bj))){this.__oO=bj;
}else{this.__oO=null;
}return this.__oQ(t,{'':bi});
},__oQ:function(bs,bt){var bw=this.__oM,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__oO===l){bx=this.__oO.call(bt,bs,bx);
}
if(bx===null){return p;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case V:return this.__oR(bx);
case F:return isFinite(bx)?String(bx):p;
case U:return String(bx);
case N:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__oQ(i,bx)||p;
}this.__oP.pop();
if(bu.length===0){var bv=x;
}else if(this.__oM){bv=I+this.__oM+bu.join(bd+this.__oM)+g+bw+q;
}else{bv=R+bu.join(h)+q;
}this.__oM=bw;
return bv;
case D:this.__oM+=this.__oN;
bu=[];

if(this.__oP.indexOf(bx)!==-1){throw new TypeError(ba);
}this.__oP.push(bx);
if(this.__oO&&typeof this.__oO===m){var length=this.__oO.length;

for(var i=0;i<length;i+=1){var k=this.__oO[i];

if(typeof k===bb){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__oQ(k,bx);

if(v){bu.push(this.__oR(k)+(this.__oM?o:r)+v);
}}}}this.__oP.pop();
if(bu.length===0){var bv=E;
}else if(this.__oM){bv=A+this.__oM+bu.join(bd+this.__oM)+g+bw+W;
}else{bv=G+bu.join(h)+W;
}this.__oM=bw;
return bv;
}},dateToJSON:function(bo){var bp=function(n){return n<10?Y+n:n;
};
var bq=function(n){var br=bp(n);
return n<100?Y+br:br;
};
return isFinite(bo.valueOf())?bo.getUTCFullYear()+X+bp(bo.getUTCMonth()+1)+X+bp(bo.getUTCDate())+Q+bp(bo.getUTCHours())+r+bp(bo.getUTCMinutes())+r+bp(bo.getUTCSeconds())+J+bq(bo.getUTCMilliseconds())+u:null;
},__oR:function(bf){var bg={'\b':M,'\t':z,'\n':w,'\f':C,'\r':P,'"':K,'\\':B};
var bh=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bh.lastIndex=0;

if(bh.test(bf)){return s+
bf.replace(bh,function(a){var c=bg[a];
return typeof c===bb?c:be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
})+s;
}else{return s+bf+s;
}},parse:function(bl,bm){var bn=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bn.lastIndex=0;
if(bn.test(bl)){bl=bl.replace(bn,function(a){return be+(bc+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bl.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,L).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q).replace(/(?:^|:|,)(?:\s*\[)+/g,t))){var j=eval(O+bl+H);
return typeof bm===l?this.__oS({'':j},t,bm):j;
}throw new SyntaxError(T);
},__oS:function(b,d,e){var f=b[d];

if(f&&typeof f===m){for(var k in f){if(Object.hasOwnProperty.call(f,k)){var v=this.__oS(f,k,e);

if(v!==undefined){f[k]=v;
}else{delete f[k];
}}}}return e.call(b,d,f);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cy:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cz:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cA:function(){var J=qx.lang.Generics.__cy;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cz(L,M);
}}}}},defer:function(Q){Q.__cA();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){arguments.callee.base.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
this._returnValue=null;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(j){this._returnValue=j;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ew:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__ew();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ex:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ey:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ex){K.push(J);
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
}else{this.NAME=this.__ex[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__ey();
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
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
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
(function(){var bf=",",be="rgb(",bd=")",bc="qx.theme.manager.Color",bb="qx.util.ColorUtil";
qx.Class.define(bb,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(J){return this.NAMED[J]!==undefined;
},isSystemColor:function(D){return this.SYSTEM[D]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(bc);
},isThemedColor:function(v){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(v);
},stringToRgb:function(U){if(this.supportsThemes()&&this.isThemedColor(U)){var U=qx.theme.manager.Color.getInstance().resolveDynamic(U);
}
if(this.isNamedColor(U)){return this.NAMED[U];
}else if(this.isSystemColor(U)){throw new Error("Could not convert system colors to RGB: "+U);
}else if(this.isRgbString(U)){return this.__hu();
}else if(this.isHex3String(U)){return this.__hw();
}else if(this.isHex6String(U)){return this.__hx();
}throw new Error("Could not parse color: "+U);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__hu();
}else if(this.isRgbaString(N)){return this.__hv();
}else if(this.isHex3String(N)){return this.__hw();
}else if(this.isHex6String(N)){return this.__hx();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(C){return this.rgbToRgbString(this.stringToRgb(C));
},rgbToRgbString:function(P){return be+P[0]+bf+P[1]+bf+P[2]+bd;
},rgbToHexString:function(bh){return (qx.lang.String.pad(bh[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(bg){return this.isSystemColor(bg)||this.isNamedColor(bg)||this.isHex3String(bg)||this.isHex6String(bg)||this.isRgbString(bg);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(Q){return this.REGEXP.hex6.test(Q);
},isRgbString:function(u){return this.REGEXP.rgb.test(u);
},isRgbaString:function(O){return this.REGEXP.rgba.test(O);
},__hu:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__hv:function(){var T=parseInt(RegExp.$1,10);
var S=parseInt(RegExp.$2,10);
var R=parseInt(RegExp.$3,10);
return [T,S,R];
},__hw:function(){var H=parseInt(RegExp.$1,16)*17;
var G=parseInt(RegExp.$2,16)*17;
var F=parseInt(RegExp.$3,16)*17;
return [H,G,F];
},__hx:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(bi){if(this.isHex3String(bi)){return this.__hw(bi);
}throw new Error("Invalid hex3 value: "+bi);
},hex6StringToRgb:function(W){if(this.isHex6String(W)){return this.__hx(W);
}throw new Error("Invalid hex6 value: "+W);
},hexStringToRgb:function(I){if(this.isHex3String(I)){return this.__hw(I);
}
if(this.isHex6String(I)){return this.__hx(I);
}throw new Error("Invalid hex value: "+I);
},rgbToHsb:function(a){var d,e,j;
var s=a[0];
var m=a[1];
var c=a[2];
var o=(s>m)?s:m;

if(c>o){o=c;
}var h=(s<m)?s:m;

if(c<h){h=c;
}j=o/255.0;

if(o!=0){e=(o-h)/o;
}else{e=0;
}
if(e==0){d=0;
}else{var l=(o-s)/(o-h);
var n=(o-m)/(o-h);
var k=(o-c)/(o-h);

if(s==o){d=k-n;
}else if(m==o){d=2.0+l-k;
}else{d=4.0+n-l;
}d=d/6.0;

if(d<0){d=d+1.0;
}}return [Math.round(d*360),Math.round(e*100),Math.round(j*100)];
},hsbToRgb:function(w){var i,f,p,q,t;
var x=w[0]/360;
var y=w[1]/100;
var z=w[2]/100;

if(x>=1.0){x%=1.0;
}
if(y>1.0){y=1.0;
}
if(z>1.0){z=1.0;
}var A=Math.floor(255*z);
var B={};

if(y==0.0){B.red=B.green=B.blue=A;
}else{x*=6.0;
i=Math.floor(x);
f=x-i;
p=Math.floor(A*(1.0-y));
q=Math.floor(A*(1.0-(y*f)));
t=Math.floor(A*(1.0-(y*(1.0-f))));

switch(i){case 0:B.red=A;
B.green=t;
B.blue=p;
break;
case 1:B.red=q;
B.green=A;
B.blue=p;
break;
case 2:B.red=p;
B.green=A;
B.blue=t;
break;
case 3:B.red=p;
B.green=q;
B.blue=A;
break;
case 4:B.red=t;
B.green=p;
B.blue=A;
break;
case 5:B.red=A;
B.green=p;
B.blue=q;
break;
}}return [B.red,B.green,B.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var g="object",f="_applyTheme",e="qx.theme.manager.Decoration",d="Theme",c="__gD",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:f}},members:{__gD:null,resolve:function(j){if(!j){return null;
}
if(typeof j===g){return j;
}var m=this.getTheme();

if(!m){return null;
}var m=this.getTheme();

if(!m){return null;
}var n=this.__gD;

if(!n){n=this.__gD={};
}var k=n[j];

if(k){return k;
}var l=m.decorations[j];

if(!l){return null;
}var o=l.decorator;

if(o==null){throw new Error("Missing definition of which decorator to use in entry: "+j+"!");
}return n[j]=(new o).set(l.style);
},isValidPropertyValue:function(t){if(typeof t===b){return this.isDynamic(t);
}else if(typeof t===g){var u=t.constructor;
return qx.Class.hasInterface(u,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(h){if(!h){return false;
}var i=this.getTheme();

if(!i){return false;
}return !!i.decorations[h];
},_applyTheme:function(p,q){var s=qx.util.AliasManager.getInstance();

if(q){for(var r in q.aliases){s.remove(r);
}}
if(p){for(var r in p.aliases){s.add(r,p.aliases[r]);
}}
if(!p){this.__gD={};
}}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__gE={};
this.add(a,h);
},members:{__gE:null,_preprocess:function(n){var q=this._getDynamic();

if(q[n]===false){return n;
}else if(q[n]===undefined){if(n.charAt(0)===j||n.charAt(0)===b||n.indexOf(g)===0||n.indexOf(f)===i||n.indexOf(e)===0){q[n]=false;
return n;
}
if(this.__gE[n]){return this.__gE[n];
}var p=n.substring(0,n.indexOf(j));
var o=this.__gE[p];

if(o!==undefined){q[n]=o+n.substring(p.length);
}}return n;
},add:function(r,s){this.__gE[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gE[k];
},resolve:function(l){var m=this._getDynamic();

if(l!==null){l=this._preprocess(l);
}return m[l]||l;
}},destruct:function(){this.__gE=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(i){var j=this._dynamic;
return i instanceof qx.bom.Font?i:j[i];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
return true;
}return false;
},_applyTheme:function(o){var p=this._getDynamic();

for(var s in p){if(p[s].themed){p[s].dispose();
delete p[s];
}}
if(o){var q=o.fonts;
var r=qx.bom.Font;

for(var s in q){p[s]=(new r).set(q[s]);
p[s].themed=true;
}}this._setDynamic(p);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(Q,R){arguments.callee.base.call(this);

if(Q!==undefined){this.setSize(Q);
}
if(R!==undefined){this.setFamily(R);
}},statics:{fromString:function(y){var C=new qx.bom.Font();
var A=y.split(/\s+/);
var name=[];
var B;

for(var i=0;i<A.length;i++){switch(B=A[i]){case c:C.setBold(true);
break;
case e:C.setItalic(true);
break;
case j:C.setDecoration(j);
break;
default:var z=parseInt(B,10);

if(z==B||qx.lang.String.contains(B,g)){C.setSize(z);
}else{name.push(B);
}break;
}}
if(name.length>0){C.setFamily(name);
}return C;
},fromConfig:function(K){var L=new qx.bom.Font;
L.set(K);
return L;
},__jF:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__jF;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__jG:null,__jH:null,__jI:null,__jJ:null,__jK:null,__jL:null,_applySize:function(S,T){this.__jG=S===null?null:S+g;
},_applyLineHeight:function(G,H){this.__jL=G===null?null:G;
},_applyFamily:function(D,E){var F=k;

for(var i=0,l=D.length;i<l;i++){if(D[i].indexOf(o)>0){F+=f+D[i]+f;
}else{F+=D[i];
}
if(i!==l-1){F+=n;
}}this.__jH=F;
},_applyBold:function(O,P){this.__jI=O===null?null:O?c:d;
},_applyItalic:function(M,N){this.__jJ=M===null?null:M?e:d;
},_applyDecoration:function(I,J){this.__jK=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__jH,fontSize:this.__jG,fontWeight:this.__jI,fontStyle:this.__jJ,textDecoration:this.__jK,lineHeight:this.__jL};
}}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hy={};
this.__hz={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hA:{},__hy:null,__hz:null,_applyTheme:function(i,j){this.__hz={};
this.__hy={};
},__hB:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=b;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===h){var p=r+u+n.join(u);
return this.__hB(p,l,m);
}}}if(m!=null){return this.__hB(m,l);
}return null;
}else if(typeof t===h){return this.__hB(t,l,m);
}else if(t.include&&!t.style){return this.__hB(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hz;
var z=E[v];

if(!z){z=E[v]=this.__hB(v,x,y);
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
}}var D=this.__hy;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hA;
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
}},destruct:function(){this.__hy=this.__hz=null;
}});
})();
(function(){var u="object",t="qx.debug",s="Theme",r="widgets",q="undefined",p="fonts",o="string",n="colors",m="decorations",k="on",d="meta",j="appearances",g="borders",c="icons",b="other",f="qx.Theme",e="]",h="[Theme ";
qx.Bootstrap.define(f,{statics:{define:function(name,X){if(!X){var X={};
}X.include=this.__qz(X.include);
X.patch=this.__qz(X.patch);
if(qx.core.Variant.isSet(t,k)){this.__qG(name,X);
}var Y={$$type:s,name:name,title:X.title,toString:this.genericToString};
if(X.extend){Y.supertheme=X.extend;
}Y.basename=qx.Bootstrap.createNamespace(name,Y);
this.__qC(Y,X);
this.__qA(Y,X);
this.$$registry[name]=Y;
for(var i=0,a=X.include,l=a.length;i<l;i++){this.include(Y,a[i]);
}
for(var i=0,a=X.patch,l=a.length;i<l;i++){this.patch(Y,a[i]);
}},__qz:function(ba){if(!ba){return [];
}
if(qx.Bootstrap.isArray(ba)){return ba;
}else{return [ba];
}},__qA:function(B,C){var D=C.aliases||{};

if(C.extend&&C.extend.aliases){qx.Bootstrap.objectMergeWith(D,C.extend.aliases,false);
}B.aliases=D;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+e;
},__qB:function(bb){for(var i=0,bc=this.__qD,l=bc.length;i<l;i++){if(bb[bc[i]]){return bc[i];
}}},__qC:function(Q,R){var U=this.__qB(R);
if(R.extend&&!U){U=R.extend.type;
}Q.type=U||b;
if(!U){return;
}var W=function(){};
if(R.extend){W.prototype=new R.extend.$$clazz;
}var V=W.prototype;
var T=R[U];
for(var S in T){V[S]=T[S];
if(V[S].base){if(qx.core.Variant.isSet(t,k)){if(!R.extend){throw new Error("Found base flag in entry '"+S+"' of theme '"+R.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}V[S].base=R.extend;
}}Q.$$clazz=W;
Q[U]=new W;
},$$registry:{},__qD:[n,g,m,p,c,r,j,d],__qE:qx.core.Variant.select(t,{"on":{"title":o,"aliases":u,"type":o,"extend":u,"colors":u,"borders":u,"decorations":u,"fonts":u,"icons":u,"widgets":u,"appearances":u,"meta":u,"include":u,"patch":u},"default":null}),__qF:qx.core.Variant.select(t,{"on":{"color":u,"border":u,"decoration":u,"font":u,"icon":u,"appearance":u,"widget":u},"default":null}),__qG:qx.core.Variant.select(t,{"on":function(name,E){var J=this.__qE;

for(var I in E){if(J[I]===undefined){throw new Error('The configuration key "'+I+'" in theme "'+name+'" is not allowed!');
}
if(E[I]==null){throw new Error('Invalid key "'+I+'" in theme "'+name+'"! The value is undefined/null!');
}
if(J[I]!==null&&typeof E[I]!==J[I]){throw new Error('Invalid type of key "'+I+'" in theme "'+name+'"! The type of the key must be "'+J[I]+'"!');
}}var H=[n,g,m,p,c,r,j,d];

for(var i=0,l=H.length;i<l;i++){var I=H[i];

if(E[I]!==undefined&&(E[I] instanceof Array||E[I] instanceof RegExp||E[I] instanceof Date||E[I].classname!==undefined)){throw new Error('Invalid key "'+I+'" in theme "'+name+'"! The value needs to be a map!');
}}var F=0;

for(var i=0,l=H.length;i<l;i++){var I=H[i];

if(E[I]){F++;
}
if(F>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!E.extend&&F===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(E.meta){var G;

for(var I in E.meta){G=E.meta[I];

if(this.__qF[I]===undefined){throw new Error('The key "'+I+'" is not allowed inside a meta theme block.');
}
if(typeof G!==this.__qF[I]){throw new Error('The type of the key "'+I+'" inside the meta block is wrong.');
}
if(!(typeof G===u&&G!==null&&G.$$type===s)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+I+'" in theme "'+name+'" is invalid: '+G);
}}}if(E.extend&&E.extend.$$type!==s){throw new Error('Invalid extend in theme "'+name+'": '+E.extend);
}if(E.include){for(var i=0,l=E.include.length;i<l;i++){if(typeof (E.include[i])==q||E.include[i].$$type!==s){throw new Error('Invalid include in theme "'+name+'": '+E.include[i]);
}}}if(E.patch){for(var i=0,l=E.patch.length;i<l;i++){if(typeof (E.patch[i])==q||E.patch[i].$$type!==s){throw new Error('Invalid patch in theme "'+name+'": '+E.patch[i]);
}}}},"default":function(){}}),patch:function(K,L){var N=this.__qB(L);

if(N!==this.__qB(K)){throw new Error("The mixins '"+K.name+"' are not compatible '"+L.name+"'!");
}var M=L[N];
var O=K.$$clazz.prototype;

for(var P in M){O[P]=M[P];
}},include:function(v,w){var y=w.type;

if(y!==v.type){throw new Error("The mixins '"+v.name+"' are not compatible '"+w.name+"'!");
}var x=w[y];
var z=v.$$clazz.prototype;

for(var A in x){if(z[A]!==undefined){continue;
}z[A]=x[A];
}}}});
})();
(function(){var t="focusout",s="interval",r="mouseover",q="mouseout",p="mousemove",o="__qK",n="widget",m="qx.ui.tooltip.ToolTip",l="Boolean",k="_applyCurrent",h="__qN",j="qx.ui.tooltip.Manager",i="tooltip-error",g="singleton",f="__qL";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,r,this.__qU,this,true);
this.__qK=new qx.event.Timer();
this.__qK.addListener(s,this.__qR,this);
this.__qL=new qx.event.Timer();
this.__qL.addListener(s,this.__qS,this);
this.__qM={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__qM:null,__qL:null,__qK:null,__qN:null,__qO:null,__qP:function(){if(!this.__qN){this.__qN=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qN;
},__qQ:function(){if(!this.__qO){this.__qO=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__qO.syncAppearance();
}return this.__qO;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__qK.stop();
this.__qL.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__qK.startWith(a.getShowTimeout());
d.addListener(c,q,this.__qV,this,true);
d.addListener(c,t,this.__qW,this,true);
d.addListener(c,p,this.__qT,this,true);
}else{d.removeListener(c,q,this.__qV,this,true);
d.removeListener(c,t,this.__qW,this,true);
d.removeListener(c,p,this.__qT,this,true);
}},__qR:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){this.__qL.startWith(z.getHideTimeout());

if(z.getPlaceMethod()==n){z.placeToWidget(z.getOpener());
}else{z.placeToPoint(this.__qM);
}z.show();
}this.__qK.stop();
},__qS:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){A.exclude();
}this.__qL.stop();
this.resetCurrent();
},__qT:function(e){var B=this.__qM;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__qU:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F;
while(E!=null){var F=E.getToolTip();
var G=E.getToolTipText()||null;
var D=E.getToolTipIcon()||null;

if(qx.Class.hasInterface(E.constructor,qx.ui.form.IForm)&&!E.isValid()){var C=E.getInvalidMessage();
}
if(F||G||D||C){break;
}E=E.getLayoutParent();
}
if(!E){return;
}
if(E.isBlockToolTip()){return;
}if(C&&E.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var F=this.__qQ().set({label:C});
}else if(!F){var F=this.__qP().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__qV:function(e){var w=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!w){return;
}var x=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!x){return;
}var y=this.getCurrent();
if(y&&(x==y||qx.ui.core.Widget.contains(y,x))){return;
}if(x&&w&&qx.ui.core.Widget.contains(w,x)){return;
}if(y&&!x){this.setCurrent(null);
}else{this.resetCurrent();
}},__qW:function(e){var u=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!u){return;
}var v=this.getCurrent();
if(v&&v==u.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,r,this.__qU,this,true);
this._disposeObjects(o,f,h);
this.__qM=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__fQ=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(l,m,n){var o=new qx.event.Timer(n);
o.addListener(i,function(e){o.stop();
l.call(m,e);
o.dispose();
m=null;
},m);
o.start();
return o;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__fR:null,__fQ:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__fR);
this.__fR=null;
}else if(p){this.__fR=window.setInterval(this.__fQ,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(j){this.setInterval(j);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__fR){window.clearInterval(this.__fR);
}this.__fR=this.__fQ=null;
}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(j,k){this._add(j,k);
},addAt:function(a,b,c){this._addAt(a,b,c);
},addBefore:function(l,m,n){this._addBefore(l,m,n);
},addAfter:function(e,f,g){this._addAfter(e,f,g);
},remove:function(h){this._remove(h);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(i){i.getChildren=i._getChildren;
i.hasChildren=i._hasChildren;
i.indexOf=i._indexOf;
i.add=i._add;
i.addAt=i._addAt;
i.addBefore=i._addBefore;
i.addAfter=i._addAfter;
i.remove=i._remove;
i.removeAt=i._removeAt;
i.removeAll=i._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var M="Integer",L="_applyDimension",K="Boolean",J="_applyStretching",I="_applyMargin",H="shorthand",G="_applyAlign",F="qx.debug",E="on",D="allowShrinkY",bj="Wrong 'width' argument. ",bi="Something went wrong with the layout of ",bh="bottom",bg="Wrong 'left' argument. ",bf="baseline",be="marginBottom",bd="qx.ui.core.LayoutItem",bc="center",bb="marginTop",ba="!",T="allowGrowX",U="middle",R="marginLeft",S="allowShrinkX",P="top",Q="right",N="marginRight",O="abstract",V="Wrong 'top' argument. ",W="Wrong 'height' argument. ",Y="allowGrowY",X="left";
qx.Class.define(bd,{type:O,extend:qx.core.Object,properties:{minWidth:{check:M,nullable:true,apply:L,init:null,themeable:true},width:{check:M,nullable:true,apply:L,init:null,themeable:true},maxWidth:{check:M,nullable:true,apply:L,init:null,themeable:true},minHeight:{check:M,nullable:true,apply:L,init:null,themeable:true},height:{check:M,nullable:true,apply:L,init:null,themeable:true},maxHeight:{check:M,nullable:true,apply:L,init:null,themeable:true},allowGrowX:{check:K,apply:J,init:true,themeable:true},allowShrinkX:{check:K,apply:J,init:true,themeable:true},allowGrowY:{check:K,apply:J,init:true,themeable:true},allowShrinkY:{check:K,apply:J,init:true,themeable:true},allowStretchX:{group:[T,S],mode:H,themeable:true},allowStretchY:{group:[Y,D],mode:H,themeable:true},marginTop:{check:M,init:0,apply:I,themeable:true},marginRight:{check:M,init:0,apply:I,themeable:true},marginBottom:{check:M,init:0,apply:I,themeable:true},marginLeft:{check:M,init:0,apply:I,themeable:true},margin:{group:[bb,N,be,R],mode:H,themeable:true},alignX:{check:[X,bc,Q],nullable:true,apply:G,themeable:true},alignY:{check:[P,U,bh,bf],nullable:true,apply:G,themeable:true}},members:{__bJ:null,__bK:null,__bL:null,__bM:null,__bN:null,__bO:null,__bP:null,getBounds:function(){return this.__bO||this.__bK||null;
},clearSeparators:function(){},renderSeparator:function(B,C){},renderLayout:function(u,top,v,w){if(qx.core.Variant.isSet(F,E)){var x=bi+this.toString()+ba;
this.assertInteger(u,bg+x);
this.assertInteger(top,V+x);
this.assertInteger(v,bj+x);
this.assertInteger(w,W+x);
}var y=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var y=this._getHeightForWidth(v);
}
if(y!=null&&y!==this.__bJ){this.__bJ=y;
qx.ui.core.queue.Layout.add(this);
return null;
}var A=this.__bK;

if(!A){A=this.__bK={};
}var z={};

if(u!==A.left||top!==A.top){z.position=true;
A.left=u;
A.top=top;
}
if(v!==A.width||w!==A.height){z.size=true;
A.width=v;
A.height=w;
}if(this.__bL){z.local=true;
delete this.__bL;
}
if(this.__bN){z.margin=true;
delete this.__bN;
}return z;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__bL;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__bL=true;
this.__bM=null;
},getSizeHint:function(g){var h=this.__bM;

if(h){return h;
}
if(g===false){return null;
}h=this.__bM=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__bJ&&this.getHeight()==null){h.height=this.__bJ;
}if(h.minWidth>h.width){h.width=h.minWidth;
}
if(h.maxWidth<h.width){h.width=h.maxWidth;
}
if(!this.getAllowGrowX()){h.maxWidth=h.width;
}
if(!this.getAllowShrinkX()){h.minWidth=h.width;
}if(h.minHeight>h.height){h.height=h.minHeight;
}
if(h.maxHeight<h.height){h.height=h.maxHeight;
}
if(!this.getAllowGrowY()){h.maxHeight=h.height;
}
if(!this.getAllowShrinkY()){h.minHeight=h.height;
}return h;
},_computeSizeHint:function(){var r=this.getMinWidth()||0;
var o=this.getMinHeight()||0;
var s=this.getWidth()||r;
var q=this.getHeight()||o;
var n=this.getMaxWidth()||Infinity;
var p=this.getMaxHeight()||Infinity;
return {minWidth:r,width:s,maxWidth:n,minHeight:o,height:q,maxHeight:p};
},_hasHeightForWidth:function(){var t=this._getLayout();

if(t){return t.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(i){var j=this._getLayout();

if(j&&j.hasHeightForWidth()){return j.getHeightForWidth(i);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__bN=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__bO;
},setUserBounds:function(d,top,e,f){this.__bO={left:d,top:top,width:e,height:f};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__bO;
qx.ui.core.queue.Layout.add(this);
},__bQ:{},setLayoutProperties:function(a){if(a==null){return;
}var b=this.__bP;

if(!b){b=this.__bP={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(a);
}for(var c in a){if(a[c]==null){delete b[c];
}else{b[c]=a[c];
}}},getLayoutProperties:function(){return this.__bP||this.__bQ;
},clearLayoutProperties:function(){delete this.__bP;
},updateLayoutProperties:function(k){var l=this._getLayout();

if(l){if(qx.core.Variant.isSet(F,E)){if(k){for(var m in k){if(k[m]!==null){l.verifyLayoutProperty(this,m,k[m]);
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
},clone:function(){var bk=arguments.callee.base.call(this);
var bl=this.__bP;

if(bl){bk.__bP=qx.lang.Object.clone(bl);
}return bk;
}},destruct:function(){this.$$parent=this.$$subparent=this.__bP=this.__bK=this.__bO=this.__bM=null;
}});
})();
(function(){var o="qx.debug",n="qx.ui.core.DecoratorFactory",m="qxType",l="",k="decorator",j="$$nopool$$",i="qx.ui.core.DecoratorFactory[",h="] ",g="on",f="keys: ",e=", elements: ";
qx.Class.define(n,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bR={};
},statics:{MAX_SIZE:15,__bS:j},members:{__bR:null,getDecoratorElement:function(x){var C=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(x)){var A=x;
var z=qx.theme.manager.Decoration.getInstance().resolve(x);
}else{var A=C.__bS;
z=x;
}var B=this.__bR;

if(B[A]&&B[A].length>0){var y=B[A].pop();
}else{var y=this._createDecoratorElement(z,A);
}y.$$pooled=false;
return y;
},poolDecorator:function(a){if(!a||a.$$pooled){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__bS){a.dispose();
return;
}var c=this.__bR;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(u,v){var w=new qx.html.Decorator(u,v);

if(qx.core.Variant.isSet(o,g)){w.setAttribute(m,k);
}return w;
},toString:qx.core.Variant.select(o,{"on":function(){var r=0;
var s=0;

for(var t in this.__bR){r+=1;
s+=this.__bR[t].length;
}return [i,this.$$hash,h,f,r,e,s].join(l);
},"off":function(){return arguments.callee.base.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__bR;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__bR=null;
}});
})();
(function(){var cN="on",cM="px",cL="qx.debug",cK="Boolean",cJ="qx.event.type.Mouse",cI="qx.event.type.Drag",cH="visible",cG="qx.event.type.Focus",cF="Integer",cE="excluded",bT="qx.event.type.Data",bS="_applyPadding",bR="qx.event.type.Event",bQ="hidden",bP="contextmenu",bO="String",bN="tabIndex",bM="backgroundColor",bL="focused",bK="changeVisibility",cU="mshtml",cV="hovered",cS="qx.event.type.KeySequence",cT="qxType",cQ="qx.client",cR="absolute",cO="drag",cP="div",cW="object",cX="disabled",cs="move",cr="dragstart",cu="qx.dynlocale",ct="dragchange",cw="dragend",cv="resize",cy="Decorator",cx="zIndex",cq="$$widget",cp="opacity",B="default",C="Color",D="changeToolTipText",E="beforeContextmenuOpen",F="_applyNativeContextMenu",G="content",H="_applyBackgroundColor",I="_applyFocusable",J="changeShadow",K="qx.event.type.KeyInput",dc="__bX",db="createChildControl",da="Invalid left decorator inset detected: ",cY="Font",dg="_applyShadow",df="Invalid layout data: ",de="Could not add widget to itself: ",dd="_applyEnabled",di="_applySelectable",dh="Number",bk="_applyKeepActive",bl="__bY",bi="__bU",bj="_applyVisibility",bo="The 'after' widget is not a child of this widget!",bp="repeat",bm="qxDraggable",bn="syncAppearance",bg="paddingLeft",bh="_applyDroppable",S="Wrong 'left' argument. ",R="protector",U="#",T="qx.event.type.MouseWheel",O="_applyCursor",N="_applyDraggable",Q="changeTextColor",P="changeContextMenu",M="paddingTop",L="changeSelectable",bu="hideFocus",bv="Invalid top decorator inset detected: ",bw="none",bx="__cd",bq="outline",br="The 'before' widget is not a child of this widget!",bs="_applyAppearance",bt=" returned an invalid size hint!",by="_applyOpacity",bz="url(",bd=")",bc="qx.ui.core.Widget",bb="minHeight is larger than maxHeight!",ba="__bT",Y="_applyFont",X="cursor",W="qxDroppable",V="changeZIndex",bf="changeEnabled",be="changeFont",bA="_applyDecorator",bB="_applyZIndex",bC="_applyTextColor",bD="qx.ui.menu.Menu",bE="Invalid right decorator inset detected: ",bF="Invalid widget to add: ",bG="__cf",bH="_applyToolTipText",bI="The layout of the widget",bJ="true",bX="widget",bW="Wrong 'top' argument. ",bV="qxClass",bU="changeDecorator",cc="changeBackgroundColor",cb="_applyTabIndex",ca="__ch",bY="Invalid bottom decorator inset detected: ",ce="changeAppearance",cd="__ca",cl="shorthand",cm="/",cj="",ck="_applyContextMenu",ch="container",ci="paddingBottom",cf="changeNativeContextMenu",cg="qx.ui.tooltip.ToolTip",cn="qxKeepActive",co="_applyKeepFocus",cA="paddingRight",cz="minWidth is larger than maxWidth!",cC="changeLocale",cB="qxKeepFocus",cD="qx/static/blank.gif";
qx.Class.define(bc,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__bT=this._createContainerElement();
this.__bU=this.__cg();
this.__bT.add(this.__bU);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bR,disappear:bR,createChildControl:bT,resize:bT,move:bT,syncAppearance:bT,mousemove:cJ,mouseover:cJ,mouseout:cJ,mousedown:cJ,mouseup:cJ,click:cJ,dblclick:cJ,contextmenu:cJ,beforeContextmenuOpen:cJ,mousewheel:T,keyup:cS,keydown:cS,keypress:cS,keyinput:K,focus:cG,blur:cG,focusin:cG,focusout:cG,activate:cG,deactivate:cG,capture:bR,losecapture:bR,drop:cI,dragleave:cI,dragover:cI,drag:cI,dragstart:cI,dragend:cI,dragchange:cI,droprequest:cI},properties:{paddingTop:{check:cF,init:0,apply:bS,themeable:true},paddingRight:{check:cF,init:0,apply:bS,themeable:true},paddingBottom:{check:cF,init:0,apply:bS,themeable:true},paddingLeft:{check:cF,init:0,apply:bS,themeable:true},padding:{group:[M,cA,ci,bg],mode:cl,themeable:true},zIndex:{nullable:true,init:null,apply:bB,event:V,check:cF,themeable:true},decorator:{nullable:true,init:null,apply:bA,event:bU,check:cy,themeable:true},shadow:{nullable:true,init:null,apply:dg,event:J,check:cy,themeable:true},backgroundColor:{nullable:true,check:C,apply:H,event:cc,themeable:true},textColor:{nullable:true,check:C,apply:bC,event:Q,themeable:true,inheritable:true},font:{nullable:true,apply:Y,check:cY,event:be,themeable:true,inheritable:true,dispose:true},opacity:{check:dh,apply:by,themeable:true,nullable:true,init:null},cursor:{check:bO,apply:O,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:cg,nullable:true},toolTipText:{check:bO,nullable:true,event:D,apply:bH},toolTipIcon:{check:bO,nullable:true,event:D},blockToolTip:{check:cK,init:false},visibility:{check:[cH,bQ,cE],init:cH,apply:bj,event:bK},enabled:{init:true,check:cK,inheritable:true,apply:dd,event:bf},anonymous:{init:false,check:cK},tabIndex:{check:cF,nullable:true,apply:cb},focusable:{check:cK,init:false,apply:I},keepFocus:{check:cK,init:false,apply:co},keepActive:{check:cK,init:false,apply:bk},draggable:{check:cK,init:false,apply:N},droppable:{check:cK,init:false,apply:bh},selectable:{check:cK,init:false,event:L,apply:di},contextMenu:{check:bD,apply:ck,nullable:true,event:P},nativeContextMenu:{check:cK,init:false,themeable:true,event:cf,apply:F},appearance:{check:bO,init:bX,apply:bs,event:ce}},statics:{DEBUG:false,getWidgetByElement:function(hs){while(hs){var ht=hs.$$widget;
if(ht!=null){return qx.core.ObjectRegistry.fromHashCode(ht);
}hs=hs.parentNode;
}return null;
},contains:function(parent,t){while(t){if(parent==t){return true;
}t=t.getLayoutParent();
}return false;
},__bV:new qx.ui.core.DecoratorFactory(),__bW:new qx.ui.core.DecoratorFactory()},members:{__bT:null,__bU:null,__bX:null,__bY:null,__ca:null,__cb:null,__cc:null,__cd:null,_getLayout:function(){return this.__cd;
},_setLayout:function(fo){if(qx.core.Variant.isSet(cL,cN)){if(fo){this.assertInstance(fo,qx.ui.layout.Abstract);
}}
if(this.__cd){this.__cd.connectToWidget(null);
}
if(fo){fo.connectToWidget(this);
}this.__cd=fo;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var hm=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(hm);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(hm);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__ce:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var gG=qx.theme.manager.Decoration.getInstance();
var gI=gG.resolve(a).getInsets();
var gH=gG.resolve(b).getInsets();

if(gI.top!=gH.top||gI.right!=gH.right||gI.bottom!=gH.bottom||gI.left!=gH.left){return true;
}return false;
},renderLayout:function(dM,top,dN,dO){var dX=arguments.callee.base.call(this,dM,top,dN,dO);
if(!dX){return;
}var dQ=this.getContainerElement();
var content=this.getContentElement();
var dU=dX.size||this._updateInsets;
var dY=cM;
var dV={};
if(dX.position){dV.left=dM+dY;
dV.top=top+dY;
}if(dX.size){dV.width=dN+dY;
dV.height=dO+dY;
}
if(dX.position||dX.size){dQ.setStyles(dV);
}
if(dU||dX.local||dX.margin){var dP=this.getInsets();
var innerWidth=dN-dP.left-dP.right;
var innerHeight=dO-dP.top-dP.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var dS={};

if(this._updateInsets){dS.left=dP.left+dY;
dS.top=dP.top+dY;
}
if(dU){dS.width=innerWidth+dY;
dS.height=innerHeight+dY;
}
if(dU||this._updateInsets){content.setStyles(dS);
}
if(dX.size){var dW=this.__ca;

if(dW){dW.setStyles({width:dN+cM,height:dO+cM});
}}
if(dX.size||this._updateInsets){if(this.__bX){this.__bX.resize(dN,dO);
}}
if(dX.size){if(this.__bY){var dP=this.__bY.getInsets();
var dT=dN+dP.left+dP.right;
var dR=dO+dP.top+dP.bottom;
this.__bY.resize(dT,dR);
}}
if(dU||dX.local||dX.margin){if(this.__cd&&this.hasLayoutChildren()){this.__cd.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(dX.position&&this.hasListener(cs)){this.fireDataEvent(cs,this.getBounds());
}
if(dX.size&&this.hasListener(cv)){this.fireDataEvent(cv,this.getBounds());
}delete this._updateInsets;
return dX;
},__cf:null,clearSeparators:function(){var gz=this.__cf;

if(!gz){return;
}var gA=qx.ui.core.Widget.__bV;
var content=this.getContentElement();
var gy;

for(var i=0,l=gz.length;i<l;i++){gy=gz[i];
gA.poolDecorator(gy);
content.remove(gy);
}gz.length=0;
},renderSeparator:function(j,k){var m=qx.ui.core.Widget.__bV.getDecoratorElement(j);
this.getContentElement().add(m);
m.resize(k.width,k.height);
m.setStyles({left:k.left+cM,top:k.top+cM});
if(!this.__cf){this.__cf=[m];
}else{this.__cf.push(m);
}},_computeSizeHint:function(){var gR=this.getWidth();
var gQ=this.getMinWidth();
var gM=this.getMaxWidth();
var gP=this.getHeight();
var gN=this.getMinHeight();
var gO=this.getMaxHeight();

if(qx.core.Variant.isSet(cL,cN)){if(gQ!==null&&gM!==null){this.assert(gQ<=gM,cz);
}
if(gN!==null&&gO!==null){this.assert(gN<=gO,bb);
}}var gS=this._getContentHint();
var gL=this.getInsets();
var gU=gL.left+gL.right;
var gT=gL.top+gL.bottom;

if(gR==null){gR=gS.width+gU;
}
if(gP==null){gP=gS.height+gT;
}
if(gQ==null){gQ=gU;

if(gS.minWidth!=null){gQ+=gS.minWidth;
}}
if(gN==null){gN=gT;

if(gS.minHeight!=null){gN+=gS.minHeight;
}}
if(gM==null){if(gS.maxWidth==null){gM=Infinity;
}else{gM=gS.maxWidth+gU;
}}
if(gO==null){if(gS.maxHeight==null){gO=Infinity;
}else{gO=gS.maxHeight+gT;
}}return {width:gR,minWidth:gQ,maxWidth:gM,height:gP,minHeight:gN,maxHeight:gO};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__cd){this.__cd.invalidateLayoutCache();
}},_getContentHint:function(){var hd=this.__cd;

if(hd){if(this.hasLayoutChildren()){var he=hd.getSizeHint();

if(qx.core.Variant.isSet(cL,cN)){var hc=bI+this.toString()+bt;
this.assertInteger(he.width,S+hc);
this.assertInteger(he.height,bW+hc);
}return he;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(fy){var fC=this.getInsets();
var fF=fC.left+fC.right;
var fE=fC.top+fC.bottom;
var fD=fy-fF;
var fA=this._getLayout();

if(fA&&fA.hasHeightForWidth()){var fz=fA.getHeightForWidth(fy);
}else{fz=this._getContentHeightForWidth(fD);
}var fB=fz+fE;
return fB;
},_getContentHeightForWidth:function(dI){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var p=this.getPaddingRight();
var r=this.getPaddingBottom();
var q=this.getPaddingLeft();

if(this.__bX){var o=this.__bX.getInsets();

if(qx.core.Variant.isSet(cL,cN)){this.assertNumber(o.top,bv+o.top);
this.assertNumber(o.right,bE+o.right);
this.assertNumber(o.bottom,bY+o.bottom);
this.assertNumber(o.left,da+o.left);
}top+=o.top;
p+=o.right;
r+=o.bottom;
q+=o.left;
}return {"top":top,"right":p,"bottom":r,"left":q};
},getInnerSize:function(){var gK=this.getBounds();

if(!gK){return null;
}var gJ=this.getInsets();
return {width:gK.width-gJ.left-gJ.right,height:gK.height-gJ.top-gJ.bottom};
},show:function(){this.setVisibility(cH);
},hide:function(){this.setVisibility(bQ);
},exclude:function(){this.setVisibility(cE);
},isVisible:function(){return this.getVisibility()===cH;
},isHidden:function(){return this.getVisibility()!==cH;
},isExcluded:function(){return this.getVisibility()===cE;
},isSeeable:function(){var hh=this.getContainerElement().getDomElement();

if(hh){return hh.offsetWidth>0;
}var hg=this;

do{if(!hg.isVisible()){return false;
}
if(hg.isRootWidget()){return true;
}hg=hg.getLayoutParent();
}while(hg);
return false;
},_createContainerElement:function(){var hf=new qx.html.Element(cP);

if(qx.core.Variant.isSet(cL,cN)){hf.setAttribute(cT,ch);
}hf.setStyles({"position":cR,"zIndex":0});
hf.setAttribute(cq,this.toHashCode());
if(qx.core.Variant.isSet(cL,cN)){hf.setAttribute(bV,this.classname);
}return hf;
},__cg:function(){var fc=this._createContentElement();

if(qx.core.Variant.isSet(cL,cN)){fc.setAttribute(cT,G);
}fc.setStyles({"position":cR,"zIndex":10});
return fc;
},_createContentElement:function(){var eN=new qx.html.Element(cP);
eN.setStyles({"overflowX":bQ,"overflowY":bQ});
return eN;
},getContainerElement:function(){return this.__bT;
},getContentElement:function(){return this.__bU;
},getDecoratorElement:function(){return this.__bX||null;
},getShadowElement:function(){return this.__bY||null;
},__ch:null,getLayoutChildren:function(){var fe=this.__ch;

if(!fe){return this.__ci;
}var ff;

for(var i=0,l=fe.length;i<l;i++){var fd=fe[i];

if(fd.hasUserBounds()||fd.isExcluded()){if(ff==null){ff=fe.concat();
}qx.lang.Array.remove(ff,fd);
}}return ff||fe;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var fn=this.__cd;

if(fn){fn.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var fJ=this.__ch;

if(!fJ){return false;
}var fK;

for(var i=0,l=fJ.length;i<l;i++){fK=fJ[i];

if(!fK.hasUserBounds()&&!fK.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ci:[],_getChildren:function(){return this.__ch||this.__ci;
},_indexOf:function(eg){var eh=this.__ch;

if(!eh){return -1;
}return eh.indexOf(eg);
},_hasChildren:function(){var fO=this.__ch;
return fO!=null&&(!!fO[0]);
},addChildrenToQueue:function(fG){var fH=this.__ch;

if(!fH){return;
}var fI;

for(var i=0,l=fH.length;i<l;i++){fI=fH[i];
fG[fI.$$hash]=fI;
fI.addChildrenToQueue(fG);
}},_add:function(eV,eW){if(eV.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,eV);
}
if(this.__ch){this.__ch.push(eV);
}else{this.__ch=[eV];
}this.__cj(eV,eW);
},_addAt:function(dE,dF,dG){if(!this.__ch){this.__ch=[];
}if(dE.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,dE);
}var dH=this.__ch[dF];

if(dH===dE){return dE.setLayoutProperties(dG);
}
if(dH){qx.lang.Array.insertBefore(this.__ch,dE,dH);
}else{this.__ch.push(dE);
}this.__cj(dE,dG);
},_addBefore:function(fu,fv,fw){if(qx.core.Variant.isSet(cL,cN)){this.assertInArray(fv,this._getChildren(),br);
}
if(fu==fv){return;
}
if(!this.__ch){this.__ch=[];
}if(fu.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,fu);
}qx.lang.Array.insertBefore(this.__ch,fu,fv);
this.__cj(fu,fw);
},_addAfter:function(gq,gr,gs){if(qx.core.Variant.isSet(cL,cN)){this.assertInArray(gr,this._getChildren(),bo);
}
if(gq==gr){return;
}
if(!this.__ch){this.__ch=[];
}if(gq.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,gq);
}qx.lang.Array.insertAfter(this.__ch,gq,gr);
this.__cj(gq,gs);
},_remove:function(dj){if(!this.__ch){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ch,dj);
this.__ck(dj);
},_removeAt:function(fl){if(!this.__ch){throw new Error("This widget has no children!");
}var fm=this.__ch[fl];
qx.lang.Array.removeAt(this.__ch,fl);
this.__ck(fm);
return fm;
},_removeAll:function(){if(!this.__ch){return;
}var ei=this.__ch.concat();
this.__ch.length=0;

for(var i=ei.length-1;i>=0;i--){this.__ck(ei[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__cj:function(fa,fb){if(qx.core.Variant.isSet(cL,cN)){this.assertInstance(fa,qx.ui.core.LayoutItem,bF+fa);
this.assertNotIdentical(fa,this,de+fa);

if(fb!=null){this.assertType(fb,cW,df+fb);
}}var parent=fa.getLayoutParent();

if(parent&&parent!=this){parent._remove(fa);
}fa.setLayoutParent(this);
if(fb){fa.setLayoutProperties(fb);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(fa);
}},__ck:function(fx){if(qx.core.Variant.isSet(cL,cN)){this.assertNotUndefined(fx);
}
if(fx.getLayoutParent()!==this){throw new Error("Remove Error: "+fx+" is not a child of this widget!");
}fx.setLayoutParent(null);
if(this.__cd){this.__cd.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fx);
}},capture:function(s){this.getContainerElement().capture(s);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(dC,dD,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ca){return;
}var fV=this.__ca=new qx.html.Element;

if(qx.core.Variant.isSet(cL,cN)){fV.setAttribute(cT,R);
}fV.setStyles({position:cR,top:0,left:0,zIndex:7});
var fW=this.getBounds();

if(fW){this.__ca.setStyles({width:fW.width+cM,height:fW.height+cM});
}if(qx.core.Variant.isSet(cQ,cU)){fV.setStyles({backgroundImage:bz+qx.util.ResourceManager.getInstance().toUri(cD)+bd,backgroundRepeat:bp});
}this.getContainerElement().add(fV);
},_applyDecorator:function(eo,ep){if(qx.core.Variant.isSet(cL,cN)){if(eo&&typeof eo===cW){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+eo);
}}}var et=qx.ui.core.Widget.__bV;
var er=this.getContainerElement();
if(!this.__ca&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(ep){er.remove(this.__bX);
et.poolDecorator(this.__bX);
}if(eo){var es=this.__bX=et.getDecoratorElement(eo);
es.setStyle(cx,5);
var eq=this.getBackgroundColor();
es.tint(eq);
er.add(es);
}else{delete this.__bX;
this._applyBackgroundColor(this.getBackgroundColor());
}if(eo&&!ep&&eq){this.getContainerElement().setStyle(bM,null);
}if(this.__ce(ep,eo)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(eo){var eu=this.getBounds();

if(eu){es.resize(eu.width,eu.height);
this.__ca&&
this.__ca.setStyles({width:eu.width+cM,height:eu.height+cM});
}}},_applyShadow:function(ev,ew){var eD=qx.ui.core.Widget.__bW;
var ey=this.getContainerElement();
if(ew){ey.remove(this.__bY);
eD.poolDecorator(this.__bY);
}if(ev){var eA=this.__bY=eD.getDecoratorElement(ev);
ey.add(eA);
var eC=eA.getInsets();
eA.setStyles({left:(-eC.left)+cM,top:(-eC.top)+cM});
var eB=this.getBounds();

if(eB){var ez=eB.width+eC.left+eC.right;
var ex=eB.height+eC.top+eC.bottom;
eA.resize(ez,ex);
}eA.tint(null);
}else{delete this.__bY;
}},_applyToolTipText:function(eI,eJ){if(qx.core.Variant.isSet(cu,cN)){if(this.__cc){return;
}var eK=qx.locale.Manager.getInstance();
this.__cc=eK.addListener(cC,function(){if(eI&&eI.translate){this.setToolTipText(eI.translate());
}},this);
}},_applyTextColor:function(fR,fS){},_applyZIndex:function(gd,ge){this.getContainerElement().setStyle(cx,gd==null?0:gd);
},_applyVisibility:function(hn,ho){var hp=this.getContainerElement();

if(hn===cH){hp.show();
}else{hp.hide();
}var parent=this.$$parent;

if(parent&&(ho==null||hn==null||ho===cE||hn===cE)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eO,eP){this.getContainerElement().setStyle(cp,eO==1?null:eO);
if(qx.core.Variant.isSet(cQ,cU)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eQ=(eO==1||eO==null)?null:0.99;
this.getContentElement().setStyle(cp,eQ);
}}},_applyCursor:function(eX,eY){if(eX==null&&!this.isSelectable()){eX=B;
}this.getContainerElement().setStyle(X,eX,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(dk,dl){var dm=this.getBackgroundColor();
var dp=this.getContainerElement();

if(this.__bX){this.__bX.tint(dm);
dp.setStyle(bM,null);
}else{var dn=qx.theme.manager.Color.getInstance().resolve(dm);
dp.setStyle(bM,dn);
}},_applyFont:function(fj,fk){},__cl:null,$$stateChanges:null,_forwardStates:null,hasState:function(go){var gp=this.__cl;
return gp&&gp[go];
},addState:function(fp){var fq=this.__cl;

if(!fq){fq=this.__cl={};
}
if(fq[fp]){return;
}this.__cl[fp]=true;
if(fp===cV){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var ft=this.__co;

if(forward&&forward[fp]&&ft){var fr;

for(var fs in ft){fr=ft[fs];

if(fr instanceof qx.ui.core.Widget){ft[fs].addState(fp);
}}}},removeState:function(fX){var fY=this.__cl;

if(!fY||!fY[fX]){return;
}delete this.__cl[fX];
if(fX===cV){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gc=this.__co;

if(forward&&forward[fX]&&gc){for(var gb in gc){var ga=gc[gb];

if(ga instanceof qx.ui.core.Widget){ga.removeState(fX);
}}}},replaceState:function(gf,gg){var gh=this.__cl;

if(!gh){gh=this.__cl={};
}
if(!gh[gg]){gh[gg]=true;
}
if(gh[gf]){delete gh[gf];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var gk=this.__co;

if(forward&&forward[gg]&&gk){for(var gj in gk){var gi=gk[gj];

if(gi instanceof qx.ui.core.Widget){gi.replaceState(gf,gg);
}}}},__cm:null,__cn:null,syncAppearance:function(){var dw=this.__cl;
var dv=this.__cm;
var dx=qx.theme.manager.Appearance.getInstance();
var dt=qx.core.Property.$$method.setThemed;
var dB=qx.core.Property.$$method.resetThemed;
if(this.__cn){delete this.__cn;
if(dv){var ds=dx.styleFrom(dv,dw,null,this.getAppearance());
if(ds){dv=null;
}}}if(!dv){var du=this;
var dA=[];

do{dA.push(du.$$subcontrol||du.getAppearance());
}while(du=du.$$subparent);
dv=this.__cm=dA.reverse().join(cm).replace(/#[0-9]+/g,cj);
}var dy=dx.styleFrom(dv,dw,null,this.getAppearance());

if(dy){if(ds){for(var dz in ds){if(dy[dz]===undefined){this[dB[dz]]();
}}}if(qx.core.Variant.isSet(cL,cN)){for(var dz in dy){if(!this[dt[dz]]){throw new Error(this.classname+' has no themeable property "'+dz+'" while styling '+dv);
}}}for(var dz in dy){dy[dz]===undefined?this[dB[dz]]():this[dt[dz]](dy[dz]);
}}else if(ds){for(var dz in ds){this[dB[dz]]();
}}this.fireDataEvent(bn,this.__cl);
},_applyAppearance:function(ea,eb){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cb){qx.ui.core.queue.Appearance.add(this);
this.__cb=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cn=true;
qx.ui.core.queue.Appearance.add(this);
var gv=this.__co;

if(gv){var gt;

for(var gu in gv){gt=gv[gu];

if(gt instanceof qx.ui.core.Widget){gt.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var n=this;

while(n.getAnonymous()){n=n.getLayoutParent();

if(!n){return null;
}}return n;
},getFocusTarget:function(){var dL=this;

if(!dL.getEnabled()){return null;
}
while(dL.getAnonymous()||!dL.getFocusable()){dL=dL.getLayoutParent();

if(!dL||!dL.getEnabled()){return null;
}}return dL;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(ej,ek){var em=this.getFocusElement();
if(ej){var en=this.getTabIndex();

if(en==null){en=1;
}em.setAttribute(bN,en);
if(qx.core.Variant.isSet(cQ,cU)){em.setAttribute(bu,bJ);
}else{em.setStyle(bq,bw);
}}else{if(em.isNativelyFocusable()){em.setAttribute(bN,-1);
}else if(ek){em.setAttribute(bN,null);
}}},_applyKeepFocus:function(hi){var hj=this.getFocusElement();
hj.setAttribute(cB,hi?cN:null);
},_applyKeepActive:function(fT){var fU=this.getContainerElement();
fU.setAttribute(cn,fT?cN:null);
},_applyTabIndex:function(ef){if(ef==null){ef=1;
}else if(ef<1||ef>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&ef!=null){this.getFocusElement().setAttribute(bN,ef);
}},_applySelectable:function(ee){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(ee);
this.getContentElement().setSelectable(ee);
},_applyEnabled:function(u,v){if(u===false){this.addState(cX);
this.removeState(cV);
if(this.isFocusable()){this.removeState(bL);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cX);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(ha,hb,name){},_applyContextMenu:function(hk,hl){if(hl){hl.removeState(bP);

if(hl.getOpener()==this){hl.resetOpener();
}
if(!hk){this.removeListener(bP,this._onContextMenuOpen);
hl.removeListener(bK,this._onBeforeContextMenuOpen,this);
}}
if(hk){hk.setOpener(this);
hk.addState(bP);

if(!hl){this.addListener(bP,this._onContextMenuOpen);
hk.addListener(bK,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==cH&&this.hasListener(E)){this.fireDataEvent(E,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(z,A){if(!this.isEnabled()&&z===true){z=false;
}qx.ui.core.DragDropCursor.getInstance();
if(z){this.addListener(cr,this._onDragStart);
this.addListener(cO,this._onDrag);
this.addListener(cw,this._onDragEnd);
this.addListener(ct,this._onDragChange);
}else{this.removeListener(cr,this._onDragStart);
this.removeListener(cO,this._onDrag);
this.removeListener(cw,this._onDragEnd);
this.removeListener(ct,this._onDragChange);
}this.getContainerElement().setAttribute(bm,z?cN:null);
},_applyDroppable:function(fh,fi){if(!this.isEnabled()&&fh===true){fh=false;
}this.getContainerElement().setAttribute(W,fh?cN:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(B);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var dJ=qx.ui.core.DragDropCursor.getInstance();
var dK=e.getCurrentAction();
dK?dJ.setAction(dK):dJ.resetAction();
},visualizeFocus:function(){this.addState(bL);
},visualizeBlur:function(){this.removeState(bL);
},scrollChildIntoView:function(gV,gW,gX,gY){this.scrollChildIntoViewX(gV,gW,gY);
this.scrollChildIntoViewY(gV,gX,gY);
},scrollChildIntoViewX:function(gl,gm,gn){this.getContentElement().scrollChildIntoViewX(gl.getContainerElement(),gm,gn);
},scrollChildIntoViewY:function(w,x,y){this.getContentElement().scrollChildIntoViewY(w.getContainerElement(),x,y);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(hu){if(!this.__co){return false;
}return !!this.__co[hu];
},__co:null,_getCreatedChildControls:function(){return this.__co;
},getChildControl:function(c,d){if(!this.__co){if(d){return null;
}this.__co={};
}var f=this.__co[c];

if(f){return f;
}
if(d===true){return null;
}return this._createChildControl(c);
},_showChildControl:function(g){var h=this.getChildControl(g);
h.show();
return h;
},_excludeChildControl:function(gw){var gx=this.getChildControl(gw,true);

if(gx){gx.exclude();
}},_isChildControlVisible:function(eL){var eM=this.getChildControl(eL,true);

if(eM){return eM.isVisible();
}return false;
},_createChildControl:function(gB){if(!this.__co){this.__co={};
}else if(this.__co[gB]){throw new Error("Child control '"+gB+"' already created!");
}var gF=gB.indexOf(U);

if(gF==-1){var gC=this._createChildControlImpl(gB);
}else{var gC=this._createChildControlImpl(gB.substring(0,gF));
}
if(!gC){throw new Error("Unsupported control: "+gB);
}gC.$$subcontrol=gB;
gC.$$subparent=this;
var gD=this.__cl;
var forward=this._forwardStates;

if(gD&&forward&&gC instanceof qx.ui.core.Widget){for(var gE in gD){if(forward[gE]){gC.addState(gE);
}}}this.fireDataEvent(db,gC);
return this.__co[gB]=gC;
},_createChildControlImpl:function(fg){return null;
},_disposeChildControls:function(){var eU=this.__co;

if(!eU){return;
}var eS=qx.ui.core.Widget;

for(var eT in eU){var eR=eU[eT];

if(!eS.contains(this,eR)){eR.destroy();
}else{eR.dispose();
}}delete this.__co;
},_findTopControl:function(){var fN=this;

while(fN){if(!fN.$$subparent){return fN;
}fN=fN.$$subparent;
}return null;
},getContainerLocation:function(hq){var hr=this.getContainerElement().getDomElement();
return hr?qx.bom.element.Location.get(hr,hq):null;
},getContentLocation:function(fP){var fQ=this.getContentElement().getDomElement();
return fQ?qx.bom.element.Location.get(fQ,fP):null;
},setDomLeft:function(ec){var ed=this.getContainerElement().getDomElement();

if(ed){ed.style.left=ec+cM;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(eG){var eH=this.getContainerElement().getDomElement();

if(eH){eH.style.top=eG+cM;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(eE,top){var eF=this.getContainerElement().getDomElement();

if(eF){eF.style.left=eE+cM;
eF.style.top=top+cM;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var dq=arguments.callee.base.call(this);

if(this.getChildren){var dr=this.getChildren();

for(var i=0,l=dr.length;i<l;i++){dq.add(dr[i].clone());
}}return dq;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(cu,cN)){if(this.__cc){qx.locale.Manager.getInstance().removeListenerById(this.__cc);
}}this.getContainerElement().setAttribute(cq,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var fM=qx.ui.core.Widget;
var fL=this.getContainerElement();

if(this.__bX){fL.remove(this.__bX);
fM.__bV.poolDecorator(this.__bX);
}
if(this.__bY){fL.remove(this.__bY);
fM.__bW.poolDecorator(this.__bY);
}this.clearSeparators();
this.__bX=this.__bY=this.__cf=null;
}else{this._disposeArray(bG);
this._disposeObjects(dc,bl);
}this._disposeArray(ca);
this.__cl=this.__co=null;
this._disposeObjects(bx,ba,bi,cd);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){arguments.callee.base.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var j="keep-align",i="qx.debug",h="interval",g="'placementModeX' and 'placementModeY' instead.",f="The property 'smart' is deprecated. Please us the properties ",e="on",d="Integer",c="direct",b="best-fit",a="mouse",C="bottom-left",B="disappear",A="Boolean",z="Invalid attribute 'value'.",y="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",q="offsetLeft",r="top-left",o="appear",p="offsetBottom",m="top-right",n="offsetTop",k="right-bottom",l="right-top",s="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,m,C,y,v,s,l,k],init:C,themeable:true},placeMethod:{check:[x,a],init:a,themeable:true},domMove:{check:A,init:false},placementModeX:{check:[c,j,b],init:j,themeable:true},placementModeY:{check:[c,j,b],init:j,themeable:true},offsetLeft:{check:d,init:0,themeable:true},offsetTop:{check:d,init:0,themeable:true},offsetRight:{check:d,init:0,themeable:true},offsetBottom:{check:d,init:0,themeable:true},offset:{group:[n,u,p,q],mode:t,themeable:true}},members:{__hR:null,getLayoutLocation:function(J){var M,L,N,top;
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
},moveTo:function(D,top){if(this.getDomMove()){this.setDomPosition(D,top);
}else{this.setLayoutProperties({left:D,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__hR=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(h,this.__hR);
this.addListener(B,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(h,this.__hR);
this.__hR=null;
}},this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__hT(R);
},placeToMouse:function(event){var F=event.getDocumentLeft();
var top=event.getDocumentTop();
var E={left:F,top:top,right:F,bottom:top};
this.__hT(E);
},placeToElement:function(G,H){var location=qx.bom.element.Location.get(G);
var I={left:location.left,top:location.top,right:location.left+G.offsetWidth,bottom:location.top+G.offsetHeight};
if(H){this.__hR=qx.lang.Function.bind(this.placeToElement,this,G,false);
qx.event.Idle.getInstance().addListener(h,this.__hR);
this.addListener(B,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(h,this.__hR);
this.__hR=null;
}},this);
}this.__hT(I);
},placeToPoint:function(U){var V={left:U.left,top:U.top,right:U.left,bottom:U.top};
this.__hT(V);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hS:function(W){var X=null;

if(this._computePlacementSize){var X=this._computePlacementSize();
}else if(this.isVisible()){var X=this.getBounds();
}
if(X==null){this.addListenerOnce(o,function(){this.__hS(W);
},this);
}else{W.call(this,X);
}},__hT:function(bd){this.__hS(function(bb){var bc=qx.util.placement.Placement.compute(bb,this.getLayoutParent().getBounds(),bd,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(bc.left,bc.top);
});
},setSmart:function(Y){if(qx.core.Variant.isSet(i,e)){qx.core.Assert.assertBoolean(Y,z);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,f+g);
}var ba=Y?j:c;
this.set({placementModeX:ba,placementModeY:ba});
},getSmart:function(){if(qx.core.Variant.isSet(i,e)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f+g);
}var S=this.getPlacementModeX()==j?true:false;
var T=this.getPlacementModeY()==j?true:false;
return S&&T;
},resetSmart:function(){if(qx.core.Variant.isSet(i,e)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f+g);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(i,e)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f+g);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(i,e)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f+g);
}this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(h,this.__hR);
}}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Atom;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(t,u){var v=this.getChildControl(n);
t==null?v.resetIcon:v.setIcon(t);
},_applyLabel:function(w,x){var y=this.getChildControl(n);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(o,p){var q=this.getChildControl(n);
q.setRich(o);
}}});
})();
(function(){var c="qx.ui.core.queue.Layout",b="layout";
qx.Class.define(c,{statics:{__df:{},remove:function(a){delete this.__df[a.$$hash];
},add:function(q){this.__df[q.$$hash]=q;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var r=this.__di();
for(var i=r.length-1;i>=0;i--){var s=r[i];
if(s.hasValidLayout()){continue;
}if(s.isRootWidget()&&!s.hasUserBounds()){var u=s.getSizeHint();
s.renderLayout(0,0,u.width,u.height);
}else{var t=s.getBounds();
s.renderLayout(t.left,t.top,t.width,t.height);
}}},getNestingLevel:function(d){var e=this.__dh;
var g=0;
var parent=d;
while(true){if(e[parent.$$hash]!=null){g+=e[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
g+=1;
}var f=g;

while(d&&d!==parent){e[d.$$hash]=f--;
d=d.$$parent;
}return g;
},__dg:function(){var A=qx.ui.core.queue.Visibility;
this.__dh={};
var z=[];
var y=this.__df;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__di:function(){var l=[];
var n=this.__dg();

for(var k=n.length-1;k>=0;k--){if(!n[k]){continue;
}
for(var j in n[k]){var h=n[k][j];
if(k==0||h.isRootWidget()||h.hasUserBounds()){l.push(h);
h.invalidateLayoutCache();
continue;
}var p=h.getSizeHint(false);

if(p){h.invalidateLayoutCache();
var m=h.getSizeHint();
var o=(!h.getBounds()||p.minWidth!==m.minWidth||p.width!==m.width||p.maxWidth!==m.maxWidth||p.minHeight!==m.minHeight||p.height!==m.height||p.maxHeight!==m.maxHeight);
}else{o=true;
}
if(o){var parent=h.getLayoutParent();

if(!n[k-1]){n[k-1]={};
}n[k-1][parent.$$hash]=parent;
}else{l.push(h);
}}}return l;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__dj=g;
this.__dk=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dj:null,__dk:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dj=this.__dk=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dl={};
this.__dm=qx.lang.Function.bind(this.__dq,this);
this.__dn=false;
},members:{__do:null,__dp:null,__dl:null,__dn:null,__dm:null,schedule:function(g){if(this.__do==null){this.__do=window.setTimeout(this.__dm,0);
}var h=g.toHashCode();
if(this.__dp&&this.__dp[h]){return;
}this.__dl[h]=g;
this.__dn=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dp&&this.__dp[f]){this.__dp[f]=null;
return;
}delete this.__dl[f];
if(qx.lang.Object.isEmpty(this.__dl)&&this.__do!=null){window.clearTimeout(this.__do);
this.__do=null;
}},__dq:qx.event.GlobalError.observeMethod(function(){this.__do=null;
while(this.__dn){this.__dp=qx.lang.Object.clone(this.__dl);
this.__dl={};
this.__dn=false;

for(var d in this.__dp){var c=this.__dp[d];

if(c){this.__dp[d]=null;
c.call();
}}}this.__dp=null;
})},destruct:function(){if(this.__do!=null){window.clearTimeout(this.__do);
}this.__dm=this.__dl=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__dr=d;
this.__ds=e||null;
this.__dt=qx.util.DeferredCallManager.getInstance();
},members:{__dr:null,__ds:null,__dt:null,cancel:function(){this.__dt.cancel(this);
},schedule:function(){this.__dt.schedule(this);
},call:function(){this.__ds?this.__dr.apply(this.__ds):this.__dr();
}},destruct:function(b,c){this.cancel();
this.__ds=this.__dr=this.__dt=null;
}});
})();
(function(){var m="element",k="on",j="qx.debug",h="qx.client",g="div",f="': ",d="Invalid context for callback.",c="'",b="Invalid event type.",a="Invalid callback function",U="",T="mshtml",S="none",R="scroll",Q="text",P="|bubble|",O="qx.html.Element",N="|capture|",M="Invalid capture flag.",L="focus",t="gecko",u="blur",r="deactivate",s="capture",p="Failed to add event listener for type '",q="userSelect",n=" from the target '",o="-moz-none",v="visible",w="releaseCapture",D="qxSelectable",C="tabIndex",F="off",E="activate",H="MozUserSelect",G="normal",A=" to the target '",K="Failed to remove event listener for type '",J="webkit",I="Invalid capture falg.",z="__dQ",B="hidden";
qx.Class.define(O,{extend:qx.core.Object,construct:function(bu){arguments.callee.base.call(this);
this.__du=bu||g;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dv:{},_scheduleFlush:function(cE){qx.html.Element.__ed.schedule();
},flush:function(){var dp;

if(qx.core.Variant.isSet(j,k)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var dg=this.__dw();
var df=dg.getFocus();

if(df&&this.__dA(df)){dg.blur(df);
}var dw=dg.getActive();

if(dw&&this.__dA(dw)){qx.bom.Element.deactivate(dw);
}var dj=this.__dy();

if(dj&&this.__dA(dj)){qx.bom.Element.releaseCapture(dj);
}var dq=[];
var dr=this._modified;

for(var dn in dr){dp=dr[dn];
if(dp.__dU()){if(dp.__dB&&qx.dom.Hierarchy.isRendered(dp.__dB)){dq.push(dp);
}else{if(qx.core.Variant.isSet(j,k)){if(this.DEBUG){dp.debug("Flush invisible element");
}}dp.__dT();
}delete dr[dn];
}}
for(var i=0,l=dq.length;i<l;i++){dp=dq[i];

if(qx.core.Variant.isSet(j,k)){if(this.DEBUG){dp.debug("Flush rendered element");
}}dp.__dT();
}var dl=this._visibility;

for(var dn in dl){dp=dl[dn];

if(qx.core.Variant.isSet(j,k)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+dp.__dE);
}}if(!dp.$$disposed){dp.__dB.style.display=dp.__dE?U:S;
if(qx.core.Variant.isSet(h,T)){if(!(document.documentMode>=8)){dp.__dB.style.visibility=dp.__dE?v:B;
}}}delete dl[dn];
}var scroll=this._scroll;

for(var dn in scroll){dp=scroll[dn];
var dx=dp.__dB;

if(dx&&dx.offsetWidth){var di=true;
if(dp.__dH!=null){dp.__dB.scrollLeft=dp.__dH;
delete dp.__dH;
}if(dp.__dI!=null){dp.__dB.scrollTop=dp.__dI;
delete dp.__dI;
}var dt=dp.__dF;

if(dt!=null){var dm=dt.element.getDomElement();

if(dm&&dm.offsetWidth){qx.bom.element.Scroll.intoViewX(dm,dx,dt.align);
delete dp.__dF;
}else{di=false;
}}var du=dp.__dG;

if(du!=null){var dm=du.element.getDomElement();

if(dm&&dm.offsetWidth){qx.bom.element.Scroll.intoViewY(dm,dx,du.align);
delete dp.__dG;
}else{di=false;
}}if(di){delete scroll[dn];
}}}var dh={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dv=this._actions[i];
var ds=dv.element.__dB;

if(!ds||!dh[dv.type]&&!dv.element.__dU()){continue;
}var dk=dv.args;
dk.unshift(ds);
qx.bom.Element[dv.type].apply(qx.bom.Element,dk);
}this._actions=[];
for(var dn in this.__dv){var de=this.__dv[dn];
var dx=de.element.__dB;

if(dx){qx.bom.Selection.set(dx,de.start,de.end);
delete this.__dv[dn];
}}qx.event.handler.Appear.refresh();
},__dw:function(){if(!this.__dx){var cv=qx.event.Registration.getManager(window);
this.__dx=cv.getHandler(qx.event.handler.Focus);
}return this.__dx;
},__dy:function(){if(!this.__dz){var bO=qx.event.Registration.getManager(window);
this.__dz=bO.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dz.getCaptureElement();
},__dA:function(by){var bz=qx.core.ObjectRegistry.fromHashCode(by.$$element);
return bz&&!bz.__dU();
}},members:{__du:null,__dB:null,__dC:false,__dD:true,__dE:true,__dF:null,__dG:null,__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,_scheduleChildrenUpdate:function(){if(this.__dR){return;
}this.__dR=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__du);
},__dT:function(){if(qx.core.Variant.isSet(j,k)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var bs=this.__dQ;

if(bs){var length=bs.length;
var bt;

for(var i=0;i<length;i++){bt=bs[i];

if(bt.__dE&&bt.__dD&&!bt.__dB){bt.__dT();
}}}
if(!this.__dB){this.__dB=this._createDomElement();
this.__dB.$$element=this.$$hash;
this._copyData(false);

if(bs&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dR){this._syncChildren();
}}delete this.__dR;
},_insertChildren:function(){var cF=this.__dQ;
var length=cF.length;
var cH;

if(length>2){var cG=document.createDocumentFragment();

for(var i=0;i<length;i++){cH=cF[i];

if(cH.__dB&&cH.__dD){cG.appendChild(cH.__dB);
}}this.__dB.appendChild(cG);
}else{var cG=this.__dB;

for(var i=0;i<length;i++){cH=cF[i];

if(cH.__dB&&cH.__dD){cG.appendChild(cH.__dB);
}}}},_syncChildren:function(){var eb=qx.core.ObjectRegistry;
var dR=this.__dQ;
var dY=dR.length;
var dS;
var dW;
var dU=this.__dB;
var dX=dU.childNodes;
var dT=0;
var dV;

if(qx.core.Variant.isSet(j,k)){var ea=0;
}for(var i=dX.length-1;i>=0;i--){dV=dX[i];
dW=eb.fromHashCode(dV.$$element);

if(!dW||!dW.__dD||dW.__dS!==this){dU.removeChild(dV);

if(qx.core.Variant.isSet(j,k)){ea++;
}}}for(var i=0;i<dY;i++){dS=dR[i];
if(dS.__dD){dW=dS.__dB;
dV=dX[dT];

if(!dW){continue;
}if(dW!=dV){if(dV){dU.insertBefore(dW,dV);
}else{dU.appendChild(dW);
}
if(qx.core.Variant.isSet(j,k)){ea++;
}}dT++;
}}if(qx.core.Variant.isSet(j,k)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+ea+" operations");
}}},_copyData:function(bI){var bM=this.__dB;
var bL=this.__dN;

if(bL){var bJ=qx.bom.element.Attribute;

for(var bN in bL){bJ.set(bM,bN,bL[bN]);
}}var bL=this.__dM;

if(bL){var bK=qx.bom.element.Style;

if(bI){bK.setStyles(bM,bL);
}else{bK.setCss(bM,bK.compile(bL));
}}var bL=this.__dO;

if(bL){for(var bN in bL){this._applyProperty(bN,bL[bN]);
}}var bL=this.__dP;

if(bL){qx.event.Registration.getManager(bM).importListeners(bM,bL);
delete this.__dP;
}},_syncData:function(){var ce=this.__dB;
var cd=qx.bom.element.Attribute;
var cb=qx.bom.element.Style;
var cc=this.__dK;

if(cc){var ch=this.__dN;

if(ch){var cf;

for(var cg in cc){cf=ch[cg];

if(cf!==undefined){cd.set(ce,cg,cf);
}else{cd.reset(ce,cg);
}}}this.__dK=null;
}var cc=this.__dJ;

if(cc){var ch=this.__dM;

if(ch){var ca={};

for(var cg in cc){ca[cg]=ch[cg];
}cb.setStyles(ce,ca);
}this.__dJ=null;
}var cc=this.__dL;

if(cc){var ch=this.__dO;

if(ch){var cf;

for(var cg in cc){this._applyProperty(cg,ch[cg]);
}}this.__dL=null;
}},__dU:function(){var ec=this;
while(ec){if(ec.__dC){return true;
}
if(!ec.__dD||!ec.__dE){return false;
}ec=ec.__dS;
}return false;
},__dV:function(dN){if(dN.__dS===this){throw new Error("Child is already in: "+dN);
}
if(dN.__dC){throw new Error("Root elements could not be inserted into other ones.");
}if(dN.__dS){dN.__dS.remove(dN);
}dN.__dS=this;
if(!this.__dQ){this.__dQ=[];
}if(this.__dB){this._scheduleChildrenUpdate();
}},__dW:function(bP){if(bP.__dS!==this){throw new Error("Has no child: "+bP);
}if(this.__dB){this._scheduleChildrenUpdate();
}delete bP.__dS;
},__dX:function(bo){if(bo.__dS!==this){throw new Error("Has no child: "+bo);
}if(this.__dB){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dQ||null;
},getChild:function(X){var Y=this.__dQ;
return Y&&Y[X]||null;
},hasChildren:function(){var cD=this.__dQ;
return cD&&cD[0]!==undefined;
},indexOf:function(ek){var em=this.__dQ;
return em?em.indexOf(ek):-1;
},hasChild:function(cn){var co=this.__dQ;
return co&&co.indexOf(cn)!==-1;
},add:function(bx){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dV(arguments[i]);
}this.__dQ.push.apply(this.__dQ,arguments);
}else{this.__dV(bx);
this.__dQ.push(bx);
}return this;
},addAt:function(bv,bw){this.__dV(bv);
qx.lang.Array.insertAt(this.__dQ,bv,bw);
return this;
},remove:function(ck){var cl=this.__dQ;

if(!cl){return;
}
if(arguments[1]){var cm;

for(var i=0,l=arguments.length;i<l;i++){cm=arguments[i];
this.__dW(cm);
qx.lang.Array.remove(cl,cm);
}}else{this.__dW(ck);
qx.lang.Array.remove(cl,ck);
}return this;
},removeAt:function(da){var dc=this.__dQ;

if(!dc){throw new Error("Has no children!");
}var dd=dc[da];

if(!dd){throw new Error("Has no child at this position!");
}this.__dW(dd);
qx.lang.Array.removeAt(this.__dQ,da);
return this;
},removeAll:function(){var cY=this.__dQ;

if(cY){for(var i=0,l=cY.length;i<l;i++){this.__dW(cY[i]);
}cY.length=0;
}return this;
},getParent:function(){return this.__dS||null;
},insertInto:function(parent,dy){parent.__dV(this);

if(dy==null){parent.__dQ.push(this);
}else{qx.lang.Array.insertAt(this.__dQ,this,dy);
}return this;
},insertBefore:function(cP){var parent=cP.__dS;
parent.__dV(this);
qx.lang.Array.insertBefore(parent.__dQ,this,cP);
return this;
},insertAfter:function(ed){var parent=ed.__dS;
parent.__dV(this);
qx.lang.Array.insertAfter(parent.__dQ,this,ed);
return this;
},moveTo:function(cp){var parent=this.__dS;
parent.__dX(this);
var cq=parent.__dQ.indexOf(this);

if(cq===cp){throw new Error("Could not move to same index!");
}else if(cq<cp){cp--;
}qx.lang.Array.removeAt(parent.__dQ,cq);
qx.lang.Array.insertAt(parent.__dQ,this,cp);
return this;
},moveBefore:function(cr){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(cr));
},moveAfter:function(cC){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(cC)+1);
},free:function(){var parent=this.__dS;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dQ){return;
}parent.__dW(this);
qx.lang.Array.remove(parent.__dQ,this);
return this;
},getDomElement:function(){return this.__dB||null;
},getNodeName:function(){return this.__du;
},setNodeName:function(name){this.__du=name;
},setRoot:function(W){this.__dC=W;
},useMarkup:function(dG){if(this.__dB){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(h,T)){var dH=document.createElement(g);
}else{var dH=qx.html.Element.__dY;

if(!dH){dH=qx.html.Element.__dY=document.createElement(g);
}}dH.innerHTML=dG;
this.__dB=dH.firstChild;
this.__dB.$$element=this.$$hash;
this._copyData(true);
return this.__dB;
},useElement:function(cQ){if(this.__dB){throw new Error("Could not overwrite existing element!");
}this.__dB=cQ;
this.__dB.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bE=this.getAttribute(C);

if(bE>=1){return true;
}var bD=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bE>=0&&bD[this.__du]){return true;
}return false;
},setSelectable:function(ee){this.setAttribute(D,ee?k:F);
if(qx.core.Variant.isSet(h,J)){this.setStyle(q,ee?G:S);
}else if(qx.core.Variant.isSet(h,t)){this.setStyle(H,ee?Q:o);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__du];
},include:function(){if(this.__dD){return;
}delete this.__dD;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dD){return;
}this.__dD=false;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dD===true;
},show:function(){if(this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__dS){this.__dS._scheduleChildrenUpdate();
}delete this.__dE;
},hide:function(){if(!this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__dE=false;
},isVisible:function(){return this.__dE===true;
},scrollChildIntoViewX:function(dI,dJ,dK){var dL=this.__dB;
var dM=dI.getDomElement();

if(dK!==false&&dL&&dL.offsetWidth&&dM&&dM.offsetWidth){qx.bom.element.Scroll.intoViewX(dM,dL,dJ);
}else{this.__dF={element:dI,align:dJ};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dH;
},scrollChildIntoViewY:function(cx,cy,cz){var cA=this.__dB;
var cB=cx.getDomElement();

if(cz!==false&&cA&&cA.offsetWidth&&cB&&cB.offsetWidth){qx.bom.element.Scroll.intoViewY(cB,cA,cy);
}else{this.__dG={element:cx,align:cy};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dI;
},scrollToX:function(x,cK){var cL=this.__dB;

if(cK!==true&&cL&&cL.offsetWidth){cL.scrollLeft=x;
}else{this.__dH=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dF;
},getScrollX:function(){var V=this.__dB;

if(V){return V.scrollLeft;
}return this.__dH||0;
},scrollToY:function(y,ct){var cu=this.__dB;

if(ct!==true&&cu&&cu.offsetWidth){cu.scrollTop=y;
}else{this.__dI=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__dG;
},getScrollY:function(){var cs=this.__dB;

if(cs){return cs.scrollTop;
}return this.__dI||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(R,this.__eb,this);
},enableScrolling:function(){this.removeListener(R,this.__eb,this);
},__ea:null,__eb:function(e){if(!this.__ea){this.__ea=true;
this.__dB.scrollTop=0;
this.__dB.scrollLeft=0;
delete this.__ea;
}},getTextSelection:function(){var br=this.__dB;

if(br){return qx.bom.Selection.get(br);
}return null;
},getTextSelectionLength:function(){var cS=this.__dB;

if(cS){return qx.bom.Selection.getLength(cS);
}return null;
},getTextSelectionStart:function(){var bH=this.__dB;

if(bH){return qx.bom.Selection.getStart(bH);
}return null;
},getTextSelectionEnd:function(){var bp=this.__dB;

if(bp){return qx.bom.Selection.getEnd(bp);
}return null;
},setTextSelection:function(bA,bB){var bC=this.__dB;

if(bC){qx.bom.Selection.set(bC,bA,bB);
return;
}qx.html.Element.__dv[this.toHashCode()]={element:this,start:bA,end:bB};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cj=this.__dB;

if(cj){qx.bom.Selection.clear(cj);
}delete qx.html.Element.__dv[this.toHashCode()];
},__ec:function(bQ,bR){var bS=qx.html.Element._actions;
bS.push({type:bQ,element:this,args:bR||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__ec(L);
},blur:function(){this.__ec(u);
},activate:function(){this.__ec(E);
},deactivate:function(){this.__ec(r);
},capture:function(bq){this.__ec(s,[bq!==false]);
},releaseCapture:function(){this.__ec(w);
},setStyle:function(bW,bX,bY){if(!this.__dM){this.__dM={};
}
if(this.__dM[bW]==bX){return;
}
if(bX==null){delete this.__dM[bW];
}else{this.__dM[bW]=bX;
}if(this.__dB){if(bY){qx.bom.element.Style.set(this.__dB,bW,bX);
return this;
}if(!this.__dJ){this.__dJ={};
}this.__dJ[bW]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(ba,bb){var bc=qx.bom.element.Style;

if(!this.__dM){this.__dM={};
}
if(this.__dB){if(!this.__dJ){this.__dJ={};
}
for(var be in ba){var bd=ba[be];

if(this.__dM[be]==bd){continue;
}
if(bd==null){delete this.__dM[be];
}else{this.__dM[be]=bd;
}if(bb){bc.set(this.__dB,be,bd);
continue;
}this.__dJ[be]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var be in ba){var bd=ba[be];

if(this.__dM[be]==bd){continue;
}
if(bd==null){delete this.__dM[be];
}else{this.__dM[be]=bd;
}}}return this;
},removeStyle:function(ef,eg){this.setStyle(ef,null,eg);
},getStyle:function(cJ){return this.__dM?this.__dM[cJ]:null;
},getAllStyles:function(){return this.__dM||null;
},setAttribute:function(eh,ei,ej){if(!this.__dN){this.__dN={};
}
if(this.__dN[eh]==ei){return;
}
if(ei==null){delete this.__dN[eh];
}else{this.__dN[eh]=ei;
}if(this.__dB){if(ej){qx.bom.element.Attribute.set(this.__dB,eh,ei);
return this;
}if(!this.__dK){this.__dK={};
}this.__dK[eh]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(cM,cN){for(var cO in cM){this.setAttribute(cO,cM[cO],cN);
}return this;
},removeAttribute:function(bf,bg){this.setAttribute(bf,null,bg);
},getAttribute:function(ci){return this.__dN?this.__dN[ci]:null;
},_applyProperty:function(name,cw){},_setProperty:function(bT,bU,bV){if(!this.__dO){this.__dO={};
}
if(this.__dO[bT]==bU){return;
}
if(bU==null){delete this.__dO[bT];
}else{this.__dO[bT]=bU;
}if(this.__dB){if(bV){this._applyProperty(bT,bU);
return this;
}if(!this.__dL){this.__dL={};
}this.__dL[bT]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(bF,bG){this._setProperty(bF,null,bG);
},_getProperty:function(dO){var dP=this.__dO;

if(!dP){return null;
}var dQ=dP[dO];
return dQ==null?null:dQ;
},addListener:function(dA,dB,self,dC){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(j,k)){var dD=p+dA+c+A+this+f;
this.assertString(dA,dD+b);
this.assertFunction(dB,dD+a);

if(self!==undefined){this.assertObject(self,d);
}
if(dC!==undefined){this.assertBoolean(dC,I);
}}
if(this.__dB){return qx.event.Registration.addListener(this.__dB,dA,dB,self,dC);
}
if(!this.__dP){this.__dP={};
}
if(dC==null){dC=false;
}var dE=qx.event.Manager.getNextUniqueId();
var dF=dA+(dC?N:P)+dE;
this.__dP[dF]={type:dA,listener:dB,self:self,capture:dC,unique:dE};
return dF;
},removeListener:function(bh,bi,self,bj){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(j,k)){var bk=K+bh+c+n+this+f;
this.assertString(bh,bk+b);
this.assertFunction(bi,bk+a);

if(self!==undefined){this.assertObject(self,d);
}
if(bj!==undefined){this.assertBoolean(bj,M);
}}
if(this.__dB){qx.event.Registration.removeListener(this.__dB,bh,bi,self,bj);
}else{var bm=this.__dP;
var bl;

if(bj==null){bj=false;
}
for(var bn in bm){bl=bm[bn];
if(bl.listener===bi&&bl.self===self&&bl.capture===bj&&bl.type===bh){delete bm[bn];
break;
}}}return this;
},removeListenerById:function(cI){if(this.$$disposed){return null;
}
if(this.__dB){qx.event.Registration.removeListenerById(this.__dB,cI);
}else{delete this.__dP[cI];
}return this;
},hasListener:function(cT,cU){if(this.$$disposed){return false;
}
if(this.__dB){return qx.event.Registration.hasListener(this.__dB,cT,cU);
}var cW=this.__dP;
var cV;

if(cU==null){cU=false;
}
for(var cX in cW){cV=cW[cX];
if(cV.capture===cU&&cV.type===cT){return true;
}}return false;
}},defer:function(cR){cR.__ed=new qx.util.DeferredCall(cR.flush,cR);
},destruct:function(){var dz=this.__dB;

if(dz){qx.event.Registration.getManager(dz).removeAllListeners(dz);
dz.$$element=U;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dS;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(z);
this.__dN=this.__dM=this.__dP=this.__dO=this.__dK=this.__dJ=this.__dL=this.__dB=this.__dS=this.__dF=this.__dG=null;
}});
})();
(function(){var d="on",c="qx.ui.core.queue.Manager",b="qx.debug",a="useraction";
qx.Class.define(c,{statics:{__ee:false,__ef:{},__eg:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__ef[j]=true;

if(!self.__ee){self.__ej.schedule();
self.__ee=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eh){return;
}self.__eh=true;
self.__ej.cancel();
var g=self.__ef;
self.__ei(function(){while(g.visibility||g.widget||g.appearance||g.layout||g.element){if(g.widget){delete g.widget;
qx.ui.core.queue.Widget.flush();
}
if(g.visibility){delete g.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(g.appearance){delete g.appearance;
qx.ui.core.queue.Appearance.flush();
}if(g.widget||g.visibility||g.appearance){continue;
}
if(g.layout){delete g.layout;
qx.ui.core.queue.Layout.flush();
}if(g.widget||g.visibility||g.appearance||g.layout){continue;
}
if(g.element){delete g.element;
qx.html.Element.flush();
}}},function(){self.__ee=false;
});
self.__ei(function(){if(g.dispose){delete g.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eh=false;
});
self.__eg=0;
},__ei:function(h,i){var self=qx.ui.core.queue.Manager;

try{h();
}catch(e){if(qx.core.Variant.isSet(b,d)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__ee=false;
self.__eh=false;
self.__eg+=1;

if(self.__eg<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__eg-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{i();
}}},defer:function(f){f.__ej=new qx.util.DeferredCall(f.flush);
qx.html.Element._scheduleFlush=f.scheduleFlush;
qx.event.Registration.addListener(window,a,f.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
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
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var o="keydown",n="qx.client",m="keypress",l="NumLock",k="keyup",j="Enter",i="0",h="9",g="-",f="PageUp",bv="+",bu="PrintScreen",bt="gecko",bs="A",br="Z",bq="Left",bp="F5",bo="Down",bn="Up",bm="F11",v="F6",w="useraction",t="F3",u="keyinput",r="Insert",s="F8",p="End",q="/",D="Delete",E="*",Q="F1",M="F4",Y="Home",T="F2",bi="F12",be="PageDown",I="F7",bl="F9",bk="F10",bj="Right",H="text",K="Escape",L="webkit",O="5",R="3",U="Meta",bb="7",bg="CapsLock",x="input",y="Control",J="Space",X="Tab",W="Shift",V="Pause",bd="Unidentified",bc="qx.event.handler.Keyboard",S="mshtml",ba="mshtml|webkit",c="6",bf="off",z="Apps",A="4",N="Alt",d="2",e="Scroll",G="1",B="8",C="Win",F="autoComplete",P=",",bh="Backspace";
qx.Class.define(bc,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){arguments.callee.base.call(this);
this.__ek=bY;
this.__el=bY.getWindow();
if(qx.core.Variant.isSet(n,bt)){this.__em=this.__el;
}else{this.__em=this.__el.document.documentElement;
}this.__en={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cp){if(this._identifierToKeyCodeMap[cp]){return true;
}
if(cp.length!=1){return false;
}
if(cp>=i&&cp<=h){return true;
}
if(cp>=bs&&cp<=br){return true;
}
switch(cp){case bv:case g:case E:case q:return true;
default:return false;
}}},members:{__eo:null,__ek:null,__el:null,__em:null,__en:null,__ep:null,__eq:null,__er:null,canHandleEvent:function(ca,cb){},registerEvent:function(ct,cu,cv){},unregisterEvent:function(bJ,bK,bL){},_fireInputEvent:function(bw,bx){var by=this.__es();
if(by&&by.offsetWidth!=0){var event=qx.event.Registration.createEvent(u,qx.event.type.KeyInput,[bw,by,bx]);
this.__ek.dispatchEvent(by,event);
}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[u]);
}},_fireSequenceEvent:function(cH,cI,cJ){var cK=this.__es();
var cL=cH.keyCode;
var event=qx.event.Registration.createEvent(cI,qx.event.type.KeySequence,[cH,cK,cJ]);
this.__ek.dispatchEvent(cK,event);
if(qx.core.Variant.isSet(n,ba)){if(cI==o&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cL)&&!this._emulateKeyPress[cL]){this._fireSequenceEvent(cH,m,cJ);
}}}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[cI]);
}},__es:function(){var cw=this.__ek.getHandler(qx.event.handler.Focus);
var cx=cw.getActive();
if(!cx||cx.offsetWidth==0){cx=cw.getFocus();
}if(!cx||cx.offsetWidth==0){cx=this.__ek.getWindow().document.body;
}return cx;
},_initKeyObserver:function(){this.__eo=qx.lang.Function.listener(this.__et,this);
this.__er=qx.lang.Function.listener(this.__ev,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__em,k,this.__eo);
Event.addNativeListener(this.__em,o,this.__eo);
Event.addNativeListener(this.__em,m,this.__er);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__em,k,this.__eo);
Event.removeNativeListener(this.__em,o,this.__eo);
Event.removeNativeListener(this.__em,m,this.__er);

for(var ck in (this.__eq||{})){var cj=this.__eq[ck];
Event.removeNativeListener(cj.target,m,cj.callback);
}delete (this.__eq);
},__et:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(bU){bU=window.event||bU;
var bX=bU.keyCode;
var bV=0;
var bW=bU.type;
if(!(this.__en[bX]==o&&bW==o)){this._idealKeyHandler(bX,bV,bW,bU);
}if(bW==o){if(this._isNonPrintableKeyCode(bX)||this._emulateKeyPress[bX]){this._idealKeyHandler(bX,bV,m,bU);
}}this.__en[bX]=bW;
},"gecko":function(cc){var cg=this._keyCodeFix[cc.keyCode]||cc.keyCode;
var ce=0;
var cf=cc.type;
if(qx.bom.client.Platform.WIN){var cd=cg?this._keyCodeToIdentifier(cg):this._charCodeToIdentifier(ce);

if(!(this.__en[cd]==o&&cf==o)){this._idealKeyHandler(cg,ce,cf,cc);
}this.__en[cd]=cf;
}else{this._idealKeyHandler(cg,ce,cf,cc);
}this.__eu(cc.target,cf,cg);
},"webkit":function(bQ){var bT=0;
var bR=0;
var bS=bQ.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bS==k||bS==o){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{bT=bQ.keyCode;
if(!(this.__en[bT]==o&&bS==o)){this._idealKeyHandler(bT,bR,bS,bQ);
}if(bS==o){if(this._isNonPrintableKeyCode(bT)||this._emulateKeyPress[bT]){this._idealKeyHandler(bT,bR,m,bQ);
}}this.__en[bT]=bS;
}},"opera":function(cq){this.__ep=cq.keyCode;
this._idealKeyHandler(cq.keyCode,0,cq.type,cq);
}})),__eu:qx.core.Variant.select(n,{"gecko":function(cC,cD,cE){if(cD===o&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==H&&cC.tagName.toLowerCase()===x&&cC.getAttribute(F)!==bf){if(!this.__eq){this.__eq={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__eq[cG]){return;
}var self=this;
this.__eq[cG]={target:cC,callback:function(cy){qx.bom.Event.stopPropagation(cy);
self.__ev(cy);
}};
var cF=qx.event.GlobalError.observeMethod(this.__eq[cG].callback);
qx.bom.Event.addNativeListener(cC,m,cF);
}},"default":null}),__ev:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(cs){cs=window.event||cs;

if(this._charCode2KeyCode[cs.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cs.keyCode],0,cs.type,cs);
}else{this._idealKeyHandler(0,cs.keyCode,cs.type,cs);
}},"gecko":function(bM){var bP=this._keyCodeFix[bM.keyCode]||bM.keyCode;
var bN=bM.charCode;
var bO=bM.type;
this._idealKeyHandler(bP,bN,bO,bM);
},"webkit":function(bz){if(qx.bom.client.Engine.VERSION<525.13){var bC=0;
var bA=0;
var bB=bz.type;

if(bB==k||bB==o){bC=this._charCode2KeyCode[bz.charCode]||bz.keyCode;
}else{if(this._charCode2KeyCode[bz.charCode]){bC=this._charCode2KeyCode[bz.charCode];
}else{bA=bz.charCode;
}}this._idealKeyHandler(bC,bA,bB,bz);
}else{if(this._charCode2KeyCode[bz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bz.keyCode],0,bz.type,bz);
}else{this._idealKeyHandler(0,bz.keyCode,bz.type,bz);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__ep){this._idealKeyHandler(0,this.__ep,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(bE,bF,bG,bH){var bI;
if(bE||(!bE&&!bF)){bI=this._keyCodeToIdentifier(bE);
this._fireSequenceEvent(bH,bG,bI);
}else{bI=this._charCodeToIdentifier(bF);
this._fireSequenceEvent(bH,m,bI);
this._fireInputEvent(bH,bF);
}},_specialCharCodeMap:{8:bh,9:X,13:j,27:K,32:J},_emulateKeyPress:qx.core.Variant.select(n,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:W,17:y,18:N,20:bg,224:U,37:bq,38:bn,39:bj,40:bo,33:f,34:be,35:p,36:Y,45:r,46:D,112:Q,113:T,114:t,115:M,116:bp,117:v,118:I,119:s,120:bl,121:bk,122:bm,123:bi,144:l,44:bu,145:e,19:V,91:C,93:z},_numpadToCharCode:{96:i.charCodeAt(0),97:G.charCodeAt(0),98:d.charCodeAt(0),99:R.charCodeAt(0),100:A.charCodeAt(0),101:O.charCodeAt(0),102:c.charCodeAt(0),103:bb.charCodeAt(0),104:B.charCodeAt(0),105:h.charCodeAt(0),106:E.charCodeAt(0),107:bv.charCodeAt(0),109:g.charCodeAt(0),110:P.charCodeAt(0),111:q.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:br.charCodeAt(0),_charCode0:i.charCodeAt(0),_charCode9:h.charCodeAt(0),_isNonPrintableKeyCode:function(bD){return this._keyCodeToIdentifierMap[bD]?true:false;
},_isIdentifiableKeyCode:function(ch){if(ch>=this._charCodeA&&ch<=this._charCodeZ){return true;
}if(ch>=this._charCode0&&ch<=this._charCode9){return true;
}if(this._specialCharCodeMap[ch]){return true;
}if(this._numpadToCharCode[ch]){return true;
}if(this._isNonPrintableKeyCode(ch)){return true;
}return false;
},_keyCodeToIdentifier:function(a){if(this._isIdentifiableKeyCode(a)){var b=this._numpadToCharCode[a];

if(b){return String.fromCharCode(b);
}return (this._keyCodeToIdentifierMap[a]||this._specialCharCodeMap[a]||String.fromCharCode(a));
}else{return bd;
}},_charCodeToIdentifier:function(cr){return this._specialCharCodeMap[cr]||String.fromCharCode(cr).toUpperCase();
},_identifierToKeyCode:function(ci){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ci]||ci.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ep=this.__ek=this.__el=this.__em=this.__en=null;
},defer:function(cl,cm,cn){qx.event.Registration.addHandler(cl);
if(!cl._identifierToKeyCodeMap){cl._identifierToKeyCodeMap={};

for(var co in cm._keyCodeToIdentifierMap){cl._identifierToKeyCodeMap[cm._keyCodeToIdentifierMap[co]]=parseInt(co,10);
}
for(var co in cm._specialCharCodeMap){cl._identifierToKeyCodeMap[cm._specialCharCodeMap[co]]=parseInt(co,10);
}}
if(qx.core.Variant.isSet(n,S)){cm._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(n,bt)){cm._keyCodeFix={12:cm._identifierToKeyCode(l)};
}else if(qx.core.Variant.isSet(n,L)){if(qx.bom.client.Engine.VERSION<525.13){cm._charCode2KeyCode={63289:cm._identifierToKeyCode(l),63276:cm._identifierToKeyCode(f),63277:cm._identifierToKeyCode(be),63275:cm._identifierToKeyCode(p),63273:cm._identifierToKeyCode(Y),63234:cm._identifierToKeyCode(bq),63232:cm._identifierToKeyCode(bn),63235:cm._identifierToKeyCode(bj),63233:cm._identifierToKeyCode(bo),63272:cm._identifierToKeyCode(D),63302:cm._identifierToKeyCode(r),63236:cm._identifierToKeyCode(Q),63237:cm._identifierToKeyCode(T),63238:cm._identifierToKeyCode(t),63239:cm._identifierToKeyCode(M),63240:cm._identifierToKeyCode(bp),63241:cm._identifierToKeyCode(v),63242:cm._identifierToKeyCode(I),63243:cm._identifierToKeyCode(s),63244:cm._identifierToKeyCode(bl),63245:cm._identifierToKeyCode(bk),63246:cm._identifierToKeyCode(bm),63247:cm._identifierToKeyCode(bi),63248:cm._identifierToKeyCode(bu),3:cm._identifierToKeyCode(j),12:cm._identifierToKeyCode(l),13:cm._identifierToKeyCode(j)};
}else{cm._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var O="qx.client",N="mouseup",M="click",L="mousedown",K="contextmenu",J="mousewheel",I="dblclick",H="mshtml",G="mouseover",F="mouseout",A="DOMMouseScroll",E="mousemove",D="on",z="mshtml|webkit|opera",y="useraction",C="gecko|webkit",B="qx.event.handler.Mouse";
qx.Class.define(B,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(T){arguments.callee.base.call(this);
this.__ez=T;
this.__eA=T.getWindow();
this.__eB=this.__eA.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eC:null,__eD:null,__eE:null,__eF:null,__eG:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(R,S){},registerEvent:qx.bom.client.System.IPHONE?
function(g,h,i){g[D+h]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(s,t,u){s[D+t]=undefined;
}:qx.lang.Function.returnNull,__eH:function(n,o,p){if(!p){p=n.target||n.srcElement;
}if(p&&p.nodeType){qx.event.Registration.fireEvent(p,o||n.type,o==J?qx.event.type.MouseWheel:qx.event.type.Mouse,[n,p,null,true,true]);
}qx.event.Registration.fireEvent(this.__eA,y,qx.event.type.Data,[o||n.type]);
},_initButtonObserver:function(){this.__eC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,L,this.__eC);
Event.addNativeListener(this.__eB,N,this.__eC);
Event.addNativeListener(this.__eB,M,this.__eC);
Event.addNativeListener(this.__eB,I,this.__eC);
Event.addNativeListener(this.__eB,K,this.__eC);
},_initMoveObserver:function(){this.__eD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,E,this.__eD);
Event.addNativeListener(this.__eB,G,this.__eD);
Event.addNativeListener(this.__eB,F,this.__eD);
},_initWheelObserver:function(){this.__eE=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var v=qx.core.Variant.isSet(O,z)?J:A;
var w=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.addNativeListener(w,v,this.__eE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,L,this.__eC);
Event.removeNativeListener(this.__eB,N,this.__eC);
Event.removeNativeListener(this.__eB,M,this.__eC);
Event.removeNativeListener(this.__eB,I,this.__eC);
Event.removeNativeListener(this.__eB,K,this.__eC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,E,this.__eD);
Event.removeNativeListener(this.__eB,G,this.__eD);
Event.removeNativeListener(this.__eB,F,this.__eD);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var q=qx.core.Variant.isSet(O,z)?J:A;
var r=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.removeNativeListener(r,q,this.__eE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(P){this.__eH(P);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(d){var e=d.type;
var f=d.target||d.srcElement;
if(qx.core.Variant.isSet(O,C)){if(f&&f.nodeType==3){f=f.parentNode;
}}
if(this.__eI){this.__eI(d,e,f);
}
if(this.__eK){this.__eK(d,e,f);
}this.__eH(d,e,f);

if(this.__eJ){this.__eJ(d,e,f);
}
if(this.__eL){this.__eL(d,e,f);
}this.__eF=e;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__eH(Q,J);
}),__eI:qx.core.Variant.select(O,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==K){this.__eH(a,N,c);
}}},"default":null}),__eJ:qx.core.Variant.select(O,{"opera":function(U,V,W){if(V==N&&U.button==2){this.__eH(U,K,W);
}},"default":null}),__eK:qx.core.Variant.select(O,{"mshtml":function(X,Y,ba){if(Y==N&&this.__eF==M){this.__eH(X,L,ba);
}else if(Y==I){this.__eH(X,M,ba);
}},"default":null}),__eL:qx.core.Variant.select(O,{"mshtml":null,"default":function(j,k,l){switch(k){case L:this.__eG=l;
break;
case N:if(l!==this.__eG){var m=qx.dom.Hierarchy.getCommonParent(l,this.__eG);
this.__eH(j,M,m);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ez=this.__eA=this.__eB=this.__eG=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var c="qx.event.handler.Capture";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var R="alias",Q="copy",P="blur",O="mouseout",N="keydown",M="Ctrl",L="Shift",K="mousemove",J="move",I="mouseover",bi="Alt",bh="keyup",bg="mouseup",bf="dragend",be="on",bd="mousedown",bc="qxDraggable",bb="drag",ba="drop",Y="qxDroppable",W="qx.event.handler.DragDrop",X="droprequest",U="dragstart",V="dragchange",S="dragleave",T="dragover";
qx.Class.define(W,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(F){arguments.callee.base.call(this);
this.__eM=F;
this.__eN=F.getWindow().document.documentElement;
this.__eM.addListener(this.__eN,bd,this._onMouseDown,this);
this.__fa();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:false,__eX:0,__eY:0,canHandleEvent:function(g,h){},registerEvent:function(k,l,m){},unregisterEvent:function(n,o,p){},addType:function(bj){this.__eQ[bj]=true;
},addAction:function(i){this.__eR[i]=true;
},supportsType:function(D){return !!this.__eQ[D];
},supportsAction:function(G){return !!this.__eR[G];
},getData:function(f){if(!this.__fh||!this.__eO){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eQ[f]){throw new Error("Unsupported data type: "+f+"!");
}
if(!this.__eT[f]){this.__eU=f;
this.__fc(X,this.__eP,this.__eO,false);
}
if(!this.__eT[f]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__eT[f]||null;
},getCurrentAction:function(){return this.__eV;
},addData:function(bk,bl){this.__eT[bk]=bl;
},getCurrentType:function(){return this.__eU;
},__fa:function(){this.__eQ={};
this.__eR={};
this.__eS={};
this.__eT={};
},__fb:function(){if(this.__eP==null){return;
}var C=this.__eR;
var A=this.__eS;
var B=null;

if(this.__fh){if(A.Shift&&A.Ctrl&&C.alias){B=R;
}else if(A.Shift&&A.Alt&&C.copy){B=Q;
}else if(A.Shift&&C.move){B=J;
}else if(A.Alt&&C.alias){B=R;
}else if(A.Ctrl&&C.copy){B=Q;
}else if(C.move){B=J;
}else if(C.copy){B=Q;
}else if(C.alias){B=R;
}}
if(B!=this.__eV){this.__eV=B;
this.__fc(V,this.__eP,this.__eO,false);
}},__fc:function(s,t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(s,qx.event.type.Drag,[v,w]);

if(t!==u){x.setRelatedTarget(u);
}return y.dispatchEvent(t,x);
},__fd:function(a){while(a&&a.nodeType==1){if(a.getAttribute(bc)==be){return a;
}a=a.parentNode;
}return null;
},__fe:function(H){while(H&&H.nodeType==1){if(H.getAttribute(Y)==be){return H;
}H=H.parentNode;
}return null;
},__ff:function(){this.__eP=null;
this.__eM.removeListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.removeListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,P,this._onWindowBlur,this);
this.__fa();
},__fg:function(){if(this.__eW){this.__eM.removeListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.removeListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.removeListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.removeListener(this.__eN,bh,this._onKeyUp,this,true);
this.__fc(bf,this.__eP,this.__eO,false);
this.__eW=false;
}this.__fh=false;
this.__eO=null;
this.__ff();
},__fh:false,_onWindowBlur:function(e){this.__fg();
},_onKeyDown:function(e){var bm=e.getKeyIdentifier();

switch(bm){case bi:case M:case L:if(!this.__eS[bm]){this.__eS[bm]=true;
this.__fb();
}}},_onKeyUp:function(e){var j=e.getKeyIdentifier();

switch(j){case bi:case M:case L:if(this.__eS[j]){this.__eS[j]=false;
this.__fb();
}}},_onMouseDown:function(e){if(this.__eW){return;
}var z=this.__fd(e.getTarget());

if(z){this.__eX=e.getDocumentLeft();
this.__eY=e.getDocumentTop();
this.__eP=z;
this.__eM.addListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.addListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,P,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fh){this.__fc(ba,this.__eO,this.__eP,false,e);
}if(this.__eW){e.stopPropagation();
}this.__fg();
},_onMouseMove:function(e){if(this.__eW){if(!this.__fc(bb,this.__eP,this.__eO,true,e)){this.__fg();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eX)>3||Math.abs(e.getDocumentTop()-this.__eY)>3){if(this.__fc(U,this.__eP,this.__eO,true,e)){this.__eW=true;
this.__eM.addListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.addListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.addListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.addListener(this.__eN,bh,this._onKeyUp,this,true);
var b=this.__eS;
b.Ctrl=e.isCtrlPressed();
b.Shift=e.isShiftPressed();
b.Alt=e.isAltPressed();
this.__fb();
}else{this.__fc(bf,this.__eP,this.__eO,false);
this.__ff();
}}}},_onMouseOver:function(e){var q=e.getTarget();
var r=this.__fe(q);

if(r&&r!=this.__eO){this.__fh=this.__fc(T,r,this.__eP,true,e);
this.__eO=r;
this.__fb();
}},_onMouseOut:function(e){var d=this.__fe(e.getTarget());
var c=this.__fe(e.getRelatedTarget());

if(d&&d!==c&&d==this.__eO){this.__fc(S,this.__eO,c,false,e);
this.__eO=null;
this.__fh=false;
qx.event.Timer.once(this.__fb,this,0);
}}},destruct:function(){this.__eP=this.__eO=this.__eM=this.__eN=this.__eQ=this.__eR=this.__eS=this.__eT=null;
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this._manager=s;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(e,f,g){var j=qx.core.ObjectRegistry.toHashCode(e);
var h=j+d+f;
var i=qx.lang.Function.listener(this._onNative,this,h);
qx.bom.Event.addNativeListener(e,f,i);
this._registeredEvents[h]={element:e,type:f,listener:i};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+d+u;
var x=this._registeredEvents[w];
qx.bom.Event.removeNativeListener(t,u,x.listener);
delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(k,l){var n=this._registeredEvents;

if(!n){return;
}var m=n[l];
qx.event.Registration.fireNonBubblingEvent(m.element,m.type,qx.event.type.Native,[k]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__fi=m;
this.__fj={};
qx.event.handler.Appear.__fk[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fk:{},refresh:function(){var k=this.__fk;

for(var l in k){k[l].refresh();
}}},members:{__fi:null,__fj:null,canHandleEvent:function(d,e){},registerEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s)+t;
var w=this.__fj;

if(w&&!w[v]){w[v]=s;
s.$$displayed=s.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__fj;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var q=this.__fj;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?a:b);
this.__fi.dispatchEvent(r,o);
}}}},destruct:function(){this.__fi=this.__fj=null;
delete qx.event.handler.Appear.__fk[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var p="mshtml",o="",n="qx.client",m=">",k="<",h=" ",g="='",f="qx.bom.Element",e="div",d="' ",c="></";
qx.Class.define(f,{statics:{__fl:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,q,r){if(!r){r=window;
}
if(!name){throw new Error("The tag name is missing!");
}var t=this.__fl;
var s=o;

for(var v in q){if(t[v]){s+=v+g+q[v]+d;
}}var w;
if(s!=o){if(qx.bom.client.Engine.MSHTML){w=r.document.createElement(k+name+h+s+m);
}else{var u=r.document.createElement(e);
u.innerHTML=k+name+h+s+c+name+m;
w=u.firstChild;
}}else{w=r.document.createElement(name);
}
for(var v in q){if(!t[v]){qx.bom.element.Attribute.set(w,v,q[v]);
}}return w;
},empty:function(T){return T.innerHTML=o;
},addListener:function(P,Q,R,self,S){return qx.event.Registration.addListener(P,Q,R,self,S);
},removeListener:function(U,V,W,self,X){return qx.event.Registration.removeListener(U,V,W,self,X);
},removeListenerById:function(z,A){return qx.event.Registration.removeListenerById(z,A);
},hasListener:function(Y,ba,bb){return qx.event.Registration.hasListener(Y,ba,bb);
},focus:function(O){qx.event.Registration.getManager(O).getHandler(qx.event.handler.Focus).focus(O);
},blur:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).blur(y);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(x){qx.event.Registration.getManager(x).getHandler(qx.event.handler.Focus).deactivate(x);
},capture:function(a,b){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(a,b);
},releaseCapture:function(B){qx.event.Registration.getManager(B).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(B);
},clone:function(C,D){var G;

if(D||(qx.core.Variant.isSet(n,p)&&!qx.xml.Document.isXmlDocument(C))){var K=qx.event.Registration.getManager(C);
var E=qx.dom.Hierarchy.getDescendants(C);
E.push(C);
}if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],false);
}}var G=C.cloneNode(true);
if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],true);
}}if(D===true){var N=qx.dom.Hierarchy.getDescendants(G);
N.push(G);
var F,I,M,H;

for(var i=0,L=E.length;i<L;i++){M=E[i];
F=K.serializeListeners(M);

if(F.length>0){I=N[i];

for(var j=0,J=F.length;j<J;j++){H=F[j];
K.addListener(I,H.type,H.handler,H.self,H.capture);
}}}}return G;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var S="qx.client",R="blur",Q="focus",P="mousedown",O="on",N="mouseup",M="DOMFocusOut",L="DOMFocusIn",K="selectstart",J="onmousedown",bn="onfocusout",bm="onfocusin",bl="onmouseup",bk="onselectstart",bj="draggesture",bi="qx.event.handler.Focus",bh="_applyFocus",bg="deactivate",bf="textarea",be="_applyActive",ba="input",bb="focusin",X="qxSelectable",Y="tabIndex",V="off",W="activate",T="mshtml",U="focusout",bc="qxKeepFocus",bd="qxKeepActive";
qx.Class.define(bi,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bH){arguments.callee.base.call(this);
this._manager=bH;
this._window=bH.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:be,nullable:true},focus:{apply:bh,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fm:null,__fn:null,__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,canHandleEvent:function(bq,br){},registerEvent:function(h,i,j){},unregisterEvent:function(C,D,E){},focus:function(I){if(qx.core.Variant.isSet(S,T)){window.setTimeout(function(){try{I.focus();
}catch(bL){}},0);
}else{try{I.focus();
}catch(bG){}}this.setFocus(I);
this.setActive(I);
},activate:function(x){this.setActive(x);
},blur:function(g){try{g.blur();
}catch(l){}
if(this.getActive()===g){this.resetActive();
}
if(this.getFocus()===g){this.resetFocus();
}},deactivate:function(z){if(this.getActive()===z){this.resetActive();
}},tryActivate:function(bo){var bp=this.__fK(bo);

if(bp){this.setActive(bp);
}},__fw:function(bs,bt,bu,bv){var bx=qx.event.Registration;
var bw=bx.createEvent(bu,qx.event.type.Focus,[bs,bt,bv]);
bx.dispatchEvent(bs,bw);
},_windowFocused:true,__fx:function(){if(this._windowFocused){this._windowFocused=false;
this.__fw(this._window,null,R,false);
}},__fy:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fw(this._window,null,Q,false);
}},_initObserver:qx.core.Variant.select(S,{"gecko":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fq=qx.lang.Function.listener(this.__fz,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
this._window.addEventListener(bj,this.__fq,true);
},"mshtml":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.attachEvent(J,this.__fm);
this._document.attachEvent(bl,this.__fn);
this._document.attachEvent(bm,this.__fs);
this._document.attachEvent(bn,this.__ft);
this._document.attachEvent(bk,this.__fr);
},"webkit":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._document.addEventListener(K,this.__fr,false);
this._window.addEventListener(M,this.__ft,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
},"opera":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(L,this.__fs,true);
this._window.addEventListener(M,this.__ft,true);
}}),_stopObserver:qx.core.Variant.select(S,{"gecko":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(N,this.__fn,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
this._window.removeEventListener(bj,this.__fq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,J,this.__fm);
qx.bom.Event.removeNativeListener(this._document,bl,this.__fn);
qx.bom.Event.removeNativeListener(this._document,bm,this.__fs);
qx.bom.Event.removeNativeListener(this._document,bn,this.__ft);
qx.bom.Event.removeNativeListener(this._document,bk,this.__fr);
},"webkit":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(K,this.__fr,false);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
},"opera":function(){this._document.removeEventListener(P,this.__fm,true);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
}}),__fz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(!this.__fL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){this.__fy();
var n=e.srcElement;
var m=this.__fJ(n);

if(m){this.setFocus(m);
}this.tryActivate(n);
},"opera":function(e){var bC=e.target;

if(bC==this._document||bC==this._window){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bC);
this.tryActivate(bC);
if(!this.__fL(bC)){bC.selectionStart=0;
bC.selectionEnd=0;
}}},"default":null})),__fB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){if(!e.toElement){this.__fx();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var F=e.target;

if(F===this.getFocus()){this.resetFocus();
}
if(F===this.getActive()){this.resetActive();
}},"opera":function(e){var by=e.target;

if(by==this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}}},"default":null})),__fC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bE=e.target;

if(bE===this._window||bE===this._document){this.__fy();
bE=this._body;
}this.setFocus(bE);
this.tryActivate(bE);
},"webkit":function(e){var bA=e.target;

if(bA===this._window||bA===this._document){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bA);
this.tryActivate(bA);
}},"default":null})),__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bB=this.__fJ(e.target);

if(!bB){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var B=e.srcElement;
var A=this.__fJ(B);

if(A){if(!this.__fL(B)){B.unselectable=O;
try{document.selection.empty();
}catch(e){}try{A.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fL(B)){B.unselectable=O;
}}},"webkit":function(e){var f=e.target;
var d=this.__fJ(f);

if(d){this.setFocus(d);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var w=e.target;
var u=this.__fJ(w);

if(!this.__fL(w)){qx.bom.Event.preventDefault(e);
if(u){var v=this.getFocus();

if(v&&v.selectionEnd){v.selectionStart=0;
v.selectionEnd=0;
v.blur();
}if(u){this.setFocus(u);
}}}else if(u){this.setFocus(u);
}},"default":null})),__fF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){var bz=e.srcElement;

if(bz.unselectable){bz.unselectable=V;
}this.tryActivate(this.__fG(bz));
},"gecko":function(e){var bF=e.target;

while(bF&&bF.offsetWidth===undefined){bF=bF.parentNode;
}
if(bF){this.tryActivate(bF);
}},"webkit|opera":function(e){this.tryActivate(this.__fG(e.target));
},"default":null})),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(o){var p=this.getFocus();

if(p&&o!=p&&(p.nodeName.toLowerCase()===ba||p.nodeName.toLowerCase()===bf)){o=p;
}return o;
},"default":function(bD){return bD;
}})),__fH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(e){var y=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fL(y)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fI:function(a){var b=qx.bom.element.Attribute.get(a,Y);

if(b>=1){return true;
}var c=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(b>=0&&c[a.tagName]){return true;
}return false;
},__fJ:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bc)==O){return null;
}
if(this.__fI(k)){return k;
}k=k.parentNode;
}return this._body;
},__fK:function(q){var r=q;

while(q&&q.nodeType===1){if(q.getAttribute(bd)==O){return null;
}q=q.parentNode;
}return r;
},__fL:function(s){while(s&&s.nodeType===1){var t=s.getAttribute(X);

if(t!=null){return t===O;
}s=s.parentNode;
}return true;
},_applyActive:function(G,H){if(H){this.__fw(H,G,bg,true);
}
if(G){this.__fw(G,H,W,true);
}},_applyFocus:function(bM,bN){if(bN){this.__fw(bN,bM,U,true);
}
if(bM){this.__fw(bM,bN,bb,true);
}if(bN){this.__fw(bN,bM,R,false);
}
if(bM){this.__fw(bM,bN,Q,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fM=null;
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
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__fN:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(A){var B=[];
var D=this.__fN.runtime;

for(var C in A){if(!D[C]){B.push(C,t,A[C],y);
}}return B.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(H,name){var J=this.__fN;
var I;
name=J.names[name]||name;
if(J.original[name]){I=H.getAttribute(name,2);
}else if(J.property[name]){I=H[name];

if(typeof J.propertyDefault[name]!==i&&I==J.propertyDefault[name]){if(typeof J.bools[name]===i){return null;
}else{return I;
}}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
},"default":function(K,name){var M=this.__fN;
var L;
name=M.names[name]||name;
if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
}}),set:function(E,name,F){var G=this.__fN;
name=G.names[name]||name;
if(G.bools[name]){F=!!F;
}if(G.property[name]&&(!(E[name]===undefined)||G.qxProperties[name])){if(F==null){if(G.removeableProperties[name]){E.removeAttribute(name);
return;
}else if(typeof G.propertyDefault[name]!==i){F=G.propertyDefault[name];
}}E[name]=F;
}else{if(F===true){E.setAttribute(name,name);
}else if(F===false||F===null){E.removeAttribute(name);
}else{E.setAttribute(name,F);
}}},reset:function(z,name){this.set(z,name,null);
}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(k,l){var l=arguments.callee.base.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.detail=k.detail;
l.srcElement=k.srcElement;
return l;
},__fO:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__fO[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
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
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerWidth;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientHeight;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientHeight:q.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(r){var s=(r||window).document;
return s.documentElement.scrollTop||s.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(g){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (g||window).document.compatMode!==f;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(a);
l.style.cssText=e;
return l.style.width===c?true:false;
}else{return (k||window).document.compatMode!==f;
}},"default":function(q){return (q||window).document.compatMode!==f;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fP:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__fP(o);
},"gecko":function(E){E.__fP(k);
},"mshtml":function(F){F.__fP(v);
},"opera":function(D){D.__fP(p);
}})});
})();
(function(){var k="qx.client",j="qx.dom.Hierarchy",i="previousSibling",h="*",g="nextSibling",f="parentNode";
qx.Class.define(j,{statics:{getNodeIndex:function(D){var E=0;

while(D&&(D=D.previousSibling)){E++;
}return E;
},getElementIndex:function(z){var A=0;
var B=qx.dom.Node.ELEMENT;

while(z&&(z=z.previousSibling)){if(z.nodeType==B){A++;
}}return A;
},getNextElementSibling:function(F){while(F&&(F=F.nextSibling)&&!qx.dom.Node.isElement(F)){continue;
}return F||null;
},getPreviousElementSibling:function(L){while(L&&(L=L.previousSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},contains:qx.core.Variant.select(k,{"webkit|mshtml|opera":function(w,x){if(qx.dom.Node.isDocument(w)){var y=qx.dom.Node.getDocument(x);
return w&&y==w;
}else if(qx.dom.Node.isDocument(x)){return false;
}else{return w.contains(x);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(u){if(!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
if(v.body.contains){return v.body.contains(u);
}if(v.compareDocumentPosition){return !!(v.compareDocumentPosition(u)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(M,N){return this.contains(N,M);
},getCommonParent:qx.core.Variant.select(k,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(l,m){if(l===m){return l;
}var n={};
var q=qx.core.ObjectRegistry;
var p,o;

while(l||m){if(l){p=q.toHashCode(l);

if(n[p]){return n[p];
}n[p]=l;
l=l.parentNode;
}
if(m){o=q.toHashCode(m);

if(n[o]){return n[o];
}n[o]=m;
m=m.parentNode;
}}return null;
}}),getAncestors:function(r){return this._recursivelyCollect(r,f);
},getChildElements:function(a){a=a.firstChild;

if(!a){return [];
}var b=this.getNextSiblings(a);

if(a.nodeType===1){b.unshift(a);
}return b;
},getDescendants:function(c){return qx.lang.Array.fromCollection(c.getElementsByTagName(h));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(t){t=t.lastChild;

while(t&&t.nodeType!=1){t=t.previousSibling;
}return t;
},getPreviousSiblings:function(s){return this._recursivelyCollect(s,i);
},getNextSiblings:function(V){return this._recursivelyCollect(V,g);
},_recursivelyCollect:function(H,I){var J=[];

while(H=H[I]){if(H.nodeType==1){J.push(H);
}}return J;
},getSiblings:function(C){return this.getPreviousSiblings(C).reverse().concat(this.getNextSiblings(C));
},isEmpty:function(G){G=G.firstChild;

while(G){if(G.nodeType===qx.dom.Node.ELEMENT||G.nodeType===qx.dom.Node.TEXT){return false;
}G=G.nextSibling;
}return true;
},cleanWhitespace:function(Q){var R=Q.firstChild;

while(R){var S=R.nextSibling;

if(R.nodeType==3&&!/\S/.test(R.nodeValue)){Q.removeChild(R);
}R=S;
}}}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h){arguments.callee.base.call(this,true,g);

if(h){this._native=h.getNativeEvent()||null;
this._originalTarget=h.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(m);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(j){this.getManager().addType(j);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(i){return this.getManager().supportsType(i);
},supportsAction:function(n){return this.getManager().supportsAction(n);
},addData:function(k,l){this.getManager().addData(k,l);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(o,p){arguments.callee.base.call(this,o);
this.__fS=o.getWindow();
this.__fT=p;
o.addListener(this.__fS,f,this.releaseCapture,this);
o.addListener(this.__fS,e,this.releaseCapture,this);
o.addListener(this.__fS,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fT:null,__fU:null,__fV:true,__fS:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(q,event,r){return (this.__fU&&this.__fW[r]);
},dispatchEvent:function(s,event,t){if(t==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fV||!qx.dom.Hierarchy.contains(this.__fU,s)){s=this.__fU;
}arguments.callee.base.call(this,s,event,t);
},__fW:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fU===l&&this.__fV==m){return;
}
if(this.__fU){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,h,function(){qx.bom.Event.removeNativeListener(l,h,arguments.callee);
self.releaseCapture();
});
}this.__fV=m;
this.__fU=l;
this.__fT.fireEvent(l,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fU;
},releaseCapture:function(){var u=this.__fU;

if(!u){return;
}this.__fU=null;
this.__fT.fireEvent(u,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fU=this.__fS=this.__fT=null;
},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(n,b);

if(y){var A=h;
A+=y;

if(x){A+=f+x+o;
}A+=k;
z.loadXML(A);
}return z;
},"default":function(v,w){return document.implementation.createDocument(v||q,w||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(E){var F=qx.xml.Document.create();
F.loadXML(E);
return F;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(s){if(qx.core.Variant.isSet(r,p)){var t=[a,j];
var u=[c,g];

for(var i=0,l=t.length;i<l;i++){try{new ActiveXObject(t[i]);
new ActiveXObject(u[i]);
}catch(D){continue;
}s.DOMDOC=t[i];
s.XMLHTTP=u[i];
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
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
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
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
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var u="",r="qx.client",q="hidden",p="-moz-scrollbars-none",o="overflow",n=";",m="overflowY",l=":",k="overflowX",j="overflow:",G="none",F="scroll",E="borderLeftStyle",D="borderRightStyle",C="div",B="borderRightWidth",A="overflow-y",z="borderLeftWidth",y="-moz-scrollbars-vertical",x="100px",v="qx.bom.element.Overflow",w="overflow-x";
qx.Class.define(v,{statics:{__fX:null,getScrollbarWidth:function(){if(this.__fX!==null){return this.__fX;
}var V=qx.bom.element.Style;
var X=function(a,b){return parseInt(V.get(a,b))||0;
};
var Y=function(bE){return (V.get(bE,D)==G?0:X(bE,B));
};
var W=function(bH){return (V.get(bH,E)==G?0:X(bH,z));
};
var bb=qx.core.Variant.select(r,{"mshtml":function(R){if(V.get(R,m)==q||R.clientWidth==0){return Y(R);
}return Math.max(0,R.offsetWidth-R.clientLeft-R.clientWidth);
},"default":function(bh){if(bh.clientWidth==0){var bi=V.get(bh,o);
var bj=(bi==F||bi==y?16:0);
return Math.max(0,Y(bh)+bj);
}return Math.max(0,(bh.offsetWidth-bh.clientWidth-W(bh)));
}});
var ba=function(bL){return bb(bL)-Y(bL);
};
var t=document.createElement(C);
var s=t.style;
s.height=s.width=x;
s.overflow=F;
document.body.appendChild(t);
var c=ba(t);
this.__fX=c?c:16;
document.body.removeChild(t);
return this.__fX;
},_compile:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk,bl){if(bl==q){bl=p;
}return j+bl+n;
}:
function(T,U){return T+l+U+n;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return j+bd+n;
}:
function(bx,by){return bx+l+by+n;
},"default":function(bU,bV){return bU+l+bV+n;
}}),compileX:function(d){return this._compile(w,d);
},compileY:function(bW){return this._compile(A,bW);
},getX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){var g=qx.bom.element.Style.get(e,o,f,false);

if(g===p){g=q;
}return g;
}:
function(h,i){return qx.bom.element.Style.get(h,k,i,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bF,bG){return qx.bom.element.Style.get(bF,o,bG,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,k,cf,false);
},"default":function(O,P){return qx.bom.element.Style.get(O,k,P,false);
}}),setX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bv,bw){if(bw==q){bw=p;
}bv.style.overflow=bw;
}:
function(bO,bP){bO.style.overflowX=bP;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bm,bn){bm.style.overflow=bn;
}:
function(bM,bN){bM.style.overflowX=bN;
},"default":function(br,bs){br.style.overflowX=bs;
}}),resetX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L){L.style.overflow=u;
}:
function(Q){Q.style.overflowX=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=u;
}:
function(bS,bT){bS.style.overflowX=u;
},"default":function(bq){bq.style.overflowX=u;
}}),getY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be,bf){var bg=qx.bom.element.Style.get(be,o,bf,false);

if(bg===p){bg=q;
}return bg;
}:
function(bt,bu){return qx.bom.element.Style.get(bt,m,bu,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,o,bY,false);
}:
function(bo,bp){return qx.bom.element.Style.get(bo,m,bp,false);
},"default":function(H,I){return qx.bom.element.Style.get(H,m,I,false);
}}),setY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK===q){bK=p;
}bJ.style.overflow=bK;
}:
function(ca,cb){ca.style.overflowY=cb;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bB,bC){bB.style.overflow=bC;
}:
function(bz,bA){bz.style.overflowY=bA;
},"default":function(J,K){J.style.overflowY=K;
}}),resetY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(S){S.style.overflow=u;
}:
function(bD){bD.style.overflowY=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){cc.style.overflow=u;
}:
function(bQ,bR){bQ.style.overflowY=u;
},"default":function(bI){bI.style.overflowY=u;
}})}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(F){if(!F){return t;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?w:J+v);
K=w;
}else{G=(J==null?w:K+J+v);
K=K+v;
}
if(top==null){H=(I==null?w:I+v);
top=w;
}else{H=(I==null?w:top+I+v);
top=top+v;
}return m+top+u+G+u+H+u+K+r;
},get:function(a,b){var d=qx.bom.element.Style.get(a,l,b,false);
var i,top,g,f;
var c,e;

if(typeof d===n&&d!==w&&d!==q){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(u);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===w){i=null;
}
if(top===w){top=null;
}
if(c===w){c=null;
}
if(e===w){e=null;
}if(top!=null){top=parseInt(top,10);
}
if(c!=null){c=parseInt(c,10);
}
if(e!=null){e=parseInt(e,10);
}
if(i!=null){i=parseInt(i,10);
}if(c!=null&&i!=null){g=c-i;
}else if(c!=null){g=c;
}
if(e!=null&&top!=null){f=e-top;
}else if(e!=null){f=e;
}}else{throw new Error("Could not parse clip string: "+d);
}}return {left:i||null,top:top||null,width:g||null,height:f||null};
},set:function(x,y){if(!y){x.style.clip=j;
return;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?w:C+v);
D=w;
}else{z=(C==null?w:D+C+v);
D=D+v;
}
if(top==null){A=(B==null?w:B+v);
top=w;
}else{A=(B==null?w:top+B+v);
top=top+v;
}x.style.clip=s+top+u+z+u+A+u+D+p;
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__fY:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(p){return h+(this.__fY[p]||p)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(n,o){n.style.cursor=this.__fY[o]||o;
},reset:function(q){q.style.cursor=i;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(q){if(q>=1){return m;
}
if(q<0.00001){q=0;
}return d+(q*100)+f;
},"gecko":function(B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+B+k;
}else{return i+B+k;
}},"default":function(p){if(p==1){return m;
}return i+p+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(F,G){var H=qx.bom.element.Style.get(F,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(G>=1){F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(G<0.00001){G=0;
}if(!F.currentStyle||!F.currentStyle.hasLayout){F.style.zoom=1;
}F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m)+c+G*100+e;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(C,D){if(D==1){D=m;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(n){var o=qx.bom.element.Style.get(n,j,qx.bom.element.Style.COMPUTED_MODE,false);
n.style.filter=o.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=m;
}else{E.style.opacity=m;
}},"default":function(r){r.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(s,t){var u=qx.bom.element.Style.get(s,j,t,false);

if(u){var v=u.match(/alpha\(opacity=(.*)\)/);

if(v&&v[1]){return parseFloat(v[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?g:h,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,h,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})}});
})();
(function(){var s="qx.client",r="",q="qx.debug",p="boxSizing",o="on",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",c="-moz-box-sizing",g="WebkitBoxSizing",f=";",b="-khtml-box-sizing",a="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(j,{statics:{__ga:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,h,g],"gecko":[d],"opera":[p]}),__gb:qx.core.Variant.select(s,{"mshtml":null,"webkit":[n,b,e],"gecko":[c],"opera":[n]}),__gc:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__gd:function(t){var u=this.__gc;
return u.tags[t.tagName.toLowerCase()]||u.types[t.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(I){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(z){var B=this.__gb;
var A=r;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+m+z+f;
}}return A;
}}),get:qx.core.Variant.select(s,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__gd(C)){return a;
}}return k;
},"default":function(w){var y=this.__ga;
var x;

if(y){for(var i=0,l=y.length;i<l;i++){x=qx.bom.element.Style.get(w,y[i],null,false);

if(x!=null&&x!==r){return x;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(D,E){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(F,G){var H=this.__ga;

if(H){for(var i=0,l=H.length;i<l;i++){F.style[H[i]]=G;
}}}}),reset:function(v){this.set(v,r);
}}});
})();
(function(){var j="",i="qx.client",h="user-select",g="userSelect",f="appearance",e="qx.debug",d="Invalid argument 'smart'",c="style",b="on",a="Invalid argument 'element'",L="MozUserModify",K="px",J="-webkit-appearance",I="styleFloat",H="-webkit-user-select",G="-moz-appearance",F="pixelHeight",E="MozAppearance",D=":",C="pixelTop",q="Invalid argument 'name'",r="pixelLeft",o="text-overflow",p="-moz-user-select",m="Invalid argument 'styles'",n="MozUserSelect",k="qx.bom.element.Style",l="-moz-user-modify",s="-webkit-user-modify",t="WebkitUserSelect",w="-o-text-overflow",v="pixelRight",y="cssFloat",x="pixelWidth",A="pixelBottom",z=";",u="WebkitUserModify",B="WebkitAppearance";
qx.Class.define(k,{statics:{__ge:{styleNames:{"float":qx.core.Variant.select(i,{"mshtml":I,"default":y}),"appearance":qx.core.Variant.select(i,{"gecko":E,"webkit":B,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":n,"webkit":t,"default":g}),"userModify":qx.core.Variant.select(i,{"gecko":L,"webkit":u,"default":g})},cssNames:{"appearance":qx.core.Variant.select(i,{"gecko":G,"webkit":J,"default":f}),"userSelect":qx.core.Variant.select(i,{"gecko":p,"webkit":H,"default":h}),"userModify":qx.core.Variant.select(i,{"gecko":l,"webkit":s,"default":h}),"textOverflow":qx.core.Variant.select(i,{"opera":w,"default":o})},mshtmlPixel:{width:x,height:F,left:r,right:v,top:C,bottom:A},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__gf:{},compile:function(bu){var by=[];
var bC=this.__ge;
var bB=bC.special;
var bz=bC.cssNames;
var bx=this.__gf;
var bA=qx.lang.String;
var name,bw,bv;

for(name in bu){bv=bu[name];

if(bv==null){continue;
}name=bz[name]||name;
if(bB[name]){by.push(bB[name].compile(bv));
}else{bw=bx[name];

if(!bw){bw=bx[name]=bA.hyphenate(name);
}by.push(bw,D,bv,z);
}}return by.join(j);
},setCss:qx.core.Variant.select(i,{"mshtml":function(S,T){S.style.cssText=T;
},"default":function(be,bf){be.setAttribute(c,bf);
}}),getCss:qx.core.Variant.select(i,{"mshtml":function(bk){return bk.style.cssText.toLowerCase();
},"default":function(bt){return bt.getAttribute(c);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bg,name,bh,bi){if(qx.core.Variant.isSet(e,b)){qx.core.Assert.assertElement(bg,a);
qx.core.Assert.assertString(name,q);

if(bi!==undefined){qx.core.Assert.assertBoolean(bi,d);
}}var bj=this.__ge;
name=bj.styleNames[name]||name;
if(bi!==false&&bj.special[name]){return bj.special[name].set(bg,bh);
}else{bg.style[name]=bh!==null?bh:j;
}},setStyles:function(U,V,W){if(qx.core.Variant.isSet(e,b)){qx.core.Assert.assertElement(U,a);
qx.core.Assert.assertMap(V,m);

if(W!==undefined){qx.core.Assert.assertBoolean(W,d);
}}var bd=this.__ge;
var ba=bd.styleNames;
var bc=bd.special;
var X=U.style;

for(var bb in V){var Y=V[bb];
var name=ba[bb]||bb;

if(Y===undefined){if(W!==false&&bc[name]){bc[name].reset(U);
}else{X[name]=j;
}}else{if(W!==false&&bc[name]){bc[name].set(U,Y);
}else{X[name]=Y!==null?Y:j;
}}}},reset:function(bD,name,bE){var bF=this.__ge;
name=bF.styleNames[name]||name;
if(bE!==false&&bF.special[name]){return bF.special[name].reset(bD);
}else{bD.style[name]=j;
}},get:qx.core.Variant.select(i,{"mshtml":function(bl,name,bm,bn){var bs=this.__ge;
name=bs.styleNames[name]||name;
if(bn!==false&&bs.special[name]){return bs.special[name].get(bl,bm);
}if(!bl.currentStyle){return bl.style[name]||j;
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||j;
case this.CASCADED_MODE:return bl.currentStyle[name]||j;
default:var br=bl.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(br)){return br;
}var bq=bs.mshtmlPixel[name];

if(bq){var bo=bl.style[name];
bl.style[name]=br||0;
var bp=bl.style[bq]+K;
bl.style[name]=bo;
return bp;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(br)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return br;
}},"default":function(M,name,N,O){var R=this.__ge;
name=R.styleNames[name]||name;
if(O!==false&&R.special[name]){return R.special[name].get(M,N);
}switch(N){case this.LOCAL_MODE:return M.style[name]||j;
case this.CASCADED_MODE:if(M.currentStyle){return M.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var P=qx.dom.Node.getDocument(M);
var Q=P.defaultView.getComputedStyle(M,null);
return Q?Q[name]:j;
}}})}});
})();
(function(){var bb="borderTopWidth",ba="borderLeftWidth",Y="marginTop",X="marginLeft",W="scroll",V="qx.client",U="border-box",T="borderBottomWidth",S="borderRightWidth",R="auto",bq="padding",bp="qx.bom.element.Location",bo="paddingLeft",bn="static",bm="marginBottom",bl="visible",bk="BODY",bj="paddingBottom",bi="paddingTop",bh="marginRight",bf="position",bg="margin",bd="overflow",be="paddingRight",bc="border";
qx.Class.define(bp,{statics:{__gg:function(N,O){return qx.bom.element.Style.get(N,O,qx.bom.element.Style.COMPUTED_MODE,false);
},__gh:function(i,j){return parseInt(qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gi:function(bv){var by=0,top=0;
if(bv.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bx=qx.dom.Node.getWindow(bv);
by-=qx.bom.Viewport.getScrollLeft(bx);
top-=qx.bom.Viewport.getScrollTop(bx);
}else{var bw=qx.dom.Node.getDocument(bv).body;
bv=bv.parentNode;
while(bv&&bv!=bw){by+=bv.scrollLeft;
top+=bv.scrollTop;
bv=bv.parentNode;
}}return {left:by,top:top};
},__gj:qx.core.Variant.select(V,{"mshtml":function(bz){var bB=qx.dom.Node.getDocument(bz);
var bA=bB.body;
var bC=0;
var top=0;
bC-=bA.clientLeft+bB.documentElement.clientLeft;
top-=bA.clientTop+bB.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bC+=this.__gh(bA,ba);
top+=this.__gh(bA,bb);
}return {left:bC,top:top};
},"webkit":function(J){var L=qx.dom.Node.getDocument(J);
var K=L.body;
var M=K.offsetLeft;
var top=K.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){M+=this.__gh(K,ba);
top+=this.__gh(K,bb);
}return {left:M,top:top};
},"gecko":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bP+=this.__gh(bO,X);
top+=this.__gh(bO,Y);
}if(qx.bom.element.BoxSizing.get(bO)!==U){bP+=this.__gh(bO,ba);
top+=this.__gh(bO,bb);
}return {left:bP,top:top};
},"default":function(bD){var bE=qx.dom.Node.getDocument(bD).body;
var bF=bE.offsetLeft;
var top=bE.offsetTop;
return {left:bF,top:top};
}}),__gk:qx.core.Variant.select(V,{"mshtml|webkit":function(bI){var bK=qx.dom.Node.getDocument(bI);
if(bI.getBoundingClientRect){var bL=bI.getBoundingClientRect();
var bM=bL.left;
var top=bL.top;
}else{var bM=bI.offsetLeft;
var top=bI.offsetTop;
bI=bI.offsetParent;
var bJ=bK.body;
while(bI&&bI!=bJ){bM+=bI.offsetLeft;
top+=bI.offsetTop;
bM+=this.__gh(bI,ba);
top+=this.__gh(bI,bb);
bI=bI.offsetParent;
}}return {left:bM,top:top};
},"gecko":function(u){if(u.getBoundingClientRect){var x=u.getBoundingClientRect();
var y=Math.round(x.left);
var top=Math.round(x.top);
}else{var y=0;
var top=0;
var v=qx.dom.Node.getDocument(u).body;
var w=qx.bom.element.BoxSizing;

if(w.get(u)!==U){y-=this.__gh(u,ba);
top-=this.__gh(u,bb);
}
while(u&&u!==v){y+=u.offsetLeft;
top+=u.offsetTop;
if(w.get(u)!==U){y+=this.__gh(u,ba);
top+=this.__gh(u,bb);
}if(u.parentNode&&this.__gg(u.parentNode,bd)!=bl){y+=this.__gh(u.parentNode,ba);
top+=this.__gh(u.parentNode,bb);
}u=u.offsetParent;
}}return {left:y,top:top};
},"default":function(d){var f=0;
var top=0;
var e=qx.dom.Node.getDocument(d).body;
while(d&&d!==e){f+=d.offsetLeft;
top+=d.offsetTop;
d=d.offsetParent;
}return {left:f,top:top};
}}),get:function(A,B){if(A.tagName==bk){var location=this.__gl(A);
var I=location.left;
var top=location.top;
}else{var C=this.__gj(A);
var H=this.__gk(A);
var scroll=this.__gi(A);
var I=H.left+C.left-scroll.left;
var top=H.top+C.top-scroll.top;
}var D=I+A.offsetWidth;
var E=top+A.offsetHeight;

if(B){if(B==bq||B==W){var F=qx.bom.element.Overflow.getX(A);

if(F==W||F==R){D+=A.scrollWidth-A.offsetWidth+this.__gh(A,ba)+this.__gh(A,S);
}var G=qx.bom.element.Overflow.getY(A);

if(G==W||G==R){E+=A.scrollHeight-A.offsetHeight+this.__gh(A,bb)+this.__gh(A,T);
}}
switch(B){case bq:I+=this.__gh(A,bo);
top+=this.__gh(A,bi);
D-=this.__gh(A,be);
E-=this.__gh(A,bj);
case W:I-=A.scrollLeft;
top-=A.scrollTop;
D-=A.scrollLeft;
E-=A.scrollTop;
case bc:I+=this.__gh(A,ba);
top+=this.__gh(A,bb);
D-=this.__gh(A,S);
E-=this.__gh(A,T);
break;
case bg:I-=this.__gh(A,X);
top-=this.__gh(A,Y);
D+=this.__gh(A,bh);
E+=this.__gh(A,bm);
break;
}}return {left:I,top:top,right:D,bottom:E};
},__gl:qx.core.Variant.select(V,{"default":function(bt){var top=bt.offsetTop+this.__gh(bt,Y);
var bu=bt.offsetLeft+this.__gh(bt,X);
return {left:bu,top:top};
},"mshtml":function(s){var top=s.offsetTop;
var t=s.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gh(s,Y);
t+=this.__gh(s,X);
}return {left:t,top:top};
},"gecko":function(bG){var top=bG.offsetTop+this.__gh(bG,Y)+this.__gh(bG,ba);
var bH=bG.offsetLeft+this.__gh(bG,X)+this.__gh(bG,bb);
return {left:bH,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(br,bs){return this.get(br,bs).top;
},getRight:function(g,h){return this.get(g,h).right;
},getBottom:function(P,Q){return this.get(P,Q).bottom;
},getRelative:function(m,n,o,p){var r=this.get(m,o);
var q=this.get(n,p);
return {left:r.left-q.left,top:r.top-q.top,right:r.right-q.right,bottom:r.bottom-q.bottom};
},getPosition:function(z){return this.getRelative(z,this.getOffsetParent(z));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,bf)===bn)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(bx){return bx.selection;
},"default":function(bi){return qx.dom.Node.getWindow(bi).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(G){var H=qx.bom.Range.get(qx.dom.Node.getDocument(G));
return H.text;
},"default":function(a){if(this.__gm(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(m){var o=this.get(m);
var n=qx.util.StringSplit.split(o,/\r\n/);
return o.length-(n.length-1);
},"opera":function(A){var F,D,B;

if(this.__gm(A)){var E=A.selectionStart;
var C=A.selectionEnd;
F=A.value.substring(E,C);
D=C-E;
}else{F=qx.bom.Selection.get(A);
D=F.length;
}B=qx.util.StringSplit.split(F,/\r\n/);
return D-(B.length-1);
},"default":function(v){if(this.__gm(v)){return v.selectionEnd-v.selectionStart;
}else{return this.get(v).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(J){if(this.__gm(J)){var O=qx.bom.Range.get();
if(!J.contains(O.parentElement())){return -1;
}var P=qx.bom.Range.get(J);
var N=J.value.length;
P.moveToBookmark(O.getBookmark());
P.moveEnd(f,N);
return N-P.text.length;
}else{var P=qx.bom.Range.get(J);
var L=P.parentElement();
var Q=qx.bom.Range.get();
Q.moveToElementText(L);
var K=qx.bom.Range.get(qx.dom.Node.getBodyElement(J));
K.setEndPoint(g,P);
K.setEndPoint(j,Q);
if(Q.compareEndPoints(g,K)==0){return 0;
}var M;
var R=0;

while(true){M=K.moveStart(k,-1);
if(Q.compareEndPoints(g,K)==0){break;
}if(M==0){break;
}else{R++;
}}return ++R;
}},"gecko|webkit":function(ba){if(this.__gm(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(by){if(this.__gm(by)){return by.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(by)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(bn){if(this.__gm(bn)){var bs=qx.bom.Range.get();
if(!bn.contains(bs.parentElement())){return -1;
}var bt=qx.bom.Range.get(bn);
var br=bn.value.length;
bt.moveToBookmark(bs.getBookmark());
bt.moveStart(f,-br);
return bt.text.length;
}else{var bt=qx.bom.Range.get(bn);
var bp=bt.parentElement();
var bu=qx.bom.Range.get();
bu.moveToElementText(bp);
var br=bu.text.length;
var bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bn));
bo.setEndPoint(j,bt);
bo.setEndPoint(g,bu);
if(bu.compareEndPoints(j,bo)==0){return br-1;
}var bq;
var bv=0;

while(true){bq=bo.moveEnd(k,1);
if(bu.compareEndPoints(j,bo)==0){break;
}if(bq==0){break;
}else{bv++;
}}return br-(++bv);
}},"gecko|webkit":function(bj){if(this.__gm(bj)){return bj.selectionEnd;
}else{var bl=qx.dom.Node.getDocument(bj);
var bk=this.getSelectionObject(bl);
if(bk.focusOffset>bk.anchorOffset){return bk.focusOffset;
}else{return bk.anchorOffset;
}}},"default":function(bm){if(this.__gm(bm)){return bm.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bm)).focusOffset;
}}}),__gm:function(I){return qx.dom.Node.isElement(I)&&(I.nodeName.toLowerCase()==i||I.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(bd,be,bf){var bg;
if(qx.dom.Node.isDocument(bd)){bd=bd.body;
}
if(qx.dom.Node.isElement(bd)||qx.dom.Node.isText(bd)){switch(bd.nodeName.toLowerCase()){case i:case h:case d:if(bf===undefined){bf=bd.value.length;
}
if(be>=0&&be<=bd.value.length&&bf>=0&&bf<=bd.value.length){bg=qx.bom.Range.get(bd);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
case c:if(bf===undefined){bf=bd.nodeValue.length;
}
if(be>=0&&be<=bd.nodeValue.length&&bf>=0&&bf<=bd.nodeValue.length){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.parentNode);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
default:if(bf===undefined){bf=bd.childNodes.length-1;
}if(bd.childNodes[be]&&bd.childNodes[bf]){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.childNodes[be]);
bg.collapse(true);
var bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bh.moveToElementText(bd.childNodes[bf]);
bg.setEndPoint(j,bh);
bg.select();
return true;
}}}return false;
},"default":function(S,T,U){var Y=S.nodeName.toLowerCase();

if(qx.dom.Node.isElement(S)&&(Y==i||Y==h)){if(U===undefined){U=S.value.length;
}if(T>=0&&T<=S.value.length&&U>=0&&U<=S.value.length){S.focus();
S.select();
S.setSelectionRange(T,U);
return true;
}}else{var W=false;
var X=qx.dom.Node.getWindow(S).getSelection();
var V=qx.bom.Range.get(S);
if(qx.dom.Node.isText(S)){if(U===undefined){U=S.length;
}
if(T>=0&&T<S.length&&U>=0&&U<=S.length){W=true;
}}else if(qx.dom.Node.isElement(S)){if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}else if(qx.dom.Node.isDocument(S)){S=S.body;

if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}
if(W){if(!X.isCollapsed){X.collapseToStart();
}V.setStart(S,T);
if(qx.dom.Node.isText(S)){V.setEnd(S,U);
}else{V.setEndAfter(S.childNodes[U]);
}if(X.rangeCount>0){X.removeAllRanges();
}X.addRange(V);
return true;
}}return false;
}}),setAll:function(bw){return qx.bom.Selection.set(bw,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(w){var x=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(w));
var y=qx.bom.Range.get(w);
var parent=y.parentElement();
var z=qx.bom.Range.get(qx.dom.Node.getDocument(w));
if(parent==z.parentElement()&&parent==w){x.empty();
}},"default":function(p){var r=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p));
var t=p.nodeName.toLowerCase();
if(qx.dom.Node.isElement(p)&&(t==i||t==h)){p.setSelectionRange(0,0);
qx.bom.Element.blur(p);
}else if(qx.dom.Node.isDocument(p)||t==b){r.collapse(p.body?p.body:p,0);
}else{var s=qx.bom.Range.get(p);

if(!s.collapsed){var u;
var q=s.commonAncestorContainer;
if(qx.dom.Node.isElement(p)&&qx.dom.Node.isText(q)){u=q.parentNode;
}else{u=q;
}
if(u==p){r.collapse(p,0);
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
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Class.define(c,{statics:{split:function(g,h,k){var n=f;
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
qx.Class.define(b,{statics:{__gn:{},remove:function(e){delete this.__gn[e.$$hash];
},add:function(c){var d=this.__gn;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gn;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gn={};
}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__go:{},__gp:{},remove:function(i){var j=i.$$hash;
delete this.__gp[j];
delete this.__go[j];
},isVisible:function(h){return this.__gp[h.$$hash]||false;
},__gq:function(m){var o=this.__gp;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__gq(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(k){var l=this.__go;

if(l[k.$$hash]){return;
}l[k.$$hash]=k;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var a=this.__go;
var e=this.__gp;
for(var b in a){if(e[b]!=null){a[b].addChildrenToQueue(a);
}}var d={};

for(var b in a){d[b]=e[b];
e[b]=null;
}for(var b in a){var c=a[b];
delete a[b];
if(e[b]==null){this.__gq(c);
}if(e[b]&&e[b]!=d[b]){c.checkAppearanceNeeds();
}}this.__go={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gr:{},remove:function(c){delete this.__gr[c.$$hash];
},add:function(i){var j=this.__gr;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(d){return !!this.__gr[d.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__gr;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gs:{},add:function(c){var d=this.__gs;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__gs;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__gs={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){arguments.callee.base.call(this);
this.__gF=g;
this.__gG=h||g.toHashCode();
this.useMarkup(g.getMarkup());
var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}this.setStyles(i);
},members:{__gG:null,__gF:null,getId:function(){return this.__gG;
},getDecorator:function(){return this.__gF;
},resize:function(e,f){this.__gF.resize(this.getDomElement(),e,f);
},tint:function(d){this.__gF.tint(this.getDomElement(),d);
},getInsets:function(){return this.__gF.getInsets();
}},destruct:function(){this.__gF=null;
}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gH=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gH:null,__gI:{focusin:1,focusout:1,focus:1,blur:1},__gJ:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(k){var q=k.getTarget();
var p=qx.ui.core.Widget.getWidgetByElement(q);
var r=false;

while(p&&p.isAnonymous()){var r=true;
p=p.getLayoutParent();
}if(p&&r&&k.getType()==a){p.getContainerElement().activate();
}if(this.__gI[k.getType()]){p=p&&p.getFocusTarget();
if(!p){return;
}}if(k.getRelatedTarget){var y=k.getRelatedTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}
if(x){if(this.__gI[k.getType()]){x=x.getFocusTarget();
}if(x===p){return;
}}}var t=k.getCurrentTarget();
var v=qx.ui.core.Widget.getWidgetByElement(t);

if(!v||v.isAnonymous()){return;
}if(this.__gI[k.getType()]){v=v.getFocusTarget();
}var w=k.getType();

if(!v||!(v.isEnabled()||this.__gJ[w])){return;
}var m=k.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__gH.getListeners(v,w,m);

if(!s||s.length===0){return;
}var n=qx.event.Pool.getInstance().getObject(k.constructor);
k.clone(n);
n.setTarget(p);
n.setRelatedTarget(x||null);
n.setCurrentTarget(v);
var z=k.getOriginalTarget();

if(z){var o=qx.ui.core.Widget.getWidgetByElement(z);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}n.setOriginalTarget(o);
}else{n.setOriginalTarget(q);
}for(var i=0,l=s.length;i<l;i++){var u=s[i].context||v;
s[i].handler.call(u,n);
}if(n.getPropagationStopped()){k.stopPropagation();
}
if(n.getDefaultPrevented()){k.preventDefault();
}qx.event.Pool.getInstance().poolObject(n);
},registerEvent:function(A,B,C){var D;

if(B===e||B===f){D=A.getFocusElement();
}else if(B===c||B===d){D=A.getContentElement();
}else{D=A.getContainerElement();
}
if(D){D.addListener(B,this._dispatchEvent,this,C);
}},unregisterEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.removeListener(F,this._dispatchEvent,this,G);
}}},destruct:function(){this.__gH=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__ie:null,_invalidChildrenCache:null,__if:null,invalidateLayoutCache:function(){this.__ie=null;
},renderLayout:function(i,j){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ie){return this.__ie;
}return this.__ie=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(h){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(d,name,e){},"off":null}),_clearSeparators:function(){var f=this.__if;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(k,l){this.__if.renderSeparator(k,l);
},connectToWidget:function(g){if(g&&this.__if){throw new Error("It is not possible to manually set the connected widget.");
}this.__if=g;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__if;
},_applyLayoutChange:function(){if(this.__if){this.__if.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__if.getLayoutChildren();
}},destruct:function(){this.__if=this.__ie=null;
}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__gK:qx.$$resources||{},__gL:{}},members:{has:function(y){return !!arguments.callee.self.__gK[y];
},getData:function(B){return arguments.callee.self.__gK[B]||null;
},getImageWidth:function(w){var x=arguments.callee.self.__gK[w];
return x?x[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__gK[z];
return A?A[1]:null;
},getImageFormat:function(k){var l=arguments.callee.self.__gK[k];
return l?l[2]:null;
},isClippedImage:function(i){var j=arguments.callee.self.__gK[i];
return j&&j.length>4;
},toUri:function(m){if(m==null){return m;
}var n=arguments.callee.self.__gK[m];

if(!n){return m;
}
if(typeof n===c){var p=n;
}else{var p=n[3];
if(!p){return m;
}}var o=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){o=arguments.callee.self.__gL[p];
}return o+qx.$$libraries[p].resourceUri+h+m;
}},defer:function(q){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var u in qx.$$libraries){var s;

if(qx.$$libraries[u].resourceUri){s=qx.$$libraries[u].resourceUri;
}else{q.__gL[u]=f;
continue;
}if(s.match(/^\/\//)!=null){q.__gL[u]=window.location.protocol;
}else if(s.match(/^\.\//)!=null){var r=document.URL;
q.__gL[u]=r.substring(0,r.lastIndexOf(h)+1);
}else if(s.match(/^http/)!=null){}else{var v=window.location.href.indexOf(d);
var t;

if(v==-1){t=window.location.href;
}else{t=window.location.href.substring(0,v);
}q.__gL[u]=t.substring(0,t.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__gM:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__gM();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(B){var B=B||v;
this.__gN=B;
this.length=B.length;
},members:{$$isString:true,length:0,__gN:null,toString:function(){return this.__gN;
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
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__gO=c;
this.__gP=d;
},members:{__gO:null,__gP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gO,this.__gP);
}}});
})();
(function(){var k="_",j="",h="qx.dynlocale",g="on",f="_applyLocale",e="changeLocale",d="C",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gQ=qx.$$translations||{};
this.__gR=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.setLocale(l||this.__gS);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(bd,be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,2);
return qx.locale.Manager.getInstance().translate(be,bg);
},marktr:function(w){return w;
}},properties:{locale:{check:b,nullable:true,apply:f,event:e}},members:{__gS:d,__gT:null,__gU:null,__gQ:null,__gR:null,getLanguage:function(){return this.__gU;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var X=[];

for(var W in this.__gR){if(W!=this.__gS){X.push(W);
}}return X;
},__gV:function(P){var R;
var Q=P.indexOf(k);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(x,y){this.__gT=x;
this.__gU=this.__gV(x);
},addTranslation:function(S,T){var U=this.__gQ;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(Y,ba){var bb=this.__gR;

if(bb[Y]){for(var bc in ba){bb[Y][bc]=ba[bc];
}}else{bb[Y]=ba;
}},translate:function(H,I,J){var O;
var M=this.__gQ;

if(!M){return H;
}
if(J){var L=this.__gV(J);
}else{J=this.__gT;
L=this.__gU;
}
if(!O&&M[J]){O=M[J][H];
}
if(!O&&M[L]){O=M[L][H];
}
if(!O&&M[this.__gS]){O=M[this.__gS][H];
}
if(!O){O=H;
}
if(I.length>0){var K=[];

for(var i=0;i<I.length;i++){var N=I[i];

if(N&&N.translate){K[i]=N.translate();
}else{K[i]=N;
}}O=qx.lang.String.format(O,K);
}
if(qx.core.Variant.isSet(h,g)){O=new qx.locale.LocalizedString(O,H,I);
}return O;
},localize:function(z,A,B){var G;
var E=this.__gR;

if(!E){return z;
}
if(B){var D=this.__gV(B);
}else{B=this.__gT;
D=this.__gU;
}
if(!G&&E[B]){G=E[B][z];
}
if(!G&&E[D]){G=E[D][z];
}
if(!G&&E[this.__gS]){G=E[this.__gS][z];
}
if(!G){G=z;
}
if(A.length>0){var C=[];

for(var i=0;i<A.length;i++){var F=A[i];

if(F.translate){C[i]=F.translate();
}else{C[i]=F;
}}G=qx.lang.String.format(G,C);
}
if(qx.core.Variant.isSet(h,g)){G=new qx.locale.LocalizedString(G,z,A);
}return G;
}},destruct:function(){this.__gQ=this.__gR=null;
}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{_applyProperty:function(name,q){arguments.callee.base.call(this,name,q);

if(name===j){var u=this.getDomElement();
var r=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){r.backgroundPosition=null;
r.backgroundRepeat=null;
}var s=this._getProperty(j);
var t=this._getProperty(i);
var v=t?i:h;
qx.bom.element.Decoration.update(u,s,v,r);
}},_createDomElement:function(){var n=this._getProperty(i);
var o=n?i:h;

if(qx.core.Variant.isSet(g,f)){var m=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(o,m));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(o));
}return arguments.callee.base.call(this);
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(j,l);
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
(function(){var q="px",p="qx.client",o="div",n="img",m="",l="no-repeat",k="qx.debug",j="scale-x",i="mshtml",h="on",N="repeat",M="scale",L="scale-y",K="qx/icon",J=".png",I="crop",H="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",G='<div style="',F="repeat-y",E='<img src="',x="qx.bom.element.Decoration",y="', sizingMethod='",v="png",w="')",t='"></div>',u='"/>',r='" style="',s="none",z="webkit",A=" ",C="repeat-x",B="DXImageTransform.Microsoft.AlphaImageLoader",D="absolute";
qx.Class.define(x,{statics:{DEBUG:false,__gW:{},__gX:qx.core.Variant.isSet(p,i),__gY:qx.core.Variant.select(p,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ha:{"scale-x":n,"scale-y":n,"scale":n,"repeat":o,"no-repeat":o,"repeat-x":o,"repeat-y":o},update:function(bU,bV,bW,bX){var ca=this.getTagName(bW,bV);

if(ca!=bU.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var cb=this.getAttributes(bV,bW,bX);

if(ca===n){bU.src=cb.src;
}if(bU.style.backgroundPosition!=m&&cb.style.backgroundPosition===undefined){cb.style.backgroundPosition=null;
}if(bU.style.clip!=m&&cb.style.clip===undefined){cb.style.clip=null;
}var bY=qx.bom.element.Style;
bY.setStyles(bU,cb.style);
if(this.__gX){try{bU.filters[B].apply();
}catch(e){}}},create:function(bE,bF,bG){var bH=this.getTagName(bF,bE);
var bJ=this.getAttributes(bE,bF,bG);
var bI=qx.bom.element.Style.compile(bJ.style);

if(bH===n){return E+bJ.src+r+bI+u;
}else{return G+bI+t;
}},getTagName:function(bS,bT){if(qx.core.Variant.isSet(p,i)){if(bT&&this.__gX&&this.__gY[bS]&&qx.lang.String.endsWith(bT,J)){return o;
}}return this.__ha[bS];
},getAttributes:function(O,P,Q){if(!Q){Q={};
}
if(!Q.position){Q.position=D;
}
if(qx.core.Variant.isSet(p,i)){Q.fontSize=0;
Q.lineHeight=0;
}else if(qx.core.Variant.isSet(p,z)){Q.WebkitUserDrag=s;
}var S=qx.util.ResourceManager.getInstance().getImageFormat(O)||qx.io.ImageLoader.getFormat(O);

if(qx.core.Variant.isSet(k,h)){if(O!=null&&S==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+O+"'!");
}}var R;
if(this.__gX&&this.__gY[P]&&S===v){R=this.__hd(Q,P,O);
}else{if(P===M){R=this.__he(Q,P,O);
}else if(P===j||P===L){R=this.__hf(Q,P,O);
}else{R=this.__hi(Q,P,O);
}}return R;
},__hb:function(by,bz,bA){if(by.width==null&&bz!=null){by.width=bz+q;
}
if(by.height==null&&bA!=null){by.height=bA+q;
}return by;
},__hc:function(bB){var bC=qx.util.ResourceManager.getInstance().getImageWidth(bB)||qx.io.ImageLoader.getWidth(bB);
var bD=qx.util.ResourceManager.getInstance().getImageHeight(bB)||qx.io.ImageLoader.getHeight(bB);
return {width:bC,height:bD};
},__hd:function(a,b,c){var g=this.__hc(c);
a=this.__hb(a,g.width,g.height);
var f=b==l?I:M;
var d=H+qx.util.ResourceManager.getInstance().toUri(c)+y+f+w;
a.filter=d;
a.backgroundImage=a.backgroundRepeat=m;
return {style:a};
},__he:function(bi,bj,bk){var bl=qx.util.ResourceManager.getInstance().toUri(bk);
var bm=this.__hc(bk);
bi=this.__hb(bi,bm.width,bm.height);
return {src:bl,style:bi};
},__hf:function(bK,bL,bM){var bQ=qx.util.ResourceManager.getInstance();
var bP=bQ.isClippedImage(bM);
var bR=this.__hc(bM);

if(bP){var bO=bQ.getData(bM);
var bN=bQ.toUri(bO[4]);

if(bL===j){bK=this.__hg(bK,bO,bR.height);
}else{bK=this.__hh(bK,bO,bR.width);
}return {src:bN,style:bK};
}else{if(qx.core.Variant.isSet(k,h)){this.__hk(bM);
}
if(bL==j){bK.height=bR.height==null?null:bR.height+q;
}else if(bL==L){bK.width=bR.width==null?null:bR.width+q;
}var bN=bQ.toUri(bM);
return {src:bN,style:bK};
}},__hg:function(bn,bo,bp){var bq=qx.util.ResourceManager.getInstance().getImageHeight(bo[4]);
bn.clip={top:-bo[6],height:bp};
bn.height=bq+q;
if(bn.top!=null){bn.top=(parseInt(bn.top,10)+bo[6])+q;
}else if(bn.bottom!=null){bn.bottom=(parseInt(bn.bottom,10)+bp-bq-bo[6])+q;
}return bn;
},__hh:function(bc,bd,be){var bf=qx.util.ResourceManager.getInstance().getImageWidth(bd[4]);
bc.clip={left:-bd[5],width:be};
bc.width=bf+q;
if(bc.left!=null){bc.left=(parseInt(bc.left,10)+bd[5])+q;
}else if(bc.right!=null){bc.right=(parseInt(bc.right,10)+be-bf-bd[5])+q;
}return bc;
},__hi:function(T,U,V){var bb=qx.util.ResourceManager.getInstance().isClippedImage(V);
var ba=this.__hc(V);
if(bb&&U!==N){var Y=qx.util.ResourceManager.getInstance().getData(V);
var X=qx.bom.element.Background.getStyles(Y[4],U,Y[5],Y[6]);

for(var W in X){T[W]=X[W];
}
if(ba.width!=null&&T.width==null&&(U==F||U===l)){T.width=ba.width+q;
}
if(ba.height!=null&&T.height==null&&(U==C||U===l)){T.height=ba.height+q;
}return {style:T};
}else{if(qx.core.Variant.isSet(k,h)){if(U!==N){this.__hk(V);
}}T=this.__hb(T,ba.width,ba.height);
T=this.__hj(T,V,U);
return {style:T};
}},__hj:function(br,bs,bt){var top=null;
var bx=null;

if(br.backgroundPosition){var bu=br.backgroundPosition.split(A);
bx=parseInt(bu[0]);

if(isNaN(bx)){bx=bu[0];
}top=parseInt(bu[1]);

if(isNaN(top)){top=bu[1];
}}var bw=qx.bom.element.Background.getStyles(bs,bt,bx,top);

for(var bv in bw){br[bv]=bw[bv];
}if(br.filter){br.filter=m;
}return br;
},__hk:function(bh){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bh)&&bh.indexOf(K)==-1){if(!this.__gW[bh]){qx.log.Logger.debug("Potential clipped image candidate: "+bh);
this.__gW[bh]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(p,{"mshtml":function(){return qx.bom.element.Decoration.__gX;
},"default":function(){return false;
}})}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__hl:{},__hm:{width:null,height:null},__hn:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(s){var t=this.__hl[s];
return !!(t&&t.loaded);
},isFailed:function(f){var g=this.__hl[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__hl[h];
return !!(j&&j.loading);
},getFormat:function(a){var b=this.__hl[a];
return b?b.format:null;
},getSize:function(k){var m=this.__hl[k];
return m?
{width:m.width,height:m.height}:this.__hm;
},getWidth:function(v){var w=this.__hl[v];
return w?w.width:null;
},getHeight:function(p){var q=this.__hl[p];
return q?q.height:null;
},load:function(C,D,E){var F=this.__hl[C];

if(!F){F=this.__hl[C]={};
}if(D&&!E){E=window;
}if(F.loaded||F.loading||F.failed){if(D){if(F.loading){F.callbacks.push(D,E);
}else{D.call(E,C,F);
}}}else{F.loading=true;
F.callbacks=[];

if(D){F.callbacks.push(D,E);
}var H=new Image();
var G=qx.lang.Function.listener(this.__ho,this,H,C);
H.onload=G;
H.onerror=G;
H.src=C;
}},__ho:qx.event.GlobalError.observeMethod(function(event,x,y){var z=this.__hl[y];
if(event.type===d){z.loaded=true;
z.width=this.__hp(x);
z.height=this.__hq(x);
var A=this.__hn.exec(y);

if(A!=null){z.format=A[1];
}}else{z.failed=true;
}x.onload=x.onerror=null;
var B=z.callbacks;
delete z.loading;
delete z.callbacks;
for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}),__hp:qx.core.Variant.select(e,{"gecko":function(n){return n.naturalWidth;
},"default":function(o){return o.width;
}}),__hq:qx.core.Variant.select(e,{"gecko":function(u){return u.naturalHeight;
},"default":function(r){return r.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__hr:[i,null,h,b,null,j,e,null,j],__hs:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ht:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(n,o,p,top){var q=this.__ht(p,top);
var r=qx.util.ResourceManager.getInstance().toUri(n);
var s=this.__hr;
s[1]=r;
s[4]=q;
s[7]=o;
return s.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__hs;
}var w=this.__ht(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var n="nonScaled",m="scaled",l="alphaScaled",k=".png",j="div",i="replacement",h="hidden",g="Boolean",f="px",e="http",z="changeSource",y="qx.client",x="qx.ui.basic.Image",w="qx.debug",v="-disabled.$1",u="__hC",t="String",s="_applySource",r="img",q="image",o="_applyScale",p="on";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(L){this.__hC={};
arguments.callee.base.call(this);

if(L){this.setSource(L);
}},properties:{source:{check:t,init:null,nullable:true,event:z,apply:s,themeable:true},scale:{check:g,init:false,themeable:true,apply:o},appearance:{refine:true,init:q},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hD:null,__hE:null,__hF:null,__hC:null,getContentElement:function(){return this.__hJ();
},_createContentElement:function(){return this.__hJ();
},_getContentHint:function(){return {width:this.__hD||0,height:this.__hE||0};
},_applyEnabled:function(N,O){arguments.callee.base.call(this,N,O);

if(this.getSource()){this._styleSource();
}},_applySource:function(V){this._styleSource();
},_applyScale:function(K){this._styleSource();
},__hG:function(W){this.__hF=W;
},__hH:function(){if(this.__hF==null){var Q=this.getSource();
var P=false;

if(Q!=null){P=qx.lang.String.endsWith(Q,k);
}
if(this.getScale()&&P&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hF=l;
}else if(this.getScale()){this.__hF=m;
}else{this.__hF=n;
}}return this.__hF;
},__hI:function(R){var S;
var T;

if(R==l){S=true;
T=j;
}else if(R==n){S=false;
T=j;
}else{S=true;
T=r;
}var U=new qx.html.Image(T);
U.setScale(S);
U.setStyles({"overflowX":h,"overflowY":h});
return U;
},__hJ:function(){var I=this.__hH();

if(this.__hC[I]==null){this.__hC[I]=this.__hI(I);
}return this.__hC[I];
},_styleSource:function(){var J=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!J){this.getContentElement().resetSource();
return;
}this.__hK(J);
if(qx.util.ResourceManager.getInstance().has(J)){this.__hM(this.getContentElement(),J);
}else if(qx.io.ImageLoader.isLoaded(J)){this.__hN(this.getContentElement(),J);
}else{this.__hO(this.getContentElement(),J);
}},__hK:qx.core.Variant.select(y,{"mshtml":function(A){var C=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var B=qx.lang.String.endsWith(A,k);

if(C&&B){if(this.getScale()&&this.__hH()!=l){this.__hG(l);
}else if(!this.getScale()&&this.__hH()!=n){this.__hG(n);
}}else{if(this.getScale()&&this.__hH()!=m){this.__hG(m);
}else if(!this.getScale()&&this.__hH()!=n){this.__hG(n);
}}this.__hL(this.__hJ());
},"default":function(M){if(this.getScale()&&this.__hH()!=m){this.__hG(m);
}else if(!this.getScale()&&this.__hH(n)){this.__hG(n);
}this.__hL(this.__hJ());
}}),__hL:function(bf){var bi=this.getContainerElement();
var bj=bi.getChild(0);

if(bj!=bf){if(bj!=null){var bl=f;
var bg={};
var bh=this.getInnerSize();

if(bh!=null){bg.width=bh.width+bl;
bg.height=bh.height+bl;
}var bk=this.getInsets();
bg.left=bk.left+bl;
bg.top=bk.top+bl;
bg.zIndex=10;
bf.setStyles(bg,true);
bf.setSelectable(this.getSelectable());
}bi.removeAt(0);
bi.addAt(bf,0);
}},__hM:function(bb,bc){var be=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bd=bc.replace(/\.([a-z]+)$/,v);

if(be.has(bd)){bc=bd;
this.addState(i);
}else{this.removeState(i);
}}if(bb.getSource()===bc){return;
}bb.setSource(bc);
this.__hQ(be.getImageWidth(bc),be.getImageHeight(bc));
},__hN:function(D,E){var G=qx.io.ImageLoader;
D.setSource(E);
var F=G.getWidth(E);
var H=G.getHeight(E);
this.__hQ(F,H);
},__hO:function(X,Y){var ba=qx.io.ImageLoader;

if(qx.core.Variant.isSet(w,p)){if(!qx.lang.String.startsWith(Y.toLowerCase(),e)){var self=arguments.callee.self;

if(!self.__AN){self.__AN={};
}
if(!self.__AN[Y]){this.debug("try to load a unmanaged relative image: "+Y);
self.__AN[Y]=true;
}}}if(!ba.isFailed(Y)){ba.load(Y,this.__hP,this);
}else{if(X!=null){X.resetSource();
}}},__hP:function(c,d){if(c!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(d.failed){this.warn("Image could not be loaded: "+c);
}this._styleSource();
},__hQ:function(a,b){if(a!==this.__hD||b!==this.__hE){this.__hD=a;
this.__hE=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(u);
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
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(f,this._onInterval,this);
h.start();
this.__hU=h;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__hU:null,_applyTimeoutInterval:function(g){this.__hU.setInterval(g);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__hU){this.__hU.stop();
}this.__hU=null;
}});
})();
(function(){var k="top",j="right",i="bottom",h="left",g="edge-start",f="align-start",e="align-end",d="edge-end",c="qx.util.placement.AbstractAxis",b="-",H="best-fit",G="size",F="target.bottom",E="offsets",D="size.width",C="offsets.bottom",B="qx.util.placement.Placement",A="qx.debug",z="keep-align",y="target.right",r="direct",s="offsets.right",p="target",q='__hV',n="offsets.left",o="area",l="target.top",m="area.height",t="target.left",u="area.width",w="on",v="size.height",x="offsets.top";
qx.Class.define(B,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hV=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:c},axisY:{check:c},edge:{check:[k,j,i,h],init:k},align:{check:[k,j,i,h],init:j}},statics:{__hW:null,compute:function(R,S,T,U,V,W,X){this.__hW=this.__hW||new qx.util.placement.Placement();
var bb=V.split(b);
var ba=bb[0];
var Y=bb[1];
this.__hW.set({axisX:this.__ib(W),axisY:this.__ib(X),edge:ba,align:Y});
return this.__hW.compute(R,S,T,U);
},__hX:null,__hY:null,__ia:null,__ib:function(a){switch(a){case r:this.__hX=this.__hX||new qx.util.placement.DirectAxis();
return this.__hX;
case z:this.__hY=this.__hY||new qx.util.placement.KeepAlignAxis();
return this.__hY;
case H:this.__ia=this.__ia||new qx.util.placement.BestFitAxis();
return this.__ia;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hV:null,compute:function(K,L,M,N){if(qx.core.Variant.isSet(A,w)){this.assertObject(K,G);
this.assertNumber(K.width,D);
this.assertNumber(K.height,v);
this.assertObject(L,o);
this.assertNumber(L.width,u);
this.assertNumber(L.height,m);
this.assertObject(M,p);
this.assertNumber(M.top,l);
this.assertNumber(M.right,y);
this.assertNumber(M.bottom,F);
this.assertNumber(M.left,t);
this.assertObject(N,E);
this.assertNumber(N.top,x);
this.assertNumber(N.right,s);
this.assertNumber(N.bottom,C);
this.assertNumber(N.left,n);
}var O=this.getAxisX()||this.__hV;
var Q=O.computeStart(K.width,{start:M.left,end:M.right},{start:N.left,end:N.right},L.width,this.__ic());
var P=this.getAxisY()||this.__hV;
var top=P.computeStart(K.height,{start:M.top,end:M.bottom},{start:N.top,end:N.bottom},L.height,this.__id());
return {left:Q,top:top};
},__ic:function(){var J=this.getEdge();
var I=this.getAlign();

if(J==h){return g;
}else if(J==j){return d;
}else if(I==h){return f;
}else if(I==j){return e;
}},__id:function(){var bd=this.getEdge();
var bc=this.getAlign();

if(bd==k){return g;
}else if(bd==i){return d;
}else if(bc==k){return f;
}else if(bc==i){return e;
}}},destruct:function(){this._disposeObjects(q);
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
(function(){var j="mousedown",i="qx.debug",h="on",g="blur",f="qx.ui.popup.Manager",d="__lj",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lj={};
qx.event.Registration.addListener(document.documentElement,j,this.__ll,this,true);
qx.bom.Element.addListener(window,g,this.hideAll,this);
},members:{__lj:null,add:function(p){if(qx.core.Variant.isSet(i,h)){if(!(p instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+p);
}}this.__lj[p.$$hash]=p;
this.__lk();
},remove:function(a){if(qx.core.Variant.isSet(i,h)){if(!(a instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+a);
}}var b=this.__lj;

if(b){delete b[a.$$hash];
this.__lk();
}},hideAll:function(){var l=this.__lj;

if(l){for(var k in l){l[k].exclude();
}}},__lk:function(){var o=1e7;
var n=this.__lj;

for(var m in n){n[m].setZIndex(o++);
}},__ll:function(e){var s=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var t=this.__lj;

for(var r in t){var q=t[r];

if(!q.getAutoHide()||s==q||qx.ui.core.Widget.contains(q,s)){continue;
}q.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__ll,this,true);
this._disposeMap(d);
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
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="qx.debug",s="top",r="right",q="_applyRich",p="_applyIcon",n="_applyShow",o="on",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(G){var H;

switch(G){case j:H=new qx.ui.basic.Label(this.getLabel());
H.setAnonymous(true);
H.setRich(this.getRich());
this._add(H);

if(this.getLabel()==null||this.getShow()===i){H.exclude();
}break;
case i:H=new qx.ui.basic.Image(this.getIcon());
H.setAnonymous(true);
this._addAt(H,0);

if(this.getIcon()==null||this.getShow()===j){H.exclude();
}break;
}return H||arguments.callee.base.call(this,G);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(K,L){var M=this.getChildControl(j,true);

if(M){M.setValue(K);
}this._handleLabel();
},_applyRich:function(D,E){var F=this.getChildControl(j,true);

if(F){F.setRich(D);
}},_applyIcon:function(N,O){var P=this.getChildControl(i,true);

if(P){P.setSource(N);
}this._handleIcon();
},_applyGap:function(I,J){this._getLayout().setGap(I);
},_applyShow:function(S,T){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(Q,R){this._getLayout().setIconPosition(Q);
},_applyCenter:function(B,C){this._getLayout().setCenter(B);
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
(function(){var m="middle",k="qx.ui.layout.Util",j="left",h="center",g="top",f="bottom",e="right";
qx.Class.define(k,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(x,y,z){var B,F,A,G;
var C=y>z;
var H=Math.abs(y-z);
var I,D;
var E={};

for(F in x){B=x[F];
E[F]={potential:C?B.max-B.value:B.value-B.min,flex:C?B.flex:1/B.flex,offset:0};
}while(H!=0){G=Infinity;
A=0;

for(F in E){B=E[F];

if(B.potential>0){A+=B.flex;
G=Math.min(G,B.potential/B.flex);
}}if(A==0){break;
}G=Math.min(H,G*A)/A;
I=0;

for(F in E){B=E[F];

if(B.potential>0){D=Math.min(H,B.potential,Math.ceil(G*B.flex));
I+=D-G*B.flex;

if(I>=1){I-=1;
D-=1;
}B.potential-=D;

if(C){B.offset+=D;
}else{B.offset-=D;
}H-=D;
}}}return E;
},computeHorizontalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case j:w=u;
break;
case e:w=t-s-v;
break;
case h:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},computeVerticalAlignOffset:function(R,S,T,U,V){if(U==null){U=0;
}
if(V==null){V=0;
}var W=0;

switch(R){case g:W=U;
break;
case f:W=T-S-V;
break;
case m:W=Math.round((T-S)/2);
if(W<U){W=U;
}else if(W<V){W=Math.max(U,T-S-V);
}break;
}return W;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(n,o,p){if(o==null){o=0;
}var q=0;

if(p){q+=n[0].getMarginLeft();

for(var i=1,l=n.length;i<l;i+=1){q+=this.collapseMargins(o,n[i-1].getMarginRight(),n[i].getMarginLeft());
}q+=n[l-1].getMarginRight();
}else{for(var i=1,l=n.length;i<l;i+=1){q+=n[i].getMarginLeft()+n[i].getMarginRight();
}q+=(o*(l-1));
}return q;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.left+N.right;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginLeft()+Q.getMarginRight();
}P+=(K+M+K)*(l-1);
return P;
},computeVerticalSeparatorGaps:function(be,bf,bg){var bj=qx.theme.manager.Decoration.getInstance().resolve(bg);
var bi=bj.getInsets();
var bh=bi.top+bi.bottom;
var bk=0;

for(var i=0,l=be.length;i<l;i++){var bl=be[i];
bk+=bl.getMarginTop()+bl.getMarginBottom();
}bk+=(bf+bh+bf)*(l-1);
return bk;
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
(function(){var m="on",l="qx.dynlocale",k="text",j="Boolean",i="qx.client",h="color",g="userSelect",f="changeLocale",d="qx.debug",c="enabled",I="none",H="_applyTextAlign",G="qx.ui.core.Widget",F="gecko",E="changeTextAlign",D="_applyWrap",C="changeValue",B="changeContent",A="qx.ui.basic.Label",z="A",t="_applyValue",u="center",r="_applyBuddy",s="String",p="textAlign",q="right",n="changeRich",o="_applyRich",v="click",w="label",y="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(L){arguments.callee.base.call(this);

if(L!=null){this.setValue(L);
}
if(qx.core.Variant.isSet(l,m)){qx.locale.Manager.getInstance().addListener(f,this._onChangeLocale,this);
}},properties:{rich:{check:j,init:false,event:n,apply:o},wrap:{check:j,init:true,apply:D},value:{check:s,apply:t,event:C,nullable:true},buddy:{check:G,apply:r,nullable:true,init:null},textAlign:{check:[x,u,q],nullable:true,themeable:true,apply:H,event:E},appearance:{refine:true,init:w},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jr:null,__js:null,__jt:null,__ju:null,_getContentHint:function(){if(this.__js){this.__jv=this.__jw();
delete this.__js;
}return {width:this.__jv.width,height:this.__jv.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bb){if(qx.core.Variant.isSet(i,F)){if(bb&&!this.isRich()){if(qx.core.Variant.isSet(d,m)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}arguments.callee.base.call(this,bb);
if(qx.core.Variant.isSet(i,y)){this.getContainerElement().setStyle(g,bb?k:I);
this.getContentElement().setStyle(g,bb?k:I);
}},_getContentHeightForWidth:function(be){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jw(be).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(p,O);
},_applyTextColor:function(Y,ba){if(Y){this.getContentElement().setStyle(h,qx.theme.manager.Color.getInstance().resolve(Y));
}else{this.getContentElement().removeStyle(h);
}},__jv:{width:0,height:0},_applyFont:function(V,W){var X;

if(V){this.__jr=qx.theme.manager.Font.getInstance().resolve(V);
X=this.__jr.getStyles();
}else{this.__jr=null;
X=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(X);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},__jw:function(Q){var U=qx.bom.Label;
var S=this.getFont();
var R=S?this.__jr.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var T=this.getRich();
return T?U.getHtmlSize(content,R,Q):U.getTextSize(content,R);
},_applyBuddy:function(M,N){if(N!=null){N.removeBinding(this.__jt);
this.__jt=null;
this.removeListenerById(this.__ju);
this.__ju=null;
}
if(M!=null){this.__jt=M.bind(c,this,c);
this.__ju=this.addListener(v,M.focus,M);
}},_applyRich:function(bd){this.getContentElement().setRich(bd);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(J,K){if(J&&!this.isRich()){if(qx.core.Variant.isSet(d,m)){this.warn("Only rich labels support wrap.");
}}},_onChangeLocale:qx.core.Variant.select(l,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(a,b){this.getContentElement().setValue(a);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,a,b);
}},destruct:function(){if(qx.core.Variant.isSet(l,m)){qx.locale.Manager.getInstance().removeListener(f,this._onChangeLocale,this);
}if(this.__jt!=null){var bc=this.getBuddy();

if(bc!=null&&!bc.isDisposed()){bc.removeBinding(this.__jt);
}}this.__jr=this.__jt=null;
}});
})();
(function(){var f="value",e="Please use the getValue() method instead.",d="qx.html.Label",c="Please use the setValue() method instead.";
qx.Class.define(d,{extend:qx.html.Element,members:{__jx:null,_applyProperty:function(name,j){arguments.callee.base.call(this,name,j);

if(name==f){var k=this.getDomElement();
qx.bom.Label.setValue(k,j);
}},_createDomElement:function(){var b=this.__jx;
var a=qx.bom.Label.create(this._content,b);
return a;
},_copyData:function(l){return arguments.callee.base.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jx==h){return;
}this.__jx=h;
return this;
},setValue:function(m){this._setProperty(f,m);
return this;
},getValue:function(){return this._getProperty(f);
},setContent:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.setValue(g);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.getValue();
}}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",B="auto",A="0",z="ellipsis",y="normal",x="label",w="px",v="crop",u="end",t="100%",s="visible",q="qx.bom.Label",r="Please use the setValue() method instead.",o="opera",p="Please use the getValue() method instead.",m="block",n="none",k="-1000px",l="absolute";
qx.Class.define(q,{statics:{__jy:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jz:function(){var K=this.__jB(false);
document.body.insertBefore(K,document.body.firstChild);
return this._textElement=K;
},__jA:function(){var Q=this.__jB(true);
document.body.insertBefore(Q,document.body.firstChild);
return this._htmlElement=Q;
},__jB:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=B;
H.left=H.top=k;
H.visibility=c;
H.position=l;
H.overflow=s;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var I=document.createElementNS(b,x);
var H=I.style;
H.padding=A;

for(var J in this.__jy){H[J]=g;
}G.appendChild(I);
}}return G;
},__jC:function(bh){var bi={};

if(bh){bi.whiteSpace=y;
}else if(qx.core.Variant.isSet(j,i)){bi.display=m;
}else{bi.overflow=c;
bi.whiteSpace=a;
bi.textOverflow=z;
bi.userSelect=n;
if(qx.core.Variant.isSet(j,o)){bi.OTextOverflow=z;
}}return bi;
},create:function(content,V,W){if(!W){W=window;
}
if(V){var X=W.document.createElement(h);
X.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var X=W.document.createElement(h);
var ba=W.document.createElementNS(b,x);
var Y=ba.style;
Y.cursor=g;
Y.color=g;
Y.overflow=c;
Y.maxWidth=t;
Y.padding=A;
for(var bb in this.__jy){ba.style[bb]=g;
}ba.setAttribute(v,u);
X.appendChild(ba);
}else{var X=W.document.createElement(h);
qx.bom.element.Style.setStyles(X,this.__jC(V));
}
if(content){this.setValue(X,content);
}return X;
},setValue:function(D,E){E=E||d;

if(D.useHtml){D.innerHTML=E;
}else if(qx.core.Variant.isSet(j,i)){D.firstChild.setAttribute(e,E);
}else{qx.bom.element.Attribute.set(D,f,E);
}},getValue:function(C){if(C.useHtml){return C.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return C.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(C,f);
}},getHtmlSize:function(content,R,S){var T=this._htmlElement||this.__jA();
T.style.width=S!==undefined?S+w:B;
T.innerHTML=content;
return this.__jD(T,R);
},getTextSize:function(N,O){var P=this._textElement||this.__jz();

if(qx.core.Variant.isSet(j,i)){P.firstChild.setAttribute(e,N);
}else{qx.bom.element.Attribute.set(P,f,N);
}return this.__jD(P,O);
},__jD:function(bc,bd){var be=this.__jy;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||d;
}var bg=qx.bom.element.Dimension.getSize(bc);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){bg.width++;
}}return bg;
},setContent:function(L,M){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setValue(L,M);
},getContent:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getValue(U);
}}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(v){return v.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(l){if(l.getBoundingClientRect){var m=l.getBoundingClientRect();
return Math.round(m.bottom)-Math.round(m.top);
}else{return l.offsetHeight;
}},"default":function(h){return h.offsetHeight;
}}),getSize:function(n){return {width:this.getWidth(n),height:this.getHeight(n)};
},__jE:{visible:true,hidden:true},getContentWidth:function(o){var q=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getX(o);
var s=parseInt(q.get(o,c),10);
var u=parseInt(q.get(o,d),10);

if(this.__jE[r]){return o.clientWidth-s-u;
}else{if(o.clientWidth>=o.scrollWidth){return Math.max(o.clientWidth,o.scrollWidth)-s-u;
}else{var t=o.scrollWidth-s;
var p=qx.bom.client.Engine;

if(p.NAME===g&&p.VERSION==6){t-=u;
}return t;
}}},getContentHeight:function(w){var y=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getY(w);
var B=parseInt(y.get(w,b),10);
var z=parseInt(y.get(w,a),10);

if(this.__jE[A]){return w.clientHeight-B-z;
}else{if(w.clientHeight>=w.scrollHeight){return Math.max(w.clientHeight,w.scrollHeight)-B-z;
}else{var C=w.scrollHeight-B;
var x=qx.bom.client.Engine;

if(x.NAME===g&&x.VERSION==6){C-=z;
}return C;
}}},getContentSize:function(k){return {width:this.getContentWidth(k),height:this.getContentHeight(k)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(e){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var j="Use 'getBlocker().getContentBlockerElement()' instead.",i="Use 'getBlocker().getBlockerElement()' instead.",h="_applyBlockerColor",g="Number",f="qx.ui.core.MBlocker",e="__qX",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(f,{construct:function(){this.__qX=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:d,themeable:true}},members:{__qX:null,_applyBlockerColor:function(a,b){this.__qX.setColor(a);
},_applyBlockerOpacity:function(k,l){this.__qX.setOpacity(k);
},block:function(){this.__qX.block();
},isBlocked:function(){return this.__qX.isBlocked();
},unblock:function(){this.__qX.unblock();
},forceUnblock:function(){this.__qX.forceUnblock();
},blockContent:function(m){this.__qX.blockContent(m);
},isContentBlocked:function(){return this.__qX.isContentBlocked();
},unblockContent:function(){this.__qX.unblockContent();
},forceUnblockContent:function(){this.__qX.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__qX.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__qX.getBlockerElement();
},getBlocker:function(){return this.__qX;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ra",b="__qY",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__qY:null,__ra:null,getWindowManager:function(){if(!this.__ra){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ra;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__ra){this.__ra.setDesktop(null);
}o.setDesktop(this);
this.__ra=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(l,m){this.getWindowManager().changeActiveWindow(l,m);

if(l){l.setActive(true);
}
if(m){m.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(k){if(qx.Class.isDefined(i)&&k instanceof qx.ui.window.Window){this._addWindow(k);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._removeWindow(j);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__qY){this.__qY=[];
}return this.__qY;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__rb:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(q,r){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__rb;

if(!B){this.__rb=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(s,t){if(t===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(s===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__rb=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(o){this.__rc=qx.dom.Node.getWindow(o);
this.__rd=o;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__rc,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rc:null,__rd:null,_createContainerElement:function(){var u=this.__rd;

if(qx.core.Variant.isSet(f,k)){if(!u.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var y=u.documentElement.style;
var v=u.body.style;
y.overflow=v.overflow=g;
y.padding=y.margin=v.padding=v.margin=l;
y.width=y.height=v.width=v.height=c;
var x=u.createElement(d);
u.body.appendChild(x);
var w=new qx.html.Root(x);
w.setStyle(m,b);
w.setAttribute(i,this.toHashCode());
return w;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var p=qx.bom.Viewport.getWidth(this.__rc);
var q=qx.bom.Viewport.getHeight(this.__rc);
return {minWidth:p,width:p,maxWidth:p,minHeight:q,height:q,maxHeight:q};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,z,A,name);
},_applyDecorator:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){return;
}var t=this.getDecoratorElement().getInsets();

if(t.left||t.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rc=this.__rd=null;
}});
})();
(function(){var p="zIndex",o="px",n="keydown",m="deactivate",l="This method is not needed anymore.",k="resize",j="keyup",h="keypress",g="backgroundColor",f="_applyOpacity",C="__mq",B="opacity",A="interval",z="Tab",y="Color",x="qx.ui.root.Page",w="Use 'getBlockerElement' instead.",v="__mo",u="__mt",t="Use 'getContentBlockerElement' instead.",r="Number",s="qx.ui.core.Blocker",q="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this._widget=D;
this._isPageRoot=(qx.Class.isDefined(x)&&D instanceof qx.ui.root.Page);

if(this._isPageRoot){D.addListener(k,this.__mu,this);
}this.__ml=[];
this.__mm=[];
this.__mn=[];
},properties:{color:{check:y,init:null,nullable:true,apply:q,themeable:true},opacity:{check:r,init:1,apply:f,themeable:true}},members:{__mo:null,__mp:0,__mq:null,__mn:null,__ml:null,__mm:null,__mr:null,__ms:0,__mt:null,_isPageRoot:false,_widget:null,__mu:function(e){var S=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:S.width,height:S.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:S.width,height:S.height});
}},_applyColor:function(N,O){var P=qx.theme.manager.Color.getInstance().resolve(N);
this.__mv(g,P);
},_applyOpacity:function(T,U){this.__mv(B,T);
},__mv:function(E,F){var G=[];
this.__mo&&G.push(this.__mo);
this.__mq&&G.push(this.__mq);

for(var i=0;i<G.length;i++){G[i].setStyle(E,F);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms+=1;

if(this.__ms==1){this.__mr=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms-=1;

if(this.__ms==0){this._widget.setAnonymous(this.__mr);
}},_backupActiveWidget:function(){var M=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__ml.push(M.getActive());
this.__mm.push(M.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var J=this.__ml.length;

if(J>0){var I=this.__ml[J-1];

if(I){qx.bom.Element.activate(I);
}this.__ml.pop();
}var H=this.__mm.length;

if(H>0){var I=this.__mm[H-1];

if(I){qx.bom.Element.focus(this.__mm[H-1]);
}this.__mm.pop();
}},__mw:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mo){this.__mo=this.__mw();
this.__mo.setStyle(p,15);
this._widget.getContainerElement().add(this.__mo);
this.__mo.exclude();
}return this.__mo;
},block:function(){this.__mp++;

if(this.__mp<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(m,this.__mB,this);
V.addListener(h,this.__mA,this);
V.addListener(n,this.__mA,this);
V.addListener(j,this.__mA,this);
}},isBlocked:function(){return this.__mp>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mp--;

if(this.__mp<1){this.__mx();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mp=0;
this.__mx();
},__mx:function(){this._restoreActiveWidget();
var a=this.getBlockerElement();
a.removeListener(m,this.__mB,this);
a.removeListener(h,this.__mA,this);
a.removeListener(n,this.__mA,this);
a.removeListener(j,this.__mA,this);
a.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mq){this.__mq=this.__mw();
this._widget.getContentElement().add(this.__mq);
this.__mq.exclude();
}return this.__mq;
},blockContent:function(Q){var R=this.getContentBlockerElement();
R.setStyle(p,Q);
this.__mn.push(Q);

if(this.__mn.length<2){R.include();

if(this._isPageRoot){if(!this.__mt){this.__mt=new qx.event.Timer(300);
this.__mt.addListener(A,this.__mz,this);
}this.__mt.start();
this.__mz();
}}},isContentBlocked:function(){return this.__mn.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn.pop();
var b=this.__mn[this.__mn.length-1];
var c=this.getContentBlockerElement();
c.setStyle(p,b);

if(this.__mn.length<1){this.__my();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn=[];
var d=this.getContentBlockerElement();
d.setStyle(p,null);
this.__my();
},__my:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mt.stop();
}},__mz:function(){var K=this._widget.getContainerElement().getDomElement();
var L=qx.dom.Node.getDocument(K);
this.getContentBlockerElement().setStyles({height:L.documentElement.scrollHeight+o,width:L.documentElement.scrollWidth+o});
},__mA:function(e){if(e.getKeyIdentifier()==z){e.stop();
}},__mB:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(k,this.__mu,this);
}this._disposeObjects(C,v,u);
this.__mr=this.__ml=this.__mm=this._widget=this.__mn=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__mC,this);
this.addListener(p,this.__mC,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__mC:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var ba="keypress",Y="__or",X="focusout",W="activate",V="Tab",U="singleton",T="deactivate",S="focusin",R="qx.ui.core.FocusHandler";
qx.Class.define(R,{extend:qx.core.Object,type:U,construct:function(){arguments.callee.base.call(this);
this.__or={};
},members:{__or:null,__os:null,__ot:null,__ou:null,connectTo:function(bi){bi.addListener(ba,this.__ov,this);
bi.addListener(S,this._onFocusIn,this,true);
bi.addListener(X,this._onFocusOut,this,true);
bi.addListener(W,this._onActivate,this,true);
bi.addListener(T,this._onDeactivate,this,true);
},addRoot:function(b){this.__or[b.$$hash]=b;
},removeRoot:function(bb){delete this.__or[bb.$$hash];
},getActiveWidget:function(){return this.__os;
},isActive:function(u){return this.__os==u;
},getFocusedWidget:function(){return this.__ot;
},isFocused:function(bh){return this.__ot==bh;
},isFocusRoot:function(a){return !!this.__or[a.$$hash];
},_onActivate:function(e){var D=e.getTarget();
this.__os=D;
var C=this.__ow(D);

if(C!=this.__ou){this.__ou=C;
}},_onDeactivate:function(e){var bf=e.getTarget();

if(this.__os==bf){this.__os=null;
}},_onFocusIn:function(e){var I=e.getTarget();

if(I!=this.__ot){this.__ot=I;
I.visualizeFocus();
}},_onFocusOut:function(e){var bg=e.getTarget();

if(bg==this.__ot){this.__ot=null;
bg.visualizeBlur();
}},__ov:function(e){if(e.getKeyIdentifier()!=V){return;
}
if(!this.__ou){return;
}e.stopPropagation();
e.preventDefault();
var P=this.__ot;

if(!e.isShiftPressed()){var Q=P?this.__oA(P):this.__oy();
}else{var Q=P?this.__oB(P):this.__oz();
}if(Q){Q.tabFocus();
}},__ow:function(J){var K=this.__or;

while(J){if(K[J.$$hash]){return J;
}J=J.getLayoutParent();
}return null;
},__ox:function(h,j){if(h===j){return 0;
}var m=h.getTabIndex()||0;
var k=j.getTabIndex()||0;

if(m!=k){return m-k;
}var r=h.getContainerElement().getDomElement();
var q=j.getContainerElement().getDomElement();
var p=qx.bom.element.Location;
var o=p.get(r);
var n=p.get(q);
if(o.top!=n.top){return o.top-n.top;
}if(o.left!=n.left){return o.left-n.left;
}var s=h.getZIndex();
var t=j.getZIndex();

if(s!=t){return s-t;
}return 0;
},__oy:function(){return this.__oE(this.__ou,null);
},__oz:function(){return this.__oF(this.__ou,null);
},__oA:function(L){var M=this.__ou;

if(M==L){return this.__oy();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__oC(M,L,N);
N.sort(this.__ox);
var O=N.length;
return O>0?N[0]:this.__oy();
},__oB:function(E){var F=this.__ou;

if(F==E){return this.__oz();
}
while(E&&E.getAnonymous()){E=E.getLayoutParent();
}
if(E==null){return [];
}var G=[];
this.__oD(F,E,G);
G.sort(this.__ox);
var H=G.length;
return H>0?G[H-1]:this.__oz();
},__oC:function(parent,y,z){var A=parent.getLayoutChildren();
var B;

for(var i=0,l=A.length;i<l;i++){B=A[i];
if(!(B instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(B)&&B.isEnabled()&&B.isVisible()){if(B.isTabable()&&this.__ox(y,B)<0){z.push(B);
}this.__oC(B,y,z);
}}},__oD:function(parent,c,d){var f=parent.getLayoutChildren();
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];
if(!(g instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(g)&&g.isEnabled()&&g.isVisible()){if(g.isTabable()&&this.__ox(c,g)>0){d.push(g);
}this.__oD(g,c,d);
}}},__oE:function(parent,v){var w=parent.getLayoutChildren();
var x;

for(var i=0,l=w.length;i<l;i++){x=w[i];
if(!(x instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(x)&&x.isEnabled()&&x.isVisible()){if(x.isTabable()){if(v==null||this.__ox(x,v)<0){v=x;
}}v=this.__oE(x,v);
}}return v;
},__oF:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__ox(be,bc)>0){bc=be;
}}bc=this.__oF(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(Y);
this.__ot=this.__os=this.__ou=null;
}});
})();
(function(){var n="qx.client",m="head",l="text/css",k="stylesheet",j="}",h='@import "',g="{",f='";',e="qx.bom.Stylesheet",d="link",c="style";
qx.Class.define(e,{statics:{includeFile:function(D,E){if(!E){E=document;
}var F=E.createElement(d);
F.type=l;
F.rel=k;
F.href=qx.util.ResourceManager.getInstance().toUri(D);
var G=E.getElementsByTagName(m)[0];
G.appendChild(F);
},createElement:qx.core.Variant.select(n,{"mshtml":function(ba){var bb=document.createStyleSheet();

if(ba){bb.cssText=ba;
}return bb;
},"default":function(o){var p=document.createElement(c);
p.type=l;

if(o){p.appendChild(document.createTextNode(o));
}document.getElementsByTagName(m)[0].appendChild(p);
return p.sheet;
}}),addRule:qx.core.Variant.select(n,{"mshtml":function(q,r,s){q.addRule(r,s);
},"default":function(t,u,v){t.insertRule(u+g+v+j,t.cssRules.length);
}}),removeRule:qx.core.Variant.select(n,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(n,{"mshtml":function(bc){var bd=bc.rules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Variant.select(n,{"mshtml":function(bf,bg){bf.addImport(bg);
},"default":function(a,b){a.insertRule(h+b+f,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(n,{"mshtml":function(V,W){var X=V.imports;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].href==W){V.removeImport(i);
}}},"default":function(z,A){var B=z.cssRules;
var C=B.length;

for(var i=C-1;i>=0;i--){if(B[i].href==A){z.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(n,{"mshtml":function(S){var T=S.imports;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeImport(i);
}},"default":function(w){var x=w.cssRules;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].type==x[i].IMPORT_RULE){w.deleteRule(i);
}}}})}});
})();
(function(){var k="number",j="': ",h="width",g="qx.ui.layout.Canvas",f="qx.debug",e="height",d="Bad format of layout property '",c="' is not supported by the Canvas layout!",b=". The value must be either an integer or an percent string.",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(m,name,n){var o={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(o[name]==1,a+name+c);

if(name==h||name==e){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof n===k){this.assertInteger(n);
}else if(qx.lang.Type.isString(n)){this.assertMatch(n,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(d+name+j+n+b);
}}},"off":null}),renderLayout:function(G,H){var S=this._getLayoutChildren();
var K,R,P;
var U,top,I,J,M,L;
var Q,O,T,N;

for(var i=0,l=S.length;i<l;i++){K=S[i];
R=K.getSizeHint();
P=K.getLayoutProperties();
Q=K.getMarginTop();
O=K.getMarginRight();
T=K.getMarginBottom();
N=K.getMarginLeft();
U=P.left!=null?P.left:P.edge;

if(qx.lang.Type.isString(U)){U=Math.round(parseFloat(U)*G/100);
}I=P.right!=null?P.right:P.edge;

if(qx.lang.Type.isString(I)){I=Math.round(parseFloat(I)*G/100);
}top=P.top!=null?P.top:P.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*H/100);
}J=P.bottom!=null?P.bottom:P.edge;

if(qx.lang.Type.isString(J)){J=Math.round(parseFloat(J)*H/100);
}if(U!=null&&I!=null){M=G-U-I-N-O;
if(M<R.minWidth){M=R.minWidth;
}else if(M>R.maxWidth){M=R.maxWidth;
}U+=N;
}else{M=P.width;

if(M==null){M=R.width;
}else{M=Math.round(parseFloat(M)*G/100);
if(M<R.minWidth){M=R.minWidth;
}else if(M>R.maxWidth){M=R.maxWidth;
}}
if(I!=null){U=G-M-I-O-N;
}else if(U==null){U=N;
}else{U+=N;
}}if(top!=null&&J!=null){L=H-top-J-Q-T;
if(L<R.minHeight){L=R.minHeight;
}else if(L>R.maxHeight){L=R.maxHeight;
}top+=Q;
}else{L=P.height;

if(L==null){L=R.height;
}else{L=Math.round(parseFloat(L)*H/100);
if(L<R.minHeight){L=R.minHeight;
}else if(L>R.maxHeight){L=R.maxHeight;
}}
if(J!=null){top=H-L-J-T-Q;
}else if(top==null){top=Q;
}else{top+=Q;
}}K.renderLayout(U,top,M,L);
}},_computeSizeHint:function(){var E=0,D=0;
var B=0,z=0;
var x,w;
var v,t;
var p=this._getLayoutChildren();
var s,C,r;
var F,top,q,u;

for(var i=0,l=p.length;i<l;i++){s=p[i];
C=s.getLayoutProperties();
r=s.getSizeHint();
var A=s.getMarginLeft()+s.getMarginRight();
var y=s.getMarginTop()+s.getMarginBottom();
x=r.width+A;
w=r.minWidth+A;
F=C.left!=null?C.left:C.edge;

if(F&&typeof F===k){x+=F;
w+=F;
}q=C.right!=null?C.right:C.edge;

if(q&&typeof q===k){x+=q;
w+=q;
}E=Math.max(E,x);
D=Math.max(D,w);
v=r.height+y;
t=r.minHeight+y;
top=C.top!=null?C.top:C.edge;

if(top&&typeof top===k){v+=top;
t+=top;
}u=C.bottom!=null?C.bottom:C.edge;

if(u&&typeof u===k){v+=u;
t+=u;
}B=Math.max(B,v);
z=Math.max(z,t);
}return {width:E,minWidth:D,height:B,minHeight:z};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var u="'>",t="[",s=", ",r="</span>",q="<span class='type-",p="</span> ",o="}",n="",m="]",l="{",L="map",K="<span class='object'>",J="]:",I="<span class='object' title='Object instance with hash code: ",H="string",G="level-",F="0",E="<span class='offset'>",D=":",C="qx.log.appender.Util",A="DIV",B="<span>",y="<span class='type-key'>",z="</span>:<span class='type-",w="</span>: ",x=" ",v="]</span>: ";
qx.Class.define(C,{statics:{toHtml:function(P){var ba=[];
var W,Y,R,T;
ba.push(E,this.formatOffset(P.offset,6),p);

if(P.object){var Q=P.win.qx.core.ObjectRegistry.fromHashCode(P.object);

if(Q){ba.push(I+Q.$$hash+u,Q.classname,t,Q.$$hash,v);
}}else if(P.clazz){ba.push(K+P.clazz.classname,w);
}var S=P.items;

for(var i=0,X=S.length;i<X;i++){W=S[i];
Y=W.text;

if(Y instanceof Array){var T=[];

for(var j=0,V=Y.length;j<V;j++){R=Y[j];

if(typeof R===H){T.push(B+this.escapeHTML(R)+r);
}else if(R.key){T.push(y+R.key+z+R.type+u+this.escapeHTML(R.text)+r);
}else{T.push(q+R.type+u+this.escapeHTML(R.text)+r);
}}ba.push(q+W.type+u);

if(W.type===L){ba.push(l,T.join(s),o);
}else{ba.push(t,T.join(s),m);
}ba.push(r);
}else{ba.push(q+W.type+u+this.escapeHTML(Y)+p);
}}var U=document.createElement(A);
U.innerHTML=ba.join(n);
U.className=G+P.level;
return U;
},formatOffset:function(bc,length){var bf=bc.toString();
var bd=(length||6)-bf.length;
var be=n;

for(var i=0;i<bd;i++){be+=F;
}return be+bf;
},escapeHTML:function(bb){return String(bb).replace(/[<>&"']/g,this.__BP);
},__BP:function(N){var O={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return O[N]||"?";
},toText:function(M){return this.toTextArray(M).join(x);
},toTextArray:function(a){var k=[];
k.push(this.formatOffset(a.offset,6));

if(a.object){var b=a.win.qx.core.ObjectRegistry.fromHashCode(a.object);

if(b){k.push(b.classname+t+b.$$hash+J);
}}else if(a.clazz){k.push(a.clazz.classname+D);
}var c=a.items;
var f,h;

for(var i=0,g=c.length;i<g;i++){f=c[i];
h=f.text;

if(h instanceof Array){var d=[];

for(var j=0,e=h.length;j<e;j++){d.push(h[j].text);
}
if(f.type===L){k.push(l,d.join(s),o);
}else{k.push(t,d.join(s),m);
}}else{k.push(h);
}}return k;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(i){if(window.console&&console.firebug){console[i.level].call(console,qx.log.appender.Util.toText(i));
}},"mshtml":function(j){if(window.console){var l=j.level;

if(l==d){l=c;
}var k=qx.log.appender.Util.toText(j);
console[l](k);
}},"webkit":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"opera":function(m){}})},defer:function(h){qx.log.Logger.register(h);
}});
})();
(function(){var n="",m='</div>',l="Up",k="none",j="keypress",i='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',h="Enter",g="px",f='.qxconsole .messages .user-result{background:white}',d='.qxconsole .messages .level-error{background:#FFE2D5}',Y="div",X="user-command",W='<div class="command">',V='.qxconsole .command input:focus{outline:none;}',U='.qxconsole .messages .type-key{color:#565656;font-style:italic}',T='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',S='.qxconsole .messages div{padding:0px 4px;}',R='.qxconsole .messages .level-debug{background:white}',Q='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',P="DIV",u='.qxconsole .messages .level-user{background:#E3EFE9}',v='<div class="qxconsole">',s="D",t='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',q='.qxconsole .messages .type-string{color:black;font-weight:normal;}',r='.qxconsole .control a{text-decoration:none;color:black;}',o='<div class="messages">',p='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',w='<input type="text"/>',x="clear",E='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',C='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',I='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',G='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',L='.qxconsole .messages .user-command{color:blue}',K="F7",z="qx.log.appender.Console",O='.qxconsole .messages .level-info{background:#DEEDFA}',N="block",M='.qxconsole .messages .level-warn{background:#FFF7D5}',y='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',A='.qxconsole .messages .user-error{background:#FFE2D5}',B='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',D='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',F=">>> ",H="Down",J='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(z,{statics:{init:function(){var bb=[I,B,r,i,S,L,f,A,R,O,M,d,u,q,J,p,C,t,U,Q,T,y,G,E,V];
qx.bom.Stylesheet.createElement(bb.join(n));
var bd=[v,D,o,m,W,w,m,m];
var be=document.createElement(P);
be.innerHTML=bd.join(n);
var bc=be.firstChild;
document.body.appendChild(be.firstChild);
this.__Ie=bc;
this.__If=bc.childNodes[1];
this.__Ig=bc.childNodes[2].firstChild;
this.__Il();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__Im,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__If.innerHTML=n;
},process:function(ba){this.__If.appendChild(qx.log.appender.Util.toHtml(ba));
this.__Ih();
},__Ih:function(){this.__If.scrollTop=this.__If.scrollHeight;
},__Ii:true,toggle:function(){if(!this.__Ie){this.init();
}else if(this.__Ie.style.display==k){this.show();
}else{this.__Ie.style.display=k;
}},show:function(){if(!this.__Ie){this.init();
}else{this.__Ie.style.display=N;
this.__If.scrollTop=this.__If.scrollHeight;
}},__Ij:[],execute:function(){var c=this.__Ig.value;

if(c==n){return;
}
if(c==x){return this.clear();
}var a=document.createElement(Y);
a.innerHTML=qx.log.appender.Util.escapeHTML(F+c);
a.className=X;
this.__Ij.push(c);
this.__Ik=this.__Ij.length;
this.__If.appendChild(a);
this.__Ih();

try{var b=window.eval(c);
}catch(bf){qx.log.Logger.error(bf);
}
if(b!==undefined){qx.log.Logger.debug(b);
}},__Il:function(e){this.__If.style.height=(this.__Ie.clientHeight-this.__Ie.firstChild.offsetHeight-this.__Ie.lastChild.offsetHeight)+g;
},__Im:function(e){var bi=e.getKeyIdentifier();
if((bi==K)||(bi==s&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__Ie){return;
}if(!qx.dom.Hierarchy.contains(this.__Ie,e.getTarget())){return;
}if(bi==h&&this.__Ig.value!=n){this.execute();
this.__Ig.value=n;
}if(bi==l||bi==H){this.__Ik+=bi==l?-1:1;
this.__Ik=Math.min(Math.max(0,this.__Ik),this.__Ij.length);
var bh=this.__Ij[this.__Ik];
this.__Ig.value=bh||n;
this.__Ig.select();
}}},defer:function(bg){qx.event.Registration.addListener(document.documentElement,j,bg.__Im,bg);
}});
})();
(function(){var cL="execute",cK="/",cJ="",cI="auto",cH="current",cG="value",cF=" ",cE="excluded",cD="visible",cC="category",bL='modelLink',bK="modelLink",bJ="changeSelection",bI="completed",bH="tags",bG="failed",bF="white",bE="html",bD="~",bC="all",cS=".",cT="monospace",cQ="div",cR="right",cO="id",cP="node",cM=".src.js",cN="_blank",cU=" Demo Browser ",cV=".html",ck="<script",cj="horizontal",cm="_",cl="qooxdoo ",co="main",cn="qx_srcview",cq="js",cp="outputviews.sourcepage.html.page",ci="widget",ch="outputviews.sourcepage.js.page",o="?",p="log",q="separator-vertical",v="request",x="src",y="icon/22/actions/edit-clear.png",z="Demos",A="^.*",B="filled",C="Clear log",dk="changeValue",dj="dblclick",di="icon/22/actions/media-playback-start.png",dh="qx.version",dp="<div class='script'>The sample JS source will be displayed here.</div>",dn="demobrowser.DemoBrowser",dm="HTML Code",dl="load",dr="Run previous demo",dq="_history",bc='_cmdNamespacePollution',bd="icon/22/apps/utilities-color-chooser.png",ba="Ctrl+N",bb="Previous",bg='.html',bh="Run",be="<div class='script'>The sample source will be displayed here.</div>",bf="Open demo in the playground",X="tree1",Y="f1",K="Debug",J="Display log file",M="script/demobrowser.demo",L="icon/22/actions/media-playback-stop.png",G="icon/22/apps/utilities-log-viewer.png",F="Ctrl+O",I="Log File",H="Stop playback after current demo",E="qx.theme.Classic",D='"',bm="logappender",bn="Choose theme",bo="icon/22/apps/internet-web-browser.png",bp="#",bi="f2",bj="JS Code",bk="icon/22/mimetypes/executable.png",bl="ig",bq="middle",br="noPlayground",U="Stop",T='"}',S="animation",R="icon/22/actions/edit-redo.png",Q='_cmdDisposeSample',P="qx.theme.Modern",O="toolbar",N="icon/22/apps/office-spreadsheet.png",W="mshtml",V="To Playground",bs="/demo/",bt="demo/welcome.html",bu='_cmdSampleInOwnWindow',bv=".*",bw="background-splitpane",bx='demo/',by="javascript",bz="Debugging options",bA="Ctrl+P",bB="Filter...",bP="/playground/",bO="Dispose Demo",bN='{"code": ',bM="Classic Theme",bT="Global Namespace Pollution",bS="icon/16/actions/edit-find.png",bR="treeview.flat",bQ="Own Window",bV="Display HTML source",bU='_cmdObjectSummary',cd='/',ce='_cmdNextSample',cb="Run next demo",cc='_cmdPrevSample',bY=" Start",ca="\"",bW="background-medium",bX="Ctrl+Left",cf="demo-tree",cg="Display JavaScript source",cu='_cmdRunSample',ct="Next",cx="qx.client",cv="F5",cz="http://demo.qooxdoo.org/",cy="Modern Theme",cB="Open demo in new window",cA="interval",cs="string",cr="runbutton",dd="8px",de="Ctrl+Right",df="?qx.theme=",dg="textfield",cY="Ctrl+D",da="mainsplit",db="icon/22/actions/go-previous.png",dc="Object Summary",cW="icon/22/actions/application-exit.png",cX="Run the selected demo(s)",n="left",l="icon/22/actions/go-next.png",k="Theme";
qx.Class.define(dn,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var eY=new qx.ui.layout.VBox;
eY.setSeparator(q);
this.setLayout(eY);
this.add(this.__KE());
this.widgets={};
this.tests={};
this.__JW="qx.theme.Modern";
this.__Kk();
this.add(this.__Kr());
var fd=new qx.ui.splitpane.Pane(cj);
this.mainsplit=fd;
var fa=new qx.ui.splitpane.Pane(cj);
fa.setDecorator(null);
this.infosplit=fa;
this.add(fd,{flex:1});
var fe=new qx.ui.container.Composite();
fe.setLayout(new qx.ui.layout.VBox(3));
fe.setBackgroundColor(bw);
fd.add(fe,0);
var eX=new qx.ui.container.Composite();
eX.setLayout(new qx.ui.layout.HBox(3));
eX.setAppearance(dg);
fe.add(eX);
var fg=new qx.ui.basic.Image(bS);
eX.add(fg);
this.__JX=new qx.ui.form.TextField();
this.__JX.setLiveUpdate(true);
this.__JX.setAppearance(ci);
this.__JX.setPlaceholder(bB);
this.__JX.addListener(dk,function(e){this.filter(e.getData());
},this);
eX.add(this.__JX,{flex:1});
this.__JY=new qx.ui.basic.Label("");
this.__JY.setAppearance(ci);
this.__JY.setWidth(80);
this.__JY.setTextAlign(cR);
eX.add(this.__JY);
fd.add(fa,1);
this.__Ka=this.__Kw();
fe.add(this.__Ka,{flex:1});
var ff=this.__Ks();
fa.add(ff,2);
var eV=this.__Ku();
var eW=this.__Kv();
var fb=this.__Kt();
var fc=new qx.ui.container.Stack;
fc.setDecorator(co);
fc.add(eV);
fc.add(eW);
fc.add(fb);
this.viewGroup.addListener(bJ,function(e){var gi=e.getData()[0];
var gj=gi!=null?gi.getUserData(cG):cJ;

switch(gj){case bE:this.setSelection([eV]);
fc.show();
break;
case cq:this.setSelection([eW]);
fc.show();
break;
case p:this.setSelection([fb]);
fc.show();
break;
default:this.resetSelection();
fc.exclude();
}},fc);
fa.add(fc,1);
fc.resetSelection();
fc.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(v,function(e){var c=e.getData().replace(bD,cK);

if(this._currentSample!=c){this.setCurrentSample(c);
}},this);
this.__Kb=[this.__Kh,this.__Kf,this.__Ki,this.__Kj];
this.__Kc=new qx.event.Timer(250);
this.__Kc.addListener(cA,this.__Ky,this);
this.__Kc.start();
},properties:{playDemos:{check:[bC,cC,cH],init:cH}},members:{__Kd:null,__JW:null,__Kc:null,__Ke:null,__Ka:null,__JY:null,__JX:null,__Kf:null,__Kg:null,__Kh:null,__Ki:null,__Kj:null,__Kb:null,defaultUrl:bt,playgroundUrl:cz+qx.core.Setting.get(dh)+bP,__Kk:function(){this._cmdObjectSummary=new qx.ui.core.Command(F);
this._cmdObjectSummary.addListener(cL,this.__Kl,this);
this._cmdRunSample=new qx.ui.core.Command(cv);
this._cmdRunSample.addListener(cL,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(bX);
this._cmdPrevSample.addListener(cL,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(de);
this._cmdNextSample.addListener(cL,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(ba);
this._cmdSampleInOwnWindow.addListener(cL,this.__Km,this);
this._cmdDisposeSample=new qx.ui.core.Command(cY);
this._cmdDisposeSample.addListener(cL,this.__Kp,this);
this._cmdNamespacePollution=new qx.ui.core.Command(bA);
this._cmdNamespacePollution.addListener(cL,this.__Kq,this);
},__Kl:function(){var fW=this.__Kd.getWindow();

if(fW&&fW.qx){alert(fW.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Km:function(){var fz=this.__Kd.getWindow().location.href;
window.open(fz,cN);
},__Kn:function(fX){var fY=!!fX;
var ga=this.__Ka.getSelection()[0].getUserData(bH);

if(ga){fY=fY&&!qx.lang.Array.contains(ga,br);
}this.__Kf.setEnabled(fY);
this.__Kg=fX;
},__Ko:function(){if(this.__Kg){var dK=this.__Kg;
var dJ=bN+D+encodeURIComponent(dK)+T;
var dI=this.playgroundUrl+bp+encodeURIComponent(dJ);
window.open(dI,cN);
}else{alert(this.tr("Could not open the Playground."));
}},__Kp:function(e){var ek=this.__Kd.getWindow();

if(ek&&ek.qx){ek.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Kq:function(e){var fA=this.__Kd.getWindow();

if(fA&&fA.qx){alert(fA.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__Kr:function(){var eo=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
eo.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(bh),di);
this._runbutton.addListener(cL,this.runSample,this);
this._runbutton.setToolTipText(cX);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(U),L);
this._stopbutton.addListener(cL,this.stopSample,this);
this._stopbutton.setToolTipText(H);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(cE);
this._runbutton.setMinWidth(60);
this._stopbutton.setMinWidth(60);
var eC=new qx.ui.toolbar.Button(this.tr(bb),db);
eC.addListener(cL,this.playPrev,this);
eC.setToolTipText(dr);
this._navPart.add(eC);
var eF=new qx.ui.toolbar.Button(this.tr(ct),l);
eF.addListener(cL,this.playNext,this);
eF.setToolTipText(cb);
this._navPart.add(eF);
var ey=new qx.ui.toolbar.Button(this.tr(bQ),R);
this.__Kh=ey;
ey.addListener(cL,this.__Km,this);
ey.setToolTipText(cB);
this._navPart.add(ey);
var en=new qx.ui.toolbar.Button(this.tr(V),cW);
en.addListener(cL,this.__Ko,this);
en.setToolTipText(bf);
en.setEnabled(false);
if(qx.core.Variant.isSet(cx,W)){en.exclude();
}this.__Kf=en;
this._navPart.add(en);
var ep=new qx.ui.toolbar.Part;
this.__Kj=ep;
eo.add(ep);
var eB=new qx.ui.menu.Menu;
var ev=new qx.ui.menu.RadioButton(cy);
var et=new qx.ui.menu.RadioButton(bM);
ev.setUserData(cG,P);
ev.setValue(true);
et.setUserData(cG,E);
var eD=new qx.ui.form.RadioGroup(ev,et);
eD.addListener(bJ,this.__KD,this);
eB.add(ev);
eB.add(et);
var el=new qx.ui.toolbar.MenuButton(this.tr(k),bd,eB);
el.setToolTipText(bn);
ep.add(el);
var er=new qx.ui.menu.Menu;
var es=new qx.ui.menu.Button(this.tr(dc));
es.setCommand(this._cmdObjectSummary);
er.add(es);
var eE=new qx.ui.menu.Button(this.tr(bT));
eE.setCommand(this._cmdNamespacePollution);
er.add(eE);
var ez=new qx.ui.menu.Button(this.tr(bO));
ez.setCommand(this._cmdDisposeSample);
er.add(ez);
var eA=new qx.ui.toolbar.MenuButton(this.tr(K),N,er);
eA.setToolTipText(bz);
ep.add(eA);
var em=new qx.ui.toolbar.Part;
this.__Ki=em;
eo.addSpacer();
eo.add(em);
var eG=new qx.ui.toolbar.RadioButton(dm,bo);
eG.setToolTipText(bV);
var ew=new qx.ui.toolbar.RadioButton(bj,bk);
ew.setToolTipText(cg);
var eu=new qx.ui.toolbar.RadioButton(I,G);
eu.setToolTipText(J);
eG.setUserData(cG,bE);
ew.setUserData(cG,cq);
eu.setUserData(cG,p);
em.add(eG);
em.add(ew);
em.add(eu);
var eq=this.viewGroup=new qx.ui.form.RadioGroup;
eq.setAllowEmptySelection(true);
eq.add(eG,ew,eu);
return eo;
},__Ks:function(){var fL=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
fL.addListener(dl,this.__Kx,this);
this.__Kd=fL;
return fL;
},__Kt:function(){var gf=new qx.ui.layout.VBox(0,bq,co);
gf.setAlignX(cR);
var gh=new qx.ui.container.Composite(gf);
var gd=new qx.ui.decoration.Background().set({backgroundColor:bW});
gh.setDecorator(gd);
var gg=new qx.ui.form.Button(this.tr(C),y);
gg.setAllowGrowX(false);
gg.setMargin(5);
gg.addListener(cL,function(){this.logappender.clear();
},this);
gh.add(gg,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(cI,cI);
this.f2.setFont(cT);
this.f2.setBackgroundColor(bF);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var ge=document.createElement(cQ);
this.logelem=document.createElement(cQ);
this.logelem.style.padding=dd;
this.logappender.setElement(this.logelem);
ge.appendChild(this.logelem);
this.f2.getContentElement().useElement(ge);
gh.add(this.f2,{flex:1});
return gh;
},__Ku:function(){var fi=new qx.ui.embed.Html(be);
fi.setOverflow(cI,cI);
fi.setFont(cT);
fi.setBackgroundColor(bF);
this.widgets[cp]=fi;
fi.getContentElement().setAttribute(cO,cn);
return fi;
},__Kv:function(){var eT=new qx.ui.embed.Html(dp);
eT.setOverflow(cI,cI);
eT.setFont(cT);
eT.setBackgroundColor(bF);
this.widgets[ch]=eT;
eT.getContentElement().setAttribute(cO,cn);
return eT;
},__Kw:function(){var dY=new qx.ui.tree.Tree();
var dX=new qx.ui.tree.TreeFolder(z);
dY.setAppearance(cf);
dY.setRoot(dX);
dY.setSelection([dX]);
this.tree=this.widgets[bR]=dY;
dY.addListener(bJ,this.treeGetSelection,this);
dY.addListener(dj,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return dY;
},treeGetSelection:function(e){var eR=this.tree.getSelection()[0];
var eS=eR.getUserData(bK);
this.tests.selected=this.tests.handler.getFullName(eS);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var ea=this._sampleToTreeNodeMap;
var eg=null;
var ej=null;
var ei=/\?autorun=true/.test(location.href);
var ef=this._history.getState();
var ed=ef.match(/([^~]+)~/);

if(ed){eg=ed[1];
}else{var eb=ef.match(/([^~][\w]*)/);

if(eb){eg=eb[1];

if(ei){this.setPlayDemos(cC);
}}else{eg=S;

if(ei){this.setPlayDemos(bC);
}}}function eh(dA,dB){var dE=dB.getChildren();
var t;

for(var i=0;i<dE.length;i++){var dD=dE[i];

if(dD.hasChildren()){t=new qx.ui.tree.TreeFolder(ec.polish(dD.label));
t.setUserData(B,false);
t.setUserData(cP,dD);
eh(t,t.getUserData(cP));

if(dD.label==eg){ej=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(ec.polish(dD.label));
t.setUserData(bH,dD.tags);
var dC=dD.pwd().slice(1).join(cK)+cK+dD.label;
ea[dC]=t;
}dA.add(t);
t.setUserData(bK,dD);
dD.widgetLinkFull=t;
}}var ee=this.tests.handler.ttree;
var ec=this;
this.tree.setUserData(bK,ee);
this.tree.getRoot().setOpen(true);
eh(this.tree.getRoot(),ee);

if(ej!=null){this.tree.setSelection([ej]);
}},runSample:function(e){if(e&&e.getType()===cL){if(this.tests.selected===cJ){this.setPlayDemos(bC);
}else if(this.tests.selected.indexOf(bE)>0){this.setPlayDemos(cH);
}else{this.setPlayDemos(cC);
}}this._runbutton.setVisibility(cE);
this._stopbutton.setVisibility(cD);

if(this.tests.selected!=cJ){var gk=this.tests.selected.replace(cS,cK);
this.setCurrentSample(gk);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(cH);
this._stopbutton.setVisibility(cE);
this._runbutton.setVisibility(cD);
},setCurrentSample:function(fw){if(!fw){return;
}
if(!this._sampleToTreeNodeMap){return;
}var fx;
var fy=this._sampleToTreeNodeMap[fw];

if(fy){fy.getTree().setSelection([fy]);
fx=bx+fw+df+this.__JW;
}else{fx=this.defaultUrl;
}
if(this.__Kd.getSource()==fx){this.__Kd.reload();
}else{this.__Ke=false;
this.__Kd.setSource(fx);
}if(fx==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=fw;
this._currentSampleUrl=fx;
},__Kx:function(){var dO=this.__Kd.getWindow();
var dP=dO.location.pathname+cJ;
var dW=dP.indexOf(o);

if(dW!=-1){dP=dP.substring(0,dW+1);
}var dV=this.__Kd.getSource();

if(dV!=null&&dV!=this.defaultUrl){var dN=dO.location.href;
var dT=dN.indexOf(bs)+6;
var dQ=dN.indexOf(o);
dQ=dQ==-1?dN.length:dQ;
var dR=dN.substring(dT,dQ).split(cK);
var dU=String.fromCharCode(187);

if(dR.length==2){var dL=dR[0];
dL=dL.charAt(0).toUpperCase()+dL.substring(1);
var dS=dR[1].replace(cV,cJ).replace(cm,cF);
dS=dS.charAt(0).toUpperCase()+dS.substring(1);
var dM=cl+dU+cU+dU+cF+dL+cF+dU+cF+dS;
}else{var dM=cl+dU+cU+dU+bY;
}document.title=dM;
}if(this.getPlayDemos()!=cH){if(!dS){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(cE);
this._runbutton.setVisibility(cD);
}},__Ky:function(e){var b=this.__Kd.getWindow();

if(b&&b.qx&&b.qx.log&&b.qx.log.appender){if(!this.__Ke){this.__Ke=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{b.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace(cK,bD),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__Kz(this._currentSampleUrl);
}}}else{this.__Ke=false;
}},filter:function(fM){var fU=new RegExp(A+fM+bv,bl);
var fS=this.__Ka.getRoot().getItems(true,true);
var fT=0;
var fN=0;

for(var i=0;i<fS.length;i++){var fV=fS[i];
var parent=fV.getParent();
var fR=fV.getUserData(bH);
var fO=false;

if(fR!=null){for(var j=0;j<fR.length;j++){fO=!!fR[j].match(fU);

if(fO){break;
}}}
if(fV.getChildren().length==0){fN++;
}
if(fO||!fV.getLabel().search(fU)||!parent.getLabel().search(fU)){if(fV.getChildren().length==0){fT++;
}fV.show();
fV.getParent().setOpen(true);
fV.getParent().show();
}else{fV.exclude();
}}if(fM==cJ){var fQ=this.__Ka.getRoot().getItems(false,true);
var fP=this.__Ka.getSelection();
for(var i=0;i<fQ.length;i++){if(fQ[i]==fP[0]||fQ[i]==fP[0].getParent()){continue;
}fQ[i].setOpen(false);
}}this.__JY.setValue(fT+cK+fN);
},__Kz:function(fF){if(typeof (fF)!=cs){return;
}var fG=new qx.io.remote.Request(fF);
fG.setTimeout(180000);
fG.setProhibitCaching(false);
fG.addListener(bI,function(eH){var content=eH.getContent();
if(content){var eK=content.indexOf(ck,content.indexOf(ck)+7);
var eQ=content.indexOf(x,eK);
var eJ=content.indexOf(ca,eQ+5);
var eL=content.substring(eQ+5,eJ);
var eO=eL.substring(4,eL.length-3)+cM;
var u=M;
var eN=fF.split(cd);
var eM=eN[1];
var eP=eN[2];
eP=eP.substr(0,eP.indexOf(bg));
u+=cS+eM+cS+eP+cM;
eO=u;
var eI=new qx.io.remote.Request(eO);
eI.setTimeout(180000);
eI.setProhibitCaching(false);
eI.addListener(bI,function(f){var g=f.getContent();
this.__Kn(g);

if(g){this.widgets[ch].setHtml(this.__KA(g,by));
}},this);
eI.addListener(bG,function(h){this.error("Couldn't load file: "+fF);
},this);
eI.send();
this.widgets[cp].setHtml(this.__KA(content));
}},this);
fG.addListener(bG,function(fr){this.error("Couldn't load file: "+fF);
},this);
fG.send();
},dataLoader:function(dx){var dy=new qx.io.remote.Request(dx);
dy.setTimeout(180000);
dy.setProhibitCaching(false);
dy.addListener(bI,function(gb){var content=gb.getContent();
var gc=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(gc);
this.leftReloadTree();
var dz=this._history.getState();

if(dz){this.setCurrentSample(dz.replace(bD,cK));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
dy.addListener(bG,function(eU){this.error("Couldn't load file: "+dx);
},this);
dy.send();
},playPrev:function(e){this.setPlayDemos(cH);
var dH=this.tree.getSelection()[0];

if(dH){if(dH.getUserData(bL).getPrevSibling()){var dG=dH.getUserData(bL).getPrevSibling().widgetLinkFull;

if(dG){this.tree.setSelection([dG]);
this.runSample();
}}}},playNext:function(e){var fK=this.tree.getSelection()[0];

if(fK){try{var fH=fK.getUserData(bL).getChildren()[0].widgetLinkFull;
}catch(fB){try{var fH=fK.getUserData(bL).getNextSibling().widgetLinkFull;
}catch(d){if(this.getPlayDemos()!==cC){try{var fJ=fK.getTree();
var fI=fJ.getNextSiblingOf(fK);
fI.setOpen(true);
var fH=fI.getChildren()[0];
}catch(ds){this.debug(ds);
}}}}
if(fH){this.tree.setSelection([fH]);
this.runSample();
}else{this._stopbutton.setVisibility(cE);
this._runbutton.setVisibility(cD);
}}},disableMenuButtons:function(){var fh=this.__Kb;

for(var i=0;i<fh.length;i++){fh[i].setEnabled(false);
}},enableMenuButtons:function(){var dw=this.__Kb;

for(var i=0;i<dw.length;i++){dw[i].setEnabled(true);
}},__KA:function(fj,fk){var fl=new qx.util.StringBuilder("<pre class='script'>");
var fn=[];
var fo=new qx.util.StringBuilder();
var fp=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var fm=/^\s*<\/script>\s*$/i;
fj=fj.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var fn=fj.split('\n');
if(fk=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(fj)+"</div></pre>";
}
for(var i=0;i<fn.length;i++){if(fp.exec(fn[i])){fl.add(this.__KB(qx.bom.String.escape(fo.get()+fn[i])));
fo.clear();
}else if(fm.exec(fn[i])){var fq=qx.dev.Tokenizer.javaScriptToHtml(fo.get());
fl.add('<div class="script">',fq,'</div>');
fo.clear();
fo.add(fn[i],'\n');
}else{fo.add(fn[i],'\n');
}}fl.add(this.__KB(qx.bom.String.escape(fo.get())),"</pre>");
return fl.get();
},__KB:function(dt){var dv=dt;
function du(fC){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var fD;
var fE=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){fD=arguments[i];

if(fD=="/"){fE=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(fD))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((fE?"/":""));
}s.add('&gt;');
return s.get();
}dv=dv.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,du);
return dv;
},polish:function(dF){return dF.replace(cV,cJ).replace(cm,cF);
},__KC:function(){var w=this.__Kd.getWindow();
var a;

if(w.qx&&w.qx.log&&w.qx.log.Logger){a=w.qx.log.Logger;
a.register(this.logappender);
a.clear();
a.unregister(this.logappender);
}},__KD:function(e){this.__JW=e.getData()[0].getUserData("value");
this.runSample();
},__KE:function(){var fu=new qx.ui.layout.HBox();
var fs=new qx.ui.container.Composite(fu);
fs.setAppearance("app-header");
var fv=new qx.ui.basic.Label("Demo Browser");
var ft=new qx.ui.basic.Label("qooxdoo "+qx.core.Setting.get("qx.version"));
fs.add(fv);
fs.add(new qx.ui.core.Spacer,{flex:1});
fs.add(ft);
return fs;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(da,X,n,cr,O,Y,bi,dq,bm,bU,cu,cc,ce,bu,Q,bc);
}});
})();
(function(){var H="_applyLayoutChange",G="top",F="left",E="height",D="middle",C="Decorator",B="center",A="_applyReversed",z="qx.debug",y="bottom",t="' is not supported by the VBox layout!",x="qx.ui.layout.VBox",w="flex",s="Integer",r="The property '",v="right",u="Boolean";
qx.Class.define(x,{extend:qx.ui.layout.Abstract,construct:function(bh,bi,bj){arguments.callee.base.call(this);

if(bh){this.setSpacing(bh);
}
if(bi){this.setAlignY(bi);
}
if(bj){this.setSeparator(bj);
}},properties:{alignY:{check:[G,D,y],init:G,apply:H},alignX:{check:[F,B,v],init:F,apply:H},spacing:{check:s,init:0,apply:H},separator:{check:C,nullable:true,apply:H},reversed:{check:u,init:false,apply:A}},members:{__ig:null,__ih:null,__ii:null,__ij:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ik:function(){var bp=this._getLayoutChildren();
var length=bp.length;
var bl=false;
var bk=this.__ig&&this.__ig.length!=length&&this.__ih&&this.__ig;
var bn;
var bm=bk?this.__ig:new Array(length);
var bo=bk?this.__ih:new Array(length);
if(this.getReversed()){bp=bp.concat().reverse();
}for(var i=0;i<length;i++){bn=bp[i].getLayoutProperties();

if(bn.height!=null){bm[i]=parseFloat(bn.height)/100;
}
if(bn.flex!=null){bo[i]=bn.flex;
bl=true;
}else{bo[i]=0;
}}if(!bk){this.__ig=bm;
this.__ih=bo;
}this.__ii=bl;
this.__ij=bp;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(z,{"on":function(bq,name,br){this.assert(name===w||name===E,r+name+t);

if(name==E){this.assertMatch(br,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(br);
this.assert(br>=0);
}},"off":null}),renderLayout:function(I,J){if(this._invalidChildrenCache){this.__ik();
}var Q=this.__ij;
var length=Q.length;
var bb=qx.ui.layout.Util;
var ba=this.getSpacing();
var be=this.getSeparator();

if(be){var N=bb.computeVerticalSeparatorGaps(Q,ba,be);
}else{var N=bb.computeVerticalGaps(Q,ba,true);
}var i,L,M,U;
var V=[];
var bc=N;

for(i=0;i<length;i+=1){U=this.__ig[i];
M=U!=null?Math.floor((J-N)*U):Q[i].getSizeHint().height;
V.push(M);
bc+=M;
}if(this.__ii&&bc!=J){var S={};
var Y,bd;

for(i=0;i<length;i+=1){Y=this.__ih[i];

if(Y>0){R=Q[i].getSizeHint();
S[i]={min:R.minHeight,value:V[i],max:R.maxHeight,flex:Y};
}}var O=bb.computeFlexOffsets(S,J,bc);

for(i in O){bd=O[i].offset;
V[i]+=bd;
bc+=bd;
}}var top=Q[0].getMarginTop();
if(bc<J&&this.getAlignY()!=G){top=J-bc;

if(this.getAlignY()===D){top=Math.round(top/2);
}}var R,bg,W,M,T,X,P;
this._clearSeparators();
if(be){var bf=qx.theme.manager.Decoration.getInstance().resolve(be).getInsets();
var K=bf.top+bf.bottom;
}for(i=0;i<length;i+=1){L=Q[i];
M=V[i];
R=L.getSizeHint();
X=L.getMarginLeft();
P=L.getMarginRight();
W=Math.max(R.minWidth,Math.min(I-X-P,R.maxWidth));
bg=bb.computeHorizontalAlignOffset(L.getAlignX()||this.getAlignX(),W,I,X,P);
if(i>0){if(be){top+=T+ba;
this._renderSeparator(be,{top:top,left:0,height:K,width:I});
top+=K+ba+L.getMarginTop();
}else{top+=bb.collapseMargins(ba,T,L.getMarginTop());
}}L.renderLayout(bg,top,W,M);
top+=M;
T=L.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ik();
}var g=qx.ui.layout.Util;
var q=this.__ij;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__ih[i];
var d=this.__ig[i];

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
}},destruct:function(){this.__ig=this.__ih=this.__ij=null;
}});
})();
(function(){var s="splitter",r="slider",q="mousedown",p="mouseout",o="mousemove",n="mouseup",m="losecapture",l="active",k="horizontal",j="vertical",K="knob",J="Integer",I="height",H="row-resize",G="move",F="maxHeight",E="width",D="_applyOrientation",C="mouseover",B="splitpane",z="qx.ui.splitpane.Pane",A="_applyOffset",v="minHeight",w="minWidth",t="col-resize",u="maxWidth";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(bl){arguments.callee.base.call(this);
this.__qp=[];
if(bl){this.setOrientation(bl);
}else{this.initOrientation();
}this.addListener(q,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(o,this._onMouseMove);
this.addListener(p,this._onMouseOut);
this.addListener(m,this._onMouseUp);
},properties:{appearance:{refine:true,init:B},offset:{check:J,init:6,apply:A},orientation:{init:k,check:[k,j],apply:D}},members:{__qq:null,__qr:false,__qs:null,__qt:null,__qu:null,__qv:null,__qw:null,__qp:null,_createChildControlImpl:function(bm){var bn;

switch(bm){case r:bn=new qx.ui.splitpane.Slider(this);
bn.exclude();
this._add(bn,{type:bm});
break;
case s:bn=new qx.ui.splitpane.Splitter(this);
this._add(bn,{type:bm});
bn.addListener(G,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){bn.addListener(C,this._onSplitterMouseOver,bn);
}break;
}return bn||arguments.callee.base.call(this,bm);
},_applyOrientation:function(c,d){var f=this.getChildControl(r);
var i=this.getChildControl(s);
this.__qu=c===k;
var h=this._getLayout();

if(h){h.dispose();
}var g=c===j?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(g);
i.removeState(d);
i.addState(c);
i.getChildControl(K).removeState(d);
i.getChildControl(K).addState(c);
f.removeState(d);
f.addState(c);
},_applyOffset:function(V,W){var X=this.getChildControl(s);

if(W===0){X.removeListener(q,this._onMouseDown,this);
X.removeListener(o,this._onMouseMove,this);
X.removeListener(p,this._onMouseOut,this);
X.removeListener(n,this._onMouseUp,this);
X.removeListener(m,this._onMouseUp,this);
this.addListener(q,this._onMouseDown);
this.addListener(n,this._onMouseUp);
this.addListener(o,this._onMouseMove);
this.addListener(p,this._onMouseOut);
this.addListener(m,this._onMouseUp);
}
if(V===0){this.removeListener(q,this._onMouseDown);
this.removeListener(n,this._onMouseUp);
this.removeListener(o,this._onMouseMove);
this.removeListener(p,this._onMouseOut);
this.removeListener(m,this._onMouseUp);
X.addListener(q,this._onMouseDown,this);
X.addListener(o,this._onMouseMove,this);
X.addListener(p,this._onMouseOut,this);
X.addListener(n,this._onMouseUp,this);
X.addListener(m,this._onMouseUp,this);
}},add:function(a,b){if(b==null){this._add(a);
}else{this._add(a,{flex:b});
}this.__qp.push(a);
},remove:function(bw){this._remove(bw);
qx.lang.Array.remove(this.__qp,bw);
},getChildren:function(){return this.__qp;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var bx=this.getChildControl(s);
var bz=bx.getContainerLocation();
var by=this.getContentLocation();
this.__qq=this.__qu?e.getDocumentLeft()-bz.left+by.left:e.getDocumentTop()-bz.top+by.top;
var bB=this.getChildControl(r);
var bA=bx.getBounds();
bB.setUserBounds(bA.left,bA.top,bA.width,bA.height);
bB.setZIndex(bx.getZIndex()+1);
bB.show();
this.__qr=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__qr){this.__qy();
var bj=this.getChildControl(r);
var bk=this.__qv;

if(this.__qu){bj.setDomLeft(bk);
}else{bj.setDomTop(bk);
}e.stop();
}else{this.__qx();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__qx();
},_onMouseUp:function(e){if(!this.__qr){return;
}this._finalizeSizes();
var bo=this.getChildControl(r);
bo.exclude();
this.__qr=false;
this.releaseCapture();
this.__qx();
e.stop();
},_onSplitterMove:function(){this.__qx();
},_onSplitterMouseOver:function(){this.addState(l);
},_finalizeSizes:function(){var bf=this.__qv;
var bc=this.__qw;

if(bf==null){return;
}var bh=this._getChildren();
var bg=bh[2];
var bd=bh[3];
var be=bg.getLayoutProperties().flex;
var bi=bd.getLayoutProperties().flex;
if((be!=0)&&(bi!=0)){bg.setLayoutProperties({flex:bf});
bd.setLayoutProperties({flex:bc});
}else{if(this.__qu){bg.setWidth(bf);
bd.setWidth(bc);
}else{bg.setHeight(bf);
bd.setHeight(bc);
}}},_isNear:function(){var bp=this.getChildControl(s);
var br=bp.getBounds();
var bt=bp.getContainerLocation();
var bq=this.getOffset();
if(!bt){return;
}var bu=this.__qs;
var bv=br.width;
var bs=bt.left;

if(bv<bq){bs-=Math.floor((bq-bv)/2);
bv=bq;
}
if(bu<bs||bu>(bs+bv)){return false;
}var bu=this.__qt;
var bv=br.height;
var bs=bt.top;

if(bv<bq){bs-=Math.floor((bq-bv)/2);
bv=bq;
}
if(bu<bs||bu>(bs+bv)){return false;
}return true;
},__qx:function(){var ba=this.getChildControl(s);
var bb=this.getApplicationRoot();
if(this.__qr||this._isNear()){var Y=this.__qu?t:H;
this.setCursor(Y);
bb.setGlobalCursor(Y);
ba.addState(l);
}else if(ba.hasState(l)){this.resetCursor();
bb.resetGlobalCursor();
ba.removeState(l);
}},__qy:function(){if(this.__qu){var N=w,U=E,O=u,S=this.__qs;
}else{var N=v,U=I,O=F,S=this.__qt;
}var T=this._getChildren();
var L=T[2].getSizeHint();
var Q=T[3].getSizeHint();
var R=T[2].getBounds()[U]+T[3].getBounds()[U];
var P=S-this.__qq;
var M=R-P;
if(P<L[N]){M-=L[N]-P;
P=L[N];
}else if(M<Q[N]){P-=Q[N]-M;
M=Q[N];
}if(P>L[O]){M+=P-L[O];
P=L[O];
}else if(M>Q[O]){P+=M-Q[O];
M=Q[O];
}this.__qv=P;
this.__qw=M;
},_isActiveDragSession:function(){return this.__qr;
},_setLastMousePosition:function(x,y){this.__qs=x;
this.__qt=y;
}},destruct:function(){this.__qp=null;
}});
})();
(function(){var a="qx.ui.splitpane.Slider";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var e="center",d="knob",c="middle",b="qx.ui.splitpane.Splitter",a="vertical";
qx.Class.define(b,{extend:qx.ui.core.Widget,construct:function(h){arguments.callee.base.call(this);
if(h.getOrientation()==a){this._setLayout(new qx.ui.layout.HBox(0,e));
this._getLayout().setAlignY(c);
}else{this._setLayout(new qx.ui.layout.VBox(0,c));
this._getLayout().setAlignX(e);
}this._createChildControl(d);
},properties:{allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{_createChildControlImpl:function(f){var g;

switch(f){case d:g=new qx.ui.basic.Image;
this._add(g);
break;
}return g||arguments.callee.base.call(this,f);
}}});
})();
(function(){var s="_applyLayoutChange",r="left",q="width",p="center",o="top",n="Decorator",m="middle",k="_applyReversed",j="qx.debug",h="bottom",c="' is not supported by the HBox layout!",g="Boolean",f="flex",b="right",a="Integer",e="The property '",d="qx.ui.layout.HBox";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(v,w,x){arguments.callee.base.call(this);

if(v){this.setSpacing(v);
}
if(w){this.setAlignX(w);
}
if(x){this.setSeparator(x);
}},properties:{alignX:{check:[r,p,b],init:r,apply:s},alignY:{check:[o,m,h],init:o,apply:s},spacing:{check:a,init:0,apply:s},separator:{check:n,nullable:true,apply:s},reversed:{check:g,init:false,apply:k}},members:{__jO:null,__jP:null,__jQ:null,__jR:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jS:function(){var bc=this._getLayoutChildren();
var length=bc.length;
var Y=false;
var W=this.__jO&&this.__jO.length!=length&&this.__jP&&this.__jO;
var ba;
var X=W?this.__jO:new Array(length);
var bb=W?this.__jP:new Array(length);
if(this.getReversed()){bc=bc.concat().reverse();
}for(var i=0;i<length;i++){ba=bc[i].getLayoutProperties();

if(ba.width!=null){X[i]=parseFloat(ba.width)/100;
}
if(ba.flex!=null){bb[i]=ba.flex;
Y=true;
}else{bb[i]=0;
}}if(!W){this.__jO=X;
this.__jP=bb;
}this.__jQ=Y;
this.__jR=bc;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(j,{"on":function(t,name,u){this.assert(name===f||name===q,e+name+c);

if(name==q){this.assertMatch(u,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(u);
this.assert(u>=0);
}},"off":null}),renderLayout:function(y,z){if(this._invalidChildrenCache){this.__jS();
}var F=this.__jR;
var length=F.length;
var O=qx.ui.layout.Util;
var N=this.getSpacing();
var R=this.getSeparator();

if(R){var C=O.computeHorizontalSeparatorGaps(F,N,R);
}else{var C=O.computeHorizontalGaps(F,N,true);
}var i,A,L,K;
var Q=[];
var G=C;

for(i=0;i<length;i+=1){K=this.__jO[i];
L=K!=null?Math.floor((y-C)*K):F[i].getSizeHint().width;
Q.push(L);
G+=L;
}if(this.__jQ&&G!=y){var I={};
var M,P;

for(i=0;i<length;i+=1){M=this.__jP[i];

if(M>0){H=F[i].getSizeHint();
I[i]={min:H.minWidth,value:Q[i],max:H.maxWidth,flex:M};
}}var D=O.computeFlexOffsets(I,y,G);

for(i in D){P=D[i].offset;
Q[i]+=P;
G+=P;
}}var V=F[0].getMarginLeft();
if(G<y&&this.getAlignX()!=r){V=y-G;

if(this.getAlignX()===p){V=Math.round(V/2);
}}var H,top,B,L,E,T,J;
var N=this.getSpacing();
this._clearSeparators();
if(R){var S=qx.theme.manager.Decoration.getInstance().resolve(R).getInsets();
var U=S.left+S.right;
}for(i=0;i<length;i+=1){A=F[i];
L=Q[i];
H=A.getSizeHint();
T=A.getMarginTop();
J=A.getMarginBottom();
B=Math.max(H.minHeight,Math.min(z-T-J,H.maxHeight));
top=O.computeVerticalAlignOffset(A.getAlignY()||this.getAlignY(),B,z,T,J);
if(i>0){if(R){V+=E+N;
this._renderSeparator(R,{left:V,top:0,width:U,height:z});
V+=U+N+A.getMarginLeft();
}else{V+=O.collapseMargins(N,E,A.getMarginLeft());
}}A.renderLayout(V,top,L,B);
V+=L;
E=A.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jS();
}var bj=qx.ui.layout.Util;
var br=this.__jR;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__jP[i];
var bf=this.__jO[i];

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
}},destruct:function(){this.__jO=this.__jP=this.__jR=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(j,name,k){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var y,B;
var o,n,w,p;

for(var i=0;i<length;i++){y=C[i];
B=y.getLayoutProperties().type;

if(B===e){n=y;
}else if(B===h){w=y;
}else if(!o){o=y;
}else{p=y;
}}
if(o&&p){var E=o.getLayoutProperties().flex;
var r=p.getLayoutProperties().flex;

if(E==null){E=1;
}
if(r==null){r=1;
}var D=o.getSizeHint();
var u=n.getSizeHint();
var v=p.getSizeHint();
var q=D.height;
var z=u.height;
var A=v.height;

if(E>0&&r>0){var s=E+r;
var t=m-z;
var q=Math.round((t/s)*E);
var A=t-q;
var x=qx.ui.layout.Util.arrangeIdeals(D.minHeight,q,D.maxHeight,v.minHeight,A,v.maxHeight);
q=x.begin;
A=x.end;
}else if(E>0){q=m-z-A;

if(q<D.minHeight){q=D.minHeight;
}
if(q>D.maxHeight){q=D.maxHeight;
}}else if(r>0){A=m-q-z;

if(A<v.minHeight){A=v.minHeight;
}
if(A>v.maxHeight){A=v.maxHeight;
}}o.renderLayout(0,0,l,q);
n.renderLayout(0,q,l,z);
p.renderLayout(0,q+z,l,A);
}else{n.renderLayout(0,0,0,0);
if(o){o.renderLayout(0,0,l,m);
}else if(p){p.renderLayout(0,0,l,m);
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
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(a,{"on":function(j,name,k){this.assert(name===g||name===f,b+name+c);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var z,B;
var o,n,w,p;

for(var i=0;i<length;i++){z=C[i];
B=z.getLayoutProperties().type;

if(B===e){n=z;
}else if(B===h){w=z;
}else if(!o){o=z;
}else{p=z;
}}
if(o&&p){var E=o.getLayoutProperties().flex;
var q=p.getLayoutProperties().flex;

if(E==null){E=1;
}
if(q==null){q=1;
}var D=o.getSizeHint();
var t=n.getSizeHint();
var v=p.getSizeHint();
var A=D.width;
var y=t.width;
var x=v.width;

if(E>0&&q>0){var r=E+q;
var s=l-y;
var A=Math.round((s/r)*E);
var x=s-A;
var u=qx.ui.layout.Util.arrangeIdeals(D.minWidth,A,D.maxWidth,v.minWidth,x,v.maxWidth);
A=u.begin;
x=u.end;
}else if(E>0){A=l-y-x;

if(A<D.minWidth){A=D.minWidth;
}
if(A>D.maxWidth){A=D.maxWidth;
}}else if(q>0){x=l-A-y;

if(x<v.minWidth){x=v.minWidth;
}
if(x>v.maxWidth){x=v.maxWidth;
}}o.renderLayout(0,0,A,m);
n.renderLayout(A,0,y,m);
p.renderLayout(A+y,0,x,m);
}else{n.renderLayout(0,0,0,0);
if(o){o.renderLayout(0,0,l,m);
}else if(p){p.renderLayout(0,0,l,m);
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
(function(){var r="showingPlaceholder",q="color",p="",o="none",n="qx.client",m="qx.dynlocale",l="Boolean",k="qx.event.type.Data",j="readonly",i="input",bh="focusin",bg="visibility",bf="focusout",be="changeLocale",bd="hidden",bc="on",bb="absolute",ba="readOnly",Y="text",X="_applyTextAlign",y="px",z="RegExp",w=")",x="syncAppearance",u="changeValue",v="gecko",s="A",t="change",C="textAlign",D="focused",L="center",J="visible",P="disabled",N="url(",T="off",R="String",F="resize",W="qx.ui.form.AbstractField",V="transparent",U="spellcheck",E="false",H="right",I="PositiveInteger",K="mshtml",M="abstract",O="block",Q="webkit",S="_applyReadOnly",A="_applyPlaceholder",B="left",G="qx/static/blank.gif";
qx.Class.define(W,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:M,construct:function(bB){arguments.callee.base.call(this);

if(bB!=null){this.setValue(bB);
}this.getContentElement().addListener(t,this._onChangeContent,this);
this.addListener(x,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().addListener(be,this._onChangeLocale,this);
}},events:{"input":k,"changeValue":k},properties:{textAlign:{check:[B,L,H],nullable:true,themeable:true,apply:X},readOnly:{check:l,apply:S,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:I,init:Infinity},liveUpdate:{check:l,init:false},placeholder:{check:R,nullable:true,apply:A},filter:{check:z,nullable:true,init:null}},members:{__ku:true,__kv:null,__kw:null,__kx:null,getFocusElement:function(){var h=this.getContentElement();

if(h){return h;
}},_createInputElement:function(){return new qx.html.Input(Y);
},renderLayout:function(bC,top,bD,bE){var bF=this._updateInsets;
var bJ=arguments.callee.base.call(this,bC,top,bD,bE);
if(!bJ){return;
}var bH=bJ.size||bF;
var bK=y;

if(bH||bJ.local||bJ.margin){var bG=this.getInsets();
var innerWidth=bD-bG.left-bG.right;
var innerHeight=bE-bG.top-bG.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bI=this.getContentElement();

if(bF){this.__kA().setStyles({"left":bG.left+bK,"top":bG.top+bK});
}
if(bH){this.__kA().setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
bI.setStyles({"width":innerWidth+bK,"height":innerHeight+bK});
}},_createContentElement:function(){var by=this._createInputElement();
by.setStyles({"border":o,"padding":0,"margin":0,"display":O,"background":V,"outline":o,"appearance":o,"position":bb,"autoComplete":T});
by.setSelectable(this.getSelectable());
by.setEnabled(this.getEnabled());
by.addListener(i,this._onHtmlInput,this);
if(qx.core.Variant.isSet(n,v)){by.setAttribute(U,E);
}if(qx.core.Variant.isSet(n,Q)){by.setStyle(F,o);
}if(qx.core.Variant.isSet(n,K)){by.setStyles({backgroundImage:N+qx.util.ResourceManager.getInstance().toUri(G)+w});
}return by;
},_applyEnabled:function(bL,bM){arguments.callee.base.call(this,bL,bM);
this.getContentElement().setEnabled(bL);

if(bL){this._showPlaceholder();
}else{this._removePlaceholder();
}},__ky:{width:16,height:16},_getContentHint:function(){return {width:this.__ky.width*10,height:this.__ky.height||16};
},_applyFont:function(a,b){var c;

if(a){var d=qx.theme.manager.Font.getInstance().resolve(a);
c=d.getStyles();
}else{c=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(c);
this.__kA().setStyles(c);
if(a){this.__ky=qx.bom.Label.getTextSize(s,c);
}else{delete this.__ky;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bi,bj){if(bi){this.getContentElement().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
this.__kA().setStyle(q,qx.theme.manager.Color.getInstance().resolve(bi));
}else{this.getContentElement().removeStyle(q);
this.__kA().removeStyle(q);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__ky;
},_onHtmlInput:function(e){var bs=e.getData();
var br=true;
this.__ku=false;
if(this.getFilter()!=null){var bt=p;
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
}if(br){this.fireDataEvent(i,bs,this.__kx);
this.__kx=bs;
if(this.getLiveUpdate()){this.__kz(bs);
}}},__kz:function(bw){this.fireNonBubblingEvent(u,qx.event.type.Data,[bw,this.__kw]);
this.__kw=bw;
},setValue:function(bN){if(bN===null){if(this.__ku){return bN;
}bN=p;
this.__ku=true;
}else{this.__ku=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bN)){var bP=this.getContentElement();

if(bN.length>this.getMaxLength()){bN=bN.substr(0,this.getMaxLength());
}
if(bP.getValue()!=bN){var bQ=bP.getValue();
bP.setValue(bN);
var bO=this.__ku?null:bN;
this.__kw=bQ;
this.__kz(bO);
}this._showPlaceholder();
return bN;
}throw new Error("Invalid value type: "+bN);
},getValue:function(){var bx=this.getContentElement().getValue();
return this.__ku?null:bx;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__ku=e.getData()===null;
this.__kz(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bu,bv){this.getContentElement().setTextSelection(bu,bv);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bo=this.getValue()||p;
var bn=this.getPlaceholder();

if(bn!=null&&bo==p&&!this.hasState(D)&&!this.hasState(P)){if(this.hasState(r)){this._syncPlaceholder();
}else{this.addState(r);
}}},_removePlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,bd);
this.removeState(r);
}},_syncPlaceholder:function(){if(this.hasState(r)){this.__kA().setStyle(bg,J);
}},__kA:function(){if(this.__kv==null){this.__kv=new qx.html.Label();
this.__kv.setStyles({"visibility":bd,"zIndex":6,"position":bb});
this.getContainerElement().add(this.__kv);
}return this.__kv;
},_onChangeLocale:qx.core.Variant.select(m,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bz,bA){this.__kA().setValue(bz);

if(bz!=null){this.addListener(bh,this._removePlaceholder,this);
this.addListener(bf,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bh,this._removePlaceholder,this);
this.removeListener(bf,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(f,g){this.getContentElement().setStyle(C,f);
},_applyReadOnly:function(bk,bl){var bm=this.getContentElement();
bm.setAttribute(ba,bk);

if(bk){this.addState(j);
this.setFocusable(false);
}else{this.removeState(j);
this.setFocusable(true);
}}},destruct:function(){this.__kv=null;

if(qx.core.Variant.isSet(m,bc)){qx.locale.Manager.getInstance().removeListener(be,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var p="none",o="wrap",n="value",m="qx.client",l="textarea",k="off",j="on",i="qxSelectable",h="",g="webkit",c="input",f="qx.html.Input",e="select",b="disabled",a="read-only",d="userSelect";
qx.Class.define(f,{extend:qx.html.Element,construct:function(s){arguments.callee.base.call(this);
this.__kB=s;
if(s===e||s===l){this.setNodeName(s);
}else{this.setNodeName(c);
}},members:{__kB:null,__kC:null,__kD:null,_createDomElement:function(){return qx.bom.Input.create(this.__kB);
},_applyProperty:function(name,t){arguments.callee.base.call(this,name,t);
var u=this.getDomElement();

if(name===n){qx.bom.Input.setValue(u,t);
}else if(name===o){qx.bom.Input.setWrap(u,t);
}},setEnabled:qx.core.Variant.select(m,{"webkit":function(B){this.__kD=B;

if(!B){this.setStyles({"userModify":a,"userSelect":p});
}else{this.setStyles({"userModify":null,"userSelect":this.__kC?null:p});
}},"default":function(r){this.setAttribute(b,r===false);
}}),setSelectable:qx.core.Variant.select(m,{"webkit":function(x){this.__kC=x;
this.setAttribute(i,x?j:k);
if(qx.core.Variant.isSet(m,g)){var y=this.__kD?x?null:p:p;
this.setStyle(d,y);
}},"default":function(z){this.setAttribute(i,z?j:k);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(n,v);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(n)||h;
},setWrap:function(q){if(this.__kB===l){this._setProperty(o,q);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__kB===l){return this._getProperty(o);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var W="change",V="input",U="qx.client",T="text",S="password",R="checkbox",Q="radio",P="textarea",O="keypress",N="opera",H="propertychange",M="blur",K="keydown",G="keyup",F="select-multiple",J="checked",I="value",L="select",E="qx.event.handler.Input";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(U,N)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__kE:false,__kF:null,__kG:null,canHandleEvent:function(a,b){var c=a.tagName.toLowerCase();

if(b===V&&(c===V||c===P)){return true;
}
if(b===W&&(c===V||c===P||c===L)){return true;
}return false;
},registerEvent:qx.core.Variant.select(U,{"mshtml":function(f,g,h){if(!f.__kH){var j=f.tagName.toLowerCase();
var k=f.type;

if(k===T||k===S||j===P||k===R||k===Q){qx.bom.Event.addNativeListener(f,H,this._onPropertyWrapper);
}
if(k!==R&&k!==Q){qx.bom.Event.addNativeListener(f,W,this._onChangeValueWrapper);
}
if(k===T||k===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,f);
qx.bom.Event.addNativeListener(f,O,this._onKeyPressWrapped);
}f.__kH=true;
}},"default":function(Y,ba,bb){if(ba===V){this.__kI(Y);
}else if(ba===W){if(Y.type===Q||Y.type===R){qx.bom.Event.addNativeListener(Y,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(Y,W,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(U,N)){if(Y.type===T||Y.type===S){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Y);
qx.bom.Event.addNativeListener(Y,O,this._onKeyPressWrapped);
}}}}}),__kI:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(bd){var be=bd.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&be==P){qx.bom.Event.addNativeListener(bd,O,this._onInputWrapper);
}qx.bom.Event.addNativeListener(bd,V,this._onInputWrapper);
},"opera":function(p){qx.bom.Event.addNativeListener(p,G,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(p,K,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(p,M,this._onBlurWrapper);
qx.bom.Event.addNativeListener(p,V,this._onInputWrapper);
},"default":function(u){qx.bom.Event.addNativeListener(u,V,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(U,{"mshtml":function(v,w){if(v.__kH){var x=v.tagName.toLowerCase();
var y=v.type;

if(y===T||y===S||x===P||y===R||y===Q){qx.bom.Event.removeNativeListener(v,H,this._onPropertyWrapper);
}
if(y!==R&&y!==Q){qx.bom.Event.removeNativeListener(v,W,this._onChangeValueWrapper);
}
if(y===T||y===S){qx.bom.Event.removeNativeListener(v,O,this._onKeyPressWrapped);
}
try{delete v.__kH;
}catch(bc){v.__kH=null;
}}},"default":function(m,n){if(n===V){this.__kI(m);
}else if(n===W){if(m.type===Q||m.type===R){qx.bom.Event.removeNativeListener(m,W,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(m,W,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(U,N)){if(m.type===T||m.type===S){qx.bom.Event.removeNativeListener(m,O,this._onKeyPressWrapped);
}}}}),__kJ:qx.core.Variant.select(U,{"mshtml":null,"webkit":function(B){var C=B.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&C==P){qx.bom.Event.removeNativeListener(B,O,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(B,V,this._onInputWrapper);
},"opera":function(t){qx.bom.Event.removeNativeListener(t,G,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(t,K,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(t,M,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(t,V,this._onInputWrapper);
},"default":function(d){qx.bom.Event.removeNativeListener(d,V,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(U,{"mshtml|opera":function(e,bf){if(e.keyCode===13){if(bf.value!==this.__kG){this.__kG=bf.value;
qx.event.Registration.fireEvent(bf,W,qx.event.type.Data,[bf.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(U,{"opera":function(e){if(e.keyCode===13){this.__kE=false;
}},"default":null}),_onBlur:qx.core.Variant.select(U,{"opera":function(e){if(this.__kF){window.clearTimeout(this.__kF);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var D=e.target;
if(!this.__kE){if(qx.core.Variant.isSet(U,N)){this.__kF=window.setTimeout(function(){qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
},0);
}else{qx.event.Registration.fireEvent(D,V,qx.event.type.Data,[D.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var A=e.target||e.srcElement;
var z=A.value;

if(A.type===F){var z=[];

for(var i=0,o=A.options,l=o.length;i<l;i++){if(o[i].selected){z.push(o[i].value);
}}}qx.event.Registration.fireEvent(A,W,qx.event.type.Data,[z]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var s=e.target;

if(s.type===Q){if(s.checked){qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.value]);
}}else{qx.event.Registration.fireEvent(s,W,qx.event.type.Data,[s.checked]);
}}),_onProperty:qx.core.Variant.select(U,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var q=e.target||e.srcElement;
var r=e.propertyName;

if(r===I&&(q.type===T||q.type===S||q.tagName.toLowerCase()===P)){if(!q.__inValueSet){qx.event.Registration.fireEvent(q,V,qx.event.type.Data,[q.value]);
}}else if(r===J){if(q.type===R){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.checked]);
}else if(q.checked){qx.event.Registration.fireEvent(q,W,qx.event.type.Data,[q.value]);
}}}),"default":function(){}})},defer:function(X){qx.event.Registration.addHandler(X);
}});
})();
(function(){var k="",j="select",h="qx.client",g="soft",f="off",e="text",d="Unsupported input type.",c="nowrap",b="radio",a="textarea",y="auto",x="qx.debug",w="input",v="option",u="value",t="number",s="qx.bom.Input",r="normal",q="mshtml",p="wrap",n="checkbox",o="select-one",m="on";
qx.Class.define(s,{statics:{__kK:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(Q,R,S){if(qx.core.Variant.isSet(x,m)){qx.core.Assert.assertKeyInMap(Q,this.__kK,d);
}var R=R?qx.lang.Object.clone(R):{};
var T;

if(Q===a||Q===j){T=Q;
}else{T=w;
R.type=Q;
}return qx.bom.Element.create(T,R,S);
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
}}else if(G===e&&qx.core.Variant.isSet(h,q)){D.__kL=true;
D.value=E;
D.__kL=null;
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
}},setWrap:qx.core.Variant.select(h,{"mshtml":function(z,A){z.wrap=A?g:f;
},"gecko|webkit":function(M,N){var P=N?g:f;
var O=N?k:y;
M.setAttribute(p,P);
M.style.overflow=O;
},"default":function(B,C){B.style.whiteSpace=C?r:c;
}})}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="__qf",f="changeSelection",d="changeSelected",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__qf:null,getSelection:function(){var l=this.__qg().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(m){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(m.length){case 0:this.resetSelection();
break;
case 1:this.__qg().setSelected(m[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+m.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__qg().resetSelected();
},isSelected:function(k){return this.__qg().isSelected(k);
},isSelectionEmpty:function(){return this.__qg().isSelectionEmpty();
},getSelectables:function(){return this.__qg().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(f,b,a);
},__qg:function(){if(this.__qf==null){var i=this;
this.__qf=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(j){if(i._isItemSelectable){return i._isItemSelectable(j);
}else{return j.isEnabled()&&j.isVisible();
}}});
this.__qf.addListener(d,this._onChangeSelected,this);
}this.__qf.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__qf;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var g="_applyDynamic",f="changeSelection",d="Boolean",c="qx.ui.container.Stack";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(f,this.__qh,this);
},properties:{dynamic:{check:d,init:false,apply:g}},members:{_applyDynamic:function(o){var q=this._getChildren();
var p=this.getSelection()[0];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r!=p){if(o){q[i].exclude();
}else{q[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(n){return n.isEnabled();
},__qh:function(e){var z=e.getOldData()[0];
var A=e.getData()[0];

if(z){if(this.isDynamic()){z.exclude();
}else{z.hide();
}}
if(A){A.show();
}},add:function(a){this._add(a);
var b=this.getSelection()[0];

if(!b){this.setSelection([a]);
}else if(b!==a){if(this.isDynamic()){a.exclude();
}else{a.hide();
}}},remove:function(x){this._remove(x);

if(this.getSelection()[0]===x){var y=this._getChildren()[0];

if(y){this.setSelection([y]);
}else{this.resetSelection();
}}},indexOf:function(w){return this._indexOf(w);
},getChildren:function(){return this._getChildren();
},previous:function(){var k=this.getSelection()[0];
var h=this._indexOf(k)-1;
var m=this._getChildren();

if(h<0){h=m.length-1;
}var j=m[h];
this.setSelection([j]);
},next:function(){var t=this.getSelection()[0];
var s=this._indexOf(t)+1;
var u=this._getChildren();
var v=u[s]||u[0];
this.setSelection([v]);
}}});
})();
(function(){var k="__qk",j="__qj",h="Boolean",g="qx.ui.core.SingleSelectionManager",f="qx.debug",e="__qi",d="Invalid selectionProvider!",c="changeSelected",b="on",a="qx.event.type.Data";
qx.Class.define(g,{extend:qx.core.Object,construct:function(v){arguments.callee.base.call(this);

if(qx.core.Variant.isSet(f,b)){qx.core.Assert.assertInterface(v,qx.ui.core.ISingleSelectionProvider,d);
}this.__qi=v;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:h,init:true,apply:k}},members:{__qj:null,__qi:null,getSelected:function(){return this.__qj;
},setSelected:function(l){if(!this.__qm(l)){throw new Error("Could not select "+l+", because it is not a child element!");
}this.__ql(l);
},resetSelected:function(){this.__ql(null);
},isSelected:function(m){if(!this.__qm(m)){throw new Error("Could not check if "+m+" is selected,"+" because it is not a child element!");
}return this.__qj===m;
},isSelectionEmpty:function(){return this.__qj==null;
},getSelectables:function(){var n=this.__qi.getItems();
var o=[];

for(var i=0;i<n.length;i++){if(this.__qi.isItemSelectable(n[i])){o.push(n[i]);
}}return o;
},__qk:function(w,x){if(!w){this.__ql(this.__qj);
}},__ql:function(r){var u=this.__qj;
var t=r;

if(t!=null&&u===t){return;
}
if(!this.isAllowEmptySelection()&&t==null){var s=this.getSelectables()[0];

if(s){t=s;
}}this.__qj=t;
this.fireDataEvent(c,t,u);
},__qm:function(p){var q=this.__qi.getItems();

for(var i=0;i<q.length;i++){if(q[i]===p){return true;
}}return false;
}},destruct:function(){if(this.__qi.toHashCode){this._disposeObjects(e);
}else{this.__qi=null;
}this._disposeObjects(j);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var D="",C="The property 'timeoutInterval' has been deprecated. The history manager",B="now uses 'qx.event.Idle' for polling.",A="qx.debug",z="on",y='#',x="String",w="request",v="mshtml",u="Invalid attribute 'value'.",o="changeTitle",t="abstract",r="_applyState",n="qx.client",m="changeState",q="qx.bom.History",p="_applyTitle",s="qx.event.type.Data";
qx.Class.define(q,{extend:qx.core.Object,type:t,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(y)[0]+y;
this.__rp={};
this._setInitialState();
},events:{"request":s},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(n,v)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:x,event:o,nullable:true,apply:p},state:{check:x,event:m,nullable:true,apply:r}},members:{__rp:null,_applyState:function(b,c){this._writeState(b);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(d){if(qx.lang.Type.isString(d)){return encodeURIComponent(d);
}return D;
},_decode:function(e){if(qx.lang.Type.isString(e)){return decodeURIComponent(e);
}return D;
},_applyTitle:function(i){if(i!=null){document.title=i||D;
}},addToHistory:function(g,h){if(!qx.lang.Type.isString(g)){g=g+D;
}
if(qx.lang.Type.isString(h)){this.setTitle(h);
this.__rp[g]=h;
}
if(this.getState()!==g){this._writeState(g);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(E){this.setState(E);
this.fireDataEvent(w,E);

if(this.__rp[E]!=null){this.setTitle(this.__rp[E]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(j){var k=this._baseUrl+(j||D);
var l=window.location;

if(k!=l.href){l.href=k;
}},_getHash:function(){var f=/#(.*)$/.exec(window.location.href);
return f&&f[1]?f[1]:D;
},setTimeoutInterval:function(a){if(qx.core.Variant.isSet(A,z)){qx.core.Assert.assertNumber(a,u);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,C+B);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(A,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C+B);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(A,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,C+B);
}}},destruct:function(){this.__rp=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__rr();
},members:{__rq:null,__rr:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__rq=qx.lang.Function.bind(this.__rt,this);
qx.bom.Event.addNativeListener(window,d,this.__rq);
}else{qx.event.Idle.getInstance().addListener(c,this.__rt,this);
}},__rs:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__rq);
}else{qx.event.Idle.getInstance().removeListener(c,this.__rt,this);
}},__rt:function(){var g=this._readState();

if(qx.lang.Type.isString(g)&&g!=this.getState()){this._onHistoryLoad(g);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(e){qx.event.Timer.once(function(){this._setHash(this._encode(e));
},this,0);
},"default":function(f){this._setHash(this._encode(f));
}})},destruct:function(){this.__rs();
}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__rx();
},members:{__ru:null,__rv:false,__rw:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__rw=this._getHash();
},_setHash:function(z){arguments.callee.base.call(this,z);
this.__rw=this._encode(z);
},_readState:function(){if(!this.__rv){return this._decode(this._getHash());
}var x=this.__ru.contentWindow.document;
var y=x.getElementById(i);
return y?this._decode(y.innerText):l;
},_writeState:function(p){var p=this._encode(p);
this._setHash(p);
this.__rw=p;

try{var q=this.__ru.contentWindow.document;
q.open();
q.write(h+p+g);
q.close();
}catch(w){}},__rx:function(){this.__rB(function(){qx.event.Idle.getInstance().addListener(o,this.__ry,this);
});
},__ry:function(e){var B=null;
var A=this._getHash();

if(!this.__rA(A)){B=this.__rz(A);
}else{B=this._readState();
}
if(qx.lang.Type.isString(B)&&B!=this.getState()){this._onHistoryLoad(B);
}},__rz:function(C){C=this._decode(C);
this._writeState(C);
return C;
},__rA:function(a){return qx.lang.Type.isString(a)&&a==this.__rw;
},__rB:function(r){this.__ru=this.__rC();
document.body.appendChild(this.__ru);
this.__rD(function(){this._writeState(this.getState());

if(r){r.call(this);
}},this);
},__rC:function(){var v=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
v.style.visibility=f;
v.style.position=c;
v.style.left=n;
v.style.top=n;
return v;
},__rD:function(s,t,u){if(typeof u===d){u=0;
}
if(!this.__ru.contentWindow||!this.__ru.contentWindow.document){if(u>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__rD(s,t,++u);
},this,10);
return;
}this.__rv=true;
s.call(t||window);
}},destruct:function(){this.__ru=null;
qx.event.Idle.getInstance().addListener(o,this.__ry,this);
}});
}})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(i){qx.event.Registration.fireEvent(i,b);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===a;
},registerEvent:function(k,l,m){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var h="qx.client",g="webkit",f="body",e="iframe",d="qx.bom.Iframe";
qx.Class.define(d,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(i,j){var i=i?qx.lang.Object.clone(i):{};
var k=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var l in k){if(i[l]==null){i[l]=k[l];
}}return qx.bom.Element.create(e,i,j);
},getWindow:qx.core.Variant.select(h,{"mshtml|gecko":function(C){try{return C.contentWindow;
}catch(p){return null;
}},"default":function(z){try{var A=this.getDocument(z);
return A?A.defaultView:null;
}catch(q){return null;
}}}),getDocument:qx.core.Variant.select(h,{"mshtml":function(m){try{var n=this.getWindow(m);
return n?n.document:null;
}catch(u){return null;
}},"default":function(B){try{return B.contentDocument;
}catch(D){return null;
}}}),getBody:function(r){try{var s=this.getDocument(r);
return s?s.getElementsByTagName(f)[0]:null;
}catch(t){return null;
}},setSource:function(a,b){try{if(this.getWindow(a)&&qx.dom.Hierarchy.isRendered(a)){try{if(qx.core.Variant.isSet(h,g)&&qx.bom.client.Platform.MAC){var c=this.getContentWindow();

if(c){c.stop();
}}this.getWindow(a).location.replace(b);
}catch(v){a.src=b;
}}else{a.src=b;
}}catch(o){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(x){var y=this.getDocument(x);

try{if(y&&y.location){return y.location.href;
}}catch(w){}return null;
}}});
})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(r){this._shortcut.setEnabled(r);
},_applyShortcut:function(a){this._shortcut.setShortcut(a);
},execute:function(q){this.fireDataEvent(o,q);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",T="Escape",S="qx.event.type.Data",R="_applyShortcut",Q="PrintScreen",P="NumLock",O="5",N="8",M="execute",L="Meta",K="0",t="2",u="This message will be made private.",r="Shift",s="You can only specify one non modifier key!",p="3",q="/",n="_applyEnabled",o="String",v="changeEnabled",w="*",C="qx.bom.Shortcut",B="6",E="4",D="1",G="Alt",F="Not a valid key name for a shortcut: ",y="PageDown",J="Whitespaces are not allowed within shortcuts",I="Delete",H="7",x="a",z="z",A="9";
qx.Class.define(C,{extend:qx.core.Object,construct:function(U){arguments.callee.base.call(this);
this.__vM={};
this.__vN=null;

if(U!=null){this.setShortcut(U);
}this.initEnabled();
},events:{"execute":S},properties:{enabled:{init:true,check:l,event:v,apply:n},shortcut:{check:o,apply:R,nullable:true},autoRepeat:{check:l,init:false}},members:{__vM:g,__vN:g,execute:function(bi){this.fireDataEvent(M,bi);
},__vO:function(event){if(this.getEnabled()&&this.__vQ(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__vP:function(event){if(this.getEnabled()&&this.__vQ(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bd,be){if(bd){qx.event.Registration.addListener(document.documentElement,h,this.__vO,this);
qx.event.Registration.addListener(document.documentElement,d,this.__vP,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__vO,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__vP,this);
}},_applyShortcut:function(V,W){if(V){if(V.search(/[\s]+/)!=-1){var ba=J;
this.error(ba);
throw new Error(ba);
}this.__vM={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__vN=null;
var X;
var a=[];

while(V.length>0&&X!=-1){X=V.search(/[-+]+/);
a.push((V.length==1||X==-1)?V:V.substring(0,X));
V=V.substring(X+1);
}var Y=a.length;

for(var i=0;i<Y;i++){var bb=this.__vS(a[i]);

switch(bb){case f:case r:case L:case G:this.__vM[bb]=true;
break;
case m:var ba=F+a[i];
this.error(ba);
throw ba;
default:if(this.__vN){var ba=s;
this.error(ba);
throw ba;
}this.__vN=bb;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.__vQ(e);
},__vQ:function(e){var bc=this.__vN;

if(!bc){return ;
}if((!this.__vM.Shift&&e.isShiftPressed())||(this.__vM.Shift&&!e.isShiftPressed())||(!this.__vM.Control&&e.isCtrlPressed())||(this.__vM.Control&&!e.isCtrlPressed())||(!this.__vM.Meta&&e.isMetaPressed())||(this.__vM.Meta&&!e.isMetaPressed())||(!this.__vM.Alt&&e.isAltPressed())||(this.__vM.Alt&&!e.isAltPressed())){return false;
}
if(bc==e.getKeyIdentifier()){return true;
}return false;
},__vR:{esc:T,ctrl:f,print:Q,del:I,pageup:b,pagedown:y,numlock:P,numpad_0:K,numpad_1:D,numpad_2:t,numpad_3:p,numpad_4:E,numpad_5:O,numpad_6:B,numpad_7:H,numpad_8:N,numpad_9:A,numpad_divide:q,numpad_multiply:w,numpad_minus:c,numpad_plus:k},__vS:function(bj){var bk=qx.event.handler.Keyboard;
var bl=m;

if(bk.isValidKeyIdentifier(bj)){return bj;
}
if(bj.length==1&&bj>=x&&bj<=z){return bj.toUpperCase();
}bj=bj.toLowerCase();
var bl=this.__vR[bj]||qx.lang.String.firstUp(bj);

if(bk.isValidKeyIdentifier(bl)){return bl;
}else{return m;
}},toString:function(){var bh=this.__vN;
var bg=[];

for(var bf in this.__vM){if(this.__vM[bf]){bg.push(qx.locale.Key.getKeyName(j,bf));
}}
if(bh){bg.push(qx.locale.Key.getKeyName(j,bh));
}return bg.join(k);
}},destruct:function(){this.setEnabled(false);
this.__vM=this.__vN=null;
}});
})();
(function(){var bA="Control",bz="Left",by="Meta",bx="Pause",bw="End",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="Escape",W="key_full_Meta",bH="PrintScreen",bI="NumLock",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="key_full_Enter",bC="key_full_Control",bJ="qx.locale.Key",bK="Tabulator",bk="key_full_Space",bj="key_short_Meta",bm="key_short_PageUp",bl="key_short_Pause",bo="key_full_Down",bn="key_short_Apps",bq="key_short_Win",bp="key_full_Right",bi="key_short_Up",bh="key_full_PageDown",a="key_full_Alt",b="PgDn",c="Esc",d="key_full_Insert",e="key_short_Space",f="key_short_Backspace",g="key_short_Home",h="full",i="key_short_Down",j="PgUp",bO="_Mac",bN="key_short_CapsLock",bM="PageUp",bL="key_full_Up",bS="key_full_Home",bR="key_full_Backspace",bQ="PageDown",bP="CapsLock",bU="Ins",bT="key_short_PrintScreen",G="Tab",H="key_full_Apps",E="key_short_Tab",F="key_short_End",K="_",L="Caps",I="key_short_NumLock",J="Num",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="key_full_Escape",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bJ,{statics:{getKeyName:function(bV,bW,bX){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(bV,[l,h]);
}var ca=s+bV+K+bW;
if(qx.bom.client.Platform.MAC&&bW==bA){ca+=bO;
}var bY=qx.locale.Manager.getInstance().translate(ca,[],bX);

if(bY==ca){return qx.locale.Key._keyNames[ca]||bW;
}else{return bY;
}}},defer:function(cb,cc,cd){var cf={};
var ce=qx.locale.Manager;
cf[ce.marktr(f)]=bf;
cf[ce.marktr(E)]=G;
cf[ce.marktr(e)]=be;
cf[ce.marktr(R)]=bb;
cf[ce.marktr(k)]=bc;
cf[ce.marktr(S)]=bu;
cf[ce.marktr(bG)]=bu;
cf[ce.marktr(bF)]=Y;
cf[ce.marktr(bN)]=L;
cf[ce.marktr(bj)]=by;
cf[ce.marktr(N)]=c;
cf[ce.marktr(D)]=bz;
cf[ce.marktr(bi)]=bd;
cf[ce.marktr(m)]=bg;
cf[ce.marktr(i)]=bv;
cf[ce.marktr(bm)]=j;
cf[ce.marktr(Q)]=b;
cf[ce.marktr(F)]=bw;
cf[ce.marktr(g)]=bt;
cf[ce.marktr(bD)]=bU;
cf[ce.marktr(A)]=bE;
cf[ce.marktr(I)]=J;
cf[ce.marktr(bT)]=P;
cf[ce.marktr(r)]=ba;
cf[ce.marktr(bl)]=bx;
cf[ce.marktr(bq)]=br;
cf[ce.marktr(bn)]=bs;
cf[ce.marktr(bR)]=bf;
cf[ce.marktr(O)]=bK;
cf[ce.marktr(bk)]=be;
cf[ce.marktr(bB)]=bb;
cf[ce.marktr(y)]=bc;
cf[ce.marktr(bC)]=bA;
cf[ce.marktr(t)]=bA;
cf[ce.marktr(a)]=Y;
cf[ce.marktr(V)]=bP;
cf[ce.marktr(W)]=by;
cf[ce.marktr(B)]=X;
cf[ce.marktr(u)]=bz;
cf[ce.marktr(bL)]=bd;
cf[ce.marktr(bp)]=bg;
cf[ce.marktr(bo)]=bv;
cf[ce.marktr(z)]=bM;
cf[ce.marktr(bh)]=bQ;
cf[ce.marktr(v)]=bw;
cf[ce.marktr(bS)]=bt;
cf[ce.marktr(d)]=M;
cf[ce.marktr(w)]=U;
cf[ce.marktr(x)]=bI;
cf[ce.marktr(p)]=bH;
cf[ce.marktr(C)]=ba;
cf[ce.marktr(n)]=bx;
cf[ce.marktr(o)]=br;
cf[ce.marktr(H)]=bs;
cb._keyNames=cf;
}});
})();
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__mF:false,_setAllowMenuOpenHover:function(q){this.__mF=q;
},_isAllowMenuOpenHover:function(){return this.__mF;
},_applySpacing:function(n,o){var p=this._getLayout();
n==null?p.resetSpacing():p.setSpacing(n);
},addSpacer:function(){var m=new qx.ui.core.Spacer;
this._add(m,{flex:1});
return m;
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
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){arguments.callee.base.call(this);
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jj:null,__jk:false,__jl:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jk){this.__jk=false;
}else{this.__jk=true;
o.execute(this);
}}this.fireEvent(n);
},__jm:function(e){if(this.__jk){this.__jk=false;
return;
}this.__jk=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jl);
}
if(p!=null){this.__jl=p.addListener(n,this.__jm,this);
}var t=this.__jj;

if(t==null){this.__jj=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jj=null;
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
(function(){var l="pressed",k="hovered",j="changeVisibility",i="qx.ui.menu.Menu",h="submenu",g="Enter",f="contextmenu",d="changeMenu",c="qx.ui.form.MenuButton",b="abandoned",a="_applyMenu";
qx.Class.define(c,{extend:qx.ui.form.Button,construct:function(u,v,w){arguments.callee.base.call(this,u,v);
if(w!=null){this.setMenu(w);
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(n,o){if(o){o.removeListener(j,this._onMenuChange,this);
o.resetOpener();
}
if(n){n.addListener(j,this._onMenuChange,this);
n.setOpener(this);
n.removeState(h);
n.removeState(f);
}},open:function(q){var r=this.getMenu();

if(r){qx.ui.menu.Manager.getInstance().hideAll();
r.setOpener(this);
r.open();
if(q){var s=r.getSelectables()[0];

if(s){r.setSelectedButton(s);
}}}},_onMenuChange:function(e){var m=this.getMenu();

if(m.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var p=this.getMenu();

if(p){if(!p.isVisible()){this.open();
}else{p.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
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
(function(){var k="pressed",j="hovered",i="inherit",h="qx.ui.menubar.Button",g="keydown",f="menubar-button",d="keyup";
qx.Class.define(h,{extend:qx.ui.form.MenuButton,construct:function(a,b,c){arguments.callee.base.call(this,a,b,c);
this.removeListener(g,this._onKeyDown);
this.removeListener(d,this._onKeyUp);
},properties:{appearance:{refine:true,init:f},show:{refine:true,init:i},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(l){arguments.callee.base.call(this,l);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var n=this.getMenu();
var menubar=this.getMenuBar();

if(n.isVisible()){this.addState(k);
if(menubar){menubar.setOpenMenu(n);
}}else{this.removeState(k);
if(menubar&&menubar.getOpenMenu()==n){menubar.resetOpenMenu();
menubar._setAllowMenuOpenHover(false);
}}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
var m=this.getMenu();

if(m&&m.isVisible()&&!this.hasState(k)){this.addState(k);
}},_onMouseOver:function(e){this.addState(j);
if(this.getMenu()){var menubar=this.getMenuBar();

if(menubar._isAllowMenuOpenHover()){qx.ui.menu.Manager.getInstance().hideAll();
menubar._setAllowMenuOpenHover(true);
if(this.isEnabled()){this.open();
}}}}}});
})();
(function(){var E="keypress",D="qx.debug",C="interval",B="keydown",A="on",z="mousedown",y="keyup",x="blur",w="Enter",v="__lY",o="Up",u="__ma",r="Escape",n="qx.ui.menu.Manager",m="Left",q="Down",p="Right",s="__lX",l="singleton",t="Space";
qx.Class.define(n,{type:l,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lX=[];
var F=document.body;
var G=qx.event.Registration;
G.addListener(window.document.documentElement,z,this._onMouseDown,this,true);
G.addListener(F,B,this._onKeyUpDown,this,true);
G.addListener(F,y,this._onKeyUpDown,this,true);
G.addListener(F,E,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,x,this.hideAll,this);
this.__lY=new qx.event.Timer;
this.__lY.addListener(C,this._onOpenInterval,this);
this.__ma=new qx.event.Timer;
this.__ma.addListener(C,this._onCloseInterval,this);
},members:{__mb:null,__mc:null,__lY:null,__ma:null,__lX:null,_getChild:function(O,P,Q,R){var S=O.getChildren();
var length=S.length;
var T;

for(var i=P;i<length&&i>=0;i+=Q){T=S[i];

if(T.isEnabled()&&!T.isAnonymous()){return T;
}}
if(R){i=i==length?0:length-1;

for(;i!=P;i+=Q){T=S[i];

if(T.isEnabled()&&!T.isAnonymous()){return T;
}}}return null;
},_isInMenu:function(bz){while(bz){if(bz instanceof qx.ui.menu.Menu){return true;
}bz=bz.getLayoutParent();
}return false;
},_getMenuButton:function(by){while(by){if(by instanceof qx.ui.menu.AbstractButton){return by;
}by=by.getLayoutParent();
}return null;
},add:function(bw){if(qx.core.Variant.isSet(D,A)){if(!(bw instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bw);
}}var bx=this.__lX;
bx.push(bw);
bw.setZIndex(1e6+bx.length);
},remove:function(bA){if(qx.core.Variant.isSet(D,A)){if(!(bA instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bA);
}}var bB=this.__lX;

if(bB){qx.lang.Array.remove(bB,bA);
}},hideAll:function(){var bp=this.__lX;

if(bp){for(var i=bp.length-1;i>=0;i--){bp[i].exclude();
}}},getActiveMenu:function(){var X=this.__lX;
return X.length>0?X[X.length-1]:null;
},scheduleOpen:function(W){this.cancelClose(W);
if(W.isVisible()){if(this.__mb){this.cancelOpen(this.__mb);
}}else if(this.__mb!=W){this.__mb=W;
this.__lY.restartWith(W.getOpenInterval());
}},scheduleClose:function(bC){this.cancelOpen(bC);
if(!bC.isVisible()){if(this.__mc){this.cancelClose(this.__mc);
}}else if(this.__mc!=bC){this.__mc=bC;
this.__ma.restartWith(bC.getCloseInterval());
}},cancelOpen:function(bv){if(this.__mb==bv){this.__lY.stop();
this.__mb=null;
}},cancelClose:function(H){if(this.__mc==H){this.__ma.stop();
this.__mc=null;
}},_onOpenInterval:function(e){this.__lY.stop();
this.__mb.open();
this.__mb=null;
},_onCloseInterval:function(e){this.__ma.stop();
this.__mc.exclude();
this.__mc=null;
},_onMouseDown:function(e){var I=e.getTarget();
I=qx.ui.core.Widget.getWidgetByElement(I);
if(I==null){this.hideAll();
return;
}if(I.getMenu&&I.getMenu()&&I.getMenu().isVisible()){return;
}if(this.__lX.length>0&&!this._isInMenu(I)){this.hideAll();
}},__md:{"Enter":1,"Space":1},__me:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var j=this.getActiveMenu();

if(!j){return;
}var k=e.getKeyIdentifier();

if(this.__me[k]||(this.__md[k]&&j.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var J=this.getActiveMenu();

if(!J){return;
}var K=e.getKeyIdentifier();
var M=this.__me[K];
var L=this.__md[K];

if(M){switch(K){case o:this._onKeyPressUp(J);
break;
case q:this._onKeyPressDown(J);
break;
case m:this._onKeyPressLeft(J);
break;
case p:this._onKeyPressRight(J);
break;
case r:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(L){var N=J.getSelectedButton();

if(N){switch(K){case w:this._onKeyPressEnter(J,N,e);
break;
case t:this._onKeyPressSpace(J,N,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bq){var br=bq.getSelectedButton();
var bs=bq.getChildren();
var bu=br?bq.indexOf(br)-1:bs.length-1;
var bt=this._getChild(bq,bu,-1,true);
if(bt){bq.setSelectedButton(bt);
}else{bq.resetSelectedButton();
}},_onKeyPressDown:function(bl){var bm=bl.getSelectedButton();
var bo=bm?bl.indexOf(bm)+1:0;
var bn=this._getChild(bl,bo,1,true);
if(bn){bl.setSelectedButton(bn);
}else{bl.resetSelectedButton();
}},_onKeyPressLeft:function(a){var g=a.getOpener();

if(!g){return;
}if(g instanceof qx.ui.menu.Button){var c=g.getLayoutParent();
c.resetOpenedButton();
c.setSelectedButton(g);
}else if(g instanceof qx.ui.menubar.Button){var f=g.getMenuBar().getMenuButtons();
var b=f.indexOf(g);
if(b===-1){return;
}var h=null;
var length=f.length;

for(var i=1;i<=length;i++){var d=f[(b-i+length)%length];

if(d.isEnabled()){h=d;
break;
}}
if(h&&h!=g){h.open(true);
}}},_onKeyPressRight:function(Y){var bb=Y.getSelectedButton();
if(bb){var ba=bb.getMenu();

if(ba){Y.setOpenedButton(bb);
var bh=this._getChild(ba,0,1);

if(bh){ba.setSelectedButton(bh);
}return;
}}else if(!Y.getOpenedButton()){var bh=this._getChild(Y,0,1);

if(bh){Y.setSelectedButton(bh);

if(bh.getMenu()){Y.setOpenedButton(bh);
}return;
}}var bf=Y.getOpener();
if(bf instanceof qx.ui.menu.Button&&bb){while(bf){bf=bf.getLayoutParent();

if(bf instanceof qx.ui.menu.Menu){bf=bf.getOpener();

if(bf instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bf){return;
}}if(bf instanceof qx.ui.menubar.Button){var be=bf.getMenuBar().getMenuButtons();
var bc=be.indexOf(bf);
if(bc===-1){return;
}var bg=null;
var length=be.length;

for(var i=1;i<=length;i++){var bd=be[(bc+i)%length];

if(bd.isEnabled()){bg=bd;
break;
}}
if(bg&&bg!=bf){bg.open(true);
}}},_onKeyPressEnter:function(bD,bE,e){if(bE.hasListener(E)){var bF=e.clone();
bF.setBubbles(false);
bF.setTarget(bE);
bE.dispatchEvent(bF);
}this.hideAll();
},_onKeyPressSpace:function(bi,bj,e){if(bj.hasListener(E)){var bk=e.clone();
bk.setBubbles(false);
bk.setTarget(bj);
bj.dispatchEvent(bk);
}}},destruct:function(){var V=qx.event.Registration;
var U=document.body;
V.removeListener(window.document.documentElement,z,this._onMouseDown,this,true);
V.removeListener(U,B,this._onKeyUpDown,this,true);
V.removeListener(U,y,this._onKeyUpDown,this,true);
V.removeListener(U,E,this._onKeyPress,this,true);
this._disposeObjects(v,u);
this._disposeArray(s);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__mf:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__mf(c);
},hasChildren:function(){return this.__mf(f);
},add:function(r,s){return this.__mf(j,r,s);
},remove:function(t){return this.__mf(a,t);
},removeAll:function(){return this.__mf(d);
},indexOf:function(u){return this.__mf(l,u);
},addAt:function(v,w,x){this.__mf(g,v,w,x);
},addBefore:function(y,z,A){this.__mf(i,y,z,A);
},addAfter:function(C,D,E){this.__mf(k,C,D,E);
},removeAt:function(B){this.__mf(e,B);
}}});
})();
(function(){var Q="slidebar",P="Integer",O="resize",N="qx.ui.core.Widget",M="selected",L="visible",K="Boolean",J="mouseout",I="excluded",H="menu",bg="_applySelectedButton",bf="_applyOpenInterval",be="_applySpacingY",bd="_blocker",bc="_applyCloseInterval",bb="_applyBlockerColor",ba="_applyIconColumnWidth",Y="mouseover",X="qx.ui.menu.Menu",W="Color",U="Number",V="_applyOpenedButton",S="_applySpacingX",T="_applyBlockerOpacity",R="_applyArrowColumnWidth";
qx.Class.define(X,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var B=this.getApplicationRoot();
B.add(this);
this.addListener(Y,this._onMouseOver);
this.addListener(J,this._onMouseOut);
this.addListener(O,this._onResize,this);
B.addListener(O,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(B);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:H},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:I},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:P,apply:S,init:0,themeable:true},spacingY:{check:P,apply:be,init:0,themeable:true},iconColumnWidth:{check:P,init:0,themeable:true,apply:ba},arrowColumnWidth:{check:P,init:0,themeable:true,apply:R},blockerColor:{check:W,init:null,nullable:true,apply:bb,themeable:true},blockerOpacity:{check:U,init:1,apply:T,themeable:true},selectedButton:{check:N,nullable:true,apply:bg},openedButton:{check:N,nullable:true,apply:V},opener:{check:N,nullable:true},openInterval:{check:P,themeable:true,init:250,apply:bf},closeInterval:{check:P,themeable:true,init:250,apply:bc},blockBackground:{check:K,themeable:true,init:false}},members:{__mg:null,__mh:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mj();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mj();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(E){this.placeToPoint(E);
this.__mj();
this.show();
this._placementTarget=E;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bj=[];
var bk=this.getChildren();

for(var i=0;i<bk.length;i++){if(bk[i].isEnabled()){bj.push(bk[i]);
}}return bj;
},_applyIconColumnWidth:function(o,p){this._getMenuLayout().setIconColumnWidth(o);
},_applyArrowColumnWidth:function(F,G){this._getMenuLayout().setArrowColumnWidth(F);
},_applySpacingX:function(C,D){this._getMenuLayout().setColumnSpacing(C);
},_applySpacingY:function(bq,br){this._getMenuLayout().setSpacing(bq);
},_applyVisibility:function(s,t){arguments.callee.base.call(this,s,t);
var u=qx.ui.menu.Manager.getInstance();

if(s===L){u.add(this);
var v=this.getParentMenu();

if(v){v.setOpenedButton(this.getOpener());
}}else if(t===L){u.remove(this);
var v=this.getParentMenu();

if(v&&v.getOpenedButton()==this.getOpener()){v.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mi();
},__mi:function(){if(this.isVisible()){if(this.getBlockBackground()){var r=this.getZIndex();
this._blocker.blockContent(r-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var w=this.getOpener();

if(!w||!(w instanceof qx.ui.menu.AbstractButton)){return null;
}
while(w&&!(w instanceof qx.ui.menu.Menu)){w=w.getLayoutParent();
}return w;
},_applySelectedButton:function(a,b){if(b){b.removeState(M);
}
if(a){a.addState(M);
}},_applyOpenedButton:function(k,l){if(l){l.getMenu().exclude();
}
if(k){k.getMenu().open();
}},_applyBlockerColor:function(m,n){this._blocker.setColor(m);
},_applyBlockerOpacity:function(c,d){this._blocker.setOpacity(c);
},getChildrenContainer:function(){return this.getChildControl(Q,true)||this;
},_createChildControlImpl:function(bl){var bm;

switch(bl){case Q:var bm=new qx.ui.menu.MenuSlideBar();
var bo=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bn=bm.getLayout();
bm.setLayout(bo);
bn.dispose();
var bp=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bp.length;i++){bm.add(bp[i]);
}this.removeListener(O,this._onResize,this);
bm.getChildrenContainer().addListener(O,this._onResize,this);
this._add(bm);
break;
}return bm||arguments.callee.base.call(this,bl);
},_getMenuLayout:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(Q)){return this.getChildControl(Q).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mj:function(){var z=this._getMenuBounds();

if(!z){this.addListenerOnce(O,this.__mj,this);
return;
}var y=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var A=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(z.height+top);
this.moveTo(A,0);
});
}else if(top+z.height>y){this._assertSlideBar(function(){this.setHeight(y-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(q){if(this.hasChildControl(Q)){return q.call(this);
}this.__mh=q;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(Q);

if(this.__mh){this.__mh.call(this);
delete this.__mh;
}},_onResize:function(){if(this.isVisible()){var x=this._placementTarget;

if(!x){return;
}else if(x instanceof qx.ui.core.Widget){this.placeToWidget(x);
}else if(x.top!==undefined){this.placeToPoint(x);
}else{throw new Error("Unknown target: "+x);
}this.__mj();
}},_onMouseOver:function(e){var g=qx.ui.menu.Manager.getInstance();
g.cancelClose(this);
var h=e.getTarget();

if(h.isEnabled()&&h instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(h);
var f=h.getMenu&&h.getMenu();

if(f){f.setOpener(h);
g.scheduleOpen(f);
this.__mg=f;
}else{var j=this.getOpenedButton();

if(j){g.scheduleClose(j.getMenu());
}
if(this.__mg){g.cancelOpen(this.__mg);
this.__mg=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bh=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bi=this.getOpenedButton();
bi?this.setSelectedButton(bi):this.resetSelectedButton();
if(bi){bh.cancelClose(bi.getMenu());
}if(this.__mg){bh.cancelOpen(this.__mg);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(O,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(bd);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__mk:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__mk=[0,0,0,0];
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
},getColumnSizes:function(){return this.__mk||null;
}},destruct:function(){this.__mk=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var t="icon",s="label",r="arrow",q="shortcut",p="changeLocale",o="qx.dynlocale",n="submenu",m="on",l="String",k="qx.ui.menu.Menu",d="qx.ui.menu.AbstractButton",j="keypress",h="",c="_applyIcon",b="mouseup",g="abstract",f="_applyLabel",i="_applyMenu",a="changeCommand";
qx.Class.define(d,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:g,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(b,this._onMouseUp);
this.addListener(j,this._onKeyPress);
this.addListener(a,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(D){var E;

switch(D){case t:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:0});
break;
case s:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:1});
break;
case q:E=new qx.ui.basic.Label;
E.setAnonymous(true);
this._add(E,{column:2});
break;
case r:E=new qx.ui.basic.Image;
E.setAnonymous(true);
this._add(E,{column:3});
break;
}return E||arguments.callee.base.call(this,D);
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
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var A=e.getData();

if(qx.core.Variant.isSet(o,m)){var y=e.getOldData();

if(!y){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!A){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var z=A!=null?A.toString():h;
this.getChildControl(q).setValue(z);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var F=this.getCommand();

if(F!=null){this.getChildControl(q).setValue(F.toString());
}},"off":null}),_applyIcon:function(u,v){if(u){this._showChildControl(t).setSource(u);
}else{this._excludeChildControl(t);
}},_applyLabel:function(B,C){if(B){this._showChildControl(s).setValue(B);
}else{this._excludeChildControl(s);
}},_applyMenu:function(w,x){if(x){x.resetOpener();
x.removeState(n);
}
if(w){this._showChildControl(r);
w.setOpener(this);
w.addState(n);
}else{this._excludeChildControl(r);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(o,m)){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}});
})();
(function(){var g="qx.ui.menu.ButtonLayout",f="qx.debug",e="column",d="left",c="middle",b="' is not supported by the MenuButton layout!",a="The property '";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(j,name,k){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(m,n){var x=this._getLayoutChildren();
var w;
var p;
var q=[];

for(var i=0,l=x.length;i<l;i++){w=x[i];
p=w.getLayoutProperties().column;
q[p]=w;
}var v=this.__mD(x[0]);
var y=v.getColumnSizes();
var s=v.getSpacingX();
var r=qx.lang.Array.sum(y)+s*(y.length-1);

if(r<m){y[1]+=m-r;
}var z=0,top=0;
var t=qx.ui.layout.Util;

for(var i=0,l=y.length;i<l;i++){w=q[i];

if(w){var o=w.getSizeHint();
var top=t.computeVerticalAlignOffset(w.getAlignY()||c,o.height,n,0,0);
var u=t.computeHorizontalAlignOffset(w.getAlignX()||d,o.width,y[i],w.getMarginLeft(),w.getMarginRight());
w.renderLayout(z+u,top,o.width,o.height);
}z+=y[i]+s;
}},__mD:function(h){while(!(h instanceof qx.ui.menu.Menu)){h=h.getLayoutParent();
}return h;
},_computeSizeHint:function(){var C=this._getLayoutChildren();
var B=0;
var D=0;

for(var i=0,l=C.length;i<l;i++){var A=C[i].getSizeHint();
D+=A.width;
B=Math.max(B,A.height);
}return {width:D,height:B};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var s="horizontal",r="scrollpane",q="vertical",p="button-backward",o="button-forward",n="content",m="execute",l="qx.ui.container.SlideBar",k="scrollY",j="removeChildWidget",f="scrollX",i="_applyOrientation",h="mousewheel",d="Integer",c="slidebar",g="update";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(t){arguments.callee.base.call(this);
var u=this.getChildControl(r);
this._add(u,{flex:1});

if(t!=null){this.setOrientation(t);
}else{this.initOrientation();
}this.addListener(h,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:c},orientation:{check:[s,q],init:s,apply:i},scrollStep:{check:d,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(n);
},_createChildControlImpl:function(v){var w;

switch(v){case o:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteForward,this);
w.setFocusable(false);
this._addAt(w,2);
break;
case p:w=new qx.ui.form.RepeatButton;
w.addListener(m,this._onExecuteBackward,this);
w.setFocusable(false);
this._addAt(w,0);
break;
case n:w=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){w.addListener(j,this._onRemoveChild,this);
}this.getChildControl(r).add(w);
break;
case r:w=new qx.ui.core.scroll.ScrollPane();
w.addListener(g,this._onResize,this);
w.addListener(f,this._onScroll,this);
w.addListener(k,this._onScroll,this);
break;
}return w||arguments.callee.base.call(this,v);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(D){var E=this.getChildControl(r);

if(this.getOrientation()===s){E.scrollByX(D);
}else{E.scrollByY(D);
}},scrollTo:function(a){var b=this.getChildControl(r);

if(this.getOrientation()===s){b.scrollToX(a);
}else{b.scrollToY(a);
}},_applyOrientation:function(F,G){var J=[this.getLayout(),this._getLayout()];
var I=this.getChildControl(o);
var H=this.getChildControl(p);
if(G==q){I.removeState(q);
H.removeState(q);
I.addState(s);
H.addState(s);
}else if(G==s){I.removeState(s);
H.removeState(s);
I.addState(q);
H.addState(q);
}
if(F==s){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(J[0]){J[0].dispose();
}
if(J[1]){J[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(r).getChildren()[0];

if(!content){return;
}var x=this.getInnerSize();
var z=content.getBounds();
var y=(this.getOrientation()===s)?z.width>x.width:z.height>x.height;

if(y){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(r).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var B=this.getChildControl(r);

if(this.getOrientation()===s){var A=B.getScrollX();
var C=B.getScrollMaxX();
}else{var A=B.getScrollY();
var C=B.getScrollMaxY();
}this.getChildControl(p).setEnabled(A>0);
this.getChildControl(o).setEnabled(A<C);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__jn",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__jn=new qx.event.AcceleratingTimer();
this.__jn.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__jo:null,__jn:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__jp();
}this.removeState(m);
this.addState(n);
}},release:function(o){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__jo){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__jq();
},_applyEnabled:function(p,q){arguments.callee.base.call(this,p,q);

if(!p){this.removeState(n);
this.removeState(m);
this.__jq();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jn.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jn.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jp();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__jo){this.execute();
}}this.__jq();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__jo){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__jq();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__jp();
}},_onInterval:function(e){this.__jo=true;
this.fireEvent(b);
},__jp:function(){this.fireEvent(g);
this.__jo=false;
this.__jn.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__jq:function(){this.fireEvent(a);
this.__jn.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var e="Integer",d="interval",c="__jM",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jM=new qx.event.Timer(this.getInterval());
this.__jM.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__jM:null,__jN:null,start:function(){this.__jM.setInterval(this.getFirstInterval());
this.__jM.start();
},stop:function(){this.__jM.stop();
this.__jN=null;
},_onInterval:function(){this.__jM.stop();

if(this.__jN==null){this.__jN=this.getInterval();
}this.__jN=Math.max(this.getMinimum(),this.__jN-this.getDecrease());
this.__jM.setInterval(this.__jN);
this.__jM.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var H="resize",G="scrollY",F="update",E="scrollX",D="_applyScrollX",C="_applyScrollY",B="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",A="appear",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",w="qx.event.type.Event",u="qx.ui.core.scroll.ScrollPane",v="scroll";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(H,this._onUpdate);
var j=this.getContentElement();
j.addListener(v,this._onScroll,this);
j.addListener(A,this._onAppear,this);
},events:{update:w},properties:{scrollX:{check:B,apply:D,event:E,init:0},scrollY:{check:z,apply:C,event:G,init:0}},members:{add:function(s){var t=this._getChildren()[0];

if(t){this._remove(t);
t.removeListener(H,this._onUpdate,this);
}
if(s){this._add(s);
s.addListener(H,this._onUpdate,this);
}},remove:function(N){if(N){this._remove(N);
N.removeListener(H,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(F);
},_onScroll:function(e){var b=this.getContentElement();
this.setScrollX(b.getScrollX());
this.setScrollY(b.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(i){var top=0;

do{top+=i.getBounds().top;
i=i.getLayoutParent();
}while(i&&i!==this);
return top;
},getItemBottom:function(f){return this.getItemTop(f)+f.getBounds().height;
},getItemLeft:function(c){var d=0;
var parent;

do{d+=c.getBounds().left;
parent=c.getLayoutParent();

if(parent){d+=parent.getInsets().left;
}c=parent;
}while(c&&c!==this);
return d;
},getItemRight:function(M){return this.getItemLeft(M)+M.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var h=this.getInnerSize();
var g=this.getScrollSize();

if(h&&g){return Math.max(0,g.width-h.width);
}return 0;
},getScrollMaxY:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.height-r.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(p){this.getContentElement().scrollToX(p);
},_applyScrollY:function(a){this.getContentElement().scrollToY(a);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mE",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){arguments.callee.base.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mE=new qx.event.AcceleratingTimer();
this.__mE.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mE:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mE.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mE.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mE.stop();
}}},destruct:function(){this._disposeObjects(f);
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
(function(){var m="container",k="handle",j="both",h="Integer",g="middle",f="qx.ui.toolbar.Part",e="icon",d="label",c="changeShow",b="_applySpacing",a="toolbar/part";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
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
}return r||arguments.callee.base.call(this,q);
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
qx.Class.define(d,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(k,l){arguments.callee.base.call(this);
if(k!=null){this.setLabel(k);
}
if(l!=null){this.setMenu(l);
}this.addListener(a,this._onExecute,this);
},properties:{appearance:{refine:true,init:g},value:{check:h,nullable:true,event:c,apply:f,init:false},group:{check:i,nullable:true,apply:b}},members:{_applyValue:function(o,p){o?this.addState(j):this.removeState(j);
},_applyGroup:function(m,n){if(n){n.remove(this);
}
if(m){m.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="__io",c="changeSelection",b="on",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__io=new qx.data.Array();
this.__io.addListener(f,this.__ir,this);
this.addListener(c,this.__iq,this);
},events:{changeModelSelection:a},members:{__io:null,__ip:false,__iq:function(){if(this.__ip){return;
}var o=this.getSelection();
var m=[];

for(var i=0;i<o.length;i++){var p=o[i];
var n=p.getModel?p.getModel():null;

if(n!==null){m.push(n);
}}this.setModelSelection(m);
},__ir:function(){this.__ip=true;
var r=this.getSelectables();
var t=[];
var s=this.__io.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__ip=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__iq();
}},getModelSelection:function(){return this.__io;
},setModelSelection:function(k){if(!k){this.__io.removeAll();
return;
}
if(qx.core.Variant.isSet(e,b)){this.assertArray(k,h);
}k.unshift(this.__io.getLength());
k.unshift(0);
var l=this.__io.splice.apply(this.__io,k);
l.dispose();
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var r="Boolean",q="changeValue",p="_applyAllowEmptySelection",o="_applyInvalidMessage",n="qx.ui.form.RadioGroup",m="_applyValid",k="",j="changeRequired",h="changeValid",g="changeEnabled",c="changeInvalidMessage",f="changeSelection",d="_applyEnabled",b="String",a="__qn";
qx.Class.define(n,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(M){arguments.callee.base.call(this);
this.__qn=[];
this.addListener(f,this.__qo,this);

if(M!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:d,event:g,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:p},valid:{check:r,init:true,apply:m,event:h},required:{check:r,init:false,event:j},invalidMessage:{check:b,init:k,event:c,apply:o}},members:{__qn:null,getItems:function(){return this.__qn;
},add:function(J){var K=this.__qn;
var L;

for(var i=0,l=arguments.length;i<l;i++){L=arguments[i];

if(qx.lang.Array.contains(K,L)){continue;
}L.addListener(q,this._onItemChangeChecked,this);
K.push(L);
L.setGroup(this);
if(L.getValue()){this.setSelection([L]);
}}if(!this.isAllowEmptySelection()&&K.length>0&&!this.getSelection()[0]){this.setSelection([K[0]]);
}},remove:function(x){var y=this.__qn;

if(qx.lang.Array.contains(y,x)){qx.lang.Array.remove(y,x);
if(x.getGroup()===this){x.resetGroup();
}x.removeListener(q,this._onItemChangeChecked,this);
if(x.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__qn;
},_onItemChangeChecked:function(e){var P=e.getTarget();

if(P.getValue()){this.setSelection([P]);
}else if(this.getSelection()[0]==P){this.resetSelection();
}},_applyInvalidMessage:function(N,O){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setInvalidMessage(N);
}},_applyValid:function(H,I){for(var i=0;i<this.__qn.length;i++){this.__qn[i].setValid(H);
}},_applyEnabled:function(u,v){var w=this.__qn;

if(u==null){for(var i=0,l=w.length;i<l;i++){w[i].resetEnabled();
}}else{for(var i=0,l=w.length;i<l;i++){w[i].setEnabled(u);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var z=this.getSelection()[0];
var B=this.__qn;
var A=B.indexOf(z);

if(A==-1){return;
}var i=0;
var length=B.length;
if(this.getWrap()){A=(A+1)%length;
}else{A=Math.min(A+1,length-1);
}
while(i<length&&!B[A].getEnabled()){A=(A+1)%length;
i++;
}this.setSelection([B[A]]);
},selectPrevious:function(){var E=this.getSelection()[0];
var G=this.__qn;
var F=G.indexOf(E);

if(F==-1){return;
}var i=0;
var length=G.length;
if(this.getWrap()){F=(F-1+length)%length;
}else{F=Math.max(F-1,0);
}
while(i<length&&!G[F].getEnabled()){F=(F-1+length)%length;
i++;
}this.setSelection([G[F]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__qo:function(e){var t=e.getData()[0];
var s=e.getOldData()[0];

if(s){s.setValue(false);
}
if(t){t.setValue(true);
}}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__kf,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__kf:function(name,e){var v=e.getData();
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
(function(){var W="change",V="add",U="remove",T="order",S="The parameter must be an array.",R="",Q="qx.data.Array",P="?",O="changeBubble",N="qx.event.type.Event",K="number",M="on",L="changeLength",J="qx.debug",I="qx.event.type.Data";
qx.Class.define(Q,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(s){arguments.callee.base.call(this);
if(s==undefined){this.__kg=[];
}else if(arguments.length>1){this.__kg=[];

for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
}}else if(typeof s==K){this.__kg=new Array(s);
}else if(s instanceof Array){this.__kg=qx.lang.Array.clone(s);
}else{this.__kg=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(this.__kg[i],null,i);
}this.__kh();
},events:{"change":I,"changeLength":N},members:{__kg:null,concat:function(bf){if(bf){var bg=this.__kg.concat(bf);
}else{var bg=this.__kg.concat();
}return new qx.data.Array(bg);
},join:function(C){return this.__kg.join(C);
},pop:function(){var c=this.__kg.pop();
this.__kh();
this._applyEventPropagation(null,c,this.length-1);
this.fireDataEvent(W,{start:this.length-1,end:this.length-1,type:U,items:[c]},null);
return c;
},push:function(e){for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(W,{start:this.length-1,end:this.length-1,type:V,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kg.reverse();
this.fireDataEvent(W,{start:0,end:this.length-1,type:T,items:null},null);
},shift:function(){var m=this.__kg.shift();
this.__kh();
this._applyEventPropagation(null,m);
this.fireDataEvent(W,{start:0,end:this.length-1,type:U,items:[m]},null);
return m;
},slice:function(bj,bk){return new qx.data.Array(this.__kg.slice(bj,bk));
},splice:function(t,u,v){var B=this.__kg.length;
var y=this.__kg.splice.apply(this.__kg,arguments);
if(this.__kg.length!=B){this.__kh();
}var z=u>0;
var w=arguments.length>2;
var x=null;

if(z||w){if(this.__kg.length>B){var A=V;
}else if(this.__kg.length<B){var A=U;
x=y;
}else{var A=T;
}this.fireDataEvent(W,{start:t,end:this.length-1,type:A,items:x},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,t+i);
}this.fireDataEvent(O,{value:this,name:P,old:y});
for(var i=0;i<y.length;i++){this._applyEventPropagation(null,y[i],i);
}return (new qx.data.Array(y));
},sort:function(l){this.__kg.sort.apply(this.__kg,arguments);
this.fireDataEvent(W,{start:0,end:this.length-1,type:T,items:null},null);
},unshift:function(h){for(var i=arguments.length-1;i>=0;i--){this.__kg.unshift(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(W,{start:0,end:this.length-1,type:V,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kg;
},getItem:function(E){return this.__kg[E];
},setItem:function(bb,bc){var bd=this.__kg[bb];
this.__kg[bb]=bc;
this._applyEventPropagation(bc,bd,bb);
if(this.length!=this.__kg.length){this.__kh();
}this.fireDataEvent(W,{start:bb,end:bb,type:V,items:[bc]},null);
},getLength:function(){return this.length;
},indexOf:function(d){return this.__kg.indexOf(d);
},toString:function(){if(this.__kg!=null){return this.__kg.toString();
}return R;
},contains:function(f){return this.__kg.indexOf(f)!==-1;
},copy:function(){return this.concat();
},insertAt:function(bh,bi){this.splice(bh,0,bi);
},insertBefore:function(o,p){var q=this.indexOf(o);

if(q==-1){this.push(p);
}else{this.splice(q,0,p);
}},insertAfter:function(F,G){var H=this.indexOf(F);

if(H==-1||H==(this.length-1)){this.push(G);
}else{this.splice(H+1,0,G);
}},removeAt:function(ba){return this.splice(ba,1)[0];
},removeAll:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}var b=this.getLength();
var a=this.__kg.concat();
this.__kg.length=0;
this.__kh();
this.fireDataEvent(W,{start:0,end:b-1,type:U,items:a},null);
},append:function(g){if(qx.core.Variant.isSet(J,M)){qx.core.Assert.assertArray(g,S);
}for(var i=0;i<g.length;i++){this._applyEventPropagation(g[i],null,this.__kg.length+i);
}Array.prototype.push.apply(this.__kg,g);
this.__kh();
},remove:function(j){var k=this.indexOf(j);

if(k!=-1){this.splice(k,1);
return j;
}},equals:function(n){if(this.length!==n.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==n.getItem(i)){return false;
}}return true;
},sum:function(){var D=0;

for(var i=0;i<this.length;i++){D+=this.getItem(i);
}return D;
},max:function(){var r=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>r){r=this.getItem(i);
}}return r===undefined?null:r;
},min:function(){var be=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<be){be=this.getItem(i);
}}return be===undefined?null:be;
},forEach:function(X,Y){for(var i=0;i<this.__kg.length;i++){X.call(Y,this.__kg[i]);
}},__kh:function(){this.length=this.__kg.length;
this.fireEvent(L,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}this.__kg=null;
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
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(v,w){arguments.callee.base.call(this,v,w);
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
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
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
(function(){var g="String",f="qx.ui.embed.AbstractIframe",e="name",d="",c="_applySource",b="qx.event.type.Event",a="_applyFrameName";
qx.Class.define(f,{extend:qx.ui.core.Widget,construct:function(j){arguments.callee.base.call(this);

if(j){this.setSource(j);
}},events:{"load":b},properties:{source:{check:g,apply:c,nullable:true},frameName:{check:g,init:d,apply:a}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(h,i){this._getIframeElement().setSource(h);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(e,k);
},getWindow:function(){return this._getIframeElement().getWindow();
},getDocument:function(){return this._getIframeElement().getDocument();
},getBody:function(){return this._getIframeElement().getBody();
},getName:function(){return this._getIframeElement().getName();
},reload:function(){this._getIframeElement().reload();
}}});
})();
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(h,k);
},_applyOverflowY:function(j){this.getContentElement().setStyle(d,j);
}}});
})();
(function(){var l="qx.client",k="mousedown",j="load",i="help",h="mouseup",g="losecapture",f="contextmenu",d="none",c="display",b="repeat",C="Boolean",B="px",A="url(",z=")",y="gecko",x="div",w="DOMNodeInserted",v="_applyNativeHelp",u="__Dx",t="/",r="appear",s="mshtml",p="block",q="qx.ui.embed.Iframe",n="iframe",o="absolute",m="qx/static/blank.gif";
qx.Class.define(q,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(H){if(H!=null){this.__Dw=H;
}arguments.callee.base.call(this,H);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,h,this.release,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
this.__Dx=this._createBlockerElement();
this.getContainerElement().add(this.__Dx);

if(qx.core.Variant.isSet(l,y)){this.addListenerOnce(r,function(e){var G=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(G,w,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:n},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:C,init:false,apply:v}},members:{__Dw:null,__Dx:null,renderLayout:function(O,top,P,Q){arguments.callee.base.call(this,O,top,P,Q);
var S=B;
var R=this.getInsets();
this.__Dx.setStyles({"left":R.left+S,"top":R.top+S,"width":(P-R.left-R.right)+S,"height":(Q-R.top-R.bottom)+S});
},_createContentElement:function(){var D=new qx.html.Iframe(this.__Dw);
D.addListener(j,this._onIframeLoad,this);
return D;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var a=new qx.html.Element(x);
a.setStyles({"zIndex":20,"position":o,"display":d});
if(qx.core.Variant.isSet(l,s)){a.setStyles({backgroundImage:A+qx.util.ResourceManager.getInstance().toUri(m)+z,backgroundRepeat:b});
}return a;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__Dx.setStyle(c,p);
},release:function(){this.__Dx.setStyle(c,d);
},_applyNativeContextMenu:function(I,J){if(I!==false&&J!==false){return;
}var K=this.getDocument();

if(!K){return;
}
try{var L=K.documentElement;
}catch(e){return ;
}
if(J===false){qx.event.Registration.removeListener(L,f,this._onNativeContextMenu,this,true);
}
if(I===false){qx.event.Registration.addListener(L,f,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(l,{"mshtml":function(M,N){var document=this.getDocument();

if(!document){return;
}
try{if(N===false){qx.bom.Event.removeNativeListener(document,i,qx.lang.Function.returnFalse);
}
if(M===false){qx.bom.Event.addNativeListener(document,i,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var F=this.getContentElement().getDomElement();
var E=F.src;
if(E.charAt(E.length-1)==t){E=E.substring(0,E.length-1);
}
if(E!=this.getSource()){qx.bom.Iframe.getWindow(F).stop();
F.src=this.getSource();
}}},destruct:function(){this._disposeObjects(u);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,h,this.release,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(a){arguments.callee.base.call(this,b);
this._setProperty(f,a);
},events:{"load":c},members:{_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==f){var i=this.getDomElement();
qx.bom.Iframe.setSource(i,h);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var j=this.getDomElement();

if(j){return qx.bom.Iframe.getWindow(j);
}else{return null;
}},getDocument:function(){var n=this.getDomElement();

if(n){return qx.bom.Iframe.getDocument(n);
}else{return null;
}},getBody:function(){var g=this.getDomElement();

if(g){return qx.bom.Iframe.getBody(g);
}else{return null;
}},setSource:function(k){this._setProperty(f,k);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var m=this.getDomElement();

if(m){var l=this.getSource();
this.setSource(null);
this.setSource(l);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__rE:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__rE=null;
},getInsets:function(){if(this.__rE){return this.__rE;
}var l=this._getDefaultInsets();
return this.__rE={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__rE=null;
}},destruct:function(){this.__rE=null;
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
(function(){var h="px",g="qx.ui.decoration.Background",f="",e="qx.debug",d="_applyStyle",c="on",b="Color",a="absolute";
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){arguments.callee.base.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__rG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rG;
},getMarkup:function(){if(this.__rG){return this.__rG;
}var m={position:a,top:0,left:0};
var n=this._generateBackgroundMarkup(m);
return this.__rG=n;
},resize:function(o,p,q){o.style.width=p+h;
o.style.height=q+h;
},tint:function(i,j){var k=qx.theme.manager.Color.getInstance();

if(j==null){j=this.getBackgroundColor();
}i.style.backgroundColor=k.resolve(j)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__rG=null;
}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(A){arguments.callee.base.call(this);

if(A!=null){this.setHtml(A);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(p,q){var r=this.getContentElement();
r.setAttribute(a,p||m);
r.setStyles({"padding":i,"border":o});
},_applyCssClass:function(x,y){this.getContentElement().setAttribute(c,x);
},_applySelectable:function(z){arguments.callee.base.call(this,z);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,z?n:o);
this.getContentElement().setStyle(l,z?n:o);
}},_applyFont:function(s,t){var u=s?qx.theme.manager.Font.getInstance().resolve(s).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(u);
},_applyTextColor:function(v,w){if(v){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(v));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var r="",q='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',p='.qxappender .type-instance{color:#565656;font-weight:bold}',o="qx.log.appender.Element",n='.qxappender .level-info{background:#DEEDFA}',m='.qxappender .type-stringify{color:#565656;font-weight:bold}',l='.qxappender .type-number{color:#155791;font-weight:normal;}',k="qxappender",j='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',i='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',d='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',h='.qxappender .level-error{background:#FFE2D5}',g='.qxappender .level-debug{background:white}',c='.qxappender .type-key{color:#565656;font-style:italic}',b='.qxappender .level-user{background:#E3EFE9}',f='.qxappender .level-warn{background:#FFF7D5}',e='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(o,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
var v=[g,n,f,h,b,e,l,d,q,j,c,i,p,m];
qx.bom.Stylesheet.createElement(v.join(r));
qx.log.Logger.register(this);
},members:{__BO:null,setElement:function(a){this.clear();
if(a){qx.bom.element.Class.add(a,k);
}this.__BO=a;
},clear:function(){var w=this.__BO;
if(w){w.innerHTML=r;
}},process:function(s){var t=this.__BO;

if(!t){return;
}t.appendChild(qx.log.appender.Util.toHtml(s));
t.scrollTop=t.scrollHeight;
}},destruct:function(){this.__BO=null;
}});
})();
(function(){var i="(\\s|$)",h="(^|\\s)",g="",f="qx.bom.element.Class",e=" ",d="$2";
qx.Class.define(f,{statics:{add:function(j,name){if(!this.has(j,name)){j.className+=(j.className?e:g)+name;
}return name;
},get:function(m){return m.className;
},has:function(n,name){var o=new RegExp(h+name+i);
return o.test(n.className);
},remove:function(k,name){var l=new RegExp(h+name+i);
k.className=k.className.replace(l,d);
return name;
},replace:function(a,b,c){this.remove(a,b);
return this.add(a,c);
},toggle:function(p,name,q){if(q==null){q=!this.has(p,name);
}q?this.add(p,name):this.remove(p,name);
return name;
}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var T="scrollbar-y",S="scrollbar-x",R="pane",Q="auto",P="corner",O="on",N="changeVisibility",M="scroll",L="_computeScrollbars",K="off",D="scrollY",J="qx.ui.core.scroll.AbstractScrollArea",G="abstract",B="update",A="scrollX",F="mousewheel",E="scrollbarY",H="scrollbarX",z="horizontal",I="scrollarea",C="vertical";
qx.Class.define(J,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:G,construct:function(){arguments.callee.base.call(this);
var i=new qx.ui.layout.Grid();
i.setColumnFlex(0,1);
i.setRowFlex(0,1);
this._setLayout(i);
this.addListener(F,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:I},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbarY:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbar:{group:[H,E]}},members:{_createChildControlImpl:function(w){var x;

switch(w){case R:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(B,this._computeScrollbars,this);
x.addListener(A,this._onScrollPaneX,this);
x.addListener(D,this._onScrollPaneY,this);
this._add(x,{row:0,column:0});
break;
case S:x=this._createScrollBar(z);
x.setMinWidth(0);
x.exclude();
x.addListener(M,this._onScrollBarX,this);
x.addListener(N,this._onChangeScrollbarXVisibility,this);
this._add(x,{row:1,column:0});
break;
case T:x=this._createScrollBar(C);
x.setMinHeight(0);
x.exclude();
x.addListener(M,this._onScrollBarY,this);
x.addListener(N,this._onChangeScrollbarYVisibility,this);
this._add(x,{row:0,column:1});
break;
case P:x=new qx.ui.core.Widget();
x.setWidth(0);
x.setHeight(0);
x.exclude();
this._add(x,{row:1,column:1});
break;
}return x||arguments.callee.base.call(this,w);
},getPaneSize:function(){return this.getChildControl(R).getInnerSize();
},getItemTop:function(y){return this.getChildControl(R).getItemTop(y);
},getItemBottom:function(v){return this.getChildControl(R).getItemBottom(v);
},getItemLeft:function(j){return this.getChildControl(R).getItemLeft(j);
},getItemRight:function(b){return this.getChildControl(R).getItemRight(b);
},scrollToX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollTo(X);
},scrollByX:function(a){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollBy(a);
},getScrollX:function(){var c=this.getChildControl(S,true);
return c?c.getPosition():0;
},scrollToY:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollTo(U);
},scrollByY:function(k){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollBy(k);
},getScrollY:function(){var d=this.getChildControl(T,true);
return d?d.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(R).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(R).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var g=this._isChildControlVisible(S);
var h=this._isChildControlVisible(T);
var f=(h)?this.getChildControl(T,true):(g?this.getChildControl(S,true):null);

if(f){f.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var Y=this._isChildControlVisible(S);
var ba=this._isChildControlVisible(T);

if(!Y){this.scrollToX(0);
}Y&&ba?this._showChildControl(P):this._excludeChildControl(P);
},_onChangeScrollbarYVisibility:function(e){var V=this._isChildControlVisible(S);
var W=this._isChildControlVisible(T);

if(!W){this.scrollToY(0);
}V&&W?this._showChildControl(P):this._excludeChildControl(P);
},_computeScrollbars:function(){var r=this.getChildControl(R);
var content=r.getChildren()[0];

if(!content){this._excludeChildControl(S);
this._excludeChildControl(T);
return;
}var l=this.getInnerSize();
var q=r.getInnerSize();
var o=r.getScrollSize();
if(!q||!o){return;
}var s=this.getScrollbarX();
var t=this.getScrollbarY();

if(s===Q&&t===Q){var p=o.width>l.width;
var u=o.height>l.height;
if((p||u)&&!(p&&u)){if(p){u=o.height>q.height;
}else if(u){p=o.width>q.width;
}}}else{var p=s===O;
var u=t===O;
if(o.width>(p?q.width:l.width)&&s===Q){p=true;
}
if(o.height>(p?q.height:l.height)&&t===Q){u=true;
}}if(p){var n=this.getChildControl(S);
n.show();
n.setMaximum(Math.max(0,o.width-q.width));
n.setKnobFactor(q.width/o.width);
}else{this._excludeChildControl(S);
}
if(u){var m=this.getChildControl(T);
m.show();
m.setMaximum(Math.max(0,o.height-q.height));
m.setKnobFactor(q.height/o.height);
}else{this._excludeChildControl(T);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var w="single",v="Boolean",u="one",t="changeSelection",s="mouseup",r="mousedown",q="losecapture",p="multi",o="_applyQuickSelection",n="mouseover",f="_applySelectionMode",m="__il",j="_applyDragSelection",d="qx.ui.core.MMultiSelectionHandling",c="removeItem",h="keypress",g="qx.event.type.Data",k="addItem",b="additive",l="mousemove";
qx.Mixin.define(d,{construct:function(){var I=this.SELECTION_MANAGER;
var H=this.__il=new I(this);
this.addListener(r,H.handleMouseDown,H);
this.addListener(s,H.handleMouseUp,H);
this.addListener(n,H.handleMouseOver,H);
this.addListener(l,H.handleMouseMove,H);
this.addListener(q,H.handleLoseCapture,H);
this.addListener(h,H.handleKeyPress,H);
this.addListener(k,H.handleAddItem,H);
this.addListener(c,H.handleRemoveItem,H);
H.addListener(t,this._onSelectionChange,this);
},events:{"changeSelection":g},properties:{selectionMode:{check:[w,p,b,u],init:w,apply:f},dragSelection:{check:v,init:false,apply:j},quickSelection:{check:v,init:false,apply:o}},members:{__il:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__il.selectAll();
},isSelected:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not test if "+a+" is selected, because it is not a child element!");
}return this.__il.isItemSelected(a);
},addToSelection:function(C){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,C)){throw new Error("Could not add + "+C+" to selection, because it is not a child element!");
}this.__il.addItem(C);
},removeFromSelection:function(J){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not remove "+J+" from selection, because it is not a child element!");
}this.__il.removeItem(J);
},selectRange:function(D,E){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.selectItemRange(D,E);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__il.clearSelection();
},setSelection:function(x){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
for(var i=0;i<x.length;i++){if(!qx.ui.core.Widget.contains(this,x[i])){throw new Error("Could not select "+x[i]+", because it is not a child element!");
}}
if(x.length===0){this.resetSelection();
}else{var y=this.getSelection();

if(!qx.lang.Array.equals(y,x)){this.__il.replaceSelection(x);
}}},getSelection:function(){return this.__il.getSelection();
},getSortedSelection:function(){return this.__il.getSortedSelection();
},isSelectionEmpty:function(){return this.__il.isSelectionEmpty();
},getSelectionContext:function(){return this.__il.getSelectionContext();
},_getManager:function(){return this.__il;
},getSelectables:function(){return this.__il.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.invertSelection();
},_getLeadItem:function(){var B=this.__il.getMode();

if(B===w||B===u){return this.__il.getSelectedItem();
}else{return this.__il.getLeadItem();
}},_applySelectionMode:function(z,A){this.__il.setMode(z);
},_applyDragSelection:function(F,G){this.__il.setDrag(F);
},_applyQuickSelection:function(K,L){this.__il.setQuick(K);
},_onSelectionChange:function(e){this.fireDataEvent(t,e.getData());
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__im:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__in:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__in[name];
s[t]();
}else{var u=this.__im[name];
s[u](q);
}}}});
})();
(function(){var I="one",H="single",G="selected",F="additive",E="multi",D="PageUp",C="under",B="Left",A="lead",z="Down",bk="Up",bj="Boolean",bi="PageDown",bh="anchor",bg="End",bf="Home",be="Right",bd="right",bc="click",bb="above",P="left",Q="Escape",N="drag",O="Space",L="A",M="_applyMode",J="qx.debug",K="interval",R="changeSelection",S="Please use public 'getLeadItem' instead.",V="qx.event.type.Data",U="quick",X="key",W="__iv",ba="abstract",Y="on",T="qx.ui.core.selection.Abstract";
qx.Class.define(T,{type:ba,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__is={};
},events:{"changeSelection":V},properties:{mode:{check:[H,E,F,I],init:H,apply:M},drag:{check:bj,init:false},quick:{check:bj,init:false}},members:{__it:0,__iu:0,__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:null,__iB:null,__iC:null,__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__is:null,__iK:null,__iL:null,getSelectionContext:function(){return this.__iI;
},selectAll:function(){var cf=this.getMode();

if(cf==H||cf==I){throw new Error("Can not select all items in selection mode: "+cf);
}this._selectAllItems();
this._fireChange();
},selectItem:function(br){this._setSelectedItem(br);
var bs=this.getMode();

if(bs!==H&&bs!==I){this._setLeadItem(br);
this._setAnchorItem(br);
}this._scrollItemIntoView(br);
this._fireChange();
},addItem:function(cW){var cX=this.getMode();

if(cX===H||cX===I){this._setSelectedItem(cW);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cW);
}this._setLeadItem(cW);
this._addToSelection(cW);
}this._scrollItemIntoView(cW);
this._fireChange();
},removeItem:function(bA){this._removeFromSelection(bA);

if(this.getMode()===I&&this.isSelectionEmpty()){var bB=this._getFirstSelectable();

if(bB){this.addItem(bB);
}if(bB==bA){return;
}}
if(this.getLeadItem()==bA){this._setLeadItem(null);
}
if(this._getAnchorItem()==bA){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cA,cB){var cC=this.getMode();

if(cC==H||cC==I){throw new Error("Can not select multiple items in selection mode: "+cC);
}this._selectItemRange(cA,cB);
this._setAnchorItem(cA);
this._setLeadItem(cB);
this._scrollItemIntoView(cB);
this._fireChange();
},clearSelection:function(){if(this.getMode()==I){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cd){var ce=this.getMode();

if(ce==I||ce===H){if(cd.length>1){throw new Error("Could not select more than one items in mode: "+ce+"!");
}
if(cd.length==1){this.selectItem(cd[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cd);
}},getSelectedItem:function(){var bP=this.getMode();

if(bP===H||bP===I){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__is);
},getSortedSelection:function(){var cw=this.getSelectables();
var cv=qx.lang.Object.getValues(this.__is);
cv.sort(function(a,b){return cw.indexOf(a)-cw.indexOf(b);
});
return cv;
},isItemSelected:function(cE){var cF=this._selectableToHashCode(cE);
return this.__is[cF]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__is);
},invertSelection:function(){var cQ=this.getMode();

if(cQ===H||cQ===I){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cP=this.getSelectables();

for(var i=0;i<cP.length;i++){this._toggleInSelection(cP[i]);
}this._fireChange();
},_setLeadItem:function(cS){var cT=this.__iJ;

if(cT!==null){this._styleSelectable(cT,A,false);
}
if(cS!==null){this._styleSelectable(cS,A,true);
}this.__iJ=cS;
},_getLeadItem:function(){if(qx.core.Variant.isSet(J,Y)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,S);
}return this.getLeadItem();
},getLeadItem:function(){return this.__iJ!==null?this.__iJ:null;
},_setAnchorItem:function(bp){var bq=this.__iK;

if(bq){this._styleSelectable(bq,bh,false);
}
if(bp){this._styleSelectable(bp,bh,true);
}this.__iK=bp;
},_getAnchorItem:function(){return this.__iK!==null?this.__iK:null;
},_isSelectable:function(cD){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var cY=event.getTarget();
return this._isSelectable(cY)?cY:null;
},_selectableToHashCode:function(bz){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cx,cy,cz){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bH){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(da){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bn,bo){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cR){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(cb,cc){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(c,d){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cK,cL){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(f,g){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(f===I){var h=this._getFirstSelectable();

if(h){this._setSelectedItem(h);
this._scrollItemIntoView(h);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var cJ=this.getMode();

if(cJ!==I&&cJ!==H){return;
}var cI=this._getSelectableFromMouseEvent(event);

if(cI===null){return;
}this._setSelectedItem(cI);
this._fireChange(U);
},handleMouseDown:function(event){var bD=this._getSelectableFromMouseEvent(event);

if(bD===null){return;
}var bF=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bC=event.isShiftPressed();
if(this.isItemSelected(bD)&&!bC&&!bF&&!this.getDrag()){this.__iL=bD;
return;
}else{this.__iL=null;
}this._scrollItemIntoView(bD);
switch(this.getMode()){case H:case I:this._setSelectedItem(bD);
break;
case F:this._setLeadItem(bD);
this._setAnchorItem(bD);
this._toggleInSelection(bD);
break;
case E:this._setLeadItem(bD);
if(bC){var bE=this._getAnchorItem();

if(bE===null){bE=this._getFirstSelectable();
this._setAnchorItem(bE);
}this._selectItemRange(bE,bD,bF);
}else if(bF){this._setAnchorItem(bD);
this._toggleInSelection(bD);
}else{this._setAnchorItem(bD);
this._setSelectedItem(bD);
}break;
}var bG=this.getMode();

if(this.getDrag()&&bG!==H&&bG!==I&&!bC&&!bF){this.__iz=this._getLocation();
this.__iw=this._getScroll();
this.__iA=event.getDocumentLeft()+this.__iw.left;
this.__iB=event.getDocumentTop()+this.__iw.top;
this.__iC=true;
this._capture();
}this._fireChange(bc);
},handleMouseUp:function(event){var cu=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cr=event.isShiftPressed();

if(!cu&&!cr&&this.__iL){var cs=this._getSelectableFromMouseEvent(event);

if(cs===null||!this.isItemSelected(cs)){return;
}var ct=this.getMode();

if(ct===F){this._removeFromSelection(cs);
}else{this._setSelectedItem(cs);

if(this.getMode()===E){this._setLeadItem(cs);
this._setAnchorItem(cs);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__iC){return;
}this.__iD=event.getDocumentLeft();
this.__iE=event.getDocumentTop();
var cV=this.__iD+this.__iw.left;

if(cV>this.__iA){this.__iF=1;
}else if(cV<this.__iA){this.__iF=-1;
}else{this.__iF=0;
}var cU=this.__iE+this.__iw.top;

if(cU>this.__iB){this.__iG=1;
}else if(cU<this.__iB){this.__iG=-1;
}else{this.__iG=0;
}var location=this.__iz;

if(this.__iD<location.left){this.__it=this.__iD-location.left;
}else if(this.__iD>location.right){this.__it=this.__iD-location.right;
}else{this.__it=0;
}
if(this.__iE<location.top){this.__iu=this.__iE-location.top;
}else if(this.__iE>location.bottom){this.__iu=this.__iE-location.bottom;
}else{this.__iu=0;
}if(!this.__iv){this.__iv=new qx.event.Timer(100);
this.__iv.addListener(K,this._onInterval,this);
}this.__iv.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var cq=e.getData();

if(this.getMode()===I&&this.isSelectionEmpty()){this.addItem(cq);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__iC){return;
}if(this.__iH){this._fireChange(bc);
}delete this.__iC;
delete this.__ix;
delete this.__iy;
this._releaseCapture();
if(this.__iv){this.__iv.stop();
}},_onInterval:function(e){this._scrollBy(this.__it,this.__iu);
this.__iw=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var v=this._getDimension();
var o=Math.max(0,Math.min(this.__iD-this.__iz.left,v.width))+this.__iw.left;
var n=Math.max(0,Math.min(this.__iE-this.__iz.top,v.height))+this.__iw.top;
if(this.__ix===o&&this.__iy===n){return;
}this.__ix=o;
this.__iy=n;
var x=this._getAnchorItem();
var q=x;
var t=this.__iF;
var w,p;

while(t!==0){w=t>0?this._getRelatedSelectable(q,bd):this._getRelatedSelectable(q,P);
if(w!==null){p=this._getSelectableLocationX(w);
if((t>0&&p.left<=o)||(t<0&&p.right>=o)){q=w;
continue;
}}break;
}var u=this.__iG;
var s,r;

while(u!==0){s=u>0?this._getRelatedSelectable(q,C):this._getRelatedSelectable(q,bb);
if(s!==null){r=this._getSelectableLocationY(s);
if((u>0&&r.top<=n)||(u<0&&r.bottom>=n)){q=s;
continue;
}}break;
}var y=this.getMode();

if(y===E){this._selectItemRange(x,q);
}else if(y===F){if(this.isItemSelected(x)){this._selectItemRange(x,q,true);
}else{this._deselectItemRange(x,q);
}this._setAnchorItem(q);
}this._fireChange(N);
},__iM:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cl,ck;
var cn=event.getKeyIdentifier();
var cm=this.getMode();
var ch=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var ci=event.isShiftPressed();
var cj=false;

if(cn===L&&ch){if(cm!==H&&cm!==I){this._selectAllItems();
cj=true;
}}else if(cn===Q){if(cm!==H&&cm!==I){this._clearSelection();
cj=true;
}}else if(cn===O){var cg=this.getLeadItem();

if(cg&&!ci){if(ch||cm===F){this._toggleInSelection(cg);
}else{this._setSelectedItem(cg);
}cj=true;
}}else if(this.__iM[cn]){cj=true;

if(cm===H||cm==I){cl=this._getSelectedItem();
}else{cl=this.getLeadItem();
}
if(cl!==null){switch(cn){case bf:ck=this._getFirstSelectable();
break;
case bg:ck=this._getLastSelectable();
break;
case bk:ck=this._getRelatedSelectable(cl,bb);
break;
case z:ck=this._getRelatedSelectable(cl,C);
break;
case B:ck=this._getRelatedSelectable(cl,P);
break;
case be:ck=this._getRelatedSelectable(cl,bd);
break;
case D:ck=this._getPage(cl,true);
break;
case bi:ck=this._getPage(cl,false);
break;
}}else{switch(cn){case bf:case z:case be:case bi:ck=this._getFirstSelectable();
break;
case bg:case bk:case B:case D:ck=this._getLastSelectable();
break;
}}if(ck!==null){switch(cm){case H:case I:this._setSelectedItem(ck);
break;
case F:this._setLeadItem(ck);
break;
case E:if(ci){var co=this._getAnchorItem();

if(co===null){this._setAnchorItem(co=this._getFirstSelectable());
}this._setLeadItem(ck);
this._selectItemRange(co,ck,ch);
}else{this._setAnchorItem(ck);
this._setLeadItem(ck);

if(!ch){this._setSelectedItem(ck);
}}break;
}this._scrollItemIntoView(ck);
}}
if(cj){event.stop();
this._fireChange(X);
}},_selectAllItems:function(){var bt=this.getSelectables();

for(var i=0,l=bt.length;i<l;i++){this._addToSelection(bt[i]);
}},_clearSelection:function(){var bl=this.__is;

for(var bm in bl){this._removeFromSelection(bl[bm]);
}this.__is={};
},_selectItemRange:function(bI,bJ,bK){var bN=this._getSelectableRange(bI,bJ);
if(!bK){var bM=this.__is;
var bO=this.__iN(bN);

for(var bL in bM){if(!bO[bL]){this._removeFromSelection(bM[bL]);
}}}for(var i=0,l=bN.length;i<l;i++){this._addToSelection(bN[i]);
}},_deselectItemRange:function(bu,bv){var bw=this._getSelectableRange(bu,bv);

for(var i=0,l=bw.length;i<l;i++){this._removeFromSelection(bw[i]);
}},__iN:function(j){var m={};
var k;

for(var i=0,l=j.length;i<l;i++){k=j[i];
m[this._selectableToHashCode(k)]=k;
}return m;
},_getSelectedItem:function(){for(var cp in this.__is){return this.__is[cp];
}return null;
},_setSelectedItem:function(cM){if(this._isSelectable(cM)){var cN=this.__is;
var cO=this._selectableToHashCode(cM);

if(!cN[cO]||qx.lang.Object.hasMinLength(cN,2)){this._clearSelection();
this._addToSelection(cM);
}}},_addToSelection:function(bR){var bS=this._selectableToHashCode(bR);

if(!this.__is[bS]&&this._isSelectable(bR)){this.__is[bS]=bR;
this._styleSelectable(bR,G,true);
this.__iH=true;
}},_toggleInSelection:function(bx){var by=this._selectableToHashCode(bx);

if(!this.__is[by]){this.__is[by]=bx;
this._styleSelectable(bx,G,true);
}else{delete this.__is[by];
this._styleSelectable(bx,G,false);
}this.__iH=true;
},_removeFromSelection:function(cG){var cH=this._selectableToHashCode(cG);

if(this.__is[cH]!=null){delete this.__is[cH];
this._styleSelectable(cG,G,false);
this.__iH=true;
}},_replaceMultiSelection:function(bT){var bW=false;
var ca,bY;
var bU={};

for(var i=0,l=bT.length;i<l;i++){ca=bT[i];

if(this._isSelectable(ca)){bY=this._selectableToHashCode(ca);
bU[bY]=ca;
}}var bV=ca;
var bX=this.__is;

for(var bY in bX){if(bU[bY]){delete bU[bY];
}else{ca=bX[bY];
delete bX[bY];
this._styleSelectable(ca,G,false);
bW=true;
}}for(var bY in bU){ca=bX[bY]=bU[bY];
this._styleSelectable(ca,G,true);
bW=true;
}if(!bW){return false;
}this._scrollItemIntoView(bV);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__iH=true;
this._fireChange();
},_fireChange:function(bQ){if(this.__iH){this.__iI=bQ||null;
this.fireDataEvent(R,this.getSelection());
delete this.__iH;
}}},destruct:function(){this._disposeObjects(W);
this.__is=this.__iL=this.__iK=null;
this.__iJ=null;
}});
})();
(function(){var J="vertical",I="under",H="above",G="qx.ui.core.selection.Widget",F="left",E="right";
qx.Class.define(G,{extend:qx.ui.core.selection.Abstract,construct:function(C){arguments.callee.base.call(this);
this.__iO=C;
},members:{__iO:null,_isSelectable:function(r){return r.isEnabled()&&r.isVisible()&&r.getLayoutParent()===this.__iO;
},_selectableToHashCode:function(K){return K.$$hash;
},_styleSelectable:function(g,h,j){j?g.addState(h):g.removeState(h);
},_capture:function(){this.__iO.capture();
},_releaseCapture:function(){this.__iO.releaseCapture();
},_getWidget:function(){return this.__iO;
},_getLocation:function(){var s=this.__iO.getContentElement().getDomElement();
return s?qx.bom.element.Location.get(s):null;
},_getDimension:function(){return this.__iO.getInnerSize();
},_getSelectableLocationX:function(L){var M=L.getBounds();

if(M){return {left:M.left,right:M.left+M.width};
}},_getSelectableLocationY:function(N){var O=N.getBounds();

if(O){return {top:O.top,bottom:O.top+O.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(D){this.__iO.scrollChildIntoView(D);
},getSelectables:function(){var e=this.__iO.getChildren();
var f=[];
var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.isEnabled()&&d.isVisible()){f.push(d);
}}return f;
},_getSelectableRange:function(u,v){if(u===v){return [u];
}var z=this.__iO.getChildren();
var w=[];
var y=false;
var x;

for(var i=0,l=z.length;i<l;i++){x=z[i];

if(x===u||x===v){if(y){w.push(x);
break;
}else{y=true;
}}
if(y&&x.isEnabled()&&x.isVisible()){w.push(x);
}}return w;
},_getFirstSelectable:function(){var a=this.__iO.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var t=this.__iO.getChildren();

for(var i=t.length-1;i>0;i--){if(t[i].isEnabled()&&t[i].isVisible()){return t[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__iO.getOrientation()===J;
var o=this.__iO.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===H)||(!p&&m===F)){for(var i=n-1;i>=0;i--){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}else if((p&&m===I)||(!p&&m===E)){for(var i=n+1;i<o.length;i++){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}return null;
},_getPage:function(b,c){if(c){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var r=this._getWidget();
return {left:r.getScrollX(),top:r.getScrollY()};
},_scrollBy:function(o,p){var q=this._getWidget();
q.scrollByX(o);
q.scrollByY(p);
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
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(p){var q=p.getBounds();

if(q){var top=this._getWidget().getItemTop(p);
return {top:top,bottom:top+q.height};
}},_isSelectable:function(v){return v instanceof qx.ui.tree.AbstractTreeItem&&v.isEnabled()&&v.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var g=this._getWidget();
var h=[];

if(g.getRoot()!=null){var f=g.getRoot().getItems(true,false,g.getHideRoot());

for(var i=0;i<f.length;i++){if(this._isSelectable(f[i])){h.push(f[i]);
}}}return h;
},_getSelectableRange:function(j,k){if(j===k){return [j];
}var l=this.getSelectables();
var m=l.indexOf(j);
var n=l.indexOf(k);

if(m<0||n<0){return [];
}
if(m<n){return l.slice(m,n+1);
}else{return l.slice(n,m+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var o=this.getSelectables();

if(o.length>0){return o[o.length-1];
}else{return null;
}},_getRelatedSelectable:function(r,s){var t=this._getWidget();
var u=null;

switch(s){case d:u=t.getPreviousSiblingOf(r,false);
break;
case b:u=t.getNextSiblingOf(r,false);
break;
case c:case e:break;
}
if(!u){return null;
}
if(this._isSelectable(u)){return u;
}else{return this._getRelatedSelectable(u,s);
}}}});
})();
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="visible",f="qx.event.type.Data",d="__iP",c="_applyOpenMode",b="Space",a="Left",z="Enter",y="changeOpenMode",x="_applyRootOpenClose",w="changeSelection",v="qx.ui.tree.Tree",u="tree",t="_applyHideRoot",s="changeRoot",r="_applyRoot",q="keypress",o="none",p="pane",m="Right",n="qx.ui.tree.AbstractTreeItem";
qx.Class.define(v,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__iP=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(p).add(this.__iP);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(w,this._onChangeSelection,this);
this.addListener(q,this._onKeyPress,this);
},events:{addItem:f,removeItem:f},properties:{openMode:{check:[k,l,o],init:l,apply:c,event:y,themeable:true},root:{check:n,init:null,nullable:true,event:s,apply:r},hideRoot:{check:j,init:false,apply:t},rootOpenClose:{check:j,init:false,apply:x},appearance:{refine:true,init:u},focusable:{refine:true,init:true}},members:{__iP:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__iP;
},_applyRoot:function(A,B){var C=this.getChildrenContainer();

if(B){C.remove(B);

if(B.hasChildren()){C.remove(B.getChildrenContainer());
}}
if(A){C.add(A);

if(A.hasChildren()){C.add(A.getChildrenContainer());
}A.setVisibility(this.getHideRoot()?h:g);
A.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(Y,ba){var bb=this.getRoot();

if(!bb){return;
}bb.setVisibility(Y?h:g);
bb.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(D,E){var F=this.getRoot();

if(!F){return;
}F.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__iP;
},getNextSiblingOf:function(S,T,U){if((T!==false||S.isOpen())&&!(U==true)&&S.hasChildren()){return S.getChildren()[0];
}
while(S){var parent=S.getParent();

if(!parent){return null;
}var W=parent.getChildren();
var V=W.indexOf(S);

if(V>-1&&V<W.length-1){return W[V+1];
}S=parent;
}return null;
},getPreviousSiblingOf:function(L,M,N){var parent=L.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==L){return null;
}}}else{if(L==this.getRoot()){return null;
}}var Q=parent.getChildren();
var O=Q.indexOf(L);

if(O>0){var P=Q[O-1];

while((M!==false||P.isOpen())&&!(N==true)&&P.hasChildren()){var R=P.getChildren();
P=R[R.length-1];
}return P;
}else{return parent;
}},getItems:function(bc,bd){if(this.getRoot()!=null){return this.getRoot().getItems(bc,bd,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(I){while(I){if(I==this){return null;
}
if(I instanceof qx.ui.tree.AbstractTreeItem){return I;
}I=I.getLayoutParent();
}return null;
},_applyOpenMode:function(J,K){if(K==k){this.removeListener(k,this._onOpen,this);
}else if(K==l){this.removeListener(l,this._onOpen,this);
}
if(J==k){this.addListener(k,this._onOpen,this);
}else if(J==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var be=this.getTreeItem(e.getTarget());

if(!be||!be.isOpenable()){return;
}be.setOpen(!be.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var H=e.getData();
for(var i=0;i<H.length;i++){var G=H[i];
while(G.getParent()!=null){G=G.getParent();
G.setOpen(true);
}}},_onKeyPress:function(e){var X=this._getLeadItem();

if(X!==null){switch(e.getKeyIdentifier()){case a:if(X.isOpenable()&&X.isOpen()){X.setOpen(false);
}break;
case m:if(X.isOpenable()&&!X.isOpen()){X.setOpen(true);
}break;
case z:case b:if(X.isOpenable()){X.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__iU",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){arguments.callee.base.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__iT:null,__iU:null,_getScrollPaneElement:function(){if(!this.__iU){this.__iU=new qx.html.Element();
}return this.__iU;
},renderLayout:function(N,top,O,P){var Q=arguments.callee.base.call(this,N,top,O,P);
this._updateScrollBar();
return Q;
},_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__iT?100:E,maxWidth:this.__iT?null:E,minWidth:this.__iT?null:E,height:this.__iT?E:100,maxHeight:this.__iT?E:null,minHeight:this.__iT?E:null};
},_applyEnabled:function(L,M){arguments.callee.base.call(this,L,M);
this._updateScrollBar();
},_applyMaximum:function(A){this._updateScrollBar();
},_applyPosition:function(F){var content=this.getContentElement();

if(this.__iT){content.scrollToX(F);
}else{content.scrollToY(F);
}},_applyOrientation:function(G,H){var I=this.__iT=G===k;
this.set({allowGrowX:I,allowShrinkX:I,allowGrowY:!I,allowShrinkY:!I});

if(I){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:I?i:c,overflowY:I?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var T=this.__iT;
var U=this.getBounds();

if(!U){return;
}
if(this.isEnabled()){var V=T?U.width:U.height;
var S=this.getMaximum()+V;
}else{S=0;
}if(qx.core.Variant.isSet(f,r)){var U=this.getBounds();
this.getContentElement().setStyles({left:T?d:g,top:T?g:d,width:(T?U.width:U.width+1)+j,height:(T?U.height+1:U.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(T?S:1)+j,height:(T?1:S)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(W){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));
},scrollBy:function(R){this.scrollTo(this.getPosition()+R);
},scrollBySteps:function(J){var K=this.getSingleStep();
this.scrollBy(J*K);
},_onScroll:function(e){var D=this.getContentElement();
var C=this.__iT?D.getScrollX():D.getScrollY();
this.setPosition(C);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__iV:2,_createChildControlImpl:function(P){var Q;

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
}return Q||arguments.callee.base.call(this,P);
},_applyMaximum:function(K){this.getChildControl(l).setMaximum(K);
},_applyPosition:function(J){this.getChildControl(l).setValue(J);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(F){this.getChildControl(l).setPageStep(F);
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
},scrollTo:function(a){this.getChildControl(l).slideTo(a);
},scrollBy:function(R){this.getChildControl(l).slideBy(R);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(l).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var L=this.getChildControl(l).getChildControl(v);
var O=L.getSizeHint();
var M=false;
var N=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(N.height<O.minHeight+this.__iV){M=true;
}}else{if(N.width<O.minWidth+this.__iV){M=true;
}}
if(M){L.exclude();
}else{L.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(d){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var be="knob",bd="horizontal",bc="vertical",bb="Integer",ba="hovered",Y="left",X="top",W="mouseup",V="pressed",U="px",bM="mousemove",bL="resize",bK="slider",bJ="mousedown",bI="PageUp",bH="mouseout",bG="changeValue",bF="Left",bE="Down",bD="Up",bl="dblclick",bm="qx.ui.form.Slider",bj="PageDown",bk="mousewheel",bh="interval",bi="_applyValue",bf="_applyKnobFactor",bg="End",bn="height",bo="width",bv="_applyOrientation",bt="Home",bx="mouseover",bw="floor",bz="_applyMinimum",by="click",bq="Right",bC="keypress",bB="ceil",bA="losecapture",bp="contextmenu",br="_applyMaximum",bs="Number",bu="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bm,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(O){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bC,this._onKeyPress);
this.addListener(bk,this._onMouseWheel);
this.addListener(bJ,this._onMouseDown);
this.addListener(W,this._onMouseUp);
this.addListener(bA,this._onMouseUp);
this.addListener(bL,this._onUpdate);
this.addListener(bp,this._onStopEvent);
this.addListener(by,this._onStopEvent);
this.addListener(bl,this._onStopEvent);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bK},focusable:{refine:true,init:true},orientation:{check:[bd,bc],init:bd,apply:bv},value:{check:bu,init:0,apply:bi,event:bG,nullable:true},minimum:{check:bb,init:0,apply:bz},maximum:{check:bb,init:100,apply:br},singleStep:{check:bb,init:1},pageStep:{check:bb,init:10},knobFactor:{check:bs,apply:bf,nullable:true}},members:{__iW:null,__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__jd:null,__je:null,__jf:null,_forwardStates:{invalid:true},_createChildControlImpl:function(P){var Q;

switch(P){case be:Q=new qx.ui.core.Widget();
Q.addListener(bL,this._onUpdate,this);
Q.addListener(bx,this._onMouseOver);
Q.addListener(bH,this._onMouseOut);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_onMouseOver:function(e){this.addState(ba);
},_onMouseOut:function(e){this.removeState(ba);
},_onMouseWheel:function(e){var R=e.getWheelDelta()>0?1:-1;
this.slideBy(R*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bQ=this.getOrientation()===bd;
var bP=bQ?bF:bD;
var forward=bQ?bq:bE;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bP:this.slideBack();
break;
case bj:this.slidePageForward();
break;
case bI:this.slidePageBack();
break;
case bt:this.slideToBegin();
break;
case bg:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__ja){return;
}var K=this.__jh;
var I=this.getChildControl(be);
var J=K?Y:X;
var M=K?e.getDocumentLeft():e.getDocumentTop();
var N=this.__iW=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
var L=this.__iX=qx.bom.element.Location.get(I.getContainerElement().getDomElement())[J];

if(e.getTarget()===I){this.__ja=true;
this.__jb=M+N-L;
I.addState(V);
}else{this.__jc=true;
this.__jd=M<=L?-1:1;
this.__ji(e);
this._onInterval();
if(!this.__jf){this.__jf=new qx.event.Timer(100);
this.__jf.addListener(bh,this._onInterval,this);
}this.__jf.start();
}this.addListener(bM,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__ja){this.releaseCapture();
delete this.__ja;
delete this.__jb;
this.getChildControl(be).removeState(V);
if(e.getType()===W){var q;
var r;
var p;

if(this.__jh){q=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[X];
r=e.getDocumentTop()-(p+this.getChildControl(be).getBounds().top);
}else{q=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Y];
r=e.getDocumentLeft()-(p+this.getChildControl(be).getBounds().left);
}
if(r<0||r>this.__iY||q<0||q>this.__iY){this.getChildControl(be).removeState(ba);
}}}else if(this.__jc){this.__jf.stop();
this.releaseCapture();
delete this.__jc;
delete this.__jd;
delete this.__je;
}this.removeListener(bM,this._onMouseMove);
if(e.getType()===W){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__ja){var bT=this.__jh?e.getDocumentLeft():e.getDocumentTop();
var bS=bT-this.__jb;
this.slideTo(this._positionToValue(bS));
}else if(this.__jc){this.__ji(e);
}e.stopPropagation();
},_onInterval:function(e){var n=this.getValue()+(this.__jd*this.getPageStep());
if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}var o=this.__jd==-1;

if((o&&n<=this.__je)||(!o&&n>=this.__je)){n=this.__je;
}this.slideTo(n);
},_onUpdate:function(e){var G=this.getInnerSize();
var H=this.getChildControl(be).getBounds();
var F=this.__jh?bo:bn;
this._updateKnobSize();
this.__jg=G[F]-H[F];
this.__iY=H[F];
this._updateKnobPosition();
},__jh:false,__jg:0,__ji:function(e){var a=this.__jh;
var i=a?e.getDocumentLeft():e.getDocumentTop();
var k=this.__iW;
var b=this.__iX;
var m=this.__iY;
var j=i-k;

if(i>=b){j-=m;
}var g=this._positionToValue(j);
var c=this.getMinimum();
var d=this.getMaximum();

if(g<c){g=c;
}else if(g>d){g=d;
}else{var h=this.getValue();
var f=this.getPageStep();
var l=this.__jd<0?bw:bB;
g=h+(Math[l]((g-h)/f)*f);
}if(this.__je==null||(this.__jd==-1&&g<=this.__je)||(this.__jd==1&&g>=this.__je)){this.__je=g;
}},_positionToValue:function(u){var v=this.__jg;
if(v==null||v==0){return 0;
}var x=u/v;

if(x<0){x=0;
}else if(x>1){x=1;
}var w=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(w*x);
},_valueToPosition:function(bX){var bY=this.__jg;

if(bY==null){return 0;
}var ca=this.getMaximum()-this.getMinimum();
if(ca==0){return 0;
}var bX=bX-this.getMinimum();
var cb=bX/ca;

if(cb<0){cb=0;
}else if(cb>1){cb=1;
}return Math.round(bY*cb);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(S){var T=this.getChildControl(be).getContainerElement();

if(this.__jh){T.setStyle(Y,S+U,true);
}else{T.setStyle(X,S+U,true);
}},_updateKnobSize:function(){var bO=this.getKnobFactor();

if(bO==null){return;
}var bN=this.getInnerSize();

if(bN==null){return;
}if(this.__jh){this.getChildControl(be).setWidth(Math.round(bO*bN.width));
}else{this.getChildControl(be).setHeight(Math.round(bO*bN.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bR){this.slideTo(this.getValue()+bR);
},slideTo:function(y){if(y<this.getMinimum()){y=this.getMinimum();
}else if(y>this.getMaximum()){y=this.getMaximum();
}else{y=this.getMinimum()+Math.round((y-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(y);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(be);
this.__jh=bU===bd;
if(this.__jh){this.removeState(bc);
bW.removeState(bc);
this.addState(bd);
bW.addState(bd);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bd);
bW.removeState(bd);
this.addState(bc);
bW.addState(bc);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(B,C){if(B!=null){this._updateKnobSize();
}else{if(this.__jh){this.getChildControl(be).resetWidth();
}else{this.getChildControl(be).resetHeight();
}}},_applyValue:function(z,A){if(z!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(s,t){if(this.getValue()<s){this.setValue(s);
}this._updateKnobPosition();
},_applyMaximum:function(D,E){if(this.getValue()>D){this.setValue(D);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var df="top",de="left",dd="qx.debug",dc="bottom",db="hAlign",da="vAlign",cY="Integer",cX="_applyLayoutChange",cW="center",cV="middle",dv="right",du="flex",dt="on",ds="height",dr="' is not supported by the Grid layout!",dq="Invalid parameter 'column'",dp="The property '",dn="Value must be positive",dm="qx.ui.layout.Grid",dl="maxHeight",dj="width",dk="minHeight",dh="minWidth",di="maxWidth",dg="Invalid parameter 'row'";
qx.Class.define(dm,{extend:qx.ui.layout.Abstract,construct:function(bI,bJ){arguments.callee.base.call(this);
this.__jT=[];
this.__jU=[];

if(bI){this.setSpacingX(bI);
}
if(bJ){this.setSpacingY(bJ);
}},properties:{spacingX:{check:cY,init:0,apply:cX},spacingY:{check:cY,init:0,apply:cX}},members:{__jV:null,__jT:null,__jU:null,__jW:null,__jX:null,__jY:null,__ka:null,__kb:null,__kc:null,verifyLayoutProperty:qx.core.Variant.select(dd,{"on":function(cG,name,cH){var cI={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(cI[name]==1,dp+name+dr);
this.assertInteger(cH);
this.assert(cH>=0,dn);
},"off":null}),__kd:function(){var cn=[];
var cm=[];
var co=[];
var ck=-1;
var cj=-1;
var cq=this._getLayoutChildren();

for(var i=0,l=cq.length;i<l;i++){var cl=cq[i];
var cp=cl.getLayoutProperties();
var cr=cp.row;
var ci=cp.column;
cp.colSpan=cp.colSpan||1;
cp.rowSpan=cp.rowSpan||1;
if(cr==null||ci==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cl+"' must be defined!");
}
if(cn[cr]&&cn[cr][ci]){throw new Error("Cannot add widget '"+cl+"'!. "+"There is already a widget '"+cn[cr][ci]+"' in this cell ("+cr+", "+ci+")");
}
for(var x=ci;x<ci+cp.colSpan;x++){for(var y=cr;y<cr+cp.rowSpan;y++){if(cn[y]==undefined){cn[y]=[];
}cn[y][x]=cl;
cj=Math.max(cj,x);
ck=Math.max(ck,y);
}}
if(cp.rowSpan>1){co.push(cl);
}
if(cp.colSpan>1){cm.push(cl);
}}for(var y=0;y<=ck;y++){if(cn[y]==undefined){cn[y]=[];
}}this.__jV=cn;
this.__jW=cm;
this.__jX=co;
this.__jY=ck;
this.__ka=cj;
this.__kb=null;
this.__kc=null;
delete this._invalidChildrenCache;
},_setRowData:function(el,em,en){var eo=this.__jT[el];

if(!eo){this.__jT[el]={};
this.__jT[el][em]=en;
}else{eo[em]=en;
}},_setColumnData:function(o,p,q){var r=this.__jU[o];

if(!r){this.__jU[o]={};
this.__jU[o][p]=q;
}else{r[p]=q;
}},setSpacing:function(bq){this.setSpacingY(bq);
this.setSpacingX(bq);
return this;
},setColumnAlign:function(c,d,e){if(qx.core.Variant.isSet(dd,dt)){this.assertInteger(c,dq);
this.assertInArray(d,[de,cW,dv]);
this.assertInArray(e,[df,cV,dc]);
}this._setColumnData(c,db,d);
this._setColumnData(c,da,e);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bt){var bu=this.__jU[bt]||{};
return {vAlign:bu.vAlign||df,hAlign:bu.hAlign||de};
},setRowAlign:function(cf,cg,ch){if(qx.core.Variant.isSet(dd,dt)){this.assertInteger(cf,dg);
this.assertInArray(cg,[de,cW,dv]);
this.assertInArray(ch,[df,cV,dc]);
}this._setRowData(cf,db,cg);
this._setRowData(cf,da,ch);
this._applyLayoutChange();
return this;
},getRowAlign:function(cJ){var cK=this.__jT[cJ]||{};
return {vAlign:cK.vAlign||df,hAlign:cK.hAlign||de};
},getCellWidget:function(ec,ed){if(this._invalidChildrenCache){this.__kd();
}var ec=this.__jV[ec]||{};
return ec[ed]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__jY+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__ka+1;
},getCellAlign:function(z,A){var G=df;
var E=de;
var F=this.__jT[z];
var C=this.__jU[A];
var B=this.__jV[z][A];

if(B){var D={vAlign:B.getAlignY(),hAlign:B.getAlignX()};
}else{D={};
}if(D.vAlign){G=D.vAlign;
}else if(F&&F.vAlign){G=F.vAlign;
}else if(C&&C.vAlign){G=C.vAlign;
}if(D.hAlign){E=D.hAlign;
}else if(C&&C.hAlign){E=C.hAlign;
}else if(F&&F.hAlign){E=F.hAlign;
}return {vAlign:G,hAlign:E};
},setColumnFlex:function(f,g){this._setColumnData(f,du,g);
this._applyLayoutChange();
return this;
},getColumnFlex:function(br){var bs=this.__jU[br]||{};
return bs.flex!==undefined?bs.flex:0;
},setRowFlex:function(cT,cU){this._setRowData(cT,du,cU);
this._applyLayoutChange();
return this;
},getRowFlex:function(bl){var bm=this.__jT[bl]||{};
var bn=bm.flex!==undefined?bm.flex:0;
return bn;
},setColumnMaxWidth:function(bv,bw){this._setColumnData(bv,di,bw);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(a){var b=this.__jU[a]||{};
return b.maxWidth!==undefined?b.maxWidth:Infinity;
},setColumnWidth:function(cR,cS){this._setColumnData(cR,dj,cS);
this._applyLayoutChange();
return this;
},getColumnWidth:function(U){var V=this.__jU[U]||{};
return V.width!==undefined?V.width:null;
},setColumnMinWidth:function(h,k){this._setColumnData(h,dh,k);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bR){var bS=this.__jU[bR]||{};
return bS.minWidth||0;
},setRowMaxHeight:function(H,I){this._setRowData(H,dl,I);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(cN){var cO=this.__jT[cN]||{};
return cO.maxHeight||Infinity;
},setRowHeight:function(m,n){this._setRowData(m,ds,n);
this._applyLayoutChange();
return this;
},getRowHeight:function(cP){var cQ=this.__jT[cP]||{};
return cQ.height!==undefined?cQ.height:null;
},setRowMinHeight:function(cL,cM){this._setRowData(cL,dk,cM);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bo){var bp=this.__jT[bo]||{};
return bp.minHeight||0;
},__ke:function(s){var w=s.getSizeHint();
var v=s.getMarginLeft()+s.getMarginRight();
var u=s.getMarginTop()+s.getMarginBottom();
var t={height:w.height+u,width:w.width+v,minHeight:w.minHeight+u,minWidth:w.minWidth+v,maxHeight:w.maxHeight+u,maxWidth:w.maxWidth+v};
return t;
},_fixHeightsRowSpan:function(cs){var cD=this.getSpacingY();

for(var i=0,l=this.__jX.length;i<l;i++){var cv=this.__jX[i];
var cx=this.__ke(cv);
var cy=cv.getLayoutProperties();
var cu=cy.row;
var cB=cD*(cy.rowSpan-1);
var ct=cB;
var cA={};

for(var j=0;j<cy.rowSpan;j++){var cF=cy.row+j;
var cw=cs[cF];
var cE=this.getRowFlex(cF);

if(cE>0){cA[cF]={min:cw.minHeight,value:cw.height,max:cw.maxHeight,flex:cE};
}cB+=cw.height;
ct+=cw.minHeight;
}if(cB<cx.height){var cC=qx.ui.layout.Util.computeFlexOffsets(cA,cx.height,cB);

for(var j=0;j<cy.rowSpan;j++){var cz=cC[cu+j]?cC[cu+j].offset:0;
cs[cu+j].height+=cz;
}}if(ct<cx.minHeight){var cC=qx.ui.layout.Util.computeFlexOffsets(cA,cx.minHeight,ct);

for(var j=0;j<cy.rowSpan;j++){var cz=cC[cu+j]?cC[cu+j].offset:0;
cs[cu+j].minHeight+=cz;
}}}},_fixWidthsColSpan:function(W){var bb=this.getSpacingX();

for(var i=0,l=this.__jW.length;i<l;i++){var X=this.__jW[i];
var ba=this.__ke(X);
var bd=X.getLayoutProperties();
var Y=bd.column;
var bj=bb*(bd.colSpan-1);
var bc=bj;
var be={};
var bg;

for(var j=0;j<bd.colSpan;j++){var bk=bd.column+j;
var bi=W[bk];
var bh=this.getColumnFlex(bk);
if(bh>0){be[bk]={min:bi.minWidth,value:bi.width,max:bi.maxWidth,flex:bh};
}bj+=bi.width;
bc+=bi.minWidth;
}if(bj<ba.width){var bf=qx.ui.layout.Util.computeFlexOffsets(be,ba.width,bj);

for(var j=0;j<bd.colSpan;j++){bg=bf[Y+j]?bf[Y+j].offset:0;
W[Y+j].width+=bg;
}}if(bc<ba.minWidth){var bf=qx.ui.layout.Util.computeFlexOffsets(be,ba.minWidth,bc);

for(var j=0;j<bd.colSpan;j++){bg=bf[Y+j]?bf[Y+j].offset:0;
W[Y+j].minWidth+=bg;
}}}},_getRowHeights:function(){if(this.__kb!=null){return this.__kb;
}var cd=[];
var bV=this.__jY;
var bU=this.__ka;

for(var ce=0;ce<=bV;ce++){var bW=0;
var bY=0;
var bX=0;

for(var cc=0;cc<=bU;cc++){var bT=this.__jV[ce][cc];

if(!bT){continue;
}var ca=bT.getLayoutProperties().rowSpan||0;

if(ca>1){continue;
}var cb=this.__ke(bT);

if(this.getRowFlex(ce)>0){bW=Math.max(bW,cb.minHeight);
}else{bW=Math.max(bW,cb.height);
}bY=Math.max(bY,cb.height);
}var bW=Math.max(bW,this.getRowMinHeight(ce));
var bX=this.getRowMaxHeight(ce);

if(this.getRowHeight(ce)!==null){var bY=this.getRowHeight(ce);
}else{var bY=Math.max(bW,Math.min(bY,bX));
}cd[ce]={minHeight:bW,height:bY,maxHeight:bX};
}
if(this.__jX.length>0){this._fixHeightsRowSpan(cd);
}this.__kb=cd;
return cd;
},_getColWidths:function(){if(this.__kc!=null){return this.__kc;
}var bB=[];
var by=this.__ka;
var bA=this.__jY;

for(var bG=0;bG<=by;bG++){var bE=0;
var bD=0;
var bz=Infinity;

for(var bH=0;bH<=bA;bH++){var bx=this.__jV[bH][bG];

if(!bx){continue;
}var bC=bx.getLayoutProperties().colSpan||0;

if(bC>1){continue;
}var bF=this.__ke(bx);

if(this.getColumnFlex(bG)>0){bD=Math.max(bD,bF.minWidth);
}else{bD=Math.max(bD,bF.width);
}bE=Math.max(bE,bF.width);
}var bD=Math.max(bD,this.getColumnMinWidth(bG));
var bz=this.getColumnMaxWidth(bG);

if(this.getColumnWidth(bG)!==null){var bE=this.getColumnWidth(bG);
}else{var bE=Math.max(bD,Math.min(bE,bz));
}bB[bG]={minWidth:bD,width:bE,maxWidth:bz};
}
if(this.__jW.length>0){this._fixWidthsColSpan(bB);
}this.__kc=bB;
return bB;
},_getColumnFlexOffsets:function(bK){var bL=this.getSizeHint();
var bP=bK-bL.width;

if(bP==0){return {};
}var bN=this._getColWidths();
var bM={};

for(var i=0,l=bN.length;i<l;i++){var bQ=bN[i];
var bO=this.getColumnFlex(i);

if((bO<=0)||(bQ.width==bQ.maxWidth&&bP>0)||(bQ.width==bQ.minWidth&&bP<0)){continue;
}bM[i]={min:bQ.minWidth,value:bQ.width,max:bQ.maxWidth,flex:bO};
}return qx.ui.layout.Util.computeFlexOffsets(bM,bK,bL.width);
},_getRowFlexOffsets:function(ee){var ef=this.getSizeHint();
var ei=ee-ef.height;

if(ei==0){return {};
}var ej=this._getRowHeights();
var eg={};

for(var i=0,l=ej.length;i<l;i++){var ek=ej[i];
var eh=this.getRowFlex(i);

if((eh<=0)||(ek.height==ek.maxHeight&&ei>0)||(ek.height==ek.minHeight&&ei<0)){continue;
}eg[i]={min:ek.minHeight,value:ek.height,max:ek.maxHeight,flex:eh};
}return qx.ui.layout.Util.computeFlexOffsets(eg,ee,ef.height);
},renderLayout:function(dw,dx){if(this._invalidChildrenCache){this.__kd();
}var dL=qx.ui.layout.Util;
var dz=this.getSpacingX();
var dF=this.getSpacingY();
var dQ=this._getColWidths();
var dP=this._getColumnFlexOffsets(dw);
var dA=[];
var dS=this.__ka;
var dy=this.__jY;
var dR;

for(var dT=0;dT<=dS;dT++){dR=dP[dT]?dP[dT].offset:0;
dA[dT]=dQ[dT].width+dR;
}var dI=this._getRowHeights();
var dK=this._getRowFlexOffsets(dx);
var ea=[];

for(var dG=0;dG<=dy;dG++){dR=dK[dG]?dK[dG].offset:0;
ea[dG]=dI[dG].height+dR;
}var eb=0;

for(var dT=0;dT<=dS;dT++){var top=0;

for(var dG=0;dG<=dy;dG++){var dN=this.__jV[dG][dT];
if(!dN){top+=ea[dG]+dF;
continue;
}var dB=dN.getLayoutProperties();
if(dB.row!==dG||dB.column!==dT){top+=ea[dG]+dF;
continue;
}var dY=dz*(dB.colSpan-1);

for(var i=0;i<dB.colSpan;i++){dY+=dA[dT+i];
}var dO=dF*(dB.rowSpan-1);

for(var i=0;i<dB.rowSpan;i++){dO+=ea[dG+i];
}var dC=dN.getSizeHint();
var dW=dN.getMarginTop();
var dM=dN.getMarginLeft();
var dJ=dN.getMarginBottom();
var dE=dN.getMarginRight();
var dH=Math.max(dC.minWidth,Math.min(dY-dM-dE,dC.maxWidth));
var dX=Math.max(dC.minHeight,Math.min(dO-dW-dJ,dC.maxHeight));
var dU=this.getCellAlign(dG,dT);
var dV=eb+dL.computeHorizontalAlignOffset(dU.hAlign,dH,dY,dM,dE);
var dD=top+dL.computeVerticalAlignOffset(dU.vAlign,dX,dO,dW,dJ);
dN.renderLayout(dV,dD,dH,dX);
top+=ea[dG]+dF;
}eb+=dA[dT]+dz;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kc=null;
this.__kb=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kd();
}var N=this._getColWidths();
var P=0,Q=0;

for(var i=0,l=N.length;i<l;i++){var R=N[i];

if(this.getColumnFlex(i)>0){P+=R.minWidth;
}else{P+=R.width;
}Q+=R.width;
}var S=this._getRowHeights();
var L=0,O=0;

for(var i=0,l=S.length;i<l;i++){var T=S[i];

if(this.getRowFlex(i)>0){L+=T.minHeight;
}else{L+=T.height;
}O+=T.height;
}var K=this.getSpacingX()*(N.length-1);
var J=this.getSpacingY()*(S.length-1);
var M={minWidth:P+K,width:Q+K,minHeight:L+J,height:O+J};
return M;
}},destruct:function(){this.__jV=this.__jT=this.__jU=this.__jW=this.__jX=this.__kc=this.__kb=null;
}});
})();
(function(){var C="open",B="auto",A="qx.debug",z="middle",y="icon",x="label",w="on",v="changeOpen",u="excluded",t="visible",Y="String",X="opened",W="always",V="qx.ui.tree.AbstractTreeItem",U="__ki",T="addItem",S="Boolean",R="__kj",Q="Invalid child index: ",P="Integer",J="_applyIndent",K="changeOpenSymbolMode",H="_applyOpenSymbolMode",I="resize",F="",G="removeItem",D="abstract",E="never",L="_applyIcon",M="_applyOpen",O="_applyLabel",N="__km";
qx.Class.define(V,{extend:qx.ui.core.Widget,type:D,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__ki=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:S,init:false,event:v,apply:M},openSymbolMode:{check:[W,E,B],init:B,event:K,apply:H},indent:{check:P,init:19,apply:J,themeable:true},parent:{check:V,nullable:true},icon:{check:Y,apply:L,nullable:true,themeable:true},label:{check:Y,apply:O,init:F}},members:{__ki:null,__kj:null,__kk:null,__kl:null,__km:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(by){var bz;

switch(by){case x:bz=new qx.ui.basic.Label().set({alignY:z,value:this.getLabel()});
break;
case y:bz=new qx.ui.basic.Image().set({alignY:z,source:this.getIcon()});
break;
case C:bz=new qx.ui.tree.FolderOpenButton().set({alignY:z});
bz.addListener(v,this._onChangeOpen,this);
bz.addListener(I,this._updateIndent,this);
break;
}return bz||arguments.callee.base.call(this,by);
},getTree:function(){var bs=this;

while(bs.getParent()){bs=bs.getParent();
}var br=bs.getLayoutParent()?bs.getLayoutParent().getLayoutParent():0;

if(br&&br instanceof qx.ui.core.scroll.ScrollPane){return br.getLayoutParent();
}return null;
},addWidget:function(ba,bb){this._add(ba,bb);
},addSpacer:function(){if(!this.__km){this.__km=new qx.ui.core.Spacer();
}else{this._remove(this.__km);
}this._add(this.__km);
},addOpenButton:function(){this._add(this.getChildControl(C));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bO=this.getChildControl(y);

if(this.__kl){this._remove(bO);
}this._add(bO);
this.__kl=true;
},addLabel:function(bB){var bC=this.getChildControl(x);

if(this.__kk){this._remove(bC);
}
if(bB){this.setLabel(bB);
}else{bC.setValue(this.getLabel());
}this._add(bC);
this.__kk=true;
},addState:function(bt){arguments.callee.base.call(this,bt);
var bv=this._getChildren();

for(var i=0,l=bv.length;i<l;i++){var bu=bv[i];

if(bu.addState){bv[i].addState(bt);
}}},removeState:function(bT){arguments.callee.base.call(this,bT);
var bV=this._getChildren();

for(var i=0,l=bV.length;i<l;i++){var bU=bV[i];

if(bU.addState){bV[i].removeState(bT);
}}},_applyIcon:function(bI,bJ){var bK=this.getChildControl(y,true);

if(bK){bK.setSource(bI);
}},_applyLabel:function(bL,bM){var bN=this.getChildControl(x,true);

if(bN){bN.setValue(bL);
}},_applyOpen:function(bW,bX){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bW?t:u);
}var open=this.getChildControl(C,true);

if(open){open.setOpen(bW);
}bW?this.addState(X):this.removeState(X);
},isOpenable:function(){var c=this.getOpenSymbolMode();
return (c===W||c===B&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(C,true);

if(!open){return false;
}var bQ=this.getTree();

if(!bQ.getRootOpenClose()){if(bQ.getHideRoot()){if(bQ.getRoot()==this.getParent()){return false;
}}else{if(bQ.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bR,bS){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bq=0;
var open=this.getChildControl(C,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bp=open.getBounds();

if(bp){bq=bp.width;
}else{return;
}}else{open.exclude();
}}
if(this.__km){this.__km.setWidth((this.getLevel()+1)*this.getIndent()-bq);
}},_applyIndent:function(a,b){this._updateIndent();
},getLevel:function(){var bg=this.getTree();

if(!bg){return;
}var bh=this;
var bi=-1;

while(bh){bh=bh.getParent();
bi+=1;
}if(bg.getHideRoot()){bi-=1;
}
if(!bg.getRootOpenClose()){bi-=1;
}return bi;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kj){this.__kj=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?t:u});
}return this.__kj;
},hasChildrenContainer:function(){return this.__kj;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__ki;
},hasChildren:function(){return this.__ki?this.__ki.length>0:false;
},getItems:function(d,f,g){if(g!==false){var h=[];
}else{var h=[this];
}var m=this.hasChildren()&&(f!==false||this.isOpen());

if(m){var k=this.getChildren();

if(d===false){h=h.concat(k);
}else{for(var i=0,j=k.length;i<j;i++){h=h.concat(k[i].getItems(d,f,false));
}}}return h;
},recursiveAddToWidgetQueue:function(){var bA=this.getItems(true,true,false);

for(var i=0,l=bA.length;i<l;i++){qx.ui.core.queue.Widget.add(bA[i]);
}},__kn:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bj){var bk=this.getChildrenContainer();
var bn=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bo=arguments[i];
var bm=bo.getParent();

if(bm){bm.remove(bo);
}bo.setParent(this);
var bl=this.hasChildren();
bk.add(bo);

if(bo.hasChildren()){bk.add(bo.getChildrenContainer());
}this.__ki.push(bo);

if(!bl){this.__kn();
}
if(bn){bo.recursiveAddToWidgetQueue();
bn.fireNonBubblingEvent(T,qx.event.type.Data,[bo]);
}}
if(bn){qx.ui.core.queue.Widget.add(this);
}},addAt:function(n,o){if(qx.core.Variant.isSet(A,w)){this.assert(o<=this.__ki.length&&o>=0,Q+o);
}
if(o==this.__ki.length){this.add(n);
return;
}var s=n.getParent();

if(s){s.remove(n);
}var q=this.getChildrenContainer();
n.setParent(this);
var r=this.hasChildren();
var p=this.__ki[o];
q.addBefore(n,p);

if(n.hasChildren()){q.addAfter(n.getChildrenContainer(),n);
}qx.lang.Array.insertAt(this.__ki,n,o);

if(!r){this.__kn();
}
if(this.getTree()){n.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bc,bd){if(qx.core.Variant.isSet(A,w)){this.assert(this.__ki.indexOf(bd)>=0);
}this.addAt(bc,this.__ki.indexOf(bd));
},addAfter:function(bw,bx){if(qx.core.Variant.isSet(A,w)){this.assert(this.__ki.indexOf(bx)>=0);
}this.addAt(bw,this.__ki.indexOf(bx)+1);
},addAtBegin:function(bP){this.addAt(bP,0);
},remove:function(bD){for(var i=0,l=arguments.length;i<l;i++){var bH=arguments[i];

if(this.__ki.indexOf(bH)==-1){this.warn("Cannot remove treeitem '"+bH+"'. It is not a child of this tree item.");
return;
}var bE=this.getChildrenContainer();

if(bH.hasChildrenContainer()){var bG=bH.getChildrenContainer();

if(bE.getChildren().indexOf(bG)>=0){bE.remove(bG);
}}qx.lang.Array.remove(this.__ki,bH);
bH.setParent(null);
bE.remove(bH);
}var bF=this.getTree();

if(bF){bF.fireNonBubblingEvent(G,qx.event.type.Data,[bH]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(be){var bf=this.__ki[be];

if(bf){this.remove(bf);
}},removeAll:function(){for(var i=this.__ki.length-1;i>=0;i--){this.remove(this.__ki[i]);
}}},destruct:function(){this._disposeArray(U);
this._disposeObjects(N,R);
}});
})();
(function(){var i="opened",h="click",g="changeOpen",f="Boolean",d="qx.ui.tree.FolderOpenButton",c="_applyOpen",b="mouseup",a="mousedown";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MExecutable,construct:function(){arguments.callee.base.call(this);
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
(function(){var F="qx.event.type.Event",E="Boolean",D="queued",C="String",B="sending",A="receiving",z="aborted",y="failed",x="nocache",w="completed",bn="qx.io.remote.Response",bm="POST",bl="configured",bk="timeout",bj="GET",bi="Pragma",bh="no-url-params-on-post",bg="no-cache",bf="Cache-Control",be="Content-Type",M="text/plain",N="application/xml",K="application/json",L="text/html",I="qx.ioRemoteDebug",J="application/x-www-form-urlencoded",G="qx.io.remote.Exchange",H="Integer",O="X-Qooxdoo-Response-Type",P="HEAD",V="qx.io.remote.Request",U="qx.debug",X="_applyResponseType",W="_applyState",ba="text/javascript",Y="changeState",R="PUT",bd="_applyProhibitCaching",bc="",bb="_applyMethod",Q="DELETE",S="boolean",T="on";
qx.Class.define(V,{extend:qx.core.Object,construct:function(j,k,l){arguments.callee.base.call(this);
this.__pH={};
this.__pI={};
this.__pJ={};
this.__pK={};

if(j!==undefined){this.setUrl(j);
}
if(k!==undefined){this.setMethod(k);
}
if(l!==undefined){this.setResponseType(l);
}this.setProhibitCaching(true);
this.__pL=++qx.io.remote.Request.__pL;
},events:{"created":F,"configured":F,"sending":F,"receiving":F,"completed":bn,"aborted":F,"failed":bn,"timeout":bn},statics:{__pL:0},properties:{url:{check:C,init:bc},method:{check:[bj,bm,R,P,Q],apply:bb,init:bj},asynchronous:{check:E,init:true},data:{check:C,nullable:true},username:{check:C,nullable:true},password:{check:C,nullable:true},state:{check:[bl,D,B,A,w,z,bk,y],init:bl,apply:W,event:Y},responseType:{check:[M,ba,K,N,L],init:M,apply:X},timeout:{check:H,nullable:true},prohibitCaching:{check:function(v){return typeof v==S||v===bh;
},init:true,apply:bd},crossDomain:{check:E,init:false},fileUpload:{check:E,init:false},transport:{check:G,nullable:true},useBasicHttpAuth:{check:E,init:false}},members:{__pH:null,__pI:null,__pJ:null,__pK:null,__pL:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case B:case A:this.error("Aborting already sent request!");
case D:this.abort();
break;
}},isConfigured:function(){return this.getState()===bl;
},isQueued:function(){return this.getState()===D;
},isSending:function(){return this.getState()===B;
},isReceiving:function(){return this.getState()===A;
},isCompleted:function(){return this.getState()===w;
},isAborted:function(){return this.getState()===z;
},isTimeout:function(){return this.getState()===bk;
},isFailed:function(){return this.getState()===y;
},__pM:function(e){var r=e.clone();
r.setTarget(this);
this.dispatchEvent(r);
},_onqueued:function(e){this.setState(D);
this.__pM(e);
},_onsending:function(e){this.setState(B);
this.__pM(e);
},_onreceiving:function(e){this.setState(A);
this.__pM(e);
},_oncompleted:function(e){this.setState(w);
this.__pM(e);
this.dispose();
},_onaborted:function(e){this.setState(z);
this.__pM(e);
this.dispose();
},_ontimeout:function(e){this.setState(bk);
this.__pM(e);
this.dispose();
},_onfailed:function(e){this.setState(y);
this.__pM(e);
this.dispose();
},_applyState:function(bu,bv){if(qx.core.Variant.isSet(U,T)){if(qx.core.Setting.get(I)){this.debug("State: "+bu);
}}},_applyProhibitCaching:function(bp,bq){if(!bp){this.removeParameter(x);
this.removeRequestHeader(bi);
this.removeRequestHeader(bf);
return;
}if(bp!==bh||this.getMethod()!=bm){this.setParameter(x,new Date().valueOf());
}else{this.removeParameter(x);
}this.setRequestHeader(bi,bg);
this.setRequestHeader(bf,bg);
},_applyMethod:function(a,b){if(a===bm){this.setRequestHeader(be,J);
}else{this.removeRequestHeader(be);
}var c=this.getProhibitCaching();
this._applyProhibitCaching(c,c);
},_applyResponseType:function(t,u){this.setRequestHeader(O,t);
},setRequestHeader:function(n,o){this.__pH[n]=o;
},removeRequestHeader:function(bo){delete this.__pH[bo];
},getRequestHeader:function(s){return this.__pH[s]||null;
},getRequestHeaders:function(){return this.__pH;
},setParameter:function(br,bs,bt){if(bt){this.__pJ[br]=bs;
}else{this.__pI[br]=bs;
}},removeParameter:function(d,f){if(f){delete this.__pJ[d];
}else{delete this.__pI[d];
}},getParameter:function(g,h){if(h){return this.__pJ[g]||null;
}else{return this.__pI[g]||null;
}},getParameters:function(m){return (m?this.__pJ:this.__pI);
},setFormField:function(p,q){this.__pK[p]=q;
},removeFormField:function(bw){delete this.__pK[bw];
},getFormField:function(i){return this.__pK[i]||null;
},getFormFields:function(){return this.__pK;
},getSequenceNumber:function(){return this.__pL;
}},destruct:function(){this.setTransport(null);
this.__pH=this.__pI=this.__pJ=this.__pK=null;
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
(function(){var n="qx.ioRemoteDebug",m="Integer",l="qx.debug",k="on",j="aborted",h="_onaborted",g="_on",f="Boolean",d="singleton",c="interval",z="receiving",y="Request-Queue Progress: ",x="queued",w="/",v="_applyEnabled",u="__pO",t="sending",s="completed",r="__pQ",q="failed",o="qx.io.remote.RequestQueue",p="timeout";
qx.Class.define(o,{type:d,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__pN=[];
this.__pO=[];
this.__pP=0;
this.__pQ=new qx.event.Timer(500);
this.__pQ.addListener(c,this._oninterval,this);
},properties:{enabled:{init:true,check:f,apply:v},maxTotalRequests:{check:m,nullable:true},maxConcurrentRequests:{check:m,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:m,init:5000}},members:{__pN:null,__pO:null,__pP:null,__pQ:null,getRequestQueue:function(){return this.__pN;
},getActiveQueue:function(){return this.__pO;
},_debug:function(){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){var A=this.__pO.length+w+(this.__pN.length+this.__pO.length);
this.debug("Progress: "+A);
window.status=y+A;
}}},_check:function(){this._debug();
if(this.__pO.length==0&&this.__pN.length==0){this.__pQ.stop();
}if(!this.getEnabled()){return;
}if(this.__pN.length==0||(this.__pN[0].isAsynchronous()&&this.__pO.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__pP>=this.getMaxTotalRequests()){return;
}var K=this.__pN.shift();
var L=new qx.io.remote.Exchange(K);
this.__pP++;
this.__pO.push(L);
this._debug();
L.addListener(t,this._onsending,this);
L.addListener(z,this._onreceiving,this);
L.addListener(s,this._oncompleted,this);
L.addListener(j,this._oncompleted,this);
L.addListener(p,this._oncompleted,this);
L.addListener(q,this._oncompleted,this);
L._start=(new Date).valueOf();
L.send();
if(this.__pN.length>0){this._check();
}},_remove:function(I){qx.lang.Array.remove(this.__pO,I);
I.dispose();
this._check();
},__pR:0,_onsending:function(e){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){this.__pR++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__pR);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(l,k)){if(qx.core.Setting.get(n)){if(e.getTarget()._counted){this.__pR--;
this.debug("ActiveCount: "+this.__pR);
}}}var F=e.getTarget().getRequest();
var E=g+e.getType();
try{if(F[E]){F[E](e);
}}catch(G){var D=qx.dev.StackTrace.getStackTraceFromError(G);
this.error("Request "+F+" handler "+E+" threw an error: "+G+"\nStack Trace:\n"+D);
try{if(F[h]){var event=qx.event.Registration.createEvent(j,qx.event.type.Event);
F[h](event);
}}catch(J){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var S=this.__pO;

if(S.length==0){this.__pQ.stop();
return;
}var N=(new Date).valueOf();
var Q;
var O;
var R=this.getDefaultTimeout();
var P;
var M;

for(var i=S.length-1;i>=0;i--){Q=S[i];
O=Q.getRequest();

if(O.isAsynchronous()){P=O.getTimeout();
if(P==0){continue;
}
if(P==null){P=R;
}M=N-Q._start;

if(M>P){this.warn("Timeout: transport "+Q.toHashCode());
this.warn(M+"ms > "+P+"ms");
Q.timeout();
}}}},_applyEnabled:function(a,b){if(a){this._check();
}this.__pQ.setEnabled(a);
},add:function(H){H.setState(x);

if(H.isAsynchronous()){this.__pN.push(H);
}else{this.__pN.unshift(H);
}this._check();

if(this.getEnabled()){this.__pQ.start();
}},abort:function(B){var C=B.getTransport();

if(C){C.abort();
}else if(qx.lang.Array.contains(this.__pN,B)){qx.lang.Array.remove(this.__pN,B);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(r);
this.__pN=null;
}});
})();
(function(){var M="qx.ioRemoteDebug",L="qx.debug",K="on",J="failed",I="sending",H="completed",G="receiving",F="aborted",E="timeout",D="qx.event.type.Event",bK="Connection dropped",bJ="qx.io.remote.Response",bI="configured",bH="Proxy authentication required",bG="qx.io.remote.transport.Abstract",bF="MSHTML-specific HTTP status code",bE="Not available",bD="Precondition failed",bC="Server error",bB="qx.io.remote.Exchange",T="Bad gateway",U="Gone",R="See other",S="Partial content",P="Server timeout",Q="qx.io.remote.transport.Script",N="HTTP version not supported",O="Unauthorized",X="Multiple choices",Y="Payment required",bh="Not implemented",bf="Request-URL too large",bp="Length required",bk="_applyState",bx="changeState",bu="Not modified",bb="Not acceptable",bA="qx.io.remote.Request",bz="Connection closed by server",by="Moved permanently",ba="_applyImplementation",bd="Method not allowed",be="Moved temporarily",bg="Forbidden",bi="Use proxy",bl="Ok",br="Not found",bw="Request time-out",V="Bad request",W="Conflict",bc="No content",bo="qx.io.remote.transport.XmlHttp",bn="qx.io.remote.transport.Iframe",bm="Request entity too large",bt="Unknown status code",bs="Unsupported media type",bj="Gateway time-out",bq="created",C="Out of resources",bv="undefined";
qx.Class.define(bB,{extend:qx.core.Object,construct:function(bT){arguments.callee.base.call(this);
this.setRequest(bT);
bT.setTransport(this);
},events:{"sending":D,"receiving":D,"completed":bJ,"aborted":D,"failed":bJ,"timeout":bJ},statics:{typesOrder:[bo,bn,Q],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(r,s){qx.io.remote.Exchange.typesAvailable[s]=r;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var b in qx.io.remote.Exchange.typesAvailable){var a=qx.io.remote.Exchange.typesAvailable[b];

if(a.isSupported()){qx.io.remote.Exchange.typesSupported[b]=a;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(t,u,v){if(!qx.lang.Array.contains(t.handles.responseTypes,v)){return false;
}
for(var w in u){if(!t.handles[w]){return false;
}}return true;
},_nativeMap:{0:bq,1:bI,2:I,3:G,4:H},wasSuccessful:function(z,A,B){if(B){switch(z){case null:case 0:return true;
case -1:return A<4;
default:return typeof z===bv;
}}else{switch(z){case -1:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)&&A>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+A);
}}return A<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)&&A===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return A!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+z);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+z);
}}return false;
default:if(z>206&&z<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+z+" ("+A+")");
return false;
}}},statusCodeToString:function(p){switch(p){case -1:return bE;
case 200:return bl;
case 304:return bu;
case 206:return S;
case 204:return bc;
case 300:return X;
case 301:return by;
case 302:return be;
case 303:return R;
case 305:return bi;
case 400:return V;
case 401:return O;
case 402:return Y;
case 403:return bg;
case 404:return br;
case 405:return bd;
case 406:return bb;
case 407:return bH;
case 408:return bw;
case 409:return W;
case 410:return U;
case 411:return bp;
case 412:return bD;
case 413:return bm;
case 414:return bf;
case 415:return bs;
case 500:return bC;
case 501:return bh;
case 502:return T;
case 503:return C;
case 504:return bj;
case 505:return N;
case 12002:return P;
case 12029:return bK;
case 12030:return bK;
case 12031:return bK;
case 12152:return bz;
case 13030:return bF;
default:return bt;
}}},properties:{request:{check:bA,nullable:true},implementation:{check:bG,nullable:true,apply:ba},state:{check:[bI,I,G,H,F,E,J],init:bI,event:bx,apply:bk}},members:{send:function(){var bO=this.getRequest();

if(!bO){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bM=qx.io.remote.Exchange.typesOrder;
var bL=qx.io.remote.Exchange.typesSupported;
var bQ=bO.getResponseType();
var bR={};

if(bO.getAsynchronous()){bR.asynchronous=true;
}else{bR.synchronous=true;
}
if(bO.getCrossDomain()){bR.crossDomain=true;
}
if(bO.getFileUpload()){bR.fileUpload=true;
}for(var bP in bO.getFormFields()){bR.programaticFormFields=true;
break;
}var bS,bN;

for(var i=0,l=bM.length;i<l;i++){bS=bL[bM[i]];

if(bS){if(!qx.io.remote.Exchange.canHandle(bS,bR,bQ)){continue;
}
try{if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Using implementation: "+bS.classname);
}}bN=new bS;
this.setImplementation(bN);
bN.setUseBasicHttpAuth(bO.getUseBasicHttpAuth());
bN.send();
return true;
}catch(k){this.error("Request handler throws error");
this.error(k);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bO);
},abort:function(){var q=this.getImplementation();

if(q){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Abort: implementation "+q.toHashCode());
}}q.abort();
}else{if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Abort: forcing state to be aborted");
}}this.setState(F);
}},timeout:function(){var x=this.getImplementation();

if(x){this.warn("Timeout: implementation "+x.toHashCode());
x.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(E);
}this.__pS();
},__pS:function(){var y=this.getRequest();

if(y){y.setTimeout(0);
}},_onsending:function(e){this.setState(I);
},_onreceiving:function(e){this.setState(G);
},_oncompleted:function(e){this.setState(H);
},_onabort:function(e){this.setState(F);
},_onfailed:function(e){this.setState(J);
},_ontimeout:function(e){this.setState(E);
},_applyImplementation:function(m,n){if(n){n.removeListener(I,this._onsending,this);
n.removeListener(G,this._onreceiving,this);
n.removeListener(H,this._oncompleted,this);
n.removeListener(F,this._onabort,this);
n.removeListener(E,this._ontimeout,this);
n.removeListener(J,this._onfailed,this);
}
if(m){var o=this.getRequest();
m.setUrl(o.getUrl());
m.setMethod(o.getMethod());
m.setAsynchronous(o.getAsynchronous());
m.setUsername(o.getUsername());
m.setPassword(o.getPassword());
m.setParameters(o.getParameters());
m.setFormFields(o.getFormFields());
m.setRequestHeaders(o.getRequestHeaders());
m.setData(o.getData());
m.setResponseType(o.getResponseType());
m.addListener(I,this._onsending,this);
m.addListener(G,this._onreceiving,this);
m.addListener(H,this._oncompleted,this);
m.addListener(F,this._onabort,this);
m.addListener(E,this._ontimeout,this);
m.addListener(J,this._onfailed,this);
}},_applyState:function(c,d){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("State: "+d+" => "+c);
}}
switch(c){case I:this.fireEvent(I);
break;
case G:this.fireEvent(G);
break;
case H:case F:case E:case J:var g=this.getImplementation();

if(!g){break;
}this.__pS();

if(this.hasListener(c)){var h=qx.event.Registration.createEvent(c,qx.io.remote.Response);

if(c==H){var f=g.getResponseContent();
h.setContent(f);
if(f===null){if(qx.core.Variant.isSet(L,K)){if(qx.core.Setting.get(M)){this.debug("Altered State: "+c+" => failed");
}}c=J;
}}else if(c==J){h.setContent(g.getResponseContent());
}h.setStatusCode(g.getStatusCode());
h.setResponseHeaders(g.getResponseHeaders());
this.dispatchEvent(h);
}this.setImplementation(null);
g.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var j=this.getImplementation();

if(j){this.setImplementation(null);
j.dispose();
}this.setRequest(null);
}});
})();
(function(){var t="qx.event.type.Event",s="String",r="qx.ioRemoteDebug",q="qx.debug",p="failed",o="timeout",n="on",m="created",l="aborted",k="sending",d="configured",j="receiving",g="completed",c="Object",b="Boolean",f="abstract",e="_applyState",h="GET",a="changeState",i="qx.io.remote.transport.Abstract";
qx.Class.define(i,{type:f,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
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
},setRequestHeader:function(v,w){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(u){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(x,y){if(qx.core.Variant.isSet(q,n)){if(qx.core.Setting.get(r)){this.debug("State: "+x);
}}
switch(x){case m:this.fireEvent(m);
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
}}});
})();
(function(){var bo="qx.debug",bn="on",bm="qx.ioRemoteDebugData",bl="failed",bk="qx.ioRemoteDebug",bj="completed",bi="=",bh="aborted",bg="",bf="sending",bN="&",bM="configured",bL="timeout",bK="application/xml",bJ="qx.io.remote.transport.XmlHttp",bI="application/json",bH="text/html",bG="qx.client",bF="receiving",bE="text/plain",bv="text/javascript",bw="created",bt="?",bu='Referer',br='Basic ',bs="\n</pre>",bp="string",bq='Authorization',bx="<pre>Could not execute json: \n",by="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bA=':',bz="parseerror",bC="file:",bB="webkit",bD="object";
qx.Class.define(bJ,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bE,bv,bI,bK,bH]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bG,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__pT:false,__pU:0,__pV:null,getRequest:function(){if(this.__pV===null){this.__pV=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__pV.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__pV;
},send:function(){this.__pU=0;
var n=this.getRequest();
var h=this.getMethod();
var q=this.getAsynchronous();
var p=this.getUrl();
var k=(window.location.protocol===bC&&!(/^http(s){0,1}\:/.test(p)));
this.__pT=k;
var u=this.getParameters(false);
var r=[];

for(var j in u){var o=u[j];

if(o instanceof Array){for(var i=0;i<o.length;i++){r.push(encodeURIComponent(j)+bi+encodeURIComponent(o[i]));
}}else{r.push(encodeURIComponent(j)+bi+encodeURIComponent(o));
}}
if(r.length>0){p+=(p.indexOf(bt)>=0?bN:bt)+r.join(bN);
}if(this.getData()===null){var u=this.getParameters(true);
var r=[];

for(var j in u){var o=u[j];

if(o instanceof Array){for(var i=0;i<o.length;i++){r.push(encodeURIComponent(j)+bi+encodeURIComponent(o[i]));
}}else{r.push(encodeURIComponent(j)+bi+encodeURIComponent(o));
}}
if(r.length>0){this.setData(r.join(bN));
}}var t=function(S){var X=by;
var bc=bg;
var V,U,T;
var Y,ba,bb,W;
var i=0;

do{V=S.charCodeAt(i++);
U=S.charCodeAt(i++);
T=S.charCodeAt(i++);
Y=V>>2;
ba=((V&3)<<4)|(U>>4);
bb=((U&15)<<2)|(T>>6);
W=T&63;

if(isNaN(U)){bb=W=64;
}else if(isNaN(T)){W=64;
}bc+=X.charAt(Y)+X.charAt(ba)+X.charAt(bb)+X.charAt(W);
}while(i<S.length);
return bc;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){n.open(h,p,q);
n.setRequestHeader(bq,br+t(this.getUsername()+bA+this.getPassword()));
}else{n.open(h,p,q,this.getUsername(),this.getPassword());
}}else{n.open(h,p,q);
}}catch(E){this.error("Failed with exception: "+E);
this.failed();
return;
}if(!qx.core.Variant.isSet(bG,bB)){n.setRequestHeader(bu,window.location.href);
}var m=this.getRequestHeaders();

for(var j in m){n.setRequestHeader(j,m[j]);
}try{if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Request: "+this.getData());
}}n.send(this.getData());
}catch(D){if(k){this.failedLocally();
}else{this.error("Failed to send data: "+D,"send");
this.failed();
}return;
}if(!q){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===bl){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case bj:case bh:case bl:case bL:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.warn("Ignore Ready State Change");
}}return;
}var bU=this.getReadyState();

if(bU==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bU,this.__pT)){if(this.getState()===bM){this.setState(bf);
}return this.failed();
}}while(this.__pU<bU){this.setState(qx.io.remote.Exchange._nativeMap[++this.__pU]);
}}),getReadyState:function(){var bS=null;

try{bS=this.getRequest().readyState;
}catch(y){}return bS;
},setRequestHeader:function(O,P){this.getRequestHeaders()[O]=P;
},getResponseHeader:function(w){var x=null;

try{x=this.getRequest().getResponseHeader(w)||null;
}catch(bR){}return x;
},getStringResponseHeaders:function(){var A=null;

try{var z=this.getRequest().getAllResponseHeaders();

if(z){A=z;
}}catch(bT){}return A;
},getResponseHeaders:function(){var c=this.getStringResponseHeaders();
var d={};

if(c){var a=c.split(/[\r\n]+/g);

for(var i=0,l=a.length;i<l;i++){var b=a[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(b){d[b[1]]=b[2];
}}}return d;
},getStatusCode:function(){var be=-1;

try{be=this.getRequest().status;
}catch(g){}return be;
},getStatusText:function(){var I=bg;

try{I=this.getRequest().statusText;
}catch(J){}return I;
},getResponseText:function(){var f=null;

try{f=this.getRequest().responseText;
}catch(L){f=null;
}return f;
},getResponseXml:function(){var bQ=null;
var bO=this.getStatusCode();
var bP=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bO,bP,this.__pT)){try{bQ=this.getRequest().responseXML;
}catch(M){}}if(typeof bQ==bD&&bQ!=null){if(!bQ.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,bg);
bQ.loadXML(s);
}if(!bQ.documentElement){throw new Error("Missing Document Element!");
}
if(bQ.documentElement.tagName==bz){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bQ;
},getFetchedLength:function(){var v=this.getResponseText();
return typeof v==bp?v.length:0;
},getResponseContent:function(){var F=this.getState();

if(F!==bj&&F!=bl){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var H=this.getResponseText();

if(F==bl){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Failed: "+H);
}}return H;
}
switch(this.getResponseType()){case bE:case bH:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+H);
}}return H;
case bI:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+H);
}}
try{if(H&&H.length>0){var G=qx.util.Json.parse(H,false);
return (G===0?0:(G||null));
}else{return null;
}}catch(K){this.error("Could not execute json: ["+H+"]",K);
return bx+H+bs;
}case bv:if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+H);
}}
try{if(H&&H.length>0){var G=window.eval(H);
return (G===0?0:(G||null));
}else{return null;
}}catch(bd){this.error("Could not execute javascript: ["+H+"]",bd);
return null;
}case bK:H=this.getResponseXml();

if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bm)){this.debug("Response: "+H);
}}return (H===0?0:(H||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(Q,R){if(qx.core.Variant.isSet(bo,bn)){if(qx.core.Setting.get(bk)){this.debug("State: "+Q);
}}
switch(Q){case bw:this.fireEvent(bw);
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
}}},defer:function(B,C){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bJ);
},destruct:function(){var N=this.getRequest();

if(N){N.onreadystatechange=qx.lang.Function.empty;
switch(N.readyState){case 1:case 2:case 3:N.abort();
}}this.__pV=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k='"',j="qx.jsonDebugging",h='\\u00',g="new Date(Date.UTC(",f="__pe",e="__pg",L='\\\\',K='\\f',J='\\"',I="))",H="}",G='(',F=":",E="{",D='\\r',C="__pf",w="__pd",x='\\t',u="]",v="[",s="Use 'parse' instead!",t="__pn",q="qx.jsonEncodeUndefined",r="__po",y='\\b',z="qx.util.Json",B=')',A='\\n';
qx.Class.define(z,{statics:{__pb:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__pc:{"function":w,"boolean":f,"number":C,"string":e,"object":t,"undefined":r},__pd:function(bz,bA){return String(bz);
},__pe:function(M,N){return String(M);
},__pf:function(c,d){return isFinite(c)?String(c):m;
},__pg:function(S,T){var U;

if(/["\\\x00-\x1f]/.test(S)){U=S.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__pi);
}else{U=S;
}return k+U+k;
},__ph:{'\b':y,'\t':x,'\n':A,'\f':K,'\r':D,'"':J,'\\':L},__pi:function(a,b){var V=qx.util.Json.__ph[b];

if(V){return V;
}V=b.charCodeAt();
return h+Math.floor(V/16).toString(16)+(V%16).toString(16);
},__pj:function(bf,bg){var bi=[],bl=true,bk,bh;
var bj=qx.util.Json.__pq;
bi.push(v);

if(bj){qx.util.Json.__pk+=qx.util.Json.BEAUTIFYING_INDENT;
bi.push(qx.util.Json.__pk);
}
for(var i=0,l=bf.length;i<l;i++){bh=bf[i];
bk=this.__pc[typeof bh];

if(bk){bh=this[bk](bh,i+o);

if(typeof bh==n){if(!bl){bi.push(p);

if(bj){bi.push(qx.util.Json.__pk);
}}bi.push(bh);
bl=false;
}}}
if(bj){qx.util.Json.__pk=qx.util.Json.__pk.substring(0,qx.util.Json.__pk.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bi.push(qx.util.Json.__pk);
}bi.push(u);
return bi.join(o);
},__pl:function(bq,br){var bs=bq.getUTCFullYear()+p+bq.getUTCMonth()+p+bq.getUTCDate()+p+bq.getUTCHours()+p+bq.getUTCMinutes()+p+bq.getUTCSeconds()+p+bq.getUTCMilliseconds();
return g+bs+I;
},__pm:function(X,Y){var bc=[],be=true,bb,ba;
var bd=qx.util.Json.__pq;
bc.push(E);

if(bd){qx.util.Json.__pk+=qx.util.Json.BEAUTIFYING_INDENT;
bc.push(qx.util.Json.__pk);
}
for(var Y in X){ba=X[Y];
bb=this.__pc[typeof ba];

if(bb){ba=this[bb](ba,Y);

if(typeof ba==n){if(!be){bc.push(p);

if(bd){bc.push(qx.util.Json.__pk);
}}bc.push(this.__pg(Y),F,ba);
be=false;
}}}
if(bd){qx.util.Json.__pk=qx.util.Json.__pk.substring(0,qx.util.Json.__pk.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bc.push(qx.util.Json.__pk);
}bc.push(H);
return bc.join(o);
},__pn:function(O,P){if(O){if(qx.lang.Type.isFunction(O.toJSON)&&O.toJSON!==this.__pb){return this.__pp(O.toJSON(P),P);
}else if(qx.lang.Type.isDate(O)){return this.__pl(O,P);
}else if(qx.lang.Type.isArray(O)){return this.__pj(O,P);
}else if(qx.lang.Type.isObject(O)){return this.__pm(O,P);
}return o;
}return m;
},__po:function(bx,by){if(qx.core.Setting.get(q)){return m;
}},__pp:function(Q,R){return this[this.__pc[typeof Q]](Q,R);
},stringify:function(bt,bu){this.__pq=bu;
this.__pk=this.BEAUTIFYING_LINE_END;
var bv=this.__pp(bt,o);

if(typeof bv!=n){bv=null;
}if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON request: "+bv);
}return bv;
},parse:function(bn,bo){if(bo===undefined){bo=true;
}
if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON response: "+bn);
}
if(bo){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bn.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var bp=(bn&&bn.length>0)?eval(G+bn+B):null;
return bp;
}catch(W){throw new Error("Could not evaluate JSON string: "+W.message);
}},parseQx:function(bm){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return qx.util.Json.parse(bm,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bw){bw.__pb=Date.prototype.toJSON;
}});
})();
(function(){var m="qx.debug",l="on",k="qx.ioRemoteDebugData",j="=",h="&",g="application/xml",f="application/json",d="text/html",c="qx.ioRemoteDebug",b="qx.client",K="textarea",J="none",I="text/plain",H="text/javascript",G="",F="completed",E="?",D="qx.io.remote.transport.Iframe",C="gecko",B="frame_",t="aborted",u="_data_",r="pre",s="javascript:void(0)",p="sending",q="form",n="failed",o='<iframe name="',v="mshtml",w="form_",y='"></iframe>',x="iframe",A="timeout",z="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var M=(new Date).valueOf();
var N=B+M;
var O=w+M;
if(qx.core.Variant.isSet(b,v)){this.__pW=document.createElement(o+N+y);
}else{this.__pW=document.createElement(x);
}this.__pW.src=s;
this.__pW.id=this.__pW.name=N;
this.__pW.onload=qx.lang.Function.bind(this._onload,this);
this.__pW.style.display=J;
document.body.appendChild(this.__pW);
this.__pX=document.createElement(q);
this.__pX.target=N;
this.__pX.id=this.__pX.name=O;
this.__pX.style.display=J;
document.body.appendChild(this.__pX);
this.__pY=document.createElement(K);
this.__pY.id=this.__pY.name=u;
this.__pX.appendChild(this.__pY);
this.__pW.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[I,H,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__pY:null,__qa:0,__pX:null,__pW:null,send:function(){var W=this.getMethod();
var Y=this.getUrl();
var bd=this.getParameters(false);
var bc=[];

for(var X in bd){var ba=bd[X];

if(ba instanceof Array){for(var i=0;i<ba.length;i++){bc.push(encodeURIComponent(X)+j+encodeURIComponent(ba[i]));
}}else{bc.push(encodeURIComponent(X)+j+encodeURIComponent(ba));
}}
if(bc.length>0){Y+=(Y.indexOf(E)>=0?h:E)+bc.join(h);
}if(this.getData()===null){var bd=this.getParameters(true);
var bc=[];

for(var X in bd){var ba=bd[X];

if(ba instanceof Array){for(var i=0;i<ba.length;i++){bc.push(encodeURIComponent(X)+j+encodeURIComponent(ba[i]));
}}else{bc.push(encodeURIComponent(X)+j+encodeURIComponent(ba));
}}
if(bc.length>0){this.setData(bc.join(h));
}}var V=this.getFormFields();

for(var X in V){var bb=document.createElement(K);
bb.name=X;
bb.appendChild(document.createTextNode(V[X]));
this.__pX.appendChild(bb);
}this.__pX.action=Y;
this.__pX.method=W;
this.__pY.appendChild(document.createTextNode(this.getData()));
this.__pX.submit();
this.setState(p);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__pX.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__pW.readyState]);
}),_switchReadyState:function(bh){switch(this.getState()){case F:case t:case n:case A:this.warn("Ignore Ready State Change");
return;
}while(this.__qa<bh){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qa]);
}},setRequestHeader:function(T,U){},getResponseHeader:function(P){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__pW);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__pW);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__pW);
},getIframeTextContent:function(){var Q=this.getIframeBody();

if(!Q){return null;
}
if(!Q.firstChild){return G;
}if(Q.firstChild.tagName&&Q.firstChild.tagName.toLowerCase()==r){return Q.firstChild.innerHTML;
}else{return Q.innerHTML;
}},getIframeHtmlContent:function(){var L=this.getIframeBody();
return L?L.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var R=this.getIframeTextContent();

switch(this.getResponseType()){case I:if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return R;
break;
case d:R=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return R;
break;
case f:R=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return R&&R.length>0?qx.util.Json.parse(R,false):null;
}catch(a){return this.error("Could not execute json: ("+R+")",a);
}case H:R=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return R&&R.length>0?window.eval(R):null;
}catch(S){return this.error("Could not execute javascript: ("+R+")",S);
}case g:R=this.getIframeDocument();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return R;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(be,bf,bg){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__pW){this.__pW.onload=null;
this.__pW.onreadystatechange=null;
if(qx.core.Variant.isSet(b,C)){this.__pW.src=qx.util.ResourceManager.getInstance().toUri(z);
}document.body.removeChild(this.__pW);
}
if(this.__pX){document.body.removeChild(this.__pX);
}this.__pW=this.__pX=null;
}});
})();
(function(){var v="qx.debug",u="on",t="&",s="=",r="qx.ioRemoteDebug",q="application/json",p="completed",o="text/plain",n="qx.ioRemoteDebugData",m="text/javascript",e="?",l="qx.io.remote.transport.Script",h="",c="_ScriptTransport_data",b="failed",g="script",f="timeout",j="_ScriptTransport_",a="_ScriptTransport_id",k="aborted",d="utf-8";
qx.Class.define(l,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var L=++qx.io.remote.transport.Script.__qb;

if(L>=2000000000){qx.io.remote.transport.Script.__qb=L=1;
}this.__qc=null;
this.__qb=L;
},statics:{__qb:0,_instanceRegistry:{},ScriptTransport_PREFIX:j,ScriptTransport_ID_PARAM:a,ScriptTransport_DATA_PARAM:c,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,m,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(E,content){var F=qx.io.remote.transport.Script._instanceRegistry[E];

if(F==null){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{F._responseContent=content;
F._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qd:0,__qc:null,__qb:null,send:function(){var y=this.getUrl();
y+=(y.indexOf(e)>=0?t:e)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__qb;
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
}qx.io.remote.transport.Script._instanceRegistry[this.__qb]=this;
this.__qc=document.createElement(g);
this.__qc.charset=d;
this.__qc.src=y;

if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Request: "+y);
}}document.body.appendChild(this.__qc);
},_switchReadyState:function(M){switch(this.getState()){case p:case k:case b:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__qd<M){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qd]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(K){return null;
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
}}var J=this._responseContent;
return (J===0?0:(J||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(G,H,I){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,l);
},destruct:function(){if(this.__qc){delete qx.io.remote.transport.Script._instanceRegistry[this.__qb];
document.body.removeChild(this.__qc);
}this.__qc=this._responseContent=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=arguments.callee.base.call(this,d);
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
(function(){var bm="test",bl="",bk="^",bj="demobrowser.TreeDataHandler",bi="ttree",bh="All",bg="\\.[^\\.]+$",bf=".",be="depth";
qx.Class.define(bj,{extend:qx.core.Object,construct:function(E){arguments.callee.base.call(this);
this.tmap=E;
this.ttree=this.__KF(E);
},members:{__KF:function(X){var ba=X;
function Y(k,l){var o=l.classname;
var m=o.split(".");
function n(parent,r){if(!r.length){return parent;
}else{var s=r[0];
var t=r.slice(1,r.length);
var u=null;
var v=null;
var w=parent.getChildren();

for(var i=0;i<w.length;i++){if(w[i].label==s){v=w[i];
break;
}}if(v==null){v=new demobrowser.Tree(s);
parent.add(v);
}u=n(v,t);
return u;
}}var p=n(k,m);

if(!p){throw new Error("No target to insert tests");
}bb.readTree(l,p);
}function bc(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var bd=new demobrowser.Tree("All");
var bb=this;
ba.sort(bc);

for(var i=0;i<ba.length;i++){Y(bd,ba[i]);
}return bd;
},readTree:function(F,G){var I=arguments[1]||new demobrowser.Tree(F.classname);
var G;
function H(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}F.tests.sort(H);

for(var j=0;j<F.tests.length;j++){G=new demobrowser.Tree(F.tests[j].name);
G.tags=F.tests[j].tags;
G.type=bm;
G.desc=F.tests[j].desc;
I.add(G);
}if(F.children&&F.children.length){for(var j=0;j<F.children.length;j++){I.add(this.readTree(F.children[j]));
}}return I;
},getRoot:function(){if(!this.Root){var M={classname:bl,tests:[]};
var L=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(M.classname.length>L[i].classname.length){M=L[i];
}}this.Root=M;
}return this.Root.classname;
},getChilds:function(N){var O=[];
var Q=this.tmap;
var P=bk+N+bg;
var R=new RegExp(P);

for(var i=0;i<Q.length;i++){if(Q[i].classname.match(R)){O.push(Q[i]);
}}return O;
},getTests:function(C){var D=this.tmap;

for(var i=0;i<D.length;i++){if(D[i].classname==C){return D[i].tests;
}}return [];
},getPath:function(bn){if(!bn){return bl;
}var bo=bn.pwd();
bo.shift();
if(this.isClass(bn)){bo=bo.concat(bn.label);
}return bo;
},getChildren:function(S){if(S==bh){var T=this.tmap;
var U=[];

for(var i=0;i<T.length;i++){U.push(T[i].classname);
}return U;
}else if(this.isClass(S)){return this.getTests(S);
}else{return [];
}},isClass:function(q){if(q.type&&q.type==bm){return false;
}else{return true;
}},hasTests:function(A){if(!this.isClass(A)){return false;
}else{var B=A.getChildren();

for(var i=0;i<B.length;i++){if(B[i].type&&B[i].type==bm){return true;
}}return false;
}},classFromTest:function(x){var y=bl;
var z=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==x){y=this.tmap[i].classname;
break classloop;
}}}return y;
},getFullName:function(J){if(!J){return bl;
}var K=this.getPath(J);

if(J.type&&J.type==bm){K=K.concat(J.label);
}return K.join(bf);
},getPreviousNode:function(V){var W=V.getPrevSibling();

if(W){return W;
}},getNextNode:function(g){var h=g.getNextSibling();

if(h){return h;
}},testCount:function(c){if(c.type&&c.type==bm){return 1;
}else{var d=0;
var f=c.getIterator(be);
var e;

while(e=f()){if(e.type&&e.type==bm){d++;
}}return d;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(bi);
}});
})();
(function(){var h="depth",g="",e="widgetLinkFlat",d="widgetLinkFull",c="parent",b="children",a="demobrowser.Tree";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.label=arguments[0]||g;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(v,w){var x=h;
var y=this;
var z=this.getIterator(x);

while(y=z()){v.apply(y,w);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(j){var l=[this];
var k=j==h?1:0;
function f(){var n;

if(l.length){n=l.shift();
var o=n.getChildren();

if(o.length){if(k){l=o.concat(l);
}else{l=l.concat(o);
}}}else{n=null;
}return n;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(p){var q=this.parent.getChildren();
var r=arguments.callee.self.indexOf(q,this);
var s=r+p;

if(q[s]){return q[s];
}},add:function(m){this.children.push(m);
m.parent=this;
}},statics:{indexOf:function(t,u){for(var i=0;i<t.length;i++){if(t[i]==u){return i;
}}}},destruct:function(){this._disposeObjects(d,e,c);
this._disposeArray(b);
}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function s(g){if(qx.core.Variant.isSet(b,f)){r.prototype={length:0,$$isArray:true};
var k=e.split(a);

for(var length=k.length;length;){r.prototype[k[--length]]=Array.prototype[k[length]];
}}var l=Array.prototype.slice;
r.prototype.concat=function(){var o=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var n;

if(arguments[i] instanceof r){n=l.call(arguments[i],0);
}else if(arguments[i] instanceof Array){n=arguments[i];
}else{n=[arguments[i]];
}o.push.apply(o,n);
}return o;
};
r.prototype.toString=function(){return l.call(this,0).toString();
};
r.prototype.toLocaleString=function(){return l.call(this,0).toLocaleString();
};
r.prototype.constructor=r;
r.prototype.indexOf=qx.lang.Core.arrayIndexOf;
r.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
r.prototype.forEach=qx.lang.Core.arrayForEach;
r.prototype.some=qx.lang.Core.arraySome;
r.prototype.every=qx.lang.Core.arrayEvery;
var h=qx.lang.Core.arrayFilter;
var j=qx.lang.Core.arrayMap;
r.prototype.filter=function(){var t=new this.constructor;
t.push.apply(t,h.apply(this,arguments));
return t;
};
r.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,j.apply(this,arguments));
return p;
};
r.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
r.prototype.splice=function(){var m=new this.constructor;
m.push.apply(m,Array.prototype.splice.apply(this,arguments));
return m;
};
r.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
r.prototype.valueOf=function(){return this.length;
};
return r;
}function r(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function q(){}q.prototype=[];
r.prototype=new q;
r.prototype.length=0;
qx.type.BaseArray=s(r);
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
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(l){return qx.bom.String.escape(l).replace(/(  |\n)/g,function(j){var k={"  ":e,"\n":d};
return k[j]||j;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(q){if(q.indexOf(f)===0){return b;
}else if(q.length>0&&q.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(n,o,p){n.FROM_CHARCODE=qx.lang.Object.invert(n.TO_CHARCODE);
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
(function(){var t="qx.debug",s="_applyStyle",r="on",q="",p="Color",o="px",n="solid",m="dotted",l="double",k="dashed",f="_applyWidth",j="qx.ui.decoration.Uniform",i="px ",e=" ",d="scale",h="PositiveInteger",g="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(E,F,G){arguments.callee.base.call(this);
if(E!=null){this.setWidth(E);
}
if(F!=null){this.setStyle(F);
}
if(G!=null){this.setColor(G);
}},properties:{width:{check:h,init:0,apply:f},style:{nullable:true,check:[n,m,k,l],init:n,apply:s},color:{nullable:true,check:p,apply:s},backgroundColor:{check:p,nullable:true,apply:s}},members:{__rF:null,_getDefaultInsets:function(){var D=this.getWidth();
return {top:D,right:D,bottom:D,left:D};
},_isInitialized:function(){return !!this.__rF;
},getMarkup:function(){if(this.__rF){return this.__rF;
}var z={position:g,top:0,left:0};
var A=this.getWidth();

if(qx.core.Variant.isSet(t,r)){if(A===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var C=qx.theme.manager.Color.getInstance();
z.border=A+i+this.getStyle()+e+(C.resolve(this.getColor())||q);
var B=this._generateBackgroundMarkup(z);
return this.__rF=B;
},resize:function(u,v,w){var y=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(y||qx.bom.client.Feature.CONTENT_BOX){var x=this.getWidth()*2;
v-=x;
w-=x;
if(v<0){v=0;
}
if(w<0){w=0;
}}u.style.width=v+o;
u.style.height=w+o;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||q;
},_applyWidth:function(){if(qx.core.Variant.isSet(t,r)){if(this.__rF){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(t,r)){if(this.__rF){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__rF=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(N,O,P){arguments.callee.base.call(this);
if(N!=null){this.setWidth(N);
}
if(O!=null){this.setStyle(O);
}
if(P!=null){this.setColor(P);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__rH:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__rH;
},getMarkup:function(I){if(this.__rH){return this.__rH;
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
return this.__rH=L;
},resize:function(T,U,V){var X=this.getBackgroundImage()&&this.getBackgroundRepeat()==l;

if(X||qx.bom.client.Feature.CONTENT_BOX){var W=this.getInsets();
U-=W.left+W.right;
V-=W.top+W.bottom;
if(U<0){U=0;
}
if(V<0){V=0;
}}T.style.width=U+D;
T.style.height=V+D;
},tint:function(Q,R){var S=qx.theme.manager.Color.getInstance();

if(R==null){R=this.getBackgroundColor();
}Q.style.backgroundColor=S.resolve(R)||g;
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__rH){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__rH){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__rH=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="scale-x",e="scale-y",d="-tr",c="-l",b='</div>',a="scale",z="qx.client",y="-br",x="-t",w="-tl",v="-r",u='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',t="qx.debug",s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="-c",n="mshtml",k="on",l="qx.ui.decoration.Grid";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,construct:function(I,J){arguments.callee.base.call(this);
if(I!=null){this.setBaseImage(I);
}
if(J!=null){this.setInsets(J);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__rI:null,__rJ:null,__rK:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rI;
},getMarkup:function(){if(this.__rI){return this.__rI;
}var A=qx.bom.element.Decoration;
var B=this.__rJ;
var C=this.__rK;
var D=[];
D.push(u);
D.push(A.create(B.tl,g,{top:0,left:0}));
D.push(A.create(B.t,f,{top:0,left:C.left+j}));
D.push(A.create(B.tr,g,{top:0,right:0}));
D.push(A.create(B.bl,g,{bottom:0,left:0}));
D.push(A.create(B.b,f,{bottom:0,left:C.left+j}));
D.push(A.create(B.br,g,{bottom:0,right:0}));
D.push(A.create(B.l,e,{top:C.top+j,left:0}));
D.push(A.create(B.c,a,{top:C.top+j,left:C.left+j}));
D.push(A.create(B.r,e,{top:C.top+j,right:0}));
D.push(b);
return this.__rI=D.join(o);
},resize:function(R,S,T){var U=this.__rK;
var innerWidth=S-U.left-U.right;
var innerHeight=T-U.top-U.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}R.style.width=S+j;
R.style.height=T+j;
R.childNodes[1].style.width=innerWidth+j;
R.childNodes[4].style.width=innerWidth+j;
R.childNodes[7].style.width=innerWidth+j;
R.childNodes[6].style.height=innerHeight+j;
R.childNodes[7].style.height=innerHeight+j;
R.childNodes[8].style.height=innerHeight+j;

if(qx.core.Variant.isSet(z,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(S%2==1){R.childNodes[2].style.marginRight=h;
R.childNodes[5].style.marginRight=h;
R.childNodes[8].style.marginRight=h;
}else{R.childNodes[2].style.marginRight=i;
R.childNodes[5].style.marginRight=i;
R.childNodes[8].style.marginRight=i;
}
if(T%2==1){R.childNodes[3].style.marginBottom=h;
R.childNodes[4].style.marginBottom=h;
R.childNodes[5].style.marginBottom=h;
}else{R.childNodes[3].style.marginBottom=i;
R.childNodes[4].style.marginBottom=i;
R.childNodes[5].style.marginBottom=i;
}}}},tint:function(E,F){},_applyBaseImage:function(K,L){if(qx.core.Variant.isSet(t,k)){if(this.__rI){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(K){var P=this._resolveImageUrl(K);
var Q=/(.*)(\.[a-z]+)$/.exec(P);
var O=Q[1];
var N=Q[2];
var M=this.__rJ={tl:O+w+N,t:O+x+N,tr:O+d+N,bl:O+p+N,b:O+r+N,br:O+y+N,l:O+c+N,c:O+m+N,r:O+v+N};
this.__rK=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(V){return qx.util.AliasManager.getInstance().resolve(V);
},_computeEdgeSizes:function(G){var H=qx.util.ResourceManager.getInstance();
return {top:H.getImageHeight(G.t),bottom:H.getImageHeight(G.b),left:H.getImageWidth(G.l),right:H.getImageWidth(G.r)};
}},destruct:function(){this.__rI=this.__rJ=this.__rK=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",x='</div>',w="qx.ui.decoration.Beveled",v="qx.debug",u='<div style="position:absolute;top:1px;left:1px;',t='border-bottom:',s='border-right:',r='border-left:',q='border-top:',p="Number",o='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',n='<div style="overflow:hidden;font-size:0;line-height:0;">',k="on",l="absolute";
qx.Class.define(w,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(y,z,A){arguments.callee.base.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:p,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__rL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__rL;
},_applyStyle:function(){if(qx.core.Variant.isSet(v,k)){if(this.__rL){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__rL){return this.__rL;
}var P=qx.theme.manager.Color.getInstance();
var Q=[];
var T=d+P.resolve(this.getOuterColor())+b;
var S=d+P.resolve(this.getInnerColor())+b;
Q.push(n);
Q.push(f);
Q.push(e,T);
Q.push(qx.bom.element.Opacity.compile(0.35));
Q.push(i);
Q.push(o);
Q.push(r,T);
Q.push(s,T);
Q.push(i);
Q.push(f);
Q.push(m);
Q.push(q,T);
Q.push(t,T);
Q.push(i);
var R={position:l,top:g,left:g};
Q.push(this._generateBackgroundMarkup(R));
Q.push(u);
Q.push(e,S);
Q.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
Q.push(i);
Q.push(x);
return this.__rL=Q.join(c);
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
},tint:function(M,N){var O=qx.theme.manager.Color.getInstance();

if(N==null){N=this.getBackgroundColor();
}M.childNodes[3].style.backgroundColor=O.resolve(N)||c;
}},destruct:function(){this.__rL=null;
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
(function(){var gi="button-frame",gh="atom",gg="widget",gf="main",ge="button",gd="text-selected",gc="image",gb="bold",ga="middle",fY="background-light",eM="text-disabled",eL="groupbox",eK="decoration/arrows/down.png",eJ="cell",eI="selected",eH="border-invalid",eG="input",eF="input-disabled",eE="menu-button",eD="input-focused-invalid",gp="toolbar-button",gq="spinner",gn="input-focused",go="popup",gl="tooltip",gm="list",gj="tree-item",gk="treevirtual-contract",gr="scrollbar",gs="datechooser/nav-button",fH="text-hovered",fG="center",fJ="treevirtual-expand",fI="textfield",fL="label",fK="decoration/arrows/right.png",fN="background-application",fM="radiobutton",fF="white",fE="invalid",cI="combobox",cJ="right-top",cK="checkbox",cL="text-title",cM="qx/static/blank.gif",cN="scrollbar/button",cO="right",cP="combobox/button",cQ="icon/16/places/folder.png",cR="text-label",gG="decoration/tree/closed.png",gF="scrollbar-slider-horizontal",gE="decoration/arrows/left.png",gD="button-focused",gK="text-light",gJ="menu-slidebar-button",gI="text-input",gH="slidebar/button-forward",gM="background-splitpane",gL=".png",dL="decoration/tree/open.png",dM="default",dJ="decoration/arrows/down-small.png",dK="datechooser",dP="slidebar/button-backward",dQ="selectbox",dN="treevirtual-folder",dO="shadow-popup",dH="icon/16/mimetypes/office-document.png",dI="background-medium",dm="table",dl="decoration/arrows/up.png",dp="decoration/form/",dn="",di="-invalid",dh="icon/16/places/folder-open.png",dk="button-checked",dj="decoration/window/maximize-active-hovered.png",dg="radiobutton-hovered",df="decoration/cursors/",dW="slidebar",dX="tooltip-error-arrow",dY="table-scroller-focus-indicator",ea="move-frame",dS="nodrop",dT="decoration/table/boolean-true.png",dU="table-header-cell",dV="menu",eb="app-header",ec="row-layer",dA="text-inactive",dz="move",dy="radiobutton-checked-focused",dx="decoration/window/restore-active-hovered.png",dw="shadow-window",dv="table-column-button",du="right.png",dt="tabview-page-button-bottom-inactive",dE="tooltip-error",dD="window-statusbar",ed="button-hovered",ee="decoration/scrollbar/scrollbar-",ef="background-tip",eg="scrollbar-slider-horizontal-disabled",eh="table-scroller-header",ei="button-pressed",ej="table-pane",ek="decoration/window/close-active.png",el="native",em="checkbox-hovered",eU="button-invalid-shadow",eT="checkbox-checked",eS="decoration/window/minimize-active-hovered.png",eR="menubar",eY="icon/16/actions/dialog-cancel.png",eX="tabview-page-button-top-inactive",eW="tabview-page-button-left-inactive",eV="menu-slidebar",fd="toolbar-button-checked",fc="decoration/tree/open-selected.png",fA="radiobutton-checked",fB="decoration/window/minimize-inactive.png",fy="icon/16/apps/office-calendar.png",fz="group",fw="tabview-page-button-right-inactive",fx="decoration/window/minimize-active.png",fu="decoration/window/restore-inactive.png",fv="checkbox-checked-focused",fC="splitpane",fD="combobox/textfield",fR="button-preselected-focused",fQ="decoration/window/close-active-hovered.png",fT="qx/icon/Tango/16/actions/window-close.png",fS="checkbox-pressed",fV="button-disabled",fU="selected-dragover",fX="border-separator",fW="decoration/window/maximize-inactive.png",fP="dragover",fO="scrollarea",gz="scrollbar-vertical",gA="decoration/menu/checkbox-invert.gif",gB="decoration/toolbar/toolbar-handle-knob.gif",gC="icon/22/mimetypes/office-document.png",gv="button-preselected",gw="button-checked-focused",gx="up.png",gy="best-fit",gt="decoration/tree/closed-selected.png",gu="qx.theme.modern.Appearance",cH="text-active",cG="toolbar-button-hovered",cF="progressive-table-header",cE="decoration/table/select-column-order.png",cD="decoration/menu/radiobutton.gif",cC="decoration/arrows/forward.png",cB="decoration/table/descending.png",cA="window-captionbar-active",cz="checkbox-checked-hovered",cy="scrollbar-slider-vertical",cU="toolbar",cV="alias",cS="decoration/window/restore-active.png",cT="decoration/table/boolean-false.png",cY="checkbox-checked-disabled",da="icon/32/mimetypes/office-document.png",cW="radiobutton-checked-disabled",cX="tabview-pane",dc="decoration/arrows/rewind.png",dd="checkbox-focused",fh="top",fb="#EEE",fo="icon/16/actions/dialog-ok.png",fk="radiobutton-checked-hovered",eP="table-header-cell-hovered",eN="window",dr="text-gray",eQ="decoration/menu/radiobutton-invert.gif",dC="text-placeholder",dB="slider",ev="keep-align",ew="down.png",ex="tabview-page-button-top-active",ey="icon/32/places/folder-open.png",ez="icon/22/places/folder.png",eA="decoration/window/maximize-active.png",eB="checkbox-checked-pressed",eC="decoration/window/close-inactive.png",et="tabview-page-button-left-active",eu="toolbar-part",eO="decoration/splitpane/knob-vertical.png",fn=".gif",fm="icon/22/places/folder-open.png",fl="radiobutton-checked-pressed",fs="table-statusbar",fr="radiobutton-pressed",fq="window-captionbar-inactive",fp="copy",fj="radiobutton-focused",fi="decoration/arrows/down-invert.png",db="decoration/menu/checkbox.gif",dG="decoration/splitpane/knob-horizontal.png",dF="icon/32/places/folder.png",fa="toolbar-separator",dR="tabview-page-button-bottom-active",fg="decoration/arrows/up-small.png",ff="decoration/table/ascending.png",fe="decoration/arrows/up-invert.png",dq="small",ft="tabview-page-button-right-active",de="-disabled",ds="scrollbar-horizontal",en="progressive-table-header-cell",eo="menu-separator",ep="pane",eq="decoration/arrows/right-invert.png",er="left.png",es="icon/16/actions/view-refresh.png";
qx.Theme.define(gu,{appearances:{"widget":{},"root":{style:function(cj){return {backgroundColor:fN,textColor:cR,font:dM};
}},"label":{style:function(cf){return {textColor:cf.disabled?eM:undefined};
}},"move-frame":{style:function(gR){return {decorator:gf};
}},"resize-frame":ea,"dragdrop-cursor":{style:function(cb){var cc=dS;

if(cb.copy){cc=fp;
}else if(cb.move){cc=dz;
}else if(cb.alias){cc=cV;
}return {source:df+cc+fn,position:cJ,offset:[2,16,2,6]};
}},"image":{style:function(bC){return {opacity:!bC.replacement&&bC.disabled?0.3:1};
}},"atom":{},"atom/label":fL,"atom/icon":gc,"popup":{style:function(cg){return {decorator:gf,backgroundColor:fY,shadow:dO};
}},"button-frame":{alias:gh,style:function(ct){var cv,cu;

if(ct.checked&&ct.focused&&!ct.inner){cv=gw;
cu=undefined;
}else if(ct.disabled){cv=fV;
cu=undefined;
}else if(ct.pressed){cv=ei;
cu=fH;
}else if(ct.checked){cv=dk;
cu=undefined;
}else if(ct.hovered){cv=ed;
cu=fH;
}else if(ct.preselected&&ct.focused&&!ct.inner){cv=fR;
cu=fH;
}else if(ct.preselected){cv=gv;
cu=fH;
}else if(ct.focused&&!ct.inner){cv=gD;
cu=undefined;
}else{cv=ge;
cu=undefined;
}return {decorator:cv,textColor:cu,shadow:ct.invalid&&!ct.disabled?eU:undefined};
}},"button-frame/image":{style:function(ic){return {opacity:!ic.replacement&&ic.disabled?0.5:1};
}},"button":{alias:gi,include:gi,style:function(bS){return {padding:[2,8],center:true};
}},"hover-button":{alias:gh,include:gh,style:function(cs){return {decorator:cs.hovered?eI:undefined,textColor:cs.hovered?gd:undefined};
}},"splitbutton":{},"splitbutton/button":ge,"splitbutton/arrow":{alias:ge,include:ge,style:function(ca){return {icon:eK,padding:2,marginLeft:1};
}},"checkbox":{alias:gh,style:function(k){var m;

if(k.checked&&k.focused){m=fv;
}else if(k.checked&&k.disabled){m=cY;
}else if(k.checked&&k.pressed){m=eB;
}else if(k.checked&&k.hovered){m=cz;
}else if(k.checked){m=eT;
}else if(k.focused){m=dd;
}else if(k.pressed){m=fS;
}else if(k.hovered){m=em;
}else{m=cK;
}var l=k.invalid&&!k.disabled?di:dn;
return {icon:dp+m+l+gL,gap:6};
}},"radiobutton":{alias:gh,style:function(bP){var bR;

if(bP.checked&&bP.focused){bR=dy;
}else if(bP.checked&&bP.disabled){bR=cW;
}else if(bP.checked&&bP.pressed){bR=fl;
}else if(bP.checked&&bP.hovered){bR=fk;
}else if(bP.checked){bR=fA;
}else if(bP.focused){bR=fj;
}else if(bP.pressed){bR=fr;
}else if(bP.hovered){bR=dg;
}else{bR=fM;
}var bQ=bP.invalid&&!bP.disabled?di:dn;
return {icon:dp+bR+bQ+gL,gap:6};
}},"textfield":{style:function(hs){var hx;
var hv=!!hs.focused;
var hw=!!hs.invalid;
var ht=!!hs.disabled;

if(hv&&hw&&!ht){hx=eD;
}else if(hv&&!hw&&!ht){hx=gn;
}else if(ht){hx=eF;
}else if(!hv&&hw&&!ht){hx=eH;
}else{hx=eG;
}var hu;

if(hs.disabled){hu=eM;
}else if(hs.showingPlaceholder){hu=dC;
}else{hu=gI;
}return {decorator:hx,padding:[2,4,1],textColor:hu};
}},"textarea":{include:fI,style:function(bA){return {padding:4};
}},"spinner":{style:function(hy){var hC;
var hA=!!hy.focused;
var hB=!!hy.invalid;
var hz=!!hy.disabled;

if(hA&&hB&&!hz){hC=eD;
}else if(hA&&!hB&&!hz){hC=gn;
}else if(hz){hC=eF;
}else if(!hA&&hB&&!hz){hC=eH;
}else{hC=eG;
}return {decorator:hC};
}},"spinner/textfield":{style:function(ib){return {marginRight:2,padding:[2,4,1],textColor:ib.disabled?eM:gI};
}},"spinner/upbutton":{alias:gi,include:gi,style:function(bX){return {icon:fg,padding:bX.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gi,include:gi,style:function(gN){return {icon:dJ,padding:gN.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cI,"datefield/button":{alias:cP,include:cP,style:function(cq){return {icon:fy,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fD,"datefield/list":{alias:dK,include:dK,style:function(f){return {decorator:undefined};
}},"groupbox":{style:function(bB){return {legendPosition:fh};
}},"groupbox/legend":{alias:gh,style:function(bW){return {padding:[1,0,1,4],textColor:bW.invalid?fE:cL,font:gb};
}},"groupbox/frame":{style:function(cp){return {padding:12,decorator:fz};
}},"check-groupbox":eL,"check-groupbox/legend":{alias:cK,include:cK,style:function(d){return {padding:[1,0,1,4],textColor:d.invalid?fE:cL,font:gb};
}},"radio-groupbox":eL,"radio-groupbox/legend":{alias:fM,include:fM,style:function(p){return {padding:[1,0,1,4],textColor:p.invalid?fE:cL,font:gb};
}},"scrollarea":{style:function(bY){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bp){return {backgroundColor:fN};
}},"scrollarea/pane":gg,"scrollarea/scrollbar-x":gr,"scrollarea/scrollbar-y":gr,"scrollbar":{style:function(gU){if(gU[el]){return {};
}return {width:gU.horizontal?undefined:16,height:gU.horizontal?16:undefined,decorator:gU.horizontal?ds:gz,padding:1};
}},"scrollbar/slider":{alias:dB,style:function(be){return {padding:be.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gi,style:function(hp){var hq=hp.horizontal?gF:cy;

if(hp.disabled){hq+=de;
}return {decorator:hq,minHeight:hp.horizontal?undefined:9,minWidth:hp.horizontal?9:undefined};
}},"scrollbar/button":{alias:gi,include:gi,style:function(bJ){var bK=ee;

if(bJ.left){bK+=er;
}else if(bJ.right){bK+=du;
}else if(bJ.up){bK+=gx;
}else{bK+=ew;
}
if(bJ.left||bJ.right){return {padding:[0,0,0,bJ.left?3:4],icon:bK,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bK,width:14,height:15};
}}},"scrollbar/button-begin":cN,"scrollbar/button-end":cN,"slider":{style:function(hg){var hk;
var hi=!!hg.focused;
var hj=!!hg.invalid;
var hh=!!hg.disabled;

if(hi&&hj&&!hh){hk=eD;
}else if(hi&&!hj&&!hh){hk=gn;
}else if(hh){hk=eF;
}else if(!hi&&hj&&!hh){hk=eH;
}else{hk=eG;
}return {decorator:hk};
}},"slider/knob":{include:gi,style:function(bc){return {decorator:bc.disabled?eg:gF,shadow:undefined,height:14,width:14};
}},"list":{alias:fO,style:function(V){var ba;
var X=!!V.focused;
var Y=!!V.invalid;
var W=!!V.disabled;

if(X&&Y&&!W){ba=eD;
}else if(X&&!Y&&!W){ba=gn;
}else if(W){ba=eF;
}else if(!X&&Y&&!W){ba=eH;
}else{ba=eG;
}return {backgroundColor:fY,decorator:ba};
}},"list/pane":gg,"listitem":{alias:gh,style:function(bu){var bv;

if(bu.dragover){bv=bu.selected?fU:fP;
}else{bv=bu.selected?eI:undefined;
}return {padding:bu.dragover?[4,4,2,4]:4,textColor:bu.selected?gd:undefined,decorator:bv};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gi,include:gi,style:function(N){return {padding:5,center:true,icon:N.vertical?eK:fK};
}},"slidebar/button-backward":{alias:gi,include:gi,style:function(hN){return {padding:5,center:true,icon:hN.vertical?dl:gE};
}},"tabview":{style:function(he){return {contentPadding:16};
}},"tabview/bar":{alias:dW,style:function(hH){var hI={marginBottom:hH.barTop?-1:0,marginTop:hH.barBottom?-4:0,marginLeft:hH.barRight?-3:0,marginRight:hH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hH.barTop||hH.barBottom){hI.paddingLeft=5;
hI.paddingRight=7;
}else{hI.paddingTop=5;
hI.paddingBottom=7;
}return hI;
}},"tabview/bar/button-forward":{include:gH,alias:gH,style:function(cl){if(cl.barTop||cl.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dP,alias:dP,style:function(r){if(r.barTop||r.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bN){return {decorator:cX,minHeight:100,marginBottom:bN.barBottom?-1:0,marginTop:bN.barTop?-1:0,marginLeft:bN.barLeft?-1:0,marginRight:bN.barRight?-1:0};
}},"tabview-page":gg,"tabview-page/button":{alias:gh,style:function(G){var M,I=0;
var L=0,H=0,J=0,K=0;

if(G.checked){if(G.barTop){M=ex;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barBottom){M=dR;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barRight){M=ft;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}else{M=et;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}}else{if(G.barTop){M=eX;
I=[4,10];
L=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barBottom){M=dt;
I=[4,10];
H=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barRight){M=fw;
I=[4,10];
K=5;
L=G.firstTab?5:1;
H=1;
J=1;
}else{M=eW;
I=[4,10];
J=5;
L=G.firstTab?5:1;
H=1;
K=1;
}}return {zIndex:G.checked?10:5,decorator:M,padding:I,marginTop:L,marginBottom:H,marginLeft:J,marginRight:K,textColor:G.checked?cH:dA};
}},"tabview-page/button/close-button":{alias:gh,style:function(hl){return {icon:fT};
}},"toolbar":{style:function(s){return {decorator:cU,spacing:2};
}},"toolbar/part":{style:function(S){return {decorator:eu,spacing:2};
}},"toolbar/part/container":{style:function(cw){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bz){return {source:gB,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gh,style:function(bL){return {marginTop:2,marginBottom:2,padding:(bL.pressed||bL.checked||bL.hovered)&&!bL.disabled||(bL.disabled&&bL.checked)?3:5,decorator:bL.pressed||(bL.checked&&!bL.hovered)||(bL.checked&&bL.disabled)?fd:bL.hovered&&!bL.disabled?cG:undefined};
}},"toolbar-menubutton":{alias:gp,include:gp,style:function(bl){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gc,include:gc,style:function(t){return {source:dJ};
}},"toolbar-splitbutton":{style:function(c){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gp,include:gp,style:function(gX){return {icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gp,include:gp,style:function(hr){return {padding:hr.pressed||hr.checked?1:hr.hovered?1:3,icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(g){return {decorator:fa,margin:7};
}},"tree":gm,"tree-item":{style:function(hM){return {padding:[2,6],textColor:hM.selected?gd:undefined,decorator:hM.selected?eI:undefined};
}},"tree-item/icon":{include:gc,style:function(hD){return {paddingRight:5};
}},"tree-item/label":fL,"tree-item/open":{include:gc,style:function(hY){var ia;

if(hY.selected&&hY.opened){ia=fc;
}else if(hY.selected&&!hY.opened){ia=gt;
}else if(hY.opened){ia=dL;
}else{ia=gG;
}return {padding:[0,5,0,2],source:ia};
}},"tree-folder":{include:gj,alias:gj,style:function(Q){var R;

if(Q.small){R=Q.opened?dh:cQ;
}else if(Q.large){R=Q.opened?ey:dF;
}else{R=Q.opened?fm:ez;
}return {icon:R};
}},"tree-file":{include:gj,alias:gj,style:function(bG){return {icon:bG.small?dH:bG.large?da:gC};
}},"treevirtual":dm,"treevirtual-folder":{style:function(hn){return {icon:hn.opened?dh:cQ};
}},"treevirtual-file":{include:dN,alias:dN,style:function(hQ){return {icon:dH};
}},"treevirtual-line":{style:function(gT){return {icon:cM};
}},"treevirtual-contract":{style:function(b){return {icon:dL,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bM){return {icon:gG,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gk,"treevirtual-only-expand":fJ,"treevirtual-start-contract":gk,"treevirtual-start-expand":fJ,"treevirtual-end-contract":gk,"treevirtual-end-expand":fJ,"treevirtual-cross-contract":gk,"treevirtual-cross-expand":fJ,"treevirtual-end":{style:function(gW){return {icon:cM};
}},"treevirtual-cross":{style:function(hL){return {icon:cM};
}},"tooltip":{include:go,style:function(bo){return {backgroundColor:ef,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gh,"tooltip-error":{include:gl,style:function(bV){return {textColor:gd,placeMethod:gg,offset:[0,0,0,14],marginTop:-2,position:cJ,showTimeout:100,hideTimeout:10000,decorator:dE,shadow:dX,font:gb};
}},"tooltip-error/atom":gh,"window":{style:function(bI){return {shadow:dw,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bF){return {decorator:eN};
}},"window/captionbar":{style:function(gV){return {decorator:gV.active?cA:fq,textColor:gV.active?fF:dr,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(ce){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bk){return {alignY:ga,font:gb,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gh,style:function(C){return {icon:C.active?C.hovered?eS:fx:fB,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gh,style:function(bb){return {icon:bb.active?bb.hovered?dx:cS:fu,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gh,style:function(bU){return {icon:bU.active?bU.hovered?dj:eA:fW,margin:[4,8,2,0]};
}},"window/close-button":{alias:gh,style:function(bn){return {icon:bn.active?bn.hovered?fQ:ek:eC,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(F){return {padding:[2,6],decorator:dD,minHeight:18};
}},"window/statusbar-text":{style:function(bd){return {font:dq};
}},"iframe":{style:function(gY){return {decorator:gf};
}},"resizer":{style:function(z){return {decorator:ep};
}},"splitpane":{style:function(hE){return {decorator:fC};
}},"splitpane/splitter":{style:function(gO){return {width:gO.horizontal?3:undefined,height:gO.vertical?3:undefined,backgroundColor:gM};
}},"splitpane/splitter/knob":{style:function(q){return {source:q.horizontal?dG:eO};
}},"splitpane/slider":{style:function(bj){return {width:bj.horizontal?3:undefined,height:bj.vertical?3:undefined,backgroundColor:gM};
}},"selectbox":{alias:gi,include:gi,style:function(hf){return {padding:[2,8]};
}},"selectbox/atom":gh,"selectbox/popup":go,"selectbox/list":{alias:gm},"selectbox/arrow":{include:gc,style:function(bf){return {source:eK,paddingLeft:5};
}},"datechooser":{style:function(hT){var hX;
var hV=!!hT.focused;
var hW=!!hT.invalid;
var hU=!!hT.disabled;

if(hV&&hW&&!hU){hX=eD;
}else if(hV&&!hW&&!hU){hX=gn;
}else if(hU){hX=eF;
}else if(!hV&&hW&&!hU){hX=eH;
}else{hX=eG;
}return {padding:2,decorator:hX,backgroundColor:fY};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gi,alias:gi,style:function(O){var P={padding:[2,4],shadow:undefined};

if(O.lastYear){P.icon=dc;
P.marginRight=1;
}else if(O.lastMonth){P.icon=gE;
}else if(O.nextYear){P.icon=cC;
P.marginLeft=1;
}else if(O.nextMonth){P.icon=fK;
}return P;
}},"datechooser/last-year-button-tooltip":gl,"datechooser/last-month-button-tooltip":gl,"datechooser/next-year-button-tooltip":gl,"datechooser/next-month-button-tooltip":gl,"datechooser/last-year-button":gs,"datechooser/last-month-button":gs,"datechooser/next-month-button":gs,"datechooser/next-year-button":gs,"datechooser/month-year-label":{style:function(i){return {font:gb,textAlign:fG,textColor:i.disabled?eM:undefined};
}},"datechooser/date-pane":{style:function(hb){return {textColor:hb.disabled?eM:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(bt){return {textColor:bt.disabled?eM:bt.weekend?gK:undefined,textAlign:fG,paddingTop:2,backgroundColor:dI};
}},"datechooser/week":{style:function(hK){return {textAlign:fG,padding:[2,4],backgroundColor:dI};
}},"datechooser/day":{style:function(by){return {textAlign:fG,decorator:by.disabled?undefined:by.selected?eI:undefined,textColor:by.disabled?eM:by.selected?gd:by.otherMonth?gK:undefined,font:by.today?gb:undefined,padding:[2,4]};
}},"combobox":{style:function(u){var y;
var w=!!u.focused;
var x=!!u.invalid;
var v=!!u.disabled;

if(w&&x&&!v){y=eD;
}else if(w&&!x&&!v){y=gn;
}else if(v){y=eF;
}else if(!w&&x&&!v){y=eH;
}else{y=eG;
}return {decorator:y};
}},"combobox/popup":go,"combobox/list":{alias:gm},"combobox/button":{include:gi,alias:gi,style:function(bw){var bx={icon:eK,padding:2};

if(bw.selected){bx.decorator=gD;
}return bx;
}},"combobox/textfield":{include:fI,style:function(a){return {decorator:undefined};
}},"menu":{style:function(br){var bs={decorator:dV,shadow:dO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:br.submenu||br.contextmenu?gy:ev};

if(br.submenu){bs.position=cJ;
bs.offset=[-2,-3];
}return bs;
}},"menu/slidebar":eV,"menu-slidebar":gg,"menu-slidebar-button":{style:function(hP){return {decorator:hP.hovered?eI:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gJ,style:function(D){return {icon:D.hovered?fe:dl};
}},"menu-slidebar/button-forward":{include:gJ,style:function(T){return {icon:T.hovered?fi:eK};
}},"menu-separator":{style:function(hF){return {height:0,decorator:eo,margin:[4,2]};
}},"menu-button":{alias:gh,style:function(B){return {decorator:B.selected?eI:undefined,textColor:B.selected?gd:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gc,style:function(cn){return {alignY:ga};
}},"menu-button/label":{include:fL,style:function(ch){return {alignY:ga,padding:1};
}},"menu-button/shortcut":{include:fL,style:function(gP){return {alignY:ga,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gc,style:function(ck){return {source:ck.selected?eq:fK,alignY:ga};
}},"menu-checkbox":{alias:eE,include:eE,style:function(gQ){return {icon:!gQ.checked?undefined:gQ.selected?gA:db};
}},"menu-radiobutton":{alias:eE,include:eE,style:function(o){return {icon:!o.checked?undefined:o.selected?eQ:cD};
}},"menubar":{style:function(bD){return {decorator:eR};
}},"menubar-button":{alias:gh,style:function(hO){return {decorator:hO.pressed||hO.hovered?eI:undefined,textColor:hO.pressed||hO.hovered?gd:undefined,padding:[3,8]};
}},"colorselector":gg,"colorselector/control-bar":gg,"colorselector/control-pane":gg,"colorselector/visual-pane":eL,"colorselector/preset-grid":gg,"colorselector/colorbucket":{style:function(hG){return {decorator:gf,width:16,height:16};
}},"colorselector/preset-field-set":eL,"colorselector/input-field-set":eL,"colorselector/preview-field-set":eL,"colorselector/hex-field-composite":gg,"colorselector/hex-field":fI,"colorselector/rgb-spinner-composite":gg,"colorselector/rgb-spinner-red":gq,"colorselector/rgb-spinner-green":gq,"colorselector/rgb-spinner-blue":gq,"colorselector/hsb-spinner-composite":gg,"colorselector/hsb-spinner-hue":gq,"colorselector/hsb-spinner-saturation":gq,"colorselector/hsb-spinner-brightness":gq,"colorselector/preview-content-old":{style:function(bm){return {decorator:gf,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hd){return {decorator:gf,backgroundColor:fY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cr){return {decorator:gf,margin:5};
}},"colorselector/brightness-field":{style:function(E){return {decorator:gf,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gg,"colorselector/hue-saturation-handle":gg,"colorselector/brightness-pane":gg,"colorselector/brightness-handle":gg,"colorpopup":{alias:go,include:go,style:function(bh){return {padding:5,backgroundColor:fN};
}},"colorpopup/field":{style:function(id){return {decorator:gf,margin:2,width:14,height:14,backgroundColor:fY};
}},"colorpopup/selector-button":ge,"colorpopup/auto-button":ge,"colorpopup/preview-pane":eL,"colorpopup/current-preview":{style:function(bO){return {height:20,padding:4,marginLeft:4,decorator:gf,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(ci){return {height:20,padding:4,marginRight:4,decorator:gf,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ge,include:ge,style:function(hS){return {icon:fo};
}},"colorpopup/colorselector-cancelbutton":{alias:ge,include:ge,style:function(hJ){return {icon:eY};
}},"table":{alias:gg,style:function(bE){return {decorator:dm};
}},"table-header":{},"table/statusbar":{style:function(U){return {decorator:fs,padding:[0,2]};
}},"table/column-button":{alias:gi,style:function(e){return {decorator:dv,padding:3,icon:cE};
}},"table-column-reset-button":{include:eE,alias:eE,style:function(){return {icon:es};
}},"table-scroller":gg,"table-scroller/scrollbar-x":gr,"table-scroller/scrollbar-y":gr,"table-scroller/header":{style:function(j){return {decorator:eh};
}},"table-scroller/pane":{style:function(cm){return {backgroundColor:ej};
}},"table-scroller/focus-indicator":{style:function(bT){return {decorator:dY};
}},"table-scroller/resize-line":{style:function(h){return {backgroundColor:fX,width:2};
}},"table-header-cell":{alias:gh,style:function(cx){return {minWidth:13,minHeight:20,padding:cx.hovered?[3,4,2,4]:[3,4],decorator:cx.hovered?eP:dU,sortIcon:cx.sorted?(cx.sortedAscending?ff:cB):undefined};
}},"table-header-cell/label":{style:function(bi){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hc){return {alignY:ga,alignX:cO};
}},"table-header-cell/icon":{style:function(bg){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-editor-textfield":{include:fI,style:function(cd){return {decorator:undefined,padding:[2,2],backgroundColor:fY};
}},"table-editor-selectbox":{include:dQ,alias:dQ,style:function(bq){return {padding:[0,2],backgroundColor:fY};
}},"table-editor-combobox":{include:cI,alias:cI,style:function(bH){return {decorator:undefined,backgroundColor:fY};
}},"progressive-table-header":{alias:gg,style:function(hm){return {decorator:cF};
}},"progressive-table-header-cell":{alias:gh,style:function(ha){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:en};
}},"app-header":{style:function(hR){return {font:gb,textColor:gd,padding:[8,12],decorator:eb};
}},"virtual-list":gm,"virtual-list/row-layer":ec,"row-layer":{style:function(gS){return {colorEven:fF,colorOdd:fb};
}},"column-layer":gg,"cell":{style:function(n){return {textColor:n.selected?gd:cR,padding:[3,6],font:dM};
}},"cell-string":eJ,"cell-number":{include:eJ,style:function(ho){return {textAlign:cO};
}},"cell-image":eJ,"cell-boolean":{include:eJ,style:function(A){return {iconTrue:dT,iconFalse:cT};
}},"cell-atom":eJ,"cell-date":eJ,"cell-html":eJ,"htmlarea":{"include":gg,style:function(co){return {backgroundColor:fF};
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

