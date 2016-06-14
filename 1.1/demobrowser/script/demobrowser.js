(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"f9a1afb04be6"},
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

qx.$$packageData['f9a1afb04be6']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-105,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","demobrowser","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
(function(){var r="toString",q=".",p="default",o="Object",n='"',m="Array",k="()",j="String",h="Function",g=".prototype",Q="function",P="Boolean",O="Error",N="constructor",M="warn",L="hasOwnProperty",K="string",J="toLocaleString",I="RegExp",H='\", "',y="info",z="BROKEN_IE",w="isPrototypeOf",x="Date",u="",v="qx.Bootstrap",s="]",t="Class",A="error",B="[Class ",D="valueOf",C="Number",F="count",E="debug",G="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return B+this.classname+s;
},createNamespace:function(name,bd){var bf=name.split(q);
var parent=window;
var be=bf[0];

for(var i=0,bg=bf.length-1;i<bg;i++,be=bf[i]){if(!parent[be]){parent=parent[be]={};
}else{parent=parent[be];
}}parent[be]=bd;
return be;
},setDisplayName:function(cd,ce,name){cd.displayName=ce+q+name+k;
},setDisplayNames:function(bT,bU){for(var name in bT){var bV=bT[name];

if(bV instanceof Function){bV.displayName=bU+q+name+k;
}}},define:function(name,bx){if(!bx){var bx={statics:{}};
}var bC;
var bA=null;
qx.Bootstrap.setDisplayNames(bx.statics,name);

if(bx.members||bx.extend){qx.Bootstrap.setDisplayNames(bx.members,name+g);
bC=bx.construct||new Function;

if(bx.extend){this.extendClass(bC,bC,bx.extend,name,bB);
}var by=bx.statics||{};
for(var i=0,bD=qx.Bootstrap.getKeys(by),l=bD.length;i<l;i++){var bE=bD[i];
bC[bE]=by[bE];
}bA=bC.prototype;
var bz=bx.members||{};
for(var i=0,bD=qx.Bootstrap.getKeys(bz),l=bD.length;i<l;i++){var bE=bD[i];
bA[bE]=bz[bE];
}}else{bC=bx.statics||{};
}var bB=this.createNamespace(name,bC);
bC.name=bC.classname=name;
bC.basename=bB;
bC.$$type=t;
if(!bC.hasOwnProperty(r)){bC.toString=this.genericToString;
}if(bx.defer){bx.defer(bC,bA);
}qx.Bootstrap.$$registry[name]=bx.statics;
return bC;
}};
qx.Bootstrap.define(v,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bF){return bF.__count__;
},"default":function(ca){var length=0;

for(var cb in ca){length++;
}return length;
}})[(({}).__count__==0)?F:p],objectMergeWith:function(b,c,d){if(d===undefined){d=true;
}
for(var e in c){if(d||b[e]===undefined){b[e]=c[e];
}}return b;
},__a:[w,L,J,r,D,N],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(cf){var cg=[];

for(var cj in cf){cg.push(cj);
}var ch=qx.Bootstrap.__a;
var ci=Object.prototype.hasOwnProperty;

for(var i=0,a=ch,l=a.length;i<l;i++){if(ci.call(cf,a[i])){cg.push(a[i]);
}}return cg;
},"default":function(W){var X=[];

for(var Y in W){X.push(Y);
}return X;
}})[typeof (Object.keys)==
Q?G:
(function(){for(var bX in {toString:1}){return bX;
}})()!==r?z:p],getKeysAsString:function(bo){var bp=qx.Bootstrap.getKeys(bo);

if(bp.length==0){return u;
}return n+bp.join(H)+n;
},__b:{"[object String]":j,"[object Array]":m,"[object Object]":o,"[object RegExp]":I,"[object Number]":C,"[object Boolean]":P,"[object Date]":x,"[object Function]":h,"[object Error]":O},bind:function(bt,self,bu){var bv=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bW=Array.prototype.slice.call(arguments,0,arguments.length);
return bt.apply(self,bv.concat(bW));
};
},firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);
},firstLow:function(f){return f.charAt(0).toLowerCase()+f.substr(1);
},getClass:function(R){var S=Object.prototype.toString.call(R);
return (qx.Bootstrap.__b[S]||S.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===K||qx.Bootstrap.getClass(bQ)==j||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(T){return (T!==null&&(T instanceof Array||(T&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(T.constructor,qx.data.IListData))||qx.Bootstrap.getClass(T)==m||(!!T&&!!T.$$isArray)));
},isObject:function(bw){return (bw!==undefined&&bw!==null&&qx.Bootstrap.getClass(bw)==o);
},isFunction:function(bS){return qx.Bootstrap.getClass(bS)==h;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bY,name){while(bY){if(bY.$$properties&&bY.$$properties[name]){return bY.$$properties[name];
}bY=bY.superclass;
}return null;
},hasProperty:function(bs,name){return !!qx.Bootstrap.getPropertyDefinition(bs,name);
},getEventType:function(bR,name){var bR=bR.constructor;

while(bR.superclass){if(bR.$$events&&bR.$$events[name]!==undefined){return bR.$$events[name];
}bR=bR.superclass;
}return null;
},supportsEvent:function(ba,name){return !!qx.Bootstrap.getEventType(ba,name);
},getByInterface:function(bL,bM){var bN,i,l;

while(bL){if(bL.$$implements){bN=bL.$$flatImplements;

for(i=0,l=bN.length;i<l;i++){if(bN[i]===bM){return bL;
}}}bL=bL.superclass;
}return null;
},hasInterface:function(bb,bc){return !!qx.Bootstrap.getByInterface(bb,bc);
},getMixins:function(bG){var bH=[];

while(bG){if(bG.$$includes){bH.push.apply(bH,bG.$$flatIncludes);
}bG=bG.superclass;
}return bH;
},$$logs:[],debug:function(U,V){qx.Bootstrap.$$logs.push([E,arguments]);
},info:function(bO,bP){qx.Bootstrap.$$logs.push([y,arguments]);
},warn:function(bJ,bK){qx.Bootstrap.$$logs.push([M,arguments]);
},error:function(bq,br){qx.Bootstrap.$$logs.push([A,arguments]);
},trace:function(cc){}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qx.propertyDebugLevel",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(j,{statics:{__c:{},define:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__c[m]){this.__c[m]={};
}else if(this.__c[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__c[m].defaultValue=n;
},get:function(a){var b=this.__c[a];

if(b===undefined){throw new Error('Setting "'+a+'" is not defined.');
}
if(b.value!==undefined){return b.value;
}return b.defaultValue;
},set:function(o,p){if((o.split(d)).length<2){throw new Error('Malformed settings key "'+o+'". Must be following the schema "namespace.key".');
}
if(!this.__c[o]){this.__c[o]={};
}this.__c[o].value=p;
},__d:function(){if(window.qxsettings){for(var q in window.qxsettings){this.set(q,window.qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(c){}this.__e();
}},__e:function(){if(this.get(l)!=true){return;
}var t=document.location.search.slice(1).split(k);

for(var i=0;i<t.length;i++){var s=t[i].split(e);

if(s.length!=3||s[0]!=f){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(l,false);
r.define(h,false);
r.define(g,0);
r.__d();
}});
})();
(function(){var t="gecko",s="1.9.0.0",r=".",q="[object Opera]",p="function",o="[^\\.0-9]",n="525.26",m="",l="mshtml",k="AppleWebKit/",e="unknown",j="9.6.0",h="4.0",d="Gecko",c="opera",g="webkit",f="0.0.0",i="8.0",b="qx.bom.client.Engine";
qx.Bootstrap.define(b,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__bf:function(){var u=e;
var y=f;
var x=window.navigator.userAgent;
var A=false;
var w=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==q){u=c;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(x)){y=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=m){y+=r+RegExp.$3;
}}else{w=true;
y=j;
}}else if(window.navigator.userAgent.indexOf(k)!=-1){u=g;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(x)){y=RegExp.$1;
var z=RegExp(o).exec(y);

if(z){y=y.slice(0,z.index);
}}else{w=true;
y=n;
}}else if(window.controllers&&window.navigator.product===d){u=t;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(x)){y=RegExp.$1;
}else{w=true;
y=s;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(x)){u=l;
y=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(y<8&&/Trident\/([^\);]+)(\)|;)/.test(x)){if(RegExp.$1===h){y=i;
}}this.MSHTML=true;
}else{var v=window.qxFail;

if(v&&typeof v===p){var u=v();

if(u.NAME&&u.FULLVERSION){u=u.NAME;
this[u.toUpperCase()]=true;
y=u.FULLVERSION;
}}else{A=true;
w=true;
y=s;
u=t;
this.GECKO=true;
qx.Bootstrap.warn("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(a){a.__bf();
}});
})();
(function(){var y="on",x="qx.debug",w="off",u="|",t="default",s="object",r="&",q="qx.aspects",p="$",o="qx.allowUrlVariants",f="qx.client",n="qx.dynlocale",j="webkit",e="qxvariant",d="opera",h=":",g=".",k="qx.core.Variant",c="mshtml",m="gecko";
qx.Bootstrap.define(k,{statics:{__bg:{},__bh:{},compilerIsSet:function(){return true;
},define:function(E,F,G){if(qx.core.Variant.compilerIsSet(x,y)){if(!this.__bk(F)){throw new Error('Allowed values of variant "'+E+'" must be defined!');
}
if(G===undefined){throw new Error('Default value of variant "'+E+'" must be defined!');
}}
if(!this.__bg[E]){this.__bg[E]={};
}else if(qx.core.Variant.compilerIsSet(x,y)){if(this.__bg[E].defaultValue!==undefined){throw new Error('Variant "'+E+'" is already defined!');
}}this.__bg[E].allowedValues=F;
this.__bg[E].defaultValue=G;
},get:function(P){var Q=this.__bg[P];

if(qx.core.Variant.compilerIsSet(x,y)){if(Q===undefined){throw new Error('Variant "'+P+'" is not defined.');
}}
if(Q.value!==undefined){return Q.value;
}return Q.defaultValue;
},__bi:function(){if(window.qxvariants){for(var R in qxvariants){if(qx.core.Variant.compilerIsSet(x,y)){if((R.split(g)).length<2){throw new Error('Malformed settings key "'+R+'". Must be following the schema "namespace.key".');
}}
if(!this.__bg[R]){this.__bg[R]={};
}this.__bg[R].value=qxvariants[R];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(H){}this.__bj(this.__bg);
}},__bj:function(){if(qx.core.Setting.get(o)!=true){return;
}var J=document.location.search.slice(1).split(r);

for(var i=0;i<J.length;i++){var K=J[i].split(h);

if(K.length!=3||K[0]!=e){continue;
}var L=K[1];

if(!this.__bg[L]){this.__bg[L]={};
}this.__bg[L].value=decodeURIComponent(K[2]);
}},select:function(M,N){if(qx.core.Variant.compilerIsSet(x,y)){if(!this.__bl(this.__bg[M])){throw new Error("Variant \""+M+"\" is not defined");
}
if(!this.__bl(N)){throw new Error("the second parameter must be a map!");
}}
for(var O in N){if(this.isSet(M,O)){return N[O];
}}
if(N[t]!==undefined){return N[t];
}
if(qx.core.Variant.compilerIsSet(x,y)){throw new Error('No match for variant "'+M+'" in variants ['+qx.Bootstrap.getKeysAsString(N)+'] found, and no default ("default") given');
}},isSet:function(z,A){var B=z+p+A;

if(this.__bh[B]!==undefined){return this.__bh[B];
}var D=false;
if(A.indexOf(u)<0){D=this.get(z)===A;
}else{var C=A.split(u);

for(var i=0,l=C.length;i<l;i++){if(this.get(z)===C[i]){D=true;
break;
}}}this.__bh[B]=D;
return D;
},__bk:function(v){return typeof v===s&&v!==null&&v instanceof Array;
},__bl:function(v){return typeof v===s&&v!==null&&!(v instanceof Array);
},__bm:function(a,b){for(var i=0,l=a.length;i<l;i++){if(a[i]==b){return true;
}}return false;
}},defer:function(I){I.define(f,[m,c,d,j],qx.bom.client.Engine.NAME);
I.define(x,[y,w],y);
I.define(q,[y,w],w);
I.define(n,[y,w],y);
I.__bi();
}});
})();
(function(){var J="qx.debug",I="object",H="Interface",G="on",F="string",E="function",D="Boolean",C="qx.Interface",B="events",A="toggle",u="properties",z="]",x="members",t="number",s="boolean",w="is",v="[Interface ",y="statics";
qx.Bootstrap.define(C,{statics:{define:function(name,O){if(O){if(O.extend&&!(O.extend instanceof Array)){O.extend=[O.extend];
}if(qx.core.Variant.isSet(J,G)){this.__l(name,O);
}var P=O.statics?O.statics:{};
if(O.extend){P.$$extends=O.extend;
}
if(O.properties){P.$$properties=O.properties;
}
if(O.members){P.$$members=O.members;
}
if(O.events){P.$$events=O.events;
}}else{var P={};
}P.$$type=H;
P.name=name;
P.toString=this.genericToString;
P.basename=qx.Bootstrap.createNamespace(name,P);
qx.Interface.$$registry[name]=P;
return P;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(bk){if(!bk){return [];
}var bl=bk.concat();

for(var i=0,l=bk.length;i<l;i++){if(bk[i].$$extends){bl.push.apply(bl,this.flatten(bk[i].$$extends));
}}return bl;
},__f:function(Q,R,S,T){var X=S.$$members;

if(X){for(var W in X){if(qx.Bootstrap.isFunction(X[W])){var V=this.__g(R,W);
var U=V||qx.Bootstrap.isFunction(Q[W]);

if(!U){throw new Error('Implementation of method "'+W+'" is missing in class "'+R.classname+'" required by interface "'+S.name+'"');
}var Y=T===true&&!V&&!qx.Bootstrap.hasInterface(R,S);

if(Y){Q[W]=this.__j(S,Q[W],W,X[W]);
}}else{if(typeof Q[W]===undefined){if(typeof Q[W]!==E){throw new Error('Implementation of member "'+W+'" is missing in class "'+R.classname+'" required by interface "'+S.name+'"');
}}}}}},__g:function(be,bf){var bj=bf.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!bj){return false;
}var bg=qx.Bootstrap.firstLow(bj[2]);
var bh=qx.Bootstrap.getPropertyDefinition(be,bg);

if(!bh){return false;
}var bi=bj[0]==w||bj[0]==A;

if(bi){return qx.Bootstrap.getPropertyDefinition(be,bg).check==D;
}return true;
},__h:function(e,f){if(f.$$properties){for(var g in f.$$properties){if(!qx.Bootstrap.getPropertyDefinition(e,g)){throw new Error('The property "'+g+'" is not supported by Class "'+e.classname+'"!');
}}}},__i:function(b,c){if(c.$$events){for(var d in c.$$events){if(!qx.Bootstrap.supportsEvent(b,d)){throw new Error('The event "'+d+'" is not supported by Class "'+b.classname+'"!');
}}}},assertObject:function(ba,bb){var bd=ba.constructor;
this.__f(ba,bd,bb,false);
this.__h(bd,bb);
this.__i(bd,bb);
var bc=bb.$$extends;

if(bc){for(var i=0,l=bc.length;i<l;i++){this.assertObject(ba,bc[i]);
}}},assert:function(K,L,M){this.__f(K.prototype,K,L,M);
this.__h(K,L);
this.__i(K,L);
var N=L.$$extends;

if(N){for(var i=0,l=N.length;i<l;i++){this.assert(K,N[i],M);
}}},genericToString:function(){return v+this.name+z;
},$$registry:{},__j:qx.core.Variant.select(J,{"on":function(n,o,p,q){function r(){q.apply(this,arguments);
return o.apply(this,arguments);
}o.wrapper=r;
return r;
},"default":function(){}}),__k:qx.core.Variant.select(J,{"on":{"extend":I,"statics":I,"members":I,"properties":I,"events":I},"default":null}),__l:qx.core.Variant.select(J,{"on":function(name,h){if(qx.core.Variant.isSet(J,G)){var m=this.__k;

for(var k in h){if(m[k]===undefined){throw new Error('The configuration key "'+k+'" in class "'+name+'" is not allowed!');
}
if(h[k]==null){throw new Error("Invalid key '"+k+"' in interface '"+name+"'! The value is undefined/null!");
}
if(m[k]!==null&&typeof h[k]!==m[k]){throw new Error('Invalid type of key "'+k+'" in interface "'+name+'"! The type of the key must be "'+m[k]+'"!');
}}var j=[y,x,u,B];

for(var i=0,l=j.length;i<l;i++){var k=j[i];

if(h[k]!==undefined&&(h[k] instanceof Array||h[k] instanceof RegExp||h[k] instanceof Date||h[k].classname!==undefined)){throw new Error('Invalid key "'+k+'" in interface "'+name+'"! The value needs to be a map!');
}}if(h.extend){for(var i=0,a=h.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==H){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(h.statics){for(var k in h.statics){if(k.toUpperCase()!==k){throw new Error('Invalid key "'+k+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof h.statics[k]){case s:case F:case t:break;
default:throw new Error('Invalid key "'+k+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var t="object",s="qx.debug",r="function",q="Mixin",p="qx.Mixin",o=".prototype",n="constructor",m="[Mixin ",k="]",j="members",f="destruct",h="events",g="on",e="properties",d="statics";
qx.Bootstrap.define(p,{statics:{define:function(name,x){if(x){if(x.include&&!(x.include instanceof Array)){x.include=[x.include];
}if(qx.core.Variant.isSet(s,g)){this.__n(name,x);
}var z=x.statics?x.statics:{};
qx.Bootstrap.setDisplayNames(z,name);

for(var y in z){if(z[y] instanceof Function){z[y].$$mixin=z;
}}if(x.construct){z.$$constructor=x.construct;
qx.Bootstrap.setDisplayName(x.construct,name,n);
}
if(x.include){z.$$includes=x.include;
}
if(x.properties){z.$$properties=x.properties;
}
if(x.members){z.$$members=x.members;
qx.Bootstrap.setDisplayNames(x.members,name+o);
}
for(var y in z.$$members){if(z.$$members[y] instanceof Function){z.$$members[y].$$mixin=z;
}}
if(x.events){z.$$events=x.events;
}
if(x.destruct){z.$$destructor=x.destruct;
qx.Bootstrap.setDisplayName(x.destruct,name,f);
}}else{var z={};
}z.$$type=q;
z.name=name;
z.toString=this.genericToString;
z.basename=qx.Bootstrap.createNamespace(name,z);
this.$$registry[name]=z;
return z;
},checkCompatibility:function(E){var H=this.flatten(E);
var I=H.length;

if(I<2){return true;
}var L={};
var K={};
var J={};
var G;

for(var i=0;i<I;i++){G=H[i];

for(var F in G.events){if(J[F]){throw new Error('Conflict between mixin "'+G.name+'" and "'+J[F]+'" in member "'+F+'"!');
}J[F]=G.name;
}
for(var F in G.properties){if(L[F]){throw new Error('Conflict between mixin "'+G.name+'" and "'+L[F]+'" in property "'+F+'"!');
}L[F]=G.name;
}
for(var F in G.members){if(K[F]){throw new Error('Conflict between mixin "'+G.name+'" and "'+K[F]+'" in member "'+F+'"!');
}K[F]=G.name;
}}return true;
},isCompatible:function(u,v){var w=qx.Bootstrap.getMixins(v);
w.push(u);
return qx.Mixin.checkCompatibility(w);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(b){if(!b){return [];
}var c=b.concat();

for(var i=0,l=b.length;i<l;i++){if(b[i].$$includes){c.push.apply(c,this.flatten(b[i].$$includes));
}}return c;
},genericToString:function(){return m+this.name+k;
},$$registry:{},__m:qx.core.Variant.select(s,{"on":{"include":t,"statics":t,"members":t,"properties":t,"events":t,"destruct":r,"construct":r},"default":null}),__n:qx.core.Variant.select(s,{"on":function(name,A){var D=this.__m;

for(var C in A){if(!D[C]){throw new Error('The configuration key "'+C+'" in mixin "'+name+'" is not allowed!');
}
if(A[C]==null){throw new Error('Invalid key "'+C+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(D[C]!==null&&typeof A[C]!==D[C]){throw new Error('Invalid type of key "'+C+'" in mixin "'+name+'"! The type of the key must be "'+D[C]+'"!');
}}var B=[d,j,e,h];

for(var i=0,l=B.length;i<l;i++){var C=B[i];

if(A[C]!==undefined&&(A[C] instanceof Array||A[C] instanceof RegExp||A[C] instanceof Date||A[C].classname!==undefined)){throw new Error('Invalid key "'+C+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(A.include){for(var i=0,a=A.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==q){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(A.include);
}},"default":function(){}})}});
})();
(function(){var dm="on",dl="qx.debug",dk=';',dj="boolean",di='return this.',dh="string",dg="",df="setThemed",de='!==undefined)',dd="this.",cR="resetThemed",cQ="setRuntime",cP="set",cO="init",cN="qx.propertyDebugLevel",cM='else if(this.',cL="resetRuntime",cK="reset",cJ="();",cI='else ',du='if(this.',dv="return this.",ds="get",dt=";",dq="(a[",dr="value",dn=' of an instance of ',dp="refresh",dw=' is not (yet) ready!");',dx="]);",cV='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',cU='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',cX='qx.core.Assert.assertInstance(value, Date, msg) || true',cW='value !== null && value.nodeType === 9 && value.documentElement',da='value !== null && value.$$type === "Mixin"',cY='return init;',dc='var init=this.',db='value !== null && value.nodeType === 1 && value.attributes',cT="var parent = this.getLayoutParent();",cS="Error in property ",bF="property",bG="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bH="if (!parent) return;",bI=" in method ",bJ='qx.core.Assert.assertInstance(value, Error, msg) || true',bK='Undefined value is not allowed!',bL="inherit",bM='Is invalid!',bN="MSIE 6.0",bO="': ",dB=" of class ",dA='value !== null && value.nodeType !== undefined',dz='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',dy='qx.core.Assert.assertPositiveInteger(value, msg) || true',dF='if(init==qx.core.Property.$$inherit)init=null;',dE='value !== null && value.$$type === "Interface"',dD='var inherit=prop.$$inherit;',dC="var value = parent.",dH="$$useinit_",dG="(value);",co="$$runtime_",cp='Requires exactly one argument!',cm="$$user_",cn='qx.core.Assert.assertArray(value, msg) || true',cs='qx.core.Assert.assertPositiveNumber(value, msg) || true',ct=".prototype",cq="qx.core.Property.refresh() is deprecated. Please use the member function '$$refreshInheritables()'",cr="Boolean",ck='return value;',cl='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bW='Does not allow any arguments!',bV="()",bY='value !== null && value.$$type === "Theme"',bX="())",bS='return null;',bR='qx.core.Assert.assertObject(value, msg) || true',bU='qx.core.Assert.assertString(value, msg) || true',bT="if (value===undefined) value = parent.",bQ='value !== null && value.$$type === "Class"',bP='qx.core.Assert.assertFunction(value, msg) || true',cy=".",cz="object",cA="$$init_",cB="$$theme_",cu='qx.core.Assert.assertMap(value, msg) || true',cv="qx.aspects",cw='qx.core.Assert.assertNumber(value, msg) || true',cx='Null value is not allowed!',cC='qx.core.Assert.assertInteger(value, msg) || true',cD="rv:1.8.1",ch="shorthand",cg='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cf='value !== null && value.type !== undefined',ce='value !== null && value.document',cd='throw new Error("Property ',cc="(!this.",cb='qx.core.Assert.assertBoolean(value, msg) || true',ca="toggle",cj="$$inherit_",ci=" with incoming value '",cE="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cF="qx.core.Property",cG="is",cH='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(cF,{statics:{__o:{"Boolean":cb,"String":bU,"Number":cw,"Integer":cC,"PositiveNumber":cs,"PositiveInteger":dy,"Error":bJ,"RegExp":cg,"Object":bR,"Array":cn,"Map":cu,"Function":bP,"Date":cX,"Node":dA,"Element":db,"Document":cW,"Window":ce,"Event":cf,"Class":bQ,"Mixin":da,"Interface":dE,"Theme":bY,"Color":cV,"Decorator":dz,"Font":cU},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bL,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:dh,dispose:dj,dereference:dj,inheritable:dj,nullable:dj,themeable:dj,refine:dj,init:null,apply:dh,event:dh,check:null,transform:dh,deferredInit:dj,validate:null},$$allowedGroupKeys:{name:dh,group:cz,mode:dh,themeable:dj},$$inheritable:{},__q:function(k){var m=this.__r(k);

if(!m.length){var n=qx.lang.Function.empty;
}else{n=this.__s(m);
}k.prototype.$$refreshInheritables=n;
},__r:function(f){var h=[];

while(f){var g=f.$$properties;

if(g){for(var name in this.$$inheritable){if(g[name]&&g[name].inheritable){h.push(name);
}}}f=f.superclass;
}return h;
},__s:function(bq){var bu=this.$$store.inherit;
var bt=this.$$store.init;
var bs=this.$$method.refresh;
var br=[cT,bH];

for(var i=0,l=bq.length;i<l;i++){var name=bq[i];
br.push(dC,bu[name],dt,bT,bt[name],dt,dd,bs[name],dG);
}return new Function(br.join(dg));
},refresh:function(y){if(qx.core.Variant.isSet(dl,dm)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cq);
}y.$$refreshInheritables();
},attachRefreshInheritables:function(dI){dI.prototype.$$refreshInheritables=function(){qx.core.Property.__q(dI);
return this.$$refreshInheritables();
};
},attachMethods:function(s,name,t){t.group?this.__t(s,t,name):this.__u(s,t,name);
},__t:function(L,M,name){var T=qx.Bootstrap.firstUp(name);
var S=L.prototype;
var U=M.themeable===true;

if(qx.core.Variant.isSet(dl,dm)){if(qx.core.Setting.get(cN)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var V=[];
var P=[];

if(U){var N=[];
var R=[];
}var Q=bG;
V.push(Q);

if(U){N.push(Q);
}
if(M.mode==ch){var O=cE;
V.push(O);

if(U){N.push(O);
}}
for(var i=0,a=M.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(dl,dm)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}V.push(dd,this.$$method.set[a[i]],dq,i,dx);
P.push(dd,this.$$method.reset[a[i]],cJ);

if(U){if(qx.core.Variant.isSet(dl,dm)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}N.push(dd,this.$$method.setThemed[a[i]],dq,i,dx);
R.push(dd,this.$$method.resetThemed[a[i]],cJ);
}}this.$$method.set[name]=cP+T;
S[this.$$method.set[name]]=new Function(V.join(dg));
this.$$method.reset[name]=cK+T;
S[this.$$method.reset[name]]=new Function(P.join(dg));

if(U){this.$$method.setThemed[name]=df+T;
S[this.$$method.setThemed[name]]=new Function(N.join(dg));
this.$$method.resetThemed[name]=cR+T;
S[this.$$method.resetThemed[name]]=new Function(R.join(dg));
}},__u:function(bv,bw,name){var by=qx.Bootstrap.firstUp(name);
var bA=bv.prototype;

if(qx.core.Variant.isSet(dl,dm)){if(qx.core.Setting.get(cN)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(qx.core.Variant.isSet(dl,dm)){if(bw.dispose){if(!bw.dereference){bw.dereference=bw.dispose;
}qx.log.Logger.warn("The property key 'dispose' is deprecated: "+"Please use 'dereference' instead.");
qx.log.Logger.trace();
}}if(bw.dereference===undefined&&typeof bw.check===dh){bw.dereference=this.__v(bw.check);
}var bz=this.$$method;
var bx=this.$$store;
bx.runtime[name]=co+name;
bx.user[name]=cm+name;
bx.theme[name]=cB+name;
bx.init[name]=cA+name;
bx.inherit[name]=cj+name;
bx.useinit[name]=dH+name;
bz.get[name]=ds+by;
bA[bz.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bv,name,ds);
};
bz.set[name]=cP+by;
bA[bz.set[name]]=function(bn){return qx.core.Property.executeOptimizedSetter(this,bv,name,cP,arguments);
};
bz.reset[name]=cK+by;
bA[bz.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bv,name,cK);
};

if(bw.inheritable||bw.apply||bw.event||bw.deferredInit){bz.init[name]=cO+by;
bA[bz.init[name]]=function(e){return qx.core.Property.executeOptimizedSetter(this,bv,name,cO,arguments);
};
}
if(bw.inheritable){bz.refresh[name]=dp+by;
bA[bz.refresh[name]]=function(bf){return qx.core.Property.executeOptimizedSetter(this,bv,name,dp,arguments);
};
}bz.setRuntime[name]=cQ+by;
bA[bz.setRuntime[name]]=function(j){return qx.core.Property.executeOptimizedSetter(this,bv,name,cQ,arguments);
};
bz.resetRuntime[name]=cL+by;
bA[bz.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bv,name,cL);
};

if(bw.themeable){bz.setThemed[name]=df+by;
bA[bz.setThemed[name]]=function(ek){return qx.core.Property.executeOptimizedSetter(this,bv,name,df,arguments);
};
bz.resetThemed[name]=cR+by;
bA[bz.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bv,name,cR);
};
}
if(bw.check===cr){bA[ca+by]=new Function(dv+bz.set[name]+cc+bz.get[name]+bX);
bA[cG+by]=new Function(dv+bz.get[name]+bV);
}},__v:function(u){return !!this.__p[u];
},__w:function(W){return this.__p[W]||qx.Bootstrap.classIsDefined(W)||(qx.Interface&&qx.Interface.isDefined(W));
},__x:{0:cH,1:cp,2:bK,3:bW,4:cx,5:bM},error:function(bg,bh,bi,bj,bk){var bl=bg.constructor.classname;
var bm=cS+bi+dB+bl+bI+this.$$method[bj][bi]+ci+bk+bO;
throw new Error(bm+(this.__x[bh]||"Unknown reason: "+bh));
},__y:function(ee,ef,name,eg,eh,ei){var ej=this.$$method[eg][name];
if(qx.core.Variant.isSet(dl,dm)){if(qx.core.Setting.get(cN)>1){qx.Bootstrap.debug("Code["+this.$$method[eg][name]+"]: "+eh.join(""));
}try{ef[ej]=new Function(dr,eh.join(dg));
}catch(bc){throw new Error("Malformed generated code to unwrap method: "+this.$$method[eg][name]+"\n"+eh.join(""));
}}else{ef[ej]=new Function(dr,eh.join(dg));
}if(qx.core.Variant.isSet(cv,dm)){ef[ej]=qx.core.Aspect.wrap(ee.classname+cy+ej,ef[ej],bF);
}qx.Bootstrap.setDisplayName(ef[ej],ee.classname+ct,ej);
if(ei===undefined){return ee[ej]();
}else if(qx.core.Variant.isSet(dl,dm)){return ee[ej].apply(ee,ei);
}else{return ee[ej](ei[0]);
}},executeOptimizedGetter:function(z,A,name,B){var D=A.$$properties[name];
var F=A.prototype;
var C=[];
var E=this.$$store;
C.push(du,E.runtime[name],de);
C.push(di,E.runtime[name],dk);

if(D.inheritable){C.push(cM,E.inherit[name],de);
C.push(di,E.inherit[name],dk);
C.push(cI);
}C.push(du,E.user[name],de);
C.push(di,E.user[name],dk);

if(D.themeable){C.push(cM,E.theme[name],de);
C.push(di,E.theme[name],dk);
}
if(D.deferredInit&&D.init===undefined){C.push(cM,E.init[name],de);
C.push(di,E.init[name],dk);
}C.push(cI);

if(D.init!==undefined){if(D.inheritable){C.push(dc,E.init[name],dk);

if(D.nullable){C.push(dF);
}else if(D.init!==undefined){C.push(di,E.init[name],dk);
}else{C.push(cl,name,dn,A.classname,dw);
}C.push(cY);
}else{C.push(di,E.init[name],dk);
}}else if(D.inheritable||D.nullable){C.push(bS);
}else{C.push(cd,name,dn,A.classname,dw);
}return this.__y(z,F,name,B,C);
},executeOptimizedSetter:function(dM,dN,name,dO,dP){var dU=dN.$$properties[name];
var dT=dN.prototype;
var dR=[];
var dQ=dO===cP||dO===df||dO===cQ||(dO===cO&&dU.init===undefined);
var dS=dU.apply||dU.event||dU.inheritable;
var dV=this.__z(dO,name);
this.__A(dR,dU,name,dO,dQ);

if(dQ){this.__B(dR,dN,dU,name);
}
if(dS){this.__C(dR,dQ,dV,dO);
}
if(dU.inheritable){dR.push(dD);
}
if(qx.core.Variant.isSet(dl,dm)){if(dQ){this.__D(dR,dU,dN,name,dO);
}}
if(!dS){this.__E(dR,name,dO,dQ);
}else{this.__F(dR,dU,name,dO,dQ);
}
if(dU.inheritable){this.__G(dR,dU,name,dO);
}else if(dS){this.__H(dR,dU,name,dO);
}
if(dS){this.__I(dR,dU,name);
if(dU.inheritable&&dT._getChildren){this.__J(dR,name);
}}if(dQ){dR.push(ck);
}return this.__y(dM,dT,name,dO,dR,dP);
},__z:function(bo,name){if(bo===cQ||bo===cL){var bp=this.$$store.runtime[name];
}else if(bo===df||bo===cR){bp=this.$$store.theme[name];
}else if(bo===cO){bp=this.$$store.init[name];
}else{bp=this.$$store.user[name];
}return bp;
},__A:function(ea,eb,name,ec,ed){if(qx.core.Variant.isSet("qx.debug","on")){ea.push('var prop=qx.core.Property;');

if(ec==="init"){ea.push('if(this.$$initialized)prop.error(this,0,"',name,'","',ec,'",value);');
}
if(ec==="refresh"){}else if(ed){ea.push('if(arguments.length!==1)prop.error(this,1,"',name,'","',ec,'",value);');
ea.push('if(value===undefined)prop.error(this,2,"',name,'","',ec,'",value);');
}else{ea.push('if(arguments.length!==0)prop.error(this,3,"',name,'","',ec,'",value);');
}}else{if(!eb.nullable||eb.check||eb.inheritable){ea.push('var prop=qx.core.Property;');
}if(ec==="set"){ea.push('if(value===undefined)prop.error(this,2,"',name,'","',ec,'",value);');
}}},__B:function(dJ,dK,dL,name){if(dL.transform){dJ.push('value=this.',dL.transform,'(value);');
}if(dL.validate){if(typeof dL.validate==="string"){dJ.push('this.',dL.validate,'(value);');
}else if(dL.validate instanceof Function){dJ.push(dK.classname,'.$$properties.',name);
dJ.push('.validate.call(this, value);');
}}},__C:function(G,H,I,J){var K=(J==="reset"||J==="resetThemed"||J==="resetRuntime");

if(H){G.push('if(this.',I,'===value)return value;');
}else if(K){G.push('if(this.',I,'===undefined)return;');
}},__D:qx.core.Variant.select("qx.debug",{"on":function(o,p,q,name,r){if(!p.nullable){o.push('if(value===null)prop.error(this,4,"',name,'","',r,'",value);');
}if(p.check!==undefined){o.push('var msg = "Invalid incoming value for property \''+name+'\' of class \''+q.classname+'\'";');
if(p.nullable){o.push('if(value!==null)');
}if(p.inheritable){o.push('if(value!==inherit)');
}o.push('if(');

if(this.__o[p.check]!==undefined){o.push('!(',this.__o[p.check],')');
}else if(qx.Class.isDefined(p.check)){o.push('qx.core.Assert.assertInstance(value, qx.Class.getByName("',p.check,'"), msg)');
}else if(qx.Interface&&qx.Interface.isDefined(p.check)){o.push('qx.core.Assert.assertInterface(value, qx.Interface.getByName("',p.check,'"), msg)');
}else if(typeof p.check==="function"){o.push('!',q.classname,'.$$properties.',name);
o.push('.check.call(this, value)');
}else if(typeof p.check==="string"){o.push('!(',p.check,')');
}else if(p.check instanceof Array){o.push('qx.core.Assert.assertInArray(value, ',q.classname,'.$$properties.',name,'.check, msg)');
}else{throw new Error("Could not add check to property "+name+" of class "+q.classname);
}o.push(')prop.error(this,5,"',name,'","',r,'",value);');
}},"off":undefined}),__E:function(b,name,c,d){if(c==="setRuntime"){b.push('this.',this.$$store.runtime[name],'=value;');
}else if(c==="resetRuntime"){b.push('if(this.',this.$$store.runtime[name],'!==undefined)');
b.push('delete this.',this.$$store.runtime[name],';');
}else if(c==="set"){b.push('this.',this.$$store.user[name],'=value;');
}else if(c==="reset"){b.push('if(this.',this.$$store.user[name],'!==undefined)');
b.push('delete this.',this.$$store.user[name],';');
}else if(c==="setThemed"){b.push('this.',this.$$store.theme[name],'=value;');
}else if(c==="resetThemed"){b.push('if(this.',this.$$store.theme[name],'!==undefined)');
b.push('delete this.',this.$$store.theme[name],';');
}else if(c==="init"&&d){b.push('this.',this.$$store.init[name],'=value;');
}},__F:function(X,Y,name,ba,bb){if(Y.inheritable){X.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{X.push('var computed, old;');
}X.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(ba==="setRuntime"){X.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ba==="resetRuntime"){X.push('delete this.',this.$$store.runtime[name],';');
X.push('if(this.',this.$$store.user[name],'!==undefined)');
X.push('computed=this.',this.$$store.user[name],';');
X.push('else if(this.',this.$$store.theme[name],'!==undefined)');
X.push('computed=this.',this.$$store.theme[name],';');
X.push('else if(this.',this.$$store.init[name],'!==undefined){');
X.push('computed=this.',this.$$store.init[name],';');
X.push('this.',this.$$store.useinit[name],'=true;');
X.push('}');
}else{X.push('old=computed=this.',this.$$store.runtime[name],';');
if(ba==="set"){X.push('this.',this.$$store.user[name],'=value;');
}else if(ba==="reset"){X.push('delete this.',this.$$store.user[name],';');
}else if(ba==="setThemed"){X.push('this.',this.$$store.theme[name],'=value;');
}else if(ba==="resetThemed"){X.push('delete this.',this.$$store.theme[name],';');
}else if(ba==="init"&&bb){X.push('this.',this.$$store.init[name],'=value;');
}}X.push('}');
X.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(ba==="set"){if(!Y.inheritable){X.push('old=this.',this.$$store.user[name],';');
}X.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ba==="reset"){if(!Y.inheritable){X.push('old=this.',this.$$store.user[name],';');
}X.push('delete this.',this.$$store.user[name],';');
X.push('if(this.',this.$$store.runtime[name],'!==undefined)');
X.push('computed=this.',this.$$store.runtime[name],';');
X.push('if(this.',this.$$store.theme[name],'!==undefined)');
X.push('computed=this.',this.$$store.theme[name],';');
X.push('else if(this.',this.$$store.init[name],'!==undefined){');
X.push('computed=this.',this.$$store.init[name],';');
X.push('this.',this.$$store.useinit[name],'=true;');
X.push('}');
}else{if(ba==="setRuntime"){X.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(Y.inheritable){X.push('computed=this.',this.$$store.user[name],';');
}else{X.push('old=computed=this.',this.$$store.user[name],';');
}if(ba==="setThemed"){X.push('this.',this.$$store.theme[name],'=value;');
}else if(ba==="resetThemed"){X.push('delete this.',this.$$store.theme[name],';');
}else if(ba==="init"&&bb){X.push('this.',this.$$store.init[name],'=value;');
}}X.push('}');
if(Y.themeable){X.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!Y.inheritable){X.push('old=this.',this.$$store.theme[name],';');
}
if(ba==="setRuntime"){X.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ba==="set"){X.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ba==="setThemed"){X.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ba==="resetThemed"){X.push('delete this.',this.$$store.theme[name],';');
X.push('if(this.',this.$$store.init[name],'!==undefined){');
X.push('computed=this.',this.$$store.init[name],';');
X.push('this.',this.$$store.useinit[name],'=true;');
X.push('}');
}else if(ba==="init"){if(bb){X.push('this.',this.$$store.init[name],'=value;');
}X.push('computed=this.',this.$$store.theme[name],';');
}else if(ba==="refresh"){X.push('computed=this.',this.$$store.theme[name],';');
}X.push('}');
}X.push('else if(this.',this.$$store.useinit[name],'){');

if(!Y.inheritable){X.push('old=this.',this.$$store.init[name],';');
}
if(ba==="init"){if(bb){X.push('computed=this.',this.$$store.init[name],'=value;');
}else{X.push('computed=this.',this.$$store.init[name],';');
}}else if(ba==="set"||ba==="setRuntime"||ba==="setThemed"||ba==="refresh"){X.push('delete this.',this.$$store.useinit[name],';');

if(ba==="setRuntime"){X.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ba==="set"){X.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ba==="setThemed"){X.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ba==="refresh"){X.push('computed=this.',this.$$store.init[name],';');
}}X.push('}');
if(ba==="set"||ba==="setRuntime"||ba==="setThemed"||ba==="init"){X.push('else{');

if(ba==="setRuntime"){X.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(ba==="set"){X.push('computed=this.',this.$$store.user[name],'=value;');
}else if(ba==="setThemed"){X.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(ba==="init"){if(bb){X.push('computed=this.',this.$$store.init[name],'=value;');
}else{X.push('computed=this.',this.$$store.init[name],';');
}X.push('this.',this.$$store.useinit[name],'=true;');
}X.push('}');
}},__G:function(bB,bC,name,bD){bB.push('if(computed===undefined||computed===inherit){');

if(bD==="refresh"){bB.push('computed=value;');
}else{bB.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}bB.push('if((computed===undefined||computed===inherit)&&');
bB.push('this.',this.$$store.init[name],'!==undefined&&');
bB.push('this.',this.$$store.init[name],'!==inherit){');
bB.push('computed=this.',this.$$store.init[name],';');
bB.push('this.',this.$$store.useinit[name],'=true;');
bB.push('}else{');
bB.push('delete this.',this.$$store.useinit[name],';}');
bB.push('}');
bB.push('if(old===computed)return value;');
bB.push('if(computed===inherit){');
bB.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
bB.push('}');
bB.push('else if(computed===undefined)');
bB.push('delete this.',this.$$store.inherit[name],';');
bB.push('else this.',this.$$store.inherit[name],'=computed;');
bB.push('var backup=computed;');
if(bC.init!==undefined&&bD!=="init"){bB.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{bB.push('if(old===undefined)old=null;');
}bB.push('if(computed===undefined||computed==inherit)computed=null;');
},__H:function(dW,dX,name,dY){if(dY!=="set"&&dY!=="setRuntime"&&dY!=="setThemed"){dW.push('if(computed===undefined)computed=null;');
}dW.push('if(old===computed)return value;');
if(dX.init!==undefined&&dY!=="init"){dW.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dW.push('if(old===undefined)old=null;');
}},__I:function(bd,be,name){if(be.apply){bd.push('this.',be.apply,'(computed, old, "',name,'");');
}if(be.event){bd.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",be.event,"')){","reg.fireEvent(this, '",be.event,"', qx.event.type.Data, [computed, old]",")}");
}},__J:function(bE,name){bE.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
bE.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
bE.push('}');
}},defer:function(v){var x=navigator.userAgent.indexOf(bN)!=-1;
var w=navigator.userAgent.indexOf(cD)!=-1;
if(x||w){v.__v=v.__w;
}}});
})();
(function(){var e="qx.core.Aspect",d="before",c="*",b="static";
qx.Bootstrap.define(e,{statics:{__wJ:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__wJ;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==c)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var a=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,a);
}return a;
};

if(l!==b){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(f,g,h,name){this.__wJ.push({fcn:f,pos:g===d?-1:1,type:h,name:name});
}}});
})();
(function(){var N="on",M="qx.debug",L="qx.aspects",K=".",J="static",I="[Class ",H="]",G="abstract",F="constructor",E="extend",B="qx.Class",D="singleton",C='Assumed static class because no "extend" key was found. ';
qx.Bootstrap.define(B,{statics:{define:function(name,bU){if(!bU){var bU={};
}if(bU.include&&!(bU.include instanceof Array)){bU.include=[bU.include];
}if(bU.implement&&!(bU.implement instanceof Array)){bU.implement=[bU.implement];
}var bV=false;

if(!bU.hasOwnProperty(E)&&!bU.type){bU.type=J;
bV=true;
}if(qx.core.Variant.isSet(M,N)){try{this.__M(name,bU);
}catch(cr){if(bV){cr.message=C+cr.message;
}throw cr;
}}var bW=this.__O(name,bU.type,bU.extend,bU.statics,bU.construct,bU.destruct,bU.include);
if(bU.extend){if(bU.properties){this.__Q(bW,bU.properties,true);
}if(bU.members){this.__S(bW,bU.members,true,true,false);
}if(bU.events){this.__P(bW,bU.events,true);
}if(bU.include){for(var i=0,l=bU.include.length;i<l;i++){this.__W(bW,bU.include[i],false);
}}}if(bU.settings){for(var bX in bU.settings){qx.core.Setting.define(bX,bU.settings[bX]);
}}if(bU.variants){for(var bX in bU.variants){qx.core.Variant.define(bX,bU.variants[bX].allowedValues,bU.variants[bX].defaultValue);
}}if(bU.implement){for(var i=0,l=bU.implement.length;i<l;i++){this.__U(bW,bU.implement[i]);
}}
if(qx.core.Variant.isSet(M,N)){this.__N(bW);
}if(bU.defer){bU.defer.self=bW;
bU.defer(bW,bW.prototype,{add:function(name,cx){var cy={};
cy[name]=cx;
qx.Class.__Q(bW,cy,true);
}});
}return bW;
},undefine:function(name){delete this.$$registry[name];
var y=name.split(K);
var A=[window];

for(var i=0;i<y.length;i++){A.push(A[i][y[i]]);
}for(var i=A.length-1;i>=1;i--){var z=A[i];
var parent=A[i-1];

if(qx.Bootstrap.isFunction(z)||qx.Bootstrap.objectGetLength(z)===0){delete parent[y[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bS,bT){if(qx.core.Variant.isSet(M,N)){if(!bT){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bS.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(bT,bS);
}qx.Class.__W(bS,bT,false);
},patch:function(b,c){if(qx.core.Variant.isSet(M,N)){if(!c){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+b.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(c,b);
}qx.Class.__W(b,c,true);
},isSubClassOf:function(e,f){if(!e){return false;
}
if(e==f){return true;
}
if(e.prototype instanceof f){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bQ){var bR=[];

while(bQ){if(bQ.$$properties){bR.push.apply(bR,qx.Bootstrap.getKeys(bQ.$$properties));
}bQ=bQ.superclass;
}return bR;
},getByProperty:function(d,name){while(d){if(d.$$properties&&d.$$properties[name]){return d;
}d=d.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bt,bu){return bt.$$includes&&bt.$$includes.indexOf(bu)!==-1;
},getByMixin:function(X,Y){var ba,i,l;

while(X){if(X.$$includes){ba=X.$$flatIncludes;

for(i=0,l=ba.length;i<l;i++){if(ba[i]===Y){return X;
}}}X=X.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(bG,bH){return !!this.getByMixin(bG,bH);
},hasOwnInterface:function(cf,cg){return cf.$$implements&&cf.$$implements.indexOf(cg)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(bY){var ca=[];

while(bY){if(bY.$$implements){ca.push.apply(ca,bY.$$flatImplements);
}bY=bY.superclass;
}return ca;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(cs,ct){var cu=cs.constructor;

if(this.hasInterface(cu,ct)){return true;
}
try{qx.Interface.assertObject(cs,ct);
return true;
}catch(bI){}
try{qx.Interface.assert(cu,ct,false);
return true;
}catch(ch){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return I+this.classname+H;
},$$registry:qx.Bootstrap.$$registry,__K:qx.core.Variant.select("qx.debug",{"on":{"type":"string","extend":"function","implement":"object","include":"object","construct":"function","statics":"object","properties":"object","members":"object","settings":"object","variants":"object","events":"object","defer":"function","destruct":"function"},"default":null}),__L:qx.core.Variant.select("qx.debug",{"on":{"type":"string","statics":"object","settings":"object","variants":"object","defer":"function"},"default":null}),__M:qx.core.Variant.select("qx.debug",{"on":function(name,s){if(s.type&&!(s.type==="static"||s.type==="abstract"||s.type==="singleton")){throw new Error('Invalid type "'+s.type+'" definition for class "'+name+'"!');
}if(s.type&&s.type!=="static"&&!s.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var v=s.type==="static"?this.__L:this.__K;

for(var u in s){if(!v[u]){throw new Error('The configuration key "'+u+'" in class "'+name+'" is not allowed!');
}
if(s[u]==null){throw new Error('Invalid key "'+u+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof s[u]!==v[u]){throw new Error('Invalid type of key "'+u+'" in class "'+name+'"! The type of the key must be "'+v[u]+'"!');
}}var t=["statics","properties","members","settings","variants","events"];

for(var i=0,l=t.length;i<l;i++){var u=t[i];

if(s[u]!==undefined&&(s[u].$$hash!==undefined||!qx.Bootstrap.isObject(s[u]))){throw new Error('Invalid key "'+u+'" in class "'+name+'"! The value needs to be a map!');
}}if(s.include){if(s.include instanceof Array){for(var i=0,a=s.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Mixin"){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(s.implement){if(s.implement instanceof Array){for(var i=0,a=s.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!=="Interface"){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(s.include){try{qx.Mixin.checkCompatibility(s.include);
}catch(x){throw new Error('Error in include definition of class "'+name+'"! '+x.message);
}}if(s.settings){for(var u in s.settings){if(u.substr(0,u.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden setting "'+u+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(s.variants){for(var u in s.variants){if(u.substr(0,u.indexOf("."))!=name.substr(0,name.indexOf("."))){throw new Error('Forbidden variant "'+u+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__N:qx.core.Variant.select("qx.debug",{"on":function(co){var cq=co.superclass;

while(cq){if(cq.$$classtype!=="abstract"){break;
}var cp=cq.$$implements;

if(cp){for(var i=0;i<cp.length;i++){qx.Interface.assert(co,cp[i],true);
}}cq=cq.superclass;
}},"default":function(){}}),__O:function(name,g,h,j,k,m,n){var q;

if(!h&&qx.core.Variant.isSet("qx.aspects","off")){q=j||{};
qx.Bootstrap.setDisplayNames(q,name);
}else{var q={};

if(h){if(!k){k=this.__X();
}
if(this.__ba(h,n)){q=this.__bb(k,name,g);
}else{q=k;
}if(g==="singleton"){q.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(k,name,"constructor");
}if(j){qx.Bootstrap.setDisplayNames(j,name);
var r;

for(var i=0,a=qx.Bootstrap.getKeys(j),l=a.length;i<l;i++){r=a[i];
var o=j[r];

if(qx.core.Variant.isSet("qx.aspects","on")){if(o instanceof Function){o=qx.core.Aspect.wrap(name+"."+r,o,"static");
}q[r]=o;
}else{q[r]=o;
}}}}var p=qx.Bootstrap.createNamespace(name,q);
q.name=q.classname=name;
q.basename=p;
q.$$type="Class";

if(g){q.$$classtype=g;
}if(!q.hasOwnProperty("toString")){q.toString=this.genericToString;
}
if(h){qx.Bootstrap.extendClass(q,k,h,name,p);
if(m){if(qx.core.Variant.isSet("qx.aspects","on")){m=qx.core.Aspect.wrap(name,m,"destructor");
}q.$$destructor=m;
qx.Bootstrap.setDisplayName(m,name,"destruct");
}}this.$$registry[name]=q;
return q;
},__P:function(bM,bN,bO){if(qx.core.Variant.isSet("qx.debug","on")){if(typeof bN!=="object"||bN instanceof Array){throw new Error(bM.classname+": the events must be defined as map!");
}
for(var bP in bN){if(typeof bN[bP]!=="string"){throw new Error(bM.classname+"/"+bP+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(bM.$$events&&bO!==true){for(var bP in bN){if(bM.$$events[bP]!==undefined&&bM.$$events[bP]!==bN[bP]){throw new Error(bM.classname+"/"+bP+": the event value/type cannot be changed from "+bM.$$events[bP]+" to "+bN[bP]);
}}}}
if(bM.$$events){for(var bP in bN){bM.$$events[bP]=bN[bP];
}}else{bM.$$events=bN;
}},__Q:function(bb,bc,bd){var be;

if(bd===undefined){bd=false;
}var bf=bb.prototype;

for(var name in bc){be=bc[name];
if(qx.core.Variant.isSet("qx.debug","on")){this.__R(bb,name,be,bd);
}be.name=name;
if(!be.refine){if(bb.$$properties===undefined){bb.$$properties={};
}bb.$$properties[name]=be;
}if(be.init!==undefined){bb.prototype["$$init_"+name]=be.init;
}if(be.event!==undefined){var event={};
event[be.event]="qx.event.type.Data";
this.__P(bb,event,bd);
}if(be.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bf.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bb);
}}
if(!be.refine){qx.core.Property.attachMethods(bb,name,be);
}}},__R:qx.core.Variant.select("qx.debug",{"on":function(bm,name,bn,bo){var bq=this.hasProperty(bm,name);

if(bq){var bp=this.getPropertyDefinition(bm,name);

if(bn.refine&&bp.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+bm.classname+"'.");
}}
if(!bq&&bn.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bm.classname+"'!");
}
if(bq&&!bo){throw new Error("Class "+bm.classname+" already has a property: "+name+"!");
}
if(bq&&bo){if(!bn.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bm.classname+', original class: '+this.getByProperty(bm,name).classname+'.');
}
for(var br in bn){if(br!=="init"&&br!=="refine"){throw new Error("Class "+bm.classname+" could not refine property: "+name+"! Key: "+br+" could not be refined!");
}}}var bs=bn.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var br in bn){if(bs[br]===undefined){throw new Error('The configuration key "'+br+'" of property "'+name+'" in class "'+bm.classname+'" is not allowed!');
}
if(bn[br]===undefined){throw new Error('Invalid key "'+br+'" of property "'+name+'" in class "'+bm.classname+'"! The value is undefined: '+bn[br]);
}
if(bs[br]!==null&&typeof bn[br]!==bs[br]){throw new Error('Invalid type of key "'+br+'" of property "'+name+'" in class "'+bm.classname+'"! The type of the key must be "'+bs[br]+'"!');
}}
if(bn.transform!=null){if(!(typeof bn.transform=="string")){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bm.classname+'"! Needs to be a String.');
}}
if(bn.check!=null){if(!qx.Bootstrap.isString(bn.check)&&!qx.Bootstrap.isArray(bn.check)&&!qx.Bootstrap.isFunction(bn.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bm.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__S:function(by,bz,bA,bB,bC){var bD=by.prototype;
var bF,bE;
qx.Bootstrap.setDisplayNames(bz,by.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bz),l=a.length;i<l;i++){bF=a[i];
bE=bz[bF];

if(qx.core.Variant.isSet("qx.debug","on")){if(bD[bF]!==undefined&&bF.charAt(0)=="_"&&bF.charAt(1)=="_"){throw new Error('Overwriting private member "'+bF+'" of Class "'+by.classname+'" is not allowed!');
}
if(bA!==true&&bD.hasOwnProperty(bF)){throw new Error('Overwriting member "'+bF+'" of Class "'+by.classname+'" is not allowed!');
}}if(bB!==false&&bE instanceof Function&&bE.$$type==null){if(bC==true){bE=this.__T(bE,bD[bF]);
}else{if(bD[bF]){bE.base=bD[bF];
}bE.self=by;
}
if(qx.core.Variant.isSet("qx.aspects","on")){bE=qx.core.Aspect.wrap(by.classname+"."+bF,bE,"member");
}}bD[bF]=bE;
}},__T:function(cm,cn){if(cn){return function(){var cw=cm.base;
cm.base=cn;
var cv=cm.apply(this,arguments);
cm.base=cw;
return cv;
};
}else{return cm;
}},__U:function(bJ,bK){if(qx.core.Variant.isSet("qx.debug","on")){if(!bJ||!bK){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(bJ,bK)){throw new Error('Interface "'+bK.name+'" is already used by Class "'+bJ.classname+'!');
}if(bJ.$$classtype!=="abstract"){qx.Interface.assert(bJ,bK,true);
}}var bL=qx.Interface.flatten([bK]);

if(bJ.$$implements){bJ.$$implements.push(bK);
bJ.$$flatImplements.push.apply(bJ.$$flatImplements,bL);
}else{bJ.$$implements=[bK];
bJ.$$flatImplements=bL;
}},__V:function(bg){var name=bg.classname;
var bh=this.__bb(bg,name,bg.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bg),l=a.length;i<l;i++){bi=a[i];

if(bg.hasOwnProperty(bi)){bh[bi]=bg[bi];
}}bh.prototype=bg.prototype;
var bk=bg.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bk),l=a.length;i<l;i++){bi=a[i];

if(bk.hasOwnProperty(bi)){var bl=bk[bi];

if(bl.self==bg){bl.self=bh;
}}}for(var bi in this.$$registry){var bj=this.$$registry[bi];

if(!bj){continue;
}
if(bj.base==bg){bj.base=bh;
}
if(bj.superclass==bg){bj.superclass=bh;
}
if(bj.$$original){if(bj.$$original.base==bg){bj.$$original.base=bh;
}
if(bj.$$original.superclass==bg){bj.$$original.superclass=bh;
}}}qx.Bootstrap.createNamespace(name,bh);
this.$$registry[name]=bh;
return bh;
},__W:function(O,P,Q){if(qx.core.Variant.isSet("qx.debug","on")){if(!O||!P){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(O,P)){return;
}var T=O.$$original;

if(P.$$constructor&&!T){O=this.__V(O);
}var S=qx.Mixin.flatten([P]);
var R;

for(var i=0,l=S.length;i<l;i++){R=S[i];
if(R.$$events){this.__P(O,R.$$events,Q);
}if(R.$$properties){this.__Q(O,R.$$properties,Q);
}if(R.$$members){this.__S(O,R.$$members,Q,Q,Q);
}}if(O.$$includes){O.$$includes.push(P);
O.$$flatIncludes.push.apply(O.$$flatIncludes,S);
}else{O.$$includes=[P];
O.$$flatIncludes=S;
}},__X:function(){function w(){w.base.apply(this,arguments);
}return w;
},__Y:function(){return function(){};
},__ba:function(cb,cc){if(qx.core.Variant.isSet(M,N)){return true;
}if(cb&&cb.$$includes){var cd=cb.$$flatIncludes;

for(var i=0,l=cd.length;i<l;i++){if(cd[i].$$constructor){return true;
}}}if(cc){var ce=qx.Mixin.flatten(cc);

for(var i=0,l=ce.length;i<l;i++){if(ce[i].$$constructor){return true;
}}}return false;
},__bb:function(ci,name,cj){var cl=function(){var W=cl;

if(qx.core.Variant.isSet(M,N)){if(!(this instanceof W)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(cj===G){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(cj===D){if(!W.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var V=W.$$original.apply(this,arguments);
if(W.$$includes){var U=W.$$flatIncludes;

for(var i=0,l=U.length;i<l;i++){if(U[i].$$constructor){U[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(M,N)){if(this.classname===name){this.$$initialized=true;
}}return V;
};

if(qx.core.Variant.isSet(L,N)){var ck=qx.core.Aspect.wrap(name,cl,F);
cl.$$original=ci;
cl.constructor=ck;
cl=ck;
}cl.$$original=ci;
ci.wrapper=cl;
return cl;
}},defer:function(){if(qx.core.Variant.isSet(L,N)){for(var bv in qx.Bootstrap.$$registry){var bw=qx.Bootstrap.$$registry[bv];

for(var bx in bw){if(bw[bx] instanceof Function){bw[bx]=qx.core.Aspect.wrap(bv+K+bx,bw[bx],J);
}}}}}});
})();
(function(){var r="qx.client",q="on",p="function",o="mousedown",n="qx.bom.Event",m="return;",l="mouseover",k="HTMLEvents";
qx.Class.define(n,{statics:{addNativeListener:qx.core.Variant.select(r,{"mshtml":function(s,t,u){s.attachEvent(q+t,u);
},"default":function(v,w,x){v.addEventListener(w,x,false);
}}),removeNativeListener:qx.core.Variant.select(r,{"mshtml":function(C,D,E){try{C.detachEvent(q+D,E);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(c,d,f){c.removeEventListener(d,f,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(r,{"mshtml":function(e){if(e.type===l){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(r,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==o&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(j){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(g,h){if(document.createEventObject){var i=document.createEventObject();
return g.fireEvent(q+h,i);
}else{var i=document.createEvent(k);
i.initEvent(h,true,true);
return !g.dispatchEvent(i);
}},supportsEvent:qx.core.Variant.select(r,{"webkit":function(a,b){return a.hasOwnProperty(q+b);
},"default":function(y,z){var A=q+z;
var B=(A in y);

if(!B){B=typeof y[A]==p;

if(!B&&y.setAttribute){y.setAttribute(A,m);
B=typeof y[A]==p;
y.removeAttribute(A);
}}return B;
}})}});
})();
(function(){var bh="qx.debug",bg="on",bf="|bubble",be="|capture",bd="|",bc="': ",bb="'",ba="",Y="_",X="Invalid Target.",bG="Invalid event type.",bF="Invalid event target.",bE=" from the target '",bD="Invalid callback function",bC="unload",bB="Failed to remove event listener for id '",bA="Invalid context for callback.",bz="Invalid capture flag.",by="Failed to add event listener for type '",bx="UNKNOWN_",bo="capture",bp="qx.event.Manager",bm="Could not dispatch event '",bn="DOM_",bk="QX_",bl=" to the target '",bi="Failed to remove event listener for type '",bj="Invalid capture falg.",bq="__br",br="c",bt="Invalid id type.",bs="' on target '",bv="WIN_",bu="Invalid event object.",bw="__bs";
qx.Class.define(bp,{extend:Object,construct:function(cR,cS){this.__bn=cR;
this.__bo=qx.core.ObjectRegistry.toHashCode(cR);
this.__bp=cS;
if(cR.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cR,bC,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cR,bC,arguments.callee);
self.dispose();
}));
}this.__bq={};
this.__br={};
this.__bs={};
this.__bt={};
},statics:{__bu:0,getNextUniqueId:function(){return (this.__bu++)+ba;
}},members:{__bp:null,__bq:null,__bs:null,__bv:null,__br:null,__bt:null,__bn:null,__bo:null,getWindow:function(){return this.__bn;
},getWindowId:function(){return this.__bo;
},getHandler:function(cn){var co=this.__br[cn.classname];

if(co){return co;
}return this.__br[cn.classname]=new cn(this);
},getDispatcher:function(ct){var cu=this.__bs[ct.classname];

if(cu){return cu;
}return this.__bs[ct.classname]=new ct(this,this.__bp);
},getListeners:function(Q,R,S){var T=Q.$$hash||qx.core.ObjectRegistry.toHashCode(Q);
var V=this.__bq[T];

if(!V){return null;
}var W=R+(S?be:bf);
var U=V[W];
return U?U.concat():null;
},serializeListeners:function(cH){var cO=cH.$$hash||qx.core.ObjectRegistry.toHashCode(cH);
var cQ=this.__bq[cO];
var cM=[];

if(cQ){var cK,cP,cI,cL,cN;

for(var cJ in cQ){cK=cJ.indexOf(bd);
cP=cJ.substring(0,cK);
cI=cJ.charAt(cK+1)==br;
cL=cQ[cJ];

for(var i=0,l=cL.length;i<l;i++){cN=cL[i];
cM.push({self:cN.context,handler:cN.handler,type:cP,capture:cI});
}}}return cM;
},toggleAttachedEvents:function(y,z){var E=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var G=this.__bq[E];

if(G){var B,F,A,C;

for(var D in G){B=D.indexOf(bd);
F=D.substring(0,B);
A=D.charCodeAt(B+1)===99;
C=G[D];

if(z){this.__bw(y,F,A);
}else{this.__bx(y,F,A);
}}}},hasListener:function(bH,bI,bJ){if(qx.core.Variant.isSet(bh,bg)){if(bH==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+bH);
}}var bK=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bM=this.__bq[bK];

if(!bM){return false;
}var bN=bI+(bJ?be:bf);
var bL=bM[bN];
return bL&&bL.length>0;
},importListeners:function(H,I){if(qx.core.Variant.isSet(bh,bg)){if(H==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+H);
}}var O=H.$$hash||qx.core.ObjectRegistry.toHashCode(H);
var P=this.__bq[O]={};
var L=qx.event.Manager;

for(var J in I){var M=I[J];
var N=M.type+(M.capture?be:bf);
var K=P[N];

if(!K){K=P[N]=[];
this.__bw(H,M.type,M.capture);
}K.push({handler:M.listener,context:M.self,unique:M.unique||(L.__bu++)+ba});
}},addListener:function(bO,bP,bQ,self,bR){if(qx.core.Variant.isSet(bh,bg)){var bV=by+bP+bb+bl+bO.classname+bc;
qx.core.Assert.assertObject(bO,bV+X);
qx.core.Assert.assertString(bP,bV+bG);
qx.core.Assert.assertFunction(bQ,bV+bD);

if(bR!==undefined){qx.core.Assert.assertBoolean(bR,bz);
}}var bW=bO.$$hash||qx.core.ObjectRegistry.toHashCode(bO);
var bY=this.__bq[bW];

if(!bY){bY=this.__bq[bW]={};
}var bU=bP+(bR?be:bf);
var bT=bY[bU];

if(!bT){bT=bY[bU]=[];
}if(bT.length===0){this.__bw(bO,bP,bR);
}var bX=(qx.event.Manager.__bu++)+ba;
var bS={handler:bQ,context:self,unique:bX};
bT.push(bS);
return bU+bd+bX;
},findHandler:function(ca,cb){var cl=false,ce=false,cm=false;
var ck;

if(ca.nodeType===1){cl=true;
ck=bn+ca.tagName.toLowerCase()+Y+cb;
}else if(ca==this.__bn){ce=true;
ck=bv+cb;
}else if(ca.classname){cm=true;
ck=bk+ca.classname+Y+cb;
}else{ck=bx+ca+Y+cb;
}var cg=this.__bt;

if(cg[ck]){return cg[ck];
}var cj=this.__bp.getHandlers();
var cf=qx.event.IEventHandler;
var ch,ci,cd,cc;

for(var i=0,l=cj.length;i<l;i++){ch=cj[i];
cd=ch.SUPPORTED_TYPES;

if(cd&&!cd[cb]){continue;
}cc=ch.TARGET_CHECK;

if(cc){if(!cl&&cc===cf.TARGET_DOMNODE){continue;
}else if(!ce&&cc===cf.TARGET_WINDOW){continue;
}else if(!cm&&cc===cf.TARGET_OBJECT){continue;
}}ci=this.getHandler(cj[i]);

if(ch.IGNORE_CAN_HANDLE||ci.canHandleEvent(ca,cb)){cg[ck]=ci;
return ci;
}}return null;
},__bw:function(cp,cq,cr){var cs=this.findHandler(cp,cq);

if(cs){cs.registerEvent(cp,cq,cr);
return;
}
if(qx.core.Variant.isSet(bh,bg)){qx.log.Logger.warn(this,"There is no event handler for the event '"+cq+"' on target '"+cp+"'!");
}},removeListener:function(a,b,c,self,d){if(qx.core.Variant.isSet(bh,bg)){var h=bi+b+bb+bE+a.classname+bc;
qx.core.Assert.assertObject(a,h+X);
qx.core.Assert.assertString(b,h+bG);
qx.core.Assert.assertFunction(c,h+bD);

if(self!==undefined){qx.core.Assert.assertObject(self,bA);
}
if(d!==undefined){qx.core.Assert.assertBoolean(d,bj);
}}var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__bq[j];

if(!k){return false;
}var e=b+(d?be:bf);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__bx(a,b,d);
}return true;
}}return false;
},removeListenerById:function(cv,cw){if(qx.core.Variant.isSet(bh,bg)){var cC=bB+cw+bb+bE+cv.classname+bc;
qx.core.Assert.assertObject(cv,cC+X);
qx.core.Assert.assertString(cw,cC+bt);
}var cA=cw.split(bd);
var cF=cA[0];
var cx=cA[1].charCodeAt(0)==99;
var cE=cA[2];
var cD=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cG=this.__bq[cD];

if(!cG){return false;
}var cB=cF+(cx?be:bf);
var cz=cG[cB];

if(!cz){return false;
}var cy;

for(var i=0,l=cz.length;i<l;i++){cy=cz[i];

if(cy.unique===cE){qx.lang.Array.removeAt(cz,i);

if(cz.length==0){this.__bx(cv,cF,cx);
}return true;
}}return false;
},removeAllListeners:function(r){var v=r.$$hash||qx.core.ObjectRegistry.toHashCode(r);
var x=this.__bq[v];

if(!x){return false;
}var t,w,s;

for(var u in x){if(x[u].length>0){t=u.split(bd);
w=t[0];
s=t[1]===bo;
this.__bx(r,w,s);
}}delete this.__bq[v];
return true;
},deleteAllListeners:function(m){delete this.__bq[m];
},__bx:function(n,o,p){var q=this.findHandler(n,o);

if(q){q.unregisterEvent(n,o,p);
return;
}
if(qx.core.Variant.isSet(bh,bg)){qx.log.Logger.warn(this,"There is no event handler for the event '"+o+"' on target '"+n+"'!");
}},dispatchEvent:function(cT,event){if(qx.core.Variant.isSet(bh,bg)){var cY=bm+event+bs+cT.classname+bc;
qx.core.Assert.assertNotUndefined(cT,cY+bF);
qx.core.Assert.assertNotNull(cT,cY+bF);
qx.core.Assert.assertInstance(event,qx.event.type.Event,cY+bu);
}var da=event.getType();

if(!event.getBubbles()&&!this.hasListener(cT,da)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cT);
}var cX=this.__bp.getDispatchers();
var cW;
var cV=false;

for(var i=0,l=cX.length;i<l;i++){cW=this.getDispatcher(cX[i]);
if(cW.canDispatchEvent(cT,event,da)){cW.dispatchEvent(cT,event,da);
cV=true;
break;
}}
if(!cV){if(qx.core.Variant.isSet(bh,bg)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+da+" on "+cT);
}return true;
}var cU=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cU;
},dispose:function(){this.__bp.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bq);
qx.util.DisposeUtil.disposeMap(this,bw);
this.__bq=this.__bn=this.__bv=null;
this.__bp=this.__bt=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Class.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(m){return m.nodeType===
this.DOCUMENT?m:
m.ownerDocument||m.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(l){if(l.nodeType==null){return l;
}if(l.nodeType!==this.DOCUMENT){l=l.ownerDocument;
}return l.parentWindow;
},"default":function(o){if(o.nodeType==null){return o;
}if(o.nodeType!==this.DOCUMENT){o=o.ownerDocument;
}return o.defaultView;
}}),getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(d){return this.getDocument(d).body;
},isNode:function(f){return !!(f&&f.nodeType!=null);
},isElement:function(e){return !!(e&&e.nodeType===this.ELEMENT);
},isDocument:function(g){return !!(g&&g.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(n){return !!(n&&n.history&&n.location&&n.document);
},isNodeName:function(b,c){if(!c||!b||!b.nodeName){return false;
}return c.toLowerCase()==qx.dom.Node.getName(b);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(h);
case 2:return s.nodeValue;
break;
case 3:return s.nodeValue;
break;
}return null;
}}});
})();
(function(){var Q="qx.debug",P="on",O="The second parameter must be an array.",N="mshtml",M="The first parameter must be an array.",L="Parameter must be an array.",K="qx.client",J="[object Array]",I="qx.lang.Array",H="qx",F="number",G="string";
qx.Class.define(I,{statics:{toArray:function(D,E){return this.cast(D,Array,E);
},cast:function(r,s,t){if(r.constructor===s){return r;
}
if(qx.Class.hasInterface(r,qx.data.IListData)){var r=r.toArray();
}var u=new s;
if(qx.core.Variant.isSet(K,N)){if(r.item){for(var i=t||0,l=r.length;i<l;i++){u.push(r[i]);
}return u;
}}if(Object.prototype.toString.call(r)===J&&t==null){u.push.apply(u,r);
}else{u.push.apply(u,Array.prototype.slice.call(r,t||0));
}return u;
},fromArguments:function(bu,bv){return Array.prototype.slice.call(bu,bv||0);
},fromCollection:function(bd){if(qx.core.Variant.isSet(K,N)){if(bd.item){var be=[];

for(var i=0,l=bd.length;i<l;i++){be[i]=bd[i];
}return be;
}}return Array.prototype.slice.call(bd,0);
},fromShortHand:function(ba){var bc=ba.length;
var bb=qx.lang.Array.clone(ba);
switch(bc){case 1:bb[1]=bb[2]=bb[3]=bb[0];
break;
case 2:bb[2]=bb[0];
case 3:bb[3]=bb[1];
}return bb;
},clone:function(x){return x.concat();
},insertAt:function(c,d,i){c.splice(i,0,d);
return c;
},insertBefore:function(o,p,q){var i=o.indexOf(q);

if(i==-1){o.push(p);
}else{o.splice(i,0,p);
}return o;
},insertAfter:function(y,z,A){var i=y.indexOf(A);

if(i==-1||i==(y.length-1)){y.push(z);
}else{y.splice(i+1,0,z);
}return y;
},removeAt:function(W,i){return W.splice(i,1)[0];
},removeAll:function(Y){Y.length=0;
return this;
},append:function(bf,bg){if(qx.core.Variant.isSet(Q,P)){qx.core.Assert&&qx.core.Assert.assertArray(bf,M);
qx.core.Assert&&qx.core.Assert.assertArray(bg,O);
}Array.prototype.push.apply(bf,bg);
return bf;
},exclude:function(R,S){if(qx.core.Variant.isSet(Q,P)){qx.core.Assert&&qx.core.Assert.assertArray(R,M);
qx.core.Assert&&qx.core.Assert.assertArray(S,O);
}
for(var i=0,U=S.length,T;i<U;i++){T=R.indexOf(S[i]);

if(T!=-1){R.splice(T,1);
}}return R;
},remove:function(a,b){var i=a.indexOf(b);

if(i!=-1){a.splice(i,1);
return b;
}},contains:function(v,w){return v.indexOf(w)!==-1;
},equals:function(B,C){var length=B.length;

if(length!==C.length){return false;
}
for(var i=0;i<length;i++){if(B[i]!==C[i]){return false;
}}return true;
},sum:function(m){var n=0;

for(var i=0,l=m.length;i<l;i++){n+=m[i];
}return n;
},max:function(e){if(qx.core.Variant.isSet(Q,P)){qx.core.Assert&&qx.core.Assert.assertArray(e,L);
}var i,g=e.length,f=e[0];

for(i=1;i<g;i++){if(e[i]>f){f=e[i];
}}return f===undefined?null:f;
},min:function(h){if(qx.core.Variant.isSet(Q,P)){qx.core.Assert&&qx.core.Assert.assertArray(h,L);
}var i,k=h.length,j=h[0];

for(i=1;i<k;i++){if(h[i]<j){j=h[i];
}}return j===undefined?null:j;
},unique:function(bh){var br=[],bj={},bm={},bo={};
var bn,bi=0;
var bs=H+qx.lang.Date.now();
var bk=false,bq=false,bt=false;
for(var i=0,bp=bh.length;i<bp;i++){bn=bh[i];
if(bn===null){if(!bk){bk=true;
br.push(bn);
}}else if(bn===undefined){}else if(bn===false){if(!bq){bq=true;
br.push(bn);
}}else if(bn===true){if(!bt){bt=true;
br.push(bn);
}}else if(typeof bn===G){if(!bj[bn]){bj[bn]=1;
br.push(bn);
}}else if(typeof bn===F){if(!bm[bn]){bm[bn]=1;
br.push(bn);
}}else{bl=bn[bs];

if(bl==null){bl=bn[bs]=bi++;
}
if(!bo[bl]){bo[bl]=bn;
br.push(bn);
}}}for(var bl in bo){try{delete bo[bl][bs];
}catch(X){try{bo[bl][bs]=null;
}catch(V){throw new Error("Cannot clean-up map entry doneObjects["+bl+"]["+bs+"]");
}}}return br;
}}});
})();
(function(){var k="()",j="qx.debug",i=".",h=".prototype.",g="on",f="Invalid parameter 'func'.",e='anonymous()',d="Trying to call a bound function with a disposed object as context: ",c=" :: ",b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(M){return M.caller?M.caller.callee:M.callee.caller;
},getName:function(w){if(w.displayName){return w.displayName;
}
if(w.$$original||w.wrapper||w.classname){return w.classname+a;
}
if(w.$$mixin){for(var y in w.$$mixin.$$members){if(w.$$mixin.$$members[y]==w){return w.$$mixin.name+h+y+k;
}}for(var y in w.$$mixin){if(w.$$mixin[y]==w){return w.$$mixin.name+i+y+k;
}}}
if(w.self){var z=w.self.constructor;

if(z){for(var y in z.prototype){if(z.prototype[y]==w){return z.classname+h+y+k;
}}for(var y in z){if(z[y]==w){return z.classname+i+y+k;
}}}}var x=w.toString().match(/function\s*(\w*)\s*\(.*/);

if(x&&x.length>=1&&x[1]){return x[1]+k;
}return e;
},globalEval:function(J){if(window.execScript){return window.execScript(J);
}else{return eval.call(window,J);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(E,F){if(qx.core.Variant.isSet(j,g)){qx.core.Assert&&qx.core.Assert.assertFunction(E,f);
}if(!F){return E;
}if(!(F.self||F.args||F.delay!=null||F.periodical!=null||F.attempt)){return E;
}return function(event){if(qx.core.Variant.isSet(j,g)){if(F.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(F.self.isDisposed(),d+F.self.toString()+c+qx.lang.Function.getName(E));
}}var m=qx.lang.Array.fromArguments(arguments);
if(F.args){m=F.args.concat(m);
}
if(F.delay||F.periodical){var l=qx.event.GlobalError.observeMethod(function(){return E.apply(F.self||this,m);
});

if(F.delay){return window.setTimeout(l,F.delay);
}
if(F.periodical){return window.setInterval(l,F.periodical);
}}else if(F.attempt){var n=false;

try{n=E.apply(F.self||this,m);
}catch(o){}return n;
}else{return E.apply(F.self||this,m);
}};
},bind:function(C,self,D){return this.create(C,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(K,L){return this.create(K,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(p,self,q){if(arguments.length<3){return function(event){return p.call(self||this,event||window.event);
};
}else{var r=qx.lang.Array.fromArguments(arguments,2);
return function(event){var v=[event||window.event];
v.push.apply(v,r);
p.apply(self||this,v);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(s,t,self,u){return this.create(s,{delay:t,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(G,H,self,I){return this.create(G,{periodical:H,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var w="qx.debug",v="on",u="Invalid event target.",t="Invalid event dispatcher!",s="': ",r="Invalid event handler.",q="' on target '",p="Could not fire event '",o="undefined",n="qx.event.Registration";
qx.Class.define(n,{statics:{__by:{},getManager:function(x){if(x==null){if(qx.core.Variant.isSet(w,v)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}x=window;
}else if(x.nodeType){x=qx.dom.Node.getWindow(x);
}else if(!qx.dom.Node.isWindow(x)){x=window;
}var z=x.$$hash||qx.core.ObjectRegistry.toHashCode(x);
var y=this.__by[z];

if(!y){y=new qx.event.Manager(x,this);
this.__by[z]=y;
}return y;
},removeManager:function(i){var j=i.getWindowId();
delete this.__by[j];
},addListener:function(Y,ba,bb,self,bc){return this.getManager(Y).addListener(Y,ba,bb,self,bc);
},removeListener:function(A,B,C,self,D){return this.getManager(A).removeListener(A,B,C,self,D);
},removeListenerById:function(f,g){return this.getManager(f).removeListenerById(f,g);
},removeAllListeners:function(E){return this.getManager(E).removeAllListeners(E);
},deleteAllListeners:function(F){var G=F.$$hash;

if(G){this.getManager(F).deleteAllListeners(G);
}},hasListener:function(k,l,m){return this.getManager(k).hasListener(k,l,m);
},serializeListeners:function(N){return this.getManager(N).serializeListeners(N);
},createEvent:function(O,P,Q){if(qx.core.Variant.isSet(w,v)){if(arguments.length>1&&P===undefined){throw new Error("Create event of type "+O+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(P==null){P=qx.event.type.Event;
}var R=qx.event.Pool.getInstance().getObject(P);
Q?R.init.apply(R,Q):R.init();
if(O){R.setType(O);
}return R;
},dispatchEvent:function(h,event){return this.getManager(h).dispatchEvent(h,event);
},fireEvent:function(S,T,U,V){if(qx.core.Variant.isSet(w,v)){if(arguments.length>2&&U===undefined&&V!==undefined){throw new Error("Create event of type "+T+" with undefined class. Please use null to explicit fallback to default event type!");
}var W=p+T+q+(S?S.classname:o)+s;
qx.core.Assert.assertNotUndefined(S,W+u);
qx.core.Assert.assertNotNull(S,W+u);
}var X=this.createEvent(T,U||null,V);
return this.getManager(S).dispatchEvent(S,X);
},fireNonBubblingEvent:function(H,I,J,K){if(qx.core.Variant.isSet(w,v)){if(arguments.length>2&&J===undefined&&K!==undefined){throw new Error("Create event of type "+I+" with undefined class. Please use null to explicit fallback to default event type!");
}}var L=this.getManager(H);

if(!L.hasListener(H,I,false)){return true;
}var M=this.createEvent(I,J||null,K);
return L.dispatchEvent(H,M);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bz:[],addHandler:function(e){if(qx.core.Variant.isSet(w,v)){qx.core.Assert.assertInterface(e,qx.event.IEventHandler,r);
}this.__bz.push(e);
this.__bz.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bz;
},__bA:[],addDispatcher:function(c,d){if(qx.core.Variant.isSet(w,v)){qx.core.Assert.assertInterface(c,qx.event.IEventDispatcher,t);
}this.__bA.push(c);
this.__bA.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bA;
}}});
})();
(function(){var n="on",m="qx.debug",k="$$hash",j="",h="qx.core.ObjectRegistry";
qx.Class.define(h,{statics:{inShutDown:false,__bc:{},__bd:0,__be:[],register:function(z){var C=this.__bc;

if(!C){return;
}var B=z.$$hash;

if(B==null){var A=this.__be;

if(A.length>0){B=A.pop();
}else{B=(this.__bd++)+j;
}z.$$hash=B;
}
if(qx.core.Variant.isSet(m,n)){if(!z.dispose){throw new Error("Invalid object: "+z);
}}C[B]=z;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__bc;

if(s&&s[r]){delete s[r];
this.__be.push(r);
}try{delete q.$$hash;
}catch(p){if(q.removeAttribute){q.removeAttribute(k);
}}},toHashCode:function(c){if(qx.core.Variant.isSet(m,n)){if(c==null){throw new Error("Invalid object: "+c);
}}var e=c.$$hash;

if(e!=null){return e;
}var d=this.__be;

if(d.length>0){e=d.pop();
}else{e=(this.__bd++)+j;
}return c.$$hash=e;
},clearHashCode:function(t){if(qx.core.Variant.isSet(m,n)){if(t==null){throw new Error("Invalid object: "+t);
}}var u=t.$$hash;

if(u!=null){this.__be.push(u);
try{delete t.$$hash;
}catch(f){if(t.removeAttribute){t.removeAttribute(k);
}}}},fromHashCode:function(g){return this.__bc[g]||null;
},shutdown:function(){this.inShutDown=true;
var w=this.__bc;
var y=[];

for(var x in w){y.push(x);
}y.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var v,i=0,l=y.length;

while(true){try{for(;i<l;i++){x=y[i];
v=w[x];

if(v&&v.dispose){v.dispose();
}}}catch(o){qx.Bootstrap.error(this,"Could not dispose object "+v.toString()+": "+o);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bc;
},getRegistry:function(){return this.__bc;
}}});
})();
(function(){var h="qx.lang.Type",g="Error",f="RegExp",e="Date",d="Number",c="Boolean";
qx.Class.define(h,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==f;
},isNumber:function(b){return (b!==null&&(this.getClass(b)==d||b instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Boolean));
},isDate:function(a){return (a!==null&&(this.getClass(a)==e||a instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==g||j instanceof Error));
}}});
})();
(function(){var D="",C="!",B="'!",A="'",z="Expected '",y="' (rgb(",x=",",w=")), but found value '",v="Event (",u="Expected value to be the CSS color '",bJ="' but found ",bI="The value '",bH="qx.core.Object",bG="Expected value to be an array but found ",bF=") was fired.",bE="Expected value to be an integer >= 0 but found ",bD="' to be not equal with '",bC="' to '",bB="qx.ui.core.Widget",bA="Called assertTrue with '",K="Expected value to be a map but found ",L="The function did not raise an exception!",I="Expected value to be undefined but found ",J="Expected value to be a DOM element but found  '",G="Expected value to be a regular expression but found ",H="' to implement the interface '",E="Expected value to be null but found ",F="Invalid argument 'type'",S="Called assert with 'false'",T="Assertion error! ",bg="Expected value to be a string but found ",bc="null",bo="' but found '",bj="' must must be a key of the map '",bw="The String '",bt="Expected value not to be undefined but found ",X="qx.util.ColorUtil",bz=": ",by="The raised exception does not have the expected type! ",bx=") not fired.",W="qx.core.Assert",ba="Expected value to be typeof object but found ",bb="' (identical) but found '",be="' must have any of the values defined in the array '",bh="Expected value to be a number but found ",bk="Called assertFalse with '",bq="]",bv="Expected value to be a qooxdoo object but found ",M="' arguments.",N="Expected value not to be null but found ",Y="Array[",bn="' does not match the regular expression '",bm="' to be not identical with '",bl="' arguments but found '",bs="', which cannot be converted to a CSS color!",br="Expected object '",bi="qx.core.AssertionError",bp="Expected value to be a boolean but found ",r="))!",bu="Expected value to be a qooxdoo widget but found ",O="Expected value '%1' to be in the range '%2'..'%3'!",P="Expected value to be typeof '",bd="Expected value to be typeof function but found ",s="Expected value to be an integer but found ",t="Called fail().",V="The parameter 're' must be a string or a regular expression.",Q="Expected value to be a number >= 0 but found ",R="Expected value to be instanceof '",U="Wrong number of arguments given. Expected '",bf="object";
qx.Class.define(W,{statics:{__pd:true,__pe:function(cx,cy){var cz=D;

for(var i=1,l=arguments.length;i<l;i++){cz=cz+this.__pf(arguments[i]);
}var cB=T+cx+bz+cz;

if(this.__pd){qx.Bootstrap.error(cB);
}
if(qx.Class.isDefined(bi)){var cA=new qx.core.AssertionError(cx,cz);

if(this.__pd){qx.Bootstrap.error("Stack trace: \n"+cA.getStackTrace());
}throw cA;
}else{throw new Error(cB);
}},__pf:function(c){var d;

if(c===null){d=bc;
}else if(qx.lang.Type.isArray(c)&&c.length>10){d=Y+c.length+bq;
}else if((c instanceof Object)&&(c.toString==null)){d=qx.lang.Json.stringify(c,null,2);
}else{try{d=c.toString();
}catch(e){d=D;
}}return d;
},assert:function(cT,cU){cT==true||this.__pe(cU||D,S);
},fail:function(bN){this.__pe(bN||D,t);
},assertTrue:function(cp,cq){(cp===true)||this.__pe(cq||D,bA,cp,A);
},assertFalse:function(dL,dM){(dL===false)||this.__pe(dM||D,bk,dL,A);
},assertEquals:function(dB,dC,dD){dB==dC||this.__pe(dD||D,z,dB,bo,dC,B);
},assertNotEquals:function(dn,dp,dq){dn!=dp||this.__pe(dq||D,z,dn,bD,dp,B);
},assertIdentical:function(cV,cW,cX){cV===cW||this.__pe(cX||D,z,cV,bb,cW,B);
},assertNotIdentical:function(cg,ch,ci){cg!==ch||this.__pe(ci||D,z,cg,bm,ch,B);
},assertNotUndefined:function(dN,dO){dN!==undefined||this.__pe(dO||D,bt,dN,C);
},assertUndefined:function(dt,du){dt===undefined||this.__pe(du||D,I,dt,C);
},assertNotNull:function(cc,cd){cc!==null||this.__pe(cd||D,N,cc,C);
},assertNull:function(dd,de){dd===null||this.__pe(de||D,E,dd,C);
},assertJsonEquals:function(bK,bL,bM){this.assertEquals(qx.lang.Json.stringify(bK),qx.lang.Json.stringify(bL),bM);
},assertMatch:function(cm,cn,co){this.assertString(cm);
this.assert(qx.lang.Type.isRegExp(cn)||qx.lang.Type.isString(cn),V);
cm.search(cn)>=0||this.__pe(co||D,bw,cm,bn,cn.toString(),B);
},assertArgumentsCount:function(j,k,m,n){var o=j.length;
(o>=k&&o<=m)||this.__pe(n||D,U,k,bC,m,bl,arguments.length,M);
},assertEventFired:function(dE,event,dF,dG,dH){var dJ=false;
var dI=function(e){if(dG){dG.call(dE,e);
}dJ=true;
};
var dK=dE.addListener(event,dI,dE);
dF.call();
dJ===true||this.__pe(dH||D,v,event,bx);
dE.removeListenerById(dK);
},assertEventNotFired:function(bV,event,bW,bX){var ca=false;
var bY=function(e){ca=true;
};
var cb=bV.addListener(event,bY,bV);
bW.call();
ca===false||this.__pe(bX||D,v,event,bF);
bV.removeListenerById(cb);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__pd=false;
cM();
}catch(dx){cQ=dx;
}finally{this.__pd=true;
}
if(cQ==null){this.__pe(cP||D,L);
}cQ instanceof cN||this.__pe(cP||D,by,cN);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cr,cs,ct){cs.indexOf(cr)!==-1||this.__pe(ct||D,bI,cr,be,cs,A);
},assertArrayEquals:function(f,g,h){this.assertArray(f,h);
this.assertArray(g,h);
this.assertEquals(f.length,g.length,h);

for(var i=0;i<f.length;i++){this.assertIdentical(f[i],g[i],h);
}},assertKeyInMap:function(cJ,cK,cL){cK[cJ]!==undefined||this.__pe(cL||D,bI,cJ,bj,cK,A);
},assertFunction:function(dl,dm){qx.lang.Type.isFunction(dl)||this.__pe(dm||D,bd,dl,C);
},assertString:function(cH,cI){qx.lang.Type.isString(cH)||this.__pe(cI||D,bg,cH,C);
},assertBoolean:function(a,b){qx.lang.Type.isBoolean(a)||this.__pe(b||D,bp,a,C);
},assertNumber:function(dr,ds){(qx.lang.Type.isNumber(dr)&&isFinite(dr))||this.__pe(ds||D,bh,dr,C);
},assertPositiveNumber:function(dj,dk){(qx.lang.Type.isNumber(dj)&&isFinite(dj)&&dj>=0)||this.__pe(dk||D,Q,dj,C);
},assertInteger:function(ce,cf){(qx.lang.Type.isNumber(ce)&&isFinite(ce)&&ce%1===0)||this.__pe(cf||D,s,ce,C);
},assertPositiveInteger:function(dy,dz){var dA=(qx.lang.Type.isNumber(dy)&&isFinite(dy)&&dy%1===0&&dy>=0);
dA||this.__pe(dz||D,bE,dy,C);
},assertInRange:function(df,dg,dh,di){(df>=dg&&df<=dh)||this.__pe(di||D,qx.lang.String.format(O,[df,dg,dh]));
},assertObject:function(dS,dT){var dU=dS!==null&&(qx.lang.Type.isObject(dS)||typeof dS===bf);
dU||this.__pe(dT||D,ba,(dS),C);
},assertArray:function(cR,cS){qx.lang.Type.isArray(cR)||this.__pe(cS||D,bG,cR,C);
},assertMap:function(dV,dW){qx.lang.Type.isObject(dV)||this.__pe(dW||D,K,dV,C);
},assertRegExp:function(cC,cD){qx.lang.Type.isRegExp(cC)||this.__pe(cD||D,G,cC,C);
},assertType:function(cu,cv,cw){this.assertString(cv,F);
typeof (cu)===cv||this.__pe(cw||D,P,cv,bJ,cu,C);
},assertInstance:function(cY,da,db){var dc=da.classname||da+D;
cY instanceof da||this.__pe(db||D,R,dc,bJ,cY,C);
},assertInterface:function(cj,ck,cl){qx.Class.implementsInterface(cj,ck)||this.__pe(cl||D,br,cj,H,ck,B);
},assertCssColor:function(bO,bP,bQ){var bR=qx.Class.getByName(X);

if(!bR){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var bT=bR.stringToRgb(bO);

try{var bS=bR.stringToRgb(bP);
}catch(cG){this.__pe(bQ||D,u,bO,y,bT.join(x),w,bP,bs);
}var bU=bT[0]==bS[0]&&bT[1]==bS[1]&&bT[2]==bS[2];
bU||this.__pe(bQ||D,u,bT,y,bT.join(x),w,bP,y,bS.join(x),r);
},assertElement:function(cE,cF){!!(cE&&cE.nodeType===1)||this.__pe(cF||D,J,cE,B);
},assertQxObject:function(p,q){this.__pg(p,bH)||this.__pe(q||D,bv,p,C);
},assertQxWidget:function(dv,dw){this.__pg(dv,bB)||this.__pe(dw||D,bu,dv,C);
},__pg:function(dP,dQ){if(!dP){return false;
}var dR=dP.constructor;

while(dR){if(dR.classname===dQ){return true;
}dR=dR.superclass;
}return false;
}}});
})();
(function(){var bE="qx.core.MAssert";
qx.Mixin.define(bE,{members:{assert:function(q,r){qx.core.Assert.assert(q,r);
},fail:function(M){qx.core.Assert.fail(M);
},assertTrue:function(bJ,bK){qx.core.Assert.assertTrue(bJ,bK);
},assertFalse:function(C,D){qx.core.Assert.assertFalse(C,D);
},assertEquals:function(bs,bt,bu){qx.core.Assert.assertEquals(bs,bt,bu);
},assertNotEquals:function(bP,bQ,bR){qx.core.Assert.assertNotEquals(bP,bQ,bR);
},assertIdentical:function(w,x,y){qx.core.Assert.assertIdentical(w,x,y);
},assertNotIdentical:function(R,S,T){qx.core.Assert.assertNotIdentical(R,S,T);
},assertNotUndefined:function(bN,bO){qx.core.Assert.assertNotUndefined(bN,bO);
},assertUndefined:function(bL,bM){qx.core.Assert.assertUndefined(bL,bM);
},assertNotNull:function(h,i){qx.core.Assert.assertNotNull(h,i);
},assertNull:function(bv,bw){qx.core.Assert.assertNull(bv,bw);
},assertJsonEquals:function(E,F,G){qx.core.Assert.assertJsonEquals(E,F,G);
},assertMatch:function(j,k,l){qx.core.Assert.assertMatch(j,k,l);
},assertArgumentsCount:function(bi,bj,bk,bl){qx.core.Assert.assertArgumentsCount(bi,bj,bk,bl);
},assertEventFired:function(s,event,t,u,v){qx.core.Assert.assertEventFired(s,event,t,u,v);
},assertEventNotFired:function(bU,event,bV,bW){qx.core.Assert.assertEventNotFired(bU,event,bV,bW);
},assertException:function(bm,bn,bo,bp){qx.core.Assert.assertException(bm,bn,bo,bp);
},assertInArray:function(H,I,J){qx.core.Assert.assertInArray(H,I,J);
},assertArrayEquals:function(e,f,g){qx.core.Assert.assertArrayEquals(e,f,g);
},assertKeyInMap:function(bf,bg,bh){qx.core.Assert.assertKeyInMap(bf,bg,bh);
},assertFunction:function(P,Q){qx.core.Assert.assertFunction(P,Q);
},assertString:function(o,p){qx.core.Assert.assertString(o,p);
},assertBoolean:function(bx,by){qx.core.Assert.assertBoolean(bx,by);
},assertNumber:function(N,O){qx.core.Assert.assertNumber(N,O);
},assertPositiveNumber:function(m,n){qx.core.Assert.assertPositiveNumber(m,n);
},assertInteger:function(bF,bG){qx.core.Assert.assertInteger(bF,bG);
},assertPositiveInteger:function(K,L){qx.core.Assert.assertPositiveInteger(K,L);
},assertInRange:function(U,V,W,X){qx.core.Assert.assertInRange(U,V,W,X);
},assertObject:function(bS,bT){qx.core.Assert.assertObject(bS,bT);
},assertArray:function(a,b){qx.core.Assert.assertArray(a,b);
},assertMap:function(bq,br){qx.core.Assert.assertMap(bq,br);
},assertRegExp:function(bX,bY){qx.core.Assert.assertRegExp(bX,bY);
},assertType:function(bc,bd,be){qx.core.Assert.assertType(bc,bd,be);
},assertInstance:function(Y,ba,bb){qx.core.Assert.assertInstance(Y,ba,bb);
},assertInterface:function(z,A,B){qx.core.Assert.assertInterface(z,A,B);
},assertCssColor:function(bz,bA,bB){qx.core.Assert.assertCssColor(bz,bA,bB);
},assertElement:function(bC,bD){qx.core.Assert.assertElement(bC,bD);
},assertQxObject:function(c,d){qx.core.Assert.assertQxObject(c,d);
},assertQxWidget:function(bH,bI){qx.core.Assert.assertQxWidget(bH,bI);
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var F=":",E="qx.client",D="anonymous",C="...",B="qx.dev.StackTrace",A="",z="\n",y="/source/class/",x=".";
qx.Class.define(B,{statics:{getStackTrace:qx.core.Variant.select(E,{"gecko":function(){try{throw new Error();
}catch(V){var P=this.getStackTraceFromError(V);
qx.lang.Array.removeAt(P,0);
var N=this.getStackTraceFromCaller(arguments);
var L=N.length>P.length?N:P;

for(var i=0;i<Math.min(N.length,P.length);i++){var M=N[i];

if(M.indexOf(D)>=0){continue;
}var T=M.split(F);

if(T.length!=2){continue;
}var R=T[0];
var K=T[1];
var J=P[i];
var U=J.split(F);
var Q=U[0];
var I=U[1];

if(qx.Class.getByName(Q)){var O=Q;
}else{O=R;
}var S=O+F;

if(K){S+=K+F;
}S+=I;
L[i]=S;
}return L;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var G;

try{G.bar();
}catch(j){var H=this.getStackTraceFromError(j);
qx.lang.Array.removeAt(H,0);
return H;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(E,{"opera":function(a){return [];
},"default":function(k){var p=[];
var o=qx.lang.Function.getCaller(k);
var l={};

while(o){var m=qx.lang.Function.getName(o);
p.push(m);

try{o=o.caller;
}catch(bc){break;
}
if(!o){break;
}var n=qx.core.ObjectRegistry.toHashCode(o);

if(l[n]){p.push(C);
break;
}l[n]=o;
}return p;
}}),getStackTraceFromError:qx.core.Variant.select(E,{"gecko":function(q){if(!q.stack){return [];
}var w=/@(.+):(\d+)$/gm;
var r;
var s=[];

while((r=w.exec(q.stack))!=null){var t=r[1];
var v=r[2];
var u=this.__bB(t);
s.push(u+F+v);
}return s;
},"webkit":function(bb){if(bb.sourceURL&&bb.line){return [this.__bB(bb.sourceURL)+F+bb.line];
}else{return [];
}},"opera":function(b){if(b.message.indexOf("Backtrace:")<0){return [];
}var d=[];
var e=qx.lang.String.trim(b.message.split("Backtrace:")[1]);
var f=e.split(z);

for(var i=0;i<f.length;i++){var c=f[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(c&&c.length>=2){var h=c[1];
var g=this.__bB(c[2]);
d.push(g+F+h);
}}return d;
},"default":function(){return [];
}}),__bB:function(W){var ba=y;
var X=W.indexOf(ba);
var Y=(X==-1)?W:W.substring(X+ba.length).replace(/\//g,x).replace(/\.js$/,A);
return Y;
}}});
})();
(function(){var b="qx.log.appender.RingBuffer";
qx.Class.define(b,{extend:Object,construct:function(a){this.__bC=[];
this.setMaxMessages(a||50);
},members:{__bD:0,__bC:null,__bE:50,setMaxMessages:function(i){this.__bE=i;
this.clearHistory();
},getMaxMessages:function(){return this.__bE;
},process:function(g){var h=this.getMaxMessages();

if(this.__bC.length<h){this.__bC.push(g);
}else{this.__bC[this.__bD++]=g;

if(this.__bD>=h){this.__bD=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bC.length){c=this.__bC.length;
}
if(this.__bC.length==this.getMaxMessages()){var e=this.__bD-1;
}else{e=this.__bC.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bC.length;
}var f;

if(d<=e){f=this.__bC.slice(d,e+1);
}else{f=this.__bC.slice(d,this.__bC.length).concat(this.__bC.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bC=[];
this.__bD=0;
}}});
})();
(function(){var B="qx.debug",A="on",z="unknown",y="node",x="error",w="...(+",v="array",u=")",t="info",s="instance",Y="string",X="null",W="class",V="number",U="stringify",T="]",S="function",R="boolean",Q="debug",P="map",I="undefined",J="qx.log.Logger",G=")}",H="#",E="warn",F="document",C="{...(",D="[",K="text[",L="[...(",N="\n",M=")]",O="object";
qx.Class.define(J,{statics:{__bF:Q,setLevel:function(bv){this.__bF=bv;
},getLevel:function(){return this.__bF;
},setTreshold:function(m){this.__bI.setMaxMessages(m);
},getTreshold:function(){return this.__bI.getMaxMessages();
},__bG:{},__bH:0,register:function(p){if(p.$$id){return;
}var q=this.__bH++;
this.__bG[q]=p;
p.$$id=q;
var r=this.__bI.getAllLogEvents();

for(var i=0,l=r.length;i<l;i++){p.process(r[i]);
}},unregister:function(d){var e=d.$$id;

if(e==null){return;
}delete this.__bG[e];
delete d.$$id;
},debug:function(bG,bH){qx.log.Logger.__bK(Q,arguments);
},info:function(f,g){qx.log.Logger.__bK(t,arguments);
},warn:function(br,bs){qx.log.Logger.__bK(E,arguments);
},error:function(bt,bu){qx.log.Logger.__bK(x,arguments);
},trace:function(bw){qx.log.Logger.__bK(t,[bw,qx.dev.StackTrace.getStackTrace().join(N)]);
},deprecatedMethodWarning:function(ba,bb){if(qx.core.Variant.isSet(B,A)){var bc=qx.lang.Function.getName(ba);
this.warn("The method '"+bc+"' is deprecated: "+(bb||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(h,j){if(qx.core.Variant.isSet(B,A)){var k=h.classname||z;
this.warn("The class '"+k+"' is deprecated: "+(j||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(a,event,b){if(qx.core.Variant.isSet(B,A)){var c=a.self?a.self.classname:z;
this.warn("The event '"+(event||"unknown")+"' from class '"+c+"' is deprecated: "+(b||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(bd,be){if(qx.core.Variant.isSet(B,A)){var bf=bd?bd.name:z;
this.warn("The mixin '"+bf+"' is deprecated: "+(be||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(bC,bD,bE){if(qx.core.Variant.isSet(B,A)){if(bC.__defineGetter__){var self=this;
var bF=bC[bD];
bC.__defineGetter__(bD,function(){self.warn("The constant '"+bD+"' is deprecated: "+(bE||"Please consult the API documentation for alternatives."));
self.trace();
return bF;
});
}}},deprecateMethodOverriding:function(bx,by,bz,bA){if(qx.core.Variant.isSet(B,A)){var bB=bx.constructor;

while(bB.classname!==by.classname){if(bB.prototype.hasOwnProperty(bz)){this.warn("The method '"+qx.lang.Function.getName(bx[bz])+"' overrides a deprecated method: "+(bA||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bB=bB.superclass;
}}},clear:function(){this.__bI.clearHistory();
},__bI:new qx.log.appender.RingBuffer(50),__bJ:{debug:0,info:1,warn:2,error:3},__bK:function(bI,bJ){var bO=this.__bJ;

if(bO[bI]<bO[this.__bF]){return;
}var bL=bJ.length<2?null:bJ[0];
var bN=bL?1:0;
var bK=[];

for(var i=bN,l=bJ.length;i<l;i++){bK.push(this.__bM(bJ[i],true));
}var bP=new Date;
var bQ={time:bP,offset:bP-qx.Bootstrap.LOADSTART,level:bI,items:bK,win:window};
if(bL){if(bL instanceof qx.core.Object){bQ.object=bL.$$hash;
}else if(bL.$$type){bQ.clazz=bL;
}}this.__bI.process(bQ);
var bR=this.__bG;

for(var bM in bR){bR[bM].process(bQ);
}},__bL:function(bp){if(bp===undefined){return I;
}else if(bp===null){return X;
}
if(bp.$$type){return W;
}var bq=typeof bp;

if(bq===S||bq==Y||bq===V||bq===R){return bq;
}else if(bq===O){if(bp.nodeType){return y;
}else if(bp.classname){return s;
}else if(bp instanceof Array){return v;
}else if(bp instanceof Error){return x;
}else{return P;
}}
if(bp.toString){return U;
}return z;
},__bM:function(bg,bh){var bo=this.__bL(bg);
var bk=z;
var bj=[];

switch(bo){case X:case I:bk=bo;
break;
case Y:case V:case R:bk=bg;
break;
case y:if(bg.nodeType===9){bk=F;
}else if(bg.nodeType===3){bk=K+bg.nodeValue+T;
}else if(bg.nodeType===1){bk=bg.nodeName.toLowerCase();

if(bg.id){bk+=H+bg.id;
}}else{bk=y;
}break;
case S:bk=qx.lang.Function.getName(bg)||bo;
break;
case s:bk=bg.basename+D+bg.$$hash+T;
break;
case W:case U:bk=bg.toString();
break;
case x:bj=qx.dev.StackTrace.getStackTraceFromError(bg);
bk=bg.toString();
break;
case v:if(bh){bk=[];

for(var i=0,l=bg.length;i<l;i++){if(bk.length>20){bk.push(w+(l-i)+u);
break;
}bk.push(this.__bM(bg[i],false));
}}else{bk=L+bg.length+M;
}break;
case P:if(bh){var bi;
var bn=[];

for(var bm in bg){bn.push(bm);
}bn.sort();
bk=[];

for(var i=0,l=bn.length;i<l;i++){if(bk.length>20){bk.push(w+(l-i)+u);
break;
}bm=bn[i];
bi=this.__bM(bg[bm],false);
bi.key=bm;
bk.push(bi);
}}else{var bl=0;

for(var bm in bg){bl++;
}bk=C+bl+G;
}break;
}return {type:bo,text:bk,trace:bj};
}},defer:function(n){var o=qx.Bootstrap.$$logs;

for(var i=0;i<o.length;i++){this.__bK(o[i][0],o[i][1]);
}qx.Bootstrap.debug=n.debug;
qx.Bootstrap.info=n.info;
qx.Bootstrap.warn=n.warn;
qx.Bootstrap.error=n.error;
qx.Bootstrap.trace=n.trace;
}});
})();
(function(){var D="qx.debug",C="on",B="qx.disposerDebugLevel",A="set",z="MSIE 6.0",y="rv:1.8.1",x="get",w="reset",v="qx.core.Object",u="]",r="[",t="$$user_",s="object",q="Object";
qx.Class.define(v,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:q},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+r+this.$$hash+u;
},base:function(bE,bF){if(qx.core.Variant.isSet(D,C)){if(!qx.Bootstrap.isFunction(bE.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+bE.callee.displayName);
}}
if(arguments.length===1){return bE.callee.base.call(this);
}else{return bE.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bB){return bB.callee.self;
},clone:function(){var bu=this.constructor;
var bt=new bu;
var bw=qx.Class.getProperties(bu);
var bv=qx.core.Property.$$store.user;
var bx=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bw.length;i<l;i++){name=bw[i];

if(this.hasOwnProperty(bv[name])){bt[bx[name]](this[bv[name]]);
}}return bt;
},set:function(bG,bH){var bJ=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(bG)){if(!this[bJ[bG]]){if(this[A+qx.Bootstrap.firstUp(bG)]!=undefined){this[A+qx.Bootstrap.firstUp(bG)](bH);
return;
}
if(qx.core.Variant.isSet(D,C)){qx.Bootstrap.error("No such property: "+bG);
return this;
}}return this[bJ[bG]](bH);
}else{for(var bI in bG){if(!this[bJ[bI]]){if(this[A+qx.Bootstrap.firstUp(bI)]!=undefined){this[A+qx.Bootstrap.firstUp(bI)](bG[bI]);
continue;
}
if(qx.core.Variant.isSet(D,C)){qx.Bootstrap.error("No such property: "+bI);
return this;
}}this[bJ[bI]](bG[bI]);
}return this;
}},get:function(bp){var bq=qx.core.Property.$$method.get;

if(!this[bq[bp]]){if(this[x+qx.Bootstrap.firstUp(bp)]!=undefined){return this[x+qx.Bootstrap.firstUp(bp)]();
}
if(qx.core.Variant.isSet(D,C)){qx.Bootstrap.error("No such property: "+bp);
return this;
}}return this[bq[bp]]();
},reset:function(br){var bs=qx.core.Property.$$method.reset;

if(!this[bs[br]]){if(this[w+qx.Bootstrap.firstUp(br)]!=undefined){this[w+qx.Bootstrap.firstUp(br)]();
return;
}
if(qx.core.Variant.isSet(D,C)){qx.Bootstrap.error("No such property: "+br);
return this;
}}this[bs[br]]();
},__bN:qx.event.Registration,addListener:function(J,K,self,L){if(!this.$$disposed){return this.__bN.addListener(this,J,K,self,L);
}return null;
},addListenerOnce:function(m,n,self,o){var p=function(e){n.call(self||this,e);
this.removeListener(m,p,this,o);
};
return this.addListener(m,p,this,o);
},removeListener:function(be,bf,self,bg){if(!this.$$disposed){return this.__bN.removeListener(this,be,bf,self,bg);
}return false;
},removeListenerById:function(bK){if(!this.$$disposed){return this.__bN.removeListenerById(this,bK);
}return false;
},hasListener:function(M,N){return this.__bN.hasListener(this,M,N);
},dispatchEvent:function(bC){if(!this.$$disposed){return this.__bN.dispatchEvent(this,bC);
}return true;
},fireEvent:function(Q,R,S){if(!this.$$disposed){return this.__bN.fireEvent(this,Q,R,S);
}return true;
},fireNonBubblingEvent:function(G,H,I){if(!this.$$disposed){return this.__bN.fireNonBubblingEvent(this,G,H,I);
}return true;
},fireDataEvent:function(bh,bi,bj,bk){if(!this.$$disposed){if(bj===undefined){bj=null;
}return this.__bN.fireNonBubblingEvent(this,bh,qx.event.type.Data,[bi,bj,!!bk]);
}return true;
},__bO:null,setUserData:function(O,P){if(!this.__bO){this.__bO={};
}this.__bO[O]=P;
},getUserData:function(b){if(!this.__bO){return null;
}var c=this.__bO[b];
return c===undefined?null:c;
},__bP:qx.log.Logger,debug:function(bA){this.__bP.debug(this,bA);
},info:function(bL){this.__bP.info(this,bL);
},warn:function(E){this.__bP.warn(this,E);
},error:function(bd){this.__bP.error(this,bd);
},trace:function(){this.__bP.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var g=this.constructor;
var d;

while(g.superclass){if(g.$$destructor){g.$$destructor.call(this);
}if(g.$$includes){d=g.$$flatIncludes;

for(var i=0,l=d.length;i<l;i++){if(d[i].$$destructor){d[i].$$destructor.call(this);
}}}g=g.superclass;
}if(this.__bQ){this.__bQ();
}if(qx.core.Variant.isSet(D,C)){if(qx.core.Setting.get(B)>0){var h,f;

for(h in this){f=this[h];
if(f!==null&&typeof f===s&&!(qx.Bootstrap.isString(f))){if(this.constructor.prototype[h]!=null){continue;
}var k=navigator.userAgent.indexOf(y)!=-1;
var j=navigator.userAgent.indexOf(z)!=-1;
if(k||j){if(f instanceof qx.core.Object||qx.core.Setting.get(B)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+h+"' in "+this.classname+"["+this.toHashCode()+"]: "+f);
delete this[h];
}}else{if(qx.core.Setting.get(B)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+h+"' in "+this.classname+"["+this.toHashCode()+"]: "+f);
delete this[h];
}}}}}}},__bQ:null,__bR:function(){var F=qx.Class.getProperties(this.constructor);

for(var i=0,l=F.length;i<l;i++){delete this[t+F[i]];
}},_disposeFields:function(a){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bD){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(T){qx.util.DisposeUtil.disposeArray(this,T);
},_disposeMap:function(by){qx.util.DisposeUtil.disposeMap(this,by);
}},settings:{"qx.disposerDebugLevel":0},defer:function(bl,bm){if(qx.core.Variant.isSet(D,C)){qx.Class.include(bl,qx.core.MAssert);
}var bo=navigator.userAgent.indexOf(z)!=-1;
var bn=navigator.userAgent.indexOf(y)!=-1;
if(bo||bn){bm.__bQ=bm.__bR;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__bO=null;
var W=this.constructor;
var bb;
var bc=qx.core.Property.$$store;
var Y=bc.user;
var ba=bc.theme;
var U=bc.inherit;
var X=bc.useinit;
var V=bc.init;

while(W){bb=W.$$properties;

if(bb){for(var name in bb){if(bb[name].dispose||bb[name].dereference){this[Y[name]]=this[ba[name]]=this[U[name]]=this[X[name]]=this[V[name]]=undefined;
}}}W=W.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}}});
})();
(function(){var j="qx.globalErrorHandling",i="on",h="qx.event.GlobalError";
qx.Bootstrap.define(h,{statics:{setErrorHandler:function(k,l){this.__cW=k||null;
this.__cX=l||window;

if(qx.core.Setting.get(j)===i){if(k&&window.onerror){var m=qx.Bootstrap.bind(this.__da,this);

if(this.__cY==null){this.__cY=window.onerror;
}var self=this;
window.onerror=function(e){self.__cY(e);
m(e);
};
}
if(k&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__da,this);
}if(this.__cW==null){if(this.__cY!=null){window.onerror=this.__cY;
this.__cY=null;
}else{window.onerror=null;
}}}},__da:function(b,c,d){if(this.__cW){this.handleError(new qx.core.WindowError(b,c,d));
return true;
}},observeMethod:function(g){if(qx.core.Setting.get(j)===i){var self=this;
return function(){if(!self.__cW){return g.apply(this,arguments);
}
try{return g.apply(this,arguments);
}catch(f){self.handleError(new qx.core.GlobalError(f,arguments));
}};
}else{return g;
}},handleError:function(n){if(this.__cW){this.__cW.call(this.__cX,n);
}}},defer:function(a){qx.core.Setting.define(j,i);
a.setErrorHandler(null,null);
}});
})();
(function(){var o="ready",n="qx.client",m="mshtml",l="load",k="unload",j="qx.event.handler.Application",i="complete",h="gecko|opera|webkit",g="left",f="DOMContentLoaded",d="shutdown";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(q){qx.core.Object.call(this);
this._window=q.getWindow();
this.__gJ=false;
this.__gK=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__gN();
}}},members:{canHandleEvent:function(r,s){},registerEvent:function(a,b,c){},unregisterEvent:function(w,x,y){},__gL:null,__gJ:null,__gK:null,__gM:null,__gN:function(){if(!this.__gL&&this.__gJ&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(n,m)){if(qx.event.Registration.hasListener(this._window,o)){this.__gL=true;
qx.event.Registration.fireEvent(this._window,o);
}}else{this.__gL=true;
qx.event.Registration.fireEvent(this._window,o);
}}},isApplicationReady:function(){return this.__gL;
},_initObserver:function(){if(qx.$$domReady||document.readyState==i||document.readyState==o){this.__gJ=true;
this.__gN();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(n,h)){qx.bom.Event.addNativeListener(this._window,f,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(n,m)){var self=this;
var u=function(){try{document.documentElement.doScroll(g);

if(document.body){self._onNativeLoadWrapped();
}}catch(v){window.setTimeout(u,100);
}};
u();
}qx.bom.Event.addNativeListener(this._window,l,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,k,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,k,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gJ=true;
this.__gN();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gM){this.__gM=true;

try{qx.event.Registration.fireEvent(this._window,d);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(t){qx.event.Registration.addHandler(t);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(d,f){},registerEvent:function(h,i,j){},unregisterEvent:function(r,s,t){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeWrapper);
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
},defer:function(c){qx.event.Registration.addHandler(c);
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
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(o){this._manager=o;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(m,event,n){return !event.getBubbles();
},dispatchEvent:function(e,event,f){if(qx.core.Variant.isSet(b,c)){if(e instanceof qx.core.Object){var j=qx.Class.getEventType(e.constructor,f);
var g=qx.Class.getByName(j);

if(!g){this.error("The event type '"+f+"' declared in the class '"+e.constructor+" is not an available class': "+j);
}else if(!(event instanceof g)){this.error("Expected event type to be instanceof '"+j+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(d){qx.event.Registration.addDispatcher(d);
}});
})();
(function(){var j="ready",i="qx.application",h="beforeunload",g="qx.core.Init",f="shutdown";
qx.Class.define(g,{statics:{getApplication:function(){return this.__gO||null;
},ready:function(){if(this.__gO){return;
}
if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var b=qx.core.Setting.get(i);
var c=qx.Class.getByName(b);

if(c){this.__gO=new c;
var a=new Date;
this.__gO.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-a)+"ms");
var a=new Date;
this.__gO.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-a)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+b);
}},__gP:function(e){var k=this.__gO;

if(k){e.setReturnValue(k.close());
}},__gQ:function(){var l=this.__gO;

if(l){l.terminate();
}}},defer:function(d){qx.event.Registration.addListener(window,j,d.ready,d);
qx.event.Registration.addListener(window,f,d.__gQ,d);
qx.event.Registration.addListener(window,h,d.__gP,d);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var f="qx.locale.MTranslation";
qx.Mixin.define(f,{members:{tr:function(k,l){var m=qx.locale.Manager;

if(m){return m.tr.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(a,b,c,d){var e=qx.locale.Manager;

if(e){return e.trn.apply(e,arguments);
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
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__re:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__re;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__re=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__re=null;
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
(function(){var l="qx.debug",k="on",j="Cannot stop propagation on a non bubbling event: ",i="Invalid argument value 'cancelable'.",h="Cannot prevent default action on a non cancelable event: ",g="Invalid argument value 'canBubble'.",f="qx.event.type.Event";
qx.Class.define(f,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(a,b){if(qx.core.Variant.isSet(l,k)){if(a!==undefined){qx.core.Assert.assertBoolean(a,g);
}
if(b!==undefined){qx.core.Assert.assertBoolean(b,i);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!a;
this._cancelable=!!b;
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
}},stopPropagation:function(){if(qx.core.Variant.isSet(l,k)){this.assertTrue(this._bubbles,j+this.getType());
}this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){if(qx.core.Variant.isSet(l,k)){this.assertTrue(this._cancelable,h+this.getType());
}this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(r){this._type=r;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(e){this._eventPhase=e;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(s){this._target=s;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(m){this._currentTarget=m;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(d){this._relatedTarget=d;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(c){this._originalTarget=c;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(p){this._bubbles=p;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(q){this._cancelable=q;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cF:null,__cG:null,init:function(d,e,f){qx.event.type.Event.prototype.init.call(this,false,f);
this.__cF=d;
this.__cG=e;
return this;
},clone:function(b){var c=qx.event.type.Event.prototype.clone.call(this,b);
c.__cF=this.__cF;
c.__cG=this.__cG;
return c;
},getData:function(){return this.__cF;
},getOldData:function(){return this.__cG;
}},destruct:function(){this.__cF=this.__cG=null;
}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dh=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dh:null,message:null,getComment:function(){return this.__dh;
},toString:function(){return this.__dh+c+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__di=qx.dev.StackTrace.getStackTrace();
},members:{__di:null,getStackTrace:function(){return this.__di;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.event.type.Event",b="qx.data.IListData";
qx.Interface.define(b,{events:{"change":d,"changeLength":c},members:{getItem:function(a){},setItem:function(i,j){},splice:function(f,g,h){},contains:function(e){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Bootstrap.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__db=a;
this.__dc=b||e;
this.__dd=c===undefined?-1:c;
},members:{__db:null,__dc:null,__dd:null,toString:function(){return this.__db;
},getUri:function(){return this.__dc;
},getLineNumber:function(){return this.__dd;
}}});
})();
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__de=b+(e&&e.message?e.message:e);
Error.call(this,this.__de);
this.__df=f;
this.__dg=e;
},members:{__dg:null,__df:null,__de:null,toString:function(){return this.__de;
},getArguments:function(){return this.__df;
},getSourceException:function(){return this.__dg;
}},destruct:function(){this.__dg=null;
this.__df=null;
this.__de=null;
}});
})();
(function(){var p="",o="g",n="0",m='\\$1',l="%",k='-',j="qx.lang.String",h=' ',g='\n',f="undefined";
qx.Class.define(j,{statics:{camelCase:function(N){return N.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(z){return z.replace(/[A-Z]/g,function(K){return (k+K.charAt(0).toLowerCase());
});
},capitalize:function(J){return J.replace(/\b[a-z]/g,function(G){return G.toUpperCase();
});
},clean:function(a){return this.trim(a.replace(/\s+/g,h));
},trimLeft:function(e){return e.replace(/^\s+/,p);
},trimRight:function(Q){return Q.replace(/\s+$/,p);
},trim:function(M){return M.replace(/^\s+|\s+$/g,p);
},startsWith:function(O,P){return O.indexOf(P)===0;
},endsWith:function(A,B){return A.substring(A.length-B.length,A.length)===B;
},repeat:function(H,I){return H.length>0?new Array(I+1).join(H):p;
},pad:function(v,length,w){var x=length-v.length;

if(x>0){if(typeof w===f){w=n;
}return this.repeat(w,x)+v;
}else{return v;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(t,u){return t.indexOf(u)!=-1;
},format:function(b,c){var d=b;

for(var i=0;i<c.length;i++){d=d.replace(new RegExp(l+(i+1),o),c[i]);
}return d;
},escapeRegexpChars:function(y){return y.replace(/([.*+?^${}()|[\]\/\\])/g,m);
},toArray:function(q){return q.split(/\B|\b/g);
},stripTags:function(L){return L.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(C,D){var F=p;
var E=C.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){F+=arguments[1]+g;
return p;
});

if(D===true){qx.lang.Function.globalEval(F);
}return E;
}}});
})();
(function(){var A='',z='"',y=':',x=']',w='null',u=': ',t='object',s='function',r=',',q='\n',bk='\\u',bj=',\n',bi='0000',bh='string',bg="Cannot stringify a recursive object.",bf='0',be='-',bd='}',bc='String',bb='Boolean',H='\\\\',I='\\f',F='\\t',G='{\n',D='[]',E="qx.lang.JsonImpl",B='Z',C='\\n',J='Object',K='{}',R='@',P='.',U='(',T='Array',W='T',V='\\r',M='{',ba='JSON.parse',Y=' ',X='[',L='Number',N=')',O='[\n',Q='\\"',S='\\b';
qx.Class.define(E,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__ph:null,__pi:null,__pj:null,__pk:null,stringify:function(bl,bm,bn){this.__ph=A;
this.__pi=A;
this.__pk=[];

if(qx.lang.Type.isNumber(bn)){var bn=Math.min(10,Math.floor(bn));

for(var i=0;i<bn;i+=1){this.__pi+=Y;
}}else if(qx.lang.Type.isString(bn)){if(bn.length>10){bn=bn.slice(0,10);
}this.__pi=bn;
}if(bm&&(qx.lang.Type.isFunction(bm)||qx.lang.Type.isArray(bm))){this.__pj=bm;
}else{this.__pj=null;
}return this.__pl(A,{'':bl});
},__pl:function(g,h){var o=this.__ph,l,p=h[g];
if(p&&qx.lang.Type.isFunction(p.toJSON)){p=p.toJSON(g);
}else if(qx.lang.Type.isDate(p)){p=this.dateToJSON(p);
}if(typeof this.__pj===s){p=this.__pj.call(h,g,p);
}
if(p===null){return w;
}
if(p===undefined){return undefined;
}switch(qx.lang.Type.getClass(p)){case bc:return this.__pm(p);
case L:return isFinite(p)?String(p):w;
case bb:return String(p);
case T:this.__ph+=this.__pi;
l=[];

if(this.__pk.indexOf(p)!==-1){throw new TypeError(bg);
}this.__pk.push(p);
var length=p.length;

for(var i=0;i<length;i+=1){l[i]=this.__pl(i,p)||w;
}this.__pk.pop();
if(l.length===0){var m=D;
}else if(this.__ph){m=O+this.__ph+l.join(bj+this.__ph)+q+o+x;
}else{m=X+l.join(r)+x;
}this.__ph=o;
return m;
case J:this.__ph+=this.__pi;
l=[];

if(this.__pk.indexOf(p)!==-1){throw new TypeError(bg);
}this.__pk.push(p);
if(this.__pj&&typeof this.__pj===t){var length=this.__pj.length;

for(var i=0;i<length;i+=1){var k=this.__pj[i];

if(typeof k===bh){var v=this.__pl(k,p);

if(v){l.push(this.__pm(k)+(this.__ph?u:y)+v);
}}}}else{for(var k in p){if(Object.hasOwnProperty.call(p,k)){var v=this.__pl(k,p);

if(v){l.push(this.__pm(k)+(this.__ph?u:y)+v);
}}}}this.__pk.pop();
if(l.length===0){var m=K;
}else if(this.__ph){m=G+this.__ph+l.join(bj+this.__ph)+q+o+bd;
}else{m=M+l.join(r)+bd;
}this.__ph=o;
return m;
}},dateToJSON:function(bo){var bp=function(n){return n<10?bf+n:n;
};
var bq=function(n){var f=bp(n);
return n<100?bf+f:f;
};
return isFinite(bo.valueOf())?bo.getUTCFullYear()+be+bp(bo.getUTCMonth()+1)+be+bp(bo.getUTCDate())+W+bp(bo.getUTCHours())+y+bp(bo.getUTCMinutes())+y+bp(bo.getUTCSeconds())+P+bq(bo.getUTCMilliseconds())+B:null;
},__pm:function(br){var bs={'\b':S,'\t':F,'\n':C,'\f':I,'\r':V,'"':Q,'\\':H};
var bt=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;

if(bt.test(br)){return z+
br.replace(bt,function(a){var c=bs[a];
return typeof c===bh?c:bk+(bi+a.charCodeAt(0).toString(16)).slice(-4);
})+z;
}else{return z+br+z;
}},parse:function(b,d){var e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
e.lastIndex=0;
if(e.test(b)){b=b.replace(e,function(a){return bk+(bi+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,R).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,x).replace(/(?:^|:|,)(?:\s*\[)+/g,A))){var j=eval(U+b+N);
return typeof d===s?this.__pn({'':j},A,d):j;
}throw new SyntaxError(ba);
},__pn:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===t){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__pn(bx,k,bw);

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
(function(){var o="get",n="",m="[",l=".",k="last",h="change",g="]",f="Number",d="String",c="set",I="deepBinding",H="item",G="reset",F="' (",E="on",D="qx.debug",C="Boolean",B=") to the object '",A="Integer",z="qx.event.type.Data",v="qx.data.SingleValueBinding",w="No event could be found for the property",t="Can not remove the bindings for null object!",u="Binding from '",r="PositiveNumber",s="PositiveInteger",p="Binding does not exist!",q=" is not an data (qx.event.type.Data) event on ",x=").",y="Date";
qx.Class.define(v,{statics:{DEBUG_ON:false,__cH:{},bind:function(cN,cO,cP,cQ,cR){var dc=this.__cJ(cN,cO,cP,cQ,cR);
var cW=cO.split(l);
var cT=this.__cQ(cW);
var db=[];
var cX=[];
var cY=[];
var cU=[];
var cV=cN;
for(var i=0;i<cW.length;i++){if(cT[i]!==n){cU.push(h);
}else{cU.push(this.__cL(cV,cW[i]));
}db[i]=cV;
if(i==cW.length-1){if(cT[i]!==n){var df=cT[i]===k?cV.length-1:cT[i];
var cS=cV.getItem(df);
this.__cP(cS,cP,cQ,cR,cN);
cY[i]=this.__cR(cV,cU[i],cP,cQ,cR,cT[i]);
}else{if(cW[i]!=null&&cV[o+qx.lang.String.firstUp(cW[i])]!=null){var cS=cV[o+qx.lang.String.firstUp(cW[i])]();
this.__cP(cS,cP,cQ,cR,cN);
}cY[i]=this.__cR(cV,cU[i],cP,cQ,cR);
}}else{var dd={index:i,propertyNames:cW,sources:db,listenerIds:cY,arrayIndexValues:cT,targetObject:cP,targetPropertyChain:cQ,options:cR,listeners:cX};
var da=qx.lang.Function.bind(this.__cI,this,dd);
cX.push(da);
cY[i]=cV.addListener(cU[i],da);
}if(cV[o+qx.lang.String.firstUp(cW[i])]==null){cV=null;
}else if(cT[i]!==n){cV=cV[o+qx.lang.String.firstUp(cW[i])](cT[i]);
}else{cV=cV[o+qx.lang.String.firstUp(cW[i])]();
}
if(!cV){break;
}}var de={type:I,listenerIds:cY,sources:db,targetListenerIds:dc.listenerIds,targets:dc.targets};
this.__cS(de,cN,cO,cP,cQ);
return de;
},__cI:function(bi){if(bi.options&&bi.options.onUpdate){bi.options.onUpdate(bi.sources[bi.index],bi.targetObject);
}for(var j=bi.index+1;j<bi.propertyNames.length;j++){var bm=bi.sources[j];
bi.sources[j]=null;

if(!bm){continue;
}bm.removeListenerById(bi.listenerIds[j]);
}var bm=bi.sources[bi.index];
for(var j=bi.index+1;j<bi.propertyNames.length;j++){if(bi.arrayIndexValues[j-1]!==n){bm=bm[o+qx.lang.String.firstUp(bi.propertyNames[j-1])](bi.arrayIndexValues[j-1]);
}else{bm=bm[o+qx.lang.String.firstUp(bi.propertyNames[j-1])]();
}bi.sources[j]=bm;
if(!bm){this.__cM(bi.targetObject,bi.targetPropertyChain);
break;
}if(j==bi.propertyNames.length-1){if(qx.Class.implementsInterface(bm,qx.data.IListData)){var bn=bi.arrayIndexValues[j]===k?bm.length-1:bi.arrayIndexValues[j];
var bk=bm.getItem(bn);
this.__cP(bk,bi.targetObject,bi.targetPropertyChain,bi.options,bi.sources[bi.index]);
bi.listenerIds[j]=this.__cR(bm,h,bi.targetObject,bi.targetPropertyChain,bi.options,bi.arrayIndexValues[j]);
}else{if(bi.propertyNames[j]!=null&&bm[o+qx.lang.String.firstUp(bi.propertyNames[j])]!=null){var bk=bm[o+qx.lang.String.firstUp(bi.propertyNames[j])]();
this.__cP(bk,bi.targetObject,bi.targetPropertyChain,bi.options,bi.sources[bi.index]);
}var bl=this.__cL(bm,bi.propertyNames[j]);
bi.listenerIds[j]=this.__cR(bm,bl,bi.targetObject,bi.targetPropertyChain,bi.options);
}}else{if(bi.listeners[j]==null){var bj=qx.lang.Function.bind(this.__cI,this,bi);
bi.listeners.push(bj);
}if(qx.Class.implementsInterface(bm,qx.data.IListData)){var bl=h;
}else{var bl=this.__cL(bm,bi.propertyNames[j]);
}bi.listenerIds[j]=bm.addListener(bl,bi.listeners[j]);
}}},__cJ:function(cz,cA,cB,cC,cD){var cH=cC.split(l);
var cF=this.__cQ(cH);
var cM=[];
var cL=[];
var cJ=[];
var cI=[];
var cG=cB;
for(var i=0;i<cH.length-1;i++){if(cF[i]!==n){cI.push(h);
}else{try{cI.push(this.__cL(cG,cH[i]));
}catch(e){break;
}}cM[i]=cG;
var cK=function(){for(var j=i+1;j<cH.length-1;j++){var bq=cM[j];
cM[j]=null;

if(!bq){continue;
}bq.removeListenerById(cJ[j]);
}var bq=cM[i];
for(var j=i+1;j<cH.length-1;j++){var bo=qx.lang.String.firstUp(cH[j-1]);
if(cF[j-1]!==n){var br=cF[j-1]===k?bq.getLength()-1:cF[j-1];
bq=bq[o+bo](br);
}else{bq=bq[o+bo]();
}cM[j]=bq;
if(cL[j]==null){cL.push(cK);
}if(qx.Class.implementsInterface(bq,qx.data.IListData)){var bp=h;
}else{try{var bp=qx.data.SingleValueBinding.__cL(bq,cH[j]);
}catch(e){break;
}}cJ[j]=bq.addListener(bp,cL[j]);
}qx.data.SingleValueBinding.__cK(cz,cA,cB,cC);
};
cL.push(cK);
cJ[i]=cG.addListener(cI[i],cK);
var cE=qx.lang.String.firstUp(cH[i]);
if(cG[o+cE]==null){cG=null;
}else if(cF[i]!==n){cG=cG[o+cE](cF[i]);
}else{cG=cG[o+cE]();
}
if(!cG){break;
}}return {listenerIds:cJ,targets:cM};
},__cK:function(bB,bC,bD,bE){var bI=this.__cO(bB,bC);

if(bI!=null){var bK=bC.substring(bC.lastIndexOf(l)+1,bC.length);
if(bK.charAt(bK.length-1)==g){var bF=bK.substring(bK.lastIndexOf(m)+1,bK.length-1);
var bH=bK.substring(0,bK.lastIndexOf(m));
var bJ=bI[o+qx.lang.String.firstUp(bH)]();

if(bF==k){bF=bJ.length-1;
}
if(bJ!=null){var bG=bJ.getItem(bF);
}}else{var bG=bI[o+qx.lang.String.firstUp(bK)]();
}}this.__cN(bD,bE,bG);
},__cL:function(cp,cq){var cr=this.__cU(cp,cq);
if(cr==null){if(qx.Class.supportsEvent(cp.constructor,cq)){cr=cq;
}else if(qx.Class.supportsEvent(cp.constructor,h+qx.lang.String.firstUp(cq))){cr=h+qx.lang.String.firstUp(cq);
}else{throw new qx.core.AssertionError(w,cq);
}}return cr;
},__cM:function(J,K){var L=this.__cO(J,K);

if(L!=null){var M=K.substring(K.lastIndexOf(l)+1,K.length);
if(M.charAt(M.length-1)==g){this.__cN(J,K,null);
return;
}if(L[G+qx.lang.String.firstUp(M)]!=undefined){L[G+qx.lang.String.firstUp(M)]();
}else{L[c+qx.lang.String.firstUp(M)](null);
}}},__cN:function(Q,R,S){var W=this.__cO(Q,R);

if(W!=null){var X=R.substring(R.lastIndexOf(l)+1,R.length);
if(X.charAt(X.length-1)==g){var T=X.substring(X.lastIndexOf(m)+1,X.length-1);
var V=X.substring(0,X.lastIndexOf(m));
var U=W[o+qx.lang.String.firstUp(V)]();

if(T==k){T=U.length-1;
}
if(U!=null){U.setItem(T,S);
}}else{W[c+qx.lang.String.firstUp(X)](S);
}}},__cO:function(Y,ba){var bd=ba.split(l);
var be=Y;
for(var i=0;i<bd.length-1;i++){try{var bc=bd[i];
if(bc.indexOf(g)==bc.length-1){var bb=bc.substring(bc.indexOf(m)+1,bc.length-1);
bc=bc.substring(0,bc.indexOf(m));
}be=be[o+qx.lang.String.firstUp(bc)]();

if(bb!=null){if(bb==k){bb=be.length-1;
}be=be.getItem(bb);
bb=null;
}}catch(cd){return null;
}}return be;
},__cP:function(bw,bx,by,bz,bA){bw=this.__cT(bw,bx,by,bz);
if(bw==null){this.__cM(bx,by);
}if(bw!=undefined){try{this.__cN(bx,by,bw);
if(bz&&bz.onUpdate){bz.onUpdate(bA,bx,bw);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bz&&bz.onSetFail){bz.onSetFail(e);
}else{this.warn("Failed so set value "+bw+" on "+bx+". Error message: "+e);
}}}},__cQ:function(dg){var dh=[];
for(var i=0;i<dg.length;i++){var name=dg[i];
if(qx.lang.String.endsWith(name,g)){var di=name.substring(name.indexOf(m)+1,name.indexOf(g));
if(name.indexOf(g)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(di!==k){if(di==n||isNaN(parseInt(di))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(m)!=0){dg[i]=name.substring(0,name.indexOf(m));
dh[i]=n;
dh[i+1]=di;
dg.splice(i+1,0,H);
i++;
}else{dh[i]=di;
dg.splice(i,1,H);
}}else{dh[i]=n;
}}return dh;
},__cR:function(cg,ch,ci,cj,ck,cl){if(qx.core.Variant.isSet(D,E)){var cm=qx.Class.getEventType(cg.constructor,ch);
qx.core.Assert.assertEquals(z,cm,ch+q+cg+l);
}var co=function(bs,e){if(bs!==n){if(bs===k){bs=cg.length-1;
}var bv=cg.getItem(bs);
if(bv==undefined){qx.data.SingleValueBinding.__cM(ci,cj);
}var bt=e.getData().start;
var bu=e.getData().end;

if(bs<bt||bs>bu){return;
}}else{var bv=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cg+" by "+ch+" to "+ci+" ("+cj+")");
qx.log.Logger.debug("Data before conversion: "+bv);
}bv=qx.data.SingleValueBinding.__cT(bv,ci,cj,ck);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bv);
}try{if(bv!=undefined){qx.data.SingleValueBinding.__cN(ci,cj,bv);
}else{qx.data.SingleValueBinding.__cM(ci,cj);
}if(ck&&ck.onUpdate){ck.onUpdate(cg,ci,bv);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(ck&&ck.onSetFail){ck.onSetFail(e);
}else{this.warn("Failed so set value "+bv+" on "+ci+". Error message: "+e);
}}};
if(!cl){cl=n;
}co=qx.lang.Function.bind(co,cg,cl);
var cn=cg.addListener(ch,co);
return cn;
},__cS:function(bL,bM,bN,bO,bP){if(this.__cH[bM.toHashCode()]===undefined){this.__cH[bM.toHashCode()]=[];
}this.__cH[bM.toHashCode()].push([bL,bM,bN,bO,bP]);
},__cT:function(bQ,bR,bS,bT){if(bT&&bT.converter){var bV;

if(bR.getModel){bV=bR.getModel();
}return bT.converter(bQ,bV);
}else{var bX=this.__cO(bR,bS);
var bY=bS.substring(bS.lastIndexOf(l)+1,bS.length);
if(bX==null){return bQ;
}var bW=qx.Class.getPropertyDefinition(bX.constructor,bY);
var bU=bW==null?n:bW.check;
return this.__cV(bQ,bU);
}},__cU:function(ca,cb){var cc=qx.Class.getPropertyDefinition(ca.constructor,cb);

if(cc==null){return null;
}return cc.event;
},__cV:function(N,O){var P=qx.lang.Type.getClass(N);
if((P==f||P==d)&&(O==A||O==s)){N=parseInt(N);
}if((P==C||P==f||P==y)&&O==d){N=N+n;
}if((P==f||P==d)&&(O==f||O==r)){N=parseFloat(N);
}return N;
},removeBindingFromObject:function(cs,ct){if(ct.type==I){for(var i=0;i<ct.sources.length;i++){if(ct.sources[i]){ct.sources[i].removeListenerById(ct.listenerIds[i]);
}}for(var i=0;i<ct.targets.length;i++){if(ct.targets[i]){ct.targets[i].removeListenerById(ct.targetListenerIds[i]);
}}}else{cs.removeListenerById(ct);
}var cu=this.__cH[cs.toHashCode()];
if(cu!=undefined){for(var i=0;i<cu.length;i++){if(cu[i][0]==ct){qx.lang.Array.remove(cu,cu[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(a){if(qx.core.Variant.isSet(D,E)){qx.core.Assert.assertNotNull(a,t);
}var b=this.__cH[a.toHashCode()];

if(b!=undefined){for(var i=b.length-1;i>=0;i--){this.removeBindingFromObject(a,b[i][0]);
}}},getAllBindingsForObject:function(bf){if(this.__cH[bf.toHashCode()]===undefined){this.__cH[bf.toHashCode()]=[];
}return this.__cH[bf.toHashCode()];
},removeAllBindings:function(){for(var cf in this.__cH){var ce=qx.core.ObjectRegistry.fromHashCode(cf);
if(ce==null){delete this.__cH[cf];
continue;
}this.removeAllBindingsForObject(ce);
}this.__cH={};
},getAllBindings:function(){return this.__cH;
},showBindingInLog:function(cv,cw){var cy;
for(var i=0;i<this.__cH[cv.toHashCode()].length;i++){if(this.__cH[cv.toHashCode()][i][0]==cw){cy=this.__cH[cv.toHashCode()][i];
break;
}}
if(cy===undefined){var cx=p;
}else{var cx=u+cy[1]+F+cy[2]+B+cy[3]+F+cy[4]+x;
}qx.log.Logger.debug(cx);
},showAllBindingsInLog:function(){for(var bh in this.__cH){var bg=qx.core.ObjectRegistry.fromHashCode(bh);

for(var i=0;i<this.__cH[bh].length;i++){this.showBindingInLog(bg,this.__cH[bh][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var c="qx.util.ObjectPool",b="Integer";
qx.Class.define(c,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.__dj={};

if(a!=null){this.setSize(a);
}},properties:{size:{check:b,init:Infinity}},members:{__dj:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__dj[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__dj){return;
}var h=g.classname;
var j=this.__dj[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__dj[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__dj;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__dj;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(t,u){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=u.length;i<l;i++){var name=u[i];

if(t[name]==null||!t.hasOwnProperty(name)){continue;
}t[name]=null;
}},disposeObjects:function(h,j,k){var name;

for(var i=0,l=j.length;i<l;i++){name=j[i];

if(h[name]==null||!h.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(h[name].dispose){if(!k&&h[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{h[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}h[name]=null;
}},disposeArray:function(m,n){var p=m[n];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){m[n]=null;
return;
}try{var o;

for(var i=p.length-1;i>=0;i--){o=p[i];

if(o){o.dispose();
}}}catch(b){throw new Error("The array field: "+n+" of object: "+m+" has non disposable entries: "+b);
}p.length=0;
m[n]=null;
},disposeMap:function(d,e){var f=d[e];

if(!f){return;
}if(qx.core.ObjectRegistry.inShutDown){d[e]=null;
return;
}try{for(var g in f){if(f.hasOwnProperty(g)){f[g].dispose();
}}}catch(c){throw new Error("The map field: "+e+" of object: "+d+" has non disposable entries: "+c);
}d[e]=null;
},disposeTriggeredBy:function(q,r){var s=r.dispose;
r.dispose=function(){s.call(r);
q.dispose();
};
}}});
})();
(function(){var f="qx.event.handler.Object";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(a,b){return qx.Class.supportsEvent(a.constructor,b);
},registerEvent:function(g,h,i){},unregisterEvent:function(c,d,e){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__dk:function(){this.QUIRKS_MODE=this.__dl();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__dl:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__dk();
}});
})();
(function(){var s="qx.debug",r="on",q="Invalid argument 'map'",p="Invalid argument 'minLength'",o="Invalid argument 'source'",n="Invalid argument 'target'",m="function",k="Invalid argument 'array'",j="qx.lang.Object",h="undefined",g="object";
qx.Class.define(j,{statics:{empty:function(t){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(t,q);
}
for(var u in t){if(t.hasOwnProperty(u)){delete t[u];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(N){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(N,q);
}return N.__count__===0;
}:
function(a){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(a,q);
}
for(var b in a){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(A,B){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(A,q);
qx.core.Assert&&qx.core.Assert.assertInteger(B,p);
}return A.__count__>=B;
}:
function(x,y){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(x,q);
qx.core.Assert&&qx.core.Assert.assertInteger(y,p);
}
if(y<=0){return true;
}var length=0;

for(var z in x){if((++length)>=y){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(E,q);
}var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(C,D){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(C,n);
qx.core.Assert&&qx.core.Assert.assertMap(D,o);
}return qx.lang.Object.mergeWith(C,D,false);
},merge:function(H,I){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(H,n);
}var J=arguments.length;

for(var i=1;i<J;i++){qx.lang.Object.mergeWith(H,arguments[i]);
}return H;
},clone:function(K){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(K,o);
}var L={};

for(var M in K){L[M]=K[M];
}return L;
},invert:function(O){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(O,q);
}var P={};

for(var Q in O){P[O[Q].toString()]=Q;
}return P;
},getKeyFromValue:function(R,S){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(R,q);
}
for(var T in R){if(R.hasOwnProperty(T)&&R[T]===S){return T;
}}return null;
},contains:function(c,d){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(c,q);
}return this.getKeyFromValue(c,d)!==null;
},select:function(v,w){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertMap(w,q);
}return w[v];
},fromArray:function(e){if(qx.core.Variant.isSet(s,r)){qx.core.Assert&&qx.core.Assert.assertArray(e,k);
}var f={};

for(var i=0,l=e.length;i<l;i++){if(qx.core.Variant.isSet(s,r)){switch(typeof e[i]){case g:case m:case h:throw new Error("Could not convert complex objects like "+e[i]+" at array index "+i+" to map syntax");
}}f[e[i].toString()]=true;
}return f;
}}});
})();
(function(){var v="emulated",u="native",t='"',s="qx.lang.Core",r="\\\\",q="\\\"",p="[object Error]";
qx.Class.define(s,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==p)?v:u,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?u:v,{"native":Array.prototype.indexOf,"emulated":function(y,z){if(z==null){z=0;
}else if(z<0){z=Math.max(0,this.length+z);
}
for(var i=z;i<this.length;i++){if(this[i]===y){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?u:v,{"native":Array.prototype.lastIndexOf,"emulated":function(w,x){if(x==null){x=this.length-1;
}else if(x<0){x=Math.max(0,this.length+x);
}
for(var i=x;i>=0;i--){if(this[i]===w){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?u:v,{"native":Array.prototype.forEach,"emulated":function(m,n){var l=this.length;

for(var i=0;i<l;i++){var o=this[i];

if(o!==undefined){m.call(n||window,o,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?u:v,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?u:v,{"native":Array.prototype.map,"emulated":function(g,h){var j=[];
var l=this.length;

for(var i=0;i<l;i++){var k=this[i];

if(k!==undefined){j[i]=g.call(h||window,k,i,this);
}}return j;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?u:v,{"native":Array.prototype.some,"emulated":function(d,e){var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(d.call(e||window,f,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?u:v,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?u:v,{"native":String.prototype.quote,"emulated":function(){return t+this.replace(/\\/g,r).replace(/\"/g,q)+t;
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
qx.Class.define(G,{statics:{__dm:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__dn:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__do:function(){var J=qx.lang.Generics.__dm;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__dn(L,M);
}}}}},defer:function(O){O.__do();
}});
})();
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(a,b,c,d,e){qx.event.type.Event.prototype.init.call(this,d,e);
this._target=b||qx.bom.Event.getTarget(a);
this._relatedTarget=c||qx.bom.Event.getRelatedTarget(a);

if(a.timeStamp){this._timeStamp=a.timeStamp;
}this._native=a;
this._returnValue=null;
return this;
},clone:function(j){var k=qx.event.type.Event.prototype.clone.call(this,j);
var l={};
k._native=this._cloneNativeEvent(this._native,l);
k._returnValue=this._returnValue;
return k;
},_cloneNativeEvent:function(g,h){h.preventDefault=qx.lang.Function.empty;
return h;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(i){this._returnValue=i;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__eF:function(){var o=navigator.platform;
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
}}},defer:function(n){n.__eF();
}});
})();
(function(){var n="win98",m="osx2",l="osx0",k="osx4",j="win95",i="win2000",h="osx1",g="osx5",f="osx3",e="Windows NT 5.01",L=")",K="winxp",J="freebsd",I="sunos",H="SV1",G="|",F="nintendods",E="winnt4",D="wince",C="winme",u="os9",v="\.",s="osx",t="linux",q="netbsd",r="winvista",o="openbsd",p="(",w="win2003",x="symbian",z="win7",y="g",B="qx.bom.client.System",A=" Mobile/";
qx.Class.define(B,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__eG:{"Windows NT 6.1":z,"Windows NT 6.0":r,"Windows NT 5.2":w,"Windows NT 5.1":K,"Windows NT 5.0":i,"Windows 2000":i,"Windows NT 4.0":E,"Win 9x 4.90":C,"Windows CE":D,"Windows 98":n,"Win98":n,"Windows 95":j,"Win95":j,"Linux":t,"FreeBSD":J,"NetBSD":q,"OpenBSD":o,"SunOS":I,"Symbian System":x,"Nitro":F,"PSP":"sonypsp","Mac OS X 10_5":g,"Mac OS X 10.5":g,"Mac OS X 10_4":k,"Mac OS X 10.4":k,"Mac OS X 10_3":f,"Mac OS X 10.3":f,"Mac OS X 10_2":m,"Mac OS X 10.2":m,"Mac OS X 10_1":h,"Mac OS X 10.1":h,"Mac OS X 10_0":l,"Mac OS X 10.0":l,"Mac OS X":s,"Mac OS 9":u},__eH:function(){var c=navigator.userAgent;
var b=[];

for(var a in this.__eG){b.push(a);
}var d=new RegExp(p+b.join(G).replace(/\./g,v)+L,y);

if(!d.test(c)){this.UNKNOWN_SYSTEM=true;

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
if(qx.bom.client.Engine.WEBKIT&&RegExp(A).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__eG[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(c.indexOf(e)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&c.indexOf(H)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__eH();
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
(function(){var e="qx.util.ValueManager",d="abstract";
qx.Class.define(e,{type:d,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(b){return this._dynamic[b];
},isDynamic:function(c){return !!this._dynamic[c];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var i="_applyTheme",h="qx.theme.manager.Color",g="Theme",f="changeTheme",e="string",d="singleton";
qx.Class.define(h,{type:d,extend:qx.util.ValueManager,properties:{theme:{check:g,nullable:true,apply:i,event:f}},members:{_applyTheme:function(j){var k={};

if(j){var l=j.colors;
var m=qx.util.ColorUtil;
var n;

for(var o in l){n=l[o];

if(typeof n===e){if(!m.isCssString(n)){throw new Error("Could not parse color: "+n);
}}else if(n instanceof Array){n=m.rgbToRgbString(n);
}else{throw new Error("Could not parse color: "+n);
}k[o]=n;
}}this._setDynamic(k);
},resolve:function(p){var s=this._dynamic;
var q=s[p];

if(q){return q;
}var r=this.getTheme();

if(r!==null&&r.colors[p]){return s[p]=r.colors[p];
}return p;
},isDynamic:function(a){var c=this._dynamic;

if(a&&(c[a]!==undefined)){return true;
}var b=this.getTheme();

if(b!==null&&a&&(b.colors[a]!==undefined)){c[a]=b.colors[a];
return true;
}return false;
}}});
})();
(function(){var L=",",K="rgb(",J=")",I="qx.theme.manager.Color",H="qx.util.ColorUtil";
qx.Class.define(H,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(B){return this.NAMED[B]!==undefined;
},isSystemColor:function(y){return this.SYSTEM[y]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(I);
},isThemedColor:function(bg){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(bg);
},stringToRgb:function(C){if(this.supportsThemes()&&this.isThemedColor(C)){var C=qx.theme.manager.Color.getInstance().resolveDynamic(C);
}
if(this.isNamedColor(C)){return this.NAMED[C];
}else if(this.isSystemColor(C)){throw new Error("Could not convert system colors to RGB: "+C);
}else if(this.isRgbString(C)){return this.__hJ();
}else if(this.isHex3String(C)){return this.__hL();
}else if(this.isHex6String(C)){return this.__hM();
}throw new Error("Could not parse color: "+C);
},cssStringToRgb:function(z){if(this.isNamedColor(z)){return this.NAMED[z];
}else if(this.isSystemColor(z)){throw new Error("Could not convert system colors to RGB: "+z);
}else if(this.isRgbString(z)){return this.__hJ();
}else if(this.isRgbaString(z)){return this.__hK();
}else if(this.isHex3String(z)){return this.__hL();
}else if(this.isHex6String(z)){return this.__hM();
}throw new Error("Could not parse color: "+z);
},stringToRgbString:function(S){return this.rgbToRgbString(this.stringToRgb(S));
},rgbToRgbString:function(Q){return K+Q[0]+L+Q[1]+L+Q[2]+J;
},rgbToHexString:function(A){return (qx.lang.String.pad(A[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(A[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(U){return this.isThemedColor(U)||this.isNamedColor(U)||this.isHex3String(U)||this.isHex6String(U)||this.isRgbString(U);
},isCssString:function(a){return this.isSystemColor(a)||this.isNamedColor(a)||this.isHex3String(a)||this.isHex6String(a)||this.isRgbString(a);
},isHex3String:function(bh){return this.REGEXP.hex3.test(bh);
},isHex6String:function(bi){return this.REGEXP.hex6.test(bi);
},isRgbString:function(T){return this.REGEXP.rgb.test(T);
},isRgbaString:function(R){return this.REGEXP.rgba.test(R);
},__hJ:function(){var x=parseInt(RegExp.$1,10);
var w=parseInt(RegExp.$2,10);
var v=parseInt(RegExp.$3,10);
return [x,w,v];
},__hK:function(){var P=parseInt(RegExp.$1,10);
var O=parseInt(RegExp.$2,10);
var N=parseInt(RegExp.$3,10);
return [P,O,N];
},__hL:function(){var F=parseInt(RegExp.$1,16)*17;
var E=parseInt(RegExp.$2,16)*17;
var D=parseInt(RegExp.$3,16)*17;
return [F,E,D];
},__hM:function(){var bf=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var be=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bd=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bf,be,bd];
},hex3StringToRgb:function(G){if(this.isHex3String(G)){return this.__hL(G);
}throw new Error("Invalid hex3 value: "+G);
},hex6StringToRgb:function(M){if(this.isHex6String(M)){return this.__hM(M);
}throw new Error("Invalid hex6 value: "+M);
},hexStringToRgb:function(bc){if(this.isHex3String(bc)){return this.__hL(bc);
}
if(this.isHex6String(bc)){return this.__hM(bc);
}throw new Error("Invalid hex value: "+bc);
},rgbToHsb:function(c){var e,h,k;
var u=c[0];
var n=c[1];
var d=c[2];
var s=(u>n)?u:n;

if(d>s){s=d;
}var j=(u<n)?u:n;

if(d<j){j=d;
}k=s/255.0;

if(s!=0){h=(s-j)/s;
}else{h=0;
}
if(h==0){e=0;
}else{var m=(s-u)/(s-j);
var o=(s-n)/(s-j);
var l=(s-d)/(s-j);

if(u==s){e=l-o;
}else if(n==s){e=2.0+m-l;
}else{e=4.0+o-m;
}e=e/6.0;

if(e<0){e=e+1.0;
}}return [Math.round(e*360),Math.round(h*100),Math.round(k*100)];
},hsbToRgb:function(V){var i,f,p,q,t;
var W=V[0]/360;
var X=V[1]/100;
var Y=V[2]/100;

if(W>=1.0){W%=1.0;
}
if(X>1.0){X=1.0;
}
if(Y>1.0){Y=1.0;
}var ba=Math.floor(255*Y);
var bb={};

if(X==0.0){bb.red=bb.green=bb.blue=ba;
}else{W*=6.0;
i=Math.floor(W);
f=W-i;
p=Math.floor(ba*(1.0-X));
q=Math.floor(ba*(1.0-(X*f)));
t=Math.floor(ba*(1.0-(X*(1.0-f))));

switch(i){case 0:bb.red=ba;
bb.green=t;
bb.blue=p;
break;
case 1:bb.red=q;
bb.green=ba;
bb.blue=p;
break;
case 2:bb.red=p;
bb.green=ba;
bb.blue=t;
break;
case 3:bb.red=p;
bb.green=q;
bb.blue=ba;
break;
case 4:bb.red=t;
bb.green=p;
bb.blue=ba;
break;
case 5:bb.red=ba;
bb.green=p;
bb.blue=q;
break;
}}return [bb.red,bb.green,bb.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var n="object",m="_applyTheme",l="__gR",k="qx.theme.manager.Decoration",j="Theme",i="changeTheme",h="string",g="singleton";
qx.Class.define(k,{type:g,extend:qx.core.Object,properties:{theme:{check:j,nullable:true,apply:m,event:i}},members:{__gR:null,resolve:function(a){if(!a){return null;
}
if(typeof a===n){return a;
}var d=this.getTheme();

if(!d){return null;
}var d=this.getTheme();

if(!d){return null;
}var e=this.__gR;

if(!e){e=this.__gR={};
}var b=e[a];

if(b){return b;
}var c=d.decorations[a];

if(!c){return null;
}var f=c.decorator;

if(f==null){throw new Error("Missing definition of which decorator to use in entry: "+a+"!");
}return e[a]=(new f).set(c.style);
},isValidPropertyValue:function(u){if(typeof u===h){return this.isDynamic(u);
}else if(typeof u===n){var v=u.constructor;
return qx.Class.hasInterface(v,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(o){if(!o){return false;
}var p=this.getTheme();

if(!p){return false;
}return !!p.decorations[o];
},_applyTheme:function(q,r){var t=qx.util.AliasManager.getInstance();

if(r){for(var s in r.aliases){t.remove(s);
}}
if(q){for(var s in q.aliases){t.add(s,q.aliases[s]);
}}
if(!q){this.__gR={};
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var k="/",j="0",i="qx/static",h="http://",g="https://",f="file://",e="qx.util.AliasManager",d="singleton",c=".",b="static";
qx.Class.define(e,{type:d,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__gS={};
this.add(b,i);
},members:{__gS:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===k||r.charAt(0)===c||r.indexOf(h)===0||r.indexOf(g)===j||r.indexOf(f)===0){u[r]=false;
return r;
}
if(this.__gS[r]){return this.__gS[r];
}var t=r.substring(0,r.indexOf(k));
var s=this.__gS[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(l,m){this.__gS[l]=m;
var o=this._getDynamic();
for(var n in o){if(n.substring(0,n.indexOf(k))===l){o[n]=m+n.substring(l.length);
}}},remove:function(a){delete this.__gS[a];
},resolve:function(p){var q=this._getDynamic();

if(p!==null){p=this._preprocess(p);
}return q[p]||p;
}},destruct:function(){this.__gS=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(l){var m=this._dynamic;
return l instanceof qx.bom.Font?l:m[l];
},resolve:function(s){var v=this._dynamic;
var t=v[s];

if(t){return t;
}var u=this.getTheme();

if(u!==null&&u.fonts[s]){return v[s]=(new qx.bom.Font).set(u.fonts[s]);
}return s;
},isDynamic:function(i){var k=this._dynamic;

if(i&&(i instanceof qx.bom.Font||k[i]!==undefined)){return true;
}var j=this.getTheme();

if(j!==null&&i&&j.fonts[i]){k[i]=(new qx.bom.Font).set(j.fonts[i]);
return true;
}return false;
},__jX:function(f,g){if(f[g].include){var h=f[f[g].include];
f[g].include=null;
delete f[g].include;
f[g]=qx.lang.Object.mergeWith(f[g],h,false);
this.__jX(f,g);
}},_applyTheme:function(n){var o=this._getDynamic();

for(var r in o){if(o[r].themed){o[r].dispose();
delete o[r];
}}
if(n){var p=n.fonts;
var q=qx.bom.Font;

for(var r in p){if(p[r].include&&p[p[r].include]){this.__jX(p,r);
}o[r]=(new q).set(p[r]);
o[r].themed=true;
}}this._setDynamic(o);
}}});
})();
(function(){var r="",q="underline",p="Boolean",o="px",n='"',m="italic",k="normal",j="bold",h="_applyItalic",g="_applyBold",D="Integer",C="_applyFamily",B="_applyLineHeight",A="Array",z="overline",y="line-through",x="qx.bom.Font",w="Number",v="_applyDecoration",u=" ",s="_applySize",t=",";
qx.Class.define(x,{extend:qx.core.Object,construct:function(c,d){qx.core.Object.call(this);

if(c!==undefined){this.setSize(c);
}
if(d!==undefined){this.setFamily(d);
}},statics:{fromString:function(P){var T=new qx.bom.Font();
var R=P.split(/\s+/);
var name=[];
var S;

for(var i=0;i<R.length;i++){switch(S=R[i]){case j:T.setBold(true);
break;
case m:T.setItalic(true);
break;
case q:T.setDecoration(q);
break;
default:var Q=parseInt(S,10);

if(Q==S||qx.lang.String.contains(S,o)){T.setSize(Q);
}else{name.push(S);
}break;
}}
if(name.length>0){T.setFamily(name);
}return T;
},fromConfig:function(N){var O=new qx.bom.Font;
O.set(N);
return O;
},__jY:{fontFamily:r,fontSize:r,fontWeight:r,fontStyle:r,textDecoration:r,lineHeight:1.2},getDefaultStyles:function(){return this.__jY;
}},properties:{size:{check:D,nullable:true,apply:s},lineHeight:{check:w,nullable:true,apply:B},family:{check:A,nullable:true,apply:C},bold:{check:p,nullable:true,apply:g},italic:{check:p,nullable:true,apply:h},decoration:{check:[q,y,z],nullable:true,apply:v}},members:{__ka:null,__kb:null,__kc:null,__kd:null,__ke:null,__kf:null,_applySize:function(J,K){this.__ka=J===null?null:J+o;
},_applyLineHeight:function(L,M){this.__kf=L===null?null:L;
},_applyFamily:function(G,H){var I=r;

for(var i=0,l=G.length;i<l;i++){if(G[i].indexOf(u)>0){I+=n+G[i]+n;
}else{I+=G[i];
}
if(i!==l-1){I+=t;
}}this.__kb=I;
},_applyBold:function(a,b){this.__kc=a===null?null:a?j:k;
},_applyItalic:function(e,f){this.__kd=e===null?null:e?m:k;
},_applyDecoration:function(E,F){this.__ke=E===null?null:E;
},getStyles:function(){return {fontFamily:this.__kb,fontSize:this.__ka,fontWeight:this.__kc,fontStyle:this.__kd,textDecoration:this.__ke,lineHeight:this.__kf};
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
this.__hN={};
this.__hO={};
},properties:{theme:{check:f,nullable:true,event:e,apply:i}},members:{__hP:{},__hN:null,__hO:null,_applyTheme:function(a,b){this.__hO={};
this.__hN={};
},__hQ:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=d;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===j){var p=r+u+n.join(u);
return this.__hQ(p,l,m);
}}}if(m!=null){return this.__hQ(m,l);
}return null;
}else if(typeof t===j){return this.__hQ(t,l,m);
}else if(t.include&&!t.style){return this.__hQ(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hO;
var z=E[v];

if(!z){z=E[v]=this.__hQ(v,x,y);
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
}if(C>0){K+=g+C;
}}var D=this.__hN;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hP;
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
}},destruct:function(){this.__hN=this.__hO=null;
}});
})();
(function(){var B="object",A="qx.debug",z="Theme",y="widgets",x="undefined",w="fonts",v="string",u="colors",t="decorations",s="on",m="meta",r="appearances",p="borders",k="icons",j="other",o="qx.Theme",n="]",q="[Theme ";
qx.Bootstrap.define(o,{statics:{define:function(name,Y){if(!Y){var Y={};
}Y.include=this.__qT(Y.include);
Y.patch=this.__qT(Y.patch);
if(qx.core.Variant.isSet(A,s)){this.__rb(name,Y);
}var ba={$$type:z,name:name,title:Y.title,toString:this.genericToString};
if(Y.extend){ba.supertheme=Y.extend;
}ba.basename=qx.Bootstrap.createNamespace(name,ba);
this.__qW(ba,Y);
this.__qU(ba,Y);
this.$$registry[name]=ba;
for(var i=0,a=Y.include,l=a.length;i<l;i++){this.include(ba,a[i]);
}
for(var i=0,a=Y.patch,l=a.length;i<l;i++){this.patch(ba,a[i]);
}},__qT:function(h){if(!h){return [];
}
if(qx.Bootstrap.isArray(h)){return h;
}else{return [h];
}},__qU:function(C,D){var E=D.aliases||{};

if(D.extend&&D.extend.aliases){qx.Bootstrap.objectMergeWith(E,D.extend.aliases,false);
}C.aliases=E;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return q+this.name+n;
},__qV:function(bb){for(var i=0,bc=this.__qX,l=bc.length;i<l;i++){if(bb[bc[i]]){return bc[i];
}}},__qW:function(L,M){var P=this.__qV(M);
if(M.extend&&!P){P=M.extend.type;
}L.type=P||j;
if(!P){return;
}var R=function(){};
if(M.extend){R.prototype=new M.extend.$$clazz;
}var Q=R.prototype;
var O=M[P];
for(var N in O){Q[N]=O[N];
if(Q[N].base){if(qx.core.Variant.isSet(A,s)){if(!M.extend){throw new Error("Found base flag in entry '"+N+"' of theme '"+M.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}Q[N].base=M.extend;
}}L.$$clazz=R;
L[P]=new R;
},$$registry:{},__qX:[u,p,t,w,k,y,r,m],__qY:qx.core.Variant.select(A,{"on":{"title":v,"aliases":B,"type":v,"extend":B,"colors":B,"borders":B,"decorations":B,"fonts":B,"icons":B,"widgets":B,"appearances":B,"meta":B,"include":B,"patch":B},"default":null}),__ra:qx.core.Variant.select(A,{"on":{"color":B,"border":B,"decoration":B,"font":B,"icon":B,"appearance":B,"widget":B},"default":null}),__rb:qx.core.Variant.select(A,{"on":function(name,S){var X=this.__qY;

for(var W in S){if(X[W]===undefined){throw new Error('The configuration key "'+W+'" in theme "'+name+'" is not allowed!');
}
if(S[W]==null){throw new Error('Invalid key "'+W+'" in theme "'+name+'"! The value is undefined/null!');
}
if(X[W]!==null&&typeof S[W]!==X[W]){throw new Error('Invalid type of key "'+W+'" in theme "'+name+'"! The type of the key must be "'+X[W]+'"!');
}}var V=[u,p,t,w,k,y,r,m];

for(var i=0,l=V.length;i<l;i++){var W=V[i];

if(S[W]!==undefined&&(S[W] instanceof Array||S[W] instanceof RegExp||S[W] instanceof Date||S[W].classname!==undefined)){throw new Error('Invalid key "'+W+'" in theme "'+name+'"! The value needs to be a map!');
}}var T=0;

for(var i=0,l=V.length;i<l;i++){var W=V[i];

if(S[W]){T++;
}
if(T>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!S.extend&&T===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(S.meta){var U;

for(var W in S.meta){U=S.meta[W];

if(this.__ra[W]===undefined){throw new Error('The key "'+W+'" is not allowed inside a meta theme block.');
}
if(typeof U!==this.__ra[W]){throw new Error('The type of the key "'+W+'" inside the meta block is wrong.');
}
if(!(typeof U===B&&U!==null&&U.$$type===z)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+W+'" in theme "'+name+'" is invalid: '+U);
}}}if(S.extend&&S.extend.$$type!==z){throw new Error('Invalid extend in theme "'+name+'": '+S.extend);
}if(S.include){for(var i=0,l=S.include.length;i<l;i++){if(typeof (S.include[i])==x||S.include[i].$$type!==z){throw new Error('Invalid include in theme "'+name+'": '+S.include[i]);
}}}if(S.patch){for(var i=0,l=S.patch.length;i<l;i++){if(typeof (S.patch[i])==x||S.patch[i].$$type!==z){throw new Error('Invalid patch in theme "'+name+'": '+S.patch[i]);
}}}},"default":function(){}}),patch:function(F,G){var I=this.__qV(G);

if(I!==this.__qV(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(b,c){var e=c.type;

if(e!==b.type){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){if(f[g]!==undefined){continue;
}f[g]=d[g];
}}}});
})();
(function(){var v="focusout",u="interval",t="mouseover",s="mouseout",r="mousemove",q="__rf",p="widget",o="__rg",n="qx.ui.tooltip.ToolTip",m="Boolean",j="__ri",l="_applyCurrent",k="qx.ui.tooltip.Manager",i="tooltip-error",h="singleton";
qx.Class.define(k,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,t,this.__rp,this,true);
this.__rf=new qx.event.Timer();
this.__rf.addListener(u,this.__rm,this);
this.__rg=new qx.event.Timer();
this.__rg.addListener(u,this.__rn,this);
this.__rh={left:0,top:0};
},properties:{current:{check:n,nullable:true,apply:l},showInvalidTooltips:{check:m,init:true}},members:{__rh:null,__rg:null,__rf:null,__ri:null,__rj:null,__rk:function(){if(!this.__ri){this.__ri=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ri;
},__rl:function(){if(!this.__rj){this.__rj=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__rj.syncAppearance();
}return this.__rj;
},_applyCurrent:function(D,E){if(E&&qx.ui.core.Widget.contains(E,D)){return;
}if(E){if(!E.isDisposed()){E.exclude();
}this.__rf.stop();
this.__rg.stop();
}var G=qx.event.Registration;
var F=document.body;
if(D){this.__rf.startWith(D.getShowTimeout());
G.addListener(F,s,this.__rq,this,true);
G.addListener(F,v,this.__rr,this,true);
G.addListener(F,r,this.__ro,this,true);
}else{G.removeListener(F,s,this.__rq,this,true);
G.removeListener(F,v,this.__rr,this,true);
G.removeListener(F,r,this.__ro,this,true);
}},__rm:function(e){var g=this.getCurrent();

if(g&&!g.isDisposed()){this.__rg.startWith(g.getHideTimeout());

if(g.getPlaceMethod()==p){g.placeToWidget(g.getOpener());
}else{g.placeToPoint(this.__rh);
}g.show();
}this.__rf.stop();
},__rn:function(e){var C=this.getCurrent();

if(C&&!C.isDisposed()){C.exclude();
}this.__rg.stop();
this.resetCurrent();
},__ro:function(e){var w=this.__rh;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__rp:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!c){return;
}var d;
while(c!=null){var d=c.getToolTip();
var f=c.getToolTipText()||null;
var b=c.getToolTipIcon()||null;

if(qx.Class.hasInterface(c.constructor,qx.ui.form.IForm)&&!c.isValid()){var a=c.getInvalidMessage();
}
if(d||f||b||a){break;
}c=c.getLayoutParent();
}
if(!c){return;
}
if(c.isBlockToolTip()){return;
}if(a&&c.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var d=this.__rl().set({label:a});
}else if(!d){var d=this.__rk().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__rq:function(e){var x=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!x){return;
}var y=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!y){return;
}var z=this.getCurrent();
if(z&&(y==z||qx.ui.core.Widget.contains(z,y))){return;
}if(y&&x&&qx.ui.core.Widget.contains(x,y)){return;
}if(z&&!y){this.setCurrent(null);
}else{this.resetCurrent();
}},__rr:function(e){var A=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!A){return;
}var B=this.getCurrent();
if(B&&B==A.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,t,this.__rp,this,true);
this._disposeObjects(q,o,j);
this.__rh=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){qx.core.Object.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__gb=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__gc=j;
m.addListener(i,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__gd:null,__gb:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__gd);
this.__gd=null;
}else if(p){this.__gd=window.setInterval(this.__gb,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__gd){window.clearInterval(this.__gd);
}this.__gd=this.__gb=null;
}});
})();
(function(){var f="qx.ui.core.MChildrenHandling";
qx.Mixin.define(f,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(m){return this._indexOf(m);
},add:function(h,i){this._add(h,i);
},addAt:function(j,k,l){this._addAt(j,k,l);
},addBefore:function(n,o,p){this._addBefore(n,o,p);
},addAfter:function(c,d,e){this._addAfter(c,d,e);
},remove:function(g){this._remove(g);
},removeAt:function(a){return this._removeAt(a);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(b){b.getChildren=b._getChildren;
b.hasChildren=b._hasChildren;
b.indexOf=b._indexOf;
b.add=b._add;
b.addAt=b._addAt;
b.addBefore=b._addBefore;
b.addAfter=b._addAfter;
b.remove=b._remove;
b.removeAt=b._removeAt;
b.removeAll=b._removeAll;
}}});
})();
(function(){var b="qx.ui.core.MLayoutHandling";
qx.Mixin.define(b,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(a){a.getLayout=a._getLayout;
a.setLayout=a._setLayout;
}}});
})();
(function(){var m="Integer",l="_applyDimension",k="Boolean",j="_applyStretching",i="_applyMargin",h="shorthand",g="_applyAlign",f="qx.debug",e="on",d="allowShrinkY",I="Wrong 'width' argument. ",H="Something went wrong with the layout of ",G="bottom",F="Wrong 'left' argument. ",E="baseline",D="marginBottom",C="qx.ui.core.LayoutItem",B="center",A="marginTop",z="!",t="allowGrowX",u="middle",r="marginLeft",s="allowShrinkX",p="top",q="right",n="marginRight",o="abstract",v="Wrong 'top' argument. ",w="Wrong 'height' argument. ",y="allowGrowY",x="left";
qx.Class.define(C,{type:o,extend:qx.core.Object,properties:{minWidth:{check:m,nullable:true,apply:l,init:null,themeable:true},width:{check:m,nullable:true,apply:l,init:null,themeable:true},maxWidth:{check:m,nullable:true,apply:l,init:null,themeable:true},minHeight:{check:m,nullable:true,apply:l,init:null,themeable:true},height:{check:m,nullable:true,apply:l,init:null,themeable:true},maxHeight:{check:m,nullable:true,apply:l,init:null,themeable:true},allowGrowX:{check:k,apply:j,init:true,themeable:true},allowShrinkX:{check:k,apply:j,init:true,themeable:true},allowGrowY:{check:k,apply:j,init:true,themeable:true},allowShrinkY:{check:k,apply:j,init:true,themeable:true},allowStretchX:{group:[t,s],mode:h,themeable:true},allowStretchY:{group:[y,d],mode:h,themeable:true},marginTop:{check:m,init:0,apply:i,themeable:true},marginRight:{check:m,init:0,apply:i,themeable:true},marginBottom:{check:m,init:0,apply:i,themeable:true},marginLeft:{check:m,init:0,apply:i,themeable:true},margin:{group:[A,n,D,r],mode:h,themeable:true},alignX:{check:[x,B,q],nullable:true,apply:g,themeable:true},alignY:{check:[p,u,G,E],nullable:true,apply:g,themeable:true}},members:{__bS:null,__bT:null,__bU:null,__bV:null,__bW:null,__bX:null,__bY:null,getBounds:function(){return this.__bX||this.__bT||null;
},clearSeparators:function(){},renderSeparator:function(Y,ba){},renderLayout:function(bc,top,bd,be){if(qx.core.Variant.isSet(f,e)){var bf=H+this.toString()+z;
this.assertInteger(bc,F+bf);
this.assertInteger(top,v+bf);
this.assertInteger(bd,I+bf);
this.assertInteger(be,w+bf);
}var bg=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bg=this._getHeightForWidth(bd);
}
if(bg!=null&&bg!==this.__bS){this.__bS=bg;
qx.ui.core.queue.Layout.add(this);
return null;
}var bi=this.__bT;

if(!bi){bi=this.__bT={};
}var bh={};

if(bc!==bi.left||top!==bi.top){bh.position=true;
bi.left=bc;
bi.top=top;
}
if(bd!==bi.width||be!==bi.height){bh.size=true;
bi.width=bd;
bi.height=be;
}if(this.__bU){bh.local=true;
delete this.__bU;
}
if(this.__bW){bh.margin=true;
delete this.__bW;
}return bh;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__bU;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__bU=true;
this.__bV=null;
},getSizeHint:function(R){var S=this.__bV;

if(S){return S;
}
if(R===false){return null;
}S=this.__bV=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__bS&&this.getHeight()==null){S.height=this.__bS;
}if(S.minWidth>S.width){S.width=S.minWidth;
}
if(S.maxWidth<S.width){S.width=S.maxWidth;
}
if(!this.getAllowGrowX()){S.maxWidth=S.width;
}
if(!this.getAllowShrinkX()){S.minWidth=S.width;
}if(S.minHeight>S.height){S.height=S.minHeight;
}
if(S.maxHeight<S.height){S.height=S.maxHeight;
}
if(!this.getAllowGrowY()){S.maxHeight=S.height;
}
if(!this.getAllowShrinkY()){S.minHeight=S.height;
}return S;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var bb=this._getLayout();

if(bb){return bb.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(P){var Q=this._getLayout();

if(Q&&Q.hasHeightForWidth()){return Q.getHeightForWidth(P);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__bW=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__bX;
},setUserBounds:function(a,top,b,c){this.__bX={left:a,top:top,width:b,height:c};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__bX;
qx.ui.core.queue.Layout.add(this);
},__ca:{},setLayoutProperties:function(T){if(T==null){return;
}var U=this.__bY;

if(!U){U=this.__bY={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(T);
}for(var V in T){if(T[V]==null){delete U[V];
}else{U[V]=T[V];
}}},getLayoutProperties:function(){return this.__bY||this.__ca;
},clearLayoutProperties:function(){delete this.__bY;
},updateLayoutProperties:function(bj){var bk=this._getLayout();

if(bk){if(qx.core.Variant.isSet(f,e)){if(bj){for(var bl in bj){if(bj[bl]!==null){bk.verifyLayoutProperty(this,bl,bj[bl]);
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
},clone:function(){var W=qx.core.Object.prototype.clone.call(this);
var X=this.__bY;

if(X){W.__bY=qx.lang.Object.clone(X);
}return W;
}},destruct:function(){this.$$parent=this.$$subparent=this.__bY=this.__bT=this.__bX=this.__bV=null;
}});
})();
(function(){var n="qx.debug",m="qx.ui.core.DecoratorFactory",l="qxType",k="",j="decorator",i="$$nopool$$",h="qx.ui.core.DecoratorFactory[",g="] ",f="on",e="keys: ",d=", elements: ";
qx.Class.define(m,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cb={};
},statics:{MAX_SIZE:15,__cc:i},members:{__cb:null,getDecoratorElement:function(s){var x=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(s)){var v=s;
var u=qx.theme.manager.Decoration.getInstance().resolve(s);
}else{var v=x.__cc;
u=s;
}var w=this.__cb;

if(w[v]&&w[v].length>0){var t=w[v].pop();
}else{var t=this._createDecoratorElement(u,v);
}t.$$pooled=false;
return t;
},poolDecorator:function(o){if(!o||o.$$pooled){return;
}var r=qx.ui.core.DecoratorFactory;
var p=o.getId();

if(p==r.__cc){o.dispose();
return;
}var q=this.__cb;

if(!q[p]){q[p]=[];
}
if(q[p].length>r.MAX_SIZE){o.dispose();
}else{o.$$pooled=true;
q[p].push(o);
}},_createDecoratorElement:function(a,b){var c=new qx.html.Decorator(a,b);

if(qx.core.Variant.isSet(n,f)){c.setAttribute(l,j);
}return c;
},toString:qx.core.Variant.select(n,{"on":function(){var y=0;
var z=0;

for(var A in this.__cb){y+=1;
z+=this.__cb[A].length;
}return [h,this.$$hash,g,e,y,d,z].join(k);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var C=this.__cb;

for(var B in C){qx.util.DisposeUtil.disposeArray(C,B);
}}this.__cb=null;
}});
})();
(function(){var fH="on",fG="px",fF="qx.debug",fE="Boolean",fD="qx.event.type.Mouse",fC="qx.event.type.Drag",fB="visible",fA="qx.event.type.Focus",fz="Integer",fy="excluded",eO="qx.event.type.Data",eN="_applyPadding",eM="qx.event.type.Event",eL="hidden",eK="contextmenu",eJ="String",eI="tabIndex",eH="backgroundColor",eG="focused",eF="changeVisibility",fO="mshtml",fP="hovered",fM="qx.event.type.KeySequence",fN="qx.client",fK="absolute",fL="drag",fI="div",fJ="object",fQ="disabled",fR="move",fn="dragstart",fm="qx.dynlocale",fp="dragchange",fo="dragend",fr="resize",fq="Decorator",ft="zIndex",fs="opacity",fl="default",fk="Color",dv="qxType",dw="changeToolTipText",dx="beforeContextmenuOpen",dy="_applyNativeContextMenu",dz="content",dA="_applyBackgroundColor",dB="_applyFocusable",dC="changeShadow",dD="qx.event.type.KeyInput",dE="createChildControl",fV="__cj",fU="Invalid left decorator inset detected: ",fT="Font",fS="_applyShadow",ga="Invalid layout data: ",fY="Could not add widget to itself: ",fX="_applyEnabled",fW="_applySelectable",gc="Number",gb="_applyKeepActive",ee="_applyVisibility",ef="The 'after' widget is not a child of this widget!",ec="repeat",ed="qxDraggable",ei="syncAppearance",ej="paddingLeft",eg="_applyDroppable",eh="Wrong 'left' argument. ",ea="protector",eb="__ce",dM="#",dL="qx.event.type.MouseWheel",dO="_applyCursor",dN="_applyDraggable",dI="changeTextColor",dH="$$widget",dK="changeContextMenu",dJ="paddingTop",dG="changeSelectable",dF="hideFocus",ep="Invalid top decorator inset detected: ",eq="none",er="__co",es="__cd",ek="outline",em="The 'before' widget is not a child of this widget!",en="_applyAppearance",eo=" returned an invalid size hint!",et="_applyOpacity",eu="url(",dW=")",dV="qx.ui.core.Widget",dU="minHeight is larger than maxHeight!",dT="_applyFont",dS="cursor",dR="qxDroppable",dQ="changeZIndex",dP="__cq",dY="changeEnabled",dX="changeFont",ev="_applyDecorator",ew="_applyZIndex",ex="__ci",ey="_applyTextColor",ez="qx.ui.menu.Menu",eA="Invalid right decorator inset detected: ",eB="Invalid widget to add: ",eC="_applyToolTipText",eD="The layout of the widget",eE="true",eS="widget",eR="Wrong 'top' argument. ",eQ="changeDecorator",eP="changeBackgroundColor",eW="_applyTabIndex",eV="__ch",eU="Invalid bottom decorator inset detected: ",eT="changeAppearance",eY="shorthand",eX="/",fg="",fh="_applyContextMenu",fe="container",ff="paddingBottom",fc="changeNativeContextMenu",fd="qx.ui.tooltip.ToolTip",fa="qxKeepActive",fb="_applyKeepFocus",fi="paddingRight",fj="minWidth is larger than maxWidth!",fv="changeLocale",fu="qxKeepFocus",fx="__cm",fw="qx/static/blank.gif";
qx.Class.define(dV,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__cd=this._createContainerElement();
this.__ce=this.__cp();
this.__cd.add(this.__ce);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eM,disappear:eM,createChildControl:eO,resize:eO,move:eO,syncAppearance:eO,mousemove:fD,mouseover:fD,mouseout:fD,mousedown:fD,mouseup:fD,click:fD,dblclick:fD,contextmenu:fD,beforeContextmenuOpen:fD,mousewheel:dL,keyup:fM,keydown:fM,keypress:fM,keyinput:dD,focus:fA,blur:fA,focusin:fA,focusout:fA,activate:fA,deactivate:fA,capture:eM,losecapture:eM,drop:fC,dragleave:fC,dragover:fC,drag:fC,dragstart:fC,dragend:fC,dragchange:fC,droprequest:fC},properties:{paddingTop:{check:fz,init:0,apply:eN,themeable:true},paddingRight:{check:fz,init:0,apply:eN,themeable:true},paddingBottom:{check:fz,init:0,apply:eN,themeable:true},paddingLeft:{check:fz,init:0,apply:eN,themeable:true},padding:{group:[dJ,fi,ff,ej],mode:eY,themeable:true},zIndex:{nullable:true,init:null,apply:ew,event:dQ,check:fz,themeable:true},decorator:{nullable:true,init:null,apply:ev,event:eQ,check:fq,themeable:true},shadow:{nullable:true,init:null,apply:fS,event:dC,check:fq,themeable:true},backgroundColor:{nullable:true,check:fk,apply:dA,event:eP,themeable:true},textColor:{nullable:true,check:fk,apply:ey,event:dI,themeable:true,inheritable:true},font:{nullable:true,apply:dT,check:fT,event:dX,themeable:true,inheritable:true,dereference:true},opacity:{check:gc,apply:et,themeable:true,nullable:true,init:null},cursor:{check:eJ,apply:dO,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:fd,nullable:true},toolTipText:{check:eJ,nullable:true,event:dw,apply:eC},toolTipIcon:{check:eJ,nullable:true,event:dw},blockToolTip:{check:fE,init:false},visibility:{check:[fB,eL,fy],init:fB,apply:ee,event:eF},enabled:{init:true,check:fE,inheritable:true,apply:fX,event:dY},anonymous:{init:false,check:fE},tabIndex:{check:fz,nullable:true,apply:eW},focusable:{check:fE,init:false,apply:dB},keepFocus:{check:fE,init:false,apply:fb},keepActive:{check:fE,init:false,apply:gb},draggable:{check:fE,init:false,apply:dN},droppable:{check:fE,init:false,apply:eg},selectable:{check:fE,init:false,event:dG,apply:fW},contextMenu:{check:ez,apply:fh,nullable:true,event:dK},nativeContextMenu:{check:fE,init:false,themeable:true,event:fc,apply:dy},appearance:{check:eJ,init:eS,apply:en,event:eT}},statics:{DEBUG:false,getWidgetByElement:function(cN){while(cN){var cO=cN.$$widget;
if(cO!=null){return qx.core.ObjectRegistry.fromHashCode(cO);
}try{cN=cN.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cw){while(cw){if(parent==cw){return true;
}cw=cw.getLayoutParent();
}return false;
},__cf:new qx.ui.core.DecoratorFactory(),__cg:new qx.ui.core.DecoratorFactory()},members:{__cd:null,__ce:null,__ch:null,__ci:null,__cj:null,__ck:null,__cl:null,__cm:null,_getLayout:function(){return this.__cm;
},_setLayout:function(y){if(qx.core.Variant.isSet(fF,fH)){if(y){this.assertInstance(y,qx.ui.layout.Abstract);
}}
if(this.__cm){this.__cm.connectToWidget(null);
}
if(y){y.connectToWidget(this);
}this.__cm=y;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var du=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(du);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(du);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__cn:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cr=qx.theme.manager.Decoration.getInstance();
var ct=cr.resolve(a).getInsets();
var cs=cr.resolve(b).getInsets();

if(ct.top!=cs.top||ct.right!=cs.right||ct.bottom!=cs.bottom||ct.left!=cs.left){return true;
}return false;
},renderLayout:function(g,top,h,j){var t=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,g,top,h,j);
if(!t){return;
}var m=this.getContainerElement();
var content=this.getContentElement();
var q=t.size||this._updateInsets;
var u=fG;
var r={};
if(t.position){r.left=g+u;
r.top=top+u;
}if(t.size){r.width=h+u;
r.height=j+u;
}
if(t.position||t.size){m.setStyles(r);
}
if(q||t.local||t.margin){var k=this.getInsets();
var innerWidth=h-k.left-k.right;
var innerHeight=j-k.top-k.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var o={};

if(this._updateInsets){o.left=k.left+u;
o.top=k.top+u;
}
if(q){o.width=innerWidth+u;
o.height=innerHeight+u;
}
if(q||this._updateInsets){content.setStyles(o);
}
if(t.size){var s=this.__cj;

if(s){s.setStyles({width:h+fG,height:j+fG});
}}
if(t.size||this._updateInsets){if(this.__ch){this.__ch.resize(h,j);
}}
if(t.size){if(this.__ci){var k=this.__ci.getInsets();
var p=h+k.left+k.right;
var n=j+k.top+k.bottom;
this.__ci.resize(p,n);
}}
if(q||t.local||t.margin){if(this.__cm&&this.hasLayoutChildren()){this.__cm.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(t.position&&this.hasListener(fR)){this.fireDataEvent(fR,this.getBounds());
}
if(t.size&&this.hasListener(fr)){this.fireDataEvent(fr,this.getBounds());
}delete this._updateInsets;
return t;
},__co:null,clearSeparators:function(){var bV=this.__co;

if(!bV){return;
}var bW=qx.ui.core.Widget.__cf;
var content=this.getContentElement();
var bU;

for(var i=0,l=bV.length;i<l;i++){bU=bV[i];
bW.poolDecorator(bU);
content.remove(bU);
}bV.length=0;
},renderSeparator:function(gu,gv){var gw=qx.ui.core.Widget.__cf.getDecoratorElement(gu);
this.getContentElement().add(gw);
gw.resize(gv.width,gv.height);
gw.setStyles({left:gv.left+fG,top:gv.top+fG});
if(!this.__co){this.__co=[gw];
}else{this.__co.push(gw);
}},_computeSizeHint:function(){var bd=this.getWidth();
var bc=this.getMinWidth();
var X=this.getMaxWidth();
var bb=this.getHeight();
var Y=this.getMinHeight();
var ba=this.getMaxHeight();

if(qx.core.Variant.isSet(fF,fH)){if(bc!==null&&X!==null){this.assert(bc<=X,fj);
}
if(Y!==null&&ba!==null){this.assert(Y<=ba,dU);
}}var be=this._getContentHint();
var W=this.getInsets();
var bg=W.left+W.right;
var bf=W.top+W.bottom;

if(bd==null){bd=be.width+bg;
}
if(bb==null){bb=be.height+bf;
}
if(bc==null){bc=bg;

if(be.minWidth!=null){bc+=be.minWidth;
}}
if(Y==null){Y=bf;

if(be.minHeight!=null){Y+=be.minHeight;
}}
if(X==null){if(be.maxWidth==null){X=Infinity;
}else{X=be.maxWidth+bg;
}}
if(ba==null){if(be.maxHeight==null){ba=Infinity;
}else{ba=be.maxHeight+bf;
}}return {width:bd,minWidth:bc,maxWidth:X,height:bb,minHeight:Y,maxHeight:ba};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__cm){this.__cm.invalidateLayoutCache();
}},_getContentHint:function(){var bS=this.__cm;

if(bS){if(this.hasLayoutChildren()){var bT=bS.getSizeHint();

if(qx.core.Variant.isSet(fF,fH)){var bR=eD+this.toString()+eo;
this.assertInteger(bT.width,eh+bR);
this.assertInteger(bT.height,eR+bR);
}return bT;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(cy){var cC=this.getInsets();
var cF=cC.left+cC.right;
var cE=cC.top+cC.bottom;
var cD=cy-cF;
var cA=this._getLayout();

if(cA&&cA.hasHeightForWidth()){var cz=cA.getHeightForWidth(cy);
}else{cz=this._getContentHeightForWidth(cD);
}var cB=cz+cE;
return cB;
},_getContentHeightForWidth:function(hc){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var ci=this.getPaddingRight();
var ck=this.getPaddingBottom();
var cj=this.getPaddingLeft();

if(this.__ch){var ch=this.__ch.getInsets();

if(qx.core.Variant.isSet(fF,fH)){this.assertNumber(ch.top,ep+ch.top);
this.assertNumber(ch.right,eA+ch.right);
this.assertNumber(ch.bottom,eU+ch.bottom);
this.assertNumber(ch.left,fU+ch.left);
}top+=ch.top;
ci+=ch.right;
ck+=ch.bottom;
cj+=ch.left;
}return {"top":top,"right":ci,"bottom":ck,"left":cj};
},getInnerSize:function(){var bx=this.getBounds();

if(!bx){return null;
}var bw=this.getInsets();
return {width:bx.width-bw.left-bw.right,height:bx.height-bw.top-bw.bottom};
},show:function(){this.setVisibility(fB);
},hide:function(){this.setVisibility(eL);
},exclude:function(){this.setVisibility(fy);
},isVisible:function(){return this.getVisibility()===fB;
},isHidden:function(){return this.getVisibility()!==fB;
},isExcluded:function(){return this.getVisibility()===fy;
},isSeeable:function(){var gT=this.getContainerElement().getDomElement();

if(gT){return gT.offsetWidth>0;
}var gS=this;

do{if(!gS.isVisible()){return false;
}
if(gS.isRootWidget()){return true;
}gS=gS.getLayoutParent();
}while(gS);
return false;
},_createContainerElement:function(){var hr={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(fF,fH)){hr.qxType=fe;
hr.qxClass=this.classname;
}var hq={zIndex:0,position:fK};
return new qx.html.Element(fI,hq,hr);
},__cp:function(){var cb=this._createContentElement();

if(qx.core.Variant.isSet(fF,fH)){cb.setAttribute(dv,dz);
}cb.setStyles({"position":fK,"zIndex":10});
return cb;
},_createContentElement:function(){return new qx.html.Element(fI,{overflowX:eL,overflowY:eL});
},getContainerElement:function(){return this.__cd;
},getContentElement:function(){return this.__ce;
},getDecoratorElement:function(){return this.__ch||null;
},getShadowElement:function(){return this.__ci||null;
},__cq:null,getLayoutChildren:function(){var bi=this.__cq;

if(!bi){return this.__cr;
}var bj;

for(var i=0,l=bi.length;i<l;i++){var bh=bi[i];

if(bh.hasUserBounds()||bh.isExcluded()){if(bj==null){bj=bi.concat();
}qx.lang.Array.remove(bj,bh);
}}return bj||bi;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dh=this.__cm;

if(dh){dh.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dm=this.__cq;

if(!dm){return false;
}var dn;

for(var i=0,l=dm.length;i<l;i++){dn=dm[i];

if(!dn.hasUserBounds()&&!dn.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__cr:[],_getChildren:function(){return this.__cq||this.__cr;
},_indexOf:function(cu){var cv=this.__cq;

if(!cv){return -1;
}return cv.indexOf(cu);
},_hasChildren:function(){var x=this.__cq;
return x!=null&&(!!x[0]);
},addChildrenToQueue:function(gU){var gV=this.__cq;

if(!gV){return;
}var gW;

for(var i=0,l=gV.length;i<l;i++){gW=gV[i];
gU[gW.$$hash]=gW;
gW.addChildrenToQueue(gU);
}},_add:function(cY,da){if(cY.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,cY);
}
if(this.__cq){this.__cq.push(cY);
}else{this.__cq=[cY];
}this.__cs(cY,da);
},_addAt:function(hg,hh,hi){if(!this.__cq){this.__cq=[];
}if(hg.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,hg);
}var hj=this.__cq[hh];

if(hj===hg){return hg.setLayoutProperties(hi);
}
if(hj){qx.lang.Array.insertBefore(this.__cq,hg,hj);
}else{this.__cq.push(hg);
}this.__cs(hg,hi);
},_addBefore:function(cl,cm,cn){if(qx.core.Variant.isSet(fF,fH)){this.assertInArray(cm,this._getChildren(),em);
}
if(cl==cm){return;
}
if(!this.__cq){this.__cq=[];
}if(cl.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,cl);
}qx.lang.Array.insertBefore(this.__cq,cl,cm);
this.__cs(cl,cn);
},_addAfter:function(cK,cL,cM){if(qx.core.Variant.isSet(fF,fH)){this.assertInArray(cL,this._getChildren(),ef);
}
if(cK==cL){return;
}
if(!this.__cq){this.__cq=[];
}if(cK.getLayoutParent()==this){qx.lang.Array.remove(this.__cq,cK);
}qx.lang.Array.insertAfter(this.__cq,cK,cL);
this.__cs(cK,cM);
},_remove:function(gR){if(!this.__cq){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__cq,gR);
this.__ct(gR);
},_removeAt:function(F){if(!this.__cq){throw new Error("This widget has no children!");
}var G=this.__cq[F];
qx.lang.Array.removeAt(this.__cq,F);
this.__ct(G);
return G;
},_removeAll:function(){if(!this.__cq){return;
}var cx=this.__cq.concat();
this.__cq.length=0;

for(var i=cx.length-1;i>=0;i--){this.__ct(cx[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__cs:function(cG,cH){if(qx.core.Variant.isSet(fF,fH)){this.assertInstance(cG,qx.ui.core.LayoutItem,eB+cG);
this.assertNotIdentical(cG,this,fY+cG);

if(cH!=null){this.assertType(cH,fJ,ga+cH);
}}var parent=cG.getLayoutParent();

if(parent&&parent!=this){parent._remove(cG);
}cG.setLayoutParent(this);
if(cH){cG.setLayoutProperties(cH);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(cG);
}},__ct:function(bQ){if(qx.core.Variant.isSet(fF,fH)){this.assertNotUndefined(bQ);
}
if(bQ.getLayoutParent()!==this){throw new Error("Remove Error: "+bQ+" is not a child of this widget!");
}bQ.setLayoutParent(null);
if(this.__cm){this.__cm.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(bQ);
}},capture:function(hk){this.getContainerElement().capture(hk);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(gs,gt,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__cj){return;
}var bo=this.__cj=new qx.html.Element;

if(qx.core.Variant.isSet(fF,fH)){bo.setAttribute(dv,ea);
}bo.setStyles({position:fK,top:0,left:0,zIndex:7});
var bp=this.getBounds();

if(bp){this.__cj.setStyles({width:bp.width+fG,height:bp.height+fG});
}if(qx.core.Variant.isSet(fN,fO)){bo.setStyles({backgroundImage:eu+qx.util.ResourceManager.getInstance().toUri(fw)+dW,backgroundRepeat:ec});
}this.getContainerElement().add(bo);
},_applyDecorator:function(gB,gC){if(qx.core.Variant.isSet(fF,fH)){if(gB&&typeof gB===fJ){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+gB);
}}}var gG=qx.ui.core.Widget.__cf;
var gE=this.getContainerElement();
if(!this.__cj&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gC){gE.remove(this.__ch);
gG.poolDecorator(this.__ch);
}if(gB){var gF=this.__ch=gG.getDecoratorElement(gB);
gF.setStyle(ft,5);
var gD=this.getBackgroundColor();
gF.tint(gD);
gE.add(gF);
}else{delete this.__ch;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gB&&!gC&&gD){this.getContainerElement().setStyle(eH,null);
}if(this.__cn(gC,gB)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gB){var gH=this.getBounds();

if(gH){gF.resize(gH.width,gH.height);
this.__cj&&
this.__cj.setStyles({width:gH.width+fG,height:gH.height+fG});
}}},_applyShadow:function(gd,ge){var gl=qx.ui.core.Widget.__cg;
var gg=this.getContainerElement();
if(ge){gg.remove(this.__ci);
gl.poolDecorator(this.__ci);
}if(gd){var gi=this.__ci=gl.getDecoratorElement(gd);
gg.add(gi);
var gk=gi.getInsets();
gi.setStyles({left:(-gk.left)+fG,top:(-gk.top)+fG});
var gj=this.getBounds();

if(gj){var gh=gj.width+gk.left+gk.right;
var gf=gj.height+gk.top+gk.bottom;
gi.resize(gh,gf);
}gi.tint(null);
}else{delete this.__ci;
}},_applyToolTipText:function(cc,cd){if(qx.core.Variant.isSet(fm,fH)){if(this.__cl){return;
}var ce=qx.locale.Manager.getInstance();
this.__cl=ce.addListener(fv,function(){if(cc&&cc.translate){this.setToolTipText(cc.translate());
}},this);
}},_applyTextColor:function(cU,cV){},_applyZIndex:function(d,f){this.getContainerElement().setStyle(ft,d==null?0:d);
},_applyVisibility:function(J,K){var L=this.getContainerElement();

if(J===fB){L.show();
}else{L.hide();
}var parent=this.$$parent;

if(parent&&(K==null||J==null||K===fy||J===fy)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(dc,dd){this.getContainerElement().setStyle(fs,dc==1?null:dc);
if(qx.core.Variant.isSet(fN,fO)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var de=(dc==1||dc==null)?null:0.99;
this.getContentElement().setStyle(fs,de);
}}},_applyCursor:function(dr,ds){if(dr==null&&!this.isSelectable()){dr=fl;
}this.getContainerElement().setStyle(dS,dr,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(gK,gL){var gM=this.getBackgroundColor();
var gO=this.getContainerElement();

if(this.__ch){this.__ch.tint(gM);
gO.setStyle(eH,null);
}else{var gN=qx.theme.manager.Color.getInstance().resolve(gM);
gO.setStyle(eH,gN);
}},_applyFont:function(gP,gQ){},__cu:null,$$stateChanges:null,_forwardStates:null,hasState:function(cS){var cT=this.__cu;
return cT&&cT[cS];
},addState:function(hl){var hm=this.__cu;

if(!hm){hm=this.__cu={};
}
if(hm[hl]){return;
}this.__cu[hl]=true;
if(hl===fP){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var hp=this.__cx;

if(forward&&forward[hl]&&hp){var hn;

for(var ho in hp){hn=hp[ho];

if(hn instanceof qx.ui.core.Widget){hp[ho].addState(hl);
}}}},removeState:function(bz){var bA=this.__cu;

if(!bA||!bA[bz]){return;
}delete this.__cu[bz];
if(bz===fP){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bD=this.__cx;

if(forward&&forward[bz]&&bD){for(var bC in bD){var bB=bD[bC];

if(bB instanceof qx.ui.core.Widget){bB.removeState(bz);
}}}},replaceState:function(z,A){var B=this.__cu;

if(!B){B=this.__cu={};
}
if(!B[A]){B[A]=true;
}
if(B[z]){delete B[z];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var E=this.__cx;

if(forward&&forward[A]&&E){for(var D in E){var C=E[D];

if(C instanceof qx.ui.core.Widget){C.replaceState(z,A);
}}}},__cv:null,__cw:null,syncAppearance:function(){var Q=this.__cu;
var P=this.__cv;
var R=qx.theme.manager.Appearance.getInstance();
var N=qx.core.Property.$$method.setThemed;
var V=qx.core.Property.$$method.resetThemed;
if(this.__cw){delete this.__cw;
if(P){var M=R.styleFrom(P,Q,null,this.getAppearance());
if(M){P=null;
}}}if(!P){var O=this;
var U=[];

do{U.push(O.$$subcontrol||O.getAppearance());
}while(O=O.$$subparent);
P=this.__cv=U.reverse().join(eX).replace(/#[0-9]+/g,fg);
}var S=R.styleFrom(P,Q,null,this.getAppearance());

if(S){if(M){for(var T in M){if(S[T]===undefined){this[V[T]]();
}}}if(qx.core.Variant.isSet(fF,fH)){for(var T in S){if(!this[N[T]]){throw new Error(this.classname+' has no themeable property "'+T+'" while styling '+P);
}}}for(var T in S){S[T]===undefined?this[V[T]]():this[N[T]](S[T]);
}}else if(M){for(var T in M){this[V[T]]();
}}this.fireDataEvent(ei,this.__cu);
},_applyAppearance:function(bk,bl){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__ck){qx.ui.core.queue.Appearance.add(this);
this.__ck=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cw=true;
qx.ui.core.queue.Appearance.add(this);
var cq=this.__cx;

if(cq){var co;

for(var cp in cq){co=cq[cp];

if(co instanceof qx.ui.core.Widget){co.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var c=this;

while(c.getAnonymous()){c=c.getLayoutParent();

if(!c){return null;
}}return c;
},getFocusTarget:function(){var dt=this;

if(!dt.getEnabled()){return null;
}
while(dt.getAnonymous()||!dt.getFocusable()){dt=dt.getLayoutParent();

if(!dt||!dt.getEnabled()){return null;
}}return dt;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gx,gy){var gz=this.getFocusElement();
if(gx){var gA=this.getTabIndex();

if(gA==null){gA=1;
}gz.setAttribute(eI,gA);
if(qx.core.Variant.isSet(fN,fO)){gz.setAttribute(dF,eE);
}else{gz.setStyle(ek,eq);
}}else{if(gz.isNativelyFocusable()){gz.setAttribute(eI,-1);
}else if(gy){gz.setAttribute(eI,null);
}}},_applyKeepFocus:function(ha){var hb=this.getFocusElement();
hb.setAttribute(fu,ha?fH:null);
},_applyKeepActive:function(bE){var bF=this.getContainerElement();
bF.setAttribute(fa,bE?fH:null);
},_applyTabIndex:function(hf){if(hf==null){hf=1;
}else if(hf<1||hf>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&hf!=null){this.getFocusElement().setAttribute(eI,hf);
}},_applySelectable:function(H,I){if(I!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(H);
this.getContentElement().setSelectable(H);
},_applyEnabled:function(go,gp){if(go===false){this.addState(fQ);
this.removeState(fP);
if(this.isFocusable()){this.removeState(eG);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(fQ);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(v,w,name){},_applyContextMenu:function(gX,gY){if(gY){gY.removeState(eK);

if(gY.getOpener()==this){gY.resetOpener();
}
if(!gX){this.removeListener(eK,this._onContextMenuOpen);
gY.removeListener(eF,this._onBeforeContextMenuOpen,this);
}}
if(gX){gX.setOpener(this);
gX.addState(eK);

if(!gY){this.addListener(eK,this._onContextMenuOpen);
gX.addListener(eF,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fB&&this.hasListener(dx)){this.fireDataEvent(dx,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gI,gJ){if(!this.isEnabled()&&gI===true){gI=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gI){this.addListener(fn,this._onDragStart);
this.addListener(fL,this._onDrag);
this.addListener(fo,this._onDragEnd);
this.addListener(fp,this._onDragChange);
}else{this.removeListener(fn,this._onDragStart);
this.removeListener(fL,this._onDrag);
this.removeListener(fo,this._onDragEnd);
this.removeListener(fp,this._onDragChange);
}this.getContainerElement().setAttribute(ed,gI?fH:null);
},_applyDroppable:function(bq,br){if(!this.isEnabled()&&bq===true){bq=false;
}this.getContainerElement().setAttribute(dR,bq?fH:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fl);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var bX=qx.ui.core.DragDropCursor.getInstance();
var bY=e.getCurrentAction();
bY?bX.setAction(bY):bX.resetAction();
},visualizeFocus:function(){this.addState(eG);
},visualizeBlur:function(){this.removeState(eG);
},scrollChildIntoView:function(bs,bt,bu,bv){this.scrollChildIntoViewX(bs,bt,bv);
this.scrollChildIntoViewY(bs,bu,bv);
},scrollChildIntoViewX:function(cP,cQ,cR){this.getContentElement().scrollChildIntoViewX(cP.getContainerElement(),cQ,cR);
},scrollChildIntoViewY:function(bG,bH,bI){this.getContentElement().scrollChildIntoViewY(bG.getContainerElement(),bH,bI);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(ca){if(!this.__cx){return false;
}return !!this.__cx[ca];
},__cx:null,_getCreatedChildControls:function(){return this.__cx;
},getChildControl:function(hs,ht){if(!this.__cx){if(ht){return null;
}this.__cx={};
}var hu=this.__cx[hs];

if(hu){return hu;
}
if(ht===true){return null;
}return this._createChildControl(hs);
},_showChildControl:function(cI){var cJ=this.getChildControl(cI);
cJ.show();
return cJ;
},_excludeChildControl:function(bm){var bn=this.getChildControl(bm,true);

if(bn){bn.exclude();
}},_isChildControlVisible:function(df){var dg=this.getChildControl(df,true);

if(dg){return dg.isVisible();
}return false;
},_createChildControl:function(bL){if(!this.__cx){this.__cx={};
}else if(this.__cx[bL]){throw new Error("Child control '"+bL+"' already created!");
}var bP=bL.indexOf(dM);

if(bP==-1){var bM=this._createChildControlImpl(bL);
}else{var bM=this._createChildControlImpl(bL.substring(0,bP));
}
if(!bM){throw new Error("Unsupported control: "+bL);
}bM.$$subcontrol=bL;
bM.$$subparent=this;
var bN=this.__cu;
var forward=this._forwardStates;

if(bN&&forward&&bM instanceof qx.ui.core.Widget){for(var bO in bN){if(forward[bO]){bM.addState(bO);
}}}this.fireDataEvent(dE,bM);
return this.__cx[bL]=bM;
},_createChildControlImpl:function(db){return null;
},_disposeChildControls:function(){var dl=this.__cx;

if(!dl){return;
}var dj=qx.ui.core.Widget;

for(var dk in dl){var di=dl[dk];

if(!dj.contains(this,di)){di.destroy();
}else{di.dispose();
}}delete this.__cx;
},_findTopControl:function(){var by=this;

while(by){if(!by.$$subparent){return by;
}by=by.$$subparent;
}return null;
},getContainerLocation:function(dp){var dq=this.getContainerElement().getDomElement();
return dq?qx.bom.element.Location.get(dq,dp):null;
},getContentLocation:function(bJ){var bK=this.getContentElement().getDomElement();
return bK?qx.bom.element.Location.get(bK,bJ):null;
},setDomLeft:function(gm){var gn=this.getContainerElement().getDomElement();

if(gn){gn.style.left=gm+fG;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hd){var he=this.getContainerElement().getDomElement();

if(he){he.style.top=hd+fG;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(cf,top){var cg=this.getContainerElement().getDomElement();

if(cg){cg.style.left=cf+fG;
cg.style.top=top+fG;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var gq=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var gr=this.getChildren();

for(var i=0,l=gr.length;i<l;i++){gq.add(gr[i].clone());
}}return gq;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fm,fH)){if(this.__cl){qx.locale.Manager.getInstance().removeListenerById(this.__cl);
}}this.getContainerElement().setAttribute(dH,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var cX=qx.ui.core.Widget;
var cW=this.getContainerElement();

if(this.__ch){cW.remove(this.__ch);
cX.__cf.poolDecorator(this.__ch);
}
if(this.__ci){cW.remove(this.__ci);
cX.__cg.poolDecorator(this.__ci);
}this.clearSeparators();
this.__ch=this.__ci=this.__co=null;
}else{this._disposeArray(er);
this._disposeObjects(eV,ex);
}this._disposeArray(dP);
this.__cu=this.__cx=null;
this._disposeObjects(fx,es,eb,fV);
}});
})();
(function(){var g="qx.event.type.Data",f="qx.ui.container.Composite",e="addChildWidget",d="removeChildWidget";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){qx.ui.core.Widget.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:g,removeChildWidget:g},members:{_afterAddChild:function(c){this.fireNonBubblingEvent(e,qx.event.type.Data,[c]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(d,qx.event.type.Data,[i]);
}},defer:function(a,b){qx.ui.core.MChildrenHandling.remap(b);
qx.ui.core.MLayoutHandling.remap(b);
}});
})();
(function(){var E="keep-align",D="qx.debug",C="'placementModeX' and 'placementModeY' instead.",B="The property 'smart' is deprecated. Please us the properties ",A="on",z="Integer",y="interval",x="direct",w="disappear",v="best-fit",X="mouse",W="bottom-left",V="Boolean",U="Invalid attribute 'value'.",T="bottom-right",S="widget",R="qx.ui.core.MPlacement",Q="left-top",P="offsetRight",O="shorthand",L="offsetLeft",M="top-left",J="appear",K="offsetBottom",H="top-right",I="offsetTop",F="right-bottom",G="right-top",N="left-bottom";
qx.Mixin.define(R,{properties:{position:{check:[M,H,W,T,Q,N,G,F],init:W,themeable:true},placeMethod:{check:[S,X],init:X,themeable:true},domMove:{check:V,init:false},placementModeX:{check:[x,E,v],init:E,themeable:true},placementModeY:{check:[x,E,v],init:E,themeable:true},offsetLeft:{check:z,init:0,themeable:true},offsetTop:{check:z,init:0,themeable:true},offsetRight:{check:z,init:0,themeable:true},offsetBottom:{check:z,init:0,themeable:true},offset:{group:[I,P,K,L],mode:O,themeable:true}},members:{__ih:null,__ii:null,__ij:null,getLayoutLocation:function(j){var m,l,n,top;
l=j.getBounds();
n=l.left;
top=l.top;
var o=l;
j=j.getLayoutParent();

while(j&&!j.isRootWidget()){l=j.getBounds();
n+=l.left;
top+=l.top;
m=j.getInsets();
n+=m.left;
top+=m.top;
j=j.getLayoutParent();
}if(j.isRootWidget()){var k=j.getContainerLocation();

if(k){n+=k.left;
top+=k.top;
}}return {left:n,top:top,right:n+o.width,bottom:top+o.height};
},moveTo:function(c,top){if(this.getDomMove()){this.setDomPosition(c,top);
}else{this.setLayoutProperties({left:c,top:top});
}},placeToWidget:function(bb,bc){if(bc){this.__ik();
this.__ih=qx.lang.Function.bind(this.placeToWidget,this,bb,false);
qx.event.Idle.getInstance().addListener(y,this.__ih);
this.__ij=function(){this.__ik();
};
this.addListener(w,this.__ij,this);
}var bd=bb.getContainerLocation()||this.getLayoutLocation(bb);
this.__im(bd);
},__ik:function(){if(this.__ih){qx.event.Idle.getInstance().removeListener(y,this.__ih);
this.__ih=null;
}
if(this.__ij){this.removeListener(w,this.__ij,this);
this.__ij=null;
}},placeToMouse:function(event){var s=event.getDocumentLeft();
var top=event.getDocumentTop();
var r={left:s,top:top,right:s,bottom:top};
this.__im(r);
},placeToElement:function(f,g){var location=qx.bom.element.Location.get(f);
var h={left:location.left,top:location.top,right:location.left+f.offsetWidth,bottom:location.top+f.offsetHeight};
if(g){this.__ih=qx.lang.Function.bind(this.placeToElement,this,f,false);
qx.event.Idle.getInstance().addListener(y,this.__ih);
this.addListener(w,function(){if(this.__ih){qx.event.Idle.getInstance().removeListener(y,this.__ih);
this.__ih=null;
}},this);
}this.__im(h);
},placeToPoint:function(a){var b={left:a.left,top:a.top,right:a.left,bottom:a.top};
this.__im(b);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__il:function(d){var e=null;

if(this._computePlacementSize){var e=this._computePlacementSize();
}else if(this.isVisible()){var e=this.getBounds();
}
if(e==null){this.addListenerOnce(J,function(){this.__il(d);
},this);
}else{d.call(this,e);
}},__im:function(i){this.__il(function(t){var u=qx.util.placement.Placement.compute(t,this.getLayoutParent().getBounds(),i,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(u.left,u.top);
});
},setSmart:function(Y){if(qx.core.Variant.isSet(D,A)){qx.core.Assert.assertBoolean(Y,U);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,B+C);
}var ba=Y?E:x;
this.set({placementModeX:ba,placementModeY:ba});
},getSmart:function(){if(qx.core.Variant.isSet(D,A)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B+C);
}var p=this.getPlacementModeX()==E?true:false;
var q=this.getPlacementModeY()==E?true:false;
return p&&q;
},resetSmart:function(){if(qx.core.Variant.isSet(D,A)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B+C);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(D,A)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B+C);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(D,A)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,B+C);
}this.setSmart(!this.getSmart());
}},destruct:function(){this.__ik();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(i){qx.ui.container.Composite.call(this,i);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(f,g){qx.ui.container.Composite.prototype._applyVisibility.call(this,f,g);
var h=qx.ui.popup.Manager.getInstance();
f===d?h.add(this):h.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(a,b){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setIcon(b);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(u){var v;

switch(u){case n:v=new qx.ui.basic.Atom;
this._add(v);
break;
}return v||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,u);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(o,p){var q=this.getChildControl(n);
o==null?q.resetIcon:q.setIcon(o);
},_applyLabel:function(w,x){var y=this.getChildControl(n);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(r,s){var t=this.getChildControl(n);
t.setRich(r);
}}});
})();
(function(){var g="qx.ui.core.queue.Layout",f="layout";
qx.Class.define(g,{statics:{__dp:{},remove:function(a){delete this.__dp[a.$$hash];
},add:function(h){this.__dp[h.$$hash]=h;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var j=this.__ds();
for(var i=j.length-1;i>=0;i--){var k=j[i];
if(k.hasValidLayout()){continue;
}if(k.isRootWidget()&&!k.hasUserBounds()){var m=k.getSizeHint();
k.renderLayout(0,0,m.width,m.height);
}else{var l=k.getBounds();
k.renderLayout(l.left,l.top,l.width,l.height);
}}},getNestingLevel:function(b){var c=this.__dr;
var e=0;
var parent=b;
while(true){if(c[parent.$$hash]!=null){e+=c[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
e+=1;
}var d=e;

while(b&&b!==parent){c[b.$$hash]=d--;
b=b.$$parent;
}return e;
},__dq:function(){var A=qx.ui.core.queue.Visibility;
this.__dr={};
var z=[];
var y=this.__dp;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__ds:function(){var q=[];
var s=this.__dq();

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
(function(){var f="qx.event.handler.UserAction";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this.__dt=h;
this.__du=h.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dt:null,__du:null,canHandleEvent:function(a,b){},registerEvent:function(c,d,e){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dt=this.__du=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var d="qx.util.DeferredCallManager",c="singleton";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){this.__dv={};
this.__dw=qx.lang.Function.bind(this.__dA,this);
this.__dx=false;
},members:{__dy:null,__dz:null,__dv:null,__dx:null,__dw:null,schedule:function(a){if(this.__dy==null){this.__dy=window.setTimeout(this.__dw,0);
}var b=a.toHashCode();
if(this.__dz&&this.__dz[b]){return;
}this.__dv[b]=a;
this.__dx=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dz&&this.__dz[f]){this.__dz[f]=null;
return;
}delete this.__dv[f];
if(qx.lang.Object.isEmpty(this.__dv)&&this.__dy!=null){window.clearTimeout(this.__dy);
this.__dy=null;
}},__dA:qx.event.GlobalError.observeMethod(function(){this.__dy=null;
while(this.__dx){this.__dz=qx.lang.Object.clone(this.__dv);
this.__dv={};
this.__dx=false;

for(var h in this.__dz){var g=this.__dz[h];

if(g){this.__dz[h]=null;
g.call();
}}}this.__dz=null;
})},destruct:function(){if(this.__dy!=null){window.clearTimeout(this.__dy);
}this.__dw=this.__dv=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__dB=b;
this.__dC=c||null;
this.__dD=qx.util.DeferredCallManager.getInstance();
},members:{__dB:null,__dC:null,__dD:null,cancel:function(){this.__dD.cancel(this);
},schedule:function(){this.__dD.schedule(this);
},call:function(){this.__dC?this.__dB.apply(this.__dC):this.__dB();
}},destruct:function(d,e){this.cancel();
this.__dC=this.__dB=this.__dD=null;
}});
})();
(function(){var cb="on",ca="element",bY="qx.debug",bX="qx.client",bW="qxSelectable",bV="off",bU="': ",bT="Invalid context for callback.",bS="div",bR="'",cF="Invalid event type.",cE="Invalid callback function",cD="",cC="mshtml",cB="none",cA="scroll",cz="text",cy="|bubble|",cx="qx.html.Element",cw="|capture|",ci="Invalid capture flag.",cj="focus",cg="Failed to add event listener for type '",ch="blur",ce="deactivate",cf="capture",cc="userSelect",cd=" from the target '",ck="-moz-none",cl="visible",co="releaseCapture",cn="__eb",cq="tabIndex",cp="activate",cs="MozUserSelect",cr="normal",cm=" to the target '",cv="Failed to remove event listener for type '",cu="Invalid capture falg.",ct="hidden";
qx.Class.define(cx,{extend:qx.core.Object,construct:function(w,z,A){qx.core.Object.call(this);
this.__dE=w||bS;
this.__dF=z||null;
this.__dG=A||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dH:{},_scheduleFlush:function(cI){qx.html.Element.__em.schedule();
},flush:function(){var N;

if(qx.core.Variant.isSet(bY,cb)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var F=this.__dI();
var E=F.getFocus();

if(E&&this.__dM(E)){F.blur(E);
}var U=F.getActive();

if(U&&this.__dM(U)){qx.bom.Element.deactivate(U);
}var I=this.__dK();

if(I&&this.__dM(I)){qx.bom.Element.releaseCapture(I);
}var O=[];
var P=this._modified;

for(var M in P){N=P[M];
if(N.__ef()){if(N.__dN&&qx.dom.Hierarchy.isRendered(N.__dN)){O.push(N);
}else{if(qx.core.Variant.isSet(bY,cb)){if(this.DEBUG){N.debug("Flush invisible element");
}}N.__ee();
}delete P[M];
}}
for(var i=0,l=O.length;i<l;i++){N=O[i];

if(qx.core.Variant.isSet(bY,cb)){if(this.DEBUG){N.debug("Flush rendered element");
}}N.__ee();
}var K=this._visibility;

for(var M in K){N=K[M];
var Q=N.__dN;

if(!Q){delete K[M];
continue;
}
if(qx.core.Variant.isSet(bY,cb)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+N.__dQ);
}}if(!N.$$disposed){Q.style.display=N.__dQ?cD:cB;
if(qx.core.Variant.isSet(bX,cC)){if(!(document.documentMode>=8)){Q.style.visibility=N.__dQ?cl:ct;
}}}delete K[M];
}var scroll=this._scroll;

for(var M in scroll){N=scroll[M];
var V=N.__dN;

if(V&&V.offsetWidth){var H=true;
if(N.__dT!=null){N.__dN.scrollLeft=N.__dT;
delete N.__dT;
}if(N.__dU!=null){N.__dN.scrollTop=N.__dU;
delete N.__dU;
}var R=N.__dR;

if(R!=null){var L=R.element.getDomElement();

if(L&&L.offsetWidth){qx.bom.element.Scroll.intoViewX(L,V,R.align);
delete N.__dR;
}else{H=false;
}}var S=N.__dS;

if(S!=null){var L=S.element.getDomElement();

if(L&&L.offsetWidth){qx.bom.element.Scroll.intoViewY(L,V,S.align);
delete N.__dS;
}else{H=false;
}}if(H){delete scroll[M];
}}}var G={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var T=this._actions[i];
var Q=T.element.__dN;

if(!Q||!G[T.type]&&!T.element.__ef()){continue;
}var J=T.args;
J.unshift(Q);
qx.bom.Element[T.type].apply(qx.bom.Element,J);
}this._actions=[];
for(var M in this.__dH){var D=this.__dH[M];
var V=D.element.__dN;

if(V){qx.bom.Selection.set(V,D.start,D.end);
delete this.__dH[M];
}}qx.event.handler.Appear.refresh();
},__dI:function(){if(!this.__dJ){var p=qx.event.Registration.getManager(window);
this.__dJ=p.getHandler(qx.event.handler.Focus);
}return this.__dJ;
},__dK:function(){if(!this.__dL){var dQ=qx.event.Registration.getManager(window);
this.__dL=dQ.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dL.getCaptureElement();
},__dM:function(X){var Y=qx.core.ObjectRegistry.fromHashCode(X.$$element);
return Y&&!Y.__ef();
}},members:{__dE:null,__dN:null,__dO:false,__dP:true,__dQ:true,__dR:null,__dS:null,__dT:null,__dU:null,__dV:null,__dW:null,__dX:null,__dF:null,__dG:null,__dY:null,__ea:null,__eb:null,__ec:null,__ed:null,_scheduleChildrenUpdate:function(){if(this.__ec){return;
}this.__ec=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
},_createDomElement:function(){return qx.bom.Element.create(this.__dE);
},__ee:function(){if(qx.core.Variant.isSet(bY,cb)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var bc=this.__eb;

if(bc){var length=bc.length;
var bd;

for(var i=0;i<length;i++){bd=bc[i];

if(bd.__dQ&&bd.__dP&&!bd.__dN){bd.__ee();
}}}
if(!this.__dN){this.__dN=this._createDomElement();
this.__dN.$$element=this.$$hash;
this._copyData(false);

if(bc&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__ec){this._syncChildren();
}}delete this.__ec;
},_insertChildren:function(){var bl=this.__eb;
var length=bl.length;
var bn;

if(length>2){var bm=document.createDocumentFragment();

for(var i=0;i<length;i++){bn=bl[i];

if(bn.__dN&&bn.__dP){bm.appendChild(bn.__dN);
}}this.__dN.appendChild(bm);
}else{var bm=this.__dN;

for(var i=0;i<length;i++){bn=bl[i];

if(bn.__dN&&bn.__dP){bm.appendChild(bn.__dN);
}}}},_syncChildren:function(){var dk=qx.core.ObjectRegistry;
var da=this.__eb;
var di=da.length;
var dc;
var dg;
var de=this.__dN;
var dh=de.childNodes;
var dd=0;
var df;

if(qx.core.Variant.isSet(bY,cb)){var dj=0;
}for(var i=dh.length-1;i>=0;i--){df=dh[i];
dg=dk.fromHashCode(df.$$element);

if(!dg||!dg.__dP||dg.__ed!==this){de.removeChild(df);

if(qx.core.Variant.isSet(bY,cb)){dj++;
}}}for(var i=0;i<di;i++){dc=da[i];
if(dc.__dP){dg=dc.__dN;
df=dh[dd];

if(!dg){continue;
}if(dg!=df){if(df){de.insertBefore(dg,df);
}else{de.appendChild(dg);
}
if(qx.core.Variant.isSet(bY,cb)){dj++;
}}dd++;
}}if(qx.core.Variant.isSet(bY,cb)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+dj+" operations");
}}},_copyData:function(by){var bC=this.__dN;
var bB=this.__dG;

if(bB){var bz=qx.bom.element.Attribute;

for(var bD in bB){bz.set(bC,bD,bB[bD]);
}}var bB=this.__dF;

if(bB){var bA=qx.bom.element.Style;

if(by){bA.setStyles(bC,bB);
}else{bA.setCss(bC,bA.compile(bB));
}}var bB=this.__dY;

if(bB){for(var bD in bB){this._applyProperty(bD,bB[bD]);
}}var bB=this.__ea;

if(bB){qx.event.Registration.getManager(bC).importListeners(bC,bB);
delete this.__ea;
}},_syncData:function(){var ee=this.__dN;
var ed=qx.bom.element.Attribute;
var eb=qx.bom.element.Style;
var ec=this.__dW;

if(ec){var eh=this.__dG;

if(eh){var ef;

for(var eg in ec){ef=eh[eg];

if(ef!==undefined){ed.set(ee,eg,ef);
}else{ed.reset(ee,eg);
}}}this.__dW=null;
}var ec=this.__dV;

if(ec){var eh=this.__dF;

if(eh){var ea={};

for(var eg in ec){ea[eg]=eh[eg];
}eb.setStyles(ee,ea);
}this.__dV=null;
}var ec=this.__dX;

if(ec){var eh=this.__dY;

if(eh){var ef;

for(var eg in ec){this._applyProperty(eg,eh[eg]);
}}this.__dX=null;
}},__ef:function(){var bw=this;
while(bw){if(bw.__dO){return true;
}
if(!bw.__dP||!bw.__dQ){return false;
}bw=bw.__ed;
}return false;
},__eg:function(cY){if(cY.__ed===this){throw new Error("Child is already in: "+cY);
}
if(cY.__dO){throw new Error("Root elements could not be inserted into other ones.");
}if(cY.__ed){cY.__ed.remove(cY);
}cY.__ed=this;
if(!this.__eb){this.__eb=[];
}if(this.__dN){this._scheduleChildrenUpdate();
}},__eh:function(bv){if(bv.__ed!==this){throw new Error("Has no child: "+bv);
}if(this.__dN){this._scheduleChildrenUpdate();
}delete bv.__ed;
},__ei:function(m){if(m.__ed!==this){throw new Error("Has no child: "+m);
}if(this.__dN){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__eb||null;
},getChild:function(ba){var bb=this.__eb;
return bb&&bb[ba]||null;
},hasChildren:function(){var dP=this.__eb;
return dP&&dP[0]!==undefined;
},indexOf:function(ej){var ek=this.__eb;
return ek?ek.indexOf(ej):-1;
},hasChild:function(cK){var cL=this.__eb;
return cL&&cL.indexOf(cK)!==-1;
},add:function(k){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__eg(arguments[i]);
}this.__eb.push.apply(this.__eb,arguments);
}else{this.__eg(k);
this.__eb.push(k);
}return this;
},addAt:function(bP,bQ){this.__eg(bP);
qx.lang.Array.insertAt(this.__eb,bP,bQ);
return this;
},remove:function(br){var bs=this.__eb;

if(!bs){return;
}
if(arguments[1]){var bt;

for(var i=0,l=arguments.length;i<l;i++){bt=arguments[i];
this.__eh(bt);
qx.lang.Array.remove(bs,bt);
}}else{this.__eh(br);
qx.lang.Array.remove(bs,br);
}return this;
},removeAt:function(dE){var dF=this.__eb;

if(!dF){throw new Error("Has no children!");
}var dG=dF[dE];

if(!dG){throw new Error("Has no child at this position!");
}this.__eh(dG);
qx.lang.Array.removeAt(this.__eb,dE);
return this;
},removeAll:function(){var dT=this.__eb;

if(dT){for(var i=0,l=dT.length;i<l;i++){this.__eh(dT[i]);
}dT.length=0;
}return this;
},getParent:function(){return this.__ed||null;
},insertInto:function(parent,bH){parent.__eg(this);

if(bH==null){parent.__eb.push(this);
}else{qx.lang.Array.insertAt(this.__eb,this,bH);
}return this;
},insertBefore:function(v){var parent=v.__ed;
parent.__eg(this);
qx.lang.Array.insertBefore(parent.__eb,this,v);
return this;
},insertAfter:function(ei){var parent=ei.__ed;
parent.__eg(this);
qx.lang.Array.insertAfter(parent.__eb,this,ei);
return this;
},moveTo:function(t){var parent=this.__ed;
parent.__ei(this);
var u=parent.__eb.indexOf(this);

if(u===t){throw new Error("Could not move to same index!");
}else if(u<t){t--;
}qx.lang.Array.removeAt(parent.__eb,u);
qx.lang.Array.insertAt(parent.__eb,this,t);
return this;
},moveBefore:function(bu){var parent=this.__ed;
return this.moveTo(parent.__eb.indexOf(bu));
},moveAfter:function(eo){var parent=this.__ed;
return this.moveTo(parent.__eb.indexOf(eo)+1);
},free:function(){var parent=this.__ed;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__eb){return;
}parent.__eh(this);
qx.lang.Array.remove(parent.__eb,this);
return this;
},getDomElement:function(){return this.__dN||null;
},getNodeName:function(){return this.__dE;
},setNodeName:function(name){this.__dE=name;
},setRoot:function(dJ){this.__dO=dJ;
},useMarkup:function(dH){if(this.__dN){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(bX,cC)){var dI=document.createElement(bS);
}else{var dI=qx.bom.Element.getHelperElement();
}dI.innerHTML=dH;
this.useElement(dI.firstChild);
return this.__dN;
},useElement:function(dS){if(this.__dN){throw new Error("Could not overwrite existing element!");
}this.__dN=dS;
this.__dN.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var bk=this.getAttribute(cq);

if(bk>=1){return true;
}var bj=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bk>=0&&bj[this.__dE]){return true;
}return false;
},setSelectable:qx.core.Variant.select(bX,{"webkit":function(B){this.setAttribute(bW,B?cb:bV);
this.setStyle(cc,B?cr:cB);
},"gecko":function(em){this.setAttribute(bW,em?cb:bV);
this.setStyle(cs,em?cz:ck);
},"default":function(dp){this.setAttribute(bW,dp?cb:bV);
}}),isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__dE];
},include:function(){if(this.__dP){return;
}delete this.__dP;

if(this.__ed){this.__ed._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dP){return;
}this.__dP=false;

if(this.__ed){this.__ed._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dP===true;
},show:function(){if(this.__dQ){return;
}
if(this.__dN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}if(this.__ed){this.__ed._scheduleChildrenUpdate();
}delete this.__dQ;
},hide:function(){if(!this.__dQ){return;
}
if(this.__dN){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}this.__dQ=false;
},isVisible:function(){return this.__dQ===true;
},scrollChildIntoViewX:function(be,bf,bg){var bh=this.__dN;
var bi=be.getDomElement();

if(bg!==false&&bh&&bh.offsetWidth&&bi&&bi.offsetWidth){qx.bom.element.Scroll.intoViewX(bi,bh,bf);
}else{this.__dR={element:be,align:bf};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}delete this.__dT;
},scrollChildIntoViewY:function(cN,cO,cP){var cQ=this.__dN;
var cR=cN.getDomElement();

if(cP!==false&&cQ&&cQ.offsetWidth&&cR&&cR.offsetWidth){qx.bom.element.Scroll.intoViewY(cR,cQ,cO);
}else{this.__dS={element:cN,align:cO};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}delete this.__dU;
},scrollToX:function(x,cW){var cX=this.__dN;

if(cW!==true&&cX&&cX.offsetWidth){cX.scrollLeft=x;
}else{this.__dT=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}delete this.__dR;
},getScrollX:function(){var C=this.__dN;

if(C){return C.scrollLeft;
}return this.__dT||0;
},scrollToY:function(y,n){var o=this.__dN;

if(n!==true&&o&&o.offsetWidth){o.scrollTop=y;
}else{this.__dU=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}delete this.__dS;
},getScrollY:function(){var bE=this.__dN;

if(bE){return bE.scrollTop;
}return this.__dU||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(cA,this.__ek,this);
},enableScrolling:function(){this.removeListener(cA,this.__ek,this);
},__ej:null,__ek:function(e){if(!this.__ej){this.__ej=true;
this.__dN.scrollTop=0;
this.__dN.scrollLeft=0;
delete this.__ej;
}},getTextSelection:function(){var bx=this.__dN;

if(bx){return qx.bom.Selection.get(bx);
}return null;
},getTextSelectionLength:function(){var W=this.__dN;

if(W){return qx.bom.Selection.getLength(W);
}return null;
},getTextSelectionStart:function(){var dO=this.__dN;

if(dO){return qx.bom.Selection.getStart(dO);
}return null;
},getTextSelectionEnd:function(){var cM=this.__dN;

if(cM){return qx.bom.Selection.getEnd(cM);
}return null;
},setTextSelection:function(dL,dM){var dN=this.__dN;

if(dN){qx.bom.Selection.set(dN,dL,dM);
return;
}qx.html.Element.__dH[this.toHashCode()]={element:this,start:dL,end:dM};
qx.html.Element._scheduleFlush(ca);
},clearTextSelection:function(){var en=this.__dN;

if(en){qx.bom.Selection.clear(en);
}delete qx.html.Element.__dH[this.toHashCode()];
},__el:function(dq,dr){var ds=qx.html.Element._actions;
ds.push({type:dq,element:this,args:dr||[]});
qx.html.Element._scheduleFlush(ca);
},focus:function(){this.__el(cj);
},blur:function(){this.__el(ch);
},activate:function(){this.__el(cp);
},deactivate:function(){this.__el(ce);
},capture:function(dR){this.__el(cf,[dR!==false]);
},releaseCapture:function(){this.__el(co);
},setStyle:function(dl,dm,dn){if(!this.__dF){this.__dF={};
}
if(this.__dF[dl]==dm){return;
}
if(dm==null){delete this.__dF[dl];
}else{this.__dF[dl]=dm;
}if(this.__dN){if(dn){qx.bom.element.Style.set(this.__dN,dl,dm);
return this;
}if(!this.__dV){this.__dV={};
}this.__dV[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}return this;
},setStyles:function(dt,du){var dv=qx.bom.element.Style;

if(!this.__dF){this.__dF={};
}
if(this.__dN){if(!this.__dV){this.__dV={};
}
for(var dx in dt){var dw=dt[dx];

if(this.__dF[dx]==dw){continue;
}
if(dw==null){delete this.__dF[dx];
}else{this.__dF[dx]=dw;
}if(du){dv.set(this.__dN,dx,dw);
continue;
}this.__dV[dx]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}else{for(var dx in dt){var dw=dt[dx];

if(this.__dF[dx]==dw){continue;
}
if(dw==null){delete this.__dF[dx];
}else{this.__dF[dx]=dw;
}}}return this;
},removeStyle:function(d,f){this.setStyle(d,null,f);
},getStyle:function(cG){return this.__dF?this.__dF[cG]:null;
},getAllStyles:function(){return this.__dF||null;
},setAttribute:function(q,r,s){if(!this.__dG){this.__dG={};
}
if(this.__dG[q]==r){return;
}
if(r==null){delete this.__dG[q];
}else{this.__dG[q]=r;
}if(this.__dN){if(s){qx.bom.element.Attribute.set(this.__dN,q,r);
return this;
}if(!this.__dW){this.__dW={};
}this.__dW[q]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}return this;
},setAttributes:function(bo,bp){for(var bq in bo){this.setAttribute(bq,bo[bq],bp);
}return this;
},removeAttribute:function(a,b){this.setAttribute(a,null,b);
},getAttribute:function(c){return this.__dG?this.__dG[c]:null;
},_applyProperty:function(name,cV){},_setProperty:function(g,h,j){if(!this.__dY){this.__dY={};
}
if(this.__dY[g]==h){return;
}
if(h==null){delete this.__dY[g];
}else{this.__dY[g]=h;
}if(this.__dN){if(j){this._applyProperty(g,h);
return this;
}if(!this.__dX){this.__dX={};
}this.__dX[g]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(ca);
}return this;
},_removeProperty:function(bF,bG){this._setProperty(bF,null,bG);
},_getProperty:function(cS){var cT=this.__dY;

if(!cT){return null;
}var cU=cT[cS];
return cU==null?null:cU;
},addListener:function(dy,dz,self,dA){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bY,cb)){var dB=cg+dy+bR+cm+this+bU;
this.assertString(dy,dB+cF);
this.assertFunction(dz,dB+cE);

if(self!==undefined){this.assertObject(self,bT);
}
if(dA!==undefined){this.assertBoolean(dA,cu);
}}
if(this.__dN){return qx.event.Registration.addListener(this.__dN,dy,dz,self,dA);
}
if(!this.__ea){this.__ea={};
}
if(dA==null){dA=false;
}var dC=qx.event.Manager.getNextUniqueId();
var dD=dy+(dA?cw:cy)+dC;
this.__ea[dD]={type:dy,listener:dz,self:self,capture:dA,unique:dC};
return dD;
},removeListener:function(bI,bJ,self,bK){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(bY,cb)){var bL=cv+bI+bR+cd+this+bU;
this.assertString(bI,bL+cF);
this.assertFunction(bJ,bL+cE);

if(self!==undefined){this.assertObject(self,bT);
}
if(bK!==undefined){this.assertBoolean(bK,ci);
}}
if(this.__dN){qx.event.Registration.removeListener(this.__dN,bI,bJ,self,bK);
}else{var bN=this.__ea;
var bM;

if(bK==null){bK=false;
}
for(var bO in bN){bM=bN[bO];
if(bM.listener===bJ&&bM.self===self&&bM.capture===bK&&bM.type===bI){delete bN[bO];
break;
}}}return this;
},removeListenerById:function(cJ){if(this.$$disposed){return null;
}
if(this.__dN){qx.event.Registration.removeListenerById(this.__dN,cJ);
}else{delete this.__ea[cJ];
}return this;
},hasListener:function(dU,dV){if(this.$$disposed){return false;
}
if(this.__dN){return qx.event.Registration.hasListener(this.__dN,dU,dV);
}var dX=this.__ea;
var dW;

if(dV==null){dV=false;
}
for(var dY in dX){dW=dX[dY];
if(dW.capture===dV&&dW.type===dU){return true;
}}return false;
}},defer:function(cH){cH.__em=new qx.util.DeferredCall(cH.flush,cH);
},destruct:function(){var dK=this.__dN;

if(dK){qx.event.Registration.getManager(dK).removeAllListeners(dK);
dK.$$element=cD;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__ed;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(cn);
this.__dG=this.__dF=this.__ea=this.__dY=this.__dW=this.__dV=this.__dX=this.__dN=this.__ed=this.__dR=this.__dS=null;
}});
})();
(function(){var h="qx.debug",g="on",f="qx.ui.core.queue.Manager",d="useraction";
qx.Class.define(f,{statics:{__en:false,__eo:{},__ep:0,MAX_RETRIES:10,scheduleFlush:function(a){var self=qx.ui.core.queue.Manager;
self.__eo[a]=true;

if(!self.__en){self.__es.schedule();
self.__en=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eq){return;
}self.__eq=true;
self.__es.cancel();
var c=self.__eo;
self.__er(function(){while(c.visibility||c.widget||c.appearance||c.layout||c.element){if(c.widget){delete c.widget;
qx.ui.core.queue.Widget.flush();
}
if(c.visibility){delete c.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(c.appearance){delete c.appearance;
qx.ui.core.queue.Appearance.flush();
}if(c.widget||c.visibility||c.appearance){continue;
}
if(c.layout){delete c.layout;
qx.ui.core.queue.Layout.flush();
}if(c.widget||c.visibility||c.appearance||c.layout){continue;
}
if(c.element){delete c.element;
qx.html.Element.flush();
}}},function(){self.__en=false;
});
self.__er(function(){if(c.dispose){delete c.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eq=false;
});
self.__ep=0;
},__er:qx.core.Variant.select(h,{"on":function(i,j){i();
j();
},"off":function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){if(qx.core.Variant.isSet(h,g)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__en=false;
self.__eq=false;
self.__ep+=1;

if(self.__ep<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__ep-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}}})},defer:function(b){b.__es=new qx.util.DeferredCall(b.flush);
qx.html.Element._scheduleFlush=b.scheduleFlush;
qx.event.Registration.addListener(window,d,b.flush);
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(f){throw new Error("Missing implementation");
},canDispatchEvent:function(d,event,e){return event.getBubbles();
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
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(d,event,e){return d.nodeType!==undefined&&event.getBubbles();
}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var C="keydown",B="qx.client",A="keypress",z="NumLock",y="keyup",x="Enter",w="0",v="9",u="-",t="PageUp",bJ="+",bI="PrintScreen",bH="gecko",bG="A",bF="Z",bE="Left",bD="F5",bC="Down",bB="Up",bA="F11",J="F6",K="useraction",H="F3",I="keyinput",F="Insert",G="F8",D="End",E="/",R="Delete",S="*",bf="F1",bb="F4",bn="Home",bi="F2",bw="F12",bs="PageDown",W="F7",bz="F9",by="F10",bx="Right",V="text",Y="Escape",ba="webkit",bd="5",bg="3",bj="Meta",bp="7",bu="CapsLock",L="input",M="Control",X="Space",bm="Tab",bl="Shift",bk="Pause",br="Unidentified",bq="qx.event.handler.Keyboard",bh="mshtml",bo="mshtml|webkit",q="6",bt="off",N="Apps",O="4",bc="Alt",r="2",s="Scroll",U="1",P="8",Q="Win",T="autoComplete",be=",",bv="Backspace";
qx.Class.define(bq,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cH){qx.core.Object.call(this);
this.__et=cH;
this.__eu=cH.getWindow();
if(qx.core.Variant.isSet(B,bH)){this.__ev=this.__eu;
}else{this.__ev=this.__eu.document.documentElement;
}this.__ew={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cG){if(this._identifierToKeyCodeMap[cG]){return true;
}
if(cG.length!=1){return false;
}
if(cG>=w&&cG<=v){return true;
}
if(cG>=bG&&cG<=bF){return true;
}
switch(cG){case bJ:case u:case S:case E:return true;
default:return false;
}}},members:{__ex:null,__et:null,__eu:null,__ev:null,__ew:null,__ey:null,__ez:null,__eA:null,canHandleEvent:function(m,n){},registerEvent:function(i,j,k){},unregisterEvent:function(bT,bU,bV){},_fireInputEvent:function(ct,cu){var cv=this.__eB();
if(cv&&cv.offsetWidth!=0){var event=qx.event.Registration.createEvent(I,qx.event.type.KeyInput,[ct,cv,cu]);
this.__et.dispatchEvent(cv,event);
}if(this.__eu){qx.event.Registration.fireEvent(this.__eu,K,qx.event.type.Data,[I]);
}},_fireSequenceEvent:function(ce,cf,cg){var ch=this.__eB();
var ci=ce.keyCode;
var event=qx.event.Registration.createEvent(cf,qx.event.type.KeySequence,[ce,ch,cg]);
this.__et.dispatchEvent(ch,event);
if(qx.core.Variant.isSet(B,bo)){if(cf==C&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(ci)&&!this._emulateKeyPress[ci]){this._fireSequenceEvent(ce,A,cg);
}}}if(this.__eu){qx.event.Registration.fireEvent(this.__eu,K,qx.event.type.Data,[cf]);
}},__eB:function(){var bP=this.__et.getHandler(qx.event.handler.Focus);
var bQ=bP.getActive();
if(!bQ||bQ.offsetWidth==0){bQ=bP.getFocus();
}if(!bQ||bQ.offsetWidth==0){bQ=this.__et.getWindow().document.body;
}return bQ;
},_initKeyObserver:function(){this.__ex=qx.lang.Function.listener(this.__eC,this);
this.__eA=qx.lang.Function.listener(this.__eE,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ev,y,this.__ex);
Event.addNativeListener(this.__ev,C,this.__ex);
Event.addNativeListener(this.__ev,A,this.__eA);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ev,y,this.__ex);
Event.removeNativeListener(this.__ev,C,this.__ex);
Event.removeNativeListener(this.__ev,A,this.__eA);

for(var bS in (this.__ez||{})){var bR=this.__ez[bS];
Event.removeNativeListener(bR.target,A,bR.callback);
}delete (this.__ez);
},__eC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(e){e=window.event||e;
var h=e.keyCode;
var f=0;
var g=e.type;
if(!(this.__ew[h]==C&&g==C)){this._idealKeyHandler(h,f,g,e);
}if(g==C){if(this._isNonPrintableKeyCode(h)||this._emulateKeyPress[h]){this._idealKeyHandler(h,f,A,e);
}}this.__ew[h]=g;
},"gecko":function(bK){var bO=this._keyCodeFix[bK.keyCode]||bK.keyCode;
var bM=0;
var bN=bK.type;
if(qx.bom.client.Platform.WIN){var bL=bO?this._keyCodeToIdentifier(bO):this._charCodeToIdentifier(bM);

if(!(this.__ew[bL]==C&&bN==C)){this._idealKeyHandler(bO,bM,bN,bK);
}this.__ew[bL]=bN;
}else{this._idealKeyHandler(bO,bM,bN,bK);
}this.__eD(bK.target,bN,bO);
},"webkit":function(cj){var cm=0;
var ck=0;
var cl=cj.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cl==y||cl==C){cm=this._charCode2KeyCode[cj.charCode]||cj.keyCode;
}else{if(this._charCode2KeyCode[cj.charCode]){cm=this._charCode2KeyCode[cj.charCode];
}else{ck=cj.charCode;
}}this._idealKeyHandler(cm,ck,cl,cj);
}else{cm=cj.keyCode;
if(!(this.__ew[cm]==C&&cl==C)){this._idealKeyHandler(cm,ck,cl,cj);
}if(cl==C){if(this._isNonPrintableKeyCode(cm)||this._emulateKeyPress[cm]){this._idealKeyHandler(cm,ck,A,cj);
}}this.__ew[cm]=cl;
}},"opera":function(o){this.__ey=o.keyCode;
this._idealKeyHandler(o.keyCode,0,o.type,o);
}})),__eD:qx.core.Variant.select(B,{"gecko":function(co,cp,cq){if(cp===C&&(cq==33||cq==34||cq==38||cq==40)&&co.type==V&&co.tagName.toLowerCase()===L&&co.getAttribute(T)!==bt){if(!this.__ez){this.__ez={};
}var cs=qx.core.ObjectRegistry.toHashCode(co);

if(this.__ez[cs]){return;
}var self=this;
this.__ez[cs]={target:co,callback:function(bW){qx.bom.Event.stopPropagation(bW);
self.__eE(bW);
}};
var cr=qx.event.GlobalError.observeMethod(this.__ez[cs].callback);
qx.bom.Event.addNativeListener(co,A,cr);
}},"default":null}),__eE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(B,{"mshtml":function(l){l=window.event||l;

if(this._charCode2KeyCode[l.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[l.keyCode],0,l.type,l);
}else{this._idealKeyHandler(0,l.keyCode,l.type,l);
}},"gecko":function(cC){var cF=this._keyCodeFix[cC.keyCode]||cC.keyCode;
var cD=cC.charCode;
var cE=cC.type;
this._idealKeyHandler(cF,cD,cE,cC);
},"webkit":function(cw){if(qx.bom.client.Engine.VERSION<525.13){var cz=0;
var cx=0;
var cy=cw.type;

if(cy==y||cy==C){cz=this._charCode2KeyCode[cw.charCode]||cw.keyCode;
}else{if(this._charCode2KeyCode[cw.charCode]){cz=this._charCode2KeyCode[cw.charCode];
}else{cx=cw.charCode;
}}this._idealKeyHandler(cz,cx,cy,cw);
}else{if(this._charCode2KeyCode[cw.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cw.keyCode],0,cw.type,cw);
}else{this._idealKeyHandler(0,cw.keyCode,cw.type,cw);
}}},"opera":function(b){var d=b.keyCode;
var c=b.type;
if(d!=this.__ey){this._idealKeyHandler(0,this.__ey,c,b);
}else{if(this._keyCodeToIdentifierMap[b.keyCode]){this._idealKeyHandler(b.keyCode,0,b.type,b);
}else{this._idealKeyHandler(0,b.keyCode,b.type,b);
}}}})),_idealKeyHandler:function(bY,ca,cb,cc){var cd;
if(bY||(!bY&&!ca)){cd=this._keyCodeToIdentifier(bY);
this._fireSequenceEvent(cc,cb,cd);
}else{cd=this._charCodeToIdentifier(ca);
this._fireSequenceEvent(cc,A,cd);
this._fireInputEvent(cc,ca);
}},_specialCharCodeMap:{8:bv,9:bm,13:x,27:Y,32:X},_emulateKeyPress:qx.core.Variant.select(B,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bl,17:M,18:bc,20:bu,224:bj,37:bE,38:bB,39:bx,40:bC,33:t,34:bs,35:D,36:bn,45:F,46:R,112:bf,113:bi,114:H,115:bb,116:bD,117:J,118:W,119:G,120:bz,121:by,122:bA,123:bw,144:z,44:bI,145:s,19:bk,91:Q,93:N},_numpadToCharCode:{96:w.charCodeAt(0),97:U.charCodeAt(0),98:r.charCodeAt(0),99:bg.charCodeAt(0),100:O.charCodeAt(0),101:bd.charCodeAt(0),102:q.charCodeAt(0),103:bp.charCodeAt(0),104:P.charCodeAt(0),105:v.charCodeAt(0),106:S.charCodeAt(0),107:bJ.charCodeAt(0),109:u.charCodeAt(0),110:be.charCodeAt(0),111:E.charCodeAt(0)},_charCodeA:bG.charCodeAt(0),_charCodeZ:bF.charCodeAt(0),_charCode0:w.charCodeAt(0),_charCode9:v.charCodeAt(0),_isNonPrintableKeyCode:function(bX){return this._keyCodeToIdentifierMap[bX]?true:false;
},_isIdentifiableKeyCode:function(cn){if(cn>=this._charCodeA&&cn<=this._charCodeZ){return true;
}if(cn>=this._charCode0&&cn<=this._charCode9){return true;
}if(this._specialCharCodeMap[cn]){return true;
}if(this._numpadToCharCode[cn]){return true;
}if(this._isNonPrintableKeyCode(cn)){return true;
}return false;
},_keyCodeToIdentifier:function(cA){if(this._isIdentifiableKeyCode(cA)){var cB=this._numpadToCharCode[cA];

if(cB){return String.fromCharCode(cB);
}return (this._keyCodeToIdentifierMap[cA]||this._specialCharCodeMap[cA]||String.fromCharCode(cA));
}else{return br;
}},_charCodeToIdentifier:function(a){return this._specialCharCodeMap[a]||String.fromCharCode(a).toUpperCase();
},_identifierToKeyCode:function(p){return qx.event.handler.Keyboard._identifierToKeyCodeMap[p]||p.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ey=this.__et=this.__eu=this.__ev=this.__ew=null;
},defer:function(cI,cJ,cK){qx.event.Registration.addHandler(cI);
if(!cI._identifierToKeyCodeMap){cI._identifierToKeyCodeMap={};

for(var cL in cJ._keyCodeToIdentifierMap){cI._identifierToKeyCodeMap[cJ._keyCodeToIdentifierMap[cL]]=parseInt(cL,10);
}
for(var cL in cJ._specialCharCodeMap){cI._identifierToKeyCodeMap[cJ._specialCharCodeMap[cL]]=parseInt(cL,10);
}}
if(qx.core.Variant.isSet(B,bh)){cJ._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(B,bH)){cJ._keyCodeFix={12:cJ._identifierToKeyCode(z)};
}else if(qx.core.Variant.isSet(B,ba)){if(qx.bom.client.Engine.VERSION<525.13){cJ._charCode2KeyCode={63289:cJ._identifierToKeyCode(z),63276:cJ._identifierToKeyCode(t),63277:cJ._identifierToKeyCode(bs),63275:cJ._identifierToKeyCode(D),63273:cJ._identifierToKeyCode(bn),63234:cJ._identifierToKeyCode(bE),63232:cJ._identifierToKeyCode(bB),63235:cJ._identifierToKeyCode(bx),63233:cJ._identifierToKeyCode(bC),63272:cJ._identifierToKeyCode(R),63302:cJ._identifierToKeyCode(F),63236:cJ._identifierToKeyCode(bf),63237:cJ._identifierToKeyCode(bi),63238:cJ._identifierToKeyCode(H),63239:cJ._identifierToKeyCode(bb),63240:cJ._identifierToKeyCode(bD),63241:cJ._identifierToKeyCode(J),63242:cJ._identifierToKeyCode(W),63243:cJ._identifierToKeyCode(G),63244:cJ._identifierToKeyCode(bz),63245:cJ._identifierToKeyCode(by),63246:cJ._identifierToKeyCode(bA),63247:cJ._identifierToKeyCode(bw),63248:cJ._identifierToKeyCode(bI),3:cJ._identifierToKeyCode(x),12:cJ._identifierToKeyCode(z),13:cJ._identifierToKeyCode(x)};
}else{cJ._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var s="qx.client",r="mouseup",q="click",p="mousedown",o="contextmenu",n="mousewheel",m="dblclick",l="mshtml",k="mouseover",j="mouseout",e="DOMMouseScroll",i="mousemove",h="on",d="mshtml|webkit|opera",c="useraction",g="gecko|webkit",f="qx.event.handler.Mouse";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__eI=a;
this.__eJ=a.getWindow();
this.__eK=this.__eJ.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eI:null,__eJ:null,__eK:null,canHandleEvent:function(Y,ba){},registerEvent:qx.bom.client.System.IPHONE?
function(I,J,K){I[h+J]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(t,u,v){t[h+u]=undefined;
}:qx.lang.Function.returnNull,__eQ:function(F,G,H){if(!H){H=F.target||F.srcElement;
}if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G||F.type,G==n?qx.event.type.MouseWheel:qx.event.type.Mouse,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__eJ,c,qx.event.type.Data,[G||F.type]);
},_initButtonObserver:function(){this.__eL=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eK,p,this.__eL);
Event.addNativeListener(this.__eK,r,this.__eL);
Event.addNativeListener(this.__eK,q,this.__eL);
Event.addNativeListener(this.__eK,m,this.__eL);
Event.addNativeListener(this.__eK,o,this.__eL);
},_initMoveObserver:function(){this.__eM=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eK,i,this.__eM);
Event.addNativeListener(this.__eK,k,this.__eM);
Event.addNativeListener(this.__eK,j,this.__eM);
},_initWheelObserver:function(){this.__eN=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var L=qx.core.Variant.isSet(s,d)?n:e;
var M=qx.core.Variant.isSet(s,l)?this.__eK:this.__eJ;
Event.addNativeListener(M,L,this.__eN);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eK,p,this.__eL);
Event.removeNativeListener(this.__eK,r,this.__eL);
Event.removeNativeListener(this.__eK,q,this.__eL);
Event.removeNativeListener(this.__eK,m,this.__eL);
Event.removeNativeListener(this.__eK,o,this.__eL);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eK,i,this.__eM);
Event.removeNativeListener(this.__eK,k,this.__eM);
Event.removeNativeListener(this.__eK,j,this.__eM);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var T=qx.core.Variant.isSet(s,d)?n:e;
var U=qx.core.Variant.isSet(s,l)?this.__eK:this.__eJ;
Event.removeNativeListener(U,T,this.__eN);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(b){this.__eQ(b);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(Q){var R=Q.type;
var S=Q.target||Q.srcElement;
if(qx.core.Variant.isSet(s,g)){if(S&&S.nodeType==3){S=S.parentNode;
}}
if(this.__eR){this.__eR(Q,R,S);
}
if(this.__eT){this.__eT(Q,R,S);
}this.__eQ(Q,R,S);

if(this.__eS){this.__eS(Q,R,S);
}
if(this.__eU){this.__eU(Q,R,S);
}this.__eO=R;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(E){this.__eQ(E,n);
}),__eR:qx.core.Variant.select(s,{"webkit":function(A,B,C){if(qx.bom.client.Engine.VERSION<530){if(B==o){this.__eQ(A,r,C);
}}},"default":null}),__eS:qx.core.Variant.select(s,{"opera":function(V,W,X){if(W==r&&V.button==2){this.__eQ(V,o,X);
}},"default":null}),__eT:qx.core.Variant.select(s,{"mshtml":function(N,O,P){if(O==r&&this.__eO==q){this.__eQ(N,p,P);
}else if(O==m){this.__eQ(N,q,P);
}},"default":null}),__eU:qx.core.Variant.select(s,{"mshtml":null,"default":function(w,x,y){switch(x){case p:this.__eP=y;
break;
case r:if(y!==this.__eP){var z=qx.dom.Hierarchy.getCommonParent(y,this.__eP);
this.__eQ(w,q,z);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__eI=this.__eJ=this.__eK=this.__eP=null;
},defer:function(D){qx.event.Registration.addHandler(D);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(b,c,d){},unregisterEvent:function(f,g,h){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var K="alias",J="copy",I="blur",H="mouseout",G="keydown",F="Ctrl",E="Shift",D="mousemove",C="move",B="mouseover",bb="Alt",ba="keyup",Y="mouseup",X="dragend",W="on",V="mousedown",U="qxDraggable",T="drag",S="drop",R="qxDroppable",P="qx.event.handler.DragDrop",Q="droprequest",N="dragstart",O="dragchange",L="dragleave",M="dragover";
qx.Class.define(P,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){qx.core.Object.call(this);
this.__eV=h;
this.__eW=h.getWindow().document.documentElement;
this.__eV.addListener(this.__eW,V,this._onMouseDown,this);
this.__fj();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eV:null,__eW:null,__eX:null,__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:false,__fh:0,__fi:0,canHandleEvent:function(bl,bm){},registerEvent:function(x,y,z){},unregisterEvent:function(c,d,f){},addType:function(bi){this.__fa[bi]=true;
},addAction:function(i){this.__fb[i]=true;
},supportsType:function(bj){return !!this.__fa[bj];
},supportsAction:function(bh){return !!this.__fb[bh];
},getData:function(bk){if(!this.__fq||!this.__eX){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fa[bk]){throw new Error("Unsupported data type: "+bk+"!");
}
if(!this.__fd[bk]){this.__fe=bk;
this.__fl(Q,this.__eY,this.__eX,false);
}
if(!this.__fd[bk]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__fd[bk]||null;
},getCurrentAction:function(){return this.__ff;
},addData:function(a,b){this.__fd[a]=b;
},getCurrentType:function(){return this.__fe;
},isSessionActive:function(){return this.__fg;
},__fj:function(){this.__fa={};
this.__fb={};
this.__fc={};
this.__fd={};
},__fk:function(){if(this.__eY==null){return;
}var be=this.__fb;
var bc=this.__fc;
var bd=null;

if(this.__fq){if(bc.Shift&&bc.Ctrl&&be.alias){bd=K;
}else if(bc.Shift&&bc.Alt&&be.copy){bd=J;
}else if(bc.Shift&&be.move){bd=C;
}else if(bc.Alt&&be.alias){bd=K;
}else if(bc.Ctrl&&be.copy){bd=J;
}else if(be.move){bd=C;
}else if(be.copy){bd=J;
}else if(be.alias){bd=K;
}}
if(bd!=this.__ff){this.__ff=bd;
this.__fl(O,this.__eY,this.__eX,false);
}},__fl:function(m,n,o,p,q){var s=qx.event.Registration;
var r=s.createEvent(m,qx.event.type.Drag,[p,q]);

if(n!==o){r.setRelatedTarget(o);
}return s.dispatchEvent(n,r);
},__fm:function(u){while(u&&u.nodeType==1){if(u.getAttribute(U)==W){return u;
}u=u.parentNode;
}return null;
},__fn:function(A){while(A&&A.nodeType==1){if(A.getAttribute(R)==W){return A;
}A=A.parentNode;
}return null;
},__fo:function(){this.__eY=null;
this.__eV.removeListener(this.__eW,D,this._onMouseMove,this,true);
this.__eV.removeListener(this.__eW,Y,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,I,this._onWindowBlur,this);
this.__fj();
},__fp:function(){if(this.__fg){this.__eV.removeListener(this.__eW,B,this._onMouseOver,this,true);
this.__eV.removeListener(this.__eW,H,this._onMouseOut,this,true);
this.__eV.removeListener(this.__eW,G,this._onKeyDown,this,true);
this.__eV.removeListener(this.__eW,ba,this._onKeyUp,this,true);
this.__fl(X,this.__eY,this.__eX,false);
this.__fg=false;
}this.__fq=false;
this.__eX=null;
this.__fo();
},__fq:false,_onWindowBlur:function(e){this.__fp();
},_onKeyDown:function(e){var k=e.getKeyIdentifier();

switch(k){case bb:case F:case E:if(!this.__fc[k]){this.__fc[k]=true;
this.__fk();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case bb:case F:case E:if(this.__fc[t]){this.__fc[t]=false;
this.__fk();
}}},_onMouseDown:function(e){if(this.__fg){return;
}var j=this.__fm(e.getTarget());

if(j){this.__fh=e.getDocumentLeft();
this.__fi=e.getDocumentTop();
this.__eY=j;
this.__eV.addListener(this.__eW,D,this._onMouseMove,this,true);
this.__eV.addListener(this.__eW,Y,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,I,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fq){this.__fl(S,this.__eX,this.__eY,false,e);
}if(this.__fg){e.stopPropagation();
}this.__fp();
},_onMouseMove:function(e){if(this.__fg){if(!this.__fl(T,this.__eY,this.__eX,true,e)){this.__fp();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fh)>3||Math.abs(e.getDocumentTop()-this.__fi)>3){if(this.__fl(N,this.__eY,this.__eX,true,e)){this.__fg=true;
this.__eV.addListener(this.__eW,B,this._onMouseOver,this,true);
this.__eV.addListener(this.__eW,H,this._onMouseOut,this,true);
this.__eV.addListener(this.__eW,G,this._onKeyDown,this,true);
this.__eV.addListener(this.__eW,ba,this._onKeyUp,this,true);
var l=this.__fc;
l.Ctrl=e.isCtrlPressed();
l.Shift=e.isShiftPressed();
l.Alt=e.isAltPressed();
this.__fk();
}else{this.__fl(X,this.__eY,this.__eX,false);
this.__fo();
}}}},_onMouseOver:function(e){var bf=e.getTarget();
var bg=this.__fn(bf);

if(bg&&bg!=this.__eX){this.__fq=this.__fl(M,bg,this.__eY,true,e);
this.__eX=bg;
this.__fk();
}},_onMouseOut:function(e){var w=this.__fn(e.getTarget());
var v=this.__fn(e.getRelatedTarget());

if(w&&w!==v&&w==this.__eX){this.__fl(L,this.__eX,v,false,e);
this.__eX=null;
this.__fq=false;
qx.event.Timer.once(this.__fk,this,0);
}}},destruct:function(){this.__eY=this.__eX=this.__eV=this.__eW=this.__fa=this.__fb=this.__fc=this.__fd=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var y="-",x="qx.event.handler.Element";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){qx.core.Object.call(this);
this._manager=z;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(r,s,t){var w=qx.core.ObjectRegistry.toHashCode(r);
var u=w+y+s;
var v=qx.lang.Function.listener(this._onNative,this,u);
qx.bom.Event.addNativeListener(r,s,v);
this._registeredEvents[u]={element:r,type:s,listener:v};
},unregisterEvent:function(h,i,j){var m=this._registeredEvents;

if(!m){return;
}var n=qx.core.ObjectRegistry.toHashCode(h);
var k=n+y+i;
var l=this._registeredEvents[k];

if(l){qx.bom.Event.removeNativeListener(h,i,l.listener);
}delete this._registeredEvents[k];
},_onNative:qx.event.GlobalError.observeMethod(function(d,e){var g=this._registeredEvents;

if(!g){return;
}var f=g[e];
qx.event.Registration.fireNonBubblingEvent(f.element,f.type,qx.event.type.Native,[d]);
})},destruct:function(){var o;
var p=this._registeredEvents;

for(var q in p){o=p[q];
qx.bom.Event.removeNativeListener(o.element,o.type,o.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var l="qx.event.handler.Appear",k="disappear",j="appear";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(i){qx.core.Object.call(this);
this.__fr=i;
this.__fs={};
qx.event.handler.Appear.__ft[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ft:{},refresh:function(){var r=this.__ft;

for(var s in r){r[s].refresh();
}}},members:{__fr:null,__fs:null,canHandleEvent:function(f,g){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__fs;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(a,b,c){var d=qx.core.ObjectRegistry.toHashCode(a)+b;
var e=this.__fs;

if(!e){return;
}
if(e[d]){delete e[d];
}},refresh:function(){var p=this.__fs;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?j:k);
this.__fr.dispatchEvent(q,n);
}}}},destruct:function(){this.__fr=this.__fs=null;
delete qx.event.handler.Appear.__ft[this.$$hash];
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var t="mshtml",s="",r="qx.client",q=">",p=" ",o="<",n="='",m="none",k="qx.bom.Element",h="' ",f="div",g="></";
qx.Class.define(k,{statics:{__fu:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__fv:{},getHelperElement:function(x){if(!x){x=window;
}var z=x.location.href;

if(!qx.bom.Element.__fv[z]){var y=qx.bom.Element.__fv[z]=x.document.createElement(f);
if(qx.bom.client.Engine.WEBKIT){y.style.display=m;
x.document.body.appendChild(y);
}}return qx.bom.Element.__fv[z];
},create:function(name,T,U){if(!U){U=window;
}
if(!name){throw new Error("The tag name is missing!");
}var W=this.__fu;
var V=s;

for(var Y in T){if(W[Y]){V+=Y+n+T[Y]+h;
}}var ba;
if(V!=s){if(qx.bom.client.Engine.MSHTML){ba=U.document.createElement(o+name+p+V+q);
}else{var X=qx.bom.Element.getHelperElement(U);
X.innerHTML=o+name+p+V+g+name+q;
ba=X.firstChild;
}}else{ba=U.document.createElement(name);
}
for(var Y in T){if(!W[Y]){qx.bom.element.Attribute.set(ba,Y,T[Y]);
}}return ba;
},empty:function(bf){return bf.innerHTML=s;
},addListener:function(bb,bc,bd,self,be){return qx.event.Registration.addListener(bb,bc,bd,self,be);
},removeListener:function(N,O,P,self,Q){return qx.event.Registration.removeListener(N,O,P,self,Q);
},removeListenerById:function(b,c){return qx.event.Registration.removeListenerById(b,c);
},hasListener:function(u,v,w){return qx.event.Registration.hasListener(u,v,w);
},focus:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).focus(R);
},blur:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).blur(S);
},activate:function(bg){qx.event.Registration.getManager(bg).getHandler(qx.event.handler.Focus).activate(bg);
},deactivate:function(A){qx.event.Registration.getManager(A).getHandler(qx.event.handler.Focus).deactivate(A);
},capture:function(d,e){qx.event.Registration.getManager(d).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(d,e);
},releaseCapture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(a);
},clone:function(B,C){var F;

if(C||(qx.core.Variant.isSet(r,t)&&!qx.xml.Document.isXmlDocument(B))){var J=qx.event.Registration.getManager(B);
var D=qx.dom.Hierarchy.getDescendants(B);
D.push(B);
}if(qx.core.Variant.isSet(r,t)){for(var i=0,l=D.length;i<l;i++){J.toggleAttachedEvents(D[i],false);
}}var F=B.cloneNode(true);
if(qx.core.Variant.isSet(r,t)){for(var i=0,l=D.length;i<l;i++){J.toggleAttachedEvents(D[i],true);
}}if(C===true){var M=qx.dom.Hierarchy.getDescendants(F);
M.push(F);
var E,H,L,G;

for(var i=0,K=D.length;i<K;i++){L=D[i];
E=J.serializeListeners(L);

if(E.length>0){H=M[i];

for(var j=0,I=E.length;j<I;j++){G=E[j];
J.addListener(H,G.type,G.handler,G.self,G.capture);
}}}}return F;
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
(function(){var V="qx.client",U="blur",T="focus",S="mousedown",R="on",Q="mouseup",P="DOMFocusOut",O="DOMFocusIn",N="selectstart",M="onmousedown",bq="onfocusout",bp="onfocusin",bo="onmouseup",bn="onselectstart",bm="draggesture",bl="qx.event.handler.Focus",bk="_applyFocus",bj="deactivate",bi="textarea",bh="_applyActive",bd="input",be="focusin",bb="qxSelectable",bc="tabIndex",Y="off",ba="activate",W="mshtml",X="focusout",bf="qxKeepFocus",bg="qxKeepActive";
qx.Class.define(bl,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bh,nullable:true},focus:{apply:bk,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fw:null,__fx:null,__fy:null,__fz:null,__fA:null,__fB:null,__fC:null,__fD:null,__fE:null,__fF:null,canHandleEvent:function(bK,bL){},registerEvent:function(c,d,f){},unregisterEvent:function(C,D,E){},focus:function(bF){if(qx.core.Variant.isSet(V,W)){window.setTimeout(function(){try{bF.focus();
}catch(l){}},0);
}else{try{bF.focus();
}catch(A){}}this.setFocus(bF);
this.setActive(bF);
},activate:function(bv){this.setActive(bv);
},blur:function(m){try{m.blur();
}catch(q){}
if(this.getActive()===m){this.resetActive();
}
if(this.getFocus()===m){this.resetFocus();
}},deactivate:function(k){if(this.getActive()===k){this.resetActive();
}},tryActivate:function(bt){var bu=this.__fU(bt);

if(bu){this.setActive(bu);
}},__fG:function(t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(v,qx.event.type.Focus,[t,u,w]);
y.dispatchEvent(t,x);
},_windowFocused:true,__fH:function(){if(this._windowFocused){this._windowFocused=false;
this.__fG(this._window,null,U,false);
}},__fI:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fG(this._window,null,T,false);
}},_initObserver:qx.core.Variant.select(V,{"gecko":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fy=qx.lang.Function.listener(this.__fN,this);
this.__fz=qx.lang.Function.listener(this.__fM,this);
this.__fA=qx.lang.Function.listener(this.__fJ,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._window.addEventListener(T,this.__fy,true);
this._window.addEventListener(U,this.__fz,true);
this._window.addEventListener(bm,this.__fA,true);
},"mshtml":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fC=qx.lang.Function.listener(this.__fK,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this.__fB=qx.lang.Function.listener(this.__fR,this);
this._document.attachEvent(M,this.__fw);
this._document.attachEvent(bo,this.__fx);
this._document.attachEvent(bp,this.__fC);
this._document.attachEvent(bq,this.__fD);
this._document.attachEvent(bn,this.__fB);
},"webkit":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this.__fy=qx.lang.Function.listener(this.__fN,this);
this.__fz=qx.lang.Function.listener(this.__fM,this);
this.__fB=qx.lang.Function.listener(this.__fR,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._document.addEventListener(N,this.__fB,false);
this._window.addEventListener(P,this.__fD,true);
this._window.addEventListener(T,this.__fy,true);
this._window.addEventListener(U,this.__fz,true);
},"opera":function(){this.__fw=qx.lang.Function.listener(this.__fO,this);
this.__fx=qx.lang.Function.listener(this.__fP,this);
this.__fC=qx.lang.Function.listener(this.__fK,this);
this.__fD=qx.lang.Function.listener(this.__fL,this);
this._document.addEventListener(S,this.__fw,true);
this._document.addEventListener(Q,this.__fx,true);
this._window.addEventListener(O,this.__fC,true);
this._window.addEventListener(P,this.__fD,true);
}}),_stopObserver:qx.core.Variant.select(V,{"gecko":function(){this._document.removeEventListener(S,this.__fw,true);
this._document.removeEventListener(Q,this.__fx,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
this._window.removeEventListener(bm,this.__fA,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,M,this.__fw);
qx.bom.Event.removeNativeListener(this._document,bo,this.__fx);
qx.bom.Event.removeNativeListener(this._document,bp,this.__fC);
qx.bom.Event.removeNativeListener(this._document,bq,this.__fD);
qx.bom.Event.removeNativeListener(this._document,bn,this.__fB);
},"webkit":function(){this._document.removeEventListener(S,this.__fw,true);
this._document.removeEventListener(N,this.__fB,false);
this._window.removeEventListener(O,this.__fC,true);
this._window.removeEventListener(P,this.__fD,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
},"opera":function(){this._document.removeEventListener(S,this.__fw,true);
this._window.removeEventListener(O,this.__fC,true);
this._window.removeEventListener(P,this.__fD,true);
this._window.removeEventListener(T,this.__fy,true);
this._window.removeEventListener(U,this.__fz,true);
}}),__fJ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){if(!this.__fV(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fK:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){this.__fI();
var bs=e.srcElement;
var br=this.__fT(bs);

if(br){this.setFocus(br);
}this.tryActivate(bs);
},"opera":function(e){var F=e.target;

if(F==this._document||F==this._window){this.__fI();

if(this.__fE){this.setFocus(this.__fE);
delete this.__fE;
}
if(this.__fF){this.setActive(this.__fF);
delete this.__fF;
}}else{this.setFocus(F);
this.tryActivate(F);
if(!this.__fV(F)){F.selectionStart=0;
F.selectionEnd=0;
}}},"default":null})),__fL:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){if(!e.toElement){this.__fH();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bz=e.target;

if(bz===this.getFocus()){this.resetFocus();
}
if(bz===this.getActive()){this.resetActive();
}},"opera":function(e){var bC=e.target;

if(bC==this._document){this.__fH();
this.__fE=this.getFocus();
this.__fF=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bC===this.getFocus()){this.resetFocus();
}
if(bC===this.getActive()){this.resetActive();
}}},"default":null})),__fM:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fH();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fH();
this.__fE=this.getFocus();
this.__fF=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fN:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){var bw=e.target;

if(bw===this._window||bw===this._document){this.__fI();
bw=this._body;
}this.setFocus(bw);
this.tryActivate(bw);
},"webkit":function(e){var by=e.target;

if(by===this._window||by===this._document){this.__fI();

if(this.__fE){this.setFocus(this.__fE);
delete this.__fE;
}
if(this.__fF){this.setActive(this.__fF);
delete this.__fF;
}}else{this.setFocus(by);
this.tryActivate(by);
}},"default":null})),__fO:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"gecko":function(e){var B=this.__fT(e.target);

if(!B){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bE=e.srcElement;
var bD=this.__fT(bE);

if(bD){if(!this.__fV(bE)){bE.unselectable=R;
try{document.selection.empty();
}catch(e){}try{bD.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fV(bE)){bE.unselectable=R;
}}},"webkit":function(e){var p=e.target;
var o=this.__fT(p);

if(o){this.setFocus(o);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var L=e.target;
var J=this.__fT(L);

if(!this.__fV(L)){qx.bom.Event.preventDefault(e);
if(J){var K=this.getFocus();

if(K&&K.selectionEnd){K.selectionStart=0;
K.selectionEnd=0;
K.blur();
}if(J){this.setFocus(J);
}}}else if(J){this.setFocus(J);
}},"default":null})),__fP:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml":function(e){var a=e.srcElement;

if(a.unselectable){a.unselectable=Y;
}this.tryActivate(this.__fQ(a));
},"gecko":function(e){var z=e.target;

while(z&&z.offsetWidth===undefined){z=z.parentNode;
}
if(z){this.tryActivate(z);
}},"webkit|opera":function(e){this.tryActivate(this.__fQ(e.target));
},"default":null})),__fQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml|webkit":function(bM){var bN=this.getFocus();

if(bN&&bM!=bN&&(bN.nodeName.toLowerCase()===bd||bN.nodeName.toLowerCase()===bi)){bM=bN;
}return bM;
},"default":function(j){return j;
}})),__fR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(V,{"mshtml|webkit":function(e){var n=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fV(n)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fS:function(G){var H=qx.bom.element.Attribute.get(G,bc);

if(H>=1){return true;
}var I=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(H>=0&&I[G.tagName]){return true;
}return false;
},__fT:function(bx){while(bx&&bx.nodeType===1){if(bx.getAttribute(bf)==R){return null;
}
if(this.__fS(bx)){return bx;
}bx=bx.parentNode;
}return this._body;
},__fU:function(bG){var bH=bG;

while(bG&&bG.nodeType===1){if(bG.getAttribute(bg)==R){return null;
}bG=bG.parentNode;
}return bH;
},__fV:function(bA){while(bA&&bA.nodeType===1){var bB=bA.getAttribute(bb);

if(bB!=null){return bB===R;
}bA=bA.parentNode;
}return true;
},_applyActive:function(r,s){if(s){this.__fG(s,r,bj,true);
}
if(r){this.__fG(r,s,ba,true);
}},_applyFocus:function(bI,bJ){if(bJ){this.__fG(bJ,bI,X,true);
}
if(bI){this.__fG(bI,bJ,be,true);
}if(bJ){this.__fG(bJ,bI,U,false);
}
if(bI){this.__fG(bI,bJ,T,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fW=null;
},defer:function(g){qx.event.Registration.addHandler(g);
var h=g.FOCUSABLE_ELEMENTS;

for(var i in h){h[i.toUpperCase()]=1;
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
qx.Class.define(i,{statics:{__fX:{names:{"class":f,"for":B,html:u,text:qx.core.Variant.isSet(l,p)?v:e,colspan:o,rowspan:h,valign:g,datetime:r,accesskey:j,tabindex:t,maxlength:s,readonly:k,longdesc:A,cellpadding:q,cellspacing:z,frameborder:y,usemap:w},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:n,className:n,innerHTML:n,innerText:n,textContent:n,htmlFor:n,tabIndex:0,maxLength:qx.core.Variant.select(l,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(D){var E=[];
var G=this.__fX.runtime;

for(var F in D){if(!G[F]){E.push(F,x,D[F],C);
}}return E.join(n);
},get:qx.core.Variant.select(l,{"mshtml":function(H,name){var J=this.__fX;
var I;
name=J.names[name]||name;
if(J.original[name]){I=H.getAttribute(name,2);
}else if(J.property[name]){I=H[name];

if(typeof J.propertyDefault[name]!==m&&I==J.propertyDefault[name]){if(typeof J.bools[name]===m){return null;
}else{return I;
}}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
},"default":function(b,name){var d=this.__fX;
var c;
name=d.names[name]||name;
if(d.property[name]){c=b[name];

if(typeof d.propertyDefault[name]!==m&&c==d.propertyDefault[name]){if(typeof d.bools[name]===m){return null;
}else{return c;
}}}else{c=b.getAttribute(name);
}if(d.bools[name]){return !!c;
}return c;
}}),set:function(K,name,L){var M=this.__fX;
name=M.names[name]||name;
if(M.bools[name]){L=!!L;
}if(M.property[name]&&(!(K[name]===undefined)||M.qxProperties[name])){if(L==null){if(M.removeableProperties[name]){K.removeAttribute(name);
return;
}else if(typeof M.propertyDefault[name]!==m){L=M.propertyDefault[name];
}}K[name]=L;
}else{if(L===true){K.setAttribute(name,name);
}else if(L===false||L===null){K.removeAttribute(name);
}else{K.setAttribute(name,L);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){qx.event.type.Dom.prototype.init.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
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
},__fY:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__fY[this._native.button]||d;
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
(function(){var i="qx.client",h="qx.bom.Viewport";
qx.Class.define(h,{statics:{getWidth:qx.core.Variant.select(i,{"opera":function(d){if(qx.bom.client.Engine.VERSION<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(s){if(qx.bom.client.Engine.VERSION<523.15){return (s||window).innerWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"default":function(q){var r=(q||window).document;
return qx.bom.Document.isStandardMode(q)?r.documentElement.clientWidth:r.body.clientWidth;
}}),getHeight:qx.core.Variant.select(i,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(f){if(qx.bom.client.Engine.VERSION<523.15){return (f||window).innerHeight;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientHeight:g.body.clientHeight;
}},"default":function(o){var p=(o||window).document;
return qx.bom.Document.isStandardMode(o)?p.documentElement.clientHeight:p.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(i,{"mshtml":function(m){var n=(m||window).document;
return n.documentElement.scrollLeft||n.body.scrollLeft;
},"default":function(c){return (c||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(i,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollTop||b.body.scrollTop;
},"default":function(j){return (j||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(k){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (k||window).document.compatMode!==f;
}},"webkit":function(o){if(document.compatMode===undefined){var p=(o||window).document.createElement(a);
p.style.cssText=e;
return p.style.width===c?true:false;
}else{return (o||window).document.compatMode!==f;
}},"default":function(g){return (g||window).document.compatMode!==f;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getWidth(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollWidth:m.body.scrollWidth;
return Math.max(scroll,n);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var k="qx.client",j="ie",i="msie",h="android",g="operamini",f="mobile chrome",e=")(/| )([0-9]+\.[0-9])",d="iemobile",c="opera mobi",b="Mobile Safari",y="operamobile",x="mobile safari",w="IEMobile|Maxthon|MSIE",v="qx.bom.client.Browser",u="opera mini",t="(",s="opera",r="mshtml",q="Opera Mini|Opera Mobi|Opera",p="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",o="5.0",l="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",m="Mobile/";
qx.Bootstrap.define(v,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__ga:function(B){var C=navigator.userAgent;
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
}},defer:qx.core.Variant.select(k,{"webkit":function(a){a.__ga(p);
},"gecko":function(G){G.__ga(l);
},"mshtml":function(z){z.__ga(w);
},"opera":function(A){A.__ga(q);
}})});
})();
(function(){var P="qx.client",O="qx.dom.Hierarchy",N="previousSibling",M="*",L="nextSibling",K="parentNode";
qx.Class.define(O,{statics:{getNodeIndex:function(D){var E=0;

while(D&&(D=D.previousSibling)){E++;
}return E;
},getElementIndex:function(f){var g=0;
var h=qx.dom.Node.ELEMENT;

while(f&&(f=f.previousSibling)){if(f.nodeType==h){g++;
}}return g;
},getNextElementSibling:function(b){while(b&&(b=b.nextSibling)&&!qx.dom.Node.isElement(b)){continue;
}return b||null;
},getPreviousElementSibling:function(V){while(V&&(V=V.previousSibling)&&!qx.dom.Node.isElement(V)){continue;
}return V||null;
},contains:qx.core.Variant.select(P,{"webkit|mshtml|opera":function(p,q){if(qx.dom.Node.isDocument(p)){var r=qx.dom.Node.getDocument(q);
return p&&r==p;
}else if(qx.dom.Node.isDocument(q)){return false;
}else{return p.contains(q);
}},"gecko":function(c,d){return !!(c.compareDocumentPosition(d)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(I){if(!I.offsetParent){return false;
}var J=I.ownerDocument||I.document;
if(J.body.contains){return J.body.contains(I);
}if(J.compareDocumentPosition){return !!(J.compareDocumentPosition(I)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(u,v){return this.contains(v,u);
},getCommonParent:qx.core.Variant.select(P,{"mshtml|opera":function(j,k){if(j===k){return j;
}
while(j&&qx.dom.Node.isElement(j)){if(j.contains(k)){return j;
}j=j.parentNode;
}return null;
},"default":function(x,y){if(x===y){return x;
}var z={};
var C=qx.core.ObjectRegistry;
var B,A;

while(x||y){if(x){B=C.toHashCode(x);

if(z[B]){return z[B];
}z[B]=x;
x=x.parentNode;
}
if(y){A=C.toHashCode(y);

if(z[A]){return z[A];
}z[A]=y;
y=y.parentNode;
}}return null;
}}),getAncestors:function(o){return this._recursivelyCollect(o,K);
},getChildElements:function(G){G=G.firstChild;

if(!G){return [];
}var H=this.getNextSiblings(G);

if(G.nodeType===1){H.unshift(G);
}return H;
},getDescendants:function(s){return qx.lang.Array.fromCollection(s.getElementsByTagName(M));
},getFirstDescendant:function(a){a=a.firstChild;

while(a&&a.nodeType!=1){a=a.nextSibling;
}return a;
},getLastDescendant:function(e){e=e.lastChild;

while(e&&e.nodeType!=1){e=e.previousSibling;
}return e;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,N);
},getNextSiblings:function(w){return this._recursivelyCollect(w,L);
},_recursivelyCollect:function(l,m){var n=[];

while(l=l[m]){if(l.nodeType==1){n.push(l);
}}return n;
},getSiblings:function(i){return this.getPreviousSiblings(i).reverse().concat(this.getNextSiblings(i));
},isEmpty:function(t){t=t.firstChild;

while(t){if(t.nodeType===qx.dom.Node.ELEMENT||t.nodeType===qx.dom.Node.TEXT){return false;
}t=t.nextSibling;
}return true;
},cleanWhitespace:function(Q){var R=Q.firstChild;

while(R){var S=R.nextSibling;

if(R.nodeType==3&&!/\S/.test(R.nodeValue)){Q.removeChild(R);
}R=S;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(n,o){qx.event.type.Event.prototype.init.call(this,true,n);

if(o){this._native=o.getNativeEvent()||null;
this._originalTarget=o.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(l){var m=qx.event.type.Event.prototype.clone.call(this,l);
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
},addType:function(j){this.getManager().addType(j);
},addAction:function(g){this.getManager().addAction(g);
},supportsType:function(c){return this.getManager().supportsType(c);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(i){return this.getManager().getData(i);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var s="losecapture",r="qx.client",q="blur",p="focus",o="click",n="qx.event.dispatch.MouseCapture",m="capture",l="scroll";
qx.Class.define(n,{extend:qx.event.dispatch.AbstractBubbling,construct:function(e,f){qx.event.dispatch.AbstractBubbling.call(this,e);
this.__ge=e.getWindow();
this.__gf=f;
e.addListener(this.__ge,q,this.releaseCapture,this);
e.addListener(this.__ge,p,this.releaseCapture,this);
e.addListener(this.__ge,l,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__gf:null,__gg:null,__gh:true,__ge:null,_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(j,event,k){return (this.__gg&&this.__gi[k]);
},dispatchEvent:function(g,event,h){if(h==o){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__gh||!qx.dom.Hierarchy.contains(this.__gg,g)){g=this.__gg;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,g,event,h);
},__gi:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(t,u){var u=u!==false;

if(this.__gg===t&&this.__gh==u){return;
}
if(this.__gg){this.releaseCapture();
}this.nativeSetCapture(t,u);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(t,s,function(){qx.bom.Event.removeNativeListener(t,s,arguments.callee);
self.releaseCapture();
});
}this.__gh=u;
this.__gg=t;
this.__gf.fireEvent(t,m,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__gg;
},releaseCapture:function(){var v=this.__gg;

if(!v){return;
}this.__gg=null;
this.__gf.fireEvent(v,s,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(r,{"mshtml":function(b,c){b.setCapture(c!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(r,{"mshtml":function(a){a.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__gg=this.__ge=this.__gf=null;
},defer:function(i){qx.event.Registration.addDispatcher(i);
}});
})();
(function(){var v="qx.client",u="",t="mshtml",s="'",r="SelectionLanguage",q="qx.xml.Document",p=" />",o="MSXML2.DOMDocument.3.0",n='<\?xml version="1.0" encoding="utf-8"?>\n<',m="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",k=" xmlns='",j="text/xml",f="XPath",e="MSXML2.DOMDocument.6.0",h="HTML";
qx.Class.define(q,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(w){if(w.nodeType===9){return w.documentElement.nodeName!==h;
}else if(w.ownerDocument){return this.isXmlDocument(w.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(v,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(r,f);

if(y){var A=n;
A+=y;

if(x){A+=k+x+s;
}A+=p;
z.loadXML(A);
}return z;
},"default":function(a,b){return document.implementation.createDocument(a||u,b||u,null);
}}),fromString:qx.core.Variant.select(v,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(c){var d=new DOMParser();
return d.parseFromString(c,j);
}})},defer:function(B){if(qx.core.Variant.isSet(v,t)){var C=[e,o];
var D=[g,m];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
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
(function(){var G="",F="qx.client",E="hidden",D="-moz-scrollbars-none",C="overflow",B=";",A="overflowY",z=":",y="overflowX",x="overflow:",S="none",R="scroll",Q="borderLeftStyle",P="borderRightStyle",O="div",N="borderRightWidth",M="overflow-y",L="borderLeftWidth",K="-moz-scrollbars-vertical",J="100px",H="qx.bom.element.Overflow",I="overflow-x";
qx.Class.define(H,{statics:{__gj:null,getScrollbarWidth:function(){if(this.__gj!==null){return this.__gj;
}var l=qx.bom.element.Style;
var n=function(h,i){return parseInt(l.get(h,i))||0;
};
var o=function(bJ){return (l.get(bJ,P)==S?0:n(bJ,N));
};
var m=function(bU){return (l.get(bU,Q)==S?0:n(bU,L));
};
var q=qx.core.Variant.select(F,{"mshtml":function(ca){if(l.get(ca,A)==E||ca.clientWidth==0){return o(ca);
}return Math.max(0,ca.offsetWidth-ca.clientLeft-ca.clientWidth);
},"default":function(bm){if(bm.clientWidth==0){var bn=l.get(bm,C);
var bo=(bn==R||bn==K?16:0);
return Math.max(0,o(bm)+bo);
}return Math.max(0,(bm.offsetWidth-bm.clientWidth-m(bm)));
}});
var p=function(bA){return q(bA)-o(bA);
};
var t=document.createElement(O);
var s=t.style;
s.height=s.width=J;
s.overflow=R;
document.body.appendChild(t);
var c=p(t);
this.__gj=c?c:16;
document.body.removeChild(t);
return this.__gj;
},_compile:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bK,bL){if(bL==E){bL=D;
}return x+bL+B;
}:
function(bh,bi){return bh+z+bi+B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(V,W){return x+W+B;
}:
function(ce,cf){return ce+z+cf+B;
},"default":function(bP,bQ){return bP+z+bQ+B;
}}),compileX:function(bM){return this._compile(I,bM);
},compileY:function(bz){return this._compile(M,bz);
},getX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bE,bF){var bG=qx.bom.element.Style.get(bE,C,bF,false);

if(bG===D){bG=E;
}return bG;
}:
function(f,g){return qx.bom.element.Style.get(f,y,g,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(a,b){return qx.bom.element.Style.get(a,C,b,false);
}:
function(bH,bI){return qx.bom.element.Style.get(bH,y,bI,false);
},"default":function(j,k){return qx.bom.element.Style.get(j,y,k,false);
}}),setX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bf,bg){if(bg==E){bg=D;
}bf.style.overflow=bg;
}:
function(bN,bO){bN.style.overflowX=bO;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ba,bb){ba.style.overflow=bb;
}:
function(T,U){T.style.overflowX=U;
},"default":function(bS,bT){bS.style.overflowX=bT;
}}),resetX:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bD){bD.style.overflow=G;
}:
function(bX){bX.style.overflowX=G;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bv,bw){bv.style.overflow=G;
}:
function(bt,bu){bt.style.overflowX=G;
},"default":function(bl){bl.style.overflowX=G;
}}),getY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(cb,cc){var cd=qx.bom.element.Style.get(cb,C,cc,false);

if(cd===D){cd=E;
}return cd;
}:
function(r,u){return qx.bom.element.Style.get(r,A,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(X,Y){return qx.bom.element.Style.get(X,C,Y,false);
}:
function(br,bs){return qx.bom.element.Style.get(br,A,bs,false);
},"default":function(v,w){return qx.bom.element.Style.get(v,A,w,false);
}}),setY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bd,be){if(be===E){be=D;
}bd.style.overflow=be;
}:
function(bV,bW){bV.style.overflowY=bW;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bx,by){bx.style.overflow=by;
}:
function(bB,bC){bB.style.overflowY=bC;
},"default":function(bp,bq){bp.style.overflowY=bq;
}}),resetY:qx.core.Variant.select(F,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bY){bY.style.overflow=G;
}:
function(bc){bc.style.overflowY=G;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bj,bk){bj.style.overflow=G;
}:
function(d,e){d.style.overflowY=G;
},"default":function(bR){bR.style.overflowY=G;
}})}});
})();
(function(){var v="auto",u="px",t=",",s="clip:auto;",r="rect(",q=");",p="",o=")",n="qx.bom.element.Clip",m="string",j="rect(auto)",l="clip:rect(",k="clip",i="rect(auto,auto,auto,auto)";
qx.Class.define(n,{statics:{compile:function(w){if(!w){return s;
}var B=w.left;
var top=w.top;
var A=w.width;
var z=w.height;
var x,y;

if(B==null){x=(A==null?v:A+u);
B=v;
}else{x=(A==null?v:B+A+u);
B=B+u;
}
if(top==null){y=(z==null?v:z+u);
top=v;
}else{y=(z==null?v:top+z+u);
top=top+u;
}return l+top+t+x+t+y+t+B+q;
},get:function(C,D){var F=qx.bom.element.Style.get(C,k,D,false);
var K,top,I,H;
var E,G;

if(typeof F===m&&F!==v&&F!==p){F=qx.lang.String.trim(F);
if(/\((.*)\)/.test(F)){var J=RegExp.$1.split(t);
top=qx.lang.String.trim(J[0]);
E=qx.lang.String.trim(J[1]);
G=qx.lang.String.trim(J[2]);
K=qx.lang.String.trim(J[3]);
if(K===v){K=null;
}
if(top===v){top=null;
}
if(E===v){E=null;
}
if(G===v){G=null;
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
},set:function(b,c){if(!c){b.style.clip=i;
return;
}var h=c.left;
var top=c.top;
var g=c.width;
var f=c.height;
var d,e;

if(h==null){d=(g==null?v:g+u);
h=v;
}else{d=(g==null?v:h+g+u);
h=h+u;
}
if(top==null){e=(f==null?v:f+u);
top=v;
}else{e=(f==null?v:top+f+u);
top=top+u;
}b.style.clip=r+top+t+d+t+e+t+h+o;
},reset:function(a){a.style.clip=qx.bom.client.Engine.MSHTML?j:v;
}}});
})();
(function(){var n="n-resize",m="e-resize",l="nw-resize",k="ne-resize",j="",i="cursor:",h="qx.client",g=";",f="qx.bom.element.Cursor",e="cursor",d="hand";
qx.Class.define(f,{statics:{__gk:qx.core.Variant.select(h,{"mshtml":{"cursor":d,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"opera":{"col-resize":m,"row-resize":n,"ew-resize":m,"ns-resize":n,"nesw-resize":k,"nwse-resize":l},"default":{}}),compile:function(o){return i+(this.__gk[o]||o)+g;
},get:function(a,b){return qx.bom.element.Style.get(a,e,b,false);
},set:function(p,q){p.style.cursor=this.__gk[q]||q;
},reset:function(c){c.style.cursor=j;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(D){if(D>=1){return u;
}
if(D<0.00001){D=0;
}return l+(D*100)+n;
},"gecko":function(f){if(f==1){f=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+f+s;
}else{return q+f+s;
}},"default":function(G){if(G==1){return u;
}return q+G+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(y,z){var A=qx.bom.element.Style.get(y,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(z>=1){y.style.filter=A.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(z<0.00001){z=0;
}if(!y.currentStyle||!y.currentStyle.hasLayout){y.style.zoom=1;
}y.style.filter=A.replace(/alpha\([^\)]*\)/gi,u)+k+z*100+m;
},"gecko":function(g,h){if(h==1){h=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){g.style.MozOpacity=h;
}else{g.style.opacity=h;
}},"default":function(E,F){if(F==1){F=u;
}E.style.opacity=F;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(B){var C=qx.bom.element.Style.get(B,r,qx.bom.element.Style.COMPUTED_MODE,false);
B.style.filter=C.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(e){if(qx.bom.client.Engine.VERSION<1.7){e.style.MozOpacity=u;
}else{e.style.opacity=u;
}},"default":function(a){a.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,r,I,false);

if(J){var K=J.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
},"gecko":function(b,c){var d=qx.bom.element.Style.get(b,qx.bom.client.Engine.VERSION<1.7?o:p,c,false);

if(d==0.999999){d=1.0;
}
if(d!=null){return parseFloat(d);
}return 1.0;
},"default":function(v,w){var x=qx.bom.element.Style.get(v,p,w,false);

if(x!=null){return parseFloat(x);
}return 1.0;
}})}});
})();
(function(){var x="qx.client",w="",v="qx.debug",u="boxSizing",t="on",s="box-sizing",r=":",q="border-box",p="qx.bom.element.BoxSizing",o="KhtmlBoxSizing",h="-moz-box-sizing",n="WebkitBoxSizing",m=";",g="-khtml-box-sizing",f="content-box",k="-webkit-box-sizing",j="MozBoxSizing";
qx.Class.define(p,{statics:{__gl:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,o,n],"gecko":[j],"opera":[u]}),__gm:qx.core.Variant.select(x,{"mshtml":null,"webkit":[s,g,k],"gecko":[h],"opera":[s]}),__gn:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__go:function(d){var e=this.__gn;
return e.tags[d.tagName.toLowerCase()]||e.types[d.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(F){if(qx.core.Variant.isSet(v,t)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(y){var A=this.__gm;
var z=w;

if(A){for(var i=0,l=A.length;i<l;i++){z+=A[i]+r+y+m;
}}return z;
}}),get:qx.core.Variant.select(x,{"mshtml":function(C){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(C))){if(!this.__go(C)){return f;
}}return q;
},"default":function(G){var I=this.__gl;
var H;

if(I){for(var i=0,l=I.length;i<l;i++){H=qx.bom.element.Style.get(G,I[i],null,false);

if(H!=null&&H!==w){return H;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(D,E){if(qx.core.Variant.isSet(v,t)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(a,b){var c=this.__gl;

if(c){for(var i=0,l=c.length;i<l;i++){a.style[c[i]]=b;
}}}}),reset:function(B){this.set(B,w);
}}});
})();
(function(){var F="",E="qx.client",D="userSelect",C="qx.debug",B="on",A="Invalid argument 'smart'",z="style",y="Invalid argument 'element'",x="MozUserModify",w="px",bf="float",be="borderImage",bd="styleFloat",bc="appearance",bb="pixelHeight",ba='Ms',Y=":",X="cssFloat",W="pixelTop",V="Invalid argument 'name'",M="pixelLeft",N='O',K="Invalid argument 'styles'",L="qx.bom.element.Style",I='Khtml',J='string',G="pixelRight",H='Moz',O="pixelWidth",P="pixelBottom",R=";",Q="textOverflow",T="userModify",S='Webkit',U="WebkitUserModify";
qx.Class.define(L,{statics:{__gp:function(){var m=[bc,D,Q,be];
var q={};
var n=document.documentElement.style;
var r=[H,S,I,N,ba];

for(var i=0,l=m.length;i<l;i++){var s=m[i];
var o=s;

if(n[s]){q[o]=s;
continue;
}s=qx.lang.String.firstUp(s);

for(var j=0,t=r.length;j<t;j++){var p=r[j]+s;

if(typeof n[p]==J){q[o]=p;
break;
}}}this.__gq=q;
this.__gq[T]=qx.core.Variant.select(E,{"gecko":x,"webkit":U,"default":D});
this.__gr={};

for(var o in q){this.__gr[o]=this.__gv(q[o]);
}this.__gq[bf]=qx.core.Variant.select(E,{"mshtml":bd,"default":X});
},__gs:{width:O,height:bb,left:M,right:G,top:W,bottom:P},__gt:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bB){var bD=[];
var bF=this.__gt;
var bE=this.__gr;
var name,bC;

for(name in bB){bC=bB[name];

if(bC==null){continue;
}name=bE[name]||name;
if(bF[name]){bD.push(bF[name].compile(bC));
}else{bD.push(this.__gv(name),Y,bC,R);
}}return bD.join(F);
},__gu:{},__gv:function(bH){var bI=this.__gu;
var bJ=bI[bH];

if(!bJ){bJ=bI[bH]=qx.lang.String.hyphenate(bH);
}return bJ;
},setCss:qx.core.Variant.select(E,{"mshtml":function(bj,bk){bj.style.cssText=bk;
},"default":function(u,v){u.setAttribute(z,v);
}}),getCss:qx.core.Variant.select(E,{"mshtml":function(bg){return bg.style.cssText.toLowerCase();
},"default":function(bx){return bx.getAttribute(z);
}}),isPropertySupported:function(k){return (this.__gt[k]||this.__gq[k]||k in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(by,name,bz,bA){if(qx.core.Variant.isSet(C,B)){qx.core.Assert.assertElement(by,y);
qx.core.Assert.assertString(name,V);

if(bA!==undefined){qx.core.Assert.assertBoolean(bA,A);
}}name=this.__gq[name]||name;
if(bA!==false&&this.__gt[name]){return this.__gt[name].set(by,bz);
}else{by.style[name]=bz!==null?bz:F;
}},setStyles:function(a,b,c){if(qx.core.Variant.isSet(C,B)){qx.core.Assert.assertElement(a,y);
qx.core.Assert.assertMap(b,K);

if(c!==undefined){qx.core.Assert.assertBoolean(c,A);
}}var f=this.__gq;
var h=this.__gt;
var d=a.style;

for(var g in b){var e=b[g];
var name=f[g]||g;

if(e===undefined){if(c!==false&&h[name]){h[name].reset(a);
}else{d[name]=F;
}}else{if(c!==false&&h[name]){h[name].set(a,e);
}else{d[name]=e!==null?e:F;
}}}},reset:function(bh,name,bi){name=this.__gq[name]||name;
if(bi!==false&&this.__gt[name]){return this.__gt[name].reset(bh);
}else{bh.style[name]=F;
}},get:qx.core.Variant.select(E,{"mshtml":function(bq,name,br,bs){name=this.__gq[name]||name;
if(bs!==false&&this.__gt[name]){return this.__gt[name].get(bq,br);
}if(!bq.currentStyle){return bq.style[name]||F;
}switch(br){case this.LOCAL_MODE:return bq.style[name]||F;
case this.CASCADED_MODE:return bq.currentStyle[name]||F;
default:var bw=bq.currentStyle[name]||F;
if(/^-?[\.\d]+(px)?$/i.test(bw)){return bw;
}var bv=this.__gs[name];

if(bv){var bt=bq.style[name];
bq.style[name]=bw||0;
var bu=bq.style[bv]+w;
bq.style[name]=bt;
return bu;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bw)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bw;
}},"default":function(bl,name,bm,bn){name=this.__gq[name]||name;
if(bn!==false&&this.__gt[name]){return this.__gt[name].get(bl,bm);
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||F;
case this.CASCADED_MODE:if(bl.currentStyle){return bl.currentStyle[name]||F;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bo=qx.dom.Node.getDocument(bl);
var bp=bo.defaultView.getComputedStyle(bl,null);
return bp?bp[name]:F;
}}})},defer:function(bG){bG.__gp();
}});
})();
(function(){var X="borderTopWidth",W="borderLeftWidth",V="marginTop",U="marginLeft",T="scroll",S="qx.client",R="border-box",Q="borderBottomWidth",P="borderRightWidth",O="auto",bn="padding",bm="qx.bom.element.Location",bl="paddingLeft",bk="static",bj="marginBottom",bi="visible",bh="BODY",bg="paddingBottom",bf="paddingTop",be="marginRight",bc="position",bd="margin",ba="overflow",bb="paddingRight",Y="border";
qx.Class.define(bm,{statics:{__gw:function(by,bz){return qx.bom.element.Style.get(by,bz,qx.bom.element.Style.COMPUTED_MODE,false);
},__gx:function(bO,bP){return parseInt(qx.bom.element.Style.get(bO,bP,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gy:function(I){var L=0,top=0;
if(I.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var K=qx.dom.Node.getWindow(I);
L-=qx.bom.Viewport.getScrollLeft(K);
top-=qx.bom.Viewport.getScrollTop(K);
}else{var J=qx.dom.Node.getDocument(I).body;
I=I.parentNode;
while(I&&I!=J){L+=I.scrollLeft;
top+=I.scrollTop;
I=I.parentNode;
}}return {left:L,top:top};
},__gz:qx.core.Variant.select(S,{"mshtml":function(bA){var bC=qx.dom.Node.getDocument(bA);
var bB=bC.body;
var bD=0;
var top=0;
bD-=bB.clientLeft+bC.documentElement.clientLeft;
top-=bB.clientTop+bC.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bD+=this.__gx(bB,W);
top+=this.__gx(bB,X);
}return {left:bD,top:top};
},"webkit":function(bK){var bM=qx.dom.Node.getDocument(bK);
var bL=bM.body;
var bN=bL.offsetLeft;
var top=bL.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bN+=this.__gx(bL,W);
top+=this.__gx(bL,X);
}return {left:bN,top:top};
},"gecko":function(l){var m=qx.dom.Node.getDocument(l).body;
var n=m.offsetLeft;
var top=m.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){n+=this.__gx(m,U);
top+=this.__gx(m,V);
}if(qx.bom.element.BoxSizing.get(m)!==R){n+=this.__gx(m,W);
top+=this.__gx(m,X);
}return {left:n,top:top};
},"default":function(c){var d=qx.dom.Node.getDocument(c).body;
var e=d.offsetLeft;
var top=d.offsetTop;
return {left:e,top:top};
}}),__gA:qx.core.Variant.select(S,{"mshtml|webkit":function(x){var z=qx.dom.Node.getDocument(x);
if(x.getBoundingClientRect){var A=x.getBoundingClientRect();
var B=A.left;
var top=A.top;
}else{var B=x.offsetLeft;
var top=x.offsetTop;
x=x.offsetParent;
var y=z.body;
while(x&&x!=y){B+=x.offsetLeft;
top+=x.offsetTop;
B+=this.__gx(x,W);
top+=this.__gx(x,X);
x=x.offsetParent;
}}return {left:B,top:top};
},"gecko":function(bo){if(bo.getBoundingClientRect){var br=bo.getBoundingClientRect();
var bs=Math.round(br.left);
var top=Math.round(br.top);
}else{var bs=0;
var top=0;
var bp=qx.dom.Node.getDocument(bo).body;
var bq=qx.bom.element.BoxSizing;

if(bq.get(bo)!==R){bs-=this.__gx(bo,W);
top-=this.__gx(bo,X);
}
while(bo&&bo!==bp){bs+=bo.offsetLeft;
top+=bo.offsetTop;
if(bq.get(bo)!==R){bs+=this.__gx(bo,W);
top+=this.__gx(bo,X);
}if(bo.parentNode&&this.__gw(bo.parentNode,ba)!=bi){bs+=this.__gx(bo.parentNode,W);
top+=this.__gx(bo.parentNode,X);
}bo=bo.offsetParent;
}}return {left:bs,top:top};
},"default":function(bt){var bv=0;
var top=0;
var bu=qx.dom.Node.getDocument(bt).body;
while(bt&&bt!==bu){bv+=bt.offsetLeft;
top+=bt.offsetTop;
bt=bt.offsetParent;
}return {left:bv,top:top};
}}),get:function(o,p){if(o.tagName==bh){var location=this.__gB(o);
var w=location.left;
var top=location.top;
}else{var q=this.__gz(o);
var v=this.__gA(o);
var scroll=this.__gy(o);
var w=v.left+q.left-scroll.left;
var top=v.top+q.top-scroll.top;
}var r=w+o.offsetWidth;
var s=top+o.offsetHeight;

if(p){if(p==bn||p==T){var t=qx.bom.element.Overflow.getX(o);

if(t==T||t==O){r+=o.scrollWidth-o.offsetWidth+this.__gx(o,W)+this.__gx(o,P);
}var u=qx.bom.element.Overflow.getY(o);

if(u==T||u==O){s+=o.scrollHeight-o.offsetHeight+this.__gx(o,X)+this.__gx(o,Q);
}}
switch(p){case bn:w+=this.__gx(o,bl);
top+=this.__gx(o,bf);
r-=this.__gx(o,bb);
s-=this.__gx(o,bg);
case T:w-=o.scrollLeft;
top-=o.scrollTop;
r-=o.scrollLeft;
s-=o.scrollTop;
case Y:w+=this.__gx(o,W);
top+=this.__gx(o,X);
r-=this.__gx(o,P);
s-=this.__gx(o,Q);
break;
case bd:w-=this.__gx(o,U);
top-=this.__gx(o,V);
r+=this.__gx(o,be);
s+=this.__gx(o,bj);
break;
}}return {left:w,top:top,right:r,bottom:s};
},__gB:qx.core.Variant.select(S,{"default":function(f){var top=f.offsetTop+this.__gx(f,V);
var g=f.offsetLeft+this.__gx(f,U);
return {left:g,top:top};
},"mshtml":function(bE){var top=bE.offsetTop;
var bF=bE.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gx(bE,V);
bF+=this.__gx(bE,U);
}return {left:bF,top:top};
},"gecko":function(j){var top=j.offsetTop+this.__gx(j,V)+this.__gx(j,W);
var k=j.offsetLeft+this.__gx(j,U)+this.__gx(j,X);
return {left:k,top:top};
}}),getLeft:function(bw,bx){return this.get(bw,bx).left;
},getTop:function(h,i){return this.get(h,i).top;
},getRight:function(a,b){return this.get(a,b).right;
},getBottom:function(M,N){return this.get(M,N).bottom;
},getRelative:function(C,D,E,F){var H=this.get(C,E);
var G=this.get(D,F);
return {left:H.left-G.left,top:H.top-G.top,right:H.right-G.right,bottom:H.bottom-G.bottom};
},getPosition:function(bG){return this.getRelative(bG,this.getOffsetParent(bG));
},getOffsetParent:function(bH){var bJ=bH.offsetParent||document.body;
var bI=qx.bom.element.Style;

while(bJ&&(!/^body|html$/i.test(bJ.tagName)&&bI.get(bJ,bc)===bk)){bJ=bJ.offsetParent;
}return bJ;
}}});
})();
(function(){var C="qx.client",B="character",A="EndToEnd",z="input",y="textarea",x="StartToStart",w='character',v="qx.bom.Selection",u="button",t="#text",s="body";
qx.Class.define(v,{statics:{getSelectionObject:qx.core.Variant.select(C,{"mshtml":function(i){return i.selection;
},"default":function(V){return qx.dom.Node.getWindow(V).getSelection();
}}),get:qx.core.Variant.select(C,{"mshtml":function(N){var O=qx.bom.Range.get(qx.dom.Node.getDocument(N));
return O.text;
},"default":function(a){if(this.__gC(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(C,{"mshtml":function(bw){var by=this.get(bw);
var bx=qx.util.StringSplit.split(by,/\r\n/);
return by.length-(bx.length-1);
},"opera":function(P){var U,S,Q;

if(this.__gC(P)){var T=P.selectionStart;
var R=P.selectionEnd;
U=P.value.substring(T,R);
S=R-T;
}else{U=qx.bom.Selection.get(P);
S=U.length;
}Q=qx.util.StringSplit.split(U,/\r\n/);
return S-(Q.length-1);
},"default":function(bk){if(this.__gC(bk)){return bk.selectionEnd-bk.selectionStart;
}else{return this.get(bk).length;
}}}),getStart:qx.core.Variant.select(C,{"mshtml":function(E){if(this.__gC(E)){var J=qx.bom.Range.get();
if(!E.contains(J.parentElement())){return -1;
}var K=qx.bom.Range.get(E);
var I=E.value.length;
K.moveToBookmark(J.getBookmark());
K.moveEnd(w,I);
return I-K.text.length;
}else{var K=qx.bom.Range.get(E);
var G=K.parentElement();
var L=qx.bom.Range.get();
L.moveToElementText(G);
var F=qx.bom.Range.get(qx.dom.Node.getBodyElement(E));
F.setEndPoint(x,K);
F.setEndPoint(A,L);
if(L.compareEndPoints(x,F)==0){return 0;
}var H;
var M=0;

while(true){H=F.moveStart(B,-1);
if(L.compareEndPoints(x,F)==0){break;
}if(H==0){break;
}else{M++;
}}return ++M;
}},"gecko|webkit":function(bt){if(this.__gC(bt)){return bt.selectionStart;
}else{var bv=qx.dom.Node.getDocument(bt);
var bu=this.getSelectionObject(bv);
if(bu.anchorOffset<bu.focusOffset){return bu.anchorOffset;
}else{return bu.focusOffset;
}}},"default":function(d){if(this.__gC(d)){return d.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(d)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(C,{"mshtml":function(j){if(this.__gC(j)){var o=qx.bom.Range.get();
if(!j.contains(o.parentElement())){return -1;
}var p=qx.bom.Range.get(j);
var n=j.value.length;
p.moveToBookmark(o.getBookmark());
p.moveStart(w,-n);
return p.text.length;
}else{var p=qx.bom.Range.get(j);
var l=p.parentElement();
var q=qx.bom.Range.get();
q.moveToElementText(l);
var n=q.text.length;
var k=qx.bom.Range.get(qx.dom.Node.getBodyElement(j));
k.setEndPoint(A,p);
k.setEndPoint(x,q);
if(q.compareEndPoints(A,k)==0){return n-1;
}var m;
var r=0;

while(true){m=k.moveEnd(B,1);
if(q.compareEndPoints(A,k)==0){break;
}if(m==0){break;
}else{r++;
}}return n-(++r);
}},"gecko|webkit":function(bq){if(this.__gC(bq)){return bq.selectionEnd;
}else{var bs=qx.dom.Node.getDocument(bq);
var br=this.getSelectionObject(bs);
if(br.focusOffset>br.anchorOffset){return br.focusOffset;
}else{return br.anchorOffset;
}}},"default":function(D){if(this.__gC(D)){return D.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(D)).focusOffset;
}}}),__gC:function(b){return qx.dom.Node.isElement(b)&&(b.nodeName.toLowerCase()==z||b.nodeName.toLowerCase()==y);
},set:qx.core.Variant.select(C,{"mshtml":function(bl,bm,bn){var bo;
if(qx.dom.Node.isDocument(bl)){bl=bl.body;
}
if(qx.dom.Node.isElement(bl)||qx.dom.Node.isText(bl)){switch(bl.nodeName.toLowerCase()){case z:case y:case u:if(bn===undefined){bn=bl.value.length;
}
if(bm>=0&&bm<=bl.value.length&&bn>=0&&bn<=bl.value.length){bo=qx.bom.Range.get(bl);
bo.collapse(true);
bo.moveStart(B,bm);
bo.moveEnd(B,bn-bm);
bo.select();
return true;
}break;
case t:if(bn===undefined){bn=bl.nodeValue.length;
}
if(bm>=0&&bm<=bl.nodeValue.length&&bn>=0&&bn<=bl.nodeValue.length){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.parentNode);
bo.collapse(true);
bo.moveStart(B,bm);
bo.moveEnd(B,bn-bm);
bo.select();
return true;
}break;
default:if(bn===undefined){bn=bl.childNodes.length-1;
}if(bl.childNodes[bm]&&bl.childNodes[bn]){bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bo.moveToElementText(bl.childNodes[bm]);
bo.collapse(true);
var bp=qx.bom.Range.get(qx.dom.Node.getBodyElement(bl));
bp.moveToElementText(bl.childNodes[bn]);
bo.setEndPoint(A,bp);
bo.select();
return true;
}}}return false;
},"default":function(bd,be,bf){var bj=bd.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bd)&&(bj==z||bj==y)){if(bf===undefined){bf=bd.value.length;
}if(be>=0&&be<=bd.value.length&&bf>=0&&bf<=bd.value.length){bd.focus();
bd.select();
bd.setSelectionRange(be,bf);
return true;
}}else{var bh=false;
var bi=qx.dom.Node.getWindow(bd).getSelection();
var bg=qx.bom.Range.get(bd);
if(qx.dom.Node.isText(bd)){if(bf===undefined){bf=bd.length;
}
if(be>=0&&be<bd.length&&bf>=0&&bf<=bd.length){bh=true;
}}else if(qx.dom.Node.isElement(bd)){if(bf===undefined){bf=bd.childNodes.length-1;
}
if(be>=0&&bd.childNodes[be]&&bf>=0&&bd.childNodes[bf]){bh=true;
}}else if(qx.dom.Node.isDocument(bd)){bd=bd.body;

if(bf===undefined){bf=bd.childNodes.length-1;
}
if(be>=0&&bd.childNodes[be]&&bf>=0&&bd.childNodes[bf]){bh=true;
}}
if(bh){if(!bi.isCollapsed){bi.collapseToStart();
}bg.setStart(bd,be);
if(qx.dom.Node.isText(bd)){bg.setEnd(bd,bf);
}else{bg.setEndAfter(bd.childNodes[bf]);
}if(bi.rangeCount>0){bi.removeAllRanges();
}bi.addRange(bg);
return true;
}}return false;
}}),setAll:function(c){return qx.bom.Selection.set(c,0);
},clear:qx.core.Variant.select(C,{"mshtml":function(e){var f=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(e));
var g=qx.bom.Range.get(e);
var parent=g.parentElement();
var h=qx.bom.Range.get(qx.dom.Node.getDocument(e));
if(parent==h.parentElement()&&parent==e){f.empty();
}},"default":function(W){var Y=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(W));
var bb=W.nodeName.toLowerCase();
if(qx.dom.Node.isElement(W)&&(bb==z||bb==y)){W.setSelectionRange(0,0);
qx.bom.Element.blur(W);
}else if(qx.dom.Node.isDocument(W)||bb==s){Y.collapse(W.body?W.body:W,0);
}else{var ba=qx.bom.Range.get(W);

if(!ba.collapsed){var bc;
var X=ba.commonAncestorContainer;
if(qx.dom.Node.isElement(W)&&qx.dom.Node.isText(X)){bc=X.parentNode;
}else{bc=X;
}
if(bc==W){Y.collapse(W,0);
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
qx.Class.define(b,{statics:{__gD:{},remove:function(h){delete this.__gD[h.$$hash];
},add:function(c){var d=this.__gD;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var e=this.__gD;
var g;

for(var f in e){g=e[f];
delete e[f];
g.syncWidget();
}for(var f in e){return;
}this.__gD={};
}}});
})();
(function(){var i="qx.ui.core.queue.Visibility",h="visibility";
qx.Class.define(i,{statics:{__gE:{},__gF:{},remove:function(e){var f=e.$$hash;
delete this.__gF[f];
delete this.__gE[f];
},isVisible:function(g){return this.__gF[g.$$hash]||false;
},__gG:function(a){var c=this.__gF;
var b=a.$$hash;
var d;
if(a.isExcluded()){d=false;
}else{var parent=a.$$parent;

if(parent){d=this.__gG(parent);
}else{d=a.isRootWidget();
}}return c[b]=d;
},add:function(j){var k=this.__gE;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(h);
},flush:function(){var l=this.__gE;
var p=this.__gF;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__gG(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__gE={};
}}});
})();
(function(){var c="appearance",b="qx.ui.core.queue.Appearance";
qx.Class.define(b,{statics:{__gH:{},remove:function(a){delete this.__gH[a.$$hash];
},add:function(e){var f=this.__gH;

if(f[e.$$hash]){return;
}f[e.$$hash]=e;
qx.ui.core.queue.Manager.scheduleFlush(c);
},has:function(d){return !!this.__gH[d.$$hash];
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__gH;
var i;

for(var h in g){i=g[h];
delete g[h];
if(j.isVisible(i)){i.syncAppearance();
}else{i.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gI:{},add:function(f){var g=this.__gI;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__gI;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__gI={};
}}});
})();
(function(){var e="none",d="qx.html.Decorator",c="absolute";
qx.Class.define(d,{extend:qx.html.Element,construct:function(f,g){var h={position:c,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){h.pointerEvents=e;
}qx.html.Element.call(this,null,h);
this.__gT=f;
this.__gU=g||f.toHashCode();
this.useMarkup(f.getMarkup());
},members:{__gU:null,__gT:null,getId:function(){return this.__gU;
},getDecorator:function(){return this.__gT;
},resize:function(a,b){this.__gT.resize(this.getDomElement(),a,b);
},tint:function(i){this.__gT.tint(this.getDomElement(),i);
},getInsets:function(){return this.__gT.getInsets();
}},destruct:function(){this.__gT=null;
}});
})();
(function(){var j="blur",h="focus",g="input",f="load",e="qx.ui.core.EventHandler",d="activate";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__gV=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gV:null,__gW:{focusin:1,focusout:1,focus:1,blur:1},__gX:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(a,b){return a instanceof qx.ui.core.Widget;
},_dispatchEvent:function(t){var y=t.getTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);
var z=false;

while(x&&x.isAnonymous()){var z=true;
x=x.getLayoutParent();
}if(x&&z&&t.getType()==d){x.getContainerElement().activate();
}if(this.__gW[t.getType()]){x=x&&x.getFocusTarget();
if(!x){return;
}}if(t.getRelatedTarget){var G=t.getRelatedTarget();
var F=qx.ui.core.Widget.getWidgetByElement(G);

while(F&&F.isAnonymous()){F=F.getLayoutParent();
}
if(F){if(this.__gW[t.getType()]){F=F.getFocusTarget();
}if(F===x){return;
}}}var B=t.getCurrentTarget();
var D=qx.ui.core.Widget.getWidgetByElement(B);

if(!D||D.isAnonymous()){return;
}if(this.__gW[t.getType()]){D=D.getFocusTarget();
}var E=t.getType();

if(!D||!(D.isEnabled()||this.__gX[E])){return;
}var u=t.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var A=this.__gV.getListeners(D,E,u);

if(!A||A.length===0){return;
}var v=qx.event.Pool.getInstance().getObject(t.constructor);
t.clone(v);
v.setTarget(x);
v.setRelatedTarget(F||null);
v.setCurrentTarget(D);
var H=t.getOriginalTarget();

if(H){var w=qx.ui.core.Widget.getWidgetByElement(H);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}v.setOriginalTarget(w);
}else{v.setOriginalTarget(y);
}for(var i=0,l=A.length;i<l;i++){var C=A[i].context||D;
A[i].handler.call(C,v);
}if(v.getPropagationStopped()){t.stopPropagation();
}
if(v.getDefaultPrevented()){t.preventDefault();
}qx.event.Pool.getInstance().poolObject(v);
},registerEvent:function(k,m,n){var o;

if(m===h||m===j){o=k.getFocusElement();
}else if(m===f||m===g){o=k.getContentElement();
}else{o=k.getContainerElement();
}
if(o){o.addListener(m,this._dispatchEvent,this,n);
}},unregisterEvent:function(p,q,r){var s;

if(q===h||q===j){s=p.getFocusElement();
}else if(q===f||q===g){s=p.getContentElement();
}else{s=p.getContainerElement();
}
if(s){s.removeListener(q,this._dispatchEvent,this,r);
}}},destruct:function(){this.__gV=null;
},defer:function(c){qx.event.Registration.addHandler(c);
}});
})();
(function(){var f="abstract",e="qx.debug",d="qx.ui.layout.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,members:{__iw:null,_invalidChildrenCache:null,__ix:null,invalidateLayoutCache:function(){this.__iw=null;
},renderLayout:function(k,l){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__iw){return this.__iw;
}return this.__iw=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(g){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(e,{"on":function(a,name,b){},"off":null}),_clearSeparators:function(){var c=this.__ix;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(h,i){this.__ix.renderSeparator(h,i);
},connectToWidget:function(j){if(j&&this.__ix){throw new Error("It is not possible to manually set the connected widget.");
}this.__ix=j;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__ix;
},_applyLayoutChange:function(){if(this.__ix){this.__ix.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__ix.getLayoutChildren();
}},destruct:function(){this.__ix=this.__iw=null;
}});
})();
(function(){var q="/",p="mshtml",o="",n="qx.client",m="?",l="string",k="qx.util.ResourceManager",j="singleton";
qx.Class.define(k,{extend:qx.core.Object,type:j,statics:{__gY:qx.$$resources||{},__ha:{}},members:{has:function(v){return !!this.self(arguments).__gY[v];
},getData:function(e){return this.self(arguments).__gY[e]||null;
},getImageWidth:function(t){var u=this.self(arguments).__gY[t];
return u?u[0]:null;
},getImageHeight:function(h){var i=this.self(arguments).__gY[h];
return i?i[1]:null;
},getImageFormat:function(r){var s=this.self(arguments).__gY[r];
return s?s[2]:null;
},isClippedImage:function(f){var g=this.self(arguments).__gY[f];
return g&&g.length>4;
},toUri:function(a){if(a==null){return a;
}var b=this.self(arguments).__gY[a];

if(!b){return a;
}
if(typeof b===l){var d=b;
}else{var d=b[3];
if(!d){return a;
}}var c=o;

if(qx.core.Variant.isSet(n,p)&&qx.bom.client.Feature.SSL){c=this.self(arguments).__ha[d];
}return c+qx.$$libraries[d].resourceUri+q+a;
}},defer:function(w){if(qx.core.Variant.isSet(n,p)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y;

if(qx.$$libraries[A].resourceUri){y=qx.$$libraries[A].resourceUri;
}else{w.__ha[A]=o;
continue;
}if(y.match(/^\/\//)!=null){w.__ha[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null){var x=document.URL;
w.__ha[A]=x.substring(0,x.lastIndexOf(q)+1);
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(m);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__ha[A]=z.substring(0,z.lastIndexOf(q)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__hb:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__hb();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(B){var B=B||v;
this.__hc=B;
this.length=B.length;
},members:{$$isString:true,length:0,__hc:null,toString:function(){return this.__hc;
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
this.__hd=c;
this.__he=d;
},members:{__hd:null,__he:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hd,this.__he);
}}});
})();
(function(){var B="_",A="",z="_applyLocale",y="changeLocale",x="C",w="qx.dynlocale",v="on",u="qx.locale.Manager",t="String",s="singleton";
qx.Class.define(u,{type:s,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hf=qx.$$translations||{};
this.__hg=qx.$$locales||{};
var E=qx.bom.client.Locale;
var C=E.LOCALE;
var D=E.VARIANT;

if(D!==A){C+=B+D;
}this.setLocale(C||this.__hh);
},statics:{tr:function(bb,bc){var bd=qx.lang.Array.fromArguments(arguments);
bd.splice(0,1);
return qx.locale.Manager.getInstance().translate(bb,bd);
},trn:function(H,I,J,K){var L=qx.lang.Array.fromArguments(arguments);
L.splice(0,3);
if(J!=1){return qx.locale.Manager.getInstance().translate(I,L);
}else{return qx.locale.Manager.getInstance().translate(H,L);
}},trc:function(a,b,c){var d=qx.lang.Array.fromArguments(arguments);
d.splice(0,2);
return qx.locale.Manager.getInstance().translate(b,d);
},marktr:function(r){return r;
}},properties:{locale:{check:t,nullable:true,apply:z,event:y}},members:{__hh:x,__hi:null,__hj:null,__hf:null,__hg:null,getLanguage:function(){return this.__hj;
},getTerritory:function(){return this.getLocale().split(B)[1]||A;
},getAvailableLocales:function(){var V=[];

for(var U in this.__hg){if(U!=this.__hh){V.push(U);
}}return V;
},__hk:function(be){var bg;
var bf=be.indexOf(B);

if(bf==-1){bg=be;
}else{bg=be.substring(0,bf);
}return bg;
},_applyLocale:function(F,G){this.__hi=F;
this.__hj=this.__hk(F);
},addTranslation:function(n,o){var p=this.__hf;

if(p[n]){for(var q in o){p[n][q]=o[q];
}}else{p[n]=o;
}},addLocale:function(M,N){var O=this.__hg;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(W,X,Y){var ba=this.__hf;
return this.__hl(ba,W,X,Y);
},localize:function(Q,R,S){var T=this.__hg;
return this.__hl(T,Q,R,S);
},__hl:function(e,f,g,h){var j;

if(!e){return f;
}
if(h){var l=this.__hk(h);
}else{h=this.__hi;
l=this.__hj;
}if(!j&&e[h]){j=e[h][f];
}if(!j&&e[l]){j=e[l][f];
}if(!j&&e[this.__hh]){j=e[this.__hh][f];
}
if(!j){j=f;
}
if(g.length>0){var k=[];

for(var i=0;i<g.length;i++){var m=g[i];

if(m&&m.translate){k[i]=m.translate();
}else{k[i]=m;
}}j=qx.lang.String.format(j,k);
}
if(qx.core.Variant.isSet(w,v)){j=new qx.locale.LocalizedString(j,f,g);
}return j;
}},destruct:function(){this.__hf=this.__hg=null;
}});
})();
(function(){var E="px",D="qx.client",C="div",B="img",A="",z="no-repeat",y="qx.debug",x="scale-x",w="mshtml",v="on",bc="repeat",bb="scale",ba="scale-y",Y="qx/icon",X=".png",W="crop",V="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",U='<div style="',T="repeat-y",S='<img src="',L="qx.bom.element.Decoration",M="', sizingMethod='",J="png",K="')",H='"></div>',I='"/>',F='" style="',G="none",N="webkit",O=" ",Q="repeat-x",P="DXImageTransform.Microsoft.AlphaImageLoader",R="absolute";
qx.Class.define(L,{statics:{DEBUG:false,__hm:{},__hn:qx.core.Variant.isSet(D,w),__ho:qx.core.Variant.select(D,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__hp:{"scale-x":B,"scale-y":B,"scale":B,"repeat":C,"no-repeat":C,"repeat-x":C,"repeat-y":C},update:function(bd,be,bf,bh){var bj=this.getTagName(bf,be);

if(bj!=bd.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bk=this.getAttributes(be,bf,bh);

if(bj===B){bd.src=bk.src;
}if(bd.style.backgroundPosition!=A&&bk.style.backgroundPosition===undefined){bk.style.backgroundPosition=null;
}if(bd.style.clip!=A&&bk.style.clip===undefined){bk.style.clip=null;
}var bi=qx.bom.element.Style;
bi.setStyles(bd,bk.style);
if(this.__hn){try{bd.filters[P].apply();
}catch(e){}}},create:function(bN,bO,bP){var bQ=this.getTagName(bO,bN);
var bS=this.getAttributes(bN,bO,bP);
var bR=qx.bom.element.Style.compile(bS.style);

if(bQ===B){return S+bS.src+F+bR+I;
}else{return U+bR+H;
}},getTagName:function(bB,bC){if(qx.core.Variant.isSet(D,w)){if(bC&&this.__hn&&this.__ho[bB]&&qx.lang.String.endsWith(bC,X)){return C;
}}return this.__hp[bB];
},getAttributes:function(bt,bu,bv){if(!bv){bv={};
}
if(!bv.position){bv.position=R;
}
if(qx.core.Variant.isSet(D,w)){bv.fontSize=0;
bv.lineHeight=0;
}else if(qx.core.Variant.isSet(D,N)){bv.WebkitUserDrag=G;
}var bx=qx.util.ResourceManager.getInstance().getImageFormat(bt)||qx.io.ImageLoader.getFormat(bt);

if(qx.core.Variant.isSet(y,v)){if(bt!=null&&bx==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bt+"'!");
}}var bw;
if(this.__hn&&this.__ho[bu]&&bx===J){bw=this.__hs(bv,bu,bt);
}else{if(bu===bb){bw=this.__ht(bv,bu,bt);
}else if(bu===x||bu===ba){bw=this.__hu(bv,bu,bt);
}else{bw=this.__hx(bv,bu,bt);
}}return bw;
},__hq:function(by,bz,bA){if(by.width==null&&bz!=null){by.width=bz+E;
}
if(by.height==null&&bA!=null){by.height=bA+E;
}return by;
},__hr:function(g){var h=qx.util.ResourceManager.getInstance().getImageWidth(g)||qx.io.ImageLoader.getWidth(g);
var i=qx.util.ResourceManager.getInstance().getImageHeight(g)||qx.io.ImageLoader.getHeight(g);
return {width:h,height:i};
},__hs:function(bH,bI,bJ){var bM=this.__hr(bJ);
bH=this.__hq(bH,bM.width,bM.height);
var bL=bI==z?W:bb;
var bK=V+qx.util.ResourceManager.getInstance().toUri(bJ)+M+bL+K;
bH.filter=bK;
bH.backgroundImage=bH.backgroundRepeat=A;
return {style:bH};
},__ht:function(a,b,c){var d=qx.util.ResourceManager.getInstance().toUri(c);
var f=this.__hr(c);
a=this.__hq(a,f.width,f.height);
return {src:d,style:a};
},__hu:function(bl,bm,bn){var br=qx.util.ResourceManager.getInstance();
var bq=br.isClippedImage(bn);
var bs=this.__hr(bn);

if(bq){var bp=br.getData(bn);
var bo=br.toUri(bp[4]);

if(bm===x){bl=this.__hv(bl,bp,bs.height);
}else{bl=this.__hw(bl,bp,bs.width);
}return {src:bo,style:bl};
}else{if(qx.core.Variant.isSet(y,v)){this.__hz(bn);
}
if(bm==x){bl.height=bs.height==null?null:bs.height+E;
}else if(bm==ba){bl.width=bs.width==null?null:bs.width+E;
}var bo=br.toUri(bn);
return {src:bo,style:bl};
}},__hv:function(bD,bE,bF){var bG=qx.util.ResourceManager.getInstance().getImageHeight(bE[4]);
bD.clip={top:-bE[6],height:bF};
bD.height=bG+E;
if(bD.top!=null){bD.top=(parseInt(bD.top,10)+bE[6])+E;
}else if(bD.bottom!=null){bD.bottom=(parseInt(bD.bottom,10)+bF-bG-bE[6])+E;
}return bD;
},__hw:function(r,s,t){var u=qx.util.ResourceManager.getInstance().getImageWidth(s[4]);
r.clip={left:-s[5],width:t};
r.width=u+E;
if(r.left!=null){r.left=(parseInt(r.left,10)+s[5])+E;
}else if(r.right!=null){r.right=(parseInt(r.right,10)+t-u-s[5])+E;
}return r;
},__hx:function(j,k,l){var q=qx.util.ResourceManager.getInstance().isClippedImage(l);
var p=this.__hr(l);
if(q&&k!==bc){var o=qx.util.ResourceManager.getInstance().getData(l);
var n=qx.bom.element.Background.getStyles(o[4],k,o[5],o[6]);

for(var m in n){j[m]=n[m];
}
if(p.width!=null&&j.width==null&&(k==T||k===z)){j.width=p.width+E;
}
if(p.height!=null&&j.height==null&&(k==Q||k===z)){j.height=p.height+E;
}return {style:j};
}else{if(qx.core.Variant.isSet(y,v)){if(k!==bc){this.__hz(l);
}}j=this.__hq(j,p.width,p.height);
j=this.__hy(j,l,k);
return {style:j};
}},__hy:function(bU,bV,bW){var top=null;
var cb=null;

if(bU.backgroundPosition){var bX=bU.backgroundPosition.split(O);
cb=parseInt(bX[0]);

if(isNaN(cb)){cb=bX[0];
}top=parseInt(bX[1]);

if(isNaN(top)){top=bX[1];
}}var ca=qx.bom.element.Background.getStyles(bV,bW,cb,top);

for(var bY in ca){bU[bY]=ca[bY];
}if(bU.filter){bU.filter=A;
}return bU;
},__hz:function(bT){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bT)&&bT.indexOf(Y)==-1){if(!this.__hm[bT]){qx.log.Logger.debug("Potential clipped image candidate: "+bT);
this.__hm[bT]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(D,{"mshtml":function(){return qx.bom.element.Decoration.__hn;
},"default":function(){return false;
}})}});
})();
(function(){var r="qx.client",q="load",p="qx.io.ImageLoader";
qx.Bootstrap.define(p,{statics:{__hA:{},__hB:{width:null,height:null},__hC:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(t){var u=this.__hA[t];
return !!(u&&u.loaded);
},isFailed:function(y){var z=this.__hA[y];
return !!(z&&z.failed);
},isLoading:function(f){var g=this.__hA[f];
return !!(g&&g.loading);
},getFormat:function(c){var d=this.__hA[c];
return d?d.format:null;
},getSize:function(A){var B=this.__hA[A];
return B?
{width:B.width,height:B.height}:this.__hB;
},getWidth:function(w){var x=this.__hA[w];
return x?x.width:null;
},getHeight:function(a){var b=this.__hA[a];
return b?b.height:null;
},load:function(C,D,E){var F=this.__hA[C];

if(!F){F=this.__hA[C]={};
}if(D&&!E){E=window;
}if(F.loaded||F.loading||F.failed){if(D){if(F.loading){F.callbacks.push(D,E);
}else{D.call(E,C,F);
}}}else{F.loading=true;
F.callbacks=[];

if(D){F.callbacks.push(D,E);
}var H=new Image();
var G=qx.lang.Function.listener(this.__hD,this,H,C);
H.onload=G;
H.onerror=G;
H.src=C;
}},__hD:qx.event.GlobalError.observeMethod(function(event,j,k){var m=this.__hA[k];
if(event.type===q){m.loaded=true;
m.width=this.__hE(j);
m.height=this.__hF(j);
var n=this.__hC.exec(k);

if(n!=null){m.format=n[1];
}}else{m.failed=true;
}j.onload=j.onerror=null;
var o=m.callbacks;
delete m.loading;
delete m.callbacks;
for(var i=0,l=o.length;i<l;i+=2){o[i].call(o[i+1],k,m);
}}),__hE:qx.core.Variant.select(r,{"gecko":function(s){return s.naturalWidth;
},"default":function(e){return e.width;
}}),__hF:qx.core.Variant.select(r,{"gecko":function(v){return v.naturalHeight;
},"default":function(h){return h.height;
}})}});
})();
(function(){var s="number",r="0",q="px",p=";",o="background-image:url(",n=");",m="",l=")",k="background-repeat:",j=" ",g="qx.bom.element.Background",i="url(",h="background-position:";
qx.Class.define(g,{statics:{__hG:[o,null,n,h,null,p,k,null,p],__hH:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__hI:function(t,top){var u=qx.bom.client.Engine;

if(u.GECKO&&u.VERSION<1.9&&t==top&&typeof t==s){top+=0.01;
}
if(t){var v=(typeof t==s)?t+q:t;
}else{v=r;
}
if(top){var w=(typeof top==s)?top+q:top;
}else{w=r;
}return v+j+w;
},compile:function(x,y,z,top){var A=this.__hI(z,top);
var B=qx.util.ResourceManager.getInstance().toUri(x);
var C=this.__hG;
C[1]=B;
C[4]=A;
C[7]=y;
return C.join(m);
},getStyles:function(a,b,c,top){if(!a){return this.__hH;
}var d=this.__hI(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f={backgroundPosition:d,backgroundImage:i+e+l};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var n="source",m="scale",l="no-repeat",k="qx.client",j="mshtml",i="webkit",h="backgroundImage",g="div",f="qx.html.Image",e="qx/static/blank.gif";
qx.Class.define(f,{extend:qx.html.Element,members:{_applyProperty:function(name,p){qx.html.Element.prototype._applyProperty.call(this,name,p);

if(name===n){var t=this.getDomElement();
var q=this.getAllStyles();

if(this.getNodeName()==g&&this.getStyle(h)){q.backgroundPosition=null;
q.backgroundRepeat=null;
}var r=this._getProperty(n);
var s=this._getProperty(m);
var u=s?m:l;
qx.bom.element.Decoration.update(t,r,u,q);
}},_createDomElement:function(){var b=this._getProperty(m);
var c=b?m:l;

if(qx.core.Variant.isSet(k,j)){var a=this._getProperty(n);
this.setNodeName(qx.bom.element.Decoration.getTagName(c,a));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(c));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(o){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(d){this._setProperty(n,d);
return this;
},getSource:function(){return this._getProperty(n);
},resetSource:function(){if(qx.core.Variant.isSet(k,i)){this._setProperty(n,qx.util.ResourceManager.getInstance().toUri(e));
}else{this._removeProperty(n,true);
}return this;
},setScale:function(v){this._setProperty(m,v);
return this;
},getScale:function(){return this._getProperty(m);
}}});
})();
(function(){var Y="nonScaled",X="scaled",W="alphaScaled",V=".png",U="div",T="replacement",S="hidden",R="Boolean",Q="px",P="http",bl="__hR",bk="changeSource",bj="qx.client",bi="qx.ui.basic.Image",bh="qx.debug",bg="-disabled.$1",bf="String",be="_applySource",bd="img",bc="image",ba="_applyScale",bb="on";
qx.Class.define(bi,{extend:qx.ui.core.Widget,construct:function(i){this.__hR={};
qx.ui.core.Widget.call(this);

if(i){this.setSource(i);
}},properties:{source:{check:bf,init:null,nullable:true,event:bk,apply:be,themeable:true},scale:{check:R,init:false,themeable:true,apply:ba},appearance:{refine:true,init:bc},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hS:null,__hT:null,__hU:null,__hR:null,getContentElement:function(){return this.__hY();
},_createContentElement:function(){return this.__hY();
},_getContentHint:function(){return {width:this.__hS||0,height:this.__hT||0};
},_applyEnabled:function(w,x){qx.ui.core.Widget.prototype._applyEnabled.call(this,w,x);

if(this.getSource()){this._styleSource();
}},_applySource:function(g){this._styleSource();
},_applyScale:function(h){this._styleSource();
},__hV:function(v){this.__hU=v;
},__hW:function(){if(this.__hU==null){var M=this.getSource();
var L=false;

if(M!=null){L=qx.lang.String.endsWith(M,V);
}
if(this.getScale()&&L&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hU=W;
}else if(this.getScale()){this.__hU=X;
}else{this.__hU=Y;
}}return this.__hU;
},__hX:function(m){var n;
var o;

if(m==W){n=true;
o=U;
}else if(m==Y){n=false;
o=U;
}else{n=true;
o=bd;
}var p=new qx.html.Image(o);
p.setScale(n);
p.setStyles({"overflowX":S,"overflowY":S});
return p;
},__hY:function(){var D=this.__hW();

if(this.__hR[D]==null){this.__hR[D]=this.__hX(D);
}return this.__hR[D];
},_styleSource:function(){var f=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!f){this.getContentElement().resetSource();
return;
}this.__ia(f);
if(qx.util.ResourceManager.getInstance().has(f)){this.__ic(this.getContentElement(),f);
}else if(qx.io.ImageLoader.isLoaded(f)){this.__id(this.getContentElement(),f);
}else{this.__ie(this.getContentElement(),f);
}},__ia:qx.core.Variant.select(bj,{"mshtml":function(a){var c=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var b=qx.lang.String.endsWith(a,V);

if(c&&b){if(this.getScale()&&this.__hW()!=W){this.__hV(W);
}else if(!this.getScale()&&this.__hW()!=Y){this.__hV(Y);
}}else{if(this.getScale()&&this.__hW()!=X){this.__hV(X);
}else if(!this.getScale()&&this.__hW()!=Y){this.__hV(Y);
}}this.__ib(this.__hY());
},"default":function(q){if(this.getScale()&&this.__hW()!=X){this.__hV(X);
}else if(!this.getScale()&&this.__hW(Y)){this.__hV(Y);
}this.__ib(this.__hY());
}}),__ib:function(E){var H=this.getContainerElement();
var I=H.getChild(0);

if(I!=E){if(I!=null){var K=Q;
var F={};
var G=this.getInnerSize();

if(G!=null){F.width=G.width+K;
F.height=G.height+K;
}var J=this.getInsets();
F.left=J.left+K;
F.top=J.top+K;
F.zIndex=10;
E.setStyles(F,true);
E.setSelectable(this.getSelectable());
}H.removeAt(0);
H.addAt(E,0);
}},__ic:function(r,s){var u=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var t=s.replace(/\.([a-z]+)$/,bg);

if(u.has(t)){s=t;
this.addState(T);
}else{this.removeState(T);
}}if(r.getSource()===s){return;
}r.setSource(s);
this.__ig(u.getImageWidth(s),u.getImageHeight(s));
},__id:function(y,z){var B=qx.io.ImageLoader;
y.setSource(z);
var A=B.getWidth(z);
var C=B.getHeight(z);
this.__ig(A,C);
},__ie:function(j,k){var l=qx.io.ImageLoader;

if(qx.core.Variant.isSet(bh,bb)){if(!qx.lang.String.startsWith(k.toLowerCase(),P)){var self=this.self(arguments);

if(!self.__BE){self.__BE={};
}
if(!self.__BE[k]){this.debug("try to load a unmanaged relative image: "+k);
self.__BE[k]=true;
}}}if(!l.isFailed(k)){l.load(k,this.__if,this);
}else{if(j!=null){j.resetSource();
}}},__if:function(d,e){if(this.$$disposed===true){return;
}if(d!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(e.failed){this.warn("Image could not be loaded: "+d);
}this._styleSource();
},__ig:function(N,O){if(N!==this.__hS||O!==this.__hT){this.__hS=N;
this.__hT=O;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bl);
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
(function(){var g="interval",f="Number",e="_applyTimeoutInterval",d="qx.event.type.Event",c="qx.event.Idle",b="singleton";
qx.Class.define(c,{extend:qx.core.Object,type:b,construct:function(){qx.core.Object.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(g,this._onInterval,this);
h.start();
this.__in=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__in:null,_applyTimeoutInterval:function(a){this.__in.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__in){this.__in.stop();
}this.__in=null;
}});
})();
(function(){var u="top",t="right",s="bottom",r="left",q="edge-start",p="align-start",o="align-end",n="edge-end",m="qx.util.placement.AbstractAxis",l="-",R="best-fit",Q="size",P="target.bottom",O="offsets",N="size.width",M="offsets.bottom",L="qx.util.placement.Placement",K="qx.debug",J="keep-align",I='__io',B="target.right",C="direct",z="offsets.right",A="target",x="offsets.left",y="area",v="target.top",w="area.height",D="target.left",E="area.width",G="on",F="size.height",H="offsets.top";
qx.Class.define(L,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__io=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:m},axisY:{check:m},edge:{check:[u,t,s,r],init:u},align:{check:[u,t,s,r],init:t}},statics:{__ip:null,compute:function(a,b,c,d,e,f,g){this.__ip=this.__ip||new qx.util.placement.Placement();
var j=e.split(l);
var i=j[0];
var h=j[1];
this.__ip.set({axisX:this.__it(f),axisY:this.__it(g),edge:i,align:h});
return this.__ip.compute(a,b,c,d);
},__iq:null,__ir:null,__is:null,__it:function(k){switch(k){case C:this.__iq=this.__iq||new qx.util.placement.DirectAxis();
return this.__iq;
case J:this.__ir=this.__ir||new qx.util.placement.KeepAlignAxis();
return this.__ir;
case R:this.__is=this.__is||new qx.util.placement.BestFitAxis();
return this.__is;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__io:null,compute:function(S,T,U,V){if(qx.core.Variant.isSet(K,G)){this.assertObject(S,Q);
this.assertNumber(S.width,N);
this.assertNumber(S.height,F);
this.assertObject(T,y);
this.assertNumber(T.width,E);
this.assertNumber(T.height,w);
this.assertObject(U,A);
this.assertNumber(U.top,v);
this.assertNumber(U.right,B);
this.assertNumber(U.bottom,P);
this.assertNumber(U.left,D);
this.assertObject(V,O);
this.assertNumber(V.top,H);
this.assertNumber(V.right,z);
this.assertNumber(V.bottom,M);
this.assertNumber(V.left,x);
}var W=this.getAxisX()||this.__io;
var Y=W.computeStart(S.width,{start:U.left,end:U.right},{start:V.left,end:V.right},T.width,this.__iu());
var X=this.getAxisY()||this.__io;
var top=X.computeStart(S.height,{start:U.top,end:U.bottom},{start:V.top,end:V.bottom},T.height,this.__iv());
return {left:Y,top:top};
},__iu:function(){var bb=this.getEdge();
var ba=this.getAlign();

if(bb==r){return q;
}else if(bb==t){return n;
}else if(ba==r){return p;
}else if(ba==t){return o;
}},__iv:function(){var bd=this.getEdge();
var bc=this.getAlign();

if(bd==u){return q;
}else if(bd==s){return n;
}else if(bc==u){return p;
}else if(bc==s){return o;
}}},destruct:function(){this._disposeObjects(I);
}});
})();
(function(){var i="edge-start",h="align-start",g="align-end",f="edge-end",e="qx.util.placement.AbstractAxis";
qx.Class.define(e,{extend:qx.core.Object,members:{computeStart:function(m,n,o,p,q){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(a,b,c,d){switch(d){case i:return b.start-c.end-a;
case f:return b.end+c.start;
case h:return b.start+c.start;
case g:return b.end-c.end-a;
}},_isInRange:function(j,k,l){return j>=0&&j+k<=l;
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
(function(){var p="mousedown",o="qx.debug",n="on",m="blur",l="qx.ui.popup.Manager",k="__lC",j="singleton";
qx.Class.define(l,{type:j,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lC={};
qx.event.Registration.addListener(document.documentElement,p,this.__lE,this,true);
qx.bom.Element.addListener(window,m,this.hideAll,this);
},members:{__lC:null,add:function(i){if(qx.core.Variant.isSet(o,n)){if(!(i instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+i);
}}this.__lC[i.$$hash]=i;
this.__lD();
},remove:function(q){if(qx.core.Variant.isSet(o,n)){if(!(q instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+q);
}}var r=this.__lC;

if(r){delete r[q.$$hash];
this.__lD();
}},hideAll:function(){var t=this.__lC;

if(t){for(var s in t){t[s].exclude();
}}},__lD:function(){var h=1e7;
var g=this.__lC;

for(var f in g){g[f].setZIndex(h++);
}},__lE:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var d=this.__lC;

for(var b in d){var a=d[b];

if(!a.getAutoHide()||c==a||qx.ui.core.Widget.contains(a,c)){continue;
}a.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,p,this.__lE,this,true);
this._disposeMap(k);
}});
})();
(function(){var f="' is not supported by the Grow layout!",e="qx.ui.layout.Grow",d="qx.debug",c="The property '";
qx.Class.define(e,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(d,{"on":function(a,name,b){this.assert(false,c+name+f);
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
(function(){var w="label",v="icon",u="Boolean",t="both",s="String",r="left",q="changeGap",p="changeShow",o="bottom",n="_applyCenter",L="changeIcon",K="qx.ui.basic.Atom",J="changeLabel",I="Integer",H="_applyIconPosition",G="qx.debug",F="top",E="right",D="_applyRich",C="_applyIcon",A="_applyShow",B="on",y="_applyLabel",z="_applyGap",x="atom";
qx.Class.define(K,{extend:qx.ui.core.Widget,construct:function(Q,R){if(qx.core.Variant.isSet(G,B)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(Q!=null){this.setLabel(Q);
}
if(R!=null){this.setIcon(R);
}},properties:{appearance:{refine:true,init:x},label:{apply:y,nullable:true,check:s,event:J},rich:{check:u,init:false,apply:D},icon:{check:s,apply:C,nullable:true,themeable:true,event:L},gap:{check:I,nullable:false,event:q,apply:z,themeable:true,init:4},show:{init:t,check:[t,w,v],themeable:true,inheritable:true,apply:A,event:p},iconPosition:{init:r,check:[F,E,o,r],themeable:true,apply:H},center:{init:false,check:u,themeable:true,apply:n}},members:{_createChildControlImpl:function(f){var g;

switch(f){case w:g=new qx.ui.basic.Label(this.getLabel());
g.setAnonymous(true);
g.setRich(this.getRich());
this._add(g);

if(this.getLabel()==null||this.getShow()===v){g.exclude();
}break;
case v:g=new qx.ui.basic.Image(this.getIcon());
g.setAnonymous(true);
this._addAt(g,0);

if(this.getIcon()==null||this.getShow()===w){g.exclude();
}break;
}return g||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,f);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===v){this._excludeChildControl(w);
}else{this._showChildControl(w);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===w){this._excludeChildControl(v);
}else{this._showChildControl(v);
}},_applyLabel:function(c,d){var e=this.getChildControl(w,true);

if(e){e.setValue(c);
}this._handleLabel();
},_applyRich:function(h,i){var j=this.getChildControl(w,true);

if(j){j.setRich(h);
}},_applyIcon:function(k,l){var m=this.getChildControl(v,true);

if(m){m.setSource(k);
}this._handleIcon();
},_applyGap:function(O,P){this._getLayout().setGap(O);
},_applyShow:function(a,b){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(M,N){this._getLayout().setIconPosition(M);
},_applyCenter:function(S,T){this._getLayout().setCenter(S);
}}});
})();
(function(){var I="bottom",H="_applyLayoutChange",G="top",F="left",E="right",D="middle",C="' is not supported by the Atom layout!",B="qx.debug",A="center",z="qx.ui.layout.Atom",w="Integer",y="The property '",x="Boolean";
qx.Class.define(z,{extend:qx.ui.layout.Abstract,properties:{gap:{check:w,init:4,apply:H},iconPosition:{check:[F,G,E,I],init:F,apply:H},center:{check:x,init:false,apply:H}},members:{verifyLayoutProperty:qx.core.Variant.select(B,{"on":function(U,name,V){this.assert(false,y+name+C);
},"off":null}),renderLayout:function(a,b){var l=qx.ui.layout.Util;
var d=this.getIconPosition();
var g=this._getLayoutChildren();
var length=g.length;
var v,top,u,e;
var q,k;
var o=this.getGap();
var t=this.getCenter();
if(d===I||d===E){var m=length-1;
var h=-1;
var f=-1;
}else{var m=0;
var h=length;
var f=1;
}if(d==G||d==I){if(t){var p=0;

for(var i=m;i!=h;i+=f){e=g[i].getSizeHint().height;

if(e>0){p+=e;

if(i!=m){p+=o;
}}}top=Math.round((b-p)/2);
}else{top=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
u=Math.min(k.maxWidth,Math.max(a,k.minWidth));
e=k.height;
v=l.computeHorizontalAlignOffset(A,u,a);
q.renderLayout(v,top,u,e);
if(e>0){top+=e+o;
}}}else{var j=a;
var c=null;
var s=0;

for(var i=m;i!=h;i+=f){q=g[i];
u=q.getSizeHint().width;

if(u>0){if(!c&&q instanceof qx.ui.basic.Label){c=q;
}else{j-=u;
}s++;
}}
if(s>1){var r=(s-1)*o;
j-=r;
}
if(c){var k=c.getSizeHint();
var n=Math.max(k.minWidth,Math.min(j,k.maxWidth));
j-=n;
}
if(t&&j>0){v=Math.round(j/2);
}else{v=0;
}
for(var i=m;i!=h;i+=f){q=g[i];
k=q.getSizeHint();
e=Math.min(k.maxHeight,Math.max(b,k.minHeight));

if(q===c){u=n;
}else{u=k.width;
}top=l.computeVerticalAlignOffset(D,k.height,b);
q.renderLayout(v,top,u,e);
if(u>0){v+=u+o;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===G||N===I){var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
Q=Math.max(Q,L.width);
P=Math.max(P,L.minWidth);
if(L.height>0){O+=L.height;
M+=L.minHeight;
J++;
}}
if(J>1){var K=(J-1)*S;
O+=K;
M+=K;
}}else{var J=0;

for(var i=0;i<length;i++){L=T[i].getSizeHint();
O=Math.max(O,L.height);
M=Math.max(M,L.minHeight);
if(L.width>0){Q+=L.width;
P+=L.minWidth;
J++;
}}
if(J>1){var K=(J-1)*S;
Q+=K;
P+=K;
}}R={minWidth:P,width:Q,minHeight:M,height:O};
}return R;
}}});
})();
(function(){var A="middle",z="qx.ui.layout.Util",y="left",x="center",w="top",v="bottom",u="right";
qx.Class.define(z,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(F,G,H){var J,N,I,O;
var K=G>H;
var P=Math.abs(G-H);
var Q,L;
var M={};

for(N in F){J=F[N];
M[N]={potential:K?J.max-J.value:J.value-J.min,flex:K?J.flex:1/J.flex,offset:0};
}while(P!=0){O=Infinity;
I=0;

for(N in M){J=M[N];

if(J.potential>0){I+=J.flex;
O=Math.min(O,J.potential/J.flex);
}}if(I==0){break;
}O=Math.min(P,O*I)/I;
Q=0;

for(N in M){J=M[N];

if(J.potential>0){L=Math.min(P,J.potential,Math.ceil(O*J.flex));
Q+=L-O*J.flex;

if(Q>=1){Q-=1;
L-=1;
}J.potential-=L;

if(K){J.offset+=L;
}else{J.offset-=L;
}P-=L;
}}}return M;
},computeHorizontalAlignOffset:function(bc,bd,be,bf,bg){if(bf==null){bf=0;
}
if(bg==null){bg=0;
}var bh=0;

switch(bc){case y:bh=bf;
break;
case u:bh=be-bd-bg;
break;
case x:bh=Math.round((be-bd)/2);
if(bh<bf){bh=bf;
}else if(bh<bg){bh=Math.max(bf,be-bd-bg);
}break;
}return bh;
},computeVerticalAlignOffset:function(o,p,q,r,s){if(r==null){r=0;
}
if(s==null){s=0;
}var t=0;

switch(o){case w:t=r;
break;
case v:t=q-p-s;
break;
case A:t=Math.round((q-p)/2);
if(t<r){t=r;
}else if(t<s){t=Math.max(r,q-p-s);
}break;
}return t;
},collapseMargins:function(X){var Y=0,bb=0;

for(var i=0,l=arguments.length;i<l;i++){var ba=arguments[i];

if(ba<0){bb=Math.min(bb,ba);
}else if(ba>0){Y=Math.max(Y,ba);
}}return Y+bb;
},computeHorizontalGaps:function(B,C,D){if(C==null){C=0;
}var E=0;

if(D){E+=B[0].getMarginLeft();

for(var i=1,l=B.length;i<l;i+=1){E+=this.collapseMargins(C,B[i-1].getMarginRight(),B[i].getMarginLeft());
}E+=B[l-1].getMarginRight();
}else{for(var i=1,l=B.length;i<l;i+=1){E+=B[i].getMarginLeft()+B[i].getMarginRight();
}E+=(C*(l-1));
}return E;
},computeVerticalGaps:function(a,b,c){if(b==null){b=0;
}var d=0;

if(c){d+=a[0].getMarginTop();

for(var i=1,l=a.length;i<l;i+=1){d+=this.collapseMargins(b,a[i-1].getMarginBottom(),a[i].getMarginTop());
}d+=a[l-1].getMarginBottom();
}else{for(var i=1,l=a.length;i<l;i+=1){d+=a[i].getMarginTop()+a[i].getMarginBottom();
}d+=(b*(l-1));
}return d;
},computeHorizontalSeparatorGaps:function(e,f,g){var k=qx.theme.manager.Decoration.getInstance().resolve(g);
var j=k.getInsets();
var h=j.left+j.right;
var m=0;

for(var i=0,l=e.length;i<l;i++){var n=e[i];
m+=n.getMarginLeft()+n.getMarginRight();
}m+=(f+h+f)*(l-1);
return m;
},computeVerticalSeparatorGaps:function(bi,bj,bk){var bn=qx.theme.manager.Decoration.getInstance().resolve(bk);
var bm=bn.getInsets();
var bl=bm.top+bm.bottom;
var bo=0;

for(var i=0,l=bi.length;i<l;i++){var bp=bi[i];
bo+=bp.getMarginTop()+bp.getMarginBottom();
}bo+=(bj+bl+bj)*(l-1);
return bo;
},arrangeIdeals:function(R,S,T,U,V,W){if(S<R||V<U){if(S<R&&V<U){S=R;
V=U;
}else if(S<R){V-=(R-S);
S=R;
if(V<U){V=U;
}}else if(V<U){S-=(U-V);
V=U;
if(S<R){S=R;
}}}
if(S>T||V>W){if(S>T&&V>W){S=T;
V=W;
}else if(S>T){V+=(S-T);
S=T;
if(V>W){V=W;
}}else if(V>W){S+=(V-W);
V=W;
if(S>T){S=T;
}}}return {begin:S,end:V};
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.ui.form.IStringForm";
qx.Interface.define(b,{events:{"changeValue":c},members:{setValue:function(a){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var o="on",n="qx.dynlocale",m="text",l="Boolean",k="qx.client",j="color",i="userSelect",h="changeLocale",g="qx.debug",f="enabled",K="none",J="_applyTextAlign",I="qx.ui.core.Widget",H="gecko",G="changeTextAlign",F="_applyWrap",E="changeValue",D="changeContent",C="qx.ui.basic.Label",B="A",v="_applyValue",w="center",t="_applyBuddy",u="String",r="textAlign",s="right",p="changeRich",q="_applyRich",x="click",y="label",A="webkit",z="left";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(Q){qx.ui.core.Widget.call(this);

if(Q!=null){this.setValue(Q);
}
if(qx.core.Variant.isSet(n,o)){qx.locale.Manager.getInstance().addListener(h,this._onChangeLocale,this);
}},properties:{rich:{check:l,init:false,event:p,apply:q},wrap:{check:l,init:true,apply:F},value:{check:u,apply:v,event:E,nullable:true},buddy:{check:I,apply:t,nullable:true,init:null},textAlign:{check:[z,w,s],nullable:true,themeable:true,apply:J,event:G},appearance:{refine:true,init:y},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jJ:null,__jK:null,__jL:null,__jM:null,_getContentHint:function(){if(this.__jK){this.__jN=this.__jO();
delete this.__jK;
}return {width:this.__jN.width,height:this.__jN.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(P){if(qx.core.Variant.isSet(k,H)){if(P&&!this.isRich()){if(qx.core.Variant.isSet(g,o)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,P);
if(qx.core.Variant.isSet(k,A)){this.getContainerElement().setStyle(i,P?m:K);
this.getContentElement().setStyle(i,P?m:K);
}},_getContentHeightForWidth:function(Y){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jO(Y).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(bd,be){this.getContentElement().setStyle(r,bd);
},_applyTextColor:function(R,S){if(R){this.getContentElement().setStyle(j,qx.theme.manager.Color.getInstance().resolve(R));
}else{this.getContentElement().removeStyle(j);
}},__jN:{width:0,height:0},_applyFont:function(ba,bb){var bc;

if(ba){this.__jJ=qx.theme.manager.Font.getInstance().resolve(ba);
bc=this.__jJ.getStyles();
}else{this.__jJ=null;
bc=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bc);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
},__jO:function(T){var X=qx.bom.Label;
var V=this.getFont();
var U=V?this.__jJ.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||B;
var W=this.getRich();
return W?X.getHtmlSize(content,U,T):X.getTextSize(content,U);
},_applyBuddy:function(a,b){if(b!=null){b.removeBinding(this.__jL);
this.__jL=null;
this.removeListenerById(this.__jM);
this.__jM=null;
}
if(a!=null){this.__jL=a.bind(f,this,f);
this.__jM=this.addListener(x,a.focus,a);
}},_applyRich:function(O){this.getContentElement().setRich(O);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(c,d){if(c&&!this.isRich()){if(qx.core.Variant.isSet(g,o)){this.warn("Only rich labels support wrap.");
}}},_onChangeLocale:qx.core.Variant.select(n,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(M,N){this.getContentElement().setValue(M);
this.__jK=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(D,M,N);
}},destruct:function(){if(qx.core.Variant.isSet(n,o)){qx.locale.Manager.getInstance().removeListener(h,this._onChangeLocale,this);
}if(this.__jL!=null){var L=this.getBuddy();

if(L!=null&&!L.isDisposed()){L.removeBinding(this.__jL);
}}this.__jJ=this.__jL=null;
}});
})();
(function(){var h="value",g="Please use the getValue() method instead.",f="qx.html.Label",e="Please use the setValue() method instead.";
qx.Class.define(f,{extend:qx.html.Element,members:{__jP:null,_applyProperty:function(name,a){qx.html.Element.prototype._applyProperty.call(this,name,a);

if(name==h){var b=this.getDomElement();
qx.bom.Label.setValue(b,a);
}},_createDomElement:function(){var j=this.__jP;
var i=qx.bom.Label.create(this._content,j);
return i;
},_copyData:function(l){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(c){var d=this.getDomElement();

if(d){throw new Error("The label mode cannot be modified after initial creation");
}c=!!c;

if(this.__jP==c){return;
}this.__jP=c;
return this;
},setValue:function(m){this._setProperty(h,m);
return this;
},getValue:function(){return this._getProperty(h);
},setContent:function(k){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.setValue(k);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.getValue();
}}});
})();
(function(){var q="qx.client",p="gecko",o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",I="auto",H="0",G="ellipsis",F="normal",E="label",D="px",C="crop",B="end",A="100%",z="visible",x="qx.bom.Label",y="Please use the setValue() method instead.",v="opera",w="Please use the getValue() method instead.",t="block",u="none",r="-1000px",s="absolute";
qx.Class.define(x,{statics:{__jQ:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jR:function(){var bb=this.__jT(false);
document.body.insertBefore(bb,document.body.firstChild);
return this._textElement=bb;
},__jS:function(){var P=this.__jT(true);
document.body.insertBefore(P,document.body.firstChild);
return this._htmlElement=P;
},__jT:function(K){var L=qx.bom.Element.create(o);
var M=L.style;
M.width=M.height=I;
M.left=M.top=r;
M.visibility=j;
M.position=s;
M.overflow=z;

if(K){M.whiteSpace=F;
}else{M.whiteSpace=h;

if(qx.core.Variant.isSet(q,p)){var N=document.createElementNS(i,E);
var M=N.style;
M.padding=H;

for(var O in this.__jQ){M[O]=n;
}L.appendChild(N);
}}return L;
},__jU:function(S){var T={};

if(S){T.whiteSpace=F;
}else if(qx.core.Variant.isSet(q,p)){T.display=t;
}else{T.overflow=j;
T.whiteSpace=h;
T.textOverflow=G;
T.userSelect=u;
if(qx.core.Variant.isSet(q,v)){T.OTextOverflow=G;
}}return T;
},create:function(content,U,V){if(!V){V=window;
}
if(U){var W=V.document.createElement(o);
W.useHtml=true;
}else if(qx.core.Variant.isSet(q,p)){var W=V.document.createElement(o);
var Y=V.document.createElementNS(i,E);
var X=Y.style;
X.cursor=n;
X.color=n;
X.overflow=j;
X.maxWidth=A;
X.padding=H;
for(var ba in this.__jQ){Y.style[ba]=n;
}Y.setAttribute(C,B);
W.appendChild(Y);
}else{var W=V.document.createElement(o);
qx.bom.element.Style.setStyles(W,this.__jU(U));
}
if(content){this.setValue(W,content);
}return W;
},setValue:function(Q,R){R=R||k;

if(Q.useHtml){Q.innerHTML=R;
}else if(qx.core.Variant.isSet(q,p)){Q.firstChild.setAttribute(l,R);
}else{qx.bom.element.Attribute.set(Q,m,R);
}},getValue:function(g){if(g.useHtml){return g.innerHTML;
}else if(qx.core.Variant.isSet(q,p)){return g.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(g,m);
}},getHtmlSize:function(content,d,e){var f=this._htmlElement||this.__jS();
f.style.width=e!==undefined?e+D:I;
f.innerHTML=content;
return this.__jV(f,d);
},getTextSize:function(a,b){var c=this._textElement||this.__jR();

if(qx.core.Variant.isSet(q,p)){c.firstChild.setAttribute(l,a);
}else{qx.bom.element.Attribute.set(c,m,a);
}return this.__jV(c,b);
},__jV:function(bc,bd){var be=this.__jQ;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||k;
}var bg=qx.bom.element.Dimension.getSize(bc);

if(qx.core.Variant.isSet(q,p)){if(!qx.bom.client.Platform.WIN){bg.width++;
}}return bg;
},setContent:function(bh,bi){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
this.setValue(bh,bi);
},getContent:function(J){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getValue(J);
}}});
})();
(function(){var y="0px",x="mshtml",w="qx.client",v="qx.bom.element.Dimension",u="paddingRight",t="paddingLeft",s="paddingTop",r="paddingBottom";
qx.Class.define(v,{statics:{getWidth:qx.core.Variant.select(w,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.right)-Math.round(C.left);
}else{return B.offsetWidth;
}},"default":function(j){return j.offsetWidth;
}}),getHeight:qx.core.Variant.select(w,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.bottom)-Math.round(b.top);
}else{return a.offsetHeight;
}},"default":function(D){return D.offsetHeight;
}}),getSize:function(z){return {width:this.getWidth(z),height:this.getHeight(z)};
},__jW:{visible:true,hidden:true},getContentWidth:function(c){var e=qx.bom.element.Style;
var f=qx.bom.element.Overflow.getX(c);
var g=parseInt(e.get(c,t)||y,10);
var i=parseInt(e.get(c,u)||y,10);

if(this.__jW[f]){return c.clientWidth-g-i;
}else{if(c.clientWidth>=c.scrollWidth){return Math.max(c.clientWidth,c.scrollWidth)-g-i;
}else{var h=c.scrollWidth-g;
var d=qx.bom.client.Engine;

if(d.NAME===x&&d.VERSION==6){h-=i;
}return h;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,s)||y,10);
var n=parseInt(m.get(k,r)||y,10);

if(this.__jW[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===x&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(A){return {width:this.getContentWidth(A),height:this.getContentHeight(A)};
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.form.IForm";
qx.Interface.define(c,{events:{"changeEnabled":d,"changeValid":d,"changeInvalidMessage":d,"changeRequired":d},members:{setEnabled:function(f){return arguments.length==1;
},getEnabled:function(){},setRequired:function(b){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(a){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var k="Use 'getBlocker().getContentBlockerElement()' instead.",j="Use 'getBlocker().getBlockerElement()' instead.",i="_applyBlockerColor",h="Number",g="__rs",f="qx.ui.core.MBlocker",e="_applyBlockerOpacity",d="Color";
qx.Mixin.define(f,{construct:function(){this.__rs=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:d,init:null,nullable:true,apply:i,themeable:true},blockerOpacity:{check:h,init:1,apply:e,themeable:true}},members:{__rs:null,_applyBlockerColor:function(l,m){this.__rs.setColor(l);
},_applyBlockerOpacity:function(a,b){this.__rs.setOpacity(a);
},block:function(){this.__rs.block();
},isBlocked:function(){return this.__rs.isBlocked();
},unblock:function(){this.__rs.unblock();
},forceUnblock:function(){this.__rs.forceUnblock();
},blockContent:function(c){this.__rs.blockContent(c);
},isContentBlocked:function(){return this.__rs.isContentBlocked();
},unblockContent:function(){this.__rs.unblockContent();
},forceUnblockContent:function(){this.__rs.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,k);
return this.__rs.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__rs.getBlockerElement();
},getBlocker:function(){return this.__rs;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var k="qx.ui.window.Window",j="changeModal",i="changeVisibility",h="changeActive",g="_applyActiveWindow",f="__rt",d="__ru",c="qx.ui.window.MDesktop";
qx.Mixin.define(c,{properties:{activeWindow:{check:k,apply:g,init:null,nullable:true}},members:{__rt:null,__ru:null,getWindowManager:function(){if(!this.__ru){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ru;
},supportsMaximize:function(){return true;
},setWindowManager:function(p){if(this.__ru){this.__ru.setDesktop(null);
}p.setDesktop(this);
this.__ru=p;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(a,b){this.getWindowManager().changeActiveWindow(a,b);

if(a){a.setActive(true);
}
if(b){b.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(o){if(qx.Class.isDefined(k)&&o instanceof qx.ui.window.Window){this._addWindow(o);
}},_addWindow:function(l){if(!qx.lang.Array.contains(this.getWindows(),l)){this.getWindows().push(l);
l.addListener(h,this._onChangeActive,this);
l.addListener(j,this._onChangeModal,this);
l.addListener(i,this._onChangeVisibility,this);
}
if(l.getActive()){this.setActiveWindow(l);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(n){if(qx.Class.isDefined(k)&&n instanceof qx.ui.window.Window){this._removeWindow(n);
}},_removeWindow:function(m){qx.lang.Array.remove(this.getWindows(),m);
m.removeListener(h,this._onChangeActive,this);
m.removeListener(j,this._onChangeModal,this);
m.removeListener(i,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__rt){this.__rt=[];
}return this.__rt;
}},destruct:function(){this._disposeArray(f);
this._disposeObjects(d);
}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__rv:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(A,B){},"default":function(w,x){var y=qx.bom.Stylesheet;
var z=this.__rv;

if(!z){this.__rv=z=y.createElement();
}y.removeAllRules(z);

if(w){y.addRule(z,a,qx.bom.element.Cursor.compile(w).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(q,r){if(q){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(u,v){if(v===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(u===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__rv=null;
},defer:function(s,t){qx.ui.core.MChildrenHandling.remap(t);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(q){this.__rw=qx.dom.Node.getWindow(q);
this.__rx=q;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__rw,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__rw:null,__rx:null,_createContainerElement:function(){var r=this.__rx;
if(qx.core.Variant.isSet(f,k)){if(!r.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var v=r.documentElement.style;
var s=r.body.style;
v.overflow=s.overflow=g;
v.padding=v.margin=s.padding=s.margin=l;
v.width=v.height=s.width=s.height=c;
var u=r.createElement(d);
r.body.appendChild(u);
var t=new qx.html.Root(u);
t.setStyle(m,b);
t.setAttribute(i,this.toHashCode());
return t;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var o=qx.bom.Viewport.getWidth(this.__rw);
var p=qx.bom.Viewport.getHeight(this.__rw);
return {minWidth:o,width:o,maxWidth:o,minHeight:p,height:p,maxHeight:p};
},_applyPadding:function(z,A,name){if(z&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,z,A,name);
},_applyDecorator:function(w,x){qx.ui.root.Abstract.prototype._applyDecorator.call(this,w,x);

if(!w){return;
}var y=this.getDecoratorElement().getInsets();

if(y.left||y.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__rw=this.__rx=null;
}});
})();
(function(){var u="zIndex",t="px",s="keydown",r="deactivate",q="This method is not needed anymore.",p="resize",o="keyup",n="keypress",m="backgroundColor",l="_applyOpacity",H="Use 'getBlockerElement' instead.",G="opacity",F="interval",E="Tab",D="Color",C="__mM",B="qx.ui.root.Page",A="Use 'getContentBlockerElement' instead.",z="Number",y="qx.ui.core.Blocker",w="__mJ",x="__mH",v="_applyColor";
qx.Class.define(y,{extend:qx.core.Object,construct:function(J){qx.core.Object.call(this);
this._widget=J;
this._isPageRoot=(qx.Class.isDefined(B)&&J instanceof qx.ui.root.Page);

if(this._isPageRoot){J.addListener(p,this.__mN,this);
}this.__mE=[];
this.__mF=[];
this.__mG=[];
},properties:{color:{check:D,init:null,nullable:true,apply:v,themeable:true},opacity:{check:z,init:1,apply:l,themeable:true}},members:{__mH:null,__mI:0,__mJ:null,__mG:null,__mE:null,__mF:null,__mK:null,__mL:0,__mM:null,_isPageRoot:false,_widget:null,__mN:function(e){var K=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:K.width,height:K.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:K.width,height:K.height});
}},_applyColor:function(h,j){var k=qx.theme.manager.Color.getInstance().resolve(h);
this.__mO(m,k);
},_applyOpacity:function(N,O){this.__mO(G,N);
},__mO:function(b,c){var d=[];
this.__mH&&d.push(this.__mH);
this.__mJ&&d.push(this.__mJ);

for(var i=0;i<d.length;i++){d[i].setStyle(b,c);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mL+=1;

if(this.__mL==1){this.__mK=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q);
this.__mL-=1;

if(this.__mL==0){this._widget.setAnonymous(this.__mK);
}},_backupActiveWidget:function(){var V=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__mE.push(V.getActive());
this.__mF.push(V.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var U=this.__mE.length;

if(U>0){var T=this.__mE[U-1];

if(T){qx.bom.Element.activate(T);
}this.__mE.pop();
}var S=this.__mF.length;

if(S>0){var T=this.__mF[S-1];

if(T){qx.bom.Element.focus(this.__mF[S-1]);
}this.__mF.pop();
}},__mP:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,H);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mH){this.__mH=this.__mP();
this.__mH.setStyle(u,15);
this._widget.getContainerElement().add(this.__mH);
this.__mH.exclude();
}return this.__mH;
},block:function(){this.__mI++;

if(this.__mI<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(r,this.__mU,this);
a.addListener(n,this.__mT,this);
a.addListener(s,this.__mT,this);
a.addListener(o,this.__mT,this);
}},isBlocked:function(){return this.__mI>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mI--;

if(this.__mI<1){this.__mQ();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mI=0;
this.__mQ();
},__mQ:function(){this._restoreActiveWidget();
var I=this.getBlockerElement();
I.removeListener(r,this.__mU,this);
I.removeListener(n,this.__mT,this);
I.removeListener(s,this.__mT,this);
I.removeListener(o,this.__mT,this);
I.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,A);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mJ){this.__mJ=this.__mP();
this._widget.getContentElement().add(this.__mJ);
this.__mJ.exclude();
}return this.__mJ;
},blockContent:function(P){var Q=this.getContentBlockerElement();
Q.setStyle(u,P);
this.__mG.push(P);

if(this.__mG.length<2){Q.include();

if(this._isPageRoot){if(!this.__mM){this.__mM=new qx.event.Timer(300);
this.__mM.addListener(F,this.__mS,this);
}this.__mM.start();
this.__mS();
}}},isContentBlocked:function(){return this.__mG.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mG.pop();
var L=this.__mG[this.__mG.length-1];
var M=this.getContentBlockerElement();
M.setStyle(u,L);

if(this.__mG.length<1){this.__mR();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mG=[];
var R=this.getContentBlockerElement();
R.setStyle(u,null);
this.__mR();
},__mR:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mM.stop();
}},__mS:function(){var f=this._widget.getContainerElement().getDomElement();
var g=qx.dom.Node.getDocument(f);
this.getContentBlockerElement().setStyles({height:g.documentElement.scrollHeight+t,width:g.documentElement.scrollWidth+t});
},__mT:function(e){if(e.getKeyIdentifier()==E){e.stop();
}},__mU:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(p,this.__mN,this);
}this._disposeObjects(w,x,C);
this.__mK=this.__mE=this.__mF=this._widget=this.__mG=null;
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
this.addListener(s,this.__mV,this);
this.addListener(n,this.__mV,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__mV:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var F="keypress",E="focusout",D="activate",C="Tab",B="singleton",A="deactivate",z="__oL",y="focusin",x="qx.ui.core.FocusHandler";
qx.Class.define(x,{extend:qx.core.Object,type:B,construct:function(){qx.core.Object.call(this);
this.__oL={};
},members:{__oL:null,__oM:null,__oN:null,__oO:null,connectTo:function(a){a.addListener(F,this.__oP,this);
a.addListener(y,this._onFocusIn,this,true);
a.addListener(E,this._onFocusOut,this,true);
a.addListener(D,this._onActivate,this,true);
a.addListener(A,this._onDeactivate,this,true);
},addRoot:function(w){this.__oL[w.$$hash]=w;
},removeRoot:function(bi){delete this.__oL[bi.$$hash];
},getActiveWidget:function(){return this.__oM;
},isActive:function(k){return this.__oM==k;
},getFocusedWidget:function(){return this.__oN;
},isFocused:function(G){return this.__oN==G;
},isFocusRoot:function(d){return !!this.__oL[d.$$hash];
},_onActivate:function(e){var c=e.getTarget();
this.__oM=c;
var b=this.__oQ(c);

if(b!=this.__oO){this.__oO=b;
}},_onDeactivate:function(e){var f=e.getTarget();

if(this.__oM==f){this.__oM=null;
}},_onFocusIn:function(e){var J=e.getTarget();

if(J!=this.__oN){this.__oN=J;
J.visualizeFocus();
}},_onFocusOut:function(e){var bd=e.getTarget();

if(bd==this.__oN){this.__oN=null;
bd.visualizeBlur();
}},__oP:function(e){if(e.getKeyIdentifier()!=C){return;
}
if(!this.__oO){return;
}e.stopPropagation();
e.preventDefault();
var u=this.__oN;

if(!e.isShiftPressed()){var v=u?this.__oU(u):this.__oS();
}else{var v=u?this.__oV(u):this.__oT();
}if(v){v.tabFocus();
}},__oQ:function(H){var I=this.__oL;

while(H){if(I[H.$$hash]){return H;
}H=H.getLayoutParent();
}return null;
},__oR:function(R,S){if(R===S){return 0;
}var U=R.getTabIndex()||0;
var T=S.getTabIndex()||0;

if(U!=T){return U-T;
}var ba=R.getContainerElement().getDomElement();
var Y=S.getContainerElement().getDomElement();
var X=qx.bom.element.Location;
var W=X.get(ba);
var V=X.get(Y);
if(W.top!=V.top){return W.top-V.top;
}if(W.left!=V.left){return W.left-V.left;
}var bb=R.getZIndex();
var bc=S.getZIndex();

if(bb!=bc){return bb-bc;
}return 0;
},__oS:function(){return this.__oY(this.__oO,null);
},__oT:function(){return this.__pa(this.__oO,null);
},__oU:function(m){var n=this.__oO;

if(n==m){return this.__oS();
}
while(m&&m.getAnonymous()){m=m.getLayoutParent();
}
if(m==null){return [];
}var o=[];
this.__oW(n,m,o);
o.sort(this.__oR);
var p=o.length;
return p>0?o[0]:this.__oS();
},__oV:function(be){var bf=this.__oO;

if(bf==be){return this.__oT();
}
while(be&&be.getAnonymous()){be=be.getLayoutParent();
}
if(be==null){return [];
}var bg=[];
this.__oX(bf,be,bg);
bg.sort(this.__oR);
var bh=bg.length;
return bh>0?bg[bh-1]:this.__oT();
},__oW:function(parent,q,r){var s=parent.getLayoutChildren();
var t;

for(var i=0,l=s.length;i<l;i++){t=s[i];
if(!(t instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(t)&&t.isEnabled()&&t.isVisible()){if(t.isTabable()&&this.__oR(q,t)<0){r.push(t);
}this.__oW(t,q,r);
}}},__oX:function(parent,N,O){var P=parent.getLayoutChildren();
var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];
if(!(Q instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(Q)&&Q.isEnabled()&&Q.isVisible()){if(Q.isTabable()&&this.__oR(N,Q)>0){O.push(Q);
}this.__oX(Q,N,O);
}}},__oY:function(parent,K){var L=parent.getLayoutChildren();
var M;

for(var i=0,l=L.length;i<l;i++){M=L[i];
if(!(M instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(M)&&M.isEnabled()&&M.isVisible()){if(M.isTabable()){if(K==null||this.__oR(M,K)<0){K=M;
}}K=this.__oY(M,K);
}}return K;
},__pa:function(parent,g){var h=parent.getLayoutChildren();
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];
if(!(j instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(j)&&j.isEnabled()&&j.isVisible()){if(j.isTabable()){if(g==null||this.__oR(j,g)>0){g=j;
}}g=this.__pa(j,g);
}}return g;
}},destruct:function(){this._disposeMap(z);
this.__oN=this.__oM=this.__oO=null;
}});
})();
(function(){var G="qx.client",F="head",E="text/css",D="stylesheet",C="}",B='@import "',A="{",z='";',y="qx.bom.Stylesheet",x="link",w="style";
qx.Class.define(y,{statics:{includeFile:function(j,k){if(!k){k=document;
}var l=k.createElement(x);
l.type=E;
l.rel=D;
l.href=qx.util.ResourceManager.getInstance().toUri(j);
var m=k.getElementsByTagName(F)[0];
m.appendChild(l);
},createElement:qx.core.Variant.select(G,{"mshtml":function(M){var N=document.createStyleSheet();

if(M){N.cssText=M;
}return N;
},"default":function(u){var v=document.createElement(w);
v.type=E;

if(u){v.appendChild(document.createTextNode(u));
}document.getElementsByTagName(F)[0].appendChild(v);
return v.sheet;
}}),addRule:qx.core.Variant.select(G,{"mshtml":function(be,bf,bg){be.addRule(bf,bg);
},"default":function(c,d,e){c.insertRule(d+A+e+C,c.cssRules.length);
}}),removeRule:qx.core.Variant.select(G,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(q,r){var s=q.cssRules;
var t=s.length;

for(var i=t-1;i>=0;--i){if(s[i].selectorText==r){q.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(G,{"mshtml":function(J){var K=J.rules;
var L=K.length;

for(var i=L-1;i>=0;i--){J.removeRule(i);
}},"default":function(n){var o=n.cssRules;
var p=o.length;

for(var i=p-1;i>=0;i--){n.deleteRule(i);
}}}),addImport:qx.core.Variant.select(G,{"mshtml":function(a,b){a.addImport(b);
},"default":function(H,I){H.insertRule(B+I+z,H.cssRules.length);
}}),removeImport:qx.core.Variant.select(G,{"mshtml":function(ba,bb){var bc=ba.imports;
var bd=bc.length;

for(var i=bd-1;i>=0;i--){if(bc[i].href==bb){ba.removeImport(i);
}}},"default":function(V,W){var X=V.cssRules;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].href==W){V.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(G,{"mshtml":function(f){var g=f.imports;
var h=g.length;

for(var i=h-1;i>=0;i--){f.removeImport(i);
}},"default":function(S){var T=S.cssRules;
var U=T.length;

for(var i=U-1;i>=0;i--){if(T[i].type==T[i].IMPORT_RULE){S.deleteRule(i);
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
(function(){var b="qx.html.Root";
qx.Class.define(b,{extend:qx.html.Element,construct:function(a){qx.html.Element.call(this);

if(a!=null){this.useElement(a);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var v="'>",u="[",t=", ",s="</span>",r="<span class='type-",q="</span> ",p="}",o="",n="]",m="{",M="map",L="<span class='object'>",K="]:",J="<span class='object' title='Object instance with hash code: ",I="string",H="level-",G="0",F="<span class='offset'>",E=":",D="qx.log.appender.Util",B="DIV",C="<span>",z="<span class='type-key'>",A="</span>:<span class='type-",x="</span>: ",y=" ",w="]</span>: ";
qx.Class.define(D,{statics:{toHtml:function(R){var bc=[];
var Y,bb,T,V;
bc.push(F,this.formatOffset(R.offset,6),q);

if(R.object){var S=R.win.qx.core.ObjectRegistry.fromHashCode(R.object);

if(S){bc.push(J+S.$$hash+v,S.classname,u,S.$$hash,w);
}}else if(R.clazz){bc.push(L+R.clazz.classname,x);
}var U=R.items;

for(var i=0,ba=U.length;i<ba;i++){Y=U[i];
bb=Y.text;

if(bb instanceof Array){var V=[];

for(var j=0,X=bb.length;j<X;j++){T=bb[j];

if(typeof T===I){V.push(C+this.escapeHTML(T)+s);
}else if(T.key){V.push(z+T.key+A+T.type+v+this.escapeHTML(T.text)+s);
}else{V.push(r+T.type+v+this.escapeHTML(T.text)+s);
}}bc.push(r+Y.type+v);

if(Y.type===M){bc.push(m,V.join(t),p);
}else{bc.push(u,V.join(t),n);
}bc.push(s);
}else{bc.push(r+Y.type+v+this.escapeHTML(bb)+q);
}}var W=document.createElement(B);
W.innerHTML=bc.join(o);
W.className=H+R.level;
return W;
},formatOffset:function(N,length){var Q=N.toString();
var O=(length||6)-Q.length;
var P=o;

for(var i=0;i<O;i++){P+=G;
}return P+Q;
},escapeHTML:function(bf){return String(bf).replace(/[<>&"']/g,this.__CI);
},__CI:function(bd){var be={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return be[bd]||"?";
},toText:function(a){return this.toTextArray(a).join(y);
},toTextArray:function(b){var l=[];
l.push(this.formatOffset(b.offset,6));

if(b.object){var c=b.win.qx.core.ObjectRegistry.fromHashCode(b.object);

if(c){l.push(c.classname+u+c.$$hash+K);
}}else if(b.clazz){l.push(b.clazz.classname+E);
}var d=b.items;
var g,k;

for(var i=0,h=d.length;i<h;i++){g=d[i];
k=g.text;

if(k instanceof Array){var e=[];

for(var j=0,f=k.length;j<f;j++){e.push(k[j].text);
}
if(g.type===M){l.push(m,e.join(t),p);
}else{l.push(u,e.join(t),n);
}}else{l.push(k);
}}return l;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(j){if(window.console&&console.firebug){console[j.level].call(console,qx.log.appender.Util.toText(j));
}},"mshtml":function(e){if(window.console){var g=e.level;

if(g==d){g=c;
}var f=qx.log.appender.Util.toText(e);
console[g](f);
}},"webkit":function(k){if(window.console){var m=k.level;

if(m==d){m=c;
}var l=qx.log.appender.Util.toText(k);
console[m](l);
}},"opera":function(h){}})},defer:function(i){qx.log.Logger.register(i);
}});
})();
(function(){var n="",m='</div>',l="none",k="keypress",j='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',i='.qxconsole .messages .user-result{background:white}',h='.qxconsole .messages .level-error{background:#FFE2D5}',g="div",f="user-command",d='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",L='.qxconsole .messages .level-user{background:#E3EFE9}',K='<div class="qxconsole">',J='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',u='.qxconsole .messages .type-string{color:black;font-weight:normal;}',v='.qxconsole .control a{text-decoration:none;color:black;}',s='<div class="messages">',t='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',q='<input type="text"/>',r="clear",o='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',p='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',w='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',x='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',B='.qxconsole .messages .user-command{color:blue}',A="qx.log.appender.Console",D='.qxconsole .messages .level-info{background:#DEEDFA}',C="block",F='.qxconsole .messages .level-warn{background:#FFF7D5}',E='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',z='.qxconsole .messages .user-error{background:#FFE2D5}',I='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',H='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',G=">>> ",y='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(A,{statics:{init:function(){var T=[w,I,v,j,P,B,i,z,O,D,F,h,L,u,y,t,p,J,R,N,Q,E,x,o,S];
qx.bom.Stylesheet.createElement(T.join(n));
var V=[K,H,s,m,d,q,m,m];
var W=document.createElement(M);
W.innerHTML=V.join(n);
var U=W.firstChild;
document.body.appendChild(W.firstChild);
this.__KE=U;
this.__KF=U.childNodes[1];
this.__KG=U.childNodes[2].firstChild;
this.__KL();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,k,this.__KM,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__KF.innerHTML=n;
},process:function(c){this.__KF.appendChild(qx.log.appender.Util.toHtml(c));
this.__KH();
},__KH:function(){this.__KF.scrollTop=this.__KF.scrollHeight;
},__KI:true,toggle:function(){if(!this.__KE){this.init();
}else if(this.__KE.style.display==l){this.show();
}else{this.__KE.style.display=l;
}},show:function(){if(!this.__KE){this.init();
}else{this.__KE.style.display=C;
this.__KF.scrollTop=this.__KF.scrollHeight;
}},__KJ:[],execute:function(){var bb=this.__KG.value;

if(bb==n){return;
}
if(bb==r){return this.clear();
}var Y=document.createElement(g);
Y.innerHTML=qx.log.appender.Util.escapeHTML(G+bb);
Y.className=f;
this.__KJ.push(bb);
this.__KK=this.__KJ.length;
this.__KF.appendChild(Y);
this.__KH();

try{var ba=window.eval(bb);
}catch(bc){qx.log.Logger.error(bc);
}
if(ba!==undefined){qx.log.Logger.debug(ba);
}},__KL:function(e){this.__KF.style.height=(this.__KE.clientHeight-this.__KE.firstChild.offsetHeight-this.__KE.lastChild.offsetHeight)+"px";
},__KM:function(e){var b=e.getKeyIdentifier();
if((b=="F7")||(b=="D"&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__KE){return;
}if(!qx.dom.Hierarchy.contains(this.__KE,e.getTarget())){return;
}if(b=="Enter"&&this.__KG.value!=""){this.execute();
this.__KG.value="";
}if(b=="Up"||b=="Down"){this.__KK+=b=="Up"?-1:1;
this.__KK=Math.min(Math.max(0,this.__KK),this.__KJ.length);
var a=this.__KJ[this.__KK];
this.__KG.value=a||"";
this.__KG.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,k,X.__KM,X);
}});
})();
(function(){var dJ="execute",dI="/",dH="",dG="auto",dF="current",dE="value",dD=" ",dC="excluded",dB="visible",dA="category",cJ='modelLink',cI="modelLink",cH="changeSelection",cG="tags",cF="white",cE="html",cD="all",cC="monospace",cB="div",cA="right",dQ="id",dR="node",dO="_blank",dP=" Demo Browser ",dM=".html",dN="horizontal",dK="~",dL="_",dS="qooxdoo ",dT="main",di="qx_srcview",dh="js",dk="widget",dj="?",dm="log",dl="separator-vertical",dp="request",dn="icon/22/actions/edit-clear.png",dg="Demos",df="^.*",bq="filled",br="Clear log",bs="changeValue",bt="dblclick",bu="icon/22/actions/media-playback-start.png",bv="qx.version",bw="<div class='script'>The sample JS source will be displayed here.</div>",bx="demobrowser.DemoBrowser",by="HTML Code",bz="load",ec="Run previous demo",eb="_history",ea='_cmdNamespacePollution',dY="icon/22/apps/utilities-color-chooser.png",eg="Ctrl+N",ef="completed",ee="Previous",ed="Run",ei="failed",eh="<div class='script'>The sample source will be displayed here.</div>",bY="Open demo in the playground",ca="tree1",bW="f1",bX="Debug",cd="Display log file",ce="icon/22/actions/media-playback-stop.png",cb="icon/22/apps/utilities-log-viewer.png",cc="Ctrl+O",bU="Log File",bV="Stop playback after current demo",bH="qx.theme.Classic",bG='"',bJ="logappender",bI="Choose theme",bD="icon/22/apps/internet-web-browser.png",bC="#",bF="f2",bE="JS Code",bB="icon/22/mimetypes/executable.png",bA="ig",cj="middle",ck="noPlayground",cl="Stop",cm='"}',cf="animation",cg="icon/22/actions/edit-redo.png",ch='_cmdDisposeSample',ci="qx.theme.Modern",cn="toolbar",co="icon/22/apps/office-spreadsheet.png",bR="mshtml",bQ="To Playground",bP="/demo/",bO="demo/welcome.html",bN='_cmdSampleInOwnWindow',bM=".*",bL="background-splitpane",bK='demo/',bT="Debugging options",bS="Ctrl+P",cp="Filter...",cq="/playground/",cr="Dispose Demo",cs='{"code": ',ct="Classic Theme",cu="Global Namespace Pollution",cv="icon/16/actions/edit-find.png",cx="treeview.flat",cy="Own Window",cz="Display HTML source",cN='_cmdObjectSummary',cM='_cmdNextSample',cL="outputviews.sourcepage.html.page",cK=".",cR="Run next demo",cQ='_cmdPrevSample',cP=" Start",cO="background-medium",cT="Ctrl+Left",cS="demo-tree",db="Display JavaScript source",dc='_cmdRunSample',cY="Next",da="qx.client",cW="F5",cX="http://demo.qooxdoo.org/",cU="Modern Theme",cV="Open demo in new window",dd="interval",de="runbutton",dt="outputviews.sourcepage.js.page",ds="8px",dv="Ctrl+Right",du="?qx.theme=",dx="textfield",dw="Ctrl+D",dz="mainsplit",dy="icon/22/actions/go-previous.png",dr="Object Summary",dq="icon/22/actions/application-exit.png",dU="Run the selected demo(s)",dV="left",dW="icon/22/actions/go-next.png",dX="Theme";
qx.Class.define(bx,{extend:qx.ui.container.Composite,construct:function(){var ff,fc,fh;
qx.ui.container.Composite.call(this);
var fe=new qx.ui.layout.VBox;
fe.setSeparator(dl);
this.setLayout(fe);
this.add(this.__LG());
this.widgets={};
this.tests={};
this.__KU="qx.theme.Modern";
this.__Ll();
this.__KV=this.__Ls();
this.add(this.__KV);
var fk=new qx.ui.splitpane.Pane(dN);
this.mainsplit=fk;
var fn=new qx.ui.splitpane.Pane(dN);
fn.setDecorator(null);
this.infosplit=fn;
this.add(fk,{flex:1});
var fl=new qx.ui.container.Composite();
fl.setLayout(new qx.ui.layout.VBox(3));
fl.setBackgroundColor(bL);
fk.add(fl,0);
{};
var fd=new qx.ui.container.Composite();
fd.setLayout(new qx.ui.layout.HBox(3));
fd.setAppearance(dx);
fl.add(fd);
var fg=new qx.ui.basic.Image(cv);
fd.add(fg);
this.__KW=new qx.ui.form.TextField();
this.__KW.setLiveUpdate(true);
this.__KW.setAppearance(dk);
this.__KW.setPlaceholder(cp);
this.__KW.addListener(bs,function(e){this.filter(e.getData());
},this);
fd.add(this.__KW,{flex:1});
{};
this.__KX=new qx.ui.basic.Label("");
this.__KX.setAppearance(dk);
this.__KX.setWidth(80);
this.__KX.setTextAlign(cA);
fd.add(this.__KX);
fk.add(fn,1);
this.__KY=this.__Ly();
fl.add(this.__KY,{flex:1});
var fm=this.__Lu();
fn.add(fm,2);
var fa=this.__Lw();
var fb=this.__Lx();
var fi=this.__Lv();
var fj=new qx.ui.container.Stack;
fj.setDecorator(dT);
fj.add(fa);
fj.add(fb);
fj.add(fi);
this.viewGroup.addListener(cH,function(e){var fB=e.getData()[0];
var fC=fB!=null?fB.getUserData(dE):dH;

switch(fC){case cE:this.setSelection([fa]);
fj.show();
break;
case dh:this.setSelection([fb]);
fj.show();
break;
case dm:this.setSelection([fi]);
fj.show();
break;
default:this.resetSelection();
fj.exclude();
}},fj);
fn.add(fj,1);
fj.resetSelection();
fj.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(dp,function(e){var J=e.getData().replace(dK,dI);

if(this._currentSample!=J){this.setCurrentSample(J);
}},this);
this.__La=[this.__Li,this.__Le,this.__Lj,this.__Lk];
this.__Lb=new qx.event.Timer(250);
this.__Lb.addListener(dd,this.__LA,this);
this.__Lb.start();
},properties:{playDemos:{check:[cD,dA,dF],init:dF}},members:{__Lc:null,__KU:null,__Lb:null,__Ld:null,__KY:null,__KX:null,__KW:null,__Le:null,__Lf:null,__La:null,__Lg:null,__Lh:{},__Li:null,__Lj:null,__Lk:null,defaultUrl:bO,playgroundUrl:cX+qx.core.Setting.get(bv)+cq,__Ll:function(){this._cmdObjectSummary=new qx.ui.core.Command(cc);
this._cmdObjectSummary.addListener(dJ,this.__Lm,this);
this._cmdRunSample=new qx.ui.core.Command(cW);
this._cmdRunSample.addListener(dJ,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(cT);
this._cmdPrevSample.addListener(dJ,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(dv);
this._cmdNextSample.addListener(dJ,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(eg);
this._cmdSampleInOwnWindow.addListener(dJ,this.__Ln,this);
this._cmdDisposeSample=new qx.ui.core.Command(dw);
this._cmdDisposeSample.addListener(dJ,this.__Lq,this);
this._cmdNamespacePollution=new qx.ui.core.Command(bS);
this._cmdNamespacePollution.addListener(dJ,this.__Lr,this);
},__Lm:function(){var bc=this.__Lc.getWindow();

if(bc&&bc.qx){alert(bc.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Ln:function(){var fW=this.__Lc.getWindow().location.href;
window.open(fW,dO);
},__Lo:function(fT){var fU=!!fT;
var fV=this.__KY.getSelection()[0].getUserData(cG);

if(fV){fU=fU&&!qx.lang.Array.contains(fV,ck);
}this.__Lf=fT;
},__Lp:function(){if(this.__Lf){var eD=this.__Lf;
var eC=cs+bG+encodeURIComponent(eD)+cm;
var eB=this.playgroundUrl+bC+encodeURIComponent(eC);
window.open(eB,dO);
}else{alert(this.tr("Could not open the Playground."));
}},__Lq:function(e){var ej=this.__Lc.getWindow();

if(ej&&ej.qx){ej.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Lr:function(e){var bh=this.__Lc.getWindow();

if(bh&&bh.qx){alert(bh.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__Ls:function(){var l=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
l.add(this._navPart);
this._runbutton=new qx.ui.toolbar.Button(this.tr(ed),bu);
this._runbutton.addListener(dJ,this.runSample,this);
this._runbutton.setToolTipText(dU);
this._navPart.add(this._runbutton);
this._stopbutton=new qx.ui.toolbar.Button(this.tr(cl),ce);
this._stopbutton.addListener(dJ,this.stopSample,this);
this._stopbutton.setToolTipText(bV);
this._navPart.add(this._stopbutton);
this._stopbutton.setVisibility(dC);
this._runbutton.setMinWidth(60);
this._stopbutton.setMinWidth(60);
var E=new qx.ui.toolbar.Button(this.tr(ee),dy);
E.addListener(dJ,this.playPrev,this);
E.setToolTipText(ec);
this._navPart.add(E);
var H=new qx.ui.toolbar.Button(this.tr(cY),dW);
H.addListener(dJ,this.playNext,this);
H.setToolTipText(cR);
this._navPart.add(H);
var A=new qx.ui.toolbar.Button(this.tr(cy),cg);
A.addListener(dJ,this.__Ln,this);
A.setToolTipText(cV);
this.__Li=A;
this._navPart.add(A);
{var k=new qx.ui.toolbar.Button(this.tr(bQ),dq);
k.addListener(dJ,this.__Lp,this);
k.setToolTipText(bY);
k.setEnabled(false);
if(qx.core.Variant.isSet(da,bR)){k.exclude();
}this.__Le=k;
this._navPart.add(k);
};
var n=new qx.ui.toolbar.Part;
this.__Lk=n;
l.add(n);
{var D=new qx.ui.menu.Menu;
this.__Lt=D;
var y=new qx.ui.menu.RadioButton(cU);
var v=new qx.ui.menu.RadioButton(ct);
y.setUserData(dE,ci);
y.setValue(true);
v.setUserData(dE,bH);
var F=new qx.ui.form.RadioGroup(y,v);
F.addListener(cH,this.__LF,this);
D.add(y);
D.add(v);
var g=new qx.ui.toolbar.MenuButton(this.tr(dX),dY,D);
g.setToolTipText(bI);
n.add(g);
};
var p=new qx.ui.menu.Menu;
{var q=new qx.ui.menu.Button(this.tr(dr));
q.setCommand(this._cmdObjectSummary);
p.add(q);
var G=new qx.ui.menu.Button(this.tr(cu));
G.setCommand(this._cmdNamespacePollution);
p.add(G);
};
var B=new qx.ui.menu.Button(this.tr(cr));
B.setCommand(this._cmdDisposeSample);
p.add(B);
var C=new qx.ui.toolbar.MenuButton(this.tr(bX),co,p);
C.setToolTipText(bT);
n.add(C);
var h=new qx.ui.toolbar.Part;
this.__Lj=h;
l.addSpacer();
l.add(h);
{var I=new qx.ui.toolbar.RadioButton(by,bD);
I.setToolTipText(cz);
var z=new qx.ui.toolbar.RadioButton(bE,bB);
z.setToolTipText(db);
I.setUserData(dE,cE);
z.setUserData(dE,dh);
h.add(I);
h.add(z);
};
var x=new qx.ui.toolbar.RadioButton(bU,cb);
x.setToolTipText(cd);
x.setUserData(dE,dm);
h.add(x);
var o=this.viewGroup=new qx.ui.form.RadioGroup;
o.setAllowEmptySelection(true);
o.add(x);
{o.add(I,z);
};
return l;
},__Lu:function(){var bb=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
bb.addListener(bz,this.__Lz,this);
this.__Lc=bb;
return bb;
},__Lv:function(){var gb=new qx.ui.layout.VBox(0,cj,dT);
gb.setAlignX(cA);
var gd=new qx.ui.container.Composite(gb);
var fY=new qx.ui.decoration.Background().set({backgroundColor:cO});
gd.setDecorator(fY);
var gc=new qx.ui.form.Button(this.tr(br),dn);
gc.setAllowGrowX(false);
gc.setMargin(5);
gc.addListener(dJ,function(){this.logappender.clear();
},this);
gd.add(gc,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow(dG,dG);
this.f2.setFont(cC);
this.f2.setBackgroundColor(cF);
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var ga=document.createElement(cB);
this.logelem=document.createElement(cB);
this.logelem.style.padding=ds;
this.logappender.setElement(this.logelem);
ga.appendChild(this.logelem);
this.f2.getContentElement().useElement(ga);
gd.add(this.f2,{flex:1});
return gd;
},__Lw:function(){var bj=new qx.ui.embed.Html(eh);
bj.setOverflow(dG,dG);
bj.setFont(cC);
bj.setBackgroundColor(cF);
this.widgets[cL]=bj;
bj.getContentElement().setAttribute(dQ,di);
return bj;
},__Lx:function(){var K=new qx.ui.embed.Html(bw);
K.setOverflow(dG,dG);
K.setFont(cC);
K.setBackgroundColor(cF);
this.widgets[dt]=K;
K.getContentElement().setAttribute(dQ,di);
return K;
},__Ly:function(){var eK=new qx.ui.tree.Tree();
var eJ=new qx.ui.tree.TreeFolder(dg);
eK.setAppearance(cS);
eK.setRoot(eJ);
eK.setSelection([eJ]);
this.tree=this.widgets[cx]=eK;
eK.addListener(cH,this.treeGetSelection,this);
eK.addListener(bt,function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return eK;
},treeGetSelection:function(e){var be=this.tree.getSelection()[0];
var bf=be.getUserData(cI);
this.tests.selected=this.tests.handler.getFullName(bf);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var fD=this._sampleToTreeNodeMap;
var fJ=null;
var fM=null;
var fL=/\?autorun=true/.test(location.href);
var fI=this._history.getState();
var fG=fI.match(/([^~]+)~/);

if(fG){fJ=fG[1];
}else{var fE=fI.match(/([^~][\w]*)/);

if(fE){fJ=fE[1];

if(fL){this.setPlayDemos(dA);
}}else{fJ=cf;

if(fL){this.setPlayDemos(cD);
}}}function fK(eE,eF){var eI=eF.getChildren();
var t;

for(var i=0;i<eI.length;i++){var eH=eI[i];

if(eH.hasChildren()){t=new qx.ui.tree.TreeFolder(fF.polish(eH.label));
t.setUserData(bq,false);
t.setUserData(dR,eH);
fK(t,t.getUserData(dR));

if(eH.label==fJ){fM=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(fF.polish(eH.label));
t.setUserData(cG,eH.tags);
{};
var eG=eH.pwd().slice(1).join(dI)+dI+eH.label;
fD[eG]=t;
}eE.add(t);
t.setUserData(cI,eH);
eH.widgetLinkFull=t;
}}var fH=this.tests.handler.ttree;
var fF=this;
this.tree.setUserData(cI,fH);
this.tree.getRoot().setOpen(true);
fK(this.tree.getRoot(),fH);
{};

if(fM!=null){this.tree.setSelection([fM]);
}},runSample:function(e){if(e&&e.getType()===dJ){if(this.tests.selected===dH){this.setPlayDemos(cD);
}else if(this.tests.selected.indexOf(cE)>0){this.setPlayDemos(dF);
}else{this.setPlayDemos(dA);
}}this._runbutton.setVisibility(dC);
this._stopbutton.setVisibility(dB);

if(this.tests.selected!=dH){var ge=this.tests.selected.replace(cK,dI);
this.setCurrentSample(ge);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(dF);
this._stopbutton.setVisibility(dC);
this._runbutton.setVisibility(dB);
},setCurrentSample:function(fN){if(!fN){return;
}
if(!this._sampleToTreeNodeMap){return;
}var fO;
var fP=this._sampleToTreeNodeMap[fN];

if(fP){fP.getTree().setSelection([fP]);
fO=bK+fN;
{fO+=du+this.__KU;
};
}else{fO=this.defaultUrl;
}
if(this.__Lc.getSource()==fO){this.__Lc.reload();
}else{this.__Ld=false;
this.__Lc.setSource(fO);
}if(fO==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=fN;
this._currentSampleUrl=fO;
},__Lz:function(){var en=this.__Lc.getWindow();
var eo=en.location.pathname+dH;
var ev=eo.indexOf(dj);

if(ev!=-1){eo=eo.substring(0,ev+1);
}var eu=this.__Lc.getSource();

if(eu!=null&&eu!=this.defaultUrl){var em=en.location.href;
var es=em.indexOf(bP)+6;
var ep=em.indexOf(dj);
ep=ep==-1?em.length:ep;
var eq=em.substring(es,ep).split(dI);
var et=String.fromCharCode(187);

if(eq.length==2){var ek=eq[0];
ek=ek.charAt(0).toUpperCase()+ek.substring(1);
var er=eq[1].replace(dM,dH).replace(dL,dD);
er=er.charAt(0).toUpperCase()+er.substring(1);
var el=dS+et+dP+et+dD+ek+dD+et+dD+er;
}else{var el=dS+et+dP+et+cP;
}document.title=el;
}if(this.getPlayDemos()!=dF){if(!er){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility(dC);
this._runbutton.setVisibility(dB);
}},__LA:function(e){var eM=this.__Lc.getWindow();

if(eM&&eM.qx&&eM.qx.log&&eM.qx.log.appender){if(!this.__Ld){this.__Ld=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{eM.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__LB(this._currentSampleUrl);
}}}else{this.__Ld=false;
}},filter:function(fo){var fw=new RegExp(df+fo+bM,bA);
var fu=this.__KY.getRoot().getItems(true,true);
var fv=0;
var fp=0;

for(var i=0;i<fu.length;i++){var fx=fu[i];
var parent=fx.getParent();
var ft=fx.getUserData(cG);
var fq=false;
var fy=false;
{fy=true;
};

if(ft!=null){for(var j=0;j<ft.length;j++){fq=!!ft[j].match(fw);
{if(fq){break;
}};
}}
if(fx.getChildren().length==0){fp++;
}
if((fq||(fx.getLabel().search(fw)!=-1)||(parent.getLabel().search(fw)!=-1))&&fy){if(fx.getChildren().length==0){fv++;
}fx.show();
fx.getParent().setOpen(true);
fx.getParent().show();
}else{fx.exclude();
}}if(fo==dH){var fs=this.__KY.getRoot().getItems(false,true);
var fr=this.__KY.getSelection();
for(var i=0;i<fs.length;i++){if(fs[i]==fr[0]||fs[i]==fr[0].getParent()){continue;
}fs[i].setOpen(false);
}}this.__KX.setValue(fv+dI+fp);
},__LB:function(bo){if(typeof (bo)!="string"){return;
}var bp=new qx.io.remote.Request(bo);
bp.setTimeout(180000);
bp.setProhibitCaching(false);
bp.addListener("completed",function(M){var content=M.getContent();
if(content){{var P=content.indexOf("<script",content.indexOf("<script")+7);
var V=content.indexOf("src",P);
var O=content.indexOf("\"",V+5);
var Q=content.substring(V+5,O);
var T=Q.substring(4,Q.length-3)+".src.js";
var u="script/demobrowser.demo";
var S=bo.split('/');
var R=S[1];
var U=S[2];
U=U.substr(0,U.indexOf('.html'));
u+="."+R+"."+U+".src.js";
T=u;
var N=new qx.io.remote.Request(T);
N.setTimeout(180000);
N.setProhibitCaching(false);
N.addListener("completed",function(fz){var fA=fz.getContent();
this.__Lo(fA);

if(fA){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__LC(fA,"javascript"));
}},this);
N.addListener("failed",function(ew){this.error("Couldn't load file: "+bo);
},this);
N.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__LC(content));
};
}},this);
bp.addListener("failed",function(bi){this.error("Couldn't load file: "+bo);
},this);
bp.send();
},dataLoader:function(X){var Y=new qx.io.remote.Request(X);
Y.setTimeout(180000);
Y.setProhibitCaching(false);
Y.addListener(ef,function(d){var content=d.getContent();
var f=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(f);
this.leftReloadTree();
var ba=this._history.getState();

if(ba){this.setCurrentSample(ba.replace(dK,dI));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
Y.addListener(ei,function(bg){this.error("Couldn't load file: "+X);
},this);
Y.send();
},playPrev:function(e){this.setPlayDemos(dF);
var eA=this.tree.getSelection()[0];

if(eA){if(eA.getUserData(cJ).getPrevSibling()){var ez=eA.getUserData(cJ).getPrevSibling().widgetLinkFull;

if(ez){this.tree.setSelection([ez]);
this.runSample();
}}}},playNext:function(e){var eY=this.tree.getSelection()[0];

if(eY){try{var eV=eY.getUserData(cJ).getChildren()[0].widgetLinkFull;
}catch(bd){try{var eV=eY.getUserData(cJ).getNextSibling().widgetLinkFull;
}catch(ey){if(this.getPlayDemos()!==dA){try{var eX=eY.getTree();
var eW=eX.getNextSiblingOf(eY);
eW.setOpen(true);
var eV=eW.getChildren()[0];
}catch(gf){this.debug(gf);
}}}}
if(eV){this.tree.setSelection([eV]);
this.runSample();
}else{this._stopbutton.setVisibility(dC);
this._runbutton.setVisibility(dB);
}}},__LC:function(eN,eO){var eP=new qx.util.StringBuilder("<pre class='script'>");
var eR=[];
var eS=new qx.util.StringBuilder();
var eT=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var eQ=/^\s*<\/script>\s*$/i;
eN=eN.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var eR=eN.split('\n');
if(eO=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(eN)+"</div></pre>";
}
for(var i=0;i<eR.length;i++){if(eT.exec(eR[i])){eP.add(this.__LD(qx.bom.String.escape(eS.get()+eR[i])));
eS.clear();
}else if(eQ.exec(eR[i])){var eU=qx.dev.Tokenizer.javaScriptToHtml(eS.get());
eP.add('<div class="script">',eU,'</div>');
eS.clear();
eS.add(eR[i],'\n');
}else{eS.add(eR[i],'\n');
}}eP.add(this.__LD(qx.bom.String.escape(eS.get())),"</pre>");
return eP.get();
},disableMenuButtons:function(){var eL=this.__La;

for(var i=0;i<eL.length;i++){eL[i].setEnabled(false);
}},enableMenuButtons:function(){var fX=this.__La;

for(var i=0;i<fX.length;i++){fX[i].setEnabled(true);
}},__LD:function(fQ){var fS=fQ;
function fR(a){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var b;
var c=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){b=arguments[i];

if(b=="/"){c=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(b))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((c?"/":""));
}s.add('&gt;');
return s.get();
}fS=fS.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,fR);
return fS;
},polish:function(L){return L.replace(dM,dH).replace(dL,dD);
},__LE:function(){var w=this.__Lc.getWindow();
var W;

if(w.qx&&w.qx.log&&w.qx.log.Logger){W=w.qx.log.Logger;
W.register(this.logappender);
W.clear();
W.unregister(this.logappender);
}},__LF:function(e){this.__KU=e.getData()[0].getUserData("value");
this.runSample();
},__LG:function(){var bm=new qx.ui.layout.HBox();
var bk=new qx.ui.container.Composite(bm);
bk.setAppearance("app-header");
var bn=new qx.ui.basic.Label("Demo Browser");
var bl=new qx.ui.basic.Label("qooxdoo "+qx.core.Setting.get("qx.version"));
bk.add(bn);
bk.add(new qx.ui.core.Spacer,{flex:1});
bk.add(bl);
return bk;
},__LH:undefined,__LI:undefined},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(dz,ca,dV,de,cn,bW,bF,eb,bJ,cN,dc,cQ,cM,bN,ch,ea);
}});
})();
(function(){var Q="_applyLayoutChange",P="top",O="left",N="height",M="middle",L="Decorator",K="center",J="_applyReversed",I="qx.debug",H="bottom",C="' is not supported by the VBox layout!",G="qx.ui.layout.VBox",F="flex",B="Integer",A="The property '",E="right",D="Boolean";
qx.Class.define(G,{extend:qx.ui.layout.Abstract,construct:function(bn,bo,bp){qx.ui.layout.Abstract.call(this);

if(bn){this.setSpacing(bn);
}
if(bo){this.setAlignY(bo);
}
if(bp){this.setSeparator(bp);
}},properties:{alignY:{check:[P,M,H],init:P,apply:Q},alignX:{check:[O,K,E],init:O,apply:Q},spacing:{check:B,init:0,apply:Q},separator:{check:L,nullable:true,apply:Q},reversed:{check:D,init:false,apply:J}},members:{__iy:null,__iz:null,__iA:null,__iB:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__iC:function(){var W=this._getLayoutChildren();
var length=W.length;
var S=false;
var R=this.__iy&&this.__iy.length!=length&&this.__iz&&this.__iy;
var U;
var T=R?this.__iy:new Array(length);
var V=R?this.__iz:new Array(length);
if(this.getReversed()){W=W.concat().reverse();
}for(var i=0;i<length;i++){U=W[i].getLayoutProperties();

if(U.height!=null){T[i]=parseFloat(U.height)/100;
}
if(U.flex!=null){V[i]=U.flex;
S=true;
}else{V[i]=0;
}}if(!R){this.__iy=T;
this.__iz=V;
}this.__iA=S;
this.__iB=W;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(I,{"on":function(bq,name,br){this.assert(name===F||name===N,A+name+C);

if(name==N){this.assertMatch(br,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(br);
this.assert(br>=0);
}},"off":null}),renderLayout:function(a,b){if(this._invalidChildrenCache){this.__iC();
}var j=this.__iB;
var length=j.length;
var u=qx.ui.layout.Util;
var t=this.getSpacing();
var x=this.getSeparator();

if(x){var f=u.computeVerticalSeparatorGaps(j,t,x);
}else{var f=u.computeVerticalGaps(j,t,true);
}var i,d,e,o;
var p=[];
var v=f;

for(i=0;i<length;i+=1){o=this.__iy[i];
e=o!=null?Math.floor((b-f)*o):j[i].getSizeHint().height;
p.push(e);
v+=e;
}if(this.__iA&&v!=b){var m={};
var s,w;

for(i=0;i<length;i+=1){s=this.__iz[i];

if(s>0){k=j[i].getSizeHint();
m[i]={min:k.minHeight,value:p[i],max:k.maxHeight,flex:s};
}}var g=u.computeFlexOffsets(m,b,v);

for(i in g){w=g[i].offset;
p[i]+=w;
v+=w;
}}var top=j[0].getMarginTop();
if(v<b&&this.getAlignY()!=P){top=b-v;

if(this.getAlignY()===M){top=Math.round(top/2);
}}var k,z,q,e,n,r,h;
this._clearSeparators();
if(x){var y=qx.theme.manager.Decoration.getInstance().resolve(x).getInsets();
var c=y.top+y.bottom;
}for(i=0;i<length;i+=1){d=j[i];
e=p[i];
k=d.getSizeHint();
r=d.getMarginLeft();
h=d.getMarginRight();
q=Math.max(k.minWidth,Math.min(a-r-h,k.maxWidth));
z=u.computeHorizontalAlignOffset(d.getAlignX()||this.getAlignX(),q,a,r,h);
if(i>0){if(x){top+=n+t;
this._renderSeparator(x,{top:top,left:0,height:c,width:a});
top+=c+t+d.getMarginTop();
}else{top+=u.collapseMargins(t,n,d.getMarginTop());
}}d.renderLayout(z,top,q,e);
top+=e;
n=d.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__iC();
}var be=qx.ui.layout.Util;
var bm=this.__iB;
var ba=0,bd=0,bc=0;
var X=0,bf=0;
var bj,Y,bl;
for(var i=0,l=bm.length;i<l;i+=1){bj=bm[i];
Y=bj.getSizeHint();
bd+=Y.height;
var bi=this.__iz[i];
var bb=this.__iy[i];

if(bi){ba+=Y.minHeight;
}else if(bb){bc=Math.max(bc,Math.round(Y.minHeight/bb));
}else{ba+=Y.height;
}bl=bj.getMarginLeft()+bj.getMarginRight();
if((Y.width+bl)>bf){bf=Y.width+bl;
}if((Y.minWidth+bl)>X){X=Y.minWidth+bl;
}}ba+=bc;
var bh=this.getSpacing();
var bk=this.getSeparator();

if(bk){var bg=be.computeVerticalSeparatorGaps(bm,bh,bk);
}else{var bg=be.computeVerticalGaps(bm,bh,true);
}return {minHeight:ba+bg,height:bd+bg,minWidth:X,width:bf};
}},destruct:function(){this.__iy=this.__iz=this.__iB=null;
}});
})();
(function(){var o="splitter",n="slider",m="mousedown",l="mouseout",k="mousemove",j="mouseup",i="losecapture",h="active",g="horizontal",f="vertical",G="knob",F="Integer",E="height",D="row-resize",C="move",B="maxHeight",A="width",z="_applyOrientation",w="mouseover",v="splitpane",t="qx.ui.splitpane.Pane",u="_applyOffset",r="minHeight",s="minWidth",p="col-resize",q="maxWidth";
qx.Class.define(t,{extend:qx.ui.core.Widget,construct:function(bk){qx.ui.core.Widget.call(this);
this.__qJ=[];
if(bk){this.setOrientation(bk);
}else{this.initOrientation();
}this.addListener(m,this._onMouseDown);
this.addListener(j,this._onMouseUp);
this.addListener(k,this._onMouseMove);
this.addListener(l,this._onMouseOut);
this.addListener(i,this._onMouseUp);
},properties:{appearance:{refine:true,init:v},offset:{check:F,init:6,apply:u},orientation:{init:g,check:[g,f],apply:z}},members:{__qK:null,__qL:false,__qM:null,__qN:null,__qO:null,__qP:null,__qQ:null,__qJ:null,_createChildControlImpl:function(c){var d;

switch(c){case n:d=new qx.ui.splitpane.Slider(this);
d.exclude();
this._add(d,{type:c});
break;
case o:d=new qx.ui.splitpane.Splitter(this);
this._add(d,{type:c});
d.addListener(C,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){d.addListener(w,this._onSplitterMouseOver,d);
}break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},_applyOrientation:function(bl,bm){var bn=this.getChildControl(n);
var bq=this.getChildControl(o);
this.__qO=bl===g;
var bp=this._getLayout();

if(bp){bp.dispose();
}var bo=bl===f?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(bo);
bq.removeState(bm);
bq.addState(bl);
bq.getChildControl(G).removeState(bm);
bq.getChildControl(G).addState(bl);
bn.removeState(bm);
bn.addState(bl);
},_applyOffset:function(bz,bA){var bB=this.getChildControl(o);

if(bA===0){bB.removeListener(m,this._onMouseDown,this);
bB.removeListener(k,this._onMouseMove,this);
bB.removeListener(l,this._onMouseOut,this);
bB.removeListener(j,this._onMouseUp,this);
bB.removeListener(i,this._onMouseUp,this);
this.addListener(m,this._onMouseDown);
this.addListener(j,this._onMouseUp);
this.addListener(k,this._onMouseMove);
this.addListener(l,this._onMouseOut);
this.addListener(i,this._onMouseUp);
}
if(bz===0){this.removeListener(m,this._onMouseDown);
this.removeListener(j,this._onMouseUp);
this.removeListener(k,this._onMouseMove);
this.removeListener(l,this._onMouseOut);
this.removeListener(i,this._onMouseUp);
bB.addListener(m,this._onMouseDown,this);
bB.addListener(k,this._onMouseMove,this);
bB.addListener(l,this._onMouseOut,this);
bB.addListener(j,this._onMouseUp,this);
bB.addListener(i,this._onMouseUp,this);
}},add:function(bi,bj){if(bj==null){this._add(bi);
}else{this._add(bi,{flex:bj});
}this.__qJ.push(bi);
},remove:function(by){this._remove(by);
qx.lang.Array.remove(this.__qJ,by);
},getChildren:function(){return this.__qJ;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var R=this.getChildControl(o);
var T=R.getContainerLocation();
var S=this.getContentLocation();
this.__qK=this.__qO?e.getDocumentLeft()-T.left+S.left:e.getDocumentTop()-T.top+S.top;
var V=this.getChildControl(n);
var U=R.getBounds();
V.setUserBounds(U.left,U.top,U.width,U.height);
V.setZIndex(R.getZIndex()+1);
V.show();
this.__qL=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__qL){this.__qS();
var a=this.getChildControl(n);
var b=this.__qP;

if(this.__qO){a.setDomLeft(b);
}else{a.setDomTop(b);
}e.stop();
}else{this.__qR();
}},_onMouseOut:function(e){this._setLastMousePosition(-1,-1);
this.__qR();
},_onMouseUp:function(e){if(!this.__qL){return;
}this._finalizeSizes();
var bh=this.getChildControl(n);
bh.exclude();
this.__qL=false;
this.releaseCapture();
this.__qR();
e.stop();
},_onSplitterMove:function(){this.__qR();
},_onSplitterMouseOver:function(){this.addState(h);
},_finalizeSizes:function(){var bu=this.__qP;
var br=this.__qQ;

if(bu==null){return;
}var bw=this._getChildren();
var bv=bw[2];
var bs=bw[3];
var bt=bv.getLayoutProperties().flex;
var bx=bs.getLayoutProperties().flex;
if((bt!=0)&&(bx!=0)){bv.setLayoutProperties({flex:bu});
bs.setLayoutProperties({flex:br});
}else{if(this.__qO){bv.setWidth(bu);
bs.setWidth(br);
}else{bv.setHeight(bu);
bs.setHeight(br);
}}},_isNear:function(){var K=this.getChildControl(o);
var M=K.getBounds();
var O=K.getContainerLocation();
var L=this.getOffset();
if(!O){return;
}var P=this.__qM;
var Q=M.width;
var N=O.left;

if(Q<L){N-=Math.floor((L-Q)/2);
Q=L;
}
if(P<N||P>(N+Q)){return false;
}var P=this.__qN;
var Q=M.height;
var N=O.top;

if(Q<L){N-=Math.floor((L-Q)/2);
Q=L;
}
if(P<N||P>(N+Q)){return false;
}return true;
},__qR:function(){var I=this.getChildControl(o);
var J=this.getApplicationRoot();
if(this.__qL||this._isNear()){var H=this.__qO?p:D;
this.setCursor(H);
J.setGlobalCursor(H);
I.addState(h);
}else if(I.hasState(h)){this.resetCursor();
J.resetGlobalCursor();
I.removeState(h);
}},__qS:function(){if(this.__qO){var Y=s,bg=A,ba=q,be=this.__qM;
}else{var Y=r,bg=E,ba=B,be=this.__qN;
}var bf=this._getChildren();
var W=bf[2].getSizeHint();
var bc=bf[3].getSizeHint();
var bd=bf[2].getBounds()[bg]+bf[3].getBounds()[bg];
var bb=be-this.__qK;
var X=bd-bb;
if(bb<W[Y]){X-=W[Y]-bb;
bb=W[Y];
}else if(X<bc[Y]){bb-=bc[Y]-X;
X=bc[Y];
}if(bb>W[ba]){X+=bb-W[ba];
bb=W[ba];
}else if(X>bc[ba]){bb+=X-bc[ba];
X=bc[ba];
}this.__qP=bb;
this.__qQ=X;
},_isActiveDragSession:function(){return this.__qL;
},_setLastMousePosition:function(x,y){this.__qM=x;
this.__qN=y;
}},destruct:function(){this.__qJ=null;
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
(function(){var W="_applyLayoutChange",V="left",U="width",T="center",S="top",R="Decorator",Q="middle",P="_applyReversed",O="qx.debug",N="bottom",I="' is not supported by the HBox layout!",M="Boolean",L="flex",H="right",G="Integer",K="The property '",J="qx.ui.layout.HBox";
qx.Class.define(J,{extend:qx.ui.layout.Abstract,construct:function(ba,bb,bc){qx.ui.layout.Abstract.call(this);

if(ba){this.setSpacing(ba);
}
if(bb){this.setAlignX(bb);
}
if(bc){this.setSeparator(bc);
}},properties:{alignX:{check:[V,T,H],init:V,apply:W},alignY:{check:[S,Q,N],init:S,apply:W},spacing:{check:G,init:0,apply:W},separator:{check:R,nullable:true,apply:W},reversed:{check:M,init:false,apply:P}},members:{__ki:null,__kj:null,__kk:null,__kl:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__km:function(){var F=this._getLayoutChildren();
var length=F.length;
var C=false;
var A=this.__ki&&this.__ki.length!=length&&this.__kj&&this.__ki;
var D;
var B=A?this.__ki:new Array(length);
var E=A?this.__kj:new Array(length);
if(this.getReversed()){F=F.concat().reverse();
}for(var i=0;i<length;i++){D=F[i].getLayoutProperties();

if(D.width!=null){B[i]=parseFloat(D.width)/100;
}
if(D.flex!=null){E[i]=D.flex;
C=true;
}else{E[i]=0;
}}if(!A){this.__ki=B;
this.__kj=E;
}this.__kk=C;
this.__kl=F;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(O,{"on":function(X,name,Y){this.assert(name===L||name===U,K+name+I);

if(name==U){this.assertMatch(Y,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(Y);
this.assert(Y>=0);
}},"off":null}),renderLayout:function(a,b){if(this._invalidChildrenCache){this.__km();
}var h=this.__kl;
var length=h.length;
var s=qx.ui.layout.Util;
var r=this.getSpacing();
var v=this.getSeparator();

if(v){var e=s.computeHorizontalSeparatorGaps(h,r,v);
}else{var e=s.computeHorizontalGaps(h,r,true);
}var i,c,p,o;
var u=[];
var j=e;

for(i=0;i<length;i+=1){o=this.__ki[i];
p=o!=null?Math.floor((a-e)*o):h[i].getSizeHint().width;
u.push(p);
j+=p;
}if(this.__kk&&j!=a){var m={};
var q,t;

for(i=0;i<length;i+=1){q=this.__kj[i];

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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__km();
}var bj=qx.ui.layout.Util;
var br=this.__kl;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__kj[i];
var bf=this.__ki[i];

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
}},destruct:function(){this.__ki=this.__kj=this.__kl=null;
}});
})();
(function(){var C="slider",B="type",A="flex",z="splitter",y="qx.ui.splitpane.VLayout",x="qx.debug",w="' is not supported by the split layout!",v="The property '";
qx.Class.define(y,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(x,{"on":function(N,name,O){this.assert(name===B||name===A,v+name+w);

if(name==A){this.assertNumber(O);
}
if(name==B){this.assertString(O);
}},"off":null}),renderLayout:function(a,b){var s=this._getLayoutChildren();
var length=s.length;
var o,r;
var d,c,m,e;

for(var i=0;i<length;i++){o=s[i];
r=o.getLayoutProperties().type;

if(r===z){c=o;
}else if(r===C){m=o;
}else if(!d){d=o;
}else{e=o;
}}
if(d&&e){var u=d.getLayoutProperties().flex;
var g=e.getLayoutProperties().flex;

if(u==null){u=1;
}
if(g==null){g=1;
}var t=d.getSizeHint();
var k=c.getSizeHint();
var l=e.getSizeHint();
var f=t.height;
var p=k.height;
var q=l.height;

if(u>0&&g>0){var h=u+g;
var j=b-p;
var f=Math.round((j/h)*u);
var q=j-f;
var n=qx.ui.layout.Util.arrangeIdeals(t.minHeight,f,t.maxHeight,l.minHeight,q,l.maxHeight);
f=n.begin;
q=n.end;
}else if(u>0){f=b-p-q;

if(f<t.minHeight){f=t.minHeight;
}
if(f>t.maxHeight){f=t.maxHeight;
}}else if(g>0){q=b-f-p;

if(q<l.minHeight){q=l.minHeight;
}
if(q>l.maxHeight){q=l.maxHeight;
}}d.renderLayout(0,0,a,f);
c.renderLayout(0,f,a,p);
e.renderLayout(0,f+p,a,q);
}else{c.renderLayout(0,0,0,0);
if(d){d.renderLayout(0,0,a,b);
}else if(e){e.renderLayout(0,0,a,b);
}}},_computeSizeHint:function(){var M=this._getLayoutChildren();
var length=M.length;
var F,E,L;
var G=0,I=0,H=0;
var J=0,K=0,D=0;

for(var i=0;i<length;i++){F=M[i];
L=F.getLayoutProperties();
if(L.type===C){continue;
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
(function(){var k="slider",j="type",h="flex",g="splitter",f="qx.ui.splitpane.HLayout",e="' is not supported by the split layout!",d="The property '",c="qx.debug";
qx.Class.define(f,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(a,name,b){this.assert(name===j||name===h,d+name+e);

if(name==h){this.assertNumber(b);
}
if(name==j){this.assertString(b);
}},"off":null}),renderLayout:function(l,m){var C=this._getLayoutChildren();
var length=C.length;
var z,B;
var o,n,w,p;

for(var i=0;i<length;i++){z=C[i];
B=z.getLayoutProperties().type;

if(B===g){n=z;
}else if(B===k){w=z;
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
if(N.type===k){continue;
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
(function(){var C="showingPlaceholder",B="color",A="",z="none",y="qx.client",x="qx.dynlocale",w="Boolean",v="qx.event.type.Data",u="readonly",t="input",bs="focusin",br="visibility",bq="focusout",bp="changeLocale",bo="hidden",bn="on",bm="absolute",bl="readOnly",bk="text",bj="_applyTextAlign",J="px",K="RegExp",H=")",I="syncAppearance",F="changeValue",G="gecko",D="A",E="change",N="textAlign",O="focused",W="center",U="visible",bb="disabled",Y="url(",bf="off",bd="String",Q="resize",bi="qx.ui.form.AbstractField",bh="transparent",bg="spellcheck",P="false",S="right",T="PositiveInteger",V="mshtml",X="abstract",ba="block",bc="webkit",be="_applyReadOnly",L="_applyPlaceholder",M="left",R="qx/static/blank.gif";
qx.Class.define(bi,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:X,construct:function(bO){qx.ui.core.Widget.call(this);

if(bO!=null){this.setValue(bO);
}this.getContentElement().addListener(E,this._onChangeContent,this);
this.addListener(I,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(x,bn)){qx.locale.Manager.getInstance().addListener(bp,this._onChangeLocale,this);
}},events:{"input":v,"changeValue":v},properties:{textAlign:{check:[M,W,S],nullable:true,themeable:true,apply:bj},readOnly:{check:w,apply:be,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:T,init:Infinity},liveUpdate:{check:w,init:false},placeholder:{check:bd,nullable:true,apply:L},filter:{check:K,nullable:true,init:null}},members:{__kN:true,__kO:null,__kP:null,__kQ:null,getFocusElement:function(){var a=this.getContentElement();

if(a){return a;
}},_createInputElement:function(){return new qx.html.Input(bk);
},renderLayout:function(bt,top,bu,bv){var bw=this._updateInsets;
var bA=qx.ui.core.Widget.prototype.renderLayout.call(this,bt,top,bu,bv);
if(!bA){return;
}var by=bA.size||bw;
var bB=J;

if(by||bA.local||bA.margin){var bx=this.getInsets();
var innerWidth=bu-bx.left-bx.right;
var innerHeight=bv-bx.top-bx.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bz=this.getContentElement();

if(bw){this.__kT().setStyles({"left":bx.left+bB,"top":bx.top+bB});
}
if(by){this.__kT().setStyles({"width":innerWidth+bB,"height":innerHeight+bB});
bz.setStyles({"width":innerWidth+bB,"height":innerHeight+bB});
}},_createContentElement:function(){var bN=this._createInputElement();
bN.setStyles({"border":z,"padding":0,"margin":0,"display":ba,"background":bh,"outline":z,"appearance":z,"position":bm,"autoComplete":bf});
bN.setSelectable(this.getSelectable());
bN.setEnabled(this.getEnabled());
bN.addListener(t,this._onHtmlInput,this);
if(qx.core.Variant.isSet(y,G)){bN.setAttribute(bg,P);
}if(qx.core.Variant.isSet(y,bc)){bN.setStyle(Q,z);
}if(qx.core.Variant.isSet(y,V)){bN.setStyles({backgroundImage:Y+qx.util.ResourceManager.getInstance().toUri(R)+H});
}return bN;
},_applyEnabled:function(b,c){qx.ui.core.Widget.prototype._applyEnabled.call(this,b,c);
this.getContentElement().setEnabled(b);

if(b){this._showPlaceholder();
}else{this._removePlaceholder();
}},__kR:{width:16,height:16},_getContentHint:function(){return {width:this.__kR.width*10,height:this.__kR.height||16};
},_applyFont:function(bE,bF){var bG;

if(bE){var bH=qx.theme.manager.Font.getInstance().resolve(bE);
bG=bH.getStyles();
}else{bG=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bG);
this.__kT().setStyles(bG);
if(bE){this.__kR=qx.bom.Label.getTextSize(D,bG);
}else{delete this.__kR;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bL,bM){if(bL){this.getContentElement().setStyle(B,qx.theme.manager.Color.getInstance().resolve(bL));
this.__kT().setStyle(B,qx.theme.manager.Color.getInstance().resolve(bL));
}else{this.getContentElement().removeStyle(B);
this.__kT().removeStyle(B);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__kR;
},_onHtmlInput:function(e){var h=e.getData();
var g=true;
this.__kN=false;
if(this.getFilter()!=null){var i=A;
var d=h.search(this.getFilter());
var f=h;

while(d>=0){i=i+(f.charAt(d));
f=f.substring(d+1,f.length);
d=f.search(this.getFilter());
}
if(i!=h){g=false;
h=i;
this.getContentElement().setValue(h);
}}if(h.length>this.getMaxLength()){var g=false;
this.getContentElement().setValue(h.substr(0,this.getMaxLength()));
}if(g){this.fireDataEvent(t,h,this.__kQ);
this.__kQ=h;
if(this.getLiveUpdate()){this.__kS(h);
}}},__kS:function(m){this.fireNonBubblingEvent(F,qx.event.type.Data,[m,this.__kP]);
this.__kP=m;
},setValue:function(n){if(n===null){if(this.__kN){return n;
}n=A;
this.__kN=true;
}else{this.__kN=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(n)){var p=this.getContentElement();

if(n.length>this.getMaxLength()){n=n.substr(0,this.getMaxLength());
}
if(p.getValue()!=n){var q=p.getValue();
p.setValue(n);
var o=this.__kN?null:n;
this.__kP=q;
this.__kS(o);
}this._showPlaceholder();
return n;
}throw new Error("Invalid value type: "+n);
},getValue:function(){var l=this.getContentElement().getValue();
return this.__kN?null:l;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__kN=e.getData()===null;
this.__kS(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bP,bQ){this.getContentElement().setTextSelection(bP,bQ);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var bD=this.getValue()||A;
var bC=this.getPlaceholder();

if(bC!=null&&bD==A&&!this.hasState(O)&&!this.hasState(bb)){if(this.hasState(C)){this._syncPlaceholder();
}else{this.addState(C);
}}},_removePlaceholder:function(){if(this.hasState(C)){this.__kT().setStyle(br,bo);
this.removeState(C);
}},_syncPlaceholder:function(){if(this.hasState(C)){this.__kT().setStyle(br,U);
}},__kT:function(){if(this.__kO==null){this.__kO=new qx.html.Label();
this.__kO.setStyles({"visibility":bo,"zIndex":6,"position":bm});
this.getContainerElement().add(this.__kO);
}return this.__kO;
},_onChangeLocale:qx.core.Variant.select(x,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(r,s){this.__kT().setValue(r);

if(r!=null){this.addListener(bs,this._removePlaceholder,this);
this.addListener(bq,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bs,this._removePlaceholder,this);
this.removeListener(bq,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(j,k){this.getContentElement().setStyle(N,j);
},_applyReadOnly:function(bI,bJ){var bK=this.getContentElement();
bK.setAttribute(bl,bI);

if(bI){this.addState(u);
this.setFocusable(false);
}else{this.removeState(u);
this.setFocusable(true);
}}},destruct:function(){this.__kO=null;

if(qx.core.Variant.isSet(x,bn)){qx.locale.Manager.getInstance().removeListener(bp,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var y="none",x="wrap",w="value",v="qx.client",u="textarea",t="off",s="on",r="qxSelectable",q="",p="webkit",l="input",o="qx.html.Input",n="select",k="disabled",j="read-only",m="userSelect";
qx.Class.define(o,{extend:qx.html.Element,construct:function(B,C,D){if(B===n||B===u){var E=B;
}else{E=l;
}qx.html.Element.call(this,E,C,D);
this.__kU=B;
},members:{__kU:null,__kV:null,__kW:null,_createDomElement:function(){return qx.bom.Input.create(this.__kU);
},_applyProperty:function(name,e){qx.html.Element.prototype._applyProperty.call(this,name,e);
var f=this.getDomElement();

if(name===w){qx.bom.Input.setValue(f,e);
}else if(name===x){qx.bom.Input.setWrap(f,e);
}},setEnabled:qx.core.Variant.select(v,{"webkit":function(g){this.__kW=g;

if(!g){this.setStyles({"userModify":j,"userSelect":y});
}else{this.setStyles({"userModify":null,"userSelect":this.__kV?null:y});
}},"default":function(z){this.setAttribute(k,z===false);
}}),setSelectable:qx.core.Variant.select(v,{"webkit":function(h){this.__kV=h;
this.setAttribute(r,h?s:t);
if(qx.core.Variant.isSet(v,p)){var i=this.__kW?h?null:y:y;
this.setStyle(m,i);
}},"default":function(b){this.setAttribute(r,b?s:t);
}}),setValue:function(c){var d=this.getDomElement();

if(d){if(d.value!=c){qx.bom.Input.setValue(d,c);
}}else{this._setProperty(w,c);
}return this;
},getValue:function(){var A=this.getDomElement();

if(A){return qx.bom.Input.getValue(A);
}return this._getProperty(w)||q;
},setWrap:function(a){if(this.__kU===u){this._setProperty(x,a);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__kU===u){return this._getProperty(x);
}else{throw new Error("Text wrapping is only support by textareas!");
}}}});
})();
(function(){var A="change",z="input",y="qx.client",x="text",w="password",v="checkbox",u="radio",t="textarea",s="keypress",r="opera",j="propertychange",q="blur",n="keydown",h="keyup",g="select-multiple",m="checked",k="value",p="select",f="qx.event.handler.Input";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if(qx.core.Variant.isSet(y,r)){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__kX:false,__kY:null,__la:null,canHandleEvent:function(B,C){var D=B.tagName.toLowerCase();

if(C===z&&(D===z||D===t)){return true;
}
if(C===A&&(D===z||D===t||D===p)){return true;
}return false;
},registerEvent:qx.core.Variant.select(y,{"mshtml":function(N,O,P){if(!N.__lb){var Q=N.tagName.toLowerCase();
var R=N.type;

if(R===x||R===w||Q===t||R===v||R===u){qx.bom.Event.addNativeListener(N,j,this._onPropertyWrapper);
}
if(R!==v&&R!==u){qx.bom.Event.addNativeListener(N,A,this._onChangeValueWrapper);
}
if(R===x||R===w){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,N);
qx.bom.Event.addNativeListener(N,s,this._onKeyPressWrapped);
}N.__lb=true;
}},"default":function(X,Y,ba){if(Y===z){this.__lc(X);
}else if(Y===A){if(X.type===u||X.type===v){qx.bom.Event.addNativeListener(X,A,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(X,A,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(y,r)){if(X.type===x||X.type===w){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,X);
qx.bom.Event.addNativeListener(X,s,this._onKeyPressWrapped);
}}}}}),__lc:qx.core.Variant.select(y,{"mshtml":null,"webkit":function(be){var bf=be.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&bf==t){qx.bom.Event.addNativeListener(be,s,this._onInputWrapper);
}qx.bom.Event.addNativeListener(be,z,this._onInputWrapper);
},"opera":function(G){qx.bom.Event.addNativeListener(G,h,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(G,n,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(G,q,this._onBlurWrapper);
qx.bom.Event.addNativeListener(G,z,this._onInputWrapper);
},"default":function(S){qx.bom.Event.addNativeListener(S,z,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(y,{"mshtml":function(a,b){if(a.__lb){var c=a.tagName.toLowerCase();
var d=a.type;

if(d===x||d===w||c===t||d===v||d===u){qx.bom.Event.removeNativeListener(a,j,this._onPropertyWrapper);
}
if(d!==v&&d!==u){qx.bom.Event.removeNativeListener(a,A,this._onChangeValueWrapper);
}
if(d===x||d===w){qx.bom.Event.removeNativeListener(a,s,this._onKeyPressWrapped);
}
try{delete a.__lb;
}catch(L){a.__lb=null;
}}},"default":function(bb,bc){if(bc===z){this.__lc(bb);
}else if(bc===A){if(bb.type===u||bb.type===v){qx.bom.Event.removeNativeListener(bb,A,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(bb,A,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(y,r)){if(bb.type===x||bb.type===w){qx.bom.Event.removeNativeListener(bb,s,this._onKeyPressWrapped);
}}}}),__ld:qx.core.Variant.select(y,{"mshtml":null,"webkit":function(E){var F=E.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&F==t){qx.bom.Event.removeNativeListener(E,s,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(E,z,this._onInputWrapper);
},"opera":function(bd){qx.bom.Event.removeNativeListener(bd,h,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(bd,n,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(bd,q,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(bd,z,this._onInputWrapper);
},"default":function(J){qx.bom.Event.removeNativeListener(J,z,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(y,{"mshtml|opera":function(e,I){if(e.keyCode===13){if(I.value!==this.__la){this.__la=I.value;
qx.event.Registration.fireEvent(I,A,qx.event.type.Data,[I.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(y,{"opera":function(e){if(e.keyCode===13){this.__kX=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(y,{"opera":function(e){if(e.keyCode===13){this.__kX=false;
}},"default":null}),_onBlur:qx.core.Variant.select(y,{"opera":function(e){if(this.__kY){window.clearTimeout(this.__kY);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var K=e.target;
if(!this.__kX){if(qx.core.Variant.isSet(y,r)){this.__kY=window.setTimeout(function(){qx.event.Registration.fireEvent(K,z,qx.event.type.Data,[K.value]);
},0);
}else{qx.event.Registration.fireEvent(K,z,qx.event.type.Data,[K.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var W=e.target||e.srcElement;
var V=W.value;

if(W.type===g){var V=[];

for(var i=0,o=W.options,l=o.length;i<l;i++){if(o[i].selected){V.push(o[i].value);
}}}qx.event.Registration.fireEvent(W,A,qx.event.type.Data,[V]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var M=e.target;

if(M.type===u){if(M.checked){qx.event.Registration.fireEvent(M,A,qx.event.type.Data,[M.value]);
}}else{qx.event.Registration.fireEvent(M,A,qx.event.type.Data,[M.checked]);
}}),_onProperty:qx.core.Variant.select(y,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var T=e.target||e.srcElement;
var U=e.propertyName;

if(U===k&&(T.type===x||T.type===w||T.tagName.toLowerCase()===t)){if(!T.__inValueSet){qx.event.Registration.fireEvent(T,z,qx.event.type.Data,[T.value]);
}}else if(U===m){if(T.type===v){qx.event.Registration.fireEvent(T,A,qx.event.type.Data,[T.checked]);
}else if(T.checked){qx.event.Registration.fireEvent(T,A,qx.event.type.Data,[T.value]);
}}}),"default":function(){}})},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var I="",H="select",G="qx.client",F="soft",E="off",D="text",C="Unsupported input type.",B="nowrap",A="radio",z="textarea",V="auto",U="qx.debug",T="input",S="option",R="value",Q="number",P="qx.bom.Input",O="normal",N="mshtml",M="wrap",K="checkbox",L="select-one",J="on";
qx.Class.define(P,{statics:{__le:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(v,w,x){if(qx.core.Variant.isSet(U,J)){qx.core.Assert.assertKeyInMap(v,this.__le,C);
}var w=w?qx.lang.Object.clone(w):{};
var y;

if(v===z||v===H){y=v;
}else{y=T;
w.type=v;
}return qx.bom.Element.create(y,w,x);
},setValue:function(a,b){var g=a.nodeName.toLowerCase();
var d=a.type;
var Array=qx.lang.Array;
var h=qx.lang.Type;

if(typeof b===Q){b+=I;
}
if((d===K||d===A)){if(h.isArray(b)){a.checked=Array.contains(b,a.value);
}else{a.checked=a.value==b;
}}else if(g===H){var c=h.isArray(b);
var j=a.options;
var e,f;

for(var i=0,l=j.length;i<l;i++){e=j[i];
f=e.getAttribute(R);

if(f==null){f=e.text;
}e.selected=c?Array.contains(b,f):b==f;
}
if(c&&b.length==0){a.selectedIndex=-1;
}}else if(d===D&&qx.core.Variant.isSet(G,N)){a.__lf=true;
a.value=b;
a.__lf=null;
}else{a.value=b;
}},getValue:function(k){var r=k.nodeName.toLowerCase();

if(r===S){return (k.attributes.value||{}).specified?k.value:k.text;
}
if(r===H){var m=k.selectedIndex;
if(m<0){return null;
}var s=[];
var u=k.options;
var t=k.type==L;
var q=qx.bom.Input;
var p;
for(var i=t?m:0,o=t?m+1:u.length;i<o;i++){var n=u[i];

if(n.selected){p=q.getValue(n);
if(t){return p;
}s.push(p);
}}return s;
}else{return (k.value||I).replace(/\r/g,I);
}},setWrap:qx.core.Variant.select(G,{"mshtml":function(Y,ba){Y.wrap=ba?F:E;
},"gecko|webkit":function(bb,bc){var be=bc?F:E;
var bd=bc?I:V;
bb.setAttribute(M,be);
bb.style.overflow=bd;
},"default":function(W,X){W.style.whiteSpace=X?O:B;
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
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="changeSelection",f="changeSelected",d="__qz",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__qz:null,getSelection:function(){var k=this.__qA().getSelected();

if(k){return [k];
}else{return [];
}},setSelection:function(a){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(a.length){case 0:this.resetSelection();
break;
case 1:this.__qA().setSelected(a[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+a.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__qA().resetSelected();
},isSelected:function(m){return this.__qA().isSelected(m);
},isSelectionEmpty:function(){return this.__qA().isSelectionEmpty();
},getSelectables:function(){return this.__qA().getSelectables();
},_onChangeSelected:function(e){var j=e.getData();
var i=e.getOldData();
j==null?j=[]:j=[j];
i==null?i=[]:i=[i];
this.fireDataEvent(g,j,i);
},__qA:function(){if(this.__qz==null){var b=this;
this.__qz=new qx.ui.core.SingleSelectionManager({getItems:function(){return b._getItems();
},isItemSelectable:function(l){if(b._isItemSelectable){return b._isItemSelectable(l);
}else{return l.isEnabled()&&l.isVisible();
}}});
this.__qz.addListener(f,this._onChangeSelected,this);
}this.__qz.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__qz;
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var j="_applyDynamic",h="changeSelection",g="Boolean",f="qx.ui.container.Stack";
qx.Class.define(f,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(h,this.__qB,this);
},properties:{dynamic:{check:g,init:false,apply:j}},members:{_applyDynamic:function(w){var y=this._getChildren();
var x=this.getSelection()[0];
var z;

for(var i=0,l=y.length;i<l;i++){z=y[i];

if(z!=x){if(w){y[i].exclude();
}else{y[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(n){return n.isEnabled();
},__qB:function(e){var c=e.getOldData()[0];
var d=e.getData()[0];

if(c){if(this.isDynamic()){c.exclude();
}else{c.hide();
}}
if(d){d.show();
}},add:function(a){this._add(a);
var b=this.getSelection()[0];

if(!b){this.setSelection([a]);
}else if(b!==a){if(this.isDynamic()){a.exclude();
}else{a.hide();
}}},remove:function(k){this._remove(k);

if(this.getSelection()[0]===k){var m=this._getChildren()[0];

if(m){this.setSelection([m]);
}else{this.resetSelection();
}}},indexOf:function(A){return this._indexOf(A);
},getChildren:function(){return this._getChildren();
},previous:function(){var q=this.getSelection()[0];
var o=this._indexOf(q)-1;
var r=this._getChildren();

if(o<0){o=r.length-1;
}var p=r[o];
this.setSelection([p]);
},next:function(){var t=this.getSelection()[0];
var s=this._indexOf(t)+1;
var u=this._getChildren();
var v=u[s]||u[0];
this.setSelection([v]);
}}});
})();
(function(){var q="__qE",p="Boolean",o="qx.ui.core.SingleSelectionManager",n="qx.debug",m="__qD",l="Invalid selectionProvider!",k="__qC",j="changeSelected",h="on",g="qx.event.type.Data";
qx.Class.define(o,{extend:qx.core.Object,construct:function(u){qx.core.Object.call(this);

if(qx.core.Variant.isSet(n,h)){qx.core.Assert.assertInterface(u,qx.ui.core.ISingleSelectionProvider,l);
}this.__qC=u;
},events:{"changeSelected":g},properties:{allowEmptySelection:{check:p,init:true,apply:q}},members:{__qD:null,__qC:null,getSelected:function(){return this.__qD;
},setSelected:function(t){if(!this.__qG(t)){throw new Error("Could not select "+t+", because it is not a child element!");
}this.__qF(t);
},resetSelected:function(){this.__qF(null);
},isSelected:function(v){if(!this.__qG(v)){throw new Error("Could not check if "+v+" is selected,"+" because it is not a child element!");
}return this.__qD===v;
},isSelectionEmpty:function(){return this.__qD==null;
},getSelectables:function(){var w=this.__qC.getItems();
var x=[];

for(var i=0;i<w.length;i++){if(this.__qC.isItemSelectable(w[i])){x.push(w[i]);
}}return x;
},__qE:function(e,f){if(!e){this.__qF(this.__qD);
}},__qF:function(a){var d=this.__qD;
var c=a;

if(c!=null&&d===c){return;
}
if(!this.isAllowEmptySelection()&&c==null){var b=this.getSelectables()[0];

if(b){c=b;
}}this.__qD=c;
this.fireDataEvent(j,c,d);
},__qG:function(r){var s=this.__qC.getItems();

for(var i=0;i<s.length;i++){if(s[i]===r){return true;
}}return false;
}},destruct:function(){if(this.__qC.toHashCode){this._disposeObjects(k);
}else{this.__qC=null;
}this._disposeObjects(m);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var r="",q="The property 'timeoutInterval' has been deprecated. The history manager",p="now uses 'qx.event.Idle' for polling.",o="qx.debug",n="on",m='#',l="String",k="request",j="mshtml",i="Invalid attribute 'value'.",c="changeTitle",h="abstract",f="_applyState",b="qx.client",a="changeState",e="qx.bom.History",d="_applyTitle",g="qx.event.type.Data";
qx.Class.define(e,{extend:qx.core.Object,type:h,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(m)[0]+m;
this.__rJ={};
this._setInitialState();
},events:{"request":g},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(b,j)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:l,event:c,nullable:true,apply:d},state:{check:l,event:a,nullable:true,apply:f}},members:{__rJ:null,_applyState:function(y,z){this._writeState(y);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(E){if(qx.lang.Type.isString(E)){return encodeURIComponent(E);
}return r;
},_decode:function(s){if(qx.lang.Type.isString(s)){return decodeURIComponent(s);
}return r;
},_applyTitle:function(C){if(C!=null){document.title=C||r;
}},addToHistory:function(A,B){if(!qx.lang.Type.isString(A)){A=A+r;
}
if(qx.lang.Type.isString(B)){this.setTitle(B);
this.__rJ[A]=B;
}
if(this.getState()!==A){this._writeState(A);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(t){this.setState(t);
this.fireDataEvent(k,t);

if(this.__rJ[t]!=null){this.setTitle(this.__rJ[t]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(v){var w=this._baseUrl+(v||r);
var x=window.location;

if(w!=x.href){x.href=w;
}},_getHash:function(){var u=/#(.*)$/.exec(window.location.href);
return u&&u[1]?u[1]:r;
},setTimeoutInterval:function(D){if(qx.core.Variant.isSet(o,n)){qx.core.Assert.assertNumber(D,i);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(o,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(o,n)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,q+p);
}}},destruct:function(){this.__rJ=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__rL();
},members:{__rK:null,__rL:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__rK=qx.lang.Function.bind(this.__rN,this);
qx.bom.Event.addNativeListener(window,d,this.__rK);
}else{qx.event.Idle.getInstance().addListener(c,this.__rN,this);
}},__rM:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__rK);
}else{qx.event.Idle.getInstance().removeListener(c,this.__rN,this);
}},__rN:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__rM();
}});
})();
(function(){var r="interval",q="-1000px",p="mshtml",o="",n="qx.bom.IframeHistory",m="qx/static/blank.html",l="state",k='<html><body><div id="state">',j='</div></body></html>',i="hidden",f="qx.client",h="undefined",g="absolute";
if(qx.core.Variant.isSet(f,p)){qx.Class.define(n,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__rR();
},members:{__rO:null,__rP:false,__rQ:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__rQ=this._getHash();
},_setHash:function(u){qx.bom.History.prototype._setHash.call(this,u);
this.__rQ=this._encode(u);
},_readState:function(){if(!this.__rP){return this._decode(this._getHash());
}var w=this.__rO.contentWindow.document;
var x=w.getElementById(l);
return x?this._decode(x.innerText):o;
},_writeState:function(B){var B=this._encode(B);
this._setHash(B);
this.__rQ=B;

try{var C=this.__rO.contentWindow.document;
C.open();
C.write(k+B+j);
C.close();
}catch(c){}},__rR:function(){this.__rV(function(){qx.event.Idle.getInstance().addListener(r,this.__rS,this);
});
},__rS:function(e){var t=null;
var s=this._getHash();

if(!this.__rU(s)){t=this.__rT(s);
}else{t=this._readState();
}
if(qx.lang.Type.isString(t)&&t!=this.getState()){this._onHistoryLoad(t);
}},__rT:function(a){a=this._decode(a);
this._writeState(a);
return a;
},__rU:function(d){return qx.lang.Type.isString(d)&&d==this.__rQ;
},__rV:function(v){this.__rO=this.__rW();
document.body.appendChild(this.__rO);
this.__rX(function(){this._writeState(this.getState());

if(v){v.call(this);
}},this);
},__rW:function(){var b=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(m)});
b.style.visibility=i;
b.style.position=g;
b.style.left=q;
b.style.top=q;
return b;
},__rX:function(y,z,A){if(typeof A===h){A=0;
}
if(!this.__rO.contentWindow||!this.__rO.contentWindow.document){if(A>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__rX(y,z,++A);
},this,10);
return;
}this.__rP=true;
y.call(z||window);
}},destruct:function(){this.__rO=null;
qx.event.Idle.getInstance().addListener(r,this.__rS,this);
}});
}})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(d){qx.event.Registration.fireEvent(d,b);
})},members:{canHandleEvent:function(e,f){return e.tagName.toLowerCase()===a;
},registerEvent:function(h,i,j){},unregisterEvent:function(k,l,m){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var m="qx.client",l="webkit",k="body",j="iframe",i="qx.bom.Iframe";
qx.Class.define(i,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(A,B){var A=A?qx.lang.Object.clone(A):{};
var C=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var D in C){if(A[D]==null){A[D]=C[D];
}}return qx.bom.Element.create(j,A,B);
},getWindow:qx.core.Variant.select(m,{"mshtml|gecko":function(z){try{return z.contentWindow;
}catch(f){return null;
}},"default":function(v){try{var w=this.getDocument(v);
return w?w.defaultView:null;
}catch(n){return null;
}}}),getDocument:qx.core.Variant.select(m,{"mshtml":function(a){try{var b=this.getWindow(a);
return b?b.document:null;
}catch(u){return null;
}},"default":function(g){try{return g.contentDocument;
}catch(y){return null;
}}}),getBody:function(s){try{var t=this.getDocument(s);
return t?t.getElementsByTagName(k)[0]:null;
}catch(x){return null;
}},setSource:function(o,p){try{if(this.getWindow(o)&&qx.dom.Hierarchy.isRendered(o)){try{if(qx.core.Variant.isSet(m,l)&&qx.bom.client.Platform.MAC){var q=this.getContentWindow();

if(q){q.stop();
}}this.getWindow(o).location.replace(p);
}catch(r){o.src=p;
}}else{o.src=p;
}}catch(h){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(d){var e=this.getDocument(d);

try{if(e&&e.location){return e.location.href;
}}catch(c){}return null;
}}});
})();
(function(){var q="String",p="execute",o="qx.ui.menu.Menu",n="_shortcut",m="changeEnabled",l="changeToolTipText",k="Boolean",j="qx.ui.core.Command",i="changeLabel",h="changeMenu",e="changeIcon",g="changeValue",f="_applyShortcut",d="_applyEnabled",c="qx.event.type.Data";
qx.Class.define(j,{extend:qx.core.Object,construct:function(r){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(r);
this._shortcut.addListener(p,this.execute,this);
},events:{"execute":c},properties:{enabled:{init:true,check:k,event:m,apply:d},shortcut:{check:q,apply:f,nullable:true},label:{check:q,nullable:true,event:i},icon:{check:q,nullable:true,event:e},toolTipText:{check:q,nullable:true,event:l},value:{nullable:true,event:g},menu:{check:o,nullable:true,event:h}},members:{_shortcut:null,_applyEnabled:function(s){this._shortcut.setEnabled(s);
},_applyShortcut:function(b){this._shortcut.setShortcut(b);
},execute:function(a){this.fireDataEvent(p,a);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var q="Unidentified",p="Boolean",o="+",n="short",m="keydown",l="",k="Control",j="keypress",h="-",g="PageUp",X="Escape",W="qx.event.type.Data",V="_applyShortcut",U="PrintScreen",T="NumLock",S="5",R="8",Q="execute",P="Meta",O="0",x="2",y="This message will be made private.",v="Shift",w="You can only specify one non modifier key!",t="3",u="/",r="_applyEnabled",s="String",z="changeEnabled",A="*",G="qx.bom.Shortcut",F="6",I="4",H="1",K="Alt",J="Not a valid key name for a shortcut: ",C="PageDown",N="Whitespaces are not allowed within shortcuts",M="Delete",L="7",B="a",D="z",E="9";
qx.Class.define(G,{extend:qx.core.Object,construct:function(f){qx.core.Object.call(this);
this.__wm={};
this.__wn=null;

if(f!=null){this.setShortcut(f);
}this.initEnabled();
},events:{"execute":W},properties:{enabled:{init:true,check:p,event:z,apply:r},shortcut:{check:s,apply:V,nullable:true},autoRepeat:{check:p,init:false}},members:{__wm:l,__wn:l,execute:function(Y){this.fireDataEvent(Q,Y);
},__wo:function(event){if(this.getEnabled()&&this.__wq(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__wp:function(event){if(this.getEnabled()&&this.__wq(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bj,bk){if(bj){qx.event.Registration.addListener(document.documentElement,m,this.__wo,this);
qx.event.Registration.addListener(document.documentElement,j,this.__wp,this);
}else{qx.event.Registration.removeListener(document.documentElement,m,this.__wo,this);
qx.event.Registration.removeListener(document.documentElement,j,this.__wp,this);
}},_applyShortcut:function(ba,bb){if(ba){if(ba.search(/[\s]+/)!=-1){var be=N;
this.error(be);
throw new Error(be);
}this.__wm={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__wn=null;
var bc;
var a=[];

while(ba.length>0&&bc!=-1){bc=ba.search(/[-+]+/);
a.push((ba.length==1||bc==-1)?ba:ba.substring(0,bc));
ba=ba.substring(bc+1);
}var bd=a.length;

for(var i=0;i<bd;i++){var bf=this.__ws(a[i]);

switch(bf){case k:case v:case P:case K:this.__wm[bf]=true;
break;
case q:var be=J+a[i];
this.error(be);
throw be;
default:if(this.__wn){var be=w;
this.error(be);
throw be;
}this.__wn=bf;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,y);
return this.__wq(e);
},__wq:function(e){var bl=this.__wn;

if(!bl){return ;
}if((!this.__wm.Shift&&e.isShiftPressed())||(this.__wm.Shift&&!e.isShiftPressed())||(!this.__wm.Control&&e.isCtrlPressed())||(this.__wm.Control&&!e.isCtrlPressed())||(!this.__wm.Meta&&e.isMetaPressed())||(this.__wm.Meta&&!e.isMetaPressed())||(!this.__wm.Alt&&e.isAltPressed())||(this.__wm.Alt&&!e.isAltPressed())){return false;
}
if(bl==e.getKeyIdentifier()){return true;
}return false;
},__wr:{esc:X,ctrl:k,print:U,del:M,pageup:g,pagedown:C,numlock:T,numpad_0:O,numpad_1:H,numpad_2:x,numpad_3:t,numpad_4:I,numpad_5:S,numpad_6:F,numpad_7:L,numpad_8:R,numpad_9:E,numpad_divide:u,numpad_multiply:A,numpad_minus:h,numpad_plus:o},__ws:function(bg){var bh=qx.event.handler.Keyboard;
var bi=q;

if(bh.isValidKeyIdentifier(bg)){return bg;
}
if(bg.length==1&&bg>=B&&bg<=D){return bg.toUpperCase();
}bg=bg.toLowerCase();
var bi=this.__wr[bg]||qx.lang.String.firstUp(bg);

if(bh.isValidKeyIdentifier(bi)){return bi;
}else{return q;
}},toString:function(){var d=this.__wn;
var c=[];

for(var b in this.__wm){if(this.__wm[b]){c.push(qx.locale.Key.getKeyName(n,b));
}}
if(d){c.push(qx.locale.Key.getKeyName(n,d));
}return c.join(o);
}},destruct:function(){this.setEnabled(false);
this.__wm=this.__wn=null;
}});
})();
(function(){var bA="Control",bz="End",by="Left",bx="Meta",bw="Pause",bv="Down",bu="Ctrl",bt="Home",bs="Apps",br="Win",bg="Right",bf="Backspace",be="Space",bd="Up",bc="Shift",bb="Enter",ba="Scroll",Y="Alt",X="key_full_Meta",W="PrintScreen",bH="NumLock",bI="Escape",bF="key_short_Alt",bG="key_short_Control_Mac",bD="key_short_Insert",bE="Del",bB="Num",bC="key_full_Enter",bJ="key_full_Control",bK="qx.locale.Key",bk="Tabulator",bj="key_full_Space",bm="key_short_Meta",bl="key_short_PageUp",bo="key_short_Pause",bn="key_full_Down",bq="key_short_Apps",bp="key_short_Win",bi="key_full_Right",bh="key_short_Up",a="key_full_PageDown",b="key_full_Alt",c="PgDn",d="key_full_Escape",e="key_full_Insert",f="key_short_Space",g="key_short_Backspace",h="key_short_Home",i="full",j="key_short_Down",bO="PgUp",bN="_Mac",bM="key_short_CapsLock",bL="PageUp",bS="key_full_Up",bR="key_full_Home",bQ="key_full_Backspace",bP="PageDown",bU="CapsLock",bT="Ins",G="key_short_PrintScreen",H="Tab",E="key_full_Apps",F="key_short_Tab",K="key_short_End",L="_",I="Caps",J="key_short_NumLock",C="key_full_Scroll",D="key_short_Left",r="key_short_Scroll",q="on",t="key_full_Control_Mac",s="key_",n="key_full_Pause",m="key_short_Right",p="key_full_PrintScreen",o="key_full_Win",l="short",k="key_short_Shift",Q="key_short_PageDown",R="key_short_Enter",S="key_short_Control",T="qx.debug",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",U="Delete",V="key_full_CapsLock",B="Esc",A="key_short_Delete",z="key_full_PageUp",y="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bK,{statics:{getKeyName:function(bV,bW,bX){if(qx.core.Variant.isSet(T,q)){qx.core.Assert.assertInArray(bV,[l,i]);
}var ca=s+bV+L+bW;
if(qx.bom.client.Platform.MAC&&bW==bA){ca+=bN;
}var bY=qx.locale.Manager.getInstance().translate(ca,[],bX);

if(bY==ca){return qx.locale.Key._keyNames[ca]||bW;
}else{return bY;
}}},defer:function(cb,cc,cd){var cf={};
var ce=qx.locale.Manager;
cf[ce.marktr(g)]=bf;
cf[ce.marktr(F)]=H;
cf[ce.marktr(f)]=be;
cf[ce.marktr(R)]=bb;
cf[ce.marktr(k)]=bc;
cf[ce.marktr(S)]=bu;
cf[ce.marktr(bG)]=bu;
cf[ce.marktr(bF)]=Y;
cf[ce.marktr(bM)]=I;
cf[ce.marktr(bm)]=bx;
cf[ce.marktr(N)]=B;
cf[ce.marktr(D)]=by;
cf[ce.marktr(bh)]=bd;
cf[ce.marktr(m)]=bg;
cf[ce.marktr(j)]=bv;
cf[ce.marktr(bl)]=bO;
cf[ce.marktr(Q)]=c;
cf[ce.marktr(K)]=bz;
cf[ce.marktr(h)]=bt;
cf[ce.marktr(bD)]=bT;
cf[ce.marktr(A)]=bE;
cf[ce.marktr(J)]=bB;
cf[ce.marktr(G)]=P;
cf[ce.marktr(r)]=ba;
cf[ce.marktr(bo)]=bw;
cf[ce.marktr(bp)]=br;
cf[ce.marktr(bq)]=bs;
cf[ce.marktr(bQ)]=bf;
cf[ce.marktr(O)]=bk;
cf[ce.marktr(bj)]=be;
cf[ce.marktr(bC)]=bb;
cf[ce.marktr(y)]=bc;
cf[ce.marktr(bJ)]=bA;
cf[ce.marktr(t)]=bA;
cf[ce.marktr(b)]=Y;
cf[ce.marktr(V)]=bU;
cf[ce.marktr(X)]=bx;
cf[ce.marktr(d)]=bI;
cf[ce.marktr(u)]=by;
cf[ce.marktr(bS)]=bd;
cf[ce.marktr(bi)]=bg;
cf[ce.marktr(bn)]=bv;
cf[ce.marktr(z)]=bL;
cf[ce.marktr(a)]=bP;
cf[ce.marktr(v)]=bz;
cf[ce.marktr(bR)]=bt;
cf[ce.marktr(e)]=M;
cf[ce.marktr(w)]=U;
cf[ce.marktr(x)]=bH;
cf[ce.marktr(p)]=W;
cf[ce.marktr(C)]=ba;
cf[ce.marktr(n)]=bw;
cf[ce.marktr(o)]=br;
cf[ce.marktr(E)]=bs;
cb._keyNames=cf;
}});
})();
(function(){var o="both",n="qx.ui.menu.Menu",m="_applySpacing",k="icon",j="label",h="changeShow",g="Integer",f="qx.ui.toolbar.ToolBar",e="toolbar",d="changeOpenMenu";
qx.Class.define(f,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:e},openMenu:{check:n,event:d,nullable:true},show:{init:o,check:[o,j,k],inheritable:true,event:h},spacing:{nullable:true,check:g,themeable:true,apply:m}},members:{__mY:false,_setAllowMenuOpenHover:function(p){this.__mY=p;
},_isAllowMenuOpenHover:function(){return this.__mY;
},_applySpacing:function(a,b){var c=this._getLayout();
a==null?c.resetSpacing():c.setSpacing(a);
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
(function(){var c="qx.ui.core.Spacer";
qx.Class.define(c,{extend:qx.ui.core.LayoutItem,construct:function(a,b){qx.ui.core.LayoutItem.call(this);
this.setWidth(a!=null?a:0);
this.setHeight(b!=null?b:0);
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jB:null,__jC:false,__jD:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var u=this.getCommand();

if(u){if(this.__jC){this.__jC=false;
}else{this.__jC=true;
u.execute(this);
}}this.fireEvent(n);
},__jE:function(e){if(this.__jC){this.__jC=false;
return;
}this.__jC=true;
this.execute();
},_applyCommand:function(o,p){if(p!=null){p.removeListenerById(this.__jD);
}
if(o!=null){this.__jD=o.addListener(n,this.__jE,this);
}var s=this.__jB;

if(s==null){this.__jB=s={};
}
for(var i=0;i<this._bindableProperties.length;i++){var r=this._bindableProperties[i];
if(p!=null&&s[r]!=null){p.removeBinding(s[r]);
s[r]=null;
}if(o!=null&&qx.Class.hasProperty(this.constructor,r)){var q=o.get(r);

if(q==null){var t=this.get(r);
}s[r]=o.bind(r,this,r);
if(t){this.set(r,t);
}}}}},destruct:function(){this.__jB=null;
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
(function(){var m="pressed",l="hovered",k="changeVisibility",j="qx.ui.menu.Menu",i="submenu",h="Enter",g="contextmenu",f="changeMenu",d="qx.ui.form.MenuButton",c="abandoned",b="_applyMenu";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(s,t,u){qx.ui.form.Button.call(this,s,t);
if(u!=null){this.setMenu(u);
}},properties:{menu:{check:j,nullable:true,apply:b,event:f}},members:{_applyMenu:function(v,w){if(w){w.removeListener(k,this._onMenuChange,this);
w.resetOpener();
}
if(v){v.addListener(k,this._onMenuChange,this);
v.setOpener(this);
v.removeState(i);
v.removeState(g);
}},open:function(o){var p=this.getMenu();

if(p){qx.ui.menu.Manager.getInstance().hideAll();
p.setOpener(this);
p.open();
if(o){var q=p.getSelectables()[0];

if(q){p.setSelectedButton(q);
}}}},_onMenuChange:function(e){var n=this.getMenu();

if(n.isVisible()){this.addState(m);
}else{this.removeState(m);
}},_onMouseDown:function(e){var r=this.getMenu();

if(r){if(!r.isVisible()){this.open();
}else{r.exclude();
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
qx.Class.define(f,{extend:qx.ui.form.MenuButton,construct:function(l,m,n){qx.ui.form.MenuButton.call(this,l,m,n);
this.removeListener(d,this._onKeyDown);
this.removeListener(b,this._onKeyUp);
},properties:{appearance:{refine:true,init:c},show:{refine:true,init:g},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(a){qx.ui.form.MenuButton.prototype.open.call(this,a);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var k=this.getMenu();
var menubar=this.getMenuBar();

if(k.isVisible()){this.addState(i);
if(menubar){menubar.setOpenMenu(k);
}}else{this.removeState(i);
if(menubar&&menubar.getOpenMenu()==k){menubar.resetOpenMenu();
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
(function(){var E="keypress",D="qx.debug",C="interval",B="keydown",A="on",z="mousedown",y="keyup",x="__ms",w="blur",v="Enter",o="__mr",u="Up",r="__mt",n="Escape",m="qx.ui.menu.Manager",q="Left",p="Down",s="Right",l="singleton",t="Space";
qx.Class.define(m,{type:l,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mr=[];
var P=document.body;
var Q=qx.event.Registration;
Q.addListener(window.document.documentElement,z,this._onMouseDown,this,true);
Q.addListener(P,B,this._onKeyUpDown,this,true);
Q.addListener(P,y,this._onKeyUpDown,this,true);
Q.addListener(P,E,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,w,this.hideAll,this);
this.__ms=new qx.event.Timer;
this.__ms.addListener(C,this._onOpenInterval,this);
this.__mt=new qx.event.Timer;
this.__mt.addListener(C,this._onCloseInterval,this);
},members:{__mu:null,__mv:null,__ms:null,__mt:null,__mr:null,_getChild:function(T,U,V,W){var X=T.getChildren();
var length=X.length;
var Y;

for(var i=U;i<length&&i>=0;i+=V){Y=X[i];

if(Y.isEnabled()&&!Y.isAnonymous()){return Y;
}}
if(W){i=i==length?0:length-1;

for(;i!=U;i+=V){Y=X[i];

if(Y.isEnabled()&&!Y.isAnonymous()){return Y;
}}}return null;
},_isInMenu:function(bE){while(bE){if(bE instanceof qx.ui.menu.Menu){return true;
}bE=bE.getLayoutParent();
}return false;
},_getMenuButton:function(bc){while(bc){if(bc instanceof qx.ui.menu.AbstractButton){return bc;
}bc=bc.getLayoutParent();
}return null;
},add:function(R){if(qx.core.Variant.isSet(D,A)){if(!(R instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+R);
}}var S=this.__mr;
S.push(R);
R.setZIndex(1e6+S.length);
},remove:function(bz){if(qx.core.Variant.isSet(D,A)){if(!(bz instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+bz);
}}var bA=this.__mr;

if(bA){qx.lang.Array.remove(bA,bz);
}},hideAll:function(){var ba=this.__mr;

if(ba){for(var i=ba.length-1;i>=0;i--){ba[i].exclude();
}}},getActiveMenu:function(){var bd=this.__mr;
return bd.length>0?bd[bd.length-1]:null;
},scheduleOpen:function(bD){this.cancelClose(bD);
if(bD.isVisible()){if(this.__mu){this.cancelOpen(this.__mu);
}}else if(this.__mu!=bD){this.__mu=bD;
this.__ms.restartWith(bD.getOpenInterval());
}},scheduleClose:function(be){this.cancelOpen(be);
if(!be.isVisible()){if(this.__mv){this.cancelClose(this.__mv);
}}else if(this.__mv!=be){this.__mv=be;
this.__mt.restartWith(be.getCloseInterval());
}},cancelOpen:function(bF){if(this.__mu==bF){this.__ms.stop();
this.__mu=null;
}},cancelClose:function(bb){if(this.__mv==bb){this.__mt.stop();
this.__mv=null;
}},_onOpenInterval:function(e){this.__ms.stop();
this.__mu.open();
this.__mu=null;
},_onCloseInterval:function(e){this.__mt.stop();
this.__mv.exclude();
this.__mv=null;
},_onMouseDown:function(e){var a=e.getTarget();
a=qx.ui.core.Widget.getWidgetByElement(a);
if(a==null){this.hideAll();
return;
}if(a.getMenu&&a.getMenu()&&a.getMenu().isVisible()){return;
}if(this.__mr.length>0&&!this._isInMenu(a)){this.hideAll();
}},__mw:{"Enter":1,"Space":1},__mx:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var bB=this.getActiveMenu();

if(!bB){return;
}var bC=e.getKeyIdentifier();

if(this.__mx[bC]||(this.__mw[bC]&&bB.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var b=this.getActiveMenu();

if(!b){return;
}var c=e.getKeyIdentifier();
var f=this.__mx[c];
var d=this.__mw[c];

if(f){switch(c){case u:this._onKeyPressUp(b);
break;
case p:this._onKeyPressDown(b);
break;
case q:this._onKeyPressLeft(b);
break;
case s:this._onKeyPressRight(b);
break;
case n:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(d){var g=b.getSelectedButton();

if(g){switch(c){case v:this._onKeyPressEnter(b,g,e);
break;
case t:this._onKeyPressSpace(b,g,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bf){var bg=bf.getSelectedButton();
var bh=bf.getChildren();
var bj=bg?bf.indexOf(bg)-1:bh.length-1;
var bi=this._getChild(bf,bj,-1,true);
if(bi){bf.setSelectedButton(bi);
}else{bf.resetSelectedButton();
}},_onKeyPressDown:function(bk){var bl=bk.getSelectedButton();
var bn=bl?bk.indexOf(bl)+1:0;
var bm=this._getChild(bk,bn,1,true);
if(bm){bk.setSelectedButton(bm);
}else{bk.resetSelectedButton();
}},_onKeyPressLeft:function(I){var N=I.getOpener();

if(!N){return;
}if(N instanceof qx.ui.menu.Button){var K=N.getLayoutParent();
K.resetOpenedButton();
K.setSelectedButton(N);
}else if(N instanceof qx.ui.menubar.Button){var M=N.getMenuBar().getMenuButtons();
var J=M.indexOf(N);
if(J===-1){return;
}var O=null;
var length=M.length;

for(var i=1;i<=length;i++){var L=M[(J-i+length)%length];

if(L.isEnabled()){O=L;
break;
}}
if(O&&O!=N){O.open(true);
}}},_onKeyPressRight:function(bo){var bq=bo.getSelectedButton();
if(bq){var bp=bq.getMenu();

if(bp){bo.setOpenedButton(bq);
var bw=this._getChild(bp,0,1);

if(bw){bp.setSelectedButton(bw);
}return;
}}else if(!bo.getOpenedButton()){var bw=this._getChild(bo,0,1);

if(bw){bo.setSelectedButton(bw);

if(bw.getMenu()){bo.setOpenedButton(bw);
}return;
}}var bu=bo.getOpener();
if(bu instanceof qx.ui.menu.Button&&bq){while(bu){bu=bu.getLayoutParent();

if(bu instanceof qx.ui.menu.Menu){bu=bu.getOpener();

if(bu instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!bu){return;
}}if(bu instanceof qx.ui.menubar.Button){var bt=bu.getMenuBar().getMenuButtons();
var br=bt.indexOf(bu);
if(br===-1){return;
}var bv=null;
var length=bt.length;

for(var i=1;i<=length;i++){var bs=bt[(br+i)%length];

if(bs.isEnabled()){bv=bs;
break;
}}
if(bv&&bv!=bu){bv.open(true);
}}},_onKeyPressEnter:function(F,G,e){if(G.hasListener(E)){var H=e.clone();
H.setBubbles(false);
H.setTarget(G);
G.dispatchEvent(H);
}this.hideAll();
},_onKeyPressSpace:function(h,j,e){if(j.hasListener(E)){var k=e.clone();
k.setBubbles(false);
k.setTarget(j);
j.dispatchEvent(k);
}}},destruct:function(){var by=qx.event.Registration;
var bx=document.body;
by.removeListener(window.document.documentElement,z,this._onMouseDown,this,true);
by.removeListener(bx,B,this._onKeyUpDown,this,true);
by.removeListener(bx,y,this._onKeyUpDown,this,true);
by.removeListener(bx,E,this._onKeyPress,this,true);
this._disposeObjects(x,r);
this._disposeArray(o);
}});
})();
(function(){var r="indexOf",q="addAfter",p="add",o="addBefore",n="_",m="addAt",l="hasChildren",k="removeAt",j="removeAll",i="getChildren",g="remove",h="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(h,{members:{__my:function(A,B,C,D){var E=this.getChildrenContainer();

if(E===this){A=n+A;
}return (E[A])(B,C,D);
},getChildren:function(){return this.__my(i);
},hasChildren:function(){return this.__my(l);
},add:function(d,e){return this.__my(p,d,e);
},remove:function(z){return this.__my(g,z);
},removeAll:function(){return this.__my(j);
},indexOf:function(f){return this.__my(r,f);
},addAt:function(s,t,u){this.__my(m,s,t,u);
},addBefore:function(a,b,c){this.__my(o,a,b,c);
},addAfter:function(w,x,y){this.__my(q,w,x,y);
},removeAt:function(v){this.__my(k,v);
}}});
})();
(function(){var p="slidebar",o="Integer",n="resize",m="qx.ui.core.Widget",l="selected",k="visible",j="Boolean",h="mouseout",g="excluded",f="menu",E="_applySelectedButton",D="_applySpacingY",C="_blocker",B="_applyCloseInterval",A="_applyBlockerColor",z="_applyIconColumnWidth",y="mouseover",x="_applyArrowColumnWidth",w="qx.ui.menu.Menu",v="Color",t="Number",u="_applyOpenInterval",r="_applySpacingX",s="_applyBlockerOpacity",q="_applyOpenedButton";
qx.Class.define(w,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var Y=this.getApplicationRoot();
Y.add(this);
this.addListener(y,this._onMouseOver);
this.addListener(h,this._onMouseOut);
this.addListener(n,this._onResize,this);
Y.addListener(n,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(Y);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:f},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:g},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:o,apply:r,init:0,themeable:true},spacingY:{check:o,apply:D,init:0,themeable:true},iconColumnWidth:{check:o,init:0,themeable:true,apply:z},arrowColumnWidth:{check:o,init:0,themeable:true,apply:x},blockerColor:{check:v,init:null,nullable:true,apply:A,themeable:true},blockerOpacity:{check:t,init:1,apply:s,themeable:true},selectedButton:{check:m,nullable:true,apply:E},openedButton:{check:m,nullable:true,apply:q},opener:{check:m,nullable:true},openInterval:{check:o,themeable:true,init:250,apply:u},closeInterval:{check:o,themeable:true,init:250,apply:B},blockBackground:{check:j,themeable:true,init:false}},members:{__mz:null,__mA:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__mC();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__mC();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(a){this.placeToPoint(a);
this.__mC();
this.show();
this._placementTarget=a;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var N=[];
var O=this.getChildren();

for(var i=0;i<O.length;i++){if(O[i].isEnabled()){N.push(O[i]);
}}return N;
},_applyIconColumnWidth:function(R,S){this._getMenuLayout().setIconColumnWidth(R);
},_applyArrowColumnWidth:function(ba,bb){this._getMenuLayout().setArrowColumnWidth(ba);
},_applySpacingX:function(bj,bk){this._getMenuLayout().setColumnSpacing(bj);
},_applySpacingY:function(L,M){this._getMenuLayout().setSpacing(L);
},_applyVisibility:function(bo,bp){qx.ui.core.Widget.prototype._applyVisibility.call(this,bo,bp);
var bq=qx.ui.menu.Manager.getInstance();

if(bo===k){bq.add(this);
var br=this.getParentMenu();

if(br){br.setOpenedButton(this.getOpener());
}}else if(bp===k){bq.remove(this);
var br=this.getParentMenu();

if(br&&br.getOpenedButton()==this.getOpener()){br.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__mB();
},__mB:function(){if(this.isVisible()){if(this.getBlockBackground()){var K=this.getZIndex();
this._blocker.blockContent(K-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bn=this.getOpener();

if(!bn||!(bn instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bn&&!(bn instanceof qx.ui.menu.Menu)){bn=bn.getLayoutParent();
}return bn;
},_applySelectedButton:function(b,c){if(c){c.removeState(l);
}
if(b){b.addState(l);
}},_applyOpenedButton:function(bc,bd){if(bd){bd.getMenu().exclude();
}
if(bc){bc.getMenu().open();
}},_applyBlockerColor:function(T,U){this._blocker.setColor(T);
},_applyBlockerOpacity:function(P,Q){this._blocker.setOpacity(P);
},getChildrenContainer:function(){return this.getChildControl(p,true)||this;
},_createChildControlImpl:function(be){var bf;

switch(be){case p:var bf=new qx.ui.menu.MenuSlideBar();
var bh=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bg=bf.getLayout();
bf.setLayout(bh);
bg.dispose();
var bi=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bi.length;i++){bf.add(bi[i]);
}this.removeListener(n,this._onResize,this);
bf.getChildrenContainer().addListener(n,this._onResize,this);
this._add(bf);
break;
}return bf||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,be);
},_getMenuLayout:function(){if(this.hasChildControl(p)){return this.getChildControl(p).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(p)){return this.getChildControl(p).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__mC:function(){var W=this._getMenuBounds();

if(!W){this.addListenerOnce(n,this.__mC,this);
return;
}var V=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var X=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(W.height+top);
this.moveTo(X,0);
});
}else if(top+W.height>V){this._assertSlideBar(function(){this.setHeight(V-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(F){if(this.hasChildControl(p)){return F.call(this);
}this.__mA=F;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(p);

if(this.__mA){this.__mA.call(this);
delete this.__mA;
}},_onResize:function(){if(this.isVisible()){var d=this._placementTarget;

if(!d){return;
}else if(d instanceof qx.ui.core.Widget){this.placeToWidget(d);
}else if(d.top!==undefined){this.placeToPoint(d);
}else{throw new Error("Unknown target: "+d);
}this.__mC();
}},_onMouseOver:function(e){var H=qx.ui.menu.Manager.getInstance();
H.cancelClose(this);
var I=e.getTarget();

if(I.isEnabled()&&I instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(I);
var G=I.getMenu&&I.getMenu();

if(G){G.setOpener(I);
H.scheduleOpen(G);
this.__mz=G;
}else{var J=this.getOpenedButton();

if(J){H.scheduleClose(J.getMenu());
}
if(this.__mz){H.cancelOpen(this.__mz);
this.__mz=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var bl=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bm=this.getOpenedButton();
bm?this.setSelectedButton(bm):this.resetSelectedButton();
if(bm){bl.cancelClose(bm.getMenu());
}if(this.__mz){bl.cancelOpen(this.__mz);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(n,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(C);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__mD:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__mD=[0,0,0,0];
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
},getColumnSizes:function(){return this.__mD||null;
}},destruct:function(){this.__mD=null;
}});
})();
(function(){var b="menu-separator",a="qx.ui.menu.Separator";
qx.Class.define(a,{extend:qx.ui.core.Widget,properties:{appearance:{refine:true,init:b},anonymous:{refine:true,init:true}}});
})();
(function(){var z="icon",y="label",x="arrow",w="shortcut",v="changeLocale",u="qx.dynlocale",t="submenu",s="on",r="String",q="qx.ui.menu.Menu",k="qx.ui.menu.AbstractButton",p="keypress",n="",j="_applyIcon",i="mouseup",m="abstract",l="_applyLabel",o="_applyMenu",h="changeCommand";
qx.Class.define(k,{extend:qx.ui.core.Widget,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],type:m,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.ButtonLayout);
this.addListener(i,this._onMouseUp);
this.addListener(p,this._onKeyPress);
this.addListener(h,this._onChangeCommand,this);
},properties:{blockToolTip:{refine:true,init:true},label:{check:r,apply:l,nullable:true},menu:{check:q,apply:o,nullable:true},icon:{check:r,apply:j,themeable:true,nullable:true}},members:{_createChildControlImpl:function(c){var d;

switch(c){case z:d=new qx.ui.basic.Image;
d.setAnonymous(true);
this._add(d,{column:0});
break;
case y:d=new qx.ui.basic.Label;
d.setAnonymous(true);
this._add(d,{column:1});
break;
case w:d=new qx.ui.basic.Label;
d.setAnonymous(true);
this._add(d,{column:2});
break;
case x:d=new qx.ui.basic.Image;
d.setAnonymous(true);
this._add(d,{column:3});
break;
}return d||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,c);
},_forwardStates:{selected:1},getChildrenSizes:function(){var D=0,E=0,F=0,J=0;

if(this._isChildControlVisible(z)){var K=this.getChildControl(z);
D=K.getMarginLeft()+K.getSizeHint().width+K.getMarginRight();
}
if(this._isChildControlVisible(y)){var H=this.getChildControl(y);
E=H.getMarginLeft()+H.getSizeHint().width+H.getMarginRight();
}
if(this._isChildControlVisible(w)){var G=this.getChildControl(w);
F=G.getMarginLeft()+G.getSizeHint().width+G.getMarginRight();
}
if(this._isChildControlVisible(x)){var I=this.getChildControl(x);
J=I.getMarginLeft()+I.getSizeHint().width+I.getMarginRight();
}return [D,E,F,J];
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var C=e.getData();

if(qx.core.Variant.isSet(u,s)){var A=e.getOldData();

if(!A){qx.locale.Manager.getInstance().addListener(v,this._onChangeLocale,this);
}
if(!C){qx.locale.Manager.getInstance().removeListener(v,this._onChangeLocale,this);
}}var B=C!=null?C.toString():n;
this.getChildControl(w).setValue(B);
},_onChangeLocale:qx.core.Variant.select(u,{"on":function(e){var L=this.getCommand();

if(L!=null){this.getChildControl(w).setValue(L.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(z).setSource(M);
}else{this._excludeChildControl(z);
}},_applyLabel:function(a,b){if(a){this._showChildControl(y).setValue(a);
}else{this._excludeChildControl(y);
}},_applyMenu:function(f,g){if(g){g.resetOpener();
g.removeState(t);
}
if(f){this._showChildControl(x);
f.setOpener(this);
f.addState(t);
}else{this._excludeChildControl(x);
}}},destruct:function(){if(this.getMenu()){if(!qx.core.ObjectRegistry.inShutDown){this.getMenu().destroy();
}}
if(qx.core.Variant.isSet(u,s)){qx.locale.Manager.getInstance().removeListener(v,this._onChangeLocale,this);
}}});
})();
(function(){var w="qx.ui.menu.ButtonLayout",v="qx.debug",u="column",t="left",s="middle",r="' is not supported by the MenuButton layout!",q="The property '";
qx.Class.define(w,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(v,{"on":function(C,name,D){this.assert(name==u,q+name+r);
},"off":null}),renderLayout:function(a,b){var n=this._getLayoutChildren();
var m;
var d;
var e=[];

for(var i=0,l=n.length;i<l;i++){m=n[i];
d=m.getLayoutProperties().column;
e[d]=m;
}var k=this.__mW(n[0]);
var o=k.getColumnSizes();
var g=k.getSpacingX();
var f=qx.lang.Array.sum(o)+g*(o.length-1);

if(f<a){o[1]+=a-f;
}var p=0,top=0;
var h=qx.ui.layout.Util;

for(var i=0,l=o.length;i<l;i++){m=e[i];

if(m){var c=m.getSizeHint();
var top=h.computeVerticalAlignOffset(m.getAlignY()||s,c.height,b,0,0);
var j=h.computeHorizontalAlignOffset(m.getAlignX()||t,c.width,o[i],m.getMarginLeft(),m.getMarginRight());
m.renderLayout(p+j,top,c.width,c.height);
}p+=o[i]+g;
}},__mW:function(B){while(!(B instanceof qx.ui.menu.Menu)){B=B.getLayoutParent();
}return B;
},_computeSizeHint:function(){var z=this._getLayoutChildren();
var y=0;
var A=0;

for(var i=0,l=z.length;i<l;i++){var x=z[i].getSizeHint();
A+=x.width;
y=Math.max(y,x.height);
}return {width:A,height:y};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var w="horizontal",v="scrollpane",u="vertical",t="button-backward",s="button-forward",r="content",q="execute",p="qx.ui.container.SlideBar",o="scrollY",n="removeChildWidget",j="scrollX",m="_applyOrientation",l="mousewheel",i="Integer",h="slidebar",k="update";
qx.Class.define(p,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(A){qx.ui.core.Widget.call(this);
var B=this.getChildControl(v);
this._add(B,{flex:1});

if(A!=null){this.setOrientation(A);
}else{this.initOrientation();
}this.addListener(l,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:h},orientation:{check:[w,u],init:w,apply:m},scrollStep:{check:i,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(r);
},_createChildControlImpl:function(f){var g;

switch(f){case s:g=new qx.ui.form.RepeatButton;
g.addListener(q,this._onExecuteForward,this);
g.setFocusable(false);
this._addAt(g,2);
break;
case t:g=new qx.ui.form.RepeatButton;
g.addListener(q,this._onExecuteBackward,this);
g.setFocusable(false);
this._addAt(g,0);
break;
case r:g=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){g.addListener(n,this._onRemoveChild,this);
}this.getChildControl(v).add(g);
break;
case v:g=new qx.ui.core.scroll.ScrollPane();
g.addListener(k,this._onResize,this);
g.addListener(j,this._onScroll,this);
g.addListener(o,this._onScroll,this);
break;
}return g||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,f);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(a){var b=this.getChildControl(v);

if(this.getOrientation()===w){b.scrollByX(a);
}else{b.scrollByY(a);
}},scrollTo:function(c){var d=this.getChildControl(v);

if(this.getOrientation()===w){d.scrollToX(c);
}else{d.scrollToY(c);
}},_applyOrientation:function(C,D){var G=[this.getLayout(),this._getLayout()];
var F=this.getChildControl(s);
var E=this.getChildControl(t);
if(D==u){F.removeState(u);
E.removeState(u);
F.addState(w);
E.addState(w);
}else if(D==w){F.removeState(w);
E.removeState(w);
F.addState(u);
E.addState(u);
}
if(C==w){this._setLayout(new qx.ui.layout.HBox());
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
},_onResize:function(e){var content=this.getChildControl(v).getChildren()[0];

if(!content){return;
}var H=this.getInnerSize();
var J=content.getBounds();
var I=(this.getOrientation()===w)?J.width>H.width:J.height>H.height;

if(I){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(v).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var y=this.getChildControl(v);

if(this.getOrientation()===w){var x=y.getScrollX();
var z=y.getScrollMaxX();
}else{var x=y.getScrollY();
var z=y.getScrollMaxY();
}this.getChildControl(t).setEnabled(x>0);
this.getChildControl(s).setEnabled(x<z);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();
(function(){var h="execute",g="button-backward",f="vertical",e="button-forward",d="menu-slidebar",c="qx.ui.menu.MenuSlideBar";
qx.Class.define(c,{extend:qx.ui.container.SlideBar,construct:function(){qx.ui.container.SlideBar.call(this,f);
},properties:{appearance:{refine:true,init:d}},members:{_createChildControlImpl:function(a){var b;

switch(a){case e:b=new qx.ui.form.HoverButton();
b.addListener(h,this._onExecuteForward,this);
this._addAt(b,2);
break;
case g:b=new qx.ui.form.HoverButton();
b.addListener(h,this._onExecuteBackward,this);
this._addAt(b,0);
break;
}return b||qx.ui.container.SlideBar.prototype._createChildControlImpl.call(this,a);
}}});
})();
(function(){var q="pressed",p="abandoned",o="Integer",n="hovered",m="qx.event.type.Event",l="Enter",k="Space",j="press",i="qx.ui.form.RepeatButton",h="release",d="__jF",g="interval",f="execute";
qx.Class.define(i,{extend:qx.ui.form.Button,construct:function(b,c){qx.ui.form.Button.call(this,b,c);
this.__jF=new qx.event.AcceleratingTimer();
this.__jF.addListener(g,this._onInterval,this);
},events:{"execute":m,"press":m,"release":m},properties:{interval:{check:o,init:100},firstInterval:{check:o,init:500},minTimer:{check:o,init:20},timerDecrease:{check:o,init:2}},members:{__jG:null,__jF:null,press:function(){if(this.isEnabled()){if(!this.hasState(q)){this.__jH();
}this.removeState(p);
this.addState(q);
}},release:function(a){if(!this.isEnabled()){return;
}if(this.hasState(q)){if(!this.__jG){this.execute();
}}this.removeState(q);
this.removeState(p);
this.__jI();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(q);
this.removeState(p);
this.__jI();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(p)){this.removeState(p);
this.addState(q);
this.__jF.start();
}this.addState(n);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(n);

if(this.hasState(q)){this.removeState(q);
this.addState(p);
this.__jF.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jH();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(p)){this.addState(n);

if(this.hasState(q)&&!this.__jG){this.execute();
}}this.__jI();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(q)){if(!this.__jG){this.execute();
}this.removeState(q);
this.removeState(p);
e.stopPropagation();
this.__jI();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(p);
this.addState(q);
e.stopPropagation();
this.__jH();
}},_onInterval:function(e){this.__jG=true;
this.fireEvent(f);
},__jH:function(){this.fireEvent(j);
this.__jG=false;
this.__jF.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(p);
this.addState(q);
},__jI:function(){this.fireEvent(h);
this.__jF.stop();
this.removeState(p);
this.removeState(q);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var e="Integer",d="interval",c="__kg",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kg=new qx.event.Timer(this.getInterval());
this.__kg.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__kg:null,__kh:null,start:function(){this.__kg.setInterval(this.getFirstInterval());
this.__kg.start();
},stop:function(){this.__kg.stop();
this.__kh=null;
},_onInterval:function(){this.__kg.stop();

if(this.__kh==null){this.__kh=this.getInterval();
}this.__kh=Math.max(this.getMinimum(),this.__kh-this.getDecrease());
this.__kg.setInterval(this.__kh);
this.__kg.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var L="resize",K="scrollY",J="update",I="scrollX",H="_applyScrollX",G="_applyScrollY",F="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",E="appear",D="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",C="qx.event.type.Event",A="qx.ui.core.scroll.ScrollPane",B="scroll";
qx.Class.define(A,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(L,this._onUpdate);
var g=this.getContentElement();
g.addListener(B,this._onScroll,this);
g.addListener(E,this._onAppear,this);
},events:{update:C},properties:{scrollX:{check:F,apply:H,event:I,init:0},scrollY:{check:D,apply:G,event:K,init:0}},members:{add:function(b){var c=this._getChildren()[0];

if(c){this._remove(c);
c.removeListener(L,this._onUpdate,this);
}
if(b){this._add(b);
b.addListener(L,this._onUpdate,this);
}},remove:function(d){if(d){this._remove(d);
d.removeListener(L,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(J);
},_onScroll:function(e){var q=this.getContentElement();
this.setScrollX(q.getScrollX());
this.setScrollY(q.getScrollY());
},_onAppear:function(e){var u=this.getContentElement();
var r=this.getScrollX();
var s=u.getScrollX();

if(r!=s){u.scrollToX(r);
}var v=this.getScrollY();
var t=u.getScrollY();

if(v!=t){u.scrollToY(v);
}},getItemTop:function(a){var top=0;

do{top+=a.getBounds().top;
a=a.getLayoutParent();
}while(a&&a!==this);
return top;
},getItemBottom:function(h){return this.getItemTop(h)+h.getBounds().height;
},getItemLeft:function(w){var z=0;
var parent;

do{z+=w.getBounds().left;
parent=w.getLayoutParent();

if(parent){z+=parent.getInsets().left;
}w=parent;
}while(w&&w!==this);
return z;
},getItemRight:function(f){return this.getItemLeft(f)+f.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var p=this.getInnerSize();
var o=this.getScrollSize();

if(p&&o){return Math.max(0,o.width-p.width);
}return 0;
},getScrollMaxY:function(){var j=this.getInnerSize();
var i=this.getScrollSize();

if(j&&i){return Math.max(0,i.height-j.height);
}return 0;
},scrollToX:function(m){var n=this.getScrollMaxX();

if(m<0){m=0;
}else if(m>n){m=n;
}this.setScrollX(m);
},scrollToY:function(k){var l=this.getScrollMaxY();

if(k<0){k=0;
}else if(k>l){k=l;
}this.setScrollY(k);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var i="Integer",h="hovered",g="hover-button",f="__mX",d="interval",c="mouseover",b="mouseout",a="qx.ui.form.HoverButton";
qx.Class.define(a,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(j,k){qx.ui.basic.Atom.call(this,j,k);
this.addListener(c,this._onMouseOver,this);
this.addListener(b,this._onMouseOut,this);
this.__mX=new qx.event.AcceleratingTimer();
this.__mX.addListener(d,this._onInterval,this);
},properties:{appearance:{refine:true,init:g},interval:{check:i,init:80},firstInterval:{check:i,init:200},minTimer:{check:i,init:20},timerDecrease:{check:i,init:2}},members:{__mX:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__mX.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(h);
},_onMouseOut:function(e){this.__mX.stop();
this.removeState(h);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__mX.stop();
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
},_applySpacing:function(s,t){var u=this.getChildControl(m).getLayout();
s==null?u.resetSpacing():u.setSpacing(s);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var q=this.getChildren();
var p=[];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r instanceof qx.ui.menubar.Button){p.push(r);
}}return p;
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
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(d){},getValue:function(){},setGroup:function(c){this.assertInstance(c,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var c="qx.ui.form.IModel",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"changeModel":b},members:{setModel:function(a){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var l="checked",k="qx.ui.form.RadioGroup",j="Boolean",i="menu-radiobutton",h="_applyValue",g="qx.ui.menu.RadioButton",f="changeValue",d="_applyGroup",c="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(o,p){qx.ui.menu.AbstractButton.call(this);
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
(function(){var n="Please use an array as parameter.",m="qx.ui.form.MModelSelection",l="change",k="qx.debug",h="__iG",g="changeSelection",f="on",e="qx.event.type.Data";
qx.Mixin.define(m,{construct:function(){this.__iG=new qx.data.Array();
this.__iG.addListener(l,this.__iJ,this);
this.addListener(g,this.__iI,this);
},events:{changeModelSelection:e},members:{__iG:null,__iH:false,__iI:function(){if(this.__iH){return;
}var c=this.getSelection();
var a=[];

for(var i=0;i<c.length;i++){var d=c[i];
var b=d.getModel?d.getModel():null;

if(b!==null){a.push(b);
}}this.setModelSelection(a);
},__iJ:function(){this.__iH=true;
var r=this.getSelectables();
var t=[];
var s=this.__iG.toArray();

for(var i=0;i<s.length;i++){var v=s[i];

for(var j=0;j<r.length;j++){var w=r[j];
var q=w.getModel?w.getModel():null;

if(v===q){t.push(w);
break;
}}}this.setSelection(t);
this.__iH=false;
var u=this.getSelection();

if(!qx.lang.Array.equals(u,t)){this.__iI();
}},getModelSelection:function(){return this.__iG;
},setModelSelection:function(o){if(!o){this.__iG.removeAll();
return;
}
if(qx.core.Variant.isSet(k,f)){this.assertArray(o,n);
}o.unshift(this.__iG.getLength());
o.unshift(0);
var p=this.__iG.splice.apply(this.__iG,o);
p.dispose();
}},destruct:function(){this._disposeObjects(h);
}});
})();
(function(){var r="Boolean",q="changeValue",p="__qH",o="_applyAllowEmptySelection",n="_applyInvalidMessage",m="qx.ui.form.RadioGroup",k="_applyValid",j="",h="changeRequired",g="changeValid",c="changeEnabled",f="changeInvalidMessage",d="changeSelection",b="_applyEnabled",a="String";
qx.Class.define(m,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(J){qx.core.Object.call(this);
this.__qH=[];
this.addListener(d,this.__qI,this);

if(J!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:b,event:c,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:o},valid:{check:r,init:true,apply:k,event:g},required:{check:r,init:false,event:h},invalidMessage:{check:a,init:j,event:f,apply:n}},members:{__qH:null,getItems:function(){return this.__qH;
},add:function(u){var v=this.__qH;
var w;

for(var i=0,l=arguments.length;i<l;i++){w=arguments[i];

if(qx.lang.Array.contains(v,w)){continue;
}w.addListener(q,this._onItemChangeChecked,this);
v.push(w);
w.setGroup(this);
if(w.getValue()){this.setSelection([w]);
}}if(!this.isAllowEmptySelection()&&v.length>0&&!this.getSelection()[0]){this.setSelection([v[0]]);
}},remove:function(C){var D=this.__qH;

if(qx.lang.Array.contains(D,C)){qx.lang.Array.remove(D,C);
if(C.getGroup()===this){C.resetGroup();
}C.removeListener(q,this._onItemChangeChecked,this);
if(C.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__qH;
},_onItemChangeChecked:function(e){var N=e.getTarget();

if(N.getValue()){this.setSelection([N]);
}else if(this.getSelection()[0]==N){this.resetSelection();
}},_applyInvalidMessage:function(s,t){for(var i=0;i<this.__qH.length;i++){this.__qH[i].setInvalidMessage(s);
}},_applyValid:function(E,F){for(var i=0;i<this.__qH.length;i++){this.__qH[i].setValid(E);
}},_applyEnabled:function(z,A){var B=this.__qH;

if(z==null){for(var i=0,l=B.length;i<l;i++){B[i].resetEnabled();
}}else{for(var i=0,l=B.length;i<l;i++){B[i].setEnabled(z);
}}},_applyAllowEmptySelection:function(x,y){if(!x&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var K=this.getSelection()[0];
var M=this.__qH;
var L=M.indexOf(K);

if(L==-1){return;
}var i=0;
var length=M.length;
if(this.getWrap()){L=(L+1)%length;
}else{L=Math.min(L+1,length-1);
}
while(i<length&&!M[L].getEnabled()){L=(L+1)%length;
i++;
}this.setSelection([M[L]]);
},selectPrevious:function(){var G=this.getSelection()[0];
var I=this.__qH;
var H=I.indexOf(G);

if(H==-1){return;
}var i=0;
var length=I.length;
if(this.getWrap()){H=(H-1+length)%length;
}else{H=Math.max(H-1,0);
}
while(i<length&&!I[H].getEnabled()){H=(H-1+length)%length;
i++;
}this.setSelection([I[H]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},__qI:function(e){var P=e.getData()[0];
var O=e.getOldData()[0];

if(O){O.setValue(false);
}
if(P){P.setValue(true);
}}},destruct:function(){this._disposeArray(p);
}});
})();
(function(){var j="[",i="]",h=".",g="idBubble",f="changeBubble",d="qx.data.marshal.MEventBubbling",c="qx.event.type.Data";
qx.Mixin.define(d,{events:{"changeBubble":c},members:{_applyEventPropagation:function(a,b,name){this.fireDataEvent(f,{value:a,name:name,old:b});
this._registerEventChaining(a,b,name);
},_registerEventChaining:function(s,t,name){if((s instanceof qx.core.Object)&&qx.Class.hasMixin(s.constructor,qx.data.marshal.MEventBubbling)){var u=qx.lang.Function.bind(this.__ky,this,name);
var v=s.addListener(f,u,this);
s.setUserData(g,v);
}if(t!=null&&t.getUserData&&t.getUserData(g)!=null){t.removeListenerById(t.getUserData(g));
}},__ky:function(name,e){var r=e.getData();
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
(function(){var Q="change",P="add",O="remove",N="order",M="The parameter must be an array.",L="",K="qx.data.Array",J="?",I="changeBubble",H="qx.event.type.Event",E="number",G="on",F="changeLength",D="qx.debug",C="qx.event.type.Data";
qx.Class.define(K,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(bf){qx.core.Object.call(this);
if(bf==undefined){this.__kz=[];
}else if(arguments.length>1){this.__kz=[];

for(var i=0;i<arguments.length;i++){this.__kz.push(arguments[i]);
}}else if(typeof bf==E){this.__kz=new Array(bf);
}else if(bf instanceof Array){this.__kz=qx.lang.Array.clone(bf);
}else{this.__kz=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kz.length;i++){this._applyEventPropagation(this.__kz[i],null,i);
}this.__kA();
},events:{"change":C,"changeLength":H},members:{__kz:null,concat:function(T){if(T){var U=this.__kz.concat(T);
}else{var U=this.__kz.concat();
}return new qx.data.Array(U);
},join:function(d){return this.__kz.join(d);
},pop:function(){var e=this.__kz.pop();
this.__kA();
this._applyEventPropagation(null,e,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:O,items:[e]},null);
return e;
},push:function(r){for(var i=0;i<arguments.length;i++){this.__kz.push(arguments[i]);
this.__kA();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(Q,{start:this.length-1,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kz.reverse();
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},shift:function(){var y=this.__kz.shift();
this.__kA();
this._applyEventPropagation(null,y);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:O,items:[y]},null);
return y;
},slice:function(V,W){return new qx.data.Array(this.__kz.slice(V,W));
},splice:function(g,h,j){var p=this.__kz.length;
var m=this.__kz.splice.apply(this.__kz,arguments);
if(this.__kz.length!=p){this.__kA();
}var n=h>0;
var k=arguments.length>2;
var l=null;

if(n||k){if(this.__kz.length>p){var o=P;
}else if(this.__kz.length<p){var o=O;
l=m;
}else{var o=N;
}this.fireDataEvent(Q,{start:g,end:this.length-1,type:o,items:l},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,g+i);
}this.fireDataEvent(I,{value:this,name:J,old:m});
for(var i=0;i<m.length;i++){this._applyEventPropagation(null,m[i],i);
}return (new qx.data.Array(m));
},sort:function(f){this.__kz.sort.apply(this.__kz,arguments);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:N,items:null},null);
},unshift:function(c){for(var i=arguments.length-1;i>=0;i--){this.__kz.unshift(arguments[i]);
this.__kA();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(Q,{start:0,end:this.length-1,type:P,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kz;
},getItem:function(z){return this.__kz[z];
},setItem:function(ba,bb){var bc=this.__kz[ba];
this.__kz[ba]=bb;
this._applyEventPropagation(bb,bc,ba);
if(this.length!=this.__kz.length){this.__kA();
}this.fireDataEvent(Q,{start:ba,end:ba,type:P,items:[bb]},null);
},getLength:function(){return this.length;
},indexOf:function(A){return this.__kz.indexOf(A);
},toString:function(){if(this.__kz!=null){return this.__kz.toString();
}return L;
},contains:function(q){return this.__kz.indexOf(q)!==-1;
},copy:function(){return this.concat();
},insertAt:function(a,b){this.splice(a,0,b);
},insertBefore:function(v,w){var x=this.indexOf(v);

if(x==-1){this.push(w);
}else{this.splice(x,0,w);
}},insertAfter:function(bg,bh){var bi=this.indexOf(bg);

if(bi==-1||bi==(this.length-1)){this.push(bh);
}else{this.splice(bi+1,0,bh);
}},removeAt:function(bk){return this.splice(bk,1)[0];
},removeAll:function(){for(var i=0;i<this.__kz.length;i++){this._applyEventPropagation(null,this.__kz[i],i);
}var u=this.getLength();
var t=this.__kz.concat();
this.__kz.length=0;
this.__kA();
this.fireDataEvent(Q,{start:0,end:u-1,type:O,items:t},null);
},append:function(R){if(qx.core.Variant.isSet(D,G)){qx.core.Assert.assertArray(R,M);
}for(var i=0;i<R.length;i++){this._applyEventPropagation(R[i],null,this.__kz.length+i);
}Array.prototype.push.apply(this.__kz,R);
this.__kA();
},remove:function(X){var Y=this.indexOf(X);

if(Y!=-1){this.splice(Y,1);
return X;
}},equals:function(B){if(this.length!==B.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==B.getItem(i)){return false;
}}return true;
},sum:function(){var S=0;

for(var i=0;i<this.length;i++){S+=this.getItem(i);
}return S;
},max:function(){var bj=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bj){bj=this.getItem(i);
}}return bj===undefined?null:bj;
},min:function(){var s=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<s){s=this.getItem(i);
}}return s===undefined?null:s;
},forEach:function(bd,be){for(var i=0;i<this.__kz.length;i++){bd.call(be,this.__kz[i]);
}},__kA:function(){this.length=this.__kz.length;
this.fireEvent(F,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kz.length;i++){this._applyEventPropagation(null,this.__kz[i],i);
}this.__kz=null;
}});
})();
(function(){var g="arrow",f="qx.ui.toolbar.MenuButton",e="Boolean",d="_applyShowArrow",c="toolbar-menubutton";
qx.Class.define(f,{extend:qx.ui.menubar.Button,properties:{appearance:{refine:true,init:c},showArrow:{check:e,init:false,themeable:true,apply:d}},members:{_createChildControlImpl:function(h){var i;

switch(h){case g:i=new qx.ui.basic.Image();
i.setAnonymous(true);
this._addAt(i,10);
break;
}return i||qx.ui.menubar.Button.prototype._createChildControlImpl.call(this,h);
},_applyShowArrow:function(a,b){if(a){this._showChildControl(g);
}else{this._excludeChildControl(g);
}}}});
})();
(function(){var u="pressed",t="abandoned",s="hovered",r="checked",q="Space",p="Enter",o="mouseup",n="mousedown",m="Boolean",l="_applyValue",f="mouseover",k="mouseout",i="qx.ui.form.ToggleButton",d="keydown",c="changeValue",h="button",g="keyup",j="execute";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable],construct:function(a,b){qx.ui.basic.Atom.call(this,a,b);
this.addListener(f,this._onMouseOver);
this.addListener(k,this._onMouseOut);
this.addListener(n,this._onMouseDown);
this.addListener(o,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(g,this._onKeyUp);
this.addListener(j,this._onExecute,this);
},properties:{appearance:{refine:true,init:h},focusable:{refine:true,init:true},value:{check:m,nullable:true,event:c,apply:l,init:false}},members:{_applyValue:function(v,w){v?this.addState(r):this.removeState(r);
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
(function(){var e="inherit",d="toolbar-button",c="qx.ui.toolbar.CheckBox",b="keydown",a="keyup";
qx.Class.define(c,{extend:qx.ui.form.ToggleButton,construct:function(f,g){qx.ui.form.ToggleButton.call(this,f,g);
this.removeListener(b,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:d},show:{refine:true,init:e},focusable:{refine:true,init:false}}});
})();
(function(){var e="qx.ui.form.RadioGroup",d="_applyGroup",c="qx.ui.toolbar.RadioButton";
qx.Class.define(c,{extend:qx.ui.toolbar.CheckBox,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel,qx.ui.form.IRadioItem],properties:{group:{check:e,apply:d,nullable:true}},members:{_applyValue:function(f,g){qx.ui.toolbar.CheckBox.prototype._applyValue.call(this,f,g);

if(f){var h=this.getGroup();

if(h){h.setSelection([this]);
}}},_applyGroup:function(a,b){if(b){b.remove(this);
}
if(a){a.add(this);
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
(function(){var i="auto",h="overflowX",g="visible",f="hidden",e="scroll",d="overflowY",c="_applyOverflowX",b="_applyOverflowY",a="qx.ui.core.MNativeOverflow";
qx.Mixin.define(a,{properties:{overflowX:{check:[f,g,e,i],nullable:true,apply:c},overflowY:{check:[f,g,e,i],nullable:true,apply:b},overflow:{group:[h,d]}},members:{_applyOverflowX:function(k){this.getContentElement().setStyle(h,k);
},_applyOverflowY:function(j){this.getContentElement().setStyle(d,j);
}}});
})();
(function(){var w="qx.client",v="mousedown",u="load",t="help",s="mouseup",r="losecapture",q="contextmenu",p="none",o="display",n="repeat",N="Boolean",M="px",L="url(",K="__En",J=")",I="gecko",H="div",G="DOMNodeInserted",F="_applyNativeHelp",E="/",C="appear",D="mshtml",A="block",B="qx.ui.embed.Iframe",y="iframe",z="absolute",x="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(l){if(l!=null){this.__Em=l;
}qx.ui.embed.AbstractIframe.call(this,l);
qx.event.Registration.addListener(document.body,v,this.block,this,true);
qx.event.Registration.addListener(document.body,s,this.release,this,true);
qx.event.Registration.addListener(document.body,r,this.release,this,true);
this.__En=this._createBlockerElement();
this.getContainerElement().add(this.__En);

if(qx.core.Variant.isSet(w,I)){this.addListenerOnce(C,function(e){var k=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(k,G,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:y},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:N,init:false,apply:F}},members:{__Em:null,__En:null,renderLayout:function(f,top,g,h){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,f,top,g,h);
var j=M;
var i=this.getInsets();
this.__En.setStyles({"left":i.left+j,"top":i.top+j,"width":(g-i.left-i.right)+j,"height":(h-i.top-i.bottom)+j});
},_createContentElement:function(){var Q=new qx.html.Iframe(this.__Em);
Q.addListener(u,this._onIframeLoad,this);
return Q;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var m=new qx.html.Element(H);
m.setStyles({"zIndex":20,"position":z,"display":p});
if(qx.core.Variant.isSet(w,D)){m.setStyles({backgroundImage:L+qx.util.ResourceManager.getInstance().toUri(x)+J,backgroundRepeat:n});
}return m;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(u);
},block:function(){this.__En.setStyle(o,A);
},release:function(){this.__En.setStyle(o,p);
},_applyNativeContextMenu:function(a,b){if(a!==false&&b!==false){return;
}var c=this.getDocument();

if(!c){return;
}
try{var d=c.documentElement;
}catch(e){return ;
}
if(b===false){qx.event.Registration.removeListener(d,q,this._onNativeContextMenu,this,true);
}
if(a===false){qx.event.Registration.addListener(d,q,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(w,{"mshtml":function(O,P){var document=this.getDocument();

if(!document){return;
}
try{if(P===false){qx.bom.Event.removeNativeListener(document,t,qx.lang.Function.returnFalse);
}
if(O===false){qx.bom.Event.addNativeListener(document,t,qx.lang.Function.returnFalse);
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var S=this.getContentElement().getDomElement();
var R=S.src;
if(R.charAt(R.length-1)==E){R=R.substring(0,R.length-1);
}
if(R!=this.getSource()){qx.bom.Iframe.getWindow(S).stop();
S.src=this.getSource();
}}},destruct:function(){this._disposeObjects(K);
qx.event.Registration.removeListener(document.body,v,this.block,this,true);
qx.event.Registration.removeListener(document.body,s,this.release,this,true);
qx.event.Registration.removeListener(document.body,r,this.release,this,true);
}});
})();
(function(){var j="source",i="name",h="qx.html.Iframe",g="qx.event.type.Event",f="iframe";
qx.Class.define(h,{extend:qx.html.Element,construct:function(k,l,m){qx.html.Element.call(this,f,l,m);
this._setProperty(j,k);
},events:{"load":g},members:{_applyProperty:function(name,o){qx.html.Element.prototype._applyProperty.call(this,name,o);

if(name==j){var p=this.getDomElement();
qx.bom.Iframe.setSource(p,o);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var d=this.getDomElement();

if(d){return qx.bom.Iframe.getWindow(d);
}else{return null;
}},getDocument:function(){var e=this.getDomElement();

if(e){return qx.bom.Iframe.getDocument(e);
}else{return null;
}},getBody:function(){var n=this.getDomElement();

if(n){return qx.bom.Iframe.getBody(n);
}else{return null;
}},setSource:function(c){this._setProperty(j,c);
return this;
},getSource:function(){return this._getProperty(j);
},setName:function(name){this.setAttribute(i,name);
return this;
},getName:function(){return this.getAttribute(i);
},reload:function(){var b=this.getDomElement();

if(b){var a=this.getSource();
this.setSource(null);
this.setSource(a);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__rY:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__rY=null;
},getInsets:function(){if(this.__rY){return this.__rY;
}var l=this._getDefaultInsets();
return this.__rY={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__rY=null;
}},destruct:function(){this.__rY=null;
}});
})();
(function(){var z="_applyBackground",y="repeat",x="qx.debug",w="on",v="mshtml",u="backgroundPositionX",t="",s="backgroundPositionY",r="hidden",q="no-repeat",j="scale",p=" ",m="repeat-x",i="qx.client",h="repeat-y",l="Please provide a map for the 'styles' parameter",k="qx.ui.decoration.MBackgroundImage",n="String",g='"></div>',o='<div style="';
qx.Mixin.define(k,{properties:{backgroundImage:{check:n,nullable:true,apply:z},backgroundRepeat:{check:[y,m,h,q,j],init:y,apply:z},backgroundPositionX:{nullable:true,apply:z},backgroundPositionY:{nullable:true,apply:z},backgroundPosition:{group:[s,u]}},members:{_generateBackgroundMarkup:function(a){if(qx.core.Variant.isSet(x,w)){if(qx.lang.Type.isString(a)){qx.log.Logger.deprecatedWarning(arguments.callee,l);
throw new Error("Wrong type for parameter 'styles'.");
}}var e=t;
var d=this.getBackgroundImage();
var c=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var f=this.getBackgroundPositionX();

if(f==null){f=0;
}a.backgroundPosition=f+p+top;
if(d){var b=qx.util.AliasManager.getInstance().resolve(d);
e=qx.bom.element.Decoration.create(b,c,a);
}else{if(a){if(qx.core.Variant.isSet(i,v)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){a.overflow=r;
}}e=o+qx.bom.element.Style.compile(a)+g;
}}return e;
},_applyBackground:function(){if(qx.core.Variant.isSet(x,w)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}}});
})();
(function(){var j="px",i="qx.ui.decoration.Background",h="",g="qx.debug",f="_applyStyle",e="on",d="Color",c="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(k){qx.ui.decoration.Abstract.call(this);

if(k!=null){this.setBackgroundColor(k);
}},properties:{backgroundColor:{check:d,nullable:true,apply:f}},members:{__sb:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sb;
},getMarkup:function(){if(this.__sb){return this.__sb;
}var a={position:c,top:0,left:0};
var b=this._generateBackgroundMarkup(a);
return this.__sb=b;
},resize:function(o,p,q){o.style.width=p+j;
o.style.height=q+j;
},tint:function(l,m){var n=qx.theme.manager.Color.getInstance();

if(m==null){m=this.getBackgroundColor();
}l.style.backgroundColor=n.resolve(m)||h;
},_applyStyle:function(){if(qx.core.Variant.isSet(g,e)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sb=null;
}});
})();
(function(){var u="none",t="text",s="",r="userSelect",q="color",p="String",o="0px",n="webkit",m="changeHtml",l="_applyCssClass",i="class",k="qx.ui.embed.Html",j="_applyHtml",h="qx.client",g="html";
qx.Class.define(k,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(a){qx.ui.core.Widget.call(this);

if(a!=null){this.setHtml(a);
}},properties:{html:{check:p,apply:j,event:m,nullable:true},cssClass:{check:p,init:s,apply:l},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(b,c){var d=this.getContentElement();
d.setAttribute(g,b||s);
d.setStyles({"padding":o,"border":u});
},_applyCssClass:function(e,f){this.getContentElement().setAttribute(i,e);
},_applySelectable:function(x){qx.ui.core.Widget.prototype._applySelectable.call(this,x);
if(qx.core.Variant.isSet(h,n)){this.getContainerElement().setStyle(r,x?t:u);
this.getContentElement().setStyle(r,x?t:u);
}},_applyFont:function(y,z){var A=y?qx.theme.manager.Font.getInstance().resolve(y).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(A);
},_applyTextColor:function(v,w){if(v){this.getContentElement().setStyle(q,qx.theme.manager.Color.getInstance().resolve(v));
}else{this.getContentElement().removeStyle(q);
}}}});
})();
(function(){var u="",t='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',s='.qxappender .type-instance{color:#565656;font-weight:bold}',r="qx.log.appender.Element",q='.qxappender .level-info{background:#DEEDFA}',p='.qxappender .type-stringify{color:#565656;font-weight:bold}',o='.qxappender .type-number{color:#155791;font-weight:normal;}',n="qxappender",m='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',l='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',g='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',k='.qxappender .level-error{background:#FFE2D5}',j='.qxappender .level-debug{background:white}',f='.qxappender .type-key{color:#565656;font-style:italic}',e='.qxappender .level-user{background:#E3EFE9}',i='.qxappender .level-warn{background:#FFF7D5}',h='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(r,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
var c=[j,q,i,k,e,h,o,g,t,m,f,l,s,p];
qx.bom.Stylesheet.createElement(c.join(u));
qx.log.Logger.register(this);
},members:{__CH:null,setElement:function(a){this.clear();
if(a){qx.bom.element.Class.add(a,n);
}this.__CH=a;
},clear:function(){var d=this.__CH;
if(d){d.innerHTML=u;
}},process:function(v){var w=this.__CH;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this.__CH=null;
}});
})();
(function(){var s="default",r="native",q="",p=" ",o="\\b",n="(\\s|$)",m="(^|\\s)",k="g",j="qx.bom.element.Class",h="$2",g="\\b|\\b";
qx.Class.define(j,{statics:{__AQ:/\s+/g,__AR:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(D,name){if(!this.has(D,name)){D.className+=(D.className?p:q)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(J,K){for(var i=0;i<K.length;i++){J.classList.add(K[i]);
}return J.className;
},"default":function(E,F){var G={};
var I;
var H=E.className;

if(H){I=H.split(this.__AQ);

for(var i=0,l=I.length;i<l;i++){G[I[i]]=true;
}
for(var i=0,l=F.length;i<l;i++){if(!G[F[i]]){I.push(F[i]);
}}}else{I=F;
}return E.className=I.join(p);
}}),get:function(c){return c.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(f,name){return f.classList.contains(name);
},"default":function(a,name){var b=new RegExp(m+name+n);
return b.test(a.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(z,name){z.classList.remove(name);
return name;
},"default":function(u,name){var v=new RegExp(m+name+n);
u.className=u.className.replace(v,h);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(L,M){for(var i=0;i<M.length;i++){L.classList.remove(M[i]);
}return L.className;
},"default":function(w,x){var y=new RegExp(o+x.join(g)+o,k);
return w.className=w.className.replace(y,q).replace(this.__AR,q).replace(this.__AQ,p);
}}),replace:function(A,B,C){this.remove(A,B);
return this.add(A,C);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?r:s,{"native":function(d,name,e){if(e===undefined){d.classList.toggle(name);
}else{e?this.add(d,name):this.remove(d,name);
}return name;
},"default":function(N,name,O){if(O==null){O=!this.has(N,name);
}O?this.add(N,name):this.remove(N,name);
return name;
}})}});
})();
(function(){var c="qx.nativeScrollBars",b="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(c,false);
qx.Mixin.define(b,{members:{_createScrollBar:function(a){if(qx.core.Setting.get(c)){return new qx.ui.core.scroll.NativeScrollBar(a);
}else{return new qx.ui.core.scroll.ScrollBar(a);
}}}});
})();
(function(){var W="scrollbar-y",V="scrollbar-x",U="pane",T="auto",S="corner",R="on",Q="changeVisibility",P="scroll",O="_computeScrollbars",N="off",G="scrollY",M="qx.ui.core.scroll.AbstractScrollArea",J="abstract",E="update",D="scrollX",I="mousewheel",H="scrollbarY",K="scrollbarX",C="horizontal",L="scrollarea",F="vertical";
qx.Class.define(M,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:J,construct:function(){qx.ui.core.Widget.call(this);
var i=new qx.ui.layout.Grid();
i.setColumnFlex(0,1);
i.setRowFlex(0,1);
this._setLayout(i);
this.addListener(I,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:L},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[T,R,N],init:T,themeable:true,apply:O},scrollbarY:{check:[T,R,N],init:T,themeable:true,apply:O},scrollbar:{group:[K,H]}},members:{_createChildControlImpl:function(b){var c;

switch(b){case U:c=new qx.ui.core.scroll.ScrollPane();
c.addListener(E,this._computeScrollbars,this);
c.addListener(D,this._onScrollPaneX,this);
c.addListener(G,this._onScrollPaneY,this);
this._add(c,{row:0,column:0});
break;
case V:c=this._createScrollBar(C);
c.setMinWidth(0);
c.exclude();
c.addListener(P,this._onScrollBarX,this);
c.addListener(Q,this._onChangeScrollbarXVisibility,this);
this._add(c,{row:1,column:0});
break;
case W:c=this._createScrollBar(F);
c.setMinHeight(0);
c.exclude();
c.addListener(P,this._onScrollBarY,this);
c.addListener(Q,this._onChangeScrollbarYVisibility,this);
this._add(c,{row:0,column:1});
break;
case S:c=new qx.ui.core.Widget();
c.setWidth(0);
c.setHeight(0);
c.exclude();
this._add(c,{row:1,column:1});
break;
}return c||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,b);
},getPaneSize:function(){return this.getChildControl(U).getInnerSize();
},getItemTop:function(d){return this.getChildControl(U).getItemTop(d);
},getItemBottom:function(g){return this.getChildControl(U).getItemBottom(g);
},getItemLeft:function(a){return this.getChildControl(U).getItemLeft(a);
},getItemRight:function(h){return this.getChildControl(U).getItemRight(h);
},scrollToX:function(n){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollTo(n);
},scrollByX:function(l){qx.ui.core.queue.Manager.flush();
this.getChildControl(V).scrollBy(l);
},getScrollX:function(){var B=this.getChildControl(V,true);
return B?B.getPosition():0;
},scrollToY:function(f){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollTo(f);
},scrollByY:function(m){qx.ui.core.queue.Manager.flush();
this.getChildControl(W).scrollBy(m);
},getScrollY:function(){var ba=this.getChildControl(W,true);
return ba?ba.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(U).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(U).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var p=this._isChildControlVisible(V);
var q=this._isChildControlVisible(W);
var o=(q)?this.getChildControl(W,true):(p?this.getChildControl(V,true):null);

if(o){o.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var X=this._isChildControlVisible(V);
var Y=this._isChildControlVisible(W);

if(!X){this.scrollToX(0);
}X&&Y?this._showChildControl(S):this._excludeChildControl(S);
},_onChangeScrollbarYVisibility:function(e){var j=this._isChildControlVisible(V);
var k=this._isChildControlVisible(W);

if(!k){this.scrollToY(0);
}j&&k?this._showChildControl(S):this._excludeChildControl(S);
},_computeScrollbars:function(){var x=this.getChildControl(U);
var content=x.getChildren()[0];

if(!content){this._excludeChildControl(V);
this._excludeChildControl(W);
return;
}var r=this.getInnerSize();
var w=x.getInnerSize();
var u=x.getScrollSize();
if(!w||!u){return;
}var y=this.getScrollbarX();
var z=this.getScrollbarY();

if(y===T&&z===T){var v=u.width>r.width;
var A=u.height>r.height;
if((v||A)&&!(v&&A)){if(v){A=u.height>w.height;
}else if(A){v=u.width>w.width;
}}}else{var v=y===R;
var A=z===R;
if(u.width>(v?w.width:r.width)&&y===T){v=true;
}
if(u.height>(v?w.height:r.height)&&z===T){A=true;
}}if(v){var t=this.getChildControl(V);
t.show();
t.setMaximum(Math.max(0,u.width-w.width));
t.setKnobFactor(w.width/u.width);
}else{this._excludeChildControl(V);
}
if(A){var s=this.getChildControl(W);
s.show();
s.setMaximum(Math.max(0,u.height-w.height));
s.setKnobFactor(w.height/u.height);
}else{this._excludeChildControl(W);
}}}});
})();
(function(){var b="qx.ui.core.IMultiSelection";
qx.Interface.define(b,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(a){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var F="single",E="Boolean",D="one",C="changeSelection",B="mouseup",A="mousedown",z="losecapture",y="multi",x="_applyQuickSelection",w="mouseover",p="_applySelectionMode",v="_applyDragSelection",s="qx.ui.core.MMultiSelectionHandling",o="removeItem",n="__iD",r="keypress",q="qx.event.type.Data",t="addItem",m="additive",u="mousemove";
qx.Mixin.define(s,{construct:function(){var f=this.SELECTION_MANAGER;
var d=this.__iD=new f(this);
this.addListener(A,d.handleMouseDown,d);
this.addListener(B,d.handleMouseUp,d);
this.addListener(w,d.handleMouseOver,d);
this.addListener(u,d.handleMouseMove,d);
this.addListener(z,d.handleLoseCapture,d);
this.addListener(r,d.handleKeyPress,d);
this.addListener(t,d.handleAddItem,d);
this.addListener(o,d.handleRemoveItem,d);
d.addListener(C,this._onSelectionChange,this);
},events:{"changeSelection":q},properties:{selectionMode:{check:[F,y,m,D],init:F,apply:p},dragSelection:{check:E,init:false,apply:v},quickSelection:{check:E,init:false,apply:x}},members:{__iD:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__iD.selectAll();
},isSelected:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not test if "+a+" is selected, because it is not a child element!");
}return this.__iD.isItemSelected(a);
},addToSelection:function(b){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,b)){throw new Error("Could not add + "+b+" to selection, because it is not a child element!");
}this.__iD.addItem(b);
},removeFromSelection:function(c){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,c)){throw new Error("Could not remove "+c+" from selection, because it is not a child element!");
}this.__iD.removeItem(c);
},selectRange:function(G,H){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__iD.selectItemRange(G,H);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__iD.clearSelection();
},setSelection:function(I){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<I.length;i++){if(!qx.ui.core.Widget.contains(this,I[i])){throw new Error("Could not select "+I[i]+", because it is not a child element!");
}}
if(I.length===0){this.resetSelection();
}else{var J=this.getSelection();

if(!qx.lang.Array.equals(J,I)){this.__iD.replaceSelection(I);
}}},getSelection:function(){return this.__iD.getSelection();
},getSortedSelection:function(){return this.__iD.getSortedSelection();
},isSelectionEmpty:function(){return this.__iD.isSelectionEmpty();
},getSelectionContext:function(){return this.__iD.getSelectionContext();
},_getManager:function(){return this.__iD;
},getSelectables:function(){return this.__iD.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__iD.invertSelection();
},_getLeadItem:function(){var g=this.__iD.getMode();

if(g===F||g===D){return this.__iD.getSelectedItem();
}else{return this.__iD.getLeadItem();
}},_applySelectionMode:function(K,L){this.__iD.setMode(K);
},_applyDragSelection:function(h,j){this.__iD.setDrag(h);
},_applyQuickSelection:function(k,l){this.__iD.setQuick(k);
},_onSelectionChange:function(e){this.fireDataEvent(C,e.getData());
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__iE:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__iF:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__iF[name];
s[t]();
}else{var u=this.__iE[name];
s[u](q);
}}}});
})();
(function(){var cq="one",cp="single",co="selected",cn="additive",cm="multi",cl="PageUp",ck="under",cj="Left",ci="lead",ch="Down",cR="Up",cQ="Boolean",cP="PageDown",cO="anchor",cN="End",cM="Home",cL="Right",cK="right",cJ="click",cI="above",cx="left",cy="Escape",cv="drag",cw="Space",ct="__iN",cu="A",cr="_applyMode",cs="qx.debug",cz="interval",cA="changeSelection",cD="Please use public 'getLeadItem' instead.",cC="qx.event.type.Data",cF="quick",cE="key",cH="abstract",cG="on",cB="qx.ui.core.selection.Abstract";
qx.Class.define(cB,{type:cH,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iK={};
},events:{"changeSelection":cC},properties:{mode:{check:[cp,cm,cn,cq],init:cp,apply:cr},drag:{check:cQ,init:false},quick:{check:cQ,init:false}},members:{__iL:0,__iM:0,__iN:null,__iO:null,__iP:null,__iQ:null,__iR:null,__iS:null,__iT:null,__iU:null,__iV:null,__iW:null,__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__iK:null,__jd:null,__je:null,getSelectionContext:function(){return this.__jb;
},selectAll:function(){var z=this.getMode();

if(z==cp||z==cq){throw new Error("Can not select all items in selection mode: "+z);
}this._selectAllItems();
this._fireChange();
},selectItem:function(N){this._setSelectedItem(N);
var O=this.getMode();

if(O!==cp&&O!==cq){this._setLeadItem(N);
this._setAnchorItem(N);
}this._scrollItemIntoView(N);
this._fireChange();
},addItem:function(o){var p=this.getMode();

if(p===cp||p===cq){this._setSelectedItem(o);
}else{if(!this._getAnchorItem()){this._setAnchorItem(o);
}this._setLeadItem(o);
this._addToSelection(o);
}this._scrollItemIntoView(o);
this._fireChange();
},removeItem:function(R){this._removeFromSelection(R);

if(this.getMode()===cq&&this.isSelectionEmpty()){var S=this._getFirstSelectable();

if(S){this.addItem(S);
}if(S==R){return;
}}
if(this.getLeadItem()==R){this._setLeadItem(null);
}
if(this._getAnchorItem()==R){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(D,E){var F=this.getMode();

if(F==cp||F==cq){throw new Error("Can not select multiple items in selection mode: "+F);
}this._selectItemRange(D,E);
this._setAnchorItem(D);
this._setLeadItem(E);
this._scrollItemIntoView(E);
this._fireChange();
},clearSelection:function(){if(this.getMode()==cq){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bL){var bM=this.getMode();

if(bM==cq||bM===cp){if(bL.length>1){throw new Error("Could not select more than one items in mode: "+bM+"!");
}
if(bL.length==1){this.selectItem(bL[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bL);
}},getSelectedItem:function(){var bs=this.getMode();

if(bs===cp||bs===cq){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__iK);
},getSortedSelection:function(){var H=this.getSelectables();
var G=qx.lang.Object.getValues(this.__iK);
G.sort(function(a,b){return H.indexOf(a)-H.indexOf(b);
});
return G;
},isItemSelected:function(m){var n=this._selectableToHashCode(m);
return this.__iK[n]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__iK);
},invertSelection:function(){var bP=this.getMode();

if(bP===cp||bP===cq){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bO=this.getSelectables();

for(var i=0;i<bO.length;i++){this._toggleInSelection(bO[i]);
}this._fireChange();
},_setLeadItem:function(cV){var cW=this.__jc;

if(cW!==null){this._styleSelectable(cW,ci,false);
}
if(cV!==null){this._styleSelectable(cV,ci,true);
}this.__jc=cV;
},_getLeadItem:function(){if(qx.core.Variant.isSet(cs,cG)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cD);
}return this.getLeadItem();
},getLeadItem:function(){return this.__jc!==null?this.__jc:null;
},_setAnchorItem:function(bt){var bu=this.__jd;

if(bu){this._styleSelectable(bu,cO,false);
}
if(bt){this._styleSelectable(bt,cO,true);
}this.__jd=bt;
},_getAnchorItem:function(){return this.__jd!==null?this.__jd:null;
},_isSelectable:function(T){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var t=event.getTarget();
return this._isSelectable(t)?t:null;
},_selectableToHashCode:function(bH){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(w,x,y){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(J){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(I){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cT,cU){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(cS){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(u,v){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(P,Q){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bm,bn){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(K,L){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(K===cq){var M=this._getFirstSelectable();

if(M){this._setSelectedItem(M);
this._scrollItemIntoView(M);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bR=this.getMode();

if(bR!==cq&&bR!==cp){return;
}var bQ=this._getSelectableFromMouseEvent(event);

if(bQ===null){return;
}this._setSelectedItem(bQ);
this._fireChange(cF);
},handleMouseDown:function(event){var bi=this._getSelectableFromMouseEvent(event);

if(bi===null){return;
}var bk=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bh=event.isShiftPressed();
if(this.isItemSelected(bi)&&!bh&&!bk&&!this.getDrag()){this.__je=bi;
return;
}else{this.__je=null;
}this._scrollItemIntoView(bi);
switch(this.getMode()){case cp:case cq:this._setSelectedItem(bi);
break;
case cn:this._setLeadItem(bi);
this._setAnchorItem(bi);
this._toggleInSelection(bi);
break;
case cm:this._setLeadItem(bi);
if(bh){var bj=this._getAnchorItem();

if(bj===null){bj=this._getFirstSelectable();
this._setAnchorItem(bj);
}this._selectItemRange(bj,bi,bk);
}else if(bk){this._setAnchorItem(bi);
this._toggleInSelection(bi);
}else{this._setAnchorItem(bi);
this._setSelectedItem(bi);
}break;
}var bl=this.getMode();

if(this.getDrag()&&bl!==cp&&bl!==cq&&!bh&&!bk){this.__iR=this._getLocation();
this.__iO=this._getScroll();
this.__iS=event.getDocumentLeft()+this.__iO.left;
this.__iT=event.getDocumentTop()+this.__iO.top;
this.__iU=true;
this._capture();
}this._fireChange(cJ);
},handleMouseUp:function(event){var br=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bo=event.isShiftPressed();

if(!br&&!bo&&this.__je){var bp=this._getSelectableFromMouseEvent(event);

if(bp===null||!this.isItemSelected(bp)){return;
}var bq=this.getMode();

if(bq===cn){this._removeFromSelection(bp);
}else{this._setSelectedItem(bp);

if(this.getMode()===cm){this._setLeadItem(bp);
this._setAnchorItem(bp);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__iU){return;
}this.__iV=event.getDocumentLeft();
this.__iW=event.getDocumentTop();
var cY=this.__iV+this.__iO.left;

if(cY>this.__iS){this.__iX=1;
}else if(cY<this.__iS){this.__iX=-1;
}else{this.__iX=0;
}var cX=this.__iW+this.__iO.top;

if(cX>this.__iT){this.__iY=1;
}else if(cX<this.__iT){this.__iY=-1;
}else{this.__iY=0;
}var location=this.__iR;

if(this.__iV<location.left){this.__iL=this.__iV-location.left;
}else if(this.__iV>location.right){this.__iL=this.__iV-location.right;
}else{this.__iL=0;
}
if(this.__iW<location.top){this.__iM=this.__iW-location.top;
}else if(this.__iW>location.bottom){this.__iM=this.__iW-location.bottom;
}else{this.__iM=0;
}if(!this.__iN){this.__iN=new qx.event.Timer(100);
this.__iN.addListener(cz,this._onInterval,this);
}this.__iN.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var bN=e.getData();

if(this.getMode()===cq&&this.isSelectionEmpty()){this.addItem(bN);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__iU){return;
}if(this.__ja){this._fireChange(cJ);
}delete this.__iU;
delete this.__iP;
delete this.__iQ;
this._releaseCapture();
if(this.__iN){this.__iN.stop();
}},_onInterval:function(e){this._scrollBy(this.__iL,this.__iM);
this.__iO=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var bd=this._getDimension();
var V=Math.max(0,Math.min(this.__iV-this.__iR.left,bd.width))+this.__iO.left;
var U=Math.max(0,Math.min(this.__iW-this.__iR.top,bd.height))+this.__iO.top;
if(this.__iP===V&&this.__iQ===U){return;
}this.__iP=V;
this.__iQ=U;
var bf=this._getAnchorItem();
var X=bf;
var bb=this.__iX;
var be,W;

while(bb!==0){be=bb>0?this._getRelatedSelectable(X,cK):this._getRelatedSelectable(X,cx);
if(be!==null){W=this._getSelectableLocationX(be);
if((bb>0&&W.left<=V)||(bb<0&&W.right>=V)){X=be;
continue;
}}break;
}var bc=this.__iY;
var ba,Y;

while(bc!==0){ba=bc>0?this._getRelatedSelectable(X,ck):this._getRelatedSelectable(X,cI);
if(ba!==null){Y=this._getSelectableLocationY(ba);
if((bc>0&&Y.top<=U)||(bc<0&&Y.bottom>=U)){X=ba;
continue;
}}break;
}var bg=this.getMode();

if(bg===cm){this._selectItemRange(bf,X);
}else if(bg===cn){if(this.isItemSelected(bf)){this._selectItemRange(bf,X,true);
}else{this._deselectItemRange(bf,X);
}this._setAnchorItem(X);
}this._fireChange(cv);
},__jf:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var bA,bz;
var bC=event.getKeyIdentifier();
var bB=this.getMode();
var bw=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bx=event.isShiftPressed();
var by=false;

if(bC===cu&&bw){if(bB!==cp&&bB!==cq){this._selectAllItems();
by=true;
}}else if(bC===cy){if(bB!==cp&&bB!==cq){this._clearSelection();
by=true;
}}else if(bC===cw){var bv=this.getLeadItem();

if(bv&&!bx){if(bw||bB===cn){this._toggleInSelection(bv);
}else{this._setSelectedItem(bv);
}by=true;
}}else if(this.__jf[bC]){by=true;

if(bB===cp||bB==cq){bA=this._getSelectedItem();
}else{bA=this.getLeadItem();
}
if(bA!==null){switch(bC){case cM:bz=this._getFirstSelectable();
break;
case cN:bz=this._getLastSelectable();
break;
case cR:bz=this._getRelatedSelectable(bA,cI);
break;
case ch:bz=this._getRelatedSelectable(bA,ck);
break;
case cj:bz=this._getRelatedSelectable(bA,cx);
break;
case cL:bz=this._getRelatedSelectable(bA,cK);
break;
case cl:bz=this._getPage(bA,true);
break;
case cP:bz=this._getPage(bA,false);
break;
}}else{switch(bC){case cM:case ch:case cL:case cP:bz=this._getFirstSelectable();
break;
case cN:case cR:case cj:case cl:bz=this._getLastSelectable();
break;
}}if(bz!==null){switch(bB){case cp:case cq:this._setSelectedItem(bz);
break;
case cn:this._setLeadItem(bz);
break;
case cm:if(bx){var bD=this._getAnchorItem();

if(bD===null){this._setAnchorItem(bD=this._getFirstSelectable());
}this._setLeadItem(bz);
this._selectItemRange(bD,bz,bw);
}else{this._setAnchorItem(bz);
this._setLeadItem(bz);

if(!bw){this._setSelectedItem(bz);
}}break;
}this._scrollItemIntoView(bz);
}}
if(by){event.stop();
this._fireChange(cE);
}},_selectAllItems:function(){var bI=this.getSelectables();

for(var i=0,l=bI.length;i<l;i++){this._addToSelection(bI[i]);
}},_clearSelection:function(){var bJ=this.__iK;

for(var bK in bJ){this._removeFromSelection(bJ[bK]);
}this.__iK={};
},_selectItemRange:function(ca,cb,cc){var cf=this._getSelectableRange(ca,cb);
if(!cc){var ce=this.__iK;
var cg=this.__jg(cf);

for(var cd in ce){if(!cg[cd]){this._removeFromSelection(ce[cd]);
}}}for(var i=0,l=cf.length;i<l;i++){this._addToSelection(cf[i]);
}},_deselectItemRange:function(A,B){var C=this._getSelectableRange(A,B);

for(var i=0,l=C.length;i<l;i++){this._removeFromSelection(C[i]);
}},__jg:function(bW){var bY={};
var bX;

for(var i=0,l=bW.length;i<l;i++){bX=bW[i];
bY[this._selectableToHashCode(bX)]=bX;
}return bY;
},_getSelectedItem:function(){for(var bG in this.__iK){return this.__iK[bG];
}return null;
},_setSelectedItem:function(q){if(this._isSelectable(q)){var r=this.__iK;
var s=this._selectableToHashCode(q);

if(!r[s]||qx.lang.Object.hasMinLength(r,2)){this._clearSelection();
this._addToSelection(q);
}}},_addToSelection:function(bS){var bT=this._selectableToHashCode(bS);

if(!this.__iK[bT]&&this._isSelectable(bS)){this.__iK[bT]=bS;
this._styleSelectable(bS,co,true);
this.__ja=true;
}},_toggleInSelection:function(bE){var bF=this._selectableToHashCode(bE);

if(!this.__iK[bF]){this.__iK[bF]=bE;
this._styleSelectable(bE,co,true);
}else{delete this.__iK[bF];
this._styleSelectable(bE,co,false);
}this.__ja=true;
},_removeFromSelection:function(bU){var bV=this._selectableToHashCode(bU);

if(this.__iK[bV]!=null){delete this.__iK[bV];
this._styleSelectable(bU,co,false);
this.__ja=true;
}},_replaceMultiSelection:function(c){var g=false;
var k,j;
var d={};

for(var i=0,l=c.length;i<l;i++){k=c[i];

if(this._isSelectable(k)){j=this._selectableToHashCode(k);
d[j]=k;
}}var f=k;
var h=this.__iK;

for(var j in h){if(d[j]){delete d[j];
}else{k=h[j];
delete h[j];
this._styleSelectable(k,co,false);
g=true;
}}for(var j in d){k=h[j]=d[j];
this._styleSelectable(k,co,true);
g=true;
}if(!g){return false;
}this._scrollItemIntoView(f);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__ja=true;
this._fireChange();
},_fireChange:function(da){if(this.__ja){this.__jb=da||null;
this.fireDataEvent(cA,this.getSelection());
delete this.__ja;
}}},destruct:function(){this._disposeObjects(ct);
this.__iK=this.__je=this.__jd=null;
this.__jc=null;
}});
})();
(function(){var B="vertical",A="under",z="above",y="qx.ui.core.selection.Widget",x="left",w="right";
qx.Class.define(y,{extend:qx.ui.core.selection.Abstract,construct:function(o){qx.ui.core.selection.Abstract.call(this);
this.__jh=o;
},members:{__jh:null,_isSelectable:function(K){return K.isEnabled()&&K.isVisible()&&K.getLayoutParent()===this.__jh;
},_selectableToHashCode:function(p){return p.$$hash;
},_styleSelectable:function(q,r,s){s?q.addState(r):q.removeState(r);
},_capture:function(){this.__jh.capture();
},_releaseCapture:function(){this.__jh.releaseCapture();
},_getWidget:function(){return this.__jh;
},_getLocation:function(){var v=this.__jh.getContentElement().getDomElement();
return v?qx.bom.element.Location.get(v):null;
},_getDimension:function(){return this.__jh.getInnerSize();
},_getSelectableLocationX:function(N){var O=N.getBounds();

if(O){return {left:O.left,right:O.left+O.width};
}},_getSelectableLocationY:function(C){var D=C.getBounds();

if(D){return {top:D.top,bottom:D.top+D.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(L,M){},_scrollItemIntoView:function(n){this.__jh.scrollChildIntoView(n);
},getSelectables:function(){var k=this.__jh.getChildren();
var m=[];
var j;

for(var i=0,l=k.length;i<l;i++){j=k[i];

if(j.isEnabled()&&j.isVisible()){m.push(j);
}}return m;
},_getSelectableRange:function(a,b){if(a===b){return [a];
}var f=this.__jh.getChildren();
var c=[];
var e=false;
var d;

for(var i=0,l=f.length;i<l;i++){d=f[i];

if(d===a||d===b){if(e){c.push(d);
break;
}else{e=true;
}}
if(e&&d.isEnabled()&&d.isVisible()){c.push(d);
}}return c;
},_getFirstSelectable:function(){var u=this.__jh.getChildren();

for(var i=0,l=u.length;i<l;i++){if(u[i].isEnabled()&&u[i].isVisible()){return u[i];
}}return null;
},_getLastSelectable:function(){var t=this.__jh.getChildren();

for(var i=t.length-1;i>0;i--){if(t[i].isEnabled()&&t[i].isVisible()){return t[i];
}}return null;
},_getRelatedSelectable:function(E,F){var I=this.__jh.getOrientation()===B;
var H=this.__jh.getChildren();
var G=H.indexOf(E);
var J;

if((I&&F===z)||(!I&&F===x)){for(var i=G-1;i>=0;i--){J=H[i];

if(J.isEnabled()&&J.isVisible()){return J;
}}}else if((I&&F===A)||(!I&&F===w)){for(var i=G+1;i<H.length;i++){J=H[i];

if(J.isEnabled()&&J.isVisible()){return J;
}}}return null;
},_getPage:function(g,h){if(h){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__jh=null;
}});
})();
(function(){var o="qx.ui.core.selection.ScrollArea";
qx.Class.define(o,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var a=this._getWidget();
return {left:a.getScrollX(),top:a.getScrollY()};
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
(function(){var n="right",m="above",l="left",k="under",j="qx.ui.tree.SelectionManager";
qx.Class.define(j,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(o){var p=o.getBounds();

if(p){var top=this._getWidget().getItemTop(o);
return {top:top,bottom:top+p.height};
}},_isSelectable:function(q){return q instanceof qx.ui.tree.AbstractTreeItem&&q.isEnabled()&&q.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var f=this._getWidget();
var g=[];

if(f.getRoot()!=null){var e=f.getRoot().getItems(true,false,f.getHideRoot());

for(var i=0;i<e.length;i++){if(this._isSelectable(e[i])){g.push(e[i]);
}}}return g;
},_getSelectableRange:function(r,s){if(r===s){return [r];
}var t=this.getSelectables();
var u=t.indexOf(r);
var v=t.indexOf(s);

if(u<0||v<0){return [];
}
if(u<v){return t.slice(u,v+1);
}else{return t.slice(v,u+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var h=this.getSelectables();

if(h.length>0){return h[h.length-1];
}else{return null;
}},_getRelatedSelectable:function(a,b){var c=this._getWidget();
var d=null;

switch(b){case m:d=c.getPreviousNodeOf(a,false);
break;
case k:d=c.getNextNodeOf(a,false);
break;
case l:case n:break;
}
if(!d){return null;
}
if(this._isSelectable(d)){return d;
}else{return this._getRelatedSelectable(d,b);
}}}});
})();
(function(){var F="dblclick",E="click",D="Boolean",C="excluded",B="qx.event.type.Data",A="visible",z="The invisible and stayInSameNestLevel parameters are deprecated: Use",y="undefined",x="_applyOpenMode",w="Space",X="Left",W="changeOpenMode",V="_applyRootOpenClose",U="changeSelection",T="qx.ui.tree.Tree",S="tree",R=" getPreviousNodeOf() instead.",Q="__ji",P="_applyHideRoot",O="changeRoot",M="_applyRoot",N=" getNextNodeOf() instead.",K="qx.ui.tree.AbstractTreeItem",L="Enter",I="keypress",J="none",G="pane",H="Right";
qx.Class.define(T,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__ji=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(G).add(this.__ji);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(U,this._onChangeSelection,this);
this.addListener(I,this._onKeyPress,this);
},events:{addItem:B,removeItem:B},properties:{openMode:{check:[E,F,J],init:F,apply:x,event:W,themeable:true},root:{check:K,init:null,nullable:true,event:O,apply:M},hideRoot:{check:D,init:false,apply:P},rootOpenClose:{check:D,init:false,apply:V},appearance:{refine:true,init:S},focusable:{refine:true,init:true}},members:{__ji:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__ji;
},_applyRoot:function(p,q){var r=this.getChildrenContainer();

if(q){r.remove(q);

if(q.hasChildren()){r.remove(q.getChildrenContainer());
}}
if(p){r.add(p);

if(p.hasChildren()){r.add(p.getChildrenContainer());
}p.setVisibility(this.getHideRoot()?C:A);
p.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(t,u){var v=this.getRoot();

if(!v){return;
}v.setVisibility(t?C:A);
v.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(bi,bj){var bk=this.getRoot();

if(!bk){return;
}bk.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__ji;
},getNextNodeOf:function(a,b){if((b!==false||a.isOpen())&&a.hasChildren()){return a.getChildren()[0];
}
while(a){var parent=a.getParent();

if(!parent){return null;
}var d=parent.getChildren();
var c=d.indexOf(a);

if(c>-1&&c<d.length-1){return d[c+1];
}a=parent;
}return null;
},getPreviousNodeOf:function(j,k){var parent=j.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==j){return null;
}}}else{if(j==this.getRoot()){return null;
}}var n=parent.getChildren();
var l=n.indexOf(j);

if(l>0){var m=n[l-1];

while((k!==false||m.isOpen())&&m.hasChildren()){var o=m.getChildren();
m=o[o.length-1];
}return m;
}else{return parent;
}},getNextSiblingOf:function(bd,be,bf){if(typeof (be)!==y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z+N);

if(!bf){return this.getNextNodeOf(bd,be);
}}
if(bd==this.getRoot()){return null;
}var parent=bd.getParent();
var bg=parent.getChildren();
var bh=bg.indexOf(bd);

if(bh<bg.length-1){return bg[bh+1];
}return null;
},getPreviousSiblingOf:function(bl,bm,bn){if(typeof (bm)!==y){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z+R);

if(!bn){return this.getPreviousNodeOf(bl,bm);
}}
if(bl==this.getRoot()){return null;
}var parent=bl.getParent();
var bo=parent.getChildren();
var bp=bo.indexOf(bl);

if(bp>0){return bo[bp-1];
}return null;
},getItems:function(f,g){if(this.getRoot()!=null){return this.getRoot().getItems(f,g,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(h){while(h){if(h==this){return null;
}
if(h instanceof qx.ui.tree.AbstractTreeItem){return h;
}h=h.getLayoutParent();
}return null;
},_applyOpenMode:function(Y,ba){if(ba==E){this.removeListener(E,this._onOpen,this);
}else if(ba==F){this.removeListener(F,this._onOpen,this);
}
if(Y==E){this.addListener(E,this._onOpen,this);
}else if(Y==F){this.addListener(F,this._onOpen,this);
}},_onOpen:function(e){var bq=this.getTreeItem(e.getTarget());

if(!bq||!bq.isOpenable()){return;
}bq.setOpen(!bq.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var bc=e.getData();
for(var i=0;i<bc.length;i++){var bb=bc[i];
while(bb.getParent()!=null){bb=bb.getParent();
bb.setOpen(true);
}}},_onKeyPress:function(e){var s=this._getLeadItem();

if(s!==null){switch(e.getKeyIdentifier()){case X:if(s.isOpenable()&&s.isOpen()){s.setOpen(false);
}break;
case H:if(s.isOpenable()&&!s.isOpen()){s.setOpen(true);
}break;
case L:case w:if(s.isOpenable()){s.toggleOpen();
}break;
}}}},destruct:function(){this._disposeObjects(Q);
}});
})();
(function(){var c="qx.ui.core.scroll.IScrollBar",b="qx.event.type.Data";
qx.Interface.define(c,{events:{"scroll":b},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(a){this.assertNumber(a);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var n="horizontal",m="px",l="scroll",k="vertical",j="-1px",i="qx.client",h="0",g="hidden",f="__jn",d="mousedown",C="qx.ui.core.scroll.NativeScrollBar",B="PositiveNumber",A="Integer",z="mousemove",y="_applyMaximum",x="_applyOrientation",w="appear",v="opera",u="PositiveInteger",t="mshtml",r="mouseup",s="Number",p="_applyPosition",q="scrollbar",o="native";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(S){qx.ui.core.Widget.call(this);
this.addState(o);
this.getContentElement().addListener(l,this._onScroll,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(z,this._stopPropagation,this);

if(qx.core.Variant.isSet(i,v)){this.addListener(w,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(S!=null){this.setOrientation(S);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[n,k],init:n,apply:x},maximum:{check:u,apply:y,init:100},position:{check:s,init:0,apply:p,event:l},singleStep:{check:A,init:20},knobFactor:{check:B,nullable:true}},members:{__jm:null,__jn:null,_getScrollPaneElement:function(){if(!this.__jn){this.__jn=new qx.html.Element();
}return this.__jn;
},renderLayout:function(T,top,U,V){var W=qx.ui.core.Widget.prototype.renderLayout.call(this,T,top,U,V);
this._updateScrollBar();
return W;
},_getContentHint:function(){var D=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__jm?100:D,maxWidth:this.__jm?null:D,minWidth:this.__jm?null:D,height:this.__jm?D:100,maxHeight:this.__jm?D:null,minHeight:this.__jm?D:null};
},_applyEnabled:function(O,P){qx.ui.core.Widget.prototype._applyEnabled.call(this,O,P);
this._updateScrollBar();
},_applyMaximum:function(a){this._updateScrollBar();
},_applyPosition:function(R){var content=this.getContentElement();

if(this.__jm){content.scrollToX(R);
}else{content.scrollToY(R);
}},_applyOrientation:function(G,H){var I=this.__jm=G===n;
this.set({allowGrowX:I,allowShrinkX:I,allowGrowY:!I,allowShrinkY:!I});

if(I){this.replaceState(k,n);
}else{this.replaceState(n,k);
}this.getContentElement().setStyles({overflowX:I?l:g,overflowY:I?g:l});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var L=this.__jm;
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
},scrollTo:function(J){this.setPosition(Math.max(0,Math.min(this.getMaximum(),J)));
},scrollBy:function(Q){this.scrollTo(this.getPosition()+Q);
},scrollBySteps:function(b){var c=this.getSingleStep();
this.scrollBy(b*c);
},_onScroll:function(e){var F=this.getContentElement();
var E=this.__jm?F.getScrollX():F.getScrollY();
this.setPosition(E);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var s="slider",r="horizontal",q="button-begin",p="vertical",o="button-end",n="Integer",m="execute",l="right",k="left",j="down",H="up",G="PositiveNumber",F="changeValue",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",D="_applyKnobFactor",C="knob",B="qx.ui.core.scroll.ScrollBar",A="resize",z="_applyOrientation",y="_applyPageStep",w="PositiveInteger",x="scroll",u="_applyPosition",v="scrollbar",t="_applyMaximum";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(O){qx.ui.core.Widget.call(this);
this._createChildControl(q);
this._createChildControl(s).addListener(A,this._onResizeSlider,this);
this._createChildControl(o);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:v},orientation:{check:[r,p],init:r,apply:z},maximum:{check:w,apply:t,init:100},position:{check:E,init:0,apply:u,event:x},singleStep:{check:n,init:20},pageStep:{check:n,init:10,apply:y},knobFactor:{check:G,apply:D,nullable:true}},members:{__jo:2,_createChildControlImpl:function(K){var L;

switch(K){case s:L=new qx.ui.core.scroll.ScrollSlider();
L.setPageStep(100);
L.setFocusable(false);
L.addListener(F,this._onChangeSliderValue,this);
this._add(L,{flex:1});
break;
case q:L=new qx.ui.form.RepeatButton();
L.setFocusable(false);
L.addListener(m,this._onExecuteBegin,this);
this._add(L);
break;
case o:L=new qx.ui.form.RepeatButton();
L.setFocusable(false);
L.addListener(m,this._onExecuteEnd,this);
this._add(L);
break;
}return L||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,K);
},_applyMaximum:function(I){this.getChildControl(s).setMaximum(I);
},_applyPosition:function(b){this.getChildControl(s).setValue(b);
},_applyKnobFactor:function(c){this.getChildControl(s).setKnobFactor(c);
},_applyPageStep:function(i){this.getChildControl(s).setPageStep(i);
},_applyOrientation:function(P,Q){var R=this._getLayout();

if(R){R.dispose();
}if(P===r){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(p,r);
this.getChildControl(q).replaceState(H,k);
this.getChildControl(o).replaceState(j,l);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(r,p);
this.getChildControl(q).replaceState(k,H);
this.getChildControl(o).replaceState(l,j);
}this.getChildControl(s).setOrientation(P);
},scrollTo:function(J){this.getChildControl(s).slideTo(J);
},scrollBy:function(a){this.getChildControl(s).slideBy(a);
},scrollBySteps:function(M){var N=this.getSingleStep();
this.getChildControl(s).slideBy(M*N);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var d=this.getChildControl(s).getChildControl(C);
var h=d.getSizeHint();
var f=false;
var g=this.getChildControl(s).getInnerSize();

if(this.getOrientation()==p){if(g.height<h.minHeight+this.__jo){f=true;
}}else{if(g.width<h.minWidth+this.__jo){f=true;
}}
if(f){d.exclude();
}else{d.show();
}}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(c){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(d){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",U="mousemove",T="resize",S="slider",R="mousedown",Q="PageUp",P="mouseout",O="changeValue",N="Left",M="Down",L="Up",r="dblclick",s="qx.ui.form.Slider",p="PageDown",q="mousewheel",n="interval",o="_applyValue",l="_applyKnobFactor",m="End",t="height",u="Right",B="width",z="_applyOrientation",F="Home",D="mouseover",H="floor",G="_applyMinimum",w="click",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",J="keypress",I="ceil",v="losecapture",x="contextmenu",y="_applyMaximum",A="Number",C="changeMaximum",E="changeMinimum";
qx.Class.define(s,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bG){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(J,this._onKeyPress);
this.addListener(q,this._onMouseWheel);
this.addListener(R,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(v,this._onMouseUp);
this.addListener(T,this._onUpdate);
this.addListener(x,this._onStopEvent);
this.addListener(w,this._onStopEvent);
this.addListener(r,this._onStopEvent);
if(bG!=null){this.setOrientation(bG);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:S},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:z},value:{check:K,init:0,apply:o,event:O,nullable:true},minimum:{check:h,init:0,apply:G,event:E},maximum:{check:h,init:100,apply:y,event:C},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:A,apply:l,nullable:true}},members:{__jp:null,__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bN){var bO;

switch(bN){case k:bO=new qx.ui.core.Widget();
bO.addListener(T,this._onUpdate,this);
bO.addListener(D,this._onMouseOver);
bO.addListener(P,this._onMouseOut);
this._add(bO);
break;
}return bO||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bN);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bV=e.getWheelDelta()>0?1:-1;
this.slideBy(bV*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bI=this.getOrientation()===j;
var bH=bI?N:L;
var forward=bI?u:M;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bH:this.slideBack();
break;
case p:this.slidePageForward();
break;
case Q:this.slidePageBack();
break;
case F:this.slideToBegin();
break;
case m:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__js){return;
}var bR=this.__jz;
var bP=this.getChildControl(k);
var bQ=bR?f:d;
var bT=bR?e.getDocumentLeft():e.getDocumentTop();
var bU=this.__jp=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bQ];
var bS=this.__jq=qx.bom.element.Location.get(bP.getContainerElement().getDomElement())[bQ];

if(e.getTarget()===bP){this.__js=true;
this.__jt=bT+bU-bS;
bP.addState(b);
}else{this.__ju=true;
this.__jv=bT<=bS?-1:1;
this.__jA(e);
this._onInterval();
if(!this.__jx){this.__jx=new qx.event.Timer(100);
this.__jx.addListener(n,this._onInterval,this);
}this.__jx.start();
}this.addListener(U,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__js){this.releaseCapture();
delete this.__js;
delete this.__jt;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__jz){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__jp);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__jp);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__jr||bp<0||bp>this.__jr){this.getChildControl(k).removeState(g);
}}}else if(this.__ju){this.__jx.stop();
this.releaseCapture();
delete this.__ju;
delete this.__jv;
delete this.__jw;
}this.removeListener(U,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__js){var ca=this.__jz?e.getDocumentLeft():e.getDocumentTop();
var bY=ca-this.__jt;
this.slideTo(this._positionToValue(bY));
}else if(this.__ju){this.__jA(e);
}e.stopPropagation();
},_onInterval:function(e){var bm=this.getValue()+(this.__jv*this.getPageStep());
if(bm<this.getMinimum()){bm=this.getMinimum();
}else if(bm>this.getMaximum()){bm=this.getMaximum();
}var bn=this.__jv==-1;

if((bn&&bm<=this.__jw)||(!bn&&bm>=this.__jw)){bm=this.__jw;
}this.slideTo(bm);
},_onUpdate:function(e){var bC=this.getInnerSize();
var bD=this.getChildControl(k).getBounds();
var bB=this.__jz?B:t;
this._updateKnobSize();
this.__jy=bC[bB]-bD[bB];
this.__jr=bD[bB];
this._updateKnobPosition();
},__jz:false,__jy:0,__jA:function(e){var V=this.__jz;
var bd=V?e.getDocumentLeft():e.getDocumentTop();
var bf=this.__jp;
var W=this.__jq;
var bh=this.__jr;
var be=bd-bf;

if(bd>=W){be-=bh;
}var bb=this._positionToValue(be);
var X=this.getMinimum();
var Y=this.getMaximum();

if(bb<X){bb=X;
}else if(bb>Y){bb=Y;
}else{var bc=this.getValue();
var ba=this.getPageStep();
var bg=this.__jv<0?H:I;
bb=bc+(Math[bg]((bb-bc)/ba)*ba);
}if(this.__jw==null||(this.__jv==-1&&bb<=this.__jw)||(this.__jv==1&&bb>=this.__jw)){this.__jw=bb;
}},_positionToValue:function(bi){var bj=this.__jy;
if(bj==null||bj==0){return 0;
}var bl=bi/bj;

if(bl<0){bl=0;
}else if(bl>1){bl=1;
}var bk=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bk*bl);
},_valueToPosition:function(br){var bs=this.__jy;

if(bs==null){return 0;
}var bt=this.getMaximum()-this.getMinimum();
if(bt==0){return 0;
}var br=br-this.getMinimum();
var bu=br/bt;

if(bu<0){bu=0;
}else if(bu>1){bu=1;
}return Math.round(bs*bu);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bJ){var bK=this.getChildControl(k).getContainerElement();

if(this.__jz){bK.setStyle(f,bJ+a,true);
}else{bK.setStyle(d,bJ+a,true);
}},_updateKnobSize:function(){var bF=this.getKnobFactor();

if(bF==null){return;
}var bE=this.getInnerSize();

if(bE==null){return;
}if(this.__jz){this.getChildControl(k).setWidth(Math.round(bF*bE.width));
}else{this.getChildControl(k).setHeight(Math.round(bF*bE.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bv){this.slideTo(this.getValue()+bv);
},slideTo:function(cd){if(cd<this.getMinimum()){cd=this.getMinimum();
}else if(cd>this.getMaximum()){cd=this.getMaximum();
}else{cd=this.getMinimum()+Math.round((cd-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(cd);
},_applyOrientation:function(by,bz){var bA=this.getChildControl(k);
this.__jz=by===j;
if(this.__jz){this.removeState(i);
bA.removeState(i);
this.addState(j);
bA.addState(j);
bA.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
bA.removeState(j);
this.addState(i);
bA.addState(i);
bA.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(bL,bM){if(bL!=null){this._updateKnobSize();
}else{if(this.__jz){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(bw,bx){if(bw!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(bW,bX){if(this.getValue()<bW){this.setValue(bW);
}this._updateKnobPosition();
},_applyMaximum:function(cb,cc){if(this.getValue()>cb){this.setValue(cb);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){qx.ui.form.Slider.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var dP="top",dO="left",dN="qx.debug",dM="bottom",dL="hAlign",dK="vAlign",dJ="Integer",dI="_applyLayoutChange",dH="center",dG="middle",ef="right",ee="flex",ed="on",ec="height",eb="' is not supported by the Grid layout!",ea="Invalid parameter 'column'",dY="The property '",dX="Value must be positive",dW="qx.ui.layout.Grid",dV="maxHeight",dT="width",dU="minHeight",dR="minWidth",dS="maxWidth",dQ="Invalid parameter 'row'";
qx.Class.define(dW,{extend:qx.ui.layout.Abstract,construct:function(co,cp){qx.ui.layout.Abstract.call(this);
this.__kn=[];
this.__ko=[];

if(co){this.setSpacingX(co);
}
if(cp){this.setSpacingY(cp);
}},properties:{spacingX:{check:dJ,init:0,apply:dI},spacingY:{check:dJ,init:0,apply:dI}},members:{__kp:null,__kn:null,__ko:null,__kq:null,__kr:null,__ks:null,__kt:null,__ku:null,__kv:null,verifyLayoutProperty:qx.core.Variant.select(dN,{"on":function(dD,name,dE){var dF={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(dF[name]==1,dY+name+eb);
this.assertInteger(dE);
this.assert(dE>=0,dX);
},"off":null}),__kw:function(){var cJ=[];
var cI=[];
var cK=[];
var cG=-1;
var cF=-1;
var cM=this._getLayoutChildren();

for(var i=0,l=cM.length;i<l;i++){var cH=cM[i];
var cL=cH.getLayoutProperties();
var cN=cL.row;
var cE=cL.column;
cL.colSpan=cL.colSpan||1;
cL.rowSpan=cL.rowSpan||1;
if(cN==null||cE==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+cH+"' must be defined!");
}
if(cJ[cN]&&cJ[cN][cE]){throw new Error("Cannot add widget '"+cH+"'!. "+"There is already a widget '"+cJ[cN][cE]+"' in this cell ("+cN+", "+cE+")");
}
for(var x=cE;x<cE+cL.colSpan;x++){for(var y=cN;y<cN+cL.rowSpan;y++){if(cJ[y]==undefined){cJ[y]=[];
}cJ[y][x]=cH;
cF=Math.max(cF,x);
cG=Math.max(cG,y);
}}
if(cL.rowSpan>1){cK.push(cH);
}
if(cL.colSpan>1){cI.push(cH);
}}for(var y=0;y<=cG;y++){if(cJ[y]==undefined){cJ[y]=[];
}}this.__kp=cJ;
this.__kq=cI;
this.__kr=cK;
this.__ks=cG;
this.__kt=cF;
this.__ku=null;
this.__kv=null;
delete this._invalidChildrenCache;
},_setRowData:function(cW,cX,cY){var da=this.__kn[cW];

if(!da){this.__kn[cW]={};
this.__kn[cW][cX]=cY;
}else{da[cX]=cY;
}},_setColumnData:function(w,z,A){var B=this.__ko[w];

if(!B){this.__ko[w]={};
this.__ko[w][z]=A;
}else{B[z]=A;
}},setSpacing:function(h){this.setSpacingY(h);
this.setSpacingX(h);
return this;
},setColumnAlign:function(ds,dt,du){if(qx.core.Variant.isSet(dN,ed)){this.assertInteger(ds,ea);
this.assertInArray(dt,[dO,dH,ef]);
this.assertInArray(du,[dP,dG,dM]);
}this._setColumnData(ds,dL,dt);
this._setColumnData(ds,dK,du);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bF){var bG=this.__ko[bF]||{};
return {vAlign:bG.vAlign||dP,hAlign:bG.hAlign||dO};
},setRowAlign:function(e,f,g){if(qx.core.Variant.isSet(dN,ed)){this.assertInteger(e,dQ);
this.assertInArray(f,[dO,dH,ef]);
this.assertInArray(g,[dP,dG,dM]);
}this._setRowData(e,dL,f);
this._setRowData(e,dK,g);
this._applyLayoutChange();
return this;
},getRowAlign:function(eg){var eh=this.__kn[eg]||{};
return {vAlign:eh.vAlign||dP,hAlign:eh.hAlign||dO};
},getCellWidget:function(dv,dw){if(this._invalidChildrenCache){this.__kw();
}var dv=this.__kp[dv]||{};
return dv[dw]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__kw();
}return this.__ks+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__kw();
}return this.__kt+1;
},getCellAlign:function(bH,bI){var bO=dP;
var bM=dO;
var bN=this.__kn[bH];
var bK=this.__ko[bI];
var bJ=this.__kp[bH][bI];

if(bJ){var bL={vAlign:bJ.getAlignY(),hAlign:bJ.getAlignX()};
}else{bL={};
}if(bL.vAlign){bO=bL.vAlign;
}else if(bN&&bN.vAlign){bO=bN.vAlign;
}else if(bK&&bK.vAlign){bO=bK.vAlign;
}if(bL.hAlign){bM=bL.hAlign;
}else if(bK&&bK.hAlign){bM=bK.hAlign;
}else if(bN&&bN.hAlign){bM=bN.hAlign;
}return {vAlign:bO,hAlign:bM};
},setColumnFlex:function(c,d){this._setColumnData(c,ee,d);
this._applyLayoutChange();
return this;
},getColumnFlex:function(dz){var dA=this.__ko[dz]||{};
return dA.flex!==undefined?dA.flex:0;
},setRowFlex:function(bP,bQ){this._setRowData(bP,ee,bQ);
this._applyLayoutChange();
return this;
},getRowFlex:function(dp){var dq=this.__kn[dp]||{};
var dr=dq.flex!==undefined?dq.flex:0;
return dr;
},setColumnMaxWidth:function(bR,bS){this._setColumnData(bR,dS,bS);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(cS){var cT=this.__ko[cS]||{};
return cT.maxWidth!==undefined?cT.maxWidth:Infinity;
},setColumnWidth:function(cU,cV){this._setColumnData(cU,dT,cV);
this._applyLayoutChange();
return this;
},getColumnWidth:function(dx){var dy=this.__ko[dx]||{};
return dy.width!==undefined?dy.width:null;
},setColumnMinWidth:function(a,b){this._setColumnData(a,dR,b);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cO){var cP=this.__ko[cO]||{};
return cP.minWidth||0;
},setRowMaxHeight:function(ei,ej){this._setRowData(ei,dV,ej);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dm){var dn=this.__kn[dm]||{};
return dn.maxHeight||Infinity;
},setRowHeight:function(dB,dC){this._setRowData(dB,ec,dC);
this._applyLayoutChange();
return this;
},getRowHeight:function(cm){var cn=this.__kn[cm]||{};
return cn.height!==undefined?cn.height:null;
},setRowMinHeight:function(C,D){this._setRowData(C,dU,D);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(cQ){var cR=this.__kn[cQ]||{};
return cR.minHeight||0;
},__kx:function(ek){var eo=ek.getSizeHint();
var en=ek.getMarginLeft()+ek.getMarginRight();
var em=ek.getMarginTop()+ek.getMarginBottom();
var el={height:eo.height+em,width:eo.width+en,minHeight:eo.minHeight+em,minWidth:eo.minWidth+en,maxHeight:eo.maxHeight+em,maxWidth:eo.maxWidth+en};
return el;
},_fixHeightsRowSpan:function(E){var P=this.getSpacingY();

for(var i=0,l=this.__kr.length;i<l;i++){var H=this.__kr[i];
var J=this.__kx(H);
var K=H.getLayoutProperties();
var G=K.row;
var N=P*(K.rowSpan-1);
var F=N;
var M={};

for(var j=0;j<K.rowSpan;j++){var R=K.row+j;
var I=E[R];
var Q=this.getRowFlex(R);

if(Q>0){M[R]={min:I.minHeight,value:I.height,max:I.maxHeight,flex:Q};
}N+=I.height;
F+=I.minHeight;
}if(N<J.height){var O=qx.ui.layout.Util.computeFlexOffsets(M,J.height,N);

for(var j=0;j<K.rowSpan;j++){var L=O[G+j]?O[G+j].offset:0;
E[G+j].height+=L;
}}if(F<J.minHeight){var O=qx.ui.layout.Util.computeFlexOffsets(M,J.minHeight,F);

for(var j=0;j<K.rowSpan;j++){var L=O[G+j]?O[G+j].offset:0;
E[G+j].minHeight+=L;
}}}},_fixWidthsColSpan:function(cq){var cu=this.getSpacingX();

for(var i=0,l=this.__kq.length;i<l;i++){var cr=this.__kq[i];
var ct=this.__kx(cr);
var cw=cr.getLayoutProperties();
var cs=cw.column;
var cC=cu*(cw.colSpan-1);
var cv=cC;
var cx={};
var cz;

for(var j=0;j<cw.colSpan;j++){var cD=cw.column+j;
var cB=cq[cD];
var cA=this.getColumnFlex(cD);
if(cA>0){cx[cD]={min:cB.minWidth,value:cB.width,max:cB.maxWidth,flex:cA};
}cC+=cB.width;
cv+=cB.minWidth;
}if(cC<ct.width){var cy=qx.ui.layout.Util.computeFlexOffsets(cx,ct.width,cC);

for(var j=0;j<cw.colSpan;j++){cz=cy[cs+j]?cy[cs+j].offset:0;
cq[cs+j].width+=cz;
}}if(cv<ct.minWidth){var cy=qx.ui.layout.Util.computeFlexOffsets(cx,ct.minWidth,cv);

for(var j=0;j<cw.colSpan;j++){cz=cy[cs+j]?cy[cs+j].offset:0;
cq[cs+j].minWidth+=cz;
}}}},_getRowHeights:function(){if(this.__ku!=null){return this.__ku;
}var cd=[];
var bV=this.__ks;
var bU=this.__kt;

for(var ce=0;ce<=bV;ce++){var bW=0;
var bY=0;
var bX=0;

for(var cc=0;cc<=bU;cc++){var bT=this.__kp[ce][cc];

if(!bT){continue;
}var ca=bT.getLayoutProperties().rowSpan||0;

if(ca>1){continue;
}var cb=this.__kx(bT);

if(this.getRowFlex(ce)>0){bW=Math.max(bW,cb.minHeight);
}else{bW=Math.max(bW,cb.height);
}bY=Math.max(bY,cb.height);
}var bW=Math.max(bW,this.getRowMinHeight(ce));
var bX=this.getRowMaxHeight(ce);

if(this.getRowHeight(ce)!==null){var bY=this.getRowHeight(ce);
}else{var bY=Math.max(bW,Math.min(bY,bX));
}cd[ce]={minHeight:bW,height:bY,maxHeight:bX};
}
if(this.__kr.length>0){this._fixHeightsRowSpan(cd);
}this.__ku=cd;
return cd;
},_getColWidths:function(){if(this.__kv!=null){return this.__kv;
}var df=[];
var dc=this.__kt;
var de=this.__ks;

for(var dk=0;dk<=dc;dk++){var di=0;
var dh=0;
var dd=Infinity;

for(var dl=0;dl<=de;dl++){var db=this.__kp[dl][dk];

if(!db){continue;
}var dg=db.getLayoutProperties().colSpan||0;

if(dg>1){continue;
}var dj=this.__kx(db);

if(this.getColumnFlex(dk)>0){dh=Math.max(dh,dj.minWidth);
}else{dh=Math.max(dh,dj.width);
}di=Math.max(di,dj.width);
}var dh=Math.max(dh,this.getColumnMinWidth(dk));
var dd=this.getColumnMaxWidth(dk);

if(this.getColumnWidth(dk)!==null){var di=this.getColumnWidth(dk);
}else{var di=Math.max(dh,Math.min(di,dd));
}df[dk]={minWidth:dh,width:di,maxWidth:dd};
}
if(this.__kq.length>0){this._fixWidthsColSpan(df);
}this.__kv=df;
return df;
},_getColumnFlexOffsets:function(cf){var cg=this.getSizeHint();
var ck=cf-cg.width;

if(ck==0){return {};
}var ci=this._getColWidths();
var ch={};

for(var i=0,l=ci.length;i<l;i++){var cl=ci[i];
var cj=this.getColumnFlex(i);

if((cj<=0)||(cl.width==cl.maxWidth&&ck>0)||(cl.width==cl.minWidth&&ck<0)){continue;
}ch[i]={min:cl.minWidth,value:cl.width,max:cl.maxWidth,flex:cj};
}return qx.ui.layout.Util.computeFlexOffsets(ch,cf,cg.width);
},_getRowFlexOffsets:function(by){var bz=this.getSizeHint();
var bC=by-bz.height;

if(bC==0){return {};
}var bD=this._getRowHeights();
var bA={};

for(var i=0,l=bD.length;i<l;i++){var bE=bD[i];
var bB=this.getRowFlex(i);

if((bB<=0)||(bE.height==bE.maxHeight&&bC>0)||(bE.height==bE.minHeight&&bC<0)){continue;
}bA[i]={min:bE.minHeight,value:bE.height,max:bE.maxHeight,flex:bB};
}return qx.ui.layout.Util.computeFlexOffsets(bA,by,bz.height);
},renderLayout:function(S,T){if(this._invalidChildrenCache){this.__kw();
}var bi=qx.ui.layout.Util;
var V=this.getSpacingX();
var bc=this.getSpacingY();
var bn=this._getColWidths();
var bm=this._getColumnFlexOffsets(S);
var W=[];
var bp=this.__kt;
var U=this.__ks;
var bo;

for(var bq=0;bq<=bp;bq++){bo=bm[bq]?bm[bq].offset:0;
W[bq]=bn[bq].width+bo;
}var bf=this._getRowHeights();
var bh=this._getRowFlexOffsets(T);
var bw=[];

for(var bd=0;bd<=U;bd++){bo=bh[bd]?bh[bd].offset:0;
bw[bd]=bf[bd].height+bo;
}var bx=0;

for(var bq=0;bq<=bp;bq++){var top=0;

for(var bd=0;bd<=U;bd++){var bk=this.__kp[bd][bq];
if(!bk){top+=bw[bd]+bc;
continue;
}var X=bk.getLayoutProperties();
if(X.row!==bd||X.column!==bq){top+=bw[bd]+bc;
continue;
}var bv=V*(X.colSpan-1);

for(var i=0;i<X.colSpan;i++){bv+=W[bq+i];
}var bl=bc*(X.rowSpan-1);

for(var i=0;i<X.rowSpan;i++){bl+=bw[bd+i];
}var Y=bk.getSizeHint();
var bt=bk.getMarginTop();
var bj=bk.getMarginLeft();
var bg=bk.getMarginBottom();
var bb=bk.getMarginRight();
var be=Math.max(Y.minWidth,Math.min(bv-bj-bb,Y.maxWidth));
var bu=Math.max(Y.minHeight,Math.min(bl-bt-bg,Y.maxHeight));
var br=this.getCellAlign(bd,bq);
var bs=bx+bi.computeHorizontalAlignOffset(br.hAlign,be,bv,bj,bb);
var ba=top+bi.computeVerticalAlignOffset(br.vAlign,bu,bl,bt,bg);
bk.renderLayout(bs,ba,be,bu);
top+=bw[bd]+bc;
}bx+=W[bq]+V;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__kv=null;
this.__ku=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kw();
}var p=this._getColWidths();
var r=0,s=0;

for(var i=0,l=p.length;i<l;i++){var t=p[i];

if(this.getColumnFlex(i)>0){r+=t.minWidth;
}else{r+=t.width;
}s+=t.width;
}var u=this._getRowHeights();
var n=0,q=0;

for(var i=0,l=u.length;i<l;i++){var v=u[i];

if(this.getRowFlex(i)>0){n+=v.minHeight;
}else{n+=v.height;
}q+=v.height;
}var m=this.getSpacingX()*(p.length-1);
var k=this.getSpacingY()*(u.length-1);
var o={minWidth:r+m,width:s+m,minHeight:n+k,height:q+k};
return o;
}},destruct:function(){this.__kp=this.__kn=this.__ko=this.__kq=this.__kr=this.__kv=this.__ku=null;
}});
})();
(function(){var n="open",m="auto",k="qx.debug",j="middle",h="icon",g="label",f="on",d="changeOpen",c="excluded",b="visible",J="String",I="opened",H="always",G="qx.ui.tree.AbstractTreeItem",F="addItem",E="Boolean",D="Invalid child index: ",C="__kC",B="Integer",A="_applyIndent",u="changeOpenSymbolMode",v="_applyOpenSymbolMode",s="resize",t="",q="removeItem",r="__kF",o="__kB",p="abstract",w="never",x="_applyIcon",z="_applyOpen",y="_applyLabel";
qx.Class.define(G,{extend:qx.ui.core.Widget,type:p,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__kB=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:E,init:false,event:d,apply:z},openSymbolMode:{check:[H,w,m],init:m,event:u,apply:v},indent:{check:B,init:19,apply:A,themeable:true},parent:{check:G,nullable:true},icon:{check:J,apply:x,nullable:true,themeable:true},label:{check:J,apply:y,init:t}},members:{__kB:null,__kC:null,__kD:null,__kE:null,__kF:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bG){var bH;

switch(bG){case g:bH=new qx.ui.basic.Label().set({alignY:j,value:this.getLabel()});
break;
case h:bH=new qx.ui.basic.Image().set({alignY:j,source:this.getIcon()});
break;
case n:bH=new qx.ui.tree.FolderOpenButton().set({alignY:j});
bH.addListener(d,this._onChangeOpen,this);
bH.addListener(s,this._updateIndent,this);
break;
}return bH||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bG);
},getTree:function(){var bk=this;

while(bk.getParent()){bk=bk.getParent();
}var bj=bk.getLayoutParent()?bk.getLayoutParent().getLayoutParent():0;

if(bj&&bj instanceof qx.ui.core.scroll.ScrollPane){return bj.getLayoutParent();
}return null;
},addWidget:function(bn,bo){this._add(bn,bo);
},addSpacer:function(){if(!this.__kF){this.__kF=new qx.ui.core.Spacer();
}else{this._remove(this.__kF);
}this._add(this.__kF);
},addOpenButton:function(){this._add(this.getChildControl(n));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bP=this.getChildControl(h);

if(this.__kE){this._remove(bP);
}this._add(bP);
this.__kE=true;
},addLabel:function(bW){var bX=this.getChildControl(g);

if(this.__kD){this._remove(bX);
}
if(bW){this.setLabel(bW);
}else{bX.setValue(this.getLabel());
}this._add(bX);
this.__kD=true;
},addState:function(N){qx.ui.core.Widget.prototype.addState.call(this,N);
var P=this._getChildren();

for(var i=0,l=P.length;i<l;i++){var O=P[i];

if(O.addState){P[i].addState(N);
}}},removeState:function(bT){qx.ui.core.Widget.prototype.removeState.call(this,bT);
var bV=this._getChildren();

for(var i=0,l=bV.length;i<l;i++){var bU=bV[i];

if(bU.addState){bV[i].removeState(bT);
}}},_applyIcon:function(bw,bx){var by=this.getChildControl(h,true);

if(by){by.setSource(bw);
}},_applyLabel:function(K,L){var M=this.getChildControl(g,true);

if(M){M.setValue(K);
}},_applyOpen:function(br,bs){if(this.hasChildren()){this.getChildrenContainer().setVisibility(br?b:c);
}var open=this.getChildControl(n,true);

if(open){open.setOpen(br);
}br?this.addState(I):this.removeState(I);
},isOpenable:function(){var bF=this.getOpenSymbolMode();
return (bF===H||bF===m&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(n,true);

if(!open){return false;
}var a=this.getTree();

if(!a.getRootOpenClose()){if(a.getHideRoot()){if(a.getRoot()==this.getParent()){return false;
}}else{if(a.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bh,bi){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bg=0;
var open=this.getChildControl(n,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bf=open.getBounds();

if(bf){bg=bf.width;
}else{return;
}}else{open.exclude();
}}
if(this.__kF){this.__kF.setWidth((this.getLevel()+1)*this.getIndent()-bg);
}},_applyIndent:function(bl,bm){this._updateIndent();
},getLevel:function(){var bQ=this.getTree();

if(!bQ){return;
}var bR=this;
var bS=-1;

while(bR){bR=bR.getParent();
bS+=1;
}if(bQ.getHideRoot()){bS-=1;
}
if(!bQ.getRootOpenClose()){bS-=1;
}return bS;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__kC){this.__kC=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?b:c});
}return this.__kC;
},hasChildrenContainer:function(){return this.__kC;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__kB;
},hasChildren:function(){return this.__kB?this.__kB.length>0:false;
},getItems:function(S,T,U){if(U!==false){var V=[];
}else{var V=[this];
}var Y=this.hasChildren()&&(T!==false||this.isOpen());

if(Y){var X=this.getChildren();

if(S===false){V=V.concat(X);
}else{for(var i=0,W=X.length;i<W;i++){V=V.concat(X[i].getItems(S,T,false));
}}}return V;
},recursiveAddToWidgetQueue:function(){var bI=this.getItems(true,true,false);

for(var i=0,l=bI.length;i<l;i++){qx.ui.core.queue.Widget.add(bI[i]);
}},__kG:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bz){var bA=this.getChildrenContainer();
var bD=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bE=arguments[i];
var bC=bE.getParent();

if(bC){bC.remove(bE);
}bE.setParent(this);
var bB=this.hasChildren();
bA.add(bE);

if(bE.hasChildren()){bA.add(bE.getChildrenContainer());
}this.__kB.push(bE);

if(!bB){this.__kG();
}
if(bD){bE.recursiveAddToWidgetQueue();
bD.fireNonBubblingEvent(F,qx.event.type.Data,[bE]);
}}
if(bD){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bJ,bK){if(qx.core.Variant.isSet(k,f)){this.assert(bK<=this.__kB.length&&bK>=0,D+bK);
}
if(bK==this.__kB.length){this.add(bJ);
return;
}var bO=bJ.getParent();

if(bO){bO.remove(bJ);
}var bM=this.getChildrenContainer();
bJ.setParent(this);
var bN=this.hasChildren();
var bL=this.__kB[bK];
bM.addBefore(bJ,bL);

if(bJ.hasChildren()){bM.addAfter(bJ.getChildrenContainer(),bJ);
}qx.lang.Array.insertAt(this.__kB,bJ,bK);

if(!bN){this.__kG();
}
if(this.getTree()){bJ.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bp,bq){if(qx.core.Variant.isSet(k,f)){this.assert(this.__kB.indexOf(bq)>=0);
}this.addAt(bp,this.__kB.indexOf(bq));
},addAfter:function(Q,R){if(qx.core.Variant.isSet(k,f)){this.assert(this.__kB.indexOf(R)>=0);
}this.addAt(Q,this.__kB.indexOf(R)+1);
},addAtBegin:function(bt){this.addAt(bt,0);
},remove:function(ba){for(var i=0,l=arguments.length;i<l;i++){var be=arguments[i];

if(this.__kB.indexOf(be)==-1){this.warn("Cannot remove treeitem '"+be+"'. It is not a child of this tree item.");
return;
}var bb=this.getChildrenContainer();

if(be.hasChildrenContainer()){var bd=be.getChildrenContainer();

if(bb.getChildren().indexOf(bd)>=0){bb.remove(bd);
}}qx.lang.Array.remove(this.__kB,be);
be.setParent(null);
bb.remove(be);
}var bc=this.getTree();

if(bc){bc.fireNonBubblingEvent(q,qx.event.type.Data,[be]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bu){var bv=this.__kB[bu];

if(bv){this.remove(bv);
}},removeAll:function(){for(var i=this.__kB.length-1;i>=0;i--){this.remove(this.__kB[i]);
}}},destruct:function(){this._disposeArray(o);
this._disposeObjects(r,C);
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
(function(){var F="qx.event.type.Event",E="Boolean",D="queued",C="String",B="sending",A="receiving",z="aborted",y="failed",x="nocache",w="completed",bn="qx.io.remote.Response",bm="POST",bl="configured",bk="timeout",bj="GET",bi="Pragma",bh="no-url-params-on-post",bg="no-cache",bf="Cache-Control",be="Content-Type",M="text/plain",N="application/xml",K="application/json",L="text/html",I="qx.ioRemoteDebug",J="application/x-www-form-urlencoded",G="qx.io.remote.Exchange",H="Integer",O="X-Qooxdoo-Response-Type",P="HEAD",V="qx.io.remote.Request",U="qx.debug",X="_applyResponseType",W="_applyState",ba="text/javascript",Y="changeState",R="PUT",bd="_applyProhibitCaching",bc="",bb="_applyMethod",Q="DELETE",S="boolean",T="on";
qx.Class.define(V,{extend:qx.core.Object,construct:function(q,r,s){qx.core.Object.call(this);
this.__qc={};
this.__qd={};
this.__qe={};
this.__qf={};

if(q!==undefined){this.setUrl(q);
}
if(r!==undefined){this.setMethod(r);
}
if(s!==undefined){this.setResponseType(s);
}this.setProhibitCaching(true);
this.__qg=++qx.io.remote.Request.__qg;
},events:{"created":F,"configured":F,"sending":F,"receiving":F,"completed":bn,"aborted":F,"failed":bn,"timeout":bn},statics:{__qg:0},properties:{url:{check:C,init:bc},method:{check:[bj,bm,R,P,Q],apply:bb,init:bj},asynchronous:{check:E,init:true},data:{check:C,nullable:true},username:{check:C,nullable:true},password:{check:C,nullable:true},state:{check:[bl,D,B,A,w,z,bk,y],init:bl,apply:W,event:Y},responseType:{check:[M,ba,K,N,L],init:M,apply:X},timeout:{check:H,nullable:true},prohibitCaching:{check:function(v){return typeof v==S||v===bh;
},init:true,apply:bd},crossDomain:{check:E,init:false},fileUpload:{check:E,init:false},transport:{check:G,nullable:true},useBasicHttpAuth:{check:E,init:false}},members:{__qc:null,__qd:null,__qe:null,__qf:null,__qg:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
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
},__qh:function(e){var c=e.clone();
c.setTarget(this);
this.dispatchEvent(c);
},_onqueued:function(e){this.setState(D);
this.__qh(e);
},_onsending:function(e){this.setState(B);
this.__qh(e);
},_onreceiving:function(e){this.setState(A);
this.__qh(e);
},_oncompleted:function(e){this.setState(w);
this.__qh(e);
this.dispose();
},_onaborted:function(e){this.setState(z);
this.__qh(e);
this.dispose();
},_ontimeout:function(e){this.setState(bk);
this.__qh(e);
this.dispose();
},_onfailed:function(e){this.setState(y);
this.__qh(e);
this.dispose();
},_applyState:function(bt,bu){if(qx.core.Variant.isSet(U,T)){if(qx.core.Setting.get(I)){this.debug("State: "+bt);
}}},_applyProhibitCaching:function(l,m){if(!l){this.removeParameter(x);
this.removeRequestHeader(bi);
this.removeRequestHeader(bf);
return;
}if(l!==bh||this.getMethod()!=bm){this.setParameter(x,new Date().valueOf());
}else{this.removeParameter(x);
}this.setRequestHeader(bi,bg);
this.setRequestHeader(bf,bg);
},_applyMethod:function(i,j){if(i===bm){this.setRequestHeader(be,J);
}else{this.removeRequestHeader(be);
}var k=this.getProhibitCaching();
this._applyProhibitCaching(k,k);
},_applyResponseType:function(bv,bw){this.setRequestHeader(O,bv);
},setRequestHeader:function(n,o){this.__qc[n]=o;
},removeRequestHeader:function(bp){delete this.__qc[bp];
},getRequestHeader:function(p){return this.__qc[p]||null;
},getRequestHeaders:function(){return this.__qc;
},setParameter:function(f,g,h){if(h){this.__qe[f]=g;
}else{this.__qd[f]=g;
}},removeParameter:function(bq,br){if(br){delete this.__qe[bq];
}else{delete this.__qd[bq];
}},getParameter:function(a,b){if(b){return this.__qe[a]||null;
}else{return this.__qd[a]||null;
}},getParameters:function(bs){return (bs?this.__qe:this.__qd);
},setFormField:function(t,u){this.__qf[t]=u;
},removeFormField:function(d){delete this.__qf[d];
},getFormField:function(bo){return this.__qf[bo]||null;
},getFormFields:function(){return this.__qf;
},getSequenceNumber:function(){return this.__qg;
}},destruct:function(){this.setTransport(null);
this.__qc=this.__qd=this.__qe=this.__qf=null;
}});
})();
(function(){var h=".",g="qx.bom.client.Transport";
qx.Class.define(g,{statics:{getMaxConcurrentRequestCount:function(){var f;
var a=qx.bom.client.Engine;
var e=a.FULLVERSION.split(h);
var c=0;
var b=0;
var d=0;
if(e[0]){c=e[0];
}if(e[1]){b=e[1];
}if(e[2]){d=e[2];
}if(window.maxConnectionsPerServer){f=window.maxConnectionsPerServer;
}else if(a.OPERA){f=8;
}else if(a.WEBKIT){f=4;
}else if(a.GECKO&&((c>1)||((c==1)&&(b>9))||((c==1)&&(b==9)&&(d>=1)))){f=6;
}else{f=2;
}return f;
}}});
})();
(function(){var p="qx.ioRemoteDebug",o="Integer",n="qx.debug",m="on",l="aborted",k="_onaborted",j="_on",h="Boolean",g="singleton",f="__qj",B="__ql",A="interval",z="receiving",y="Request-Queue Progress: ",x="queued",w="/",v="_applyEnabled",u="sending",t="completed",s="failed",q="qx.io.remote.RequestQueue",r="timeout";
qx.Class.define(q,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__qi=[];
this.__qj=[];
this.__qk=0;
this.__ql=new qx.event.Timer(500);
this.__ql.addListener(A,this._oninterval,this);
},properties:{enabled:{init:true,check:h,apply:v},maxTotalRequests:{check:o,nullable:true},maxConcurrentRequests:{check:o,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:o,init:5000}},members:{__qi:null,__qj:null,__qk:null,__ql:null,getRequestQueue:function(){return this.__qi;
},getActiveQueue:function(){return this.__qj;
},_debug:function(){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(p)){var C=this.__qj.length+w+(this.__qi.length+this.__qj.length);
this.debug("Progress: "+C);
window.status=y+C;
}}},_check:function(){this._debug();
if(this.__qj.length==0&&this.__qi.length==0){this.__ql.stop();
}if(!this.getEnabled()){return;
}if(this.__qi.length==0||(this.__qi[0].isAsynchronous()&&this.__qj.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__qk>=this.getMaxTotalRequests()){return;
}var a=this.__qi.shift();
var b=new qx.io.remote.Exchange(a);
this.__qk++;
this.__qj.push(b);
this._debug();
b.addListener(u,this._onsending,this);
b.addListener(z,this._onreceiving,this);
b.addListener(t,this._oncompleted,this);
b.addListener(l,this._oncompleted,this);
b.addListener(r,this._oncompleted,this);
b.addListener(s,this._oncompleted,this);
b._start=(new Date).valueOf();
b.send();
if(this.__qi.length>0){this._check();
}},_remove:function(O){qx.lang.Array.remove(this.__qj,O);
O.dispose();
this._check();
},__qm:0,_onsending:function(e){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(p)){this.__qm++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__qm);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(n,m)){if(qx.core.Setting.get(p)){if(e.getTarget()._counted){this.__qm--;
this.debug("ActiveCount: "+this.__qm);
}}}var F=e.getTarget().getRequest();
var E=j+e.getType();
try{if(F[E]){F[E](e);
}}catch(c){var D=qx.dev.StackTrace.getStackTraceFromError(c);
this.error("Request "+F+" handler "+E+" threw an error: "+c+"\nStack Trace:\n"+D);
try{if(F[k]){var event=qx.event.Registration.createEvent(l,qx.event.type.Event);
F[k](event);
}}catch(d){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var N=this.__qj;

if(N.length==0){this.__ql.stop();
return;
}var I=(new Date).valueOf();
var L;
var J;
var M=this.getDefaultTimeout();
var K;
var H;

for(var i=N.length-1;i>=0;i--){L=N[i];
J=L.getRequest();

if(J.isAsynchronous()){K=J.getTimeout();
if(K==0){continue;
}
if(K==null){K=M;
}H=I-L._start;

if(H>K){this.warn("Timeout: transport "+L.toHashCode());
this.warn(H+"ms > "+K+"ms");
L.timeout();
}}}},_applyEnabled:function(P,Q){if(P){this._check();
}this.__ql.setEnabled(P);
},add:function(G){G.setState(x);

if(G.isAsynchronous()){this.__qi.push(G);
}else{this.__qi.unshift(G);
}this._check();

if(this.getEnabled()){this.__ql.start();
}},abort:function(R){var S=R.getTransport();

if(S){S.abort();
}else if(qx.lang.Array.contains(this.__qi,R)){qx.lang.Array.remove(this.__qi,R);
}}},destruct:function(){this._disposeArray(f);
this._disposeObjects(B);
this.__qi=null;
}});
})();
(function(){var y="qx.ioRemoteDebug",x="qx.debug",w="on",v="failed",u="sending",t="completed",s="receiving",r="aborted",q="timeout",p="qx.event.type.Event",by="Connection dropped",bx="qx.io.remote.Response",bw="configured",bv="=",bu="Proxy authentication required",bt="qx.io.remote.transport.Abstract",bs="MSHTML-specific HTTP status code",br="Not available",bq="Precondition failed",bp="Server error",F="&",G="qx.io.remote.Exchange",D="Bad gateway",E="Gone",B="See other",C="Partial content",z="Server timeout",A="qx.io.remote.transport.Script",L="HTTP version not supported",M="Unauthorized",U="Multiple choices",S="Payment required",bd="Not implemented",X="Request-URL too large",bl="Length required",bi="_applyState",O="changeState",bo="Not modified",bn="Not acceptable",bm="qx.io.remote.Request",N="Connection closed by server",Q="Moved permanently",R="_applyImplementation",T="Method not allowed",V="Moved temporarily",Y="Forbidden",bf="Use proxy",bk="Ok",H="Not found",I="Request time-out",P="Bad request",bc="Conflict",bb="No content",ba="qx.io.remote.transport.XmlHttp",bh="qx.io.remote.transport.Iframe",bg="Request entity too large",W="Unknown status code",be="Unsupported media type",o="Gateway time-out",bj="created",J="Out of resources",K="undefined";
qx.Class.define(G,{extend:qx.core.Object,construct:function(n){qx.core.Object.call(this);
this.setRequest(n);
n.setTransport(this);
},events:{"sending":p,"receiving":p,"completed":bx,"aborted":p,"failed":bx,"timeout":bx},statics:{typesOrder:[ba,bh,A],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(bH,bI){qx.io.remote.Exchange.typesAvailable[bI]=bH;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var b in qx.io.remote.Exchange.typesAvailable){var a=qx.io.remote.Exchange.typesAvailable[b];

if(a.isSupported()){qx.io.remote.Exchange.typesSupported[b]=a;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bD,bE,bF){if(!qx.lang.Array.contains(bD.handles.responseTypes,bF)){return false;
}
for(var bG in bE){if(!bD.handles[bG]){return false;
}}return true;
},_nativeMap:{0:bj,1:bw,2:u,3:s,4:t},wasSuccessful:function(j,k,m){if(m){switch(j){case null:case 0:return true;
case -1:return k<4;
default:return typeof j===K;
}}else{switch(j){case -1:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)&&k>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+k);
}}return k<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)&&k===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return k!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+j);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+j);
}}return false;
default:if(j>206&&j<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+j+" ("+k+")");
return false;
}}},statusCodeToString:function(bJ){switch(bJ){case -1:return br;
case 200:return bk;
case 304:return bo;
case 206:return C;
case 204:return bb;
case 300:return U;
case 301:return Q;
case 302:return V;
case 303:return B;
case 305:return bf;
case 400:return P;
case 401:return M;
case 402:return S;
case 403:return Y;
case 404:return H;
case 405:return T;
case 406:return bn;
case 407:return bu;
case 408:return I;
case 409:return bc;
case 410:return E;
case 411:return bl;
case 412:return bq;
case 413:return bg;
case 414:return X;
case 415:return be;
case 500:return bp;
case 501:return bd;
case 502:return D;
case 503:return J;
case 504:return o;
case 505:return L;
case 12002:return z;
case 12029:return by;
case 12030:return by;
case 12031:return by;
case 12152:return N;
case 13030:return bs;
default:return W;
}}},properties:{request:{check:bm,nullable:true},implementation:{check:bt,nullable:true,apply:R},state:{check:[bw,u,s,t,r,q,v],init:bw,event:O,apply:bi}},members:{send:function(){var bW=this.getRequest();

if(!bW){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bU=qx.io.remote.Exchange.typesOrder;
var bT=qx.io.remote.Exchange.typesSupported;
var bY=bW.getResponseType();
var ca={};

if(bW.getAsynchronous()){ca.asynchronous=true;
}else{ca.synchronous=true;
}
if(bW.getCrossDomain()){ca.crossDomain=true;
}
if(bW.getFileUpload()){ca.fileUpload=true;
}for(var bX in bW.getFormFields()){ca.programaticFormFields=true;
break;
}var cb,bV;

for(var i=0,l=bU.length;i<l;i++){cb=bT[bU[i]];

if(cb){if(!qx.io.remote.Exchange.canHandle(cb,ca,bY)){continue;
}
try{if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){this.debug("Using implementation: "+cb.classname);
}}bV=new cb;
this.setImplementation(bV);
bV.setUseBasicHttpAuth(bW.getUseBasicHttpAuth());
bV.send();
return true;
}catch(bS){this.error("Request handler throws error");
this.error(bS);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bW);
},abort:function(){var bB=this.getImplementation();

if(bB){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){this.debug("Abort: implementation "+bB.toHashCode());
}}bB.abort();
}else{if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){this.debug("Abort: forcing state to be aborted");
}}this.setState(r);
}},timeout:function(){var bC=this.getImplementation();

if(bC){this.warn("Timeout: implementation "+bC.toHashCode());
bC.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(q);
}this.__qn();
},__qn:function(){var bz=this.getRequest();

if(bz){bz.setTimeout(0);
}},_onsending:function(e){this.setState(u);
},_onreceiving:function(e){this.setState(s);
},_oncompleted:function(e){this.setState(t);
},_onabort:function(e){this.setState(r);
},_onfailed:function(e){this.setState(v);
},_ontimeout:function(e){this.setState(q);
},_applyImplementation:function(bK,bL){if(bL){bL.removeListener(u,this._onsending,this);
bL.removeListener(s,this._onreceiving,this);
bL.removeListener(t,this._oncompleted,this);
bL.removeListener(r,this._onabort,this);
bL.removeListener(q,this._ontimeout,this);
bL.removeListener(v,this._onfailed,this);
}
if(bK){var bN=this.getRequest();
bK.setUrl(bN.getUrl());
bK.setMethod(bN.getMethod());
bK.setAsynchronous(bN.getAsynchronous());
bK.setUsername(bN.getUsername());
bK.setPassword(bN.getPassword());
bK.setParameters(bN.getParameters(false));
bK.setFormFields(bN.getFormFields());
bK.setRequestHeaders(bN.getRequestHeaders());
var bQ=bN.getData();

if(bQ===null){var bR=bN.getParameters(true);
var bP=[];

for(var bM in bR){var bO=bR[bM];

if(bO instanceof Array){for(var i=0;i<bO.length;i++){bP.push(encodeURIComponent(bM)+bv+encodeURIComponent(bO[i]));
}}else{bP.push(encodeURIComponent(bM)+bv+encodeURIComponent(bO));
}}
if(bP.length>0){bK.setData(bP.join(F));
}}else{bK.setData(bQ);
}bK.setResponseType(bN.getResponseType());
bK.addListener(u,this._onsending,this);
bK.addListener(s,this._onreceiving,this);
bK.addListener(t,this._oncompleted,this);
bK.addListener(r,this._onabort,this);
bK.addListener(q,this._ontimeout,this);
bK.addListener(v,this._onfailed,this);
}},_applyState:function(c,d){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){this.debug("State: "+d+" => "+c);
}}
switch(c){case u:this.fireEvent(u);
break;
case s:this.fireEvent(s);
break;
case t:case r:case q:case v:var g=this.getImplementation();

if(!g){break;
}this.__qn();

if(this.hasListener(c)){var h=qx.event.Registration.createEvent(c,qx.io.remote.Response);

if(c==t){var f=g.getResponseContent();
h.setContent(f);
if(f===null){if(qx.core.Variant.isSet(x,w)){if(qx.core.Setting.get(y)){this.debug("Altered State: "+c+" => failed");
}}c=v;
}}else if(c==v){h.setContent(g.getResponseContent());
}h.setStatusCode(g.getStatusCode());
h.setResponseHeaders(g.getResponseHeaders());
this.dispatchEvent(h);
}this.setImplementation(null);
g.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var bA=this.getImplementation();

if(bA){this.setImplementation(null);
bA.dispose();
}this.setRequest(null);
}});
})();
(function(){var t="qx.event.type.Event",s="String",r="qx.debug",q="qx.ioRemoteDebug",p="failed",o="timeout",n="on",m="created",l="aborted",k="sending",d="configured",j="receiving",g="completed",c="Object",b="Boolean",f="abstract",e="_applyState",h="GET",a="changeState",i="qx.io.remote.transport.Abstract";
qx.Class.define(i,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":t,"configured":t,"sending":t,"receiving":t,"completed":t,"aborted":t,"failed":t,"timeout":t},properties:{url:{check:s,nullable:true},method:{check:s,nullable:true,init:h},asynchronous:{check:b,nullable:true,init:true},data:{check:s,nullable:true},username:{check:s,nullable:true},password:{check:s,nullable:true},state:{check:[m,d,k,j,g,l,o,p],init:m,event:a,apply:e},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:s,nullable:true},useBasicHttpAuth:{check:b,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){if(qx.core.Variant.isSet(r,n)){if(qx.core.Setting.get(q)){this.warn("Aborting...");
}}this.setState(l);
},timeout:function(){if(qx.core.Variant.isSet(r,n)){if(qx.core.Setting.get(q)){this.warn("Timeout...");
}}this.setState(o);
},failed:function(){if(qx.core.Variant.isSet(r,n)){if(qx.core.Setting.get(q)){this.warn("Failed...");
}}this.setState(p);
},setRequestHeader:function(w,x){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(y){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){if(qx.core.Variant.isSet(r,n)){if(qx.core.Setting.get(q)){this.debug("State: "+u);
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
}}});
})();
(function(){var X="qx.debug",W="on",V="qx.ioRemoteDebugData",U="failed",T="qx.ioRemoteDebug",S="completed",R="=",Q="aborted",P="",O="sending",bx="&",bw="configured",bv="timeout",bu="application/xml",bt="qx.io.remote.transport.XmlHttp",bs="application/json",br="text/html",bq="qx.client",bp="receiving",bo="text/plain",bf="text/javascript",bg="created",bd="?",be='Referer',bb='Basic ',bc="\n</pre>",Y="string",ba='Authorization',bh="<pre>Could not execute json: \n",bi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bk=':',bj="parseerror",bm="file:",bl="webkit",bn="object";
qx.Class.define(bt,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[bo,bf,bs,bu,br]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(bq,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__qo:false,__qp:0,__qq:null,getRequest:function(){if(this.__qq===null){this.__qq=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__qq.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__qq;
},send:function(){this.__qp=0;
var bI=this.getRequest();
var bE=this.getMethod();
var bL=this.getAsynchronous();
var bK=this.getUrl();
var bG=(window.location.protocol===bm&&!(/^http(s){0,1}\:/.test(bK)));
this.__qo=bG;
var bO=this.getParameters(false);
var bM=[];

for(var bF in bO){var bJ=bO[bF];

if(bJ instanceof Array){for(var i=0;i<bJ.length;i++){bM.push(encodeURIComponent(bF)+R+encodeURIComponent(bJ[i]));
}}else{bM.push(encodeURIComponent(bF)+R+encodeURIComponent(bJ));
}}
if(bM.length>0){bK+=(bK.indexOf(bd)>=0?bx:bd)+bM.join(bx);
}if(this.getData()===null){var bO=this.getParameters(true);
var bM=[];

for(var bF in bO){var bJ=bO[bF];

if(bJ instanceof Array){for(var i=0;i<bJ.length;i++){bM.push(encodeURIComponent(bF)+R+encodeURIComponent(bJ[i]));
}}else{bM.push(encodeURIComponent(bF)+R+encodeURIComponent(bJ));
}}
if(bM.length>0){this.setData(bM.join(bx));
}}var bN=function(r){var x=bi;
var B=P;
var v,u,t;
var y,z,A,w;
var i=0;

do{v=r.charCodeAt(i++);
u=r.charCodeAt(i++);
t=r.charCodeAt(i++);
y=v>>2;
z=((v&3)<<4)|(u>>4);
A=((u&15)<<2)|(t>>6);
w=t&63;

if(isNaN(u)){A=w=64;
}else if(isNaN(t)){w=64;
}B+=x.charAt(y)+x.charAt(z)+x.charAt(A)+x.charAt(w);
}while(i<r.length);
return B;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bI.open(bE,bK,bL);
bI.setRequestHeader(ba,bb+bN(this.getUsername()+bk+this.getPassword()));
}else{bI.open(bE,bK,bL,this.getUsername(),this.getPassword());
}}else{bI.open(bE,bK,bL);
}}catch(E){this.error("Failed with exception: "+E);
this.failed();
return;
}if(!qx.core.Variant.isSet(bq,bl)){bI.setRequestHeader(be,window.location.href);
}var bH=this.getRequestHeaders();

for(var bF in bH){bI.setRequestHeader(bF,bH[bF]);
}try{if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Request: "+this.getData());
}}bI.send(this.getData());
}catch(c){if(bG){this.failedLocally();
}else{this.error("Failed to send data: "+c,"send");
this.failed();
}return;
}if(!bL){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===U){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case S:case Q:case U:case bv:if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(T)){this.warn("Ignore Ready State Change");
}}return;
}var bz=this.getReadyState();

if(bz==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bz,this.__qo)){if(this.getState()===bw){this.setState(O);
}return this.failed();
}}while(this.__qp<bz){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qp]);
}}),getReadyState:function(){var o=null;

try{o=this.getRequest().readyState;
}catch(p){}return o;
},setRequestHeader:function(j,k){this.getRequestHeaders()[j]=k;
},getResponseHeader:function(bT){var bU=null;

try{bU=this.getRequest().getResponseHeader(bT)||null;
}catch(b){}return bU;
},getStringResponseHeaders:function(){var H=null;

try{var G=this.getRequest().getAllResponseHeaders();

if(G){H=G;
}}catch(q){}return H;
},getResponseHeaders:function(){var M=this.getStringResponseHeaders();
var N={};

if(M){var K=M.split(/[\r\n]+/g);

for(var i=0,l=K.length;i<l;i++){var L=K[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(L){N[L[1]]=L[2];
}}}return N;
},getStatusCode:function(){var D=-1;

try{D=this.getRequest().status;
}catch(C){}return D;
},getStatusText:function(){var by=P;

try{by=this.getRequest().statusText;
}catch(m){}return by;
},getResponseText:function(){var bS=null;

try{bS=this.getRequest().responseText;
}catch(bA){bS=null;
}return bS;
},getResponseXml:function(){var bD=null;
var bB=this.getStatusCode();
var bC=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bB,bC,this.__qo)){try{bD=this.getRequest().responseXML;
}catch(a){}}if(typeof bD==bn&&bD!=null){if(!bD.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,P);
bD.loadXML(s);
}if(!bD.documentElement){throw new Error("Missing Document Element!");
}
if(bD.documentElement.tagName==bj){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bD;
},getFetchedLength:function(){var bP=this.getResponseText();
return typeof bP==Y?bP.length:0;
},getResponseContent:function(){var f=this.getState();

if(f!==S&&f!=U){if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(T)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(T)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var h=this.getResponseText();

if(f==U){if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Failed: "+h);
}}return h;
}
switch(this.getResponseType()){case bo:case br:if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Response: "+h);
}}return h;
case bs:if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Response: "+h);
}}
try{if(h&&h.length>0){var g=qx.util.Json.parse(h,false);
return (g===0?0:(g||null));
}else{return null;
}}catch(d){this.error("Could not execute json: ["+h+"]",d);
return bh+h+bc;
}case bf:if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Response: "+h);
}}
try{if(h&&h.length>0){var g=window.eval(h);
return (g===0?0:(g||null));
}else{return null;
}}catch(F){this.error("Could not execute javascript: ["+h+"]",F);
return null;
}case bu:h=this.getResponseXml();

if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(V)){this.debug("Response: "+h);
}}return (h===0?0:(h||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(I,J){if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(T)){this.debug("State: "+I);
}}
switch(I){case bg:this.fireEvent(bg);
break;
case bw:this.fireEvent(bw);
break;
case O:this.fireEvent(O);
break;
case bp:this.fireEvent(bp);
break;
case S:this.fireEvent(S);
break;
case U:this.fireEvent(U);
break;
case Q:this.getRequest().abort();
this.fireEvent(Q);
break;
case bv:this.getRequest().abort();
this.fireEvent(bv);
break;
}}},defer:function(bQ,bR){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,bt);
},destruct:function(){var n=this.getRequest();

if(n){n.onreadystatechange=qx.lang.Function.empty;
switch(n.readyState){case 1:case 2:case 3:n.abort();
}}this.__qq=null;
}});
})();
(function(){var C=",",B="",A="string",z="null",y="qx.jsonDebugging",x='"',w="__pH",v='\\u00',u="new Date(Date.UTC(",t="__px",Y='\\\\',X='\\f',W="__pz",V='\\"',U="))",T="}",S='(',R=":",Q="{",P='\\r',J="__pI",K='\\t',H="]",I="__py",F="[",G="Use 'parse' instead!",D="qx.jsonEncodeUndefined",E='\\b',L="__pA",M="qx.util.Json",O=')',N='\\n';
qx.Class.define(M,{statics:{__pv:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__pw:{"function":t,"boolean":I,"number":W,"string":L,"object":w,"undefined":J},__px:function(bj,bk){return String(bj);
},__py:function(bd,be){return String(bd);
},__pz:function(bb,bc){return isFinite(bb)?String(bb):z;
},__pA:function(bg,bh){var bi;

if(/["\\\x00-\x1f]/.test(bg)){bi=bg.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__pC);
}else{bi=bg;
}return x+bi+x;
},__pB:{'\b':E,'\t':K,'\n':N,'\f':X,'\r':P,'"':V,'\\':Y},__pC:function(a,b){var s=qx.util.Json.__pB[b];

if(s){return s;
}s=b.charCodeAt();
return v+Math.floor(s/16).toString(16)+(s%16).toString(16);
},__pD:function(bn,bo){var bq=[],bt=true,bs,bp;
var br=qx.util.Json.__pK;
bq.push(F);

if(br){qx.util.Json.__pE+=qx.util.Json.BEAUTIFYING_INDENT;
bq.push(qx.util.Json.__pE);
}
for(var i=0,l=bn.length;i<l;i++){bp=bn[i];
bs=this.__pw[typeof bp];

if(bs){bp=this[bs](bp,i+B);

if(typeof bp==A){if(!bt){bq.push(C);

if(br){bq.push(qx.util.Json.__pE);
}}bq.push(bp);
bt=false;
}}}
if(br){qx.util.Json.__pE=qx.util.Json.__pE.substring(0,qx.util.Json.__pE.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bq.push(qx.util.Json.__pE);
}bq.push(H);
return bq.join(B);
},__pF:function(c,d){var e=c.getUTCFullYear()+C+c.getUTCMonth()+C+c.getUTCDate()+C+c.getUTCHours()+C+c.getUTCMinutes()+C+c.getUTCSeconds()+C+c.getUTCMilliseconds();
return u+e+U;
},__pG:function(k,m){var p=[],r=true,o,n;
var q=qx.util.Json.__pK;
p.push(Q);

if(q){qx.util.Json.__pE+=qx.util.Json.BEAUTIFYING_INDENT;
p.push(qx.util.Json.__pE);
}
for(var m in k){n=k[m];
o=this.__pw[typeof n];

if(o){n=this[o](n,m);

if(typeof n==A){if(!r){p.push(C);

if(q){p.push(qx.util.Json.__pE);
}}p.push(this.__pA(m),R,n);
r=false;
}}}
if(q){qx.util.Json.__pE=qx.util.Json.__pE.substring(0,qx.util.Json.__pE.length-qx.util.Json.BEAUTIFYING_INDENT.length);
p.push(qx.util.Json.__pE);
}p.push(T);
return p.join(B);
},__pH:function(f,g){if(f){if(qx.lang.Type.isFunction(f.toJSON)&&f.toJSON!==this.__pv){return this.__pJ(f.toJSON(g),g);
}else if(qx.lang.Type.isDate(f)){return this.__pF(f,g);
}else if(qx.lang.Type.isArray(f)){return this.__pD(f,g);
}else if(qx.lang.Type.isObject(f)){return this.__pG(f,g);
}return B;
}return z;
},__pI:function(bl,bm){if(qx.core.Setting.get(D)){return z;
}},__pJ:function(h,j){return this[this.__pw[typeof h]](h,j);
},stringify:function(bu,bv){this.__pK=bv;
this.__pE=this.BEAUTIFYING_LINE_END;
var bw=this.__pJ(bu,B);

if(typeof bw!=A){bw=null;
}if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON request: "+bw);
}return bw;
},parse:function(by,bz){if(bz===undefined){bz=true;
}
if(qx.core.Setting.get(y)){qx.log.Logger.debug(this,"JSON response: "+by);
}
if(bz){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(by.replace(/"(\\.|[^"\\])*"/g,B))){throw new Error("Could not parse JSON string!");
}}
try{var bA=(by&&by.length>0)?eval(S+by+O):null;
return bA;
}catch(bx){throw new Error("Could not evaluate JSON string: "+bx.message);
}},parseQx:function(bf){qx.log.Logger.deprecatedMethodWarning(arguments.callee,G);
return qx.util.Json.parse(bf,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(ba){ba.__pv=Date.prototype.toJSON;
}});
})();
(function(){var B="qx.debug",A="on",z="qx.ioRemoteDebugData",y="=",x="&",w="application/xml",v="application/json",u="text/html",t="qx.ioRemoteDebug",s="qx.client",ba="textarea",Y="none",X="text/plain",W="text/javascript",V="",U="completed",T="?",S="qx.io.remote.transport.Iframe",R="gecko",Q="frame_",I="aborted",J="_data_",G="pre",H="javascript:void(0)",E="sending",F="form",C="failed",D='<iframe name="',K="mshtml",L="form_",N='"></iframe>',M="iframe",P="timeout",O="qx/static/blank.gif";
qx.Class.define(S,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var a=(new Date).valueOf();
var b=Q+a;
var c=L+a;
if(qx.core.Variant.isSet(s,K)){this.__qr=document.createElement(D+b+N);
}else{this.__qr=document.createElement(M);
}this.__qr.src=H;
this.__qr.id=this.__qr.name=b;
this.__qr.onload=qx.lang.Function.bind(this._onload,this);
this.__qr.style.display=Y;
document.body.appendChild(this.__qr);
this.__qs=document.createElement(F);
this.__qs.target=b;
this.__qs.id=this.__qs.name=c;
this.__qs.style.display=Y;
document.body.appendChild(this.__qs);
this.__qt=document.createElement(ba);
this.__qt.id=this.__qt.name=J;
this.__qs.appendChild(this.__qt);
this.__qr.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[X,W,v,w,u]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__qt:null,__qu:0,__qs:null,__qr:null,send:function(){var f=this.getMethod();
var h=this.getUrl();
var m=this.getParameters(false);
var l=[];

for(var g in m){var j=m[g];

if(j instanceof Array){for(var i=0;i<j.length;i++){l.push(encodeURIComponent(g)+y+encodeURIComponent(j[i]));
}}else{l.push(encodeURIComponent(g)+y+encodeURIComponent(j));
}}
if(l.length>0){h+=(h.indexOf(T)>=0?x:T)+l.join(x);
}if(this.getData()===null){var m=this.getParameters(true);
var l=[];

for(var g in m){var j=m[g];

if(j instanceof Array){for(var i=0;i<j.length;i++){l.push(encodeURIComponent(g)+y+encodeURIComponent(j[i]));
}}else{l.push(encodeURIComponent(g)+y+encodeURIComponent(j));
}}
if(l.length>0){this.setData(l.join(x));
}}var d=this.getFormFields();

for(var g in d){var k=document.createElement(ba);
k.name=g;
k.appendChild(document.createTextNode(d[g]));
this.__qs.appendChild(k);
}this.__qs.action=h;
this.__qs.method=f;
this.__qt.appendChild(document.createTextNode(this.getData()));
this.__qs.submit();
this.setState(E);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__qs.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__qr.readyState]);
}),_switchReadyState:function(bh){switch(this.getState()){case U:case I:case C:case P:this.warn("Ignore Ready State Change");
return;
}while(this.__qu<bh){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qu]);
}},setRequestHeader:function(n,o){},getResponseHeader:function(r){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return V;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__qr);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__qr);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__qr);
},getIframeTextContent:function(){var q=this.getIframeBody();

if(!q){return null;
}
if(!q.firstChild){return V;
}if(q.firstChild.tagName&&q.firstChild.tagName.toLowerCase()==G){return q.firstChild.innerHTML;
}else{return q.innerHTML;
}},getIframeHtmlContent:function(){var p=this.getIframeBody();
return p?p.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==U){if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(t)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(t)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var bf=this.getIframeTextContent();

switch(this.getResponseType()){case X:if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(z)){this.debug("Response: "+this._responseContent);
}}return bf;
break;
case u:bf=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(z)){this.debug("Response: "+this._responseContent);
}}return bf;
break;
case v:bf=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(z)){this.debug("Response: "+this._responseContent);
}}
try{return bf&&bf.length>0?qx.util.Json.parse(bf,false):null;
}catch(bb){return this.error("Could not execute json: ("+bf+")",bb);
}case W:bf=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(z)){this.debug("Response: "+this._responseContent);
}}
try{return bf&&bf.length>0?window.eval(bf):null;
}catch(bg){return this.error("Could not execute javascript: ("+bf+")",bg);
}case w:bf=this.getIframeDocument();

if(qx.core.Variant.isSet(B,A)){if(qx.core.Setting.get(z)){this.debug("Response: "+this._responseContent);
}}return bf;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bc,bd,be){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,S);
},destruct:function(){if(this.__qr){this.__qr.onload=null;
this.__qr.onreadystatechange=null;
if(qx.core.Variant.isSet(s,R)){this.__qr.src=qx.util.ResourceManager.getInstance().toUri(O);
}document.body.removeChild(this.__qr);
}
if(this.__qs){document.body.removeChild(this.__qs);
}this.__qr=this.__qs=null;
}});
})();
(function(){var w="qx.debug",v="on",u="&",t="=",s="qx.ioRemoteDebug",r="application/json",q="completed",p="text/plain",o="qx.ioRemoteDebugData",n="text/javascript",f="?",m="qx.io.remote.transport.Script",j="",d="_ScriptTransport_data",c="failed",h="script",g="timeout",k="_ScriptTransport_",b="_ScriptTransport_id",l="aborted",e="utf-8";
qx.Class.define(m,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var F=++qx.io.remote.transport.Script.__qv;

if(F>=2000000000){qx.io.remote.transport.Script.__qv=F=1;
}this.__qw=null;
this.__qv=F;
},statics:{__qv:0,_instanceRegistry:{},ScriptTransport_PREFIX:k,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:d,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[p,n,r]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(I,content){var J=qx.io.remote.transport.Script._instanceRegistry[I];

if(J==null){if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(s)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{J._responseContent=content;
J._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__qx:0,__qw:null,__qv:null,send:function(){var B=this.getUrl();
B+=(B.indexOf(f)>=0?u:f)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+t+this.__qv;
var E=this.getParameters();
var D=[];

for(var A in E){if(A.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var C=E[A];

if(C instanceof Array){for(var i=0;i<C.length;i++){D.push(encodeURIComponent(A)+t+encodeURIComponent(C[i]));
}}else{D.push(encodeURIComponent(A)+t+encodeURIComponent(C));
}}
if(D.length>0){B+=u+D.join(u);
}var z=this.getData();

if(z!=null){B+=u+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+t+encodeURIComponent(z);
}qx.io.remote.transport.Script._instanceRegistry[this.__qv]=this;
this.__qw=document.createElement(h);
this.__qw.charset=e;
this.__qw.src=B;

if(qx.core.Variant.isSet(w,v)){if(qx.core.Setting.get(o)){this.debug("Request: "+B);
}}document.body.appendChild(this.__qw);
},_switchReadyState:function(H){switch(this.getState()){case q:case l:case c:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__qx<H){this.setState(qx.io.remote.Exchange._nativeMap[++this.__qx]);
}},setRequestHeader:function(x,y){},getResponseHeader:function(G){return null;
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
}}var a=this._responseContent;
return (a===0?0:(a||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(K,L,M){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,m);
},destruct:function(){if(this.__qw){delete qx.io.remote.transport.Script._instanceRegistry[this.__qv];
document.body.removeChild(this.__qw);
}this.__qw=this._responseContent=null;
}});
})();
(function(){var e="Integer",d="Object",c="qx.io.remote.Response";
qx.Class.define(c,{extend:qx.event.type.Event,properties:{state:{check:e,nullable:true},statusCode:{check:e,nullable:true},content:{nullable:true},responseHeaders:{check:d,nullable:true}},members:{clone:function(a){var b=qx.event.type.Event.prototype.clone.call(this,a);
b.setType(this.getType());
b.setState(this.getState());
b.setStatusCode(this.getStatusCode());
b.setContent(this.getContent());
b.setResponseHeaders(this.getResponseHeaders());
return b;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var J="test",I="",H="^",G="demobrowser.TreeDataHandler",F="ttree",E="All",D="\\.[^\\.]+$",C=".",B="depth";
qx.Class.define(G,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.tmap=c;
this.ttree=this.__LJ(c);
},members:{__LJ:function(bd){var bf=bd;
function be(M,N){var Q=N.classname;
var O=Q.split(".");
function P(parent,bj){if(!bj.length){return parent;
}else{var bk=bj[0];
var bl=bj.slice(1,bj.length);
var bm=null;
var bn=null;
var bo=parent.getChildren();

for(var i=0;i<bo.length;i++){if(bo[i].label==bk){bn=bo[i];
break;
}}if(bn==null){bn=new demobrowser.Tree(bk);
parent.add(bn);
}bm=P(bn,bl);
return bm;
}}var R=P(M,O);

if(!R){throw new Error("No target to insert tests");
}bg.readTree(N,R);
}function bh(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var bi=new demobrowser.Tree("All");
var bg=this;
bf.sort(bh);

for(var i=0;i<bf.length;i++){be(bi,bf[i]);
}return bi;
},readTree:function(f,g){var k=arguments[1]||new demobrowser.Tree(f.classname);
var g;
function h(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}f.tests.sort(h);

for(var j=0;j<f.tests.length;j++){g=new demobrowser.Tree(f.tests[j].name);
g.tags=f.tests[j].tags;
g.type=J;
g.desc=f.tests[j].desc;
k.add(g);
}if(f.children&&f.children.length){for(var j=0;j<f.children.length;j++){k.add(this.readTree(f.children[j]));
}}return k;
},getRoot:function(){if(!this.Root){var q={classname:I,tests:[]};
var p=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(q.classname.length>p[i].classname.length){q=p[i];
}}this.Root=q;
}return this.Root.classname;
},getChilds:function(w){var x=[];
var z=this.tmap;
var y=H+w+D;
var A=new RegExp(y);

for(var i=0;i<z.length;i++){if(z[i].classname.match(A)){x.push(z[i]);
}}return x;
},getTests:function(V){var W=this.tmap;

for(var i=0;i<W.length;i++){if(W[i].classname==V){return W[i].tests;
}}return [];
},getPath:function(X){if(!X){return I;
}var Y=X.pwd();
Y.shift();
if(this.isClass(X)){Y=Y.concat(X.label);
}return Y;
},getChildren:function(t){if(t==E){var u=this.tmap;
var v=[];

for(var i=0;i<u.length;i++){v.push(u[i].classname);
}return v;
}else if(this.isClass(t)){return this.getTests(t);
}else{return [];
}},isClass:function(ba){if(ba.type&&ba.type==J){return false;
}else{return true;
}},hasTests:function(bb){if(!this.isClass(bb)){return false;
}else{var bc=bb.getChildren();

for(var i=0;i<bc.length;i++){if(bc[i].type&&bc[i].type==J){return true;
}}return false;
}},classFromTest:function(S){var T=I;
var U=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==S){T=this.tmap[i].classname;
break classloop;
}}}return T;
},getFullName:function(K){if(!K){return I;
}var L=this.getPath(K);

if(K.type&&K.type==J){L=L.concat(K.label);
}return L.join(C);
},getPreviousNode:function(d){var e=d.getPrevSibling();

if(e){return e;
}},getNextNode:function(r){var s=r.getNextSibling();

if(s){return s;
}},testCount:function(l){if(l.type&&l.type==J){return 1;
}else{var m=0;
var o=l.getIterator(B);
var n;

while(n=o()){if(n.type&&n.type==J){m++;
}}return m;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(F);
}});
})();
(function(){var q="depth",p="",o="widgetLinkFlat",n="widgetLinkFull",m="parent",l="children",k="demobrowser.Tree";
qx.Class.define(k,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||p;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(d,e){var g=q;
var h=this;
var j=this.getIterator(g);

while(h=j()){d.apply(h,e);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(v){var x=[this];
var w=v==q?1:0;
function f(){var y;

if(x.length){y=x.shift();
var z=y.getChildren();

if(z.length){if(w){x=z.concat(x);
}else{x=x.concat(z);
}}}else{y=null;
}return y;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(r){var s=this.parent.getChildren();
var t=this.self(arguments).indexOf(s,this);
var u=t+r;

if(s[u]){return s[u];
}},add:function(a){this.children.push(a);
a.parent=this;
}},statics:{indexOf:function(b,c){for(var i=0;i<b.length;i++){if(b[i]==c){return i;
}}}},destruct:function(){this._disposeObjects(n,o,m);
this._disposeArray(l);
}});
})();
(function(){var j="mshtml",h="pop.push.reverse.shift.sort.splice.unshift.join.slice",g="number",f="qx.type.BaseArray",e="qx.client",d=".";
qx.Class.define(f,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function o(q){if(qx.core.Variant.isSet(e,j)){n.prototype={length:0,$$isArray:true};
var t=h.split(d);

for(var length=t.length;length;){n.prototype[t[--length]]=Array.prototype[t[length]];
}}var u=Array.prototype.slice;
n.prototype.concat=function(){var l=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var k;

if(arguments[i] instanceof n){k=u.call(arguments[i],0);
}else if(arguments[i] instanceof Array){k=arguments[i];
}else{k=[arguments[i]];
}l.push.apply(l,k);
}return l;
};
n.prototype.toString=function(){return u.call(this,0).toString();
};
n.prototype.toLocaleString=function(){return u.call(this,0).toLocaleString();
};
n.prototype.constructor=n;
n.prototype.indexOf=qx.lang.Core.arrayIndexOf;
n.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
n.prototype.forEach=qx.lang.Core.arrayForEach;
n.prototype.some=qx.lang.Core.arraySome;
n.prototype.every=qx.lang.Core.arrayEvery;
var r=qx.lang.Core.arrayFilter;
var s=qx.lang.Core.arrayMap;
n.prototype.filter=function(){var a=new this.constructor;
a.push.apply(a,r.apply(this,arguments));
return a;
};
n.prototype.map=function(){var p=new this.constructor;
p.push.apply(p,s.apply(this,arguments));
return p;
};
n.prototype.slice=function(){var b=new this.constructor;
b.push.apply(b,Array.prototype.slice.apply(this,arguments));
return b;
};
n.prototype.splice=function(){var c=new this.constructor;
c.push.apply(c,Array.prototype.splice.apply(this,arguments));
return c;
};
n.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
n.prototype.valueOf=function(){return this.length;
};
return n;
}function n(length){if(arguments.length===1&&typeof length===g){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function m(){}m.prototype=[];
n.prototype=new m;
n.prototype.length=0;
qx.type.BaseArray=o(n);
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
var bG={"void":1,"null":1,"true":1,"false":1,"NaN":1,"Infinity":1,"this":1};
var bs={"statics":1,"members":1,"construct":1,"destruct":1,"events":1,"properties":1,"extend":1,"implement":1};
var bC=function(bo){return new RegExp(s+bo+u);
};
var bM=L;
var bD=N;
var bw=p;
var bF=n;
var bA=I;
var bI=t;
var bH=v;
var bu=D;
var bP=Y;
var bR=W;
var bB=T;
var bE=[O+bB+M,H+bB+B,w+bB+S,P+bB+X,C+bB+r].join(bc);
var bN=bC(bM);
var bx=bC(bD);
var bK=bC(bw);
var bt=bC(bF);
var bQ=bC(bA);
var bz=bC(bI);
var br=bC(bH);
var bL=bC(bu);
var by=bC(bP);
var bq=bC(bR);
var bv=bC(bE);
var bJ=new RegExp([bM,bD,bw,bF,bA,bI,bH,bH,bu,bP,bR,bE,y].join(bc),G);
var bO=[];
var a=bp.match(bJ);

for(var i=0;i<a.length;i++){var bS=a[i];

if(bS.match(bN)){bO.push({type:b,value:bS});
}else if(bS.match(bx)){bO.push({type:bb,value:bS});
}else if(bS.match(bv)){bO.push({type:be,value:bS});
}else if(bS.match(br)){bO.push({type:c,value:bS});
}else if(bS.match(bz)){bO.push({type:e,value:bS});
}else if(bT[bS]){bO.push({type:bf,value:bS});
}else if(bG[bS]){bO.push({type:ba,value:bS});
}else if(bs[bS]){bO.push({type:h,value:bS});
}else if(bS.match(bK)){bO.push({type:bg,value:bS});
}else if(bS.match(bQ)){bO.push({type:q,value:bS});
}else if(bS.match(bt)){bO.push({type:z,value:bS});
}else if(bS.match(by)){bO.push({type:j,value:bS});
}else if(bS.match(bC(bq))){bO.push({type:g,value:bS});
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
(function(){var i="",h="<br",g=" &nbsp;",f="<br>",e=" ",d="\n",c="qx.bom.String";
qx.Class.define(c,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(b){return qx.util.StringEscape.escape(b,qx.bom.String.FROM_CHARCODE);
},unescape:function(a){return qx.util.StringEscape.unescape(a,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(p){var q={"  ":g,"\n":f};
return q[p]||p;
});
},toText:function(n){return qx.bom.String.unescape(n.replace(/\s+|<([^>])+>/gi,function(o){if(o.indexOf(h)===0){return d;
}else if(o.length>0&&o.replace(/^\s*/,i).replace(/\s*$/,i)==i){return e;
}else{return i;
}}));
}},defer:function(k,l,m){k.FROM_CHARCODE=qx.lang.Object.invert(k.TO_CHARCODE);
}});
})();
(function(){var g=";",f="&",e='X',d="",c='#',b="&#",a="qx.util.StringEscape";
qx.Class.define(a,{statics:{escape:function(o,p){var r,t=d;

for(var i=0,l=o.length;i<l;i++){var s=o.charAt(i);
var q=s.charCodeAt(0);

if(p[q]){r=f+p[q]+g;
}else{if(q>0x7F){r=b+q+g;
}else{r=s;
}}t+=r;
}return t;
},unescape:function(m,n){return m.replace(/&[#\w]+;/gi,function(h){var j=h;
var h=h.substring(1,h.length-1);
var k=n[h];

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
(function(){var t="qx.debug",s="_applyStyle",r="on",q="",p="Color",o="px",n="solid",m="dotted",l="double",k="dashed",f="_applyWidth",j="qx.ui.decoration.Uniform",i="px ",e=" ",d="scale",h="PositiveInteger",g="absolute";
qx.Class.define(j,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){qx.ui.decoration.Abstract.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:h,init:0,apply:f},style:{nullable:true,check:[n,m,k,l],init:n,apply:s},color:{nullable:true,check:p,apply:s},backgroundColor:{check:p,nullable:true,apply:s}},members:{__sa:null,_getDefaultInsets:function(){var D=this.getWidth();
return {top:D,right:D,bottom:D,left:D};
},_isInitialized:function(){return !!this.__sa;
},getMarkup:function(){if(this.__sa){return this.__sa;
}var u={position:g,top:0,left:0};
var v=this.getWidth();

if(qx.core.Variant.isSet(t,r)){if(v===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var x=qx.theme.manager.Color.getInstance();
u.border=v+i+this.getStyle()+e+(x.resolve(this.getColor())||q);
var w=this._generateBackgroundMarkup(u);
return this.__sa=w;
},resize:function(y,z,A){var C=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(C||qx.bom.client.Feature.CONTENT_BOX){var B=this.getWidth()*2;
z-=B;
A-=B;
if(z<0){z=0;
}
if(A<0){A=0;
}}y.style.width=z+o;
y.style.height=A+o;
},tint:function(E,F){var G=qx.theme.manager.Color.getInstance();

if(F==null){F=this.getBackgroundColor();
}E.style.backgroundColor=G.resolve(F)||q;
},_applyWidth:function(){if(qx.core.Variant.isSet(t,r)){if(this.__sa){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(t,r)){if(this.__sa){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sa=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(I,J,K){qx.ui.decoration.Abstract.call(this);
if(I!=null){this.setWidth(I);
}
if(J!=null){this.setStyle(J);
}
if(K!=null){this.setColor(K);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__sc:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__sc;
},getMarkup:function(L){if(this.__sc){return this.__sc;
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
return this.__sc=O;
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
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__sc){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__sc){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__sc=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(q,r){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__sd=new qx.ui.decoration.css3.BorderImage();

if(q){this.__se(q);
}}else{this.__sd=new qx.ui.decoration.GridDiv(q);
}
if(r!=null){this.__sd.setInsets(r);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__sd:null,getMarkup:function(){return this.__sd.getMarkup();
},resize:function(A,B,C){this.__sd.resize(A,B,C);
},tint:function(D,E){},getInsets:function(){return this.__sd.getInsets();
},_applyInsets:function(n,o,name){var p=f+qx.lang.String.firstUp(name);
this.__sd[p](n);
},_applyBaseImage:function(F,G){if(this.__sd instanceof qx.ui.decoration.GridDiv){this.__sd.setBaseImage(F);
}else{this.__se(F);
}},__se:function(s){this.__sd.setBorderImage(s);
var w=qx.util.AliasManager.getInstance().resolve(s);
var x=/(.*)(\.[a-z]+)$/.exec(w);
var u=x[1];
var v=x[2];
var t=qx.util.ResourceManager.getInstance();
var y=t.getImageHeight(u+d+v);
var z=t.getImageWidth(u+k+v);
this.__sd.setSlice([y,z]);
}},destruct:function(){this.__sd=null;
}});
})();
(function(){var u="_applyStyle",t='"></div>',s="Color",r="1px",q='<div style="',p='border:',o="1px solid ",n="",m=";",l="px",I='</div>',H="qx.ui.decoration.Beveled",G="qx.debug",F='<div style="position:absolute;top:1px;left:1px;',E='border-bottom:',D='border-right:',C='border-left:',B='border-top:',A="Number",z='<div style="position:absolute;top:1px;left:0px;',x='position:absolute;top:0px;left:1px;',y='<div style="overflow:hidden;font-size:0;line-height:0;">',v="on",w="absolute";
qx.Class.define(H,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(M,N,O){qx.ui.decoration.Abstract.call(this);
if(M!=null){this.setOuterColor(M);
}
if(N!=null){this.setInnerColor(N);
}
if(O!=null){this.setInnerOpacity(O);
}},properties:{innerColor:{check:s,nullable:true,apply:u},innerOpacity:{check:A,init:1,apply:u},outerColor:{check:s,nullable:true,apply:u},backgroundColor:{check:s,nullable:true,apply:u}},members:{__sf:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__sf;
},_applyStyle:function(){if(qx.core.Variant.isSet(G,v)){if(this.__sf){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__sf){return this.__sf;
}var P=qx.theme.manager.Color.getInstance();
var Q=[];
var T=o+P.resolve(this.getOuterColor())+m;
var S=o+P.resolve(this.getInnerColor())+m;
Q.push(y);
Q.push(q);
Q.push(p,T);
Q.push(qx.bom.element.Opacity.compile(0.35));
Q.push(t);
Q.push(z);
Q.push(C,T);
Q.push(D,T);
Q.push(t);
Q.push(q);
Q.push(x);
Q.push(B,T);
Q.push(E,T);
Q.push(t);
var R={position:w,top:r,left:r};
Q.push(this._generateBackgroundMarkup(R));
Q.push(F);
Q.push(p,S);
Q.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
Q.push(t);
Q.push(I);
return this.__sf=Q.join(n);
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
},tint:function(J,K){var L=qx.theme.manager.Color.getInstance();

if(K==null){K=this.getBackgroundColor();
}J.childNodes[3].style.backgroundColor=L.resolve(K)||n;
}},destruct:function(){this.__sf=null;
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
(function(){var hv="button-frame",hu="atom",ht="widget",hs="main",hr="button",hq="text-selected",hp="image",ho="bold",hn="middle",hm="background-light",fY="text-disabled",fX="groupbox",fW="decoration/arrows/down.png",fV="cell",fU="selected",fT="border-invalid",fS="input",fR="input-disabled",fQ="menu-button",fP="input-focused-invalid",hC="toolbar-button",hD="spinner",hA="input-focused",hB="popup",hy="tooltip",hz="label",hw="list",hx="tree-item",hE="treevirtual-contract",hF="scrollbar",gU="datechooser/nav-button",gT="text-hovered",gW="center",gV="treevirtual-expand",gY="textfield",gX="decoration/arrows/right.png",hb="background-application",ha="radiobutton",gS="white",gR="invalid",dV="combobox",dW="right-top",dX="checkbox",dY="text-title",ea="qx/static/blank.gif",eb="scrollbar/button",ec="right",ed="combobox/button",ee="icon/16/places/folder.png",ef="text-label",hT="decoration/tree/closed.png",hS="scrollbar-slider-horizontal",hR="decoration/arrows/left.png",hQ="button-focused",hX="text-light",hW="menu-slidebar-button",hV="text-input",hU="slidebar/button-forward",ia="background-splitpane",hY=".png",eX="decoration/tree/open.png",eY="default",eV="decoration/arrows/down-small.png",eW="datechooser",fc="slidebar/button-backward",fd="selectbox",fa="treevirtual-folder",fb="shadow-popup",eT="icon/16/mimetypes/office-document.png",eU="background-medium",ez="table",ey="decoration/arrows/up.png",eB="decoration/form/",eA="",ev="-invalid",eu="icon/16/places/folder-open.png",ex="button-checked",ew="decoration/window/maximize-active-hovered.png",et="radiobutton-hovered",es="keyboard-focus",fj="decoration/cursors/",fk="slidebar",fl="tooltip-error-arrow",fm="table-scroller-focus-indicator",ff="move-frame",fg="nodrop",fh="decoration/table/boolean-true.png",fi="table-header-cell",fn="menu",fo="app-header",eM="row-layer",eL="text-inactive",eK="move",eJ="radiobutton-checked-focused",eI="decoration/window/restore-active-hovered.png",eH="shadow-window",eG="table-column-button",eF="right.png",eQ="tabview-page-button-bottom-inactive",eP="tooltip-error",fp="window-statusbar",fq="button-hovered",fr="decoration/scrollbar/scrollbar-",fs="background-tip",ft="scrollbar-slider-horizontal-disabled",fu="table-scroller-header",fv="button-pressed",fw="table-pane",fx="decoration/window/close-active.png",fy="native",gh="checkbox-hovered",gg="button-invalid-shadow",gf="checkbox-checked",ge="decoration/window/minimize-active-hovered.png",gl="menubar",gk="icon/16/actions/dialog-cancel.png",gj="tabview-page-button-top-inactive",gi="tabview-page-button-left-inactive",gp="menu-slidebar",go="toolbar-button-checked",gM="decoration/tree/open-selected.png",gN="radiobutton-checked",gK="decoration/window/minimize-inactive.png",gL="icon/16/apps/office-calendar.png",gI="group",gJ="tabview-page-button-right-inactive",gG="decoration/window/minimize-active.png",gH="decoration/window/restore-inactive.png",gO="checkbox-checked-focused",gP="splitpane",hf="combobox/textfield",he="button-preselected-focused",hh="decoration/window/close-active-hovered.png",hg="qx/icon/Tango/16/actions/window-close.png",hj="checkbox-pressed",hi="button-disabled",hl="selected-dragover",hk="border-separator",hd="decoration/window/maximize-inactive.png",hc="dragover",hM="scrollarea",hN="scrollbar-vertical",hO="decoration/menu/checkbox-invert.gif",hP="decoration/toolbar/toolbar-handle-knob.gif",hI="icon/22/mimetypes/office-document.png",hJ="button-preselected",hK="button-checked-focused",hL="up.png",hG="best-fit",hH="decoration/tree/closed-selected.png",dU="qx.theme.modern.Appearance",dT="text-active",dS="toolbar-button-hovered",dR="progressive-table-header",dQ="decoration/table/select-column-order.png",dP="decoration/menu/radiobutton.gif",dO="decoration/arrows/forward.png",dN="decoration/table/descending.png",dM="window-captionbar-active",dL="checkbox-checked-hovered",ei="scrollbar-slider-vertical",ej="toolbar",eg="alias",eh="decoration/window/restore-active.png",em="decoration/table/boolean-false.png",en="checkbox-checked-disabled",ek="icon/32/mimetypes/office-document.png",el="radiobutton-checked-disabled",ep="tabview-pane",eq="decoration/arrows/rewind.png",gt="checkbox-focused",gn="top",gA="#EEE",gw="icon/16/actions/dialog-ok.png",gc="radiobutton-checked-hovered",ga="table-header-cell-hovered",eD="window",gd="text-gray",eO="decoration/menu/radiobutton-invert.gif",eN="text-placeholder",fH="slider",fI="keep-align",fJ="down.png",fK="tabview-page-button-top-active",fL="icon/32/places/folder-open.png",fM="icon/22/places/folder.png",fN="decoration/window/maximize-active.png",fO="checkbox-checked-pressed",fF="decoration/window/close-inactive.png",fG="tabview-page-button-left-active",gb="toolbar-part",gz="decoration/splitpane/knob-vertical.png",gy=".gif",gx="icon/22/places/folder-open.png",gE="radiobutton-checked-pressed",gD="table-statusbar",gC="radiobutton-pressed",gB="window-captionbar-inactive",gv="copy",gu="radiobutton-focused",eo="decoration/arrows/down-invert.png",eS="decoration/menu/checkbox.gif",eR="decoration/splitpane/knob-horizontal.png",gm="icon/32/places/folder.png",fe="toolbar-separator",gs="tabview-page-button-bottom-active",gr="decoration/arrows/up-small.png",gq="decoration/table/ascending.png",eC="decoration/arrows/up-invert.png",gF="small",er="tabview-page-button-right-active",eE="-disabled",fz="scrollbar-horizontal",fA="progressive-table-header-cell",fB="menu-separator",fC="pane",fD="decoration/arrows/right-invert.png",fE="left.png",gQ="icon/16/actions/view-refresh.png";
qx.Theme.define(dU,{appearances:{"widget":{},"root":{style:function(dd){return {backgroundColor:hb,textColor:ef,font:eY};
}},"label":{style:function(dr){return {textColor:dr.disabled?fY:undefined};
}},"move-frame":{style:function(A){return {decorator:hs};
}},"resize-frame":ff,"dragdrop-cursor":{style:function(ca){var cb=fg;

if(ca.copy){cb=gv;
}else if(ca.move){cb=eK;
}else if(ca.alias){cb=eg;
}return {source:fj+cb+gy,position:dW,offset:[2,16,2,6]};
}},"image":{style:function(bx){return {opacity:!bx.replacement&&bx.disabled?0.3:1};
}},"atom":{},"atom/label":hz,"atom/icon":hp,"popup":{style:function(T){return {decorator:hs,backgroundColor:hm,shadow:fb};
}},"button-frame":{alias:hu,style:function(dF){var dH,dG;

if(dF.checked&&dF.focused&&!dF.inner){dH=hK;
dG=undefined;
}else if(dF.disabled){dH=hi;
dG=undefined;
}else if(dF.pressed){dH=fv;
dG=gT;
}else if(dF.checked){dH=ex;
dG=undefined;
}else if(dF.hovered){dH=fq;
dG=gT;
}else if(dF.preselected&&dF.focused&&!dF.inner){dH=he;
dG=gT;
}else if(dF.preselected){dH=hJ;
dG=gT;
}else if(dF.focused&&!dF.inner){dH=hQ;
dG=undefined;
}else{dH=hr;
dG=undefined;
}return {decorator:dH,textColor:dG,shadow:dF.invalid&&!dF.disabled?gg:undefined};
}},"button-frame/image":{style:function(cX){return {opacity:!cX.replacement&&cX.disabled?0.5:1};
}},"button":{alias:hv,include:hv,style:function(cv){return {padding:[2,8],center:true};
}},"hover-button":{alias:hu,include:hu,style:function(dm){return {decorator:dm.hovered?fU:undefined,textColor:dm.hovered?hq:undefined};
}},"splitbutton":{},"splitbutton/button":hr,"splitbutton/arrow":{alias:hr,include:hr,style:function(bD){return {icon:fW,padding:2,marginLeft:1};
}},"checkbox":{alias:hu,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=gO;
}else if(cB.checked&&cB.disabled){cD=en;
}else if(cB.checked&&cB.pressed){cD=fO;
}else if(cB.checked&&cB.hovered){cD=dL;
}else if(cB.checked){cD=gf;
}else if(cB.focused){cD=gt;
}else if(cB.pressed){cD=hj;
}else if(cB.hovered){cD=gh;
}else{cD=dX;
}var cC=cB.invalid&&!cB.disabled?ev:eA;
return {icon:eB+cD+cC+hY,gap:6};
}},"radiobutton":{alias:hu,style:function(cI){var cK;

if(cI.checked&&cI.focused){cK=eJ;
}else if(cI.checked&&cI.disabled){cK=el;
}else if(cI.checked&&cI.pressed){cK=gE;
}else if(cI.checked&&cI.hovered){cK=gc;
}else if(cI.checked){cK=gN;
}else if(cI.focused){cK=gu;
}else if(cI.pressed){cK=gC;
}else if(cI.hovered){cK=et;
}else{cK=ha;
}var cJ=cI.invalid&&!cI.disabled?ev:eA;
return {icon:eB+cK+cJ+hY,gap:6};
}},"textfield":{style:function(bG){var bL;
var bJ=!!bG.focused;
var bK=!!bG.invalid;
var bH=!!bG.disabled;

if(bJ&&bK&&!bH){bL=fP;
}else if(bJ&&!bK&&!bH){bL=hA;
}else if(bH){bL=fR;
}else if(!bJ&&bK&&!bH){bL=fT;
}else{bL=fS;
}var bI;

if(bG.disabled){bI=fY;
}else if(bG.showingPlaceholder){bI=eN;
}else{bI=hV;
}return {decorator:bL,padding:[2,4,1],textColor:bI};
}},"textarea":{include:gY,style:function(d){return {padding:4};
}},"spinner":{style:function(I){var M;
var K=!!I.focused;
var L=!!I.invalid;
var J=!!I.disabled;

if(K&&L&&!J){M=fP;
}else if(K&&!L&&!J){M=hA;
}else if(J){M=fR;
}else if(!K&&L&&!J){M=fT;
}else{M=fS;
}return {decorator:M};
}},"spinner/textfield":{style:function(cp){return {marginRight:2,padding:[2,4,1],textColor:cp.disabled?fY:hV};
}},"spinner/upbutton":{alias:hv,include:hv,style:function(dg){return {icon:gr,padding:dg.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:hv,include:hv,style:function(cc){return {icon:eV,padding:cc.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":dV,"datefield/button":{alias:ed,include:ed,style:function(cn){return {icon:gL,padding:[0,3],decorator:undefined};
}},"datefield/textfield":hf,"datefield/list":{alias:eW,include:eW,style:function(H){return {decorator:undefined};
}},"groupbox":{style:function(V){return {legendPosition:gn};
}},"groupbox/legend":{alias:hu,style:function(cs){return {padding:[1,0,1,4],textColor:cs.invalid?gR:dY,font:ho};
}},"groupbox/frame":{style:function(f){return {padding:12,decorator:gI};
}},"check-groupbox":fX,"check-groupbox/legend":{alias:dX,include:dX,style:function(dc){return {padding:[1,0,1,4],textColor:dc.invalid?gR:dY,font:ho};
}},"radio-groupbox":fX,"radio-groupbox/legend":{alias:ha,include:ha,style:function(bM){return {padding:[1,0,1,4],textColor:bM.invalid?gR:dY,font:ho};
}},"scrollarea":{style:function(cU){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(C){return {backgroundColor:hb};
}},"scrollarea/pane":ht,"scrollarea/scrollbar-x":hF,"scrollarea/scrollbar-y":hF,"scrollbar":{style:function(ig){if(ig[fy]){return {};
}return {width:ig.horizontal?undefined:16,height:ig.horizontal?16:undefined,decorator:ig.horizontal?fz:hN,padding:1};
}},"scrollbar/slider":{alias:fH,style:function(cu){return {padding:cu.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:hv,style:function(bl){var bm=bl.horizontal?hS:ei;

if(bl.disabled){bm+=eE;
}return {decorator:bm,minHeight:bl.horizontal?undefined:9,minWidth:bl.horizontal?9:undefined};
}},"scrollbar/button":{alias:hv,include:hv,style:function(br){var bs=fr;

if(br.left){bs+=fE;
}else if(br.right){bs+=eF;
}else if(br.up){bs+=hL;
}else{bs+=fJ;
}
if(br.left||br.right){return {padding:[0,0,0,br.left?3:4],icon:bs,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bs,width:14,height:15};
}}},"scrollbar/button-begin":eb,"scrollbar/button-end":eb,"slider":{style:function(bN){var bR;
var bP=!!bN.focused;
var bQ=!!bN.invalid;
var bO=!!bN.disabled;

if(bP&&bQ&&!bO){bR=fP;
}else if(bP&&!bQ&&!bO){bR=hA;
}else if(bO){bR=fR;
}else if(!bP&&bQ&&!bO){bR=fT;
}else{bR=fS;
}return {decorator:bR};
}},"slider/knob":{include:hv,style:function(v){return {decorator:v.disabled?ft:hS,shadow:undefined,height:14,width:14};
}},"list":{alias:hM,style:function(cg){var ck;
var ci=!!cg.focused;
var cj=!!cg.invalid;
var ch=!!cg.disabled;

if(ci&&cj&&!ch){ck=fP;
}else if(ci&&!cj&&!ch){ck=hA;
}else if(ch){ck=fR;
}else if(!ci&&cj&&!ch){ck=fT;
}else{ck=fS;
}return {backgroundColor:hm,decorator:ck};
}},"list/pane":ht,"listitem":{alias:hu,style:function(cE){var cF;

if(cE.dragover){cF=cE.selected?hl:hc;
}else{cF=cE.selected?fU:undefined;
}return {padding:cE.dragover?[4,4,2,4]:4,textColor:cE.selected?hq:undefined,decorator:cF};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:hv,include:hv,style:function(dC){return {padding:5,center:true,icon:dC.vertical?fW:gX};
}},"slidebar/button-backward":{alias:hv,include:hv,style:function(dh){return {padding:5,center:true,icon:dh.vertical?ey:hR};
}},"tabview":{style:function(cm){return {contentPadding:16};
}},"tabview/bar":{alias:fk,style:function(cN){var cO={marginBottom:cN.barTop?-1:0,marginTop:cN.barBottom?-4:0,marginLeft:cN.barRight?-3:0,marginRight:cN.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(cN.barTop||cN.barBottom){cO.paddingLeft=5;
cO.paddingRight=7;
}else{cO.paddingTop=5;
cO.paddingBottom=7;
}return cO;
}},"tabview/bar/button-forward":{include:hU,alias:hU,style:function(db){if(db.barTop||db.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:fc,alias:fc,style:function(dw){if(dw.barTop||dw.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(cA){return {decorator:ep,minHeight:100,marginBottom:cA.barBottom?-1:0,marginTop:cA.barTop?-1:0,marginLeft:cA.barLeft?-1:0,marginRight:cA.barRight?-1:0};
}},"tabview-page":ht,"tabview-page/button":{alias:hu,style:function(n){var t,p=0;
var s=0,o=0,q=0,r=0;

if(n.checked){if(n.barTop){t=fK;
p=[6,14];
q=n.firstTab?0:-5;
r=n.lastTab?0:-5;
}else if(n.barBottom){t=gs;
p=[6,14];
q=n.firstTab?0:-5;
r=n.lastTab?0:-5;
}else if(n.barRight){t=er;
p=[6,13];
s=n.firstTab?0:-5;
o=n.lastTab?0:-5;
}else{t=fG;
p=[6,13];
s=n.firstTab?0:-5;
o=n.lastTab?0:-5;
}}else{if(n.barTop){t=gj;
p=[4,10];
s=4;
q=n.firstTab?5:1;
r=1;
}else if(n.barBottom){t=eQ;
p=[4,10];
o=4;
q=n.firstTab?5:1;
r=1;
}else if(n.barRight){t=gJ;
p=[4,10];
r=5;
s=n.firstTab?5:1;
o=1;
q=1;
}else{t=gi;
p=[4,10];
q=5;
s=n.firstTab?5:1;
o=1;
r=1;
}}return {zIndex:n.checked?10:5,decorator:t,padding:p,marginTop:s,marginBottom:o,marginLeft:q,marginRight:r,textColor:n.checked?dT:eL};
}},"tabview-page/button/label":{alias:hz,style:function(cQ){return {padding:[0,1,0,1],margin:cQ.focused?0:1,decorator:cQ.focused?es:undefined};
}},"tabview-page/button/close-button":{alias:hu,style:function(ic){return {icon:hg};
}},"toolbar":{style:function(l){return {decorator:ej,spacing:2};
}},"toolbar/part":{style:function(bY){return {decorator:gb,spacing:2};
}},"toolbar/part/container":{style:function(du){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(id){return {source:hP,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:hu,style:function(j){return {marginTop:2,marginBottom:2,padding:(j.pressed||j.checked||j.hovered)&&!j.disabled||(j.disabled&&j.checked)?3:5,decorator:j.pressed||(j.checked&&!j.hovered)||(j.checked&&j.disabled)?go:j.hovered&&!j.disabled?dS:undefined};
}},"toolbar-menubutton":{alias:hC,include:hC,style:function(G){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:hp,include:hp,style:function(bf){return {source:eV};
}},"toolbar-splitbutton":{style:function(W){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:hC,include:hC,style:function(N){return {icon:fW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:hC,include:hC,style:function(cS){return {padding:cS.pressed||cS.checked?1:cS.hovered?1:3,icon:fW,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(bC){return {decorator:fe,margin:7};
}},"tree":hw,"tree-item":{style:function(dz){return {padding:[2,6],textColor:dz.selected?hq:undefined,decorator:dz.selected?fU:undefined};
}},"tree-item/icon":{include:hp,style:function(ib){return {paddingRight:5};
}},"tree-item/label":hz,"tree-item/open":{include:hp,style:function(dj){var dk;

if(dj.selected&&dj.opened){dk=gM;
}else if(dj.selected&&!dj.opened){dk=hH;
}else if(dj.opened){dk=eX;
}else{dk=hT;
}return {padding:[0,5,0,2],source:dk};
}},"tree-folder":{include:hx,alias:hx,style:function(cL){var cM;

if(cL.small){cM=cL.opened?eu:ee;
}else if(cL.large){cM=cL.opened?fL:gm;
}else{cM=cL.opened?gx:fM;
}return {icon:cM};
}},"tree-file":{include:hx,alias:hx,style:function(cW){return {icon:cW.small?eT:cW.large?ek:hI};
}},"treevirtual":ez,"treevirtual-folder":{style:function(dq){return {icon:dq.opened?eu:ee};
}},"treevirtual-file":{include:fa,alias:fa,style:function(u){return {icon:eT};
}},"treevirtual-line":{style:function(e){return {icon:ea};
}},"treevirtual-contract":{style:function(dv){return {icon:eX,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(dl){return {icon:hT,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":hE,"treevirtual-only-expand":gV,"treevirtual-start-contract":hE,"treevirtual-start-expand":gV,"treevirtual-end-contract":hE,"treevirtual-end-expand":gV,"treevirtual-cross-contract":hE,"treevirtual-cross-expand":gV,"treevirtual-end":{style:function(bh){return {icon:ea};
}},"treevirtual-cross":{style:function(cY){return {icon:ea};
}},"tooltip":{include:hB,style:function(bX){return {backgroundColor:fs,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":hu,"tooltip-error":{include:hy,style:function(bg){return {textColor:hq,placeMethod:ht,offset:[0,0,0,14],marginTop:-2,position:dW,showTimeout:100,hideTimeout:10000,decorator:eP,shadow:fl,font:ho};
}},"tooltip-error/atom":hu,"window":{style:function(bk){return {shadow:eH,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(di){return {decorator:eD};
}},"window/captionbar":{style:function(cR){return {decorator:cR.active?dM:gB,textColor:cR.active?gS:gd,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(bA){return {margin:[5,0,3,6]};
}},"window/title":{style:function(ds){return {alignY:hn,font:ho,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:hu,style:function(y){return {icon:y.active?y.hovered?ge:gG:gK,margin:[4,8,2,0]};
}},"window/restore-button":{alias:hu,style:function(bV){return {icon:bV.active?bV.hovered?eI:eh:gH,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:hu,style:function(bt){return {icon:bt.active?bt.hovered?ew:fN:hd,margin:[4,8,2,0]};
}},"window/close-button":{alias:hu,style:function(bE){return {icon:bE.active?bE.hovered?hh:fx:fF,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(dA){return {padding:[2,6],decorator:fp,minHeight:18};
}},"window/statusbar-text":{style:function(ie){return {font:gF};
}},"iframe":{style:function(bF){return {decorator:hs};
}},"resizer":{style:function(co){return {decorator:fC};
}},"splitpane":{style:function(cw){return {decorator:gP};
}},"splitpane/splitter":{style:function(k){return {width:k.horizontal?3:undefined,height:k.vertical?3:undefined,backgroundColor:ia};
}},"splitpane/splitter/knob":{style:function(Y){return {source:Y.horizontal?eR:gz};
}},"splitpane/slider":{style:function(x){return {width:x.horizontal?3:undefined,height:x.vertical?3:undefined,backgroundColor:ia};
}},"selectbox":{alias:hv,include:hv,style:function(dD){return {padding:[2,8]};
}},"selectbox/atom":hu,"selectbox/popup":hB,"selectbox/list":{alias:hw},"selectbox/arrow":{include:hp,style:function(cH){return {source:fW,paddingLeft:5};
}},"datechooser":{style:function(O){var S;
var Q=!!O.focused;
var R=!!O.invalid;
var P=!!O.disabled;

if(Q&&R&&!P){S=fP;
}else if(Q&&!R&&!P){S=hA;
}else if(P){S=fR;
}else if(!Q&&R&&!P){S=fT;
}else{S=fS;
}return {padding:2,decorator:S,backgroundColor:hm};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:hv,alias:hv,style:function(dn){var dp={padding:[2,4],shadow:undefined};

if(dn.lastYear){dp.icon=eq;
dp.marginRight=1;
}else if(dn.lastMonth){dp.icon=hR;
}else if(dn.nextYear){dp.icon=dO;
dp.marginLeft=1;
}else if(dn.nextMonth){dp.icon=gX;
}return dp;
}},"datechooser/last-year-button-tooltip":hy,"datechooser/last-month-button-tooltip":hy,"datechooser/next-year-button-tooltip":hy,"datechooser/next-month-button-tooltip":hy,"datechooser/last-year-button":gU,"datechooser/last-month-button":gU,"datechooser/next-month-button":gU,"datechooser/next-year-button":gU,"datechooser/month-year-label":{style:function(ct){return {font:ho,textAlign:gW,textColor:ct.disabled?fY:undefined};
}},"datechooser/date-pane":{style:function(bw){return {textColor:bw.disabled?fY:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(by){return {textColor:by.disabled?fY:by.weekend?hX:undefined,textAlign:gW,paddingTop:2,backgroundColor:eU};
}},"datechooser/week":{style:function(bu){return {textAlign:gW,padding:[2,4],backgroundColor:eU};
}},"datechooser/day":{style:function(z){return {textAlign:gW,decorator:z.disabled?undefined:z.selected?fU:undefined,textColor:z.disabled?fY:z.selected?hq:z.otherMonth?hX:undefined,font:z.today?ho:undefined,padding:[2,4]};
}},"combobox":{style:function(ba){var be;
var bc=!!ba.focused;
var bd=!!ba.invalid;
var bb=!!ba.disabled;

if(bc&&bd&&!bb){be=fP;
}else if(bc&&!bd&&!bb){be=hA;
}else if(bb){be=fR;
}else if(!bc&&bd&&!bb){be=fT;
}else{be=fS;
}return {decorator:be};
}},"combobox/popup":hB,"combobox/list":{alias:hw},"combobox/button":{include:hv,alias:hv,style:function(bn){var bo={icon:fW,padding:2};

if(bn.selected){bo.decorator=hQ;
}return bo;
}},"combobox/textfield":{include:gY,style:function(B){return {decorator:undefined};
}},"menu":{style:function(cd){var ce={decorator:fn,shadow:fb,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:cd.submenu||cd.contextmenu?hG:fI};

if(cd.submenu){ce.position=dW;
ce.offset=[-2,-3];
}return ce;
}},"menu/slidebar":gp,"menu-slidebar":ht,"menu-slidebar-button":{style:function(a){return {decorator:a.hovered?fU:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:hW,style:function(dt){return {icon:dt.hovered?eC:ey};
}},"menu-slidebar/button-forward":{include:hW,style:function(m){return {icon:m.hovered?eo:fW};
}},"menu-separator":{style:function(cl){return {height:0,decorator:fB,margin:[4,2]};
}},"menu-button":{alias:hu,style:function(g){return {decorator:g.selected?fU:undefined,textColor:g.selected?hq:undefined,padding:[4,6]};
}},"menu-button/icon":{include:hp,style:function(bz){return {alignY:hn};
}},"menu-button/label":{include:hz,style:function(bq){return {alignY:hn,padding:1};
}},"menu-button/shortcut":{include:hz,style:function(bi){return {alignY:hn,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:hp,style:function(cz){return {source:cz.selected?fD:gX,alignY:hn};
}},"menu-checkbox":{alias:fQ,include:fQ,style:function(dI){return {icon:!dI.checked?undefined:dI.selected?hO:eS};
}},"menu-radiobutton":{alias:fQ,include:fQ,style:function(X){return {icon:!X.checked?undefined:X.selected?eO:dP};
}},"menubar":{style:function(dE){return {decorator:gl};
}},"menubar-button":{alias:hu,style:function(U){return {decorator:U.pressed||U.hovered?fU:undefined,textColor:U.pressed||U.hovered?hq:undefined,padding:[3,8]};
}},"colorselector":ht,"colorselector/control-bar":ht,"colorselector/control-pane":ht,"colorselector/visual-pane":fX,"colorselector/preset-grid":ht,"colorselector/colorbucket":{style:function(cy){return {decorator:hs,width:16,height:16};
}},"colorselector/preset-field-set":fX,"colorselector/input-field-set":fX,"colorselector/preview-field-set":fX,"colorselector/hex-field-composite":ht,"colorselector/hex-field":gY,"colorselector/rgb-spinner-composite":ht,"colorselector/rgb-spinner-red":hD,"colorselector/rgb-spinner-green":hD,"colorselector/rgb-spinner-blue":hD,"colorselector/hsb-spinner-composite":ht,"colorselector/hsb-spinner-hue":hD,"colorselector/hsb-spinner-saturation":hD,"colorselector/hsb-spinner-brightness":hD,"colorselector/preview-content-old":{style:function(bS){return {decorator:hs,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(da){return {decorator:hs,backgroundColor:hm,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cP){return {decorator:hs,margin:5};
}},"colorselector/brightness-field":{style:function(cr){return {decorator:hs,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ht,"colorselector/hue-saturation-handle":ht,"colorselector/brightness-pane":ht,"colorselector/brightness-handle":ht,"colorpopup":{alias:hB,include:hB,style:function(D){return {padding:5,backgroundColor:hb};
}},"colorpopup/field":{style:function(bW){return {decorator:hs,margin:2,width:14,height:14,backgroundColor:hm};
}},"colorpopup/selector-button":hr,"colorpopup/auto-button":hr,"colorpopup/preview-pane":fX,"colorpopup/current-preview":{style:function(cV){return {height:20,padding:4,marginLeft:4,decorator:hs,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(E){return {height:20,padding:4,marginRight:4,decorator:hs,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:hr,include:hr,style:function(cG){return {icon:gw};
}},"colorpopup/colorselector-cancelbutton":{alias:hr,include:hr,style:function(cq){return {icon:gk};
}},"table":{alias:ht,style:function(dB){return {decorator:ez};
}},"table-header":{},"table/statusbar":{style:function(F){return {decorator:gD,padding:[0,2]};
}},"table/column-button":{alias:hv,style:function(bB){return {decorator:eG,padding:3,icon:dQ};
}},"table-column-reset-button":{include:fQ,alias:fQ,style:function(){return {icon:gQ};
}},"table-scroller":ht,"table-scroller/scrollbar-x":hF,"table-scroller/scrollbar-y":hF,"table-scroller/header":{style:function(df){return {decorator:fu};
}},"table-scroller/pane":{style:function(bv){return {backgroundColor:fw};
}},"table-scroller/focus-indicator":{style:function(bj){return {decorator:fm};
}},"table-scroller/resize-line":{style:function(bT){return {backgroundColor:hk,width:2};
}},"table-header-cell":{alias:hu,style:function(bp){return {minWidth:13,minHeight:20,padding:bp.hovered?[3,4,2,4]:[3,4],decorator:bp.hovered?ga:fi,sortIcon:bp.sorted?(bp.sortedAscending?gq:dN):undefined};
}},"table-header-cell/label":{style:function(cT){return {minWidth:0,alignY:hn,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(cf){return {alignY:hn,alignX:ec};
}},"table-header-cell/icon":{style:function(i){return {minWidth:0,alignY:hn,paddingRight:5};
}},"table-editor-textfield":{include:gY,style:function(bU){return {decorator:undefined,padding:[2,2],backgroundColor:hm};
}},"table-editor-selectbox":{include:fd,alias:fd,style:function(cx){return {padding:[0,2],backgroundColor:hm};
}},"table-editor-combobox":{include:dV,alias:dV,style:function(c){return {decorator:undefined,backgroundColor:hm};
}},"progressive-table-header":{alias:ht,style:function(w){return {decorator:dR};
}},"progressive-table-header-cell":{alias:hu,style:function(dx){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:fA};
}},"app-header":{style:function(dK){return {font:ho,textColor:hq,padding:[8,12],decorator:fo};
}},"virtual-list":hw,"virtual-list/row-layer":eM,"row-layer":{style:function(h){return {colorEven:gS,colorOdd:gA};
}},"column-layer":ht,"cell":{style:function(dJ){return {textColor:dJ.selected?hq:ef,padding:[3,6],font:eY};
}},"cell-string":fV,"cell-number":{include:fV,style:function(dy){return {textAlign:ec};
}},"cell-image":fV,"cell-boolean":{include:fV,style:function(de){return {iconTrue:fh,iconFalse:em};
}},"cell-atom":fV,"cell-date":fV,"cell-html":fV,"htmlarea":{"include":ht,style:function(b){return {backgroundColor:gS};
}}}});
})();
(function(){var d="tree",c="main",b="Demo browser",a="demobrowser.Appearance";
qx.Theme.define(a,{extend:qx.theme.modern.Appearance,title:b,appearances:{"demo-tree":{alias:d,include:d,style:function(){return {width:270,decorator:c};
}}}});
})();
(function(){var b="demobrowser.Theme",a="Demo browser";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,icon:qx.theme.icon.Tango,appearance:demobrowser.Appearance}});
})();
(function(){var n="_applyStyle",m="stretch",l="Integer",k="px",j=" ",i="repeat",h="round",g="shorthand",f="px ",e="sliceBottom",E=";'></div>",D="<div style='",C="qx.debug",B="sliceLeft",A="sliceRight",z="repeatX",y="String",x="qx.ui.decoration.css3.BorderImage",w="border-box",v="",t='") ',u="sliceTop",r='url("',s="hidden",p="on",q="repeatY",o="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,construct:function(F,G){qx.ui.decoration.Abstract.call(this);
if(F!=null){this.setBorderImage(F);
}
if(G!=null){this.setSlice(G);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:y,nullable:true,apply:n},sliceTop:{check:l,init:0,apply:n},sliceRight:{check:l,init:0,apply:n},sliceBottom:{check:l,init:0,apply:n},sliceLeft:{check:l,init:0,apply:n},slice:{group:[u,A,e,B],mode:g},repeatX:{check:[m,i,h],init:m,apply:n},repeatY:{check:[m,i,h],init:m,apply:n},repeat:{group:[z,q],mode:g}},members:{__sg:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sg;
},getMarkup:function(){if(this.__sg){return this.__sg;
}var b=this._resolveImageUrl(this.getBorderImage());
var c=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var d=[this.getRepeatX(),this.getRepeatY()].join(j);
this.__sg=[D,qx.bom.element.Style.compile({"borderImage":r+b+t+c.join(j)+j+d,position:o,lineHeight:0,fontSize:0,overflow:s,boxSizing:w,borderWidth:c.join(f)+k}),E].join(v);
return this.__sg;
},resize:function(H,I,J){H.style.width=I+k;
H.style.height=J+k;
},tint:function(K,L){},_applyStyle:function(){if(qx.core.Variant.isSet(C,p)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(a){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(a));
}},destruct:function(){this.__sg=null;
}});
})();
(function(){var l="px",k="0px",j="-1px",i="no-repeat",h="scale-x",g="scale-y",f="-tr",e="-l",d='</div>',c="scale",B="qx.client",A="-br",z="-t",y="-tl",x="-r",w='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',v="qx.debug",u="_applyBaseImage",t="-b",s="String",q="",r="-bl",o="qx.ui.decoration.GridDiv",p="-c",m="mshtml",n="on";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(L,M){qx.ui.decoration.Abstract.call(this);
if(L!=null){this.setBaseImage(L);
}
if(M!=null){this.setInsets(M);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__sh:null,__si:null,__sj:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__sh;
},getMarkup:function(){if(this.__sh){return this.__sh;
}var C=qx.bom.element.Decoration;
var D=this.__si;
var E=this.__sj;
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
return this.__sh=F.join(q);
},resize:function(G,H,I){var J=this.__sj;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+l;
G.style.height=I+l;
G.childNodes[1].style.width=innerWidth+l;
G.childNodes[4].style.width=innerWidth+l;
G.childNodes[7].style.width=innerWidth+l;
G.childNodes[6].style.height=innerHeight+l;
G.childNodes[7].style.height=innerHeight+l;
G.childNodes[8].style.height=innerHeight+l;

if(qx.core.Variant.isSet(B,m)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(H%2==1){G.childNodes[2].style.marginRight=j;
G.childNodes[5].style.marginRight=j;
G.childNodes[8].style.marginRight=j;
}else{G.childNodes[2].style.marginRight=k;
G.childNodes[5].style.marginRight=k;
G.childNodes[8].style.marginRight=k;
}
if(I%2==1){G.childNodes[3].style.marginBottom=j;
G.childNodes[4].style.marginBottom=j;
G.childNodes[5].style.marginBottom=j;
}else{G.childNodes[3].style.marginBottom=k;
G.childNodes[4].style.marginBottom=k;
G.childNodes[5].style.marginBottom=k;
}}}},tint:function(N,O){},_applyBaseImage:function(P,Q){if(qx.core.Variant.isSet(v,n)){if(this.__sh){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(P){var U=this._resolveImageUrl(P);
var V=/(.*)(\.[a-z]+)$/.exec(U);
var T=V[1];
var S=V[2];
var R=this.__si={tl:T+y+S,t:T+z+S,tr:T+f+S,bl:T+r+S,b:T+t+S,br:T+A+S,l:T+e+S,c:T+p+S,r:T+x+S};
this.__sj=this._computeEdgeSizes(R);
}},_resolveImageUrl:function(K){return qx.util.AliasManager.getInstance().resolve(K);
},_computeEdgeSizes:function(a){var b=qx.util.ResourceManager.getInstance();
return {top:b.getImageHeight(a.t),bottom:b.getImageHeight(a.b),left:b.getImageWidth(a.l),right:b.getImageWidth(a.r)};
}},destruct:function(){this.__sh=this.__si=this.__sj=null;
}});
})();


qx.$$loader.init();

