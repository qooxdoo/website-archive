(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.1"}};
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
  packageHashes : {"0":"8c85a0f2ed89"},
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

qx.$$packageData['8c85a0f2ed89']={"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"}};
(function(){var z="toString",y=".",x="default",w="Object",v='"',u="Array",t="()",s="String",r="Function",q=".prototype",X="function",W="Boolean",V="Error",U="RegExp",T="warn",S="hasOwnProperty",R="string",Q="toLocaleString",P='\", "',O="info",G="BROKEN_IE",H="isPrototypeOf",E="Date",F="",C="qx.Bootstrap",D="]",A="Class",B="error",I="[Class ",J="valueOf",L="Number",K="count",N="debug",M="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return I+this.classname+D;
},createNamespace:function(name,bn){var bp=name.split(y);
var parent=window;
var bo=bp[0];

for(var i=0,bq=bp.length-1;i<bq;i++,bo=bp[i]){if(!parent[bo]){parent=parent[bo]={};
}else{parent=parent[bo];
}}parent[bo]=bn;
return bo;
},setDisplayName:function(bl,bm,name){bl.displayName=bm+y+name+t;
},setDisplayNames:function(bg,bh){for(var name in bg){var bi=bg[name];

if(bi instanceof Function){bi.displayName=bh+y+name+t;
}}},define:function(name,Y){if(!Y){var Y={statics:{}};
}var be;
var bc=null;
qx.Bootstrap.setDisplayNames(Y.statics,name);

if(Y.members){qx.Bootstrap.setDisplayNames(Y.members,name+q);
be=Y.construct||new Function;
var ba=Y.statics;

for(var bb in ba){be[bb]=ba[bb];
}bc=be.prototype;
var bf=Y.members;

for(var bb in bf){bc[bb]=bf[bb];
}}else{be=Y.statics||{};
}var bd=this.createNamespace(name,be);
be.name=be.classname=name;
be.basename=bd;
be.$$type=A;
if(!be.hasOwnProperty(z)){be.toString=this.genericToString;
}if(Y.defer){Y.defer(be,bc);
}qx.Bootstrap.$$registry[name]=Y.statics;
return be;
}};
qx.Bootstrap.define(C,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bj){return bj.__count__;
},"default":function(bA){var length=0;

for(var bB in bA){length++;
}return length;
}})[(({}).__count__==0)?K:x],objectMergeWith:function(bw,bx,by){if(by===undefined){by=true;
}
for(var bz in bx){if(by||bw[bz]===undefined){bw[bz]=bx[bz];
}}return bw;
},__a:[H,S,Q,z,J],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bP){var bQ=[];

for(var bT in bP){bQ.push(bT);
}var bR=qx.Bootstrap.__a;
var bS=Object.prototype.hasOwnProperty;

for(var i=0,a=bR,l=a.length;i<l;i++){if(bS.call(bP,a[i])){bQ.push(a[i]);
}}return bQ;
},"default":function(bF){var bG=[];

for(var bH in bF){bG.push(bH);
}return bG;
}})[typeof (Object.keys)==
X?M:
(function(){for(var bE in {toString:1}){return bE;
}})()!==z?G:x],getKeysAsString:function(bN){var bO=qx.Bootstrap.getKeys(bN);

if(bO.length==0){return F;
}return v+bO.join(P)+v;
},__b:{"[object String]":s,"[object Array]":u,"[object Object]":w,"[object RegExp]":U,"[object Number]":L,"[object Boolean]":W,"[object Date]":E,"[object Function]":r,"[object Error]":V},firstUp:function(f){return f.charAt(0).toUpperCase()+f.substr(1);
},firstLow:function(bU){return bU.charAt(0).toLowerCase()+bU.substr(1);
},getClass:function(g){var h=Object.prototype.toString.call(g);
return (qx.Bootstrap.__b[h]||h.slice(8,-1));
},isString:function(e){return (e!==null&&(typeof e===R||qx.Bootstrap.getClass(e)==s||e instanceof String||(!!e&&!!e.$$isString)));
},isArray:function(bJ){return (bJ!==null&&(bJ instanceof Array||(bJ&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bJ.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bJ)==u||(!!bJ&&!!bJ.$$isArray)));
},isObject:function(b){return (b!==undefined&&b!==null&&qx.Bootstrap.getClass(b)==w);
},isFunction:function(bV){return qx.Bootstrap.getClass(bV)==r;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bI,name){while(bI){if(bI.$$properties&&bI.$$properties[name]){return bI.$$properties[name];
}bI=bI.superclass;
}return null;
},hasProperty:function(d,name){return !!qx.Bootstrap.getPropertyDefinition(d,name);
},getEventType:function(br,name){var br=br.constructor;

while(br.superclass){if(br.$$events&&br.$$events[name]!==undefined){return br.$$events[name];
}br=br.superclass;
}return null;
},supportsEvent:function(bk,name){return !!qx.Bootstrap.getEventType(bk,name);
},getByInterface:function(bK,bL){var bM,i,l;

while(bK){if(bK.$$implements){bM=bK.$$flatImplements;

for(i=0,l=bM.length;i<l;i++){if(bM[i]===bL){return bK;
}}}bK=bK.superclass;
}return null;
},hasInterface:function(j,k){return !!qx.Bootstrap.getByInterface(j,k);
},getMixins:function(o){var p=[];

while(o){if(o.$$includes){p.push.apply(p,o.$$flatIncludes);
}o=o.superclass;
}return p;
},$$logs:[],debug:function(bu,bv){qx.Bootstrap.$$logs.push([N,arguments]);
},info:function(m,n){qx.Bootstrap.$$logs.push([O,arguments]);
},warn:function(bC,bD){qx.Bootstrap.$$logs.push([T,arguments]);
},error:function(bs,bt){qx.Bootstrap.$$logs.push([B,arguments]);
},trace:function(c){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(l,m){if(m===undefined){throw new Error('Default value of setting "'+l+'" must be defined!');
}
if(!this.__c[l]){this.__c[l]={};
}else if(this.__c[l].defaultValue!==undefined){throw new Error('Setting "'+l+'" is already defined!');
}this.__c[l].defaultValue=m;
},get:function(n){var o=this.__c[n];

if(o===undefined){throw new Error('Setting "'+n+'" is not defined.');
}
if(o.value!==undefined){return o.value;
}return o.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var b in window.qxsettings){this.set(b,window.qxsettings[b]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(a){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var s=document.location.search.slice(1).split(j);

for(var i=0;i<s.length;i++){var r=s[i].split(d);

if(r.length!=3||r[0]!=e){continue;
}this.set(r[1],decodeURIComponent(r[2]));
}}},defer:function(t){t.define(k,false);
t.define(g,false);
t.define(f,0);
t.__d();
}});
})();
(function(){var s="gecko",r="1.9.0.0",q=".",p="[object Opera]",o="function",n="[^\\.0-9]",m="525.26",l="",k="mshtml",j="AppleWebKit/",d="unknown",i="9.6.0",g="4.0",c="Gecko",b="opera",f="webkit",e="0.0.0",h="8.0",a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__f:function(){var t=d;
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
}},defer:function(A){A.__f();
}});
})();
(function(){var y="on",x="qx.debug",w="off",u="|",t="default",s="object",r="&",q="qx.aspects",p="$",o="qx.allowUrlVariants",f="qx.client",n="qx.dynlocale",j="webkit",e="qxvariant",d="opera",h=":",g=".",k="qx.core.Variant",c="mshtml",m="gecko";
qx.Bootstrap.define(k,{statics:{__g:{},__h:{},compilerIsSet:function(){return true;
},define:function(I,J,K){if(qx.core.Variant.compilerIsSet(x,y)){if(!this.__k(J)){throw new Error('Allowed values of variant "'+I+'" must be defined!');
}
if(K===undefined){throw new Error('Default value of variant "'+I+'" must be defined!');
}}
if(!this.__g[I]){this.__g[I]={};
}else if(qx.core.Variant.compilerIsSet(x,y)){if(this.__g[I].defaultValue!==undefined){throw new Error('Variant "'+I+'" is already defined!');
}}this.__g[I].allowedValues=J;
this.__g[I].defaultValue=K;
},get:function(Q){var R=this.__g[Q];

if(qx.core.Variant.compilerIsSet(x,y)){if(R===undefined){throw new Error('Variant "'+Q+'" is not defined.');
}}
if(R.value!==undefined){return R.value;
}return R.defaultValue;
},__i:function(){if(window.qxvariants){for(var b in qxvariants){if(qx.core.Variant.compilerIsSet(x,y)){if((b.split(g)).length<2){throw new Error('Malformed settings key "'+b+'". Must be following the schema "namespace.key".');
}}
if(!this.__g[b]){this.__g[b]={};
}this.__g[b].value=qxvariants[b];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__j(this.__g);
}},__j:function(){if(qx.core.Setting.get(o)!=true){return;
}var N=document.location.search.slice(1).split(r);

for(var i=0;i<N.length;i++){var O=N[i].split(h);

if(O.length!=3||O[0]!=e){continue;
}var P=O[1];

if(!this.__g[P]){this.__g[P]={};
}this.__g[P].value=decodeURIComponent(O[2]);
}},select:function(z,A){if(qx.core.Variant.compilerIsSet(x,y)){if(!this.__l(this.__g[z])){throw new Error("Variant \""+z+"\" is not defined");
}
if(!this.__l(A)){throw new Error("the second parameter must be a map!");
}}
for(var B in A){if(this.isSet(z,B)){return A[B];
}}
if(A[t]!==undefined){return A[t];
}
if(qx.core.Variant.compilerIsSet(x,y)){throw new Error('No match for variant "'+z+'" in variants ['+qx.Bootstrap.getKeysAsString(A)+'] found, and no default ("default") given');
}},isSet:function(D,E){var F=D+p+E;

if(this.__h[F]!==undefined){return this.__h[F];
}var H=false;
if(E.indexOf(u)<0){H=this.get(D)===E;
}else{var G=E.split(u);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__h[F]=H;
return H;
},__k:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__l:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__m:function(L,M){for(var i=0,l=L.length;i<l;i++){if(L[i]==M){return true;
}}return false;
}},defer:function(a){a.define(f,[m,c,d,j],qx.bom.client.Engine.NAME);
a.define(x,[y,w],y);
a.define(q,[y,w],w);
a.define(n,[y,w],y);
a.__i();
}});
})();
(function(){var N="qx.debug",M="object",L="Interface",K="on",J="string",I="function",H="Boolean",G="qx.Interface",F="events",E="toggle",y="properties",D="]",B="members",x="number",w="boolean",A="is",z="[Interface ",C="statics";
qx.Bootstrap.define(G,{statics:{define:function(name,O){if(O){if(O.extend&&!(O.extend instanceof Array)){O.extend=[O.extend];
}if(qx.core.Variant.isSet(N,K)){this.__t(name,O);
}var P=O.statics?O.statics:{};
if(O.extend){P.$$extends=O.extend;
}
if(O.properties){P.$$properties=O.properties;
}
if(O.members){P.$$members=O.members;
}
if(O.events){P.$$events=O.events;
}}else{var P={};
}P.$$type=L;
P.name=name;
P.toString=this.genericToString;
P.basename=qx.Bootstrap.createNamespace(name,P);
qx.Interface.$$registry[name]=P;
return P;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(ba){if(!ba){return [];
}var bb=ba.concat();

for(var i=0,l=ba.length;i<l;i++){if(ba[i].$$extends){bb.push.apply(bb,this.flatten(ba[i].$$extends));
}}return bb;
},__n:function(h,j,k,m){var q=k.$$members;

if(q){for(var p in q){if(qx.Bootstrap.isFunction(q[p])){var o=this.__o(j,p);
var n=o||qx.Bootstrap.isFunction(h[p]);

if(!n){throw new Error('Implementation of method "'+p+'" is missing in class "'+j.classname+'" required by interface "'+k.name+'"');
}var r=m===true&&!o&&!qx.Bootstrap.hasInterface(j,k);

if(r){h[p]=this.__r(k,h[p],p,q[p]);
}}else{if(typeof h[p]===undefined){if(typeof h[p]!==I){throw new Error('Implementation of member "'+p+'" is missing in class "'+j.classname+'" required by interface "'+k.name+'"');
}}}}}},__o:function(b,c){var g=c.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!g){return false;
}var d=qx.Bootstrap.firstLow(g[2]);
var e=qx.Bootstrap.getPropertyDefinition(b,d);

if(!e){return false;
}var f=g[0]==A||g[0]==E;

if(f){return qx.Bootstrap.getPropertyDefinition(b,d).check==H;
}return true;
},__p:function(bc,bd){if(bd.$$properties){for(var be in bd.$$properties){if(!qx.Bootstrap.getPropertyDefinition(bc,be)){throw new Error('The property "'+be+'" is not supported by Class "'+bc.classname+'"!');
}}}},__q:function(bj,bk){if(bk.$$events){for(var bl in bk.$$events){if(!qx.Bootstrap.supportsEvent(bj,bl)){throw new Error('The event "'+bl+'" is not supported by Class "'+bj.classname+'"!');
}}}},assertObject:function(s,t){var v=s.constructor;
this.__n(s,v,t,false);
this.__p(v,t);
this.__q(v,t);
var u=t.$$extends;

if(u){for(var i=0,l=u.length;i<l;i++){this.assertObject(s,u[i]);
}}},assert:function(bf,bg,bh){this.__n(bf.prototype,bf,bg,bh);
this.__p(bf,bg);
this.__q(bf,bg);
var bi=bg.$$extends;

if(bi){for(var i=0,l=bi.length;i<l;i++){this.assert(bf,bi[i],bh);
}}},genericToString:function(){return z+this.name+D;
},$$registry:{},__r:qx.core.Variant.select(N,{"on":function(Q,R,S,T){function U(){T.apply(this,arguments);
return R.apply(this,arguments);
}R.wrapper=U;
return U;
},"default":function(){}}),__s:qx.core.Variant.select(N,{"on":{"extend":M,"statics":M,"members":M,"properties":M,"events":M},"default":null}),__t:qx.core.Variant.select(N,{"on":function(name,V){if(qx.core.Variant.isSet(N,K)){var Y=this.__s;

for(var X in V){if(Y[X]===undefined){throw new Error('The configuration key "'+X+'" in class "'+name+'" is not allowed!');
}
if(V[X]==null){throw new Error("Invalid key '"+X+"' in interface '"+name+"'! The value is undefined/null!");
}
if(Y[X]!==null&&typeof V[X]!==Y[X]){throw new Error('Invalid type of key "'+X+'" in interface "'+name+'"! The type of the key must be "'+Y[X]+'"!');
}}var W=[C,B,y,F];

for(var i=0,l=W.length;i<l;i++){var X=W[i];

if(V[X]!==undefined&&(V[X] instanceof Array||V[X] instanceof RegExp||V[X] instanceof Date||V[X].classname!==undefined)){throw new Error('Invalid key "'+X+'" in interface "'+name+'"! The value needs to be a map!');
}}if(V.extend){for(var i=0,a=V.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==L){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(V.statics){for(var X in V.statics){if(X.toUpperCase()!==X){throw new Error('Invalid key "'+X+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof V.statics[X]){case w:case J:case x:break;
default:throw new Error('Invalid key "'+X+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var u="object",t="qx.debug",s="function",r="Mixin",q="qx.Mixin",p=".prototype",o="constructor",n="[Mixin ",m="]",k="members",g="destruct",j="events",h="on",f="properties",e="statics";
qx.Bootstrap.define(q,{statics:{define:function(name,F){if(F){if(F.include&&!(F.include instanceof Array)){F.include=[F.include];
}if(qx.core.Variant.isSet(t,h)){this.__v(name,F);
}var H=F.statics?F.statics:{};
qx.Bootstrap.setDisplayNames(H,name);

for(var G in H){if(H[G] instanceof Function){H[G].$$mixin=H;
}}if(F.construct){H.$$constructor=F.construct;
qx.Bootstrap.setDisplayName(F.construct,name,o);
}
if(F.include){H.$$includes=F.include;
}
if(F.properties){H.$$properties=F.properties;
}
if(F.members){H.$$members=F.members;
qx.Bootstrap.setDisplayNames(F.members,name+p);
}
for(var G in H.$$members){if(H.$$members[G] instanceof Function){H.$$members[G].$$mixin=H;
}}
if(F.events){H.$$events=F.events;
}
if(F.destruct){H.$$destructor=F.destruct;
qx.Bootstrap.setDisplayName(F.destruct,name,g);
}}else{var H={};
}H.$$type=r;
H.name=name;
H.toString=this.genericToString;
H.basename=qx.Bootstrap.createNamespace(name,H);
this.$$registry[name]=H;
return H;
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
},isCompatible:function(b,c){var d=qx.Bootstrap.getMixins(c);
d.push(b);
return qx.Mixin.checkCompatibility(d);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(D){if(!D){return [];
}var E=D.concat();

for(var i=0,l=D.length;i<l;i++){if(D[i].$$includes){E.push.apply(E,this.flatten(D[i].$$includes));
}}return E;
},genericToString:function(){return n+this.name+m;
},$$registry:{},__u:qx.core.Variant.select(t,{"on":{"include":u,"statics":u,"members":u,"properties":u,"events":u,"destruct":s,"construct":s},"default":null}),__v:qx.core.Variant.select(t,{"on":function(name,I){var L=this.__u;

for(var K in I){if(!L[K]){throw new Error('The configuration key "'+K+'" in mixin "'+name+'" is not allowed!');
}
if(I[K]==null){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(L[K]!==null&&typeof I[K]!==L[K]){throw new Error('Invalid type of key "'+K+'" in mixin "'+name+'"! The type of the key must be "'+L[K]+'"!');
}}var J=[e,k,f,j];

for(var i=0,l=J.length;i<l;i++){var K=J[i];

if(I[K]!==undefined&&(I[K] instanceof Array||I[K] instanceof RegExp||I[K] instanceof Date||I[K].classname!==undefined)){throw new Error('Invalid key "'+K+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(I.include){for(var i=0,a=I.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==r){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(I.include);
}},"default":function(){}})}});
})();
(function(){var by=';',bx="string",bw="qx.debug",bv='return this.',bu="boolean",bt="on",bs='!==undefined)',br="set",bq="",bp="this.",cR="setThemed",cQ="qx.propertyDebugLevel",cP='else if(this.',cO="resetThemed",cN="reset",cM="setRuntime",cL="init",cK="resetRuntime",cJ="(a[",cI="return this.",bF="();",bG="get",bD="refresh",bE='else ',bB='if(this.',bC=' of an instance of ',bz=' is not (yet) ready!");',bA="]);",bN='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bO="$$init_",cj='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',cf='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',cr=" of class ",cm="$$theme_",cD='qx.core.Assert.assertInstance(value, Date, msg) || true',cx='value !== null && value.nodeType !== undefined',bW="is",cH="': ",cF='var inherit=prop.$$inherit;',cE='value !== null && value.nodeType === 9 && value.documentElement',bU="shorthand",cb='return init;',cd='value !== null && value.$$type === "Mixin"',ch='qx.core.Assert.assertMap(value, msg) || true',ck="Boolean",cn='return value;',ct='qx.core.Assert.assertNumber(value, msg) || true',cz='qx.core.Assert.assertPositiveInteger(value, msg) || true',bH="Error in property ",bI='if(init==qx.core.Property.$$inherit)init=null;',bY="$$inherit_",cq="()",cp='qx.core.Assert.assertInteger(value, msg) || true',co='value !== null && value.$$type === "Interface"',cv="var a=arguments[0] instanceof Array?arguments[0]:arguments;",cu='value !== null && value.$$type === "Theme"',cl='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cs='value !== null && value.type !== undefined',bl='value !== null && value.document',cy=" in method ",bJ='qx.core.Assert.assertInstance(value, Error, msg) || true',bK="())",cg='return null;',bm="(!this.",bo='qx.core.Assert.assertBoolean(value, msg) || true',bT="toggle",bL='var init=this.',bM=" with incoming value '",bS='qx.core.Assert.assertObject(value, msg) || true',ci='value !== null && value.nodeType === 1 && value.attributes',cB='throw new Error("Property ',cA="$$runtime_",cc="$$useinit_",cC='qx.core.Assert.assertString(value, msg) || true',bV="inherit",cw="$$user_",bP='value !== null && value.$$type === "Class"',bR='qx.core.Assert.assertFunction(value, msg) || true',bX='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',ce='qx.core.Assert.assertArray(value, msg) || true',bQ="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cG='qx.core.Assert.assertPositiveNumber(value, msg) || true',ca="object",bn="qx.core.Property";
qx.Bootstrap.define(bn,{statics:{__w:{"Boolean":bo,"String":cC,"Number":ct,"Integer":cp,"PositiveNumber":cG,"PositiveInteger":cz,"Error":bJ,"RegExp":cl,"Object":bS,"Array":ce,"Map":ch,"Function":bR,"Date":cD,"Node":cx,"Element":ci,"Document":cE,"Window":bl,"Event":cs,"Class":bP,"Mixin":cd,"Interface":co,"Theme":cu,"Color":cj,"Decorator":bX,"Font":cf},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bV,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bx,dispose:bu,inheritable:bu,nullable:bu,themeable:bu,refine:bu,init:null,apply:bx,event:bx,check:null,transform:bx,deferredInit:bu,validate:null},$$allowedGroupKeys:{name:bx,group:ca,mode:bx,themeable:bu},$$inheritable:{},refresh:function(bd){var parent=bd.getLayoutParent();

if(parent){var bg=bd.constructor;
var bi=this.$$store.inherit;
var bh=this.$$store.init;
var bf=this.$$method.refresh;
var bj;
var be;

if(qx.core.Variant.isSet(bw,bt)){if(qx.core.Setting.get(cQ)>1){bd.debug("Update property inheritance");
}}
while(bg){bj=bg.$$properties;

if(bj){for(var name in this.$$inheritable){if(bj[name]&&bd[bf[name]]){be=parent[bi[name]];

if(be===undefined){be=parent[bh[name]];
}
if(qx.core.Variant.isSet(bw,bt)){if(qx.core.Setting.get(cQ)>2){bd.debug("Updating property: "+name+" to '"+be+"'");
}}bd[bf[name]](be);
}}}bg=bg.superclass;
}}},attach:function(dy){var dz=dy.$$properties;

if(dz){for(var name in dz){this.attachMethods(dy,name,dz[name]);
}}dy.$$propertiesAttached=true;
},attachMethods:function(da,name,db){db.group?this.__y(da,db,name):this.__z(da,db,name);
},__y:function(h,j,name){var r=qx.Bootstrap.firstUp(name);
var q=h.prototype;
var s=j.themeable===true;

if(qx.core.Variant.isSet(bw,bt)){if(qx.core.Setting.get(cQ)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var t=[];
var n=[];

if(s){var k=[];
var p=[];
}var o=cv;
t.push(o);

if(s){k.push(o);
}
if(j.mode==bU){var m=bQ;
t.push(m);

if(s){k.push(m);
}}
for(var i=0,a=j.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(bw,bt)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}t.push(bp,this.$$method.set[a[i]],cJ,i,bA);
n.push(bp,this.$$method.reset[a[i]],bF);

if(s){if(qx.core.Variant.isSet(bw,bt)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}k.push(bp,this.$$method.setThemed[a[i]],cJ,i,bA);
p.push(bp,this.$$method.resetThemed[a[i]],bF);
}}this.$$method.set[name]=br+r;
q[this.$$method.set[name]]=new Function(t.join(bq));
this.$$method.reset[name]=cN+r;
q[this.$$method.reset[name]]=new Function(n.join(bq));

if(s){this.$$method.setThemed[name]=cR+r;
q[this.$$method.setThemed[name]]=new Function(k.join(bq));
this.$$method.resetThemed[name]=cO+r;
q[this.$$method.resetThemed[name]]=new Function(p.join(bq));
}},__z:function(cT,cU,name){var cW=qx.Bootstrap.firstUp(name);
var cY=cT.prototype;

if(qx.core.Variant.isSet(bw,bt)){if(qx.core.Setting.get(cQ)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(cU.dispose===undefined&&typeof cU.check===bx){cU.dispose=this.__x[cU.check]||qx.Bootstrap.classIsDefined(cU.check)||(qx.Interface&&qx.Interface.isDefined(cU.check));
}var cX=this.$$method;
var cV=this.$$store;
cV.runtime[name]=cA+name;
cV.user[name]=cw+name;
cV.theme[name]=cm+name;
cV.init[name]=bO+name;
cV.inherit[name]=bY+name;
cV.useinit[name]=cc+name;
cX.get[name]=bG+cW;
cY[cX.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cT,name,bG);
};
cX.set[name]=br+cW;
cY[cX.set[name]]=function(B){return qx.core.Property.executeOptimizedSetter(this,cT,name,br,arguments);
};
cX.reset[name]=cN+cW;
cY[cX.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,cN);
};

if(cU.inheritable||cU.apply||cU.event||cU.deferredInit){cX.init[name]=cL+cW;
cY[cX.init[name]]=function(dd){return qx.core.Property.executeOptimizedSetter(this,cT,name,cL,arguments);
};
}
if(cU.inheritable){cX.refresh[name]=bD+cW;
cY[cX.refresh[name]]=function(cS){return qx.core.Property.executeOptimizedSetter(this,cT,name,bD,arguments);
};
}cX.setRuntime[name]=cM+cW;
cY[cX.setRuntime[name]]=function(dA){return qx.core.Property.executeOptimizedSetter(this,cT,name,cM,arguments);
};
cX.resetRuntime[name]=cK+cW;
cY[cX.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,cK);
};

if(cU.themeable){cX.setThemed[name]=cR+cW;
cY[cX.setThemed[name]]=function(R){return qx.core.Property.executeOptimizedSetter(this,cT,name,cR,arguments);
};
cX.resetThemed[name]=cO+cW;
cY[cX.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cT,name,cO);
};
}
if(cU.check===ck){cY[bT+cW]=new Function(cI+cX.set[name]+bm+cX.get[name]+bK);
cY[bW+cW]=new Function(cI+cX.get[name]+cq);
}},__A:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(u,v,w,x,y){var z=u.constructor.classname;
var A=bH+w+cr+z+cy+this.$$method[x][w]+bM+y+cH;
throw new Error(A+(this.__A[v]||"Unknown reason: "+v));
},__B:function(dB,dC,name,dD,dE,dF){var dG=this.$$method[dD][name];
if(qx.core.Variant.isSet("qx.debug","on")){if(qx.core.Setting.get("qx.propertyDebugLevel")>1){qx.Bootstrap.debug("Code["+this.$$method[dD][name]+"]: "+dE.join(""));
}try{dC[dG]=new Function("value",dE.join(""));
}catch(dc){throw new Error("Malformed generated code to unwrap method: "+this.$$method[dD][name]+"\n"+dE.join(""));
}}else{dC[dG]=new Function("value",dE.join(""));
}if(qx.core.Variant.isSet("qx.aspects","on")){dC[dG]=qx.core.Aspect.wrap(dB.classname+"."+dG,dC[dG],"property");
}qx.Bootstrap.setDisplayName(dC[dG],dB.classname+".prototype",dG);
if(dF===undefined){return dB[dG]();
}else if(qx.core.Variant.isSet("qx.debug","on")){return dB[dG].apply(dB,dF);
}else{return dB[dG](dF[0]);
}},executeOptimizedGetter:function(K,L,name,M){var O=L.$$properties[name];
var Q=L.prototype;
var N=[];
var P=this.$$store;
N.push(bB,P.runtime[name],bs);
N.push(bv,P.runtime[name],by);

if(O.inheritable){N.push(cP,P.inherit[name],bs);
N.push(bv,P.inherit[name],by);
N.push(bE);
}N.push(bB,P.user[name],bs);
N.push(bv,P.user[name],by);

if(O.themeable){N.push(cP,P.theme[name],bs);
N.push(bv,P.theme[name],by);
}
if(O.deferredInit&&O.init===undefined){N.push(cP,P.init[name],bs);
N.push(bv,P.init[name],by);
}N.push(bE);

if(O.init!==undefined){if(O.inheritable){N.push(bL,P.init[name],by);

if(O.nullable){N.push(bI);
}else if(O.init!==undefined){N.push(bv,P.init[name],by);
}else{N.push(bN,name,bC,L.classname,bz);
}N.push(cb);
}else{N.push(bv,P.init[name],by);
}}else if(O.inheritable||O.nullable){N.push(cg);
}else{N.push(cB,name,bC,L.classname,bz);
}return this.__B(K,Q,name,M,N);
},executeOptimizedSetter:function(dn,dp,name,dq,dr){var dw=dp.$$properties[name];
var dv=dp.prototype;
var dt=[];
var ds=dq===br||dq===cR||dq===cM||(dq===cL&&dw.init===undefined);
var du=dw.apply||dw.event||dw.inheritable;
var dx=this.__C(dq,name);
this.__D(dt,dw,name,dq,ds);

if(ds){this.__E(dt,dp,dw,name);
}
if(du){this.__F(dt,ds,dx,dq);
}
if(dw.inheritable){dt.push(cF);
}
if(qx.core.Variant.isSet(bw,bt)){if(ds){this.__G(dt,dw,dp,name,dq);
}}
if(!du){this.__H(dt,name,dq,ds);
}else{this.__I(dt,dw,name,dq,ds);
}
if(dw.inheritable){this.__J(dt,dw,name,dq);
}else if(du){this.__K(dt,dw,name,dq);
}
if(du){this.__L(dt,dw,name);
if(dw.inheritable&&dv._getChildren){this.__M(dt,name);
}}if(ds){dt.push(cn);
}return this.__B(dn,dv,name,dq,dt,dr);
},__C:function(C,name){if(C==="setRuntime"||C==="resetRuntime"){var D=this.$$store.runtime[name];
}else if(C==="setThemed"||C==="resetThemed"){D=this.$$store.theme[name];
}else if(C==="init"){D=this.$$store.init[name];
}else{D=this.$$store.user[name];
}return D;
},__D:function(dj,dk,name,dl,dm){if(qx.core.Variant.isSet("qx.debug","on")){dj.push('var prop=qx.core.Property;');

if(dl==="init"){dj.push('if(this.$$initialized)prop.error(this,0,"',name,'","',dl,'",value);');
}
if(dl==="refresh"){}else if(dm){dj.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',dl,'",value);');
dj.push('if(value===undefined)prop.error(this,2,"',name,'","',dl,'",value);');
}else{dj.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',dl,'",value);');
}}else{if(!dk.nullable||dk.check||dk.inheritable){dj.push('var prop=qx.core.Property;');
}if(dl==="set"){dj.push('if(value===undefined)prop.error(this,2,"',name,'","',dl,'",value);');
}}},__E:function(ba,bb,bc,name){if(bc.transform){ba.push('value=this.',bc.transform,'(value);');
}if(bc.validate){if(typeof bc.validate==="string"){ba.push('this.',bc.validate,'(value);');
}else if(bc.validate instanceof Function){ba.push(bb.classname,'.$$properties.',name);
ba.push('.validate.call(this, value);');
}}},__F:function(de,df,dg,dh){var di=(dh==="reset"||dh==="resetThemed"||dh==="resetRuntime");

if(df){de.push('if(this.',dg,'===value)return value;');
}else if(di){de.push('if(this.',dg,'===undefined)return;');
}},__G:qx.core.Variant.select("qx.debug",{"on":function(G,H,I,name,J){if(!H.nullable){G.push('if(value===null)prop.error(this,4,"',name,'","',J,'",value);');
}if(H.check!==undefined){G.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+I.classname+'\'";');
if(H.nullable){G.push('if(value!==null)');
}if(H.inheritable){G.push('if(value!==inherit)');
}G.push('if(');

if(this.__w[H.check]!==undefined){G.push('!(',this.__w[H.check],')');
}else if(qx.Class.isDefined(H.check)){G.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',H.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(H.check)){G.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',H.check,'"), msg)');
}else if(typeof H.check==="function"){G.push('!',I.classname,'.$$properties.',name);
G.push('.check.call(this, value)');
}else if(typeof H.check==="string"){G.push('!(',H.check,')');
}else if(H.check instanceof Array){G.push('qx.core.Assert.assertInArray(value, ',I.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+I.classname);
}G.push(')prop.error(this,5,"',name,'","',J,'",value);');
}},"off":undefined}),__H:function(W,name,X,Y){if(X==="setRuntime"){W.push('this.',this.$$store.runtime[name],'=value;');
}else if(X==="resetRuntime"){W.push('if(this.',this.$$store.runtime[name],'!==undefined)');
W.push('delete this.',this.$$store.runtime[name],';');
}else if(X==="set"){W.push('this.',this.$$store.user[name],'=value;');
}else if(X==="reset"){W.push('if(this.',this.$$store.user[name],'!==undefined)');
W.push('delete this.',this.$$store.user[name],';');
}else if(X==="setThemed"){W.push('this.',this.$$store.theme[name],'=value;');
}else if(X==="resetThemed"){W.push('if(this.',this.$$store.theme[name],'!==undefined)');
W.push('delete this.',this.$$store.theme[name],';');
}else if(X==="init"&&Y){W.push('this.',this.$$store.init[name],'=value;');
}},__I:function(S,T,name,U,V){if(T.inheritable){S.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{S.push('var computed, old;');
}S.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(U==="setRuntime"){S.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(U==="resetRuntime"){S.push('delete this.',this.$$store.runtime[name],';');
S.push('if(this.',this.$$store.user[name],'!==undefined)');
S.push('computed=this.',this.$$store.user[name],';');
S.push('else if(this.',this.$$store.theme[name],'!==undefined)');
S.push('computed=this.',this.$$store.theme[name],';');
S.push('else if(this.',this.$$store.init[name],'!==undefined){');
S.push('computed=this.',this.$$store.init[name],';');
S.push('this.',this.$$store.useinit[name],'=true;');
S.push('}');
}else{S.push('old=computed=this.',this.$$store.runtime[name],';');
if(U==="set"){S.push('this.',this.$$store.user[name],'=value;');
}else if(U==="reset"){S.push('delete this.',this.$$store.user[name],';');
}else if(U==="setThemed"){S.push('this.',this.$$store.theme[name],'=value;');
}else if(U==="resetThemed"){S.push('delete this.',this.$$store.theme[name],';');
}else if(U==="init"&&V){S.push('this.',this.$$store.init[name],'=value;');
}}S.push('}');
S.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(U==="set"){if(!T.inheritable){S.push('old=this.',this.$$store.user[name],';');
}S.push('computed=this.',this.$$store.user[name],'=value;');
}else if(U==="reset"){if(!T.inheritable){S.push('old=this.',this.$$store.user[name],';');
}S.push('delete this.',this.$$store.user[name],';');
S.push('if(this.',this.$$store.runtime[name],'!==undefined)');
S.push('computed=this.',this.$$store.runtime[name],';');
S.push('if(this.',this.$$store.theme[name],'!==undefined)');
S.push('computed=this.',this.$$store.theme[name],';');
S.push('else if(this.',this.$$store.init[name],'!==undefined){');
S.push('computed=this.',this.$$store.init[name],';');
S.push('this.',this.$$store.useinit[name],'=true;');
S.push('}');
}else{if(U==="setRuntime"){S.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(T.inheritable){S.push('computed=this.',this.$$store.user[name],';');
}else{S.push('old=computed=this.',this.$$store.user[name],';');
}if(U==="setThemed"){S.push('this.',this.$$store.theme[name],'=value;');
}else if(U==="resetThemed"){S.push('delete this.',this.$$store.theme[name],';');
}else if(U==="init"&&V){S.push('this.',this.$$store.init[name],'=value;');
}}S.push('}');
if(T.themeable){S.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!T.inheritable){S.push('old=this.',this.$$store.theme[name],';');
}
if(U==="setRuntime"){S.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(U==="set"){S.push('computed=this.',this.$$store.user[name],'=value;');
}else if(U==="setThemed"){S.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(U==="resetThemed"){S.push('delete this.',this.$$store.theme[name],';');
S.push('if(this.',this.$$store.init[name],'!==undefined){');
S.push('computed=this.',this.$$store.init[name],';');
S.push('this.',this.$$store.useinit[name],'=true;');
S.push('}');
}else if(U==="init"){if(V){S.push('this.',this.$$store.init[name],'=value;');
}S.push('computed=this.',this.$$store.theme[name],';');
}else if(U==="refresh"){S.push('computed=this.',this.$$store.theme[name],';');
}S.push('}');
}S.push('else if(this.',this.$$store.useinit[name],'){');

if(!T.inheritable){S.push('old=this.',this.$$store.init[name],';');
}
if(U==="init"){if(V){S.push('computed=this.',this.$$store.init[name],'=value;');
}else{S.push('computed=this.',this.$$store.init[name],';');
}}else if(U==="set"||U==="setRuntime"||U==="setThemed"||U==="refresh"){S.push('delete this.',this.$$store.useinit[name],';');

if(U==="setRuntime"){S.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(U==="set"){S.push('computed=this.',this.$$store.user[name],'=value;');
}else if(U==="setThemed"){S.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(U==="refresh"){S.push('computed=this.',this.$$store.init[name],';');
}}S.push('}');
if(U==="set"||U==="setRuntime"||U==="setThemed"||U==="init"){S.push('else{');

if(U==="setRuntime"){S.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(U==="set"){S.push('computed=this.',this.$$store.user[name],'=value;');
}else if(U==="setThemed"){S.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(U==="init"){if(V){S.push('computed=this.',this.$$store.init[name],'=value;');
}else{S.push('computed=this.',this.$$store.init[name],';');
}S.push('this.',this.$$store.useinit[name],'=true;');
}S.push('}');
}},__J:function(e,f,name,g){e.push('if(computed===undefined||computed===inherit){');

if(g==="refresh"){e.push('computed=value;');
}else{e.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}e.push('if((computed===undefined||computed===inherit)&&');
e.push('this.',this.$$store.init[name],'!==undefined&&');
e.push('this.',this.$$store.init[name],'!==inherit){');
e.push('computed=this.',this.$$store.init[name],';');
e.push('this.',this.$$store.useinit[name],'=true;');
e.push('}else{');
e.push('delete this.',this.$$store.useinit[name],';}');
e.push('}');
e.push('if(old===computed)return value;');
e.push('if(computed===inherit){');
e.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
e.push('}');
e.push('else if(computed===undefined)');
e.push('delete this.',this.$$store.inherit[name],';');
e.push('else this.',this.$$store.inherit[name],'=computed;');
e.push('var backup=computed;');
if(f.init!==undefined&&g!=="init"){e.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{e.push('if(old===undefined)old=null;');
}e.push('if(computed===undefined||computed==inherit)computed=null;');
},__K:function(b,c,name,d){if(d!=="set"&&d!=="setRuntime"&&d!=="setThemed"){b.push('if(computed===undefined)computed=null;');
}b.push('if(old===computed)return value;');
if(c.init!==undefined&&d!=="init"){b.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{b.push('if(old===undefined)old=null;');
}},__L:function(E,F,name){if(F.apply){E.push('this.',F.apply,'(computed, old, "',name,'");');
}if(F.event){E.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",F.event,"')){","reg.fireEvent(this, '",F.event,"', qx.event.type.Data, [computed, old]",")}");
}},__M:function(bk,name){bk.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
bk.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
bk.push('}');
}}});
})();
(function(){var g="qx.core.Aspect",f="before",e="*",d="static";
qx.Bootstrap.define(g,{statics:{__N:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__N;
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
},addAdvice:function(a,b,c,name){this.__N.push({fcn:a,pos:b===f?-1:1,type:c,name:name});
}}});
})();
(function(){var bQ="on",bP="qx.debug",bO="qx.aspects",bN="singleton",bM="static",bL="[Class ",bK="]",bJ="abstract",bI="constructor",bH="extend",bF="qx.Class",bG=".";
qx.Bootstrap.define(bF,{statics:{define:function(name,W){if(!W){var W={};
}if(W.include&&!(W.include instanceof Array)){W.include=[W.include];
}if(W.implement&&!(W.implement instanceof Array)){W.implement=[W.implement];
}if(!W.hasOwnProperty(bH)&&!W.type){W.type=bM;
}if(qx.core.Variant.isSet(bP,bQ)){this.__Q(name,W);
}var Y=this.__S(name,W.type,W.extend,W.statics,W.construct,W.destruct);
if(W.extend){if(W.properties){this.__U(Y,W.properties,true);
}if(W.members){this.__W(Y,W.members,true,true,false);
}if(W.events){this.__T(Y,W.events,true);
}if(W.include){for(var i=0,l=W.include.length;i<l;i++){this.__ba(Y,W.include[i],false);
}}}if(W.settings){for(var X in W.settings){qx.core.Setting.define(X,W.settings[X]);
}}if(W.variants){for(var X in W.variants){qx.core.Variant.define(X,W.variants[X].allowedValues,W.variants[X].defaultValue);
}}if(W.implement){for(var i=0,l=W.implement.length;i<l;i++){this.__Y(Y,W.implement[i]);
}}
if(qx.core.Variant.isSet(bP,bQ)){this.__R(Y);
}if(W.defer){W.defer.self=Y;
W.defer(Y,Y.prototype,{add:function(name,br){var bs={};
bs[name]=br;
qx.Class.__U(Y,bs,true);
}});
}return Y;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bt,bu){if(qx.core.Variant.isSet(bP,bQ)){if(!bu){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bt.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bu,bt);
}qx.Class.__ba(bt,bu,false);
},patch:function(b,c){if(qx.core.Variant.isSet(bP,bQ)){if(!c){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+b.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(c,b);
}qx.Class.__ba(b,c,true);
},isSubClassOf:function(Q,R){if(!Q){return false;
}
if(Q==R){return true;
}
if(Q.prototype instanceof R){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(p){var q=[];

while(p){if(p.$$properties){q.push.apply(q,qx.Bootstrap.getKeys(p.$$properties));
}p=p.superclass;
}return q;
},getByProperty:function(cf,name){while(cf){if(cf.$$properties&&cf.$$properties[name]){return cf;
}cf=cf.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(cd,ce){return cd.$$includes&&cd.$$includes.indexOf(ce)!==-1;
},getByMixin:function(N,O){var P,i,l;

while(N){if(N.$$includes){P=N.$$flatIncludes;

for(i=0,l=P.length;i<l;i++){if(P[i]===O){return N;
}}}N=N.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bx,by){return !!this.getByMixin(bx,by);
},hasOwnInterface:function(bv,bw){return bv.$$implements&&bv.$$implements.indexOf(bw)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(s){var t=[];

while(s){if(s.$$implements){t.push.apply(t,s.$$flatImplements);
}s=s.superclass;
}return t;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(C,D){var E=C.constructor;

if(this.hasInterface(E,D)){return true;
}
try{qx.Interface.assertObject(C,D);
return true;
}catch(r){}
try{qx.Interface.assert(E,D,false);
return true;
}catch(bz){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bL+this.classname+bK;
},$$registry:qx.Bootstrap.$$registry,__O:qx.core.Variant.select("qx.debug",{"on":{"type":"string","extend":"function","implement":"object","include":"object","construct":"function","statics":"object","properties":"object","members":"object","settings":"object","variants":"object","events":"object","defer":"function","destruct":"function"},"default":null}),__P:qx.core.Variant.select("qx.debug",{"on":{"type":"string","statics":"object","settings":"object","variants":"object","defer":"function"},"default":null}),__Q:qx.core.Variant.select("qx.debug",{"on":function(name,cg){if(cg.type&&!(cg.type==="static"||cg.type==="abstract"||cg.type==="singleton")){throw new Error('Invalid type "'+cg.type+'" definition for class "'+name+'"!');
}if(cg.type&&cg.type!=="static"&&!cg.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var cj=cg.type==="static"?this.__P:this.__O;

for(var ci in cg){if(!cj[ci]){throw new Error('The configuration key "'+ci+'" in class "'+name+'" is not allowed!');
}
if(cg[ci]==null){throw new Error('Invalid key "'+ci+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof cg[ci]!==cj[ci]){throw new Error('Invalid type of key "'+ci+'" in class "'+name+'"! The type of the key must be "'+cj[ci]+'"!');
}}var ch=["statics","properties","members","settings","variants","events"];

for(var i=0,l=ch.length;i<l;i++){var ci=ch[i];

if(cg[ci]!==undefined&&(cg[ci].$$hash!==undefined||!qx.Bootstrap.isObject(cg[ci]))){throw new Error('Invalid key "'+ci+'" in class "'+name+'"! The value needs to be a map!');
}}if(cg.include){if(cg.include instanceof Array){for(var i=0,a=cg.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Mixin"){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(cg.implement){if(cg.implement instanceof Array){for(var i=0,a=cg.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Interface"){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(cg.include){try{qx.Mixin.checkCompatibility(cg.include);
}catch(bU){throw new Error('Error in include definition of class "'+name+'"! '+bU.message);
}}if(cg.settings){for(var ci in cg.settings){if(ci.substr(0,ci.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden setting "'+ci+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(cg.variants){for(var ci in cg.variants){if(ci.substr(0,ci.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden variant "'+ci+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__R:qx.core.Variant.select("qx.debug",{"on":function(bV){var bX=bV.superclass;

while(bX){if(bX.$$classtype!=="abstract"){break;
}var bW=bX.$$implements;

if(bW){for(var i=0;i<bW.length;i++){qx.Interface.assert(bV,bW[i],true);
}}bX=bX.superclass;
}},"default":function(){}}),__S:function(name,ba,bb,bc,bd,be){var bj;

if(!bb&&qx.core.Variant.isSet("qx.aspects","off")){bj=bc||{};
qx.Bootstrap.setDisplayNames(bj,name);
}else{bj={};

if(bb){if(!bd){bd=this.__bb();
}bj=this.__bd(bd,name,ba);
qx.Bootstrap.setDisplayName(bd,name,"constructor");
}if(bc){qx.Bootstrap.setDisplayNames(bc,name);
var bk;

for(var i=0,a=qx.Bootstrap.getKeys(bc),l=a.length;i<l;i++){bk=a[i];
var bg=bc[bk];

if(qx.core.Variant.isSet("qx.aspects","on")){if(bg instanceof Function){bg=qx.core.Aspect.wrap(name+"."+bk,bg,"static");
}bj[bk]=bg;
}else{bj[bk]=bg;
}}}}var bi=qx.Bootstrap.createNamespace(name,bj,false);
bj.name=bj.classname=name;
bj.basename=bi;
bj.$$type="Class";

if(ba){bj.$$classtype=ba;
}if(!bj.hasOwnProperty("toString")){bj.toString=this.genericToString;
}
if(bb){var bl=bb.prototype;
var bf=this.__bc();
bf.prototype=bl;
var bh=new bf;
bj.prototype=bh;
bh.name=bh.classname=name;
bh.basename=bi;
bd.base=bj.superclass=bb;
bd.self=bj.constructor=bh.constructor=bj;
if(be){if(qx.core.Variant.isSet("qx.aspects","on")){be=qx.core.Aspect.wrap(name,be,"destructor");
}bj.$$destructor=be;
qx.Bootstrap.setDisplayName(be,name,"destruct");
}}this.$$registry[name]=bj;
return bj;
},__T:function(S,T,U){if(qx.core.Variant.isSet("qx.debug","on")){if(typeof T!=="object"||T instanceof Array){throw new Error(S.classname+": the events must be defined as map!");
}
for(var V in T){if(typeof T[V]!=="string"){throw new Error(S.classname+"/"+V+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(S.$$events&&U!==true){for(var V in T){if(S.$$events[V]!==undefined&&S.$$events[V]!==T[V]){throw new Error(S.classname+"/"+V+": the event value/type cannot be changed from "+S.$$events[V]+" to "+T[V]);
}}}}
if(S.$$events){for(var V in T){S.$$events[V]=T[V];
}}else{S.$$events=T;
}},__U:function(bm,bn,bo){var bq;

if(bo===undefined){bo=false;
}var bp=!!bm.$$propertiesAttached;

for(var name in bn){bq=bn[name];
if(qx.core.Variant.isSet("qx.debug","on")){this.__V(bm,name,bq,bo);
}bq.name=name;
if(!bq.refine){if(bm.$$properties===undefined){bm.$$properties={};
}bm.$$properties[name]=bq;
}if(bq.init!==undefined){bm.prototype["$$init_"+name]=bq.init;
}if(bq.event!==undefined){var event={};
event[bq.event]="qx.event.type.Data";
this.__T(bm,event,bo);
}if(bq.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(bp){qx.core.Property.attachMethods(bm,name,bq);
}}},__V:qx.core.Variant.select("qx.debug",{"on":function(d,name,e,f){var h=this.hasProperty(d,name);

if(h){var g=this.getPropertyDefinition(d,name);

if(e.refine&&g.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+d.classname+"'.");
}}
if(!h&&e.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+d.classname+"'!");
}
if(h&&!f){throw new Error("Class "+d.classname+" already has a property: "+name+"!");
}
if(h&&f){if(!e.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+d.classname+', original class: '+this.getByProperty(d,name).classname+'.');
}
for(var j in e){if(j!=="init"&&j!=="refine"){throw new Error("Class "+d.classname+" could not refine property: "+name+"! Key: "+j+" could not be refined!");
}}}var k=e.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var j in e){if(k[j]===undefined){throw new Error('The configuration key "'+j+'" of property "'+name+'" in class "'+d.classname+'" is not allowed!');
}
if(e[j]===undefined){throw new Error('Invalid key "'+j+'" of property "'+name+'" in class "'+d.classname+'"! The value is undefined: '+e[j]);
}
if(k[j]!==null&&typeof e[j]!==k[j]){throw new Error('Invalid type of key "'+j+'" of property "'+name+'" in class "'+d.classname+'"! The type of the key must be "'+k[j]+'"!');
}}
if(e.transform!=null){if(!(typeof e.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+d.classname+'"! Needs to be a String.');
}}
if(e.check!=null){if(!qx.Bootstrap.isString(e.check)&&!qx.Bootstrap.isArray(e.check)&&!qx.Bootstrap.isFunction(e.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+d.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__W:function(u,v,w,x,y){var z=u.prototype;
var B,A;
qx.Bootstrap.setDisplayNames(v,u.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(v),l=a.length;i<l;i++){B=a[i];
A=v[B];

if(qx.core.Variant.isSet("qx.debug","on")){if(z[B]!==undefined&&B.charAt(0)=="_"&&B.charAt(1)=="_"){throw new Error('Overwriting private member "'+B+'" of Class "'+u.classname+'" is not allowed!');
}
if(w!==true&&z.hasOwnProperty(B)){throw new Error('Overwriting member "'+B+'" of Class "'+u.classname+'" is not allowed!');
}}if(x!==false&&A instanceof Function&&A.$$type==null){if(y==true){A=this.__X(A,z[B]);
}else{if(z[B]){A.base=z[B];
}A.self=u;
}
if(qx.core.Variant.isSet("qx.aspects","on")){A=qx.core.Aspect.wrap(u.classname+"."+B,A,"member");
}}z[B]=A;
}},__X:function(L,M){if(M){return function(){var H=L.base;
L.base=M;
var G=L.apply(this,arguments);
L.base=H;
return G;
};
}else{return L;
}},__Y:function(bR,bS){if(qx.core.Variant.isSet("qx.debug","on")){if(!bR||!bS){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(bR,bS)){throw new Error('Interface "'+bS.name+'" is already used by Class "'+bR.classname+'!');
}if(bR.$$classtype!=="abstract"){qx.Interface.assert(bR,bS,true);
}}var bT=qx.Interface.flatten([bS]);

if(bR.$$implements){bR.$$implements.push(bS);
bR.$$flatImplements.push.apply(bR.$$flatImplements,bT);
}else{bR.$$implements=[bS];
bR.$$flatImplements=bT;
}},__ba:function(bA,bB,bC){if(qx.core.Variant.isSet(bP,bQ)){if(!bA||!bB){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(bA,bB)){return;
}var bE=qx.Mixin.flatten([bB]);
var bD;

for(var i=0,l=bE.length;i<l;i++){bD=bE[i];
if(bD.$$events){this.__T(bA,bD.$$events,bC);
}if(bD.$$properties){this.__U(bA,bD.$$properties,bC);
}if(bD.$$members){this.__W(bA,bD.$$members,bC,bC,bC);
}}if(bA.$$includes){bA.$$includes.push(bB);
bA.$$flatIncludes.push.apply(bA.$$flatIncludes,bE);
}else{bA.$$includes=[bB];
bA.$$flatIncludes=bE;
}},__bb:function(){function F(){arguments.callee.base.apply(this,arguments);
}return F;
},__bc:function(){return function(){};
},__bd:function(bY,name,ca){var cc=function(){var K=arguments.callee.constructor;

if(qx.core.Variant.isSet(bP,bQ)){if(!(this instanceof K)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(ca===bJ){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(ca===bN){if(!K.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}if(!K.$$propertiesAttached){qx.core.Property.attach(K);
}var J=K.$$original.apply(this,arguments);
if(K.$$includes){var I=K.$$flatIncludes;

for(var i=0,l=I.length;i<l;i++){if(I[i].$$constructor){I[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return J;
};

if(qx.core.Variant.isSet(bO,bQ)){var cb=qx.core.Aspect.wrap(name,cc,bI);
cc.$$original=bY;
cc.constructor=cb;
cc=cb;
}if(ca===bN){cc.getInstance=this.getInstance;
}cc.$$original=bY;
bY.wrapper=cc;
return cc;
}},defer:function(){if(qx.core.Variant.isSet(bO,bQ)){for(var m in qx.Bootstrap.$$registry){var n=qx.Bootstrap.$$registry[m];

for(var o in n){if(n[o] instanceof Function){n[o]=qx.core.Aspect.wrap(m+bG+o,n[o],bM);
}}}}}});
})();
(function(){var p="qx.client",o="on",n="function",m="mousedown",l="qx.bom.Event",k="return;",j="mouseover",i="HTMLEvents";
qx.Class.define(l,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(q,r,s){q.attachEvent(o+r,s);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(t,u,v){try{t.detachEvent(o+u,v);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(f,g,h){f.removeEventListener(g,h,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(p,{"mshtml":function(e){if(e.type===j){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(p,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==m&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(C){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(a){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(b,c){if(document.createEventObject){var d=document.createEventObject();
return b.fireEvent(o+c,d);
}else{var d=document.createEvent(i);
d.initEvent(c,true,true);
return !b.dispatchEvent(d);
}},supportsEvent:qx.core.Variant.select(p,{"webkit":function(A,B){return A.hasOwnProperty(o+B);
},"default":function(w,x){var y=o+x;
var z=(y in w);

if(!z){z=typeof w[y]==n;

if(!z&&w.setAttribute){w.setAttribute(y,k);
z=typeof w[y]==n;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var P="qx.debug",O="on",N="|bubble",M="|capture",L="|",K="': ",J="'",I="_",H="Invalid Target.",G="Invalid event type.",bo="Invalid event target.",bn=" from the target '",bm="Invalid callback function",bl="unload",bk="Failed to remove event listener for id '",bj="Invalid context for callback.",bi="Invalid capture flag.",bh="Failed to add event listener for type '",bg="__bj",bf="UNKNOWN_",W="capture",X="qx.event.Manager",U="Could not dispatch event '",V="DOM_",S="__bi",T="QX_",Q=" to the target '",R="Failed to remove event listener for type '",Y="Invalid capture falg.",ba="c",bc="Invalid id type.",bb="' on target '",be="WIN_",bd="Invalid event object.";
qx.Class.define(X,{extend:Object,construct:function(ca,cb){this.__be=ca;
this.__bf=qx.core.ObjectRegistry.toHashCode(ca);
this.__bg=cb;
if(ca.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(ca,bl,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(ca,bl,arguments.callee);
self.dispose();
}));
}this.__bh={};
this.__bi={};
this.__bj={};
this.__bk={};
},statics:{__bl:0,getNextUniqueId:function(){return (this.__bl++).toString(36);
}},members:{__bg:null,__bh:null,__bj:null,__bm:null,__bi:null,__bk:null,__be:null,__bf:null,getWindow:function(){return this.__be;
},getWindowId:function(){return this.__bf;
},getHandler:function(cL){var cM=this.__bi[cL.classname];

if(cM){return cM;
}return this.__bi[cL.classname]=new cL(this);
},getDispatcher:function(bM){var bN=this.__bj[bM.classname];

if(bN){return bN;
}return this.__bj[bM.classname]=new bM(this,this.__bg);
},getListeners:function(p,q,r){var s=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var u=this.__bh[s];

if(!u){return null;
}var v=q+(r?M:N);
var t=u[v];
return t?t.concat():null;
},serializeListeners:function(w){var D=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var F=this.__bh[D];
var B=[];

if(F){var z,E,x,A,C;

for(var y in F){z=y.indexOf(L);
E=y.substring(0,z);
x=y.charAt(z+1)==ba;
A=F[y];

for(var i=0,l=A.length;i<l;i++){C=A[i];
B.push({self:C.context,handler:C.handler,type:E,capture:x});
}}}return B;
},toggleAttachedEvents:function(bw,bx){var bC=bw.$$hash||qx.core.ObjectRegistry.toHashCode(bw);
var bE=this.__bh[bC];

if(bE){var bz,bD,by,bA;

for(var bB in bE){bz=bB.indexOf(L);
bD=bB.substring(0,bz);
by=bB.charCodeAt(bz+1)===99;
bA=bE[bB];

if(bx){this.__bn(bw,bD,by);
}else{this.__bo(bw,bD,by);
}}}},hasListener:function(bS,bT,bU){if(qx.core.Variant.isSet(P,O)){if(bS==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bS);
}}var bV=bS.$$hash||qx.core.ObjectRegistry.toHashCode(bS);
var bX=this.__bh[bV];

if(!bX){return false;
}var bY=bT+(bU?M:N);
var bW=bX[bY];
return bW&&bW.length>0;
},importListeners:function(cm,cn){if(qx.core.Variant.isSet(P,O)){if(cm==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+cm);
}}var ct=cm.$$hash||qx.core.ObjectRegistry.toHashCode(cm);
var cu=this.__bh[ct]={};
var cq=qx.event.Manager;

for(var co in cn){var cr=cn[co];
var cs=cr.type+(cr.capture?M:N);
var cp=cu[cs];

if(!cp){cp=cu[cs]=[];
this.__bn(cm,cr.type,cr.capture);
}cp.push({handler:cr.listener,context:cr.self,unique:cr.unique||(cq.__bl++).toString(36)});
}},addListener:function(cN,cO,cP,self,cQ){if(qx.core.Variant.isSet(P,O)){var cU=bh+cO+J+Q+cN.classname+K;
qx.core.Assert.assertObject(cN,cU+H);
qx.core.Assert.assertString(cO,cU+G);
qx.core.Assert.assertFunction(cP,cU+bm);

if(cQ!==undefined){qx.core.Assert.assertBoolean(cQ,bi);
}}var cV=cN.$$hash||qx.core.ObjectRegistry.toHashCode(cN);
var cX=this.__bh[cV];

if(!cX){cX=this.__bh[cV]={};
}var cT=cO+(cQ?M:N);
var cS=cX[cT];

if(!cS){cS=cX[cT]=[];
}if(cS.length===0){this.__bn(cN,cO,cQ);
}var cW=(qx.event.Manager.__bl++).toString(36);
var cR={handler:cP,context:self,unique:cW};
cS.push(cR);
return cT+L+cW;
},findHandler:function(a,b){var n=false,e=false,o=false;
var m;

if(a.nodeType===1){n=true;
m=V+a.tagName.toLowerCase()+I+b;
}else if(a==this.__be){e=true;
m=be+b;
}else if(a.classname){o=true;
m=T+a.classname+I+b;
}else{m=bf+a+I+b;
}var g=this.__bk;

if(g[m]){return g[m];
}var k=this.__bg.getHandlers();
var f=qx.event.IEventHandler;
var h,j,d,c;

for(var i=0,l=k.length;i<l;i++){h=k[i];
d=h.SUPPORTED_TYPES;

if(d&&!d[b]){continue;
}c=h.TARGET_CHECK;

if(c){if(!n&&c===f.TARGET_DOMNODE){continue;
}else if(!e&&c===f.TARGET_WINDOW){continue;
}else if(!o&&c===f.TARGET_OBJECT){continue;
}}j=this.getHandler(k[i]);

if(h.IGNORE_CAN_HANDLE||j.canHandleEvent(a,b)){g[m]=j;
return j;
}}return null;
},__bn:function(cv,cw,cx){var cy=this.findHandler(cv,cw);

if(cy){cy.registerEvent(cv,cw,cx);
return;
}
if(qx.core.Variant.isSet(P,O)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cw+"' on target '"+cv+"'!");
}},removeListener:function(cc,cd,ce,self,cf){if(qx.core.Variant.isSet(P,O)){var cj=R+cd+J+bn+cc.classname+K;
qx.core.Assert.assertObject(cc,cj+H);
qx.core.Assert.assertString(cd,cj+G);
qx.core.Assert.assertFunction(ce,cj+bm);

if(self!==undefined){qx.core.Assert.assertObject(self,bj);
}
if(cf!==undefined){qx.core.Assert.assertBoolean(cf,Y);
}}var ck=cc.$$hash||qx.core.ObjectRegistry.toHashCode(cc);
var cl=this.__bh[ck];

if(!cl){return false;
}var cg=cd+(cf?M:N);
var ch=cl[cg];

if(!ch){return false;
}var ci;

for(var i=0,l=ch.length;i<l;i++){ci=ch[i];

if(ci.handler===ce&&ci.context===self){qx.lang.Array.removeAt(ch,i);

if(ch.length==0){this.__bo(cc,cd,cf);
}return true;
}}return false;
},removeListenerById:function(cz,cA){if(qx.core.Variant.isSet(P,O)){var cG=bk+cA+J+bn+cz.classname+K;
qx.core.Assert.assertObject(cz,cG+H);
qx.core.Assert.assertString(cA,cG+bc);
}var cE=cA.split(L);
var cJ=cE[0];
var cB=cE[1].charCodeAt(0)==99;
var cI=cE[2];
var cH=cz.$$hash||qx.core.ObjectRegistry.toHashCode(cz);
var cK=this.__bh[cH];

if(!cK){return false;
}var cF=cJ+(cB?M:N);
var cD=cK[cF];

if(!cD){return false;
}var cC;

for(var i=0,l=cD.length;i<l;i++){cC=cD[i];

if(cC.unique===cI){qx.lang.Array.removeAt(cD,i);

if(cD.length==0){this.__bo(cz,cJ,cB);
}return true;
}}return false;
},removeAllListeners:function(bF){var bJ=bF.$$hash||qx.core.ObjectRegistry.toHashCode(bF);
var bL=this.__bh[bJ];

if(!bL){return false;
}var bH,bK,bG;

for(var bI in bL){if(bL[bI].length>0){bH=bI.split(L);
bK=bH[0];
bG=bH[1]===W;
this.__bo(bF,bK,bG);
}}delete this.__bh[bJ];
return true;
},__bo:function(bO,bP,bQ){var bR=this.findHandler(bO,bP);

if(bR){bR.unregisterEvent(bO,bP,bQ);
return;
}
if(qx.core.Variant.isSet(P,O)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bP+"' on target '"+bO+"'!");
}},dispatchEvent:function(bp,event){if(qx.core.Variant.isSet(P,O)){var bu=U+event+bb+bp.classname+K;
qx.core.Assert.assertNotUndefined(bp,bu+bo);
qx.core.Assert.assertNotNull(bp,bu+bo);
qx.core.Assert.assertInstance(event,qx.event.type.Event,bu+bd);
}var bv=event.getType();

if(!event.getBubbles()&&!this.hasListener(bp,bv)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bp);
}var bt=this.__bg.getDispatchers();
var bs;
var br=false;

for(var i=0,l=bt.length;i<l;i++){bs=this.getDispatcher(bt[i]);
if(bs.canDispatchEvent(bp,event,bv)){bs.dispatchEvent(bp,event,bv);
br=true;
break;
}}
if(!br){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bv+" on "+bp);
return true;
}var bq=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bq;
},dispose:function(){this.__bg.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,S);
qx.util.DisposeUtil.disposeMap(this,bg);
this.__bh=this.__be=this.__bm=null;
this.__bg=this.__bk=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.parentWindow;
},"default":function(p){if(p.nodeType==null){return p;
}if(p.nodeType!==this.DOCUMENT){p=p.ownerDocument;
}return p.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(m){return this.getDocument(m).body;
},isNode:function(c){return !!(c&&c.nodeType!=null);
},isElement:function(b){return !!(b&&b.nodeType===this.ELEMENT);
},isDocument:function(r){return !!(r&&r.nodeType===this.DOCUMENT);
},isText:function(o){return !!(o&&o.nodeType===this.TEXT);
},isWindow:function(s){return !!(s&&s.history&&s.location&&s.document);
},isNodeName:function(d,e){if(!e||!d||!d.nodeName){return false;
}return e.toLowerCase()==qx.dom.Node.getName(d);
},getName:function(q){if(!q||!q.nodeName){return null;
}return q.nodeName.toLowerCase();
},getText:function(f){if(!f||!f.nodeType){return null;
}
switch(f.nodeType){case 1:var i,a=[],g=f.childNodes,length=g.length;

for(i=0;i<length;i++){a[i]=this.getText(g[i]);
}return a.join(h);
case 2:return f.nodeValue;
break;
case 3:return f.nodeValue;
break;
}return null;
}}});
})();
(function(){var bt="qx.debug",bs="on",br="The second parameter must be an array.",bq="mshtml",bp="The first parameter must be an array.",bo="Parameter must be an array.",bn="qx.client",bm="[object Array]",bl="qx.lang.Array",bk="qx",bi="number",bj="string";
qx.Class.define(bl,{statics:{toArray:function(be,bf){return this.cast(be,Array,bf);
},cast:function(D,E,F){if(D.constructor===E){return D;
}
if(qx.Class.hasInterface(D,qx.data.IListData)){var D=D.toArray();
}var G=new E;
if(qx.core.Variant.isSet(bn,bq)){if(D.item){for(var i=F||0,l=D.length;i<l;i++){G.push(D[i]);
}return G;
}}if(Object.prototype.toString.call(D)===bm&&F==null){G.push.apply(G,D);
}else{G.push.apply(G,Array.prototype.slice.call(D,F||0));
}return G;
},fromArguments:function(bg,bh){return Array.prototype.slice.call(bg,bh||0);
},fromCollection:function(s){if(qx.core.Variant.isSet(bn,bq)){if(s.item){var t=[];

for(var i=0,l=s.length;i<l;i++){t[i]=s[i];
}return t;
}}return Array.prototype.slice.call(s,0);
},fromShortHand:function(u){var w=u.length;
var v=qx.lang.Array.clone(u);
switch(w){case 1:v[1]=v[2]=v[3]=v[0];
break;
case 2:v[2]=v[0];
case 3:v[3]=v[1];
}return v;
},clone:function(n){return n.concat();
},insertAt:function(bu,bv,i){bu.splice(i,0,bv);
return bu;
},insertBefore:function(j,k,m){var i=j.indexOf(m);

if(i==-1){j.push(k);
}else{j.splice(i,0,k);
}return j;
},insertAfter:function(bb,bc,bd){var i=bb.indexOf(bd);

if(i==-1||i==(bb.length-1)){bb.push(bc);
}else{bb.splice(i+1,0,bc);
}return bb;
},removeAt:function(A,i){return A.splice(i,1)[0];
},removeAll:function(a){a.length=0;
return this;
},append:function(e,f){if(qx.core.Variant.isSet(bt,bs)){qx.core.Assert&&qx.core.Assert.assertArray(e,bp);
qx.core.Assert&&qx.core.Assert.assertArray(f,br);
}Array.prototype.push.apply(e,f);
return e;
},exclude:function(o,p){if(qx.core.Variant.isSet(bt,bs)){qx.core.Assert&&qx.core.Assert.assertArray(o,bp);
qx.core.Assert&&qx.core.Assert.assertArray(p,br);
}
for(var i=0,r=p.length,q;i<r;i++){q=o.indexOf(p[i]);

if(q!=-1){o.splice(q,1);
}}return o;
},remove:function(g,h){var i=g.indexOf(h);

if(i!=-1){g.splice(i,1);
return h;
}},contains:function(B,C){return B.indexOf(C)!==-1;
},equals:function(b,c){var length=b.length;

if(length!==c.length){return false;
}
for(var i=0;i<length;i++){if(b[i]!==c[i]){return false;
}}return true;
},sum:function(X){var Y=0;

for(var i=0,l=X.length;i<l;i++){Y+=X[i];
}return Y;
},max:function(x){if(qx.core.Variant.isSet(bt,bs)){qx.core.Assert&&qx.core.Assert.assertArray(x,bo);
}var i,z=x.length,y=x[0];

for(i=1;i<z;i++){if(x[i]>y){y=x[i];
}}return y===undefined?null:y;
},min:function(U){if(qx.core.Variant.isSet(bt,bs)){qx.core.Assert&&qx.core.Assert.assertArray(U,bo);
}var i,W=U.length,V=U[0];

for(i=1;i<W;i++){if(U[i]<V){V=U[i];
}}return V===undefined?null:V;
},unique:function(H){var R=[],J={},M={},O={};
var N,I=0;
var S=bk+qx.lang.Date.now();
var K=false,Q=false,T=false;
for(var i=0,P=H.length;i<P;i++){N=H[i];
if(N===null){if(!K){K=true;
R.push(N);
}}else if(N===undefined){}else if(N===false){if(!Q){Q=true;
R.push(N);
}}else if(N===true){if(!T){T=true;
R.push(N);
}}else if(typeof N===bj){if(!J[N]){J[N]=1;
R.push(N);
}}else if(typeof N===bi){if(!M[N]){M[N]=1;
R.push(N);
}}else{L=N[S];

if(L==null){L=N[S]=I++;
}
if(!O[L]){O[L]=N;
R.push(N);
}}}for(var L in O){try{delete O[L][S];
}catch(ba){try{O[L][S]=null;
}catch(d){throw new Error("Cannot clean-up map entry doneObjects["+L+"]["+S+"]");
}}}return R;
}}});
})();
(function(){var C="()",B="qx.debug",A=".",z=".prototype.",y="on",x="Invalid parameter 'func'.",w='anonymous()',v="Trying to call a bound function with a disposed object as context: ",u=" :: ",t="qx.lang.Function",s=".constructor()";
qx.Class.define(t,{statics:{getCaller:function(H){return H.caller?H.caller.callee:H.callee.caller;
},getName:function(D){if(D.displayName){return D.displayName;
}
if(D.$$original||D.wrapper||D.classname){return D.classname+s;
}
if(D.$$mixin){for(var F in D.$$mixin.$$members){if(D.$$mixin.$$members[F]==D){return D.$$mixin.name+z+F+C;
}}for(var F in D.$$mixin){if(D.$$mixin[F]==D){return D.$$mixin.name+A+F+C;
}}}
if(D.self){var G=D.self.constructor;

if(G){for(var F in G.prototype){if(G.prototype[F]==D){return G.classname+z+F+C;
}}for(var F in G){if(G[F]==D){return G.classname+A+F+C;
}}}}var E=D.toString().match(/function\s*(\w*)\s*\(.*/);

if(E&&E.length>=1&&E[1]){return E[1]+C;
}return w;
},globalEval:function(r){if(window.execScript){return window.execScript(r);
}else{return eval.call(window,r);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(qx.core.Variant.isSet(B,y)){qx.core.Assert&&qx.core.Assert.assertFunction(m,x);
}if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){if(qx.core.Variant.isSet(B,y)){if(n.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(n.self.isDisposed(),v+n.self.toString()+u+qx.lang.Function.getName(m));
}}var h=qx.lang.Array.fromArguments(arguments);
if(n.args){h=n.args.concat(h);
}
if(n.delay||n.periodical){var g=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,h);
});

if(n.delay){return window.setTimeout(g,n.delay);
}
if(n.periodical){return window.setInterval(g,n.periodical);
}}else if(n.attempt){var i=false;

try{i=m.apply(n.self||this,h);
}catch(l){}return i;
}else{return m.apply(n.self||this,h);
}};
},bind:function(b,self,c){return this.create(b,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(I,J){return this.create(I,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(arguments.length<3){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,q);
o.apply(self||this,a);
};
}},attempt:function(j,self,k){return this.create(j,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(K,L,self,M){return this.create(K,{delay:L,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(d,e,self,f){return this.create(d,{periodical:e,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var D="qx.debug",C="on",B="Invalid event target.",A="Invalid event dispatcher!",z="': ",y="Invalid event handler.",x="' on target '",w="Could not fire event '",v="undefined",u="qx.event.Registration";
qx.Class.define(u,{statics:{__bp:{},getManager:function(l){if(l==null){if(qx.core.Variant.isSet(D,C)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}l=window;
}else if(l.nodeType){l=qx.dom.Node.getWindow(l);
}else if(!qx.dom.Node.isWindow(l)){l=window;
}var n=l.$$hash||qx.core.ObjectRegistry.toHashCode(l);
var m=this.__bp[n];

if(!m){m=new qx.event.Manager(l,this);
this.__bp[n]=m;
}return m;
},removeManager:function(R){var S=R.getWindowId();
delete this.__bp[S];
},addListener:function(N,O,P,self,Q){return this.getManager(N).addListener(N,O,P,self,Q);
},removeListener:function(h,i,j,self,k){return this.getManager(h).removeListener(h,i,j,self,k);
},removeListenerById:function(F,G){return this.getManager(F).removeListenerById(F,G);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(e,f,g){return this.getManager(e).hasListener(e,f,g);
},serializeListeners:function(d){return this.getManager(d).serializeListeners(d);
},createEvent:function(W,X,Y){if(qx.core.Variant.isSet(D,C)){if(arguments.length>1&&X===undefined){throw new Error("Create event of type "+W+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(X==null){X=qx.event.type.Event;
}var ba=qx.event.Pool.getInstance().getObject(X);

if(!ba){return;
}Y?ba.init.apply(ba,Y):ba.init();
if(W){ba.setType(W);
}return ba;
},dispatchEvent:function(V,event){return this.getManager(V).dispatchEvent(V,event);
},fireEvent:function(o,p,q,r){if(qx.core.Variant.isSet(D,C)){if(arguments.length>2&&q===undefined&&r!==undefined){throw new Error("Create event of type "+p+" with undefined class. Please use null to explicit fallback to default event type!");
}var s=w+p+x+(o?o.classname:v)+z;
qx.core.Assert.assertNotUndefined(o,s+B);
qx.core.Assert.assertNotNull(o,s+B);
}var t=this.createEvent(p,q||null,r);
return this.getManager(o).dispatchEvent(o,t);
},fireNonBubblingEvent:function(H,I,J,K){if(qx.core.Variant.isSet(D,C)){if(arguments.length>2&&J===undefined&&K!==undefined){throw new Error("Create event of type "+I+" with undefined class. Please use null to explicit fallback to default event type!");
}}var L=this.getManager(H);

if(!L.hasListener(H,I,false)){return true;
}var M=this.createEvent(I,J||null,K);
return L.dispatchEvent(H,M);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bq:[],addHandler:function(E){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertInterface(E,qx.event.IEventHandler,y);
}this.__bq.push(E);
this.__bq.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bq;
},__br:[],addDispatcher:function(T,U){if(qx.core.Variant.isSet(D,C)){qx.core.Assert.assertInterface(T,qx.event.IEventDispatcher,A);
}this.__br.push(T);
this.__br.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__br;
}}});
})();
(function(){var h="on",g="qx.debug",f="$$hash",e="qx.core.ObjectRegistry";
qx.Class.define(e,{statics:{inShutDown:false,__bs:{},__bt:0,__bu:[],register:function(u){var x=this.__bs;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__bu;

if(v.length>0){w=v.pop();
}else{w=(this.__bt++).toString(36);
}u.$$hash=w;
}
if(qx.core.Variant.isSet(g,h)){if(!u.dispose){throw new Error("Invalid object: "+u);
}}x[w]=u;
},unregister:function(r){var s=r.$$hash;

if(s==null){return;
}var t=this.__bs;

if(t&&t[s]){delete t[s];
this.__bu.push(s);
}try{delete r.$$hash;
}catch(c){if(r.removeAttribute){r.removeAttribute(f);
}}},toHashCode:function(z){if(qx.core.Variant.isSet(g,h)){if(z==null){throw new Error("Invalid object: "+z);
}}var B=z.$$hash;

if(B!=null){return B;
}var A=this.__bu;

if(A.length>0){B=A.pop();
}else{B=(this.__bt++).toString(36);
}return z.$$hash=B;
},clearHashCode:function(o){if(qx.core.Variant.isSet(g,h)){if(o==null){throw new Error("Invalid object: "+o);
}}var p=o.$$hash;

if(p!=null){this.__bu.push(p);
try{delete o.$$hash;
}catch(q){if(o.removeAttribute){o.removeAttribute(f);
}}}},fromHashCode:function(y){return this.__bs[y]||null;
},shutdown:function(){this.inShutDown=true;
var k=this.__bs;
var n=[];

for(var m in k){n.push(m);
}n.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var j,i=0,l=n.length;

while(true){try{for(;i<l;i++){m=n[i];
j=k[m];

if(j&&j.dispose){j.dispose();
}}}catch(d){qx.Bootstrap.error(this,"Could not dispose object "+j.toString()+": "+d);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bs;
},getRegistry:function(){return this.__bs;
}}});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(h){return this.getClass(h)==e;
},isNumber:function(a){return (a!==null&&(this.getClass(a)==c||a instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==b||i instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==d||k instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var cD="",cC="!",cB="'!",cA="'",cz="Expected '",cy="' (rgb(",cx=",",cw=")), but found value '",cv="Event (",cu="Expected value to be the CSS color '",dK="' but found ",dJ="The value '",dI="qx.core.Object",dH="Expected value to be an array but found ",dG=") was fired.",dF="Expected value to be an integer >= 0 but found ",dE="' to be not equal with '",dD="' to '",dC="qx.ui.core.Widget",dB="Called assertTrue with '",cK="Expected value to be a map but found ",cL="The function did not raise an exception!",cI="Expected value to be undefined but found ",cJ="Expected value to be a DOM element but found  '",cG="Expected value to be a regular expression but found ",cH="' to implement the interface '",cE="Expected value to be null but found ",cF="Invalid argument 'type'",cS="Called assert with 'false'",cT="Assertion error! ",dg="Expected value to be a string but found ",dc="null",dp="' but found '",dj="' must must be a key of the map '",dx="The String '",du="Expected value not to be undefined but found ",cX="qx.util.ColorUtil",dA=": ",dz="The raised exception does not have the expected type! ",dy=") not fired.",cW="qx.core.Assert",da="Expected value to be typeof object but found ",db="' (identical) but found '",de="' must have any of the values defined in the array '",dh="Expected value to be a number but found ",dk="Called assertFalse with '",dr="]",dw="Expected value to be a qooxdoo object but found ",cM="' arguments.",cN="Expected value not to be null but found ",cY="Array[",dn="' does not match the regular expression '",dm="' to be not identical with '",dl="' arguments but found '",dt="', which cannot be converted to a CSS color!",ds="Expected object '",di="qx.core.AssertionError",dq="Expected value to be a boolean but found ",cr="))!",dv="Expected value to be a qooxdoo widget but found ",cO="Expected value '%1' to be in the range '%2'..'%3'!",cP="Expected value to be typeof '",dd="Expected value to be typeof function but found ",cs="Expected value to be an integer but found ",ct="Called fail().",cV="The parameter 're' must be a string or a regular expression.",cQ="Expected value to be a number >= 0 but found ",cR="Expected value to be instanceof '",cU="Wrong number of arguments given. Expected '",df="object";
qx.Class.define(cW,{statics:{__bv:true,__bw:function(bY,ca){var cb=cD;

for(var i=1,l=arguments.length;i<l;i++){cb=cb+this.__bx(arguments[i]);
}var cd=cT+bY+dA+cb;

if(this.__bv){qx.Bootstrap.error(cd);
}
if(qx.Class.isDefined(di)){var cc=new qx.core.AssertionError(bY,cb);

if(this.__bv){qx.Bootstrap.error("Stack trace: \n"+cc.getStackTrace());
}throw cc;
}else{throw new Error(cd);
}},__bx:function(bW){var bX;

if(bW===null){bX=dc;
}else if(qx.lang.Type.isArray(bW)&&bW.length>10){bX=cY+bW.length+dr;
}else if((bW instanceof Object)&&(bW.toString==null)){bX=qx.lang.Json.stringify(bW,null,2);
}else{try{bX=bW.toString();
}catch(e){bX=cD;
}}return bX;
},assert:function(M,N){M==true||this.__bw(N||cD,cS);
},fail:function(dQ){this.__bw(dQ||cD,ct);
},assertTrue:function(dO,dP){(dO===true)||this.__bw(dP||cD,dB,dO,cA);
},assertFalse:function(x,y){(x===false)||this.__bw(y||cD,dk,x,cA);
},assertEquals:function(bK,bL,bM){bK==bL||this.__bw(bM||cD,cz,bK,dp,bL,cB);
},assertNotEquals:function(bd,be,bf){bd!=be||this.__bw(bf||cD,cz,bd,dE,be,cB);
},assertIdentical:function(bp,bq,br){bp===bq||this.__bw(br||cD,cz,bp,db,bq,cB);
},assertNotIdentical:function(dL,dM,dN){dL!==dM||this.__bw(dN||cD,cz,dL,dm,dM,cB);
},assertNotUndefined:function(bg,bh){bg!==undefined||this.__bw(bh||cD,du,bg,cC);
},assertUndefined:function(T,U){T===undefined||this.__bw(U||cD,cI,T,cC);
},assertNotNull:function(P,Q){P!==null||this.__bw(Q||cD,cN,P,cC);
},assertNull:function(s,t){s===null||this.__bw(t||cD,cE,s,cC);
},assertJsonEquals:function(ce,cf,cg){this.assertEquals(qx.lang.Json.stringify(ce),qx.lang.Json.stringify(cf),cg);
},assertMatch:function(bQ,bR,bS){this.assertString(bQ);
this.assert(qx.lang.Type.isRegExp(bR)||qx.lang.Type.isString(bR),cV);
bQ.search(bR)>=0||this.__bw(bS||cD,dx,bQ,dn,bR.toString(),cB);
},assertArgumentsCount:function(dS,dT,dU,dV){var dW=dS.length;
(dW>=dT&&dW<=dU)||this.__bw(dV||cD,cU,dT,dD,dU,dl,arguments.length,cM);
},assertEventFired:function(F,event,G,H,I){var K=false;
var J=function(e){if(H){H.call(F,e);
}K=true;
};
var L=F.addListener(event,J,F);
G.call();
K===true||this.__bw(I||cD,cv,event,dy);
F.removeListenerById(L);
},assertEventNotFired:function(d,event,f,g){var j=false;
var h=function(e){j=true;
};
var k=d.addListener(event,h,d);
f.call();
j===false||this.__bw(g||cD,cv,event,dG);
d.removeListenerById(k);
},assertException:function(V,W,X,Y){var W=W||Error;
var ba;

try{this.__bv=false;
V();
}catch(O){ba=O;
}finally{this.__bv=true;
}
if(ba==null){this.__bw(Y||cD,cL);
}ba instanceof W||this.__bw(Y||cD,dz,W);

if(X){this.assertMatch(ba.toString(),X,Y);
}},assertInArray:function(bN,bO,bP){bO.indexOf(bN)!==-1||this.__bw(bP||cD,dJ,bN,de,bO,cA);
},assertArrayEquals:function(bk,bl,bm){this.assertArray(bk,bm);
this.assertArray(bl,bm);
this.assertEquals(bk.length,bl.length,bm);

for(var i=0;i<bk.length;i++){this.assertIdentical(bk[i],bl[i],bm);
}},assertKeyInMap:function(u,v,w){v[u]!==undefined||this.__bw(w||cD,dJ,u,dj,v,cA);
},assertFunction:function(bb,bc){qx.lang.Type.isFunction(bb)||this.__bw(bc||cD,dd,bb,cC);
},assertString:function(bi,bj){qx.lang.Type.isString(bi)||this.__bw(bj||cD,dg,bi,cC);
},assertBoolean:function(bn,bo){qx.lang.Type.isBoolean(bn)||this.__bw(bo||cD,dq,bn,cC);
},assertNumber:function(cl,cm){(qx.lang.Type.isNumber(cl)&&isFinite(cl))||this.__bw(cm||cD,dh,cl,cC);
},assertPositiveNumber:function(cp,cq){(qx.lang.Type.isNumber(cp)&&isFinite(cp)&&cp>=0)||this.__bw(cq||cD,cQ,cp,cC);
},assertInteger:function(bI,bJ){(qx.lang.Type.isNumber(bI)&&isFinite(bI)&&bI%1===0)||this.__bw(bJ||cD,cs,bI,cC);
},assertPositiveInteger:function(p,q){var r=(qx.lang.Type.isNumber(p)&&isFinite(p)&&p%1===0&&p>=0);
r||this.__bw(q||cD,dF,p,cC);
},assertInRange:function(bE,bF,bG,bH){(bE>=bF&&bE<=bG)||this.__bw(bH||cD,qx.lang.String.format(cO,[bE,bF,bG]));
},assertObject:function(m,n){var o=m!==null&&(qx.lang.Type.isObject(m)||typeof m===df);
o||this.__bw(n||cD,da,(m),cC);
},assertArray:function(z,A){qx.lang.Type.isArray(z)||this.__bw(A||cD,dH,z,cC);
},assertMap:function(ch,ci){qx.lang.Type.isObject(ch)||this.__bw(ci||cD,cK,ch,cC);
},assertRegExp:function(cn,co){qx.lang.Type.isRegExp(cn)||this.__bw(co||cD,cG,cn,cC);
},assertType:function(bs,bt,bu){this.assertString(bt,cF);
typeof (bs)===bt||this.__bw(bu||cD,cP,bt,dK,bs,cC);
},assertInstance:function(B,C,D){var E=C.classname||C+cD;
B instanceof C||this.__bw(D||cD,cR,E,dK,B,cC);
},assertInterface:function(a,b,c){qx.Class.implementsInterface(a,b)||this.__bw(c||cD,ds,a,cH,b,cB);
},assertCssColor:function(bv,bw,bx){var by=qx.Class.getByName(cX);

if(!by){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bA=by.stringToRgb(bv);

try{var bz=by.stringToRgb(bw);
}catch(dR){this.__bw(bx||cD,cu,bv,cy,bA.join(cx),cw,bw,dt);
}var bB=bA[0]==bz[0]&&bA[1]==bz[1]&&bA[2]==bz[2];
bB||this.__bw(bx||cD,cu,bA,cy,bA.join(cx),cw,bw,cy,bz.join(cx),cr);
},assertElement:function(cj,ck){!!(cj&&cj.nodeType===1)||this.__bw(ck||cD,cJ,cj,cB);
},assertQxObject:function(bC,bD){this.__by(bC,dI)||this.__bw(bD||cD,dw,bC,cC);
},assertQxWidget:function(R,S){this.__by(R,dC)||this.__bw(S||cD,dv,R,cC);
},__by:function(bT,bU){if(!bT){return false;
}var bV=bT.constructor;

while(bV){if(bV.classname===bU){return true;
}bV=bV.superclass;
}return false;
}}});
})();
(function(){var bc="qx.core.MAssert";
qx.Mixin.define(bc,{members:{assert:function(U,V){qx.core.Assert.assert(U,V);
},fail:function(bw){qx.core.Assert.fail(bw);
},assertTrue:function(x,y){qx.core.Assert.assertTrue(x,y);
},assertFalse:function(bV,bW){qx.core.Assert.assertFalse(bV,bW);
},assertEquals:function(bt,bu,bv){qx.core.Assert.assertEquals(bt,bu,bv);
},assertNotEquals:function(D,E,F){qx.core.Assert.assertNotEquals(D,E,F);
},assertIdentical:function(p,q,r){qx.core.Assert.assertIdentical(p,q,r);
},assertNotIdentical:function(m,n,o){qx.core.Assert.assertNotIdentical(m,n,o);
},assertNotUndefined:function(s,t){qx.core.Assert.assertNotUndefined(s,t);
},assertUndefined:function(bJ,bK){qx.core.Assert.assertUndefined(bJ,bK);
},assertNotNull:function(bX,bY){qx.core.Assert.assertNotNull(bX,bY);
},assertNull:function(bT,bU){qx.core.Assert.assertNull(bT,bU);
},assertJsonEquals:function(N,O,P){qx.core.Assert.assertJsonEquals(N,O,P);
},assertMatch:function(u,v,w){qx.core.Assert.assertMatch(u,v,w);
},assertArgumentsCount:function(bN,bO,bP,bQ){qx.core.Assert.assertArgumentsCount(bN,bO,bP,bQ);
},assertEventFired:function(Q,event,R,S,T){qx.core.Assert.assertEventFired(Q,event,R,S,T);
},assertEventNotFired:function(bo,event,bp,bq){qx.core.Assert.assertEventNotFired(bo,event,bp,bq);
},assertException:function(bi,bj,bk,bl){qx.core.Assert.assertException(bi,bj,bk,bl);
},assertInArray:function(j,k,l){qx.core.Assert.assertInArray(j,k,l);
},assertArrayEquals:function(bf,bg,bh){qx.core.Assert.assertArrayEquals(bf,bg,bh);
},assertKeyInMap:function(W,X,Y){qx.core.Assert.assertKeyInMap(W,X,Y);
},assertFunction:function(B,C){qx.core.Assert.assertFunction(B,C);
},assertString:function(z,A){qx.core.Assert.assertString(z,A);
},assertBoolean:function(bA,bB){qx.core.Assert.assertBoolean(bA,bB);
},assertNumber:function(bF,bG){qx.core.Assert.assertNumber(bF,bG);
},assertPositiveNumber:function(br,bs){qx.core.Assert.assertPositiveNumber(br,bs);
},assertInteger:function(h,i){qx.core.Assert.assertInteger(h,i);
},assertPositiveInteger:function(L,M){qx.core.Assert.assertPositiveInteger(L,M);
},assertInRange:function(d,e,f,g){qx.core.Assert.assertInRange(d,e,f,g);
},assertObject:function(bR,bS){qx.core.Assert.assertObject(bR,bS);
},assertArray:function(bL,bM){qx.core.Assert.assertArray(bL,bM);
},assertMap:function(ba,bb){qx.core.Assert.assertMap(ba,bb);
},assertRegExp:function(bm,bn){qx.core.Assert.assertRegExp(bm,bn);
},assertType:function(bC,bD,bE){qx.core.Assert.assertType(bC,bD,bE);
},assertInstance:function(a,b,c){qx.core.Assert.assertInstance(a,b,c);
},assertInterface:function(bx,by,bz){qx.core.Assert.assertInterface(bx,by,bz);
},assertCssColor:function(I,J,K){qx.core.Assert.assertCssColor(I,J,K);
},assertElement:function(G,H){qx.core.Assert.assertElement(G,H);
},assertQxObject:function(bH,bI){qx.core.Assert.assertQxObject(bH,bI);
},assertQxWidget:function(bd,be){qx.core.Assert.assertQxWidget(bd,be);
}}});
})();
(function(){var e="qx.data.MBinding";
qx.Mixin.define(e,{members:{bind:function(a,b,c,d){return qx.data.SingleValueBinding.bind(this,a,b,c,d);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(c){this.__bz=[];
this.setMaxMessages(c||50);
},members:{__bA:0,__bz:null,__bB:50,setMaxMessages:function(b){this.__bB=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bB;
},process:function(h){var i=this.getMaxMessages();

if(this.__bz.length<i){this.__bz.push(h);
}else{this.__bz[this.__bA++]=h;

if(this.__bA>=i){this.__bA=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(d){if(d>this.__bz.length){d=this.__bz.length;
}
if(this.__bz.length==this.getMaxMessages()){var f=this.__bA-1;
}else{f=this.__bz.length-1;
}var e=f-d+1;

if(e<0){e+=this.__bz.length;
}var g;

if(e<=f){g=this.__bz.slice(e,f+1);
}else{g=this.__bz.slice(e,this.__bz.length).concat(this.__bz.slice(0,f+1));
}return g;
},clearHistory:function(){this.__bz=[];
this.__bA=0;
}}});
})();
(function(){var bk="qx.debug",bj="unknown",bi="on",bh="node",bg="error",bf="...(+",be="array",bd=")",bc="info",bb="instance",bH="string",bG="null",bF="class",bE="number",bD="stringify",bC="]",bB="function",bA="boolean",bz="debug",by="map",br="undefined",bs="qx.log.Logger",bp=")}",bq="#",bn="warn",bo="document",bl="{...(",bm="[",bt="text[",bu="[...(",bw="\n",bv=")]",bx="object";
qx.Class.define(bs,{statics:{__bC:bz,setLevel:function(P){this.__bC=P;
},getLevel:function(){return this.__bC;
},setTreshold:function(G){this.__bF.setMaxMessages(G);
},getTreshold:function(){return this.__bF.getMaxMessages();
},__bD:{},__bE:0,register:function(V){if(V.$$id){return;
}var W=this.__bE++;
this.__bD[W]=V;
V.$$id=W;
var X=this.__bF.getAllLogEvents();

for(var i=0,l=X.length;i<l;i++){V.process(X[i]);
}},unregister:function(E){var F=E.$$id;

if(F==null){return;
}delete this.__bD[F];
delete E.$$id;
},debug:function(A,B){qx.log.Logger.__bH(bz,arguments);
},info:function(p,q){qx.log.Logger.__bH(bc,arguments);
},warn:function(H,I){qx.log.Logger.__bH(bn,arguments);
},error:function(Y,ba){qx.log.Logger.__bH(bg,arguments);
},trace:function(U){qx.log.Logger.__bH(bc,[U,qx.dev.StackTrace.getStackTrace().join(bw)]);
},deprecatedMethodWarning:function(M,N){if(qx.core.Variant.isSet(bk,bi)){var O=qx.lang.Function.getName(M);
this.warn("The method '"+O+"' is deprecated: "+(N||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(J,K){if(qx.core.Variant.isSet(bk,bi)){var L=J.classname||bj;
this.warn("The class '"+L+"' is deprecated: "+(K||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(bI,event,bJ){if(qx.core.Variant.isSet(bk,bi)){var bK=bI.self?bI.self.classname:bj;
this.warn("The event '"+(event||"unknown")+"' from class '"+bK+"' is deprecated: "+(bJ||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(a,b){if(qx.core.Variant.isSet(bk,bi)){var c=a?a.name:bj;
this.warn("The mixin '"+c+"' is deprecated: "+(b||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(Q,R,S){if(qx.core.Variant.isSet(bk,bi)){if(Q.__defineGetter__){var self=this;
var T=Q[R];
Q.__defineGetter__(R,function(){self.warn("The constant '"+R+"' is deprecated: "+(S||"Please consult the API documentation for alternatives."));
self.trace();
return T;
});
}}},clear:function(){this.__bF.clearHistory();
},__bF:new qx.log.appender.RingBuffer(50),__bG:{debug:0,info:1,warn:2,error:3},__bH:function(d,e){var k=this.__bG;

if(k[d]<k[this.__bC]){return;
}var g=e.length<2?null:e[0];
var j=g?1:0;
var f=[];

for(var i=j,l=e.length;i<l;i++){f.push(this.__bJ(e[i],true));
}var m=new Date;
var n={time:m,offset:m-qx.Bootstrap.LOADSTART,level:d,items:f,win:window};
if(g){if(g instanceof qx.core.Object){n.object=g.$$hash;
}else if(g.$$type){n.clazz=g;
}}this.__bF.process(n);
var o=this.__bD;

for(var h in o){o[h].process(n);
}},__bI:function(bL){if(bL===undefined){return br;
}else if(bL===null){return bG;
}
if(bL.$$type){return bF;
}var bM=typeof bL;

if(bM===bB||bM==bH||bM===bE||bM===bA){return bM;
}else if(bM===bx){if(bL.nodeType){return bh;
}else if(bL.classname){return bb;
}else if(bL instanceof Array){return be;
}else if(bL instanceof Error){return bg;
}else{return by;
}}
if(bL.toString){return bD;
}return bj;
},__bJ:function(r,s){var z=this.__bI(r);
var v=bj;
var u=[];

switch(z){case bG:case br:v=z;
break;
case bH:case bE:case bA:v=r;
break;
case bh:if(r.nodeType===9){v=bo;
}else if(r.nodeType===3){v=bt+r.nodeValue+bC;
}else if(r.nodeType===1){v=r.nodeName.toLowerCase();

if(r.id){v+=bq+r.id;
}}else{v=bh;
}break;
case bB:v=qx.lang.Function.getName(r)||z;
break;
case bb:v=r.basename+bm+r.$$hash+bC;
break;
case bF:case bD:v=r.toString();
break;
case bg:u=qx.dev.StackTrace.getStackTraceFromError(r);
v=r.toString();
break;
case be:if(s){v=[];

for(var i=0,l=r.length;i<l;i++){if(v.length>20){v.push(bf+(l-i)+bd);
break;
}v.push(this.__bJ(r[i],false));
}}else{v=bu+r.length+bv;
}break;
case by:if(s){var t;
var y=[];

for(var x in r){y.push(x);
}y.sort();
v=[];

for(var i=0,l=y.length;i<l;i++){if(v.length>20){v.push(bf+(l-i)+bd);
break;
}x=y[i];
t=this.__bJ(r[x],false);
t.key=x;
v.push(t);
}}else{var w=0;

for(var x in r){w++;
}v=bl+w+bp;
}break;
}return {type:z,text:v,trace:u};
}},defer:function(C){var D=qx.Bootstrap.$$logs;

for(var i=0;i<D.length;i++){this.__bH(D[i][0],D[i][1]);
}qx.Bootstrap.debug=C.debug;
qx.Bootstrap.info=C.info;
qx.Bootstrap.warn=C.warn;
qx.Bootstrap.error=C.error;
qx.Bootstrap.trace=C.trace;
}});
})();
(function(){var bD="qx.debug",bC="on",bB="set",bA="qx.disposerDebugLevel",bz="get",by="reset",bx="qx.core.Object",bw="]",bv="[",bu="$$user_",bs="object",bt="Object";
qx.Class.define(bx,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bt},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bv+this.$$hash+bw;
},base:function(q,r){if(qx.core.Variant.isSet(bD,bC)){if(!qx.Bootstrap.isFunction(q.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+q.callee.displayName);
}}
if(arguments.length===1){return q.callee.base.call(this);
}else{return q.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(ba){return ba.callee.self;
},clone:function(){var bh=this.constructor;
var bg=new bh;
var bj=qx.Class.getProperties(bh);
var bi=qx.core.Property.$$store.user;
var bk=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bj.length;i<l;i++){name=bj[i];

if(this.hasOwnProperty(bi[name])){bg[bk[name]](this[bi[name]]);
}}return bg;
},set:function(V,W){var Y=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(V)){if(!this[Y[V]]){if(this[bB+qx.Bootstrap.firstUp(V)]!=undefined){this[bB+qx.Bootstrap.firstUp(V)](W);
return;
}
if(qx.core.Variant.isSet(bD,bC)){qx.Bootstrap.error("No such property: "+V);
return this;
}}return this[Y[V]](W);
}else{for(var X in V){if(!this[Y[X]]){if(this[bB+qx.Bootstrap.firstUp(X)]!=undefined){this[bB+qx.Bootstrap.firstUp(X)](V[X]);
continue;
}
if(qx.core.Variant.isSet(bD,bC)){qx.Bootstrap.error("No such property: "+X);
return this;
}}this[Y[X]](V[X]);
}return this;
}},get:function(d){var f=qx.core.Property.$$method.get;

if(!this[f[d]]){if(this[bz+qx.Bootstrap.firstUp(d)]!=undefined){return this[bz+qx.Bootstrap.firstUp(d)]();
}
if(qx.core.Variant.isSet(bD,bC)){qx.Bootstrap.error("No such property: "+d);
return this;
}}return this[f[d]]();
},reset:function(b){var c=qx.core.Property.$$method.reset;

if(!this[c[b]]){if(this[by+qx.Bootstrap.firstUp(b)]!=undefined){this[by+qx.Bootstrap.firstUp(b)]();
return;
}
if(qx.core.Variant.isSet(bD,bC)){qx.Bootstrap.error("No such property: "+b);
return this;
}}this[c[b]]();
},__bK:qx.event.Registration,addListener:function(F,G,self,H){if(!this.$$disposed){return this.__bK.addListener(this,F,G,self,H);
}return null;
},addListenerOnce:function(B,C,self,D){var E=function(e){C.call(self||this,e);
this.removeListener(B,E,this,D);
};
return this.addListener(B,E,this,D);
},removeListener:function(bb,bc,self,bd){if(!this.$$disposed){return this.__bK.removeListener(this,bb,bc,self,bd);
}return false;
},removeListenerById:function(I){if(!this.$$disposed){return this.__bK.removeListenerById(this,I);
}return false;
},hasListener:function(J,K){return this.__bK.hasListener(this,J,K);
},dispatchEvent:function(T){if(!this.$$disposed){return this.__bK.dispatchEvent(this,T);
}return true;
},fireEvent:function(bn,bo,bp){if(!this.$$disposed){return this.__bK.fireEvent(this,bn,bo,bp);
}return true;
},fireNonBubblingEvent:function(Q,R,S){if(!this.$$disposed){return this.__bK.fireNonBubblingEvent(this,Q,R,S);
}return true;
},fireDataEvent:function(h,j,k,m){if(!this.$$disposed){if(k===undefined){k=null;
}return this.__bK.fireNonBubblingEvent(this,h,qx.event.type.Data,[j,k,!!m]);
}return true;
},__bL:null,setUserData:function(o,p){if(!this.__bL){this.__bL={};
}this.__bL[o]=p;
},getUserData:function(bl){if(!this.__bL){return null;
}var bm=this.__bL[bl];
return bm===undefined?null:bm;
},__bM:qx.log.Logger,debug:function(br){this.__bM.debug(this,br);
},info:function(be){this.__bM.info(this,be);
},warn:function(g){this.__bM.warn(this,g);
},error:function(n){this.__bM.error(this,n);
},trace:function(){this.__bM.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bD,bC)){if(qx.core.Setting.get(bA)>1){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var N=this.constructor;
var L;

while(N.superclass){if(N.$$destructor){N.$$destructor.call(this);
}if(N.$$includes){L=N.$$flatIncludes;

for(var i=0,l=L.length;i<l;i++){if(L[i].$$destructor){L[i].$$destructor.call(this);
}}}N=N.superclass;
}var P=qx.Class.getProperties(this.constructor);

for(var i=0,l=P.length;i<l;i++){delete this[bu+P[i]];
}if(qx.core.Variant.isSet(bD,bC)){if(qx.core.Setting.get(bA)>0){var O,M;

for(O in this){M=this[O];
if(M!==null&&typeof M===bs&&!(qx.Bootstrap.isString(M))){if(this.constructor.prototype[O]!=null){continue;
}qx.Bootstrap.warn(this,"Missing destruct definition for '"+O+"' in "+this.classname+"["+this.toHashCode()+"]: "+M);
delete this[O];
}}}}},_disposeFields:function(bf){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(s){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(a){qx.util.DisposeUtil.disposeArray(this,a);
},_disposeMap:function(bq){qx.util.DisposeUtil.disposeMap(this,bq);
}},settings:{"qx.disposerDebugLevel":0},defer:function(U){if(qx.core.Variant.isSet(bD,bC)){qx.Class.include(U,qx.core.MAssert);
}},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bL=null;
var v=this.constructor;
var z;
var A=qx.core.Property.$$store;
var x=A.user;
var y=A.theme;
var t=A.inherit;
var w=A.useinit;
var u=A.init;

while(v){z=v.$$properties;

if(z){for(var name in z){if(z[name].dispose){this[x[name]]=this[y[name]]=this[t[name]]=this[w[name]]=this[u[name]]=undefined;
}}}v=v.superclass;
}}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(j,k){this.__bN=j||null;
this.__bO=k||window;

if(qx.core.Setting.get(f)===e){if(j&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__bP,this);
}
if(!j&&window.onerror){window.onerror=null;
}}},__bP:function(g,h,i){if(this.__bN){this.handleError(new qx.core.WindowError(g,h,i));
return true;
}},observeMethod:function(a){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__bN){return a.apply(this,arguments);
}
try{return a.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return a;
}},handleError:function(c){if(this.__bN){this.__bN.call(this.__bO,c);
}}},defer:function(b){qx.core.Setting.define(f,e);
b.setErrorHandler(null,null);
}});
})();
(function(){var p="ready",o="qx.client",n="mshtml",m="load",l="unload",k="qx.event.handler.Application",j="complete",i="gecko|opera|webkit",h="left",g="DOMContentLoaded",f="shutdown";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(y){arguments.callee.base.call(this);
this._window=y.getWindow();
this.__bQ=false;
this.__bR=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__bS:false,onScriptLoaded:function(){this.__bS=true;
var a=qx.event.handler.Application.$$instance;

if(a){a.__bV();
}}},members:{canHandleEvent:function(u,v){},registerEvent:function(b,c,d){},unregisterEvent:function(r,s,t){},__bT:null,__bQ:null,__bR:null,__bU:null,__bV:function(){var w=qx.event.handler.Application;
if(!this.__bT&&this.__bQ&&w.__bS){if(qx.core.Variant.isSet(o,n)){if(qx.event.Registration.hasListener(this._window,p)){this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}else{this.__bT=true;
qx.event.Registration.fireEvent(this._window,p);
}}},isApplicationReady:function(){return this.__bT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==j){this.__bQ=true;
this.__bV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(o,i)){qx.bom.Event.addNativeListener(this._window,g,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(o,n)){var self=this;
var x=function(){try{document.documentElement.doScroll(h);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(x,100);
}};
x();
}qx.bom.Event.addNativeListener(this._window,m,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,l,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,m,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,l,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__bQ=true;
this.__bV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__bU){this.__bU=true;

try{qx.event.Registration.fireEvent(this._window,f);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(q){qx.event.Registration.addHandler(q);
}});
})();
(function(){var h="qx.event.handler.Window";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){arguments.callee.base.call(this);
this._manager=c;
this._window=c.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(n,o,p){},unregisterEvent:function(d,f,g){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var k=qx.event.handler.Window.SUPPORTED_TYPES;

for(var j in k){qx.bom.Event.removeNativeListener(this._window,j,this._onNativeWrapper);
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
},defer:function(i){qx.event.Registration.addHandler(i);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var k="on",j="qx.debug",h="qx.event.dispatch.Direct";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(g){this._manager=g;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(n,event,o){return !event.getBubbles();
},dispatchEvent:function(a,event,b){if(qx.core.Variant.isSet(j,k)){if(a instanceof qx.core.Object){var e=qx.Class.getEventType(a.constructor,b);
var c=qx.Class.getByName(e);

if(!c){this.error("The event type '"+b+"' declared in the class '"+a.constructor+" is not an available class': "+e);
}else if(!(event instanceof c)){this.error("Expected event type to be instanceof '"+e+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__bX||null;
},__bW:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__bX=new j;
var h=new Date;
this.__bX.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__bX.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__bY:function(e){var g=this.__bX;

if(g){e.setReturnValue(g.close());
}},__ca:function(){var l=this.__bX;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__bW,k);
qx.event.Registration.addListener(window,a,k.__ca,k);
qx.event.Registration.addListener(window,c,k.__bY,k);
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
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var c="abstract",b="qx.application.AbstractGui";
qx.Class.define(b,{type:c,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__cb:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__cb;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__cb=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(a){},terminate:function(){}},destruct:function(){this.__cb=null;
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
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cc:function(){this.QUIRKS_MODE=this.__cd();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cd:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cc();
}});
})();
(function(){var x="qx.debug",w="on",v="Invalid argument 'map'",u="Invalid argument 'minLength'",t="Invalid argument 'source'",s="Invalid argument 'target'",r="function",q="Invalid argument 'array'",p="qx.lang.Object",o="undefined",n="object";
qx.Class.define(p,{statics:{empty:function(A){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(A,v);
}
for(var B in A){if(A.hasOwnProperty(B)){delete A[B];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(h){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(h,v);
}return h.__count__===0;
}:
function(M){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(M,v);
}
for(var N in M){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(y,z){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(y,v);
qx.core.Assert&&qx.core.Assert.assertInteger(z,u);
}return y.__count__>=z;
}:
function(R,S){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(R,v);
qx.core.Assert&&qx.core.Assert.assertInteger(S,u);
}
if(S<=0){return true;
}var length=0;

for(var T in R){if((++length)>=S){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(H){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(H,v);
}var J=[];
var I=this.getKeys(H);

for(var i=0,l=I.length;i<l;i++){J.push(H[I[i]]);
}return J;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(a,b){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(a,s);
qx.core.Assert&&qx.core.Assert.assertMap(b,t);
}return qx.lang.Object.mergeWith(a,b,false);
},merge:function(c,d){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(c,s);
}var e=arguments.length;

for(var i=1;i<e;i++){qx.lang.Object.mergeWith(c,arguments[i]);
}return c;
},clone:function(C){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(C,t);
}var D={};

for(var E in C){D[E]=C[E];
}return D;
},invert:function(O){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(O,v);
}var P={};

for(var Q in O){P[O[Q].toString()]=Q;
}return P;
},getKeyFromValue:function(j,k){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(j,v);
}
for(var m in j){if(j.hasOwnProperty(m)&&j[m]===k){return m;
}}return null;
},contains:function(K,L){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(K,v);
}return this.getKeyFromValue(K,L)!==null;
},select:function(F,G){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertMap(G,v);
}return G[F];
},fromArray:function(f){if(qx.core.Variant.isSet(x,w)){qx.core.Assert&&qx.core.Assert.assertArray(f,q);
}var g={};

for(var i=0,l=f.length;i<l;i++){if(qx.core.Variant.isSet(x,w)){switch(typeof f[i]){case n:case r:case o:throw new Error("Could not convert complex objects like "+f[i]+" at array index "+i+" to map syntax");
}}g[f[i].toString()]=true;
}return g;
}}});
})();
(function(){var o="emulated",n="native",m='"',k="qx.lang.Core",j="\\\\",h="\\\"",g="[object Error]";
qx.Class.define(k,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==g)?o:n,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?n:o,{"native":Array.prototype.indexOf,"emulated":function(C,D){if(D==null){D=0;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i<this.length;i++){if(this[i]===C){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?n:o,{"native":Array.prototype.lastIndexOf,"emulated":function(A,B){if(B==null){B=this.length-1;
}else if(B<0){B=Math.max(0,this.length+B);
}
for(var i=B;i>=0;i--){if(this[i]===A){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?n:o,{"native":Array.prototype.forEach,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){d.call(e||window,f,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?n:o,{"native":Array.prototype.filter,"emulated":function(p,q){var r=[];
var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){if(p.call(q||window,s,i,this)){r.push(this[i]);
}}}return r;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?n:o,{"native":Array.prototype.map,"emulated":function(w,x){var y=[];
var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){y[i]=w.call(x||window,z,i,this);
}}return y;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?n:o,{"native":Array.prototype.some,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(a.call(b||window,c,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?n:o,{"native":Array.prototype.every,"emulated":function(t,u){var l=this.length;

for(var i=0;i<l;i++){var v=this[i];

if(v!==undefined){if(!t.call(u||window,v,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?n:o,{"native":String.prototype.quote,"emulated":function(){return m+this.replace(/\\/g,j).replace(/\"/g,h)+m;
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
this.__ce=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__ce:null,message:null,getComment:function(){return this.__ce;
},toString:function(){return this.__ce+c+this.message;
}}});
})();
(function(){var c="qx.core.AssertionError";
qx.Class.define(c,{extend:qx.type.BaseError,construct:function(a,b){qx.type.BaseError.call(this,a,b);
this.__cf=qx.dev.StackTrace.getStackTrace();
},members:{__cf:null,getStackTrace:function(){return this.__cf;
}}});
})();
(function(){var p=":",o="qx.client",n="anonymous",m="...",l="qx.dev.StackTrace",k="",j="\n",h="/source/class/",g=".";
qx.Class.define(l,{statics:{getStackTrace:qx.core.Variant.select(o,{"gecko":function(){try{throw new Error();
}catch(a){var x=this.getStackTraceFromError(a);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(n)>=0){continue;
}var B=u.split(p);

if(B.length!=2){continue;
}var z=B[0];
var s=B[1];
var r=x[i];
var C=r.split(p);
var y=C[0];
var q=C[1];

if(qx.Class.getByName(y)){var w=y;
}else{w=z;
}var A=w+p;

if(s){A+=s+p;
}A+=q;
t[i]=A;
}return t;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var D;

try{D.bar();
}catch(f){var E=this.getStackTraceFromError(f);
qx.lang.Array.removeAt(E,0);
return E;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(o,{"opera":function(F){return [];
},"default":function(V){var bb=[];
var ba=qx.lang.Function.getCaller(V);
var W={};

while(ba){var X=qx.lang.Function.getName(ba);
bb.push(X);

try{ba=ba.caller;
}catch(U){break;
}
if(!ba){break;
}var Y=qx.core.ObjectRegistry.toHashCode(ba);

if(W[Y]){bb.push(m);
break;
}W[Y]=ba;
}return bb;
}}),getStackTraceFromError:qx.core.Variant.select(o,{"gecko":function(G){if(!G.stack){return [];
}var M=/@(.+):(\d+)$/gm;
var H;
var I=[];

while((H=M.exec(G.stack))!=null){var J=H[1];
var L=H[2];
var K=this.__cg(J);
I.push(K+p+L);
}return I;
},"webkit":function(bc){if(bc.sourceURL&&bc.line){return [this.__cg(bc.sourceURL)+p+bc.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(j);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__cg(O[2]);
P.push(S+p+T);
}}return P;
},"default":function(){return [];
}}),__cg:function(b){var e=h;
var c=b.indexOf(e);
var d=(c==-1)?b:b.substring(c+e.length).replace(/\//g,g).replace(/\.js$/,k);
return d;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var i="qx.debug",h="on",g="Cannot stop propagation on a non bubbling event: ",f="Invalid argument value 'cancelable'.",e="Cannot prevent default action on a non cancelable event: ",d="Invalid argument value 'canBubble'.",c="qx.event.type.Event";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(q,r){if(qx.core.Variant.isSet(i,h)){if(q!==undefined){qx.core.Assert.assertBoolean(q,d);
}
if(r!==undefined){qx.core.Assert.assertBoolean(r,f);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!q;
this._cancelable=!!r;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(l){if(l){var m=l;
}else{var m=qx.event.Pool.getInstance().getObject(this.constructor);
}m._type=this._type;
m._target=this._target;
m._currentTarget=this._currentTarget;
m._relatedTarget=this._relatedTarget;
m._originalTarget=this._originalTarget;
m._stopPropagation=this._stopPropagation;
m._bubbles=this._bubbles;
m._preventDefault=this._preventDefault;
m._cancelable=this._cancelable;
return m;
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
},setType:function(a){this._type=a;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(j){this._currentTarget=j;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(o){this._relatedTarget=o;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(n){this._originalTarget=n;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(p){this._bubbles=p;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(s){this._cancelable=s;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__ch:null,__ci:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__ch=d;
this.__ci=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__ch=this.__ch;
c.__ci=this.__ci;
return c;
},getData:function(){return this.__ch;
},getOldData:function(){return this.__ci;
}},destruct:function(){this.__ch=this.__ci=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cj=c;
this.__ck=d||b;
this.__cl=e===undefined?-1:e;
},members:{__cj:null,__ck:null,__cl:null,toString:function(){return this.__cj;
},getUri:function(){return this.__ck;
},getLineNumber:function(){return this.__cl;
}}});
})();
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__cm=b+(e&&e.message?e.message:e);
Error.call(this,this.__cm);
this.__cn=f;
this.__co=e;
},members:{__co:null,__cn:null,__cm:null,toString:function(){return this.__cm;
},getArguments:function(){return this.__cn;
},getSourceException:function(){return this.__co;
}},destruct:function(){this.__co=null;
this.__cn=null;
this.__cm=null;
}});
})();
(function(){var f="qx.util.ObjectPool",e="Integer";
qx.Class.define(f,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.__cp={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:e,init:Infinity}},members:{__cp:null,getObject:function(g){if(this.$$disposed){return;
}
if(!g){throw new Error("Class needs to be defined!");
}var h=null;
var j=this.__cp[g.classname];

if(j){h=j.pop();
}
if(h){h.$$pooled=false;
}else{h=new g;
}return h;
},poolObject:function(b){if(!this.__cp){return;
}var c=b.classname;
var d=this.__cp[c];

if(b.$$pooled){throw new Error("Object is already pooled: "+b);
}
if(!d){this.__cp[c]=d=[];
}if(d.length>this.getSize()){if(b.destroy){b.destroy();
}else{b.dispose();
}return;
}b.$$pooled=true;
d.push(b);
}},destruct:function(){var n=this.__cp;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cp;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var k="qx.util.DisposeUtil";
qx.Class.define(k,{statics:{disposeFields:function(a,b){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=b.length;i<l;i++){var name=b[i];

if(a[name]==null||!a.hasOwnProperty(name)){continue;
}a[name]=null;
}},disposeObjects:function(s,t){var name;

for(var i=0,l=t.length;i<l;i++){name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(s[name].dispose){s[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}s[name]=null;
}},disposeArray:function(c,d){var f=c[d];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){c[d]=null;
return;
}try{var e;

for(var i=f.length-1;i>=0;i--){e=f[i];

if(e){e.dispose();
}}}catch(q){throw new Error("The array field: "+d+" of object: "+c+" has non disposable entries: "+q);
}f.length=0;
c[d]=null;
},disposeMap:function(m,n){var o=m[n];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{for(var p in o){if(o.hasOwnProperty(p)){o[p].dispose();
}}}catch(r){throw new Error("The map field: "+n+" of object: "+m+" has non disposable entries: "+r);
}m[n]=null;
},disposeTriggeredBy:function(g,h){var j=h.dispose;
h.dispose=function(){j.call(h);
g.dispose();
};
}}});
})();
(function(){var br="get",bq="",bp="[",bo=".",bn="last",bm="change",bl="]",bk="Number",bj="String",bi="set",bL="deepBinding",bK="item",bJ="reset",bI="' (",bH="on",bG="qx.debug",bF="Boolean",bE=") to the object '",bD="Integer",bC="qx.event.type.Data",by="qx.data.SingleValueBinding",bz="No event could be found for the property",bw="Can not remove the bindings for null object!",bx="Binding from '",bu="PositiveNumber",bv="PositiveInteger",bs="Binding does not exist!",bt=" is not an data (qx.event.type.Data) event on ",bA=").",bB="Date";
qx.Class.define(by,{statics:{DEBUG_ON:false,__cq:{},bind:function(cM,cN,cO,cP,cQ){var db=this.__cs(cM,cN,cO,cP,cQ);
var cV=cN.split(bo);
var cS=this.__cz(cV);
var da=[];
var cW=[];
var cX=[];
var cT=[];
var cU=cM;
for(var i=0;i<cV.length;i++){if(cS[i]!==bq){cT.push(bm);
}else{cT.push(this.__cu(cU,cV[i]));
}da[i]=cU;
if(i==cV.length-1){if(cS[i]!==bq){var de=cS[i]===bn?cU.length-1:cS[i];
var cR=cU.getItem(de);
this.__cy(cR,cO,cP,cQ,cM);
cX[i]=this.__cA(cU,cT[i],cO,cP,cQ,cS[i]);
}else{if(cV[i]!=null&&cU[br+qx.lang.String.firstUp(cV[i])]!=null){var cR=cU[br+qx.lang.String.firstUp(cV[i])]();
this.__cy(cR,cO,cP,cQ,cM);
}cX[i]=this.__cA(cU,cT[i],cO,cP,cQ);
}}else{var dc={index:i,propertyNames:cV,sources:da,listenerIds:cX,arrayIndexValues:cS,targetObject:cO,targetPropertyChain:cP,options:cQ,listeners:cW};
var cY=qx.lang.Function.bind(this.__cr,this,dc);
cW.push(cY);
cX[i]=cU.addListener(cT[i],cY);
}if(cU[br+qx.lang.String.firstUp(cV[i])]==null){cU=null;
}else if(cS[i]!==bq){cU=cU[br+qx.lang.String.firstUp(cV[i])](cS[i]);
}else{cU=cU[br+qx.lang.String.firstUp(cV[i])]();
}
if(!cU){break;
}}var dd={type:bL,listenerIds:cX,sources:da,targetListenerIds:db.listenerIds,targets:db.targets};
this.__cB(dd,cM,cN,cO,cP);
return dd;
},__cr:function(bT){if(bT.options&&bT.options.onUpdate){bT.options.onUpdate(bT.sources[bT.index],bT.targetObject);
}for(var j=bT.index+1;j<bT.propertyNames.length;j++){var bX=bT.sources[j];
bT.sources[j]=null;

if(!bX){continue;
}bX.removeListenerById(bT.listenerIds[j]);
}var bX=bT.sources[bT.index];
for(var j=bT.index+1;j<bT.propertyNames.length;j++){if(bT.arrayIndexValues[j-1]!==bq){bX=bX[br+qx.lang.String.firstUp(bT.propertyNames[j-1])](bT.arrayIndexValues[j-1]);
}else{bX=bX[br+qx.lang.String.firstUp(bT.propertyNames[j-1])]();
}bT.sources[j]=bX;
if(!bX){this.__cv(bT.targetObject,bT.targetPropertyChain);
break;
}if(j==bT.propertyNames.length-1){if(qx.Class.implementsInterface(bX,qx.data.IListData)){var bY=bT.arrayIndexValues[j]===bn?bX.length-1:bT.arrayIndexValues[j];
var bV=bX.getItem(bY);
this.__cy(bV,bT.targetObject,bT.targetPropertyChain,bT.options,bT.sources[bT.index]);
bT.listenerIds[j]=this.__cA(bX,bm,bT.targetObject,bT.targetPropertyChain,bT.options,bT.arrayIndexValues[j]);
}else{if(bT.propertyNames[j]!=null&&bX[br+qx.lang.String.firstUp(bT.propertyNames[j])]!=null){var bV=bX[br+qx.lang.String.firstUp(bT.propertyNames[j])]();
this.__cy(bV,bT.targetObject,bT.targetPropertyChain,bT.options,bT.sources[bT.index]);
}var bW=this.__cu(bX,bT.propertyNames[j]);
bT.listenerIds[j]=this.__cA(bX,bW,bT.targetObject,bT.targetPropertyChain,bT.options);
}}else{if(bT.listeners[j]==null){var bU=qx.lang.Function.bind(this.__cr,this,bT);
bT.listeners.push(bU);
}if(qx.Class.implementsInterface(bX,qx.data.IListData)){var bW=bm;
}else{var bW=this.__cu(bX,bT.propertyNames[j]);
}bT.listenerIds[j]=bX.addListener(bW,bT.listeners[j]);
}}},__cs:function(k,l,m,n,o){var s=n.split(bo);
var q=this.__cz(s);
var x=[];
var w=[];
var u=[];
var t=[];
var r=m;
for(var i=0;i<s.length-1;i++){if(q[i]!==bq){t.push(bm);
}else{try{t.push(this.__cu(r,s[i]));
}catch(e){break;
}}x[i]=r;
var v=function(){for(var j=i+1;j<s.length-1;j++){var bg=x[j];
x[j]=null;

if(!bg){continue;
}bg.removeListenerById(u[j]);
}var bg=x[i];
for(var j=i+1;j<s.length-1;j++){var be=qx.lang.String.firstUp(s[j-1]);
if(q[j-1]!==bq){var bh=q[j-1]===bn?bg.getLength()-1:q[j-1];
bg=bg[br+be](bh);
}else{bg=bg[br+be]();
}x[j]=bg;
if(w[j]==null){w.push(v);
}if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bf=bm;
}else{try{var bf=qx.data.SingleValueBinding.__cu(bg,s[j]);
}catch(e){break;
}}u[j]=bg.addListener(bf,w[j]);
}qx.data.SingleValueBinding.__ct(k,l,m,n);
};
w.push(v);
u[i]=r.addListener(t[i],v);
var p=qx.lang.String.firstUp(s[i]);
if(r[br+p]==null){r=null;
}else if(q[i]!==bq){r=r[br+p](q[i]);
}else{r=r[br+p]();
}
if(!r){break;
}}return {listenerIds:u,targets:x};
},__ct:function(ca,cb,cc,cd){var ch=this.__cx(ca,cb);

if(ch!=null){var cj=cb.substring(cb.lastIndexOf(bo)+1,cb.length);
if(cj.charAt(cj.length-1)==bl){var ce=cj.substring(cj.lastIndexOf(bp)+1,cj.length-1);
var cg=cj.substring(0,cj.lastIndexOf(bp));
var ci=ch[br+qx.lang.String.firstUp(cg)]();

if(ce==bn){ce=ci.length-1;
}
if(ci!=null){var cf=ci.getItem(ce);
}}else{var cf=ch[br+qx.lang.String.firstUp(cj)]();
}}this.__cw(cc,cd,cf);
},__cu:function(ck,cl){var cm=this.__cD(ck,cl);
if(cm==null){if(qx.Class.supportsEvent(ck.constructor,cl)){cm=cl;
}else if(qx.Class.supportsEvent(ck.constructor,bm+qx.lang.String.firstUp(cl))){cm=bm+qx.lang.String.firstUp(cl);
}else{throw new qx.core.AssertionError(bz,cl);
}}return cm;
},__cv:function(df,dg){var dh=this.__cx(df,dg);

if(dh!=null){var di=dg.substring(dg.lastIndexOf(bo)+1,dg.length);
if(di.charAt(di.length-1)==bl){this.__cw(df,dg,null);
return;
}if(dh[bJ+qx.lang.String.firstUp(di)]!=undefined){dh[bJ+qx.lang.String.firstUp(di)]();
}else{dh[bi+qx.lang.String.firstUp(di)](null);
}}},__cw:function(cE,cF,cG){var cK=this.__cx(cE,cF);

if(cK!=null){var cL=cF.substring(cF.lastIndexOf(bo)+1,cF.length);
if(cL.charAt(cL.length-1)==bl){var cH=cL.substring(cL.lastIndexOf(bp)+1,cL.length-1);
var cJ=cL.substring(0,cL.lastIndexOf(bp));
var cI=cK[br+qx.lang.String.firstUp(cJ)]();

if(cH==bn){cH=cI.length-1;
}
if(cI!=null){cI.setItem(cH,cG);
}}else{cK[bi+qx.lang.String.firstUp(cL)](cG);
}}},__cx:function(L,M){var P=M.split(bo);
var Q=L;
for(var i=0;i<P.length-1;i++){try{var O=P[i];
if(O.indexOf(bl)==O.length-1){var N=O.substring(O.indexOf(bp)+1,O.length-1);
O=O.substring(0,O.indexOf(bp));
}Q=Q[br+qx.lang.String.firstUp(O)]();

if(N!=null){if(N==bn){N=Q.length-1;
}Q=Q.getItem(N);
N=null;
}}catch(bR){return null;
}}return Q;
},__cy:function(c,d,f,g,h){c=this.__cC(c,d,f,g);
if(c==null){this.__cv(d,f);
}if(c!=undefined){try{this.__cw(d,f,c);
if(g&&g.onUpdate){g.onUpdate(h,d,c);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(g&&g.onSetFail){g.onSetFail(e);
}else{this.warn("Failed so set value "+c+" on "+d+". Error message: "+e);
}}}},__cz:function(cu){var cv=[];
for(var i=0;i<cu.length;i++){var name=cu[i];
if(qx.lang.String.endsWith(name,bl)){var cw=name.substring(name.indexOf(bp)+1,name.indexOf(bl));
if(name.indexOf(bl)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cw!==bn){if(cw==bq||isNaN(parseInt(cw))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(bp)!=0){cu[i]=name.substring(0,name.indexOf(bp));
cv[i]=bq;
cv[i+1]=cw;
cu.splice(i+1,0,bK);
i++;
}else{cv[i]=cw;
cu.splice(i,1,bK);
}}else{cv[i]=bq;
}}return cv;
},__cA:function(y,z,A,B,C,D){if(qx.core.Variant.isSet(bG,bH)){var E=qx.Class.getEventType(y.constructor,z);
qx.core.Assert.assertEquals(bC,E,z+bt+y+bo);
}var G=function(H,e){if(H!==bq){if(H===bn){H=y.length-1;
}var K=y.getItem(H);
if(K==undefined){qx.data.SingleValueBinding.__cv(A,B);
}var I=e.getData().start;
var J=e.getData().end;

if(H<I||H>J){return;
}}else{var K=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+y+" by "+z+" to "+A+" ("+B+")");
qx.log.Logger.debug("Data before conversion: "+K);
}K=qx.data.SingleValueBinding.__cC(K,A,B,C);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+K);
}try{if(K!=undefined){qx.data.SingleValueBinding.__cw(A,B,K);
}else{qx.data.SingleValueBinding.__cv(A,B);
}if(C&&C.onUpdate){C.onUpdate(y,A,K);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(C&&C.onSetFail){C.onSetFail(e);
}else{this.warn("Failed so set value "+K+" on "+A+". Error message: "+e);
}}};
if(!D){D=bq;
}G=qx.lang.Function.bind(G,y,D);
var F=y.addListener(z,G);
return F;
},__cB:function(cx,cy,cz,cA,cB){if(this.__cq[cy.toHashCode()]===undefined){this.__cq[cy.toHashCode()]=[];
}this.__cq[cy.toHashCode()].push([cx,cy,cz,cA,cB]);
},__cC:function(R,S,T,U){if(U&&U.converter){var W;

if(S.getModel){W=S.getModel();
}return U.converter(R,W);
}else{var Y=this.__cx(S,T);
var ba=T.substring(T.lastIndexOf(bo)+1,T.length);
if(Y==null){return R;
}var X=qx.Class.getPropertyDefinition(Y.constructor,ba);
var V=X==null?bq:X.check;
return this.__cE(R,V);
}},__cD:function(bb,bc){var bd=qx.Class.getPropertyDefinition(bb.constructor,bc);

if(bd==null){return null;
}return bd.event;
},__cE:function(cr,cs){var ct=qx.lang.Type.getClass(cr);
if((ct==bk||ct==bj)&&(cs==bD||cs==bv)){cr=parseInt(cr);
}if((ct==bF||ct==bk||ct==bB)&&cs==bj){cr=cr+bq;
}if((ct==bk||ct==bj)&&(cs==bk||cs==bu)){cr=parseFloat(cr);
}return cr;
},removeBindingFromObject:function(bO,bP){if(bP.type==bL){for(var i=0;i<bP.sources.length;i++){if(bP.sources[i]){bP.sources[i].removeListenerById(bP.listenerIds[i]);
}}for(var i=0;i<bP.targets.length;i++){if(bP.targets[i]){bP.targets[i].removeListenerById(bP.targetListenerIds[i]);
}}}else{bO.removeListenerById(bP);
}var bQ=this.__cq[bO.toHashCode()];
if(bQ!=undefined){for(var i=0;i<bQ.length;i++){if(bQ[i][0]==bP){qx.lang.Array.remove(bQ,bQ[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bM){if(qx.core.Variant.isSet(bG,bH)){qx.core.Assert.assertNotNull(bM,bw);
}var bN=this.__cq[bM.toHashCode()];

if(bN!=undefined){for(var i=bN.length-1;i>=0;i--){this.removeBindingFromObject(bM,bN[i][0]);
}}},getAllBindingsForObject:function(bS){if(this.__cq[bS.toHashCode()]===undefined){this.__cq[bS.toHashCode()]=[];
}return this.__cq[bS.toHashCode()];
},removeAllBindings:function(){for(var cD in this.__cq){var cC=qx.core.ObjectRegistry.fromHashCode(cD);
if(cC==null){delete this.__cq[cD];
continue;
}this.removeAllBindingsForObject(cC);
}this.__cq={};
},getAllBindings:function(){return this.__cq;
},showBindingInLog:function(cn,co){var cq;
for(var i=0;i<this.__cq[cn.toHashCode()].length;i++){if(this.__cq[cn.toHashCode()][i][0]==co){cq=this.__cq[cn.toHashCode()][i];
break;
}}
if(cq===undefined){var cp=bs;
}else{var cp=bx+cq[1]+bI+cq[2]+bE+cq[3]+bI+cq[4]+bA;
}qx.log.Logger.debug(cp);
},showAllBindingsInLog:function(){for(var b in this.__cq){var a=qx.core.ObjectRegistry.fromHashCode(b);

for(var i=0;i<this.__cq[b].length;i++){this.showBindingInLog(a,this.__cq[b][i][0]);
}}}}});
})();
(function(){var r="",q="g",p="0",o='\\$1',n="%",m='-',l="qx.lang.String",k=' ',j='\n',h="undefined";
qx.Class.define(l,{statics:{camelCase:function(f){return f.replace(/\-([a-z])/g,function(d,e){return e.toUpperCase();
});
},hyphenate:function(a){return a.replace(/[A-Z]/g,function(g){return (m+g.charAt(0).toLowerCase());
});
},capitalize:function(Q){return Q.replace(/\b[a-z]/g,function(G){return G.toUpperCase();
});
},clean:function(s){return this.trim(s.replace(/\s+/g,k));
},trimLeft:function(t){return t.replace(/^\s+/,r);
},trimRight:function(H){return H.replace(/\s+$/,r);
},trim:function(b){return b.replace(/^\s+|\s+$/g,r);
},startsWith:function(M,N){return M.indexOf(N)===0;
},endsWith:function(E,F){return E.substring(E.length-F.length,E.length)===F;
},repeat:function(O,P){return O.length>=0?new Array(P+1).join(O):r;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===h){K=p;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(x,y){return x.indexOf(y)!=-1;
},format:function(u,v){var w=u;

for(var i=0;i<v.length;i++){w=w.replace(new RegExp(n+(i+1),q),v[i]);
}return w;
},escapeRegexpChars:function(I){return I.replace(/([.*+?^${}()|[\]\/\\])/g,o);
},toArray:function(c){return c.split(/\B|\b/g);
},stripTags:function(D){return D.replace(/<\/?[^>]+>/gi,r);
},stripScripts:function(z,A){var C=r;
var B=z.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){C+=arguments[1]+j;
return r;
});

if(A===true){qx.lang.Function.globalEval(C);
}return B;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.event.handler.Object";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(a,b,c){},unregisterEvent:function(d,e,f){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var w='',u='"',t=':',s=']',r='null',q=': ',p='object',o='function',m=',',l='\n',bg='\\u',bf=',\n',be='0000',bd='string',bc="Cannot stringify a recursive object.",bb='0',ba='-',Y='}',X='String',W='Boolean',D='\\\\',E='\\f',B='\\t',C='{\n',z='[]',A="qx.lang.JsonImpl",x='Z',y='\\n',F='Object',G='{}',N='@',L='.',Q='(',P='Array',S='T',R='\\r',I='{',V='JSON.parse',U=' ',T='[',H='Number',J=')',K='[\n',M='\\"',O='\\b';
qx.Class.define(A,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__cF:null,__cG:null,__cH:null,__cI:null,stringify:function(bp,bq,br){this.__cF=w;
this.__cG=w;
this.__cI=[];

if(qx.lang.Type.isNumber(br)){var br=Math.min(10,Math.floor(br));

for(var i=0;i<br;i+=1){this.__cG+=U;
}}else if(qx.lang.Type.isString(br)){if(br.length>10){br=br.slice(0,10);
}this.__cG=br;
}if(bq&&(qx.lang.Type.isFunction(bq)||qx.lang.Type.isArray(bq))){this.__cH=bq;
}else{this.__cH=null;
}return this.__cJ(w,{'':bp});
},__cJ:function(bs,bt){var bw=this.__cF,bu,bx=bt[bs];
if(bx&&qx.lang.Type.isFunction(bx.toJSON)){bx=bx.toJSON(bs);
}else if(qx.lang.Type.isDate(bx)){bx=this.dateToJSON(bx);
}if(typeof this.__cH===o){bx=this.__cH.call(bt,bs,bx);
}
if(bx===null){return r;
}
if(bx===undefined){return undefined;
}switch(qx.lang.Type.getClass(bx)){case X:return this.__cK(bx);
case H:return isFinite(bx)?String(bx):r;
case W:return String(bx);
case P:this.__cF+=this.__cG;
bu=[];

if(this.__cI.indexOf(bx)!==-1){throw new TypeError(bc);
}this.__cI.push(bx);
var length=bx.length;

for(var i=0;i<length;i+=1){bu[i]=this.__cJ(i,bx)||r;
}this.__cI.pop();
if(bu.length===0){var bv=z;
}else if(this.__cF){bv=K+this.__cF+bu.join(bf+this.__cF)+l+bw+s;
}else{bv=T+bu.join(m)+s;
}this.__cF=bw;
return bv;
case F:this.__cF+=this.__cG;
bu=[];

if(this.__cI.indexOf(bx)!==-1){throw new TypeError(bc);
}this.__cI.push(bx);
if(this.__cH&&typeof this.__cH===p){var length=this.__cH.length;

for(var i=0;i<length;i+=1){var k=this.__cH[i];

if(typeof k===bd){var v=this.__cJ(k,bx);

if(v){bu.push(this.__cK(k)+(this.__cF?q:t)+v);
}}}}else{for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cJ(k,bx);

if(v){bu.push(this.__cK(k)+(this.__cF?q:t)+v);
}}}}this.__cI.pop();
if(bu.length===0){var bv=G;
}else if(this.__cF){bv=C+this.__cF+bu.join(bf+this.__cF)+l+bw+Y;
}else{bv=I+bu.join(m)+Y;
}this.__cF=bw;
return bv;
}},dateToJSON:function(bh){var bi=function(n){return n<10?bb+n:n;
};
var bj=function(n){var bo=bi(n);
return n<100?bb+bo:bo;
};
return isFinite(bh.valueOf())?bh.getUTCFullYear()+ba+bi(bh.getUTCMonth()+1)+ba+bi(bh.getUTCDate())+S+bi(bh.getUTCHours())+t+bi(bh.getUTCMinutes())+t+bi(bh.getUTCSeconds())+L+bj(bh.getUTCMilliseconds())+x:null;
},__cK:function(f){var g={'\b':O,'\t':B,'\n':y,'\f':E,'\r':R,'"':M,'\\':D};
var h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
h.lastIndex=0;

if(h.test(f)){return u+
f.replace(h,function(a){var c=g[a];
return typeof c===bd?c:bg+(be+a.charCodeAt(0).toString(16)).slice(-4);
})+u;
}else{return u+f+u;
}},parse:function(b,d){var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
e.lastIndex=0;
if(e.test(b)){b=b.replace(e,function(a){return bg+(be+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,N).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s).replace(/(?:^|:|,)(?:\s*\[)+/g,w))){var j=eval(Q+b+J);
return typeof d===o?this.__cL({'':j},w,d):j;
}throw new SyntaxError(V);
},__cL:function(bk,bl,bm){var bn=bk[bl];

if(bn&&typeof bn===p){for(var k in bn){if(Object.hasOwnProperty.call(bn,k)){var v=this.__cL(bn,k,bm);

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
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__cM:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cN:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cO:function(){var a=qx.lang.Generics.__cM;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cN(c,d);
}}}}},defer:function(Q){Q.__cO();
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
var g={};
f._native=this._cloneNativeEvent(this._native,g);
f._returnValue=this._returnValue;
return f;
},_cloneNativeEvent:function(c,d){d.preventDefault=qx.lang.Function.empty;
return d;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(b){this._returnValue=b;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__cP:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__cP();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cQ:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cR:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cQ){J.push(I);
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
}else{this.NAME=this.__cQ[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cR();
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
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var l="_applyTheme",k="qx.theme.manager.Color",j="Theme",i="changeTheme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.util.ValueManager,properties:{theme:{check:j,nullable:true,apply:l,event:i}},members:{_applyTheme:function(a){var b={};

if(a){var c=a.colors;
var d=qx.util.ColorUtil;
var e;

for(var f in c){e=c[f];

if(typeof e===h){if(!d.isCssString(e)){throw new Error("Could not parse color: "+e);
}}else if(e instanceof Array){e=d.rgbToRgbString(e);
}else{throw new Error("Could not parse color: "+e);
}b[f]=e;
}}this._setDynamic(b);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(m){var o=this._dynamic;

if(m&&(o[m]!==undefined)){return true;
}var n=this.getTheme();

if(n!==null&&m&&(n.colors[m]!==undefined)){o[m]=n.colors[m];
return true;
}return false;
}}});
})();
(function(){var k=",",j="rgb(",h=")",e="qx.theme.manager.Color",d="qx.util.ColorUtil";
qx.Class.define(d,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(m){return this.NAMED[m]!==undefined;
},isSystemColor:function(n){return this.SYSTEM[n]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(e);
},isThemedColor:function(R){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(R);
},stringToRgb:function(I){if(this.supportsThemes()&&this.isThemedColor(I)){var I=qx.theme.manager.Color.getInstance().resolveDynamic(I);
}
if(this.isNamedColor(I)){return this.NAMED[I];
}else if(this.isSystemColor(I)){throw new Error("Could not convert system colors to RGB: "+I);
}else if(this.isRgbString(I)){return this.__cS();
}else if(this.isHex3String(I)){return this.__cU();
}else if(this.isHex6String(I)){return this.__cV();
}throw new Error("Could not parse color: "+I);
},cssStringToRgb:function(L){if(this.isNamedColor(L)){return this.NAMED[L];
}else if(this.isSystemColor(L)){throw new Error("Could not convert system colors to RGB: "+L);
}else if(this.isRgbString(L)){return this.__cS();
}else if(this.isRgbaString(L)){return this.__cT();
}else if(this.isHex3String(L)){return this.__cU();
}else if(this.isHex6String(L)){return this.__cV();
}throw new Error("Could not parse color: "+L);
},stringToRgbString:function(Q){return this.rgbToRgbString(this.stringToRgb(Q));
},rgbToRgbString:function(P){return j+P[0]+k+P[1]+k+P[2]+h;
},rgbToHexString:function(J){return (qx.lang.String.pad(J[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(J[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(l){return this.isThemedColor(l)||this.isNamedColor(l)||this.isHex3String(l)||this.isHex6String(l)||this.isRgbString(l);
},isCssString:function(C){return this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C);
},isHex3String:function(v){return this.REGEXP.hex3.test(v);
},isHex6String:function(c){return this.REGEXP.hex6.test(c);
},isRgbString:function(D){return this.REGEXP.rgb.test(D);
},isRgbaString:function(a){return this.REGEXP.rgba.test(a);
},__cS:function(){var V=parseInt(RegExp.$1,10);
var U=parseInt(RegExp.$2,10);
var T=parseInt(RegExp.$3,10);
return [V,U,T];
},__cT:function(){var O=parseInt(RegExp.$1,10);
var N=parseInt(RegExp.$2,10);
var M=parseInt(RegExp.$3,10);
return [O,N,M];
},__cU:function(){var G=parseInt(RegExp.$1,16)*17;
var F=parseInt(RegExp.$2,16)*17;
var E=parseInt(RegExp.$3,16)*17;
return [G,F,E];
},__cV:function(){var u=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var s=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var o=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [u,s,o];
},hex3StringToRgb:function(K){if(this.isHex3String(K)){return this.__cU(K);
}throw new Error("Invalid hex3 value: "+K);
},hex6StringToRgb:function(S){if(this.isHex6String(S)){return this.__cV(S);
}throw new Error("Invalid hex6 value: "+S);
},hexStringToRgb:function(H){if(this.isHex3String(H)){return this.__cU(H);
}
if(this.isHex6String(H)){return this.__cV(H);
}throw new Error("Invalid hex value: "+H);
},rgbToHsb:function(W){var Y,ba,bc;
var bi=W[0];
var bf=W[1];
var X=W[2];
var bh=(bi>bf)?bi:bf;

if(X>bh){bh=X;
}var bb=(bi<bf)?bi:bf;

if(X<bb){bb=X;
}bc=bh/255.0;

if(bh!=0){ba=(bh-bb)/bh;
}else{ba=0;
}
if(ba==0){Y=0;
}else{var be=(bh-bi)/(bh-bb);
var bg=(bh-bf)/(bh-bb);
var bd=(bh-X)/(bh-bb);

if(bi==bh){Y=bd-bg;
}else if(bf==bh){Y=2.0+be-bd;
}else{Y=4.0+bg-be;
}Y=Y/6.0;

if(Y<0){Y=Y+1.0;
}}return [Math.round(Y*360),Math.round(ba*100),Math.round(bc*100)];
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
(function(){var m="object",l="__cW",k="_applyTheme",j="qx.theme.manager.Decoration",i="Theme",h="string",g="singleton";
qx.Class.define(j,{type:g,extend:qx.core.Object,properties:{theme:{check:i,nullable:true,apply:k}},members:{__cW:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var q=this.getTheme();

if(!q){return null;
}var q=this.getTheme();

if(!q){return null;
}var r=this.__cW;

if(!r){r=this.__cW={};
}var o=r[n];

if(o){return o;
}var p=q.decorations[n];

if(!p){return null;
}var s=p.decorator;

if(s==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}return r[n]=(new s).set(p.style);
},isValidPropertyValue:function(e){if(typeof e===h){return this.isDynamic(e);
}else if(typeof e===m){var f=e.constructor;
return qx.Class.hasInterface(f,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(t){if(!t){return false;
}var u=this.getTheme();

if(!u){return false;
}return !!u.decorations[t];
},_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}
if(!a){this.__cW={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cX={};
this.add(a,h);
},members:{__cX:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__cX[k]){return this.__cX[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__cX[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(r,s){this.__cX[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(o){delete this.__cX[o];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__cX=null;
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
},isDynamic:function(h){var j=this._dynamic;

if(h&&(h instanceof qx.bom.Font||j[h]!==undefined)){return true;
}var i=this.getTheme();

if(i!==null&&h&&i.fonts[h]){j[h]=(new qx.bom.Font).set(i.fonts[h]);
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
(function(){var w="",v="underline",u="Boolean",t="px",s='"',r="italic",q="normal",p="bold",o="_applyItalic",n="_applyBold",I="Integer",H="_applyFamily",G="_applyLineHeight",F="Array",E="overline",D="line-through",C="qx.bom.Font",B="Number",A="_applyDecoration",z=" ",x="_applySize",y=",";
qx.Class.define(C,{extend:qx.core.Object,construct:function(N,O){arguments.callee.base.call(this);

if(N!==undefined){this.setSize(N);
}
if(O!==undefined){this.setFamily(O);
}},statics:{fromString:function(c){var g=new qx.bom.Font();
var e=c.split(/\s+/);
var name=[];
var f;

for(var i=0;i<e.length;i++){switch(f=e[i]){case p:g.setBold(true);
break;
case r:g.setItalic(true);
break;
case v:g.setDecoration(v);
break;
default:var d=parseInt(f,10);

if(d==f||qx.lang.String.contains(f,t)){g.setSize(d);
}else{name.push(f);
}break;
}}
if(name.length>0){g.setFamily(name);
}return g;
},fromConfig:function(k){var m=new qx.bom.Font;
m.set(k);
return m;
},__cY:{fontFamily:w,fontSize:w,fontWeight:w,fontStyle:w,textDecoration:w,lineHeight:1.2},getDefaultStyles:function(){return this.__cY;
}},properties:{size:{check:I,nullable:true,apply:x},lineHeight:{check:B,nullable:true,apply:G},family:{check:F,nullable:true,apply:H},bold:{check:u,nullable:true,apply:n},italic:{check:u,nullable:true,apply:o},decoration:{check:[v,D,E],nullable:true,apply:A}},members:{__da:null,__db:null,__dc:null,__dd:null,__de:null,__df:null,_applySize:function(J,K){this.__da=J===null?null:J+t;
},_applyLineHeight:function(a,b){this.__df=a===null?null:a;
},_applyFamily:function(P,Q){var R=w;

for(var i=0,l=P.length;i<l;i++){if(P[i].indexOf(z)>0){R+=s+P[i]+s;
}else{R+=P[i];
}
if(i!==l-1){R+=y;
}}this.__db=R;
},_applyBold:function(h,j){this.__dc=h===null?null:h?p:q;
},_applyItalic:function(L,M){this.__dd=L===null?null:L?r:q;
},_applyDecoration:function(S,T){this.__de=S===null?null:S;
},getStyles:function(){return {fontFamily:this.__db,fontSize:this.__da,fontWeight:this.__dc,fontStyle:this.__dd,textDecoration:this.__de,lineHeight:this.__df};
}}});
})();
(function(){var h="qx.theme.manager.Icon",g="Theme",f="_applyTheme",e="singleton";
qx.Class.define(h,{type:e,extend:qx.core.Object,properties:{theme:{check:g,nullable:true,apply:f}},members:{_applyTheme:function(a,b){var d=qx.util.AliasManager.getInstance();

if(b){for(var c in b.aliases){d.remove(c);
}}
if(a){for(var c in a.aliases){d.add(c,a.aliases[c]);
}}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dg={};
this.__dh={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__di:{},__dg:null,__dh:null,_applyTheme:function(z,A){this.__dh={};
this.__dg={};
},__dj:function(B,C,D){var H=C.appearances;
var K=H[B];

if(!K){var L=b;
var E=[];
var J=B.split(L);
var I;

while(!K&&J.length>0){E.unshift(J.pop());
var F=J.join(L);
K=H[F];

if(K){I=K.alias||K;

if(typeof I===h){var G=I+L+E.join(L);
return this.__dj(G,C,D);
}}}if(D!=null){return this.__dj(D,C);
}return null;
}else if(typeof K===h){return this.__dj(K,C,D);
}else if(K.include&&!K.style){return this.__dj(K.include,C,D);
}return B;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__dh;
var m=r[i];

if(!m){m=r[i]=this.__dj(i,k,l);
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
}}var q=this.__dg;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__di;
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
}},destruct:function(){this.__dg=this.__dh=null;
}});
})();
(function(){var x="object",w="qx.debug",v="Theme",u="widgets",t="undefined",s="fonts",r="string",q="colors",p="decorations",o="on",g="meta",n="appearances",k="borders",f="icons",e="other",j="qx.Theme",h="]",m="[Theme ";
qx.Bootstrap.define(j,{statics:{define:function(name,O){if(!O){var O={};
}O.include=this.__dk(O.include);
O.patch=this.__dk(O.patch);
if(qx.core.Variant.isSet(w,o)){this.__dr(name,O);
}var P={$$type:v,name:name,title:O.title,toString:this.genericToString};
if(O.extend){P.supertheme=O.extend;
}P.basename=qx.Bootstrap.createNamespace(name,P);
this.__dn(P,O);
this.__dl(P,O);
this.$$registry[name]=P;
for(var i=0,a=O.include,l=a.length;i<l;i++){this.include(P,a[i]);
}
for(var i=0,a=O.patch,l=a.length;i<l;i++){this.patch(P,a[i]);
}},__dk:function(d){if(!d){return [];
}
if(qx.Bootstrap.isArray(d)){return d;
}else{return [d];
}},__dl:function(F,G){var H=G.aliases||{};

if(G.extend&&G.extend.aliases){qx.Bootstrap.objectMergeWith(H,G.extend.aliases,false);
}F.aliases=H;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return m+this.name+h;
},__dm:function(b){for(var i=0,c=this.__do,l=c.length;i<l;i++){if(b[c[i]]){return c[i];
}}},__dn:function(y,z){var C=this.__dm(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||e;
if(!C){return;
}var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){if(qx.core.Variant.isSet(w,o)){if(!z.extend){throw new Error("Found base flag in entry '"+A+"' of theme '"+z.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__do:[q,k,p,s,f,u,n,g],__dp:qx.core.Variant.select(w,{"on":{"title":r,"aliases":x,"type":r,"extend":x,"colors":x,"borders":x,"decorations":x,"fonts":x,"icons":x,"widgets":x,"appearances":x,"meta":x,"include":x,"patch":x},"default":null}),__dq:qx.core.Variant.select(w,{"on":{"color":x,"border":x,"decoration":x,"font":x,"icon":x,"appearance":x,"widget":x},"default":null}),__dr:qx.core.Variant.select(w,{"on":function(name,Q){var V=this.__dp;

for(var U in Q){if(V[U]===undefined){throw new Error('The configuration key "'+U+'" in theme "'+name+'" is not allowed!');
}
if(Q[U]==null){throw new Error('Invalid key "'+U+'" in theme "'+name+'"! The value is undefined/null!');
}
if(V[U]!==null&&typeof Q[U]!==V[U]){throw new Error('Invalid type of key "'+U+'" in theme "'+name+'"! The type of the key must be "'+V[U]+'"!');
}}var T=[q,k,p,s,f,u,n,g];

for(var i=0,l=T.length;i<l;i++){var U=T[i];

if(Q[U]!==undefined&&(Q[U] instanceof Array||Q[U] instanceof RegExp||Q[U] instanceof Date||Q[U].classname!==undefined)){throw new Error('Invalid key "'+U+'" in theme "'+name+'"! The value needs to be a map!');
}}var R=0;

for(var i=0,l=T.length;i<l;i++){var U=T[i];

if(Q[U]){R++;
}
if(R>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!Q.extend&&R===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(Q.meta){var S;

for(var U in Q.meta){S=Q.meta[U];

if(this.__dq[U]===undefined){throw new Error('The key "'+U+'" is not allowed inside a meta theme block.');
}
if(typeof S!==this.__dq[U]){throw new Error('The type of the key "'+U+'" inside the meta block is wrong.');
}
if(!(typeof S===x&&S!==null&&S.$$type===v)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+U+'" in theme "'+name+'" is invalid: '+S);
}}}if(Q.extend&&Q.extend.$$type!==v){throw new Error('Invalid extend in theme "'+name+'": '+Q.extend);
}if(Q.include){for(var i=0,l=Q.include.length;i<l;i++){if(typeof (Q.include[i])==t||Q.include[i].$$type!==v){throw new Error('Invalid include in theme "'+name+'": '+Q.include[i]);
}}}if(Q.patch){for(var i=0,l=Q.patch.length;i<l;i++){if(typeof (Q.patch[i])==t||Q.patch[i].$$type!==v){throw new Error('Invalid patch in theme "'+name+'": '+Q.patch[i]);
}}}},"default":function(){}}),patch:function(W,X){var ba=this.__dm(X);

if(ba!==this.__dm(W)){throw new Error("The mixins '"+W.name+"' are not compatible '"+X.name+"'!");
}var Y=X[ba];
var bb=W.$$clazz.prototype;

for(var bc in Y){bb[bc]=Y[bc];
}},include:function(I,J){var L=J.type;

if(L!==I.type){throw new Error("The mixins '"+I.name+"' are not compatible '"+J.name+"'!");
}var K=J[L];
var M=I.$$clazz.prototype;

for(var N in K){if(M[N]!==undefined){continue;
}M[N]=K[N];
}}}});
})();
(function(){var x="focusout",w="interval",v="mouseover",u="mouseout",t="mousemove",s="widget",r="__dv",q="qx.ui.tooltip.ToolTip",p="Boolean",o="__dt",l="_applyCurrent",n="qx.ui.tooltip.Manager",m="tooltip-error",k="singleton",j="__ds";
qx.Class.define(n,{type:k,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,v,this.__dC,this,true);
this.__ds=new qx.event.Timer();
this.__ds.addListener(w,this.__dz,this);
this.__dt=new qx.event.Timer();
this.__dt.addListener(w,this.__dA,this);
this.__du={left:0,top:0};
},properties:{current:{check:q,nullable:true,apply:l},showInvalidTooltips:{check:p,init:true}},members:{__du:null,__dt:null,__ds:null,__dv:null,__dw:null,__dx:function(){if(!this.__dv){this.__dv=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__dv;
},__dy:function(){if(!this.__dw){this.__dw=new qx.ui.tooltip.ToolTip().set({appearance:m});
this.__dw.syncAppearance();
}return this.__dw;
},_applyCurrent:function(C,D){if(D&&qx.ui.core.Widget.contains(D,C)){return;
}if(D){if(!D.isDisposed()){D.exclude();
}this.__ds.stop();
this.__dt.stop();
}var F=qx.event.Registration;
var E=document.body;
if(C){this.__ds.startWith(C.getShowTimeout());
F.addListener(E,u,this.__dD,this,true);
F.addListener(E,x,this.__dE,this,true);
F.addListener(E,t,this.__dB,this,true);
}else{F.removeListener(E,u,this.__dD,this,true);
F.removeListener(E,x,this.__dE,this,true);
F.removeListener(E,t,this.__dB,this,true);
}},__dz:function(e){var a=this.getCurrent();

if(a&&!a.isDisposed()){this.__dt.startWith(a.getHideTimeout());

if(a.getPlaceMethod()==s){a.placeToWidget(a.getOpener());
}else{a.placeToPoint(this.__du);
}a.show();
}this.__ds.stop();
},__dA:function(e){var G=this.getCurrent();

if(G&&!G.isDisposed()){G.exclude();
}this.__dt.stop();
this.resetCurrent();
},__dB:function(e){var B=this.__du;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__dC:function(e){var g=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!g){return;
}var h;
while(g!=null){var h=g.getToolTip();
var i=g.getToolTipText()||null;
var f=g.getToolTipIcon()||null;

if(qx.Class.hasInterface(g.constructor,qx.ui.form.IForm)&&!g.isValid()){var d=g.getInvalidMessage();
}
if(h||i||f||d){break;
}g=g.getLayoutParent();
}
if(!g){return;
}
if(g.isBlockToolTip()){return;
}if(d&&g.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var h=this.__dy().set({label:d});
}else if(!h){var h=this.__dx().set({label:i,icon:f});
}this.setCurrent(h);
h.setOpener(g);
},__dD:function(e){var y=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!y){return;
}var z=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!z){return;
}var A=this.getCurrent();
if(A&&(z==A||qx.ui.core.Widget.contains(A,z))){return;
}if(z&&y&&qx.ui.core.Widget.contains(y,z)){return;
}if(A&&!z){this.setCurrent(null);
}else{this.resetCurrent();
}},__dE:function(e){var b=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!b){return;
}var c=this.getCurrent();
if(c&&c==b.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,v,this.__dC,this,true);
this._disposeObjects(j,o,r);
this.__du=null;
}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(o){arguments.callee.base.call(this);
this.setEnabled(false);

if(o!=null){this.setInterval(o);
}var self=this;
this.__dF=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(k,l,m){var n=new qx.event.Timer(m);
n.addListener(h,function(e){n.stop();
k.call(l,e);
n.dispose();
l=null;
},l);
n.start();
return n;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dG:null,__dF:null,_applyInterval:function(i,j){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dG);
this.__dG=null;
}else if(p){this.__dG=window.setInterval(this.__dF,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(s){this.setInterval(s);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(r){this.stop();
this.startWith(r);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dG){window.clearInterval(this.__dG);
}this.__dG=this.__dF=null;
}});
})();
(function(){var f="qx.ui.core.MChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(j){return this._indexOf(j);
},add:function(a,b){this._add(a,b);
},addAt:function(l,m,n){this._addAt(l,m,n);
},addBefore:function(g,h,i){this._addBefore(g,h,i);
},addAfter:function(c,d,e){this._addAfter(c,d,e);
},remove:function(o){this._remove(o);
},removeAt:function(k){return this._removeAt(k);
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
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var D="Integer",C="_applyDimension",B="Boolean",A="_applyStretching",z="_applyMargin",y="shorthand",x="_applyAlign",w="qx.debug",v="on",u="allowShrinkY",ba="Wrong 'width' argument. ",Y="Something went wrong with the layout of ",X="bottom",W="Wrong 'left' argument. ",V="baseline",U="marginBottom",T="qx.ui.core.LayoutItem",S="center",R="marginTop",Q="!",K="allowGrowX",L="middle",I="marginLeft",J="allowShrinkX",G="top",H="right",E="marginRight",F="abstract",M="Wrong 'top' argument. ",N="Wrong 'height' argument. ",P="allowGrowY",O="left";
qx.Class.define(T,{type:F,extend:qx.core.Object,properties:{minWidth:{check:D,nullable:true,apply:C,init:null,themeable:true},width:{check:D,nullable:true,apply:C,init:null,themeable:true},maxWidth:{check:D,nullable:true,apply:C,init:null,themeable:true},minHeight:{check:D,nullable:true,apply:C,init:null,themeable:true},height:{check:D,nullable:true,apply:C,init:null,themeable:true},maxHeight:{check:D,nullable:true,apply:C,init:null,themeable:true},allowGrowX:{check:B,apply:A,init:true,themeable:true},allowShrinkX:{check:B,apply:A,init:true,themeable:true},allowGrowY:{check:B,apply:A,init:true,themeable:true},allowShrinkY:{check:B,apply:A,init:true,themeable:true},allowStretchX:{group:[K,J],mode:y,themeable:true},allowStretchY:{group:[P,u],mode:y,themeable:true},marginTop:{check:D,init:0,apply:z,themeable:true},marginRight:{check:D,init:0,apply:z,themeable:true},marginBottom:{check:D,init:0,apply:z,themeable:true},marginLeft:{check:D,init:0,apply:z,themeable:true},margin:{group:[R,E,U,I],mode:y,themeable:true},alignX:{check:[O,S,H],nullable:true,apply:x,themeable:true},alignY:{check:[G,L,X,V],nullable:true,apply:x,themeable:true}},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,getBounds:function(){return this.__dM||this.__dI||null;
},clearSeparators:function(){},renderSeparator:function(bb,bc){},renderLayout:function(f,top,g,h){if(qx.core.Variant.isSet(w,v)){var i=Y+this.toString()+Q;
this.assertInteger(f,W+i);
this.assertInteger(top,M+i);
this.assertInteger(g,ba+i);
this.assertInteger(h,N+i);
}var j=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var j=this._getHeightForWidth(g);
}
if(j!=null&&j!==this.__dH){this.__dH=j;
qx.ui.core.queue.Layout.add(this);
return null;
}var l=this.__dI;

if(!l){l=this.__dI={};
}var k={};

if(f!==l.left||top!==l.top){k.position=true;
l.left=f;
l.top=top;
}
if(g!==l.width||h!==l.height){k.size=true;
l.width=g;
l.height=h;
}if(this.__dJ){k.local=true;
delete this.__dJ;
}
if(this.__dL){k.margin=true;
delete this.__dL;
}return k;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__dJ;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__dJ=true;
this.__dK=null;
},getSizeHint:function(q){var r=this.__dK;

if(r){return r;
}
if(q===false){return null;
}r=this.__dK=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__dH&&this.getHeight()==null){r.height=this.__dH;
}if(r.minWidth>r.width){r.width=r.minWidth;
}
if(r.maxWidth<r.width){r.width=r.maxWidth;
}
if(!this.getAllowGrowX()){r.maxWidth=r.width;
}
if(!this.getAllowShrinkX()){r.minWidth=r.width;
}if(r.minHeight>r.height){r.height=r.minHeight;
}
if(r.maxHeight<r.height){r.height=r.maxHeight;
}
if(!this.getAllowGrowY()){r.maxHeight=r.height;
}
if(!this.getAllowShrinkY()){r.minHeight=r.height;
}return r;
},_computeSizeHint:function(){var bh=this.getMinWidth()||0;
var be=this.getMinHeight()||0;
var bi=this.getWidth()||bh;
var bg=this.getHeight()||be;
var bd=this.getMaxWidth()||Infinity;
var bf=this.getMaxHeight()||Infinity;
return {minWidth:bh,width:bi,maxWidth:bd,minHeight:be,height:bg,maxHeight:bf};
},_hasHeightForWidth:function(){var p=this._getLayout();

if(p){return p.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(s){var t=this._getLayout();

if(t&&t.hasHeightForWidth()){return t.getHeightForWidth(s);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__dL=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__dM;
},setUserBounds:function(c,top,d,e){this.__dM={left:c,top:top,width:d,height:e};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__dM;
qx.ui.core.queue.Layout.add(this);
},__dO:{},setLayoutProperties:function(m){if(m==null){return;
}var n=this.__dN;

if(!n){n=this.__dN={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(m);
}for(var o in m){if(m[o]==null){delete n[o];
}else{n[o]=m[o];
}}},getLayoutProperties:function(){return this.__dN||this.__dO;
},clearLayoutProperties:function(){delete this.__dN;
},updateLayoutProperties:function(bj){var bk=this._getLayout();

if(bk){if(qx.core.Variant.isSet(w,v)){if(bj){for(var bl in bj){if(bj[bl]!==null){bk.verifyLayoutProperty(this,bl,bj[bl]);
}}}}bk.invalidateChildrenCache();
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
},clone:function(){var a=arguments.callee.base.call(this);
var b=this.__dN;

if(b){a.__dN=qx.lang.Object.clone(b);
}return a;
}},destruct:function(){this.$$parent=this.$$subparent=this.__dN=this.__dI=this.__dM=this.__dK=null;
}});
})();
(function(){var m="qx.debug",l="qx.ui.core.DecoratorFactory",k="qxType",j="",i="decorator",h="$$nopool$$",g="qx.ui.core.DecoratorFactory[",f="] ",e="on",d="keys: ",c=", elements: ";
qx.Class.define(l,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dP={};
},statics:{MAX_SIZE:15,__dQ:h},members:{__dP:null,getDecoratorElement:function(x){var C=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(x)){var A=x;
var z=qx.theme.manager.Decoration.getInstance().resolve(x);
}else{var A=C.__dQ;
z=x;
}var B=this.__dP;

if(B[A]&&B[A].length>0){var y=B[A].pop();
}else{var y=this._createDecoratorElement(z,A);
}y.$$pooled=false;
return y;
},poolDecorator:function(n){if(!n||n.$$pooled){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__dQ){n.dispose();
return;
}var p=this.__dP;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(r,s){var t=new qx.html.Decorator(r,s);

if(qx.core.Variant.isSet(m,e)){t.setAttribute(k,i);
}return t;
},toString:qx.core.Variant.select(m,{"on":function(){var u=0;
var v=0;

for(var w in this.__dP){u+=1;
v+=this.__dP[w].length;
}return [g,this.$$hash,f,d,u,c,v].join(j);
},"off":function(){return arguments.callee.base.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var b=this.__dP;

for(var a in b){qx.util.DisposeUtil.disposeArray(b,a);
}}this.__dP=null;
}});
})();
(function(){var gJ="on",gI="px",gH="qx.debug",gG="Boolean",gF="qx.event.type.Mouse",gE="qx.event.type.Drag",gD="visible",gC="qx.event.type.Focus",gB="Integer",gA="excluded",fP="qx.event.type.Data",fO="_applyPadding",fN="qx.event.type.Event",fM="hidden",fL="contextmenu",fK="String",fJ="tabIndex",fI="backgroundColor",fH="focused",fG="changeVisibility",gQ="mshtml",gR="hovered",gO="qx.event.type.KeySequence",gP="qxType",gM="qx.client",gN="absolute",gK="drag",gL="div",gS="object",gT="disabled",go="move",gn="dragstart",gq="qx.dynlocale",gp="dragchange",gs="dragend",gr="resize",gu="Decorator",gt="zIndex",gm="$$widget",gl="opacity",ex="default",ey="Color",ez="changeToolTipText",eA="beforeContextmenuOpen",eB="_applyNativeContextMenu",eC="content",eD="__ef",eE="_applyBackgroundColor",eF="_applyFocusable",eG="changeShadow",gX="qx.event.type.KeyInput",gW="__dX",gV="createChildControl",gU="__eb",hc="Invalid left decorator inset detected: ",hb="Font",ha="_applyShadow",gY="Invalid layout data: ",he="Could not add widget to itself: ",hd="_applyEnabled",fg="_applySelectable",fh="Number",fe="_applyKeepActive",ff="_applyVisibility",fk="The 'after' widget is not a child of this widget!",fl="repeat",fi="qxDraggable",fj="__dR",fc="syncAppearance",fd="paddingLeft",eO="_applyDroppable",eN="Wrong 'left' argument. ",eQ="protector",eP="#",eK="qx.event.type.MouseWheel",eJ="_applyCursor",eM="_applyDraggable",eL="changeTextColor",eI="changeContextMenu",eH="__dS",fq="paddingTop",fr="changeSelectable",fs="hideFocus",ft="Invalid top decorator inset detected: ",fm="none",fn="outline",fo="The 'before' widget is not a child of this widget!",fp="_applyAppearance",fu=" returned an invalid size hint!",fv="_applyOpacity",eY="url(",eX=")",eW="qx.ui.core.Widget",eV="minHeight is larger than maxHeight!",eU="_applyFont",eT="cursor",eS="qxDroppable",eR="changeZIndex",fb="changeEnabled",fa="changeFont",fw="_applyDecorator",fx="_applyZIndex",fy="_applyTextColor",fz="qx.ui.menu.Menu",fA="Invalid right decorator inset detected: ",fB="Invalid widget to add: ",fC="_applyToolTipText",fD="The layout of the widget",fE="__ed",fF="true",fT="widget",fS="Wrong 'top' argument. ",fR="qxClass",fQ="changeDecorator",fX="__dV",fW="changeBackgroundColor",fV="_applyTabIndex",fU="Invalid bottom decorator inset detected: ",ga="changeAppearance",fY="shorthand",gh="/",gi="",gf="_applyContextMenu",gg="container",gd="paddingBottom",ge="__dW",gb="changeNativeContextMenu",gc="qx.ui.tooltip.ToolTip",gj="qxKeepActive",gk="_applyKeepFocus",gw="paddingRight",gv="minWidth is larger than maxWidth!",gy="changeLocale",gx="qxKeepFocus",gz="qx/static/blank.gif";
qx.Class.define(eW,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__dR=this._createContainerElement();
this.__dS=this.__ee();
this.__dR.add(this.__dS);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:fN,disappear:fN,createChildControl:fP,resize:fP,move:fP,syncAppearance:fP,mousemove:gF,mouseover:gF,mouseout:gF,mousedown:gF,mouseup:gF,click:gF,dblclick:gF,contextmenu:gF,beforeContextmenuOpen:gF,mousewheel:eK,keyup:gO,keydown:gO,keypress:gO,keyinput:gX,focus:gC,blur:gC,focusin:gC,focusout:gC,activate:gC,deactivate:gC,capture:fN,losecapture:fN,drop:gE,dragleave:gE,dragover:gE,drag:gE,dragstart:gE,dragend:gE,dragchange:gE,droprequest:gE},properties:{paddingTop:{check:gB,init:0,apply:fO,themeable:true},paddingRight:{check:gB,init:0,apply:fO,themeable:true},paddingBottom:{check:gB,init:0,apply:fO,themeable:true},paddingLeft:{check:gB,init:0,apply:fO,themeable:true},padding:{group:[fq,gw,gd,fd],mode:fY,themeable:true},zIndex:{nullable:true,init:null,apply:fx,event:eR,check:gB,themeable:true},decorator:{nullable:true,init:null,apply:fw,event:fQ,check:gu,themeable:true},shadow:{nullable:true,init:null,apply:ha,event:eG,check:gu,themeable:true},backgroundColor:{nullable:true,check:ey,apply:eE,event:fW,themeable:true},textColor:{nullable:true,check:ey,apply:fy,event:eL,themeable:true,inheritable:true},font:{nullable:true,apply:eU,check:hb,event:fa,themeable:true,inheritable:true,dispose:true},opacity:{check:fh,apply:fv,themeable:true,nullable:true,init:null},cursor:{check:fK,apply:eJ,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:gc,nullable:true},toolTipText:{check:fK,nullable:true,event:ez,apply:fC},toolTipIcon:{check:fK,nullable:true,event:ez},blockToolTip:{check:gG,init:false},visibility:{check:[gD,fM,gA],init:gD,apply:ff,event:fG},enabled:{init:true,check:gG,inheritable:true,apply:hd,event:fb},anonymous:{init:false,check:gG},tabIndex:{check:gB,nullable:true,apply:fV},focusable:{check:gG,init:false,apply:eF},keepFocus:{check:gG,init:false,apply:gk},keepActive:{check:gG,init:false,apply:fe},draggable:{check:gG,init:false,apply:eM},droppable:{check:gG,init:false,apply:eO},selectable:{check:gG,init:false,event:fr,apply:fg},contextMenu:{check:fz,apply:gf,nullable:true,event:eI},nativeContextMenu:{check:gG,init:false,themeable:true,event:gb,apply:eB},appearance:{check:fK,init:fT,apply:fp,event:ga}},statics:{DEBUG:false,getWidgetByElement:function(s){while(s){var t=s.$$widget;
if(t!=null){return qx.core.ObjectRegistry.fromHashCode(t);
}s=s.parentNode;
}return null;
},contains:function(parent,dH){while(dH){if(parent==dH){return true;
}dH=dH.getLayoutParent();
}return false;
},__dT:new qx.ui.core.DecoratorFactory(),__dU:new qx.ui.core.DecoratorFactory()},members:{__dR:null,__dS:null,__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__eb:null,_getLayout:function(){return this.__eb;
},_setLayout:function(O){if(qx.core.Variant.isSet(gH,gJ)){if(O){this.assertInstance(O,qx.ui.layout.Abstract);
}}
if(this.__eb){this.__eb.connectToWidget(null);
}
if(O){O.connectToWidget(this);
}this.__eb=O;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cP=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cP);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cP);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__ec:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var ba=qx.theme.manager.Decoration.getInstance();
var bc=ba.resolve(a).getInsets();
var bb=ba.resolve(b).getInsets();

if(bc.top!=bb.top||bc.right!=bb.right||bc.bottom!=bb.bottom||bc.left!=bb.left){return true;
}return false;
},renderLayout:function(c,top,d,f){var q=arguments.callee.base.call(this,c,top,d,f);
if(!q){return;
}var h=this.getContainerElement();
var content=this.getContentElement();
var n=q.size||this._updateInsets;
var r=gI;
var o={};
if(q.position){o.left=c+r;
o.top=top+r;
}if(q.size){o.width=d+r;
o.height=f+r;
}
if(q.position||q.size){h.setStyles(o);
}
if(n||q.local||q.margin){var g=this.getInsets();
var innerWidth=d-g.left-g.right;
var innerHeight=f-g.top-g.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var k={};

if(this._updateInsets){k.left=g.left+r;
k.top=g.top+r;
}
if(n){k.width=innerWidth+r;
k.height=innerHeight+r;
}
if(n||this._updateInsets){content.setStyles(k);
}
if(q.size){var p=this.__dX;

if(p){p.setStyles({width:d+gI,height:f+gI});
}}
if(q.size||this._updateInsets){if(this.__dV){this.__dV.resize(d,f);
}}
if(q.size){if(this.__dW){var g=this.__dW.getInsets();
var m=d+g.left+g.right;
var j=f+g.top+g.bottom;
this.__dW.resize(m,j);
}}
if(n||q.local||q.margin){if(this.__eb&&this.hasLayoutChildren()){this.__eb.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(q.position&&this.hasListener(go)){this.fireDataEvent(go,this.getBounds());
}
if(q.size&&this.hasListener(gr)){this.fireDataEvent(gr,this.getBounds());
}delete this._updateInsets;
return q;
},__ed:null,clearSeparators:function(){var db=this.__ed;

if(!db){return;
}var dc=qx.ui.core.Widget.__dT;
var content=this.getContentElement();
var da;

for(var i=0,l=db.length;i<l;i++){da=db[i];
dc.poolDecorator(da);
content.remove(da);
}db.length=0;
},renderSeparator:function(eu,ev){var ew=qx.ui.core.Widget.__dT.getDecoratorElement(eu);
this.getContentElement().add(ew);
ew.resize(ev.width,ev.height);
ew.setStyles({left:ev.left+gI,top:ev.top+gI});
if(!this.__ed){this.__ed=[ew];
}else{this.__ed.push(ew);
}},_computeSizeHint:function(){var ee=this.getWidth();
var ed=this.getMinWidth();
var dY=this.getMaxWidth();
var ec=this.getHeight();
var ea=this.getMinHeight();
var eb=this.getMaxHeight();

if(qx.core.Variant.isSet(gH,gJ)){if(ed!==null&&dY!==null){this.assert(ed<=dY,gv);
}
if(ea!==null&&eb!==null){this.assert(ea<=eb,eV);
}}var ef=this._getContentHint();
var dX=this.getInsets();
var eh=dX.left+dX.right;
var eg=dX.top+dX.bottom;

if(ee==null){ee=ef.width+eh;
}
if(ec==null){ec=ef.height+eg;
}
if(ed==null){ed=eh;

if(ef.minWidth!=null){ed+=ef.minWidth;
}}
if(ea==null){ea=eg;

if(ef.minHeight!=null){ea+=ef.minHeight;
}}
if(dY==null){if(ef.maxWidth==null){dY=Infinity;
}else{dY=ef.maxWidth+eh;
}}
if(eb==null){if(ef.maxHeight==null){eb=Infinity;
}else{eb=ef.maxHeight+eg;
}}return {width:ee,minWidth:ed,maxWidth:dY,height:ec,minHeight:ea,maxHeight:eb};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__eb){this.__eb.invalidateLayoutCache();
}},_getContentHint:function(){var H=this.__eb;

if(H){if(this.hasLayoutChildren()){var I=H.getSizeHint();

if(qx.core.Variant.isSet(gH,gJ)){var G=fD+this.toString()+fu;
this.assertInteger(I.width,eN+G);
this.assertInteger(I.height,fS+G);
}return I;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dL){var dP=this.getInsets();
var dS=dP.left+dP.right;
var dR=dP.top+dP.bottom;
var dQ=dL-dS;
var dN=this._getLayout();

if(dN&&dN.hasHeightForWidth()){var dM=dN.getHeightForWidth(dL);
}else{dM=this._getContentHeightForWidth(dQ);
}var dO=dM+dR;
return dO;
},_getContentHeightForWidth:function(dq){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var cj=this.getPaddingRight();
var cl=this.getPaddingBottom();
var ck=this.getPaddingLeft();

if(this.__dV){var ci=this.__dV.getInsets();

if(qx.core.Variant.isSet(gH,gJ)){this.assertNumber(ci.top,ft+ci.top);
this.assertNumber(ci.right,fA+ci.right);
this.assertNumber(ci.bottom,fU+ci.bottom);
this.assertNumber(ci.left,hc+ci.left);
}top+=ci.top;
cj+=ci.right;
cl+=ci.bottom;
ck+=ci.left;
}return {"top":top,"right":cj,"bottom":cl,"left":ck};
},getInnerSize:function(){var bS=this.getBounds();

if(!bS){return null;
}var bR=this.getInsets();
return {width:bS.width-bR.left-bR.right,height:bS.height-bR.top-bR.bottom};
},show:function(){this.setVisibility(gD);
},hide:function(){this.setVisibility(fM);
},exclude:function(){this.setVisibility(gA);
},isVisible:function(){return this.getVisibility()===gD;
},isHidden:function(){return this.getVisibility()!==gD;
},isExcluded:function(){return this.getVisibility()===gA;
},isSeeable:function(){var ds=this.getContainerElement().getDomElement();

if(ds){return ds.offsetWidth>0;
}var dr=this;

do{if(!dr.isVisible()){return false;
}
if(dr.isRootWidget()){return true;
}dr=dr.getLayoutParent();
}while(dr);
return false;
},_createContainerElement:function(){var dE=new qx.html.Element(gL);

if(qx.core.Variant.isSet(gH,gJ)){dE.setAttribute(gP,gg);
}dE.setStyles({"position":gN,"zIndex":0});
dE.setAttribute(gm,this.toHashCode());
if(qx.core.Variant.isSet(gH,gJ)){dE.setAttribute(fR,this.classname);
}return dE;
},__ee:function(){var hh=this._createContentElement();

if(qx.core.Variant.isSet(gH,gJ)){hh.setAttribute(gP,eC);
}hh.setStyles({"position":gN,"zIndex":10});
return hh;
},_createContentElement:function(){var bL=new qx.html.Element(gL);
bL.setStyles({"overflowX":fM,"overflowY":fM});
return bL;
},getContainerElement:function(){return this.__dR;
},getContentElement:function(){return this.__dS;
},getDecoratorElement:function(){return this.__dV||null;
},getShadowElement:function(){return this.__dW||null;
},__ef:null,getLayoutChildren:function(){var bW=this.__ef;

if(!bW){return this.__eg;
}var bX;

for(var i=0,l=bW.length;i<l;i++){var bV=bW[i];

if(bV.hasUserBounds()||bV.isExcluded()){if(bX==null){bX=bW.concat();
}qx.lang.Array.remove(bX,bV);
}}return bX||bW;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dI=this.__eb;

if(dI){dI.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var A=this.__ef;

if(!A){return false;
}var B;

for(var i=0,l=A.length;i<l;i++){B=A[i];

if(!B.hasUserBounds()&&!B.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__eg:[],_getChildren:function(){return this.__ef||this.__eg;
},_indexOf:function(bJ){var bK=this.__ef;

if(!bK){return -1;
}return bK.indexOf(bJ);
},_hasChildren:function(){var cy=this.__ef;
return cy!=null&&(!!cy[0]);
},addChildrenToQueue:function(hp){var hq=this.__ef;

if(!hq){return;
}var hr;

for(var i=0,l=hq.length;i<l;i++){hr=hq[i];
hp[hr.$$hash]=hr;
hr.addChildrenToQueue(hp);
}},_add:function(bT,bU){if(bT.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,bT);
}
if(this.__ef){this.__ef.push(bT);
}else{this.__ef=[bT];
}this.__eh(bT,bU);
},_addAt:function(dA,dB,dC){if(!this.__ef){this.__ef=[];
}if(dA.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,dA);
}var dD=this.__ef[dB];

if(dD===dA){return dA.setLayoutProperties(dC);
}
if(dD){qx.lang.Array.insertBefore(this.__ef,dA,dD);
}else{this.__ef.push(dA);
}this.__eh(dA,dC);
},_addBefore:function(bn,bo,bp){if(qx.core.Variant.isSet(gH,gJ)){this.assertInArray(bo,this._getChildren(),fo);
}
if(bn==bo){return;
}
if(!this.__ef){this.__ef=[];
}if(bn.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,bn);
}qx.lang.Array.insertBefore(this.__ef,bn,bo);
this.__eh(bn,bp);
},_addAfter:function(W,X,Y){if(qx.core.Variant.isSet(gH,gJ)){this.assertInArray(X,this._getChildren(),fk);
}
if(W==X){return;
}
if(!this.__ef){this.__ef=[];
}if(W.getLayoutParent()==this){qx.lang.Array.remove(this.__ef,W);
}qx.lang.Array.insertAfter(this.__ef,W,X);
this.__eh(W,Y);
},_remove:function(dp){if(!this.__ef){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ef,dp);
this.__ei(dp);
},_removeAt:function(cn){if(!this.__ef){throw new Error("This widget has no children!");
}var co=this.__ef[cn];
qx.lang.Array.removeAt(this.__ef,cn);
this.__ei(co);
return co;
},_removeAll:function(){if(!this.__ef){return;
}var bY=this.__ef.concat();
this.__ef.length=0;

for(var i=bY.length-1;i>=0;i--){this.__ei(bY[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__eh:function(ce,cf){if(qx.core.Variant.isSet(gH,gJ)){this.assertInstance(ce,qx.ui.core.LayoutItem,fB+ce);
this.assertNotIdentical(ce,this,he+ce);

if(cf!=null){this.assertType(cf,gS,gY+cf);
}}var parent=ce.getLayoutParent();

if(parent&&parent!=this){parent._remove(ce);
}ce.setLayoutParent(this);
if(cf){ce.setLayoutProperties(cf);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ce);
}},__ei:function(cr){if(qx.core.Variant.isSet(gH,gJ)){this.assertNotUndefined(cr);
}
if(cr.getLayoutParent()!==this){throw new Error("Remove Error: "+cr+" is not a child of this widget!");
}cr.setLayoutParent(null);
if(this.__eb){this.__eb.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(cr);
}},capture:function(bQ){this.getContainerElement().capture(bQ);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(P,Q,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dX){return;
}var bO=this.__dX=new qx.html.Element;

if(qx.core.Variant.isSet(gH,gJ)){bO.setAttribute(gP,eQ);
}bO.setStyles({position:gN,top:0,left:0,zIndex:7});
var bP=this.getBounds();

if(bP){this.__dX.setStyles({width:bP.width+gI,height:bP.height+gI});
}if(qx.core.Variant.isSet(gM,gQ)){bO.setStyles({backgroundImage:eY+qx.util.ResourceManager.getInstance().toUri(gz)+eX,backgroundRepeat:fl});
}this.getContainerElement().add(bO);
},_applyDecorator:function(cI,cJ){if(qx.core.Variant.isSet(gH,gJ)){if(cI&&typeof cI===gS){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+cI);
}}}var cN=qx.ui.core.Widget.__dT;
var cL=this.getContainerElement();
if(!this.__dX&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(cJ){cL.remove(this.__dV);
cN.poolDecorator(this.__dV);
}if(cI){var cM=this.__dV=cN.getDecoratorElement(cI);
cM.setStyle(gt,5);
var cK=this.getBackgroundColor();
cM.tint(cK);
cL.add(cM);
}else{delete this.__dV;
this._applyBackgroundColor(this.getBackgroundColor());
}if(cI&&!cJ&&cK){this.getContainerElement().setStyle(fI,null);
}if(this.__ec(cJ,cI)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(cI){var cO=this.getBounds();

if(cO){cM.resize(cO.width,cO.height);
this.__dX&&
this.__dX.setStyles({width:cO.width+gI,height:cO.height+gI});
}}},_applyShadow:function(cz,cA){var cH=qx.ui.core.Widget.__dU;
var cC=this.getContainerElement();
if(cA){cC.remove(this.__dW);
cH.poolDecorator(this.__dW);
}if(cz){var cE=this.__dW=cH.getDecoratorElement(cz);
cC.add(cE);
var cG=cE.getInsets();
cE.setStyles({left:(-cG.left)+gI,top:(-cG.top)+gI});
var cF=this.getBounds();

if(cF){var cD=cF.width+cG.left+cG.right;
var cB=cF.height+cG.top+cG.bottom;
cE.resize(cD,cB);
}cE.tint(null);
}else{delete this.__dW;
}},_applyToolTipText:function(hm,hn){if(qx.core.Variant.isSet(gq,gJ)){if(this.__ea){return;
}var ho=qx.locale.Manager.getInstance();
this.__ea=ho.addListener(gy,function(){if(hm&&hm.translate){this.setToolTipText(hm.translate());
}},this);
}},_applyTextColor:function(K,L){},_applyZIndex:function(y,z){this.getContainerElement().setStyle(gt,y==null?0:y);
},_applyVisibility:function(bk,bl){var bm=this.getContainerElement();

if(bk===gD){bm.show();
}else{bm.hide();
}var parent=this.$$parent;

if(parent&&(bl==null||bk==null||bl===gA||bk===gA)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(cW,cX){this.getContainerElement().setStyle(gl,cW==1?null:cW);
if(qx.core.Variant.isSet(gM,gQ)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var cY=(cW==1||cW==null)?null:0.99;
this.getContentElement().setStyle(gl,cY);
}}},_applyCursor:function(cp,cq){if(cp==null&&!this.isSelectable()){cp=ex;
}this.getContainerElement().setStyle(eT,cp,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(bE,bF){var bG=this.getBackgroundColor();
var bI=this.getContainerElement();

if(this.__dV){this.__dV.tint(bG);
bI.setStyle(fI,null);
}else{var bH=qx.theme.manager.Color.getInstance().resolve(bG);
bI.setStyle(fI,bH);
}},_applyFont:function(dd,de){},__ej:null,$$stateChanges:null,_forwardStates:null,hasState:function(M){var N=this.__ej;
return N&&N[M];
},addState:function(R){var S=this.__ej;

if(!S){S=this.__ej={};
}
if(S[R]){return;
}this.__ej[R]=true;
if(R===gR){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var V=this.__em;

if(forward&&forward[R]&&V){var T;

for(var U in V){T=V[U];

if(T instanceof qx.ui.core.Widget){V[U].addState(R);
}}}},removeState:function(dv){var dw=this.__ej;

if(!dw||!dw[dv]){return;
}delete this.__ej[dv];
if(dv===gR){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var dz=this.__em;

if(forward&&forward[dv]&&dz){for(var dy in dz){var dx=dz[dy];

if(dx instanceof qx.ui.core.Widget){dx.removeState(dv);
}}}},replaceState:function(by,bz){var bA=this.__ej;

if(!bA){bA=this.__ej={};
}
if(!bA[bz]){bA[bz]=true;
}
if(bA[by]){delete bA[by];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bD=this.__em;

if(forward&&forward[bz]&&bD){for(var bC in bD){var bB=bD[bC];

if(bB instanceof qx.ui.core.Widget){bB.replaceState(by,bz);
}}}},__ek:null,__el:null,syncAppearance:function(){var eo=this.__ej;
var en=this.__ek;
var ep=qx.theme.manager.Appearance.getInstance();
var ek=qx.core.Property.$$method.setThemed;
var et=qx.core.Property.$$method.resetThemed;
if(this.__el){delete this.__el;
if(en){var ej=ep.styleFrom(en,eo,null,this.getAppearance());
if(ej){en=null;
}}}if(!en){var em=this;
var es=[];

do{es.push(em.$$subcontrol||em.getAppearance());
}while(em=em.$$subparent);
en=this.__ek=es.reverse().join(gh).replace(/#[0-9]+/g,gi);
}var eq=ep.styleFrom(en,eo,null,this.getAppearance());

if(eq){if(ej){for(var er in ej){if(eq[er]===undefined){this[et[er]]();
}}}if(qx.core.Variant.isSet(gH,gJ)){for(var er in eq){if(!this[ek[er]]){throw new Error(this.classname+' has no themeable property "'+er+'" while styling '+en);
}}}for(var er in eq){eq[er]===undefined?this[et[er]]():this[ek[er]](eq[er]);
}}else if(ej){for(var er in ej){this[et[er]]();
}}this.fireDataEvent(fc,this.__ej);
},_applyAppearance:function(dJ,dK){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dY){qx.ui.core.queue.Appearance.add(this);
this.__dY=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__el=true;
qx.ui.core.queue.Appearance.add(this);
var hu=this.__em;

if(hu){var hs;

for(var ht in hu){hs=hu[ht];

if(hs instanceof qx.ui.core.Widget){hs.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var J=this;

while(J.getAnonymous()){J=J.getLayoutParent();

if(!J){return null;
}}return J;
},getFocusTarget:function(){var ei=this;

if(!ei.getEnabled()){return null;
}
while(ei.getAnonymous()||!ei.getFocusable()){ei=ei.getLayoutParent();

if(!ei||!ei.getEnabled()){return null;
}}return ei;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bu,bv){var bw=this.getFocusElement();
if(bu){var bx=this.getTabIndex();

if(bx==null){bx=1;
}bw.setAttribute(fJ,bx);
if(qx.core.Variant.isSet(gM,gQ)){bw.setAttribute(fs,fF);
}else{bw.setStyle(fn,fm);
}}else{if(bw.isNativelyFocusable()){bw.setAttribute(fJ,-1);
}else if(bv){bw.setAttribute(fJ,null);
}}},_applyKeepFocus:function(cS){var cT=this.getFocusElement();
cT.setAttribute(gx,cS?gJ:null);
},_applyKeepActive:function(bq){var br=this.getContainerElement();
br.setAttribute(gj,bq?gJ:null);
},_applyTabIndex:function(hg){if(hg==null){hg=1;
}else if(hg<1||hg>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&hg!=null){this.getFocusElement().setAttribute(fJ,hg);
}},_applySelectable:function(cm){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(cm);
this.getContentElement().setSelectable(cm);
},_applyEnabled:function(u,v){if(u===false){this.addState(gT);
this.removeState(gR);
if(this.isFocusable()){this.removeState(fH);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(gT);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(dF,dG,name){},_applyContextMenu:function(w,x){if(x){x.removeState(fL);

if(x.getOpener()==this){x.resetOpener();
}
if(!w){this.removeListener(fL,this._onContextMenuOpen);
x.removeListener(fG,this._onBeforeContextMenuOpen,this);
}}
if(w){w.setOpener(this);
w.addState(fL);

if(!x){this.addListener(fL,this._onContextMenuOpen);
w.addListener(fG,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==gD&&this.hasListener(eA)){this.fireDataEvent(eA,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(bM,bN){if(!this.isEnabled()&&bM===true){bM=false;
}qx.ui.core.DragDropCursor.getInstance();
if(bM){this.addListener(gn,this._onDragStart);
this.addListener(gK,this._onDrag);
this.addListener(gs,this._onDragEnd);
this.addListener(gp,this._onDragChange);
}else{this.removeListener(gn,this._onDragStart);
this.removeListener(gK,this._onDrag);
this.removeListener(gs,this._onDragEnd);
this.removeListener(gp,this._onDragChange);
}this.getContainerElement().setAttribute(fi,bM?gJ:null);
},_applyDroppable:function(cU,cV){if(!this.isEnabled()&&cU===true){cU=false;
}this.getContainerElement().setAttribute(eS,cU?gJ:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(ex);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var cc=qx.ui.core.DragDropCursor.getInstance();
var cd=e.getCurrentAction();
cd?cc.setAction(cd):cc.resetAction();
},visualizeFocus:function(){this.addState(fH);
},visualizeBlur:function(){this.removeState(fH);
},scrollChildIntoView:function(dT,dU,dV,dW){this.scrollChildIntoViewX(dT,dU,dW);
this.scrollChildIntoViewY(dT,dV,dW);
},scrollChildIntoViewX:function(df,dg,dh){this.getContentElement().scrollChildIntoViewX(df.getContainerElement(),dg,dh);
},scrollChildIntoViewY:function(D,E,F){this.getContentElement().scrollChildIntoViewY(D.getContainerElement(),E,F);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(C){if(!this.__em){return false;
}return !!this.__em[C];
},__em:null,_getCreatedChildControls:function(){return this.__em;
},getChildControl:function(di,dj){if(!this.__em){if(dj){return null;
}this.__em={};
}var dk=this.__em[di];

if(dk){return dk;
}
if(dj===true){return null;
}return this._createChildControl(di);
},_showChildControl:function(hi){var hj=this.getChildControl(hi);
hj.show();
return hj;
},_excludeChildControl:function(ca){var cb=this.getChildControl(ca,true);

if(cb){cb.exclude();
}},_isChildControlVisible:function(dt){var du=this.getChildControl(dt,true);

if(du){return du.isVisible();
}return false;
},_createChildControl:function(bf){if(!this.__em){this.__em={};
}else if(this.__em[bf]){throw new Error("Child control '"+bf+"' already created!");
}var bj=bf.indexOf(eP);

if(bj==-1){var bg=this._createChildControlImpl(bf);
}else{var bg=this._createChildControlImpl(bf.substring(0,bj));
}
if(!bg){throw new Error("Unsupported control: "+bf);
}bg.$$subcontrol=bf;
bg.$$subparent=this;
var bh=this.__ej;
var forward=this._forwardStates;

if(bh&&forward&&bg instanceof qx.ui.core.Widget){for(var bi in bh){if(forward[bi]){bg.addState(bi);
}}}this.fireDataEvent(gV,bg);
return this.__em[bf]=bg;
},_createChildControlImpl:function(dl){return null;
},_disposeChildControls:function(){var cx=this.__em;

if(!cx){return;
}var cv=qx.ui.core.Widget;

for(var cw in cx){var cu=cx[cw];

if(!cv.contains(this,cu)){cu.destroy();
}else{cu.dispose();
}}delete this.__em;
},_findTopControl:function(){var hf=this;

while(hf){if(!hf.$$subparent){return hf;
}hf=hf.$$subparent;
}return null;
},getContainerLocation:function(bd){var be=this.getContainerElement().getDomElement();
return be?qx.bom.element.Location.get(be,bd):null;
},getContentLocation:function(cs){var ct=this.getContentElement().getDomElement();
return ct?qx.bom.element.Location.get(ct,cs):null;
},setDomLeft:function(cg){var ch=this.getContainerElement().getDomElement();

if(ch){ch.style.left=cg+gI;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(bs){var bt=this.getContainerElement().getDomElement();

if(bt){bt.style.top=bs+gI;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cQ,top){var cR=this.getContainerElement().getDomElement();

if(cR){cR.style.left=cQ+gI;
cR.style.top=top+gI;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hk=arguments.callee.base.call(this);

if(this.getChildren){var hl=this.getChildren();

for(var i=0,l=hl.length;i<l;i++){hk.add(hl[i].clone());
}}return hk;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(gq,gJ)){if(this.__ea){qx.locale.Manager.getInstance().removeListenerById(this.__ea);
}}this.getContainerElement().setAttribute(gm,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var dn=qx.ui.core.Widget;
var dm=this.getContainerElement();

if(this.__dV){dm.remove(this.__dV);
dn.__dT.poolDecorator(this.__dV);
}
if(this.__dW){dm.remove(this.__dW);
dn.__dU.poolDecorator(this.__dW);
}this.clearSeparators();
this.__dV=this.__dW=this.__ed=null;
}else{this._disposeArray(fE);
this._disposeObjects(fX,ge);
}this._disposeArray(eD);
this.__ej=this.__em=null;
this._disposeObjects(gU,fj,eH,gW);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this._setLayout(g);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(i){this.fireNonBubblingEvent(b,qx.event.type.Data,[i]);
},_afterRemoveChild:function(h){this.fireNonBubblingEvent(a,qx.event.type.Data,[h]);
}},defer:function(e,f){qx.ui.core.MChildrenHandling.remap(f);
qx.ui.core.MLayoutHandling.remap(f);
}});
})();
(function(){var s="keep-align",r="qx.debug",q="interval",p="'placementModeX' and 'placementModeY' instead.",o="The property 'smart' is deprecated. Please us the properties ",n="on",m="Integer",l="direct",k="best-fit",j="mouse",L="bottom-left",K="disappear",J="Boolean",I="Invalid attribute 'value'.",H="bottom-right",G="widget",F="qx.ui.core.MPlacement",E="left-top",D="offsetRight",C="shorthand",z="offsetLeft",A="top-left",x="appear",y="offsetBottom",v="top-right",w="offsetTop",t="right-bottom",u="right-top",B="left-bottom";
qx.Mixin.define(F,{properties:{position:{check:[A,v,L,H,E,B,u,t],init:L,themeable:true},placeMethod:{check:[G,j],init:j,themeable:true},domMove:{check:J,init:false},placementModeX:{check:[l,s,k],init:s,themeable:true},placementModeY:{check:[l,s,k],init:s,themeable:true},offsetLeft:{check:m,init:0,themeable:true},offsetTop:{check:m,init:0,themeable:true},offsetRight:{check:m,init:0,themeable:true},offsetBottom:{check:m,init:0,themeable:true},offset:{group:[w,D,y,z],mode:C,themeable:true}},members:{__en:null,getLayoutLocation:function(T){var W,V,X,top;
V=T.getBounds();
X=V.left;
top=V.top;
var Y=V;
T=T.getLayoutParent();

while(T&&!T.isRootWidget()){V=T.getBounds();
X+=V.left;
top+=V.top;
W=T.getInsets();
X+=W.left;
top+=W.top;
T=T.getLayoutParent();
}if(T.isRootWidget()){var U=T.getContainerLocation();

if(U){X+=U.left;
top+=U.top;
}}return {left:X,top:top,right:X+Y.width,bottom:top+Y.height};
},moveTo:function(P,top){if(this.getDomMove()){this.setDomPosition(P,top);
}else{this.setLayoutProperties({left:P,top:top});
}},placeToWidget:function(M,N){if(N){this.__en=qx.lang.Function.bind(this.placeToWidget,this,M,false);
qx.event.Idle.getInstance().addListener(q,this.__en);
this.addListener(K,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(q,this.__en);
this.__en=null;
}},this);
}var O=M.getContainerLocation()||this.getLayoutLocation(M);
this.__ep(O);
},placeToMouse:function(event){var bd=event.getDocumentLeft();
var top=event.getDocumentTop();
var bc={left:bd,top:top,right:bd,bottom:top};
this.__ep(bc);
},placeToElement:function(Q,R){var location=qx.bom.element.Location.get(Q);
var S={left:location.left,top:location.top,right:location.left+Q.offsetWidth,bottom:location.top+Q.offsetHeight};
if(R){this.__en=qx.lang.Function.bind(this.placeToElement,this,Q,false);
qx.event.Idle.getInstance().addListener(q,this.__en);
this.addListener(K,function(){if(this.__en){qx.event.Idle.getInstance().removeListener(q,this.__en);
this.__en=null;
}},this);
}this.__ep(S);
},placeToPoint:function(h){var i={left:h.left,top:h.top,right:h.left,bottom:h.top};
this.__ep(i);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__eo:function(f){var g=null;

if(this._computePlacementSize){var g=this._computePlacementSize();
}else if(this.isVisible()){var g=this.getBounds();
}
if(g==null){this.addListenerOnce(x,function(){this.__eo(f);
},this);
}else{f.call(this,g);
}},__ep:function(a){this.__eo(function(ba){var bb=qx.util.placement.Placement.compute(ba,this.getLayoutParent().getBounds(),a,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(bb.left,bb.top);
});
},setSmart:function(d){if(qx.core.Variant.isSet(r,n)){qx.core.Assert.assertBoolean(d,I);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,o+p);
}var e=d?s:l;
this.set({placementModeX:e,placementModeY:e});
},getSmart:function(){if(qx.core.Variant.isSet(r,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o+p);
}var b=this.getPlacementModeX()==s?true:false;
var c=this.getPlacementModeY()==s?true:false;
return b&&c;
},resetSmart:function(){if(qx.core.Variant.isSet(r,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o+p);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(r,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o+p);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(r,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,o+p);
}this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__en){qx.event.Idle.getInstance().removeListener(q,this.__en);
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
(function(){var r="atom",q="Integer",p="String",o="_applyRich",n="qx.ui.tooltip.ToolTip",m="_applyIcon",l="tooltip",k="qx.ui.core.Widget",j="mouseover",i="Boolean",h="_applyLabel";
qx.Class.define(n,{extend:qx.ui.popup.Popup,construct:function(u,v){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(r);
if(u!=null){this.setLabel(u);
}
if(v!=null){this.setIcon(v);
}this.addListener(j,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:l},showTimeout:{check:q,init:700,themeable:true},hideTimeout:{check:q,init:4000,themeable:true},label:{check:p,nullable:true,apply:h},icon:{check:p,nullable:true,apply:m,themeable:true},rich:{check:i,init:false,apply:o},opener:{check:k,nullable:true}},members:{_createChildControlImpl:function(s){var t;

switch(s){case r:t=new qx.ui.basic.Atom;
this._add(t);
break;
}return t||arguments.callee.base.call(this,s);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(w,x){var y=this.getChildControl(r);
w==null?y.resetIcon:y.setIcon(w);
},_applyLabel:function(a,b){var c=this.getChildControl(r);
a==null?c.resetLabel():c.setLabel(a);
},_applyRich:function(d,f){var g=this.getChildControl(r);
g.setRich(d);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__eq:{},remove:function(q){delete this.__eq[q.$$hash];
},add:function(c){this.__eq[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var m=this.__et();
for(var i=m.length-1;i>=0;i--){var n=m[i];
if(n.hasValidLayout()){continue;
}if(n.isRootWidget()&&!n.hasUserBounds()){var p=n.getSizeHint();
n.renderLayout(0,0,p.width,p.height);
}else{var o=n.getBounds();
n.renderLayout(o.left,o.top,o.width,o.height);
}}},getNestingLevel:function(x){var y=this.__es;
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
},__er:function(){var w=qx.ui.core.queue.Visibility;
this.__es={};
var v=[];
var u=this.__eq;
var r,t;

for(var s in u){r=u[s];

if(w.isVisible(r)){t=this.getNestingLevel(r);
if(!v[t]){v[t]={};
}v[t][s]=r;
delete u[s];
}}return v;
},__et:function(){var g=[];
var j=this.__er();

for(var f=j.length-1;f>=0;f--){if(!j[f]){continue;
}
for(var e in j[f]){var d=j[f][e];
if(f==0||d.isRootWidget()||d.hasUserBounds()){g.push(d);
d.invalidateLayoutCache();
continue;
}var l=d.getSizeHint(false);

if(l){d.invalidateLayoutCache();
var h=d.getSizeHint();
var k=(!d.getBounds()||l.minWidth!==h.minWidth||l.width!==h.width||l.maxWidth!==h.maxWidth||l.minHeight!==h.minHeight||l.height!==h.height||l.maxHeight!==h.maxHeight);
}else{k=true;
}
if(k){var parent=d.getLayoutParent();

if(!j[f-1]){j[f-1]={};
}j[f-1][parent.$$hash]=parent;
}else{g.push(d);
}}}return g;
}}});
})();
(function(){var d="qx.event.handler.UserAction";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this.__eu=k;
this.__ev=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eu:null,__ev:null,canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},destruct:function(){this.__eu=this.__ev=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var f="qx.util.DeferredCallManager",e="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:e,construct:function(){this.__ew={};
this.__ex=qx.lang.Function.bind(this.__eB,this);
this.__ey=false;
},members:{__ez:null,__eA:null,__ew:null,__ey:null,__ex:null,schedule:function(a){if(this.__ez==null){this.__ez=window.setTimeout(this.__ex,0);
}var b=a.toHashCode();
if(this.__eA&&this.__eA[b]){return;
}this.__ew[b]=a;
this.__ey=true;
},cancel:function(c){var d=c.toHashCode();
if(this.__eA&&this.__eA[d]){this.__eA[d]=null;
return;
}delete this.__ew[d];
if(qx.lang.Object.isEmpty(this.__ew)&&this.__ez!=null){window.clearTimeout(this.__ez);
this.__ez=null;
}},__eB:qx.event.GlobalError.observeMethod(function(){this.__ez=null;
while(this.__ey){this.__eA=qx.lang.Object.clone(this.__ew);
this.__ew={};
this.__ey=false;

for(var h in this.__eA){var g=this.__eA[h];

if(g){this.__eA[h]=null;
g.call();
}}}this.__eA=null;
})},destruct:function(){if(this.__ez!=null){window.clearTimeout(this.__ez);
}this.__ex=this.__ew=null;
}});
})();
(function(){var c="qx.util.DeferredCall";
qx.Class.define(c,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__eC=d;
this.__eD=e||null;
this.__eE=qx.util.DeferredCallManager.getInstance();
},members:{__eC:null,__eD:null,__eE:null,cancel:function(){this.__eE.cancel(this);
},schedule:function(){this.__eE.schedule(this);
},call:function(){this.__eD?this.__eC.apply(this.__eD):this.__eC();
}},destruct:function(a,b){this.cancel();
this.__eD=this.__eC=this.__eE=null;
}});
})();
(function(){var bw="element",bv="on",bu="qx.debug",bt="qx.client",bs="div",br="': ",bq="Invalid context for callback.",bp="'",bo="Invalid event type.",bn="Invalid callback function",cd="",cc="mshtml",cb="none",ca="scroll",bY="text",bX="|bubble|",bW="qx.html.Element",bV="|capture|",bU="Invalid capture flag.",bT="focus",bD="gecko",bE="blur",bB="deactivate",bC="capture",bz="Failed to add event listener for type '",bA="userSelect",bx=" from the target '",by="-moz-none",bF="visible",bG="releaseCapture",bL="__fc",bK="qxSelectable",bN="tabIndex",bM="off",bP="activate",bO="MozUserSelect",bI="normal",bS=" to the target '",bR="Failed to remove event listener for type '",bQ="webkit",bH="Invalid capture falg.",bJ="hidden";
qx.Class.define(bW,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__eF=c||bs;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__eG:{},_scheduleFlush:function(dE){qx.html.Element.__fo.schedule();
},flush:function(){var G;

if(qx.core.Variant.isSet(bu,bv)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var w=this.__eH();
var v=w.getFocus();

if(v&&this.__eL(v)){w.blur(v);
}var N=w.getActive();

if(N&&this.__eL(N)){qx.bom.Element.deactivate(N);
}var B=this.__eJ();

if(B&&this.__eL(B)){qx.bom.Element.releaseCapture(B);
}var H=[];
var I=this._modified;

for(var F in I){G=I[F];
if(G.__fg()){if(G.__eM&&qx.dom.Hierarchy.isRendered(G.__eM)){H.push(G);
}else{if(qx.core.Variant.isSet(bu,bv)){if(this.DEBUG){G.debug("Flush invisible element");
}}G.__ff();
}delete I[F];
}}
for(var i=0,l=H.length;i<l;i++){G=H[i];

if(qx.core.Variant.isSet(bu,bv)){if(this.DEBUG){G.debug("Flush rendered element");
}}G.__ff();
}var D=this._visibility;

for(var F in D){G=D[F];

if(qx.core.Variant.isSet(bu,bv)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+G.__eP);
}}G.__eM.style.display=G.__eP?cd:cb;
if(qx.core.Variant.isSet(bt,cc)){if(!(document.documentMode>=8)){G.__eM.style.visibility=G.__eP?bF:bJ;
}}delete D[F];
}var scroll=this._scroll;

for(var F in scroll){G=scroll[F];
var O=G.__eM;

if(O&&O.offsetWidth){var A=true;
if(G.__eS!=null){G.__eM.scrollLeft=G.__eS;
delete G.__eS;
}if(G.__eT!=null){G.__eM.scrollTop=G.__eT;
delete G.__eT;
}var K=G.__eQ;

if(K!=null){var E=K.element.getDomElement();

if(E&&E.offsetWidth){qx.bom.element.Scroll.intoViewX(E,O,K.align);
delete G.__eQ;
}else{A=false;
}}var L=G.__eR;

if(L!=null){var E=L.element.getDomElement();

if(E&&E.offsetWidth){qx.bom.element.Scroll.intoViewY(E,O,L.align);
delete G.__eR;
}else{A=false;
}}if(A){delete scroll[F];
}}}var z={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var M=this._actions[i];
var J=M.element.__eM;

if(!J||!z[M.type]&&!M.element.__fg()){continue;
}var C=M.args;
C.unshift(J);
qx.bom.Element[M.type].apply(qx.bom.Element,C);
}this._actions=[];
for(var F in this.__eG){var u=this.__eG[F];
var O=u.element.__eM;

if(O){qx.bom.Selection.set(O,u.start,u.end);
delete this.__eG[F];
}}qx.event.handler.Appear.refresh();
},__eH:function(){if(!this.__eI){var cw=qx.event.Registration.getManager(window);
this.__eI=cw.getHandler(qx.event.handler.Focus);
}return this.__eI;
},__eJ:function(){if(!this.__eK){var cN=qx.event.Registration.getManager(window);
this.__eK=cN.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__eK.getCaptureElement();
},__eL:function(be){var bf=qx.core.ObjectRegistry.fromHashCode(be.$$element);
return bf&&!bf.__fg();
}},members:{__eF:null,__eM:null,__eN:false,__eO:true,__eP:true,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,_scheduleChildrenUpdate:function(){if(this.__fd){return;
}this.__fd=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
},_createDomElement:function(){return qx.bom.Element.create(this.__eF);
},__ff:function(){if(qx.core.Variant.isSet(bu,bv)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var a=this.__fc;

if(a){var length=a.length;
var b;

for(var i=0;i<length;i++){b=a[i];

if(b.__eP&&b.__eO&&!b.__eM){b.__ff();
}}}
if(!this.__eM){this.__eM=this._createDomElement();
this.__eM.$$element=this.$$hash;
this._copyData(false);

if(a&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__fd){this._syncChildren();
}}delete this.__fd;
},_insertChildren:function(){var dm=this.__fc;
var length=dm.length;
var dp;

if(length>2){var dn=document.createDocumentFragment();

for(var i=0;i<length;i++){dp=dm[i];

if(dp.__eM&&dp.__eO){dn.appendChild(dp.__eM);
}}this.__eM.appendChild(dn);
}else{var dn=this.__eM;

for(var i=0;i<length;i++){dp=dm[i];

if(dp.__eM&&dp.__eO){dn.appendChild(dp.__eM);
}}}},_syncChildren:function(){var cr=qx.core.ObjectRegistry;
var ci=this.__fc;
var cp=ci.length;
var cj;
var cn;
var cl=this.__eM;
var co=cl.childNodes;
var ck=0;
var cm;

if(qx.core.Variant.isSet(bu,bv)){var cq=0;
}for(var i=co.length-1;i>=0;i--){cm=co[i];
cn=cr.fromHashCode(cm.$$element);

if(!cn||!cn.__eO||cn.__fe!==this){cl.removeChild(cm);

if(qx.core.Variant.isSet(bu,bv)){cq++;
}}}for(var i=0;i<cp;i++){cj=ci[i];
if(cj.__eO){cn=cj.__eM;
cm=co[ck];

if(!cn){continue;
}if(cn!=cm){if(cm){cl.insertBefore(cn,cm);
}else{cl.appendChild(cn);
}
if(qx.core.Variant.isSet(bu,bv)){cq++;
}}ck++;
}}if(qx.core.Variant.isSet(bu,bv)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+cq+" operations");
}}},_copyData:function(de){var di=this.__eM;
var dh=this.__eY;

if(dh){var df=qx.bom.element.Attribute;

for(var dj in dh){df.set(di,dj,dh[dj]);
}}var dh=this.__eX;

if(dh){var dg=qx.bom.element.Style;

if(de){dg.setStyles(di,dh);
}else{dg.setCss(di,dg.compile(dh));
}}var dh=this.__fa;

if(dh){for(var dj in dh){this._applyProperty(dj,dh[dj]);
}}var dh=this.__fb;

if(dh){qx.event.Registration.getManager(di).importListeners(di,dh);
delete this.__fb;
}},_syncData:function(){var du=this.__eM;
var dt=qx.bom.element.Attribute;
var dr=qx.bom.element.Style;
var ds=this.__eV;

if(ds){var dx=this.__eY;

if(dx){var dv;

for(var dw in ds){dv=dx[dw];

if(dv!==undefined){dt.set(du,dw,dv);
}else{dt.reset(du,dw);
}}}this.__eV=null;
}var ds=this.__eU;

if(ds){var dx=this.__eX;

if(dx){var dq={};

for(var dw in ds){dq[dw]=dx[dw];
}dr.setStyles(du,dq);
}this.__eU=null;
}var ds=this.__eW;

if(ds){var dx=this.__fa;

if(dx){var dv;

for(var dw in ds){this._applyProperty(dw,dx[dw]);
}}this.__eW=null;
}},__fg:function(){var dC=this;
while(dC){if(dC.__eN){return true;
}
if(!dC.__eO||!dC.__eP){return false;
}dC=dC.__fe;
}return false;
},__fh:function(m){if(m.__fe===this){throw new Error("Child is already in: "+m);
}
if(m.__eN){throw new Error("Root elements could not be inserted into other ones.");
}if(m.__fe){m.__fe.remove(m);
}m.__fe=this;
if(!this.__fc){this.__fc=[];
}if(this.__eM){this._scheduleChildrenUpdate();
}},__fi:function(cW){if(cW.__fe!==this){throw new Error("Has no child: "+cW);
}if(this.__eM){this._scheduleChildrenUpdate();
}delete cW.__fe;
},__fj:function(ec){if(ec.__fe!==this){throw new Error("Has no child: "+ec);
}if(this.__eM){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__fc||null;
},getChild:function(dy){var dz=this.__fc;
return dz&&dz[dy]||null;
},hasChildren:function(){var cs=this.__fc;
return cs&&cs[0]!==undefined;
},indexOf:function(dX){var dY=this.__fc;
return dY?dY.indexOf(dX):-1;
},hasChild:function(cL){var cM=this.__fc;
return cM&&cM.indexOf(cL)!==-1;
},add:function(cC){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__fh(arguments[i]);
}this.__fc.push.apply(this.__fc,arguments);
}else{this.__fh(cC);
this.__fc.push(cC);
}return this;
},addAt:function(ed,ee){this.__fh(ed);
qx.lang.Array.insertAt(this.__fc,ed,ee);
return this;
},remove:function(cx){var cy=this.__fc;

if(!cy){return;
}
if(arguments[1]){var cz;

for(var i=0,l=arguments.length;i<l;i++){cz=arguments[i];
this.__fi(cz);
qx.lang.Array.remove(cy,cz);
}}else{this.__fi(cx);
qx.lang.Array.remove(cy,cx);
}return this;
},removeAt:function(S){var T=this.__fc;

if(!T){throw new Error("Has no children!");
}var U=T[S];

if(!U){throw new Error("Has no child at this position!");
}this.__fi(U);
qx.lang.Array.removeAt(this.__fc,S);
return this;
},removeAll:function(){var V=this.__fc;

if(V){for(var i=0,l=V.length;i<l;i++){this.__fi(V[i]);
}V.length=0;
}return this;
},getParent:function(){return this.__fe||null;
},insertInto:function(parent,n){parent.__fh(this);

if(n==null){parent.__fc.push(this);
}else{qx.lang.Array.insertAt(this.__fc,this,n);
}return this;
},insertBefore:function(dD){var parent=dD.__fe;
parent.__fh(this);
qx.lang.Array.insertBefore(parent.__fc,this,dD);
return this;
},insertAfter:function(dW){var parent=dW.__fe;
parent.__fh(this);
qx.lang.Array.insertAfter(parent.__fc,this,dW);
return this;
},moveTo:function(ct){var parent=this.__fe;
parent.__fj(this);
var cu=parent.__fc.indexOf(this);

if(cu===ct){throw new Error("Could not move to same index!");
}else if(cu<ct){ct--;
}qx.lang.Array.removeAt(parent.__fc,cu);
qx.lang.Array.insertAt(parent.__fc,this,ct);
return this;
},moveBefore:function(cV){var parent=this.__fe;
return this.moveTo(parent.__fc.indexOf(cV));
},moveAfter:function(cD){var parent=this.__fe;
return this.moveTo(parent.__fc.indexOf(cD)+1);
},free:function(){var parent=this.__fe;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__fc){return;
}parent.__fi(this);
qx.lang.Array.remove(parent.__fc,this);
return this;
},getDomElement:function(){return this.__eM||null;
},getNodeName:function(){return this.__eF;
},setNodeName:function(name){this.__eF=name;
},setRoot:function(dV){this.__eN=dV;
},useMarkup:function(cA){if(this.__eM){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bt,cc)){var cB=document.createElement(bs);
}else{var cB=qx.html.Element.__fk;

if(!cB){cB=qx.html.Element.__fk=document.createElement(bs);
}}cB.innerHTML=cA;
this.__eM=cB.firstChild;
this.__eM.$$element=this.$$hash;
this._copyData(true);
return this.__eM;
},useElement:function(bg){if(this.__eM){throw new Error("Could not overwrite existing element!");
}this.__eM=bg;
this.__eM.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var dl=this.getAttribute(bN);

if(dl>=1){return true;
}var dk=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(dl>=0&&dk[this.__eF]){return true;
}return false;
},setSelectable:function(W){this.setAttribute(bK,W?bv:bM);
if(qx.core.Variant.isSet(bt,bQ)){this.setStyle(bA,W?bI:cb);
}else if(qx.core.Variant.isSet(bt,bD)){this.setStyle(bO,W?bY:by);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__eF];
},include:function(){if(this.__eO){return;
}delete this.__eO;

if(this.__fe){this.__fe._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__eO){return;
}this.__eO=false;

if(this.__fe){this.__fe._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__eO===true;
},show:function(){if(this.__eP){return;
}
if(this.__eM){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}if(this.__fe){this.__fe._scheduleChildrenUpdate();
}delete this.__eP;
},hide:function(){if(!this.__eP){return;
}
if(this.__eM){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}this.__eP=false;
},isVisible:function(){return this.__eP===true;
},scrollChildIntoViewX:function(eh,ei,ej){var ek=this.__eM;
var em=eh.getDomElement();

if(ej!==false&&ek&&ek.offsetWidth&&em&&em.offsetWidth){qx.bom.element.Scroll.intoViewX(em,ek,ei);
}else{this.__eQ={element:eh,align:ei};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}delete this.__eS;
},scrollChildIntoViewY:function(X,Y,ba){var bb=this.__eM;
var bc=X.getDomElement();

if(ba!==false&&bb&&bb.offsetWidth&&bc&&bc.offsetWidth){qx.bom.element.Scroll.intoViewY(bc,bb,Y);
}else{this.__eR={element:X,align:Y};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}delete this.__eT;
},scrollToX:function(x,cE){var cF=this.__eM;

if(cE!==true&&cF&&cF.offsetWidth){cF.scrollLeft=x;
}else{this.__eS=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}delete this.__eQ;
},getScrollX:function(){var cG=this.__eM;

if(cG){return cG.scrollLeft;
}return this.__eS||0;
},scrollToY:function(y,ea){var eb=this.__eM;

if(ea!==true&&eb&&eb.offsetWidth){eb.scrollTop=y;
}else{this.__eT=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}delete this.__eR;
},getScrollY:function(){var dK=this.__eM;

if(dK){return dK.scrollTop;
}return this.__eT||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(ca,this.__fm,this);
},enableScrolling:function(){this.removeListener(ca,this.__fm,this);
},__fl:null,__fm:function(e){if(!this.__fl){this.__fl=true;
this.__eM.scrollTop=0;
this.__eM.scrollLeft=0;
delete this.__fl;
}},getTextSelection:function(){var k=this.__eM;

if(k){return qx.bom.Selection.get(k);
}return null;
},getTextSelectionLength:function(){var ch=this.__eM;

if(ch){return qx.bom.Selection.getLength(ch);
}return null;
},getTextSelectionStart:function(){var cK=this.__eM;

if(cK){return qx.bom.Selection.getStart(cK);
}return null;
},getTextSelectionEnd:function(){var dU=this.__eM;

if(dU){return qx.bom.Selection.getEnd(dU);
}return null;
},setTextSelection:function(dL,dM){var dN=this.__eM;

if(dN){qx.bom.Selection.set(dN,dL,dM);
return;
}qx.html.Element.__eG[this.toHashCode()]={element:this,start:dL,end:dM};
qx.html.Element._scheduleFlush(bw);
},clearTextSelection:function(){var bd=this.__eM;

if(bd){qx.bom.Selection.clear(bd);
}delete qx.html.Element.__eG[this.toHashCode()];
},__fn:function(cX,cY){var da=qx.html.Element._actions;
da.push({type:cX,element:this,args:cY||[]});
qx.html.Element._scheduleFlush(bw);
},focus:function(){this.__fn(bT);
},blur:function(){this.__fn(bE);
},activate:function(){this.__fn(bP);
},deactivate:function(){this.__fn(bB);
},capture:function(dF){this.__fn(bC,[dF!==false]);
},releaseCapture:function(){this.__fn(bG);
},setStyle:function(o,p,q){if(!this.__eX){this.__eX={};
}
if(this.__eX[o]==p){return;
}
if(p==null){delete this.__eX[o];
}else{this.__eX[o]=p;
}if(this.__eM){if(q){qx.bom.element.Style.set(this.__eM,o,p);
return this;
}if(!this.__eU){this.__eU={};
}this.__eU[o]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}return this;
},setStyles:function(bi,bj){var bk=qx.bom.element.Style;

if(!this.__eX){this.__eX={};
}
if(this.__eM){if(!this.__eU){this.__eU={};
}
for(var bm in bi){var bl=bi[bm];

if(this.__eX[bm]==bl){continue;
}
if(bl==null){delete this.__eX[bm];
}else{this.__eX[bm]=bl;
}if(bj){bk.set(this.__eM,bm,bl);
continue;
}this.__eU[bm]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}else{for(var bm in bi){var bl=bi[bm];

if(this.__eX[bm]==bl){continue;
}
if(bl==null){delete this.__eX[bm];
}else{this.__eX[bm]=bl;
}}}return this;
},removeStyle:function(dc,dd){this.setStyle(dc,null,dd);
},getStyle:function(dH){return this.__eX?this.__eX[dH]:null;
},getAllStyles:function(){return this.__eX||null;
},setAttribute:function(ce,cf,cg){if(!this.__eY){this.__eY={};
}
if(this.__eY[ce]==cf){return;
}
if(cf==null){delete this.__eY[ce];
}else{this.__eY[ce]=cf;
}if(this.__eM){if(cg){qx.bom.element.Attribute.set(this.__eM,ce,cf);
return this;
}if(!this.__eV){this.__eV={};
}this.__eV[ce]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}return this;
},setAttributes:function(r,s){for(var t in r){this.setAttribute(t,r[t],s);
}return this;
},removeAttribute:function(ef,eg){this.setAttribute(ef,null,eg);
},getAttribute:function(dG){return this.__eY?this.__eY[dG]:null;
},_applyProperty:function(name,bh){},_setProperty:function(cH,cI,cJ){if(!this.__fa){this.__fa={};
}
if(this.__fa[cH]==cI){return;
}
if(cI==null){delete this.__fa[cH];
}else{this.__fa[cH]=cI;
}if(this.__eM){if(cJ){this._applyProperty(cH,cI);
return this;
}if(!this.__eW){this.__eW={};
}this.__eW[cH]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bw);
}return this;
},_removeProperty:function(dA,dB){this._setProperty(dA,null,dB);
},_getProperty:function(P){var Q=this.__fa;

if(!Q){return null;
}var R=Q[P];
return R==null?null:R;
},addListener:function(dO,dP,self,dQ){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bu,bv)){var dR=bz+dO+bp+bS+this+br;
this.assertString(dO,dR+bo);
this.assertFunction(dP,dR+bn);

if(self!==undefined){this.assertObject(self,bq);
}
if(dQ!==undefined){this.assertBoolean(dQ,bH);
}}
if(this.__eM){return qx.event.Registration.addListener(this.__eM,dO,dP,self,dQ);
}
if(!this.__fb){this.__fb={};
}
if(dQ==null){dQ=false;
}var dS=qx.event.Manager.getNextUniqueId();
var dT=dO+(dQ?bV:bX)+dS;
this.__fb[dT]={type:dO,listener:dP,self:self,capture:dQ,unique:dS};
return dT;
},removeListener:function(cO,cP,self,cQ){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bu,bv)){var cR=bR+cO+bp+bx+this+br;
this.assertString(cO,cR+bo);
this.assertFunction(cP,cR+bn);

if(self!==undefined){this.assertObject(self,bq);
}
if(cQ!==undefined){this.assertBoolean(cQ,bU);
}}
if(this.__eM){qx.event.Registration.removeListener(this.__eM,cO,cP,self,cQ);
}else{var cT=this.__fb;
var cS;

if(cQ==null){cQ=false;
}
for(var cU in cT){cS=cT[cU];
if(cS.listener===cP&&cS.self===self&&cS.capture===cQ&&cS.type===cO){delete cT[cU];
break;
}}}return this;
},removeListenerById:function(cv){if(this.$$disposed){return null;
}
if(this.__eM){qx.event.Registration.removeListenerById(this.__eM,cv);
}else{delete this.__fb[cv];
}return this;
},hasListener:function(d,f){if(this.$$disposed){return false;
}
if(this.__eM){return qx.event.Registration.hasListener(this.__eM,d,f);
}var h=this.__fb;
var g;

if(f==null){f=false;
}
for(var j in h){g=h[j];
if(g.capture===f&&g.type===d){return true;
}}return false;
}},defer:function(dJ){dJ.__fo=new qx.util.DeferredCall(dJ.flush,dJ);
},destruct:function(){var dI=this.__eM;

if(dI){qx.event.Registration.getManager(dI).removeAllListeners(dI);
dI.$$element=cd;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__fe;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bL);
this.__eY=this.__eX=this.__fb=this.__fa=this.__eV=this.__eU=this.__eW=this.__eM=this.__fe=this.__eQ=this.__eR=null;
}});
})();
(function(){var i="on",h="qx.ui.core.queue.Manager",g="qx.debug",f="useraction";
qx.Class.define(h,{statics:{__fp:false,__fq:{},__fr:0,MAX_RETRIES:10,scheduleFlush:function(j){var self=qx.ui.core.queue.Manager;
self.__fq[j]=true;

if(!self.__fp){self.__fu.schedule();
self.__fp=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__fs){return;
}self.__fs=true;
self.__fu.cancel();
var d=self.__fq;
self.__ft(function(){while(d.visibility||d.widget||d.appearance||d.layout||d.element){if(d.widget){delete d.widget;
qx.ui.core.queue.Widget.flush();
}
if(d.visibility){delete d.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(d.appearance){delete d.appearance;
qx.ui.core.queue.Appearance.flush();
}if(d.widget||d.visibility||d.appearance){continue;
}
if(d.layout){delete d.layout;
qx.ui.core.queue.Layout.flush();
}if(d.widget||d.visibility||d.appearance||d.layout){continue;
}
if(d.element){delete d.element;
qx.html.Element.flush();
}}},function(){self.__fp=false;
});
self.__ft(function(){if(d.dispose){delete d.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__fs=false;
});
self.__fr=0;
},__ft:function(a,b){var self=qx.ui.core.queue.Manager;

try{a();
}catch(e){if(qx.core.Variant.isSet(g,i)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__fp=false;
self.__fs=false;
self.__fr+=1;

if(self.__fr<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__fr-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{b();
}}},defer:function(c){c.__fu=new qx.util.DeferredCall(c.flush);
qx.html.Element._scheduleFlush=c.scheduleFlush;
qx.event.Registration.addListener(window,f,c.flush);
}});
})();
(function(){var f="abstract",e="qx.event.dispatch.AbstractBubbling";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:f,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var b="qx.event.dispatch.DomBubbling";
qx.Class.define(b,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(a){return a.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var Y="keydown",X="qx.client",W="keypress",V="NumLock",U="keyup",T="Enter",S="0",R="9",Q="-",P="PageUp",cg="+",cf="PrintScreen",ce="gecko",cd="A",cc="Z",cb="Left",ca="F5",bY="Down",bX="Up",bW="F11",bg="F6",bh="useraction",be="F3",bf="keyinput",bc="Insert",bd="F8",ba="End",bb="/",bo="Delete",bp="*",bB="F1",bx="F4",bJ="Home",bE="F2",bS="F12",bO="PageDown",bt="F7",bV="F9",bU="F10",bT="Right",bs="text",bv="Escape",bw="webkit",bz="5",bC="3",bF="Meta",bL="7",bQ="CapsLock",bi="input",bj="Control",bu="Space",bI="Tab",bH="Shift",bG="Pause",bN="Unidentified",bM="qx.event.handler.Keyboard",bD="mshtml",bK="mshtml|webkit",M="6",bP="off",bk="Apps",bl="4",by="Alt",N="2",O="Scroll",br="1",bm="8",bn="Win",bq="autoComplete",bA=",",bR="Backspace";
qx.Class.define(bM,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cz){arguments.callee.base.call(this);
this.__fv=cz;
this.__fw=cz.getWindow();
if(qx.core.Variant.isSet(X,ce)){this.__fx=this.__fw;
}else{this.__fx=this.__fw.document.documentElement;
}this.__fy={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(u){if(this._identifierToKeyCodeMap[u]){return true;
}
if(u.length!=1){return false;
}
if(u>=S&&u<=R){return true;
}
if(u>=cd&&u<=cc){return true;
}
switch(u){case cg:case Q:case bp:case bb:return true;
default:return false;
}}},members:{__fz:null,__fv:null,__fw:null,__fx:null,__fy:null,__fA:null,__fB:null,__fC:null,canHandleEvent:function(cx,cy){},registerEvent:function(cJ,cK,cL){},unregisterEvent:function(e,f,g){},_fireInputEvent:function(E,F){var G=this.__fD();
if(G&&G.offsetWidth!=0){var event=qx.event.Registration.createEvent(bf,qx.event.type.KeyInput,[E,G,F]);
this.__fv.dispatchEvent(G,event);
}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[bf]);
}},_fireSequenceEvent:function(i,j,k){var l=this.__fD();
var m=i.keyCode;
var event=qx.event.Registration.createEvent(j,qx.event.type.KeySequence,[i,l,k]);
this.__fv.dispatchEvent(l,event);
if(qx.core.Variant.isSet(X,bK)){if(j==Y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(m)&&!this._emulateKeyPress[m]){this._fireSequenceEvent(i,W,k);
}}}if(this.__fw){qx.event.Registration.fireEvent(this.__fw,bh,qx.event.type.Data,[j]);
}},__fD:function(){var cH=this.__fv.getHandler(qx.event.handler.Focus);
var cI=cH.getActive();
if(!cI||cI.offsetWidth==0){cI=cH.getFocus();
}if(!cI||cI.offsetWidth==0){cI=this.__fv.getWindow().document.body;
}return cI;
},_initKeyObserver:function(){this.__fz=qx.lang.Function.listener(this.__fE,this);
this.__fC=qx.lang.Function.listener(this.__fG,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fx,U,this.__fz);
Event.addNativeListener(this.__fx,Y,this.__fz);
Event.addNativeListener(this.__fx,W,this.__fC);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fx,U,this.__fz);
Event.removeNativeListener(this.__fx,Y,this.__fz);
Event.removeNativeListener(this.__fx,W,this.__fC);

for(var cB in (this.__fB||{})){var cA=this.__fB[cB];
Event.removeNativeListener(cA.target,W,cA.callback);
}delete (this.__fB);
},__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(ci){ci=window.event||ci;
var cl=ci.keyCode;
var cj=0;
var ck=ci.type;
if(!(this.__fy[cl]==Y&&ck==Y)){this._idealKeyHandler(cl,cj,ck,ci);
}if(ck==Y){if(this._isNonPrintableKeyCode(cl)||this._emulateKeyPress[cl]){this._idealKeyHandler(cl,cj,W,ci);
}}this.__fy[cl]=ck;
},"gecko":function(cq){var cu=this._keyCodeFix[cq.keyCode]||cq.keyCode;
var cs=0;
var ct=cq.type;
if(qx.bom.client.Platform.WIN){var cr=cu?this._keyCodeToIdentifier(cu):this._charCodeToIdentifier(cs);

if(!(this.__fy[cr]==Y&&ct==Y)){this._idealKeyHandler(cu,cs,ct,cq);
}this.__fy[cr]=ct;
}else{this._idealKeyHandler(cu,cs,ct,cq);
}this.__fF(cq.target,ct,cu);
},"webkit":function(a){var d=0;
var b=0;
var c=a.type;
if(qx.bom.client.Engine.VERSION<525.13){if(c==U||c==Y){d=this._charCode2KeyCode[a.charCode]||a.keyCode;
}else{if(this._charCode2KeyCode[a.charCode]){d=this._charCode2KeyCode[a.charCode];
}else{b=a.charCode;
}}this._idealKeyHandler(d,b,c,a);
}else{d=a.keyCode;
if(!(this.__fy[d]==Y&&c==Y)){this._idealKeyHandler(d,b,c,a);
}if(c==Y){if(this._isNonPrintableKeyCode(d)||this._emulateKeyPress[d]){this._idealKeyHandler(d,b,W,a);
}}this.__fy[d]=c;
}},"opera":function(h){this.__fA=h.keyCode;
this._idealKeyHandler(h.keyCode,0,h.type,h);
}})),__fF:qx.core.Variant.select(X,{"gecko":function(cC,cD,cE){if(cD===Y&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==bs&&cC.tagName.toLowerCase()===bi&&cC.getAttribute(bq)!==bP){if(!this.__fB){this.__fB={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__fB[cG]){return;
}var self=this;
this.__fB[cG]={target:cC,callback:function(D){qx.bom.Event.stopPropagation(D);
self.__fG(D);
}};
var cF=qx.event.GlobalError.observeMethod(this.__fB[cG].callback);
qx.bom.Event.addNativeListener(cC,W,cF);
}},"default":null}),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(X,{"mshtml":function(I){I=window.event||I;

if(this._charCode2KeyCode[I.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[I.keyCode],0,I.type,I);
}else{this._idealKeyHandler(0,I.keyCode,I.type,I);
}},"gecko":function(cm){var cp=this._keyCodeFix[cm.keyCode]||cm.keyCode;
var cn=cm.charCode;
var co=cm.type;
this._idealKeyHandler(cp,cn,co,cm);
},"webkit":function(z){if(qx.bom.client.Engine.VERSION<525.13){var C=0;
var A=0;
var B=z.type;

if(B==U||B==Y){C=this._charCode2KeyCode[z.charCode]||z.keyCode;
}else{if(this._charCode2KeyCode[z.charCode]){C=this._charCode2KeyCode[z.charCode];
}else{A=z.charCode;
}}this._idealKeyHandler(C,A,B,z);
}else{if(this._charCode2KeyCode[z.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[z.keyCode],0,z.type,z);
}else{this._idealKeyHandler(0,z.keyCode,z.type,z);
}}},"opera":function(J){var L=J.keyCode;
var K=J.type;
if(L!=this.__fA){this._idealKeyHandler(0,this.__fA,K,J);
}else{if(this._keyCodeToIdentifierMap[J.keyCode]){this._idealKeyHandler(J.keyCode,0,J.type,J);
}else{this._idealKeyHandler(0,J.keyCode,J.type,J);
}}}})),_idealKeyHandler:function(n,o,p,q){var r;
if(n||(!n&&!o)){r=this._keyCodeToIdentifier(n);
this._fireSequenceEvent(q,p,r);
}else{r=this._charCodeToIdentifier(o);
this._fireSequenceEvent(q,W,r);
this._fireInputEvent(q,o);
}},_specialCharCodeMap:{8:bR,9:bI,13:T,27:bv,32:bu},_emulateKeyPress:qx.core.Variant.select(X,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bH,17:bj,18:by,20:bQ,224:bF,37:cb,38:bX,39:bT,40:bY,33:P,34:bO,35:ba,36:bJ,45:bc,46:bo,112:bB,113:bE,114:be,115:bx,116:ca,117:bg,118:bt,119:bd,120:bV,121:bU,122:bW,123:bS,144:V,44:cf,145:O,19:bG,91:bn,93:bk},_numpadToCharCode:{96:S.charCodeAt(0),97:br.charCodeAt(0),98:N.charCodeAt(0),99:bC.charCodeAt(0),100:bl.charCodeAt(0),101:bz.charCodeAt(0),102:M.charCodeAt(0),103:bL.charCodeAt(0),104:bm.charCodeAt(0),105:R.charCodeAt(0),106:bp.charCodeAt(0),107:cg.charCodeAt(0),109:Q.charCodeAt(0),110:bA.charCodeAt(0),111:bb.charCodeAt(0)},_charCodeA:cd.charCodeAt(0),_charCodeZ:cc.charCodeAt(0),_charCode0:S.charCodeAt(0),_charCode9:R.charCodeAt(0),_isNonPrintableKeyCode:function(ch){return this._keyCodeToIdentifierMap[ch]?true:false;
},_isIdentifiableKeyCode:function(H){if(H>=this._charCodeA&&H<=this._charCodeZ){return true;
}if(H>=this._charCode0&&H<=this._charCode9){return true;
}if(this._specialCharCodeMap[H]){return true;
}if(this._numpadToCharCode[H]){return true;
}if(this._isNonPrintableKeyCode(H)){return true;
}return false;
},_keyCodeToIdentifier:function(cv){if(this._isIdentifiableKeyCode(cv)){var cw=this._numpadToCharCode[cv];

if(cw){return String.fromCharCode(cw);
}return (this._keyCodeToIdentifierMap[cv]||this._specialCharCodeMap[cv]||String.fromCharCode(cv));
}else{return bN;
}},_charCodeToIdentifier:function(s){return this._specialCharCodeMap[s]||String.fromCharCode(s).toUpperCase();
},_identifierToKeyCode:function(t){return qx.event.handler.Keyboard._identifierToKeyCodeMap[t]||t.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fA=this.__fv=this.__fw=this.__fx=this.__fy=null;
},defer:function(v,w,x){qx.event.Registration.addHandler(v);
if(!v._identifierToKeyCodeMap){v._identifierToKeyCodeMap={};

for(var y in w._keyCodeToIdentifierMap){v._identifierToKeyCodeMap[w._keyCodeToIdentifierMap[y]]=parseInt(y,10);
}
for(var y in w._specialCharCodeMap){v._identifierToKeyCodeMap[w._specialCharCodeMap[y]]=parseInt(y,10);
}}
if(qx.core.Variant.isSet(X,bD)){w._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(X,ce)){w._keyCodeFix={12:w._identifierToKeyCode(V)};
}else if(qx.core.Variant.isSet(X,bw)){if(qx.bom.client.Engine.VERSION<525.13){w._charCode2KeyCode={63289:w._identifierToKeyCode(V),63276:w._identifierToKeyCode(P),63277:w._identifierToKeyCode(bO),63275:w._identifierToKeyCode(ba),63273:w._identifierToKeyCode(bJ),63234:w._identifierToKeyCode(cb),63232:w._identifierToKeyCode(bX),63235:w._identifierToKeyCode(bT),63233:w._identifierToKeyCode(bY),63272:w._identifierToKeyCode(bo),63302:w._identifierToKeyCode(bc),63236:w._identifierToKeyCode(bB),63237:w._identifierToKeyCode(bE),63238:w._identifierToKeyCode(be),63239:w._identifierToKeyCode(bx),63240:w._identifierToKeyCode(ca),63241:w._identifierToKeyCode(bg),63242:w._identifierToKeyCode(bt),63243:w._identifierToKeyCode(bd),63244:w._identifierToKeyCode(bV),63245:w._identifierToKeyCode(bU),63246:w._identifierToKeyCode(bW),63247:w._identifierToKeyCode(bS),63248:w._identifierToKeyCode(cf),3:w._identifierToKeyCode(T),12:w._identifierToKeyCode(V),13:w._identifierToKeyCode(T)};
}else{w._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var B="qx.client",A="mouseup",z="click",y="mousedown",x="contextmenu",w="mousewheel",v="dblclick",u="mshtml",t="mouseover",s="mouseout",n="DOMMouseScroll",r="mousemove",q="on",m="mshtml|webkit|opera",l="useraction",p="gecko|webkit",o="qx.event.handler.Mouse";
qx.Class.define(o,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){arguments.callee.base.call(this);
this.__fH=X;
this.__fI=X.getWindow();
this.__fJ=this.__fI.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__fK:null,__fL:null,__fM:null,__fN:null,__fO:null,__fH:null,__fI:null,__fJ:null,canHandleEvent:function(Y,ba){},registerEvent:qx.bom.client.System.IPHONE?
function(O,P,Q){O[q+P]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(e,f,g){e[q+f]=undefined;
}:qx.lang.Function.returnNull,__fP:function(L,M,N){if(!N){N=L.target||L.srcElement;
}if(N&&N.nodeType){qx.event.Registration.fireEvent(N,M||L.type,M==w?qx.event.type.MouseWheel:qx.event.type.Mouse,[L,N,null,true,true]);
}qx.event.Registration.fireEvent(this.__fI,l,qx.event.type.Data,[M||L.type]);
},_initButtonObserver:function(){this.__fK=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fJ,y,this.__fK);
Event.addNativeListener(this.__fJ,A,this.__fK);
Event.addNativeListener(this.__fJ,z,this.__fK);
Event.addNativeListener(this.__fJ,v,this.__fK);
Event.addNativeListener(this.__fJ,x,this.__fK);
},_initMoveObserver:function(){this.__fL=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fJ,r,this.__fL);
Event.addNativeListener(this.__fJ,t,this.__fL);
Event.addNativeListener(this.__fJ,s,this.__fL);
},_initWheelObserver:function(){this.__fM=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var c=qx.core.Variant.isSet(B,m)?w:n;
var d=qx.core.Variant.isSet(B,u)?this.__fJ:this.__fI;
Event.addNativeListener(d,c,this.__fM);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fJ,y,this.__fK);
Event.removeNativeListener(this.__fJ,A,this.__fK);
Event.removeNativeListener(this.__fJ,z,this.__fK);
Event.removeNativeListener(this.__fJ,v,this.__fK);
Event.removeNativeListener(this.__fJ,x,this.__fK);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fJ,r,this.__fL);
Event.removeNativeListener(this.__fJ,t,this.__fL);
Event.removeNativeListener(this.__fJ,s,this.__fL);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(B,m)?w:n;
var b=qx.core.Variant.isSet(B,u)?this.__fJ:this.__fI;
Event.removeNativeListener(b,a,this.__fM);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(C){this.__fP(C);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(D){var E=D.type;
var F=D.target||D.srcElement;
if(qx.core.Variant.isSet(B,p)){if(F&&F.nodeType==3){F=F.parentNode;
}}
if(this.__fQ){this.__fQ(D,E,F);
}
if(this.__fS){this.__fS(D,E,F);
}this.__fP(D,E,F);

if(this.__fR){this.__fR(D,E,F);
}
if(this.__fT){this.__fT(D,E,F);
}this.__fN=E;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(K){this.__fP(K,w);
}),__fQ:qx.core.Variant.select(B,{"webkit":function(R,S,T){if(qx.bom.client.Engine.VERSION<530){if(S==x){this.__fP(R,A,T);
}}},"default":null}),__fR:qx.core.Variant.select(B,{"opera":function(H,I,J){if(I==A&&H.button==2){this.__fP(H,x,J);
}},"default":null}),__fS:qx.core.Variant.select(B,{"mshtml":function(U,V,W){if(V==A&&this.__fN==z){this.__fP(U,y,W);
}else if(V==v){this.__fP(U,z,W);
}},"default":null}),__fT:qx.core.Variant.select(B,{"mshtml":null,"default":function(h,i,j){switch(i){case y:this.__fO=j;
break;
case A:if(j!==this.__fO){var k=qx.dom.Hierarchy.getCommonParent(j,this.__fO);
this.__fP(h,z,k);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__fH=this.__fI=this.__fJ=this.__fO=null;
},defer:function(G){qx.event.Registration.addHandler(G);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(f,g){},registerEvent:function(h,i,j){},unregisterEvent:function(a,b,c){}},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var I="alias",H="copy",G="blur",F="mouseout",E="keydown",D="Ctrl",C="Shift",B="mousemove",A="move",z="mouseover",Y="Alt",X="keyup",W="mouseup",V="dragend",U="on",T="mousedown",S="qxDraggable",R="drag",Q="drop",P="qxDroppable",N="qx.event.handler.DragDrop",O="droprequest",L="dragstart",M="dragchange",J="dragleave",K="dragover";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bm){arguments.callee.base.call(this);
this.__fU=bm;
this.__fV=bm.getWindow().document.documentElement;
this.__fU.addListener(this.__fV,T,this._onMouseDown,this);
this.__gi();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__fU:null,__fV:null,__fW:null,__fX:null,__fY:null,__ga:null,__gb:null,__gc:null,__gd:null,__ge:null,__gf:false,__gg:0,__gh:0,canHandleEvent:function(b,c){},registerEvent:function(k,l,m){},unregisterEvent:function(be,bf,bg){},addType:function(bb){this.__fY[bb]=true;
},addAction:function(o){this.__ga[o]=true;
},supportsType:function(bk){return !!this.__fY[bk];
},supportsAction:function(h){return !!this.__ga[h];
},getData:function(y){if(!this.__gp||!this.__fW){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fY[y]){throw new Error("Unsupported data type: "+y+"!");
}
if(!this.__gc[y]){this.__gd=y;
this.__gk(O,this.__fX,this.__fW,false);
}
if(!this.__gc[y]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__gc[y]||null;
},getCurrentAction:function(){return this.__ge;
},addData:function(bc,bd){this.__gc[bc]=bd;
},getCurrentType:function(){return this.__gd;
},__gi:function(){this.__fY={};
this.__ga={};
this.__gb={};
this.__gc={};
},__gj:function(){var bj=this.__ga;
var bh=this.__gb;
var bi=null;

if(this.__gp){if(bh.Shift&&bh.Ctrl&&bj.alias){bi=I;
}else if(bh.Shift&&bh.Alt&&bj.copy){bi=H;
}else if(bh.Shift&&bj.move){bi=A;
}else if(bh.Alt&&bj.alias){bi=I;
}else if(bh.Ctrl&&bj.copy){bi=H;
}else if(bj.move){bi=A;
}else if(bj.copy){bi=H;
}else if(bj.alias){bi=I;
}}
if(bi!=this.__ge){this.__ge=bi;
this.__gk(M,this.__fX,this.__fW,false);
}},__gk:function(r,s,t,u,v){var x=qx.event.Registration;
var w=x.createEvent(r,qx.event.type.Drag,[u,v]);

if(s!==t){w.setRelatedTarget(t);
}return x.dispatchEvent(s,w);
},__gl:function(g){while(g&&g.nodeType==1){if(g.getAttribute(S)==U){return g;
}g=g.parentNode;
}return null;
},__gm:function(n){while(n&&n.nodeType==1){if(n.getAttribute(P)==U){return n;
}n=n.parentNode;
}return null;
},__gn:function(){this.__fX=null;
this.__fU.removeListener(this.__fV,B,this._onMouseMove,this,true);
this.__fU.removeListener(this.__fV,W,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,G,this._onWindowBlur,this);
this.__gi();
},__go:function(){if(this.__gf){this.__fU.removeListener(this.__fV,z,this._onMouseOver,this,true);
this.__fU.removeListener(this.__fV,F,this._onMouseOut,this,true);
this.__fU.removeListener(this.__fV,E,this._onKeyDown,this,true);
this.__fU.removeListener(this.__fV,X,this._onKeyUp,this,true);
this.__gk(V,this.__fX,this.__fW,false);
this.__gf=false;
}this.__gp=false;
this.__fW=null;
this.__gn();
},__gp:false,_onWindowBlur:function(e){this.__go();
},_onKeyDown:function(e){var bl=e.getKeyIdentifier();

switch(bl){case Y:case D:case C:if(!this.__gb[bl]){this.__gb[bl]=true;
this.__gj();
}}},_onKeyUp:function(e){var f=e.getKeyIdentifier();

switch(f){case Y:case D:case C:if(this.__gb[f]){this.__gb[f]=false;
this.__gj();
}}},_onMouseDown:function(e){if(this.__gf){return;
}var ba=this.__gl(e.getTarget());

if(ba){this.__gg=e.getDocumentLeft();
this.__gh=e.getDocumentTop();
this.__fX=ba;
this.__fU.addListener(this.__fV,B,this._onMouseMove,this,true);
this.__fU.addListener(this.__fV,W,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,G,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__gp){this.__gk(Q,this.__fW,this.__fX,false,e);
}if(this.__gf){e.stopPropagation();
}this.__go();
},_onMouseMove:function(e){if(this.__gf){if(!this.__gk(R,this.__fX,this.__fW,true,e)){this.__go();
}}else{if(Math.abs(e.getDocumentLeft()-this.__gg)>3||Math.abs(e.getDocumentTop()-this.__gh)>3){if(this.__gk(L,this.__fX,this.__fW,true,e)){this.__gf=true;
this.__fU.addListener(this.__fV,z,this._onMouseOver,this,true);
this.__fU.addListener(this.__fV,F,this._onMouseOut,this,true);
this.__fU.addListener(this.__fV,E,this._onKeyDown,this,true);
this.__fU.addListener(this.__fV,X,this._onKeyUp,this,true);
var a=this.__gb;
a.Ctrl=e.isCtrlPressed();
a.Shift=e.isShiftPressed();
a.Alt=e.isAltPressed();
this.__gj();
}else{this.__gk(V,this.__fX,this.__fW,false);
this.__gn();
}}}},_onMouseOver:function(e){var p=e.getTarget();
var q=this.__gm(p);

if(q&&q!=this.__fW){this.__gp=this.__gk(K,q,this.__fX,true,e);
this.__fW=q;
this.__gj();
}},_onMouseOut:function(e){var j=this.__gm(e.getTarget());
var i=this.__gm(e.getRelatedTarget());

if(j&&j!==i&&j==this.__fW){this.__gk(J,this.__fW,i,false,e);
this.__fW=null;
this.__gp=false;
qx.event.Timer.once(this.__gj,this,0);
}}},destruct:function(){this.__fX=this.__fW=this.__fU=this.__fV=this.__fY=this.__ga=this.__gb=this.__gc=null;
},defer:function(d){qx.event.Registration.addHandler(d);
}});
})();
(function(){var t="-",s="qx.event.handler.Element";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._manager=z;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,e){},registerEvent:function(f,g,h){var k=qx.core.ObjectRegistry.toHashCode(f);
var i=k+t+g;
var j=qx.lang.Function.listener(this._onNative,this,i);
qx.bom.Event.addNativeListener(f,g,j);
this._registeredEvents[i]={element:f,type:g,listener:j};
},unregisterEvent:function(l,m,n){var q=this._registeredEvents;

if(!q){return;
}var r=qx.core.ObjectRegistry.toHashCode(l);
var o=r+t+m;
var p=this._registeredEvents[o];
qx.bom.Event.removeNativeListener(l,m,p.listener);
delete this._registeredEvents[o];
},_onNative:qx.event.GlobalError.observeMethod(function(v,w){var y=this._registeredEvents;

if(!y){return;
}var x=y[w];
qx.event.Registration.fireNonBubblingEvent(x.element,x.type,qx.event.type.Native,[v]);
})},destruct:function(){var a;
var b=this._registeredEvents;

for(var c in b){a=b[c];
qx.bom.Event.removeNativeListener(a.element,a.type,a.listener);
}this._manager=this._registeredEvents=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var m="qx.event.handler.Appear",l="disappear",k="appear";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__gq=p;
this.__gr={};
qx.event.handler.Appear.__gs[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gs:{},refresh:function(){var n=this.__gs;

for(var o in n){n[o].refresh();
}}},members:{__gq:null,__gr:null,canHandleEvent:function(w,x){},registerEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__gr;

if(u&&!u[t]){u[t]=q;
q.$$displayed=q.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__gr;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var d=this.__gr;
var e;

for(var c in d){e=d[c];
var a=e.offsetWidth>0;

if((!!e.$$displayed)!==a){e.$$displayed=a;
var b=qx.event.Registration.createEvent(a?k:l);
this.__gq.dispatchEvent(e,b);
}}}},destruct:function(){this.__gq=this.__gr=null;
delete qx.event.handler.Appear.__gs[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var r="mshtml",q="",p="qx.client",o=">",n="<",m=" ",k="='",h="qx.bom.Element",g="div",f="' ",e="></";
qx.Class.define(h,{statics:{__gt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,s,t){if(!t){t=window;
}
if(!name){throw new Error("The tag name is missing!");
}var v=this.__gt;
var u=q;

for(var x in s){if(v[x]){u+=x+k+s[x]+f;
}}var y;
if(u!=q){if(qx.bom.client.Engine.MSHTML){y=t.document.createElement(n+name+m+u+o);
}else{var w=t.document.createElement(g);
w.innerHTML=n+name+m+u+e+name+o;
y=w.firstChild;
}}else{y=t.document.createElement(name);
}
for(var x in s){if(!v[x]){qx.bom.element.Attribute.set(y,x,s[x]);
}}return y;
},empty:function(C){return C.innerHTML=q;
},addListener:function(a,b,c,self,d){return qx.event.Registration.addListener(a,b,c,self,d);
},removeListener:function(W,X,Y,self,ba){return qx.event.Registration.removeListener(W,X,Y,self,ba);
},removeListenerById:function(bb,bc){return qx.event.Registration.removeListenerById(bb,bc);
},hasListener:function(z,A,B){return qx.event.Registration.hasListener(z,A,B);
},focus:function(D){qx.event.Registration.getManager(D).getHandler(qx.event.handler.Focus).focus(D);
},blur:function(H){qx.event.Registration.getManager(H).getHandler(qx.event.handler.Focus).blur(H);
},activate:function(E){qx.event.Registration.getManager(E).getHandler(qx.event.handler.Focus).activate(E);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(F,G){qx.event.Registration.getManager(F).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(F,G);
},releaseCapture:function(I){qx.event.Registration.getManager(I).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(I);
},clone:function(J,K){var N;

if(K||(qx.core.Variant.isSet(p,r)&&!qx.xml.Document.isXmlDocument(J))){var R=qx.event.Registration.getManager(J);
var L=qx.dom.Hierarchy.getDescendants(J);
L.push(J);
}if(qx.core.Variant.isSet(p,r)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],false);
}}var N=J.cloneNode(true);
if(qx.core.Variant.isSet(p,r)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],true);
}}if(K===true){var U=qx.dom.Hierarchy.getDescendants(N);
U.push(N);
var M,P,T,O;

for(var i=0,S=L.length;i<S;i++){T=L[i];
M=R.serializeListeners(T);

if(M.length>0){P=U[i];

for(var j=0,Q=M.length;j<Q;j++){O=M[j];
R.addListener(P,O.type,O.handler,O.self,O.capture);
}}}}return N;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._charCode=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._charCode=this._charCode;
return c;
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
(function(){var bm="qx.client",bl="blur",bk="focus",bj="mousedown",bi="on",bh="mouseup",bg="DOMFocusOut",bf="DOMFocusIn",be="selectstart",bd="onmousedown",bF="onfocusout",bE="onfocusin",bD="onmouseup",bC="onselectstart",bB="draggesture",bA="qx.event.handler.Focus",bz="_applyFocus",by="deactivate",bx="textarea",bw="_applyActive",bt="input",bu="focusin",br="qxSelectable",bs="tabIndex",bp="off",bq="activate",bn="focusout",bo="qxKeepFocus",bv="qxKeepActive";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this._manager=m;
this._window=m.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bw,nullable:true},focus:{apply:bz,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__gu:null,__gv:null,__gw:null,__gx:null,__gy:null,__gz:null,__gA:null,__gB:null,__gC:null,__gD:null,canHandleEvent:function(z,A){},registerEvent:function(bI,bJ,bK){},unregisterEvent:function(R,S,T){},focus:function(o){try{o.focus();
}catch(l){}this.setFocus(o);
this.setActive(o);
},activate:function(B){this.setActive(B);
},blur:function(bL){try{bL.blur();
}catch(H){}
if(this.getActive()===bL){this.resetActive();
}
if(this.getFocus()===bL){this.resetFocus();
}},deactivate:function(bG){if(this.getActive()===bG){this.resetActive();
}},tryActivate:function(L){var M=this.__gS(L);

if(M){this.setActive(M);
}},__gE:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(v,qx.event.type.Focus,[t,u,w]);
y.dispatchEvent(t,x);
},_windowFocused:true,__gF:function(){if(this._windowFocused){this._windowFocused=false;
this.__gE(this._window,null,bl,false);
}},__gG:function(){if(!this._windowFocused){this._windowFocused=true;
this.__gE(this._window,null,bk,false);
}},_initObserver:qx.core.Variant.select(bm,{"gecko":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gy=qx.lang.Function.listener(this.__gH,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
this._window.addEventListener(bB,this.__gy,true);
},"mshtml":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.attachEvent(bd,this.__gu);
this._document.attachEvent(bD,this.__gv);
this._document.attachEvent(bE,this.__gA);
this._document.attachEvent(bF,this.__gB);
this._document.attachEvent(bC,this.__gz);
},"webkit":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this.__gw=qx.lang.Function.listener(this.__gL,this);
this.__gx=qx.lang.Function.listener(this.__gK,this);
this.__gz=qx.lang.Function.listener(this.__gP,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._document.addEventListener(be,this.__gz,false);
this._window.addEventListener(bg,this.__gB,true);
this._window.addEventListener(bk,this.__gw,true);
this._window.addEventListener(bl,this.__gx,true);
},"opera":function(){this.__gu=qx.lang.Function.listener(this.__gM,this);
this.__gv=qx.lang.Function.listener(this.__gN,this);
this.__gA=qx.lang.Function.listener(this.__gI,this);
this.__gB=qx.lang.Function.listener(this.__gJ,this);
this._document.addEventListener(bj,this.__gu,true);
this._document.addEventListener(bh,this.__gv,true);
this._window.addEventListener(bf,this.__gA,true);
this._window.addEventListener(bg,this.__gB,true);
}}),_stopObserver:qx.core.Variant.select(bm,{"gecko":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(bh,this.__gv,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
this._window.removeEventListener(bB,this.__gy,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bd,this.__gu);
qx.bom.Event.removeNativeListener(this._document,bD,this.__gv);
qx.bom.Event.removeNativeListener(this._document,bE,this.__gA);
qx.bom.Event.removeNativeListener(this._document,bF,this.__gB);
qx.bom.Event.removeNativeListener(this._document,bC,this.__gz);
},"webkit":function(){this._document.removeEventListener(bj,this.__gu,true);
this._document.removeEventListener(be,this.__gz,false);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
},"opera":function(){this._document.removeEventListener(bj,this.__gu,true);
this._window.removeEventListener(bf,this.__gA,true);
this._window.removeEventListener(bg,this.__gB,true);
this._window.removeEventListener(bk,this.__gw,true);
this._window.removeEventListener(bl,this.__gx,true);
}}),__gH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(!this.__gT(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gI:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){this.__gG();
var b=e.srcElement;
var a=this.__gR(b);

if(a){this.setFocus(a);
}this.tryActivate(b);
},"opera":function(e){var bH=e.target;

if(bH==this._document||bH==this._window){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(bH);
this.tryActivate(bH);
if(!this.__gT(bH)){bH.selectionStart=0;
bH.selectionEnd=0;
}}},"default":null})),__gJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){if(!e.toElement){this.__gF();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var r=e.target;

if(r===this.getFocus()){this.resetFocus();
}
if(r===this.getActive()){this.resetActive();
}},"opera":function(e){var I=e.target;

if(I==this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(I===this.getFocus()){this.resetFocus();
}
if(I===this.getActive()){this.resetActive();
}}},"default":null})),__gK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__gF();
this.__gC=this.getFocus();
this.__gD=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__gL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var bc=e.target;

if(bc===this._window||bc===this._document){this.__gG();
bc=this._body;
}this.setFocus(bc);
this.tryActivate(bc);
},"webkit":function(e){var P=e.target;

if(P===this._window||P===this._document){this.__gG();

if(this.__gC){this.setFocus(this.__gC);
delete this.__gC;
}
if(this.__gD){this.setActive(this.__gD);
delete this.__gD;
}}else{this.setFocus(P);
this.tryActivate(P);
}},"default":null})),__gM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"gecko":function(e){var Q=this.__gR(e.target);

if(!Q){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bb=e.srcElement;
var ba=this.__gR(bb);

if(ba){if(!this.__gT(bb)){bb.unselectable=bi;
try{document.selection.empty();
}catch(e){}try{ba.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__gT(bb)){bb.unselectable=bi;
}}},"webkit":function(e){var K=e.target;
var J=this.__gR(K);

if(J){this.setFocus(J);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var E=e.target;
var C=this.__gR(E);

if(!this.__gT(E)){qx.bom.Event.preventDefault(e);
if(C){var D=this.getFocus();

if(D&&D.selectionEnd){D.selectionStart=0;
D.selectionEnd=0;
D.blur();
}if(C){this.setFocus(C);
}}}else if(C){this.setFocus(C);
}},"default":null})),__gN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml":function(e){var n=e.srcElement;

if(n.unselectable){n.unselectable=bp;
}this.tryActivate(this.__gO(n));
},"gecko":function(e){var s=e.target;

while(s&&s.offsetWidth===undefined){s=s.parentNode;
}
if(s){this.tryActivate(s);
}},"webkit|opera":function(e){this.tryActivate(this.__gO(e.target));
},"default":null})),__gO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(F){var G=this.getFocus();

if(G&&F!=G&&(G.nodeName.toLowerCase()===bt||G.nodeName.toLowerCase()===bx)){F=G;
}return F;
},"default":function(d){return d;
}})),__gP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bm,{"mshtml|webkit":function(e){var c=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__gT(c)){qx.bom.Event.preventDefault(e);
}},"default":null})),__gQ:function(h){var i=qx.bom.element.Attribute.get(h,bs);

if(i>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(i>=0&&j[h.tagName]){return true;
}return false;
},__gR:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bo)==bi){return null;
}
if(this.__gQ(k)){return k;
}k=k.parentNode;
}return this._body;
},__gS:function(N){var O=N;

while(N&&N.nodeType===1){if(N.getAttribute(bv)==bi){return null;
}N=N.parentNode;
}return O;
},__gT:function(f){while(f&&f.nodeType===1){var g=f.getAttribute(br);

if(g!=null){return g===bi;
}f=f.parentNode;
}return true;
},_applyActive:function(X,Y){if(Y){this.__gE(Y,X,by,true);
}
if(X){this.__gE(X,Y,bq,true);
}},_applyFocus:function(p,q){if(q){this.__gE(q,p,bn,true);
}
if(p){this.__gE(p,q,bu,true);
}if(q){this.__gE(q,p,bl,false);
}
if(p){this.__gE(p,q,bk,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__gU=null;
},defer:function(U){qx.event.Registration.addHandler(U);
var V=U.FOCUSABLE_ELEMENTS;

for(var W in V){V[W.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var q="",p="qx.client",o="readOnly",n="accessKey",m="qx.bom.element.Attribute",l="rowSpan",k="vAlign",j="className",i="textContent",h="'",E="htmlFor",D="longDesc",C="cellSpacing",B="frameBorder",A="='",z="useMap",y="innerText",x="innerHTML",w="tabIndex",v="dateTime",t="maxLength",u="mshtml",r="cellPadding",s="colSpan";
qx.Class.define(m,{statics:{__gV:{names:{"class":j,"for":E,html:x,text:qx.core.Variant.isSet(p,u)?y:i,colspan:s,rowspan:l,valign:k,datetime:v,accesskey:n,tabindex:w,maxlength:t,readonly:o,longdesc:D,cellpadding:r,cellspacing:C,frameborder:B,usemap:z},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:q,maxLength:10000000,className:q,innerHTML:q,innerText:q,textContent:q,htmlFor:q,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(d){var e=[];
var g=this.__gV.runtime;

for(var f in d){if(!g[f]){e.push(f,A,d[f],h);
}}return e.join(q);
},get:qx.core.Variant.select(p,{"mshtml":function(J,name){var L=this.__gV;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(F,name){var H=this.__gV;
var G;
name=H.names[name]||name;
if(H.property[name]){if(H.propertyDefault[name]&&G==H.propertyDefault[name]){return null;
}G=F[name];

if(G==null){G=F.getAttribute(name);
}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
}}),set:function(a,name,b){var c=this.__gV;
name=c.names[name]||name;
if(c.bools[name]){b=!!b;
}if(c.property[name]){if(b==null){b=c.propertyDefault[name];

if(b===undefined){b=null;
}}a[name]=b;
}else{if(b===true){a.setAttribute(name,name);
}else if(b===false||b===null){a.removeAttribute(name);
}else{a.setAttribute(name,b);
}}},reset:function(I,name){this.set(I,name,null);
}}});
})();
(function(){var l="left",k="right",j="middle",i="qx.client",h="dblclick",g="click",f="none",e="contextmenu",d="qx.event.type.Mouse";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.button=b.button;
c.clientX=b.clientX;
c.clientY=b.clientY;
c.pageX=b.pageX;
c.pageY=b.pageY;
c.screenX=b.screenX;
c.screenY=b.screenY;
c.wheelDelta=b.wheelDelta;
c.detail=b.detail;
c.srcElement=b.srcElement;
return c;
},__gW:qx.core.Variant.select(i,{"mshtml":{1:l,2:k,4:j},"default":{0:l,2:k,1:j}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case g:case h:return l;
case e:return k;
default:return this.__gW[this._native.button]||f;
}},isLeftPressed:function(){return this.getButton()===l;
},isMiddlePressed:function(){return this.getButton()===j;
},isRightPressed:function(){return this.getButton()===k;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(i,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(r);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(i,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(a);
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
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"opera":function(m){if(qx.bom.client.Engine.VERSION<9.5){return (m||window).document.body.clientWidth;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientWidth:n.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Variant.select(f,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientHeight;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientHeight:b.body.clientHeight;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerHeight;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientHeight:d.body.clientHeight;
}},"default":function(g){var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientHeight:h.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(f,{"mshtml":function(o){var p=(o||window).document;
return p.documentElement.scrollLeft||p.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(f,{"mshtml":function(k){var l=(k||window).document;
return l.documentElement.scrollTop||l.body.scrollTop;
},"default":function(q){return (q||window).pageYOffset;
}})}});
})();
(function(){var l="CSS1Compat",k="position:absolute;width:0;height:0;width:1",j="qx.bom.Document",i="1px",h="qx.client",g="div";
qx.Class.define(j,{statics:{isQuirksMode:qx.core.Variant.select(h,{"mshtml":function(p){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (p||window).document.compatMode!==l;
}},"webkit":function(e){if(document.compatMode===undefined){var f=(e||window).document.createElement(g);
f.style.cssText=k;
return f.style.width===i?true:false;
}else{return (e||window).document.compatMode!==l;
}},"default":function(d){return (d||window).document.compatMode!==l;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(a){var b=(a||window).document;
var c=qx.bom.Viewport.getHeight(a);
var scroll=this.isStandardMode(a)?b.documentElement.scrollHeight:b.body.scrollHeight;
return Math.max(scroll,c);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__gX:function(B){var C=navigator.userAgent;
var E=new RegExp(t+B+e);
var F=C.match(E);

if(!F){return;
}var name=F[1].toLowerCase();
var D=F[3];
if(C.match(/Version(\/| )([0-9]+\.[0-9])/)){D=RegExp.$2;
}
if(qx.core.Variant.isSet(k,n)){if(name===h){name=f;
}else if(C.indexOf(b)!==-1||C.indexOf(m)!==-1){name=x;
}}else if(qx.core.Variant.isSet(k,r)){if(name===i){name=j;
if(qx.bom.client.System.WINCE&&name===j){name=d;
D=o;
}}}else if(qx.core.Variant.isSet(k,s)){if(name===c){name=y;
}else if(name===u){name=g;
}}this.NAME=name;
this.FULLVERSION=D;
this.VERSION=parseFloat(D,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(k,{"webkit":function(A){A.__gX(p);
},"gecko":function(G){G.__gX(l);
},"mshtml":function(z){z.__gX(w);
},"opera":function(a){a.__gX(q);
}})});
})();
(function(){var i="qx.client",h="qx.dom.Hierarchy",g="previousSibling",f="*",e="nextSibling",d="parentNode";
qx.Class.define(h,{statics:{getNodeIndex:function(n){var o=0;

while(n&&(n=n.previousSibling)){o++;
}return o;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(R){while(R&&(R=R.nextSibling)&&!qx.dom.Node.isElement(R)){continue;
}return R||null;
},getPreviousElementSibling:function(a){while(a&&(a=a.previousSibling)&&!qx.dom.Node.isElement(a)){continue;
}return a||null;
},contains:qx.core.Variant.select(i,{"webkit|mshtml|opera":function(p,q){if(qx.dom.Node.isDocument(p)){var r=qx.dom.Node.getDocument(q);
return p&&r==p;
}else if(qx.dom.Node.isDocument(q)){return false;
}else{return p.contains(q);
}},"gecko":function(U,V){return !!(U.compareDocumentPosition(V)&16);
},"default":function(S,T){while(T){if(S==T){return true;
}T=T.parentNode;
}return false;
}}),isRendered:function(C){if(!C.offsetParent){return false;
}var D=C.ownerDocument||C.document;
if(D.body.contains){return D.body.contains(C);
}if(D.compareDocumentPosition){return !!(D.compareDocumentPosition(C)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(E,F){return this.contains(F,E);
},getCommonParent:qx.core.Variant.select(i,{"mshtml|opera":function(O,P){if(O===P){return O;
}
while(O&&qx.dom.Node.isElement(O)){if(O.contains(P)){return O;
}O=O.parentNode;
}return null;
},"default":function(G,H){if(G===H){return G;
}var I={};
var L=qx.core.ObjectRegistry;
var K,J;

while(G||H){if(G){K=L.toHashCode(G);

if(I[K]){return I[K];
}I[K]=G;
G=G.parentNode;
}
if(H){J=L.toHashCode(H);

if(I[J]){return I[J];
}I[J]=H;
H=H.parentNode;
}}return null;
}}),getAncestors:function(b){return this._recursivelyCollect(b,d);
},getChildElements:function(x){x=x.firstChild;

if(!x){return [];
}var y=this.getNextSiblings(x);

if(x.nodeType===1){y.unshift(x);
}return y;
},getDescendants:function(v){return qx.lang.Array.fromCollection(v.getElementsByTagName(f));
},getFirstDescendant:function(c){c=c.firstChild;

while(c&&c.nodeType!=1){c=c.nextSibling;
}return c;
},getLastDescendant:function(m){m=m.lastChild;

while(m&&m.nodeType!=1){m=m.previousSibling;
}return m;
},getPreviousSiblings:function(w){return this._recursivelyCollect(w,g);
},getNextSiblings:function(Q){return this._recursivelyCollect(Q,e);
},_recursivelyCollect:function(s,t){var u=[];

while(s=s[t]){if(s.nodeType==1){u.push(s);
}}return u;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(z){var A=z.firstChild;

while(A){var B=A.nextSibling;

if(A.nodeType==3&&!/\S/.test(A.nodeValue)){z.removeChild(A);
}A=B;
}}}});
})();
(function(){var g="qx.client",f="qx.event.type.Drag";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(n,o){arguments.callee.base.call(this,true,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){if(this._native==null){return 0;
}var j=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(j);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(l){this.getManager().addAction(l);
},supportsType:function(b){return this.getManager().supportsType(b);
},supportsAction:function(m){return this.getManager().supportsAction(m);
},addData:function(d,e){this.getManager().addData(d,e);
},getData:function(k){return this.getManager().getData(k);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="losecapture",m="qx.client",l="blur",k="focus",j="click",i="qx.event.dispatch.MouseCapture",h="capture",g="scroll";
qx.Class.define(i,{extend:qx.event.dispatch.AbstractBubbling,construct:function(d,e){arguments.callee.base.call(this,d);
this.__gY=d.getWindow();
this.__ha=e;
d.addListener(this.__gY,l,this.releaseCapture,this);
d.addListener(this.__gY,k,this.releaseCapture,this);
d.addListener(this.__gY,g,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__ha:null,__hb:null,__hc:true,__gY:null,_getParent:function(f){return f.parentNode;
},canDispatchEvent:function(q,event,r){return (this.__hb&&this.__hd[r]);
},dispatchEvent:function(b,event,c){if(c==j){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__hc||!qx.dom.Hierarchy.contains(this.__hb,b)){b=this.__hb;
}arguments.callee.base.call(this,b,event,c);
},__hd:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(u,v){var v=v!==false;

if(this.__hb===u&&this.__hc==v){return;
}
if(this.__hb){this.releaseCapture();
}this.nativeSetCapture(u,v);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(u,n,function(){qx.bom.Event.removeNativeListener(u,n,arguments.callee);
self.releaseCapture();
});
}this.__hc=v;
this.__hb=u;
this.__ha.fireEvent(u,h,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__hb;
},releaseCapture:function(){var p=this.__hb;

if(!p){return;
}this.__hb=null;
this.__ha.fireEvent(p,n,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(p);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(m,{"mshtml":function(s,t){s.setCapture(t!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(m,{"mshtml":function(o){o.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__hb=this.__gY=this.__ha=null;
},defer:function(a){qx.event.Registration.addDispatcher(a);
}});
})();
(function(){var u="qx.client",t="",s="mshtml",r="'",q="SelectionLanguage",p="qx.xml.Document",o=" />",n="MSXML2.DOMDocument.3.0",m='<\?xml version="1.0" encoding="utf-8"?>\n<',k="MSXML2.XMLHTTP.3.0",f="MSXML2.XMLHTTP.6.0",j=" xmlns='",h="text/xml",e="XPath",d="MSXML2.DOMDocument.6.0",g="HTML";
qx.Class.define(p,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(v){if(v.nodeType===9){return v.documentElement.nodeName!==g;
}else if(v.ownerDocument){return this.isXmlDocument(v.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(u,{"mshtml":function(z,A){var B=new ActiveXObject(this.DOMDOC);
B.setProperty(q,e);

if(A){var C=m;
C+=A;

if(z){C+=j+z+r;
}C+=o;
B.loadXML(C);
}return B;
},"default":function(F,G){return document.implementation.createDocument(F||t,G||t,null);
}}),fromString:qx.core.Variant.select(u,{"mshtml":function(D){var E=qx.xml.Document.create();
E.loadXML(D);
return E;
},"default":function(w){var x=new DOMParser();
return x.parseFromString(w,h);
}})},defer:function(a){if(qx.core.Variant.isSet(u,s)){var b=[d,n];
var c=[f,k];

for(var i=0,l=b.length;i<l;i++){try{new ActiveXObject(b[i]);
new ActiveXObject(c[i]);
}catch(y){continue;
}a.DOMDOC=b[i];
a.XMLHTTP=c[i];
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
(function(){var bF="",bE="qx.client",bD="hidden",bC="-moz-scrollbars-none",bB="overflow",bA=";",bz="overflowY",by=":",bx="overflowX",bw="overflow:",bR="none",bQ="scroll",bP="borderLeftStyle",bO="borderRightStyle",bN="div",bM="borderRightWidth",bL="overflow-y",bK="borderLeftWidth",bJ="-moz-scrollbars-vertical",bI="100px",bG="qx.bom.element.Overflow",bH="overflow-x";
qx.Class.define(bG,{statics:{__he:null,getScrollbarWidth:function(){if(this.__he!==null){return this.__he;
}var bf=qx.bom.element.Style;
var bh=function(O,P){return parseInt(bf.get(O,P))||0;
};
var bi=function(W){return (bf.get(W,bO)==bR?0:bh(W,bM));
};
var bg=function(bv){return (bf.get(bv,bP)==bR?0:bh(bv,bK));
};
var bk=qx.core.Variant.select(bE,{"mshtml":function(X){if(bf.get(X,bz)==bD||X.clientWidth==0){return bi(X);
}return Math.max(0,X.offsetWidth-X.clientLeft-X.clientWidth);
},"default":function(k){if(k.clientWidth==0){var l=bf.get(k,bB);
var m=(l==bQ||l==bJ?16:0);
return Math.max(0,bi(k)+m);
}return Math.max(0,(k.offsetWidth-k.clientWidth-bg(k)));
}});
var bj=function(F){return bk(F)-bi(F);
};
var t=document.createElement(bN);
var s=t.style;
s.height=s.width=bI;
s.overflow=bQ;
document.body.appendChild(t);
var c=bj(t);
this.__he=c?c:16;
document.body.removeChild(t);
return this.__he;
},_compile:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(i,j){if(j==bD){j=bC;
}return bw+j+bA;
}:
function(g,h){return g+by+h+bA;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(br,bs){return bw+bs+bA;
}:
function(bb,bc){return bb+by+bc+bA;
},"default":function(q,r){return q+by+r+bA;
}}),compileX:function(G){return this._compile(bH,G);
},compileY:function(K){return this._compile(bL,K);
},getX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bm,bn){var bo=qx.bom.element.Style.get(bm,bB,bn,false);

if(bo===bC){bo=bD;
}return bo;
}:
function(H,I){return qx.bom.element.Style.get(H,bx,I,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ca,cb){return qx.bom.element.Style.get(ca,bB,cb,false);
}:
function(v,w){return qx.bom.element.Style.get(v,bx,w,false);
},"default":function(b,d){return qx.bom.element.Style.get(b,bx,d,false);
}}),setX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){if(f==bD){f=bC;
}e.style.overflow=f;
}:
function(D,E){D.style.overflowX=E;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(S,T){S.style.overflow=T;
}:
function(cc,cd){cc.style.overflowX=cd;
},"default":function(B,C){B.style.overflowX=C;
}}),resetX:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(a){a.style.overflow=bF;
}:
function(bW){bW.style.overflowX=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){ce.style.overflow=bF;
}:
function(L,M){L.style.overflowX=bF;
},"default":function(bl){bl.style.overflowX=bF;
}}),getY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(n,o){var p=qx.bom.element.Style.get(n,bB,o,false);

if(p===bC){p=bD;
}return p;
}:
function(z,A){return qx.bom.element.Style.get(z,bz,A,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,bB,bY,false);
}:
function(bt,bu){return qx.bom.element.Style.get(bt,bz,bu,false);
},"default":function(bd,be){return qx.bom.element.Style.get(bd,bz,be,false);
}}),setY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bp,bq){if(bq===bD){bq=bC;
}bp.style.overflow=bq;
}:
function(Q,R){Q.style.overflowY=R;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(U,V){U.style.overflow=V;
}:
function(bS,bT){bS.style.overflowY=bT;
},"default":function(Y,ba){Y.style.overflowY=ba;
}}),resetY:qx.core.Variant.select(bE,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bF;
}:
function(J){J.style.overflowY=bF;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bU,bV){bU.style.overflow=bF;
}:
function(x,y){x.style.overflowY=bF;
},"default":function(N){N.style.overflowY=bF;
}})}});
})();
(function(){var n="auto",m="px",l=",",k="clip:auto;",j="rect(",i=");",h="",g=")",f="qx.bom.element.Clip",e="string",b="rect(auto)",d="clip:rect(",c="clip",a="rect(auto,auto,auto,auto)";
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
}return d+top+l+w+l+x+l+A+i;
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
},set:function(o,p){if(!p){o.style.clip=a;
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
},reset:function(B){B.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__hf:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(o){return i+(this.__hf[o]||o)+g;
},get:function(p,q){return qx.bom.element.Style.get(p,e,q,false);
},set:function(b,c){b.style.cursor=this.__hf[c]||c;
},reset:function(a){a.style.cursor=j;
}}});
})();
(function(){var v="",u="qx.client",t=";",s="filter",r="opacity:",q="opacity",p="MozOpacity",o=");",n=")",m="zoom:1;filter:alpha(opacity=",j="qx.bom.element.Opacity",l="alpha(opacity=",k="-moz-opacity:";
qx.Class.define(j,{statics:{compile:qx.core.Variant.select(u,{"mshtml":function(K){if(K>=1){return v;
}
if(K<0.00001){K=0;
}return m+(K*100)+o;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return k+w+t;
}else{return r+w+t;
}},"default":function(A){if(A==1){return v;
}return r+A+t;
}}),set:qx.core.Variant.select(u,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,s,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,v)+l+y*100+n;
},"gecko":function(B,C){if(C==1){C=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){B.style.MozOpacity=C;
}else{B.style.opacity=C;
}},"default":function(e,f){if(f==1){f=v;
}e.style.opacity=f;
}}),reset:qx.core.Variant.select(u,{"mshtml":function(I){var J=qx.bom.element.Style.get(I,s,qx.bom.element.Style.COMPUTED_MODE,false);
I.style.filter=J.replace(/alpha\([^\)]*\)/gi,v);
},"gecko":function(H){if(qx.bom.client.Engine.VERSION<1.7){H.style.MozOpacity=v;
}else{H.style.opacity=v;
}},"default":function(G){G.style.opacity=v;
}}),get:qx.core.Variant.select(u,{"mshtml":function(a,b){var c=qx.bom.element.Style.get(a,s,b,false);

if(c){var d=c.match(/alpha\(opacity=(.*)\)/);

if(d&&d[1]){return parseFloat(d[1])/100;
}}return 1.0;
},"gecko":function(g,h){var i=qx.bom.element.Style.get(g,qx.bom.client.Engine.VERSION<1.7?p:q,h,false);

if(i==0.999999){i=1.0;
}
if(i!=null){return parseFloat(i);
}return 1.0;
},"default":function(D,E){var F=qx.bom.element.Style.get(D,q,E,false);

if(F!=null){return parseFloat(F);
}return 1.0;
}})}});
})();
(function(){var u="qx.client",t="",s="qx.debug",r="boxSizing",q="on",p="box-sizing",o=":",n="border-box",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",e="-moz-box-sizing",j="WebkitBoxSizing",h=";",d="-khtml-box-sizing",c="content-box",g="-webkit-box-sizing",f="MozBoxSizing";
qx.Class.define(m,{statics:{__hg:qx.core.Variant.select(u,{"mshtml":null,"webkit":[r,k,j],"gecko":[f],"opera":[r]}),__hh:qx.core.Variant.select(u,{"mshtml":null,"webkit":[p,d,g],"gecko":[e],"opera":[p]}),__hi:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__hj:function(H){var I=this.__hi;
return I.tags[H.tagName.toLowerCase()]||I.types[H.type];
},compile:qx.core.Variant.select(u,{"mshtml":function(a){if(qx.core.Variant.isSet(s,q)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(v){var x=this.__hh;
var w=t;

if(x){for(var i=0,l=x.length;i<l;i++){w+=x[i]+o+v+h;
}}return w;
}}),get:qx.core.Variant.select(u,{"mshtml":function(b){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(b))){if(!this.__hj(b)){return c;
}}return n;
},"default":function(z){var B=this.__hg;
var A;

if(B){for(var i=0,l=B.length;i<l;i++){A=qx.bom.element.Style.get(z,B[i],null,false);

if(A!=null&&A!==t){return A;
}}}return t;
}}),set:qx.core.Variant.select(u,{"mshtml":function(F,G){if(qx.core.Variant.isSet(s,q)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(C,D){var E=this.__hg;

if(E){for(var i=0,l=E.length;i<l;i++){C.style[E[i]]=D;
}}}}),reset:function(y){this.set(y,t);
}}});
})();
(function(){var v="",u="qx.client",t="user-select",s="userSelect",r="appearance",q="qx.debug",p="Invalid argument 'smart'",o="style",n="on",m="Invalid argument 'element'",X="MozUserModify",W="px",V="-webkit-appearance",U="styleFloat",T="-webkit-user-select",S="-moz-appearance",R="pixelHeight",Q="MozAppearance",P=":",O="pixelTop",C="Invalid argument 'name'",D="pixelLeft",A="text-overflow",B="-moz-user-select",y="Invalid argument 'styles'",z="MozUserSelect",w="qx.bom.element.Style",x="-moz-user-modify",E="-webkit-user-modify",F="WebkitUserSelect",I="-o-text-overflow",H="pixelRight",K="cssFloat",J="pixelWidth",M="pixelBottom",L=";",G="WebkitUserModify",N="WebkitAppearance";
qx.Class.define(w,{statics:{__hk:{styleNames:{"float":qx.core.Variant.select(u,{"mshtml":U,"default":K}),"appearance":qx.core.Variant.select(u,{"gecko":Q,"webkit":N,"default":r}),"userSelect":qx.core.Variant.select(u,{"gecko":z,"webkit":F,"default":s}),"userModify":qx.core.Variant.select(u,{"gecko":X,"webkit":G,"default":s})},cssNames:{"appearance":qx.core.Variant.select(u,{"gecko":S,"webkit":V,"default":r}),"userSelect":qx.core.Variant.select(u,{"gecko":B,"webkit":T,"default":t}),"userModify":qx.core.Variant.select(u,{"gecko":x,"webkit":E,"default":t}),"textOverflow":qx.core.Variant.select(u,{"opera":I,"default":A})},mshtmlPixel:{width:J,height:R,left:D,right:H,top:O,bottom:M},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__hl:{},compile:function(Y){var bd=[];
var bh=this.__hk;
var bg=bh.special;
var be=bh.cssNames;
var bc=this.__hl;
var bf=qx.lang.String;
var name,bb,ba;

for(name in Y){ba=Y[name];

if(ba==null){continue;
}name=be[name]||name;
if(bg[name]){bd.push(bg[name].compile(ba));
}else{bb=bc[name];

if(!bb){bb=bc[name]=bf.hyphenate(name);
}bd.push(bb,P,ba,L);
}}return bd.join(v);
},setCss:qx.core.Variant.select(u,{"mshtml":function(k,l){k.style.cssText=l;
},"default":function(bs,bt){bs.setAttribute(o,bt);
}}),getCss:qx.core.Variant.select(u,{"mshtml":function(j){return j.style.cssText.toLowerCase();
},"default":function(bo){return bo.getAttribute(o);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bu,name,bv,bw){if(qx.core.Variant.isSet(q,n)){qx.core.Assert.assertElement(bu,m);
qx.core.Assert.assertString(name,C);

if(bw!==undefined){qx.core.Assert.assertBoolean(bw,p);
}}var bx=this.__hk;
name=bx.styleNames[name]||name;
if(bw!==false&&bx.special[name]){return bx.special[name].set(bu,bv);
}else{bu.style[name]=bv!==null?bv:v;
}},setStyles:function(a,b,c){if(qx.core.Variant.isSet(q,n)){qx.core.Assert.assertElement(a,m);
qx.core.Assert.assertMap(b,y);

if(c!==undefined){qx.core.Assert.assertBoolean(c,p);
}}var i=this.__hk;
var f=i.styleNames;
var h=i.special;
var d=a.style;

for(var g in b){var e=b[g];
var name=f[g]||g;

if(e===undefined){if(c!==false&&h[name]){h[name].reset(a);
}else{d[name]=v;
}}else{if(c!==false&&h[name]){h[name].set(a,e);
}else{d[name]=e!==null?e:v;
}}}},reset:function(bp,name,bq){var br=this.__hk;
name=br.styleNames[name]||name;
if(bq!==false&&br.special[name]){return br.special[name].reset(bp);
}else{bp.style[name]=v;
}},get:qx.core.Variant.select(u,{"mshtml":function(by,name,bz,bA){var bF=this.__hk;
name=bF.styleNames[name]||name;
if(bA!==false&&bF.special[name]){return bF.special[name].get(by,bz);
}if(!by.currentStyle){return by.style[name]||v;
}switch(bz){case this.LOCAL_MODE:return by.style[name]||v;
case this.CASCADED_MODE:return by.currentStyle[name]||v;
default:var bE=by.currentStyle[name]||v;
if(/^-?[\.\d]+(px)?$/i.test(bE)){return bE;
}var bD=bF.mshtmlPixel[name];

if(bD){var bB=by.style[name];
by.style[name]=bE||0;
var bC=by.style[bD]+W;
by.style[name]=bB;
return bC;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bE)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bE;
}},"default":function(bi,name,bj,bk){var bn=this.__hk;
name=bn.styleNames[name]||name;
if(bk!==false&&bn.special[name]){return bn.special[name].get(bi,bj);
}switch(bj){case this.LOCAL_MODE:return bi.style[name]||v;
case this.CASCADED_MODE:if(bi.currentStyle){return bi.currentStyle[name]||v;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bl=qx.dom.Node.getDocument(bi);
var bm=bl.defaultView.getComputedStyle(bi,null);
return bm?bm[name]:v;
}}})}});
})();
(function(){var bb="borderTopWidth",ba="borderLeftWidth",Y="marginTop",X="marginLeft",W="scroll",V="qx.client",U="border-box",T="borderBottomWidth",S="borderRightWidth",R="auto",bq="padding",bp="qx.bom.element.Location",bo="paddingLeft",bn="static",bm="marginBottom",bl="visible",bk="BODY",bj="paddingBottom",bi="paddingTop",bh="marginRight",bf="position",bg="margin",bd="overflow",be="paddingRight",bc="border";
qx.Class.define(bp,{statics:{__hm:function(a,b){return qx.bom.element.Style.get(a,b,qx.bom.element.Style.COMPUTED_MODE,false);
},__hn:function(C,D){return parseInt(qx.bom.element.Style.get(C,D,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__ho:function(bE){var bH=0,top=0;
if(bE.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bG=qx.dom.Node.getWindow(bE);
bH-=qx.bom.Viewport.getScrollLeft(bG);
top-=qx.bom.Viewport.getScrollTop(bG);
}else{var bF=qx.dom.Node.getDocument(bE).body;
bE=bE.parentNode;
while(bE&&bE!=bF){bH+=bE.scrollLeft;
top+=bE.scrollTop;
bE=bE.parentNode;
}}return {left:bH,top:top};
},__hp:qx.core.Variant.select(V,{"mshtml":function(bt){var bv=qx.dom.Node.getDocument(bt);
var bu=bv.body;
var bw=0;
var top=0;
bw-=bu.clientLeft+bv.documentElement.clientLeft;
top-=bu.clientTop+bv.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bw+=this.__hn(bu,ba);
top+=this.__hn(bu,bb);
}return {left:bw,top:top};
},"webkit":function(o){var q=qx.dom.Node.getDocument(o);
var p=q.body;
var r=p.offsetLeft;
var top=p.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){r+=this.__hn(p,ba);
top+=this.__hn(p,bb);
}return {left:r,top:top};
},"gecko":function(E){var F=qx.dom.Node.getDocument(E).body;
var G=F.offsetLeft;
var top=F.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){G+=this.__hn(F,X);
top+=this.__hn(F,Y);
}if(qx.bom.element.BoxSizing.get(F)!==U){G+=this.__hn(F,ba);
top+=this.__hn(F,bb);
}return {left:G,top:top};
},"default":function(bz){var bA=qx.dom.Node.getDocument(bz).body;
var bB=bA.offsetLeft;
var top=bA.offsetTop;
return {left:bB,top:top};
}}),__hq:qx.core.Variant.select(V,{"mshtml|webkit":function(M){var O=qx.dom.Node.getDocument(M);
if(M.getBoundingClientRect){var P=M.getBoundingClientRect();
var Q=P.left;
var top=P.top;
}else{var Q=M.offsetLeft;
var top=M.offsetTop;
M=M.offsetParent;
var N=O.body;
while(M&&M!=N){Q+=M.offsetLeft;
top+=M.offsetTop;
Q+=this.__hn(M,ba);
top+=this.__hn(M,bb);
M=M.offsetParent;
}}return {left:Q,top:top};
},"gecko":function(bL){if(bL.getBoundingClientRect){var bO=bL.getBoundingClientRect();
var bP=Math.round(bO.left);
var top=Math.round(bO.top);
}else{var bP=0;
var top=0;
var bM=qx.dom.Node.getDocument(bL).body;
var bN=qx.bom.element.BoxSizing;

if(bN.get(bL)!==U){bP-=this.__hn(bL,ba);
top-=this.__hn(bL,bb);
}
while(bL&&bL!==bM){bP+=bL.offsetLeft;
top+=bL.offsetTop;
if(bN.get(bL)!==U){bP+=this.__hn(bL,ba);
top+=this.__hn(bL,bb);
}if(bL.parentNode&&this.__hm(bL.parentNode,bd)!=bl){bP+=this.__hn(bL.parentNode,ba);
top+=this.__hn(bL.parentNode,bb);
}bL=bL.offsetParent;
}}return {left:bP,top:top};
},"default":function(J){var L=0;
var top=0;
var K=qx.dom.Node.getDocument(J).body;
while(J&&J!==K){L+=J.offsetLeft;
top+=J.offsetTop;
J=J.offsetParent;
}return {left:L,top:top};
}}),get:function(c,d){if(c.tagName==bk){var location=this.__hr(c);
var k=location.left;
var top=location.top;
}else{var e=this.__hp(c);
var j=this.__hq(c);
var scroll=this.__ho(c);
var k=j.left+e.left-scroll.left;
var top=j.top+e.top-scroll.top;
}var f=k+c.offsetWidth;
var g=top+c.offsetHeight;

if(d){if(d==bq||d==W){var h=qx.bom.element.Overflow.getX(c);

if(h==W||h==R){f+=c.scrollWidth-c.offsetWidth+this.__hn(c,ba)+this.__hn(c,S);
}var i=qx.bom.element.Overflow.getY(c);

if(i==W||i==R){g+=c.scrollHeight-c.offsetHeight+this.__hn(c,bb)+this.__hn(c,T);
}}
switch(d){case bq:k+=this.__hn(c,bo);
top+=this.__hn(c,bi);
f-=this.__hn(c,be);
g-=this.__hn(c,bj);
case W:k-=c.scrollLeft;
top-=c.scrollTop;
f-=c.scrollLeft;
g-=c.scrollTop;
case bc:k+=this.__hn(c,ba);
top+=this.__hn(c,bb);
f-=this.__hn(c,S);
g-=this.__hn(c,T);
break;
case bg:k-=this.__hn(c,X);
top-=this.__hn(c,Y);
f+=this.__hn(c,bh);
g+=this.__hn(c,bm);
break;
}}return {left:k,top:top,right:f,bottom:g};
},__hr:qx.core.Variant.select(V,{"default":function(br){var top=br.offsetTop+this.__hn(br,Y);
var bs=br.offsetLeft+this.__hn(br,X);
return {left:bs,top:top};
},"mshtml":function(l){var top=l.offsetTop;
var m=l.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hn(l,Y);
m+=this.__hn(l,X);
}return {left:m,top:top};
},"gecko":function(bC){var top=bC.offsetTop+this.__hn(bC,Y)+this.__hn(bC,ba);
var bD=bC.offsetLeft+this.__hn(bC,X)+this.__hn(bC,bb);
return {left:bD,top:top};
}}),getLeft:function(s,t){return this.get(s,t).left;
},getTop:function(bx,by){return this.get(bx,by).top;
},getRight:function(H,I){return this.get(H,I).right;
},getBottom:function(u,v){return this.get(u,v).bottom;
},getRelative:function(w,x,y,z){var B=this.get(w,y);
var A=this.get(x,z);
return {left:B.left-A.left,top:B.top-A.top,right:B.right-A.right,bottom:B.bottom-A.bottom};
},getPosition:function(n){return this.getRelative(n,this.getOffsetParent(n));
},getOffsetParent:function(bI){var bK=bI.offsetParent||document.body;
var bJ=qx.bom.element.Style;

while(bK&&(!/^body|html$/i.test(bK.tagName)&&bJ.get(bK,bf)===bn)){bK=bK.offsetParent;
}return bK;
}}});
})();
(function(){var H="qx.client",G="character",F="EndToEnd",E="input",D="textarea",C="StartToStart",B='character',A="qx.bom.Selection",z="button",y="#text",x="body";
qx.Class.define(A,{statics:{getSelectionObject:qx.core.Variant.select(H,{"mshtml":function(b){return b.selection;
},"default":function(T){return qx.dom.Node.getWindow(T).getSelection();
}}),get:qx.core.Variant.select(H,{"mshtml":function(R){var S=qx.bom.Range.get(qx.dom.Node.getDocument(R));
return S.text;
},"default":function(bf){if(this.__hs(bf)){return bf.value.substring(bf.selectionStart,bf.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(bf)).toString();
}}}),getLength:qx.core.Variant.select(H,{"mshtml":function(f){var h=this.get(f);
var g=qx.util.StringSplit.split(h,/\r\n/);
return h.length-(g.length-1);
},"opera":function(bn){var bs,bq,bo;

if(this.__hs(bn)){var br=bn.selectionStart;
var bp=bn.selectionEnd;
bs=bn.value.substring(br,bp);
bq=bp-br;
}else{bs=qx.bom.Selection.get(bn);
bq=bs.length;
}bo=qx.util.StringSplit.split(bs,/\r\n/);
return bq-(bo.length-1);
},"default":function(by){if(this.__hs(by)){return by.selectionEnd-by.selectionStart;
}else{return this.get(by).length;
}}}),getStart:qx.core.Variant.select(H,{"mshtml":function(V){if(this.__hs(V)){var bb=qx.bom.Range.get();
if(!V.contains(bb.parentElement())){return -1;
}var bc=qx.bom.Range.get(V);
var ba=V.value.length;
bc.moveToBookmark(bb.getBookmark());
bc.moveEnd(B,ba);
return ba-bc.text.length;
}else{var bc=qx.bom.Range.get(V);
var X=bc.parentElement();
var bd=qx.bom.Range.get();
bd.moveToElementText(X);
var W=qx.bom.Range.get(qx.dom.Node.getBodyElement(V));
W.setEndPoint(C,bc);
W.setEndPoint(F,bd);
if(bd.compareEndPoints(C,W)==0){return 0;
}var Y;
var be=0;

while(true){Y=W.moveStart(G,-1);
if(bd.compareEndPoints(C,W)==0){break;
}if(Y==0){break;
}else{be++;
}}return ++be;
}},"gecko|webkit":function(c){if(this.__hs(c)){return c.selectionStart;
}else{var e=qx.dom.Node.getDocument(c);
var d=this.getSelectionObject(e);
if(d.anchorOffset<d.focusOffset){return d.anchorOffset;
}else{return d.focusOffset;
}}},"default":function(U){if(this.__hs(U)){return U.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(U)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(H,{"mshtml":function(I){if(this.__hs(I)){var N=qx.bom.Range.get();
if(!I.contains(N.parentElement())){return -1;
}var O=qx.bom.Range.get(I);
var M=I.value.length;
O.moveToBookmark(N.getBookmark());
O.moveStart(B,-M);
return O.text.length;
}else{var O=qx.bom.Range.get(I);
var K=O.parentElement();
var P=qx.bom.Range.get();
P.moveToElementText(K);
var M=P.text.length;
var J=qx.bom.Range.get(qx.dom.Node.getBodyElement(I));
J.setEndPoint(F,O);
J.setEndPoint(C,P);
if(P.compareEndPoints(F,J)==0){return M-1;
}var L;
var Q=0;

while(true){L=J.moveEnd(G,1);
if(P.compareEndPoints(F,J)==0){break;
}if(L==0){break;
}else{Q++;
}}return M-(++Q);
}},"gecko|webkit":function(u){if(this.__hs(u)){return u.selectionEnd;
}else{var w=qx.dom.Node.getDocument(u);
var v=this.getSelectionObject(w);
if(v.focusOffset>v.anchorOffset){return v.focusOffset;
}else{return v.anchorOffset;
}}},"default":function(a){if(this.__hs(a)){return a.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a)).focusOffset;
}}}),__hs:function(bm){return qx.dom.Node.isElement(bm)&&(bm.nodeName.toLowerCase()==E||bm.nodeName.toLowerCase()==D);
},set:qx.core.Variant.select(H,{"mshtml":function(bt,bu,bv){var bw;
if(qx.dom.Node.isDocument(bt)){bt=bt.body;
}
if(qx.dom.Node.isElement(bt)||qx.dom.Node.isText(bt)){switch(bt.nodeName.toLowerCase()){case E:case D:case z:if(bv===undefined){bv=bt.value.length;
}
if(bu>=0&&bu<=bt.value.length&&bv>=0&&bv<=bt.value.length){bw=qx.bom.Range.get(bt);
bw.collapse(true);
bw.moveStart(G,bu);
bw.moveEnd(G,bv-bu);
bw.select();
return true;
}break;
case y:if(bv===undefined){bv=bt.nodeValue.length;
}
if(bu>=0&&bu<=bt.nodeValue.length&&bv>=0&&bv<=bt.nodeValue.length){bw=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bw.moveToElementText(bt.parentNode);
bw.collapse(true);
bw.moveStart(G,bu);
bw.moveEnd(G,bv-bu);
bw.select();
return true;
}break;
default:if(bv===undefined){bv=bt.childNodes.length-1;
}if(bt.childNodes[bu]&&bt.childNodes[bv]){bw=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bw.moveToElementText(bt.childNodes[bu]);
bw.collapse(true);
var bx=qx.bom.Range.get(qx.dom.Node.getBodyElement(bt));
bx.moveToElementText(bt.childNodes[bv]);
bw.setEndPoint(F,bx);
bw.select();
return true;
}}}return false;
},"default":function(n,o,p){var t=n.nodeName.toLowerCase();

if(qx.dom.Node.isElement(n)&&(t==E||t==D)){if(p===undefined){p=n.value.length;
}if(o>=0&&o<=n.value.length&&p>=0&&p<=n.value.length){n.focus();
n.select();
n.setSelectionRange(o,p);
return true;
}}else{var r=false;
var s=qx.dom.Node.getWindow(n).getSelection();
var q=qx.bom.Range.get(n);
if(qx.dom.Node.isText(n)){if(p===undefined){p=n.length;
}
if(o>=0&&o<n.length&&p>=0&&p<=n.length){r=true;
}}else if(qx.dom.Node.isElement(n)){if(p===undefined){p=n.childNodes.length-1;
}
if(o>=0&&n.childNodes[o]&&p>=0&&n.childNodes[p]){r=true;
}}else if(qx.dom.Node.isDocument(n)){n=n.body;

if(p===undefined){p=n.childNodes.length-1;
}
if(o>=0&&n.childNodes[o]&&p>=0&&n.childNodes[p]){r=true;
}}
if(r){if(!s.isCollapsed){s.collapseToStart();
}q.setStart(n,o);
if(qx.dom.Node.isText(n)){q.setEnd(n,p);
}else{q.setEndAfter(n.childNodes[p]);
}if(s.rangeCount>0){s.removeAllRanges();
}s.addRange(q);
return true;
}}return false;
}}),setAll:function(i){return qx.bom.Selection.set(i,0);
},clear:qx.core.Variant.select(H,{"mshtml":function(j){var k=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(j));
var l=qx.bom.Range.get(j);
var parent=l.parentElement();
var m=qx.bom.Range.get(qx.dom.Node.getDocument(j));
if(parent==m.parentElement()&&parent==j){k.empty();
}},"default":function(bg){var bi=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bg));
var bk=bg.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bg)&&(bk==E||bk==D)){bg.setSelectionRange(0,0);
qx.bom.Element.blur(bg);
}else if(qx.dom.Node.isDocument(bg)||bk==x){bi.collapse(bg.body?bg.body:bg,0);
}else{var bj=qx.bom.Range.get(bg);

if(!bj.collapsed){var bl;
var bh=bj.commonAncestorContainer;
if(qx.dom.Node.isElement(bg)&&qx.dom.Node.isText(bh)){bl=bh.parentNode;
}else{bl=bh;
}
if(bl==bg){bi.collapse(bg,0);
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
(function(){var p="",o="g",n="$",m="qx.util.StringSplit",l="\\$&",k="^";
qx.Class.define(m,{statics:{split:function(a,b,c){var f=p;
if(b===undefined){return [a.toString()];
}else if(b===null||b.constructor!==RegExp){b=new RegExp(String(b).replace(/[.*+?^${}()|[\]\/\\]/g,l),o);
}else{f=b.toString().replace(/^[\S\s]+\//,p);

if(!b.global){b=new RegExp(b.source,o+f);
}}var e=new RegExp(k+b.source+n,f);
if(c===undefined||+c<0){c=false;
}else{c=Math.floor(+c);

if(!c){return [];
}}var h,g=[],d=0,i=0;

while((c?i++<=c:true)&&(h=b.exec(a))){if((h[0].length===0)&&(b.lastIndex>h.index)){b.lastIndex--;
}
if(b.lastIndex>d){if(h.length>1){h[0].replace(e,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){h[j]=undefined;
}}});
}g=g.concat(a.substring(d,h.index),(h.index===a.length?[]:h.slice(1)));
d=b.lastIndex;
}
if(h[0].length===0){b.lastIndex++;
}}return (d===a.length)?(b.test(p)?g:g.concat(p)):(c?g:g.concat(a.substring(d)));
}}});
})();
(function(){var e="qx.ui.core.queue.Widget",d="widget";
qx.Class.define(e,{statics:{__ht:{},remove:function(h){delete this.__ht[h.$$hash];
},add:function(f){var g=this.__ht;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(d);
},flush:function(){var a=this.__ht;
var c;

for(var b in a){c=a[b];
delete a[b];
c.syncWidget();
}for(var b in a){return;
}this.__ht={};
}}});
})();
(function(){var i="qx.ui.core.queue.Visibility",h="visibility";
qx.Class.define(i,{statics:{__hu:{},__hv:{},remove:function(j){var k=j.$$hash;
delete this.__hv[k];
delete this.__hu[k];
},isVisible:function(l){return this.__hv[l.$$hash]||false;
},__hw:function(m){var o=this.__hv;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__hw(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(a){var b=this.__hu;

if(b[a.$$hash]){return;
}b[a.$$hash]=a;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var c=this.__hu;
var g=this.__hv;
for(var d in c){if(g[d]!=null){c[d].addChildrenToQueue(c);
}}var f={};

for(var d in c){f[d]=g[d];
g[d]=null;
}for(var d in c){var e=c[d];
delete c[d];
if(g[d]==null){this.__hw(e);
}if(g[d]&&g[d]!=f[d]){e.checkAppearanceNeeds();
}}this.__hu={};
}}});
})();
(function(){var g="appearance",f="qx.ui.core.queue.Appearance";
qx.Class.define(f,{statics:{__hx:{},remove:function(e){delete this.__hx[e.$$hash];
},add:function(h){var i=this.__hx;

if(i[h.$$hash]){return;
}i[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(g);
},has:function(j){return !!this.__hx[j.$$hash];
},flush:function(){var d=qx.ui.core.queue.Visibility;
var a=this.__hx;
var c;

for(var b in a){c=a[b];
delete a[b];
if(d.isVisible(c)){c.syncAppearance();
}else{c.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hy:{},add:function(f){var g=this.__hy;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__hy;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__hy={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){arguments.callee.base.call(this);
this.__hz=d;
this.__hA=e||d.toHashCode();
this.useMarkup(d.getMarkup());
var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}this.setStyles(f);
},members:{__hA:null,__hz:null,getId:function(){return this.__hA;
},getDecorator:function(){return this.__hz;
},resize:function(h,i){this.__hz.resize(this.getDomElement(),h,i);
},tint:function(g){this.__hz.tint(this.getDomElement(),g);
},getInsets:function(){return this.__hz.getInsets();
}},destruct:function(){this.__hz=null;
}});
})();
(function(){var k="blur",j="focus",h="input",g="load",f="qx.ui.core.EventHandler",e="activate";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__hB=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__hB:null,__hC:{focusin:1,focusout:1,focus:1,blur:1},__hD:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(n){var s=n.getTarget();
var r=qx.ui.core.Widget.getWidgetByElement(s);
var t=false;

while(r&&r.isAnonymous()){var t=true;
r=r.getLayoutParent();
}if(r&&t&&n.getType()==e){r.getContainerElement().activate();
}if(this.__hC[n.getType()]){r=r&&r.getFocusTarget();
if(!r){return;
}}if(n.getRelatedTarget){var A=n.getRelatedTarget();
var z=qx.ui.core.Widget.getWidgetByElement(A);

while(z&&z.isAnonymous()){z=z.getLayoutParent();
}
if(z){if(this.__hC[n.getType()]){z=z.getFocusTarget();
}if(z===r){return;
}}}var v=n.getCurrentTarget();
var x=qx.ui.core.Widget.getWidgetByElement(v);

if(!x||x.isAnonymous()){return;
}if(this.__hC[n.getType()]){x=x.getFocusTarget();
}var y=n.getType();

if(!x||!(x.isEnabled()||this.__hD[y])){return;
}var o=n.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var u=this.__hB.getListeners(x,y,o);

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
},registerEvent:function(a,b,c){var d;

if(b===j||b===k){d=a.getFocusElement();
}else if(b===g||b===h){d=a.getContentElement();
}else{d=a.getContainerElement();
}
if(d){d.addListener(b,this._dispatchEvent,this,c);
}},unregisterEvent:function(C,D,E){var F;

if(D===j||D===k){F=C.getFocusElement();
}else if(D===g||D===h){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.removeListener(D,this._dispatchEvent,this,E);
}}},destruct:function(){this.__hB=null;
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var h="abstract",g="qx.debug",f="qx.ui.layout.Abstract";
qx.Class.define(f,{type:h,extend:qx.core.Object,members:{__hE:null,_invalidChildrenCache:null,__hF:null,invalidateLayoutCache:function(){this.__hE=null;
},renderLayout:function(a,b){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hE){return this.__hE;
}return this.__hE=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(k){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(g,{"on":function(d,name,e){},"off":null}),_clearSeparators:function(){var c=this.__hF;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(i,j){this.__hF.renderSeparator(i,j);
},connectToWidget:function(l){if(l&&this.__hF){throw new Error("It is not possible to manually set the connected widget.");
}this.__hF=l;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hF;
},_applyLayoutChange:function(){if(this.__hF){this.__hF.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hF.getLayoutChildren();
}},destruct:function(){this.__hF=this.__hE=null;
}});
})();
(function(){var p="/",o="mshtml",n="",m="qx.client",l="?",k="string",j="qx.util.ResourceManager",i="singleton";
qx.Class.define(j,{extend:qx.core.Object,type:i,statics:{__hG:qx.$$resources||{},__hH:{}},members:{has:function(B){return !!arguments.callee.self.__hG[B];
},getData:function(w){return arguments.callee.self.__hG[w]||null;
},getImageWidth:function(q){var r=arguments.callee.self.__hG[q];
return r?r[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__hG[z];
return A?A[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__hG[a];
return b?b[2]:null;
},isClippedImage:function(x){var y=arguments.callee.self.__hG[x];
return y&&y.length>4;
},toUri:function(s){if(s==null){return s;
}var t=arguments.callee.self.__hG[s];

if(!t){return s;
}
if(typeof t===k){var v=t;
}else{var v=t[3];
if(!v){return s;
}}var u=n;

if(qx.core.Variant.isSet(m,o)&&qx.bom.client.Feature.SSL){u=arguments.callee.self.__hH[v];
}return u+qx.$$libraries[v].resourceUri+p+s;
}},defer:function(c){if(qx.core.Variant.isSet(m,o)){if(qx.bom.client.Feature.SSL){for(var g in qx.$$libraries){var e;

if(qx.$$libraries[g].resourceUri){e=qx.$$libraries[g].resourceUri;
}else{c.__hH[g]=n;
continue;
}if(e.match(/^\/\//)!=null){c.__hH[g]=window.location.protocol;
}else if(e.match(/^\.\//)!=null){var d=document.URL;
c.__hH[g]=d.substring(0,d.lastIndexOf(p)+1);
}else if(e.match(/^http/)!=null){}else{var h=window.location.href.indexOf(l);
var f;

if(h==-1){f=window.location.href;
}else{f=window.location.href.substring(0,h);
}c.__hH[g]=f.substring(0,f.lastIndexOf(p)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hI:function(){var d=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var f=a;
var e=d.indexOf(b);

if(e!=-1){f=d.substr(e+1);
d=d.substr(0,e);
}this.LOCALE=d;
this.VARIANT=f;
}},defer:function(g){g.__hI();
}});
})();
(function(){var z="",y='indexOf',x='slice',w='concat',v='toLocaleLowerCase',u="qx.type.BaseString",t='match',s="qx.debug",r='search',q='replace',h='toLowerCase',p='charCodeAt',m='split',g='substring',f='lastIndexOf',k="on",j='substr',n='toLocaleUpperCase',e='toUpperCase',o='charAt';
qx.Class.define(u,{extend:Object,construct:function(a){var a=a||z;
this.__hJ=a;
this.length=a.length;
},members:{$$isString:true,length:0,__hJ:null,toString:function(){return this.__hJ;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(A,B){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(b,c){if(qx.core.Variant.isSet(s,k)){qx.Class.include(b,qx.core.MAssert);
}var d=[o,p,w,y,f,t,q,r,x,m,j,g,h,e,v,n];
c.valueOf=c.toString;

if(new b(z).valueOf()==null){delete c.valueOf;
}
for(var i=0,l=d.length;i<l;i++){c[d[i]]=String.prototype[d[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__hK=c;
this.__hL=d;
},members:{__hK:null,__hL:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hK,this.__hL);
}}});
})();
(function(){var y="_",x="",w="qx.dynlocale",v="on",u="_applyLocale",t="changeLocale",s="C",r="qx.locale.Manager",q="String",p="singleton";
qx.Class.define(r,{type:p,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hM=qx.$$translations||{};
this.__hN=qx.$$locales||{};
var P=qx.bom.client.Locale;
var N=P.LOCALE;
var O=P.VARIANT;

if(O!==x){N+=y+O;
}this.setLocale(N||this.__hO);
},statics:{tr:function(D,E){var F=qx.lang.Array.fromArguments(arguments);
F.splice(0,1);
return qx.locale.Manager.getInstance().translate(D,F);
},trn:function(k,l,m,n){var o=qx.lang.Array.fromArguments(arguments);
o.splice(0,3);
if(m!=1){return qx.locale.Manager.getInstance().translate(l,o);
}else{return qx.locale.Manager.getInstance().translate(k,o);
}},trc:function(z,A,B){var C=qx.lang.Array.fromArguments(arguments);
C.splice(0,2);
return qx.locale.Manager.getInstance().translate(A,C);
},marktr:function(g){return g;
}},properties:{locale:{check:q,nullable:true,apply:u,event:t}},members:{__hO:s,__hP:null,__hQ:null,__hM:null,__hN:null,getLanguage:function(){return this.__hQ;
},getTerritory:function(){return this.getLocale().split(y)[1]||x;
},getAvailableLocales:function(){var f=[];

for(var e in this.__hN){if(e!=this.__hO){f.push(e);
}}return f;
},__hR:function(K){var M;
var L=K.indexOf(y);

if(L==-1){M=K;
}else{M=K.substring(0,L);
}return M;
},_applyLocale:function(h,j){this.__hP=h;
this.__hQ=this.__hR(h);
},addTranslation:function(G,H){var I=this.__hM;

if(I[G]){for(var J in H){I[G][J]=H[J];
}}else{I[G]=H;
}},addLocale:function(a,b){var c=this.__hN;

if(c[a]){for(var d in b){c[a][d]=b[d];
}}else{c[a]=b;
}},translate:function(Q,R,S){var X;
var V=this.__hM;

if(!V){return Q;
}
if(S){var U=this.__hR(S);
}else{S=this.__hP;
U=this.__hQ;
}
if(!X&&V[S]){X=V[S][Q];
}
if(!X&&V[U]){X=V[U][Q];
}
if(!X&&V[this.__hO]){X=V[this.__hO][Q];
}
if(!X){X=Q;
}
if(R.length>0){var T=[];

for(var i=0;i<R.length;i++){var W=R[i];

if(W&&W.translate){T[i]=W.translate();
}else{T[i]=W;
}}X=qx.lang.String.format(X,T);
}
if(qx.core.Variant.isSet(w,v)){X=new qx.locale.LocalizedString(X,Q,R);
}return X;
},localize:function(Y,ba,bb){var bg;
var be=this.__hN;

if(!be){return Y;
}
if(bb){var bd=this.__hR(bb);
}else{bb=this.__hP;
bd=this.__hQ;
}
if(!bg&&be[bb]){bg=be[bb][Y];
}
if(!bg&&be[bd]){bg=be[bd][Y];
}
if(!bg&&be[this.__hO]){bg=be[this.__hO][Y];
}
if(!bg){bg=Y;
}
if(ba.length>0){var bc=[];

for(var i=0;i<ba.length;i++){var bf=ba[i];

if(bf.translate){bc[i]=bf.translate();
}else{bc[i]=bf;
}}bg=qx.lang.String.format(bg,bc);
}
if(qx.core.Variant.isSet(w,v)){bg=new qx.locale.LocalizedString(bg,Y,ba);
}return bg;
}},destruct:function(){this.__hM=this.__hN=null;
}});
})();
(function(){var n="source",m="scale",l="no-repeat",k="mshtml",j="backgroundImage",i="qx.client",h="div",g="qx.html.Image";
qx.Class.define(g,{extend:qx.html.Element,members:{_applyProperty:function(name,a){arguments.callee.base.call(this,name,a);

if(name===n){var e=this.getDomElement();
var b=this.getAllStyles();

if(this.getNodeName()==h&&this.getStyle(j)){b.backgroundPosition=null;
b.backgroundRepeat=null;
}var c=this._getProperty(n);
var d=this._getProperty(m);
var f=d?m:l;
qx.bom.element.Decoration.update(e,c,f,b);
}},_createDomElement:function(){var r=this._getProperty(m);
var s=r?m:l;

if(qx.core.Variant.isSet(i,k)){var q=this._getProperty(n);
this.setNodeName(qx.bom.element.Decoration.getTagName(s,q));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(s));
}return arguments.callee.base.call(this);
},_copyData:function(o){return arguments.callee.base.call(this,true);
},setSource:function(t){this._setProperty(n,t);
return this;
},getSource:function(){return this._getProperty(n);
},resetSource:function(){this._removeProperty(n);
return this;
},setScale:function(p){this._setProperty(m,p);
return this;
},getScale:function(){return this._getProperty(m);
}}});
})();
(function(){var P="px",O="qx.client",N="div",M="img",L="",K="no-repeat",J="qx.debug",I="scale-x",H="mshtml",G="on",bo="repeat",bn="scale",bm="scale-y",bl="qx/icon",bk=".png",bj="crop",bi="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",bh='<div style="',bf="repeat-y",be='<img src="',W="qx.bom.element.Decoration",X="', sizingMethod='",U="png",V="')",S='"></div>',T='"/>',Q='" style="',R="none",Y="webkit",ba=" ",bc="repeat-x",bb="DXImageTransform.Microsoft.AlphaImageLoader",bd="absolute";
qx.Class.define(W,{statics:{DEBUG:false,__hS:{},__hT:qx.core.Variant.isSet(O,H),__hU:qx.core.Variant.select(O,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hV:{"scale-x":M,"scale-y":M,"scale":M,"repeat":N,"no-repeat":N,"repeat-x":N,"repeat-y":N},update:function(bU,bV,bW,bX){var ca=this.getTagName(bW,bV);

if(ca!=bU.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var cb=this.getAttributes(bV,bW,bX);

if(ca===M){bU.src=cb.src;
}if(bU.style.backgroundPosition!=L&&cb.style.backgroundPosition===undefined){cb.style.backgroundPosition=null;
}if(bU.style.clip!=L&&cb.style.clip===undefined){cb.style.clip=null;
}var bY=qx.bom.element.Style;
bY.setStyles(bU,cb.style);
if(this.__hT){try{bU.filters[bb].apply();
}catch(e){}}},create:function(bt,bu,bv){var bw=this.getTagName(bu,bt);
var by=this.getAttributes(bt,bu,bv);
var bx=qx.bom.element.Style.compile(by.style);

if(bw===M){return be+by.src+Q+bx+T;
}else{return bh+bx+S;
}},getTagName:function(g,h){if(qx.core.Variant.isSet(O,H)){if(h&&this.__hT&&this.__hU[g]&&qx.lang.String.endsWith(h,bk)){return N;
}}return this.__hV[g];
},getAttributes:function(bE,bF,bG){if(!bG){bG={};
}
if(!bG.position){bG.position=bd;
}
if(qx.core.Variant.isSet(O,H)){bG.fontSize=0;
bG.lineHeight=0;
}else if(qx.core.Variant.isSet(O,Y)){bG.WebkitUserDrag=R;
}var bI=qx.util.ResourceManager.getInstance().getImageFormat(bE)||qx.io.ImageLoader.getFormat(bE);

if(qx.core.Variant.isSet(J,G)){if(bE!=null&&bI==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bE+"'!");
}}var bH;
if(this.__hT&&this.__hU[bF]&&bI===U){bH=this.__hY(bG,bF,bE);
}else{if(bF===bn){bH=this.__ia(bG,bF,bE);
}else if(bF===I||bF===bm){bH=this.__ib(bG,bF,bE);
}else{bH=this.__ie(bG,bF,bE);
}}return bH;
},__hW:function(o,p,q){if(o.width==null&&p!=null){o.width=p+P;
}
if(o.height==null&&q!=null){o.height=q+P;
}return o;
},__hX:function(bJ){var bK=qx.util.ResourceManager.getInstance().getImageWidth(bJ)||qx.io.ImageLoader.getWidth(bJ);
var bL=qx.util.ResourceManager.getInstance().getImageHeight(bJ)||qx.io.ImageLoader.getHeight(bJ);
return {width:bK,height:bL};
},__hY:function(i,j,k){var n=this.__hX(k);
i=this.__hW(i,n.width,n.height);
var m=j==K?bj:bn;
var l=bi+qx.util.ResourceManager.getInstance().toUri(k)+X+m+V;
i.filter=l;
i.backgroundImage=i.backgroundRepeat=L;
return {style:i};
},__ia:function(a,b,c){var d=qx.util.ResourceManager.getInstance().toUri(c);
var f=this.__hX(c);
a=this.__hW(a,f.width,f.height);
return {src:d,style:a};
},__ib:function(bM,bN,bO){var bS=qx.util.ResourceManager.getInstance();
var bR=bS.isClippedImage(bO);
var bT=this.__hX(bO);

if(bR){var bQ=bS.getData(bO);
var bP=bS.toUri(bQ[4]);

if(bN===I){bM=this.__ic(bM,bQ,bT.height);
}else{bM=this.__id(bM,bQ,bT.width);
}return {src:bP,style:bM};
}else{if(qx.core.Variant.isSet(J,G)){this.__ig(bO);
}
if(bN==I){bM.height=bT.height==null?null:bT.height+P;
}else if(bN==bm){bM.width=bT.width==null?null:bT.width+P;
}var bP=bS.toUri(bO);
return {src:bP,style:bM};
}},__ic:function(bp,bq,br){var bs=qx.util.ResourceManager.getInstance().getImageHeight(bq[4]);
bp.clip={top:-bq[6],height:br};
bp.height=bs+P;
if(bp.top!=null){bp.top=(parseInt(bp.top,10)+bq[6])+P;
}else if(bp.bottom!=null){bp.bottom=(parseInt(bp.bottom,10)+br-bs-bq[6])+P;
}return bp;
},__id:function(bz,bA,bB){var bC=qx.util.ResourceManager.getInstance().getImageWidth(bA[4]);
bz.clip={left:-bA[5],width:bB};
bz.width=bC+P;
if(bz.left!=null){bz.left=(parseInt(bz.left,10)+bA[5])+P;
}else if(bz.right!=null){bz.right=(parseInt(bz.right,10)+bB-bC-bA[5])+P;
}return bz;
},__ie:function(y,z,A){var F=qx.util.ResourceManager.getInstance().isClippedImage(A);
var E=this.__hX(A);
if(F&&z!==bo){var D=qx.util.ResourceManager.getInstance().getData(A);
var C=qx.bom.element.Background.getStyles(D[4],z,D[5],D[6]);

for(var B in C){y[B]=C[B];
}
if(E.width!=null&&y.width==null&&(z==bf||z===K)){y.width=E.width+P;
}
if(E.height!=null&&y.height==null&&(z==bc||z===K)){y.height=E.height+P;
}return {style:y};
}else{if(qx.core.Variant.isSet(J,G)){if(z!==bo){this.__ig(A);
}}y=this.__hW(y,E.width,E.height);
y=this.__if(y,A,z);
return {style:y};
}},__if:function(r,s,t){var top=null;
var x=null;

if(r.backgroundPosition){var u=r.backgroundPosition.split(ba);
x=parseInt(u[0]);

if(isNaN(x)){x=u[0];
}top=parseInt(u[1]);

if(isNaN(top)){top=u[1];
}}var w=qx.bom.element.Background.getStyles(s,t,x,top);

for(var v in w){r[v]=w[v];
}if(r.filter){r.filter=L;
}return r;
},__ig:function(bD){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bD)&&bD.indexOf(bl)==-1){if(!this.__hS[bD]){qx.log.Logger.debug("Potential clipped image candidate: "+bD);
this.__hS[bD]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(O,{"mshtml":function(){return qx.bom.element.Decoration.__hT;
},"default":function(){return false;
}})}});
})();
(function(){var n="qx.client",m="load",k="qx.io.ImageLoader";
qx.Bootstrap.define(k,{statics:{__ih:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(A){var B=this.__ih[A];
return !!(B&&B.loaded);
},isFailed:function(h){var j=this.__ih[h];
return !!(j&&j.failed);
},isLoading:function(o){var p=this.__ih[o];
return !!(p&&p.loading);
},getFormat:function(q){var r=this.__ih[q];
return r?r.format:null;
},getSize:function(a){var b=this.__ih[a];
return b?
{width:b.width,height:b.height}:this.__ii;
},getWidth:function(G){var H=this.__ih[G];
return H?H.width:null;
},getHeight:function(C){var D=this.__ih[C];
return D?D.height:null;
},load:function(t,u,v){var w=this.__ih[t];

if(!w){w=this.__ih[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ik,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
}},__ik:qx.event.GlobalError.observeMethod(function(event,c,d){var e=this.__ih[d];
if(event.type===m){e.loaded=true;
e.width=this.__il(c);
e.height=this.__im(c);
var f=this.__ij.exec(d);

if(f!=null){e.format=f[1];
}}else{e.failed=true;
}c.onload=c.onerror=null;
var g=e.callbacks;
delete e.loading;
delete e.callbacks;
for(var i=0,l=g.length;i<l;i+=2){g[i].call(g[i+1],d,e);
}}),__il:qx.core.Variant.select(n,{"gecko":function(F){return F.naturalWidth;
},"default":function(s){return s.width;
}}),__im:qx.core.Variant.select(n,{"gecko":function(z){return z.naturalHeight;
},"default":function(E){return E.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__in:[i,null,h,b,null,j,e,null,j],__io:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ip:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__ip(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__in;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__io;
}var G=this.__ip(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var T="nonScaled",S="scaled",R="alphaScaled",Q=".png",P="div",O="replacement",N="hidden",M="Boolean",L="px",K="http",bg="changeSource",bf="qx.client",be="qx.ui.basic.Image",bd="qx.debug",bc="-disabled.$1",bb="String",ba="_applySource",Y="img",X="image",W="_applyScale",U="__iq",V="on";
qx.Class.define(be,{extend:qx.ui.core.Widget,construct:function(E){this.__iq={};
arguments.callee.base.call(this);

if(E){this.setSource(E);
}},properties:{source:{check:bb,init:null,nullable:true,event:bg,apply:ba,themeable:true},scale:{check:M,init:false,themeable:true,apply:W},appearance:{refine:true,init:X},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__ir:null,__is:null,__it:null,__iq:null,getContentElement:function(){return this.__ix();
},_createContentElement:function(){return this.__ix();
},_getContentHint:function(){return {width:this.__ir||0,height:this.__is||0};
},_applyEnabled:function(d,e){arguments.callee.base.call(this,d,e);

if(this.getSource()){this._styleSource();
}},_applySource:function(a){this._styleSource();
},_applyScale:function(u){this._styleSource();
},__iu:function(D){this.__it=D;
},__iv:function(){if(this.__it==null){var c=this.getSource();
var b=false;

if(c!=null){b=qx.lang.String.endsWith(c,Q);
}
if(this.getScale()&&b&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__it=R;
}else if(this.getScale()){this.__it=S;
}else{this.__it=T;
}}return this.__it;
},__iw:function(f){var g;
var h;

if(f==R){g=true;
h=P;
}else if(f==T){g=false;
h=P;
}else{g=true;
h=Y;
}var i=new qx.html.Image(h);
i.setScale(g);
i.setStyles({"overflowX":N,"overflowY":N});
return i;
},__ix:function(){var I=this.__iv();

if(this.__iq[I]==null){this.__iq[I]=this.__iw(I);
}return this.__iq[I];
},_styleSource:function(){var C=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!C){this.getContentElement().resetSource();
return;
}this.__iy(C);
if(qx.util.ResourceManager.getInstance().has(C)){this.__iA(this.getContentElement(),C);
}else if(qx.io.ImageLoader.isLoaded(C)){this.__iB(this.getContentElement(),C);
}else{this.__iC(this.getContentElement(),C);
}},__iy:qx.core.Variant.select(bf,{"mshtml":function(r){var t=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var s=qx.lang.String.endsWith(r,Q);

if(t&&s){if(this.getScale()&&this.__iv()!=R){this.__iu(R);
}else if(!this.getScale()&&this.__iv()!=T){this.__iu(T);
}}else{if(this.getScale()&&this.__iv()!=S){this.__iu(S);
}else if(!this.getScale()&&this.__iv()!=T){this.__iu(T);
}}this.__iz(this.__ix());
},"default":function(J){if(this.getScale()&&this.__iv()!=S){this.__iu(S);
}else if(!this.getScale()&&this.__iv(T)){this.__iu(T);
}this.__iz(this.__ix());
}}),__iz:function(v){var y=this.getContainerElement();
var z=y.getChild(0);

if(z!=v){if(z!=null){var B=L;
var w={};
var x=this.getInnerSize();

if(x!=null){w.width=x.width+B;
w.height=x.height+B;
}var A=this.getInsets();
w.left=A.left+B;
w.top=A.top+B;
w.zIndex=10;
v.setStyles(w,true);
v.setSelectable(this.getSelectable());
}y.removeAt(0);
y.addAt(v,0);
}},__iA:function(j,k){var m=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var l=k.replace(/\.([a-z]+)$/,bc);

if(m.has(l)){k=l;
this.addState(O);
}else{this.removeState(O);
}}if(j.getSource()===k){return;
}j.setSource(k);
this.__iF(m.getImageWidth(k),m.getImageHeight(k));
},__iB:function(bh,bi){var bk=qx.io.ImageLoader;
bh.setSource(bi);
var bj=bk.getWidth(bi);
var bl=bk.getHeight(bi);
this.__iF(bj,bl);
},__iC:function(F,G){var H=qx.io.ImageLoader;

if(qx.core.Variant.isSet(bd,V)){if(!qx.lang.String.startsWith(G.toLowerCase(),K)){var self=arguments.callee.self;

if(!self.__iD){self.__iD={};
}
if(!self.__iD[G]){this.debug("try to load a unmanaged relative image: "+G);
self.__iD[G]=true;
}}}if(!H.isFailed(G)){H.load(G,this.__iE,this);
}else{if(F!=null){F.resetSource();
}}},__iE:function(p,q){if(p!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(q.failed){this.warn("Image could not be loaded: "+p);
}this._styleSource();
},__iF:function(n,o){if(n!==this.__ir||o!==this.__is){this.__ir=n;
this.__is=o;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(U);
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
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__iG=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__iG:null,_applyTimeoutInterval:function(h){this.__iG.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__iG){this.__iG.stop();
}this.__iG=null;
}});
})();
(function(){var l="top",k="right",j="bottom",i="left",h="edge-start",g="align-start",f="align-end",e="edge-end",d="qx.util.placement.AbstractAxis",c="-",I="best-fit",H="size",G="target.bottom",F="offsets",E="size.width",D="offsets.bottom",C='__iH',B="qx.util.placement.Placement",A="qx.debug",z="keep-align",s="target.right",t="direct",q="offsets.right",r="target",o="offsets.left",p="area",m="target.top",n="area.height",u="target.left",v="area.width",x="on",w="size.height",y="offsets.top";
qx.Class.define(B,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iH=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:d},axisY:{check:d},edge:{check:[l,k,j,i],init:l},align:{check:[l,k,j,i],init:k}},statics:{__iI:null,compute:function(T,U,V,W,X,Y,ba){this.__iI=this.__iI||new qx.util.placement.Placement();
var bd=X.split(c);
var bc=bd[0];
var bb=bd[1];
this.__iI.set({axisX:this.__iM(Y),axisY:this.__iM(ba),edge:bc,align:bb});
return this.__iI.compute(T,U,V,W);
},__iJ:null,__iK:null,__iL:null,__iM:function(S){switch(S){case t:this.__iJ=this.__iJ||new qx.util.placement.DirectAxis();
return this.__iJ;
case z:this.__iK=this.__iK||new qx.util.placement.KeepAlignAxis();
return this.__iK;
case I:this.__iL=this.__iL||new qx.util.placement.BestFitAxis();
return this.__iL;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__iH:null,compute:function(L,M,N,O){if(qx.core.Variant.isSet(A,x)){this.assertObject(L,H);
this.assertNumber(L.width,E);
this.assertNumber(L.height,w);
this.assertObject(M,p);
this.assertNumber(M.width,v);
this.assertNumber(M.height,n);
this.assertObject(N,r);
this.assertNumber(N.top,m);
this.assertNumber(N.right,s);
this.assertNumber(N.bottom,G);
this.assertNumber(N.left,u);
this.assertObject(O,F);
this.assertNumber(O.top,y);
this.assertNumber(O.right,q);
this.assertNumber(O.bottom,D);
this.assertNumber(O.left,o);
}var P=this.getAxisX()||this.__iH;
var R=P.computeStart(L.width,{start:N.left,end:N.right},{start:O.left,end:O.right},M.width,this.__iN());
var Q=this.getAxisY()||this.__iH;
var top=Q.computeStart(L.height,{start:N.top,end:N.bottom},{start:O.top,end:O.bottom},M.height,this.__iO());
return {left:R,top:top};
},__iN:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==i){return h;
}else if(K==k){return e;
}else if(J==i){return g;
}else if(J==k){return f;
}},__iO:function(){var b=this.getEdge();
var a=this.getAlign();

if(b==l){return h;
}else if(b==j){return e;
}else if(a==l){return g;
}else if(a==j){return f;
}}},destruct:function(){this._disposeObjects(C);
}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(i,j,k,l,m){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
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
(function(){var m="mousedown",l="qx.debug",k="on",j="blur",i="__iP",h="qx.ui.popup.Manager",g="singleton";
qx.Class.define(h,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__iP={};
qx.event.Registration.addListener(document.documentElement,m,this.__iR,this,true);
qx.bom.Element.addListener(window,j,this.hideAll,this);
},members:{__iP:null,add:function(p){if(qx.core.Variant.isSet(l,k)){if(!(p instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+p);
}}this.__iP[p.$$hash]=p;
this.__iQ();
},remove:function(d){if(qx.core.Variant.isSet(l,k)){if(!(d instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+d);
}}var f=this.__iP;

if(f){delete f[d.$$hash];
this.__iQ();
}},hideAll:function(){var o=this.__iP;

if(o){for(var n in o){o[n].exclude();
}}},__iQ:function(){var c=1e7;
var b=this.__iP;

for(var a in b){b[a].setZIndex(c++);
}},__iR:function(e){var s=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var t=this.__iP;

for(var r in t){var q=t[r];

if(!q.getAutoHide()||s==q||qx.ui.core.Widget.contains(q,s)){continue;
}q.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,m,this.__iR,this,true);
this._disposeMap(i);
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
(function(){var p="label",o="icon",n="Boolean",m="both",l="String",k="left",j="changeGap",i="changeShow",h="bottom",g="_applyCenter",E="changeIcon",D="qx.ui.basic.Atom",C="changeLabel",B="Integer",A="_applyIconPosition",z="qx.debug",y="top",x="right",w="_applyRich",v="_applyIcon",t="_applyShow",u="on",r="_applyLabel",s="_applyGap",q="atom";
qx.Class.define(D,{extend:qx.ui.core.Widget,construct:function(S,T){if(qx.core.Variant.isSet(z,u)){this.assertArgumentsCount(arguments,0,2);
}arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(S!=null){this.setLabel(S);
}
if(T!=null){this.setIcon(T);
}},properties:{appearance:{refine:true,init:q},label:{apply:r,nullable:true,check:l,event:C},rich:{check:n,init:false,apply:w},icon:{check:l,apply:v,nullable:true,themeable:true,event:E},gap:{check:B,nullable:false,event:j,apply:s,themeable:true,init:4},show:{init:m,check:[m,p,o],themeable:true,inheritable:true,apply:t,event:i},iconPosition:{init:k,check:[y,x,h,k],themeable:true,apply:A},center:{init:false,check:n,themeable:true,apply:g}},members:{_createChildControlImpl:function(F){var G;

switch(F){case p:G=new qx.ui.basic.Label(this.getLabel());
G.setAnonymous(true);
G.setRich(this.getRich());
this._add(G);

if(this.getLabel()==null||this.getShow()===o){G.exclude();
}break;
case o:G=new qx.ui.basic.Image(this.getIcon());
G.setAnonymous(true);
this._addAt(G,0);

if(this.getIcon()==null||this.getShow()===p){G.exclude();
}break;
}return G||arguments.callee.base.call(this,F);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===o){this._excludeChildControl(p);
}else{this._showChildControl(p);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===p){this._excludeChildControl(o);
}else{this._showChildControl(o);
}},_applyLabel:function(M,N){var O=this.getChildControl(p,true);

if(O){O.setValue(M);
}this._handleLabel();
},_applyRich:function(J,K){var L=this.getChildControl(p,true);

if(L){L.setRich(J);
}},_applyIcon:function(P,Q){var R=this.getChildControl(o,true);

if(R){R.setSource(P);
}this._handleIcon();
},_applyGap:function(a,b){this._getLayout().setGap(a);
},_applyShow:function(e,f){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(c,d){this._getLayout().setIconPosition(c);
},_applyCenter:function(H,I){this._getLayout().setCenter(H);
}}});
})();
(function(){var n="bottom",m="_applyLayoutChange",l="top",k="left",j="right",h="middle",g="' is not supported by the Atom layout!",f="qx.debug",e="center",d="qx.ui.layout.Atom",a="Integer",c="The property '",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:m},iconPosition:{check:[k,l,j,n],init:k,apply:m},center:{check:b,init:false,apply:m}},members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(o,name,p){this.assert(false,c+name+g);
},"off":null}),renderLayout:function(q,r){var A=qx.ui.layout.Util;
var t=this.getIconPosition();
var w=this._getLayoutChildren();
var length=w.length;
var K,top,J,u;
var F,z;
var D=this.getGap();
var I=this.getCenter();
if(t===n||t===j){var B=length-1;
var x=-1;
var v=-1;
}else{var B=0;
var x=length;
var v=1;
}if(t==l||t==n){if(I){var E=0;

for(var i=B;i!=x;i+=v){u=w[i].getSizeHint().height;

if(u>0){E+=u;

if(i!=B){E+=D;
}}}top=Math.round((r-E)/2);
}else{top=0;
}
for(var i=B;i!=x;i+=v){F=w[i];
z=F.getSizeHint();
J=Math.min(z.maxWidth,Math.max(q,z.minWidth));
u=z.height;
K=A.computeHorizontalAlignOffset(e,J,q);
F.renderLayout(K,top,J,u);
if(u>0){top+=u+D;
}}}else{var y=q;
var s=null;
var H=0;

for(var i=B;i!=x;i+=v){F=w[i];
J=F.getSizeHint().width;

if(J>0){if(!s&&F instanceof qx.ui.basic.Label){s=F;
}else{y-=J;
}H++;
}}
if(H>1){var G=(H-1)*D;
y-=G;
}
if(s){var z=s.getSizeHint();
var C=Math.max(z.minWidth,Math.min(y,z.maxWidth));
y-=C;
}
if(I&&y>0){K=Math.round(y/2);
}else{K=0;
}
for(var i=B;i!=x;i+=v){F=w[i];
z=F.getSizeHint();
u=Math.min(z.maxHeight,Math.max(r,z.minHeight));

if(F===s){J=C;
}else{J=z.width;
}top=A.computeVerticalAlignOffset(h,z.height,r);
F.renderLayout(K,top,J,u);
if(J>0){K+=J+D;
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
(function(){var y="middle",x="qx.ui.layout.Util",w="left",v="center",u="top",t="bottom",s="right";
qx.Class.define(x,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(ba,bb,bc){var be,bi,bd,bj;
var bf=bb>bc;
var bk=Math.abs(bb-bc);
var bl,bg;
var bh={};

for(bi in ba){be=ba[bi];
bh[bi]={potential:bf?be.max-be.value:be.value-be.min,flex:bf?be.flex:1/be.flex,offset:0};
}while(bk!=0){bj=Infinity;
bd=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bd+=be.flex;
bj=Math.min(bj,be.potential/be.flex);
}}if(bd==0){break;
}bj=Math.min(bk,bj*bd)/bd;
bl=0;

for(bi in bh){be=bh[bi];

if(be.potential>0){bg=Math.min(bk,be.potential,Math.ceil(bj*be.flex));
bl+=bg-bj*be.flex;

if(bl>=1){bl-=1;
bg-=1;
}be.potential-=bg;

if(bf){be.offset+=bg;
}else{be.offset-=bg;
}bk-=bg;
}}}return bh;
},computeHorizontalAlignOffset:function(z,A,B,C,D){if(C==null){C=0;
}
if(D==null){D=0;
}var E=0;

switch(z){case w:E=C;
break;
case s:E=B-A-D;
break;
case v:E=Math.round((B-A)/2);
if(E<C){E=C;
}else if(E<D){E=Math.max(C,B-A-D);
}break;
}return E;
},computeVerticalAlignOffset:function(F,G,H,I,J){if(I==null){I=0;
}
if(J==null){J=0;
}var K=0;

switch(F){case u:K=I;
break;
case t:K=H-G-J;
break;
case y:K=Math.round((H-G)/2);
if(K<I){K=I;
}else if(K<J){K=Math.max(I,H-G-J);
}break;
}return K;
},collapseMargins:function(o){var p=0,r=0;

for(var i=0,l=arguments.length;i<l;i++){var q=arguments[i];

if(q<0){r=Math.min(r,q);
}else if(q>0){p=Math.max(p,q);
}}return p+r;
},computeHorizontalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginLeft();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginRight(),a[i].getMarginLeft());
}d+=a[l-1].getMarginRight();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginLeft()+a[i].getMarginRight();
}d+=(b*(l-1));
}return d;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(L,M,N){var Q=qx.theme.manager.Decoration.getInstance().resolve(N);
var P=Q.getInsets();
var O=P.left+P.right;
var R=0;

for(var i=0,l=L.length;i<l;i++){var S=L[i];
R+=S.getMarginLeft()+S.getMarginRight();
}R+=(M+O+M)*(l-1);
return R;
},computeVerticalSeparatorGaps:function(e,f,g){var k=qx.theme.manager.Decoration.getInstance().resolve(g);
var j=k.getInsets();
var h=j.top+j.bottom;
var m=0;

for(var i=0,l=e.length;i<l;i++){var n=e[i];
m+=n.getMarginTop()+n.getMarginBottom();
}m+=(f+h+f)*(l-1);
return m;
},arrangeIdeals:function(T,U,V,W,X,Y){if(U<T||X<W){if(U<T&&X<W){U=T;
X=W;
}else if(U<T){X-=(T-U);
U=T;
if(X<W){X=W;
}}else if(X<W){U-=(W-X);
X=W;
if(U<T){U=T;
}}}
if(U>V||X>Y){if(U>V&&X>Y){U=V;
X=Y;
}else if(U>V){X+=(U-V);
U=V;
if(X>Y){X=Y;
}}else if(X>Y){U+=(X-Y);
X=Y;
if(U>V){U=V;
}}}return {begin:U,end:X};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var x="on",w="qx.dynlocale",v="text",u="Boolean",t="qx.client",s="color",r="userSelect",q="changeLocale",p="qx.debug",o="enabled",T="none",S="_applyTextAlign",R="qx.ui.core.Widget",Q="gecko",P="changeTextAlign",O="_applyWrap",N="changeValue",M="changeContent",L="qx.ui.basic.Label",K="A",E="_applyValue",F="center",C="_applyBuddy",D="String",A="textAlign",B="right",y="changeRich",z="_applyRich",G="click",H="label",J="webkit",I="left";
qx.Class.define(L,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(n){arguments.callee.base.call(this);

if(n!=null){this.setValue(n);
}
if(qx.core.Variant.isSet(w,x)){qx.locale.Manager.getInstance().addListener(q,this._onChangeLocale,this);
}},properties:{rich:{check:u,init:false,event:y,apply:z},wrap:{check:u,init:true,apply:O},value:{check:D,apply:E,event:N,nullable:true},buddy:{check:R,apply:C,nullable:true,init:null},textAlign:{check:[I,F,B],nullable:true,themeable:true,apply:S,event:P},appearance:{refine:true,init:H},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__iS:null,__iT:null,__iU:null,__iV:null,_getContentHint:function(){if(this.__iT){this.__iW=this.__iX();
delete this.__iT;
}return {width:this.__iW.width,height:this.__iW.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(ba){if(qx.core.Variant.isSet(t,Q)){if(ba&&!this.isRich()){if(qx.core.Variant.isSet(p,x)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}arguments.callee.base.call(this,ba);
if(qx.core.Variant.isSet(t,J)){this.getContainerElement().setStyle(r,ba?v:T);
this.getContentElement().setStyle(r,ba?v:T);
}},_getContentHeightForWidth:function(X){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__iX(X).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(g,h){this.getContentElement().setStyle(A,g);
},_applyTextColor:function(bd,be){if(bd){this.getContentElement().setStyle(s,qx.theme.manager.Color.getInstance().resolve(bd));
}else{this.getContentElement().removeStyle(s);
}},__iW:{width:0,height:0},_applyFont:function(U,V){var W;

if(U){this.__iS=qx.theme.manager.Font.getInstance().resolve(U);
W=this.__iS.getStyles();
}else{this.__iS=null;
W=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(W);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
},__iX:function(i){var m=qx.bom.Label;
var k=this.getFont();
var j=k?this.__iS.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||K;
var l=this.getRich();
return l?m.getHtmlSize(content,j,i):m.getTextSize(content,j);
},_applyBuddy:function(bb,bc){if(bc!=null){bc.removeBinding(this.__iU);
this.__iU=null;
this.removeListenerById(this.__iV);
this.__iV=null;
}
if(bb!=null){this.__iU=bb.bind(o,this,o);
this.__iV=this.addListener(G,bb.focus,bb);
}},_applyRich:function(Y){this.getContentElement().setRich(Y);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(a,b){if(a&&!this.isRich()){if(qx.core.Variant.isSet(p,x)){this.warn("Only rich labels support wrap.");
}}},_onChangeLocale:qx.core.Variant.select(w,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(d,f){this.getContentElement().setValue(d);
this.__iT=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(M,d,f);
}},destruct:function(){if(qx.core.Variant.isSet(w,x)){qx.locale.Manager.getInstance().removeListener(q,this._onChangeLocale,this);
}if(this.__iU!=null){var c=this.getBuddy();

if(c!=null&&!c.isDisposed()){c.removeBinding(this.__iU);
}}this.__iS=this.__iU=null;
}});
})();
(function(){var g="value",f="Please use the getValue() method instead.",e="qx.html.Label",d="Please use the setValue() method instead.";
qx.Class.define(e,{extend:qx.html.Element,members:{__iY:null,_applyProperty:function(name,h){arguments.callee.base.call(this,name,h);

if(name==g){var i=this.getDomElement();
qx.bom.Label.setValue(i,h);
}},_createDomElement:function(){var k=this.__iY;
var j=qx.bom.Label.create(this._content,k);
return j;
},_copyData:function(m){return arguments.callee.base.call(this,true);
},setRich:function(a){var b=this.getDomElement();

if(b){throw new Error("The label mode cannot be modified after initial creation");
}a=!!a;

if(this.__iY==a){return;
}this.__iY=a;
return this;
},setValue:function(c){this._setProperty(g,c);
return this;
},getValue:function(){return this._getProperty(g);
},setContent:function(l){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d);
return this.setValue(l);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,f);
return this.getValue();
}}});
})();
(function(){var o="qx.client",n="gecko",m="div",l="inherit",k="text",j="value",i="",h="hidden",g="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",f="nowrap",F="auto",E="ellipsis",D="normal",C="label",B="px",A="crop",z="end",y="100%",x="visible",w="qx.bom.Label",u="Please use the setValue() method instead.",v="opera",s="Please use the getValue() method instead.",t="block",q="none",r="-1000px",p="absolute";
qx.Class.define(w,{statics:{__ja:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jb:function(){var be=this.__jd(false);
document.body.insertBefore(be,document.body.firstChild);
return this._textElement=be;
},__jc:function(){var Y=this.__jd(true);
document.body.insertBefore(Y,document.body.firstChild);
return this._htmlElement=Y;
},__jd:function(I){var J=qx.bom.Element.create(m);
var K=J.style;
K.width=K.height=F;
K.left=K.top=r;
K.visibility=h;
K.position=p;
K.overflow=x;

if(I){K.whiteSpace=D;
}else{K.whiteSpace=f;

if(qx.core.Variant.isSet(o,n)){var L=document.createElementNS(g,C);
for(var M in this.__ja){L.style[M]=l;
}J.appendChild(L);
}}return J;
},__je:function(bf){var bg={};

if(bf){bg.whiteSpace=D;
}else if(qx.core.Variant.isSet(o,n)){bg.display=t;
}else{bg.overflow=h;
bg.whiteSpace=f;
bg.textOverflow=E;
bg.userSelect=q;
if(qx.core.Variant.isSet(o,v)){bg.OTextOverflow=E;
}}return bg;
},create:function(content,a,b){if(!b){b=window;
}
if(a){var c=b.document.createElement(m);
c.useHtml=true;
}else if(qx.core.Variant.isSet(o,n)){var c=b.document.createElement(m);
var d=b.document.createElementNS(g,C);
d.style.cursor=l;
d.style.color=l;
d.style.overflow=h;
d.style.maxWidth=y;
for(var e in this.__ja){d.style[e]=l;
}d.setAttribute(A,z);
c.appendChild(d);
}else{var c=b.document.createElement(m);
qx.bom.element.Style.setStyles(c,this.__je(a));
}
if(content){this.setValue(c,content);
}return c;
},setValue:function(G,H){H=H||i;

if(G.useHtml){G.innerHTML=H;
}else if(qx.core.Variant.isSet(o,n)){G.firstChild.setAttribute(j,H);
}else{qx.bom.element.Attribute.set(G,k,H);
}},getValue:function(bd){if(bd.useHtml){return bd.innerHTML;
}else if(qx.core.Variant.isSet(o,n)){return bd.firstChild.getAttribute(j)||i;
}else{return qx.bom.element.Attribute.get(bd,k);
}},getHtmlSize:function(content,S,T){var U=this._htmlElement||this.__jc();
U.style.width=T!==undefined?T+B:F;
U.innerHTML=content;
return this.__jf(U,S);
},getTextSize:function(V,W){var X=this._textElement||this.__jb();

if(qx.core.Variant.isSet(o,n)){X.firstChild.setAttribute(j,V);
}else{qx.bom.element.Attribute.set(X,k,V);
}return this.__jf(X,W);
},__jf:function(N,O){var P=this.__ja;

if(!O){O={};
}
for(var Q in P){N.style[Q]=O[Q]||i;
}var R=qx.bom.element.Dimension.getSize(N);

if(qx.core.Variant.isSet(o,n)){if(!qx.bom.client.Platform.WIN){R.width++;
}}return R;
},setContent:function(bb,bc){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.setValue(bb,bc);
},getContent:function(ba){qx.log.Logger.deprecatedMethodWarning(arguments.callee,s);
return this.getValue(ba);
}}});
})();
(function(){var l="mshtml",k="qx.client",j="qx.bom.element.Dimension",i="paddingRight",h="paddingLeft",g="paddingTop",f="paddingBottom";
qx.Class.define(j,{statics:{getWidth:qx.core.Variant.select(k,{"gecko":function(d){if(d.getBoundingClientRect){var e=d.getBoundingClientRect();
return Math.round(e.right)-Math.round(e.left);
}else{return d.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Variant.select(k,{"gecko":function(b){if(b.getBoundingClientRect){var c=b.getBoundingClientRect();
return Math.round(c.bottom)-Math.round(c.top);
}else{return b.offsetHeight;
}},"default":function(C){return C.offsetHeight;
}}),getSize:function(a){return {width:this.getWidth(a),height:this.getHeight(a)};
},__jg:{visible:true,hidden:true},getContentWidth:function(v){var x=qx.bom.element.Style;
var y=qx.bom.element.Overflow.getX(v);
var z=parseInt(x.get(v,h),10);
var B=parseInt(x.get(v,i),10);

if(this.__jg[y]){return v.clientWidth-z-B;
}else{if(v.clientWidth>=v.scrollWidth){return Math.max(v.clientWidth,v.scrollWidth)-z-B;
}else{var A=v.scrollWidth-z;
var w=qx.bom.client.Engine;

if(w.NAME===l&&w.VERSION==6){A-=B;
}return A;
}}},getContentHeight:function(o){var q=qx.bom.element.Style;
var s=qx.bom.element.Overflow.getY(o);
var t=parseInt(q.get(o,g),10);
var r=parseInt(q.get(o,f),10);

if(this.__jg[s]){return o.clientHeight-t-r;
}else{if(o.clientHeight>=o.scrollHeight){return Math.max(o.clientHeight,o.scrollHeight)-t-r;
}else{var u=o.scrollHeight-t;
var p=qx.bom.client.Engine;

if(p.NAME===l&&p.VERSION==6){u-=r;
}return u;
}}},getContentSize:function(n){return {width:this.getContentWidth(n),height:this.getContentHeight(n)};
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(e){return arguments.length==1;
},getEnabled:function(){},setRequired:function(b){return arguments.length==1;
},getRequired:function(){},setValid:function(a){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__jh";
qx.Mixin.define(d,{construct:function(){this.__jh=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__jh:null,_applyBlockerColor:function(i,j){this.__jh.setColor(i);
},_applyBlockerOpacity:function(k,l){this.__jh.setOpacity(k);
},block:function(){this.__jh.block();
},isBlocked:function(){return this.__jh.isBlocked();
},unblock:function(){this.__jh.unblock();
},forceUnblock:function(){this.__jh.forceUnblock();
},blockContent:function(m){this.__jh.blockContent(m);
},isContentBlocked:function(){return this.__jh.isContentBlocked();
},unblockContent:function(){this.__jh.unblockContent();
},forceUnblockContent:function(){this.__jh.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__jh.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__jh.getBlockerElement();
},getBlocker:function(){return this.__jh;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var l="qx.ui.window.Window",k="changeModal",j="changeVisibility",i="changeActive",h="_applyActiveWindow",g="__ji",f="qx.ui.window.MDesktop",d="__jj";
qx.Mixin.define(f,{properties:{activeWindow:{check:l,apply:h,init:null,nullable:true}},members:{__ji:null,__jj:null,getWindowManager:function(){if(!this.__jj){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__jj;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__jj){this.__jj.setDesktop(null);
}o.setDesktop(this);
this.__jj=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(b,c){this.getWindowManager().changeActiveWindow(b,c);

if(b){b.setActive(true);
}
if(c){c.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(p){if(qx.Class.isDefined(l)&&p instanceof qx.ui.window.Window){this._addWindow(p);
}},_addWindow:function(m){if(!qx.lang.Array.contains(this.getWindows(),m)){this.getWindows().push(m);
m.addListener(i,this._onChangeActive,this);
m.addListener(k,this._onChangeModal,this);
m.addListener(j,this._onChangeVisibility,this);
}
if(m.getActive()){this.setActiveWindow(m);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(l)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(a){qx.lang.Array.remove(this.getWindows(),a);
a.removeListener(i,this._onChangeActive,this);
a.removeListener(k,this._onChangeModal,this);
a.removeListener(j,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ji){this.__ji=[];
}return this.__ji;
}},destruct:function(){this._disposeArray(g);
this._disposeObjects(d);
}});
})();
(function(){var x="contextmenu",w="help",v="qx.client",u="changeGlobalCursor",t="abstract",s="Boolean",r="root",q="",p=" !important",o="_applyGlobalCursor",l="_applyNativeHelp",n=";",m="qx.ui.root.Abstract",k="String",j="*";
qx.Class.define(m,{type:t,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:r},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:k,nullable:true,themeable:true,apply:o,event:u},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:s,init:false,apply:l}},members:{__jk:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(v,{"mshtml":function(a,b){},"default":function(c,d){var f=qx.bom.Stylesheet;
var g=this.__jk;

if(!g){this.__jk=g=f.createElement();
}f.removeAllRules(g);

if(c){f.addRule(g,j,qx.bom.element.Cursor.compile(c).replace(n,q)+p);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(x,this._onNativeContextMenu,this,true);
}else{this.addListener(x,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(v,{"mshtml":function(h,i){if(i===false){qx.bom.Event.removeNativeListener(document,w,qx.lang.Function.returnFalse);
}
if(h===false){qx.bom.Event.addNativeListener(document,w,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__jk=null;
},defer:function(A,B){qx.ui.core.MChildrenHandling.remap(B);
}});
})();
(function(){var r="resize",q="position",p="0px",o="webkit",n="paddingLeft",m="$$widget",l="qx.ui.root.Application",k="hidden",j="qx.client",i="div",f="paddingTop",h="100%",g="absolute";
qx.Class.define(l,{extend:qx.ui.root.Abstract,construct:function(s){this.__jl=qx.dom.Node.getWindow(s);
this.__jm=s;
arguments.callee.base.call(this);
qx.event.Registration.addListener(this.__jl,r,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__jl:null,__jm:null,_createContainerElement:function(){var w=this.__jm;

if(qx.core.Variant.isSet(j,o)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=k;
A.padding=A.margin=x.padding=x.margin=p;
A.width=A.height=x.width=x.height=h;
var z=w.createElement(i);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(q,g);
y.setAttribute(m,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var a=qx.bom.Viewport.getWidth(this.__jl);
var b=qx.bom.Viewport.getHeight(this.__jl);
return {minWidth:a,width:a,maxWidth:a,minHeight:b,height:b,maxHeight:b};
},_applyPadding:function(c,d,name){if(c&&(name==f||name==n)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,c,d,name);
},_applyDecorator:function(t,u){arguments.callee.base.call(this,t,u);

if(!t){return;
}var v=this.getDecoratorElement().getInsets();

if(v.left||v.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__jl=this.__jm=null;
}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="This method is not needed anymore.",f="resize",d="keyup",c="keypress",b="backgroundColor",a="_applyOpacity",y="Use 'getBlockerElement' instead.",x="__jv",w="opacity",v="interval",u="__jq",t="Tab",s="Color",r="qx.ui.root.Page",q="__js",p="Use 'getContentBlockerElement' instead.",n="Number",o="qx.ui.core.Blocker",m="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(C){arguments.callee.base.call(this);
this._widget=C;
this._isPageRoot=(qx.Class.isDefined(r)&&C instanceof qx.ui.root.Page);

if(this._isPageRoot){C.addListener(f,this.__jw,this);
}this.__jn=[];
this.__jo=[];
this.__jp=[];
},properties:{color:{check:s,init:null,nullable:true,apply:m,themeable:true},opacity:{check:n,init:1,apply:a,themeable:true}},members:{__jq:null,__jr:0,__js:null,__jp:null,__jn:null,__jo:null,__jt:null,__ju:0,__jv:null,_isPageRoot:false,_widget:null,__jw:function(e){var M=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:M.width,height:M.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:M.width,height:M.height});
}},_applyColor:function(z,A){var B=qx.theme.manager.Color.getInstance().resolve(z);
this.__jx(b,B);
},_applyOpacity:function(T,U){this.__jx(w,T);
},__jx:function(H,I){var J=[];
this.__jq&&J.push(this.__jq);
this.__js&&J.push(this.__js);

for(var i=0;i<J.length;i++){J[i].setStyle(H,I);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
this.__ju+=1;

if(this.__ju==1){this.__jt=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
this.__ju-=1;

if(this.__ju==0){this._widget.setAnonymous(this.__jt);
}},_backupActiveWidget:function(){var K=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__jn.push(K.getActive());
this.__jo.push(K.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var P=this.__jn.length;

if(P>0){var O=this.__jn[P-1];

if(O){qx.bom.Element.activate(O);
}this.__jn.pop();
}var N=this.__jo.length;

if(N>0){var O=this.__jo[N-1];

if(O){qx.bom.Element.focus(this.__jo[N-1]);
}this.__jo.pop();
}},__jy:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__jq){this.__jq=this.__jy();
this.__jq.setStyle(l,15);
this._widget.getContainerElement().add(this.__jq);
this.__jq.exclude();
}return this.__jq;
},block:function(){this.__jr++;

if(this.__jr<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(h,this.__jD,this);
V.addListener(c,this.__jC,this);
V.addListener(j,this.__jC,this);
V.addListener(d,this.__jC,this);
}},isBlocked:function(){return this.__jr>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__jr--;

if(this.__jr<1){this.__jz();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__jr=0;
this.__jz();
},__jz:function(){this._restoreActiveWidget();
var S=this.getBlockerElement();
S.removeListener(h,this.__jD,this);
S.removeListener(c,this.__jC,this);
S.removeListener(j,this.__jC,this);
S.removeListener(d,this.__jC,this);
S.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__js){this.__js=this.__jy();
this._widget.getContentElement().add(this.__js);
this.__js.exclude();
}return this.__js;
},blockContent:function(Q){var R=this.getContentBlockerElement();
R.setStyle(l,Q);
this.__jp.push(Q);

if(this.__jp.length<2){R.include();

if(this._isPageRoot){if(!this.__jv){this.__jv=new qx.event.Timer(300);
this.__jv.addListener(v,this.__jB,this);
}this.__jv.start();
this.__jB();
}}},isContentBlocked:function(){return this.__jp.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jp.pop();
var D=this.__jp[this.__jp.length-1];
var E=this.getContentBlockerElement();
E.setStyle(l,D);

if(this.__jp.length<1){this.__jA();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__jp=[];
var L=this.getContentBlockerElement();
L.setStyle(l,null);
this.__jA();
},__jA:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__jv.stop();
}},__jB:function(){var F=this._widget.getContainerElement().getDomElement();
var G=qx.dom.Node.getDocument(F);
this.getContentBlockerElement().setStyles({height:G.documentElement.scrollHeight+k,width:G.documentElement.scrollWidth+k});
},__jC:function(e){if(e.getKeyIdentifier()==t){e.stop();
}},__jD:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(f,this.__jw,this);
}this._disposeObjects(q,u,x);
this.__jt=this.__jn=this.__jo=this._widget=this.__jp=null;
}});
})();
(function(){var x="cursor",w="100%",v="dblclick",u="mshtml",t="mouseup",s="mousedown",r="disappear",q="appear",p="contextmenu",o="mousewheel",h=")",n="mouseover",k="mouseout",f="qx.html.Blocker",d="click",j="repeat",i="mousemove",l="url(",c="qx.client",m="qx/static/blank.gif",g="absolute";
qx.Class.define(f,{extend:qx.html.Element,construct:function(a,b){arguments.callee.base.call(this);
var a=a?qx.theme.manager.Color.getInstance().resolve(a):null;
this.setStyles({position:g,width:w,height:w,opacity:b||0,backgroundColor:a});
this.addListener(s,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
this.addListener(k,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
if(qx.core.Variant.isSet(c,u)){this.setStyles({backgroundImage:l+qx.util.ResourceManager.getInstance().toUri(m)+h,backgroundRepeat:j});
}this.addListener(q,this.__jE,this);
this.addListener(r,this.__jE,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__jE:function(){var y=this.getStyle(x);
this.setStyle(x,null,true);
this.setStyle(x,y,true);
}}});
})();
(function(){var N="keypress",M="focusout",L="__jF",K="activate",J="Tab",I="singleton",H="deactivate",G="focusin",F="qx.ui.core.FocusHandler";
qx.Class.define(F,{extend:qx.core.Object,type:I,construct:function(){arguments.callee.base.call(this);
this.__jF={};
},members:{__jF:null,__jG:null,__jH:null,__jI:null,connectTo:function(O){O.addListener(N,this.__jJ,this);
O.addListener(G,this._onFocusIn,this,true);
O.addListener(M,this._onFocusOut,this,true);
O.addListener(K,this._onActivate,this,true);
O.addListener(H,this._onDeactivate,this,true);
},addRoot:function(P){this.__jF[P.$$hash]=P;
},removeRoot:function(a){delete this.__jF[a.$$hash];
},getActiveWidget:function(){return this.__jG;
},isActive:function(V){return this.__jG==V;
},getFocusedWidget:function(){return this.__jH;
},isFocused:function(Y){return this.__jH==Y;
},isFocusRoot:function(p){return !!this.__jF[p.$$hash];
},_onActivate:function(e){var X=e.getTarget();
this.__jG=X;
var W=this.__jK(X);

if(W!=this.__jI){this.__jI=W;
}},_onDeactivate:function(e){var be=e.getTarget();

if(this.__jG==be){this.__jG=null;
}},_onFocusIn:function(e){var bf=e.getTarget();

if(bf!=this.__jH){this.__jH=bf;
bf.visualizeFocus();
}},_onFocusOut:function(e){var bg=e.getTarget();

if(bg==this.__jH){this.__jH=null;
bg.visualizeBlur();
}},__jJ:function(e){if(e.getKeyIdentifier()!=J){return;
}
if(!this.__jI){return;
}e.stopPropagation();
e.preventDefault();
var T=this.__jH;

if(!e.isShiftPressed()){var U=T?this.__jO(T):this.__jM();
}else{var U=T?this.__jP(T):this.__jN();
}if(U){U.tabFocus();
}},__jK:function(bh){var bi=this.__jF;

while(bh){if(bi[bh.$$hash]){return bh;
}bh=bh.getLayoutParent();
}return null;
},__jL:function(b,c){if(b===c){return 0;
}var f=b.getTabIndex()||0;
var d=c.getTabIndex()||0;

if(f!=d){return f-d;
}var m=b.getContainerElement().getDomElement();
var k=c.getContainerElement().getDomElement();
var j=qx.bom.element.Location;
var h=j.get(m);
var g=j.get(k);
if(h.top!=g.top){return h.top-g.top;
}if(h.left!=g.left){return h.left-g.left;
}var n=b.getZIndex();
var o=c.getZIndex();

if(n!=o){return n-o;
}return 0;
},__jM:function(){return this.__jS(this.__jI,null);
},__jN:function(){return this.__jT(this.__jI,null);
},__jO:function(ba){var bb=this.__jI;

if(bb==ba){return this.__jM();
}
while(ba&&ba.getAnonymous()){ba=ba.getLayoutParent();
}
if(ba==null){return [];
}var bc=[];
this.__jQ(bb,ba,bc);
bc.sort(this.__jL);
var bd=bc.length;
return bd>0?bc[0]:this.__jM();
},__jP:function(B){var C=this.__jI;

if(C==B){return this.__jN();
}
while(B&&B.getAnonymous()){B=B.getLayoutParent();
}
if(B==null){return [];
}var D=[];
this.__jR(C,B,D);
D.sort(this.__jL);
var E=D.length;
return E>0?D[E-1]:this.__jN();
},__jQ:function(parent,q,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()&&this.__jL(q,t)<0){r.push(t);
}this.__jQ(t,q,r);
}}},__jR:function(parent,u,v){var w=parent.getLayoutChildren();
var x;

for(var i=0,l=w.length;i<l;i++){x=w[i];
if(!(x instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(x)&&x.isEnabled()&&x.isVisible()){if(x.isTabable()&&this.__jL(u,x)>0){v.push(x);
}this.__jR(x,u,v);
}}},__jS:function(parent,Q){var R=parent.getLayoutChildren();
var S;

for(var i=0,l=R.length;i<l;i++){S=R[i];
if(!(S instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(S)&&S.isEnabled()&&S.isVisible()){if(S.isTabable()){if(Q==null||this.__jL(S,Q)<0){Q=S;
}}Q=this.__jS(S,Q);
}}return Q;
},__jT:function(parent,y){var z=parent.getLayoutChildren();
var A;

for(var i=0,l=z.length;i<l;i++){A=z[i];
if(!(A instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(A)&&A.isEnabled()&&A.isVisible()){if(A.isTabable()){if(y==null||this.__jL(A,y)>0){y=A;
}}y=this.__jT(A,y);
}}return y;
}},destruct:function(){this._disposeMap(L);
this.__jH=this.__jG=this.__jI=null;
}});
})();
(function(){var C="qx.client",B="head",A="text/css",z="stylesheet",y="}",x='@import "',w="{",v='";',u="qx.bom.Stylesheet",t="link",s="style";
qx.Class.define(u,{statics:{includeFile:function(a,b){if(!b){b=document;
}var c=b.createElement(t);
c.type=A;
c.rel=z;
c.href=qx.util.ResourceManager.getInstance().toUri(a);
var d=b.getElementsByTagName(B)[0];
d.appendChild(c);
},createElement:qx.core.Variant.select(C,{"mshtml":function(bf){var bg=document.createStyleSheet();

if(bf){bg.cssText=bf;
}return bg;
},"default":function(D){var E=document.createElement(s);
E.type=A;

if(D){E.appendChild(document.createTextNode(D));
}document.getElementsByTagName(B)[0].appendChild(E);
return E.sheet;
}}),addRule:qx.core.Variant.select(C,{"mshtml":function(l,m,n){l.addRule(m,n);
},"default":function(P,Q,R){P.insertRule(Q+w+R+y,P.cssRules.length);
}}),removeRule:qx.core.Variant.select(C,{"mshtml":function(L,M){var N=L.rules;
var O=N.length;

for(var i=O-1;i>=0;--i){if(N[i].selectorText==M){L.removeRule(i);
}}},"default":function(g,h){var j=g.cssRules;
var k=j.length;

for(var i=k-1;i>=0;--i){if(j[i].selectorText==h){g.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(C,{"mshtml":function(S){var T=S.rules;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeRule(i);
}},"default":function(I){var J=I.cssRules;
var K=J.length;

for(var i=K-1;i>=0;i--){I.deleteRule(i);
}}}),addImport:qx.core.Variant.select(C,{"mshtml":function(bd,be){bd.addImport(be);
},"default":function(e,f){e.insertRule(x+f+v,e.cssRules.length);
}}),removeImport:qx.core.Variant.select(C,{"mshtml":function(Y,ba){var bb=Y.imports;
var bc=bb.length;

for(var i=bc-1;i>=0;i--){if(bb[i].href==ba){Y.removeImport(i);
}}},"default":function(o,p){var q=o.cssRules;
var r=q.length;

for(var i=r-1;i>=0;i--){if(q[i].href==p){o.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(C,{"mshtml":function(V){var W=V.imports;
var X=W.length;

for(var i=X-1;i>=0;i--){V.removeImport(i);
}},"default":function(F){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){if(G[i].type==G[i].IMPORT_RULE){F.deleteRule(i);
}}}})}});
})();
(function(){var C="number",B="': ",A="width",z="qx.ui.layout.Canvas",y="qx.debug",x="height",w="Bad format of layout property '",v="' is not supported by the Canvas layout!",u=". The value must be either an integer or an percent string.",t="The property '";
qx.Class.define(z,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(y,{"on":function(D,name,E){var F={top:1,left:1,bottom:1,right:1,width:1,height:1,edge:1};
this.assert(F[name]==1,t+name+v);

if(name==A||name==x){this.assertMatch(E,qx.ui.layout.Util.PERCENT_VALUE);
}else{if(typeof E===C){this.assertInteger(E);
}else if(qx.lang.Type.isString(E)){this.assertMatch(E,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.fail(w+name+B+E+u);
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
}},_computeSizeHint:function(){var r=0,q=0;
var o=0,m=0;
var j,h;
var g,e;
var a=this._getLayoutChildren();
var d,p,c;
var s,top,b,f;

for(var i=0,l=a.length;i<l;i++){d=a[i];
p=d.getLayoutProperties();
c=d.getSizeHint();
var n=d.getMarginLeft()+d.getMarginRight();
var k=d.getMarginTop()+d.getMarginBottom();
j=c.width+n;
h=c.minWidth+n;
s=p.left!=null?p.left:p.edge;

if(s&&typeof s===C){j+=s;
h+=s;
}b=p.right!=null?p.right:p.edge;

if(b&&typeof b===C){j+=b;
h+=b;
}r=Math.max(r,j);
q=Math.max(q,h);
g=c.height+k;
e=c.minHeight+k;
top=p.top!=null?p.top:p.edge;

if(top&&typeof top===C){g+=top;
e+=top;
}f=p.bottom!=null?p.bottom:p.edge;

if(f&&typeof f===C){g+=f;
e+=f;
}o=Math.max(o,g);
m=Math.max(m,e);
}return {width:r,minWidth:q,height:o,minHeight:m};
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){arguments.callee.base.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){arguments.callee.base.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var n="'>",m="[",l=", ",k="</span>",h="<span class='type-",g="</span> ",f="}",e="",d="]",c="{",K="map",J="<span class='object'>",I="]:",H="&gt;",G="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",u=":",v="qx.log.appender.Util",s="&amp;",t="&#39;",q="DIV",r="<span>",o="&quot;",p="<span class='type-key'>",w="</span>:<span class='type-",x="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(v,{statics:{toHtml:function(ba){var bk=[];
var bh,bj,bc,be;
bk.push(B,this.formatOffset(ba.offset,6),g);

if(ba.object){var bb=ba.win.qx.core.ObjectRegistry.fromHashCode(ba.object);

if(bb){bk.push(G+bb.$$hash+n,bb.classname,m,bb.$$hash,y);
}}else if(ba.clazz){bk.push(J+ba.clazz.classname,x);
}var bd=ba.items;

for(var i=0,bi=bd.length;i<bi;i++){bh=bd[i];
bj=bh.text;

if(bj instanceof Array){var be=[];

for(var j=0,bg=bj.length;j<bg;j++){bc=bj[j];

if(typeof bc===F){be.push(r+this.escapeHTML(bc)+k);
}else if(bc.key){be.push(p+bc.key+w+bc.type+n+this.escapeHTML(bc.text)+k);
}else{be.push(h+bc.type+n+this.escapeHTML(bc.text)+k);
}}bk.push(h+bh.type+n);

if(bh.type===K){bk.push(c,be.join(l),f);
}else{bk.push(m,be.join(l),d);
}bk.push(k);
}else{bk.push(h+bh.type+n+this.escapeHTML(bj)+g);
}}var bf=document.createElement(q);
bf.innerHTML=bk.join(e);
bf.className=E+ba.level;
return bf;
},formatOffset:function(M,length){var P=M.toString();
var N=(length||6)-P.length;
var O=e;

for(var i=0;i<N;i++){O+=D;
}return O+P;
},escapeHTML:function(bl){return String(bl).replace(/[<>&"']/g,this.__jU);
},__jU:function(a){var b={"<":C,">":H,"&":s,"'":t,'"':o};
return b[a]||A;
},toText:function(L){return this.toTextArray(L).join(z);
},toTextArray:function(Q){var Y=[];
Y.push(this.formatOffset(Q.offset,6));

if(Q.object){var R=Q.win.qx.core.ObjectRegistry.fromHashCode(Q.object);

if(R){Y.push(R.classname+m+R.$$hash+I);
}}else if(Q.clazz){Y.push(Q.clazz.classname+u);
}var S=Q.items;
var V,X;

for(var i=0,W=S.length;i<W;i++){V=S[i];
X=V.text;

if(X instanceof Array){var T=[];

for(var j=0,U=X.length;j<U;j++){T.push(X[j].text);
}
if(V.type===K){Y.push(c,T.join(l),f);
}else{Y.push(m,T.join(l),d);
}}else{Y.push(X);
}}return Y;
}}});
})();
(function(){var k="debug",j="log",i="qx.log.appender.Native",h="qx.client";
qx.Class.define(i,{statics:{process:qx.core.Variant.select(h,{"gecko":function(a){if(window.console&&console.firebug){console[a.level].call(console,qx.log.appender.Util.toText(a));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==k){g=j;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(b){if(window.console){var d=b.level;

if(d==k){d=j;
}var c=qx.log.appender.Util.toText(b);
console[d](c);
}},"opera":function(l){}})},defer:function(m){qx.log.Logger.register(m);
}});
})();
(function(){var s="",r='</div>',q="Up",p="none",o="keypress",n='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',m="Enter",l="px",k='.qxconsole .messages .user-result{background:white}',j='.qxconsole .messages .level-error{background:#FFE2D5}',be="div",bd="user-command",bc='<div class="command">',bb='.qxconsole .command input:focus{outline:none;}',ba='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Y='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',X='.qxconsole .messages div{padding:0px 4px;}',W='.qxconsole .messages .level-debug{background:white}',V='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',U="DIV",z='.qxconsole .messages .level-user{background:#E3EFE9}',A='<div class="qxconsole">',x="D",y='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',v='.qxconsole .messages .type-string{color:black;font-weight:normal;}',w='.qxconsole .control a{text-decoration:none;color:black;}',t='<div class="messages">',u='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',B='<input type="text"/>',C="clear",J='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',H='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',N='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',L='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',Q='.qxconsole .messages .user-command{color:blue}',P="F7",E="qx.log.appender.Console",T='.qxconsole .messages .level-info{background:#DEEDFA}',S="block",R='.qxconsole .messages .level-warn{background:#FFF7D5}',D='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',F='.qxconsole .messages .user-error{background:#FFE2D5}',G='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',I='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',K=">>> ",M="Down",O='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(E,{statics:{init:function(){var a=[N,G,w,n,X,Q,k,F,W,T,R,j,z,v,O,u,H,y,ba,V,Y,D,L,J,bb];
qx.bom.Stylesheet.createElement(a.join(s));
var c=[A,I,t,r,bc,B,r,r];
var d=document.createElement(U);
d.innerHTML=c.join(s);
var b=d.firstChild;
document.body.appendChild(d.firstChild);
this.__jV=b;
this.__jW=b.childNodes[1];
this.__jX=b.childNodes[2].firstChild;
this.__kd();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,o,this.__ke,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__jW.innerHTML=s;
},process:function(bg){this.__jW.appendChild(qx.log.appender.Util.toHtml(bg));
this.__jY();
},__jY:function(){this.__jW.scrollTop=this.__jW.scrollHeight;
},__ka:true,toggle:function(){if(!this.__jV){this.init();
}else if(this.__jV.style.display==p){this.show();
}else{this.__jV.style.display=p;
}},show:function(){if(!this.__jV){this.init();
}else{this.__jV.style.display=S;
this.__jW.scrollTop=this.__jW.scrollHeight;
}},__kb:[],execute:function(){var i=this.__jX.value;

if(i==s){return;
}
if(i==C){return this.clear();
}var g=document.createElement(be);
g.innerHTML=qx.log.appender.Util.escapeHTML(K+i);
g.className=bd;
this.__kb.push(i);
this.__kc=this.__kb.length;
this.__jW.appendChild(g);
this.__jY();

try{var h=window.eval(i);
}catch(bf){qx.log.Logger.error(bf);
}
if(h!==undefined){qx.log.Logger.debug(h);
}},__kd:function(e){this.__jW.style.height=(this.__jV.clientHeight-this.__jV.firstChild.offsetHeight-this.__jV.lastChild.offsetHeight)+l;
},__ke:function(e){var bi=e.getKeyIdentifier();
if((bi==P)||(bi==x&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__jV){return;
}if(!qx.dom.Hierarchy.contains(this.__jV,e.getTarget())){return;
}if(bi==m&&this.__jX.value!=s){this.execute();
this.__jX.value=s;
}if(bi==q||bi==M){this.__kc+=bi==q?-1:1;
this.__kc=Math.min(Math.max(0,this.__kc),this.__kb.length);
var bh=this.__kb[this.__kc];
this.__jX.value=bh||s;
this.__jX.select();
}}},defer:function(f){qx.event.Registration.addListener(document.documentElement,o,f.__ke,f);
}});
})();
(function(){var dG="execute",dF="/",dE="",dD="value",dC="auto",dB="current",dA=" ",dz="excluded",dy="visible",dx="category",cG='modelLink',cF="modelLink",cE="changeSelection",cD="completed",cC="tags",cB="failed",cA="white",cz="html",cy="~",cx="qooxdoo ",dN="all",dO=".",dL='\n',dM="monospace",dJ="div",dK="right",dH="qx.version",dI="id",dP="node",dQ=".src.js",df="_blank",de=" Demo Browser ",dh=".html",dg="<script",dj="qx.theme.Modern",di="horizontal",dl="javascript",dk="_",dd='</span>',dc="main",bf="qx_srcview",bg="js",bh="\n",bi="outputviews.sourcepage.html.page",bj="widget",bk="outputviews.sourcepage.js.page",bl="?",bm="log",bn="separator-vertical",bo="request",ef="src",ee="icon/22/actions/edit-clear.png",ed="Demos",ec='</div>',ej="^.*",ei="filled",eh="Clear log",eg="changeValue",el="dblclick",ek="icon/22/actions/media-playback-start.png",bV="<div class='script'>The sample JS source will be displayed here.</div>",bW="demobrowser.DemoBrowser",bT="HTML Code",bU="load",ca='</span>=<span class="string">',cb="Run previous demo",bX="_history",bY='_cmdNamespacePollution',bR="icon/22/apps/utilities-color-chooser.png",bS="Ctrl+N",bE="Previous",bD='.html',bG="Run",bF='<span class="html-tag-name">',bA="<div class='script'>The sample source will be displayed here.</div>",bz="Open demo in the playground",bC="tree1",bB="f1",by="Debug",bx="Display log file",cg="script/demobrowser.demo",ch="icon/22/actions/media-playback-stop.png",ci="</div></pre>",cj="icon/22/apps/utilities-log-viewer.png",cc="Ctrl+O",cd="Log File",ce="Stop playback after current demo",cf="qx.theme.Classic",ck='"',cl='<div class="script">',bO="logappender",bN="Choose theme",bM="icon/22/apps/internet-web-browser.png",bL="#",bK="f2",bJ="<pre class='script'>",bI="JS Code",bH="icon/22/mimetypes/executable.png",bQ="ig",bP="middle",cm="noPlayground",cn="Stop",co='"}',cp="animation",cq="icon/22/actions/edit-redo.png",cr='_cmdDisposeSample',cs="toolbar",ct="icon/22/apps/office-spreadsheet.png",cu="mshtml",cv="To Playground",cK="/demo/",cJ="demo/welcome.html",cI='_cmdSampleInOwnWindow',cH=".*",cO="background-splitpane",cN='demo/',cM="</pre>",cL="Debugging options",cQ="Ctrl+P",cP="Filter...",cX="app-header",cY="/playground/",cV="<pre ><div class='script'>",cW="Dispose Demo",cT='{"code": ',cU="Classic Theme",cR="Global Namespace Pollution",cS="icon/16/actions/edit-find.png",da="treeview.flat",db="Own Window",dq="Display HTML source",dp='_cmdObjectSummary',ds='/',dr='&gt;',du='_cmdNextSample',dt="Run next demo",dw='_cmdPrevSample',dv=" Start",dn="\"",dm="background-medium",dX="Ctrl+Left",dY="demo-tree",ea="Display JavaScript source",eb='_cmdRunSample',dT="Next",dU="qx.client",dV="F5",dW="http://demo.qooxdoo.org/",dR="Modern Theme",dS="Open demo in new window",be="interval",bd="string",bc="runbutton",bb="8px",ba="Ctrl+Right",Y="?qx.theme=",X="textfield",W="Ctrl+D",V="mainsplit",U="icon/22/actions/go-previous.png",br="Object Summary",bs="Demo Browser",bp="icon/22/actions/application-exit.png",bq=' <span class="keyword">',bv="Run the selected demo(s)",bw="left",bt="icon/22/actions/go-next.png",bu="Theme";
qx.Class.define(bW,{extend:qx.ui.container.Composite,construct:function(){arguments.callee.base.call(this);
var gh=new qx.ui.layout.VBox;
gh.setSeparator(bn);
this.setLayout(gh);
this.add(this.__kI());
this.widgets={};
this.tests={};
this.__kf=dj;
this.__ko();
this.add(this.__kv());
var gl=new qx.ui.splitpane.Pane(di);
this.mainsplit=gl;
var gi=new qx.ui.splitpane.Pane(di);
gi.setDecorator(null);
this.infosplit=gi;
this.add(gl,{flex:1});
var gm=new qx.ui.container.Composite();
gm.setLayout(new qx.ui.layout.VBox(3));
gm.setBackgroundColor(cO);
gl.add(gm,0);
var gg=new qx.ui.container.Composite();
gg.setLayout(new qx.ui.layout.HBox(3));
gg.setAppearance(X);
gm.add(gg);
var go=new qx.ui.basic.Image(cS);
gg.add(go);
this.__kg=new qx.ui.form.TextField();
this.__kg.setLiveUpdate(true);
this.__kg.setAppearance(bj);
this.__kg.setPlaceholder(cP);
this.__kg.addListener(eg,function(e){this.filter(e.getData());
},this);
gg.add(this.__kg,{flex:1});
this.__kh=new qx.ui.basic.Label(dE);
this.__kh.setAppearance(bj);
this.__kh.setWidth(80);
this.__kh.setTextAlign(dK);
gg.add(this.__kh);
gl.add(gi,1);
this.__ki=this.__kA();
gm.add(this.__ki,{flex:1});
var gn=this.__kw();
gi.add(gn,2);
var ge=this.__ky();
var gf=this.__kz();
var gj=this.__kx();
var gk=new qx.ui.container.Stack;
gk.setDecorator(dc);
gk.add(ge);
gk.add(gf);
gk.add(gj);
this.viewGroup.addListener(cE,function(e){var S=e.getData()[0];
var T=S!=null?S.getUserData(dD):dE;

switch(T){case cz:this.setSelection([ge]);
gk.show();
break;
case bg:this.setSelection([gf]);
gk.show();
break;
case bm:this.setSelection([gj]);
gk.show();
break;
default:this.resetSelection();
gk.exclude();
}},gk);
gi.add(gk,1);
gk.resetSelection();
gk.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(bo,function(e){var en=e.getData().replace(cy,dF);

if(this._currentSample!=en){this.setCurrentSample(en);
}},this);
this.__kj=new qx.event.Timer(250);
this.__kj.addListener(be,this.__kC,this);
this.__kj.start();
},properties:{playDemos:{check:[dN,dx,dB],init:dB}},members:{__kk:null,__kf:null,__kj:null,__kl:null,__ki:null,__kh:null,__kg:null,__km:null,__kn:null,defaultUrl:cJ,playgroundUrl:dW+qx.core.Setting.get(dH)+cY,__ko:function(){this._cmdObjectSummary=new qx.ui.core.Command(cc);
this._cmdObjectSummary.addListener(dG,this.__kp,this);
this._cmdRunSample=new qx.ui.core.Command(dV);
this._cmdRunSample.addListener(dG,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(dX);
this._cmdPrevSample.addListener(dG,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(ba);
this._cmdNextSample.addListener(dG,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(bS);
this._cmdSampleInOwnWindow.addListener(dG,this.__kq,this);
this._cmdDisposeSample=new qx.ui.core.Command(W);
this._cmdDisposeSample.addListener(dG,this.__kt,this);
this._cmdNamespacePollution=new qx.ui.core.Command(cQ);
this._cmdNamespacePollution.addListener(dG,this.__ku,this);
},__kp:function(){var E=this.__kk.getWindow();

if(E&&E.qx){alert(E.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__kq:function(){var eB=this.__kk.getWindow().location.href;
window.open(eB,df);
},__kr:function(eo){var ep=!!eo;
var eq=this.__ki.getSelection()[0].getUserData(cC);

if(eq){ep=ep&&!qx.lang.Array.contains(eq,cm);
}this.__km.setEnabled(ep);
this.__kn=eo;
},__ks:function(){if(this.__kn){var gw=this.__kn;
var gv=cT+ck+encodeURIComponent(gw)+co;
var gu=this.playgroundUrl+bL+encodeURIComponent(gv);
window.open(gu,df);
}else{alert(this.tr("Could not open the Playground."));
}},__kt:function(e){var ew=this.__kk.getWindow();

if(ew&&ew.qx){ew.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__ku:function(e){var F=this.__kk.getWindow();

if(F&&F.qx){alert(F.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__kv:function(){var eI=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
eI.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(bG),ek);
this._runbutton.addListener(dG,this.runSample,this);
this._runbutton.setToolTipText(bv);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(cn),ch);
this._stopbutton.addListener(dG,this.stopSample,this);
this._stopbutton.setToolTipText(ce);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(dz);
var eV=new qx.ui.toolbar.Button(this.tr(bE),U);
eV.addListener(dG,this.playPrev,this);
eV.setToolTipText(cb);
this._navPart.add(eV);
var eY=new qx.ui.toolbar.Button(this.tr(dT),bt);
eY.addListener(dG,this.playNext,this);
eY.setToolTipText(dt);
this._navPart.add(eY);
var eR=new qx.ui.toolbar.Button(this.tr(db),cq);
eR.addListener(dG,this.__kq,this);
eR.setToolTipText(dS);
this._navPart.add(eR);
var eH=new qx.ui.toolbar.Button(this.tr(cv),bp);
eH.addListener(dG,this.__ks,this);
eH.setToolTipText(bz);
eH.setEnabled(false);
if(qx.core.Variant.isSet(dU,cu)){eH.exclude();
}this.__km=eH;
this._navPart.add(eH);
var eJ=new qx.ui.toolbar.Part;
eI.add(eJ);
var eU=new qx.ui.menu.Menu;
var eP=new qx.ui.menu.RadioButton(dR);
var eN=new qx.ui.menu.RadioButton(cU);
eP.setUserData(dD,dj);
eP.setValue(true);
eN.setUserData(dD,cf);
var eW=new qx.ui.form.RadioGroup(eP,eN);
eW.addListener(cE,this.__kH,this);
eU.add(eP);
eU.add(eN);
var eF=new qx.ui.toolbar.MenuButton(this.tr(bu),bR,eU);
eF.setToolTipText(bN);
eJ.add(eF);
var eL=new qx.ui.menu.Menu;
var eM=new qx.ui.menu.Button(this.tr(br));
eM.setCommand(this._cmdObjectSummary);
eL.add(eM);
var eX=new qx.ui.menu.Button(this.tr(cR));
eX.setCommand(this._cmdNamespacePollution);
eL.add(eX);
var eS=new qx.ui.menu.Button(this.tr(cW));
eS.setCommand(this._cmdDisposeSample);
eL.add(eS);
var eT=new qx.ui.toolbar.MenuButton(this.tr(by),ct,eL);
eT.setToolTipText(cL);
eJ.add(eT);
var eG=new qx.ui.toolbar.Part;
eI.addSpacer();
eI.add(eG);
var fa=new qx.ui.toolbar.RadioButton(bT,bM);
fa.setToolTipText(dq);
var eQ=new qx.ui.toolbar.RadioButton(bI,bH);
eQ.setToolTipText(ea);
var eO=new qx.ui.toolbar.RadioButton(cd,cj);
eO.setToolTipText(bx);
fa.setUserData(dD,cz);
eQ.setUserData(dD,bg);
eO.setUserData(dD,bm);
eG.add(fa);
eG.add(eQ);
eG.add(eO);
var eK=this.viewGroup=new qx.ui.form.RadioGroup;
eK.setAllowEmptySelection(true);
eK.add(fa,eQ,eO);
return eI;
},__kw:function(){var gx=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
gx.addListener(bU,this.__kB,this);
this.__kk=gx;
return gx;
},__kx:function(){var P=new qx.ui.layout.VBox(0,bP,dc);
P.setAlignX(dK);
var R=new qx.ui.container.Composite(P);
var N=new qx.ui.decoration.Background().set({backgroundColor:dm});
R.setDecorator(N);
var Q=new qx.ui.form.Button(this.tr(eh),ee);
Q.setAllowGrowX(false);
Q.setMargin(5);
Q.addListener(dG,function(){this.logappender.clear();
},this);
R.add(Q,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(dC,dC);
this.f2.setFont(dM);
this.f2.setBackgroundColor(cA);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var O=document.createElement(dJ);
this.logelem=document.createElement(dJ);
this.logelem.style.padding=bb;
this.logappender.setElement(this.logelem);
O.appendChild(this.logelem);
this.f2.getContentElement().useElement(O);
R.add(this.f2,{flex:1});
return R;
},__ky:function(){var G=new qx.ui.embed.Html(bA);
G.setOverflow(dC,dC);
G.setFont(dM);
G.setBackgroundColor(cA);
this.widgets[bi]=G;
G.getContentElement().setAttribute(dI,bf);
return G;
},__kz:function(){var fz=new qx.ui.embed.Html(bV);
fz.setOverflow(dC,dC);
fz.setFont(dM);
fz.setBackgroundColor(cA);
this.widgets[bk]=fz;
fz.getContentElement().setAttribute(dI,bf);
return fz;
},__kA:function(){var fj=new qx.ui.tree.Tree();
var fi=new qx.ui.tree.TreeFolder(ed);
fj.setAppearance(dY);
fj.setRoot(fi);
fj.setSelection([fi]);
this.tree=this.widgets[da]=fj;
fj.addListener(cE,this.treeGetSelection,this);
fj.addListener(el,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return fj;
},treeGetSelection:function(e){var fb=this.tree.getSelection()[0];
var fc=fb.getUserData(cF);
this.tests.selected=this.tests.handler.getFullName(fc);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var fQ=this._sampleToTreeNodeMap;
var fW=null;
var ga=null;
var fY=/\?autorun=true/.test(location.href);
var fV=this._history.getState();
var fT=fV.match(/([^~]+)~/);

if(fT){fW=fT[1];
}else{var fR=fV.match(/([^~][\w]*)/);

if(fR){fW=fR[1];

if(fY){this.setPlayDemos(dx);
}}else{fW=cp;

if(fY){this.setPlayDemos(dN);
}}}function fX(fd,fe){var fh=fe.getChildren();
var t;

for(var i=0;i<fh.length;i++){var fg=fh[i];

if(fg.hasChildren()){t=new qx.ui.tree.TreeFolder(fS.polish(fg.label));
t.setUserData(ei,false);
t.setUserData(dP,fg);
fX(t,t.getUserData(dP));

if(fg.label==fW){ga=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(fS.polish(fg.label));
t.setUserData(cC,fg.tags);
var ff=fg.pwd().slice(1).join(dF)+dF+fg.label;
fQ[ff]=t;
}fd.add(t);
t.setUserData(cF,fg);
fg.widgetLinkFull=t;
}}var fU=this.tests.handler.ttree;
var fS=this;
this.tree.setUserData(cF,fU);
this.tree.getRoot().setOpen(true);
fX(this.tree.getRoot(),fU);

if(ga!=null){this.tree.setSelection([ga]);
}},runSample:function(e){if(e&&e.getType()===dG){if(this.tests.selected===dE){this.setPlayDemos(dN);
}else if(this.tests.selected.indexOf(cz)>0){this.setPlayDemos(dB);
}else{this.setPlayDemos(dx);
}}this._runbutton.setVisibility(dz);
this._stopbutton.setVisibility(dy);

if(this.tests.selected!=dE){var eE=this.tests.selected.replace(dO,dF);
this.setCurrentSample(eE);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(dB);
this._stopbutton.setVisibility(dz);
this._runbutton.setVisibility(dy);
},setCurrentSample:function(gp){if(!gp){return;
}
if(!this._sampleToTreeNodeMap){return;
}var gq;
var gr=this._sampleToTreeNodeMap[gp];

if(gr){gr.getTree().setSelection([gr]);
gq=cN+gp+Y+this.__kf;
}else{gq=this.defaultUrl;
}
if(this.__kk.getSource()==gq){this.__kk.reload();
}else{this.__kl=false;
this.__kk.setSource(gq);
}this._currentSample=gp;
this._currentSampleUrl=gq;
},__kB:function(){var d=this.__kk.getWindow();
var f=d.location.pathname+dE;
var p=f.indexOf(bl);

if(p!=-1){f=f.substring(0,p+1);
}var o=this.__kk.getSource();

if(o!=null&&o!=this.defaultUrl){var c=d.location.href;
var l=c.indexOf(cK)+6;
var g=c.indexOf(bl);
g=g==-1?c.length:g;
var h=c.substring(l,g).split(dF);
var n=String.fromCharCode(187);

if(h.length==2){var a=h[0];
a=a.charAt(0).toUpperCase()+a.substring(1);
var k=h[1].replace(dh,dE).replace(dk,dA);
k=k.charAt(0).toUpperCase()+k.substring(1);
var b=cx+n+de+n+dA+a+dA+n+dA+k;
}else{var b=cx+n+de+n+dv;
}document.title=b;
}if(this.getPlayDemos()!=dB){if(!k){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(dz);
this._runbutton.setVisibility(dy);
}},__kC:function(e){var fm=this.__kk.getWindow();

if(fm&&fm.qx&&fm.qx.log&&fm.qx.log.appender){if(!this.__kl){this.__kl=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{fm.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace(dF,cy),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__kD(this._currentSampleUrl);
}}}else{this.__kl=false;
}},filter:function(fp){var fx=new RegExp(ej+fp+cH,bQ);
var fv=this.__ki.getRoot().getItems(true,true);
var fw=0;
var fq=0;

for(var i=0;i<fv.length;i++){var fy=fv[i];
var parent=fy.getParent();
var fu=fy.getUserData(cC);
var fr=false;

if(fu!=null){for(var j=0;j<fu.length;j++){fr=!!fu[j].match(fx);

if(fr){break;
}}}
if(fy.getChildren().length==0){fq++;
}
if(fr||!fy.getLabel().search(fx)||!parent.getLabel().search(fx)){if(fy.getChildren().length==0){fw++;
}fy.show();
fy.getParent().setOpen(true);
fy.getParent().show();
}else{fy.exclude();
}}if(fp==dE){var ft=this.__ki.getRoot().getItems(false,true);
var fs=this.__ki.getSelection();
for(var i=0;i<ft.length;i++){if(ft[i]==fs[0]||ft[i]==fs[0].getParent()){continue;
}ft[i].setOpen(false);
}}this.__kh.setValue(fw+dF+fq);
},__kD:function(L){if(typeof (L)!=bd){return;
}var M=new qx.io.remote.Request(L);
M.setTimeout(180000);
M.setProhibitCaching(false);
M.addListener(cD,function(fA){var content=fA.getContent();
if(content){var fD=content.indexOf(dg,content.indexOf(dg)+7);
var fJ=content.indexOf(ef,fD);
var fC=content.indexOf(dn,fJ+5);
var fE=content.substring(fJ+5,fC);
var fH=fE.substring(4,fE.length-3)+dQ;
var u=cg;
var fG=L.split(ds);
var fF=fG[1];
var fI=fG[2];
fI=fI.substr(0,fI.indexOf(bD));
u+=dO+fF+dO+fI+dQ;
fH=u;
var fB=new qx.io.remote.Request(fH);
fB.setTimeout(180000);
fB.setProhibitCaching(false);
fB.addListener(cD,function(eC){var eD=eC.getContent();
this.__kr(eD);

if(eD){this.widgets[bk].setHtml(this.__kE(eD,dl));
}},this);
fB.addListener(cB,function(et){this.error("Couldn't load file: "+L);
},this);
fB.send();
this.widgets[bi].setHtml(this.__kE(content));
}},this);
M.addListener(cB,function(fP){this.error("Couldn't load file: "+L);
},this);
M.send();
},dataLoader:function(fn){var fo=new qx.io.remote.Request(fn);
fo.setTimeout(180000);
fo.setProhibitCaching(false);
fo.addListener(cD,function(er){var content=er.getContent();
var es=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(es);
this.leftReloadTree();
var ev=this._history.getState();

if(ev){this.setCurrentSample(ev.replace(cy,dF));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
fo.addListener(cB,function(eu){this.error("Couldn't load file: "+fn);
},this);
fo.send();
},playPrev:function(e){this.setPlayDemos(dB);
var gt=this.tree.getSelection()[0];

if(gt){if(gt.getUserData(cG).getPrevSibling()){var gs=gt.getUserData(cG).getPrevSibling().widgetLinkFull;

if(gs){this.tree.setSelection([gs]);
this.runSample();
}}}},playNext:function(e){var K=this.tree.getSelection()[0];

if(K){try{var H=K.getUserData(cG).getChildren()[0].widgetLinkFull;
}catch(fk){try{var H=K.getUserData(cG).getNextSibling().widgetLinkFull;
}catch(em){if(this.getPlayDemos()!==dx){try{var J=K.getTree();
var I=J.getNextSiblingOf(K);
I.setOpen(true);
var H=I.getChildren()[0];
}catch(fl){this.debug(fl);
}}}}
if(H){this.tree.setSelection([H]);
this.runSample();
}else{this._stopbutton.setVisibility(dz);
this._runbutton.setVisibility(dy);
}}},__kE:function(q,v){var x=new qx.util.StringBuilder(bJ);
var z=[];
var A=new qx.util.StringBuilder();
var B=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var y=/^\s*<\/script>\s*$/i;
q=q.replace(/\r\n/g,bh).replace(/\r/g,bh);
var z=q.split(dL);
if(v==dl){return cV+qx.dev.Tokenizer.javaScriptToHtml(q)+ci;
}
for(var i=0;i<z.length;i++){if(B.exec(z[i])){x.add(this.__kF(qx.bom.String.escape(A.get()+z[i])));
A.clear();
}else if(y.exec(z[i])){var C=qx.dev.Tokenizer.javaScriptToHtml(A.get());
x.add(cl,C,ec);
A.clear();
A.add(z[i],dL);
}else{A.add(z[i],dL);
}}x.add(this.__kF(qx.bom.String.escape(A.get())),cM);
return x.get();
},__kF:function(ey){var eA=ey;
function ez(gb){var s=new qx.util.StringBuilder(arguments[1],bF,arguments[2],dd);
var gc;
var gd=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){gc=arguments[i];

if(gc==dF){gd=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(gc))!=null){s.add(bq,r[1],ca,r[2].replace(/\s*$/,dE),dd);
}}}s.add((gd?dF:dE));
}s.add(dr);
return s.get();
}eA=eA.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,ez);
return eA;
},polish:function(fK){return fK.replace(dh,dE).replace(dk,dA);
},__kG:function(){var w=this.__kk.getWindow();
var D;

if(w.qx&&w.qx.log&&w.qx.log.Logger){D=w.qx.log.Logger;
D.register(this.logappender);
D.clear();
D.unregister(this.logappender);
}},__kH:function(e){this.__kf=e.getData()[0].getUserData(dD);
this.runSample();
},__kI:function(){var fN=new qx.ui.layout.HBox();
var fL=new qx.ui.container.Composite(fN);
fL.setAppearance(cX);
var fO=new qx.ui.basic.Label(bs);
var fM=new qx.ui.basic.Label(cx+qx.core.Setting.get(dH));
fL.add(fO);
fL.add(new qx.ui.core.Spacer,{flex:1});
fL.add(fM);
return fL;
}},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(V,bC,bw,bc,cs,bB,bK,bX,bO,dp,eb,dw,du,cI,cr,bY);
}});
})();
(function(){var Q="_applyLayoutChange",P="top",O="left",N="height",M="middle",L="Decorator",K="center",J="_applyReversed",I="qx.debug",H="bottom",C="' is not supported by the VBox layout!",G="qx.ui.layout.VBox",F="flex",B="Integer",A="The property '",E="right",D="Boolean";
qx.Class.define(G,{extend:qx.ui.layout.Abstract,construct:function(x,y,z){arguments.callee.base.call(this);

if(x){this.setSpacing(x);
}
if(y){this.setAlignY(y);
}
if(z){this.setSeparator(z);
}},properties:{alignY:{check:[P,M,H],init:P,apply:Q},alignX:{check:[O,K,E],init:O,apply:Q},spacing:{check:B,init:0,apply:Q},separator:{check:L,nullable:true,apply:Q},reversed:{check:D,init:false,apply:J}},members:{__kJ:null,__kK:null,__kL:null,__kM:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__kN:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__kJ&&this.__kJ.length!=length&&this.__kK&&this.__kJ;
var u;
var t=r?this.__kJ:new Array(length);
var v=r?this.__kK:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__kJ=t;
this.__kK=v;
}this.__kL=s;
this.__kM=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(I,{"on":function(R,name,S){this.assert(name===F||name===N,A+name+C);

if(name==N){this.assertMatch(S,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(S);
this.assert(S>=0);
}},"off":null}),renderLayout:function(T,U){if(this._invalidChildrenCache){this.__kN();
}var bc=this.__kM;
var length=bc.length;
var bm=qx.ui.layout.Util;
var bl=this.getSpacing();
var bp=this.getSeparator();

if(bp){var Y=bm.computeVerticalSeparatorGaps(bc,bl,bp);
}else{var Y=bm.computeVerticalGaps(bc,bl,true);
}var i,W,X,bg;
var bh=[];
var bn=Y;

for(i=0;i<length;i+=1){bg=this.__kJ[i];
X=bg!=null?Math.floor((U-Y)*bg):bc[i].getSizeHint().height;
bh.push(X);
bn+=X;
}if(this.__kL&&bn!=U){var be={};
var bk,bo;

for(i=0;i<length;i+=1){bk=this.__kK[i];

if(bk>0){bd=bc[i].getSizeHint();
be[i]={min:bd.minHeight,value:bh[i],max:bd.maxHeight,flex:bk};
}}var ba=bm.computeFlexOffsets(be,U,bn);

for(i in ba){bo=ba[i].offset;
bh[i]+=bo;
bn+=bo;
}}var top=bc[0].getMarginTop();
if(bn<U&&this.getAlignY()!=P){top=U-bn;

if(this.getAlignY()===M){top=Math.round(top/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kN();
}var g=qx.ui.layout.Util;
var q=this.__kM;
var c=0,f=0,e=0;
var a=0,h=0;
var n,b,p;
for(var i=0,l=q.length;i<l;i+=1){n=q[i];
b=n.getSizeHint();
f+=b.height;
var m=this.__kK[i];
var d=this.__kJ[i];

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
}},destruct:function(){this.__kJ=this.__kK=this.__kM=null;
}});
})();
(function(){var D="splitter",C="slider",B="mousedown",A="mouseout",z="mousemove",w="mouseup",v="losecapture",u="active",t="horizontal",s="vertical",T="knob",S="Integer",R="height",Q="row-resize",P="move",O="maxHeight",N="width",M="_applyOrientation",L="mouseover",K="splitpane",I="qx.ui.splitpane.Pane",J="_applyOffset",G="minHeight",H="minWidth",E="col-resize",F="maxWidth";
qx.Class.define(I,{extend:qx.ui.core.Widget,construct:function(p){arguments.callee.base.call(this);
this.__kO=[];
if(p){this.setOrientation(p);
}else{this.initOrientation();
}this.addListener(B,this._onMouseDown);
this.addListener(w,this._onMouseUp);
this.addListener(z,this._onMouseMove);
this.addListener(A,this._onMouseOut);
this.addListener(v,this._onMouseUp);
},properties:{appearance:{refine:true,init:K},offset:{check:S,init:6,apply:J},orientation:{init:t,check:[t,s],apply:M}},members:{__kP:null,__kQ:false,__kR:null,__kS:null,__kT:null,__kU:null,__kV:null,__kO:null,_createChildControlImpl:function(i){var j;

switch(i){case C:j=new qx.ui.splitpane.Slider(this);
j.exclude();
this._add(j,{type:i});
break;
case D:j=new qx.ui.splitpane.Splitter(this);
this._add(j,{type:i});
j.addListener(P,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){j.addListener(L,this._onSplitterMouseOver,j);
}break;
}return j||arguments.callee.base.call(this,i);
},_applyOrientation:function(X,Y){var ba=this.getChildControl(C);
var bd=this.getChildControl(D);
this.__kT=X===t;
var bc=this._getLayout();

if(bc){bc.dispose();
}var bb=X===s?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bb);
bd.removeState(Y);
bd.addState(X);
bd.getChildControl(T).removeState(Y);
bd.getChildControl(T).addState(X);
ba.removeState(Y);
ba.addState(X);
},_applyOffset:function(m,n){var o=this.getChildControl(D);

if(n===0){o.removeListener(B,this._onMouseDown,this);
o.removeListener(z,this._onMouseMove,this);
o.removeListener(A,this._onMouseOut,this);
o.removeListener(w,this._onMouseUp,this);
o.removeListener(v,this._onMouseUp,this);
this.addListener(B,this._onMouseDown);
this.addListener(w,this._onMouseUp);
this.addListener(z,this._onMouseMove);
this.addListener(A,this._onMouseOut);
this.addListener(v,this._onMouseUp);
}
if(m===0){this.removeListener(B,this._onMouseDown);
this.removeListener(w,this._onMouseUp);
this.removeListener(z,this._onMouseMove);
this.removeListener(A,this._onMouseOut);
this.removeListener(v,this._onMouseUp);
o.addListener(B,this._onMouseDown,this);
o.addListener(z,this._onMouseMove,this);
o.addListener(A,this._onMouseOut,this);
o.addListener(w,this._onMouseUp,this);
o.addListener(v,this._onMouseUp,this);
}},add:function(k,l){if(l==null){this._add(k);
}else{this._add(k,{flex:l});
}this.__kO.push(k);
},remove:function(bu){this._remove(bu);
qx.lang.Array.remove(this.__kO,bu);
},getChildren:function(){return this.__kO;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var bp=this.getChildControl(D);
var br=bp.getContainerLocation();
var bq=this.getContentLocation();
this.__kP=this.__kT?e.getDocumentLeft()-br.left+bq.left:e.getDocumentTop()-br.top+bq.top;
var bt=this.getChildControl(C);
var bs=bp.getBounds();
bt.setUserBounds(bs.left,bs.top,bs.width,bs.height);
bt.setZIndex(bp.getZIndex()+1);
bt.show();
this.__kQ=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__kQ){this.__kX();
var q=this.getChildControl(C);
var r=this.__kU;

if(this.__kT){q.setDomLeft(r);
}else{q.setDomTop(r);
}e.stop();
}else{this.__kW();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__kW();
},_onMouseUp:function(e){if(!this.__kQ){return;
}this._finalizeSizes();
var bo=this.getChildControl(C);
bo.exclude();
this.__kQ=false;
this.releaseCapture();
this.__kW();
e.stop();
},_onSplitterMove:function(){this.__kW();
},_onSplitterMouseOver:function(){this.addState(u);
},_finalizeSizes:function(){var by=this.__kU;
var bv=this.__kV;

if(by==null){return;
}var bA=this._getChildren();
var bz=bA[2];
var bw=bA[3];
var bx=bz.getLayoutProperties().flex;
var bB=bw.getLayoutProperties().flex;
if((bx!=0)&&(bB!=0)){bz.setLayoutProperties({flex:by});
bw.setLayoutProperties({flex:bv});
}else{if(this.__kT){bz.setWidth(by);
bw.setWidth(bv);
}else{bz.setHeight(by);
bw.setHeight(bv);
}}},_isNear:function(){var a=this.getChildControl(D);
var c=a.getBounds();
var f=a.getContainerLocation();
var b=this.getOffset();
if(!f){return;
}var g=this.__kR;
var h=c.width;
var d=f.left;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}var g=this.__kS;
var h=c.height;
var d=f.top;

if(h<b){d-=Math.floor((b-h)/2);
h=b;
}
if(g<d||g>(d+h)){return false;
}return true;
},__kW:function(){var V=this.getChildControl(D);
var W=this.getApplicationRoot();
if(this.__kQ||this._isNear()){var U=this.__kT?E:Q;
this.setCursor(U);
W.setGlobalCursor(U);
V.addState(u);
}else if(V.hasState(u)){this.resetCursor();
W.resetGlobalCursor();
V.removeState(u);
}},__kX:function(){if(this.__kT){var bg=H,bn=N,bh=F,bl=this.__kR;
}else{var bg=G,bn=R,bh=O,bl=this.__kS;
}var bm=this._getChildren();
var be=bm[2].getSizeHint();
var bj=bm[3].getSizeHint();
var bk=bm[2].getBounds()[bn]+bm[3].getBounds()[bn];
var bi=bl-this.__kP;
var bf=bk-bi;
if(bi<be[bg]){bf-=be[bg]-bi;
bi=be[bg];
}else if(bf<bj[bg]){bi-=bj[bg]-bf;
bf=bj[bg];
}if(bi>be[bh]){bf+=bi-be[bh];
bi=be[bh];
}else if(bf>bj[bh]){bi+=bf-bj[bh];
bf=bj[bh];
}this.__kU=bi;
this.__kV=bf;
},_isActiveDragSession:function(){return this.__kQ;
},_setLastMousePosition:function(x,y){this.__kR=x;
this.__kS=y;
}},destruct:function(){this.__kO=null;
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
(function(){var W="_applyLayoutChange",V="left",U="width",T="center",S="top",R="Decorator",Q="middle",P="_applyReversed",O="qx.debug",N="bottom",I="' is not supported by the HBox layout!",M="Boolean",L="flex",H="right",G="Integer",K="The property '",J="qx.ui.layout.HBox";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,construct:function(X,Y,ba){arguments.callee.base.call(this);

if(X){this.setSpacing(X);
}
if(Y){this.setAlignX(Y);
}
if(ba){this.setSeparator(ba);
}},properties:{alignX:{check:[V,T,H],init:V,apply:W},alignY:{check:[S,Q,N],init:S,apply:W},spacing:{check:G,init:0,apply:W},separator:{check:R,nullable:true,apply:W},reversed:{check:M,init:false,apply:P}},members:{__kY:null,__la:null,__lb:null,__lc:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ld:function(){var F=this._getLayoutChildren();
var length=F.length;
var C=false;
var A=this.__kY&&this.__kY.length!=length&&this.__la&&this.__kY;
var D;
var B=A?this.__kY:new Array(length);
var E=A?this.__la:new Array(length);
if(this.getReversed()){F=F.concat().reverse();
}for(var i=0;i<length;i++){D=F[i].getLayoutProperties();

if(D.width!=null){B[i]=parseFloat(D.width)/100;
}
if(D.flex!=null){E[i]=D.flex;
C=true;
}else{E[i]=0;
}}if(!A){this.__kY=B;
this.__la=E;
}this.__lb=C;
this.__lc=F;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(O,{"on":function(bq,name,br){this.assert(name===L||name===U,K+name+I);

if(name==U){this.assertMatch(br,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(br);
this.assert(br>=0);
}},"off":null}),renderLayout:function(a,b){if(this._invalidChildrenCache){this.__ld();
}var h=this.__lc;
var length=h.length;
var s=qx.ui.layout.Util;
var r=this.getSpacing();
var v=this.getSeparator();

if(v){var e=s.computeHorizontalSeparatorGaps(h,r,v);
}else{var e=s.computeHorizontalGaps(h,r,true);
}var i,c,p,o;
var u=[];
var j=e;

for(i=0;i<length;i+=1){o=this.__kY[i];
p=o!=null?Math.floor((a-e)*o):h[i].getSizeHint().width;
u.push(p);
j+=p;
}if(this.__lb&&j!=a){var m={};
var q,t;

for(i=0;i<length;i+=1){q=this.__la[i];

if(q>0){k=h[i].getSizeHint();
m[i]={min:k.minWidth,value:u[i],max:k.maxWidth,flex:q};
}}var f=s.computeFlexOffsets(m,a,j);

for(i in f){t=f[i].offset;
u[i]+=t;
j+=t;
}}var z=h[0].getMarginLeft();
if(j<a&&this.getAlignX()!=V){z=a-j;

if(this.getAlignX()===T){z=Math.round(z/2);
}}var k,top,d,p,g,x,n;
var r=this.getSpacing();
this._clearSeparators();
if(v){var w=qx.theme.manager.Decoration.getInstance().resolve(v).getInsets();
var y=w.left+w.right;
}for(i=0;i<length;i+=1){c=h[i];
p=u[i];
k=c.getSizeHint();
x=c.getMarginTop();
n=c.getMarginBottom();
d=Math.max(k.minHeight,Math.min(b-x-n,k.maxHeight));
top=s.computeVerticalAlignOffset(c.getAlignY()||this.getAlignY(),d,b,x,n);
if(i>0){if(v){z+=g+r;
this._renderSeparator(v,{left:z,top:0,width:y,height:b});
z+=y+r+c.getMarginLeft();
}else{z+=s.collapseMargins(r,g,c.getMarginLeft());
}}c.renderLayout(z,top,p,d);
z+=p;
g=c.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ld();
}var bh=qx.ui.layout.Util;
var bp=this.__lc;
var bb=0,bi=0,bf=0;
var be=0,bg=0;
var bm,bc,bo;
for(var i=0,l=bp.length;i<l;i+=1){bm=bp[i];
bc=bm.getSizeHint();
bi+=bc.width;
var bl=this.__la[i];
var bd=this.__kY[i];

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
}},destruct:function(){this.__kY=this.__la=this.__lc=null;
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
(function(){var k="Boolean",j="invalid",i="qx.ui.form.MForm",h="_applyValid",g="",f="changeRequired",e="changeValid",d="changeInvalidMessage",c="String";
qx.Mixin.define(i,{properties:{valid:{check:k,init:true,apply:h,event:e},required:{check:k,init:false,event:f},invalidMessage:{check:c,init:g,event:d}},members:{_applyValid:function(a,b){a?this.removeState(j):this.addState(j);
}}});
})();
(function(){var ba="showingPlaceholder",Y="color",X="",W="none",V="qx.client",U="Boolean",T="qx.event.type.Data",S="readonly",R="input",Q="focusin",bM="visibility",bL="focusout",bK="hidden",bJ="absolute",bI="readOnly",bH="text",bG="_applyTextAlign",bF="px",bE="RegExp",bD=")",bh="syncAppearance",bi="gecko",bf="A",bg="change",bd="textAlign",be="focused",bb="center",bc="visible",bj="disabled",bk="url(",br="String",bp="resize",bv="qx.ui.form.AbstractField",bt="transparent",bz="off",bx="spellcheck",bm="false",bC="right",bB="PositiveInteger",bA="mshtml",bl="abstract",bn="block",bo="webkit",bq="_applyReadOnly",bs="_applyPlaceholder",bu="left",bw="changeValue",by="qx/static/blank.gif";
qx.Class.define(bv,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:bl,construct:function(w){arguments.callee.base.call(this);

if(w!=null){this.setValue(w);
}this.getContentElement().addListener(bg,this._onChangeContent,this);
this.addListener(bh,this._syncPlaceholder,this);
},events:{"input":T,"changeValue":T},properties:{textAlign:{check:[bu,bb,bC],nullable:true,themeable:true,apply:bG},readOnly:{check:U,apply:bq,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:bB,init:Infinity},liveUpdate:{check:U,init:false},placeholder:{check:br,nullable:true,apply:bs},filter:{check:bE,nullable:true,init:null}},members:{__le:true,__lf:null,__lg:null,__lh:null,getFocusElement:function(){var bN=this.getContentElement();

if(bN){return bN;
}},_createInputElement:function(){return new qx.html.Input(bH);
},renderLayout:function(c,top,d,f){var g=this._updateInsets;
var k=arguments.callee.base.call(this,c,top,d,f);
if(!k){return;
}var i=k.size||g;
var l=bF;

if(i||k.local||k.margin){var h=this.getInsets();
var innerWidth=d-h.left-h.right;
var innerHeight=f-h.top-h.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var j=this.getContentElement();

if(g){this.__lk().setStyles({"left":h.left+l,"top":h.top+l});
}
if(i){this.__lk().setStyles({"width":innerWidth+l,"height":innerHeight+l});
j.setStyles({"width":innerWidth+l,"height":innerHeight+l});
}},_createContentElement:function(){var m=this._createInputElement();
m.setStyles({"border":W,"padding":0,"margin":0,"display":bn,"background":bt,"outline":W,"appearance":W,"position":bJ,"autoComplete":bz});
m.setSelectable(this.getSelectable());
m.setEnabled(this.getEnabled());
m.addListener(R,this._onHtmlInput,this);
if(qx.core.Variant.isSet(V,bi)){m.setAttribute(bx,bm);
}if(qx.core.Variant.isSet(V,bo)){m.setStyle(bp,W);
}if(qx.core.Variant.isSet(V,bA)){m.setStyles({backgroundImage:bk+qx.util.ResourceManager.getInstance().toUri(by)+bD});
}return m;
},_applyEnabled:function(a,b){arguments.callee.base.call(this,a,b);
this.getContentElement().setEnabled(a);

if(a){this._showPlaceholder();
}else{this._removePlaceholder();
}},__li:{width:16,height:16},_getContentHint:function(){return {width:this.__li.width*10,height:this.__li.height||16};
},_applyFont:function(p,q){var r;

if(p){var s=qx.theme.manager.Font.getInstance().resolve(p);
r=s.getStyles();
}else{r=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(r);
this.__lk().setStyles(r);
if(p){this.__li=qx.bom.Label.getTextSize(bf,r);
}else{delete this.__li;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(M,N){if(M){this.getContentElement().setStyle(Y,qx.theme.manager.Color.getInstance().resolve(M));
this.__lk().setStyle(Y,qx.theme.manager.Color.getInstance().resolve(M));
}else{this.getContentElement().removeStyle(Y);
this.__lk().removeStyle(Y);
}},tabFocus:function(){arguments.callee.base.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__li;
},_onHtmlInput:function(e){var A=e.getData();
var z=true;
this.__le=false;
if(this.getFilter()!=null){var B=X;
var x=A.search(this.getFilter());
var y=A;

while(x>=0){B=B+(y.charAt(x));
y=y.substring(x+1,y.length);
x=y.search(this.getFilter());
}
if(B!=A){z=false;
A=B;
this.getContentElement().setValue(A);
}}if(A.length>this.getMaxLength()){var z=false;
this.getContentElement().setValue(A.substr(0,this.getMaxLength()));
}if(z){this.fireDataEvent(R,A,this.__lh);
this.__lh=A;
if(this.getLiveUpdate()){this.__lj(A);
}}},__lj:function(G){this.fireNonBubblingEvent(bw,qx.event.type.Data,[G,this.__lg]);
this.__lg=G;
},setValue:function(C){if(C===null){if(this.__le){return C;
}C=X;
this.__le=true;
}else{this.__le=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(C)){var E=this.getContentElement();

if(C.length>this.getMaxLength()){C=C.substr(0,this.getMaxLength());
}
if(E.getValue()!=C){var F=E.getValue();
E.setValue(C);
var D=this.__le?null:C;
this.__lg=F;
this.__lj(D);
}this._showPlaceholder();
return C;
}throw new Error("Invalid value type: "+C);
},getValue:function(){var v=this.getContentElement().getValue();
return this.__le?null:v;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__le=e.getData()===null;
this.__lj(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(n,o){this.getContentElement().setTextSelection(n,o);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var I=this.getValue()||X;
var H=this.getPlaceholder();

if(H!=null&&I==X&&!this.hasState(be)&&!this.hasState(bj)){if(this.hasState(ba)){this._syncPlaceholder();
}else{this.addState(ba);
}}},_removePlaceholder:function(){if(this.hasState(ba)){this.__lk().setStyle(bM,bK);
this.removeState(ba);
}},_syncPlaceholder:function(){if(this.hasState(ba)){this.__lk().setStyle(bM,bc);
}},__lk:function(){if(this.__lf==null){this.__lf=new qx.html.Label();
this.__lf.setStyles({"visibility":bK,"zIndex":6,"position":bJ});
this.getContainerElement().add(this.__lf);
}return this.__lf;
},_applyPlaceholder:function(t,u){this.__lk().setValue(t);

if(t!=null){this.addListener(Q,this._removePlaceholder,this);
this.addListener(bL,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(Q,this._removePlaceholder,this);
this.removeListener(bL,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(O,P){this.getContentElement().setStyle(bd,O);
},_applyReadOnly:function(J,K){var L=this.getContentElement();
L.setAttribute(bI,J);

if(J){this.addState(S);
this.setFocusable(false);
}else{this.removeState(S);
this.setFocusable(true);
}}},destruct:function(){this.__lf=null;
}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var r="none",q="wrap",p="value",o="qx.client",n="textarea",m="off",l="on",k="qxSelectable",j="",i="webkit",e="input",h="qx.html.Input",g="select",d="disabled",c="read-only",f="userSelect";
qx.Class.define(h,{extend:qx.html.Element,construct:function(z){arguments.callee.base.call(this);
this.__ll=z;
if(z===g||z===n){this.setNodeName(z);
}else{this.setNodeName(e);
}},members:{__ll:null,__lm:null,__ln:null,_createDomElement:function(){return qx.bom.Input.create(this.__ll);
},_applyProperty:function(name,s){arguments.callee.base.call(this,name,s);
var t=this.getDomElement();

if(name===p){qx.bom.Input.setValue(t,s);
}else if(name===q){qx.bom.Input.setWrap(t,s);
}},setEnabled:qx.core.Variant.select(o,{"webkit":function(u){this.__ln=u;

if(!u){this.setStyles({"userModify":c,"userSelect":r});
}else{this.setStyles({"userModify":null,"userSelect":this.__lm?null:r});
}},"default":function(a){this.setAttribute(d,a===false);
}}),setSelectable:qx.core.Variant.select(o,{"webkit":function(x){this.__lm=x;
this.setAttribute(k,x?l:m);
if(qx.core.Variant.isSet(o,i)){var y=this.__ln?x?null:r:r;
this.setStyle(f,y);
}},"default":function(b){this.setAttribute(k,b?l:m);
}}),setValue:function(v){var w=this.getDomElement();

if(w){if(w.value!=v){qx.bom.Input.setValue(w,v);
}}else{this._setProperty(p,v);
}return this;
},getValue:function(){var B=this.getDomElement();

if(B){return qx.bom.Input.getValue(B);
}return this._getProperty(p)||j;
},setWrap:function(A){if(this.__ll===n){this._setProperty(q,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__ll===n){return this._getProperty(q);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var w="change",v="input",u="qx.client",t="text",s="password",r="checkbox",q="radio",p="textarea",n="keypress",m="opera",d="propertychange",k="blur",h="keydown",c="keyup",b="select-multiple",g="checked",f="value",j="select",a="qx.event.handler.Input";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(u,m)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__lo:false,__lp:null,__lq:null,canHandleEvent:function(O,P){var Q=O.tagName.toLowerCase();

if(P===v&&(Q===v||Q===p)){return true;
}
if(P===w&&(Q===v||Q===p||Q===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(I,J,K){if(!I.__lr){var L=I.tagName.toLowerCase();
var M=I.type;

if(M===t||M===s||L===p||M===r||M===q){qx.bom.Event.addNativeListener(I,d,this._onPropertyWrapper);
}
if(M!==r&&M!==q){qx.bom.Event.addNativeListener(I,w,this._onChangeValueWrapper);
}
if(M===t||M===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,I);
qx.bom.Event.addNativeListener(I,n,this._onKeyPressWrapped);
}I.__lr=true;
}},"default":function(bc,bd,be){if(bd===v){this.__ls(bc);
}else if(bd===w){if(bc.type===q||bc.type===r){qx.bom.Event.addNativeListener(bc,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(bc,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(bc.type===t||bc.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,bc);
qx.bom.Event.addNativeListener(bc,n,this._onKeyPressWrapped);
}}}}}),__ls:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(R){var S=R.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&S==p){qx.bom.Event.addNativeListener(R,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(R,v,this._onInputWrapper);
},"opera":function(bf){qx.bom.Event.addNativeListener(bf,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(bf,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(bf,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(bf,v,this._onInputWrapper);
},"default":function(bb){qx.bom.Event.addNativeListener(bb,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(E,F){if(E.__lr){var G=E.tagName.toLowerCase();
var H=E.type;

if(H===t||H===s||G===p||H===r||H===q){qx.bom.Event.removeNativeListener(E,d,this._onPropertyWrapper);
}
if(H!==r&&H!==q){qx.bom.Event.removeNativeListener(E,w,this._onChangeValueWrapper);
}
if(H===t||H===s){qx.bom.Event.removeNativeListener(E,n,this._onKeyPressWrapped);
}
try{delete E.__lr;
}catch(X){E.__lr=null;
}}},"default":function(T,U){if(U===v){this.__ls(T);
}else if(U===w){if(T.type===q||T.type===r){qx.bom.Event.removeNativeListener(T,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(T,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(T.type===t||T.type===s){qx.bom.Event.removeNativeListener(T,n,this._onKeyPressWrapped);
}}}}),__lt:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(A){var B=A.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&B==p){qx.bom.Event.removeNativeListener(A,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(A,v,this._onInputWrapper);
},"opera":function(z){qx.bom.Event.removeNativeListener(z,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(z,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(z,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(z,v,this._onInputWrapper);
},"default":function(x){qx.bom.Event.removeNativeListener(x,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,N){if(e.keyCode===13){if(N.value!==this.__lq){this.__lq=N.value;
qx.event.Registration.fireEvent(N,w,qx.event.type.Data,[N.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__lo=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__lo=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__lp){window.clearTimeout(this.__lp);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var C=e.target;
if(!this.__lo){if(qx.core.Variant.isSet(u,m)){this.__lp=window.setTimeout(function(){qx.event.Registration.fireEvent(C,v,qx.event.type.Data,[C.value]);
},0);
}else{qx.event.Registration.fireEvent(C,v,qx.event.type.Data,[C.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var ba=e.target||e.srcElement;
var Y=ba.value;

if(ba.type===b){var Y=[];

for(var i=0,o=ba.options,l=o.length;i<l;i++){if(o[i].selected){Y.push(o[i].value);
}}}qx.event.Registration.fireEvent(ba,w,qx.event.type.Data,[Y]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var D=e.target;

if(D.type===q){if(D.checked){qx.event.Registration.fireEvent(D,w,qx.event.type.Data,[D.value]);
}}else{qx.event.Registration.fireEvent(D,w,qx.event.type.Data,[D.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var V=e.target||e.srcElement;
var W=e.propertyName;

if(W===f&&(V.type===t||V.type===s||V.tagName.toLowerCase()===p)){if(!V.__inValueSet){qx.event.Registration.fireEvent(V,v,qx.event.type.Data,[V.value]);
}}else if(W===g){if(V.type===r){qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.checked]);
}else if(V.checked){qx.event.Registration.fireEvent(V,w,qx.event.type.Data,[V.value]);
}}}),"default":function(){}})},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var r="",q="select",p="qx.client",o="soft",n="off",m="text",k="Unsupported input type.",j="nowrap",h="radio",g="textarea",E="auto",D="qx.debug",C="input",B="option",A="value",z="number",y="qx.bom.Input",x="normal",w="mshtml",v="wrap",t="checkbox",u="select-one",s="on";
qx.Class.define(y,{statics:{__lu:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(a,b,c){if(qx.core.Variant.isSet(D,s)){qx.core.Assert.assertKeyInMap(a,this.__lu,k);
}var b=b?qx.lang.Object.clone(b):{};
var d;

if(a===g||a===q){d=a;
}else{d=C;
b.type=a;
}return qx.bom.Element.create(d,b,c);
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
}}else if(I===m&&qx.core.Variant.isSet(p,w)){F.__lv=true;
F.value=G;
F.__lv=null;
}else{F.value=G;
}},getValue:function(S){var Y=S.nodeName.toLowerCase();

if(Y===B){return (S.attributes.value||{}).specified?S.value:S.text;
}
if(Y===q){var T=S.selectedIndex;
if(T<0){return null;
}var ba=[];
var bc=S.options;
var bb=S.type==u;
var X=qx.bom.Input;
var W;
for(var i=bb?T:0,V=bb?T+1:bc.length;i<V;i++){var U=bc[i];

if(U.selected){W=X.getValue(U);
if(bb){return W;
}ba.push(W);
}}return ba;
}else{return (S.value||r).replace(/\r/g,r);
}},setWrap:qx.core.Variant.select(p,{"mshtml":function(e,f){e.wrap=f?o:n;
},"gecko|webkit":function(O,P){var R=P?o:n;
var Q=P?r:E;
O.setAttribute(v,R);
O.style.overflow=Q;
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
(function(){var i="__lw",h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":d},members:{__lw:null,getSelection:function(){var j=this.__lx().getSelected();

if(j){return [j];
}else{return [];
}},setSelection:function(a){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
switch(a.length){case 0:this.resetSelection();
break;
case 1:this.__lx().setSelected(a[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+a.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__lx().resetSelected();
},isSelected:function(c){return this.__lx().isSelected(c);
},isSelectionEmpty:function(){return this.__lx().isSelectionEmpty();
},getSelectables:function(){return this.__lx().getSelectables();
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(g,l,k);
},__lx:function(){if(this.__lw==null){var m=this;
this.__lw=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(b){if(m._isItemSelectable){return m._isItemSelectable(b);
}else{return b.isEnabled()&&b.isVisible();
}}});
this.__lw.addListener(f,this._onChangeSelected,this);
}this.__lw.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__lw;
}},destruct:function(){this._disposeObjects(i);
}});
})();
(function(){var m="_applyDynamic",k="changeSelection",j="Boolean",h="qx.ui.container.Stack";
qx.Class.define(h,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(k,this.__ly,this);
},properties:{dynamic:{check:j,init:false,apply:m}},members:{_applyDynamic:function(c){var f=this._getChildren();
var d=this.getSelection()[0];
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g!=d){if(c){f[i].exclude();
}else{f[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(b){return b.isEnabled();
},__ly:function(e){var n=e.getOldData()[0];
var o=e.getData()[0];

if(n){if(this.isDynamic()){n.exclude();
}else{n.hide();
}}
if(o){o.show();
}},add:function(t){this._add(t);
var u=this.getSelection()[0];

if(!u){this.setSelection([t]);
}else if(u!==t){if(this.isDynamic()){t.exclude();
}else{t.hide();
}}},remove:function(z){this._remove(z);

if(this.getSelection()[0]===z){var A=this._getChildren()[0];

if(A){this.setSelection([A]);
}else{this.resetSelection();
}}},indexOf:function(a){return this._indexOf(a);
},getChildren:function(){return this._getChildren();
},previous:function(){var x=this.getSelection()[0];
var v=this._indexOf(x)-1;
var y=this._getChildren();

if(v<0){v=y.length-1;
}var w=y[v];
this.setSelection([w]);
},next:function(){var q=this.getSelection()[0];
var p=this._indexOf(q)+1;
var r=this._getChildren();
var s=r[p]||r[0];
this.setSelection([s]);
}}});
})();
(function(){var p="Boolean",o="qx.ui.core.SingleSelectionManager",n="qx.debug",m="__lA",l="Invalid selectionProvider!",k="__lB",j="changeSelected",h="on",g="__lz",f="qx.event.type.Data";
qx.Class.define(o,{extend:qx.core.Object,construct:function(t){arguments.callee.base.call(this);

if(qx.core.Variant.isSet(n,h)){qx.core.Assert.assertInterface(t,qx.ui.core.ISingleSelectionProvider,l);
}this.__lz=t;
},events:{"changeSelected":f},properties:{allowEmptySelection:{check:p,init:true,apply:k}},members:{__lA:null,__lz:null,getSelected:function(){return this.__lA;
},setSelected:function(q){if(!this.__lD(q)){throw new Error("Could not select "+q+", because it is not a child element!");
}this.__lC(q);
},resetSelected:function(){this.__lC(null);
},isSelected:function(a){if(!this.__lD(a)){throw new Error("Could not check if "+a+" is selected,"+" because it is not a child element!");
}return this.__lA===a;
},isSelectionEmpty:function(){return this.__lA==null;
},getSelectables:function(){var r=this.__lz.getItems();
var s=[];

for(var i=0;i<r.length;i++){if(this.__lz.isItemSelectable(r[i])){s.push(r[i]);
}}return s;
},__lB:function(u,v){if(!u){this.__lC(this.__lA);
}},__lC:function(b){var e=this.__lA;
var d=b;

if(d!=null&&e===d){return;
}
if(!this.isAllowEmptySelection()&&d==null){var c=this.getSelectables()[0];

if(c){d=c;
}}this.__lA=d;
this.fireDataEvent(j,d,e);
},__lD:function(w){var x=this.__lz.getItems();

for(var i=0;i<x.length;i++){if(x[i]===w){return true;
}}return false;
}},destruct:function(){if(this.__lz.toHashCode){this._disposeObjects(g);
}else{this.__lz=null;
}this._disposeObjects(m);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var D="",C="now uses 'qx.event.Idle' for polling.",B="qx.debug",A="The property 'timeoutInterval' has been deprected. The history manager",z="on",y='#',x="String",w="request",v="mshtml",u="Invalid attribute 'value'.",o="changeTitle",t="abstract",r="_applyState",n="qx.client",m="changeState",q="qx.bom.History",p="_applyTitle",s="qx.event.type.Data";
qx.Class.define(q,{extend:qx.core.Object,type:t,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(y)[0]+y;
this.__lE={};
this._setInitialState();
},events:{"request":s},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(n,v)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:x,event:o,nullable:true,apply:p},state:{check:x,event:m,nullable:true,apply:r}},members:{__lE:null,_applyState:function(f,g){this._writeState(f);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(e){if(qx.lang.Type.isString(e)){return encodeURIComponent(e);
}return D;
},_decode:function(h){if(qx.lang.Type.isString(h)){return decodeURIComponent(h);
}return D;
},_applyTitle:function(i){if(i!=null){document.title=i||D;
}},addToHistory:function(k,l){if(!qx.lang.Type.isString(k)){k=k+D;
}
if(qx.lang.Type.isString(l)){this.setTitle(l);
this.__lE[k]=l;
}
if(this.getState()!==k){this._writeState(k);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(d){this.setState(d);
this.fireDataEvent(w,d);

if(this.__lE[d]!=null){this.setTitle(this.__lE[d]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(a){var b=this._baseUrl+(a||D);
var c=window.location;

if(b!=c.href){c.href=b;
}},_getHash:function(){var j=/#(.*)$/.exec(window.location.href);
return j&&j[1]?j[1]:D;
},setTimeoutInterval:function(E){if(qx.core.Variant.isSet(B,z)){qx.core.Assert.assertNumber(E,u);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(B,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(B,z)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A+C);
}}},destruct:function(){this.__lE=null;
}});
})();
(function(){var f="hashchange",e="interval",d="qx.bom.NativeHistory",c="qx.client";
qx.Class.define(d,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__lG();
},members:{__lF:null,__lG:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__lF=qx.lang.Function.bind(this.__lI,this);
qx.bom.Event.addNativeListener(window,f,this.__lF);
}else{qx.event.Idle.getInstance().addListener(e,this.__lI,this);
}},__lH:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,f,this.__lF);
}else{qx.event.Idle.getInstance().removeListener(e,this.__lI,this);
}},__lI:function(){var b=this._readState();

if(qx.lang.Type.isString(b)&&b!=this.getState()){this._onHistoryLoad(b);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(c,{"opera":function(a){qx.event.Timer.once(function(){this._setHash(this._encode(a));
},this,0);
},"default":function(g){this._setHash(this._encode(g));
}})},destruct:function(){this.__lH();
}});
})();
(function(){var q="interval",p="-1000px",o="mshtml",n="",m="qx.bom.IframeHistory",l="qx/static/blank.html",k="state",j='<html><body><div id="state">',i='</div></body></html>',h="hidden",d="qx.client",g="undefined",f="absolute";
if(qx.core.Variant.isSet(d,o)){qx.Class.define(m,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__lM();
},members:{__lJ:null,__lK:false,__lL:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__lL=this._getHash();
},_setHash:function(A){arguments.callee.base.call(this,A);
this.__lL=this._encode(A);
},_readState:function(){if(!this.__lK){return this._decode(this._getHash());
}var u=this.__lJ.contentWindow.document;
var v=u.getElementById(k);
return v?this._decode(v.innerText):n;
},_writeState:function(r){var r=this._encode(r);
this._setHash(r);
this.__lL=r;

try{var s=this.__lJ.contentWindow.document;
s.open();
s.write(j+r+i);
s.close();
}catch(t){}},__lM:function(){this.__lQ(function(){qx.event.Idle.getInstance().addListener(q,this.__lN,this);
});
},__lN:function(e){var c=null;
var b=this._getHash();

if(!this.__lP(b)){c=this.__lO(b);
}else{c=this._readState();
}
if(qx.lang.Type.isString(c)&&c!=this.getState()){this._onHistoryLoad(c);
}},__lO:function(z){z=this._decode(z);
this._writeState(z);
return z;
},__lP:function(C){return qx.lang.Type.isString(C)&&C==this.__lL;
},__lQ:function(a){this.__lJ=this.__lR();
document.body.appendChild(this.__lJ);
this.__lS(function(){this._writeState(this.getState());

if(a){a.call(this);
}},this);
},__lR:function(){var B=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(l)});
B.style.visibility=h;
B.style.position=f;
B.style.left=p;
B.style.top=p;
return B;
},__lS:function(w,x,y){if(typeof y===g){y=0;
}
if(!this.__lJ.contentWindow||!this.__lJ.contentWindow.document){if(y>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__lS(w,x,++y);
},this,10);
return;
}this.__lK=true;
w.call(x||window);
}},destruct:function(){this.__lJ=null;
qx.event.Idle.getInstance().addListener(q,this.__lN,this);
}});
}})();
(function(){var k="qx.event.handler.Iframe",j="load",i="iframe";
qx.Class.define(k,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(l){qx.event.Registration.fireEvent(l,j);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===i;
},registerEvent:function(d,e,f){},unregisterEvent:function(a,b,c){}},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var k="qx.client",j="webkit",i="body",h="iframe",g="qx.bom.Iframe";
qx.Class.define(g,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(w,x){var w=w?qx.lang.Object.clone(w):{};
var y=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var z in y){if(w[z]==null){w[z]=y[z];
}}return qx.bom.Element.create(h,w,x);
},getWindow:qx.core.Variant.select(k,{"mshtml|gecko":function(D){try{return D.contentWindow;
}catch(n){return null;
}},"default":function(c){try{var d=this.getDocument(c);
return d?d.defaultView:null;
}catch(v){return null;
}}}),getDocument:qx.core.Variant.select(k,{"mshtml":function(B){try{var C=this.getWindow(B);
return C?C.document:null;
}catch(u){return null;
}},"default":function(e){try{return e.contentDocument;
}catch(t){return null;
}}}),getBody:function(a){try{var b=this.getDocument(a);
return b?b.getElementsByTagName(i)[0]:null;
}catch(f){return null;
}},setSource:function(q,r){try{if(this.getWindow(q)&&qx.dom.Hierarchy.isRendered(q)){try{if(qx.core.Variant.isSet(k,j)&&qx.bom.client.Platform.MAC){var s=this.getContentWindow();

if(s){s.stop();
}}this.getWindow(q).location.replace(r);
}catch(A){q.src=r;
}}else{q.src=r;
}}catch(p){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(l){var m=this.getDocument(l);

try{if(m&&m.location){return m.location.href;
}}catch(o){}return null;
}}});
})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(a){this._shortcut.setShortcut(a);
},execute:function(r){this.fireDataEvent(o,r);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var x="Unidentified",w="Boolean",v="+",u="short",t="keydown",s="",r="Control",q="keypress",p="-",o="PageUp",bf="Escape",be="qx.event.type.Data",bd="_applyShortcut",bc="PrintScreen",bb="NumLock",ba="5",Y="8",X="execute",W="Meta",V="0",E="2",F="This message will be made private.",C="Shift",D="You can only specify one non modifier key!",A="3",B="/",y="_applyEnabled",z="String",G="changeEnabled",H="*",N="qx.bom.Shortcut",M="6",P="4",O="1",R="Alt",Q="Not a valid key name for a shortcut: ",J="PageDown",U="Whitespaces are not allowed within shortcuts",T="Delete",S="7",I="a",K="z",L="9";
qx.Class.define(N,{extend:qx.core.Object,construct:function(b){arguments.callee.base.call(this);
this.__lT={};
this.__lU=null;

if(b!=null){this.setShortcut(b);
}this.initEnabled();
},events:{"execute":be},properties:{enabled:{init:true,check:w,event:G,apply:y},shortcut:{check:z,apply:bd,nullable:true},autoRepeat:{check:w,init:false}},members:{__lT:s,__lU:s,execute:function(g){this.fireDataEvent(X,g);
},__lV:function(event){if(this.getEnabled()&&this.__lX(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__lW:function(event){if(this.getEnabled()&&this.__lX(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bg,bh){if(bg){qx.event.Registration.addListener(document.documentElement,t,this.__lV,this);
qx.event.Registration.addListener(document.documentElement,q,this.__lW,this);
}else{qx.event.Registration.removeListener(document.documentElement,t,this.__lV,this);
qx.event.Registration.removeListener(document.documentElement,q,this.__lW,this);
}},_applyShortcut:function(h,j){if(h){if(h.search(/[\s]+/)!=-1){var m=U;
this.error(m);
throw new Error(m);
}this.__lT={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__lU=null;
var k;
var a=[];

while(h.length>0&&k!=-1){k=h.search(/[-+]+/);
a.push((h.length==1||k==-1)?h:h.substring(0,k));
h=h.substring(k+1);
}var l=a.length;

for(var i=0;i<l;i++){var n=this.__ma(a[i]);

switch(n){case r:case C:case W:case R:this.__lT[n]=true;
break;
case x:var m=Q+a[i];
this.error(m);
throw m;
default:if(this.__lU){var m=D;
this.error(m);
throw m;
}this.__lU=n;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,F);
return this.__lX(e);
},__lX:function(e){var bl=this.__lU;

if(!bl){return ;
}if((!this.__lT.Shift&&e.isShiftPressed())||(this.__lT.Shift&&!e.isShiftPressed())||(!this.__lT.Control&&e.isCtrlPressed())||(this.__lT.Control&&!e.isCtrlPressed())||(!this.__lT.Meta&&e.isMetaPressed())||(this.__lT.Meta&&!e.isMetaPressed())||(!this.__lT.Alt&&e.isAltPressed())||(this.__lT.Alt&&!e.isAltPressed())){return false;
}
if(bl==e.getKeyIdentifier()){return true;
}return false;
},__lY:{esc:bf,ctrl:r,print:bc,del:T,pageup:o,pagedown:J,numlock:bb,numpad_0:V,numpad_1:O,numpad_2:E,numpad_3:A,numpad_4:P,numpad_5:ba,numpad_6:M,numpad_7:S,numpad_8:Y,numpad_9:L,numpad_divide:B,numpad_multiply:H,numpad_minus:p,numpad_plus:v},__ma:function(bi){var bj=qx.event.handler.Keyboard;
var bk=x;

if(bj.isValidKeyIdentifier(bi)){return bi;
}
if(bi.length==1&&bi>=I&&bi<=K){return bi.toUpperCase();
}bi=bi.toLowerCase();
var bk=this.__lY[bi]||qx.lang.String.firstUp(bi);

if(bj.isValidKeyIdentifier(bk)){return bk;
}else{return x;
}},toString:function(){var f=this.__lU;
var d=[];

for(var c in this.__lT){if(this.__lT[c]){d.push(qx.locale.Key.getKeyName(u,c));
}}
if(f){d.push(qx.locale.Key.getKeyName(u,f));
}return d.join(v);
}},destruct:function(){this.setEnabled(false);
this.__lT=this.__lU=null;
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
(function(){var k="both",j="qx.ui.menu.Menu",h="_applySpacing",g="icon",f="label",e="changeShow",d="Integer",c="qx.ui.toolbar.ToolBar",b="toolbar",a="changeOpenMenu";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__mb:false,_setAllowMenuOpenHover:function(t){this.__mb=t;
},_isAllowMenuOpenHover:function(){return this.__mb;
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__mc:null,__md:false,__me:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__md){this.__md=false;
}else{this.__md=true;
o.execute(this);
}}this.fireEvent(n);
},__mf:function(e){if(this.__md){this.__md=false;
return;
}this.__md=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__me);
}
if(p!=null){this.__me=p.addListener(n,this.__mf,this);
}var t=this.__mc;

if(t==null){this.__mc=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__mc=null;
}});
})();
(function(){var c="qx.ui.form.IExecutable",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"execute":b},members:{setCommand:function(a){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var r="pressed",q="abandoned",p="hovered",o="Enter",n="Space",m="dblclick",l="qx.ui.form.Button",k="mouseup",j="mousedown",i="mouseover",f="mouseout",h="keydown",g="button",d="keyup";
qx.Class.define(l,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b,c){arguments.callee.base.call(this,a,b);

if(c!=null){this.setCommand(c);
}this.addListener(i,this._onMouseOver);
this.addListener(f,this._onMouseOut);
this.addListener(j,this._onMouseDown);
this.addListener(k,this._onMouseUp);
this.addListener(h,this._onKeyDown);
this.addListener(d,this._onKeyUp);
this.addListener(m,this._onStopEvent);
},properties:{appearance:{refine:true,init:g},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(q)){return;
}this.addState(r);
},release:function(){if(this.hasState(r)){this.removeState(r);
}},reset:function(){this.removeState(r);
this.removeState(q);
this.removeState(p);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(q)){this.removeState(q);
this.addState(r);
}this.addState(p);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(p);

if(this.hasState(r)){this.removeState(r);
this.addState(q);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(q);
this.addState(r);
},_onMouseUp:function(e){this.releaseCapture();
var s=this.hasState(r);
var t=this.hasState(q);

if(s){this.removeState(r);
}
if(t){this.removeState(q);
}else{this.addState(p);

if(s){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case o:case n:this.removeState(q);
this.addState(r);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case o:case n:if(this.hasState(r)){this.removeState(q);
this.removeState(r);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var n="pressed",m="hovered",l="changeVisibility",k="qx.ui.menu.Menu",j="submenu",i="Enter",h="contextmenu",g="changeMenu",f="qx.ui.form.MenuButton",d="abandoned",c="_applyMenu";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p,q){arguments.callee.base.call(this,o,p);
if(q!=null){this.setMenu(q);
}},properties:{menu:{check:k,nullable:true,apply:c,event:g}},members:{_applyMenu:function(r,s){if(s){s.removeListener(l,this._onMenuChange,this);
s.resetOpener();
}
if(r){r.addListener(l,this._onMenuChange,this);
r.setOpener(this);
r.removeState(j);
r.removeState(h);
}},open:function(t){var u=this.getMenu();

if(u){qx.ui.menu.Manager.getInstance().hideAll();
u.setOpener(this);
u.open();
if(t){var v=u.getSelectables()[0];

if(v){u.setSelectedButton(v);
}}}},_onMenuChange:function(e){var b=this.getMenu();

if(b.isVisible()){this.addState(n);
}else{this.removeState(n);
}},_onMouseDown:function(e){var a=this.getMenu();

if(a){if(!a.isVisible()){this.open();
}else{a.exclude();
}e.stopPropagation();
}},_onMouseUp:function(e){arguments.callee.base.call(this,e);
e.stopPropagation();
},_onMouseOver:function(e){this.addState(m);
},_onMouseOut:function(e){this.removeState(m);
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:this.removeState(d);
this.addState(n);
var w=this.getMenu();

if(w){if(!w.isVisible()){this.open();
}else{w.exclude();
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
(function(){var bA="keypress",bz="qx.debug",by="interval",bx="keydown",bw="on",bv="mousedown",bu="keyup",bt="__mh",bs="blur",br="Enter",bk="__mi",bq="Up",bn="__mg",bj="Escape",bi="qx.ui.menu.Manager",bm="Left",bl="Down",bo="Right",bh="singleton",bp="Space";
qx.Class.define(bi,{type:bh,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mg=[];
var bE=document.body;
var bF=qx.event.Registration;
bF.addListener(window.document.documentElement,bv,this._onMouseDown,this,true);
bF.addListener(bE,bx,this._onKeyUpDown,this,true);
bF.addListener(bE,bu,this._onKeyUpDown,this,true);
bF.addListener(bE,bA,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,bs,this.hideAll,this);
this.__mh=new qx.event.Timer;
this.__mh.addListener(by,this._onOpenInterval,this);
this.__mi=new qx.event.Timer;
this.__mi.addListener(by,this._onCloseInterval,this);
},members:{__mj:null,__mk:null,__mh:null,__mi:null,__mg:null,_getChild:function(a,b,c,d){var f=a.getChildren();
var length=f.length;
var g;

for(var i=b;i<length&&i>=0;i+=c){g=f[i];

if(g.isEnabled()&&!g.isAnonymous()){return g;
}}
if(d){i=i==length?0:length-1;

for(;i!=b;i+=c){g=f[i];

if(g.isEnabled()&&!g.isAnonymous()){return g;
}}}return null;
},_isInMenu:function(bg){while(bg){if(bg instanceof qx.ui.menu.Menu){return true;
}bg=bg.getLayoutParent();
}return false;
},_getMenuButton:function(bc){while(bc){if(bc instanceof qx.ui.menu.AbstractButton){return bc;
}bc=bc.getLayoutParent();
}return null;
},add:function(k){if(qx.core.Variant.isSet(bz,bw)){if(!(k instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+k);
}}var l=this.__mg;
l.push(k);
k.setZIndex(1e6+l.length);
},remove:function(P){if(qx.core.Variant.isSet(bz,bw)){if(!(P instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+P);
}}var Q=this.__mg;

if(Q){qx.lang.Array.remove(Q,P);
}},hideAll:function(){var Y=this.__mg;

if(Y){for(var i=Y.length-1;i>=0;i--){Y[i].exclude();
}}},getActiveMenu:function(){var K=this.__mg;
return K.length>0?K[K.length-1]:null;
},scheduleOpen:function(bC){this.cancelClose(bC);
if(bC.isVisible()){if(this.__mj){this.cancelOpen(this.__mj);
}}else if(this.__mj!=bC){this.__mj=bC;
this.__mh.restartWith(bC.getOpenInterval());
}},scheduleClose:function(bB){this.cancelOpen(bB);
if(!bB.isVisible()){if(this.__mk){this.cancelClose(this.__mk);
}}else if(this.__mk!=bB){this.__mk=bB;
this.__mi.restartWith(bB.getCloseInterval());
}},cancelOpen:function(w){if(this.__mj==w){this.__mh.stop();
this.__mj=null;
}},cancelClose:function(G){if(this.__mk==G){this.__mi.stop();
this.__mk=null;
}},_onOpenInterval:function(e){this.__mh.stop();
this.__mj.open();
this.__mj=null;
},_onCloseInterval:function(e){this.__mi.stop();
this.__mk.exclude();
this.__mk=null;
},_onMouseDown:function(e){var bD=e.getTarget();
bD=qx.ui.core.Widget.getWidgetByElement(bD);
if(bD==null){this.hideAll();
return;
}if(bD.getMenu&&bD.getMenu()&&bD.getMenu().isVisible()){return;
}if(this.__mg.length>0&&!this._isInMenu(bD)){this.hideAll();
}},__ml:{"Enter":1,"Space":1},__mm:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var h=this.getActiveMenu();

if(!h){return;
}var j=e.getKeyIdentifier();

if(this.__mm[j]||(this.__ml[j]&&h.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var m=this.getActiveMenu();

if(!m){return;
}var n=e.getKeyIdentifier();
var p=this.__mm[n];
var o=this.__ml[n];

if(p){switch(n){case bq:this._onKeyPressUp(m);
break;
case bl:this._onKeyPressDown(m);
break;
case bm:this._onKeyPressLeft(m);
break;
case bo:this._onKeyPressRight(m);
break;
case bj:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(o){var q=m.getSelectedButton();

if(q){switch(n){case br:this._onKeyPressEnter(m,q,e);
break;
case bp:this._onKeyPressSpace(m,q,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(r){var s=r.getSelectedButton();
var t=r.getChildren();
var v=s?r.indexOf(s)-1:t.length-1;
var u=this._getChild(r,v,-1,true);
if(u){r.setSelectedButton(u);
}else{r.resetSelectedButton();
}},_onKeyPressDown:function(L){var M=L.getSelectedButton();
var O=M?L.indexOf(M)+1:0;
var N=this._getChild(L,O,1,true);
if(N){L.setSelectedButton(N);
}else{L.resetSelectedButton();
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
}}},_onKeyPressEnter:function(bd,be,e){if(be.hasListener(bA)){var bf=e.clone();
bf.setBubbles(false);
bf.setTarget(be);
be.dispatchEvent(bf);
}this.hideAll();
},_onKeyPressSpace:function(H,I,e){if(I.hasListener(bA)){var J=e.clone();
J.setBubbles(false);
J.setTarget(I);
I.dispatchEvent(J);
}}},destruct:function(){var bb=qx.event.Registration;
var ba=document.body;
bb.removeListener(window.document.documentElement,bv,this._onMouseDown,this,true);
bb.removeListener(ba,bx,this._onKeyUpDown,this,true);
bb.removeListener(ba,bu,this._onKeyUpDown,this,true);
bb.removeListener(ba,bA,this._onKeyPress,this,true);
this._disposeObjects(bt,bk);
this._disposeArray(bn);
}});
})();
(function(){var o="indexOf",n="addAfter",m="add",l="addBefore",k="_",j="addAt",i="hasChildren",h="removeAt",g="removeAll",f="getChildren",d="remove",e="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(e,{members:{__mn:function(p,q,r,s){var t=this.getChildrenContainer();

if(t===this){p=k+p;
}return (t[p])(q,r,s);
},getChildren:function(){return this.__mn(f);
},hasChildren:function(){return this.__mn(i);
},add:function(a,b){return this.__mn(m,a,b);
},remove:function(B){return this.__mn(d,B);
},removeAll:function(){return this.__mn(g);
},indexOf:function(A){return this.__mn(o,A);
},addAt:function(x,y,z){this.__mn(j,x,y,z);
},addBefore:function(u,v,w){this.__mn(l,u,v,w);
},addAfter:function(C,D,E){this.__mn(n,C,D,E);
},removeAt:function(c){this.__mn(h,c);
}}});
})();
(function(){var K="slidebar",J="Integer",I="resize",H="qx.ui.core.Widget",G="selected",F="visible",E="Boolean",D="mouseout",C="excluded",B="menu",ba="_applySelectedButton",Y="_applySpacingY",X="_blocker",W="_applyCloseInterval",V="_applyBlockerColor",U="_applyIconColumnWidth",T="mouseover",S="_applyArrowColumnWidth",R="qx.ui.menu.Menu",Q="Color",O="Number",P="_applyOpenInterval",M="_applySpacingX",N="_applyBlockerOpacity",L="_applyOpenedButton";
qx.Class.define(R,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.menu.Layout);
var b=this.getApplicationRoot();
b.add(this);
this.addListener(T,this._onMouseOver);
this.addListener(D,this._onMouseOut);
this.addListener(I,this._onResize,this);
b.addListener(I,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(b);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:B},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:C},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:J,apply:M,init:0,themeable:true},spacingY:{check:J,apply:Y,init:0,themeable:true},iconColumnWidth:{check:J,init:0,themeable:true,apply:U},arrowColumnWidth:{check:J,init:0,themeable:true,apply:S},blockerColor:{check:Q,init:null,nullable:true,apply:V,themeable:true},blockerOpacity:{check:O,init:1,apply:N,themeable:true},selectedButton:{check:H,nullable:true,apply:ba},openedButton:{check:H,nullable:true,apply:L},opener:{check:H,nullable:true},openInterval:{check:J,themeable:true,init:250,apply:P},closeInterval:{check:J,themeable:true,init:250,apply:W},blockBackground:{check:E,themeable:true,init:false}},members:{__mo:null,__mp:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mr();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mr();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(j){this.placeToPoint(j);
this.__mr();
this.show();
this._placementTarget=j;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var bf=[];
var bg=this.getChildren();

for(var i=0;i<bg.length;i++){if(bg[i].isEnabled()){bf.push(bg[i]);
}}return bf;
},_applyIconColumnWidth:function(k,l){this._getMenuLayout().setIconColumnWidth(k);
},_applyArrowColumnWidth:function(bn,bo){this._getMenuLayout().setArrowColumnWidth(bn);
},_applySpacingX:function(bd,be){this._getMenuLayout().setColumnSpacing(bd);
},_applySpacingY:function(bb,bc){this._getMenuLayout().setSpacing(bb);
},_applyVisibility:function(d,f){arguments.callee.base.call(this,d,f);
var g=qx.ui.menu.Manager.getInstance();

if(d===F){g.add(this);
var h=this.getParentMenu();

if(h){h.setOpenedButton(this.getOpener());
}}else if(f===F){g.remove(this);
var h=this.getParentMenu();

if(h&&h.getOpenedButton()==this.getOpener()){h.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mq();
},__mq:function(){if(this.isVisible()){if(this.getBlockBackground()){var c=this.getZIndex();
this._blocker.blockContent(c-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bp=this.getOpener();

if(!bp||!(bp instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bp&&!(bp instanceof qx.ui.menu.Menu)){bp=bp.getLayoutParent();
}return bp;
},_applySelectedButton:function(r,s){if(s){s.removeState(G);
}
if(r){r.addState(G);
}},_applyOpenedButton:function(bq,br){if(br){br.getMenu().exclude();
}
if(bq){bq.getMenu().open();
}},_applyBlockerColor:function(bl,bm){this._blocker.setColor(bl);
},_applyBlockerOpacity:function(bj,bk){this._blocker.setOpacity(bj);
},getChildrenContainer:function(){return this.getChildControl(K,true)||this;
},_createChildControlImpl:function(m){var n;

switch(m){case K:var n=new qx.ui.menu.MenuSlideBar();
var p=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var o=n.getLayout();
n.setLayout(p);
o.dispose();
var q=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<q.length;i++){n.add(q[i]);
}this.removeListener(I,this._onResize,this);
n.getChildrenContainer().addListener(I,this._onResize,this);
this._add(n);
break;
}return n||arguments.callee.base.call(this,m);
},_getMenuLayout:function(){if(this.hasChildControl(K)){return this.getChildControl(K).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(K)){return this.getChildControl(K).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mr:function(){var z=this._getMenuBounds();

if(!z){this.addListenerOnce(I,this.__mr,this);
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
}},_assertSlideBar:function(a){if(this.hasChildControl(K)){return a.call(this);
}this.__mp=a;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(K);

if(this.__mp){this.__mp.call(this);
delete this.__mp;
}},_onResize:function(){if(this.isVisible()){var x=this._placementTarget;

if(!x){return;
}else if(x instanceof qx.ui.core.Widget){this.placeToWidget(x);
}else if(x.top!==undefined){this.placeToPoint(x);
}else{throw new Error("Unknown target: "+x);
}this.__mr();
}},_onMouseOver:function(e){var u=qx.ui.menu.Manager.getInstance();
u.cancelClose(this);
var v=e.getTarget();

if(v.isEnabled()&&v instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(v);
var t=v.getMenu&&v.getMenu();

if(t){t.setOpener(v);
u.scheduleOpen(t);
this.__mo=t;
}else{var w=this.getOpenedButton();

if(w){u.scheduleClose(w.getMenu());
}
if(this.__mo){u.cancelOpen(this.__mo);
this.__mo=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bh=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bi=this.getOpenedButton();
bi?this.setSelectedButton(bi):this.resetSelectedButton();
if(bi){bh.cancelClose(bi.getMenu());
}if(this.__mo){bh.cancelOpen(this.__mo);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(I,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(X);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__ms:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__ms=[0,0,0,0];
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
},getColumnSizes:function(){return this.__ms||null;
}},destruct:function(){this.__ms=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:o,apply:i,nullable:true},menu:{check:n,apply:l,nullable:true},icon:{check:o,apply:g,themeable:true,nullable:true}},members:{_createChildControlImpl:function(B){var C;

switch(B){case w:C=new qx.ui.basic.Image;
C.setAnonymous(true);
this._add(C,{column:0});
break;
case v:C=new qx.ui.basic.Label;
C.setAnonymous(true);
this._add(C,{column:1});
break;
case t:C=new qx.ui.basic.Label;
C.setAnonymous(true);
this._add(C,{column:2});
break;
case u:C=new qx.ui.basic.Image;
C.setAnonymous(true);
this._add(C,{column:3});
break;
}return C||arguments.callee.base.call(this,B);
},_forwardStates:{selected:1},getChildrenSizes:function(){var D=0,E=0,F=0,J=0;

if(this._isChildControlVisible(w)){var K=this.getChildControl(w);
D=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(v)){var H=this.getChildControl(v);
E=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(t)){var G=this.getChildControl(t);
F=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(u)){var I=this.getChildControl(u);
J=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}return [D,E,F,J];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var c=e.getData();

if(qx.core.Variant.isSet(r,p)){var a=e.getOldData();

if(!a){qx.locale.Manager.getInstance().addListener(s,this._onChangeLocale,this);
}
if(!c){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}var b=c!=null?c.toString():k;
this.getChildControl(t).setValue(b);
},_onChangeLocale:qx.core.Variant.select(r,{"on":function(e){var L=this.getCommand();

if(L!=null){this.getChildControl(t).setValue(L.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(w).setSource(M);
}else{this._excludeChildControl(w);
}},_applyLabel:function(x,y){if(x){this._showChildControl(v).setValue(x);
}else{this._excludeChildControl(v);
}},_applyMenu:function(z,A){if(A){A.resetOpener();
A.removeState(q);
}
if(z){this._showChildControl(u);
z.setOpener(this);
z.addState(q);
}else{this._excludeChildControl(u);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(r,p)){qx.locale.Manager.getInstance().removeListener(s,this._onChangeLocale,this);
}}});
})();
(function(){var p="qx.ui.menu.ButtonLayout",o="qx.debug",n="column",m="left",k="middle",j="' is not supported by the MenuButton layout!",h="The property '";
qx.Class.define(p,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(o,{"on":function(e,name,f){this.assert(name==n,h+name+j);
},"off":null}),renderLayout:function(q,r){var B=this._getLayoutChildren();
var A;
var t;
var u=[];

for(var i=0,l=B.length;i<l;i++){A=B[i];
t=A.getLayoutProperties().column;
u[t]=A;
}var z=this.__mt(B[0]);
var C=z.getColumnSizes();
var w=z.getSpacingX();
var v=qx.lang.Array.sum(C)+w*(C.length-1);

if(v<q){C[1]+=q-v;
}var D=0,top=0;
var x=qx.ui.layout.Util;

for(var i=0,l=C.length;i<l;i++){A=u[i];

if(A){var s=A.getSizeHint();
var top=x.computeVerticalAlignOffset(A.getAlignY()||k,s.height,r,0,0);
var y=x.computeHorizontalAlignOffset(A.getAlignX()||m,s.width,C[i],A.getMarginLeft(),A.getMarginRight());
A.renderLayout(D+y,top,s.width,s.height);
}D+=C[i]+w;
}},__mt:function(g){while(!(g instanceof qx.ui.menu.Menu)){g=g.getLayoutParent();
}return g;
},_computeSizeHint:function(){var c=this._getLayoutChildren();
var b=0;
var d=0;

for(var i=0,l=c.length;i<l;i++){var a=c[i].getSizeHint();
d+=a.width;
b=Math.max(b,a.height);
}return {width:d,height:b};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var A="horizontal",z="scrollpane",y="vertical",x="button-backward",w="button-forward",v="content",u="execute",t="qx.ui.container.SlideBar",s="scrollY",r="removeChildWidget",n="scrollX",q="_applyOrientation",p="mousewheel",m="Integer",l="slidebar",o="update";
qx.Class.define(t,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(I){arguments.callee.base.call(this);
var J=this.getChildControl(z);
this._add(J,{flex:1});

if(I!=null){this.setOrientation(I);
}else{this.initOrientation();
}this.addListener(p,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:l},orientation:{check:[A,y],init:A,apply:q},scrollStep:{check:m,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(v);
},_createChildControlImpl:function(G){var H;

switch(G){case w:H=new qx.ui.form.RepeatButton;
H.addListener(u,this._onExecuteForward,this);
H.setFocusable(false);
this._addAt(H,2);
break;
case x:H=new qx.ui.form.RepeatButton;
H.addListener(u,this._onExecuteBackward,this);
H.setFocusable(false);
this._addAt(H,0);
break;
case v:H=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){H.addListener(r,this._onRemoveChild,this);
}this.getChildControl(z).add(H);
break;
case z:H=new qx.ui.core.scroll.ScrollPane();
H.addListener(o,this._onResize,this);
H.addListener(n,this._onScroll,this);
H.addListener(s,this._onScroll,this);
break;
}return H||arguments.callee.base.call(this,G);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(z);

if(this.getOrientation()===A){C.scrollByX(B);
}else{C.scrollByY(B);
}},scrollTo:function(g){var h=this.getChildControl(z);

if(this.getOrientation()===A){h.scrollToX(g);
}else{h.scrollToY(g);
}},_applyOrientation:function(a,b){var f=[this.getLayout(),this._getLayout()];
var d=this.getChildControl(w);
var c=this.getChildControl(x);
if(b==y){d.removeState(y);
c.removeState(y);
d.addState(A);
c.addState(A);
}else if(b==A){d.removeState(A);
c.removeState(A);
d.addState(y);
c.addState(y);
}
if(a==A){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(f[0]){f[0].dispose();
}
if(f[1]){f[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(z).getChildren()[0];

if(!content){return;
}var i=this.getInnerSize();
var k=content.getBounds();
var j=(this.getOrientation()===A)?k.width>i.width:k.height>i.height;

if(j){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(z).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var E=this.getChildControl(z);

if(this.getOrientation()===A){var D=E.getScrollX();
var F=E.getScrollMaxX();
}else{var D=E.getScrollY();
var F=E.getScrollMaxY();
}this.getChildControl(x).setEnabled(D>0);
this.getChildControl(w).setEnabled(D<F);
},_showArrows:function(){this._showChildControl(w);
this._showChildControl(x);
},_hideArrows:function(){this._excludeChildControl(w);
this._excludeChildControl(x);
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
(function(){var o="pressed",n="abandoned",m="Integer",l="hovered",k="qx.event.type.Event",j="Enter",i="Space",h="press",g="qx.ui.form.RepeatButton",f="release",b="interval",d="__mu",c="execute";
qx.Class.define(g,{extend:qx.ui.form.Button,construct:function(p,q){arguments.callee.base.call(this,p,q);
this.__mu=new qx.event.AcceleratingTimer();
this.__mu.addListener(b,this._onInterval,this);
},events:{"execute":k,"press":k,"release":k},properties:{interval:{check:m,init:100},firstInterval:{check:m,init:500},minTimer:{check:m,init:20},timerDecrease:{check:m,init:2}},members:{__mv:null,__mu:null,press:function(){if(this.isEnabled()){if(!this.hasState(o)){this.__mw();
}this.removeState(n);
this.addState(o);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(o)){if(!this.__mv){this.execute();
}}this.removeState(o);
this.removeState(n);
this.__mx();
},_applyEnabled:function(r,s){arguments.callee.base.call(this,r,s);

if(!r){this.removeState(o);
this.removeState(n);
this.__mx();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
this.__mu.start();
}this.addState(l);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(l);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
this.__mu.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__mw();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(n)){this.addState(l);

if(this.hasState(o)&&!this.__mv){this.execute();
}}this.__mx();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case j:case i:if(this.hasState(o)){if(!this.__mv){this.execute();
}this.removeState(o);
this.removeState(n);
e.stopPropagation();
this.__mx();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case j:case i:this.removeState(n);
this.addState(o);
e.stopPropagation();
this.__mw();
}},_onInterval:function(e){this.__mv=true;
this.fireEvent(c);
},__mw:function(){this.fireEvent(h);
this.__mv=false;
this.__mu.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(n);
this.addState(o);
},__mx:function(){this.fireEvent(f);
this.__mu.stop();
this.removeState(n);
this.removeState(o);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="Integer",d="interval",c="__my",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__my=new qx.event.Timer(this.getInterval());
this.__my.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__my:null,__mz:null,start:function(){this.__my.setInterval(this.getFirstInterval());
this.__my.start();
},stop:function(){this.__my.stop();
this.__mz=null;
},_onInterval:function(){this.__my.stop();

if(this.__mz==null){this.__mz=this.getInterval();
}this.__mz=Math.max(this.getMinimum(),this.__mz-this.getDecrease());
this.__my.setInterval(this.__mz);
this.__my.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var I="resize",H="scrollY",G="update",F="scrollX",E="_applyScrollX",D="_applyScrollY",C="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",B="appear",A="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",z="qx.event.type.Event",v="qx.ui.core.scroll.ScrollPane",w="scroll";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(I,this._onUpdate);
var g=this.getContentElement();
g.addListener(w,this._onScroll,this);
g.addListener(B,this._onAppear,this);
},events:{update:z},properties:{scrollX:{check:C,apply:E,event:F,init:0},scrollY:{check:A,apply:D,event:H,init:0}},members:{add:function(a){var b=this._getChildren()[0];

if(b){this._remove(b);
b.removeListener(I,this._onUpdate,this);
}
if(a){this._add(a);
a.addListener(I,this._onUpdate,this);
}},remove:function(f){if(f){this._remove(f);
f.removeListener(I,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(G);
},_onScroll:function(e){var K=this.getContentElement();
this.setScrollX(K.getScrollX());
this.setScrollY(K.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(L){var top=0;

do{top+=L.getBounds().top;
L=L.getLayoutParent();
}while(L&&L!==this);
return top;
},getItemBottom:function(N){return this.getItemTop(N)+N.getBounds().height;
},getItemLeft:function(h){var i=0;
var parent;

do{i+=h.getBounds().left;
parent=h.getLayoutParent();

if(parent){i+=parent.getInsets().left;
}h=parent;
}while(h&&h!==this);
return i;
},getItemRight:function(J){return this.getItemLeft(J)+J.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var s=this.getInnerSize();
var r=this.getScrollSize();

if(s&&r){return Math.max(0,r.width-s.width);
}return 0;
},getScrollMaxY:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.height-d.height);
}return 0;
},scrollToX:function(t){var u=this.getScrollMaxX();

if(t<0){t=0;
}else if(t>u){t=u;
}this.setScrollX(t);
},scrollToY:function(p){var q=this.getScrollMaxY();

if(p<0){p=0;
}else if(p>q){p=q;
}this.setScrollY(p);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(j){this.getContentElement().scrollToY(j);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="__mA",c="qx.ui.form.HoverButton";
qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){arguments.callee.base.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__mA=new qx.event.AcceleratingTimer();
this.__mA.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__mA:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mA.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__mA.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mA.stop();
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
(function(){var p="container",o="handle",n="both",m="Integer",k="middle",j="qx.ui.toolbar.Part",h="icon",g="label",f="changeShow",e="_applySpacing",d="toolbar/part";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling],construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.HBox);
this._createChildControl(o);
},properties:{appearance:{refine:true,init:d},show:{init:n,check:[n,g,h],inheritable:true,event:f},spacing:{nullable:true,check:m,themeable:true,apply:e}},members:{_createChildControlImpl:function(t){var u;

switch(t){case o:u=new qx.ui.basic.Image();
u.setAlignY(k);
this._add(u);
break;
case p:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||arguments.callee.base.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(p);
},_applySpacing:function(q,r){var s=this.getChildControl(p).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
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
(function(){var l="checked",k="qx.ui.form.RadioGroup",j="Boolean",i="menu-radiobutton",h="_applyValue",g="qx.ui.menu.RadioButton",f="changeValue",d="_applyGroup",c="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){arguments.callee.base.call(this);
if(o!=null){this.setLabel(o);
}
if(p!=null){this.setMenu(p);
}this.addListener(c,this._onExecute,this);
},properties:{appearance:{refine:true,init:i},value:{check:j,nullable:true,event:f,apply:h,init:false},group:{check:k,nullable:true,apply:d}},members:{_applyValue:function(m,n){m?this.addState(l):this.removeState(l);
},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
}},_onExecute:function(e){this.setValue(true);
},_onMouseUp:function(e){if(e.isLeftPressed()){this.execute();
}qx.ui.menu.Manager.getInstance().hideAll();
},_onKeyPress:function(e){this.execute();
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var q="Please use an array as parameter.",p="qx.ui.form.MModelSelection",o="change",n="qx.debug",m="__mB",l="changeSelection",k="on",h="qx.event.type.Data";
qx.Mixin.define(p,{construct:function(){this.__mB=new qx.data.Array();
this.__mB.addListener(o,this.__mE,this);
this.addListener(l,this.__mD,this);
},events:{changeModelSelection:h},members:{__mB:null,__mC:false,__mD:function(){if(this.__mC){return;
}var t=this.getSelection();
var r=[];

for(var i=0;i<t.length;i++){var u=t[i];
var s=u.getModel?u.getModel():null;

if(s!==null){r.push(s);
}}this.setModelSelection(r);
},__mE:function(){this.__mC=true;
var b=this.getSelectables();
var d=[];
var c=this.__mB.toArray();

for(var i=0;i<c.length;i++){var f=c[i];

for(var j=0;j<b.length;j++){var g=b[j];
var a=g.getModel?g.getModel():null;

if(f===a){d.push(g);
break;
}}}this.setSelection(d);
this.__mC=false;
var e=this.getSelection();

if(!qx.lang.Array.equals(e,d)){this.__mD();
}},getModelSelection:function(){return this.__mB;
},setModelSelection:function(v){if(!v){this.__mB.removeAll();
return;
}
if(qx.core.Variant.isSet(n,k)){this.assertArray(v,q);
}v.unshift(this.__mB.getLength());
v.unshift(0);
var w=this.__mB.splice.apply(this.__mB,v);
w.dispose();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var y="Boolean",x="changeValue",w="_applyAllowEmptySelection",v="_applyInvalidMessage",u="qx.ui.form.RadioGroup",t="_applyValid",s="",r="changeRequired",q="changeValid",p="changeEnabled",m="changeInvalidMessage",o="__mF",n="changeSelection",k="_applyEnabled",j="String";
qx.Class.define(u,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(N){arguments.callee.base.call(this);
this.__mF=[];
this.addListener(n,this.__mG,this);

if(N!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:y,apply:k,event:p,init:true},wrap:{check:y,init:true},allowEmptySelection:{check:y,init:false,apply:w},valid:{check:y,init:true,apply:t,event:q},required:{check:y,init:false,event:r},invalidMessage:{check:j,init:s,event:m,apply:v}},members:{__mF:null,getItems:function(){return this.__mF;
},add:function(a){var b=this.__mF;
var c;

for(var i=0,l=arguments.length;i<l;i++){c=arguments[i];

if(qx.lang.Array.contains(b,c)){continue;
}c.addListener(x,this._onItemChangeChecked,this);
b.push(c);
c.setGroup(this);
if(c.getValue()){this.setSelection([c]);
}}if(!this.isAllowEmptySelection()&&b.length>0&&!this.getSelection()[0]){this.setSelection([b[0]]);
}},remove:function(O){var P=this.__mF;

if(qx.lang.Array.contains(P,O)){qx.lang.Array.remove(P,O);
if(O.getGroup()===this){O.resetGroup();
}O.removeListener(x,this._onItemChangeChecked,this);
if(O.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__mF;
},_onItemChangeChecked:function(e){var E=e.getTarget();

if(E.getValue()){this.setSelection([E]);
}else if(this.getSelection()[0]==E){this.resetSelection();
}},_applyInvalidMessage:function(g,h){for(var i=0;i<this.__mF.length;i++){this.__mF[i].setInvalidMessage(g);
}},_applyValid:function(L,M){for(var i=0;i<this.__mF.length;i++){this.__mF[i].setValid(L);
}},_applyEnabled:function(I,J){var K=this.__mF;

if(I==null){for(var i=0,l=K.length;i<l;i++){K[i].resetEnabled();
}}else{for(var i=0,l=K.length;i<l;i++){K[i].setEnabled(I);
}}},_applyAllowEmptySelection:function(C,D){if(!C&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var z=this.getSelection()[0];
var B=this.__mF;
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
},selectPrevious:function(){var F=this.getSelection()[0];
var H=this.__mF;
var G=H.indexOf(F);

if(G==-1){return;
}var i=0;
var length=H.length;
if(this.getWrap()){G=(G-1+length)%length;
}else{G=Math.max(G-1,0);
}
while(i<length&&!H[G].getEnabled()){G=(G-1+length)%length;
i++;
}this.setSelection([H[G]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__mG:function(e){var f=e.getData()[0];
var d=e.getOldData()[0];

if(d){d.setValue(false);
}
if(f){f.setValue(true);
}}},destruct:function(){this._disposeArray(o);
}});
})();
(function(){var j="[",i="]",h=".",g="idBubble",f="changeBubble",d="qx.data.marshal.MEventBubbling",c="qx.event.type.Data";
qx.Mixin.define(d,{events:{"changeBubble":c},members:{_applyEventPropagation:function(a,b,name){this.fireDataEvent(f,{value:a,name:name,old:b});
this._registerEventChaining(a,b,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__mH,this,name);
var v=s.addListener(f,u,this);
s.setUserData(g,v);
}if(t!=null&&t.getUserData&&t.getUserData(g)!=null){t.removeListenerById(t.getUserData(g));
}},__mH:function(name,e){var r=e.getData();
var n=r.value;
var l=r.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(r.name.indexOf){var q=r.name.indexOf(h)!=-1?r.name.indexOf(h):r.name.length;
var o=r.name.indexOf(j)!=-1?r.name.indexOf(j):r.name.length;

if(q<o){var k=r.name.substring(0,q);
var p=r.name.substring(q+1,r.name.length);

if(p[0]!=j){p=h+p;
}var m=name+j+k+i+p;
}else if(o<q){var k=r.name.substring(0,o);
var p=r.name.substring(o,r.name.length);
var m=name+j+k+i+p;
}else{var m=name+j+r.name+i;
}}else{var m=name+j+r.name+i;
}}else{var m=name+h+r.name;
}this.fireDataEvent(f,{value:n,name:m,old:l});
}}});
})();
(function(){var be="change",bd="add",bc="remove",bb="order",ba="The parameter must be an array.",Y="",X="qx.data.Array",W="?",V="changeBubble",U="qx.event.type.Event",R="number",T="on",S="changeLength",Q="qx.debug",P="qx.event.type.Data";
qx.Class.define(X,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(bk){arguments.callee.base.call(this);
if(bk==undefined){this.__mI=[];
}else if(arguments.length>1){this.__mI=[];

for(var i=0;i<arguments.length;i++){this.__mI.push(arguments[i]);
}}else if(typeof bk==R){this.__mI=new Array(bk);
}else if(bk instanceof Array){this.__mI=qx.lang.Array.clone(bk);
}else{this.__mI=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__mI.length;i++){this._applyEventPropagation(this.__mI[i],null,i);
}this.__mJ();
},events:{"change":P,"changeLength":U},members:{__mI:null,concat:function(r){if(r){var s=this.__mI.concat(r);
}else{var s=this.__mI.concat();
}return new qx.data.Array(s);
},join:function(J){return this.__mI.join(J);
},pop:function(){var bj=this.__mI.pop();
this.__mJ();
this._applyEventPropagation(null,bj,this.length-1);
this.fireDataEvent(be,{start:this.length-1,end:this.length-1,type:bc,items:[bj]},null);
return bj;
},push:function(a){for(var i=0;i<arguments.length;i++){this.__mI.push(arguments[i]);
this.__mJ();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(be,{start:this.length-1,end:this.length-1,type:bd,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__mI.reverse();
this.fireDataEvent(be,{start:0,end:this.length-1,type:bb,items:null},null);
},shift:function(){var o=this.__mI.shift();
this.__mJ();
this._applyEventPropagation(null,o);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bc,items:[o]},null);
return o;
},slice:function(t,u){return new qx.data.Array(this.__mI.slice(t,u));
},splice:function(A,B,C){var I=this.__mI.length;
var F=this.__mI.splice.apply(this.__mI,arguments);
if(this.__mI.length!=I){this.__mJ();
}var G=B>0;
var D=arguments.length>2;
var E=null;

if(G||D){if(this.__mI.length>I){var H=bd;
}else if(this.__mI.length<I){var H=bc;
E=F;
}else{var H=bb;
}this.fireDataEvent(be,{start:A,end:this.length-1,type:H,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,A+i);
}this.fireDataEvent(V,{value:this,name:W,old:F});
for(var i=0;i<F.length;i++){this._applyEventPropagation(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(b){this.__mI.sort.apply(this.__mI,arguments);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bb,items:null},null);
},unshift:function(K){for(var i=arguments.length-1;i>=0;i--){this.__mI.unshift(arguments[i]);
this.__mJ();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(be,{start:0,end:this.length-1,type:bd,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__mI;
},getItem:function(z){return this.__mI[z];
},setItem:function(d,e){var f=this.__mI[d];
this.__mI[d]=e;
this._applyEventPropagation(e,f,d);
if(this.length!=this.__mI.length){this.__mJ();
}this.fireDataEvent(be,{start:d,end:d,type:bd,items:[e]},null);
},getLength:function(){return this.length;
},indexOf:function(c){return this.__mI.indexOf(c);
},toString:function(){if(this.__mI!=null){return this.__mI.toString();
}return Y;
},contains:function(bf){return this.__mI.indexOf(bf)!==-1;
},copy:function(){return this.concat();
},insertAt:function(p,q){this.splice(p,0,q);
},insertBefore:function(g,h){var j=this.indexOf(g);

if(j==-1){this.push(h);
}else{this.splice(j,0,h);
}},insertAfter:function(L,M){var N=this.indexOf(L);

if(N==-1||N==(this.length-1)){this.push(M);
}else{this.splice(N+1,0,M);
}},removeAt:function(l){return this.splice(l,1)[0];
},removeAll:function(){for(var i=0;i<this.__mI.length;i++){this._applyEventPropagation(null,this.__mI[i],i);
}var y=this.getLength();
var x=this.__mI.concat();
this.__mI.length=0;
this.__mJ();
this.fireDataEvent(be,{start:0,end:y-1,type:bc,items:x},null);
},append:function(bi){if(qx.core.Variant.isSet(Q,T)){qx.core.Assert.assertArray(bi,ba);
}for(var i=0;i<bi.length;i++){this._applyEventPropagation(bi[i],null,this.__mI.length+i);
}Array.prototype.push.apply(this.__mI,bi);
this.__mJ();
},remove:function(bg){var bh=this.indexOf(bg);

if(bh!=-1){this.splice(bh,1);
return bg;
}},equals:function(O){if(this.length!==O.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==O.getItem(i)){return false;
}}return true;
},sum:function(){var w=0;

for(var i=0;i<this.length;i++){w+=this.getItem(i);
}return w;
},max:function(){var k=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>k){k=this.getItem(i);
}}return k===undefined?null:k;
},min:function(){var v=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<v){v=this.getItem(i);
}}return v===undefined?null:v;
},forEach:function(m,n){for(var i=0;i<this.__mI.length;i++){m.call(n,this.__mI[i]);
}},__mJ:function(){this.length=this.__mI.length;
this.fireEvent(S,qx.event.type.Event);
}},destruct:function(){this.__mI=null;
}});
})();
(function(){var e="arrow",d="qx.ui.toolbar.MenuButton",c="Boolean",b="_applyShowArrow",a="toolbar-menubutton";
qx.Class.define(d,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:a},showArrow:{check:c,init:false,themeable:true,apply:b}},members:{_createChildControlImpl:function(f){var g;

switch(f){case e:g=new qx.ui.basic.Image();
g.setAnonymous(true);
this._addAt(g,10);
break;
}return g||arguments.callee.base.call(this,f);
},_applyShowArrow:function(h,i){if(h){this._showChildControl(e);
}else{this._excludeChildControl(e);
}}}});
})();
(function(){var s="pressed",r="abandoned",q="hovered",p="checked",o="Space",n="Enter",m="mouseup",l="mousedown",k="Boolean",j="_applyValue",c="mouseover",i="mouseout",g="qx.ui.form.ToggleButton",b="keydown",a="changeValue",f="button",d="keyup",h="execute";
qx.Class.define(g,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(t,u){arguments.callee.base.call(this,t,u);
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
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){arguments.callee.base.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var f="qx.ui.form.RadioGroup",e="_applyGroup",d="qx.ui.toolbar.RadioButton";
qx.Class.define(d,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:f,apply:e,nullable:true}},members:{_applyValue:function(a,b){arguments.callee.base.call(this,a,b);

if(a){var c=this.getGroup();

if(c){c.setSelection([this]);
}}},_applyGroup:function(g,h){if(h){h.remove(this);
}
if(g){g.add(this);
}}}});
})();
(function(){var j="String",i="qx.ui.embed.AbstractIframe",h="name",g="",f="_applySource",e="qx.event.type.Event",d="_applyFrameName";
qx.Class.define(i,{extend:qx.ui.core.Widget,construct:function(c){arguments.callee.base.call(this);

if(c){this.setSource(c);
}},events:{"load":e},properties:{source:{check:j,apply:f,nullable:true},frameName:{check:j,init:g,apply:d}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(a,b){this._getIframeElement().setSource(a);
},_applyFrameName:function(k,l){this._getIframeElement().setAttribute(h,k);
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
(function(){var o="qx.client",n="mousedown",m="load",l="help",k="mouseup",j="losecapture",i="contextmenu",h="none",g="display",f="repeat",F="Boolean",E="px",D="url(",C=")",B="gecko",A="div",z="DOMNodeInserted",y="_applyNativeHelp",x="/",w="appear",u="mshtml",v="block",s="qx.ui.embed.Iframe",t="iframe",q="__mL",r="absolute",p="qx/static/blank.gif";
qx.Class.define(s,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(S){if(S!=null){this.__mK=S;
}arguments.callee.base.call(this,S);
qx.event.Registration.addListener(document.body,n,this.block,this,true);
qx.event.Registration.addListener(document.body,k,this.release,this,true);
qx.event.Registration.addListener(document.body,j,this.release,this,true);
this.__mL=this._createBlockerElement();
this.getContainerElement().add(this.__mL);

if(qx.core.Variant.isSet(o,B)){this.addListenerOnce(w,function(e){var R=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(R,z,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:t},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:F,init:false,apply:y}},members:{__mK:null,__mL:null,renderLayout:function(G,top,H,I){arguments.callee.base.call(this,G,top,H,I);
var K=E;
var J=this.getInsets();
this.__mL.setStyles({"left":J.left+K,"top":J.top+K,"width":(H-J.left-J.right)+K,"height":(I-J.top-J.bottom)+K});
},_createContentElement:function(){var d=new qx.html.Iframe(this.__mK);
d.addListener(m,this._onIframeLoad,this);
return d;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var a=new qx.html.Element(A);
a.setStyles({"zIndex":20,"position":r,"display":h});
if(qx.core.Variant.isSet(o,u)){a.setStyles({backgroundImage:D+qx.util.ResourceManager.getInstance().toUri(p)+C,backgroundRepeat:f});
}return a;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(m);
},block:function(){this.__mL.setStyle(g,v);
},release:function(){this.__mL.setStyle(g,h);
},_applyNativeContextMenu:function(L,M){if(L!==false&&M!==false){return;
}var N=this.getDocument();

if(!N){return;
}
try{var O=N.documentElement;
}catch(e){return ;
}
if(M===false){qx.event.Registration.removeListener(O,i,this._onNativeContextMenu,this,true);
}
if(L===false){qx.event.Registration.addListener(O,i,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(o,{"mshtml":function(P,Q){var document=this.getDocument();

if(!document){return;
}
try{if(Q===false){qx.bom.Event.removeNativeListener(document,l,qx.lang.Function.returnFalse);
}
if(P===false){qx.bom.Event.addNativeListener(document,l,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var c=this.getContentElement().getDomElement();
var b=c.src;
if(b.charAt(b.length-1)==x){b=b.substring(0,b.length-1);
}
if(b!=this.getSource()){qx.bom.Iframe.getWindow(c).stop();
c.src=this.getSource();
}}},destruct:function(){this._disposeObjects(q);
qx.event.Registration.removeListener(document.body,n,this.block,this,true);
qx.event.Registration.removeListener(document.body,k,this.release,this,true);
qx.event.Registration.removeListener(document.body,j,this.release,this,true);
}});
})();
(function(){var e="source",d="name",c="qx.html.Iframe",b="qx.event.type.Event",a="iframe";
qx.Class.define(c,{extend:qx.html.Element,construct:function(l){arguments.callee.base.call(this,a);
this._setProperty(e,l);
},events:{"load":b},members:{_applyProperty:function(name,f){arguments.callee.base.call(this,name,f);

if(name==e){var g=this.getDomElement();
qx.bom.Iframe.setSource(g,f);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var h=this.getDomElement();

if(h){return qx.bom.Iframe.getWindow(h);
}else{return null;
}},getDocument:function(){var m=this.getDomElement();

if(m){return qx.bom.Iframe.getDocument(m);
}else{return null;
}},getBody:function(){var i=this.getDomElement();

if(i){return qx.bom.Iframe.getBody(i);
}else{return null;
}},setSource:function(n){this._setProperty(e,n);
return this;
},getSource:function(){return this._getProperty(e);
},setName:function(name){this.setAttribute(d,name);
return this;
},getName:function(){return this.getAttribute(d);
},reload:function(){var k=this.getDomElement();

if(k){var j=this.getSource();
this.setSource(null);
this.setSource(j);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__mM:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__mM=null;
},getInsets:function(){if(this.__mM){return this.__mM;
}var l=this._getDefaultInsets();
return this.__mM={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__mM=null;
}},destruct:function(){this.__mM=null;
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
(function(){var n="px",m="qx.ui.decoration.Background",l="",k="qx.debug",j="_applyStyle",i="on",h="Color",g="absolute";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(d){arguments.callee.base.call(this);

if(d!=null){this.setBackgroundColor(d);
}},properties:{backgroundColor:{check:h,nullable:true,apply:j}},members:{__mN:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mN;
},getMarkup:function(){if(this.__mN){return this.__mN;
}var e={position:g,top:0,left:0};
var f=this._generateBackgroundMarkup(e);
return this.__mN=f;
},resize:function(o,p,q){o.style.width=p+n;
o.style.height=q+n;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.style.backgroundColor=c.resolve(b)||l;
},_applyStyle:function(){if(qx.core.Variant.isSet(k,i)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__mN=null;
}});
})();
(function(){var t="none",s="text",r="",q="userSelect",p="color",o="String",n="0px",m="webkit",l="changeHtml",k="_applyCssClass",h="class",j="qx.ui.embed.Html",i="_applyHtml",g="qx.client",f="html";
qx.Class.define(j,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(x){arguments.callee.base.call(this);

if(x!=null){this.setHtml(x);
}},properties:{html:{check:o,apply:i,event:l,nullable:true},cssClass:{check:o,init:r,apply:k},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(u,v){var w=this.getContentElement();
w.setAttribute(f,u||r);
w.setStyles({"padding":n,"border":t});
},_applyCssClass:function(z,A){this.getContentElement().setAttribute(h,z);
},_applySelectable:function(y){arguments.callee.base.call(this,y);
if(qx.core.Variant.isSet(g,m)){this.getContainerElement().setStyle(q,y?s:t);
this.getContentElement().setStyle(q,y?s:t);
}},_applyFont:function(a,b){var c=a?qx.theme.manager.Font.getInstance().resolve(a).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(c);
},_applyTextColor:function(d,e){if(d){this.getContentElement().setStyle(p,qx.theme.manager.Color.getInstance().resolve(d));
}else{this.getContentElement().removeStyle(p);
}}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(u){arguments.callee.base.call(this);
var v=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(v.join(q));
qx.log.Logger.register(this);
},members:{__mO:null,setElement:function(t){this.clear();
if(t){qx.bom.element.Class.add(t,j);
}this.__mO=t;
},clear:function(){var w=this.__mO;
if(w){w.innerHTML=q;
}},process:function(r){var s=this.__mO;

if(!s){return;
}s.appendChild(qx.log.appender.Util.toHtml(r));
s.scrollTop=s.scrollHeight;
}},destruct:function(){this.__mO=null;
}});
})();
(function(){var f="(\\s|$)",e="(^|\\s)",d="",c="qx.bom.element.Class",b=" ",a="$2";
qx.Class.define(c,{statics:{add:function(i,name){if(!this.has(i,name)){i.className+=(i.className?b:d)+name;
}return name;
},get:function(j){return j.className;
},has:function(g,name){var h=new RegExp(e+name+f);
return h.test(g.className);
},remove:function(k,name){var l=new RegExp(e+name+f);
k.className=k.className.replace(l,a);
return name;
},replace:function(m,n,o){this.remove(m,n);
return this.add(m,o);
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
(function(){var x="scrollbar-y",w="scrollbar-x",v="pane",u="auto",t="corner",s="on",r="changeVisibility",q="scroll",p="_computeScrollbars",o="off",h="scrollY",n="qx.ui.core.scroll.AbstractScrollArea",k="abstract",f="update",d="scrollX",j="mousewheel",i="scrollbarY",l="scrollbarX",c="horizontal",m="scrollarea",g="vertical";
qx.Class.define(n,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:k,construct:function(){arguments.callee.base.call(this);
var T=new qx.ui.layout.Grid();
T.setColumnFlex(0,1);
T.setRowFlex(0,1);
this._setLayout(T);
this.addListener(j,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:m},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[u,s,o],init:u,themeable:true,apply:p},scrollbarY:{check:[u,s,o],init:u,themeable:true,apply:p},scrollbar:{group:[l,i]}},members:{_createChildControlImpl:function(C){var D;

switch(C){case v:D=new qx.ui.core.scroll.ScrollPane();
D.addListener(f,this._computeScrollbars,this);
D.addListener(d,this._onScrollPaneX,this);
D.addListener(h,this._onScrollPaneY,this);
this._add(D,{row:0,column:0});
break;
case w:D=this._createScrollBar(c);
D.setMinWidth(0);
D.exclude();
D.addListener(q,this._onScrollBarX,this);
D.addListener(r,this._onChangeScrollbarXVisibility,this);
this._add(D,{row:1,column:0});
break;
case x:D=this._createScrollBar(g);
D.setMinHeight(0);
D.exclude();
D.addListener(q,this._onScrollBarY,this);
D.addListener(r,this._onChangeScrollbarYVisibility,this);
this._add(D,{row:0,column:1});
break;
case t:D=new qx.ui.core.Widget();
D.setWidth(0);
D.setHeight(0);
D.exclude();
this._add(D,{row:1,column:1});
break;
}return D||arguments.callee.base.call(this,C);
},getPaneSize:function(){return this.getChildControl(v).getInnerSize();
},getItemTop:function(V){return this.getChildControl(v).getItemTop(V);
},getItemBottom:function(U){return this.getChildControl(v).getItemBottom(U);
},getItemLeft:function(y){return this.getChildControl(v).getItemLeft(y);
},getItemRight:function(W){return this.getChildControl(v).getItemRight(W);
},scrollToX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollTo(ba);
},scrollByX:function(A){qx.ui.core.queue.Manager.flush();
this.getChildControl(w).scrollBy(A);
},getScrollX:function(){var H=this.getChildControl(w,true);
return H?H.getPosition():0;
},scrollToY:function(z){qx.ui.core.queue.Manager.flush();
this.getChildControl(x).scrollTo(z);
},scrollByY:function(B){qx.ui.core.queue.Manager.flush();
this.getChildControl(x).scrollBy(B);
},getScrollY:function(){var I=this.getChildControl(x,true);
return I?I.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(v).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(v).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var F=this._isChildControlVisible(w);
var G=this._isChildControlVisible(x);
var E=(G)?this.getChildControl(x,true):(F?this.getChildControl(w,true):null);

if(E){E.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var X=this._isChildControlVisible(w);
var Y=this._isChildControlVisible(x);

if(!X){this.scrollToX(0);
}X&&Y?this._showChildControl(t):this._excludeChildControl(t);
},_onChangeScrollbarYVisibility:function(e){var a=this._isChildControlVisible(w);
var b=this._isChildControlVisible(x);

if(!b){this.scrollToY(0);
}a&&b?this._showChildControl(t):this._excludeChildControl(t);
},_computeScrollbars:function(){var P=this.getChildControl(v);
var content=P.getChildren()[0];

if(!content){this._excludeChildControl(w);
this._excludeChildControl(x);
return;
}var J=this.getInnerSize();
var O=P.getInnerSize();
var M=P.getScrollSize();
if(!O||!M){return;
}var Q=this.getScrollbarX();
var R=this.getScrollbarY();

if(Q===u&&R===u){var N=M.width>J.width;
var S=M.height>J.height;
if((N||S)&&!(N&&S)){if(N){S=M.height>O.height;
}else if(S){N=M.width>O.width;
}}}else{var N=Q===s;
var S=R===s;
if(M.width>(N?O.width:J.width)&&Q===u){N=true;
}
if(M.height>(N?O.height:J.height)&&R===u){S=true;
}}if(N){var L=this.getChildControl(w);
L.show();
L.setMaximum(Math.max(0,M.width-O.width-1));
L.setKnobFactor(O.width/M.width);
}else{this._excludeChildControl(w);
}
if(S){var K=this.getChildControl(x);
K.show();
K.setMaximum(Math.max(0,M.height-O.height-1));
K.setKnobFactor(O.height/M.height);
}else{this._excludeChildControl(x);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var E="single",D="Boolean",C="one",B="changeSelection",A="mouseup",z="mousedown",y="losecapture",x="multi",w="_applyQuickSelection",v="__mP",o="mouseover",u="_applySelectionMode",r="_applyDragSelection",n="qx.ui.core.MMultiSelectionHandling",m="removeItem",q="keypress",p="qx.event.type.Data",s="addItem",l="additive",t="mousemove";
qx.Mixin.define(n,{construct:function(){var b=this.SELECTION_MANAGER;
var a=this.__mP=new b(this);
this.addListener(z,a.handleMouseDown,a);
this.addListener(A,a.handleMouseUp,a);
this.addListener(o,a.handleMouseOver,a);
this.addListener(t,a.handleMouseMove,a);
this.addListener(y,a.handleLoseCapture,a);
this.addListener(q,a.handleKeyPress,a);
this.addListener(s,a.handleAddItem,a);
this.addListener(m,a.handleRemoveItem,a);
a.addListener(B,this._onSelectionChange,this);
},events:{"changeSelection":p},properties:{selectionMode:{check:[E,x,l,C],init:E,apply:u},dragSelection:{check:D,init:false,apply:r},quickSelection:{check:D,init:false,apply:w}},members:{__mP:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong all items."));
this.trace();
}this.__mP.selectAll();
},isSelected:function(I){if(!qx.ui.core.Widget.contains(this,I)){throw new Error("Could not test if "+I+" is selected, because it is not a child element!");
}return this.__mP.isItemSelected(I);
},addToSelection:function(J){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not add + "+J+" to selection, because it is not a child element!");
}this.__mP.addItem(J);
},removeFromSelection:function(f){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,f)){throw new Error("Could not remove "+f+" from selection, because it is not a child element!");
}this.__mP.removeItem(f);
},selectRange:function(G,H){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__mP.selectItemRange(G,H);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selectiong."));
this.trace();
}this.__mP.clearSelection();
},setSelection:function(K){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<K.length;i++){if(!qx.ui.core.Widget.contains(this,K[i])){throw new Error("Could not select "+K[i]+", because it is not a child element!");
}}
if(K.length===0){this.resetSelection();
}else{var L=this.getSelection();

if(!qx.lang.Array.equals(L,K)){this.__mP.replaceSelection(K);
}}},getSelection:function(){return this.__mP.getSelection();
},getSortedSelection:function(){return this.__mP.getSortedSelection();
},isSelectionEmpty:function(){return this.__mP.isSelectionEmpty();
},getSelectionContext:function(){return this.__mP.getSelectionContext();
},_getManager:function(){return this.__mP;
},getSelectables:function(){return this.__mP.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}this.__mP.invertSelection();
},_getLeadItem:function(){var F=this.__mP.getMode();

if(F===E||F===C){return this.__mP.getSelectedItem();
}else{return this.__mP.getLeadItem();
}},_applySelectionMode:function(j,k){this.__mP.setMode(j);
},_applyDragSelection:function(c,d){this.__mP.setDrag(c);
},_applyQuickSelection:function(g,h){this.__mP.setQuick(g);
},_onSelectionChange:function(e){this.fireDataEvent(B,e.getData());
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mQ:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mR:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mR[name];
s[t]();
}else{var u=this.__mQ[name];
s[u](q);
}}}});
})();
(function(){var p="one",o="single",n="selected",m="additive",k="multi",j="PageUp",h="under",g="Left",f="lead",d="Down",Q="Up",P="Boolean",O="PageDown",N="anchor",M="End",L="Home",K="Right",J="right",I="click",H="above",w="left",x="Escape",u="drag",v="Space",s="A",t="_applyMode",q="qx.debug",r="interval",y="changeSelection",z="Please use public 'getLeadItem' instead.",C="qx.event.type.Data",B="quick",E="key",D="__mV",G="abstract",F="on",A="qx.ui.core.selection.Abstract";
qx.Class.define(A,{type:G,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__mS={};
},events:{"changeSelection":C},properties:{mode:{check:[o,k,m,p],init:o,apply:t},drag:{check:P,init:false},quick:{check:P,init:false}},members:{__mT:0,__mU:0,__mV:null,__mW:null,__mX:null,__mY:null,__na:null,__nb:null,__nc:null,__nd:null,__ne:null,__nf:null,__ng:null,__nh:null,__ni:null,__nj:null,__nk:null,__mS:null,__nl:null,__nm:null,getSelectionContext:function(){return this.__nj;
},selectAll:function(){var cp=this.getMode();

if(cp==o||cp==p){throw new Error("Can not select all items in selection mode: "+cp);
}this._selectAllItems();
this._fireChange();
},selectItem:function(cX){this._setSelectedItem(cX);
var cY=this.getMode();

if(cY!==o&&cY!==p){this._setLeadItem(cX);
this._setAnchorItem(cX);
}this._scrollItemIntoView(cX);
this._fireChange();
},addItem:function(cq){var cr=this.getMode();

if(cr===o||cr===p){this._setSelectedItem(cq);
}else{if(!this._getAnchorItem()){this._setAnchorItem(cq);
}this._setLeadItem(cq);
this._addToSelection(cq);
}this._scrollItemIntoView(cq);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===p&&this.isSelectionEmpty()){var V=this._getFirstSelectable();

if(V){this.addItem(V);
}if(V==U){return;
}}
if(this.getLeadItem()==U){this._setLeadItem(null);
}
if(this._getAnchorItem()==U){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(cU,cV){var cW=this.getMode();

if(cW==o||cW==p){throw new Error("Can not select multiple items in selection mode: "+cW);
}this._selectItemRange(cU,cV);
this._setAnchorItem(cU);
this._setLeadItem(cV);
this._scrollItemIntoView(cV);
this._fireChange();
},clearSelection:function(){if(this.getMode()==p){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bi){var bj=this.getMode();

if(bj==p||bj===o){if(bi.length>1){throw new Error("Could not select more than one items in mode: "+bj+"!");
}
if(bi.length==1){this.selectItem(bi[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bi);
}},getSelectedItem:function(){var T=this.getMode();

if(T===o||T===p){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__mS);
},getSortedSelection:function(){var X=this.getSelectables();
var W=qx.lang.Object.getValues(this.__mS);
W.sort(function(a,b){return X.indexOf(a)-X.indexOf(b);
});
return W;
},isItemSelected:function(bR){var bS=this._selectableToHashCode(bR);
return this.__mS[bS]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__mS);
},invertSelection:function(){var co=this.getMode();

if(co===o||co===p){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cn=this.getSelectables();

for(var i=0;i<cn.length;i++){this._toggleInSelection(cn[i]);
}this._fireChange();
},_setLeadItem:function(cS){var cT=this.__nk;

if(cT!==null){this._styleSelectable(cT,f,false);
}
if(cS!==null){this._styleSelectable(cS,f,true);
}this.__nk=cS;
},_getLeadItem:function(){if(qx.core.Variant.isSet(q,F)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z);
}return this.getLeadItem();
},getLeadItem:function(){return this.__nk!==null?this.__nk:null;
},_setAnchorItem:function(bn){var bo=this.__nl;

if(bo){this._styleSelectable(bo,N,false);
}
if(bn){this._styleSelectable(bn,N,true);
}this.__nl=bn;
},_getAnchorItem:function(){return this.__nl!==null?this.__nl:null;
},_isSelectable:function(bq){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var c=event.getTarget();
return this._isSelectable(c)?c:null;
},_selectableToHashCode:function(cR){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cH,cI,cJ){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(cC){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(cK){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bG,bH){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bp){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(R,S){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bX,bY){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(cF,cG){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(br,bs){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(br===p){var bt=this._getFirstSelectable();

if(bt){this._setSelectedItem(bt);
this._scrollItemIntoView(bt);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bQ=this.getMode();

if(bQ!==p&&bQ!==o){return;
}var bP=this._getSelectableFromMouseEvent(event);

if(bP===null){return;
}this._setSelectedItem(bP);
this._fireChange(B);
},handleMouseDown:function(event){var be=this._getSelectableFromMouseEvent(event);

if(be===null){return;
}var bg=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bd=event.isShiftPressed();
if(this.isItemSelected(be)&&!bd&&!bg&&!this.getDrag()){this.__nm=be;
return;
}else{this.__nm=null;
}this._scrollItemIntoView(be);
switch(this.getMode()){case o:case p:this._setSelectedItem(be);
break;
case m:this._setLeadItem(be);
this._setAnchorItem(be);
this._toggleInSelection(be);
break;
case k:this._setLeadItem(be);
if(bd){var bf=this._getAnchorItem();

if(bf===null){bf=this._getFirstSelectable();
this._setAnchorItem(bf);
}this._selectItemRange(bf,be,bg);
}else if(bg){this._setAnchorItem(be);
this._toggleInSelection(be);
}else{this._setAnchorItem(be);
this._setSelectedItem(be);
}break;
}var bh=this.getMode();

if(this.getDrag()&&bh!==o&&bh!==p&&!bd&&!bg){this.__na=this._getLocation();
this.__mW=this._getScroll();
this.__nb=event.getDocumentLeft()+this.__mW.left;
this.__nc=event.getDocumentTop()+this.__mW.top;
this.__nd=true;
this._capture();
}this._fireChange(I);
},handleMouseUp:function(event){var bW=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bT=event.isShiftPressed();

if(!bW&&!bT&&this.__nm){var bU=this._getSelectableFromMouseEvent(event);

if(bU===null||!this.isItemSelected(bU)){return;
}var bV=this.getMode();

if(bV===m){this._removeFromSelection(bU);
}else{this._setSelectedItem(bU);

if(this.getMode()===k){this._setLeadItem(bU);
this._setAnchorItem(bU);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__nd){return;
}this.__ne=event.getDocumentLeft();
this.__nf=event.getDocumentTop();
var cM=this.__ne+this.__mW.left;

if(cM>this.__nb){this.__ng=1;
}else if(cM<this.__nb){this.__ng=-1;
}else{this.__ng=0;
}var cL=this.__nf+this.__mW.top;

if(cL>this.__nc){this.__nh=1;
}else if(cL<this.__nc){this.__nh=-1;
}else{this.__nh=0;
}var location=this.__na;

if(this.__ne<location.left){this.__mT=this.__ne-location.left;
}else if(this.__ne>location.right){this.__mT=this.__ne-location.right;
}else{this.__mT=0;
}
if(this.__nf<location.top){this.__mU=this.__nf-location.top;
}else if(this.__nf>location.bottom){this.__mU=this.__nf-location.bottom;
}else{this.__mU=0;
}if(!this.__mV){this.__mV=new qx.event.Timer(100);
this.__mV.addListener(r,this._onInterval,this);
}this.__mV.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var da=e.getData();

if(this.getMode()===p&&this.isSelectionEmpty()){this.addItem(da);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__nd){return;
}if(this.__ni){this._fireChange(I);
}delete this.__nd;
delete this.__mX;
delete this.__mY;
this._releaseCapture();
if(this.__mV){this.__mV.stop();
}},_onInterval:function(e){this._scrollBy(this.__mT,this.__mU);
this.__mW=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bC=this._getDimension();
var bv=Math.max(0,Math.min(this.__ne-this.__na.left,bC.width))+this.__mW.left;
var bu=Math.max(0,Math.min(this.__nf-this.__na.top,bC.height))+this.__mW.top;
if(this.__mX===bv&&this.__mY===bu){return;
}this.__mX=bv;
this.__mY=bu;
var bE=this._getAnchorItem();
var bx=bE;
var bA=this.__ng;
var bD,bw;

while(bA!==0){bD=bA>0?this._getRelatedSelectable(bx,J):this._getRelatedSelectable(bx,w);
if(bD!==null){bw=this._getSelectableLocationX(bD);
if((bA>0&&bw.left<=bv)||(bA<0&&bw.right>=bv)){bx=bD;
continue;
}}break;
}var bB=this.__nh;
var bz,by;

while(bB!==0){bz=bB>0?this._getRelatedSelectable(bx,h):this._getRelatedSelectable(bx,H);
if(bz!==null){by=this._getSelectableLocationY(bz);
if((bB>0&&by.top<=bu)||(bB<0&&by.bottom>=bu)){bx=bz;
continue;
}}break;
}var bF=this.getMode();

if(bF===k){this._selectItemRange(bE,bx);
}else if(bF===m){if(this.isItemSelected(bE)){this._selectItemRange(bE,bx,true);
}else{this._deselectItemRange(bE,bx);
}this._setAnchorItem(bx);
}this._fireChange(u);
},__nn:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cj,ci;
var cl=event.getKeyIdentifier();
var ck=this.getMode();
var cf=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cg=event.isShiftPressed();
var ch=false;

if(cl===s&&cf){if(ck!==o&&ck!==p){this._selectAllItems();
ch=true;
}}else if(cl===x){if(ck!==o&&ck!==p){this._clearSelection();
ch=true;
}}else if(cl===v){var ce=this.getLeadItem();

if(ce&&!cg){if(cf||ck===m){this._toggleInSelection(ce);
}else{this._setSelectedItem(ce);
}ch=true;
}}else if(this.__nn[cl]){ch=true;

if(ck===o||ck==p){cj=this._getSelectedItem();
}else{cj=this.getLeadItem();
}
if(cj!==null){switch(cl){case L:ci=this._getFirstSelectable();
break;
case M:ci=this._getLastSelectable();
break;
case Q:ci=this._getRelatedSelectable(cj,H);
break;
case d:ci=this._getRelatedSelectable(cj,h);
break;
case g:ci=this._getRelatedSelectable(cj,w);
break;
case K:ci=this._getRelatedSelectable(cj,J);
break;
case j:ci=this._getPage(cj,true);
break;
case O:ci=this._getPage(cj,false);
break;
}}else{switch(cl){case L:case d:case K:case O:ci=this._getFirstSelectable();
break;
case M:case Q:case g:case j:ci=this._getLastSelectable();
break;
}}if(ci!==null){switch(ck){case o:case p:this._setSelectedItem(ci);
break;
case m:this._setLeadItem(ci);
break;
case k:if(cg){var cm=this._getAnchorItem();

if(cm===null){this._setAnchorItem(cm=this._getFirstSelectable());
}this._setLeadItem(ci);
this._selectItemRange(cm,ci,cf);
}else{this._setAnchorItem(ci);
this._setLeadItem(ci);

if(!cf){this._setSelectedItem(ci);
}}break;
}this._scrollItemIntoView(ci);
}}
if(ch){event.stop();
this._fireChange(E);
}},_selectAllItems:function(){var cd=this.getSelectables();

for(var i=0,l=cd.length;i<l;i++){this._addToSelection(cd[i]);
}},_clearSelection:function(){var cP=this.__mS;

for(var cQ in cP){this._removeFromSelection(cP[cQ]);
}this.__mS={};
},_selectItemRange:function(bI,bJ,bK){var bN=this._getSelectableRange(bI,bJ);
if(!bK){var bM=this.__mS;
var bO=this.__no(bN);

for(var bL in bM){if(!bO[bL]){this._removeFromSelection(bM[bL]);
}}}for(var i=0,l=bN.length;i<l;i++){this._addToSelection(bN[i]);
}},_deselectItemRange:function(ca,cb){var cc=this._getSelectableRange(ca,cb);

for(var i=0,l=cc.length;i<l;i++){this._removeFromSelection(cc[i]);
}},__no:function(cs){var cu={};
var ct;

for(var i=0,l=cs.length;i<l;i++){ct=cs[i];
cu[this._selectableToHashCode(ct)]=ct;
}return cu;
},_getSelectedItem:function(){for(var bc in this.__mS){return this.__mS[bc];
}return null;
},_setSelectedItem:function(Y){if(this._isSelectable(Y)){var ba=this.__mS;
var bb=this._selectableToHashCode(Y);

if(!ba[bb]||qx.lang.Object.hasMinLength(ba,2)){this._clearSelection();
this._addToSelection(Y);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(!this.__mS[cO]&&this._isSelectable(cN)){this.__mS[cO]=cN;
this._styleSelectable(cN,n,true);
this.__ni=true;
}},_toggleInSelection:function(cD){var cE=this._selectableToHashCode(cD);

if(!this.__mS[cE]){this.__mS[cE]=cD;
this._styleSelectable(cD,n,true);
}else{delete this.__mS[cE];
this._styleSelectable(cD,n,false);
}this.__ni=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__mS[bl]!=null){delete this.__mS[bl];
this._styleSelectable(bk,n,false);
this.__ni=true;
}},_replaceMultiSelection:function(cv){var cy=false;
var cB,cA;
var cw={};

for(var i=0,l=cv.length;i<l;i++){cB=cv[i];

if(this._isSelectable(cB)){cA=this._selectableToHashCode(cB);
cw[cA]=cB;
}}var cx=cB;
var cz=this.__mS;

for(var cA in cz){if(cw[cA]){delete cw[cA];
}else{cB=cz[cA];
delete cz[cA];
this._styleSelectable(cB,n,false);
cy=true;
}}for(var cA in cw){cB=cz[cA]=cw[cA];
this._styleSelectable(cB,n,true);
cy=true;
}if(!cy){return false;
}this._scrollItemIntoView(cx);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__ni=true;
this._fireChange();
},_fireChange:function(bm){if(this.__ni){this.__nj=bm||null;
this.fireDataEvent(y,this.getSelection());
delete this.__ni;
}}},destruct:function(){this._disposeObjects(D);
this.__mS=this.__nm=this.__nl=null;
this.__nk=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(s){arguments.callee.base.call(this);
this.__np=s;
},members:{__np:null,_isSelectable:function(m){return m.isEnabled()&&m.isVisible()&&m.getLayoutParent()===this.__np;
},_selectableToHashCode:function(p){return p.$$hash;
},_styleSelectable:function(G,H,I){I?G.addState(H):G.removeState(H);
},_capture:function(){this.__np.capture();
},_releaseCapture:function(){this.__np.releaseCapture();
},_getWidget:function(){return this.__np;
},_getLocation:function(){var O=this.__np.getContentElement().getDomElement();
return O?qx.bom.element.Location.get(O):null;
},_getDimension:function(){return this.__np.getInnerSize();
},_getSelectableLocationX:function(h){var j=h.getBounds();

if(j){return {left:j.left,right:j.left+j.width};
}},_getSelectableLocationY:function(n){var o=n.getBounds();

if(o){return {top:o.top,bottom:o.top+o.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(q,r){},_scrollItemIntoView:function(z){this.__np.scrollChildIntoView(z);
},getSelectables:function(){var K=this.__np.getChildren();
var L=[];
var J;

for(var i=0,l=K.length;i<l;i++){J=K[i];

if(J.isEnabled()&&J.isVisible()){L.push(J);
}}return L;
},_getSelectableRange:function(t,u){if(t===u){return [t];
}var y=this.__np.getChildren();
var v=[];
var x=false;
var w;

for(var i=0,l=y.length;i<l;i++){w=y[i];

if(w===t||w===u){if(x){v.push(w);
break;
}else{x=true;
}}
if(x&&w.isEnabled()&&w.isVisible()){v.push(w);
}}return v;
},_getFirstSelectable:function(){var g=this.__np.getChildren();

for(var i=0,l=g.length;i<l;i++){if(g[i].isEnabled()&&g[i].isVisible()){return g[i];
}}return null;
},_getLastSelectable:function(){var k=this.__np.getChildren();

for(var i=k.length-1;i>0;i--){if(k[i].isEnabled()&&k[i].isVisible()){return k[i];
}}return null;
},_getRelatedSelectable:function(A,B){var E=this.__np.getOrientation()===f;
var D=this.__np.getChildren();
var C=D.indexOf(A);
var F;

if((E&&B===d)||(!E&&B===b)){for(var i=C-1;i>=0;i--){F=D[i];

if(F.isEnabled()&&F.isVisible()){return F;
}}}else if((E&&B===e)||(!E&&B===a)){for(var i=C+1;i<D.length;i++){F=D[i];

if(F.isEnabled()&&F.isVisible()){return F;
}}}return null;
},_getPage:function(M,N){if(N){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__np=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
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
(function(){var o="right",n="above",m="left",l="under",k="qx.ui.tree.SelectionManager";
qx.Class.define(k,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(r){var s=r.getBounds();

if(s){var top=this._getWidget().getItemTop(r);
return {top:top,bottom:top+s.height};
}},_isSelectable:function(p){return p instanceof qx.ui.tree.AbstractTreeItem&&p.isEnabled()&&p.isVisible();
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
},_getLastSelectable:function(){var q=this.getSelectables();

if(q.length>0){return q[q.length-1];
}else{return null;
}},_getRelatedSelectable:function(a,b){var c=this._getWidget();
var d=null;

switch(b){case n:d=c.getPreviousSiblingOf(a,false);
break;
case l:d=c.getNextSiblingOf(a,false);
break;
case m:case o:break;
}
if(!d){return null;
}
if(this._isSelectable(d)){return d;
}else{return this._getRelatedSelectable(d,b);
}}}});
})();
(function(){var q="dblclick",p="click",o="Boolean",n="excluded",m="visible",l="qx.event.type.Data",k="_applyOpenMode",j="__nq",h="Space",g="Left",E="Enter",D="changeOpenMode",C="_applyRootOpenClose",B="changeSelection",A="qx.ui.tree.Tree",z="tree",y="_applyHideRoot",x="changeRoot",w="_applyRoot",v="keypress",t="none",u="pane",r="Right",s="qx.ui.tree.AbstractTreeItem";
qx.Class.define(A,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){arguments.callee.base.call(this);
this.__nq=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(u).add(this.__nq);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(B,this._onChangeSelection,this);
this.addListener(v,this._onKeyPress,this);
},events:{addItem:l,removeItem:l},properties:{openMode:{check:[p,q,t],init:q,apply:k,event:D,themeable:true},root:{check:s,init:null,nullable:true,event:x,apply:w},hideRoot:{check:o,init:false,apply:y},rootOpenClose:{check:o,init:false,apply:C},appearance:{refine:true,init:z},focusable:{refine:true,init:true}},members:{__nq:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__nq;
},_applyRoot:function(U,V){var W=this.getChildrenContainer();

if(V){W.remove(V);

if(V.hasChildren()){W.remove(V.getChildrenContainer());
}}
if(U){W.add(U);

if(U.hasChildren()){W.add(U.getChildrenContainer());
}U.setVisibility(this.getHideRoot()?n:m);
U.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(G,H){var I=this.getRoot();

if(!I){return;
}I.setVisibility(G?n:m);
I.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(Q,R){var S=this.getRoot();

if(!S){return;
}S.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__nq;
},getNextSiblingOf:function(X,Y,ba){if((Y!==false||X.isOpen())&&!(ba==true)&&X.hasChildren()){return X.getChildren()[0];
}
while(X){var parent=X.getParent();

if(!parent){return null;
}var bc=parent.getChildren();
var bb=bc.indexOf(X);

if(bb>-1&&bb<bc.length-1){return bc[bb+1];
}X=parent;
}return null;
},getPreviousSiblingOf:function(J,K,L){var parent=J.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==J){return null;
}}}else{if(J==this.getRoot()){return null;
}}var O=parent.getChildren();
var M=O.indexOf(J);

if(M>0){var N=O[M-1];

while((K!==false||N.isOpen())&&!(L==true)&&N.hasChildren()){var P=N.getChildren();
N=P[P.length-1];
}return N;
}else{return parent;
}},getItems:function(a,b){if(this.getRoot()!=null){return this.getRoot().getItems(a,b,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(c){while(c){if(c==this){return null;
}
if(c instanceof qx.ui.tree.AbstractTreeItem){return c;
}c=c.getLayoutParent();
}return null;
},_applyOpenMode:function(d,f){if(f==p){this.removeListener(p,this._onOpen,this);
}else if(f==q){this.removeListener(q,this._onOpen,this);
}
if(d==p){this.addListener(p,this._onOpen,this);
}else if(d==q){this.addListener(q,this._onOpen,this);
}},_onOpen:function(e){var F=this.getTreeItem(e.getTarget());

if(!F||!F.isOpenable()){return;
}F.setOpen(!F.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var be=e.getData();
for(var i=0;i<be.length;i++){var bd=be[i];
while(bd.getParent()!=null){bd=bd.getParent();
bd.setOpen(true);
}}},_onKeyPress:function(e){var T=this._getLeadItem();

if(T!==null){switch(e.getKeyIdentifier()){case g:if(T.isOpenable()&&T.isOpen()){T.setOpen(false);
}break;
case r:if(T.isOpenable()&&!T.isOpen()){T.setOpen(true);
}break;
case E:case h:if(T.isOpenable()){T.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(j);
}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var t="horizontal",s="px",r="scroll",q="vertical",p="-1px",o="qx.client",n="0",m="hidden",l="mousedown",k="qx.ui.core.scroll.NativeScrollBar",I="PositiveNumber",H="__ns",G="Integer",F="mousemove",E="_applyMaximum",D="_applyOrientation",C="appear",B="opera",A="PositiveInteger",z="mshtml",x="mouseup",y="Number",v="_applyPosition",w="scrollbar",u="native";
qx.Class.define(k,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(W){arguments.callee.base.call(this);
this.addState(u);
this.getContentElement().addListener(r,this._onScroll,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);
this.addListener(F,this._stopPropagation,this);

if(qx.core.Variant.isSet(o,B)){this.addListener(C,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(W!=null){this.setOrientation(W);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:w},orientation:{check:[t,q],init:t,apply:D},maximum:{check:A,apply:E,init:100},position:{check:y,init:0,apply:v,event:r},singleStep:{check:G,init:20},knobFactor:{check:I,nullable:true}},members:{__nr:null,__ns:null,_getScrollPaneElement:function(){if(!this.__ns){this.__ns=new qx.html.Element();
}return this.__ns;
},renderLayout:function(S,top,T,U){var V=arguments.callee.base.call(this,S,top,T,U);
this._updateScrollBar();
return V;
},_getContentHint:function(){var j=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__nr?100:j,maxWidth:this.__nr?null:j,minWidth:this.__nr?null:j,height:this.__nr?j:100,maxHeight:this.__nr?j:null,minHeight:this.__nr?j:null};
},_applyEnabled:function(K,L){arguments.callee.base.call(this,K,L);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(c){var content=this.getContentElement();

if(this.__nr){content.scrollToX(c);
}else{content.scrollToY(c);
}},_applyOrientation:function(d,f){var g=this.__nr=d===t;
this.set({allowGrowX:g,allowShrinkX:g,allowGrowY:!g,allowShrinkY:!g});

if(g){this.replaceState(q,t);
}else{this.replaceState(t,q);
}this.getContentElement().setStyles({overflowX:g?r:m,overflowY:g?m:r});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__nr;
var Q=this.getBounds();

if(!Q){return;
}
if(this.isEnabled()){var R=P?Q.width:Q.height;
var O=this.getMaximum()+R;
}else{O=0;
}if(qx.core.Variant.isSet(o,z)){var Q=this.getBounds();
this.getContentElement().setStyles({left:P?n:p,top:P?p:n,width:(P?Q.width:Q.width+1)+s,height:(P?Q.height+1:Q.height)+s});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(P?O:1)+s,height:(P?1:O)+s});
this.scrollTo(this.getPosition());
},scrollTo:function(i){this.setPosition(Math.max(0,Math.min(this.getMaximum(),i)));
},scrollBy:function(h){this.scrollTo(this.getPosition()+h);
},scrollBySteps:function(a){var b=this.getSingleStep();
this.scrollBy(a*b);
},_onScroll:function(e){var N=this.getContentElement();
var M=this.__nr?N.getScrollX():N.getScrollY();
this.setPosition(M);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(H);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(E){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(E!=null){this.setOrientation(E);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__nt:2,_createChildControlImpl:function(B){var C;

switch(B){case l:C=new qx.ui.core.scroll.ScrollSlider();
C.setPageStep(100);
C.setFocusable(false);
C.addListener(y,this._onChangeSliderValue,this);
this._add(C,{flex:1});
break;
case j:C=new qx.ui.form.RepeatButton();
C.setFocusable(false);
C.addListener(f,this._onExecuteBegin,this);
this._add(C);
break;
case h:C=new qx.ui.form.RepeatButton();
C.setFocusable(false);
C.addListener(f,this._onExecuteEnd,this);
this._add(C);
break;
}return C||arguments.callee.base.call(this,B);
},_applyMaximum:function(F){this.getChildControl(l).setMaximum(F);
},_applyPosition:function(D){this.getChildControl(l).setValue(D);
},_applyKnobFactor:function(R){this.getChildControl(l).setKnobFactor(R);
},_applyPageStep:function(a){this.getChildControl(l).setPageStep(a);
},_applyOrientation:function(G,H){var I=this._getLayout();

if(I){I.dispose();
}if(G===k){this._setLayout(new qx.ui.layout.HBox());
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
}this.getChildControl(l).setOrientation(G);
},scrollTo:function(K){this.getChildControl(l).slideTo(K);
},scrollBy:function(J){this.getChildControl(l).slideBy(J);
},scrollBySteps:function(P){var Q=this.getSingleStep();
this.getChildControl(l).slideBy(P*Q);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var L=this.getChildControl(l).getChildControl(v);
var O=L.getSizeHint();
var M=false;
var N=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(N.height<O.minHeight+this.__nt){M=true;
}}else{if(N.width<O.minWidth+this.__nt){M=true;
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
qx.Interface.define(a,{members:{setMinimum:function(e){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(b){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(d){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var bf="knob",be="horizontal",bd="vertical",bc="Integer",bb="px",ba="mousemove",Y="resize",X="left",W="top",V="mouseup",bJ="slider",bI="PageUp",bH="mousedown",bG="height",bF="changeValue",bE="Left",bD="Down",bC="Up",bB="dblclick",bA="qx.ui.form.Slider",bm="PageDown",bn="mousewheel",bk="interval",bl="_applyValue",bi="_applyKnobFactor",bj="End",bg="width",bh="_applyOrientation",bo="Home",bp="floor",bs="_applyMinimum",br="click",bu="Right",bt="keypress",bw="ceil",bv="losecapture",bq="contextmenu",bz="_applyMaximum",by="Number",bx="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bA,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(n){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bt,this._onKeyPress);
this.addListener(bn,this._onMouseWheel);
this.addListener(bH,this._onMouseDown);
this.addListener(V,this._onMouseUp);
this.addListener(bv,this._onMouseUp);
this.addListener(Y,this._onUpdate);
this.addListener(bq,this._onStopEvent);
this.addListener(br,this._onStopEvent);
this.addListener(bB,this._onStopEvent);
if(n!=null){this.setOrientation(n);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bJ},focusable:{refine:true,init:true},orientation:{check:[be,bd],init:be,apply:bh},value:{check:bx,init:0,apply:bl,event:bF,nullable:true},minimum:{check:bc,init:0,apply:bs},maximum:{check:bc,init:100,apply:bz},singleStep:{check:bc,init:1},pageStep:{check:bc,init:10},knobFactor:{check:by,apply:bi,nullable:true}},members:{__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nC:null,_forwardStates:{invalid:true},_createChildControlImpl:function(o){var p;

switch(o){case bf:p=new qx.ui.core.Widget();
p.addListener(Y,this._onUpdate,this);
this._add(p);
break;
}return p||arguments.callee.base.call(this,o);
},_onMouseWheel:function(e){var A=e.getWheelDelta()>0?1:-1;
this.slideBy(A*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var r=this.getOrientation()===be;
var q=r?bE:bC;
var forward=r?bu:bD;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case q:this.slideBack();
break;
case bm:this.slidePageForward();
break;
case bI:this.slidePageBack();
break;
case bo:this.slideToBegin();
break;
case bj:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__nx){return;
}var i=this.__nE;
var g=this.getChildControl(bf);
var h=i?X:W;
var k=i?e.getDocumentLeft():e.getDocumentTop();
var l=this.__nu=qx.bom.element.Location.get(this.getContentElement().getDomElement())[h];
var j=this.__nv=qx.bom.element.Location.get(g.getContainerElement().getDomElement())[h];

if(e.getTarget()===g){this.__nx=true;
this.__ny=k+l-j;
}else{this.__nz=true;
this.__nA=k<=j?-1:1;
this.__nF(e);
this._onInterval();
if(!this.__nC){this.__nC=new qx.event.Timer(100);
this.__nC.addListener(bk,this._onInterval,this);
}this.__nC.start();
}this.addListener(ba,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__nx){this.releaseCapture();
delete this.__nx;
delete this.__ny;
}else if(this.__nz){this.__nC.stop();
this.releaseCapture();
delete this.__nz;
delete this.__nA;
delete this.__nB;
}this.removeListener(ba,this._onMouseMove);
if(e.getType()===V){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__nx){var C=this.__nE?e.getDocumentLeft():e.getDocumentTop();
var B=C-this.__ny;
this.slideTo(this._positionToValue(B));
}else if(this.__nz){this.__nF(e);
}e.stopPropagation();
},_onInterval:function(e){var bQ=this.getValue()+(this.__nA*this.getPageStep());
if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}var bR=this.__nA==-1;

if((bR&&bQ<=this.__nB)||(!bR&&bQ>=this.__nB)){bQ=this.__nB;
}this.slideTo(bQ);
},_onUpdate:function(e){var v=this.getInnerSize();
var w=this.getChildControl(bf).getBounds();
var u=this.__nE?bg:bG;
this._updateKnobSize();
this.__nD=v[u]-w[u];
this.__nw=w[u];
this._updateKnobPosition();
},__nE:false,__nD:0,__nF:function(e){var D=this.__nE;
var K=D?e.getDocumentLeft():e.getDocumentTop();
var M=this.__nu;
var E=this.__nv;
var O=this.__nw;
var L=K-M;

if(K>=E){L-=O;
}var I=this._positionToValue(L);
var F=this.getMinimum();
var G=this.getMaximum();

if(I<F){I=F;
}else if(I>G){I=G;
}else{var J=this.getValue();
var H=this.getPageStep();
var N=this.__nA<0?bp:bw;
I=J+(Math[N]((I-J)/H)*H);
}if(this.__nB==null||(this.__nA==-1&&I<=this.__nB)||(this.__nA==1&&I>=this.__nB)){this.__nB=I;
}},_positionToValue:function(bK){var bL=this.__nD;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(P){var Q=this.__nD;

if(Q==null){return 0;
}var R=this.getMaximum()-this.getMinimum();
if(R==0){return 0;
}var P=P-this.getMinimum();
var S=P/R;

if(S<0){S=0;
}else if(S>1){S=1;
}return Math.round(Q*S);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(s){var t=this.getChildControl(bf).getContainerElement();

if(this.__nE){t.setStyle(X,s+bb,true);
}else{t.setStyle(W,s+bb,true);
}},_updateKnobSize:function(){var bT=this.getKnobFactor();

if(bT==null){return;
}var bS=this.getInnerSize();

if(bS==null){return;
}if(this.__nE){this.getChildControl(bf).setWidth(Math.round(bT*bS.width));
}else{this.getChildControl(bf).setHeight(Math.round(bT*bS.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(x){this.slideTo(this.getValue()+x);
},slideTo:function(m){if(m<this.getMinimum()){m=this.getMinimum();
}else if(m>this.getMaximum()){m=this.getMaximum();
}else{m=this.getMinimum()+Math.round((m-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(m);
},_applyOrientation:function(c,d){var f=this.getChildControl(bf);
this.__nE=c===be;
if(this.__nE){this.removeState(bd);
f.removeState(bd);
this.addState(be);
f.addState(be);
f.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(be);
f.removeState(be);
this.addState(bd);
f.addState(bd);
f.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(a,b){if(a!=null){this._updateKnobSize();
}else{if(this.__nE){this.getChildControl(bf).resetWidth();
}else{this.getChildControl(bf).resetHeight();
}}},_applyValue:function(y,z){if(y!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bO,bP){if(this.getValue()<bO){this.setValue(bO);
}this._updateKnobPosition();
},_applyMaximum:function(T,U){if(this.getValue()>T){this.setValue(T);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var o="top",n="left",m="qx.debug",k="bottom",h="hAlign",g="vAlign",f="Integer",e="_applyLayoutChange",d="center",c="middle",F="right",E="flex",D="on",C="height",B="' is not supported by the Grid layout!",A="Invalid parameter 'column'",z="The property '",w="Value must be positive",v="qx.ui.layout.Grid",u="maxHeight",s="width",t="minHeight",q="minWidth",r="maxWidth",p="Invalid parameter 'row'";
qx.Class.define(v,{extend:qx.ui.layout.Abstract,construct:function(de,df){arguments.callee.base.call(this);
this.__nG=[];
this.__nH=[];

if(de){this.setSpacingX(de);
}
if(df){this.setSpacingY(df);
}},properties:{spacingX:{check:f,init:0,apply:e},spacingY:{check:f,init:0,apply:e}},members:{__nI:null,__nG:null,__nH:null,__nJ:null,__nK:null,__nL:null,__nM:null,__nN:null,__nO:null,verifyLayoutProperty:qx.core.Variant.select(m,{"on":function(bG,name,bH){var bI={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(bI[name]==1,z+name+B);
this.assertInteger(bH);
this.assert(bH>=0,w);
},"off":null}),__nP:function(){var cY=[];
var cX=[];
var da=[];
var cV=-1;
var cU=-1;
var dc=this._getLayoutChildren();

for(var i=0,l=dc.length;i<l;i++){var cW=dc[i];
var db=cW.getLayoutProperties();
var dd=db.row;
var cT=db.column;
db.colSpan=db.colSpan||1;
db.rowSpan=db.rowSpan||1;
if(dd==null||cT==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cW+"' must be defined!");
}
if(cY[dd]&&cY[dd][cT]){throw new Error("Cannot add widget '"+cW+"'!. "+"There is already a widget '"+cY[dd][cT]+"' in this cell ("+dd+", "+cT+")");
}
for(var x=cT;x<cT+db.colSpan;x++){for(var y=dd;y<dd+db.rowSpan;y++){if(cY[y]==undefined){cY[y]=[];
}cY[y][x]=cW;
cU=Math.max(cU,x);
cV=Math.max(cV,y);
}}
if(db.rowSpan>1){da.push(cW);
}
if(db.colSpan>1){cX.push(cW);
}}for(var y=0;y<=cV;y++){if(cY[y]==undefined){cY[y]=[];
}}this.__nI=cY;
this.__nJ=cX;
this.__nK=da;
this.__nL=cV;
this.__nM=cU;
this.__nN=null;
this.__nO=null;
delete this._invalidChildrenCache;
},_setRowData:function(ej,ek,el){var em=this.__nG[ej];

if(!em){this.__nG[ej]={};
this.__nG[ej][ek]=el;
}else{em[ek]=el;
}},_setColumnData:function(bo,bp,bq){var br=this.__nH[bo];

if(!br){this.__nH[bo]={};
this.__nH[bo][bp]=bq;
}else{br[bp]=bq;
}},setSpacing:function(bF){this.setSpacingY(bF);
this.setSpacingX(bF);
return this;
},setColumnAlign:function(du,dv,dw){if(qx.core.Variant.isSet(m,D)){this.assertInteger(du,A);
this.assertInArray(dv,[n,d,F]);
this.assertInArray(dw,[o,c,k]);
}this._setColumnData(du,h,dv);
this._setColumnData(du,g,dw);
this._applyLayoutChange();
return this;
},getColumnAlign:function(ds){var dt=this.__nH[ds]||{};
return {vAlign:dt.vAlign||o,hAlign:dt.hAlign||n};
},setRowAlign:function(dm,dn,dp){if(qx.core.Variant.isSet(m,D)){this.assertInteger(dm,p);
this.assertInArray(dn,[n,d,F]);
this.assertInArray(dp,[o,c,k]);
}this._setRowData(dm,h,dn);
this._setRowData(dm,g,dp);
this._applyLayoutChange();
return this;
},getRowAlign:function(di){var dj=this.__nG[di]||{};
return {vAlign:dj.vAlign||o,hAlign:dj.hAlign||n};
},getCellWidget:function(dz,dA){if(this._invalidChildrenCache){this.__nP();
}var dz=this.__nI[dz]||{};
return dz[dA]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__nP();
}return this.__nL+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__nP();
}return this.__nM+1;
},getCellAlign:function(bS,bT){var ca=o;
var bX=n;
var bY=this.__nG[bS];
var bV=this.__nH[bT];
var bU=this.__nI[bS][bT];

if(bU){var bW={vAlign:bU.getAlignY(),hAlign:bU.getAlignX()};
}else{bW={};
}if(bW.vAlign){ca=bW.vAlign;
}else if(bY&&bY.vAlign){ca=bY.vAlign;
}else if(bV&&bV.vAlign){ca=bV.vAlign;
}if(bW.hAlign){bX=bW.hAlign;
}else if(bV&&bV.hAlign){bX=bV.hAlign;
}else if(bY&&bY.hAlign){bX=bY.hAlign;
}return {vAlign:ca,hAlign:bX};
},setColumnFlex:function(G,H){this._setColumnData(G,E,H);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dD){var dE=this.__nH[dD]||{};
return dE.flex!==undefined?dE.flex:0;
},setRowFlex:function(dx,dy){this._setRowData(dx,E,dy);
this._applyLayoutChange();
return this;
},getRowFlex:function(dU){var dV=this.__nG[dU]||{};
var dW=dV.flex!==undefined?dV.flex:0;
return dW;
},setColumnMaxWidth:function(dS,dT){this._setColumnData(dS,r,dT);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dg){var dh=this.__nH[dg]||{};
return dh.maxWidth!==undefined?dh.maxWidth:Infinity;
},setColumnWidth:function(dF,dG){this._setColumnData(dF,s,dG);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dB){var dC=this.__nH[dB]||{};
return dC.width!==undefined?dC.width:null;
},setColumnMinWidth:function(cP,cQ){this._setColumnData(cP,q,cQ);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(dk){var dl=this.__nH[dk]||{};
return dl.minWidth||0;
},setRowMaxHeight:function(a,b){this._setRowData(a,u,b);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bs){var bt=this.__nG[bs]||{};
return bt.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,C,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(dq){var dr=this.__nG[dq]||{};
return dr.height!==undefined?dr.height:null;
},setRowMinHeight:function(cR,cS){this._setRowData(cR,t,cS);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(en){var eo=this.__nG[en]||{};
return eo.minHeight||0;
},__nQ:function(cb){var cf=cb.getSizeHint();
var ce=cb.getMarginLeft()+cb.getMarginRight();
var cd=cb.getMarginTop()+cb.getMarginBottom();
var cc={height:cf.height+cd,width:cf.width+ce,minHeight:cf.minHeight+cd,minWidth:cf.minWidth+ce,maxHeight:cf.maxHeight+cd,maxWidth:cf.maxWidth+ce};
return cc;
},_fixHeightsRowSpan:function(cB){var cM=this.getSpacingY();

for(var i=0,l=this.__nK.length;i<l;i++){var cE=this.__nK[i];
var cG=this.__nQ(cE);
var cH=cE.getLayoutProperties();
var cD=cH.row;
var cK=cM*(cH.rowSpan-1);
var cC=cK;
var cJ={};

for(var j=0;j<cH.rowSpan;j++){var cO=cH.row+j;
var cF=cB[cO];
var cN=this.getRowFlex(cO);

if(cN>0){cJ[cO]={min:cF.minHeight,value:cF.height,max:cF.maxHeight,flex:cN};
}cK+=cF.height;
cC+=cF.minHeight;
}if(cK<cG.height){var cL=qx.ui.layout.Util.computeFlexOffsets(cJ,cG.height,cK);

for(var j=0;j<cH.rowSpan;j++){var cI=cL[cD+j]?cL[cD+j].offset:0;
cB[cD+j].height+=cI;
}}if(cC<cG.minHeight){var cL=qx.ui.layout.Util.computeFlexOffsets(cJ,cG.minHeight,cC);

for(var j=0;j<cH.rowSpan;j++){var cI=cL[cD+j]?cL[cD+j].offset:0;
cB[cD+j].minHeight+=cI;
}}}},_fixWidthsColSpan:function(cn){var cr=this.getSpacingX();

for(var i=0,l=this.__nJ.length;i<l;i++){var co=this.__nJ[i];
var cq=this.__nQ(co);
var ct=co.getLayoutProperties();
var cp=ct.column;
var cz=cr*(ct.colSpan-1);
var cs=cz;
var cu={};
var cw;

for(var j=0;j<ct.colSpan;j++){var cA=ct.column+j;
var cy=cn[cA];
var cx=this.getColumnFlex(cA);
if(cx>0){cu[cA]={min:cy.minWidth,value:cy.width,max:cy.maxWidth,flex:cx};
}cz+=cy.width;
cs+=cy.minWidth;
}if(cz<cq.width){var cv=qx.ui.layout.Util.computeFlexOffsets(cu,cq.width,cz);

for(var j=0;j<ct.colSpan;j++){cw=cv[cp+j]?cv[cp+j].offset:0;
cn[cp+j].width+=cw;
}}if(cs<cq.minWidth){var cv=qx.ui.layout.Util.computeFlexOffsets(cu,cq.minWidth,cs);

for(var j=0;j<ct.colSpan;j++){cw=cv[cp+j]?cv[cp+j].offset:0;
cn[cp+j].minWidth+=cw;
}}}},_getRowHeights:function(){if(this.__nN!=null){return this.__nN;
}var dQ=[];
var dJ=this.__nL;
var dI=this.__nM;

for(var dR=0;dR<=dJ;dR++){var dK=0;
var dM=0;
var dL=0;

for(var dP=0;dP<=dI;dP++){var dH=this.__nI[dR][dP];

if(!dH){continue;
}var dN=dH.getLayoutProperties().rowSpan||0;

if(dN>1){continue;
}var dO=this.__nQ(dH);

if(this.getRowFlex(dR)>0){dK=Math.max(dK,dO.minHeight);
}else{dK=Math.max(dK,dO.height);
}dM=Math.max(dM,dO.height);
}var dK=Math.max(dK,this.getRowMinHeight(dR));
var dL=this.getRowMaxHeight(dR);

if(this.getRowHeight(dR)!==null){var dM=this.getRowHeight(dR);
}else{var dM=Math.max(dK,Math.min(dM,dL));
}dQ[dR]={minHeight:dK,height:dM,maxHeight:dL};
}
if(this.__nK.length>0){this._fixHeightsRowSpan(dQ);
}this.__nN=dQ;
return dQ;
},_getColWidths:function(){if(this.__nO!=null){return this.__nO;
}var by=[];
var bv=this.__nM;
var bx=this.__nL;

for(var bD=0;bD<=bv;bD++){var bB=0;
var bA=0;
var bw=Infinity;

for(var bE=0;bE<=bx;bE++){var bu=this.__nI[bE][bD];

if(!bu){continue;
}var bz=bu.getLayoutProperties().colSpan||0;

if(bz>1){continue;
}var bC=this.__nQ(bu);

if(this.getColumnFlex(bD)>0){bA=Math.max(bA,bC.minWidth);
}else{bA=Math.max(bA,bC.width);
}bB=Math.max(bB,bC.width);
}var bA=Math.max(bA,this.getColumnMinWidth(bD));
var bw=this.getColumnMaxWidth(bD);

if(this.getColumnWidth(bD)!==null){var bB=this.getColumnWidth(bD);
}else{var bB=Math.max(bA,Math.min(bB,bw));
}by[bD]={minWidth:bA,width:bB,maxWidth:bw};
}
if(this.__nJ.length>0){this._fixWidthsColSpan(by);
}this.__nO=by;
return by;
},_getColumnFlexOffsets:function(cg){var ch=this.getSizeHint();
var cl=cg-ch.width;

if(cl==0){return {};
}var cj=this._getColWidths();
var ci={};

for(var i=0,l=cj.length;i<l;i++){var cm=cj[i];
var ck=this.getColumnFlex(i);

if((ck<=0)||(cm.width==cm.maxWidth&&cl>0)||(cm.width==cm.minWidth&&cl<0)){continue;
}ci[i]={min:cm.minWidth,value:cm.width,max:cm.maxWidth,flex:ck};
}return qx.ui.layout.Util.computeFlexOffsets(ci,cg,ch.width);
},_getRowFlexOffsets:function(bL){var bM=this.getSizeHint();
var bP=bL-bM.height;

if(bP==0){return {};
}var bQ=this._getRowHeights();
var bN={};

for(var i=0,l=bQ.length;i<l;i++){var bR=bQ[i];
var bO=this.getRowFlex(i);

if((bO<=0)||(bR.height==bR.maxHeight&&bP>0)||(bR.height==bR.minHeight&&bP<0)){continue;
}bN[i]={min:bR.minHeight,value:bR.height,max:bR.maxHeight,flex:bO};
}return qx.ui.layout.Util.computeFlexOffsets(bN,bL,bM.height);
},renderLayout:function(I,J){if(this._invalidChildrenCache){this.__nP();
}var X=qx.ui.layout.Util;
var L=this.getSpacingX();
var R=this.getSpacingY();
var bd=this._getColWidths();
var bc=this._getColumnFlexOffsets(I);
var M=[];
var bf=this.__nM;
var K=this.__nL;
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

for(var S=0;S<=K;S++){var ba=this.__nI[S][bg];
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
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__nO=null;
this.__nN=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__nP();
}var ec=this._getColWidths();
var ee=0,ef=0;

for(var i=0,l=ec.length;i<l;i++){var eg=ec[i];

if(this.getColumnFlex(i)>0){ee+=eg.minWidth;
}else{ee+=eg.width;
}ef+=eg.width;
}var eh=this._getRowHeights();
var ea=0,ed=0;

for(var i=0,l=eh.length;i<l;i++){var ei=eh[i];

if(this.getRowFlex(i)>0){ea+=ei.minHeight;
}else{ea+=ei.height;
}ed+=ei.height;
}var dY=this.getSpacingX()*(ec.length-1);
var dX=this.getSpacingY()*(eh.length-1);
var eb={minWidth:ee+dY,width:ef+dY,minHeight:ea+dX,height:ed+dX};
return eb;
}},destruct:function(){this.__nI=this.__nG=this.__nH=this.__nJ=this.__nK=this.__nO=this.__nN=null;
}});
})();
(function(){var L="open",K="auto",J="qx.debug",I="middle",H="icon",G="label",F="on",E="changeOpen",D="excluded",C="visible",bi="String",bh="opened",bg="always",bf="qx.ui.tree.AbstractTreeItem",be="addItem",bd="Boolean",bc="Invalid child index: ",bb="Integer",ba="_applyIndent",Y="__nV",S="changeOpenSymbolMode",T="_applyOpenSymbolMode",Q="__nR",R="resize",O="",P="removeItem",M="abstract",N="never",U="_applyIcon",V="__nS",X="_applyOpen",W="_applyLabel";
qx.Class.define(bf,{extend:qx.ui.core.Widget,type:M,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){arguments.callee.base.call(this);
this.__nR=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:bd,init:false,event:E,apply:X},openSymbolMode:{check:[bg,N,K],init:K,event:S,apply:T},indent:{check:bb,init:19,apply:ba,themeable:true},parent:{check:bf,nullable:true},icon:{check:bi,apply:U,nullable:true,themeable:true},label:{check:bi,apply:W,init:O}},members:{__nR:null,__nS:null,__nT:null,__nU:null,__nV:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(h){var j;

switch(h){case G:j=new qx.ui.basic.Label().set({alignY:I,value:this.getLabel()});
break;
case H:j=new qx.ui.basic.Image().set({alignY:I,source:this.getIcon()});
break;
case L:j=new qx.ui.tree.FolderOpenButton().set({alignY:I});
j.addListener(E,this._onChangeOpen,this);
j.addListener(R,this._updateIndent,this);
break;
}return j||arguments.callee.base.call(this,h);
},getTree:function(){var bm=this;

while(bm.getParent()){bm=bm.getParent();
}var bl=bm.getLayoutParent()?bm.getLayoutParent().getLayoutParent():0;

if(bl&&bl instanceof qx.ui.core.scroll.ScrollPane){return bl.getLayoutParent();
}return null;
},addWidget:function(bG,bH){this._add(bG,bH);
},addSpacer:function(){if(!this.__nV){this.__nV=new qx.ui.core.Spacer();
}else{this._remove(this.__nV);
}this._add(this.__nV);
},addOpenButton:function(){this._add(this.getChildControl(L));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bB=this.getChildControl(H);

if(this.__nU){this._remove(bB);
}this._add(bB);
this.__nU=true;
},addLabel:function(m){var n=this.getChildControl(G);

if(this.__nT){this._remove(n);
}
if(m){this.setLabel(m);
}else{n.setValue(this.getLabel());
}this._add(n);
this.__nT=true;
},addState:function(bq){arguments.callee.base.call(this,bq);
var bs=this._getChildren();

for(var i=0,l=bs.length;i<l;i++){var br=bs[i];

if(br.addState){bs[i].addState(bq);
}}},removeState:function(by){arguments.callee.base.call(this,by);
var bA=this._getChildren();

for(var i=0,l=bA.length;i<l;i++){var bz=bA[i];

if(bz.addState){bA[i].removeState(by);
}}},_applyIcon:function(bt,bu){var bv=this.getChildControl(H,true);

if(bv){bv.setSource(bt);
}},_applyLabel:function(bO,bP){var bQ=this.getChildControl(G,true);

if(bQ){bQ.setValue(bO);
}},_applyOpen:function(bM,bN){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bM?C:D);
}var open=this.getChildControl(L,true);

if(open){open.setOpen(bM);
}bM?this.addState(bh):this.removeState(bh);
},isOpenable:function(){var o=this.getOpenSymbolMode();
return (o===bg||o===K&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(L,true);

if(!open){return false;
}var bx=this.getTree();

if(!bx.getRootOpenClose()){if(bx.getHideRoot()){if(bx.getRoot()==this.getParent()){return false;
}}else{if(bx.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bC,bD){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bJ=0;
var open=this.getChildControl(L,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bI=open.getBounds();

if(bI){bJ=bI.width;
}else{return;
}}else{open.exclude();
}}
if(this.__nV){this.__nV.setWidth((this.getLevel()+1)*this.getIndent()-bJ);
}},_applyIndent:function(bj,bk){this._updateIndent();
},getLevel:function(){var bn=this.getTree();

if(!bn){return;
}var bo=this;
var bp=-1;

while(bo){bo=bo.getParent();
bp+=1;
}if(bn.getHideRoot()){bp-=1;
}
if(!bn.getRootOpenClose()){bp-=1;
}return bp;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__nS){this.__nS=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?C:D});
}return this.__nS;
},hasChildrenContainer:function(){return this.__nS;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__nR;
},hasChildren:function(){return this.__nR?this.__nR.length>0:false;
},getItems:function(bR,bS,bT){if(bT!==false){var bU=[];
}else{var bU=[this];
}var bX=this.hasChildren()&&(bS!==false||this.isOpen());

if(bX){var bW=this.getChildren();

if(bR===false){bU=bU.concat(bW);
}else{for(var i=0,bV=bW.length;i<bV;i++){bU=bU.concat(bW[i].getItems(bR,bS,false));
}}}return bU;
},recursiveAddToWidgetQueue:function(){var k=this.getItems(true,true,false);

for(var i=0,l=k.length;i<l;i++){qx.ui.core.queue.Widget.add(k[i]);
}},__nW:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(a){var b=this.getChildrenContainer();
var f=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];
var d=g.getParent();

if(d){d.remove(g);
}g.setParent(this);
var c=this.hasChildren();
b.add(g);

if(g.hasChildren()){b.add(g.getChildrenContainer());
}this.__nR.push(g);

if(!c){this.__nW();
}
if(f){g.recursiveAddToWidgetQueue();
f.fireNonBubblingEvent(be,qx.event.type.Data,[g]);
}}
if(f){qx.ui.core.queue.Widget.add(this);
}},addAt:function(u,v){if(qx.core.Variant.isSet(J,F)){this.assert(v<=this.__nR.length&&v>=0,bc+v);
}
if(v==this.__nR.length){this.add(u);
return;
}var z=u.getParent();

if(z){z.remove(u);
}var x=this.getChildrenContainer();
u.setParent(this);
var y=this.hasChildren();
var w=this.__nR[v];
x.addBefore(u,w);

if(u.hasChildren()){x.addAfter(u.getChildrenContainer(),u);
}qx.lang.Array.insertAt(this.__nR,u,v);

if(!y){this.__nW();
}
if(this.getTree()){u.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bE,bF){if(qx.core.Variant.isSet(J,F)){this.assert(this.__nR.indexOf(bF)>=0);
}this.addAt(bE,this.__nR.indexOf(bF));
},addAfter:function(bK,bL){if(qx.core.Variant.isSet(J,F)){this.assert(this.__nR.indexOf(bL)>=0);
}this.addAt(bK,this.__nR.indexOf(bL)+1);
},addAtBegin:function(bw){this.addAt(bw,0);
},remove:function(p){for(var i=0,l=arguments.length;i<l;i++){var t=arguments[i];

if(this.__nR.indexOf(t)==-1){this.warn("Cannot remove treeitem '"+t+"'. It is not a child of this tree item.");
return;
}var q=this.getChildrenContainer();

if(t.hasChildrenContainer()){var s=t.getChildrenContainer();

if(q.getChildren().indexOf(s)>=0){q.remove(s);
}}qx.lang.Array.remove(this.__nR,t);
t.setParent(null);
q.remove(t);
}var r=this.getTree();

if(r){r.fireNonBubblingEvent(P,qx.event.type.Data,[t]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(A){var B=this.__nR[A];

if(B){this.remove(B);
}},removeAll:function(){for(var i=this.__nR.length-1;i>=0;i--){this.remove(this.__nR[i]);
}}},destruct:function(){this._disposeArray(Q);
this._disposeObjects(Y,V);
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
(function(){var K="qx.event.type.Event",J="Boolean",I="queued",H="String",G="sending",F="receiving",E="aborted",D="failed",C="nocache",B="completed",bs="qx.io.remote.Response",br="POST",bq="configured",bp="timeout",bo="GET",bn="Pragma",bm="no-url-params-on-post",bl="no-cache",bk="Cache-Control",bj="Content-Type",R="text/plain",S="application/xml",P="application/json",Q="text/html",N="qx.ioRemoteDebug",O="application/x-www-form-urlencoded",L="qx.io.remote.Exchange",M="Integer",T="X-Qooxdoo-Response-Type",U="HEAD",bb="qx.io.remote.Request",ba="qx.debug",bd="_applyResponseType",bc="_applyState",bf="text/javascript",be="changeState",W="PUT",bi="_applyProhibitCaching",bh="",bg="_applyMethod",V="DELETE",X="boolean",Y="on";
qx.Class.define(bb,{extend:qx.core.Object,construct:function(bt,bu,bv){arguments.callee.base.call(this);
this.__nX={};
this.__nY={};
this.__oa={};
this.__ob={};

if(bt!==undefined){this.setUrl(bt);
}
if(bu!==undefined){this.setMethod(bu);
}
if(bv!==undefined){this.setResponseType(bv);
}this.setProhibitCaching(true);
this.__oc=++qx.io.remote.Request.__oc;
},events:{"created":K,"configured":K,"sending":K,"receiving":K,"completed":bs,"aborted":K,"failed":bs,"timeout":bs},statics:{__oc:0},properties:{url:{check:H,init:bh},method:{check:[bo,br,W,U,V],apply:bg,init:bo},asynchronous:{check:J,init:true},data:{check:H,nullable:true},username:{check:H,nullable:true},password:{check:H,nullable:true},state:{check:[bq,I,G,F,B,E,bp,D],init:bq,apply:bc,event:be},responseType:{check:[R,bf,P,S,Q],init:R,apply:bd},timeout:{check:M,nullable:true},prohibitCaching:{check:function(v){return typeof v==X||v===bm;
},init:true,apply:bi},crossDomain:{check:J,init:false},fileUpload:{check:J,init:false},transport:{check:L,nullable:true},useBasicHttpAuth:{check:J,init:false}},members:{__nX:null,__nY:null,__oa:null,__ob:null,__oc:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case G:case F:this.error("Aborting already sent request!");
case I:this.abort();
break;
}},isConfigured:function(){return this.getState()===bq;
},isQueued:function(){return this.getState()===I;
},isSending:function(){return this.getState()===G;
},isReceiving:function(){return this.getState()===F;
},isCompleted:function(){return this.getState()===B;
},isAborted:function(){return this.getState()===E;
},isTimeout:function(){return this.getState()===bp;
},isFailed:function(){return this.getState()===D;
},__od:function(e){var p=e.clone();
p.setTarget(this);
this.dispatchEvent(p);
},_onqueued:function(e){this.setState(I);
this.__od(e);
},_onsending:function(e){this.setState(G);
this.__od(e);
},_onreceiving:function(e){this.setState(F);
this.__od(e);
},_oncompleted:function(e){this.setState(B);
this.__od(e);
this.dispose();
},_onaborted:function(e){this.setState(E);
this.__od(e);
this.dispose();
},_ontimeout:function(e){this.setState(bp);
this.__od(e);
this.dispose();
},_onfailed:function(e){this.setState(D);
this.__od(e);
this.dispose();
},_applyState:function(n,o){if(qx.core.Variant.isSet(ba,Y)){if(qx.core.Setting.get(N)){this.debug("State: "+n);
}}},_applyProhibitCaching:function(b,c){if(!b){this.removeParameter(C);
this.removeRequestHeader(bn);
this.removeRequestHeader(bk);
return;
}if(b!==bm||this.getMethod()!=br){this.setParameter(C,new Date().valueOf());
}else{this.removeParameter(C);
}this.setRequestHeader(bn,bl);
this.setRequestHeader(bk,bl);
},_applyMethod:function(u,w){if(u===br){this.setRequestHeader(bj,O);
}else{this.removeRequestHeader(bj);
}var x=this.getProhibitCaching();
this._applyProhibitCaching(x,x);
},_applyResponseType:function(d,f){this.setRequestHeader(T,d);
},setRequestHeader:function(i,j){this.__nX[i]=j;
},removeRequestHeader:function(q){delete this.__nX[q];
},getRequestHeader:function(k){return this.__nX[k]||null;
},getRequestHeaders:function(){return this.__nX;
},setParameter:function(y,z,A){if(A){this.__oa[y]=z;
}else{this.__nY[y]=z;
}},removeParameter:function(g,h){if(h){delete this.__oa[g];
}else{delete this.__nY[g];
}},getParameter:function(r,s){if(s){return this.__oa[r]||null;
}else{return this.__nY[r]||null;
}},getParameters:function(bw){return (bw?this.__oa:this.__nY);
},setFormField:function(l,m){this.__ob[l]=m;
},removeFormField:function(t){delete this.__ob[t];
},getFormField:function(a){return this.__ob[a]||null;
},getFormFields:function(){return this.__ob;
},getSequenceNumber:function(){return this.__oc;
}},destruct:function(){this.setTransport(null);
this.__nX=this.__nY=this.__oa=this.__ob=null;
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
(function(){var m="qx.ioRemoteDebug",l="Integer",k="qx.debug",j="on",h="aborted",g="_onaborted",f="_on",d="Boolean",c="__of",b="singleton",y="interval",x="receiving",w="Request-Queue Progress: ",v="queued",u="__oh",t="/",s="_applyEnabled",r="sending",q="completed",p="failed",n="qx.io.remote.RequestQueue",o="timeout";
qx.Class.define(n,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__oe=[];
this.__of=[];
this.__og=0;
this.__oh=new qx.event.Timer(500);
this.__oh.addListener(y,this._oninterval,this);
},properties:{enabled:{init:true,check:d,apply:s},maxTotalRequests:{check:l,nullable:true},maxConcurrentRequests:{check:l,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:l,init:5000}},members:{__oe:null,__of:null,__og:null,__oh:null,getRequestQueue:function(){return this.__oe;
},getActiveQueue:function(){return this.__of;
},_debug:function(){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){var z=this.__of.length+t+(this.__oe.length+this.__of.length);
this.debug("Progress: "+z);
window.status=w+z;
}}},_check:function(){this._debug();
if(this.__of.length==0&&this.__oe.length==0){this.__oh.stop();
}if(!this.getEnabled()){return;
}if(this.__oe.length==0||(this.__oe[0].isAsynchronous()&&this.__of.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__og>=this.getMaxTotalRequests()){return;
}var H=this.__oe.shift();
var I=new qx.io.remote.Exchange(H);
this.__og++;
this.__of.push(I);
this._debug();
I.addListener(r,this._onsending,this);
I.addListener(x,this._onreceiving,this);
I.addListener(q,this._oncompleted,this);
I.addListener(h,this._oncompleted,this);
I.addListener(o,this._oncompleted,this);
I.addListener(p,this._oncompleted,this);
I._start=(new Date).valueOf();
I.send();
if(this.__oe.length>0){this._check();
}},_remove:function(a){qx.lang.Array.remove(this.__of,a);
a.dispose();
this._check();
},__oi:0,_onsending:function(e){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){this.__oi++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__oi);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){if(e.getTarget()._counted){this.__oi--;
this.debug("ActiveCount: "+this.__oi);
}}}var L=e.getTarget().getRequest();
var K=f+e.getType();
try{if(L[K]){L[K](e);
}}catch(E){var J=qx.dev.StackTrace.getStackTraceFromError(E);
this.error("Request "+L+" handler "+K+" threw an error: "+E+"\nStack Trace:\n"+J);
try{if(L[g]){var event=qx.event.Registration.createEvent(h,qx.event.type.Event);
L[g](event);
}}catch(D){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var S=this.__of;

if(S.length==0){this.__oh.stop();
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
}}}},_applyEnabled:function(F,G){if(F){this._check();
}this.__oh.setEnabled(F);
},add:function(A){A.setState(v);

if(A.isAsynchronous()){this.__oe.push(A);
}else{this.__oe.unshift(A);
}this._check();

if(this.getEnabled()){this.__oh.start();
}},abort:function(B){var C=B.getTransport();

if(C){C.abort();
}else if(qx.lang.Array.contains(this.__oe,B)){qx.lang.Array.remove(this.__oe,B);
}}},destruct:function(){this._disposeArray(c);
this._disposeObjects(u);
this.__oe=null;
}});
})();
(function(){var O="qx.ioRemoteDebug",N="qx.debug",M="on",L="failed",K="sending",J="completed",I="receiving",H="aborted",G="timeout",F="qx.event.type.Event",bM="Connection dropped",bL="qx.io.remote.Response",bK="configured",bJ="Proxy authentication required",bI="qx.io.remote.transport.Abstract",bH="MSHTML-specific HTTP status code",bG="Not available",bF="Precondition failed",bE="Server error",bD="qx.io.remote.Exchange",V="Bad gateway",W="Gone",T="See other",U="Partial content",R="Server timeout",S="qx.io.remote.transport.Script",P="HTTP version not supported",Q="Unauthorized",ba="Multiple choices",bb="Payment required",bj="Not implemented",bh="Request-URL too large",br="Length required",bm="_applyState",bz="changeState",bw="Not modified",bd="Not acceptable",bC="qx.io.remote.Request",bB="Connection closed by server",bA="Moved permanently",bc="_applyImplementation",bf="Method not allowed",bg="Moved temporarily",bi="Forbidden",bk="Use proxy",bn="Ok",bt="Not found",by="Request time-out",X="Bad request",Y="Conflict",be="No content",bq="qx.io.remote.transport.XmlHttp",bp="qx.io.remote.transport.Iframe",bo="Request entity too large",bv="Unknown status code",bu="Unsupported media type",bl="Gateway time-out",bs="created",E="Out of resources",bx="undefined";
qx.Class.define(bD,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this.setRequest(D);
D.setTransport(this);
},events:{"sending":F,"receiving":F,"completed":bL,"aborted":F,"failed":bL,"timeout":bL},statics:{typesOrder:[bq,bp,S],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bQ,bR){qx.io.remote.Exchange.typesAvailable[bR]=bQ;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var y in qx.io.remote.Exchange.typesAvailable){var x=qx.io.remote.Exchange.typesAvailable[y];

if(x.isSupported()){qx.io.remote.Exchange.typesSupported[y]=x;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(a,b,c){if(!qx.lang.Array.contains(a.handles.responseTypes,c)){return false;
}
for(var d in b){if(!a.handles[d]){return false;
}}return true;
},_nativeMap:{0:bs,1:bK,2:K,3:I,4:J},wasSuccessful:function(bN,bO,bP){if(bP){switch(bN){case null:case 0:return true;
case -1:return bO<4;
default:return typeof bN===bx;
}}else{switch(bN){case -1:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)&&bO>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+bO);
}}return bO<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)&&bO===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return bO!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bN);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bN);
}}return false;
default:if(bN>206&&bN<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bN+" ("+bO+")");
return false;
}}},statusCodeToString:function(w){switch(w){case -1:return bG;
case 200:return bn;
case 304:return bw;
case 206:return U;
case 204:return be;
case 300:return ba;
case 301:return bA;
case 302:return bg;
case 303:return T;
case 305:return bk;
case 400:return X;
case 401:return Q;
case 402:return bb;
case 403:return bi;
case 404:return bt;
case 405:return bf;
case 406:return bd;
case 407:return bJ;
case 408:return by;
case 409:return Y;
case 410:return W;
case 411:return br;
case 412:return bF;
case 413:return bo;
case 414:return bh;
case 415:return bu;
case 500:return bE;
case 501:return bj;
case 502:return V;
case 503:return E;
case 504:return bl;
case 505:return P;
case 12002:return R;
case 12029:return bM;
case 12030:return bM;
case 12031:return bM;
case 12152:return bB;
case 13030:return bH;
default:return bv;
}}},properties:{request:{check:bC,nullable:true},implementation:{check:bI,nullable:true,apply:bc},state:{check:[bK,K,I,J,H,G,L],init:bK,event:bz,apply:bm}},members:{send:function(){var k=this.getRequest();

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
try{if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Using implementation: "+p.classname);
}}j=new p;
this.setImplementation(j);
j.setUseBasicHttpAuth(k.getUseBasicHttpAuth());
j.send();
return true;
}catch(bT){this.error("Request handler throws error");
this.error(bT);
return;
}}}this.error("There is no transport implementation available to handle this request: "+k);
},abort:function(){var z=this.getImplementation();

if(z){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Abort: implementation "+z.toHashCode());
}}z.abort();
}else{if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Abort: forcing state to be aborted");
}}this.setState(H);
}},timeout:function(){var bS=this.getImplementation();

if(bS){this.warn("Timeout: implementation "+bS.toHashCode());
bS.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(G);
}this.__oj();
},__oj:function(){var f=this.getRequest();

if(f){f.setTimeout(0);
}},_onsending:function(e){this.setState(K);
},_onreceiving:function(e){this.setState(I);
},_oncompleted:function(e){this.setState(J);
},_onabort:function(e){this.setState(H);
},_onfailed:function(e){this.setState(L);
},_ontimeout:function(e){this.setState(G);
},_applyImplementation:function(A,B){if(B){B.removeListener(K,this._onsending,this);
B.removeListener(I,this._onreceiving,this);
B.removeListener(J,this._oncompleted,this);
B.removeListener(H,this._onabort,this);
B.removeListener(G,this._ontimeout,this);
B.removeListener(L,this._onfailed,this);
}
if(A){var C=this.getRequest();
A.setUrl(C.getUrl());
A.setMethod(C.getMethod());
A.setAsynchronous(C.getAsynchronous());
A.setUsername(C.getUsername());
A.setPassword(C.getPassword());
A.setParameters(C.getParameters());
A.setFormFields(C.getFormFields());
A.setRequestHeaders(C.getRequestHeaders());
A.setData(C.getData());
A.setResponseType(C.getResponseType());
A.addListener(K,this._onsending,this);
A.addListener(I,this._onreceiving,this);
A.addListener(J,this._oncompleted,this);
A.addListener(H,this._onabort,this);
A.addListener(G,this._ontimeout,this);
A.addListener(L,this._onfailed,this);
}},_applyState:function(q,r){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("State: "+r+" => "+q);
}}
switch(q){case K:this.fireEvent(K);
break;
case I:this.fireEvent(I);
break;
case J:case H:case G:case L:var t=this.getImplementation();

if(!t){break;
}this.__oj();

if(this.hasListener(q)){var u=qx.event.Registration.createEvent(q,qx.io.remote.Response);

if(q==J){var s=t.getResponseContent();
u.setContent(s);
if(s===null){if(qx.core.Variant.isSet(N,M)){if(qx.core.Setting.get(O)){this.debug("Altered State: "+q+" => failed");
}}q=L;
}}else if(q==L){u.setContent(t.getResponseContent());
}u.setStatusCode(t.getStatusCode());
u.setResponseHeaders(t.getResponseHeaders());
this.dispatchEvent(u);
}this.setImplementation(null);
t.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var v=this.getImplementation();

if(v){this.setImplementation(null);
v.dispose();
}this.setRequest(null);
}});
})();
(function(){var w="qx.event.type.Event",v="String",u="qx.debug",t="qx.ioRemoteDebug",s="failed",r="timeout",q="on",p="created",o="aborted",n="sending",g="configured",m="receiving",j="completed",f="Object",e="Boolean",i="abstract",h="_applyState",k="GET",d="changeState",l="qx.io.remote.transport.Abstract";
qx.Class.define(l,{type:i,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":w,"configured":w,"sending":w,"receiving":w,"completed":w,"aborted":w,"failed":w,"timeout":w},properties:{url:{check:v,nullable:true},method:{check:v,nullable:true,init:k},asynchronous:{check:e,nullable:true,init:true},data:{check:v,nullable:true},username:{check:v,nullable:true},password:{check:v,nullable:true},state:{check:[p,g,n,m,j,o,r,s],init:p,event:d,apply:h},requestHeaders:{check:f,nullable:true},parameters:{check:f,nullable:true},formFields:{check:f,nullable:true},responseType:{check:v,nullable:true},useBasicHttpAuth:{check:e,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Aborting...");
}}this.setState(o);
},timeout:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Timeout...");
}}this.setState(r);
},failed:function(){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.warn("Failed...");
}}this.setState(s);
},setRequestHeader:function(b,c){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(a){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(x,y){if(qx.core.Variant.isSet(u,q)){if(qx.core.Setting.get(t)){this.debug("State: "+x);
}}
switch(x){case p:this.fireEvent(p);
break;
case g:this.fireEvent(g);
break;
case n:this.fireEvent(n);
break;
case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case o:this.fireEvent(o);
break;
case s:this.fireEvent(s);
break;
case r:this.fireEvent(r);
break;
}return true;
}}});
})();
(function(){var R="qx.debug",Q="on",P="qx.ioRemoteDebugData",O="failed",N="qx.ioRemoteDebug",M="completed",L="=",K="aborted",J="",I="sending",br="&",bq="configured",bp="timeout",bo="application/xml",bn="qx.io.remote.transport.XmlHttp",bm="application/json",bl="text/html",bk="qx.client",bj="receiving",bi="text/plain",Y="text/javascript",ba="created",W="?",X='Referer',U='Basic ',V="\n</pre>",S="string",T='Authorization',bb="<pre>Could not execute json: \n",bc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",be=':',bd="parseerror",bg="file:",bf="webkit",bh="object";
qx.Class.define(bn,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bi,Y,bm,bo,bl]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bk,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__ok:false,__ol:0,__om:null,getRequest:function(){if(this.__om===null){this.__om=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__om.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__om;
},send:function(){this.__ol=0;
var bK=this.getRequest();
var bG=this.getMethod();
var bN=this.getAsynchronous();
var bM=this.getUrl();
var bI=(window.location.protocol===bg&&!(/^http(s){0,1}\:/.test(bM)));
this.__ok=bI;
var bQ=this.getParameters(false);
var bO=[];

for(var bH in bQ){var bL=bQ[bH];

if(bL instanceof Array){for(var i=0;i<bL.length;i++){bO.push(encodeURIComponent(bH)+L+encodeURIComponent(bL[i]));
}}else{bO.push(encodeURIComponent(bH)+L+encodeURIComponent(bL));
}}
if(bO.length>0){bM+=(bM.indexOf(W)>=0?br:W)+bO.join(br);
}if(this.getData()===null){var bQ=this.getParameters(true);
var bO=[];

for(var bH in bQ){var bL=bQ[bH];

if(bL instanceof Array){for(var i=0;i<bL.length;i++){bO.push(encodeURIComponent(bH)+L+encodeURIComponent(bL[i]));
}}else{bO.push(encodeURIComponent(bH)+L+encodeURIComponent(bL));
}}
if(bO.length>0){this.setData(bO.join(br));
}}var bP=function(bu){var bz=bc;
var bD=J;
var bx,bw,bv;
var bA,bB,bC,by;
var i=0;

do{bx=bu.charCodeAt(i++);
bw=bu.charCodeAt(i++);
bv=bu.charCodeAt(i++);
bA=bx>>2;
bB=((bx&3)<<4)|(bw>>4);
bC=((bw&15)<<2)|(bv>>6);
by=bv&63;

if(isNaN(bw)){bC=by=64;
}else if(isNaN(bv)){by=64;
}bD+=bz.charAt(bA)+bz.charAt(bB)+bz.charAt(bC)+bz.charAt(by);
}while(i<bu.length);
return bD;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bK.open(bG,bM,bN);
bK.setRequestHeader(T,U+bP(this.getUsername()+be+this.getPassword()));
}else{bK.open(bG,bM,bN,this.getUsername(),this.getPassword());
}}else{bK.open(bG,bM,bN);
}}catch(k){this.error("Failed with exception: "+k);
this.failed();
return;
}if(!qx.core.Variant.isSet(bk,bf)){bK.setRequestHeader(X,window.location.href);
}var bJ=this.getRequestHeaders();

for(var bH in bJ){bK.setRequestHeader(bH,bJ[bH]);
}try{if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Request: "+this.getData());
}}bK.send(this.getData());
}catch(B){if(bI){this.failedLocally();
}else{this.error("Failed to send data: "+B,"send");
this.failed();
}return;
}if(!bN){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===O){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case M:case K:case O:case bp:if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(N)){this.warn("Ignore Ready State Change");
}}return;
}var C=this.getReadyState();

if(C==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),C,this.__ok)){if(this.getState()===bq){this.setState(I);
}return this.failed();
}}while(this.__ol<C){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ol]);
}}),getReadyState:function(){var bT=null;

try{bT=this.getRequest().readyState;
}catch(t){}return bT;
},setRequestHeader:function(bs,bt){this.getRequestHeaders()[bs]=bt;
},getResponseHeader:function(w){var x=null;

try{x=this.getRequest().getResponseHeader(w)||null;
}catch(H){}return x;
},getStringResponseHeaders:function(){var h=null;

try{var g=this.getRequest().getAllResponseHeaders();

if(g){h=g;
}}catch(a){}return h;
},getResponseHeaders:function(){var o=this.getStringResponseHeaders();
var p={};

if(o){var m=o.split(/[\r\n]+/g);

for(var i=0,l=m.length;i<l;i++){var n=m[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(n){p[n[1]]=n[2];
}}}return p;
},getStatusCode:function(){var v=-1;

try{v=this.getRequest().status;
}catch(bS){}return v;
},getStatusText:function(){var D=J;

try{D=this.getRequest().statusText;
}catch(bE){}return D;
},getResponseText:function(){var u=null;

try{u=this.getRequest().responseText;
}catch(y){u=null;
}return u;
},getResponseXml:function(){var G=null;
var E=this.getStatusCode();
var F=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(E,F,this.__ok)){try{G=this.getRequest().responseXML;
}catch(bF){}}if(typeof G==bh&&G!=null){if(!G.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,J);
G.loadXML(s);
}if(!G.documentElement){throw new Error("Missing Document Element!");
}
if(G.documentElement.tagName==bd){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return G;
},getFetchedLength:function(){var j=this.getResponseText();
return typeof j==S?j.length:0;
},getResponseContent:function(){var b=this.getState();

if(b!==M&&b!=O){if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(N)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(N)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var d=this.getResponseText();

if(b==O){if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Failed: "+d);
}}return d;
}
switch(this.getResponseType()){case bi:case bl:if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Response: "+d);
}}return d;
case bm:if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Response: "+d);
}}
try{if(d&&d.length>0){var c=qx.util.Json.parse(d,false);
return (c===0?0:(c||null));
}else{return null;
}}catch(bR){this.error("Could not execute json: ["+d+"]",bR);
return bb+d+V;
}case Y:if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Response: "+d);
}}
try{if(d&&d.length>0){var c=window.eval(d);
return (c===0?0:(c||null));
}else{return null;
}}catch(f){this.error("Could not execute javascript: ["+d+"]",f);
return null;
}case bo:d=this.getResponseXml();

if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(P)){this.debug("Response: "+d);
}}return (d===0?0:(d||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(z,A){if(qx.core.Variant.isSet(R,Q)){if(qx.core.Setting.get(N)){this.debug("State: "+z);
}}
switch(z){case ba:this.fireEvent(ba);
break;
case bq:this.fireEvent(bq);
break;
case I:this.fireEvent(I);
break;
case bj:this.fireEvent(bj);
break;
case M:this.fireEvent(M);
break;
case O:this.fireEvent(O);
break;
case K:this.getRequest().abort();
this.fireEvent(K);
break;
case bp:this.getRequest().abort();
this.fireEvent(bp);
break;
}}},defer:function(q,r){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bn);
},destruct:function(){var bU=this.getRequest();

if(bU){bU.onreadystatechange=qx.lang.Function.empty;
switch(bU.readyState){case 1:case 2:case 3:bU.abort();
}}this.__om=null;
}});
})();
(function(){var G=",",F="",E="string",D="null",C='"',B="qx.jsonDebugging",A='\\u00',z="new Date(Date.UTC(",y='\\\\',x="__os",bd='\\f',bc="__oq",bb="__or",ba='\\"',Y="))",X="__oA",W="}",V='(',U=":",T="{",N='\\r',O='\\t',L="__oz",M="]",J="[",K="Use 'parse' instead!",H="__op",I="qx.jsonEncodeUndefined",P='\\b',Q="qx.util.Json",S=')',R='\\n';
qx.Class.define(Q,{statics:{__on:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__oo:{"function":H,"boolean":bc,"number":bb,"string":x,"object":L,"undefined":X},__op:function(be,bf){return String(be);
},__oq:function(d,e){return String(d);
},__or:function(bn,bo){return isFinite(bn)?String(bn):D;
},__os:function(r,s){var t;

if(/["\\\x00-\x1f]/.test(r)){t=r.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__ou);
}else{t=r;
}return C+t+C;
},__ot:{'\b':P,'\t':O,'\n':R,'\f':bd,'\r':N,'"':ba,'\\':y},__ou:function(a,b){var bw=qx.util.Json.__ot[b];

if(bw){return bw;
}bw=b.charCodeAt();
return A+Math.floor(bw/16).toString(16)+(bw%16).toString(16);
},__ov:function(j,k){var n=[],q=true,p,m;
var o=qx.util.Json.__oC;
n.push(J);

if(o){qx.util.Json.__ow+=qx.util.Json.BEAUTIFYING_INDENT;
n.push(qx.util.Json.__ow);
}
for(var i=0,l=j.length;i<l;i++){m=j[i];
p=this.__oo[typeof m];

if(p){m=this[p](m,i+F);

if(typeof m==E){if(!q){n.push(G);

if(o){n.push(qx.util.Json.__ow);
}}n.push(m);
q=false;
}}}
if(o){qx.util.Json.__ow=qx.util.Json.__ow.substring(0,qx.util.Json.__ow.length-qx.util.Json.BEAUTIFYING_INDENT.length);
n.push(qx.util.Json.__ow);
}n.push(M);
return n.join(F);
},__ox:function(u,v){var w=u.getUTCFullYear()+G+u.getUTCMonth()+G+u.getUTCDate()+G+u.getUTCHours()+G+u.getUTCMinutes()+G+u.getUTCSeconds()+G+u.getUTCMilliseconds();
return z+w+Y;
},__oy:function(bg,bh){var bk=[],bm=true,bj,bi;
var bl=qx.util.Json.__oC;
bk.push(T);

if(bl){qx.util.Json.__ow+=qx.util.Json.BEAUTIFYING_INDENT;
bk.push(qx.util.Json.__ow);
}
for(var bh in bg){bi=bg[bh];
bj=this.__oo[typeof bi];

if(bj){bi=this[bj](bi,bh);

if(typeof bi==E){if(!bm){bk.push(G);

if(bl){bk.push(qx.util.Json.__ow);
}}bk.push(this.__os(bh),U,bi);
bm=false;
}}}
if(bl){qx.util.Json.__ow=qx.util.Json.__ow.substring(0,qx.util.Json.__ow.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bk.push(qx.util.Json.__ow);
}bk.push(W);
return bk.join(F);
},__oz:function(bu,bv){if(bu){if(qx.lang.Type.isFunction(bu.toJSON)&&bu.toJSON!==this.__on){return this.__oB(bu.toJSON(bv),bv);
}else if(qx.lang.Type.isDate(bu)){return this.__ox(bu,bv);
}else if(qx.lang.Type.isArray(bu)){return this.__ov(bu,bv);
}else if(qx.lang.Type.isObject(bu)){return this.__oy(bu,bv);
}return F;
}return D;
},__oA:function(bp,bq){if(qx.core.Setting.get(I)){return D;
}},__oB:function(by,bz){return this[this.__oo[typeof by]](by,bz);
},stringify:function(br,bs){this.__oC=bs;
this.__ow=this.BEAUTIFYING_LINE_END;
var bt=this.__oB(br,F);

if(typeof bt!=E){bt=null;
}if(qx.core.Setting.get(B)){qx.log.Logger.debug(this,"JSON request: "+bt);
}return bt;
},parse:function(f,g){if(g===undefined){g=true;
}
if(qx.core.Setting.get(B)){qx.log.Logger.debug(this,"JSON response: "+f);
}
if(g){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(f.replace(/"(\\.|[^"\\])*"/g,F))){throw new Error("Could not parse JSON string!");
}}
try{var h=(f&&f.length>0)?eval(V+f+S):null;
return h;
}catch(c){throw new Error("Could not evaluate JSON string: "+c.message);
}},parseQx:function(bx){qx.log.Logger.deprecatedMethodWarning(arguments.callee,K);
return qx.util.Json.parse(bx,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(bA){bA.__on=Date.prototype.toJSON;
}});
})();
(function(){var m="qx.debug",l="on",k="qx.ioRemoteDebugData",j="=",h="&",g="application/xml",f="application/json",d="text/html",c="qx.ioRemoteDebug",b="qx.client",K="textarea",J="none",I="text/plain",H="text/javascript",G="",F="completed",E="?",D="qx.io.remote.transport.Iframe",C="gecko",B="frame_",t="aborted",u="_data_",r="pre",s="javascript:void(0)",p="sending",q="form",n="failed",o='<iframe name="',v="mshtml",w="form_",y='"></iframe>',x="iframe",A="timeout",z="qx/static/blank.gif";
qx.Class.define(D,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var V=(new Date).valueOf();
var W=B+V;
var X=w+V;
if(qx.core.Variant.isSet(b,v)){this.__oD=document.createElement(o+W+y);
}else{this.__oD=document.createElement(x);
}this.__oD.src=s;
this.__oD.id=this.__oD.name=W;
this.__oD.onload=qx.lang.Function.bind(this._onload,this);
this.__oD.style.display=J;
document.body.appendChild(this.__oD);
this.__oE=document.createElement(q);
this.__oE.target=W;
this.__oE.id=this.__oE.name=X;
this.__oE.style.display=J;
document.body.appendChild(this.__oE);
this.__oF=document.createElement(K);
this.__oF.id=this.__oF.name=u;
this.__oE.appendChild(this.__oF);
this.__oD.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[I,H,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__oF:null,__oG:0,__oE:null,__oD:null,send:function(){var ba=this.getMethod();
var bc=this.getUrl();
var bg=this.getParameters(false);
var bf=[];

for(var bb in bg){var bd=bg[bb];

if(bd instanceof Array){for(var i=0;i<bd.length;i++){bf.push(encodeURIComponent(bb)+j+encodeURIComponent(bd[i]));
}}else{bf.push(encodeURIComponent(bb)+j+encodeURIComponent(bd));
}}
if(bf.length>0){bc+=(bc.indexOf(E)>=0?h:E)+bf.join(h);
}if(this.getData()===null){var bg=this.getParameters(true);
var bf=[];

for(var bb in bg){var bd=bg[bb];

if(bd instanceof Array){for(var i=0;i<bd.length;i++){bf.push(encodeURIComponent(bb)+j+encodeURIComponent(bd[i]));
}}else{bf.push(encodeURIComponent(bb)+j+encodeURIComponent(bd));
}}
if(bf.length>0){this.setData(bf.join(h));
}}var Y=this.getFormFields();

for(var bb in Y){var be=document.createElement(K);
be.name=bb;
be.appendChild(document.createTextNode(Y[bb]));
this.__oE.appendChild(be);
}this.__oE.action=bc;
this.__oE.method=ba;
this.__oF.appendChild(document.createTextNode(this.getData()));
this.__oE.submit();
this.setState(p);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__oE.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__oD.readyState]);
}),_switchReadyState:function(P){switch(this.getState()){case F:case t:case n:case A:this.warn("Ignore Ready State Change");
return;
}while(this.__oG<P){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oG]);
}},setRequestHeader:function(L,M){},getResponseHeader:function(U){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return G;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__oD);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__oD);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__oD);
},getIframeTextContent:function(){var O=this.getIframeBody();

if(!O){return null;
}
if(!O.firstChild){return G;
}if(O.firstChild.tagName&&O.firstChild.tagName.toLowerCase()==r){return O.firstChild.innerHTML;
}else{return O.innerHTML;
}},getIframeHtmlContent:function(){var Q=this.getIframeBody();
return Q?Q.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==F){if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(c)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bh=this.getIframeTextContent();

switch(this.getResponseType()){case I:if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return bh;
break;
case d:bh=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return bh;
break;
case f:bh=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return bh&&bh.length>0?qx.util.Json.parse(bh,false):null;
}catch(a){return this.error("Could not execute json: ("+bh+")",a);
}case H:bh=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}
try{return bh&&bh.length>0?window.eval(bh):null;
}catch(N){return this.error("Could not execute javascript: ("+bh+")",N);
}case g:bh=this.getIframeDocument();

if(qx.core.Variant.isSet(m,l)){if(qx.core.Setting.get(k)){this.debug("Response: "+this._responseContent);
}}return bh;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(R,S,T){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,D);
},destruct:function(){if(this.__oD){this.__oD.onload=null;
this.__oD.onreadystatechange=null;
if(qx.core.Variant.isSet(b,C)){this.__oD.src=qx.util.ResourceManager.getInstance().toUri(z);
}document.body.removeChild(this.__oD);
}
if(this.__oE){document.body.removeChild(this.__oE);
}this.__oD=this.__oE=null;
}});
})();
(function(){var x="qx.debug",w="on",v="&",u="=",t="qx.ioRemoteDebug",s="application/json",r="completed",q="text/plain",p="qx.ioRemoteDebugData",o="text/javascript",g="?",n="qx.io.remote.transport.Script",k="",e="_ScriptTransport_data",d="failed",j="script",h="timeout",l="_ScriptTransport_",c="_ScriptTransport_id",m="aborted",f="utf-8";
qx.Class.define(n,{extend:qx.io.remote.transport.Abstract,construct:function(){arguments.callee.base.call(this);
var D=++qx.io.remote.transport.Script.__oH;

if(D>=2000000000){qx.io.remote.transport.Script.__oH=D=1;
}this.__oI=null;
this.__oH=D;
},statics:{__oH:0,_instanceRegistry:{},ScriptTransport_PREFIX:l,ScriptTransport_ID_PARAM:c,ScriptTransport_DATA_PARAM:e,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[q,o,s]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(a,content){var b=qx.io.remote.transport.Script._instanceRegistry[a];

if(b==null){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{b._responseContent=content;
b._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__oJ:0,__oI:null,__oH:null,send:function(){var H=this.getUrl();
H+=(H.indexOf(g)>=0?v:g)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+u+this.__oH;
var K=this.getParameters();
var J=[];

for(var G in K){if(G.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var I=K[G];

if(I instanceof Array){for(var i=0;i<I.length;i++){J.push(encodeURIComponent(G)+u+encodeURIComponent(I[i]));
}}else{J.push(encodeURIComponent(G)+u+encodeURIComponent(I));
}}
if(J.length>0){H+=v+J.join(v);
}var F=this.getData();

if(F!=null){H+=v+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+u+encodeURIComponent(F);
}qx.io.remote.transport.Script._instanceRegistry[this.__oH]=this;
this.__oI=document.createElement(j);
this.__oI.charset=f;
this.__oI.src=H;

if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(p)){this.debug("Request: "+H);
}}document.body.appendChild(this.__oI);
},_switchReadyState:function(L){switch(this.getState()){case r:case m:case d:case h:this.warn("Ignore Ready State Change");
return;
}while(this.__oJ<L){this.setState(qx.io.remote.Exchange._nativeMap[++this.__oJ]);
}},setRequestHeader:function(y,z){},getResponseHeader:function(M){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==r){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(t)){this.debug("Returning content for responseType: "+this.getResponseType());
}}
switch(this.getResponseType()){case q:case s:case o:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(p)){this.debug("Response: "+this._responseContent);
}}var E=this._responseContent;
return (E===0?0:(E||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(A,B,C){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,n);
},destruct:function(){if(this.__oI){delete qx.io.remote.transport.Script._instanceRegistry[this.__oH];
document.body.removeChild(this.__oI);
}this.__oI=this._responseContent=null;
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
(function(){var O="test",N="",M="All",L=".",K="^",J="demobrowser.TreeDataHandler",I="ttree",H="\\.[^\\.]+$",G="depth";
qx.Class.define(J,{extend:qx.core.Object,construct:function(x){arguments.callee.base.call(this);
this.tmap=x;
this.ttree=this.__oK(x);
},members:{__oK:function(R){var T=R;
function S(X,Y){var bc=Y.classname;
var ba=bc.split(L);
function bb(parent,e){if(!e.length){return parent;
}else{var f=e[0];
var g=e.slice(1,e.length);
var h=null;
var k=null;
var l=parent.getChildren();

for(var i=0;i<l.length;i++){if(l[i].label==f){k=l[i];
break;
}}if(k==null){k=new demobrowser.Tree(f);
parent.add(k);
}h=bb(k,g);
return h;
}}var bd=bb(X,ba);

if(!bd){throw new Error("No target to insert tests");
}U.readTree(Y,bd);
}function V(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var W=new demobrowser.Tree(M);
var U=this;
T.sort(V);

for(var i=0;i<T.length;i++){S(W,T[i]);
}return W;
},readTree:function(bg,bh){var bj=arguments[1]||new demobrowser.Tree(bg.classname);
var bh;
function bi(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}bg.tests.sort(bi);

for(var j=0;j<bg.tests.length;j++){bh=new demobrowser.Tree(bg.tests[j].name);
bh.tags=bg.tests[j].tags;
bh.type=O;
bh.desc=bg.tests[j].desc;
bj.add(bh);
}if(bg.children&&bg.children.length){for(var j=0;j<bg.children.length;j++){bj.add(this.readTree(bg.children[j]));
}}return bj;
},getRoot:function(){if(!this.Root){var B={classname:N,tests:[]};
var A=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(B.classname.length>A[i].classname.length){B=A[i];
}}this.Root=B;
}return this.Root.classname;
},getChilds:function(o){var p=[];
var r=this.tmap;
var q=K+o+H;
var s=new RegExp(q);

for(var i=0;i<r.length;i++){if(r[i].classname.match(s)){p.push(r[i]);
}}return p;
},getTests:function(be){var bf=this.tmap;

for(var i=0;i<bf.length;i++){if(bf[i].classname==be){return bf[i].tests;
}}return [];
},getPath:function(y){if(!y){return N;
}var z=y.pwd();
z.shift();
if(this.isClass(y)){z=z.concat(y.label);
}return z;
},getChildren:function(C){if(C==M){var D=this.tmap;
var E=[];

for(var i=0;i<D.length;i++){E.push(D[i].classname);
}return E;
}else if(this.isClass(C)){return this.getTests(C);
}else{return [];
}},isClass:function(F){if(F.type&&F.type==O){return false;
}else{return true;
}},hasTests:function(c){if(!this.isClass(c)){return false;
}else{var d=c.getChildren();

for(var i=0;i<d.length;i++){if(d[i].type&&d[i].type==O){return true;
}}return false;
}},classFromTest:function(bm){var bn=N;
var bo=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==bm){bn=this.tmap[i].classname;
break classloop;
}}}return bn;
},getFullName:function(P){if(!P){return N;
}var Q=this.getPath(P);

if(P.type&&P.type==O){Q=Q.concat(P.label);
}return Q.join(L);
},getPreviousNode:function(m){var n=m.getPrevSibling();

if(n){return n;
}},getNextNode:function(bk){var bl=bk.getNextSibling();

if(bl){return bl;
}},testCount:function(t){if(t.type&&t.type==O){return 1;
}else{var u=0;
var w=t.getIterator(G);
var v;

while(v=w()){if(v.type&&v.type==O){u++;
}}return u;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(I);
}});
})();
(function(){var v="depth",u="",t="widgetLinkFlat",s="widgetLinkFull",r="parent",q="children",p="demobrowser.Tree";
qx.Class.define(p,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.label=arguments[0]||u;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(e,g){var h=v;
var j=this;
var k=this.getIterator(h);

while(j=k()){e.apply(j,g);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(x){var z=[this];
var y=x==v?1:0;
function f(){var a;

if(z.length){a=z.shift();
var b=a.getChildren();

if(b.length){if(y){z=b.concat(z);
}else{z=z.concat(b);
}}}else{a=null;
}return a;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(l){var m=this.parent.getChildren();
var n=arguments.callee.self.indexOf(m,this);
var o=n+l;

if(m[o]){return m[o];
}},add:function(w){this.children.push(w);
w.parent=this;
}},statics:{indexOf:function(c,d){for(var i=0;i<c.length;i++){if(c[i]==d){return i;
}}}},destruct:function(){this._disposeObjects(s,t,r);
this._disposeArray(q);
}});
})();
(function(){var o="mshtml",n="pop.push.reverse.shift.sort.splice.unshift.join.slice",m="number",l="qx.type.BaseArray",k="qx.client",j=".";
qx.Class.define(l,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function h(a){if(qx.core.Variant.isSet(k,o)){g.prototype={length:0,$$isArray:true};
var d=n.split(j);

for(var length=d.length;length;){g.prototype[d[--length]]=Array.prototype[d[length]];
}}var e=Array.prototype.slice;
g.prototype.concat=function(){var q=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var p;

if(arguments[i] instanceof g){p=e.call(arguments[i],0);
}else if(arguments[i] instanceof Array){p=arguments[i];
}else{p=[arguments[i]];
}q.push.apply(q,p);
}return q;
};
g.prototype.toString=function(){return e.call(this,0).toString();
};
g.prototype.toLocaleString=function(){return e.call(this,0).toLocaleString();
};
g.prototype.constructor=g;
g.prototype.indexOf=qx.lang.Core.arrayIndexOf;
g.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
g.prototype.forEach=qx.lang.Core.arrayForEach;
g.prototype.some=qx.lang.Core.arraySome;
g.prototype.every=qx.lang.Core.arrayEvery;
var b=qx.lang.Core.arrayFilter;
var c=qx.lang.Core.arrayMap;
g.prototype.filter=function(){var u=new this.constructor;
u.push.apply(u,b.apply(this,arguments));
return u;
};
g.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,c.apply(this,arguments));
return t;
};
g.prototype.slice=function(){var r=new this.constructor;
r.push.apply(r,Array.prototype.slice.apply(this,arguments));
return r;
};
g.prototype.splice=function(){var s=new this.constructor;
s.push.apply(s,Array.prototype.splice.apply(this,arguments));
return s;
};
g.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
g.prototype.valueOf=function(){return this.length;
};
return g;
}function g(length){if(arguments.length===1&&typeof length===m){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function f(){}f.prototype=[];
g.prototype=new f;
g.prototype.length=0;
qx.type.BaseArray=h(g);
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
(function(){var s="</span>",r="sym",q="nl",p="qxkey",o="ws",n=">",m="qqstr",l="<",k="qstr",j="linecomment",bn="ident",bm="keyword",bl="regexp",bk="&",bj="|",bi="fullcomment",bh="atom",bg="\\r\\n|\\r|\\n",bf="\\s*\\)*",be="\\s",z="^",A='["][^"]*["]',x="real",y="\\s*[,\\)]",v="<span class='string'>",w="[a-zA-Z_][a-zA-Z0-9_]*\\b",t="<span class='comment'>",u="[+-]?\\d+",D="\\s*\\(*\\s*",E="&nbsp;",M="qx.dev.Tokenizer",K="\\t",T="\\s*\\)*\\s*\\)",O="\\.(?:replace)\\s*\\(\\s*\\(*\\s*",ba="\\)*\\.(?:test|exec)\\s*\\(\\s*",X="<span class='regexp'>",G="int",bd="'>",bc="<span class='",bb="(?:\\/(?!\\*)[^\\t\\n\\r\\f\\v\\/]+?\\/[mgi]*)",F=".",I="\\s*\\)*\\s*?,?",J="[\\(,]\\s*",L="<span class='ident'>",N="g",P="[+-]?\\d+(([.]\\d+)*([eE][+-]?\\d+))?",U="\\/\\*(?:.|[\\n\\r])*?\\*\\/",Y="\n",B="$",C="['][^']*[']",H="tab",S="\\/\\/.*?[\\n\\r$]",R="<br>",Q=" ",W="(?::|=|\\?)\\s*\\(*\\s*",V="\\.(?:match|search|split)\\s*\\(\\s*\\(*\\s*";
qx.Class.define(M,{extend:qx.core.Object,statics:{tokenizeJavaScript:function(bo){var bS={"break":1,"case":1,"catch":1,"continue":1,"default":1,"delete":1,"do":1,"else":1,"finally":1,"for":1,"function":1,"if":1,"in":1,"instanceof":1,"new":1,"return":1,"switch":1,"throw":1,"try":1,"typeof":1,"var":1,"while":1,"with":1};
var bF={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var br={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bB=function(bT){return new RegExp(z+bT+B);
};
var bL=S;
var bC=U;
var bv=w;
var bE=u;
var bz=P;
var bH=A;
var bG=C;
var bt=K;
var bO=bg;
var bQ=be;
var bA=bb;
var bD=[V+bA+T,O+bA+I,D+bA+ba,W+bA+bf,J+bA+y].join(bj);
var bM=bB(bL);
var bw=bB(bC);
var bJ=bB(bv);
var bs=bB(bE);
var bP=bB(bz);
var by=bB(bH);
var bq=bB(bG);
var bK=bB(bt);
var bx=bB(bO);
var bp=bB(bQ);
var bu=bB(bD);
var bI=new RegExp([bL,bC,bv,bE,bz,bH,bG,bG,bt,bO,bQ,bD,F].join(bj),N);
var bN=[];
var a=bo.match(bI);

for(var i=0;i<a.length;i++){var bR=a[i];

if(bR.match(bM)){bN.push({type:j,value:bR});
}else if(bR.match(bw)){bN.push({type:bi,value:bR});
}else if(bR.match(bu)){bN.push({type:bl,value:bR});
}else if(bR.match(bq)){bN.push({type:k,value:bR});
}else if(bR.match(by)){bN.push({type:m,value:bR});
}else if(bS[bR]){bN.push({type:bm,value:bR});
}else if(bF[bR]){bN.push({type:bh,value:bR});
}else if(br[bR]){bN.push({type:p,value:bR});
}else if(bR.match(bJ)){bN.push({type:bn,value:bR});
}else if(bR.match(bP)){bN.push({type:x,value:bR});
}else if(bR.match(bs)){bN.push({type:G,value:bR});
}else if(bR.match(bx)){bN.push({type:q,value:bR});
}else if(bR.match(bB(bp))){bN.push({type:o,value:bR});
}else if(bR.match(bK)){bN.push({type:H,value:bR});
}else if(bR==n){bN.push({type:r,value:n});
}else if(bR==l){bN.push({type:r,value:l});
}else if(bR==bk){bN.push({type:r,value:bk});
}else{bN.push({type:r,value:bR});
}}return bN;
},javaScriptToHtml:function(b){var f=qx.dev.Tokenizer.tokenizeJavaScript(b);
var e=new qx.util.StringBuilder();

for(var i=0;i<f.length;i++){var g=f[i];
var d=qx.bom.String.escape(g.value);

switch(g.type){case bl:e.add(X,d,s);
break;
case bn:e.add(L,d,s);
break;
case j:case bi:e.add(t,d,s);
break;
case k:case m:e.add(v,d,s);
break;
case bm:case bh:case p:e.add(bc,g.type,bd,d,s);
break;
case q:var c=qx.bom.client.Engine.MSHTML?R:Y;
e.add(c);
break;
case o:var h=qx.bom.client.Engine.MSHTML?E:Q;
e.add(h);
break;
default:e.add(d);
}}return e.get();
}}});
})();
(function(){var j="\n",i="",h=" &nbsp;",g="<br>",f=" ",e="qx.bom.String";
qx.Class.define(e,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(d){return qx.util.StringEscape.escape(d,qx.bom.String.FROM_CHARCODE);
},unescape:function(k){return qx.util.StringEscape.unescape(k,qx.bom.String.TO_CHARCODE);
},fromText:function(o){return qx.bom.String.escape(o).replace(/(  |\n)/g,function(l){var m={"  ":h,"\n":g};
return m[l]||l;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(p){if(/\s+/.test(p)){return f;
}else if(/^<BR|^<br/gi.test(p)){return j;
}else{return i;
}}));
}},defer:function(a,b,c){a.FROM_CHARCODE=qx.lang.Object.invert(a.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(m,n){var p,r=d;

for(var i=0,l=m.length;i<l;i++){var q=m.charAt(i);
var o=q.charCodeAt(0);

if(n[o]){p=f+n[o]+g;
}else{if(o>0x7F){p=b+o+g;
}else{p=q;
}}r+=p;
}return r;
},unescape:function(s,t){return s.replace(/&[#\w]+;/gi,function(h){var j=h;
var h=h.substring(1,h.length-1);
var k=t[h];

if(k){j=String.fromCharCode(k);
}else{if(h.charAt(0)==c){if(h.charAt(1).toUpperCase()==e){k=h.substring(2);
if(k.match(/^[0-9A-Fa-f]+$/gi)){j=String.fromCharCode(parseInt(k,16));
}}else{k=h.substring(1);
if(k.match(/^\d+$/gi)){j=String.fromCharCode(parseInt(k,10));
}}}}return j;
});
}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var r="qx.debug",q="_applyStyle",p="on",o="Color",n="px",m="solid",l="dotted",k="double",j="dashed",i="",d="_applyWidth",h="qx.ui.decoration.Uniform",g="px ",c=" ",b="scale",f="PositiveInteger",e="absolute";
qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(s,t,u){arguments.callee.base.call(this);
if(s!=null){this.setWidth(s);
}
if(t!=null){this.setStyle(t);
}
if(u!=null){this.setColor(u);
}},properties:{width:{check:f,init:0,apply:d},style:{nullable:true,check:[m,l,j,k],init:m,apply:q},color:{nullable:true,check:o,apply:q},backgroundColor:{check:o,nullable:true,apply:q}},members:{__oL:null,_getDefaultInsets:function(){var a=this.getWidth();
return {top:a,right:a,bottom:a,left:a};
},_isInitialized:function(){return !!this.__oL;
},getMarkup:function(){if(this.__oL){return this.__oL;
}var y={position:e,top:0,left:0};
var z=this.getWidth();

if(qx.core.Variant.isSet(r,p)){if(z===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var B=qx.theme.manager.Color.getInstance();
y.border=z+g+this.getStyle()+c+B.resolve(this.getColor());
var A=this._generateBackgroundMarkup(y);
return this.__oL=A;
},resize:function(C,D,E){var G=this.getBackgroundImage()&&this.getBackgroundRepeat()==b;

if(G||qx.bom.client.Feature.CONTENT_BOX){var F=this.getWidth()*2;
D-=F;
E-=F;
if(D<0){D=0;
}
if(E<0){E=0;
}}C.style.width=D+n;
C.style.height=E+n;
},tint:function(v,w){var x=qx.theme.manager.Color.getInstance();

if(w==null){w=this.getBackgroundColor();
}v.style.backgroundColor=x.resolve(w)||i;
},_applyWidth:function(){if(qx.core.Variant.isSet(r,p)){if(this.__oL){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(r,p)){if(this.__oL){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__oL=null;
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="double",k="px ",j="dotted",i="_applyWidth",h="dashed",g="Number",f=" ",M="qx.debug",L="shorthand",K="on",J="px",I="widthTop",H="styleRight",G="styleLeft",F="widthLeft",E="widthBottom",D="styleTop",v="colorBottom",w="styleBottom",t="widthRight",u="colorLeft",r="colorRight",s="colorTop",p="scale",q="border-top",x="border-left",y="border-right",A="qx.ui.decoration.Single",z="",C="border-bottom",B="absolute";
qx.Class.define(A,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(V,W,X){arguments.callee.base.call(this);
if(V!=null){this.setWidth(V);
}
if(W!=null){this.setStyle(W);
}
if(X!=null){this.setColor(X);
}},properties:{widthTop:{check:g,init:0,apply:i},widthRight:{check:g,init:0,apply:i},widthBottom:{check:g,init:0,apply:i},widthLeft:{check:g,init:0,apply:i},styleTop:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleRight:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleBottom:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleLeft:{nullable:true,check:[n,j,h,l],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[F,G,u]},right:{group:[t,H,r]},top:{group:[I,D,s]},bottom:{group:[E,w,v]},width:{group:[I,t,E,F],mode:L},style:{group:[D,H,w,G],mode:L},color:{group:[s,r,v,u],mode:L}},members:{__oM:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__oM;
},getMarkup:function(a){if(this.__oM){return this.__oM;
}var b=qx.theme.manager.Color.getInstance();
var c={};
var e=this.getWidthTop();

if(e>0){c[q]=e+k+this.getStyleTop()+f+b.resolve(this.getColorTop());
}var e=this.getWidthRight();

if(e>0){c[y]=e+k+this.getStyleRight()+f+b.resolve(this.getColorRight());
}var e=this.getWidthBottom();

if(e>0){c[C]=e+k+this.getStyleBottom()+f+b.resolve(this.getColorBottom());
}var e=this.getWidthLeft();

if(e>0){c[x]=e+k+this.getStyleLeft()+f+b.resolve(this.getColorLeft());
}if(qx.core.Variant.isSet(M,K)){if(c.length===0){throw new Error("Invalid Single decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}c.position=B;
c.top=0;
c.left=0;
var d=this._generateBackgroundMarkup(c);
return this.__oM=d;
},resize:function(Q,R,S){var U=this.getBackgroundImage()&&this.getBackgroundRepeat()==p;

if(U||qx.bom.client.Feature.CONTENT_BOX){var T=this.getInsets();
R-=T.left+T.right;
S-=T.top+T.bottom;
if(R<0){R=0;
}
if(S<0){S=0;
}}Q.style.width=R+J;
Q.style.height=S+J;
},tint:function(N,O){var P=qx.theme.manager.Color.getInstance();

if(O==null){O=this.getBackgroundColor();
}N.style.backgroundColor=P.resolve(O)||z;
},_applyWidth:function(){if(qx.core.Variant.isSet(M,K)){if(this.__oM){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(M,K)){if(this.__oM){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__oM=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",B="qx.client",A="-br",z="-t",y="-tl",x="-r",w='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',v="qx.debug",u="_applyBaseImage",t="-b",s="String",q="",r="-bl",o="-c",p="mshtml",m="on",n="qx.ui.decoration.Grid";
qx.Class.define(n,{extend:qx.ui.decoration.Abstract,construct:function(J,K){arguments.callee.base.call(this);
if(J!=null){this.setBaseImage(J);
}
if(K!=null){this.setInsets(K);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__oN:null,__oO:null,__oP:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__oN;
},getMarkup:function(){if(this.__oN){return this.__oN;
}var C=qx.bom.element.Decoration;
var D=this.__oO;
var E=this.__oP;
var F=[];
F.push(w);
F.push(C.create(D.tl,i,{top:0,left:0}));
F.push(C.create(D.t,h,{top:0,left:E.left+l}));
F.push(C.create(D.tr,i,{top:0,right:0}));
F.push(C.create(D.bl,i,{bottom:0,left:0}));
F.push(C.create(D.b,h,{bottom:0,left:E.left+l}));
F.push(C.create(D.br,i,{bottom:0,right:0}));
F.push(C.create(D.l,g,{top:E.top+l,left:0}));
F.push(C.create(D.c,c,{top:E.top+l,left:E.left+l}));
F.push(C.create(D.r,g,{top:E.top+l,right:0}));
F.push(d);
return this.__oN=F.join(q);
},resize:function(S,T,U){var V=this.__oP;
var innerWidth=T-V.left-V.right;
var innerHeight=U-V.top-V.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}S.style.width=T+l;
S.style.height=U+l;
S.childNodes[1].style.width=innerWidth+l;
S.childNodes[4].style.width=innerWidth+l;
S.childNodes[7].style.width=innerWidth+l;
S.childNodes[6].style.height=innerHeight+l;
S.childNodes[7].style.height=innerHeight+l;
S.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(B,p)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(T%2==1){S.childNodes[2].style.marginRight=j;
S.childNodes[5].style.marginRight=j;
S.childNodes[8].style.marginRight=j;
}else{S.childNodes[2].style.marginRight=k;
S.childNodes[5].style.marginRight=k;
S.childNodes[8].style.marginRight=k;
}
if(U%2==1){S.childNodes[3].style.marginBottom=j;
S.childNodes[4].style.marginBottom=j;
S.childNodes[5].style.marginBottom=j;
}else{S.childNodes[3].style.marginBottom=k;
S.childNodes[4].style.marginBottom=k;
S.childNodes[5].style.marginBottom=k;
}}}},tint:function(G,H){},_applyBaseImage:function(L,M){if(qx.core.Variant.isSet(v,m)){if(this.__oN){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(L){var Q=this._resolveImageUrl(L);
var R=/(.*)(\.[a-z]+)$/.exec(Q);
var P=R[1];
var O=R[2];
var N=this.__oO={tl:P+y+O,t:P+z+O,tr:P+f+O,bl:P+r+O,b:P+t+O,br:P+A+O,l:P+e+O,c:P+o+O,r:P+x+O};
this.__oP=this._computeEdgeSizes(N);
}},_resolveImageUrl:function(I){return qx.util.AliasManager.getInstance().resolve(I);
},_computeEdgeSizes:function(a){var b=qx.util.ResourceManager.getInstance();
return {top:b.getImageHeight(a.t),bottom:b.getImageHeight(a.b),left:b.getImageWidth(a.l),right:b.getImageWidth(a.r)};
}},destruct:function(){this.__oN=this.__oO=this.__oP=null;
}});
})();
(function(){var o="_applyStyle",n='"></div>',m="Color",l="1px",k='<div style="',j='border:',i="1px solid ",h="",g=";",f="px",C='</div>',B="qx.ui.decoration.Beveled",A="qx.debug",z='<div style="position:absolute;top:1px;left:1px;',y='border-bottom:',x='border-right:',w='border-left:',v='border-top:',u="Number",t='<div style="position:absolute;top:1px;left:0px;',r='position:absolute;top:0px;left:1px;',s='<div style="overflow:hidden;font-size:0;line-height:0;">',p="on",q="absolute";
qx.Class.define(B,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(O,P,Q){arguments.callee.base.call(this);
if(O!=null){this.setOuterColor(O);
}
if(P!=null){this.setInnerColor(P);
}
if(Q!=null){this.setInnerOpacity(Q);
}},properties:{innerColor:{check:m,nullable:true,apply:o},innerOpacity:{check:u,init:1,apply:o},outerColor:{check:m,nullable:true,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__oQ:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oQ;
},_applyStyle:function(){if(qx.core.Variant.isSet(A,p)){if(this.__oQ){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__oQ){return this.__oQ;
}var a=qx.theme.manager.Color.getInstance();
var b=[];
var e=i+a.resolve(this.getOuterColor())+g;
var d=i+a.resolve(this.getInnerColor())+g;
b.push(s);
b.push(k);
b.push(j,e);
b.push(qx.bom.element.Opacity.compile(0.35));
b.push(n);
b.push(t);
b.push(w,e);
b.push(x,e);
b.push(n);
b.push(k);
b.push(r);
b.push(v,e);
b.push(y,e);
b.push(n);
var c={position:q,top:l,left:l};
b.push(this._generateBackgroundMarkup(c));
b.push(z);
b.push(j,d);
b.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
b.push(n);
b.push(C);
return this.__oQ=b.join(h);
},resize:function(D,E,F){if(E<4){E=4;
}
if(F<4){F=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=E-2;
var outerHeight=F-2;
var L=outerWidth;
var K=outerHeight;
var innerWidth=E-4;
var innerHeight=F-4;
}else{var outerWidth=E;
var outerHeight=F;
var L=E-2;
var K=F-2;
var innerWidth=L;
var innerHeight=K;
}var N=f;
var J=D.childNodes[0].style;
J.width=outerWidth+N;
J.height=outerHeight+N;
var I=D.childNodes[1].style;
I.width=outerWidth+N;
I.height=K+N;
var H=D.childNodes[2].style;
H.width=L+N;
H.height=outerHeight+N;
var G=D.childNodes[3].style;
G.width=L+N;
G.height=K+N;
var M=D.childNodes[4].style;
M.width=innerWidth+N;
M.height=innerHeight+N;
},tint:function(R,S){var T=qx.theme.manager.Color.getInstance();

if(S==null){S=this.getBackgroundColor();
}R.childNodes[3].style.backgroundColor=T.resolve(S)||h;
}},destruct:function(){this.__oQ=null;
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
(function(){var ht="button-frame",hs="atom",hr="widget",hq="main",hp="button",ho="text-selected",hn="image",hm="bold",hl="middle",hk="background-light",fW="text-disabled",fV="groupbox",fU="decoration/arrows/down.png",fT="cell",fS="selected",fR="border-invalid",fQ="input",fP="input-disabled",fO="menu-button",fN="input-focused-invalid",hA="toolbar-button",hB="spinner",hy="input-focused",hz="popup",hw="tooltip",hx="list",hu="tree-item",hv="treevirtual-contract",hC="scrollbar",hD="datechooser/nav-button",gS="text-hovered",gR="center",gU="treevirtual-expand",gT="textfield",gW="label",gV="decoration/arrows/right.png",gY="background-application",gX="radiobutton",gQ="white",gP="invalid",dS="combobox",dT="right-top",dU="checkbox",dV="text-title",dW="qx/static/blank.gif",dX="scrollbar/button",dY="right",ea="combobox/button",eb="icon/16/places/folder.png",ec="text-label",hR="decoration/tree/closed.png",hQ="scrollbar-slider-horizontal",hP="decoration/arrows/left.png",hO="button-focused",hV="text-light",hU="menu-slidebar-button",hT="text-input",hS="slidebar/button-forward",hX="background-splitpane",hW=".png",eU="decoration/tree/open.png",eV="default",eS="decoration/arrows/down-small.png",eT="datechooser",eY="slidebar/button-backward",fa="selectbox",eW="treevirtual-folder",eX="shadow-popup",eQ="icon/16/mimetypes/office-document.png",eR="background-medium",ew="table",ev="decoration/arrows/up.png",ey="decoration/form/",ex="",es="-invalid",er="icon/16/places/folder-open.png",eu="button-checked",et="decoration/window/maximize-active-hovered.png",eq="radiobutton-hovered",ep="decoration/cursors/",fg="slidebar",fh="tooltip-error-arrow",fi="table-scroller-focus-indicator",fj="move-frame",fc="nodrop",fd="decoration/table/boolean-true.png",fe="table-header-cell",ff="menu",fk="app-header",fl="row-layer",eJ="text-inactive",eI="move",eH="radiobutton-checked-focused",eG="decoration/window/restore-active-hovered.png",eF="shadow-window",eE="table-column-button",eD="right.png",eC="tabview-page-button-bottom-inactive",eN="tooltip-error",eM="window-statusbar",fm="button-hovered",fn="decoration/scrollbar/scrollbar-",fo="background-tip",fp="scrollbar-slider-horizontal-disabled",fq="table-scroller-header",fr="radiobutton-disabled",fs="button-pressed",ft="table-pane",fu="decoration/window/close-active.png",fv="native",gf="checkbox-hovered",ge="button-invalid-shadow",gd="checkbox-checked",gc="decoration/window/minimize-active-hovered.png",gj="menubar",gi="icon/16/actions/dialog-cancel.png",gh="tabview-page-button-top-inactive",gg="tabview-page-button-left-inactive",gn="menu-slidebar",gm="toolbar-button-checked",gK="decoration/tree/open-selected.png",gL="radiobutton-checked",gI="decoration/window/minimize-inactive.png",gJ="icon/16/apps/office-calendar.png",gG="group",gH="tabview-page-button-right-inactive",gE="decoration/window/minimize-active.png",gF="decoration/window/restore-inactive.png",gM="checkbox-checked-focused",gN="splitpane",hd="combobox/textfield",hc="button-preselected-focused",hf="decoration/window/close-active-hovered.png",he="qx/icon/Tango/16/actions/window-close.png",hh="checkbox-pressed",hg="button-disabled",hj="selected-dragover",hi="border-separator",hb="decoration/window/maximize-inactive.png",ha="dragover",hK="scrollarea",hL="scrollbar-vertical",hM="decoration/menu/checkbox-invert.gif",hN="decoration/toolbar/toolbar-handle-knob.gif",hG="icon/22/mimetypes/office-document.png",hH="button-preselected",hI="button-checked-focused",hJ="up.png",hE="best-fit",hF="decoration/tree/closed-selected.png",dR="qx.theme.modern.Appearance",dQ="text-active",dP="checkbox-disabled",dO="toolbar-button-hovered",dN="progressive-table-header",dM="decoration/table/select-column-order.png",dL="decoration/menu/radiobutton.gif",dK="decoration/arrows/forward.png",dJ="decoration/table/descending.png",dI="window-captionbar-active",ef="checkbox-checked-hovered",eg="scrollbar-slider-vertical",ed="toolbar",ee="alias",ej="decoration/window/restore-active.png",ek="decoration/table/boolean-false.png",eh="checkbox-checked-disabled",ei="icon/32/mimetypes/office-document.png",em="radiobutton-checked-disabled",en="tabview-pane",gr="decoration/arrows/rewind.png",gl="checkbox-focused",gy="top",gu="#EEE",ga="icon/16/actions/dialog-ok.png",fX="radiobutton-checked-hovered",eA="table-header-cell-hovered",gb="window",eL="text-gray",eK="decoration/menu/radiobutton-invert.gif",fF="text-placeholder",fG="slider",fH="keep-align",fI="down.png",fJ="tabview-page-button-top-active",fK="icon/32/places/folder-open.png",fL="icon/22/places/folder.png",fM="decoration/window/maximize-active.png",fC="checkbox-checked-pressed",fD="decoration/window/close-inactive.png",fY="tabview-page-button-left-active",gx="toolbar-part",gw="decoration/splitpane/knob-vertical.png",gv=".gif",gC="icon/22/places/folder-open.png",gB="radiobutton-checked-pressed",gA="table-statusbar",gz="radiobutton-pressed",gt="window-captionbar-inactive",gs="copy",el="radiobutton-focused",eP="decoration/arrows/down-invert.png",eO="decoration/menu/checkbox.gif",gk="decoration/splitpane/knob-horizontal.png",fb="icon/32/places/folder.png",gq="toolbar-separator",gp="tabview-page-button-bottom-active",go="decoration/arrows/up-small.png",ez="decoration/table/ascending.png",gD="decoration/arrows/up-invert.png",eo="small",eB="tabview-page-button-right-active",fw="-disabled",fx="scrollbar-horizontal",fy="progressive-table-header-cell",fz="menu-separator",fA="pane",fB="decoration/arrows/right-invert.png",gO="left.png",fE="icon/16/actions/view-refresh.png";
qx.Theme.define(dR,{appearances:{"widget":{},"root":{style:function(bx){return {backgroundColor:gY,textColor:ec,font:eV};
}},"label":{style:function(cl){return {textColor:cl.disabled?fW:undefined};
}},"move-frame":{style:function(cq){return {decorator:hq};
}},"resize-frame":fj,"dragdrop-cursor":{style:function(h){var i=fc;

if(h.copy){i=gs;
}else if(h.move){i=eI;
}else if(h.alias){i=ee;
}return {source:ep+i+gv,position:dT,offset:[2,16,2,6]};
}},"image":{style:function(C){return {opacity:!C.replacement&&C.disabled?0.3:1};
}},"atom":{},"atom/label":gW,"atom/icon":hn,"popup":{style:function(hY){return {decorator:hq,backgroundColor:hk,shadow:eX};
}},"button-frame":{alias:hs,style:function(dp){var dr,dq;

if(dp.checked&&dp.focused&&!dp.inner){dr=hI;
dq=undefined;
}else if(dp.disabled){dr=hg;
dq=undefined;
}else if(dp.pressed){dr=fs;
dq=gS;
}else if(dp.checked){dr=eu;
dq=undefined;
}else if(dp.hovered){dr=fm;
dq=gS;
}else if(dp.preselected&&dp.focused&&!dp.inner){dr=hc;
dq=gS;
}else if(dp.preselected){dr=hH;
dq=gS;
}else if(dp.focused&&!dp.inner){dr=hO;
dq=undefined;
}else{dr=hp;
dq=undefined;
}return {decorator:dr,textColor:dq,shadow:dp.invalid&&!dp.disabled?ge:undefined};
}},"button-frame/image":{style:function(bs){return {opacity:!bs.replacement&&bs.disabled?0.5:1};
}},"button":{alias:ht,include:ht,style:function(de){return {padding:[2,8],center:true};
}},"hover-button":{alias:hs,include:hs,style:function(f){return {decorator:f.hovered?fS:undefined,textColor:f.hovered?ho:undefined};
}},"splitbutton":{},"splitbutton/button":hp,"splitbutton/arrow":{alias:hp,include:hp,style:function(dn){return {icon:fU,padding:2,marginLeft:1};
}},"checkbox":{alias:hs,style:function(J){var L;

if(J.checked&&J.focused){L=gM;
}else if(J.checked&&J.disabled){L=eh;
}else if(J.checked&&J.pressed){L=fC;
}else if(J.checked&&J.hovered){L=ef;
}else if(J.checked){L=gd;
}else if(J.disabled){L=dP;
}else if(J.focused){L=gl;
}else if(J.pressed){L=hh;
}else if(J.hovered){L=gf;
}else{L=dU;
}var K=J.invalid&&!J.disabled?es:ex;
return {icon:ey+L+K+hW,gap:6};
}},"radiobutton":{alias:hs,style:function(bV){var bX;

if(bV.checked&&bV.focused){bX=eH;
}else if(bV.checked&&bV.disabled){bX=em;
}else if(bV.checked&&bV.pressed){bX=gB;
}else if(bV.checked&&bV.hovered){bX=fX;
}else if(bV.checked){bX=gL;
}else if(bV.disabled){bX=fr;
}else if(bV.focused){bX=el;
}else if(bV.pressed){bX=gz;
}else if(bV.hovered){bX=eq;
}else{bX=gX;
}var bW=bV.invalid&&!bV.disabled?es:ex;
return {icon:ey+bX+bW+hW,gap:6};
}},"textfield":{style:function(ds){var dx;
var dv=!!ds.focused;
var dw=!!ds.invalid;
var dt=!!ds.disabled;

if(dv&&dw&&!dt){dx=fN;
}else if(dv&&!dw&&!dt){dx=hy;
}else if(dt){dx=fP;
}else if(!dv&&dw&&!dt){dx=fR;
}else{dx=fQ;
}var du;

if(ds.disabled){du=fW;
}else if(ds.showingPlaceholder){du=fF;
}else{du=hT;
}return {decorator:dx,padding:[2,4,1],textColor:du};
}},"textarea":{include:gT,style:function(bk){return {padding:4};
}},"spinner":{style:function(bn){var br;
var bp=!!bn.focused;
var bq=!!bn.invalid;
var bo=!!bn.disabled;

if(bp&&bq&&!bo){br=fN;
}else if(bp&&!bq&&!bo){br=hy;
}else if(bo){br=fP;
}else if(!bp&&bq&&!bo){br=fR;
}else{br=fQ;
}return {decorator:br};
}},"spinner/textfield":{style:function(S){return {marginRight:2,padding:[2,4,1],textColor:S.disabled?fW:hT};
}},"spinner/upbutton":{alias:ht,include:ht,style:function(z){return {icon:go,padding:z.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:ht,include:ht,style:function(cj){return {icon:eS,padding:cj.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dS,"datefield/button":{alias:ea,include:ea,style:function(bw){return {icon:gJ,padding:[0,3],decorator:undefined};
}},"datefield/textfield":hd,"datefield/list":{alias:eT,include:eT,style:function(w){return {decorator:undefined};
}},"groupbox":{style:function(P){return {legendPosition:gy};
}},"groupbox/legend":{alias:hs,style:function(A){return {padding:[1,0,1,4],textColor:A.invalid?gP:dV,font:hm};
}},"groupbox/frame":{style:function(m){return {padding:12,decorator:gG};
}},"check-groupbox":fV,"check-groupbox/legend":{alias:dU,include:dU,style:function(W){return {padding:[1,0,1,4],textColor:W.invalid?gP:dV,font:hm};
}},"radio-groupbox":fV,"radio-groupbox/legend":{alias:gX,include:gX,style:function(bS){return {padding:[1,0,1,4],textColor:bS.invalid?gP:dV,font:hm};
}},"scrollarea":{style:function(bY){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bH){return {backgroundColor:gY};
}},"scrollarea/pane":hr,"scrollarea/scrollbar-x":hC,"scrollarea/scrollbar-y":hC,"scrollbar":{style:function(ig){if(ig[fv]){return {};
}return {width:ig.horizontal?undefined:16,height:ig.horizontal?16:undefined,decorator:ig.horizontal?fx:hL,padding:1};
}},"scrollbar/slider":{alias:fG,style:function(cO){return {padding:cO.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:ht,style:function(dg){var dh=dg.horizontal?hQ:eg;

if(dg.disabled){dh+=fw;
}return {decorator:dh,minHeight:dg.horizontal?undefined:9,minWidth:dg.horizontal?9:undefined};
}},"scrollbar/button":{alias:ht,include:ht,style:function(be){var bf=fn;

if(be.left){bf+=gO;
}else if(be.right){bf+=eD;
}else if(be.up){bf+=hJ;
}else{bf+=fI;
}
if(be.left||be.right){return {padding:[0,0,0,be.left?3:4],icon:bf,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bf,width:14,height:15};
}}},"scrollbar/button-begin":dX,"scrollbar/button-end":dX,"slider":{style:function(Y){var bd;
var bb=!!Y.focused;
var bc=!!Y.invalid;
var ba=!!Y.disabled;

if(bb&&bc&&!ba){bd=fN;
}else if(bb&&!bc&&!ba){bd=hy;
}else if(ba){bd=fP;
}else if(!bb&&bc&&!ba){bd=fR;
}else{bd=fQ;
}return {decorator:bd};
}},"slider/knob":{include:ht,style:function(cc){return {decorator:cc.disabled?fp:hQ,shadow:undefined,height:14,width:14};
}},"list":{alias:hK,style:function(D){var H;
var F=!!D.focused;
var G=!!D.invalid;
var E=!!D.disabled;

if(F&&G&&!E){H=fN;
}else if(F&&!G&&!E){H=hy;
}else if(E){H=fP;
}else if(!F&&G&&!E){H=fR;
}else{H=fQ;
}return {backgroundColor:hk,decorator:H};
}},"list/pane":hr,"listitem":{alias:hs,style:function(cF){var cG;

if(cF.dragover){cG=cF.selected?hj:ha;
}else{cG=cF.selected?fS:undefined;
}return {padding:cF.dragover?[4,4,2,4]:4,textColor:cF.selected?ho:undefined,decorator:cG};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ht,include:ht,style:function(bv){return {padding:5,center:true,icon:bv.vertical?fU:gV};
}},"slidebar/button-backward":{alias:ht,include:ht,style:function(dF){return {padding:5,center:true,icon:dF.vertical?ev:hP};
}},"tabview":{style:function(o){return {contentPadding:16};
}},"tabview/bar":{alias:fg,style:function(bT){var bU={marginBottom:bT.barTop?-1:0,marginTop:bT.barBottom?-4:0,marginLeft:bT.barRight?-3:0,marginRight:bT.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bT.barTop||bT.barBottom){bU.paddingLeft=5;
bU.paddingRight=7;
}else{bU.paddingTop=5;
bU.paddingBottom=7;
}return bU;
}},"tabview/bar/button-forward":{include:hS,alias:hS,style:function(bh){if(bh.barTop||bh.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:eY,alias:eY,style:function(di){if(di.barTop||di.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(dG){return {decorator:en,minHeight:100,marginBottom:dG.barBottom?-1:0,marginTop:dG.barTop?-1:0,marginLeft:dG.barLeft?-1:0,marginRight:dG.barRight?-1:0};
}},"tabview-page":hr,"tabview-page/button":{alias:hs,style:function(bA){var bG,bC=0;
var bF=0,bB=0,bD=0,bE=0;

if(bA.checked){if(bA.barTop){bG=fJ;
bC=[6,14];
bD=bA.firstTab?0:-5;
bE=bA.lastTab?0:-5;
}else if(bA.barBottom){bG=gp;
bC=[6,14];
bD=bA.firstTab?0:-5;
bE=bA.lastTab?0:-5;
}else if(bA.barRight){bG=eB;
bC=[6,13];
bF=bA.firstTab?0:-5;
bB=bA.lastTab?0:-5;
}else{bG=fY;
bC=[6,13];
bF=bA.firstTab?0:-5;
bB=bA.lastTab?0:-5;
}}else{if(bA.barTop){bG=gh;
bC=[4,10];
bF=4;
bD=bA.firstTab?5:1;
bE=1;
}else if(bA.barBottom){bG=eC;
bC=[4,10];
bB=4;
bD=bA.firstTab?5:1;
bE=1;
}else if(bA.barRight){bG=gH;
bC=[4,10];
bE=5;
bF=bA.firstTab?5:1;
bB=1;
bD=1;
}else{bG=gg;
bC=[4,10];
bD=5;
bF=bA.firstTab?5:1;
bB=1;
bE=1;
}}return {zIndex:bA.checked?10:5,decorator:bG,padding:bC,marginTop:bF,marginBottom:bB,marginLeft:bD,marginRight:bE,textColor:bA.checked?dQ:eJ};
}},"tabview-page/button/close-button":{alias:hs,style:function(O){return {icon:he};
}},"toolbar":{style:function(ck){return {decorator:ed,spacing:2};
}},"toolbar/part":{style:function(cP){return {decorator:gx,spacing:2};
}},"toolbar/part/container":{style:function(id){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(T){return {source:hN,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hs,style:function(df){return {marginTop:2,marginBottom:2,padding:(df.pressed||df.checked||df.hovered)&&!df.disabled||(df.disabled&&df.checked)?3:5,decorator:df.pressed||(df.checked&&!df.hovered)||(df.checked&&df.disabled)?gm:df.hovered&&!df.disabled?dO:undefined};
}},"toolbar-menubutton":{alias:hA,include:hA,style:function(dc){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hn,include:hn,style:function(bj){return {source:eS};
}},"toolbar-splitbutton":{style:function(bm){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hA,include:hA,style:function(cY){return {icon:fU,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hA,include:hA,style:function(cX){return {padding:cX.pressed||cX.checked?1:cX.hovered?1:3,icon:fU,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(dk){return {decorator:gq,margin:7};
}},"tree":hx,"tree-item":{style:function(ci){return {padding:[2,6],textColor:ci.selected?ho:undefined,decorator:ci.selected?fS:undefined};
}},"tree-item/icon":{include:hn,style:function(k){return {paddingRight:5};
}},"tree-item/label":gW,"tree-item/open":{include:hn,style:function(ca){var cb;

if(ca.selected&&ca.opened){cb=gK;
}else if(ca.selected&&!ca.opened){cb=hF;
}else if(ca.opened){cb=eU;
}else{cb=hR;
}return {padding:[0,5,0,2],source:cb};
}},"tree-folder":{include:hu,alias:hu,style:function(bL){var bM;

if(bL.small){bM=bL.opened?er:eb;
}else if(bL.large){bM=bL.opened?fK:fb;
}else{bM=bL.opened?gC:fL;
}return {icon:bM};
}},"tree-file":{include:hu,alias:hu,style:function(ic){return {icon:ic.small?eQ:ic.large?ei:hG};
}},"treevirtual":ew,"treevirtual-folder":{style:function(bR){return {icon:bR.opened?er:eb};
}},"treevirtual-file":{include:eW,alias:eW,style:function(bu){return {icon:eQ};
}},"treevirtual-line":{style:function(ie){return {icon:dW};
}},"treevirtual-contract":{style:function(cU){return {icon:eU,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cI){return {icon:hR,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hv,"treevirtual-only-expand":gU,"treevirtual-start-contract":hv,"treevirtual-start-expand":gU,"treevirtual-end-contract":hv,"treevirtual-end-expand":gU,"treevirtual-cross-contract":hv,"treevirtual-cross-expand":gU,"treevirtual-end":{style:function(bI){return {icon:dW};
}},"treevirtual-cross":{style:function(cE){return {icon:dW};
}},"tooltip":{include:hz,style:function(X){return {backgroundColor:fo,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hs,"tooltip-error":{include:hw,style:function(q){return {textColor:ho,placeMethod:hr,offset:[0,0,0,14],marginTop:-2,position:dT,showTimeout:100,hideTimeout:10000,decorator:eN,shadow:fh,font:hm};
}},"tooltip-error/atom":hs,"window":{style:function(ch){return {shadow:eF,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(dm){return {decorator:gb};
}},"window/captionbar":{style:function(cs){return {decorator:cs.active?dI:gt,textColor:cs.active?gQ:eL,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bK){return {margin:[5,0,3,6]};
}},"window/title":{style:function(cW){return {alignY:hl,font:hm,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hs,style:function(cr){return {icon:cr.active?cr.hovered?gc:gE:gI,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hs,style:function(dj){return {icon:dj.active?dj.hovered?eG:ej:gF,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hs,style:function(x){return {icon:x.active?x.hovered?et:fM:hb,margin:[4,8,2,0]};
}},"window/close-button":{alias:hs,style:function(e){return {icon:e.active?e.hovered?hf:fu:fD,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(cT){return {padding:[2,6],decorator:eM,minHeight:18};
}},"window/statusbar-text":{style:function(j){return {font:eo};
}},"iframe":{style:function(I){return {decorator:hq};
}},"resizer":{style:function(bg){return {decorator:fA};
}},"splitpane":{style:function(n){return {decorator:gN};
}},"splitpane/splitter":{style:function(cp){return {width:cp.horizontal?3:undefined,height:cp.vertical?3:undefined,backgroundColor:hX};
}},"splitpane/splitter/knob":{style:function(dD){return {source:dD.horizontal?gk:gw};
}},"splitpane/slider":{style:function(cz){return {width:cz.horizontal?3:undefined,height:cz.vertical?3:undefined,backgroundColor:hX};
}},"selectbox":{alias:ht,include:ht,style:function(cD){return {padding:[2,8]};
}},"selectbox/atom":hs,"selectbox/popup":hz,"selectbox/list":{alias:hx},"selectbox/arrow":{include:hn,style:function(co){return {source:fU,paddingLeft:5};
}},"datechooser":{style:function(r){var v;
var t=!!r.focused;
var u=!!r.invalid;
var s=!!r.disabled;

if(t&&u&&!s){v=fN;
}else if(t&&!u&&!s){v=hy;
}else if(s){v=fP;
}else if(!t&&u&&!s){v=fR;
}else{v=fQ;
}return {padding:2,decorator:v,backgroundColor:hk};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:ht,alias:ht,style:function(da){var db={padding:[2,4],shadow:undefined};

if(da.lastYear){db.icon=gr;
db.marginRight=1;
}else if(da.lastMonth){db.icon=hP;
}else if(da.nextYear){db.icon=dK;
db.marginLeft=1;
}else if(da.nextMonth){db.icon=gV;
}return db;
}},"datechooser/last-year-button-tooltip":hw,"datechooser/last-month-button-tooltip":hw,"datechooser/next-year-button-tooltip":hw,"datechooser/next-month-button-tooltip":hw,"datechooser/last-year-button":hD,"datechooser/last-month-button":hD,"datechooser/next-month-button":hD,"datechooser/next-year-button":hD,"datechooser/month-year-label":{style:function(cR){return {font:hm,textAlign:gR,textColor:cR.disabled?fW:undefined};
}},"datechooser/date-pane":{style:function(cM){return {textColor:cM.disabled?fW:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(ce){return {textColor:ce.disabled?fW:ce.weekend?hV:undefined,textAlign:gR,paddingTop:2,backgroundColor:eR};
}},"datechooser/week":{style:function(cw){return {textAlign:gR,padding:[2,4],backgroundColor:eR};
}},"datechooser/day":{style:function(b){return {textAlign:gR,decorator:b.disabled?undefined:b.selected?fS:undefined,textColor:b.disabled?fW:b.selected?ho:b.otherMonth?hV:undefined,font:b.today?hm:undefined,padding:[2,4]};
}},"combobox":{style:function(dy){var dC;
var dA=!!dy.focused;
var dB=!!dy.invalid;
var dz=!!dy.disabled;

if(dA&&dB&&!dz){dC=fN;
}else if(dA&&!dB&&!dz){dC=hy;
}else if(dz){dC=fP;
}else if(!dA&&dB&&!dz){dC=fR;
}else{dC=fQ;
}return {decorator:dC};
}},"combobox/popup":hz,"combobox/list":{alias:hx},"combobox/button":{include:ht,alias:ht,style:function(cA){var cB={icon:fU,padding:2};

if(cA.selected){cB.decorator=hO;
}return cB;
}},"combobox/textfield":{include:gT,style:function(g){return {decorator:undefined};
}},"menu":{style:function(cx){var cy={decorator:ff,shadow:eX,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cx.submenu||cx.contextmenu?hE:fH};

if(cx.submenu){cy.position=dT;
cy.offset=[-2,-3];
}return cy;
}},"menu/slidebar":gn,"menu-slidebar":hr,"menu-slidebar-button":{style:function(bJ){return {decorator:bJ.hovered?fS:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hU,style:function(a){return {icon:a.hovered?gD:ev};
}},"menu-slidebar/button-forward":{include:hU,style:function(cN){return {icon:cN.hovered?eP:fU};
}},"menu-separator":{style:function(cv){return {height:0,decorator:fz,margin:[4,2]};
}},"menu-button":{alias:hs,style:function(d){return {decorator:d.selected?fS:undefined,textColor:d.selected?ho:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hn,style:function(cV){return {alignY:hl};
}},"menu-button/label":{include:gW,style:function(V){return {alignY:hl,padding:1};
}},"menu-button/shortcut":{include:gW,style:function(cg){return {alignY:hl,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hn,style:function(M){return {source:M.selected?fB:gV,alignY:hl};
}},"menu-checkbox":{alias:fO,include:fO,style:function(dl){return {icon:!dl.checked?undefined:dl.selected?hM:eO};
}},"menu-radiobutton":{alias:fO,include:fO,style:function(cH){return {icon:!cH.checked?undefined:cH.selected?eK:dL};
}},"menubar":{style:function(cn){return {decorator:gj};
}},"menubar-button":{alias:hs,style:function(cJ){return {decorator:cJ.pressed||cJ.hovered?fS:undefined,textColor:cJ.pressed||cJ.hovered?ho:undefined,padding:[3,8]};
}},"colorselector":hr,"colorselector/control-bar":hr,"colorselector/control-pane":hr,"colorselector/visual-pane":fV,"colorselector/preset-grid":hr,"colorselector/colorbucket":{style:function(bi){return {decorator:hq,width:16,height:16};
}},"colorselector/preset-field-set":fV,"colorselector/input-field-set":fV,"colorselector/preview-field-set":fV,"colorselector/hex-field-composite":hr,"colorselector/hex-field":gT,"colorselector/rgb-spinner-composite":hr,"colorselector/rgb-spinner-red":hB,"colorselector/rgb-spinner-green":hB,"colorselector/rgb-spinner-blue":hB,"colorselector/hsb-spinner-composite":hr,"colorselector/hsb-spinner-hue":hB,"colorselector/hsb-spinner-saturation":hB,"colorselector/hsb-spinner-brightness":hB,"colorselector/preview-content-old":{style:function(N){return {decorator:hq,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(bP){return {decorator:hq,backgroundColor:hk,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(ib){return {decorator:hq,margin:5};
}},"colorselector/brightness-field":{style:function(cQ){return {decorator:hq,margin:[5,7]};
}},"colorselector/hue-saturation-pane":hr,"colorselector/hue-saturation-handle":hr,"colorselector/brightness-pane":hr,"colorselector/brightness-handle":hr,"colorpopup":{alias:hz,include:hz,style:function(bN){return {padding:5,backgroundColor:gY};
}},"colorpopup/field":{style:function(bQ){return {decorator:hq,margin:2,width:14,height:14,backgroundColor:hk};
}},"colorpopup/selector-button":hp,"colorpopup/auto-button":hp,"colorpopup/preview-pane":fV,"colorpopup/current-preview":{style:function(cu){return {height:20,padding:4,marginLeft:4,decorator:hq,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(dH){return {height:20,padding:4,marginRight:4,decorator:hq,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hp,include:hp,style:function(B){return {icon:ga};
}},"colorpopup/colorselector-cancelbutton":{alias:hp,include:hp,style:function(cS){return {icon:gi};
}},"table":{alias:hr,style:function(cm){return {decorator:ew};
}},"table-header":{},"table/statusbar":{style:function(ia){return {decorator:gA,padding:[0,2]};
}},"table/column-button":{alias:ht,style:function(ct){return {decorator:eE,padding:3,icon:dM};
}},"table-column-reset-button":{include:fO,alias:fO,style:function(){return {icon:fE};
}},"table-scroller":hr,"table-scroller/scrollbar-x":hC,"table-scroller/scrollbar-y":hC,"table-scroller/header":{style:function(R){return {decorator:fq};
}},"table-scroller/pane":{style:function(by){return {backgroundColor:ft};
}},"table-scroller/focus-indicator":{style:function(cd){return {decorator:fi};
}},"table-scroller/resize-line":{style:function(cC){return {backgroundColor:hi,width:2};
}},"table-header-cell":{alias:hs,style:function(c){return {minWidth:13,minHeight:20,padding:c.hovered?[3,4,2,4]:[3,4],decorator:c.hovered?eA:fe,sortIcon:c.sorted?(c.sortedAscending?ez:dJ):undefined};
}},"table-header-cell/label":{style:function(bl){return {minWidth:0,alignY:hl,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(bt){return {alignY:hl,alignX:dY};
}},"table-header-cell/icon":{style:function(dd){return {minWidth:0,alignY:hl,paddingRight:5};
}},"table-editor-textfield":{include:gT,style:function(bz){return {decorator:undefined,padding:[2,2],backgroundColor:hk};
}},"table-editor-selectbox":{include:fa,alias:fa,style:function(cf){return {padding:[0,2],backgroundColor:hk};
}},"table-editor-combobox":{include:dS,alias:dS,style:function(cL){return {decorator:undefined,backgroundColor:hk};
}},"progressive-table-header":{alias:hr,style:function(cK){return {decorator:dN};
}},"progressive-table-header-cell":{alias:hs,style:function(Q){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fy};
}},"app-header":{style:function(l){return {font:hm,textColor:ho,padding:[8,12],decorator:fk};
}},"virtual-list":hx,"virtual-list/row-layer":fl,"row-layer":{style:function(dE){return {colorEven:gQ,colorOdd:gu};
}},"column-layer":hr,"cell":{style:function(p){return {textColor:p.selected?ho:ec,padding:[3,6],font:eV};
}},"cell-string":fT,"cell-number":{include:fT,style:function(bO){return {textAlign:dY};
}},"cell-image":fT,"cell-boolean":{include:fT,style:function(y){return {iconTrue:fd,iconFalse:ek};
}},"cell-atom":fT,"cell-date":fT,"cell-html":fT,"htmlarea":{"include":hr,style:function(U){return {backgroundColor:gQ};
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

