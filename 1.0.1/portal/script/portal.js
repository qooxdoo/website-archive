(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"portal.Application","qx.theme":"qx.theme.Modern","qx.version":"1.0.1"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"portal":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.1"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  uris : [["portal:portal.js"]],
  urisBefore : [],
  packageHashes : {"0":"79575b77fd0c"},
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

qx.$$packageData['79575b77fd0c']={"resources":{"portal/css/style.css":"portal","portal/data/boxData.js":"portal","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]}};
(function(){var S="toString",R=".",Q="default",P="Object",O='"',N="Array",M="()",L="String",K="Function",J=".prototype",br="function",bq="Boolean",bp="Error",bo="RegExp",bn="warn",bm="hasOwnProperty",bl="string",bk="toLocaleString",bj='\", "',bi="info",ba="BROKEN_IE",bb="isPrototypeOf",X="Date",Y="",V="qx.Bootstrap",W="]",T="Class",U="error",bc="[Class ",bd="valueOf",bf="Number",be="count",bh="debug",bg="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return bc+this.classname+W;
},createNamespace:function(name,bt){var bv=name.split(R);
var parent=window;
var bu=bv[0];

for(var i=0,bw=bv.length-1;i<bw;i++,bu=bv[i]){if(!parent[bu]){parent=parent[bu]={};
}else{parent=parent[bu];
}}parent[bu]=bt;
return bu;
},setDisplayName:function(g,h,name){g.displayName=h+R+name+M;
},setDisplayNames:function(D,E){for(var name in D){var F=D[name];

if(F instanceof Function){F.displayName=E+R+name+M;
}}},define:function(name,u){if(!u){var u={statics:{}};
}var z;
var x=null;
qx.Bootstrap.setDisplayNames(u.statics,name);

if(u.members){qx.Bootstrap.setDisplayNames(u.members,name+J);
z=u.construct||new Function;
var v=u.statics;

for(var w in v){z[w]=v[w];
}x=z.prototype;
var A=u.members;

for(var w in A){x[w]=A[w];
}}else{z=u.statics||{};
}var y=this.createNamespace(name,z);
z.name=z.classname=name;
z.basename=y;
z.$$type=T;
if(!z.hasOwnProperty(S)){z.toString=this.genericToString;
}if(u.defer){u.defer(z,x);
}qx.Bootstrap.$$registry[name]=u.statics;
return z;
}};
qx.Bootstrap.define(V,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bS){return bS.__count__;
},"default":function(bA){var length=0;

for(var bB in bA){length++;
}return length;
}})[(({}).__count__==0)?be:Q],objectMergeWith:function(bF,bG,bH){if(bH===undefined){bH=true;
}
for(var bI in bG){if(bH||bF[bI]===undefined){bF[bI]=bG[bI];
}}return bF;
},__a:[bb,bm,bk,S,bd],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(m){var n=[];

for(var q in m){n.push(q);
}var o=qx.Bootstrap.__a;
var p=Object.prototype.hasOwnProperty;

for(var i=0,a=o,l=a.length;i<l;i++){if(p.call(m,a[i])){n.push(a[i]);
}}return n;
},"default":function(r){var s=[];

for(var t in r){s.push(t);
}return s;
}})[typeof (Object.keys)==
br?bg:
(function(){for(var bV in {toString:1}){return bV;
}})()!==S?ba:Q],getKeysAsString:function(c){var d=qx.Bootstrap.getKeys(c);

if(d.length==0){return Y;
}return O+d.join(bj)+O;
},__b:{"[object String]":L,"[object Array]":N,"[object Object]":P,"[object RegExp]":bo,"[object Number]":bf,"[object Boolean]":bq,"[object Date]":X,"[object Function]":K,"[object Error]":bp},firstUp:function(I){return I.charAt(0).toUpperCase()+I.substr(1);
},firstLow:function(bJ){return bJ.charAt(0).toLowerCase()+bJ.substr(1);
},getClass:function(B){var C=Object.prototype.toString.call(B);
return (qx.Bootstrap.__b[C]||C.slice(8,-1));
},isString:function(bR){return (bR!==null&&(typeof bR===bl||qx.Bootstrap.getClass(bR)==L||bR instanceof String||(!!bR&&!!bR.$$isString)));
},isArray:function(bU){return (bU!==null&&(bU instanceof Array||(bU&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bU.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bU)==N||(!!bU&&!!bU.$$isArray)));
},isObject:function(bO){return (bO!==undefined&&bO!==null&&qx.Bootstrap.getClass(bO)==P);
},isFunction:function(e){return qx.Bootstrap.getClass(e)==K;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(f,name){while(f){if(f.$$properties&&f.$$properties[name]){return f.$$properties[name];
}f=f.superclass;
}return null;
},hasProperty:function(bs,name){return !!qx.Bootstrap.getPropertyDefinition(bs,name);
},getEventType:function(b,name){var b=b.constructor;

while(b.superclass){if(b.$$events&&b.$$events[name]!==undefined){return b.$$events[name];
}b=b.superclass;
}return null;
},supportsEvent:function(bT,name){return !!qx.Bootstrap.getEventType(bT,name);
},getByInterface:function(bC,bD){var bE,i,l;

while(bC){if(bC.$$implements){bE=bC.$$flatImplements;

for(i=0,l=bE.length;i<l;i++){if(bE[i]===bD){return bC;
}}}bC=bC.superclass;
}return null;
},hasInterface:function(bP,bQ){return !!qx.Bootstrap.getByInterface(bP,bQ);
},getMixins:function(by){var bz=[];

while(by){if(by.$$includes){bz.push.apply(bz,by.$$flatIncludes);
}by=by.superclass;
}return bz;
},$$logs:[],debug:function(bK,bL){qx.Bootstrap.$$logs.push([bh,arguments]);
},info:function(j,k){qx.Bootstrap.$$logs.push([bi,arguments]);
},warn:function(G,H){qx.Bootstrap.$$logs.push([bn,arguments]);
},error:function(bM,bN){qx.Bootstrap.$$logs.push([U,arguments]);
},trace:function(bx){}}});
})();
(function(){var m="qx.allowUrlSettings",l="&",k="qx.core.Setting",j="qx.allowUrlVariants",h="qx.propertyDebugLevel",g="qxsetting",f=":",e=".";
qx.Bootstrap.define(k,{statics:{__c:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__c[a]){this.__c[a]={};
}else if(this.__c[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__c[a].defaultValue=b;
},get:function(o){var p=this.__c[o];

if(p===undefined){throw new Error('Setting "'+o+'" is not defined.');
}
if(p.value!==undefined){return p.value;
}return p.defaultValue;
},set:function(q,r){if((q.split(e)).length<2){throw new Error('Malformed settings key "'+q+'". Must be following the schema "namespace.key".');
}
if(!this.__c[q]){this.__c[q]={};
}this.__c[q].value=r;
},__d:function(){if(window.qxsettings){for(var d in window.qxsettings){this.set(d,window.qxsettings[d]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(n){}this.__e();
}},__e:function(){if(this.get(m)!=true){return;
}var t=document.location.search.slice(1).split(l);

for(var i=0;i<t.length;i++){var s=t[i].split(f);

if(s.length!=3||s[0]!=g){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(c){c.define(m,false);
c.define(j,false);
c.define(h,0);
c.__d();
}});
})();
(function(){var t="gecko",s="1.9.0.0",r=".",q="[object Opera]",p="function",o="[^\\.0-9]",n="525.26",m="",l="mshtml",k="AppleWebKit/",e="unknown",j="9.6.0",h="4.0",d="Gecko",c="opera",g="webkit",f="0.0.0",i="8.0",b="qx.bom.client.Engine";
qx.Bootstrap.define(b,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__f:function(){var u=e;
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
window.alert("Unsupported client: "+x+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=A;
this.UNKNOWN_VERSION=w;
this.NAME=u;
this.FULLVERSION=y;
this.VERSION=parseFloat(y);
}},defer:function(a){a.__f();
}});
})();
(function(){var y="on",x="off",w="|",u="default",t="object",s="&",r="qx.aspects",q="$",p="qx.allowUrlVariants",o="qx.debug",g="qx.client",n="qx.dynlocale",k="webkit",f="qxvariant",e="opera",j=":",h="qx.core.Variant",m="mshtml",d="gecko";
qx.Bootstrap.define(h,{statics:{__g:{},__h:{},compilerIsSet:function(){return true;
},define:function(z,A,B){{};

if(!this.__g[z]){this.__g[z]={};
}else{}this.__g[z].allowedValues=A;
this.__g[z].defaultValue=B;
},get:function(b){var c=this.__g[b];
{};

if(c.value!==undefined){return c.value;
}return c.defaultValue;
},__i:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__g[a]){this.__g[a]={};
}this.__g[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(L){}this.__j(this.__g);
}},__j:function(){if(qx.core.Setting.get(p)!=true){return;
}var C=document.location.search.slice(1).split(s);

for(var i=0;i<C.length;i++){var D=C[i].split(j);

if(D.length!=3||D[0]!=f){continue;
}var E=D[1];

if(!this.__g[E]){this.__g[E]={};
}this.__g[E].value=decodeURIComponent(D[2]);
}},select:function(I,J){{};

for(var K in J){if(this.isSet(I,K)){return J[K];
}}
if(J[u]!==undefined){return J[u];
}{};
},isSet:function(M,N){var O=M+q+N;

if(this.__h[O]!==undefined){return this.__h[O];
}var Q=false;
if(N.indexOf(w)<0){Q=this.get(M)===N;
}else{var P=N.split(w);

for(var i=0,l=P.length;i<l;i++){if(this.get(M)===P[i]){Q=true;
break;
}}}this.__h[O]=Q;
return Q;
},__k:function(v){return typeof v===t&&v!==null&&v instanceof Array;
},__l:function(v){return typeof v===t&&v!==null&&!(v instanceof Array);
},__m:function(F,G){for(var i=0,l=F.length;i<l;i++){if(F[i]==G){return true;
}}return false;
}},defer:function(H){H.define(g,[d,m,e,k],qx.bom.client.Engine.NAME);
H.define(o,[y,x],y);
H.define(r,[y,x],x);
H.define(n,[y,x],y);
H.__i();
}});
})();
(function(){var F="other",E="widgets",D="fonts",C="appearances",B="qx.Theme",A="]",z="[Theme ",y="colors",x="decorations",w="Theme",t="meta",v="borders",u="icons";
qx.Bootstrap.define(B,{statics:{define:function(name,H){if(!H){var H={};
}H.include=this.__n(H.include);
H.patch=this.__n(H.patch);
{};
var I={$$type:w,name:name,title:H.title,toString:this.genericToString};
if(H.extend){I.supertheme=H.extend;
}I.basename=qx.Bootstrap.createNamespace(name,I);
this.__q(I,H);
this.__o(I,H);
this.$$registry[name]=I;
for(var i=0,a=H.include,l=a.length;i<l;i++){this.include(I,a[i]);
}
for(var i=0,a=H.patch,l=a.length;i<l;i++){this.patch(I,a[i]);
}},__n:function(G){if(!G){return [];
}
if(qx.Bootstrap.isArray(G)){return G;
}else{return [G];
}},__o:function(b,c){var d=c.aliases||{};

if(c.extend&&c.extend.aliases){qx.Bootstrap.objectMergeWith(d,c.extend.aliases,false);
}b.aliases=d;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return z+this.name+A;
},__p:function(J){for(var i=0,K=this.__r,l=K.length;i<l;i++){if(J[K[i]]){return K[i];
}}},__q:function(e,f){var j=this.__p(f);
if(f.extend&&!j){j=f.extend.type;
}e.type=j||F;
if(!j){return;
}var m=function(){};
if(f.extend){m.prototype=new f.extend.$$clazz;
}var k=m.prototype;
var h=f[j];
for(var g in h){k[g]=h[g];
if(k[g].base){{};
k[g].base=f.extend;
}}e.$$clazz=m;
e[j]=new m;
},$$registry:{},__r:[y,v,x,D,u,E,C,t],__s:null,__t:null,__u:function(){},patch:function(n,o){var q=this.__p(o);

if(q!==this.__p(n)){throw new Error("The mixins '"+n.name+"' are not compatible '"+o.name+"'!");
}var p=o[q];
var r=n.$$clazz.prototype;

for(var s in p){r[s]=p[s];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var A="function",z="Boolean",y="qx.Interface",x="]",w="toggle",v="Interface",u="is",t="[Interface ";
qx.Bootstrap.define(y,{statics:{define:function(name,I){if(I){if(I.extend&&!(I.extend instanceof Array)){I.extend=[I.extend];
}{};
var J=I.statics?I.statics:{};
if(I.extend){J.$$extends=I.extend;
}
if(I.properties){J.$$properties=I.properties;
}
if(I.members){J.$$members=I.members;
}
if(I.events){J.$$events=I.events;
}}else{var J={};
}J.$$type=v;
J.name=name;
J.toString=this.genericToString;
J.basename=qx.Bootstrap.createNamespace(name,J);
qx.Interface.$$registry[name]=J;
return J;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(g){if(!g){return [];
}var h=g.concat();

for(var i=0,l=g.length;i<l;i++){if(g[i].$$extends){h.push.apply(h,this.flatten(g[i].$$extends));
}}return h;
},__v:function(j,k,m,n){var r=m.$$members;

if(r){for(var q in r){if(qx.Bootstrap.isFunction(r[q])){var p=this.__w(k,q);
var o=p||qx.Bootstrap.isFunction(j[q]);

if(!o){throw new Error('Implementation of method "'+q+'" is missing in class "'+k.classname+'" required by interface "'+m.name+'"');
}var s=n===true&&!p&&!qx.Bootstrap.hasInterface(k,m);

if(s){j[q]=this.__z(m,j[q],q,r[q]);
}}else{if(typeof j[q]===undefined){if(typeof j[q]!==A){throw new Error('Implementation of member "'+q+'" is missing in class "'+k.classname+'" required by interface "'+m.name+'"');
}}}}}},__w:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.Bootstrap.firstLow(f[2]);
var d=qx.Bootstrap.getPropertyDefinition(a,c);

if(!d){return false;
}var e=f[0]==u||f[0]==w;

if(e){return qx.Bootstrap.getPropertyDefinition(a,c).check==z;
}return true;
},__x:function(B,C){if(C.$$properties){for(var D in C.$$properties){if(!qx.Bootstrap.getPropertyDefinition(B,D)){throw new Error('The property "'+D+'" is not supported by Class "'+B.classname+'"!');
}}}},__y:function(O,P){if(P.$$events){for(var Q in P.$$events){if(!qx.Bootstrap.supportsEvent(O,Q)){throw new Error('The event "'+Q+'" is not supported by Class "'+O.classname+'"!');
}}}},assertObject:function(E,F){var H=E.constructor;
this.__v(E,H,F,false);
this.__x(H,F);
this.__y(H,F);
var G=F.$$extends;

if(G){for(var i=0,l=G.length;i<l;i++){this.assertObject(E,G[i]);
}}},assert:function(K,L,M){this.__v(K.prototype,K,L,M);
this.__x(K,L);
this.__y(K,L);
var N=L.$$extends;

if(N){for(var i=0,l=N.length;i<l;i++){this.assert(K,N[i],M);
}}},genericToString:function(){return t+this.name+x;
},$$registry:{},__z:function(){},__A:null,__B:function(){}}});
})();
(function(){var n="qx.Mixin",m=".prototype",k="constructor",j="[Mixin ",h="]",g="destruct",f="Mixin";
qx.Bootstrap.define(n,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
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
qx.Bootstrap.setDisplayName(w.destruct,name,g);
}}else{var y={};
}y.$$type=f;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(o){var r=this.flatten(o);
var s=r.length;

if(s<2){return true;
}var v={};
var u={};
var t={};
var q;

for(var i=0;i<s;i++){q=r[i];

for(var p in q.events){if(t[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+t[p]+'" in member "'+p+'"!');
}t[p]=q.name;
}
for(var p in q.properties){if(v[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+v[p]+'" in property "'+p+'"!');
}v[p]=q.name;
}
for(var p in q.members){if(u[p]){throw new Error('Conflict between mixin "'+q.name+'" and "'+u[p]+'" in member "'+p+'"!');
}u[p]=q.name;
}}return true;
},isCompatible:function(c,d){var e=qx.Bootstrap.getMixins(d);
e.push(c);
return qx.Mixin.checkCompatibility(e);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(a){if(!a){return [];
}var b=a.concat();

for(var i=0,l=a.length;i<l;i++){if(a[i].$$includes){b.push.apply(b,this.flatten(a[i].$$includes));
}}return b;
},genericToString:function(){return j+this.name+h;
},$$registry:{},__C:null,__D:function(){}}});
})();
(function(){var v=';',u='return this.',t="boolean",s="string",r='!==undefined)',q='else if(this.',p='if(this.',o='else ',n=' of an instance of ',m=' is not (yet) ready!");',P="init",O="': ",N=" of class ",M='return value;',L='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',K='return init;',J='var init=this.',I="Error in property ",H='if(init==qx.core.Property.$$inherit)init=null;',G="set",C=" in method ",D='throw new Error("Property ',A='var inherit=prop.$$inherit;',B='return null;',y="setRuntime",z="setThemed",w="inherit",x=" with incoming value '",E="object",F="qx.core.Property";
qx.Bootstrap.define(F,{statics:{__E:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__F:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:w,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:s,dispose:t,inheritable:t,nullable:t,themeable:t,refine:t,init:null,apply:s,event:s,check:null,transform:s,deferredInit:t,validate:null},$$allowedGroupKeys:{name:s,group:E,mode:s,themeable:t},$$inheritable:{},refresh:function(ck){var parent=ck.getLayoutParent();

if(parent){var cn=ck.constructor;
var cp=this.$$store.inherit;
var co=this.$$store.init;
var cm=this.$$method.refresh;
var cq;
var cl;
{};

while(cn){cq=cn.$$properties;

if(cq){for(var name in this.$$inheritable){if(cq[name]&&ck[cm[name]]){cl=parent[cp[name]];

if(cl===undefined){cl=parent[co[name]];
}{};
ck[cm[name]](cl);
}}}cn=cn.superclass;
}}},attach:function(cu){var cv=cu.$$properties;

if(cv){for(var name in cv){this.attachMethods(cu,name,cv[name]);
}}cu.$$propertiesAttached=true;
},attachMethods:function(bJ,name,bK){bK.group?this.__G(bJ,bK,name):this.__H(bJ,bK,name);
},__G:function(bT,bU,name){var cc=qx.Bootstrap.firstUp(name);
var cb=bT.prototype;
var cd=bU.themeable===true;
{};
var ce=[];
var bX=[];

if(cd){var bV=[];
var ca=[];
}var bY="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
ce.push(bY);

if(cd){bV.push(bY);
}
if(bU.mode=="shorthand"){var bW="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
ce.push(bW);

if(cd){bV.push(bW);
}}
for(var i=0,a=bU.group,l=a.length;i<l;i++){{};
ce.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bX.push("this.",this.$$method.reset[a[i]],"();");

if(cd){{};
bV.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
ca.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+cc;
cb[this.$$method.set[name]]=new Function(ce.join(""));
this.$$method.reset[name]="reset"+cc;
cb[this.$$method.reset[name]]=new Function(bX.join(""));

if(cd){this.$$method.setThemed[name]="setThemed"+cc;
cb[this.$$method.setThemed[name]]=new Function(bV.join(""));
this.$$method.resetThemed[name]="resetThemed"+cc;
cb[this.$$method.resetThemed[name]]=new Function(ca.join(""));
}},__H:function(bf,bg,name){var bi=qx.Bootstrap.firstUp(name);
var bk=bf.prototype;
{};
if(bg.dispose===undefined&&typeof bg.check==="string"){bg.dispose=this.__F[bg.check]||qx.Bootstrap.classIsDefined(bg.check)||(qx.Interface&&qx.Interface.isDefined(bg.check));
}var bj=this.$$method;
var bh=this.$$store;
bh.runtime[name]="$$runtime_"+name;
bh.user[name]="$$user_"+name;
bh.theme[name]="$$theme_"+name;
bh.init[name]="$$init_"+name;
bh.inherit[name]="$$inherit_"+name;
bh.useinit[name]="$$useinit_"+name;
bj.get[name]="get"+bi;
bk[bj.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bf,name,"get");
};
bj.set[name]="set"+bi;
bk[bj.set[name]]=function(bP){return qx.core.Property.executeOptimizedSetter(this,bf,name,"set",arguments);
};
bj.reset[name]="reset"+bi;
bk[bj.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bf,name,"reset");
};

if(bg.inheritable||bg.apply||bg.event||bg.deferredInit){bj.init[name]="init"+bi;
bk[bj.init[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,bf,name,"init",arguments);
};
}
if(bg.inheritable){bj.refresh[name]="refresh"+bi;
bk[bj.refresh[name]]=function(cj){return qx.core.Property.executeOptimizedSetter(this,bf,name,"refresh",arguments);
};
}bj.setRuntime[name]="setRuntime"+bi;
bk[bj.setRuntime[name]]=function(ba){return qx.core.Property.executeOptimizedSetter(this,bf,name,"setRuntime",arguments);
};
bj.resetRuntime[name]="resetRuntime"+bi;
bk[bj.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bf,name,"resetRuntime");
};

if(bg.themeable){bj.setThemed[name]="setThemed"+bi;
bk[bj.setThemed[name]]=function(cf){return qx.core.Property.executeOptimizedSetter(this,bf,name,"setThemed",arguments);
};
bj.resetThemed[name]="resetThemed"+bi;
bk[bj.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bf,name,"resetThemed");
};
}
if(bg.check==="Boolean"){bk["toggle"+bi]=new Function("return this."+bj.set[name]+"(!this."+bj.get[name]+"())");
bk["is"+bi]=new Function("return this."+bj.get[name]+"()");
}},__I:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bl,bm,bn,bo,bp){var bq=bl.constructor.classname;
var br=I+bn+N+bq+C+this.$$method[bo][bn]+x+bp+O;
throw new Error(br+(this.__I[bm]||"Unknown reason: "+bm));
},__J:function(T,U,name,V,W,X){var Y=this.$$method[V][name];
{U[Y]=new Function("value",W.join(""));
};
if(qx.core.Variant.isSet("qx.aspects","on")){U[Y]=qx.core.Aspect.wrap(T.classname+"."+Y,U[Y],"property");
}qx.Bootstrap.setDisplayName(U[Y],T.classname+".prototype",Y);
if(X===undefined){return T[Y]();
}else{return T[Y](X[0]);
}},executeOptimizedGetter:function(bs,bt,name,bu){var bw=bt.$$properties[name];
var by=bt.prototype;
var bv=[];
var bx=this.$$store;
bv.push(p,bx.runtime[name],r);
bv.push(u,bx.runtime[name],v);

if(bw.inheritable){bv.push(q,bx.inherit[name],r);
bv.push(u,bx.inherit[name],v);
bv.push(o);
}bv.push(p,bx.user[name],r);
bv.push(u,bx.user[name],v);

if(bw.themeable){bv.push(q,bx.theme[name],r);
bv.push(u,bx.theme[name],v);
}
if(bw.deferredInit&&bw.init===undefined){bv.push(q,bx.init[name],r);
bv.push(u,bx.init[name],v);
}bv.push(o);

if(bw.init!==undefined){if(bw.inheritable){bv.push(J,bx.init[name],v);

if(bw.nullable){bv.push(H);
}else if(bw.init!==undefined){bv.push(u,bx.init[name],v);
}else{bv.push(L,name,n,bt.classname,m);
}bv.push(K);
}else{bv.push(u,bx.init[name],v);
}}else if(bw.inheritable||bw.nullable){bv.push(B);
}else{bv.push(D,name,n,bt.classname,m);
}return this.__J(bs,by,name,bu,bv);
},executeOptimizedSetter:function(bz,bA,name,bB,bC){var bH=bA.$$properties[name];
var bG=bA.prototype;
var bE=[];
var bD=bB===G||bB===z||bB===y||(bB===P&&bH.init===undefined);
var bF=bH.apply||bH.event||bH.inheritable;
var bI=this.__K(bB,name);
this.__L(bE,bH,name,bB,bD);

if(bD){this.__M(bE,bA,bH,name);
}
if(bF){this.__N(bE,bD,bI,bB);
}
if(bH.inheritable){bE.push(A);
}{};

if(!bF){this.__P(bE,name,bB,bD);
}else{this.__Q(bE,bH,name,bB,bD);
}
if(bH.inheritable){this.__R(bE,bH,name,bB);
}else if(bF){this.__S(bE,bH,name,bB);
}
if(bF){this.__T(bE,bH,name);
if(bH.inheritable&&bG._getChildren){this.__U(bE,name);
}}if(bD){bE.push(M);
}return this.__J(bz,bG,name,bB,bE,bC);
},__K:function(cw,name){if(cw==="setRuntime"||cw==="resetRuntime"){var cx=this.$$store.runtime[name];
}else if(cw==="setThemed"||cw==="resetThemed"){cx=this.$$store.theme[name];
}else if(cw==="init"){cx=this.$$store.init[name];
}else{cx=this.$$store.user[name];
}return cx;
},__L:function(bL,bM,name,bN,bO){{if(!bM.nullable||bM.check||bM.inheritable){bL.push('var prop=qx.core.Property;');
}if(bN==="set"){bL.push('if(value===undefined)prop.error(this,2,"',name,'","',bN,'",value);');
}};
},__M:function(bQ,bR,bS,name){if(bS.transform){bQ.push('value=this.',bS.transform,'(value);');
}if(bS.validate){if(typeof bS.validate==="string"){bQ.push('this.',bS.validate,'(value);');
}else if(bS.validate instanceof Function){bQ.push(bR.classname,'.$$properties.',name);
bQ.push('.validate.call(this, value);');
}}},__N:function(c,d,e,f){var g=(f==="reset"||f==="resetThemed"||f==="resetRuntime");

if(d){c.push('if(this.',e,'===value)return value;');
}else if(g){c.push('if(this.',e,'===undefined)return;');
}},__O:undefined,__P:function(h,name,j,k){if(j==="setRuntime"){h.push('this.',this.$$store.runtime[name],'=value;');
}else if(j==="resetRuntime"){h.push('if(this.',this.$$store.runtime[name],'!==undefined)');
h.push('delete this.',this.$$store.runtime[name],';');
}else if(j==="set"){h.push('this.',this.$$store.user[name],'=value;');
}else if(j==="reset"){h.push('if(this.',this.$$store.user[name],'!==undefined)');
h.push('delete this.',this.$$store.user[name],';');
}else if(j==="setThemed"){h.push('this.',this.$$store.theme[name],'=value;');
}else if(j==="resetThemed"){h.push('if(this.',this.$$store.theme[name],'!==undefined)');
h.push('delete this.',this.$$store.theme[name],';');
}else if(j==="init"&&k){h.push('this.',this.$$store.init[name],'=value;');
}},__Q:function(bb,bc,name,bd,be){if(bc.inheritable){bb.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{bb.push('var computed, old;');
}bb.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(bd==="setRuntime"){bb.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(bd==="resetRuntime"){bb.push('delete this.',this.$$store.runtime[name],';');
bb.push('if(this.',this.$$store.user[name],'!==undefined)');
bb.push('computed=this.',this.$$store.user[name],';');
bb.push('else if(this.',this.$$store.theme[name],'!==undefined)');
bb.push('computed=this.',this.$$store.theme[name],';');
bb.push('else if(this.',this.$$store.init[name],'!==undefined){');
bb.push('computed=this.',this.$$store.init[name],';');
bb.push('this.',this.$$store.useinit[name],'=true;');
bb.push('}');
}else{bb.push('old=computed=this.',this.$$store.runtime[name],';');
if(bd==="set"){bb.push('this.',this.$$store.user[name],'=value;');
}else if(bd==="reset"){bb.push('delete this.',this.$$store.user[name],';');
}else if(bd==="setThemed"){bb.push('this.',this.$$store.theme[name],'=value;');
}else if(bd==="resetThemed"){bb.push('delete this.',this.$$store.theme[name],';');
}else if(bd==="init"&&be){bb.push('this.',this.$$store.init[name],'=value;');
}}bb.push('}');
bb.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(bd==="set"){if(!bc.inheritable){bb.push('old=this.',this.$$store.user[name],';');
}bb.push('computed=this.',this.$$store.user[name],'=value;');
}else if(bd==="reset"){if(!bc.inheritable){bb.push('old=this.',this.$$store.user[name],';');
}bb.push('delete this.',this.$$store.user[name],';');
bb.push('if(this.',this.$$store.runtime[name],'!==undefined)');
bb.push('computed=this.',this.$$store.runtime[name],';');
bb.push('if(this.',this.$$store.theme[name],'!==undefined)');
bb.push('computed=this.',this.$$store.theme[name],';');
bb.push('else if(this.',this.$$store.init[name],'!==undefined){');
bb.push('computed=this.',this.$$store.init[name],';');
bb.push('this.',this.$$store.useinit[name],'=true;');
bb.push('}');
}else{if(bd==="setRuntime"){bb.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(bc.inheritable){bb.push('computed=this.',this.$$store.user[name],';');
}else{bb.push('old=computed=this.',this.$$store.user[name],';');
}if(bd==="setThemed"){bb.push('this.',this.$$store.theme[name],'=value;');
}else if(bd==="resetThemed"){bb.push('delete this.',this.$$store.theme[name],';');
}else if(bd==="init"&&be){bb.push('this.',this.$$store.init[name],'=value;');
}}bb.push('}');
if(bc.themeable){bb.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!bc.inheritable){bb.push('old=this.',this.$$store.theme[name],';');
}
if(bd==="setRuntime"){bb.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(bd==="set"){bb.push('computed=this.',this.$$store.user[name],'=value;');
}else if(bd==="setThemed"){bb.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(bd==="resetThemed"){bb.push('delete this.',this.$$store.theme[name],';');
bb.push('if(this.',this.$$store.init[name],'!==undefined){');
bb.push('computed=this.',this.$$store.init[name],';');
bb.push('this.',this.$$store.useinit[name],'=true;');
bb.push('}');
}else if(bd==="init"){if(be){bb.push('this.',this.$$store.init[name],'=value;');
}bb.push('computed=this.',this.$$store.theme[name],';');
}else if(bd==="refresh"){bb.push('computed=this.',this.$$store.theme[name],';');
}bb.push('}');
}bb.push('else if(this.',this.$$store.useinit[name],'){');

if(!bc.inheritable){bb.push('old=this.',this.$$store.init[name],';');
}
if(bd==="init"){if(be){bb.push('computed=this.',this.$$store.init[name],'=value;');
}else{bb.push('computed=this.',this.$$store.init[name],';');
}}else if(bd==="set"||bd==="setRuntime"||bd==="setThemed"||bd==="refresh"){bb.push('delete this.',this.$$store.useinit[name],';');

if(bd==="setRuntime"){bb.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(bd==="set"){bb.push('computed=this.',this.$$store.user[name],'=value;');
}else if(bd==="setThemed"){bb.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(bd==="refresh"){bb.push('computed=this.',this.$$store.init[name],';');
}}bb.push('}');
if(bd==="set"||bd==="setRuntime"||bd==="setThemed"||bd==="init"){bb.push('else{');

if(bd==="setRuntime"){bb.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(bd==="set"){bb.push('computed=this.',this.$$store.user[name],'=value;');
}else if(bd==="setThemed"){bb.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(bd==="init"){if(be){bb.push('computed=this.',this.$$store.init[name],'=value;');
}else{bb.push('computed=this.',this.$$store.init[name],';');
}bb.push('this.',this.$$store.useinit[name],'=true;');
}bb.push('}');
}},__R:function(Q,R,name,S){Q.push('if(computed===undefined||computed===inherit){');

if(S==="refresh"){Q.push('computed=value;');
}else{Q.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}Q.push('if((computed===undefined||computed===inherit)&&');
Q.push('this.',this.$$store.init[name],'!==undefined&&');
Q.push('this.',this.$$store.init[name],'!==inherit){');
Q.push('computed=this.',this.$$store.init[name],';');
Q.push('this.',this.$$store.useinit[name],'=true;');
Q.push('}else{');
Q.push('delete this.',this.$$store.useinit[name],';}');
Q.push('}');
Q.push('if(old===computed)return value;');
Q.push('if(computed===inherit){');
Q.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
Q.push('}');
Q.push('else if(computed===undefined)');
Q.push('delete this.',this.$$store.inherit[name],';');
Q.push('else this.',this.$$store.inherit[name],'=computed;');
Q.push('var backup=computed;');
if(R.init!==undefined&&S!=="init"){Q.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{Q.push('if(old===undefined)old=null;');
}Q.push('if(computed===undefined||computed==inherit)computed=null;');
},__S:function(cg,ch,name,ci){if(ci!=="set"&&ci!=="setRuntime"&&ci!=="setThemed"){cg.push('if(computed===undefined)computed=null;');
}cg.push('if(old===computed)return value;');
if(ch.init!==undefined&&ci!=="init"){cg.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cg.push('if(old===undefined)old=null;');
}},__T:function(cs,ct,name){if(ct.apply){cs.push('this.',ct.apply,'(computed, old, "',name,'");');
}if(ct.event){cs.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",ct.event,"')){","reg.fireEvent(this, '",ct.event,"', qx.event.type.Data, [computed, old]",")}");
}},__U:function(cr,name){cr.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
cr.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
cr.push('}');
}}});
})();
(function(){var e="qx.core.Aspect",d="before",c="*",b="static";
qx.Bootstrap.define(e,{statics:{__V:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__V;
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
},addAdvice:function(f,g,h,name){this.__V.push({fcn:f,pos:g===d?-1:1,type:h,name:name});
}}});
})();
(function(){var w="qx.aspects",v="on",u=".",t="static",s="constructor",r="[Class ",q="]",p="toString",o="member",n="$$init_",f=".prototype",m="destructor",j="extend",e="destruct",d="Class",h="off",g="qx.Class",k="singleton",c="qx.event.type.Data";
qx.Bootstrap.define(g,{statics:{define:function(name,bk){if(!bk){var bk={};
}if(bk.include&&!(bk.include instanceof Array)){bk.include=[bk.include];
}if(bk.implement&&!(bk.implement instanceof Array)){bk.implement=[bk.implement];
}if(!bk.hasOwnProperty(j)&&!bk.type){bk.type=t;
}{};
var bm=this.__bb(name,bk.type,bk.extend,bk.statics,bk.construct,bk.destruct);
if(bk.extend){if(bk.properties){this.__bd(bm,bk.properties,true);
}if(bk.members){this.__bf(bm,bk.members,true,true,false);
}if(bk.events){this.__bc(bm,bk.events,true);
}if(bk.include){for(var i=0,l=bk.include.length;i<l;i++){this.__bi(bm,bk.include[i],false);
}}}if(bk.settings){for(var bl in bk.settings){qx.core.Setting.define(bl,bk.settings[bl]);
}}if(bk.variants){for(var bl in bk.variants){qx.core.Variant.define(bl,bk.variants[bl].allowedValues,bk.variants[bl].defaultValue);
}}if(bk.implement){for(var i=0,l=bk.implement.length;i<l;i++){this.__bh(bm,bk.implement[i]);
}}{};
if(bk.defer){bk.defer.self=bm;
bk.defer(bm,bm.prototype,{add:function(name,bg){var bh={};
bh[name]=bg;
qx.Class.__bd(bm,bh,true);
}});
}return bm;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(bc,bd){{};
qx.Class.__bi(bc,bd,false);
},patch:function(W,X){{};
qx.Class.__bi(W,X,true);
},isSubClassOf:function(bN,bO){if(!bN){return false;
}
if(bN==bO){return true;
}
if(bN.prototype instanceof bO){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(y){var z=[];

while(y){if(y.$$properties){z.push.apply(z,qx.Bootstrap.getKeys(y.$$properties));
}y=y.superclass;
}return z;
},getByProperty:function(bM,name){while(bM){if(bM.$$properties&&bM.$$properties[name]){return bM;
}bM=bM.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(bi,bj){return bi.$$includes&&bi.$$includes.indexOf(bj)!==-1;
},getByMixin:function(Y,ba){var bb,i,l;

while(Y){if(Y.$$includes){bb=Y.$$flatIncludes;

for(i=0,l=bb.length;i<l;i++){if(bb[i]===ba){return Y;
}}}Y=Y.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(be,bf){return !!this.getByMixin(be,bf);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(br){var bs=[];

while(br){if(br.$$implements){bs.push.apply(bs,br.$$flatImplements);
}br=br.superclass;
}return bs;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(bC,bD){var bE=bC.constructor;

if(this.hasInterface(bE,bD)){return true;
}
try{qx.Interface.assertObject(bC,bD);
return true;
}catch(N){}
try{qx.Interface.assert(bE,bD,false);
return true;
}catch(x){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return r+this.classname+q;
},$$registry:qx.Bootstrap.$$registry,__W:null,__X:null,__Y:function(){},__ba:function(){},__bb:function(name,bP,bQ,bR,bS,bT){var bY;

if(!bQ&&qx.core.Variant.isSet(w,h)){bY=bR||{};
qx.Bootstrap.setDisplayNames(bY,name);
}else{bY={};

if(bQ){if(!bS){bS=this.__bj();
}bY=this.__bl(bS,name,bP);
qx.Bootstrap.setDisplayName(bS,name,s);
}if(bR){qx.Bootstrap.setDisplayNames(bR,name);
var ca;

for(var i=0,a=qx.Bootstrap.getKeys(bR),l=a.length;i<l;i++){ca=a[i];
var bV=bR[ca];

if(qx.core.Variant.isSet(w,v)){if(bV instanceof Function){bV=qx.core.Aspect.wrap(name+u+ca,bV,t);
}bY[ca]=bV;
}else{bY[ca]=bV;
}}}}var bX=qx.Bootstrap.createNamespace(name,bY,false);
bY.name=bY.classname=name;
bY.basename=bX;
bY.$$type=d;

if(bP){bY.$$classtype=bP;
}if(!bY.hasOwnProperty(p)){bY.toString=this.genericToString;
}
if(bQ){var cb=bQ.prototype;
var bU=this.__bk();
bU.prototype=cb;
var bW=new bU;
bY.prototype=bW;
bW.name=bW.classname=name;
bW.basename=bX;
bS.base=bY.superclass=bQ;
bS.self=bY.constructor=bW.constructor=bY;
if(bT){if(qx.core.Variant.isSet(w,v)){bT=qx.core.Aspect.wrap(name,bT,m);
}bY.$$destructor=bT;
qx.Bootstrap.setDisplayName(bT,name,e);
}}this.$$registry[name]=bY;
return bY;
},__bc:function(bt,bu,bv){var bw,bw;
{};

if(bt.$$events){for(var bw in bu){bt.$$events[bw]=bu[bw];
}}else{bt.$$events=bu;
}},__bd:function(D,E,F){var H;

if(F===undefined){F=false;
}var G=!!D.$$propertiesAttached;

for(var name in E){H=E[name];
{};
H.name=name;
if(!H.refine){if(D.$$properties===undefined){D.$$properties={};
}D.$$properties[name]=H;
}if(H.init!==undefined){D.prototype[n+name]=H.init;
}if(H.event!==undefined){var event={};
event[H.event]=c;
this.__bc(D,event,F);
}if(H.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(G){qx.core.Property.attachMethods(D,name,H);
}}},__be:null,__bf:function(O,P,Q,R,S){var T=O.prototype;
var V,U;
qx.Bootstrap.setDisplayNames(P,O.classname+f);

for(var i=0,a=qx.Bootstrap.getKeys(P),l=a.length;i<l;i++){V=a[i];
U=P[V];
{};
if(R!==false&&U instanceof Function&&U.$$type==null){if(S==true){U=this.__bg(U,T[V]);
}else{if(T[V]){U.base=T[V];
}U.self=O;
}
if(qx.core.Variant.isSet(w,v)){U=qx.core.Aspect.wrap(O.classname+u+V,U,o);
}}T[V]=U;
}},__bg:function(bn,bo){if(bo){return function(){var bq=bn.base;
bn.base=bo;
var bp=bn.apply(this,arguments);
bn.base=bq;
return bp;
};
}else{return bn;
}},__bh:function(I,J){{};
var K=qx.Interface.flatten([J]);

if(I.$$implements){I.$$implements.push(J);
I.$$flatImplements.push.apply(I.$$flatImplements,K);
}else{I.$$implements=[J];
I.$$flatImplements=K;
}},__bi:function(bx,by,bz){{};

if(this.hasMixin(bx,by)){return;
}var bB=qx.Mixin.flatten([by]);
var bA;

for(var i=0,l=bB.length;i<l;i++){bA=bB[i];
if(bA.$$events){this.__bc(bx,bA.$$events,bz);
}if(bA.$$properties){this.__bd(bx,bA.$$properties,bz);
}if(bA.$$members){this.__bf(bx,bA.$$members,bz,bz,bz);
}}if(bx.$$includes){bx.$$includes.push(by);
bx.$$flatIncludes.push.apply(bx.$$flatIncludes,bB);
}else{bx.$$includes=[by];
bx.$$flatIncludes=bB;
}},__bj:function(){function b(){arguments.callee.base.apply(this,arguments);
}return b;
},__bk:function(){return function(){};
},__bl:function(bI,name,bJ){var bL=function(){var C=arguments.callee.constructor;
{};
if(!C.$$propertiesAttached){qx.core.Property.attach(C);
}var B=C.$$original.apply(this,arguments);
if(C.$$includes){var A=C.$$flatIncludes;

for(var i=0,l=A.length;i<l;i++){if(A[i].$$constructor){A[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return B;
};

if(qx.core.Variant.isSet(w,v)){var bK=qx.core.Aspect.wrap(name,bL,s);
bL.$$original=bI;
bL.constructor=bK;
bL=bK;
}if(bJ===k){bL.getInstance=this.getInstance;
}bL.$$original=bI;
bI.wrapper=bL;
return bL;
}},defer:function(){if(qx.core.Variant.isSet(w,v)){for(var bF in qx.Bootstrap.$$registry){var bG=qx.Bootstrap.$$registry[bF];

for(var bH in bG){if(bG[bH] instanceof Function){bG[bH]=qx.core.Aspect.wrap(bF+u+bH,bG[bH],t);
}}}}}});
})();
(function(){var f="$$hash",e="qx.core.ObjectRegistry";
qx.Class.define(e,{statics:{inShutDown:false,__bm:{},__bn:0,__bo:[],register:function(u){var x=this.__bm;

if(!x){return;
}var w=u.$$hash;

if(w==null){var v=this.__bo;

if(v.length>0){w=v.pop();
}else{w=(this.__bn++).toString(36);
}u.$$hash=w;
}{};
x[w]=u;
},unregister:function(m){var n=m.$$hash;

if(n==null){return;
}var o=this.__bm;

if(o&&o[n]){delete o[n];
this.__bo.push(n);
}try{delete m.$$hash;
}catch(z){if(m.removeAttribute){m.removeAttribute(f);
}}},toHashCode:function(h){{};
var k=h.$$hash;

if(k!=null){return k;
}var j=this.__bo;

if(j.length>0){k=j.pop();
}else{k=(this.__bn++).toString(36);
}return h.$$hash=k;
},clearHashCode:function(c){{};
var d=c.$$hash;

if(d!=null){this.__bo.push(d);
try{delete c.$$hash;
}catch(p){if(c.removeAttribute){c.removeAttribute(f);
}}}},fromHashCode:function(y){return this.__bm[y]||null;
},shutdown:function(){this.inShutDown=true;
var r=this.__bm;
var t=[];

for(var s in r){t.push(s);
}t.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var q,i=0,l=t.length;

while(true){try{for(;i<l;i++){s=t[i];
q=r[s];

if(q&&q.dispose){q.dispose();
}}}catch(g){qx.Bootstrap.error(this,"Could not dispose object "+q.toString()+": "+g);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__bm;
},getRegistry:function(){return this.__bm;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var k="qx.client",j="on",i="function",h="mousedown",g="qx.bom.Event",f="return;",d="mouseover",c="HTMLEvents";
qx.Class.define(g,{statics:{addNativeListener:qx.core.Variant.select(k,{"mshtml":function(o,p,q){o.attachEvent(j+p,q);
},"default":function(A,B,C){A.addEventListener(B,C,false);
}}),removeNativeListener:qx.core.Variant.select(k,{"mshtml":function(l,m,n){try{l.detachEvent(j+m,n);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(t,u,v){t.removeEventListener(u,v,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(k,{"mshtml":function(e){if(e.type===d){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(k,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==h&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(s){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(r){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(D,E){if(document.createEventObject){var F=document.createEventObject();
return D.fireEvent(j+E,F);
}else{var F=document.createEvent(c);
F.initEvent(E,true,true);
return !D.dispatchEvent(F);
}},supportsEvent:qx.core.Variant.select(k,{"webkit":function(a,b){return a.hasOwnProperty(j+b);
},"default":function(w,x){var y=j+x;
var z=(y in w);

if(!z){z=typeof w[y]==i;

if(!z&&w.setAttribute){w.setAttribute(y,f);
z=typeof w[y]==i;
w.removeAttribute(y);
}}return z;
}})}});
})();
(function(){var p="|bubble",o="|capture",n="|",m="_",k="unload",j="UNKNOWN_",h="DOM_",g="__bu",f="c",e="__bt",b="WIN_",d="capture",c="qx.event.Manager",a="QX_";
qx.Class.define(c,{extend:Object,construct:function(bB,bC){this.__bp=bB;
this.__bq=qx.core.ObjectRegistry.toHashCode(bB);
this.__br=bC;
if(bB.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bB,k,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bB,k,arguments.callee);
self.dispose();
}));
}this.__bs={};
this.__bt={};
this.__bu={};
this.__bv={};
},statics:{__bw:0,getNextUniqueId:function(){return (this.__bw++).toString(36);
}},members:{__br:null,__bs:null,__bu:null,__bx:null,__bt:null,__bv:null,__bp:null,__bq:null,getWindow:function(){return this.__bp;
},getWindowId:function(){return this.__bq;
},getHandler:function(cC){var cD=this.__bt[cC.classname];

if(cD){return cD;
}return this.__bt[cC.classname]=new cC(this);
},getDispatcher:function(A){var B=this.__bu[A.classname];

if(B){return B;
}return this.__bu[A.classname]=new A(this,this.__br);
},getListeners:function(C,D,E){var F=C.$$hash||qx.core.ObjectRegistry.toHashCode(C);
var H=this.__bs[F];

if(!H){return null;
}var I=D+(E?o:p);
var G=H[I];
return G?G.concat():null;
},serializeListeners:function(U){var bc=U.$$hash||qx.core.ObjectRegistry.toHashCode(U);
var be=this.__bs[bc];
var ba=[];

if(be){var X,bd,V,Y,bb;

for(var W in be){X=W.indexOf(n);
bd=W.substring(0,X);
V=W.charAt(X+1)==f;
Y=be[W];

for(var i=0,l=Y.length;i<l;i++){bb=Y[i];
ba.push({self:bb.context,handler:bb.handler,type:bd,capture:V});
}}}return ba;
},toggleAttachedEvents:function(bs,bt){var by=bs.$$hash||qx.core.ObjectRegistry.toHashCode(bs);
var bA=this.__bs[by];

if(bA){var bv,bz,bu,bw;

for(var bx in bA){bv=bx.indexOf(n);
bz=bx.substring(0,bv);
bu=bx.charCodeAt(bv+1)===99;
bw=bA[bx];

if(bt){this.__by(bs,bz,bu);
}else{this.__bz(bs,bz,bu);
}}}},hasListener:function(cv,cw,cx){{};
var cy=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cA=this.__bs[cy];

if(!cA){return false;
}var cB=cw+(cx?o:p);
var cz=cA[cB];
return cz&&cz.length>0;
},importListeners:function(bf,bg){{};
var bm=bf.$$hash||qx.core.ObjectRegistry.toHashCode(bf);
var bn=this.__bs[bm]={};
var bj=qx.event.Manager;

for(var bh in bg){var bk=bg[bh];
var bl=bk.type+(bk.capture?o:p);
var bi=bn[bl];

if(!bi){bi=bn[bl]=[];
this.__by(bf,bk.type,bk.capture);
}bi.push({handler:bk.listener,context:bk.self,unique:bk.unique||(bj.__bw++).toString(36)});
}},addListener:function(ck,cl,cm,self,cn){var cr;
{};
var cs=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var cu=this.__bs[cs];

if(!cu){cu=this.__bs[cs]={};
}var cq=cl+(cn?o:p);
var cp=cu[cq];

if(!cp){cp=cu[cq]=[];
}if(cp.length===0){this.__by(ck,cl,cn);
}var ct=(qx.event.Manager.__bw++).toString(36);
var co={handler:cm,context:self,unique:ct};
cp.push(co);
return cq+n+ct;
},findHandler:function(bW,bX){var ci=false,cb=false,cj=false;
var ch;

if(bW.nodeType===1){ci=true;
ch=h+bW.tagName.toLowerCase()+m+bX;
}else if(bW==this.__bp){cb=true;
ch=b+bX;
}else if(bW.classname){cj=true;
ch=a+bW.classname+m+bX;
}else{ch=j+bW+m+bX;
}var cd=this.__bv;

if(cd[ch]){return cd[ch];
}var cg=this.__br.getHandlers();
var cc=qx.event.IEventHandler;
var ce,cf,ca,bY;

for(var i=0,l=cg.length;i<l;i++){ce=cg[i];
ca=ce.SUPPORTED_TYPES;

if(ca&&!ca[bX]){continue;
}bY=ce.TARGET_CHECK;

if(bY){if(!ci&&bY===cc.TARGET_DOMNODE){continue;
}else if(!cb&&bY===cc.TARGET_WINDOW){continue;
}else if(!cj&&bY===cc.TARGET_OBJECT){continue;
}}cf=this.getHandler(cg[i]);

if(ce.IGNORE_CAN_HANDLE||cf.canHandleEvent(bW,bX)){cd[ch]=cf;
return cf;
}}return null;
},__by:function(bo,bp,bq){var br=this.findHandler(bo,bp);

if(br){br.registerEvent(bo,bp,bq);
return;
}{};
},removeListener:function(q,r,s,self,t){var x;
{};
var y=q.$$hash||qx.core.ObjectRegistry.toHashCode(q);
var z=this.__bs[y];

if(!z){return false;
}var u=r+(t?o:p);
var v=z[u];

if(!v){return false;
}var w;

for(var i=0,l=v.length;i<l;i++){w=v[i];

if(w.handler===s&&w.context===self){qx.lang.Array.removeAt(v,i);

if(v.length==0){this.__bz(q,r,t);
}return true;
}}return false;
},removeListenerById:function(bD,bE){var bK;
{};
var bI=bE.split(n);
var bN=bI[0];
var bF=bI[1].charCodeAt(0)==99;
var bM=bI[2];
var bL=bD.$$hash||qx.core.ObjectRegistry.toHashCode(bD);
var bO=this.__bs[bL];

if(!bO){return false;
}var bJ=bN+(bF?o:p);
var bH=bO[bJ];

if(!bH){return false;
}var bG;

for(var i=0,l=bH.length;i<l;i++){bG=bH[i];

if(bG.unique===bM){qx.lang.Array.removeAt(bH,i);

if(bH.length==0){this.__bz(bD,bN,bF);
}return true;
}}return false;
},removeAllListeners:function(bP){var bT=bP.$$hash||qx.core.ObjectRegistry.toHashCode(bP);
var bV=this.__bs[bT];

if(!bV){return false;
}var bR,bU,bQ;

for(var bS in bV){if(bV[bS].length>0){bR=bS.split(n);
bU=bR[0];
bQ=bR[1]===d;
this.__bz(bP,bU,bQ);
}}delete this.__bs[bT];
return true;
},__bz:function(J,K,L){var M=this.findHandler(J,K);

if(M){M.unregisterEvent(J,K,L);
return;
}{};
},dispatchEvent:function(N,event){var S;
{};
var T=event.getType();

if(!event.getBubbles()&&!this.hasListener(N,T)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(N);
}var R=this.__br.getDispatchers();
var Q;
var P=false;

for(var i=0,l=R.length;i<l;i++){Q=this.getDispatcher(R[i]);
if(Q.canDispatchEvent(N,event,T)){Q.dispatchEvent(N,event,T);
P=true;
break;
}}
if(!P){qx.log.Logger.error(this,"No dispatcher can handle event of type "+T+" on "+N);
return true;
}var O=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !O;
},dispose:function(){this.__br.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,e);
qx.util.DisposeUtil.disposeMap(this,g);
this.__bs=this.__bp=this.__bx=null;
this.__br=this.__bv=null;
}}});
})();
(function(){var h="qx.dom.Node",g="qx.client",f="";
qx.Class.define(h,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(m){return m.nodeType===
this.DOCUMENT?m:
m.ownerDocument||m.document;
},getWindow:qx.core.Variant.select(g,{"mshtml":function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.parentWindow;
},"default":function(s){if(s.nodeType==null){return s;
}if(s.nodeType!==this.DOCUMENT){s=s.ownerDocument;
}return s.defaultView;
}}),getDocumentElement:function(t){return this.getDocument(t).documentElement;
},getBodyElement:function(b){return this.getDocument(b).body;
},isNode:function(q){return !!(q&&q.nodeType!=null);
},isElement:function(k){return !!(k&&k.nodeType===this.ELEMENT);
},isDocument:function(j){return !!(j&&j.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(r){return !!(r&&r.history&&r.location&&r.document);
},isNodeName:function(c,d){if(!d||!c||!c.nodeName){return false;
}return d.toLowerCase()==qx.dom.Node.getName(c);
},getName:function(l){if(!l||!l.nodeName){return null;
}return l.nodeName.toLowerCase();
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(f);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var H="mshtml",G="qx.client",F="[object Array]",E="qx.lang.Array",D="qx",C="number",B="string";
qx.Class.define(E,{statics:{toArray:function(bl,bm){return this.cast(bl,Array,bm);
},cast:function(L,M,N){if(L.constructor===M){return L;
}
if(qx.Class.hasInterface(L,qx.data.IListData)){var L=L.toArray();
}var O=new M;
if(qx.core.Variant.isSet(G,H)){if(L.item){for(var i=N||0,l=L.length;i<l;i++){O.push(L[i]);
}return O;
}}if(Object.prototype.toString.call(L)===F&&N==null){O.push.apply(O,L);
}else{O.push.apply(O,Array.prototype.slice.call(L,N||0));
}return O;
},fromArguments:function(j,k){return Array.prototype.slice.call(j,k||0);
},fromCollection:function(bj){if(qx.core.Variant.isSet(G,H)){if(bj.item){var bk=[];

for(var i=0,l=bj.length;i<l;i++){bk[i]=bj[i];
}return bk;
}}return Array.prototype.slice.call(bj,0);
},fromShortHand:function(o){var q=o.length;
var p=qx.lang.Array.clone(o);
switch(q){case 1:p[1]=p[2]=p[3]=p[0];
break;
case 2:p[2]=p[0];
case 3:p[3]=p[1];
}return p;
},clone:function(A){return A.concat();
},insertAt:function(e,f,i){e.splice(i,0,f);
return e;
},insertBefore:function(b,c,d){var i=b.indexOf(d);

if(i==-1){b.push(c);
}else{b.splice(i,0,c);
}return b;
},insertAfter:function(bg,bh,bi){var i=bg.indexOf(bi);

if(i==-1||i==(bg.length-1)){bg.push(bh);
}else{bg.splice(i+1,0,bh);
}return bg;
},removeAt:function(bd,i){return bd.splice(i,1)[0];
},removeAll:function(v){v.length=0;
return this;
},append:function(be,bf){{};
Array.prototype.push.apply(be,bf);
return be;
},exclude:function(r,s){{};

for(var i=0,u=s.length,t;i<u;i++){t=r.indexOf(s[i]);

if(t!=-1){r.splice(t,1);
}}return r;
},remove:function(w,x){var i=w.indexOf(x);

if(i!=-1){w.splice(i,1);
return x;
}},contains:function(y,z){return y.indexOf(z)!==-1;
},equals:function(m,n){var length=m.length;

if(length!==n.length){return false;
}
for(var i=0;i<length;i++){if(m[i]!==n[i]){return false;
}}return true;
},sum:function(g){var h=0;

for(var i=0,l=g.length;i<l;i++){h+=g[i];
}return h;
},max:function(bn){{};
var i,bp=bn.length,bo=bn[0];

for(i=1;i<bp;i++){if(bn[i]>bo){bo=bn[i];
}}return bo===undefined?null:bo;
},min:function(I){{};
var i,K=I.length,J=I[0];

for(i=1;i<K;i++){if(I[i]<J){J=I[i];
}}return J===undefined?null:J;
},unique:function(P){var ba=[],R={},U={},W={};
var V,Q=0;
var bb=D+qx.lang.Date.now();
var S=false,Y=false,bc=false;
for(var i=0,X=P.length;i<X;i++){V=P[i];
if(V===null){if(!S){S=true;
ba.push(V);
}}else if(V===undefined){}else if(V===false){if(!Y){Y=true;
ba.push(V);
}}else if(V===true){if(!bc){bc=true;
ba.push(V);
}}else if(typeof V===B){if(!R[V]){R[V]=1;
ba.push(V);
}}else if(typeof V===C){if(!U[V]){U[V]=1;
ba.push(V);
}}else{T=V[bb];

if(T==null){T=V[bb]=Q++;
}
if(!W[T]){W[T]=V;
ba.push(V);
}}}for(var T in W){try{delete W[T][bb];
}catch(a){try{W[T][bb]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+T+"]["+bb+"]");
}}}return ba;
}}});
})();
(function(){var l="()",k=".",j=".prototype.",i='anonymous()',h="qx.lang.Function",g=".constructor()";
qx.Class.define(h,{statics:{getCaller:function(f){return f.caller?f.caller.callee:f.callee.caller;
},getName:function(s){if(s.displayName){return s.displayName;
}
if(s.$$original||s.wrapper||s.classname){return s.classname+g;
}
if(s.$$mixin){for(var u in s.$$mixin.$$members){if(s.$$mixin.$$members[u]==s){return s.$$mixin.name+j+u+l;
}}for(var u in s.$$mixin){if(s.$$mixin[u]==s){return s.$$mixin.name+k+u+l;
}}}
if(s.self){var v=s.self.constructor;

if(v){for(var u in v.prototype){if(v.prototype[u]==s){return v.classname+j+u+l;
}}for(var u in v){if(v[u]==s){return v.classname+k+u+l;
}}}}var t=s.toString().match(/function\s*(\w*)\s*\(.*/);

if(t&&t.length>=1&&t[1]){return t[1]+l;
}return i;
},globalEval:function(F){if(window.execScript){return window.execScript(F);
}else{return eval.call(window,F);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(z,A){{};
if(!A){return z;
}if(!(A.self||A.args||A.delay!=null||A.periodical!=null||A.attempt)){return z;
}return function(event){{};
var x=qx.lang.Array.fromArguments(arguments);
if(A.args){x=A.args.concat(x);
}
if(A.delay||A.periodical){var w=qx.event.GlobalError.observeMethod(function(){return z.apply(A.self||this,x);
});

if(A.delay){return window.setTimeout(w,A.delay);
}
if(A.periodical){return window.setInterval(w,A.periodical);
}}else if(A.attempt){var y=false;

try{y=z.apply(A.self||this,x);
}catch(E){}return y;
}else{return z.apply(A.self||this,x);
}};
},bind:function(G,self,H){return this.create(G,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(a,b){return this.create(a,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(B,self,C){if(arguments.length<3){return function(event){return B.call(self||this,event||window.event);
};
}else{var D=qx.lang.Array.fromArguments(arguments,2);
return function(event){var e=[event||window.event];
e.push.apply(e,D);
B.apply(self||this,e);
};
}},attempt:function(c,self,d){return this.create(c,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(m,n,self,o){return this.create(m,{delay:n,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(p,q,self,r){return this.create(p,{periodical:q,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var s="qx.event.Registration";
qx.Class.define(s,{statics:{__bA:{},getManager:function(p){if(p==null){{};
p=window;
}else if(p.nodeType){p=qx.dom.Node.getWindow(p);
}else if(!qx.dom.Node.isWindow(p)){p=window;
}var r=p.$$hash||qx.core.ObjectRegistry.toHashCode(p);
var q=this.__bA[r];

if(!q){q=new qx.event.Manager(p,this);
this.__bA[r]=q;
}return q;
},removeManager:function(n){var o=n.getWindowId();
delete this.__bA[o];
},addListener:function(t,u,v,self,w){return this.getManager(t).addListener(t,u,v,self,w);
},removeListener:function(K,L,M,self,N){return this.getManager(K).removeListener(K,L,M,self,N);
},removeListenerById:function(O,P){return this.getManager(O).removeListenerById(O,P);
},removeAllListeners:function(m){return this.getManager(m).removeAllListeners(m);
},hasListener:function(x,y,z){return this.getManager(x).hasListener(x,y,z);
},serializeListeners:function(B){return this.getManager(B).serializeListeners(B);
},createEvent:function(c,d,e){{};
if(d==null){d=qx.event.type.Event;
}var f=qx.event.Pool.getInstance().getObject(d);

if(!f){return;
}e?f.init.apply(f,e):f.init();
if(c){f.setType(c);
}return f;
},dispatchEvent:function(Q,event){return this.getManager(Q).dispatchEvent(Q,event);
},fireEvent:function(g,h,i,j){var k;
{};
var l=this.createEvent(h,i||null,j);
return this.getManager(g).dispatchEvent(g,l);
},fireNonBubblingEvent:function(C,D,E,F){{};
var G=this.getManager(C);

if(!G.hasListener(C,D,false)){return true;
}var H=this.createEvent(D,E||null,F);
return G.dispatchEvent(C,H);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bB:[],addHandler:function(A){{};
this.__bB.push(A);
this.__bB.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bB;
},__bC:[],addDispatcher:function(I,J){{};
this.__bC.push(I);
this.__bC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bC;
}}});
})();
(function(){var h="qx.log.appender.RingBuffer";
qx.Class.define(h,{extend:Object,construct:function(i){this.__bD=[];
this.setMaxMessages(i||50);
},members:{__bE:0,__bD:null,__bF:50,setMaxMessages:function(g){this.__bF=g;
this.clearHistory();
},getMaxMessages:function(){return this.__bF;
},process:function(a){var b=this.getMaxMessages();

if(this.__bD.length<b){this.__bD.push(a);
}else{this.__bD[this.__bE++]=a;

if(this.__bE>=b){this.__bE=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bD.length){c=this.__bD.length;
}
if(this.__bD.length==this.getMaxMessages()){var e=this.__bE-1;
}else{e=this.__bD.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bD.length;
}var f;

if(d<=e){f=this.__bD.slice(d,e+1);
}else{f=this.__bD.slice(d,this.__bD.length).concat(this.__bD.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bD=[];
this.__bE=0;
}}});
})();
(function(){var bl="node",bk="error",bj="...(+",bi="array",bh=")",bg="info",bf="instance",be="string",bd="null",bc="class",bG="number",bF="stringify",bE="]",bD="unknown",bC="function",bB="boolean",bA="debug",bz="map",by="undefined",bx="qx.log.Logger",bs=")}",bt="#",bq="warn",br="document",bo="{...(",bp="[",bm="text[",bn="[...(",bu="\n",bv=")]",bw="object";
qx.Class.define(bx,{statics:{__bG:bA,setLevel:function(x){this.__bG=x;
},getLevel:function(){return this.__bG;
},setTreshold:function(bH){this.__bJ.setMaxMessages(bH);
},getTreshold:function(){return this.__bJ.getMaxMessages();
},__bH:{},__bI:0,register:function(C){if(C.$$id){return;
}var D=this.__bI++;
this.__bH[D]=C;
C.$$id=D;
var E=this.__bJ.getAllLogEvents();

for(var i=0,l=E.length;i<l;i++){C.process(E[i]);
}},unregister:function(c){var d=c.$$id;

if(d==null){return;
}delete this.__bH[d];
delete c.$$id;
},debug:function(s,t){qx.log.Logger.__bL(bA,arguments);
},info:function(e,f){qx.log.Logger.__bL(bg,arguments);
},warn:function(ba,bb){qx.log.Logger.__bL(bq,arguments);
},error:function(a,b){qx.log.Logger.__bL(bk,arguments);
},trace:function(F){qx.log.Logger.__bL(bg,[F,qx.dev.StackTrace.getStackTrace().join(bu)]);
},deprecatedMethodWarning:function(p,q){var r;
{};
},deprecatedClassWarning:function(j,k){var m;
{};
},deprecatedEventWarning:function(bI,event,bJ){var bK;
{};
},deprecatedMixinWarning:function(u,v){var w;
{};
},deprecatedConstantWarning:function(y,z,A){var self,B;
{};
},clear:function(){this.__bJ.clearHistory();
},__bJ:new qx.log.appender.RingBuffer(50),__bK:{debug:0,info:1,warn:2,error:3},__bL:function(G,H){var M=this.__bK;

if(M[G]<M[this.__bG]){return;
}var J=H.length<2?null:H[0];
var L=J?1:0;
var I=[];

for(var i=L,l=H.length;i<l;i++){I.push(this.__bN(H[i],true));
}var N=new Date;
var O={time:N,offset:N-qx.Bootstrap.LOADSTART,level:G,items:I,win:window};
if(J){if(J instanceof qx.core.Object){O.object=J.$$hash;
}else if(J.$$type){O.clazz=J;
}}this.__bJ.process(O);
var P=this.__bH;

for(var K in P){P[K].process(O);
}},__bM:function(g){if(g===undefined){return by;
}else if(g===null){return bd;
}
if(g.$$type){return bc;
}var h=typeof g;

if(h===bC||h==be||h===bG||h===bB){return h;
}else if(h===bw){if(g.nodeType){return bl;
}else if(g.classname){return bf;
}else if(g instanceof Array){return bi;
}else if(g instanceof Error){return bk;
}else{return bz;
}}
if(g.toString){return bF;
}return bD;
},__bN:function(Q,R){var Y=this.__bM(Q);
var U=bD;
var T=[];

switch(Y){case bd:case by:U=Y;
break;
case be:case bG:case bB:U=Q;
break;
case bl:if(Q.nodeType===9){U=br;
}else if(Q.nodeType===3){U=bm+Q.nodeValue+bE;
}else if(Q.nodeType===1){U=Q.nodeName.toLowerCase();

if(Q.id){U+=bt+Q.id;
}}else{U=bl;
}break;
case bC:U=qx.lang.Function.getName(Q)||Y;
break;
case bf:U=Q.basename+bp+Q.$$hash+bE;
break;
case bc:case bF:U=Q.toString();
break;
case bk:T=qx.dev.StackTrace.getStackTraceFromError(Q);
U=Q.toString();
break;
case bi:if(R){U=[];

for(var i=0,l=Q.length;i<l;i++){if(U.length>20){U.push(bj+(l-i)+bh);
break;
}U.push(this.__bN(Q[i],false));
}}else{U=bn+Q.length+bv;
}break;
case bz:if(R){var S;
var X=[];

for(var W in Q){X.push(W);
}X.sort();
U=[];

for(var i=0,l=X.length;i<l;i++){if(U.length>20){U.push(bj+(l-i)+bh);
break;
}W=X[i];
S=this.__bN(Q[W],false);
S.key=W;
U.push(S);
}}else{var V=0;

for(var W in Q){V++;
}U=bo+V+bs;
}break;
}return {type:Y,text:U,trace:T};
}},defer:function(n){var o=qx.Bootstrap.$$logs;

for(var i=0;i<o.length;i++){this.__bL(o[i][0],o[i][1]);
}qx.Bootstrap.debug=n.debug;
qx.Bootstrap.info=n.info;
qx.Bootstrap.warn=n.warn;
qx.Bootstrap.error=n.error;
qx.Bootstrap.trace=n.trace;
}});
})();
(function(){var bp="set",bo="get",bn="reset",bm="qx.core.Object",bl="]",bk="[",bj="$$user_",bi="Object";
qx.Class.define(bm,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bi},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bk+this.$$hash+bl;
},base:function(U,V){{};

if(arguments.length===1){return U.callee.base.call(this);
}else{return U.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(O){return O.callee.self;
},clone:function(){var bw=this.constructor;
var bv=new bw;
var by=qx.Class.getProperties(bw);
var bx=qx.core.Property.$$store.user;
var bz=qx.core.Property.$$method.set;
var name;
for(var i=0,l=by.length;i<l;i++){name=by[i];

if(this.hasOwnProperty(bx[name])){bv[bz[name]](this[bx[name]]);
}}return bv;
},set:function(r,s){var u=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(r)){if(!this[u[r]]){if(this[bp+qx.Bootstrap.firstUp(r)]!=undefined){this[bp+qx.Bootstrap.firstUp(r)](s);
return;
}{};
}return this[u[r]](s);
}else{for(var t in r){if(!this[u[t]]){if(this[bp+qx.Bootstrap.firstUp(t)]!=undefined){this[bp+qx.Bootstrap.firstUp(t)](r[t]);
continue;
}{};
}this[u[t]](r[t]);
}return this;
}},get:function(x){var y=qx.core.Property.$$method.get;

if(!this[y[x]]){if(this[bo+qx.Bootstrap.firstUp(x)]!=undefined){return this[bo+qx.Bootstrap.firstUp(x)]();
}{};
}return this[y[x]]();
},reset:function(n){var o=qx.core.Property.$$method.reset;

if(!this[o[n]]){if(this[bn+qx.Bootstrap.firstUp(n)]!=undefined){this[bn+qx.Bootstrap.firstUp(n)]();
return;
}{};
}this[o[n]]();
},__bO:qx.event.Registration,addListener:function(R,S,self,T){if(!this.$$disposed){return this.__bO.addListener(this,R,S,self,T);
}return null;
},addListenerOnce:function(X,Y,self,ba){var bb=function(e){Y.call(self||this,e);
this.removeListener(X,bb,this,ba);
};
return this.addListener(X,bb,this,ba);
},removeListener:function(bs,bt,self,bu){if(!this.$$disposed){return this.__bO.removeListener(this,bs,bt,self,bu);
}return false;
},removeListenerById:function(w){if(!this.$$disposed){return this.__bO.removeListenerById(this,w);
}return false;
},hasListener:function(P,Q){return this.__bO.hasListener(this,P,Q);
},dispatchEvent:function(W){if(!this.$$disposed){return this.__bO.dispatchEvent(this,W);
}return true;
},fireEvent:function(D,E,F){if(!this.$$disposed){return this.__bO.fireEvent(this,D,E,F);
}return true;
},fireNonBubblingEvent:function(L,M,N){if(!this.$$disposed){return this.__bO.fireNonBubblingEvent(this,L,M,N);
}return true;
},fireDataEvent:function(H,I,J,K){if(!this.$$disposed){if(J===undefined){J=null;
}return this.__bO.fireNonBubblingEvent(this,H,qx.event.type.Data,[I,J,!!K]);
}return true;
},__bP:null,setUserData:function(bq,br){if(!this.__bP){this.__bP={};
}this.__bP[bq]=br;
},getUserData:function(p){if(!this.__bP){return null;
}var q=this.__bP[p];
return q===undefined?null:q;
},__bQ:qx.log.Logger,debug:function(b){this.__bQ.debug(this,b);
},info:function(v){this.__bQ.info(this,v);
},warn:function(G){this.__bQ.warn(this,G);
},error:function(a){this.__bQ.error(this,a);
},trace:function(){this.__bQ.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bf,bd;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var be=this.constructor;
var bc;

while(be.superclass){if(be.$$destructor){be.$$destructor.call(this);
}if(be.$$includes){bc=be.$$flatIncludes;

for(var i=0,l=bc.length;i<l;i++){if(bc[i].$$destructor){bc[i].$$destructor.call(this);
}}}be=be.superclass;
}var bg=qx.Class.getProperties(this.constructor);

for(var i=0,l=bg.length;i<l;i++){delete this[bj+bg[i]];
}{};
},_disposeFields:function(A){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bh){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(z){qx.util.DisposeUtil.disposeArray(this,z);
},_disposeMap:function(C){qx.util.DisposeUtil.disposeMap(this,C);
}},settings:{"qx.disposerDebugLevel":0},defer:function(B){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bP=null;
var f=this.constructor;
var k;
var m=qx.core.Property.$$store;
var h=m.user;
var j=m.theme;
var c=m.inherit;
var g=m.useinit;
var d=m.init;

while(f){k=f.$$properties;

if(k){for(var name in k){if(k[name].dispose){this[h[name]]=this[j[name]]=this[c[name]]=this[g[name]]=this[d[name]]=undefined;
}}}f=f.superclass;
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(b,c){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__bR:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__bR=null;
},getInsets:function(){if(this.__bR){return this.__bR;
}var a=this._getDefaultInsets();
return this.__bR={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__bR=null;
}},destruct:function(){this.__bR=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
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
(function(){var t="_applyStyle",s="Color",r="px",q="solid",p="dotted",o="double",n="dashed",m="",l="_applyWidth",k="qx.ui.decoration.Uniform",h="px ",j=" ",i="scale",g="PositiveInteger",f="absolute";
qx.Class.define(k,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(u,v,w){arguments.callee.base.call(this);
if(u!=null){this.setWidth(u);
}
if(v!=null){this.setStyle(v);
}
if(w!=null){this.setColor(w);
}},properties:{width:{check:g,init:0,apply:l},style:{nullable:true,check:[q,p,n,o],init:q,apply:t},color:{nullable:true,check:s,apply:t},backgroundColor:{check:s,nullable:true,apply:t}},members:{__bS:null,_getDefaultInsets:function(){var E=this.getWidth();
return {top:E,right:E,bottom:E,left:E};
},_isInitialized:function(){return !!this.__bS;
},getMarkup:function(){if(this.__bS){return this.__bS;
}var x={position:f,top:0,left:0};
var y=this.getWidth();
{};
var A=qx.theme.manager.Color.getInstance();
x.border=y+h+this.getStyle()+j+A.resolve(this.getColor());
var z=this._generateBackgroundMarkup(x);
return this.__bS=z;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==i;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getWidth()*2;
b-=d;
c-=d;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+r;
a.style.height=c+r;
},tint:function(B,C){var D=qx.theme.manager.Color.getInstance();

if(C==null){C=this.getBackgroundColor();
}B.style.backgroundColor=D.resolve(C)||m;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bS=null;
}});
})();
(function(){var j="px",i="qx.ui.decoration.Background",h="",g="_applyStyle",f="Color",e="absolute";
qx.Class.define(i,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a){arguments.callee.base.call(this);

if(a!=null){this.setBackgroundColor(a);
}},properties:{backgroundColor:{check:f,nullable:true,apply:g}},members:{__bT:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bT;
},getMarkup:function(){if(this.__bT){return this.__bT;
}var n={position:e,top:0,left:0};
var o=this._generateBackgroundMarkup(n);
return this.__bT=o;
},resize:function(k,l,m){k.style.width=l+j;
k.style.height=m+j;
},tint:function(b,c){var d=qx.theme.manager.Color.getInstance();

if(c==null){c=this.getBackgroundColor();
}b.style.backgroundColor=d.resolve(c)||h;
},_applyStyle:function(){{};
}},destruct:function(){this.__bT=null;
}});
})();
(function(){var o="_applyStyle",n="solid",m="Color",l="double",k="px ",j="dotted",i="_applyWidth",h="dashed",g="Number",f=" ",K="shorthand",J="px",I="widthTop",H="styleRight",G="styleLeft",F="widthLeft",E="widthBottom",D="styleTop",C="colorBottom",B="styleBottom",v="widthRight",w="colorLeft",t="colorRight",u="colorTop",r="scale",s="border-top",p="border-left",q="border-right",x="qx.ui.decoration.Single",y="",A="border-bottom",z="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(T,U,V){arguments.callee.base.call(this);
if(T!=null){this.setWidth(T);
}
if(U!=null){this.setStyle(U);
}
if(V!=null){this.setColor(V);
}},properties:{widthTop:{check:g,init:0,apply:i},widthRight:{check:g,init:0,apply:i},widthBottom:{check:g,init:0,apply:i},widthLeft:{check:g,init:0,apply:i},styleTop:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleRight:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleBottom:{nullable:true,check:[n,j,h,l],init:n,apply:o},styleLeft:{nullable:true,check:[n,j,h,l],init:n,apply:o},colorTop:{nullable:true,check:m,apply:o},colorRight:{nullable:true,check:m,apply:o},colorBottom:{nullable:true,check:m,apply:o},colorLeft:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o},left:{group:[F,G,w]},right:{group:[v,H,t]},top:{group:[I,D,u]},bottom:{group:[E,B,C]},width:{group:[I,v,E,F],mode:K},style:{group:[D,H,B,G],mode:K},color:{group:[u,t,C,w],mode:K}},members:{__bU:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__bU;
},getMarkup:function(L){if(this.__bU){return this.__bU;
}var M=qx.theme.manager.Color.getInstance();
var N={};
var P=this.getWidthTop();

if(P>0){N[s]=P+k+this.getStyleTop()+f+M.resolve(this.getColorTop());
}var P=this.getWidthRight();

if(P>0){N[q]=P+k+this.getStyleRight()+f+M.resolve(this.getColorRight());
}var P=this.getWidthBottom();

if(P>0){N[A]=P+k+this.getStyleBottom()+f+M.resolve(this.getColorBottom());
}var P=this.getWidthLeft();

if(P>0){N[p]=P+k+this.getStyleLeft()+f+M.resolve(this.getColorLeft());
}{};
N.position=z;
N.top=0;
N.left=0;
var O=this._generateBackgroundMarkup(N);
return this.__bU=O;
},resize:function(a,b,c){var e=this.getBackgroundImage()&&this.getBackgroundRepeat()==r;

if(e||qx.bom.client.Feature.CONTENT_BOX){var d=this.getInsets();
b-=d.left+d.right;
c-=d.top+d.bottom;
if(b<0){b=0;
}
if(c<0){c=0;
}}a.style.width=b+J;
a.style.height=c+J;
},tint:function(Q,R){var S=qx.theme.manager.Color.getInstance();

if(R==null){R=this.getBackgroundColor();
}Q.style.backgroundColor=S.resolve(R)||y;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__bU=null;
}});
})();
(function(){var r="px",q="0px",p="-1px",o="no-repeat",n="scale-x",m="scale-y",l="-tr",k="-l",j='</div>',i="scale",F="qx.client",E="-br",D="-t",C="-tl",B="-r",A='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',z="_applyBaseImage",y="-b",x="String",w="",u="-bl",v="-c",s="mshtml",t="qx.ui.decoration.Grid";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,construct:function(N,O){arguments.callee.base.call(this);
if(N!=null){this.setBaseImage(N);
}
if(O!=null){this.setInsets(O);
}},properties:{baseImage:{check:x,nullable:true,apply:z}},members:{__bV:null,__bW:null,__bX:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__bV;
},getMarkup:function(){if(this.__bV){return this.__bV;
}var Q=qx.bom.element.Decoration;
var R=this.__bW;
var S=this.__bX;
var T=[];
T.push(A);
T.push(Q.create(R.tl,o,{top:0,left:0}));
T.push(Q.create(R.t,n,{top:0,left:S.left+r}));
T.push(Q.create(R.tr,o,{top:0,right:0}));
T.push(Q.create(R.bl,o,{bottom:0,left:0}));
T.push(Q.create(R.b,n,{bottom:0,left:S.left+r}));
T.push(Q.create(R.br,o,{bottom:0,right:0}));
T.push(Q.create(R.l,m,{top:S.top+r,left:0}));
T.push(Q.create(R.c,i,{top:S.top+r,left:S.left+r}));
T.push(Q.create(R.r,m,{top:S.top+r,right:0}));
T.push(j);
return this.__bV=T.join(w);
},resize:function(a,b,c){var d=this.__bX;
var innerWidth=b-d.left-d.right;
var innerHeight=c-d.top-d.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}a.style.width=b+r;
a.style.height=c+r;
a.childNodes[1].style.width=innerWidth+r;
a.childNodes[4].style.width=innerWidth+r;
a.childNodes[7].style.width=innerWidth+r;
a.childNodes[6].style.height=innerHeight+r;
a.childNodes[7].style.height=innerHeight+r;
a.childNodes[8].style.height=innerHeight+r;

if(qx.core.Variant.isSet(F,s)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(b%2==1){a.childNodes[2].style.marginRight=p;
a.childNodes[5].style.marginRight=p;
a.childNodes[8].style.marginRight=p;
}else{a.childNodes[2].style.marginRight=q;
a.childNodes[5].style.marginRight=q;
a.childNodes[8].style.marginRight=q;
}
if(c%2==1){a.childNodes[3].style.marginBottom=p;
a.childNodes[4].style.marginBottom=p;
a.childNodes[5].style.marginBottom=p;
}else{a.childNodes[3].style.marginBottom=q;
a.childNodes[4].style.marginBottom=q;
a.childNodes[5].style.marginBottom=q;
}}}},tint:function(g,h){},_applyBaseImage:function(G,H){{};

if(G){var L=this._resolveImageUrl(G);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var J=M[2];
var I=this.__bW={tl:K+C+J,t:K+D+J,tr:K+l+J,bl:K+u+J,b:K+y+J,br:K+E+J,l:K+k+J,c:K+v+J,r:K+B+J};
this.__bX=this._computeEdgeSizes(I);
}},_resolveImageUrl:function(P){return qx.util.AliasManager.getInstance().resolve(P);
},_computeEdgeSizes:function(e){var f=qx.util.ResourceManager.getInstance();
return {top:f.getImageHeight(e.t),bottom:f.getImageHeight(e.b),left:f.getImageWidth(e.l),right:f.getImageWidth(e.r)};
}},destruct:function(){this.__bV=this.__bW=this.__bX=null;
}});
})();
(function(){var p="_applyStyle",o='"></div>',n="Color",m="1px",l='<div style="',k='border:',j="1px solid ",i="",h=";",g="px",B='</div>',A="qx.ui.decoration.Beveled",z='<div style="position:absolute;top:1px;left:1px;',y='border-bottom:',x='border-right:',w='border-left:',v='border-top:',u="Number",t='<div style="position:absolute;top:1px;left:0px;',s='position:absolute;top:0px;left:1px;',q='<div style="overflow:hidden;font-size:0;line-height:0;">',r="absolute";
qx.Class.define(A,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(d,e,f){arguments.callee.base.call(this);
if(d!=null){this.setOuterColor(d);
}
if(e!=null){this.setInnerColor(e);
}
if(f!=null){this.setInnerOpacity(f);
}},properties:{innerColor:{check:n,nullable:true,apply:p},innerOpacity:{check:u,init:1,apply:p},outerColor:{check:n,nullable:true,apply:p},backgroundColor:{check:n,nullable:true,apply:p}},members:{__bY:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__bY;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__bY){return this.__bY;
}var C=qx.theme.manager.Color.getInstance();
var D=[];
var G=j+C.resolve(this.getOuterColor())+h;
var F=j+C.resolve(this.getInnerColor())+h;
D.push(q);
D.push(l);
D.push(k,G);
D.push(qx.bom.element.Opacity.compile(0.35));
D.push(o);
D.push(t);
D.push(w,G);
D.push(x,G);
D.push(o);
D.push(l);
D.push(s);
D.push(v,G);
D.push(y,G);
D.push(o);
var E={position:r,top:m,left:m};
D.push(this._generateBackgroundMarkup(E));
D.push(z);
D.push(k,F);
D.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
D.push(o);
D.push(B);
return this.__bY=D.join(i);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=g;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.childNodes[3].style.backgroundColor=c.resolve(b)||i;
}},destruct:function(){this.__bY=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var n="iPod",m="Win32",l="",k="Win64",j="Linux",i="BSD",h="Macintosh",g="iPhone",f="Windows",e="qx.bom.client.Platform",b="X11",d="MacIntel",c="MacPPC";
qx.Class.define(e,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ca:function(){var a=navigator.platform;
if(a==null||a===l){a=navigator.userAgent;
}
if(a.indexOf(f)!=-1||a.indexOf(m)!=-1||a.indexOf(k)!=-1){this.WIN=true;
this.NAME="win";
}else if(a.indexOf(h)!=-1||a.indexOf(c)!=-1||a.indexOf(d)!=-1||a.indexOf(n)!=-1||a.indexOf(g)!=-1){this.MAC=true;
this.NAME="mac";
}else if(a.indexOf(b)!=-1||a.indexOf(j)!=-1||a.indexOf(i)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(o){o.__ca();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__cb:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__cc:function(){var K=navigator.userAgent;
var J=[];

for(var I in this.__cb){J.push(I);
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
}else{this.NAME=this.__cb[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(K.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&K.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(M){M.__cc();
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var ek="button-frame",ej="atom",ei="widget",eh="main",eg="button",ef="text-selected",ee="image",ed="bold",ec="middle",eb="background-light",cM="text-disabled",cL="groupbox",cK="decoration/arrows/down.png",cJ="cell",cI="selected",cH="border-invalid",cG="input",cF="input-disabled",cE="menu-button",cD="input-focused-invalid",er="toolbar-button",es="spinner",ep="input-focused",eq="popup",en="tooltip",eo="list",el="tree-item",em="treevirtual-contract",et="scrollbar",eu="datechooser/nav-button",dJ="text-hovered",dI="center",dL="treevirtual-expand",dK="textfield",dN="label",dM="decoration/arrows/right.png",dP="background-application",dO="radiobutton",dH="white",dG="invalid",I="combobox",J="right-top",K="checkbox",L="text-title",M="qx/static/blank.gif",N="scrollbar/button",O="right",P="combobox/button",Q="icon/16/places/folder.png",R="text-label",eI="decoration/tree/closed.png",eH="scrollbar-slider-horizontal",eG="decoration/arrows/left.png",eF="button-focused",eM="text-light",eL="menu-slidebar-button",eK="text-input",eJ="slidebar/button-forward",eO="background-splitpane",eN=".png",bK="decoration/tree/open.png",bL="default",bI="decoration/arrows/down-small.png",bJ="datechooser",bO="slidebar/button-backward",bP="selectbox",bM="treevirtual-folder",bN="shadow-popup",bG="icon/16/mimetypes/office-document.png",bH="background-medium",bm="table",bl="decoration/arrows/up.png",bo="decoration/form/",bn="",bi="-invalid",bh="icon/16/places/folder-open.png",bk="button-checked",bj="decoration/window/maximize-active-hovered.png",bg="radiobutton-hovered",bf="decoration/cursors/",bV="slidebar",bW="tooltip-error-arrow",bX="table-scroller-focus-indicator",bY="move-frame",bR="nodrop",bS="decoration/table/boolean-true.png",bT="table-header-cell",bU="menu",ca="app-header",cb="row-layer",bz="text-inactive",by="move",bx="radiobutton-checked-focused",bw="decoration/window/restore-active-hovered.png",bv="shadow-window",bu="table-column-button",bt="right.png",bs="tabview-page-button-bottom-inactive",bD="tooltip-error",bC="window-statusbar",cc="button-hovered",cd="decoration/scrollbar/scrollbar-",ce="background-tip",cf="scrollbar-slider-horizontal-disabled",cg="table-scroller-header",ch="radiobutton-disabled",ci="button-pressed",cj="table-pane",ck="decoration/window/close-active.png",cl="native",cU="checkbox-hovered",cT="button-invalid-shadow",cS="checkbox-checked",cR="decoration/window/minimize-active-hovered.png",cY="menubar",cX="icon/16/actions/dialog-cancel.png",cW="tabview-page-button-top-inactive",cV="tabview-page-button-left-inactive",dd="menu-slidebar",dc="toolbar-button-checked",dB="decoration/tree/open-selected.png",dC="radiobutton-checked",dz="decoration/window/minimize-inactive.png",dA="icon/16/apps/office-calendar.png",dx="group",dy="tabview-page-button-right-inactive",dv="decoration/window/minimize-active.png",dw="decoration/window/restore-inactive.png",dD="checkbox-checked-focused",dE="splitpane",dT="combobox/textfield",dS="button-preselected-focused",dV="decoration/window/close-active-hovered.png",dU="qx/icon/Tango/16/actions/window-close.png",dX="checkbox-pressed",dW="button-disabled",ea="selected-dragover",dY="border-separator",dR="decoration/window/maximize-inactive.png",dQ="dragover",eB="scrollarea",eC="scrollbar-vertical",eD="decoration/menu/checkbox-invert.gif",eE="decoration/toolbar/toolbar-handle-knob.gif",ex="icon/22/mimetypes/office-document.png",ey="button-preselected",ez="button-checked-focused",eA="up.png",ev="best-fit",ew="decoration/tree/closed-selected.png",H="qx.theme.modern.Appearance",G="text-active",F="checkbox-disabled",E="toolbar-button-hovered",D="progressive-table-header",C="decoration/table/select-column-order.png",B="decoration/menu/radiobutton.gif",A="decoration/arrows/forward.png",z="decoration/table/descending.png",y="window-captionbar-active",U="checkbox-checked-hovered",V="scrollbar-slider-vertical",S="toolbar",T="alias",Y="decoration/window/restore-active.png",ba="decoration/table/boolean-false.png",W="checkbox-checked-disabled",X="icon/32/mimetypes/office-document.png",bc="radiobutton-checked-disabled",bd="tabview-pane",dh="decoration/arrows/rewind.png",db="checkbox-focused",dp="top",dk="#EEE",cP="icon/16/actions/dialog-ok.png",cN="radiobutton-checked-hovered",bq="table-header-cell-hovered",cQ="window",bB="text-gray",bA="decoration/menu/radiobutton-invert.gif",cv="text-placeholder",cw="slider",cx="keep-align",cy="down.png",cz="tabview-page-button-top-active",cA="icon/32/places/folder-open.png",cB="icon/22/places/folder.png",cC="decoration/window/maximize-active.png",cs="checkbox-checked-pressed",ct="decoration/window/close-inactive.png",cO="tabview-page-button-left-active",dn="toolbar-part",dm="decoration/splitpane/knob-vertical.png",dl=".gif",dt="icon/22/places/folder-open.png",ds="radiobutton-checked-pressed",dr="table-statusbar",dq="radiobutton-pressed",dj="window-captionbar-inactive",di="copy",bb="radiobutton-focused",bF="decoration/arrows/down-invert.png",bE="decoration/menu/checkbox.gif",da="decoration/splitpane/knob-horizontal.png",bQ="icon/32/places/folder.png",dg="toolbar-separator",df="tabview-page-button-bottom-active",de="decoration/arrows/up-small.png",bp="decoration/table/ascending.png",du="decoration/arrows/up-invert.png",be="small",br="tabview-page-button-right-active",cm="-disabled",cn="scrollbar-horizontal",co="progressive-table-header-cell",cp="menu-separator",cq="pane",cr="decoration/arrows/right-invert.png",dF="left.png",cu="icon/16/actions/view-refresh.png";
qx.Theme.define(H,{appearances:{"widget":{},"root":{style:function(n){return {backgroundColor:dP,textColor:R,font:bL};
}},"label":{style:function(gj){return {textColor:gj.disabled?cM:undefined};
}},"move-frame":{style:function(fY){return {decorator:eh};
}},"resize-frame":bY,"dragdrop-cursor":{style:function(hf){var hg=bR;

if(hf.copy){hg=di;
}else if(hf.move){hg=by;
}else if(hf.alias){hg=T;
}return {source:bf+hg+dl,position:J,offset:[2,16,2,6]};
}},"image":{style:function(c){return {opacity:!c.replacement&&c.disabled?0.3:1};
}},"atom":{},"atom/label":dN,"atom/icon":ee,"popup":{style:function(x){return {decorator:eh,backgroundColor:eb,shadow:bN};
}},"button-frame":{alias:ej,style:function(k){var m,l;

if(k.checked&&k.focused&&!k.inner){m=ez;
l=undefined;
}else if(k.disabled){m=dW;
l=undefined;
}else if(k.pressed){m=ci;
l=dJ;
}else if(k.checked){m=bk;
l=undefined;
}else if(k.hovered){m=cc;
l=dJ;
}else if(k.preselected&&k.focused&&!k.inner){m=dS;
l=dJ;
}else if(k.preselected){m=ey;
l=dJ;
}else if(k.focused&&!k.inner){m=eF;
l=undefined;
}else{m=eg;
l=undefined;
}return {decorator:m,textColor:l,shadow:k.invalid&&!k.disabled?cT:undefined};
}},"button-frame/image":{style:function(hU){return {opacity:!hU.replacement&&hU.disabled?0.5:1};
}},"button":{alias:ek,include:ek,style:function(fH){return {padding:[2,8],center:true};
}},"hover-button":{alias:ej,include:ej,style:function(gx){return {decorator:gx.hovered?cI:undefined,textColor:gx.hovered?ef:undefined};
}},"splitbutton":{},"splitbutton/button":eg,"splitbutton/arrow":{alias:eg,include:eg,style:function(fn){return {icon:cK,padding:2,marginLeft:1};
}},"checkbox":{alias:ej,style:function(eQ){var eS;

if(eQ.checked&&eQ.focused){eS=dD;
}else if(eQ.checked&&eQ.disabled){eS=W;
}else if(eQ.checked&&eQ.pressed){eS=cs;
}else if(eQ.checked&&eQ.hovered){eS=U;
}else if(eQ.checked){eS=cS;
}else if(eQ.disabled){eS=F;
}else if(eQ.focused){eS=db;
}else if(eQ.pressed){eS=dX;
}else if(eQ.hovered){eS=cU;
}else{eS=K;
}var eR=eQ.invalid&&!eQ.disabled?bi:bn;
return {icon:bo+eS+eR+eN,gap:6};
}},"radiobutton":{alias:ej,style:function(h){var j;

if(h.checked&&h.focused){j=bx;
}else if(h.checked&&h.disabled){j=bc;
}else if(h.checked&&h.pressed){j=ds;
}else if(h.checked&&h.hovered){j=cN;
}else if(h.checked){j=dC;
}else if(h.disabled){j=ch;
}else if(h.focused){j=bb;
}else if(h.pressed){j=dq;
}else if(h.hovered){j=bg;
}else{j=dO;
}var i=h.invalid&&!h.disabled?bi:bn;
return {icon:bo+j+i+eN,gap:6};
}},"textfield":{style:function(fB){var fG;
var fE=!!fB.focused;
var fF=!!fB.invalid;
var fC=!!fB.disabled;

if(fE&&fF&&!fC){fG=cD;
}else if(fE&&!fF&&!fC){fG=ep;
}else if(fC){fG=cF;
}else if(!fE&&fF&&!fC){fG=cH;
}else{fG=cG;
}var fD;

if(fB.disabled){fD=cM;
}else if(fB.showingPlaceholder){fD=cv;
}else{fD=eK;
}return {decorator:fG,padding:[2,4,1],textColor:fD};
}},"textarea":{include:dK,style:function(gX){return {padding:4};
}},"spinner":{style:function(hE){var hI;
var hG=!!hE.focused;
var hH=!!hE.invalid;
var hF=!!hE.disabled;

if(hG&&hH&&!hF){hI=cD;
}else if(hG&&!hH&&!hF){hI=ep;
}else if(hF){hI=cF;
}else if(!hG&&hH&&!hF){hI=cH;
}else{hI=cG;
}return {decorator:hI};
}},"spinner/textfield":{style:function(fp){return {marginRight:2,padding:[2,4,1],textColor:fp.disabled?cM:eK};
}},"spinner/upbutton":{alias:ek,include:ek,style:function(fj){return {icon:de,padding:fj.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:ek,include:ek,style:function(gM){return {icon:bI,padding:gM.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":I,"datefield/button":{alias:P,include:P,style:function(w){return {icon:dA,padding:[0,3],decorator:undefined};
}},"datefield/textfield":dT,"datefield/list":{alias:bJ,include:bJ,style:function(ha){return {decorator:undefined};
}},"groupbox":{style:function(d){return {legendPosition:dp};
}},"groupbox/legend":{alias:ej,style:function(gU){return {padding:[1,0,1,4],textColor:gU.invalid?dG:L,font:ed};
}},"groupbox/frame":{style:function(f){return {padding:12,decorator:dx};
}},"check-groupbox":cL,"check-groupbox/legend":{alias:K,include:K,style:function(hY){return {padding:[1,0,1,4],textColor:hY.invalid?dG:L,font:ed};
}},"radio-groupbox":cL,"radio-groupbox/legend":{alias:dO,include:dO,style:function(gQ){return {padding:[1,0,1,4],textColor:gQ.invalid?dG:L,font:ed};
}},"scrollarea":{style:function(gl){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(hL){return {backgroundColor:dP};
}},"scrollarea/pane":ei,"scrollarea/scrollbar-x":et,"scrollarea/scrollbar-y":et,"scrollbar":{style:function(hd){if(hd[cl]){return {};
}return {width:hd.horizontal?undefined:16,height:hd.horizontal?16:undefined,decorator:hd.horizontal?cn:eC,padding:1};
}},"scrollbar/slider":{alias:cw,style:function(gh){return {padding:gh.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:ek,style:function(hv){var hw=hv.horizontal?eH:V;

if(hv.disabled){hw+=cm;
}return {decorator:hw,minHeight:hv.horizontal?undefined:9,minWidth:hv.horizontal?9:undefined};
}},"scrollbar/button":{alias:ek,include:ek,style:function(fN){var fO=cd;

if(fN.left){fO+=dF;
}else if(fN.right){fO+=bt;
}else if(fN.up){fO+=eA;
}else{fO+=cy;
}
if(fN.left||fN.right){return {padding:[0,0,0,fN.left?3:4],icon:fO,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:fO,width:14,height:15};
}}},"scrollbar/button-begin":N,"scrollbar/button-end":N,"slider":{style:function(gs){var gw;
var gu=!!gs.focused;
var gv=!!gs.invalid;
var gt=!!gs.disabled;

if(gu&&gv&&!gt){gw=cD;
}else if(gu&&!gv&&!gt){gw=ep;
}else if(gt){gw=cF;
}else if(!gu&&gv&&!gt){gw=cH;
}else{gw=cG;
}return {decorator:gw};
}},"slider/knob":{include:ek,style:function(fI){return {decorator:fI.disabled?cf:eH,shadow:undefined,height:14,width:14};
}},"list":{alias:eB,style:function(gH){var gL;
var gJ=!!gH.focused;
var gK=!!gH.invalid;
var gI=!!gH.disabled;

if(gJ&&gK&&!gI){gL=cD;
}else if(gJ&&!gK&&!gI){gL=ep;
}else if(gI){gL=cF;
}else if(!gJ&&gK&&!gI){gL=cH;
}else{gL=cG;
}return {backgroundColor:eb,decorator:gL};
}},"list/pane":ei,"listitem":{alias:ej,style:function(s){var t;

if(s.dragover){t=s.selected?ea:dQ;
}else{t=s.selected?cI:undefined;
}return {padding:s.dragover?[4,4,2,4]:4,textColor:s.selected?ef:undefined,decorator:t};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:ek,include:ek,style:function(hm){return {padding:5,center:true,icon:hm.vertical?cK:dM};
}},"slidebar/button-backward":{alias:ek,include:ek,style:function(hS){return {padding:5,center:true,icon:hS.vertical?bl:eG};
}},"tabview":{style:function(gf){return {contentPadding:16};
}},"tabview/bar":{alias:bV,style:function(gR){var gS={marginBottom:gR.barTop?-1:0,marginTop:gR.barBottom?-4:0,marginLeft:gR.barRight?-3:0,marginRight:gR.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gR.barTop||gR.barBottom){gS.paddingLeft=5;
gS.paddingRight=7;
}else{gS.paddingTop=5;
gS.paddingBottom=7;
}return gS;
}},"tabview/bar/button-forward":{include:eJ,alias:eJ,style:function(fR){if(fR.barTop||fR.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bO,alias:bO,style:function(fg){if(fg.barTop||fg.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(r){return {decorator:bd,minHeight:100,marginBottom:r.barBottom?-1:0,marginTop:r.barTop?-1:0,marginLeft:r.barLeft?-1:0,marginRight:r.barRight?-1:0};
}},"tabview-page":ei,"tabview-page/button":{alias:ej,style:function(gz){var gF,gB=0;
var gE=0,gA=0,gC=0,gD=0;

if(gz.checked){if(gz.barTop){gF=cz;
gB=[6,14];
gC=gz.firstTab?0:-5;
gD=gz.lastTab?0:-5;
}else if(gz.barBottom){gF=df;
gB=[6,14];
gC=gz.firstTab?0:-5;
gD=gz.lastTab?0:-5;
}else if(gz.barRight){gF=br;
gB=[6,13];
gE=gz.firstTab?0:-5;
gA=gz.lastTab?0:-5;
}else{gF=cO;
gB=[6,13];
gE=gz.firstTab?0:-5;
gA=gz.lastTab?0:-5;
}}else{if(gz.barTop){gF=cW;
gB=[4,10];
gE=4;
gC=gz.firstTab?5:1;
gD=1;
}else if(gz.barBottom){gF=bs;
gB=[4,10];
gA=4;
gC=gz.firstTab?5:1;
gD=1;
}else if(gz.barRight){gF=dy;
gB=[4,10];
gD=5;
gE=gz.firstTab?5:1;
gA=1;
gC=1;
}else{gF=cV;
gB=[4,10];
gC=5;
gE=gz.firstTab?5:1;
gA=1;
gD=1;
}}return {zIndex:gz.checked?10:5,decorator:gF,padding:gB,marginTop:gE,marginBottom:gA,marginLeft:gC,marginRight:gD,textColor:gz.checked?G:bz};
}},"tabview-page/button/close-button":{alias:ej,style:function(fx){return {icon:dU};
}},"toolbar":{style:function(e){return {decorator:S,spacing:2};
}},"toolbar/part":{style:function(hC){return {decorator:dn,spacing:2};
}},"toolbar/part/container":{style:function(gk){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(fe){return {source:eE,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:ej,style:function(gT){return {marginTop:2,marginBottom:2,padding:(gT.pressed||gT.checked||gT.hovered)&&!gT.disabled||(gT.disabled&&gT.checked)?3:5,decorator:gT.pressed||(gT.checked&&!gT.hovered)||(gT.checked&&gT.disabled)?dc:gT.hovered&&!gT.disabled?E:undefined};
}},"toolbar-menubutton":{alias:er,include:er,style:function(fo){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:ee,include:ee,style:function(fc){return {source:bI};
}},"toolbar-splitbutton":{style:function(gV){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:er,include:er,style:function(hN){return {icon:cK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(hV){return {padding:hV.pressed||hV.checked?1:hV.hovered?1:3,icon:cK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(fk){return {decorator:dg,margin:7};
}},"tree":eo,"tree-item":{style:function(fa){return {padding:[2,6],textColor:fa.selected?ef:undefined,decorator:fa.selected?cI:undefined};
}},"tree-item/icon":{include:ee,style:function(fz){return {paddingRight:5};
}},"tree-item/label":dN,"tree-item/open":{include:ee,style:function(fV){var fW;

if(fV.selected&&fV.opened){fW=dB;
}else if(fV.selected&&!fV.opened){fW=ew;
}else if(fV.opened){fW=bK;
}else{fW=eI;
}return {padding:[0,5,0,2],source:fW};
}},"tree-folder":{include:el,alias:el,style:function(eX){var eY;

if(eX.small){eY=eX.opened?bh:Q;
}else if(eX.large){eY=eX.opened?cA:bQ;
}else{eY=eX.opened?dt:cB;
}return {icon:eY};
}},"tree-file":{include:el,alias:el,style:function(fX){return {icon:fX.small?bG:fX.large?X:ex};
}},"treevirtual":bm,"treevirtual-folder":{style:function(ib){return {icon:ib.opened?bh:Q};
}},"treevirtual-file":{include:bM,alias:bM,style:function(hy){return {icon:bG};
}},"treevirtual-line":{style:function(fd){return {icon:M};
}},"treevirtual-contract":{style:function(hi){return {icon:bK,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(ia){return {icon:eI,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":em,"treevirtual-only-expand":dL,"treevirtual-start-contract":em,"treevirtual-start-expand":dL,"treevirtual-end-contract":em,"treevirtual-end-expand":dL,"treevirtual-cross-contract":em,"treevirtual-cross-expand":dL,"treevirtual-end":{style:function(g){return {icon:M};
}},"treevirtual-cross":{style:function(ic){return {icon:M};
}},"tooltip":{include:eq,style:function(fP){return {backgroundColor:ce,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":ej,"tooltip-error":{include:en,style:function(hx){return {textColor:ef,placeMethod:ei,offset:[0,0,0,14],marginTop:-2,position:J,showTimeout:100,hideTimeout:10000,decorator:bD,shadow:bW,font:ed};
}},"tooltip-error/atom":ej,"window":{style:function(v){return {shadow:bv,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(fi){return {decorator:cQ};
}},"window/captionbar":{style:function(q){return {decorator:q.active?y:dj,textColor:q.active?dH:bB,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gc){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hD){return {alignY:ec,font:ed,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:ej,style:function(u){return {icon:u.active?u.hovered?cR:dv:dz,margin:[4,8,2,0]};
}},"window/restore-button":{alias:ej,style:function(hB){return {icon:hB.active?hB.hovered?bw:Y:dw,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:ej,style:function(gm){return {icon:gm.active?gm.hovered?bj:cC:dR,margin:[4,8,2,0]};
}},"window/close-button":{alias:ej,style:function(fQ){return {icon:fQ.active?fQ.hovered?dV:ck:ct,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(fw){return {padding:[2,6],decorator:bC,minHeight:18};
}},"window/statusbar-text":{style:function(eT){return {font:be};
}},"iframe":{style:function(he){return {decorator:eh};
}},"resizer":{style:function(gN){return {decorator:cq};
}},"splitpane":{style:function(gO){return {decorator:dE};
}},"splitpane/splitter":{style:function(fs){return {width:fs.horizontal?3:undefined,height:fs.vertical?3:undefined,backgroundColor:eO};
}},"splitpane/splitter/knob":{style:function(ff){return {source:ff.horizontal?da:dm};
}},"splitpane/slider":{style:function(hJ){return {width:hJ.horizontal?3:undefined,height:hJ.vertical?3:undefined,backgroundColor:eO};
}},"selectbox":{alias:ek,include:ek,style:function(hc){return {padding:[2,8]};
}},"selectbox/atom":ej,"selectbox/popup":eq,"selectbox/list":{alias:eo},"selectbox/arrow":{include:ee,style:function(hX){return {source:cK,paddingLeft:5};
}},"datechooser":{style:function(hn){var hr;
var hp=!!hn.focused;
var hq=!!hn.invalid;
var ho=!!hn.disabled;

if(hp&&hq&&!ho){hr=cD;
}else if(hp&&!hq&&!ho){hr=ep;
}else if(ho){hr=cF;
}else if(!hp&&hq&&!ho){hr=cH;
}else{hr=cG;
}return {padding:2,decorator:hr,backgroundColor:eb};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:ek,alias:ek,style:function(ft){var fu={padding:[2,4],shadow:undefined};

if(ft.lastYear){fu.icon=dh;
fu.marginRight=1;
}else if(ft.lastMonth){fu.icon=eG;
}else if(ft.nextYear){fu.icon=A;
fu.marginLeft=1;
}else if(ft.nextMonth){fu.icon=dM;
}return fu;
}},"datechooser/last-year-button-tooltip":en,"datechooser/last-month-button-tooltip":en,"datechooser/next-year-button-tooltip":en,"datechooser/next-month-button-tooltip":en,"datechooser/last-year-button":eu,"datechooser/last-month-button":eu,"datechooser/next-month-button":eu,"datechooser/next-year-button":eu,"datechooser/month-year-label":{style:function(ht){return {font:ed,textAlign:dI,textColor:ht.disabled?cM:undefined};
}},"datechooser/date-pane":{style:function(gW){return {textColor:gW.disabled?cM:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(hR){return {textColor:hR.disabled?cM:hR.weekend?eM:undefined,textAlign:dI,paddingTop:2,backgroundColor:bH};
}},"datechooser/week":{style:function(hh){return {textAlign:dI,padding:[2,4],backgroundColor:bH};
}},"datechooser/day":{style:function(fL){return {textAlign:dI,decorator:fL.disabled?undefined:fL.selected?cI:undefined,textColor:fL.disabled?cM:fL.selected?ef:fL.otherMonth?eM:undefined,font:fL.today?ed:undefined,padding:[2,4]};
}},"combobox":{style:function(gn){var gr;
var gp=!!gn.focused;
var gq=!!gn.invalid;
var go=!!gn.disabled;

if(gp&&gq&&!go){gr=cD;
}else if(gp&&!gq&&!go){gr=ep;
}else if(go){gr=cF;
}else if(!gp&&gq&&!go){gr=cH;
}else{gr=cG;
}return {decorator:gr};
}},"combobox/popup":eq,"combobox/list":{alias:eo},"combobox/button":{include:ek,alias:ek,style:function(id){var ie={icon:cK,padding:2};

if(id.selected){ie.decorator=eF;
}return ie;
}},"combobox/textfield":{include:dK,style:function(fv){return {decorator:undefined};
}},"menu":{style:function(hj){var hk={decorator:bU,shadow:bN,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:hj.submenu||hj.contextmenu?ev:cx};

if(hj.submenu){hk.position=J;
hk.offset=[-2,-3];
}return hk;
}},"menu/slidebar":dd,"menu-slidebar":ei,"menu-slidebar-button":{style:function(fK){return {decorator:fK.hovered?cI:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:eL,style:function(hW){return {icon:hW.hovered?du:bl};
}},"menu-slidebar/button-forward":{include:eL,style:function(ig){return {icon:ig.hovered?bF:cK};
}},"menu-separator":{style:function(fm){return {height:0,decorator:cp,margin:[4,2]};
}},"menu-button":{alias:ej,style:function(ge){return {decorator:ge.selected?cI:undefined,textColor:ge.selected?ef:undefined,padding:[4,6]};
}},"menu-button/icon":{include:ee,style:function(hb){return {alignY:ec};
}},"menu-button/label":{include:dN,style:function(a){return {alignY:ec,padding:1};
}},"menu-button/shortcut":{include:dN,style:function(gy){return {alignY:ec,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:ee,style:function(p){return {source:p.selected?cr:dM,alignY:ec};
}},"menu-checkbox":{alias:cE,include:cE,style:function(fb){return {icon:!fb.checked?undefined:fb.selected?eD:bE};
}},"menu-radiobutton":{alias:cE,include:cE,style:function(fU){return {icon:!fU.checked?undefined:fU.selected?bA:B};
}},"menubar":{style:function(hO){return {decorator:cY};
}},"menubar-button":{alias:ej,style:function(eU){return {decorator:eU.pressed||eU.hovered?cI:undefined,textColor:eU.pressed||eU.hovered?ef:undefined,padding:[3,8]};
}},"colorselector":ei,"colorselector/control-bar":ei,"colorselector/control-pane":ei,"colorselector/visual-pane":cL,"colorselector/preset-grid":ei,"colorselector/colorbucket":{style:function(hA){return {decorator:eh,width:16,height:16};
}},"colorselector/preset-field-set":cL,"colorselector/input-field-set":cL,"colorselector/preview-field-set":cL,"colorselector/hex-field-composite":ei,"colorselector/hex-field":dK,"colorselector/rgb-spinner-composite":ei,"colorselector/rgb-spinner-red":es,"colorselector/rgb-spinner-green":es,"colorselector/rgb-spinner-blue":es,"colorselector/hsb-spinner-composite":ei,"colorselector/hsb-spinner-hue":es,"colorselector/hsb-spinner-saturation":es,"colorselector/hsb-spinner-brightness":es,"colorselector/preview-content-old":{style:function(o){return {decorator:eh,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hu){return {decorator:eh,backgroundColor:eb,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(fA){return {decorator:eh,margin:5};
}},"colorselector/brightness-field":{style:function(fh){return {decorator:eh,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ei,"colorselector/hue-saturation-handle":ei,"colorselector/brightness-pane":ei,"colorselector/brightness-handle":ei,"colorpopup":{alias:eq,include:eq,style:function(hQ){return {padding:5,backgroundColor:dP};
}},"colorpopup/field":{style:function(ga){return {decorator:eh,margin:2,width:14,height:14,backgroundColor:eb};
}},"colorpopup/selector-button":eg,"colorpopup/auto-button":eg,"colorpopup/preview-pane":cL,"colorpopup/current-preview":{style:function(hK){return {height:20,padding:4,marginLeft:4,decorator:eh,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hs){return {height:20,padding:4,marginRight:4,decorator:eh,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:eg,include:eg,style:function(gP){return {icon:cP};
}},"colorpopup/colorselector-cancelbutton":{alias:eg,include:eg,style:function(fJ){return {icon:cX};
}},"table":{alias:ei,style:function(hl){return {decorator:bm};
}},"table-header":{},"table/statusbar":{style:function(fM){return {decorator:dr,padding:[0,2]};
}},"table/column-button":{alias:ek,style:function(b){return {decorator:bu,padding:3,icon:C};
}},"table-column-reset-button":{include:cE,alias:cE,style:function(){return {icon:cu};
}},"table-scroller":ei,"table-scroller/scrollbar-x":et,"table-scroller/scrollbar-y":et,"table-scroller/header":{style:function(hM){return {decorator:cg};
}},"table-scroller/pane":{style:function(gi){return {backgroundColor:cj};
}},"table-scroller/focus-indicator":{style:function(fl){return {decorator:bX};
}},"table-scroller/resize-line":{style:function(gb){return {backgroundColor:dY,width:2};
}},"table-header-cell":{alias:ej,style:function(fS){return {minWidth:13,minHeight:20,padding:fS.hovered?[3,4,2,4]:[3,4],decorator:fS.hovered?bq:bT,sortIcon:fS.sorted?(fS.sortedAscending?bp:z):undefined};
}},"table-header-cell/label":{style:function(hP){return {minWidth:0,alignY:ec,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(eW){return {alignY:ec,alignX:O};
}},"table-header-cell/icon":{style:function(hT){return {minWidth:0,alignY:ec,paddingRight:5};
}},"table-editor-textfield":{include:dK,style:function(fy){return {decorator:undefined,padding:[2,2],backgroundColor:eb};
}},"table-editor-selectbox":{include:bP,alias:bP,style:function(fr){return {padding:[0,2],backgroundColor:eb};
}},"table-editor-combobox":{include:I,alias:I,style:function(fq){return {decorator:undefined,backgroundColor:eb};
}},"progressive-table-header":{alias:ei,style:function(gY){return {decorator:D};
}},"progressive-table-header-cell":{alias:ej,style:function(hz){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:co};
}},"app-header":{style:function(fT){return {font:ed,textColor:ef,padding:[8,12],decorator:ca};
}},"virtual-list":eo,"virtual-list/row-layer":cb,"row-layer":{style:function(gg){return {colorEven:dH,colorOdd:dk};
}},"column-layer":ei,"cell":{style:function(gG){return {textColor:gG.selected?ef:R,padding:[3,6],font:bL};
}},"cell-string":cJ,"cell-number":{include:cJ,style:function(eP){return {textAlign:O};
}},"cell-image":cJ,"cell-boolean":{include:cJ,style:function(gd){return {iconTrue:bS,iconFalse:ba};
}},"cell-atom":cJ,"cell-date":cJ,"cell-html":cJ,"htmlarea":{"include":ei,style:function(eV){return {backgroundColor:dH};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cd:function(){this.QUIRKS_MODE=this.__ce();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__ce:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cd();
}});
})();
(function(){var k="qx.lang.Object";
qx.Class.define(k,{statics:{empty:function(G){{};

for(var H in G){if(G.hasOwnProperty(H)){delete G[H];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(s){{};
return s.__count__===0;
}:
function(o){{};

for(var p in o){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(m,n){{};
return m.__count__>=n;
}:
function(g,h){{};

if(h<=0){return true;
}var length=0;

for(var j in g){if((++length)>=h){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(t){{};
var v=[];
var u=this.getKeys(t);

for(var i=0,l=u.length;i<l;i++){v.push(t[u[i]]);
}return v;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){{};
return qx.lang.Object.mergeWith(q,r,false);
},merge:function(D,E){{};
var F=arguments.length;

for(var i=1;i<F;i++){qx.lang.Object.mergeWith(D,arguments[i]);
}return D;
},clone:function(a){{};
var b={};

for(var c in a){b[c]=a[c];
}return b;
},invert:function(d){{};
var e={};

for(var f in d){e[d[f].toString()]=f;
}return e;
},getKeyFromValue:function(y,z){{};

for(var A in y){if(y.hasOwnProperty(A)&&y[A]===z){return A;
}}return null;
},contains:function(B,C){{};
return this.getKeyFromValue(B,C)!==null;
},select:function(I,J){{};
return J[I];
},fromArray:function(w){{};
var x={};

for(var i=0,l=w.length;i<l;i++){{};
x[w[i].toString()]=true;
}return x;
}}});
})();
(function(){var o="emulated",n="native",m='"',k="qx.lang.Core",j="\\\\",h="\\\"",g="[object Error]";
qx.Class.define(k,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==g)?o:n,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?n:o,{"native":Array.prototype.indexOf,"emulated":function(t,u){if(u==null){u=0;
}else if(u<0){u=Math.max(0,this.length+u);
}
for(var i=u;i<this.length;i++){if(this[i]===t){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?n:o,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?n:o,{"native":Array.prototype.forEach,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){y.call(z||window,A,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?n:o,{"native":Array.prototype.filter,"emulated":function(c,d){var e=[];
var l=this.length;

for(var i=0;i<l;i++){var f=this[i];

if(f!==undefined){if(c.call(d||window,f,i,this)){e.push(this[i]);
}}}return e;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?n:o,{"native":Array.prototype.map,"emulated":function(p,q){var r=[];
var l=this.length;

for(var i=0;i<l;i++){var s=this[i];

if(s!==undefined){r[i]=p.call(q||window,s,i,this);
}}return r;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?n:o,{"native":Array.prototype.some,"emulated":function(v,w){var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){if(v.call(w||window,x,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?n:o,{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
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
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(j,k){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!j;
this._cancelable=!!k;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(h){if(h){var i=h;
}else{var i=qx.event.Pool.getInstance().getObject(this.constructor);
}i._type=this._type;
i._target=this._target;
i._currentTarget=this._currentTarget;
i._relatedTarget=this._relatedTarget;
i._originalTarget=this._originalTarget;
i._stopPropagation=this._stopPropagation;
i._bubbles=this._bubbles;
i._preventDefault=this._preventDefault;
i._cancelable=this._cancelable;
return i;
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
},setType:function(d){this._type=d;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(b){this._target=b;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(m){this._originalTarget=m;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(e){this._cancelable=e;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cf:null,__cg:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__cf=b;
this.__cg=c;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f.__cf=this.__cf;
f.__cg=this.__cg;
return f;
},getData:function(){return this.__cf;
},getOldData:function(){return this.__cg;
}},destruct:function(){this.__cf=this.__cg=null;
}});
})();
(function(){var cz="get",cy="",cx="[",cw="last",cv="change",cu="]",ct=".",cs="Number",cr="String",cq="set",cO="deepBinding",cN="item",cM="reset",cL="' (",cK="Boolean",cJ=").",cI=") to the object '",cH="Integer",cG="qx.data.SingleValueBinding",cF="No event could be found for the property",cD="PositiveNumber",cE="Binding from '",cB="PositiveInteger",cC="Binding does not exist!",cA="Date";
qx.Class.define(cG,{statics:{DEBUG_ON:false,__ch:{},bind:function(v,w,x,y,z){var J=this.__cj(v,w,x,y,z);
var E=w.split(ct);
var B=this.__cq(E);
var I=[];
var F=[];
var G=[];
var C=[];
var D=v;
for(var i=0;i<E.length;i++){if(B[i]!==cy){C.push(cv);
}else{C.push(this.__cl(D,E[i]));
}I[i]=D;
if(i==E.length-1){if(B[i]!==cy){var M=B[i]===cw?D.length-1:B[i];
var A=D.getItem(M);
this.__cp(A,x,y,z,v);
G[i]=this.__cr(D,C[i],x,y,z,B[i]);
}else{if(E[i]!=null&&D[cz+qx.lang.String.firstUp(E[i])]!=null){var A=D[cz+qx.lang.String.firstUp(E[i])]();
this.__cp(A,x,y,z,v);
}G[i]=this.__cr(D,C[i],x,y,z);
}}else{var K={index:i,propertyNames:E,sources:I,listenerIds:G,arrayIndexValues:B,targetObject:x,targetPropertyChain:y,options:z,listeners:F};
var H=qx.lang.Function.bind(this.__ci,this,K);
F.push(H);
G[i]=D.addListener(C[i],H);
}if(D[cz+qx.lang.String.firstUp(E[i])]==null){D=null;
}else if(B[i]!==cy){D=D[cz+qx.lang.String.firstUp(E[i])](B[i]);
}else{D=D[cz+qx.lang.String.firstUp(E[i])]();
}
if(!D){break;
}}var L={type:cO,listenerIds:G,sources:I,targetListenerIds:J.listenerIds,targets:J.targets};
this.__cs(L,v,w,x,y);
return L;
},__ci:function(cP){if(cP.options&&cP.options.onUpdate){cP.options.onUpdate(cP.sources[cP.index],cP.targetObject);
}for(var j=cP.index+1;j<cP.propertyNames.length;j++){var cT=cP.sources[j];
cP.sources[j]=null;

if(!cT){continue;
}cT.removeListenerById(cP.listenerIds[j]);
}var cT=cP.sources[cP.index];
for(var j=cP.index+1;j<cP.propertyNames.length;j++){if(cP.arrayIndexValues[j-1]!==cy){cT=cT[cz+qx.lang.String.firstUp(cP.propertyNames[j-1])](cP.arrayIndexValues[j-1]);
}else{cT=cT[cz+qx.lang.String.firstUp(cP.propertyNames[j-1])]();
}cP.sources[j]=cT;
if(!cT){this.__cm(cP.targetObject,cP.targetPropertyChain);
break;
}if(j==cP.propertyNames.length-1){if(qx.Class.implementsInterface(cT,qx.data.IListData)){var cU=cP.arrayIndexValues[j]===cw?cT.length-1:cP.arrayIndexValues[j];
var cR=cT.getItem(cU);
this.__cp(cR,cP.targetObject,cP.targetPropertyChain,cP.options,cP.sources[cP.index]);
cP.listenerIds[j]=this.__cr(cT,cv,cP.targetObject,cP.targetPropertyChain,cP.options,cP.arrayIndexValues[j]);
}else{if(cP.propertyNames[j]!=null&&cT[cz+qx.lang.String.firstUp(cP.propertyNames[j])]!=null){var cR=cT[cz+qx.lang.String.firstUp(cP.propertyNames[j])]();
this.__cp(cR,cP.targetObject,cP.targetPropertyChain,cP.options,cP.sources[cP.index]);
}var cS=this.__cl(cT,cP.propertyNames[j]);
cP.listenerIds[j]=this.__cr(cT,cS,cP.targetObject,cP.targetPropertyChain,cP.options);
}}else{if(cP.listeners[j]==null){var cQ=qx.lang.Function.bind(this.__ci,this,cP);
cP.listeners.push(cQ);
}if(qx.Class.implementsInterface(cT,qx.data.IListData)){var cS=cv;
}else{var cS=this.__cl(cT,cP.propertyNames[j]);
}cP.listenerIds[j]=cT.addListener(cS,cP.listeners[j]);
}}},__cj:function(bV,bW,bX,bY,ca){var ce=bY.split(ct);
var cc=this.__cq(ce);
var cj=[];
var ci=[];
var cg=[];
var cf=[];
var cd=bX;
for(var i=0;i<ce.length-1;i++){if(cc[i]!==cy){cf.push(cv);
}else{try{cf.push(this.__cl(cd,ce[i]));
}catch(e){break;
}}cj[i]=cd;
var ch=function(){for(var j=i+1;j<ce.length-1;j++){var bP=cj[j];
cj[j]=null;

if(!bP){continue;
}bP.removeListenerById(cg[j]);
}var bP=cj[i];
for(var j=i+1;j<ce.length-1;j++){var bN=qx.lang.String.firstUp(ce[j-1]);
if(cc[j-1]!==cy){var bQ=cc[j-1]===cw?bP.getLength()-1:cc[j-1];
bP=bP[cz+bN](bQ);
}else{bP=bP[cz+bN]();
}cj[j]=bP;
if(ci[j]==null){ci.push(ch);
}if(qx.Class.implementsInterface(bP,qx.data.IListData)){var bO=cv;
}else{try{var bO=qx.data.SingleValueBinding.__cl(bP,ce[j]);
}catch(e){break;
}}cg[j]=bP.addListener(bO,ci[j]);
}qx.data.SingleValueBinding.__ck(bV,bW,bX,bY);
};
ci.push(ch);
cg[i]=cd.addListener(cf[i],ch);
var cb=qx.lang.String.firstUp(ce[i]);
if(cd[cz+cb]==null){cd=null;
}else if(cc[i]!==cy){cd=cd[cz+cb](cc[i]);
}else{cd=cd[cz+cb]();
}
if(!cd){break;
}}return {listenerIds:cg,targets:cj};
},__ck:function(N,O,P,Q){var U=this.__co(N,O);

if(U!=null){var W=O.substring(O.lastIndexOf(ct)+1,O.length);
if(W.charAt(W.length-1)==cu){var R=W.substring(W.lastIndexOf(cx)+1,W.length-1);
var T=W.substring(0,W.lastIndexOf(cx));
var V=U[cz+qx.lang.String.firstUp(T)]();

if(R==cw){R=V.length-1;
}
if(V!=null){var S=V.getItem(R);
}}else{var S=U[cz+qx.lang.String.firstUp(W)]();
}}this.__cn(P,Q,S);
},__cl:function(cW,cX){var cY=this.__cu(cW,cX);
if(cY==null){if(qx.Class.supportsEvent(cW.constructor,cX)){cY=cX;
}else if(qx.Class.supportsEvent(cW.constructor,cv+qx.lang.String.firstUp(cX))){cY=cv+qx.lang.String.firstUp(cX);
}else{throw new qx.core.AssertionError(cF,cX);
}}return cY;
},__cm:function(da,db){var dc=this.__co(da,db);

if(dc!=null){var dd=db.substring(db.lastIndexOf(ct)+1,db.length);
if(dd.charAt(dd.length-1)==cu){this.__cn(da,db,null);
return;
}if(dc[cM+qx.lang.String.firstUp(dd)]!=undefined){dc[cM+qx.lang.String.firstUp(dd)]();
}else{dc[cq+qx.lang.String.firstUp(dd)](null);
}}},__cn:function(bs,bt,bu){var by=this.__co(bs,bt);

if(by!=null){var bz=bt.substring(bt.lastIndexOf(ct)+1,bt.length);
if(bz.charAt(bz.length-1)==cu){var bv=bz.substring(bz.lastIndexOf(cx)+1,bz.length-1);
var bx=bz.substring(0,bz.lastIndexOf(cx));
var bw=by[cz+qx.lang.String.firstUp(bx)]();

if(bv==cw){bv=bw.length-1;
}
if(bw!=null){bw.setItem(bv,bu);
}}else{by[cq+qx.lang.String.firstUp(bz)](bu);
}}},__co:function(ck,cl){var co=cl.split(ct);
var cp=ck;
for(var i=0;i<co.length-1;i++){try{var cn=co[i];
if(cn.indexOf(cu)==cn.length-1){var cm=cn.substring(cn.indexOf(cx)+1,cn.length-1);
cn=cn.substring(0,cn.indexOf(cx));
}cp=cp[cz+qx.lang.String.firstUp(cn)]();

if(cm!=null){if(cm==cw){cm=cp.length-1;
}cp=cp.getItem(cm);
cm=null;
}}catch(bA){return null;
}}return cp;
},__cp:function(bB,bC,bD,bE,bF){bB=this.__ct(bB,bC,bD,bE);
if(bB==null){this.__cm(bC,bD);
}if(bB!=undefined){try{this.__cn(bC,bD,bB);
if(bE&&bE.onUpdate){bE.onUpdate(bF,bC,bB);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bE&&bE.onSetFail){bE.onSetFail(e);
}else{this.warn("Failed so set value "+bB+" on "+bC+". Error message: "+e);
}}}},__cq:function(bG){var bH=[];
for(var i=0;i<bG.length;i++){var name=bG[i];
if(qx.lang.String.endsWith(name,cu)){var bI=name.substring(name.indexOf(cx)+1,name.indexOf(cu));
if(name.indexOf(cu)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bI!==cw){if(bI==cy||isNaN(parseInt(bI))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(cx)!=0){bG[i]=name.substring(0,name.indexOf(cx));
bH[i]=cy;
bH[i+1]=bI;
bG.splice(i+1,0,cN);
i++;
}else{bH[i]=bI;
bG.splice(i,1,cN);
}}else{bH[i]=cy;
}}return bH;
},__cr:function(be,bf,bg,bh,bi,bj){var bk;
{};
var bm=function(bR,e){if(bR!==cy){if(bR===cw){bR=be.length-1;
}var bU=be.getItem(bR);
if(bU==undefined){qx.data.SingleValueBinding.__cm(bg,bh);
}var bS=e.getData().start;
var bT=e.getData().end;

if(bR<bS||bR>bT){return;
}}else{var bU=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+be+" by "+bf+" to "+bg+" ("+bh+")");
qx.log.Logger.debug("Data before conversion: "+bU);
}bU=qx.data.SingleValueBinding.__ct(bU,bg,bh,bi);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+bU);
}try{if(bU!=undefined){qx.data.SingleValueBinding.__cn(bg,bh,bU);
}else{qx.data.SingleValueBinding.__cm(bg,bh);
}if(bi&&bi.onUpdate){bi.onUpdate(be,bg,bU);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bi&&bi.onSetFail){bi.onSetFail(e);
}else{this.warn("Failed so set value "+bU+" on "+bg+". Error message: "+e);
}}};
if(!bj){bj=cy;
}bm=qx.lang.Function.bind(bm,be,bj);
var bl=be.addListener(bf,bm);
return bl;
},__cs:function(bn,bo,bp,bq,br){if(this.__ch[bo.toHashCode()]===undefined){this.__ch[bo.toHashCode()]=[];
}this.__ch[bo.toHashCode()].push([bn,bo,bp,bq,br]);
},__ct:function(a,b,c,d){if(d&&d.converter){var g;

if(b.getModel){g=b.getModel();
}return d.converter(a,g);
}else{var k=this.__co(b,c);
var l=c.substring(c.lastIndexOf(ct)+1,c.length);
if(k==null){return a;
}var h=qx.Class.getPropertyDefinition(k.constructor,l);
var f=h==null?cy:h.check;
return this.__cv(a,f);
}},__cu:function(bb,bc){var bd=qx.Class.getPropertyDefinition(bb.constructor,bc);

if(bd==null){return null;
}return bd.event;
},__cv:function(X,Y){var ba=qx.lang.Type.getClass(X);
if((ba==cs||ba==cr)&&(Y==cH||Y==cB)){X=parseInt(X);
}if((ba==cK||ba==cs||ba==cA)&&Y==cr){X=X+cy;
}if((ba==cs||ba==cr)&&(Y==cs||Y==cD)){X=parseFloat(X);
}return X;
},removeBindingFromObject:function(q,r){if(r.type==cO){for(var i=0;i<r.sources.length;i++){if(r.sources[i]){r.sources[i].removeListenerById(r.listenerIds[i]);
}}for(var i=0;i<r.targets.length;i++){if(r.targets[i]){r.targets[i].removeListenerById(r.targetListenerIds[i]);
}}}else{q.removeListenerById(r);
}var s=this.__ch[q.toHashCode()];
if(s!=undefined){for(var i=0;i<s.length;i++){if(s[i][0]==r){qx.lang.Array.remove(s,s[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bL){{};
var bM=this.__ch[bL.toHashCode()];

if(bM!=undefined){for(var i=bM.length-1;i>=0;i--){this.removeBindingFromObject(bL,bM[i][0]);
}}},getAllBindingsForObject:function(cV){if(this.__ch[cV.toHashCode()]===undefined){this.__ch[cV.toHashCode()]=[];
}return this.__ch[cV.toHashCode()];
},removeAllBindings:function(){for(var bK in this.__ch){var bJ=qx.core.ObjectRegistry.fromHashCode(bK);
if(bJ==null){delete this.__ch[bK];
continue;
}this.removeAllBindingsForObject(bJ);
}this.__ch={};
},getAllBindings:function(){return this.__ch;
},showBindingInLog:function(m,n){var p;
for(var i=0;i<this.__ch[m.toHashCode()].length;i++){if(this.__ch[m.toHashCode()][i][0]==n){p=this.__ch[m.toHashCode()][i];
break;
}}
if(p===undefined){var o=cC;
}else{var o=cE+p[1]+cL+p[2]+cI+p[3]+cL+p[4]+cJ;
}qx.log.Logger.debug(o);
},showAllBindingsInLog:function(){for(var u in this.__ch){var t=qx.core.ObjectRegistry.fromHashCode(u);

for(var i=0;i<this.__ch[u].length;i++){this.showBindingInLog(t,this.__ch[u][i][0]);
}}}}});
})();
(function(){var x="",w="g",v="0",u='\\$1',t="%",s='-',r="qx.lang.String",q=' ',p='\n',o="undefined";
qx.Class.define(r,{statics:{camelCase:function(O){return O.replace(/\-([a-z])/g,function(F,G){return G.toUpperCase();
});
},hyphenate:function(M){return M.replace(/[A-Z]/g,function(J){return (s+J.charAt(0).toLowerCase());
});
},capitalize:function(a){return a.replace(/\b[a-z]/g,function(Q){return Q.toUpperCase();
});
},clean:function(D){return this.trim(D.replace(/\s+/g,q));
},trimLeft:function(C){return C.replace(/^\s+/,x);
},trimRight:function(E){return E.replace(/\s+$/,x);
},trim:function(K){return K.replace(/^\s+|\s+$/g,x);
},startsWith:function(y,z){return y.indexOf(z)===0;
},endsWith:function(H,I){return H.substring(H.length-I.length,H.length)===I;
},repeat:function(m,n){return m.length>=0?new Array(n+1).join(m):x;
},pad:function(b,length,c){var d=length-b.length;

if(d>0){if(typeof c===o){c=v;
}return this.repeat(c,d)+b;
}else{return b;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(A,B){return A.indexOf(B)!=-1;
},format:function(j,k){var l=j;

for(var i=0;i<k.length;i++){l=l.replace(new RegExp(t+(i+1),w),k[i]);
}return l;
},escapeRegexpChars:function(N){return N.replace(/([.*+?^${}()|[\]\/\\])/g,u);
},toArray:function(L){return L.split(/\B|\b/g);
},stripTags:function(P){return P.replace(/<\/?[^>]+>/gi,x);
},stripScripts:function(e,f){var h=x;
var g=e.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){h+=arguments[1]+p;
return x;
});

if(f===true){qx.lang.Function.globalEval(h);
}return g;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(d,e){},splice:function(g,h,i){},contains:function(f){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var e="qx.globalErrorHandling",d="on",c="qx.event.GlobalError";
qx.Class.define(c,{statics:{setErrorHandler:function(j,k){this.__cw=j||null;
this.__cx=k||window;

if(qx.core.Setting.get(e)===d){if(j&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__cy,this);
}
if(!j&&window.onerror){window.onerror=null;
}}},__cy:function(f,g,h){if(this.__cw){this.handleError(new qx.core.WindowError(f,g,h));
return true;
}},observeMethod:function(b){if(qx.core.Setting.get(e)===d){var self=this;
return function(){if(!self.__cw){return b.apply(this,arguments);
}
try{return b.apply(this,arguments);
}catch(i){self.handleError(new qx.core.GlobalError(i,arguments));
}};
}else{return b;
}},handleError:function(a){if(this.__cw){this.__cw.call(this.__cx,a);
}}},defer:function(l){qx.core.Setting.define(e,d);
l.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cz=c;
this.__cA=d||b;
this.__cB=e===undefined?-1:e;
},members:{__cz:null,__cA:null,__cB:null,toString:function(){return this.__cz;
},getUri:function(){return this.__cA;
},getLineNumber:function(){return this.__cB;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__cC=b+(c&&c.message?c.message:c);
Error.call(this,this.__cC);
this.__cD=d;
this.__cE=c;
},members:{__cE:null,__cD:null,__cC:null,toString:function(){return this.__cC;
},getArguments:function(){return this.__cD;
},getSourceException:function(){return this.__cE;
}},destruct:function(){this.__cE=null;
this.__cD=null;
this.__cC=null;
}});
})();
(function(){var e=": ",d="qx.type.BaseError",c="";
qx.Class.define(d,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__cF=a||c;
this.message=b||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__cF:null,message:null,getComment:function(){return this.__cF;
},toString:function(){return this.__cF+e+this.message;
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__cG=qx.dev.StackTrace.getStackTrace();
},members:{__cG:null,getStackTrace:function(){return this.__cG;
}}});
})();
(function(){var x=":",w="qx.client",v="anonymous",u="...",t="qx.dev.StackTrace",s="",r="\n",q="/source/class/",p=".";
qx.Class.define(t,{statics:{getStackTrace:qx.core.Variant.select(w,{"gecko":function(){try{throw new Error();
}catch(bb){var j=this.getStackTraceFromError(bb);
qx.lang.Array.removeAt(j,0);
var g=this.getStackTraceFromCaller(arguments);
var e=g.length>j.length?g:j;

for(var i=0;i<Math.min(g.length,j.length);i++){var f=g[i];

if(f.indexOf(v)>=0){continue;
}var n=f.split(x);

if(n.length!=2){continue;
}var l=n[0];
var d=n[1];
var c=j[i];
var o=c.split(x);
var k=o[0];
var b=o[1];

if(qx.Class.getByName(k)){var h=k;
}else{h=l;
}var m=h+x;

if(d){m+=d+x;
}m+=b;
e[i]=m;
}return e;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var E;

try{E.bar();
}catch(N){var F=this.getStackTraceFromError(N);
qx.lang.Array.removeAt(F,0);
return F;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(w,{"opera":function(bc){return [];
},"default":function(y){var D=[];
var C=qx.lang.Function.getCaller(y);
var z={};

while(C){var A=qx.lang.Function.getName(C);
D.push(A);

try{C=C.caller;
}catch(ba){break;
}
if(!C){break;
}var B=qx.core.ObjectRegistry.toHashCode(C);

if(z[B]){D.push(u);
break;
}z[B]=C;
}return D;
}}),getStackTraceFromError:qx.core.Variant.select(w,{"gecko":function(G){if(!G.stack){return [];
}var M=/@(.+):(\d+)$/gm;
var H;
var I=[];

while((H=M.exec(G.stack))!=null){var J=H[1];
var L=H[2];
var K=this.__cH(J);
I.push(K+x+L);
}return I;
},"webkit":function(a){if(a.sourceURL&&a.line){return [this.__cH(a.sourceURL)+x+a.line];
}else{return [];
}},"opera":function(O){if(O.message.indexOf("Backtrace:")<0){return [];
}var Q=[];
var R=qx.lang.String.trim(O.message.split("Backtrace:")[1]);
var S=R.split(r);

for(var i=0;i<S.length;i++){var P=S[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(P&&P.length>=2){var U=P[1];
var T=this.__cH(P[2]);
Q.push(T+x+U);
}}return Q;
},"default":function(){return [];
}}),__cH:function(V){var Y=q;
var W=V.indexOf(Y);
var X=(W==-1)?V:V.substring(W+Y.length).replace(/\//g,p).replace(/\.js$/,s);
return X;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(i){return this.getClass(i)==e;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==c||h instanceof Number));
},isBoolean:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Boolean));
},isDate:function(a){return (a!==null&&(this.getClass(a)==d||a instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var c="qx.event.IEventHandler";
qx.Interface.define(c,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(a,b){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var j="qx.util.ObjectPool",h="Integer";
qx.Class.define(j,{extend:qx.core.Object,construct:function(g){arguments.callee.base.call(this);
this.__cI={};

if(g!=null){this.setSize(g);
}},properties:{size:{check:h,init:Infinity}},members:{__cI:null,getObject:function(a){if(this.$$disposed){return;
}
if(!a){throw new Error("Class needs to be defined!");
}var b=null;
var c=this.__cI[a.classname];

if(c){b=c.pop();
}
if(b){b.$$pooled=false;
}else{b=new a;
}return b;
},poolObject:function(k){if(!this.__cI){return;
}var m=k.classname;
var n=this.__cI[m];

if(k.$$pooled){throw new Error("Object is already pooled: "+k);
}
if(!n){this.__cI[m]=n=[];
}if(n.length>this.getSize()){if(k.destroy){k.destroy();
}else{k.dispose();
}return;
}k.$$pooled=true;
n.push(k);
}},destruct:function(){var f=this.__cI;
var d,e,i,l;

for(d in f){e=f[d];

for(i=0,l=e.length;i<l;i++){e[i].dispose();
}}delete this.__cI;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var k="qx.util.DisposeUtil";
qx.Class.define(k,{statics:{disposeFields:function(s,t){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=t.length;i<l;i++){var name=t[i];

if(s[name]==null||!s.hasOwnProperty(name)){continue;
}s[name]=null;
}},disposeObjects:function(m,n){var name;

for(var i=0,l=n.length;i<l;i++){name=n[i];

if(m[name]==null||!m.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(m[name].dispose){m[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}m[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(a,b){var c=a[b];

if(!c){return;
}if(qx.core.ObjectRegistry.inShutDown){a[b]=null;
return;
}try{for(var d in c){if(c.hasOwnProperty(d)){c[d].dispose();
}}}catch(o){throw new Error("The map field: "+b+" of object: "+a+" has non disposable entries: "+o);
}a[b]=null;
},disposeTriggeredBy:function(p,q){var r=q.dispose;
q.dispose=function(){r.call(q);
p.dispose();
};
}}});
})();
(function(){var c="qx.event.IEventDispatcher";
qx.Interface.define(c,{members:{canDispatchEvent:function(a,event,b){this.assertInstance(event,qx.event.type.Event);
this.assertString(b);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var d="qx.event.handler.Object";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(f,g,h){},unregisterEvent:function(a,b,c){}},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var q="indexOf",p="lastIndexOf",o="slice",n="concat",m="join",k="toLocaleUpperCase",j="shift",h="substr",g="filter",f="unshift",N="match",M="quote",L="qx.lang.Generics",K="localeCompare",J="sort",I="some",H="charAt",G="split",F="substring",E="pop",y="toUpperCase",z="replace",w="push",x="charCodeAt",u="every",v="reverse",r="search",t="forEach",A="map",B="toLowerCase",D="splice",C="toLocaleLowerCase";
qx.Class.define(L,{statics:{__cJ:{"Array":[m,v,J,w,E,j,f,D,n,o,q,p,t,A,g,I,u],"String":[M,F,B,y,H,x,q,p,C,k,K,N,r,z,G,h,n,o]},__cK:function(P,Q){return function(s){return P.prototype[Q].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cL:function(){var a=qx.lang.Generics.__cJ;

for(var e in a){var c=window[e];
var b=a[e];

for(var i=0,l=b.length;i<l;i++){var d=b[i];

if(!c[d]){c[d]=qx.lang.Generics.__cK(c,d);
}}}}},defer:function(O){O.__cL();
}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(e){return this._dynamic[e];
},isDynamic:function(a){return !!this._dynamic[a];
},resolve:function(f){if(f&&this._dynamic[f]){return this._dynamic[f];
}return f;
},_setDynamic:function(d){this._dynamic=d;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__cM={};
this.add(a,h);
},members:{__cM:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__cM[k]){return this.__cM[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__cM[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(q,r){this.__cM[q]=r;
var t=this._getDynamic();
for(var s in t){if(s.substring(0,s.indexOf(j))===q){t[s]=r+s.substring(q.length);
}}},remove:function(u){delete this.__cM[u];
},resolve:function(o){var p=this._getDynamic();

if(o!==null){o=this._preprocess(o);
}return p[o]||o;
}},destruct:function(){this.__cM=null;
}});
})();
(function(){var z="px",y="qx.client",x="div",w="img",v="",u="no-repeat",t="scale-x",s="mshtml",r="scale",q="scale-y",U="qx/icon",T="repeat",S=".png",R="crop",Q="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",P='<div style="',O="repeat-y",N='<img src="',M="qx.bom.element.Decoration",L="', sizingMethod='",G="png",H="')",E='"></div>',F='"/>',C='" style="',D="none",A="webkit",B=" ",I="repeat-x",J="DXImageTransform.Microsoft.AlphaImageLoader",K="absolute";
qx.Class.define(M,{statics:{DEBUG:false,__cN:{},__cO:qx.core.Variant.isSet(y,s),__cP:qx.core.Variant.select(y,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__cQ:{"scale-x":w,"scale-y":w,"scale":w,"repeat":x,"no-repeat":x,"repeat-x":x,"repeat-y":x},update:function(a,b,c,d){var g=this.getTagName(c,b);

if(g!=a.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var h=this.getAttributes(b,c,d);

if(g===w){a.src=h.src;
}if(a.style.backgroundPosition!=v&&h.style.backgroundPosition===undefined){h.style.backgroundPosition=null;
}if(a.style.clip!=v&&h.style.clip===undefined){h.style.clip=null;
}var f=qx.bom.element.Style;
f.setStyles(a,h.style);
if(this.__cO){try{a.filters[J].apply();
}catch(e){}}},create:function(Y,ba,bb){var bc=this.getTagName(ba,Y);
var be=this.getAttributes(Y,ba,bb);
var bd=qx.bom.element.Style.compile(be.style);

if(bc===w){return N+be.src+C+bd+F;
}else{return P+bd+E;
}},getTagName:function(bG,bH){if(qx.core.Variant.isSet(y,s)){if(bH&&this.__cO&&this.__cP[bG]&&qx.lang.String.endsWith(bH,S)){return x;
}}return this.__cQ[bG];
},getAttributes:function(l,m,n){if(!n){n={};
}
if(!n.position){n.position=K;
}
if(qx.core.Variant.isSet(y,s)){n.fontSize=0;
n.lineHeight=0;
}else if(qx.core.Variant.isSet(y,A)){n.WebkitUserDrag=D;
}var p=qx.util.ResourceManager.getInstance().getImageFormat(l)||qx.io.ImageLoader.getFormat(l);
{};
var o;
if(this.__cO&&this.__cP[m]&&p===G){o=this.__cT(n,m,l);
}else{if(m===r){o=this.__cU(n,m,l);
}else if(m===t||m===q){o=this.__cV(n,m,l);
}else{o=this.__cY(n,m,l);
}}return o;
},__cR:function(V,W,X){if(V.width==null&&W!=null){V.width=W+z;
}
if(V.height==null&&X!=null){V.height=X+z;
}return V;
},__cS:function(i){var j=qx.util.ResourceManager.getInstance().getImageWidth(i)||qx.io.ImageLoader.getWidth(i);
var k=qx.util.ResourceManager.getInstance().getImageHeight(i)||qx.io.ImageLoader.getHeight(i);
return {width:j,height:k};
},__cT:function(bT,bU,bV){var bY=this.__cS(bV);
bT=this.__cR(bT,bY.width,bY.height);
var bX=bU==u?R:r;
var bW=Q+qx.util.ResourceManager.getInstance().toUri(bV)+L+bX+H;
bT.filter=bW;
bT.backgroundImage=bT.backgroundRepeat=v;
return {style:bT};
},__cU:function(bB,bC,bD){var bE=qx.util.ResourceManager.getInstance().toUri(bD);
var bF=this.__cS(bD);
bB=this.__cR(bB,bF.width,bF.height);
return {src:bE,style:bB};
},__cV:function(bt,bu,bv){var bz=qx.util.ResourceManager.getInstance();
var by=bz.isClippedImage(bv);
var bA=this.__cS(bv);

if(by){var bx=bz.getData(bv);
var bw=bz.toUri(bx[4]);

if(bu===t){bt=this.__cW(bt,bx,bA.height);
}else{bt=this.__cX(bt,bx,bA.width);
}return {src:bw,style:bt};
}else{{};

if(bu==t){bt.height=bA.height==null?null:bA.height+z;
}else if(bu==q){bt.width=bA.width==null?null:bA.width+z;
}var bw=bz.toUri(bv);
return {src:bw,style:bt};
}},__cW:function(bI,bJ,bK){var bL=qx.util.ResourceManager.getInstance().getImageHeight(bJ[4]);
bI.clip={top:-bJ[6],height:bK};
bI.height=bL+z;
if(bI.top!=null){bI.top=(parseInt(bI.top,10)+bJ[6])+z;
}else if(bI.bottom!=null){bI.bottom=(parseInt(bI.bottom,10)+bK-bL-bJ[6])+z;
}return bI;
},__cX:function(bo,bp,bq){var br=qx.util.ResourceManager.getInstance().getImageWidth(bp[4]);
bo.clip={left:-bp[5],width:bq};
bo.width=br+z;
if(bo.left!=null){bo.left=(parseInt(bo.left,10)+bp[5])+z;
}else if(bo.right!=null){bo.right=(parseInt(bo.right,10)+bq-br-bp[5])+z;
}return bo;
},__cY:function(bf,bh,bi){var bn=qx.util.ResourceManager.getInstance().isClippedImage(bi);
var bm=this.__cS(bi);
if(bn&&bh!==T){var bl=qx.util.ResourceManager.getInstance().getData(bi);
var bk=qx.bom.element.Background.getStyles(bl[4],bh,bl[5],bl[6]);

for(var bj in bk){bf[bj]=bk[bj];
}
if(bm.width!=null&&bf.width==null&&(bh==O||bh===u)){bf.width=bm.width+z;
}
if(bm.height!=null&&bf.height==null&&(bh==I||bh===u)){bf.height=bm.height+z;
}return {style:bf};
}else{{};
bf=this.__cR(bf,bm.width,bm.height);
bf=this.__da(bf,bi,bh);
return {style:bf};
}},__da:function(bM,bN,bO){var top=null;
var bS=null;

if(bM.backgroundPosition){var bP=bM.backgroundPosition.split(B);
bS=parseInt(bP[0]);

if(isNaN(bS)){bS=bP[0];
}top=parseInt(bP[1]);

if(isNaN(top)){top=bP[1];
}}var bR=qx.bom.element.Background.getStyles(bN,bO,bS,top);

for(var bQ in bR){bM[bQ]=bR[bQ];
}if(bM.filter){bM.filter=v;
}return bM;
},__db:function(bs){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(bs)&&bs.indexOf(U)==-1){if(!this.__cN[bs]){qx.log.Logger.debug("Potential clipped image candidate: "+bs);
this.__cN[bs]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(y,{"mshtml":function(){return qx.bom.element.Decoration.__cO;
},"default":function(){return false;
}})}});
})();
(function(){var v="auto",u="px",t=",",s="clip:auto;",r="rect(",q=");",p="",o=")",n="qx.bom.element.Clip",m="string",j="rect(auto)",l="clip:rect(",k="clip",i="rect(auto,auto,auto,auto)";
qx.Class.define(n,{statics:{compile:function(F){if(!F){return s;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?v:J+u);
K=v;
}else{G=(J==null?v:K+J+u);
K=K+u;
}
if(top==null){H=(I==null?v:I+u);
top=v;
}else{H=(I==null?v:top+I+u);
top=top+u;
}return l+top+t+G+t+H+t+K+q;
},get:function(w,x){var z=qx.bom.element.Style.get(w,k,x,false);
var E,top,C,B;
var y,A;

if(typeof z===m&&z!==v&&z!==p){z=qx.lang.String.trim(z);
if(/\((.*)\)/.test(z)){var D=RegExp.$1.split(t);
top=qx.lang.String.trim(D[0]);
y=qx.lang.String.trim(D[1]);
A=qx.lang.String.trim(D[2]);
E=qx.lang.String.trim(D[3]);
if(E===v){E=null;
}
if(top===v){top=null;
}
if(y===v){y=null;
}
if(A===v){A=null;
}if(top!=null){top=parseInt(top,10);
}
if(y!=null){y=parseInt(y,10);
}
if(A!=null){A=parseInt(A,10);
}
if(E!=null){E=parseInt(E,10);
}if(y!=null&&E!=null){C=y-E;
}else if(y!=null){C=y;
}
if(A!=null&&top!=null){B=A-top;
}else if(A!=null){B=A;
}}else{throw new Error("Could not parse clip string: "+z);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(a,b){if(!b){a.style.clip=i;
return;
}var g=b.left;
var top=b.top;
var f=b.width;
var e=b.height;
var c,d;

if(g==null){c=(f==null?v:f+u);
g=v;
}else{c=(f==null?v:g+f+u);
g=g+u;
}
if(top==null){d=(e==null?v:e+u);
top=v;
}else{d=(e==null?v:top+e+u);
top=top+u;
}a.style.clip=r+top+t+c+t+d+t+g+o;
},reset:function(h){h.style.clip=qx.bom.client.Engine.MSHTML?j:v;
}}});
})();
(function(){var l="n-resize",k="e-resize",j="nw-resize",i="ne-resize",h="",g="cursor:",f="qx.client",e=";",d="qx.bom.element.Cursor",c="cursor",b="hand";
qx.Class.define(d,{statics:{__dc:qx.core.Variant.select(f,{"mshtml":{"cursor":b,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"opera":{"col-resize":k,"row-resize":l,"ew-resize":k,"ns-resize":l,"nesw-resize":i,"nwse-resize":j},"default":{}}),compile:function(q){return g+(this.__dc[q]||q)+e;
},get:function(m,n){return qx.bom.element.Style.get(m,c,n,false);
},set:function(o,p){o.style.cursor=this.__dc[p]||p;
},reset:function(a){a.style.cursor=h;
}}});
})();
(function(){var u="",t="qx.client",s=";",r="filter",q="opacity:",p="opacity",o="MozOpacity",n=");",m=")",l="zoom:1;filter:alpha(opacity=",i="qx.bom.element.Opacity",k="alpha(opacity=",j="-moz-opacity:";
qx.Class.define(i,{statics:{compile:qx.core.Variant.select(t,{"mshtml":function(A){if(A>=1){return u;
}
if(A<0.00001){A=0;
}return l+(A*100)+n;
},"gecko":function(v){if(v==1){v=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return j+v+s;
}else{return q+v+s;
}},"default":function(w){if(w==1){return u;
}return q+w+s;
}}),set:qx.core.Variant.select(t,{"mshtml":function(e,f){var g=qx.bom.element.Style.get(e,r,qx.bom.element.Style.COMPUTED_MODE,false);
if(f>=1){e.style.filter=g.replace(/alpha\([^\)]*\)/gi,u);
return;
}
if(f<0.00001){f=0;
}if(!e.currentStyle||!e.currentStyle.hasLayout){e.style.zoom=1;
}e.style.filter=g.replace(/alpha\([^\)]*\)/gi,u)+k+f*100+m;
},"gecko":function(a,b){if(b==1){b=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){a.style.MozOpacity=b;
}else{a.style.opacity=b;
}},"default":function(F,G){if(G==1){G=u;
}F.style.opacity=G;
}}),reset:qx.core.Variant.select(t,{"mshtml":function(c){var d=qx.bom.element.Style.get(c,r,qx.bom.element.Style.COMPUTED_MODE,false);
c.style.filter=d.replace(/alpha\([^\)]*\)/gi,u);
},"gecko":function(h){if(qx.bom.client.Engine.VERSION<1.7){h.style.MozOpacity=u;
}else{h.style.opacity=u;
}},"default":function(E){E.style.opacity=u;
}}),get:qx.core.Variant.select(t,{"mshtml":function(H,I){var J=qx.bom.element.Style.get(H,r,I,false);

if(J){var K=J.match(/alpha\(opacity=(.*)\)/);

if(K&&K[1]){return parseFloat(K[1])/100;
}}return 1.0;
},"gecko":function(B,C){var D=qx.bom.element.Style.get(B,qx.bom.client.Engine.VERSION<1.7?o:p,C,false);

if(D==0.999999){D=1.0;
}
if(D!=null){return parseFloat(D);
}return 1.0;
},"default":function(x,y){var z=qx.bom.element.Style.get(x,p,y,false);

if(z!=null){return parseFloat(z);
}return 1.0;
}})}});
})();
(function(){var z="qx.client",y="",x="boxSizing",w="box-sizing",v=":",u="border-box",t="qx.bom.element.BoxSizing",s="KhtmlBoxSizing",r="-moz-box-sizing",q="WebkitBoxSizing",n=";",p="-khtml-box-sizing",o="content-box",m="-webkit-box-sizing",k="MozBoxSizing";
qx.Class.define(t,{statics:{__dd:qx.core.Variant.select(z,{"mshtml":null,"webkit":[x,s,q],"gecko":[k],"opera":[x]}),__de:qx.core.Variant.select(z,{"mshtml":null,"webkit":[w,p,m],"gecko":[r],"opera":[w]}),__df:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__dg:function(h){var j=this.__df;
return j.tags[h.tagName.toLowerCase()]||j.types[h.type];
},compile:qx.core.Variant.select(z,{"mshtml":function(g){{};
},"default":function(D){var F=this.__de;
var E=y;

if(F){for(var i=0,l=F.length;i<l;i++){E+=F[i]+v+D+n;
}}return E;
}}),get:qx.core.Variant.select(z,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__dg(G)){return o;
}}return u;
},"default":function(d){var f=this.__dd;
var e;

if(f){for(var i=0,l=f.length;i<l;i++){e=qx.bom.element.Style.get(d,f[i],null,false);

if(e!=null&&e!==y){return e;
}}}return y;
}}),set:qx.core.Variant.select(z,{"mshtml":function(B,C){{};
},"default":function(a,b){var c=this.__dd;

if(c){for(var i=0,l=c.length;i<l;i++){a.style[c[i]]=b;
}}}}),reset:function(A){this.set(A,y);
}}});
})();
(function(){var bO="",bN="qx.client",bM="hidden",bL="-moz-scrollbars-none",bK="overflow",bJ=";",bI="overflowY",bH=":",bG="overflowX",bF="overflow:",cb="none",ca="scroll",bY="borderLeftStyle",bX="borderRightStyle",bW="div",bV="borderRightWidth",bU="overflow-y",bT="borderLeftWidth",bS="-moz-scrollbars-vertical",bR="100px",bP="qx.bom.element.Overflow",bQ="overflow-x";
qx.Class.define(bP,{statics:{__dh:null,getScrollbarWidth:function(){if(this.__dh!==null){return this.__dh;
}var E=qx.bom.element.Style;
var G=function(cc,cd){return parseInt(E.get(cc,cd))||0;
};
var H=function(z){return (E.get(z,bX)==cb?0:G(z,bV));
};
var F=function(U){return (E.get(U,bY)==cb?0:G(U,bT));
};
var J=qx.core.Variant.select(bN,{"mshtml":function(bj){if(E.get(bj,bI)==bM||bj.clientWidth==0){return H(bj);
}return Math.max(0,bj.offsetWidth-bj.clientLeft-bj.clientWidth);
},"default":function(Y){if(Y.clientWidth==0){var ba=E.get(Y,bK);
var bb=(ba==ca||ba==bS?16:0);
return Math.max(0,H(Y)+bb);
}return Math.max(0,(Y.offsetWidth-Y.clientWidth-F(Y)));
}});
var I=function(P){return J(P)-H(P);
};
var t=document.createElement(bW);
var s=t.style;
s.height=s.width=bR;
s.overflow=ca;
document.body.appendChild(t);
var c=I(t);
this.__dh=c?c:16;
document.body.removeChild(t);
return this.__dh;
},_compile:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk,bl){if(bl==bM){bl=bL;
}return bF+bl+bJ;
}:
function(bC,bD){return bC+bH+bD+bJ;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){return bF+bg+bJ;
}:
function(m,n){return m+bH+n+bJ;
},"default":function(bc,bd){return bc+bH+bd+bJ;
}}),compileX:function(K){return this._compile(bQ,K);
},compileY:function(X){return this._compile(bU,X);
},getX:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(R,S){var T=qx.bom.element.Style.get(R,bK,S,false);

if(T===bL){T=bM;
}return T;
}:
function(bA,bB){return qx.bom.element.Style.get(bA,bG,bB,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(i,j){return qx.bom.element.Style.get(i,bK,j,false);
}:
function(k,l){return qx.bom.element.Style.get(k,bG,l,false);
},"default":function(bu,bv){return qx.bom.element.Style.get(bu,bG,bv,false);
}}),setX:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bq,br){if(br==bM){br=bL;
}bq.style.overflow=br;
}:
function(x,y){x.style.overflowX=y;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(e,f){e.style.overflow=f;
}:
function(bm,bn){bm.style.overflowX=bn;
},"default":function(bh,bi){bh.style.overflowX=bi;
}}),resetX:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be){be.style.overflow=bO;
}:
function(d){d.style.overflowX=bO;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(a,b){a.style.overflow=bO;
}:
function(bs,bt){bs.style.overflowX=bO;
},"default":function(bE){bE.style.overflowX=bO;
}}),getY:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(o,p){var q=qx.bom.element.Style.get(o,bK,p,false);

if(q===bL){q=bM;
}return q;
}:
function(ce,cf){return qx.bom.element.Style.get(ce,bI,cf,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(V,W){return qx.bom.element.Style.get(V,bK,W,false);
}:
function(v,w){return qx.bom.element.Style.get(v,bI,w,false);
},"default":function(C,D){return qx.bom.element.Style.get(C,bI,D,false);
}}),setY:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(N,O){if(O===bM){O=bL;
}N.style.overflow=O;
}:
function(A,B){A.style.overflowY=B;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(g,h){g.style.overflow=h;
}:
function(bw,bx){bw.style.overflowY=bx;
},"default":function(L,M){L.style.overflowY=M;
}}),resetY:qx.core.Variant.select(bN,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(u){u.style.overflow=bO;
}:
function(Q){Q.style.overflowY=bO;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(by,bz){by.style.overflow=bO;
}:
function(bo,bp){bo.style.overflowY=bO;
},"default":function(r){r.style.overflowY=bO;
}})}});
})();
(function(){var w="",v="qx.client",u="user-select",t="userSelect",s="appearance",r="style",q="MozUserModify",p="px",o="-webkit-appearance",n="styleFloat",S="-webkit-user-select",R="-moz-appearance",Q="pixelHeight",P="MozAppearance",O=":",N="pixelTop",M="pixelLeft",L="text-overflow",K="-moz-user-select",J="MozUserSelect",D="qx.bom.element.Style",E="-moz-user-modify",B="-webkit-user-modify",C="WebkitUserSelect",z="-o-text-overflow",A="pixelRight",x="cssFloat",y="pixelWidth",F="pixelBottom",G=";",I="WebkitUserModify",H="WebkitAppearance";
qx.Class.define(D,{statics:{__di:{styleNames:{"float":qx.core.Variant.select(v,{"mshtml":n,"default":x}),"appearance":qx.core.Variant.select(v,{"gecko":P,"webkit":H,"default":s}),"userSelect":qx.core.Variant.select(v,{"gecko":J,"webkit":C,"default":t}),"userModify":qx.core.Variant.select(v,{"gecko":q,"webkit":I,"default":t})},cssNames:{"appearance":qx.core.Variant.select(v,{"gecko":R,"webkit":o,"default":s}),"userSelect":qx.core.Variant.select(v,{"gecko":K,"webkit":S,"default":u}),"userModify":qx.core.Variant.select(v,{"gecko":E,"webkit":B,"default":u}),"textOverflow":qx.core.Variant.select(v,{"opera":z,"default":L})},mshtmlPixel:{width:y,height:Q,left:M,right:A,top:N,bottom:F},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__dj:{},compile:function(T){var X=[];
var bc=this.__di;
var bb=bc.special;
var Y=bc.cssNames;
var W=this.__dj;
var ba=qx.lang.String;
var name,V,U;

for(name in T){U=T[name];

if(U==null){continue;
}name=Y[name]||name;
if(bb[name]){X.push(bb[name].compile(U));
}else{V=W[name];

if(!V){V=W[name]=ba.hyphenate(name);
}X.push(V,O,U,G);
}}return X.join(w);
},setCss:qx.core.Variant.select(v,{"mshtml":function(by,bz){by.style.cssText=bz;
},"default":function(bw,bx){bw.setAttribute(r,bx);
}}),getCss:qx.core.Variant.select(v,{"mshtml":function(a){return a.style.cssText.toLowerCase();
},"default":function(bs){return bs.getAttribute(r);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(b,name,c,d){{};
var e=this.__di;
name=e.styleNames[name]||name;
if(d!==false&&e.special[name]){return e.special[name].set(b,c);
}else{b.style[name]=c!==null?c:w;
}},setStyles:function(bd,be,bf){{};
var bl=this.__di;
var bi=bl.styleNames;
var bk=bl.special;
var bg=bd.style;

for(var bj in be){var bh=be[bj];
var name=bi[bj]||bj;

if(bh===undefined){if(bf!==false&&bk[name]){bk[name].reset(bd);
}else{bg[name]=w;
}}else{if(bf!==false&&bk[name]){bk[name].set(bd,bh);
}else{bg[name]=bh!==null?bh:w;
}}}},reset:function(bt,name,bu){var bv=this.__di;
name=bv.styleNames[name]||name;
if(bu!==false&&bv.special[name]){return bv.special[name].reset(bt);
}else{bt.style[name]=w;
}},get:qx.core.Variant.select(v,{"mshtml":function(f,name,g,h){var m=this.__di;
name=m.styleNames[name]||name;
if(h!==false&&m.special[name]){return m.special[name].get(f,g);
}if(!f.currentStyle){return f.style[name]||w;
}switch(g){case this.LOCAL_MODE:return f.style[name]||w;
case this.CASCADED_MODE:return f.currentStyle[name]||w;
default:var l=f.currentStyle[name]||w;
if(/^-?[\.\d]+(px)?$/i.test(l)){return l;
}var k=m.mshtmlPixel[name];

if(k){var i=f.style[name];
f.style[name]=l||0;
var j=f.style[k]+p;
f.style[name]=i;
return j;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(l)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return l;
}},"default":function(bm,name,bn,bo){var br=this.__di;
name=br.styleNames[name]||name;
if(bo!==false&&br.special[name]){return br.special[name].get(bm,bn);
}switch(bn){case this.LOCAL_MODE:return bm.style[name]||w;
case this.CASCADED_MODE:if(bm.currentStyle){return bm.currentStyle[name]||w;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bp=qx.dom.Node.getDocument(bm);
var bq=bp.defaultView.getComputedStyle(bm,null);
return bq?bq[name]:w;
}}})}});
})();
(function(){var l="CSS1Compat",k="position:absolute;width:0;height:0;width:1",j="qx.bom.Document",i="1px",h="qx.client",g="div";
qx.Class.define(j,{statics:{isQuirksMode:qx.core.Variant.select(h,{"mshtml":function(m){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (m||window).document.compatMode!==l;
}},"webkit":function(a){if(document.compatMode===undefined){var b=(a||window).document.createElement(g);
b.style.cssText=k;
return b.style.width===i?true:false;
}else{return (a||window).document.compatMode!==l;
}},"default":function(f){return (f||window).document.compatMode!==l;
}}),isStandardMode:function(q){return !this.isQuirksMode(q);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(c){var d=(c||window).document;
var e=qx.bom.Viewport.getHeight(c);
var scroll=this.isStandardMode(c)?d.documentElement.scrollHeight:d.body.scrollHeight;
return Math.max(scroll,e);
}}});
})();
(function(){var h="qx.client",g="qx.bom.Viewport";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"opera":function(c){if(qx.bom.client.Engine.VERSION<9.5){return (c||window).document.body.clientWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},"webkit":function(a){if(qx.bom.client.Engine.VERSION<523.15){return (a||window).innerWidth;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}},"default":function(i){var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}}),getHeight:qx.core.Variant.select(h,{"opera":function(k){if(qx.bom.client.Engine.VERSION<9.5){return (k||window).document.body.clientHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"webkit":function(m){if(qx.bom.client.Engine.VERSION<523.15){return (m||window).innerHeight;
}else{var n=(m||window).document;
return qx.bom.Document.isStandardMode(m)?n.documentElement.clientHeight:n.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(h,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(h,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(o){return (o||window).pageYOffset;
}})}});
})();
(function(){var o="/",n="mshtml",m="",l="qx.client",k="?",j="string",i="qx.util.ResourceManager",h="singleton";
qx.Class.define(i,{extend:qx.core.Object,type:h,statics:{__dk:qx.$$resources||{},__dl:{}},members:{has:function(v){return !!arguments.callee.self.__dk[v];
},getData:function(c){return arguments.callee.self.__dk[c]||null;
},getImageWidth:function(t){var u=arguments.callee.self.__dk[t];
return u?u[0]:null;
},getImageHeight:function(p){var q=arguments.callee.self.__dk[p];
return q?q[1]:null;
},getImageFormat:function(a){var b=arguments.callee.self.__dk[a];
return b?b[2]:null;
},isClippedImage:function(r){var s=arguments.callee.self.__dk[r];
return s&&s.length>4;
},toUri:function(d){if(d==null){return d;
}var e=arguments.callee.self.__dk[d];

if(!e){return d;
}
if(typeof e===j){var g=e;
}else{var g=e[3];
if(!g){return d;
}}var f=m;

if(qx.core.Variant.isSet(l,n)&&qx.bom.client.Feature.SSL){f=arguments.callee.self.__dl[g];
}return f+qx.$$libraries[g].resourceUri+o+d;
}},defer:function(w){if(qx.core.Variant.isSet(l,n)){if(qx.bom.client.Feature.SSL){for(var A in qx.$$libraries){var y;

if(qx.$$libraries[A].resourceUri){y=qx.$$libraries[A].resourceUri;
}else{w.__dl[A]=m;
continue;
}if(y.match(/^\/\//)!=null){w.__dl[A]=window.location.protocol;
}else if(y.match(/^\.\//)!=null){var x=document.URL;
w.__dl[A]=x.substring(0,x.lastIndexOf(o)+1);
}else if(y.match(/^http/)!=null){}else{var B=window.location.href.indexOf(k);
var z;

if(B==-1){z=window.location.href;
}else{z=window.location.href.substring(0,B);
}w.__dl[A]=z.substring(0,z.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__dm:{},__dn:{width:null,height:null},__do:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(w){var x=this.__dm[w];
return !!(x&&x.loaded);
},isFailed:function(n){var o=this.__dm[n];
return !!(o&&o.failed);
},isLoading:function(d){var e=this.__dm[d];
return !!(e&&e.loading);
},getFormat:function(k){var m=this.__dm[k];
return m?m.format:null;
},getSize:function(G){var H=this.__dm[G];
return H?
{width:H.width,height:H.height}:this.__dn;
},getWidth:function(E){var F=this.__dm[E];
return F?F.width:null;
},getHeight:function(a){var b=this.__dm[a];
return b?b.height:null;
},load:function(q,r,s){var t=this.__dm[q];

if(!t){t=this.__dm[q]={};
}if(r&&!s){s=window;
}if(t.loaded||t.loading||t.failed){if(r){if(t.loading){t.callbacks.push(r,s);
}else{r.call(s,q,t);
}}}else{t.loading=true;
t.callbacks=[];

if(r){t.callbacks.push(r,s);
}var v=new Image();
var u=qx.lang.Function.listener(this.__dp,this,v,q);
v.onload=u;
v.onerror=u;
v.src=q;
}},__dp:qx.event.GlobalError.observeMethod(function(event,z,A){var B=this.__dm[A];
if(event.type===h){B.loaded=true;
B.width=this.__dq(z);
B.height=this.__dr(z);
var C=this.__do.exec(A);

if(C!=null){B.format=C[1];
}}else{B.failed=true;
}z.onload=z.onerror=null;
var D=B.callbacks;
delete B.loading;
delete B.callbacks;
for(var i=0,l=D.length;i<l;i+=2){D[i].call(D[i+1],A,B);
}}),__dq:qx.core.Variant.select(j,{"gecko":function(p){return p.naturalWidth;
},"default":function(y){return y.width;
}}),__dr:qx.core.Variant.select(j,{"gecko":function(f){return f.naturalHeight;
},"default":function(c){return c.height;
}})}});
})();
(function(){var C="number",B="0",A="px",z=";",y="background-image:url(",x=");",w="",v=")",u="background-repeat:",t=" ",q="qx.bom.element.Background",s="url(",r="background-position:";
qx.Class.define(q,{statics:{__ds:[y,null,x,r,null,z,u,null,z],__dt:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__du:function(g,top){var h=qx.bom.client.Engine;

if(h.GECKO&&h.VERSION<1.9&&g==top&&typeof g==C){top+=0.01;
}
if(g){var i=(typeof g==C)?g+A:g;
}else{i=B;
}
if(top){var j=(typeof top==C)?top+A:top;
}else{j=B;
}return i+t+j;
},compile:function(D,E,F,top){var G=this.__du(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I=this.__ds;
I[1]=H;
I[4]=G;
I[7]=E;
return I.join(w);
},getStyles:function(a,b,c,top){if(!a){return this.__dt;
}var d=this.__du(c,top);
var e=qx.util.ResourceManager.getInstance().toUri(a);
var f={backgroundPosition:d,backgroundImage:s+e+v};

if(b!=null){f.backgroundRepeat=b;
}return f;
},set:function(k,l,m,n,top){var o=this.getStyles(l,m,n,top);

for(var p in o){k.style[p]=o[p];
}}}});
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
(function(){var o=",",n="rgb(",m=")",l="qx.theme.manager.Color",k="qx.util.ColorUtil";
qx.Class.define(k,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(K){return this.NAMED[K]!==undefined;
},isSystemColor:function(L){return this.SYSTEM[L]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(l);
},isThemedColor:function(Y){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(Y);
},stringToRgb:function(N){if(this.supportsThemes()&&this.isThemedColor(N)){var N=qx.theme.manager.Color.getInstance().resolveDynamic(N);
}
if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__dv();
}else if(this.isHex3String(N)){return this.__dx();
}else if(this.isHex6String(N)){return this.__dy();
}throw new Error("Could not parse color: "+N);
},cssStringToRgb:function(j){if(this.isNamedColor(j)){return this.NAMED[j];
}else if(this.isSystemColor(j)){throw new Error("Could not convert system colors to RGB: "+j);
}else if(this.isRgbString(j)){return this.__dv();
}else if(this.isRgbaString(j)){return this.__dw();
}else if(this.isHex3String(j)){return this.__dx();
}else if(this.isHex6String(j)){return this.__dy();
}throw new Error("Could not parse color: "+j);
},stringToRgbString:function(X){return this.rgbToRgbString(this.stringToRgb(X));
},rgbToRgbString:function(F){return n+F[0]+o+F[1]+o+F[2]+m;
},rgbToHexString:function(O){return (qx.lang.String.pad(O[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(O[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(O[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(G){return this.isThemedColor(G)||this.isNamedColor(G)||this.isHex3String(G)||this.isHex6String(G)||this.isRgbString(G);
},isCssString:function(M){return this.isSystemColor(M)||this.isNamedColor(M)||this.isHex3String(M)||this.isHex6String(M)||this.isRgbString(M);
},isHex3String:function(I){return this.REGEXP.hex3.test(I);
},isHex6String:function(H){return this.REGEXP.hex6.test(H);
},isRgbString:function(W){return this.REGEXP.rgb.test(W);
},isRgbaString:function(P){return this.REGEXP.rgba.test(P);
},__dv:function(){var h=parseInt(RegExp.$1,10);
var e=parseInt(RegExp.$2,10);
var d=parseInt(RegExp.$3,10);
return [h,e,d];
},__dw:function(){var V=parseInt(RegExp.$1,10);
var U=parseInt(RegExp.$2,10);
var T=parseInt(RegExp.$3,10);
return [V,U,T];
},__dx:function(){var S=parseInt(RegExp.$1,16)*17;
var R=parseInt(RegExp.$2,16)*17;
var Q=parseInt(RegExp.$3,16)*17;
return [S,R,Q];
},__dy:function(){var bc=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var bb=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var ba=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [bc,bb,ba];
},hex3StringToRgb:function(a){if(this.isHex3String(a)){return this.__dx(a);
}throw new Error("Invalid hex3 value: "+a);
},hex6StringToRgb:function(J){if(this.isHex6String(J)){return this.__dy(J);
}throw new Error("Invalid hex6 value: "+J);
},hexStringToRgb:function(c){if(this.isHex3String(c)){return this.__dx(c);
}
if(this.isHex6String(c)){return this.__dy(c);
}throw new Error("Invalid hex value: "+c);
},rgbToHsb:function(s){var v,w,y;
var E=s[0];
var B=s[1];
var u=s[2];
var D=(E>B)?E:B;

if(u>D){D=u;
}var x=(E<B)?E:B;

if(u<x){x=u;
}y=D/255.0;

if(D!=0){w=(D-x)/D;
}else{w=0;
}
if(w==0){v=0;
}else{var A=(D-E)/(D-x);
var C=(D-B)/(D-x);
var z=(D-u)/(D-x);

if(E==D){v=z-C;
}else if(B==D){v=2.0+A-z;
}else{v=4.0+C-A;
}v=v/6.0;

if(v<0){v=v+1.0;
}}return [Math.round(v*360),Math.round(w*100),Math.round(y*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var q="ready",p="qx.client",o="mshtml",n="load",m="unload",l="qx.event.handler.Application",k="complete",j="gecko|opera|webkit",i="left",h="DOMContentLoaded",g="shutdown";
qx.Class.define(l,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){arguments.callee.base.call(this);
this._window=t.getWindow();
this.__dz=false;
this.__dA=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__dB:false,onScriptLoaded:function(){this.__dB=true;
var v=qx.event.handler.Application.$$instance;

if(v){v.__dE();
}}},members:{canHandleEvent:function(r,s){},registerEvent:function(w,x,y){},unregisterEvent:function(a,b,c){},__dC:null,__dz:null,__dA:null,__dD:null,__dE:function(){var z=qx.event.handler.Application;
if(!this.__dC&&this.__dz&&z.__dB){if(qx.core.Variant.isSet(p,o)){if(qx.event.Registration.hasListener(this._window,q)){this.__dC=true;
qx.event.Registration.fireEvent(this._window,q);
}}else{this.__dC=true;
qx.event.Registration.fireEvent(this._window,q);
}}},isApplicationReady:function(){return this.__dC;
},_initObserver:function(){if(qx.$$domReady||document.readyState==k){this.__dz=true;
this.__dE();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(p,j)){qx.bom.Event.addNativeListener(this._window,h,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(p,o)){var self=this;
var f=function(){try{document.documentElement.doScroll(i);

if(document.body){self._onNativeLoadWrapped();
}}catch(d){window.setTimeout(f,100);
}};
f();
}qx.bom.Event.addNativeListener(this._window,n,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,m,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,m,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__dz=true;
this.__dE();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__dD){this.__dD=true;

try{qx.event.Registration.fireEvent(this._window,g);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var g="qx.event.handler.Window";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this._manager=s;
this._window=s.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(h,i,j){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var l=qx.event.handler.Window.SUPPORTED_TYPES;

for(var k in l){qx.bom.Event.addNativeListener(this._window,k,this._onNativeWrapper);
}},_stopWindowObserver:function(){var u=qx.event.handler.Window.SUPPORTED_TYPES;

for(var t in u){qx.bom.Event.removeNativeListener(this._window,t,this._onNativeWrapper);
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
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__dG||null;
},__dF:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__dG=new j;
var h=new Date;
this.__dG.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__dG.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__dH:function(e){var l=this.__dG;

if(l){e.setReturnValue(l.close());
}},__dI:function(){var g=this.__dG;

if(g){g.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__dF,k);
qx.event.Registration.addListener(window,a,k.__dI,k);
qx.event.Registration.addListener(window,c,k.__dH,k);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.application.Native";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="portal.Application";
qx.Class.define(a,{extend:qx.application.Native,members:{main:function(){arguments.callee.base.call(this);
{};
portal.box.Manager.getInstance().load();
portal.dragdrop.Manager.getInstance();
}}});
})();
(function(){var i="qx.event.type.Native";
qx.Class.define(i,{extend:qx.event.type.Event,members:{init:function(d,e,f,g,h){arguments.callee.base.call(this,g,h);
this._target=e||qx.bom.Event.getTarget(d);
this._relatedTarget=f||qx.bom.Event.getRelatedTarget(d);

if(d.timeStamp){this._timeStamp=d.timeStamp;
}this._native=d;
this._returnValue=null;
return this;
},clone:function(a){var b=arguments.callee.base.call(this,a);
var c={};
b._native=this._cloneNativeEvent(this._native,c);
b._returnValue=this._returnValue;
return b;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var q="groupBoxes",p="boxData",o="portal.box.Box",n="portal.box.Manager",m="qx.event.type.Event",h="boxes",g="_applyActiveBox",f="loaded",e="singleton";
qx.Class.define(n,{type:e,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__dJ=[];
this.__dK=[];
this.__dL={};
},statics:{dataKeyRoot:p,dataKeyGroupBoxes:q,dataKeyBoxes:h},events:{"loaded":m},properties:{activeBox:{init:null,check:o,apply:g}},members:{__dJ:null,__dK:null,__dL:null,_applyActiveBox:function(r,s){if(s!=null){s.setActive(false);
}r.setActive(true);
},load:function(){this.__dM(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,f);
},__dM:function(t){var x,A,y,z,B,t;
var u=t[portal.box.Manager.dataKeyGroupBoxes];
var w=t[portal.box.Manager.dataKeyBoxes];
for(var A in u){x=u[A];
y=x.boxes;
A=x.id;
z={id:A,element:document.getElementById(A)};
this.__dK.push(z);
this.__dL[A]=[];
for(var k=0,l=y.length;k<l;k++){t=w[y[k]];
var v=document.getElementById(t.id);
var B=new portal.box.Box(t,v,null,A);
this.__dJ.push(B);
this.__dL[A].push(B);
}}},getBoxes:function(){return this.__dJ;
},getGroupBoxes:function(){return this.__dK;
},updateGroupBoxMembers:function(a,b,c){var d=qx.dom.Hierarchy.getElementIndex(c.getElement());
qx.lang.Array.remove(this.__dL[b],c);
qx.lang.Array.insertAt(this.__dL[a],c,d);
},getGroupBoxDataOfBox:function(C){for(var i=0,j=this.__dK.length,D;i<j;i++){D=this.__dL[this.__dK[i].id];

for(var k=0,l=D.length;k<l;k++){if(D[k].getId()===C){return this.__dK[i];
}}}return null;
}},destruct:function(){this.__dJ=this.__dK=this.__dL=null;
}});
})();
(function(){var x="Boolean",w="<br/><br/>",v="border",u="portal.box.Box",t="click",s="1px solid #444444",r="height",q="position",p="zIndex",o="_applyActive",i="width",n="box_content",l=" It does contain no UI widget code at all.",h="relative",g="1px solid orange",k="This is a demo application showing the low-level capabilities.",j="div",m="String";
qx.Class.define(u,{extend:qx.core.Object,construct:function(a,b,c,d){arguments.callee.base.call(this);
this.__dN=a;
this.__dO=a.id;

if(b!=null){qx.bom.element.Style.set(b,i,a.width);
qx.bom.element.Style.set(b,r,a.height);
this.__dR(b,c);
}this.setElement(b);
this.setGroupBoxId(d);
this.__dP=null;
this.__dQ=null;
if(a.resizable){this.setResizable(true);
var f={minWidth:parseInt(a.minWidth),minHeight:parseInt(a.minHeight),maxWidth:parseInt(a.maxWidth),maxHeight:parseInt(a.maxHeight),handles:a.resizeHandles};
this.__dP=new portal.box.Resizable(this,f);
}if(a.draggable){this.setDraggable(true);
this.__dQ=new portal.box.Draggable(this);
}this.__dS();
},properties:{element:{init:null},groupBoxId:{init:null,check:m},active:{check:x,init:false,apply:o},resizable:{check:x,init:false},draggable:{check:x,init:false}},members:{__dO:null,__dN:null,__dQ:null,__dP:null,_applyActive:function(D,E){if(D){qx.bom.element.Style.set(this.getElement(),v,g);
}else{qx.bom.element.Style.set(this.getElement(),v,s);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__dN;
},getDraggableComponent:function(){return this.__dQ;
},getResizableComponent:function(){return this.__dP;
},__dR:function(A,B){if(B){for(var C in B){qx.bom.element.Style.set(C,B[C]);
}}qx.bom.element.Style.set(A,q,h);
qx.bom.element.Style.set(A,p,0);
qx.bom.Element.addListener(A,t,this.__dT,this,true);
},__dS:function(){var z=k+l;
z=z+w+z+w+z;
var y=qx.bom.Element.create(j,{"class":n});
y.innerHTML=z;
qx.dom.Element.insertEnd(y,this.getElement());
},__dT:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this.__dN=this.__dP=this.__dQ=null;
}});
})();
(function(){var v="visibility",u="hidden",t="mouseover",s="mouseout",r="visible",q="mousemove",p="orientation",o="south",n="mouseup",m="portal.box.Resizable",f='px',l="width",i="_",d="height",c="px",h="east",g="div",j="mousedown",b="southeast",k="Handle";
qx.Class.define(m,{extend:qx.core.Object,construct:function(w,x){arguments.callee.base.call(this);
this.__dU=w;
this.__dV=this.__dU.getElement();
this.__dW={};
this.__dX=false;
this.__dY={orientation:null,lastCoord:{left:null,top:null}};
this.__ea={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__ea){if(x[name]){this.__ea[name]=x[name];
}}this.__eb();
},members:{__dY:null,__dU:null,__dV:null,__dW:null,__ea:null,__dX:false,getBox:function(){return this.__dU;
},__eb:function(){switch(this.__ea.handles){case 1:this.__dW.east=null;
break;
case 2:this.__dW.south=null;
break;
case 3:this.__dW.south=null;
this.__dW.southeast=null;
this.__dW.east=null;
break;
}for(var D in this.__dW){var C=this.__dW[D]=qx.bom.Element.create(g);
qx.bom.element.Attribute.set(C,p,D);
qx.dom.Element.insertEnd(C,this.__dV);

if(this.__dV.id){C.id=this.__dV.id+i+D;
}this.__ec(D);
this.__ed(D);
}},__ec:function(E){qx.bom.element.Class.add(this.__dW[E],E+k);
qx.bom.element.Style.set(this.__dW[E],v,this.__ea.autoHide?u:r);
},__ed:function(z){var B=qx.event.Registration;
var A=this.__dW[z];
B.addListener(A,j,this.__eg,this);
B.addListener(document.body,n,this.__eh,this);

if(this.__ea.autoHide){B.addListener(this.__dU.getElement(),t,this.__ee,this);
B.addListener(this.__dU.getElement(),s,this.__ef,this);
}},__ee:function(e){for(var y in this.__dW){qx.bom.element.Style.set(this.__dW[y],v,r);
}},__ef:function(e){if(!this.__dX){for(var a in this.__dW){qx.bom.element.Style.set(this.__dW[a],v,u);
}}},__eg:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document.body,q,this.__ei,this,true);
this.__dX=true;
var G=e.getTarget();
this.__dY.orientation=qx.bom.element.Attribute.get(G,p);
this.__dY.lastCoord.left=e.getDocumentLeft();
this.__dY.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__dV);
}},__eh:function(e){e.stopPropagation();

if(this.__dX){qx.event.Registration.removeListener(document.body,q,this.__ei,this,true);
portal.box.Util.sendToBack(this.__dV);

if(this.__ea.autoHide){for(var F in this.__dW){qx.bom.element.Style.set(this.__dW[F],v,u);
}}this.__dX=false;
qx.bom.Selection.clear(document.body);
}},__ei:function(e){e.stopPropagation();

if(this.__dX){var H={left:null,top:null};

switch(this.__dY.orientation){case o:H.top=e.getDocumentTop();
break;
case b:H.top=e.getDocumentTop();
H.left=e.getDocumentLeft();
break;
case h:H.left=e.getDocumentLeft();
break;
}this.__ej(H,this.__dY.lastCoord);
this.__dY.lastCoord.left=e.getDocumentLeft();
this.__dY.lastCoord.top=e.getDocumentTop();
}},__ej:function(I,J){var Q=qx.bom.element.Dimension;
var N=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__dU.getId());
var P=Q.getContentSize(N.element);

if(I.left){var M=I.left-J.left;

if(M!==0){var L=Q.getContentWidth(this.__dV)+M;
var O=Q.getWidth(this.__dV)+M;

if((this.__ea.minWidth==null||L>this.__ea.minWidth)&&(this.__ea.maxWidth==null||L<=this.__ea.maxWidth)){if(P.width>=O){qx.bom.element.Style.set(this.__dV,l,L+f);
}}}}
if(I.top){var M=I.top-J.top;

if(M!==0){var K=Q.getContentHeight(this.__dV)+M;

if((this.__ea.minHeight==null||K>this.__ea.minHeight)&&(this.__ea.maxHeight==null||K<=this.__ea.maxHeight)){qx.bom.element.Style.set(this.__dV,d,K+c);
}}}}},destruct:function(){if(this.__ea.autoHide){qx.event.Registration.removeListener(this.__dU.getElement(),t,this.__ee,this);
qx.event.Registration.removeListener(this.__dU.getElement(),s,this.__ef,this);
}this.__dU=this.__ea=this.__dV=this.__dW=null;
this.__dY=null;
}});
})();
(function(){var d="abstract",c="qx.event.dispatch.AbstractBubbling";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:d,construct:function(x){this._manager=x;
},members:{_getParent:function(w){throw new Error("Missing implementation");
},canDispatchEvent:function(a,event,b){return event.getBubbles();
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
(function(){var c="qx.event.dispatch.DomBubbling";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(a,event,b){return a.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var c="qx.event.handler.UserAction";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__ek=a;
this.__el=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__ek:null,__el:null,canHandleEvent:function(g,h){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__ek=this.__el=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var bb="keydown",ba="qx.client",Y="keypress",X="NumLock",W="keyup",V="Enter",U="0",T="9",S="-",R="PageUp",ci="+",ch="PrintScreen",cg="gecko",cf="A",ce="Z",cd="Left",cc="F5",cb="Down",ca="Up",bY="F11",bi="F6",bj="useraction",bg="F3",bh="keyinput",be="Insert",bf="F8",bc="End",bd="/",bq="Delete",br="*",bD="F1",bz="F4",bL="Home",bG="F2",bU="F12",bQ="PageDown",bv="F7",bX="F9",bW="F10",bV="Right",bu="text",bx="Escape",by="webkit",bB="5",bE="3",bH="Meta",bN="7",bS="CapsLock",bk="input",bl="Control",bw="Space",bK="Tab",bJ="Shift",bI="Pause",bP="Unidentified",bO="qx.event.handler.Keyboard",bF="mshtml",bM="mshtml|webkit",O="6",bR="off",bm="Apps",bn="4",bA="Alt",P="2",Q="Scroll",bt="1",bo="8",bp="Win",bs="autoComplete",bC=",",bT="Backspace";
qx.Class.define(bO,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__em=a;
this.__en=a.getWindow();
if(qx.core.Variant.isSet(ba,cg)){this.__eo=this.__en;
}else{this.__eo=this.__en.document.documentElement;
}this.__ep={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(x){if(this._identifierToKeyCodeMap[x]){return true;
}
if(x.length!=1){return false;
}
if(x>=U&&x<=T){return true;
}
if(x>=cf&&x<=ce){return true;
}
switch(x){case ci:case S:case br:case bd:return true;
default:return false;
}}},members:{__eq:null,__em:null,__en:null,__eo:null,__ep:null,__er:null,__es:null,__et:null,canHandleEvent:function(cj,ck){},registerEvent:function(cA,cB,cC){},unregisterEvent:function(cI,cJ,cK){},_fireInputEvent:function(f,g){var h=this.__eu();
if(h&&h.offsetWidth!=0){var event=qx.event.Registration.createEvent(bh,qx.event.type.KeyInput,[f,h,g]);
this.__em.dispatchEvent(h,event);
}if(this.__en){qx.event.Registration.fireEvent(this.__en,bj,qx.event.type.Data,[bh]);
}},_fireSequenceEvent:function(cl,cm,cn){var co=this.__eu();
var cp=cl.keyCode;
var event=qx.event.Registration.createEvent(cm,qx.event.type.KeySequence,[cl,co,cn]);
this.__em.dispatchEvent(co,event);
if(qx.core.Variant.isSet(ba,bM)){if(cm==bb&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cp)&&!this._emulateKeyPress[cp]){this._fireSequenceEvent(cl,Y,cn);
}}}if(this.__en){qx.event.Registration.fireEvent(this.__en,bj,qx.event.type.Data,[cm]);
}},__eu:function(){var cF=this.__em.getHandler(qx.event.handler.Focus);
var cG=cF.getActive();
if(!cG||cG.offsetWidth==0){cG=cF.getFocus();
}if(!cG||cG.offsetWidth==0){cG=this.__em.getWindow().document.body;
}return cG;
},_initKeyObserver:function(){this.__eq=qx.lang.Function.listener(this.__ev,this);
this.__et=qx.lang.Function.listener(this.__ex,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eo,W,this.__eq);
Event.addNativeListener(this.__eo,bb,this.__eq);
Event.addNativeListener(this.__eo,Y,this.__et);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eo,W,this.__eq);
Event.removeNativeListener(this.__eo,bb,this.__eq);
Event.removeNativeListener(this.__eo,Y,this.__et);

for(var r in (this.__es||{})){var q=this.__es[r];
Event.removeNativeListener(q.target,Y,q.callback);
}delete (this.__es);
},__ev:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml":function(C){C=window.event||C;
var F=C.keyCode;
var D=0;
var E=C.type;
if(!(this.__ep[F]==bb&&E==bb)){this._idealKeyHandler(F,D,E,C);
}if(E==bb){if(this._isNonPrintableKeyCode(F)||this._emulateKeyPress[F]){this._idealKeyHandler(F,D,Y,C);
}}this.__ep[F]=E;
},"gecko":function(cv){var cz=this._keyCodeFix[cv.keyCode]||cv.keyCode;
var cx=0;
var cy=cv.type;
if(qx.bom.client.Platform.WIN){var cw=cz?this._keyCodeToIdentifier(cz):this._charCodeToIdentifier(cx);

if(!(this.__ep[cw]==bb&&cy==bb)){this._idealKeyHandler(cz,cx,cy,cv);
}this.__ep[cw]=cy;
}else{this._idealKeyHandler(cz,cx,cy,cv);
}this.__ew(cv.target,cy,cz);
},"webkit":function(b){var e=0;
var c=0;
var d=b.type;
if(qx.bom.client.Engine.VERSION<525.13){if(d==W||d==bb){e=this._charCode2KeyCode[b.charCode]||b.keyCode;
}else{if(this._charCode2KeyCode[b.charCode]){e=this._charCode2KeyCode[b.charCode];
}else{c=b.charCode;
}}this._idealKeyHandler(e,c,d,b);
}else{e=b.keyCode;
if(!(this.__ep[e]==bb&&d==bb)){this._idealKeyHandler(e,c,d,b);
}if(d==bb){if(this._isNonPrintableKeyCode(e)||this._emulateKeyPress[e]){this._idealKeyHandler(e,c,Y,b);
}}this.__ep[e]=d;
}},"opera":function(k){this.__er=k.keyCode;
this._idealKeyHandler(k.keyCode,0,k.type,k);
}})),__ew:qx.core.Variant.select(ba,{"gecko":function(l,m,n){if(m===bb&&(n==33||n==34||n==38||n==40)&&l.type==bu&&l.tagName.toLowerCase()===bk&&l.getAttribute(bs)!==bR){if(!this.__es){this.__es={};
}var p=qx.core.ObjectRegistry.toHashCode(l);

if(this.__es[p]){return;
}var self=this;
this.__es[p]={target:l,callback:function(cH){qx.bom.Event.stopPropagation(cH);
self.__ex(cH);
}};
var o=qx.event.GlobalError.observeMethod(this.__es[p].callback);
qx.bom.Event.addNativeListener(l,Y,o);
}},"default":null}),__ex:qx.event.GlobalError.observeMethod(qx.core.Variant.select(ba,{"mshtml":function(s){s=window.event||s;

if(this._charCode2KeyCode[s.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[s.keyCode],0,s.type,s);
}else{this._idealKeyHandler(0,s.keyCode,s.type,s);
}},"gecko":function(t){var w=this._keyCodeFix[t.keyCode]||t.keyCode;
var u=t.charCode;
var v=t.type;
this._idealKeyHandler(w,u,v,t);
},"webkit":function(y){if(qx.bom.client.Engine.VERSION<525.13){var B=0;
var z=0;
var A=y.type;

if(A==W||A==bb){B=this._charCode2KeyCode[y.charCode]||y.keyCode;
}else{if(this._charCode2KeyCode[y.charCode]){B=this._charCode2KeyCode[y.charCode];
}else{z=y.charCode;
}}this._idealKeyHandler(B,z,A,y);
}else{if(this._charCode2KeyCode[y.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[y.keyCode],0,y.type,y);
}else{this._idealKeyHandler(0,y.keyCode,y.type,y);
}}},"opera":function(G){var I=G.keyCode;
var H=G.type;
if(I!=this.__er){this._idealKeyHandler(0,this.__er,H,G);
}else{if(this._keyCodeToIdentifierMap[G.keyCode]){this._idealKeyHandler(G.keyCode,0,G.type,G);
}else{this._idealKeyHandler(0,G.keyCode,G.type,G);
}}}})),_idealKeyHandler:function(cq,cr,cs,ct){var cu;
if(cq||(!cq&&!cr)){cu=this._keyCodeToIdentifier(cq);
this._fireSequenceEvent(ct,cs,cu);
}else{cu=this._charCodeToIdentifier(cr);
this._fireSequenceEvent(ct,Y,cu);
this._fireInputEvent(ct,cr);
}},_specialCharCodeMap:{8:bT,9:bK,13:V,27:bx,32:bw},_emulateKeyPress:qx.core.Variant.select(ba,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bJ,17:bl,18:bA,20:bS,224:bH,37:cd,38:ca,39:bV,40:cb,33:R,34:bQ,35:bc,36:bL,45:be,46:bq,112:bD,113:bG,114:bg,115:bz,116:cc,117:bi,118:bv,119:bf,120:bX,121:bW,122:bY,123:bU,144:X,44:ch,145:Q,19:bI,91:bp,93:bm},_numpadToCharCode:{96:U.charCodeAt(0),97:bt.charCodeAt(0),98:P.charCodeAt(0),99:bE.charCodeAt(0),100:bn.charCodeAt(0),101:bB.charCodeAt(0),102:O.charCodeAt(0),103:bN.charCodeAt(0),104:bo.charCodeAt(0),105:T.charCodeAt(0),106:br.charCodeAt(0),107:ci.charCodeAt(0),109:S.charCodeAt(0),110:bC.charCodeAt(0),111:bd.charCodeAt(0)},_charCodeA:cf.charCodeAt(0),_charCodeZ:ce.charCodeAt(0),_charCode0:U.charCodeAt(0),_charCode9:T.charCodeAt(0),_isNonPrintableKeyCode:function(cL){return this._keyCodeToIdentifierMap[cL]?true:false;
},_isIdentifiableKeyCode:function(cD){if(cD>=this._charCodeA&&cD<=this._charCodeZ){return true;
}if(cD>=this._charCode0&&cD<=this._charCode9){return true;
}if(this._specialCharCodeMap[cD]){return true;
}if(this._numpadToCharCode[cD]){return true;
}if(this._isNonPrintableKeyCode(cD)){return true;
}return false;
},_keyCodeToIdentifier:function(i){if(this._isIdentifiableKeyCode(i)){var j=this._numpadToCharCode[i];

if(j){return String.fromCharCode(j);
}return (this._keyCodeToIdentifierMap[i]||this._specialCharCodeMap[i]||String.fromCharCode(i));
}else{return bP;
}},_charCodeToIdentifier:function(J){return this._specialCharCodeMap[J]||String.fromCharCode(J).toUpperCase();
},_identifierToKeyCode:function(cE){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cE]||cE.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__er=this.__em=this.__en=this.__eo=this.__ep=null;
},defer:function(K,L,M){qx.event.Registration.addHandler(K);
if(!K._identifierToKeyCodeMap){K._identifierToKeyCodeMap={};

for(var N in L._keyCodeToIdentifierMap){K._identifierToKeyCodeMap[L._keyCodeToIdentifierMap[N]]=parseInt(N,10);
}
for(var N in L._specialCharCodeMap){K._identifierToKeyCodeMap[L._specialCharCodeMap[N]]=parseInt(N,10);
}}
if(qx.core.Variant.isSet(ba,bF)){L._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(ba,cg)){L._keyCodeFix={12:L._identifierToKeyCode(X)};
}else if(qx.core.Variant.isSet(ba,by)){if(qx.bom.client.Engine.VERSION<525.13){L._charCode2KeyCode={63289:L._identifierToKeyCode(X),63276:L._identifierToKeyCode(R),63277:L._identifierToKeyCode(bQ),63275:L._identifierToKeyCode(bc),63273:L._identifierToKeyCode(bL),63234:L._identifierToKeyCode(cd),63232:L._identifierToKeyCode(ca),63235:L._identifierToKeyCode(bV),63233:L._identifierToKeyCode(cb),63272:L._identifierToKeyCode(bq),63302:L._identifierToKeyCode(be),63236:L._identifierToKeyCode(bD),63237:L._identifierToKeyCode(bG),63238:L._identifierToKeyCode(bg),63239:L._identifierToKeyCode(bz),63240:L._identifierToKeyCode(cc),63241:L._identifierToKeyCode(bi),63242:L._identifierToKeyCode(bv),63243:L._identifierToKeyCode(bf),63244:L._identifierToKeyCode(bX),63245:L._identifierToKeyCode(bW),63246:L._identifierToKeyCode(bY),63247:L._identifierToKeyCode(bU),63248:L._identifierToKeyCode(ch),3:L._identifierToKeyCode(V),12:L._identifierToKeyCode(X),13:L._identifierToKeyCode(V)};
}else{L._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var P="qx.client",O="mouseup",N="click",M="mousedown",L="contextmenu",K="mousewheel",J="dblclick",I="mshtml",H="mouseover",G="mouseout",B="DOMMouseScroll",F="mousemove",E="on",A="mshtml|webkit|opera",z="useraction",D="gecko|webkit",C="qx.event.handler.Mouse";
qx.Class.define(C,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__ey=a;
this.__ez=a.getWindow();
this.__eA=this.__ez.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eB:null,__eC:null,__eD:null,__eE:null,__eF:null,__ey:null,__ez:null,__eA:null,canHandleEvent:function(e,f){},registerEvent:qx.bom.client.System.IPHONE?
function(u,v,w){u[E+v]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(r,s,t){r[E+s]=undefined;
}:qx.lang.Function.returnNull,__eG:function(l,m,n){if(!n){n=l.target||l.srcElement;
}if(n&&n.nodeType){qx.event.Registration.fireEvent(n,m||l.type,m==K?qx.event.type.MouseWheel:qx.event.type.Mouse,[l,n,null,true,true]);
}qx.event.Registration.fireEvent(this.__ez,z,qx.event.type.Data,[m||l.type]);
},_initButtonObserver:function(){this.__eB=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eA,M,this.__eB);
Event.addNativeListener(this.__eA,O,this.__eB);
Event.addNativeListener(this.__eA,N,this.__eB);
Event.addNativeListener(this.__eA,J,this.__eB);
Event.addNativeListener(this.__eA,L,this.__eB);
},_initMoveObserver:function(){this.__eC=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eA,F,this.__eC);
Event.addNativeListener(this.__eA,H,this.__eC);
Event.addNativeListener(this.__eA,G,this.__eC);
},_initWheelObserver:function(){this.__eD=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var g=qx.core.Variant.isSet(P,A)?K:B;
var h=qx.core.Variant.isSet(P,I)?this.__eA:this.__ez;
Event.addNativeListener(h,g,this.__eD);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eA,M,this.__eB);
Event.removeNativeListener(this.__eA,O,this.__eB);
Event.removeNativeListener(this.__eA,N,this.__eB);
Event.removeNativeListener(this.__eA,J,this.__eB);
Event.removeNativeListener(this.__eA,L,this.__eB);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eA,F,this.__eC);
Event.removeNativeListener(this.__eA,H,this.__eC);
Event.removeNativeListener(this.__eA,G,this.__eC);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var x=qx.core.Variant.isSet(P,A)?K:B;
var y=qx.core.Variant.isSet(P,I)?this.__eA:this.__ez;
Event.removeNativeListener(y,x,this.__eD);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(R){this.__eG(R);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(b){var c=b.type;
var d=b.target||b.srcElement;
if(qx.core.Variant.isSet(P,D)){if(d&&d.nodeType==3){d=d.parentNode;
}}
if(this.__eH){this.__eH(b,c,d);
}
if(this.__eJ){this.__eJ(b,c,d);
}this.__eG(b,c,d);

if(this.__eI){this.__eI(b,c,d);
}
if(this.__eK){this.__eK(b,c,d);
}this.__eE=c;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(W){this.__eG(W,K);
}),__eH:qx.core.Variant.select(P,{"webkit":function(X,Y,ba){if(qx.bom.client.Engine.VERSION<530){if(Y==L){this.__eG(X,O,ba);
}}},"default":null}),__eI:qx.core.Variant.select(P,{"opera":function(o,p,q){if(p==O&&o.button==2){this.__eG(o,L,q);
}},"default":null}),__eJ:qx.core.Variant.select(P,{"mshtml":function(i,j,k){if(j==O&&this.__eE==N){this.__eG(i,M,k);
}else if(j==J){this.__eG(i,N,k);
}},"default":null}),__eK:qx.core.Variant.select(P,{"mshtml":null,"default":function(S,T,U){switch(T){case M:this.__eF=U;
break;
case O:if(U!==this.__eF){var V=qx.dom.Hierarchy.getCommonParent(U,this.__eF);
this.__eG(S,N,V);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ey=this.__ez=this.__eA=this.__eF=null;
},defer:function(Q){qx.event.Registration.addHandler(Q);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var O="alias",N="copy",M="blur",L="mouseout",K="keydown",J="Ctrl",I="Shift",H="mousemove",G="move",F="mouseover",bf="Alt",be="keyup",bd="mouseup",bc="dragend",bb="on",ba="mousedown",Y="qxDraggable",X="drag",W="drop",V="qxDroppable",T="qx.event.handler.DragDrop",U="droprequest",R="dragstart",S="dragchange",P="dragleave",Q="dragover";
qx.Class.define(T,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bi){arguments.callee.base.call(this);
this.__eL=bi;
this.__eM=bi.getWindow().document.documentElement;
this.__eL.addListener(this.__eM,ba,this._onMouseDown,this);
this.__eY();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eL:null,__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:false,__eW:0,__eX:0,canHandleEvent:function(d,f){},registerEvent:function(r,s,t){},unregisterEvent:function(A,B,C){},addType:function(bg){this.__eP[bg]=true;
},addAction:function(a){this.__eQ[a]=true;
},supportsType:function(z){return !!this.__eP[z];
},supportsAction:function(bh){return !!this.__eQ[bh];
},getData:function(c){if(!this.__fg||!this.__eN){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eP[c]){throw new Error("Unsupported data type: "+c+"!");
}
if(!this.__eS[c]){this.__eT=c;
this.__fb(U,this.__eO,this.__eN,false);
}
if(!this.__eS[c]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__eS[c]||null;
},getCurrentAction:function(){return this.__eU;
},addData:function(g,h){this.__eS[g]=h;
},getCurrentType:function(){return this.__eT;
},__eY:function(){this.__eP={};
this.__eQ={};
this.__eR={};
this.__eS={};
},__fa:function(){var x=this.__eQ;
var v=this.__eR;
var w=null;

if(this.__fg){if(v.Shift&&v.Ctrl&&x.alias){w=O;
}else if(v.Shift&&v.Alt&&x.copy){w=N;
}else if(v.Shift&&x.move){w=G;
}else if(v.Alt&&x.alias){w=O;
}else if(v.Ctrl&&x.copy){w=N;
}else if(x.move){w=G;
}else if(x.copy){w=N;
}else if(x.alias){w=O;
}}
if(w!=this.__eU){this.__eU=w;
this.__fb(S,this.__eO,this.__eN,false);
}},__fb:function(k,l,m,n,o){var q=qx.event.Registration;
var p=q.createEvent(k,qx.event.type.Drag,[n,o]);

if(l!==m){p.setRelatedTarget(m);
}return q.dispatchEvent(l,p);
},__fc:function(b){while(b&&b.nodeType==1){if(b.getAttribute(Y)==bb){return b;
}b=b.parentNode;
}return null;
},__fd:function(y){while(y&&y.nodeType==1){if(y.getAttribute(V)==bb){return y;
}y=y.parentNode;
}return null;
},__fe:function(){this.__eO=null;
this.__eL.removeListener(this.__eM,H,this._onMouseMove,this,true);
this.__eL.removeListener(this.__eM,bd,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,M,this._onWindowBlur,this);
this.__eY();
},__ff:function(){if(this.__eV){this.__eL.removeListener(this.__eM,F,this._onMouseOver,this,true);
this.__eL.removeListener(this.__eM,L,this._onMouseOut,this,true);
this.__eL.removeListener(this.__eM,K,this._onKeyDown,this,true);
this.__eL.removeListener(this.__eM,be,this._onKeyUp,this,true);
this.__fb(bc,this.__eO,this.__eN,false);
this.__eV=false;
}this.__fg=false;
this.__eN=null;
this.__fe();
},__fg:false,_onWindowBlur:function(e){this.__ff();
},_onKeyDown:function(e){var bl=e.getKeyIdentifier();

switch(bl){case bf:case J:case I:if(!this.__eR[bl]){this.__eR[bl]=true;
this.__fa();
}}},_onKeyUp:function(e){var bm=e.getKeyIdentifier();

switch(bm){case bf:case J:case I:if(this.__eR[bm]){this.__eR[bm]=false;
this.__fa();
}}},_onMouseDown:function(e){if(this.__eV){return;
}var u=this.__fc(e.getTarget());

if(u){this.__eW=e.getDocumentLeft();
this.__eX=e.getDocumentTop();
this.__eO=u;
this.__eL.addListener(this.__eM,H,this._onMouseMove,this,true);
this.__eL.addListener(this.__eM,bd,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,M,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fg){this.__fb(W,this.__eN,this.__eO,false,e);
}if(this.__eV){e.stopPropagation();
}this.__ff();
},_onMouseMove:function(e){if(this.__eV){if(!this.__fb(X,this.__eO,this.__eN,true,e)){this.__ff();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eW)>3||Math.abs(e.getDocumentTop()-this.__eX)>3){if(this.__fb(R,this.__eO,this.__eN,true,e)){this.__eV=true;
this.__eL.addListener(this.__eM,F,this._onMouseOver,this,true);
this.__eL.addListener(this.__eM,L,this._onMouseOut,this,true);
this.__eL.addListener(this.__eM,K,this._onKeyDown,this,true);
this.__eL.addListener(this.__eM,be,this._onKeyUp,this,true);
var bj=this.__eR;
bj.Ctrl=e.isCtrlPressed();
bj.Shift=e.isShiftPressed();
bj.Alt=e.isAltPressed();
this.__fa();
}else{this.__fb(bc,this.__eO,this.__eN,false);
this.__fe();
}}}},_onMouseOver:function(e){var i=e.getTarget();
var j=this.__fd(i);

if(j&&j!=this.__eN){this.__fg=this.__fb(Q,j,this.__eO,true,e);
this.__eN=j;
this.__fa();
}},_onMouseOut:function(e){var E=this.__fd(e.getTarget());
var D=this.__fd(e.getRelatedTarget());

if(E&&E!==D&&E==this.__eN){this.__fb(P,this.__eN,D,false,e);
this.__eN=null;
this.__fg=false;
qx.event.Timer.once(this.__fa,this,0);
}}},destruct:function(){this.__eO=this.__eN=this.__eL=this.__eM=this.__eP=this.__eQ=this.__eR=this.__eS=null;
},defer:function(bk){qx.event.Registration.addHandler(bk);
}});
})();
(function(){var g="-",f="qx.event.handler.Element";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(h){arguments.callee.base.call(this);
this._manager=h;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(o,p){},registerEvent:function(i,j,k){var n=qx.core.ObjectRegistry.toHashCode(i);
var l=n+g+j;
var m=qx.lang.Function.listener(this._onNative,this,l);
qx.bom.Event.addNativeListener(i,j,m);
this._registeredEvents[l]={element:i,type:j,listener:m};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+g+u;
var x=this._registeredEvents[w];
qx.bom.Event.removeNativeListener(t,u,x.listener);
delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(a,b){var d=this._registeredEvents;

if(!d){return;
}var c=d[b];
qx.event.Registration.fireNonBubblingEvent(c.element,c.type,qx.event.type.Native,[a]);
})},destruct:function(){var q;
var r=this._registeredEvents;

for(var s in r){q=r[s];
qx.bom.Event.removeNativeListener(q.element,q.type,q.listener);
}this._manager=this._registeredEvents=null;
},defer:function(e){qx.event.Registration.addHandler(e);
}});
})();
(function(){var e="qx.event.handler.Appear",d="disappear",c="appear";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this.__fh=b;
this.__fi={};
qx.event.handler.Appear.__fj[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fj:{},refresh:function(){var f=this.__fj;

for(var g in f){f[g].refresh();
}}},members:{__fh:null,__fi:null,canHandleEvent:function(r,s){},registerEvent:function(t,u,v){var w=qx.core.ObjectRegistry.toHashCode(t)+u;
var x=this.__fi;

if(x&&!x[w]){x[w]=t;
t.$$displayed=t.offsetWidth>0;
}},unregisterEvent:function(h,i,j){var k=qx.core.ObjectRegistry.toHashCode(h)+i;
var l=this.__fi;

if(!l){return;
}
if(l[k]){delete l[k];
}},refresh:function(){var p=this.__fi;
var q;

for(var o in p){q=p[o];
var m=q.offsetWidth>0;

if((!!q.$$displayed)!==m){q.$$displayed=m;
var n=qx.event.Registration.createEvent(m?c:d);
this.__fh.dispatchEvent(q,n);
}}}},destruct:function(){this.__fh=this.__fi=null;
delete qx.event.handler.Appear.__fj[this.$$hash];
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var E="mshtml",D="",C="qx.client",B=">",A="<",z=" ",y="='",x="qx.bom.Element",w="div",v="' ",u="></";
qx.Class.define(x,{statics:{__fk:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,e,f){if(!f){f=window;
}
if(!name){throw new Error("The tag name is missing!");
}var h=this.__fk;
var g=D;

for(var m in e){if(h[m]){g+=m+y+e[m]+v;
}}var n;
if(g!=D){if(qx.bom.client.Engine.MSHTML){n=f.document.createElement(A+name+z+g+B);
}else{var k=f.document.createElement(w);
k.innerHTML=A+name+z+g+u+name+B;
n=k.firstChild;
}}else{n=f.document.createElement(name);
}
for(var m in e){if(!h[m]){qx.bom.element.Attribute.set(n,m,e[m]);
}}return n;
},empty:function(p){return p.innerHTML=D;
},addListener:function(V,W,X,self,Y){return qx.event.Registration.addListener(V,W,X,self,Y);
},removeListener:function(q,r,s,self,t){return qx.event.Registration.removeListener(q,r,s,self,t);
},removeListenerById:function(bb,bc){return qx.event.Registration.removeListenerById(bb,bc);
},hasListener:function(a,b,c){return qx.event.Registration.hasListener(a,b,c);
},focus:function(ba){qx.event.Registration.getManager(ba).getHandler(qx.event.handler.Focus).focus(ba);
},blur:function(H){qx.event.Registration.getManager(H).getHandler(qx.event.handler.Focus).blur(H);
},activate:function(d){qx.event.Registration.getManager(d).getHandler(qx.event.handler.Focus).activate(d);
},deactivate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).deactivate(U);
},capture:function(F,G){qx.event.Registration.getManager(F).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(F,G);
},releaseCapture:function(o){qx.event.Registration.getManager(o).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(o);
},clone:function(I,J){var M;

if(J||(qx.core.Variant.isSet(C,E)&&!qx.xml.Document.isXmlDocument(I))){var Q=qx.event.Registration.getManager(I);
var K=qx.dom.Hierarchy.getDescendants(I);
K.push(I);
}if(qx.core.Variant.isSet(C,E)){for(var i=0,l=K.length;i<l;i++){Q.toggleAttachedEvents(K[i],false);
}}var M=I.cloneNode(true);
if(qx.core.Variant.isSet(C,E)){for(var i=0,l=K.length;i<l;i++){Q.toggleAttachedEvents(K[i],true);
}}if(J===true){var T=qx.dom.Hierarchy.getDescendants(M);
T.push(M);
var L,O,S,N;

for(var i=0,R=K.length;i<R;i++){S=K[i];
L=Q.serializeListeners(S);

if(L.length>0){O=T[i];

for(var j=0,P=L.length;j<P;j++){N=L[j];
Q.addListener(O,N.type,N.handler,N.self,N.capture);
}}}}return M;
}}});
})();
(function(){var c="qx.event.type.Dom";
qx.Class.define(c,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(a,b){var b=arguments.callee.base.call(this,a,b);
b.shiftKey=a.shiftKey;
b.ctrlKey=a.ctrlKey;
b.altKey=a.altKey;
b.metaKey=a.metaKey;
return b;
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
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._identifier=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var q="qx.client",p="blur",o="focus",n="mousedown",m="on",l="mouseup",k="DOMFocusOut",j="DOMFocusIn",i="selectstart",h="onmousedown",J="onfocusout",I="onfocusin",H="onmouseup",G="onselectstart",F="draggesture",E="qx.event.handler.Focus",D="_applyFocus",C="deactivate",B="textarea",A="_applyActive",x="input",y="focusin",v="qxSelectable",w="tabIndex",t="off",u="activate",r="focusout",s="qxKeepFocus",z="qxKeepActive";
qx.Class.define(E,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bC){arguments.callee.base.call(this);
this._manager=bC;
this._window=bC.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:A,nullable:true},focus:{apply:D,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fl:null,__fm:null,__fn:null,__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,canHandleEvent:function(bo,bp){},registerEvent:function(be,bf,bg){},unregisterEvent:function(b,c,d){},focus:function(bq){try{bq.focus();
}catch(bc){}this.setFocus(bq);
this.setActive(bq);
},activate:function(U){this.setActive(U);
},blur:function(K){try{K.blur();
}catch(bu){}
if(this.getActive()===K){this.resetActive();
}
if(this.getFocus()===K){this.resetFocus();
}},deactivate:function(bL){if(this.getActive()===bL){this.resetActive();
}},tryActivate:function(L){var M=this.__fJ(L);

if(M){this.setActive(M);
}},__fv:function(bD,bE,bF,bG){var bI=qx.event.Registration;
var bH=bI.createEvent(bF,qx.event.type.Focus,[bD,bE,bG]);
bI.dispatchEvent(bD,bH);
},_windowFocused:true,__fw:function(){if(this._windowFocused){this._windowFocused=false;
this.__fv(this._window,null,p,false);
}},__fx:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fv(this._window,null,o,false);
}},_initObserver:qx.core.Variant.select(q,{"gecko":function(){this.__fl=qx.lang.Function.listener(this.__fD,this);
this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fC,this);
this.__fo=qx.lang.Function.listener(this.__fB,this);
this.__fp=qx.lang.Function.listener(this.__fy,this);
this._document.addEventListener(n,this.__fl,true);
this._document.addEventListener(l,this.__fm,true);
this._window.addEventListener(o,this.__fn,true);
this._window.addEventListener(p,this.__fo,true);
this._window.addEventListener(F,this.__fp,true);
},"mshtml":function(){this.__fl=qx.lang.Function.listener(this.__fD,this);
this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fr=qx.lang.Function.listener(this.__fz,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__fq=qx.lang.Function.listener(this.__fG,this);
this._document.attachEvent(h,this.__fl);
this._document.attachEvent(H,this.__fm);
this._document.attachEvent(I,this.__fr);
this._document.attachEvent(J,this.__fs);
this._document.attachEvent(G,this.__fq);
},"webkit":function(){this.__fl=qx.lang.Function.listener(this.__fD,this);
this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__fn=qx.lang.Function.listener(this.__fC,this);
this.__fo=qx.lang.Function.listener(this.__fB,this);
this.__fq=qx.lang.Function.listener(this.__fG,this);
this._document.addEventListener(n,this.__fl,true);
this._document.addEventListener(l,this.__fm,true);
this._document.addEventListener(i,this.__fq,false);
this._window.addEventListener(k,this.__fs,true);
this._window.addEventListener(o,this.__fn,true);
this._window.addEventListener(p,this.__fo,true);
},"opera":function(){this.__fl=qx.lang.Function.listener(this.__fD,this);
this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fr=qx.lang.Function.listener(this.__fz,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this._document.addEventListener(n,this.__fl,true);
this._document.addEventListener(l,this.__fm,true);
this._window.addEventListener(j,this.__fr,true);
this._window.addEventListener(k,this.__fs,true);
}}),_stopObserver:qx.core.Variant.select(q,{"gecko":function(){this._document.removeEventListener(n,this.__fl,true);
this._document.removeEventListener(l,this.__fm,true);
this._window.removeEventListener(o,this.__fn,true);
this._window.removeEventListener(p,this.__fo,true);
this._window.removeEventListener(F,this.__fp,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,h,this.__fl);
qx.bom.Event.removeNativeListener(this._document,H,this.__fm);
qx.bom.Event.removeNativeListener(this._document,I,this.__fr);
qx.bom.Event.removeNativeListener(this._document,J,this.__fs);
qx.bom.Event.removeNativeListener(this._document,G,this.__fq);
},"webkit":function(){this._document.removeEventListener(n,this.__fl,true);
this._document.removeEventListener(i,this.__fq,false);
this._window.removeEventListener(j,this.__fr,true);
this._window.removeEventListener(k,this.__fs,true);
this._window.removeEventListener(o,this.__fn,true);
this._window.removeEventListener(p,this.__fo,true);
},"opera":function(){this._document.removeEventListener(n,this.__fl,true);
this._window.removeEventListener(j,this.__fr,true);
this._window.removeEventListener(k,this.__fs,true);
this._window.removeEventListener(o,this.__fn,true);
this._window.removeEventListener(p,this.__fo,true);
}}),__fy:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"gecko":function(e){if(!this.__fK(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"mshtml":function(e){this.__fx();
var P=e.srcElement;
var O=this.__fI(P);

if(O){this.setFocus(O);
}this.tryActivate(P);
},"opera":function(e){var bB=e.target;

if(bB==this._document||bB==this._window){this.__fx();

if(this.__ft){this.setFocus(this.__ft);
delete this.__ft;
}
if(this.__fu){this.setActive(this.__fu);
delete this.__fu;
}}else{this.setFocus(bB);
this.tryActivate(bB);
if(!this.__fK(bB)){bB.selectionStart=0;
bB.selectionEnd=0;
}}},"default":null})),__fA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"mshtml":function(e){if(!e.toElement){this.__fw();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var bh=e.target;

if(bh===this.getFocus()){this.resetFocus();
}
if(bh===this.getActive()){this.resetActive();
}},"opera":function(e){var T=e.target;

if(T==this._document){this.__fw();
this.__ft=this.getFocus();
this.__fu=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(T===this.getFocus()){this.resetFocus();
}
if(T===this.getActive()){this.resetActive();
}}},"default":null})),__fB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fw();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fw();
this.__ft=this.getFocus();
this.__fu=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"gecko":function(e){var bv=e.target;

if(bv===this._window||bv===this._document){this.__fx();
bv=this._body;
}this.setFocus(bv);
this.tryActivate(bv);
},"webkit":function(e){var N=e.target;

if(N===this._window||N===this._document){this.__fx();

if(this.__ft){this.setFocus(this.__ft);
delete this.__ft;
}
if(this.__fu){this.setActive(this.__fu);
delete this.__fu;
}}else{this.setFocus(N);
this.tryActivate(N);
}},"default":null})),__fD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"gecko":function(e){var bb=this.__fI(e.target);

if(!bb){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var bK=e.srcElement;
var bJ=this.__fI(bK);

if(bJ){if(!this.__fK(bK)){bK.unselectable=m;
try{document.selection.empty();
}catch(e){}try{bJ.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fK(bK)){bK.unselectable=m;
}}},"webkit":function(e){var g=e.target;
var f=this.__fI(g);

if(f){this.setFocus(f);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var S=e.target;
var Q=this.__fI(S);

if(!this.__fK(S)){qx.bom.Event.preventDefault(e);
if(Q){var R=this.getFocus();

if(R&&R.selectionEnd){R.selectionStart=0;
R.selectionEnd=0;
R.blur();
}if(Q){this.setFocus(Q);
}}}else if(Q){this.setFocus(Q);
}},"default":null})),__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"mshtml":function(e){var bd=e.srcElement;

if(bd.unselectable){bd.unselectable=t;
}this.tryActivate(this.__fF(bd));
},"gecko":function(e){var X=e.target;

while(X&&X.offsetWidth===undefined){X=X.parentNode;
}
if(X){this.tryActivate(X);
}},"webkit|opera":function(e){this.tryActivate(this.__fF(e.target));
},"default":null})),__fF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"mshtml|webkit":function(br){var bs=this.getFocus();

if(bs&&br!=bs&&(bs.nodeName.toLowerCase()===x||bs.nodeName.toLowerCase()===B)){br=bs;
}return br;
},"default":function(a){return a;
}})),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(q,{"mshtml|webkit":function(e){var bt=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fK(bt)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fH:function(bk){var bl=qx.bom.element.Attribute.get(bk,w);

if(bl>=1){return true;
}var bm=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bl>=0&&bm[bk.tagName]){return true;
}return false;
},__fI:function(bn){while(bn&&bn.nodeType===1){if(bn.getAttribute(s)==m){return null;
}
if(this.__fH(bn)){return bn;
}bn=bn.parentNode;
}return this._body;
},__fJ:function(Y){var ba=Y;

while(Y&&Y.nodeType===1){if(Y.getAttribute(z)==m){return null;
}Y=Y.parentNode;
}return ba;
},__fK:function(bz){while(bz&&bz.nodeType===1){var bA=bz.getAttribute(v);

if(bA!=null){return bA===m;
}bz=bz.parentNode;
}return true;
},_applyActive:function(V,W){if(W){this.__fv(W,V,C,true);
}
if(V){this.__fv(V,W,u,true);
}},_applyFocus:function(bi,bj){if(bj){this.__fv(bj,bi,r,true);
}
if(bi){this.__fv(bi,bj,y,true);
}if(bj){this.__fv(bj,bi,p,false);
}
if(bi){this.__fv(bi,bj,o,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fL=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
var bx=bw.FOCUSABLE_ELEMENTS;

for(var by in bx){bx[by.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var u="",t="qx.client",s="readOnly",r="accessKey",q="qx.bom.element.Attribute",p="rowSpan",o="vAlign",n="className",m="textContent",l="'",I="htmlFor",H="longDesc",G="cellSpacing",F="frameBorder",E="='",D="useMap",C="innerText",B="innerHTML",A="tabIndex",z="dateTime",x="maxLength",y="mshtml",v="cellPadding",w="colSpan";
qx.Class.define(q,{statics:{__fM:{names:{"class":n,"for":I,html:B,text:qx.core.Variant.isSet(t,y)?C:m,colspan:w,rowspan:p,valign:o,datetime:z,accesskey:r,tabindex:A,maxlength:x,readonly:s,longdesc:H,cellpadding:v,cellspacing:G,frameborder:F,usemap:D},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:u,maxLength:10000000,className:u,innerHTML:u,innerText:u,textContent:u,htmlFor:u,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(a){var b=[];
var d=this.__fM.runtime;

for(var c in a){if(!d[c]){b.push(c,E,a[c],l);
}}return b.join(u);
},get:qx.core.Variant.select(t,{"mshtml":function(h,name){var j=this.__fM;
var i;
name=j.names[name]||name;
if(j.original[name]){i=h.getAttribute(name,2);
}else if(j.property[name]){if(j.propertyDefault[name]&&i==j.propertyDefault[name]){return null;
}i=h[name];
}else{i=h.getAttribute(name);
}if(j.bools[name]){return !!i;
}return i;
},"default":function(e,name){var g=this.__fM;
var f;
name=g.names[name]||name;
if(g.property[name]){if(g.propertyDefault[name]&&f==g.propertyDefault[name]){return null;
}f=e[name];

if(f==null){f=e.getAttribute(name);
}}else{f=e.getAttribute(name);
}if(g.bools[name]){return !!f;
}return f;
}}),set:function(J,name,K){var L=this.__fM;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]){if(K==null){K=L.propertyDefault[name];

if(K===undefined){K=null;
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(k,name){this.set(k,name,null);
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
},__fN:qx.core.Variant.select(i,{"mshtml":{1:l,2:k,4:j},"default":{0:l,2:k,1:j}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case g:case h:return l;
case e:return k;
default:return this.__fN[this._native.button]||f;
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
(function(){var o="qx.client",n="ie",m="msie",l="android",k="operamini",j="mobile chrome",i=")(/| )([0-9]+\.[0-9])",h="iemobile",g="opera mobi",f="Mobile Safari",C="operamobile",B="mobile safari",A="IEMobile|Maxthon|MSIE",z="qx.bom.client.Browser",y="opera mini",x="(",w="opera",v="mshtml",u="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",r="webkit",s="5.0",p="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",q="Mobile/";
qx.Bootstrap.define(z,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fO:function(a){var b=navigator.userAgent;
var d=new RegExp(x+a+i);
var e=b.match(d);

if(!e){return;
}var name=e[1].toLowerCase();
var c=e[3];
if(b.match(/Version(\/| )([0-9]+\.[0-9])/)){c=RegExp.$2;
}
if(qx.core.Variant.isSet(o,r)){if(name===l){name=j;
}else if(b.indexOf(f)!==-1||b.indexOf(q)!==-1){name=B;
}}else if(qx.core.Variant.isSet(o,v)){if(name===m){name=n;
if(qx.bom.client.System.WINCE&&name===n){name=h;
c=s;
}}}else if(qx.core.Variant.isSet(o,w)){if(name===g){name=C;
}else if(name===y){name=k;
}}this.NAME=name;
this.FULLVERSION=c;
this.VERSION=parseFloat(c,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(o,{"webkit":function(G){G.__fO(t);
},"gecko":function(F){F.__fO(p);
},"mshtml":function(D){D.__fO(A);
},"opera":function(E){E.__fO(u);
}})});
})();
(function(){var L="qx.client",K="qx.dom.Hierarchy",J="previousSibling",I="*",H="nextSibling",G="parentNode";
qx.Class.define(K,{statics:{getNodeIndex:function(A){var B=0;

while(A&&(A=A.previousSibling)){B++;
}return B;
},getElementIndex:function(h){var i=0;
var j=qx.dom.Node.ELEMENT;

while(h&&(h=h.previousSibling)){if(h.nodeType==j){i++;
}}return i;
},getNextElementSibling:function(f){while(f&&(f=f.nextSibling)&&!qx.dom.Node.isElement(f)){continue;
}return f||null;
},getPreviousElementSibling:function(g){while(g&&(g=g.previousSibling)&&!qx.dom.Node.isElement(g)){continue;
}return g||null;
},contains:qx.core.Variant.select(L,{"webkit|mshtml|opera":function(C,D){if(qx.dom.Node.isDocument(C)){var E=qx.dom.Node.getDocument(D);
return C&&E==C;
}else if(qx.dom.Node.isDocument(D)){return false;
}else{return C.contains(D);
}},"gecko":function(y,z){return !!(y.compareDocumentPosition(z)&16);
},"default":function(q,r){while(r){if(q==r){return true;
}r=r.parentNode;
}return false;
}}),isRendered:function(d){if(!d.offsetParent){return false;
}var e=d.ownerDocument||d.document;
if(e.body.contains){return e.body.contains(d);
}if(e.compareDocumentPosition){return !!(e.compareDocumentPosition(d)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(k,l){return this.contains(l,k);
},getCommonParent:qx.core.Variant.select(L,{"mshtml|opera":function(w,x){if(w===x){return w;
}
while(w&&qx.dom.Node.isElement(w)){if(w.contains(x)){return w;
}w=w.parentNode;
}return null;
},"default":function(N,O){if(N===O){return N;
}var P={};
var S=qx.core.ObjectRegistry;
var R,Q;

while(N||O){if(N){R=S.toHashCode(N);

if(P[R]){return P[R];
}P[R]=N;
N=N.parentNode;
}
if(O){Q=S.toHashCode(O);

if(P[Q]){return P[Q];
}P[Q]=O;
O=O.parentNode;
}}return null;
}}),getAncestors:function(a){return this._recursivelyCollect(a,G);
},getChildElements:function(U){U=U.firstChild;

if(!U){return [];
}var V=this.getNextSiblings(U);

if(U.nodeType===1){V.unshift(U);
}return V;
},getDescendants:function(p){return qx.lang.Array.fromCollection(p.getElementsByTagName(I));
},getFirstDescendant:function(b){b=b.firstChild;

while(b&&b.nodeType!=1){b=b.nextSibling;
}return b;
},getLastDescendant:function(T){T=T.lastChild;

while(T&&T.nodeType!=1){T=T.previousSibling;
}return T;
},getPreviousSiblings:function(c){return this._recursivelyCollect(c,J);
},getNextSiblings:function(M){return this._recursivelyCollect(M,H);
},_recursivelyCollect:function(t,u){var v=[];

while(t=t[u]){if(t.nodeType==1){v.push(t);
}}return v;
},getSiblings:function(s){return this.getPreviousSiblings(s).reverse().concat(this.getNextSiblings(s));
},isEmpty:function(F){F=F.firstChild;

while(F){if(F.nodeType===qx.dom.Node.ELEMENT||F.nodeType===qx.dom.Node.TEXT){return false;
}F=F.nextSibling;
}return true;
},cleanWhitespace:function(m){var n=m.firstChild;

while(n){var o=n.nextSibling;

if(n.nodeType==3&&!/\S/.test(n.nodeValue)){m.removeChild(n);
}n=o;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(m,n){arguments.callee.base.call(this,true,m);

if(n){this._native=n.getNativeEvent()||null;
this._originalTarget=n.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(h){var i=arguments.callee.base.call(this,h);
i._native=this._native;
return i;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(g);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var c=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(c);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(l){this.getManager().addType(l);
},addAction:function(k){this.getManager().addAction(k);
},supportsType:function(f){return this.getManager().supportsType(f);
},supportsAction:function(j){return this.getManager().supportsAction(j);
},addData:function(a,b){this.getManager().addData(a,b);
},getData:function(o){return this.getManager().getData(o);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__fP=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.addListener(i,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__fQ:null,__fP:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(q,r){if(r){window.clearInterval(this.__fQ);
this.__fQ=null;
}else if(q){this.__fQ=window.setInterval(this.__fP,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(p){this.setInterval(p);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__fQ){window.clearInterval(this.__fQ);
}this.__fQ=this.__fP=null;
}});
})();
(function(){var m="losecapture",l="qx.client",k="blur",j="focus",i="click",h="qx.event.dispatch.MouseCapture",g="capture",f="scroll";
qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(c,d){arguments.callee.base.call(this,c);
this.__fR=c.getWindow();
this.__fS=d;
c.addListener(this.__fR,k,this.releaseCapture,this);
c.addListener(this.__fR,j,this.releaseCapture,this);
c.addListener(this.__fR,f,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fS:null,__fT:null,__fU:true,__fR:null,_getParent:function(e){return e.parentNode;
},canDispatchEvent:function(n,event,o){return (this.__fT&&this.__fV[o]);
},dispatchEvent:function(u,event,v){if(v==i){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fU||!qx.dom.Hierarchy.contains(this.__fT,u)){u=this.__fT;
}arguments.callee.base.call(this,u,event,v);
},__fV:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(r,s){var s=s!==false;

if(this.__fT===r&&this.__fU==s){return;
}
if(this.__fT){this.releaseCapture();
}this.nativeSetCapture(r,s);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(r,m,function(){qx.bom.Event.removeNativeListener(r,m,arguments.callee);
self.releaseCapture();
});
}this.__fU=s;
this.__fT=r;
this.__fS.fireEvent(r,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fT;
},releaseCapture:function(){var a=this.__fT;

if(!a){return;
}this.__fT=null;
this.__fS.fireEvent(a,m,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(a);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(l,{"mshtml":function(p,q){p.setCapture(q!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(l,{"mshtml":function(t){t.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fT=this.__fR=this.__fS=null;
},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var s="qx.client",r="",q="mshtml",p="'",o="SelectionLanguage",n="qx.xml.Document",m=" />",k="MSXML2.DOMDocument.3.0",j='<\?xml version="1.0" encoding="utf-8"?>\n<',h="MSXML2.XMLHTTP.3.0",d="MSXML2.XMLHTTP.6.0",g=" xmlns='",f="text/xml",c="XPath",b="MSXML2.DOMDocument.6.0",e="HTML";
qx.Class.define(n,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(C){if(C.nodeType===9){return C.documentElement.nodeName!==e;
}else if(C.ownerDocument){return this.isXmlDocument(C.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(s,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
v.setProperty(o,c);

if(u){var w=j;
w+=u;

if(t){w+=g+t+p;
}w+=m;
v.loadXML(w);
}return v;
},"default":function(F,G){return document.implementation.createDocument(F||r,G||r,null);
}}),fromString:qx.core.Variant.select(s,{"mshtml":function(x){var y=qx.xml.Document.create();
y.loadXML(x);
return y;
},"default":function(D){var E=new DOMParser();
return E.parseFromString(D,f);
}})},defer:function(z){if(qx.core.Variant.isSet(s,q)){var A=[b,k];
var B=[d,h];

for(var i=0,l=A.length;i<l;i++){try{new ActiveXObject(A[i]);
new ActiveXObject(B[i]);
}catch(a){continue;
}z.DOMDOC=A[i];
z.XMLHTTP=B[i];
break;
}}}});
})();
(function(){var g="qx.dom.Element";
qx.Class.define(g,{statics:{hasChild:function(parent,k){return k.parentNode===parent;
},hasChildren:function(m){return !!m.firstChild;
},hasChildElements:function(B){B=B.firstChild;

while(B){if(B.nodeType===1){return true;
}B=B.nextSibling;
}return false;
},getParentElement:function(y){return y.parentNode;
},isInDom:function(v,w){if(!w){w=window;
}var x=w.document.getElementsByTagName(v.nodeName);

for(var i=0,l=x.length;i<l;i++){if(x[i]===v){return true;
}}return false;
},insertAt:function(p,parent,q){var r=parent.childNodes[q];

if(r){parent.insertBefore(p,r);
}else{parent.appendChild(p);
}return true;
},insertBegin:function(o,parent){if(parent.firstChild){this.insertBefore(o,parent.firstChild);
}else{parent.appendChild(o);
}},insertEnd:function(c,parent){parent.appendChild(c);
},insertBefore:function(z,A){A.parentNode.insertBefore(z,A);
return true;
},insertAfter:function(h,j){var parent=j.parentNode;

if(j==parent.lastChild){parent.appendChild(h);
}else{return this.insertBefore(h,j.nextSibling);
}return true;
},remove:function(n){if(!n.parentNode){return false;
}n.parentNode.removeChild(n);
return true;
},removeChild:function(d,parent){if(d.parentNode!==parent){return false;
}parent.removeChild(d);
return true;
},removeChildAt:function(a,parent){var b=parent.childNodes[a];

if(!b){return false;
}parent.removeChild(b);
return true;
},replaceChild:function(e,f){if(!f.parentNode){return false;
}f.parentNode.replaceChild(e,f);
return true;
},replaceAt:function(s,t,parent){var u=parent.childNodes[t];

if(!u){return false;
}parent.replaceChild(s,u);
return true;
}}});
})();
(function(){var l="(\\s|$)",k="(^|\\s)",j="",i="qx.bom.element.Class",h=" ",g="$2";
qx.Class.define(i,{statics:{add:function(q,name){if(!this.has(q,name)){q.className+=(q.className?h:j)+name;
}return name;
},get:function(d){return d.className;
},has:function(o,name){var p=new RegExp(k+name+l);
return p.test(o.className);
},remove:function(e,name){var f=new RegExp(k+name+l);
e.className=e.className.replace(f,g);
return name;
},replace:function(a,b,c){this.remove(a,b);
return this.add(a,c);
},toggle:function(m,name,n){if(n==null){n=!this.has(m,name);
}n?this.add(m,name):this.remove(m,name);
return name;
}}});
})();
(function(){var e="zIndex",d="portal.box.Util",c="auto";
qx.Class.define(d,{statics:{__fW:1000,bringToFront:function(a){var b=qx.bom.element.Style.get(a,e);
b=b==c?0:b;
qx.bom.element.Style.set(a,e,b+this.__fW);
},sendToBack:function(f){var g=qx.bom.element.Style.get(f,e);
qx.bom.element.Style.set(f,e,g-this.__fW);
}}});
})();
(function(){var E="qx.client",D="character",C="EndToEnd",B="input",A="textarea",z="StartToStart",y='character',x="qx.bom.Selection",w="button",v="#text",u="body";
qx.Class.define(x,{statics:{getSelectionObject:qx.core.Variant.select(E,{"mshtml":function(e){return e.selection;
},"default":function(bl){return qx.dom.Node.getWindow(bl).getSelection();
}}),get:qx.core.Variant.select(E,{"mshtml":function(G){var H=qx.bom.Range.get(qx.dom.Node.getDocument(G));
return H.text;
},"default":function(T){if(this.__fX(T)){return T.value.substring(T.selectionStart,T.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(T)).toString();
}}}),getLength:qx.core.Variant.select(E,{"mshtml":function(be){var bg=this.get(be);
var bf=qx.util.StringSplit.split(bg,/\r\n/);
return bg.length-(bf.length-1);
},"opera":function(bt){var by,bw,bu;

if(this.__fX(bt)){var bx=bt.selectionStart;
var bv=bt.selectionEnd;
by=bt.value.substring(bx,bv);
bw=bv-bx;
}else{by=qx.bom.Selection.get(bt);
bw=by.length;
}bu=qx.util.StringSplit.split(by,/\r\n/);
return bw-(bu.length-1);
},"default":function(F){if(this.__fX(F)){return F.selectionEnd-F.selectionStart;
}else{return this.get(F).length;
}}}),getStart:qx.core.Variant.select(E,{"mshtml":function(f){if(this.__fX(f)){var k=qx.bom.Range.get();
if(!f.contains(k.parentElement())){return -1;
}var l=qx.bom.Range.get(f);
var j=f.value.length;
l.moveToBookmark(k.getBookmark());
l.moveEnd(y,j);
return j-l.text.length;
}else{var l=qx.bom.Range.get(f);
var h=l.parentElement();
var m=qx.bom.Range.get();
m.moveToElementText(h);
var g=qx.bom.Range.get(qx.dom.Node.getBodyElement(f));
g.setEndPoint(z,l);
g.setEndPoint(C,m);
if(m.compareEndPoints(z,g)==0){return 0;
}var i;
var n=0;

while(true){i=g.moveStart(D,-1);
if(m.compareEndPoints(z,g)==0){break;
}if(i==0){break;
}else{n++;
}}return ++n;
}},"gecko|webkit":function(P){if(this.__fX(P)){return P.selectionStart;
}else{var R=qx.dom.Node.getDocument(P);
var Q=this.getSelectionObject(R);
if(Q.anchorOffset<Q.focusOffset){return Q.anchorOffset;
}else{return Q.focusOffset;
}}},"default":function(o){if(this.__fX(o)){return o.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(o)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(E,{"mshtml":function(U){if(this.__fX(U)){var ba=qx.bom.Range.get();
if(!U.contains(ba.parentElement())){return -1;
}var bb=qx.bom.Range.get(U);
var Y=U.value.length;
bb.moveToBookmark(ba.getBookmark());
bb.moveStart(y,-Y);
return bb.text.length;
}else{var bb=qx.bom.Range.get(U);
var W=bb.parentElement();
var bc=qx.bom.Range.get();
bc.moveToElementText(W);
var Y=bc.text.length;
var V=qx.bom.Range.get(qx.dom.Node.getBodyElement(U));
V.setEndPoint(C,bb);
V.setEndPoint(z,bc);
if(bc.compareEndPoints(C,V)==0){return Y-1;
}var X;
var bd=0;

while(true){X=V.moveEnd(D,1);
if(bc.compareEndPoints(C,V)==0){break;
}if(X==0){break;
}else{bd++;
}}return Y-(++bd);
}},"gecko|webkit":function(bh){if(this.__fX(bh)){return bh.selectionEnd;
}else{var bj=qx.dom.Node.getDocument(bh);
var bi=this.getSelectionObject(bj);
if(bi.focusOffset>bi.anchorOffset){return bi.focusOffset;
}else{return bi.anchorOffset;
}}},"default":function(bk){if(this.__fX(bk)){return bk.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bk)).focusOffset;
}}}),__fX:function(I){return qx.dom.Node.isElement(I)&&(I.nodeName.toLowerCase()==B||I.nodeName.toLowerCase()==A);
},set:qx.core.Variant.select(E,{"mshtml":function(p,q,r){var s;
if(qx.dom.Node.isDocument(p)){p=p.body;
}
if(qx.dom.Node.isElement(p)||qx.dom.Node.isText(p)){switch(p.nodeName.toLowerCase()){case B:case A:case w:if(r===undefined){r=p.value.length;
}
if(q>=0&&q<=p.value.length&&r>=0&&r<=p.value.length){s=qx.bom.Range.get(p);
s.collapse(true);
s.moveStart(D,q);
s.moveEnd(D,r-q);
s.select();
return true;
}break;
case v:if(r===undefined){r=p.nodeValue.length;
}
if(q>=0&&q<=p.nodeValue.length&&r>=0&&r<=p.nodeValue.length){s=qx.bom.Range.get(qx.dom.Node.getBodyElement(p));
s.moveToElementText(p.parentNode);
s.collapse(true);
s.moveStart(D,q);
s.moveEnd(D,r-q);
s.select();
return true;
}break;
default:if(r===undefined){r=p.childNodes.length-1;
}if(p.childNodes[q]&&p.childNodes[r]){s=qx.bom.Range.get(qx.dom.Node.getBodyElement(p));
s.moveToElementText(p.childNodes[q]);
s.collapse(true);
var t=qx.bom.Range.get(qx.dom.Node.getBodyElement(p));
t.moveToElementText(p.childNodes[r]);
s.setEndPoint(C,t);
s.select();
return true;
}}}return false;
},"default":function(bm,bn,bo){var bs=bm.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bm)&&(bs==B||bs==A)){if(bo===undefined){bo=bm.value.length;
}if(bn>=0&&bn<=bm.value.length&&bo>=0&&bo<=bm.value.length){bm.focus();
bm.select();
bm.setSelectionRange(bn,bo);
return true;
}}else{var bq=false;
var br=qx.dom.Node.getWindow(bm).getSelection();
var bp=qx.bom.Range.get(bm);
if(qx.dom.Node.isText(bm)){if(bo===undefined){bo=bm.length;
}
if(bn>=0&&bn<bm.length&&bo>=0&&bo<=bm.length){bq=true;
}}else if(qx.dom.Node.isElement(bm)){if(bo===undefined){bo=bm.childNodes.length-1;
}
if(bn>=0&&bm.childNodes[bn]&&bo>=0&&bm.childNodes[bo]){bq=true;
}}else if(qx.dom.Node.isDocument(bm)){bm=bm.body;

if(bo===undefined){bo=bm.childNodes.length-1;
}
if(bn>=0&&bm.childNodes[bn]&&bo>=0&&bm.childNodes[bo]){bq=true;
}}
if(bq){if(!br.isCollapsed){br.collapseToStart();
}bp.setStart(bm,bn);
if(qx.dom.Node.isText(bm)){bp.setEnd(bm,bo);
}else{bp.setEndAfter(bm.childNodes[bo]);
}if(br.rangeCount>0){br.removeAllRanges();
}br.addRange(bp);
return true;
}}return false;
}}),setAll:function(S){return qx.bom.Selection.set(S,0);
},clear:qx.core.Variant.select(E,{"mshtml":function(a){var b=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(a));
var c=qx.bom.Range.get(a);
var parent=c.parentElement();
var d=qx.bom.Range.get(qx.dom.Node.getDocument(a));
if(parent==d.parentElement()&&parent==a){b.empty();
}},"default":function(J){var L=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(J));
var N=J.nodeName.toLowerCase();
if(qx.dom.Node.isElement(J)&&(N==B||N==A)){J.setSelectionRange(0,0);
qx.bom.Element.blur(J);
}else if(qx.dom.Node.isDocument(J)||N==u){L.collapse(J.body?J.body:J,0);
}else{var M=qx.bom.Range.get(J);

if(!M.collapsed){var O;
var K=M.commonAncestorContainer;
if(qx.dom.Node.isElement(J)&&qx.dom.Node.isText(K)){O=K.parentNode;
}else{O=K;
}
if(O==J){L.collapse(J,0);
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
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(z){if(z.getBoundingClientRect){var A=z.getBoundingClientRect();
return Math.round(A.right)-Math.round(A.left);
}else{return z.offsetWidth;
}},"default":function(i){return i.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(B){if(B.getBoundingClientRect){var C=B.getBoundingClientRect();
return Math.round(C.bottom)-Math.round(C.top);
}else{return B.offsetHeight;
}},"default":function(j){return j.offsetHeight;
}}),getSize:function(k){return {width:this.getWidth(k),height:this.getHeight(k)};
},__fY:{visible:true,hidden:true},getContentWidth:function(l){var n=qx.bom.element.Style;
var o=qx.bom.element.Overflow.getX(l);
var p=parseInt(n.get(l,c),10);
var r=parseInt(n.get(l,d),10);

if(this.__fY[o]){return l.clientWidth-p-r;
}else{if(l.clientWidth>=l.scrollWidth){return Math.max(l.clientWidth,l.scrollWidth)-p-r;
}else{var q=l.scrollWidth-p;
var m=qx.bom.client.Engine;

if(m.NAME===g&&m.VERSION==6){q-=r;
}return q;
}}},getContentHeight:function(s){var u=qx.bom.element.Style;
var w=qx.bom.element.Overflow.getY(s);
var x=parseInt(u.get(s,b),10);
var v=parseInt(u.get(s,a),10);

if(this.__fY[w]){return s.clientHeight-x-v;
}else{if(s.clientHeight>=s.scrollHeight){return Math.max(s.clientHeight,s.scrollHeight)-x-v;
}else{var y=s.scrollHeight-x;
var t=qx.bom.client.Engine;

if(t.NAME===g&&t.VERSION==6){y-=v;
}return y;
}}},getContentSize:function(h){return {width:this.getContentWidth(h),height:this.getContentHeight(h)};
}}});
})();
(function(){var o="mousemove",n="mouseup",m="dragstart",l="mousedown",k="portal.box.Draggable",j="mouseover",i="drag",h="dragend",g="div",f="move",b="dragHandle",d="html",c="cursor",a="qx.client";
qx.Class.define(k,{extend:qx.core.Object,construct:function(p){arguments.callee.base.call(this);
this.__ga=p;
this.__gb=p.getElement();
this.__gc=null;
this.__gd=null;
this.__ge();
},members:{__ga:null,__gb:null,__gc:null,__gd:null,getBox:function(){return this.__ga;
},getElement:function(){return this.__gb;
},__ge:function(){this.__gf();
this.__gg();
},__gf:function(){this.__gc=qx.bom.Element.create(g);
qx.bom.element.Class.add(this.__gc,b);
qx.dom.Element.insertBegin(this.__gc,this.__gb);
},__gg:function(){qx.bom.Element.addListener(this.__gc,l,this.__gh,this);
qx.bom.Element.addListener(this.__gc,j,function(e){qx.bom.element.Style.set(this,c,f);
},this.__gc);
qx.bom.Element.addListener(this.__gc,m,this.__gk,this);
qx.bom.Element.addListener(this.__gc,h,portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__gc,i,this.__gl,this);
},__gh:function(e){if(e.isLeftPressed()){this.__gd={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__gb),top:e.getDocumentTop()-qx.bom.element.Location.getTop(this.__gb)};
qx.bom.Element.addListener(document.body,n,this.__gj,this,true);
this.__gi();
qx.event.Registration.fireEvent(this.__gc,m,qx.event.type.Event);
}},__gi:qx.core.Variant.select(a,{"mshtml":function(){var t=this;
var s=qx.lang.Function.bind(this.__gj,t);
document.getElementsByTagName(d)[0].onmouseleave=s;
},"default":qx.lang.Function.empty}),__gj:function(e){try{e.stopPropagation();
}catch(q){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,o,this.__gl,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,n,this.__gj,this,true);
},__gk:function(e){portal.box.Manager.getInstance().setActiveBox(this.__ga);
portal.dragdrop.Manager.getInstance().startSession(this.__ga);
qx.event.Registration.addListener(document.body,o,this.__gl,this,true);
},__gl:function(e){e.stopPropagation();
var r=e.getDocumentLeft()-this.__gd.left;
var top=e.getDocumentTop()-this.__gd.top;
qx.event.Timer.once(function(){this.checkGroupBox(r);
this.onDragMove(top,r);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this.__ga=this.__gc=this.__gb=this.__gd=null;
}});
})();
(function(){var M="px",L="px;",K="border",J="portal.box.Box",I="1px dashed red",H="top",G="Boolean",F="left",E="paddingTop",D="width:",w="height:",C="finish",z="opacity:0.5;margin:0;position:absolute;",u="left:",t="div",y="absolute",x="spring",A="paddingBottom",s="portal.dragdrop.Manager",B="singleton",v="top:";
qx.Class.define(s,{type:B,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gm={top:null,height:null};
this.__gn={top:0,left:0};
},properties:{activeBox:{check:J,init:null,nullable:true},sessionActive:{check:G,init:false}},members:{__gm:null,__go:null,__gp:false,__gn:null,__gq:null,__gr:null,startSession:function(n){this.setSessionActive(true);
this.setActiveBox(n);
this.__go=n.getGroupBoxId();
this.__gs();
if(this.__gq==null){this.__gq={};
var o=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=o.length;i<j;i++){this.__gq[o[i].element.id]={left:qx.bom.element.Location.getLeft(o[i].element),right:qx.bom.element.Location.getLeft(o[i].element)+qx.bom.element.Dimension.getWidth(o[i].element)};
}}},__gs:function(){if(!this.__gr){this.__gr=qx.bom.Element.create(t);
}var R=this.getActiveBox().getElement();
var P=qx.bom.element.Dimension.getContentSize(R);
this.__gt(R,this.__gr);
qx.bom.element.Class.add(this.__gr,qx.bom.element.Class.get(R));
var Q=z+v+qx.bom.element.Location.getTop(R)+L+u+qx.bom.element.Location.getLeft(R)+L+D+P.width+L+w+P.height+M;
qx.bom.element.Style.setCss(this.__gr,Q);
qx.bom.element.Style.set(R,K,I);
qx.dom.Node.getBodyElement(R).appendChild(this.__gr);
portal.box.Util.bringToFront(this.__gr);
},__gt:function(N,O){while(N.firstChild){O.appendChild(N.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var q=this.getActiveBox();
var r=q.getElement();
portal.box.Manager.getInstance().updateGroupBoxMembers(q.getGroupBoxId(),this.__go,q);
q.setGroupBoxId(this.__go);
var p=new qx.fx.effect.core.Move(this.__gr);
p.set({x:qx.bom.element.Location.getLeft(r),y:qx.bom.element.Location.getTop(r),mode:y,duration:0.5,transition:x});
p.start();
p.addListener(C,function(){this.__gt(this.__gr,r);
qx.bom.element.Style.reset(r,K);
this.__gr.parentNode.removeChild(this.__gr);

if(q.isActive()){q._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(q);
}},this);
},onDragMove:function(top,S){if(this.__gn.left!=S){qx.bom.element.Style.set(this.__gr,F,S+M);
}
if(this.__gn.top!=top){qx.bom.element.Style.set(this.__gr,H,top+M);
}var T=this.getActiveBox().getElement();

if(this.__gm.top==null){this.__gm.top=qx.bom.element.Location.getTop(T);
}
if(this.__gm.height==null){this.__gm.height=qx.bom.element.Dimension.getHeight(T);
}if(this.__gp==false&&top>=this.__gm.top&&top<=(this.__gm.top+this.__gm.height)){return;
}var U;
if(this.__gp){U=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__go));
while(U!=null){if(this.__gu(true,top,T,U)){this.__gp=false;
return;
}U=qx.dom.Hierarchy.getNextElementSibling(U);
}}else{U=T;
}if(top-this.__gn.top>0){U=qx.dom.Hierarchy.getNextElementSibling(U);

while(U!=null){if(U){if(this.__gu(true,top,T,U)){return;
}}U=qx.dom.Hierarchy.getNextElementSibling(U);
}}else{var U=qx.dom.Hierarchy.getPreviousElementSibling(U);

while(U!=null){if(U){if(this.__gu(false,top,T,U)){return;
}}U=qx.dom.Hierarchy.getPreviousElementSibling(U);
}}this.__gn.left=S;
this.__gn.top=top;
},__gu:function(c,top,d,f){var g=qx.bom.element.Location.getTop(f);
var k=parseInt(qx.bom.element.Style.get(f,E));
var l=parseInt(qx.bom.element.Style.get(f,A));
var h=qx.bom.element.Dimension.getContentHeight(f)+l+k;
var m;

if(c){if(top>=(g+(h/3))){m=qx.dom.Hierarchy.getNextElementSibling(f);

if(m!=d||m==null){qx.dom.Element.insertAfter(d,f);
this.__gm.top=qx.bom.element.Location.getTop(d);
}return true;
}}else{if(top<=(g+h*2/3)){m=qx.dom.Hierarchy.getPreviousElementSibling(f);

if(m!=d||m==null){qx.dom.Element.insertBefore(d,f);
this.__gm.top=qx.bom.element.Location.getTop(d);
}return true;
}}return false;
},checkGroupBox:function(a){if(this.__gq[this.__go].left<=a&&this.__gq[this.__go].right>=a){return;
}
for(var b in this.__gq){if(b!=this.__go){if(this.__gq[b].left<=a&&this.__gq[b].right>=a){this.__go=b;
this.__gp=true;
return;
}}}}},destruct:function(){this.__gm=this.__gn=this.__go=null;
this.__gv=this.__gr=this.__gq=null;
}});
})();
(function(){var bi="borderTopWidth",bh="borderLeftWidth",bg="marginTop",bf="marginLeft",be="scroll",bd="qx.client",bc="border-box",bb="borderBottomWidth",ba="borderRightWidth",Y="auto",bx="padding",bw="qx.bom.element.Location",bv="paddingLeft",bu="static",bt="marginBottom",bs="visible",br="BODY",bq="paddingBottom",bp="paddingTop",bo="marginRight",bm="position",bn="margin",bk="overflow",bl="paddingRight",bj="border";
qx.Class.define(bw,{statics:{__gw:function(v,w){return qx.bom.element.Style.get(v,w,qx.bom.element.Style.COMPUTED_MODE,false);
},__gx:function(i,j){return parseInt(qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gy:function(e){var h=0,top=0;
if(e.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var g=qx.dom.Node.getWindow(e);
h-=qx.bom.Viewport.getScrollLeft(g);
top-=qx.bom.Viewport.getScrollTop(g);
}else{var f=qx.dom.Node.getDocument(e).body;
e=e.parentNode;
while(e&&e!=f){h+=e.scrollLeft;
top+=e.scrollTop;
e=e.parentNode;
}}return {left:h,top:top};
},__gz:qx.core.Variant.select(bd,{"mshtml":function(P){var R=qx.dom.Node.getDocument(P);
var Q=R.body;
var S=0;
var top=0;
S-=Q.clientLeft+R.documentElement.clientLeft;
top-=Q.clientTop+R.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){S+=this.__gx(Q,bh);
top+=this.__gx(Q,bi);
}return {left:S,top:top};
},"webkit":function(B){var D=qx.dom.Node.getDocument(B);
var C=D.body;
var E=C.offsetLeft;
var top=C.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){E+=this.__gx(C,bh);
top+=this.__gx(C,bi);
}return {left:E,top:top};
},"gecko":function(bF){var bG=qx.dom.Node.getDocument(bF).body;
var bH=bG.offsetLeft;
var top=bG.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bH+=this.__gx(bG,bf);
top+=this.__gx(bG,bg);
}if(qx.bom.element.BoxSizing.get(bG)!==bc){bH+=this.__gx(bG,bh);
top+=this.__gx(bG,bi);
}return {left:bH,top:top};
},"default":function(bI){var bJ=qx.dom.Node.getDocument(bI).body;
var bK=bJ.offsetLeft;
var top=bJ.offsetTop;
return {left:bK,top:top};
}}),__gA:qx.core.Variant.select(bd,{"mshtml|webkit":function(T){var V=qx.dom.Node.getDocument(T);
if(T.getBoundingClientRect){var W=T.getBoundingClientRect();
var X=W.left;
var top=W.top;
}else{var X=T.offsetLeft;
var top=T.offsetTop;
T=T.offsetParent;
var U=V.body;
while(T&&T!=U){X+=T.offsetLeft;
top+=T.offsetTop;
X+=this.__gx(T,bh);
top+=this.__gx(T,bi);
T=T.offsetParent;
}}return {left:X,top:top};
},"gecko":function(bL){if(bL.getBoundingClientRect){var bO=bL.getBoundingClientRect();
var bP=Math.round(bO.left);
var top=Math.round(bO.top);
}else{var bP=0;
var top=0;
var bM=qx.dom.Node.getDocument(bL).body;
var bN=qx.bom.element.BoxSizing;

if(bN.get(bL)!==bc){bP-=this.__gx(bL,bh);
top-=this.__gx(bL,bi);
}
while(bL&&bL!==bM){bP+=bL.offsetLeft;
top+=bL.offsetTop;
if(bN.get(bL)!==bc){bP+=this.__gx(bL,bh);
top+=this.__gx(bL,bi);
}if(bL.parentNode&&this.__gw(bL.parentNode,bk)!=bs){bP+=this.__gx(bL.parentNode,bh);
top+=this.__gx(bL.parentNode,bi);
}bL=bL.offsetParent;
}}return {left:bP,top:top};
},"default":function(bC){var bE=0;
var top=0;
var bD=qx.dom.Node.getDocument(bC).body;
while(bC&&bC!==bD){bE+=bC.offsetLeft;
top+=bC.offsetTop;
bC=bC.offsetParent;
}return {left:bE,top:top};
}}),get:function(m,n){if(m.tagName==br){var location=this.__gB(m);
var u=location.left;
var top=location.top;
}else{var o=this.__gz(m);
var t=this.__gA(m);
var scroll=this.__gy(m);
var u=t.left+o.left-scroll.left;
var top=t.top+o.top-scroll.top;
}var p=u+m.offsetWidth;
var q=top+m.offsetHeight;

if(n){if(n==bx||n==be){var r=qx.bom.element.Overflow.getX(m);

if(r==be||r==Y){p+=m.scrollWidth-m.offsetWidth+this.__gx(m,bh)+this.__gx(m,ba);
}var s=qx.bom.element.Overflow.getY(m);

if(s==be||s==Y){q+=m.scrollHeight-m.offsetHeight+this.__gx(m,bi)+this.__gx(m,bb);
}}
switch(n){case bx:u+=this.__gx(m,bv);
top+=this.__gx(m,bp);
p-=this.__gx(m,bl);
q-=this.__gx(m,bq);
case be:u-=m.scrollLeft;
top-=m.scrollTop;
p-=m.scrollLeft;
q-=m.scrollTop;
case bj:u+=this.__gx(m,bh);
top+=this.__gx(m,bi);
p-=this.__gx(m,ba);
q-=this.__gx(m,bb);
break;
case bn:u-=this.__gx(m,bf);
top-=this.__gx(m,bg);
p+=this.__gx(m,bo);
q+=this.__gx(m,bt);
break;
}}return {left:u,top:top,right:p,bottom:q};
},__gB:qx.core.Variant.select(bd,{"default":function(z){var top=z.offsetTop+this.__gx(z,bg);
var A=z.offsetLeft+this.__gx(z,bf);
return {left:A,top:top};
},"mshtml":function(c){var top=c.offsetTop;
var d=c.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gx(c,bg);
d+=this.__gx(c,bf);
}return {left:d,top:top};
},"gecko":function(a){var top=a.offsetTop+this.__gx(a,bg)+this.__gx(a,bh);
var b=a.offsetLeft+this.__gx(a,bf)+this.__gx(a,bi);
return {left:b,top:top};
}}),getLeft:function(bA,bB){return this.get(bA,bB).left;
},getTop:function(k,l){return this.get(k,l).top;
},getRight:function(by,bz){return this.get(by,bz).right;
},getBottom:function(x,y){return this.get(x,y).bottom;
},getRelative:function(J,K,L,M){var O=this.get(J,L);
var N=this.get(K,M);
return {left:O.left-N.left,top:O.top-N.top,right:O.right-N.right,bottom:O.bottom-N.bottom};
},getPosition:function(F){return this.getRelative(F,this.getOffsetParent(F));
},getOffsetParent:function(G){var I=G.offsetParent||document.body;
var H=qx.bom.element.Style;

while(I&&(!/^body|html$/i.test(I.tagName)&&H.get(I,bm)===bu)){I=I.offsetParent;
}return I;
}}});
})();
(function(){var A="Number",z="qx.event.type.Event",y="update",x="linear",w="reverse",v="Boolean",u="setup",t="none",s="qx.fx.Base",r="sinodial",k="flicker",q="pulse",n="_applyDuration",j="easeOutQuad",i="spring",m="easeInQuad",l="full",o="wobble",h="finish",p="Object";
qx.Class.define(s,{extend:qx.core.Object,construct:function(d){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__gC=qx.fx.Base.EffectState.IDLE;
this.__gD=d;
},events:{"setup":z,"update":z,"finish":z},properties:{duration:{init:0.5,check:A,apply:n},fps:{init:100,check:A},sync:{init:false,check:v},from:{init:0,check:A},to:{init:1,check:A},delay:{init:0.0,check:A},queue:{check:p},transition:{init:x,check:[x,m,j,r,w,k,o,q,i,t,l]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__gC:null,__gE:null,__gF:null,__gG:null,__gH:null,__gI:null,__gJ:null,__gK:null,__gD:null,_getElement:function(){return this.__gD;
},_setElement:function(C){this.__gD=C;
},_applyDuration:function(e,f){},init:function(){this.__gC=qx.fx.Base.EffectState.PREPARING;
this.__gE=0;
this.__gF=this.getDelay()*1000+(new Date().getTime());
this.__gG=this.__gF+(this.getDuration()*1000);
this.__gH=this.getTo()-this.getFrom();
this.__gI=this.__gG-this.__gF;
this.__gJ=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(u);
},update:function(g){},finish:function(){this.fireEvent(h);
},start:function(){if(this.__gC!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(B){if(this.__gC==qx.fx.Base.EffectState.PREPARING){this.__gC=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__gC==qx.fx.Base.EffectState.RUNNING){this.__gK=qx.fx.Transition.get(this.getTransition())(B)*this.__gH+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__gK);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(y)){this.fireEvent(y);
}}},loop:function(a){if(a>=this.__gF){if(a>=this.__gG){this.end();
}var c=(a-this.__gF)/this.__gI;
var b=Math.round(c*this.__gJ);
if(b>this.__gE){this.render(c);
this.__gE=b;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__gC=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__gC=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__gD=this.__gC=null;
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__gL:null,__gM:null,__gN:null,__gO:null,__gP:null,setup:function(){var m=this._getElement();
arguments.callee.base.call(this);

if(m.parentNode){this.__gN=qx.bom.element.Location.getLeft(m)-qx.bom.element.Location.getLeft(m.parentNode);
this.__gO=qx.bom.element.Location.getTop(m)-qx.bom.element.Location.getTop(m.parentNode);
}else{this.__gN=qx.bom.element.Location.getLeft(m);
this.__gO=qx.bom.element.Location.getTop(m);
}this.__gP=qx.bom.element.Style.get(m,i);
qx.bom.element.Style.set(m,i,e);

if(this.getMode()==b){this.__gL=this.getX()-this.__gN;
this.__gM=this.getY()-this.__gO;
}else{this.__gL=this.getX();
this.__gM=this.getY();
}},update:function(j){var l=this._getElement();
arguments.callee.base.call(this);
var k=Math.round(this.__gL*j+this.__gN);
var top=Math.round(this.__gM*j+this.__gO);
qx.bom.element.Style.set(l,c,k+h);
qx.bom.element.Style.set(l,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__gP);
}}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__gQ",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
this.__gQ={};
},members:{__gQ:null,getQueue:function(f){if(typeof (this.__gQ[f])==a){return this.__gQ[f];
}else{return this.__gQ[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gR=[];
},properties:{limit:{init:Infinity,check:a}},members:{__gS:null,__gR:null,add:function(f){var g=new Date().getTime();
f._startOn+=g;
f._finishOn+=g;

if(this.__gR.length<this.getLimit()){this.__gR.push(f);
}else{f.resetState();
}
if(!this.__gS){this.__gS=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(c){qx.lang.Array.remove(this.__gR,c);

if(this.__gR.length==0){window.clearInterval(this.__gS);
delete this.__gS;
}},loop:function(){var d=new Date().getTime();

for(var i=0,e=this.__gR.length;i<e;i++){this.__gR[i]&&this.__gR[i].loop(d);
}}},destruct:function(){this.__gR=null;
}});
})();
(function(){var h="Number",g="static",f="qx.fx.Transition";
qx.Class.define(f,{type:g,statics:{get:function(m){return qx.fx.Transition[m]||false;
},linear:function(a){return a;
},easeInQuad:function(j){return Math.pow(2,10*(j-1));
},easeOutQuad:function(i){return (-Math.pow(2,-10*i)+1);
},sinodial:function(n){return (-Math.cos(n*Math.PI)/2)+0.5;
},reverse:function(o){return 1-o;
},flicker:function(d){var d=((-Math.cos(d*Math.PI)/4)+0.75)+Math.random()/4;
return d>1?1:d;
},wobble:function(k){return (-Math.cos(k*Math.PI*(9*k))/2)+0.5;
},pulse:function(b,c){c=(typeof (c)==h)?c:5;
return (Math.round((b%(1/c))*c)==0?Math.floor((b*c*2)-(b*c*2)):1-Math.floor((b*c*2)-(b*c*2)));
},spring:function(p){return 1-(Math.cos(p*4.5*Math.PI)*Math.exp(-p*6));
},none:function(l){return 0;
},full:function(e){return 1;
}}});
})();


qx.$$loader.init();

