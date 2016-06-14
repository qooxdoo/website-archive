(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"portal.Application","qx.theme":"qx.theme.Modern","qx.version":"1.0"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"portal":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
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
  packageHashes : {"0":"688fd74b5c30"},
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

qx.$$packageData['688fd74b5c30']={"resources":{"portal/css/style.css":"portal","portal/data/boxData.js":"portal","qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-61,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-43,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-30,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-15,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-53,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-35,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-44,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-24,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-12,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-8],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-46,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-22,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/table/descending.gif":[7,4,"gif","qx"],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-54,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-36,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"]}};
(function(){var h=".",g="()",f="[Class ",e=".prototype",d="toString",c="qx.Bootstrap",b="]",a="Class";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return f+this.classname+b;
},createNamespace:function(name,v){var x=name.split(h);
var parent=window;
var w=x[0];

for(var i=0,y=x.length-1;i<y;i++,w=x[i]){if(!parent[w]){parent=parent[w]={};
}else{parent=parent[w];
}}parent[w]=v;
return w;
},setDisplayName:function(t,u,name){t.displayName=u+h+name+g;
},setDisplayNames:function(q,r){for(var name in q){var s=q[name];

if(s instanceof Function){s.displayName=r+h+name+g;
}}},define:function(name,j){if(!j){var j={statics:{}};
}var o;
var m=null;
qx.Bootstrap.setDisplayNames(j.statics,name);

if(j.members){qx.Bootstrap.setDisplayNames(j.members,name+e);
o=j.construct||new Function;
var k=j.statics;

for(var l in k){o[l]=k[l];
}m=o.prototype;
var p=j.members;

for(var l in p){m[l]=p[l];
}}else{o=j.statics||{};
}var n=this.createNamespace(name,o);
o.name=o.classname=name;
o.basename=n;
o.$$type=a;
if(!o.hasOwnProperty(d)){o.toString=this.genericToString;
}if(j.defer){j.defer(o,m);
}qx.Bootstrap.$$registry[name]=j.statics;
return o;
}};
qx.Bootstrap.define(c,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return this.$$registry[name];
},$$registry:{}}});
})();
(function(){var l="qx.allowUrlSettings",k="&",j="qx.core.Setting",h="qx.allowUrlVariants",g="qx.propertyDebugLevel",f="qxsetting",e=":",d=".";
qx.Bootstrap.define(j,{statics:{__dz:{},define:function(b,c){if(c===undefined){throw new Error('Default value of setting "'+b+'" must be defined!');
}
if(!this.__dz[b]){this.__dz[b]={};
}else if(this.__dz[b].defaultValue!==undefined){throw new Error('Setting "'+b+'" is already defined!');
}this.__dz[b].defaultValue=c;
},get:function(r){var s=this.__dz[r];

if(s===undefined){throw new Error('Setting "'+r+'" is not defined.');
}
if(s.value!==undefined){return s.value;
}return s.defaultValue;
},set:function(n,o){if((n.split(d)).length<2){throw new Error('Malformed settings key "'+n+'". Must be following the schema "namespace.key".');
}
if(!this.__dz[n]){this.__dz[n]={};
}this.__dz[n].value=o;
},__dA:function(){if(window.qxsettings){for(var m in window.qxsettings){this.set(m,window.qxsettings[m]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(t){}this.__dB();
}},__dB:function(){if(this.get(l)!=true){return;
}var q=document.location.search.slice(1).split(k);

for(var i=0;i<q.length;i++){var p=q[i].split(e);

if(p.length!=3||p[0]!=f){continue;
}this.set(p[1],decodeURIComponent(p[2]));
}}},defer:function(a){a.define(l,false);
a.define(h,false);
a.define(g,0);
a.__dA();
}});
})();
(function(){var z="gecko",y="1.9.0.0",x=".",w="[object Opera]",v="function",u="[^\\.0-9]",t="525.26",s="",r="mshtml",q="AppleWebKit/",k="unknown",p="9.6.0",n="4.0",j="Gecko",i="opera",m="webkit",l="0.0.0",o="8.0",h="qx.bom.client.Engine";
qx.Bootstrap.define(h,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__dy:function(){var a=k;
var e=l;
var d=window.navigator.userAgent;
var g=false;
var c=false;

if(window.opera&&Object.prototype.toString.call(window.opera)==w){a=i;
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(d)){e=RegExp.$1+x+RegExp.$2;

if(RegExp.$3!=s){e+=x+RegExp.$3;
}}else{c=true;
e=p;
}}else if(window.navigator.userAgent.indexOf(q)!=-1){a=m;
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(d)){e=RegExp.$1;
var f=RegExp(u).exec(e);

if(f){e=e.slice(0,f.index);
}}else{c=true;
e=t;
}}else if(window.controllers&&window.navigator.product===j){a=z;
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(d)){e=RegExp.$1;
}else{c=true;
e=y;
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(d)){a=r;
e=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(e<8&&/Trident\/([^\);]+)(\)|;)/.test(d)){if(RegExp.$1===n){e=o;
}}this.MSHTML=true;
}else{var b=window.qxFail;

if(b&&typeof b===v){var a=b();

if(a.NAME&&a.FULLVERSION){a=a.NAME;
this[a.toUpperCase()]=true;
e=a.FULLVERSION;
}}else{g=true;
c=true;
e=y;
a=z;
this.GECKO=true;
window.alert("Unsupported client: "+d+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=g;
this.UNKNOWN_VERSION=c;
this.NAME=a;
this.FULLVERSION=e;
this.VERSION=parseFloat(e);
}},defer:function(A){A.__dy();
}});
})();
(function(){var D="on",C="off",B="|",A="default",z="object",y="&",x="qx.aspects",w="$",u="qx.allowUrlVariants",t="qx.debug",n="qx.client",s="qx.dynlocale",q="webkit",m="qxvariant",k="opera",p=":",o="qx.core.Variant",r="mshtml",j="gecko";
qx.Bootstrap.define(o,{statics:{__jk:{},__jl:{},compilerIsSet:function(){return true;
},define:function(e,f,g){{};

if(!this.__jk[e]){this.__jk[e]={};
}else{}this.__jk[e].allowedValues=f;
this.__jk[e].defaultValue=g;
},get:function(F){var G=this.__jk[F];
{};

if(G.value!==undefined){return G.value;
}return G.defaultValue;
},__jm:function(){if(window.qxvariants){for(var h in qxvariants){{};

if(!this.__jk[h]){this.__jk[h]={};
}this.__jk[h].value=qxvariants[h];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(d){}this.__jn(this.__jk);
}},__jn:function(){if(qx.core.Setting.get(u)!=true){return;
}var a=document.location.search.slice(1).split(y);

for(var i=0;i<a.length;i++){var b=a[i].split(p);

if(b.length!=3||b[0]!=m){continue;
}var c=b[1];

if(!this.__jk[c]){this.__jk[c]={};
}this.__jk[c].value=decodeURIComponent(b[2]);
}},select:function(O,P){{};

for(var Q in P){if(this.isSet(O,Q)){return P[Q];
}}
if(P[A]!==undefined){return P[A];
}{};
},isSet:function(J,K){var L=J+w+K;

if(this.__jl[L]!==undefined){return this.__jl[L];
}var N=false;
if(K.indexOf(B)<0){N=this.get(J)===K;
}else{var M=K.split(B);

for(var i=0,l=M.length;i<l;i++){if(this.get(J)===M[i]){N=true;
break;
}}}this.__jl[L]=N;
return N;
},__jo:function(v){return typeof v===z&&v!==null&&v instanceof Array;
},__jp:function(v){return typeof v===z&&v!==null&&!(v instanceof Array);
},__jq:function(H,I){for(var i=0,l=H.length;i<l;i++){if(H[i]==I){return true;
}}return false;
}},defer:function(E){E.define(n,[j,r,k,q],qx.bom.client.Engine.NAME);
E.define(t,[D,C],D);
E.define(x,[D,C],C);
E.define(s,[D,C],D);
E.__jm();
}});
})();
(function(){var Q="qx.client",P='"',O="valueOf",N="toLocaleString",M="isPrototypeOf",L="",K="toString",J="qx.lang.Object",I='\", "',H="hasOwnProperty";
qx.Bootstrap.define(J,{statics:{empty:function(t){{};

for(var u in t){if(t.hasOwnProperty(u)){delete t[u];
}}},isEmpty:qx.core.Variant.select(Q,{"gecko":function(h){{};
return h.__count__===0;
},"default":function(U){{};

for(var V in U){return false;
}return true;
}}),hasMinLength:qx.core.Variant.select(Q,{"gecko":function(p,q){{};
return p.__count__>=q;
},"default":function(W,X){{};

if(X<=0){return true;
}var length=0;

for(var Y in W){if((++length)>=X){return true;
}}return false;
}}),getLength:qx.core.Variant.select(Q,{"gecko":function(bk){{};
return bk.__count__;
},"default":function(f){{};
var length=0;

for(var g in f){length++;
}return length;
}}),_shadowedKeys:[M,H,N,K,O],getKeys:qx.core.Variant.select(Q,{"mshtml":function(bd){var be=[];

for(var bg in bd){be.push(bg);
}var bf=Object.prototype.hasOwnProperty;

for(var i=0,a=this._shadowedKeys,l=a.length;i<l;i++){if(bf.call(bd,a[i])){be.push(a[i]);
}}return be;
},"default":function(R){var S=[];

for(var T in R){S.push(T);
}return S;
}}),getKeysAsString:function(r){{};
var s=qx.lang.Object.getKeys(r);

if(s.length==0){return L;
}return P+s.join(I)+P;
},getValues:function(ba){{};
var bc=[];
var bb=this.getKeys(ba);

for(var i=0,l=bb.length;i<l;i++){bc.push(ba[bb[i]]);
}return bc;
},mergeWith:function(A,B,C){{};

if(C===undefined){C=true;
}
for(var D in B){if(C||A[D]===undefined){A[D]=B[D];
}}return A;
},carefullyMergeWith:function(v,w){{};
return qx.lang.Object.mergeWith(v,w,false);
},merge:function(j,k){{};
var m=arguments.length;

for(var i=1;i<m;i++){qx.lang.Object.mergeWith(j,arguments[i]);
}return j;
},clone:function(E){{};
var F={};

for(var G in E){F[G]=E[G];
}return F;
},invert:function(bh){{};
var bi={};

for(var bj in bh){bi[bh[bj].toString()]=bj;
}return bi;
},getKeyFromValue:function(x,y){{};

for(var z in x){if(x.hasOwnProperty(z)&&x[z]===y){return z;
}}return null;
},contains:function(d,e){{};
return this.getKeyFromValue(d,e)!==null;
},select:function(n,o){{};
return o[n];
},fromArray:function(b){{};
var c={};

for(var i=0,l=b.length;i<l;i++){{};
c[b[i].toString()]=true;
}return c;
}}});
})();
(function(){var m="Function",l="Boolean",k="Error",j="Number",i="Array",h="Date",g="RegExp",f="String",e="Object",d="qx.lang.Type",c="string";
qx.Bootstrap.define(d,{statics:{__iF:{"[object String]":f,"[object Array]":i,"[object Object]":e,"[object RegExp]":g,"[object Number]":j,"[object Boolean]":l,"[object Date]":h,"[object Function]":m,"[object Error]":k},getClass:function(o){var p=Object.prototype.toString.call(o);
return (this.__iF[p]||p.slice(8,-1));
},isString:function(t){return (t!==null&&(typeof t===c||this.getClass(t)==f||t instanceof String||(!!t&&!!t.$$isString)));
},isArray:function(r){return (r!==null&&(r instanceof Array||(r&&qx.Class.hasInterface(r.constructor,qx.data.IListData))||this.getClass(r)==i||(!!r&&!!r.$$isArray)));
},isObject:function(s){return (s!==undefined&&s!==null&&this.getClass(s)==e);
},isRegExp:function(a){return this.getClass(a)==g;
},isNumber:function(q){return (q!==null&&(this.getClass(q)==j||q instanceof Number));
},isBoolean:function(b){return (b!==null&&(this.getClass(b)==l||b instanceof Boolean));
},isDate:function(n){return (n!==null&&(this.getClass(n)==h||n instanceof Date));
},isError:function(v){return (v!==null&&(this.getClass(v)==k||v instanceof Error));
},isFunction:function(u){return this.getClass(u)==m;
}}});
})();
(function(){var m="qx.core.Aspect",l="before",k="*",j="static";
qx.Bootstrap.define(m,{statics:{__iJ:[],wrap:function(a,b,c){var h=[];
var d=[];
var g=this.__iJ;
var f;

for(var i=0;i<g.length;i++){f=g[i];

if((f.type==null||c==f.type||f.type==k)&&(f.name==null||a.match(f.name))){f.pos==-1?h.push(f.fcn):d.push(f.fcn);
}}
if(h.length===0&&d.length===0){return b;
}var e=function(){for(var i=0;i<h.length;i++){h[i].call(this,a,b,c,arguments);
}var n=b.apply(this,arguments);

for(var i=0;i<d.length;i++){d[i].call(this,a,b,c,arguments,n);
}return n;
};

if(c!==j){e.self=b.self;
e.base=b.base;
}b.wrapper=e;
e.original=b;
return e;
},addAdvice:function(o,p,q,name){this.__iJ.push({fcn:o,pos:p===l?-1:1,type:q,name:name});
}}});
})();
(function(){var ba="qx.aspects",Y="on",X=".",W="static",V="constructor",U="[Class ",T="]",S="toString",R="member",Q="$$init_",K=".prototype",P="destructor",N="extend",J="destruct",I="Class",M="off",L="qx.Class",O="singleton",H="qx.event.type.Data";
qx.Bootstrap.define(L,{statics:{define:function(name,p){if(!p){var p={};
}if(p.include&&!(p.include instanceof Array)){p.include=[p.include];
}if(p.implement&&!(p.implement instanceof Array)){p.implement=[p.implement];
}if(!p.hasOwnProperty(N)&&!p.type){p.type=W;
}{};
var r=this.__bt(name,p.type,p.extend,p.statics,p.construct,p.destruct);
if(p.extend){if(p.properties){this.__bv(r,p.properties,true);
}if(p.members){this.__bx(r,p.members,true,true,false);
}if(p.events){this.__bu(r,p.events,true);
}if(p.include){for(var i=0,l=p.include.length;i<l;i++){this.__bA(r,p.include[i],false);
}}}if(p.settings){for(var q in p.settings){qx.core.Setting.define(q,p.settings[q]);
}}if(p.variants){for(var q in p.variants){qx.core.Variant.define(q,p.variants[q].allowedValues,p.variants[q].defaultValue);
}}if(p.implement){for(var i=0,l=p.implement.length;i<l;i++){this.__bz(r,p.implement[i]);
}}{};
if(p.defer){p.defer.self=r;
p.defer(r,r.prototype,{add:function(name,j){var k={};
k[name]=j;
qx.Class.__bv(r,k,true);
}});
}return r;
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},getByName:function(name){return this.$$registry[name];
},include:function(bo,bp){{};
qx.Class.__bA(bo,bp,false);
},patch:function(bH,bI){{};
qx.Class.__bA(bH,bI,true);
},isSubClassOf:function(bq,br){if(!bq){return false;
}
if(bq==br){return true;
}
if(bq.prototype instanceof br){return true;
}return false;
},getPropertyDefinition:function(bg,name){while(bg){if(bg.$$properties&&bg.$$properties[name]){return bg.$$properties[name];
}bg=bg.superclass;
}return null;
},getProperties:function(bh){var bi=[];

while(bh){if(bh.$$properties){bi.push.apply(bi,qx.lang.Object.getKeys(bh.$$properties));
}bh=bh.superclass;
}return bi;
},getByProperty:function(s,name){while(s){if(s.$$properties&&s.$$properties[name]){return s;
}s=s.superclass;
}return null;
},hasProperty:function(bD,name){return !!this.getPropertyDefinition(bD,name);
},getEventType:function(A,name){var A=A.constructor;

while(A.superclass){if(A.$$events&&A.$$events[name]!==undefined){return A.$$events[name];
}A=A.superclass;
}return null;
},supportsEvent:function(bG,name){return !!this.getEventType(bG,name);
},hasOwnMixin:function(bB,bC){return bB.$$includes&&bB.$$includes.indexOf(bC)!==-1;
},getByMixin:function(bb,bc){var bd,i,l;

while(bb){if(bb.$$includes){bd=bb.$$flatIncludes;

for(i=0,l=bd.length;i<l;i++){if(bd[i]===bc){return bb;
}}}bb=bb.superclass;
}return null;
},getMixins:function(bE){var bF=[];

while(bE){if(bE.$$includes){bF.push.apply(bF,bE.$$flatIncludes);
}bE=bE.superclass;
}return bF;
},hasMixin:function(be,bf){return !!this.getByMixin(be,bf);
},hasOwnInterface:function(g,h){return g.$$implements&&g.$$implements.indexOf(h)!==-1;
},getByInterface:function(bP,bQ){var bR,i,l;

while(bP){if(bP.$$implements){bR=bP.$$flatImplements;

for(i=0,l=bR.length;i<l;i++){if(bR[i]===bQ){return bP;
}}}bP=bP.superclass;
}return null;
},getInterfaces:function(B){var C=[];

while(B){if(B.$$implements){C.push.apply(C,B.$$flatImplements);
}B=B.superclass;
}return C;
},hasInterface:function(F,G){return !!this.getByInterface(F,G);
},implementsInterface:function(bM,bN){var bO=bM.constructor;

if(this.hasInterface(bO,bN)){return true;
}
try{qx.Interface.assertObject(bM,bN);
return true;
}catch(bA){}
try{qx.Interface.assert(bO,bN,false);
return true;
}catch(bS){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return U+this.classname+T;
},$$registry:qx.Bootstrap.$$registry,__bp:null,__bq:null,__br:function(){},__bs:function(){},__bt:function(name,bW,bX,bY,ca,cb){var cg;

if(!bX&&qx.core.Variant.isSet(ba,M)){cg=bY||{};
qx.Bootstrap.setDisplayNames(cg,name);
}else{cg={};

if(bX){if(!ca){ca=this.__bB();
}cg=this.__bD(ca,name,bW);
qx.Bootstrap.setDisplayName(ca,name,V);
}if(bY){qx.Bootstrap.setDisplayNames(bY,name);
var ch;

for(var i=0,a=qx.lang.Object.getKeys(bY),l=a.length;i<l;i++){ch=a[i];
var cd=bY[ch];

if(qx.core.Variant.isSet(ba,Y)){if(cd instanceof Function){cd=qx.core.Aspect.wrap(name+X+ch,cd,W);
}cg[ch]=cd;
}else{cg[ch]=cd;
}}}}var cf=qx.Bootstrap.createNamespace(name,cg,false);
cg.name=cg.classname=name;
cg.basename=cf;
cg.$$type=I;

if(bW){cg.$$classtype=bW;
}if(!cg.hasOwnProperty(S)){cg.toString=this.genericToString;
}
if(bX){var ci=bX.prototype;
var cc=this.__bC();
cc.prototype=ci;
var ce=new cc;
cg.prototype=ce;
ce.name=ce.classname=name;
ce.basename=cf;
ca.base=cg.superclass=bX;
ca.self=cg.constructor=ce.constructor=cg;
if(cb){if(qx.core.Variant.isSet(ba,Y)){cb=qx.core.Aspect.wrap(name,cb,P);
}cg.$$destructor=cb;
qx.Bootstrap.setDisplayName(cb,name,J);
}}this.$$registry[name]=cg;
return cg;
},__bu:function(cj,ck,cl){var cm,cm;
{};

if(cj.$$events){for(var cm in ck){cj.$$events[cm]=ck[cm];
}}else{cj.$$events=ck;
}},__bv:function(b,c,d){var f;

if(d===undefined){d=false;
}var e=!!b.$$propertiesAttached;

for(var name in c){f=c[name];
{};
f.name=name;
if(!f.refine){if(b.$$properties===undefined){b.$$properties={};
}b.$$properties[name]=f;
}if(f.init!==undefined){b.prototype[Q+name]=f.init;
}if(f.event!==undefined){var event={};
event[f.event]=H;
this.__bu(b,event,d);
}if(f.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(e){qx.core.Property.attachMethods(b,name,f);
}}},__bw:null,__bx:function(bs,bt,bu,bv,bw){var bx=bs.prototype;
var bz,by;
qx.Bootstrap.setDisplayNames(bt,bs.classname+K);

for(var i=0,a=qx.lang.Object.getKeys(bt),l=a.length;i<l;i++){bz=a[i];
by=bt[bz];
{};
if(bv!==false&&by instanceof Function&&by.$$type==null){if(bw==true){by=this.__by(by,bx[bz]);
}else{if(bx[bz]){by.base=bx[bz];
}by.self=bs;
}
if(qx.core.Variant.isSet(ba,Y)){by=qx.core.Aspect.wrap(bs.classname+X+bz,by,R);
}}bx[bz]=by;
}},__by:function(y,z){if(z){return function(){var E=y.base;
y.base=z;
var D=y.apply(this,arguments);
y.base=E;
return D;
};
}else{return y;
}},__bz:function(bJ,bK){{};
var bL=qx.Interface.flatten([bK]);

if(bJ.$$implements){bJ.$$implements.push(bK);
bJ.$$flatImplements.push.apply(bJ.$$flatImplements,bL);
}else{bJ.$$implements=[bK];
bJ.$$flatImplements=bL;
}},__bA:function(t,u,v){{};

if(this.hasMixin(t,u)){return;
}var x=qx.Mixin.flatten([u]);
var w;

for(var i=0,l=x.length;i<l;i++){w=x[i];
if(w.$$events){this.__bu(t,w.$$events,v);
}if(w.$$properties){this.__bv(t,w.$$properties,v);
}if(w.$$members){this.__bx(t,w.$$members,v,v,v);
}}if(t.$$includes){t.$$includes.push(u);
t.$$flatIncludes.push.apply(t.$$flatIncludes,x);
}else{t.$$includes=[u];
t.$$flatIncludes=x;
}},__bB:function(){function bj(){arguments.callee.base.apply(this,arguments);
}return bj;
},__bC:function(){return function(){};
},__bD:function(bk,name,bl){var bn=function(){var bV=arguments.callee.constructor;
{};
if(!bV.$$propertiesAttached){qx.core.Property.attach(bV);
}var bU=bV.$$original.apply(this,arguments);
if(bV.$$includes){var bT=bV.$$flatIncludes;

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){bT[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return bU;
};

if(qx.core.Variant.isSet(ba,Y)){var bm=qx.core.Aspect.wrap(name,bn,V);
bn.$$original=bk;
bn.constructor=bm;
bn=bm;
}if(bl===O){bn.getInstance=this.getInstance;
}bn.$$original=bk;
bk.wrapper=bn;
return bn;
}},defer:function(m){if(qx.core.Variant.isSet(ba,Y)){for(var n in qx.Bootstrap.$$registry){var m=qx.Bootstrap.$$registry[n];

for(var o in m){if(m[o] instanceof Function){m[o]=qx.core.Aspect.wrap(n+X+o,m[o],W);
}}}}}});
})();
(function(){var F="other",E="widgets",D="fonts",C="appearances",B="qx.Theme",A="]",z="[Theme ",y="colors",x="decorations",w="Theme",t="meta",v="borders",u="icons";
qx.Class.define(B,{statics:{define:function(name,J){if(!J){var J={};
}J.include=this.__ou(J.include);
J.patch=this.__ou(J.patch);
{};
var K={$$type:w,name:name,title:J.title,toString:this.genericToString};
if(J.extend){K.supertheme=J.extend;
}K.basename=qx.Bootstrap.createNamespace(name,K);
this.__ox(K,J);
this.__ov(K,J);
this.$$registry[name]=K;
for(var i=0,a=J.include,l=a.length;i<l;i++){this.include(K,a[i]);
}
for(var i=0,a=J.patch,l=a.length;i<l;i++){this.patch(K,a[i]);
}},__ou:function(G){if(!G){return [];
}
if(qx.lang.Type.isArray(G)){return G;
}else{return [G];
}},__ov:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.lang.Object.mergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},genericToString:function(){return z+this.name+A;
},__ow:function(H){for(var i=0,I=this.__oy,l=I.length;i<l;i++){if(H[I[i]]){return I[i];
}}},__ox:function(h,j){var n=this.__ow(j);
if(j.extend&&!n){n=j.extend.type;
}h.type=n||F;
if(!n){return;
}var p=function(){};
if(j.extend){p.prototype=new j.extend.$$clazz;
}var o=p.prototype;
var m=j[n];
for(var k in m){o[k]=m[k];
if(o[k].base){{};
o[k].base=j.extend;
}}h.$$clazz=p;
h[n]=new p;
},$$registry:{},__oy:[y,v,x,D,u,E,C,t],__oz:null,__oA:null,__oB:function(){},patch:function(b,c){var e=this.__ow(c);

if(e!==this.__ow(b)){throw new Error("The mixins '"+b.name+"' are not compatible '"+c.name+"'!");
}var d=c[e];
var f=b.$$clazz.prototype;

for(var g in d){f[g]=d[g];
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
(function(){var cT=';',cS='computed=this.',cR='=value;',cQ='this.',cP="set",cO="setThemed",cN="setRuntime",cM="init",cL='if(this.',cK='delete this.',bU='!==undefined)',bT='}',bS="resetThemed",bR='else if(this.',bQ="string",bP='return this.',bO="reset",bN="boolean",bM="resetRuntime",bL='!==undefined){',db="refresh",dc='=true;',cY="",da="this.",cW='old=this.',cX="();",cU='else ',cV='if(old===undefined)old=this.',dd='old=computed=this.',de="return this.",ct="get",cs='(value);',cv=";",cu="(a[",cx='if(old===computed)return value;',cw='if(old===undefined)old=null;',cz=' of an instance of ',cy=' is not (yet) ready!");',cr="]);",cq='!==inherit){',C='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',D='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',E='value !== null && value.nodeType === 9 && value.documentElement',F='===value)return value;',G='value !== null && value.$$type === "Mixin"',H='return init;',I='var init=this.',J='value !== null && value.nodeType === 1 && value.attributes',K="Error in property ",L='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',dr="property",dq='.validate.call(this, value);',dp='qx.core.Assert.assertInstance(value, Date, msg) || true',dn='else{',dv=" in method ",du='qx.core.Assert.assertInstance(value, Error, msg) || true',dt='=computed;',ds='Undefined value is not allowed!',dx='(backup);',dw='if(computed===inherit){',bl="inherit",bm='Is invalid!',bj='if(value===undefined)prop.error(this,2,"',bk='var computed, old=this.',bp='else if(computed===undefined)',bq="': ",bn=" of class ",bo='value !== null && value.nodeType !== undefined',bh='===undefined)return;',bi='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',T="')){",S='qx.core.Assert.assertPositiveInteger(value, msg) || true',V='else this.',U='value=this.',P='","',O='if(init==qx.core.Property.$$inherit)init=null;',R='value !== null && value.$$type === "Interface"',Q='var inherit=prop.$$inherit;',N="', qx.event.type.Data, [computed, old]",M="$$useinit_",bv='computed=undefined;delete this.',bw='",value);',bx='computed=value;',by=".",br="$$runtime_",bs='Requires exactly one argument!',bt=';}',bu="$$user_",bz='){',bA='qx.core.Assert.assertArray(value, msg) || true',be='if(computed===undefined||computed===inherit){',bd='qx.core.Assert.assertPositiveNumber(value, msg) || true',bc=".prototype",bb="Boolean",ba=")}",Y='(computed, old, "',X='return value;',W='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bg='}else{',bf="if(reg.hasListener(this, '",bB='Does not allow any arguments!',bC=')a[i].',bD="()",bE="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bF='.$$properties.',bG='value !== null && value.$$type === "Theme"',bH="var reg=qx.event.Registration;",bI="())",bJ='return null;',bK='qx.core.Assert.assertObject(value, msg) || true',bY='");',bX='qx.core.Assert.assertString(value, msg) || true',bW='var pa=this.getLayoutParent();if(pa)computed=pa.',bV='value !== null && value.$$type === "Class"',cd='qx.core.Assert.assertFunction(value, msg) || true',cc='!==undefined&&',cb='var computed, old;',ca='var backup=computed;',cf="on",ce="object",cm="$$init_",cn="$$theme_",ck='if(computed===undefined)computed=null;',cl='qx.core.Assert.assertMap(value, msg) || true',ci="qx.aspects",cj='qx.core.Assert.assertNumber(value, msg) || true',cg='if((computed===undefined||computed===inherit)&&',ch="reg.fireEvent(this, '",co='Null value is not allowed!',cp='qx.core.Assert.assertInteger(value, msg) || true',cD="value",cC="shorthand",cF='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cE='value !== null && value.type !== undefined',cH='value !== null && value.document',cG='throw new Error("Property ',cJ="(!this.",cI='qx.core.Assert.assertBoolean(value, msg) || true',cB='if(a[i].',cA="toggle",dj="$$inherit_",dk='var prop=qx.core.Property;',dl=" with incoming value '",dm="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",df='if(computed===undefined||computed==inherit)computed=null;',dg="qx.core.Property",dh="is",di='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(dg,{statics:{__jP:{"Boolean":cI,"String":bX,"Number":cj,"Integer":cp,"PositiveNumber":bd,"PositiveInteger":S,"Error":du,"RegExp":cF,"Object":bK,"Array":bA,"Map":cl,"Function":cd,"Date":dp,"Node":bo,"Element":J,"Document":E,"Window":cH,"Event":cE,"Class":bV,"Mixin":G,"Interface":R,"Theme":bG,"Color":C,"Decorator":bi,"Font":D},__jQ:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:bl,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bQ,dispose:bN,inheritable:bN,nullable:bN,themeable:bN,refine:bN,init:null,apply:bQ,event:bQ,check:null,transform:bQ,deferredInit:bN,validate:null},$$allowedGroupKeys:{name:bQ,group:ce,mode:bQ,themeable:bN},$$inheritable:{},refresh:function(h){var parent=h.getLayoutParent();

if(parent){var m=h.constructor;
var o=this.$$store.inherit;
var n=this.$$store.init;
var k=this.$$method.refresh;
var p;
var j;
{};

while(m){p=m.$$properties;

if(p){for(var name in this.$$inheritable){if(p[name]&&h[k[name]]){j=parent[o[name]];

if(j===undefined){j=parent[n[name]];
}{};
h[k[name]](j);
}}}m=m.superclass;
}}},attach:function(eG){var eH=eG.$$properties;

if(eH){for(var name in eH){this.attachMethods(eG,name,eH[name]);
}}eG.$$propertiesAttached=true;
},attachMethods:function(el,name,em){em.group?this.__jR(el,em,name):this.__jS(el,em,name);
},__jR:function(dJ,dK,name){var dR=qx.lang.String.firstUp(name);
var dQ=dJ.prototype;
var dS=dK.themeable===true;
{};
var dT=[];
var dN=[];

if(dS){var dL=[];
var dP=[];
}var dO=bE;
dT.push(dO);

if(dS){dL.push(dO);
}
if(dK.mode==cC){var dM=dm;
dT.push(dM);

if(dS){dL.push(dM);
}}
for(var i=0,a=dK.group,l=a.length;i<l;i++){{};
dT.push(da,this.$$method.set[a[i]],cu,i,cr);
dN.push(da,this.$$method.reset[a[i]],cX);

if(dS){{};
dL.push(da,this.$$method.setThemed[a[i]],cu,i,cr);
dP.push(da,this.$$method.resetThemed[a[i]],cX);
}}this.$$method.set[name]=cP+dR;
dQ[this.$$method.set[name]]=new Function(dT.join(cY));
this.$$method.reset[name]=bO+dR;
dQ[this.$$method.reset[name]]=new Function(dN.join(cY));

if(dS){this.$$method.setThemed[name]=cO+dR;
dQ[this.$$method.setThemed[name]]=new Function(dL.join(cY));
this.$$method.resetThemed[name]=bS+dR;
dQ[this.$$method.resetThemed[name]]=new Function(dP.join(cY));
}},__jS:function(dX,dY,name){var eb=qx.lang.String.firstUp(name);
var ed=dX.prototype;
{};
if(dY.dispose===undefined&&typeof dY.check===bQ){dY.dispose=this.__jQ[dY.check]||qx.Class.isDefined(dY.check)||qx.Interface.isDefined(dY.check);
}var ec=this.$$method;
var ea=this.$$store;
ea.runtime[name]=br+name;
ea.user[name]=bu+name;
ea.theme[name]=cn+name;
ea.init[name]=cm+name;
ea.inherit[name]=dj+name;
ea.useinit[name]=M+name;
ec.get[name]=ct+eb;
ed[ec.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dX,name,ct);
};
ec.set[name]=cP+eb;
ed[ec.set[name]]=function(dy){return qx.core.Property.executeOptimizedSetter(this,dX,name,cP,arguments);
};
ec.reset[name]=bO+eb;
ed[ec.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bO);
};

if(dY.inheritable||dY.apply||dY.event||dY.deferredInit){ec.init[name]=cM+eb;
ed[ec.init[name]]=function(B){return qx.core.Property.executeOptimizedSetter(this,dX,name,cM,arguments);
};
}
if(dY.inheritable){ec.refresh[name]=db+eb;
ed[ec.refresh[name]]=function(eN){return qx.core.Property.executeOptimizedSetter(this,dX,name,db,arguments);
};
}ec.setRuntime[name]=cN+eb;
ed[ec.setRuntime[name]]=function(eO){return qx.core.Property.executeOptimizedSetter(this,dX,name,cN,arguments);
};
ec.resetRuntime[name]=bM+eb;
ed[ec.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bM);
};

if(dY.themeable){ec.setThemed[name]=cO+eb;
ed[ec.setThemed[name]]=function(et){return qx.core.Property.executeOptimizedSetter(this,dX,name,cO,arguments);
};
ec.resetThemed[name]=bS+eb;
ed[ec.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dX,name,bS);
};
}
if(dY.check===bb){ed[cA+eb]=new Function(de+ec.set[name]+cJ+ec.get[name]+bI);
ed[dh+eb]=new Function(de+ec.get[name]+bD);
}},__jT:{0:di,1:bs,2:ds,3:bB,4:co,5:bm},error:function(eu,ev,ew,ex,ey){var ez=eu.constructor.classname;
var eA=K+ew+bn+ez+dv+this.$$method[ex][ew]+dl+ey+bq;
throw new Error(eA+(this.__jT[ev]||"Unknown reason: "+ev));
},__jU:function(en,eo,name,ep,eq,er){var es=this.$$method[ep][name];
{eo[es]=new Function(cD,eq.join(cY));
};
if(qx.core.Variant.isSet(ci,cf)){eo[es]=qx.core.Aspect.wrap(en.classname+by+es,eo[es],dr);
}qx.Bootstrap.setDisplayName(eo[es],en.classname+bc,es);
if(er===undefined){return en[es]();
}else{return en[es](er[0]);
}},executeOptimizedGetter:function(q,r,name,s){var u=r.$$properties[name];
var w=r.prototype;
var t=[];
var v=this.$$store;
t.push(cL,v.runtime[name],bU);
t.push(bP,v.runtime[name],cT);

if(u.inheritable){t.push(bR,v.inherit[name],bU);
t.push(bP,v.inherit[name],cT);
t.push(cU);
}t.push(cL,v.user[name],bU);
t.push(bP,v.user[name],cT);

if(u.themeable){t.push(bR,v.theme[name],bU);
t.push(bP,v.theme[name],cT);
}
if(u.deferredInit&&u.init===undefined){t.push(bR,v.init[name],bU);
t.push(bP,v.init[name],cT);
}t.push(cU);

if(u.init!==undefined){if(u.inheritable){t.push(I,v.init[name],cT);

if(u.nullable){t.push(O);
}else if(u.init!==undefined){t.push(bP,v.init[name],cT);
}else{t.push(W,name,cz,r.classname,cy);
}t.push(H);
}else{t.push(bP,v.init[name],cT);
}}else if(u.inheritable||u.nullable){t.push(bJ);
}else{t.push(cG,name,cz,r.classname,cy);
}return this.__jU(q,w,name,s,t);
},executeOptimizedSetter:function(dz,dA,name,dB,dC){var dH=dA.$$properties[name];
var dG=dA.prototype;
var dE=[];
var dD=dB===cP||dB===cO||dB===cN||(dB===cM&&dH.init===undefined);
var dF=dH.apply||dH.event||dH.inheritable;
var dI=this.__jV(dB,name);
this.__jW(dE,dH,name,dB,dD);

if(dD){this.__jX(dE,dA,dH,name);
}
if(dF){this.__jY(dE,dD,dI,dB);
}
if(dH.inheritable){dE.push(Q);
}{};

if(!dF){this.__kb(dE,name,dB,dD);
}else{this.__kc(dE,dH,name,dB,dD);
}
if(dH.inheritable){this.__kd(dE,dH,name,dB);
}else if(dF){this.__ke(dE,dH,name,dB);
}
if(dF){this.__kf(dE,dH,name);
if(dH.inheritable&&dG._getChildren){this.__kg(dE,name);
}}if(dD){dE.push(X);
}return this.__jU(dz,dG,name,dB,dE,dC);
},__jV:function(eL,name){if(eL===cN||eL===bM){var eM=this.$$store.runtime[name];
}else if(eL===cO||eL===bS){eM=this.$$store.theme[name];
}else if(eL===cM){eM=this.$$store.init[name];
}else{eM=this.$$store.user[name];
}return eM;
},__jW:function(b,c,name,d,e){{if(!c.nullable||c.check||c.inheritable){b.push(dk);
}if(d===cP){b.push(bj,name,P,d,bw);
}};
},__jX:function(ef,eg,eh,name){if(eh.transform){ef.push(U,eh.transform,cs);
}if(eh.validate){if(typeof eh.validate===bQ){ef.push(cQ,eh.validate,cs);
}else if(eh.validate instanceof Function){ef.push(eg.classname,bF,name);
ef.push(dq);
}}},__jY:function(eB,eC,eD,eE){var eF=(eE===bO||eE===bS||eE===bM);

if(eC){eB.push(cL,eD,F);
}else if(eF){eB.push(cL,eD,bh);
}},__ka:undefined,__kb:function(ei,name,ej,ek){if(ej===cN){ei.push(cQ,this.$$store.runtime[name],cR);
}else if(ej===bM){ei.push(cL,this.$$store.runtime[name],bU);
ei.push(cK,this.$$store.runtime[name],cT);
}else if(ej===cP){ei.push(cQ,this.$$store.user[name],cR);
}else if(ej===bO){ei.push(cL,this.$$store.user[name],bU);
ei.push(cK,this.$$store.user[name],cT);
}else if(ej===cO){ei.push(cQ,this.$$store.theme[name],cR);
}else if(ej===bS){ei.push(cL,this.$$store.theme[name],bU);
ei.push(cK,this.$$store.theme[name],cT);
}else if(ej===cM&&ek){ei.push(cQ,this.$$store.init[name],cR);
}},__kc:function(x,y,name,z,A){if(y.inheritable){x.push(bk,this.$$store.inherit[name],cT);
}else{x.push(cb);
}x.push(cL,this.$$store.runtime[name],bL);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===bM){x.push(cK,this.$$store.runtime[name],cT);
x.push(cL,this.$$store.user[name],bU);
x.push(cS,this.$$store.user[name],cT);
x.push(bR,this.$$store.theme[name],bU);
x.push(cS,this.$$store.theme[name],cT);
x.push(bR,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else{x.push(dd,this.$$store.runtime[name],cT);
if(z===cP){x.push(cQ,this.$$store.user[name],cR);
}else if(z===bO){x.push(cK,this.$$store.user[name],cT);
}else if(z===cO){x.push(cQ,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
}else if(z===cM&&A){x.push(cQ,this.$$store.init[name],cR);
}}x.push(bT);
x.push(bR,this.$$store.user[name],bL);

if(z===cP){if(!y.inheritable){x.push(cW,this.$$store.user[name],cT);
}x.push(cS,this.$$store.user[name],cR);
}else if(z===bO){if(!y.inheritable){x.push(cW,this.$$store.user[name],cT);
}x.push(cK,this.$$store.user[name],cT);
x.push(cL,this.$$store.runtime[name],bU);
x.push(cS,this.$$store.runtime[name],cT);
x.push(cL,this.$$store.theme[name],bU);
x.push(cS,this.$$store.theme[name],cT);
x.push(bR,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else{if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(y.inheritable){x.push(cS,this.$$store.user[name],cT);
}else{x.push(dd,this.$$store.user[name],cT);
}if(z===cO){x.push(cQ,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
}else if(z===cM&&A){x.push(cQ,this.$$store.init[name],cR);
}}x.push(bT);
if(y.themeable){x.push(bR,this.$$store.theme[name],bL);

if(!y.inheritable){x.push(cW,this.$$store.theme[name],cT);
}
if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===bS){x.push(cK,this.$$store.theme[name],cT);
x.push(cL,this.$$store.init[name],bL);
x.push(cS,this.$$store.init[name],cT);
x.push(cQ,this.$$store.useinit[name],dc);
x.push(bT);
}else if(z===cM){if(A){x.push(cQ,this.$$store.init[name],cR);
}x.push(cS,this.$$store.theme[name],cT);
}else if(z===db){x.push(cS,this.$$store.theme[name],cT);
}x.push(bT);
}x.push(bR,this.$$store.useinit[name],bz);

if(!y.inheritable){x.push(cW,this.$$store.init[name],cT);
}
if(z===cM){if(A){x.push(cS,this.$$store.init[name],cR);
}else{x.push(cS,this.$$store.init[name],cT);
}}else if(z===cP||z===cN||z===cO||z===db){x.push(cK,this.$$store.useinit[name],cT);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===db){x.push(cS,this.$$store.init[name],cT);
}}x.push(bT);
if(z===cP||z===cN||z===cO||z===cM){x.push(dn);

if(z===cN){x.push(cS,this.$$store.runtime[name],cR);
}else if(z===cP){x.push(cS,this.$$store.user[name],cR);
}else if(z===cO){x.push(cS,this.$$store.theme[name],cR);
}else if(z===cM){if(A){x.push(cS,this.$$store.init[name],cR);
}else{x.push(cS,this.$$store.init[name],cT);
}x.push(cQ,this.$$store.useinit[name],dc);
}x.push(bT);
}},__kd:function(eI,eJ,name,eK){eI.push(be);

if(eK===db){eI.push(bx);
}else{eI.push(bW,this.$$store.inherit[name],cT);
}eI.push(cg);
eI.push(cQ,this.$$store.init[name],cc);
eI.push(cQ,this.$$store.init[name],cq);
eI.push(cS,this.$$store.init[name],cT);
eI.push(cQ,this.$$store.useinit[name],dc);
eI.push(bg);
eI.push(cK,this.$$store.useinit[name],bt);
eI.push(bT);
eI.push(cx);
eI.push(dw);
eI.push(bv,this.$$store.inherit[name],cT);
eI.push(bT);
eI.push(bp);
eI.push(cK,this.$$store.inherit[name],cT);
eI.push(V,this.$$store.inherit[name],dt);
eI.push(ca);
if(eJ.init!==undefined&&eK!==cM){eI.push(cV,this.$$store.init[name],cv);
}else{eI.push(cw);
}eI.push(df);
},__ke:function(dU,dV,name,dW){if(dW!==cP&&dW!==cN&&dW!==cO){dU.push(ck);
}dU.push(cx);
if(dV.init!==undefined&&dW!==cM){dU.push(cV,this.$$store.init[name],cv);
}else{dU.push(cw);
}},__kf:function(f,g,name){if(g.apply){f.push(cQ,g.apply,Y,name,bY);
}if(g.event){f.push(bH,bf,g.event,T,ch,g.event,N,ba);
}},__kg:function(ee,name){ee.push(L);
ee.push(cB,this.$$method.refresh[name],bC,this.$$method.refresh[name],dx);
ee.push(bT);
}}});
})();
(function(){var f="$$hash",e="qx.core.ObjectRegistry";
qx.Bootstrap.define(e,{statics:{inShutDown:false,__gu:{},__gv:0,__gw:[],register:function(g){var k=this.__gu;

if(!k){return;
}var j=g.$$hash;

if(j==null){var h=this.__gw;

if(h.length>0){j=h.pop();
}else{j=(this.__gv++).toString(36);
}g.$$hash=j;
}{};
k[j]=g;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__gu;

if(p&&p[o]){delete p[o];
this.__gw.push(o);
}try{delete n.$$hash;
}catch(r){if(n.removeAttribute){n.removeAttribute(f);
}}},toHashCode:function(s){{};
var u=s.$$hash;

if(u!=null){return u;
}var t=this.__gw;

if(t.length>0){u=t.pop();
}else{u=(this.__gv++).toString(36);
}return s.$$hash=u;
},clearHashCode:function(c){{};
var d=c.$$hash;

if(d!=null){this.__gw.push(d);
try{delete c.$$hash;
}catch(m){if(c.removeAttribute){c.removeAttribute(f);
}}}},fromHashCode:function(q){return this.__gu[q]||null;
},shutdown:function(){this.inShutDown=true;
var w=this.__gu;
var y=[];

for(var x in w){y.push(x);
}y.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var v,i=0,l=y.length;

while(true){try{for(;i<l;i++){x=y[i];
v=w[x];

if(v&&v.dispose){v.dispose();
}}}catch(z){qx.log.Logger.error(this,"Could not dispose object "+v.toString()+": "+z);

if(i!==l){i++;
continue;
}}break;
}qx.log.Logger.debug(this,"Disposed "+l+" objects");
delete this.__gu;
},getRegistry:function(){return this.__gu;
}}});
})();
(function(){var o="qx.Mixin",n=".prototype",m="constructor",k="[Mixin ",j="]",h="destruct",g="Mixin";
qx.Bootstrap.define(o,{statics:{define:function(name,a){if(a){if(a.include&&!(a.include instanceof Array)){a.include=[a.include];
}{};
var c=a.statics?a.statics:{};
qx.Bootstrap.setDisplayNames(c,name);

for(var b in c){if(c[b] instanceof Function){c[b].$$mixin=c;
}}if(a.construct){c.$$constructor=a.construct;
qx.Bootstrap.setDisplayName(a.construct,name,m);
}
if(a.include){c.$$includes=a.include;
}
if(a.properties){c.$$properties=a.properties;
}
if(a.members){c.$$members=a.members;
qx.Bootstrap.setDisplayNames(a.members,name+n);
}
for(var b in c.$$members){if(c.$$members[b] instanceof Function){c.$$members[b].$$mixin=c;
}}
if(a.events){c.$$events=a.events;
}
if(a.destruct){c.$$destructor=a.destruct;
qx.Bootstrap.setDisplayName(a.destruct,name,h);
}}else{var c={};
}c.$$type=g;
c.name=name;
c.toString=this.genericToString;
c.basename=qx.Bootstrap.createNamespace(name,c);
this.$$registry[name]=c;
return c;
},checkCompatibility:function(p){var s=this.flatten(p);
var t=s.length;

if(t<2){return true;
}var w={};
var v={};
var u={};
var r;

for(var i=0;i<t;i++){r=s[i];

for(var q in r.events){if(u[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+u[q]+'" in member "'+q+'"!');
}u[q]=r.name;
}
for(var q in r.properties){if(w[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+w[q]+'" in property "'+q+'"!');
}w[q]=r.name;
}
for(var q in r.members){if(v[q]){throw new Error('Conflict between mixin "'+r.name+'" and "'+v[q]+'" in member "'+q+'"!');
}v[q]=r.name;
}}return true;
},isCompatible:function(d,e){var f=qx.Class.getMixins(e);
f.push(d);
return qx.Mixin.checkCompatibility(f);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(x){if(!x){return [];
}var y=x.concat();

for(var i=0,l=x.length;i<l;i++){if(x[i].$$includes){y.push.apply(y,this.flatten(x[i].$$includes));
}}return y;
},genericToString:function(){return k+this.name+j;
},$$registry:{},__dw:null,__dx:function(){}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var p="qx.client",o="on",n="function",m="mousedown",l="qx.bom.Event",k="return;",j="mouseover",i="HTMLEvents";
qx.Bootstrap.define(l,{statics:{addNativeListener:qx.core.Variant.select(p,{"mshtml":function(b,c,d){b.attachEvent(o+c,d);
},"default":function(f,g,h){f.addEventListener(g,h,false);
}}),removeNativeListener:qx.core.Variant.select(p,{"mshtml":function(q,r,s){try{q.detachEvent(o+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(A,B,C){A.removeEventListener(B,C,false);
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
}catch(a){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(F){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(x,y){if(document.createEventObject){var z=document.createEventObject();
return x.fireEvent(o+y,z);
}else{var z=document.createEvent(i);
z.initEvent(y,true,true);
return !x.dispatchEvent(z);
}},supportsEvent:qx.core.Variant.select(p,{"webkit":function(D,E){return D.hasOwnProperty(o+E);
},"default":function(t,u){var v=o+u;
var w=(v in t);

if(!w){w=typeof t[v]==n;

if(!w&&t.setAttribute){t.setAttribute(v,k);
w=typeof t[v]==n;
t.removeAttribute(v);
}}return w;
}})}});
})();
(function(){var bh="|bubble",bg="|capture",bf="|",be="_",bd="unload",bc="__er",bb="UNKNOWN_",ba="DOM_",Y="__es",X="c",U="WIN_",W="capture",V="qx.event.Manager",T="QX_";
qx.Bootstrap.define(V,{construct:function(bm,bn){this.__en=bm;
this.__eo=qx.core.ObjectRegistry.toHashCode(bm);
this.__ep=bn;
if(bm.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(bm,bd,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(bm,bd,arguments.callee);
self.dispose();
}));
}this.__eq={};
this.__er={};
this.__es={};
this.__et={};
},statics:{__eu:0,getNextUniqueId:function(){return (this.__eu++).toString(36);
}},members:{__ep:null,__eq:null,__es:null,__ev:null,__er:null,__et:null,__en:null,__eo:null,getWindow:function(){return this.__en;
},getWindowId:function(){return this.__eo;
},getHandler:function(bo){var bp=this.__er[bo.classname];

if(bp){return bp;
}return this.__er[bo.classname]=new bo(this);
},getDispatcher:function(bA){var bB=this.__es[bA.classname];

if(bB){return bB;
}return this.__es[bA.classname]=new bA(this,this.__ep);
},getListeners:function(bG,bH,bI){var bJ=bG.$$hash||qx.core.ObjectRegistry.toHashCode(bG);
var bL=this.__eq[bJ];

if(!bL){return null;
}var bM=bH+(bI?bg:bh);
var bK=bL[bM];
return bK?bK.concat():null;
},serializeListeners:function(bN){var bU=bN.$$hash||qx.core.ObjectRegistry.toHashCode(bN);
var bW=this.__eq[bU];
var bS=[];

if(bW){var bQ,bV,bO,bR,bT;

for(var bP in bW){bQ=bP.indexOf(bf);
bV=bP.substring(0,bQ);
bO=bP.charAt(bQ+1)==X;
bR=bW[bP];

for(var i=0,l=bR.length;i<l;i++){bT=bR[i];
bS.push({self:bT.context,handler:bT.handler,type:bV,capture:bO});
}}}return bS;
},toggleAttachedEvents:function(bX,bY){var ce=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cg=this.__eq[ce];

if(cg){var cb,cf,ca,cc;

for(var cd in cg){cb=cd.indexOf(bf);
cf=cd.substring(0,cb);
ca=cd.charCodeAt(cb+1)===99;
cc=cg[cd];

if(bY){this.__ew(bX,cf,ca);
}else{this.__ex(bX,cf,ca);
}}}},hasListener:function(co,cp,cq){{};
var cr=co.$$hash||qx.core.ObjectRegistry.toHashCode(co);
var ct=this.__eq[cr];

if(!ct){return false;
}var cu=cp+(cq?bg:bh);
var cs=ct[cu];
return cs&&cs.length>0;
},importListeners:function(cv,cw){{};
var cC=cv.$$hash||qx.core.ObjectRegistry.toHashCode(cv);
var cD=this.__eq[cC]={};
var cz=qx.event.Manager;

for(var cx in cw){var cA=cw[cx];
var cB=cA.type+(cA.capture?bg:bh);
var cy=cD[cB];

if(!cy){cy=cD[cB]=[];
this.__ew(cv,cA.type,cA.capture);
}cy.push({handler:cA.listener,context:cA.self,unique:cA.unique||(cz.__eu++).toString(36)});
}},addListener:function(I,J,K,self,L){var P;
{};
var Q=I.$$hash||qx.core.ObjectRegistry.toHashCode(I);
var S=this.__eq[Q];

if(!S){S=this.__eq[Q]={};
}var O=J+(L?bg:bh);
var N=S[O];

if(!N){N=S[O]=[];
}if(N.length===0){this.__ew(I,J,L);
}var R=(qx.event.Manager.__eu++).toString(36);
var M={handler:K,context:self,unique:R};
N.push(M);
return O+bf+R;
},findHandler:function(a,b){var n=false,e=false,o=false;
var m;

if(a.nodeType===1){n=true;
m=ba+a.tagName.toLowerCase()+be+b;
}else if(a==this.__en){e=true;
m=U+b;
}else if(a.classname){o=true;
m=T+a.classname+be+b;
}else{m=bb+a+be+b;
}var g=this.__et;

if(g[m]){return g[m];
}var k=this.__ep.getHandlers();
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
},__ew:function(bC,bD,bE){var bF=this.findHandler(bC,bD);

if(bF){bF.registerEvent(bC,bD,bE);
return;
}{};
},removeListener:function(bq,br,bs,self,bt){var bx;
{};
var by=bq.$$hash||qx.core.ObjectRegistry.toHashCode(bq);
var bz=this.__eq[by];

if(!bz){return false;
}var bu=br+(bt?bg:bh);
var bv=bz[bu];

if(!bv){return false;
}var bw;

for(var i=0,l=bv.length;i<l;i++){bw=bv[i];

if(bw.handler===bs&&bw.context===self){qx.lang.Array.removeAt(bv,i);

if(bv.length==0){this.__ex(bq,br,bt);
}return true;
}}return false;
},removeListenerById:function(w,x){var D;
{};
var B=x.split(bf);
var G=B[0];
var y=B[1].charCodeAt(0)==99;
var F=B[2];
var E=w.$$hash||qx.core.ObjectRegistry.toHashCode(w);
var H=this.__eq[E];

if(!H){return false;
}var C=G+(y?bg:bh);
var A=H[C];

if(!A){return false;
}var z;

for(var i=0,l=A.length;i<l;i++){z=A[i];

if(z.unique===F){qx.lang.Array.removeAt(A,i);

if(A.length==0){this.__ex(w,G,y);
}return true;
}}return false;
},removeAllListeners:function(ch){var cl=ch.$$hash||qx.core.ObjectRegistry.toHashCode(ch);
var cn=this.__eq[cl];

if(!cn){return false;
}var cj,cm,ci;

for(var ck in cn){if(cn[ck].length>0){cj=ck.split(bf);
cm=cj[0];
ci=cj[1]===W;
this.__ex(ch,cm,ci);
}}delete this.__eq[cl];
return true;
},__ex:function(bi,bj,bk){var bl=this.findHandler(bi,bj);

if(bl){bl.unregisterEvent(bi,bj,bk);
return;
}{};
},dispatchEvent:function(p,event){var u;
{};
var v=event.getType();

if(!event.getBubbles()&&!this.hasListener(p,v)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(p);
}var t=this.__ep.getDispatchers();
var s;
var r=false;

for(var i=0,l=t.length;i<l;i++){s=this.getDispatcher(t[i]);
if(s.canDispatchEvent(p,event,v)){s.dispatchEvent(p,event,v);
r=true;
break;
}}
if(!r){qx.log.Logger.error(this,"No dispatcher can handle event of type "+v+" on "+p);
return true;
}var q=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !q;
},dispose:function(){this.__ep.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,bc);
qx.util.DisposeUtil.disposeMap(this,Y);
this.__eq=this.__en=this.__ev=null;
this.__ep=this.__et=null;
}}});
})();
(function(){var k="qx.dom.Node",j="qx.client",h="";
qx.Bootstrap.define(k,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(n){return n.nodeType===
this.DOCUMENT?n:
n.ownerDocument||n.document;
},getWindow:qx.core.Variant.select(j,{"mshtml":function(d){if(d.nodeType==null){return d;
}if(d.nodeType!==this.DOCUMENT){d=d.ownerDocument;
}return d.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(r){return this.getDocument(r).documentElement;
},getBodyElement:function(o){return this.getDocument(o).body;
},isNode:function(e){return !!(e&&e.nodeType!=null);
},isElement:function(c){return !!(c&&c.nodeType===this.ELEMENT);
},isDocument:function(f){return !!(f&&f.nodeType===this.DOCUMENT);
},isText:function(p){return !!(p&&p.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(l,m){if(!m||!l||!l.nodeName){return false;
}return m.toLowerCase()==qx.dom.Node.getName(l);
},getName:function(q){if(!q||!q.nodeName){return null;
}return q.nodeName.toLowerCase();
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
(function(){var C="mshtml",B="qx.client",A="[object Array]",z="qx.lang.Array",y="qx",x="number",w="string";
qx.Bootstrap.define(z,{statics:{toArray:function(R,S){return this.cast(R,Array,S);
},cast:function(h,j,k){if(h.constructor===j){return h;
}
if(qx.Class.hasInterface(h,qx.data.IListData)){var h=h.toArray();
}var m=new j;
if(qx.core.Variant.isSet(B,C)){if(h.item){for(var i=k||0,l=h.length;i<l;i++){m.push(h[i]);
}return m;
}}if(Object.prototype.toString.call(h)===A&&k==null){m.push.apply(m,h);
}else{m.push.apply(m,Array.prototype.slice.call(h,k||0));
}return m;
},fromArguments:function(T,U){return Array.prototype.slice.call(T,U||0);
},fromCollection:function(f){if(qx.core.Variant.isSet(B,C)){if(f.item){var g=[];

for(var i=0,l=f.length;i<l;i++){g[i]=f[i];
}return g;
}}return Array.prototype.slice.call(f,0);
},fromShortHand:function(bb){var bd=bb.length;
var bc=qx.lang.Array.clone(bb);
switch(bd){case 1:bc[1]=bc[2]=bc[3]=bc[0];
break;
case 2:bc[2]=bc[0];
case 3:bc[3]=bc[1];
}return bc;
},clone:function(v){return v.concat();
},insertAt:function(q,r,i){q.splice(i,0,r);
return q;
},insertBefore:function(O,P,Q){var i=O.indexOf(Q);

if(i==-1){O.push(P);
}else{O.splice(i,0,P);
}return O;
},insertAfter:function(E,F,G){var i=E.indexOf(G);

if(i==-1||i==(E.length-1)){E.push(F);
}else{E.splice(i+1,0,F);
}return E;
},removeAt:function(n,i){return n.splice(i,1)[0];
},removeAll:function(V){V.length=0;
return this;
},append:function(t,u){{};
Array.prototype.push.apply(t,u);
return t;
},exclude:function(K,L){{};

for(var i=0,N=L.length,M;i<N;i++){M=K.indexOf(L[i]);

if(M!=-1){K.splice(M,1);
}}return K;
},remove:function(W,X){var i=W.indexOf(X);

if(i!=-1){W.splice(i,1);
return X;
}},contains:function(Y,ba){return Y.indexOf(ba)!==-1;
},equals:function(a,b){var length=a.length;

if(length!==b.length){return false;
}
for(var i=0;i<length;i++){if(a[i]!==b[i]){return false;
}}return true;
},sum:function(o){var p=0;

for(var i=0,l=o.length;i<l;i++){p+=o[i];
}return p;
},max:function(c){{};
var i,e=c.length,d=c[0];

for(i=1;i<e;i++){if(c[i]>d){d=c[i];
}}return d===undefined?null:d;
},min:function(H){{};
var i,J=H.length,I=H[0];

for(i=1;i<J;i++){if(H[i]<I){I=H[i];
}}return I===undefined?null:I;
},unique:function(be){var bo=[],bg={},bj={},bl={};
var bk,bf=0;
var bp=y+qx.lang.Date.now();
var bh=false,bn=false,bq=false;
for(var i=0,bm=be.length;i<bm;i++){bk=be[i];
if(bk===null){if(!bh){bh=true;
bo.push(bk);
}}else if(bk===undefined){}else if(bk===false){if(!bn){bn=true;
bo.push(bk);
}}else if(bk===true){if(!bq){bq=true;
bo.push(bk);
}}else if(typeof bk===w){if(!bg[bk]){bg[bk]=1;
bo.push(bk);
}}else if(typeof bk===x){if(!bj[bk]){bj[bk]=1;
bo.push(bk);
}}else{bi=bk[bp];

if(bi==null){bi=bk[bp]=bf++;
}
if(!bl[bi]){bl[bi]=bk;
bo.push(bk);
}}}for(var bi in bl){try{delete bl[bi][bp];
}catch(D){try{bl[bi][bp]=null;
}catch(s){throw new Error("Cannot clean-up map entry doneObjects["+bi+"]["+bp+"]");
}}}return bo;
}}});
})();
(function(){var q="()",p=".",o=".prototype.",n='anonymous()',m="qx.lang.Function",l=".constructor()";
qx.Bootstrap.define(m,{statics:{getCaller:function(a){return a.caller?a.caller.callee:a.callee.caller;
},getName:function(g){if(g.displayName){return g.displayName;
}
if(g.$$original||g.wrapper||g.classname){return g.classname+l;
}
if(g.$$mixin){for(var i in g.$$mixin.$$members){if(g.$$mixin.$$members[i]==g){return g.$$mixin.name+o+i+q;
}}for(var i in g.$$mixin){if(g.$$mixin[i]==g){return g.$$mixin.name+p+i+q;
}}}
if(g.self){var j=g.self.constructor;

if(j){for(var i in j.prototype){if(j.prototype[i]==g){return j.classname+o+i+q;
}}for(var i in j){if(j[i]==g){return j.classname+p+i+q;
}}}}var h=g.toString().match(/function\s*(\w*)\s*\(.*/);

if(h&&h.length>=1&&h[1]){return h[1]+q;
}return n;
},globalEval:function(x){if(window.execScript){return window.execScript(x);
}else{return eval.call(window,x);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(D,E){{};
if(!E){return D;
}if(!(E.self||E.args||E.delay!=null||E.periodical!=null||E.attempt)){return D;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(E.args){G=E.args.concat(G);
}
if(E.delay||E.periodical){var F=qx.event.GlobalError.observeMethod(function(){return D.apply(E.self||this,G);
});

if(E.delay){return window.setTimeout(F,E.delay);
}
if(E.periodical){return window.setInterval(F,E.periodical);
}}else if(E.attempt){var H=false;

try{H=D.apply(E.self||this,G);
}catch(w){}return H;
}else{return D.apply(E.self||this,G);
}};
},bind:function(y,self,z){return this.create(y,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(r,s){return this.create(r,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(A,self,B){if(arguments.length<3){return function(event){return A.call(self||this,event||window.event);
};
}else{var C=qx.lang.Array.fromArguments(arguments,2);
return function(event){var k=[event||window.event];
k.push.apply(k,C);
A.apply(self||this,k);
};
}},attempt:function(e,self,f){return this.create(e,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(b,c,self,d){return this.create(b,{delay:c,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(t,u,self,v){return this.create(t,{periodical:u,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var u="qx.event.Registration";
qx.Bootstrap.define(u,{statics:{__ec:{},getManager:function(z){if(z==null){{};
z=window;
}else if(z.nodeType){z=qx.dom.Node.getWindow(z);
}else if(!qx.dom.Node.isWindow(z)){z=window;
}var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);
var A=this.__ec[B];

if(!A){A=new qx.event.Manager(z,this);
this.__ec[B]=A;
}return A;
},removeManager:function(J){var K=J.getWindowId();
delete this.__ec[K];
},addListener:function(D,E,F,self,G){return this.getManager(D).addListener(D,E,F,self,G);
},removeListener:function(v,w,x,self,y){return this.getManager(v).removeListener(v,w,x,self,y);
},removeListenerById:function(s,t){return this.getManager(s).removeListenerById(s,t);
},removeAllListeners:function(c){return this.getManager(c).removeAllListeners(c);
},hasListener:function(d,e,f){return this.getManager(d).hasListener(d,e,f);
},serializeListeners:function(I){return this.getManager(I).serializeListeners(I);
},createEvent:function(N,O,P){{};
if(O==null){O=qx.event.type.Event;
}var Q=qx.event.Pool.getInstance().getObject(O);

if(!Q){return;
}P?Q.init.apply(Q,P):Q.init();
if(N){Q.setType(N);
}return Q;
},dispatchEvent:function(H,event){return this.getManager(H).dispatchEvent(H,event);
},fireEvent:function(m,n,o,p){var q;
{};
var r=this.createEvent(n,o||null,p);
return this.getManager(m).dispatchEvent(m,r);
},fireNonBubblingEvent:function(g,h,i,j){{};
var k=this.getManager(g);

if(!k.hasListener(g,h,false)){return true;
}var l=this.createEvent(h,i||null,j);
return k.dispatchEvent(g,l);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ed:[],addHandler:function(C){{};
this.__ed.push(C);
this.__ed.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ed;
},__ee:[],addDispatcher:function(L,M){{};
this.__ee.push(L);
this.__ee.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ee;
}}});
})();
(function(){var g="qx.log.appender.RingBuffer";
qx.Bootstrap.define(g,{construct:function(i){this.__jG=[];
this.setMaxMessages(i||50);
},members:{__jH:0,__jG:null,__jI:50,setMaxMessages:function(h){this.__jI=h;
this.clearHistory();
},getMaxMessages:function(){return this.__jI;
},process:function(a){var b=this.getMaxMessages();

if(this.__jG.length<b){this.__jG.push(a);
}else{this.__jG[this.__jH++]=a;

if(this.__jH>=b){this.__jH=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__jG.length){c=this.__jG.length;
}
if(this.__jG.length==this.getMaxMessages()){var e=this.__jH-1;
}else{e=this.__jG.length-1;
}var d=e-c+1;

if(d<0){d+=this.__jG.length;
}var f;

if(d<=e){f=this.__jG.slice(d,e+1);
}else{f=this.__jG.slice(d,this.__jG.length).concat(this.__jG.slice(0,e+1));
}return f;
},clearHistory:function(){this.__jG=[];
this.__jH=0;
}}});
})();
(function(){var w="node",v="error",u="...(+",t="array",s=")",r="info",q="instance",p="string",o="null",n="class",R="number",Q="stringify",P="]",O="unknown",N="function",M="boolean",L="debug",K="map",J="undefined",I="qx.log.Logger",D=")}",E="#",B="warn",C="document",z="{...(",A="[",x="text[",y="[...(",F="\n",G=")]",H="object";
qx.Bootstrap.define(I,{statics:{__ef:L,setLevel:function(bE){this.__ef=bE;
},getLevel:function(){return this.__ef;
},setTreshold:function(bI){this.__ei.setMaxMessages(bI);
},getTreshold:function(){return this.__ei.getMaxMessages();
},__eg:{},__eh:0,register:function(bF){if(bF.$$id){return;
}var bG=this.__eh++;
this.__eg[bG]=bF;
bF.$$id=bG;
var bH=this.__ei.getAllLogEvents();

for(var i=0,l=bH.length;i<l;i++){bF.process(bH[i]);
}},unregister:function(bC){var bD=bC.$$id;

if(bD==null){return;
}delete this.__eg[bD];
delete bC.$$id;
},debug:function(a,b){this.__ek(L,arguments);
},info:function(bc,bd){this.__ek(r,arguments);
},warn:function(ba,bb){this.__ek(B,arguments);
},error:function(g,h){this.__ek(v,arguments);
},trace:function(f){this.__ek(r,[f,qx.dev.StackTrace.getStackTrace().join(F)]);
},deprecatedMethodWarning:function(c,d){var e;
{};
},deprecatedClassWarning:function(j,k){var m;
{};
},deprecatedEventWarning:function(S,event,T){var U;
{};
},deprecatedMixinWarning:function(bg,bh){var bi;
{};
},deprecatedConstantWarning:function(V,W,X){var self,Y;
{};
},clear:function(){this.__ei.clearHistory();
},__ei:new qx.log.appender.RingBuffer(50),__ej:{debug:0,info:1,warn:2,error:3},__ek:function(bj,bk){var bp=this.__ej;

if(bp[bj]<bp[this.__ef]){return;
}var bm=bk.length<2?null:bk[0];
var bo=bm?1:0;
var bl=[];

for(var i=bo,l=bk.length;i<l;i++){bl.push(this.__em(bk[i],true));
}var bq=new Date;
var br={time:bq,offset:bq-qx.Bootstrap.LOADSTART,level:bj,items:bl,win:window};
if(bm){if(bm instanceof qx.core.Object){br.object=bm.$$hash;
}else if(bm.$$type){br.clazz=bm;
}}this.__ei.process(br);
var bs=this.__eg;

for(var bn in bs){bs[bn].process(br);
}},__el:function(be){if(be===undefined){return J;
}else if(be===null){return o;
}
if(be.$$type){return n;
}var bf=typeof be;

if(bf===N||bf==p||bf===R||bf===M){return bf;
}else if(bf===H){if(be.nodeType){return w;
}else if(be.classname){return q;
}else if(be instanceof Array){return t;
}else if(be instanceof Error){return v;
}else{return K;
}}
if(be.toString){return Q;
}return O;
},__em:function(bt,bu){var bB=this.__el(bt);
var bx=O;
var bw=[];

switch(bB){case o:case J:bx=bB;
break;
case p:case R:case M:bx=bt;
break;
case w:if(bt.nodeType===9){bx=C;
}else if(bt.nodeType===3){bx=x+bt.nodeValue+P;
}else if(bt.nodeType===1){bx=bt.nodeName.toLowerCase();

if(bt.id){bx+=E+bt.id;
}}else{bx=w;
}break;
case N:bx=qx.lang.Function.getName(bt)||bB;
break;
case q:bx=bt.basename+A+bt.$$hash+P;
break;
case n:case Q:bx=bt.toString();
break;
case v:bw=qx.dev.StackTrace.getStackTraceFromError(bt);
bx=bt.toString();
break;
case t:if(bu){bx=[];

for(var i=0,l=bt.length;i<l;i++){if(bx.length>20){bx.push(u+(l-i)+s);
break;
}bx.push(this.__em(bt[i],false));
}}else{bx=y+bt.length+G;
}break;
case K:if(bu){var bv;
var bA=[];

for(var bz in bt){bA.push(bz);
}bA.sort();
bx=[];

for(var i=0,l=bA.length;i<l;i++){if(bx.length>20){bx.push(u+(l-i)+s);
break;
}bz=bA[i];
bv=this.__em(bt[bz],false);
bv.key=bz;
bx.push(bv);
}}else{var by=0;

for(var bz in bt){by++;
}bx=z+by+D;
}break;
}return {type:bB,text:bx,trace:bw};
}}});
})();
(function(){var by="set",bx="get",bw="reset",bv="qx.core.Object",bu="]",bt="[",bs="$$user_",br="Don't use '_disposeFields' - instead assign directly to 'null'",bq="Object";
qx.Class.define(bv,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bq},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bt+this.$$hash+bu;
},base:function(J,K){{};

if(arguments.length===1){return J.callee.base.call(this);
}else{return J.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(bj){return bj.callee.self;
},clone:function(){var bl=this.constructor;
var bk=new bl;
var bn=qx.Class.getProperties(bl);
var bm=qx.core.Property.$$store.user;
var bo=qx.core.Property.$$method.set;
var name;
for(var i=0,l=bn.length;i<l;i++){name=bn[i];

if(this.hasOwnProperty(bm[name])){bk[bo[name]](this[bm[name]]);
}}return bk;
},set:function(x,y){var A=qx.core.Property.$$method.set;

if(qx.lang.Type.isString(x)){if(!this[A[x]]){if(this[by+qx.lang.String.firstUp(x)]!=undefined){this[by+qx.lang.String.firstUp(x)](y);
return;
}{};
}return this[A[x]](y);
}else{for(var z in x){if(!this[A[z]]){if(this[by+qx.lang.String.firstUp(z)]!=undefined){this[by+qx.lang.String.firstUp(z)](x[z]);
continue;
}{};
}this[A[z]](x[z]);
}return this;
}},get:function(B){var C=qx.core.Property.$$method.get;

if(!this[C[B]]){if(this[bx+qx.lang.String.firstUp(B)]!=undefined){return this[bx+qx.lang.String.firstUp(B)]();
}{};
}return this[C[B]]();
},reset:function(bh){var bi=qx.core.Property.$$method.reset;

if(!this[bi[bh]]){if(this[bw+qx.lang.String.firstUp(bh)]!=undefined){this[bw+qx.lang.String.firstUp(bh)]();
return;
}{};
}this[bi[bh]]();
},__jJ:qx.event.Registration,addListener:function(V,W,self,X){if(!this.$$disposed){return this.__jJ.addListener(this,V,W,self,X);
}return null;
},addListenerOnce:function(D,E,self,F){var G=function(e){E.call(self||this,e);
this.removeListener(D,G,this,F);
};
return this.addListener(D,G,this,F);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__jJ.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(L){if(!this.$$disposed){return this.__jJ.removeListenerById(this,L);
}return false;
},hasListener:function(q,r){return this.__jJ.hasListener(this,q,r);
},dispatchEvent:function(H){if(!this.$$disposed){return this.__jJ.dispatchEvent(this,H);
}return true;
},fireEvent:function(S,T,U){if(!this.$$disposed){return this.__jJ.fireEvent(this,S,T,U);
}return true;
},fireNonBubblingEvent:function(bc,bd,be){if(!this.$$disposed){return this.__jJ.fireNonBubblingEvent(this,bc,bd,be);
}return true;
},fireDataEvent:function(a,b,c,d){if(!this.$$disposed){if(c===undefined){c=null;
}return this.__jJ.fireNonBubblingEvent(this,a,qx.event.type.Data,[b,c,!!d]);
}return true;
},__jK:null,setUserData:function(Y,ba){if(!this.__jK){this.__jK={};
}this.__jK[Y]=ba;
},getUserData:function(bf){if(!this.__jK){return null;
}var bg=this.__jK[bf];
return bg===undefined?null:bg;
},__jL:qx.log.Logger,debug:function(bp){this.__jL.debug(this,bp);
},info:function(I){this.__jL.info(this,I);
},warn:function(bz){this.__jL.warn(this,bz);
},error:function(f){this.__jL.error(this,f);
},trace:function(){this.__jL.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var v,t;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var u=this.constructor;
var s;

while(u.superclass){if(u.$$destructor){u.$$destructor.call(this);
}if(u.$$includes){s=u.$$flatIncludes;

for(var i=0,l=s.length;i<l;i++){if(s[i].$$destructor){s[i].$$destructor.call(this);
}}}u=u.superclass;
}var w=qx.Class.getProperties(this.constructor);

for(var i=0,l=w.length;i<l;i++){delete this[bs+w[i]];
}{};
},_disposeFields:function(R){qx.log.Logger.deprecatedMethodWarning(arguments.callee,br);
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(bA){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(N){qx.util.DisposeUtil.disposeArray(this,N);
},_disposeMap:function(bb){qx.util.DisposeUtil.disposeMap(this,bb);
}},settings:{"qx.disposerDebugLevel":0},defer:function(M){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__jK=null;
var j=this.constructor;
var o;
var p=qx.core.Property.$$store;
var m=p.user;
var n=p.theme;
var g=p.inherit;
var k=p.useinit;
var h=p.init;

while(j){o=j.$$properties;

if(o){for(var name in o){if(o[name].dispose){this[m[name]]=this[n[name]]=this[g[name]]=this[k[name]]=this[h[name]]=undefined;
}}}j=j.superclass;
}}});
})();
(function(){var B="",A="g",z="0",y='\\$1',x="%",w='-',v="qx.lang.String",u=' ',t='\n',s="undefined";
qx.Bootstrap.define(v,{statics:{camelCase:function(q){return q.replace(/\-([a-z])/g,function(P,Q){return Q.toUpperCase();
});
},hyphenate:function(b){return b.replace(/[A-Z]/g,function(N){return (w+N.charAt(0).toLowerCase());
});
},capitalize:function(O){return O.replace(/\b[a-z]/g,function(p){return p.toUpperCase();
});
},clean:function(k){return this.trim(k.replace(/\s+/g,u));
},trimLeft:function(o){return o.replace(/^\s+/,B);
},trimRight:function(d){return d.replace(/\s+$/,B);
},trim:function(j){return j.replace(/^\s+|\s+$/g,B);
},startsWith:function(H,I){return H.indexOf(I)===0;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},repeat:function(R,S){return R.length>=0?new Array(S+1).join(R):B;
},pad:function(C,length,D){var E=length-C.length;

if(E>0){if(typeof D===s){D=z;
}return this.repeat(D,E)+C;
}else{return C;
}},firstUp:function(c){return c.charAt(0).toUpperCase()+c.substr(1);
},firstLow:function(L){return L.charAt(0).toLowerCase()+L.substr(1);
},contains:function(J,K){return J.indexOf(K)!=-1;
},format:function(l,m){var n=l;

for(var i=0;i<m.length;i++){n=n.replace(new RegExp(x+(i+1),A),m[i]);
}return n;
},escapeRegexpChars:function(a){return a.replace(/([.*+?^${}()|[\]\/\\])/g,y);
},toArray:function(M){return M.split(/\B|\b/g);
},stripTags:function(r){return r.replace(/<\/?[^>]+>/gi,B);
},stripScripts:function(e,f){var h=B;
var g=e.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){h+=arguments[1]+t;
return B;
});

if(f===true){qx.lang.Function.globalEval(h);
}return g;
}}});
})();
(function(){var p="function",o="Boolean",n="qx.Interface",m="]",k="toggle",j="Interface",h="is",g="[Interface ";
qx.Bootstrap.define(n,{statics:{define:function(name,u){if(u){if(u.extend&&!(u.extend instanceof Array)){u.extend=[u.extend];
}{};
var v=u.statics?u.statics:{};
if(u.extend){v.$$extends=u.extend;
}
if(u.properties){v.$$properties=u.properties;
}
if(u.members){v.$$members=u.members;
}
if(u.events){v.$$events=u.events;
}}else{var v={};
}v.$$type=j;
v.name=name;
v.toString=this.genericToString;
v.basename=qx.Bootstrap.createNamespace(name,v);
qx.Interface.$$registry[name]=v;
return v;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.lang.Object.getLength(this.$$registry);
},flatten:function(P){if(!P){return [];
}var Q=P.concat();

for(var i=0,l=P.length;i<l;i++){if(P[i].$$extends){Q.push.apply(Q,this.flatten(P[i].$$extends));
}}return Q;
},__eH:function(D,E,F,G){var K=F.$$members;

if(K){for(var J in K){if(qx.lang.Type.isFunction(K[J])){var I=this.__eI(E,J);
var H=I||qx.lang.Type.isFunction(D[J]);

if(!H){throw new Error('Implementation of method "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}var L=G===true&&!I&&!qx.Class.hasInterface(E,F);

if(L){D[J]=this.__eL(F,D[J],J,K[J]);
}}else{if(typeof D[J]===undefined){if(typeof D[J]!==p){throw new Error('Implementation of member "'+J+'" is missing in class "'+E.classname+'" required by interface "'+F.name+'"');
}}}}}},__eI:function(a,b){var f=b.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!f){return false;
}var c=qx.lang.String.firstLow(f[2]);
var d=qx.Class.hasProperty(a,c);

if(!d){return false;
}var e=f[0]==h||f[0]==k;

if(e){return qx.Class.getPropertyDefinition(a,c).check==o;
}return true;
},__eJ:function(M,N){if(N.$$properties){for(var O in N.$$properties){if(!qx.Class.hasProperty(M,O)){throw new Error('The property "'+O+'" is not supported by Class "'+M.classname+'"!');
}}}},__eK:function(A,B){if(B.$$events){for(var C in B.$$events){if(!qx.Class.supportsEvent(A,C)){throw new Error('The event "'+C+'" is not supported by Class "'+A.classname+'"!');
}}}},assertObject:function(q,r){var t=q.constructor;
this.__eH(q,t,r,false);
this.__eJ(t,r);
this.__eK(t,r);
var s=r.$$extends;

if(s){for(var i=0,l=s.length;i<l;i++){this.assertObject(q,s[i]);
}}},assert:function(w,x,y){this.__eH(w.prototype,w,x,y);
this.__eJ(w,x);
this.__eK(w,x);
var z=x.$$extends;

if(z){for(var i=0,l=z.length;i<l;i++){this.assert(w,z[i],y);
}}},genericToString:function(){return g+this.name+m;
},$$registry:{},__eL:function(){},__eM:null,__eN:function(){}}});
})();
(function(){var c="qx.ui.decoration.IDecorator";
qx.Interface.define(c,{members:{getMarkup:function(){},resize:function(d,e,f){},tint:function(a,b){},getInsets:function(){}}});
})();
(function(){var j="Number",i="_applyInsets",h="abstract",g="insetRight",f="insetTop",e="insetBottom",d="qx.ui.decoration.Abstract",c="shorthand",b="insetLeft";
qx.Class.define(d,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:h,properties:{insetLeft:{check:j,nullable:true,apply:i},insetRight:{check:j,nullable:true,apply:i},insetBottom:{check:j,nullable:true,apply:i},insetTop:{check:j,nullable:true,apply:i},insets:{group:[f,g,e,b],mode:c}},members:{__lh:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lh=null;
},getInsets:function(){if(this.__lh){return this.__lh;
}var a=this._getDefaultInsets();
return this.__lh={left:this.getInsetLeft()==null?a.left:this.getInsetLeft(),right:this.getInsetRight()==null?a.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?a.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?a.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__lh=null;
}},destruct:function(){this.__lh=null;
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
(function(){var u="_applyStyle",t="Color",s="px",r="solid",q="dotted",p="double",o="dashed",n="",m="_applyWidth",l="qx.ui.decoration.Uniform",i="px ",k=" ",j="scale",h="PositiveInteger",g="absolute";
qx.Class.define(l,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{width:{check:h,init:0,apply:m},style:{nullable:true,check:[r,q,o,p],init:r,apply:u},color:{nullable:true,check:t,apply:u},backgroundColor:{check:t,nullable:true,apply:u}},members:{__po:null,_getDefaultInsets:function(){var v=this.getWidth();
return {top:v,right:v,bottom:v,left:v};
},_isInitialized:function(){return !!this.__po;
},getMarkup:function(){if(this.__po){return this.__po;
}var w={position:g,top:0,left:0};
var x=this.getWidth();
{};
var z=qx.theme.manager.Color.getInstance();
w.border=x+i+this.getStyle()+k+z.resolve(this.getColor());
var y=this._generateBackgroundMarkup(w);
return this.__po=y;
},resize:function(A,B,C){var E=this.getBackgroundImage()&&this.getBackgroundRepeat()==j;

if(E||qx.bom.client.Feature.CONTENT_BOX){var D=this.getWidth()*2;
B-=D;
C-=D;
if(B<0){B=0;
}
if(C<0){C=0;
}}A.style.width=B+s;
A.style.height=C+s;
},tint:function(d,e){var f=qx.theme.manager.Color.getInstance();

if(e==null){e=this.getBackgroundColor();
}d.style.backgroundColor=f.resolve(e)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__po=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(g){arguments.callee.base.call(this);

if(g!=null){this.setBackgroundColor(g);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__lk:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__lk;
},getMarkup:function(){if(this.__lk){return this.__lk;
}var k={position:a,top:0,left:0};
var l=this._generateBackgroundMarkup(k);
return this.__lk=l;
},resize:function(h,i,j){h.style.width=i+f;
h.style.height=j+f;
},tint:function(m,n){var o=qx.theme.manager.Color.getInstance();

if(n==null){n=this.getBackgroundColor();
}m.style.backgroundColor=o.resolve(n)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__lk=null;
}});
})();
(function(){var r="_applyStyle",q="solid",p="Color",o="double",n="px ",m="dotted",l="_applyWidth",k="dashed",j="Number",i=" ",N="shorthand",M="px",L="widthTop",K="styleRight",J="styleLeft",I="widthLeft",H="widthBottom",G="styleTop",F="colorBottom",E="styleBottom",y="widthRight",z="colorLeft",w="colorRight",x="colorTop",u="scale",v="border-top",s="border-left",t="border-right",A="qx.ui.decoration.Single",B="",D="border-bottom",C="absolute";
qx.Class.define(A,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(a,b,c){arguments.callee.base.call(this);
if(a!=null){this.setWidth(a);
}
if(b!=null){this.setStyle(b);
}
if(c!=null){this.setColor(c);
}},properties:{widthTop:{check:j,init:0,apply:l},widthRight:{check:j,init:0,apply:l},widthBottom:{check:j,init:0,apply:l},widthLeft:{check:j,init:0,apply:l},styleTop:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleRight:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleBottom:{nullable:true,check:[q,m,k,o],init:q,apply:r},styleLeft:{nullable:true,check:[q,m,k,o],init:q,apply:r},colorTop:{nullable:true,check:p,apply:r},colorRight:{nullable:true,check:p,apply:r},colorBottom:{nullable:true,check:p,apply:r},colorLeft:{nullable:true,check:p,apply:r},backgroundColor:{check:p,nullable:true,apply:r},left:{group:[I,J,z]},right:{group:[y,K,w]},top:{group:[L,G,x]},bottom:{group:[H,E,F]},width:{group:[L,y,H,I],mode:N},style:{group:[G,K,E,J],mode:N},color:{group:[x,w,F,z],mode:N}},members:{__nh:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__nh;
},getMarkup:function(d){if(this.__nh){return this.__nh;
}var e=qx.theme.manager.Color.getInstance();
var f={};
var h=this.getWidthTop();

if(h>0){f[v]=h+n+this.getStyleTop()+i+e.resolve(this.getColorTop());
}var h=this.getWidthRight();

if(h>0){f[t]=h+n+this.getStyleRight()+i+e.resolve(this.getColorRight());
}var h=this.getWidthBottom();

if(h>0){f[D]=h+n+this.getStyleBottom()+i+e.resolve(this.getColorBottom());
}var h=this.getWidthLeft();

if(h>0){f[s]=h+n+this.getStyleLeft()+i+e.resolve(this.getColorLeft());
}{};
f.position=C;
f.top=0;
f.left=0;
var g=this._generateBackgroundMarkup(f);
return this.__nh=g;
},resize:function(R,S,T){var V=this.getBackgroundImage()&&this.getBackgroundRepeat()==u;

if(V||qx.bom.client.Feature.CONTENT_BOX){var U=this.getInsets();
S-=U.left+U.right;
T-=U.top+U.bottom;
if(S<0){S=0;
}
if(T<0){T=0;
}}R.style.width=S+M;
R.style.height=T+M;
},tint:function(O,P){var Q=qx.theme.manager.Color.getInstance();

if(P==null){P=this.getBackgroundColor();
}O.style.backgroundColor=Q.resolve(P)||B;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__nh=null;
}});
})();
(function(){var m="px",l="0px",k="-1px",j="no-repeat",i="scale-x",h="scale-y",g="-tr",f="-l",e='</div>',d="scale",A="qx.client",z="-br",y="-t",x="-tl",w="-r",v='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',u="_applyBaseImage",t="-b",s="String",r="",p="-bl",q="-c",n="mshtml",o="qx.ui.decoration.Grid";
qx.Class.define(o,{extend:qx.ui.decoration.Abstract,construct:function(a,b){arguments.callee.base.call(this);
if(a!=null){this.setBaseImage(a);
}
if(b!=null){this.setInsets(b);
}},properties:{baseImage:{check:s,nullable:true,apply:u}},members:{__ne:null,__nf:null,__ng:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__ne;
},getMarkup:function(){if(this.__ne){return this.__ne;
}var D=qx.bom.element.Decoration;
var E=this.__nf;
var F=this.__ng;
var G=[];
G.push(v);
G.push(D.create(E.tl,j,{top:0,left:0}));
G.push(D.create(E.t,i,{top:0,left:F.left+m}));
G.push(D.create(E.tr,j,{top:0,right:0}));
G.push(D.create(E.bl,j,{bottom:0,left:0}));
G.push(D.create(E.b,i,{bottom:0,left:F.left+m}));
G.push(D.create(E.br,j,{bottom:0,right:0}));
G.push(D.create(E.l,h,{top:F.top+m,left:0}));
G.push(D.create(E.c,d,{top:F.top+m,left:F.left+m}));
G.push(D.create(E.r,h,{top:F.top+m,right:0}));
G.push(e);
return this.__ne=G.join(r);
},resize:function(J,K,L){var M=this.__ng;
var innerWidth=K-M.left-M.right;
var innerHeight=L-M.top-M.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}J.style.width=K+m;
J.style.height=L+m;
J.childNodes[1].style.width=innerWidth+m;
J.childNodes[4].style.width=innerWidth+m;
J.childNodes[7].style.width=innerWidth+m;
J.childNodes[6].style.height=innerHeight+m;
J.childNodes[7].style.height=innerHeight+m;
J.childNodes[8].style.height=innerHeight+m;

if(qx.core.Variant.isSet(A,n)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(K%2==1){J.childNodes[2].style.marginRight=k;
J.childNodes[5].style.marginRight=k;
J.childNodes[8].style.marginRight=k;
}else{J.childNodes[2].style.marginRight=l;
J.childNodes[5].style.marginRight=l;
J.childNodes[8].style.marginRight=l;
}
if(L%2==1){J.childNodes[3].style.marginBottom=k;
J.childNodes[4].style.marginBottom=k;
J.childNodes[5].style.marginBottom=k;
}else{J.childNodes[3].style.marginBottom=l;
J.childNodes[4].style.marginBottom=l;
J.childNodes[5].style.marginBottom=l;
}}}},tint:function(B,C){},_applyBaseImage:function(N,O){{};

if(N){var S=this._resolveImageUrl(N);
var T=/(.*)(\.[a-z]+)$/.exec(S);
var R=T[1];
var Q=T[2];
var P=this.__nf={tl:R+x+Q,t:R+y+Q,tr:R+g+Q,bl:R+p+Q,b:R+t+Q,br:R+z+Q,l:R+f+Q,c:R+q+Q,r:R+w+Q};
this.__ng=this._computeEdgeSizes(P);
}},_resolveImageUrl:function(c){return qx.util.AliasManager.getInstance().resolve(c);
},_computeEdgeSizes:function(H){var I=qx.util.ResourceManager.getInstance();
return {top:I.getImageHeight(H.t),bottom:I.getImageHeight(H.b),left:I.getImageWidth(H.l),right:I.getImageWidth(H.r)};
}},destruct:function(){this.__ne=this.__nf=this.__ng=null;
}});
})();
(function(){var C="_applyStyle",B='"></div>',A="Color",z="1px",y='<div style="',x='border:',w="1px solid ",v="",u=";",t="px",O='</div>',N="qx.ui.decoration.Beveled",M='<div style="position:absolute;top:1px;left:1px;',L='border-bottom:',K='border-right:',J='border-left:',I='border-top:',H="Number",G='<div style="position:absolute;top:1px;left:0px;',F='position:absolute;top:0px;left:1px;',D='<div style="overflow:hidden;font-size:0;line-height:0;">',E="absolute";
qx.Class.define(N,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(P,Q,R){arguments.callee.base.call(this);
if(P!=null){this.setOuterColor(P);
}
if(Q!=null){this.setInnerColor(Q);
}
if(R!=null){this.setInnerOpacity(R);
}},properties:{innerColor:{check:A,nullable:true,apply:C},innerOpacity:{check:H,init:1,apply:C},outerColor:{check:A,nullable:true,apply:C},backgroundColor:{check:A,nullable:true,apply:C}},members:{__oO:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__oO;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__oO){return this.__oO;
}var d=qx.theme.manager.Color.getInstance();
var e=[];
var h=w+d.resolve(this.getOuterColor())+u;
var g=w+d.resolve(this.getInnerColor())+u;
e.push(D);
e.push(y);
e.push(x,h);
e.push(qx.bom.element.Opacity.compile(0.35));
e.push(B);
e.push(G);
e.push(J,h);
e.push(K,h);
e.push(B);
e.push(y);
e.push(F);
e.push(I,h);
e.push(L,h);
e.push(B);
var f={position:E,top:z,left:z};
e.push(this._generateBackgroundMarkup(f));
e.push(M);
e.push(x,g);
e.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
e.push(B);
e.push(O);
return this.__oO=e.join(v);
},resize:function(i,j,k){if(j<4){j=4;
}
if(k<4){k=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=j-2;
var outerHeight=k-2;
var q=outerWidth;
var p=outerHeight;
var innerWidth=j-4;
var innerHeight=k-4;
}else{var outerWidth=j;
var outerHeight=k;
var q=j-2;
var p=k-2;
var innerWidth=q;
var innerHeight=p;
}var s=t;
var o=i.childNodes[0].style;
o.width=outerWidth+s;
o.height=outerHeight+s;
var n=i.childNodes[1].style;
n.width=outerWidth+s;
n.height=p+s;
var m=i.childNodes[2].style;
m.width=q+s;
m.height=outerHeight+s;
var l=i.childNodes[3].style;
l.width=q+s;
l.height=p+s;
var r=i.childNodes[4].style;
r.width=innerWidth+s;
r.height=innerHeight+s;
},tint:function(a,b){var c=qx.theme.manager.Color.getInstance();

if(b==null){b=this.getBackgroundColor();
}a.childNodes[3].style.backgroundColor=c.resolve(b)||v;
}},destruct:function(){this.__oO=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Bootstrap.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__iK:function(){var n=navigator.platform;
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
}}},defer:function(o){o.__iK();
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
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var gq="button-frame",gp="atom",go="widget",gn="main",gm="button",gl="text-selected",gk="image",gj="bold",gi="middle",gh="background-light",eT="text-disabled",eS="groupbox",eR="decoration/arrows/down.png",eQ="cell",eP="selected",eO="border-invalid",eN="input",eM="input-disabled",eL="menu-button",eK="input-focused-invalid",gx="toolbar-button",gy="spinner",gv="input-focused",gw="popup",gt="tooltip",gu="list",gr="tree-item",gs="treevirtual-contract",gz="scrollbar",gA="datechooser/nav-button",fP="text-hovered",fO="center",fR="treevirtual-expand",fQ="textfield",fT="label",fS="decoration/arrows/right.png",fV="background-application",fU="radiobutton",fN="white",fM="invalid",cO="combobox",cP="right-top",cQ=".png",cR="checkbox",cS="text-title",cT="qx/static/blank.gif",cU="scrollbar/button",cV="right",cW="combobox/button",cX="icon/16/places/folder.png",gO="text-label",gN="decoration/tree/closed.png",gM="scrollbar-slider-horizontal",gL="decoration/arrows/left.png",gS="button-focused",gR="text-light",gQ="menu-slidebar-button",gP="text-input",gU="slidebar/button-forward",gT="background-splitpane",dR="decoration/tree/open.png",dS="default",dP="decoration/arrows/down-small.png",dQ="datechooser",dV="slidebar/button-backward",dW="selectbox",dT="treevirtual-folder",dU="shadow-popup",dN="icon/16/mimetypes/office-document.png",dO="background-medium",dt=".gif",ds="table",dv="decoration/arrows/up.png",du="decoration/form/",dp="",dn="-invalid",dr="icon/16/places/folder-open.png",dq="button-checked",dm="decoration/window/maximize-active-hovered.png",dl="radiobutton-hovered",ed="decoration/cursors/",ee="slidebar",ef="tooltip-error-arrow",eg="table-scroller-focus-indicator",dY="move-frame",ea="nodrop",eb="decoration/table/boolean-true.png",ec="table-header-cell",eh="menu",ei="app-header",dG="row-layer",dF="text-inactive",dE="move",dD="radiobutton-checked-focused",dC="decoration/window/restore-active-hovered.png",dB="shadow-window",dA="table-column-button",dz="right.png",dK="tabview-page-button-bottom-inactive",dJ="tooltip-error",ej="window-statusbar",ek="button-hovered",el="decoration/scrollbar/scrollbar-",em="background-tip",en="scrollbar-slider-horizontal-disabled",eo="table-scroller-header",ep="radiobutton-disabled",eq="button-pressed",er="table-pane",es="decoration/window/close-active.png",fc="native",fb="checkbox-hovered",fa="button-invalid-shadow",eY="checkbox-checked",fg="decoration/window/minimize-active-hovered.png",ff="menubar",fe="icon/16/actions/dialog-cancel.png",fd="tabview-page-button-top-inactive",fk="tabview-page-button-left-inactive",fj="menu-slidebar",fH="toolbar-button-checked",fI="decoration/tree/open-selected.png",fF="radiobutton-checked",fG="decoration/window/minimize-inactive.png",fD="icon/16/apps/office-calendar.png",fE="group",fB="tabview-page-button-right-inactive",fC="decoration/window/minimize-active.png",fJ="decoration/window/restore-inactive.png",fK="checkbox-checked-focused",ga="splitpane",fY="combobox/textfield",gc="button-preselected-focused",gb="decoration/window/close-active-hovered.png",ge="qx/icon/Tango/16/actions/window-close.png",gd="checkbox-pressed",gg="button-disabled",gf="selected-dragover",fX="border-separator",fW="decoration/window/maximize-inactive.png",gH="dragover",gI="scrollarea",gJ="scrollbar-vertical",gK="decoration/menu/checkbox-invert.gif",gD="decoration/toolbar/toolbar-handle-knob.gif",gE="icon/22/mimetypes/office-document.png",gF="button-preselected",gG="button-checked-focused",gB="up.png",gC="best-fit",cN="decoration/tree/closed-selected.png",cM="qx.theme.modern.Appearance",cL="text-active",cK="checkbox-disabled",cJ="toolbar-button-hovered",cI="progressive-table-header",cH="decoration/table/select-column-order.png",cG="decoration/menu/radiobutton.gif",cF="decoration/arrows/forward.png",cE="decoration/table/descending",db="window-captionbar-active",dc="checkbox-checked-hovered",cY="scrollbar-slider-vertical",da="toolbar",df="alias",dg="decoration/window/restore-active.png",dd="decoration/table/boolean-false.png",de="checkbox-checked-disabled",di="icon/32/mimetypes/office-document.png",dj="radiobutton-checked-disabled",fo="tabview-pane",fi="decoration/arrows/rewind.png",fv="checkbox-focused",fr="top",eW="#EEE",eU="icon/16/actions/dialog-ok.png",dx="radiobutton-checked-hovered",eX="table-header-cell-hovered",dI="window",dH="text-gray",eC="decoration/menu/radiobutton-invert.gif",eD="text-placeholder",eE="slider",eF="keep-align",eG="down.png",eH="tabview-page-button-top-active",eI="icon/32/places/folder-open.png",eJ="icon/22/places/folder.png",ez="decoration/window/maximize-active.png",eA="checkbox-checked-pressed",eV="decoration/window/close-inactive.png",fu="tabview-page-button-left-active",ft="toolbar-part",fs="decoration/splitpane/knob-vertical.png",fz="icon/22/places/folder-open.png",fy="radiobutton-checked-pressed",fx="table-statusbar",fw="radiobutton-pressed",fq="window-captionbar-inactive",fp="copy",dh="radiobutton-focused",dM="decoration/arrows/down-invert.png",dL="decoration/menu/checkbox.gif",fh="decoration/splitpane/knob-horizontal.png",dX="decoration/table/ascending",fn="icon/32/places/folder.png",fm="toolbar-separator",fl="tabview-page-button-bottom-active",dw="decoration/arrows/up-small.png",fA="decoration/arrows/up-invert.png",dk="small",dy="tabview-page-button-right-active",et="-disabled",eu="scrollbar-horizontal",ev="progressive-table-header-cell",ew="menu-separator",ex="pane",ey="decoration/arrows/right-invert.png",fL="left.png",eB="icon/16/actions/view-refresh.png";
qx.Theme.define(cM,{appearances:{"widget":{},"root":{style:function(X){return {backgroundColor:fV,textColor:gO,font:dS};
}},"label":{style:function(bV){return {textColor:bV.disabled?eT:undefined};
}},"move-frame":{style:function(hL){return {decorator:gn};
}},"resize-frame":dY,"dragdrop-cursor":{style:function(hu){var hv=ea;

if(hu.copy){hv=fp;
}else if(hu.move){hv=dE;
}else if(hu.alias){hv=df;
}return {source:ed+hv+dt,position:cP,offset:[2,16,2,6]};
}},"image":{style:function(cv){return {opacity:!cv.replacement&&cv.disabled?0.3:1};
}},"atom":{},"atom/label":fT,"atom/icon":gk,"popup":{style:function(hS){return {decorator:gn,backgroundColor:gh,shadow:dU};
}},"button-frame":{alias:gp,style:function(hV){var hX,hW;

if(hV.checked&&hV.focused&&!hV.inner){hX=gG;
hW=undefined;
}else if(hV.disabled){hX=gg;
hW=undefined;
}else if(hV.pressed){hX=eq;
hW=fP;
}else if(hV.checked){hX=dq;
hW=undefined;
}else if(hV.hovered){hX=ek;
hW=fP;
}else if(hV.preselected&&hV.focused&&!hV.inner){hX=gc;
hW=fP;
}else if(hV.preselected){hX=gF;
hW=fP;
}else if(hV.focused&&!hV.inner){hX=gS;
hW=undefined;
}else{hX=gm;
hW=undefined;
}return {decorator:hX,textColor:hW,shadow:hV.invalid&&!hV.disabled?fa:undefined};
}},"button-frame/image":{style:function(hs){return {opacity:!hs.replacement&&hs.disabled?0.5:1};
}},"button":{alias:gq,include:gq,style:function(bw){return {padding:[2,8],center:true};
}},"hover-button":{alias:gp,include:gp,style:function(bC){return {decorator:bC.hovered?eP:undefined,textColor:bC.hovered?gl:undefined};
}},"splitbutton":{},"splitbutton/button":gm,"splitbutton/arrow":{alias:gm,include:gm,style:function(c){return {icon:eR,padding:2,marginLeft:1};
}},"checkbox":{alias:gp,style:function(d){var f;

if(d.checked&&d.focused){f=fK;
}else if(d.checked&&d.disabled){f=de;
}else if(d.checked&&d.pressed){f=eA;
}else if(d.checked&&d.hovered){f=dc;
}else if(d.checked){f=eY;
}else if(d.disabled){f=cK;
}else if(d.focused){f=fv;
}else if(d.pressed){f=gd;
}else if(d.hovered){f=fb;
}else{f=cR;
}var e=d.invalid&&!d.disabled?dn:dp;
return {icon:du+f+e+cQ,gap:6};
}},"radiobutton":{alias:gp,style:function(p){var r;

if(p.checked&&p.focused){r=dD;
}else if(p.checked&&p.disabled){r=dj;
}else if(p.checked&&p.pressed){r=fy;
}else if(p.checked&&p.hovered){r=dx;
}else if(p.checked){r=fF;
}else if(p.disabled){r=ep;
}else if(p.focused){r=dh;
}else if(p.pressed){r=fw;
}else if(p.hovered){r=dl;
}else{r=fU;
}var q=p.invalid&&!p.disabled?dn:dp;
return {icon:du+r+q+cQ,gap:6};
}},"textfield":{style:function(H){var M;
var K=!!H.focused;
var L=!!H.invalid;
var I=!!H.disabled;

if(K&&L&&!I){M=eK;
}else if(K&&!L&&!I){M=gv;
}else if(I){M=eM;
}else if(!K&&L&&!I){M=eO;
}else{M=eN;
}var J;

if(H.disabled){J=eT;
}else if(H.showingPlaceholder){J=eD;
}else{J=gP;
}return {decorator:M,padding:[2,4,1],textColor:J};
}},"textarea":{include:fQ,style:function(bj){return {padding:4};
}},"spinner":{style:function(hk){var ho;
var hm=!!hk.focused;
var hn=!!hk.invalid;
var hl=!!hk.disabled;

if(hm&&hn&&!hl){ho=eK;
}else if(hm&&!hn&&!hl){ho=gv;
}else if(hl){ho=eM;
}else if(!hm&&hn&&!hl){ho=eO;
}else{ho=eN;
}return {decorator:ho};
}},"spinner/textfield":{style:function(O){return {marginRight:2,padding:[2,4,1],textColor:O.disabled?eT:gP};
}},"spinner/upbutton":{alias:gq,include:gq,style:function(ce){return {icon:dw,padding:ce.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gq,include:gq,style:function(C){return {icon:dP,padding:C.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cO,"datefield/button":{alias:cW,include:cW,style:function(bR){return {icon:fD,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fY,"datefield/list":{alias:dQ,include:dQ,style:function(bT){return {decorator:undefined};
}},"groupbox":{style:function(U){return {legendPosition:fr};
}},"groupbox/legend":{alias:gp,style:function(hQ){return {padding:[1,0,1,4],textColor:hQ.invalid?fM:cS,font:gj};
}},"groupbox/frame":{style:function(bk){return {padding:12,decorator:fE};
}},"check-groupbox":eS,"check-groupbox/legend":{alias:cR,include:cR,style:function(cg){return {padding:[1,0,1,4],textColor:cg.invalid?fM:cS,font:gj};
}},"radio-groupbox":eS,"radio-groupbox/legend":{alias:fU,include:fU,style:function(bl){return {padding:[1,0,1,4],textColor:bl.invalid?fM:cS,font:gj};
}},"scrollarea":{style:function(bG){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bI){return {backgroundColor:fV};
}},"scrollarea/pane":go,"scrollarea/scrollbar-x":gz,"scrollarea/scrollbar-y":gz,"scrollbar":{style:function(hj){if(hj[fc]){return {};
}return {width:hj.horizontal?undefined:16,height:hj.horizontal?16:undefined,decorator:hj.horizontal?eu:gJ,padding:1};
}},"scrollbar/slider":{alias:eE,style:function(bH){return {padding:bH.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gq,style:function(bK){var bL=bK.horizontal?gM:cY;

if(bK.disabled){bL+=et;
}return {decorator:bL,minHeight:bK.horizontal?undefined:9,minWidth:bK.horizontal?9:undefined};
}},"scrollbar/button":{alias:gq,include:gq,style:function(hD){var hE=el;

if(hD.left){hE+=fL;
}else if(hD.right){hE+=dz;
}else if(hD.up){hE+=gB;
}else{hE+=eG;
}
if(hD.left||hD.right){return {padding:[0,0,0,hD.left?3:4],icon:hE,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:hE,width:14,height:15};
}}},"scrollbar/button-begin":cU,"scrollbar/button-end":cU,"slider":{style:function(hy){var hC;
var hA=!!hy.focused;
var hB=!!hy.invalid;
var hz=!!hy.disabled;

if(hA&&hB&&!hz){hC=eK;
}else if(hA&&!hB&&!hz){hC=gv;
}else if(hz){hC=eM;
}else if(!hA&&hB&&!hz){hC=eO;
}else{hC=eN;
}return {decorator:hC};
}},"slider/knob":{include:gq,style:function(bN){return {decorator:bN.disabled?en:gM,shadow:undefined,height:14,width:14};
}},"list":{alias:gI,style:function(w){var A;
var y=!!w.focused;
var z=!!w.invalid;
var x=!!w.disabled;

if(y&&z&&!x){A=eK;
}else if(y&&!z&&!x){A=gv;
}else if(x){A=eM;
}else if(!y&&z&&!x){A=eO;
}else{A=eN;
}return {backgroundColor:gh,decorator:A};
}},"list/pane":go,"listitem":{alias:gp,style:function(be){var bf;

if(be.dragover){bf=be.selected?gf:gH;
}else{bf=be.selected?eP:undefined;
}return {padding:be.dragover?[4,4,2,4]:4,textColor:be.selected?gl:undefined,decorator:bf};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gq,include:gq,style:function(v){return {padding:5,center:true,icon:v.vertical?eR:fS};
}},"slidebar/button-backward":{alias:gq,include:gq,style:function(cl){return {padding:5,center:true,icon:cl.vertical?dv:gL};
}},"tabview":{style:function(bv){return {contentPadding:16};
}},"tabview/bar":{alias:ee,style:function(ic){var id={marginBottom:ic.barTop?-1:0,marginTop:ic.barBottom?-4:0,marginLeft:ic.barRight?-3:0,marginRight:ic.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(ic.barTop||ic.barBottom){id.paddingLeft=5;
id.paddingRight=7;
}else{id.paddingTop=5;
id.paddingBottom=7;
}return id;
}},"tabview/bar/button-forward":{include:gU,alias:gU,style:function(T){if(T.barTop||T.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dV,alias:dV,style:function(co){if(co.barTop||co.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bd){return {decorator:fo,minHeight:100,marginBottom:bd.barBottom?-1:0,marginTop:bd.barTop?-1:0,marginLeft:bd.barLeft?-1:0,marginRight:bd.barRight?-1:0};
}},"tabview-page":go,"tabview-page/button":{alias:gp,style:function(gY){var hf,hb=0;
var he=0,ha=0,hc=0,hd=0;

if(gY.checked){if(gY.barTop){hf=eH;
hb=[6,14];
hc=gY.firstTab?0:-5;
hd=gY.lastTab?0:-5;
}else if(gY.barBottom){hf=fl;
hb=[6,14];
hc=gY.firstTab?0:-5;
hd=gY.lastTab?0:-5;
}else if(gY.barRight){hf=dy;
hb=[6,13];
he=gY.firstTab?0:-5;
ha=gY.lastTab?0:-5;
}else{hf=fu;
hb=[6,13];
he=gY.firstTab?0:-5;
ha=gY.lastTab?0:-5;
}}else{if(gY.barTop){hf=fd;
hb=[4,10];
he=4;
hc=gY.firstTab?5:1;
hd=1;
}else if(gY.barBottom){hf=dK;
hb=[4,10];
ha=4;
hc=gY.firstTab?5:1;
hd=1;
}else if(gY.barRight){hf=fB;
hb=[4,10];
hd=5;
he=gY.firstTab?5:1;
ha=1;
hc=1;
}else{hf=fk;
hb=[4,10];
hc=5;
he=gY.firstTab?5:1;
ha=1;
hd=1;
}}return {zIndex:gY.checked?10:5,decorator:hf,padding:hb,marginTop:he,marginBottom:ha,marginLeft:hc,marginRight:hd,textColor:gY.checked?cL:dF};
}},"tabview-page/button/close-button":{alias:gp,style:function(ck){return {icon:ge};
}},"toolbar":{style:function(D){return {decorator:da,spacing:2};
}},"toolbar/part":{style:function(cf){return {decorator:ft,spacing:2};
}},"toolbar/part/container":{style:function(hh){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(cu){return {source:gD,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gp,style:function(bJ){return {marginTop:2,marginBottom:2,padding:(bJ.pressed||bJ.checked||bJ.hovered)&&!bJ.disabled||(bJ.disabled&&bJ.checked)?3:5,decorator:bJ.pressed||(bJ.checked&&!bJ.hovered)||(bJ.checked&&bJ.disabled)?fH:bJ.hovered&&!bJ.disabled?cJ:undefined};
}},"toolbar-menubutton":{alias:gx,include:gx,style:function(hO){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gk,include:gk,style:function(hI){return {source:dP};
}},"toolbar-splitbutton":{style:function(ct){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gx,include:gx,style:function(bb){return {icon:eR,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gx,include:gx,style:function(u){return {padding:u.pressed||u.checked?1:u.hovered?1:3,icon:eR,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(ba){return {decorator:fm,margin:7};
}},"tree":gu,"tree-item":{style:function(hN){return {padding:[2,6],textColor:hN.selected?gl:undefined,decorator:hN.selected?eP:undefined};
}},"tree-item/icon":{include:gk,style:function(P){return {paddingRight:5};
}},"tree-item/label":fT,"tree-item/open":{include:gk,style:function(cm){var cn;

if(cm.selected&&cm.opened){cn=fI;
}else if(cm.selected&&!cm.opened){cn=cN;
}else if(cm.opened){cn=dR;
}else{cn=gN;
}return {padding:[0,5,0,2],source:cn};
}},"tree-folder":{include:gr,alias:gr,style:function(bh){var bi;

if(bh.small){bi=bh.opened?dr:cX;
}else if(bh.large){bi=bh.opened?eI:fn;
}else{bi=bh.opened?fz:eJ;
}return {icon:bi};
}},"tree-file":{include:gr,alias:gr,style:function(h){return {icon:h.small?dN:h.large?di:gE};
}},"treevirtual":ds,"treevirtual-folder":{style:function(bM){return {icon:bM.opened?dr:cX};
}},"treevirtual-file":{include:dT,alias:dT,style:function(hJ){return {icon:dN};
}},"treevirtual-line":{style:function(by){return {icon:cT};
}},"treevirtual-contract":{style:function(hR){return {icon:dR,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(k){return {icon:gN,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gs,"treevirtual-only-expand":fR,"treevirtual-start-contract":gs,"treevirtual-start-expand":fR,"treevirtual-end-contract":gs,"treevirtual-end-expand":fR,"treevirtual-cross-contract":gs,"treevirtual-cross-expand":fR,"treevirtual-end":{style:function(cq){return {icon:cT};
}},"treevirtual-cross":{style:function(bD){return {icon:cT};
}},"tooltip":{include:gw,style:function(R){return {backgroundColor:em,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gp,"tooltip-error":{include:gt,style:function(o){return {textColor:gl,placeMethod:go,offset:[0,0,0,14],marginTop:-2,position:cP,showTimeout:100,hideTimeout:10000,decorator:dJ,shadow:ef,font:gj};
}},"tooltip-error/atom":gp,"window":{style:function(ib){return {shadow:dB,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(hM){return {decorator:dI};
}},"window/captionbar":{style:function(bS){return {decorator:bS.active?db:fq,textColor:bS.active?fN:dH,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(gX){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bB){return {alignY:gi,font:gj,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gp,style:function(Q){return {icon:Q.active?Q.hovered?fg:fC:fG,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gp,style:function(cy){return {icon:cy.active?cy.hovered?dC:dg:fJ,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gp,style:function(B){return {icon:B.active?B.hovered?dm:ez:fW,margin:[4,8,2,0]};
}},"window/close-button":{alias:gp,style:function(hq){return {icon:hq.active?hq.hovered?gb:es:eV,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(br){return {padding:[2,6],decorator:ej,minHeight:18};
}},"window/statusbar-text":{style:function(b){return {font:dk};
}},"iframe":{style:function(bt){return {decorator:gn};
}},"resizer":{style:function(i){return {decorator:ex};
}},"splitpane":{style:function(N){return {decorator:ga};
}},"splitpane/splitter":{style:function(E){return {width:E.horizontal?3:undefined,height:E.vertical?3:undefined,backgroundColor:gT};
}},"splitpane/splitter/knob":{style:function(bm){return {source:bm.horizontal?fh:fs};
}},"splitpane/slider":{style:function(bu){return {width:bu.horizontal?3:undefined,height:bu.vertical?3:undefined,backgroundColor:gT};
}},"selectbox":{alias:gq,include:gq,style:function(gV){return {padding:[2,8]};
}},"selectbox/atom":gp,"selectbox/popup":gw,"selectbox/list":{alias:gu},"selectbox/arrow":{include:gk,style:function(bX){return {source:eR,paddingLeft:5};
}},"datechooser":{style:function(bY){var cd;
var cb=!!bY.focused;
var cc=!!bY.invalid;
var ca=!!bY.disabled;

if(cb&&cc&&!ca){cd=eK;
}else if(cb&&!cc&&!ca){cd=gv;
}else if(ca){cd=eM;
}else if(!cb&&cc&&!ca){cd=eO;
}else{cd=eN;
}return {padding:2,decorator:cd,backgroundColor:gh};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gq,alias:gq,style:function(bE){var bF={padding:[2,4],shadow:undefined};

if(bE.lastYear){bF.icon=fi;
bF.marginRight=1;
}else if(bE.lastMonth){bF.icon=gL;
}else if(bE.nextYear){bF.icon=cF;
bF.marginLeft=1;
}else if(bE.nextMonth){bF.icon=fS;
}return bF;
}},"datechooser/last-year-button-tooltip":gt,"datechooser/last-month-button-tooltip":gt,"datechooser/next-year-button-tooltip":gt,"datechooser/next-month-button-tooltip":gt,"datechooser/last-year-button":gA,"datechooser/last-month-button":gA,"datechooser/next-month-button":gA,"datechooser/next-year-button":gA,"datechooser/month-year-label":{style:function(bU){return {font:gj,textAlign:fO,textColor:bU.disabled?eT:undefined};
}},"datechooser/date-pane":{style:function(hK){return {textColor:hK.disabled?eT:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(cx){return {textColor:cx.disabled?eT:cx.weekend?gR:undefined,textAlign:fO,paddingTop:2,backgroundColor:dO};
}},"datechooser/week":{style:function(bc){return {textAlign:fO,padding:[2,4],backgroundColor:dO};
}},"datechooser/day":{style:function(bn){return {textAlign:fO,decorator:bn.disabled?undefined:bn.selected?eP:undefined,textColor:bn.disabled?eT:bn.selected?gl:bn.otherMonth?gR:undefined,font:bn.today?gj:undefined,padding:[2,4]};
}},"combobox":{style:function(cz){var cD;
var cB=!!cz.focused;
var cC=!!cz.invalid;
var cA=!!cz.disabled;

if(cB&&cC&&!cA){cD=eK;
}else if(cB&&!cC&&!cA){cD=gv;
}else if(cA){cD=eM;
}else if(!cB&&cC&&!cA){cD=eO;
}else{cD=eN;
}return {decorator:cD};
}},"combobox/popup":gw,"combobox/list":{alias:gu},"combobox/button":{include:gq,alias:gq,style:function(hw){var hx={icon:eR,padding:2};

if(hw.selected){hx.decorator=gS;
}return hx;
}},"combobox/textfield":{include:fQ,style:function(ih){return {decorator:undefined};
}},"menu":{style:function(F){var G={decorator:eh,shadow:dU,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:F.submenu||F.contextmenu?gC:eF};

if(F.submenu){G.position=cP;
G.offset=[-2,-3];
}return G;
}},"menu/slidebar":fj,"menu-slidebar":go,"menu-slidebar-button":{style:function(hF){return {decorator:hF.hovered?eP:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gQ,style:function(S){return {icon:S.hovered?fA:dv};
}},"menu-slidebar/button-forward":{include:gQ,style:function(Y){return {icon:Y.hovered?dM:eR};
}},"menu-separator":{style:function(bW){return {height:0,decorator:ew,margin:[4,2]};
}},"menu-button":{alias:gp,style:function(hg){return {decorator:hg.selected?eP:undefined,textColor:hg.selected?gl:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gk,style:function(bs){return {alignY:gi};
}},"menu-button/label":{include:fT,style:function(hU){return {alignY:gi,padding:1};
}},"menu-button/shortcut":{include:fT,style:function(hY){return {alignY:gi,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gk,style:function(ia){return {source:ia.selected?ey:fS,alignY:gi};
}},"menu-checkbox":{alias:eL,include:eL,style:function(gW){return {icon:!gW.checked?undefined:gW.selected?gK:dL};
}},"menu-radiobutton":{alias:eL,include:eL,style:function(bQ){return {icon:!bQ.checked?undefined:bQ.selected?eC:cG};
}},"menubar":{style:function(bq){return {decorator:ff};
}},"menubar-button":{alias:gp,style:function(ig){return {decorator:ig.pressed||ig.hovered?eP:undefined,textColor:ig.pressed||ig.hovered?gl:undefined,padding:[3,8]};
}},"colorselector":go,"colorselector/control-bar":go,"colorselector/control-pane":go,"colorselector/visual-pane":eS,"colorselector/preset-grid":go,"colorselector/colorbucket":{style:function(ci){return {decorator:gn,width:16,height:16};
}},"colorselector/preset-field-set":eS,"colorselector/input-field-set":eS,"colorselector/preview-field-set":eS,"colorselector/hex-field-composite":go,"colorselector/hex-field":fQ,"colorselector/rgb-spinner-composite":go,"colorselector/rgb-spinner-red":gy,"colorselector/rgb-spinner-green":gy,"colorselector/rgb-spinner-blue":gy,"colorselector/hsb-spinner-composite":go,"colorselector/hsb-spinner-hue":gy,"colorselector/hsb-spinner-saturation":gy,"colorselector/hsb-spinner-brightness":gy,"colorselector/preview-content-old":{style:function(hT){return {decorator:gn,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(cp){return {decorator:gn,backgroundColor:gh,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(V){return {decorator:gn,margin:5};
}},"colorselector/brightness-field":{style:function(bA){return {decorator:gn,margin:[5,7]};
}},"colorselector/hue-saturation-pane":go,"colorselector/hue-saturation-handle":go,"colorselector/brightness-pane":go,"colorselector/brightness-handle":go,"colorpopup":{alias:gw,include:gw,style:function(hP){return {padding:5,backgroundColor:fV};
}},"colorpopup/field":{style:function(hr){return {decorator:gn,margin:2,width:14,height:14,backgroundColor:gh};
}},"colorpopup/selector-button":gm,"colorpopup/auto-button":gm,"colorpopup/preview-pane":eS,"colorpopup/current-preview":{style:function(cj){return {height:20,padding:4,marginLeft:4,decorator:gn,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(bz){return {height:20,padding:4,marginRight:4,decorator:gn,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:gm,include:gm,style:function(ie){return {icon:eU};
}},"colorpopup/colorselector-cancelbutton":{alias:gm,include:gm,style:function(W){return {icon:fe};
}},"table":{alias:go,style:function(bO){return {decorator:ds};
}},"table-header":{},"table/statusbar":{style:function(s){return {decorator:fx,padding:[0,2]};
}},"table/column-button":{alias:gq,style:function(g){return {decorator:dA,padding:3,icon:cH};
}},"table-column-reset-button":{include:eL,alias:eL,style:function(){return {icon:eB};
}},"table-scroller":go,"table-scroller/scrollbar-x":gz,"table-scroller/scrollbar-y":gz,"table-scroller/header":{style:function(bP){return {decorator:eo};
}},"table-scroller/pane":{style:function(bx){return {backgroundColor:er};
}},"table-scroller/focus-indicator":{style:function(l){return {decorator:eg};
}},"table-scroller/resize-line":{style:function(cw){return {backgroundColor:fX,width:2};
}},"table-header-cell":{alias:gp,style:function(hG){var hH=qx.bom.client.Engine.MSHTML?dt:cQ;
return {minWidth:13,minHeight:20,padding:hG.hovered?[3,4,2,4]:[3,4],decorator:hG.hovered?eX:ec,sortIcon:hG.sorted?(hG.sortedAscending?dX+hH:cE+hH):undefined};
}},"table-header-cell/label":{style:function(j){return {minWidth:0,alignY:gi,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hi){return {alignY:gi,alignX:cV};
}},"table-header-cell/icon":{style:function(bg){return {minWidth:0,alignY:gi,paddingRight:5};
}},"table-editor-textfield":{include:fQ,style:function(ch){return {decorator:undefined,padding:[2,2],backgroundColor:gh};
}},"table-editor-selectbox":{include:dW,alias:dW,style:function(ht){return {padding:[0,2],backgroundColor:gh};
}},"table-editor-combobox":{include:cO,alias:cO,style:function(m){return {decorator:undefined,backgroundColor:gh};
}},"progressive-table-header":{alias:go,style:function(cr){return {decorator:cI};
}},"progressive-table-header-cell":{alias:gp,style:function(n){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:ev};
}},"app-header":{style:function(bo){return {font:gj,textColor:gl,padding:[8,12],decorator:ei};
}},"virtual-list":gu,"virtual-list/row-layer":dG,"row-layer":{style:function(t){return {colorEven:fN,colorOdd:eW};
}},"column-layer":go,"cell":{style:function(cs){return {textColor:cs.selected?gl:gO,padding:[3,6],font:dS};
}},"cell-string":eQ,"cell-number":{include:eQ,style:function(hp){return {textAlign:cV};
}},"cell-image":eQ,"cell-boolean":{include:eQ,style:function(bp){return {iconTrue:eb,iconFalse:dd};
}},"cell-atom":eQ,"cell-date":eQ,"cell-html":eQ,"htmlarea":{"include":go,style:function(a){return {backgroundColor:fN};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();
(function(){var k="emulated",j="native",h='"',g="qx.lang.Core",f="\\\\",e="\\\"",d="[object Error]";
qx.Bootstrap.define(g,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==d)?k:j,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?j:k,{"native":Array.prototype.indexOf,"emulated":function(m,n){if(n==null){n=0;
}else if(n<0){n=Math.max(0,this.length+n);
}
for(var i=n;i<this.length;i++){if(this[i]===m){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?j:k,{"native":Array.prototype.lastIndexOf,"emulated":function(C,D){if(D==null){D=this.length-1;
}else if(D<0){D=Math.max(0,this.length+D);
}
for(var i=D;i>=0;i--){if(this[i]===C){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?j:k,{"native":Array.prototype.forEach,"emulated":function(s,t){var l=this.length;

for(var i=0;i<l;i++){var u=this[i];

if(u!==undefined){s.call(t||window,u,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?j:k,{"native":Array.prototype.filter,"emulated":function(v,w){var x=[];
var l=this.length;

for(var i=0;i<l;i++){var y=this[i];

if(y!==undefined){if(v.call(w||window,y,i,this)){x.push(this[i]);
}}}return x;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?j:k,{"native":Array.prototype.map,"emulated":function(o,p){var q=[];
var l=this.length;

for(var i=0;i<l;i++){var r=this[i];

if(r!==undefined){q[i]=o.call(p||window,r,i,this);
}}return q;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?j:k,{"native":Array.prototype.some,"emulated":function(z,A){var l=this.length;

for(var i=0;i<l;i++){var B=this[i];

if(B!==undefined){if(z.call(A||window,B,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?j:k,{"native":Array.prototype.every,"emulated":function(a,b){var l=this.length;

for(var i=0;i<l;i++){var c=this[i];

if(c!==undefined){if(!a.call(b||window,c,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?j:k,{"native":String.prototype.quote,"emulated":function(){return h+this.replace(/\\/g,f).replace(/\"/g,e)+h;
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
qx.Bootstrap.define(G,{statics:{__cb:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cc:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cd:function(){var J=qx.lang.Generics.__cb;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cc(L,M);
}}}}},defer:function(Q){Q.__cd();
}});
})();
(function(){var f="qx.event.type.Data",e="qx.event.type.Event",d="qx.data.IListData";
qx.Interface.define(d,{events:{"change":f,"changeLength":e},members:{getItem:function(i){},setItem:function(g,h){},splice:function(a,b,c){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Bootstrap.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var d="qx.globalErrorHandling",c="on",b="qx.event.GlobalError";
qx.Bootstrap.define(b,{statics:{setErrorHandler:function(k,l){this.__iC=k||null;
this.__iD=l||window;

if(qx.core.Setting.get(d)===c){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__iE,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__iE:function(e,f,g){if(this.__iC){this.handleError(new qx.core.WindowError(e,f,g));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(d)===c){var self=this;
return function(){if(!self.__iC){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(j){self.handleError(j);
}};
}else{return i;
}},handleError:function(a){if(this.__iC){this.__iC.call(this.__iD,a);
}}},defer:function(h){qx.core.Setting.define(d,c);
h.setErrorHandler(null,null);
}});
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
(function(){var c="qx.event.type.Event";
qx.Class.define(c,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
this._type=null;
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
},stop:function(){this.stopPropagation();
this.preventDefault();
},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(l){this._type=l;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(b){this._eventPhase=b;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(j){this._target=j;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(a){this._currentTarget=a;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(k){this._relatedTarget=k;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(f){this._originalTarget=f;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__hS:null,__hT:null,init:function(b,c,d){arguments.callee.base.call(this,false,d);
this.__hS=b;
this.__hT=c;
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
(function(){var d="qx.event.IEventHandler";
qx.Interface.define(d,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(h,i){},registerEvent:function(e,f,g){},unregisterEvent:function(a,b,c){}}});
})();
(function(){var r="ready",q="qx.client",p="mshtml",o="load",n="unload",m="qx.event.handler.Application",l="complete",k="gecko|opera|webkit",j="left",i="DOMContentLoaded",h="shutdown";
qx.Class.define(m,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(z){arguments.callee.base.call(this);
this._window=z.getWindow();
this.__gn=false;
this.__go=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gp:false,onScriptLoaded:function(){this.__gp=true;
var s=qx.event.handler.Application.$$instance;

if(s){s.__gs();
}}},members:{canHandleEvent:function(w,x){},registerEvent:function(a,b,c){},unregisterEvent:function(d,f,g){},__gq:null,__gn:null,__go:null,__gr:null,__gs:function(){var t=qx.event.handler.Application;
if(!this.__gq&&this.__gn&&t.__gp){if(qx.core.Variant.isSet(q,p)){if(qx.event.Registration.hasListener(this._window,r)){this.__gq=true;
qx.event.Registration.fireEvent(this._window,r);
}}else{this.__gq=true;
qx.event.Registration.fireEvent(this._window,r);
}}},isApplicationReady:function(){return this.__gq;
},_initObserver:function(){if(qx.$$domReady||document.readyState==l){this.__gn=true;
this.__gs();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(q,k)){qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(q,p)){var self=this;
var u=function(){try{document.documentElement.doScroll(j);

if(document.body){self._onNativeLoadWrapped();
}}catch(v){window.setTimeout(u,100);
}};
u();
}qx.bom.Event.addNativeListener(this._window,o,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,n,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,o,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,n,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gn=true;
this.__gs();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gr){this.__gr=true;

try{qx.event.Registration.fireEvent(this._window,h);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(y){qx.event.Registration.addHandler(y);
}});
})();
(function(){var r=":",q="qx.client",p="anonymous",o="...",n="qx.dev.StackTrace",m="",l="\n",k="/source/class/",j=".";
qx.Bootstrap.define(n,{statics:{getStackTrace:qx.core.Variant.select(q,{"gecko":function(){try{throw new Error();
}catch(N){var V=this.getStackTraceFromError(N);
qx.lang.Array.removeAt(V,0);
var T=this.getStackTraceFromCaller(arguments);
var R=T.length>V.length?T:V;

for(var i=0;i<Math.min(T.length,V.length);i++){var S=T[i];

if(S.indexOf(p)>=0){continue;
}var ba=S.split(r);

if(ba.length!=2){continue;
}var X=ba[0];
var Q=ba[1];
var P=V[i];
var bb=P.split(r);
var W=bb[0];
var O=bb[1];

if(qx.Class.getByName(W)){var U=W;
}else{U=X;
}var Y=U+r;

if(Q){Y+=Q+r;
}Y+=O;
R[i]=Y;
}return R;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var s;

try{s.bar();
}catch(bc){var t=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(t,0);
return t;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(q,{"opera":function(M){return [];
},"default":function(C){var H=[];
var G=qx.lang.Function.getCaller(C);
var D={};

while(G){var E=qx.lang.Function.getName(G);
H.push(E);

try{G=G.caller;
}catch(a){break;
}
if(!G){break;
}var F=qx.core.ObjectRegistry.toHashCode(G);

if(D[F]){H.push(o);
break;
}D[F]=G;
}return H;
}}),getStackTraceFromError:qx.core.Variant.select(q,{"gecko":function(u){if(!u.stack){return [];
}var A=/@(.+):(\d+)$/gm;
var v;
var w=[];

while((v=A.exec(u.stack))!=null){var x=v[1];
var z=v[2];
var y=this.__iS(x);
w.push(y+r+z);
}return w;
},"webkit":function(B){if(B.sourceURL&&B.line){return [this.__iS(B.sourceURL)+r+B.line];
}else{return [];
}},"opera":function(b){if(b.message.indexOf("Backtrace:")<0){return [];
}var d=[];
var e=qx.lang.String.trim(b.message.split("Backtrace:")[1]);
var f=e.split(l);

for(var i=0;i<f.length;i++){var c=f[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(c&&c.length>=2){var h=c[1];
var g=this.__iS(c[2]);
d.push(g+r+h);
}}return d;
},"default":function(){return [];
}}),__iS:function(I){var L=k;
var J=I.indexOf(L);
var K=(J==-1)?I:I.substring(J+L.length).replace(/\//g,j).replace(/\.js$/,m);
return K;
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
},poolObject:function(a){if(!this.__eG){return;
}var b=a.classname;
var c=this.__eG[b];

if(a.$$pooled){throw new Error("Object is already pooled: "+a);
}
if(!c){this.__eG[b]=c=[];
}if(c.length>this.getSize()){if(a.destroy){a.destroy();
}else{a.dispose();
}return;
}a.$$pooled=true;
c.push(a);
}},destruct:function(){var n=this.__eG;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__eG;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var c="Don't use 'disposeFields' - instead assign directly to 'null'",b="qx.util.DisposeUtil";
qx.Class.define(b,{statics:{disposeFields:function(f,g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
var name;

for(var i=0,l=g.length;i<l;i++){var name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}f[name]=null;
}},disposeObjects:function(d,e){var name;

for(var i=0,l=e.length;i<l;i++){name=e[i];

if(d[name]==null||!d.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(d[name].dispose){d[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}d[name]=null;
}},disposeArray:function(r,s){var u=r[s];

if(!u){return;
}if(qx.core.ObjectRegistry.inShutDown){r[s]=null;
return;
}try{var t;

for(var i=u.length-1;i>=0;i--){t=u[i];

if(t){t.dispose();
}}}catch(m){throw new Error("The array field: "+s+" of object: "+r+" has non disposable entries: "+m);
}u.length=0;
r[s]=null;
},disposeMap:function(n,o){var p=n[o];

if(!p){return;
}if(qx.core.ObjectRegistry.inShutDown){n[o]=null;
return;
}try{for(var q in p){if(p.hasOwnProperty(q)){p[q].dispose();
}}}catch(a){throw new Error("The map field: "+o+" of object: "+n+" has non disposable entries: "+a);
}n[o]=null;
},disposeTriggeredBy:function(h,j){var k=j.dispose;
j.dispose=function(){k.call(j);
h.dispose();
};
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
},dispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
}}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,e){return !event.getBubbles();
},dispatchEvent:function(f,event,g){var k,h;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var m=this._manager.getListeners(f,g,false);

if(m){for(var i=0,l=m.length;i<l;i++){var j=m[i].context||f;
m[i].handler.call(j,event);
}}}},defer:function(c){qx.event.Registration.addDispatcher(c);
}});
})();
(function(){var X="get",W="",V="[",U="last",T="change",S="]",R=".",Q="Number",P="String",O="set",bn="deepBinding",bm="item",bl="reset",bk="' (",bj="Boolean",bi=").",bh=") to the object '",bg="Integer",bf="qx.data.SingleValueBinding",be="No event could be found for the property",bc="PositiveNumber",bd="Binding from '",ba="PositiveInteger",bb="Binding does not exist!",Y="Date";
qx.Class.define(bf,{statics:{DEBUG_ON:false,__fa:{},bind:function(o,p,q,r,s){var C=this.__fc(o,p,q,r,s);
var x=p.split(R);
var u=this.__fj(x);
var B=[];
var y=[];
var z=[];
var v=[];
var w=o;
for(var i=0;i<x.length;i++){if(u[i]!==W){v.push(T);
}else{v.push(this.__fe(w,x[i]));
}B[i]=w;
if(i==x.length-1){if(u[i]!==W){var F=u[i]===U?w.length-1:u[i];
var t=w.getItem(F);
this.__fi(t,q,r,s,o);
z[i]=this.__fk(w,v[i],q,r,s,u[i]);
}else{if(x[i]!=null&&w[X+qx.lang.String.firstUp(x[i])]!=null){var t=w[X+qx.lang.String.firstUp(x[i])]();
this.__fi(t,q,r,s,o);
}z[i]=this.__fk(w,v[i],q,r,s);
}}else{var D={index:i,propertyNames:x,sources:B,listenerIds:z,arrayIndexValues:u,targetObject:q,targetPropertyChain:r,options:s,listeners:y};
var A=qx.lang.Function.bind(this.__fb,this,D);
y.push(A);
z[i]=w.addListener(v[i],A);
}if(w[X+qx.lang.String.firstUp(x[i])]==null){w=null;
}else if(u[i]!==W){w=w[X+qx.lang.String.firstUp(x[i])](u[i]);
}else{w=w[X+qx.lang.String.firstUp(x[i])]();
}
if(!w){break;
}}var E={type:bn,listenerIds:z,sources:B,targetListenerIds:C.listenerIds,targets:C.targets};
this.__fl(E,o,p,q,r);
return E;
},__fb:function(G){if(G.options&&G.options.onUpdate){G.options.onUpdate(G.sources[G.index],G.targetObject);
}for(var j=G.index+1;j<G.propertyNames.length;j++){var K=G.sources[j];
G.sources[j]=null;

if(!K){continue;
}K.removeListenerById(G.listenerIds[j]);
}var K=G.sources[G.index];
for(var j=G.index+1;j<G.propertyNames.length;j++){if(G.arrayIndexValues[j-1]!==W){K=K[X+qx.lang.String.firstUp(G.propertyNames[j-1])](G.arrayIndexValues[j-1]);
}else{K=K[X+qx.lang.String.firstUp(G.propertyNames[j-1])]();
}G.sources[j]=K;
if(!K){this.__ff(G.targetObject,G.targetPropertyChain);
break;
}if(j==G.propertyNames.length-1){if(qx.Class.implementsInterface(K,qx.data.IListData)){var L=G.arrayIndexValues[j]===U?K.length-1:G.arrayIndexValues[j];
var I=K.getItem(L);
this.__fi(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
G.listenerIds[j]=this.__fk(K,T,G.targetObject,G.targetPropertyChain,G.options,G.arrayIndexValues[j]);
}else{if(G.propertyNames[j]!=null&&K[X+qx.lang.String.firstUp(G.propertyNames[j])]!=null){var I=K[X+qx.lang.String.firstUp(G.propertyNames[j])]();
this.__fi(I,G.targetObject,G.targetPropertyChain,G.options,G.sources[G.index]);
}var J=this.__fe(K,G.propertyNames[j]);
G.listenerIds[j]=this.__fk(K,J,G.targetObject,G.targetPropertyChain,G.options);
}}else{if(G.listeners[j]==null){var H=qx.lang.Function.bind(this.__fb,this,G);
G.listeners.push(H);
}if(qx.Class.implementsInterface(K,qx.data.IListData)){var J=T;
}else{var J=this.__fe(K,G.propertyNames[j]);
}G.listenerIds[j]=K.addListener(J,G.listeners[j]);
}}},__fc:function(bs,bt,bu,bv,bw){var bA=bv.split(R);
var by=this.__fj(bA);
var bF=[];
var bE=[];
var bC=[];
var bB=[];
var bz=bu;
for(var i=0;i<bA.length-1;i++){if(by[i]!==W){bB.push(T);
}else{try{bB.push(this.__fe(bz,bA[i]));
}catch(e){break;
}}bF[i]=bz;
var bD=function(){for(var j=i+1;j<bA.length-1;j++){var bX=bF[j];
bF[j]=null;

if(!bX){continue;
}bX.removeListenerById(bC[j]);
}var bX=bF[i];
for(var j=i+1;j<bA.length-1;j++){var bV=qx.lang.String.firstUp(bA[j-1]);
if(by[j-1]!==W){var bY=by[j-1]===U?bX.getLength()-1:by[j-1];
bX=bX[X+bV](bY);
}else{bX=bX[X+bV]();
}bF[j]=bX;
if(bE[j]==null){bE.push(bD);
}if(qx.Class.implementsInterface(bX,qx.data.IListData)){var bW=T;
}else{try{var bW=qx.data.SingleValueBinding.__fe(bX,bA[j]);
}catch(e){break;
}}bC[j]=bX.addListener(bW,bE[j]);
}qx.data.SingleValueBinding.__fd(bs,bt,bu,bv);
};
bE.push(bD);
bC[i]=bz.addListener(bB[i],bD);
var bx=qx.lang.String.firstUp(bA[i]);
if(bz[X+bx]==null){bz=null;
}else if(by[i]!==W){bz=bz[X+bx](by[i]);
}else{bz=bz[X+bx]();
}
if(!bz){break;
}}return {listenerIds:bC,targets:bF};
},__fd:function(cc,cd,ce,cf){var cj=this.__fh(cc,cd);

if(cj!=null){var cl=cd.substring(cd.lastIndexOf(R)+1,cd.length);
if(cl.charAt(cl.length-1)==S){var cg=cl.substring(cl.lastIndexOf(V)+1,cl.length-1);
var ci=cl.substring(0,cl.lastIndexOf(V));
var ck=cj[X+qx.lang.String.firstUp(ci)]();

if(cg==U){cg=ck.length-1;
}
if(ck!=null){var ch=ck.getItem(cg);
}}else{var ch=cj[X+qx.lang.String.firstUp(cl)]();
}}this.__fg(ce,cf,ch);
},__fe:function(db,dc){var dd=this.__fn(db,dc);
if(dd==null){if(qx.Class.supportsEvent(db.constructor,dc)){dd=dc;
}else if(qx.Class.supportsEvent(db.constructor,T+qx.lang.String.firstUp(dc))){dd=T+qx.lang.String.firstUp(dc);
}else{throw new qx.core.AssertionError(be,dc);
}}return dd;
},__ff:function(cL,cM){var cN=this.__fh(cL,cM);

if(cN!=null){var cO=cM.substring(cM.lastIndexOf(R)+1,cM.length);
if(cO.charAt(cO.length-1)==S){this.__fg(cL,cM,null);
return;
}if(cN[bl+qx.lang.String.firstUp(cO)]!=undefined){cN[bl+qx.lang.String.firstUp(cO)]();
}else{cN[O+qx.lang.String.firstUp(cO)](null);
}}},__fg:function(cv,cw,cx){var cB=this.__fh(cv,cw);

if(cB!=null){var cC=cw.substring(cw.lastIndexOf(R)+1,cw.length);
if(cC.charAt(cC.length-1)==S){var cy=cC.substring(cC.lastIndexOf(V)+1,cC.length-1);
var cA=cC.substring(0,cC.lastIndexOf(V));
var cz=cB[X+qx.lang.String.firstUp(cA)]();

if(cy==U){cy=cz.length-1;
}
if(cz!=null){cz.setItem(cy,cx);
}}else{cB[O+qx.lang.String.firstUp(cC)](cx);
}}},__fh:function(a,b){var f=b.split(R);
var g=a;
for(var i=0;i<f.length-1;i++){try{var d=f[i];
if(d.indexOf(S)==d.length-1){var c=d.substring(d.indexOf(V)+1,d.length-1);
d=d.substring(0,d.indexOf(V));
}g=g[X+qx.lang.String.firstUp(d)]();

if(c!=null){if(c==U){c=g.length-1;
}g=g.getItem(c);
c=null;
}}catch(bo){return null;
}}return g;
},__fi:function(bM,bN,bO,bP,bQ){bM=this.__fm(bM,bN,bO,bP);
if(bM==null){this.__ff(bN,bO);
}if(bM!=undefined){try{this.__fg(bN,bO,bM);
if(bP&&bP.onUpdate){bP.onUpdate(bQ,bN,bM);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bP&&bP.onSetFail){bP.onSetFail(e);
}else{this.warn("Failed so set value "+bM+" on "+bN+". Error message: "+e);
}}}},__fj:function(bJ){var bK=[];
for(var i=0;i<bJ.length;i++){var name=bJ[i];
if(qx.lang.String.endsWith(name,S)){var bL=name.substring(name.indexOf(V)+1,name.indexOf(S));
if(name.indexOf(S)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bL!==U){if(bL==W||isNaN(parseInt(bL))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(V)!=0){bJ[i]=name.substring(0,name.indexOf(V));
bK[i]=W;
bK[i+1]=bL;
bJ.splice(i+1,0,bm);
i++;
}else{bK[i]=bL;
bJ.splice(i,1,bm);
}}else{bK[i]=W;
}}return bK;
},__fk:function(cm,cn,co,cp,cq,cr){var cs;
{};
var cu=function(cH,e){if(cH!==W){if(cH===U){cH=cm.length-1;
}var cK=cm.getItem(cH);
if(cK==undefined){qx.data.SingleValueBinding.__ff(co,cp);
}var cI=e.getData().start;
var cJ=e.getData().end;

if(cH<cI||cH>cJ){return;
}}else{var cK=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+cm+" by "+cn+" to "+co+" ("+cp+")");
qx.log.Logger.debug("Data before conversion: "+cK);
}cK=qx.data.SingleValueBinding.__fm(cK,co,cp,cq);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+cK);
}try{if(cK!=undefined){qx.data.SingleValueBinding.__fg(co,cp,cK);
}else{qx.data.SingleValueBinding.__ff(co,cp);
}if(cq&&cq.onUpdate){cq.onUpdate(cm,co,cK);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cq&&cq.onSetFail){cq.onSetFail(e);
}else{this.warn("Failed so set value "+cK+" on "+co+". Error message: "+e);
}}};
if(!cr){cr=W;
}cu=qx.lang.Function.bind(cu,cm,cr);
var ct=cm.addListener(cn,cu);
return ct;
},__fl:function(h,k,l,m,n){if(this.__fa[k.toHashCode()]===undefined){this.__fa[k.toHashCode()]=[];
}this.__fa[k.toHashCode()].push([h,k,l,m,n]);
},__fm:function(cP,cQ,cR,cS){if(cS&&cS.converter){var cU;

if(cQ.getModel){cU=cQ.getModel();
}return cS.converter(cP,cU);
}else{var cW=this.__fh(cQ,cR);
var cX=cR.substring(cR.lastIndexOf(R)+1,cR.length);
if(cW==null){return cP;
}var cV=qx.Class.getPropertyDefinition(cW.constructor,cX);
var cT=cV==null?W:cV.check;
return this.__fo(cP,cT);
}},__fn:function(bp,bq){var br=qx.Class.getPropertyDefinition(bp.constructor,bq);

if(br==null){return null;
}return br.event;
},__fo:function(bR,bS){var bT=qx.lang.Type.getClass(bR);
if((bT==Q||bT==P)&&(bS==bg||bS==ba)){bR=parseInt(bR);
}if((bT==bj||bT==Q||bT==Y)&&bS==P){bR=bR+W;
}if((bT==Q||bT==P)&&(bS==Q||bS==bc)){bR=parseFloat(bR);
}return bR;
},removeBindingFromObject:function(bG,bH){if(bH.type==bn){for(var i=0;i<bH.sources.length;i++){if(bH.sources[i]){bH.sources[i].removeListenerById(bH.listenerIds[i]);
}}for(var i=0;i<bH.targets.length;i++){if(bH.targets[i]){bH.targets[i].removeListenerById(bH.targetListenerIds[i]);
}}}else{bG.removeListenerById(bH);
}var bI=this.__fa[bG.toHashCode()];
if(bI!=undefined){for(var i=0;i<bI.length;i++){if(bI[i][0]==bH){qx.lang.Array.remove(bI,bI[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(cY){{};
var da=this.__fa[cY.toHashCode()];

if(da!=undefined){for(var i=da.length-1;i>=0;i--){this.removeBindingFromObject(cY,da[i][0]);
}}},getAllBindingsForObject:function(bU){if(this.__fa[bU.toHashCode()]===undefined){this.__fa[bU.toHashCode()]=[];
}return this.__fa[bU.toHashCode()];
},removeAllBindings:function(){for(var cb in this.__fa){var ca=qx.core.ObjectRegistry.fromHashCode(cb);
if(ca==null){delete this.__fa[cb];
continue;
}this.removeAllBindingsForObject(ca);
}this.__fa={};
},getAllBindings:function(){return this.__fa;
},showBindingInLog:function(cD,cE){var cG;
for(var i=0;i<this.__fa[cD.toHashCode()].length;i++){if(this.__fa[cD.toHashCode()][i][0]==cE){cG=this.__fa[cD.toHashCode()][i];
break;
}}
if(cG===undefined){var cF=bb;
}else{var cF=bd+cG[1]+bk+cG[2]+bh+cG[3]+bk+cG[4]+bi;
}qx.log.Logger.debug(cF);
},showAllBindingsInLog:function(){for(var N in this.__fa){var M=qx.core.ObjectRegistry.fromHashCode(N);

for(var i=0;i<this.__fa[N].length;i++){this.showBindingInLog(M,this.__fa[N][i][0]);
}}}}});
})();
(function(){var e=": ",d="qx.type.BaseError",c="";
qx.Class.define(d,{extend:Error,construct:function(a,b){Error.call(this,b);
this.__bX=a||c;
this.message=b||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bX:null,message:null,getComment:function(){return this.__bX;
},toString:function(){return this.__bX+e+this.message;
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
(function(){var b="qx.event.handler.Object";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){return qx.Class.supportsEvent(f.constructor,g);
},registerEvent:function(h,i,j){},unregisterEvent:function(c,d,e){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.util.ValueManager",b="abstract";
qx.Class.define(c,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(f){return this._dynamic[f];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(a){if(a&&this._dynamic[a]){return this._dynamic[a];
}return a;
},_setDynamic:function(e){this._dynamic=e;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="/",m="0",l="qx/static",k="http://",j="https://",i="file://",h="qx.util.AliasManager",g="singleton",f=".",e="static";
qx.Class.define(h,{type:g,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__fA={};
this.add(e,l);
},members:{__fA:null,_preprocess:function(r){var u=this._getDynamic();

if(u[r]===false){return r;
}else if(u[r]===undefined){if(r.charAt(0)===n||r.charAt(0)===f||r.indexOf(k)===0||r.indexOf(j)===m||r.indexOf(i)===0){u[r]=false;
return r;
}
if(this.__fA[r]){return this.__fA[r];
}var t=r.substring(0,r.indexOf(n));
var s=this.__fA[t];

if(s!==undefined){u[r]=s+r.substring(t.length);
}}return r;
},add:function(a,b){this.__fA[a]=b;
var d=this._getDynamic();
for(var c in d){if(c.substring(0,c.indexOf(n))===a){d[c]=b+c.substring(a.length);
}}},remove:function(q){delete this.__fA[q];
},resolve:function(o){var p=this._getDynamic();

if(o!==null){o=this._preprocess(o);
}return p[o]||o;
}},destruct:function(){this.__fA=null;
}});
})();
(function(){var t="px",s="qx.client",r="div",q="img",p="",o="scale-x",n="mshtml",m="no-repeat",l="scale",k="scale-y",N="qx/icon",M="repeat",L=".png",K="crop",J="webkit",I="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",H='<div style="',G="repeat-y",F='<img src="',E="qx.bom.element.Decoration",A="', sizingMethod='",B="png",y="')",z='"/>',w='" style="',x="none",u=" ",v="repeat-x",C='"></div>',D="absolute";
qx.Class.define(E,{statics:{DEBUG:false,__iT:{},__iU:qx.core.Variant.isSet(s,n),__iV:qx.core.Variant.select(s,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__iW:{"scale-x":q,"scale-y":q,"scale":q,"repeat":r,"no-repeat":r,"repeat-x":r,"repeat-y":r},update:function(bD,bE,bF,bG){var bI=this.getTagName(bF,bE);

if(bI!=bD.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bJ=this.getAttributes(bE,bF,bG);

if(bI===q){bD.src=bJ.src;
}if(bD.style.backgroundPosition!=p&&bJ.style.backgroundPosition===undefined){bJ.style.backgroundPosition=null;
}if(bD.style.clip!=p&&bJ.style.clip===undefined){bJ.style.clip=null;
}var bH=qx.bom.element.Style;
bH.setStyles(bD,bJ.style);
},create:function(bl,bm,bn){var bo=this.getTagName(bm,bl);
var bq=this.getAttributes(bl,bm,bn);
var bp=qx.bom.element.Style.compile(bq.style);

if(bo===q){return F+bq.src+w+bp+z;
}else{return H+bp+C;
}},getTagName:function(bj,bk){if(qx.core.Variant.isSet(s,n)){if(bk&&this.__iU&&this.__iV[bj]&&qx.lang.String.endsWith(bk,L)){return r;
}}return this.__iW[bj];
},getAttributes:function(T,U,V){if(!V){V={};
}
if(!V.position){V.position=D;
}
if(qx.core.Variant.isSet(s,n)){V.fontSize=0;
V.lineHeight=0;
}else if(qx.core.Variant.isSet(s,J)){V.WebkitUserDrag=x;
}var X=qx.util.ResourceManager.getInstance().getImageFormat(T)||qx.io.ImageLoader.getFormat(T);
{};
var W;
if(this.__iU&&this.__iV[U]&&X===B){W=this.__ja(V,U,T);
}else{if(U===l){W=this.__jb(V,U,T);
}else if(U===o||U===k){W=this.__jc(V,U,T);
}else{W=this.__jf(V,U,T);
}}return W;
},__iX:function(Y,ba,bb){if(Y.width==null&&ba!=null){Y.width=ba+t;
}
if(Y.height==null&&bb!=null){Y.height=bb+t;
}return Y;
},__iY:function(a){var b=qx.util.ResourceManager.getInstance().getImageWidth(a)||qx.io.ImageLoader.getWidth(a);
var c=qx.util.ResourceManager.getInstance().getImageHeight(a)||qx.io.ImageLoader.getHeight(a);
return {width:b,height:c};
},__ja:function(bc,bd,be){var bi=this.__iY(be);
bc=this.__iX(bc,bi.width,bi.height);
var bh=bd==m?K:l;
var bf=I+qx.util.ResourceManager.getInstance().toUri(be)+A+bh+y;
bc.filter=bf;
bc.backgroundImage=bc.backgroundRepeat=p;
return {style:bc};
},__jb:function(bK,bL,bM){var bN=qx.util.ResourceManager.getInstance().toUri(bM);
var bO=this.__iY(bM);
bK=this.__iX(bK,bO.width,bO.height);
return {src:bN,style:bK};
},__jc:function(bP,bQ,bR){var bV=qx.util.ResourceManager.getInstance();
var bU=bV.isClippedImage(bR);
var bW=this.__iY(bR);

if(bU){var bT=bV.getData(bR);
var bS=bV.toUri(bT[4]);

if(bQ===o){bP=this.__jd(bP,bT,bW.height);
}else{bP=this.__je(bP,bT,bW.width);
}return {src:bS,style:bP};
}else{{};

if(bQ==o){bP.height=bW.height==null?null:bW.height+t;
}else if(bQ==k){bP.width=bW.width==null?null:bW.width+t;
}var bS=bV.toUri(bR);
return {src:bS,style:bP};
}},__jd:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().getImageHeight(bs[4]);
br.clip={top:-bs[6],height:bt};
br.height=bu+t;
if(br.top!=null){br.top=(parseInt(br.top,10)+bs[6])+t;
}else if(br.bottom!=null){br.bottom=(parseInt(br.bottom,10)+bt-bu-bs[6])+t;
}return br;
},__je:function(P,Q,R){var S=qx.util.ResourceManager.getInstance().getImageWidth(Q[4]);
P.clip={left:-Q[5],width:R};
P.width=S+t;
if(P.left!=null){P.left=(parseInt(P.left,10)+Q[5])+t;
}else if(P.right!=null){P.right=(parseInt(P.right,10)+R-S-Q[5])+t;
}return P;
},__jf:function(bv,bw,bx){var bC=qx.util.ResourceManager.getInstance().isClippedImage(bx);
var bB=this.__iY(bx);
if(bC&&bw!==M){var bA=qx.util.ResourceManager.getInstance().getData(bx);
var bz=qx.bom.element.Background.getStyles(bA[4],bw,bA[5],bA[6]);

for(var by in bz){bv[by]=bz[by];
}
if(bB.width!=null&&bv.width==null&&(bw==G||bw===m)){bv.width=bB.width+t;
}
if(bB.height!=null&&bv.height==null&&(bw==v||bw===m)){bv.height=bB.height+t;
}return {style:bv};
}else{{};
bv=this.__iX(bv,bB.width,bB.height);
bv=this.__jg(bv,bx,bw);
return {style:bv};
}},__jg:function(d,e,f){var top=null;
var j=null;

if(d.backgroundPosition){var g=d.backgroundPosition.split(u);
j=parseInt(g[0]);

if(isNaN(j)){j=g[0];
}top=parseInt(g[1]);

if(isNaN(top)){top=g[1];
}}var i=qx.bom.element.Background.getStyles(e,f,j,top);

for(var h in i){d[h]=i[h];
}if(d.filter){d.filter=p;
}return d;
},__jh:function(O){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(O)&&O.indexOf(N)==-1){if(!this.__iT[O]){qx.log.Logger.debug("Potential clipped image candidate: "+O);
this.__iT[O]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(s,{"mshtml":function(){return qx.bom.element.Decoration.__iU;
},"default":function(){return false;
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
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?b:n;
}}});
})();
(function(){var o="n-resize",n="e-resize",m="nw-resize",l="ne-resize",k="",j="cursor:",i="qx.client",h=";",g="qx.bom.element.Cursor",f="cursor",e="hand";
qx.Class.define(g,{statics:{__dR:qx.core.Variant.select(i,{"mshtml":{"cursor":e,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"opera":{"col-resize":n,"row-resize":o,"ew-resize":n,"ns-resize":o,"nesw-resize":l,"nwse-resize":m},"default":{}}),compile:function(b){return j+(this.__dR[b]||b)+h;
},get:function(p,q){return qx.bom.element.Style.get(p,f,q,false);
},set:function(c,d){c.style.cursor=this.__dR[d]||d;
},reset:function(a){a.style.cursor=k;
}}});
})();
(function(){var q="",p="qx.client",o=";",n="filter",m="opacity:",l="opacity",k="MozOpacity",j=");",i=")",h="zoom:1;filter:alpha(opacity=",e="qx.bom.element.Opacity",g="alpha(opacity=",f="-moz-opacity:";
qx.Class.define(e,{statics:{compile:qx.core.Variant.select(p,{"mshtml":function(c){if(c>=1){return q;
}
if(c<0.00001){c=0;
}return h+(c*100)+j;
},"gecko":function(s){if(s==1){s=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return f+s+o;
}else{return m+s+o;
}},"default":function(d){if(d==1){return q;
}return m+d+o;
}}),set:qx.core.Variant.select(p,{"mshtml":function(B,C){var D=qx.bom.element.Style.get(B,n,qx.bom.element.Style.COMPUTED_MODE,false);
if(C>=1){B.style.filter=D.replace(/alpha\([^\)]*\)/gi,q);
return;
}
if(C<0.00001){C=0;
}if(!B.currentStyle||!B.currentStyle.hasLayout){B.style.zoom=1;
}B.style.filter=D.replace(/alpha\([^\)]*\)/gi,q)+g+C*100+i;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(a,b){if(b==1){b=q;
}a.style.opacity=b;
}}),reset:qx.core.Variant.select(p,{"mshtml":function(E){var F=qx.bom.element.Style.get(E,n,qx.bom.element.Style.COMPUTED_MODE,false);
E.style.filter=F.replace(/alpha\([^\)]*\)/gi,q);
},"gecko":function(r){if(qx.bom.client.Engine.VERSION<1.7){r.style.MozOpacity=q;
}else{r.style.opacity=q;
}},"default":function(K){K.style.opacity=q;
}}),get:qx.core.Variant.select(p,{"mshtml":function(G,H){var I=qx.bom.element.Style.get(G,n,H,false);

if(I){var J=I.match(/alpha\(opacity=(.*)\)/);

if(J&&J[1]){return parseFloat(J[1])/100;
}}return 1.0;
},"gecko":function(t,u){var v=qx.bom.element.Style.get(t,qx.bom.client.Engine.VERSION<1.7?k:l,u,false);

if(v==0.999999){v=1.0;
}
if(v!=null){return parseFloat(v);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,l,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})}});
})();
(function(){var x="qx.client",w="",v="boxSizing",u="box-sizing",t=":",s="border-box",r="qx.bom.element.BoxSizing",q="KhtmlBoxSizing",p="-moz-box-sizing",o="WebkitBoxSizing",k=";",n="-khtml-box-sizing",m="content-box",j="-webkit-box-sizing",h="MozBoxSizing";
qx.Class.define(r,{statics:{__bT:qx.core.Variant.select(x,{"mshtml":null,"webkit":[v,q,o],"gecko":[h],"opera":[v]}),__bU:qx.core.Variant.select(x,{"mshtml":null,"webkit":[u,n,j],"gecko":[p],"opera":[u]}),__bV:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__bW:function(a){var b=this.__bV;
return b.tags[a.tagName.toLowerCase()]||b.types[a.type];
},compile:qx.core.Variant.select(x,{"mshtml":function(y){{};
},"default":function(z){var B=this.__bU;
var A=w;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+t+z+k;
}}return A;
}}),get:qx.core.Variant.select(x,{"mshtml":function(G){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(G))){if(!this.__bW(G)){return m;
}}return s;
},"default":function(c){var e=this.__bT;
var d;

if(e){for(var i=0,l=e.length;i<l;i++){d=qx.bom.element.Style.get(c,e[i],null,false);

if(d!=null&&d!==w){return d;
}}}return w;
}}),set:qx.core.Variant.select(x,{"mshtml":function(f,g){{};
},"default":function(D,E){var F=this.__bT;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(C){this.set(C,w);
}}});
})();
(function(){var Q="",P="qx.client",O="hidden",N="-moz-scrollbars-none",M="overflow",L=";",K="overflowY",J=":",I="overflowX",H="overflow:",bd="none",bc="scroll",bb="borderLeftStyle",ba="borderRightStyle",Y="div",X="borderRightWidth",W="overflow-y",V="borderLeftWidth",U="-moz-scrollbars-vertical",T="100px",R="qx.bom.element.Overflow",S="overflow-x";
qx.Class.define(R,{statics:{__iM:null,getScrollbarWidth:function(){if(this.__iM!==null){return this.__iM;
}var x=qx.bom.element.Style;
var z=function(E,F){return parseInt(x.get(E,F))||0;
};
var A=function(G){return (x.get(G,ba)==bd?0:z(G,X));
};
var y=function(be){return (x.get(be,bb)==bd?0:z(be,V));
};
var C=qx.core.Variant.select(P,{"mshtml":function(bT){if(x.get(bT,K)==O||bT.clientWidth==0){return A(bT);
}return Math.max(0,bT.offsetWidth-bT.clientLeft-bT.clientWidth);
},"default":function(o){if(o.clientWidth==0){var p=x.get(o,M);
var q=(p==bc||p==U?16:0);
return Math.max(0,A(o)+q);
}return Math.max(0,(o.offsetWidth-o.clientWidth-y(o)));
}});
var B=function(l){return C(l)-A(l);
};
var t=document.createElement(Y);
var s=t.style;
s.height=s.width=T;
s.overflow=bc;
document.body.appendChild(t);
var c=B(t);
this.__iM=c?c:16;
document.body.removeChild(t);
return this.__iM;
},_compile:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bH,bI){if(bI==O){bI=N;
}return H+bI+L;
}:
function(bK,bL){return bK+J+bL+L;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bv,bw){return H+bw+L;
}:
function(br,bs){return br+J+bs+L;
},"default":function(bP,bQ){return bP+J+bQ+L;
}}),compileX:function(bJ){return this._compile(S,bJ);
},compileY:function(bY){return this._compile(W,bY);
},getX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bx,by){var bz=qx.bom.element.Style.get(bx,M,by,false);

if(bz===N){bz=O;
}return bz;
}:
function(r,u){return qx.bom.element.Style.get(r,I,u,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(d,e){return qx.bom.element.Style.get(d,M,e,false);
}:
function(ca,cb){return qx.bom.element.Style.get(ca,I,cb,false);
},"default":function(i,j){return qx.bom.element.Style.get(i,I,j,false);
}}),setX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bC,bD){if(bD==O){bD=N;
}bC.style.overflow=bD;
}:
function(bF,bG){bF.style.overflowX=bG;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bj,bk){bj.style.overflow=bk;
}:
function(ce,cf){ce.style.overflowX=cf;
},"default":function(bp,bq){bp.style.overflowX=bq;
}}),resetX:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bE){bE.style.overflow=Q;
}:
function(k){k.style.overflowX=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bA,bB){bA.style.overflow=Q;
}:
function(bW,bX){bW.style.overflowX=Q;
},"default":function(cd){cd.style.overflowX=Q;
}}),getY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(f,g){var h=qx.bom.element.Style.get(f,M,g,false);

if(h===N){h=O;
}return h;
}:
function(bl,bm){return qx.bom.element.Style.get(bl,K,bm,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bf,bg){return qx.bom.element.Style.get(bf,M,bg,false);
}:
function(bR,bS){return qx.bom.element.Style.get(bR,K,bS,false);
},"default":function(bM,bN){return qx.bom.element.Style.get(bM,K,bN,false);
}}),setY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bt,bu){if(bu===O){bu=N;
}bt.style.overflow=bu;
}:
function(v,w){v.style.overflowY=w;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bh,bi){bh.style.overflow=bi;
}:
function(bU,bV){bU.style.overflowY=bV;
},"default":function(a,b){a.style.overflowY=b;
}}),resetY:qx.core.Variant.select(P,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(D){D.style.overflow=Q;
}:
function(cc){cc.style.overflowY=Q;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bn,bo){bn.style.overflow=Q;
}:
function(m,n){m.style.overflowY=Q;
},"default":function(bO){bO.style.overflowY=Q;
}})}});
})();
(function(){var p="",o="qx.client",n="user-select",m="userSelect",l="appearance",k="style",j="MozUserModify",i="px",h="-webkit-appearance",g="styleFloat",L="-webkit-user-select",K="-moz-appearance",J="pixelHeight",I="MozAppearance",H=":",G="pixelTop",F="pixelLeft",E="text-overflow",D="-moz-user-select",C="MozUserSelect",w="qx.bom.element.Style",x="-moz-user-modify",u="-webkit-user-modify",v="WebkitUserSelect",s="-o-text-overflow",t="pixelRight",q="cssFloat",r="pixelWidth",y="pixelBottom",z=";",B="WebkitUserModify",A="WebkitAppearance";
qx.Class.define(w,{statics:{__bK:{styleNames:{"float":qx.core.Variant.select(o,{"mshtml":g,"default":q}),"appearance":qx.core.Variant.select(o,{"gecko":I,"webkit":A,"default":l}),"userSelect":qx.core.Variant.select(o,{"gecko":C,"webkit":v,"default":m}),"userModify":qx.core.Variant.select(o,{"gecko":j,"webkit":B,"default":m})},cssNames:{"appearance":qx.core.Variant.select(o,{"gecko":K,"webkit":h,"default":l}),"userSelect":qx.core.Variant.select(o,{"gecko":D,"webkit":L,"default":n}),"userModify":qx.core.Variant.select(o,{"gecko":x,"webkit":u,"default":n}),"textOverflow":qx.core.Variant.select(o,{"opera":s,"default":E})},mshtmlPixel:{width:r,height:J,left:F,right:t,top:G,bottom:y},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__bL:{},compile:function(O){var S=[];
var W=this.__bK;
var V=W.special;
var T=W.cssNames;
var R=this.__bL;
var U=qx.lang.String;
var name,Q,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=T[name]||name;
if(V[name]){S.push(V[name].compile(P));
}else{Q=R[name];

if(!Q){Q=R[name]=U.hyphenate(name);
}S.push(Q,H,P,z);
}}return S.join(p);
},setCss:qx.core.Variant.select(o,{"mshtml":function(a,b){a.style.cssText=b;
},"default":function(M,N){M.setAttribute(k,N);
}}),getCss:qx.core.Variant.select(o,{"mshtml":function(bz){return bz.style.cssText.toLowerCase();
},"default":function(bs){return bs.getAttribute(k);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(c,name,d,e){{};
var f=this.__bK;
name=f.styleNames[name]||name;
if(e!==false&&f.special[name]){return f.special[name].set(c,d);
}else{c.style[name]=d!==null?d:p;
}},setStyles:function(X,Y,ba){{};
var bg=this.__bK;
var bd=bg.styleNames;
var bf=bg.special;
var bb=X.style;

for(var be in Y){var bc=Y[be];
var name=bd[be]||be;

if(bc===undefined){if(ba!==false&&bf[name]){bf[name].reset(X);
}else{bb[name]=p;
}}else{if(ba!==false&&bf[name]){bf[name].set(X,bc);
}else{bb[name]=bc!==null?bc:p;
}}}},reset:function(bh,name,bi){var bj=this.__bK;
name=bj.styleNames[name]||name;
if(bi!==false&&bj.special[name]){return bj.special[name].reset(bh);
}else{bh.style[name]=p;
}},get:qx.core.Variant.select(o,{"mshtml":function(bk,name,bl,bm){var br=this.__bK;
name=br.styleNames[name]||name;
if(bm!==false&&br.special[name]){return br.special[name].get(bk,bl);
}if(!bk.currentStyle){return bk.style[name]||p;
}switch(bl){case this.LOCAL_MODE:return bk.style[name]||p;
case this.CASCADED_MODE:return bk.currentStyle[name]||p;
default:var bq=bk.currentStyle[name]||p;
if(/^-?[\.\d]+(px)?$/i.test(bq)){return bq;
}var bp=br.mshtmlPixel[name];

if(bp){var bn=bk.style[name];
bk.style[name]=bq||0;
var bo=bk.style[bp]+i;
bk.style[name]=bn;
return bo;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bq)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bq;
}},"default":function(bt,name,bu,bv){var by=this.__bK;
name=by.styleNames[name]||name;
if(bv!==false&&by.special[name]){return by.special[name].get(bt,bu);
}switch(bu){case this.LOCAL_MODE:return bt.style[name]||p;
case this.CASCADED_MODE:if(bt.currentStyle){return bt.currentStyle[name]||p;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bw=qx.dom.Node.getDocument(bt);
var bx=bw.defaultView.getComputedStyle(bt,null);
return bx?bx[name]:p;
}}})}});
})();
(function(){var g="CSS1Compat",f="position:absolute;width:0;height:0;width:1",e="qx.bom.Document",d="1px",c="qx.client",b="div";
qx.Class.define(e,{statics:{isQuirksMode:qx.core.Variant.select(c,{"mshtml":function(j){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (j||window).document.compatMode!==g;
}},"webkit":function(h){if(document.compatMode===undefined){var i=(h||window).document.createElement(b);
i.style.cssText=f;
return i.style.width===d?true:false;
}else{return (h||window).document.compatMode!==g;
}},"default":function(q){return (q||window).document.compatMode!==g;
}}),isStandardMode:function(a){return !this.isQuirksMode(a);
},getWidth:function(k){var l=(k||window).document;
var m=qx.bom.Viewport.getWidth(k);
var scroll=this.isStandardMode(k)?l.documentElement.scrollWidth:l.body.scrollWidth;
return Math.max(scroll,m);
},getHeight:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getHeight(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollHeight:o.body.scrollHeight;
return Math.max(scroll,p);
}}});
})();
(function(){var h="qx.client",g="qx.bom.Viewport";
qx.Class.define(g,{statics:{getWidth:qx.core.Variant.select(h,{"opera":function(a){if(qx.bom.client.Engine.VERSION<9.5){return (a||window).document.body.clientWidth;
}else{var b=(a||window).document;
return qx.bom.Document.isStandardMode(a)?b.documentElement.clientWidth:b.body.clientWidth;
}},"webkit":function(n){if(qx.bom.client.Engine.VERSION<523.15){return (n||window).innerWidth;
}else{var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}},"default":function(p){var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientWidth:q.body.clientWidth;
}}),getHeight:qx.core.Variant.select(h,{"opera":function(j){if(qx.bom.client.Engine.VERSION<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(r){if(qx.bom.client.Engine.VERSION<523.15){return (r||window).innerHeight;
}else{var s=(r||window).document;
return qx.bom.Document.isStandardMode(r)?s.documentElement.clientHeight:s.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(h,{"mshtml":function(c){var d=(c||window).document;
return d.documentElement.scrollLeft||d.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(h,{"mshtml":function(l){var m=(l||window).document;
return m.documentElement.scrollTop||m.body.scrollTop;
},"default":function(i){return (i||window).pageYOffset;
}})}});
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
(function(){var l="/",k="mshtml",j="qx.client",i="",h="?",g="string",f="qx.util.ResourceManager",e="singleton",d="qx.isSource";
qx.Class.define(f,{extend:qx.core.Object,type:e,statics:{__bH:qx.$$resources||{},__bI:{}},members:{has:function(C){return !!arguments.callee.self.__bH[C];
},getData:function(a){return arguments.callee.self.__bH[a]||null;
},getImageWidth:function(A){var B=arguments.callee.self.__bH[A];
return B?B[0]:null;
},getImageHeight:function(q){var r=arguments.callee.self.__bH[q];
return r?r[1]:null;
},getImageFormat:function(b){var c=arguments.callee.self.__bH[b];
return c?c[2]:null;
},isClippedImage:function(y){var z=arguments.callee.self.__bH[y];
return z&&z.length>4;
},toUri:function(m){if(m==null){return m;
}var n=arguments.callee.self.__bH[m];

if(!n){return m;
}
if(typeof n===g){var p=n;
}else{var p=n[3];
if(!p){return m;
}}var o=i;

if(qx.core.Variant.isSet(j,k)&&qx.bom.client.Feature.SSL){o=arguments.callee.self.__bI[p];
}return o+qx.$$libraries[p].resourceUri+l+m;
}},defer:function(s){if(qx.core.Variant.isSet(j,k)){if(qx.bom.client.Feature.SSL){for(var w in qx.$$libraries){var u=qx.$$libraries[w].resourceUri;
if(u.match(/^\/\//)!=null){s.__bI[w]=window.location.protocol;
}else if(u.match(/^\.\//)!=null&&qx.core.Setting.get(d)){var t=document.URL;
s.__bI[w]=t.substring(0,t.lastIndexOf(l));
}else if(u.match(/^http/)!=null){}else{var x=window.location.href.indexOf(h);
var v;

if(x==-1){v=window.location.href;
}else{v=window.location.href.substring(0,x);
}s.__bI[w]=v.substring(0,v.lastIndexOf(l)+1);
}}}}}});
})();
(function(){var j="qx.client",h="load",g="qx.io.ImageLoader";
qx.Bootstrap.define(g,{statics:{__jy:{},__jz:{width:null,height:null},__jA:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(k){var m=this.__jy[k];
return !!(m&&m.loaded);
},isFailed:function(n){var o=this.__jy[n];
return !!(o&&o.failed);
},isLoading:function(q){var r=this.__jy[q];
return !!(r&&r.loading);
},getFormat:function(e){var f=this.__jy[e];
return f?f.format:null;
},getSize:function(a){var b=this.__jy[a];
return b?
{width:b.width,height:b.height}:this.__jz;
},getWidth:function(c){var d=this.__jy[c];
return d?d.width:null;
},getHeight:function(x){var y=this.__jy[x];
return y?y.height:null;
},load:function(B,C,D){var E=this.__jy[B];

if(!E){E=this.__jy[B]={};
}if(C&&!D){D=window;
}if(E.loaded||E.loading||E.failed){if(C){if(E.loading){E.callbacks.push(C,D);
}else{C.call(D,B,E);
}}}else{E.loading=true;
E.callbacks=[];

if(C){E.callbacks.push(C,D);
}var G=new Image();
var F=qx.lang.Function.listener(this.__jB,this,G,B);
G.onload=F;
G.onerror=F;
G.src=B;
}},__jB:qx.event.GlobalError.observeMethod(function(event,s,t){var u=this.__jy[t];
if(event.type===h){u.loaded=true;
u.width=this.__jC(s);
u.height=this.__jD(s);
var v=this.__jA.exec(t);

if(v!=null){u.format=v[1];
}}else{u.failed=true;
}s.onload=s.onerror=null;
var w=u.callbacks;
delete u.loading;
delete u.callbacks;
for(var i=0,l=w.length;i<l;i+=2){w[i].call(w[i+1],t,u);
}}),__jC:qx.core.Variant.select(j,{"gecko":function(H){return H.naturalWidth;
},"default":function(A){return A.width;
}}),__jD:qx.core.Variant.select(j,{"gecko":function(p){return p.naturalHeight;
},"default":function(z){return z.height;
}})}});
})();
(function(){var q="number",p="0",o="px",n=";",m="background-image:url(",l=");",k="",j=")",i="background-repeat:",h=" ",e="qx.bom.element.Background",g="url(",f="background-position:";
qx.Class.define(e,{statics:{__ce:[m,null,l,f,null,n,i,null,n],__cf:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__cg:function(a,top){var b=qx.bom.client.Engine;

if(b.GECKO&&b.VERSION<1.9&&a==top&&typeof a==q){top+=0.01;
}
if(a){var c=(typeof a==q)?a+o:a;
}else{c=p;
}
if(top){var d=(typeof top==q)?top+o:top;
}else{d=p;
}return c+h+d;
},compile:function(r,s,t,top){var u=this.__cg(t,top);
var v=qx.util.ResourceManager.getInstance().toUri(r);
var w=this.__ce;
w[1]=v;
w[4]=u;
w[7]=s;
return w.join(k);
},getStyles:function(D,E,F,top){if(!D){return this.__cf;
}var G=this.__cg(F,top);
var H=qx.util.ResourceManager.getInstance().toUri(D);
var I={backgroundPosition:G,backgroundImage:g+H+j};

if(E!=null){I.backgroundRepeat=E;
}return I;
},set:function(x,y,z,A,top){var B=this.getStyles(y,z,A,top);

for(var C in B){x.style[C]=B[C];
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
(function(){var u=",",s="rgb(",o=")",n="qx.theme.manager.Color",m="qx.util.ColorUtil";
qx.Class.define(m,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(l){return this.NAMED[l]!==undefined;
},isSystemColor:function(w){return this.SYSTEM[w]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(n);
},isThemedColor:function(A){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(A);
},stringToRgb:function(a){if(this.supportsThemes()&&this.isThemedColor(a)){var a=qx.theme.manager.Color.getInstance().resolveDynamic(a);
}
if(this.isNamedColor(a)){return this.NAMED[a];
}else if(this.isSystemColor(a)){throw new Error("Could not convert system colors to RGB: "+a);
}else if(this.isRgbString(a)){return this.__fw();
}else if(this.isHex3String(a)){return this.__fy();
}else if(this.isHex6String(a)){return this.__fz();
}throw new Error("Could not parse color: "+a);
},cssStringToRgb:function(T){if(this.isNamedColor(T)){return this.NAMED[T];
}else if(this.isSystemColor(T)){throw new Error("Could not convert system colors to RGB: "+T);
}else if(this.isRgbString(T)){return this.__fw();
}else if(this.isRgbaString(T)){return this.__fx();
}else if(this.isHex3String(T)){return this.__fy();
}else if(this.isHex6String(T)){return this.__fz();
}throw new Error("Could not parse color: "+T);
},stringToRgbString:function(e){return this.rgbToRgbString(this.stringToRgb(e));
},rgbToRgbString:function(c){return s+c[0]+u+c[1]+u+c[2]+o;
},rgbToHexString:function(v){return (qx.lang.String.pad(v[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(v[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(j){return this.isThemedColor(j)||this.isNamedColor(j)||this.isHex3String(j)||this.isHex6String(j)||this.isRgbString(j);
},isCssString:function(C){return this.isSystemColor(C)||this.isNamedColor(C)||this.isHex3String(C)||this.isHex6String(C)||this.isRgbString(C);
},isHex3String:function(U){return this.REGEXP.hex3.test(U);
},isHex6String:function(B){return this.REGEXP.hex6.test(B);
},isRgbString:function(G){return this.REGEXP.rgb.test(G);
},isRgbaString:function(Y){return this.REGEXP.rgba.test(Y);
},__fw:function(){var bi=parseInt(RegExp.$1,10);
var bh=parseInt(RegExp.$2,10);
var bg=parseInt(RegExp.$3,10);
return [bi,bh,bg];
},__fx:function(){var z=parseInt(RegExp.$1,10);
var y=parseInt(RegExp.$2,10);
var x=parseInt(RegExp.$3,10);
return [z,y,x];
},__fy:function(){var X=parseInt(RegExp.$1,16)*17;
var W=parseInt(RegExp.$2,16)*17;
var V=parseInt(RegExp.$3,16)*17;
return [X,W,V];
},__fz:function(){var F=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var E=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var D=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [F,E,D];
},hex3StringToRgb:function(d){if(this.isHex3String(d)){return this.__fy(d);
}throw new Error("Invalid hex3 value: "+d);
},hex6StringToRgb:function(k){if(this.isHex6String(k)){return this.__fz(k);
}throw new Error("Invalid hex6 value: "+k);
},hexStringToRgb:function(h){if(this.isHex3String(h)){return this.__fy(h);
}
if(this.isHex6String(h)){return this.__fz(h);
}throw new Error("Invalid hex value: "+h);
},rgbToHsb:function(H){var J,K,M;
var S=H[0];
var P=H[1];
var I=H[2];
var R=(S>P)?S:P;

if(I>R){R=I;
}var L=(S<P)?S:P;

if(I<L){L=I;
}M=R/255.0;

if(R!=0){K=(R-L)/R;
}else{K=0;
}
if(K==0){J=0;
}else{var O=(R-S)/(R-L);
var Q=(R-P)/(R-L);
var N=(R-I)/(R-L);

if(S==R){J=N-Q;
}else if(P==R){J=2.0+O-N;
}else{J=4.0+Q-O;
}J=J/6.0;

if(J<0){J=J+1.0;
}}return [Math.round(J*360),Math.round(K*100),Math.round(M*100)];
},hsbToRgb:function(ba){var i,f,p,q,t;
var bb=ba[0]/360;
var bc=ba[1]/100;
var bd=ba[2]/100;

if(bb>=1.0){bb%=1.0;
}
if(bc>1.0){bc=1.0;
}
if(bd>1.0){bd=1.0;
}var be=Math.floor(255*bd);
var bf={};

if(bc==0.0){bf.red=bf.green=bf.blue=be;
}else{bb*=6.0;
i=Math.floor(bb);
f=bb-i;
p=Math.floor(be*(1.0-bc));
q=Math.floor(be*(1.0-(bc*f)));
t=Math.floor(be*(1.0-(bc*(1.0-f))));

switch(i){case 0:bf.red=be;
bf.green=t;
bf.blue=p;
break;
case 1:bf.red=q;
bf.green=be;
bf.blue=p;
break;
case 2:bf.red=p;
bf.green=be;
bf.blue=t;
break;
case 3:bf.red=p;
bf.green=q;
bf.blue=be;
break;
case 4:bf.red=t;
bf.green=p;
bf.blue=be;
break;
case 5:bf.red=be;
bf.green=p;
bf.blue=q;
break;
}}return [bf.red,bf.green,bf.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="qx.event.handler.Window";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(k){arguments.callee.base.call(this);
this._manager=k;
this._window=k.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(n,o){},registerEvent:function(s,t,u){},unregisterEvent:function(p,q,r){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var b=qx.event.handler.Window.SUPPORTED_TYPES;

for(var a in b){qx.bom.Event.addNativeListener(this._window,a,this._onNativeWrapper);
}},_stopWindowObserver:function(){var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.removeNativeListener(this._window,l,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var f=this._window;

try{var i=f.document;
}catch(e){return ;
}var g=i.documentElement;
var d=e.target||e.srcElement;

if(d==null||d===f||d===i||d===g){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,f]);
qx.event.Registration.dispatchEvent(f,event);
var h=event.getReturnValue();

if(h!=null){e.returnValue=h;
return h;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(c){qx.event.Registration.addHandler(c);
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
}},__iA:function(e){var i=this.__iz;

if(i){e.setReturnValue(i.close());
}},__iB:function(){var h=this.__iz;

if(h){h.terminate();
}}},defer:function(a){qx.event.Registration.addListener(window,g,a.__iy,a);
qx.event.Registration.addListener(window,b,a.__iB,a);
qx.event.Registration.addListener(window,d,a.__iA,a);
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
(function(){var f="qx.event.type.Native";
qx.Class.define(f,{extend:qx.event.type.Event,members:{init:function(h,i,j,k,l){arguments.callee.base.call(this,k,l);
this._target=i||qx.bom.Event.getTarget(h);
this._relatedTarget=j||qx.bom.Event.getRelatedTarget(h);

if(h.timeStamp){this._timeStamp=h.timeStamp;
}this._native=h;
this._returnValue=null;
return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
var e={};
d._native=this._cloneNativeEvent(this._native,e);
d._returnValue=this._returnValue;
return d;
},_cloneNativeEvent:function(a,b){b.preventDefault=qx.lang.Function.empty;
return b;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(g){this._returnValue=g;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var s="groupBoxes",r="boxData",q="portal.box.Box",p="portal.box.Manager",o="qx.event.type.Event",n="boxes",m="_applyActiveBox",h="loaded",g="singleton";
qx.Class.define(p,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__Fi=[];
this.__Fj=[];
this.__Fk={};
},statics:{dataKeyRoot:r,dataKeyGroupBoxes:s,dataKeyBoxes:n},events:{"loaded":o},properties:{activeBox:{init:null,check:q,apply:m}},members:{__Fi:null,__Fj:null,__Fk:null,_applyActiveBox:function(t,u){if(u!=null){u.setActive(false);
}t.setActive(true);
},load:function(){this.__Fl(window[portal.box.Manager.dataKeyRoot]);
qx.event.Registration.fireEvent(this,h);
},__Fl:function(v){var z,C,A,B,D,v;
var w=v[portal.box.Manager.dataKeyGroupBoxes];
var y=v[portal.box.Manager.dataKeyBoxes];
for(var C in w){z=w[C];
A=z.boxes;
C=z.id;
B={id:C,element:document.getElementById(C)};
this.__Fj.push(B);
this.__Fk[C]=[];
for(var k=0,l=A.length;k<l;k++){v=y[A[k]];
var x=document.getElementById(v.id);
var D=new portal.box.Box(v,x,null,C);
this.__Fi.push(D);
this.__Fk[C].push(D);
}}},getBoxes:function(){return this.__Fi;
},getGroupBoxes:function(){return this.__Fj;
},updateGroupBoxMembers:function(c,d,e){var f=qx.dom.Hierarchy.getElementIndex(e.getElement());
qx.lang.Array.remove(this.__Fk[d],e);
qx.lang.Array.insertAt(this.__Fk[c],e,f);
},getGroupBoxDataOfBox:function(a){for(var i=0,j=this.__Fj.length,b;i<j;i++){b=this.__Fk[this.__Fj[i].id];

for(var k=0,l=b.length;k<l;k++){if(b[k].getId()===a){return this.__Fj[i];
}}}return null;
}},destruct:function(){this.__Fi=this.__Fj=this.__Fk=null;
}});
})();
(function(){var s="Boolean",r="<br/><br/>",q="border",p="portal.box.Box",o="click",n="1px solid #444444",m="height",l="position",k="zIndex",j="_applyActive",c="width",i="box_content",g=" It does contain no UI widget code at all.",b="relative",a="1px solid orange",f="This is a demo application showing the low-level capabilities.",d="div",h="String";
qx.Class.define(p,{extend:qx.core.Object,construct:function(t,u,v,w){arguments.callee.base.call(this);
this.__Fm=t;
this.__Fn=t.id;

if(u!=null){qx.bom.element.Style.set(u,c,t.width);
qx.bom.element.Style.set(u,m,t.height);
this.__Fq(u,v);
}this.setElement(u);
this.setGroupBoxId(w);
this.__Fo=null;
this.__Fp=null;
if(t.resizable){this.setResizable(true);
var x={minWidth:parseInt(t.minWidth),minHeight:parseInt(t.minHeight),maxWidth:parseInt(t.maxWidth),maxHeight:parseInt(t.maxHeight),handles:t.resizeHandles};
this.__Fo=new portal.box.Resizable(this,x);
}if(t.draggable){this.setDraggable(true);
this.__Fp=new portal.box.Draggable(this);
}this.__Fr();
},properties:{element:{init:null},groupBoxId:{init:null,check:h},active:{check:s,init:false,apply:j},resizable:{check:s,init:false},draggable:{check:s,init:false}},members:{__Fn:null,__Fm:null,__Fp:null,__Fo:null,_applyActive:function(y,z){if(y){qx.bom.element.Style.set(this.getElement(),q,a);
}else{qx.bom.element.Style.set(this.getElement(),q,n);
}},getId:function(){return this.getElement()?this.getElement().id:null;
},getData:function(){return this.__Fm;
},getDraggableComponent:function(){return this.__Fp;
},getResizableComponent:function(){return this.__Fo;
},__Fq:function(A,B){if(B){for(var C in B){qx.bom.element.Style.set(C,B[C]);
}}qx.bom.element.Style.set(A,l,b);
qx.bom.element.Style.set(A,k,0);
qx.bom.Element.addListener(A,o,this.__Fs,this,true);
},__Fr:function(){var E=f+g;
E=E+r+E+r+E;
var D=qx.bom.Element.create(d,{"class":i});
D.innerHTML=E;
qx.dom.Element.insertEnd(D,this.getElement());
},__Fs:function(e){portal.box.Manager.getInstance().setActiveBox(this);
}},destruct:function(){this.resetElement();
this.__Fm=this.__Fo=this.__Fp=null;
}});
})();
(function(){var t="portal.box.Resizable",s="mouseover",r="mouseout";
qx.Class.define(t,{extend:qx.core.Object,construct:function(p,q){arguments.callee.base.call(this);
this.__Ft=p;
this.__Fu=this.__Ft.getElement();
this.__Fv={};
this.__Fw=false;
this.__Fx=null;
this.__Fy={orientation:null,lastCoord:{left:null,top:null}};
this.__Fz={minWidth:10,minHeight:10,maxWidth:null,maxHeight:null,autoHide:true,handles:3};

for(var name in this.__Fz){if(q[name]){this.__Fz[name]=q[name];
}}this.__FB();
},members:{__FA:null,__Fy:null,__Ft:null,__Fu:null,__Fv:null,__Fz:null,__Fw:false,__Fx:null,getBox:function(){return this.__Ft;
},__FB:function(){this.__FA={paddingTop:parseInt(qx.bom.element.Style.get(this.__Fu,"paddingTop")),paddingRight:parseInt(qx.bom.element.Style.get(this.__Fu,"paddingRight")),paddingBottom:parseInt(qx.bom.element.Style.get(this.__Fu,"paddingBottom")),paddingLeft:parseInt(qx.bom.element.Style.get(this.__Fu,"paddingLeft"))};

switch(this.__Fz.handles){case 1:this.__Fv.east=null;
break;
case 2:this.__Fv.south=null;
break;
case 3:this.__Fv.south=null;
this.__Fv.southeast=null;
this.__Fv.east=null;
break;
}for(var c in this.__Fv){var b=this.__Fv[c]=qx.bom.Element.create("div");
qx.bom.element.Attribute.set(b,"orientation",c);
qx.dom.Element.insertEnd(b,this.__Fu);

if(this.__Fu.id){b.id=this.__Fu.id+"_"+c;
}this.__FC(c);
this.__FD(c);
}},__FC:function(w){qx.bom.element.Class.add(this.__Fv[w],w+"Handle");
qx.bom.element.Style.set(this.__Fv[w],"visibility",this.__Fz.autoHide?"hidden":"visible");
},__FD:function(u){var v=this.__Fv[u];
qx.event.Registration.addListener(v,"mousedown",this.__FG,this);
qx.event.Registration.addListener(document.body,"mouseup",this.__FH,this);

if(this.__Fz.autoHide){qx.event.Registration.addListener(this.__Ft.getElement(),"mouseover",this.__FE,this);
qx.event.Registration.addListener(this.__Ft.getElement(),"mouseout",this.__FF,this);
}},__FE:function(e){for(var x in this.__Fv){qx.bom.element.Style.set(this.__Fv[x],"visibility","visible");
}},__FF:function(e){if(!this.__Fw){for(var y in this.__Fv){qx.bom.element.Style.set(this.__Fv[y],"visibility","hidden");
}}},__FG:function(e){e.stopPropagation();
if(e.isLeftPressed()){qx.event.Registration.addListener(document.body,"mousemove",this.__FI,this,true);
this.__Fw=true;
var z=e.getTarget();
this.__Fy.orientation=qx.bom.element.Attribute.get(z,"orientation");
this.__Fy.lastCoord.left=e.getDocumentLeft();
this.__Fy.lastCoord.top=e.getDocumentTop();
portal.box.Util.bringToFront(this.__Fu);
}},__FH:function(e){e.stopPropagation();

if(this.__Fw){qx.event.Registration.removeListener(document.body,"mousemove",this.__FI,this,true);
portal.box.Util.sendToBack(this.__Fu);

if(this.__Fz.autoHide){for(var A in this.__Fv){qx.bom.element.Style.set(this.__Fv[A],"visibility","hidden");
}}this.__Fw=false;

if(qx.core.Variant.isSet("qx.client","mshtml")){if(document.selection.type.toLowerCase()=="text"){document.selection.empty();
}}}},__FI:function(e){e.stopPropagation();

if(this.__Fw){var a={left:null,top:null};

switch(this.__Fy.orientation){case "south":a.top=e.getDocumentTop();
break;
case "southeast":a.top=e.getDocumentTop();
a.left=e.getDocumentLeft();
break;
case "east":a.left=e.getDocumentLeft();
break;
}this.__FJ(a,this.__Fy.lastCoord);
this.__Fy.lastCoord.left=e.getDocumentLeft();
this.__Fy.lastCoord.top=e.getDocumentTop();
}},__FJ:function(d,f){var l;
var k=portal.box.Util;
var m=portal.box.Manager.getInstance().getGroupBoxDataOfBox(this.__Ft.getId());
var i=portal.box.Util.getComputedDimension(m.element);

if(d.left){var l=d.left-f.left;

if(l!==0){var g=this.__Fu.clientWidth;
var n=(g+l)-(this.__FA['paddingLeft']+this.__FA['paddingRight']);

if((this.__Fz.minWidth==null||n>this.__Fz.minWidth)&&(this.__Fz.maxWidth==null||n<=this.__Fz.maxWidth)){if(qx.core.Variant.isSet("qx.client","mshtml")){var h=i.width-k.getStyleProperty(m.element,"paddingRight",true)-k.getStyleProperty(this.__Fu,"borderRightWidth",true)-k.getStyleProperty(this.__Fu,"borderLeftWidth",true)-k.getStyleProperty(this.__Fu,"marginRight",true)-k.getStyleProperty(this.__Fu,"marginLeft",true);
}else{var h=i.width-k.getStyleProperty(m.element,"paddingRight",true)-k.getStyleProperty(this.__Fu,"paddingRight",true)-k.getStyleProperty(this.__Fu,"paddingLeft",true)-k.getStyleProperty(this.__Fu,"borderRightWidth",true)-k.getStyleProperty(this.__Fu,"borderLeftWidth",true)-k.getStyleProperty(this.__Fu,"marginRight",true)-k.getStyleProperty(this.__Fu,"marginLeft",true);
}
if(h>=n){qx.bom.element.Style.set(this.__Fu,"width",n+'px');
}}}}
if(d.top){var l=d.top-f.top;
if(l!==0){var j=this.__Fu.clientHeight;
var o=(j+l)-(this.__FA['paddingTop']+this.__FA['paddingBottom']);

if((this.__Fz.minHeight==null||o>this.__Fz.minHeight)&&(this.__Fz.maxHeight==null||o<=this.__Fz.maxHeight)){qx.bom.element.Style.set(this.__Fu,"height",o+"px");
}}}}},destruct:function(){if(this.__Fz.autoHide){qx.event.Registration.removeListener(this.__Ft.getElement(),s,this.__FE,this);
qx.event.Registration.removeListener(this.__Ft.getElement(),r,this.__FF,this);
}this.__Ft=this.__Fz=this.__Fu=this.__Fv=this.__Fx=this.__FK=this.__Fy=this.__FA=null;
}});
})();
(function(){var c="abstract",b="qx.event.dispatch.AbstractBubbling";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:c,construct:function(a){this._manager=a;
},members:{_getParent:function(d){throw new Error("Missing implementation");
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
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var c="qx.event.handler.UserAction";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(a){arguments.callee.base.call(this);
this.__iG=a;
this.__iH=a.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__iG:null,__iH:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(d,e,f){}},destruct:function(){this.__iG=this.__iH=null;
},defer:function(b){qx.event.Registration.addHandler(b);
}});
})();
(function(){var y="keydown",x="qx.client",w="keypress",v="NumLock",u="keyup",t="Enter",s="0",r="9",q="-",p="PageUp",bF="+",bE="PrintScreen",bD="gecko",bC="A",bB="Z",bA="Left",bz="F5",by="Down",bx="Up",bw="F11",F="F6",G="useraction",D="F3",E="keyinput",B="Insert",C="F8",z="End",A="/",N="Delete",O="*",bb="F1",W="F4",bj="Home",be="F2",bs="F12",bo="PageDown",S="F7",bv="F9",bu="F10",bt="Right",R="text",U="Escape",V="webkit",Y="5",bc="3",bf="Meta",bl="7",bq="CapsLock",H="input",I="Control",T="Space",bi="Tab",bh="Shift",bg="Pause",bn="Unidentified",bm="qx.event.handler.Keyboard",bd="mshtml",bk="mshtml|webkit",m="6",bp="off",J="Apps",K="4",X="Alt",n="2",o="Scroll",Q="1",L="8",M="Win",P="autoComplete",ba=",",br="Backspace";
qx.Class.define(bm,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(cA){arguments.callee.base.call(this);
this.__fJ=cA;
this.__fK=cA.getWindow();
if(qx.core.Variant.isSet(x,bD)){this.__fL=this.__fK;
}else{this.__fL=this.__fK.document.documentElement;
}this.__fM={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cu){if(this._identifierToKeyCodeMap[cu]){return true;
}
if(cu.length!=1){return false;
}
if(cu>=s&&cu<=r){return true;
}
if(cu>=bC&&cu<=bB){return true;
}
switch(cu){case bF:case q:case O:case A:return true;
default:return false;
}}},members:{__fN:null,__fJ:null,__fK:null,__fL:null,__fM:null,__fO:null,__fP:null,__fQ:null,canHandleEvent:function(cD,cE){},registerEvent:function(bQ,bR,bS){},unregisterEvent:function(a,b,c){},_fireInputEvent:function(e,f){var g=this.__fR();
if(g&&g.offsetWidth!=0){var event=qx.event.Registration.createEvent(E,qx.event.type.KeyInput,[e,g,f]);
this.__fJ.dispatchEvent(g,event);
}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,G,qx.event.type.Data,[E]);
}},_fireSequenceEvent:function(bH,bI,bJ){var bK=this.__fR();
var bL=bH.keyCode;
var event=qx.event.Registration.createEvent(bI,qx.event.type.KeySequence,[bH,bK,bJ]);
this.__fJ.dispatchEvent(bK,event);
if(qx.core.Variant.isSet(x,bk)){if(bI==y&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bL)&&!this._emulateKeyPress[bL]){this._fireSequenceEvent(bH,w,bJ);
}}}if(this.__fK){qx.event.Registration.fireEvent(this.__fK,G,qx.event.type.Data,[bI]);
}},__fR:function(){var cK=this.__fJ.getHandler(qx.event.handler.Focus);
var cL=cK.getActive();
if(!cL||cL.offsetWidth==0){cL=cK.getFocus();
}if(!cL||cL.offsetWidth==0){cL=this.__fJ.getWindow().document.body;
}return cL;
},_initKeyObserver:function(){this.__fN=qx.lang.Function.listener(this.__fS,this);
this.__fQ=qx.lang.Function.listener(this.__fU,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__fL,u,this.__fN);
Event.addNativeListener(this.__fL,y,this.__fN);
Event.addNativeListener(this.__fL,w,this.__fQ);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__fL,u,this.__fN);
Event.removeNativeListener(this.__fL,y,this.__fN);
Event.removeNativeListener(this.__fL,w,this.__fQ);

for(var cC in (this.__fP||{})){var cB=this.__fP[cC];
Event.removeNativeListener(cB.target,w,cB.callback);
}delete (this.__fP);
},__fS:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(cG){cG=window.event||cG;
var cJ=cG.keyCode;
var cH=0;
var cI=cG.type;
if(!(this.__fM[cJ]==y&&cI==y)){this._idealKeyHandler(cJ,cH,cI,cG);
}if(cI==y){if(this._isNonPrintableKeyCode(cJ)||this._emulateKeyPress[cJ]){this._idealKeyHandler(cJ,cH,w,cG);
}}this.__fM[cJ]=cI;
},"gecko":function(cf){var cj=this._keyCodeFix[cf.keyCode]||cf.keyCode;
var ch=0;
var ci=cf.type;
if(qx.bom.client.Platform.WIN){var cg=cj?this._keyCodeToIdentifier(cj):this._charCodeToIdentifier(ch);

if(!(this.__fM[cg]==y&&ci==y)){this._idealKeyHandler(cj,ch,ci,cf);
}this.__fM[cg]=ci;
}else{this._idealKeyHandler(cj,ch,ci,cf);
}this.__fT(cf.target,ci,cj);
},"webkit":function(bM){var bP=0;
var bN=0;
var bO=bM.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bO==u||bO==y){bP=this._charCode2KeyCode[bM.charCode]||bM.keyCode;
}else{if(this._charCode2KeyCode[bM.charCode]){bP=this._charCode2KeyCode[bM.charCode];
}else{bN=bM.charCode;
}}this._idealKeyHandler(bP,bN,bO,bM);
}else{bP=bM.keyCode;
if(!(this.__fM[bP]==y&&bO==y)){this._idealKeyHandler(bP,bN,bO,bM);
}if(bO==y){if(this._isNonPrintableKeyCode(bP)||this._emulateKeyPress[bP]){this._idealKeyHandler(bP,bN,w,bM);
}}this.__fM[bP]=bO;
}},"opera":function(bG){this.__fO=bG.keyCode;
this._idealKeyHandler(bG.keyCode,0,bG.type,bG);
}})),__fT:qx.core.Variant.select(x,{"gecko":function(ca,cb,cc){if(cb===y&&(cc==33||cc==34||cc==38||cc==40)&&ca.type==R&&ca.tagName.toLowerCase()===H&&ca.getAttribute(P)!==bp){if(!this.__fP){this.__fP={};
}var ce=qx.core.ObjectRegistry.toHashCode(ca);

if(this.__fP[ce]){return;
}var self=this;
this.__fP[ce]={target:ca,callback:function(cv){qx.bom.Event.stopPropagation(cv);
self.__fU(cv);
}};
var cd=qx.event.GlobalError.observeMethod(this.__fP[ce].callback);
qx.bom.Event.addNativeListener(ca,w,cd);
}},"default":null}),__fU:qx.event.GlobalError.observeMethod(qx.core.Variant.select(x,{"mshtml":function(d){d=window.event||d;

if(this._charCode2KeyCode[d.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[d.keyCode],0,d.type,d);
}else{this._idealKeyHandler(0,d.keyCode,d.type,d);
}},"gecko":function(h){var k=this._keyCodeFix[h.keyCode]||h.keyCode;
var i=h.charCode;
var j=h.type;
this._idealKeyHandler(k,i,j,h);
},"webkit":function(bT){if(qx.bom.client.Engine.VERSION<525.13){var bW=0;
var bU=0;
var bV=bT.type;

if(bV==u||bV==y){bW=this._charCode2KeyCode[bT.charCode]||bT.keyCode;
}else{if(this._charCode2KeyCode[bT.charCode]){bW=this._charCode2KeyCode[bT.charCode];
}else{bU=bT.charCode;
}}this._idealKeyHandler(bW,bU,bV,bT);
}else{if(this._charCode2KeyCode[bT.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bT.keyCode],0,bT.type,bT);
}else{this._idealKeyHandler(0,bT.keyCode,bT.type,bT);
}}},"opera":function(cq){var cs=cq.keyCode;
var cr=cq.type;
if(cs!=this.__fO){this._idealKeyHandler(0,this.__fO,cr,cq);
}else{if(this._keyCodeToIdentifierMap[cq.keyCode]){this._idealKeyHandler(cq.keyCode,0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}}}})),_idealKeyHandler:function(ck,cl,cm,cn){var co;
if(ck||(!ck&&!cl)){co=this._keyCodeToIdentifier(ck);
this._fireSequenceEvent(cn,cm,co);
}else{co=this._charCodeToIdentifier(cl);
this._fireSequenceEvent(cn,w,co);
this._fireInputEvent(cn,cl);
}},_specialCharCodeMap:{8:br,9:bi,13:t,27:U,32:T},_emulateKeyPress:qx.core.Variant.select(x,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bh,17:I,18:X,20:bq,224:bf,37:bA,38:bx,39:bt,40:by,33:p,34:bo,35:z,36:bj,45:B,46:N,112:bb,113:be,114:D,115:W,116:bz,117:F,118:S,119:C,120:bv,121:bu,122:bw,123:bs,144:v,44:bE,145:o,19:bg,91:M,93:J},_numpadToCharCode:{96:s.charCodeAt(0),97:Q.charCodeAt(0),98:n.charCodeAt(0),99:bc.charCodeAt(0),100:K.charCodeAt(0),101:Y.charCodeAt(0),102:m.charCodeAt(0),103:bl.charCodeAt(0),104:L.charCodeAt(0),105:r.charCodeAt(0),106:O.charCodeAt(0),107:bF.charCodeAt(0),109:q.charCodeAt(0),110:ba.charCodeAt(0),111:A.charCodeAt(0)},_charCodeA:bC.charCodeAt(0),_charCodeZ:bB.charCodeAt(0),_charCode0:s.charCodeAt(0),_charCode9:r.charCodeAt(0),_isNonPrintableKeyCode:function(ct){return this._keyCodeToIdentifierMap[ct]?true:false;
},_isIdentifiableKeyCode:function(l){if(l>=this._charCodeA&&l<=this._charCodeZ){return true;
}if(l>=this._charCode0&&l<=this._charCode9){return true;
}if(this._specialCharCodeMap[l]){return true;
}if(this._numpadToCharCode[l]){return true;
}if(this._isNonPrintableKeyCode(l)){return true;
}return false;
},_keyCodeToIdentifier:function(bX){if(this._isIdentifiableKeyCode(bX)){var bY=this._numpadToCharCode[bX];

if(bY){return String.fromCharCode(bY);
}return (this._keyCodeToIdentifierMap[bX]||this._specialCharCodeMap[bX]||String.fromCharCode(bX));
}else{return bn;
}},_charCodeToIdentifier:function(cp){return this._specialCharCodeMap[cp]||String.fromCharCode(cp).toUpperCase();
},_identifierToKeyCode:function(cF){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cF]||cF.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__fO=this.__fJ=this.__fK=this.__fL=this.__fM=null;
},defer:function(cw,cx,cy){qx.event.Registration.addHandler(cw);
if(!cw._identifierToKeyCodeMap){cw._identifierToKeyCodeMap={};

for(var cz in cx._keyCodeToIdentifierMap){cw._identifierToKeyCodeMap[cx._keyCodeToIdentifierMap[cz]]=parseInt(cz,10);
}
for(var cz in cx._specialCharCodeMap){cw._identifierToKeyCodeMap[cx._specialCharCodeMap[cz]]=parseInt(cz,10);
}}
if(qx.core.Variant.isSet(x,bd)){cx._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(x,bD)){cx._keyCodeFix={12:cx._identifierToKeyCode(v)};
}else if(qx.core.Variant.isSet(x,V)){if(qx.bom.client.Engine.VERSION<525.13){cx._charCode2KeyCode={63289:cx._identifierToKeyCode(v),63276:cx._identifierToKeyCode(p),63277:cx._identifierToKeyCode(bo),63275:cx._identifierToKeyCode(z),63273:cx._identifierToKeyCode(bj),63234:cx._identifierToKeyCode(bA),63232:cx._identifierToKeyCode(bx),63235:cx._identifierToKeyCode(bt),63233:cx._identifierToKeyCode(by),63272:cx._identifierToKeyCode(N),63302:cx._identifierToKeyCode(B),63236:cx._identifierToKeyCode(bb),63237:cx._identifierToKeyCode(be),63238:cx._identifierToKeyCode(D),63239:cx._identifierToKeyCode(W),63240:cx._identifierToKeyCode(bz),63241:cx._identifierToKeyCode(F),63242:cx._identifierToKeyCode(S),63243:cx._identifierToKeyCode(C),63244:cx._identifierToKeyCode(bv),63245:cx._identifierToKeyCode(bu),63246:cx._identifierToKeyCode(bw),63247:cx._identifierToKeyCode(bs),63248:cx._identifierToKeyCode(bE),3:cx._identifierToKeyCode(t),12:cx._identifierToKeyCode(v),13:cx._identifierToKeyCode(t)};
}else{cx._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var U="qx.client",T="mouseup",S="click",R="mousedown",Q="contextmenu",P="mousewheel",O="dblclick",N="mshtml",M="mouseover",L="mouseout",G="DOMMouseScroll",K="mousemove",J="on",F="mshtml|webkit|opera",E="useraction",I="gecko|webkit",H="qx.event.handler.Mouse";
qx.Class.define(H,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this.__dE=o;
this.__dF=o.getWindow();
this.__dG=this.__dF.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dE:null,__dF:null,__dG:null,canHandleEvent:function(V,W){},registerEvent:qx.bom.client.System.IPHONE?
function(A,B,C){A[J+B]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(k,l,m){k[J+l]=undefined;
}:qx.lang.Function.returnNull,__dM:function(u,v,w){if(!w){w=u.target||u.srcElement;
}if(w&&w.nodeType){qx.event.Registration.fireEvent(w,v||u.type,v==P?qx.event.type.MouseWheel:qx.event.type.Mouse,[u,w,null,true,true]);
}qx.event.Registration.fireEvent(this.__dF,E,qx.event.type.Data,[v||u.type]);
},_initButtonObserver:function(){this.__dH=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,R,this.__dH);
Event.addNativeListener(this.__dG,T,this.__dH);
Event.addNativeListener(this.__dG,S,this.__dH);
Event.addNativeListener(this.__dG,O,this.__dH);
Event.addNativeListener(this.__dG,Q,this.__dH);
},_initMoveObserver:function(){this.__dI=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dG,K,this.__dI);
Event.addNativeListener(this.__dG,M,this.__dI);
Event.addNativeListener(this.__dG,L,this.__dI);
},_initWheelObserver:function(){this.__dJ=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var a=qx.core.Variant.isSet(U,F)?P:G;
var b=qx.core.Variant.isSet(U,N)?this.__dG:this.__dF;
Event.addNativeListener(b,a,this.__dJ);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,R,this.__dH);
Event.removeNativeListener(this.__dG,T,this.__dH);
Event.removeNativeListener(this.__dG,S,this.__dH);
Event.removeNativeListener(this.__dG,O,this.__dH);
Event.removeNativeListener(this.__dG,Q,this.__dH);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dG,K,this.__dI);
Event.removeNativeListener(this.__dG,M,this.__dI);
Event.removeNativeListener(this.__dG,L,this.__dI);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var c=qx.core.Variant.isSet(U,F)?P:G;
var d=qx.core.Variant.isSet(U,N)?this.__dG:this.__dF;
Event.removeNativeListener(d,c,this.__dJ);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(D){this.__dM(D);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(X){var Y=X.type;
var ba=X.target||X.srcElement;
if(qx.core.Variant.isSet(U,I)){if(ba&&ba.nodeType==3){ba=ba.parentNode;
}}
if(this.__dN){this.__dN(X,Y,ba);
}
if(this.__dP){this.__dP(X,Y,ba);
}this.__dM(X,Y,ba);

if(this.__dO){this.__dO(X,Y,ba);
}
if(this.__dQ){this.__dQ(X,Y,ba);
}this.__dK=Y;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(n){this.__dM(n,P);
}),__dN:qx.core.Variant.select(U,{"webkit":function(e,f,g){if(qx.bom.client.Engine.VERSION<530){if(f==Q){this.__dM(e,T,g);
}}},"default":null}),__dO:qx.core.Variant.select(U,{"opera":function(h,i,j){if(i==T&&h.button==2){this.__dM(h,Q,j);
}},"default":null}),__dP:qx.core.Variant.select(U,{"mshtml":function(x,y,z){if(y==T&&this.__dK==S){this.__dM(x,R,z);
}else if(y==O){this.__dM(x,S,z);
}},"default":null}),__dQ:qx.core.Variant.select(U,{"mshtml":null,"default":function(q,r,s){switch(r){case R:this.__dL=s;
break;
case T:if(s!==this.__dL){var t=qx.dom.Hierarchy.getCommonParent(s,this.__dL);
this.__dM(q,S,t);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dE=this.__dF=this.__dG=this.__dL=null;
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var e="qx.event.handler.Capture";
qx.Class.define(e,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(i,j){},registerEvent:function(f,g,h){},unregisterEvent:function(b,c,d){}},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var V="alias",U="copy",T="blur",S="mouseout",R="keydown",Q="Ctrl",P="Shift",O="mousemove",N="move",M="mouseover",bm="Alt",bl="keyup",bk="mouseup",bj="dragend",bi="on",bh="mousedown",bg="qxDraggable",bf="drag",be="drop",bd="qxDroppable",bb="qx.event.handler.DragDrop",bc="droprequest",Y="dragstart",ba="dragchange",W="dragleave",X="dragover";
qx.Class.define(bb,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){arguments.callee.base.call(this);
this.__hx=D;
this.__hy=D.getWindow().document.documentElement;
this.__hx.addListener(this.__hy,bh,this._onMouseDown,this);
this.__hK();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,__hD:null,__hE:null,__hF:null,__hG:null,__hH:false,__hI:0,__hJ:0,canHandleEvent:function(I,J){},registerEvent:function(F,G,H){},unregisterEvent:function(c,d,f){},addType:function(E){this.__hB[E]=true;
},addAction:function(K){this.__hC[K]=true;
},supportsType:function(z){return !!this.__hB[z];
},supportsAction:function(C){return !!this.__hC[C];
},getData:function(w){if(!this.__hR||!this.__hz){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__hB[w]){throw new Error("Unsupported data type: "+w+"!");
}
if(!this.__hE[w]){this.__hF=w;
this.__hM(bc,this.__hA,this.__hz,false);
}
if(!this.__hE[w]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__hE[w]||null;
},getCurrentAction:function(){return this.__hG;
},addData:function(u,v){this.__hE[u]=v;
},getCurrentType:function(){return this.__hF;
},__hK:function(){this.__hB={};
this.__hC={};
this.__hD={};
this.__hE={};
},__hL:function(){var k=this.__hC;
var i=this.__hD;
var j=null;

if(this.__hR){if(i.Shift&&i.Ctrl&&k.alias){j=V;
}else if(i.Shift&&i.Alt&&k.copy){j=U;
}else if(i.Shift&&k.move){j=N;
}else if(i.Alt&&k.alias){j=V;
}else if(i.Ctrl&&k.copy){j=U;
}else if(k.move){j=N;
}else if(k.copy){j=U;
}else if(k.alias){j=V;
}}
if(j!=this.__hG){this.__hG=j;
this.__hM(ba,this.__hA,this.__hz,false);
}},__hM:function(l,m,n,o,p){var r=qx.event.Registration;
var q=r.createEvent(l,qx.event.type.Drag,[o,p]);

if(m!==n){q.setRelatedTarget(n);
}return r.dispatchEvent(m,q);
},__hN:function(L){while(L&&L.nodeType==1){if(L.getAttribute(bg)==bi){return L;
}L=L.parentNode;
}return null;
},__hO:function(s){while(s&&s.nodeType==1){if(s.getAttribute(bd)==bi){return s;
}s=s.parentNode;
}return null;
},__hP:function(){this.__hA=null;
this.__hx.removeListener(this.__hy,O,this._onMouseMove,this,true);
this.__hx.removeListener(this.__hy,bk,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,T,this._onWindowBlur,this);
this.__hK();
},__hQ:function(){if(this.__hH){this.__hx.removeListener(this.__hy,M,this._onMouseOver,this,true);
this.__hx.removeListener(this.__hy,S,this._onMouseOut,this,true);
this.__hx.removeListener(this.__hy,R,this._onKeyDown,this,true);
this.__hx.removeListener(this.__hy,bl,this._onKeyUp,this,true);
this.__hM(bj,this.__hA,this.__hz,false);
this.__hH=false;
}this.__hR=false;
this.__hz=null;
this.__hP();
},__hR:false,_onWindowBlur:function(e){this.__hQ();
},_onKeyDown:function(e){var A=e.getKeyIdentifier();

switch(A){case bm:case Q:case P:if(!this.__hD[A]){this.__hD[A]=true;
this.__hL();
}}},_onKeyUp:function(e){var t=e.getKeyIdentifier();

switch(t){case bm:case Q:case P:if(this.__hD[t]){this.__hD[t]=false;
this.__hL();
}}},_onMouseDown:function(e){if(this.__hH){return;
}var h=this.__hN(e.getTarget());

if(h){this.__hI=e.getDocumentLeft();
this.__hJ=e.getDocumentTop();
this.__hA=h;
this.__hx.addListener(this.__hy,O,this._onMouseMove,this,true);
this.__hx.addListener(this.__hy,bk,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,T,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__hR){this.__hM(be,this.__hz,this.__hA,false,e);
}if(this.__hH){e.stopPropagation();
}this.__hQ();
},_onMouseMove:function(e){if(this.__hH){if(!this.__hM(bf,this.__hA,this.__hz,true,e)){this.__hQ();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hI)>3||Math.abs(e.getDocumentTop()-this.__hJ)>3){if(this.__hM(Y,this.__hA,this.__hz,true,e)){this.__hH=true;
this.__hx.addListener(this.__hy,M,this._onMouseOver,this,true);
this.__hx.addListener(this.__hy,S,this._onMouseOut,this,true);
this.__hx.addListener(this.__hy,R,this._onKeyDown,this,true);
this.__hx.addListener(this.__hy,bl,this._onKeyUp,this,true);
var g=this.__hD;
g.Ctrl=e.isCtrlPressed();
g.Shift=e.isShiftPressed();
g.Alt=e.isAltPressed();
this.__hL();
}else{this.__hM(bj,this.__hA,this.__hz,false);
this.__hP();
}}}},_onMouseOver:function(e){var x=e.getTarget();
var y=this.__hO(x);

if(y&&y!=this.__hz){this.__hR=this.__hM(X,y,this.__hA,true,e);
this.__hz=y;
this.__hL();
}},_onMouseOut:function(e){var b=this.__hO(e.getTarget());
var a=this.__hO(e.getRelatedTarget());

if(b&&b!==a&&b==this.__hz){this.__hM(W,this.__hz,a,false,e);
this.__hz=null;
this.__hR=false;
qx.event.Timer.once(this.__hL,this,0);
}}},destruct:function(){this.__hA=this.__hz=this.__hx=this.__hy=this.__hB=this.__hC=this.__hD=this.__hE=null;
},defer:function(B){qx.event.Registration.addHandler(B);
}});
})();
(function(){var k="-",j="qx.event.handler.Element";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){arguments.callee.base.call(this);
this._manager=b;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(l,m){},registerEvent:function(q,r,s){var v=qx.core.ObjectRegistry.toHashCode(q);
var t=v+k+r;
var u=qx.lang.Function.listener(this._onNative,this,t);
qx.bom.Event.addNativeListener(q,r,u);
this._registeredEvents[t]={element:q,type:r,listener:u};
},unregisterEvent:function(c,d,e){var h=this._registeredEvents;

if(!h){return;
}var i=qx.core.ObjectRegistry.toHashCode(c);
var f=i+k+d;
var g=this._registeredEvents[f];
qx.bom.Event.removeNativeListener(c,d,g.listener);
delete this._registeredEvents[f];
},_onNative:qx.event.GlobalError.observeMethod(function(w,x){var z=this._registeredEvents;

if(!z){return;
}var y=z[x];
qx.event.Registration.fireNonBubblingEvent(y.element,y.type,qx.event.type.Native,[w]);
})},destruct:function(){var n;
var o=this._registeredEvents;

for(var p in o){n=o[p];
qx.bom.Event.removeNativeListener(n.element,n.type,n.listener);
}this._manager=this._registeredEvents=null;
},defer:function(a){qx.event.Registration.addHandler(a);
}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){arguments.callee.base.call(this);
this.__bE=p;
this.__bF={};
qx.event.handler.Appear.__bG[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__bG:{},refresh:function(){var v=this.__bG;

for(var w in v){v[w].refresh();
}}},members:{__bE:null,__bF:null,canHandleEvent:function(i,j){},registerEvent:function(k,l,m){var n=qx.core.ObjectRegistry.toHashCode(k)+l;
var o=this.__bF;

if(o&&!o[n]){o[n]=k;
k.$$displayed=k.offsetWidth>0;
}},unregisterEvent:function(q,r,s){var t=qx.core.ObjectRegistry.toHashCode(q)+r;
var u=this.__bF;

if(!u){return;
}
if(u[t]){delete u[t];
}},refresh:function(){var g=this.__bF;
var h;

for(var f in g){h=g[f];
var d=h.offsetWidth>0;

if((!!h.$$displayed)!==d){h.$$displayed=d;
var e=qx.event.Registration.createEvent(d?a:b);
this.__bE.dispatchEvent(h,e);
}}}},destruct:function(){this.__bE=this.__bF=null;
delete qx.event.handler.Appear.__bG[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var x="mshtml",w="",v="qx.client",u=">",t="<",s=" ",r="='",q="qx.bom.Element",p="div",o="' ",n="></";
qx.Class.define(q,{statics:{__iL:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,C,D){if(!D){D=window;
}
if(!name){throw new Error("The tag name is missing!");
}var F=this.__iL;
var E=w;

for(var H in C){if(F[H]){E+=H+r+C[H]+o;
}}var I;
if(E!=w){if(qx.bom.client.Engine.MSHTML){I=D.document.createElement(t+name+s+E+u);
}else{var G=D.document.createElement(p);
G.innerHTML=t+name+s+E+n+name+u;
I=G.firstChild;
}}else{I=D.document.createElement(name);
}
for(var H in C){if(!F[H]){qx.bom.element.Attribute.set(I,H,C[H]);
}}return I;
},empty:function(c){return c.innerHTML=w;
},addListener:function(e,f,g,self,h){return qx.event.Registration.addListener(e,f,g,self,h);
},removeListener:function(X,Y,ba,self,bb){return qx.event.Registration.removeListener(X,Y,ba,self,bb);
},removeListenerById:function(V,W){return qx.event.Registration.removeListenerById(V,W);
},hasListener:function(y,z,A){return qx.event.Registration.hasListener(y,z,A);
},focus:function(B){qx.event.Registration.getManager(B).getHandler(qx.event.handler.Focus).focus(B);
},blur:function(b){qx.event.Registration.getManager(b).getHandler(qx.event.handler.Focus).blur(b);
},activate:function(d){qx.event.Registration.getManager(d).getHandler(qx.event.handler.Focus).activate(d);
},deactivate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).deactivate(bc);
},capture:function(k,m){qx.event.Registration.getManager(k).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(k,m);
},releaseCapture:function(a){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(a);
},clone:function(J,K){var N;

if(K||(qx.core.Variant.isSet(v,x)&&!qx.xml.Document.isXmlDocument(J))){var R=qx.event.Registration.getManager(J);
var L=qx.dom.Hierarchy.getDescendants(J);
L.push(J);
}if(qx.core.Variant.isSet(v,x)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],false);
}}var N=J.cloneNode(true);
if(qx.core.Variant.isSet(v,x)){for(var i=0,l=L.length;i<l;i++){R.toggleAttachedEvents(L[i],true);
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
(function(){var bk="qx.client",bj="blur",bi="focus",bh="mousedown",bg="on",bf="mouseup",be="DOMFocusOut",bd="DOMFocusIn",bc="selectstart",bb="onmousedown",bG="onfocusout",bF="onfocusin",bE="onmouseup",bD="onselectstart",bC="draggesture",bB="gecko",bA="qx.event.handler.Focus",bz="_applyFocus",by="deactivate",bx="textarea",br="qxIsRootPage",bs="_applyActive",bp="input",bq="focusin",bn="qxSelectable",bo="tabIndex",bl="off",bm="activate",bt="1",bu="focusout",bw="qxKeepFocus",bv="qxKeepActive";
qx.Class.define(bA,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this._manager=g;
this._window=g.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:bs,nullable:true},focus:{apply:bz,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__hU:null,__hV:null,__hW:null,__hX:null,__hY:null,__ia:null,__ib:null,__ic:null,__id:null,__ie:null,canHandleEvent:function(d,f){},registerEvent:function(a,b,c){},unregisterEvent:function(u,v,w){},focus:function(x){try{x.focus();
}catch(y){}this.setFocus(x);
this.setActive(x);
},activate:function(A){this.setActive(A);
},blur:function(p){try{p.blur();
}catch(z){}
if(this.getActive()===p){this.resetActive();
}
if(this.getFocus()===p){this.resetFocus();
}},deactivate:function(o){if(this.getActive()===o){this.resetActive();
}},tryActivate:function(O){var P=this.__it(O);

if(P){this.setActive(P);
}},__if:function(Q,R,S,T){var V=qx.event.Registration;
var U=V.createEvent(S,qx.event.type.Focus,[Q,R,T]);
V.dispatchEvent(Q,U);
},_windowFocused:true,__ig:function(){if(this._windowFocused){this._windowFocused=false;
this.__if(this._window,null,bj,false);
}},__ih:function(){if(!this._windowFocused){this._windowFocused=true;
this.__if(this._window,null,bi,false);
}},_initObserver:qx.core.Variant.select(bk,{"gecko":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__hY=qx.lang.Function.listener(this.__ii,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._window.addEventListener(bi,this.__hW,true);
this._window.addEventListener(bj,this.__hX,true);
this._window.addEventListener(bC,this.__hY,true);
},"mshtml":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.attachEvent(bb,this.__hU);
this._document.attachEvent(bE,this.__hV);
this._document.attachEvent(bF,this.__ib);
this._document.attachEvent(bG,this.__ic);
this._document.attachEvent(bD,this.__ia);
},"webkit":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this.__hW=qx.lang.Function.listener(this.__im,this);
this.__hX=qx.lang.Function.listener(this.__il,this);
this.__ia=qx.lang.Function.listener(this.__iq,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._document.addEventListener(bc,this.__ia,false);
this._window.addEventListener(be,this.__ic,true);
this._window.addEventListener(bi,this.__hW,true);
this._window.addEventListener(bj,this.__hX,true);
},"opera":function(){this.__hU=qx.lang.Function.listener(this.__in,this);
this.__hV=qx.lang.Function.listener(this.__io,this);
this.__ib=qx.lang.Function.listener(this.__ij,this);
this.__ic=qx.lang.Function.listener(this.__ik,this);
this._document.addEventListener(bh,this.__hU,true);
this._document.addEventListener(bf,this.__hV,true);
this._window.addEventListener(bd,this.__ib,true);
this._window.addEventListener(be,this.__ic,true);
}}),_stopObserver:qx.core.Variant.select(bk,{"gecko":function(){this._document.removeEventListener(bh,this.__hU,true);
this._document.removeEventListener(bf,this.__hV,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
this._window.removeEventListener(bC,this.__hY,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,bb,this.__hU);
qx.bom.Event.removeNativeListener(this._document,bE,this.__hV);
qx.bom.Event.removeNativeListener(this._document,bF,this.__ib);
qx.bom.Event.removeNativeListener(this._document,bG,this.__ic);
qx.bom.Event.removeNativeListener(this._document,bD,this.__ia);
},"webkit":function(){this._document.removeEventListener(bh,this.__hU,true);
this._document.removeEventListener(bc,this.__ia,false);
this._window.removeEventListener(bd,this.__ib,true);
this._window.removeEventListener(be,this.__ic,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
},"opera":function(){this._document.removeEventListener(bh,this.__hU,true);
this._window.removeEventListener(bd,this.__ib,true);
this._window.removeEventListener(be,this.__ic,true);
this._window.removeEventListener(bi,this.__hW,true);
this._window.removeEventListener(bj,this.__hX,true);
}}),__ii:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){if(!this.__iu(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ij:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){this.__ih();
var K=e.srcElement;
var J=this.__is(K);

if(J){this.setFocus(J);
}this.tryActivate(K);
},"opera":function(e){var bQ=e.target;

if(bQ==this._document||bQ==this._window){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bQ);
this.tryActivate(bQ);
if(!this.__iu(bQ)){bQ.selectionStart=0;
bQ.selectionEnd=0;
}}},"default":null})),__ik:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){if(!e.toElement){this.__ig();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var k=e.target;

if(k===this.getFocus()){this.resetFocus();
}
if(k===this.getActive()){this.resetActive();
}},"opera":function(e){var bR=e.target;

if(bR==this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bR===this.getFocus()){this.resetFocus();
}
if(bR===this.getActive()){this.resetActive();
}}},"default":null})),__il:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__ig();
this.__id=this.getFocus();
this.__ie=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__im:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){var bK=e.target;

if(bK===this._window||bK===this._document){this.__ih();
bK=this._body;
}this.setFocus(bK);
this.tryActivate(bK);
},"webkit":function(e){var bJ=e.target;

if(bJ===this._window||bJ===this._document){this.__ih();

if(this.__id){this.setFocus(this.__id);
delete this.__id;
}
if(this.__ie){this.setActive(this.__ie);
delete this.__ie;
}}else{this.setFocus(bJ);
this.tryActivate(bJ);
}},"default":null})),__in:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"gecko":function(e){var Y=e.target;
var W=this.__is(Y);
var X=this.__iu(Y);

if(!X){qx.bom.Event.preventDefault(e);
if(W){if(qx.core.Variant.isSet(bk,bB)){var ba=qx.bom.element.Attribute.get(W,br)===bt;

if(!ba){W.focus();
}}else{W.focus();
}}}else if(!W){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var F=e.srcElement;
var E=this.__is(F);

if(E){if(!this.__iu(F)){F.unselectable=bg;
try{document.selection.empty();
}catch(e){}try{E.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__iu(F)){F.unselectable=bg;
}}},"webkit":function(e){var s=e.target;
var r=this.__is(s);

if(r){this.setFocus(r);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var I=e.target;
var G=this.__is(I);

if(!this.__iu(I)){qx.bom.Event.preventDefault(e);
if(G){var H=this.getFocus();

if(H&&H.selectionEnd){H.selectionStart=0;
H.selectionEnd=0;
H.blur();
}if(G){this.setFocus(G);
}}}else if(G){this.setFocus(G);
}},"default":null})),__io:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml":function(e){var n=e.srcElement;

if(n.unselectable){n.unselectable=bl;
}this.tryActivate(this.__ip(n));
},"gecko":function(e){var t=e.target;

while(t&&t.offsetWidth===undefined){t=t.parentNode;
}
if(t){this.tryActivate(t);
}},"webkit|opera":function(e){this.tryActivate(this.__ip(e.target));
},"default":null})),__ip:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml|webkit":function(bH){var bI=this.getFocus();

if(bI&&bH!=bI&&(bI.nodeName.toLowerCase()===bp||bI.nodeName.toLowerCase()===bx)){bH=bI;
}return bH;
},"default":function(q){return q;
}})),__iq:qx.event.GlobalError.observeMethod(qx.core.Variant.select(bk,{"mshtml|webkit":function(e){var L=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__iu(L)){qx.bom.Event.preventDefault(e);
}},"default":null})),__ir:function(h){var i=qx.bom.element.Attribute.get(h,bo);

if(i>=1){return true;
}var j=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(i>=0&&j[h.tagName]){return true;
}return false;
},__is:function(B){while(B&&B.nodeType===1){if(B.getAttribute(bw)==bg){return null;
}
if(this.__ir(B)){return B;
}B=B.parentNode;
}return this._body;
},__it:function(l){var m=l;

while(l&&l.nodeType===1){if(l.getAttribute(bv)==bg){return null;
}l=l.parentNode;
}return m;
},__iu:function(C){while(C&&C.nodeType===1){var D=C.getAttribute(bn);

if(D!=null){return D===bg;
}C=C.parentNode;
}return true;
},_applyActive:function(bO,bP){if(bP){this.__if(bP,bO,by,true);
}
if(bO){this.__if(bO,bP,bm,true);
}},_applyFocus:function(M,N){if(N){this.__if(N,M,bu,true);
}
if(M){this.__if(M,N,bq,true);
}if(N){this.__if(N,M,bj,false);
}
if(M){this.__if(M,N,bi,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__iv=null;
},defer:function(bL){qx.event.Registration.addHandler(bL);
var bM=bL.FOCUSABLE_ELEMENTS;

for(var bN in bM){bM[bN.toUpperCase()]=1;
}}});
})();
(function(){var d="qx.event.type.Focus";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(a,b,c){arguments.callee.base.call(this,c,false);
this._target=a;
this._relatedTarget=b;
return this;
}}});
})();
(function(){var o="",n="qx.client",m="readOnly",l="accessKey",k="qx.bom.element.Attribute",j="rowSpan",i="vAlign",h="className",g="textContent",f="'",C="htmlFor",B="longDesc",A="cellSpacing",z="frameBorder",y="='",x="useMap",w="innerText",v="innerHTML",u="tabIndex",t="dateTime",r="maxLength",s="mshtml",p="cellPadding",q="colSpan";
qx.Class.define(k,{statics:{__fV:{names:{"class":h,"for":C,html:v,text:qx.core.Variant.isSet(n,s)?w:g,colspan:q,rowspan:j,valign:i,datetime:t,accesskey:l,tabindex:u,maxlength:r,readonly:m,longdesc:B,cellpadding:p,cellspacing:A,frameborder:z,usemap:x},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readonly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:o,maxLength:10000000,className:o,innerHTML:o,innerText:o,textContent:o,htmlFor:o,tabIndex:0},original:{href:1,src:1,type:1}},compile:function(b){var c=[];
var e=this.__fV.runtime;

for(var d in b){if(!e[d]){c.push(d,y,b[d],f);
}}return c.join(o);
},get:qx.core.Variant.select(n,{"mshtml":function(J,name){var L=this.__fV;
var K;
name=L.names[name]||name;
if(L.original[name]){K=J.getAttribute(name,2);
}else if(L.property[name]){if(L.propertyDefault[name]&&K==L.propertyDefault[name]){return null;
}K=J[name];
}else{K=J.getAttribute(name);
}if(L.bools[name]){return !!K;
}return K;
},"default":function(G,name){var I=this.__fV;
var H;
name=I.names[name]||name;
if(I.property[name]){if(I.propertyDefault[name]&&H==I.propertyDefault[name]){return null;
}H=G[name];

if(H==null){H=G.getAttribute(name);
}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(D,name,E){var F=this.__fV;
name=F.names[name]||name;
if(F.bools[name]){E=!!E;
}if(F.property[name]){if(E==null){E=F.propertyDefault[name];

if(E===undefined){E=null;
}}D[name]=E;
}else{if(E===true){D.setAttribute(name,name);
}else if(E===false||E===null){D.removeAttribute(name);
}else{D.setAttribute(name,E);
}}},reset:function(a,name){this.set(a,name,null);
}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(n,o,p,q,r){arguments.callee.base.call(this,n,o,p,q,r);

if(!p){this._relatedTarget=qx.bom.Event.getRelatedTarget(n);
}return this;
},_cloneNativeEvent:function(l,m){var m=arguments.callee.base.call(this,l,m);
m.button=l.button;
m.clientX=l.clientX;
m.clientY=l.clientY;
m.pageX=l.pageX;
m.pageY=l.pageY;
m.screenX=l.screenX;
m.screenY=l.screenY;
m.wheelDelta=l.wheelDelta;
m.detail=l.detail;
m.srcElement=l.srcElement;
return m;
},__iI:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__iI[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(k);
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
(function(){var l="qx.client",k="ie",j="msie",i="android",h="operamini",g="mobile chrome",f=")(/| )([0-9]+\.[0-9])",e="iemobile",d="opera mobi",c="Mobile Safari",z="operamobile",y="mobile safari",x="IEMobile|Maxthon|MSIE",w="qx.bom.client.Browser",v="opera mini",u="(",t="opera",s="mshtml",r="Opera Mini|Opera Mobi|Opera",q="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",o="webkit",p="5.0",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",n="Mobile/";
qx.Bootstrap.define(w,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__jO:function(A){var B=navigator.userAgent;
var D=new RegExp(u+A+f);
var E=B.match(D);

if(!E){return;
}var name=E[1].toLowerCase();
var C=E[3];
if(B.match(/Version(\/| )([0-9]+\.[0-9])/)){C=RegExp.$2;
}
if(qx.core.Variant.isSet(l,o)){if(name===i){name=g;
}else if(B.indexOf(c)!==-1||B.indexOf(n)!==-1){name=y;
}}else if(qx.core.Variant.isSet(l,s)){if(name===j){name=k;
if(qx.bom.client.System.WINCE&&name===k){name=e;
C=p;
}}}else if(qx.core.Variant.isSet(l,t)){if(name===d){name=z;
}else if(name===v){name=h;
}}this.NAME=name;
this.FULLVERSION=C;
this.VERSION=parseFloat(C,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(l,{"webkit":function(a){a.__jO(q);
},"gecko":function(F){F.__jO(m);
},"mshtml":function(G){G.__jO(x);
},"opera":function(b){b.__jO(r);
}})});
})();
(function(){var i="qx.client",h="qx.dom.Hierarchy",g="previousSibling",f="*",e="nextSibling",d="parentNode";
qx.Class.define(h,{statics:{getNodeIndex:function(o){var p=0;

while(o&&(o=o.previousSibling)){p++;
}return p;
},getElementIndex:function(l){var m=0;
var n=qx.dom.Node.ELEMENT;

while(l&&(l=l.previousSibling)){if(l.nodeType==n){m++;
}}return m;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(J){while(J&&(J=J.previousSibling)&&!qx.dom.Node.isElement(J)){continue;
}return J||null;
},contains:qx.core.Variant.select(i,{"webkit|mshtml|opera":function(y,z){if(qx.dom.Node.isDocument(y)){var A=qx.dom.Node.getDocument(z);
return y&&A==y;
}else if(qx.dom.Node.isDocument(z)){return false;
}else{return y.contains(z);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(w,x){while(x){if(w==x){return true;
}x=x.parentNode;
}return false;
}}),isRendered:function(q){if(!q.offsetParent){return false;
}var r=q.ownerDocument||q.document;
if(r.body.contains){return r.body.contains(q);
}if(r.compareDocumentPosition){return !!(r.compareDocumentPosition(q)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(a,b){return this.contains(b,a);
},getCommonParent:qx.core.Variant.select(i,{"mshtml|opera":function(L,M){if(L===M){return L;
}
while(L&&qx.dom.Node.isElement(L)){if(L.contains(M)){return L;
}L=L.parentNode;
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
}}),getAncestors:function(c){return this._recursivelyCollect(c,d);
},getChildElements:function(s){s=s.firstChild;

if(!s){return [];
}var t=this.getNextSiblings(s);

if(s.nodeType===1){t.unshift(s);
}return t;
},getDescendants:function(j){return qx.lang.Array.fromCollection(j.getElementsByTagName(f));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(u){u=u.lastChild;

while(u&&u.nodeType!=1){u=u.previousSibling;
}return u;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,g);
},getNextSiblings:function(N){return this._recursivelyCollect(N,e);
},_recursivelyCollect:function(E,F){var G=[];

while(E=E[F]){if(E.nodeType==1){G.push(E);
}}return G;
},getSiblings:function(I){return this.getPreviousSiblings(I).reverse().concat(this.getNextSiblings(I));
},isEmpty:function(v){v=v.firstChild;

while(v){if(v.nodeType===qx.dom.Node.ELEMENT||v.nodeType===qx.dom.Node.TEXT){return false;
}v=v.nextSibling;
}return true;
},cleanWhitespace:function(B){var C=B.firstChild;

while(C){var D=C.nextSibling;

if(C.nodeType==3&&!/\S/.test(C.nodeValue)){B.removeChild(C);
}C=D;
}}}});
})();
(function(){var e="qx.client",d="qx.event.type.Drag";
qx.Class.define(d,{extend:qx.event.type.Event,members:{init:function(m,n){arguments.callee.base.call(this,true,m);

if(n){this._native=n.getNativeEvent()||null;
this._originalTarget=n.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(g){var h=arguments.callee.base.call(this,g);
h._native=this._native;
return h;
},getDocumentLeft:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var k=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(k);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(e,{"mshtml":function(){if(this._native==null){return 0;
}var o=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(o);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(a){this.getManager().addType(a);
},addAction:function(l){this.getManager().addAction(l);
},supportsType:function(f){return this.getManager().supportsType(f);
},supportsAction:function(b){return this.getManager().supportsAction(b);
},addData:function(i,j){this.getManager().addData(i,j);
},getData:function(c){return this.getManager().getData(c);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var n="interval",m="qx.event.Timer",l="_applyInterval",k="_applyEnabled",j="Boolean",i="qx.event.type.Event",h="Integer";
qx.Class.define(m,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__dC=function(){self._oninterval.call(self);
};
},events:{"interval":i},statics:{once:function(b,c,d){var f=new qx.event.Timer(d);
f.addListener(n,function(e){f.stop();
b.call(c,e);
f.dispose();
c=null;
},c);
f.start();
return f;
}},properties:{enabled:{init:true,check:j,apply:k},interval:{check:h,init:1000,apply:l}},members:{__dD:null,__dC:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dD);
this.__dD=null;
}else if(p){this.__dD=window.setInterval(this.__dC,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(g){this.setInterval(g);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(o){this.stop();
this.startWith(o);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(n);
}})},destruct:function(){if(this.__dD){window.clearInterval(this.__dD);
}this.__dD=this.__dC=null;
}});
})();
(function(){var m="losecapture",l="qx.client",k="blur",j="focus",i="click",h="qx.event.dispatch.MouseCapture",g="capture",f="scroll";
qx.Class.define(h,{extend:qx.event.dispatch.AbstractBubbling,construct:function(p,q){arguments.callee.base.call(this,p);
this.__fp=p.getWindow();
this.__fq=q;
p.addListener(this.__fp,k,this.releaseCapture,this);
p.addListener(this.__fp,j,this.releaseCapture,this);
p.addListener(this.__fp,f,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fq:null,__fr:null,__fs:true,__fp:null,_getParent:function(v){return v.parentNode;
},canDispatchEvent:function(c,event,d){return (this.__fr&&this.__ft[d]);
},dispatchEvent:function(r,event,s){if(s==i){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fs||!qx.dom.Hierarchy.contains(this.__fr,r)){r=this.__fr;
}arguments.callee.base.call(this,r,event,s);
},__ft:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(n,o){var o=o!==false;

if(this.__fr===n&&this.__fs==o){return;
}
if(this.__fr){this.releaseCapture();
}this.nativeSetCapture(n,o);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(n,m,function(){qx.bom.Event.removeNativeListener(n,m,arguments.callee);
self.releaseCapture();
});
}this.__fs=o;
this.__fr=n;
this.__fq.fireEvent(n,g,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fr;
},releaseCapture:function(){var e=this.__fr;

if(!e){return;
}this.__fr=null;
this.__fq.fireEvent(e,m,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(e);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(l,{"mshtml":function(a,b){a.setCapture(b!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(l,{"mshtml":function(t){t.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fr=this.__fp=this.__fq=null;
},defer:function(u){qx.event.Registration.addDispatcher(u);
}});
})();
(function(){var w="qx.client",v="",u="mshtml",t="'",s="SelectionLanguage",r="qx.xml.Document",q=" />",p="MSXML2.DOMDocument.3.0",o='<\?xml version="1.0" encoding="utf-8"?>\n<',n="MSXML2.XMLHTTP.3.0",h="MSXML2.XMLHTTP.6.0",m=" xmlns='",k="text/xml",g="XPath",f="MSXML2.DOMDocument.6.0",j="HTML";
qx.Bootstrap.define(r,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(c){if(c.nodeType===9){return c.documentElement.nodeName!==j;
}else if(c.ownerDocument){return this.isXmlDocument(c.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(w,{"mshtml":function(A,B){var C=new ActiveXObject(this.DOMDOC);
C.setProperty(s,g);

if(B){var D=o;
D+=B;

if(A){D+=m+A+t;
}D+=q;
C.loadXML(D);
}return C;
},"default":function(a,b){return document.implementation.createDocument(a||v,b||v,null);
}}),fromString:qx.core.Variant.select(w,{"mshtml":function(F){var G=qx.xml.Document.create();
G.loadXML(F);
return G;
},"default":function(d){var e=new DOMParser();
return e.parseFromString(d,k);
}})},defer:function(x){if(qx.core.Variant.isSet(w,u)){var y=[f,p];
var z=[h,n];

for(var i=0,l=y.length;i<l;i++){try{new ActiveXObject(y[i]);
new ActiveXObject(z[i]);
}catch(E){continue;
}x.DOMDOC=y[i];
x.XMLHTTP=z[i];
break;
}}}});
})();
(function(){var m="qx.dom.Element";
qx.Class.define(m,{statics:{hasChild:function(parent,f){return f.parentNode===parent;
},hasChildren:function(g){return !!g.firstChild;
},hasChildElements:function(c){c=c.firstChild;

while(c){if(c.nodeType===1){return true;
}c=c.nextSibling;
}return false;
},getParentElement:function(n){return n.parentNode;
},isInDom:function(h,j){if(!j){j=window;
}var k=j.document.getElementsByTagName(h.nodeName);

for(var i=0,l=k.length;i<l;i++){if(k[i]===h){return true;
}}return false;
},insertAt:function(s,parent,t){var u=parent.childNodes[t];

if(u){parent.insertBefore(s,u);
}else{parent.appendChild(s);
}return true;
},insertBegin:function(B,parent){if(parent.firstChild){this.insertBefore(B,parent.firstChild);
}else{parent.appendChild(B);
}},insertEnd:function(w,parent){parent.appendChild(w);
},insertBefore:function(a,b){b.parentNode.insertBefore(a,b);
return true;
},insertAfter:function(d,e){var parent=e.parentNode;

if(e==parent.lastChild){parent.appendChild(d);
}else{return this.insertBefore(d,e.nextSibling);
}return true;
},remove:function(o){if(!o.parentNode){return false;
}o.parentNode.removeChild(o);
return true;
},removeChild:function(v,parent){if(v.parentNode!==parent){return false;
}parent.removeChild(v);
return true;
},removeChildAt:function(z,parent){var A=parent.childNodes[z];

if(!A){return false;
}parent.removeChild(A);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(p,q,parent){var r=parent.childNodes[q];

if(!r){return false;
}parent.replaceChild(p,r);
return true;
}}});
})();
(function(){var j="(\\s|$)",i="(^|\\s)",h="",g="qx.bom.element.Class",f=" ",e="$2";
qx.Class.define(g,{statics:{add:function(n,name){if(!this.has(n,name)){n.className+=(n.className?f:h)+name;
}return name;
},get:function(q){return q.className;
},has:function(c,name){var d=new RegExp(i+name+j);
return d.test(c.className);
},remove:function(o,name){var p=new RegExp(i+name+j);
o.className=o.className.replace(p,e);
return name;
},replace:function(k,l,m){this.remove(k,l);
return this.add(k,m);
},toggle:function(a,name,b){if(b==null){b=!this.has(a,name);
}b?this.add(a,name):this.remove(a,name);
return name;
}}});
})();
(function(){var l="zIndex",k="mshtml",j="height",i="portal.box.Util",h="width",g="qx.client",f="auto";
qx.Class.define(i,{statics:{__FL:1000,bringToFront:function(q){var r=this.getStyleProperty(q,l);
r=r==f?0:r;
qx.bom.element.Style.set(q,l,r+portal.box.Util.__FL);
},sendToBack:function(d){var e=this.getStyleProperty(d,l);
qx.bom.element.Style.set(d,l,e-portal.box.Util.__FL);
},getStyleProperty:function(m,n,o){var p=qx.bom.element.Style.get(m,n);
return o?parseInt(p):p;
},getComputedDimension:function(a){var b=portal.box.Util.getStyleProperty(a,h,true);
var c=portal.box.Util.getStyleProperty(a,j,true);

if(qx.core.Variant.isSet(g,k)){b=b==0?a.offsetWidth:b;
c=c==0?a.offsetHeight:c;
}return {width:b,height:c};
}}});
})();
(function(){var f="portal.box.Draggable";
qx.Class.define(f,{extend:qx.core.Object,construct:function(g){arguments.callee.base.call(this);
this.__FM=g;
this.__FN=g.getElement();
this.__FO=null;
this.__FP=null;
this.__FQ();
},members:{__FM:null,__FN:null,__FO:null,__FP:null,getBox:function(){return this.__FM;
},getElement:function(){return this.__FN;
},__FQ:function(){this.__FR();
this.__FS();
},__FR:function(){this.__FO=qx.bom.Element.create("div");
qx.bom.element.Class.add(this.__FO,"dragHandle");
qx.dom.Element.insertBegin(this.__FO,this.__FN);
},__FS:function(){qx.bom.Element.addListener(this.__FO,"mousedown",this.__FT,this);
qx.bom.Element.addListener(this.__FO,"mouseover",function(e){qx.bom.element.Style.set(this,"cursor","move");
},this.__FO);
qx.bom.Element.addListener(this.__FO,"dragstart",this.__FW,this);
qx.bom.Element.addListener(this.__FO,"dragend",portal.dragdrop.Manager.getInstance().stopSession,portal.dragdrop.Manager.getInstance());
qx.bom.Element.addListener(this.__FO,"drag",this.__FX,this);
},__FT:function(e){if(e.isLeftPressed()){if(qx.core.Variant.isSet("qx.client","mshtml")){var top=qx.bom.element.Location.getTop(this.__FN,"margin")-parseInt(qx.bom.element.Style.get(this.__FN,"paddingTop"))-parseInt(qx.bom.element.Style.get(this.__FN,"borderTopWidth"));
}else if(qx.core.Variant.isSet("qx.client","webkit")){var top=qx.bom.element.Location.getTop(this.__FN,"margin");
}else{var top=qx.bom.element.Location.getTop(this.__FN);
}this.__FP={left:e.getDocumentLeft()-qx.bom.element.Location.getLeft(this.__FN),top:e.getDocumentTop()-top};
qx.bom.Element.addListener(document.body,"mouseup",this.__FV,this,true);
this.__FU();
qx.event.Registration.fireEvent(this.__FO,"dragstart",qx.event.type.Event);
}},__FU:qx.core.Variant.select("qx.client",{"mshtml":function(){var c=this;
var b=qx.lang.Function.bind(this.__FV,c);
document.getElementsByTagName("html")[0].onmouseleave=b;
},"default":function(){}}),__FV:function(e){try{e.stopPropagation();
}catch(a){}
if(portal.dragdrop.Manager.getInstance().isSessionActive()){qx.event.Registration.removeListener(document.body,"mousemove",this.__FX,this,true);
portal.dragdrop.Manager.getInstance().stopSession();
}qx.bom.Element.removeListener(document.body,"mouseup",this.__FV,this,true);
},__FW:function(e){portal.box.Manager.getInstance().setActiveBox(this.__FM);
portal.dragdrop.Manager.getInstance().startSession(this.__FM);
qx.event.Registration.addListener(document.body,"mousemove",this.__FX,this,true);
},__FX:function(e){e.stopPropagation();
var d=e.getDocumentLeft()-this.__FP.left;
var top=e.getDocumentTop()-this.__FP.top;
qx.event.Timer.once(function(){this.checkGroupBox(d);
this.onDragMove(top,d);
},portal.dragdrop.Manager.getInstance(),0);
}},destruct:function(){this.__FM=this.__FO=this.__FN=this.__FP=null;
}});
})();
(function(){var u="margin",t="qx.client",s="px",r="paddingTop",q="px;",p="paddingBottom",o="mshtml",n="webkit",m="border",l="Boolean",L="paddingLeft",K="div",J="absolute",I="singleton",H="top:",G="width:",F="borderTopWidth",E="height:",D="spring",C="top",A="finish",B="left:",y="portal.box.Box",z="opacity:0.5;margin:0;position:absolute;",w="left",x="portal.dragdrop.Manager",v="1px dashed red";
qx.Class.define(x,{type:I,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__FY={top:null,height:null};
this.__Ga={top:0,left:0};
},properties:{activeBox:{check:y,init:null,nullable:true},sessionActive:{check:l,init:false}},members:{__FY:null,__Gb:null,__Gc:false,__Ga:null,__Gd:null,__Ge:null,startSession:function(bc){this.setSessionActive(true);
this.setActiveBox(bc);
this.__Gb=bc.getGroupBoxId();
this.__Gf();
if(this.__Gd==null){this.__Gd={};
var bd=portal.box.Manager.getInstance().getGroupBoxes();

for(var i=0,j=bd.length;i<j;i++){this.__Gd[bd[i].element.id]={left:qx.bom.element.Location.getLeft(bd[i].element),right:qx.bom.element.Location.getLeft(bd[i].element)+qx.bom.element.Dimension.getWidth(bd[i].element)};
}}},__Gf:function(){if(!this.__Ge){this.__Ge=qx.bom.Element.create(K);
}var k=this.getActiveBox().getElement();
var g=portal.box.Util.getComputedDimension(k);
this.__Gg(k,this.__Ge);
qx.bom.element.Class.add(this.__Ge,qx.bom.element.Class.get(k));

if(qx.core.Variant.isSet(t,o)){var top=qx.bom.element.Location.getTop(k,u)-parseInt(qx.bom.element.Style.get(k,r))-parseInt(qx.bom.element.Style.get(k,F));
}else if(qx.core.Variant.isSet(t,n)){var top=qx.bom.element.Location.getTop(k,u);
}else{var top=qx.bom.element.Location.getTop(k);
}var h=z+H+top+q+B+qx.bom.element.Location.getLeft(k)+q+G+g.width+q+E+g.height+s;
qx.bom.element.Style.setCss(this.__Ge,h);
qx.bom.element.Style.set(k,m,v);
qx.dom.Node.getBodyElement(k).appendChild(this.__Ge);
portal.box.Util.bringToFront(this.__Ge);
},__Gg:function(ba,bb){while(ba.firstChild){bb.appendChild(ba.firstChild);
}},stopSession:function(e){this.setSessionActive(false);
var P=this.getActiveBox();
var O=P.getElement();

if(qx.core.Variant.isSet(t,o)){var top=qx.bom.element.Location.getTop(O,u)-parseInt(qx.bom.element.Style.get(O,r))-parseInt(qx.bom.element.Style.get(O,p));
var Q=qx.bom.element.Location.getLeft(O,u)-parseInt(qx.bom.element.Style.get(O,L));
}else if(qx.core.Variant.isSet(t,n)){var top=qx.bom.element.Location.getTop(O,u);
var Q=qx.bom.element.Location.getLeft(O,u);
}else{var top=qx.bom.element.Location.getTop(O);
var Q=qx.bom.element.Location.getLeft(O);
}portal.box.Manager.getInstance().updateGroupBoxMembers(P.getGroupBoxId(),this.__Gb,P);
P.setGroupBoxId(this.__Gb);
var M=new qx.fx.effect.core.Move(this.__Ge);
M.set({x:Q,y:top,mode:J,duration:0.5,transition:D});
M.start();
var N=this;
M.addListener(A,function(){N.__Gg(N.__Ge,O);
qx.bom.element.Style.reset(O,m);
N.__Ge.parentNode.removeChild(N.__Ge);
if(P.isActive()){P._applyActive(true);
}else{portal.box.Manager.getInstance().setActiveBox(P);
}});
},onDragMove:function(top,a){if(this.__Ga.left!=a){qx.bom.element.Style.set(this.__Ge,w,a+s);
}if(this.__Ga.top!=top){qx.bom.element.Style.set(this.__Ge,C,top+s);
}var b=this.getActiveBox().getElement();

if(this.__FY.top==null){this.__FY.top=qx.bom.element.Location.getTop(b);
}
if(this.__FY.height==null){this.__FY.height=qx.bom.element.Dimension.getHeight(b);
}if(this.__Gc==false&&top>=this.__FY.top&&top<=(this.__FY.top+this.__FY.height)){return;
}var c;
if(this.__Gc){c=qx.dom.Hierarchy.getFirstDescendant(document.getElementById(this.__Gb));
while(c!=null){if(this.__Gh(true,top,b,c)){this.__Gc=false;
return;
}c=qx.dom.Hierarchy.getNextElementSibling(c);
}}else{c=b;
}if(top-this.__Ga.top>0){c=qx.dom.Hierarchy.getNextElementSibling(c);

while(c!=null){if(c){if(this.__Gh(true,top,b,c)){return;
}}c=qx.dom.Hierarchy.getNextElementSibling(c);
}}else{var c=qx.dom.Hierarchy.getPreviousElementSibling(c);

while(c!=null){if(c){if(this.__Gh(false,top,b,c)){return;
}}c=qx.dom.Hierarchy.getPreviousElementSibling(c);
}}this.__Ga.left=a;
this.__Ga.top=top;
},__Gh:function(R,top,S,T){var U=qx.bom.element.Location.getTop(T);
var W=parseInt(qx.bom.element.Style.get(T,r));
var X=parseInt(qx.bom.element.Style.get(T,p));
var V=qx.bom.element.Dimension.getContentHeight(T)+X+W;
var Y;

if(R){if(top>=(U+(V/3))){Y=qx.dom.Hierarchy.getNextElementSibling(T);

if(Y!=S||Y==null){qx.dom.Element.insertAfter(S,T);
this.__FY.top=qx.bom.element.Location.getTop(S);
}return true;
}}else{if(top<=(U+V*2/3)){Y=qx.dom.Hierarchy.getPreviousElementSibling(T);

if(Y!=S||Y==null){qx.dom.Element.insertBefore(S,T);
this.__FY.top=qx.bom.element.Location.getTop(S);
}return true;
}}return false;
},checkGroupBox:function(d){if(this.__Gd[this.__Gb].left<=d&&this.__Gd[this.__Gb].right>=d){return;
}
for(var f in this.__Gd){if(f!=this.__Gb){if(this.__Gd[f].left<=d&&this.__Gd[f].right>=d){this.__Gb=f;
this.__Gc=true;
return;
}}}}},destruct:function(){this.__FY=this.__Ga=this.__Gb=this.__Gi=this.__Ge=this.__Gd=null;
}});
})();
(function(){var y="borderTopWidth",x="borderLeftWidth",w="marginTop",v="marginLeft",u="scroll",t="qx.client",s="border-box",r="borderBottomWidth",q="borderRightWidth",p="auto",N="padding",M="qx.bom.element.Location",L="paddingLeft",K="static",J="marginBottom",I="visible",H="BODY",G="paddingBottom",F="paddingTop",E="marginRight",C="position",D="margin",A="overflow",B="paddingRight",z="border";
qx.Class.define(M,{statics:{__gP:function(by,bz){return qx.bom.element.Style.get(by,bz,qx.bom.element.Style.COMPUTED_MODE,false);
},__gQ:function(bu,bv){return parseInt(qx.bom.element.Style.get(bu,bv,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gR:function(Y){var bc=0,top=0;
if(Y.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bb=qx.dom.Node.getWindow(Y);
bc-=qx.bom.Viewport.getScrollLeft(bb);
top-=qx.bom.Viewport.getScrollTop(bb);
}else{var ba=qx.dom.Node.getDocument(Y).body;
Y=Y.parentNode;
while(Y&&Y!=ba){bc+=Y.scrollLeft;
top+=Y.scrollTop;
Y=Y.parentNode;
}}return {left:bc,top:top};
},__gS:qx.core.Variant.select(t,{"mshtml":function(U){var W=qx.dom.Node.getDocument(U);
var V=W.body;
var X=0;
var top=0;
X-=V.clientLeft+W.documentElement.clientLeft;
top-=V.clientTop+W.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){X+=this.__gQ(V,x);
top+=this.__gQ(V,y);
}return {left:X,top:top};
},"webkit":function(Q){var S=qx.dom.Node.getDocument(Q);
var R=S.body;
var T=R.offsetLeft;
var top=R.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){T+=this.__gQ(R,x);
top+=this.__gQ(R,y);
}return {left:T,top:top};
},"gecko":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bP+=this.__gQ(bO,v);
top+=this.__gQ(bO,w);
}if(qx.bom.element.BoxSizing.get(bO)!==s){bP+=this.__gQ(bO,x);
top+=this.__gQ(bO,y);
}return {left:bP,top:top};
},"default":function(m){var n=qx.dom.Node.getDocument(m).body;
var o=n.offsetLeft;
var top=n.offsetTop;
return {left:o,top:top};
}}),__gT:qx.core.Variant.select(t,{"mshtml|webkit":function(bd){var bf=qx.dom.Node.getDocument(bd);
if(bd.getBoundingClientRect){var bg=bd.getBoundingClientRect();
var bh=bg.left;
var top=bg.top;
}else{var bh=bd.offsetLeft;
var top=bd.offsetTop;
bd=bd.offsetParent;
var be=bf.body;
while(bd&&bd!=be){bh+=bd.offsetLeft;
top+=bd.offsetTop;
bh+=this.__gQ(bd,x);
top+=this.__gQ(bd,y);
bd=bd.offsetParent;
}}return {left:bh,top:top};
},"gecko":function(b){if(b.getBoundingClientRect){var e=b.getBoundingClientRect();
var f=Math.round(e.left);
var top=Math.round(e.top);
}else{var f=0;
var top=0;
var c=qx.dom.Node.getDocument(b).body;
var d=qx.bom.element.BoxSizing;

if(d.get(b)!==s){f-=this.__gQ(b,x);
top-=this.__gQ(b,y);
}
while(b&&b!==c){f+=b.offsetLeft;
top+=b.offsetTop;
if(d.get(b)!==s){f+=this.__gQ(b,x);
top+=this.__gQ(b,y);
}if(b.parentNode&&this.__gP(b.parentNode,A)!=I){f+=this.__gQ(b.parentNode,x);
top+=this.__gQ(b.parentNode,y);
}b=b.offsetParent;
}}return {left:f,top:top};
},"default":function(br){var bt=0;
var top=0;
var bs=qx.dom.Node.getDocument(br).body;
while(br&&br!==bs){bt+=br.offsetLeft;
top+=br.offsetTop;
br=br.offsetParent;
}return {left:bt,top:top};
}}),get:function(bC,bD){if(bC.tagName==H){var location=this.__gU(bC);
var bK=location.left;
var top=location.top;
}else{var bE=this.__gS(bC);
var bJ=this.__gT(bC);
var scroll=this.__gR(bC);
var bK=bJ.left+bE.left-scroll.left;
var top=bJ.top+bE.top-scroll.top;
}var bF=bK+bC.offsetWidth;
var bG=top+bC.offsetHeight;

if(bD){if(bD==N||bD==u){var bH=qx.bom.element.Overflow.getX(bC);

if(bH==u||bH==p){bF+=bC.scrollWidth-bC.offsetWidth+this.__gQ(bC,x)+this.__gQ(bC,q);
}var bI=qx.bom.element.Overflow.getY(bC);

if(bI==u||bI==p){bG+=bC.scrollHeight-bC.offsetHeight+this.__gQ(bC,y)+this.__gQ(bC,r);
}}
switch(bD){case N:bK+=this.__gQ(bC,L);
top+=this.__gQ(bC,F);
bF-=this.__gQ(bC,B);
bG-=this.__gQ(bC,G);
case u:bK-=bC.scrollLeft;
top-=bC.scrollTop;
bF-=bC.scrollLeft;
bG-=bC.scrollTop;
case z:bK+=this.__gQ(bC,x);
top+=this.__gQ(bC,y);
bF-=this.__gQ(bC,q);
bG-=this.__gQ(bC,r);
break;
case D:bK-=this.__gQ(bC,v);
top-=this.__gQ(bC,w);
bF+=this.__gQ(bC,E);
bG+=this.__gQ(bC,J);
break;
}}return {left:bK,top:top,right:bF,bottom:bG};
},__gU:qx.core.Variant.select(t,{"default":function(O){var top=O.offsetTop+this.__gQ(O,w);
var P=O.offsetLeft+this.__gQ(O,v);
return {left:P,top:top};
},"mshtml":function(bw){var top=bw.offsetTop;
var bx=bw.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gQ(bw,w);
bx+=this.__gQ(bw,v);
}return {left:bx,top:top};
},"gecko":function(bL){var top=bL.offsetTop+this.__gQ(bL,w)+this.__gQ(bL,x);
var bM=bL.offsetLeft+this.__gQ(bL,v)+this.__gQ(bL,y);
return {left:bM,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(i,j){return this.get(i,j).top;
},getRight:function(g,h){return this.get(g,h).right;
},getBottom:function(bA,bB){return this.get(bA,bB).bottom;
},getRelative:function(bi,bj,bk,bl){var bn=this.get(bi,bk);
var bm=this.get(bj,bl);
return {left:bn.left-bm.left,top:bn.top-bm.top,right:bn.right-bm.right,bottom:bn.bottom-bm.bottom};
},getPosition:function(a){return this.getRelative(a,this.getOffsetParent(a));
},getOffsetParent:function(bo){var bq=bo.offsetParent||document.body;
var bp=qx.bom.element.Style;

while(bq&&(!/^body|html$/i.test(bq.tagName)&&bp.get(bq,C)===K)){bq=bq.offsetParent;
}return bq;
}}});
})();
(function(){var q="mshtml",p="qx.client",o="qx.bom.element.Dimension",n="paddingRight",m="paddingLeft",l="paddingTop",k="paddingBottom";
qx.Class.define(o,{statics:{getWidth:qx.core.Variant.select(p,{"gecko":function(A){if(A.getBoundingClientRect){var B=A.getBoundingClientRect();
return Math.round(B.right)-Math.round(B.left);
}else{return A.offsetWidth;
}},"default":function(C){return C.offsetWidth;
}}),getHeight:qx.core.Variant.select(p,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.bottom)-Math.round(j.top);
}else{return i.offsetHeight;
}},"default":function(s){return s.offsetHeight;
}}),getSize:function(r){return {width:this.getWidth(r),height:this.getHeight(r)};
},__gt:{visible:true,hidden:true},getContentWidth:function(t){var v=qx.bom.element.Style;
var w=qx.bom.element.Overflow.getX(t);
var x=parseInt(v.get(t,m),10);
var z=parseInt(v.get(t,n),10);

if(this.__gt[w]){return t.clientWidth-x-z;
}else{if(t.clientWidth>=t.scrollWidth){return Math.max(t.clientWidth,t.scrollWidth)-x-z;
}else{var y=t.scrollWidth-x;
var u=qx.bom.client.Engine;

if(u.NAME===q&&u.VERSION==6){y-=z;
}return y;
}}},getContentHeight:function(a){var c=qx.bom.element.Style;
var e=qx.bom.element.Overflow.getY(a);
var f=parseInt(c.get(a,l),10);
var d=parseInt(c.get(a,k),10);

if(this.__gt[e]){return a.clientHeight-f-d;
}else{if(a.clientHeight>=a.scrollHeight){return Math.max(a.clientHeight,a.scrollHeight)-f-d;
}else{var g=a.scrollHeight-f;
var b=qx.bom.client.Engine;

if(b.NAME===q&&b.VERSION==6){g-=d;
}return g;
}}},getContentSize:function(h){return {width:this.getContentWidth(h),height:this.getContentHeight(h)};
}}});
})();
(function(){var C="Number",B="qx.event.type.Event",A="update",z="linear",y="reverse",x="Boolean",w="setup",v="none",u="qx.fx.Base",t="sinodial",m="flicker",s="pulse",p="_applyDuration",l="easeOutQuad",k="spring",o="easeInQuad",n="full",q="wobble",j="finish",r="Object";
qx.Class.define(u,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__rj=qx.fx.Base.EffectState.IDLE;
this.__rk=a;
},events:{"setup":B,"update":B,"finish":B},properties:{duration:{init:0.5,check:C,apply:p},fps:{init:100,check:C},sync:{init:false,check:x},from:{init:0,check:C},to:{init:1,check:C},delay:{init:0.0,check:C},queue:{check:r},transition:{init:z,check:[z,o,l,t,y,m,q,s,k,v,n]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__rj:null,__rl:null,__rm:null,__rn:null,__ro:null,__rp:null,__rq:null,__rr:null,__rk:null,_getElement:function(){return this.__rk;
},_setElement:function(e){this.__rk=e;
},_applyDuration:function(c,d){},init:function(){this.__rj=qx.fx.Base.EffectState.PREPARING;
this.__rl=0;
this.__rm=this.getDelay()*1000+(new Date().getTime());
this.__rn=this.__rm+(this.getDuration()*1000);
this.__ro=this.getTo()-this.getFrom();
this.__rp=this.__rn-this.__rm;
this.__rq=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(w);
},update:function(f){},finish:function(){this.fireEvent(j);
},start:function(){if(this.__rj!=qx.fx.Base.EffectState.IDLE){return false;
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
},render:function(b){if(this.__rj==qx.fx.Base.EffectState.PREPARING){this.__rj=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__rj==qx.fx.Base.EffectState.RUNNING){this.__rr=qx.fx.Transition.get(this.getTransition())(b)*this.__ro+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__rr);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(A)){this.fireEvent(A);
}}},loop:function(g){if(g>=this.__rm){if(g>=this.__rn){this.end();
}var i=(g-this.__rm)/this.__rp;
var h=Math.round(i*this.__rq);
if(h>this.__rl){this.render(i);
this.__rl=h;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__rj=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__rj=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__rk=this.__rj=null;
}});
})();
(function(){var i="position",h="px",g="relative",f="Number",e="absolute",d="top",c="left",b='absolute',a="qx.fx.effect.core.Move";
qx.Class.define(a,{extend:qx.fx.Base,properties:{mode:{init:g,check:[g,e]},x:{init:0,check:f},y:{init:0,check:f}},members:{__ry:null,__rz:null,__rA:null,__rB:null,__rC:null,setup:function(){var m=this._getElement();
arguments.callee.base.call(this);

if(m.parentNode){this.__rA=qx.bom.element.Location.getLeft(m)-qx.bom.element.Location.getLeft(m.parentNode);
this.__rB=qx.bom.element.Location.getTop(m)-qx.bom.element.Location.getTop(m.parentNode);
}else{this.__rA=qx.bom.element.Location.getLeft(m);
this.__rB=qx.bom.element.Location.getTop(m);
}this.__rC=qx.bom.element.Style.get(m,i);
qx.bom.element.Style.set(m,i,e);

if(this.getMode()==b){this.__ry=this.getX()-this.__rA;
this.__rz=this.getY()-this.__rB;
}else{this.__ry=this.getX();
this.__rz=this.getY();
}},update:function(j){var l=this._getElement();
arguments.callee.base.call(this);
var k=Math.round(this.__ry*j+this.__rA);
var top=Math.round(this.__rz*j+this.__rB);
qx.bom.element.Style.set(l,c,k+h);
qx.bom.element.Style.set(l,d,top+h);
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),i,this.__rC);
}}});
})();
(function(){var f="__default",e="__rv",d="qx.fx.queue.Manager",c="singleton",b="object";
qx.Class.define(d,{extend:qx.core.Object,type:c,construct:function(){arguments.callee.base.call(this);
this.__rv={};
},members:{__rv:null,getQueue:function(a){if(typeof (this.__rv[a])==b){return this.__rv[a];
}else{return this.__rv[a]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(f);
}},destruct:function(){this._disposeMap(e);
}});
})();
(function(){var d="qx.fx.queue.Queue",c="Number";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__rw=[];
},properties:{limit:{init:Infinity,check:c}},members:{__rx:null,__rw:null,add:function(a){var b=new Date().getTime();
a._startOn+=b;
a._finishOn+=b;

if(this.__rw.length<this.getLimit()){this.__rw.push(a);
}else{a.resetState();
}
if(!this.__rx){this.__rx=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(e){qx.lang.Array.remove(this.__rw,e);

if(this.__rw.length==0){window.clearInterval(this.__rx);
delete this.__rx;
}},loop:function(){var f=new Date().getTime();

for(var i=0,g=this.__rw.length;i<g;i++){this.__rw[i]&&this.__rw[i].loop(f);
}}},destruct:function(){this.__rw=null;
}});
})();
(function(){var h="Number",g="static",f="qx.fx.Transition";
qx.Class.define(f,{type:g,statics:{get:function(p){return qx.fx.Transition[p]||false;
},linear:function(i){return i;
},easeInQuad:function(k){return Math.pow(2,10*(k-1));
},easeOutQuad:function(l){return (-Math.pow(2,-10*l)+1);
},sinodial:function(j){return (-Math.cos(j*Math.PI)/2)+0.5;
},reverse:function(e){return 1-e;
},flicker:function(a){var a=((-Math.cos(a*Math.PI)/4)+0.75)+Math.random()/4;
return a>1?1:a;
},wobble:function(d){return (-Math.cos(d*Math.PI*(9*d))/2)+0.5;
},pulse:function(m,n){n=(typeof (n)==h)?n:5;
return (Math.round((m%(1/n))*n)==0?Math.floor((m*n*2)-(m*n*2)):1-Math.floor((m*n*2)-(m*n*2)));
},spring:function(b){return 1-(Math.cos(b*4.5*Math.PI)*Math.exp(-b*6));
},none:function(o){return 0;
},full:function(c){return 1;
}}});
})();


qx.$$loader.init();

