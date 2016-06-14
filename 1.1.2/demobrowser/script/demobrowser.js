(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"demobrowser.Application","qx.theme":"demobrowser.Theme","qx.version":"1.1.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.contrib":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"demobrowser":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.1.2"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["__out__:demobrowser.js"]],
  urisBefore : [],
  packageHashes : {"0":"67bd8d44313f"},
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

qx.$$packageData['67bd8d44313f']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}},"resources":{"demobrowser/backend/remote_table.php":"demobrowser","demobrowser/css/sourceview.css":"demobrowser","demobrowser/css/style.css":"demobrowser","demobrowser/demo/background/gradient-pressed.png":[250,18,"png","demobrowser"],"demobrowser/demo/background/gradient.png":[250,34,"png","demobrowser"],"demobrowser/demo/background/gradients.svg":"demobrowser","demobrowser/demo/flash/FlashVersion.swf":"demobrowser","demobrowser/demo/flash/TestFlash.mxml":"demobrowser","demobrowser/demo/flash/TestFlash.swf":"demobrowser","demobrowser/demo/flash/build.xml":"demobrowser","demobrowser/demo/flash/fo_tester.fla":"demobrowser","demobrowser/demo/flash/fo_tester.swf":"demobrowser","demobrowser/demo/html/ModalWindow.html":"demobrowser","demobrowser/demo/icons/feed-reader.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/format-indent-less.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-indent-more.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-center.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-fill.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-left.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format-justify-right.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/format.png":[96,16,"png","demobrowser"],"demobrowser/demo/icons/graphics-viewer-document.png":[48,48,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-fill-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-ordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-list-unordered.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/format-text-color.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-horizontal-rule.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-table.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/insert-text.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/htmlarea/qooxdoo_logo.png":[136,41,"png","demobrowser"],"demobrowser/demo/icons/imicons/christian_schmidt.png":[52,64,"png","demobrowser"],"demobrowser/demo/icons/imicons/fabian_jakobs.png":[70,70,"png","demobrowser"],"demobrowser/demo/icons/imicons/jonathan_weiss.png":[218,218,"png","demobrowser"],"demobrowser/demo/icons/imicons/martin_wittemann.png":[52,52,"png","demobrowser"],"demobrowser/demo/icons/imicons/readme.txt":"demobrowser","demobrowser/demo/icons/imicons/status_away.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_busy.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_offline.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/status_online.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_add.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/imicons/user_delete.png":[16,16,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player-disabled.png":[128,128,"png","demobrowser"],"demobrowser/demo/icons/multimedia-player.png":[128,128,"png","demobrowser"],"demobrowser/demo/test/alphaPNG.png":[20,20,"png","demobrowser"],"demobrowser/demo/test/combined/icons22.png":[22,176,"png","demobrowser"],"demobrowser/demo/test/combined/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/test/demobrowser_thumb.png":[113,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",0,0],"demobrowser/demo/test/feedreader_thumb.png":[105,65,"png","demobrowser","demobrowser/demo/test/combined/thumbs.png",-113,0],"demobrowser/demo/test/logo.gif":[136,41,"gif","demobrowser"],"demobrowser/demo/test/thumbs.png":[218,65,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-c.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-l.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor-r.png":[6,12,"png","demobrowser"],"demobrowser/demo/theme/tag-hor.png":[18,12,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-b.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-c.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert-t.png":[12,6,"png","demobrowser"],"demobrowser/demo/theme/tag-vert.png":[12,18,"png","demobrowser"],"demobrowser/welcome/feedreader.png":[250,185,"png","demobrowser"],"demobrowser/welcome/playground.png":[250,185,"png","demobrowser"],"demobrowser/welcome/portal.png":[250,185,"png","demobrowser"],"demobrowser/welcome/showcase.png":[250,185,"png","demobrowser"],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/actions/application-exit.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-clear.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/edit-redo.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-next.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/go-previous.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-start.png":[22,22,"png","qx"],"qx/icon/Tango/22/actions/media-playback-stop.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/internet-web-browser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/office-spreadsheet.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-color-chooser.png":[22,22,"png","qx"],"qx/icon/Tango/22/apps/utilities-log-viewer.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/executable.png":[22,22,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-132],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","demobrowser/demo/test/combined/icons22.png",0,-110],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx"},"translations":{"C":{}}};
(function(){var s="toString",r=".",q="default",p="Object",o='"',n="Array",m="()",k="String",j="Function",h=".prototype",R="function",Q="Boolean",P="Error",O="constructor",N="warn",M="hasOwnProperty",L="string",K="toLocaleString",J="RegExp",I='\", "',z="info",A="BROKEN_IE",x="isPrototypeOf",y="Date",v="",w="qx.Bootstrap",t="]",u="Class",B="error",C="[Class ",E="valueOf",D="Number",G="count",F="debug",H="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return C+this.classname+t;
},createNamespace:function(name,bH){var bJ=name.split(r);
var parent=window;
var bI=bJ[0];

for(var i=0,bK=bJ.length-1;i<bK;i++,bI=bJ[i]){if(!parent[bI]){parent=parent[bI]={};
}else{parent=parent[bI];
}}parent[bI]=bH;
return bI;
},setDisplayName:function(bM,bN,name){bM.displayName=bN+r+name+m;
},setDisplayNames:function(bV,bW){for(var name in bV){var bX=bV[name];

if(bX instanceof Function){bX.displayName=bW+r+name+m;
}}},define:function(name,bz){if(!bz){var bz={statics:{}};
}var bE;
var bC=null;
qx.Bootstrap.setDisplayNames(bz.statics,name);

if(bz.members||bz.extend){qx.Bootstrap.setDisplayNames(bz.members,name+h);
bE=bz.construct||new Function;

if(bz.extend){this.extendClass(bE,bE,bz.extend,name,bD);
}var bA=bz.statics||{};
for(var i=0,bF=qx.Bootstrap.getKeys(bA),l=bF.length;i<l;i++){var bG=bF[i];
bE[bG]=bA[bG];
}bC=bE.prototype;
var bB=bz.members||{};
for(var i=0,bF=qx.Bootstrap.getKeys(bB),l=bF.length;i<l;i++){var bG=bF[i];
bC[bG]=bB[bG];
}}else{bE=bz.statics||{};
}var bD=this.createNamespace(name,bE);
bE.name=bE.classname=name;
bE.basename=bD;
bE.$$type=u;
if(!bE.hasOwnProperty(s)){bE.toString=this.genericToString;
}if(bz.defer){bz.defer(bE,bC);
}qx.Bootstrap.$$registry[name]=bz.statics;
return bE;
}};
qx.Bootstrap.define(w,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(U,V,W,name,X){var bb=W.prototype;
var ba=new Function;
ba.prototype=bb;
var Y=new ba;
U.prototype=Y;
Y.name=Y.classname=name;
Y.basename=X;
V.base=U.superclass=W;
V.self=U.constructor=Y.constructor=U;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bg){return bg.__count__;
},"default":function(bn){var length=0;

for(var bo in bn){length++;
}return length;
}})[(({}).__count__==0)?G:q],objectMergeWith:function(bY,ca,cb){if(cb===undefined){cb=true;
}
for(var cc in ca){if(cb||bY[cc]===undefined){bY[cc]=ca[cc];
}}return bY;
},__gL:[x,M,K,s,E,O],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bi){var bj=[];
var bl=Object.prototype.hasOwnProperty;

for(var bm in bi){if(bl.call(bi,bm)){bj.push(bm);
}}var bk=qx.Bootstrap.__gL;

for(var i=0,a=bk,l=a.length;i<l;i++){if(bl.call(bi,a[i])){bj.push(a[i]);
}}return bj;
},"default":function(ch){var ci=[];
var cj=Object.prototype.hasOwnProperty;

for(var ck in ch){if(cj.call(ch,ck)){ci.push(ck);
}}return ci;
}})[typeof (Object.keys)==
R?H:
(function(){for(var cg in {toString:1}){return cg;
}})()!==s?A:q],getKeysAsString:function(bx){var by=qx.Bootstrap.getKeys(bx);

if(by.length==0){return v;
}return o+by.join(I)+o;
},__gM:{"[object String]":k,"[object Array]":n,"[object Object]":p,"[object RegExp]":J,"[object Number]":D,"[object Boolean]":Q,"[object Date]":y,"[object Function]":j,"[object Error]":P},bind:function(cd,self,ce){var cf=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bf=Array.prototype.slice.call(arguments,0,arguments.length);
return cd.apply(self,cf.concat(bf));
};
},firstUp:function(bh){return bh.charAt(0).toUpperCase()+bh.substr(1);
},firstLow:function(bQ){return bQ.charAt(0).toLowerCase()+bQ.substr(1);
},getClass:function(bd){var be=Object.prototype.toString.call(bd);
return (qx.Bootstrap.__gM[be]||be.slice(8,-1));
},isString:function(T){return (T!==null&&(typeof T===L||qx.Bootstrap.getClass(T)==k||T instanceof String||(!!T&&!!T.$$isString)));
},isArray:function(e){return (e!==null&&(e instanceof Array||(e&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(e.constructor,qx.data.IListData))||qx.Bootstrap.getClass(e)==n||(!!e&&!!e.$$isArray)));
},isObject:function(bL){return (bL!==undefined&&bL!==null&&qx.Bootstrap.getClass(bL)==p);
},isFunction:function(d){return qx.Bootstrap.getClass(d)==j;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(S,name){while(S){if(S.$$properties&&S.$$properties[name]){return S.$$properties[name];
}S=S.superclass;
}return null;
},hasProperty:function(br,name){return !!qx.Bootstrap.getPropertyDefinition(br,name);
},getEventType:function(bT,name){var bT=bT.constructor;

while(bT.superclass){if(bT.$$events&&bT.$$events[name]!==undefined){return bT.$$events[name];
}bT=bT.superclass;
}return null;
},supportsEvent:function(bc,name){return !!qx.Bootstrap.getEventType(bc,name);
},getByInterface:function(bs,bt){var bu,i,l;

while(bs){if(bs.$$implements){bu=bs.$$flatImplements;

for(i=0,l=bu.length;i<l;i++){if(bu[i]===bt){return bs;
}}}bs=bs.superclass;
}return null;
},hasInterface:function(bR,bS){return !!qx.Bootstrap.getByInterface(bR,bS);
},getMixins:function(bp){var bq=[];

while(bp){if(bp.$$includes){bq.push.apply(bq,bp.$$flatIncludes);
}bp=bp.superclass;
}return bq;
},$$logs:[],debug:function(bv,bw){qx.Bootstrap.$$logs.push([F,arguments]);
},info:function(f,g){qx.Bootstrap.$$logs.push([z,arguments]);
},warn:function(bO,bP){qx.Bootstrap.$$logs.push([N,arguments]);
},error:function(b,c){qx.Bootstrap.$$logs.push([B,arguments]);
},trace:function(bU){}}});
})();
(function(){var h="qx.allowUrlSettings",g="&",f="qx.core.Setting",e="qx.allowUrlVariants",d="qx.propertyDebugLevel",c="qxsetting",b=":",a=".";
qx.Bootstrap.define(f,{statics:{__dM:{},define:function(m,n){if(n===undefined){throw new Error('Default value of setting "'+m+'" must be defined!');
}
if(!this.__dM[m]){this.__dM[m]={};
}else if(this.__dM[m].defaultValue!==undefined){throw new Error('Setting "'+m+'" is already defined!');
}this.__dM[m].defaultValue=n;
},get:function(k){var l=this.__dM[k];

if(l===undefined){throw new Error('Setting "'+k+'" is not defined.');
}
if(l.value!==undefined){return l.value;
}return l.defaultValue;
},set:function(r,s){if((r.split(a)).length<2){throw new Error('Malformed settings key "'+r+'". Must be following the schema "namespace.key".');
}
if(!this.__dM[r]){this.__dM[r]={};
}this.__dM[r].value=s;
},__dN:function(){if(window.qxsettings){for(var q in window.qxsettings){this.set(q,window.qxsettings[q]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__dO();
}},__dO:function(){if(this.get(h)!=true){return;
}var p=document.location.search.slice(1).split(g);

for(var i=0;i<p.length;i++){var o=p[i].split(b);

if(o.length!=3||o[0]!=c){continue;
}this.set(o[1],decodeURIComponent(o[2]));
}}},defer:function(j){j.define(h,false);
j.define(e,false);
j.define(d,0);
j.__dN();
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
qx.Bootstrap.define(h,{statics:{__jI:{},__jJ:{},compilerIsSet:function(){return true;
},define:function(J,K,L){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__jM(K)){throw new Error('Allowed values of variant "'+J+'" must be defined!');
}
if(L===undefined){throw new Error('Default value of variant "'+J+'" must be defined!');
}}
if(!this.__jI[J]){this.__jI[J]={};
}else if(qx.core.Variant.compilerIsSet(u,w)){if(this.__jI[J].defaultValue!==undefined){throw new Error('Variant "'+J+'" is already defined!');
}}this.__jI[J].allowedValues=K;
this.__jI[J].defaultValue=L;
},get:function(A){var B=this.__jI[A];

if(qx.core.Variant.compilerIsSet(u,w)){if(B===undefined){throw new Error('Variant "'+A+'" is not defined.');
}}
if(B.value!==undefined){return B.value;
}return B.defaultValue;
},__jK:function(){if(window.qxvariants){for(var I in qxvariants){if(qx.core.Variant.compilerIsSet(u,w)){if((I.split(e)).length<2){throw new Error('Malformed settings key "'+I+'". Must be following the schema "namespace.key".');
}}
if(!this.__jI[I]){this.__jI[I]={};
}this.__jI[I].value=qxvariants[I];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(C){}this.__jL(this.__jI);
}},__jL:function(){if(qx.core.Setting.get(m)!=true){return;
}var x=document.location.search.slice(1).split(p);

for(var i=0;i<x.length;i++){var y=x[i].split(f);

if(y.length!=3||y[0]!=c){continue;
}var z=y[1];

if(!this.__jI[z]){this.__jI[z]={};
}this.__jI[z].value=decodeURIComponent(y[2]);
}},select:function(M,N){if(qx.core.Variant.compilerIsSet(u,w)){if(!this.__jN(this.__jI[M])){throw new Error("Variant \""+M+"\" is not defined");
}
if(!this.__jN(N)){throw new Error("the second parameter must be a map!");
}}
for(var O in N){if(this.isSet(M,O)){return N[O];
}}
if(N[r]!==undefined){return N[r];
}
if(qx.core.Variant.compilerIsSet(u,w)){throw new Error('No match for variant "'+M+'" in variants ['+qx.Bootstrap.getKeysAsString(N)+'] found, and no default ("default") given');
}},isSet:function(D,E){var F=D+n+E;

if(this.__jJ[F]!==undefined){return this.__jJ[F];
}var H=false;
if(E.indexOf(s)<0){H=this.get(D)===E;
}else{var G=E.split(s);

for(var i=0,l=G.length;i<l;i++){if(this.get(D)===G[i]){H=true;
break;
}}}this.__jJ[F]=H;
return H;
},__jM:function(v){return typeof v===q&&v!==null&&v instanceof Array;
},__jN:function(v){return typeof v===q&&v!==null&&!(v instanceof Array);
},__jO:function(Q,R){for(var i=0,l=Q.length;i<l;i++){if(Q[i]==R){return true;
}}return false;
}},defer:function(P){P.define(d,[j,a,b,g],qx.bom.client.Engine.NAME);
P.define(u,[w,t],w);
P.define(o,[w,t],t);
P.define(k,[w,t],w);
P.__jK();
}});
})();
(function(){var x="qx.debug",w="object",v="Interface",u="on",t="string",s="function",r="Boolean",q="qx.Interface",p="events",o="toggle",g="properties",n="]",k="members",f="number",e="boolean",j="is",h="[Interface ",m="statics";
qx.Bootstrap.define(q,{statics:{define:function(name,K){if(K){if(K.extend&&!(K.extend instanceof Array)){K.extend=[K.extend];
}if(qx.core.Variant.isSet(x,u)){this.__fc(name,K);
}var L=K.statics?K.statics:{};
if(K.extend){L.$$extends=K.extend;
}
if(K.properties){L.$$properties=K.properties;
}
if(K.members){L.$$members=K.members;
}
if(K.events){L.$$events=K.events;
}}else{var L={};
}L.$$type=v;
L.name=name;
L.toString=this.genericToString;
L.basename=qx.Bootstrap.createNamespace(name,L);
qx.Interface.$$registry[name]=L;
return L;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(M){if(!M){return [];
}var N=M.concat();

for(var i=0,l=M.length;i<l;i++){if(M[i].$$extends){N.push.apply(N,this.flatten(M[i].$$extends));
}}return N;
},__eV:function(y,z,A,B){var F=A.$$members;

if(F){for(var E in F){if(qx.Bootstrap.isFunction(F[E])){var D=this.__eW(z,E);
var C=D||qx.Bootstrap.isFunction(y[E]);

if(!C){throw new Error('Implementation of method "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}var G=B===true&&!D&&!qx.Bootstrap.hasInterface(z,A);

if(G){y[E]=this.__fa(A,y[E],E,F[E]);
}}else{if(typeof y[E]===undefined){if(typeof y[E]!==s){throw new Error('Implementation of member "'+E+'" is missing in class "'+z.classname+'" required by interface "'+A.name+'"');
}}}}}},__eW:function(S,T){var X=T.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!X){return false;
}var U=qx.Bootstrap.firstLow(X[2]);
var V=qx.Bootstrap.getPropertyDefinition(S,U);

if(!V){return false;
}var W=X[0]==j||X[0]==o;

if(W){return qx.Bootstrap.getPropertyDefinition(S,U).check==r;
}return true;
},__eX:function(b,c){if(c.$$properties){for(var d in c.$$properties){if(!qx.Bootstrap.getPropertyDefinition(b,d)){throw new Error('The property "'+d+'" is not supported by Class "'+b.classname+'"!');
}}}},__eY:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(bd,be){var bg=bd.constructor;
this.__eV(bd,bg,be,false);
this.__eX(bg,be);
this.__eY(bg,be);
var bf=be.$$extends;

if(bf){for(var i=0,l=bf.length;i<l;i++){this.assertObject(bd,bf[i]);
}}},assert:function(O,P,Q){this.__eV(O.prototype,O,P,Q);
this.__eX(O,P);
this.__eY(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return h+this.name+n;
},$$registry:{},__fa:qx.core.Variant.select(x,{"on":function(bh,bi,bj,bk){function bl(){bk.apply(this,arguments);
return bi.apply(this,arguments);
}bi.wrapper=bl;
return bl;
},"default":function(){}}),__fb:qx.core.Variant.select(x,{"on":{"extend":w,"statics":w,"members":w,"properties":w,"events":w},"default":null}),__fc:qx.core.Variant.select(x,{"on":function(name,Y){if(qx.core.Variant.isSet(x,u)){var bc=this.__fb;

for(var bb in Y){if(bc[bb]===undefined){throw new Error('The configuration key "'+bb+'" in class "'+name+'" is not allowed!');
}
if(Y[bb]==null){throw new Error("Invalid key '"+bb+"' in interface '"+name+"'! The value is undefined/null!");
}
if(bc[bb]!==null&&typeof Y[bb]!==bc[bb]){throw new Error('Invalid type of key "'+bb+'" in interface "'+name+'"! The type of the key must be "'+bc[bb]+'"!');
}}var ba=[m,k,g,p];

for(var i=0,l=ba.length;i<l;i++){var bb=ba[i];

if(Y[bb]!==undefined&&(Y[bb] instanceof Array||Y[bb] instanceof RegExp||Y[bb] instanceof Date||Y[bb].classname!==undefined)){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! The value needs to be a map!');
}}if(Y.extend){for(var i=0,a=Y.extend,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is undefined/null!");
}
if(a[i].$$type!==v){throw new Error("Extends of interfaces must be interfaces. The extend number '"+i+1+"' in interface '"+name+"' is not an interface!");
}}}if(Y.statics){for(var bb in Y.statics){if(bb.toUpperCase()!==bb){throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all uppercase.');
}
switch(typeof Y.statics[bb]){case e:case t:case f:break;
default:throw new Error('Invalid key "'+bb+'" in interface "'+name+'"! Static constants must be all of a primitive type.');
}}}}},"default":function(){}})}});
})();
(function(){var r="object",q="qx.debug",p="function",o="Mixin",n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="members",d="destruct",f="events",e="on",c="properties",b="statics";
qx.Bootstrap.define(n,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}if(qx.core.Variant.isSet(q,e)){this.__dK(name,w);
}var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,k);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+m);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,d);
}}else{var y={};
}y.$$type=o;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
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
},flatten:function(z){if(!z){return [];
}var A=z.concat();

for(var i=0,l=z.length;i<l;i++){if(z[i].$$includes){A.push.apply(A,this.flatten(z[i].$$includes));
}}return A;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__dJ:qx.core.Variant.select(q,{"on":{"include":r,"statics":r,"members":r,"properties":r,"events":r,"destruct":p,"construct":p},"default":null}),__dK:qx.core.Variant.select(q,{"on":function(name,s){var v=this.__dJ;

for(var u in s){if(!v[u]){throw new Error('The configuration key "'+u+'" in mixin "'+name+'" is not allowed!');
}
if(s[u]==null){throw new Error('Invalid key "'+u+'" in mixin "'+name+'"! The value is undefined/null!');
}
if(v[u]!==null&&typeof s[u]!==v[u]){throw new Error('Invalid type of key "'+u+'" in mixin "'+name+'"! The type of the key must be "'+v[u]+'"!');
}}var t=[b,g,c,f];

for(var i=0,l=t.length;i<l;i++){var u=t[i];

if(s[u]!==undefined&&(s[u] instanceof Array||s[u] instanceof RegExp||s[u] instanceof Date||s[u].classname!==undefined)){throw new Error('Invalid key "'+u+'" in mixin "'+name+'"! The value needs to be a map!');
}}if(s.include){for(var i=0,a=s.include,l=a.length;i<l;i++){if(a[i]==null){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is undefined/null!");
}
if(a[i].$$type!==o){throw new Error("Includes of mixins must be mixins. The include number '"+(i+1)+"' in mixin '"+name+"'is not a mixin!");
}}this.checkCompatibility(s.include);
}},"default":function(){}})}});
})();
(function(){var dn=';',dm='computed=this.',dl='=value;',dk='this.',dj="setThemed",di="set",dh="init",dg="setRuntime",df='if(this.',de='delete this.',ch='!==undefined)',cg="on",cf='}',ce="qx.debug",cd="resetThemed",cc='else if(this.',cb="string",ca="boolean",bY='return this.',bX="reset",dv='","',dw='",value);',dt="",du="refresh",dr="resetRuntime",ds='!==undefined){',dp='=true;',dq="this.",dx=";",dy='old=this.',cM="qx.propertyDebugLevel",cL='.$$properties.',cO="();",cN='else ',cQ='if(old===undefined)old=this.',cP='old=computed=this.',cS='if(value===undefined)prop.error(this,2,"',cR="return this.",cK="get",cJ='(value);',C="(a[",D='if(old===computed)return value;',E='"), msg)',F='!(',G="value",H=' of an instance of ',I='var prop=qx.core.Property;',J='if(old===undefined)old=null;',K=')',L=' is not (yet) ready!");',dM="]);",dL='!==inherit){',dK='var msg = "Invalid incoming value for property \'',dJ='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',dQ='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',dP='qx.core.Assert.assertInstance(value, Date, msg) || true',dO='value !== null && value.nodeType === 9 && value.documentElement',dN='===value)return value;',dS='value !== null && value.$$type === "Mixin"',dR='return init;',bx='var init=this.',by=')prop.error(this,5,"',bv='value !== null && value.nodeType === 1 && value.attributes',bw="var parent = this.getLayoutParent();",bB="Error in property ",bC='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',bz="property",bA='.check.call(this, value)',bt='if((computed===undefined||computed===inherit)&&',bu='.validate.call(this, value);',be="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bd='else{',bg="if (!parent) return;",bf=" in method ",ba='qx.core.Assert.assertInstance(value, Error, msg) || true',Y='=computed;',bc='Undefined value is not allowed!',bb='(backup);',X="MSIE 6.0",W='if(computed===inherit){',bH="inherit",bI='Is invalid!',bJ='var computed, old=this.',bK='else if(computed===undefined)',bD="': ",bE=" of class ",bF='value !== null && value.nodeType !== undefined',bG='===undefined)return;',bL='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',bM="')){",bp='qx.core.Assert.assertPositiveInteger(value, msg) || true',bo='else this.',bn='value=this.',bm='if(init==qx.core.Property.$$inherit)init=null;',bl='qx.core.Assert.assertInArray(value, ',bk='value !== null && value.$$type === "Interface"',bj='var inherit=prop.$$inherit;',bi="', qx.event.type.Data, [computed, old]",bs="var value = parent.",br="$$useinit_",bN='computed=undefined;delete this.',bO="(value);",bP='Requires exactly one argument!',bQ='computed=value;',bR="$$runtime_",bS='if(this.$$initialized)prop.error(this,0,"',bT='qx.core.Assert.assertInstance(value, qx.Class.getByName("',bU="$$user_",bV='if(value===null)prop.error(this,4,"',bW='){',co='!',cn='qx.core.Assert.assertArray(value, msg) || true',cm='if(computed===undefined||computed===inherit){',cl='qx.core.Assert.assertPositiveNumber(value, msg) || true',cs=".prototype",cr="function",cq="qx.core.Property.refresh() is deprecated. Please use the member function '$$refreshInheritables()'",cp="Boolean",cv=")}",cu='(computed, old, "',cF='return value;',cG='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',cD='qx.core.Assert.assertInterface(value, qx.Interface.getByName("',cE='}else{',cB="if(reg.hasListener(this, '",cC='Does not allow any arguments!',cz='\'";',cA=')a[i].',cH="()",cI=';}',cW='if(',cV='value !== null && value.$$type === "Theme"',cY='if(value!==null)',cX="var reg=qx.event.Registration;",db="())",da='return null;',dd='qx.core.Assert.assertObject(value, msg) || true',dc='");',cU='qx.core.Assert.assertString(value, msg) || true',cT='!==undefined&&',dF='var pa=this.getLayoutParent();if(pa)computed=pa.',dG="if (value===undefined) value = parent.",dH='value !== null && value.$$type === "Class"',dI='qx.core.Assert.assertFunction(value, msg) || true',dB='var computed, old;',dC='var backup=computed;',dD=".",dE="object",dz="$$init_",dA="$$theme_",B='if(computed===undefined)computed=null;',A='\' of class \'',z='if(arguments.length!==1)prop.error(this,1,"',y='qx.core.Assert.assertMap(value, msg) || true',x="qx.aspects",w='qx.core.Assert.assertNumber(value, msg) || true',v="reg.fireEvent(this, '",u='Null value is not allowed!',t='if(value!==inherit)',s='qx.core.Assert.assertInteger(value, msg) || true',O="rv:1.8.1",P="shorthand",M='qx.core.Assert.assertInstance(value, RegExp, msg) || true',N='value !== null && value.type !== undefined',S='value !== null && value.document',T='throw new Error("Property ',Q="(!this.",R='qx.core.Assert.assertBoolean(value, msg) || true',U='if(a[i].',V='.check, msg)',cw="toggle",ct="$$inherit_",cy=" with incoming value '",cx='if(arguments.length!==0)prop.error(this,3,"',cj="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",ci='if(computed===undefined||computed==inherit)computed=null;',bh="qx.core.Property",ck="is",bq='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bh,{statics:{__kq:{"Boolean":R,"String":cU,"Number":w,"Integer":s,"PositiveNumber":cl,"PositiveInteger":bp,"Error":ba,"RegExp":M,"Object":dd,"Array":cn,"Map":y,"Function":dI,"Date":dP,"Node":bF,"Element":bv,"Document":dO,"Window":S,"Event":N,"Class":dH,"Mixin":dS,"Interface":bk,"Theme":cV,"Color":dJ,"Decorator":bL,"Font":dQ},__kr:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bH,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:cb,dispose:ca,dereference:ca,inheritable:ca,nullable:ca,themeable:ca,refine:ca,init:null,apply:cb,event:cb,check:null,transform:cb,deferredInit:ca,validate:null},$$allowedGroupKeys:{name:cb,group:dE,mode:cb,themeable:ca},$$inheritable:{},__ks:function(ee){var ef=this.__kt(ee);

if(!ef.length){var eg=qx.lang.Function.empty;
}else{eg=this.__ku(ef);
}ee.prototype.$$refreshInheritables=eg;
},__kt:function(ei){var ek=[];

while(ei){var ej=ei.$$properties;

if(ej){for(var name in this.$$inheritable){if(ej[name]&&ej[name].inheritable){ek.push(name);
}}}ei=ei.superclass;
}return ek;
},__ku:function(eW){var fb=this.$$store.inherit;
var fa=this.$$store.init;
var eY=this.$$method.refresh;
var eX=[bw,bg];

for(var i=0,l=eW.length;i<l;i++){var name=eW[i];
eX.push(bs,fb[name],dx,dG,fa[name],dx,dq,eY[name],bO);
}return new Function(eX.join(dt));
},refresh:function(fG){if(qx.core.Variant.isSet(ce,cg)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,cq);
}fG.$$refreshInheritables();
},attachRefreshInheritables:function(et){et.prototype.$$refreshInheritables=function(){qx.core.Property.__ks(et);
return this.$$refreshInheritables();
};
},attachMethods:function(eE,name,eF){eF.group?this.__kv(eE,eF,name):this.__kw(eE,eF,name);
},__kv:function(fc,fd,name){var fk=qx.Bootstrap.firstUp(name);
var fj=fc.prototype;
var fl=fd.themeable===true;

if(qx.core.Variant.isSet(ce,cg)){if(qx.core.Setting.get(cM)>1){qx.Bootstrap.debug("Generating property group: "+name);
}}var fm=[];
var fg=[];

if(fl){var fe=[];
var fi=[];
}var fh=be;
fm.push(fh);

if(fl){fe.push(fh);
}
if(fd.mode==P){var ff=cj;
fm.push(ff);

if(fl){fe.push(ff);
}}
for(var i=0,a=fd.group,l=a.length;i<l;i++){if(qx.core.Variant.isSet(ce,cg)){if(!this.$$method.set[a[i]]||!this.$$method.reset[a[i]]){throw new Error("Cannot create property group '"+name+"' including non-existing property '"+a[i]+"'!");
}}fm.push(dq,this.$$method.set[a[i]],C,i,dM);
fg.push(dq,this.$$method.reset[a[i]],cO);

if(fl){if(qx.core.Variant.isSet(ce,cg)){if(!this.$$method.setThemed[a[i]]){throw new Error("Cannot add the non themable property '"+a[i]+"' to the themable property group '"+name+"'");
}}fe.push(dq,this.$$method.setThemed[a[i]],C,i,dM);
fi.push(dq,this.$$method.resetThemed[a[i]],cO);
}}this.$$method.set[name]=di+fk;
fj[this.$$method.set[name]]=new Function(fm.join(dt));
this.$$method.reset[name]=bX+fk;
fj[this.$$method.reset[name]]=new Function(fg.join(dt));

if(fl){this.$$method.setThemed[name]=dj+fk;
fj[this.$$method.setThemed[name]]=new Function(fe.join(dt));
this.$$method.resetThemed[name]=cd+fk;
fj[this.$$method.resetThemed[name]]=new Function(fi.join(dt));
}},__kw:function(eI,eJ,name){var eL=qx.Bootstrap.firstUp(name);
var eN=eI.prototype;

if(qx.core.Variant.isSet(ce,cg)){if(qx.core.Setting.get(cM)>1){qx.Bootstrap.debug("Generating property wrappers: "+name);
}}if(qx.core.Variant.isSet(ce,cg)){if(eJ.dispose){if(!eJ.dereference){eJ.dereference=eJ.dispose;
}qx.log.Logger.warn("The property key 'dispose' is deprecated: "+"Please use 'dereference' instead.");
qx.log.Logger.trace();
}}if(eJ.dereference===undefined&&typeof eJ.check===cb){eJ.dereference=this.__kx(eJ.check);
}var eM=this.$$method;
var eK=this.$$store;
eK.runtime[name]=bR+name;
eK.user[name]=bU+name;
eK.theme[name]=dA+name;
eK.init[name]=dz+name;
eK.inherit[name]=ct+name;
eK.useinit[name]=br+name;
eM.get[name]=cK+eL;
eN[eM.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,eI,name,cK);
};
eM.set[name]=di+eL;
eN[eM.set[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,eI,name,di,arguments);
};
eM.reset[name]=bX+eL;
eN[eM.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eI,name,bX);
};

if(eJ.inheritable||eJ.apply||eJ.event||eJ.deferredInit){eM.init[name]=dh+eL;
eN[eM.init[name]]=function(fE){return qx.core.Property.executeOptimizedSetter(this,eI,name,dh,arguments);
};
}
if(eJ.inheritable){eM.refresh[name]=du+eL;
eN[eM.refresh[name]]=function(dT){return qx.core.Property.executeOptimizedSetter(this,eI,name,du,arguments);
};
}eM.setRuntime[name]=dg+eL;
eN[eM.setRuntime[name]]=function(eV){return qx.core.Property.executeOptimizedSetter(this,eI,name,dg,arguments);
};
eM.resetRuntime[name]=dr+eL;
eN[eM.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eI,name,dr);
};

if(eJ.themeable){eM.setThemed[name]=dj+eL;
eN[eM.setThemed[name]]=function(fF){return qx.core.Property.executeOptimizedSetter(this,eI,name,dj,arguments);
};
eM.resetThemed[name]=cd+eL;
eN[eM.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,eI,name,cd);
};
}
if(eJ.check===cp){eN[cw+eL]=new Function(cR+eM.set[name]+Q+eM.get[name]+db);
eN[ck+eL]=new Function(cR+eM.get[name]+cH);
}},__kx:function(eD){return !!this.__kr[eD];
},__ky:function(ed){return this.__kr[ed]||qx.Bootstrap.classIsDefined(ed)||(qx.Interface&&qx.Interface.isDefined(ed));
},__kz:{0:bq,1:bP,2:bc,3:cC,4:u,5:bI},error:function(g,h,j,k,m){var n=g.constructor.classname;
var o=bB+j+bE+n+bf+this.$$method[k][j]+cy+m+bD;
throw new Error(o+(this.__kz[h]||"Unknown reason: "+h));
},__kA:function(eP,eQ,name,eR,eS,eT){var eU=this.$$method[eR][name];
if(qx.core.Variant.isSet(ce,cg)){if(qx.core.Setting.get(cM)>1){qx.Bootstrap.debug("Code["+this.$$method[eR][name]+"]: "+eS.join(""));
}try{eQ[eU]=new Function(G,eS.join(dt));
}catch(eO){throw new Error("Malformed generated code to unwrap method: "+this.$$method[eR][name]+"\n"+eS.join(""));
}}else{eQ[eU]=new Function(G,eS.join(dt));
}if(qx.core.Variant.isSet(x,cg)){eQ[eU]=qx.core.Aspect.wrap(eP.classname+dD+eU,eQ[eU],bz);
}qx.Bootstrap.setDisplayName(eQ[eU],eP.classname+cs,eU);
if(eT===undefined){return eP[eU]();
}else if(qx.core.Variant.isSet(ce,cg)){return eP[eU].apply(eP,eT);
}else{return eP[eU](eT[0]);
}},executeOptimizedGetter:function(fx,fy,name,fz){var fB=fy.$$properties[name];
var fD=fy.prototype;
var fA=[];
var fC=this.$$store;
fA.push(df,fC.runtime[name],ch);
fA.push(bY,fC.runtime[name],dn);

if(fB.inheritable){fA.push(cc,fC.inherit[name],ch);
fA.push(bY,fC.inherit[name],dn);
fA.push(cN);
}fA.push(df,fC.user[name],ch);
fA.push(bY,fC.user[name],dn);

if(fB.themeable){fA.push(cc,fC.theme[name],ch);
fA.push(bY,fC.theme[name],dn);
}
if(fB.deferredInit&&fB.init===undefined){fA.push(cc,fC.init[name],ch);
fA.push(bY,fC.init[name],dn);
}fA.push(cN);

if(fB.init!==undefined){if(fB.inheritable){fA.push(bx,fC.init[name],dn);

if(fB.nullable){fA.push(bm);
}else if(fB.init!==undefined){fA.push(bY,fC.init[name],dn);
}else{fA.push(cG,name,H,fy.classname,L);
}fA.push(dR);
}else{fA.push(bY,fC.init[name],dn);
}}else if(fB.inheritable||fB.nullable){fA.push(da);
}else{fA.push(T,name,H,fy.classname,L);
}return this.__kA(fx,fD,name,fz,fA);
},executeOptimizedSetter:function(fn,fo,name,fp,fq){var fv=fo.$$properties[name];
var fu=fo.prototype;
var fs=[];
var fr=fp===di||fp===dj||fp===dg||(fp===dh&&fv.init===undefined);
var ft=fv.apply||fv.event||fv.inheritable;
var fw=this.__kB(fp,name);
this.__kC(fs,fv,name,fp,fr);

if(fr){this.__kD(fs,fo,fv,name);
}
if(ft){this.__kE(fs,fr,fw,fp);
}
if(fv.inheritable){fs.push(bj);
}
if(qx.core.Variant.isSet(ce,cg)){if(fr){this.__kF(fs,fv,fo,name,fp);
}}
if(!ft){this.__kG(fs,name,fp,fr);
}else{this.__kH(fs,fv,name,fp,fr);
}
if(fv.inheritable){this.__kI(fs,fv,name,fp);
}else if(ft){this.__kJ(fs,fv,name,fp);
}
if(ft){this.__kK(fs,fv,name);
if(fv.inheritable&&fu._getChildren){this.__kL(fs,name);
}}if(fr){fs.push(cF);
}return this.__kA(fn,fu,name,fp,fs,fq);
},__kB:function(eG,name){if(eG===dg||eG===dr){var eH=this.$$store.runtime[name];
}else if(eG===dj||eG===cd){eH=this.$$store.theme[name];
}else if(eG===dh){eH=this.$$store.init[name];
}else{eH=this.$$store.user[name];
}return eH;
},__kC:function(c,d,name,e,f){if(qx.core.Variant.isSet(ce,cg)){c.push(I);

if(e===dh){c.push(bS,name,dv,e,dw);
}
if(e===du){}else if(f){c.push(z,name,dv,e,dw);
c.push(cS,name,dv,e,dw);
}else{c.push(cx,name,dv,e,dw);
}}else{if(!d.nullable||d.check||d.inheritable){c.push(I);
}if(e===di){c.push(cS,name,dv,e,dw);
}}},__kD:function(el,em,en,name){if(en.transform){el.push(bn,en.transform,cJ);
}if(en.validate){if(typeof en.validate===cb){el.push(dk,en.validate,cJ);
}else if(en.validate instanceof Function){el.push(em.classname,cL,name);
el.push(bu);
}}},__kE:function(ey,ez,eA,eB){var eC=(eB===bX||eB===cd||eB===dr);

if(ez){ey.push(df,eA,dN);
}else if(eC){ey.push(df,eA,bG);
}},__kF:qx.core.Variant.select(ce,{"on":function(dU,dV,dW,name,dX){if(!dV.nullable){dU.push(bV,name,dv,dX,dw);
}if(dV.check!==undefined){dU.push(dK+name+A+dW.classname+cz);
if(dV.nullable){dU.push(cY);
}if(dV.inheritable){dU.push(t);
}dU.push(cW);

if(this.__kq[dV.check]!==undefined){dU.push(F,this.__kq[dV.check],K);
}else if(qx.Class.isDefined(dV.check)){dU.push(bT,dV.check,E);
}else if(qx.Interface&&qx.Interface.isDefined(dV.check)){dU.push(cD,dV.check,E);
}else if(typeof dV.check===cr){dU.push(co,dW.classname,cL,name);
dU.push(bA);
}else if(typeof dV.check===cb){dU.push(F,dV.check,K);
}else if(dV.check instanceof Array){dU.push(bl,dW.classname,cL,name,V);
}else{throw new Error("Could not add check to property "+name+" of class "+dW.classname);
}dU.push(by,name,dv,dX,dw);
}},"off":undefined}),__kG:function(p,name,q,r){if(q===dg){p.push(dk,this.$$store.runtime[name],dl);
}else if(q===dr){p.push(df,this.$$store.runtime[name],ch);
p.push(de,this.$$store.runtime[name],dn);
}else if(q===di){p.push(dk,this.$$store.user[name],dl);
}else if(q===bX){p.push(df,this.$$store.user[name],ch);
p.push(de,this.$$store.user[name],dn);
}else if(q===dj){p.push(dk,this.$$store.theme[name],dl);
}else if(q===cd){p.push(df,this.$$store.theme[name],ch);
p.push(de,this.$$store.theme[name],dn);
}else if(q===dh&&r){p.push(dk,this.$$store.init[name],dl);
}},__kH:function(dY,ea,name,eb,ec){if(ea.inheritable){dY.push(bJ,this.$$store.inherit[name],dn);
}else{dY.push(dB);
}dY.push(df,this.$$store.runtime[name],ds);

if(eb===dg){dY.push(dm,this.$$store.runtime[name],dl);
}else if(eb===dr){dY.push(de,this.$$store.runtime[name],dn);
dY.push(df,this.$$store.user[name],ch);
dY.push(dm,this.$$store.user[name],dn);
dY.push(cc,this.$$store.theme[name],ch);
dY.push(dm,this.$$store.theme[name],dn);
dY.push(cc,this.$$store.init[name],ds);
dY.push(dm,this.$$store.init[name],dn);
dY.push(dk,this.$$store.useinit[name],dp);
dY.push(cf);
}else{dY.push(cP,this.$$store.runtime[name],dn);
if(eb===di){dY.push(dk,this.$$store.user[name],dl);
}else if(eb===bX){dY.push(de,this.$$store.user[name],dn);
}else if(eb===dj){dY.push(dk,this.$$store.theme[name],dl);
}else if(eb===cd){dY.push(de,this.$$store.theme[name],dn);
}else if(eb===dh&&ec){dY.push(dk,this.$$store.init[name],dl);
}}dY.push(cf);
dY.push(cc,this.$$store.user[name],ds);

if(eb===di){if(!ea.inheritable){dY.push(dy,this.$$store.user[name],dn);
}dY.push(dm,this.$$store.user[name],dl);
}else if(eb===bX){if(!ea.inheritable){dY.push(dy,this.$$store.user[name],dn);
}dY.push(de,this.$$store.user[name],dn);
dY.push(df,this.$$store.runtime[name],ch);
dY.push(dm,this.$$store.runtime[name],dn);
dY.push(df,this.$$store.theme[name],ch);
dY.push(dm,this.$$store.theme[name],dn);
dY.push(cc,this.$$store.init[name],ds);
dY.push(dm,this.$$store.init[name],dn);
dY.push(dk,this.$$store.useinit[name],dp);
dY.push(cf);
}else{if(eb===dg){dY.push(dm,this.$$store.runtime[name],dl);
}else if(ea.inheritable){dY.push(dm,this.$$store.user[name],dn);
}else{dY.push(cP,this.$$store.user[name],dn);
}if(eb===dj){dY.push(dk,this.$$store.theme[name],dl);
}else if(eb===cd){dY.push(de,this.$$store.theme[name],dn);
}else if(eb===dh&&ec){dY.push(dk,this.$$store.init[name],dl);
}}dY.push(cf);
if(ea.themeable){dY.push(cc,this.$$store.theme[name],ds);

if(!ea.inheritable){dY.push(dy,this.$$store.theme[name],dn);
}
if(eb===dg){dY.push(dm,this.$$store.runtime[name],dl);
}else if(eb===di){dY.push(dm,this.$$store.user[name],dl);
}else if(eb===dj){dY.push(dm,this.$$store.theme[name],dl);
}else if(eb===cd){dY.push(de,this.$$store.theme[name],dn);
dY.push(df,this.$$store.init[name],ds);
dY.push(dm,this.$$store.init[name],dn);
dY.push(dk,this.$$store.useinit[name],dp);
dY.push(cf);
}else if(eb===dh){if(ec){dY.push(dk,this.$$store.init[name],dl);
}dY.push(dm,this.$$store.theme[name],dn);
}else if(eb===du){dY.push(dm,this.$$store.theme[name],dn);
}dY.push(cf);
}dY.push(cc,this.$$store.useinit[name],bW);

if(!ea.inheritable){dY.push(dy,this.$$store.init[name],dn);
}
if(eb===dh){if(ec){dY.push(dm,this.$$store.init[name],dl);
}else{dY.push(dm,this.$$store.init[name],dn);
}}else if(eb===di||eb===dg||eb===dj||eb===du){dY.push(de,this.$$store.useinit[name],dn);

if(eb===dg){dY.push(dm,this.$$store.runtime[name],dl);
}else if(eb===di){dY.push(dm,this.$$store.user[name],dl);
}else if(eb===dj){dY.push(dm,this.$$store.theme[name],dl);
}else if(eb===du){dY.push(dm,this.$$store.init[name],dn);
}}dY.push(cf);
if(eb===di||eb===dg||eb===dj||eb===dh){dY.push(bd);

if(eb===dg){dY.push(dm,this.$$store.runtime[name],dl);
}else if(eb===di){dY.push(dm,this.$$store.user[name],dl);
}else if(eb===dj){dY.push(dm,this.$$store.theme[name],dl);
}else if(eb===dh){if(ec){dY.push(dm,this.$$store.init[name],dl);
}else{dY.push(dm,this.$$store.init[name],dn);
}dY.push(dk,this.$$store.useinit[name],dp);
}dY.push(cf);
}},__kI:function(fH,fI,name,fJ){fH.push(cm);

if(fJ===du){fH.push(bQ);
}else{fH.push(dF,this.$$store.inherit[name],dn);
}fH.push(bt);
fH.push(dk,this.$$store.init[name],cT);
fH.push(dk,this.$$store.init[name],dL);
fH.push(dm,this.$$store.init[name],dn);
fH.push(dk,this.$$store.useinit[name],dp);
fH.push(cE);
fH.push(de,this.$$store.useinit[name],cI);
fH.push(cf);
fH.push(D);
fH.push(W);
fH.push(bN,this.$$store.inherit[name],dn);
fH.push(cf);
fH.push(bK);
fH.push(de,this.$$store.inherit[name],dn);
fH.push(bo,this.$$store.inherit[name],Y);
fH.push(dC);
if(fI.init!==undefined&&fJ!==dh){fH.push(cQ,this.$$store.init[name],dx);
}else{fH.push(J);
}fH.push(ci);
},__kJ:function(eu,ev,name,ew){if(ew!==di&&ew!==dg&&ew!==dj){eu.push(B);
}eu.push(D);
if(ev.init!==undefined&&ew!==dh){eu.push(cQ,this.$$store.init[name],dx);
}else{eu.push(J);
}},__kK:function(er,es,name){if(es.apply){er.push(dk,es.apply,cu,name,dc);
}if(es.event){er.push(cX,cB,es.event,bM,v,es.event,bi,cv);
}},__kL:function(eh,name){eh.push(bC);
eh.push(U,this.$$method.refresh[name],cA,this.$$method.refresh[name],bb);
eh.push(cf);
}},defer:function(eo){var eq=navigator.userAgent.indexOf(X)!=-1;
var ep=navigator.userAgent.indexOf(O)!=-1;
if(eq||ep){eo.__kx=eo.__ky;
}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__jr:[],wrap:function(h,j,k){var p=[];
var l=[];
var o=this.__jr;
var n;

for(var i=0;i<o.length;i++){n=o[i];

if((n.type==null||k==n.type||n.type==b)&&(n.name==null||h.match(n.name))){n.pos==-1?p.push(n.fcn):l.push(n.fcn);
}}
if(p.length===0&&l.length===0){return j;
}var m=function(){for(var i=0;i<p.length;i++){p[i].call(this,h,j,k,arguments);
}var q=j.apply(this,arguments);

for(var i=0;i<l.length;i++){l[i].call(this,h,j,k,arguments,q);
}return q;
};

if(k!==a){m.self=j.self;
m.base=j.base;
}j.wrapper=m;
m.original=j;
return m;
},addAdvice:function(e,f,g,name){this.__jr.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var cp="qx.debug",co="on",cn="object",cm=".",cl="qx.aspects",ck="static",cj="function",ci="string",ch="abstract",cg="singleton",cP="constructor",cO="_",cN=".prototype",cM="$$init_",cL="extend",cK="init",cJ="qx.event.type.Data",cI="refine",cH="members",cG="variants",cw="off",cx="properties",cu="statics",cv="toString",cs="events",ct="]",cq="Class",cr="Interface",cy="qx.Class",cz="Mixin",cB="settings",cA='Assumed static class because no "extend" key was found. ',cD="[Class ",cC="destructor",cF="destruct",cE="member";
qx.Bootstrap.define(cy,{statics:{define:function(name,bm){if(!bm){var bm={};
}if(bm.include&&!(bm.include instanceof Array)){bm.include=[bm.include];
}if(bm.implement&&!(bm.implement instanceof Array)){bm.implement=[bm.implement];
}var bn=false;

if(!bm.hasOwnProperty(cL)&&!bm.type){bm.type=ck;
bn=true;
}if(qx.core.Variant.isSet(cp,co)){try{this.__bx(name,bm);
}catch(x){if(bn){x.message=cA+x.message;
}throw x;
}}var bo=this.__bz(name,bm.type,bm.extend,bm.statics,bm.construct,bm.destruct,bm.include);
if(bm.extend){if(bm.properties){this.__bB(bo,bm.properties,true);
}if(bm.members){this.__bD(bo,bm.members,true,true,false);
}if(bm.events){this.__bA(bo,bm.events,true);
}if(bm.include){for(var i=0,l=bm.include.length;i<l;i++){this.__bH(bo,bm.include[i],false);
}}}if(bm.settings){for(var bp in bm.settings){qx.core.Setting.define(bp,bm.settings[bp]);
}}if(bm.variants){for(var bp in bm.variants){qx.core.Variant.define(bp,bm.variants[bp].allowedValues,bm.variants[bp].defaultValue);
}}if(bm.implement){for(var i=0,l=bm.implement.length;i<l;i++){this.__bF(bo,bm.implement[i]);
}}
if(qx.core.Variant.isSet(cp,co)){this.__by(bo);
}if(bm.defer){bm.defer.self=bo;
bm.defer(bo,bo.prototype,{add:function(name,bV){var bW={};
bW[name]=bV;
qx.Class.__bB(bo,bW,true);
}});
}return bo;
},undefine:function(name){delete this.$$registry[name];
var y=name.split(cm);
var A=[window];

for(var i=0;i<y.length;i++){A.push(A[i][y[i]]);
}for(var i=A.length-1;i>=1;i--){var z=A[i];
var parent=A[i-1];

if(qx.Bootstrap.isFunction(z)||qx.Bootstrap.objectGetLength(z)===0){delete parent[y[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bd,be){if(qx.core.Variant.isSet(cp,co)){if(!be){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+bd.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(be,bd);
}qx.Class.__bH(bd,be,false);
},patch:function(e,f){if(qx.core.Variant.isSet(cp,co)){if(!f){throw new Error("Includes of mixins must be mixins. A dynamic mixin of class '"+e.classname+"' is undefined/null!");
}qx.Mixin.isCompatible(f,e);
}qx.Class.__bH(e,f,true);
},isSubClassOf:function(bX,bY){if(!bX){return false;
}
if(bX==bY){return true;
}
if(bX.prototype instanceof bY){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(W){var X=[];

while(W){if(W.$$properties){X.push.apply(X,qx.Bootstrap.getKeys(W.$$properties));
}W=W.superclass;
}return X;
},getByProperty:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU;
}bU=bU.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(k,m){return k.$$includes&&k.$$includes.indexOf(m)!==-1;
},getByMixin:function(bi,bj){var bk,i,l;

while(bi){if(bi.$$includes){bk=bi.$$flatIncludes;

for(i=0,l=bk.length;i<l;i++){if(bk[i]===bj){return bi;
}}}bi=bi.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(ce,cf){return !!this.getByMixin(ce,cf);
},hasOwnInterface:function(br,bs){return br.$$implements&&br.$$implements.indexOf(bs)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(cU){var cV=[];

while(cU){if(cU.$$implements){cV.push.apply(cV,cU.$$flatImplements);
}cU=cU.superclass;
}return cV;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bC,bD){var bE=bC.constructor;

if(this.hasInterface(bE,bD)){return true;
}
try{qx.Interface.assertObject(bC,bD);
return true;
}catch(bq){}
try{qx.Interface.assert(bE,bD,false);
return true;
}catch(bl){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return cD+this.classname+ct;
},$$registry:qx.Bootstrap.$$registry,__bv:qx.core.Variant.select(cp,{"on":{"type":ci,"extend":cj,"implement":cn,"include":cn,"construct":cj,"statics":cn,"properties":cn,"members":cn,"settings":cn,"variants":cn,"events":cn,"defer":cj,"destruct":cj},"default":null}),__bw:qx.core.Variant.select(cp,{"on":{"type":ci,"statics":cn,"settings":cn,"variants":cn,"defer":cj},"default":null}),__bx:qx.core.Variant.select(cp,{"on":function(name,B){if(B.type&&!(B.type===ck||B.type===ch||B.type===cg)){throw new Error('Invalid type "'+B.type+'" definition for class "'+name+'"!');
}if(B.type&&B.type!==ck&&!B.extend){throw new Error('Invalid config in class "'+name+'"! Every non-static class has to extend at least the "qx.core.Object" class.');
}var E=B.type===ck?this.__bw:this.__bv;

for(var D in B){if(!E[D]){throw new Error('The configuration key "'+D+'" in class "'+name+'" is not allowed!');
}
if(B[D]==null){throw new Error('Invalid key "'+D+'" in class "'+name+'"! The value is undefined/null!');
}
if(typeof B[D]!==E[D]){throw new Error('Invalid type of key "'+D+'" in class "'+name+'"! The type of the key must be "'+E[D]+'"!');
}}var C=[cu,cx,cH,cB,cG,cs];

for(var i=0,l=C.length;i<l;i++){var D=C[i];

if(B[D]!==undefined&&(B[D].$$hash!==undefined||!qx.Bootstrap.isObject(B[D]))){throw new Error('Invalid key "'+D+'" in class "'+name+'"! The value needs to be a map!');
}}if(B.include){if(B.include instanceof Array){for(var i=0,a=B.include,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==cz){throw new Error('The include definition in class "'+name+'" contains an invalid mixin at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid include definition in class "'+name+'"! Only mixins and arrays of mixins are allowed!');
}}if(B.implement){if(B.implement instanceof Array){for(var i=0,a=B.implement,l=a.length;i<l;i++){if(a[i]==null||a[i].$$type!==cr){throw new Error('The implement definition in class "'+name+'" contains an invalid interface at position '+i+': '+a[i]);
}}}else{throw new Error('Invalid implement definition in class "'+name+'"! Only interfaces and arrays of interfaces are allowed!');
}}if(B.include){try{qx.Mixin.checkCompatibility(B.include);
}catch(cS){throw new Error('Error in include definition of class "'+name+'"! '+cS.message);
}}if(B.settings){for(var D in B.settings){if(D.substr(0,D.indexOf(cm))!=name.substr(0,name.indexOf(cm))){throw new Error('Forbidden setting "'+D+'" found in "'+name+'". It is forbidden to define a default setting for an external namespace!');
}}}if(B.variants){for(var D in B.variants){if(D.substr(0,D.indexOf(cm))!=name.substr(0,name.indexOf(cm))){throw new Error('Forbidden variant "'+D+'" found in "'+name+'". It is forbidden to define a variant for an external namespace!');
}}}},"default":function(){}}),__by:qx.core.Variant.select(cp,{"on":function(b){var d=b.superclass;

while(d){if(d.$$classtype!==ch){break;
}var c=d.$$implements;

if(c){for(var i=0;i<c.length;i++){qx.Interface.assert(b,c[i],true);
}}d=d.superclass;
}},"default":function(){}}),__bz:function(name,n,o,p,q,r,s){var v;

if(!o&&qx.core.Variant.isSet(cl,cw)){v=p||{};
qx.Bootstrap.setDisplayNames(v,name);
}else{var v={};

if(o){if(!q){q=this.__bI();
}
if(this.__bK(o,s)){v=this.__bL(q,name,n);
}else{v=q;
}if(n===cg){v.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(q,name,cP);
}if(p){qx.Bootstrap.setDisplayNames(p,name);
var w;

for(var i=0,a=qx.Bootstrap.getKeys(p),l=a.length;i<l;i++){w=a[i];
var t=p[w];

if(qx.core.Variant.isSet(cl,co)){if(t instanceof Function){t=qx.core.Aspect.wrap(name+cm+w,t,ck);
}v[w]=t;
}else{v[w]=t;
}}}}var u=qx.Bootstrap.createNamespace(name,v);
v.name=v.classname=name;
v.basename=u;
v.$$type=cq;

if(n){v.$$classtype=n;
}if(!v.hasOwnProperty(cv)){v.toString=this.genericToString;
}
if(o){qx.Bootstrap.extendClass(v,q,o,name,u);
if(r){if(qx.core.Variant.isSet(cl,co)){r=qx.core.Aspect.wrap(name,r,cC);
}v.$$destructor=r;
qx.Bootstrap.setDisplayName(r,name,cF);
}}this.$$registry[name]=v;
return v;
},__bA:function(ca,cb,cc){if(qx.core.Variant.isSet(cp,co)){if(typeof cb!==cn||cb instanceof Array){throw new Error(ca.classname+": the events must be defined as map!");
}
for(var cd in cb){if(typeof cb[cd]!==ci){throw new Error(ca.classname+"/"+cd+": the event value needs to be a string with the class name of the event object which will be fired.");
}}if(ca.$$events&&cc!==true){for(var cd in cb){if(ca.$$events[cd]!==undefined&&ca.$$events[cd]!==cb[cd]){throw new Error(ca.classname+"/"+cd+": the event value/type cannot be changed from "+ca.$$events[cd]+" to "+cb[cd]);
}}}}
if(ca.$$events){for(var cd in cb){ca.$$events[cd]=cb[cd];
}}else{ca.$$events=cb;
}},__bB:function(bt,bu,bv){var bw;

if(bv===undefined){bv=false;
}var bx=bt.prototype;

for(var name in bu){bw=bu[name];
if(qx.core.Variant.isSet(cp,co)){this.__bC(bt,name,bw,bv);
}bw.name=name;
if(!bw.refine){if(bt.$$properties===undefined){bt.$$properties={};
}bt.$$properties[name]=bw;
}if(bw.init!==undefined){bt.prototype[cM+name]=bw.init;
}if(bw.event!==undefined){var event={};
event[bw.event]=cJ;
this.__bA(bt,event,bv);
}if(bw.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bx.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bt);
}}
if(!bw.refine){qx.core.Property.attachMethods(bt,name,bw);
}}},__bC:qx.core.Variant.select(cp,{"on":function(bN,name,bO,bP){var bR=this.hasProperty(bN,name);

if(bR){var bQ=this.getPropertyDefinition(bN,name);

if(bO.refine&&bQ.init===undefined){throw new Error("Could not refine a init value if there was previously no init value defined. Property '"+name+"' of class '"+bN.classname+"'.");
}}
if(!bR&&bO.refine){throw new Error("Could not refine non-existent property: '"+name+"' of class: '"+bN.classname+"'!");
}
if(bR&&!bP){throw new Error("Class "+bN.classname+" already has a property: "+name+"!");
}
if(bR&&bP){if(!bO.refine){throw new Error('Could not refine property "'+name+'" without a "refine" flag in the property definition! This class: '+bN.classname+', original class: '+this.getByProperty(bN,name).classname+'.');
}
for(var bS in bO){if(bS!==cK&&bS!==cI){throw new Error("Class "+bN.classname+" could not refine property: "+name+"! Key: "+bS+" could not be refined!");
}}}var bT=bO.group?qx.core.Property.$$allowedGroupKeys:qx.core.Property.$$allowedKeys;

for(var bS in bO){if(bT[bS]===undefined){throw new Error('The configuration key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'" is not allowed!');
}
if(bO[bS]===undefined){throw new Error('Invalid key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The value is undefined: '+bO[bS]);
}
if(bT[bS]!==null&&typeof bO[bS]!==bT[bS]){throw new Error('Invalid type of key "'+bS+'" of property "'+name+'" in class "'+bN.classname+'"! The type of the key must be "'+bT[bS]+'"!');
}}
if(bO.transform!=null){if(!(typeof bO.transform==ci)){throw new Error('Invalid transform definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String.');
}}
if(bO.check!=null){if(!qx.Bootstrap.isString(bO.check)&&!qx.Bootstrap.isArray(bO.check)&&!qx.Bootstrap.isFunction(bO.check)){throw new Error('Invalid check definition of property "'+name+'" in class "'+bN.classname+'"! Needs to be a String, Array or Function.');
}}},"default":null}),__bD:function(bF,bG,bH,bI,bJ){var bK=bF.prototype;
var bM,bL;
qx.Bootstrap.setDisplayNames(bG,bF.classname+cN);

for(var i=0,a=qx.Bootstrap.getKeys(bG),l=a.length;i<l;i++){bM=a[i];
bL=bG[bM];

if(qx.core.Variant.isSet(cp,co)){if(bK[bM]!==undefined&&bM.charAt(0)==cO&&bM.charAt(1)==cO){throw new Error('Overwriting private member "'+bM+'" of Class "'+bF.classname+'" is not allowed!');
}
if(bH!==true&&bK.hasOwnProperty(bM)){throw new Error('Overwriting member "'+bM+'" of Class "'+bF.classname+'" is not allowed!');
}}if(bI!==false&&bL instanceof Function&&bL.$$type==null){if(bJ==true){bL=this.__bE(bL,bK[bM]);
}else{if(bK[bM]){bL.base=bK[bM];
}bL.self=bF;
}
if(qx.core.Variant.isSet(cl,co)){bL=qx.core.Aspect.wrap(bF.classname+cm+bM,bL,cE);
}}bK[bM]=bL;
}},__bE:function(U,V){if(V){return function(){var cR=U.base;
U.base=V;
var cQ=U.apply(this,arguments);
U.base=cR;
return cQ;
};
}else{return U;
}},__bF:function(g,h){if(qx.core.Variant.isSet(cp,co)){if(!g||!h){throw new Error("Incomplete parameters!");
}if(this.hasOwnInterface(g,h)){throw new Error('Interface "'+h.name+'" is already used by Class "'+g.classname+'!');
}if(g.$$classtype!==ch){qx.Interface.assert(g,h,true);
}}var j=qx.Interface.flatten([h]);

if(g.$$implements){g.$$implements.push(h);
g.$$flatImplements.push.apply(g.$$flatImplements,j);
}else{g.$$implements=[h];
g.$$flatImplements=j;
}},__bG:function(L){var name=L.classname;
var M=this.__bL(L,name,L.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(L),l=a.length;i<l;i++){N=a[i];
M[N]=L[N];
}M.prototype=L.prototype;
var P=L.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(P),l=a.length;i<l;i++){N=a[i];
var Q=P[N];
if(Q&&Q.self==L){Q.self=M;
}}for(var N in this.$$registry){var O=this.$$registry[N];

if(!O){continue;
}
if(O.base==L){O.base=M;
}
if(O.superclass==L){O.superclass=M;
}
if(O.$$original){if(O.$$original.base==L){O.$$original.base=M;
}
if(O.$$original.superclass==L){O.$$original.superclass=M;
}}}qx.Bootstrap.createNamespace(name,M);
this.$$registry[name]=M;
return M;
},__bH:function(F,G,H){if(qx.core.Variant.isSet(cp,co)){if(!F||!G){throw new Error("Incomplete parameters!");
}}
if(this.hasMixin(F,G)){return;
}var K=F.$$original;

if(G.$$constructor&&!K){F=this.__bG(F);
}var J=qx.Mixin.flatten([G]);
var I;

for(var i=0,l=J.length;i<l;i++){I=J[i];
if(I.$$events){this.__bA(F,I.$$events,H);
}if(I.$$properties){this.__bB(F,I.$$properties,H);
}if(I.$$members){this.__bD(F,I.$$members,H,H,H);
}}if(F.$$includes){F.$$includes.push(G);
F.$$flatIncludes.push.apply(F.$$flatIncludes,J);
}else{F.$$includes=[G];
F.$$flatIncludes=J;
}},__bI:function(){function cT(){cT.base.apply(this,arguments);
}return cT;
},__bJ:function(){return function(){};
},__bK:function(by,bz){if(qx.core.Variant.isSet(cp,co)){return true;
}if(by&&by.$$includes){var bA=by.$$flatIncludes;

for(var i=0,l=bA.length;i<l;i++){if(bA[i].$$constructor){return true;
}}}if(bz){var bB=qx.Mixin.flatten(bz);

for(var i=0,l=bB.length;i<l;i++){if(bB[i].$$constructor){return true;
}}}return false;
},__bL:function(Y,name,ba){var bc=function(){var T=bc;

if(qx.core.Variant.isSet(cp,co)){if(!(this instanceof T)){throw new Error("Please initialize '"+name+"' objects using the new keyword!");
}if(ba===ch){if(this.classname===name){throw new Error("The class ',"+name+"' is abstract! It is not possible to instantiate it.");
}}else if(ba===cg){if(!T.$$allowconstruct){throw new Error("The class '"+name+"' is a singleton! It is not possible to instantiate it directly. Use the static getInstance() method instead.");
}}}var S=T.$$original.apply(this,arguments);
if(T.$$includes){var R=T.$$flatIncludes;

for(var i=0,l=R.length;i<l;i++){if(R[i].$$constructor){R[i].$$constructor.apply(this,arguments);
}}}
if(qx.core.Variant.isSet(cp,co)){if(this.classname===name){this.$$initialized=true;
}}return S;
};

if(qx.core.Variant.isSet(cl,co)){var bb=qx.core.Aspect.wrap(name,bc,cP);
bc.$$original=Y;
bc.constructor=bb;
bc=bb;
}bc.$$original=Y;
Y.wrapper=bc;
return bc;
}},defer:function(){if(qx.core.Variant.isSet(cl,co)){for(var bf in qx.Bootstrap.$$registry){var bg=qx.Bootstrap.$$registry[bf];

for(var bh in bg){if(bg[bh] instanceof Function){bg[bh]=qx.core.Aspect.wrap(bf+cm+bh,bg[bh],ck);
}}}}}});
})();
(function(){var i="qx.client",h="on",g="function",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:qx.core.Variant.select(i,{"mshtml":function(s,t,u){s.attachEvent(h+t,u);
},"default":function(D,E,F){D.addEventListener(E,F,false);
}}),removeNativeListener:qx.core.Variant.select(i,{"mshtml":function(z,A,B){try{z.detachEvent(h+A,B);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(o,p,q){o.removeEventListener(p,q,false);
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
}catch(C){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(r){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(j,k){if(document.createEventObject){var l=document.createEventObject();
return j.fireEvent(h+k,l);
}else{var l=document.createEvent(a);
l.initEvent(k,true,true);
return !j.dispatchEvent(l);
}},supportsEvent:qx.core.Variant.select(i,{"webkit":function(m,n){return m.hasOwnProperty(h+n);
},"default":function(v,w){var x=h+w;
var y=(x in v);

if(!y){y=typeof v[x]==g;

if(!y&&v.setAttribute){v.setAttribute(x,c);
y=typeof v[x]==g;
v.removeAttribute(x);
}}return y;
}})}});
})();
(function(){var bA="qx.debug",bz="on",by="|bubble",bx="|capture",bw="|",bv="': ",bu="'",bt="",bs="_",br="Invalid Target.",ca="Invalid event type.",bY="Invalid event target.",bX=" from the target '",bW="Invalid callback function",bV="unload",bU="Failed to remove event listener for id '",bT="Invalid context for callback.",bS="Invalid capture flag.",bR="Failed to add event listener for type '",bQ="UNKNOWN_",bH="capture",bI="qx.event.Manager",bF="__eG",bG="Could not dispatch event '",bD="DOM_",bE="__eF",bB="QX_",bC=" to the target '",bJ="Failed to remove event listener for type '",bK="Invalid capture falg.",bM="c",bL="Invalid id type.",bO="' on target '",bN="WIN_",bP="Invalid event object.";
qx.Class.define(bI,{extend:Object,construct:function(cH,cI){this.__eB=cH;
this.__eC=qx.core.ObjectRegistry.toHashCode(cH);
this.__eD=cI;
if(cH.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(cH,bV,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(cH,bV,arguments.callee);
self.dispose();
}));
}this.__eE={};
this.__eF={};
this.__eG={};
this.__eH={};
},statics:{__eI:0,getNextUniqueId:function(){return (this.__eI++)+bt;
}},members:{__eD:null,__eE:null,__eG:null,__eJ:null,__eF:null,__eH:null,__eB:null,__eC:null,getWindow:function(){return this.__eB;
},getWindowId:function(){return this.__eC;
},getHandler:function(E){var F=this.__eF[E.classname];

if(F){return F;
}return this.__eF[E.classname]=new E(this);
},getDispatcher:function(t){var u=this.__eG[t.classname];

if(u){return u;
}return this.__eG[t.classname]=new t(this,this.__eD);
},getListeners:function(cn,co,cp){var cq=cn.$$hash||qx.core.ObjectRegistry.toHashCode(cn);
var cs=this.__eE[cq];

if(!cs){return null;
}var ct=co+(cp?bx:by);
var cr=cs[ct];
return cr?cr.concat():null;
},serializeListeners:function(cQ){var cX=cQ.$$hash||qx.core.ObjectRegistry.toHashCode(cQ);
var da=this.__eE[cX];
var cV=[];

if(da){var cT,cY,cR,cU,cW;

for(var cS in da){cT=cS.indexOf(bw);
cY=cS.substring(0,cT);
cR=cS.charAt(cT+1)==bM;
cU=da[cS];

for(var i=0,l=cU.length;i<l;i++){cW=cU[i];
cV.push({self:cW.context,handler:cW.handler,type:cY,capture:cR});
}}}return cV;
},toggleAttachedEvents:function(v,w){var B=v.$$hash||qx.core.ObjectRegistry.toHashCode(v);
var D=this.__eE[B];

if(D){var y,C,x,z;

for(var A in D){y=A.indexOf(bw);
C=A.substring(0,y);
x=A.charCodeAt(y+1)===99;
z=D[A];

if(w){this.__eK(v,C,x);
}else{this.__eL(v,C,x);
}}}},hasListener:function(H,I,J){if(qx.core.Variant.isSet(bA,bz)){if(H==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+H);
}}var K=H.$$hash||qx.core.ObjectRegistry.toHashCode(H);
var M=this.__eE[K];

if(!M){return false;
}var N=I+(J?bx:by);
var L=M[N];
return L&&L.length>0;
},importListeners:function(be,bf){if(qx.core.Variant.isSet(bA,bz)){if(be==null){qx.log.Logger.trace(this);
throw new Error("Invalid object: "+be);
}}var bl=be.$$hash||qx.core.ObjectRegistry.toHashCode(be);
var bm=this.__eE[bl]={};
var bi=qx.event.Manager;

for(var bg in bf){var bj=bf[bg];
var bk=bj.type+(bj.capture?bx:by);
var bh=bm[bk];

if(!bh){bh=bm[bk]=[];
this.__eK(be,bj.type,bj.capture);
}bh.push({handler:bj.listener,context:bj.self,unique:bj.unique||(bi.__eI++)+bt});
}},addListener:function(S,T,U,self,V){if(qx.core.Variant.isSet(bA,bz)){var ba=bR+T+bu+bC+S.classname+bv;
qx.core.Assert.assertObject(S,ba+br);
qx.core.Assert.assertString(T,ba+ca);
qx.core.Assert.assertFunction(U,ba+bW);

if(V!==undefined){qx.core.Assert.assertBoolean(V,bS);
}}var bb=S.$$hash||qx.core.ObjectRegistry.toHashCode(S);
var bd=this.__eE[bb];

if(!bd){bd=this.__eE[bb]={};
}var Y=T+(V?bx:by);
var X=bd[Y];

if(!X){X=bd[Y]=[];
}if(X.length===0){this.__eK(S,T,V);
}var bc=(qx.event.Manager.__eI++)+bt;
var W={handler:U,context:self,unique:bc};
X.push(W);
return Y+bw+bc;
},findHandler:function(cu,cv){var cF=false,cy=false,cG=false;
var cE;

if(cu.nodeType===1){cF=true;
cE=bD+cu.tagName.toLowerCase()+bs+cv;
}else if(cu==this.__eB){cy=true;
cE=bN+cv;
}else if(cu.classname){cG=true;
cE=bB+cu.classname+bs+cv;
}else{cE=bQ+cu+bs+cv;
}var cA=this.__eH;

if(cA[cE]){return cA[cE];
}var cD=this.__eD.getHandlers();
var cz=qx.event.IEventHandler;
var cB,cC,cx,cw;

for(var i=0,l=cD.length;i<l;i++){cB=cD[i];
cx=cB.SUPPORTED_TYPES;

if(cx&&!cx[cv]){continue;
}cw=cB.TARGET_CHECK;

if(cw){if(!cF&&cw===cz.TARGET_DOMNODE){continue;
}else if(!cy&&cw===cz.TARGET_WINDOW){continue;
}else if(!cG&&cw===cz.TARGET_OBJECT){continue;
}}cC=this.getHandler(cD[i]);

if(cB.IGNORE_CAN_HANDLE||cC.canHandleEvent(cu,cv)){cA[cE]=cC;
return cC;
}}return null;
},__eK:function(O,P,Q){var R=this.findHandler(O,P);

if(R){R.registerEvent(O,P,Q);
return;
}
if(qx.core.Variant.isSet(bA,bz)){qx.log.Logger.warn(this,"There is no event handler for the event '"+P+"' on target '"+O+"'!");
}},removeListener:function(a,b,c,self,d){if(qx.core.Variant.isSet(bA,bz)){var h=bJ+b+bu+bX+a.classname+bv;
qx.core.Assert.assertObject(a,h+br);
qx.core.Assert.assertString(b,h+ca);
qx.core.Assert.assertFunction(c,h+bW);

if(self!==undefined){qx.core.Assert.assertObject(self,bT);
}
if(d!==undefined){qx.core.Assert.assertBoolean(d,bK);
}}var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var k=this.__eE[j];

if(!k){return false;
}var e=b+(d?bx:by);
var f=k[e];

if(!f){return false;
}var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];

if(g.handler===c&&g.context===self){qx.lang.Array.removeAt(f,i);

if(f.length==0){this.__eL(a,b,d);
}return true;
}}return false;
},removeListenerById:function(cb,cc){if(qx.core.Variant.isSet(bA,bz)){var ci=bU+cc+bu+bX+cb.classname+bv;
qx.core.Assert.assertObject(cb,ci+br);
qx.core.Assert.assertString(cc,ci+bL);
}var cg=cc.split(bw);
var cl=cg[0];
var cd=cg[1].charCodeAt(0)==99;
var ck=cg[2];
var cj=cb.$$hash||qx.core.ObjectRegistry.toHashCode(cb);
var cm=this.__eE[cj];

if(!cm){return false;
}var ch=cl+(cd?bx:by);
var cf=cm[ch];

if(!cf){return false;
}var ce;

for(var i=0,l=cf.length;i<l;i++){ce=cf[i];

if(ce.unique===ck){qx.lang.Array.removeAt(cf,i);

if(cf.length==0){this.__eL(cb,cl,cd);
}return true;
}}return false;
},removeAllListeners:function(m){var q=m.$$hash||qx.core.ObjectRegistry.toHashCode(m);
var s=this.__eE[q];

if(!s){return false;
}var o,r,n;

for(var p in s){if(s[p].length>0){o=p.split(bw);
r=o[0];
n=o[1]===bH;
this.__eL(m,r,n);
}}delete this.__eE[q];
return true;
},deleteAllListeners:function(G){delete this.__eE[G];
},__eL:function(bn,bo,bp){var bq=this.findHandler(bn,bo);

if(bq){bq.unregisterEvent(bn,bo,bp);
return;
}
if(qx.core.Variant.isSet(bA,bz)){qx.log.Logger.warn(this,"There is no event handler for the event '"+bo+"' on target '"+bn+"'!");
}},dispatchEvent:function(cJ,event){if(qx.core.Variant.isSet(bA,bz)){var cO=bG+event+bO+cJ.classname+bv;
qx.core.Assert.assertNotUndefined(cJ,cO+bY);
qx.core.Assert.assertNotNull(cJ,cO+bY);
qx.core.Assert.assertInstance(event,qx.event.type.Event,cO+bP);
}var cP=event.getType();

if(!event.getBubbles()&&!this.hasListener(cJ,cP)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cJ);
}var cN=this.__eD.getDispatchers();
var cM;
var cL=false;

for(var i=0,l=cN.length;i<l;i++){cM=this.getDispatcher(cN[i]);
if(cM.canDispatchEvent(cJ,event,cP)){cM.dispatchEvent(cJ,event,cP);
cL=true;
break;
}}
if(!cL){if(qx.core.Variant.isSet(bA,bz)){qx.log.Logger.error(this,"No dispatcher can handle event of type "+cP+" on "+cJ);
}return true;
}var cK=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cK;
},dispose:function(){this.__eD.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bE);
qx.util.DisposeUtil.disposeMap(this,bF);
this.__eE=this.__eB=this.__eJ=null;
this.__eD=this.__eH=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(b){if(b.nodeType==null){return b;
}if(b.nodeType!==this.DOCUMENT){b=b.ownerDocument;
}return b.parentWindow;
},"default":function(m){if(m.nodeType==null){return m;
}if(m.nodeType!==this.DOCUMENT){m=m.ownerDocument;
}return m.defaultView;
}}),getDocumentElement:function(q){return this.getDocument(q).documentElement;
},getBodyElement:function(p){return this.getDocument(p).body;
},isNode:function(f){return !!(f&&f.nodeType!=null);
},isElement:function(o){return !!(o&&o.nodeType===this.ELEMENT);
},isDocument:function(j){return !!(j&&j.nodeType===this.DOCUMENT);
},isText:function(r){return !!(r&&r.nodeType===this.TEXT);
},isWindow:function(t){return !!(t&&t.history&&t.location&&t.document);
},isNodeName:function(g,h){if(!h||!g||!g.nodeName){return false;
}return h.toLowerCase()==qx.dom.Node.getName(g);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(k){if(!k||!k.nodeType){return null;
}
switch(k.nodeType){case 1:var i,a=[],l=k.childNodes,length=l.length;

for(i=0;i<length;i++){a[i]=this.getText(l[i]);
}return a.join(c);
case 2:return k.nodeValue;
break;
case 3:return k.nodeValue;
break;
}return null;
}}});
})();
(function(){var r="qx.debug",q="on",p="The second parameter must be an array.",o="mshtml",n="The first parameter must be an array.",m="Parameter must be an array.",k="qx.client",j="[object Array]",h="qx.lang.Array",g="qx",e="number",f="string";
qx.Class.define(h,{statics:{toArray:function(bf,bg){return this.cast(bf,Array,bg);
},cast:function(T,U,V){if(T.constructor===U){return T;
}
if(qx.Class.hasInterface(T,qx.data.IListData)){var T=T.toArray();
}var W=new U;
if(qx.core.Variant.isSet(k,o)){if(T.item){for(var i=V||0,l=T.length;i<l;i++){W.push(T[i]);
}return W;
}}if(Object.prototype.toString.call(T)===j&&V==null){W.push.apply(W,T);
}else{W.push.apply(W,Array.prototype.slice.call(T,V||0));
}return W;
},fromArguments:function(w,x){return Array.prototype.slice.call(w,x||0);
},fromCollection:function(N){if(qx.core.Variant.isSet(k,o)){if(N.item){var O=[];

for(var i=0,l=N.length;i<l;i++){O[i]=N[i];
}return O;
}}return Array.prototype.slice.call(N,0);
},fromShortHand:function(bo){var bq=bo.length;
var bp=qx.lang.Array.clone(bo);
switch(bq){case 1:bp[1]=bp[2]=bp[3]=bp[0];
break;
case 2:bp[2]=bp[0];
case 3:bp[3]=bp[1];
}return bp;
},clone:function(br){return br.concat();
},insertAt:function(P,Q,i){P.splice(i,0,Q);
return P;
},insertBefore:function(bh,bi,bj){var i=bh.indexOf(bj);

if(i==-1){bh.push(bi);
}else{bh.splice(i,0,bi);
}return bh;
},insertAfter:function(a,b,c){var i=a.indexOf(c);

if(i==-1||i==(a.length-1)){a.push(b);
}else{a.splice(i+1,0,b);
}return a;
},removeAt:function(bb,i){return bb.splice(i,1)[0];
},removeAll:function(bc){bc.length=0;
return this;
},append:function(bk,bl){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(bk,n);
qx.core.Assert&&qx.core.Assert.assertArray(bl,p);
}Array.prototype.push.apply(bk,bl);
return bk;
},exclude:function(s,t){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(s,n);
qx.core.Assert&&qx.core.Assert.assertArray(t,p);
}
for(var i=0,v=t.length,u;i<v;i++){u=s.indexOf(t[i]);

if(u!=-1){s.splice(u,1);
}}return s;
},remove:function(bd,be){var i=bd.indexOf(be);

if(i!=-1){bd.splice(i,1);
return be;
}},contains:function(y,z){return y.indexOf(z)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(bm){var bn=0;

for(var i=0,l=bm.length;i<l;i++){bn+=bm[i];
}return bn;
},max:function(X){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(X,m);
}var i,ba=X.length,Y=X[0];

for(i=1;i<ba;i++){if(X[i]>Y){Y=X[i];
}}return Y===undefined?null:Y;
},min:function(bs){if(qx.core.Variant.isSet(r,q)){qx.core.Assert&&qx.core.Assert.assertArray(bs,m);
}var i,bu=bs.length,bt=bs[0];

for(i=1;i<bu;i++){if(bs[i]<bt){bt=bs[i];
}}return bt===undefined?null:bt;
},unique:function(A){var K=[],C={},F={},H={};
var G,B=0;
var L=g+qx.lang.Date.now();
var D=false,J=false,M=false;
for(var i=0,I=A.length;i<I;i++){G=A[i];
if(G===null){if(!D){D=true;
K.push(G);
}}else if(G===undefined){}else if(G===false){if(!J){J=true;
K.push(G);
}}else if(G===true){if(!M){M=true;
K.push(G);
}}else if(typeof G===f){if(!C[G]){C[G]=1;
K.push(G);
}}else if(typeof G===e){if(!F[G]){F[G]=1;
K.push(G);
}}else{E=G[L];

if(E==null){E=G[L]=B++;
}
if(!H[E]){H[E]=G;
K.push(G);
}}}for(var E in H){try{delete H[E][L];
}catch(d){try{H[E][L]=null;
}catch(bv){throw new Error("Cannot clean-up map entry doneObjects["+E+"]["+L+"]");
}}}return K;
}}});
})();
(function(){var B="()",A="qx.debug",z=".",y=".prototype.",x="on",w="Invalid parameter 'func'.",v='anonymous()',u="Trying to call a bound function with a disposed object as context: ",t=" :: ",s="qx.lang.Function",r=".constructor()";
qx.Class.define(s,{statics:{getCaller:function(m){return m.caller?m.caller.callee:m.callee.caller;
},getName:function(f){if(f.displayName){return f.displayName;
}
if(f.$$original||f.wrapper||f.classname){return f.classname+r;
}
if(f.$$mixin){for(var h in f.$$mixin.$$members){if(f.$$mixin.$$members[h]==f){return f.$$mixin.name+y+h+B;
}}for(var h in f.$$mixin){if(f.$$mixin[h]==f){return f.$$mixin.name+z+h+B;
}}}
if(f.self){var i=f.self.constructor;

if(i){for(var h in i.prototype){if(i.prototype[h]==f){return i.classname+y+h+B;
}}for(var h in i){if(i[h]==f){return i.classname+z+h+B;
}}}}var g=f.toString().match(/function\s*(\w*)\s*\(.*/);

if(g&&g.length>=1&&g[1]){return g[1]+B;
}return v;
},globalEval:function(E){if(window.execScript){return window.execScript(E);
}else{return eval.call(window,E);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(b,c){if(qx.core.Variant.isSet(A,x)){qx.core.Assert&&qx.core.Assert.assertFunction(b,w);
}if(!c){return b;
}if(!(c.self||c.args||c.delay!=null||c.periodical!=null||c.attempt)){return b;
}return function(event){if(qx.core.Variant.isSet(A,x)){if(c.self instanceof qx.core.Object){qx.core.Assert&&qx.core.Assert.assertFalse(c.self.isDisposed(),u+c.self.toString()+t+qx.lang.Function.getName(b));
}}var o=qx.lang.Array.fromArguments(arguments);
if(c.args){o=c.args.concat(o);
}
if(c.delay||c.periodical){var n=qx.event.GlobalError.observeMethod(function(){return b.apply(c.self||this,o);
});

if(c.delay){return window.setTimeout(n,c.delay);
}
if(c.periodical){return window.setInterval(n,c.periodical);
}}else if(c.attempt){var p=false;

try{p=b.apply(c.self||this,o);
}catch(q){}return p;
}else{return b.apply(c.self||this,o);
}};
},bind:function(d,self,e){return this.create(d,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(C,D){return this.create(C,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(K,self,L){if(arguments.length<3){return function(event){return K.call(self||this,event||window.event);
};
}else{var M=qx.lang.Array.fromArguments(arguments,2);
return function(event){var a=[event||window.event];
a.push.apply(a,M);
K.apply(self||this,a);
};
}},attempt:function(F,self,G){return this.create(F,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(H,I,self,J){return this.create(H,{delay:I,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(j,k,self,l){return this.create(j,{periodical:k,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var l="qx.debug",k="on",j="Invalid event target.",i="Invalid event dispatcher!",h="': ",g="Invalid event handler.",f="' on target '",e="Could not fire event '",d="undefined",c="qx.event.Registration";
qx.Class.define(c,{statics:{__eq:{},getManager:function(s){if(s==null){if(qx.core.Variant.isSet(l,k)){qx.log.Logger.error("qx.event.Registration.getManager(null) was called!");
qx.log.Logger.trace(this);
}s=window;
}else if(s.nodeType){s=qx.dom.Node.getWindow(s);
}else if(!qx.dom.Node.isWindow(s)){s=window;
}var u=s.$$hash||qx.core.ObjectRegistry.toHashCode(s);
var t=this.__eq[u];

if(!t){t=new qx.event.Manager(s,this);
this.__eq[u]=t;
}return t;
},removeManager:function(P){var Q=P.getWindowId();
delete this.__eq[Q];
},addListener:function(L,M,N,self,O){return this.getManager(L).addListener(L,M,N,self,O);
},removeListener:function(D,E,F,self,G){return this.getManager(D).removeListener(D,E,F,self,G);
},removeListenerById:function(X,Y){return this.getManager(X).removeListenerById(X,Y);
},removeAllListeners:function(ba){return this.getManager(ba).removeAllListeners(ba);
},deleteAllListeners:function(U){var V=U.$$hash;

if(V){this.getManager(U).deleteAllListeners(V);
}},hasListener:function(R,S,T){return this.getManager(R).hasListener(R,S,T);
},serializeListeners:function(bb){return this.getManager(bb).serializeListeners(bb);
},createEvent:function(H,I,J){if(qx.core.Variant.isSet(l,k)){if(arguments.length>1&&I===undefined){throw new Error("Create event of type "+H+" with undefined class. Please use null to explicit fallback to default event type!");
}}if(I==null){I=qx.event.type.Event;
}var K=qx.event.Pool.getInstance().getObject(I);
J?K.init.apply(K,J):K.init();
if(H){K.setType(H);
}return K;
},dispatchEvent:function(W,event){return this.getManager(W).dispatchEvent(W,event);
},fireEvent:function(v,w,x,y){if(qx.core.Variant.isSet(l,k)){if(arguments.length>2&&x===undefined&&y!==undefined){throw new Error("Create event of type "+w+" with undefined class. Please use null to explicit fallback to default event type!");
}var z=e+w+f+(v?v.classname:d)+h;
qx.core.Assert.assertNotUndefined(v,z+j);
qx.core.Assert.assertNotNull(v,z+j);
}var A=this.createEvent(w,x||null,y);
return this.getManager(v).dispatchEvent(v,A);
},fireNonBubblingEvent:function(m,n,o,p){if(qx.core.Variant.isSet(l,k)){if(arguments.length>2&&o===undefined&&p!==undefined){throw new Error("Create event of type "+n+" with undefined class. Please use null to explicit fallback to default event type!");
}}var q=this.getManager(m);

if(!q.hasListener(m,n,false)){return true;
}var r=this.createEvent(n,o||null,p);
return q.dispatchEvent(m,r);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__er:[],addHandler:function(bc){if(qx.core.Variant.isSet(l,k)){qx.core.Assert.assertInterface(bc,qx.event.IEventHandler,g);
}this.__er.push(bc);
this.__er.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__er;
},__es:[],addDispatcher:function(B,C){if(qx.core.Variant.isSet(l,k)){qx.core.Assert.assertInterface(B,qx.event.IEventDispatcher,i);
}this.__es.push(B);
this.__es.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__es;
}}});
})();
(function(){var g="on",f="qx.debug",e="$$hash",d="",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__gY:{},__ha:0,__hb:[],register:function(k){var o=this.__gY;

if(!o){return;
}var n=k.$$hash;

if(n==null){var m=this.__hb;

if(m.length>0){n=m.pop();
}else{n=(this.__ha++)+d;
}k.$$hash=n;
}
if(qx.core.Variant.isSet(f,g)){if(!k.dispose){throw new Error("Invalid object: "+k);
}}o[n]=k;
},unregister:function(q){var r=q.$$hash;

if(r==null){return;
}var s=this.__gY;

if(s&&s[r]){delete s[r];
this.__hb.push(r);
}try{delete q.$$hash;
}catch(j){if(q.removeAttribute){q.removeAttribute(e);
}}},toHashCode:function(A){if(qx.core.Variant.isSet(f,g)){if(A==null){throw new Error("Invalid object: "+A);
}}var C=A.$$hash;

if(C!=null){return C;
}var B=this.__hb;

if(B.length>0){C=B.pop();
}else{C=(this.__ha++)+d;
}return A.$$hash=C;
},clearHashCode:function(u){if(qx.core.Variant.isSet(f,g)){if(u==null){throw new Error("Invalid object: "+u);
}}var v=u.$$hash;

if(v!=null){this.__hb.push(v);
try{delete u.$$hash;
}catch(p){if(u.removeAttribute){u.removeAttribute(e);
}}}},fromHashCode:function(t){return this.__gY[t]||null;
},shutdown:function(){this.inShutDown=true;
var x=this.__gY;
var z=[];

for(var y in x){z.push(y);
}z.sort(function(a,b){return parseInt(b)-parseInt(a);
});
var w,i=0,l=z.length;

while(true){try{for(;i<l;i++){y=z[i];
w=x[y];

if(w&&w.dispose){w.dispose();
}}}catch(h){qx.Bootstrap.error(this,"Could not dispose object "+w.toString()+": "+h);

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
},isNumber:function(j){return (j!==null&&(this.getClass(j)==b||j instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(k){return (k!==null&&(this.getClass(k)==c||k instanceof Date));
},isError:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Error));
}}});
})();
(function(){var cd="",cc="!",cb="'!",ca="'",bY="Expected '",bX="' (rgb(",bW=",",bV=")), but found value '",bU="Event (",bT="Expected value to be the CSS color '",dj="' but found ",di="The value '",dh="qx.core.Object",dg="Expected value to be an array but found ",df=") was fired.",de="Expected value to be an integer >= 0 but found ",dd="' to be not equal with '",dc="' to '",db="qx.ui.core.Widget",da="Called assertTrue with '",ck="Expected value to be a map but found ",cl="The function did not raise an exception!",ci="Expected value to be undefined but found ",cj="Expected value to be a DOM element but found  '",cg="Expected value to be a regular expression but found ",ch="' to implement the interface '",ce="Expected value to be null but found ",cf="Invalid argument 'type'",cs="Called assert with 'false'",ct="Assertion error! ",cF="Expected value to be a string but found ",cB="null",cN="' but found '",cI="' must must be a key of the map '",cV="The String '",cS="Expected value not to be undefined but found ",cx="qx.util.ColorUtil",cY=": ",cX="The raised exception does not have the expected type! ",cW=") not fired.",cw="qx.core.Assert",cz="Expected value to be typeof object but found ",cA="' (identical) but found '",cD="' must have any of the values defined in the array '",cG="Expected value to be a number but found ",cJ="Called assertFalse with '",cP="]",cU="Expected value to be a qooxdoo object but found ",cm="' arguments.",cn="Expected value not to be null but found ",cy="Array[",cM="' does not match the regular expression '",cL="' to be not identical with '",cK="' arguments but found '",cR="', which cannot be converted to a CSS color!",cQ="Expected object '",cH="qx.core.AssertionError",cO="Expected value to be a boolean but found ",bQ="))!",cT="Expected value to be a qooxdoo widget but found ",co="Expected value '%1' to be in the range '%2'..'%3'!",cp="Expected value to be typeof '",cC="Expected value to be typeof function but found ",bR="Expected value to be an integer but found ",bS="Called fail().",cv="The parameter 're' must be a string or a regular expression.",cq="Expected value to be a number >= 0 but found ",cr="Expected value to be instanceof '",cu="Wrong number of arguments given. Expected '",cE="object";
qx.Class.define(cw,{statics:{__rV:true,__rW:function(bp,bq){var br=cd;

for(var i=1,l=arguments.length;i<l;i++){br=br+this.__rX(arguments[i]);
}var bt=ct+bp+cY+br;

if(this.__rV){qx.Bootstrap.error(bt);
}
if(qx.Class.isDefined(cH)){var bs=new qx.core.AssertionError(bp,br);

if(this.__rV){qx.Bootstrap.error("Stack trace: \n"+bs.getStackTrace());
}throw bs;
}else{throw new Error(bt);
}},__rX:function(dz){var dA;

if(dz===null){dA=cB;
}else if(qx.lang.Type.isArray(dz)&&dz.length>10){dA=cy+dz.length+cP;
}else if((dz instanceof Object)&&(dz.toString==null)){dA=qx.lang.Json.stringify(dz,null,2);
}else{try{dA=dz.toString();
}catch(e){dA=cd;
}}return dA;
},assert:function(by,bz){by==true||this.__rW(bz||cd,cs);
},fail:function(bx){this.__rW(bx||cd,bS);
},assertTrue:function(bg,bh){(bg===true)||this.__rW(bh||cd,da,bg,ca);
},assertFalse:function(R,S){(R===false)||this.__rW(S||cd,cJ,R,ca);
},assertEquals:function(bE,bF,bG){bE==bF||this.__rW(bG||cd,bY,bE,cN,bF,cb);
},assertNotEquals:function(t,u,v){t!=u||this.__rW(v||cd,bY,t,dd,u,cb);
},assertIdentical:function(bm,bn,bo){bm===bn||this.__rW(bo||cd,bY,bm,cA,bn,cb);
},assertNotIdentical:function(bd,be,bf){bd!==be||this.__rW(bf||cd,bY,bd,cL,be,cb);
},assertNotUndefined:function(dD,dE){dD!==undefined||this.__rW(dE||cd,cS,dD,cc);
},assertUndefined:function(N,O){N===undefined||this.__rW(O||cd,ci,N,cc);
},assertNotNull:function(k,m){k!==null||this.__rW(m||cd,cn,k,cc);
},assertNull:function(bk,bl){bk===null||this.__rW(bl||cd,ce,bk,cc);
},assertJsonEquals:function(bu,bv,bw){this.assertEquals(qx.lang.Json.stringify(bu),qx.lang.Json.stringify(bv),bw);
},assertMatch:function(B,C,D){this.assertString(B);
this.assert(qx.lang.Type.isRegExp(C)||qx.lang.Type.isString(C),cv);
B.search(C)>=0||this.__rW(D||cd,cV,B,cM,C.toString(),cb);
},assertArgumentsCount:function(dI,dJ,dK,dL){var dM=dI.length;
(dM>=dJ&&dM<=dK)||this.__rW(dL||cd,cu,dJ,dc,dK,cK,arguments.length,cm);
},assertEventFired:function(dk,event,dl,dm,dn){var dq=false;
var dp=function(e){if(dm){dm.call(dk,e);
}dq=true;
};
var dr=dk.addListener(event,dp,dk);
dl.call();
dq===true||this.__rW(dn||cd,bU,event,cW);
dk.removeListenerById(dr);
},assertEventNotFired:function(n,event,o,p){var r=false;
var q=function(e){r=true;
};
var s=n.addListener(event,q,n);
o.call();
r===false||this.__rW(p||cd,bU,event,df);
n.removeListenerById(s);
},assertException:function(dP,dQ,dR,dS){var dQ=dQ||Error;
var dT;

try{this.__rV=false;
dP();
}catch(bH){dT=bH;
}finally{this.__rV=true;
}
if(dT==null){this.__rW(dS||cd,cl);
}dT instanceof dQ||this.__rW(dS||cd,cX,dQ);

if(dR){this.assertMatch(dT.toString(),dR,dS);
}},assertInArray:function(T,U,V){U.indexOf(T)!==-1||this.__rW(V||cd,di,T,cD,U,ca);
},assertArrayEquals:function(dU,dV,dW){this.assertArray(dU,dW);
this.assertArray(dV,dW);
this.assertEquals(dU.length,dV.length,dW);

for(var i=0;i<dU.length;i++){this.assertIdentical(dU[i],dV[i],dW);
}},assertKeyInMap:function(ba,bb,bc){bb[ba]!==undefined||this.__rW(bc||cd,di,ba,cI,bb,ca);
},assertFunction:function(a,b){qx.lang.Type.isFunction(a)||this.__rW(b||cd,cC,a,cc);
},assertString:function(f,g){qx.lang.Type.isString(f)||this.__rW(g||cd,cF,f,cc);
},assertBoolean:function(h,j){qx.lang.Type.isBoolean(h)||this.__rW(j||cd,cO,h,cc);
},assertNumber:function(bi,bj){(qx.lang.Type.isNumber(bi)&&isFinite(bi))||this.__rW(bj||cd,cG,bi,cc);
},assertPositiveNumber:function(bO,bP){(qx.lang.Type.isNumber(bO)&&isFinite(bO)&&bO>=0)||this.__rW(bP||cd,cq,bO,cc);
},assertInteger:function(dB,dC){(qx.lang.Type.isNumber(dB)&&isFinite(dB)&&dB%1===0)||this.__rW(dC||cd,bR,dB,cc);
},assertPositiveInteger:function(W,X){var Y=(qx.lang.Type.isNumber(W)&&isFinite(W)&&W%1===0&&W>=0);
Y||this.__rW(X||cd,de,W,cc);
},assertInRange:function(E,F,G,H){(E>=F&&E<=G)||this.__rW(H||cd,qx.lang.String.format(co,[E,F,G]));
},assertObject:function(y,z){var A=y!==null&&(qx.lang.Type.isObject(y)||typeof y===cE);
A||this.__rW(z||cd,cz,(y),cc);
},assertArray:function(w,x){qx.lang.Type.isArray(w)||this.__rW(x||cd,dg,w,cc);
},assertMap:function(dN,dO){qx.lang.Type.isObject(dN)||this.__rW(dO||cd,ck,dN,cc);
},assertRegExp:function(c,d){qx.lang.Type.isRegExp(c)||this.__rW(d||cd,cg,c,cc);
},assertType:function(K,L,M){this.assertString(L,cf);
typeof (K)===L||this.__rW(M||cd,cp,L,dj,K,cc);
},assertInstance:function(bI,bJ,bK){var bL=bJ.classname||bJ+cd;
bI instanceof bJ||this.__rW(bK||cd,cr,bL,dj,bI,cc);
},assertInterface:function(dF,dG,dH){qx.Class.implementsInterface(dF,dG)||this.__rW(dH||cd,cQ,dF,ch,dG,cb);
},assertCssColor:function(ds,dt,du){var dv=qx.Class.getByName(cx);

if(!dv){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dx=dv.stringToRgb(ds);

try{var dw=dv.stringToRgb(dt);
}catch(bD){this.__rW(du||cd,bT,ds,bX,dx.join(bW),bV,dt,cR);
}var dy=dx[0]==dw[0]&&dx[1]==dw[1]&&dx[2]==dw[2];
dy||this.__rW(du||cd,bT,dx,bX,dx.join(bW),bV,dt,bX,dw.join(bW),bQ);
},assertElement:function(P,Q){!!(P&&P.nodeType===1)||this.__rW(Q||cd,cj,P,cb);
},assertQxObject:function(I,J){this.__rY(I,dh)||this.__rW(J||cd,cU,I,cc);
},assertQxWidget:function(bM,bN){this.__rY(bM,db)||this.__rW(bN||cd,cT,bM,cc);
},__rY:function(bA,bB){if(!bA){return false;
}var bC=bA.constructor;

while(bC){if(bC.classname===bB){return true;
}bC=bC.superclass;
}return false;
}}});
})();
(function(){var bF="qx.core.MAssert";
qx.Mixin.define(bF,{members:{assert:function(bl,bm){qx.core.Assert.assert(bl,bm);
},fail:function(bh){qx.core.Assert.fail(bh);
},assertTrue:function(bX,bY){qx.core.Assert.assertTrue(bX,bY);
},assertFalse:function(bO,bP){qx.core.Assert.assertFalse(bO,bP);
},assertEquals:function(Q,R,S){qx.core.Assert.assertEquals(Q,R,S);
},assertNotEquals:function(y,z,A){qx.core.Assert.assertNotEquals(y,z,A);
},assertIdentical:function(B,C,D){qx.core.Assert.assertIdentical(B,C,D);
},assertNotIdentical:function(bx,by,bz){qx.core.Assert.assertNotIdentical(bx,by,bz);
},assertNotUndefined:function(s,t){qx.core.Assert.assertNotUndefined(s,t);
},assertUndefined:function(O,P){qx.core.Assert.assertUndefined(O,P);
},assertNotNull:function(h,i){qx.core.Assert.assertNotNull(h,i);
},assertNull:function(bK,bL){qx.core.Assert.assertNull(bK,bL);
},assertJsonEquals:function(p,q,r){qx.core.Assert.assertJsonEquals(p,q,r);
},assertMatch:function(e,f,g){qx.core.Assert.assertMatch(e,f,g);
},assertArgumentsCount:function(j,k,l,m){qx.core.Assert.assertArgumentsCount(j,k,l,m);
},assertEventFired:function(H,event,I,J,K){qx.core.Assert.assertEventFired(H,event,I,J,K);
},assertEventNotFired:function(bq,event,br,bs){qx.core.Assert.assertEventNotFired(bq,event,br,bs);
},assertException:function(W,X,Y,ba){qx.core.Assert.assertException(W,X,Y,ba);
},assertInArray:function(E,F,G){qx.core.Assert.assertInArray(E,F,G);
},assertArrayEquals:function(bS,bT,bU){qx.core.Assert.assertArrayEquals(bS,bT,bU);
},assertKeyInMap:function(bi,bj,bk){qx.core.Assert.assertKeyInMap(bi,bj,bk);
},assertFunction:function(bM,bN){qx.core.Assert.assertFunction(bM,bN);
},assertString:function(bt,bu){qx.core.Assert.assertString(bt,bu);
},assertBoolean:function(u,v){qx.core.Assert.assertBoolean(u,v);
},assertNumber:function(n,o){qx.core.Assert.assertNumber(n,o);
},assertPositiveNumber:function(bv,bw){qx.core.Assert.assertPositiveNumber(bv,bw);
},assertInteger:function(bQ,bR){qx.core.Assert.assertInteger(bQ,bR);
},assertPositiveInteger:function(bI,bJ){qx.core.Assert.assertPositiveInteger(bI,bJ);
},assertInRange:function(bb,bc,bd,be){qx.core.Assert.assertInRange(bb,bc,bd,be);
},assertObject:function(bA,bB){qx.core.Assert.assertObject(bA,bB);
},assertArray:function(bf,bg){qx.core.Assert.assertArray(bf,bg);
},assertMap:function(w,x){qx.core.Assert.assertMap(w,x);
},assertRegExp:function(bG,bH){qx.core.Assert.assertRegExp(bG,bH);
},assertType:function(bn,bo,bp){qx.core.Assert.assertType(bn,bo,bp);
},assertInstance:function(T,U,V){qx.core.Assert.assertInstance(T,U,V);
},assertInterface:function(bC,bD,bE){qx.core.Assert.assertInterface(bC,bD,bE);
},assertCssColor:function(L,M,N){qx.core.Assert.assertCssColor(L,M,N);
},assertElement:function(c,d){qx.core.Assert.assertElement(c,d);
},assertQxObject:function(a,b){qx.core.Assert.assertQxObject(a,b);
},assertQxWidget:function(bV,bW){qx.core.Assert.assertQxWidget(bV,bW);
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
}catch(U){var D=this.getStackTraceFromError(U);
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
},"opera":function(){var J;

try{J.bar();
}catch(S){var K=this.getStackTraceFromError(S);
qx.lang.Array.removeAt(K,0);
return K;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(p,{"opera":function(T){return [];
},"default":function(W){var bc=[];
var bb=qx.lang.Function.getCaller(W);
var X={};

while(bb){var Y=qx.lang.Function.getName(bb);
bc.push(Y);

try{bb=bb.caller;
}catch(v){break;
}
if(!bb){break;
}var ba=qx.core.ObjectRegistry.toHashCode(bb);

if(X[ba]){bc.push(n);
break;
}X[ba]=bb;
}return bc;
}}),getStackTraceFromError:qx.core.Variant.select(p,{"gecko":function(a){if(!a.stack){return [];
}var g=/@(.+):(\d+)$/gm;
var b;
var c=[];

while((b=g.exec(a.stack))!=null){var d=b[1];
var f=b[2];
var e=this.__jC(d);
c.push(e+q+f);
}return c;
},"webkit":function(V){if(V.sourceURL&&V.line){return [this.__jC(V.sourceURL)+q+V.line];
}else{return [];
}},"opera":function(L){if(L.message.indexOf("Backtrace:")<0){return [];
}var N=[];
var O=qx.lang.String.trim(L.message.split("Backtrace:")[1]);
var P=O.split(k);

for(var i=0;i<P.length;i++){var M=P[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(M&&M.length>=2){var R=M[1];
var Q=this.__jC(M[2]);
N.push(Q+q+R);
}}return N;
},"default":function(){return [];
}}),__jC:function(r){var u=j;
var s=r.indexOf(u);
var t=(s==-1)?r:r.substring(s+u.length).replace(/\//g,h).replace(/\.js$/,l);
return t;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__kf=[];
this.setMaxMessages(i||50);
},members:{__kg:0,__kf:null,__kh:50,setMaxMessages:function(h){this.__kh=h;
this.clearHistory();
},getMaxMessages:function(){return this.__kh;
},process:function(f){var g=this.getMaxMessages();

if(this.__kf.length<g){this.__kf.push(f);
}else{this.__kf[this.__kg++]=f;

if(this.__kg>=g){this.__kg=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(b){if(b>this.__kf.length){b=this.__kf.length;
}
if(this.__kf.length==this.getMaxMessages()){var d=this.__kg-1;
}else{d=this.__kf.length-1;
}var c=d-b+1;

if(c<0){c+=this.__kf.length;
}var e;

if(c<=d){e=this.__kf.slice(c,d+1);
}else{e=this.__kf.slice(c,this.__kf.length).concat(this.__kf.slice(0,d+1));
}return e;
},clearHistory:function(){this.__kf=[];
this.__kg=0;
}}});
})();
(function(){var P="qx.debug",O="on",N="unknown",M="node",L="error",K="...(+",J="array",I=")",H="info",G="instance",bn="string",bm="null",bl="class",bk="number",bj="stringify",bi="]",bh="function",bg="boolean",bf="debug",be="map",W="undefined",X="qx.log.Logger",U=")}",V="#",S="warn",T="document",Q="{...(",R="[",Y="text[",ba="[...(",bc="\n",bb=")]",bd="object";
qx.Class.define(X,{statics:{__et:bf,setLevel:function(F){this.__et=F;
},getLevel:function(){return this.__et;
},setTreshold:function(bR){this.__ew.setMaxMessages(bR);
},getTreshold:function(){return this.__ew.getMaxMessages();
},__eu:{},__ev:0,register:function(a){if(a.$$id){return;
}var b=this.__ev++;
this.__eu[b]=a;
a.$$id=b;
var c=this.__ew.getAllLogEvents();

for(var i=0,l=c.length;i<l;i++){a.process(c[i]);
}},unregister:function(d){var e=d.$$id;

if(e==null){return;
}delete this.__eu[e];
delete d.$$id;
},debug:function(v,w){qx.log.Logger.__ey(bf,arguments);
},info:function(f,g){qx.log.Logger.__ey(H,arguments);
},warn:function(A,B){qx.log.Logger.__ey(S,arguments);
},error:function(bP,bQ){qx.log.Logger.__ey(L,arguments);
},trace:function(k){qx.log.Logger.__ey(H,[k,qx.dev.StackTrace.getStackTrace().join(bc)]);
},deprecatedMethodWarning:function(bD,bE){if(qx.core.Variant.isSet(P,O)){var bF=qx.lang.Function.getName(bD);
this.warn("The method '"+bF+"' is deprecated: "+(bE||"Please consult the API documentation of this method for alternatives."));
this.trace();
}},deprecatedClassWarning:function(C,D){if(qx.core.Variant.isSet(P,O)){var E=C.classname||N;
this.warn("The class '"+E+"' is deprecated: "+(D||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedEventWarning:function(m,event,n){if(qx.core.Variant.isSet(P,O)){var o=m.self?m.self.classname:N;
this.warn("The event '"+(event||"unknown")+"' from class '"+o+"' is deprecated: "+(n||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedMixinWarning:function(x,y){if(qx.core.Variant.isSet(P,O)){var z=x?x.name:N;
this.warn("The mixin '"+z+"' is deprecated: "+(y||"Please consult the API documentation of this class for alternatives."));
this.trace();
}},deprecatedConstantWarning:function(p,q,r){if(qx.core.Variant.isSet(P,O)){if(p.__defineGetter__){var self=this;
var s=p[q];
p.__defineGetter__(q,function(){self.warn("The constant '"+q+"' is deprecated: "+(r||"Please consult the API documentation for alternatives."));
self.trace();
return s;
});
}}},deprecateMethodOverriding:function(bo,bp,bq,br){if(qx.core.Variant.isSet(P,O)){var bs=bo.constructor;

while(bs.classname!==bp.classname){if(bs.prototype.hasOwnProperty(bq)){this.warn("The method '"+qx.lang.Function.getName(bo[bq])+"' overrides a deprecated method: "+(br||"Please consult the API documentation for alternatives."));
this.trace();
break;
}bs=bs.superclass;
}}},clear:function(){this.__ew.clearHistory();
},__ew:new qx.log.appender.RingBuffer(50),__ex:{debug:0,info:1,warn:2,error:3},__ey:function(bt,bu){var bz=this.__ex;

if(bz[bt]<bz[this.__et]){return;
}var bw=bu.length<2?null:bu[0];
var by=bw?1:0;
var bv=[];

for(var i=by,l=bu.length;i<l;i++){bv.push(this.__eA(bu[i],true));
}var bA=new Date;
var bB={time:bA,offset:bA-qx.Bootstrap.LOADSTART,level:bt,items:bv,win:window};
if(bw){if(bw instanceof qx.core.Object){bB.object=bw.$$hash;
}else if(bw.$$type){bB.clazz=bw;
}}this.__ew.process(bB);
var bC=this.__eu;

for(var bx in bC){bC[bx].process(bB);
}},__ez:function(t){if(t===undefined){return W;
}else if(t===null){return bm;
}
if(t.$$type){return bl;
}var u=typeof t;

if(u===bh||u==bn||u===bk||u===bg){return u;
}else if(u===bd){if(t.nodeType){return M;
}else if(t.classname){return G;
}else if(t instanceof Array){return J;
}else if(t instanceof Error){return L;
}else{return be;
}}
if(t.toString){return bj;
}return N;
},__eA:function(bG,bH){var bO=this.__ez(bG);
var bK=N;
var bJ=[];

switch(bO){case bm:case W:bK=bO;
break;
case bn:case bk:case bg:bK=bG;
break;
case M:if(bG.nodeType===9){bK=T;
}else if(bG.nodeType===3){bK=Y+bG.nodeValue+bi;
}else if(bG.nodeType===1){bK=bG.nodeName.toLowerCase();

if(bG.id){bK+=V+bG.id;
}}else{bK=M;
}break;
case bh:bK=qx.lang.Function.getName(bG)||bO;
break;
case G:bK=bG.basename+R+bG.$$hash+bi;
break;
case bl:case bj:bK=bG.toString();
break;
case L:bJ=qx.dev.StackTrace.getStackTraceFromError(bG);
bK=bG.toString();
break;
case J:if(bH){bK=[];

for(var i=0,l=bG.length;i<l;i++){if(bK.length>20){bK.push(K+(l-i)+I);
break;
}bK.push(this.__eA(bG[i],false));
}}else{bK=ba+bG.length+bb;
}break;
case be:if(bH){var bI;
var bN=[];

for(var bM in bG){bN.push(bM);
}bN.sort();
bK=[];

for(var i=0,l=bN.length;i<l;i++){if(bK.length>20){bK.push(K+(l-i)+I);
break;
}bM=bN[i];
bI=this.__eA(bG[bM],false);
bI.key=bM;
bK.push(bI);
}}else{var bL=0;

for(var bM in bG){bL++;
}bK=Q+bL+U;
}break;
}return {type:bO,text:bK,trace:bJ};
}},defer:function(h){var j=qx.Bootstrap.$$logs;

for(var i=0;i<j.length;i++){h.__ey(j[i][0],j[i][1]);
}qx.Bootstrap.debug=h.debug;
qx.Bootstrap.info=h.info;
qx.Bootstrap.warn=h.warn;
qx.Bootstrap.error=h.error;
qx.Bootstrap.trace=h.trace;
}});
})();
(function(){var bq="qx.debug",bp="on",bo="qx.disposerDebugLevel",bn="set",bm="MSIE 6.0",bl="rv:1.8.1",bk="get",bj="reset",bi="qx.core.Object",bh="]",be="[",bg="$$user_",bf="object",bd="Object";
qx.Class.define(bi,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bd},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+be+this.$$hash+bh;
},base:function(s,t){if(qx.core.Variant.isSet(bq,bp)){if(!qx.Bootstrap.isFunction(s.callee.base)){throw new Error("Cannot call super class. Method is not derived: "+s.callee.displayName);
}}
if(arguments.length===1){return s.callee.base.call(this);
}else{return s.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(b){return b.callee.self;
},clone:function(){var bI=this.constructor;
var bH=new bI;
var bK=qx.Class.getProperties(bI);
var bJ=qx.core.Property.$$store.user;
var bL=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bK.length;i<l;i++){name=bK[i];

if(this.hasOwnProperty(bJ[name])){bH[bL[name]](this[bJ[name]]);
}}return bH;
},set:function(A,B){var D=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(A)){if(!this[D[A]]){if(this[bn+qx.Bootstrap.firstUp(A)]!=undefined){this[bn+qx.Bootstrap.firstUp(A)](B);
return;
}
if(qx.core.Variant.isSet(bq,bp)){qx.Bootstrap.error("No such property: "+A);
return this;
}}return this[D[A]](B);
}else{for(var C in A){if(!this[D[C]]){if(this[bn+qx.Bootstrap.firstUp(C)]!=undefined){this[bn+qx.Bootstrap.firstUp(C)](A[C]);
continue;
}
if(qx.core.Variant.isSet(bq,bp)){qx.Bootstrap.error("No such property: "+C);
return this;
}}this[D[C]](A[C]);
}return this;
}},get:function(bb){var bc=qx.core.Property.$$method.get;

if(!this[bc[bb]]){if(this[bk+qx.Bootstrap.firstUp(bb)]!=undefined){return this[bk+qx.Bootstrap.firstUp(bb)]();
}
if(qx.core.Variant.isSet(bq,bp)){qx.Bootstrap.error("No such property: "+bb);
return this;
}}return this[bc[bb]]();
},reset:function(L){var M=qx.core.Property.$$method.reset;

if(!this[M[L]]){if(this[bj+qx.Bootstrap.firstUp(L)]!=undefined){this[bj+qx.Bootstrap.firstUp(L)]();
return;
}
if(qx.core.Variant.isSet(bq,bp)){qx.Bootstrap.error("No such property: "+L);
return this;
}}this[M[L]]();
},__ki:qx.event.Registration,addListener:function(j,k,self,m){if(!this.$$disposed){return this.__ki.addListener(this,j,k,self,m);
}return null;
},addListenerOnce:function(bD,bE,self,bF){var bG=function(e){bE.call(self||this,e);
this.removeListener(bD,bG,this,bF);
};
return this.addListener(bD,bG,this,bF);
},removeListener:function(w,x,self,y){if(!this.$$disposed){return this.__ki.removeListener(this,w,x,self,y);
}return false;
},removeListenerById:function(bt){if(!this.$$disposed){return this.__ki.removeListenerById(this,bt);
}return false;
},hasListener:function(u,v){return this.__ki.hasListener(this,u,v);
},dispatchEvent:function(z){if(!this.$$disposed){return this.__ki.dispatchEvent(this,z);
}return true;
},fireEvent:function(n,o,p){if(!this.$$disposed){return this.__ki.fireEvent(this,n,o,p);
}return true;
},fireNonBubblingEvent:function(f,g,h){if(!this.$$disposed){return this.__ki.fireNonBubblingEvent(this,f,g,h);
}return true;
},fireDataEvent:function(R,S,T,U){if(!this.$$disposed){if(T===undefined){T=null;
}return this.__ki.fireNonBubblingEvent(this,R,qx.event.type.Data,[S,T,!!U]);
}return true;
},__kj:null,setUserData:function(W,X){if(!this.__kj){this.__kj={};
}this.__kj[W]=X;
},getUserData:function(Y){if(!this.__kj){return null;
}var ba=this.__kj[Y];
return ba===undefined?null:ba;
},__kk:qx.log.Logger,debug:function(bC){this.__kk.debug(this,bC);
},info:function(q){this.__kk.info(this,q);
},warn:function(c){this.__kk.warn(this,c);
},error:function(bs){this.__kk.error(this,bs);
},trace:function(){this.__kk.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
if(qx.core.Variant.isSet(bq,bp)){if(qx.core.Setting.get(bo)>2){qx.Bootstrap.debug(this,"Disposing "+this.classname+"["+this.toHashCode()+"]");
}}var G=this.constructor;
var E;

while(G.superclass){if(G.$$destructor){G.$$destructor.call(this);
}if(G.$$includes){E=G.$$flatIncludes;

for(var i=0,l=E.length;i<l;i++){if(E[i].$$destructor){E[i].$$destructor.call(this);
}}}G=G.superclass;
}if(this.__kl){this.__kl();
}if(qx.core.Variant.isSet(bq,bp)){if(qx.core.Setting.get(bo)>0){var H,F;

for(H in this){F=this[H];
if(F!==null&&typeof F===bf&&!(qx.Bootstrap.isString(F))){if(this.constructor.prototype[H]!=null){continue;
}var J=navigator.userAgent.indexOf(bl)!=-1;
var I=navigator.userAgent.indexOf(bm)!=-1;
if(J||I){if(F instanceof qx.core.Object||qx.core.Setting.get(bo)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+H+"' in "+this.classname+"["+this.toHashCode()+"]: "+F);
delete this[H];
}}else{if(qx.core.Setting.get(bo)>1){qx.Bootstrap.warn(this,"Missing destruct definition for '"+H+"' in "+this.classname+"["+this.toHashCode()+"]: "+F);
delete this[H];
}}}}}}},__kl:null,__km:function(){var r=qx.Class.getProperties(this.constructor);

for(var i=0,l=r.length;i<l;i++){delete this[bg+r[i]];
}},_disposeFields:function(V){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(a){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(K){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(br){qx.util.DisposeUtil.disposeArray(this,br);
},_disposeMap:function(d){qx.util.DisposeUtil.disposeMap(this,d);
}},settings:{"qx.disposerDebugLevel":0},defer:function(N,O){if(qx.core.Variant.isSet(bq,bp)){qx.Class.include(N,qx.core.MAssert);
}var Q=navigator.userAgent.indexOf(bm)!=-1;
var P=navigator.userAgent.indexOf(bl)!=-1;
if(Q||P){O.__kl=O.__km;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__kj=null;
var bw=this.constructor;
var bA;
var bB=qx.core.Property.$$store;
var by=bB.user;
var bz=bB.theme;
var bu=bB.inherit;
var bx=bB.useinit;
var bv=bB.init;

while(bw){bA=bw.$$properties;

if(bA){for(var name in bA){if(bA[name].dispose||bA[name].dereference){this[by[name]]=this[bz[name]]=this[bu[name]]=this[bx[name]]=this[bv[name]]=undefined;
}}}bw=bw.superclass;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(e,f){},registerEvent:function(b,c,d){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.globalErrorHandling",b="on",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{setErrorHandler:function(h,i){this.__jk=h||null;
this.__jl=i||window;

if(qx.core.Setting.get(c)===b){if(h&&window.onerror){var j=qx.Bootstrap.bind(this.__jn,this);

if(this.__jm==null){this.__jm=window.onerror;
}var self=this;
window.onerror=function(e){self.__jm(e);
j(e);
};
}
if(h&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__jn,this);
}if(this.__jk==null){if(this.__jm!=null){window.onerror=this.__jm;
this.__jm=null;
}else{window.onerror=null;
}}}},__jn:function(d,f,g){if(this.__jk){this.handleError(new qx.core.WindowError(d,f,g));
return true;
}},observeMethod:function(n){if(qx.core.Setting.get(c)===b){var self=this;
return function(){if(!self.__jk){return n.apply(this,arguments);
}
try{return n.apply(this,arguments);
}catch(l){self.handleError(new qx.core.GlobalError(l,arguments));
}};
}else{return n;
}},handleError:function(m){if(this.__jk){this.__jk.call(this.__jl,m);
}}},defer:function(k){qx.core.Setting.define(c,b);
k.setErrorHandler(null,null);
}});
})();
(function(){var n="ready",m="qx.client",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="gecko|opera|webkit",f="left",d="DOMContentLoaded",c="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){qx.core.Object.call(this);
this._window=r.getWindow();
this.__gR=false;
this.__gS=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var w=qx.event.handler.Application.$$instance;

if(w){w.__gV();
}}},members:{canHandleEvent:function(a,b){},registerEvent:function(o,p,q){},unregisterEvent:function(s,t,u){},__gT:null,__gR:null,__gS:null,__gU:null,__gV:function(){if(!this.__gT&&this.__gR&&qx.$$loader.scriptLoaded){if(qx.core.Variant.isSet(m,l)){if(qx.event.Registration.hasListener(this._window,n)){this.__gT=true;
qx.event.Registration.fireEvent(this._window,n);
}}else{this.__gT=true;
qx.event.Registration.fireEvent(this._window,n);
}}},isApplicationReady:function(){return this.__gT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==n){this.__gR=true;
this.__gV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(m,g)){qx.bom.Event.addNativeListener(this._window,d,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(m,l)){var self=this;
var v=function(){try{document.documentElement.doScroll(f);

if(document.body){self._onNativeLoadWrapped();
}}catch(y){window.setTimeout(v,100);
}};
v();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gR=true;
this.__gV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gU){this.__gU=true;

try{qx.event.Registration.fireEvent(this._window,c);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){qx.core.Object.call(this);
this._manager=s;
this._window=s.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(k,l){},registerEvent:function(b,c,d){},unregisterEvent:function(f,g,h){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var j=qx.event.handler.Window.SUPPORTED_TYPES;

for(var i in j){qx.bom.Event.addNativeListener(this._window,i,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
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
},defer:function(r){qx.event.Registration.addHandler(r);
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
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(n){this._manager=n;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(a,event,b){if(qx.core.Variant.isSet(h,j)){if(a instanceof qx.core.Object){var e=qx.Class.getEventType(a.constructor,b);
var c=qx.Class.getByName(e);

if(!c){this.error("The event type '"+b+"' declared in the class '"+a.constructor+" is not an available class': "+e);
}else if(!(event instanceof c)){this.error("Expected event type to be instanceof '"+e+"' but found '"+event.classname+"'");
}}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
var f=this._manager.getListeners(a,b,false);

if(f){for(var i=0,l=f.length;i<l;i++){var d=f[i].context||a;
f[i].handler.call(d,event);
}}}},defer:function(o){qx.event.Registration.addDispatcher(o);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__jh||null;
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
var j=qx.core.Setting.get(d);
var k=qx.Class.getByName(j);

if(k){this.__jh=new k;
var i=new Date;
this.__jh.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-i)+"ms");
var i=new Date;
this.__jh.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-i)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+j);
}},__ji:function(e){var l=this.__jh;

if(l){e.setReturnValue(l.close());
}},__jj:function(){var h=this.__jh;

if(h){h.terminate();
}}},defer:function(g){qx.event.Registration.addListener(window,f,g.ready,g);
qx.event.Registration.addListener(window,a,g.__jj,g);
qx.event.Registration.addListener(window,c,g.__ji,g);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var c="qx.locale.MTranslation";
qx.Mixin.define(c,{members:{tr:function(h,i){var j=qx.locale.Manager;

if(j){return j.tr.apply(j,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(k,l,m,n){var o=qx.locale.Manager;

if(o){return o.trn.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(d,e,f){var g=qx.locale.Manager;

if(g){return g.trc.apply(g,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(a){var b=qx.locale.Manager;

if(b){return b.marktr.apply(b,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__lN:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__lN;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__lN=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__lN=null;
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
qx.Class.define(i,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){if(qx.core.Variant.isSet(o,n)){if(b!==undefined){qx.core.Assert.assertBoolean(b,j);
}
if(c!==undefined){qx.core.Assert.assertBoolean(c,l);
}}this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
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
},setType:function(d){this._type=d;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(p){this._eventPhase=p;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(a){this._target=a;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(e){this._relatedTarget=e;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(g){this._originalTarget=g;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(h){this._bubbles=h;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(s){this._cancelable=s;
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
this.__kn=qx.dev.StackTrace.getStackTrace();
},members:{__kn:null,getStackTrace:function(){return this.__kn;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="",d="qx.core.WindowError";
qx.Bootstrap.define(d,{extend:Error,construct:function(a,b,c){Error.call(this,a);
this.__cp=a;
this.__cq=b||e;
this.__cr=c===undefined?-1:c;
},members:{__cp:null,__cq:null,__cr:null,toString:function(){return this.__cp;
},getUri:function(){return this.__cq;
},getLineNumber:function(){return this.__cr;
}}});
})();
(function(){var d="on",c="qx.debug",b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(e,f){if(qx.core.Variant.isSet(c,d)){qx.core.Assert.assertNotUndefined(e);
}this.__jD=b+(e&&e.message?e.message:e);
Error.call(this,this.__jD);
this.__jE=f;
this.__jF=e;
},members:{__jF:null,__jE:null,__jD:null,toString:function(){return this.__jD;
},getArguments:function(){return this.__jE;
},getSourceException:function(){return this.__jF;
}},destruct:function(){this.__jF=null;
this.__jE=null;
this.__jD=null;
}});
})();
(function(){var K="",J="g",I="0",H='\\$1',G="%",F='-',E="qx.lang.String",D=' ',C='\n',B="undefined";
qx.Class.define(E,{statics:{camelCase:function(d){return d.replace(/\-([a-z])/g,function(j,k){return k.toUpperCase();
});
},hyphenate:function(O){return O.replace(/[A-Z]/g,function(L){return (F+L.charAt(0).toLowerCase());
});
},capitalize:function(g){return g.replace(/\b[a-z]/g,function(A){return A.toUpperCase();
});
},clean:function(l){return this.trim(l.replace(/\s+/g,D));
},trimLeft:function(f){return f.replace(/^\s+/,K);
},trimRight:function(c){return c.replace(/\s+$/,K);
},trim:function(h){return h.replace(/^\s+|\s+$/g,K);
},startsWith:function(a,b){return a.indexOf(b)===0;
},endsWith:function(t,u){return t.substring(t.length-u.length,t.length)===u;
},repeat:function(y,z){return y.length>0?new Array(z+1).join(y):K;
},pad:function(m,length,n){var o=length-m.length;

if(o>0){if(typeof n===B){n=I;
}return this.repeat(n,o)+m;
}else{return m;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(v,w){var x=v;

for(var i=0;i<w.length;i++){x=x.replace(new RegExp(G+(i+1),J),w[i]);
}return x;
},escapeRegexpChars:function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,H);
},toArray:function(M){return M.split(/\B|\b/g);
},stripTags:function(N){return N.replace(/<\/?[^>]+>/gi,K);
},stripScripts:function(p,q){var s=K;
var r=p.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){s+=arguments[1]+C;
return K;
});

if(q===true){qx.lang.Function.globalEval(s);
}return r;
}}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__sc:null,__sd:null,__se:null,__sf:null,stringify:function(bv,bw,bx){this.__sc=p;
this.__sd=p;
this.__sf=[];

if(qx.lang.Type.isNumber(bx)){var bx=Math.min(10,Math.floor(bx));

for(var i=0;i<bx;i+=1){this.__sd+=O;
}}else if(qx.lang.Type.isString(bx)){if(bx.length>10){bx=bx.slice(0,10);
}this.__sd=bx;
}if(bw&&(qx.lang.Type.isFunction(bw)||qx.lang.Type.isArray(bw))){this.__se=bw;
}else{this.__se=null;
}return this.__sg(p,{'':bv});
},__sg:function(bm,bn){var bq=this.__sc,bo,br=bn[bm];
if(br&&qx.lang.Type.isFunction(br.toJSON)){br=br.toJSON(bm);
}else if(qx.lang.Type.isDate(br)){br=this.dateToJSON(br);
}if(typeof this.__se===e){br=this.__se.call(bn,bm,br);
}
if(br===null){return h;
}
if(br===undefined){return undefined;
}switch(qx.lang.Type.getClass(br)){case R:return this.__sh(br);
case B:return isFinite(br)?String(br):h;
case Q:return String(br);
case J:this.__sc+=this.__sd;
bo=[];

if(this.__sf.indexOf(br)!==-1){throw new TypeError(V);
}this.__sf.push(br);
var length=br.length;

for(var i=0;i<length;i+=1){bo[i]=this.__sg(i,br)||h;
}this.__sf.pop();
if(bo.length===0){var bp=s;
}else if(this.__sc){bp=E+this.__sc+bo.join(Y+this.__sc)+b+bq+l;
}else{bp=N+bo.join(d)+l;
}this.__sc=bq;
return bp;
case z:this.__sc+=this.__sd;
bo=[];

if(this.__sf.indexOf(br)!==-1){throw new TypeError(V);
}this.__sf.push(br);
if(this.__se&&typeof this.__se===f){var length=this.__se.length;

for(var i=0;i<length;i+=1){var k=this.__se[i];

if(typeof k===W){var v=this.__sg(k,br);

if(v){bo.push(this.__sh(k)+(this.__sc?g:m)+v);
}}}}else{for(var k in br){if(Object.hasOwnProperty.call(br,k)){var v=this.__sg(k,br);

if(v){bo.push(this.__sh(k)+(this.__sc?g:m)+v);
}}}}this.__sf.pop();
if(bo.length===0){var bp=A;
}else if(this.__sc){bp=w+this.__sc+bo.join(Y+this.__sc)+b+bq+S;
}else{bp=C+bo.join(d)+S;
}this.__sc=bq;
return bp;
}},dateToJSON:function(bs){var bt=function(n){return n<10?U+n:n;
};
var bu=function(n){var be=bt(n);
return n<100?U+be:be;
};
return isFinite(bs.valueOf())?bs.getUTCFullYear()+T+bt(bs.getUTCMonth()+1)+T+bt(bs.getUTCDate())+M+bt(bs.getUTCHours())+m+bt(bs.getUTCMinutes())+m+bt(bs.getUTCSeconds())+F+bu(bs.getUTCMilliseconds())+q:null;
},__sh:function(bb){var bc={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bd=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bd.lastIndex=0;

if(bd.test(bb)){return o+
bb.replace(bd,function(a){var c=bc[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bb+o;
}},parse:function(bj,bk){var bl=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bl.lastIndex=0;
if(bl.test(bj)){bj=bj.replace(bl,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(bj.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+bj+D);
return typeof bk===e?this.__si({'':j},p,bk):j;
}throw new SyntaxError(P);
},__si:function(bf,bg,bh){var bi=bf[bg];

if(bi&&typeof bi===f){for(var k in bi){if(Object.hasOwnProperty.call(bi,k)){var v=this.__si(bi,k,bh);

if(v!==undefined){bi[k]=v;
}else{delete bi[k];
}}}}return bh.call(bf,bg,bi);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var cl="get",ck="",cj="[",ci=".",ch="last",cg="change",cf="]",ce="Number",cd="String",cc="set",cF="deepBinding",cE="item",cD="reset",cC="' (",cB="on",cA="qx.debug",cz="Boolean",cy=") to the object '",cx="Integer",cw="qx.event.type.Data",cs="qx.data.SingleValueBinding",ct="No event could be found for the property",cq="Can not remove the bindings for null object!",cr="Binding from '",co="PositiveNumber",cp="PositiveInteger",cm="Binding does not exist!",cn=" is not an data (qx.event.type.Data) event on ",cu=").",cv="Date";
qx.Class.define(cs,{statics:{DEBUG_ON:false,__fo:{},bind:function(bi,bj,bk,bl,bm){var bw=this.__fq(bi,bj,bk,bl,bm);
var br=bj.split(ci);
var bo=this.__fx(br);
var bv=[];
var bs=[];
var bt=[];
var bp=[];
var bq=bi;
for(var i=0;i<br.length;i++){if(bo[i]!==ck){bp.push(cg);
}else{bp.push(this.__fs(bq,br[i]));
}bv[i]=bq;
if(i==br.length-1){if(bo[i]!==ck){var bz=bo[i]===ch?bq.length-1:bo[i];
var bn=bq.getItem(bz);
this.__fw(bn,bk,bl,bm,bi);
bt[i]=this.__fy(bq,bp[i],bk,bl,bm,bo[i]);
}else{if(br[i]!=null&&bq[cl+qx.lang.String.firstUp(br[i])]!=null){var bn=bq[cl+qx.lang.String.firstUp(br[i])]();
this.__fw(bn,bk,bl,bm,bi);
}bt[i]=this.__fy(bq,bp[i],bk,bl,bm);
}}else{var bx={index:i,propertyNames:br,sources:bv,listenerIds:bt,arrayIndexValues:bo,targetObject:bk,targetPropertyChain:bl,options:bm,listeners:bs};
var bu=qx.lang.Function.bind(this.__fp,this,bx);
bs.push(bu);
bt[i]=bq.addListener(bp[i],bu);
}if(bq[cl+qx.lang.String.firstUp(br[i])]==null){bq=null;
}else if(bo[i]!==ck){bq=bq[cl+qx.lang.String.firstUp(br[i])](bo[i]);
}else{bq=bq[cl+qx.lang.String.firstUp(br[i])]();
}
if(!bq){break;
}}var by={type:cF,listenerIds:bt,sources:bv,targetListenerIds:bw.listenerIds,targets:bw.targets};
this.__fz(by,bi,bj,bk,bl);
return by;
},__fp:function(bP){if(bP.options&&bP.options.onUpdate){bP.options.onUpdate(bP.sources[bP.index],bP.targetObject);
}for(var j=bP.index+1;j<bP.propertyNames.length;j++){var bT=bP.sources[j];
bP.sources[j]=null;

if(!bT){continue;
}bT.removeListenerById(bP.listenerIds[j]);
}var bT=bP.sources[bP.index];
for(var j=bP.index+1;j<bP.propertyNames.length;j++){if(bP.arrayIndexValues[j-1]!==ck){bT=bT[cl+qx.lang.String.firstUp(bP.propertyNames[j-1])](bP.arrayIndexValues[j-1]);
}else{bT=bT[cl+qx.lang.String.firstUp(bP.propertyNames[j-1])]();
}bP.sources[j]=bT;
if(!bT){this.__ft(bP.targetObject,bP.targetPropertyChain);
break;
}if(j==bP.propertyNames.length-1){if(qx.Class.implementsInterface(bT,qx.data.IListData)){var bU=bP.arrayIndexValues[j]===ch?bT.length-1:bP.arrayIndexValues[j];
var bR=bT.getItem(bU);
this.__fw(bR,bP.targetObject,bP.targetPropertyChain,bP.options,bP.sources[bP.index]);
bP.listenerIds[j]=this.__fy(bT,cg,bP.targetObject,bP.targetPropertyChain,bP.options,bP.arrayIndexValues[j]);
}else{if(bP.propertyNames[j]!=null&&bT[cl+qx.lang.String.firstUp(bP.propertyNames[j])]!=null){var bR=bT[cl+qx.lang.String.firstUp(bP.propertyNames[j])]();
this.__fw(bR,bP.targetObject,bP.targetPropertyChain,bP.options,bP.sources[bP.index]);
}var bS=this.__fs(bT,bP.propertyNames[j]);
bP.listenerIds[j]=this.__fy(bT,bS,bP.targetObject,bP.targetPropertyChain,bP.options);
}}else{if(bP.listeners[j]==null){var bQ=qx.lang.Function.bind(this.__fp,this,bP);
bP.listeners.push(bQ);
}if(qx.Class.implementsInterface(bT,qx.data.IListData)){var bS=cg;
}else{var bS=this.__fs(bT,bP.propertyNames[j]);
}bP.listenerIds[j]=bT.addListener(bS,bP.listeners[j]);
}}},__fq:function(cJ,cK,cL,cM,cN){var cR=cM.split(ci);
var cP=this.__fx(cR);
var cW=[];
var cV=[];
var cT=[];
var cS=[];
var cQ=cL;
for(var i=0;i<cR.length-1;i++){if(cP[i]!==ck){cS.push(cg);
}else{try{cS.push(this.__fs(cQ,cR[i]));
}catch(e){break;
}}cW[i]=cQ;
var cU=function(){for(var j=i+1;j<cR.length-1;j++){var s=cW[j];
cW[j]=null;

if(!s){continue;
}s.removeListenerById(cT[j]);
}var s=cW[i];
for(var j=i+1;j<cR.length-1;j++){var q=qx.lang.String.firstUp(cR[j-1]);
if(cP[j-1]!==ck){var t=cP[j-1]===ch?s.getLength()-1:cP[j-1];
s=s[cl+q](t);
}else{s=s[cl+q]();
}cW[j]=s;
if(cV[j]==null){cV.push(cU);
}if(qx.Class.implementsInterface(s,qx.data.IListData)){var r=cg;
}else{try{var r=qx.data.SingleValueBinding.__fs(s,cR[j]);
}catch(e){break;
}}cT[j]=s.addListener(r,cV[j]);
}qx.data.SingleValueBinding.__fr(cJ,cK,cL,cM,cN);
};
cV.push(cU);
cT[i]=cQ.addListener(cS[i],cU);
var cO=qx.lang.String.firstUp(cR[i]);
if(cQ[cl+cO]==null){cQ=null;
}else if(cP[i]!==ck){cQ=cQ[cl+cO](cP[i]);
}else{cQ=cQ[cl+cO]();
}
if(!cQ){break;
}}return {listenerIds:cT,targets:cW};
},__fr:function(u,v,w,x,y){var C=this.__fv(u,v);

if(C!=null){var E=v.substring(v.lastIndexOf(ci)+1,v.length);
if(E.charAt(E.length-1)==cf){var z=E.substring(E.lastIndexOf(cj)+1,E.length-1);
var B=E.substring(0,E.lastIndexOf(cj));
var D=C[cl+qx.lang.String.firstUp(B)]();

if(z==ch){z=D.length-1;
}
if(D!=null){var A=D.getItem(z);
}}else{var A=C[cl+qx.lang.String.firstUp(E)]();
}}A=qx.data.SingleValueBinding.__fA(A,w,x,y);
this.__fu(w,x,A);
},__fs:function(n,o){var p=this.__fB(n,o);
if(p==null){if(qx.Class.supportsEvent(n.constructor,o)){p=o;
}else if(qx.Class.supportsEvent(n.constructor,cg+qx.lang.String.firstUp(o))){p=cg+qx.lang.String.firstUp(o);
}else{throw new qx.core.AssertionError(ct,o);
}}return p;
},__ft:function(bX,bY){var ca=this.__fv(bX,bY);

if(ca!=null){var cb=bY.substring(bY.lastIndexOf(ci)+1,bY.length);
if(cb.charAt(cb.length-1)==cf){this.__fu(bX,bY,null);
return;
}if(ca[cD+qx.lang.String.firstUp(cb)]!=undefined){ca[cD+qx.lang.String.firstUp(cb)]();
}else{ca[cc+qx.lang.String.firstUp(cb)](null);
}}},__fu:function(bH,bI,bJ){var bN=this.__fv(bH,bI);

if(bN!=null){var bO=bI.substring(bI.lastIndexOf(ci)+1,bI.length);
if(bO.charAt(bO.length-1)==cf){var bK=bO.substring(bO.lastIndexOf(cj)+1,bO.length-1);
var bM=bO.substring(0,bO.lastIndexOf(cj));
var bL=bN[cl+qx.lang.String.firstUp(bM)]();

if(bK==ch){bK=bL.length-1;
}
if(bL!=null){bL.setItem(bK,bJ);
}}else{bN[cc+qx.lang.String.firstUp(bO)](bJ);
}}},__fv:function(bA,bB){var bE=bB.split(ci);
var bF=bA;
for(var i=0;i<bE.length-1;i++){try{var bD=bE[i];
if(bD.indexOf(cf)==bD.length-1){var bC=bD.substring(bD.indexOf(cj)+1,bD.length-1);
bD=bD.substring(0,bD.indexOf(cj));
}bF=bF[cl+qx.lang.String.firstUp(bD)]();

if(bC!=null){if(bC==ch){bC=bF.length-1;
}bF=bF.getItem(bC);
bC=null;
}}catch(bG){return null;
}}return bF;
},__fw:function(dc,dd,de,df,dg){dc=this.__fA(dc,dd,de,df);
if(dc==null){this.__ft(dd,de);
}if(dc!=undefined){try{this.__fu(dd,de,dc);
if(df&&df.onUpdate){df.onUpdate(dg,dd,dc);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(df&&df.onSetFail){df.onSetFail(e);
}else{this.warn("Failed so set value "+dc+" on "+dd+". Error message: "+e);
}}}},__fx:function(dh){var di=[];
for(var i=0;i<dh.length;i++){var name=dh[i];
if(qx.lang.String.endsWith(name,cf)){var dj=name.substring(name.indexOf(cj)+1,name.indexOf(cf));
if(name.indexOf(cf)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(dj!==ch){if(dj==ck||isNaN(parseInt(dj))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cj)!=0){dh[i]=name.substring(0,name.indexOf(cj));
di[i]=ck;
di[i+1]=dj;
dh.splice(i+1,0,cE);
i++;
}else{di[i]=dj;
dh.splice(i,1,cE);
}}else{di[i]=ck;
}}return di;
},__fy:function(F,G,H,I,J,K){if(qx.core.Variant.isSet(cA,cB)){var L=qx.Class.getEventType(F.constructor,G);
qx.core.Assert.assertEquals(cw,L,G+cn+F+ci);
}var N=function(Q,e){if(Q!==ck){if(Q===ch){Q=F.length-1;
}var T=F.getItem(Q);
if(T==undefined){qx.data.SingleValueBinding.__ft(H,I);
}var R=e.getData().start;
var S=e.getData().end;

if(Q<R||Q>S){return;
}}else{var T=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+F+" by "+G+" to "+H+" ("+I+")");
qx.log.Logger.debug("Data before conversion: "+T);
}T=qx.data.SingleValueBinding.__fA(T,H,I,J);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+T);
}try{if(T!=undefined){qx.data.SingleValueBinding.__fu(H,I,T);
}else{qx.data.SingleValueBinding.__ft(H,I);
}if(J&&J.onUpdate){J.onUpdate(F,H,T);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(J&&J.onSetFail){J.onSetFail(e);
}else{this.warn("Failed so set value "+T+" on "+H+". Error message: "+e);
}}};
if(!K){K=ck;
}N=qx.lang.Function.bind(N,F,K);
var M=F.addListener(G,N);
return M;
},__fz:function(bd,be,bf,bg,bh){if(this.__fo[be.toHashCode()]===undefined){this.__fo[be.toHashCode()]=[];
}this.__fo[be.toHashCode()].push([bd,be,bf,bg,bh]);
},__fA:function(a,b,c,d){if(d&&d.converter){var g;

if(b.getModel){g=b.getModel();
}return d.converter(a,g);
}else{var k=this.__fv(b,c);
var l=c.substring(c.lastIndexOf(ci)+1,c.length);
if(k==null){return a;
}var h=qx.Class.getPropertyDefinition(k.constructor,l);
var f=h==null?ck:h.check;
return this.__fC(a,f);
}},__fB:function(ba,bb){var bc=qx.Class.getPropertyDefinition(ba.constructor,bb);

if(bc==null){return null;
}return bc.event;
},__fC:function(cG,cH){var cI=qx.lang.Type.getClass(cG);
if((cI==ce||cI==cd)&&(cH==cx||cH==cp)){cG=parseInt(cG);
}if((cI==cz||cI==ce||cI==cv)&&cH==cd){cG=cG+ck;
}if((cI==ce||cI==cd)&&(cH==ce||cH==co)){cG=parseFloat(cG);
}return cG;
},removeBindingFromObject:function(U,V){if(V.type==cF){for(var i=0;i<V.sources.length;i++){if(V.sources[i]){V.sources[i].removeListenerById(V.listenerIds[i]);
}}for(var i=0;i<V.targets.length;i++){if(V.targets[i]){V.targets[i].removeListenerById(V.targetListenerIds[i]);
}}}else{U.removeListenerById(V);
}var W=this.__fo[U.toHashCode()];
if(W!=undefined){for(var i=0;i<W.length;i++){if(W[i][0]==V){qx.lang.Array.remove(W,W[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bV){if(qx.core.Variant.isSet(cA,cB)){qx.core.Assert.assertNotNull(bV,cq);
}var bW=this.__fo[bV.toHashCode()];

if(bW!=undefined){for(var i=bW.length-1;i>=0;i--){this.removeBindingFromObject(bV,bW[i][0]);
}}},getAllBindingsForObject:function(m){if(this.__fo[m.toHashCode()]===undefined){this.__fo[m.toHashCode()]=[];
}return this.__fo[m.toHashCode()];
},removeAllBindings:function(){for(var P in this.__fo){var O=qx.core.ObjectRegistry.fromHashCode(P);
if(O==null){delete this.__fo[P];
continue;
}this.removeAllBindingsForObject(O);
}this.__fo={};
},getAllBindings:function(){return this.__fo;
},showBindingInLog:function(cX,cY){var db;
for(var i=0;i<this.__fo[cX.toHashCode()].length;i++){if(this.__fo[cX.toHashCode()][i][0]==cY){db=this.__fo[cX.toHashCode()][i];
break;
}}
if(db===undefined){var da=cm;
}else{var da=cr+db[1]+cC+db[2]+cy+db[3]+cC+db[4]+cu;
}qx.log.Logger.debug(da);
},showAllBindingsInLog:function(){for(var Y in this.__fo){var X=qx.core.ObjectRegistry.fromHashCode(Y);

for(var i=0;i<this.__fo[Y].length;i++){this.showBindingInLog(X,this.__fo[Y][i][0]);
}}}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__eU={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__eU:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__eU[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(k){if(!this.__eU){return;
}var m=k.classname;
var n=this.__eU[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__eU[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var j=this.__eU;
var g,h,i,l;

for(g in j){h=j[g];

for(i=0,l=h.length;i<l;i++){h[i].dispose();
}}delete this.__eU;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(c,d){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=d.length;i<l;i++){var name=d[i];

if(c[name]==null||!c.hasOwnProperty(name)){continue;
}c[name]=null;
}},disposeObjects:function(k,m,n){var name;

for(var i=0,l=m.length;i<l;i++){name=m[i];

if(k[name]==null||!k.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(k[name].dispose){if(!n&&k[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{k[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}k[name]=null;
}},disposeArray:function(f,g){var j=f[g];

if(!j){return;
}if(qx.core.ObjectRegistry.inShutDown){f[g]=null;
return;
}try{var h;

for(var i=j.length-1;i>=0;i--){h=j[i];

if(h){h.dispose();
}}}catch(a){throw new Error("The array field: "+g+" of object: "+f+" has non disposable entries: "+a);
}j.length=0;
f[g]=null;
},disposeMap:function(o,p){var q=o[p];

if(!q){return;
}if(qx.core.ObjectRegistry.inShutDown){o[p]=null;
return;
}try{for(var r in q){if(q.hasOwnProperty(r)){q[r].dispose();
}}}catch(e){throw new Error("The map field: "+p+" of object: "+o+" has non disposable entries: "+e);
}o[p]=null;
},disposeTriggeredBy:function(s,t){var u=t.dispose;
t.dispose=function(){u.call(t);
s.dispose();
};
}}});
})();
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,d){return qx.Class.supportsEvent(c.constructor,d);
},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var d="CSS1Compat",c="qx.bom.client.Feature",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="label";
qx.Class.define(c,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,XUL:false,CSS_TEXT_OVERFLOW:("textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style),HTML5_CLASSLIST:(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList"),__fP:function(){this.QUIRKS_MODE=this.__fQ();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;

try{document.createElementNS(b,a);
this.XUL=true;
}catch(e){this.XUL=false;
}},__fQ:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}}},defer:function(f){f.__fP();
}});
})();
(function(){var o="qx.debug",n="on",m="Invalid argument 'map'",k="Invalid argument 'minLength'",j="Invalid argument 'source'",h="Invalid argument 'target'",g="function",f="Invalid argument 'array'",e="qx.lang.Object",d="undefined",c="object";
qx.Class.define(e,{statics:{empty:function(z){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(z,m);
}
for(var A in z){if(z.hasOwnProperty(A)){delete z[A];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(B){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(B,m);
}return B.__count__===0;
}:
function(a){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(a,m);
}
for(var b in a){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(P,Q){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(P,m);
qx.core.Assert&&qx.core.Assert.assertInteger(Q,k);
}return P.__count__>=Q;
}:
function(M,N){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(M,m);
qx.core.Assert&&qx.core.Assert.assertInteger(N,k);
}
if(N<=0){return true;
}var length=0;

for(var O in M){if((++length)>=N){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(E){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(E,m);
}var G=[];
var F=this.getKeys(E);

for(var i=0,l=F.length;i<l;i++){G.push(E[F[i]]);
}return G;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(x,y){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(x,h);
qx.core.Assert&&qx.core.Assert.assertMap(y,j);
}return qx.lang.Object.mergeWith(x,y,false);
},merge:function(R,S){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(R,h);
}var T=arguments.length;

for(var i=1;i<T;i++){qx.lang.Object.mergeWith(R,arguments[i]);
}return R;
},clone:function(p){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(p,j);
}var q={};

for(var r in p){q[r]=p[r];
}return q;
},invert:function(J){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(J,m);
}var K={};

for(var L in J){K[J[L].toString()]=L;
}return K;
},getKeyFromValue:function(u,v){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(u,m);
}
for(var w in u){if(u.hasOwnProperty(w)&&u[w]===v){return w;
}}return null;
},contains:function(H,I){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(H,m);
}return this.getKeyFromValue(H,I)!==null;
},select:function(s,t){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertMap(t,m);
}return t[s];
},fromArray:function(C){if(qx.core.Variant.isSet(o,n)){qx.core.Assert&&qx.core.Assert.assertArray(C,f);
}var D={};

for(var i=0,l=C.length;i<l;i++){if(qx.core.Variant.isSet(o,n)){switch(typeof C[i]){case c:case g:case d:throw new Error("Could not convert complex objects like "+C[i]+" at array index "+i+" to map syntax");
}}D[C[i].toString()]=true;
}return D;
}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(s,t){if(t==null){t=0;
}else if(t<0){t=Math.max(0,this.length+t);
}
for(var i=t;i<this.length;i++){if(this[i]===s){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(k,m){var l=this.length;

for(var i=0;i<l;i++){var n=this[i];

if(n!==undefined){k.call(m||window,n,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(o,p){var q=[];
var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){if(o.call(p||window,r,i,this)){q.push(this[i]);
}}}return q;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
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
(function(){var n="indexOf",m="lastIndexOf",k="slice",j="concat",h="join",g="toLocaleUpperCase",f="shift",e="substr",d="filter",c="unshift",K="match",J="quote",I="qx.lang.Generics",H="localeCompare",G="sort",F="some",E="charAt",D="split",C="substring",B="pop",v="toUpperCase",w="replace",t="push",u="charCodeAt",q="every",r="reverse",o="search",p="forEach",x="map",y="toLowerCase",A="splice",z="toLocaleLowerCase";
qx.Class.define(I,{statics:{__en:{"Array":[h,r,G,t,B,f,c,A,j,k,n,m,p,x,d,F,q],"String":[J,C,y,v,E,u,n,m,z,g,H,K,o,w,D,e,j,k]},__eo:function(a,b){return function(s){return a.prototype[b].apply(s,Array.prototype.slice.call(arguments,1));
};
},__ep:function(){var L=qx.lang.Generics.__en;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__eo(N,O);
}}}}},defer:function(Q){Q.__ep();
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
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__js:function(){var n=navigator.platform;
if(n==null||n===k){n=navigator.userAgent;
}
if(n.indexOf(e)!=-1||n.indexOf(l)!=-1||n.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(n.indexOf(g)!=-1||n.indexOf(b)!=-1||n.indexOf(c)!=-1||n.indexOf(m)!=-1||n.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(n.indexOf(a)!=-1||n.indexOf(i)!=-1||n.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__js();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__kd:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ke:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__kd){J.push(I);
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
}else{this.NAME=this.__kd[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__ke();
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
},isDynamic:function(f){return !!this._dynamic[f];
},resolve:function(d){if(d&&this._dynamic[d]){return this._dynamic[d];
}return d;
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
(function(){var V=",",U="rgb(",T=")",S="qx.theme.manager.Color",R="qx.util.ColorUtil";
qx.Class.define(R,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(s){return this.NAMED[s]!==undefined;
},isSystemColor:function(W){return this.SYSTEM[W]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(S);
},isThemedColor:function(J){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(J);
},stringToRgb:function(o){if(this.supportsThemes()&&this.isThemedColor(o)){var o=qx.theme.manager.Color.getInstance().resolveDynamic(o);
}
if(this.isNamedColor(o)){return this.NAMED[o];
}else if(this.isSystemColor(o)){throw new Error("Could not convert system colors to RGB: "+o);
}else if(this.isRgbString(o)){return this.__fK();
}else if(this.isHex3String(o)){return this.__fM();
}else if(this.isHex6String(o)){return this.__fN();
}throw new Error("Could not parse color: "+o);
},cssStringToRgb:function(X){if(this.isNamedColor(X)){return this.NAMED[X];
}else if(this.isSystemColor(X)){throw new Error("Could not convert system colors to RGB: "+X);
}else if(this.isRgbString(X)){return this.__fK();
}else if(this.isRgbaString(X)){return this.__fL();
}else if(this.isHex3String(X)){return this.__fM();
}else if(this.isHex6String(X)){return this.__fN();
}throw new Error("Could not parse color: "+X);
},stringToRgbString:function(H){return this.rgbToRgbString(this.stringToRgb(H));
},rgbToRgbString:function(bi){return U+bi[0]+V+bi[1]+V+bi[2]+T;
},rgbToHexString:function(be){return (qx.lang.String.pad(be[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(be[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(be[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(e){return this.isThemedColor(e)||this.isNamedColor(e)||this.isHex3String(e)||this.isHex6String(e)||this.isRgbString(e);
},isCssString:function(ba){return this.isSystemColor(ba)||this.isNamedColor(ba)||this.isHex3String(ba)||this.isHex6String(ba)||this.isRgbString(ba);
},isHex3String:function(u){return this.REGEXP.hex3.test(u);
},isHex6String:function(j){return this.REGEXP.hex6.test(j);
},isRgbString:function(h){return this.REGEXP.rgb.test(h);
},isRgbaString:function(Y){return this.REGEXP.rgba.test(Y);
},__fK:function(){var bh=parseInt(RegExp.$1,10);
var bg=parseInt(RegExp.$2,10);
var bf=parseInt(RegExp.$3,10);
return [bh,bg,bf];
},__fL:function(){var d=parseInt(RegExp.$1,10);
var c=parseInt(RegExp.$2,10);
var a=parseInt(RegExp.$3,10);
return [d,c,a];
},__fM:function(){var m=parseInt(RegExp.$1,16)*17;
var l=parseInt(RegExp.$2,16)*17;
var k=parseInt(RegExp.$3,16)*17;
return [m,l,k];
},__fN:function(){var bd=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bc=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var bb=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bd,bc,bb];
},hex3StringToRgb:function(n){if(this.isHex3String(n)){return this.__fM(n);
}throw new Error("Invalid hex3 value: "+n);
},hex6StringToRgb:function(K){if(this.isHex6String(K)){return this.__fN(K);
}throw new Error("Invalid hex6 value: "+K);
},hexStringToRgb:function(I){if(this.isHex3String(I)){return this.__fM(I);
}
if(this.isHex6String(I)){return this.__fN(I);
}throw new Error("Invalid hex value: "+I);
},rgbToHsb:function(v){var x,y,A;
var G=v[0];
var D=v[1];
var w=v[2];
var F=(G>D)?G:D;

if(w>F){F=w;
}var z=(G<D)?G:D;

if(w<z){z=w;
}A=F/255.0;

if(F!=0){y=(F-z)/F;
}else{y=0;
}
if(y==0){x=0;
}else{var C=(F-G)/(F-z);
var E=(F-D)/(F-z);
var B=(F-w)/(F-z);

if(G==F){x=B-E;
}else if(D==F){x=2.0+C-B;
}else{x=4.0+E-C;
}x=x/6.0;

if(x<0){x=x+1.0;
}}return [Math.round(x*360),Math.round(y*100),Math.round(A*100)];
},hsbToRgb:function(L){var i,f,p,q,t;
var M=L[0]/360;
var N=L[1]/100;
var O=L[2]/100;

if(M>=1.0){M%=1.0;
}
if(N>1.0){N=1.0;
}
if(O>1.0){O=1.0;
}var P=Math.floor(255*O);
var Q={};

if(N==0.0){Q.red=Q.green=Q.blue=P;
}else{M*=6.0;
i=Math.floor(M);
f=M-i;
p=Math.floor(P*(1.0-N));
q=Math.floor(P*(1.0-(N*f)));
t=Math.floor(P*(1.0-(N*(1.0-f))));

switch(i){case 0:Q.red=P;
Q.green=t;
Q.blue=p;
break;
case 1:Q.red=q;
Q.green=P;
Q.blue=p;
break;
case 2:Q.red=p;
Q.green=P;
Q.blue=t;
break;
case 3:Q.red=p;
Q.green=q;
Q.blue=P;
break;
case 4:Q.red=t;
Q.green=p;
Q.blue=P;
break;
case 5:Q.red=P;
Q.green=p;
Q.blue=q;
break;
}}return [Q.red,Q.green,Q.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="object",i="_applyTheme",h="__bR",g="qx.theme.manager.Decoration",f="Theme",e="changeTheme",d="string",c="singleton";
qx.Class.define(g,{type:c,extend:qx.core.Object,properties:{theme:{check:f,nullable:true,apply:i,event:e}},members:{__bR:null,resolve:function(m){if(!m){return null;
}
if(typeof m===j){return m;
}var p=this.getTheme();

if(!p){return null;
}var p=this.getTheme();

if(!p){return null;
}var q=this.__bR;

if(!q){q=this.__bR={};
}var n=q[m];

if(n){return n;
}var o=p.decorations[m];

if(!o){return null;
}var r=o.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+m+"!");
}return q[m]=(new r).set(o.style);
},isValidPropertyValue:function(a){if(typeof a===d){return this.isDynamic(a);
}else if(typeof a===j){var b=a.constructor;
return qx.Class.hasInterface(b,qx.ui.decoration.IDecorator);
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
if(!s){this.__bR={};
}}},destruct:function(){this._disposeMap(h);
}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var l="/",k="0",j="qx/static",i="http://",h="https://",g="file://",f="qx.util.AliasManager",e="singleton",d=".",c="static";
qx.Class.define(f,{type:e,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__fO={};
this.add(c,j);
},members:{__fO:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===l||r.charAt(0)===d||r.indexOf(i)===0||r.indexOf(h)===k||r.indexOf(g)===0){u[r]=false;
return r;
}
if(this.__fO[r]){return this.__fO[r];
}var t=r.substring(0,r.indexOf(l));
var s=this.__fO[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(n,o){this.__fO[n]=o;
var q=this._getDynamic();
for(var p in q){if(p.substring(0,p.indexOf(l))===n){q[p]=o+p.substring(n.length);
}}},remove:function(m){delete this.__fO[m];
},resolve:function(a){var b=this._getDynamic();

if(a!==null){a=this._preprocess(a);
}return b[a]||a;
}},destruct:function(){this.__fO=null;
}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(o){var p=this._dynamic;
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
},__gW:function(t,u){if(t[u].include){var v=t[t[u].include];
t[u].include=null;
delete t[u].include;
t[u]=qx.lang.Object.mergeWith(t[u],v,false);
this.__gW(t,u);
}},_applyTheme:function(f){var g=this._getDynamic();

for(var j in g){if(g[j].themed){g[j].dispose();
delete g[j];
}}
if(f){var h=f.fonts;
var i=qx.bom.Font;

for(var j in h){if(h[j].include&&h[h[j].include]){this.__gW(h,j);
}g[j]=(new i).set(h[j]);
g[j].themed=true;
}}this._setDynamic(g);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(O,P){qx.core.Object.call(this);

if(O!==undefined){this.setSize(O);
}
if(P!==undefined){this.setFamily(P);
}},statics:{fromString:function(C){var G=new qx.bom.Font();
var E=C.split(/\s+/);
var name=[];
var F;

for(var i=0;i<E.length;i++){switch(F=E[i]){case c:G.setBold(true);
break;
case e:G.setItalic(true);
break;
case j:G.setDecoration(j);
break;
default:var D=parseInt(F,10);

if(D==F||qx.lang.String.contains(F,g)){G.setSize(D);
}else{name.push(F);
}break;
}}
if(name.length>0){G.setFamily(name);
}return G;
},fromConfig:function(H){var I=new qx.bom.Font;
I.set(H);
return I;
},__ca:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__ca;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__cb:null,__cc:null,__cd:null,__ce:null,__cf:null,__cg:null,_applySize:function(J,K){this.__cb=J===null?null:J+g;
},_applyLineHeight:function(A,B){this.__cg=A===null?null:A;
},_applyFamily:function(L,M){var N=k;

for(var i=0,l=L.length;i<l;i++){if(L[i].indexOf(o)>0){N+=f+L[i]+f;
}else{N+=L[i];
}
if(i!==l-1){N+=n;
}}this.__cc=N;
},_applyBold:function(S,T){this.__cd=S===null?null:S?c:d;
},_applyItalic:function(Q,R){this.__ce=Q===null?null:Q?e:d;
},_applyDecoration:function(y,z){this.__cf=y===null?null:y;
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
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__dg:{},__de:null,__df:null,_applyTheme:function(K,L){this.__df={};
this.__de={};
},__dh:function(z,A,B){var F=A.appearances;
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
return this.__dh(E,A,B);
}}}if(B!=null){return this.__dh(B,A);
}return null;
}else if(typeof I===h){return this.__dh(I,A,B);
}else if(I.include&&!I.style){return this.__dh(I.include,A,B);
}return z;
},styleFrom:function(i,j,k,l){if(!k){k=this.getTheme();
}var r=this.__df;
var m=r[i];

if(!m){m=r[i]=this.__dh(i,k,l);
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
}}var q=this.__de;

if(q[x]!==undefined){return q[x];
}if(!j){j=this.__dg;
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
}},destruct:function(){this.__de=this.__df=null;
}});
})();
(function(){var v="object",u="qx.debug",t="Theme",s="widgets",r="undefined",q="fonts",p="string",o="colors",n="decorations",m="on",e="meta",k="appearances",h="borders",d="icons",c="other",g="qx.Theme",f="]",j="[Theme ";
qx.Bootstrap.define(g,{statics:{define:function(name,J){if(!J){var J={};
}J.include=this.__pr(J.include);
J.patch=this.__pr(J.patch);
if(qx.core.Variant.isSet(u,m)){this.__py(name,J);
}var K={$$type:t,name:name,title:J.title,toString:this.genericToString};
if(J.extend){K.supertheme=J.extend;
}K.basename=qx.Bootstrap.createNamespace(name,K);
this.__pu(K,J);
this.__ps(K,J);
this.$$registry[name]=K;
for(var i=0,a=J.include,l=a.length;i<l;i++){this.include(K,a[i]);
}
for(var i=0,a=J.patch,l=a.length;i<l;i++){this.patch(K,a[i]);
}},__pr:function(b){if(!b){return [];
}
if(qx.Bootstrap.isArray(b)){return b;
}else{return [b];
}},__ps:function(R,S){var T=S.aliases||{};

if(S.extend&&S.extend.aliases){qx.Bootstrap.objectMergeWith(T,S.extend.aliases,false);
}R.aliases=T;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return j+this.name+f;
},__pt:function(bb){for(var i=0,bc=this.__pv,l=bc.length;i<l;i++){if(bb[bc[i]]){return bc[i];
}}},__pu:function(C,D){var G=this.__pt(D);
if(D.extend&&!G){G=D.extend.type;
}C.type=G||c;
if(!G){return;
}var I=function(){};
if(D.extend){I.prototype=new D.extend.$$clazz;
}var H=I.prototype;
var F=D[G];
for(var E in F){H[E]=F[E];
if(H[E].base){if(qx.core.Variant.isSet(u,m)){if(!D.extend){throw new Error("Found base flag in entry '"+E+"' of theme '"+D.name+"'. Base flags are not allowed for themes without a valid super theme!");
}}H[E].base=D.extend;
}}C.$$clazz=I;
C[G]=new I;
},$$registry:{},__pv:[o,h,n,q,d,s,k,e],__pw:qx.core.Variant.select(u,{"on":{"title":p,"aliases":v,"type":p,"extend":v,"colors":v,"borders":v,"decorations":v,"fonts":v,"icons":v,"widgets":v,"appearances":v,"meta":v,"include":v,"patch":v},"default":null}),__px:qx.core.Variant.select(u,{"on":{"color":v,"border":v,"decoration":v,"font":v,"icon":v,"appearance":v,"widget":v},"default":null}),__py:qx.core.Variant.select(u,{"on":function(name,w){var B=this.__pw;

for(var A in w){if(B[A]===undefined){throw new Error('The configuration key "'+A+'" in theme "'+name+'" is not allowed!');
}
if(w[A]==null){throw new Error('Invalid key "'+A+'" in theme "'+name+'"! The value is undefined/null!');
}
if(B[A]!==null&&typeof w[A]!==B[A]){throw new Error('Invalid type of key "'+A+'" in theme "'+name+'"! The type of the key must be "'+B[A]+'"!');
}}var z=[o,h,n,q,d,s,k,e];

for(var i=0,l=z.length;i<l;i++){var A=z[i];

if(w[A]!==undefined&&(w[A] instanceof Array||w[A] instanceof RegExp||w[A] instanceof Date||w[A].classname!==undefined)){throw new Error('Invalid key "'+A+'" in theme "'+name+'"! The value needs to be a map!');
}}var x=0;

for(var i=0,l=z.length;i<l;i++){var A=z[i];

if(w[A]){x++;
}
if(x>1){throw new Error("You can only define one theme category per file! Invalid theme: "+name);
}}if(!w.extend&&x===0){throw new Error("You must define at least one entry in your theme configuration :"+name);
}if(w.meta){var y;

for(var A in w.meta){y=w.meta[A];

if(this.__px[A]===undefined){throw new Error('The key "'+A+'" is not allowed inside a meta theme block.');
}
if(typeof y!==this.__px[A]){throw new Error('The type of the key "'+A+'" inside the meta block is wrong.');
}
if(!(typeof y===v&&y!==null&&y.$$type===t)){throw new Error('The content of a meta theme must reference to other themes. The value for "'+A+'" in theme "'+name+'" is invalid: '+y);
}}}if(w.extend&&w.extend.$$type!==t){throw new Error('Invalid extend in theme "'+name+'": '+w.extend);
}if(w.include){for(var i=0,l=w.include.length;i<l;i++){if(typeof (w.include[i])==r||w.include[i].$$type!==t){throw new Error('Invalid include in theme "'+name+'": '+w.include[i]);
}}}if(w.patch){for(var i=0,l=w.patch.length;i<l;i++){if(typeof (w.patch[i])==r||w.patch[i].$$type!==t){throw new Error('Invalid patch in theme "'+name+'": '+w.patch[i]);
}}}},"default":function(){}}),patch:function(L,M){var O=this.__pt(M);

if(O!==this.__pt(L)){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){P[Q]=N[Q];
}},include:function(U,V){var X=V.type;

if(X!==U.type){throw new Error("The mixins '"+U.name+"' are not compatible '"+V.name+"'!");
}var W=V[X];
var Y=U.$$clazz.prototype;

for(var ba in W){if(Y[ba]!==undefined){continue;
}Y[ba]=W[ba];
}}}});
})();
(function(){var u="focusout",t="interval",s="mouseover",r="mouseout",q="mousemove",p="__ph",o="widget",n="__pf",m="qx.ui.tooltip.ToolTip",l="Boolean",i="__pe",k="_applyCurrent",j="qx.ui.tooltip.Manager",h="tooltip-error",g="singleton";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,s,this.__po,this,true);
this.__pe=new qx.event.Timer();
this.__pe.addListener(t,this.__pl,this);
this.__pf=new qx.event.Timer();
this.__pf.addListener(t,this.__pm,this);
this.__pg={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__pg:null,__pf:null,__pe:null,__ph:null,__pi:null,__pj:function(){if(!this.__ph){this.__ph=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__ph;
},__pk:function(){if(!this.__pi){this.__pi=new qx.ui.tooltip.ToolTip().set({appearance:h});
this.__pi.syncAppearance();
}return this.__pi;
},_applyCurrent:function(w,x){if(x&&qx.ui.core.Widget.contains(x,w)){return;
}if(x){if(!x.isDisposed()){x.exclude();
}this.__pe.stop();
this.__pf.stop();
}var z=qx.event.Registration;
var y=document.body;
if(w){this.__pe.startWith(w.getShowTimeout());
z.addListener(y,r,this.__pp,this,true);
z.addListener(y,u,this.__pq,this,true);
z.addListener(y,q,this.__pn,this,true);
}else{z.removeListener(y,r,this.__pp,this,true);
z.removeListener(y,u,this.__pq,this,true);
z.removeListener(y,q,this.__pn,this,true);
}},__pl:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){this.__pf.startWith(A.getHideTimeout());

if(A.getPlaceMethod()==o){A.placeToWidget(A.getOpener());
}else{A.placeToPoint(this.__pg);
}A.show();
}this.__pe.stop();
},__pm:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__pf.stop();
this.resetCurrent();
},__pn:function(e){var B=this.__pg;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__po:function(e){var c=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

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
}var d=this.__pk().set({label:a});
}else if(!d){var d=this.__pj().set({label:f,icon:b});
}this.setCurrent(d);
d.setOpener(c);
},__pp:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&(F==G||qx.ui.core.Widget.contains(G,F))){return;
}if(F&&E&&qx.ui.core.Widget.contains(E,F)){return;
}if(G&&!F){this.setCurrent(null);
}else{this.resetCurrent();
}},__pq:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=this.getCurrent();
if(D&&D==C.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,s,this.__po,this,true);
this._disposeObjects(i,n,p);
this.__pg=null;
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(j){qx.core.Object.call(this);
this.setEnabled(false);

if(j!=null){this.setInterval(j);
}var self=this;
this.__dP=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(p,q,r){var s=new qx.event.Timer(r);
s.__dQ=p;
s.addListener(i,function(e){s.stop();
p.call(q,e);
s.dispose();
q=null;
},q);
s.start();
return s;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__dR:null,__dP:null,_applyInterval:function(k,l){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(m,n){if(n){window.clearInterval(this.__dR);
this.__dR=null;
}else if(m){this.__dR=window.setInterval(this.__dP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(a){this.setInterval(a);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__dR){window.clearInterval(this.__dR);
}this.__dR=this.__dP=null;
}});
})();
(function(){var b="qx.ui.core.MChildrenHandling";
qx.Mixin.define(b,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(l){return this._indexOf(l);
},add:function(j,k){this._add(j,k);
},addAt:function(g,h,i){this._addAt(g,h,i);
},addBefore:function(m,n,o){this._addBefore(m,n,o);
},addAfter:function(d,e,f){this._addAfter(d,e,f);
},remove:function(p){this._remove(p);
},removeAt:function(c){return this._removeAt(c);
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
(function(){var L="Integer",K="_applyDimension",J="Boolean",I="_applyStretching",H="_applyMargin",G="shorthand",F="_applyAlign",E="qx.debug",D="on",C="allowShrinkY",bi="Wrong 'width' argument. ",bh="Something went wrong with the layout of ",bg="bottom",bf="Wrong 'left' argument. ",be="baseline",bd="marginBottom",bc="qx.ui.core.LayoutItem",bb="center",ba="marginTop",Y="!",S="allowGrowX",T="middle",Q="marginLeft",R="allowShrinkX",O="top",P="right",M="marginRight",N="abstract",U="Wrong 'top' argument. ",V="Wrong 'height' argument. ",X="allowGrowY",W="left";
qx.Class.define(bc,{type:N,extend:qx.core.Object,properties:{minWidth:{check:L,nullable:true,apply:K,init:null,themeable:true},width:{check:L,nullable:true,apply:K,init:null,themeable:true},maxWidth:{check:L,nullable:true,apply:K,init:null,themeable:true},minHeight:{check:L,nullable:true,apply:K,init:null,themeable:true},height:{check:L,nullable:true,apply:K,init:null,themeable:true},maxHeight:{check:L,nullable:true,apply:K,init:null,themeable:true},allowGrowX:{check:J,apply:I,init:true,themeable:true},allowShrinkX:{check:J,apply:I,init:true,themeable:true},allowGrowY:{check:J,apply:I,init:true,themeable:true},allowShrinkY:{check:J,apply:I,init:true,themeable:true},allowStretchX:{group:[S,R],mode:G,themeable:true},allowStretchY:{group:[X,C],mode:G,themeable:true},marginTop:{check:L,init:0,apply:H,themeable:true},marginRight:{check:L,init:0,apply:H,themeable:true},marginBottom:{check:L,init:0,apply:H,themeable:true},marginLeft:{check:L,init:0,apply:H,themeable:true},margin:{group:[ba,M,bd,Q],mode:G,themeable:true},alignX:{check:[W,bb,P],nullable:true,apply:F,themeable:true},alignY:{check:[O,T,bg,be],nullable:true,apply:F,themeable:true}},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,getBounds:function(){return this.__eR||this.__eN||null;
},clearSeparators:function(){},renderSeparator:function(h,i){},renderLayout:function(a,top,b,c){if(qx.core.Variant.isSet(E,D)){var d=bh+this.toString()+Y;
this.assertInteger(a,bf+d);
this.assertInteger(top,U+d);
this.assertInteger(b,bi+d);
this.assertInteger(c,V+d);
}var e=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var e=this._getHeightForWidth(b);
}
if(e!=null&&e!==this.__eM){this.__eM=e;
qx.ui.core.queue.Layout.add(this);
return null;
}var g=this.__eN;

if(!g){g=this.__eN={};
}var f={};

if(a!==g.left||top!==g.top){f.position=true;
g.left=a;
g.top=top;
}
if(b!==g.width||c!==g.height){f.size=true;
g.width=b;
g.height=c;
}if(this.__eO){f.local=true;
delete this.__eO;
}
if(this.__eQ){f.margin=true;
delete this.__eQ;
}return f;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__eO;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__eO=true;
this.__eP=null;
},getSizeHint:function(o){var p=this.__eP;

if(p){return p;
}
if(o===false){return null;
}p=this.__eP=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__eM&&this.getHeight()==null){p.height=this.__eM;
}if(p.minWidth>p.width){p.width=p.minWidth;
}
if(p.maxWidth<p.width){p.width=p.maxWidth;
}
if(!this.getAllowGrowX()){p.maxWidth=p.width;
}
if(!this.getAllowShrinkX()){p.minWidth=p.width;
}if(p.minHeight>p.height){p.height=p.minHeight;
}
if(p.maxHeight<p.height){p.height=p.maxHeight;
}
if(!this.getAllowGrowY()){p.maxHeight=p.height;
}
if(!this.getAllowShrinkY()){p.minHeight=p.height;
}return p;
},_computeSizeHint:function(){var A=this.getMinWidth()||0;
var x=this.getMinHeight()||0;
var B=this.getWidth()||A;
var z=this.getHeight()||x;
var w=this.getMaxWidth()||Infinity;
var y=this.getMaxHeight()||Infinity;
return {minWidth:A,width:B,maxWidth:w,minHeight:x,height:z,maxHeight:y};
},_hasHeightForWidth:function(){var n=this._getLayout();

if(n){return n.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(j){var k=this._getLayout();

if(k&&k.hasHeightForWidth()){return k.getHeightForWidth(j);
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
},setUserBounds:function(t,top,u,v){this.__eR={left:t,top:top,width:u,height:v};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__eR;
qx.ui.core.queue.Layout.add(this);
},__eT:{},setLayoutProperties:function(q){if(q==null){return;
}var r=this.__eS;

if(!r){r=this.__eS={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(q);
}for(var s in q){if(q[s]==null){delete r[s];
}else{r[s]=q[s];
}}},getLayoutProperties:function(){return this.__eS||this.__eT;
},clearLayoutProperties:function(){delete this.__eS;
},updateLayoutProperties:function(bj){var bk=this._getLayout();

if(bk){if(qx.core.Variant.isSet(E,D)){if(bj){for(var bl in bj){if(bj[bl]!==null){bk.verifyLayoutProperty(this,bl,bj[bl]);
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
},clone:function(){var l=qx.core.Object.prototype.clone.call(this);
var m=this.__eS;

if(m){l.__eS=qx.lang.Object.clone(m);
}return l;
}},destruct:function(){this.$$parent=this.$$subparent=this.__eS=this.__eN=this.__eR=this.__eP=null;
}});
})();
(function(){var o="qx.debug",n="qx.ui.core.DecoratorFactory",m="qxType",l="",k="decorator",j="$$nopool$$",i="qx.ui.core.DecoratorFactory[",h="] ",g="on",f="keys: ",e=", elements: ";
qx.Class.define(n,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cn={};
},statics:{MAX_SIZE:15,__co:j},members:{__cn:null,getDecoratorElement:function(s){var x=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(s)){var v=s;
var u=qx.theme.manager.Decoration.getInstance().resolve(s);
}else{var v=x.__co;
u=s;
}var w=this.__cn;

if(w[v]&&w[v].length>0){var t=w[v].pop();
}else{var t=this._createDecoratorElement(u,v);
}t.$$pooled=false;
return t;
},poolDecorator:function(a){if(!a||a.$$pooled||a.isDisposed()){return;
}var d=qx.ui.core.DecoratorFactory;
var b=a.getId();

if(b==d.__co){a.dispose();
return;
}var c=this.__cn;

if(!c[b]){c[b]=[];
}
if(c[b].length>d.MAX_SIZE){a.dispose();
}else{a.$$pooled=true;
c[b].push(a);
}},_createDecoratorElement:function(p,q){var r=new qx.html.Decorator(p,q);

if(qx.core.Variant.isSet(o,g)){r.setAttribute(m,k);
}return r;
},toString:qx.core.Variant.select(o,{"on":function(){var A=0;
var B=0;

for(var C in this.__cn){A+=1;
B+=this.__cn[C].length;
}return [i,this.$$hash,h,f,A,e,B].join(l);
},"off":function(){return qx.core.Object.prototype.toString.call(this);
}})},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var z=this.__cn;

for(var y in z){qx.util.DisposeUtil.disposeArray(z,y);
}}this.__cn=null;
}});
})();
(function(){var dO="on",dN="px",dM="qx.debug",dL="Boolean",dK="qx.event.type.Mouse",dJ="qx.event.type.Drag",dI="visible",dH="qx.event.type.Focus",dG="Integer",dF="excluded",cU="qx.event.type.Data",cT="_applyPadding",cS="qx.event.type.Event",cR="hidden",cQ="contextmenu",cP="String",cO="tabIndex",cN="backgroundColor",cM="focused",cL="changeVisibility",dV="mshtml",dW="hovered",dT="qx.event.type.KeySequence",dU="qx.client",dR="absolute",dS="drag",dP="div",dQ="object",dX="disabled",dY="move",du="dragstart",dt="qx.dynlocale",dw="dragchange",dv="dragend",dy="resize",dx="Decorator",dA="zIndex",dz="opacity",ds="default",dr="Color",bC="qxType",bD="changeToolTipText",bE="beforeContextmenuOpen",bF="_applyNativeContextMenu",bG="content",bH="_applyBackgroundColor",bI="__dj",bJ="_applyFocusable",bK="changeShadow",bL="qx.event.type.KeyInput",ed="createChildControl",ec="Invalid left decorator inset detected: ",eb="Font",ea="_applyShadow",eh="Invalid layout data: ",eg="Could not add widget to itself: ",ef="_applyEnabled",ee="_applySelectable",ej="Number",ei="_applyKeepActive",cl="__dk",cm="_applyVisibility",cj="The 'after' widget is not a child of this widget!",ck="repeat",cp="qxDraggable",cq="syncAppearance",cn="paddingLeft",co="_applyDroppable",ch="Wrong 'left' argument. ",ci="protector",bT="#",bS="__ds",bV="qx.event.type.MouseWheel",bU="_applyCursor",bP="_applyDraggable",bO="changeTextColor",bR="$$widget",bQ="changeContextMenu",bN="paddingTop",bM="changeSelectable",cv="hideFocus",cw="Invalid top decorator inset detected: ",cx="none",cy="outline",cr="The 'before' widget is not a child of this widget!",cs="_applyAppearance",ct=" returned an invalid size hint!",cu="_applyOpacity",cz="url(",cA=")",ce="qx.ui.core.Widget",cd="minHeight is larger than maxHeight!",cc="_applyFont",cb="cursor",ca="qxDroppable",bY="__du",bX="__dn",bW="changeZIndex",cg="changeEnabled",cf="changeFont",cB="_applyDecorator",cC="_applyZIndex",cD="_applyTextColor",cE="qx.ui.menu.Menu",cF="Invalid right decorator inset detected: ",cG="Invalid widget to add: ",cH="__do",cI="_applyToolTipText",cJ="The layout of the widget",cK="true",cY="widget",cX="Wrong 'top' argument. ",cW="changeDecorator",cV="changeBackgroundColor",dd="_applyTabIndex",dc="Invalid bottom decorator inset detected: ",db="changeAppearance",da="shorthand",df="__dw",de="/",dm="",dn="_applyContextMenu",dk="container",dl="paddingBottom",di="changeNativeContextMenu",dj="qx.ui.tooltip.ToolTip",dg="qxKeepActive",dh="_applyKeepFocus",dp="__dp",dq="paddingRight",dC="minWidth is larger than maxWidth!",dB="changeLocale",dE="qxKeepFocus",dD="qx/static/blank.gif";
qx.Class.define(ce,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__dj=this._createContainerElement();
this.__dk=this.__dv();
this.__dj.add(this.__dk);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:cS,disappear:cS,createChildControl:cU,resize:cU,move:cU,syncAppearance:cU,mousemove:dK,mouseover:dK,mouseout:dK,mousedown:dK,mouseup:dK,click:dK,dblclick:dK,contextmenu:dK,beforeContextmenuOpen:dK,mousewheel:bV,keyup:dT,keydown:dT,keypress:dT,keyinput:bL,focus:dH,blur:dH,focusin:dH,focusout:dH,activate:dH,deactivate:dH,capture:cS,losecapture:cS,drop:dJ,dragleave:dJ,dragover:dJ,drag:dJ,dragstart:dJ,dragend:dJ,dragchange:dJ,droprequest:dJ},properties:{paddingTop:{check:dG,init:0,apply:cT,themeable:true},paddingRight:{check:dG,init:0,apply:cT,themeable:true},paddingBottom:{check:dG,init:0,apply:cT,themeable:true},paddingLeft:{check:dG,init:0,apply:cT,themeable:true},padding:{group:[bN,dq,dl,cn],mode:da,themeable:true},zIndex:{nullable:true,init:null,apply:cC,event:bW,check:dG,themeable:true},decorator:{nullable:true,init:null,apply:cB,event:cW,check:dx,themeable:true},shadow:{nullable:true,init:null,apply:ea,event:bK,check:dx,themeable:true},backgroundColor:{nullable:true,check:dr,apply:bH,event:cV,themeable:true},textColor:{nullable:true,check:dr,apply:cD,event:bO,themeable:true,inheritable:true},font:{nullable:true,apply:cc,check:eb,event:cf,themeable:true,inheritable:true,dereference:true},opacity:{check:ej,apply:cu,themeable:true,nullable:true,init:null},cursor:{check:cP,apply:bU,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:dj,nullable:true},toolTipText:{check:cP,nullable:true,event:bD,apply:cI},toolTipIcon:{check:cP,nullable:true,event:bD},blockToolTip:{check:dL,init:false},visibility:{check:[dI,cR,dF],init:dI,apply:cm,event:cL},enabled:{init:true,check:dL,inheritable:true,apply:ef,event:cg},anonymous:{init:false,check:dL},tabIndex:{check:dG,nullable:true,apply:dd},focusable:{check:dL,init:false,apply:bJ},keepFocus:{check:dL,init:false,apply:dh},keepActive:{check:dL,init:false,apply:ei},draggable:{check:dL,init:false,apply:bP},droppable:{check:dL,init:false,apply:co},selectable:{check:dL,init:false,event:bM,apply:ee},contextMenu:{check:cE,apply:dn,nullable:true,event:bQ},nativeContextMenu:{check:dL,init:false,themeable:true,event:di,apply:bF},appearance:{check:cP,init:cY,apply:cs,event:db}},statics:{DEBUG:false,getWidgetByElement:function(fy){while(fy){var fz=fy.$$widget;
if(fz!=null){return qx.core.ObjectRegistry.fromHashCode(fz);
}try{fy=fy.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,fD){while(fD){if(parent==fD){return true;
}fD=fD.getLayoutParent();
}return false;
},__dl:new qx.ui.core.DecoratorFactory(),__dm:new qx.ui.core.DecoratorFactory()},members:{__dj:null,__dk:null,__dn:null,__do:null,__dp:null,__dq:null,__dr:null,__ds:null,_getLayout:function(){return this.__ds;
},_setLayout:function(gp){if(qx.core.Variant.isSet(dM,dO)){if(gp){this.assertInstance(gp,qx.ui.layout.Abstract);
}}
if(this.__ds){this.__ds.connectToWidget(null);
}
if(gp){gp.connectToWidget(this);
}this.__ds=gp;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var gB=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(gB);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(gB);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__dt:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var eH=qx.theme.manager.Decoration.getInstance();
var eJ=eH.resolve(a).getInsets();
var eI=eH.resolve(b).getInsets();

if(eJ.top!=eI.top||eJ.right!=eI.right||eJ.bottom!=eI.bottom||eJ.left!=eI.left){return true;
}return false;
},renderLayout:function(bh,top,bi,bj){var bs=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,bh,top,bi,bj);
if(!bs){return;
}var bl=this.getContainerElement();
var content=this.getContentElement();
var bp=bs.size||this._updateInsets;
var bt=dN;
var bq={};
if(bs.position){bq.left=bh+bt;
bq.top=top+bt;
}if(bs.size){bq.width=bi+bt;
bq.height=bj+bt;
}
if(bs.position||bs.size){bl.setStyles(bq);
}
if(bp||bs.local||bs.margin){var bk=this.getInsets();
var innerWidth=bi-bk.left-bk.right;
var innerHeight=bj-bk.top-bk.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bn={};

if(this._updateInsets){bn.left=bk.left+bt;
bn.top=bk.top+bt;
}
if(bp){bn.width=innerWidth+bt;
bn.height=innerHeight+bt;
}
if(bp||this._updateInsets){content.setStyles(bn);
}
if(bs.size){var br=this.__dp;

if(br){br.setStyles({width:bi+dN,height:bj+dN});
}}
if(bs.size||this._updateInsets){if(this.__dn){this.__dn.resize(bi,bj);
}}
if(bs.size){if(this.__do){var bk=this.__do.getInsets();
var bo=bi+bk.left+bk.right;
var bm=bj+bk.top+bk.bottom;
this.__do.resize(bo,bm);
}}
if(bp||bs.local||bs.margin){if(this.__ds&&this.hasLayoutChildren()){this.__ds.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(bs.position&&this.hasListener(dY)){this.fireDataEvent(dY,this.getBounds());
}
if(bs.size&&this.hasListener(dy)){this.fireDataEvent(dy,this.getBounds());
}delete this._updateInsets;
return bs;
},__du:null,clearSeparators:function(){var hf=this.__du;

if(!hf){return;
}var hg=qx.ui.core.Widget.__dl;
var content=this.getContentElement();
var he;

for(var i=0,l=hf.length;i<l;i++){he=hf[i];
hg.poolDecorator(he);
content.remove(he);
}hf.length=0;
},renderSeparator:function(fk,fl){var fm=qx.ui.core.Widget.__dl.getDecoratorElement(fk);
this.getContentElement().add(fm);
fm.resize(fl.width,fl.height);
fm.setStyles({left:fl.left+dN,top:fl.top+dN});
if(!this.__du){this.__du=[fm];
}else{this.__du.push(fm);
}},_computeSizeHint:function(){var gf=this.getWidth();
var ge=this.getMinWidth();
var ga=this.getMaxWidth();
var gd=this.getHeight();
var gb=this.getMinHeight();
var gc=this.getMaxHeight();

if(qx.core.Variant.isSet(dM,dO)){if(ge!==null&&ga!==null){this.assert(ge<=ga,dC);
}
if(gb!==null&&gc!==null){this.assert(gb<=gc,cd);
}}var gg=this._getContentHint();
var fY=this.getInsets();
var gi=fY.left+fY.right;
var gh=fY.top+fY.bottom;

if(gf==null){gf=gg.width+gi;
}
if(gd==null){gd=gg.height+gh;
}
if(ge==null){ge=gi;

if(gg.minWidth!=null){ge+=gg.minWidth;
}}
if(gb==null){gb=gh;

if(gg.minHeight!=null){gb+=gg.minHeight;
}}
if(ga==null){if(gg.maxWidth==null){ga=Infinity;
}else{ga=gg.maxWidth+gi;
}}
if(gc==null){if(gg.maxHeight==null){gc=Infinity;
}else{gc=gg.maxHeight+gh;
}}return {width:gf,minWidth:ge,maxWidth:ga,height:gd,minHeight:gb,maxHeight:gc};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__ds){this.__ds.invalidateLayoutCache();
}},_getContentHint:function(){var eN=this.__ds;

if(eN){if(this.hasLayoutChildren()){var eO=eN.getSizeHint();

if(qx.core.Variant.isSet(dM,dO)){var eM=cJ+this.toString()+ct;
this.assertInteger(eO.width,ch+eM);
this.assertInteger(eO.height,cX+eM);
}return eO;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(T){var X=this.getInsets();
var bb=X.left+X.right;
var ba=X.top+X.bottom;
var Y=T-bb;
var V=this._getLayout();

if(V&&V.hasHeightForWidth()){var U=V.getHeightForWidth(T);
}else{U=this._getContentHeightForWidth(Y);
}var W=U+ba;
return W;
},_getContentHeightForWidth:function(gE){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var fF=this.getPaddingRight();
var fH=this.getPaddingBottom();
var fG=this.getPaddingLeft();

if(this.__dn){var fE=this.__dn.getInsets();

if(qx.core.Variant.isSet(dM,dO)){this.assertNumber(fE.top,cw+fE.top);
this.assertNumber(fE.right,cF+fE.right);
this.assertNumber(fE.bottom,dc+fE.bottom);
this.assertNumber(fE.left,ec+fE.left);
}top+=fE.top;
fF+=fE.right;
fH+=fE.bottom;
fG+=fE.left;
}return {"top":top,"right":fF,"bottom":fH,"left":fG};
},getInnerSize:function(){var gv=this.getBounds();

if(!gv){return null;
}var gu=this.getInsets();
return {width:gv.width-gu.left-gu.right,height:gv.height-gu.top-gu.bottom};
},show:function(){this.setVisibility(dI);
},hide:function(){this.setVisibility(cR);
},exclude:function(){this.setVisibility(dF);
},isVisible:function(){return this.getVisibility()===dI;
},isHidden:function(){return this.getVisibility()!==dI;
},isExcluded:function(){return this.getVisibility()===dF;
},isSeeable:function(){var gU=this.getContainerElement().getDomElement();

if(gU){return gU.offsetWidth>0;
}var gT=this;

do{if(!gT.isVisible()){return false;
}
if(gT.isRootWidget()){return true;
}gT=gT.getLayoutParent();
}while(gT);
return false;
},_createContainerElement:function(){var fP={"$$widget":this.toHashCode()};

if(qx.core.Variant.isSet(dM,dO)){fP.qxType=dk;
fP.qxClass=this.classname;
}var fO={zIndex:0,position:dR};
return new qx.html.Element(dP,fO,fP);
},__dv:function(){var D=this._createContentElement();

if(qx.core.Variant.isSet(dM,dO)){D.setAttribute(bC,bG);
}D.setStyles({"position":dR,"zIndex":10});
return D;
},_createContentElement:function(){return new qx.html.Element(dP,{overflowX:cR,overflowY:cR});
},getContainerElement:function(){return this.__dj;
},getContentElement:function(){return this.__dk;
},getDecoratorElement:function(){return this.__dn||null;
},getShadowElement:function(){return this.__do||null;
},__dw:null,getLayoutChildren:function(){var gG=this.__dw;

if(!gG){return this.__dx;
}var gH;

for(var i=0,l=gG.length;i<l;i++){var gF=gG[i];

if(gF.hasUserBounds()||gF.isExcluded()){if(gH==null){gH=gG.concat();
}qx.lang.Array.remove(gH,gF);
}}return gH||gG;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var er=this.__ds;

if(er){er.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var P=this.__dw;

if(!P){return false;
}var Q;

for(var i=0,l=P.length;i<l;i++){Q=P[i];

if(!Q.hasUserBounds()&&!Q.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__dx:[],_getChildren:function(){return this.__dw||this.__dx;
},_indexOf:function(gC){var gD=this.__dw;

if(!gD){return -1;
}return gD.indexOf(gC);
},_hasChildren:function(){var hh=this.__dw;
return hh!=null&&(!!hh[0]);
},addChildrenToQueue:function(hs){var ht=this.__dw;

if(!ht){return;
}var hu;

for(var i=0,l=ht.length;i<l;i++){hu=ht[i];
hs[hu.$$hash]=hu;
hu.addChildrenToQueue(hs);
}},_add:function(bA,bB){if(bA.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,bA);
}
if(this.__dw){this.__dw.push(bA);
}else{this.__dw=[bA];
}this.__dy(bA,bB);
},_addAt:function(fe,ff,fg){if(!this.__dw){this.__dw=[];
}if(fe.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,fe);
}var fh=this.__dw[ff];

if(fh===fe){return fe.setLayoutProperties(fg);
}
if(fh){qx.lang.Array.insertBefore(this.__dw,fe,fh);
}else{this.__dw.push(fe);
}this.__dy(fe,fg);
},_addBefore:function(fI,fJ,fK){if(qx.core.Variant.isSet(dM,dO)){this.assertInArray(fJ,this._getChildren(),cr);
}
if(fI==fJ){return;
}
if(!this.__dw){this.__dw=[];
}if(fI.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,fI);
}qx.lang.Array.insertBefore(this.__dw,fI,fJ);
this.__dy(fI,fK);
},_addAfter:function(fA,fB,fC){if(qx.core.Variant.isSet(dM,dO)){this.assertInArray(fB,this._getChildren(),cj);
}
if(fA==fB){return;
}
if(!this.__dw){this.__dw=[];
}if(fA.getLayoutParent()==this){qx.lang.Array.remove(this.__dw,fA);
}qx.lang.Array.insertAfter(this.__dw,fA,fB);
this.__dy(fA,fC);
},_remove:function(fN){if(!this.__dw){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__dw,fN);
this.__dz(fN);
},_removeAt:function(ek){if(!this.__dw){throw new Error("This widget has no children!");
}var em=this.__dw[ek];
qx.lang.Array.removeAt(this.__dw,ek);
this.__dz(em);
return em;
},_removeAll:function(){if(!this.__dw){return;
}var t=this.__dw.concat();
this.__dw.length=0;

for(var i=t.length-1;i>=0;i--){this.__dz(t[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__dy:function(ho,hp){if(qx.core.Variant.isSet(dM,dO)){this.assertInstance(ho,qx.ui.core.LayoutItem,cG+ho);
this.assertNotIdentical(ho,this,eg+ho);

if(hp!=null){this.assertType(hp,dQ,eh+hp);
}}var parent=ho.getLayoutParent();

if(parent&&parent!=this){parent._remove(ho);
}ho.setLayoutParent(this);
if(hp){ho.setLayoutProperties(hp);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ho);
}},__dz:function(fX){if(qx.core.Variant.isSet(dM,dO)){this.assertNotUndefined(fX);
}
if(fX.getLayoutParent()!==this){throw new Error("Remove Error: "+fX+" is not a child of this widget!");
}fX.setLayoutParent(null);
if(this.__ds){this.__ds.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(fX);
}},capture:function(gy){this.getContainerElement().capture(gy);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(ep,eq,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__dp){return;
}var gQ=this.__dp=new qx.html.Element;

if(qx.core.Variant.isSet(dM,dO)){gQ.setAttribute(bC,ci);
}gQ.setStyles({position:dR,top:0,left:0,zIndex:7});
var gR=this.getBounds();

if(gR){this.__dp.setStyles({width:gR.width+dN,height:gR.height+dN});
}if(qx.core.Variant.isSet(dU,dV)){gQ.setStyles({backgroundImage:cz+qx.util.ResourceManager.getInstance().toUri(dD)+cA,backgroundRepeat:ck});
}this.getContainerElement().add(gQ);
},_applyDecorator:function(gI,gJ){if(qx.core.Variant.isSet(dM,dO)){if(gI&&typeof gI===dQ){if(qx.ui.core.Widget.DEBUG){this.warn("Decorator instances may increase memory usage and processing time. Often it is better to lay them out to a theme file. Hash code of decorator object: "+gI);
}}}var gN=qx.ui.core.Widget.__dl;
var gL=this.getContainerElement();
if(!this.__dp&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(gJ){gL.remove(this.__dn);
gN.poolDecorator(this.__dn);
}if(gI){var gM=this.__dn=gN.getDecoratorElement(gI);
gM.setStyle(dA,5);
var gK=this.getBackgroundColor();
gM.tint(gK);
gL.add(gM);
}else{delete this.__dn;
this._applyBackgroundColor(this.getBackgroundColor());
}if(gI&&!gJ&&gK){this.getContainerElement().setStyle(cN,null);
}if(this.__dt(gJ,gI)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(gI){var gO=this.getBounds();

if(gO){gM.resize(gO.width,gO.height);
this.__dp&&
this.__dp.setStyles({width:gO.width+dN,height:gO.height+dN});
}}},_applyShadow:function(u,v){var C=qx.ui.core.Widget.__dm;
var x=this.getContainerElement();
if(v){x.remove(this.__do);
C.poolDecorator(this.__do);
}if(u){var z=this.__do=C.getDecoratorElement(u);
x.add(z);
var B=z.getInsets();
z.setStyles({left:(-B.left)+dN,top:(-B.top)+dN});
var A=this.getBounds();

if(A){var y=A.width+B.left+B.right;
var w=A.height+B.top+B.bottom;
z.resize(y,w);
}z.tint(null);
}else{delete this.__do;
}},_applyToolTipText:function(fU,fV){if(qx.core.Variant.isSet(dt,dO)){if(this.__dr){return;
}var fW=qx.locale.Manager.getInstance();
this.__dr=fW.addListener(dB,function(){if(fU&&fU.translate){this.setToolTipText(fU.translate());
}},this);
}},_applyTextColor:function(fn,fo){},_applyZIndex:function(gV,gW){this.getContainerElement().setStyle(dA,gV==null?0:gV);
},_applyVisibility:function(fp,fq){var fr=this.getContainerElement();

if(fp===dI){fr.show();
}else{fr.hide();
}var parent=this.$$parent;

if(parent&&(fq==null||fp==null||fq===dF||fp===dF)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(fs,ft){this.getContainerElement().setStyle(dz,fs==1?null:fs);
if(qx.core.Variant.isSet(dU,dV)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var fu=(fs==1||fs==null)?null:0.99;
this.getContentElement().setStyle(dz,fu);
}}},_applyCursor:function(I,J){if(I==null&&!this.isSelectable()){I=ds;
}this.getContainerElement().setStyle(cb,I,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(eC,eD){var eE=this.getBackgroundColor();
var eG=this.getContainerElement();

if(this.__dn){this.__dn.tint(eE);
eG.setStyle(cN,null);
}else{var eF=qx.theme.manager.Color.getInstance().resolve(eE);
eG.setStyle(cN,eF);
}},_applyFont:function(gs,gt){},__dA:null,$$stateChanges:null,_forwardStates:null,hasState:function(bc){var bd=this.__dA;
return !!bd&&!!bd[bc];
},addState:function(eY){var fa=this.__dA;

if(!fa){fa=this.__dA={};
}
if(fa[eY]){return;
}this.__dA[eY]=true;
if(eY===dW){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fd=this.__dD;

if(forward&&forward[eY]&&fd){var fb;

for(var fc in fd){fb=fd[fc];

if(fb instanceof qx.ui.core.Widget){fd[fc].addState(eY);
}}}},removeState:function(c){var d=this.__dA;

if(!d||!d[c]){return;
}delete this.__dA[c];
if(c===dW){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var h=this.__dD;

if(forward&&forward[c]&&h){for(var g in h){var f=h[g];

if(f instanceof qx.ui.core.Widget){f.removeState(c);
}}}},replaceState:function(j,k){var m=this.__dA;

if(!m){m=this.__dA={};
}
if(!m[k]){m[k]=true;
}
if(m[j]){delete m[j];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var p=this.__dD;

if(forward&&forward[k]&&p){for(var o in p){var n=p[o];

if(n instanceof qx.ui.core.Widget){n.replaceState(j,k);
}}}},__dB:null,__dC:null,syncAppearance:function(){var ew=this.__dA;
var ev=this.__dB;
var ex=qx.theme.manager.Appearance.getInstance();
var et=qx.core.Property.$$method.setThemed;
var eB=qx.core.Property.$$method.resetThemed;
if(this.__dC){delete this.__dC;
if(ev){var es=ex.styleFrom(ev,ew,null,this.getAppearance());
if(es){ev=null;
}}}if(!ev){var eu=this;
var eA=[];

do{eA.push(eu.$$subcontrol||eu.getAppearance());
}while(eu=eu.$$subparent);
ev=this.__dB=eA.reverse().join(de).replace(/#[0-9]+/g,dm);
}var ey=ex.styleFrom(ev,ew,null,this.getAppearance());

if(ey){if(es){for(var ez in es){if(ey[ez]===undefined){this[eB[ez]]();
}}}if(qx.core.Variant.isSet(dM,dO)){for(var ez in ey){if(!this[et[ez]]){throw new Error(this.classname+' has no themeable property "'+ez+'" while styling '+ev);
}}}for(var ez in ey){ey[ez]===undefined?this[eB[ez]]():this[et[ez]](ey[ez]);
}}else if(es){for(var ez in es){this[eB[ez]]();
}}this.fireDataEvent(cq,this.__dA);
},_applyAppearance:function(fS,fT){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__dq){qx.ui.core.queue.Appearance.add(this);
this.__dq=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__dC=true;
qx.ui.core.queue.Appearance.add(this);
var hb=this.__dD;

if(hb){var gY;

for(var ha in hb){gY=hb[ha];

if(gY instanceof qx.ui.core.Widget){gY.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var s=this;

while(s.getAnonymous()){s=s.getLayoutParent();

if(!s){return null;
}}return s;
},getFocusTarget:function(){var gP=this;

if(!gP.getEnabled()){return null;
}
while(gP.getAnonymous()||!gP.getFocusable()){gP=gP.getLayoutParent();

if(!gP||!gP.getEnabled()){return null;
}}return gP;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(bu,bv){var bw=this.getFocusElement();
if(bu){var bx=this.getTabIndex();

if(bx==null){bx=1;
}bw.setAttribute(cO,bx);
if(qx.core.Variant.isSet(dU,dV)){bw.setAttribute(cv,cK);
}else{bw.setStyle(cy,cx);
}}else{if(bw.isNativelyFocusable()){bw.setAttribute(cO,-1);
}else if(bv){bw.setAttribute(cO,null);
}}},_applyKeepFocus:function(fv){var fw=this.getFocusElement();
fw.setAttribute(dE,fv?dO:null);
},_applyKeepActive:function(R){var S=this.getContainerElement();
S.setAttribute(dg,R?dO:null);
},_applyTabIndex:function(gX){if(gX==null){gX=1;
}else if(gX<1||gX>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&gX!=null){this.getFocusElement().setAttribute(cO,gX);
}},_applySelectable:function(hc,hd){if(hd!==null){this._applyCursor(this.getCursor());
}this.getContainerElement().setSelectable(hc);
this.getContentElement().setSelectable(hc);
},_applyEnabled:function(gq,gr){if(gq===false){this.addState(dX);
this.removeState(dW);
if(this.isFocusable()){this.removeState(cM);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(dX);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(eK,eL,name){},_applyContextMenu:function(G,H){if(H){H.removeState(cQ);

if(H.getOpener()==this){H.resetOpener();
}
if(!G){this.removeListener(cQ,this._onContextMenuOpen);
H.removeListener(cL,this._onBeforeContextMenuOpen,this);
}}
if(G){G.setOpener(this);
G.addState(cQ);

if(!H){this.addListener(cQ,this._onContextMenuOpen);
G.addListener(cL,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==dI&&this.hasListener(bE)){this.fireDataEvent(bE,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(by,bz){if(!this.isEnabled()&&by===true){by=false;
}qx.ui.core.DragDropCursor.getInstance();
if(by){this.addListener(du,this._onDragStart);
this.addListener(dS,this._onDrag);
this.addListener(dv,this._onDragEnd);
this.addListener(dw,this._onDragChange);
}else{this.removeListener(du,this._onDragStart);
this.removeListener(dS,this._onDrag);
this.removeListener(dv,this._onDragEnd);
this.removeListener(dw,this._onDragChange);
}this.getContainerElement().setAttribute(cp,by?dO:null);
},_applyDroppable:function(E,F){if(!this.isEnabled()&&E===true){E=false;
}this.getContainerElement().setAttribute(ca,E?dO:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(ds);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var en=qx.ui.core.DragDropCursor.getInstance();
var eo=e.getCurrentAction();
eo?en.setAction(eo):en.resetAction();
},visualizeFocus:function(){this.addState(cM);
},visualizeBlur:function(){this.removeState(cM);
},scrollChildIntoView:function(hi,hj,hk,hl){this.scrollChildIntoViewX(hi,hj,hl);
this.scrollChildIntoViewY(hi,hk,hl);
},scrollChildIntoViewX:function(eV,eW,eX){this.getContentElement().scrollChildIntoViewX(eV.getContainerElement(),eW,eX);
},scrollChildIntoViewY:function(be,bf,bg){this.getContentElement().scrollChildIntoViewY(be.getContainerElement(),bf,bg);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gS){if(!this.__dD){return false;
}return !!this.__dD[gS];
},__dD:null,_getCreatedChildControls:function(){return this.__dD;
},getChildControl:function(eP,eQ){if(!this.__dD){if(eQ){return null;
}this.__dD={};
}var eR=this.__dD[eP];

if(eR){return eR;
}
if(eQ===true){return null;
}return this._createChildControl(eP);
},_showChildControl:function(gw){var gx=this.getChildControl(gw);
gx.show();
return gx;
},_excludeChildControl:function(eT){var eU=this.getChildControl(eT,true);

if(eU){eU.exclude();
}},_isChildControlVisible:function(q){var r=this.getChildControl(q,true);

if(r){return r.isVisible();
}return false;
},_createChildControl:function(K){if(!this.__dD){this.__dD={};
}else if(this.__dD[K]){throw new Error("Child control '"+K+"' already created!");
}var O=K.indexOf(bT);

if(O==-1){var L=this._createChildControlImpl(K);
}else{var L=this._createChildControlImpl(K.substring(0,O));
}
if(!L){throw new Error("Unsupported control: "+K);
}L.$$subcontrol=K;
L.$$subparent=this;
var M=this.__dA;
var forward=this._forwardStates;

if(M&&forward&&L instanceof qx.ui.core.Widget){for(var N in M){if(forward[N]){L.addState(N);
}}}this.fireDataEvent(ed,L);
return this.__dD[K]=L;
},_createChildControlImpl:function(eS){return null;
},_disposeChildControls:function(){var gm=this.__dD;

if(!gm){return;
}var gk=qx.ui.core.Widget;

for(var gl in gm){var gj=gm[gl];

if(!gk.contains(this,gj)){gj.destroy();
}else{gj.dispose();
}}delete this.__dD;
},_findTopControl:function(){var fx=this;

while(fx){if(!fx.$$subparent){return fx;
}fx=fx.$$subparent;
}return null;
},getContainerLocation:function(fL){var fM=this.getContainerElement().getDomElement();
return fM?qx.bom.element.Location.get(fM,fL):null;
},getContentLocation:function(gz){var gA=this.getContentElement().getDomElement();
return gA?qx.bom.element.Location.get(gA,gz):null;
},setDomLeft:function(gn){var go=this.getContainerElement().getDomElement();

if(go){go.style.left=gn+dN;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hq){var hr=this.getContainerElement().getDomElement();

if(hr){hr.style.top=hq+dN;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(fQ,top){var fR=this.getContainerElement().getDomElement();

if(fR){fR.style.left=fQ+dN;
fR.style.top=top+dN;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var fi=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var fj=this.getChildren();

for(var i=0,l=fj.length;i<l;i++){fi.add(fj[i].clone());
}}return fi;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(dt,dO)){if(this.__dr){qx.locale.Manager.getInstance().removeListenerById(this.__dr);
}}this.getContainerElement().setAttribute(bR,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var hn=qx.ui.core.Widget;
var hm=this.getContainerElement();

if(this.__dn){hm.remove(this.__dn);
hn.__dl.poolDecorator(this.__dn);
}
if(this.__do){hm.remove(this.__do);
hn.__dm.poolDecorator(this.__do);
}this.clearSeparators();
this.__dn=this.__do=this.__du=null;
}else{this._disposeArray(bY);
this._disposeObjects(bX,cH);
}this._disposeArray(df);
this.__dA=this.__dD=null;
this._disposeObjects(bS,bI,cl,dp);
}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(h){qx.ui.core.Widget.call(this);

if(h!=null){this._setLayout(h);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(e){this.fireNonBubblingEvent(b,qx.event.type.Data,[e]);
},_afterRemoveChild:function(i){this.fireNonBubblingEvent(a,qx.event.type.Data,[i]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var H="keep-align",G="qx.debug",F="'placementModeX' and 'placementModeY' instead.",E="The property 'smart' is deprecated. Please us the properties ",D="on",C="Integer",B="interval",A="direct",z="disappear",y="best-fit",bb="mouse",ba="bottom-left",Y="Boolean",X="Invalid attribute 'value'.",W="bottom-right",V="widget",U="qx.ui.core.MPlacement",T="left-top",S="offsetRight",R="shorthand",O="offsetLeft",P="top-left",M="appear",N="offsetBottom",K="top-right",L="offsetTop",I="right-bottom",J="right-top",Q="left-bottom";
qx.Mixin.define(U,{properties:{position:{check:[P,K,ba,W,T,Q,J,I],init:ba,themeable:true},placeMethod:{check:[V,bb],init:bb,themeable:true},domMove:{check:Y,init:false},placementModeX:{check:[A,H,y],init:H,themeable:true},placementModeY:{check:[A,H,y],init:H,themeable:true},offsetLeft:{check:C,init:0,themeable:true},offsetTop:{check:C,init:0,themeable:true},offsetRight:{check:C,init:0,themeable:true},offsetBottom:{check:C,init:0,themeable:true},offset:{group:[L,S,N,O],mode:R,themeable:true}},members:{__hr:null,__hs:null,__ht:null,getLayoutLocation:function(o){var r,q,s,top;
q=o.getBounds();
s=q.left;
top=q.top;
var t=q;
o=o.getLayoutParent();

while(o&&!o.isRootWidget()){q=o.getBounds();
s+=q.left;
top+=q.top;
r=o.getInsets();
s+=r.left;
top+=r.top;
o=o.getLayoutParent();
}if(o.isRootWidget()){var p=o.getContainerLocation();

if(p){s+=p.left;
top+=p.top;
}}return {left:s,top:top,right:s+t.width,bottom:top+t.height};
},moveTo:function(a,top){if(this.getDomMove()){this.setDomPosition(a,top);
}else{this.setLayoutProperties({left:a,top:top});
}},placeToWidget:function(f,g){if(g){this.__hu();
this.__hr=qx.lang.Function.bind(this.placeToWidget,this,f,false);
qx.event.Idle.getInstance().addListener(B,this.__hr);
this.__ht=function(){this.__hu();
};
this.addListener(z,this.__ht,this);
}var h=f.getContainerLocation()||this.getLayoutLocation(f);
this.__hw(h);
},__hu:function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(B,this.__hr);
this.__hr=null;
}
if(this.__ht){this.removeListener(z,this.__ht,this);
this.__ht=null;
}},placeToMouse:function(event){var v=event.getDocumentLeft();
var top=event.getDocumentTop();
var u={left:v,top:top,right:v,bottom:top};
this.__hw(u);
},placeToElement:function(i,j){var location=qx.bom.element.Location.get(i);
var k={left:location.left,top:location.top,right:location.left+i.offsetWidth,bottom:location.top+i.offsetHeight};
if(j){this.__hr=qx.lang.Function.bind(this.placeToElement,this,i,false);
qx.event.Idle.getInstance().addListener(B,this.__hr);
this.addListener(z,function(){if(this.__hr){qx.event.Idle.getInstance().removeListener(B,this.__hr);
this.__hr=null;
}},this);
}this.__hw(k);
},placeToPoint:function(d){var e={left:d.left,top:d.top,right:d.left,bottom:d.top};
this.__hw(e);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hv:function(w){var x=null;

if(this._computePlacementSize){var x=this._computePlacementSize();
}else if(this.isVisible()){var x=this.getBounds();
}
if(x==null){this.addListenerOnce(M,function(){this.__hv(w);
},this);
}else{w.call(this,x);
}},__hw:function(n){this.__hv(function(bc){var bd=qx.util.placement.Placement.compute(bc,this.getLayoutParent().getBounds(),n,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(bd.left,bd.top);
});
},setSmart:function(b){if(qx.core.Variant.isSet(G,D)){qx.core.Assert.assertBoolean(b,X);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,E+F);
}var c=b?H:A;
this.set({placementModeX:c,placementModeY:c});
},getSmart:function(){if(qx.core.Variant.isSet(G,D)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E+F);
}var l=this.getPlacementModeX()==H?true:false;
var m=this.getPlacementModeY()==H?true:false;
return l&&m;
},resetSmart:function(){if(qx.core.Variant.isSet(G,D)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E+F);
}this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){if(qx.core.Variant.isSet(G,D)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E+F);
}return this.getSmart();
},toggleSmart:function(){if(qx.core.Variant.isSet(G,D)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,E+F);
}this.setSmart(!this.getSmart());
}},destruct:function(){this.__hu();
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
(function(){var o="atom",n="Integer",m="String",l="_applyRich",k="qx.ui.tooltip.ToolTip",j="_applyIcon",i="tooltip",h="qx.ui.core.Widget",g="mouseover",f="Boolean",d="_applyLabel";
qx.Class.define(k,{extend:qx.ui.popup.Popup,construct:function(x,y){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(o);
if(x!=null){this.setLabel(x);
}
if(y!=null){this.setIcon(y);
}this.addListener(g,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:i},showTimeout:{check:n,init:700,themeable:true},hideTimeout:{check:n,init:4000,themeable:true},label:{check:m,nullable:true,apply:d},icon:{check:m,nullable:true,apply:j,themeable:true},rich:{check:f,init:false,apply:l},opener:{check:h,nullable:true}},members:{_createChildControlImpl:function(p){var q;

switch(p){case o:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,p);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(u,v){var w=this.getChildControl(o);
u==null?w.resetIcon():w.setIcon(u);
},_applyLabel:function(r,s){var t=this.getChildControl(o);
r==null?t.resetLabel():t.setLabel(r);
},_applyRich:function(a,b){var c=this.getChildControl(o);
c.setRich(a);
}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__gN:{},remove:function(o){delete this.__gN[o.$$hash];
},add:function(c){this.__gN[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var k=this.__gQ();
for(var i=k.length-1;i>=0;i--){var l=k[i];
if(l.hasValidLayout()){continue;
}if(l.isRootWidget()&&!l.hasUserBounds()){var n=l.getSizeHint();
l.renderLayout(0,0,n.width,n.height);
}else{var m=l.getBounds();
l.renderLayout(m.left,m.top,m.width,m.height);
}}},getNestingLevel:function(p){var q=this.__gP;
var s=0;
var parent=p;
while(true){if(q[parent.$$hash]!=null){s+=q[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
s+=1;
}var r=s;

while(p&&p!==parent){q[p.$$hash]=r--;
p=p.$$parent;
}return s;
},__gO:function(){var j=qx.ui.core.queue.Visibility;
this.__gP={};
var h=[];
var g=this.__gN;
var d,f;

for(var e in g){d=g[e];

if(j.isVisible(d)){f=this.getNestingLevel(d);
if(!h[f]){h[f]={};
}h[f][e]=d;
delete g[e];
}}return h;
},__gQ:function(){var w=[];
var y=this.__gO();

for(var v=y.length-1;v>=0;v--){if(!y[v]){continue;
}
for(var u in y[v]){var t=y[v][u];
if(v==0||t.isRootWidget()||t.hasUserBounds()){w.push(t);
t.invalidateLayoutCache();
continue;
}var A=t.getSizeHint(false);

if(A){t.invalidateLayoutCache();
var x=t.getSizeHint();
var z=(!t.getBounds()||A.minWidth!==x.minWidth||A.width!==x.width||A.maxWidth!==x.maxWidth||A.minHeight!==x.minHeight||A.height!==x.height||A.maxHeight!==x.maxHeight);
}else{z=true;
}
if(z){var parent=t.getLayoutParent();

if(!y[v-1]){y[v-1]={};
}y[v-1][parent.$$hash]=parent;
}else{w.push(t);
}}}return w;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){qx.core.Object.call(this);
this.__jo=k;
this.__jp=k.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__jo:null,__jp:null,canHandleEvent:function(h,i){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},destruct:function(){this.__jo=this.__jp=null;
},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__fi={};
this.__fj=qx.lang.Function.bind(this.__fn,this);
this.__fk=false;
},members:{__fl:null,__fm:null,__fi:null,__fk:null,__fj:null,schedule:function(g){if(this.__fl==null){this.__fl=window.setTimeout(this.__fj,0);
}var h=g.toHashCode();
if(this.__fm&&this.__fm[h]){return;
}this.__fi[h]=g;
this.__fk=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__fm&&this.__fm[f]){this.__fm[f]=null;
return;
}delete this.__fi[f];
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
(function(){var bc="on",bb="element",ba="qx.debug",Y="qx.client",X="qxSelectable",W="off",V="': ",U="Invalid context for callback.",T="div",S="'",bG="Invalid event type.",bF="Invalid callback function",bE="",bD="mshtml",bC="none",bB="scroll",bA="text",bz="|bubble|",by="qx.html.Element",bx="|capture|",bj="Invalid capture flag.",bk="focus",bh="Failed to add event listener for type '",bi="blur",bf="deactivate",bg="capture",bd="userSelect",be=" from the target '",bl="-moz-none",bm="visible",bp="releaseCapture",bo="tabIndex",br="activate",bq="MozUserSelect",bt="normal",bs=" to the target '",bn="Failed to remove event listener for type '",bw="Invalid capture falg.",bv="hidden",bu="__cR";
qx.Class.define(by,{extend:qx.core.Object,construct:function(r,s,t){qx.core.Object.call(this);
this.__cv=r||T;
this.__cw=s||null;
this.__cx=t||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__cy:{},_scheduleFlush:function(ch){qx.html.Element.__dd.schedule();
},flush:function(){var dU;

if(qx.core.Variant.isSet(ba,bc)){if(this.DEBUG){qx.log.Logger.debug(this,"Flushing elements...");
}}var dM=this.__cz();
var dL=dM.getFocus();

if(dL&&this.__cD(dL)){dM.blur(dL);
}var ec=dM.getActive();

if(ec&&this.__cD(ec)){qx.bom.Element.deactivate(ec);
}var dP=this.__cB();

if(dP&&this.__cD(dP)){qx.bom.Element.releaseCapture(dP);
}var dV=[];
var dW=this._modified;

for(var dT in dW){dU=dW[dT];
if(dU.__cV()){if(dU.__cE&&qx.dom.Hierarchy.isRendered(dU.__cE)){dV.push(dU);
}else{if(qx.core.Variant.isSet(ba,bc)){if(this.DEBUG){dU.debug("Flush invisible element");
}}dU.__cU();
}delete dW[dT];
}}
for(var i=0,l=dV.length;i<l;i++){dU=dV[i];

if(qx.core.Variant.isSet(ba,bc)){if(this.DEBUG){dU.debug("Flush rendered element");
}}dU.__cU();
}var dR=this._visibility;

for(var dT in dR){dU=dR[dT];
var dX=dU.__cE;

if(!dX){delete dR[dT];
continue;
}
if(qx.core.Variant.isSet(ba,bc)){if(this.DEBUG){qx.log.Logger.debug(this,"Switching visibility to: "+dU.__cH);
}}if(!dU.$$disposed){dX.style.display=dU.__cH?bE:bC;
if(qx.core.Variant.isSet(Y,bD)){if(!(document.documentMode>=8)){dX.style.visibility=dU.__cH?bm:bv;
}}}delete dR[dT];
}var scroll=this._scroll;

for(var dT in scroll){dU=scroll[dT];
var ed=dU.__cE;

if(ed&&ed.offsetWidth){var dO=true;
if(dU.__cK!=null){dU.__cE.scrollLeft=dU.__cK;
delete dU.__cK;
}if(dU.__cL!=null){dU.__cE.scrollTop=dU.__cL;
delete dU.__cL;
}var dY=dU.__cI;

if(dY!=null){var dS=dY.element.getDomElement();

if(dS&&dS.offsetWidth){qx.bom.element.Scroll.intoViewX(dS,ed,dY.align);
delete dU.__cI;
}else{dO=false;
}}var ea=dU.__cJ;

if(ea!=null){var dS=ea.element.getDomElement();

if(dS&&dS.offsetWidth){qx.bom.element.Scroll.intoViewY(dS,ed,ea.align);
delete dU.__cJ;
}else{dO=false;
}}if(dO){delete scroll[dT];
}}}var dN={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var eb=this._actions[i];
var dX=eb.element.__cE;

if(!dX||!dN[eb.type]&&!eb.element.__cV()){continue;
}var dQ=eb.args;
dQ.unshift(dX);
qx.bom.Element[eb.type].apply(qx.bom.Element,dQ);
}this._actions=[];
for(var dT in this.__cy){var dK=this.__cy[dT];
var ed=dK.element.__cE;

if(ed){qx.bom.Selection.set(ed,dK.start,dK.end);
delete this.__cy[dT];
}}qx.event.handler.Appear.refresh();
},__cz:function(){if(!this.__cA){var cP=qx.event.Registration.getManager(window);
this.__cA=cP.getHandler(qx.event.handler.Focus);
}return this.__cA;
},__cB:function(){if(!this.__cC){var dG=qx.event.Registration.getManager(window);
this.__cC=dG.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__cC.getCaptureElement();
},__cD:function(dH){var dI=qx.core.ObjectRegistry.fromHashCode(dH.$$element);
return dI&&!dI.__cV();
}},members:{__cv:null,__cE:null,__cF:false,__cG:true,__cH:true,__cI:null,__cJ:null,__cK:null,__cL:null,__cM:null,__cN:null,__cO:null,__cw:null,__cx:null,__cP:null,__cQ:null,__cR:null,__cS:null,__cT:null,_scheduleChildrenUpdate:function(){if(this.__cS){return;
}this.__cS=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
},_createDomElement:function(){return qx.bom.Element.create(this.__cv);
},__cU:function(){if(qx.core.Variant.isSet(ba,bc)){if(this.DEBUG){this.debug("Flush: "+this.getAttribute("id"));
}}var cC=this.__cR;

if(cC){var length=cC.length;
var cD;

for(var i=0;i<length;i++){cD=cC[i];

if(cD.__cH&&cD.__cG&&!cD.__cE){cD.__cU();
}}}
if(!this.__cE){this.__cE=this._createDomElement();
this.__cE.$$element=this.$$hash;
this._copyData(false);

if(cC&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__cS){this._syncChildren();
}}delete this.__cS;
},_insertChildren:function(){var P=this.__cR;
var length=P.length;
var R;

if(length>2){var Q=document.createDocumentFragment();

for(var i=0;i<length;i++){R=P[i];

if(R.__cE&&R.__cG){Q.appendChild(R.__cE);
}}this.__cE.appendChild(Q);
}else{var Q=this.__cE;

for(var i=0;i<length;i++){R=P[i];

if(R.__cE&&R.__cG){Q.appendChild(R.__cE);
}}}},_syncChildren:function(){var cz=qx.core.ObjectRegistry;
var cq=this.__cR;
var cx=cq.length;
var cr;
var cv;
var ct=this.__cE;
var cw=ct.childNodes;
var cs=0;
var cu;

if(qx.core.Variant.isSet(ba,bc)){var cy=0;
}for(var i=cw.length-1;i>=0;i--){cu=cw[i];
cv=cz.fromHashCode(cu.$$element);

if(!cv||!cv.__cG||cv.__cT!==this){ct.removeChild(cu);

if(qx.core.Variant.isSet(ba,bc)){cy++;
}}}for(var i=0;i<cx;i++){cr=cq[i];
if(cr.__cG){cv=cr.__cE;
cu=cw[cs];

if(!cv){continue;
}if(cv!=cu){if(cu){ct.insertBefore(cv,cu);
}else{ct.appendChild(cv);
}
if(qx.core.Variant.isSet(ba,bc)){cy++;
}}cs++;
}}if(qx.core.Variant.isSet(ba,bc)){if(qx.html.Element.DEBUG){this.debug("Synced DOM with "+cy+" operations");
}}},_copyData:function(ck){var co=this.__cE;
var cn=this.__cx;

if(cn){var cl=qx.bom.element.Attribute;

for(var cp in cn){cl.set(co,cp,cn[cp]);
}}var cn=this.__cw;

if(cn){var cm=qx.bom.element.Style;

if(ck){cm.setStyles(co,cn);
}else{cm.setCss(co,cm.compile(cn));
}}var cn=this.__cP;

if(cn){for(var cp in cn){this._applyProperty(cp,cn[cp]);
}}var cn=this.__cQ;

if(cn){qx.event.Registration.getManager(co).importListeners(co,cn);
delete this.__cQ;
}},_syncData:function(){var dd=this.__cE;
var dc=qx.bom.element.Attribute;
var cY=qx.bom.element.Style;
var da=this.__cN;

if(da){var dg=this.__cx;

if(dg){var de;

for(var df in da){de=dg[df];

if(de!==undefined){dc.set(dd,df,de);
}else{dc.reset(dd,df);
}}}this.__cN=null;
}var da=this.__cM;

if(da){var dg=this.__cw;

if(dg){var cX={};

for(var df in da){cX[df]=dg[df];
}cY.setStyles(dd,cX);
}this.__cM=null;
}var da=this.__cO;

if(da){var dg=this.__cP;

if(dg){var de;

for(var df in da){this._applyProperty(df,dg[df]);
}}this.__cO=null;
}},__cV:function(){var n=this;
while(n){if(n.__cF){return true;
}
if(!n.__cG||!n.__cH){return false;
}n=n.__cT;
}return false;
},__cW:function(I){if(I.__cT===this){throw new Error("Child is already in: "+I);
}
if(I.__cF){throw new Error("Root elements could not be inserted into other ones.");
}if(I.__cT){I.__cT.remove(I);
}I.__cT=this;
if(!this.__cR){this.__cR=[];
}if(this.__cE){this._scheduleChildrenUpdate();
}},__cX:function(cL){if(cL.__cT!==this){throw new Error("Has no child: "+cL);
}if(this.__cE){this._scheduleChildrenUpdate();
}delete cL.__cT;
},__cY:function(ee){if(ee.__cT!==this){throw new Error("Has no child: "+ee);
}if(this.__cE){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__cR||null;
},getChild:function(cV){var cW=this.__cR;
return cW&&cW[cV]||null;
},hasChildren:function(){var cI=this.__cR;
return cI&&cI[0]!==undefined;
},indexOf:function(d){var f=this.__cR;
return f?f.indexOf(d):-1;
},hasChild:function(G){var H=this.__cR;
return H&&H.indexOf(G)!==-1;
},add:function(cG){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__cW(arguments[i]);
}this.__cR.push.apply(this.__cR,arguments);
}else{this.__cW(cG);
this.__cR.push(cG);
}return this;
},addAt:function(cb,cc){this.__cW(cb);
qx.lang.Array.insertAt(this.__cR,cb,cc);
return this;
},remove:function(bP){var bQ=this.__cR;

if(!bQ){return;
}
if(arguments[1]){var bR;

for(var i=0,l=arguments.length;i<l;i++){bR=arguments[i];
this.__cX(bR);
qx.lang.Array.remove(bQ,bR);
}}else{this.__cX(bP);
qx.lang.Array.remove(bQ,bP);
}return this;
},removeAt:function(a){var b=this.__cR;

if(!b){throw new Error("Has no children!");
}var c=b[a];

if(!c){throw new Error("Has no child at this position!");
}this.__cX(c);
qx.lang.Array.removeAt(this.__cR,a);
return this;
},removeAll:function(){var K=this.__cR;

if(K){for(var i=0,l=K.length;i<l;i++){this.__cX(K[i]);
}K.length=0;
}return this;
},getParent:function(){return this.__cT||null;
},insertInto:function(parent,eg){parent.__cW(this);

if(eg==null){parent.__cR.push(this);
}else{qx.lang.Array.insertAt(this.__cR,this,eg);
}return this;
},insertBefore:function(N){var parent=N.__cT;
parent.__cW(this);
qx.lang.Array.insertBefore(parent.__cR,this,N);
return this;
},insertAfter:function(O){var parent=O.__cT;
parent.__cW(this);
qx.lang.Array.insertAfter(parent.__cR,this,O);
return this;
},moveTo:function(cN){var parent=this.__cT;
parent.__cY(this);
var cO=parent.__cR.indexOf(this);

if(cO===cN){throw new Error("Could not move to same index!");
}else if(cO<cN){cN--;
}qx.lang.Array.removeAt(parent.__cR,cO);
qx.lang.Array.insertAt(parent.__cR,this,cN);
return this;
},moveBefore:function(cQ){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(cQ));
},moveAfter:function(cJ){var parent=this.__cT;
return this.moveTo(parent.__cR.indexOf(cJ)+1);
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
},setRoot:function(ef){this.__cF=ef;
},useMarkup:function(bH){if(this.__cE){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(Y,bD)){var bI=document.createElement(T);
}else{var bI=qx.bom.Element.getHelperElement();
}bI.innerHTML=bH;
this.useElement(bI.firstChild);
return this.__cE;
},useElement:function(L){if(this.__cE){throw new Error("Could not overwrite existing element!");
}this.__cE=L;
this.__cE.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cj=this.getAttribute(bo);

if(cj>=1){return true;
}var ci=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cj>=0&&ci[this.__cv]){return true;
}return false;
},setSelectable:qx.core.Variant.select(Y,{"webkit":function(B){this.setAttribute(X,B?bc:W);
this.setStyle(bd,B?bt:bC);
},"gecko":function(cE){this.setAttribute(X,cE?bc:W);
this.setStyle(bq,cE?bA:bl);
},"default":function(h){this.setAttribute(X,h?bc:W);
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
qx.html.Element._scheduleFlush(bb);
}if(this.__cT){this.__cT._scheduleChildrenUpdate();
}delete this.__cH;
},hide:function(){if(!this.__cH){return;
}
if(this.__cE){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}this.__cH=false;
},isVisible:function(){return this.__cH===true;
},scrollChildIntoViewX:function(bV,bW,bX){var bY=this.__cE;
var ca=bV.getDomElement();

if(bX!==false&&bY&&bY.offsetWidth&&ca&&ca.offsetWidth){qx.bom.element.Scroll.intoViewX(ca,bY,bW);
}else{this.__cI={element:bV,align:bW};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}delete this.__cK;
},scrollChildIntoViewY:function(u,v,w){var z=this.__cE;
var A=u.getDomElement();

if(w!==false&&z&&z.offsetWidth&&A&&A.offsetWidth){qx.bom.element.Scroll.intoViewY(A,z,v);
}else{this.__cJ={element:u,align:v};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}delete this.__cL;
},scrollToX:function(x,dB){var dC=this.__cE;

if(dB!==true&&dC&&dC.offsetWidth){dC.scrollLeft=x;
}else{this.__cK=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}delete this.__cI;
},getScrollX:function(){var dJ=this.__cE;

if(dJ){return dJ.scrollLeft;
}return this.__cK||0;
},scrollToY:function(y,o){var p=this.__cE;

if(o!==true&&p&&p.offsetWidth){p.scrollTop=y;
}else{this.__cL=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}delete this.__cJ;
},getScrollY:function(){var cA=this.__cE;

if(cA){return cA.scrollTop;
}return this.__cL||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(bB,this.__db,this);
},enableScrolling:function(){this.removeListener(bB,this.__db,this);
},__da:null,__db:function(e){if(!this.__da){this.__da=true;
this.__cE.scrollTop=0;
this.__cE.scrollLeft=0;
delete this.__da;
}},getTextSelection:function(){var J=this.__cE;

if(J){return qx.bom.Selection.get(J);
}return null;
},getTextSelectionLength:function(){var cH=this.__cE;

if(cH){return qx.bom.Selection.getLength(cH);
}return null;
},getTextSelectionStart:function(){var cR=this.__cE;

if(cR){return qx.bom.Selection.getStart(cR);
}return null;
},getTextSelectionEnd:function(){var q=this.__cE;

if(q){return qx.bom.Selection.getEnd(q);
}return null;
},setTextSelection:function(cS,cT){var cU=this.__cE;

if(cU){qx.bom.Selection.set(cU,cS,cT);
return;
}qx.html.Element.__cy[this.toHashCode()]={element:this,start:cS,end:cT};
qx.html.Element._scheduleFlush(bb);
},clearTextSelection:function(){var cd=this.__cE;

if(cd){qx.bom.Selection.clear(cd);
}delete qx.html.Element.__cy[this.toHashCode()];
},__dc:function(dD,dE){var dF=qx.html.Element._actions;
dF.push({type:dD,element:this,args:dE||[]});
qx.html.Element._scheduleFlush(bb);
},focus:function(){this.__dc(bk);
},blur:function(){this.__dc(bi);
},activate:function(){this.__dc(br);
},deactivate:function(){this.__dc(bf);
},capture:function(M){this.__dc(bg,[M!==false]);
},releaseCapture:function(){this.__dc(bp);
},setStyle:function(ce,cf,cg){if(!this.__cw){this.__cw={};
}
if(this.__cw[ce]==cf){return;
}
if(cf==null){delete this.__cw[ce];
}else{this.__cw[ce]=cf;
}if(this.__cE){if(cg){qx.bom.element.Style.set(this.__cE,ce,cf);
return this;
}if(!this.__cM){this.__cM={};
}this.__cM[ce]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}return this;
},setStyles:function(dw,dx){var dy=qx.bom.element.Style;

if(!this.__cw){this.__cw={};
}
if(this.__cE){if(!this.__cM){this.__cM={};
}
for(var dA in dw){var dz=dw[dA];

if(this.__cw[dA]==dz){continue;
}
if(dz==null){delete this.__cw[dA];
}else{this.__cw[dA]=dz;
}if(dx){dy.set(this.__cE,dA,dz);
continue;
}this.__cM[dA]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}else{for(var dA in dw){var dz=dw[dA];

if(this.__cw[dA]==dz){continue;
}
if(dz==null){delete this.__cw[dA];
}else{this.__cw[dA]=dz;
}}}return this;
},removeStyle:function(dk,dl){this.setStyle(dk,null,dl);
},getStyle:function(cK){return this.__cw?this.__cw[cK]:null;
},getAllStyles:function(){return this.__cw||null;
},setAttribute:function(bS,bT,bU){if(!this.__cx){this.__cx={};
}
if(this.__cx[bS]==bT){return;
}
if(bT==null){delete this.__cx[bS];
}else{this.__cx[bS]=bT;
}if(this.__cE){if(bU){qx.bom.element.Attribute.set(this.__cE,bS,bT);
return this;
}if(!this.__cN){this.__cN={};
}this.__cN[bS]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}return this;
},setAttributes:function(j,k){for(var m in j){this.setAttribute(m,j[m],k);
}return this;
},removeAttribute:function(eh,ei){this.setAttribute(eh,null,ei);
},getAttribute:function(cF){return this.__cx?this.__cx[cF]:null;
},_applyProperty:function(name,cM){},_setProperty:function(C,D,E){if(!this.__cP){this.__cP={};
}
if(this.__cP[C]==D){return;
}
if(D==null){delete this.__cP[C];
}else{this.__cP[C]=D;
}if(this.__cE){if(E){this._applyProperty(C,D);
return this;
}if(!this.__cO){this.__cO={};
}this.__cO[C]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(bb);
}return this;
},_removeProperty:function(dm,dn){this._setProperty(dm,null,dn);
},_getProperty:function(dh){var di=this.__cP;

if(!di){return null;
}var dj=di[dh];
return dj==null?null:dj;
},addListener:function(bJ,bK,self,bL){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(ba,bc)){var bM=bh+bJ+S+bs+this+V;
this.assertString(bJ,bM+bG);
this.assertFunction(bK,bM+bF);

if(self!==undefined){this.assertObject(self,U);
}
if(bL!==undefined){this.assertBoolean(bL,bw);
}}
if(this.__cE){return qx.event.Registration.addListener(this.__cE,bJ,bK,self,bL);
}
if(!this.__cQ){this.__cQ={};
}
if(bL==null){bL=false;
}var bN=qx.event.Manager.getNextUniqueId();
var bO=bJ+(bL?bx:bz)+bN;
this.__cQ[bO]={type:bJ,listener:bK,self:self,capture:bL,unique:bN};
return bO;
},removeListener:function(dp,dq,self,dr){if(this.$$disposed){return null;
}
if(qx.core.Variant.isSet(ba,bc)){var ds=bn+dp+S+be+this+V;
this.assertString(dp,ds+bG);
this.assertFunction(dq,ds+bF);

if(self!==undefined){this.assertObject(self,U);
}
if(dr!==undefined){this.assertBoolean(dr,bj);
}}
if(this.__cE){qx.event.Registration.removeListener(this.__cE,dp,dq,self,dr);
}else{var du=this.__cQ;
var dt;

if(dr==null){dr=false;
}
for(var dv in du){dt=du[dv];
if(dt.listener===dq&&dt.self===self&&dt.capture===dr&&dt.type===dp){delete du[dv];
break;
}}}return this;
},removeListenerById:function(cB){if(this.$$disposed){return null;
}
if(this.__cE){qx.event.Registration.removeListenerById(this.__cE,cB);
}else{delete this.__cQ[cB];
}return this;
},hasListener:function(ej,ek){if(this.$$disposed){return false;
}
if(this.__cE){return qx.event.Registration.hasListener(this.__cE,ej,ek);
}var en=this.__cQ;
var em;

if(ek==null){ek=false;
}
for(var eo in en){em=en[eo];
if(em.capture===ek&&em.type===ej){return true;
}}return false;
}},defer:function(F){F.__dd=new qx.util.DeferredCall(F.flush,F);
},destruct:function(){var g=this.__cE;

if(g){qx.event.Registration.getManager(g).removeAllListeners(g);
g.$$element=bE;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__cT;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(bu);
this.__cx=this.__cw=this.__cQ=this.__cP=this.__cN=this.__cM=this.__cO=this.__cE=this.__cT=this.__cI=this.__cJ=null;
}});
})();
(function(){var d="qx.debug",c="on",b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__jQ:false,__jR:{},__jS:0,MAX_RETRIES:10,scheduleFlush:function(f){var self=qx.ui.core.queue.Manager;
self.__jR[f]=true;

if(!self.__jQ){self.__jV.schedule();
self.__jQ=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__jT){return;
}self.__jT=true;
self.__jV.cancel();
var i=self.__jR;
self.__jU(function(){while(i.visibility||i.widget||i.appearance||i.layout||i.element){if(i.widget){delete i.widget;
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
}}},function(){self.__jQ=false;
});
self.__jU(function(){if(i.dispose){delete i.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__jT=false;
});
self.__jS=0;
},__jU:qx.core.Variant.select(d,{"on":function(k,l){k();
l();
},"off":function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){if(qx.core.Variant.isSet(d,c)){qx.log.Logger.error("Error while layout flush: "+e+"\n"+"Stack trace: \n"+qx.dev.StackTrace.getStackTraceFromError(e));
}self.__jQ=false;
self.__jT=false;
self.__jS+=1;

if(self.__jS<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__jS-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}})},defer:function(j){j.__jV=new qx.util.DeferredCall(j.flush);
qx.html.Element._scheduleFlush=j.scheduleFlush;
qx.event.Registration.addListener(window,a,j.flush);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(v){throw new Error("Missing implementation");
},canDispatchEvent:function(w,event,x){return event.getBubbles();
},dispatchEvent:function(d,event,e){var parent=d;
var p=this._manager;
var m,t;
var k;
var o,r;
var q;
var s=[];
m=p.getListeners(d,e,true);
t=p.getListeners(d,e,false);

if(m){s.push(m);
}
if(t){s.push(t);
}var parent=this._getParent(d);
var g=[];
var f=[];
var h=[];
var n=[];
while(parent!=null){m=p.getListeners(parent,e,true);

if(m){h.push(m);
n.push(parent);
}t=p.getListeners(parent,e,false);

if(t){g.push(t);
f.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=h.length-1;i>=0;i--){q=n[i];
event.setCurrentTarget(q);
k=h[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(d);

for(var i=0,u=s.length;i<u;i++){k=s[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||d;
o.handler.call(r,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,u=g.length;i<u;i++){q=f[i];
event.setCurrentTarget(q);
k=g[i];

for(var j=0,l=k.length;j<l;j++){o=k[j];
r=o.context||q;
o.handler.call(r,event);
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
(function(){var u="keydown",t="qx.client",s="keypress",r="NumLock",q="keyup",p="Enter",o="0",n="9",m="-",l="PageUp",bC="+",bB="PrintScreen",bA="gecko",bz="A",by="Z",bx="Left",bw="F5",bv="Down",bu="Up",bt="F11",B="F6",C="useraction",z="F3",A="keyinput",x="Insert",y="F8",v="End",w="/",J="Delete",K="*",W="cmd",S="F1",bf="F4",ba="Home",bp="F2",bk="F12",O="PageDown",bs="F7",br="Win",bq="F9",N="F10",Q="Right",R="text",U="Escape",X="webkit",bb="5",bh="3",bm="Meta",D="7",E="CapsLock",P="input",be="Control",bd="Space",bc="Tab",bj="Shift",bi="Pause",Y="Unidentified",bg="qx.event.handler.Keyboard",i="mshtml|webkit",bl="6",F="off",G="Apps",T="4",j="Alt",k="mshtml",M="2",H="Scroll",I="1",L="8",V="autoComplete",bo=",",bn="Backspace";
qx.Class.define(bg,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cL){qx.core.Object.call(this);
this.__fX=cL;
this.__fY=cL.getWindow();
if(qx.core.Variant.isSet(t,bA)){this.__ga=this.__fY;
}else{this.__ga=this.__fY.document.documentElement;
}this.__gb={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cA){if(this._identifierToKeyCodeMap[cA]){return true;
}
if(cA.length!=1){return false;
}
if(cA>=o&&cA<=n){return true;
}
if(cA>=bz&&cA<=by){return true;
}
switch(cA){case bC:case m:case K:case w:return true;
default:return false;
}}},members:{__gc:null,__fX:null,__fY:null,__ga:null,__gb:null,__gd:null,__ge:null,__gf:null,canHandleEvent:function(bK,bL){},registerEvent:function(a,b,c){},unregisterEvent:function(cx,cy,cz){},_fireInputEvent:function(bU,bV){var bW=this.__gg();
if(bW&&bW.offsetWidth!=0){var event=qx.event.Registration.createEvent(A,qx.event.type.KeyInput,[bU,bW,bV]);
this.__fX.dispatchEvent(bW,event);
}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,C,qx.event.type.Data,[A]);
}},_fireSequenceEvent:function(d,e,f){var g=this.__gg();
var h=d.keyCode;
var event=qx.event.Registration.createEvent(e,qx.event.type.KeySequence,[d,g,f]);
this.__fX.dispatchEvent(g,event);
if(qx.core.Variant.isSet(t,i)){if(e==u&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(h)&&!this._emulateKeyPress[h]){this._fireSequenceEvent(d,s,f);
}}}if(this.__fY){qx.event.Registration.fireEvent(this.__fY,C,qx.event.type.Data,[e]);
}},__gg:function(){var cF=this.__fX.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__fX.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__gc=qx.lang.Function.listener(this.__gh,this);
this.__gf=qx.lang.Function.listener(this.__gj,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__ga,q,this.__gc);
Event.addNativeListener(this.__ga,u,this.__gc);
Event.addNativeListener(this.__ga,s,this.__gf);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__ga,q,this.__gc);
Event.removeNativeListener(this.__ga,u,this.__gc);
Event.removeNativeListener(this.__ga,s,this.__gf);

for(var ci in (this.__ge||{})){var ch=this.__ge[ci];
Event.removeNativeListener(ch.target,s,ch.callback);
}delete (this.__ge);
},__gh:qx.event.GlobalError.observeMethod(qx.core.Variant.select(t,{"mshtml":function(co){co=window.event||co;
var cr=co.keyCode;
var cp=0;
var cq=co.type;
if(!(this.__gb[cr]==u&&cq==u)){this._idealKeyHandler(cr,cp,cq,co);
}if(cq==u){if(this._isNonPrintableKeyCode(cr)||this._emulateKeyPress[cr]){this._idealKeyHandler(cr,cp,s,co);
}}this.__gb[cr]=cq;
},"gecko":function(bP){var bT=this._keyCodeFix[bP.keyCode]||bP.keyCode;
var bR=0;
var bS=bP.type;
if(qx.bom.client.Platform.WIN){var bQ=bT?this._keyCodeToIdentifier(bT):this._charCodeToIdentifier(bR);

if(!(this.__gb[bQ]==u&&bS==u)){this._idealKeyHandler(bT,bR,bS,bP);
}this.__gb[bQ]=bS;
}else{this._idealKeyHandler(bT,bR,bS,bP);
}this.__gi(bP.target,bS,bT);
},"webkit":function(cd){var cg=0;
var ce=0;
var cf=cd.type;
if(qx.bom.client.Engine.VERSION<525.13){if(cf==q||cf==u){cg=this._charCode2KeyCode[cd.charCode]||cd.keyCode;
}else{if(this._charCode2KeyCode[cd.charCode]){cg=this._charCode2KeyCode[cd.charCode];
}else{ce=cd.charCode;
}}this._idealKeyHandler(cg,ce,cf,cd);
}else{cg=cd.keyCode;
if(!(this.__gb[cg]==u&&cf==u)){this._idealKeyHandler(cg,ce,cf,cd);
}if(cf==u){if(this._isNonPrintableKeyCode(cg)||this._emulateKeyPress[cg]){this._idealKeyHandler(cg,ce,s,cd);
}}this.__gb[cg]=cf;
}},"opera":function(bI){this.__gd=bI.keyCode;
this._idealKeyHandler(bI.keyCode,0,bI.type,bI);
}})),__gi:qx.core.Variant.select(t,{"gecko":function(cj,ck,cl){if(ck===u&&(cl==33||cl==34||cl==38||cl==40)&&cj.type==R&&cj.tagName.toLowerCase()===P&&cj.getAttribute(V)!==F){if(!this.__ge){this.__ge={};
}var cn=qx.core.ObjectRegistry.toHashCode(cj);

if(this.__ge[cn]){return;
}var self=this;
this.__ge[cn]={target:cj,callback:function(bJ){qx.bom.Event.stopPropagation(bJ);
self.__gj(bJ);
}};
var cm=qx.event.GlobalError.observeMethod(this.__ge[cn].callback);
qx.bom.Event.addNativeListener(cj,s,cm);
}},"default":null}),__gj:qx.event.GlobalError.observeMethod(qx.core.Variant.select(t,{"mshtml":function(bD){bD=window.event||bD;

if(this._charCode2KeyCode[bD.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bD.keyCode],0,bD.type,bD);
}else{this._idealKeyHandler(0,bD.keyCode,bD.type,bD);
}},"gecko":function(cB){var cE=this._keyCodeFix[cB.keyCode]||cB.keyCode;
var cC=cB.charCode;
var cD=cB.type;
this._idealKeyHandler(cE,cC,cD,cB);
},"webkit":function(bE){if(qx.bom.client.Engine.VERSION<525.13){var bH=0;
var bF=0;
var bG=bE.type;

if(bG==q||bG==u){bH=this._charCode2KeyCode[bE.charCode]||bE.keyCode;
}else{if(this._charCode2KeyCode[bE.charCode]){bH=this._charCode2KeyCode[bE.charCode];
}else{bF=bE.charCode;
}}this._idealKeyHandler(bH,bF,bG,bE);
}else{if(this._charCode2KeyCode[bE.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bE.keyCode],0,bE.type,bE);
}else{this._idealKeyHandler(0,bE.keyCode,bE.type,bE);
}}},"opera":function(cH){var cJ=cH.keyCode;
var cI=cH.type;
if(cJ!=this.__gd){this._idealKeyHandler(0,this.__gd,cI,cH);
}else{if(this._keyCodeToIdentifierMap[cH.keyCode]){this._idealKeyHandler(cH.keyCode,0,cH.type,cH);
}else{this._idealKeyHandler(0,cH.keyCode,cH.type,cH);
}}}})),_idealKeyHandler:function(bX,bY,ca,cb){var cc;
if(bX||(!bX&&!bY)){cc=this._keyCodeToIdentifier(bX);
this._fireSequenceEvent(cb,ca,cc);
}else{cc=this._charCodeToIdentifier(bY);
this._fireSequenceEvent(cb,s,cc);
this._fireInputEvent(cb,bY);
}},_specialCharCodeMap:{8:bn,9:bc,13:p,27:U,32:bd},_emulateKeyPress:qx.core.Variant.select(t,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bj,17:be,18:j,20:E,224:bm,37:bx,38:bu,39:Q,40:bv,33:l,34:O,35:v,36:ba,45:x,46:J,112:S,113:bp,114:z,115:bf,116:bw,117:B,118:bs,119:y,120:bq,121:N,122:bt,123:bk,144:r,44:bB,145:H,19:bi,91:qx.bom.client.Platform.MAC?W:br,92:br,93:qx.bom.client.Platform.MAC?W:G},_numpadToCharCode:{96:o.charCodeAt(0),97:I.charCodeAt(0),98:M.charCodeAt(0),99:bh.charCodeAt(0),100:T.charCodeAt(0),101:bb.charCodeAt(0),102:bl.charCodeAt(0),103:D.charCodeAt(0),104:L.charCodeAt(0),105:n.charCodeAt(0),106:K.charCodeAt(0),107:bC.charCodeAt(0),109:m.charCodeAt(0),110:bo.charCodeAt(0),111:w.charCodeAt(0)},_charCodeA:bz.charCodeAt(0),_charCodeZ:by.charCodeAt(0),_charCode0:o.charCodeAt(0),_charCode9:n.charCodeAt(0),_isNonPrintableKeyCode:function(cK){return this._keyCodeToIdentifierMap[cK]?true:false;
},_isIdentifiableKeyCode:function(bO){if(bO>=this._charCodeA&&bO<=this._charCodeZ){return true;
}if(bO>=this._charCode0&&bO<=this._charCode9){return true;
}if(this._specialCharCodeMap[bO]){return true;
}if(this._numpadToCharCode[bO]){return true;
}if(this._isNonPrintableKeyCode(bO)){return true;
}return false;
},_keyCodeToIdentifier:function(bM){if(this._isIdentifiableKeyCode(bM)){var bN=this._numpadToCharCode[bM];

if(bN){return String.fromCharCode(bN);
}return (this._keyCodeToIdentifierMap[bM]||this._specialCharCodeMap[bM]||String.fromCharCode(bM));
}else{return Y;
}},_charCodeToIdentifier:function(cM){return this._specialCharCodeMap[cM]||String.fromCharCode(cM).toUpperCase();
},_identifierToKeyCode:function(cs){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cs]||cs.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__gd=this.__fX=this.__fY=this.__ga=this.__gb=null;
},defer:function(ct,cu,cv){qx.event.Registration.addHandler(ct);
if(!ct._identifierToKeyCodeMap){ct._identifierToKeyCodeMap={};

for(var cw in cu._keyCodeToIdentifierMap){ct._identifierToKeyCodeMap[cu._keyCodeToIdentifierMap[cw]]=parseInt(cw,10);
}
for(var cw in cu._specialCharCodeMap){ct._identifierToKeyCodeMap[cu._specialCharCodeMap[cw]]=parseInt(cw,10);
}}
if(qx.core.Variant.isSet(t,k)){cu._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(t,bA)){cu._keyCodeFix={12:cu._identifierToKeyCode(r)};
}else if(qx.core.Variant.isSet(t,X)){if(qx.bom.client.Engine.VERSION<525.13){cu._charCode2KeyCode={63289:cu._identifierToKeyCode(r),63276:cu._identifierToKeyCode(l),63277:cu._identifierToKeyCode(O),63275:cu._identifierToKeyCode(v),63273:cu._identifierToKeyCode(ba),63234:cu._identifierToKeyCode(bx),63232:cu._identifierToKeyCode(bu),63235:cu._identifierToKeyCode(Q),63233:cu._identifierToKeyCode(bv),63272:cu._identifierToKeyCode(J),63302:cu._identifierToKeyCode(x),63236:cu._identifierToKeyCode(S),63237:cu._identifierToKeyCode(bp),63238:cu._identifierToKeyCode(z),63239:cu._identifierToKeyCode(bf),63240:cu._identifierToKeyCode(bw),63241:cu._identifierToKeyCode(B),63242:cu._identifierToKeyCode(bs),63243:cu._identifierToKeyCode(y),63244:cu._identifierToKeyCode(bq),63245:cu._identifierToKeyCode(N),63246:cu._identifierToKeyCode(bt),63247:cu._identifierToKeyCode(bk),63248:cu._identifierToKeyCode(bB),3:cu._identifierToKeyCode(p),12:cu._identifierToKeyCode(r),13:cu._identifierToKeyCode(p)};
}else{cu._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var v="qx.client",u="mouseup",t="click",s="mousedown",r="contextmenu",q="mousewheel",p="dblclick",o="mshtml",n="mouseover",m="mouseout",h="DOMMouseScroll",l="mousemove",k="on",g="mshtml|webkit|opera",f="useraction",j="gecko|webkit",i="qx.event.handler.Mouse";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(W){qx.core.Object.call(this);
this.__dS=W;
this.__dT=W.getWindow();
this.__dU=this.__dT.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dV:null,__dW:null,__dX:null,__dY:null,__ea:null,__dS:null,__dT:null,__dU:null,canHandleEvent:function(d,e){},registerEvent:qx.bom.client.System.IPHONE?
function(z,A,B){z[k+A]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(L,M,N){L[k+M]=undefined;
}:qx.lang.Function.returnNull,__eb:function(C,D,E){if(!E){E=C.target||C.srcElement;
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==q?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__dT,f,qx.event.type.Data,[D||C.type]);
},_initButtonObserver:function(){this.__dV=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,s,this.__dV);
Event.addNativeListener(this.__dU,u,this.__dV);
Event.addNativeListener(this.__dU,t,this.__dV);
Event.addNativeListener(this.__dU,p,this.__dV);
Event.addNativeListener(this.__dU,r,this.__dV);
},_initMoveObserver:function(){this.__dW=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dU,l,this.__dW);
Event.addNativeListener(this.__dU,n,this.__dW);
Event.addNativeListener(this.__dU,m,this.__dW);
},_initWheelObserver:function(){this.__dX=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var x=qx.core.Variant.isSet(v,g)?q:h;
var y=qx.core.Variant.isSet(v,o)?this.__dU:this.__dT;
Event.addNativeListener(y,x,this.__dX);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,s,this.__dV);
Event.removeNativeListener(this.__dU,u,this.__dV);
Event.removeNativeListener(this.__dU,t,this.__dV);
Event.removeNativeListener(this.__dU,p,this.__dV);
Event.removeNativeListener(this.__dU,r,this.__dV);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dU,l,this.__dW);
Event.removeNativeListener(this.__dU,n,this.__dW);
Event.removeNativeListener(this.__dU,m,this.__dW);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var G=qx.core.Variant.isSet(v,g)?q:h;
var H=qx.core.Variant.isSet(v,o)?this.__dU:this.__dT;
Event.removeNativeListener(H,G,this.__dX);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(V){this.__eb(V);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(v,j)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__ec){this.__ec(X,Y,ba);
}
if(this.__ee){this.__ee(X,Y,ba);
}this.__eb(X,Y,ba);

if(this.__ed){this.__ed(X,Y,ba);
}
if(this.__ef){this.__ef(X,Y,ba);
}this.__dY=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(F){this.__eb(F,q);
}),__ec:qx.core.Variant.select(v,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==r){this.__eb(a,u,c);
}}},"default":null}),__ed:qx.core.Variant.select(v,{"opera":function(O,P,Q){if(P==u&&O.button==2){this.__eb(O,r,Q);
}},"default":null}),__ee:qx.core.Variant.select(v,{"mshtml":function(I,J,K){if(J==u&&this.__dY==t){this.__eb(I,s,K);
}else if(J==p){this.__eb(I,t,K);
}},"default":null}),__ef:qx.core.Variant.select(v,{"mshtml":null,"default":function(R,S,T){switch(S){case s:this.__ea=T;
break;
case u:if(T!==this.__ea){var U=qx.dom.Hierarchy.getCommonParent(T,this.__ea);
this.__eb(R,t,U);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dS=this.__dT=this.__dU=this.__ea=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(b,c,d){},unregisterEvent:function(e,f,g){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var J="alias",I="copy",H="blur",G="mouseout",F="keydown",E="Ctrl",D="Shift",C="mousemove",B="move",A="mouseover",ba="Alt",Y="keyup",X="mouseup",W="dragend",V="on",U="mousedown",T="qxDraggable",S="drag",R="drop",Q="qxDroppable",O="qx.event.handler.DragDrop",P="droprequest",M="dragstart",N="dragchange",K="dragleave",L="dragover";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bf){qx.core.Object.call(this);
this.__ig=bf;
this.__ih=bf.getWindow().document.documentElement;
this.__ig.addListener(this.__ih,U,this._onMouseDown,this);
this.__it();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__ig:null,__ih:null,__ii:null,__ij:null,__ik:null,__il:null,__im:null,__in:null,__io:null,__ip:null,__iq:false,__ir:0,__is:0,canHandleEvent:function(p,q){},registerEvent:function(c,d,f){},unregisterEvent:function(bg,bh,bi){},addType:function(bb){this.__ik[bb]=true;
},addAction:function(n){this.__il[n]=true;
},supportsType:function(bd){return !!this.__ik[bd];
},supportsAction:function(y){return !!this.__il[y];
},getData:function(w){if(!this.__iA||!this.__ii){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__ik[w]){throw new Error("Unsupported data type: "+w+"!");
}
if(!this.__in[w]){this.__io=w;
this.__iv(P,this.__ij,this.__ii,false);
}
if(!this.__in[w]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__in[w]||null;
},getCurrentAction:function(){return this.__ip;
},addData:function(a,b){this.__in[a]=b;
},getCurrentType:function(){return this.__io;
},isSessionActive:function(){return this.__iq;
},__it:function(){this.__ik={};
this.__il={};
this.__im={};
this.__in={};
},__iu:function(){if(this.__ij==null){return;
}var bm=this.__il;
var bk=this.__im;
var bl=null;

if(this.__iA){if(bk.Shift&&bk.Ctrl&&bm.alias){bl=J;
}else if(bk.Shift&&bk.Alt&&bm.copy){bl=I;
}else if(bk.Shift&&bm.move){bl=B;
}else if(bk.Alt&&bm.alias){bl=J;
}else if(bk.Ctrl&&bm.copy){bl=I;
}else if(bm.move){bl=B;
}else if(bm.copy){bl=I;
}else if(bm.alias){bl=J;
}}
if(bl!=this.__ip){this.__ip=bl;
this.__iv(N,this.__ij,this.__ii,false);
}},__iv:function(g,h,i,j,k){var m=qx.event.Registration;
var l=m.createEvent(g,qx.event.type.Drag,[j,k]);

if(h!==i){l.setRelatedTarget(i);
}return m.dispatchEvent(h,l);
},__iw:function(bc){while(bc&&bc.nodeType==1){if(bc.getAttribute(T)==V){return bc;
}bc=bc.parentNode;
}return null;
},__ix:function(bj){while(bj&&bj.nodeType==1){if(bj.getAttribute(Q)==V){return bj;
}bj=bj.parentNode;
}return null;
},__iy:function(){this.__ij=null;
this.__ig.removeListener(this.__ih,C,this._onMouseMove,this,true);
this.__ig.removeListener(this.__ih,X,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,H,this._onWindowBlur,this);
this.__it();
},__iz:function(){if(this.__iq){this.__ig.removeListener(this.__ih,A,this._onMouseOver,this,true);
this.__ig.removeListener(this.__ih,G,this._onMouseOut,this,true);
this.__ig.removeListener(this.__ih,F,this._onKeyDown,this,true);
this.__ig.removeListener(this.__ih,Y,this._onKeyUp,this,true);
this.__iv(W,this.__ij,this.__ii,false);
this.__iq=false;
}this.__iA=false;
this.__ii=null;
this.__iy();
},__iA:false,_onWindowBlur:function(e){this.__iz();
},_onKeyDown:function(e){var x=e.getKeyIdentifier();

switch(x){case ba:case E:case D:if(!this.__im[x]){this.__im[x]=true;
this.__iu();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case ba:case E:case D:if(this.__im[t]){this.__im[t]=false;
this.__iu();
}}},_onMouseDown:function(e){if(this.__iq){return;
}var z=this.__iw(e.getTarget());

if(z){this.__ir=e.getDocumentLeft();
this.__is=e.getDocumentTop();
this.__ij=z;
this.__ig.addListener(this.__ih,C,this._onMouseMove,this,true);
this.__ig.addListener(this.__ih,X,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,H,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__iA){this.__iv(R,this.__ii,this.__ij,false,e);
}if(this.__iq){e.stopPropagation();
}this.__iz();
},_onMouseMove:function(e){if(this.__iq){if(!this.__iv(S,this.__ij,this.__ii,true,e)){this.__iz();
}}else{if(Math.abs(e.getDocumentLeft()-this.__ir)>3||Math.abs(e.getDocumentTop()-this.__is)>3){if(this.__iv(M,this.__ij,this.__ii,true,e)){this.__iq=true;
this.__ig.addListener(this.__ih,A,this._onMouseOver,this,true);
this.__ig.addListener(this.__ih,G,this._onMouseOut,this,true);
this.__ig.addListener(this.__ih,F,this._onKeyDown,this,true);
this.__ig.addListener(this.__ih,Y,this._onKeyUp,this,true);
var o=this.__im;
o.Ctrl=e.isCtrlPressed();
o.Shift=e.isShiftPressed();
o.Alt=e.isAltPressed();
this.__iu();
}else{this.__iv(W,this.__ij,this.__ii,false);
this.__iy();
}}}},_onMouseOver:function(e){var r=e.getTarget();
var s=this.__ix(r);

if(s&&s!=this.__ii){this.__iA=this.__iv(L,s,this.__ij,true,e);
this.__ii=s;
this.__iu();
}},_onMouseOut:function(e){var v=this.__ix(e.getTarget());
var u=this.__ix(e.getRelatedTarget());

if(v&&v!==u&&v==this.__ii){this.__iv(K,this.__ii,u,false,e);
this.__ii=null;
this.__iA=false;
qx.event.Timer.once(this.__iu,this,0);
}}},destruct:function(){this.__ij=this.__ii=this.__ig=this.__ih=this.__ik=this.__il=this.__im=this.__in=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);
this._manager=p;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(u,v,w){var z=qx.core.ObjectRegistry.toHashCode(u);
var x=z+d+v;
var y=qx.lang.Function.listener(this._onNative,this,x);
qx.bom.Event.addNativeListener(u,v,y);
this._registeredEvents[x]={element:u,type:v,listener:y};
},unregisterEvent:function(e,f,g){var j=this._registeredEvents;

if(!j){return;
}var k=qx.core.ObjectRegistry.toHashCode(e);
var h=k+d+f;
var i=this._registeredEvents[h];

if(i){qx.bom.Event.removeNativeListener(e,f,i.listener);
}delete this._registeredEvents[h];
},_onNative:qx.event.GlobalError.observeMethod(function(q,r){var t=this._registeredEvents;

if(!t){return;
}var s=t[r];
qx.event.Registration.fireNonBubblingEvent(s.element,s.type,qx.event.type.Native,[q]);
})},destruct:function(){var l;
var m=this._registeredEvents;

for(var n in m){l=m[n];
qx.bom.Event.removeNativeListener(l.element,l.type,l.listener);
}this._manager=this._registeredEvents=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var d="qx.event.handler.Appear",c="disappear",b="appear";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){qx.core.Object.call(this);
this.__bM=a;
this.__bN={};
qx.event.handler.Appear.__bO[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bO:{},refresh:function(){var p=this.__bO;

for(var q in p){p[q].refresh();
}}},members:{__bM:null,__bN:null,canHandleEvent:function(r,s){},registerEvent:function(e,f,g){var h=qx.core.ObjectRegistry.toHashCode(e)+f;
var i=this.__bN;

if(i&&!i[h]){i[h]=e;
e.$$displayed=e.offsetWidth>0;
}},unregisterEvent:function(j,k,l){var m=qx.core.ObjectRegistry.toHashCode(j)+k;
var n=this.__bN;

if(!n){return;
}
if(n[m]){delete n[m];
}},refresh:function(){var w=this.__bN;
var x;

for(var v in w){x=w[v];
var t=x.offsetWidth>0;

if((!!x.$$displayed)!==t){x.$$displayed=t;
var u=qx.event.Registration.createEvent(t?b:c);
this.__bM.dispatchEvent(x,u);
}}}},destruct:function(){this.__bM=this.__bN=null;
delete qx.event.handler.Appear.__bO[this.$$hash];
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var u="mshtml",t="",s="qx.client",r=" ",q=">",p="<",o="='",n="none",m="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",k="qx.bom.Element",f="' ",h="div",g="></";
qx.Class.define(k,{statics:{__jt:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__ju:{},__jv:{},allowCreationWithMarkup:function(bb){if(!bb){bb=window;
}var bc=bb.location.href;

if(qx.bom.Element.__jv[bc]==undefined){try{bb.document.createElement(m);
qx.bom.Element.__jv[bc]=true;
}catch(e){qx.bom.Element.__jv[bc]=false;
}}return qx.bom.Element.__jv[bc];
},getHelperElement:function(w){if(!w){w=window;
}var y=w.location.href;

if(!qx.bom.Element.__ju[y]){var x=qx.bom.Element.__ju[y]=w.document.createElement(h);
if(qx.bom.client.Engine.WEBKIT){x.style.display=n;
w.document.body.appendChild(x);
}}return qx.bom.Element.__ju[y];
},create:function(name,L,M){if(!M){M=window;
}
if(!name){throw new Error("The tag name is missing!");
}var O=this.__jt;
var N=t;

for(var Q in L){if(O[Q]){N+=Q+o+L[Q]+f;
}}var R;
if(N!=t){if(qx.bom.Element.allowCreationWithMarkup(M)){R=M.document.createElement(p+name+r+N+q);
}else{var P=qx.bom.Element.getHelperElement(M);
P.innerHTML=p+name+r+N+g+name+q;
R=P.firstChild;
}}else{R=M.document.createElement(name);
}
for(var Q in L){if(!O[Q]){qx.bom.element.Attribute.set(R,Q,L[Q]);
}}return R;
},empty:function(W){return W.innerHTML=t;
},addListener:function(S,T,U,self,V){return qx.event.Registration.addListener(S,T,U,self,V);
},removeListener:function(a,b,c,self,d){return qx.event.Registration.removeListener(a,b,c,self,d);
},removeListenerById:function(bf,bg){return qx.event.Registration.removeListenerById(bf,bg);
},hasListener:function(bh,bi,bj){return qx.event.Registration.hasListener(bh,bi,bj);
},focus:function(X){qx.event.Registration.getManager(X).getHandler(qx.event.handler.Focus).focus(X);
},blur:function(bk){qx.event.Registration.getManager(bk).getHandler(qx.event.handler.Focus).blur(bk);
},activate:function(Y){qx.event.Registration.getManager(Y).getHandler(qx.event.handler.Focus).activate(Y);
},deactivate:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).deactivate(ba);
},capture:function(bd,be){qx.event.Registration.getManager(bd).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(bd,be);
},releaseCapture:function(v){qx.event.Registration.getManager(v).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(v);
},clone:function(z,A){var D;

if(A||(qx.core.Variant.isSet(s,u)&&!qx.xml.Document.isXmlDocument(z))){var H=qx.event.Registration.getManager(z);
var B=qx.dom.Hierarchy.getDescendants(z);
B.push(z);
}if(qx.core.Variant.isSet(s,u)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],false);
}}var D=z.cloneNode(true);
if(qx.core.Variant.isSet(s,u)){for(var i=0,l=B.length;i<l;i++){H.toggleAttachedEvents(B[i],true);
}}if(A===true){var K=qx.dom.Hierarchy.getDescendants(D);
K.push(D);
var C,F,J,E;

for(var i=0,I=B.length;i<I;i++){J=B[i];
C=H.serializeListeners(J);

if(C.length>0){F=K[i];

for(var j=0,G=C.length;j<G;j++){E=C[j];
H.addListener(F,E.type,E.handler,E.self,E.capture);
}}}}return D;
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
(function(){var bq="qx.client",bp="blur",bo="focus",bn="mousedown",bm="on",bl="mouseup",bk="DOMFocusOut",bj="DOMFocusIn",bi="selectstart",bh="onmousedown",bK="onfocusout",bJ="onfocusin",bI="onmouseup",bH="onselectstart",bG="draggesture",bF="qx.event.handler.Focus",bE="_applyFocus",bD="deactivate",bC="textarea",bB="_applyActive",bx="input",by="focusin",bv="qxSelectable",bw="tabIndex",bt="off",bu="activate",br="mshtml",bs="focusout",bz="qxKeepFocus",bA="qxKeepActive";
qx.Class.define(bF,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(X){qx.core.Object.call(this);
this._manager=X;
this._window=X.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bB,nullable:true},focus:{apply:bE,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__iK:null,__iL:null,__iM:null,canHandleEvent:function(k,l){},registerEvent:function(A,B,C){},unregisterEvent:function(Y,ba,bb){},focus:function(o){if(qx.core.Variant.isSet(bq,br)){window.setTimeout(function(){try{o.focus();
}catch(K){}},0);
}else{try{o.focus();
}catch(W){}}this.setFocus(o);
this.setActive(o);
},activate:function(b){this.setActive(b);
},blur:function(bd){try{bd.blur();
}catch(T){}
if(this.getActive()===bd){this.resetActive();
}
if(this.getFocus()===bd){this.resetFocus();
}},deactivate:function(bN){if(this.getActive()===bN){this.resetActive();
}},tryActivate:function(y){var z=this.__jc(y);

if(z){this.setActive(z);
}},__iN:function(N,O,P,Q){var S=qx.event.Registration;
var R=S.createEvent(P,qx.event.type.Focus,[N,O,Q]);
S.dispatchEvent(N,R);
},_windowFocused:true,__iO:function(){if(this._windowFocused){this._windowFocused=false;
this.__iN(this._window,null,bp,false);
}},__iP:function(){if(!this._windowFocused){this._windowFocused=true;
this.__iN(this._window,null,bo,false);
}},_initObserver:qx.core.Variant.select(bq,{"gecko":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iH=qx.lang.Function.listener(this.__iQ,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._window.addEventListener(bo,this.__iF,true);
this._window.addEventListener(bp,this.__iG,true);
this._window.addEventListener(bG,this.__iH,true);
},"mshtml":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.attachEvent(bh,this.__iD);
this._document.attachEvent(bI,this.__iE);
this._document.attachEvent(bJ,this.__iJ);
this._document.attachEvent(bK,this.__iK);
this._document.attachEvent(bH,this.__iI);
},"webkit":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this.__iF=qx.lang.Function.listener(this.__iU,this);
this.__iG=qx.lang.Function.listener(this.__iT,this);
this.__iI=qx.lang.Function.listener(this.__iY,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._document.addEventListener(bi,this.__iI,false);
this._window.addEventListener(bk,this.__iK,true);
this._window.addEventListener(bo,this.__iF,true);
this._window.addEventListener(bp,this.__iG,true);
},"opera":function(){this.__iD=qx.lang.Function.listener(this.__iV,this);
this.__iE=qx.lang.Function.listener(this.__iW,this);
this.__iJ=qx.lang.Function.listener(this.__iR,this);
this.__iK=qx.lang.Function.listener(this.__iS,this);
this._document.addEventListener(bn,this.__iD,true);
this._document.addEventListener(bl,this.__iE,true);
this._window.addEventListener(bj,this.__iJ,true);
this._window.addEventListener(bk,this.__iK,true);
}}),_stopObserver:qx.core.Variant.select(bq,{"gecko":function(){this._document.removeEventListener(bn,this.__iD,true);
this._document.removeEventListener(bl,this.__iE,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
this._window.removeEventListener(bG,this.__iH,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bh,this.__iD);
qx.bom.Event.removeNativeListener(this._document,bI,this.__iE);
qx.bom.Event.removeNativeListener(this._document,bJ,this.__iJ);
qx.bom.Event.removeNativeListener(this._document,bK,this.__iK);
qx.bom.Event.removeNativeListener(this._document,bH,this.__iI);
},"webkit":function(){this._document.removeEventListener(bn,this.__iD,true);
this._document.removeEventListener(bi,this.__iI,false);
this._window.removeEventListener(bj,this.__iJ,true);
this._window.removeEventListener(bk,this.__iK,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
},"opera":function(){this._document.removeEventListener(bn,this.__iD,true);
this._window.removeEventListener(bj,this.__iJ,true);
this._window.removeEventListener(bk,this.__iK,true);
this._window.removeEventListener(bo,this.__iF,true);
this._window.removeEventListener(bp,this.__iG,true);
}}),__iQ:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){if(!this.__jd(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__iR:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){this.__iP();
var V=e.srcElement;
var U=this.__jb(V);

if(U){this.setFocus(U);
}this.tryActivate(V);
},"opera":function(e){var a=e.target;

if(a==this._document||a==this._window){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(a);
this.tryActivate(a);
if(!this.__jd(a)){a.selectionStart=0;
a.selectionEnd=0;
}}},"default":null})),__iS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){if(!e.toElement){this.__iO();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var H=e.target;

if(H===this.getFocus()){this.resetFocus();
}
if(H===this.getActive()){this.resetActive();
}},"opera":function(e){var f=e.target;

if(f==this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(f===this.getFocus()){this.resetFocus();
}
if(f===this.getActive()){this.resetActive();
}}},"default":null})),__iT:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__iO();
this.__iL=this.getFocus();
this.__iM=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__iU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){var g=e.target;

if(g===this._window||g===this._document){this.__iP();
g=this._body;
}this.setFocus(g);
this.tryActivate(g);
},"webkit":function(e){var r=e.target;

if(r===this._window||r===this._document){this.__iP();

if(this.__iL){this.setFocus(this.__iL);
delete this.__iL;
}
if(this.__iM){this.setActive(this.__iM);
delete this.__iM;
}}else{this.setFocus(r);
this.tryActivate(r);
}},"default":null})),__iV:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"gecko":function(e){var G=this.__jb(e.target);

if(!G){qx.bom.Event.preventDefault(e);
}else if(G===this._body){this.setFocus(G);
}},"mshtml":function(e){var u=e.srcElement;
var t=this.__jb(u);

if(t){if(!this.__jd(u)){u.unselectable=bm;
try{document.selection.empty();
}catch(e){}try{t.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__jd(u)){u.unselectable=bm;
}}},"webkit":function(e){var d=e.target;
var c=this.__jb(d);

if(c){this.setFocus(c);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var j=e.target;
var h=this.__jb(j);

if(!this.__jd(j)){qx.bom.Event.preventDefault(e);
if(h){var i=this.getFocus();

if(i&&i.selectionEnd){i.selectionStart=0;
i.selectionEnd=0;
i.blur();
}if(h){this.setFocus(h);
}}}else if(h){this.setFocus(h);
}},"default":null})),__iW:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml":function(e){var bc=e.srcElement;

if(bc.unselectable){bc.unselectable=bt;
}this.tryActivate(this.__iX(bc));
},"gecko":function(e){var be=e.target;

while(be&&be.offsetWidth===undefined){be=be.parentNode;
}
if(be){this.tryActivate(be);
}},"webkit|opera":function(e){this.tryActivate(this.__iX(e.target));
},"default":null})),__iX:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml|webkit":function(bf){var bg=this.getFocus();

if(bg&&bf!=bg&&(bg.nodeName.toLowerCase()===bx||bg.nodeName.toLowerCase()===bC)){bf=bg;
}return bf;
},"default":function(s){return s;
}})),__iY:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bq,{"mshtml|webkit":function(e){var bL=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__jd(bL)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ja:function(D){var E=qx.bom.element.Attribute.get(D,bw);

if(E>=1){return true;
}var F=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(E>=0&&F[D.tagName]){return true;
}return false;
},__jb:function(bM){while(bM&&bM.nodeType===1){if(bM.getAttribute(bz)==bm){return null;
}
if(this.__ja(bM)){return bM;
}bM=bM.parentNode;
}return this._body;
},__jc:function(I){var J=I;

while(I&&I.nodeType===1){if(I.getAttribute(bA)==bm){return null;
}I=I.parentNode;
}return J;
},__jd:function(p){while(p&&p.nodeType===1){var q=p.getAttribute(bv);

if(q!=null){return q===bm;
}p=p.parentNode;
}return true;
},_applyActive:function(L,M){if(M){this.__iN(M,L,bD,true);
}
if(L){this.__iN(L,M,bu,true);
}},_applyFocus:function(m,n){if(n){this.__iN(n,m,bs,true);
}
if(m){this.__iN(m,n,by,true);
}if(n){this.__iN(n,m,bp,false);
}
if(m){this.__iN(m,n,bo,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__je=null;
},defer:function(v){qx.event.Registration.addHandler(v);
var w=v.FOCUSABLE_ELEMENTS;

for(var x in w){w[x.toUpperCase()]=1;
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
qx.Class.define(e,{statics:{__gk:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__gk.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(K,name){var M=this.__gk;
var L;
name=M.names[name]||name;
if(M.original[name]){L=K.getAttribute(name,2);
}else if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
},"default":function(D,name){var F=this.__gk;
var E;
name=F.names[name]||name;
if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
}}),set:function(H,name,I){var J=this.__gk;
name=J.names[name]||name;
if(J.bools[name]){I=!!I;
}if(J.property[name]&&(!(H[name]===undefined)||J.qxProperties[name])){if(I==null){if(J.removeableProperties[name]){H.removeAttribute(name);
return;
}else if(typeof J.propertyDefault[name]!==i){I=J.propertyDefault[name];
}}H[name]=I;
}else{if(I===true){H.setAttribute(name,name);
}else if(I===false||I===null){H.removeAttribute(name);
}else{H.setAttribute(name,I);
}}},reset:function(G,name){this.set(G,name,null);
}}});
})();
(function(){var n="left",m="right",l="middle",k="qx.client",j="dblclick",i="click",h="none",g="contextmenu",f="qx.event.type.Mouse";
qx.Class.define(f,{extend:qx.event.type.Dom,members:{init:function(a,b,c,d,e){qx.event.type.Dom.prototype.init.call(this,a,b,c,d,e);

if(!c){this._relatedTarget=qx.bom.Event.getRelatedTarget(a);
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
},__jq:qx.core.Variant.select(k,{"mshtml":{1:n,2:m,4:l},"default":{0:n,2:m,1:l}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case i:case j:return n;
case g:return m;
default:return this.__jq[this._native.button]||h;
}},isLeftPressed:function(){return this.getButton()===n;
},isMiddlePressed:function(){return this.getButton()===l;
},isRightPressed:function(){return this.getButton()===m;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(k,{"mshtml":function(){var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(k,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
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
qx.Class.define(a,{statics:{getWidth:qx.core.Variant.select(b,{"opera":function(s){if(qx.bom.client.Engine.VERSION<9.5){return (s||window).document.body.clientWidth;
}else{var t=(s||window).document;
return qx.bom.Document.isStandardMode(s)?t.documentElement.clientWidth:t.body.clientWidth;
}},"webkit":function(c){if(qx.bom.client.Engine.VERSION<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(b,{"opera":function(i){if(qx.bom.client.Engine.VERSION<9.5){return (i||window).document.body.clientHeight;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientHeight:j.body.clientHeight;
}},"webkit":function(e){if(qx.bom.client.Engine.VERSION<523.15){return (e||window).innerHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},"default":function(l){var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(b,{"mshtml":function(g){var h=(g||window).document;
return h.documentElement.scrollTop||h.body.scrollTop;
},"default":function(k){return (k||window).pageYOffset;
}})}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(q){if(qx.bom.client.Engine.VERSION>=8){return (q||window).document.documentMode===5;
}else{return (q||window).document.compatMode!==f;
}},"webkit":function(n){if(document.compatMode===undefined){var o=(n||window).document.createElement(a);
o.style.cssText=e;
return o.style.width===c?true:false;
}else{return (n||window).document.compatMode!==f;
}},"default":function(m){return (m||window).document.compatMode!==f;
}}),isStandardMode:function(p){return !this.isQuirksMode(p);
},getWidth:function(g){var h=(g||window).document;
var i=qx.bom.Viewport.getWidth(g);
var scroll=this.isStandardMode(g)?h.documentElement.scrollWidth:h.body.scrollWidth;
return Math.max(scroll,i);
},getHeight:function(j){var k=(j||window).document;
var l=qx.bom.Viewport.getHeight(j);
var scroll=this.isStandardMode(j)?k.documentElement.scrollHeight:k.body.scrollHeight;
return Math.max(scroll,l);
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__kp:function(A){var B=navigator.userAgent;
var D=new RegExp(s+A+d);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(B.indexOf(a)!==-1||B.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
C=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(y){y.__kp(o);
},"gecko":function(z){z.__kp(k);
},"mshtml":function(G){G.__kp(v);
},"opera":function(F){F.__kp(p);
}})});
})();
(function(){var R="qx.client",Q="qx.dom.Hierarchy",P="previousSibling",O="*",N="nextSibling",M="parentNode";
qx.Class.define(Q,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(p){var q=0;
var r=qx.dom.Node.ELEMENT;

while(p&&(p=p.previousSibling)){if(p.nodeType==r){q++;
}}return q;
},getNextElementSibling:function(S){while(S&&(S=S.nextSibling)&&!qx.dom.Node.isElement(S)){continue;
}return S||null;
},getPreviousElementSibling:function(C){while(C&&(C=C.previousSibling)&&!qx.dom.Node.isElement(C)){continue;
}return C||null;
},contains:qx.core.Variant.select(R,{"webkit|mshtml|opera":function(H,I){if(qx.dom.Node.isDocument(H)){var J=qx.dom.Node.getDocument(I);
return H&&J==H;
}else if(qx.dom.Node.isDocument(I)){return false;
}else{return H.contains(I);
}},"gecko":function(D,E){return !!(D.compareDocumentPosition(E)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:function(F){if(!F.offsetParent){return false;
}var G=F.ownerDocument||F.document;
if(G.body.contains){return G.body.contains(F);
}if(G.compareDocumentPosition){return !!(G.compareDocumentPosition(F)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(g,h){return this.contains(h,g);
},getCommonParent:qx.core.Variant.select(R,{"mshtml|opera":function(m,n){if(m===n){return m;
}
while(m&&qx.dom.Node.isElement(m)){if(m.contains(n)){return m;
}m=m.parentNode;
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
}}),getAncestors:function(T){return this._recursivelyCollect(T,M);
},getChildElements:function(K){K=K.firstChild;

if(!K){return [];
}var L=this.getNextSiblings(K);

if(K.nodeType===1){L.unshift(K);
}return L;
},getDescendants:function(u){return qx.lang.Array.fromCollection(u.getElementsByTagName(O));
},getFirstDescendant:function(z){z=z.firstChild;

while(z&&z.nodeType!=1){z=z.nextSibling;
}return z;
},getLastDescendant:function(l){l=l.lastChild;

while(l&&l.nodeType!=1){l=l.previousSibling;
}return l;
},getPreviousSiblings:function(o){return this._recursivelyCollect(o,P);
},getNextSiblings:function(V){return this._recursivelyCollect(V,N);
},_recursivelyCollect:function(i,j){var k=[];

while(i=i[j]){if(i.nodeType==1){k.push(i);
}}return k;
},getSiblings:function(v){return this.getPreviousSiblings(v).reverse().concat(this.getNextSiblings(v));
},isEmpty:function(U){U=U.firstChild;

while(U){if(U.nodeType===qx.dom.Node.ELEMENT||U.nodeType===qx.dom.Node.TEXT){return false;
}U=U.nextSibling;
}return true;
},cleanWhitespace:function(w){var x=w.firstChild;

while(x){var y=x.nextSibling;

if(x.nodeType==3&&!/\S/.test(x.nodeValue)){w.removeChild(x);
}x=y;
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
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var l=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(l);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(i){this.getManager().addType(i);
},addAction:function(e){this.getManager().addAction(e);
},supportsType:function(n){return this.getManager().supportsType(n);
},supportsAction:function(h){return this.getManager().supportsAction(h);
},addData:function(f,g){this.getManager().addData(f,g);
},getData:function(m){return this.getManager().getData(m);
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
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fE:null,__fF:null,__fG:true,__fD:null,_getParent:function(u){return u.parentNode;
},canDispatchEvent:function(a,event,b){return (this.__fF&&this.__fH[b]);
},dispatchEvent:function(p,event,q){if(q==f){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fG||!qx.dom.Hierarchy.contains(this.__fF,p)){p=this.__fF;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,p,event,q);
},__fH:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fF===l&&this.__fG==m){return;
}
if(this.__fF){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,j,function(){qx.bom.Event.removeNativeListener(l,j,arguments.callee);
self.releaseCapture();
});
}this.__fG=m;
this.__fF=l;
this.__fE.fireEvent(l,d,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fF;
},releaseCapture:function(){var v=this.__fF;

if(!v){return;
}this.__fF=null;
this.__fE.fireEvent(v,j,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(v);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(i,{"mshtml":function(r,s){r.setCapture(s!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(i,{"mshtml":function(t){t.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fF=this.__fD=this.__fE=null;
},defer:function(k){qx.event.Registration.addDispatcher(k);
}});
})();
(function(){var t="qx.client",s="",r="mshtml",q="'",p="SelectionLanguage",o="qx.xml.Document",n=" />",m="MSXML2.DOMDocument.3.0",k='<\?xml version="1.0" encoding="utf-8"?>\n<',j="MSXML2.XMLHTTP.3.0",e="MSXML2.XMLHTTP.6.0",h=" xmlns='",g="text/xml",d="XPath",c="MSXML2.DOMDocument.6.0",f="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(D){if(D.nodeType===9){return D.documentElement.nodeName!==f;
}else if(D.ownerDocument){return this.isXmlDocument(D.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(t,{"mshtml":function(u,v){var w=new ActiveXObject(this.DOMDOC);
w.setProperty(p,d);

if(v){var x=k;
x+=v;

if(u){x+=h+u+q;
}x+=n;
w.loadXML(x);
}return w;
},"default":function(E,F){return document.implementation.createDocument(E||s,F||s,null);
}}),fromString:qx.core.Variant.select(t,{"mshtml":function(a){var b=qx.xml.Document.create();
b.loadXML(a);
return b;
},"default":function(y){var z=new DOMParser();
return z.parseFromString(y,g);
}})},defer:function(A){if(qx.core.Variant.isSet(t,r)){var B=[c,m];
var C=[e,j];

for(var i=0,l=B.length;i<l;i++){try{new ActiveXObject(B[i]);
new ActiveXObject(C[i]);
}catch(G){continue;
}A.DOMDOC=B[i];
A.XMLHTTP=C[i];
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
if(qx.bom.client.Engine.GECKO||qx.bom.client.Engine.OPERA){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var bC="",bB="qx.client",bA="hidden",bz="-moz-scrollbars-none",by="overflow",bx=";",bw="overflowY",bv=":",bu="overflowX",bt="overflow:",bO="none",bN="scroll",bM="borderLeftStyle",bL="borderRightStyle",bK="div",bJ="borderRightWidth",bI="overflow-y",bH="borderLeftWidth",bG="-moz-scrollbars-vertical",bF="100px",bD="qx.bom.element.Overflow",bE="overflow-x";
qx.Class.define(bD,{statics:{__jw:null,getScrollbarWidth:function(){if(this.__jw!==null){return this.__jw;
}var bf=qx.bom.element.Style;
var bh=function(m,n){return parseInt(bf.get(m,n))||0;
};
var bi=function(be){return (bf.get(be,bL)==bO?0:bh(be,bJ));
};
var bg=function(bU){return (bf.get(bU,bM)==bO?0:bh(bU,bH));
};
var bk=qx.core.Variant.select(bB,{"mshtml":function(i){if(bf.get(i,bw)==bA||i.clientWidth==0){return bi(i);
}return Math.max(0,i.offsetWidth-i.clientLeft-i.clientWidth);
},"default":function(M){if(M.clientWidth==0){var N=bf.get(M,by);
var O=(N==bN||N==bG?16:0);
return Math.max(0,bi(M)+O);
}return Math.max(0,(M.offsetWidth-M.clientWidth-bg(M)));
}});
var bj=function(bs){return bk(bs)-bi(bs);
};
var t=document.createElement(bK);
var s=t.style;
s.height=s.width=bF;
s.overflow=bN;
document.body.appendChild(t);
var c=bj(t);
this.__jw=c?c:16;
document.body.removeChild(t);
return this.__jw;
},_compile:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==bA){br=bz;
}return bt+br+bx;
}:
function(S,T){return S+bv+T+bx;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(ce,cf){return bt+cf+bx;
}:
function(bR,bS){return bR+bv+bS+bx;
},"default":function(o,p){return o+bv+p+bx;
}}),compileX:function(l){return this._compile(bE,l);
},compileY:function(bn){return this._compile(bI,bn);
},getX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(W,X){var Y=qx.bom.element.Style.get(W,by,X,false);

if(Y===bz){Y=bA;
}return Y;
}:
function(j,k){return qx.bom.element.Style.get(j,bu,k,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return qx.bom.element.Style.get(bc,by,bd,false);
}:
function(ba,bb){return qx.bom.element.Style.get(ba,bu,bb,false);
},"default":function(bo,bp){return qx.bom.element.Style.get(bo,bu,bp,false);
}}),setX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(w,x){if(x==bA){x=bz;
}w.style.overflow=x;
}:
function(P,Q){P.style.overflowX=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(f,g){f.style.overflow=g;
}:
function(bP,bQ){bP.style.overflowX=bQ;
},"default":function(B,C){B.style.overflowX=C;
}}),resetX:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(A){A.style.overflow=bC;
}:
function(H){H.style.overflowX=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){bX.style.overflow=bC;
}:
function(a,b){a.style.overflowX=bC;
},"default":function(bT){bT.style.overflowX=bC;
}}),getY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(E,F){var G=qx.bom.element.Style.get(E,by,F,false);

if(G===bz){G=bA;
}return G;
}:
function(ca,cb){return qx.bom.element.Style.get(ca,bw,cb,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(q,r){return qx.bom.element.Style.get(q,by,r,false);
}:
function(U,V){return qx.bom.element.Style.get(U,bw,V,false);
},"default":function(bV,bW){return qx.bom.element.Style.get(bV,bw,bW,false);
}}),setY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u,v){if(v===bA){v=bz;
}u.style.overflow=v;
}:
function(bl,bm){bl.style.overflowY=bm;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){cc.style.overflow=cd;
}:
function(y,z){y.style.overflowY=z;
},"default":function(I,J){I.style.overflowY=J;
}}),resetY:qx.core.Variant.select(bB,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(D){D.style.overflow=bC;
}:
function(R){R.style.overflowY=bC;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(K,L){K.style.overflow=bC;
}:
function(d,e){d.style.overflowY=bC;
},"default":function(h){h.style.overflowY=bC;
}})}});
})();
(function(){var u="auto",t="px",s=",",r="clip:auto;",q="rect(",p=");",o="",n=")",m="qx.bom.element.Clip",l="string",i="rect(auto)",k="clip:rect(",j="clip",h="rect(auto,auto,auto,auto)";
qx.Class.define(m,{statics:{compile:function(E){if(!E){return r;
}var J=E.left;
var top=E.top;
var I=E.width;
var H=E.height;
var F,G;

if(J==null){F=(I==null?u:I+t);
J=u;
}else{F=(I==null?u:J+I+t);
J=J+t;
}
if(top==null){G=(H==null?u:H+t);
top=u;
}else{G=(H==null?u:top+H+t);
top=top+t;
}return k+top+s+F+s+G+s+J+p;
},get:function(v,w){var y=qx.bom.element.Style.get(v,j,w,false);
var D,top,B,A;
var x,z;

if(typeof y===l&&y!==u&&y!==o){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var C=RegExp.$1.split(s);
top=qx.lang.String.trim(C[0]);
x=qx.lang.String.trim(C[1]);
z=qx.lang.String.trim(C[2]);
D=qx.lang.String.trim(C[3]);
if(D===u){D=null;
}
if(top===u){top=null;
}
if(x===u){x=null;
}
if(z===u){z=null;
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
},set:function(a,b){if(!b){a.style.clip=h;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?u:f+t);
g=u;
}else{c=(f==null?u:g+f+t);
g=g+t;
}
if(top==null){d=(e==null?u:e+t);
top=u;
}else{d=(e==null?u:top+e+t);
top=top+t;
}a.style.clip=q+top+s+c+s+d+s+g+n;
},reset:function(K){K.style.clip=qx.bom.client.Engine.MSHTML?i:u;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="",f="cursor:",e="qx.client",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__eg:qx.core.Variant.select(e,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(q){return f+(this.__eg[q]||q)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__eg[p]||p;
},reset:function(l){l.style.cursor=g;
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(A){if(A>=1){return m;
}
if(A<0.00001){A=0;
}return d+(A*100)+f;
},"gecko":function(w){if(w==1){w=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+w+k;
}else{return i+w+k;
}},"default":function(F){if(F==1){return m;
}return i+F+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(x,y){var z=qx.bom.element.Style.get(x,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(y>=1){x.style.filter=z.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(y<0.00001){y=0;
}if(!x.currentStyle||!x.currentStyle.hasLayout){x.style.zoom=1;
}x.style.filter=z.replace(/alpha\([^\)]*\)/gi,m)+c+y*100+e;
},"gecko":function(J,K){if(K==1){K=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){J.style.MozOpacity=K;
}else{J.style.opacity=K;
}},"default":function(D,E){if(E==1){E=m;
}D.style.opacity=E;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(B){var C=qx.bom.element.Style.get(B,j,qx.bom.element.Style.COMPUTED_MODE,false);
B.style.filter=C.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(r){if(qx.bom.client.Engine.VERSION<1.7){r.style.MozOpacity=m;
}else{r.style.opacity=m;
}},"default":function(n){n.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(s,t){var u=qx.bom.element.Style.get(s,j,t,false);

if(u){var v=u.match(/alpha\(opacity=(.*)\)/);

if(v&&v[1]){return parseFloat(v[1])/100;
}}return 1.0;
},"gecko":function(G,H){var I=qx.bom.element.Style.get(G,qx.bom.client.Engine.VERSION<1.7?g:h,H,false);

if(I==0.999999){I=1.0;
}
if(I!=null){return parseFloat(I);
}return 1.0;
},"default":function(o,p){var q=qx.bom.element.Style.get(o,h,p,false);

if(q!=null){return parseFloat(q);
}return 1.0;
}})}});
})();
(function(){var s="qx.client",r="",q="qx.debug",p="boxSizing",o="on",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",c="-moz-box-sizing",g="WebkitBoxSizing",f=";",b="-khtml-box-sizing",a="content-box",e="-webkit-box-sizing",d="MozBoxSizing";
qx.Class.define(j,{statics:{__ci:qx.core.Variant.select(s,{"mshtml":null,"webkit":[p,h,g],"gecko":[d],"opera":[p]}),__cj:qx.core.Variant.select(s,{"mshtml":null,"webkit":[n,b,e],"gecko":[c],"opera":[n]}),__ck:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__cl:function(A){var B=this.__ck;
return B.tags[A.tagName.toLowerCase()]||B.types[A.type];
},compile:qx.core.Variant.select(s,{"mshtml":function(C){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
qx.log.Logger.trace();
}},"default":function(G){var I=this.__cj;
var H=r;

if(I){for(var i=0,l=I.length;i<l;i++){H+=I[i]+m+G+f;
}}return H;
}}),get:qx.core.Variant.select(s,{"mshtml":function(D){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(D))){if(!this.__cl(D)){return a;
}}return k;
},"default":function(t){var v=this.__ci;
var u;

if(v){for(var i=0,l=v.length;i<l;i++){u=qx.bom.element.Style.get(t,v[i],null,false);

if(u!=null&&u!==r){return u;
}}}return r;
}}),set:qx.core.Variant.select(s,{"mshtml":function(E,F){if(qx.core.Variant.isSet(q,o)){qx.log.Logger.warn(this,"This client do not support the dynamic modification of the box-sizing property.");
}},"default":function(x,y){var z=this.__ci;

if(z){for(var i=0,l=z.length;i<l;i++){x.style[z[i]]=y;
}}}}),reset:function(w){this.set(w,r);
}}});
})();
(function(){var n="",m="qx.client",k="userSelect",h="qx.debug",g="on",f="Invalid argument 'smart'",e="style",d="Invalid argument 'element'",c="MozUserModify",b="px",M="float",L="borderImage",K="styleFloat",J="appearance",I="pixelHeight",H='Ms',G=":",F="cssFloat",E="pixelTop",D="Invalid argument 'name'",u="pixelLeft",v='O',s="Invalid argument 'styles'",t="qx.bom.element.Style",q='Khtml',r='string',o="pixelRight",p='Moz',w="pixelWidth",x="pixelBottom",z=";",y="textOverflow",B="userModify",A='Webkit',C="WebkitUserModify";
qx.Class.define(t,{statics:{__bS:function(){var N=[J,k,y,L];
var R={};
var O=document.documentElement.style;
var S=[p,A,q,v,H];

for(var i=0,l=N.length;i<l;i++){var T=N[i];
var P=T;

if(O[T]){R[P]=T;
continue;
}T=qx.lang.String.firstUp(T);

for(var j=0,U=S.length;j<U;j++){var Q=S[j]+T;

if(typeof O[Q]==r){R[P]=Q;
break;
}}}this.__bT=R;
this.__bT[B]=qx.core.Variant.select(m,{"gecko":c,"webkit":C,"default":k});
this.__bU={};

for(var P in R){this.__bU[P]=this.__bY(R[P]);
}this.__bT[M]=qx.core.Variant.select(m,{"mshtml":K,"default":F});
},__bV:{width:w,height:I,left:u,right:o,top:E,bottom:x},__bW:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(bg){var bi=[];
var bk=this.__bW;
var bj=this.__bU;
var name,bh;

for(name in bg){bh=bg[name];

if(bh==null){continue;
}name=bj[name]||name;
if(bk[name]){bi.push(bk[name].compile(bh));
}else{bi.push(this.__bY(name),G,bh,z);
}}return bi.join(n);
},__bX:{},__bY:function(bd){var be=this.__bX;
var bf=be[bd];

if(!bf){bf=be[bd]=qx.lang.String.hyphenate(bd);
}return bf;
},setCss:qx.core.Variant.select(m,{"mshtml":function(bx,by){bx.style.cssText=by;
},"default":function(bA,bB){bA.setAttribute(e,bB);
}}),getCss:qx.core.Variant.select(m,{"mshtml":function(bt){return bt.style.cssText.toLowerCase();
},"default":function(bs){return bs.getAttribute(e);
}}),isPropertySupported:function(a){return (this.__bW[a]||this.__bT[a]||a in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bu,name,bv,bw){if(qx.core.Variant.isSet(h,g)){qx.core.Assert.assertElement(bu,d);
qx.core.Assert.assertString(name,D);

if(bw!==undefined){qx.core.Assert.assertBoolean(bw,f);
}}name=this.__bT[name]||name;
if(bw!==false&&this.__bW[name]){return this.__bW[name].set(bu,bv);
}else{bu.style[name]=bv!==null?bv:n;
}},setStyles:function(bC,bD,bE){if(qx.core.Variant.isSet(h,g)){qx.core.Assert.assertElement(bC,d);
qx.core.Assert.assertMap(bD,s);

if(bE!==undefined){qx.core.Assert.assertBoolean(bE,f);
}}var bH=this.__bT;
var bJ=this.__bW;
var bF=bC.style;

for(var bI in bD){var bG=bD[bI];
var name=bH[bI]||bI;

if(bG===undefined){if(bE!==false&&bJ[name]){bJ[name].reset(bC);
}else{bF[name]=n;
}}else{if(bE!==false&&bJ[name]){bJ[name].set(bC,bG);
}else{bF[name]=bG!==null?bG:n;
}}}},reset:function(bb,name,bc){name=this.__bT[name]||name;
if(bc!==false&&this.__bW[name]){return this.__bW[name].reset(bb);
}else{bb.style[name]=n;
}},get:qx.core.Variant.select(m,{"mshtml":function(bl,name,bm,bn){name=this.__bT[name]||name;
if(bn!==false&&this.__bW[name]){return this.__bW[name].get(bl,bm);
}if(!bl.currentStyle){return bl.style[name]||n;
}switch(bm){case this.LOCAL_MODE:return bl.style[name]||n;
case this.CASCADED_MODE:return bl.currentStyle[name]||n;
default:var br=bl.currentStyle[name]||n;
if(/^-?[\.\d]+(px)?$/i.test(br)){return br;
}var bq=this.__bV[name];

if(bq){var bo=bl.style[name];
bl.style[name]=br||0;
var bp=bl.style[bq]+b;
bl.style[name]=bo;
return bp;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(br)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return br;
}},"default":function(V,name,W,X){name=this.__bT[name]||name;
if(X!==false&&this.__bW[name]){return this.__bW[name].get(V,W);
}switch(W){case this.LOCAL_MODE:return V.style[name]||n;
case this.CASCADED_MODE:if(V.currentStyle){return V.currentStyle[name]||n;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var Y=qx.dom.Node.getDocument(V);
var ba=Y.defaultView.getComputedStyle(V,null);
return ba?ba[name]:n;
}}})},defer:function(bz){bz.__bS();
}});
})();
(function(){var p="borderTopWidth",o="borderLeftWidth",n="marginTop",m="marginLeft",l="scroll",k="qx.client",j="border-box",i="borderBottomWidth",h="borderRightWidth",g="auto",E="padding",D="qx.bom.element.Location",C="paddingLeft",B="static",A="marginBottom",z="visible",y="BODY",x="paddingBottom",w="paddingTop",v="marginRight",t="position",u="margin",r="overflow",s="paddingRight",q="border";
qx.Class.define(D,{statics:{__hx:function(bF,bG){return qx.bom.element.Style.get(bF,bG,qx.bom.element.Style.COMPUTED_MODE,false);
},__hy:function(bA,bB){return parseInt(qx.bom.element.Style.get(bA,bB,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__hz:function(X){var bb=0,top=0;
if(X.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var ba=qx.dom.Node.getWindow(X);
bb-=qx.bom.Viewport.getScrollLeft(ba);
top-=qx.bom.Viewport.getScrollTop(ba);
}else{var Y=qx.dom.Node.getDocument(X).body;
X=X.parentNode;
while(X&&X!=Y){bb+=X.scrollLeft;
top+=X.scrollTop;
X=X.parentNode;
}}return {left:bb,top:top};
},__hA:qx.core.Variant.select(k,{"mshtml":function(br){var bt=qx.dom.Node.getDocument(br);
var bs=bt.body;
var bu=0;
var top=0;
bu-=bs.clientLeft+bt.documentElement.clientLeft;
top-=bs.clientTop+bt.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bu+=this.__hy(bs,o);
top+=this.__hy(bs,p);
}return {left:bu,top:top};
},"webkit":function(bn){var bp=qx.dom.Node.getDocument(bn);
var bo=bp.body;
var bq=bo.offsetLeft;
var top=bo.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){bq+=this.__hy(bo,o);
top+=this.__hy(bo,p);
}return {left:bq,top:top};
},"gecko":function(bx){var by=qx.dom.Node.getDocument(bx).body;
var bz=by.offsetLeft;
var top=by.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bz+=this.__hy(by,m);
top+=this.__hy(by,n);
}if(qx.bom.element.BoxSizing.get(by)!==j){bz+=this.__hy(by,o);
top+=this.__hy(by,p);
}return {left:bz,top:top};
},"default":function(bC){var bD=qx.dom.Node.getDocument(bC).body;
var bE=bD.offsetLeft;
var top=bD.offsetTop;
return {left:bE,top:top};
}}),__hB:qx.core.Variant.select(k,{"mshtml|webkit":function(bH){var bJ=qx.dom.Node.getDocument(bH);
if(bH.getBoundingClientRect){var bK=bH.getBoundingClientRect();
var bL=bK.left;
var top=bK.top;
}else{var bL=bH.offsetLeft;
var top=bH.offsetTop;
bH=bH.offsetParent;
var bI=bJ.body;
while(bH&&bH!=bI){bL+=bH.offsetLeft;
top+=bH.offsetTop;
bL+=this.__hy(bH,o);
top+=this.__hy(bH,p);
bH=bH.offsetParent;
}}return {left:bL,top:top};
},"gecko":function(N){if(N.getBoundingClientRect){var Q=N.getBoundingClientRect();
var R=Math.round(Q.left);
var top=Math.round(Q.top);
}else{var R=0;
var top=0;
var O=qx.dom.Node.getDocument(N).body;
var P=qx.bom.element.BoxSizing;

if(P.get(N)!==j){R-=this.__hy(N,o);
top-=this.__hy(N,p);
}
while(N&&N!==O){R+=N.offsetLeft;
top+=N.offsetTop;
if(P.get(N)!==j){R+=this.__hy(N,o);
top+=this.__hy(N,p);
}if(N.parentNode&&this.__hx(N.parentNode,r)!=z){R+=this.__hy(N.parentNode,o);
top+=this.__hy(N.parentNode,p);
}N=N.offsetParent;
}}return {left:R,top:top};
},"default":function(U){var W=0;
var top=0;
var V=qx.dom.Node.getDocument(U).body;
while(U&&U!==V){W+=U.offsetLeft;
top+=U.offsetTop;
U=U.offsetParent;
}return {left:W,top:top};
}}),get:function(bc,bd){if(bc.tagName==y){var location=this.__hC(bc);
var bk=location.left;
var top=location.top;
}else{var be=this.__hA(bc);
var bj=this.__hB(bc);
var scroll=this.__hz(bc);
var bk=bj.left+be.left-scroll.left;
var top=bj.top+be.top-scroll.top;
}var bf=bk+bc.offsetWidth;
var bg=top+bc.offsetHeight;

if(bd){if(bd==E||bd==l){var bh=qx.bom.element.Overflow.getX(bc);

if(bh==l||bh==g){bf+=bc.scrollWidth-bc.offsetWidth+this.__hy(bc,o)+this.__hy(bc,h);
}var bi=qx.bom.element.Overflow.getY(bc);

if(bi==l||bi==g){bg+=bc.scrollHeight-bc.offsetHeight+this.__hy(bc,p)+this.__hy(bc,i);
}}
switch(bd){case E:bk+=this.__hy(bc,C);
top+=this.__hy(bc,w);
bf-=this.__hy(bc,s);
bg-=this.__hy(bc,x);
case l:bk-=bc.scrollLeft;
top-=bc.scrollTop;
bf-=bc.scrollLeft;
bg-=bc.scrollTop;
case q:bk+=this.__hy(bc,o);
top+=this.__hy(bc,p);
bf-=this.__hy(bc,h);
bg-=this.__hy(bc,i);
break;
case u:bk-=this.__hy(bc,m);
top-=this.__hy(bc,n);
bf+=this.__hy(bc,v);
bg+=this.__hy(bc,A);
break;
}}return {left:bk,top:top,right:bf,bottom:bg};
},__hC:qx.core.Variant.select(k,{"default":function(bl){var top=bl.offsetTop+this.__hy(bl,n);
var bm=bl.offsetLeft+this.__hy(bl,m);
return {left:bm,top:top};
},"mshtml":function(d){var top=d.offsetTop;
var e=d.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__hy(d,n);
e+=this.__hy(d,m);
}return {left:e,top:top};
},"gecko":function(bO){var top=bO.offsetTop+this.__hy(bO,n)+this.__hy(bO,o);
var bP=bO.offsetLeft+this.__hy(bO,m)+this.__hy(bO,p);
return {left:bP,top:top};
}}),getLeft:function(bv,bw){return this.get(bv,bw).left;
},getTop:function(S,T){return this.get(S,T).top;
},getRight:function(F,G){return this.get(F,G).right;
},getBottom:function(bM,bN){return this.get(bM,bN).bottom;
},getRelative:function(H,I,J,K){var M=this.get(H,J);
var L=this.get(I,K);
return {left:M.left-L.left,top:M.top-L.top,right:M.right-L.right,bottom:M.bottom-L.bottom};
},getPosition:function(f){return this.getRelative(f,this.getOffsetParent(f));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,t)===B)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var q="qx.client",p="character",o="EndToEnd",n="input",m="textarea",l="StartToStart",k='character',j="qx.bom.Selection",i="button",h="#text",g="body";
qx.Class.define(j,{statics:{getSelectionObject:qx.core.Variant.select(q,{"mshtml":function(bm){return bm.selection;
},"default":function(z){return qx.dom.Node.getWindow(z).getSelection();
}}),get:qx.core.Variant.select(q,{"mshtml":function(bs){var bt=qx.bom.Range.get(qx.dom.Node.getDocument(bs));
return bt.text;
},"default":function(by){if(this.__jP(by)){return by.value.substring(by.selectionStart,by.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(by)).toString();
}}}),getLength:qx.core.Variant.select(q,{"mshtml":function(r){var t=this.get(r);
var s=qx.util.StringSplit.split(t,/\r\n/);
return t.length-(s.length-1);
},"opera":function(a){var f,d,b;

if(this.__jP(a)){var e=a.selectionStart;
var c=a.selectionEnd;
f=a.value.substring(e,c);
d=c-e;
}else{f=qx.bom.Selection.get(a);
d=f.length;
}b=qx.util.StringSplit.split(f,/\r\n/);
return d-(b.length-1);
},"default":function(bn){if(this.__jP(bn)){return bn.selectionEnd-bn.selectionStart;
}else{return this.get(bn).length;
}}}),getStart:qx.core.Variant.select(q,{"mshtml":function(A){if(this.__jP(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(k,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();
H.moveToElementText(C);
var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(l,G);
B.setEndPoint(o,H);
if(H.compareEndPoints(l,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(p,-1);
if(H.compareEndPoints(l,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(ba){if(this.__jP(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(L){if(this.__jP(L)){return L.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(L)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(q,{"mshtml":function(bd){if(this.__jP(bd)){var bi=qx.bom.Range.get();
if(!bd.contains(bi.parentElement())){return -1;
}var bj=qx.bom.Range.get(bd);
var bh=bd.value.length;
bj.moveToBookmark(bi.getBookmark());
bj.moveStart(k,-bh);
return bj.text.length;
}else{var bj=qx.bom.Range.get(bd);
var bf=bj.parentElement();
var bk=qx.bom.Range.get();
bk.moveToElementText(bf);
var bh=bk.text.length;
var be=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
be.setEndPoint(o,bj);
be.setEndPoint(l,bk);
if(bk.compareEndPoints(o,be)==0){return bh-1;
}var bg;
var bl=0;

while(true){bg=be.moveEnd(p,1);
if(bk.compareEndPoints(o,be)==0){break;
}if(bg==0){break;
}else{bl++;
}}return bh-(++bl);
}},"gecko|webkit":function(bo){if(this.__jP(bo)){return bo.selectionEnd;
}else{var bq=qx.dom.Node.getDocument(bo);
var bp=this.getSelectionObject(bq);
if(bp.focusOffset>bp.anchorOffset){return bp.focusOffset;
}else{return bp.anchorOffset;
}}},"default":function(K){if(this.__jP(K)){return K.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(K)).focusOffset;
}}}),__jP:function(J){return qx.dom.Node.isElement(J)&&(J.nodeName.toLowerCase()==n||J.nodeName.toLowerCase()==m);
},set:qx.core.Variant.select(q,{"mshtml":function(u,v,w){var x;
if(qx.dom.Node.isDocument(u)){u=u.body;
}
if(qx.dom.Node.isElement(u)||qx.dom.Node.isText(u)){switch(u.nodeName.toLowerCase()){case n:case m:case i:if(w===undefined){w=u.value.length;
}
if(v>=0&&v<=u.value.length&&w>=0&&w<=u.value.length){x=qx.bom.Range.get(u);
x.collapse(true);
x.moveStart(p,v);
x.moveEnd(p,w-v);
x.select();
return true;
}break;
case h:if(w===undefined){w=u.nodeValue.length;
}
if(v>=0&&v<=u.nodeValue.length&&w>=0&&w<=u.nodeValue.length){x=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
x.moveToElementText(u.parentNode);
x.collapse(true);
x.moveStart(p,v);
x.moveEnd(p,w-v);
x.select();
return true;
}break;
default:if(w===undefined){w=u.childNodes.length-1;
}if(u.childNodes[v]&&u.childNodes[w]){x=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
x.moveToElementText(u.childNodes[v]);
x.collapse(true);
var y=qx.bom.Range.get(qx.dom.Node.getBodyElement(u));
y.moveToElementText(u.childNodes[w]);
x.setEndPoint(o,y);
x.select();
return true;
}}}return false;
},"default":function(M,N,O){var S=M.nodeName.toLowerCase();

if(qx.dom.Node.isElement(M)&&(S==n||S==m)){if(O===undefined){O=M.value.length;
}if(N>=0&&N<=M.value.length&&O>=0&&O<=M.value.length){M.focus();
M.select();
M.setSelectionRange(N,O);
return true;
}}else{var Q=false;
var R=qx.dom.Node.getWindow(M).getSelection();
var P=qx.bom.Range.get(M);
if(qx.dom.Node.isText(M)){if(O===undefined){O=M.length;
}
if(N>=0&&N<M.length&&O>=0&&O<=M.length){Q=true;
}}else if(qx.dom.Node.isElement(M)){if(O===undefined){O=M.childNodes.length-1;
}
if(N>=0&&M.childNodes[N]&&O>=0&&M.childNodes[O]){Q=true;
}}else if(qx.dom.Node.isDocument(M)){M=M.body;

if(O===undefined){O=M.childNodes.length-1;
}
if(N>=0&&M.childNodes[N]&&O>=0&&M.childNodes[O]){Q=true;
}}
if(Q){if(!R.isCollapsed){R.collapseToStart();
}P.setStart(M,N);
if(qx.dom.Node.isText(M)){P.setEnd(M,O);
}else{P.setEndAfter(M.childNodes[O]);
}if(R.rangeCount>0){R.removeAllRanges();
}R.addRange(P);
return true;
}}return false;
}}),setAll:function(br){return qx.bom.Selection.set(br,0);
},clear:qx.core.Variant.select(q,{"mshtml":function(bu){var bv=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bu));
var bw=qx.bom.Range.get(bu);
var parent=bw.parentElement();
var bx=qx.bom.Range.get(qx.dom.Node.getDocument(bu));
if(parent==bx.parentElement()&&parent==bu){bv.empty();
}},"default":function(T){var V=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(T));
var X=T.nodeName.toLowerCase();
if(qx.dom.Node.isElement(T)&&(X==n||X==m)){T.setSelectionRange(0,0);
qx.bom.Element.blur(T);
}else if(qx.dom.Node.isDocument(T)||X==g){V.collapse(T.body?T.body:T,0);
}else{var W=qx.bom.Range.get(T);

if(!W.collapsed){var Y;
var U=W.commonAncestorContainer;
if(qx.dom.Node.isElement(T)&&qx.dom.Node.isText(U)){Y=U.parentNode;
}else{Y=U;
}
if(Y==T){V.collapse(T,0);
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
},add:function(d){var e=this.__hq;

if(e[d.$$hash]){return;
}e[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hq;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__hq={};
}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hc:{},__hd:{},remove:function(g){var h=g.$$hash;
delete this.__hd[h];
delete this.__hc[h];
},isVisible:function(i){return this.__hd[i.$$hash]||false;
},__he:function(c){var e=this.__hd;
var d=c.$$hash;
var f;
if(c.isExcluded()){f=false;
}else{var parent=c.$$parent;

if(parent){f=this.__he(parent);
}else{f=c.isRootWidget();
}}return e[d]=f;
},add:function(j){var k=this.__hc;

if(k[j.$$hash]){return;
}k[j.$$hash]=j;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var l=this.__hc;
var p=this.__hd;
for(var m in l){if(p[m]!=null){l[m].addChildrenToQueue(l);
}}var o={};

for(var m in l){o[m]=p[m];
p[m]=null;
}for(var m in l){var n=l[m];
delete l[m];
if(p[m]==null){this.__he(n);
}if(p[m]&&p[m]!=o[m]){n.checkAppearanceNeeds();
}}this.__hc={};
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gz:{},remove:function(d){delete this.__gz[d.$$hash];
},add:function(i){var j=this.__gz;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(c){return !!this.__gz[c.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__gz;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__em:{},add:function(f){var g=this.__em;

if(g[f.$$hash]){return;
}g[f.$$hash]=f;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var c=this.__em;

for(var e in c){var d=c[e];
delete c[e];
d.dispose();
}for(var e in c){return;
}this.__em={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(d,e){var f={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){f.pointerEvents=c;
}qx.html.Element.call(this,null,f);
this.__jf=d;
this.__jg=e||d.toHashCode();
this.useMarkup(d.getMarkup());
},members:{__jg:null,__jf:null,getId:function(){return this.__jg;
},getDecorator:function(){return this.__jf;
},resize:function(g,h){this.__jf.resize(this.getDomElement(),g,h);
},tint:function(i){this.__jf.tint(this.getDomElement(),i);
},getInsets:function(){return this.__jf.getInsets();
}},destruct:function(){this.__jf=null;
}});
})();
(function(){var w="blur",v="focus",u="input",t="load",s="qx.ui.core.EventHandler",r="activate";
qx.Class.define(s,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dE=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__dE:null,__dF:{focusin:1,focusout:1,focus:1,blur:1},__dG:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(G,H){return G instanceof qx.ui.core.Widget;
},_dispatchEvent:function(a){var f=a.getTarget();
var e=qx.ui.core.Widget.getWidgetByElement(f);
var g=false;

while(e&&e.isAnonymous()){var g=true;
e=e.getLayoutParent();
}if(e&&g&&a.getType()==r){e.getContainerElement().activate();
}if(this.__dF[a.getType()]){e=e&&e.getFocusTarget();
if(!e){return;
}}if(a.getRelatedTarget){var p=a.getRelatedTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}
if(o){if(this.__dF[a.getType()]){o=o.getFocusTarget();
}if(o===e){return;
}}}var j=a.getCurrentTarget();
var m=qx.ui.core.Widget.getWidgetByElement(j);

if(!m||m.isAnonymous()){return;
}if(this.__dF[a.getType()]){m=m.getFocusTarget();
}var n=a.getType();

if(!m||!(m.isEnabled()||this.__dG[n])){return;
}var b=a.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var h=this.__dE.getListeners(m,n,b);

if(!h||h.length===0){return;
}var c=qx.event.Pool.getInstance().getObject(a.constructor);
a.clone(c);
c.setTarget(e);
c.setRelatedTarget(o||null);
c.setCurrentTarget(m);
var q=a.getOriginalTarget();

if(q){var d=qx.ui.core.Widget.getWidgetByElement(q);

while(d&&d.isAnonymous()){d=d.getLayoutParent();
}c.setOriginalTarget(d);
}else{c.setOriginalTarget(f);
}for(var i=0,l=h.length;i<l;i++){var k=h[i].context||m;
h[i].handler.call(k,c);
}if(c.getPropagationStopped()){a.stopPropagation();
}
if(c.getDefaultPrevented()){a.preventDefault();
}qx.event.Pool.getInstance().poolObject(c);
},registerEvent:function(C,D,E){var F;

if(D===v||D===w){F=C.getFocusElement();
}else if(D===t||D===u){F=C.getContentElement();
}else{F=C.getContainerElement();
}
if(F){F.addListener(D,this._dispatchEvent,this,E);
}},unregisterEvent:function(x,y,z){var A;

if(y===v||y===w){A=x.getFocusElement();
}else if(y===t||y===u){A=x.getContentElement();
}else{A=x.getContainerElement();
}
if(A){A.removeListener(y,this._dispatchEvent,this,z);
}}},destruct:function(){this.__dE=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var c="abstract",b="qx.debug",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:c,extend:qx.core.Object,members:{__fI:null,_invalidChildrenCache:null,__fJ:null,invalidateLayoutCache:function(){this.__fI=null;
},renderLayout:function(i,j){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__fI){return this.__fI;
}return this.__fI=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(d){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:qx.core.Variant.select(b,{"on":function(e,name,f){},"off":null}),_clearSeparators:function(){var l=this.__fJ;

if(l instanceof qx.ui.core.LayoutItem){l.clearSeparators();
}},_renderSeparator:function(g,h){this.__fJ.renderSeparator(g,h);
},connectToWidget:function(k){if(k&&this.__fJ){throw new Error("It is not possible to manually set the connected widget.");
}this.__fJ=k;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__fJ;
},_applyLayoutChange:function(){if(this.__fJ){this.__fJ.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__fJ.getLayoutChildren();
}},destruct:function(){this.__fJ=this.__fI=null;
}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__bP:qx.$$resources||{},__bQ:{}},members:{has:function(w){return !!this.self(arguments).__bP[w];
},getData:function(x){return this.self(arguments).__bP[x]||null;
},getImageWidth:function(y){var z=this.self(arguments).__bP[y];
return z?z[0]:null;
},getImageHeight:function(A){var B=this.self(arguments).__bP[A];
return B?B[1]:null;
},getImageFormat:function(u){var v=this.self(arguments).__bP[u];
return v?v[2]:null;
},isClippedImage:function(s){var t=this.self(arguments).__bP[s];
return t&&t.length>4;
},toUri:function(o){if(o==null){return o;
}var p=this.self(arguments).__bP[o];

if(!p){return o;
}
if(typeof p===c){var r=p;
}else{var r=p[3];
if(!r){return o;
}}var q=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){q=this.self(arguments).__bQ[r];
}return q+qx.$$libraries[r].resourceUri+h+o;
}},defer:function(i){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var m in qx.$$libraries){var k;

if(qx.$$libraries[m].resourceUri){k=qx.$$libraries[m].resourceUri;
}else{i.__bQ[m]=f;
continue;
}if(k.match(/^\/\//)!=null){i.__bQ[m]=window.location.protocol;
}else if(k.match(/^\.\//)!=null){var j=document.URL;
i.__bQ[m]=j.substring(0,j.lastIndexOf(h)+1);
}else if(k.match(/^http/)!=null){}else{var n=window.location.href.indexOf(d);
var l;

if(n==-1){l=window.location.href;
}else{l=window.location.href.substring(0,n);
}i.__bQ[m]=l.substring(0,l.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__ko:function(){var e=(navigator.userLanguage||navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__ko();
}});
})();
(function(){var v="",u='indexOf',t='slice',s='concat',r='toLocaleLowerCase',q="qx.type.BaseString",p='match',o="qx.debug",n='search',m='replace',d='toLowerCase',k='charCodeAt',g='split',c='substring',b='lastIndexOf',f="on",e='substr',h='toLocaleUpperCase',a='toUpperCase',j='charAt';
qx.Class.define(q,{extend:Object,construct:function(B){var B=B||v;
this.__kM=B;
this.length=B.length;
},members:{$$isString:true,length:0,__kM:null,toString:function(){return this.__kM;
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
this.__dH=c;
this.__dI=d;
},members:{__dH:null,__dI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__dH,this.__dI);
}}});
})();
(function(){var k="_",j="",h="_applyLocale",g="changeLocale",f="C",e="qx.dynlocale",d="on",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hD=qx.$$translations||{};
this.__hE=qx.$$locales||{};
var T=qx.bom.client.Locale;
var R=T.LOCALE;
var S=T.VARIANT;

if(S!==j){R+=k+S;
}this.setLocale(R||this.__hF);
},statics:{tr:function(l,m){var n=qx.lang.Array.fromArguments(arguments);
n.splice(0,1);
return qx.locale.Manager.getInstance().translate(l,n);
},trn:function(E,F,G,H){var I=qx.lang.Array.fromArguments(arguments);
I.splice(0,3);
if(G!=1){return qx.locale.Manager.getInstance().translate(F,I);
}else{return qx.locale.Manager.getInstance().translate(E,I);
}},trc:function(K,L,M){var N=qx.lang.Array.fromArguments(arguments);
N.splice(0,2);
return qx.locale.Manager.getInstance().translate(L,N);
},marktr:function(J){return J;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hF:f,__hG:null,__hH:null,__hD:null,__hE:null,getLanguage:function(){return this.__hH;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var V=[];

for(var U in this.__hE){if(U!=this.__hF){V.push(U);
}}return V;
},__hI:function(O){var Q;
var P=O.indexOf(k);

if(P==-1){Q=O;
}else{Q=O.substring(0,P);
}return Q;
},_applyLocale:function(bf,bg){this.__hG=bf;
this.__hH=this.__hI(bf);
},addTranslation:function(s,t){var u=this.__hD;

if(u[s]){for(var v in t){u[s][v]=t[v];
}}else{u[s]=t;
}},addLocale:function(W,X){var Y=this.__hE;

if(Y[W]){for(var ba in X){Y[W][ba]=X[ba];
}}else{Y[W]=X;
}},translate:function(bb,bc,bd){var be=this.__hD;
return this.__hJ(be,bb,bc,bd);
},localize:function(o,p,q){var r=this.__hE;
return this.__hJ(r,o,p,q);
},__hJ:function(w,x,y,z){var A;

if(!w){return x;
}
if(z){var C=this.__hI(z);
}else{z=this.__hG;
C=this.__hH;
}if(!A&&w[z]){A=w[z][x];
}if(!A&&w[C]){A=w[C][x];
}if(!A&&w[this.__hF]){A=w[this.__hF][x];
}
if(!A){A=x;
}
if(y.length>0){var B=[];

for(var i=0;i<y.length;i++){var D=y[i];

if(D&&D.translate){B[i]=D.translate();
}else{B[i]=D;
}}A=qx.lang.String.format(A,B);
}
if(qx.core.Variant.isSet(e,d)){A=new qx.locale.LocalizedString(A,x,y);
}return A;
}},destruct:function(){this.__hD=this.__hE=null;
}});
})();
(function(){var s="px",r="qx.client",q="div",p="img",o="",n="no-repeat",m="qx.debug",l="scale-x",k="mshtml",j="on",Q="repeat",P="scale",O="scale-y",N="qx/icon",M=".png",L="crop",K="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",J='<div style="',I="repeat-y",H='<img src="',z="qx.bom.element.Decoration",A="', sizingMethod='",x="png",y="')",v='"></div>',w='"/>',t='" style="',u="none",B="webkit",C=" ",E="repeat-x",D="DXImageTransform.Microsoft.AlphaImageLoader",G="qx/static/blank.gif",F="absolute";
qx.Class.define(z,{statics:{DEBUG:false,__gl:{},__gm:qx.core.Variant.isSet(r,k),__gn:qx.core.Variant.select(r,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__go:{"scale-x":p,"scale-y":p,"scale":p,"repeat":q,"no-repeat":q,"repeat-x":q,"repeat-y":q},update:function(bu,bv,bw,bx){var bz=this.getTagName(bw,bv);

if(bz!=bu.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bA=this.getAttributes(bv,bw,bx);

if(bz===p){bu.src=bA.src||qx.util.ResourceManager.getInstance().toUri(G);
}if(bu.style.backgroundPosition!=o&&bA.style.backgroundPosition===undefined){bA.style.backgroundPosition=null;
}if(bu.style.clip!=o&&bA.style.clip===undefined){bA.style.clip=null;
}var by=qx.bom.element.Style;
by.setStyles(bu,bA.style);
if(this.__gm){try{bu.filters[D].apply();
}catch(e){}}},create:function(bo,bp,bq){var br=this.getTagName(bp,bo);
var bt=this.getAttributes(bo,bp,bq);
var bs=qx.bom.element.Style.compile(bt.style);

if(br===p){return H+bt.src+t+bs+w;
}else{return J+bs+v;
}},getTagName:function(bE,bF){if(qx.core.Variant.isSet(r,k)){if(bF&&this.__gm&&this.__gn[bE]&&qx.lang.String.endsWith(bF,M)){return q;
}}return this.__go[bE];
},getAttributes:function(bi,bj,bk){if(!bk){bk={};
}
if(!bk.position){bk.position=F;
}
if(qx.core.Variant.isSet(r,k)){bk.fontSize=0;
bk.lineHeight=0;
}else if(qx.core.Variant.isSet(r,B)){bk.WebkitUserDrag=u;
}var bm=qx.util.ResourceManager.getInstance().getImageFormat(bi)||qx.io.ImageLoader.getFormat(bi);

if(qx.core.Variant.isSet(m,j)){if(bi!=null&&bm==null){qx.log.Logger.warn("ImageLoader: Not recognized format of external image '"+bi+"'!");
}}var bl;
if(this.__gm&&this.__gn[bj]&&bm===x){bl=this.__gr(bk,bj,bi);
}else{if(bj===P){bl=this.__gs(bk,bj,bi);
}else if(bj===l||bj===O){bl=this.__gt(bk,bj,bi);
}else{bl=this.__gw(bk,bj,bi);
}}return bl;
},__gp:function(bB,bC,bD){if(bB.width==null&&bC!=null){bB.width=bC+s;
}
if(bB.height==null&&bD!=null){bB.height=bD+s;
}return bB;
},__gq:function(be){var bf=qx.util.ResourceManager.getInstance().getImageWidth(be)||qx.io.ImageLoader.getWidth(be);
var bh=qx.util.ResourceManager.getInstance().getImageHeight(be)||qx.io.ImageLoader.getHeight(be);
return {width:bf,height:bh};
},__gr:function(bW,bX,bY){var cc=this.__gq(bY);
bW=this.__gp(bW,cc.width,cc.height);
var cb=bX==n?L:P;
var ca=K+qx.util.ResourceManager.getInstance().toUri(bY)+A+cb+y;
bW.filter=ca;
bW.backgroundImage=bW.backgroundRepeat=o;
return {style:bW};
},__gs:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().toUri(bM);
var bO=this.__gq(bM);
bK=this.__gp(bK,bO.width,bO.height);
return {src:bN,style:bK};
},__gt:function(a,b,c){var h=qx.util.ResourceManager.getInstance();
var g=h.isClippedImage(c);
var i=this.__gq(c);

if(g){var f=h.getData(c);
var d=h.toUri(f[4]);

if(b===l){a=this.__gu(a,f,i.height);
}else{a=this.__gv(a,f,i.width);
}return {src:d,style:a};
}else{if(qx.core.Variant.isSet(m,j)){this.__gy(c);
}
if(b==l){a.height=i.height==null?null:i.height+s;
}else if(b==O){a.width=i.width==null?null:i.width+s;
}var d=h.toUri(c);
return {src:d,style:a};
}},__gu:function(bG,bH,bI){var bJ=qx.util.ResourceManager.getInstance().getImageHeight(bH[4]);
bG.clip={top:-bH[6],height:bI};
bG.height=bJ+s;
if(bG.top!=null){bG.top=(parseInt(bG.top,10)+bH[6])+s;
}else if(bG.bottom!=null){bG.bottom=(parseInt(bG.bottom,10)+bI-bJ-bH[6])+s;
}return bG;
},__gv:function(ba,bb,bc){var bd=qx.util.ResourceManager.getInstance().getImageWidth(bb[4]);
ba.clip={left:-bb[5],width:bc};
ba.width=bd+s;
if(ba.left!=null){ba.left=(parseInt(ba.left,10)+bb[5])+s;
}else if(ba.right!=null){ba.right=(parseInt(ba.right,10)+bc-bd-bb[5])+s;
}return ba;
},__gw:function(R,S,T){var Y=qx.util.ResourceManager.getInstance().isClippedImage(T);
var X=this.__gq(T);
if(Y&&S!==Q){var W=qx.util.ResourceManager.getInstance().getData(T);
var V=qx.bom.element.Background.getStyles(W[4],S,W[5],W[6]);

for(var U in V){R[U]=V[U];
}
if(X.width!=null&&R.width==null&&(S==I||S===n)){R.width=X.width+s;
}
if(X.height!=null&&R.height==null&&(S==E||S===n)){R.height=X.height+s;
}return {style:R};
}else{if(qx.core.Variant.isSet(m,j)){if(S!==Q){this.__gy(T);
}}R=this.__gp(R,X.width,X.height);
R=this.__gx(R,T,S);
return {style:R};
}},__gx:function(bP,bQ,bR){var top=null;
var bV=null;

if(bP.backgroundPosition){var bS=bP.backgroundPosition.split(C);
bV=parseInt(bS[0]);

if(isNaN(bV)){bV=bS[0];
}top=parseInt(bS[1]);

if(isNaN(top)){top=bS[1];
}}var bU=qx.bom.element.Background.getStyles(bQ,bR,bV,top);

for(var bT in bU){bP[bT]=bU[bT];
}if(bP.filter){bP.filter=o;
}return bP;
},__gy:function(bn){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bn)&&bn.indexOf(N)==-1){if(!this.__gl[bn]){qx.log.Logger.debug("Potential clipped image candidate: "+bn);
this.__gl[bn]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(r,{"mshtml":function(){return qx.bom.element.Decoration.__gm;
},"default":function(){return false;
}})}});
})();
(function(){var d="qx.client",c="load",b="qx.io.ImageLoader";
qx.Bootstrap.define(b,{statics:{__jW:{},__jX:{width:null,height:null},__jY:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(r){var s=this.__jW[r];
return !!(s&&s.loaded);
},isFailed:function(e){var f=this.__jW[e];
return !!(f&&f.failed);
},isLoading:function(h){var j=this.__jW[h];
return !!(j&&j.loading);
},getFormat:function(G){var H=this.__jW[G];
return H?H.format:null;
},getSize:function(k){var m=this.__jW[k];
return m?
{width:m.width,height:m.height}:this.__jX;
},getWidth:function(n){var o=this.__jW[n];
return o?o.width:null;
},getHeight:function(p){var q=this.__jW[p];
return q?q.height:null;
},load:function(v,w,x){var y=this.__jW[v];

if(!y){y=this.__jW[v]={};
}if(w&&!x){x=window;
}if(y.loaded||y.loading||y.failed){if(w){if(y.loading){y.callbacks.push(w,x);
}else{w.call(x,v,y);
}}}else{y.loading=true;
y.callbacks=[];

if(w){y.callbacks.push(w,x);
}var A=new Image();
var z=qx.lang.Function.listener(this.__ka,this,A,v);
A.onload=z;
A.onerror=z;
A.src=v;
}},__ka:qx.event.GlobalError.observeMethod(function(event,B,C){var D=this.__jW[C];
if(event.type===c){D.loaded=true;
D.width=this.__kb(B);
D.height=this.__kc(B);
var E=this.__jY.exec(C);

if(E!=null){D.format=E[1];
}}else{D.failed=true;
}B.onload=B.onerror=null;
var F=D.callbacks;
delete D.loading;
delete D.callbacks;
for(var i=0,l=F.length;i<l;i+=2){F[i].call(F[i+1],C,D);
}}),__kb:qx.core.Variant.select(d,{"gecko":function(a){return a.naturalWidth;
},"default":function(u){return u.width;
}}),__kc:qx.core.Variant.select(d,{"gecko":function(t){return t.naturalHeight;
},"default":function(g){return g.height;
}})}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__cs:[i,null,h,b,null,j,e,null,j],__ct:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cu:function(n,top){var o=qx.bom.client.Engine;

if(o.GECKO&&o.VERSION<1.9&&n==top&&typeof n==m){top+=0.01;
}
if(n){var p=(typeof n==m)?n+k:n;
}else{p=l;
}
if(top){var q=(typeof top==m)?top+k:top;
}else{q=l;
}return p+d+q;
},compile:function(r,s,t,top){var u=this.__cu(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__cs;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(g);
},getStyles:function(D,E,F,top){if(!D){return this.__ct;
}var G=this.__cu(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:c+H+f};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
}}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,m){qx.html.Element.prototype._applyProperty.call(this,name,m);

if(name===j){var q=this.getDomElement();
var n=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){n.backgroundPosition=null;
n.backgroundRepeat=null;
}var o=this._getProperty(j);
var p=this._getProperty(i);
var r=p?i:h;
if(o!=null){qx.bom.element.Decoration.update(q,o,r,n);
}}},_createDomElement:function(){var t=this._getProperty(i);
var u=t?i:h;

if(qx.core.Variant.isSet(g,f)){var s=this._getProperty(j);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(u,s));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(u));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(l){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(k){this._setProperty(j,k);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(v){this._setProperty(i,v);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var T="nonScaled",S="scaled",R="alphaScaled",Q=".png",P="qx.client",O="div",N="replacement",M="hidden",L="Boolean",K="px",bj="http",bi="scale",bh="changeSource",bg="qx.ui.basic.Image",bf="__hK",be="qx.debug",bd="-disabled.$1",bc="String",bb="_applySource",ba="img",X="image",Y="mshtml",V="_applyScale",W="no-repeat",U="on";
qx.Class.define(bg,{extend:qx.ui.core.Widget,construct:function(A){this.__hK={};
qx.ui.core.Widget.call(this);

if(A){this.setSource(A);
}},properties:{source:{check:bc,init:null,nullable:true,event:bh,apply:bb,themeable:true},scale:{check:L,init:false,themeable:true,apply:V},appearance:{refine:true,init:X},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hL:null,__hM:null,__hN:null,__hK:null,getContentElement:function(){return this.__hR();
},_createContentElement:function(){return this.__hR();
},_getContentHint:function(){return {width:this.__hL||0,height:this.__hM||0};
},_applyEnabled:function(bo,bp){qx.ui.core.Widget.prototype._applyEnabled.call(this,bo,bp);

if(this.getSource()){this._styleSource();
}},_applySource:function(i){this._styleSource();
},_applyScale:function(x){this._styleSource();
},__hO:function(h){this.__hN=h;
},__hP:function(){if(this.__hN==null){var z=this.getSource();
var y=false;

if(z!=null){y=qx.lang.String.endsWith(z,Q);
}
if(this.getScale()&&y&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hN=R;
}else if(this.getScale()){this.__hN=S;
}else{this.__hN=T;
}}return this.__hN;
},__hQ:function(a){var b;
var c;

if(a==R){b=true;
c=O;
}else if(a==T){b=false;
c=O;
}else{b=true;
c=ba;
}var d=new qx.html.Image(c);
d.setScale(b);
d.setStyles({"overflowX":M,"overflowY":M});
return d;
},__hR:function(){var e=this.__hP();

if(this.__hK[e]==null){this.__hK[e]=this.__hQ(e);
}return this.__hK[e];
},_styleSource:function(){var I=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!I){this.getContentElement().resetSource();
return;
}this.__hS(I);

if(qx.core.Variant.isSet(P,Y)){var J=this.getScale()?bi:W;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(J,I);
}if(qx.util.ResourceManager.getInstance().has(I)){this.__hU(this.getContentElement(),I);
}else if(qx.io.ImageLoader.isLoaded(I)){this.__hV(this.getContentElement(),I);
}else{this.__hW(this.getContentElement(),I);
}},__hS:qx.core.Variant.select(P,{"mshtml":function(j){var l=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var k=qx.lang.String.endsWith(j,Q);

if(l&&k){if(this.getScale()&&this.__hP()!=R){this.__hO(R);
}else if(!this.getScale()&&this.__hP()!=T){this.__hO(T);
}}else{if(this.getScale()&&this.__hP()!=S){this.__hO(S);
}else if(!this.getScale()&&this.__hP()!=T){this.__hO(T);
}}this.__hT(this.__hR());
},"default":function(t){if(this.getScale()&&this.__hP()!=S){this.__hO(S);
}else if(!this.getScale()&&this.__hP(T)){this.__hO(T);
}this.__hT(this.__hR());
}}),__hT:function(B){var E=this.getContainerElement();
var F=E.getChild(0);

if(F!=B){if(F!=null){var H=K;
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
}},__hU:function(bk,bl){var bn=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bm=bl.replace(/\.([a-z]+)$/,bd);

if(bn.has(bm)){bl=bm;
this.addState(N);
}else{this.removeState(N);
}}if(bk.getSource()===bl){return;
}bk.setSource(bl);
this.__hY(bn.getImageWidth(bl),bn.getImageHeight(bl));
},__hV:function(o,p){var r=qx.io.ImageLoader;
o.setSource(p);
var q=r.getWidth(p);
var s=r.getHeight(p);
this.__hY(q,s);
},__hW:function(u,v){var w=qx.io.ImageLoader;

if(qx.core.Variant.isSet(be,U)){if(!qx.lang.String.startsWith(v.toLowerCase(),bj)){var self=this.self(arguments);

if(!self.__sq){self.__sq={};
}
if(!self.__sq[v]){this.debug("try to load a unmanaged relative image: "+v);
self.__sq[v]=true;
}}}if(!w.isFailed(v)){w.load(v,this.__hX,this);
}else{if(u!=null){u.resetSource();
}}},__hX:function(f,g){if(this.$$disposed===true){return;
}if(f!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(g.failed){this.warn("Image could not be loaded: "+f);
}this._styleSource();
},__hY:function(m,n){if(m!==this.__hL||n!==this.__hM){this.__hL=m;
this.__hM=n;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(bf);
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
this.__jx=h;
},events:{"interval":d},properties:{timeoutInterval:{check:f,init:100,apply:e}},members:{__jx:null,_applyTimeoutInterval:function(a){this.__jx.setInterval(a);
},_onInterval:function(){this.fireEvent(g);
}},destruct:function(){if(this.__jx){this.__jx.stop();
}this.__jx=null;
}});
})();
(function(){var j="top",i="right",h="bottom",g="left",f="edge-start",e="align-start",d="align-end",c="edge-end",b="qx.util.placement.AbstractAxis",a="-",G="best-fit",F="size",E='__gA',D="target.bottom",C="offsets",B="size.width",A="offsets.bottom",z="qx.util.placement.Placement",y="qx.debug",x="keep-align",q="target.right",r="direct",o="offsets.right",p="target",m="offsets.left",n="area",k="target.top",l="area.height",s="target.left",t="area.width",v="on",u="size.height",w="offsets.top";
qx.Class.define(z,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__gA=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:b},axisY:{check:b},edge:{check:[j,i,h,g],init:j},align:{check:[j,i,h,g],init:i}},statics:{__gB:null,compute:function(T,U,V,W,X,Y,ba){this.__gB=this.__gB||new qx.util.placement.Placement();
var bd=X.split(a);
var bc=bd[0];
var bb=bd[1];
this.__gB.set({axisX:this.__gF(Y),axisY:this.__gF(ba),edge:bc,align:bb});
return this.__gB.compute(T,U,V,W);
},__gC:null,__gD:null,__gE:null,__gF:function(H){switch(H){case r:this.__gC=this.__gC||new qx.util.placement.DirectAxis();
return this.__gC;
case x:this.__gD=this.__gD||new qx.util.placement.KeepAlignAxis();
return this.__gD;
case G:this.__gE=this.__gE||new qx.util.placement.BestFitAxis();
return this.__gE;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__gA:null,compute:function(K,L,M,N){if(qx.core.Variant.isSet(y,v)){this.assertObject(K,F);
this.assertNumber(K.width,B);
this.assertNumber(K.height,u);
this.assertObject(L,n);
this.assertNumber(L.width,t);
this.assertNumber(L.height,l);
this.assertObject(M,p);
this.assertNumber(M.top,k);
this.assertNumber(M.right,q);
this.assertNumber(M.bottom,D);
this.assertNumber(M.left,s);
this.assertObject(N,C);
this.assertNumber(N.top,w);
this.assertNumber(N.right,o);
this.assertNumber(N.bottom,A);
this.assertNumber(N.left,m);
}var O=this.getAxisX()||this.__gA;
var Q=O.computeStart(K.width,{start:M.left,end:M.right},{start:N.left,end:N.right},L.width,this.__gG());
var P=this.getAxisY()||this.__gA;
var top=P.computeStart(K.height,{start:M.top,end:M.bottom},{start:N.top,end:N.bottom},L.height,this.__gH());
return {left:Q,top:top};
},__gG:function(){var S=this.getEdge();
var R=this.getAlign();

if(S==g){return f;
}else if(S==i){return c;
}else if(R==g){return e;
}else if(R==i){return d;
}},__gH:function(){var J=this.getEdge();
var I=this.getAlign();

if(J==j){return f;
}else if(J==h){return c;
}else if(I==j){return e;
}else if(I==h){return d;
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
(function(){var j="mousedown",i="qx.debug",h="on",g="blur",f="qx.ui.popup.Manager",d="__pT",c="singleton";
qx.Class.define(f,{type:c,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pT={};
qx.event.Registration.addListener(document.documentElement,j,this.__pV,this,true);
qx.bom.Element.addListener(window,g,this.hideAll,this);
},members:{__pT:null,add:function(k){if(qx.core.Variant.isSet(i,h)){if(!(k instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+k);
}}this.__pT[k.$$hash]=k;
this.__pU();
},remove:function(a){if(qx.core.Variant.isSet(i,h)){if(!(a instanceof qx.ui.popup.Popup)){throw new Error("Object is no popup: "+a);
}}var b=this.__pT;

if(b){delete b[a.$$hash];
this.__pU();
}},hideAll:function(){var t=this.__pT;

if(t){for(var s in t){t[s].exclude();
}}},__pU:function(){var n=1e7;
var m=this.__pT;

for(var l in m){m[l].setZIndex(n++);
}},__pV:function(e){var q=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var r=this.__pT;

for(var p in r){var o=r[p];

if(!o.getAutoHide()||q==o||qx.ui.core.Widget.contains(o,q)){continue;
}o.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,j,this.__pV,this,true);
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
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){if(qx.core.Variant.isSet(t,o)){this.assertArgumentsCount(arguments,0,2);
}qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:q},icon:{check:f,apply:p,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[s,r,b,e],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B){var C;

switch(B){case j:C=new qx.ui.basic.Label(this.getLabel());
C.setAnonymous(true);
C.setRich(this.getRich());
this._add(C);

if(this.getLabel()==null||this.getShow()===i){C.exclude();
}break;
case i:C=new qx.ui.basic.Image(this.getIcon());
C.setAnonymous(true);
this._addAt(C,0);

if(this.getIcon()==null||this.getShow()===j){C.exclude();
}break;
}return C||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(D,E){var F=this.getChildControl(j,true);

if(F){F.setValue(D);
}this._handleLabel();
},_applyRich:function(N,O){var P=this.getChildControl(j,true);

if(P){P.setRich(N);
}},_applyIcon:function(I,J){var K=this.getChildControl(i,true);

if(K){K.setSource(I);
}this._handleIcon();
},_applyGap:function(L,M){this._getLayout().setGap(L);
},_applyShow:function(S,T){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(G,H){this._getLayout().setIconPosition(G);
},_applyCenter:function(Q,R){this._getLayout().setCenter(Q);
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
},computeHorizontalAlignOffset:function(be,bf,bg,bh,bi){if(bh==null){bh=0;
}
if(bi==null){bi=0;
}var bj=0;

switch(be){case e:bj=bh;
break;
case a:bj=bg-bf-bi;
break;
case d:bj=Math.round((bg-bf)/2);
if(bj<bh){bj=bh;
}else if(bj<bi){bj=Math.max(bh,bg-bf-bi);
}break;
}return bj;
},computeVerticalAlignOffset:function(X,Y,ba,bb,bc){if(bb==null){bb=0;
}
if(bc==null){bc=0;
}var bd=0;

switch(X){case c:bd=bb;
break;
case b:bd=ba-Y-bc;
break;
case g:bd=Math.round((ba-Y)/2);
if(bd<bb){bd=bb;
}else if(bd<bc){bd=Math.max(bb,ba-Y-bc);
}break;
}return bd;
},collapseMargins:function(v){var w=0,y=0;

for(var i=0,l=arguments.length;i<l;i++){var x=arguments[i];

if(x<0){y=Math.min(y,x);
}else if(x>0){w=Math.max(w,x);
}}return w+y;
},computeHorizontalGaps:function(H,I,J){if(I==null){I=0;
}var K=0;

if(J){K+=H[0].getMarginLeft();

for(var i=1,l=H.length;i<l;i+=1){K+=this.collapseMargins(I,H[i-1].getMarginRight(),H[i].getMarginLeft());
}K+=H[l-1].getMarginRight();
}else{for(var i=1,l=H.length;i<l;i+=1){K+=H[i].getMarginLeft()+H[i].getMarginRight();
}K+=(I*(l-1));
}return K;
},computeVerticalGaps:function(h,j,k){if(j==null){j=0;
}var m=0;

if(k){m+=h[0].getMarginTop();

for(var i=1,l=h.length;i<l;i+=1){m+=this.collapseMargins(j,h[i-1].getMarginBottom(),h[i].getMarginTop());
}m+=h[l-1].getMarginBottom();
}else{for(var i=1,l=h.length;i<l;i+=1){m+=h[i].getMarginTop()+h[i].getMarginBottom();
}m+=(j*(l-1));
}return m;
},computeHorizontalSeparatorGaps:function(n,o,p){var s=qx.theme.manager.Decoration.getInstance().resolve(p);
var r=s.getInsets();
var q=r.left+r.right;
var t=0;

for(var i=0,l=n.length;i<l;i++){var u=n[i];
t+=u.getMarginLeft()+u.getMarginRight();
}t+=(o+q+o)*(l-1);
return t;
},computeVerticalSeparatorGaps:function(z,A,B){var E=qx.theme.manager.Decoration.getInstance().resolve(B);
var D=E.getInsets();
var C=D.top+D.bottom;
var F=0;

for(var i=0,l=z.length;i<l;i++){var G=z[i];
F+=G.getMarginTop()+G.getMarginBottom();
}F+=(A+C+A)*(l-1);
return F;
},arrangeIdeals:function(bk,bl,bm,bn,bo,bp){if(bl<bk||bo<bn){if(bl<bk&&bo<bn){bl=bk;
bo=bn;
}else if(bl<bk){bo-=(bk-bl);
bl=bk;
if(bo<bn){bo=bn;
}}else if(bo<bn){bl-=(bn-bo);
bo=bn;
if(bl<bk){bl=bk;
}}}
if(bl>bm||bo>bp){if(bl>bm&&bo>bp){bl=bm;
bo=bp;
}else if(bl>bm){bo+=(bl-bm);
bl=bm;
if(bo>bp){bo=bp;
}}else if(bo>bp){bl+=(bo-bp);
bo=bp;
if(bl>bm){bl=bm;
}}}return {begin:bl,end:bo};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var k="on",j="qx.dynlocale",i="text",h="Boolean",g="color",f="userSelect",d="changeLocale",c="qx.debug",b="enabled",a="none",I="_applyTextAlign",H="qx.ui.core.Widget",G="nowrap",F="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.client",B="changeContent",A="qx.ui.basic.Label",z="A",r="whiteSpace",s="_applyValue",p="center",q="_applyBuddy",n="String",o="textAlign",l="right",m="changeRich",t="normal",u="_applyRich",w="click",v="label",y="webkit",x="left";
qx.Class.define(A,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(J){qx.ui.core.Widget.call(this);

if(J!=null){this.setValue(J);
}
if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:h,init:false,event:m,apply:u},wrap:{check:h,init:true,apply:E},value:{check:n,apply:s,event:D,nullable:true},buddy:{check:H,apply:q,nullable:true,init:null},textAlign:{check:[x,p,l],nullable:true,themeable:true,apply:I,event:F},appearance:{refine:true,init:v},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__fR:null,__fS:null,__fT:null,__fU:null,_getContentHint:function(){if(this.__fS){this.__fV=this.__fW();
delete this.__fS;
}return {width:this.__fV.width,height:this.__fV.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(bb){if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){if(bb&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels are selectable in browsers with Gecko engine!");
}return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,bb);
if(qx.core.Variant.isSet(C,y)){this.getContainerElement().setStyle(f,bb?i:a);
this.getContentElement().setStyle(f,bb?i:a);
}},_getContentHeightForWidth:function(bc){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__fW(bc).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(O,P){this.getContentElement().setStyle(o,O);
},_applyTextColor:function(bd,be){if(bd){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(bd));
}else{this.getContentElement().removeStyle(g);
}},__fV:{width:0,height:0},_applyFont:function(R,S){var T;

if(R){this.__fR=qx.theme.manager.Font.getInstance().resolve(R);
T=this.__fR.getStyles();
}else{this.__fR=null;
T=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(T);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},__fW:function(V){var ba=qx.bom.Label;
var X=this.getFont();
var W=X?this.__fR.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||z;
var Y=this.getRich();
return Y?ba.getHtmlSize(content,W,V):ba.getTextSize(content,W);
},_applyBuddy:function(K,L){if(L!=null){L.removeBinding(this.__fT);
this.__fT=null;
this.removeListenerById(this.__fU);
this.__fU=null;
}
if(K!=null){this.__fT=K.bind(b,this,b);
this.__fU=this.addListener(w,function(){if(K.isFocusable()){K.focus.apply(K);
}},this);
}},_applyRich:function(U){this.getContentElement().setRich(U);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(bf,bg){if(bf&&!this.isRich()){if(qx.core.Variant.isSet(c,k)){this.warn("Only rich labels support wrap.");
}}
if(this.isRich()){var bh=bf?t:G;
this.getContentElement().setStyle(r,bh);
}},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(M,N){this.getContentElement().setValue(M);
this.__fS=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(B,M,N);
}},destruct:function(){if(qx.core.Variant.isSet(j,k)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__fT!=null){var Q=this.getBuddy();

if(Q!=null&&!Q.isDisposed()){Q.removeBinding(this.__fT);
}}this.__fR=this.__fT=null;
}});
})();
(function(){var d="value",c="Please use the getValue() method instead.",b="qx.html.Label",a="Please use the setValue() method instead.";
qx.Class.define(b,{extend:qx.html.Element,members:{__di:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name==d){var m=this.getDomElement();
qx.bom.Label.setValue(m,l);
}},_createDomElement:function(){var g=this.__di;
var f=qx.bom.Label.create(this._content,g);
return f;
},_copyData:function(h){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(j){var k=this.getDomElement();

if(k){throw new Error("The label mode cannot be modified after initial creation");
}j=!!j;

if(this.__di==j){return;
}this.__di=j;
return this;
},setValue:function(i){this._setProperty(d,i);
return this;
},getValue:function(){return this._getProperty(d);
},setContent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,a);
return this.setValue(e);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.getValue();
}}});
})();
(function(){var o="div",n="inherit",m="text",l="value",k="",j="hidden",i="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",h="nowrap",g="qx.client",f="auto",G="0",F="ellipsis",E="normal",D="label",C="px",B="crop",A="gecko",z="end",y="100%",x="visible",v="qx.bom.Label",w="Please use the setValue() method instead.",t="opera",u="Please use the getValue() method instead.",r="block",s="none",p="-1000px",q="absolute";
qx.Class.define(v,{statics:{__ia:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__ib:function(){var bi=this.__id(false);
document.body.insertBefore(bi,document.body.firstChild);
return this._textElement=bi;
},__ic:function(){var V=this.__id(true);
document.body.insertBefore(V,document.body.firstChild);
return this._htmlElement=V;
},__id:function(a){var b=qx.bom.Element.create(o);
var c=b.style;
c.width=c.height=f;
c.left=c.top=p;
c.visibility=j;
c.position=q;
c.overflow=x;

if(a){c.whiteSpace=E;
}else{c.whiteSpace=h;

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var d=document.createElementNS(i,D);
var c=d.style;
c.padding=G;

for(var e in this.__ia){c[e]=n;
}b.appendChild(d);
}}return b;
},__ie:function(H){var I={};

if(H){I.whiteSpace=E;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){I.display=r;
}else{I.overflow=j;
I.whiteSpace=h;
I.textOverflow=F;
I.userSelect=s;
if(qx.core.Variant.isSet(g,t)){I.OTextOverflow=F;
}}return I;
},create:function(content,W,X){if(!X){X=window;
}
if(W){var Y=X.document.createElement(o);
Y.useHtml=true;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){var Y=X.document.createElement(o);
var bb=X.document.createElementNS(i,D);
var ba=bb.style;
ba.cursor=n;
ba.color=n;
ba.overflow=j;
ba.maxWidth=y;
ba.padding=G;
for(var bc in this.__ia){bb.style[bc]=n;
}bb.setAttribute(B,z);
Y.appendChild(bb);
}else{var Y=X.document.createElement(o);
qx.bom.element.Style.setStyles(Y,this.__ie(W));
}
if(content){this.setValue(Y,content);
}return Y;
},setValue:function(L,M){M=M||k;

if(L.useHtml){L.innerHTML=M;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){L.firstChild.setAttribute(l,M);
}else{qx.bom.element.Attribute.set(L,m,M);
}},getValue:function(bh){if(bh.useHtml){return bh.innerHTML;
}else if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){return bh.firstChild.getAttribute(l)||k;
}else{return qx.bom.element.Attribute.get(bh,m);
}},getHtmlSize:function(content,bd,be){var bf=this._htmlElement||this.__ic();
bf.style.width=be!==undefined?be+C:f;
bf.innerHTML=content;
return this.__if(bf,bd);
},getTextSize:function(N,O){var P=this._textElement||this.__ib();

if(!qx.bom.client.Feature.CSS_TEXT_OVERFLOW&&qx.bom.client.Feature.XUL){P.firstChild.setAttribute(l,N);
}else{qx.bom.element.Attribute.set(P,m,N);
}return this.__if(P,O);
},__if:function(Q,R){var S=this.__ia;

if(!R){R={};
}
for(var T in S){Q.style[T]=R[T]||k;
}var U=qx.bom.element.Dimension.getSize(Q);

if(qx.core.Variant.isSet(g,A)){if(!qx.bom.client.Platform.WIN){U.width++;
}}return U;
},setContent:function(J,K){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
this.setValue(J,K);
},getContent:function(bg){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.getValue(bg);
}}});
})();
(function(){var j="0px",i="mshtml",h="qx.client",g="qx.bom.element.Dimension",f="paddingRight",e="paddingLeft",d="paddingTop",c="paddingBottom";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"gecko":function(a){if(a.getBoundingClientRect){var b=a.getBoundingClientRect();
return Math.round(b.right)-Math.round(b.left);
}else{return a.offsetWidth;
}},"default":function(D){return D.offsetWidth;
}}),getHeight:qx.core.Variant.select(h,{"gecko":function(y){if(y.getBoundingClientRect){var z=y.getBoundingClientRect();
return Math.round(z.bottom)-Math.round(z.top);
}else{return y.offsetHeight;
}},"default":function(C){return C.offsetHeight;
}}),getSize:function(B){return {width:this.getWidth(B),height:this.getHeight(B)};
},__gX:{visible:true,hidden:true},getContentWidth:function(r){var t=qx.bom.element.Style;
var u=qx.bom.element.Overflow.getX(r);
var v=parseInt(t.get(r,e)||j,10);
var x=parseInt(t.get(r,f)||j,10);

if(this.__gX[u]){return r.clientWidth-v-x;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-v-x;
}else{var w=r.scrollWidth-v;
var s=qx.bom.client.Engine;

if(s.NAME===i&&s.VERSION==6){w-=x;
}return w;
}}},getContentHeight:function(k){var m=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getY(k);
var p=parseInt(m.get(k,d)||j,10);
var n=parseInt(m.get(k,c)||j,10);

if(this.__gX[o]){return k.clientHeight-p-n;
}else{if(k.clientHeight>=k.scrollHeight){return Math.max(k.clientHeight,k.scrollHeight)-p-n;
}else{var q=k.scrollHeight-p;
var l=qx.bom.client.Engine;

if(l.NAME===i&&l.VERSION==6){q-=n;
}return q;
}}},getContentSize:function(A){return {width:this.getContentWidth(A),height:this.getContentHeight(A)};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(d){return arguments.length==1;
},getEnabled:function(){},setRequired:function(c){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var h="Use 'getBlocker().getContentBlockerElement()' instead.",g="Use 'getBlocker().getBlockerElement()' instead.",f="_applyBlockerColor",e="Number",d="qx.ui.core.MBlocker",c="_applyBlockerOpacity",b="Color",a="__qn";
qx.Mixin.define(d,{construct:function(){this.__qn=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:b,init:null,nullable:true,apply:f,themeable:true},blockerOpacity:{check:e,init:1,apply:c,themeable:true}},members:{__qn:null,_applyBlockerColor:function(l,m){this.__qn.setColor(l);
},_applyBlockerOpacity:function(i,j){this.__qn.setOpacity(i);
},block:function(){this.__qn.block();
},isBlocked:function(){return this.__qn.isBlocked();
},unblock:function(){this.__qn.unblock();
},forceUnblock:function(){this.__qn.forceUnblock();
},blockContent:function(k){this.__qn.blockContent(k);
},isContentBlocked:function(){return this.__qn.isContentBlocked();
},unblockContent:function(){this.__qn.unblockContent();
},forceUnblockContent:function(){this.__qn.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,h);
return this.__qn.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,g);
return this.__qn.getBlockerElement();
},getBlocker:function(){return this.__qn;
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__mm",b="__ml",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__ml:null,__mm:null,getWindowManager:function(){if(!this.__mm){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__mm;
},supportsMaximize:function(){return true;
},setWindowManager:function(l){if(this.__mm){this.__mm.setDesktop(null);
}l.setDesktop(this);
this.__mm=l;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(n,o){this.getWindowManager().changeActiveWindow(n,o);

if(n){n.setActive(true);
}
if(o){o.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._addWindow(j);
}},_addWindow:function(p){if(!qx.lang.Array.contains(this.getWindows(),p)){this.getWindows().push(p);
p.addListener(f,this._onChangeActive,this);
p.addListener(h,this._onChangeModal,this);
p.addListener(g,this._onChangeVisibility,this);
}
if(p.getActive()){this.setActiveWindow(p);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._removeWindow(m);
}},_removeWindow:function(k){qx.lang.Array.remove(this.getWindows(),k);
k.removeListener(f,this._onChangeActive,this);
k.removeListener(h,this._onChangeModal,this);
k.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__ml){this.__ml=[];
}return this.__ml;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var r="contextmenu",q="help",p="qx.client",o="changeGlobalCursor",n="abstract",m="Boolean",l="root",k="",j=" !important",i="_applyGlobalCursor",f="_applyNativeHelp",h=";",g="qx.ui.root.Abstract",d="String",c="*";
qx.Class.define(g,{type:n,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:l},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:d,nullable:true,themeable:true,apply:i,event:o},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:m,init:false,apply:f}},members:{__lc:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(p,{"mshtml":function(A,B){},"default":function(s,t){var u=qx.bom.Stylesheet;
var v=this.__lc;

if(!v){this.__lc=v=u.createElement();
}u.removeAllRules(v);

if(s){u.addRule(v,c,qx.bom.element.Cursor.compile(s).replace(h,k)+j);
}}}),_applyNativeContextMenu:function(y,z){if(y){this.removeListener(r,this._onNativeContextMenu,this,true);
}else{this.addListener(r,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(p,{"mshtml":function(a,b){if(b===false){qx.bom.Event.removeNativeListener(document,q,qx.lang.Function.returnFalse);
}
if(a===false){qx.bom.Event.addNativeListener(document,q,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__lc=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var n="resize",m="position",l="0px",k="webkit",j="paddingLeft",i="$$widget",h="qx.ui.root.Application",g="hidden",f="qx.client",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(h,{extend:qx.ui.root.Abstract,construct:function(s){this.__qo=qx.dom.Node.getWindow(s);
this.__qp=s;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__qo,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__qo:null,__qp:null,_createContainerElement:function(){var w=this.__qp;
if(qx.core.Variant.isSet(f,k)){if(!w.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var A=w.documentElement.style;
var x=w.body.style;
A.overflow=x.overflow=g;
A.padding=A.margin=x.padding=x.margin=l;
A.width=A.height=x.width=x.height=c;
var z=w.createElement(d);
w.body.appendChild(z);
var y=new qx.html.Root(z);
y.setStyle(m,b);
y.setAttribute(i,this.toHashCode());
return y;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
},_computeSizeHint:function(){var q=qx.bom.Viewport.getWidth(this.__qo);
var r=qx.bom.Viewport.getHeight(this.__qo);
return {minWidth:q,width:q,maxWidth:q,minHeight:r,height:r,maxHeight:r};
},_applyPadding:function(o,p,name){if(o&&(name==a||name==j)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,o,p,name);
},_applyDecorator:function(t,u){qx.ui.root.Abstract.prototype._applyDecorator.call(this,t,u);

if(!t){return;
}var v=this.getDecoratorElement().getInsets();

if(v.left||v.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__qo=this.__qp=null;
}});
})();
(function(){var y="zIndex",x="px",w="keydown",v="deactivate",u="This method is not needed anymore.",t="resize",s="keyup",r="keypress",q="backgroundColor",p="_applyOpacity",L="Use 'getBlockerElement' instead.",K="opacity",J="__nR",I="interval",H="Tab",G="__nP",F="Color",E="qx.ui.root.Page",D="Use 'getContentBlockerElement' instead.",C="Number",A="qx.ui.core.Blocker",B="__nU",z="_applyColor";
qx.Class.define(A,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this._widget=h;
this._isPageRoot=(qx.Class.isDefined(E)&&h instanceof qx.ui.root.Page);

if(this._isPageRoot){h.addListener(t,this.__nV,this);
}this.__nM=[];
this.__nN=[];
this.__nO=[];
},properties:{color:{check:F,init:null,nullable:true,apply:z,themeable:true},opacity:{check:C,init:1,apply:p,themeable:true}},members:{__nP:null,__nQ:0,__nR:null,__nO:null,__nM:null,__nN:null,__nS:null,__nT:0,__nU:null,_isPageRoot:false,_widget:null,__nV:function(e){var d=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:d.width,height:d.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:d.width,height:d.height});
}},_applyColor:function(O,P){var Q=qx.theme.manager.Color.getInstance().resolve(O);
this.__nW(q,Q);
},_applyOpacity:function(j,k){this.__nW(K,j);
},__nW:function(m,n){var o=[];
this.__nP&&o.push(this.__nP);
this.__nR&&o.push(this.__nR);

for(var i=0;i<o.length;i++){o[i].setStyle(m,n);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__nT+=1;

if(this.__nT==1){this.__nS=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
this.__nT-=1;

if(this.__nT==0){this._widget.setAnonymous(this.__nS);
}},_backupActiveWidget:function(){var l=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__nM.push(l.getActive());
this.__nN.push(l.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var T=this.__nM.length;

if(T>0){var S=this.__nM[T-1];

if(S){qx.bom.Element.activate(S);
}this.__nM.pop();
}var R=this.__nN.length;

if(R>0){var S=this.__nN[R-1];

if(S){qx.bom.Element.focus(this.__nN[R-1]);
}this.__nN.pop();
}},__nX:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__nP){this.__nP=this.__nX();
this.__nP.setStyle(y,15);
this._widget.getContainerElement().add(this.__nP);
this.__nP.exclude();
}return this.__nP;
},block:function(){this.__nQ++;

if(this.__nQ<2){this._backupActiveWidget();
var a=this.getBlockerElement();
a.include();
a.activate();
a.addListener(v,this.__od,this);
a.addListener(r,this.__oc,this);
a.addListener(w,this.__oc,this);
a.addListener(s,this.__oc,this);
}},isBlocked:function(){return this.__nQ>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__nQ--;

if(this.__nQ<1){this.__nY();
this.__nQ=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__nQ=0;
this.__nY();
},__nY:function(){this._restoreActiveWidget();
var M=this.getBlockerElement();
M.removeListener(v,this.__od,this);
M.removeListener(r,this.__oc,this);
M.removeListener(w,this.__oc,this);
M.removeListener(s,this.__oc,this);
M.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,D);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__nR){this.__nR=this.__nX();
this._widget.getContentElement().add(this.__nR);
this.__nR.exclude();
}return this.__nR;
},blockContent:function(U){var V=this.getContentBlockerElement();
V.setStyle(y,U);
this.__nO.push(U);

if(this.__nO.length<2){V.include();

if(this._isPageRoot){if(!this.__nU){this.__nU=new qx.event.Timer(300);
this.__nU.addListener(I,this.__ob,this);
}this.__nU.start();
this.__ob();
}}},isContentBlocked:function(){return this.__nO.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nO.pop();
var b=this.__nO[this.__nO.length-1];
var c=this.getContentBlockerElement();
c.setStyle(y,b);

if(this.__nO.length<1){this.__oa();
this.__nO=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__nO=[];
var N=this.getContentBlockerElement();
N.setStyle(y,null);
this.__oa();
},__oa:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__nU.stop();
}},__ob:function(){var f=this._widget.getContainerElement().getDomElement();
var g=qx.dom.Node.getDocument(f);
this.getContentBlockerElement().setStyles({height:g.documentElement.scrollHeight+x,width:g.documentElement.scrollWidth+x});
},__oc:function(e){if(e.getKeyIdentifier()==H){e.stop();
}},__od:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(t,this.__nV,this);
}this._disposeObjects(J,G,B);
this.__nS=this.__nM=this.__nN=this._widget=this.__nO=null;
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
this.addListener(s,this.__pc,this);
this.addListener(n,this.__pc,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__pc:function(){var x=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,x,true);
}}});
})();
(function(){var o="keypress",n="focusout",m="activate",k="Tab",j="__bg",h="singleton",g="deactivate",f="focusin",d="qx.ui.core.FocusHandler";
qx.Class.define(d,{extend:qx.core.Object,type:h,construct:function(){qx.core.Object.call(this);
this.__bg={};
},members:{__bg:null,__bh:null,__bi:null,__bj:null,connectTo:function(bi){bi.addListener(o,this.__bk,this);
bi.addListener(f,this._onFocusIn,this,true);
bi.addListener(n,this._onFocusOut,this,true);
bi.addListener(m,this._onActivate,this,true);
bi.addListener(g,this._onDeactivate,this,true);
},addRoot:function(Y){this.__bg[Y.$$hash]=Y;
},removeRoot:function(v){delete this.__bg[v.$$hash];
},getActiveWidget:function(){return this.__bh;
},isActive:function(q){return this.__bh==q;
},getFocusedWidget:function(){return this.__bi;
},isFocused:function(p){return this.__bi==p;
},isFocusRoot:function(ba){return !!this.__bg[ba.$$hash];
},_onActivate:function(e){var L=e.getTarget();
this.__bh=L;
var K=this.__bl(L);

if(K!=this.__bj){this.__bj=K;
}},_onDeactivate:function(e){var J=e.getTarget();

if(this.__bh==J){this.__bh=null;
}},_onFocusIn:function(e){var a=e.getTarget();

if(a!=this.__bi){this.__bi=a;
a.visualizeFocus();
}},_onFocusOut:function(e){var P=e.getTarget();

if(P==this.__bi){this.__bi=null;
P.visualizeBlur();
}},__bk:function(e){if(e.getKeyIdentifier()!=k){return;
}
if(!this.__bj){return;
}e.stopPropagation();
e.preventDefault();
var w=this.__bi;

if(!e.isShiftPressed()){var x=w?this.__bp(w):this.__bn();
}else{var x=w?this.__bq(w):this.__bo();
}if(x){x.tabFocus();
}},__bl:function(b){var c=this.__bg;

while(b){if(c[b.$$hash]){return b;
}b=b.getLayoutParent();
}return null;
},__bm:function(y,z){if(y===z){return 0;
}var B=y.getTabIndex()||0;
var A=z.getTabIndex()||0;

if(B!=A){return B-A;
}var G=y.getContainerElement().getDomElement();
var F=z.getContainerElement().getDomElement();
var E=qx.bom.element.Location;
var D=E.get(G);
var C=E.get(F);
if(D.top!=C.top){return D.top-C.top;
}if(D.left!=C.left){return D.left-C.left;
}var H=y.getZIndex();
var I=z.getZIndex();

if(H!=I){return H-I;
}return 0;
},__bn:function(){return this.__bt(this.__bj,null);
},__bo:function(){return this.__bu(this.__bj,null);
},__bp:function(r){var s=this.__bj;

if(s==r){return this.__bn();
}
while(r&&r.getAnonymous()){r=r.getLayoutParent();
}
if(r==null){return [];
}var t=[];
this.__br(s,r,t);
t.sort(this.__bm);
var u=t.length;
return u>0?t[0]:this.__bn();
},__bq:function(U){var V=this.__bj;

if(V==U){return this.__bo();
}
while(U&&U.getAnonymous()){U=U.getLayoutParent();
}
if(U==null){return [];
}var W=[];
this.__bs(V,U,W);
W.sort(this.__bm);
var X=W.length;
return X>0?W[X-1]:this.__bo();
},__br:function(parent,Q,R){var S=parent.getLayoutChildren();
var T;

for(var i=0,l=S.length;i<l;i++){T=S[i];
if(!(T instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(T)&&T.isEnabled()&&T.isVisible()){if(T.isTabable()&&this.__bm(Q,T)<0){R.push(T);
}this.__br(T,Q,R);
}}},__bs:function(parent,bb,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()&&this.__bm(bb,be)>0){bc.push(be);
}this.__bs(be,bb,bc);
}}},__bt:function(parent,bf){var bg=parent.getLayoutChildren();
var bh;

for(var i=0,l=bg.length;i<l;i++){bh=bg[i];
if(!(bh instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bh)&&bh.isEnabled()&&bh.isVisible()){if(bh.isTabable()){if(bf==null||this.__bm(bh,bf)<0){bf=bh;
}}bf=this.__bt(bh,bf);
}}return bf;
},__bu:function(parent,M){var N=parent.getLayoutChildren();
var O;

for(var i=0,l=N.length;i<l;i++){O=N[i];
if(!(O instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(O)&&O.isEnabled()&&O.isVisible()){if(O.isTabable()){if(M==null||this.__bm(O,M)>0){M=O;
}}M=this.__bu(O,M);
}}return M;
}},destruct:function(){this._disposeMap(j);
this.__bi=this.__bh=this.__bj=null;
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
},createElement:qx.core.Variant.select(p,{"mshtml":function(bb){var bc=document.createStyleSheet();

if(bb){bc.cssText=bb;
}return bc;
},"default":function(t){var u=document.createElement(e);
u.type=n;

if(t){u.appendChild(document.createTextNode(t));
}document.getElementsByTagName(o)[0].appendChild(u);
return u.sheet;
}}),addRule:qx.core.Variant.select(p,{"mshtml":function(C,D,E){C.addRule(D,E);
},"default":function(q,r,s){q.insertRule(r+j+s+l,q.cssRules.length);
}}),removeRule:qx.core.Variant.select(p,{"mshtml":function(R,S){var T=R.rules;
var U=T.length;

for(var i=U-1;i>=0;--i){if(T[i].selectorText==S){R.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(p,{"mshtml":function(L){var M=L.rules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.removeRule(i);
}},"default":function(O){var P=O.cssRules;
var Q=P.length;

for(var i=Q-1;i>=0;i--){O.deleteRule(i);
}}}),addImport:qx.core.Variant.select(p,{"mshtml":function(V,W){V.addImport(W);
},"default":function(F,G){F.insertRule(k+G+h,F.cssRules.length);
}}),removeImport:qx.core.Variant.select(p,{"mshtml":function(v,w){var x=v.imports;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].href==w){v.removeImport(i);
}}},"default":function(a,b){var c=a.cssRules;
var d=c.length;

for(var i=d-1;i>=0;i--){if(c[i].href==b){a.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(p,{"mshtml":function(z){var A=z.imports;
var B=A.length;

for(var i=B-1;i>=0;i--){z.removeImport(i);
}},"default":function(X){var Y=X.cssRules;
var ba=Y.length;

for(var i=ba-1;i>=0;i--){if(Y[i].type==Y[i].IMPORT_RULE){X.deleteRule(i);
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
(function(){var n="'>",m="[",l=", ",k="</span>",h="<span class='type-",g="</span> ",f="}",e="",d="]",c="{",K="map",J="<span class='object'>",I="]:",H="&gt;",G="<span class='object' title='Object instance with hash code: ",F="string",E="level-",D="0",C="&lt;",B="<span class='offset'>",u=":",v="qx.log.appender.Util",s="&amp;",t="&#39;",q="DIV",r="<span>",o="&quot;",p="<span class='type-key'>",w="</span>:<span class='type-",x="</span>: ",z=" ",y="]</span>: ",A="?";
qx.Class.define(v,{statics:{toHtml:function(L){var V=[];
var S,U,N,P;
V.push(B,this.formatOffset(L.offset,6),g);

if(L.object){var M=L.win.qx.core.ObjectRegistry.fromHashCode(L.object);

if(M){V.push(G+M.$$hash+n,M.classname,m,M.$$hash,y);
}}else if(L.clazz){V.push(J+L.clazz.classname,x);
}var O=L.items;

for(var i=0,T=O.length;i<T;i++){S=O[i];
U=S.text;

if(U instanceof Array){var P=[];

for(var j=0,R=U.length;j<R;j++){N=U[j];

if(typeof N===F){P.push(r+this.escapeHTML(N)+k);
}else if(N.key){P.push(p+N.key+w+N.type+n+this.escapeHTML(N.text)+k);
}else{P.push(h+N.type+n+this.escapeHTML(N.text)+k);
}}V.push(h+S.type+n);

if(S.type===K){V.push(c,P.join(l),f);
}else{V.push(m,P.join(l),d);
}V.push(k);
}else{V.push(h+S.type+n+this.escapeHTML(U)+g);
}}var Q=document.createElement(q);
Q.innerHTML=V.join(e);
Q.className=E+L.level;
return Q;
},formatOffset:function(Y,length){var bc=Y.toString();
var ba=(length||6)-bc.length;
var bb=e;

for(var i=0;i<ba;i++){bb+=D;
}return bb+bc;
},escapeHTML:function(W){return String(W).replace(/[<>&"']/g,this.__tB);
},__tB:function(a){var b={"<":C,">":H,"&":s,"'":t,'"':o};
return b[a]||A;
},toText:function(X){return this.toTextArray(X).join(z);
},toTextArray:function(bd){var bl=[];
bl.push(this.formatOffset(bd.offset,6));

if(bd.object){var be=bd.win.qx.core.ObjectRegistry.fromHashCode(bd.object);

if(be){bl.push(be.classname+m+be.$$hash+I);
}}else if(bd.clazz){bl.push(bd.clazz.classname+u);
}var bf=bd.items;
var bi,bk;

for(var i=0,bj=bf.length;i<bj;i++){bi=bf[i];
bk=bi.text;

if(bk instanceof Array){var bg=[];

for(var j=0,bh=bk.length;j<bh;j++){bg.push(bk[j].text);
}
if(bi.type===K){bl.push(c,bg.join(l),f);
}else{bl.push(m,bg.join(l),d);
}}else{bl.push(bk);
}}return bl;
}}});
})();
(function(){var d="debug",c="log",b="qx.log.appender.Native",a="qx.client";
qx.Class.define(b,{statics:{process:qx.core.Variant.select(a,{"gecko":function(m){if(window.console&&console.firebug){console[m.level].call(console,qx.log.appender.Util.toText(m));
}},"mshtml":function(g){if(window.console){var i=g.level;

if(i==d){i=c;
}var h=qx.log.appender.Util.toText(g);
console[i](h);
}},"webkit":function(j){if(window.console){var l=j.level;

if(l==d){l=c;
}var k=qx.log.appender.Util.toText(j);
console[l](k);
}},"opera":function(f){}})},defer:function(e){qx.log.Logger.register(e);
}});
})();
(function(){var k="",j='</div>',i="Up",h="none",g="keypress",f='.qxconsole .messages{background:white;height:100%;width:100%;overflow:auto;}',d="Enter",c="px",b='.qxconsole .messages .user-result{background:white}',a='.qxconsole .messages .level-error{background:#FFE2D5}',V="div",U="user-command",T='<div class="command">',S='.qxconsole .command input:focus{outline:none;}',R='.qxconsole .messages .type-key{color:#565656;font-style:italic}',Q='.qxconsole .messages .type-instance{color:#565656;font-weight:bold}',P='.qxconsole .messages div{padding:0px 4px;}',O='.qxconsole .messages .level-debug{background:white}',N='.qxconsole .messages .type-class{color:#5F3E8A;font-weight:bold}',M="DIV",r='.qxconsole .messages .level-user{background:#E3EFE9}',s='<div class="qxconsole">',p="D",q='.qxconsole .messages .type-map{color:#CC3E8A;font-weight:bold;}',n='.qxconsole .messages .type-string{color:black;font-weight:normal;}',o='.qxconsole .control a{text-decoration:none;color:black;}',l='<div class="messages">',m='.qxconsole .messages .type-boolean{color:#15BC91;font-weight:normal;}',t='<input type="text"/>',u="clear",B='.qxconsole .command input{width:100%;border:0 none;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',z='.qxconsole .messages .type-array{color:#CC3E8A;font-weight:bold;}',F='.qxconsole{z-index:10000;width:600px;height:300px;top:0px;right:0px;position:absolute;border-left:1px solid black;color:black;border-bottom:1px solid black;color:black;font-family:Consolas,Monaco,monospace;font-size:11px;line-height:1.2;}',D='.qxconsole .command{background:white;padding:2px 4px;border-top:1px solid black;}',I='.qxconsole .messages .user-command{color:blue}',H="F7",w="qx.log.appender.Console",L='.qxconsole .messages .level-info{background:#DEEDFA}',K="block",J='.qxconsole .messages .level-warn{background:#FFF7D5}',v='.qxconsole .messages .type-stringify{color:#565656;font-weight:bold}',x='.qxconsole .messages .user-error{background:#FFE2D5}',y='.qxconsole .control{background:#cdcdcd;border-bottom:1px solid black;padding:4px 8px;}',A='<div class="control"><a href="javascript:qx.log.appender.Console.clear()">Clear</a> | <a href="javascript:qx.log.appender.Console.toggle()">Hide</a></div>',C=">>> ",E="Down",G='.qxconsole .messages .type-number{color:#155791;font-weight:normal;}';
qx.Class.define(w,{statics:{init:function(){var bd=[F,y,o,f,P,I,b,x,O,L,J,a,r,n,G,m,z,q,R,N,Q,v,D,B,S];
qx.bom.Stylesheet.createElement(bd.join(k));
var bf=[s,A,l,j,T,t,j,j];
var bg=document.createElement(M);
bg.innerHTML=bf.join(k);
var be=bg.firstChild;
document.body.appendChild(bg.firstChild);
this.__FY=be;
this.__Ga=be.childNodes[1];
this.__Gb=be.childNodes[2].firstChild;
this.__Gg();
qx.log.Logger.register(this);
qx.core.ObjectRegistry.register(this);
},dispose:function(){qx.event.Registration.removeListener(document.documentElement,g,this.__Gh,this);
qx.log.Logger.unregister(this);
},clear:function(){this.__Ga.innerHTML=k;
},process:function(W){this.__Ga.appendChild(qx.log.appender.Util.toHtml(W));
this.__Gc();
},__Gc:function(){this.__Ga.scrollTop=this.__Ga.scrollHeight;
},__Gd:true,toggle:function(){if(!this.__FY){this.init();
}else if(this.__FY.style.display==h){this.show();
}else{this.__FY.style.display=h;
}},show:function(){if(!this.__FY){this.init();
}else{this.__FY.style.display=K;
this.__Ga.scrollTop=this.__Ga.scrollHeight;
}},__Ge:[],execute:function(){var bc=this.__Gb.value;

if(bc==k){return;
}
if(bc==u){return this.clear();
}var ba=document.createElement(V);
ba.innerHTML=qx.log.appender.Util.escapeHTML(C+bc);
ba.className=U;
this.__Ge.push(bc);
this.__Gf=this.__Ge.length;
this.__Ga.appendChild(ba);
this.__Gc();

try{var bb=window.eval(bc);
}catch(Y){qx.log.Logger.error(Y);
}
if(bb!==undefined){qx.log.Logger.debug(bb);
}},__Gg:function(e){this.__Ga.style.height=(this.__FY.clientHeight-this.__FY.firstChild.offsetHeight-this.__FY.lastChild.offsetHeight)+c;
},__Gh:function(e){var bi=e.getKeyIdentifier();
if((bi==H)||(bi==p&&e.isCtrlPressed())){this.toggle();
e.preventDefault();
}if(!this.__FY){return;
}if(!qx.dom.Hierarchy.contains(this.__FY,e.getTarget())){return;
}if(bi==d&&this.__Gb.value!=k){this.execute();
this.__Gb.value=k;
}if(bi==i||bi==E){this.__Gf+=bi==i?-1:1;
this.__Gf=Math.min(Math.max(0,this.__Gf),this.__Ge.length);
var bh=this.__Ge[this.__Gf];
this.__Gb.value=bh||k;
this.__Gb.select();
}}},defer:function(X){qx.event.Registration.addListener(document.documentElement,g,X.__Gh,X);
}});
})();
(function(){var F="execute",E="/",D="",C="current",B="visible",A="excluded",z="modelLink",y="tags",x="category",v="all",bS="_blank",bR="widget",bQ="node",bP="html",bO="horizontal",bN="~",bM="separator-vertical",bL="request",bK="qx.version",bJ="Ctrl+Left",M="tree1",N="^.*",K="Ctrl+O",L="changeValue",I='_cmdNextSample',J="F5",G="Filter...",H='"',U="logappender",V="http://demo.qooxdoo.org/",bl=".html",bh="interval",bt="#",bo="demobrowser.DemoBrowser",bF="f2",bz="Ctrl+Right",bc="value",bI='{"code": ',bH="Ctrl+P",bG="runbutton",ba="changeSelection",be="ig",bg="f1",bj="_",bm="noPlayground",bp='_cmdNamespacePollution',bv="icon/16/actions/edit-find.png",bB="/playground/",O="?qx.theme=",P='"}',bd="Ctrl+N",bs="animation",br="textfield",bq='_cmdRunSample',bx='_cmdDisposeSample',bw="qx.theme.Modern",bn='_cmdSampleInOwnWindow',bu="completed",o=".",bA="right",Q="main",R="mainsplit",bi="failed",p="toolbar",q='_cmdObjectSummary',Y="filled",S="js",T="demo/welcome.html",X="Ctrl+D",bk='demo/',bD="_history",bC=".*",bf=" ",bE="background-splitpane",bb="left",by="log",W='_cmdPrevSample';
qx.Class.define(bo,{extend:qx.ui.container.Composite,construct:function(){var co,cl,cq;
qx.ui.container.Composite.call(this);
var cn=new qx.ui.layout.VBox;
cn.setSeparator(bM);
this.setLayout(cn);
this.add(this.__KN());
this.widgets={};
this.tests={};
this.__Kb=bw;
this.__Kt();
this.__Kc=this.__KA();
this.add(this.__Kc);
var ct=new qx.ui.splitpane.Pane(bO);
this.mainsplit=ct;
var cx=new qx.ui.splitpane.Pane(bO);
cx.setDecorator(null);
this.infosplit=cx;
this.add(ct,{flex:1});
var cu=new qx.ui.container.Composite();
cu.setLayout(new qx.ui.layout.VBox(3));
cu.setBackgroundColor(bE);
ct.add(cu,0);
{};
var cm=new qx.ui.container.Composite();
cm.setLayout(new qx.ui.layout.HBox(3));
cm.setAppearance(br);
cu.add(cm);
var cp=new qx.ui.basic.Image(bv);
cm.add(cp);
this.__Kd=new qx.ui.form.TextField();
this.__Kd.setLiveUpdate(true);
this.__Kd.setAppearance(bR);
this.__Kd.setPlaceholder(G);
this.__Kd.addListener(L,function(e){this.filter(e.getData());
},this);
cm.add(this.__Kd,{flex:1});
{};
this.__Ke=new qx.ui.basic.Label(D);
this.__Ke.setAppearance(bR);
this.__Ke.setWidth(80);
this.__Ke.setTextAlign(bA);
cm.add(this.__Ke);
ct.add(cx,1);
this.__Kf=this.__KF();
cu.add(this.__Kf,{flex:1});
var cv=this.__KB();
cx.add(cv,2);
var cj=this.__KD();
var ck=this.__KE();
var cr=this.__KC();
var cs=new qx.ui.container.Stack;
cs.setDecorator(Q);
cs.add(cj);
cs.add(ck);
cs.add(cr);
this.viewGroup.addListener(ba,function(e){var cc=e.getData()[0];
var cd=cc!=null?cc.getUserData(bc):D;

switch(cd){case bP:this.setSelection([cj]);
cs.show();
break;
case S:this.setSelection([ck]);
cs.show();
break;
case by:this.setSelection([cr]);
cs.show();
break;
default:this.resetSelection();
cs.exclude();
}},cs);
cx.add(cs,1);
cs.resetSelection();
cs.exclude();
this._history=qx.bom.History.getInstance();
this._history.addListener(bL,function(e){var ew=e.getData().replace(bN,E);

if(this._currentSample!=ew){this.setCurrentSample(ew);
}},this);
this.__Kg=[this.__Kp,this.__Kk,this.__Kq,this.__Kr];
this.__Kh=new qx.event.Timer(250);
this.__Kh.addListener(bh,this.__KH,this);
this.__Kh.start();
},properties:{playDemos:{check:[v,x,C],init:C}},members:{__Ki:null,__Kb:null,__Kh:null,__Kj:null,__Kf:null,__Ke:null,__Kd:null,__Kk:null,__Kl:null,__Kg:null,__Km:null,__Kn:null,__Ko:null,__Kp:null,__Kq:null,__Kr:null,__Ks:null,__Kc:null,defaultUrl:T,playgroundUrl:V+qx.core.Setting.get(bK)+bB,__Kt:function(){this._cmdObjectSummary=new qx.ui.core.Command(K);
this._cmdObjectSummary.addListener(F,this.__Ku,this);
this._cmdRunSample=new qx.ui.core.Command(J);
this._cmdRunSample.addListener(F,this.runSample,this);
this._cmdPrevSample=new qx.ui.core.Command(bJ);
this._cmdPrevSample.addListener(F,this.playPrev,this);
this._cmdNextSample=new qx.ui.core.Command(bz);
this._cmdNextSample.addListener(F,this.playNext,this);
this._cmdSampleInOwnWindow=new qx.ui.core.Command(bd);
this._cmdSampleInOwnWindow.addListener(F,this.__Kv,this);
this._cmdDisposeSample=new qx.ui.core.Command(X);
this._cmdDisposeSample.addListener(F,this.__Ky,this);
this._cmdNamespacePollution=new qx.ui.core.Command(bH);
this._cmdNamespacePollution.addListener(F,this.__Kz,this);
},__Ku:function(){var bY=this.__Ki.getWindow();

if(bY&&bY.qx){alert(bY.qx.dev.ObjectSummary.getInfo());
}else{alert("Unable to access namespace. Maybe no demo loaded.");
}},__Kv:function(){var ex=this.__Ki.getWindow().location.href;
window.open(ex,bS);
},__Kw:function(dn){var dp=!!dn;
var dq=this.__Kf.getSelection()[0].getUserData(y);

if(dq){dp=dp&&!qx.lang.Array.contains(dq,bm);
}this.__Kl=dn;
},__Kx:function(){if(this.__Kl){var dU=this.__Kl;
var dT=bI+H+encodeURIComponent(dU)+P;
var dS=this.playgroundUrl+bt+encodeURIComponent(dT);
window.open(dS,bS);
}else{alert(this.tr("Could not open the Playground."));
}},__Ky:function(e){var dR=this.__Ki.getWindow();

if(dR&&dR.qx){dR.qx.core.ObjectRegistry.shutdown();
alert("Done!");
}else{alert("Unable to access application.");
}},__Kz:function(e){var ci=this.__Ki.getWindow();

if(ci&&ci.qx){alert(ci.qx.dev.Pollution.getInfo());
}else{alert("Unable to access application.");
}},__KA:function(){var dy=new qx.ui.toolbar.ToolBar();
this._navPart=new qx.ui.toolbar.Part();
dy.add(this._navPart);
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
var dL=new qx.ui.toolbar.Button(this.tr("Previous"),"icon/22/actions/go-previous.png");
dL.addListener("execute",this.playPrev,this);
dL.setToolTipText("Run previous demo");
this._navPart.add(dL);
var dO=new qx.ui.toolbar.Button(this.tr("Next"),"icon/22/actions/go-next.png");
dO.addListener("execute",this.playNext,this);
dO.setToolTipText("Run next demo");
this._navPart.add(dO);
var dH=new qx.ui.toolbar.Button(this.tr("Own Window"),"icon/22/actions/edit-redo.png");
dH.addListener("execute",this.__Kv,this);
dH.setToolTipText("Open demo in new window");
this.__Kp=dH;
this._navPart.add(dH);
{var dx=new qx.ui.toolbar.Button(this.tr("To Playground"),"icon/22/actions/application-exit.png");
dx.addListener("execute",this.__Kx,this);
dx.setToolTipText("Open demo in the playground");
dx.setEnabled(false);
if(qx.core.Variant.isSet("qx.client","mshtml")){dx.exclude();
}this.__Kk=dx;
this._navPart.add(dx);
};
var dz=new qx.ui.toolbar.Part;
this.__Kr=dz;
dy.add(dz);
{var dK=new qx.ui.menu.Menu;
this.__Ks=dK;
var dF=new qx.ui.menu.RadioButton("Modern Theme");
var dD=new qx.ui.menu.RadioButton("Classic Theme");
dF.setUserData("value","qx.theme.Modern");
dF.setValue(true);
dD.setUserData("value","qx.theme.Classic");
var dM=new qx.ui.form.RadioGroup(dF,dD);
dM.addListener("changeSelection",this.__KM,this);
dK.add(dF);
dK.add(dD);
var dv=new qx.ui.toolbar.MenuButton(this.tr("Theme"),"icon/22/apps/utilities-color-chooser.png",dK);
dv.setToolTipText("Choose theme");
dz.add(dv);
};
var dB=new qx.ui.menu.Menu;
{var dC=new qx.ui.menu.Button(this.tr("Object Summary"));
dC.setCommand(this._cmdObjectSummary);
dB.add(dC);
var dN=new qx.ui.menu.Button(this.tr("Global Namespace Pollution"));
dN.setCommand(this._cmdNamespacePollution);
dB.add(dN);
};
var dI=new qx.ui.menu.Button(this.tr("Dispose Demo"));
dI.setCommand(this._cmdDisposeSample);
dB.add(dI);
var dJ=new qx.ui.toolbar.MenuButton(this.tr("Debug"),"icon/22/apps/office-spreadsheet.png",dB);
dJ.setToolTipText("Debugging options");
dz.add(dJ);
var dw=new qx.ui.toolbar.Part;
this.__Kq=dw;
dy.addSpacer();
dy.add(dw);
{var dP=new qx.ui.toolbar.RadioButton("HTML Code","icon/22/apps/internet-web-browser.png");
dP.setToolTipText("Display HTML source");
var dG=new qx.ui.toolbar.RadioButton("JS Code","icon/22/mimetypes/executable.png");
dG.setToolTipText("Display JavaScript source");
dP.setUserData("value","html");
dG.setUserData("value","js");
dw.add(dP);
dw.add(dG);
};
var dE=new qx.ui.toolbar.RadioButton("Log File","icon/22/apps/utilities-log-viewer.png");
dE.setToolTipText("Display log file");
dE.setUserData("value","log");
dw.add(dE);
var dA=this.viewGroup=new qx.ui.form.RadioGroup;
dA.setAllowEmptySelection(true);
dA.add(dE);
{dA.add(dP,dG);
};
return dy;
},__KB:function(){var er=new qx.ui.embed.Iframe().set({nativeContextMenu:true});
er.addListener("load",this.__KG,this);
this.__Ki=er;
return er;
},__KC:function(){var eo=new qx.ui.layout.VBox(0,"middle","main");
eo.setAlignX("right");
var eq=new qx.ui.container.Composite(eo);
var em=new qx.ui.decoration.Background().set({backgroundColor:"background-medium"});
eq.setDecorator(em);
var ep=new qx.ui.form.Button(this.tr("Clear log"),"icon/22/actions/edit-clear.png");
ep.setAllowGrowX(false);
ep.setMargin(5);
ep.addListener("execute",function(){this.logappender.clear();
},this);
eq.add(ep,{flex:0});
this.f2=new qx.ui.embed.Html();
this.f2.setOverflow("auto","auto");
this.f2.setFont("monospace");
this.f2.setBackgroundColor("white");
this.logappender=new qx.log.appender.Element();
qx.log.Logger.unregister(this.logappender);
var en=document.createElement("div");
this.logelem=document.createElement("div");
this.logelem.style.padding="8px";
this.logappender.setElement(this.logelem);
en.appendChild(this.logelem);
this.f2.getContentElement().useElement(en);
eq.add(this.f2,{flex:1});
return eq;
},__KD:function(){var bU=new qx.ui.embed.Html("<div class='script'>The sample source will be displayed here.</div>");
bU.setOverflow("auto","auto");
bU.setFont("monospace");
bU.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.html.page"]=bU;
bU.getContentElement().setAttribute("id","qx_srcview");
return bU;
},__KE:function(){var bT=new qx.ui.embed.Html("<div class='script'>The sample JS source will be displayed here.</div>");
bT.setOverflow("auto","auto");
bT.setFont("monospace");
bT.setBackgroundColor("white");
this.widgets["outputviews.sourcepage.js.page"]=bT;
bT.getContentElement().setAttribute("id","qx_srcview");
return bT;
},__KF:function(){var cP=new qx.ui.tree.Tree();
var cO=new qx.ui.tree.TreeFolder("Demos");
cP.setAppearance("demo-tree");
cP.setRoot(cO);
cP.setSelection([cO]);
this.tree=this.widgets["treeview.flat"]=cP;
cP.addListener("changeSelection",this.treeGetSelection,this);
cP.addListener("dblclick",function(e){qx.event.Timer.once(this.runSample,this,50);
},this);
return cP;
},treeGetSelection:function(e){var ca=this.tree.getSelection()[0];
var cb=ca.getUserData(z);
this.tests.selected=this.tests.handler.getFullName(cb);
},leftReloadTree:function(e){this._sampleToTreeNodeMap={};
var cQ=this._sampleToTreeNodeMap;
var cW=null;
var da=null;
var cY=/\?autorun=true/.test(location.href);
var cV=this._history.getState();
var cT=cV.match(/([^~]+)~/);

if(cT){cW=cT[1];
}else{var cR=cV.match(/([^~][\w]*)/);

if(cR){cW=cR[1];

if(cY){this.setPlayDemos(x);
}}else{cW=bs;

if(cY){this.setPlayDemos(v);
}}}function cX(a,b){var f=b.getChildren();
var t;

for(var i=0;i<f.length;i++){var d=f[i];

if(d.hasChildren()){t=new qx.ui.tree.TreeFolder(cS.polish(d.label));
t.setUserData(Y,false);
t.setUserData(bQ,d);
cX(t,t.getUserData(bQ));

if(d.label==cW){da=t;
t.setOpen(true);
}}else{t=new qx.ui.tree.TreeFile(cS.polish(d.label));
t.setUserData(y,d.tags);
{};
var c=d.pwd().slice(1).join(E)+E+d.label;
cQ[c]=t;
}a.add(t);
t.setUserData(z,d);
d.widgetLinkFull=t;
}}var cU=this.tests.handler.ttree;
var cS=this;
this.tree.setUserData(z,cU);
this.tree.getRoot().setOpen(true);
cX(this.tree.getRoot(),cU);
{};

if(da!=null){this.tree.setSelection([da]);
}},runSample:function(e){if(e&&e.getType()===F){if(this.tests.selected===D){this.setPlayDemos(v);
}else if(this.tests.selected.indexOf(bP)>0){this.setPlayDemos(C);
}else{this.setPlayDemos(x);
}}this._runbutton.setVisibility(A);
this._stopbutton.setVisibility(B);

if(this.tests.selected!=D){var n=this.tests.selected.replace(o,E);
this.setCurrentSample(n);
}else{this.playNext();
}},stopSample:function(e){this.setPlayDemos(C);
this._stopbutton.setVisibility(A);
this._runbutton.setVisibility(B);
},setCurrentSample:function(ej){if(!ej){return;
}
if(!this._sampleToTreeNodeMap){return;
}var ek;
var el=this._sampleToTreeNodeMap[ej];

if(el){el.getTree().setSelection([el]);
ek=bk+ej;
{ek+=O+this.__Kb;
};
}else{ek=this.defaultUrl;
}
if(this.__Ki.getSource()==ek){this.__Ki.reload();
}else{this.__Kj=false;
this.__Ki.setSource(ek);
}if(ek==this.defaultUrl){this.disableMenuButtons();
}else{this.enableMenuButtons();
}this._currentSample=ej;
this._currentSampleUrl=ek;
},__KG:function(){var cF=this.__Ki.getWindow();
var cG=cF.location.pathname+"";
var cN=cG.indexOf("?");

if(cN!=-1){cG=cG.substring(0,cN+1);
}var cM=this.__Ki.getSource();

if(cM!=null&&cM!=this.defaultUrl){var cE=cF.location.href;
var cK=cE.indexOf("/demo/")+6;
var cH=cE.indexOf("?");
cH=cH==-1?cE.length:cH;
var cI=cE.substring(cK,cH).split("/");
var cL=String.fromCharCode(187);

if(cI.length==2){var cC=cI[0];
cC=cC.charAt(0).toUpperCase()+cC.substring(1);
var cJ=cI[1].replace(".html","").replace("_"," ");
cJ=cJ.charAt(0).toUpperCase()+cJ.substring(1);
var cD="qooxdoo "+cL+" Demo Browser "+cL+" "+cC+" "+cL+" "+cJ;
}else{var cD="qooxdoo "+cL+" Demo Browser "+cL+" Start";
}document.title=cD;
}if(this.getPlayDemos()!="current"){if(!cJ){this.playNext();
}else{var self=this;
qx.event.Timer.once(this.playNext,self,5000);
}}else{this._stopbutton.setVisibility("excluded");
this._runbutton.setVisibility("visible");
}},__KH:function(e){var cy=this.__Ki.getWindow();

if(cy&&cy.qx&&cy.qx.log&&cy.qx.log.appender){if(!this.__Kj){this.__Kj=true;
this.debug("Demo loaded: "+this._currentSample);
this.logappender.$$id=null;
this.logappender.clear();

try{cy.qx.log.Logger.register(this.logappender);
}catch(e){return ;
}this._history.addToHistory(this._currentSample.replace("/","~"),document.title);
if(this._currentSampleUrl!=this.defaultUrl){this.__KI(this._currentSampleUrl);
}}}else{this.__Kj=false;
}},filter:function(eB){var eJ=new RegExp(N+eB+bC,be);
var eH=this.__Kf.getRoot().getItems(true,true);
var eI=0;
var eC=0;

for(var i=0;i<eH.length;i++){var eK=eH[i];
var parent=eK.getParent();
var eG=eK.getUserData(y);
var eD=false;
var eL=false;
{eL=true;
};

if(eG!=null){for(var j=0;j<eG.length;j++){eD=!!eG[j].match(eJ);
{if(eD){break;
}};
}}
if(eK.getChildren().length==0){eC++;
}
if((eD||(eK.getLabel().search(eJ)!=-1)||(parent.getLabel().search(eJ)!=-1))&&eL){if(eK.getChildren().length==0){eI++;
}eK.show();
eK.getParent().setOpen(true);
eK.getParent().show();
}else{eK.exclude();
}}if(eB==D){var eF=this.__Kf.getRoot().getItems(false,true);
var eE=this.__Kf.getSelection();
for(var i=0;i<eF.length;i++){if(eF[i]==eE[0]||eF[i]==eE[0].getParent()){continue;
}eF[i].setOpen(false);
}}this.__Ke.setValue(eI+E+eC);
},__KI:function(ey){if(typeof (ey)!="string"){return;
}var ez=new qx.io.remote.Request(ey);
ez.setTimeout(180000);
ez.setProhibitCaching(false);
ez.addListener("completed",function(dd){var content=dd.getContent();
if(content){{var dg=content.indexOf("<script",content.indexOf("<script")+7);
var dm=content.indexOf("src",dg);
var df=content.indexOf("\"",dm+5);
var dh=content.substring(dm+5,df);
var dk=dh.substring(4,dh.length-3)+".src.js";
var u="script/demobrowser.demo";
var dj=ey.split('/');
var di=dj[1];
var dl=dj[2];
dl=dl.substr(0,dl.indexOf('.html'));
u+="."+di+"."+dl+".src.js";
dk=u;
var de=new qx.io.remote.Request(dk);
de.setTimeout(180000);
de.setProhibitCaching(false);
de.addListener("completed",function(eg){var eh=eg.getContent();
this.__Kw(eh);

if(eh){this.widgets["outputviews.sourcepage.js.page"].setHtml(this.__KJ(eh,"javascript"));
}},this);
de.addListener("failed",function(ei){this.error("Couldn't load file: "+ey);
},this);
de.send();
this.widgets["outputviews.sourcepage.html.page"].setHtml(this.__KJ(content));
};
}},this);
ez.addListener("failed",function(db){this.error("Couldn't load file: "+ey);
},this);
ez.send();
},dataLoader:function(ee){var ef=new qx.io.remote.Request(ee);
ef.setTimeout(180000);
ef.setProhibitCaching(false);
ef.addListener(bu,function(k){var content=k.getContent();
var l=eval(content);
qx.event.Timer.once(function(){this.tests.handler=new demobrowser.TreeDataHandler(l);
this.leftReloadTree();
var ev=this._history.getState();

if(ev){this.setCurrentSample(ev.replace(bN,E));
}else{this.setCurrentSample(this.defaultUrl);
}},this,0);
},this);
ef.addListener(bi,function(dc){this.error("Couldn't load file: "+ee);
},this);
ef.send();
},playPrev:function(e){this.setPlayDemos(C);
var du=this.tree.getSelection()[0];

if(du){var dr=this.tree.getPreviousNodeOf(du,false);

if(!dr||dr==this.tree.getRoot()){return;
}
while(dr.isVisible&&!dr.isVisible()){dr=this.tree.getPreviousNodeOf(dr,false);
}
if(dr.getParent()==this.tree.getRoot()){var dt=this.tree.getPreviousNodeOf(dr,false);

while(dt.isVisible&&!dt.isVisible()){dt=this.tree.getPreviousNodeOf(dt,false);
}
if(dt.getParent()==this.tree.getRoot()){dt.setOpen(true);
var ds=this.tree.getPreviousNodeOf(dr,false);

while(ds.isVisible&&!ds.isVisible()){ds=this.tree.getPreviousNodeOf(ds,false);
}
if(dt!==ds){dr=ds;
}}else{dr=dt;
}}
if(!dr||dr===du){this._stopbutton.setVisibility(A);
this._runbutton.setVisibility(B);
return;
}else{this.tree.setSelection([dr]);
this.runSample();
}}},playNext:function(e){var bX=this.tree.getSelection()[0];

if(bX){var bV=this.tree.getNextNodeOf(bX,false);

if(!bV){return;
}
if(bV.getParent()==this.tree.getRoot()){bV.setOpen(true);
bV=this.tree.getNextNodeOf(bV,false);
}
if(!bV){return;
}
while(!bV.isVisible()){var bW=this.tree.getNextNodeOf(bV,false);

if(!bW){return ;
}
if(bW.getParent()==this.tree.getRoot()){bV.setOpen(true);
var bW=this.tree.getNextNodeOf(bW,false);
}bV=bW;
}
if(bV){this.tree.setSelection([bV]);
this.runSample();
}else{this._stopbutton.setVisibility(A);
this._runbutton.setVisibility(B);
}}},__KJ:function(dV,dW){var dX=new qx.util.StringBuilder("<pre class='script'>");
var ea=[];
var eb=new qx.util.StringBuilder();
var ec=/^\s*<script\b[^>]*?(?!\bsrc\s*=)[^>]*?>\s*$/i;
var dY=/^\s*<\/script>\s*$/i;
dV=dV.replace(/\r\n/g,"\n").replace(/\r/g,"\n");
var ea=dV.split('\n');
if(dW=="javascript"){return "<pre ><div class='script'>"+qx.dev.Tokenizer.javaScriptToHtml(dV)+"</div></pre>";
}
for(var i=0;i<ea.length;i++){if(ec.exec(ea[i])){dX.add(this.__KK(qx.bom.String.escape(eb.get()+ea[i])));
eb.clear();
}else if(dY.exec(ea[i])){var ed=qx.dev.Tokenizer.javaScriptToHtml(eb.get());
dX.add('<div class="script">',ed,'</div>');
eb.clear();
eb.add(ea[i],'\n');
}else{eb.add(ea[i],'\n');
}}dX.add(this.__KK(qx.bom.String.escape(eb.get())),"</pre>");
return dX.get();
},disableMenuButtons:function(){var h=this.__Kg;

for(var i=0;i<h.length;i++){h[i].setEnabled(false);
}},enableMenuButtons:function(){var eA=this.__Kg;

for(var i=0;i<eA.length;i++){eA[i].setEnabled(true);
}},__KK:function(cz){var cB=cz;
function cA(es){var s=new qx.util.StringBuilder(arguments[1],'<span class="html-tag-name">',arguments[2],'</span>');
var et;
var eu=false;
if(arguments.length-2>3){for(var i=3;i<arguments.length-2;i++){et=arguments[i];

if(et=="/"){eu=true;
break;
}else{var m=/\s*([^=]+?)\s*=\s*((?!&quot;)\S+|&quot;.*?&quot;)\s*/g;
var r;

while((r=m.exec(et))!=null){s.add(' <span class="keyword">',r[1],'</span>=<span class="string">',r[2].replace(/\s*$/,""),'</span>');
}}}s.add((eu?"/":""));
}s.add('&gt;');
return s.get();
}cB=cB.replace(/(&lt;\/?)([a-zA-Z]+)(.*?)(\/?)&gt;/g,cA);
return cB;
},polish:function(dQ){return dQ.replace(bl,D).replace(bj,bf);
},__KL:function(){var w=this.__Ki.getWindow();
var g;

if(w.qx&&w.qx.log&&w.qx.log.Logger){g=w.qx.log.Logger;
g.register(this.logappender);
g.clear();
g.unregister(this.logappender);
}},__KM:function(e){this.__Kb=e.getData()[0].getUserData("value");
this.runSample();
},__KN:function(){var cg=new qx.ui.layout.HBox();
var ce=new qx.ui.container.Composite(cg);
ce.setAppearance("app-header");
var ch=new qx.ui.basic.Label("Demo Browser");
var cf=new qx.ui.basic.Label("qooxdoo "+qx.core.Setting.get("qx.version"));
ce.add(ch);
ce.add(new qx.ui.core.Spacer,{flex:1});
ce.add(cf);
return ce;
},__KO:undefined,__KP:undefined},destruct:function(){this.widgets=this.tests=this._sampleToTreeNodeMap=this.tree=this.logelem=null;
this._disposeObjects(R,M,bb,bG,p,bg,bF,bD,U,q,bq,W,I,bn,bx,bp);
}});
})();
(function(){var v="_applyLayoutChange",u="top",t="left",s="height",r="middle",q="Decorator",p="center",o="_applyReversed",n="qx.debug",m="bottom",f="' is not supported by the VBox layout!",k="qx.ui.layout.VBox",j="flex",e="Integer",d="The property '",h="right",g="Boolean";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){qx.ui.layout.Abstract.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignY(b);
}
if(c){this.setSeparator(c);
}},properties:{alignY:{check:[u,r,m],init:u,apply:v},alignX:{check:[t,p,h],init:t,apply:v},spacing:{check:e,init:0,apply:v},separator:{check:q,nullable:true,apply:v},reversed:{check:g,init:false,apply:o}},members:{__eh:null,__ei:null,__ej:null,__ek:null,_applyReversed:function(){this._invalidChildrenCache=true;
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
},verifyLayoutProperty:qx.core.Variant.select(n,{"on":function(w,name,x){this.assert(name===j||name===s,d+name+f);

if(name==s){this.assertMatch(x,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(x);
this.assert(x>=0);
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
if(R<z&&this.getAlignY()!=u){top=z-R;

if(this.getAlignY()===r){top=Math.round(top/2);
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
(function(){var bg="splitter",bf="slider",be="mousedown",bd="mouseout",bc="mousemove",bb="mouseup",ba="losecapture",Y="active",X="horizontal",W="vertical",bw="knob",bv="Integer",bu="height",bt="row-resize",bs="move",br="maxHeight",bq="width",bp="_applyOrientation",bo="mouseover",bn="splitpane",bl="qx.ui.splitpane.Pane",bm="_applyOffset",bj="minHeight",bk="minWidth",bh="col-resize",bi="maxWidth";
qx.Class.define(bl,{extend:qx.ui.core.Widget,construct:function(V){qx.ui.core.Widget.call(this);
this.__ld=[];
if(V){this.setOrientation(V);
}else{this.initOrientation();
}this.addListener(be,this._onMouseDown);
this.addListener(bb,this._onMouseUp);
this.addListener(bc,this._onMouseMove);
this.addListener(bd,this._onMouseOut);
this.addListener(ba,this._onMouseUp);
},properties:{appearance:{refine:true,init:bn},offset:{check:bv,init:6,apply:bm},orientation:{init:X,check:[X,W],apply:bp}},members:{__le:null,__lf:false,__lg:null,__lh:null,__li:null,__lj:null,__lk:null,__ld:null,_createChildControlImpl:function(bx){var by;

switch(bx){case bf:by=new qx.ui.splitpane.Slider(this);
by.exclude();
this._add(by,{type:bx});
break;
case bg:by=new qx.ui.splitpane.Splitter(this);
this._add(by,{type:bx});
by.addListener(bs,this._onSplitterMove,this);
if(qx.bom.client.Engine.OPERA){by.addListener(bo,this._onSplitterMouseOver,by);
}break;
}return by||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bx);
},_applyOrientation:function(w,z){var A=this.getChildControl(bf);
var D=this.getChildControl(bg);
this.__li=w===X;
var C=this._getLayout();

if(C){C.dispose();
}var B=w===W?new qx.ui.splitpane.VLayout:new qx.ui.splitpane.HLayout;
this._setLayout(B);
D.removeState(z);
D.addState(w);
D.getChildControl(bw).removeState(z);
D.getChildControl(bw).addState(w);
A.removeState(z);
A.addState(w);
},_applyOffset:function(J,K){var L=this.getChildControl(bg);

if(K===0){L.removeListener(be,this._onMouseDown,this);
L.removeListener(bc,this._onMouseMove,this);
L.removeListener(bd,this._onMouseOut,this);
L.removeListener(bb,this._onMouseUp,this);
L.removeListener(ba,this._onMouseUp,this);
this.addListener(be,this._onMouseDown);
this.addListener(bb,this._onMouseUp);
this.addListener(bc,this._onMouseMove);
this.addListener(bd,this._onMouseOut);
this.addListener(ba,this._onMouseUp);
}
if(J===0){this.removeListener(be,this._onMouseDown);
this.removeListener(bb,this._onMouseUp);
this.removeListener(bc,this._onMouseMove);
this.removeListener(bd,this._onMouseOut);
this.removeListener(ba,this._onMouseUp);
L.addListener(be,this._onMouseDown,this);
L.addListener(bc,this._onMouseMove,this);
L.addListener(bd,this._onMouseOut,this);
L.addListener(bb,this._onMouseUp,this);
L.addListener(ba,this._onMouseUp,this);
}},add:function(bA,bB){if(bB==null){this._add(bA);
}else{this._add(bA,{flex:bB});
}this.__ld.push(bA);
},remove:function(v){this._remove(v);
qx.lang.Array.remove(this.__ld,v);
},getChildren:function(){return this.__ld;
},_onMouseDown:function(e){if(!e.isLeftPressed()||!this._isNear()){return;
}var E=this.getChildControl(bg);
var G=E.getContainerLocation();
var F=this.getContentLocation();
this.__le=this.__li?e.getDocumentLeft()-G.left+F.left:e.getDocumentTop()-G.top+F.top;
var I=this.getChildControl(bf);
var H=E.getBounds();
I.setUserBounds(H.left,H.top,H.width,H.height);
I.setZIndex(E.getZIndex()+1);
I.show();
this.__lf=true;
e.getCurrentTarget().capture();
e.stop();
},_onMouseMove:function(e){this._setLastMousePosition(e.getDocumentLeft(),e.getDocumentTop());
if(this.__lf){this.__lm();
var T=this.getChildControl(bf);
var U=this.__lj;

if(this.__li){T.setDomLeft(U);
}else{T.setDomTop(U);
}e.stop();
}else{this.__ll();
}},_onMouseOut:function(e){this._setLastMousePosition(-100,-100);
this.__ll();
},_onMouseUp:function(e){if(!this.__lf){return;
}this._finalizeSizes();
var bz=this.getChildControl(bf);
bz.exclude();
this.__lf=false;
this.releaseCapture();
this.__ll();
e.stop();
},_onSplitterMove:function(){this.__ll();
},_onSplitterMouseOver:function(){this.addState(Y);
},_finalizeSizes:function(){var d=this.__lj;
var a=this.__lk;

if(d==null){return;
}var g=this._getChildren();
var f=g[2];
var b=g[3];
var c=f.getLayoutProperties().flex;
var h=b.getLayoutProperties().flex;
if((c!=0)&&(h!=0)){f.setLayoutProperties({flex:d});
b.setLayoutProperties({flex:a});
}else{if(this.__li){f.setWidth(d);
b.setWidth(a);
}else{f.setHeight(d);
b.setHeight(a);
}}},_isNear:function(){var M=this.getChildControl(bg);
var O=M.getBounds();
var Q=M.getContainerLocation();
var N=this.getOffset();
if(!Q){return;
}var R=this.__lg;
var S=O.width;
var P=Q.left;

if(S<N){P-=Math.floor((N-S)/2);
S=N;
}
if(R<P||R>(P+S)){return false;
}var R=this.__lh;
var S=O.height;
var P=Q.top;

if(S<N){P-=Math.floor((N-S)/2);
S=N;
}
if(R<P||R>(P+S)){return false;
}return true;
},__ll:function(){var j=this.getChildControl(bg);
var k=this.getApplicationRoot();
if(this.__lf||this._isNear()){var i=this.__li?bh:bt;
this.setCursor(i);
k.setGlobalCursor(i);
j.addState(Y);
}else if(j.hasState(Y)){this.resetCursor();
k.resetGlobalCursor();
j.removeState(Y);
}},__lm:function(){if(this.__li){var n=bk,u=bq,o=bi,s=this.__lg;
}else{var n=bj,u=bu,o=br,s=this.__lh;
}var t=this._getChildren();
var l=t[2].getSizeHint();
var q=t[3].getSizeHint();
var r=t[2].getBounds()[u]+t[3].getBounds()[u];
var p=s-this.__le;
var m=r-p;
if(p<l[n]){m-=l[n]-p;
p=l[n];
}else if(m<q[n]){p-=q[n]-m;
m=q[n];
}if(p>l[o]){m+=p-l[o];
p=l[o];
}else if(m>q[o]){p+=m-q[o];
m=q[o];
}this.__lj=p;
this.__lk=m;
},_isActiveDragSession:function(){return this.__lf;
},_setLastMousePosition:function(x,y){this.__lg=x;
this.__lh=y;
}},destruct:function(){this.__ld=null;
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
(function(){var v="_applyLayoutChange",u="left",t="width",s="center",r="top",q="Decorator",p="middle",o="_applyReversed",n="qx.debug",m="bottom",f="' is not supported by the HBox layout!",k="Boolean",j="flex",e="right",d="Integer",h="The property '",g="qx.ui.layout.HBox";
qx.Class.define(g,{extend:qx.ui.layout.Abstract,construct:function(a,b,c){qx.ui.layout.Abstract.call(this);

if(a){this.setSpacing(a);
}
if(b){this.setAlignX(b);
}
if(c){this.setSeparator(c);
}},properties:{alignX:{check:[u,s,e],init:u,apply:v},alignY:{check:[r,p,m],init:r,apply:v},spacing:{check:d,init:0,apply:v},separator:{check:q,nullable:true,apply:v},reversed:{check:k,init:false,apply:o}},members:{__fd:null,__fe:null,__ff:null,__fg:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__fh:function(){var B=this._getLayoutChildren();
var length=B.length;
var y=false;
var w=this.__fd&&this.__fd.length!=length&&this.__fe&&this.__fd;
var z;
var x=w?this.__fd:new Array(length);
var A=w?this.__fe:new Array(length);
if(this.getReversed()){B=B.concat().reverse();
}for(var i=0;i<length;i++){z=B[i].getLayoutProperties();

if(z.width!=null){x[i]=parseFloat(z.width)/100;
}
if(z.flex!=null){A[i]=z.flex;
y=true;
}else{A[i]=0;
}}if(!w){this.__fd=x;
this.__fe=A;
}this.__ff=y;
this.__fg=B;
delete this._invalidChildrenCache;
},verifyLayoutProperty:qx.core.Variant.select(n,{"on":function(bb,name,bc){this.assert(name===j||name===t,h+name+f);

if(name==t){this.assertMatch(bc,qx.ui.layout.Util.PERCENT_VALUE);
}else{this.assertNumber(bc);
this.assert(bc>=0);
}},"off":null}),renderLayout:function(C,D){if(this._invalidChildrenCache){this.__fh();
}var J=this.__fg;
var length=J.length;
var S=qx.ui.layout.Util;
var R=this.getSpacing();
var V=this.getSeparator();

if(V){var G=S.computeHorizontalSeparatorGaps(J,R,V);
}else{var G=S.computeHorizontalGaps(J,R,true);
}var i,E,P,O;
var U=[];
var K=G;

for(i=0;i<length;i+=1){O=this.__fd[i];
P=O!=null?Math.floor((C-G)*O):J[i].getSizeHint().width;
U.push(P);
K+=P;
}if(this.__ff&&K!=C){var M={};
var Q,T;

for(i=0;i<length;i+=1){Q=this.__fe[i];

if(Q>0){L=J[i].getSizeHint();
M[i]={min:L.minWidth,value:U[i],max:L.maxWidth,flex:Q};
}}var H=S.computeFlexOffsets(M,C,K);

for(i in H){T=H[i].offset;
U[i]+=T;
K+=T;
}}var ba=J[0].getMarginLeft();
if(K<C&&this.getAlignX()!=u){ba=C-K;

if(this.getAlignX()===s){ba=Math.round(ba/2);
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
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__fh();
}var bj=qx.ui.layout.Util;
var br=this.__fg;
var bd=0,bk=0,bh=0;
var bg=0,bi=0;
var bo,be,bq;
for(var i=0,l=br.length;i<l;i+=1){bo=br[i];
be=bo.getSizeHint();
bk+=be.width;
var bn=this.__fe[i];
var bf=this.__fd[i];

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
}},destruct:function(){this.__fd=this.__fe=this.__fg=null;
}});
})();
(function(){var h="slider",g="type",f="flex",e="splitter",d="qx.ui.splitpane.VLayout",c="qx.debug",b="' is not supported by the split layout!",a="The property '";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(c,{"on":function(j,name,k){this.assert(name===g||name===f,a+name+b);

if(name==f){this.assertNumber(k);
}
if(name==g){this.assertString(k);
}},"off":null}),renderLayout:function(v,w){var M=this._getLayoutChildren();
var length=M.length;
var I,L;
var y,x,G,z;

for(var i=0;i<length;i++){I=M[i];
L=I.getLayoutProperties().type;

if(L===e){x=I;
}else if(L===h){G=I;
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
}}},_computeSizeHint:function(){var u=this._getLayoutChildren();
var length=u.length;
var n,m,t;
var o=0,q=0,p=0;
var r=0,s=0,l=0;

for(var i=0;i<length;i++){n=u[i];
t=n.getLayoutProperties();
if(t.type===h){continue;
}m=n.getSizeHint();
o+=m.minHeight;
q+=m.height;
p+=m.maxHeight;

if(m.minWidth>r){r=m.minWidth;
}
if(m.width>s){s=m.width;
}
if(m.maxWidth>l){l=m.maxWidth;
}}return {minHeight:o,height:q,maxHeight:p,minWidth:r,width:s,maxWidth:l};
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
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var n="showingPlaceholder",m="color",l="",k="none",j="qx.dynlocale",i="Boolean",h="qx.client",g="qx.event.type.Data",f="readonly",d="input",bc="focusin",bb="visibility",ba="focusout",Y="changeLocale",X="hidden",W="on",V="absolute",U="readOnly",T="text",S="_applyTextAlign",u="px",v="RegExp",s=")",t="syncAppearance",q="changeValue",r="A",o="change",p="textAlign",y="focused",z="center",G="visible",E="disabled",K="url(",I="off",O="String",M="resize",B="qx.ui.form.AbstractField",R="transparent",Q="spellcheck",P="false",A="right",C="PositiveInteger",D="mshtml",F="abstract",H="block",J="webkit",L="_applyReadOnly",N="_applyPlaceholder",w="left",x="qx/static/blank.gif";
qx.Class.define(B,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm,qx.ui.form.IForm],include:[qx.ui.form.MForm],type:F,construct:function(bd){qx.ui.core.Widget.call(this);

if(bd!=null){this.setValue(bd);
}this.getContentElement().addListener(o,this._onChangeContent,this);
this.addListener(t,this._syncPlaceholder,this);
if(qx.core.Variant.isSet(j,W)){qx.locale.Manager.getInstance().addListener(Y,this._onChangeLocale,this);
}},events:{"input":g,"changeValue":g},properties:{textAlign:{check:[w,z,A],nullable:true,themeable:true,apply:S},readOnly:{check:i,apply:L,init:false},selectable:{refine:true,init:true},focusable:{refine:true,init:true},maxLength:{check:C,init:Infinity},liveUpdate:{check:i,init:false},placeholder:{check:O,nullable:true,apply:N},filter:{check:v,nullable:true,init:null}},members:{__q:true,__r:null,__s:null,__t:null,getFocusElement:function(){var bu=this.getContentElement();

if(bu){return bu;
}},_createInputElement:function(){return new qx.html.Input(T);
},renderLayout:function(bj,top,bk,bl){var bm=this._updateInsets;
var bq=qx.ui.core.Widget.prototype.renderLayout.call(this,bj,top,bk,bl);
if(!bq){return;
}var bo=bq.size||bm;
var br=u;

if(bo||bq.local||bq.margin){var bn=this.getInsets();
var innerWidth=bk-bn.left-bn.right;
var innerHeight=bl-bn.top-bn.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var bp=this.getContentElement();

if(bm){this.__w().setStyles({"left":bn.left+br,"top":bn.top+br});
}
if(bo){this.__w().setStyles({"width":innerWidth+br,"height":innerHeight+br});
bp.setStyles({"width":innerWidth+br,"height":innerHeight+br});
}},_createContentElement:function(){var bL=this._createInputElement();
bL.setStyles({"border":k,"padding":0,"margin":0,"display":H,"background":R,"outline":k,"appearance":k,"position":V,"autoComplete":I});
bL.setSelectable(this.getSelectable());
bL.setEnabled(this.getEnabled());
bL.addListener(d,this._onHtmlInput,this);
bL.setAttribute(Q,P);
if(qx.core.Variant.isSet(h,J)){bL.setStyle(M,k);
}if(qx.core.Variant.isSet(h,D)){bL.setStyles({backgroundImage:K+qx.util.ResourceManager.getInstance().toUri(x)+s});
}return bL;
},_applyEnabled:function(bJ,bK){qx.ui.core.Widget.prototype._applyEnabled.call(this,bJ,bK);
this.getContentElement().setEnabled(bJ);

if(bJ){this._showPlaceholder();
}else{this._removePlaceholder();
}},__u:{width:16,height:16},_getContentHint:function(){return {width:this.__u.width*10,height:this.__u.height||16};
},_applyFont:function(bz,bA){var bB;

if(bz){var bC=qx.theme.manager.Font.getInstance().resolve(bz);
bB=bC.getStyles();
}else{bB=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bB);
this.__w().setStyles(bB);
if(bz){this.__u=qx.bom.Label.getTextSize(r,bB);
}else{delete this.__u;
}qx.ui.core.queue.Layout.add(this);
},_applyTextColor:function(bM,bN){if(bM){this.getContentElement().setStyle(m,qx.theme.manager.Color.getInstance().resolve(bM));
this.__w().setStyle(m,qx.theme.manager.Color.getInstance().resolve(bM));
}else{this.getContentElement().removeStyle(m);
this.__w().removeStyle(m);
}},tabFocus:function(){qx.ui.core.Widget.prototype.tabFocus.call(this);
this.selectAllText();
},_getTextSize:function(){return this.__u;
},_onHtmlInput:function(e){var bh=e.getData();
var bg=true;
this.__q=false;
if(this.getFilter()!=null){var bi=l;
var be=bh.search(this.getFilter());
var bf=bh;

while(be>=0){bi=bi+(bf.charAt(be));
bf=bf.substring(be+1,bf.length);
be=bf.search(this.getFilter());
}
if(bi!=bh){bg=false;
bh=bi;
this.getContentElement().setValue(bh);
}}if(bh.length>this.getMaxLength()){var bg=false;
this.getContentElement().setValue(bh.substr(0,this.getMaxLength()));
}if(bg){this.fireDataEvent(d,bh,this.__t);
this.__t=bh;
if(this.getLiveUpdate()){this.__v(bh);
}}},__v:function(a){if(this.__s!=a){this.fireNonBubblingEvent(q,qx.event.type.Data,[a,this.__s]);
this.__s=a;
}},setValue:function(bD){if(bD===null){if(this.__q){return bD;
}bD=l;
this.__q=true;
}else{this.__q=false;
this._removePlaceholder();
}
if(qx.lang.Type.isString(bD)){var bF=this.getContentElement();

if(bD.length>this.getMaxLength()){bD=bD.substr(0,this.getMaxLength());
}
if(bF.getValue()!=bD){var bG=bF.getValue();
bF.setValue(bD);
var bE=this.__q?null:bD;
this.__s=bG;
this.__v(bE);
}this._showPlaceholder();
return bD;
}throw new Error("Invalid value type: "+bD);
},getValue:function(){var by=this.getContentElement().getValue();
return this.__q?null:by;
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(e){this.__q=e.getData()===null;
this.__v(e.getData());
},getTextSelection:function(){return this.getContentElement().getTextSelection();
},getTextSelectionLength:function(){return this.getContentElement().getTextSelectionLength();
},getTextSelectionStart:function(){return this.getContentElement().getTextSelectionStart();
},getTextSelectionEnd:function(){return this.getContentElement().getTextSelectionEnd();
},setTextSelection:function(bs,bt){this.getContentElement().setTextSelection(bs,bt);
},clearTextSelection:function(){this.getContentElement().clearTextSelection();
},selectAllText:function(){this.setTextSelection(0);
},_showPlaceholder:function(){var c=this.getValue()||l;
var b=this.getPlaceholder();

if(b!=null&&c==l&&!this.hasState(y)&&!this.hasState(E)){if(this.hasState(n)){this._syncPlaceholder();
}else{this.addState(n);
}}},_removePlaceholder:function(){if(this.hasState(n)){this.__w().setStyle(bb,X);
this.removeState(n);
}},_syncPlaceholder:function(){if(this.hasState(n)){this.__w().setStyle(bb,G);
}},__w:function(){if(this.__r==null){this.__r=new qx.html.Label();
this.__r.setStyles({"visibility":X,"zIndex":6,"position":V});
this.getContainerElement().add(this.__r);
}return this.__r;
},_onChangeLocale:qx.core.Variant.select(j,{"on":function(e){var content=this.getPlaceholder();

if(content&&content.translate){this.setPlaceholder(content.translate());
}},"off":null}),_applyPlaceholder:function(bH,bI){this.__w().setValue(bH);

if(bH!=null){this.addListener(bc,this._removePlaceholder,this);
this.addListener(ba,this._showPlaceholder,this);
this._showPlaceholder();
}else{this.removeListener(bc,this._removePlaceholder,this);
this.removeListener(ba,this._showPlaceholder,this);
this._removePlaceholder();
}},_applyTextAlign:function(bO,bP){this.getContentElement().setStyle(p,bO);
},_applyReadOnly:function(bv,bw){var bx=this.getContentElement();
bx.setAttribute(U,bv);

if(bv){this.addState(f);
this.setFocusable(false);
}else{this.removeState(f);
this.setFocusable(true);
}}},destruct:function(){this.__r=null;

if(qx.core.Variant.isSet(j,W)){qx.locale.Manager.getInstance().removeListener(Y,this._onChangeLocale,this);
}}});
})();
(function(){var b="qx.ui.form.TextField",a="textfield";
qx.Class.define(b,{extend:qx.ui.form.AbstractField,properties:{appearance:{refine:true,init:a},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}}});
})();
(function(){var t="none",s="wrap",r="value",q="qx.client",p="textarea",o="off",n="on",m="qxSelectable",l="",k="webkit",g="input",j="qx.html.Input",i="select",f="disabled",e="read-only",h="userSelect";
qx.Class.define(j,{extend:qx.html.Element,construct:function(a,b,c){if(a===i||a===p){var d=a;
}else{d=g;
}qx.html.Element.call(this,d,b,c);
this.__c=a;
},members:{__c:null,__d:null,__e:null,_createDomElement:function(){return qx.bom.Input.create(this.__c);
},_applyProperty:function(name,x){qx.html.Element.prototype._applyProperty.call(this,name,x);
var y=this.getDomElement();

if(name===r){qx.bom.Input.setValue(y,x);
}else if(name===s){qx.bom.Input.setWrap(y,x);
}},setEnabled:qx.core.Variant.select(q,{"webkit":function(z){this.__e=z;

if(!z){this.setStyles({"userModify":e,"userSelect":t});
}else{this.setStyles({"userModify":null,"userSelect":this.__d?null:t});
}},"default":function(B){this.setAttribute(f,B===false);
}}),setSelectable:qx.core.Variant.select(q,{"webkit":function(u){this.__d=u;
this.setAttribute(m,u?n:o);
if(qx.core.Variant.isSet(q,k)){var v=this.__e?u?null:t:t;
this.setStyle(h,v);
}},"default":function(w){this.setAttribute(m,w?n:o);
}}),setValue:function(C){var D=this.getDomElement();

if(D){if(D.value!=C){qx.bom.Input.setValue(D,C);
}}else{this._setProperty(r,C);
}return this;
},getValue:function(){var E=this.getDomElement();

if(E){return qx.bom.Input.getValue(E);
}return this._getProperty(r)||l;
},setWrap:function(A){if(this.__c===p){this._setProperty(s,A);
}else{throw new Error("Text wrapping is only support by textareas!");
}return this;
},getWrap:function(){if(this.__c===p){return this._getProperty(s);
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
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__g:false,__h:null,__i:null,canHandleEvent:function(L,M){var N=L.tagName.toLowerCase();

if(M===v&&(N===v||N===p)){return true;
}
if(M===w&&(N===v||N===p||N===j)){return true;
}return false;
},registerEvent:qx.core.Variant.select(u,{"mshtml":function(Y,ba,bb){if(!Y.__j){var bc=Y.tagName.toLowerCase();
var bd=Y.type;

if(bd===t||bd===s||bc===p||bd===r||bd===q){qx.bom.Event.addNativeListener(Y,d,this._onPropertyWrapper);
}
if(bd!==r&&bd!==q){qx.bom.Event.addNativeListener(Y,w,this._onChangeValueWrapper);
}
if(bd===t||bd===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,Y);
qx.bom.Event.addNativeListener(Y,n,this._onKeyPressWrapped);
}Y.__j=true;
}},"default":function(O,P,Q){if(P===v){this.__k(O);
}else if(P===w){if(O.type===q||O.type===r){qx.bom.Event.addNativeListener(O,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(O,w,this._onChangeValueWrapper);
}if(qx.core.Variant.isSet(u,m)){if(O.type===t||O.type===s){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,O);
qx.bom.Event.addNativeListener(O,n,this._onKeyPressWrapped);
}}}}}),__k:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(S){var T=S.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&T==p){qx.bom.Event.addNativeListener(S,n,this._onInputWrapper);
}qx.bom.Event.addNativeListener(S,v,this._onInputWrapper);
},"opera":function(x){qx.bom.Event.addNativeListener(x,c,this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(x,h,this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(x,k,this._onBlurWrapper);
qx.bom.Event.addNativeListener(x,v,this._onInputWrapper);
},"default":function(A){qx.bom.Event.addNativeListener(A,v,this._onInputWrapper);
}}),unregisterEvent:qx.core.Variant.select(u,{"mshtml":function(C,D){if(C.__j){var E=C.tagName.toLowerCase();
var F=C.type;

if(F===t||F===s||E===p||F===r||F===q){qx.bom.Event.removeNativeListener(C,d,this._onPropertyWrapper);
}
if(F!==r&&F!==q){qx.bom.Event.removeNativeListener(C,w,this._onChangeValueWrapper);
}
if(F===t||F===s){qx.bom.Event.removeNativeListener(C,n,this._onKeyPressWrapped);
}
try{delete C.__j;
}catch(z){C.__j=null;
}}},"default":function(H,I){if(I===v){this.__k(H);
}else if(I===w){if(H.type===q||H.type===r){qx.bom.Event.removeNativeListener(H,w,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(H,w,this._onChangeValueWrapper);
}}
if(qx.core.Variant.isSet(u,m)){if(H.type===t||H.type===s){qx.bom.Event.removeNativeListener(H,n,this._onKeyPressWrapped);
}}}}),__l:qx.core.Variant.select(u,{"mshtml":null,"webkit":function(W){var X=W.tagName.toLowerCase();
if(qx.bom.client.Engine.VERSION<532&&X==p){qx.bom.Event.removeNativeListener(W,n,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(W,v,this._onInputWrapper);
},"opera":function(R){qx.bom.Event.removeNativeListener(R,c,this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(R,h,this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(R,k,this._onBlurWrapper);
qx.bom.Event.removeNativeListener(R,v,this._onInputWrapper);
},"default":function(V){qx.bom.Event.removeNativeListener(V,v,this._onInputWrapper);
}}),_onKeyPress:qx.core.Variant.select(u,{"mshtml|opera":function(e,U){if(e.keyCode===13){if(U.value!==this.__i){this.__i=U.value;
qx.event.Registration.fireEvent(U,w,qx.event.type.Data,[U.value]);
}}},"default":null}),_onKeyDown:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=true;
}},"default":null}),_onKeyUp:qx.core.Variant.select(u,{"opera":function(e){if(e.keyCode===13){this.__g=false;
}},"default":null}),_onBlur:qx.core.Variant.select(u,{"opera":function(e){if(this.__h){window.clearTimeout(this.__h);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var G=e.target;
if(!this.__g){if(qx.core.Variant.isSet(u,m)){this.__h=window.setTimeout(function(){qx.event.Registration.fireEvent(G,v,qx.event.type.Data,[G.value]);
},0);
}else{qx.event.Registration.fireEvent(G,v,qx.event.type.Data,[G.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var bf=e.target||e.srcElement;
var be=bf.value;

if(bf.type===b){var be=[];

for(var i=0,o=bf.options,l=o.length;i<l;i++){if(o[i].selected){be.push(o[i].value);
}}}qx.event.Registration.fireEvent(bf,w,qx.event.type.Data,[be]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var y=e.target;

if(y.type===q){if(y.checked){qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.value]);
}}else{qx.event.Registration.fireEvent(y,w,qx.event.type.Data,[y.checked]);
}}),_onProperty:qx.core.Variant.select(u,{"mshtml":qx.event.GlobalError.observeMethod(function(e){var J=e.target||e.srcElement;
var K=e.propertyName;

if(K===f&&(J.type===t||J.type===s||J.tagName.toLowerCase()===p)){if(!J.$$inValueSet){qx.event.Registration.fireEvent(J,v,qx.event.type.Data,[J.value]);
}}else if(K===g){if(J.type===r){qx.event.Registration.fireEvent(J,w,qx.event.type.Data,[J.checked]);
}else if(J.checked){qx.event.Registration.fireEvent(J,w,qx.event.type.Data,[J.value]);
}}}),"default":function(){}})},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var k="",j="select",h="qx.client",g="soft",f="off",e="text",d="Unsupported input type.",c="nowrap",b="radio",a="textarea",y="auto",x="qx.debug",w="input",v="option",u="value",t="number",s="qx.bom.Input",r="normal",q="mshtml",p="wrap",n="checkbox",o="select-one",m="on";
qx.Class.define(s,{statics:{__f:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(D,E,F){if(qx.core.Variant.isSet(x,m)){qx.core.Assert.assertKeyInMap(D,this.__f,d);
}var E=E?qx.lang.Object.clone(E):{};
var G;

if(D===a||D===j){G=D;
}else{G=w;
E.type=D;
}return qx.bom.Element.create(G,E,F);
},setValue:function(V,W){var bc=V.nodeName.toLowerCase();
var Y=V.type;
var Array=qx.lang.Array;
var bd=qx.lang.Type;

if(typeof W===t){W+=k;
}
if((Y===n||Y===b)){if(bd.isArray(W)){V.checked=Array.contains(W,V.value);
}else{V.checked=V.value==W;
}}else if(bc===j){var X=bd.isArray(W);
var be=V.options;
var ba,bb;

for(var i=0,l=be.length;i<l;i++){ba=be[i];
bb=ba.getAttribute(u);

if(bb==null){bb=ba.text;
}ba.selected=X?Array.contains(W,bb):W==bb;
}
if(X&&W.length==0){V.selectedIndex=-1;
}}else if(Y===e&&qx.core.Variant.isSet(h,q)){V.$$inValueSet=true;
V.value=W;
V.$$inValueSet=null;
}else{V.value=W;
}},getValue:function(H){var N=H.nodeName.toLowerCase();

if(N===v){return (H.attributes.value||{}).specified?H.value:H.text;
}
if(N===j){var I=H.selectedIndex;
if(I<0){return null;
}var O=[];
var Q=H.options;
var P=H.type==o;
var M=qx.bom.Input;
var L;
for(var i=P?I:0,K=P?I+1:Q.length;i<K;i++){var J=Q[i];

if(J.selected){L=M.getValue(J);
if(P){return L;
}O.push(L);
}}return O;
}else{return (H.value||k).replace(/\r/g,k);
}},setWrap:qx.core.Variant.select(h,{"mshtml":function(z,A){z.wrap=A?g:f;
},"gecko|webkit":function(R,S){var U=S?g:f;
var T=S?k:y;
R.setAttribute(p,U);
R.style.overflow=T;
},"default":function(B,C){B.style.whiteSpace=C?r:c;
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
(function(){var f="__kY",d="qx.ui.core.MSingleSelectionHandling",c="changeSelection",b="changeSelected",a="qx.event.type.Data";
qx.Mixin.define(d,{events:{"changeSelection":a},members:{__kY:null,getSelection:function(){var m=this.__la().getSelected();

if(m){return [m];
}else{return [];
}},setSelection:function(i){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(i.length){case 0:this.resetSelection();
break;
case 1:this.__la().setSelected(i[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+i.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__la().resetSelected();
},isSelected:function(h){return this.__la().isSelected(h);
},isSelectionEmpty:function(){return this.__la().isSelectionEmpty();
},getSelectables:function(){return this.__la().getSelectables();
},_onChangeSelected:function(e){var k=e.getData();
var j=e.getOldData();
k==null?k=[]:k=[k];
j==null?j=[]:j=[j];
this.fireDataEvent(c,k,j);
},__la:function(){if(this.__kY==null){var l=this;
this.__kY=new qx.ui.core.SingleSelectionManager({getItems:function(){return l._getItems();
},isItemSelectable:function(g){if(l._isItemSelectable){return l._isItemSelectable(g);
}else{return g.isEnabled()&&g.isVisible();
}}});
this.__kY.addListener(b,this._onChangeSelected,this);
}this.__kY.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__kY;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__lM,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(x){var z=this._getChildren();
var y=this.getSelection()[0];
var A;

for(var i=0,l=z.length;i<l;i++){A=z[i];

if(A!=y){if(x){z[i].exclude();
}else{z[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(q){return q.isEnabled();
},__lM:function(e){var h=e.getOldData()[0];
var j=e.getData()[0];

if(h){if(this.isDynamic()){h.exclude();
}else{h.hide();
}}
if(j){j.show();
}},add:function(r){this._add(r);
var s=this.getSelection()[0];

if(!s){this.setSelection([r]);
}else if(s!==r){if(this.isDynamic()){r.exclude();
}else{r.hide();
}}},remove:function(f){this._remove(f);

if(this.getSelection()[0]===f){var g=this._getChildren()[0];

if(g){this.setSelection([g]);
}else{this.resetSelection();
}}},indexOf:function(p){return this._indexOf(p);
},getChildren:function(){return this._getChildren();
},previous:function(){var v=this.getSelection()[0];
var t=this._indexOf(v)-1;
var w=this._getChildren();

if(t<0){t=w.length-1;
}var u=w[t];
this.setSelection([u]);
},next:function(){var m=this.getSelection()[0];
var k=this._indexOf(m)+1;
var n=this._getChildren();
var o=n[k]||n[0];
this.setSelection([o]);
}}});
})();
(function(){var m="Boolean",l="qx.ui.core.SingleSelectionManager",k="qx.debug",j="__kT",h="Invalid selectionProvider!",g="__kU",f="changeSelected",e="on",d="__kV",c="qx.event.type.Data";
qx.Class.define(l,{extend:qx.core.Object,construct:function(o){qx.core.Object.call(this);

if(qx.core.Variant.isSet(k,e)){qx.core.Assert.assertInterface(o,qx.ui.core.ISingleSelectionProvider,h);
}this.__kT=o;
},events:{"changeSelected":c},properties:{allowEmptySelection:{check:m,init:true,apply:d}},members:{__kU:null,__kT:null,getSelected:function(){return this.__kU;
},setSelected:function(r){if(!this.__kX(r)){throw new Error("Could not select "+r+", because it is not a child element!");
}this.__kW(r);
},resetSelected:function(){this.__kW(null);
},isSelected:function(n){if(!this.__kX(n)){throw new Error("Could not check if "+n+" is selected,"+" because it is not a child element!");
}return this.__kU===n;
},isSelectionEmpty:function(){return this.__kU==null;
},getSelectables:function(){var a=this.__kT.getItems();
var b=[];

for(var i=0;i<a.length;i++){if(this.__kT.isItemSelectable(a[i])){b.push(a[i]);
}}return b;
},__kV:function(s,t){if(!s){this.__kW(this.__kU);
}},__kW:function(u){var x=this.__kU;
var w=u;

if(w!=null&&x===w){return;
}
if(!this.isAllowEmptySelection()&&w==null){var v=this.getSelectables()[0];

if(v){w=v;
}}this.__kU=w;
this.fireDataEvent(f,w,x);
},__kX:function(p){var q=this.__kT.getItems();

for(var i=0;i<q.length;i++){if(q[i]===p){return true;
}}return false;
}},destruct:function(){if(this.__kT.toHashCode){this._disposeObjects(j);
}else{this.__kT=null;
}this._disposeObjects(g);
}});
})();
(function(){var a="qx.ui.core.ISingleSelectionProvider";
qx.Interface.define(a,{members:{getItems:function(){},isItemSelectable:function(b){}}});
})();
(function(){var A="",z="The property 'timeoutInterval' has been deprecated. The history manager",y="now uses 'qx.event.Idle' for polling.",x="qx.debug",w="on",v='#',u="String",t="request",s="mshtml",r="Invalid attribute 'value'.",l="changeTitle",q="abstract",o="_applyState",k="qx.client",j="changeState",n="qx.bom.History",m="_applyTitle",p="qx.event.type.Data";
qx.Class.define(n,{extend:qx.core.Object,type:q,construct:function(){qx.core.Object.call(this);
this._baseUrl=window.location.href.split(v)[0]+v;
this.__tC={};
this._setInitialState();
},events:{"request":p},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(k,s)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:u,event:l,nullable:true,apply:m},state:{check:u,event:j,nullable:true,apply:o}},members:{__tC:null,_applyState:function(d,e){this._writeState(d);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(i){if(qx.lang.Type.isString(i)){return encodeURIComponent(i);
}return A;
},_decode:function(c){if(qx.lang.Type.isString(c)){return decodeURIComponent(c);
}return A;
},_applyTitle:function(b){if(b!=null){document.title=b||A;
}},addToHistory:function(D,E){if(!qx.lang.Type.isString(D)){D=D+A;
}
if(qx.lang.Type.isString(E)){this.setTitle(E);
this.__tC[D]=E;
}
if(this.getState()!==D){this._writeState(D);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(C){this.setState(C);
this.fireDataEvent(t,C);

if(this.__tC[C]!=null){this.setTitle(this.__tC[C]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(f){var g=this._baseUrl+(f||A);
var h=window.location;

if(g!=h.href){h.href=g;
}},_getHash:function(){var a=/#(.*)$/.exec(window.location.href);
return a&&a[1]?a[1]:A;
},setTimeoutInterval:function(B){if(qx.core.Variant.isSet(x,w)){qx.core.Assert.assertNumber(B,r);
qx.log.Logger.deprecatedMethodWarning(arguments.callee,z+y);
}},getTimeoutInterval:function(){if(qx.core.Variant.isSet(x,w)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z+y);
}return 100;
},resetTimeoutInterval:function(){if(qx.core.Variant.isSet(x,w)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,z+y);
}}},destruct:function(){this.__tC=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tE();
},members:{__tD:null,__tE:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__tD=qx.lang.Function.bind(this.__tG,this);
qx.bom.Event.addNativeListener(window,d,this.__tD);
}else{qx.event.Idle.getInstance().addListener(c,this.__tG,this);
}},__tF:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__tD);
}else{qx.event.Idle.getInstance().removeListener(c,this.__tG,this);
}},__tG:function(){var f=this._readState();

if(qx.lang.Type.isString(f)&&f!=this.getState()){this._onHistoryLoad(f);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(g){qx.event.Timer.once(function(){this._setHash(this._encode(g));
},this,0);
},"default":function(e){this._setHash(this._encode(e));
}})},destruct:function(){this.__tF();
}});
})();
(function(){var n="interval",m="-1000px",l="mshtml",k="",j="qx.bom.IframeHistory",i="qx/static/blank.html",h="state",g='<html><body><div id="state">',f='</div></body></html>',d="hidden",a="qx.client",c="undefined",b="absolute";
if(qx.core.Variant.isSet(a,l)){qx.Class.define(j,{extend:qx.bom.History,construct:function(){qx.bom.History.call(this);
this.__tK();
},members:{__tH:null,__tI:false,__tJ:null,_setInitialState:function(){qx.bom.History.prototype._setInitialState.call(this);
this.__tJ=this._getHash();
},_setHash:function(v){qx.bom.History.prototype._setHash.call(this,v);
this.__tJ=this._encode(v);
},_readState:function(){if(!this.__tI){return this._decode(this._getHash());
}var B=this.__tH.contentWindow.document;
var C=B.getElementById(h);
return C?this._decode(C.innerText):k;
},_writeState:function(z){var z=this._encode(z);
this._setHash(z);
this.__tJ=z;

try{var A=this.__tH.contentWindow.document;
A.open();
A.write(g+z+f);
A.close();
}catch(q){}},__tK:function(){this.__tO(function(){qx.event.Idle.getInstance().addListener(n,this.__tL,this);
});
},__tL:function(e){var p=null;
var o=this._getHash();

if(!this.__tN(o)){p=this.__tM(o);
}else{p=this._readState();
}
if(qx.lang.Type.isString(p)&&p!=this.getState()){this._onHistoryLoad(p);
}},__tM:function(w){w=this._decode(w);
this._writeState(w);
return w;
},__tN:function(x){return qx.lang.Type.isString(x)&&x==this.__tJ;
},__tO:function(r){this.__tH=this.__tP();
document.body.appendChild(this.__tH);
this.__tQ(function(){this._writeState(this.getState());

if(r){r.call(this);
}},this);
},__tP:function(){var y=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(i)});
y.style.visibility=d;
y.style.position=b;
y.style.left=m;
y.style.top=m;
return y;
},__tQ:function(s,t,u){if(typeof u===c){u=0;
}
if(!this.__tH.contentWindow||!this.__tH.contentWindow.document){if(u>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__tQ(s,t,++u);
},this,10);
return;
}this.__tI=true;
s.call(t||window);
}},destruct:function(){this.__tH=null;
qx.event.Idle.getInstance().addListener(n,this.__tL,this);
}});
}})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(f){qx.event.Registration.fireEvent(f,b);
})},members:{canHandleEvent:function(d,e){return d.tagName.toLowerCase()===a;
},registerEvent:function(k,l,m){},unregisterEvent:function(h,i,j){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var g="qx.client",f="webkit",e="body",d="iframe",c="qx.bom.Iframe";
qx.Class.define(c,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(r,s){var r=r?qx.lang.Object.clone(r):{};
var t=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var u in t){if(r[u]==null){r[u]=t[u];
}}return qx.bom.Element.create(d,r,s);
},getWindow:qx.core.Variant.select(g,{"mshtml|gecko":function(m){try{return m.contentWindow;
}catch(l){return null;
}},"default":function(a){try{var b=this.getDocument(a);
return b?b.defaultView:null;
}catch(o){return null;
}}}),getDocument:qx.core.Variant.select(g,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(n){return null;
}},"default":function(h){try{return h.contentDocument;
}catch(j){return null;
}}}),getBody:function(B){try{var C=this.getDocument(B);
return C?C.getElementsByTagName(e)[0]:null;
}catch(D){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if(qx.core.Variant.isSet(g,f)&&qx.bom.client.Platform.MAC){var z=this.getContentWindow();

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}}catch(i){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(v){var w=this.getDocument(v);

try{if(w&&w.location){return w.location.href;
}}catch(k){}return null;
}}});
})();
(function(){var o="String",n="execute",m="qx.ui.menu.Menu",l="_shortcut",k="changeEnabled",j="changeToolTipText",i="Boolean",h="qx.ui.core.Command",g="changeLabel",f="changeMenu",c="changeIcon",e="changeValue",d="_applyShortcut",b="_applyEnabled",a="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,construct:function(s){qx.core.Object.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(n,this.execute,this);
},events:{"execute":a},properties:{enabled:{init:true,check:i,event:k,apply:b},shortcut:{check:o,apply:d,nullable:true},label:{check:o,nullable:true,event:g},icon:{check:o,nullable:true,event:c},toolTipText:{check:o,nullable:true,event:j},value:{nullable:true,event:e},menu:{check:m,nullable:true,event:f}},members:{_shortcut:null,_applyEnabled:function(q){this._shortcut.setEnabled(q);
},_applyShortcut:function(r){this._shortcut.setShortcut(r);
},execute:function(p){this.fireDataEvent(n,p);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(l);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",T="Escape",S="qx.event.type.Data",R="_applyShortcut",Q="PrintScreen",P="NumLock",O="5",N="8",M="execute",L="Meta",K="0",t="2",u="This message will be made private.",r="Shift",s="You can only specify one non modifier key!",p="3",q="/",n="_applyEnabled",o="String",v="changeEnabled",w="*",C="qx.bom.Shortcut",B="6",E="4",D="1",G="Alt",F="Not a valid key name for a shortcut: ",y="PageDown",J="Whitespaces are not allowed within shortcuts",I="Delete",H="7",x="a",z="z",A="9";
qx.Class.define(C,{extend:qx.core.Object,construct:function(U){qx.core.Object.call(this);
this.__of={};
this.__og=null;

if(U!=null){this.setShortcut(U);
}this.initEnabled();
},events:{"execute":S},properties:{enabled:{init:true,check:l,event:v,apply:n},shortcut:{check:o,apply:R,nullable:true},autoRepeat:{check:l,init:false}},members:{__of:g,__og:g,execute:function(bi){this.fireDataEvent(M,bi);
},__oh:function(event){if(this.getEnabled()&&this.__oj(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__oi:function(event){if(this.getEnabled()&&this.__oj(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(ba,bb){if(ba){qx.event.Registration.addListener(document.documentElement,h,this.__oh,this);
qx.event.Registration.addListener(document.documentElement,d,this.__oi,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__oh,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__oi,this);
}},_applyShortcut:function(bc,bd){if(bc){if(bc.search(/[\s]+/)!=-1){var bg=J;
this.error(bg);
throw new Error(bg);
}this.__of={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__og=null;
var be;
var a=[];

while(bc.length>0&&be!=-1){be=bc.search(/[-+]+/);
a.push((bc.length==1||be==-1)?bc:bc.substring(0,be));
bc=bc.substring(be+1);
}var bf=a.length;

for(var i=0;i<bf;i++){var bh=this.__ol(a[i]);

switch(bh){case f:case r:case L:case G:this.__of[bh]=true;
break;
case m:var bg=F+a[i];
this.error(bg);
throw bg;
default:if(this.__og){var bg=s;
this.error(bg);
throw bg;
}this.__og=bh;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.__oj(e);
},__oj:function(e){var Y=this.__og;

if(!Y){return ;
}if((!this.__of.Shift&&e.isShiftPressed())||(this.__of.Shift&&!e.isShiftPressed())||(!this.__of.Control&&e.isCtrlPressed())||(this.__of.Control&&!e.isCtrlPressed())||(!this.__of.Meta&&e.isMetaPressed())||(this.__of.Meta&&!e.isMetaPressed())||(!this.__of.Alt&&e.isAltPressed())||(this.__of.Alt&&!e.isAltPressed())){return false;
}
if(Y==e.getKeyIdentifier()){return true;
}return false;
},__ok:{esc:T,ctrl:f,print:Q,del:I,pageup:b,pagedown:y,numlock:P,numpad_0:K,numpad_1:D,numpad_2:t,numpad_3:p,numpad_4:E,numpad_5:O,numpad_6:B,numpad_7:H,numpad_8:N,numpad_9:A,numpad_divide:q,numpad_multiply:w,numpad_minus:c,numpad_plus:k},__ol:function(bj){var bk=qx.event.handler.Keyboard;
var bl=m;

if(bk.isValidKeyIdentifier(bj)){return bj;
}
if(bj.length==1&&bj>=x&&bj<=z){return bj.toUpperCase();
}bj=bj.toLowerCase();
var bl=this.__ok[bj]||qx.lang.String.firstUp(bj);

if(bk.isValidKeyIdentifier(bl)){return bl;
}else{return m;
}},toString:function(){var X=this.__og;
var W=[];

for(var V in this.__of){if(this.__of[V]){W.push(qx.locale.Key.getKeyName(j,V));
}}
if(X){W.push(qx.locale.Key.getKeyName(j,X));
}return W.join(k);
}},destruct:function(){this.setEnabled(false);
this.__of=this.__og=null;
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
qx.Class.define(c,{extend:qx.ui.core.Widget,include:qx.ui.core.MChildrenHandling,construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.HBox());
},properties:{appearance:{refine:true,init:b},openMenu:{check:j,event:a,nullable:true},show:{init:k,check:[k,f,g],inheritable:true,event:e},spacing:{nullable:true,check:d,themeable:true,apply:h}},members:{__pz:false,_setAllowMenuOpenHover:function(t){this.__pz=t;
},_isAllowMenuOpenHover:function(){return this.__pz;
},_applySpacing:function(q,r){var s=this._getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSpacer:function(){var p=new qx.ui.core.Spacer;
this._add(p,{flex:1});
return p;
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
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jy:null,__jz:false,__jA:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jz){this.__jz=false;
}else{this.__jz=true;
o.execute(this);
}}this.fireEvent(n);
},__jB:function(e){if(this.__jz){this.__jz=false;
return;
}this.__jz=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jA);
}
if(p!=null){this.__jA=p.addListener(n,this.__jB,this);
}var t=this.__jy;

if(t==null){this.__jy=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jy=null;
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
}},properties:{menu:{check:i,nullable:true,apply:a,event:d}},members:{_applyMenu:function(p,q){if(q){q.removeListener(j,this._onMenuChange,this);
q.resetOpener();
}
if(p){p.addListener(j,this._onMenuChange,this);
p.setOpener(this);
p.removeState(h);
p.removeState(f);
}},open:function(u){var v=this.getMenu();

if(v){qx.ui.menu.Manager.getInstance().hideAll();
v.setOpener(this);
v.open();
if(u){var w=v.getSelectables()[0];

if(w){v.setSelectedButton(w);
}}}},_onMenuChange:function(e){var r=this.getMenu();

if(r.isVisible()){this.addState(l);
}else{this.removeState(l);
}},_onMouseDown:function(e){var t=this.getMenu();

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
qx.Class.define(d,{extend:qx.ui.form.MenuButton,construct:function(k,l,m){qx.ui.form.MenuButton.call(this,k,l,m);
this.removeListener(c,this._onKeyDown);
this.removeListener(a,this._onKeyUp);
},properties:{appearance:{refine:true,init:b},show:{refine:true,init:f},focusable:{refine:true,init:false}},members:{getMenuBar:function(){var parent=this;

while(parent){if(parent instanceof qx.ui.toolbar.ToolBar){return parent;
}parent=parent.getLayoutParent();
}return null;
},open:function(i){qx.ui.form.MenuButton.prototype.open.call(this,i);
var menubar=this.getMenuBar();
menubar._setAllowMenuOpenHover(true);
},_onMenuChange:function(e){var j=this.getMenu();
var menubar=this.getMenuBar();

if(j.isVisible()){this.addState(h);
if(menubar){menubar.setOpenMenu(j);
}}else{this.removeState(h);
if(menubar&&menubar.getOpenMenu()==j){menubar.resetOpenMenu();
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
(function(){var X="keypress",W="qx.debug",V="interval",U="keydown",T="on",S="mousedown",R="keyup",Q="__ms",P="blur",O="Enter",H="__mr",N="Up",K="__mt",G="Escape",F="qx.ui.menu.Manager",J="Left",I="Down",L="Right",E="singleton",M="Space";
qx.Class.define(F,{type:E,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__mr=[];
var by=document.body;
var bz=qx.event.Registration;
bz.addListener(window.document.documentElement,S,this._onMouseDown,this,true);
bz.addListener(by,U,this._onKeyUpDown,this,true);
bz.addListener(by,R,this._onKeyUpDown,this,true);
bz.addListener(by,X,this._onKeyPress,this,true);
qx.bom.Element.addListener(window,P,this.hideAll,this);
this.__ms=new qx.event.Timer;
this.__ms.addListener(V,this._onOpenInterval,this);
this.__mt=new qx.event.Timer;
this.__mt.addListener(V,this._onCloseInterval,this);
},members:{__mu:null,__mv:null,__ms:null,__mt:null,__mr:null,_getChild:function(x,y,z,A){var B=x.getChildren();
var length=B.length;
var C;

for(var i=y;i<length&&i>=0;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}
if(A){i=i==length?0:length-1;

for(;i!=y;i+=z){C=B[i];

if(C.isEnabled()&&!C.isAnonymous()){return C;
}}}return null;
},_isInMenu:function(bf){while(bf){if(bf instanceof qx.ui.menu.Menu){return true;
}bf=bf.getLayoutParent();
}return false;
},_getMenuButton:function(Y){while(Y){if(Y instanceof qx.ui.menu.AbstractButton){return Y;
}Y=Y.getLayoutParent();
}return null;
},add:function(ba){if(qx.core.Variant.isSet(W,T)){if(!(ba instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+ba);
}}var bb=this.__mr;
bb.push(ba);
ba.setZIndex(1e6+bb.length);
},remove:function(d){if(qx.core.Variant.isSet(W,T)){if(!(d instanceof qx.ui.menu.Menu)){throw new Error("Object is no menu: "+d);
}}var f=this.__mr;

if(f){qx.lang.Array.remove(f,d);
}},hideAll:function(){var bc=this.__mr;

if(bc){for(var i=bc.length-1;i>=0;i--){bc[i].exclude();
}}},getActiveMenu:function(){var j=this.__mr;
return j.length>0?j[j.length-1]:null;
},scheduleOpen:function(D){this.cancelClose(D);
if(D.isVisible()){if(this.__mu){this.cancelOpen(this.__mu);
}}else if(this.__mu!=D){this.__mu=D;
this.__ms.restartWith(D.getOpenInterval());
}},scheduleClose:function(a){this.cancelOpen(a);
if(!a.isVisible()){if(this.__mv){this.cancelClose(this.__mv);
}}else if(this.__mv!=a){this.__mv=a;
this.__mt.restartWith(a.getCloseInterval());
}},cancelOpen:function(h){if(this.__mu==h){this.__ms.stop();
this.__mu=null;
}},cancelClose:function(g){if(this.__mv==g){this.__mt.stop();
this.__mv=null;
}},_onOpenInterval:function(e){this.__ms.stop();
this.__mu.open();
this.__mu=null;
},_onCloseInterval:function(e){this.__mt.stop();
this.__mv.exclude();
this.__mv=null;
},_onMouseDown:function(e){var bA=e.getTarget();
bA=qx.ui.core.Widget.getWidgetByElement(bA);
if(bA==null){this.hideAll();
return;
}if(bA.getMenu&&bA.getMenu()&&bA.getMenu().isVisible()){return;
}if(this.__mr.length>0&&!this._isInMenu(bA)){this.hideAll();
}},__mw:{"Enter":1,"Space":1},__mx:{"Escape":1,"Up":1,"Down":1,"Left":1,"Right":1},_onKeyUpDown:function(e){var b=this.getActiveMenu();

if(!b){return;
}var c=e.getKeyIdentifier();

if(this.__mx[c]||(this.__mw[c]&&b.getSelectedButton())){e.stopPropagation();
}},_onKeyPress:function(e){var bq=this.getActiveMenu();

if(!bq){return;
}var br=e.getKeyIdentifier();
var bt=this.__mx[br];
var bs=this.__mw[br];

if(bt){switch(br){case N:this._onKeyPressUp(bq);
break;
case I:this._onKeyPressDown(bq);
break;
case J:this._onKeyPressLeft(bq);
break;
case L:this._onKeyPressRight(bq);
break;
case G:this.hideAll();
break;
}e.stopPropagation();
e.preventDefault();
}else if(bs){var bu=bq.getSelectedButton();

if(bu){switch(br){case O:this._onKeyPressEnter(bq,bu,e);
break;
case M:this._onKeyPressSpace(bq,bu,e);
break;
}e.stopPropagation();
e.preventDefault();
}}},_onKeyPressUp:function(bB){var bC=bB.getSelectedButton();
var bD=bB.getChildren();
var bF=bC?bB.indexOf(bC)-1:bD.length-1;
var bE=this._getChild(bB,bF,-1,true);
if(bE){bB.setSelectedButton(bE);
}else{bB.resetSelectedButton();
}},_onKeyPressDown:function(k){var l=k.getSelectedButton();
var n=l?k.indexOf(l)+1:0;
var m=this._getChild(k,n,1,true);
if(m){k.setSelectedButton(m);
}else{k.resetSelectedButton();
}},_onKeyPressLeft:function(bg){var bl=bg.getOpener();

if(!bl){return;
}if(bl instanceof qx.ui.menu.Button){var bi=bl.getLayoutParent();
bi.resetOpenedButton();
bi.setSelectedButton(bl);
}else if(bl instanceof qx.ui.menubar.Button){var bk=bl.getMenuBar().getMenuButtons();
var bh=bk.indexOf(bl);
if(bh===-1){return;
}var bm=null;
var length=bk.length;

for(var i=1;i<=length;i++){var bj=bk[(bh-i+length)%length];

if(bj.isEnabled()){bm=bj;
break;
}}
if(bm&&bm!=bl){bm.open(true);
}}},_onKeyPressRight:function(o){var q=o.getSelectedButton();
if(q){var p=q.getMenu();

if(p){o.setOpenedButton(q);
var w=this._getChild(p,0,1);

if(w){p.setSelectedButton(w);
}return;
}}else if(!o.getOpenedButton()){var w=this._getChild(o,0,1);

if(w){o.setSelectedButton(w);

if(w.getMenu()){o.setOpenedButton(w);
}return;
}}var u=o.getOpener();
if(u instanceof qx.ui.menu.Button&&q){while(u){u=u.getLayoutParent();

if(u instanceof qx.ui.menu.Menu){u=u.getOpener();

if(u instanceof qx.ui.menubar.Button){break;
}}else{break;
}}
if(!u){return;
}}if(u instanceof qx.ui.menubar.Button){var t=u.getMenuBar().getMenuButtons();
var r=t.indexOf(u);
if(r===-1){return;
}var v=null;
var length=t.length;

for(var i=1;i<=length;i++){var s=t[(r+i)%length];

if(s.isEnabled()){v=s;
break;
}}
if(v&&v!=u){v.open(true);
}}},_onKeyPressEnter:function(bn,bo,e){if(bo.hasListener(X)){var bp=e.clone();
bp.setBubbles(false);
bp.setTarget(bo);
bo.dispatchEvent(bp);
}this.hideAll();
},_onKeyPressSpace:function(bv,bw,e){if(bw.hasListener(X)){var bx=e.clone();
bx.setBubbles(false);
bx.setTarget(bw);
bw.dispatchEvent(bx);
}}},destruct:function(){var be=qx.event.Registration;
var bd=document.body;
be.removeListener(window.document.documentElement,S,this._onMouseDown,this,true);
be.removeListener(bd,U,this._onKeyUpDown,this,true);
be.removeListener(bd,R,this._onKeyUpDown,this,true);
be.removeListener(bd,X,this._onKeyPress,this,true);
this._disposeObjects(Q,K);
this._disposeArray(H);
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ch:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ch(c);
},hasChildren:function(){return this.__ch(f);
},add:function(y,z){return this.__ch(j,y,z);
},remove:function(E){return this.__ch(a,E);
},removeAll:function(){return this.__ch(d);
},indexOf:function(r){return this.__ch(l,r);
},addAt:function(v,w,x){this.__ch(g,v,w,x);
},addBefore:function(A,B,C){this.__ch(i,A,B,C);
},addAfter:function(s,t,u){this.__ch(k,s,t,u);
},removeAt:function(D){this.__ch(e,D);
}}});
})();
(function(){var s="slidebar",r="Integer",q="resize",p="qx.ui.core.Widget",o="selected",n="visible",m="Boolean",l="mouseout",k="excluded",j="menu",H="_applySelectedButton",G="_applyOpenInterval",F="_applySpacingY",E="_blocker",D="_applyCloseInterval",C="_applyBlockerColor",B="_applyIconColumnWidth",A="mouseover",z="qx.ui.menu.Menu",y="Color",w="Number",x="_applyOpenedButton",u="_applySpacingX",v="_applyBlockerOpacity",t="_applyArrowColumnWidth";
qx.Class.define(z,{extend:qx.ui.core.Widget,include:[qx.ui.core.MPlacement,qx.ui.core.MRemoteChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.menu.Layout);
var f=this.getApplicationRoot();
f.add(this);
this.addListener(A,this._onMouseOver);
this.addListener(l,this._onMouseOut);
this.addListener(q,this._onResize,this);
f.addListener(q,this._onResize,this);
this._blocker=new qx.ui.core.Blocker(f);
this.initVisibility();
this.initKeepFocus();
this.initKeepActive();
},properties:{appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},visibility:{refine:true,init:k},keepFocus:{refine:true,init:true},keepActive:{refine:true,init:true},spacingX:{check:r,apply:u,init:0,themeable:true},spacingY:{check:r,apply:F,init:0,themeable:true},iconColumnWidth:{check:r,init:0,themeable:true,apply:B},arrowColumnWidth:{check:r,init:0,themeable:true,apply:t},blockerColor:{check:y,init:null,nullable:true,apply:C,themeable:true},blockerOpacity:{check:w,init:1,apply:v,themeable:true},selectedButton:{check:p,nullable:true,apply:H},openedButton:{check:p,nullable:true,apply:x},opener:{check:p,nullable:true},openInterval:{check:r,themeable:true,init:250,apply:G},closeInterval:{check:r,themeable:true,init:250,apply:D},blockBackground:{check:m,themeable:true,init:false}},members:{__lz:null,__lA:null,_blocker:null,open:function(){if(this.getOpener()!=null){this.placeToWidget(this.getOpener());
this.__lC();
this.show();
this._placementTarget=this.getOpener();
}else{this.warn("The menu instance needs a configured 'opener' widget!");
}},openAtMouse:function(e){this.placeToMouse(e);
this.__lC();
this.show();
this._placementTarget={left:e.getDocumentLeft(),top:e.getDocumentTop()};
},openAtPoint:function(bd){this.placeToPoint(bd);
this.__lC();
this.show();
this._placementTarget=bd;
},addSeparator:function(){this.add(new qx.ui.menu.Separator);
},getColumnSizes:function(){return this._getMenuLayout().getColumnSizes();
},getSelectables:function(){var T=[];
var U=this.getChildren();

for(var i=0;i<U.length;i++){if(U[i].isEnabled()){T.push(U[i]);
}}return T;
},_applyIconColumnWidth:function(X,Y){this._getMenuLayout().setIconColumnWidth(X);
},_applyArrowColumnWidth:function(I,J){this._getMenuLayout().setArrowColumnWidth(I);
},_applySpacingX:function(g,h){this._getMenuLayout().setColumnSpacing(g);
},_applySpacingY:function(V,W){this._getMenuLayout().setSpacing(V);
},_applyVisibility:function(a,b){qx.ui.core.Widget.prototype._applyVisibility.call(this,a,b);
var c=qx.ui.menu.Manager.getInstance();

if(a===n){c.add(this);
var d=this.getParentMenu();

if(d){d.setOpenedButton(this.getOpener());
}}else if(b===n){c.remove(this);
var d=this.getParentMenu();

if(d&&d.getOpenedButton()==this.getOpener()){d.resetOpenedButton();
}this.resetOpenedButton();
this.resetSelectedButton();
}this.__lB();
},__lB:function(){if(this.isVisible()){if(this.getBlockBackground()){var N=this.getZIndex();
this._blocker.blockContent(N-1);
}}else{if(this._blocker.isContentBlocked()){this._blocker.unblockContent();
}}},getParentMenu:function(){var bc=this.getOpener();

if(!bc||!(bc instanceof qx.ui.menu.AbstractButton)){return null;
}
while(bc&&!(bc instanceof qx.ui.menu.Menu)){bc=bc.getLayoutParent();
}return bc;
},_applySelectedButton:function(bm,bn){if(bn){bn.removeState(o);
}
if(bm){bm.addState(o);
}},_applyOpenedButton:function(ba,bb){if(bb){bb.getMenu().exclude();
}
if(ba){ba.getMenu().open();
}},_applyBlockerColor:function(O,P){this._blocker.setColor(O);
},_applyBlockerOpacity:function(K,L){this._blocker.setOpacity(K);
},getChildrenContainer:function(){return this.getChildControl(s,true)||this;
},_createChildControlImpl:function(bg){var bh;

switch(bg){case s:var bh=new qx.ui.menu.MenuSlideBar();
var bj=this._getLayout();
this._setLayout(new qx.ui.layout.Grow());
var bi=bh.getLayout();
bh.setLayout(bj);
bi.dispose();
var bk=qx.lang.Array.clone(this.getChildren());

for(var i=0;i<bk.length;i++){bh.add(bk[i]);
}this.removeListener(q,this._onResize,this);
bh.getChildrenContainer().addListener(q,this._onResize,this);
this._add(bh);
break;
}return bh||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bg);
},_getMenuLayout:function(){if(this.hasChildControl(s)){return this.getChildControl(s).getChildrenContainer().getLayout();
}else{return this._getLayout();
}},_getMenuBounds:function(){if(this.hasChildControl(s)){return this.getChildControl(s).getChildrenContainer().getBounds();
}else{return this.getBounds();
}},_computePlacementSize:function(){return this._getMenuBounds();
},__lC:function(){var R=this._getMenuBounds();

if(!R){this.addListenerOnce(q,this.__lC,this);
return;
}var Q=this.getLayoutParent().getBounds().height;
var top=this.getLayoutProperties().top;
var S=this.getLayoutProperties().left;
if(top<0){this._assertSlideBar(function(){this.setHeight(R.height+top);
this.moveTo(S,0);
});
}else if(top+R.height>Q){this._assertSlideBar(function(){this.setHeight(Q-top);
});
}else{this.setHeight(null);
}},_assertSlideBar:function(bl){if(this.hasChildControl(s)){return bl.call(this);
}this.__lA=bl;
qx.ui.core.queue.Widget.add(this);
},syncWidget:function(){this.getChildControl(s);

if(this.__lA){this.__lA.call(this);
delete this.__lA;
}},_onResize:function(){if(this.isVisible()){var M=this._placementTarget;

if(!M){return;
}else if(M instanceof qx.ui.core.Widget){this.placeToWidget(M);
}else if(M.top!==undefined){this.placeToPoint(M);
}else{throw new Error("Unknown target: "+M);
}this.__lC();
}},_onMouseOver:function(e){var bp=qx.ui.menu.Manager.getInstance();
bp.cancelClose(this);
var bq=e.getTarget();

if(bq.isEnabled()&&bq instanceof qx.ui.menu.AbstractButton){this.setSelectedButton(bq);
var bo=bq.getMenu&&bq.getMenu();

if(bo){bo.setOpener(bq);
bp.scheduleOpen(bo);
this.__lz=bo;
}else{var br=this.getOpenedButton();

if(br){bp.scheduleClose(br.getMenu());
}
if(this.__lz){bp.cancelOpen(this.__lz);
this.__lz=null;
}}}else if(!this.getOpenedButton()){this.resetSelectedButton();
}},_onMouseOut:function(e){var be=qx.ui.menu.Manager.getInstance();
if(!qx.ui.core.Widget.contains(this,e.getRelatedTarget())){var bf=this.getOpenedButton();
bf?this.setSelectedButton(bf):this.resetSelectedButton();
if(bf){be.cancelClose(bf.getMenu());
}if(this.__lz){be.cancelOpen(this.__lz);
}}}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.ui.menu.Manager.getInstance().remove(this);
}this.getApplicationRoot().removeListener(q,this._onResize,this);
this._placementTarget=null;
this._disposeObjects(E);
}});
})();
(function(){var c="Integer",b="_applyLayoutChange",a="qx.ui.menu.Layout";
qx.Class.define(a,{extend:qx.ui.layout.VBox,properties:{columnSpacing:{check:c,init:0,apply:b},spanColumn:{check:c,init:1,nullable:true,apply:b},iconColumnWidth:{check:c,init:0,themeable:true,apply:b},arrowColumnWidth:{check:c,init:0,themeable:true,apply:b}},members:{__oY:null,_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,g,j;
var e=this.getSpanColumn();
var h=this.__oY=[0,0,0,0];
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
},getColumnSizes:function(){return this.__oY||null;
}},destruct:function(){this.__oY=null;
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
},properties:{blockToolTip:{refine:true,init:true},label:{check:l,apply:f,nullable:true},menu:{check:k,apply:i,nullable:true},icon:{check:l,apply:c,themeable:true,nullable:true}},members:{_createChildControlImpl:function(A){var B;

switch(A){case t:B=new qx.ui.basic.Image;
B.setAnonymous(true);
this._add(B,{column:0});
break;
case s:B=new qx.ui.basic.Label;
B.setAnonymous(true);
this._add(B,{column:1});
break;
case q:B=new qx.ui.basic.Label;
B.setAnonymous(true);
this._add(B,{column:2});
break;
case r:B=new qx.ui.basic.Image;
B.setAnonymous(true);
this._add(B,{column:3});
break;
}return B||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,A);
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
},_onMouseUp:function(e){},_onKeyPress:function(e){},_onChangeCommand:function(e){var z=e.getData();

if(qx.core.Variant.isSet(o,m)){var x=e.getOldData();

if(!x){qx.locale.Manager.getInstance().addListener(p,this._onChangeLocale,this);
}
if(!z){qx.locale.Manager.getInstance().removeListener(p,this._onChangeLocale,this);
}}var y=z!=null?z.toString():h;
this.getChildControl(q).setValue(y);
},_onChangeLocale:qx.core.Variant.select(o,{"on":function(e){var w=this.getCommand();

if(w!=null){this.getChildControl(q).setValue(w.toString());
}},"off":null}),_applyIcon:function(M,N){if(M){this._showChildControl(t).setSource(M);
}else{this._excludeChildControl(t);
}},_applyLabel:function(C,D){if(C){this._showChildControl(s).setValue(C);
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
qx.Class.define(g,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:qx.core.Variant.select(f,{"on":function(C,name,D){this.assert(name==e,a+name+b);
},"off":null}),renderLayout:function(o,p){var z=this._getLayoutChildren();
var y;
var r;
var s=[];

for(var i=0,l=z.length;i<l;i++){y=z[i];
r=y.getLayoutProperties().column;
s[r]=y;
}var x=this.__mg(z[0]);
var A=x.getColumnSizes();
var u=x.getSpacingX();
var t=qx.lang.Array.sum(A)+u*(A.length-1);

if(t<o){A[1]+=o-t;
}var B=0,top=0;
var v=qx.ui.layout.Util;

for(var i=0,l=A.length;i<l;i++){y=s[i];

if(y){var q=y.getSizeHint();
var top=v.computeVerticalAlignOffset(y.getAlignY()||c,q.height,p,0,0);
var w=v.computeHorizontalAlignOffset(y.getAlignX()||d,q.width,A[i],y.getMarginLeft(),y.getMarginRight());
y.renderLayout(B+w,top,q.width,q.height);
}B+=A[i]+u;
}},__mg:function(h){while(!(h instanceof qx.ui.menu.Menu)){h=h.getLayoutParent();
}return h;
},_computeSizeHint:function(){var m=this._getLayoutChildren();
var k=0;
var n=0;

for(var i=0,l=m.length;i<l;i++){var j=m[i].getSizeHint();
n+=j.width;
k=Math.max(k,j.height);
}return {width:n,height:k};
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var t="horizontal",s="scrollpane",r="vertical",q="button-backward",p="button-forward",o="content",n="execute",m="qx.ui.container.SlideBar",l="scrollY",k="removeChildWidget",g="scrollX",j="_applyOrientation",i="mousewheel",f="Integer",d="slidebar",h="update";
qx.Class.define(m,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(y){qx.ui.core.Widget.call(this);
var z=this.getChildControl(s);
this._add(z,{flex:1});

if(y!=null){this.setOrientation(y);
}else{this.initOrientation();
}this.addListener(i,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:d},orientation:{check:[t,r],init:t,apply:j},scrollStep:{check:f,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(o);
},_createChildControlImpl:function(w){var x;

switch(w){case p:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteForward,this);
x.setFocusable(false);
this._addAt(x,2);
break;
case q:x=new qx.ui.form.RepeatButton;
x.addListener(n,this._onExecuteBackward,this);
x.setFocusable(false);
this._addAt(x,0);
break;
case o:x=new qx.ui.container.Composite();
if(qx.bom.client.Engine.GECKO){x.addListener(k,this._onRemoveChild,this);
}this.getChildControl(s).add(x);
break;
case s:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(h,this._onResize,this);
x.addListener(g,this._onScroll,this);
x.addListener(l,this._onScroll,this);
break;
}return x||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,w);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(u){var v=this.getChildControl(s);

if(this.getOrientation()===t){v.scrollByX(u);
}else{v.scrollByY(u);
}},scrollTo:function(F){var G=this.getChildControl(s);

if(this.getOrientation()===t){G.scrollToX(F);
}else{G.scrollToY(F);
}},_applyOrientation:function(A,B){var E=[this.getLayout(),this._getLayout()];
var D=this.getChildControl(p);
var C=this.getChildControl(q);
if(B==r){D.removeState(r);
C.removeState(r);
D.addState(t);
C.addState(t);
}else if(B==t){D.removeState(t);
C.removeState(t);
D.addState(r);
C.addState(r);
}
if(A==t){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(E[0]){E[0].dispose();
}
if(E[1]){E[1].dispose();
}},_onMouseWheel:function(e){this.scrollBy(e.getWheelDelta()*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(s).getChildren()[0];

if(!content){return;
}var a=this.getInnerSize();
var c=content.getBounds();
var b=(this.getOrientation()===t)?c.width>a.width:c.height>a.height;

if(b){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){this.scrollBy(this.getChildControl(s).getScrollX());
},this,50);
},_updateArrowsEnabled:function(){var I=this.getChildControl(s);

if(this.getOrientation()===t){var H=I.getScrollX();
var J=I.getScrollMaxX();
}else{var H=I.getScrollY();
var J=I.getScrollMaxY();
}this.getChildControl(q).setEnabled(H>0);
this.getChildControl(p).setEnabled(H<J);
},_showArrows:function(){this._showChildControl(p);
this._showChildControl(q);
},_hideArrows:function(){this._excludeChildControl(p);
this._excludeChildControl(q);
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__lX",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__lX=new qx.event.AcceleratingTimer();
this.__lX.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__lY:null,__lX:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__ma();
}this.removeState(m);
this.addState(n);
}},release:function(s){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__lY){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__mb();
},_applyEnabled:function(q,r){qx.ui.form.Button.prototype._applyEnabled.call(this,q,r);

if(!q){this.removeState(n);
this.removeState(m);
this.__mb();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lX.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lX.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__ma();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__lY){this.execute();
}}this.__mb();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__lY){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__mb();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__ma();
}},_onInterval:function(e){this.__lY=true;
this.fireEvent(b);
},__ma:function(){this.fireEvent(g);
this.__lY=false;
this.__lX.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__mb:function(){this.fireEvent(d);
this.__lX.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var e="Integer",d="interval",c="qx.event.type.Event",b="qx.event.AcceleratingTimer",a="__pa";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__pa=new qx.event.Timer(this.getInterval());
this.__pa.addListener(d,this._onInterval,this);
},events:{"interval":c},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__pa:null,__pb:null,start:function(){this.__pa.setInterval(this.getFirstInterval());
this.__pa.start();
},stop:function(){this.__pa.stop();
this.__pb=null;
},_onInterval:function(){this.__pa.stop();

if(this.__pb==null){this.__pb=this.getInterval();
}this.__pb=Math.max(this.getMinimum(),this.__pb-this.getDecrease());
this.__pa.setInterval(this.__pb);
this.__pa.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var K="resize",J="scrollY",I="update",H="scrollX",G="_applyScrollX",F="_applyScrollY",E="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",D="appear",C="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",B="qx.event.type.Event",z="qx.ui.core.scroll.ScrollPane",A="scroll";
qx.Class.define(z,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(K,this._onUpdate);
var h=this.getContentElement();
h.addListener(A,this._onScroll,this);
h.addListener(D,this._onAppear,this);
},events:{update:B},properties:{scrollX:{check:E,apply:G,event:H,init:0},scrollY:{check:C,apply:F,event:J,init:0}},members:{add:function(j){var k=this._getChildren()[0];

if(k){this._remove(k);
k.removeListener(K,this._onUpdate,this);
}
if(j){this._add(j);
j.addListener(K,this._onUpdate,this);
}},remove:function(N){if(N){this._remove(N);
N.removeListener(K,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(I);
},_onScroll:function(e){var i=this.getContentElement();
this.setScrollX(i.getScrollX());
this.setScrollY(i.getScrollY());
},_onAppear:function(e){var u=this.getContentElement();
var r=this.getScrollX();
var s=u.getScrollX();

if(r!=s){u.scrollToX(r);
}var v=this.getScrollY();
var t=u.getScrollY();

if(v!=t){u.scrollToY(v);
}},getItemTop:function(f){var top=0;

do{top+=f.getBounds().top;
f=f.getLayoutParent();
}while(f&&f!==this);
return top;
},getItemBottom:function(g){return this.getItemTop(g)+g.getBounds().height;
},getItemLeft:function(p){var q=0;
var parent;

do{q+=p.getBounds().left;
parent=p.getLayoutParent();

if(parent){q+=parent.getInsets().left;
}p=parent;
}while(p&&p!==this);
return q;
},getItemRight:function(w){return this.getItemLeft(w)+w.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var m=this.getInnerSize();
var l=this.getScrollSize();

if(m&&l){return Math.max(0,l.width-m.width);
}return 0;
},getScrollMaxY:function(){var d=this.getInnerSize();
var c=this.getScrollSize();

if(d&&c){return Math.max(0,c.height-d.height);
}return 0;
},scrollToX:function(L){var M=this.getScrollMaxX();

if(L<0){L=0;
}else if(L>M){L=M;
}this.setScrollX(L);
},scrollToY:function(n){var o=this.getScrollMaxY();

if(n<0){n=0;
}else if(n>o){n=o;
}this.setScrollY(n);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(b){this.getContentElement().scrollToX(b);
},_applyScrollY:function(a){this.getContentElement().scrollToY(a);
}}});
})();
(function(){var k="Integer",j="hovered",i="hover-button",h="interval",g="mouseover",f="mouseout",d="__lD",c="qx.ui.form.HoverButton";
qx.Class.define(c,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(a,b){qx.ui.basic.Atom.call(this,a,b);
this.addListener(g,this._onMouseOver,this);
this.addListener(f,this._onMouseOut,this);
this.__lD=new qx.event.AcceleratingTimer();
this.__lD.addListener(h,this._onInterval,this);
},properties:{appearance:{refine:true,init:i},interval:{check:k,init:80},firstInterval:{check:k,init:200},minTimer:{check:k,init:20},timerDecrease:{check:k,init:2}},members:{__lD:null,_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.__lD.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.addState(j);
},_onMouseOut:function(e){this.__lD.stop();
this.removeState(j);

if(!this.isEnabled()||e.getTarget()!==this){return;
}},_onInterval:function(){if(this.isEnabled()){this.execute();
}else{this.__lD.stop();
}}},destruct:function(){this._disposeObjects(d);
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
},properties:{appearance:{refine:true,init:a},show:{init:j,check:[j,d,e],inheritable:true,event:c},spacing:{nullable:true,check:h,themeable:true,apply:b}},members:{_createChildControlImpl:function(t){var u;

switch(t){case k:u=new qx.ui.basic.Image();
u.setAlignY(g);
this._add(u);
break;
case m:u=new qx.ui.toolbar.PartContainer;
this._add(u);
break;
}return u||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,t);
},getChildrenContainer:function(){return this.getChildControl(m);
},_applySpacing:function(q,r){var s=this.getChildControl(m).getLayout();
q==null?s.resetSpacing():s.setSpacing(q);
},addSeparator:function(){this.add(new qx.ui.toolbar.Separator);
},getMenuButtons:function(){var o=this.getChildren();
var n=[];
var p;

for(var i=0,l=o.length;i<l;i++){p=o[i];

if(p instanceof qx.ui.menubar.Button){n.push(p);
}}return n;
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
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var l="checked",k="qx.ui.form.RadioGroup",j="Boolean",i="menu-radiobutton",h="_applyValue",g="qx.ui.menu.RadioButton",f="changeValue",d="_applyGroup",c="execute";
qx.Class.define(g,{extend:qx.ui.menu.AbstractButton,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(a,b){qx.ui.menu.AbstractButton.call(this);
if(a!=null){this.setLabel(a);
}
if(b!=null){this.setMenu(b);
}this.addListener(c,this._onExecute,this);
},properties:{appearance:{refine:true,init:i},value:{check:j,nullable:true,event:f,apply:h,init:false},group:{check:k,nullable:true,apply:d}},members:{_applyValue:function(o,p){o?this.addState(l):this.removeState(l);
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
(function(){var h="Please use an array as parameter.",g="qx.ui.form.MModelSelection",f="change",e="qx.debug",d="changeSelection",c="on",b="__kP",a="qx.event.type.Data";
qx.Mixin.define(g,{construct:function(){this.__kP=new qx.data.Array();
this.__kP.addListener(f,this.__kS,this);
this.addListener(d,this.__kR,this);
},events:{changeModelSelection:a},members:{__kP:null,__kQ:false,__kR:function(){if(this.__kQ){return;
}var m=this.getSelection();
var k=[];

for(var i=0;i<m.length;i++){var n=m[i];
var l=n.getModel?n.getModel():null;

if(l!==null){k.push(l);
}}if(k.length===m.length){this.setModelSelection(k);
}},__kS:function(){this.__kQ=true;
var p=this.getSelectables();
var r=[];
var q=this.__kP.toArray();

for(var i=0;i<q.length;i++){var t=q[i];

for(var j=0;j<p.length;j++){var u=p[j];
var o=u.getModel?u.getModel():null;

if(t===o){r.push(u);
break;
}}}this.setSelection(r);
this.__kQ=false;
var s=this.getSelection();

if(!qx.lang.Array.equals(s,r)){this.__kR();
}},getModelSelection:function(){return this.__kP;
},setModelSelection:function(v){if(!v){this.__kP.removeAll();
return;
}
if(qx.core.Variant.isSet(e,c)){this.assertArray(v,h);
}v.unshift(this.__kP.getLength());
v.unshift(0);
var w=this.__kP.splice.apply(this.__kP,v);
w.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var t="Boolean",s="changeValue",r="_applyAllowEmptySelection",q="_applyInvalidMessage",p="qx.ui.form.RadioGroup",o="_applyValid",n="",m="changeRequired",k="changeValid",j="changeEnabled",f="__a",h="changeInvalidMessage",g="changeSelection",d="_applyEnabled",c="String";
qx.Class.define(p,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(P){qx.core.Object.call(this);
this.__a=[];
this.addListener(g,this.__b,this);

if(P!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:t,apply:d,event:j,init:true},wrap:{check:t,init:true},allowEmptySelection:{check:t,init:false,apply:r},valid:{check:t,init:true,apply:o,event:k},required:{check:t,init:false,event:m},invalidMessage:{check:c,init:n,event:h,apply:q}},members:{__a:null,getItems:function(){return this.__a;
},add:function(M){var N=this.__a;
var O;

for(var i=0,l=arguments.length;i<l;i++){O=arguments[i];

if(qx.lang.Array.contains(N,O)){continue;
}O.addListener(s,this._onItemChangeChecked,this);
N.push(O);
O.setGroup(this);
if(O.getValue()){this.setSelection([O]);
}}if(!this.isAllowEmptySelection()&&N.length>0&&!this.getSelection()[0]){this.setSelection([N[0]]);
}},remove:function(u){var v=this.__a;

if(qx.lang.Array.contains(v,u)){qx.lang.Array.remove(v,u);
if(u.getGroup()===this){u.resetGroup();
}u.removeListener(s,this._onItemChangeChecked,this);
if(u.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__a;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__a.length;i++){this.__a[i].setInvalidMessage(z);
}},_applyValid:function(a,b){for(var i=0;i<this.__a.length;i++){this.__a[i].setValid(a);
}},_applyEnabled:function(D,E){var F=this.__a;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(B,C){if(!B&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var J=this.getSelection()[0];
var L=this.__a;
var K=L.indexOf(J);

if(K==-1){return;
}var i=0;
var length=L.length;
if(this.getWrap()){K=(K+1)%length;
}else{K=Math.min(K+1,length-1);
}
while(i<length&&!L[K].getEnabled()){K=(K+1)%length;
i++;
}this.setSelection([L[K]]);
},selectPrevious:function(){var G=this.getSelection()[0];
var I=this.__a;
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
},__b:function(e){var x=e.getData()[0];
var w=e.getOldData()[0];

if(w){w.setValue(false);
}
if(x){x.setValue(true);
}}},destruct:function(){this._disposeArray(f);
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(u,v,name){this.fireDataEvent(c,{value:u,name:name,old:v});
this._registerEventChaining(u,v,name);
},_registerEventChaining:function(i,j,name){if((i instanceof qx.core.Object)&&qx.Class.hasMixin(i.constructor,qx.data.marshal.MEventBubbling)){var k=qx.lang.Function.bind(this.__lb,this,name);
var l=i.addListener(c,k,this);
i.setUserData(d,l);
}if(j!=null&&j.getUserData&&j.getUserData(d)!=null){j.removeListenerById(j.getUserData(d));
}},__lb:function(name,e){var t=e.getData();
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
(function(){var s="change",r="add",q="remove",p="order",o="The parameter must be an array.",n="",m="qx.data.Array",l="?",k="changeBubble",j="qx.event.type.Event",f="number",h="on",g="changeLength",e="qx.debug",d="qx.event.type.Data";
qx.Class.define(m,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(X){qx.core.Object.call(this);
if(X==undefined){this.__kN=[];
}else if(arguments.length>1){this.__kN=[];

for(var i=0;i<arguments.length;i++){this.__kN.push(arguments[i]);
}}else if(typeof X==f){this.__kN=new Array(X);
}else if(X instanceof Array){this.__kN=qx.lang.Array.clone(X);
}else{this.__kN=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kN.length;i++){this._applyEventPropagation(this.__kN[i],null,i);
}this.__kO();
},events:{"change":d,"changeLength":j},members:{__kN:null,concat:function(E){if(E){var F=this.__kN.concat(E);
}else{var F=this.__kN.concat();
}return new qx.data.Array(F);
},join:function(U){return this.__kN.join(U);
},pop:function(){var x=this.__kN.pop();
this.__kO();
this._applyEventPropagation(null,x,this.length-1);
this.fireDataEvent(s,{start:this.length-1,end:this.length-1,type:q,items:[x]},null);
return x;
},push:function(G){for(var i=0;i<arguments.length;i++){this.__kN.push(arguments[i]);
this.__kO();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(s,{start:this.length-1,end:this.length-1,type:r,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kN.reverse();
this.fireDataEvent(s,{start:0,end:this.length-1,type:p,items:null},null);
},shift:function(){var y=this.__kN.shift();
this.__kO();
this._applyEventPropagation(null,y,this.length-1);
this.fireDataEvent(s,{start:0,end:this.length-1,type:q,items:[y]},null);
return y;
},slice:function(A,B){return new qx.data.Array(this.__kN.slice(A,B));
},splice:function(Y,ba,bb){var bh=this.__kN.length;
var be=this.__kN.splice.apply(this.__kN,arguments);
if(this.__kN.length!=bh){this.__kO();
}var bf=ba>0;
var bc=arguments.length>2;
var bd=null;

if(bf||bc){if(this.__kN.length>bh){var bg=r;
}else if(this.__kN.length<bh){var bg=q;
bd=be;
}else{var bg=p;
}this.fireDataEvent(s,{start:Y,end:this.length-1,type:bg,items:bd},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,Y+i);
}this.fireDataEvent(k,{value:this,name:l,old:be});
for(var i=0;i<be.length;i++){this._applyEventPropagation(null,be[i],i);
}return (new qx.data.Array(be));
},sort:function(Q){this.__kN.sort.apply(this.__kN,arguments);
this.fireDataEvent(s,{start:0,end:this.length-1,type:p,items:null},null);
},unshift:function(w){for(var i=arguments.length-1;i>=0;i--){this.__kN.unshift(arguments[i]);
this.__kO();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(s,{start:0,end:this.length-1,type:r,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kN;
},getItem:function(K){return this.__kN[K];
},setItem:function(bj,bk){var bl=this.__kN[bj];
this.__kN[bj]=bk;
this._applyEventPropagation(bk,bl,bj);
if(this.length!=this.__kN.length){this.__kO();
}this.fireDataEvent(s,{start:bj,end:bj,type:r,items:[bk]},null);
},getLength:function(){return this.length;
},indexOf:function(b){return this.__kN.indexOf(b);
},toString:function(){if(this.__kN!=null){return this.__kN.toString();
}return n;
},contains:function(a){return this.__kN.indexOf(a)!==-1;
},copy:function(){return this.concat();
},insertAt:function(I,J){this.splice(I,0,J);
},insertBefore:function(L,M){var N=this.indexOf(L);

if(N==-1){this.push(M);
}else{this.splice(N,0,M);
}},insertAfter:function(t,u){var v=this.indexOf(t);

if(v==-1||v==(this.length-1)){this.push(u);
}else{this.splice(v+1,0,u);
}},removeAt:function(bi){return this.splice(bi,1)[0];
},removeAll:function(){for(var i=0;i<this.__kN.length;i++){this._applyEventPropagation(null,this.__kN[i],i);
}var S=this.getLength();
var R=this.__kN.concat();
this.__kN.length=0;
this.__kO();
this.fireDataEvent(s,{start:0,end:S-1,type:q,items:R},null);
},append:function(O){if(O instanceof qx.data.Array){O=O.toArray();
}if(qx.core.Variant.isSet(e,h)){qx.core.Assert.assertArray(O,o);
}for(var i=0;i<O.length;i++){this._applyEventPropagation(O[i],null,this.__kN.length+i);
}Array.prototype.push.apply(this.__kN,O);
var P=this.length;
this.__kO();
this.fireDataEvent(s,{start:P,end:this.length-1,type:r,items:O},null);
},remove:function(C){var D=this.indexOf(C);

if(D!=-1){this.splice(D,1);
return C;
}},equals:function(T){if(this.length!==T.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==T.getItem(i)){return false;
}}return true;
},sum:function(){var c=0;

for(var i=0;i<this.length;i++){c+=this.getItem(i);
}return c;
},max:function(){var z=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>z){z=this.getItem(i);
}}return z===undefined?null:z;
},min:function(){var H=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<H){H=this.getItem(i);
}}return H===undefined?null:H;
},forEach:function(V,W){for(var i=0;i<this.__kN.length;i++){V.call(W,this.__kN[i]);
}},__kO:function(){this.length=this.__kN.length;
this.fireEvent(g,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kN.length;i++){this._applyEventPropagation(null,this.__kN[i],i);
}this.__kN=null;
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
(function(){var i="String",h="qx.ui.embed.AbstractIframe",g="name",f="",e="_applySource",d="qx.event.type.Event",c="_applyFrameName";
qx.Class.define(h,{extend:qx.ui.core.Widget,construct:function(j){qx.ui.core.Widget.call(this);

if(j){this.setSource(j);
}},events:{"load":d},properties:{source:{check:i,apply:e,nullable:true},frameName:{check:i,init:f,apply:c}},members:{_getIframeElement:function(){throw new Error("Abstract method call");
},_applySource:function(k,l){this._getIframeElement().setSource(k);
},_applyFrameName:function(a,b){this._getIframeElement().setAttribute(g,a);
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
(function(){var l="qx.client",k="mousedown",j="load",i="help",h="mouseup",g="losecapture",f="contextmenu",d="none",c="display",b="repeat",C="Boolean",B="px",A="url(",z=")",y="gecko",x="div",w="DOMNodeInserted",v="_applyNativeHelp",u="/",t="__wd",r="appear",s="mshtml",p="block",q="qx.ui.embed.Iframe",n="iframe",o="absolute",m="qx/static/blank.gif";
qx.Class.define(q,{extend:qx.ui.embed.AbstractIframe,include:qx.ui.core.MNativeOverflow,construct:function(P){if(P!=null){this.__wc=P;
}qx.ui.embed.AbstractIframe.call(this,P);
qx.event.Registration.addListener(document.body,k,this.block,this,true);
qx.event.Registration.addListener(document.body,h,this.release,this,true);
qx.event.Registration.addListener(document.body,g,this.release,this,true);
this.__wd=this._createBlockerElement();
this.getContainerElement().add(this.__wd);

if(qx.core.Variant.isSet(l,y)){this.addListenerOnce(r,function(e){var O=this.getContainerElement().getDomElement();
qx.bom.Event.addNativeListener(O,w,this._onDOMNodeInserted);
});
this._onDOMNodeInserted=qx.lang.Function.listener(this._syncSourceAfterDOMMove,this);
}},properties:{appearance:{refine:true,init:n},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:C,init:false,apply:v}},members:{__wc:null,__wd:null,renderLayout:function(D,top,E,F){qx.ui.embed.AbstractIframe.prototype.renderLayout.call(this,D,top,E,F);
var H=B;
var G=this.getInsets();
this.__wd.setStyles({"left":G.left+H,"top":G.top+H,"width":(E-G.left-G.right)+H,"height":(F-G.top-G.bottom)+H});
},_createContentElement:function(){var a=new qx.html.Iframe(this.__wc);
a.addListener(j,this._onIframeLoad,this);
return a;
},_getIframeElement:function(){return this.getContentElement();
},_createBlockerElement:function(){var Q=new qx.html.Element(x);
Q.setStyles({"zIndex":20,"position":o,"display":d});
if(qx.core.Variant.isSet(l,s)){Q.setStyles({backgroundImage:A+qx.util.ResourceManager.getInstance().toUri(m)+z,backgroundRepeat:b});
}return Q;
},_onIframeLoad:function(e){this._applyNativeContextMenu(this.getNativeContextMenu(),null);
this._applyNativeHelp(this.getNativeHelp(),null);
this.fireNonBubblingEvent(j);
},block:function(){this.__wd.setStyle(c,p);
},release:function(){this.__wd.setStyle(c,d);
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
}}catch(e){}},"default":function(){}}),_syncSourceAfterDOMMove:function(){var S=this.getContentElement().getDomElement();
var R=S.src;
if(R.charAt(R.length-1)==u){R=R.substring(0,R.length-1);
}
if(R!=this.getSource()){qx.bom.Iframe.getWindow(S).stop();
S.src=this.getSource();
}}},destruct:function(){this._disposeObjects(t);
qx.event.Registration.removeListener(document.body,k,this.block,this,true);
qx.event.Registration.removeListener(document.body,h,this.release,this,true);
qx.event.Registration.removeListener(document.body,g,this.release,this,true);
}});
})();
(function(){var f="source",e="name",d="qx.html.Iframe",c="qx.event.type.Event",b="iframe";
qx.Class.define(d,{extend:qx.html.Element,construct:function(g,h,i){qx.html.Element.call(this,b,h,i);
this._setProperty(f,g);
},events:{"load":c},members:{_applyProperty:function(name,k){qx.html.Element.prototype._applyProperty.call(this,name,k);

if(name==f){var l=this.getDomElement();
qx.bom.Iframe.setSource(l,k);
}},_createDomElement:function(){return qx.bom.Iframe.create(this._content);
},getWindow:function(){var a=this.getDomElement();

if(a){return qx.bom.Iframe.getWindow(a);
}else{return null;
}},getDocument:function(){var p=this.getDomElement();

if(p){return qx.bom.Iframe.getDocument(p);
}else{return null;
}},getBody:function(){var j=this.getDomElement();

if(j){return qx.bom.Iframe.getBody(j);
}else{return null;
}},setSource:function(m){this._setProperty(f,m);
return this;
},getSource:function(){return this._getProperty(f);
},setName:function(name){this.setAttribute(e,name);
return this;
},getName:function(){return this.getAttribute(e);
},reload:function(){var o=this.getDomElement();

if(o){var n=this.getSource();
this.setSource(null);
this.setSource(n);
}}}});
})();
(function(){var k="Number",j="_applyInsets",i="abstract",h="insetRight",g="insetTop",f="qx.debug",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="on",a="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:i,properties:{insetLeft:{check:k,nullable:true,apply:j},insetRight:{check:k,nullable:true,apply:j},insetBottom:{check:k,nullable:true,apply:j},insetTop:{check:k,nullable:true,apply:j},insets:{group:[g,h,e,a],mode:c}},members:{__mf:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__mf=null;
},getInsets:function(){if(this.__mf){return this.__mf;
}var l=this._getDefaultInsets();
return this.__mf={left:this.getInsetLeft()==null?l.left:this.getInsetLeft(),right:this.getInsetRight()==null?l.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?l.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?l.top:this.getInsetTop()};
},_applyInsets:function(){if(qx.core.Variant.isSet(f,b)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this.__mf=null;
}},destruct:function(){this.__mf=null;
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
qx.Class.define(g,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(l){qx.ui.decoration.Abstract.call(this);

if(l!=null){this.setBackgroundColor(l);
}},properties:{backgroundColor:{check:b,nullable:true,apply:d}},members:{__mk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__mk;
},getMarkup:function(){if(this.__mk){return this.__mk;
}var m={position:a,top:0,left:0};
var n=this._generateBackgroundMarkup(m);
return this.__mk=n;
},resize:function(i,j,k){i.style.width=j+h;
i.style.height=k+h;
},tint:function(o,p){var q=qx.theme.manager.Color.getInstance();

if(p==null){p=this.getBackgroundColor();
}o.style.backgroundColor=q.resolve(p)||f;
},_applyStyle:function(){if(qx.core.Variant.isSet(e,c)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__mk=null;
}});
})();
(function(){var o="none",n="text",m="",l="userSelect",k="color",j="String",i="0px",h="webkit",g="changeHtml",f="_applyCssClass",c="class",e="qx.ui.embed.Html",d="_applyHtml",b="qx.client",a="html";
qx.Class.define(e,{extend:qx.ui.core.Widget,include:[qx.ui.core.MNativeOverflow],construct:function(p){qx.ui.core.Widget.call(this);

if(p!=null){this.setHtml(p);
}},properties:{html:{check:j,apply:d,event:g,nullable:true},cssClass:{check:j,init:m,apply:f},selectable:{refine:true,init:true},focusable:{refine:true,init:true}},members:{getFocusElement:function(){return this.getContentElement();
},_applyHtml:function(v,w){var x=this.getContentElement();
x.setAttribute(a,v||m);
x.setStyles({"padding":i,"border":o});
},_applyCssClass:function(y,z){this.getContentElement().setAttribute(c,y);
},_applySelectable:function(A){qx.ui.core.Widget.prototype._applySelectable.call(this,A);
if(qx.core.Variant.isSet(b,h)){this.getContainerElement().setStyle(l,A?n:o);
this.getContentElement().setStyle(l,A?n:o);
}},_applyFont:function(s,t){var u=s?qx.theme.manager.Font.getInstance().resolve(s).getStyles():qx.bom.Font.getDefaultStyles();
this.getContentElement().setStyles(u);
},_applyTextColor:function(q,r){if(q){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(q));
}else{this.getContentElement().removeStyle(k);
}}}});
})();
(function(){var q="",p='.qxappender .type-array{color:#CC3E8A;font-weight:bold;}',o='.qxappender .type-instance{color:#565656;font-weight:bold}',n="qx.log.appender.Element",m='.qxappender .level-info{background:#DEEDFA}',l='.qxappender .type-stringify{color:#565656;font-weight:bold}',k='.qxappender .type-number{color:#155791;font-weight:normal;}',j="qxappender",i='.qxappender .type-map{color:#CC3E8A;font-weight:bold;}',h='.qxappender .type-class{color:#5F3E8A;font-weight:bold}',c='.qxappender .type-boolean{color:#15BC91;font-weight:normal;}',g='.qxappender .level-error{background:#FFE2D5}',f='.qxappender .level-debug{background:white}',b='.qxappender .type-key{color:#565656;font-style:italic}',a='.qxappender .level-user{background:#E3EFE9}',e='.qxappender .level-warn{background:#FFF7D5}',d='.qxappender .type-string{color:black;font-weight:normal;}';
qx.Class.define(n,{extend:qx.core.Object,construct:function(s){qx.core.Object.call(this);
var t=[f,m,e,g,a,d,k,c,p,i,b,h,o,l];
qx.bom.Stylesheet.createElement(t.join(q));
qx.log.Logger.register(this);
},members:{__tA:null,setElement:function(r){this.clear();
if(r){qx.bom.element.Class.add(r,j);
}this.__tA=r;
},clear:function(){var u=this.__tA;
if(u){u.innerHTML=q;
}},process:function(v){var w=this.__tA;

if(!w){return;
}w.appendChild(qx.log.appender.Util.toHtml(v));
w.scrollTop=w.scrollHeight;
}},destruct:function(){this.__tA=null;
}});
})();
(function(){var o="default",n="native",m="",k=" ",j="\\b",h="(\\s|$)",g="(^|\\s)",f="g",e="qx.bom.element.Class",d="$2",c="\\b|\\b";
qx.Class.define(e,{statics:{__rf:/\s+/g,__rg:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(u,name){u.classList.add(name);
return name;
},"default":function(s,name){if(!this.has(s,name)){s.className+=(s.className?k:m)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.add(L[i]);
}return K.className;
},"default":function(v,w){var x={};
var z;
var y=v.className;

if(y){z=y.split(this.__rf);

for(var i=0,l=z.length;i<l;i++){x[z[i]]=true;
}
for(var i=0,l=w.length;i<l;i++){if(!x[w[i]]){z.push(w[i]);
}}}else{z=w;
}return v.className=z.join(k);
}}),get:function(t){return t.className;
},has:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(p,name){return p.classList.contains(name);
},"default":function(I,name){var J=new RegExp(g+name+h);
return J.test(I.className);
}}),remove:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(C,name){C.classList.remove(name);
return name;
},"default":function(A,name){var B=new RegExp(g+name+h);
A.className=A.className.replace(B,d);
return name;
}}),removeClasses:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(q,r){for(var i=0;i<r.length;i++){q.classList.remove(r[i]);
}return q.className;
},"default":function(M,N){var O=new RegExp(j+N.join(c)+j,f);
return M.className=M.className.replace(O,m).replace(this.__rg,m).replace(this.__rf,k);
}}),replace:function(D,E,F){this.remove(D,E);
return this.add(D,F);
},toggle:qx.lang.Object.select(qx.bom.client.Feature.HTML5_CLASSLIST?n:o,{"native":function(a,name,b){if(b===undefined){a.classList.toggle(name);
}else{b?this.add(a,name):this.remove(a,name);
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
(function(){var L="scrollbar-y",K="scrollbar-x",J="pane",I="auto",H="corner",G="on",F="changeVisibility",E="scroll",D="_computeScrollbars",C="off",v="scrollY",B="qx.ui.core.scroll.AbstractScrollArea",y="abstract",t="update",s="scrollX",x="mousewheel",w="scrollbarY",z="scrollbarX",r="horizontal",A="scrollarea",u="vertical";
qx.Class.define(B,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:y,construct:function(){qx.ui.core.Widget.call(this);
var f=new qx.ui.layout.Grid();
f.setColumnFlex(0,1);
f.setRowFlex(0,1);
this._setLayout(f);
this.addListener(x,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:A},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbarY:{check:[I,G,C],init:I,themeable:true,apply:D},scrollbar:{group:[z,w]}},members:{_createChildControlImpl:function(l){var m;

switch(l){case J:m=new qx.ui.core.scroll.ScrollPane();
m.addListener(t,this._computeScrollbars,this);
m.addListener(s,this._onScrollPaneX,this);
m.addListener(v,this._onScrollPaneY,this);
this._add(m,{row:0,column:0});
break;
case K:m=this._createScrollBar(r);
m.setMinWidth(0);
m.exclude();
m.addListener(E,this._onScrollBarX,this);
m.addListener(F,this._onChangeScrollbarXVisibility,this);
this._add(m,{row:1,column:0});
break;
case L:m=this._createScrollBar(u);
m.setMinHeight(0);
m.exclude();
m.addListener(E,this._onScrollBarY,this);
m.addListener(F,this._onChangeScrollbarYVisibility,this);
this._add(m,{row:0,column:1});
break;
case H:m=new qx.ui.core.Widget();
m.setWidth(0);
m.setHeight(0);
m.exclude();
this._add(m,{row:1,column:1});
break;
}return m||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,l);
},getPaneSize:function(){return this.getChildControl(J).getInnerSize();
},getItemTop:function(M){return this.getChildControl(J).getItemTop(M);
},getItemBottom:function(p){return this.getChildControl(J).getItemBottom(p);
},getItemLeft:function(d){return this.getChildControl(J).getItemLeft(d);
},getItemRight:function(X){return this.getChildControl(J).getItemRight(X);
},scrollToX:function(o){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollTo(o);
},scrollByX:function(ba){qx.ui.core.queue.Manager.flush();
this.getChildControl(K).scrollBy(ba);
},getScrollX:function(){var i=this.getChildControl(K,true);
return i?i.getPosition():0;
},scrollToY:function(Y){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollTo(Y);
},scrollByY:function(n){qx.ui.core.queue.Manager.flush();
this.getChildControl(L).scrollBy(n);
},getScrollY:function(){var q=this.getChildControl(L,true);
return q?q.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(J).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(J).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var b=this._isChildControlVisible(K);
var c=this._isChildControlVisible(L);
var a=(c)?this.getChildControl(L,true):(b?this.getChildControl(K,true):null);

if(a){a.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var j=this._isChildControlVisible(K);
var k=this._isChildControlVisible(L);

if(!j){this.scrollToX(0);
}j&&k?this._showChildControl(H):this._excludeChildControl(H);
},_onChangeScrollbarYVisibility:function(e){var g=this._isChildControlVisible(K);
var h=this._isChildControlVisible(L);

if(!h){this.scrollToY(0);
}g&&h?this._showChildControl(H):this._excludeChildControl(H);
},_computeScrollbars:function(){var T=this.getChildControl(J);
var content=T.getChildren()[0];

if(!content){this._excludeChildControl(K);
this._excludeChildControl(L);
return;
}var N=this.getInnerSize();
var S=T.getInnerSize();
var Q=T.getScrollSize();
if(!S||!Q){return;
}var U=this.getScrollbarX();
var V=this.getScrollbarY();

if(U===I&&V===I){var R=Q.width>N.width;
var W=Q.height>N.height;
if((R||W)&&!(R&&W)){if(R){W=Q.height>S.height;
}else if(W){R=Q.width>S.width;
}}}else{var R=U===G;
var W=V===G;
if(Q.width>(R?S.width:N.width)&&U===I){R=true;
}
if(Q.height>(R?S.height:N.height)&&V===I){W=true;
}}if(R){var P=this.getChildControl(K);
P.show();
P.setMaximum(Math.max(0,Q.width-S.width));
P.setKnobFactor((Q.width===0)?0:S.width/Q.width);
}else{this._excludeChildControl(K);
}
if(W){var O=this.getChildControl(L);
O.show();
O.setMaximum(Math.max(0,Q.height-S.height));
O.setKnobFactor((Q.height===0)?0:S.height/Q.height);
}else{this._excludeChildControl(L);
}}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var x="single",w="Boolean",v="one",u="changeSelection",t="mouseup",s="mousedown",r="losecapture",q="multi",p="_applyQuickSelection",o="mouseover",g="_applySelectionMode",n="__lL",k="_applyDragSelection",f="qx.ui.core.MMultiSelectionHandling",d="removeItem",j="keypress",h="qx.event.type.Data",l="addItem",c="additive",m="mousemove";
qx.Mixin.define(f,{construct:function(){var F=this.SELECTION_MANAGER;
var E=this.__lL=new F(this);
this.addListener(s,E.handleMouseDown,E);
this.addListener(t,E.handleMouseUp,E);
this.addListener(o,E.handleMouseOver,E);
this.addListener(m,E.handleMouseMove,E);
this.addListener(r,E.handleLoseCapture,E);
this.addListener(j,E.handleKeyPress,E);
this.addListener(l,E.handleAddItem,E);
this.addListener(d,E.handleRemoveItem,E);
E.addListener(u,this._onSelectionChange,this);
},events:{"changeSelection":h},properties:{selectionMode:{check:[x,q,c,v],init:x,apply:g},dragSelection:{check:w,init:false,apply:k},quickSelection:{check:w,init:false,apply:p}},members:{__lL:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__lL.selectAll();
},isSelected:function(I){if(!qx.ui.core.Widget.contains(this,I)){throw new Error("Could not test if "+I+" is selected, because it is not a child element!");
}return this.__lL.isItemSelected(I);
},addToSelection:function(J){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not add + "+J+" to selection, because it is not a child element!");
}this.__lL.addItem(J);
},removeFromSelection:function(y){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not remove "+y+" from selection, because it is not a child element!");
}this.__lL.removeItem(y);
},selectRange:function(G,H){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lL.selectItemRange(G,H);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__lL.clearSelection();
},setSelection:function(K){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selectiong the given items."));
this.trace();
}
for(var i=0;i<K.length;i++){if(!qx.ui.core.Widget.contains(this,K[i])){throw new Error("Could not select "+K[i]+", because it is not a child element!");
}}
if(K.length===0){this.resetSelection();
}else{var L=this.getSelection();

if(!qx.lang.Array.equals(L,K)){this.__lL.replaceSelection(K);
}}},getSelection:function(){return this.__lL.getSelection();
},getSortedSelection:function(){return this.__lL.getSortedSelection();
},isSelectionEmpty:function(){return this.__lL.isSelectionEmpty();
},getSelectionContext:function(){return this.__lL.getSelectionContext();
},_getManager:function(){return this.__lL;
},getSelectables:function(){return this.__lL.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__lL.invertSelection();
},_getLeadItem:function(){var D=this.__lL.getMode();

if(D===x||D===v){return this.__lL.getSelectedItem();
}else{return this.__lL.getLeadItem();
}},_applySelectionMode:function(B,C){this.__lL.setMode(B);
},_applyDragSelection:function(z,A){this.__lL.setDrag(z);
},_applyQuickSelection:function(a,b){this.__lL.setQuick(a);
},_onSelectionChange:function(e){this.fireDataEvent(u,e.getData());
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__jG:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__jH:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__jH[name];
s[t]();
}else{var u=this.__jG[name];
s[u](q);
}}}});
})();
(function(){var D="one",C="single",B="selected",A="additive",z="multi",y="PageUp",x="under",w="Left",v="lead",u="Down",bf="Up",be="Boolean",bd="PageDown",bc="anchor",bb="End",ba="Home",Y="Right",X="right",W="click",V="above",K="left",L="Escape",I="drag",J="Space",G="A",H="_applyMode",E="qx.debug",F="interval",M="changeSelection",N="Please use public 'getLeadItem' instead.",Q="qx.event.type.Data",P="quick",S="key",R="__no",U="abstract",T="on",O="qx.ui.core.selection.Abstract";
qx.Class.define(O,{type:U,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nl={};
},events:{"changeSelection":Q},properties:{mode:{check:[C,z,A,D],init:C,apply:H},drag:{check:be,init:false},quick:{check:be,init:false}},members:{__nm:0,__nn:0,__no:null,__np:null,__nq:null,__nr:null,__ns:null,__nt:null,__nu:null,__nv:null,__nw:null,__nx:null,__ny:null,__nz:null,__nA:null,__nB:null,__nC:null,__nl:null,__nD:null,__nE:null,getSelectionContext:function(){return this.__nB;
},selectAll:function(){var bY=this.getMode();

if(bY==C||bY==D){throw new Error("Can not select all items in selection mode: "+bY);
}this._selectAllItems();
this._fireChange();
},selectItem:function(bo){this._setSelectedItem(bo);
var bp=this.getMode();

if(bp!==C&&bp!==D){this._setLeadItem(bo);
this._setAnchorItem(bo);
}this._scrollItemIntoView(bo);
this._fireChange();
},addItem:function(c){var d=this.getMode();

if(d===C||d===D){this._setSelectedItem(c);
}else{if(!this._getAnchorItem()){this._setAnchorItem(c);
}this._setLeadItem(c);
this._addToSelection(c);
}this._scrollItemIntoView(c);
this._fireChange();
},removeItem:function(cL){this._removeFromSelection(cL);

if(this.getMode()===D&&this.isSelectionEmpty()){var cM=this._getFirstSelectable();

if(cM){this.addItem(cM);
}if(cM==cL){return;
}}
if(this.getLeadItem()==cL){this._setLeadItem(null);
}
if(this._getAnchorItem()==cL){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(bz,bA){var bB=this.getMode();

if(bB==C||bB==D){throw new Error("Can not select multiple items in selection mode: "+bB);
}this._selectItemRange(bz,bA);
this._setAnchorItem(bz);
this._setLeadItem(bA);
this._scrollItemIntoView(bA);
this._fireChange();
},clearSelection:function(){if(this.getMode()==D){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cj){var ck=this.getMode();

if(ck==D||ck===C){if(cj.length>1){throw new Error("Could not select more than one items in mode: "+ck+"!");
}
if(cj.length==1){this.selectItem(cj[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cj);
}},getSelectedItem:function(){var bt=this.getMode();

if(bt===C||bt===D){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__nl);
},getSortedSelection:function(){var cW=this.getSelectables();
var cV=qx.lang.Object.getValues(this.__nl);
cV.sort(function(a,b){return cW.indexOf(a)-cW.indexOf(b);
});
return cV;
},isItemSelected:function(bg){var bh=this._selectableToHashCode(bg);
return this.__nl[bh]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__nl);
},invertSelection:function(){var cR=this.getMode();

if(cR===C||cR===D){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var cQ=this.getSelectables();

for(var i=0;i<cQ.length;i++){this._toggleInSelection(cQ[i]);
}this._fireChange();
},_setLeadItem:function(da){var db=this.__nC;

if(db!==null){this._styleSelectable(db,v,false);
}
if(da!==null){this._styleSelectable(da,v,true);
}this.__nC=da;
},_getLeadItem:function(){if(qx.core.Variant.isSet(E,T)){qx.log.Logger.deprecatedMethodWarning(arguments.callee,N);
}return this.getLeadItem();
},getLeadItem:function(){return this.__nC!==null?this.__nC:null;
},_setAnchorItem:function(bE){var bF=this.__nD;

if(bF){this._styleSelectable(bF,bc,false);
}
if(bE){this._styleSelectable(bE,bc,true);
}this.__nD=bE;
},_getAnchorItem:function(){return this.__nD!==null?this.__nD:null;
},_isSelectable:function(br){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bG=event.getTarget();
return this._isSelectable(bG)?bG:null;
},_selectableToHashCode:function(bn){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bw,bx,by){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(g){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(f){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bC,bD){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bq){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bi,bj){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bW,bX){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bP,bQ){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cz,cA){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cz===D){var cB=this._getFirstSelectable();

if(cB){this._setSelectedItem(cB);
this._scrollItemIntoView(cB);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bl=this.getMode();

if(bl!==D&&bl!==C){return;
}var bk=this._getSelectableFromMouseEvent(event);

if(bk===null){return;
}this._setSelectedItem(bk);
this._fireChange(P);
},handleMouseDown:function(event){var j=this._getSelectableFromMouseEvent(event);

if(j===null){return;
}var m=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var h=event.isShiftPressed();
if(this.isItemSelected(j)&&!h&&!m&&!this.getDrag()){this.__nE=j;
return;
}else{this.__nE=null;
}this._scrollItemIntoView(j);
switch(this.getMode()){case C:case D:this._setSelectedItem(j);
break;
case A:this._setLeadItem(j);
this._setAnchorItem(j);
this._toggleInSelection(j);
break;
case z:this._setLeadItem(j);
if(h){var k=this._getAnchorItem();

if(k===null){k=this._getFirstSelectable();
this._setAnchorItem(k);
}this._selectItemRange(k,j,m);
}else if(m){this._setAnchorItem(j);
this._toggleInSelection(j);
}else{this._setAnchorItem(j);
this._setSelectedItem(j);
}break;
}var n=this.getMode();

if(this.getDrag()&&n!==C&&n!==D&&!h&&!m){this.__ns=this._getLocation();
this.__np=this._getScroll();
this.__nt=event.getDocumentLeft()+this.__np.left;
this.__nu=event.getDocumentTop()+this.__np.top;
this.__nv=true;
this._capture();
}this._fireChange(W);
},handleMouseUp:function(event){var t=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var q=event.isShiftPressed();

if(!t&&!q&&this.__nE){var r=this._getSelectableFromMouseEvent(event);

if(r===null||!this.isItemSelected(r)){return;
}var s=this.getMode();

if(s===A){this._removeFromSelection(r);
}else{this._setSelectedItem(r);

if(this.getMode()===z){this._setLeadItem(r);
this._setAnchorItem(r);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__nv){return;
}this.__nw=event.getDocumentLeft();
this.__nx=event.getDocumentTop();
var cY=this.__nw+this.__np.left;

if(cY>this.__nt){this.__ny=1;
}else if(cY<this.__nt){this.__ny=-1;
}else{this.__ny=0;
}var cX=this.__nx+this.__np.top;

if(cX>this.__nu){this.__nz=1;
}else if(cX<this.__nu){this.__nz=-1;
}else{this.__nz=0;
}var location=this.__ns;

if(this.__nw<location.left){this.__nm=this.__nw-location.left;
}else if(this.__nw>location.right){this.__nm=this.__nw-location.right;
}else{this.__nm=0;
}
if(this.__nx<location.top){this.__nn=this.__nx-location.top;
}else if(this.__nx>location.bottom){this.__nn=this.__nx-location.bottom;
}else{this.__nn=0;
}if(!this.__no){this.__no=new qx.event.Timer(100);
this.__no.addListener(F,this._onInterval,this);
}this.__no.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var bV=e.getData();

if(this.getMode()===D&&this.isSelectionEmpty()){this.addItem(bV);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__nv){return;
}if(this.__nA){this._fireChange(W);
}delete this.__nv;
delete this.__nq;
delete this.__nr;
this._releaseCapture();
if(this.__no){this.__no.stop();
}},_onInterval:function(e){this._scrollBy(this.__nm,this.__nn);
this.__np=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cv=this._getDimension();
var co=Math.max(0,Math.min(this.__nw-this.__ns.left,cv.width))+this.__np.left;
var cn=Math.max(0,Math.min(this.__nx-this.__ns.top,cv.height))+this.__np.top;
if(this.__nq===co&&this.__nr===cn){return;
}this.__nq=co;
this.__nr=cn;
var cx=this._getAnchorItem();
var cq=cx;
var ct=this.__ny;
var cw,cp;

while(ct!==0){cw=ct>0?this._getRelatedSelectable(cq,X):this._getRelatedSelectable(cq,K);
if(cw!==null){cp=this._getSelectableLocationX(cw);
if((ct>0&&cp.left<=co)||(ct<0&&cp.right>=co)){cq=cw;
continue;
}}break;
}var cu=this.__nz;
var cs,cr;

while(cu!==0){cs=cu>0?this._getRelatedSelectable(cq,x):this._getRelatedSelectable(cq,V);
if(cs!==null){cr=this._getSelectableLocationY(cs);
if((cu>0&&cr.top<=cn)||(cu<0&&cr.bottom>=cn)){cq=cs;
continue;
}}break;
}var cy=this.getMode();

if(cy===z){this._selectItemRange(cx,cq);
}else if(cy===A){if(this.isItemSelected(cx)){this._selectItemRange(cx,cq,true);
}else{this._deselectItemRange(cx,cq);
}this._setAnchorItem(cq);
}this._fireChange(I);
},__nF:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var cH,cG;
var cJ=event.getKeyIdentifier();
var cI=this.getMode();
var cD=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var cE=event.isShiftPressed();
var cF=false;

if(cJ===G&&cD){if(cI!==C&&cI!==D){this._selectAllItems();
cF=true;
}}else if(cJ===L){if(cI!==C&&cI!==D){this._clearSelection();
cF=true;
}}else if(cJ===J){var cC=this.getLeadItem();

if(cC&&!cE){if(cD||cI===A){this._toggleInSelection(cC);
}else{this._setSelectedItem(cC);
}cF=true;
}}else if(this.__nF[cJ]){cF=true;

if(cI===C||cI==D){cH=this._getSelectedItem();
}else{cH=this.getLeadItem();
}
if(cH!==null){switch(cJ){case ba:cG=this._getFirstSelectable();
break;
case bb:cG=this._getLastSelectable();
break;
case bf:cG=this._getRelatedSelectable(cH,V);
break;
case u:cG=this._getRelatedSelectable(cH,x);
break;
case w:cG=this._getRelatedSelectable(cH,K);
break;
case Y:cG=this._getRelatedSelectable(cH,X);
break;
case y:cG=this._getPage(cH,true);
break;
case bd:cG=this._getPage(cH,false);
break;
}}else{switch(cJ){case ba:case u:case Y:case bd:cG=this._getFirstSelectable();
break;
case bb:case bf:case w:case y:cG=this._getLastSelectable();
break;
}}if(cG!==null){switch(cI){case C:case D:this._setSelectedItem(cG);
break;
case A:this._setLeadItem(cG);
break;
case z:if(cE){var cK=this._getAnchorItem();

if(cK===null){this._setAnchorItem(cK=this._getFirstSelectable());
}this._setLeadItem(cG);
this._selectItemRange(cK,cG,cD);
}else{this._setAnchorItem(cG);
this._setLeadItem(cG);

if(!cD){this._setSelectedItem(cG);
}}break;
}this._scrollItemIntoView(cG);
}}
if(cF){event.stop();
this._fireChange(S);
}},_selectAllItems:function(){var bs=this.getSelectables();

for(var i=0,l=bs.length;i<l;i++){this._addToSelection(bs[i]);
}},_clearSelection:function(){var bu=this.__nl;

for(var bv in bu){this._removeFromSelection(bu[bv]);
}this.__nl={};
},_selectItemRange:function(ca,cb,cc){var cf=this._getSelectableRange(ca,cb);
if(!cc){var ce=this.__nl;
var cg=this.__nG(cf);

for(var cd in ce){if(!cg[cd]){this._removeFromSelection(ce[cd]);
}}}for(var i=0,l=cf.length;i<l;i++){this._addToSelection(cf[i]);
}},_deselectItemRange:function(bR,bS){var bT=this._getSelectableRange(bR,bS);

for(var i=0,l=bT.length;i<l;i++){this._removeFromSelection(bT[i]);
}},__nG:function(cS){var cU={};
var cT;

for(var i=0,l=cS.length;i<l;i++){cT=cS[i];
cU[this._selectableToHashCode(cT)]=cT;
}return cU;
},_getSelectedItem:function(){for(var bm in this.__nl){return this.__nl[bm];
}return null;
},_setSelectedItem:function(cN){if(this._isSelectable(cN)){var cO=this.__nl;
var cP=this._selectableToHashCode(cN);

if(!cO[cP]||qx.lang.Object.hasMinLength(cO,2)){this._clearSelection();
this._addToSelection(cN);
}}},_addToSelection:function(o){var p=this._selectableToHashCode(o);

if(!this.__nl[p]&&this._isSelectable(o)){this.__nl[p]=o;
this._styleSelectable(o,B,true);
this.__nA=true;
}},_toggleInSelection:function(ch){var ci=this._selectableToHashCode(ch);

if(!this.__nl[ci]){this.__nl[ci]=ch;
this._styleSelectable(ch,B,true);
}else{delete this.__nl[ci];
this._styleSelectable(ch,B,false);
}this.__nA=true;
},_removeFromSelection:function(cl){var cm=this._selectableToHashCode(cl);

if(this.__nl[cm]!=null){delete this.__nl[cm];
this._styleSelectable(cl,B,false);
this.__nA=true;
}},_replaceMultiSelection:function(bH){var bK=false;
var bN,bM;
var bI={};

for(var i=0,l=bH.length;i<l;i++){bN=bH[i];

if(this._isSelectable(bN)){bM=this._selectableToHashCode(bN);
bI[bM]=bN;
}}var bO=bH[0];
var bJ=bN;
var bL=this.__nl;

for(var bM in bL){if(bI[bM]){delete bI[bM];
}else{bN=bL[bM];
delete bL[bM];
this._styleSelectable(bN,B,false);
bK=true;
}}for(var bM in bI){bN=bL[bM]=bI[bM];
this._styleSelectable(bN,B,true);
bK=true;
}if(!bK){return false;
}this._scrollItemIntoView(bJ);
this._setLeadItem(bO);
this._setAnchorItem(bO);
this.__nA=true;
this._fireChange();
},_fireChange:function(bU){if(this.__nA){this.__nB=bU||null;
this.fireDataEvent(M,this.getSelection());
delete this.__nA;
}}},destruct:function(){this._disposeObjects(R);
this.__nl=this.__nE=this.__nD=null;
this.__nC=null;
}});
})();
(function(){var J="vertical",I="under",H="above",G="qx.ui.core.selection.Widget",F="left",E="right";
qx.Class.define(G,{extend:qx.ui.core.selection.Abstract,construct:function(e){qx.ui.core.selection.Abstract.call(this);
this.__mc=e;
},members:{__mc:null,_isSelectable:function(h){return h.isEnabled()&&h.isVisible()&&h.getLayoutParent()===this.__mc;
},_selectableToHashCode:function(L){return L.$$hash;
},_styleSelectable:function(j,k,m){m?j.addState(k):j.removeState(k);
},_capture:function(){this.__mc.capture();
},_releaseCapture:function(){this.__mc.releaseCapture();
},_getWidget:function(){return this.__mc;
},_getLocation:function(){var r=this.__mc.getContentElement().getDomElement();
return r?qx.bom.element.Location.get(r):null;
},_getDimension:function(){return this.__mc.getInnerSize();
},_getSelectableLocationX:function(f){var g=f.getBounds();

if(g){return {left:g.left,right:g.left+g.width};
}},_getSelectableLocationY:function(c){var d=c.getBounds();

if(d){return {top:d.top,bottom:d.top+d.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(N,O){},_scrollItemIntoView:function(q){this.__mc.scrollChildIntoView(q);
},getSelectables:function(){var o=this.__mc.getChildren();
var p=[];
var n;

for(var i=0,l=o.length;i<l;i++){n=o[i];

if(n.isEnabled()&&n.isVisible()){p.push(n);
}}return p;
},_getSelectableRange:function(s,t){if(s===t){return [s];
}var x=this.__mc.getChildren();
var u=[];
var w=false;
var v;

for(var i=0,l=x.length;i<l;i++){v=x[i];

if(v===s||v===t){if(w){u.push(v);
break;
}else{w=true;
}}
if(w&&v.isEnabled()&&v.isVisible()){u.push(v);
}}return u;
},_getFirstSelectable:function(){var M=this.__mc.getChildren();

for(var i=0,l=M.length;i<l;i++){if(M[i].isEnabled()&&M[i].isVisible()){return M[i];
}}return null;
},_getLastSelectable:function(){var K=this.__mc.getChildren();

for(var i=K.length-1;i>0;i--){if(K[i].isEnabled()&&K[i].isVisible()){return K[i];
}}return null;
},_getRelatedSelectable:function(y,z){var C=this.__mc.getOrientation()===J;
var B=this.__mc.getChildren();
var A=B.indexOf(y);
var D;

if((C&&z===H)||(!C&&z===F)){for(var i=A-1;i>=0;i--){D=B[i];

if(D.isEnabled()&&D.isVisible()){return D;
}}}else if((C&&z===I)||(!C&&z===E)){for(var i=A+1;i<B.length;i++){D=B[i];

if(D.isEnabled()&&D.isVisible()){return D;
}}}return null;
},_getPage:function(a,b){if(b){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__mc=null;
}});
})();
(function(){var b="qx.ui.core.selection.ScrollArea";
qx.Class.define(b,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(c){return (c.isEnabled()&&c.isVisible()&&c.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var a=this._getWidget();
return {left:a.getScrollX(),top:a.getScrollY()};
},_scrollBy:function(q,r){var s=this._getWidget();
s.scrollByX(q);
s.scrollByY(r);
},_getPage:function(d,e){var j=this.getSelectables();
var length=j.length;
var m=j.indexOf(d);
if(m===-1){throw new Error("Invalid lead item: "+d);
}var f=this._getWidget();
var o=f.getScrollY();
var innerHeight=f.getInnerSize().height;
var top,h,n;

if(e){var l=o;
var i=m;
while(1){for(;i>=0;i--){top=f.getItemTop(j[i]);
if(top<l){n=i+1;
break;
}}if(n==null){var p=this._getFirstSelectable();
return p==d?null:p;
}if(n>=m){l-=innerHeight+o-f.getItemBottom(d);
n=null;
continue;
}return j[n];
}}else{var k=innerHeight+o;
var i=m;
while(1){for(;i<length;i++){h=f.getItemBottom(j[i]);
if(h>k){n=i-1;
break;
}}if(n==null){var g=this._getLastSelectable();
return g==d?null:g;
}if(n<=m){k+=f.getItemTop(d)-o;
n=null;
continue;
}return j[n];
}}}}});
})();
(function(){var e="right",d="above",c="left",b="under",a="qx.ui.tree.SelectionManager";
qx.Class.define(a,{extend:qx.ui.core.selection.ScrollArea,members:{_getSelectableLocationY:function(j){var k=j.getBounds();

if(k){var top=this._getWidget().getItemTop(j);
return {top:top,bottom:top+k.height};
}},_isSelectable:function(r){return r instanceof qx.ui.tree.AbstractTreeItem&&r.isEnabled()&&r.isVisible();
},_getSelectableFromMouseEvent:function(event){return this._getWidget().getTreeItem(event.getTarget());
},getSelectables:function(){var g=this._getWidget();
var h=[];

if(g.getRoot()!=null){var f=g.getRoot().getItems(true,false,g.getHideRoot());

for(var i=0;i<f.length;i++){if(this._isSelectable(f[i])){h.push(f[i]);
}}}return h;
},_getSelectableRange:function(m,n){if(m===n){return [m];
}var o=this.getSelectables();
var p=o.indexOf(m);
var q=o.indexOf(n);

if(p<0||q<0){return [];
}
if(p<q){return o.slice(p,q+1);
}else{return o.slice(q,p+1);
}},_getFirstSelectable:function(){return this.getSelectables()[0]||null;
},_getLastSelectable:function(){var l=this.getSelectables();

if(l.length>0){return l[l.length-1];
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
(function(){var l="dblclick",k="click",j="Boolean",h="excluded",g="qx.event.type.Data",f="visible",d="The invisible and stayInSameNestLevel parameters are deprecated: Use",c="undefined",b="_applyOpenMode",a="Space",D="Left",C="changeOpenMode",B="_applyRootOpenClose",A="__qD",z="changeSelection",y="qx.ui.tree.Tree",x="tree",w=" getPreviousNodeOf() instead.",v="_applyHideRoot",u="changeRoot",s="_applyRoot",t=" getNextNodeOf() instead.",q="qx.ui.tree.AbstractTreeItem",r="Enter",o="keypress",p="none",m="pane",n="Right";
qx.Class.define(y,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MMultiSelectionHandling,qx.ui.core.MContentPadding,qx.ui.form.MModelSelection],construct:function(){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__qD=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({allowShrinkY:false,allowGrowX:true});
this.getChildControl(m).add(this.__qD);
this.initOpenMode();
this.initRootOpenClose();
this.addListener(z,this._onChangeSelection,this);
this.addListener(o,this._onKeyPress,this);
},events:{addItem:g,removeItem:g},properties:{openMode:{check:[k,l,p],init:l,apply:b,event:C,themeable:true},root:{check:q,init:null,nullable:true,event:u,apply:s},hideRoot:{check:j,init:false,apply:v},rootOpenClose:{check:j,init:false,apply:B},appearance:{refine:true,init:x},focusable:{refine:true,init:true}},members:{__qD:null,SELECTION_MANAGER:qx.ui.tree.SelectionManager,getChildrenContainer:function(){return this.__qD;
},_applyRoot:function(bo,bp){var bq=this.getChildrenContainer();

if(bp){bq.remove(bp);

if(bp.hasChildren()){bq.remove(bp.getChildrenContainer());
}}
if(bo){bq.add(bo);

if(bo.hasChildren()){bq.add(bo.getChildrenContainer());
}bo.setVisibility(this.getHideRoot()?h:f);
bo.recursiveAddToWidgetQueue();
}},_applyHideRoot:function(E,F){var G=this.getRoot();

if(!G){return;
}G.setVisibility(E?h:f);
G.recursiveAddToWidgetQueue();
},_applyRootOpenClose:function(R,S){var T=this.getRoot();

if(!T){return;
}T.recursiveAddToWidgetQueue();
},_getContentPaddingTarget:function(){return this.__qD;
},getNextNodeOf:function(U,V){if((V!==false||U.isOpen())&&U.hasChildren()){return U.getChildren()[0];
}
while(U){var parent=U.getParent();

if(!parent){return null;
}var X=parent.getChildren();
var W=X.indexOf(U);

if(W>-1&&W<X.length-1){return X[W+1];
}U=parent;
}return null;
},getPreviousNodeOf:function(bi,bj){var parent=bi.getParent();

if(!parent){return null;
}
if(this.getHideRoot()){if(parent==this.getRoot()){if(parent.getChildren()[0]==bi){return null;
}}}else{if(bi==this.getRoot()){return null;
}}var bm=parent.getChildren();
var bk=bm.indexOf(bi);

if(bk>0){var bl=bm[bk-1];

while((bj!==false||bl.isOpen())&&bl.hasChildren()){var bn=bl.getChildren();
bl=bn[bn.length-1];
}return bl;
}else{return parent;
}},getNextSiblingOf:function(K,L,M){if(typeof (L)!==c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d+t);

if(!M){return this.getNextNodeOf(K,L);
}}
if(K==this.getRoot()){return null;
}var parent=K.getParent();
var N=parent.getChildren();
var O=N.indexOf(K);

if(O<N.length-1){return N[O+1];
}return null;
},getPreviousSiblingOf:function(ba,bb,bc){if(typeof (bb)!==c){qx.log.Logger.deprecatedMethodWarning(arguments.callee,d+w);

if(!bc){return this.getPreviousNodeOf(ba,bb);
}}
if(ba==this.getRoot()){return null;
}var parent=ba.getParent();
var bd=parent.getChildren();
var be=bd.indexOf(ba);

if(be>0){return bd[be-1];
}return null;
},getItems:function(bf,bg){if(this.getRoot()!=null){return this.getRoot().getItems(bf,bg,this.getHideRoot());
}else{return [];
}},getChildren:function(){if(this.getRoot()!=null){return [this.getRoot()];
}else{return [];
}},getTreeItem:function(J){while(J){if(J==this){return null;
}
if(J instanceof qx.ui.tree.AbstractTreeItem){return J;
}J=J.getLayoutParent();
}return null;
},_applyOpenMode:function(P,Q){if(Q==k){this.removeListener(k,this._onOpen,this);
}else if(Q==l){this.removeListener(l,this._onOpen,this);
}
if(P==k){this.addListener(k,this._onOpen,this);
}else if(P==l){this.addListener(l,this._onOpen,this);
}},_onOpen:function(e){var Y=this.getTreeItem(e.getTarget());

if(!Y||!Y.isOpenable()){return;
}Y.setOpen(!Y.isOpen());
e.stopPropagation();
},_onChangeSelection:function(e){var I=e.getData();
for(var i=0;i<I.length;i++){var H=I[i];
while(H.getParent()!=null){H=H.getParent();
H.setOpen(true);
}}},_onKeyPress:function(e){var bh=this._getLeadItem();

if(bh!==null){switch(e.getKeyIdentifier()){case D:if(bh.isOpenable()&&bh.isOpen()){bh.setOpen(false);
}break;
case n:if(bh.isOpenable()&&!bh.isOpen()){bh.setOpen(true);
}break;
case r:case a:if(bh.isOpenable()){bh.toggleOpen();
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
(function(){var l="horizontal",k="px",j="scroll",i="vertical",h="-1px",g="qx.client",f="0",d="hidden",c="mousedown",b="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="Integer",y="mousemove",x="_applyMaximum",w="_applyOrientation",v="appear",u="opera",t="PositiveInteger",s="mshtml",r="mouseup",p="Number",q="_applyPosition",n="scrollbar",o="__oI",m="native";
qx.Class.define(b,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(V){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(j,this._onScroll,this);
this.addListener(c,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(y,this._stopPropagation,this);

if(qx.core.Variant.isSet(g,u)){this.addListener(v,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(V!=null){this.setOrientation(V);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:n},orientation:{check:[l,i],init:l,apply:w},maximum:{check:t,apply:x,init:100},position:{check:p,init:0,apply:q,event:j},singleStep:{check:z,init:20},knobFactor:{check:A,nullable:true}},members:{__oH:null,__oI:null,_getScrollPaneElement:function(){if(!this.__oI){this.__oI=new qx.html.Element();
}return this.__oI;
},renderLayout:function(K,top,L,M){var N=qx.ui.core.Widget.prototype.renderLayout.call(this,K,top,L,M);
this._updateScrollBar();
return N;
},_getContentHint:function(){var O=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__oH?100:O,maxWidth:this.__oH?null:O,minWidth:this.__oH?null:O,height:this.__oH?O:100,maxHeight:this.__oH?O:null,minHeight:this.__oH?O:null};
},_applyEnabled:function(R,S){qx.ui.core.Widget.prototype._applyEnabled.call(this,R,S);
this._updateScrollBar();
},_applyMaximum:function(W){this._updateScrollBar();
},_applyPosition:function(a){var content=this.getContentElement();

if(this.__oH){content.scrollToX(a);
}else{content.scrollToY(a);
}},_applyOrientation:function(B,C){var D=this.__oH=B===l;
this.set({allowGrowX:D,allowShrinkX:D,allowGrowY:!D,allowShrinkY:!D});

if(D){this.replaceState(i,l);
}else{this.replaceState(l,i);
}this.getContentElement().setStyles({overflowX:D?j:d,overflowY:D?d:j});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var G=this.__oH;
var H=this.getBounds();

if(!H){return;
}
if(this.isEnabled()){var I=G?H.width:H.height;
var F=this.getMaximum()+I;
}else{F=0;
}if(qx.core.Variant.isSet(g,s)){var H=this.getBounds();
this.getContentElement().setStyles({left:G?f:h,top:G?h:f,width:(G?H.width:H.width+1)+k,height:(G?H.height+1:H.height)+k});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(G?F:1)+k,height:(G?1:F)+k});
this.scrollTo(this.getPosition());
},scrollTo:function(E){this.setPosition(Math.max(0,Math.min(this.getMaximum(),E)));
},scrollBy:function(J){this.scrollTo(this.getPosition()+J);
},scrollBySteps:function(T){var U=this.getSingleStep();
this.scrollBy(T*U);
},_onScroll:function(e){var Q=this.getContentElement();
var P=this.__oH?Q.getScrollX():Q.getScrollY();
this.setPosition(P);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(o);
}});
})();
(function(){var n="slider",m="horizontal",l="button-begin",k="vertical",j="button-end",i="Integer",h="execute",g="right",f="left",d="down",C="up",B="PositiveNumber",A="changeValue",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",y="_applyKnobFactor",x="knob",w="qx.ui.core.scroll.ScrollBar",v="resize",u="_applyOrientation",t="_applyPageStep",r="PositiveInteger",s="scroll",p="_applyPosition",q="scrollbar",o="_applyMaximum";
qx.Class.define(w,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(J){qx.ui.core.Widget.call(this);
this._createChildControl(l);
this._createChildControl(n).addListener(v,this._onResizeSlider,this);
this._createChildControl(j);
if(J!=null){this.setOrientation(J);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:q},orientation:{check:[m,k],init:m,apply:u},maximum:{check:r,apply:o,init:100},position:{check:z,init:0,apply:p,event:s},singleStep:{check:i,init:20},pageStep:{check:i,init:10,apply:t},knobFactor:{check:B,apply:y,nullable:true}},members:{__mj:2,_createChildControlImpl:function(E){var F;

switch(E){case n:F=new qx.ui.core.scroll.ScrollSlider();
F.setPageStep(100);
F.setFocusable(false);
F.addListener(A,this._onChangeSliderValue,this);
this._add(F,{flex:1});
break;
case l:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(h,this._onExecuteBegin,this);
this._add(F);
break;
case j:F=new qx.ui.form.RepeatButton();
F.setFocusable(false);
F.addListener(h,this._onExecuteEnd,this);
this._add(F);
break;
}return F||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_applyMaximum:function(G){this.getChildControl(n).setMaximum(G);
},_applyPosition:function(K){this.getChildControl(n).setValue(K);
},_applyKnobFactor:function(L){this.getChildControl(n).setKnobFactor(L);
},_applyPageStep:function(Q){this.getChildControl(n).setPageStep(Q);
},_applyOrientation:function(a,b){var c=this._getLayout();

if(c){c.dispose();
}if(a===m){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(k,m);
this.getChildControl(l).replaceState(C,f);
this.getChildControl(j).replaceState(d,g);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(m,k);
this.getChildControl(l).replaceState(f,C);
this.getChildControl(j).replaceState(g,d);
}this.getChildControl(n).setOrientation(a);
},scrollTo:function(D){this.getChildControl(n).slideTo(D);
},scrollBy:function(R){this.getChildControl(n).slideBy(R);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(n).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var M=this.getChildControl(n).getChildControl(x);
var P=M.getSizeHint();
var N=false;
var O=this.getChildControl(n).getInnerSize();

if(this.getOrientation()==k){if(O.height<P.minHeight+this.__mj){N=true;
}}else{if(O.width<P.minWidth+this.__mj){N=true;
}}
if(N){M.exclude();
}else{M.show();
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
(function(){var bf="knob",be="horizontal",bd="vertical",bc="Integer",bb="hovered",ba="left",Y="top",X="mouseup",W="pressed",V="px",bP="mousemove",bO="resize",bN="slider",bM="mousedown",bL="PageUp",bK="mouseout",bJ="changeValue",bI="Left",bH="Down",bG="Up",bm="dblclick",bn="qx.ui.form.Slider",bk="PageDown",bl="mousewheel",bi="interval",bj="_applyValue",bg="_applyKnobFactor",bh="End",bo="height",bp="Right",bw="width",bu="_applyOrientation",bA="Home",by="mouseover",bC="floor",bB="_applyMinimum",br="click",bF="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",bE="keypress",bD="ceil",bq="losecapture",bs="contextmenu",bt="_applyMaximum",bv="Number",bx="changeMaximum",bz="changeMinimum";
qx.Class.define(bn,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(x){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bE,this._onKeyPress);
this.addListener(bl,this._onMouseWheel);
this.addListener(bM,this._onMouseDown);
this.addListener(X,this._onMouseUp);
this.addListener(bq,this._onMouseUp);
this.addListener(bO,this._onUpdate);
this.addListener(bs,this._onStopEvent);
this.addListener(br,this._onStopEvent);
this.addListener(bm,this._onStopEvent);
if(x!=null){this.setOrientation(x);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bN},focusable:{refine:true,init:true},orientation:{check:[be,bd],init:be,apply:bu},value:{check:bF,init:0,apply:bj,event:bJ,nullable:true},minimum:{check:bc,init:0,apply:bB,event:bz},maximum:{check:bc,init:100,apply:bt,event:bx},singleStep:{check:bc,init:1},pageStep:{check:bc,init:10},knobFactor:{check:bv,apply:bg,nullable:true}},members:{__mI:null,__mJ:null,__mK:null,__mL:null,__mM:null,__mN:null,__mO:null,__mP:null,__mQ:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bS){var bT;

switch(bS){case bf:bT=new qx.ui.core.Widget();
bT.addListener(bO,this._onUpdate,this);
bT.addListener(by,this._onMouseOver);
bT.addListener(bK,this._onMouseOut);
this._add(bT);
break;
}return bT||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bS);
},_onMouseOver:function(e){this.addState(bb);
},_onMouseOut:function(e){this.removeState(bb);
},_onMouseWheel:function(e){var K=e.getWheelDelta()>0?1:-1;
this.slideBy(K*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bV=this.getOrientation()===be;
var bU=bV?bI:bG;
var forward=bV?bp:bH;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bU:this.slideBack();
break;
case bk:this.slidePageForward();
break;
case bL:this.slidePageBack();
break;
case bA:this.slideToBegin();
break;
case bh:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__mL){return;
}var R=this.__mS;
var P=this.getChildControl(bf);
var Q=R?ba:Y;
var T=R?e.getDocumentLeft():e.getDocumentTop();
var U=this.__mI=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Q];
var S=this.__mJ=qx.bom.element.Location.get(P.getContainerElement().getDomElement())[Q];

if(e.getTarget()===P){this.__mL=true;
this.__mM=T+U-S;
P.addState(W);
}else{this.__mN=true;
this.__mO=T<=S?-1:1;
this.__mT(e);
this._onInterval();
if(!this.__mQ){this.__mQ=new qx.event.Timer(100);
this.__mQ.addListener(bi,this._onInterval,this);
}this.__mQ.start();
}this.addListener(bP,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__mL){this.releaseCapture();
delete this.__mL;
delete this.__mM;
this.getChildControl(bf).removeState(W);
if(e.getType()===X){var j;
var k;
var i;

if(this.__mS){j=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__mI);
i=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Y];
k=e.getDocumentTop()-(i+this.getChildControl(bf).getBounds().top);
}else{j=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__mI);
i=qx.bom.element.Location.get(this.getContentElement().getDomElement())[ba];
k=e.getDocumentLeft()-(i+this.getChildControl(bf).getBounds().left);
}
if(k<0||k>this.__mK||j<0||j>this.__mK){this.getChildControl(bf).removeState(bb);
}}}else if(this.__mN){this.__mQ.stop();
this.releaseCapture();
delete this.__mN;
delete this.__mO;
delete this.__mP;
}this.removeListener(bP,this._onMouseMove);
if(e.getType()===X){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__mL){var f=this.__mS?e.getDocumentLeft():e.getDocumentTop();
var d=f-this.__mM;
this.slideTo(this._positionToValue(d));
}else if(this.__mN){this.__mT(e);
}e.stopPropagation();
},_onInterval:function(e){var bQ=this.getValue()+(this.__mO*this.getPageStep());
if(bQ<this.getMinimum()){bQ=this.getMinimum();
}else if(bQ>this.getMaximum()){bQ=this.getMaximum();
}var bR=this.__mO==-1;

if((bR&&bQ<=this.__mP)||(!bR&&bQ>=this.__mP)){bQ=this.__mP;
}this.slideTo(bQ);
},_onUpdate:function(e){var b=this.getInnerSize();
var c=this.getChildControl(bf).getBounds();
var a=this.__mS?bw:bo;
this._updateKnobSize();
this.__mR=b[a]-c[a];
this.__mK=c[a];
this._updateKnobPosition();
},__mS:false,__mR:0,__mT:function(e){var l=this.__mS;
var s=l?e.getDocumentLeft():e.getDocumentTop();
var u=this.__mI;
var m=this.__mJ;
var w=this.__mK;
var t=s-u;

if(s>=m){t-=w;
}var q=this._positionToValue(t);
var n=this.getMinimum();
var o=this.getMaximum();

if(q<n){q=n;
}else if(q>o){q=o;
}else{var r=this.getValue();
var p=this.getPageStep();
var v=this.__mO<0?bC:bD;
q=r+(Math[v]((q-r)/p)*p);
}if(this.__mP==null||(this.__mO==-1&&q<=this.__mP)||(this.__mO==1&&q>=this.__mP)){this.__mP=q;
}},_positionToValue:function(C){var D=this.__mR;
if(D==null||D==0){return 0;
}var F=C/D;

if(F<0){F=0;
}else if(F>1){F=1;
}var E=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(E*F);
},_valueToPosition:function(L){var M=this.__mR;

if(M==null){return 0;
}var N=this.getMaximum()-this.getMinimum();
if(N==0){return 0;
}var L=L-this.getMinimum();
var O=L/N;

if(O<0){O=0;
}else if(O>1){O=1;
}return Math.round(M*O);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(cc){var cd=this.getChildControl(bf).getContainerElement();

if(this.__mS){cd.setStyle(ba,cc+V,true);
}else{cd.setStyle(Y,cc+V,true);
}},_updateKnobSize:function(){var B=this.getKnobFactor();

if(B==null){return;
}var A=this.getInnerSize();

if(A==null){return;
}if(this.__mS){this.getChildControl(bf).setWidth(Math.round(B*A.width));
}else{this.getChildControl(bf).setHeight(Math.round(B*A.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(G){this.slideTo(this.getValue()+G);
},slideTo:function(bW){if(bW<this.getMinimum()){bW=this.getMinimum();
}else if(bW>this.getMaximum()){bW=this.getMaximum();
}else{bW=this.getMinimum()+Math.round((bW-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bW);
},_applyOrientation:function(H,I){var J=this.getChildControl(bf);
this.__mS=H===be;
if(this.__mS){this.removeState(bd);
J.removeState(bd);
this.addState(be);
J.addState(be);
J.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(be);
J.removeState(be);
this.addState(bd);
J.addState(bd);
J.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(ca,cb){if(ca!=null){this._updateKnobSize();
}else{if(this.__mS){this.getChildControl(bf).resetWidth();
}else{this.getChildControl(bf).resetHeight();
}}},_applyValue:function(y,z){if(y!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(g,h){if(this.getValue()<g){this.setValue(g);
}this._updateKnobPosition();
},_applyMaximum:function(bX,bY){if(this.getValue()>bX){this.setValue(bX);
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
(function(){var H="top",G="left",F="qx.debug",E="bottom",D="hAlign",C="vAlign",B="Integer",A="_applyLayoutChange",z="center",w="middle",W="right",V="flex",U="on",T="height",S="' is not supported by the Grid layout!",R="Invalid parameter 'column'",Q="The property '",P="Value must be positive",O="qx.ui.layout.Grid",N="maxHeight",L="width",M="minHeight",J="minWidth",K="maxWidth",I="Invalid parameter 'row'";
qx.Class.define(O,{extend:qx.ui.layout.Abstract,construct:function(ca,cb){qx.ui.layout.Abstract.call(this);
this.__hf=[];
this.__hg=[];

if(ca){this.setSpacingX(ca);
}
if(cb){this.setSpacingY(cb);
}},properties:{spacingX:{check:B,init:0,apply:A},spacingY:{check:B,init:0,apply:A}},members:{__hh:null,__hf:null,__hg:null,__hi:null,__hj:null,__hk:null,__hl:null,__hm:null,__hn:null,verifyLayoutProperty:qx.core.Variant.select(F,{"on":function(cc,name,cd){var ce={"row":1,"column":1,"rowSpan":1,"colSpan":1};
this.assert(ce[name]==1,Q+name+S);
this.assertInteger(cd);
this.assert(cd>=0,P);
},"off":null}),__ho:function(){var bd=[];
var bc=[];
var be=[];
var ba=-1;
var Y=-1;
var bg=this._getLayoutChildren();

for(var i=0,l=bg.length;i<l;i++){var bb=bg[i];
var bf=bb.getLayoutProperties();
var bh=bf.row;
var X=bf.column;
bf.colSpan=bf.colSpan||1;
bf.rowSpan=bf.rowSpan||1;
if(bh==null||X==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+bb+"' must be defined!");
}
if(bd[bh]&&bd[bh][X]){throw new Error("Cannot add widget '"+bb+"'!. "+"There is already a widget '"+bd[bh][X]+"' in this cell ("+bh+", "+X+")");
}
for(var x=X;x<X+bf.colSpan;x++){for(var y=bh;y<bh+bf.rowSpan;y++){if(bd[y]==undefined){bd[y]=[];
}bd[y][x]=bb;
Y=Math.max(Y,x);
ba=Math.max(ba,y);
}}
if(bf.rowSpan>1){be.push(bb);
}
if(bf.colSpan>1){bc.push(bb);
}}for(var y=0;y<=ba;y++){if(bd[y]==undefined){bd[y]=[];
}}this.__hh=bd;
this.__hi=bc;
this.__hj=be;
this.__hk=ba;
this.__hl=Y;
this.__hm=null;
this.__hn=null;
delete this._invalidChildrenCache;
},_setRowData:function(e,f,g){var h=this.__hf[e];

if(!h){this.__hf[e]={};
this.__hf[e][f]=g;
}else{h[f]=g;
}},_setColumnData:function(a,b,c){var d=this.__hg[a];

if(!d){this.__hg[a]={};
this.__hg[a][b]=c;
}else{d[b]=c;
}},setSpacing:function(bT){this.setSpacingY(bT);
this.setSpacingX(bT);
return this;
},setColumnAlign:function(cO,cP,cQ){if(qx.core.Variant.isSet(F,U)){this.assertInteger(cO,R);
this.assertInArray(cP,[G,z,W]);
this.assertInArray(cQ,[H,w,E]);
}this._setColumnData(cO,D,cP);
this._setColumnData(cO,C,cQ);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bG){var bH=this.__hg[bG]||{};
return {vAlign:bH.vAlign||H,hAlign:bH.hAlign||G};
},setRowAlign:function(bW,bX,bY){if(qx.core.Variant.isSet(F,U)){this.assertInteger(bW,I);
this.assertInArray(bX,[G,z,W]);
this.assertInArray(bY,[H,w,E]);
}this._setRowData(bW,D,bX);
this._setRowData(bW,C,bY);
this._applyLayoutChange();
return this;
},getRowAlign:function(cA){var cB=this.__hf[cA]||{};
return {vAlign:cB.vAlign||H,hAlign:cB.hAlign||G};
},getCellWidget:function(cF,cG){if(this._invalidChildrenCache){this.__ho();
}var cF=this.__hh[cF]||{};
return cF[cG]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hk+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__ho();
}return this.__hl+1;
},getCellAlign:function(cR,cS){var cY=H;
var cW=G;
var cX=this.__hf[cR];
var cU=this.__hg[cS];
var cT=this.__hh[cR][cS];

if(cT){var cV={vAlign:cT.getAlignY(),hAlign:cT.getAlignX()};
}else{cV={};
}if(cV.vAlign){cY=cV.vAlign;
}else if(cX&&cX.vAlign){cY=cX.vAlign;
}else if(cU&&cU.vAlign){cY=cU.vAlign;
}if(cV.hAlign){cW=cV.hAlign;
}else if(cU&&cU.hAlign){cW=cU.hAlign;
}else if(cX&&cX.hAlign){cW=cX.hAlign;
}return {vAlign:cY,hAlign:cW};
},setColumnFlex:function(bU,bV){this._setColumnData(bU,V,bV);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bK){var bL=this.__hg[bK]||{};
return bL.flex!==undefined?bL.flex:0;
},setRowFlex:function(bi,bj){this._setRowData(bi,V,bj);
this._applyLayoutChange();
return this;
},getRowFlex:function(cC){var cD=this.__hf[cC]||{};
var cE=cD.flex!==undefined?cD.flex:0;
return cE;
},setColumnMaxWidth:function(bE,bF){this._setColumnData(bE,K,bF);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(en){var eo=this.__hg[en]||{};
return eo.maxWidth!==undefined?eo.maxWidth:Infinity;
},setColumnWidth:function(bR,bS){this._setColumnData(bR,L,bS);
this._applyLayoutChange();
return this;
},getColumnWidth:function(da){var db=this.__hg[da]||{};
return db.width!==undefined?db.width:null;
},setColumnMinWidth:function(cf,cg){this._setColumnData(cf,J,cg);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(cy){var cz=this.__hg[cy]||{};
return cz.minWidth||0;
},setRowMaxHeight:function(bC,bD){this._setRowData(bC,N,bD);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bI){var bJ=this.__hf[bI]||{};
return bJ.maxHeight||Infinity;
},setRowHeight:function(cu,cv){this._setRowData(cu,T,cv);
this._applyLayoutChange();
return this;
},getRowHeight:function(cw){var cx=this.__hf[cw]||{};
return cx.height!==undefined?cx.height:null;
},setRowMinHeight:function(cs,ct){this._setRowData(cs,M,ct);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(dF){var dG=this.__hf[dF]||{};
return dG.minHeight||0;
},__hp:function(bM){var bQ=bM.getSizeHint();
var bP=bM.getMarginLeft()+bM.getMarginRight();
var bO=bM.getMarginTop()+bM.getMarginBottom();
var bN={height:bQ.height+bO,width:bQ.width+bP,minHeight:bQ.minHeight+bO,minWidth:bQ.minWidth+bP,maxHeight:bQ.maxHeight+bO,maxWidth:bQ.maxWidth+bP};
return bN;
},_fixHeightsRowSpan:function(dr){var dC=this.getSpacingY();

for(var i=0,l=this.__hj.length;i<l;i++){var du=this.__hj[i];
var dw=this.__hp(du);
var dx=du.getLayoutProperties();
var dt=dx.row;
var dA=dC*(dx.rowSpan-1);
var ds=dA;
var dz={};

for(var j=0;j<dx.rowSpan;j++){var dE=dx.row+j;
var dv=dr[dE];
var dD=this.getRowFlex(dE);

if(dD>0){dz[dE]={min:dv.minHeight,value:dv.height,max:dv.maxHeight,flex:dD};
}dA+=dv.height;
ds+=dv.minHeight;
}if(dA<dw.height){var dB=qx.ui.layout.Util.computeFlexOffsets(dz,dw.height,dA);

for(var j=0;j<dx.rowSpan;j++){var dy=dB[dt+j]?dB[dt+j].offset:0;
dr[dt+j].height+=dy;
}}if(ds<dw.minHeight){var dB=qx.ui.layout.Util.computeFlexOffsets(dz,dw.minHeight,ds);

for(var j=0;j<dx.rowSpan;j++){var dy=dB[dt+j]?dB[dt+j].offset:0;
dr[dt+j].minHeight+=dy;
}}}},_fixWidthsColSpan:function(dc){var dg=this.getSpacingX();

for(var i=0,l=this.__hi.length;i<l;i++){var dd=this.__hi[i];
var df=this.__hp(dd);
var di=dd.getLayoutProperties();
var de=di.column;
var dp=dg*(di.colSpan-1);
var dh=dp;
var dj={};
var dl;

for(var j=0;j<di.colSpan;j++){var dq=di.column+j;
var dn=dc[dq];
var dm=this.getColumnFlex(dq);
if(dm>0){dj[dq]={min:dn.minWidth,value:dn.width,max:dn.maxWidth,flex:dm};
}dp+=dn.width;
dh+=dn.minWidth;
}if(dp<df.width){var dk=qx.ui.layout.Util.computeFlexOffsets(dj,df.width,dp);

for(var j=0;j<di.colSpan;j++){dl=dk[de+j]?dk[de+j].offset:0;
dc[de+j].width+=dl;
}}if(dh<df.minWidth){var dk=qx.ui.layout.Util.computeFlexOffsets(dj,df.minWidth,dh);

for(var j=0;j<di.colSpan;j++){dl=dk[de+j]?dk[de+j].offset:0;
dc[de+j].minWidth+=dl;
}}}},_getRowHeights:function(){if(this.__hm!=null){return this.__hm;
}var bt=[];
var bm=this.__hk;
var bl=this.__hl;

for(var bu=0;bu<=bm;bu++){var bn=0;
var bp=0;
var bo=0;

for(var bs=0;bs<=bl;bs++){var bk=this.__hh[bu][bs];

if(!bk){continue;
}var bq=bk.getLayoutProperties().rowSpan||0;

if(bq>1){continue;
}var br=this.__hp(bk);

if(this.getRowFlex(bu)>0){bn=Math.max(bn,br.minHeight);
}else{bn=Math.max(bn,br.height);
}bp=Math.max(bp,br.height);
}var bn=Math.max(bn,this.getRowMinHeight(bu));
var bo=this.getRowMaxHeight(bu);

if(this.getRowHeight(bu)!==null){var bp=this.getRowHeight(bu);
}else{var bp=Math.max(bn,Math.min(bp,bo));
}bt[bu]={minHeight:bn,height:bp,maxHeight:bo};
}
if(this.__hj.length>0){this._fixHeightsRowSpan(bt);
}this.__hm=bt;
return bt;
},_getColWidths:function(){if(this.__hn!=null){return this.__hn;
}var cl=[];
var ci=this.__hl;
var ck=this.__hk;

for(var cq=0;cq<=ci;cq++){var co=0;
var cn=0;
var cj=Infinity;

for(var cr=0;cr<=ck;cr++){var ch=this.__hh[cr][cq];

if(!ch){continue;
}var cm=ch.getLayoutProperties().colSpan||0;

if(cm>1){continue;
}var cp=this.__hp(ch);

if(this.getColumnFlex(cq)>0){cn=Math.max(cn,cp.minWidth);
}else{cn=Math.max(cn,cp.width);
}co=Math.max(co,cp.width);
}var cn=Math.max(cn,this.getColumnMinWidth(cq));
var cj=this.getColumnMaxWidth(cq);

if(this.getColumnWidth(cq)!==null){var co=this.getColumnWidth(cq);
}else{var co=Math.max(cn,Math.min(co,cj));
}cl[cq]={minWidth:cn,width:co,maxWidth:cj};
}
if(this.__hi.length>0){this._fixWidthsColSpan(cl);
}this.__hn=cl;
return cl;
},_getColumnFlexOffsets:function(cH){var cI=this.getSizeHint();
var cM=cH-cI.width;

if(cM==0){return {};
}var cK=this._getColWidths();
var cJ={};

for(var i=0,l=cK.length;i<l;i++){var cN=cK[i];
var cL=this.getColumnFlex(i);

if((cL<=0)||(cN.width==cN.maxWidth&&cM>0)||(cN.width==cN.minWidth&&cM<0)){continue;
}cJ[i]={min:cN.minWidth,value:cN.width,max:cN.maxWidth,flex:cL};
}return qx.ui.layout.Util.computeFlexOffsets(cJ,cH,cI.width);
},_getRowFlexOffsets:function(bv){var bw=this.getSizeHint();
var bz=bv-bw.height;

if(bz==0){return {};
}var bA=this._getRowHeights();
var bx={};

for(var i=0,l=bA.length;i<l;i++){var bB=bA[i];
var by=this.getRowFlex(i);

if((by<=0)||(bB.height==bB.maxHeight&&bz>0)||(bB.height==bB.minHeight&&bz<0)){continue;
}bx[i]={min:bB.minHeight,value:bB.height,max:bB.maxHeight,flex:by};
}return qx.ui.layout.Util.computeFlexOffsets(bx,bv,bw.height);
},renderLayout:function(dH,dI){if(this._invalidChildrenCache){this.__ho();
}var dW=qx.ui.layout.Util;
var dK=this.getSpacingX();
var dQ=this.getSpacingY();
var ec=this._getColWidths();
var eb=this._getColumnFlexOffsets(dH);
var dL=[];
var ee=this.__hl;
var dJ=this.__hk;
var ed;

for(var ef=0;ef<=ee;ef++){ed=eb[ef]?eb[ef].offset:0;
dL[ef]=ec[ef].width+ed;
}var dT=this._getRowHeights();
var dV=this._getRowFlexOffsets(dI);
var el=[];

for(var dR=0;dR<=dJ;dR++){ed=dV[dR]?dV[dR].offset:0;
el[dR]=dT[dR].height+ed;
}var em=0;

for(var ef=0;ef<=ee;ef++){var top=0;

for(var dR=0;dR<=dJ;dR++){var dY=this.__hh[dR][ef];
if(!dY){top+=el[dR]+dQ;
continue;
}var dM=dY.getLayoutProperties();
if(dM.row!==dR||dM.column!==ef){top+=el[dR]+dQ;
continue;
}var ek=dK*(dM.colSpan-1);

for(var i=0;i<dM.colSpan;i++){ek+=dL[ef+i];
}var ea=dQ*(dM.rowSpan-1);

for(var i=0;i<dM.rowSpan;i++){ea+=el[dR+i];
}var dN=dY.getSizeHint();
var ei=dY.getMarginTop();
var dX=dY.getMarginLeft();
var dU=dY.getMarginBottom();
var dP=dY.getMarginRight();
var dS=Math.max(dN.minWidth,Math.min(ek-dX-dP,dN.maxWidth));
var ej=Math.max(dN.minHeight,Math.min(ea-ei-dU,dN.maxHeight));
var eg=this.getCellAlign(dR,ef);
var eh=em+dW.computeHorizontalAlignOffset(eg.hAlign,dS,ek,dX,dP);
var dO=top+dW.computeVerticalAlignOffset(eg.vAlign,ej,ea,ei,dU);
dY.renderLayout(eh,dO,dS,ej);
top+=el[dR]+dQ;
}em+=dL[ef]+dK;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__hn=null;
this.__hm=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ho();
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
}},destruct:function(){this.__hh=this.__hf=this.__hg=this.__hi=this.__hj=this.__hn=this.__hm=null;
}});
})();
(function(){var t="open",s="auto",r="qx.debug",q="middle",p="icon",o="label",n="on",m="changeOpen",k="excluded",j="visible",P="String",O="opened",N="always",M="qx.ui.tree.AbstractTreeItem",L="addItem",K="Boolean",J="__on",I="Invalid child index: ",H="Integer",G="__oq",A="_applyIndent",B="changeOpenSymbolMode",y="_applyOpenSymbolMode",z="resize",w="",x="removeItem",u="abstract",v="never",C="_applyIcon",D="_applyOpen",F="__om",E="_applyLabel";
qx.Class.define(M,{extend:qx.ui.core.Widget,type:u,include:[qx.ui.form.MModelProperty],implement:[qx.ui.form.IModel],construct:function(){qx.ui.core.Widget.call(this);
this.__om=[];
this._setLayout(new qx.ui.layout.HBox());
this._addWidgets();
this.initOpen();
},properties:{open:{check:K,init:false,event:m,apply:D},openSymbolMode:{check:[N,v,s],init:s,event:B,apply:y},indent:{check:H,init:19,apply:A,themeable:true},parent:{check:M,nullable:true},icon:{check:P,apply:C,nullable:true,themeable:true},label:{check:P,apply:E,init:w}},members:{__om:null,__on:null,__oo:null,__op:null,__oq:null,_addWidgets:function(){throw new Error("Abstract method call.");
},_createChildControlImpl:function(bk){var bl;

switch(bk){case o:bl=new qx.ui.basic.Label().set({alignY:q,value:this.getLabel()});
break;
case p:bl=new qx.ui.basic.Image().set({alignY:q,source:this.getIcon()});
break;
case t:bl=new qx.ui.tree.FolderOpenButton().set({alignY:q});
bl.addListener(m,this._onChangeOpen,this);
bl.addListener(z,this._updateIndent,this);
break;
}return bl||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bk);
},getTree:function(){var R=this;

while(R.getParent()){R=R.getParent();
}var Q=R.getLayoutParent()?R.getLayoutParent().getLayoutParent():0;

if(Q&&Q instanceof qx.ui.core.scroll.ScrollPane){return Q.getLayoutParent();
}return null;
},addWidget:function(S,T){this._add(S,T);
},addSpacer:function(){if(!this.__oq){this.__oq=new qx.ui.core.Spacer();
}else{this._remove(this.__oq);
}this._add(this.__oq);
},addOpenButton:function(){this._add(this.getChildControl(t));
},_onChangeOpen:function(e){if(this.isOpenable()){this.setOpen(e.getData());
}},addIcon:function(){var bP=this.getChildControl(p);

if(this.__op){this._remove(bP);
}this._add(bP);
this.__op=true;
},addLabel:function(bA){var bB=this.getChildControl(o);

if(this.__oo){this._remove(bB);
}
if(bA){this.setLabel(bA);
}else{bB.setValue(this.getLabel());
}this._add(bB);
this.__oo=true;
},addState:function(U){qx.ui.core.Widget.prototype.addState.call(this,U);
var W=this._getChildren();

for(var i=0,l=W.length;i<l;i++){var V=W[i];

if(V.addState){W[i].addState(U);
}}},removeState:function(bo){qx.ui.core.Widget.prototype.removeState.call(this,bo);
var bq=this._getChildren();

for(var i=0,l=bq.length;i<l;i++){var bp=bq[i];

if(bp.addState){bq[i].removeState(bo);
}}},_applyIcon:function(bf,bg){var bh=this.getChildControl(p,true);

if(bh){bh.setSource(bf);
}},_applyLabel:function(bE,bF){var bG=this.getChildControl(o,true);

if(bG){bG.setValue(bE);
}},_applyOpen:function(bW,bX){if(this.hasChildren()){this.getChildrenContainer().setVisibility(bW?j:k);
}var open=this.getChildControl(t,true);

if(open){open.setOpen(bW);
}bW?this.addState(O):this.removeState(O);
},isOpenable:function(){var bS=this.getOpenSymbolMode();
return (bS===N||bS===s&&this.hasChildren());
},_shouldShowOpenSymbol:function(){var open=this.getChildControl(t,true);

if(!open){return false;
}var h=this.getTree();

if(!h.getRootOpenClose()){if(h.getHideRoot()){if(h.getRoot()==this.getParent()){return false;
}}else{if(h.getRoot()==this){return false;
}}}return this.isOpenable();
},_applyOpenSymbolMode:function(bC,bD){this._updateIndent();
},_updateIndent:function(){if(!this.getTree()){return;
}var bn=0;
var open=this.getChildControl(t,true);

if(open){if(this._shouldShowOpenSymbol()){open.show();
var bm=open.getBounds();

if(bm){bn=bm.width;
}else{return;
}}else{open.exclude();
}}
if(this.__oq){this.__oq.setWidth((this.getLevel()+1)*this.getIndent()-bn);
}},_applyIndent:function(bH,bI){this._updateIndent();
},getLevel:function(){var br=this.getTree();

if(!br){return;
}var bs=this;
var bt=-1;

while(bs){bs=bs.getParent();
bt+=1;
}if(br.getHideRoot()){bt-=1;
}
if(!br.getRootOpenClose()){bt-=1;
}return bt;
},syncWidget:function(){this._updateIndent();
},getChildrenContainer:function(){if(!this.__on){this.__on=new qx.ui.container.Composite(new qx.ui.layout.VBox()).set({visibility:this.isOpen()?j:k});
}return this.__on;
},hasChildrenContainer:function(){return this.__on;
},getParentChildrenContainer:function(){if(this.getParent()){return this.getParent().getChildrenContainer();
}else if(this.getLayoutParent()){return this.getLayoutParent();
}else{return null;
}},getChildren:function(){return this.__om;
},hasChildren:function(){return this.__om?this.__om.length>0:false;
},getItems:function(X,Y,ba){if(ba!==false){var bb=[];
}else{var bb=[this];
}var be=this.hasChildren()&&(Y!==false||this.isOpen());

if(be){var bd=this.getChildren();

if(X===false){bb=bb.concat(bd);
}else{for(var i=0,bc=bd.length;i<bc;i++){bb=bb.concat(bd[i].getItems(X,Y,false));
}}}return bb;
},recursiveAddToWidgetQueue:function(){var bT=this.getItems(true,true,false);

for(var i=0,l=bT.length;i<l;i++){qx.ui.core.queue.Widget.add(bT[i]);
}},__or:function(){if(this.getParentChildrenContainer()){this.getParentChildrenContainer()._addAfter(this.getChildrenContainer(),this);
}},add:function(bJ){var bK=this.getChildrenContainer();
var bN=this.getTree();

for(var i=0,l=arguments.length;i<l;i++){var bO=arguments[i];
var bM=bO.getParent();

if(bM){bM.remove(bO);
}bO.setParent(this);
var bL=this.hasChildren();
bK.add(bO);

if(bO.hasChildren()){bK.add(bO.getChildrenContainer());
}this.__om.push(bO);

if(!bL){this.__or();
}
if(bN){bO.recursiveAddToWidgetQueue();
bN.fireNonBubblingEvent(L,qx.event.type.Data,[bO]);
}}
if(bN){qx.ui.core.queue.Widget.add(this);
}},addAt:function(bu,bv){if(qx.core.Variant.isSet(r,n)){this.assert(bv<=this.__om.length&&bv>=0,I+bv);
}
if(bv==this.__om.length){this.add(bu);
return;
}var bz=bu.getParent();

if(bz){bz.remove(bu);
}var bx=this.getChildrenContainer();
bu.setParent(this);
var by=this.hasChildren();
var bw=this.__om[bv];
bx.addBefore(bu,bw);

if(bu.hasChildren()){bx.addAfter(bu.getChildrenContainer(),bu);
}qx.lang.Array.insertAt(this.__om,bu,bv);

if(!by){this.__or();
}
if(this.getTree()){bu.recursiveAddToWidgetQueue();
qx.ui.core.queue.Widget.add(this);
}},addBefore:function(bU,bV){if(qx.core.Variant.isSet(r,n)){this.assert(this.__om.indexOf(bV)>=0);
}this.addAt(bU,this.__om.indexOf(bV));
},addAfter:function(bi,bj){if(qx.core.Variant.isSet(r,n)){this.assert(this.__om.indexOf(bj)>=0);
}this.addAt(bi,this.__om.indexOf(bj)+1);
},addAtBegin:function(a){this.addAt(a,0);
},remove:function(b){for(var i=0,l=arguments.length;i<l;i++){var g=arguments[i];

if(this.__om.indexOf(g)==-1){this.warn("Cannot remove treeitem '"+g+"'. It is not a child of this tree item.");
return;
}var c=this.getChildrenContainer();

if(g.hasChildrenContainer()){var f=g.getChildrenContainer();

if(c.getChildren().indexOf(f)>=0){c.remove(f);
}}qx.lang.Array.remove(this.__om,g);
g.setParent(null);
c.remove(g);
}var d=this.getTree();

if(d){d.fireNonBubblingEvent(x,qx.event.type.Data,[g]);
}qx.ui.core.queue.Widget.add(this);
},removeAt:function(bQ){var bR=this.__om[bQ];

if(bR){this.remove(bR);
}},removeAll:function(){for(var i=this.__om.length-1;i>=0;i--){this.remove(this.__om[i]);
}}},destruct:function(){this._disposeArray(F);
this._disposeObjects(G,J);
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
(function(){var I="qx.event.type.Event",H="Boolean",G="queued",F="String",E="sending",D="receiving",C="aborted",B="failed",A="nocache",z="completed",bq="qx.io.remote.Response",bp="POST",bo="configured",bn="timeout",bm="GET",bl="Pragma",bk="no-url-params-on-post",bj="no-cache",bi="Cache-Control",bh="Content-Type",P="text/plain",Q="application/xml",N="application/json",O="text/html",L="qx.ioRemoteDebug",M="application/x-www-form-urlencoded",J="qx.io.remote.Exchange",K="Integer",R="X-Qooxdoo-Response-Type",S="HEAD",Y="qx.io.remote.Request",X="qx.debug",bb="_applyResponseType",ba="_applyState",bd="text/javascript",bc="changeState",U="PUT",bg="_applyProhibitCaching",bf="",be="_applyMethod",T="DELETE",V="boolean",W="on";
qx.Class.define(Y,{extend:qx.core.Object,construct:function(q,r,s){qx.core.Object.call(this);
this.__qx={};
this.__qy={};
this.__qz={};
this.__qA={};

if(q!==undefined){this.setUrl(q);
}
if(r!==undefined){this.setMethod(r);
}
if(s!==undefined){this.setResponseType(s);
}this.setProhibitCaching(true);
this.__qB=++qx.io.remote.Request.__qB;
},events:{"created":I,"configured":I,"sending":I,"receiving":I,"completed":bq,"aborted":I,"failed":bq,"timeout":bq},statics:{__qB:0},properties:{url:{check:F,init:bf},method:{check:[bm,bp,U,S,T],apply:be,init:bm},asynchronous:{check:H,init:true},data:{check:F,nullable:true},username:{check:F,nullable:true},password:{check:F,nullable:true},state:{check:[bo,G,E,D,z,C,bn,B],init:bo,apply:ba,event:bc},responseType:{check:[P,bd,N,Q,O],init:P,apply:bb},timeout:{check:K,nullable:true},prohibitCaching:{check:function(v){return typeof v==V||v===bk;
},init:true,apply:bg},crossDomain:{check:H,init:false},fileUpload:{check:H,init:false},transport:{check:J,nullable:true},useBasicHttpAuth:{check:H,init:false}},members:{__qx:null,__qy:null,__qz:null,__qA:null,__qB:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case E:case D:this.error("Aborting already sent request!");
case G:this.abort();
break;
}},isConfigured:function(){return this.getState()===bo;
},isQueued:function(){return this.getState()===G;
},isSending:function(){return this.getState()===E;
},isReceiving:function(){return this.getState()===D;
},isCompleted:function(){return this.getState()===z;
},isAborted:function(){return this.getState()===C;
},isTimeout:function(){return this.getState()===bn;
},isFailed:function(){return this.getState()===B;
},__qC:function(e){var bu=e.clone();
bu.setTarget(this);
this.dispatchEvent(bu);
},_onqueued:function(e){this.setState(G);
this.__qC(e);
},_onsending:function(e){this.setState(E);
this.__qC(e);
},_onreceiving:function(e){this.setState(D);
this.__qC(e);
},_oncompleted:function(e){this.setState(z);
this.__qC(e);
this.dispose();
},_onaborted:function(e){this.setState(C);
this.__qC(e);
this.dispose();
},_ontimeout:function(e){this.setState(bn);
this.__qC(e);
this.dispose();
},_onfailed:function(e){this.setState(B);
this.__qC(e);
this.dispose();
},_applyState:function(bv,bw){if(qx.core.Variant.isSet(X,W)){if(qx.core.Setting.get(L)){this.debug("State: "+bv);
}}},_applyProhibitCaching:function(o,p){if(!o){this.removeParameter(A);
this.removeRequestHeader(bl);
this.removeRequestHeader(bi);
return;
}if(o!==bk||this.getMethod()!=bp){this.setParameter(A,new Date().valueOf());
}else{this.removeParameter(A);
}this.setRequestHeader(bl,bj);
this.setRequestHeader(bi,bj);
},_applyMethod:function(u,w){if(u===bp){this.setRequestHeader(bh,M);
}else{this.removeRequestHeader(bh);
}var x=this.getProhibitCaching();
this._applyProhibitCaching(x,x);
},_applyResponseType:function(j,k){this.setRequestHeader(R,j);
},setRequestHeader:function(br,bs){this.__qx[br]=bs;
},removeRequestHeader:function(y){delete this.__qx[y];
},getRequestHeader:function(l){return this.__qx[l]||null;
},getRequestHeaders:function(){return this.__qx;
},setParameter:function(a,b,c){if(c){this.__qz[a]=b;
}else{this.__qy[a]=b;
}},removeParameter:function(m,n){if(n){delete this.__qz[m];
}else{delete this.__qy[m];
}},getParameter:function(g,h){if(h){return this.__qz[g]||null;
}else{return this.__qy[g]||null;
}},getParameters:function(bt){return (bt?this.__qz:this.__qy);
},setFormField:function(d,f){this.__qA[d]=f;
},removeFormField:function(i){delete this.__qA[i];
},getFormField:function(t){return this.__qA[t]||null;
},getFormFields:function(){return this.__qA;
},getSequenceNumber:function(){return this.__qB;
}},destruct:function(){this.setTransport(null);
this.__qx=this.__qy=this.__qz=this.__qA=null;
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
(function(){var m="qx.ioRemoteDebug",l="Integer",k="qx.debug",j="on",h="aborted",g="_onaborted",f="_on",d="Boolean",c="singleton",b="interval",y="receiving",x="Request-Queue Progress: ",w="__nK",v="queued",u="__nI",t="/",s="_applyEnabled",r="sending",q="completed",p="failed",n="qx.io.remote.RequestQueue",o="timeout";
qx.Class.define(n,{type:c,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nH=[];
this.__nI=[];
this.__nJ=0;
this.__nK=new qx.event.Timer(500);
this.__nK.addListener(b,this._oninterval,this);
},properties:{enabled:{init:true,check:d,apply:s},maxTotalRequests:{check:l,nullable:true},maxConcurrentRequests:{check:l,init:qx.bom.client.Transport.getMaxConcurrentRequestCount()},defaultTimeout:{check:l,init:5000}},members:{__nH:null,__nI:null,__nJ:null,__nK:null,getRequestQueue:function(){return this.__nH;
},getActiveQueue:function(){return this.__nI;
},_debug:function(){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){var z=this.__nI.length+t+(this.__nH.length+this.__nI.length);
this.debug("Progress: "+z);
window.status=x+z;
}}},_check:function(){this._debug();
if(this.__nI.length==0&&this.__nH.length==0){this.__nK.stop();
}if(!this.getEnabled()){return;
}if(this.__nH.length==0||(this.__nH[0].isAsynchronous()&&this.__nI.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__nJ>=this.getMaxTotalRequests()){return;
}var P=this.__nH.shift();
var Q=new qx.io.remote.Exchange(P);
this.__nJ++;
this.__nI.push(Q);
this._debug();
Q.addListener(r,this._onsending,this);
Q.addListener(y,this._onreceiving,this);
Q.addListener(q,this._oncompleted,this);
Q.addListener(h,this._oncompleted,this);
Q.addListener(o,this._oncompleted,this);
Q.addListener(p,this._oncompleted,this);
Q._start=(new Date).valueOf();
Q.send();
if(this.__nH.length>0){this._check();
}},_remove:function(M){qx.lang.Array.remove(this.__nI,M);
M.dispose();
this._check();
},__nL:0,_onsending:function(e){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){this.__nL++;
e.getTarget()._counted=true;
this.debug("ActiveCount: "+this.__nL);
}}e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){if(qx.core.Variant.isSet(k,j)){if(qx.core.Setting.get(m)){if(e.getTarget()._counted){this.__nL--;
this.debug("ActiveCount: "+this.__nL);
}}}var C=e.getTarget().getRequest();
var B=f+e.getType();
try{if(C[B]){C[B](e);
}}catch(D){var A=qx.dev.StackTrace.getStackTraceFromError(D);
this.error("Request "+C+" handler "+B+" threw an error: "+D+"\nStack Trace:\n"+A);
try{if(C[g]){var event=qx.event.Registration.createEvent(h,qx.event.type.Event);
C[g](event);
}}catch(L){}}finally{this._remove(e.getTarget());
}},_oninterval:function(e){var K=this.__nI;

if(K.length==0){this.__nK.stop();
return;
}var F=(new Date).valueOf();
var I;
var G;
var J=this.getDefaultTimeout();
var H;
var E;

for(var i=K.length-1;i>=0;i--){I=K[i];
G=I.getRequest();

if(G.isAsynchronous()){H=G.getTimeout();
if(H==0){continue;
}
if(H==null){H=J;
}E=F-I._start;

if(E>H){this.warn("Timeout: transport "+I.toHashCode());
this.warn(E+"ms > "+H+"ms");
I.timeout();
}}}},_applyEnabled:function(R,S){if(R){this._check();
}this.__nK.setEnabled(R);
},add:function(a){a.setState(v);

if(a.isAsynchronous()){this.__nH.push(a);
}else{this.__nH.unshift(a);
}this._check();

if(this.getEnabled()){this.__nK.start();
}},abort:function(N){var O=N.getTransport();

if(O){O.abort();
}else if(qx.lang.Array.contains(this.__nH,N)){qx.lang.Array.remove(this.__nH,N);
}}},destruct:function(){this._disposeArray(u);
this._disposeObjects(w);
this.__nH=null;
}});
})();
(function(){var P="qx.ioRemoteDebug",O="qx.debug",N="on",M="failed",L="sending",K="completed",J="receiving",I="aborted",H="timeout",G="qx.event.type.Event",bP="Connection dropped",bO="qx.io.remote.Response",bN="configured",bM="=",bL="Proxy authentication required",bK="qx.io.remote.transport.Abstract",bJ="MSHTML-specific HTTP status code",bI="Not available",bH="Precondition failed",bG="Server error",W="&",X="qx.io.remote.Exchange",U="Bad gateway",V="Gone",S="See other",T="Partial content",Q="Server timeout",R="qx.io.remote.transport.Script",bd="HTTP version not supported",be="Unauthorized",bm="Multiple choices",bk="Payment required",bu="Not implemented",bp="Request-URL too large",bC="Length required",bz="_applyState",bg="changeState",bF="Not modified",bE="Not acceptable",bD="qx.io.remote.Request",bf="Connection closed by server",bi="Moved permanently",bj="_applyImplementation",bl="Method not allowed",bn="Moved temporarily",bq="Forbidden",bw="Use proxy",bB="Ok",Y="Not found",ba="Request time-out",bh="Bad request",bt="Conflict",bs="No content",br="qx.io.remote.transport.XmlHttp",by="qx.io.remote.transport.Iframe",bx="Request entity too large",bo="Unknown status code",bv="Unsupported media type",F="Gateway time-out",bA="created",bb="Out of resources",bc="undefined";
qx.Class.define(X,{extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);
this.setRequest(D);
D.setTransport(this);
},events:{"sending":G,"receiving":G,"completed":bO,"aborted":G,"failed":bO,"timeout":bO},statics:{typesOrder:[br,by,R],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(g,h){qx.io.remote.Exchange.typesAvailable[h]=g;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bX in qx.io.remote.Exchange.typesAvailable){var bW=qx.io.remote.Exchange.typesAvailable[bX];

if(bW.isSupported()){qx.io.remote.Exchange.typesSupported[bX]=bW;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bQ,bR,bS){if(!qx.lang.Array.contains(bQ.handles.responseTypes,bS)){return false;
}
for(var bT in bR){if(!bQ.handles[bT]){return false;
}}return true;
},_nativeMap:{0:bA,1:bN,2:L,3:J,4:K},wasSuccessful:function(bY,ca,cb){if(cb){switch(bY){case null:case 0:return true;
case -1:return ca<4;
default:return typeof bY===bc;
}}else{switch(bY){case -1:if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)&&ca>3){qx.log.Logger.debug(this,"Failed with statuscode: -1 at readyState "+ca);
}}return ca<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)&&ca===4){qx.log.Logger.debug(this,"Failed with statuscode: 206 (Partial content while being complete!)");
}}return ca!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){qx.log.Logger.debug(this,"Failed with typical HTTP statuscode: "+bY);
}}return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){qx.log.Logger.debug(this,"Failed with MSHTML specific HTTP statuscode: "+bY);
}}return false;
default:if(bY>206&&bY<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bY+" ("+ca+")");
return false;
}}},statusCodeToString:function(m){switch(m){case -1:return bI;
case 200:return bB;
case 304:return bF;
case 206:return T;
case 204:return bs;
case 300:return bm;
case 301:return bi;
case 302:return bn;
case 303:return S;
case 305:return bw;
case 400:return bh;
case 401:return be;
case 402:return bk;
case 403:return bq;
case 404:return Y;
case 405:return bl;
case 406:return bE;
case 407:return bL;
case 408:return ba;
case 409:return bt;
case 410:return V;
case 411:return bC;
case 412:return bH;
case 413:return bx;
case 414:return bp;
case 415:return bv;
case 500:return bG;
case 501:return bu;
case 502:return U;
case 503:return bb;
case 504:return F;
case 505:return bd;
case 12002:return Q;
case 12029:return bP;
case 12030:return bP;
case 12031:return bP;
case 12152:return bf;
case 13030:return bJ;
default:return bo;
}}},properties:{request:{check:bD,nullable:true},implementation:{check:bK,nullable:true,apply:bj},state:{check:[bN,L,J,K,I,H,M],init:bN,event:bg,apply:bz}},members:{send:function(){var q=this.getRequest();

if(!q){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var o=qx.io.remote.Exchange.typesOrder;
var n=qx.io.remote.Exchange.typesSupported;
var s=q.getResponseType();
var t={};

if(q.getAsynchronous()){t.asynchronous=true;
}else{t.synchronous=true;
}
if(q.getCrossDomain()){t.crossDomain=true;
}
if(q.getFileUpload()){t.fileUpload=true;
}for(var r in q.getFormFields()){t.programaticFormFields=true;
break;
}var u,p;

for(var i=0,l=o.length;i<l;i++){u=n[o[i]];

if(u){if(!qx.io.remote.Exchange.canHandle(u,t,s)){continue;
}
try{if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){this.debug("Using implementation: "+u.classname);
}}p=new u;
this.setImplementation(p);
p.setUseBasicHttpAuth(q.getUseBasicHttpAuth());
p.send();
return true;
}catch(bV){this.error("Request handler throws error");
this.error(bV);
return;
}}}this.error("There is no transport implementation available to handle this request: "+q);
},abort:function(){var E=this.getImplementation();

if(E){if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){this.debug("Abort: implementation "+E.toHashCode());
}}E.abort();
}else{if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){this.debug("Abort: forcing state to be aborted");
}}this.setState(I);
}},timeout:function(){var k=this.getImplementation();

if(k){this.warn("Timeout: implementation "+k.toHashCode());
k.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(H);
}this.__pJ();
},__pJ:function(){var bU=this.getRequest();

if(bU){bU.setTimeout(0);
}},_onsending:function(e){this.setState(L);
},_onreceiving:function(e){this.setState(J);
},_oncompleted:function(e){this.setState(K);
},_onabort:function(e){this.setState(I);
},_onfailed:function(e){this.setState(M);
},_ontimeout:function(e){this.setState(H);
},_applyImplementation:function(v,w){if(w){w.removeListener(L,this._onsending,this);
w.removeListener(J,this._onreceiving,this);
w.removeListener(K,this._oncompleted,this);
w.removeListener(I,this._onabort,this);
w.removeListener(H,this._ontimeout,this);
w.removeListener(M,this._onfailed,this);
}
if(v){var y=this.getRequest();
v.setUrl(y.getUrl());
v.setMethod(y.getMethod());
v.setAsynchronous(y.getAsynchronous());
v.setUsername(y.getUsername());
v.setPassword(y.getPassword());
v.setParameters(y.getParameters(false));
v.setFormFields(y.getFormFields());
v.setRequestHeaders(y.getRequestHeaders());
var B=y.getData();

if(B===null){var C=y.getParameters(true);
var A=[];

for(var x in C){var z=C[x];

if(z instanceof Array){for(var i=0;i<z.length;i++){A.push(encodeURIComponent(x)+bM+encodeURIComponent(z[i]));
}}else{A.push(encodeURIComponent(x)+bM+encodeURIComponent(z));
}}
if(A.length>0){v.setData(A.join(W));
}}else{v.setData(B);
}v.setResponseType(y.getResponseType());
v.addListener(L,this._onsending,this);
v.addListener(J,this._onreceiving,this);
v.addListener(K,this._oncompleted,this);
v.addListener(I,this._onabort,this);
v.addListener(H,this._ontimeout,this);
v.addListener(M,this._onfailed,this);
}},_applyState:function(a,b){if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){this.debug("State: "+b+" => "+a);
}}
switch(a){case L:this.fireEvent(L);
break;
case J:this.fireEvent(J);
break;
case K:case I:case H:case M:var d=this.getImplementation();

if(!d){break;
}this.__pJ();

if(this.hasListener(a)){var f=qx.event.Registration.createEvent(a,qx.io.remote.Response);

if(a==K){var c=d.getResponseContent();
f.setContent(c);
if(c===null){if(qx.core.Variant.isSet(O,N)){if(qx.core.Setting.get(P)){this.debug("Altered State: "+a+" => failed");
}}a=M;
}}else if(a==M){f.setContent(d.getResponseContent());
}f.setStatusCode(d.getStatusCode());
f.setResponseHeaders(d.getResponseHeaders());
this.dispatchEvent(f);
}this.setImplementation(null);
d.dispose();
break;
}}},settings:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var j=this.getImplementation();

if(j){this.setImplementation(null);
j.dispose();
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
(function(){var o="qx.debug",n="on",m="qx.ioRemoteDebugData",k="failed",j="qx.ioRemoteDebug",h="completed",g="=",f="aborted",d="",c="sending",O="&",N="configured",M="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="qx.client",G="receiving",F="text/plain",w="text/javascript",x="created",u="?",v='Referer',r='Basic ',t="\n</pre>",p="string",q='Authorization',y="<pre>Could not execute json: \n",z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",B=':',A="parseerror",D="file:",C="webkit",E="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[F,w,J,L,I]},requestObjects:[],requestObjectCount:0,createRequestObject:qx.core.Variant.select(H,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},members:{__ln:false,__lo:0,__lp:null,getRequest:function(){if(this.__lp===null){this.__lp=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__lp.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__lp;
},send:function(){this.__lo=0;
var bf=this.getRequest();
var bb=this.getMethod();
var bi=this.getAsynchronous();
var bh=this.getUrl();
var bd=(window.location.protocol===D&&!(/^http(s){0,1}\:/.test(bh)));
this.__ln=bd;
var bl=this.getParameters(false);
var bj=[];

for(var bc in bl){var bg=bl[bc];

if(bg instanceof Array){for(var i=0;i<bg.length;i++){bj.push(encodeURIComponent(bc)+g+encodeURIComponent(bg[i]));
}}else{bj.push(encodeURIComponent(bc)+g+encodeURIComponent(bg));
}}
if(bj.length>0){bh+=(bh.indexOf(u)>=0?O:u)+bj.join(O);
}if(this.getData()===null){var bl=this.getParameters(true);
var bj=[];

for(var bc in bl){var bg=bl[bc];

if(bg instanceof Array){for(var i=0;i<bg.length;i++){bj.push(encodeURIComponent(bc)+g+encodeURIComponent(bg[i]));
}}else{bj.push(encodeURIComponent(bc)+g+encodeURIComponent(bg));
}}
if(bj.length>0){this.setData(bj.join(O));
}}var bk=function(bx){var bC=z;
var bG=d;
var bA,bz,by;
var bD,bE,bF,bB;
var i=0;

do{bA=bx.charCodeAt(i++);
bz=bx.charCodeAt(i++);
by=bx.charCodeAt(i++);
bD=bA>>2;
bE=((bA&3)<<4)|(bz>>4);
bF=((bz&15)<<2)|(by>>6);
bB=by&63;

if(isNaN(bz)){bF=bB=64;
}else if(isNaN(by)){bB=64;
}bG+=bC.charAt(bD)+bC.charAt(bE)+bC.charAt(bF)+bC.charAt(bB);
}while(i<bx.length);
return bG;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){bf.open(bb,bh,bi);
bf.setRequestHeader(q,r+bk(this.getUsername()+B+this.getPassword()));
}else{bf.open(bb,bh,bi,this.getUsername(),this.getPassword());
}}else{bf.open(bb,bh,bi);
}}catch(bn){this.error("Failed with exception: "+bn);
this.failed();
return;
}if(!qx.core.Variant.isSet(H,C)){bf.setRequestHeader(v,window.location.href);
}var be=this.getRequestHeaders();

for(var bc in be){bf.setRequestHeader(bc,be[bc]);
}try{if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Request: "+this.getData());
}}bf.send(this.getData());
}catch(bR){if(bd){this.failedLocally();
}else{this.error("Failed to send data: "+bR,"send");
this.failed();
}return;
}if(!bi){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===k){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case h:case f:case k:case M:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(j)){this.warn("Ignore Ready State Change");
}}return;
}var bT=this.getReadyState();

if(bT==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bT,this.__ln)){if(this.getState()===N){this.setState(c);
}return this.failed();
}}while(this.__lo<bT){this.setState(qx.io.remote.Exchange._nativeMap[++this.__lo]);
}}),getReadyState:function(){var bK=null;

try{bK=this.getRequest().readyState;
}catch(bH){}return bK;
},setRequestHeader:function(bP,bQ){this.getRequestHeaders()[bP]=bQ;
},getResponseHeader:function(bN){var bO=null;

try{bO=this.getRequest().getResponseHeader(bN)||null;
}catch(bM){}return bO;
},getStringResponseHeaders:function(){var bq=null;

try{var bp=this.getRequest().getAllResponseHeaders();

if(bp){bq=bp;
}}catch(bI){}return bq;
},getResponseHeaders:function(){var bv=this.getStringResponseHeaders();
var bw={};

if(bv){var bt=bv.split(/[\r\n]+/g);

for(var i=0,l=bt.length;i<l;i++){var bu=bt[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bu){bw[bu[1]]=bu[2];
}}}return bw;
},getStatusCode:function(){var P=-1;

try{P=this.getRequest().status;
}catch(bS){}return P;
},getStatusText:function(){var bm=d;

try{bm=this.getRequest().statusText;
}catch(Q){}return bm;
},getResponseText:function(){var bJ=null;

try{bJ=this.getRequest().responseText;
}catch(bs){bJ=null;
}return bJ;
},getResponseXml:function(){var ba=null;
var X=this.getStatusCode();
var Y=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(X,Y,this.__ln)){try{ba=this.getRequest().responseXML;
}catch(bL){}}if(typeof ba==E&&ba!=null){if(!ba.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,d);
ba.loadXML(s);
}if(!ba.documentElement){throw new Error("Missing Document Element!");
}
if(ba.documentElement.tagName==A){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return ba;
},getFetchedLength:function(){var br=this.getResponseText();
return typeof br==p?br.length:0;
},getResponseContent:function(){var R=this.getState();

if(R!==h&&R!=k){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(j)){this.warn("Transfer not complete or failed, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(j)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var T=this.getResponseText();

if(R==k){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Failed: "+T);
}}return T;
}
switch(this.getResponseType()){case F:case I:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+T);
}}return T;
case J:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+T);
}}
try{if(T&&T.length>0){var S=qx.util.Json.parse(T,false);
return (S===0?0:(S||null));
}else{return null;
}}catch(bo){this.error("Could not execute json: ["+T+"]",bo);
return y+T+t;
}case w:if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+T);
}}
try{if(T&&T.length>0){var S=window.eval(T);
return (S===0?0:(S||null));
}else{return null;
}}catch(bU){this.error("Could not execute javascript: ["+T+"]",bU);
return null;
}case L:T=this.getResponseXml();

if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(m)){this.debug("Response: "+T);
}}return (T===0?0:(T||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(a,b){if(qx.core.Variant.isSet(o,n)){if(qx.core.Setting.get(j)){this.debug("State: "+a);
}}
switch(a){case x:this.fireEvent(x);
break;
case N:this.fireEvent(N);
break;
case c:this.fireEvent(c);
break;
case G:this.fireEvent(G);
break;
case h:this.fireEvent(h);
break;
case k:this.fireEvent(k);
break;
case f:this.getRequest().abort();
this.fireEvent(f);
break;
case M:this.getRequest().abort();
this.fireEvent(M);
break;
}}},defer:function(U,V){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var W=this.getRequest();

if(W){W.onreadystatechange=qx.lang.Function.empty;
switch(W.readyState){case 1:case 2:case 3:W.abort();
}}this.__lp=null;
}});
})();
(function(){var p=",",o="",n="string",m="null",k='"',j="qx.jsonDebugging",h='\\u00',g="__mX",f="new Date(Date.UTC(",e='\\\\',L="Use 'parse' instead!",K='\\f',J="__nh",I='\\t',H='\\"',G="))",F="}",E='(',D=":",C="{",w='\\r',x="__na",u="]",v="[",s="__ni",t="qx.jsonEncodeUndefined",q='\\b',r="__mW",y="qx.util.Json",z=')',B='\\n',A="__mY";
qx.Class.define(y,{statics:{__mU:null,BEAUTIFYING_INDENT:"  ",BEAUTIFYING_LINE_END:"\n",__mV:{"function":r,"boolean":g,"number":A,"string":x,"object":J,"undefined":s},__mW:function(bt,bu){return String(bt);
},__mX:function(X,Y){return String(X);
},__mY:function(c,d){return isFinite(c)?String(c):m;
},__na:function(bq,br){var bs;

if(/["\\\x00-\x1f]/.test(bq)){bs=bq.replace(/([\x00-\x1f\\"])/g,qx.util.Json.__nc);
}else{bs=bq;
}return k+bs+k;
},__nb:{'\b':q,'\t':I,'\n':B,'\f':K,'\r':w,'"':H,'\\':e},__nc:function(a,b){var bk=qx.util.Json.__nb[b];

if(bk){return bk;
}bk=b.charCodeAt();
return h+Math.floor(bk/16).toString(16)+(bk%16).toString(16);
},__nd:function(bd,be){var bg=[],bj=true,bi,bf;
var bh=qx.util.Json.__nk;
bg.push(v);

if(bh){qx.util.Json.__ne+=qx.util.Json.BEAUTIFYING_INDENT;
bg.push(qx.util.Json.__ne);
}
for(var i=0,l=bd.length;i<l;i++){bf=bd[i];
bi=this.__mV[typeof bf];

if(bi){bf=this[bi](bf,i+o);

if(typeof bf==n){if(!bj){bg.push(p);

if(bh){bg.push(qx.util.Json.__ne);
}}bg.push(bf);
bj=false;
}}}
if(bh){qx.util.Json.__ne=qx.util.Json.__ne.substring(0,qx.util.Json.__ne.length-qx.util.Json.BEAUTIFYING_INDENT.length);
bg.push(qx.util.Json.__ne);
}bg.push(u);
return bg.join(o);
},__nf:function(ba,bb){var bc=ba.getUTCFullYear()+p+ba.getUTCMonth()+p+ba.getUTCDate()+p+ba.getUTCHours()+p+ba.getUTCMinutes()+p+ba.getUTCSeconds()+p+ba.getUTCMilliseconds();
return f+bc+G;
},__ng:function(M,N){var Q=[],S=true,P,O;
var R=qx.util.Json.__nk;
Q.push(C);

if(R){qx.util.Json.__ne+=qx.util.Json.BEAUTIFYING_INDENT;
Q.push(qx.util.Json.__ne);
}
for(var N in M){O=M[N];
P=this.__mV[typeof O];

if(P){O=this[P](O,N);

if(typeof O==n){if(!S){Q.push(p);

if(R){Q.push(qx.util.Json.__ne);
}}Q.push(this.__na(N),D,O);
S=false;
}}}
if(R){qx.util.Json.__ne=qx.util.Json.__ne.substring(0,qx.util.Json.__ne.length-qx.util.Json.BEAUTIFYING_INDENT.length);
Q.push(qx.util.Json.__ne);
}Q.push(F);
return Q.join(o);
},__nh:function(bo,bp){if(bo){if(qx.lang.Type.isFunction(bo.toJSON)&&bo.toJSON!==this.__mU){return this.__nj(bo.toJSON(bp),bp);
}else if(qx.lang.Type.isDate(bo)){return this.__nf(bo,bp);
}else if(qx.lang.Type.isArray(bo)){return this.__nd(bo,bp);
}else if(qx.lang.Type.isObject(bo)){return this.__ng(bo,bp);
}return o;
}return m;
},__ni:function(V,W){if(qx.core.Setting.get(t)){return m;
}},__nj:function(bz,bA){return this[this.__mV[typeof bz]](bz,bA);
},stringify:function(bl,bm){this.__nk=bm;
this.__ne=this.BEAUTIFYING_LINE_END;
var bn=this.__nj(bl,o);

if(typeof bn!=n){bn=null;
}if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON request: "+bn);
}return bn;
},parse:function(bw,bx){if(bx===undefined){bx=true;
}
if(qx.core.Setting.get(j)){qx.log.Logger.debug(this,"JSON response: "+bw);
}
if(bx){if(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(bw.replace(/"(\\.|[^"\\])*"/g,o))){throw new Error("Could not parse JSON string!");
}}
try{var by=(bw&&bw.length>0)?eval(E+bw+z):null;
return by;
}catch(U){throw new Error("Could not evaluate JSON string: "+U.message);
}},parseQx:function(bv){qx.log.Logger.deprecatedMethodWarning(arguments.callee,L);
return qx.util.Json.parse(bv,false);
}},settings:{"qx.jsonEncodeUndefined":true,"qx.jsonDebugging":false},defer:function(T){T.__mU=Date.prototype.toJSON;
}});
})();
(function(){var C="qx.debug",B="on",A="qx.ioRemoteDebugData",z="=",y="&",x="application/xml",w="application/json",v="text/html",u="qx.ioRemoteDebug",t="qx.client",bb="textarea",ba="none",Y="text/plain",X="text/javascript",W="",V="completed",U="?",T="qx.io.remote.transport.Iframe",S="gecko",R="frame_",J="aborted",K="_data_",H="pre",I="javascript:void(0)",F="sending",G="form",D="failed",E='<iframe name="',L="mshtml",M="form_",O='"></iframe>',N="iframe",Q="timeout",P="qx/static/blank.gif";
qx.Class.define(T,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var b=(new Date).valueOf();
var c=R+b;
var d=M+b;
if(qx.core.Variant.isSet(t,L)){this.__mn=document.createElement(E+c+O);
}else{this.__mn=document.createElement(N);
}this.__mn.src=I;
this.__mn.id=this.__mn.name=c;
this.__mn.onload=qx.lang.Function.bind(this._onload,this);
this.__mn.style.display=ba;
document.body.appendChild(this.__mn);
this.__mo=document.createElement(G);
this.__mo.target=c;
this.__mo.id=this.__mo.name=d;
this.__mo.style.display=ba;
document.body.appendChild(this.__mo);
this.__mp=document.createElement(bb);
this.__mp.id=this.__mp.name=K;
this.__mo.appendChild(this.__mp);
this.__mn.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[Y,X,w,x,v]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__mp:null,__mq:0,__mo:null,__mn:null,send:function(){var g=this.getMethod();
var j=this.getUrl();
var n=this.getParameters(false);
var m=[];

for(var h in n){var k=n[h];

if(k instanceof Array){for(var i=0;i<k.length;i++){m.push(encodeURIComponent(h)+z+encodeURIComponent(k[i]));
}}else{m.push(encodeURIComponent(h)+z+encodeURIComponent(k));
}}
if(m.length>0){j+=(j.indexOf(U)>=0?y:U)+m.join(y);
}if(this.getData()===null){var n=this.getParameters(true);
var m=[];

for(var h in n){var k=n[h];

if(k instanceof Array){for(var i=0;i<k.length;i++){m.push(encodeURIComponent(h)+z+encodeURIComponent(k[i]));
}}else{m.push(encodeURIComponent(h)+z+encodeURIComponent(k));
}}
if(m.length>0){this.setData(m.join(y));
}}var f=this.getFormFields();

for(var h in f){var l=document.createElement(bb);
l.name=h;
l.appendChild(document.createTextNode(f[h]));
this.__mo.appendChild(l);
}this.__mo.action=j;
this.__mo.method=g;
this.__mp.appendChild(document.createTextNode(this.getData()));
this.__mo.submit();
this.setState(F);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(this.__mo.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__mn.readyState]);
}),_switchReadyState:function(q){switch(this.getState()){case V:case J:case D:case Q:this.warn("Ignore Ready State Change");
return;
}while(this.__mq<q){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mq]);
}},setRequestHeader:function(o,p){},getResponseHeader:function(be){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return W;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__mn);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__mn);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__mn);
},getIframeTextContent:function(){var a=this.getIframeBody();

if(!a){return null;
}
if(!a.firstChild){return W;
}if(a.firstChild.tagName&&a.firstChild.tagName.toLowerCase()==H){return a.firstChild.innerHTML;
}else{return a.innerHTML;
}},getIframeHtmlContent:function(){var s=this.getIframeBody();
return s?s.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==V){if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(u)){this.warn("Transfer not complete, ignoring content!");
}}return null;
}
if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(u)){this.debug("Returning content for responseType: "+this.getResponseType());
}}var r=this.getIframeTextContent();

switch(this.getResponseType()){case Y:if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return r;
break;
case v:r=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return r;
break;
case w:r=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}
try{return r&&r.length>0?qx.util.Json.parse(r,false):null;
}catch(bd){return this.error("Could not execute json: ("+r+")",bd);
}case X:r=this.getIframeHtmlContent();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}
try{return r&&r.length>0?window.eval(r):null;
}catch(bc){return this.error("Could not execute javascript: ("+r+")",bc);
}case x:r=this.getIframeDocument();

if(qx.core.Variant.isSet(C,B)){if(qx.core.Setting.get(A)){this.debug("Response: "+this._responseContent);
}}return r;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(bf,bg,bh){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,T);
},destruct:function(){if(this.__mn){this.__mn.onload=null;
this.__mn.onreadystatechange=null;
if(qx.core.Variant.isSet(t,S)){this.__mn.src=qx.util.ResourceManager.getInstance().toUri(P);
}document.body.removeChild(this.__mn);
}
if(this.__mo){document.body.removeChild(this.__mo);
}this.__mn=this.__mo=this.__mp=null;
}});
})();
(function(){var v="qx.debug",u="on",t="&",s="=",r="qx.ioRemoteDebug",q="application/json",p="completed",o="text/plain",n="qx.ioRemoteDebugData",m="text/javascript",e="?",l="qx.io.remote.transport.Script",h="",c="_ScriptTransport_data",b="failed",g="script",f="timeout",j="_ScriptTransport_",a="_ScriptTransport_id",k="aborted",d="utf-8";
qx.Class.define(l,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var w=++qx.io.remote.transport.Script.__mF;

if(w>=2000000000){qx.io.remote.transport.Script.__mF=w=1;
}this.__mG=null;
this.__mF=w;
},statics:{__mF:0,_instanceRegistry:{},ScriptTransport_PREFIX:j,ScriptTransport_ID_PARAM:a,ScriptTransport_DATA_PARAM:c,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[o,m,q]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(A,content){var B=qx.io.remote.transport.Script._instanceRegistry[A];

if(B==null){if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(r)){this.warn("Request finished for an unknown instance (probably aborted or timed out before)");
}}}else{B._responseContent=content;
B._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__mH:0,__mG:null,__mF:null,send:function(){var F=this.getUrl();
F+=(F.indexOf(e)>=0?t:e)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+s+this.__mF;
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
}qx.io.remote.transport.Script._instanceRegistry[this.__mF]=this;
this.__mG=document.createElement(g);
this.__mG.charset=d;
this.__mG.src=F;

if(qx.core.Variant.isSet(v,u)){if(qx.core.Setting.get(n)){this.debug("Request: "+F);
}}document.body.appendChild(this.__mG);
},_switchReadyState:function(C){switch(this.getState()){case p:case k:case b:case f:this.warn("Ignore Ready State Change");
return;
}while(this.__mH<C){this.setState(qx.io.remote.Exchange._nativeMap[++this.__mH]);
}},setRequestHeader:function(J,K){},getResponseHeader:function(M){return null;
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
}}},defer:function(x,y,z){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,l);
},destruct:function(){if(this.__mG){delete qx.io.remote.transport.Script._instanceRegistry[this.__mF];
document.body.removeChild(this.__mG);
}this.__mG=this._responseContent=null;
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
(function(){var m="test",l="",k="^",h="demobrowser.TreeDataHandler",g="ttree",f="All",e="\\.[^\\.]+$",d=".",c="depth";
qx.Class.define(h,{extend:qx.core.Object,construct:function(M){qx.core.Object.call(this);
this.tmap=M;
this.ttree=this.__KQ(M);
},members:{__KQ:function(s){var u=s;
function t(G,H){var K=H.classname;
var I=K.split(".");
function J(parent,X){if(!X.length){return parent;
}else{var Y=X[0];
var ba=X.slice(1,X.length);
var bb=null;
var bc=null;
var bd=parent.getChildren();

for(var i=0;i<bd.length;i++){if(bd[i].label==Y){bc=bd[i];
break;
}}if(bc==null){bc=new demobrowser.Tree(Y);
parent.add(bc);
}bb=J(bc,ba);
return bb;
}}var L=J(G,I);

if(!L){throw new Error("No target to insert tests");
}v.readTree(H,L);
}function w(a,b){return (a.classname<b.classname)?-1:(a.classname>b.classname)?1:0;
}var x=new demobrowser.Tree("All");
var v=this;
u.sort(w);

for(var i=0;i<u.length;i++){t(x,u[i]);
}return x;
},readTree:function(bg,bh){var bj=arguments[1]||new demobrowser.Tree(bg.classname);
var bh;
function bi(a,b){return (a.name<b.name)?-1:(a.name>b.name)?1:0;
}bg.tests.sort(bi);

for(var j=0;j<bg.tests.length;j++){bh=new demobrowser.Tree(bg.tests[j].name);
bh.tags=bg.tests[j].tags;
bh.type=m;
bh.desc=bg.tests[j].desc;
bj.add(bh);
}if(bg.children&&bg.children.length){for(var j=0;j<bg.children.length;j++){bj.add(this.readTree(bg.children[j]));
}}return bj;
},getRoot:function(){if(!this.Root){var W={classname:l,tests:[]};
var V=this.tmap;

for(var i=0;i<this.tmap.length;i++){if(W.classname.length>V[i].classname.length){W=V[i];
}}this.Root=W;
}return this.Root.classname;
},getChilds:function(n){var o=[];
var q=this.tmap;
var p=k+n+e;
var r=new RegExp(p);

for(var i=0;i<q.length;i++){if(q[i].classname.match(r)){o.push(q[i]);
}}return o;
},getTests:function(N){var O=this.tmap;

for(var i=0;i<O.length;i++){if(O[i].classname==N){return O[i].tests;
}}return [];
},getPath:function(bn){if(!bn){return l;
}var bo=bn.pwd();
bo.shift();
if(this.isClass(bn)){bo=bo.concat(bn.label);
}return bo;
},getChildren:function(y){if(y==f){var z=this.tmap;
var A=[];

for(var i=0;i<z.length;i++){A.push(z[i].classname);
}return A;
}else if(this.isClass(y)){return this.getTests(y);
}else{return [];
}},isClass:function(bm){if(bm.type&&bm.type==m){return false;
}else{return true;
}},hasTests:function(B){if(!this.isClass(B)){return false;
}else{var C=B.getChildren();

for(var i=0;i<C.length;i++){if(C[i].type&&C[i].type==m){return true;
}}return false;
}},classFromTest:function(D){var E=l;
var F=[];
classloop:
for(var i=0;i<this.tmap.length;i++){for(var j=0;j<this.tmap[i].tests.length;j++){if(this.tmap[i].tests[j]==D){E=this.tmap[i].classname;
break classloop;
}}}return E;
},getFullName:function(bk){if(!bk){return l;
}var bl=this.getPath(bk);

if(bk.type&&bk.type==m){bl=bl.concat(bk.label);
}return bl.join(d);
},getPreviousNode:function(P){var Q=P.getPrevSibling();

if(Q){return Q;
}},getNextNode:function(be){var bf=be.getNextSibling();

if(bf){return bf;
}},testCount:function(R){if(R.type&&R.type==m){return 1;
}else{var S=0;
var U=R.getIterator(c);
var T;

while(T=U()){if(T.type&&T.type==m){S++;
}}return S;
}}},destruct:function(){this.tmap=null;
this._disposeObjects(g);
}});
})();
(function(){var l="depth",k="",j="widgetLinkFlat",h="widgetLinkFull",g="parent",e="children",d="demobrowser.Tree";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.label=arguments[0]||k;
this.children=[];
this.parent=null;
},members:{pwd:function(){if(this.parent==null){return [];
}else{return this.parent.pwd().concat(this.parent.label);
}},hasChildren:function(){return this.children.length;
},getChildren:function(){return this.children;
},map:function(v,w){var x=l;
var y=this;
var z=this.getIterator(x);

while(y=z()){v.apply(y,w);
}},print:function(){this.map(function(){this.debug(this.label);
},[]);
},getIterator:function(a){var c=[this];
var b=a==l?1:0;
function f(){var n;

if(c.length){n=c.shift();
var o=n.getChildren();

if(o.length){if(b){c=o.concat(c);
}else{c=c.concat(o);
}}}else{n=null;
}return n;
}return f;
},getPrevSibling:function(){return this.getSibling(-1);
},getNextSibling:function(){return this.getSibling(1);
},getSibling:function(r){var s=this.parent.getChildren();
var t=this.self(arguments).indexOf(s,this);
var u=t+r;

if(s[u]){return s[u];
}},add:function(m){this.children.push(m);
m.parent=this;
}},statics:{indexOf:function(p,q){for(var i=0;i<p.length;i++){if(p[i]==q){return i;
}}}},destruct:function(){this._disposeObjects(h,j,g);
this._disposeArray(e);
}});
})();
(function(){var f="mshtml",e="pop.push.reverse.shift.sort.splice.unshift.join.slice",d="number",c="qx.type.BaseArray",b="qx.client",a=".";
qx.Class.define(c,{extend:Array,construct:function(length){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(n){if(qx.core.Variant.isSet(b,f)){j.prototype={length:0,$$isArray:true};
var q=e.split(a);

for(var length=q.length;length;){j.prototype[q[--length]]=Array.prototype[q[length]];
}}var r=Array.prototype.slice;
j.prototype.concat=function(){var u=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var t;

if(arguments[i] instanceof j){t=r.call(arguments[i],0);
}else if(arguments[i] instanceof Array){t=arguments[i];
}else{t=[arguments[i]];
}u.push.apply(u,t);
}return u;
};
j.prototype.toString=function(){return r.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return r.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var o=qx.lang.Core.arrayFilter;
var p=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var m=new this.constructor;
m.push.apply(m,o.apply(this,arguments));
return m;
};
j.prototype.map=function(){var s=new this.constructor;
s.push.apply(s,p.apply(this,arguments));
return s;
};
j.prototype.slice=function(){var g=new this.constructor;
g.push.apply(g,Array.prototype.slice.apply(this,arguments));
return g;
};
j.prototype.splice=function(){var l=new this.constructor;
l.push.apply(l,Array.prototype.splice.apply(this,arguments));
return l;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===d){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
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
(function(){var h="",g="<br",f=" &nbsp;",e="<br>",d=" ",c="\n",b="qx.bom.String";
qx.Class.define(b,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(q){return qx.util.StringEscape.escape(q,qx.bom.String.FROM_CHARCODE);
},unescape:function(p){return qx.util.StringEscape.unescape(p,qx.bom.String.TO_CHARCODE);
},fromText:function(a){return qx.bom.String.escape(a).replace(/(  |\n)/g,function(m){var n={"  ":f,"\n":e};
return n[m]||m;
});
},toText:function(i){return qx.bom.String.unescape(i.replace(/\s+|<([^>])+>/gi,function(o){if(o.indexOf(g)===0){return c;
}else if(o.length>0&&o.replace(/^\s*/,h).replace(/\s*$/,h)==h){return d;
}else{return h;
}}));
}},defer:function(j,k,l){j.FROM_CHARCODE=qx.lang.Object.invert(j.TO_CHARCODE);
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
(function(){var v="qx.debug",u="_applyStyle",t="on",s="",r="Color",q="px",p="solid",o="dotted",n="double",m="dashed",h="_applyWidth",l="qx.ui.decoration.Uniform",k="px ",g=" ",f="scale",j="PositiveInteger",i="absolute";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(A,B,C){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setWidth(A);
}
if(B!=null){this.setStyle(B);
}
if(C!=null){this.setColor(C);
}},properties:{width:{check:j,init:0,apply:h},style:{nullable:true,check:[p,o,m,n],init:p,apply:u},color:{nullable:true,check:r,apply:u},backgroundColor:{check:r,nullable:true,apply:u}},members:{__qm:null,_getDefaultInsets:function(){var w=this.getWidth();
return {top:w,right:w,bottom:w,left:w};
},_isInitialized:function(){return !!this.__qm;
},getMarkup:function(){if(this.__qm){return this.__qm;
}var D={position:i,top:0,left:0};
var E=this.getWidth();

if(qx.core.Variant.isSet(v,t)){if(E===0){throw new Error("Invalid Uniform decorator (zero border width). Use qx.ui.decorator.Background instead!");
}}var G=qx.theme.manager.Color.getInstance();
D.border=E+k+this.getStyle()+g+(G.resolve(this.getColor())||s);
var F=this._generateBackgroundMarkup(D);
return this.__qm=F;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==f;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+q;
a.style.height=c+q;
},tint:function(x,y){var z=qx.theme.manager.Color.getInstance();

if(y==null){y=this.getBackgroundColor();
}x.style.backgroundColor=z.resolve(y)||s;
},_applyWidth:function(){if(qx.core.Variant.isSet(v,t)){if(this.__qm){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(v,t)){if(this.__qm){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__qm=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",H=" ",G="qx.debug",F="shorthand",E="on",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",q="styleTop",r="colorBottom",o="styleBottom",p="widthRight",m="colorLeft",n="colorRight",k="colorTop",l="scale",s="border-top",t="border-left",v="border-right",u="qx.ui.decoration.Single",x="border-bottom",w="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(I,J,K){qx.ui.decoration.Abstract.call(this);
if(I!=null){this.setWidth(I);
}
if(J!=null){this.setStyle(J);
}
if(K!=null){this.setColor(K);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,m]},right:{group:[p,B,n]},top:{group:[C,q,k]},bottom:{group:[y,o,r]},width:{group:[C,p,y,z],mode:F},style:{group:[q,B,o,A],mode:F},color:{group:[k,n,r,m],mode:F}},members:{__oe:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__oe;
},getMarkup:function(L){if(this.__oe){return this.__oe;
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
return this.__oe=O;
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
},_applyWidth:function(){if(qx.core.Variant.isSet(G,E)){if(this.__oe){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}this._resetInsets();
},_applyStyle:function(){if(qx.core.Variant.isSet(G,E)){if(this.__oe){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}}},destruct:function(){this.__oe=null;
}});
})();
(function(){var m="Number",l="_applyInsets",k="-l",j="insetRight",i="insetTop",h="_applyBaseImage",g="insetBottom",f="set",e="shorthand",d="-t",a="insetLeft",c="String",b="qx.ui.decoration.Grid";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(F,G){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__lS=new qx.ui.decoration.css3.BorderImage();

if(F){this.__lT(F);
}}else{this.__lS=new qx.ui.decoration.GridDiv(F);
}
if(G!=null){this.__lS.setInsets(G);
}},properties:{baseImage:{check:c,nullable:true,apply:h},insetLeft:{check:m,nullable:true,apply:l},insetRight:{check:m,nullable:true,apply:l},insetBottom:{check:m,nullable:true,apply:l},insetTop:{check:m,nullable:true,apply:l},insets:{group:[i,j,g,a],mode:e}},members:{__lS:null,getMarkup:function(){return this.__lS.getMarkup();
},resize:function(q,r,s){this.__lS.resize(q,r,s);
},tint:function(t,u){},getInsets:function(){return this.__lS.getInsets();
},_applyInsets:function(n,o,name){var p=f+qx.lang.String.firstUp(name);
this.__lS[p](n);
},_applyBaseImage:function(D,E){if(this.__lS instanceof qx.ui.decoration.GridDiv){this.__lS.setBaseImage(D);
}else{this.__lT(D);
}},__lT:function(v){this.__lS.setBorderImage(v);
var z=qx.util.AliasManager.getInstance().resolve(v);
var A=/(.*)(\.[a-z]+)$/.exec(z);
var x=A[1];
var y=A[2];
var w=qx.util.ResourceManager.getInstance();
var B=w.getImageHeight(x+d+y);
var C=w.getImageWidth(x+k+y);
this.__lS.setSlice([B,C]);
}},destruct:function(){this.__lS=null;
}});
})();
(function(){var o="_applyStyle",n='"></div>',m="Color",l="1px",k='<div style="',j='border:',i="1px solid ",h="",g=";",f="px",C='</div>',B="qx.ui.decoration.Beveled",A="qx.debug",z='<div style="position:absolute;top:1px;left:1px;',y='border-bottom:',x='border-right:',w='border-left:',v='border-top:',u="Number",t='<div style="position:absolute;top:1px;left:0px;',r='position:absolute;top:0px;left:1px;',s='<div style="overflow:hidden;font-size:0;line-height:0;">',p="on",q="absolute";
qx.Class.define(B,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(D,E,F){qx.ui.decoration.Abstract.call(this);
if(D!=null){this.setOuterColor(D);
}
if(E!=null){this.setInnerColor(E);
}
if(F!=null){this.setInnerOpacity(F);
}},properties:{innerColor:{check:m,nullable:true,apply:o},innerOpacity:{check:u,init:1,apply:o},outerColor:{check:m,nullable:true,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__pS:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__pS;
},_applyStyle:function(){if(qx.core.Variant.isSet(A,p)){if(this.__pS){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},getMarkup:function(){if(this.__pS){return this.__pS;
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
return this.__pS=b.join(h);
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
}var Q=f;
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
}R.childNodes[3].style.backgroundColor=T.resolve(S)||h;
}},destruct:function(){this.__pS=null;
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
(function(){var gx="button-frame",gw="atom",gv="widget",gu="main",gt="button",gs="text-selected",gr="image",gq="bold",gp="middle",go="background-light",fb="text-disabled",fa="groupbox",eY="decoration/arrows/down.png",eX="cell",eW="selected",eV="border-invalid",eU="input",eT="input-disabled",eS="menu-button",eR="input-focused-invalid",gE="toolbar-button",gF="spinner",gC="input-focused",gD="popup",gA="tooltip",gB="label",gy="list",gz="tree-item",gG="treevirtual-contract",gH="scrollbar",fW="datechooser/nav-button",fV="text-hovered",fY="center",fX="treevirtual-expand",gb="textfield",ga="decoration/arrows/right.png",gd="background-application",gc="radiobutton",fU="white",fT="invalid",cW="combobox",cX="right-top",cY="checkbox",da="text-title",db="qx/static/blank.gif",dc="scrollbar/button",dd="right",de="combobox/button",df="icon/16/places/folder.png",dg="text-label",gV="decoration/tree/closed.png",gU="scrollbar-slider-horizontal",gT="decoration/arrows/left.png",gS="button-focused",ha="text-light",gY="menu-slidebar-button",gX="text-input",gW="slidebar/button-forward",hc="background-splitpane",hb=".png",ea="decoration/tree/open.png",eb="default",dX="decoration/arrows/down-small.png",dY="datechooser",ee="slidebar/button-backward",ef="selectbox",ec="treevirtual-folder",ed="shadow-popup",dV="icon/16/mimetypes/office-document.png",dW="background-medium",dB="table",dA="decoration/arrows/up.png",dD="decoration/form/",dC="",dx="-invalid",dw="icon/16/places/folder-open.png",dz="button-checked",dy="decoration/window/maximize-active-hovered.png",dv="radiobutton-hovered",du="keyboard-focus",el="decoration/cursors/",em="slidebar",en="tooltip-error-arrow",eo="table-scroller-focus-indicator",eh="move-frame",ei="nodrop",ej="decoration/table/boolean-true.png",ek="table-header-cell",ep="menu",eq="app-header",dO="row-layer",dN="text-inactive",dM="move",dL="radiobutton-checked-focused",dK="decoration/window/restore-active-hovered.png",dJ="shadow-window",dI="table-column-button",dH="right.png",dS="tabview-page-button-bottom-inactive",dR="tooltip-error",er="window-statusbar",es="button-hovered",et="decoration/scrollbar/scrollbar-",eu="background-tip",ev="scrollbar-slider-horizontal-disabled",ew="table-scroller-header",ex="button-pressed",ey="table-pane",ez="decoration/window/close-active.png",eA="native",fj="checkbox-hovered",fi="button-invalid-shadow",fh="checkbox-checked",fg="decoration/window/minimize-active-hovered.png",fn="menubar",fm="icon/16/actions/dialog-cancel.png",fl="tabview-page-button-top-inactive",fk="tabview-page-button-left-inactive",fr="menu-slidebar",fq="toolbar-button-checked",fO="decoration/tree/open-selected.png",fP="radiobutton-checked",fM="decoration/window/minimize-inactive.png",fN="icon/16/apps/office-calendar.png",fK="group",fL="tabview-page-button-right-inactive",fI="decoration/window/minimize-active.png",fJ="decoration/window/restore-inactive.png",fQ="checkbox-checked-focused",fR="splitpane",gh="combobox/textfield",gg="button-preselected-focused",gj="decoration/window/close-active-hovered.png",gi="qx/icon/Tango/16/actions/window-close.png",gl="checkbox-pressed",gk="button-disabled",gn="selected-dragover",gm="border-separator",gf="decoration/window/maximize-inactive.png",ge="dragover",gO="scrollarea",gP="scrollbar-vertical",gQ="decoration/menu/checkbox-invert.gif",gR="decoration/toolbar/toolbar-handle-knob.gif",gK="icon/22/mimetypes/office-document.png",gL="button-preselected",gM="button-checked-focused",gN="up.png",gI="best-fit",gJ="decoration/tree/closed-selected.png",cV="qx.theme.modern.Appearance",cU="text-active",cT="toolbar-button-hovered",cS="progressive-table-header",cR="decoration/table/select-column-order.png",cQ="decoration/menu/radiobutton.gif",cP="decoration/arrows/forward.png",cO="decoration/table/descending.png",cN="window-captionbar-active",cM="checkbox-checked-hovered",dj="scrollbar-slider-vertical",dk="toolbar",dh="alias",di="decoration/window/restore-active.png",dn="decoration/table/boolean-false.png",dp="checkbox-checked-disabled",dl="icon/32/mimetypes/office-document.png",dm="radiobutton-checked-disabled",dr="tabview-pane",ds="decoration/arrows/rewind.png",fv="checkbox-focused",fp="top",fC="#EEE",fy="icon/16/actions/dialog-ok.png",fe="radiobutton-checked-hovered",fc="table-header-cell-hovered",dF="window",ff="text-gray",dQ="decoration/menu/radiobutton-invert.gif",dP="text-placeholder",eJ="slider",eK="keep-align",eL="down.png",eM="tabview-page-button-top-active",eN="icon/32/places/folder-open.png",eO="icon/22/places/folder.png",eP="decoration/window/maximize-active.png",eQ="checkbox-checked-pressed",eH="decoration/window/close-inactive.png",eI="tabview-page-button-left-active",fd="toolbar-part",fB="decoration/splitpane/knob-vertical.png",fA=".gif",fz="icon/22/places/folder-open.png",fG="radiobutton-checked-pressed",fF="table-statusbar",fE="radiobutton-pressed",fD="window-captionbar-inactive",fx="copy",fw="radiobutton-focused",dq="decoration/arrows/down-invert.png",dU="decoration/menu/checkbox.gif",dT="decoration/splitpane/knob-horizontal.png",fo="icon/32/places/folder.png",eg="toolbar-separator",fu="tabview-page-button-bottom-active",ft="decoration/arrows/up-small.png",fs="decoration/table/ascending.png",dE="decoration/arrows/up-invert.png",fH="small",dt="tabview-page-button-right-active",dG="-disabled",eB="scrollbar-horizontal",eC="progressive-table-header-cell",eD="menu-separator",eE="pane",eF="decoration/arrows/right-invert.png",eG="left.png",fS="icon/16/actions/view-refresh.png";
qx.Theme.define(cV,{appearances:{"widget":{},"root":{style:function(hA){return {backgroundColor:gd,textColor:dg,font:eb};
}},"label":{style:function(hY){return {textColor:hY.disabled?fb:undefined};
}},"move-frame":{style:function(bz){return {decorator:gu};
}},"resize-frame":eh,"dragdrop-cursor":{style:function(bM){var bN=ei;

if(bM.copy){bN=fx;
}else if(bM.move){bN=dM;
}else if(bM.alias){bN=dh;
}return {source:el+bN+fA,position:cX,offset:[2,16,2,6]};
}},"image":{style:function(hT){return {opacity:!hT.replacement&&hT.disabled?0.3:1};
}},"atom":{},"atom/label":gB,"atom/icon":gr,"popup":{style:function(bA){return {decorator:gu,backgroundColor:go,shadow:ed};
}},"button-frame":{alias:gw,style:function(ba){var bc,bb;

if(ba.checked&&ba.focused&&!ba.inner){bc=gM;
bb=undefined;
}else if(ba.disabled){bc=gk;
bb=undefined;
}else if(ba.pressed){bc=ex;
bb=fV;
}else if(ba.checked){bc=dz;
bb=undefined;
}else if(ba.hovered){bc=es;
bb=fV;
}else if(ba.preselected&&ba.focused&&!ba.inner){bc=gg;
bb=fV;
}else if(ba.preselected){bc=gL;
bb=fV;
}else if(ba.focused&&!ba.inner){bc=gS;
bb=undefined;
}else{bc=gt;
bb=undefined;
}return {decorator:bc,textColor:bb,shadow:ba.invalid&&!ba.disabled?fi:undefined};
}},"button-frame/image":{style:function(cc){return {opacity:!cc.replacement&&cc.disabled?0.5:1};
}},"button":{alias:gx,include:gx,style:function(e){return {padding:[2,8],center:true};
}},"hover-button":{alias:gw,include:gw,style:function(hj){return {decorator:hj.hovered?eW:undefined,textColor:hj.hovered?gs:undefined};
}},"splitbutton":{},"splitbutton/button":gt,"splitbutton/arrow":{alias:gt,include:gt,style:function(G){return {icon:eY,padding:2,marginLeft:1};
}},"checkbox":{alias:gw,style:function(cB){var cD;

if(cB.checked&&cB.focused){cD=fQ;
}else if(cB.checked&&cB.disabled){cD=dp;
}else if(cB.checked&&cB.pressed){cD=eQ;
}else if(cB.checked&&cB.hovered){cD=cM;
}else if(cB.checked){cD=fh;
}else if(cB.focused){cD=fv;
}else if(cB.pressed){cD=gl;
}else if(cB.hovered){cD=fj;
}else{cD=cY;
}var cC=cB.invalid&&!cB.disabled?dx:dC;
return {icon:dD+cD+cC+hb,gap:6};
}},"radiobutton":{alias:gw,style:function(be){var bg;

if(be.checked&&be.focused){bg=dL;
}else if(be.checked&&be.disabled){bg=dm;
}else if(be.checked&&be.pressed){bg=fG;
}else if(be.checked&&be.hovered){bg=fe;
}else if(be.checked){bg=fP;
}else if(be.focused){bg=fw;
}else if(be.pressed){bg=fE;
}else if(be.hovered){bg=dv;
}else{bg=gc;
}var bf=be.invalid&&!be.disabled?dx:dC;
return {icon:dD+bg+bf+hb,gap:6};
}},"textfield":{style:function(bk){var bp;
var bn=!!bk.focused;
var bo=!!bk.invalid;
var bl=!!bk.disabled;

if(bn&&bo&&!bl){bp=eR;
}else if(bn&&!bo&&!bl){bp=gC;
}else if(bl){bp=eT;
}else if(!bn&&bo&&!bl){bp=eV;
}else{bp=eU;
}var bm;

if(bk.disabled){bm=fb;
}else if(bk.showingPlaceholder){bm=dP;
}else{bm=gX;
}return {decorator:bp,padding:[2,4,1],textColor:bm};
}},"textarea":{include:gb,style:function(hw){return {padding:4};
}},"spinner":{style:function(U){var Y;
var W=!!U.focused;
var X=!!U.invalid;
var V=!!U.disabled;

if(W&&X&&!V){Y=eR;
}else if(W&&!X&&!V){Y=gC;
}else if(V){Y=eT;
}else if(!W&&X&&!V){Y=eV;
}else{Y=eU;
}return {decorator:Y};
}},"spinner/textfield":{style:function(cI){return {marginRight:2,padding:[2,4,1],textColor:cI.disabled?fb:gX};
}},"spinner/upbutton":{alias:gx,include:gx,style:function(hl){return {icon:ft,padding:hl.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gx,include:gx,style:function(hy){return {icon:dX,padding:hy.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cW,"datefield/button":{alias:de,include:de,style:function(hR){return {icon:fN,padding:[0,3],decorator:undefined};
}},"datefield/textfield":gh,"datefield/list":{alias:dY,include:dY,style:function(E){return {decorator:undefined};
}},"groupbox":{style:function(F){return {legendPosition:fp};
}},"groupbox/legend":{alias:gw,style:function(P){return {padding:[1,0,1,4],textColor:P.invalid?fT:da,font:gq};
}},"groupbox/frame":{style:function(ca){return {padding:12,decorator:fK};
}},"check-groupbox":fa,"check-groupbox/legend":{alias:cY,include:cY,style:function(hQ){return {padding:[1,0,1,4],textColor:hQ.invalid?fT:da,font:gq};
}},"radio-groupbox":fa,"radio-groupbox/legend":{alias:gc,include:gc,style:function(t){return {padding:[1,0,1,4],textColor:t.invalid?fT:da,font:gq};
}},"scrollarea":{style:function(co){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hN){return {backgroundColor:gd};
}},"scrollarea/pane":gv,"scrollarea/scrollbar-x":gH,"scrollarea/scrollbar-y":gH,"scrollbar":{style:function(hJ){if(hJ[eA]){return {};
}return {width:hJ.horizontal?undefined:16,height:hJ.horizontal?16:undefined,decorator:hJ.horizontal?eB:gP,padding:1};
}},"scrollbar/slider":{alias:eJ,style:function(D){return {padding:D.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gx,style:function(cE){var cF=cE.horizontal?gU:dj;

if(cE.disabled){cF+=dG;
}return {decorator:cF,minHeight:cE.horizontal?undefined:9,minWidth:cE.horizontal?9:undefined};
}},"scrollbar/button":{alias:gx,include:gx,style:function(cG){var cH=et;

if(cG.left){cH+=eG;
}else if(cG.right){cH+=dH;
}else if(cG.up){cH+=gN;
}else{cH+=eL;
}
if(cG.left||cG.right){return {padding:[0,0,0,cG.left?3:4],icon:cH,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:cH,width:14,height:15};
}}},"scrollbar/button-begin":dc,"scrollbar/button-end":dc,"slider":{style:function(w){var A;
var y=!!w.focused;
var z=!!w.invalid;
var x=!!w.disabled;

if(y&&z&&!x){A=eR;
}else if(y&&!z&&!x){A=gC;
}else if(x){A=eT;
}else if(!y&&z&&!x){A=eV;
}else{A=eU;
}return {decorator:A};
}},"slider/knob":{include:gx,style:function(hx){return {decorator:hx.disabled?ev:gU,shadow:undefined,height:14,width:14};
}},"list":{alias:gO,style:function(ia){var ie;
var ic=!!ia.focused;
var id=!!ia.invalid;
var ib=!!ia.disabled;

if(ic&&id&&!ib){ie=eR;
}else if(ic&&!id&&!ib){ie=gC;
}else if(ib){ie=eT;
}else if(!ic&&id&&!ib){ie=eV;
}else{ie=eU;
}return {backgroundColor:go,decorator:ie};
}},"list/pane":gv,"listitem":{alias:gw,style:function(cs){var ct;

if(cs.dragover){ct=cs.selected?gn:ge;
}else{ct=cs.selected?eW:undefined;
}return {padding:cs.dragover?[4,4,2,4]:4,textColor:cs.selected?gs:undefined,decorator:ct};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gx,include:gx,style:function(bQ){return {padding:5,center:true,icon:bQ.vertical?eY:ga};
}},"slidebar/button-backward":{alias:gx,include:gx,style:function(f){return {padding:5,center:true,icon:f.vertical?dA:gT};
}},"tabview":{style:function(O){return {contentPadding:16};
}},"tabview/bar":{alias:em,style:function(bO){var bP={marginBottom:bO.barTop?-1:0,marginTop:bO.barBottom?-4:0,marginLeft:bO.barRight?-3:0,marginRight:bO.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(bO.barTop||bO.barBottom){bP.paddingLeft=5;
bP.paddingRight=7;
}else{bP.paddingTop=5;
bP.paddingBottom=7;
}return bP;
}},"tabview/bar/button-forward":{include:gW,alias:gW,style:function(cz){if(cz.barTop||cz.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:ee,alias:ee,style:function(bd){if(bd.barTop||bd.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bT){return {decorator:dr,minHeight:100,marginBottom:bT.barBottom?-1:0,marginTop:bT.barTop?-1:0,marginLeft:bT.barLeft?-1:0,marginRight:bT.barRight?-1:0};
}},"tabview-page":gv,"tabview-page/button":{alias:gw,style:function(ch){var cn,cj=0;
var cm=0,ci=0,ck=0,cl=0;

if(ch.checked){if(ch.barTop){cn=eM;
cj=[6,14];
ck=ch.firstTab?0:-5;
cl=ch.lastTab?0:-5;
}else if(ch.barBottom){cn=fu;
cj=[6,14];
ck=ch.firstTab?0:-5;
cl=ch.lastTab?0:-5;
}else if(ch.barRight){cn=dt;
cj=[6,13];
cm=ch.firstTab?0:-5;
ci=ch.lastTab?0:-5;
}else{cn=eI;
cj=[6,13];
cm=ch.firstTab?0:-5;
ci=ch.lastTab?0:-5;
}}else{if(ch.barTop){cn=fl;
cj=[4,10];
cm=4;
ck=ch.firstTab?5:1;
cl=1;
}else if(ch.barBottom){cn=dS;
cj=[4,10];
ci=4;
ck=ch.firstTab?5:1;
cl=1;
}else if(ch.barRight){cn=fL;
cj=[4,10];
cl=5;
cm=ch.firstTab?5:1;
ci=1;
ck=1;
}else{cn=fk;
cj=[4,10];
ck=5;
cm=ch.firstTab?5:1;
ci=1;
cl=1;
}}return {zIndex:ch.checked?10:5,decorator:cn,padding:cj,marginTop:cm,marginBottom:ci,marginLeft:ck,marginRight:cl,textColor:ch.checked?cU:dN};
}},"tabview-page/button/label":{alias:gB,style:function(hX){return {padding:[0,1,0,1],margin:hX.focused?0:1,decorator:hX.focused?du:undefined};
}},"tabview-page/button/close-button":{alias:gw,style:function(hS){return {icon:gi};
}},"toolbar":{style:function(v){return {decorator:dk,spacing:2};
}},"toolbar/part":{style:function(hH){return {decorator:fd,spacing:2};
}},"toolbar/part/container":{style:function(bH){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hq){return {source:gR,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gw,style:function(hd){return {marginTop:2,marginBottom:2,padding:(hd.pressed||hd.checked||hd.hovered)&&!hd.disabled||(hd.disabled&&hd.checked)?3:5,decorator:hd.pressed||(hd.checked&&!hd.hovered)||(hd.checked&&hd.disabled)?fq:hd.hovered&&!hd.disabled?cT:undefined};
}},"toolbar-menubutton":{alias:gE,include:gE,style:function(Q){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gr,include:gr,style:function(hh){return {source:dX};
}},"toolbar-splitbutton":{style:function(hi){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gE,include:gE,style:function(bx){return {icon:eY,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gE,include:gE,style:function(b){return {padding:b.pressed||b.checked?1:b.hovered?1:3,icon:eY,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(B){return {decorator:eg,margin:7};
}},"tree":gy,"tree-item":{style:function(by){return {padding:[2,6],textColor:by.selected?gs:undefined,decorator:by.selected?eW:undefined};
}},"tree-item/icon":{include:gr,style:function(cq){return {paddingRight:5};
}},"tree-item/label":gB,"tree-item/open":{include:gr,style:function(cd){var ce;

if(cd.selected&&cd.opened){ce=fO;
}else if(cd.selected&&!cd.opened){ce=gJ;
}else if(cd.opened){ce=ea;
}else{ce=gV;
}return {padding:[0,5,0,2],source:ce};
}},"tree-folder":{include:gz,alias:gz,style:function(R){var S;

if(R.small){S=R.opened?dw:df;
}else if(R.large){S=R.opened?eN:fo;
}else{S=R.opened?fz:eO;
}return {icon:S};
}},"tree-file":{include:gz,alias:gz,style:function(L){return {icon:L.small?dV:L.large?dl:gK};
}},"treevirtual":dB,"treevirtual-folder":{style:function(hU){return {icon:hU.opened?dw:df};
}},"treevirtual-file":{include:ec,alias:ec,style:function(bv){return {icon:dV};
}},"treevirtual-line":{style:function(hO){return {icon:db};
}},"treevirtual-contract":{style:function(cA){return {icon:ea,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(cv){return {icon:gV,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gG,"treevirtual-only-expand":fX,"treevirtual-start-contract":gG,"treevirtual-start-expand":fX,"treevirtual-end-contract":gG,"treevirtual-end-expand":fX,"treevirtual-cross-contract":gG,"treevirtual-cross-expand":fX,"treevirtual-end":{style:function(bU){return {icon:db};
}},"treevirtual-cross":{style:function(he){return {icon:db};
}},"tooltip":{include:gD,style:function(bG){return {backgroundColor:eu,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gw,"tooltip-error":{include:gA,style:function(bi){return {textColor:gs,placeMethod:gv,offset:[0,0,0,14],marginTop:-2,position:cX,showTimeout:100,hideTimeout:10000,decorator:dR,shadow:en,font:gq};
}},"tooltip-error/atom":gw,"window":{style:function(hL){return {shadow:dJ,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(cL){return {decorator:dF};
}},"window/captionbar":{style:function(bS){return {decorator:bS.active?cN:fD,textColor:bS.active?fU:ff,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(cf){return {margin:[5,0,3,6]};
}},"window/title":{style:function(cw){return {alignY:gp,font:gq,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gw,style:function(cr){return {icon:cr.active?cr.hovered?fg:fI:fM,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gw,style:function(ho){return {icon:ho.active?ho.hovered?dK:di:fJ,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gw,style:function(hP){return {icon:hP.active?hP.hovered?dy:eP:gf,margin:[4,8,2,0]};
}},"window/close-button":{alias:gw,style:function(hM){return {icon:hM.active?hM.hovered?gj:ez:eH,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(bu){return {padding:[2,6],decorator:er,minHeight:18};
}},"window/statusbar-text":{style:function(cy){return {font:fH};
}},"iframe":{style:function(bI){return {decorator:gu};
}},"resizer":{style:function(bs){return {decorator:eE};
}},"splitpane":{style:function(bV){return {decorator:fR};
}},"splitpane/splitter":{style:function(hI){return {width:hI.horizontal?3:undefined,height:hI.vertical?3:undefined,backgroundColor:hc};
}},"splitpane/splitter/knob":{style:function(J){return {source:J.horizontal?dT:fB};
}},"splitpane/slider":{style:function(cx){return {width:cx.horizontal?3:undefined,height:cx.vertical?3:undefined,backgroundColor:hc};
}},"selectbox":{alias:gx,include:gx,style:function(I){return {padding:[2,8]};
}},"selectbox/atom":gw,"selectbox/popup":gD,"selectbox/list":{alias:gy},"selectbox/arrow":{include:gr,style:function(bL){return {source:eY,paddingLeft:5};
}},"datechooser":{style:function(hr){var hv;
var ht=!!hr.focused;
var hu=!!hr.invalid;
var hs=!!hr.disabled;

if(ht&&hu&&!hs){hv=eR;
}else if(ht&&!hu&&!hs){hv=gC;
}else if(hs){hv=eT;
}else if(!ht&&hu&&!hs){hv=eV;
}else{hv=eU;
}return {padding:2,decorator:hv,backgroundColor:go};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gx,alias:gx,style:function(M){var N={padding:[2,4],shadow:undefined};

if(M.lastYear){N.icon=ds;
N.marginRight=1;
}else if(M.lastMonth){N.icon=gT;
}else if(M.nextYear){N.icon=cP;
N.marginLeft=1;
}else if(M.nextMonth){N.icon=ga;
}return N;
}},"datechooser/last-year-button-tooltip":gA,"datechooser/last-month-button-tooltip":gA,"datechooser/next-year-button-tooltip":gA,"datechooser/next-month-button-tooltip":gA,"datechooser/last-year-button":fW,"datechooser/last-month-button":fW,"datechooser/next-month-button":fW,"datechooser/next-year-button":fW,"datechooser/month-year-label":{style:function(hK){return {font:gq,textAlign:fY,textColor:hK.disabled?fb:undefined};
}},"datechooser/date-pane":{style:function(bK){return {textColor:bK.disabled?fb:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(br){return {textColor:br.disabled?fb:br.weekend?ha:undefined,textAlign:fY,paddingTop:2,backgroundColor:dW};
}},"datechooser/week":{style:function(bE){return {textAlign:fY,padding:[2,4],backgroundColor:dW};
}},"datechooser/day":{style:function(hz){return {textAlign:fY,decorator:hz.disabled?undefined:hz.selected?eW:undefined,textColor:hz.disabled?fb:hz.selected?gs:hz.otherMonth?ha:undefined,font:hz.today?gq:undefined,padding:[2,4]};
}},"combobox":{style:function(hB){var hF;
var hD=!!hB.focused;
var hE=!!hB.invalid;
var hC=!!hB.disabled;

if(hD&&hE&&!hC){hF=eR;
}else if(hD&&!hE&&!hC){hF=gC;
}else if(hC){hF=eT;
}else if(!hD&&hE&&!hC){hF=eV;
}else{hF=eU;
}return {decorator:hF};
}},"combobox/popup":gD,"combobox/list":{alias:gy},"combobox/button":{include:gx,alias:gx,style:function(p){var q={icon:eY,padding:2};

if(p.selected){q.decorator=gS;
}return q;
}},"combobox/textfield":{include:gb,style:function(l){return {decorator:undefined};
}},"menu":{style:function(bW){var bX={decorator:ep,shadow:ed,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:bW.submenu||bW.contextmenu?gI:eK};

if(bW.submenu){bX.position=cX;
bX.offset=[-2,-3];
}return bX;
}},"menu/slidebar":fr,"menu-slidebar":gv,"menu-slidebar-button":{style:function(u){return {decorator:u.hovered?eW:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gY,style:function(bj){return {icon:bj.hovered?dE:dA};
}},"menu-slidebar/button-forward":{include:gY,style:function(hp){return {icon:hp.hovered?dq:eY};
}},"menu-separator":{style:function(o){return {height:0,decorator:eD,margin:[4,2]};
}},"menu-button":{alias:gw,style:function(cg){return {decorator:cg.selected?eW:undefined,textColor:cg.selected?gs:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gr,style:function(bw){return {alignY:gp};
}},"menu-button/label":{include:gB,style:function(j){return {alignY:gp,padding:1};
}},"menu-button/shortcut":{include:gB,style:function(k){return {alignY:gp,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gr,style:function(g){return {source:g.selected?eF:ga,alignY:gp};
}},"menu-checkbox":{alias:eS,include:eS,style:function(a){return {icon:!a.checked?undefined:a.selected?gQ:dU};
}},"menu-radiobutton":{alias:eS,include:eS,style:function(i){return {icon:!i.checked?undefined:i.selected?dQ:cQ};
}},"menubar":{style:function(bR){return {decorator:fn};
}},"menubar-button":{alias:gw,style:function(ig){return {decorator:ig.pressed||ig.hovered?eW:undefined,textColor:ig.pressed||ig.hovered?gs:undefined,padding:[3,8]};
}},"colorselector":gv,"colorselector/control-bar":gv,"colorselector/control-pane":gv,"colorselector/visual-pane":fa,"colorselector/preset-grid":gv,"colorselector/colorbucket":{style:function(hW){return {decorator:gu,width:16,height:16};
}},"colorselector/preset-field-set":fa,"colorselector/input-field-set":fa,"colorselector/preview-field-set":fa,"colorselector/hex-field-composite":gv,"colorselector/hex-field":gb,"colorselector/rgb-spinner-composite":gv,"colorselector/rgb-spinner-red":gF,"colorselector/rgb-spinner-green":gF,"colorselector/rgb-spinner-blue":gF,"colorselector/hsb-spinner-composite":gv,"colorselector/hsb-spinner-hue":gF,"colorselector/hsb-spinner-saturation":gF,"colorselector/hsb-spinner-brightness":gF,"colorselector/preview-content-old":{style:function(h){return {decorator:gu,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(m){return {decorator:gu,backgroundColor:go,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(T){return {decorator:gu,margin:5};
}},"colorselector/brightness-field":{style:function(cu){return {decorator:gu,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gv,"colorselector/hue-saturation-handle":gv,"colorselector/brightness-pane":gv,"colorselector/brightness-handle":gv,"colorpopup":{alias:gD,include:gD,style:function(bF){return {padding:5,backgroundColor:gd};
}},"colorpopup/field":{style:function(r){return {decorator:gu,margin:2,width:14,height:14,backgroundColor:go};
}},"colorpopup/selector-button":gt,"colorpopup/auto-button":gt,"colorpopup/preview-pane":fa,"colorpopup/current-preview":{style:function(cK){return {height:20,padding:4,marginLeft:4,decorator:gu,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(c){return {height:20,padding:4,marginRight:4,decorator:gu,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gt,include:gt,style:function(cb){return {icon:fy};
}},"colorpopup/colorselector-cancelbutton":{alias:gt,include:gt,style:function(hG){return {icon:fm};
}},"table":{alias:gv,style:function(C){return {decorator:dB};
}},"table-header":{},"table/statusbar":{style:function(H){return {decorator:fF,padding:[0,2]};
}},"table/column-button":{alias:gx,style:function(bh){return {decorator:dI,padding:3,icon:cR};
}},"table-column-reset-button":{include:eS,alias:eS,style:function(){return {icon:fS};
}},"table-scroller":gv,"table-scroller/scrollbar-x":gH,"table-scroller/scrollbar-y":gH,"table-scroller/header":{style:function(bB){return {decorator:ew};
}},"table-scroller/pane":{style:function(cp){return {backgroundColor:ey};
}},"table-scroller/focus-indicator":{style:function(bY){return {decorator:eo};
}},"table-scroller/resize-line":{style:function(d){return {backgroundColor:gm,width:2};
}},"table-header-cell":{alias:gw,style:function(bJ){return {minWidth:13,minHeight:20,padding:bJ.hovered?[3,4,2,4]:[3,4],decorator:bJ.hovered?fc:ek,sortIcon:bJ.sorted?(bJ.sortedAscending?fs:cO):undefined};
}},"table-header-cell/label":{style:function(hn){return {minWidth:0,alignY:gp,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(K){return {alignY:gp,alignX:dd};
}},"table-header-cell/icon":{style:function(n){return {minWidth:0,alignY:gp,paddingRight:5};
}},"table-editor-textfield":{include:gb,style:function(hg){return {decorator:undefined,padding:[2,2],backgroundColor:go};
}},"table-editor-selectbox":{include:ef,alias:ef,style:function(s){return {padding:[0,2],backgroundColor:go};
}},"table-editor-combobox":{include:cW,alias:cW,style:function(hf){return {decorator:undefined,backgroundColor:go};
}},"progressive-table-header":{alias:gv,style:function(hk){return {decorator:cS};
}},"progressive-table-header-cell":{alias:gw,style:function(bq){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:eC};
}},"app-header":{style:function(bC){return {font:gq,textColor:gs,padding:[8,12],decorator:eq};
}},"virtual-list":gy,"virtual-list/row-layer":dO,"row-layer":{style:function(bD){return {colorEven:fU,colorOdd:fC};
}},"column-layer":gv,"cell":{style:function(hV){return {textColor:hV.selected?gs:dg,padding:[3,6],font:eb};
}},"cell-string":eX,"cell-number":{include:eX,style:function(bt){return {textAlign:dd};
}},"cell-image":eX,"cell-boolean":{include:eX,style:function(hm){return {iconTrue:ej,iconFalse:dn};
}},"cell-atom":eX,"cell-date":eX,"cell-html":eX,"htmlarea":{"include":gv,style:function(cJ){return {backgroundColor:fU};
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
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,construct:function(D,E){qx.ui.decoration.Abstract.call(this);
if(D!=null){this.setBorderImage(D);
}
if(E!=null){this.setSlice(E);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:u,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[q,w,a,x],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[v,m],mode:c}},members:{__lO:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lO;
},getMarkup:function(){if(this.__lO){return this.__lO;
}var I=this._resolveImageUrl(this.getBorderImage());
var J=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var K=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__lO=[z,qx.bom.element.Style.compile({"borderImage":n+I+p+J.join(f)+f+K,position:k,lineHeight:0,fontSize:0,overflow:o,boxSizing:s,borderWidth:J.join(b)+g}),A].join(r);
return this.__lO;
},resize:function(F,G,H){F.style.width=G+g;
F.style.height=H+g;
},tint:function(B,C){},_applyStyle:function(){if(qx.core.Variant.isSet(y,l)){if(this._isInitialized()){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}},_resolveImageUrl:function(L){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(L));
}},destruct:function(){this.__lO=null;
}});
})();
(function(){var n="px",m="0px",l="-1px",k="no-repeat",j="scale-x",i="scale-y",h="-tr",g="-l",f='</div>',e="scale",D="qx.client",C="-br",B="-t",A="-tl",z="-r",y='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',x="qx.debug",w="_applyBaseImage",v="-b",u="String",s="",t="-bl",q="qx.ui.decoration.GridDiv",r="-c",o="mshtml",p="on";
qx.Class.define(q,{extend:qx.ui.decoration.Abstract,construct:function(G,H){qx.ui.decoration.Abstract.call(this);
if(G!=null){this.setBaseImage(G);
}
if(H!=null){this.setInsets(H);
}},properties:{baseImage:{check:u,nullable:true,apply:w}},members:{__lP:null,__lQ:null,__lR:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lP;
},getMarkup:function(){if(this.__lP){return this.__lP;
}var a=qx.bom.element.Decoration;
var b=this.__lQ;
var c=this.__lR;
var d=[];
d.push(y);
d.push(a.create(b.tl,k,{top:0,left:0}));
d.push(a.create(b.t,j,{top:0,left:c.left+n}));
d.push(a.create(b.tr,k,{top:0,right:0}));
d.push(a.create(b.bl,k,{bottom:0,left:0}));
d.push(a.create(b.b,j,{bottom:0,left:c.left+n}));
d.push(a.create(b.br,k,{bottom:0,right:0}));
d.push(a.create(b.l,i,{top:c.top+n,left:0}));
d.push(a.create(b.c,e,{top:c.top+n,left:c.left+n}));
d.push(a.create(b.r,i,{top:c.top+n,right:0}));
d.push(f);
return this.__lP=d.join(s);
},resize:function(S,T,U){var V=this.__lR;
var innerWidth=T-V.left-V.right;
var innerHeight=U-V.top-V.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}S.style.width=T+n;
S.style.height=U+n;
S.childNodes[1].style.width=innerWidth+n;
S.childNodes[4].style.width=innerWidth+n;
S.childNodes[7].style.width=innerWidth+n;
S.childNodes[6].style.height=innerHeight+n;
S.childNodes[7].style.height=innerHeight+n;
S.childNodes[8].style.height=innerHeight+n;

if(qx.core.Variant.isSet(D,o)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(T%2==1){S.childNodes[2].style.marginRight=l;
S.childNodes[5].style.marginRight=l;
S.childNodes[8].style.marginRight=l;
}else{S.childNodes[2].style.marginRight=m;
S.childNodes[5].style.marginRight=m;
S.childNodes[8].style.marginRight=m;
}
if(U%2==1){S.childNodes[3].style.marginBottom=l;
S.childNodes[4].style.marginBottom=l;
S.childNodes[5].style.marginBottom=l;
}else{S.childNodes[3].style.marginBottom=m;
S.childNodes[4].style.marginBottom=m;
S.childNodes[5].style.marginBottom=m;
}}}},tint:function(E,F){},_applyBaseImage:function(K,L){if(qx.core.Variant.isSet(x,p)){if(this.__lP){throw new Error("This decorator is already in-use. Modification is not possible anymore!");
}}
if(K){var P=this._resolveImageUrl(K);
var Q=/(.*)(\.[a-z]+)$/.exec(P);
var O=Q[1];
var N=Q[2];
var M=this.__lQ={tl:O+A+N,t:O+B+N,tr:O+h+N,bl:O+t+N,b:O+v+N,br:O+C+N,l:O+g+N,c:O+r+N,r:O+z+N};
this.__lR=this._computeEdgeSizes(M);
}},_resolveImageUrl:function(R){return qx.util.AliasManager.getInstance().resolve(R);
},_computeEdgeSizes:function(I){var J=qx.util.ResourceManager.getInstance();
return {top:J.getImageHeight(I.t),bottom:J.getImageHeight(I.b),left:J.getImageWidth(I.l),right:J.getImageWidth(I.r)};
}},destruct:function(){this.__lP=this.__lQ=this.__lR=null;
}});
})();


qx.$$loader.init();

