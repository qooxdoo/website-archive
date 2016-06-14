(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"widgetbrowser.Application","qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.nativeScrollBars":true,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"","qx.theme":"qx.theme.Classic","qx.version":"1.6"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script"},"qxc.application.formdemo":{"resourceUri":"resource","sourceUri":"script"},"qxc.ui.versionlabel":{"resourceUri":"resource","sourceUri":"script"},"widgetbrowser":{"resourceUri":"resource","sourceUri":"script"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":null,"en":null};
qx.$$locales = {"C":null,"en":null};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"basic":[8191,8187,512],"boot":[8191],"control":[8191,8187,1177,1169,1043,131,35,4099,1041,3,1],"embed":[8191,8187,2080,2048],"embedframe":[8191,8187,35,34,2080,32],"form":[8191,8187,5138,1043,131,82,35,4099,3,4098,34,66,130,2],"list":[8191,8187,82,66,80,64],"misc":[8191,8187,1177,8],"tab":[8191,8187,256],"table":[8191,8187,1177,1169,5138,1043,5136,1041,1040,1024],"toolbar":[8191,8187,5138,4099,5136,4098,4096],"tree":[8191,8187,1177,1169,5138,1043,82,5136,1041,1040,80,16],"window":[8191,8187,1177,1169,131,130,128]},
  packages : {"1":{"uris":["__out__:widgetbrowser.classic.2e32630a9fd6.js"]},"2":{"uris":["__out__:widgetbrowser.classic.a99c1a428432.js"]},"3":{"uris":["__out__:widgetbrowser.classic.af70dd996a5c.js"]},"8":{"uris":["__out__:widgetbrowser.classic.20409d01ff30.js"]},"16":{"uris":["__out__:widgetbrowser.classic.0b28413d0d90.js"]},"32":{"uris":["__out__:widgetbrowser.classic.55f35684e926.js"]},"34":{"uris":["__out__:widgetbrowser.classic.ad2341aca8da.js"]},"35":{"uris":["__out__:widgetbrowser.classic.8c0e6ee6e837.js"]},"64":{"uris":["__out__:widgetbrowser.classic.fe9788497296.js"]},"66":{"uris":["__out__:widgetbrowser.classic.e2dc63a70670.js"]},"80":{"uris":["__out__:widgetbrowser.classic.8c8c279a401e.js"]},"82":{"uris":["__out__:widgetbrowser.classic.8609ab2ca0bb.js"]},"128":{"uris":["__out__:widgetbrowser.classic.ad1348669262.js"]},"130":{"uris":["__out__:widgetbrowser.classic.4f7ccda69f7e.js"]},"131":{"uris":["__out__:widgetbrowser.classic.3f86adff3b4a.js"]},"256":{"uris":["__out__:widgetbrowser.classic.91abafb23885.js"]},"512":{"uris":["__out__:widgetbrowser.classic.22753b893101.js"]},"1024":{"uris":["__out__:widgetbrowser.classic.d3d6ef237068.js"]},"1040":{"uris":["__out__:widgetbrowser.classic.f935d838b349.js"]},"1041":{"uris":["__out__:widgetbrowser.classic.5e29a13e7f29.js"]},"1043":{"uris":["__out__:widgetbrowser.classic.d4c27becbce3.js"]},"1169":{"uris":["__out__:widgetbrowser.classic.72474787efca.js"]},"1177":{"uris":["__out__:widgetbrowser.classic.7ac3ebc75893.js"]},"2048":{"uris":["__out__:widgetbrowser.classic.9efaa7de1031.js"]},"2080":{"uris":["__out__:widgetbrowser.classic.355fc5097455.js"]},"4096":{"uris":["__out__:widgetbrowser.classic.6ca7742a88b5.js"]},"4098":{"uris":["__out__:widgetbrowser.classic.6f9aff7ebcd6.js"]},"4099":{"uris":["__out__:widgetbrowser.classic.e354e78f1dd7.js"]},"5136":{"uris":["__out__:widgetbrowser.classic.3b39c7c8c688.js"]},"5138":{"uris":["__out__:widgetbrowser.classic.0c8e2499dae4.js"]},"8187":{"uris":["__out__:widgetbrowser.classic.e1639f2b9f32.js"]},"8191":{"uris":["__out__:widgetbrowser.classic.819ca94b026e.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {"basic":true,"control":true,"embed":true,"embedframe":true,"form":true,"list":true,"misc":true,"tab":true,"table":true,"toolbar":true,"tree":true,"window":true},
  bootIsInline : true,
  addNoCacheParam : false,
  
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
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  var item = list.shift();
  loadScript(item,  function() {
    if (isWebkit) {
      // force async, else Safari fails with a "maximum recursion depth exceeded"
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

qx.$$loader.importPackageData = function (dataMap, callback) {
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
  if (callback){
    callback(dataMap);
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

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['8191']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"}},"resources":{"qx/decoration/Classic/arrows-combined.gif":[124,7,"gif","qx"],"qx/decoration/Classic/arrows/down-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-38,0],"qx/decoration/Classic/arrows/down-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-87,0],"qx/decoration/Classic/arrows/down-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-53,0],"qx/decoration/Classic/arrows/down.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-113,0],"qx/decoration/Classic/arrows/forward-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-30,0],"qx/decoration/Classic/arrows/forward.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-18,0],"qx/decoration/Classic/arrows/left-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-92,0],"qx/decoration/Classic/arrows/left-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-58,0],"qx/decoration/Classic/arrows/left-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-15,0],"qx/decoration/Classic/arrows/left.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-120,0],"qx/decoration/Classic/arrows/next-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-80,0],"qx/decoration/Classic/arrows/next.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-109,0],"qx/decoration/Classic/arrows/previous-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-69,0],"qx/decoration/Classic/arrows/previous.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-65,0],"qx/decoration/Classic/arrows/rewind-invert.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-45,0],"qx/decoration/Classic/arrows/rewind.gif":[8,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-101,0],"qx/decoration/Classic/arrows/right-invert.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-61,0],"qx/decoration/Classic/arrows/right-small-invert.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",0,0],"qx/decoration/Classic/arrows/right-small.gif":[3,5,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-84,0],"qx/decoration/Classic/arrows/right.gif":[4,7,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-26,0],"qx/decoration/Classic/arrows/up-invert.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-73,0],"qx/decoration/Classic/arrows/up-small-invert.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-96,0],"qx/decoration/Classic/arrows/up-small.gif":[5,3,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-3,0],"qx/decoration/Classic/arrows/up.gif":[7,4,"gif","qx","qx/decoration/Classic/arrows-combined.gif",-8,0],"qx/decoration/Classic/checkbox-radiobutton-combined.png":[504,14,"png","qx"],"qx/decoration/Classic/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Classic/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Classic/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",-11,0],"qx/decoration/Classic/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Classic/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Classic/colorselector-combined.gif",0,0],"qx/decoration/Classic/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Classic/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-52,0],"qx/decoration/Classic/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-20,0],"qx/decoration/Classic/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Classic/cursors-combined.gif",-39,0],"qx/decoration/Classic/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Classic/cursors-combined.gif",0,0],"qx/decoration/Classic/datechooser/last-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/last-year.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-month.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year-invert.png":[16,16,"png","qx"],"qx/decoration/Classic/datechooser/next-year.png":[16,16,"png","qx"],"qx/decoration/Classic/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-336,0],"qx/decoration/Classic/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-28,0],"qx/decoration/Classic/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-462,0],"qx/decoration/Classic/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-112,0],"qx/decoration/Classic/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-140,0],"qx/decoration/Classic/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-98,0],"qx/decoration/Classic/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-308,0],"qx/decoration/Classic/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",0,0],"qx/decoration/Classic/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-266,0],"qx/decoration/Classic/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-84,0],"qx/decoration/Classic/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-476,0],"qx/decoration/Classic/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-392,0],"qx/decoration/Classic/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-196,0],"qx/decoration/Classic/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-154,0],"qx/decoration/Classic/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-350,0],"qx/decoration/Classic/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-448,0],"qx/decoration/Classic/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-70,0],"qx/decoration/Classic/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Classic/form/checkbox.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-490,0],"qx/decoration/Classic/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-210,0],"qx/decoration/Classic/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-406,0],"qx/decoration/Classic/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-378,0],"qx/decoration/Classic/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-252,0],"qx/decoration/Classic/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-182,0],"qx/decoration/Classic/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-294,0],"qx/decoration/Classic/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-420,0],"qx/decoration/Classic/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-56,0],"qx/decoration/Classic/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-322,0],"qx/decoration/Classic/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-364,0],"qx/decoration/Classic/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-434,0],"qx/decoration/Classic/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-168,0],"qx/decoration/Classic/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-126,0],"qx/decoration/Classic/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-42,0],"qx/decoration/Classic/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-280,0],"qx/decoration/Classic/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-238,0],"qx/decoration/Classic/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-14,0],"qx/decoration/Classic/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Classic/checkbox-radiobutton-combined.png",-224,0],"qx/decoration/Classic/menu-combined.gif":[64,7,"gif","qx"],"qx/decoration/Classic/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-16,0],"qx/decoration/Classic/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Classic/menu-combined.gif",-32,0],"qx/decoration/Classic/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",0,0],"qx/decoration/Classic/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Classic/menu-combined.gif",-48,0],"qx/decoration/Classic/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Classic/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Classic/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Classic/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Classic/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-30],"qx/decoration/Classic/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-60],"qx/decoration/Classic/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Classic/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",-15,0],"qx/decoration/Classic/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Classic/shadow-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-25],"qx/decoration/Classic/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-20],"qx/decoration/Classic/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Classic/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",0,0],"qx/decoration/Classic/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Classic/shadow-small-lr-combined.png",-5,0],"qx/decoration/Classic/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-5],"qx/decoration/Classic/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Classic/shadow-small-tb-combined.png",0,-10],"qx/decoration/Classic/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Classic/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-75],"qx/decoration/Classic/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-45],"qx/decoration/Classic/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Classic/shadow-tb-combined.png",0,-15],"qx/decoration/Classic/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Classic/splitpane/knob-horizontal.png":[4,15,"png","qx"],"qx/decoration/Classic/splitpane/knob-vertical.png":[15,4,"png","qx"],"qx/decoration/Classic/table-combined.png":[72,11,"png","qx"],"qx/decoration/Classic/table/ascending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-62,0],"qx/decoration/Classic/table/ascending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-52,0],"qx/decoration/Classic/table/boolean-false.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-31,0],"qx/decoration/Classic/table/boolean-true.png":[11,11,"png","qx","qx/decoration/Classic/table-combined.png",-10,0],"qx/decoration/Classic/table/descending-invert.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",-42,0],"qx/decoration/Classic/table/descending.png":[10,10,"png","qx","qx/decoration/Classic/table-combined.png",0,0],"qx/decoration/Classic/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Classic/table-combined.png",-21,0],"qx/decoration/Classic/tree/minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/tree/plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/cross_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/end_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/line.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/only_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_minus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/treevirtual/start_plus.gif":[19,16,"gif","qx"],"qx/decoration/Classic/window-captionbar-buttons-combined.gif":[36,9,"gif","qx"],"qx/decoration/Classic/window/close.gif":[10,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",0,0],"qx/decoration/Classic/window/maximize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-10,0],"qx/decoration/Classic/window/minimize.gif":[9,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-19,0],"qx/decoration/Classic/window/restore.gif":[8,9,"gif","qx","qx/decoration/Classic/window-captionbar-buttons-combined.gif",-28,0],"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/mimetypes/text-plain.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/places/folder.png":[16,16,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"widgetbrowser/helper.js":"widgetbrowser","widgetbrowser/loading66.gif":[66,66,"gif","widgetbrowser"]},"translations":{}};
(function(){var m="toString",k=".",j="Object",h='"',g="Array",f="()",e="String",d="Function",c=".prototype",b="function",K="Boolean",J="Error",I="constructor",H="warn",G="default",F="hasOwnProperty",E="string",D="toLocaleString",C="RegExp",B='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="debug",z="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,L){var N=name.split(k);
var parent=window;
var M=N[0];

for(var i=0,O=N.length-1;i<O;i++,M=N[i]){if(!parent[M]){parent=parent[M]={};
}else{parent=parent[M];
}}parent[M]=L;
return M;
},setDisplayName:function(P,Q,name){P.displayName=Q+k+name+f;
},setDisplayNames:function(R,S){for(var name in R){var T=R[name];

if(T instanceof Function){T.displayName=S+k+name+f;
}}},define:function(name,U){if(!U){var U={statics:{}};
}var ba;
var X=null;
qx.Bootstrap.setDisplayNames(U.statics,name);

if(U.members||U.extend){qx.Bootstrap.setDisplayNames(U.members,name+c);
ba=U.construct||new Function;

if(U.extend){this.extendClass(ba,ba,U.extend,name,Y);
}var V=U.statics||{};
for(var i=0,bb=qx.Bootstrap.getKeys(V),l=bb.length;i<l;i++){var bc=bb[i];
ba[bc]=V[bc];
}X=ba.prototype;
var W=U.members||{};
for(var i=0,bb=qx.Bootstrap.getKeys(W),l=bb.length;i<l;i++){var bc=bb[i];
X[bc]=W[bc];
}}else{ba=U.statics||{};
}var Y=this.createNamespace(name,ba);
ba.name=ba.classname=name;
ba.basename=Y;
ba.$$type=o;
if(!ba.hasOwnProperty(m)){ba.toString=this.genericToString;
}if(U.defer){U.defer(ba,X);
}qx.Bootstrap.$$registry[name]=U.statics;
return ba;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bd=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){bd=false;
}return bd;
})(),getEnvironmentSetting:function(be){if(qx.$$environment){return qx.$$environment[be];
}},setEnvironmentSetting:function(bf,bg){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bf]===undefined){qx.$$environment[bf]=bg;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bh,bi,bj,name,bk){var bn=bj.prototype;
var bm=new Function;
bm.prototype=bn;
var bl=new bm;
bh.prototype=bl;
bl.name=bl.classname=name;
bl.basename=bk;
bi.base=bh.superclass=bj;
bi.self=bh.constructor=bl.constructor=bh;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:function(bo){var length=0;

for(var bp in bo){length++;
}return length;
},objectMergeWith:function(bq,br,bs){if(bs===undefined){bs=true;
}
for(var bt in br){if(bs||bq[bt]===undefined){bq[bt]=br[bt];
}}return bq;
},__a:[r,F,D,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bu){var bv=[];
var bx=Object.prototype.hasOwnProperty;

for(var by in bu){if(bx.call(bu,by)){bv.push(by);
}}var bw=qx.Bootstrap.__a;

for(var i=0,a=bw,l=a.length;i<l;i++){if(bx.call(bu,a[i])){bv.push(a[i]);
}}return bv;
},"default":function(bz){var bA=[];
var bB=Object.prototype.hasOwnProperty;

for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);
}}return bA;
}})[typeof (Object.keys)==b?z:(function(){for(var bD in {toString:1}){return bD;
}})()!==m?u:G],getKeysAsString:function(bE){var bF=qx.Bootstrap.getKeys(bE);

if(bF.length==0){return p;
}return h+bF.join(B)+h;
},__b:{"[object String]":e,"[object Array]":g,"[object Object]":j,"[object RegExp]":C,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":d,"[object Error]":J},bind:function(bG,self,bH){var bI=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bJ=Array.prototype.slice.call(arguments,0,arguments.length);
return bG.apply(self,bI.concat(bJ));
};
},firstUp:function(bK){return bK.charAt(0).toUpperCase()+bK.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(bM){var bN=Object.prototype.toString.call(bM);
return (qx.Bootstrap.__b[bN]||bN.slice(8,-1));
},isString:function(bO){return (bO!==null&&(typeof bO===E||qx.Bootstrap.getClass(bO)==e||bO instanceof String||(!!bO&&!!bO.$$isString)));
},isArray:function(bP){return (bP!==null&&(bP instanceof Array||(bP&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bP.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bP)==g||(!!bP&&!!bP.$$isArray)));
},isObject:function(bQ){return (bQ!==undefined&&bQ!==null&&qx.Bootstrap.getClass(bQ)==j);
},isFunction:function(bR){return qx.Bootstrap.getClass(bR)==d;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bS,name){while(bS){if(bS.$$properties&&bS.$$properties[name]){return bS.$$properties[name];
}bS=bS.superclass;
}return null;
},hasProperty:function(bT,name){return !!qx.Bootstrap.getPropertyDefinition(bT,name);
},getEventType:function(bU,name){var bU=bU.constructor;

while(bU.superclass){if(bU.$$events&&bU.$$events[name]!==undefined){return bU.$$events[name];
}bU=bU.superclass;
}return null;
},supportsEvent:function(bV,name){return !!qx.Bootstrap.getEventType(bV,name);
},getByInterface:function(bW,bX){var bY,i,l;

while(bW){if(bW.$$implements){bY=bW.$$flatImplements;

for(i=0,l=bY.length;i<l;i++){if(bY[i]===bX){return bW;
}}}bW=bW.superclass;
}return null;
},hasInterface:function(ca,cb){return !!qx.Bootstrap.getByInterface(ca,cb);
},getMixins:function(cc){var cd=[];

while(cc){if(cc.$$includes){cd.push.apply(cd,cc.$$flatIncludes);
}cc=cc.superclass;
}return cd;
},$$logs:[],debug:function(ce,cf){qx.Bootstrap.$$logs.push([A,arguments]);
},info:function(cg,ch){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ci,cj){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(ck,cl){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(cm){}}});
})();
(function(){var cq="qx.bom.client.CssTransform.get3D",cp="default",co="|",cn="qx.allowUrlSettings",cm="qx.bom.client.Stylesheet.getInsertRule",cl="css.transform.3d",ck="qx.bom.client.Html.getDataset",cj="qx.bom.client.PhoneGap.getPhoneGap",ci="qx.bom.client.Html.getAudioAif",ch="qx.debug.dispose",bt="qx.bom.client.Xml.getAttributeNS",bs="qx.bom.client.Stylesheet.getRemoveImport",br="qx.bom.client.Css.getUserModify",bq="qx.bom.client.Css.getBoxShadow",bp="qx.bom.client.Event.getHashChange",bo="qx.bom.client.Plugin.getWindowsMedia",bn="qx.bom.client.Html.getVideo",bm="qx.bom.client.Device.getName",bl="qx.bom.client.Event.getTouch",bk="qx.optimization.strings",cx="qx.optimization.variables",cy="qx.bom.client.EcmaScript.getStackTrace",cv="qx.bom.client.EcmaScript.getObjectCount",cw="qx.bom.client.Xml.getSelectSingleNode",ct="css.gradient.linear",cu="qx.bom.client.Xml.getImplementation",cr="qx.bom.client.Html.getConsole",cs="qx.bom.client.Engine.getVersion",cz="qx.bom.client.Plugin.getQuicktime",cA="qx.propertyDebugLevel",bR="qx.bom.client.Html.getNaturalDimensions",bQ="qx.bom.client.Xml.getSelectNodes",bT="qx.bom.client.Xml.getElementsByTagNameNS",bS="qx.bom.client.Html.getDataUrl",bV="qx.bom.client.Flash.isAvailable",bU="qx.bom.client.Html.getCanvas",bX="qx.bom.client.Css.getBoxModel",bW="qx.bom.client.Plugin.getSilverlight",bP="qx.bom.client.Css.getUserSelect",bO="qx.bom.client.Css.getRadialGradient",a="module.property",b="qx.bom.client.Plugin.getWindowsMediaVersion",c="qx.bom.client.Stylesheet.getCreateStyleSheet",d="qx.bom.client.Locale.getLocale",e="module.events",f="module.databinding",g="qx.bom.client.Html.getFileReader",h="qx.bom.client.Css.getBorderImage",j="qx.bom.client.Stylesheet.getDeleteRule",k="qx.bom.client.Plugin.getDivXVersion",cE="qx.bom.client.Scroll.scrollBarOverlayed",cD="qx.bom.client.Plugin.getPdfVersion",cC=":",cB="qx.bom.client.Css.getLinearGradient",cI="qx.bom.client.Transport.getXmlHttpRequest",cH="qx.bom.client.Html.getClassList",cG="qx.bom.client.Event.getHelp",cF="qx.optimization.comments",cK="qx.bom.client.Locale.getVariant",cJ="qx.bom.client.Css.getBoxSizing",J="qx.bom.client.OperatingSystem.getName",K="module.logger",H="qx.bom.client.Css.getOverflowXY",I="qx.mobile.emulatetouch",N="qx.bom.client.Html.getAudioWav",O="qx.bom.client.Browser.getName",L="qx.bom.client.Css.getInlineBlock",M="qx.bom.client.Plugin.getPdf",F="qx.dynlocale",G="qx.bom.client.Html.getAudio",s="qx.core.Environment",r="qx.bom.client.CssTransform.getSupport",u="qx.bom.client.Html.getTextContent",t="qx.bom.client.Css.getPlaceholder",o="qx.bom.client.Css.getFloat",n="false",q="qx.bom.client.Html.getXul",p="qx.bom.client.Xml.getCreateNode",m="qxenv",l="qx.bom.client.Html.getSessionStorage",T="qx.bom.client.Html.getAudioAu",U="qx.bom.client.Css.getOpacity",V="qx.bom.client.Html.getVml",W="qx.bom.client.Css.getRgba",P="qx.bom.client.Transport.getMaxConcurrentRequestCount",Q="qx.bom.client.Css.getBorderRadius",R="qx.bom.client.Event.getPointer",S="qx.bom.client.Css.getGradients",X="qx.bom.client.Transport.getSsl",Y="qx.bom.client.Html.getWebWorker",C="qx.bom.client.Json.getJson",B="qx.bom.client.Browser.getQuirksMode",A="qx.bom.client.Css.getTextOverflow",z="qx.bom.client.Xml.getQualifiedItem",y="qx.bom.client.Html.getVideoOgg",x="&",w="qx.bom.client.Browser.getDocumentMode",v="qx.allowUrlVariants",E="qx.bom.client.Html.getContains",D="qx.bom.client.Plugin.getActiveX",ba=".",bb="qx.bom.client.Xml.getDomProperties",bc="qx.bom.client.CssAnimation.getSupport",bd="qx.debug.databinding",be="qx.optimization.basecalls",bf="qx.bom.client.Browser.getVersion",bg="qx.bom.client.Css.getUserSelectNone",bh="true",bi="qx.bom.client.Html.getSvg",bj="qx.optimization.privates",bx="qx.bom.client.Plugin.getDivX",bw="qx.bom.client.Runtime.getName",bv="qx.bom.client.Html.getLocalStorage",bu="qx.bom.client.Flash.getStrictSecurityModel",bB="qx.aspects",bA="qx.debug",bz="qx.dynamicmousewheel",by="qx.bom.client.Html.getAudioMp3",bD="qx.bom.client.Engine.getName",bC="qx.bom.client.Plugin.getGears",bK="qx.bom.client.Plugin.getQuicktimeVersion",bL="qx.bom.client.Html.getAudioOgg",bI="qx.bom.client.Plugin.getSilverlightVersion",bJ="qx.bom.client.Html.getCompareDocumentPosition",bG="qx.bom.client.Flash.getExpressInstall",bH="qx.bom.client.OperatingSystem.getVersion",bE="qx.bom.client.Html.getXPath",bF="qx.bom.client.Html.getGeoLocation",bM="qx.bom.client.Css.getAppearance",bN="qx.mobile.nativescroll",ca="qx.bom.client.Xml.getDomParser",bY="qx.bom.client.Stylesheet.getAddImport",cc="qx.optimization.variants",cb="qx.bom.client.Html.getVideoWebm",ce="qx.bom.client.Flash.getVersion",cd="qx.bom.client.PhoneGap.getNotification",cg="qx.bom.client.Html.getVideoH264",cf="qx.bom.client.Xml.getCreateElementNS";
qx.Bootstrap.define(s,{statics:{_checks:{},_asyncChecks:{},__c:{},_checksMap:{"engine.version":cs,"engine.name":bD,"browser.name":O,"browser.version":bf,"browser.documentmode":w,"browser.quirksmode":B,"runtime.name":bw,"device.name":bm,"locale":d,"locale.variant":cK,"os.name":J,"os.version":bH,"os.scrollBarOverlayed":cE,"plugin.gears":bC,"plugin.activex":D,"plugin.quicktime":cz,"plugin.quicktime.version":bK,"plugin.windowsmedia":bo,"plugin.windowsmedia.version":b,"plugin.divx":bx,"plugin.divx.version":k,"plugin.silverlight":bW,"plugin.silverlight.version":bI,"plugin.flash":bV,"plugin.flash.version":ce,"plugin.flash.express":bG,"plugin.flash.strictsecurity":bu,"plugin.pdf":M,"plugin.pdf.version":cD,"io.maxrequests":P,"io.ssl":X,"io.xhr":cI,"event.touch":bl,"event.pointer":R,"event.help":cG,"event.hashchange":bp,"ecmascript.objectcount":cv,"ecmascript.stacktrace":cy,"html.webworker":Y,"html.filereader":g,"html.geolocation":bF,"html.audio":G,"html.audio.ogg":bL,"html.audio.mp3":by,"html.audio.wav":N,"html.audio.au":T,"html.audio.aif":ci,"html.video":bn,"html.video.ogg":y,"html.video.h264":cg,"html.video.webm":cb,"html.storage.local":bv,"html.storage.session":l,"html.classlist":cH,"html.xpath":bE,"html.xul":q,"html.canvas":bU,"html.svg":bi,"html.vml":V,"html.dataset":ck,"html.dataurl":bS,"html.console":cr,"html.stylesheet.createstylesheet":c,"html.stylesheet.insertrule":cm,"html.stylesheet.deleterule":j,"html.stylesheet.addimport":bY,"html.stylesheet.removeimport":bs,"html.element.contains":E,"html.element.compareDocumentPosition":bJ,"html.element.textcontent":u,"html.image.naturaldimensions":bR,"json":C,"css.textoverflow":A,"css.placeholder":t,"css.borderradius":Q,"css.borderimage":h,"css.boxshadow":bq,"css.gradients":S,"css.gradient.linear":cB,"css.gradient.radial":bO,"css.boxmodel":bX,"css.rgba":W,"css.userselect":bP,"css.userselect.none":bg,"css.usermodify":br,"css.appearance":bM,"css.float":o,"css.boxsizing":cJ,"css.translate3d":cq,"css.animation":bc,"css.transform":r,"css.transform.3d":cq,"css.inlineblock":L,"css.opacity":U,"css.overflowxy":H,"phonegap":cj,"phonegap.notification":cd,"xml.implementation":cu,"xml.domparser":ca,"xml.selectsinglenode":cw,"xml.selectnodes":bQ,"xml.getelementsbytagnamens":bT,"xml.domproperties":bb,"xml.attributens":bt,"xml.createnode":p,"xml.getqualifieditem":z,"xml.createelementns":cf},get:function(cL){if(qx.Bootstrap.DEBUG){var cN={"css.translate3d":cl,"css.gradients":ct,"ecmascript.objectcount":null};

if(cL in cN){qx.Bootstrap.warn("The key '"+cL+"' is deprecated."+(cN[cL]?" Please use '"+cN[cL]+"' instead.":""));
}}if(this.__c[cL]!=undefined){return this.__c[cL];
}var cP=this._checks[cL];

if(cP){var cO=cP();
this.__c[cL]=cO;
return cO;
}var cM=this._getClassNameFromEnvKey(cL);

if(cM[0]!=undefined){var cQ=cM[0];
var cR=cM[1];
var cO=cQ[cR]();
this.__c[cL]=cO;
return cO;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(cL+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},_getClassNameFromEnvKey:function(cS){var cY=this._checksMap;

if(cY[cS]!=undefined){var cU=cY[cS];
var cX=cU.lastIndexOf(ba);

if(cX>-1){var cW=cU.slice(0,cX);
var cT=cU.slice(cX+1);
var cV=qx.Bootstrap.getByName(cW);

if(cV!=undefined){return [cV,cT];
}}}return [undefined,undefined];
},getAsync:function(da,db,self){var df=this;

if(this.__c[da]!=undefined){window.setTimeout(function(){db.call(self,df.__c[da]);
},0);
return;
}var de=this._asyncChecks[da];

if(de){de(function(dh){df.__c[da]=dh;
db.call(self,dh);
});
return;
}var dd=this._getClassNameFromEnvKey(da);

if(dd[0]!=undefined){var dg=dd[0];
var dc=dd[1];
dg[dc](function(di){df.__c[da]=di;
db.call(self,di);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(da+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(dj,dk){return this.__d(this.get(dj),dk);
},selectAsync:function(dl,dm,self){this.getAsync(dl,function(dn){var dp=this.__d(dl,dm);
dp.call(self,dn);
},this);
},__d:function(dq,dr){var dt=dr[dq];

if(dr.hasOwnProperty(dq)){return dt;
}for(var ds in dr){if(ds.indexOf(co)!=-1){var du=ds.split(co);

for(var i=0;i<du.length;i++){if(du[i]==dq){return dr[ds];
}}}}
if(dr[cp]!==undefined){return dr[cp];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+dq+'" ('+(typeof dq)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(dr)+'] found, and no default ("default") given');
}},filter:function(dv){var dx=[];

for(var dw in dv){if(this.get(dw)){dx.push(dv[dw]);
}}return dx;
},invalidateCacheKey:function(dy){delete this.__c[dy];
},add:function(dz,dA){if(this._checks[dz]==undefined){if(dA instanceof Function){this._checks[dz]=dA;
}else{this._checks[dz]=this.__g(dA);
}}},addAsync:function(dB,dC){if(this._checks[dB]==undefined){this._asyncChecks[dB]=dC;
}},getChecks:function(){return this._checks;
},getAsyncChecks:function(){return this._asyncChecks;
},_initDefaultQxValues:function(){this.add(cn,function(){return false;
});
this.add(v,function(){return false;
});
this.add(cA,function(){return 0;
});
this.add(bA,function(){return true;
});
this.add(bB,function(){return false;
});
this.add(F,function(){return true;
});
this.add(I,function(){return false;
});
this.add(bN,function(){return false;
});
this.add(bz,function(){return true;
});
this.add(bd,function(){return false;
});
this.add(ch,function(){return false;
});
this.add(be,function(){return false;
});
this.add(cF,function(){return false;
});
this.add(bj,function(){return false;
});
this.add(bk,function(){return false;
});
this.add(cx,function(){return false;
});
this.add(cc,function(){return false;
});
this.add(f,function(){return true;
});
this.add(K,function(){return true;
});
this.add(a,function(){return true;
});
this.add(e,function(){return true;
});
},__e:function(){if(qx&&qx.$$environment){for(var dE in qx.$$environment){var dD=qx.$$environment[dE];
this._checks[dE]=this.__g(dD);
}}},__f:function(){if(window.document&&window.document.location){var dF=window.document.location.search.slice(1).split(x);

for(var i=0;i<dF.length;i++){var dH=dF[i].split(cC);

if(dH.length!=3||dH[0]!=m){continue;
}var dI=dH[1];
var dG=decodeURIComponent(dH[2]);
if(dG==bh){dG=true;
}else if(dG==n){dG=false;
}else if(/^(\d|\.)+$/.test(dG)){dG=parseFloat(dG);
}this._checks[dI]=this.__g(dG);
}}},__g:function(dJ){return qx.Bootstrap.bind(function(dK){return dK;
},null,dJ);
}},defer:function(dL){dL._initDefaultQxValues();
dL.__e();
if(dL.get(cn)===true){dL.__f();
}}});
})();
(function(){var a="qx.util.OOUtil";
qx.Bootstrap.define(a,{statics:{classIsDefined:qx.Bootstrap.classIsDefined,getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,getByInterface:qx.Bootstrap.getByInterface,hasInterface:qx.Bootstrap.hasInterface,getMixins:qx.Bootstrap.getMixins}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.util.OOUtil.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__h:null,__i:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__j:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__j;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__j.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__k:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__l(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.util.OOUtil.hasInterface(q,r);

if(x){p[v]=this.__o(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__l:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.util.OOUtil.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.util.OOUtil.getPropertyDefinition(y,A).check==h;
}return true;
},__m:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__n:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.util.OOUtil.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__k(K,N,L,false);
this.__m(N,L);
this.__n(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__k(O.prototype,O,P,Q);
this.__m(O,P);
this.__n(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__o:function(){},__h:null,__i:function(){}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
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
(function(){var bB=';',bA='return this.',bz="string",by="boolean",bx='!==undefined)',bw="this.",bv="",bu="set",bt="setThemed",bs="resetThemed",bh='else if(this.',bg="reset",bf="setRuntime",be="init",bd="();",bc='else ',bb='if(this.',ba="resetRuntime",Y="return this.",X="get",bI=";",bJ="(a[",bG=' of an instance of ',bH="refresh",bE=' is not (yet) ready!");',bF="]);",bC='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bD='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bK='value !== null && value.nodeType === 9 && value.documentElement',bL='value !== null && value.$$type === "Mixin"',bl='return init;',bk='var init=this.',bn='value !== null && value.nodeType === 1 && value.attributes',bm="var parent = this.getLayoutParent();",bp="Error in property ",bo='qx.core.Assert.assertInstance(value, Date, msg) || true',br="if (!parent) return;",bq=" in method ",bj='qx.core.Assert.assertInstance(value, Error, msg) || true',bi='Undefined value is not allowed!',b="inherit",c='Is invalid!',d="MSIE 6.0",e="': ",f=" of class ",g='value !== null && value.nodeType !== undefined',h='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',j="module.events",k='qx.core.Assert.assertPositiveInteger(value, msg) || true',m='if(init==qx.core.Property.$$inherit)init=null;',bP='value !== null && value.$$type === "Interface"',bO='var inherit=prop.$$inherit;',bN="var value = parent.",bM="$$useinit_",bT="(value);",bS="$$runtime_",bR='Requires exactly one argument!',bQ="$$user_",bV='qx.core.Assert.assertArray(value, msg) || true',bU='qx.core.Assert.assertPositiveNumber(value, msg) || true',H="Boolean",I='return value;',F='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',G='Does not allow any arguments!',L="()",M="var a=arguments[0] instanceof Array?arguments[0]:arguments;",J='value !== null && value.$$type === "Theme"',K="())",D='return null;',E='qx.core.Assert.assertObject(value, msg) || true',u='qx.core.Assert.assertString(value, msg) || true',t="if (value===undefined) value = parent.",w='value !== null && value.$$type === "Class"',v='qx.core.Assert.assertFunction(value, msg) || true',q="object",p="$$init_",s="$$theme_",r='qx.core.Assert.assertMap(value, msg) || true',o='qx.core.Assert.assertNumber(value, msg) || true',n='Null value is not allowed!',R='qx.core.Assert.assertInteger(value, msg) || true',S="rv:1.8.1",T="shorthand",U='qx.core.Assert.assertInstance(value, RegExp, msg) || true',N='value !== null && value.type !== undefined',O='value !== null && value.document',P='throw new Error("Property ',Q="(!this.",V='qx.core.Assert.assertBoolean(value, msg) || true',W="toggle",C="$$inherit_",B=" with incoming value '",A="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",z="qx.core.Property",y="is",x='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(z,{statics:{__p:function(){if(qx.core.Environment.get(j)){qx.event.type.Data;
qx.event.dispatch.Direct;
}},__q:{"Boolean":V,"String":u,"Number":o,"Integer":R,"PositiveNumber":bU,"PositiveInteger":k,"Error":bj,"RegExp":U,"Object":E,"Array":bV,"Map":r,"Function":v,"Date":bo,"Node":g,"Element":bn,"Document":bK,"Window":O,"Event":N,"Class":w,"Mixin":bL,"Interface":bP,"Theme":J,"Color":bC,"Decorator":h,"Font":bD},__r:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:b,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bz,dereference:by,inheritable:by,nullable:by,themeable:by,refine:by,init:null,apply:bz,event:bz,check:null,transform:bz,deferredInit:by,validate:null},$$allowedGroupKeys:{name:bz,group:q,mode:bz,themeable:by},$$inheritable:{},__s:function(bW){var bX=this.__t(bW);

if(!bX.length){var bY=function(){};
}else{bY=this.__u(bX);
}bW.prototype.$$refreshInheritables=bY;
},__t:function(ca){var cc=[];

while(ca){var cb=ca.$$properties;

if(cb){for(var name in this.$$inheritable){if(cb[name]&&cb[name].inheritable){cc.push(name);
}}}ca=ca.superclass;
}return cc;
},__u:function(cd){var ch=this.$$store.inherit;
var cg=this.$$store.init;
var cf=this.$$method.refresh;
var ce=[bm,br];

for(var i=0,l=cd.length;i<l;i++){var name=cd[i];
ce.push(bN,ch[name],bI,t,cg[name],bI,bw,cf[name],bT);
}return new Function(ce.join(bv));
},attachRefreshInheritables:function(ci){ci.prototype.$$refreshInheritables=function(){qx.core.Property.__s(ci);
return this.$$refreshInheritables();
};
},attachMethods:function(cj,name,ck){ck.group?this.__v(cj,ck,name):this.__w(cj,ck,name);
},__v:function(cl,cm,name){var ct=qx.Bootstrap.firstUp(name);
var cs=cl.prototype;
var cu=cm.themeable===true;
var cv=[];
var cp=[];

if(cu){var cn=[];
var cr=[];
}var cq=M;
cv.push(cq);

if(cu){cn.push(cq);
}
if(cm.mode==T){var co=A;
cv.push(co);

if(cu){cn.push(co);
}}
for(var i=0,a=cm.group,l=a.length;i<l;i++){cv.push(bw,this.$$method.set[a[i]],bJ,i,bF);
cp.push(bw,this.$$method.reset[a[i]],bd);

if(cu){cn.push(bw,this.$$method.setThemed[a[i]],bJ,i,bF);
cr.push(bw,this.$$method.resetThemed[a[i]],bd);
}}this.$$method.set[name]=bu+ct;
cs[this.$$method.set[name]]=new Function(cv.join(bv));
this.$$method.reset[name]=bg+ct;
cs[this.$$method.reset[name]]=new Function(cp.join(bv));

if(cu){this.$$method.setThemed[name]=bt+ct;
cs[this.$$method.setThemed[name]]=new Function(cn.join(bv));
this.$$method.resetThemed[name]=bs+ct;
cs[this.$$method.resetThemed[name]]=new Function(cr.join(bv));
}},__w:function(cw,cx,name){var cz=qx.Bootstrap.firstUp(name);
var cB=cw.prototype;
if(cx.dereference===undefined&&typeof cx.check===bz){cx.dereference=this.__x(cx.check);
}var cA=this.$$method;
var cy=this.$$store;
cy.runtime[name]=bS+name;
cy.user[name]=bQ+name;
cy.theme[name]=s+name;
cy.init[name]=p+name;
cy.inherit[name]=C+name;
cy.useinit[name]=bM+name;
cA.get[name]=X+cz;
cB[cA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,cw,name,X);
};
cA.set[name]=bu+cz;
cB[cA.set[name]]=function(cC){return qx.core.Property.executeOptimizedSetter(this,cw,name,bu,arguments);
};
cA.reset[name]=bg+cz;
cB[cA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,bg);
};

if(cx.inheritable||cx.apply||cx.event||cx.deferredInit){cA.init[name]=be+cz;
cB[cA.init[name]]=function(cD){return qx.core.Property.executeOptimizedSetter(this,cw,name,be,arguments);
};
}
if(cx.inheritable){cA.refresh[name]=bH+cz;
cB[cA.refresh[name]]=function(cE){return qx.core.Property.executeOptimizedSetter(this,cw,name,bH,arguments);
};
}cA.setRuntime[name]=bf+cz;
cB[cA.setRuntime[name]]=function(cF){return qx.core.Property.executeOptimizedSetter(this,cw,name,bf,arguments);
};
cA.resetRuntime[name]=ba+cz;
cB[cA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,ba);
};

if(cx.themeable){cA.setThemed[name]=bt+cz;
cB[cA.setThemed[name]]=function(cG){return qx.core.Property.executeOptimizedSetter(this,cw,name,bt,arguments);
};
cA.resetThemed[name]=bs+cz;
cB[cA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,cw,name,bs);
};
}
if(cx.check===H){cB[W+cz]=new Function(Y+cA.set[name]+Q+cA.get[name]+K);
cB[y+cz]=new Function(Y+cA.get[name]+L);
}},__x:function(cH){return !!this.__r[cH];
},__y:function(cI){return this.__r[cI]||qx.util.OOUtil.classIsDefined(cI)||(qx.Interface&&qx.Interface.isDefined(cI));
},__z:{0:x,1:bR,2:bi,3:G,4:n,5:c},error:function(cJ,cK,cL,cM,cN){var cO=cJ.constructor.classname;
var cP=bp+cL+f+cO+bq+this.$$method[cM][cL]+B+cN+e;
throw new Error(cP+(this.__z[cK]||"Unknown reason: "+cK));
},__A:function(cQ,cR,name,cS,cT,cU){var cV=this.$$method[cS][name];
{cR[cV]=new Function("value",cT.join(""));
};
if(qx.core.Environment.get("qx.aspects")){cR[cV]=qx.core.Aspect.wrap(cQ.classname+"."+cV,cR[cV],"property");
}qx.Bootstrap.setDisplayName(cR[cV],cQ.classname+".prototype",cV);
if(cU===undefined){return cQ[cV]();
}else{return cQ[cV](cU[0]);
}},executeOptimizedGetter:function(cW,cX,name,cY){var db=cX.$$properties[name];
var dd=cX.prototype;
var da=[];
var dc=this.$$store;
da.push(bb,dc.runtime[name],bx);
da.push(bA,dc.runtime[name],bB);

if(db.inheritable){da.push(bh,dc.inherit[name],bx);
da.push(bA,dc.inherit[name],bB);
da.push(bc);
}da.push(bb,dc.user[name],bx);
da.push(bA,dc.user[name],bB);

if(db.themeable){da.push(bh,dc.theme[name],bx);
da.push(bA,dc.theme[name],bB);
}
if(db.deferredInit&&db.init===undefined){da.push(bh,dc.init[name],bx);
da.push(bA,dc.init[name],bB);
}da.push(bc);

if(db.init!==undefined){if(db.inheritable){da.push(bk,dc.init[name],bB);

if(db.nullable){da.push(m);
}else if(db.init!==undefined){da.push(bA,dc.init[name],bB);
}else{da.push(F,name,bG,cX.classname,bE);
}da.push(bl);
}else{da.push(bA,dc.init[name],bB);
}}else if(db.inheritable||db.nullable){da.push(D);
}else{da.push(P,name,bG,cX.classname,bE);
}return this.__A(cW,dd,name,cY,da);
},executeOptimizedSetter:function(de,df,name,dg,dh){var dm=df.$$properties[name];
var dl=df.prototype;
var dj=[];
var di=dg===bu||dg===bt||dg===bf||(dg===be&&dm.init===undefined);
var dk=dm.apply||dm.event||dm.inheritable;
var dn=this.__B(dg,name);
this.__C(dj,dm,name,dg,di);

if(di){this.__D(dj,df,dm,name);
}
if(dk){this.__E(dj,di,dn,dg);
}
if(dm.inheritable){dj.push(bO);
}
if(!dk){this.__G(dj,name,dg,di);
}else{this.__H(dj,dm,name,dg,di);
}
if(dm.inheritable){this.__I(dj,dm,name,dg);
}else if(dk){this.__J(dj,dm,name,dg);
}
if(dk){this.__K(dj,dm,name);
if(dm.inheritable&&dl._getChildren){this.__L(dj,name);
}}if(di){dj.push(I);
}return this.__A(de,dl,name,dg,dj,dh);
},__B:function(dp,name){if(dp==="setRuntime"||dp==="resetRuntime"){var dq=this.$$store.runtime[name];
}else if(dp==="setThemed"||dp==="resetThemed"){dq=this.$$store.theme[name];
}else if(dp==="init"){dq=this.$$store.init[name];
}else{dq=this.$$store.user[name];
}return dq;
},__C:function(dr,ds,name,dt,du){{if(!ds.nullable||ds.check||ds.inheritable){dr.push('var prop=qx.core.Property;');
}if(dt==="set"){dr.push('if(value===undefined)prop.error(this,2,"',name,'","',dt,'",value);');
}};
},__D:function(dv,dw,dx,name){if(dx.transform){dv.push('value=this.',dx.transform,'(value);');
}if(dx.validate){if(typeof dx.validate==="string"){dv.push('this.',dx.validate,'(value);');
}else if(dx.validate instanceof Function){dv.push(dw.classname,'.$$properties.',name);
dv.push('.validate.call(this, value);');
}}},__E:function(dy,dz,dA,dB){var dC=(dB==="reset"||dB==="resetThemed"||dB==="resetRuntime");

if(dz){dy.push('if(this.',dA,'===value)return value;');
}else if(dC){dy.push('if(this.',dA,'===undefined)return;');
}},__F:undefined,__G:function(dD,name,dE,dF){if(dE==="setRuntime"){dD.push('this.',this.$$store.runtime[name],'=value;');
}else if(dE==="resetRuntime"){dD.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dD.push('delete this.',this.$$store.runtime[name],';');
}else if(dE==="set"){dD.push('this.',this.$$store.user[name],'=value;');
}else if(dE==="reset"){dD.push('if(this.',this.$$store.user[name],'!==undefined)');
dD.push('delete this.',this.$$store.user[name],';');
}else if(dE==="setThemed"){dD.push('this.',this.$$store.theme[name],'=value;');
}else if(dE==="resetThemed"){dD.push('if(this.',this.$$store.theme[name],'!==undefined)');
dD.push('delete this.',this.$$store.theme[name],';');
}else if(dE==="init"&&dF){dD.push('this.',this.$$store.init[name],'=value;');
}},__H:function(dG,dH,name,dI,dJ){if(dH.inheritable){dG.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dG.push('var computed, old;');
}dG.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="resetRuntime"){dG.push('delete this.',this.$$store.runtime[name],';');
dG.push('if(this.',this.$$store.user[name],'!==undefined)');
dG.push('computed=this.',this.$$store.user[name],';');
dG.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dG.push('computed=this.',this.$$store.theme[name],';');
dG.push('else if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else{dG.push('old=computed=this.',this.$$store.runtime[name],';');
if(dI==="set"){dG.push('this.',this.$$store.user[name],'=value;');
}else if(dI==="reset"){dG.push('delete this.',this.$$store.user[name],';');
}else if(dI==="setThemed"){dG.push('this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
}else if(dI==="init"&&dJ){dG.push('this.',this.$$store.init[name],'=value;');
}}dG.push('}');
dG.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dI==="set"){if(!dH.inheritable){dG.push('old=this.',this.$$store.user[name],';');
}dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="reset"){if(!dH.inheritable){dG.push('old=this.',this.$$store.user[name],';');
}dG.push('delete this.',this.$$store.user[name],';');
dG.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dG.push('computed=this.',this.$$store.runtime[name],';');
dG.push('if(this.',this.$$store.theme[name],'!==undefined)');
dG.push('computed=this.',this.$$store.theme[name],';');
dG.push('else if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else{if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dH.inheritable){dG.push('computed=this.',this.$$store.user[name],';');
}else{dG.push('old=computed=this.',this.$$store.user[name],';');
}if(dI==="setThemed"){dG.push('this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
}else if(dI==="init"&&dJ){dG.push('this.',this.$$store.init[name],'=value;');
}}dG.push('}');
if(dH.themeable){dG.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dH.inheritable){dG.push('old=this.',this.$$store.theme[name],';');
}
if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="resetThemed"){dG.push('delete this.',this.$$store.theme[name],';');
dG.push('if(this.',this.$$store.init[name],'!==undefined){');
dG.push('computed=this.',this.$$store.init[name],';');
dG.push('this.',this.$$store.useinit[name],'=true;');
dG.push('}');
}else if(dI==="init"){if(dJ){dG.push('this.',this.$$store.init[name],'=value;');
}dG.push('computed=this.',this.$$store.theme[name],';');
}else if(dI==="refresh"){dG.push('computed=this.',this.$$store.theme[name],';');
}dG.push('}');
}dG.push('else if(this.',this.$$store.useinit[name],'){');

if(!dH.inheritable){dG.push('old=this.',this.$$store.init[name],';');
}
if(dI==="init"){if(dJ){dG.push('computed=this.',this.$$store.init[name],'=value;');
}else{dG.push('computed=this.',this.$$store.init[name],';');
}}else if(dI==="set"||dI==="setRuntime"||dI==="setThemed"||dI==="refresh"){dG.push('delete this.',this.$$store.useinit[name],';');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="refresh"){dG.push('computed=this.',this.$$store.init[name],';');
}}dG.push('}');
if(dI==="set"||dI==="setRuntime"||dI==="setThemed"||dI==="init"){dG.push('else{');

if(dI==="setRuntime"){dG.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dI==="set"){dG.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dI==="setThemed"){dG.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dI==="init"){if(dJ){dG.push('computed=this.',this.$$store.init[name],'=value;');
}else{dG.push('computed=this.',this.$$store.init[name],';');
}dG.push('this.',this.$$store.useinit[name],'=true;');
}dG.push('}');
}},__I:function(dK,dL,name,dM){dK.push('if(computed===undefined||computed===inherit){');

if(dM==="refresh"){dK.push('computed=value;');
}else{dK.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dK.push('if((computed===undefined||computed===inherit)&&');
dK.push('this.',this.$$store.init[name],'!==undefined&&');
dK.push('this.',this.$$store.init[name],'!==inherit){');
dK.push('computed=this.',this.$$store.init[name],';');
dK.push('this.',this.$$store.useinit[name],'=true;');
dK.push('}else{');
dK.push('delete this.',this.$$store.useinit[name],';}');
dK.push('}');
dK.push('if(old===computed)return value;');
dK.push('if(computed===inherit){');
dK.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dK.push('}');
dK.push('else if(computed===undefined)');
dK.push('delete this.',this.$$store.inherit[name],';');
dK.push('else this.',this.$$store.inherit[name],'=computed;');
dK.push('var backup=computed;');
if(dL.init!==undefined&&dM!=="init"){dK.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dK.push('if(old===undefined)old=null;');
}dK.push('if(computed===undefined||computed==inherit)computed=null;');
},__J:function(dN,dO,name,dP){if(dP!=="set"&&dP!=="setRuntime"&&dP!=="setThemed"){dN.push('if(computed===undefined)computed=null;');
}dN.push('if(old===computed)return value;');
if(dO.init!==undefined&&dP!=="init"){dN.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dN.push('if(old===undefined)old=null;');
}},__K:function(dQ,dR,name){if(dR.apply){dQ.push('this.',dR.apply,'(computed, old, "',name,'");');
}if(dR.event){dQ.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dR.event,"')){","reg.fireEvent(this, '",dR.event,"', qx.event.type.Data, [computed, old]",")}");
}},__L:function(dS,name){dS.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
dS.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
dS.push('}');
}},defer:function(dT){var dV=navigator.userAgent.indexOf(d)!=-1;
var dU=navigator.userAgent.indexOf(S)!=-1;
if(dV||dU){dT.__x=dT.__y;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__P(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__R(o,m.properties,true);
}if(m.members){this.__T(o,m.members,true,true,false);
}if(m.events){this.__Q(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__X(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__V(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__R(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__X(v,w,false);
},patch:function(x,y){qx.Class.__X(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.util.OOUtil.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__h:null,__N:null,__i:function(){},__O:function(){},__P:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__Y();
}
if(this.__bb(V,ba)){bd=this.__bc(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__Q:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__R:function(bj,bk,bl){if(!qx.core.Environment.get("module.property")){throw new Error("Property module disabled.");
}var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){if(!qx.core.Environment.get("module.events")){throw new Error("Events module not enabled.");
}var event={};
event[bm.event]="qx.event.type.Data";
this.__Q(bj,event,bl);
}if(bm.inheritable){this.__M.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){this.__M.attachRefreshInheritables(bj);
}}
if(!bm.refine){this.__M.attachMethods(bj,name,bm);
}}},__S:null,__T:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__U(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__U:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__V:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__W:function(bD){var name=bD.classname;
var bE=this.__bc(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__X:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__W(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__Q(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__R(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__T(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__Y:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__ba:function(){return function(){};
},__bb:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bc:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
}}}}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var d="set",c="reset",b="get",a="qx.core.MProperty";
qx.Mixin.define(a,{members:{set:function(e,f){var h=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(e)){if(!this[h[e]]){if(this[d+qx.Bootstrap.firstUp(e)]!=undefined){this[d+qx.Bootstrap.firstUp(e)](f);
return this;
}}return this[h[e]](f);
}else{for(var g in e){if(!this[h[g]]){if(this[d+qx.Bootstrap.firstUp(g)]!=undefined){this[d+qx.Bootstrap.firstUp(g)](e[g]);
continue;
}}this[h[g]](e[g]);
}return this;
}},get:function(i){var j=qx.core.Property.$$method.get;

if(!this[j[i]]){if(this[b+qx.Bootstrap.firstUp(i)]!=undefined){return this[b+qx.Bootstrap.firstUp(i)]();
}}return this[j[i]]();
},reset:function(k){var l=qx.core.Property.$$method.reset;

if(!this[l[k]]){if(this[c+qx.Bootstrap.firstUp(k)]!=undefined){this[c+qx.Bootstrap.firstUp(k)]();
return;
}}this[l[k]]();
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry",e="-",d="",c="-0";
qx.Class.define(f,{statics:{inShutDown:false,__j:{},__bV:0,__bW:[],__bX:d,__bY:{},register:function(h){var m=this.__j;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bW;

if(j.length>0&&true){k=j.pop();
}else{k=(this.__bV++)+this.__bX;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__j;

if(p&&p[o]){delete p[o];
this.__bW.push(o);
}try{delete n.$$hash;
}catch(q){if(n.removeAttribute){n.removeAttribute(g);
}}},toHashCode:function(r){var t=r.$$hash;

if(t!=null){return t;
}var s=this.__bW;

if(s.length>0){t=s.pop();
}else{t=(this.__bV++)+this.__bX;
}return r.$$hash=t;
},clearHashCode:function(u){var v=u.$$hash;

if(v!=null){this.__bW.push(v);
try{delete u.$$hash;
}catch(w){if(u.removeAttribute){u.removeAttribute(g);
}}}},fromHashCode:function(x){return this.__j[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__j;
var B=[];

for(var A in z){B.push(A);
}B.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var y,i=0,l=B.length;

while(true){try{for(;i<l;i++){A=B[i];
y=z[A];

if(y&&y.dispose){y.dispose();
}}}catch(C){qx.Bootstrap.error(this,"Could not dispose object "+y.toString()+": "+C,C);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__j;
},getRegistry:function(){return this.__j;
},getNextHash:function(){return this.__bV;
},getPostId:function(){return this.__bX;
},getStackTraces:function(){return this.__bY;
}},defer:function(D){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){D.__bX=e+(i+1);
return;
}}}D.__bX=c;
}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__ch:0,__ci:0,__cj:false,__ck:0,__cl:null,__cm:null,setMaxEntries:function(c){this.__cm=c;
this.clear();
},getMaxEntries:function(){return this.__cm;
},addEntry:function(d){this.__cl[this.__ch]=d;
this.__ch=this.__cn(this.__ch,1);
var e=this.getMaxEntries();

if(this.__ci<e){this.__ci++;
}if(this.__cj&&(this.__ck<e)){this.__ck++;
}},mark:function(){this.__cj=true;
this.__ck=0;
},clearMark:function(){this.__cj=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__ci){f=this.__ci;
}if(g&&this.__cj&&(f>this.__ck)){f=this.__ck;
}
if(f>0){var i=this.__cn(this.__ch,-1);
var h=this.__cn(i,-f+1);
var j;

if(h<=i){j=this.__cl.slice(h,i+1);
}else{j=this.__cl.slice(h,this.__ci).concat(this.__cl.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__cl=new Array(this.getMaxEntries());
this.__ci=0;
this.__ck=0;
this.__ch=0;
},__cn:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var u=".",t="function",s="",r="gecko",q="Maple",p="[object Opera]",o="mshtml",n="8.0",m="AppleWebKit/",l="9.0",e="[^\\.0-9]",k="engine.name",h="webkit",c="4.0",b="1.9.0.0",g="opera",f="Version/",i="5.0",a="engine.version",j="qx.bom.client.Engine",d="Gecko";
qx.Bootstrap.define(j,{statics:{getVersion:function(){var y=window.navigator.userAgent;
var w=s;

if(qx.bom.client.Engine.__bx()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(y)){if(y.indexOf(f)!=-1){var x=y.match(/Version\/(\d+)\.(\d+)/);
w=x[1]+u+x[2].charAt(0)+u+x[2].substring(1,x[2].length);
}else{w=RegExp.$1+u+RegExp.$2;

if(RegExp.$3!=s){w+=u+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__by()){if(/AppleWebKit\/([^ ]+)/.test(y)){w=RegExp.$1;
var z=RegExp(e).exec(w);

if(z){w=w.slice(0,z.index);
}}}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){if(/rv\:([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
}}else if(qx.bom.client.Engine.__bB()){if(/MSIE\s+([^\);]+)(\)|;)/.test(y)){w=RegExp.$1;
if(w<8&&/Trident\/([^\);]+)(\)|;)/.test(y)){if(RegExp.$1==c){w=n;
}else if(RegExp.$1==i){w=l;
}}}}else{var v=window.qxFail;

if(v&&typeof v===t){w=v().FULLVERSION;
}else{w=b;
qx.Bootstrap.warn("Unsupported client: "+y+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return w;
},getName:function(){var name;

if(qx.bom.client.Engine.__bx()){name=g;
}else if(qx.bom.client.Engine.__by()){name=h;
}else if(qx.bom.client.Engine.__bA()||qx.bom.client.Engine.__bz()){name=r;
}else if(qx.bom.client.Engine.__bB()){name=o;
}else{var A=window.qxFail;

if(A&&typeof A===t){name=A().NAME;
}else{name=r;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bx:function(){return window.opera&&Object.prototype.toString.call(window.opera)==p;
},__by:function(){return window.navigator.userAgent.indexOf(m)!=-1;
},__bz:function(){return window.navigator.userAgent.indexOf(q)!=-1;
},__bA:function(){return window.controllers&&window.navigator.product===d&&window.navigator.userAgent.indexOf(q)==-1;
},__bB:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(B){qx.core.Environment.add(a,B.getVersion);
qx.core.Environment.add(k,B.getName);
}});
})();
(function(){var p=":",o="ecmascript.stacktrace",n="Error created at",m="function",l="engine.name",k="...",j="qx.dev.StackTrace",h="",g="\n",f="?",c="/source/class/",e="anonymous",d="stack",b=".",a="stacktrace";
qx.Bootstrap.define(j,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(D){var x=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(x,0);
var v=this.getStackTraceFromCaller(arguments);
var t=v.length>x.length?v:x;

for(var i=0;i<Math.min(v.length,x.length);i++){var u=v[i];

if(u.indexOf(e)>=0){continue;
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
},"opera":function(){var E;

try{E.bar();
}catch(G){var F=this.getStackTraceFromError(G);
qx.lang.Array.removeAt(F,0);
return F;
}return [];
}}),getStackTraceFromCaller:function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(N){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(k);
break;
}I[K]=L;
}return M;
},getStackTraceFromError:function(O){var S=[];

if(qx.core.Environment.get(o)===d){var be=/@(.+):(\d+)$/gm;
var R;

while((R=be.exec(O.stack))!=null){var U=R[1];
var bc=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}
if(S.length>0){return this.__bU(S);
}var be=/at (.*)/gm;
var bd=/\((.*?)(:[^\/].*)\)/;
var Y=/(.*?)(:[^\/].*)/;
var R;

while((R=be.exec(O.stack))!=null){var X=bd.exec(R[1]);

if(!X){X=Y.exec(R[1]);
}
if(X){var ba=this.__bS(X[1]);
S.push(ba+X[2]);
}else{S.push(R[1]);
}}}else if(qx.core.Environment.get(o)===a){var Q=O.stacktrace;

if(Q.indexOf(n)>=0){Q=Q.split(n)[0];
}var be=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var T=R[2];
var U=R[3];
var ba=this.__bS(U);
S.push(ba+p+bc+p+T);
}
if(S.length>0){return this.__bU(S);
}var be=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var R;

while((R=be.exec(Q))!=null){var bc=R[1];
var U=R[2];
var ba=this.__bS(U);
S.push(ba+p+bc);
}}else if(O.message&&O.message.indexOf("Backtrace:")>=0){var W=qx.lang.String.trim(O.message.split("Backtrace:")[1]);
var V=W.split(g);

for(var i=0;i<V.length;i++){var P=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(P&&P.length>=2){var bc=P[1];
var bb=this.__bS(P[2]);
S.push(bb+p+bc);
}}}else if(O.sourceURL&&O.line){S.push(this.__bS(O.sourceURL)+p+O.line);
}return this.__bU(S);
},__bS:function(bf){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==m){return qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bf);
}return qx.dev.StackTrace.__bT(bf);
},__bT:function(bg){var bk=c;
var bh=bg.indexOf(bk);
var bj=bg.indexOf(f);

if(bj>=0){bg=bg.substring(0,bj);
}var bi=(bh==-1)?bg:bg.substring(bh+bk.length).replace(/\//g,b).replace(/\.js$/,h);
return bi;
},__bU:function(bl){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==m){return qx.dev.StackTrace.FORMAT_STACKTRACE(bl);
}return bl;
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Bootstrap.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{var bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Bootstrap.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var f="ecmascript.objectcount",d="stack",c="ecmascript.stacktrace",b="stacktrace",a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
},getStackTrace:function(){var e=new Error();
return e.stacktrace?b:e.stack?d:null;
}},defer:function(g){qx.core.Environment.add(f,g.getObjectCount);
qx.core.Environment.add(c,g.getStackTrace);
}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Bootstrap.define(g,{statics:{__bu:j,__bv:null,__bw:{},camelCase:function(q){var r=this.__bw[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__bw[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__bv===null){var y=m;
this.__bv=new RegExp(f+this.__bu.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__bu.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__bv,function(B){return B.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,d));
},trimLeft:function(D){return D.replace(/^\s+/,p);
},trimRight:function(E){return E.replace(/\s+$/,p);
},trim:function(F){return F.replace(/^\s+|\s+$/g,p);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;
},repeat:function(K,L){return K.length>0?new Array(L+1).join(K):p;
},pad:function(M,length,N){var O=length-M.length;

if(O>0){if(typeof N===l){N=c;
}return this.repeat(N,O)+M;
}else{return M;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(R,S){var T=R;
var i=S.length;

while(i--){T=T.replace(new RegExp(e+(i+1),o),S[i]+p);
}return T;
},escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(V){return V.split(/\B|\b/g);
},stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(X,Y){var bb=p;
var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+b;
return p;
});

if(Y===true){qx.lang.Function.globalEval(bb);
}return ba;
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__co:A,setLevel:function(I){this.__co=I;
},getLevel:function(){return this.__co;
},setTreshold:function(J){this.__cr.setMaxMessages(J);
},getTreshold:function(){return this.__cr.getMaxMessages();
},__cp:{},__cq:0,register:function(K){if(K.$$id){return;
}var M=this.__cq++;
this.__cp[M]=K;
K.$$id=M;
var L=this.__cs;
var N=this.__cr.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__co]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cp[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__ct(A,arguments);
},info:function(S,T){qx.log.Logger.__ct(e,arguments);
},warn:function(U,V){qx.log.Logger.__ct(r,arguments);
},error:function(W,X){qx.log.Logger.__ct(j,arguments);
},trace:function(Y){qx.log.Logger.__ct(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cr.clearHistory();
},__cr:new qx.log.appender.RingBuffer(50),__cs:{debug:0,info:1,warn:2,error:3},__ct:function(bv,bw){var bB=this.__cs;

if(bB[bv]<bB[this.__co]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cv(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cr.process(bD);
var bE=this.__cp;

for(var bz in bE){bE[bz].process(bD);
}},__cu:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cv:function(bH,bI){var bP=this.__cu(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cv(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cv(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__ct(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var e="info",d="debug",c="warn",b="qx.core.MLogging",a="error";
qx.Mixin.define(b,{members:{__cw:qx.log.Logger,debug:function(f){this.__cx(d,arguments);
},info:function(g){this.__cx(e,arguments);
},warn:function(h){this.__cx(c,arguments);
},error:function(i){this.__cx(a,arguments);
},trace:function(){this.__cw.trace(this);
},__cx:function(j,k){var l=qx.lang.Array.fromArguments(k);
l.unshift(this);
this.__cw[j].apply(this.__cw,l);
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView||e.parentWindow;
},getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(g){return this.getDocument(g).body;
},isNode:function(h){return !!(h&&h.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:case 3:case 4:return q.nodeValue;
}return null;
},isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;
}s=qx.dom.Node.getName(s);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);
}}});
})();
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Bootstrap.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:function(z,A){var B=l+A;
var C=(B in z);

if(!C){C=typeof z[B]==h;

if(!C&&z.setAttribute){z.setAttribute(B,c);
C=typeof z[B]==h;
z.removeAttribute(B);
}}return C;
}}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="__cD",j="UNKNOWN_",h="c",g="DOM_",c="WIN_",f="QX_",e="qx.event.Manager",b="capture",a="__cC",d="DOCUMENT_";
qx.Class.define(e,{extend:Object,construct:function(s,t){this.__cy=s;
this.__cz=qx.core.ObjectRegistry.toHashCode(s);
this.__cA=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cB={};
this.__cC={};
this.__cD={};
this.__cE={};
},statics:{__cF:0,getNextUniqueId:function(){return (this.__cF++)+o;
}},members:{__cA:null,__cB:null,__cD:null,__cG:null,__cC:null,__cE:null,__cy:null,__cz:null,getWindow:function(){return this.__cy;
},getWindowId:function(){return this.__cz;
},getHandler:function(u){var v=this.__cC[u.classname];

if(v){return v;
}return this.__cC[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__cD[w.classname];

if(x){return x;
}return this.__cD[w.classname]=new w(this,this.__cA);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cB[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cB;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cB[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__cB[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cH(P,W,R);
}else{this.__cI(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cB[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cB[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cH(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cF++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cB[bx];

if(!bz){bz=this.__cB[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cH(bp,bq,bs);
}var by=(qx.event.Manager.__cF++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cy){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=f+bA.classname+n+bB;
}else{bL=j+bA+n+bB;
}var bH=this.__cE;

if(bH[bL]){return bH[bL];
}var bK=this.__cA.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__cH:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cB[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cI(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cB[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cI(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cB[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===b;
this.__cI(cq,cv,cr);
}}delete this.__cB[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cB[cx];
},__cI:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cA.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__cA.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,a);
qx.util.DisposeUtil.disposeMap(this,k);
this.__cB=this.__cy=this.__cG=null;
this.__cA=this.__cE=null;
}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__cJ:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__cJ[f];

if(!e){e=new qx.event.Manager(d,this);
this.__cJ[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__cJ[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cC:[],addHandler:function(Q){this.__cC.push(Q);
this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__cC;
},__cD:[],addDispatcher:function(R,S){this.__cD.push(R);
this.__cD.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__cD;
}}});
})();
(function(){var a="qx.core.MEvents";
qx.Mixin.define(a,{members:{__cK:qx.event.Registration,addListener:function(b,c,self,d){if(!this.$$disposed){return this.__cK.addListener(this,b,c,self,d);
}return null;
},addListenerOnce:function(f,g,self,h){var i=function(e){this.removeListener(f,i,this,h);
g.call(self||this,e);
};
return this.addListener(f,i,this,h);
},removeListener:function(j,k,self,l){if(!this.$$disposed){return this.__cK.removeListener(this,j,k,self,l);
}return false;
},removeListenerById:function(m){if(!this.$$disposed){return this.__cK.removeListenerById(this,m);
}return false;
},hasListener:function(n,o){return this.__cK.hasListener(this,n,o);
},dispatchEvent:function(p){if(!this.$$disposed){return this.__cK.dispatchEvent(this,p);
}return true;
},fireEvent:function(q,r,s){if(!this.$$disposed){return this.__cK.fireEvent(this,q,r,s);
}return true;
},fireNonBubblingEvent:function(t,u,v){if(!this.$$disposed){return this.__cK.fireNonBubblingEvent(this,t,u,v);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__cK.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
}}});
})();
(function(){var j="module.property",h="module.events",g="qx.core.Object",f="[",e="$$user_",d="]",c="rv:1.8.1",b="MSIE 6.0",a="Object";
qx.Class.define(g,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvents,"module.property":qx.core.MProperty}),construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{__M:qx.core.Environment.get("module.property")?qx.core.Property:null,toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+f+this.$$hash+d;
},base:function(k,m){if(arguments.length===1){return k.callee.base.call(this);
}else{return k.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(n){return n.callee.self;
},clone:function(){if(!qx.core.Environment.get(j)){throw new Error("Cloning only possible with properties.");
}var p=this.constructor;
var o=new p;
var r=qx.Class.getProperties(p);
var q=this.__M.$$store.user;
var s=this.__M.$$method.set;
var name;
for(var i=0,l=r.length;i<l;i++){name=r[i];

if(this.hasOwnProperty(q[name])){o[s[name]](this[q[name]]);
}}return o;
},__cL:null,setUserData:function(t,u){if(!this.__cL){this.__cL={};
}this.__cL[t]=u;
},getUserData:function(v){if(!this.__cL){return null;
}var w=this.__cL[v];
return w===undefined?null:w;
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var B,z,y,C;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var A=this.constructor;
var x;

while(A.superclass){if(A.$$destructor){A.$$destructor.call(this);
}if(A.$$includes){x=A.$$flatIncludes;

for(var i=0,l=x.length;i<l;i++){if(x[i].$$destructor){x[i].$$destructor.call(this);
}}}A=A.superclass;
}if(this.__cM){this.__cM();
}},__cM:null,__cN:function(){var D=qx.Class.getProperties(this.constructor);

for(var i=0,l=D.length;i<l;i++){delete this[e+D[i]];
}},_disposeObjects:function(E){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(F){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(G){qx.util.DisposeUtil.disposeArray(this,G);
},_disposeMap:function(H){qx.util.DisposeUtil.disposeMap(this,H);
}},environment:{"qx.disposerDebugLevel":0},defer:function(I,J){var L=navigator.userAgent.indexOf(b)!=-1;
var K=navigator.userAgent.indexOf(c)!=-1;
if(L||K){J.__cM=J.__cN;
}},destruct:function(){if(qx.core.Environment.get(h)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}}qx.core.ObjectRegistry.unregister(this);
this.__cL=null;
if(qx.core.Environment.get(j)){var O=this.constructor;
var S;
var T=this.__M.$$store;
var Q=T.user;
var R=T.theme;
var M=T.inherit;
var P=T.useinit;
var N=T.init;

while(O){S=O.$$properties;

if(S){for(var name in S){if(S[name].dereference){this[Q[name]]=this[R[name]]=this[M[name]]=this[P[name]]=this[N[name]]=undefined;
}}}O=O.superclass;
}}}});
})();
(function(){var k="keypress",j="focusout",h="activate",g="Tab",f="singleton",d="deactivate",c="__hV",b="focusin",a="qx.ui.core.FocusHandler";
qx.Class.define(a,{extend:qx.core.Object,type:f,construct:function(){qx.core.Object.call(this);
this.__hV={};
},members:{__hV:null,__hW:null,__hX:null,__hY:null,connectTo:function(m){m.addListener(k,this.__ee,this);
m.addListener(b,this._onFocusIn,this,true);
m.addListener(j,this._onFocusOut,this,true);
m.addListener(h,this._onActivate,this,true);
m.addListener(d,this._onDeactivate,this,true);
},addRoot:function(n){this.__hV[n.$$hash]=n;
},removeRoot:function(o){delete this.__hV[o.$$hash];
},getActiveWidget:function(){return this.__hW;
},isActive:function(p){return this.__hW==p;
},getFocusedWidget:function(){return this.__hX;
},isFocused:function(q){return this.__hX==q;
},isFocusRoot:function(r){return !!this.__hV[r.$$hash];
},_onActivate:function(e){var t=e.getTarget();
this.__hW=t;
var s=this.__ia(t);

if(s!=this.__hY){this.__hY=s;
}},_onDeactivate:function(e){var u=e.getTarget();

if(this.__hW==u){this.__hW=null;
}},_onFocusIn:function(e){var v=e.getTarget();

if(v!=this.__hX){this.__hX=v;
v.visualizeFocus();
}},_onFocusOut:function(e){var w=e.getTarget();

if(w==this.__hX){this.__hX=null;
w.visualizeBlur();
}},__ee:function(e){if(e.getKeyIdentifier()!=g){return;
}
if(!this.__hY){return;
}e.stopPropagation();
e.preventDefault();
var x=this.__hX;

if(!e.isShiftPressed()){var y=x?this.__ie(x):this.__ic();
}else{var y=x?this.__if(x):this.__id();
}if(y){y.tabFocus();
}},__ia:function(z){var A=this.__hV;

while(z){if(A[z.$$hash]){return z;
}z=z.getLayoutParent();
}return null;
},__ib:function(B,C){if(B===C){return 0;
}var E=B.getTabIndex()||0;
var D=C.getTabIndex()||0;

if(E!=D){return E-D;
}var J=B.getContainerElement().getDomElement();
var I=C.getContainerElement().getDomElement();
var H=qx.bom.element.Location;
var G=H.get(J);
var F=H.get(I);
if(G.top!=F.top){return G.top-F.top;
}if(G.left!=F.left){return G.left-F.left;
}var K=B.getZIndex();
var L=C.getZIndex();

if(K!=L){return K-L;
}return 0;
},__ic:function(){return this.__ii(this.__hY,null);
},__id:function(){return this.__ij(this.__hY,null);
},__ie:function(M){var N=this.__hY;

if(N==M){return this.__ic();
}
while(M&&M.getAnonymous()){M=M.getLayoutParent();
}
if(M==null){return [];
}var O=[];
this.__ig(N,M,O);
O.sort(this.__ib);
var P=O.length;
return P>0?O[0]:this.__ic();
},__if:function(Q){var R=this.__hY;

if(R==Q){return this.__id();
}
while(Q&&Q.getAnonymous()){Q=Q.getLayoutParent();
}
if(Q==null){return [];
}var S=[];
this.__ih(R,Q,S);
S.sort(this.__ib);
var T=S.length;
return T>0?S[T-1]:this.__id();
},__ig:function(parent,U,V){var W=parent.getLayoutChildren();
var X;

for(var i=0,l=W.length;i<l;i++){X=W[i];
if(!(X instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(X)&&X.isEnabled()&&X.isVisible()){if(X.isTabable()&&this.__ib(U,X)<0){V.push(X);
}this.__ig(X,U,V);
}}},__ih:function(parent,Y,ba){var bb=parent.getLayoutChildren();
var bc;

for(var i=0,l=bb.length;i<l;i++){bc=bb[i];
if(!(bc instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(bc)&&bc.isEnabled()&&bc.isVisible()){if(bc.isTabable()&&this.__ib(Y,bc)>0){ba.push(bc);
}this.__ih(bc,Y,ba);
}}},__ii:function(parent,bd){var be=parent.getLayoutChildren();
var bf;

for(var i=0,l=be.length;i<l;i++){bf=be[i];
if(!(bf instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bf)&&bf.isEnabled()&&bf.isVisible()){if(bf.isTabable()){if(bd==null||this.__ib(bf,bd)<0){bd=bf;
}}bd=this.__ii(bf,bd);
}}return bd;
},__ij:function(parent,bg){var bh=parent.getLayoutChildren();
var bi;

for(var i=0,l=bh.length;i<l;i++){bi=bh[i];
if(!(bi instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(bi)&&bi.isEnabled()&&bi.isVisible()){if(bi.isTabable()){if(bg==null||this.__ib(bi,bg)>0){bg=bi;
}}bg=this.__ij(bi,bg);
}}return bg;
}},destruct:function(){this._disposeMap(c);
this.__hX=this.__hW=this.__hY=null;
}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__ik:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__ik(c);
},hasChildren:function(){return this.__ik(f);
},add:function(r,s){return this.__ik(j,r,s);
},remove:function(t){return this.__ik(a,t);
},removeAll:function(){return this.__ik(d);
},indexOf:function(u){return this.__ik(l,u);
},addAt:function(v,w,x){this.__ik(g,v,w,x);
},addBefore:function(y,z,A){this.__ik(i,y,z,A);
},addAfter:function(B,C,D){this.__ik(k,B,C,D);
},removeAt:function(E){return this.__ik(e,E);
}}});
})();
(function(){var f="qx.ui.core.MSingleSelectionHandling",d="changeSelection",c="changeSelected",b="__dy",a="qx.event.type.Data";
qx.Mixin.define(f,{events:{"changeSelection":a},members:{__dy:null,getSelection:function(){var g=this.__mm().getSelected();

if(g){return [g];
}else{return [];
}},setSelection:function(h){switch(h.length){case 0:this.resetSelection();
break;
case 1:this.__mm().setSelected(h[0]);
break;
default:throw new Error("Could only select one item, but the selection"+" array contains "+h.length+" items!");
}},resetSelection:function(){this.__mm().resetSelected();
},isSelected:function(i){return this.__mm().isSelected(i);
},isSelectionEmpty:function(){return this.__mm().isSelectionEmpty();
},getSelectables:function(j){return this.__mm().getSelectables(j);
},_onChangeSelected:function(e){var l=e.getData();
var k=e.getOldData();
l==null?l=[]:l=[l];
k==null?k=[]:k=[k];
this.fireDataEvent(d,l,k);
},__mm:function(){if(this.__dy==null){var m=this;
this.__dy=new qx.ui.core.SingleSelectionManager({getItems:function(){return m._getItems();
},isItemSelectable:function(n){if(m._isItemSelectable){return m._isItemSelectable(n);
}else{return n.isVisible();
}}});
this.__dy.addListener(c,this._onChangeSelected,this);
}this.__dy.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__dy;
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var f="change",d="qx.event.type.Data",c="qx.ui.form.MModelSelection",b="__mu",a="changeSelection";
qx.Mixin.define(c,{construct:function(){this.__mu=new qx.data.Array();
this.__mu.addListener(f,this.__mx,this);
this.addListener(a,this.__mw,this);
},events:{changeModelSelection:d},members:{__mu:null,__mv:false,__mw:function(){if(this.__mv){return;
}var k=this.getSelection();
var g=[];

for(var i=0;i<k.length;i++){var l=k[i];
var h=l.getModel?l.getModel():null;

if(h!==null){g.push(h);
}}if(g.length===k.length){try{this.setModelSelection(g);
}catch(e){throw new Error("Could not set the model selection. Maybe your models are not unique?");
}}},__mx:function(){this.__mv=true;
var n=this.getSelectables(true);
var p=[];
var o=this.__mu.toArray();

for(var i=0;i<o.length;i++){var r=o[i];

for(var j=0;j<n.length;j++){var s=n[j];
var m=s.getModel?s.getModel():null;

if(r===m){p.push(s);
break;
}}}this.setSelection(p);
this.__mv=false;
var q=this.getSelection();

if(!qx.lang.Array.equals(q,p)){this.__mw();
}},getModelSelection:function(){return this.__mu;
},setModelSelection:function(t){if(!t){this.__mu.removeAll();
return;
}t.unshift(this.__mu.getLength());
t.unshift(0);
var u=this.__mu.splice.apply(this.__mu,t);
u.dispose();
}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var r="Boolean",q="changeInvalidMessage",p="changeValue",o="String",n="_applyAllowEmptySelection",m="_applyInvalidMessage",k="qx.ui.form.RadioGroup",j="_applyValid",h="",g="changeRequired",c="changeValid",f="changeEnabled",d="__fI",b="changeSelection",a="_applyEnabled";
qx.Class.define(k,{extend:qx.core.Object,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(s){qx.core.Object.call(this);
this.__fI=[];
this.addListener(b,this.__fJ,this);

if(s!=null){this.add.apply(this,arguments);
}},properties:{enabled:{check:r,apply:a,event:f,init:true},wrap:{check:r,init:true},allowEmptySelection:{check:r,init:false,apply:n},valid:{check:r,init:true,apply:j,event:c},required:{check:r,init:false,event:g},invalidMessage:{check:o,init:h,event:q,apply:m},requiredInvalidMessage:{check:o,nullable:true,event:q}},members:{__fI:null,getItems:function(){return this.__fI;
},add:function(t){var u=this.__fI;
var v;

for(var i=0,l=arguments.length;i<l;i++){v=arguments[i];

if(qx.lang.Array.contains(u,v)){continue;
}v.addListener(p,this._onItemChangeChecked,this);
u.push(v);
v.setGroup(this);
if(v.getValue()){this.setSelection([v]);
}}if(!this.isAllowEmptySelection()&&u.length>0&&!this.getSelection()[0]){this.setSelection([u[0]]);
}},remove:function(w){var x=this.__fI;

if(qx.lang.Array.contains(x,w)){qx.lang.Array.remove(x,w);
if(w.getGroup()===this){w.resetGroup();
}w.removeListener(p,this._onItemChangeChecked,this);
if(w.getValue()){this.resetSelection();
}}},getChildren:function(){return this.__fI;
},_onItemChangeChecked:function(e){var y=e.getTarget();

if(y.getValue()){this.setSelection([y]);
}else if(this.getSelection()[0]==y){this.resetSelection();
}},_applyInvalidMessage:function(z,A){for(var i=0;i<this.__fI.length;i++){this.__fI[i].setInvalidMessage(z);
}},_applyValid:function(B,C){for(var i=0;i<this.__fI.length;i++){this.__fI[i].setValid(B);
}},_applyEnabled:function(D,E){var F=this.__fI;

if(D==null){for(var i=0,l=F.length;i<l;i++){F[i].resetEnabled();
}}else{for(var i=0,l=F.length;i<l;i++){F[i].setEnabled(D);
}}},_applyAllowEmptySelection:function(G,H){if(!G&&this.isSelectionEmpty()){this.resetSelection();
}},selectNext:function(){var I=this.getSelection()[0];
var K=this.__fI;
var J=K.indexOf(I);

if(J==-1){return;
}var i=0;
var length=K.length;
if(this.getWrap()){J=(J+1)%length;
}else{J=Math.min(J+1,length-1);
}
while(i<length&&!K[J].getEnabled()){J=(J+1)%length;
i++;
}this.setSelection([K[J]]);
},selectPrevious:function(){var L=this.getSelection()[0];
var N=this.__fI;
var M=N.indexOf(L);

if(M==-1){return;
}var i=0;
var length=N.length;
if(this.getWrap()){M=(M-1+length)%length;
}else{M=Math.max(M-1,0);
}
while(i<length&&!N[M].getEnabled()){M=(M-1+length)%length;
i++;
}this.setSelection([N[M]]);
},_getItems:function(){return this.getItems();
},_isAllowEmptySelection:function(){return this.isAllowEmptySelection();
},_isItemSelectable:function(O){return this.__fI.indexOf(O)!=-1;
},__fJ:function(e){var Q=e.getData()[0];
var P=e.getOldData()[0];

if(P){P.setValue(false);
}
if(Q){Q.setValue(true);
}}},destruct:function(){this._disposeArray(d);
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__ca:null,__cb:null,__cc:null,__cd:null,stringify:function(bb,bc,bd){this.__ca=p;
this.__cb=p;
this.__cd=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__cb+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__cb=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__cc=bc;
}else{this.__cc=null;
}return this.__ce(p,{'':bb});
},__ce:function(be,bf){var bi=this.__ca,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__cc===e){bj=this.__cc.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cf(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__ce(i,bj)||h;
}this.__cd.pop();
if(bg.length===0){var bh=s;
}else if(this.__ca){bh=E+this.__ca+bg.join(Y+this.__ca)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__ca=bi;
return bh;
case z:this.__ca+=this.__cb;
bg=[];

if(this.__cd.indexOf(bj)!==-1){throw new TypeError(V);
}this.__cd.push(bj);
if(this.__cc&&typeof this.__cc===f){var length=this.__cc.length;

for(var i=0;i<length;i+=1){var k=this.__cc[i];

if(typeof k===W){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__ce(k,bj);

if(v){bg.push(this.__cf(k)+(this.__ca?g:m)+v);
}}}}this.__cd.pop();
if(bg.length===0){var bh=A;
}else if(this.__ca){bh=w+this.__ca+bg.join(Y+this.__ca)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__ca=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cf:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__cg({'':j},p,bs):j;
}throw new SyntaxError(P);
},__cg:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cg(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Bootstrap.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__bM:true,__bN:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__bO(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__bM){qx.Bootstrap.error(bD+"\n Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{if(this.__bM){qx.Bootstrap.error(bD);
}throw new Error(bD);
}},__bO:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__bN(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__bN(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__bN(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__bN(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__bN(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__bN(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__bN(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__bN(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__bN(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__bN(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__bN(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__bN(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__bN(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__bN(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__bN(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__bN(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__bM=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__bM=true;
}
if(cQ==null){this.__bN(cP||p,s);
}cQ instanceof cN||this.__bN(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__bN(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__bN(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__bN(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__bN(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__bN(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__bN(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__bN(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__bN(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__bN(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__bN(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__bN(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__bN(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__bN(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__bN(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__bN(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__bN(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__bN(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__bN(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__bN(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__bN(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__bP(ea,bu)||this.__bN(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__bP(ec,z)||this.__bN(ed||p,b,ec,o);
},__bP:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bH=b+(c&&c.message?c.message:c);
Error.call(this,this.__bH);
this.__bK=d;
this.__bL=c;
},members:{__bL:null,__bK:null,__bH:null,toString:function(){return this.__bH;
},getArguments:function(){return this.__bK;
},getSourceException:function(){return this.__bL;
}},destruct:function(){this.__bL=null;
this.__bK=null;
this.__bH=null;
}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bQ=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bQ:null,message:null,getComment:function(){return this.__bQ;
},toString:function(){return this.__bQ+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bR=qx.dev.StackTrace.getStackTrace();
},members:{__bR:null,getStackTrace:function(){return this.__bR;
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__bC:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__bD=c||null;
this.__bE=d||window;

if(this.__bC()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bG,this);

if(this.__bF==null){this.__bF=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__bF(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bG,this);
}if(this.__bD==null){if(this.__bF!=null){window.onerror=this.__bF;
this.__bF=null;
}else{window.onerror=null;
}}}},__bG:function(i,j,k){if(this.__bD){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__bC()){var self=this;
return function(){if(!self.__bD){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__bD){this.__bD.call(this.__bE,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var g="repl",f="prop",e="qx.bom.client.Json",d="JSON",c='{"x":1}',b="json",a="val";
qx.Bootstrap.define(e,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(c).x===1&&JSON.stringify({"prop":a},function(k,v){return k===f?g:v;
}).indexOf(g)>0);
}},defer:function(h){qx.core.Environment.add(b,h.getJson);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:qx.core.Environment.get("json")?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dy=d;
this.__dz={};
qx.event.handler.Appear.__dA[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__dA:{},refresh:function(){var e=this.__dA;

for(var f in e){e[f].refresh();
}}},members:{__dy:null,__dz:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__dz;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__dz;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__dz;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__dy.dispatchEvent(w,t);
}}}},destruct:function(){this.__dy=this.__dz=null;
delete qx.event.handler.Appear.__dA[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var n="xhr",m="Microsoft.XMLHTTP",l="io.ssl",k="io.xhr",j="",i="file:",h="https:",g="webkit",f="gecko",e="activex",b="opera",d=".",c="io.maxrequests",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var o;
var r=qx.bom.client.Engine.getVersion().split(d);
var p=0;
var s=0;
var q=0;
if(r[0]){p=r[0];
}if(r[1]){s=r[1];
}if(r[2]){q=r[2];
}if(window.maxConnectionsPerServer){o=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==b){o=8;
}else if(qx.bom.client.Engine.getName()==g){o=4;
}else if(qx.bom.client.Engine.getName()==f&&((p>1)||((p==1)&&(s>9))||((p==1)&&(s==9)&&(q>=1)))){o=6;
}else{o=2;
}return o;
},getSsl:function(){return window.location.protocol===h;
},getXmlHttpRequest:function(){var t=window.ActiveXObject?(function(){if(window.location.protocol!==i){try{new window.XMLHttpRequest();
return n;
}catch(u){}}
try{new window.ActiveXObject(m);
return e;
}catch(v){}})():(function(){try{new window.XMLHttpRequest();
return n;
}catch(w){}})();
return t||j;
}},defer:function(x){qx.core.Environment.add(c,x.getMaxConcurrentRequestCount);
qx.core.Environment.add(l,x.getSsl);
qx.core.Environment.add(k,x.getXmlHttpRequest);
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__j:qx.$$resources||{},__jR:{}},members:{has:function(q){return !!this.self(arguments).__j[q];
},getData:function(r){return this.self(arguments).__j[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__j[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__j[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__j[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__j[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__j[A[4]];

if(z){var D=A[4];
var C=this.constructor.__j[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__j[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__jR[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__j[I];
var L=this.constructor.__j[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__jR[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__jR[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__jR[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__jR[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__jR[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__jR[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__hz:null,_invalidChildrenCache:null,__hE:null,invalidateLayoutCache:function(){this.__hz=null;
},renderLayout:function(c,d){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__hz){return this.__hz;
}return this.__hz=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(e){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var f=this.__hE;

if(f instanceof qx.ui.core.LayoutItem){f.clearSeparators();
}},_renderSeparator:function(g,h){this.__hE.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__hE){throw new Error("It is not possible to manually set the connected widget.");
}this.__hE=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__hE;
},_applyLayoutChange:function(){if(this.__hE){this.__hE.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__hE.getLayoutChildren();
}},destruct:function(){this.__hE=this.__hz=null;
}});
})();
(function(){var m="bottom",l="top",k="_applyLayoutChange",j="top-left",h="bottom-left",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",a="Integer",b="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:a,init:4,apply:k},iconPosition:{check:[g,l,f,m,j,h],init:g,apply:k},center:{check:b,init:false,apply:k}},members:{verifyLayoutProperty:null,renderLayout:function(n,o){var x=qx.ui.layout.Util;
var q=this.getIconPosition();
var t=this._getLayoutChildren();
var length=t.length;
var I,top,H,r;
var C,w;
var A=this.getGap();
var F=this.getCenter();
if(q===m||q===f){var y=length-1;
var u=-1;
var s=-1;
}else{var y=0;
var u=length;
var s=1;
}if(q==l||q==m){if(F){var B=0;

for(var i=y;i!=u;i+=s){r=t[i].getSizeHint().height;

if(r>0){B+=r;

if(i!=y){B+=A;
}}}top=Math.round((o-B)/2);
}else{top=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
H=Math.min(w.maxWidth,Math.max(n,w.minWidth));
r=w.height;
I=x.computeHorizontalAlignOffset(d,H,n);
C.renderLayout(I,top,H,r);
if(r>0){top+=r+A;
}}}else{var v=n;
var p=null;
var E=0;

for(var i=y;i!=u;i+=s){C=t[i];
H=C.getSizeHint().width;

if(H>0){if(!p&&C instanceof qx.ui.basic.Label){p=C;
}else{v-=H;
}E++;
}}
if(E>1){var D=(E-1)*A;
v-=D;
}
if(p){var w=p.getSizeHint();
var z=Math.max(w.minWidth,Math.min(v,w.maxWidth));
v-=z;
}
if(F&&v>0){I=Math.round(v/2);
}else{I=0;
}
for(var i=y;i!=u;i+=s){C=t[i];
w=C.getSizeHint();
r=Math.min(w.maxHeight,Math.max(o,w.minHeight));

if(C===p){H=z;
}else{H=w.width;
}var G=e;

if(q==j){G=l;
}else if(q==h){G=m;
}top=x.computeVerticalAlignOffset(G,w.height,o);
C.renderLayout(I,top,H,r);
if(H>0){I+=H+A;
}}}},_computeSizeHint:function(){var T=this._getLayoutChildren();
var length=T.length;
var L,R;
if(length===1){var L=T[0].getSizeHint();
R={width:L.width,height:L.height,minWidth:L.minWidth,minHeight:L.minHeight};
}else{var P=0,Q=0;
var M=0,O=0;
var N=this.getIconPosition();
var S=this.getGap();

if(N===l||N===m){var J=0;

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
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){if(f==null){f=this.getBackgroundColor();
}{f=qx.theme.manager.Color.getInstance().resolve(f);
};
g.backgroundColor=f||a;
},_resizeBackgroundColor:function(h,i,j){var k=this.getInsets();
i-=k.left+k.right;
j-=k.top+k.bottom;
return {left:k.left,top:k.top,width:i,height:j};
},_applyBackgroundColor:function(){}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__lc:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__lc=null;
},getInsets:function(){if(this.__lc){return this.__lc;
}var j=this._getDefaultInsets();
return this.__lc={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__lc=null;
}},destruct:function(){this.__lc=null;
}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){{var G=qx.theme.manager.Color.getInstance();
var K=G.resolve(this.getColorTop());
var H=G.resolve(this.getColorRight());
var F=G.resolve(this.getColorBottom());
var J=G.resolve(this.getColorLeft());
};
var I=this.getWidthTop();

if(I>0){E[m]=I+g+this.getStyleTop()+D+(K||c);
}var I=this.getWidthRight();

if(I>0){E[k]=I+g+this.getStyleRight()+D+(H||c);
}var I=this.getWidthBottom();

if(I>0){E[s]=I+g+this.getStyleBottom()+D+(F||c);
}var I=this.getWidthLeft();

if(I>0){E[n]=I+g+this.getStyleLeft()+D+(J||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(L,M,N){var O=this.getInsets();
M-=O.left+O.right;
N-=O.top+O.bottom;
if(M<0){M=0;
}
if(N<0){N=0;
}return {left:O.left-this.getWidthLeft(),top:O.top-this.getWidthTop(),width:M,height:N};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__rg;
this._resizeBorder=this.__rf;
this._styleBorder=this.__rd;
this._generateMarkup=this.__re;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__rc:null,__rd:function(D){{var F=qx.theme.manager.Color.getInstance();
var G=F.resolve(this.getInnerColorTop());
var J=F.resolve(this.getInnerColorRight());
var H=F.resolve(this.getInnerColorBottom());
var I=F.resolve(this.getInnerColorLeft());
};
D.position=t;
var E=this.getInnerWidthTop();

if(E>0){D[e]=E+j+this.getStyleTop()+i+G;
}var E=this.getInnerWidthRight();

if(E>0){D[b]=E+j+this.getStyleRight()+i+J;
}var E=this.getInnerWidthBottom();

if(E>0){D[c]=E+j+this.getStyleBottom()+i+H;
}var E=this.getInnerWidthLeft();

if(E>0){D[d]=E+j+this.getStyleLeft()+i+I;
}},__re:function(K){var O=this._generateBackgroundMarkup(K);
{var M=qx.theme.manager.Color.getInstance();
var R=M.resolve(this.getColorTop());
var N=M.resolve(this.getColorRight());
var L=M.resolve(this.getColorBottom());
var Q=M.resolve(this.getColorLeft());
};
K[e]=h;
K[b]=h;
K[c]=h;
K[d]=h;
K[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){K[C]=h;
}var P=this.getWidthTop();

if(P>0){K[e]=P+j+this.getStyleTop()+i+R;
}var P=this.getWidthRight();

if(P>0){K[b]=P+j+this.getStyleRight()+i+N;
}var P=this.getWidthBottom();

if(P>0){K[c]=P+j+this.getStyleBottom()+i+L;
}var P=this.getWidthLeft();

if(P>0){K[d]=P+j+this.getStyleLeft()+i+Q;
}K[l]=s;
K[y]=0;
K[p]=0;
return this.__rc=this._generateBackgroundMarkup(K,O);
},__rf:function(S,T,U){var V=this.getInsets();
T-=V.left+V.right;
U-=V.top+V.bottom;
var W=V.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=V.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:W,top:top,width:T,height:U,elementToApplyDimensions:S.firstChild};
},__rg:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var e="px",d="qx.ui.decoration.Double",c="css.boxmodel",b="content",a="scale";
qx.Class.define(d,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MDoubleBorder],construct:function(f,g,h,innerWidth,i){qx.ui.decoration.Abstract.call(this);
if(f!=null){this.setWidth(f);
}
if(g!=null){this.setStyle(g);
}
if(h!=null){this.setColor(h);
}
if(innerWidth!=null){this.setInnerWidth(innerWidth);
}
if(i!=null){this.setInnerColor(i);
}},members:{__nx:null,_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
},_isInitialized:function(){return !!this.__nx;
},getMarkup:function(j){if(this.__nx){return this.__nx;
}var k={};
this._styleBorder(k);
return this.__nx=this._generateMarkup(k);
},resize:function(l,m,n){var s=this.getBackgroundImage()&&this.getBackgroundRepeat()==a;
var q=this.getInsets();

if(s||qx.core.Environment.get(c)==b){var innerWidth=m-q.left-q.right;
var innerHeight=n-q.top-q.bottom;
}else{var o=q.top-this.getInnerWidthTop();
var t=q.bottom-this.getInnerWidthBottom();
var p=q.left-this.getInnerWidthLeft();
var r=q.right-this.getInnerWidthRight();
var innerWidth=m-p-r;
var innerHeight=n-o-t;
}if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}
if(l.firstChild){l.firstChild.style.width=innerWidth+e;
l.firstChild.style.height=innerHeight+e;
}l.style.left=(q.left-this.getWidthLeft()-this.getInnerWidthLeft())+e;
l.style.top=(q.top-this.getWidthTop()-this.getInnerWidthTop())+e;
},tint:function(u,v){this._tintBackgroundColor(u,v,u.style);
}},destruct:function(){this.__nx=null;
}});
})();
(function(){var m="object",l="_applyTheme",k="",j="_",h="qx.ui.decoration.",g="__jS",f="qx.theme.manager.Decoration",e=".",d="Theme",c="changeTheme",a="string",b="singleton";
qx.Class.define(f,{type:b,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:l,event:c}},members:{__jS:null,resolve:function(n){if(!n){return null;
}
if(typeof n===m){return n;
}var s=this.getTheme();

if(!s){return null;
}var p=this.__jS;

if(!p){p=this.__jS={};
}var o=p[n];

if(o){return o;
}var v=s.decorations[n];

if(!v){return null;
}if(!v.style){v.style={};
}var q=v;

while(q.include){q=s.decorations[q.include];
if(!v.decorator&&q.decorator){v.decorator=q.decorator;
}if(q.style){for(var u in q.style){if(v.style[u]==undefined){v.style[u]=q.style[u];
}}}}var r=v.decorator;

if(r==null){throw new Error("Missing definition of which decorator to use in entry: "+n+"!");
}if(r instanceof Array){var t=r.concat([]);

for(var i=0;i<t.length;i++){t[i]=t[i].basename.replace(e,k);
}var name=h+t.join(j);

if(!qx.Class.getByName(name)){qx.Class.define(name,{extend:qx.ui.decoration.DynamicDecorator,include:r});
}r=qx.Class.getByName(name);
}return p[n]=(new r).set(v.style);
},isValidPropertyValue:function(w){if(typeof w===a){return this.isDynamic(w);
}else if(typeof w===m){var x=w.constructor;
return qx.Class.hasInterface(x,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(y){if(!y){return false;
}var z=this.getTheme();

if(!z){return false;
}return !!z.decorations[y];
},isCached:function(A){return !this.__jS?false:qx.lang.Object.contains(this.__jS,A);
},_applyTheme:function(B,C){var E=qx.util.AliasManager.getInstance();

if(C){for(var D in C.aliases){E.remove(D);
}}
if(B){for(var D in B.aliases){E.add(D,B.aliases[D]);
}}
if(!B){this.__jS={};
}}},destruct:function(){this._disposeMap(g);
}});
})();
(function(){var b="qx.ui.core.DecoratorFactory",a="$$nopool$$";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__cO={};
},statics:{MAX_SIZE:15,__hp:a},members:{__cO:null,getDecoratorElement:function(c){var h=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(c)){var f=c;
var e=qx.theme.manager.Decoration.getInstance().resolve(c);
}else{var f=h.__hp;
e=c;
}var g=this.__cO;

if(g[f]&&g[f].length>0){var d=g[f].pop();
}else{var d=this._createDecoratorElement(e,f);
}d.$$pooled=false;
return d;
},poolDecorator:function(i){if(!i||i.$$pooled||i.isDisposed()){return;
}var l=qx.ui.core.DecoratorFactory;
var j=i.getId();

if(j==l.__hp){i.dispose();
return;
}var k=this.__cO;

if(!k[j]){k[j]=[];
}
if(k[j].length>l.MAX_SIZE){i.dispose();
}else{i.$$pooled=true;
k[j].push(i);
}},_createDecoratorElement:function(m,n){var o=new qx.html.Decorator(m,n);
return o;
},toString:function(){return qx.core.Object.prototype.toString.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var q=this.__cO;

for(var p in q){qx.util.DisposeUtil.disposeArray(q,p);
}}this.__cO=null;
}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__hw:null,__hx:null,__hy:null,__hz:null,__hA:null,__hB:null,__hC:null,getBounds:function(){return this.__hB||this.__hx||null;
},clearSeparators:function(){},renderSeparator:function(y,z){},renderLayout:function(A,top,B,C){var D;
var E=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var E=this._getHeightForWidth(B);
}
if(E!=null&&E!==this.__hw){this.__hw=E;
qx.ui.core.queue.Layout.add(this);
return null;
}var G=this.__hx;

if(!G){G=this.__hx={};
}var F={};

if(A!==G.left||top!==G.top){F.position=true;
G.left=A;
G.top=top;
}
if(B!==G.width||C!==G.height){F.size=true;
G.width=B;
G.height=C;
}if(this.__hy){F.local=true;
delete this.__hy;
}
if(this.__hA){F.margin=true;
delete this.__hA;
}return F;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__hy;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__hy=true;
this.__hz=null;
},getSizeHint:function(H){var I=this.__hz;

if(I){return I;
}
if(H===false){return null;
}I=this.__hz=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__hw&&this.getHeight()==null){I.height=this.__hw;
}if(I.minWidth>I.width){I.width=I.minWidth;
}
if(I.maxWidth<I.width){I.width=I.maxWidth;
}
if(!this.getAllowGrowX()){I.maxWidth=I.width;
}
if(!this.getAllowShrinkX()){I.minWidth=I.width;
}if(I.minHeight>I.height){I.height=I.minHeight;
}
if(I.maxHeight<I.height){I.height=I.maxHeight;
}
if(!this.getAllowGrowY()){I.maxHeight=I.height;
}
if(!this.getAllowShrinkY()){I.minHeight=I.height;
}return I;
},_computeSizeHint:function(){var N=this.getMinWidth()||0;
var K=this.getMinHeight()||0;
var O=this.getWidth()||N;
var M=this.getHeight()||K;
var J=this.getMaxWidth()||Infinity;
var L=this.getMaxHeight()||Infinity;
return {minWidth:N,width:O,maxWidth:J,minHeight:K,height:M,maxHeight:L};
},_hasHeightForWidth:function(){var P=this._getLayout();

if(P){return P.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(Q){var R=this._getLayout();

if(R&&R.hasHeightForWidth()){return R.getHeightForWidth(Q);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__hA=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__hB;
},setUserBounds:function(S,top,T,U){this.__hB={left:S,top:top,width:T,height:U};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__hB;
qx.ui.core.queue.Layout.add(this);
},__hD:{},setLayoutProperties:function(V){if(V==null){return;
}var W=this.__hC;

if(!W){W=this.__hC={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(V);
}for(var X in V){if(V[X]==null){delete W[X];
}else{W[X]=V[X];
}}},getLayoutProperties:function(){return this.__hC||this.__hD;
},clearLayoutProperties:function(){delete this.__hC;
},updateLayoutProperties:function(Y){var ba=this._getLayout();

if(ba){var bb;
ba.invalidateChildrenCache();
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
},clone:function(){var bc=qx.core.Object.prototype.clone.call(this);
var bd=this.__hC;

if(bd){bc.__hC=qx.lang.Object.clone(bd);
}return bc;
}},destruct:function(){this.$$parent=this.$$subparent=this.__hC=this.__hx=this.__hB=this.__hz=null;
}});
})();
(function(){var cb="px",ca="Boolean",bY="qx.event.type.Drag",bX="qx.event.type.Mouse",bW="visible",bV="qx.event.type.Focus",bU="Integer",bT="qx.event.type.Touch",bS="qx.event.type.Data",bR="engine.name",bx="excluded",bw="_applyPadding",bv="qx.event.type.Event",bu="on",bt="mshtml",bs="hidden",br="contextmenu",bq="String",bp="tabIndex",bo="focused",ci="changeVisibility",cj="hovered",cg="qx.event.type.KeySequence",ch="absolute",ce="backgroundColor",cf="drag",cc="div",cd="disabled",ck="move",cl="dragstart",bK="qx.dynlocale",bJ="dragchange",bM="dragend",bL="resize",bO="Decorator",bN="zIndex",bQ="opacity",bP="default",bI="Color",bH="changeToolTipText",c="beforeContextmenuOpen",d="_applyNativeContextMenu",f="__kG",g="engine.version",h="_applyBackgroundColor",j="event.pointer",k="__kH",m="_applyFocusable",n="changeShadow",o="qx.event.type.KeyInput",cp="createChildControl",co="browser.documentmode",cn="Font",cm="_applyShadow",ct="_applyEnabled",cs="_applySelectable",cr="Number",cq="_applyKeepActive",cv="_applyVisibility",cu="__kR",N="repeat",O="qxDraggable",L="syncAppearance",M="paddingLeft",R="__kK",S="_applyDroppable",P="__kM",Q="#",J="qx.event.type.MouseWheel",K="_applyCursor",w="_applyDraggable",v="changeTextColor",y="$$widget",x="changeContextMenu",s="paddingTop",r="changeSelectable",u="__kL",t="hideFocus",q="none",p="outline",X="_applyAppearance",Y="_applyOpacity",ba="url(",bb=")",T="qx.ui.core.Widget",U="_applyFont",V="cursor",W="qxDroppable",bc="__kT",bd="changeZIndex",G="changeEnabled",F="changeFont",E="_applyDecorator",D="_applyZIndex",C="_applyTextColor",B="qx.ui.menu.Menu",A="__kP",z="_applyToolTipText",I="true",H="widget",be="changeDecorator",bf="_applyTabIndex",bg="changeAppearance",bh="shorthand",bi="/",bj="",bk="_applyContextMenu",bl="paddingBottom",bm="changeNativeContextMenu",bn="undefined",bB="qx.ui.tooltip.ToolTip",bA="qxKeepActive",bz="_applyKeepFocus",by="paddingRight",bF="changeBackgroundColor",bE="changeLocale",bD="qxKeepFocus",bC="opera",bG="qx/static/blank.gif";
qx.Class.define(T,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){qx.ui.core.LayoutItem.call(this);
this.__kG=this._createContainerElement();
this.__kH=this.__kS();
this.__kG.add(this.__kH);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:bv,disappear:bv,createChildControl:bS,resize:bS,move:bS,syncAppearance:bS,mousemove:bX,mouseover:bX,mouseout:bX,mousedown:bX,mouseup:bX,click:bX,dblclick:bX,contextmenu:bX,beforeContextmenuOpen:bS,mousewheel:J,touchstart:bT,touchend:bT,touchmove:bT,touchcancel:bT,tap:bT,swipe:bT,keyup:cg,keydown:cg,keypress:cg,keyinput:o,focus:bV,blur:bV,focusin:bV,focusout:bV,activate:bV,deactivate:bV,capture:bv,losecapture:bv,drop:bY,dragleave:bY,dragover:bY,drag:bY,dragstart:bY,dragend:bY,dragchange:bY,droprequest:bY},properties:{paddingTop:{check:bU,init:0,apply:bw,themeable:true},paddingRight:{check:bU,init:0,apply:bw,themeable:true},paddingBottom:{check:bU,init:0,apply:bw,themeable:true},paddingLeft:{check:bU,init:0,apply:bw,themeable:true},padding:{group:[s,by,bl,M],mode:bh,themeable:true},zIndex:{nullable:true,init:null,apply:D,event:bd,check:bU,themeable:true},decorator:{nullable:true,init:null,apply:E,event:be,check:bO,themeable:true},shadow:{nullable:true,init:null,apply:cm,event:n,check:bO,themeable:true},backgroundColor:{nullable:true,check:bI,apply:h,event:bF,themeable:true},textColor:{nullable:true,check:bI,apply:C,event:v,themeable:true,inheritable:true},font:{nullable:true,apply:U,check:cn,event:F,themeable:true,inheritable:true,dereference:true},opacity:{check:cr,apply:Y,themeable:true,nullable:true,init:null},cursor:{check:bq,apply:K,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:bB,nullable:true},toolTipText:{check:bq,nullable:true,event:bH,apply:z},toolTipIcon:{check:bq,nullable:true,event:bH},blockToolTip:{check:ca,init:false},visibility:{check:[bW,bs,bx],init:bW,apply:cv,event:ci},enabled:{init:true,check:ca,inheritable:true,apply:ct,event:G},anonymous:{init:false,check:ca},tabIndex:{check:bU,nullable:true,apply:bf},focusable:{check:ca,init:false,apply:m},keepFocus:{check:ca,init:false,apply:bz},keepActive:{check:ca,init:false,apply:cq},draggable:{check:ca,init:false,apply:w},droppable:{check:ca,init:false,apply:S},selectable:{check:ca,init:false,event:r,apply:cs},contextMenu:{check:B,apply:bk,nullable:true,event:x},nativeContextMenu:{check:ca,init:false,themeable:true,event:bm,apply:d},appearance:{check:bq,init:H,apply:X,event:bg}},statics:{DEBUG:false,getWidgetByElement:function(cw,cx){while(cw){var cy=cw.$$widget;
if(cy!=null){var cz=qx.core.ObjectRegistry.fromHashCode(cy);
if(!cx||!cz.getAnonymous()){return cz;
}}try{cw=cw.parentNode;
}catch(e){return null;
}}return null;
},contains:function(parent,cA){while(cA){if(parent==cA){return true;
}cA=cA.getLayoutParent();
}return false;
},__kI:new qx.ui.core.DecoratorFactory(),__kJ:new qx.ui.core.DecoratorFactory()},members:{__kG:null,__kH:null,__kK:null,__kL:null,__kM:null,__kN:null,__kO:null,__kP:null,_getLayout:function(){return this.__kP;
},_setLayout:function(cB){if(this.__kP){this.__kP.connectToWidget(null);
}
if(cB){cB.connectToWidget(this);
}this.__kP=cB;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cC=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cC);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cC);
}this.$$refreshInheritables();
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__kQ:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var cD=qx.theme.manager.Decoration.getInstance();
var cF=cD.resolve(a).getInsets();
var cE=cD.resolve(b).getInsets();

if(cF.top!=cE.top||cF.right!=cE.right||cF.bottom!=cE.bottom||cF.left!=cE.left){return true;
}return false;
},renderLayout:function(cG,top,cH,cI){var cR=qx.ui.core.LayoutItem.prototype.renderLayout.call(this,cG,top,cH,cI);
if(!cR){return null;
}var cK=this.getContainerElement();
var content=this.getContentElement();
var cO=cR.size||this._updateInsets;
var cS=cb;
var cP={};
if(cR.position){cP.left=cG+cS;
cP.top=top+cS;
}if(cR.size){cP.width=cH+cS;
cP.height=cI+cS;
}
if(cR.position||cR.size){cK.setStyles(cP);
}
if(cO||cR.local||cR.margin){var cJ=this.getInsets();
var innerWidth=cH-cJ.left-cJ.right;
var innerHeight=cI-cJ.top-cJ.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var cM={};

if(this._updateInsets){cM.left=cJ.left+cS;
cM.top=cJ.top+cS;
}
if(cO){cM.width=innerWidth+cS;
cM.height=innerHeight+cS;
}
if(cO||this._updateInsets){content.setStyles(cM);
}
if(cR.size){var cQ=this.__kM;

if(cQ){cQ.setStyles({width:cH+cb,height:cI+cb});
}}
if(cR.size||this._updateInsets){if(this.__kK){this.__kK.resize(cH,cI);
}}
if(cR.size){if(this.__kL){var cJ=this.__kL.getInsets();
var cN=cH+cJ.left+cJ.right;
var cL=cI+cJ.top+cJ.bottom;
this.__kL.resize(cN,cL);
}}
if(cO||cR.local||cR.margin){if(this.__kP&&this.hasLayoutChildren()){this.__kP.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(cR.position&&this.hasListener(ck)){this.fireDataEvent(ck,this.getBounds());
}
if(cR.size&&this.hasListener(bL)){this.fireDataEvent(bL,this.getBounds());
}delete this._updateInsets;
return cR;
},__kR:null,clearSeparators:function(){var cU=this.__kR;

if(!cU){return;
}var cV=qx.ui.core.Widget.__kI;
var content=this.getContentElement();
var cT;

for(var i=0,l=cU.length;i<l;i++){cT=cU[i];
cV.poolDecorator(cT);
content.remove(cT);
}cU.length=0;
},renderSeparator:function(cW,cX){var cY=qx.ui.core.Widget.__kI.getDecoratorElement(cW);
this.getContentElement().add(cY);
cY.resize(cX.width,cX.height);
cY.setStyles({left:cX.left+cb,top:cX.top+cb});
if(!this.__kR){this.__kR=[cY];
}else{this.__kR.push(cY);
}},_computeSizeHint:function(){var dg=this.getWidth();
var df=this.getMinWidth();
var db=this.getMaxWidth();
var de=this.getHeight();
var dc=this.getMinHeight();
var dd=this.getMaxHeight();
var dh=this._getContentHint();
var da=this.getInsets();
var dj=da.left+da.right;
var di=da.top+da.bottom;

if(dg==null){dg=dh.width+dj;
}
if(de==null){de=dh.height+di;
}
if(df==null){df=dj;

if(dh.minWidth!=null){df+=dh.minWidth;
if(df>db&&db!=null){df=db;
}}}
if(dc==null){dc=di;

if(dh.minHeight!=null){dc+=dh.minHeight;
if(dc>dd&&dd!=null){dc=dd;
}}}
if(db==null){if(dh.maxWidth==null){db=Infinity;
}else{db=dh.maxWidth+dj;
if(db<df&&df!=null){db=df;
}}}
if(dd==null){if(dh.maxHeight==null){dd=Infinity;
}else{dd=dh.maxHeight+di;
if(dd<dc&&dc!=null){dd=dc;
}}}return {width:dg,minWidth:df,maxWidth:db,height:de,minHeight:dc,maxHeight:dd};
},invalidateLayoutCache:function(){qx.ui.core.LayoutItem.prototype.invalidateLayoutCache.call(this);

if(this.__kP){this.__kP.invalidateLayoutCache();
}},_getContentHint:function(){var dl=this.__kP;

if(dl){if(this.hasLayoutChildren()){var dk;
var dm=dl.getSizeHint();
return dm;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dn){var ds=this.getInsets();
var dv=ds.left+ds.right;
var du=ds.top+ds.bottom;
var dt=dn-dv;
var dq=this._getLayout();

if(dq&&dq.hasHeightForWidth()){var dp=dq.getHeightForWidth(dn);
}else{dp=this._getContentHeightForWidth(dt);
}var dr=dp+du;
return dr;
},_getContentHeightForWidth:function(dw){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var dy=this.getPaddingRight();
var dA=this.getPaddingBottom();
var dz=this.getPaddingLeft();

if(this.__kK){var dx=this.__kK.getInsets();
top+=dx.top;
dy+=dx.right;
dA+=dx.bottom;
dz+=dx.left;
}return {"top":top,"right":dy,"bottom":dA,"left":dz};
},getInnerSize:function(){var dC=this.getBounds();

if(!dC){return null;
}var dB=this.getInsets();
return {width:dC.width-dB.left-dB.right,height:dC.height-dB.top-dB.bottom};
},show:function(){this.setVisibility(bW);
},hide:function(){this.setVisibility(bs);
},exclude:function(){this.setVisibility(bx);
},isVisible:function(){return this.getVisibility()===bW;
},isHidden:function(){return this.getVisibility()!==bW;
},isExcluded:function(){return this.getVisibility()===bx;
},isSeeable:function(){qx.ui.core.queue.Manager.flush();
var dD=this.getContainerElement().getDomElement();

if(dD){return dD.offsetWidth>0;
}return false;
},_createContainerElement:function(){var dF={"$$widget":this.toHashCode()};
var dE={zIndex:0,position:ch};
return new qx.html.Element(cc,dE,dF);
},__kS:function(){var dG=this._createContentElement();
dG.setStyles({"position":ch,"zIndex":10});
return dG;
},_createContentElement:function(){return new qx.html.Element(cc,{overflowX:bs,overflowY:bs});
},getContainerElement:function(){return this.__kG;
},getContentElement:function(){return this.__kH;
},getDecoratorElement:function(){return this.__kK||null;
},getShadowElement:function(){return this.__kL||null;
},__kT:null,getLayoutChildren:function(){var dI=this.__kT;

if(!dI){return this.__kU;
}var dJ;

for(var i=0,l=dI.length;i<l;i++){var dH=dI[i];

if(dH.hasUserBounds()||dH.isExcluded()){if(dJ==null){dJ=dI.concat();
}qx.lang.Array.remove(dJ,dH);
}}return dJ||dI;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var dK=this.__kP;

if(dK){dK.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var dL=this.__kT;

if(!dL){return false;
}var dM;

for(var i=0,l=dL.length;i<l;i++){dM=dL[i];

if(!dM.hasUserBounds()&&!dM.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__kU:[],_getChildren:function(){return this.__kT||this.__kU;
},_indexOf:function(dN){var dO=this.__kT;

if(!dO){return -1;
}return dO.indexOf(dN);
},_hasChildren:function(){var dP=this.__kT;
return dP!=null&&(!!dP[0]);
},addChildrenToQueue:function(dQ){var dR=this.__kT;

if(!dR){return;
}var dS;

for(var i=0,l=dR.length;i<l;i++){dS=dR[i];
dQ.push(dS);
dS.addChildrenToQueue(dQ);
}},_add:function(dT,dU){if(dT.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,dT);
}
if(this.__kT){this.__kT.push(dT);
}else{this.__kT=[dT];
}this.__kV(dT,dU);
},_addAt:function(dV,dW,dX){if(!this.__kT){this.__kT=[];
}if(dV.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,dV);
}var dY=this.__kT[dW];

if(dY===dV){dV.setLayoutProperties(dX);
}
if(dY){qx.lang.Array.insertBefore(this.__kT,dV,dY);
}else{this.__kT.push(dV);
}this.__kV(dV,dX);
},_addBefore:function(ea,eb,ec){if(ea==eb){return;
}
if(!this.__kT){this.__kT=[];
}if(ea.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,ea);
}qx.lang.Array.insertBefore(this.__kT,ea,eb);
this.__kV(ea,ec);
},_addAfter:function(ed,ee,ef){if(ed==ee){return;
}
if(!this.__kT){this.__kT=[];
}if(ed.getLayoutParent()==this){qx.lang.Array.remove(this.__kT,ed);
}qx.lang.Array.insertAfter(this.__kT,ed,ee);
this.__kV(ed,ef);
},_remove:function(eg){if(!this.__kT){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__kT,eg);
this.__kW(eg);
},_removeAt:function(eh){if(!this.__kT){throw new Error("This widget has no children!");
}var ei=this.__kT[eh];
qx.lang.Array.removeAt(this.__kT,eh);
this.__kW(ei);
return ei;
},_removeAll:function(){if(!this.__kT){return [];
}var ej=this.__kT.concat();
this.__kT.length=0;

for(var i=ej.length-1;i>=0;i--){this.__kW(ej[i]);
}qx.ui.core.queue.Layout.add(this);
return ej;
},_afterAddChild:null,_afterRemoveChild:null,__kV:function(ek,em){var parent=ek.getLayoutParent();

if(parent&&parent!=this){parent._remove(ek);
}ek.setLayoutParent(this);
if(em){ek.setLayoutProperties(em);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(ek);
}},__kW:function(en){if(en.getLayoutParent()!==this){throw new Error("Remove Error: "+en+" is not a child of this widget!");
}en.setLayoutParent(null);
if(this.__kP){this.__kP.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(en);
}},capture:function(eo){this.getContainerElement().capture(eo);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(ep,eq,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__kM){return;
}var er=this.__kM=new qx.html.Element;
er.setStyles({position:ch,top:0,left:0,zIndex:7});
var es=this.getBounds();

if(es){this.__kM.setStyles({width:es.width+cb,height:es.height+cb});
}if((qx.core.Environment.get(bR)==bt)){er.setStyles({backgroundImage:ba+qx.util.ResourceManager.getInstance().toUri(bG)+bb,backgroundRepeat:N});
}this.getContainerElement().add(er);
},_applyDecorator:function(et,eu){var ex=qx.ui.core.Widget.__kI;
var ev=this.getContainerElement();
if(!this.__kM&&!qx.core.Environment.get(j)){this._createProtectorElement();
}if(eu){ev.remove(this.__kK);
ex.poolDecorator(this.__kK);
}if(et){var ew=this.__kK=ex.getDecoratorElement(et);
ew.setStyle(bN,5);
ev.add(ew);
}else{delete this.__kK;
}this._applyBackgroundColor(this.getBackgroundColor());
if(this.__kQ(eu,et)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(et){var ey=this.getBounds();

if(ey){ew.resize(ey.width,ey.height);
this.__kM&&this.__kM.setStyles({width:ey.width+cb,height:ey.height+cb});
}}},_applyShadow:function(ez,eA){var eH=qx.ui.core.Widget.__kJ;
var eC=this.getContainerElement();
if(eA){eC.remove(this.__kL);
eH.poolDecorator(this.__kL);
}if(ez){var eE=this.__kL=eH.getDecoratorElement(ez);
eC.add(eE);
var eG=eE.getInsets();
eE.setStyles({left:(-eG.left)+cb,top:(-eG.top)+cb});
var eF=this.getBounds();

if(eF){var eD=eF.width+eG.left+eG.right;
var eB=eF.height+eG.top+eG.bottom;
eE.resize(eD,eB);
}eE.tint(null);
}else{delete this.__kL;
}},_applyToolTipText:function(eI,eJ){if(qx.core.Environment.get(bK)){if(this.__kO){return;
}var eK=qx.locale.Manager.getInstance();
this.__kO=eK.addListener(bE,function(){var eL=this.getToolTipText();

if(eL&&eL.translate){this.setToolTipText(eL.translate());
}},this);
}},_applyTextColor:function(eM,eN){},_applyZIndex:function(eO,eP){this.getContainerElement().setStyle(bN,eO==null?0:eO);
},_applyVisibility:function(eQ,eR){var eS=this.getContainerElement();

if(eQ===bW){eS.show();
}else{eS.hide();
}var parent=this.$$parent;

if(parent&&(eR==null||eQ==null||eR===bx||eQ===bx)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(eT,eU){this.getContainerElement().setStyle(bQ,eT==1?null:eT);
if((qx.core.Environment.get(bR)==bt)&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var eV=(eT==1||eT==null)?null:0.99;
this.getContentElement().setStyle(bQ,eV);
}}},_applyCursor:function(eW,eX){if(eW==null&&!this.isSelectable()){eW=bP;
}this.getContainerElement().setStyle(V,eW,qx.core.Environment.get(bR)==bC);
},_applyBackgroundColor:function(eY,fa){var fb=this.getBackgroundColor();
var fd=this.getContainerElement();

if(this.__kK){this.__kK.tint(fb);
fd.setStyle(ce,null);
}else{var fc=qx.theme.manager.Color.getInstance().resolve(fb);
fd.setStyle(ce,fc);
}},_applyFont:function(fe,ff){},__kX:null,$$stateChanges:null,_forwardStates:null,hasState:function(fg){var fh=this.__kX;
return !!fh&&!!fh[fg];
},addState:function(fi){var fj=this.__kX;

if(!fj){fj=this.__kX={};
}
if(fj[fi]){return;
}this.__kX[fi]=true;
if(fi===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fm=this.__lb;

if(forward&&forward[fi]&&fm){var fk;

for(var fl in fm){fk=fm[fl];

if(fk instanceof qx.ui.core.Widget){fm[fl].addState(fi);
}}}},removeState:function(fn){var fo=this.__kX;

if(!fo||!fo[fn]){return;
}delete this.__kX[fn];
if(fn===cj){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fr=this.__lb;

if(forward&&forward[fn]&&fr){for(var fq in fr){var fp=fr[fq];

if(fp instanceof qx.ui.core.Widget){fp.removeState(fn);
}}}},replaceState:function(fs,ft){var fu=this.__kX;

if(!fu){fu=this.__kX={};
}
if(!fu[ft]){fu[ft]=true;
}
if(fu[fs]){delete fu[fs];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var fx=this.__lb;

if(forward&&forward[ft]&&fx){for(var fw in fx){var fv=fx[fw];

if(fv instanceof qx.ui.core.Widget){fv.replaceState(fs,ft);
}}}},__kY:null,__la:null,syncAppearance:function(){var fC=this.__kX;
var fB=this.__kY;
var fD=qx.theme.manager.Appearance.getInstance();
var fz=qx.core.Property.$$method.setThemed;
var fH=qx.core.Property.$$method.resetThemed;
if(this.__la){delete this.__la;
if(fB){var fy=fD.styleFrom(fB,fC,null,this.getAppearance());
fB=null;
}}if(!fB){var fA=this;
var fG=[];

do{fG.push(fA.$$subcontrol||fA.getAppearance());
}while(fA=fA.$$subparent);
fB=fG.reverse().join(bi).replace(/#[0-9]+/g,bj);
this.__kY=fB;
}var fE=fD.styleFrom(fB,fC,null,this.getAppearance());

if(fE){var fF;

if(fy){for(var fF in fy){if(fE[fF]===undefined){this[fH[fF]]();
}}}for(var fF in fE){fE[fF]===undefined?this[fH[fF]]():this[fz[fF]](fE[fF]);
}}else if(fy){for(var fF in fy){this[fH[fF]]();
}}this.fireDataEvent(L,this.__kX);
},_applyAppearance:function(fI,fJ){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__kN){qx.ui.core.queue.Appearance.add(this);
this.__kN=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__la=true;
qx.ui.core.queue.Appearance.add(this);
var fM=this.__lb;

if(fM){var fK;

for(var fL in fM){fK=fM[fL];

if(fK instanceof qx.ui.core.Widget){fK.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var fN=this;

while(fN.getAnonymous()){fN=fN.getLayoutParent();

if(!fN){return null;
}}return fN;
},getFocusTarget:function(){var fO=this;

if(!fO.getEnabled()){return null;
}
while(fO.getAnonymous()||!fO.getFocusable()){fO=fO.getLayoutParent();

if(!fO||!fO.getEnabled()){return null;
}}return fO;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(fP,fQ){var fR=this.getFocusElement();
if(fP){var fS=this.getTabIndex();

if(fS==null){fS=1;
}fR.setAttribute(bp,fS);
if((qx.core.Environment.get(bR)==bt&&parseFloat(qx.core.Environment.get(g))<8)||(qx.core.Environment.get(bR)==bt&&qx.core.Environment.get(co)<8)){fR.setAttribute(t,I);
}else{fR.setStyle(p,q);
}}else{if(fR.isNativelyFocusable()){fR.setAttribute(bp,-1);
}else if(fQ){fR.setAttribute(bp,null);
}}},_applyKeepFocus:function(fT){var fU=this.getFocusElement();
fU.setAttribute(bD,fT?bu:null);
},_applyKeepActive:function(fV){var fW=this.getContainerElement();
fW.setAttribute(bA,fV?bu:null);
},_applyTabIndex:function(fX){if(fX==null){fX=1;
}else if(fX<1||fX>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&fX!=null){this.getFocusElement().setAttribute(bp,fX);
}},_applySelectable:function(fY,ga){if(ga!==null){this._applyCursor(this.getCursor());
}this.getContentElement().setSelectable(fY);
},_applyEnabled:function(gb,gc){if(gb===false){this.addState(cd);
this.removeState(cj);
if(this.isFocusable()){this.removeState(bo);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(cd);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gd,ge,name){},_applyContextMenu:function(gf,gg){if(gg){gg.removeState(br);

if(gg.getOpener()==this){gg.resetOpener();
}
if(!gf){this.removeListener(br,this._onContextMenuOpen);
gg.removeListener(ci,this._onBeforeContextMenuOpen,this);
}}
if(gf){gf.setOpener(this);
gf.addState(br);

if(!gg){this.addListener(br,this._onContextMenuOpen);
gf.addListener(ci,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==bW&&this.hasListener(c)){this.fireDataEvent(c,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(gh,gi){if(!this.isEnabled()&&gh===true){gh=false;
}qx.ui.core.DragDropCursor.getInstance();
if(gh){this.addListener(cl,this._onDragStart);
this.addListener(cf,this._onDrag);
this.addListener(bM,this._onDragEnd);
this.addListener(bJ,this._onDragChange);
}else{this.removeListener(cl,this._onDragStart);
this.removeListener(cf,this._onDrag);
this.removeListener(bM,this._onDragEnd);
this.removeListener(bJ,this._onDragChange);
}this.getContainerElement().setAttribute(O,gh?bu:null);
},_applyDroppable:function(gj,gk){if(!this.isEnabled()&&gj===true){gj=false;
}this.getContainerElement().setAttribute(W,gj?bu:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(bP);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var gl=qx.ui.core.DragDropCursor.getInstance();
var gm=e.getCurrentAction();
gm?gl.setAction(gm):gl.resetAction();
},visualizeFocus:function(){this.addState(bo);
},visualizeBlur:function(){this.removeState(bo);
},scrollChildIntoView:function(gn,go,gp,gq){gq=typeof gq==bn?true:gq;
var gr=qx.ui.core.queue.Layout;
var parent;
if(gq){gq=!gr.isScheduled(gn);
parent=gn.getLayoutParent();
if(gq&&parent){gq=!gr.isScheduled(parent);
if(gq){parent.getChildren().forEach(function(gs){gq=gq&&!gr.isScheduled(gs);
});
}}}this.scrollChildIntoViewX(gn,go,gq);
this.scrollChildIntoViewY(gn,gp,gq);
},scrollChildIntoViewX:function(gt,gu,gv){this.getContentElement().scrollChildIntoViewX(gt.getContainerElement(),gu,gv);
},scrollChildIntoViewY:function(gw,gx,gy){this.getContentElement().scrollChildIntoViewY(gw.getContainerElement(),gx,gy);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(gz){if(!this.__lb){return false;
}return !!this.__lb[gz];
},__lb:null,_getCreatedChildControls:function(){return this.__lb;
},getChildControl:function(gA,gB){if(!this.__lb){if(gB){return null;
}this.__lb={};
}var gC=this.__lb[gA];

if(gC){return gC;
}
if(gB===true){return null;
}return this._createChildControl(gA);
},_showChildControl:function(gD){var gE=this.getChildControl(gD);
gE.show();
return gE;
},_excludeChildControl:function(gF){var gG=this.getChildControl(gF,true);

if(gG){gG.exclude();
}},_isChildControlVisible:function(gH){var gI=this.getChildControl(gH,true);

if(gI){return gI.isVisible();
}return false;
},_createChildControl:function(gJ){if(!this.__lb){this.__lb={};
}else if(this.__lb[gJ]){throw new Error("Child control '"+gJ+"' already created!");
}var gN=gJ.indexOf(Q);

if(gN==-1){var gK=this._createChildControlImpl(gJ);
}else{var gK=this._createChildControlImpl(gJ.substring(0,gN),gJ.substring(gN+1,gJ.length));
}
if(!gK){throw new Error("Unsupported control: "+gJ);
}gK.$$subcontrol=gJ;
gK.$$subparent=this;
var gL=this.__kX;
var forward=this._forwardStates;

if(gL&&forward&&gK instanceof qx.ui.core.Widget){for(var gM in gL){if(forward[gM]){gK.addState(gM);
}}}this.fireDataEvent(cp,gK);
return this.__lb[gJ]=gK;
},_createChildControlImpl:function(gO,gP){return null;
},_disposeChildControls:function(){var gT=this.__lb;

if(!gT){return;
}var gR=qx.ui.core.Widget;

for(var gS in gT){var gQ=gT[gS];

if(!gR.contains(this,gQ)){gQ.destroy();
}else{gQ.dispose();
}}delete this.__lb;
},_findTopControl:function(){var gU=this;

while(gU){if(!gU.$$subparent){return gU;
}gU=gU.$$subparent;
}return null;
},getContainerLocation:function(gV){var gW=this.getContainerElement().getDomElement();
return gW?qx.bom.element.Location.get(gW,gV):null;
},getContentLocation:function(gX){var gY=this.getContentElement().getDomElement();
return gY?qx.bom.element.Location.get(gY,gX):null;
},setDomLeft:function(ha){var hb=this.getContainerElement().getDomElement();

if(hb){hb.style.left=ha+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(hc){var hd=this.getContainerElement().getDomElement();

if(hd){hd.style.top=hc+cb;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(he,top){var hf=this.getContainerElement().getDomElement();

if(hf){hf.style.left=he+cb;
hf.style.top=top+cb;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var hg=qx.ui.core.LayoutItem.prototype.clone.call(this);

if(this.getChildren){var hh=this.getChildren();

for(var i=0,l=hh.length;i<l;i++){hg.add(hh[i].clone());
}}return hg;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Environment.get(bK)){if(this.__kO){qx.locale.Manager.getInstance().removeListenerById(this.__kO);
}}this.getContainerElement().setAttribute(y,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}
if(this.getContextMenu()){this.setContextMenu(null);
}if(!qx.core.ObjectRegistry.inShutDown){var hj=qx.ui.core.Widget;
var hi=this.getContainerElement();

if(this.__kK){hi.remove(this.__kK);
hj.__kI.poolDecorator(this.__kK);
}
if(this.__kL){hi.remove(this.__kL);
hj.__kJ.poolDecorator(this.__kL);
}this.clearSeparators();
this.__kK=this.__kL=this.__kR=null;
}else{this._disposeArray(cu);
this._disposeObjects(R,u);
}this._disposeArray(bc);
this.__kX=this.__lb=null;
this._disposeObjects(A,f,k,P);
}});
})();
(function(){var m="resize",l="scrollY",k="update",j="scrollX",i="_applyScrollX",h="_applyScrollY",g="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",f="appear",d="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",c="qx.event.type.Event",a="qx.ui.core.scroll.ScrollPane",b="scroll";
qx.Class.define(a,{extend:qx.ui.core.Widget,construct:function(){qx.ui.core.Widget.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(m,this._onUpdate);
var n=this.getContentElement();
n.addListener(b,this._onScroll,this);
n.addListener(f,this._onAppear,this);
},events:{update:c},properties:{scrollX:{check:g,apply:i,event:j,init:0},scrollY:{check:d,apply:h,event:l,init:0}},members:{add:function(o){var p=this._getChildren()[0];

if(p){this._remove(p);
p.removeListener(m,this._onUpdate,this);
}
if(o){this._add(o);
o.addListener(m,this._onUpdate,this);
}},remove:function(q){if(q){this._remove(q);
q.removeListener(m,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(k);
},_onScroll:function(e){var r=this.getContentElement();
this.setScrollX(r.getScrollX());
this.setScrollY(r.getScrollY());
},_onAppear:function(e){var v=this.getContentElement();
var s=this.getScrollX();
var t=v.getScrollX();

if(s!=t){v.scrollToX(s);
}var w=this.getScrollY();
var u=v.getScrollY();

if(w!=u){v.scrollToY(w);
}},getItemTop:function(z){var top=0;

do{top+=z.getBounds().top;
z=z.getLayoutParent();
}while(z&&z!==this);
return top;
},getItemBottom:function(A){return this.getItemTop(A)+A.getBounds().height;
},getItemLeft:function(B){var C=0;
var parent;

do{C+=B.getBounds().left;
parent=B.getLayoutParent();

if(parent){C+=parent.getInsets().left;
}B=parent;
}while(B&&B!==this);
return C;
},getItemRight:function(D){return this.getItemLeft(D)+D.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var F=this.getInnerSize();
var E=this.getScrollSize();

if(F&&E){return Math.max(0,E.width-F.width);
}return 0;
},getScrollMaxY:function(){var H=this.getInnerSize();
var G=this.getScrollSize();

if(H&&G){return Math.max(0,G.height-H.height);
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
},_applyScrollX:function(M){this.getContentElement().scrollToX(M);
},_applyScrollY:function(N){this.getContentElement().scrollToY(N);
}}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",z="Integer",y="_applyFamily",x="_applyLineHeight",w="Array",v="line-through",u="overline",t="Color",s="qx.bom.Font",r="Number",q="_applyDecoration",o=" ",p="_applySize",m=",",n="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(A,B){qx.core.Object.call(this);
this.__iS={fontFamily:k,fontSize:null,fontWeight:null,fontStyle:null,textDecoration:null,lineHeight:null,color:null};

if(A!==undefined){this.setSize(A);
}
if(B!==undefined){this.setFamily(B);
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
},__iT:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2,color:k},getDefaultStyles:function(){return this.__iT;
}},properties:{size:{check:z,nullable:true,apply:p},lineHeight:{check:r,nullable:true,apply:x},family:{check:w,nullable:true,apply:y},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,v,u],nullable:true,apply:q},color:{check:t,nullable:true,apply:n}},members:{__iS:null,_applySize:function(J,K){this.__iS.fontSize=J===null?null:J+g;
},_applyLineHeight:function(L,M){this.__iS.lineHeight=L===null?null:L;
},_applyFamily:function(N,O){var P=k;

for(var i=0,l=N.length;i<l;i++){if(N[i].indexOf(o)>0){P+=f+N[i]+f;
}else{P+=N[i];
}
if(i!==l-1){P+=m;
}}this.__iS.fontFamily=P;
},_applyBold:function(Q,R){this.__iS.fontWeight=Q===null?null:Q?c:d;
},_applyItalic:function(S,T){this.__iS.fontStyle=S===null?null:S?e:d;
},_applyDecoration:function(U,V){this.__iS.textDecoration=U===null?null:U;
},_applyColor:function(W,X){this.__iS.color=W===null?null:W;
},getStyles:function(){return this.__iS;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.ui.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addAt:function(e,f,g){this._addAt(e,f,g);
},addBefore:function(h,i,j){this._addBefore(h,i,j);
},addAfter:function(k,l,m){this._addAfter(k,l,m);
},remove:function(n){this._remove(n);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){return this._removeAll();
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
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(e){qx.ui.core.Widget.call(this);

if(e!=null){this._setLayout(e);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(f){this.fireNonBubblingEvent(b,qx.event.type.Data,[f]);
},_afterRemoveChild:function(g){this.fireNonBubblingEvent(a,qx.event.type.Data,[g]);
}},defer:function(h,i){qx.ui.core.MChildrenHandling.remap(i);
qx.ui.core.MLayoutHandling.remap(i);
}});
})();
(function(){var h="css.boxsizing",g="",f="border-box",e="qx.bom.element.BoxSizing",d="boxSizing",c="content-box",b=":",a=";";
qx.Class.define(e,{statics:{__jT:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__jU:function(i){var j=this.__jT;
return j.tags[i.tagName.toLowerCase()]||j.types[i.type];
},compile:function(k){if(qx.core.Environment.get(h)){var l=qx.lang.String.hyphenate(qx.core.Environment.get(h));
return l+b+k+a;
}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
qx.log.Logger.trace();
}},get:function(m){if(qx.core.Environment.get(h)){return qx.bom.element.Style.get(m,d,null,false)||g;
}
if(qx.bom.Document.isStandardMode(qx.dom.Node.getWindow(m))){if(!this.__jU(m)){return c;
}}return f;
},set:function(n,o){if(qx.core.Environment.get(h)){try{n.style[qx.core.Environment.get(h)]=o;
}catch(p){qx.log.Logger.warn(this,"This client does not support the boxSizing value",o);
}}else{qx.log.Logger.warn(this,"This client does not support dynamic modification of the boxSizing property.");
}},reset:function(q){this.set(q,g);
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__mh:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__mi:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__mi[name];
s[t]();
}else{var u=this.__mh[name];
s[u](q);
}}}});
})();
(function(){var m="pane",k="lastTab",j="bar",h="page",g="firstTab",f="close",d="right",c="bottom",b="button",a="changeSelection",B="top",A="left",z="qx.event.type.Data",y="barRight",x="beforeChangeSelection",w="close-button",v="tabview",u="vertical",t="_applyBarPosition",s="barLeft",q="horizontal",r="qx.ui.tabview.TabView",o="__Bs",p="barTop",n="barBottom";
qx.Class.define(r,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MContentPadding],construct:function(C){qx.ui.core.Widget.call(this);
this.__Gd={top:p,right:y,bottom:n,left:s};
this._createChildControl(j);
this._createChildControl(m);
var D=this.__Bs=new qx.ui.form.RadioGroup;
D.setWrap(false);
D.addListener(a,this._onChangeSelection,this);
if(C!=null){this.setBarPosition(C);
}else{this.initBarPosition();
}},events:{"changeSelection":z},properties:{appearance:{refine:true,init:v},barPosition:{check:[A,d,B,c],init:B,apply:t}},members:{__Bs:null,_createChildControlImpl:function(E,F){var G;

switch(E){case j:G=new qx.ui.container.SlideBar();
G.setZIndex(10);
this._add(G);
break;
case m:G=new qx.ui.container.Stack;
G.setZIndex(5);
this._add(G,{flex:1});
break;
}return G||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,E);
},_getContentPaddingTarget:function(){return this.getChildControl(m);
},add:function(H){var I=H.getButton();
var J=this.getChildControl(j);
var L=this.getChildControl(m);
H.exclude();
J.add(I);
L.add(H);
this.__Bs.add(I);
H.addState(this.__Gd[this.getBarPosition()]);
H.addState(k);
var K=this.getChildren();

if(K[0]==H){H.addState(g);
}else{K[K.length-2].removeState(k);
}H.addListener(f,this._onPageClose,this);
},addAt:function(M,N){var Q=this.getChildren();

if(!(N==null)&&N>Q.length){throw new Error("Index should be less than : "+Q.length);
}
if(N==null){N=Q.length;
}var O=M.getButton();
var P=this.getChildControl(j);
var R=this.getChildControl(m);
M.exclude();
P.addAt(O,N);
R.addAt(M,N);
this.__Bs.add(O);
M.addState(this.__Gd[this.getBarPosition()]);
Q=this.getChildren();

if(N==Q.length-1){M.addState(k);
}
if(Q[0]==M){M.addState(g);
}else{Q[Q.length-2].removeState(k);
}M.addListener(f,this._onPageClose,this);
},remove:function(S){var X=this.getChildControl(m);
var V=this.getChildControl(j);
var U=S.getButton();
var W=X.getChildren();
if(this.getSelection()[0]==S){var T=W.indexOf(S);

if(T==0){if(W[1]){this.setSelection([W[1]]);
}else{this.resetSelection();
}}else{this.setSelection([W[T-1]]);
}}V.remove(U);
X.remove(S);
this.__Bs.remove(U);
S.removeState(this.__Gd[this.getBarPosition()]);
if(S.hasState(g)){S.removeState(g);

if(W[0]){W[0].addState(g);
}}
if(S.hasState(k)){S.removeState(k);

if(W.length>0){W[W.length-1].addState(k);
}}S.removeListener(f,this._onPageClose,this);
},getChildren:function(){return this.getChildControl(m).getChildren();
},indexOf:function(Y){return this.getChildControl(m).indexOf(Y);
},__Gd:null,_applyBarPosition:function(ba,bb){var bc=this.getChildControl(j);
var bh=ba==A||ba==d;
var bf=ba==d||ba==c;
var bg=bh?qx.ui.layout.HBox:qx.ui.layout.VBox;
var bj=this._getLayout();

if(bj&&bj instanceof bg){}else{this._setLayout(bj=new bg);
}bj.setReversed(bf);
bc.setOrientation(bh?u:q);
var bi=this.getChildren();
if(bb){var bd=this.__Gd[bb];
bc.removeState(bd);
for(var i=0,l=bi.length;i<l;i++){bi[i].removeState(bd);
}}
if(ba){var be=this.__Gd[ba];
bc.addState(be);
for(var i=0,l=bi.length;i<l;i++){bi[i].addState(be);
}}},getSelection:function(){var bk=this.__Bs.getSelection();
var bl=[];

for(var i=0;i<bk.length;i++){bl.push(bk[i].getUserData(h));
}return bl;
},setSelection:function(bm){var bn=[];

for(var i=0;i<bm.length;i++){bn.push(bm[i].getChildControl(b));
}this.__Bs.setSelection(bn);
},resetSelection:function(){this.__Bs.resetSelection();
},isSelected:function(bo){var bp=bo.getChildControl(b);
return this.__Bs.isSelected(bp);
},isSelectionEmpty:function(){return this.__Bs.isSelectionEmpty();
},getSelectables:function(bq){var br=this.__Bs.getSelectables(bq);
var bs=[];

for(var i=0;i<br.length;i++){bs.push(br[i].getUserData(h));
}return bs;
},_onChangeSelection:function(e){var bx=this.getChildControl(m);
var bu=e.getData()[0];
var bw=e.getOldData()[0];
var bt=[];
var bv=[];

if(bu){bt=[bu.getUserData(h)];
bx.setSelection(bt);
bu.focus();
this.scrollChildIntoView(bu,null,null,false);
}else{bx.resetSelection();
}
if(bw){bv=[bw.getUserData(h)];
}this.fireDataEvent(a,bt,bv);
},_onBeforeChangeSelection:function(e){if(!this.fireNonBubblingEvent(x,qx.event.type.Event,[false,true])){e.preventDefault();
}},_onRadioChangeSelection:function(e){var by=e.getData()[0];

if(by){this.setSelection([by.getUserData(h)]);
}else{this.resetSelection();
}},_onPageClose:function(e){var bA=e.getTarget();
var bz=bA.getButton().getChildControl(w);
bz.reset();
this.remove(bA);
}},destruct:function(){this._disposeObjects(o);
this.__Gd=null;
}});
})();
(function(){var k="currentTab",j="widgetbrowser.pages.Basic",i="widgetbrowser.pages.Tree",h="widgetbrowser.pages.Embed",g="widgetbrowser.pages.Form",f="Window",d="basic",c="widgetbrowser.view.TabView",b="widgetbrowser.pages.ToolBar",a="EmbedFrame",C="Misc",B="Toolbar/Menu",A="Control",z="Basic",y="Tab",x="Tree",w="widgetbrowser.pages.List",v="changeSelection",u="widgetbrowser.pages.Table",t="Table",r="widgetbrowser.pages.EmbedFrame",s="widgetbrowser.pages.Tab",p="Embed",q="widgetbrowser.pages.Misc",n="List",o="widgetbrowser.pages.Window",l="Form",m="widgetbrowser.pages.Control";
qx.Class.define(c,{extend:qx.ui.tabview.TabView,construct:function(){qx.ui.tabview.TabView.call(this);
this.init();
this.addListener(v,this.__Lq,this);
this.__Lr();
},members:{init:function(){var J,K;
K=g;
J={disabled:true,hovered:true,focused:true,invalid:true};
var F=new widgetbrowser.view.TabPage(l,K,J);
this.add(F);
K=i;
J={disabled:true};
var G=new widgetbrowser.view.TabPage(x,K,J);
this.add(G);
K=w;
J={disabled:true};
var I=new widgetbrowser.view.TabPage(n,K,J);
this.add(I);
K=u;
J={disabled:true};
var O=new widgetbrowser.view.TabPage(t,K,J);
this.add(O);
K=b;
J={disabled:true,hovered:true,selected:true};
var N=new widgetbrowser.view.TabPage(B,K,J);
this.add(N);
K=o;
J={disabled:true};
var Q=new widgetbrowser.view.TabPage(f,K,J);
this.add(Q);
K=s;
J={disabled:true};
var M=new widgetbrowser.view.TabPage(y,K,J);
this.add(M);
K=m;
J={disabled:true};
var D=new widgetbrowser.view.TabPage(A,K,J);
this.add(D);
K=h;
J={};
var P=new widgetbrowser.view.TabPage(p,K,J);
this.add(P);
K=r;
J={};
var E=new widgetbrowser.view.TabPage(a,K,J);
this.add(E);
K=j;
J={disabled:true};
var H=new widgetbrowser.view.TabPage(z,K,J);
this.add(H);
K=q;
J={disabled:true};
var L=new widgetbrowser.view.TabPage(C,K,J);
this.add(L);
},__Lq:function(e){qx.bom.Cookie.set(k,e.getData()[0].getLabel());
},__Lr:function(){var R=qx.bom.Cookie.get(k)||qx.bom.Cookie.set(k,d);
var S=new qx.type.Array().append(this.getSelectables()).filter(function(T){return T.getLabel()==R;
})[0];

if(S){this.setSelection([S]);
}}}});
})();
(function(){var f="mshtml",e="engine.name",d="pop.push.reverse.shift.sort.splice.unshift.join.slice",c="number",b="qx.type.BaseArray",a=".";
qx.Class.define(b,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if((qx.core.Environment.get(e)==f)){j.prototype={length:0,$$isArray:true};
var o=d.split(a);

for(var length=o.length;length;){j.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
j.prototype.concat=function(){var r=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var q;

if(arguments[i] instanceof j){q=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){q=arguments[i];
}else{q=[arguments[i]];
}r.push.apply(r,q);
}return r;
};
j.prototype.toString=function(){return p.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var s=new this.constructor;
s.push.apply(s,m.apply(this,arguments));
return s;
};
j.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,n.apply(this,arguments));
return t;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var v=new this.constructor;
v.push.apply(v,Array.prototype.splice.apply(this,arguments));
return v;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===c){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
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
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
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
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
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
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__dN:{0:j,2:i,1:h},__dO:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__dN[this._native.button]||g;
}else{return this.__dO[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var l="engine.version",k="os.name",j="engine.name",i="x",h="osx",g="win",f="qx.dynamicmousewheel",d="chrome",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__dS:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__dT();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__dT();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__dT:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__dU(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__dU(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__dU(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__dU(-e.wheelDeltaY):0;
}else{y=this.__dU(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__dU(e.detail);
}}return y;
}return 0;
},__dU:function(w){if(qx.core.Environment.get(f)){return this.__dS(w);
}else{var z=qx.core.Environment.select(j,{"default":function(){return w/40;
},"gecko":function(){return w;
},"webkit":function(){if(qx.core.Environment.get(b)==d){if(qx.core.Environment.get(k)==h){return w/60;
}else{return w/120;
}}else{if(qx.core.Environment.get(k)==g){var A=120;
if(parseFloat(qx.core.Environment.get(l))==533.16){A=1200;
}}else{A=40;
if(parseFloat(qx.core.Environment.get(l))==533.16||parseFloat(qx.core.Environment.get(l))==533.17||parseFloat(qx.core.Environment.get(l))==533.18){A=1200;
}}return w/A;
}}});
return z.call(this);
}}}});
})();
(function(){var k="div",j="-moz-none",h="string",g="backgroundImage",f="inline-block",e="-moz-inline-box",d="span",c="color",b="css.float",a="css.inlineblock",bb="css.usermodify",ba="boxSizing",Y="placeholder",X="content",W="css.appearance",V="css.gradient.radial",U="borderImage",T="userSelect",S="css.overflowxy",R="styleFloat",r="css.userselect",s="css.boxsizing",p="css.boxmodel",q="qx.bom.client.Css",n="appearance",o='m11',l="input",m="css.boxshadow",v="css.gradient.legacywebkit",w="css.borderradius",E="linear-gradient(0deg, #fff, #000)",C="css.opacity",J="css.borderimage",G="rgba(1, 2, 3, 0.5)",N="radial-gradient(0px 0px, cover, red 50%, blue 100%)",L="rgba",y="css.gradients",Q="borderRadius",P="css.gradient.linear",O='WebKitCSSMatrix',x="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",A="mshtml",B="css.rgba",D="none",F="css.placeholder",H="css.userselect.none",K="css.textoverflow",M="textOverflow",t="userModify",u="boxShadow",z="cssFloat",I="border";
qx.Bootstrap.define(q,{statics:{__hl:null,getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==A||!qx.bom.client.Browser.getQuirksMode();
return content?X:I;
},getTextOverflow:function(){return qx.bom.Style.getPropertyName(M);
},getPlaceholder:function(){var i=document.createElement(l);
return Y in i;
},getAppearance:function(){return qx.bom.Style.getPropertyName(n);
},getBorderRadius:function(){return qx.bom.Style.getPropertyName(Q);
},getBoxShadow:function(){return qx.bom.Style.getPropertyName(u);
},getBorderImage:function(){return qx.bom.Style.getPropertyName(U);
},getUserSelect:function(){return qx.bom.Style.getPropertyName(T);
},getUserSelectNone:function(){var bd=qx.bom.client.Css.getUserSelect();

if(bd){var bc=document.createElement(d);
bc.style[bd]=j;
return bc.style[bd]===j?j:D;
}return null;
},getUserModify:function(){return qx.bom.Style.getPropertyName(t);
},getFloat:function(){var be=document.documentElement.style;
return be.cssFloat!==undefined?z:be.styleFloat!==undefined?R:null;
},getTranslate3d:function(){return O in window&&o in new WebKitCSSMatrix();
},getGradients:function(){return !!(qx.bom.client.Css.getLinearGradient());
},getLinearGradient:function(){qx.bom.client.Css.__hl=false;
var bi=E;
var bf=document.createElement(k);
var bg=qx.bom.Style.getAppliedStyle(bf,g,bi);

if(!bg){bi=x;
var bg=qx.bom.Style.getAppliedStyle(bf,g,bi,false);

if(bg){qx.bom.client.Css.__hl=true;
}}if(!bg){return null;
}var bh=/(.*?)\(/.exec(bg);
return bh?bh[1]:null;
},getRadialGradient:function(){var bm=N;
var bj=document.createElement(k);
var bk=qx.bom.Style.getAppliedStyle(bj,g,bm);

if(!bk){return null;
}var bl=/(.*?)\(/.exec(bk);
return bl?bl[1]:null;
},getLegacyWebkitGradient:function(){if(qx.bom.client.Css.__hl===null){qx.bom.client.Css.getLinearGradient();
}return qx.bom.client.Css.__hl;
},getRgba:function(){var bn;

try{bn=document.createElement(k);
}catch(bo){bn=document.createElement();
}try{bn.style[c]=G;

if(bn.style[c].indexOf(L)!=-1){return true;
}}catch(bp){}return false;
},getBoxSizing:function(){return qx.bom.Style.getPropertyName(ba);
},getInlineBlock:function(){var bq=document.createElement(d);
bq.style.display=f;

if(bq.style.display==f){return f;
}bq.style.display=e;

if(bq.style.display!==e){return e;
}return null;
},getOpacity:function(){return (typeof document.documentElement.style.opacity==h);
},getOverflowXY:function(){return (typeof document.documentElement.style.overflowX==h)&&(typeof document.documentElement.style.overflowY==h);
}},defer:function(br){qx.core.Environment.add(K,br.getTextOverflow);
qx.core.Environment.add(F,br.getPlaceholder);
qx.core.Environment.add(w,br.getBorderRadius);
qx.core.Environment.add(m,br.getBoxShadow);
qx.core.Environment.add(y,br.getGradients);
qx.core.Environment.add(P,br.getLinearGradient);
qx.core.Environment.add(V,br.getRadialGradient);
qx.core.Environment.add(v,br.getLegacyWebkitGradient);
qx.core.Environment.add(p,br.getBoxModel);
qx.core.Environment.add(B,br.getRgba);
qx.core.Environment.add(J,br.getBorderImage);
qx.core.Environment.add(bb,br.getUserModify);
qx.core.Environment.add(r,br.getUserSelect);
qx.core.Environment.add(H,br.getUserSelectNone);
qx.core.Environment.add(W,br.getAppearance);
qx.core.Environment.add(b,br.getFloat);
qx.core.Environment.add(s,br.getBoxSizing);
qx.core.Environment.add(a,br.getInlineBlock);
qx.core.Environment.add(C,br.getOpacity);
qx.core.Environment.add(S,br.getOverflowXY);
}});
})();
(function(){var o="one",n="single",m="selected",k="additive",j="multi",h="os.name",g="osx",f="under",d="PageUp",c="Left",O="lead",N="Down",M="Up",L="Boolean",K="PageDown",J="anchor",I="End",H="Home",G="Right",F="right",v="click",w="above",t="left",u="Escape",r="A",s="Space",p="_applyMode",q="interval",x="changeSelection",y="qx.event.type.Data",A="quick",z="__oP",C="key",B="abstract",E="drag",D="qx.ui.core.selection.Abstract";
qx.Class.define(D,{type:B,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kd={};
},events:{"changeSelection":y},properties:{mode:{check:[n,j,k,o],init:n,apply:p},drag:{check:L,init:false},quick:{check:L,init:false}},members:{__oN:0,__oO:0,__oP:null,__oQ:null,__oR:null,__oS:null,__oT:null,__oU:null,__oV:null,__oW:null,__oX:null,__oY:null,__pa:null,__pb:null,__pc:null,__pd:null,__pe:null,__kd:null,__pf:null,__pg:null,_userInteraction:false,__ph:null,getSelectionContext:function(){return this.__pd;
},selectAll:function(){var P=this.getMode();

if(P==n||P==o){throw new Error("Can not select all items in selection mode: "+P);
}this._selectAllItems();
this._fireChange();
},selectItem:function(Q){this._setSelectedItem(Q);
var R=this.getMode();

if(R!==n&&R!==o){this._setLeadItem(Q);
this._setAnchorItem(Q);
}this._scrollItemIntoView(Q);
this._fireChange();
},addItem:function(S){var T=this.getMode();

if(T===n||T===o){this._setSelectedItem(S);
}else{if(this._getAnchorItem()==null){this._setAnchorItem(S);
}this._setLeadItem(S);
this._addToSelection(S);
}this._scrollItemIntoView(S);
this._fireChange();
},removeItem:function(U){this._removeFromSelection(U);

if(this.getMode()===o&&this.isSelectionEmpty()){var V=this._applyDefaultSelection();
if(V==U){return;
}}
if(this.getLeadItem()==U){this._setLeadItem(null);
}
if(this._getAnchorItem()==U){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(W,X){var Y=this.getMode();

if(Y==n||Y==o){throw new Error("Can not select multiple items in selection mode: "+Y);
}this._selectItemRange(W,X);
this._setAnchorItem(W);
this._setLeadItem(X);
this._scrollItemIntoView(X);
this._fireChange();
},clearSelection:function(){if(this.getMode()==o){var ba=this._applyDefaultSelection(true);

if(ba!=null){return;
}}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(bb){var bc=this.getMode();

if(bc==o||bc===n){if(bb.length>1){throw new Error("Could not select more than one items in mode: "+bc+"!");
}
if(bb.length==1){this.selectItem(bb[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(bb);
}},getSelectedItem:function(){var bd=this.getMode();

if(bd===n||bd===o){var be=this._getSelectedItem();
return be!=undefined?be:null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__kd);
},getSortedSelection:function(){var bg=this.getSelectables();
var bf=qx.lang.Object.getValues(this.__kd);
bf.sort(function(a,b){return bg.indexOf(a)-bg.indexOf(b);
});
return bf;
},isItemSelected:function(bh){var bi=this._selectableToHashCode(bh);
return this.__kd[bi]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__kd);
},invertSelection:function(){var bk=this.getMode();

if(bk===n||bk===o){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var bj=this.getSelectables();

for(var i=0;i<bj.length;i++){this._toggleInSelection(bj[i]);
}this._fireChange();
},_setLeadItem:function(bl){var bm=this.__pe;

if(bm!==null){this._styleSelectable(bm,O,false);
}
if(bl!==null){this._styleSelectable(bl,O,true);
}this.__pe=bl;
},getLeadItem:function(){return this.__pe!==null?this.__pe:null;
},_setAnchorItem:function(bn){var bo=this.__pf;

if(bo!=null){this._styleSelectable(bo,J,false);
}
if(bn!=null){this._styleSelectable(bn,J,true);
}this.__pf=bn;
},_getAnchorItem:function(){return this.__pf!==null?this.__pf:null;
},_isSelectable:function(bp){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bq=event.getTarget();
if(bq&&this._isSelectable(bq)){return bq;
}return null;
},_selectableToHashCode:function(br){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(bs,bt,bu){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(bv){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bw){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(bx,by){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bz){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(bA){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(bB,bC){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(bD,bE){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bF,bG){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(bH,bI){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(bH===o){this._applyDefaultSelection(true);
}this._fireChange();
},handleMouseOver:function(event){if(this.__ph!=null&&this.__ph!=this._getScroll().top){this.__ph=null;
return;
}this._userInteraction=true;

if(!this.getQuick()){this._userInteraction=false;
return;
}var bK=this.getMode();

if(bK!==o&&bK!==n){this._userInteraction=false;
return;
}var bJ=this._getSelectableFromMouseEvent(event);

if(bJ===null){this._userInteraction=false;
return;
}this._setSelectedItem(bJ);
this._fireChange(A);
this._userInteraction=false;
},handleMouseDown:function(event){this._userInteraction=true;
var bM=this._getSelectableFromMouseEvent(event);

if(bM===null){this._userInteraction=false;
return;
}var bO=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bL=event.isShiftPressed();
if(this.isItemSelected(bM)&&!bL&&!bO&&!this.getDrag()){this.__pg=bM;
this._userInteraction=false;
return;
}else{this.__pg=null;
}this._scrollItemIntoView(bM);
switch(this.getMode()){case n:case o:this._setSelectedItem(bM);
break;
case k:this._setLeadItem(bM);
this._setAnchorItem(bM);
this._toggleInSelection(bM);
break;
case j:this._setLeadItem(bM);
if(bL){var bN=this._getAnchorItem();

if(bN===null){bN=this._getFirstSelectable();
this._setAnchorItem(bN);
}this._selectItemRange(bN,bM,bO);
}else if(bO){this._setAnchorItem(bM);
this._toggleInSelection(bM);
}else{this._setAnchorItem(bM);
this._setSelectedItem(bM);
}break;
}var bP=this.getMode();

if(this.getDrag()&&bP!==n&&bP!==o&&!bL&&!bO){this.__oT=this._getLocation();
this.__oQ=this._getScroll();
this.__oU=event.getDocumentLeft()+this.__oQ.left;
this.__oV=event.getDocumentTop()+this.__oQ.top;
this.__oW=true;
this._capture();
}this._fireChange(v);
this._userInteraction=false;
},handleMouseUp:function(event){this._userInteraction=true;
var bT=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var bQ=event.isShiftPressed();

if(!bT&&!bQ&&this.__pg!=null){var bR=this._getSelectableFromMouseEvent(event);

if(bR===null||!this.isItemSelected(bR)){this._userInteraction=false;
return;
}var bS=this.getMode();

if(bS===k){this._removeFromSelection(bR);
}else{this._setSelectedItem(bR);

if(this.getMode()===j){this._setLeadItem(bR);
this._setAnchorItem(bR);
}}this._userInteraction=false;
}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__oW){return;
}this.__oX=event.getDocumentLeft();
this.__oY=event.getDocumentTop();
this._userInteraction=true;
var bV=this.__oX+this.__oQ.left;

if(bV>this.__oU){this.__pa=1;
}else if(bV<this.__oU){this.__pa=-1;
}else{this.__pa=0;
}var bU=this.__oY+this.__oQ.top;

if(bU>this.__oV){this.__pb=1;
}else if(bU<this.__oV){this.__pb=-1;
}else{this.__pb=0;
}var location=this.__oT;

if(this.__oX<location.left){this.__oN=this.__oX-location.left;
}else if(this.__oX>location.right){this.__oN=this.__oX-location.right;
}else{this.__oN=0;
}
if(this.__oY<location.top){this.__oO=this.__oY-location.top;
}else if(this.__oY>location.bottom){this.__oO=this.__oY-location.bottom;
}else{this.__oO=0;
}if(!this.__oP){this.__oP=new qx.event.Timer(100);
this.__oP.addListener(q,this._onInterval,this);
}this.__oP.start();
this._autoSelect();
event.stopPropagation();
this._userInteraction=false;
},handleAddItem:function(e){var bW=e.getData();

if(this.getMode()===o&&this.isSelectionEmpty()){this.addItem(bW);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__oW){return;
}if(this.__pc){this._fireChange(v);
}delete this.__oW;
delete this.__oR;
delete this.__oS;
this._releaseCapture();
if(this.__oP){this.__oP.stop();
}},_onInterval:function(e){this._scrollBy(this.__oN,this.__oO);
this.__oQ=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cg=this._getDimension();
var bY=Math.max(0,Math.min(this.__oX-this.__oT.left,cg.width))+this.__oQ.left;
var bX=Math.max(0,Math.min(this.__oY-this.__oT.top,cg.height))+this.__oQ.top;
if(this.__oR===bY&&this.__oS===bX){return;
}this.__oR=bY;
this.__oS=bX;
var ci=this._getAnchorItem();
var cb=ci;
var ce=this.__pa;
var ch,ca;

while(ce!==0){ch=ce>0?this._getRelatedSelectable(cb,F):this._getRelatedSelectable(cb,t);
if(ch!==null){ca=this._getSelectableLocationX(ch);
if((ce>0&&ca.left<=bY)||(ce<0&&ca.right>=bY)){cb=ch;
continue;
}}break;
}var cf=this.__pb;
var cd,cc;

while(cf!==0){cd=cf>0?this._getRelatedSelectable(cb,f):this._getRelatedSelectable(cb,w);
if(cd!==null){cc=this._getSelectableLocationY(cd);
if((cf>0&&cc.top<=bX)||(cf<0&&cc.bottom>=bX)){cb=cd;
continue;
}}break;
}var cj=this.getMode();

if(cj===j){this._selectItemRange(ci,cb);
}else if(cj===k){if(this.isItemSelected(ci)){this._selectItemRange(ci,cb,true);
}else{this._deselectItemRange(ci,cb);
}this._setAnchorItem(cb);
}this._fireChange(E);
},__ov:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){this._userInteraction=true;
var cp,co;
var cr=event.getKeyIdentifier();
var cq=this.getMode();
var cl=event.isCtrlPressed()||(qx.core.Environment.get(h)==g&&event.isMetaPressed());
var cm=event.isShiftPressed();
var cn=false;

if(cr===r&&cl){if(cq!==n&&cq!==o){this._selectAllItems();
cn=true;
}}else if(cr===u){if(cq!==n&&cq!==o){this._clearSelection();
cn=true;
}}else if(cr===s){var ck=this.getLeadItem();

if(ck!=null&&!cm){if(cl||cq===k){this._toggleInSelection(ck);
}else{this._setSelectedItem(ck);
}cn=true;
}}else if(this.__ov[cr]){cn=true;

if(cq===n||cq==o){cp=this._getSelectedItem();
}else{cp=this.getLeadItem();
}
if(cp!==null){switch(cr){case H:co=this._getFirstSelectable();
break;
case I:co=this._getLastSelectable();
break;
case M:co=this._getRelatedSelectable(cp,w);
break;
case N:co=this._getRelatedSelectable(cp,f);
break;
case c:co=this._getRelatedSelectable(cp,t);
break;
case G:co=this._getRelatedSelectable(cp,F);
break;
case d:co=this._getPage(cp,true);
break;
case K:co=this._getPage(cp,false);
break;
}}else{switch(cr){case H:case N:case G:case K:co=this._getFirstSelectable();
break;
case I:case M:case c:case d:co=this._getLastSelectable();
break;
}}if(co!==null){switch(cq){case n:case o:this._setSelectedItem(co);
break;
case k:this._setLeadItem(co);
break;
case j:if(cm){var cs=this._getAnchorItem();

if(cs===null){this._setAnchorItem(cs=this._getFirstSelectable());
}this._setLeadItem(co);
this._selectItemRange(cs,co,cl);
}else{this._setAnchorItem(co);
this._setLeadItem(co);

if(!cl){this._setSelectedItem(co);
}}break;
}this.__ph=this._getScroll().top;
this._scrollItemIntoView(co);
}}
if(cn){event.stop();
this._fireChange(C);
}this._userInteraction=false;
},_selectAllItems:function(){var ct=this.getSelectables();

for(var i=0,l=ct.length;i<l;i++){this._addToSelection(ct[i]);
}},_clearSelection:function(){var cu=this.__kd;

for(var cv in cu){this._removeFromSelection(cu[cv]);
}this.__kd={};
},_selectItemRange:function(cw,cx,cy){var cB=this._getSelectableRange(cw,cx);
if(!cy){var cA=this.__kd;
var cC=this.__pi(cB);

for(var cz in cA){if(!cC[cz]){this._removeFromSelection(cA[cz]);
}}}for(var i=0,l=cB.length;i<l;i++){this._addToSelection(cB[i]);
}},_deselectItemRange:function(cD,cE){var cF=this._getSelectableRange(cD,cE);

for(var i=0,l=cF.length;i<l;i++){this._removeFromSelection(cF[i]);
}},__pi:function(cG){var cI={};
var cH;

for(var i=0,l=cG.length;i<l;i++){cH=cG[i];
cI[this._selectableToHashCode(cH)]=cH;
}return cI;
},_getSelectedItem:function(){for(var cJ in this.__kd){return this.__kd[cJ];
}return null;
},_setSelectedItem:function(cK){if(this._isSelectable(cK)){var cL=this.__kd;
var cM=this._selectableToHashCode(cK);

if(!cL[cM]||qx.lang.Object.hasMinLength(cL,2)){this._clearSelection();
this._addToSelection(cK);
}}},_addToSelection:function(cN){var cO=this._selectableToHashCode(cN);

if(this.__kd[cO]==null&&this._isSelectable(cN)){this.__kd[cO]=cN;
this._styleSelectable(cN,m,true);
this.__pc=true;
}},_toggleInSelection:function(cP){var cQ=this._selectableToHashCode(cP);

if(this.__kd[cQ]==null){this.__kd[cQ]=cP;
this._styleSelectable(cP,m,true);
}else{delete this.__kd[cQ];
this._styleSelectable(cP,m,false);
}this.__pc=true;
},_removeFromSelection:function(cR){var cS=this._selectableToHashCode(cR);

if(this.__kd[cS]!=null){delete this.__kd[cS];
this._styleSelectable(cR,m,false);
this.__pc=true;
}},_replaceMultiSelection:function(cT){var cW=false;
var da,cY;
var cU={};

for(var i=0,l=cT.length;i<l;i++){da=cT[i];

if(this._isSelectable(da)){cY=this._selectableToHashCode(da);
cU[cY]=da;
}}var db=cT[0];
var cV=da;
var cX=this.__kd;

for(var cY in cX){if(cU[cY]){delete cU[cY];
}else{da=cX[cY];
delete cX[cY];
this._styleSelectable(da,m,false);
cW=true;
}}for(var cY in cU){da=cX[cY]=cU[cY];
this._styleSelectable(da,m,true);
cW=true;
}if(!cW){return false;
}this._scrollItemIntoView(cV);
this._setLeadItem(db);
this._setAnchorItem(db);
this.__pc=true;
this._fireChange();
},_fireChange:function(dc){if(this.__pc){this.__pd=dc||null;
this.fireDataEvent(x,this.getSelection());
delete this.__pc;
}},_applyDefaultSelection:function(dd){if(dd===true||this.getMode()===o&&this.isSelectionEmpty()){var de=this._getFirstSelectable();

if(de!=null){this.selectItem(de);
}return de;
}return null;
}},destruct:function(){this._disposeObjects(z);
this.__kd=this.__pg=this.__pf=null;
this.__pe=null;
}});
})();
(function(){var f="vertical",e="under",d="above",c="qx.ui.core.selection.Widget",b="left",a="right";
qx.Class.define(c,{extend:qx.ui.core.selection.Abstract,construct:function(g){qx.ui.core.selection.Abstract.call(this);
this.__hE=g;
},members:{__hE:null,_isSelectable:function(h){return this._isItemSelectable(h)&&h.getLayoutParent()===this.__hE;
},_selectableToHashCode:function(j){return j.$$hash;
},_styleSelectable:function(k,m,n){n?k.addState(m):k.removeState(m);
},_capture:function(){this.__hE.capture();
},_releaseCapture:function(){this.__hE.releaseCapture();
},_isItemSelectable:function(o){if(this._userInteraction){return o.isVisible()&&o.isEnabled();
}else{return o.isVisible();
}},_getWidget:function(){return this.__hE;
},_getLocation:function(){var p=this.__hE.getContentElement().getDomElement();
return p?qx.bom.element.Location.get(p):null;
},_getDimension:function(){return this.__hE.getInnerSize();
},_getSelectableLocationX:function(q){var r=q.getBounds();

if(r){return {left:r.left,right:r.left+r.width};
}},_getSelectableLocationY:function(s){var t=s.getBounds();

if(t){return {top:t.top,bottom:t.top+t.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(u,v){},_scrollItemIntoView:function(w){this.__hE.scrollChildIntoView(w);
},getSelectables:function(x){var y=false;

if(!x){y=this._userInteraction;
this._userInteraction=true;
}var B=this.__hE.getChildren();
var z=[];
var A;

for(var i=0,l=B.length;i<l;i++){A=B[i];

if(this._isItemSelectable(A)){z.push(A);
}}this._userInteraction=y;
return z;
},_getSelectableRange:function(C,D){if(C===D){return [C];
}var H=this.__hE.getChildren();
var E=[];
var G=false;
var F;

for(var i=0,l=H.length;i<l;i++){F=H[i];

if(F===C||F===D){if(G){E.push(F);
break;
}else{G=true;
}}
if(G&&this._isItemSelectable(F)){E.push(F);
}}return E;
},_getFirstSelectable:function(){var I=this.__hE.getChildren();

for(var i=0,l=I.length;i<l;i++){if(this._isItemSelectable(I[i])){return I[i];
}}return null;
},_getLastSelectable:function(){var J=this.__hE.getChildren();

for(var i=J.length-1;i>0;i--){if(this._isItemSelectable(J[i])){return J[i];
}}return null;
},_getRelatedSelectable:function(K,L){var O=this.__hE.getOrientation()===f;
var N=this.__hE.getChildren();
var M=N.indexOf(K);
var P;

if((O&&L===d)||(!O&&L===b)){for(var i=M-1;i>=0;i--){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}else if((O&&L===e)||(!O&&L===a)){for(var i=M+1;i<N.length;i++){P=N[i];

if(this._isItemSelectable(P)){return P;
}}}return null;
},_getPage:function(Q,R){if(R){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__hE=null;
}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(b){return this._isItemSelectable(b)&&b.getLayoutParent()===this._getWidget().getChildrenContainer();
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var c=this._getWidget();
return {left:c.getScrollX(),top:c.getScrollY()};
},_scrollBy:function(d,e){var f=this._getWidget();
f.scrollByX(d);
f.scrollByY(e);
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
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var l="button",k="",j="close",i="String",h="_applyIcon",g="page",f="qx.event.type.Event",e="_applyShowCloseButton",d="tabview-page",c="qx.ui.tabview.Page",a="_applyLabel",b="Boolean";
qx.Class.define(c,{extend:qx.ui.container.Composite,construct:function(m,n){qx.ui.container.Composite.call(this);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}},events:{"close":f},properties:{appearance:{refine:true,init:d},label:{check:i,init:k,apply:a},icon:{check:i,init:k,apply:h},showCloseButton:{check:b,init:false,apply:e}},members:{_forwardStates:{barTop:1,barRight:1,barBottom:1,barLeft:1,firstTab:1,lastTab:1},_applyIcon:function(o,p){this.getChildControl(l).setIcon(o);
},_applyLabel:function(q,r){this.getChildControl(l).setLabel(q);
},_applyEnabled:function(s,t){qx.ui.container.Composite.prototype._applyEnabled.call(this,s,t);
var u=this.getChildControl(l);
s==null?u.resetEnabled():u.setEnabled(s);
},_createChildControlImpl:function(v,w){var x;

switch(v){case l:x=new qx.ui.tabview.TabButton;
x.setAllowGrowX(true);
x.setAllowGrowY(true);
x.setUserData(g,this);
x.addListener(j,this._onButtonClose,this);
break;
}return x||qx.ui.container.Composite.prototype._createChildControlImpl.call(this,v);
},_applyShowCloseButton:function(y,z){this.getChildControl(l).setShowCloseButton(y);
},_onButtonClose:function(){this.fireEvent(j);
},getButton:function(){return this.getChildControl(l);
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b="direct",a='__il';
qx.Class.define(e,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__il=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__im:null,compute:function(p,q,r,s,t,u,v){this.__im=this.__im||new qx.util.placement.Placement();
var y=t.split(f);
var x=y[0];
var w=y[1];
this.__im.set({axisX:this.__iq(u),axisY:this.__iq(v),edge:x,align:w});
return this.__im.compute(p,q,r,s);
},__in:null,__io:null,__ip:null,__iq:function(z){switch(z){case b:this.__in=this.__in||new qx.util.placement.DirectAxis();
return this.__in;
case d:this.__io=this.__io||new qx.util.placement.KeepAlignAxis();
return this.__io;
case c:this.__ip=this.__ip||new qx.util.placement.BestFitAxis();
return this.__ip;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__il:null,compute:function(A,B,C,D){var E=this.getAxisX()||this.__il;
var G=E.computeStart(A.width,{start:C.left,end:C.right},{start:D.left,end:D.right},B.width,this.__ir());
var F=this.getAxisY()||this.__il;
var top=F.computeStart(A.height,{start:C.top,end:C.bottom},{start:D.top,end:D.bottom},B.height,this.__is());
return {left:G,top:top};
},__ir:function(){var I=this.getEdge();
var H=this.getAlign();

if(I==l){return i;
}else if(I==n){return g;
}else if(H==l){return k;
}else if(H==n){return h;
}},__is:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(a);
}});
})();
(function(){var h="[",g="idBubble-",f="]",d=".",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(j,k,name){this.fireDataEvent(c,{value:j,name:name,old:k});
this._registerEventChaining(j,k,name);
},_registerEventChaining:function(l,m,name){if((l instanceof qx.core.Object)&&qx.Class.hasMixin(l.constructor,qx.data.marshal.MEventBubbling)){var n=qx.lang.Function.bind(this.__dr,this,name);
var p=l.addListener(c,n,this);
var o=l.getUserData(g+this.$$hash);

if(o==null){o=[];
l.setUserData(g+this.$$hash,o);
}o.push(p);
}if(m!=null&&m.getUserData&&m.getUserData(g+this.$$hash)!=null){var o=m.getUserData(g+this.$$hash);

for(var i=0;i<o.length;i++){m.removeListenerById(o[i]);
}m.setUserData(g+this.$$hash,null);
}},__dr:function(name,e){var x=e.getData();
var t=x.value;
var r=x.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(x.name.indexOf){var w=x.name.indexOf(d)!=-1?x.name.indexOf(d):x.name.length;
var u=x.name.indexOf(h)!=-1?x.name.indexOf(h):x.name.length;

if(w<u){var q=x.name.substring(0,w);
var v=x.name.substring(w+1,x.name.length);

if(v[0]!=h){v=d+v;
}var s=name+h+q+f+v;
}else if(u<w){var q=x.name.substring(0,u);
var v=x.name.substring(u,x.name.length);
var s=name+h+q+f+v;
}else{var s=name+h+x.name+f;
}}else{var s=name+h+x.name+f;
}}else{var s=name+d+x.name;
}this.fireDataEvent(c,{value:t,name:s,old:r});
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__ds=[];
}else if(arguments.length>1){this.__ds=[];

for(var i=0;i<arguments.length;i++){this.__ds.push(arguments[i]);
}}else if(typeof p==c){this.__ds=new Array(p);
}else if(p instanceof Array){this.__ds=qx.lang.Array.clone(p);
}else{this.__ds=[];
this.dispose();
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__ds.length;i++){this._applyEventPropagation(this.__ds[i],null,i);
}this.__dt();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__ds:null,concat:function(q){if(q){var r=this.__ds.concat(q);
}else{var r=this.__ds.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__ds.join(s);
},pop:function(){var t=this.__ds.pop();
this.__dt();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__ds.push(arguments[i]);
this.__dt();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__ds.concat();
this.__ds.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__ds,name:k+(this.__ds.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__ds.shift();
this.__dt();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__ds.slice(x,y));
},splice:function(z,A,B){var J=this.__ds.length;
var F=this.__ds.splice.apply(this.__ds,arguments);
if(this.__ds.length!=J){this.__dt();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__ds.length>J){var I=m;
}else if(this.__ds.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__ds.concat();
this.__ds.sort.apply(this.__ds,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__ds,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__ds.unshift(arguments[i]);
this.__dt();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__ds[0]],name:g,old:[this.__ds[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__ds;
},getItem:function(N){return this.__ds[N];
},setItem:function(O,P){var Q=this.__ds[O];
if(Q===P){return;
}this.__ds[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__ds.length){this.__dt();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__ds.indexOf(R);
},toString:function(){if(this.__ds!=null){return this.__ds.toString();
}return b;
},contains:function(S){return this.__ds.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U).dispose();
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W).dispose();
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba).dispose();
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__ds.length;i++){this._registerEventChaining(null,this.__ds[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__ds.concat();
this.__ds.length=0;
this.__dt();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__ds,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__ds.length+i);
}var bi=this.length;
this.__dt();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1).dispose();
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__ds.length;i++){bp.call(bq,this.__ds[i],i,this);
}},__dt:function(){var br=this.length;
this.length=this.__ds.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__ds.length;i++){var bs=this.__ds[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__ds=null;
}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
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
(function(){var o="px",n="top",m="_tint",l="abstract",k='<div style="',j="",h="_getDefaultInsetsFor",g="bottom",f="qx.ui.decoration.DynamicDecorator",e="left",b="right",d="_resize",c="_style",a='"></div>';
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,type:l,members:{getStyles:function(){var r={};
var q=this._getStyles();

for(var p in q){r[qx.lang.String.camelCase(p)]=q[p];
}return r;
},_getStyles:function(){var s={};

for(var name in this){if(name.indexOf(c)==0&&this[name] instanceof Function){this[name](s);
}}return s;
},getMarkup:function(){if(this._markup){return this._markup;
}var t=this._getStyles();
if(!this._generateMarkup){var u=[k];
u.push(qx.bom.element.Style.compile(t));
u.push(a);
u=u.join(j);
}else{var u=this._generateMarkup(t);
}return this._markup=u;
},resize:function(v,w,x){var z={};

for(var name in this){if(name.indexOf(d)==0&&this[name] instanceof Function){var y=this[name](v,w,x);

if(z.left==undefined){z.left=y.left;
z.top=y.top;
}
if(z.width==undefined){z.width=y.width;
z.height=y.height;
}
if(y.elementToApplyDimensions){z.elementToApplyDimensions=y.elementToApplyDimensions;
}z.left=y.left<z.left?y.left:z.left;
z.top=y.top<z.top?y.top:z.top;
z.width=y.width>z.width?y.width:z.width;
z.height=y.height>z.height?y.height:z.height;
}}if(z.left!=undefined){v.style.left=z.left+o;
v.style.top=z.top+o;
}if(z.width!=undefined){if(z.width<0){z.width=0;
}
if(z.height<0){z.height=0;
}
if(z.elementToApplyDimensions){v=z.elementToApplyDimensions;
}v.style.width=z.width+o;
v.style.height=z.height+o;
}},tint:function(A,B){for(var name in this){if(name.indexOf(m)==0&&this[name] instanceof Function){this[name](A,B,A.style);
}}},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){var F=[n,b,g,e];
var D={};

for(var name in this){if(name.indexOf(h)==0&&this[name] instanceof Function){var E=this[name]();

for(var i=0;i<F.length;i++){var C=F[i];
if(D[C]==undefined){D[C]=E[C];
}if(E[C]<D[C]){D[C]=E[C];
}}}}if(D[n]!=undefined){return D;
}return {top:0,right:0,bottom:0,left:0};
}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__fe().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__fd(f).pageX;
},getDocumentTop:function(g){return this.__fd(g).pageY;
},getScreenLeft:function(h){return this.__fd(h).screenX;
},getScreenTop:function(j){return this.__fd(j).screenY;
},getViewportLeft:function(k){return this.__fd(k).clientX;
},getViewportTop:function(l){return this.__fd(l).clientY;
},getIdentifier:function(m){return this.__fd(m).identifier;
},__fd:function(n){n=n==null?0:n;
return this.__fe()[n];
},__fe:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__nv=new qx.ui.decoration.css3.BorderImage();

if(p){this.__nw(p);
}}else{this.__nv=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__nv.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__nv:null,getMarkup:function(){return this.__nv.getMarkup();
},resize:function(r,s,t){this.__nv.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__nv.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__nv[y](w);
},_applyBaseImage:function(z,A){if(this.__nv instanceof qx.ui.decoration.GridDiv){this.__nv.setBaseImage(z);
}else{this.__nw(z);
}},__nw:function(B){var G,H,J,I;
this.__nv.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__nv.setSlice([N,D,E,O]);
}},destruct:function(){this.__nv.dispose();
this.__nv=null;
}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bd:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__be:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bf:function(){var L=qx.lang.Generics.__bd;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__be(N,O);
}}}}},defer:function(Q){Q.__bf();
}});
})();
(function(){var q="other",p="widgets",o="undefined",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",c="Theme",e="meta",d="borders",b="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,r){if(!r){var r={};
}r.include=this.__ox(r.include);
r.patch=this.__ox(r.patch);
var s={$$type:c,name:name,title:r.title,toString:this.genericToString};
if(r.extend){s.supertheme=r.extend;
}s.basename=qx.Bootstrap.createNamespace(name,s);
this.__oA(s,r);
this.__oy(s,r);
this.$$registry[name]=s;
for(var i=0,a=r.include,l=a.length;i<l;i++){this.include(s,a[i]);
}
for(var i=0,a=r.patch,l=a.length;i<l;i++){this.patch(s,a[i]);
}},__ox:function(t){if(!t){return [];
}
if(qx.Bootstrap.isArray(t)){return t;
}else{return [t];
}},__oy:function(u,v){var w=v.aliases||{};

if(v.extend&&v.extend.aliases){qx.Bootstrap.objectMergeWith(w,v.extend.aliases,false);
}u.aliases=w;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__oz:function(x){for(var i=0,y=this.__oB,l=y.length;i<l;i++){if(x[y[i]]){return y[i];
}}},__oA:function(z,A){var D=this.__oz(A);
if(A.extend&&!D){D=A.extend.type;
}z.type=D||q;
var F=function(){};
if(A.extend){F.prototype=new A.extend.$$clazz;
}var E=F.prototype;
var C=A[D];
for(var B in C){E[B]=C[B];
if(E[B].base){E[B].base=A.extend;
}}z.$$clazz=F;
z[D]=new F;
},$$registry:{},__oB:[g,d,f,n,b,p,m,e],__h:null,__oC:null,__i:function(){},patch:function(G,H){this.__oD(H);
var J=this.__oz(H);

if(J!==this.__oz(G)){throw new Error("The mixins '"+G.name+"' are not compatible '"+H.name+"'!");
}var I=H[J];
var K=G.$$clazz.prototype;

for(var L in I){K[L]=I[L];
}},include:function(M,N){this.__oD(N);
var P=N.type;

if(P!==M.type){throw new Error("The mixins '"+M.name+"' are not compatible '"+N.name+"'!");
}var O=N[P];
var Q=M.$$clazz.prototype;

for(var R in O){if(Q[R]!==undefined){continue;
}Q[R]=O[R];
}},__oD:function(S){if(typeof S===o||S==null){var T;
var U=new Error("Mixin theme is not a valid theme!");
throw U;
}}}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__nx:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__nx;
},_applyStyle:function(){},getMarkup:function(){if(this.__nx){return this.__nx;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__nx=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
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
}var Q=b;
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
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__nx=null;
}});
})();
(function(){var j="border-dark-shadow",i="border-light",h="border-dark",g="border-light-shadow",f="solid",e="gray",d="border-focused-light",c="border-focused-dark",b="border-focused-light-shadow",a="border-focused-dark-shadow",z="border-separator",y="table-header-border",x="dotted",w="tooltip-text",v="invalid",u="white",t="decoration/shadow/shadow.png",s="black",r="#FFF",q="effect",o="table-focus-indicator",p="border-focused-invalid",m="qx/decoration/Classic",n="border-lead",k="decoration/shadow/shadow-small.png",l="qx.theme.classic.Decoration";
qx.Theme.define(l,{aliases:{decoration:m},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:h}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:s,style:x}},"inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[h,g,g,h]}},"outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[g,h,h,g],innerColor:[i,j,j,i]}},"groove":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:[i,j,j,i]}},"ridge":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[i,j,j,i],innerColor:[j,i,i,j]}},"inset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[j,i,i,j]}},"outset-thin":{decorator:qx.ui.decoration.Single,style:{width:1,color:[i,j,j,i]}},"focused-inset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[a,d,d,a],innerColor:[c,b,b,c]}},"focused-outset":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[b,c,c,b],innerColor:[d,a,a,d]}},"border-invalid":{decorator:qx.ui.decoration.Double,style:{width:1,innerWidth:1,color:[j,i,i,j],innerColor:v}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:z}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:z}},"shadow":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:t,insets:[4,8,8,4]}},"shadow-small":{decorator:qx.ui.decoration.Grid,style:{baseImage:k,insets:[0,3,3,0]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:v,innerColor:p,insets:[0]}},"lead-item":{decorator:qx.ui.decoration.Uniform,style:{width:1,style:x,color:n}},"tooltip":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"tooltip-error":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:w}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:j}},"toolbar-part-handle":{decorator:qx.ui.decoration.Single,style:{width:1,style:f,colorTop:u,colorLeft:u,colorRight:j,colorBottom:j}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,widthBottom:1,colorTop:h,colorBottom:i}},"datechooser-date-pane":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:e,style:f}},"datechooser-weekday":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,style:f}},"datechooser-week":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:e,style:f}},"datechooser-week-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:e,widthRight:1,colorRight:e,style:f}},"tabview-page-button-top":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthBottom:0,innerWidthBottom:0}},"tabview-page-button-bottom":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthTop:0,innerWidthTop:0}},"tabview-page-button-left":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthRight:0,innerWidthRight:0}},"tabview-page-button-right":{decorator:qx.ui.decoration.Double,style:{width:1,color:[g,h,h,g],innerWidth:1,innerColor:[i,j,j,i],widthLeft:0,innerWidthLeft:0}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:j,styleTop:f}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{widthBottom:1,colorBottom:y,styleBottom:f}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:o,style:f}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:y,styleRight:f,widthBottom:2,colorBottom:q,styleBottom:f}},"progressbar":{decorator:qx.ui.decoration.Single,style:{backgroundColor:r,width:1,color:z}}}});
})();
(function(){var dh="button",dg="widget",df="background",de="atom",dd="inset-thin",dc="text-disabled",db="text-selected",da="outset",cY="label",cX="inset",ca="background-selected",bY="image",bX="groupbox",bW="cell",bV="popup",bU="focused-inset",bT="tooltip",bS="white",bR="menu-button",bQ="middle",dp="decoration/arrows/down.gif",dq="spinner",dm="background-disabled",dn="list",dk="button-hovered",dl="bold",di="checkbox",dj="toolbar-button",dr="button-frame",ds="textfield",cG="background-invalid",cF="shadow-small",cI="invalid",cH="combobox",cK="scrollbar",cJ="center",cM="datechooser/button",cL="button-abandoned",cE="background-light",cD="main",k="date-chooser",l="date-chooser-title",m="radiobutton",n="default",o="tree-folder",p="selectbox",q="background-field",r="outset-thin",s="icon/16/places/folder-open.png",t="menu-slidebar-button",dG="scrollbar/button",dF="combobox/button",dE="decoration/arrows/right.gif",dD="decoration/arrows/up.gif",dK="text",dJ="virtual-list",dI="decoration/arrows/down-small.gif",dH="tree",dM="checkbox-undetermined",dL="icon/16/places/folder.png",bg="slidebar/button-forward",bh="icon/16/mimetypes/text-plain.png",be="right-top",bf="table-header-cell",bk="button-checked",bl=".png",bi="background-focused",bj="datechooser",bc="slidebar/button-backward",bd="treevirtual-folder",L="checkbox-checked",K="decoration/form/",N="decoration/tree/minus.gif",M="",H="decoration/tree/plus.gif",G="-invalid",J="decoration/arrows/left.gif",I="table-row-background-even",F="decoration/treevirtual/cross_minus.gif",E="radiobutton-hovered",bq="keyboard-focus",br="decoration/treevirtual/start_plus.gif",bs="decoration/cursors/",bt="icon/16/actions/dialog-ok.png",bm="slidebar",bn="#BABABA",bo="table-scroller-focus-indicator",bp="move-frame",bu="nodrop",bv="date-chooser-selected",W="tabview-page-button-left",V="decoration/arrows/up-small.gif",U="move",T="radiobutton-checked-focused",S="qx.theme.classic.Appearance",R="decoration/menu/checkbox.gif",Q="tooltip-error",P="right",bb="resize-frame",ba="decoration/arrows/rewind.gif",bw="table-scroller-header",bx="table-pane",by="table-header-cell-hover",bz="focused-outset",bA="checkbox-hovered",bB="icon/16/actions/dialog-cancel.png",bC="menu-slidebar",bD="datechooser-date-pane",bE="background-pane",bF="decoration/treevirtual/cross_plus.gif",ci="qx/icon/Oxygen/16/actions/window-close.png",ch="datechooser-week",cg="icon/16/apps/office-calendar.png",cf="datechooser-weekday",cm="table-header-border",cl="window-active-caption-text",ck="window-active-caption",cj="icon",cp="checkbox-checked-focused",co="toolbar-separator",cz="groove",cA="checkbox-pressed",cx="tooltip-invalid",cy="decoration/window/restore.gif",cv="decoration/menu/checkbox-invert.gif",cw="scrollarea",ct="window-inactive-caption-text",cu="best-fit",cB="up.gif",cC="checkbox-undetermined-hovered",cQ="keep-align",cP="tabview-page-button-right",cS="tabview-page-button-top",cR="tabview-page-button-bottom",cU="row-layer",cT="decoration/menu/radiobutton.gif",cW="decoration/arrows/",cV="decoration/table/descending.png",cO="progressbar",cN="tree-file",dz="tooltip-text",dA="checkbox-checked-hovered",dB="left.gif",dC="decoration/arrows/up-invert.gif",dv="alias",dw="decoration/arrows/right-invert.gif",dx="radiobutton-checked-disabled",dy="lead-item",dt="checkbox-focused",du="border-dark",j="decoration/treevirtual/end_plus.gif",i="decoration/treevirtual/start_minus.gif",h="radiobutton-checked-hovered",g="decoration/window/minimize.gif",f="table-header-cell-hovered",e="down.gif",d="decoration/treevirtual/end.gif",c="decoration/treevirtual/end_minus.gif",b="window-inactive-caption",a="decoration/menu/radiobutton-invert.gif",w="text-placeholder",x="slider",u="decoration/table/select-column-order.png",v="decoration/arrows/next.gif",A="table-header",B="decoration/treevirtual/only_minus.gif",y="datechooser-week-header",z="decoration/window/maximize.gif",C="decoration/treevirtual/only_plus.gif",D="checkbox-checked-pressed",cq="decoration/arrows/down-invert.gif",cn="menu-separator",cs="decoration/splitpane/knob-vertical.png",cr=".gif",cd="decoration/arrows/forward.gif",cb="radiobutton-checked-pressed",O="table-statusbar",ce="radiobutton-pressed",Y="copy",X="table-row-background-selected",bI="radiobutton-focused",bJ="decoration/splitpane/knob-horizontal.png",bK="right.gif",bL="radiobutton-checked",bM="decoration/treevirtual/cross.gif",bN="decoration/table/ascending.png",bO="decoration/treevirtual/line.gif",bP="checkbox-undetermined-focused",bG="toolbar-part-handle",bH="decoration/window/close.gif",cc="icon/16/actions/view-refresh.png";
qx.Theme.define(S,{appearances:{"widget":{},"label":{style:function(dN){return {textColor:dN.disabled?dc:undefined};
}},"image":{style:function(dO){return {opacity:!dO.replacement&&dO.disabled?0.3:undefined};
}},"atom":{},"atom/label":cY,"atom/icon":bY,"root":{style:function(dP){return {backgroundColor:df,textColor:dK,font:n};
}},"popup":{style:function(dQ){return {decorator:cD,backgroundColor:bE,shadow:cF};
}},"tooltip":{include:bV,style:function(dR){return {backgroundColor:bT,textColor:dz,decorator:bT,shadow:cF,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":de,"tooltip-error":{include:bT,style:function(dS){return {textColor:db,showTimeout:100,hideTimeout:10000,decorator:Q,font:dl,backgroundColor:cx};
}},"tooltip-error/atom":de,"iframe":{style:function(dT){return {backgroundColor:bS,decorator:cX};
}},"move-frame":{style:function(dU){return {decorator:cD};
}},"resize-frame":bp,"dragdrop-cursor":{style:function(dV){var dW=bu;

if(dV.copy){dW=Y;
}else if(dV.move){dW=U;
}else if(dV.alias){dW=dv;
}return {source:bs+dW+cr,position:be,offset:[2,16,2,6]};
}},"button-frame":{alias:de,style:function(dX){if(dX.pressed||dX.abandoned||dX.checked){var ea=!dX.inner&&dX.focused?bU:cX;
var dY=[4,3,2,5];
}else{var ea=!dX.inner&&dX.focused?bz:da;
var dY=[3,4];
}return {backgroundColor:dX.abandoned?cL:dX.hovered?dk:dX.checked?bk:dh,decorator:ea,padding:dY};
}},"button":{alias:dr,include:dr,style:function(eb){return {center:true};
}},"hover-button":{alias:de,include:de,style:function(ec){return {backgroundColor:ec.hovered?ca:undefined,textColor:ec.hovered?db:undefined};
}},"splitbutton":{},"splitbutton/button":dh,"splitbutton/arrow":{alias:dh,include:dh,style:function(ed){return {icon:dp};
}},"scrollarea/corner":{style:function(){return {backgroundColor:df};
}},"scrollarea":dg,"scrollarea/pane":dg,"scrollarea/scrollbar-x":cK,"scrollarea/scrollbar-y":cK,"list":{alias:cw,style:function(ee){var ei;
var eg=!!ee.focused;
var eh=!!ee.invalid;
var ef=!!ee.disabled;

if(eh&&!ef){ei=cG;
}else if(eg&&!eh&&!ef){ei=bi;
}else if(ef){ei=dm;
}else{ei=bS;
}return {decorator:ee.focused?bU:cX,backgroundColor:ei};
}},"listitem":{alias:de,style:function(ej){return {gap:4,padding:ej.lead?[2,4]:[3,5],backgroundColor:ej.selected?ca:undefined,textColor:ej.selected?db:undefined,decorator:ej.lead?dy:undefined};
}},"form-renderer-label":{include:cY,style:function(){return {paddingTop:4};
}},"textfield":{style:function(ek){var ep;
var en=!!ek.focused;
var eo=!!ek.invalid;
var el=!!ek.disabled;

if(eo&&!el){ep=cG;
}else if(en&&!eo&&!el){ep=bi;
}else if(el){ep=dm;
}else{ep=q;
}var em;

if(ek.disabled){em=dc;
}else if(ek.showingPlaceholder){em=w;
}else{em=undefined;
}return {decorator:ek.focused?bU:cX,padding:[2,3],textColor:em,backgroundColor:ep};
}},"textarea":ds,"checkbox":{alias:de,style:function(eq){var es;
if(eq.checked){if(eq.disabled){es=L;
}else if(eq.focused){es=cp;
}else if(eq.pressed){es=D;
}else if(eq.hovered){es=dA;
}else{es=L;
}}else if(eq.undetermined){if(eq.disabled){es=dM;
}else if(eq.focused){es=bP;
}else if(eq.hovered){es=cC;
}else{es=dM;
}}else if(!eq.disabled){if(eq.focused){es=dt;
}else if(eq.pressed){es=cA;
}else if(eq.hovered){es=bA;
}}es=es||di;
var er=eq.invalid&&!eq.disabled?G:M;
return {icon:K+es+er+bl,gap:6};
}},"radiobutton":{alias:di,include:di,style:function(et){var ev;

if(et.checked&&et.focused){ev=T;
}else if(et.checked&&et.disabled){ev=dx;
}else if(et.checked&&et.pressed){ev=cb;
}else if(et.checked&&et.hovered){ev=h;
}else if(et.checked){ev=bL;
}else if(et.focused){ev=bI;
}else if(et.pressed){ev=ce;
}else if(et.hovered){ev=E;
}else{ev=m;
}var eu=et.invalid&&!et.disabled?G:M;
return {icon:K+ev+eu+bl,shadow:undefined};
}},"spinner":{style:function(ew){return {decorator:ew.focused?bU:cX,textColor:ew.disabled?dc:undefined};
}},"spinner/textfield":{include:ds,style:function(ex){return {decorator:undefined,padding:[2,3]};
}},"spinner/upbutton":{alias:dh,include:dh,style:function(ey){return {icon:V,padding:ey.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ey.hovered?dk:dh};
}},"spinner/downbutton":{alias:dh,include:dh,style:function(ez){return {icon:dI,padding:ez.pressed?[2,2,0,4]:[1,3,1,3],backgroundColor:ez.hovered?dk:dh};
}},"datefield":cH,"datefield/button":{alias:dF,include:dF,style:function(eA){return {icon:cg,padding:[0,3],backgroundColor:undefined,decorator:undefined};
}},"datefield/list":{alias:bj,include:bj,style:function(eB){return {decorator:eB.focused?bU:cX};
}},"groupbox":{style:function(eC){return {backgroundColor:df};
}},"groupbox/legend":{alias:de,style:function(eD){return {backgroundColor:df,textColor:eD.invalid?cI:undefined,padding:[1,0,1,4]};
}},"groupbox/frame":{style:function(eE){return {padding:[12,9],marginTop:10,decorator:cz};
}},"check-groupbox":bX,"check-groupbox/legend":{alias:di,include:di,style:function(eF){return {backgroundColor:df,textColor:eF.invalid?cI:undefined,padding:[1,0,1,4]};
}},"radio-groupbox":bX,"radio-groupbox/legend":{alias:m,include:m,style:function(eG){return {backgroundColor:df,textColor:eG.invalid?cI:undefined,padding:[1,0,1,4]};
}},"toolbar":{style:function(eH){return {backgroundColor:df};
}},"toolbar/part":{},"toolbar/part/container":{},"toolbar/part/handle":{style:function(eI){return {decorator:bG,backgroundColor:df,padding:[0,1],margin:[3,2],allowGrowY:true};
}},"toolbar-separator":{style:function(eJ){return {margin:[3,2],decorator:co};
}},"toolbar-button":{alias:de,style:function(eK){if(eK.pressed||eK.checked||eK.abandoned){var eM=dd;
var eL=[3,2,1,4];
}else if(eK.hovered&&!eK.disabled){var eM=r;
var eL=[2,3];
}else{var eM=undefined;
var eL=[3,4];
}return {cursor:n,decorator:eM,padding:eL,backgroundColor:eK.abandoned?cL:eK.checked?cE:dh};
}},"toolbar-menubutton":{alias:dj,include:dj,style:function(eN){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:bY,include:bY,style:function(eO){return {source:dI};
}},"toolbar-splitbutton":{},"toolbar-splitbutton/button":dj,"toolbar-splitbutton/arrow":{alias:dj,include:dj,style:function(eP){return {icon:dp};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:dh,include:dh,style:function(eQ){return {icon:eQ.vertical?dp:v};
}},"slidebar/button-backward":{alias:dh,include:dh,style:function(eR){return {icon:eR.vertical?dD:J};
}},"tabview":{},"tabview/bar":{alias:bm,style:function(eS){var eT=0,eW=0,eU=0,eV=0;

if(eS.barTop){eU=-2;
}else if(eS.barBottom){eT=-2;
}else if(eS.barRight){eV=-2;
}else{eW=-2;
}return {marginBottom:eU,marginTop:eT,marginLeft:eV,marginRight:eW};
}},"tabview/bar/button-forward":{include:bg,alias:bg,style:function(eX){if(eX.barTop||eX.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bc,alias:bc,style:function(eY){if(eY.barTop||eY.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/pane":{style:function(fa){return {backgroundColor:df,decorator:da,padding:10};
}},"tabview-page":dg,"tabview-page/button":{style:function(fb){var fk;
var fi=0,fg=0,fd=0,ff=0;

if(fb.barTop||fb.barBottom){var fe=2,fc=2,fh=6,fj=6;
}else{var fe=6,fc=6,fh=6,fj=6;
}
if(fb.barTop){fk=cS;
}else if(fb.barRight){fk=cP;
}else if(fb.barBottom){fk=cR;
}else{fk=W;
}
if(fb.checked){if(fb.barTop||fb.barBottom){fh+=2;
fj+=2;
}else{fe+=2;
fc+=2;
}}else{if(fb.barTop||fb.barBottom){fd+=2;
fi+=2;
}else if(fb.barLeft||fb.barRight){fg+=2;
ff+=2;
}}
if(fb.checked){if(!fb.firstTab){if(fb.barTop||fb.barBottom){ff=-4;
}else{fi=-4;
}}
if(!fb.lastTab){if(fb.barTop||fb.barBottom){fg=-4;
}else{fd=-4;
}}}return {zIndex:fb.checked?10:5,decorator:fk,backgroundColor:df,padding:[fe,fj,fc,fh],margin:[fi,fg,fd,ff],textColor:fb.disabled?dc:undefined};
}},"tabview-page/button/label":{alias:cY,style:function(fl){return {padding:[0,1,0,1],margin:fl.focused?0:1,decorator:fl.focused?bq:undefined};
}},"tabview-page/button/icon":bY,"tabview-page/button/close-button":{alias:de,style:function(fm){return {icon:ci};
}},"scrollbar":{},"scrollbar/slider":{alias:x,style:function(fn){return {backgroundColor:cE};
}},"scrollbar/slider/knob":{include:dr,style:function(fo){return {height:14,width:14,minHeight:fo.horizontal?undefined:9,minWidth:fo.horizontal?9:undefined};
}},"scrollbar/button":{alias:dh,include:dh,style:function(fp){var fq;

if(fp.up||fp.down){if(fp.pressed||fp.abandoned||fp.checked){fq=[5,2,3,4];
}else{fq=[4,3];
}}else{if(fp.pressed||fp.abandoned||fp.checked){fq=[4,3,2,5];
}else{fq=[3,4];
}}var fr=cW;

if(fp.left){fr+=dB;
}else if(fp.right){fr+=bK;
}else if(fp.up){fr+=cB;
}else{fr+=e;
}return {padding:fq,icon:fr};
}},"scrollbar/button-begin":dG,"scrollbar/button-end":dG,"slider":{style:function(fs){var ft;

if(fs.disabled){ft=dm;
}else if(fs.invalid){ft=cG;
}else if(fs.focused){ft=cE;
}else{ft=q;
}return {backgroundColor:ft,decorator:fs.focused?bU:cX};
}},"slider/knob":{include:dr,style:function(fu){return {width:14,height:14,decorator:da};
}},"tree-folder/open":{style:function(fv){return {source:fv.opened?N:H};
}},"tree-folder":{style:function(fw){return {padding:[2,3,2,0],icon:fw.opened?s:dL,iconOpened:s};
}},"tree-folder/icon":{style:function(fx){return {padding:[0,4,0,0]};
}},"tree-folder/label":{style:function(fy){return {padding:[1,2],backgroundColor:fy.selected?ca:undefined,textColor:fy.selected?db:undefined};
}},"tree-file":{include:o,alias:o,style:function(fz){return {icon:bh};
}},"tree":{include:dn,alias:dn,style:function(fA){return {contentPadding:[4,4,4,4]};
}},"treevirtual":{style:function(fB){return {decorator:cD};
}},"treevirtual-folder":{style:function(fC){return {icon:(fC.opened?s:dL)};
}},"treevirtual-file":{include:bd,alias:bd,style:function(fD){return {icon:bh};
}},"treevirtual-line":{style:function(fE){return {icon:bO};
}},"treevirtual-contract":{style:function(fF){return {icon:N};
}},"treevirtual-expand":{style:function(fG){return {icon:H};
}},"treevirtual-only-contract":{style:function(fH){return {icon:B};
}},"treevirtual-only-expand":{style:function(fI){return {icon:C};
}},"treevirtual-start-contract":{style:function(fJ){return {icon:i};
}},"treevirtual-start-expand":{style:function(fK){return {icon:br};
}},"treevirtual-end-contract":{style:function(fL){return {icon:c};
}},"treevirtual-end-expand":{style:function(fM){return {icon:j};
}},"treevirtual-cross-contract":{style:function(fN){return {icon:F};
}},"treevirtual-cross-expand":{style:function(fO){return {icon:bF};
}},"treevirtual-end":{style:function(fP){return {icon:d};
}},"treevirtual-cross":{style:function(fQ){return {icon:bM};
}},"window":{style:function(fR){return {contentPadding:[10,10,10,10],backgroundColor:df,decorator:fR.maximized?undefined:da,shadow:fR.maximized?undefined:cF};
}},"window-resize-frame":bb,"window/pane":{},"window/captionbar":{style:function(fS){return {padding:1,backgroundColor:fS.active?ck:b,textColor:fS.active?cl:ct};
}},"window/icon":{style:function(fT){return {marginRight:4};
}},"window/title":{style:function(fU){return {cursor:n,font:dl,marginRight:20,alignY:bQ};
}},"window/minimize-button":{include:dh,alias:dh,style:function(fV){return {icon:g,padding:fV.pressed||fV.abandoned?[2,1,0,3]:[1,2]};
}},"window/restore-button":{include:dh,alias:dh,style:function(fW){return {icon:cy,padding:fW.pressed||fW.abandoned?[2,1,0,3]:[1,2]};
}},"window/maximize-button":{include:dh,alias:dh,style:function(fX){return {icon:z,padding:fX.pressed||fX.abandoned?[2,1,0,3]:[1,2]};
}},"window/close-button":{include:dh,alias:dh,style:function(fY){return {marginLeft:2,icon:bH,padding:fY.pressed||fY.abandoned?[2,1,0,3]:[1,2]};
}},"window/statusbar":{style:function(ga){return {decorator:dd,padding:[2,6]};
}},"window/statusbar-text":cY,"resizer":{style:function(gb){return {decorator:da};
}},"splitpane":{},"splitpane/splitter":{style:function(gc){return {backgroundColor:df};
}},"splitpane/splitter/knob":{style:function(gd){return {source:gd.horizontal?bJ:cs,padding:2};
}},"splitpane/slider":{style:function(ge){return {backgroundColor:du,opacity:0.3};
}},"selectbox":{include:dr,style:function(gf){var gg=dh;

if(gf.invalid&&!gf.disabled){gg=cG;
}else if(gf.abandoned){gg=cL;
}else if(!gf.abandoned&&gf.hovered){gg=dk;
}else if(!gf.abandoned&&!gf.hovered&&gf.checked){gg=bk;
}return {backgroundColor:gg};
}},"selectbox/atom":de,"selectbox/popup":bV,"selectbox/list":dn,"selectbox/arrow":{include:bY,style:function(gh){return {source:dp,paddingRight:4,paddingLeft:5};
}},"datechooser":{style:function(gi){return {decorator:da};
}},"datechooser/navigation-bar":{style:function(gj){return {backgroundColor:k,textColor:gj.disabled?dc:gj.invalid?cI:undefined,padding:[2,10]};
}},"datechooser/last-year-button-tooltip":bT,"datechooser/last-month-button-tooltip":bT,"datechooser/next-year-button-tooltip":bT,"datechooser/next-month-button-tooltip":bT,"datechooser/last-year-button":cM,"datechooser/last-month-button":cM,"datechooser/next-year-button":cM,"datechooser/next-month-button":cM,"datechooser/button/icon":{},"datechooser/button":{style:function(gk){var gl={width:17,show:cj};

if(gk.lastYear){gl.icon=ba;
}else if(gk.lastMonth){gl.icon=J;
}else if(gk.nextYear){gl.icon=cd;
}else if(gk.nextMonth){gl.icon=dE;
}
if(gk.pressed||gk.checked||gk.abandoned){gl.decorator=dd;
}else if(gk.hovered){gl.decorator=r;
}else{gl.decorator=undefined;
}
if(gk.pressed||gk.checked||gk.abandoned){gl.padding=[2,0,0,2];
}else if(gk.hovered){gl.padding=1;
}else{gl.padding=2;
}return gl;
}},"datechooser/month-year-label":{style:function(gm){return {font:dl,textAlign:cJ};
}},"datechooser/date-pane":{style:function(gn){return {decorator:bD,backgroundColor:k};
}},"datechooser/weekday":{style:function(go){return {decorator:cf,font:dl,textAlign:cJ,textColor:go.disabled?dc:go.weekend?l:k,backgroundColor:go.weekend?k:l};
}},"datechooser/day":{style:function(gp){return {textAlign:cJ,decorator:gp.today?cD:undefined,textColor:gp.disabled?dc:gp.selected?db:gp.otherMonth?dc:undefined,backgroundColor:gp.disabled?undefined:gp.selected?bv:undefined,padding:[2,4]};
}},"datechooser/week":{style:function(gq){return {textAlign:cJ,textColor:l,padding:[2,4],decorator:gq.header?y:ch};
}},"combobox":{style:function(gr){var gs;

if(gr.disabled){gs=dm;
}else if(gr.invalid){gs=cG;
}else if(gr.focused){gs=cE;
}else{gs=q;
}return {decorator:gr.focused?bU:cX,textColor:gr.disabled?dc:undefined,backgroundColor:gs};
}},"combobox/button":{alias:dh,include:dh,style:function(gt){return {icon:dp,backgroundColor:gt.hovered?dk:dh};
}},"combobox/popup":bV,"combobox/list":dn,"combobox/textfield":{include:ds,style:function(gu){return {decorator:undefined,padding:[2,3],backgroundColor:undefined};
}},"menu":{style:function(gv){var gw={backgroundColor:df,shadow:cF,decorator:da,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,padding:1,placementModeY:gv.submenu||gv.contextmenu?cu:cQ};

if(gv.submenu){gw.position=be;
gw.offset=[-2,-3];
}
if(gv.contextmenu){gw.offset=4;
}return gw;
}},"menu/slidebar":bC,"menu-slidebar":dg,"menu-slidebar-button":{style:function(gx){return {backgroundColor:gx.hovered?ca:undefined,padding:6,center:true};
}},"menu-slidebar/button-backward":{include:t,style:function(gy){return {icon:gy.hovered?dC:dD};
}},"menu-slidebar/button-forward":{include:t,style:function(gz){return {icon:gz.hovered?cq:dp};
}},"menu-separator":{style:function(gA){return {height:0,decorator:cn,marginTop:4,marginBottom:4,marginLeft:2,marginRight:2};
}},"menu-button":{alias:de,style:function(gB){return {backgroundColor:gB.selected?ca:undefined,textColor:gB.selected?db:undefined,padding:[2,6]};
}},"menu-button/icon":{include:bY,style:function(gC){return {alignY:bQ};
}},"menu-button/label":{include:cY,style:function(gD){return {alignY:bQ,padding:1};
}},"menu-button/shortcut":{include:cY,style:function(gE){return {alignY:bQ,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:bY,style:function(gF){return {source:gF.selected?dw:dE,alignY:bQ};
}},"menu-checkbox":{alias:bR,include:bR,style:function(gG){return {icon:!gG.checked?undefined:gG.selected?cv:R};
}},"menu-radiobutton":{alias:bR,include:bR,style:function(gH){return {icon:!gH.checked?undefined:gH.selected?a:cT};
}},"menubar":{style:function(gI){return {backgroundColor:df,decorator:da};
}},"menubar-button":{alias:de,style:function(gJ){return {padding:[2,6],backgroundColor:gJ.pressed||gJ.hovered?ca:undefined,textColor:gJ.pressed||gJ.hovered?db:undefined};
}},"colorselector":dg,"colorselector/control-bar":dg,"colorselector/visual-pane":bX,"colorselector/control-pane":dg,"colorselector/preset-grid":dg,"colorselector/colorbucket":{style:function(gK){return {decorator:dd,width:16,height:16};
}},"colorselector/preset-field-set":bX,"colorselector/input-field-set":bX,"colorselector/preview-field-set":bX,"colorselector/hex-field-composite":dg,"colorselector/hex-field":ds,"colorselector/rgb-spinner-composite":dg,"colorselector/rgb-spinner-red":dq,"colorselector/rgb-spinner-green":dq,"colorselector/rgb-spinner-blue":dq,"colorselector/hsb-spinner-composite":dg,"colorselector/hsb-spinner-hue":dq,"colorselector/hsb-spinner-saturation":dq,"colorselector/hsb-spinner-brightness":dq,"colorselector/preview-content-old":{style:function(gL){return {decorator:dd,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(gM){return {decorator:dd,backgroundColor:bS,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(gN){return {decorator:dd,margin:5};
}},"colorselector/brightness-field":{style:function(gO){return {decorator:dd,margin:[5,7]};
}},"colorselector/hue-saturation-pane":dg,"colorselector/hue-saturation-handle":dg,"colorselector/brightness-pane":dg,"colorselector/brightness-handle":dg,"table":dg,"table/statusbar":{style:function(gP){return {decorator:O,paddingLeft:2,paddingRight:2};
}},"table/column-button":{alias:dh,style:function(gQ){var gS,gR;

if(gQ.pressed||gQ.checked||gQ.abandoned){gS=dd;
gR=[3,2,1,4];
}else if(gQ.hovered){gS=r;
gR=[2,3];
}else{gS=undefined;
gR=[3,4];
}return {decorator:gS,padding:gR,backgroundColor:gQ.abandoned?cL:dh,icon:u};
}},"table-column-reset-button":{extend:bR,alias:bR,style:function(){return {icon:cc};
}},"table-scroller/scrollbar-x":cK,"table-scroller/scrollbar-y":cK,"table-scroller":dg,"table-scroller/header":{style:function(gT){return {decorator:bw,backgroundColor:A};
}},"table-scroller/pane":{style:function(gU){return {backgroundColor:bx};
}},"table-scroller/focus-indicator":{style:function(gV){return {decorator:bo};
}},"table-scroller/resize-line":{style:function(gW){return {backgroundColor:cm,width:3};
}},"table-header-cell":{alias:de,style:function(gX){return {minWidth:13,paddingLeft:2,paddingRight:2,paddingBottom:gX.hovered?0:2,decorator:gX.hovered?f:bf,backgroundColor:gX.hovered?by:bf,sortIcon:gX.sorted?(gX.sortedAscending?bN:cV):undefined};
}},"table-header-cell/icon":{style:function(gY){return {marginRight:4};
}},"table-header-cell/sort-icon":{style:function(ha){return {alignY:bQ};
}},"table-editor-textfield":{include:ds,style:function(hb){return {decorator:undefined,padding:[2,2]};
}},"table-editor-selectbox":{include:p,alias:p,style:function(hc){return {padding:[0,2]};
}},"table-editor-combobox":{include:cH,alias:cH,style:function(hd){return {decorator:undefined};
}},"colorpopup":{alias:bV,include:bV,style:function(he){return {decorator:da,padding:5,backgroundColor:df};
}},"colorpopup/field":{style:function(hf){return {decorator:dd,margin:2,width:14,height:14,backgroundColor:df};
}},"colorpopup/selector-button":dh,"colorpopup/auto-button":dh,"colorpopup/preview-pane":bX,"colorpopup/current-preview":{style:function(hg){return {height:20,padding:4,marginLeft:4,decorator:dd,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(hh){return {height:20,padding:4,marginRight:4,decorator:dd,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:dh,include:dh,style:function(hi){return {icon:bt};
}},"colorpopup/colorselector-cancelbutton":{alias:dh,include:dh,style:function(hj){return {icon:bB};
}},"virtual-list":dn,"virtual-list/row-layer":cU,"row-layer":dg,"column-layer":dg,"group-item":{include:cY,alias:cY,style:function(hk){return {padding:4,backgroundColor:bn,textColor:bS,font:dl};
}},"virtual-selectbox":p,"virtual-selectbox/dropdown":bV,"virtual-selectbox/dropdown/list":{alias:dJ},"virtual-combobox":cH,"virtual-combobox/dropdown":bV,"virtual-combobox/dropdown/list":{alias:dJ},"virtual-tree":{include:dH,alias:dH,style:function(hl){return {itemHeight:21};
}},"virtual-tree-folder":o,"virtual-tree-file":cN,"cell":{style:function(hm){return {backgroundColor:hm.selected?X:I,textColor:hm.selected?db:dK,padding:[3,6]};
}},"cell-string":bW,"cell-number":{include:bW,style:function(hn){return {textAlign:P};
}},"cell-image":bW,"cell-boolean":bW,"cell-atom":bW,"cell-date":bW,"cell-html":bW,"htmlarea":{"include":dg,style:function(ho){return {backgroundColor:bS};
}},"progressbar":{style:function(hp){return {decorator:cO,padding:[1],backgroundColor:bS,width:200,height:20};
}},"progressbar/progress":{style:function(hq){return {backgroundColor:hq.disabled?dm:ca};
}},"app-header":{style:function(hr){return {textColor:db,backgroundColor:ca,padding:[8,12]};
}},"app-header-label":cY}});
})();
(function(){var i="Liberation Sans",h="Verdana",g="Bitstream Vera Sans",f="Lucida Grande",e="Tahoma",d="monospace",c="qx.theme.classic.Font",b="Courier New",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:11,lineHeight:1.4,family:[f,e,h,g,i]},"bold":{size:11,lineHeight:1.4,family:[f,e,h,g,i],bold:true},"small":{size:10,lineHeight:1.4,family:[f,e,h,g,i]},"monospace":{size:11,lineHeight:1.4,family:[a,b,d]}}});
})();
(function(){var c="Oxygen",b="qx.theme.icon.Oxygen",a="qx/icon/Oxygen";
qx.Theme.define(b,{title:c,aliases:{"icon":a}});
})();
(function(){var j="white",i="black",h="#3E6CA8",g="#EBE9ED",f="#A7A6AA",e="#EEE",d="#F3F0F5",c="gray",b="#85878C",a="#888888",E="#3E5B97",D="#FFFFE1",C="#F3F8FD",B="#CBC8CD",A="#FFE0E0",z="#F4F4F4",y="#808080",x="#CCCCCC",w="#C82C2C",v="#DBEAF9",q="#BCCEE5",r="#A5BDDE",o="#7CA0CF",p="#F6F5F7",m="#FF9999",n="qx.theme.classic.Color",k="#990000",l="#F9F8E9",s="#DCDFE4",t="#FAFBFE",u="#AAAAAA";
qx.Theme.define(n,{colors:{"background":g,"background-light":d,"background-focused":C,"background-focused-inner":v,"background-disabled":z,"background-selected":h,"background-field":j,"background-pane":t,"background-invalid":A,"border-lead":a,"border-light":j,"border-light-shadow":s,"border-dark-shadow":f,"border-dark":b,"border-main":b,"border-focused-light":q,"border-focused-light-shadow":r,"border-focused-dark-shadow":o,"border-focused-dark":h,"border-separator":y,"invalid":k,"border-focused-invalid":m,"text":i,"text-disabled":f,"text-selected":j,"text-focused":E,"text-placeholder":B,"tooltip":D,"tooltip-text":i,"tooltip-invalid":w,"button":g,"button-hovered":p,"button-abandoned":l,"button-checked":d,"window-active-caption-text":[255,255,255],"window-inactive-caption-text":[255,255,255],"window-active-caption":[51,94,168],"window-inactive-caption":[111,161,217],"date-chooser":j,"date-chooser-title":[116,116,116],"date-chooser-selected":[52,52,52],"effect":[254,200,60],"table-pane":j,"table-header":[242,242,242],"table-header-border":[214,213,217],"table-header-cell":[235,234,219],"table-header-cell-hover":[255,255,255],"table-focus-indicator":[179,217,255],"table-row-background-focused-selected":[90,138,211],"table-row-background-focused":[221,238,255],"table-row-background-selected":[51,94,168],"table-row-background-even":[250,248,243],"table-row-background-odd":[255,255,255],"table-row-selected":[255,255,255],"table-row":[0,0,0],"table-row-line":e,"table-column-line":e,"progressive-table-header":u,"progressive-table-row-background-even":[250,248,243],"progressive-table-row-background-odd":[255,255,255],"progressive-progressbar-background":c,"progressive-progressbar-indicator-done":x,"progressive-progressbar-indicator-undone":j,"progressive-progressbar-percent-background":c,"progressive-progressbar-percent-text":j}});
})();
(function(){var b="Classic Windows",a="qx.theme.Classic";
qx.Theme.define(a,{title:b,meta:{color:qx.theme.classic.Color,decoration:qx.theme.classic.Decoration,font:qx.theme.classic.Font,appearance:qx.theme.classic.Appearance,icon:qx.theme.icon.Oxygen}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__hq={};
this.__hr=qx.lang.Function.bind(this.__hv,this);
this.__hs=false;
},members:{__ht:null,__hu:null,__hq:null,__hs:null,__hr:null,schedule:function(c){if(this.__ht==null){this.__ht=window.setTimeout(this.__hr,0);
}var d=c.toHashCode();
if(this.__hu&&this.__hu[d]){return;
}this.__hq[d]=c;
this.__hs=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__hu&&this.__hu[f]){this.__hu[f]=null;
return;
}delete this.__hq[f];
if(qx.lang.Object.isEmpty(this.__hq)&&this.__ht!=null){window.clearTimeout(this.__ht);
this.__ht=null;
}},__hv:qx.event.GlobalError.observeMethod(function(){this.__ht=null;
while(this.__hs){this.__hu=qx.lang.Object.clone(this.__hq);
this.__hq={};
this.__hs=false;

for(var h in this.__hu){var g=this.__hu[h];

if(g){this.__hu[h]=null;
g.call();
}}}this.__hu=null;
})},destruct:function(){if(this.__ht!=null){window.clearTimeout(this.__ht);
}this.__hr=this.__hq=null;
}});
})();
(function(){var d="=",c="+",b="&",a="qx.lang.Object";
qx.Class.define(a,{statics:{empty:function(e){for(var f in e){if(e.hasOwnProperty(f)){delete e[f];
}}},isEmpty:function(g){for(var h in g){return false;
}return true;
},hasMinLength:function(j,k){if(k<=0){return true;
}var length=0;

for(var m in j){if((++length)>=k){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(n){var p=[];
var o=this.getKeys(n);

for(var i=0,l=o.length;i<l;i++){p.push(n[o[i]]);
}return p;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(q,r){return qx.lang.Object.mergeWith(q,r,false);
},merge:function(s,t){var u=arguments.length;

for(var i=1;i<u;i++){qx.lang.Object.mergeWith(s,arguments[i]);
}return s;
},clone:function(v){var w={};

for(var x in v){w[x]=v[x];
}return w;
},invert:function(y){var z={};

for(var A in y){z[y[A].toString()]=A;
}return z;
},getKeyFromValue:function(B,C){for(var D in B){if(B.hasOwnProperty(D)&&B[D]===C){return D;
}}return null;
},contains:function(E,F){return this.getKeyFromValue(E,F)!==null;
},select:function(G,H){return H[G];
},fromArray:function(I){var J={};

for(var i=0,l=I.length;i<l;i++){J[I[i].toString()]=true;
}return J;
},toUriParameter:function(K,L){var O,N=[],M=window.encodeURIComponent;

for(O in K){if(K.hasOwnProperty(O)){if(L){N.push(M(O).replace(/%20/g,c)+d+M(K[O]).replace(/%20/g,c));
}else{N.push(M(O)+d+M(K[O]));
}}}return N.join(b);
}}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b,c){qx.core.Object.call(this);
this.__bD=b;
this.__bE=c||null;
this.__dy=qx.util.DeferredCallManager.getInstance();
},members:{__bD:null,__bE:null,__dy:null,cancel:function(){this.__dy.cancel(this);
},schedule:function(){this.__dy.schedule(this);
},call:function(){var d;
this.__bE?this.__bD.apply(this.__bE):this.__bD();
}},destruct:function(){this.cancel();
this.__bE=this.__bD=this.__dy=null;
}});
})();
(function(){var m="element",k="div",j="",h="mshtml",g="engine.name",f="scroll",d="text",c="qx.html.Element",b="|capture|",a="activate",F="blur",E="deactivate",D="__kv",C="css.userselect",B="capture",A="visible",z="releaseCapture",w="|bubble|",v="qxSelectable",u="tabIndex",s="off",t="qx.html.Iframe",q="focus",r="none",o="css.userselect.none",p="hidden",n="on";
qx.Class.define(c,{extend:qx.core.Object,construct:function(G,H,I){qx.core.Object.call(this);
this.__ka=G||k;
this.__kb=H||null;
this.__kc=I||null;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__kd:{},_scheduleFlush:function(J){qx.html.Element.__iE.schedule();
},flush:function(){var U;
var M=this.__ke();
var L=M.getFocus();

if(L&&this.__ki(L)){M.blur(L);
}var bc=M.getActive();

if(bc&&this.__ki(bc)){qx.bom.Element.deactivate(bc);
}var P=this.__kg();

if(P&&this.__ki(P)){qx.bom.Element.releaseCapture(P);
}var V=[];
var W=this._modified;

for(var T in W){U=W[T];
if(U.__kz()||U.classname==t){if(U.__kj&&qx.dom.Hierarchy.isRendered(U.__kj)){V.push(U);
}else{U.__ky();
}delete W[T];
}}
for(var i=0,l=V.length;i<l;i++){U=V[i];
U.__ky();
}var R=this._visibility;

for(var T in R){U=R[T];
var X=U.__kj;

if(!X){delete R[T];
continue;
}if(!U.$$disposed){X.style.display=U.__kl?j:r;
if((qx.core.Environment.get(g)==h)){if(!(document.documentMode>=8)){X.style.visibility=U.__kl?A:p;
}}}delete R[T];
}var scroll=this._scroll;

for(var T in scroll){U=scroll[T];
var bd=U.__kj;

if(bd&&bd.offsetWidth){var O=true;
if(U.__ko!=null){U.__kj.scrollLeft=U.__ko;
delete U.__ko;
}if(U.__kp!=null){U.__kj.scrollTop=U.__kp;
delete U.__kp;
}var Y=U.__km;

if(Y!=null){var S=Y.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewX(S,bd,Y.align);
delete U.__km;
}else{O=false;
}}var ba=U.__kn;

if(ba!=null){var S=ba.element.getDomElement();

if(S&&S.offsetWidth){qx.bom.element.Scroll.intoViewY(S,bd,ba.align);
delete U.__kn;
}else{O=false;
}}if(O){delete scroll[T];
}}}var N={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var bb=this._actions[i];
var X=bb.element.__kj;

if(!X||!N[bb.type]&&!bb.element.__kz()){continue;
}var Q=bb.args;
Q.unshift(X);
qx.bom.Element[bb.type].apply(qx.bom.Element,Q);
}this._actions=[];
for(var T in this.__kd){var K=this.__kd[T];
var bd=K.element.__kj;

if(bd){qx.bom.Selection.set(bd,K.start,K.end);
delete this.__kd[T];
}}qx.event.handler.Appear.refresh();
},__ke:function(){if(!this.__kf){var be=qx.event.Registration.getManager(window);
this.__kf=be.getHandler(qx.event.handler.Focus);
}return this.__kf;
},__kg:function(){if(!this.__kh){var bf=qx.event.Registration.getManager(window);
this.__kh=bf.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__kh.getCaptureElement();
},__ki:function(bg){var bh=qx.core.ObjectRegistry.fromHashCode(bg.$$element);
return bh&&!bh.__kz();
}},members:{__ka:null,__kj:null,__dB:false,__kk:true,__kl:true,__km:null,__kn:null,__ko:null,__kp:null,__kq:null,__kr:null,__ks:null,__kb:null,__kc:null,__kt:null,__ku:null,__kv:null,__kw:null,__kx:null,_scheduleChildrenUpdate:function(){if(this.__kw){return;
}this.__kw=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
},_createDomElement:function(){return qx.bom.Element.create(this.__ka);
},__ky:function(){var length;
var bi=this.__kv;

if(bi){length=bi.length;
var bj;

for(var i=0;i<length;i++){bj=bi[i];

if(bj.__kl&&bj.__kk&&!bj.__kj){bj.__ky();
}}}
if(!this.__kj){this.__kj=this._createDomElement();
this.__kj.$$element=this.$$hash;
this._copyData(false);

if(bi&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__kw){this._syncChildren();
}}delete this.__kw;
},_insertChildren:function(){var bk=this.__kv;
var length=bk.length;
var bm;

if(length>2){var bl=document.createDocumentFragment();

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__kj&&bm.__kk){bl.appendChild(bm.__kj);
}}this.__kj.appendChild(bl);
}else{var bl=this.__kj;

for(var i=0;i<length;i++){bm=bk[i];

if(bm.__kj&&bm.__kk){bl.appendChild(bm.__kj);
}}}},_syncChildren:function(){var br;
var bw=qx.core.ObjectRegistry;
var bn=this.__kv;
var bu=bn.length;
var bo;
var bs;
var bq=this.__kj;
var bt=bq.childNodes;
var bp=0;
var bv;
for(var i=bt.length-1;i>=0;i--){bv=bt[i];
bs=bw.fromHashCode(bv.$$element);

if(!bs||!bs.__kk||bs.__kx!==this){bq.removeChild(bv);
}}for(var i=0;i<bu;i++){bo=bn[i];
if(bo.__kk){bs=bo.__kj;
bv=bt[bp];

if(!bs){continue;
}if(bs!=bv){if(bv){bq.insertBefore(bs,bv);
}else{bq.appendChild(bs);
}}bp++;
}}},_copyData:function(bx){var bB=this.__kj;
var bA=this.__kc;

if(bA){var by=qx.bom.element.Attribute;

for(var bC in bA){by.set(bB,bC,bA[bC]);
}}var bA=this.__kb;

if(bA){var bz=qx.bom.element.Style;

if(bx){bz.setStyles(bB,bA);
}else{bz.setCss(bB,bz.compile(bA));
}}var bA=this.__kt;

if(bA){for(var bC in bA){this._applyProperty(bC,bA[bC]);
}}var bA=this.__ku;

if(bA){qx.event.Registration.getManager(bB).importListeners(bB,bA);
delete this.__ku;
}},_syncData:function(){var bH=this.__kj;
var bG=qx.bom.element.Attribute;
var bE=qx.bom.element.Style;
var bF=this.__kr;

if(bF){var bK=this.__kc;

if(bK){var bI;

for(var bJ in bF){bI=bK[bJ];

if(bI!==undefined){bG.set(bH,bJ,bI);
}else{bG.reset(bH,bJ);
}}}this.__kr=null;
}var bF=this.__kq;

if(bF){var bK=this.__kb;

if(bK){var bD={};

for(var bJ in bF){bD[bJ]=bK[bJ];
}bE.setStyles(bH,bD);
}this.__kq=null;
}var bF=this.__ks;

if(bF){var bK=this.__kt;

if(bK){var bI;

for(var bJ in bF){this._applyProperty(bJ,bK[bJ]);
}}this.__ks=null;
}},__kz:function(){var bL=this;
while(bL){if(bL.__dB){return true;
}
if(!bL.__kk||!bL.__kl){return false;
}bL=bL.__kx;
}return false;
},__kA:function(bM){if(bM.__kx===this){throw new Error("Child is already in: "+bM);
}
if(bM.__dB){throw new Error("Root elements could not be inserted into other ones.");
}if(bM.__kx){bM.__kx.remove(bM);
}bM.__kx=this;
if(!this.__kv){this.__kv=[];
}if(this.__kj){this._scheduleChildrenUpdate();
}},__kB:function(bN){if(bN.__kx!==this){throw new Error("Has no child: "+bN);
}if(this.__kj){this._scheduleChildrenUpdate();
}delete bN.__kx;
},__kC:function(bO){if(bO.__kx!==this){throw new Error("Has no child: "+bO);
}if(this.__kj){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__kv||null;
},getChild:function(bP){var bQ=this.__kv;
return bQ&&bQ[bP]||null;
},hasChildren:function(){var bR=this.__kv;
return bR&&bR[0]!==undefined;
},indexOf:function(bS){var bT=this.__kv;
return bT?bT.indexOf(bS):-1;
},hasChild:function(bU){var bV=this.__kv;
return bV&&bV.indexOf(bU)!==-1;
},add:function(bW){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__kA(arguments[i]);
}this.__kv.push.apply(this.__kv,arguments);
}else{this.__kA(bW);
this.__kv.push(bW);
}return this;
},addAt:function(bX,bY){this.__kA(bX);
qx.lang.Array.insertAt(this.__kv,bX,bY);
return this;
},remove:function(ca){var cb=this.__kv;

if(!cb){return;
}
if(arguments[1]){var cc;

for(var i=0,l=arguments.length;i<l;i++){cc=arguments[i];
this.__kB(cc);
qx.lang.Array.remove(cb,cc);
}}else{this.__kB(ca);
qx.lang.Array.remove(cb,ca);
}return this;
},removeAt:function(cd){var ce=this.__kv;

if(!ce){throw new Error("Has no children!");
}var cf=ce[cd];

if(!cf){throw new Error("Has no child at this position!");
}this.__kB(cf);
qx.lang.Array.removeAt(this.__kv,cd);
return this;
},removeAll:function(){var cg=this.__kv;

if(cg){for(var i=0,l=cg.length;i<l;i++){this.__kB(cg[i]);
}cg.length=0;
}return this;
},getParent:function(){return this.__kx||null;
},insertInto:function(parent,ch){parent.__kA(this);

if(ch==null){parent.__kv.push(this);
}else{qx.lang.Array.insertAt(this.__kv,this,ch);
}return this;
},insertBefore:function(ci){var parent=ci.__kx;
parent.__kA(this);
qx.lang.Array.insertBefore(parent.__kv,this,ci);
return this;
},insertAfter:function(cj){var parent=cj.__kx;
parent.__kA(this);
qx.lang.Array.insertAfter(parent.__kv,this,cj);
return this;
},moveTo:function(ck){var parent=this.__kx;
parent.__kC(this);
var cl=parent.__kv.indexOf(this);

if(cl===ck){throw new Error("Could not move to same index!");
}else if(cl<ck){ck--;
}qx.lang.Array.removeAt(parent.__kv,cl);
qx.lang.Array.insertAt(parent.__kv,this,ck);
return this;
},moveBefore:function(cm){var parent=this.__kx;
return this.moveTo(parent.__kv.indexOf(cm));
},moveAfter:function(cn){var parent=this.__kx;
return this.moveTo(parent.__kv.indexOf(cn)+1);
},free:function(){var parent=this.__kx;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__kv){return;
}parent.__kB(this);
qx.lang.Array.remove(parent.__kv,this);
return this;
},getDomElement:function(){return this.__kj||null;
},getNodeName:function(){return this.__ka;
},setNodeName:function(name){this.__ka=name;
},setRoot:function(co){this.__dB=co;
},useMarkup:function(cp){if(this.__kj){throw new Error("Could not overwrite existing element!");
}if((qx.core.Environment.get(g)==h)){var cq=document.createElement(k);
}else{var cq=qx.bom.Element.getHelperElement();
}cq.innerHTML=cp;
this.useElement(cq.firstChild);
return this.__kj;
},useElement:function(cr){if(this.__kj){throw new Error("Could not overwrite existing element!");
}this.__kj=cr;
this.__kj.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var ct=this.getAttribute(u);

if(ct>=1){return true;
}var cs=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(ct>=0&&cs[this.__ka]){return true;
}return false;
},setSelectable:function(cu){this.setAttribute(v,cu?n:s);
var cv=qx.core.Environment.get(C);

if(cv){this.setStyle(cv,cu?d:qx.core.Environment.get(o));
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__ka];
},include:function(){if(this.__kk){return;
}delete this.__kk;

if(this.__kx){this.__kx._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__kk){return;
}this.__kk=false;

if(this.__kx){this.__kx._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__kk===true;
},show:function(){if(this.__kl){return;
}
if(this.__kj){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}if(this.__kx){this.__kx._scheduleChildrenUpdate();
}delete this.__kl;
},hide:function(){if(!this.__kl){return;
}
if(this.__kj){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}this.__kl=false;
},isVisible:function(){return this.__kl===true;
},scrollChildIntoViewX:function(cw,cx,cy){var cz=this.__kj;
var cA=cw.getDomElement();

if(cy!==false&&cz&&cz.offsetWidth&&cA&&cA.offsetWidth){qx.bom.element.Scroll.intoViewX(cA,cz,cx);
}else{this.__km={element:cw,align:cx};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__ko;
},scrollChildIntoViewY:function(cB,cC,cD){var cE=this.__kj;
var cF=cB.getDomElement();

if(cD!==false&&cE&&cE.offsetWidth&&cF&&cF.offsetWidth){qx.bom.element.Scroll.intoViewY(cF,cE,cC);
}else{this.__kn={element:cB,align:cC};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__kp;
},scrollToX:function(x,cG){var cH=this.__kj;

if(cG!==true&&cH&&cH.offsetWidth){cH.scrollLeft=x;
delete this.__ko;
}else{this.__ko=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__km;
},getScrollX:function(){var cI=this.__kj;

if(cI){return cI.scrollLeft;
}return this.__ko||0;
},scrollToY:function(y,cJ){var cK=this.__kj;

if(cJ!==true&&cK&&cK.offsetWidth){cK.scrollTop=y;
delete this.__kp;
}else{this.__kp=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}delete this.__kn;
},getScrollY:function(){var cL=this.__kj;

if(cL){return cL.scrollTop;
}return this.__kp||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(f,this.__kE,this);
},enableScrolling:function(){this.removeListener(f,this.__kE,this);
},__kD:null,__kE:function(e){if(!this.__kD){this.__kD=true;
this.__kj.scrollTop=0;
this.__kj.scrollLeft=0;
delete this.__kD;
}},getTextSelection:function(){var cM=this.__kj;

if(cM){return qx.bom.Selection.get(cM);
}return null;
},getTextSelectionLength:function(){var cN=this.__kj;

if(cN){return qx.bom.Selection.getLength(cN);
}return null;
},getTextSelectionStart:function(){var cO=this.__kj;

if(cO){return qx.bom.Selection.getStart(cO);
}return null;
},getTextSelectionEnd:function(){var cP=this.__kj;

if(cP){return qx.bom.Selection.getEnd(cP);
}return null;
},setTextSelection:function(cQ,cR){var cS=this.__kj;

if(cS){qx.bom.Selection.set(cS,cQ,cR);
return;
}qx.html.Element.__kd[this.toHashCode()]={element:this,start:cQ,end:cR};
qx.html.Element._scheduleFlush(m);
},clearTextSelection:function(){var cT=this.__kj;

if(cT){qx.bom.Selection.clear(cT);
}delete qx.html.Element.__kd[this.toHashCode()];
},__kF:function(cU,cV){var cW=qx.html.Element._actions;
cW.push({type:cU,element:this,args:cV||[]});
qx.html.Element._scheduleFlush(m);
},focus:function(){this.__kF(q);
},blur:function(){this.__kF(F);
},activate:function(){this.__kF(a);
},deactivate:function(){this.__kF(E);
},capture:function(cX){this.__kF(B,[cX!==false]);
},releaseCapture:function(){this.__kF(z);
},setStyle:function(cY,da,dc){if(!this.__kb){this.__kb={};
}
if(this.__kb[cY]==da){return;
}
if(da==null){delete this.__kb[cY];
}else{this.__kb[cY]=da;
}if(this.__kj){if(dc){qx.bom.element.Style.set(this.__kj,cY,da);
return this;
}if(!this.__kq){this.__kq={};
}this.__kq[cY]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setStyles:function(dd,de){var df=qx.bom.element.Style;

if(!this.__kb){this.__kb={};
}
if(this.__kj){if(!this.__kq){this.__kq={};
}
for(var dh in dd){var dg=dd[dh];

if(this.__kb[dh]==dg){continue;
}
if(dg==null){delete this.__kb[dh];
}else{this.__kb[dh]=dg;
}if(de){df.set(this.__kj,dh,dg);
continue;
}this.__kq[dh]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}else{for(var dh in dd){var dg=dd[dh];

if(this.__kb[dh]==dg){continue;
}
if(dg==null){delete this.__kb[dh];
}else{this.__kb[dh]=dg;
}}}return this;
},removeStyle:function(di,dj){this.setStyle(di,null,dj);
},getStyle:function(dk){return this.__kb?this.__kb[dk]:null;
},getAllStyles:function(){return this.__kb||null;
},setAttribute:function(dl,dm,dn){if(!this.__kc){this.__kc={};
}
if(this.__kc[dl]==dm){return;
}
if(dm==null){delete this.__kc[dl];
}else{this.__kc[dl]=dm;
}if(this.__kj){if(dn){qx.bom.element.Attribute.set(this.__kj,dl,dm);
return this;
}if(!this.__kr){this.__kr={};
}this.__kr[dl]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},setAttributes:function(dp,dq){for(var dr in dp){this.setAttribute(dr,dp[dr],dq);
}return this;
},removeAttribute:function(ds,dt){this.setAttribute(ds,null,dt);
},getAttribute:function(du){return this.__kc?this.__kc[du]:null;
},_applyProperty:function(name,dv){},_setProperty:function(dw,dx,dy){if(!this.__kt){this.__kt={};
}
if(this.__kt[dw]==dx){return;
}
if(dx==null){delete this.__kt[dw];
}else{this.__kt[dw]=dx;
}if(this.__kj){if(dy){this._applyProperty(dw,dx);
return this;
}if(!this.__ks){this.__ks={};
}this.__ks[dw]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(m);
}return this;
},_removeProperty:function(dz,dA){this._setProperty(dz,null,dA);
},_getProperty:function(dB){var dC=this.__kt;

if(!dC){return null;
}var dD=dC[dB];
return dD==null?null:dD;
},addListener:function(dE,dF,self,dG){var dH;

if(this.$$disposed){return null;
}
if(this.__kj){return qx.event.Registration.addListener(this.__kj,dE,dF,self,dG);
}
if(!this.__ku){this.__ku={};
}
if(dG==null){dG=false;
}var dI=qx.event.Manager.getNextUniqueId();
var dJ=dE+(dG?b:w)+dI;
this.__ku[dJ]={type:dE,listener:dF,self:self,capture:dG,unique:dI};
return dJ;
},removeListener:function(dK,dL,self,dM){var dN;

if(this.$$disposed){return null;
}
if(this.__kj){qx.event.Registration.removeListener(this.__kj,dK,dL,self,dM);
}else{var dP=this.__ku;
var dO;

if(dM==null){dM=false;
}
for(var dQ in dP){dO=dP[dQ];
if(dO.listener===dL&&dO.self===self&&dO.capture===dM&&dO.type===dK){delete dP[dQ];
break;
}}}return this;
},removeListenerById:function(dR){if(this.$$disposed){return null;
}
if(this.__kj){qx.event.Registration.removeListenerById(this.__kj,dR);
}else{delete this.__ku[dR];
}return this;
},hasListener:function(dS,dT){if(this.$$disposed){return false;
}
if(this.__kj){return qx.event.Registration.hasListener(this.__kj,dS,dT);
}var dV=this.__ku;
var dU;

if(dT==null){dT=false;
}
for(var dW in dV){dU=dV[dW];
if(dU.capture===dT&&dU.type===dS){return true;
}}return false;
}},defer:function(dX){dX.__iE=new qx.util.DeferredCall(dX.flush,dX);
},destruct:function(){var dY=this.__kj;

if(dY){qx.event.Registration.getManager(dY).removeAllListeners(dY);
dY.$$element=j;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__kx;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(D);
this.__kc=this.__kb=this.__ku=this.__kt=this.__kr=this.__kq=this.__ks=this.__kj=this.__kx=this.__km=this.__kn=null;
}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(b){qx.html.Element.call(this);

if(b!=null){this.useElement(b);
}},members:{useElement:function(c){qx.html.Element.prototype.useElement.call(this,c);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="widgetbrowser.Application",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__cR||null;
},ready:function(){if(this.__cR){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__cR=new j;
var h=new Date;
this.__cR.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__cR.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__cS:function(e){var k=this.__cR;

if(k){k.close();
}},__cT:function(){var l=this.__cR;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__jV:[n,null,m,i,null,r,k,null,r],__jW:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__jX:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__jY:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__jX(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__jY(G)){G=q+G+q;
}var H=this.__jV;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__jW;
}var L=this.__jX(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__jY(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var j="Integer",i="interval",h="keep-align",g="disappear",f="left",e="best-fit",d="mouse",c="bottom-left",b="direct",a="Boolean",z="bottom-right",y="widget",x="qx.ui.core.MPlacement",w="left-top",v="offsetRight",u="shorthand",t="offsetLeft",s="top-left",r="appear",q="offsetBottom",o="top",p="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(x,{statics:{__kl:null,__lr:f,setVisibleElement:function(A){this.__kl=A;
},getVisibleElement:function(){return this.__kl;
},setMoveDirection:function(B){if(B===o||B===f){this.__lr=B;
}else{throw new Error("Invalid value for the parameter 'direction' "+"[qx.ui.core.MPlacement.setMoveDirection()], the value was '"+B+"' "+"but 'top' or 'left' are allowed.");
}},getMoveDirection:function(){return this.__lr;
}},properties:{position:{check:[s,p,c,z,w,l,k,n],init:c,themeable:true},placeMethod:{check:[y,d],init:d,themeable:true},domMove:{check:a,init:false},placementModeX:{check:[b,h,e],init:h,themeable:true},placementModeY:{check:[b,h,e],init:h,themeable:true},offsetLeft:{check:j,init:0,themeable:true},offsetTop:{check:j,init:0,themeable:true},offsetRight:{check:j,init:0,themeable:true},offsetBottom:{check:j,init:0,themeable:true},offset:{group:[m,v,q,t],mode:u,themeable:true}},members:{__ls:null,__lt:null,__lu:null,getLayoutLocation:function(C){var F,E,G,top;
E=C.getBounds();
G=E.left;
top=E.top;
var H=E;
C=C.getLayoutParent();

while(C&&!C.isRootWidget()){E=C.getBounds();
G+=E.left;
top+=E.top;
F=C.getInsets();
G+=F.left;
top+=F.top;
C=C.getLayoutParent();
}if(C.isRootWidget()){var D=C.getContainerLocation();

if(D){G+=D.left;
top+=D.top;
}}return {left:G,top:top,right:G+H.width,bottom:top+H.height};
},moveTo:function(I,top){var O=qx.ui.core.MPlacement.getVisibleElement();
if(O){var N=this.getBounds();
var M=O.getContentLocation();
if(N&&M){var L=top+N.height;
var K=I+N.width;
if((K>M.left&&I<M.right)&&(L>M.top&&top<M.bottom)){var J=qx.ui.core.MPlacement.getMoveDirection();

if(J===f){I=Math.max(M.left-N.width,0);
}else{top=Math.max(M.top-N.height,0);
}}}}
if(this.getDomMove()){this.setDomPosition(I,top);
}else{this.setLayoutProperties({left:I,top:top});
}},placeToWidget:function(P,Q){if(Q){this.__lv();
this.__ls=qx.lang.Function.bind(this.placeToWidget,this,P,false);
qx.event.Idle.getInstance().addListener(i,this.__ls);
this.__lu=function(){this.__lv();
};
this.addListener(g,this.__lu,this);
}var R=P.getContainerLocation()||this.getLayoutLocation(P);
this.__lx(R);
},__lv:function(){if(this.__ls){qx.event.Idle.getInstance().removeListener(i,this.__ls);
this.__ls=null;
}
if(this.__lu){this.removeListener(g,this.__lu,this);
this.__lu=null;
}},placeToMouse:function(event){var T=event.getDocumentLeft();
var top=event.getDocumentTop();
var S={left:T,top:top,right:T,bottom:top};
this.__lx(S);
},placeToElement:function(U,V){var location=qx.bom.element.Location.get(U);
var W={left:location.left,top:location.top,right:location.left+U.offsetWidth,bottom:location.top+U.offsetHeight};
if(V){this.__ls=qx.lang.Function.bind(this.placeToElement,this,U,false);
qx.event.Idle.getInstance().addListener(i,this.__ls);
this.addListener(g,function(){if(this.__ls){qx.event.Idle.getInstance().removeListener(i,this.__ls);
this.__ls=null;
}},this);
}this.__lx(W);
},placeToPoint:function(X){var Y={left:X.left,top:X.top,right:X.left,bottom:X.top};
this.__lx(Y);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__lw:function(ba){var bb=null;

if(this._computePlacementSize){var bb=this._computePlacementSize();
}else if(this.isVisible()){var bb=this.getBounds();
}
if(bb==null){this.addListenerOnce(r,function(){this.__lw(ba);
},this);
}else{ba.call(this,bb);
}},__lx:function(bc){this.__lw(function(bd){var be=qx.util.placement.Placement.compute(bd,this.getLayoutParent().getBounds(),bc,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(be.left,be.top);
});
}},destruct:function(){this.__lv();
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){qx.ui.container.Composite.call(this,f);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{show:function(){if(this.getLayoutParent()==null){qx.core.Init.getApplication().getRoot().add(this);
}qx.ui.container.Composite.prototype.show.call(this);
},_applyVisibility:function(g,h){qx.ui.container.Composite.prototype._applyVisibility.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var l="atom",k="Integer",j="String",i="_applyRich",h="qx.ui.tooltip.ToolTip",g="_applyIcon",f="tooltip",d="qx.ui.core.Widget",c="mouseover",b="Boolean",a="_applyLabel";
qx.Class.define(h,{extend:qx.ui.popup.Popup,construct:function(m,n){qx.ui.popup.Popup.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(l);
if(m!=null){this.setLabel(m);
}
if(n!=null){this.setIcon(n);
}this.addListener(c,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:f},showTimeout:{check:k,init:700,themeable:true},hideTimeout:{check:k,init:4000,themeable:true},label:{check:j,nullable:true,apply:a},icon:{check:j,nullable:true,apply:g,themeable:true},rich:{check:b,init:false,apply:i},opener:{check:d,nullable:true}},members:{_createChildControlImpl:function(o,p){var q;

switch(o){case l:q=new qx.ui.basic.Atom;
this._add(q);
break;
}return q||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,o);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(r,s){var t=this.getChildControl(l);
r==null?t.resetIcon():t.setIcon(r);
},_applyLabel:function(u,v){var w=this.getChildControl(l);
u==null?w.resetLabel():w.setLabel(u);
},_applyRich:function(x,y){var z=this.getChildControl(l);
z.setRich(x);
}}});
})();
(function(){var e="complete",d="loading",c="error",b="initialized",a="qx.io.part.Part";
qx.Bootstrap.define(a,{construct:function(name,f,g){this.__ml=name;
this._readyState=e;
this._packages=f;
this._loader=g;

for(var i=0;i<f.length;i++){if(f[i].getReadyState()!==e){this._readyState=b;
break;
}}},members:{_readyState:null,_loader:null,_packages:null,__ml:null,getReadyState:function(){return this._readyState;
},getName:function(){return this.__ml;
},getPackages:function(){return this._packages;
},preload:function(h,self){if(h){window.setTimeout(function(){h.call(self,this);
},0);
}},load:function(j,self){if(this._checkCompleteLoading(j,self)){return;
}this._readyState=d;

if(j){this._appendPartListener(j,self,this);
}var l=this;
var k=function(){l.load();
};

for(var i=0;i<this._packages.length;i++){var m=this._packages[i];

switch(m.getReadyState()){case b:this._loader.addPackageListener(m,k);
m.load(this._loader.notifyPackageResult,this._loader);
return;
case d:this._loader.addPackageListener(m,k);
return;
case e:break;
case c:this._markAsCompleted(c);
return;
default:throw new Error("Invalid case! "+m.getReadyState());
}}this._markAsCompleted(e);
},_appendPartListener:function(n,self,o){var p=this;
this._loader.addPartListener(this,function(){p._signalStartup();
n.call(self,o._readyState);
});
},_markAsCompleted:function(q){this._readyState=q;
this._loader.notifyPartResult(this);
},_signalStartup:function(){if(!qx.$$loader.applicationHandlerReady){qx.$$loader.signalStartup();
}},_checkCompleteLoading:function(r,self){var s=this._readyState;

if(s==e||s==c){if(r){var t=this;
setTimeout(function(){t._signalStartup();
r.call(self,s);
},0);
}return true;
}else if(s==d&&r){this._appendPartListener(r,self,this);
return true;
}}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__iU={};
this.__iV={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__iW:{},__iU:null,__iV:null,_applyTheme:function(j,k){this.__iV={};
this.__iU={};
},__iX:function(l,m,n){var s=m.appearances;
var v=s[l];

if(!v){var w=b;
var p=[];
var u=l.split(w);
var t;

while(!v&&u.length>0){p.unshift(u.pop());
var q=u.join(w);
v=s[q];

if(v){t=v.alias||v;

if(typeof t===h){var r=t+w+p.join(w);
return this.__iX(r,m,n);
}}}for(var i=0;i<p.length-1;i++){p.shift();
var q=p.join(w);
var o=this.__iX(q,m);

if(o){return o;
}}if(n!=null){return this.__iX(n,m);
}return null;
}else if(typeof v===h){return this.__iX(v,m,n);
}else if(v.include&&!v.style){return this.__iX(v.include,m,n);
}return l;
},styleFrom:function(x,y,z,A){if(!z){z=this.getTheme();
}var F=this.__iV;
var B=F[x];

if(!B){B=F[x]=this.__iX(x,z,A);
}var L=z.appearances[B];

if(!L){this.warn("Missing appearance: "+x);
return null;
}if(!L.style){return null;
}var M=B;

if(y){var N=L.$$bits;

if(!N){N=L.$$bits={};
L.$$length=0;
}var D=0;

for(var H in y){if(!y[H]){continue;
}
if(N[H]==null){N[H]=1<<L.$$length++;
}D+=N[H];
}if(D>0){M+=e+D;
}}var E=this.__iU;

if(E[M]!==undefined){return E[M];
}if(!y){y=this.__iW;
}var J;
if(L.include||L.base){var C;

if(L.include){C=this.styleFrom(L.include,y,z,A);
}var G=L.style(y,C);
J={};
if(L.base){var I=this.styleFrom(B,y,L.base,A);

if(L.include){for(var K in I){if(!C.hasOwnProperty(K)&&!G.hasOwnProperty(K)){J[K]=I[K];
}}}else{for(var K in I){if(!G.hasOwnProperty(K)){J[K]=I[K];
}}}}if(L.include){for(var K in C){if(!G.hasOwnProperty(K)){J[K]=C[K];
}}}for(var K in G){J[K]=G[K];
}}else{J=L.style(y);
}return E[M]=J||null;
}},destruct:function(){this.__iU=this.__iV=null;
}});
})();
(function(){var b="value",a="qx.html.Label";
qx.Class.define(a,{extend:qx.html.Element,members:{__hm:null,_applyProperty:function(name,c){qx.html.Element.prototype._applyProperty.call(this,name,c);

if(name==b){var d=this.getDomElement();
qx.bom.Label.setValue(d,c);
}},_createDomElement:function(){var f=this.__hm;
var e=qx.bom.Label.create(this._content,f);
return e;
},_copyData:function(g){return qx.html.Element.prototype._copyData.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__hm==h){return;
}this.__hm=h;
return this;
},setValue:function(j){this._setProperty(b,j);
return this;
},getValue:function(){return this._getProperty(b);
}}});
})();
(function(){var g="middle",f="qx.ui.layout.Util",e="left",d="center",c="top",b="bottom",a="right";
qx.Class.define(f,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(h,j,k){var n,r,m,s;
var o=j>k;
var t=Math.abs(j-k);
var u,p;
var q={};

for(r in h){n=h[r];
q[r]={potential:o?n.max-n.value:n.value-n.min,flex:o?n.flex:1/n.flex,offset:0};
}while(t!=0){s=Infinity;
m=0;

for(r in q){n=q[r];

if(n.potential>0){m+=n.flex;
s=Math.min(s,n.potential/n.flex);
}}if(m==0){break;
}s=Math.min(t,s*m)/m;
u=0;

for(r in q){n=q[r];

if(n.potential>0){p=Math.min(t,n.potential,Math.ceil(s*n.flex));
u+=p-s*n.flex;

if(u>=1){u-=1;
p-=1;
}n.potential-=p;

if(o){n.offset+=p;
}else{n.offset-=p;
}t-=p;
}}}return q;
},computeHorizontalAlignOffset:function(v,w,x,y,z){if(y==null){y=0;
}
if(z==null){z=0;
}var A=0;

switch(v){case e:A=y;
break;
case a:A=x-w-z;
break;
case d:A=Math.round((x-w)/2);
if(A<y){A=y;
}else if(A<z){A=Math.max(y,x-w-z);
}break;
}return A;
},computeVerticalAlignOffset:function(B,C,D,E,F){if(E==null){E=0;
}
if(F==null){F=0;
}var G=0;

switch(B){case c:G=E;
break;
case b:G=D-C-F;
break;
case g:G=Math.round((D-C)/2);
if(G<E){G=E;
}else if(G<F){G=Math.max(E,D-C-F);
}break;
}return G;
},collapseMargins:function(H){var I=0,K=0;

for(var i=0,l=arguments.length;i<l;i++){var J=arguments[i];

if(J<0){K=Math.min(K,J);
}else if(J>0){I=Math.max(I,J);
}}return I+K;
},computeHorizontalGaps:function(L,M,N){if(M==null){M=0;
}var O=0;

if(N){O+=L[0].getMarginLeft();

for(var i=1,l=L.length;i<l;i+=1){O+=this.collapseMargins(M,L[i-1].getMarginRight(),L[i].getMarginLeft());
}O+=L[l-1].getMarginRight();
}else{for(var i=1,l=L.length;i<l;i+=1){O+=L[i].getMarginLeft()+L[i].getMarginRight();
}O+=(M*(l-1));
}return O;
},computeVerticalGaps:function(P,Q,R){if(Q==null){Q=0;
}var S=0;

if(R){S+=P[0].getMarginTop();

for(var i=1,l=P.length;i<l;i+=1){S+=this.collapseMargins(Q,P[i-1].getMarginBottom(),P[i].getMarginTop());
}S+=P[l-1].getMarginBottom();
}else{for(var i=1,l=P.length;i<l;i+=1){S+=P[i].getMarginTop()+P[i].getMarginBottom();
}S+=(Q*(l-1));
}return S;
},computeHorizontalSeparatorGaps:function(T,U,V){var Y=qx.theme.manager.Decoration.getInstance().resolve(V);
var X=Y.getInsets();
var W=X.left+X.right;
var ba=0;

for(var i=0,l=T.length;i<l;i++){var bb=T[i];
ba+=bb.getMarginLeft()+bb.getMarginRight();
}ba+=(U+W+U)*(l-1);
return ba;
},computeVerticalSeparatorGaps:function(bc,bd,be){var bh=qx.theme.manager.Decoration.getInstance().resolve(be);
var bg=bh.getInsets();
var bf=bg.top+bg.bottom;
var bi=0;

for(var i=0,l=bc.length;i<l;i++){var bj=bc[i];
bi+=bj.getMarginTop()+bj.getMarginBottom();
}bi+=(bd+bf+bd)*(l-1);
return bi;
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
(function(){var v="single",u="Boolean",t="one",s="changeSelection",r="mouseup",q="mousedown",p="losecapture",o="multi",n="_applyQuickSelection",m="mouseover",d="_applySelectionMode",l="_applyDragSelection",h="qx.ui.core.MMultiSelectionHandling",c="__dy",b="removeItem",g="keypress",f="qx.event.type.Data",j="addItem",a="additive",k="mousemove";
qx.Mixin.define(h,{construct:function(){var x=this.SELECTION_MANAGER;
var w=this.__dy=new x(this);
this.addListener(q,w.handleMouseDown,w);
this.addListener(r,w.handleMouseUp,w);
this.addListener(m,w.handleMouseOver,w);
this.addListener(k,w.handleMouseMove,w);
this.addListener(p,w.handleLoseCapture,w);
this.addListener(g,w.handleKeyPress,w);
this.addListener(j,w.handleAddItem,w);
this.addListener(b,w.handleRemoveItem,w);
w.addListener(s,this._onSelectionChange,this);
},events:{"changeSelection":f},properties:{selectionMode:{check:[v,o,a,t],init:v,apply:d},dragSelection:{check:u,init:false,apply:l},quickSelection:{check:u,init:false,apply:n}},members:{__dy:null,selectAll:function(){this.__dy.selectAll();
},isSelected:function(y){if(!qx.ui.core.Widget.contains(this,y)){throw new Error("Could not test if "+y+" is selected, because it is not a child element!");
}return this.__dy.isItemSelected(y);
},addToSelection:function(z){if(!qx.ui.core.Widget.contains(this,z)){throw new Error("Could not add + "+z+" to selection, because it is not a child element!");
}this.__dy.addItem(z);
},removeFromSelection:function(A){if(!qx.ui.core.Widget.contains(this,A)){throw new Error("Could not remove "+A+" from selection, because it is not a child element!");
}this.__dy.removeItem(A);
},selectRange:function(B,C){this.__dy.selectItemRange(B,C);
},resetSelection:function(){this.__dy.clearSelection();
},setSelection:function(D){for(var i=0;i<D.length;i++){if(!qx.ui.core.Widget.contains(this,D[i])){throw new Error("Could not select "+D[i]+", because it is not a child element!");
}}
if(D.length===0){this.resetSelection();
}else{var E=this.getSelection();

if(!qx.lang.Array.equals(E,D)){this.__dy.replaceSelection(D);
}}},getSelection:function(){return this.__dy.getSelection();
},getSortedSelection:function(){return this.__dy.getSortedSelection();
},isSelectionEmpty:function(){return this.__dy.isSelectionEmpty();
},getSelectionContext:function(){return this.__dy.getSelectionContext();
},_getManager:function(){return this.__dy;
},getSelectables:function(F){return this.__dy.getSelectables(F);
},invertSelection:function(){this.__dy.invertSelection();
},_getLeadItem:function(){var G=this.__dy.getMode();

if(G===v||G===t){return this.__dy.getSelectedItem();
}else{return this.__dy.getLeadItem();
}},_applySelectionMode:function(H,I){this.__dy.setMode(H);
},_applyDragSelection:function(J,K){this.__dy.setDrag(J);
},_applyQuickSelection:function(L,M){this.__dy.setQuick(L);
},_onSelectionChange:function(e){this.fireDataEvent(s,e.getData());
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var s="undefined",r="function",q="<a></a>",p="xml.implementation",o="xml.attributens",n="xml.selectnodes",m="xml.getqualifieditem",l="SelectionLanguage",k="xml.getelementsbytagnamens",j="qx.bom.client.Xml",d="xml.domproperties",i="xml.selectsinglenode",g="1.0",c="xml.createnode",b="xml.domparser",f="getProperty",e="XML",h="string",a="xml.createelementns";
qx.Bootstrap.define(j,{statics:{getImplementation:function(){return document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature(e,g);
},getDomParser:function(){return typeof window.DOMParser!==s;
},getSelectSingleNode:function(){return typeof qx.xml.Document.create().selectSingleNode!==s;
},getSelectNodes:function(){return typeof qx.xml.Document.create().selectNodes!==s;
},getElementsByTagNameNS:function(){return typeof qx.xml.Document.create().getElementsByTagNameNS!==s;
},getDomProperties:function(){var t=qx.xml.Document.create();
return (f in t&&typeof t.getProperty(l)===h);
},getAttributeNS:function(){var u=qx.xml.Document.fromString(q).documentElement;
return typeof u.getAttributeNS===r&&typeof u.setAttributeNS===r;
},getCreateElementNS:function(){return typeof qx.xml.Document.create().createElementNS===r;
},getCreateNode:function(){return typeof qx.xml.Document.create().createNode!==s;
},getQualifiedItem:function(){var v=qx.xml.Document.fromString(q).documentElement;
return typeof v.attributes.getQualifiedItem!==s;
}},defer:function(w){qx.core.Environment.add(p,w.getImplementation);
qx.core.Environment.add(b,w.getDomParser);
qx.core.Environment.add(i,w.getSelectSingleNode);
qx.core.Environment.add(n,w.getSelectNodes);
qx.core.Environment.add(k,w.getElementsByTagNameNS);
qx.core.Environment.add(d,w.getDomProperties);
qx.core.Environment.add(o,w.getAttributeNS);
qx.core.Environment.add(a,w.getCreateElementNS);
qx.core.Environment.add(c,w.getCreateNode);
qx.core.Environment.add(m,w.getQualifiedItem);
}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
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
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cO={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cO:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cO[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cO){return;
}var h=g.classname;
var j=this.__cO[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cO[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cO;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cO;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cV=false;
this.__cW=false;
this.__cX=false;
this.__cY=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__da();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cX:null,__cV:null,__cW:null,__cY:null,__da:function(){if(!this.__cX&&this.__cV&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cX=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cX=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cX;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cV=true;
this.__da();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cV=true;
this.__da();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cY){this.__cY=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__cS:function(e){var f=this.getApplication();

if(f){e.setReturnValue(f.close());
}},__cT:function(){var g=this.getApplication();

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__cT,h);
qx.event.Registration.addListener(window,b,h.__cS,h);
}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__dB:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__dB;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__dB=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__dB=null;
}});
})();
(function(){var k="css.overflowxy",j="hidden",i="-moz-scrollbars-none",h="",g="engine.name",f="gecko",e="overflow",d="overflowY",b="engine.version",a="none",B="scroll",A="borderLeftStyle",z="borderRightStyle",y="div",x="borderRightWidth",w="overflow-y",v="borderLeftWidth",u="-moz-scrollbars-vertical",r=":",q="100px",o="overflow:",p="qx.bom.element.Overflow",m="overflow-x",n="overflowX",l=";";
qx.Class.define(p,{statics:{DEFAULT_SCROLLBAR_WIDTH:14,__hT:null,getScrollbarWidth:function(){if(this.__hT!==null){return this.__hT;
}var C=qx.bom.element.Style;
var E=function(I,J){return parseInt(C.get(I,J),10)||0;
};
var F=function(K){return (C.get(K,z)==a?0:E(K,x));
};
var D=function(L){return (C.get(L,A)==a?0:E(L,v));
};
var H=qx.core.Environment.select(g,{"mshtml":function(M){if(C.get(M,d)==j||M.clientWidth==0){return F(M);
}return Math.max(0,M.offsetWidth-M.clientLeft-M.clientWidth);
},"default":function(N){if(N.clientWidth==0){var O=C.get(N,e);
var P=(O==B||O==u?16:0);
return Math.max(0,F(N)+P);
}return Math.max(0,(N.offsetWidth-N.clientWidth-D(N)));
}});
var G=function(Q){return H(Q)-F(Q);
};
var t=document.createElement(y);
var s=t.style;
s.height=s.width=q;
s.overflow=B;
document.body.appendChild(t);
var c=G(t);
this.__hT=c;
document.body.removeChild(t);
return this.__hT;
},_compile:function(R,S){if(!qx.core.Environment.get(k)){R=o;

if(qx.core.Environment.get(g)===f&&S==j){S=i;
}}return R+r+S+l;
},compileX:function(T){return this._compile(m,T);
},compileY:function(U){return this._compile(w,U);
},getX:function(V,W){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(V,n,W,false);
}var X=qx.bom.element.Style.get(V,e,W,false);

if(X===i){X=j;
}return X;
},setX:function(Y,ba){if(qx.core.Environment.get(k)){Y.style.overflowX=ba;
}else{if(ba===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){ba=i;
}Y.style.overflow=ba;
}},resetX:function(bb){if(qx.core.Environment.get(k)){bb.style.overflowX=h;
}else{bb.style.overflow=h;
}},getY:function(bc,bd){if(qx.core.Environment.get(k)){return qx.bom.element.Style.get(bc,d,bd,false);
}var be=qx.bom.element.Style.get(bc,e,bd,false);

if(be===i){be=j;
}return be;
},setY:function(bf,bg){if(qx.core.Environment.get(k)){bf.style.overflowY=bg;
}else{if(bg===j&&qx.core.Environment.get(g)===f&&parseFloat(qx.core.Environment.get(b))<1.8){bg=i;
}bf.style.overflow=bg;
}},resetY:function(bh){if(qx.core.Environment.get(k)){bh.style.overflowY=h;
}else{bh.style.overflow=h;
}}}});
})();
(function(){var l="",k="engine.name",j=";",i="opacity:",h="opacity",g="filter",f="MozOpacity",e=");",d=")",c="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",b="alpha(opacity=";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(k,{"mshtml":function(m){if(m>=1){m=1;
}
if(m<0.00001){m=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return i+m+j;
}else{return c+(m*100)+e;
}},"gecko":function(n){if(n>=1){n=0.999999;
}return i+n+j;
},"default":function(o){if(o>=1){return l;
}return i+o+j;
}}),set:qx.core.Environment.select(k,{"mshtml":function(p,q){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(q>=1){q=l;
}p.style.opacity=q;
}else{var r=qx.bom.element.Style.get(p,g,qx.bom.element.Style.COMPUTED_MODE,false);

if(q>=1){q=1;
}
if(q<0.00001){q=0;
}if(!p.currentStyle||!p.currentStyle.hasLayout){p.style.zoom=1;
}p.style.filter=r.replace(/alpha\([^\)]*\)/gi,l)+b+q*100+d;
}},"gecko":function(s,t){if(t>=1){t=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){s.style.MozOpacity=t;
}else{s.style.opacity=t;
}},"default":function(u,v){if(v>=1){v=l;
}u.style.opacity=v;
}}),reset:qx.core.Environment.select(k,{"mshtml":function(w){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){w.style.opacity=l;
}else{var x=qx.bom.element.Style.get(w,g,qx.bom.element.Style.COMPUTED_MODE,false);
w.style.filter=x.replace(/alpha\([^\)]*\)/gi,l);
}},"gecko":function(y){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){y.style.MozOpacity=l;
}else{y.style.opacity=l;
}},"default":function(z){z.style.opacity=l;
}}),get:qx.core.Environment.select(k,{"mshtml":function(A,B){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var C=qx.bom.element.Style.get(A,h,B,false);

if(C!=null){return parseFloat(C);
}return 1.0;
}else{var D=qx.bom.element.Style.get(A,g,B,false);

if(D){var C=D.match(/alpha\(opacity=(.*)\)/);

if(C&&C[1]){return parseFloat(C[1])/100;
}}return 1.0;
}},"gecko":function(E,F){var G=qx.bom.element.Style.get(E,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?f:h,F,false);

if(G==0.999999){G=1.0;
}
if(G!=null){return parseFloat(G);
}return 1.0;
},"default":function(H,I){var J=qx.bom.element.Style.get(H,h,I,false);

if(J!=null){return parseFloat(J);
}return 1.0;
}})},defer:function(K){K.SUPPORT_CSS3_OPACITY=qx.core.Environment.get("css.opacity");
}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var d="-",c="qx.bom.Style",b="string",a="";
qx.Bootstrap.define(c,{statics:{VENDOR_PREFIXES:["Webkit","Moz","O","ms","Khtml"],getPropertyName:function(e){var f=document.documentElement.style;

for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++){var g=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(e);

if(f[g]!==undefined){return g;
}}if(f[e]!==undefined){return e;
}return null;
},getAppliedStyle:function(h,j,k,m){var n=(m!==false)?[null].concat(this.VENDOR_PREFIXES):[null];

for(var i=0,l=n.length;i<l;i++){var o=n[i]?d+n[i].toLowerCase()+d+k:k;
try{h.style[j]=o;

if(typeof h.style[j]==b&&h.style[j]!==a){return o;
}}catch(p){}}return null;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__bd:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__bd[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__bd[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var j="",i="engine.name",h="float",g="browser.documentmode",f="mshtml",e="style",d="css.float",c="px",b="css.appearance",a="pixelRight",w="css.userselect",v="css.boxsizing",u="css.textoverflow",t="pixelHeight",s=":",r="pixelTop",q="css.borderimage",p="pixelLeft",o="css.usermodify",n="qx.bom.element.Style",l="pixelBottom",m="pixelWidth",k=";";
qx.Class.define(n,{statics:{__iN:function(){var y={"appearance":qx.core.Environment.get(b),"userSelect":qx.core.Environment.get(w),"textOverflow":qx.core.Environment.get(u),"borderImage":qx.core.Environment.get(q),"float":qx.core.Environment.get(d),"userModify":qx.core.Environment.get(o),"boxSizing":qx.core.Environment.get(v)};
this.__iO={};

for(var x in qx.lang.Object.clone(y)){if(!y[x]){delete y[x];
}else{this.__iO[x]=x==h?h:qx.lang.String.hyphenate(y[x]);
}}this.__iP=y;
},__iQ:{width:m,height:t,left:p,right:a,top:r,bottom:l},__iR:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(z){var B=[];
var D=this.__iR;
var C=this.__iO;
var name,A;

for(name in z){A=z[name];

if(A==null){continue;
}name=C[name]||name;
if(D[name]){B.push(D[name].compile(A));
}else{B.push(qx.lang.String.hyphenate(name),s,A,k);
}}return B.join(j);
},setCss:function(E,F){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){E.style.cssText=F;
}else{E.setAttribute(e,F);
}},getCss:function(G){if(qx.core.Environment.get(i)===f&&parseInt(qx.core.Environment.get(g),10)<8){return G.style.cssText.toLowerCase();
}else{return G.getAttribute(e);
}},isPropertySupported:function(H){return (this.__iR[H]||this.__iP[H]||H in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(I,name,J,K){name=this.__iP[name]||name;
if(K!==false&&this.__iR[name]){return this.__iR[name].set(I,J);
}else{I.style[name]=J!==null?J:j;
}},setStyles:function(L,M,N){var Q=this.__iP;
var S=this.__iR;
var O=L.style;

for(var R in M){var P=M[R];
var name=Q[R]||R;

if(P===undefined){if(N!==false&&S[name]){S[name].reset(L);
}else{O[name]=j;
}}else{if(N!==false&&S[name]){S[name].set(L,P);
}else{O[name]=P!==null?P:j;
}}}},reset:function(T,name,U){name=this.__iP[name]||name;
if(U!==false&&this.__iR[name]){return this.__iR[name].reset(T);
}else{T.style[name]=j;
}},get:qx.core.Environment.select(i,{"mshtml":function(V,name,W,X){name=this.__iP[name]||name;
if(X!==false&&this.__iR[name]){return this.__iR[name].get(V,W);
}if(!V.currentStyle){return V.style[name]||j;
}switch(W){case this.LOCAL_MODE:return V.style[name]||j;
case this.CASCADED_MODE:return V.currentStyle[name]||j;
default:var bc=V.currentStyle[name]||j;
if(/^-?[\.\d]+(px)?$/i.test(bc)){return bc;
}var bb=this.__iQ[name];

if(bb){var Y=V.style[name];
V.style[name]=bc||0;
var ba=V.style[bb]+c;
V.style[name]=Y;
return ba;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bc)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bc;
}},"default":function(bd,name,be,bf){name=this.__iP[name]||name;
if(bf!==false&&this.__iR[name]){return this.__iR[name].get(bd,be);
}switch(be){case this.LOCAL_MODE:return bd.style[name]||j;
case this.CASCADED_MODE:if(bd.currentStyle){return bd.currentStyle[name]||j;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bg=qx.dom.Node.getDocument(bd);
var bh=bg.defaultView.getComputedStyle(bd,null);
return bh?bh[name]:j;
}}})},defer:function(bi){bi.__iN();
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__nx:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nx;
},getMarkup:function(){if(this.__nx){return this.__nx;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__nx=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__nx;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__nx=null;
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",be="10.0",bd="10.4",bc="rim_tabletos",bb="Darwin",ba="os.version",Y="2003",X=")",W="iPhone",V="android",U="unix",q="ce",r="7",o="SymbianOS",p="os.name",m="|",n="MacPPC",k="iPod",l="\.",u="Win64",v="linux",D="me",B="Macintosh",K="Android",F="Windows",Q="ios",O="vista",x="blackberry",T="(",S="win",R="Linux",w="BSD",z="Mac OS X",A="iPad",C="X11",E="xp",G="symbian",L="qx.bom.client.OperatingSystem",P="g",s="Win32",t="osx",y="webOS",J="RIM Tablet OS",I="BlackBerry",H="nt4",N="MacIntel",M="webos";
qx.Bootstrap.define(L,{statics:{getName:function(){if(!navigator){return j;
}var bf=navigator.platform||j;
var bg=navigator.userAgent||j;

if(bf.indexOf(F)!=-1||bf.indexOf(s)!=-1||bf.indexOf(u)!=-1){return S;
}else if(bf.indexOf(B)!=-1||bf.indexOf(n)!=-1||bf.indexOf(N)!=-1||bf.indexOf(z)!=-1){return t;
}else if(bg.indexOf(J)!=-1){return bc;
}else if(bg.indexOf(y)!=-1){return M;
}else if(bf.indexOf(k)!=-1||bf.indexOf(W)!=-1||bf.indexOf(A)!=-1){return Q;
}else if(bf.indexOf(R)!=-1){return v;
}else if(bf.indexOf(C)!=-1||bf.indexOf(w)!=-1||bf.indexOf(bb)!=-1){return U;
}else if(bf.indexOf(K)!=-1){return V;
}else if(bf.indexOf(o)!=-1){return G;
}else if(bf.indexOf(I)!=-1){return x;
}return j;
},__cU:{"Windows NT 6.1":r,"Windows NT 6.0":O,"Windows NT 5.2":Y,"Windows NT 5.1":E,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":H,"Win 9x 4.90":D,"Windows CE":q,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":bd,"Mac OS X 10.4":bd,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":be,"Mac OS X 10.0":be},getVersion:function(){var bj=[];

for(var bi in qx.bom.client.OperatingSystem.__cU){bj.push(bi);
}var bk=new RegExp(T+bj.join(m).replace(/\./g,l)+X,P);
var bh=bk.exec(navigator.userAgent);

if(bh&&bh[1]){return qx.bom.client.OperatingSystem.__cU[bh[1]];
}return j;
}},defer:function(bl){qx.core.Environment.add(p,bl.getName);
qx.core.Environment.add(ba,bl.getVersion);
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__dy=b;
this.__cy=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dy:null,__cy:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__dy=this.__cy=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dy=u;
this.__cy=u.getWindow();
this.__dB=this.__cy.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dC:null,__dD:null,__dE:null,__dF:null,__dG:null,__dy:null,__cy:null,__dB:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__dH:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,b,qx.event.type.Data,[E||D.type]);
},__dI:function(){var H=[this.__cy,this.__dB,this.__dB.body];
var I=this.__cy;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__dC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,q,this.__dC);
Event.addNativeListener(this.__dB,t,this.__dC);
Event.addNativeListener(this.__dB,r,this.__dC);
Event.addNativeListener(this.__dB,n,this.__dC);
Event.addNativeListener(this.__dB,p,this.__dC);
},_initMoveObserver:function(){this.__dD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,j,this.__dD);
Event.addNativeListener(this.__dB,l,this.__dD);
Event.addNativeListener(this.__dB,k,this.__dD);
},_initWheelObserver:function(){this.__dE=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__dI();
qx.bom.Event.addNativeListener(J.target,J.type,this.__dE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,q,this.__dC);
Event.removeNativeListener(this.__dB,t,this.__dC);
Event.removeNativeListener(this.__dB,r,this.__dC);
Event.removeNativeListener(this.__dB,n,this.__dC);
Event.removeNativeListener(this.__dB,p,this.__dC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,j,this.__dD);
Event.removeNativeListener(this.__dB,l,this.__dD);
Event.removeNativeListener(this.__dB,k,this.__dD);
},_stopWheelObserver:function(){var K=this.__dI();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__dE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__dH(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__dJ){this.__dJ(M,N,O);
}
if(this.__dL){this.__dL(M,N,O);
}this.__dH(M,N,O);

if(this.__dK){this.__dK(M,N,O);
}
if(this.__dM){this.__dM(M,N,O);
}this.__dF=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__dH(P,o);
}),__dJ:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__dH(Q,t,S);
}}},"default":null}),__dK:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__dH(T,p,V);
}},"default":null}),__dL:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__dF==r){this.__dH(W,q,Y);
}else if(X==n){this.__dH(W,r,Y);
}},"default":null}),__dM:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__dG=bc;
break;
case t:if(bc!==this.__dG){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__dG);
this.__dH(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__dy=this.__cy=this.__dB=this.__dG=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="1",c="win",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__dy=by;
this.__cy=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__dB=this.__cy;
}else{this.__dB=this.__cy.document.documentElement;
}this.__dV={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__dW:null,__dy:null,__cy:null,__dB:null,__dV:null,__dX:null,__dY:null,__ea:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__eb();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__dy.dispatchEvent(bL,event);
}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__eb();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__dy.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cy){qx.event.Registration.fireEvent(this.__cy,s,qx.event.type.Data,[bN]);
}},__eb:function(){var bR=this.__dy.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__dy.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__dW=qx.lang.Function.listener(this.__ec,this);
this.__ea=qx.lang.Function.listener(this.__ee,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,i,this.__dW);
Event.addNativeListener(this.__dB,m,this.__dW);
Event.addNativeListener(this.__dB,k,this.__ea);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,i,this.__dW);
Event.removeNativeListener(this.__dB,m,this.__dW);
Event.removeNativeListener(this.__dB,k,this.__ea);

for(var bU in (this.__dY||{})){var bT=this.__dY[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__dY);
},__ec:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__dV[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__dV[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==c){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__dV[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__dV[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__ed(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__dV[ci]=ch;
}},"opera":function(cj){this.__dX=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__ed:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__dY){this.__dY={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__dY[co]){return;
}var self=this;
this.__dY[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__ee(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__dY[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__ee:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__dX){this._idealKeyHandler(0,this.__dX,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:b.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__dX=this.__dy=this.__cy=this.__dB=this.__dV=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var l="mshtml",k="event.pointer",j="onhashchange",i="event.help",h="event.touch",g="opera",f="event.hashchange",e="onhelp",d="pointerEvents",c="documentMode",a="qx.bom.client.Event",b="ontouchstart";
qx.Bootstrap.define(a,{statics:{getTouch:function(){return (b in window);
},getPointer:function(){if(d in document.documentElement.style){var m=qx.bom.client.Engine.getName();
return m!=g&&m!=l;
}return false;
},getHelp:function(){return (e in document);
},getHashChange:function(){var n=qx.bom.client.Engine.getName();
var o=j in window;
return (n!==l&&o)||(n===l&&c in document&&document.documentMode>=8&&o);
}},defer:function(p){qx.core.Environment.add(h,p.getTouch);
qx.core.Environment.add(k,p.getPointer);
qx.core.Environment.add(i,p.getHelp);
qx.core.Environment.add(f,p.getHashChange);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__dy=f;
this.__cy=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dy:null,__cy:null,__eG:null,__eH:null,__eI:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__eI=qx.lang.Function.listener(this._onNative,this);
this.__eG=qx.bom.Event.supportsEvent(this.__cy,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cy,this.__eG,this.__eI);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cy,this.__eG,this.__eI);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__eH!=p){this.__eH=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cy,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__dy=this.__cy=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var t="qx.mobile.emulatetouch",s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",d="mshtml",j="qx.event.handler.Touch",h="useraction",c="swipe",b="qx.mobile.nativescroll",g="webkit",f="tap",i="x",a="y";
qx.Class.define(j,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__dy=u;
this.__cy=u.getWindow();
this.__dB=this.__cy.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__eL:null,__eM:null,__dy:null,__cy:null,__dB:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:false,__eS:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},__eT:function(D){var E=qx.bom.Event.getTarget(D);
if((qx.core.Environment.get(n)==g)){if(E&&E.nodeType==3){E=E.parentNode;
}}return E;
},__dH:function(F,G,H,I){if(!H){H=this.__eT(F);
}var G=G||F.type;

if(H&&H.nodeType){qx.event.Registration.fireEvent(H,G,I||qx.event.type.Touch,[F,H,null,true,true]);
}qx.event.Registration.fireEvent(this.__cy,h,qx.event.type.Data,[G]);
},__eU:function(J,K,L){if(!L){L=this.__eT(J);
}var K=K||J.type;

if(K==r){this.__eV(J,L);
}else if(K==q){this.__eW(J,L);
}else if(K==s){this.__eX(J,L);
}},__eV:function(M,N){var O=M.changedTouches[0];
this.__eN=O.screenX;
this.__eO=O.screenY;
this.__eP=new Date().getTime();
this.__eQ=M.changedTouches.length===1;
},__eW:function(P,Q){if(this.__eQ&&P.changedTouches.length>1){this.__eQ=false;
}},__eX:function(R,S){if(this.__eQ){var T=R.changedTouches[0];
var V={x:T.screenX-this.__eN,y:T.screenY-this.__eO};
var W=qx.event.handler.Touch;

if(this.__eS==S&&Math.abs(V.x)<=W.TAP_MAX_DISTANCE&&Math.abs(V.y)<=W.TAP_MAX_DISTANCE){this.__dH(R,f,S,qx.event.type.Tap);
}else{var U=this.__eY(R,S,V);

if(U){R.swipe=U;
this.__dH(R,c,S,qx.event.type.Swipe);
}}}},__eY:function(X,Y,ba){var be=qx.event.handler.Touch;
var bf=new Date().getTime()-this.__eP;
var bh=(Math.abs(ba.x)>=Math.abs(ba.y))?i:a;
var bb=ba[bh];
var bc=be.SWIPE_DIRECTION[bh][bb<0?0:1];
var bg=(bf!==0)?bb/bf:0;
var bd=null;

if(Math.abs(bg)>=be.SWIPE_MIN_VELOCITY&&Math.abs(bb)>=be.SWIPE_MIN_DISTANCE){bd={startTime:this.__eP,duration:bf,axis:bh,direction:bc,distance:bb,velocity:bg};
}return bd;
},__fa:qx.core.Environment.select(t,{"true":function(bi){var bj=bi.type;
var bl=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bl[bj]){bj=bl[bj];
if(bj==r&&this.__fb(bi)){this.__eR=true;
}else if(bj==s){this.__eR=false;
}var bm=this.__fc(bi);
var bk=(bj==s?[]:[bm]);
bi.touches=bk;
bi.targetTouches=bk;
bi.changedTouches=[bm];
}return bj;
},"default":qx.lang.Function.empty}),__fb:qx.core.Environment.select(t,{"true":function(bn){if((qx.core.Environment.get(n)==d)){var bo=1;
}else{var bo=0;
}return bn.button==bo;
},"default":qx.lang.Function.empty}),__fc:qx.core.Environment.select(t,{"true":function(bp){var bq=this.__eT(bp);
return {clientX:bp.clientX,clientY:bp.clientY,screenX:bp.screenX,screenY:bp.screenY,pageX:bp.pageX,pageY:bp.pageY,identifier:1,target:bq};
},"default":qx.lang.Function.empty}),_initTouchObserver:function(){this.__eL=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,r,this.__eL);
Event.addNativeListener(this.__dB,q,this.__eL);
Event.addNativeListener(this.__dB,s,this.__eL);
Event.addNativeListener(this.__dB,m,this.__eL);
},_initMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){this.__eM=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__dB,k,this.__eM);
Event.addNativeListener(this.__dB,o,this.__eM);
Event.addNativeListener(this.__dB,l,this.__eM);
}},"default":qx.lang.Function.empty}),_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,r,this.__eL);
Event.removeNativeListener(this.__dB,q,this.__eL);
Event.removeNativeListener(this.__dB,s,this.__eL);
Event.removeNativeListener(this.__dB,m,this.__eL);
},_stopMouseObserver:qx.core.Environment.select(t,{"true":function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__dB,k,this.__eM);
Event.removeNativeListener(this.__dB,o,this.__eM);
Event.removeNativeListener(this.__dB,l,this.__eM);
}},"default":qx.lang.Function.empty}),_onTouchEvent:qx.event.GlobalError.observeMethod(function(br){this._commonTouchEventHandler(br);
}),_onMouseEvent:qx.core.Environment.select(t,{"true":qx.event.GlobalError.observeMethod(function(bs){if(!qx.core.Environment.get(p)){if(bs.type==o&&!this.__eR){return;
}var bt=this.__fa(bs);
this._commonTouchEventHandler(bs,bt);
}}),"default":qx.lang.Function.empty}),_commonTouchEventHandler:function(bu,bv){var bv=bv||bu.type;

if(bv==r){this.__eS=this.__eT(bu);
}this.__dH(bu,bv);
this.__eU(bu,bv);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__dy=this.__cy=this.__dB=this.__eS=null;
},defer:function(bw){qx.event.Registration.addHandler(bw);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bw);
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",D="Alt",C="keyup",B="mouseup",A="keypress",z="dragend",y="on",x="mousedown",w="qxDraggable",v="Escape",u="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover",t="left";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(E){qx.core.Object.call(this);
this.__dy=E;
this.__dB=E.getWindow().document.documentElement;
this.__dy.addListener(this.__dB,x,this._onMouseDown,this);
this.__fp();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__dy:null,__dB:null,__ff:null,__fg:null,__fh:null,__fi:null,__fj:null,__c:null,__fk:null,__fl:null,__fm:false,__fn:0,__fo:0,canHandleEvent:function(F,G){},registerEvent:function(H,I,J){},unregisterEvent:function(K,L,M){},addType:function(N){this.__fh[N]=true;
},addAction:function(O){this.__fi[O]=true;
},supportsType:function(P){return !!this.__fh[P];
},supportsAction:function(Q){return !!this.__fi[Q];
},getData:function(R){if(!this.__fv||!this.__ff){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__fh[R]){throw new Error("Unsupported data type: "+R+"!");
}
if(!this.__c[R]){this.__fk=R;
this.__dH(q,this.__fg,this.__ff,false);
}
if(!this.__c[R]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__c[R]||null;
},getCurrentAction:function(){return this.__fl;
},addData:function(S,T){this.__c[S]=T;
},getCurrentType:function(){return this.__fk;
},isSessionActive:function(){return this.__fm;
},__fp:function(){this.__fh={};
this.__fi={};
this.__fj={};
this.__c={};
},__fq:function(){if(this.__fg==null){return;
}var W=this.__fi;
var U=this.__fj;
var V=null;

if(this.__fv){if(U.Shift&&U.Control&&W.alias){V=k;
}else if(U.Shift&&U.Alt&&W.copy){V=j;
}else if(U.Shift&&W.move){V=b;
}else if(U.Alt&&W.alias){V=k;
}else if(U.Control&&W.copy){V=j;
}else if(W.move){V=b;
}else if(W.copy){V=j;
}else if(W.alias){V=k;
}}
if(V!=this.__fl){this.__fl=V;
this.__dH(o,this.__fg,this.__ff,false);
}},__dH:function(X,Y,ba,bb,bc){var be=qx.event.Registration;
var bd=be.createEvent(X,qx.event.type.Drag,[bb,bc]);

if(Y!==ba){bd.setRelatedTarget(ba);
}return be.dispatchEvent(Y,bd);
},__fr:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(w)==y){return bf;
}bf=bf.parentNode;
}return null;
},__fs:function(bg){while(bg&&bg.nodeType==1){if(bg.getAttribute(s)==y){return bg;
}bg=bg.parentNode;
}return null;
},__ft:function(){this.__fg=null;
this.__dy.removeListener(this.__dB,c,this._onMouseMove,this,true);
this.__dy.removeListener(this.__dB,B,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fp();
},__fu:function(){if(this.__fm){this.__dy.removeListener(this.__dB,a,this._onMouseOver,this,true);
this.__dy.removeListener(this.__dB,h,this._onMouseOut,this,true);
this.__dy.removeListener(this.__dB,g,this._onKeyDown,this,true);
this.__dy.removeListener(this.__dB,C,this._onKeyUp,this,true);
this.__dy.removeListener(this.__dB,A,this._onKeyPress,this,true);
this.__dH(z,this.__fg,this.__ff,false);
this.__fm=false;
}this.__fv=false;
this.__ff=null;
this.__ft();
},__fv:false,_onWindowBlur:function(e){this.__fu();
},_onKeyDown:function(e){var bh=e.getKeyIdentifier();

switch(bh){case D:case f:case d:if(!this.__fj[bh]){this.__fj[bh]=true;
this.__fq();
}}},_onKeyUp:function(e){var bi=e.getKeyIdentifier();

switch(bi){case D:case f:case d:if(this.__fj[bi]){this.__fj[bi]=false;
this.__fq();
}}},_onKeyPress:function(e){var bj=e.getKeyIdentifier();

switch(bj){case v:this.__fu();
}},_onMouseDown:function(e){if(this.__fm||e.getButton()!==t){return;
}var bk=this.__fr(e.getTarget());

if(bk){this.__fn=e.getDocumentLeft();
this.__fo=e.getDocumentTop();
this.__fg=bk;
this.__dy.addListener(this.__dB,c,this._onMouseMove,this,true);
this.__dy.addListener(this.__dB,B,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fv){this.__dH(r,this.__ff,this.__fg,false,e);
}if(this.__fm){e.stopPropagation();
}this.__fu();
},_onMouseMove:function(e){if(this.__fm){if(!this.__dH(u,this.__fg,this.__ff,true,e)){this.__fu();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fn)>3||Math.abs(e.getDocumentTop()-this.__fo)>3){if(this.__dH(n,this.__fg,this.__ff,true,e)){this.__fm=true;
this.__dy.addListener(this.__dB,a,this._onMouseOver,this,true);
this.__dy.addListener(this.__dB,h,this._onMouseOut,this,true);
this.__dy.addListener(this.__dB,g,this._onKeyDown,this,true);
this.__dy.addListener(this.__dB,C,this._onKeyUp,this,true);
this.__dy.addListener(this.__dB,A,this._onKeyPress,this,true);
var bl=this.__fj;
bl.Control=e.isCtrlPressed();
bl.Shift=e.isShiftPressed();
bl.Alt=e.isAltPressed();
this.__fq();
}else{this.__dH(z,this.__fg,this.__ff,false);
this.__ft();
}}}},_onMouseOver:function(e){var bm=e.getTarget();
var bn=this.__fs(bm);

if(bn&&bn!=this.__ff){this.__fv=this.__dH(m,bn,this.__fg,true,e);
this.__ff=bn;
this.__fq();
}},_onMouseOut:function(e){var bp=this.__fs(e.getTarget());
var bo=this.__fs(e.getRelatedTarget());

if(bp&&bp!==bo&&bp==this.__ff){this.__dH(l,this.__ff,bo,false,e);
this.__ff=null;
this.__fv=false;
qx.event.Timer.once(this.__fq,this,0);
}}},destruct:function(){this.__fg=this.__ff=this.__dy=this.__dB=this.__fh=this.__fi=this.__fj=this.__c=null;
},defer:function(bq){qx.event.Registration.addHandler(bq);
}});
})();
(function(){var c="offline",b="online",a="qx.event.handler.Offline";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__dy=d;
this.__cy=d.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{online:true,offline:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dy:null,__cy:null,__eI:null,canHandleEvent:function(e,f){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initObserver:function(){this.__eI=qx.lang.Function.listener(this._onNative,this);
qx.bom.Event.addNativeListener(this.__cy,c,this.__eI);
qx.bom.Event.addNativeListener(this.__cy,b,this.__eI);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this.__cy,c,this.__eI);
qx.bom.Event.removeNativeListener(this.__cy,b,this.__eI);
},_onNative:qx.event.GlobalError.observeMethod(function(m){qx.event.Registration.fireEvent(this.__cy,m.type,qx.event.type.Event,[]);
}),isOnline:function(){return !!this.__cy.navigator.onLine;
}},destruct:function(){this.__dy=null;
this._stopObserver();
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(n){qx.event.Registration.addHandler(n);
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__fw:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__fx:{},__fy:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__fy[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__fy[t]=true;
}catch(e){qx.bom.Element.__fy[t]=false;
}}return qx.bom.Element.__fy[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__fx[w]){var v=qx.bom.Element.__fx[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__fx[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__fw;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var C=qx.bom.element.Decoration;
var D=this._images;
var E=this._edges;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this._markup=F.join(o);
},resize:function(G,H,I){var J=this._edges;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this._images={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this._edges=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__eJ:null,__eK:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__eJ=d;
this.__eK=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__eJ=this.__eJ;
g.__eK=this.__eK;
return g;
},getOrientation:function(){return this.__eJ;
},isLandscape:function(){return this.__eK==c;
},isPortrait:function(){return this.__eK==a;
}}});
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
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var n="",k="url('",h="ie",g="browser.name",f="changeStatus",e="svg",d="chrome",c="#",b="firefox",a="eot",T="ios",S="ttf",R="browser.version",Q="woff",P="m",O="os.name",N=")",M="qx.bom.webfonts.Manager",L="singleton",K=",\n",u="src: ",v="mobileSafari",s="'eot)",t="@font-face {",q="interval",r="}\n",o="font-family: ",p="mobile safari",w="safari",y="?#iefix') format('eot')",C=";\n",B="') format('woff')",E="opera",D="\.(",G="os.version",F="') format('svg')",A="'eot')",J="\nfont-style: normal;\nfont-weight: normal;",I="@font-face.*?",H=";",z="') format('truetype')";
qx.Class.define(M,{extend:qx.core.Object,type:L,construct:function(){qx.core.Object.call(this);
this.__iY=[];
this.__ja={};
this.__hK=[];
this.__jb=this.getPreferredFormats();
},statics:{FONT_FORMATS:["eot","woff","ttf","svg"],VALIDATION_TIMEOUT:5000},members:{__iY:null,__jc:null,__ja:null,__jb:null,__hK:null,__jd:null,require:function(U,V,W,X){var Y=[];

for(var i=0,l=V.length;i<l;i++){var bb=V[i].split(c);
var ba=qx.util.ResourceManager.getInstance().toUri(bb[0]);

if(bb.length>1){ba=ba+c+bb[1];
}Y.push(ba);
}if(!(qx.core.Environment.get(g)==h&&qx.bom.client.Browser.getVersion()<9)){this.__je(U,Y,W,X);
return;
}
if(!this.__jd){this.__jd=new qx.event.Timer(100);
this.__jd.addListener(q,this.__jf,this);
}
if(!this.__jd.isEnabled()){this.__jd.start();
}this.__hK.push([U,Y,W,X]);
},remove:function(bc){var bd=null;

for(var i=0,l=this.__iY.length;i<l;i++){if(this.__iY[i]==bc){bd=i;
this.__jl(bc);
break;
}}
if(bd){qx.lang.Array.removeAt(this.__iY,bd);
}
if(bc in this.__ja){this.__ja[bc].dispose();
delete this.__ja[bc];
}},getPreferredFormats:function(){var be=[];
var bi=qx.core.Environment.get(g);
var bf=qx.core.Environment.get(R);
var bh=qx.core.Environment.get(O);
var bg=qx.core.Environment.get(G);

if((bi==h&&bf>=9)||(bi==b&&bf>=3.6)||(bi==d&&bf>=6)){be.push(Q);
}
if((bi==E&&bf>=10)||(bi==w&&bf>=3.1)||(bi==b&&bf>=3.5)||(bi==d&&bf>=4)||(bi==p&&bh==T&&bg>=4.2)){be.push(S);
}
if(bi==h&&bf>=4){be.push(a);
}
if(bi==v&&bh==T&&bg>=4.1){be.push(e);
}return be;
},removeStyleSheet:function(){this.__iY=[];

if(this.__jc){var bj=this.__jc.ownerNode?this.__jc.ownerNode:this.__jc.owningElement;
qx.dom.Element.removeChild(bj,bj.parentNode);
}this.__jc=null;
},__je:function(bk,bl,bm,bn){if(!qx.lang.Array.contains(this.__iY,bk)){var bq=this.__jh(bl);
var bp=this.__ji(bk,bq);

if(!bp){throw new Error("Couldn't create @font-face rule for WebFont "+bk+"!");
}
if(!this.__jc){this.__jc=qx.bom.Stylesheet.createElement();
}
try{this.__jk(bp);
}catch(br){}this.__iY.push(bk);
}
if(!this.__ja[bk]){this.__ja[bk]=new qx.bom.webfonts.Validator(bk);
this.__ja[bk].setTimeout(qx.bom.webfonts.Manager.VALIDATION_TIMEOUT);
this.__ja[bk].addListenerOnce(f,this.__jg,this);
}
if(bm){var bo=bn||window;
this.__ja[bk].addListenerOnce(f,bm,bo);
}this.__ja[bk].validate();
},__jf:function(){if(this.__hK.length==0){this.__jd.stop();
return;
}var bs=this.__hK.shift();
this.__je.apply(this,bs);
},__jg:function(bt){var bu=bt.getData();

if(bu.valid===false){qx.event.Timer.once(function(){this.remove(bu.family);
},this,250);
}},__jh:function(bv){var bx=qx.bom.webfonts.Manager.FONT_FORMATS;
var bA={};

for(var i=0,l=bv.length;i<l;i++){var by=null;

for(var x=0;x<bx.length;x++){var bz=new RegExp(D+bx[x]+N);
var bw=bz.exec(bv[i]);

if(bw){by=bw[1];
}}
if(by){bA[by]=bv[i];
}}return bA;
},__ji:function(bB,bC){var bF=[];
var bD=this.__jb.length>0?this.__jb:qx.bom.webfonts.Manager.FONT_FORMATS;

for(var i=0,l=bD.length;i<l;i++){var bE=bD[i];

if(bC[bE]){bF.push(this.__jj(bE,bC[bE]));
}}var bG=u+bF.join(K)+H;
bG=o+bB+C+bG;
bG=bG+J;
return bG;
},__jj:function(bH,bI){switch(bH){case a:return k+bI+y;
case Q:return k+bI+B;
case S:return k+bI+z;
case e:return k+bI+F;
default:return null;
}},__jk:function(bJ){var bL=t+bJ+r;

if(qx.core.Environment.get(g)==h&&qx.core.Environment.get(R)<9){var bK=this.__jm(this.__jc.cssText);
bK+=bL;
this.__jc.cssText=bK;
}else{this.__jc.insertRule(bL,this.__jc.cssRules.length);
}},__jl:function(bM){var bP=new RegExp(I+bM,P);

for(var i=0,l=document.styleSheets.length;i<l;i++){var bN=document.styleSheets[i];

if(bN.cssText){var bO=bN.cssText.replace(/\n/g,n).replace(/\r/g,n);
bO=this.__jm(bO);

if(bP.exec(bO)){bO=bO.replace(bP,n);
}bN.cssText=bO;
}else if(bN.cssRules){for(var j=0,m=bN.cssRules.length;j<m;j++){var bO=bN.cssRules[j].cssText.replace(/\n/g,n).replace(/\r/g,n);

if(bP.exec(bO)){this.__jc.deleteRule(j);
return;
}}}}},__jm:function(bQ){return bQ.replace(s,A);
}},destruct:function(){delete this.__iY;
this.removeStyleSheet();

for(var bR in this.__ja){this.__ja[bR].dispose();
}qx.bom.webfonts.Validator.removeDefaultHelperElements();
}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__it:null,__iu:false,__iv:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__iu){this.__iu=false;
}else{this.__iu=true;
o.execute(this);
}}this.fireEvent(n);
},__iw:function(e){if(this.__iu){this.__iu=false;
return;
}this.__iu=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__iv);
}
if(p!=null){this.__iv=p.addListener(n,this.__iw,this);
}var t=this.__it;

if(t==null){this.__it=t={};
}var u;

for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&!q.isDisposed()&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){u=this.get(s);
}else{u=null;
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this._applyCommand(null,this.getCommand());
this.__it=null;
}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",y="changeIcon",x="qx.ui.basic.Atom",w="changeLabel",v="Integer",u="_applyIconPosition",t="bottom-left",s="top-left",r="top",q="right",p="_applyRich",n="_applyIcon",o="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(x,{extend:qx.ui.core.Widget,construct:function(z,A){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(z!=null){this.setLabel(z);
}
if(A!=null){this.setIcon(A);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:w},rich:{check:h,init:false,apply:p},icon:{check:f,apply:n,nullable:true,themeable:true,event:y},gap:{check:v,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:o,event:c},iconPosition:{init:e,check:[r,q,b,e,s,t],themeable:true,apply:u},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.basic.Label(this.getLabel());
D.setAnonymous(true);
D.setRich(this.getRich());
this._add(D);

if(this.getLabel()==null||this.getShow()===i){D.exclude();
}break;
case i:D=new qx.ui.basic.Image(this.getIcon());
D.setAnonymous(true);
this._addAt(D,0);

if(this.getIcon()==null||this.getShow()===j){D.exclude();
}break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(E,F){var G=this.getChildControl(j,true);

if(G){G.setValue(E);
}this._handleLabel();
},_applyRich:function(H,I){var J=this.getChildControl(j,true);

if(J){J.setRich(H);
}},_applyIcon:function(K,L){var M=this.getChildControl(i,true);

if(M){M.setSource(K);
}this._handleIcon();
},_applyGap:function(N,O){this._getLayout().setGap(N);
},_applyShow:function(P,Q){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(R,S){this._getLayout().setIconPosition(R);
},_applyCenter:function(T,U){this._getLayout().setCenter(T);
},_applySelectable:function(V,W){qx.ui.core.Widget.prototype._applySelectable.call(this,V,W);
var X=this.getChildControl(j,true);

if(X){this.getChildControl(j).setSelectable(V);
}}}});
})();
(function(){var b="qx.ui.form.IRadioItem",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){},getValue:function(){},setGroup:function(d){this.assertInstance(d,qx.ui.form.RadioGroup);
},getGroup:function(){}}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var k="pressed",j="abandoned",i="hovered",h="Boolean",g="Space",f="undetermined",d="Enter",c="checked",b="mousedown",a="_applyTriState",w="mouseout",v="changeValue",u="keydown",t="_applyGroup",s="button",r="execute",q="qx.ui.form.RadioGroup",p="_applyValue",o="qx.ui.form.ToggleButton",n="mouseover",l="keyup",m="mouseup";
qx.Class.define(o,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IBooleanForm,qx.ui.form.IExecutable,qx.ui.form.IRadioItem],construct:function(x,y){qx.ui.basic.Atom.call(this,x,y);
this.addListener(n,this._onMouseOver);
this.addListener(w,this._onMouseOut);
this.addListener(b,this._onMouseDown);
this.addListener(m,this._onMouseUp);
this.addListener(u,this._onKeyDown);
this.addListener(l,this._onKeyUp);
this.addListener(r,this._onExecute,this);
},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},value:{check:h,nullable:true,event:v,apply:p,init:false},group:{check:q,nullable:true,apply:t},triState:{check:h,apply:a,nullable:true,init:null}},members:{_applyGroup:function(z,A){if(A){A.remove(this);
}
if(z){z.add(this);
}},_applyValue:function(B,C){B?this.addState(c):this.removeState(c);

if(this.isTriState()){if(B===null){this.addState(f);
}else if(C===null){this.removeState(f);
}}},_applyTriState:function(D,E){this._applyValue(this.getValue());
},_onExecute:function(e){this.toggleValue();
},_onMouseOver:function(e){if(e.getTarget()!==this){return;
}this.addState(i);

if(this.hasState(j)){this.removeState(j);
this.addState(k);
}},_onMouseOut:function(e){if(e.getTarget()!==this){return;
}this.removeState(i);

if(this.hasState(k)){if(!this.getValue()){this.removeState(k);
}this.addState(j);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.removeState(j);
this.addState(k);
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(this.hasState(j)){this.removeState(j);
}else if(this.hasState(k)){this.execute();
}this.removeState(k);
e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.addState(k);
e.stopPropagation();
}},_onKeyUp:function(e){if(!this.hasState(k)){return;
}
switch(e.getKeyIdentifier()){case d:case g:this.removeState(j);
this.execute();
this.removeState(k);
e.stopPropagation();
}}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__dy=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false},members:{__dy:null,__hn:{focusin:1,focusout:1,focus:1,blur:1},__ho:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(g,h){return g instanceof qx.ui.core.Widget;
},_dispatchEvent:function(j){var p=j.getTarget();
var o=qx.ui.core.Widget.getWidgetByElement(p);
var q=false;

while(o&&o.isAnonymous()){var q=true;
o=o.getLayoutParent();
}if(o&&q&&j.getType()==a){o.getContainerElement().activate();
}if(this.__hn[j.getType()]){o=o&&o.getFocusTarget();
if(!o){return;
}}if(j.getRelatedTarget){var x=j.getRelatedTarget();
var w=qx.ui.core.Widget.getWidgetByElement(x);

while(w&&w.isAnonymous()){w=w.getLayoutParent();
}
if(w){if(this.__hn[j.getType()]){w=w.getFocusTarget();
}if(w===o){return;
}}}var s=j.getCurrentTarget();
var u=qx.ui.core.Widget.getWidgetByElement(s);

if(!u||u.isAnonymous()){return;
}if(this.__hn[j.getType()]){u=u.getFocusTarget();
}var v=j.getType();

if(!u||!(u.isEnabled()||this.__ho[v])){return;
}var k=j.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var r=this.__dy.getListeners(u,v,k);

if(!r||r.length===0){return;
}var m=qx.event.Pool.getInstance().getObject(j.constructor);
j.clone(m);
m.setTarget(o);
m.setRelatedTarget(w||null);
m.setCurrentTarget(u);
var y=j.getOriginalTarget();

if(y){var n=qx.ui.core.Widget.getWidgetByElement(y);

while(n&&n.isAnonymous()){n=n.getLayoutParent();
}m.setOriginalTarget(n);
}else{m.setOriginalTarget(p);
}for(var i=0,l=r.length;i<l;i++){var t=r[i].context||u;
r[i].handler.call(t,m);
}if(m.getPropagationStopped()){j.stopPropagation();
}
if(m.getDefaultPrevented()){j.preventDefault();
}qx.event.Pool.getInstance().poolObject(m);
},registerEvent:function(z,A,B){var C;

if(A===e||A===f){C=z.getFocusElement();
}else if(A===c||A===d){C=z.getContentElement();
}else{C=z.getContainerElement();
}
if(C){C.addListener(A,this._dispatchEvent,this,B);
}},unregisterEvent:function(D,E,F){var G;

if(E===e||E===f){G=D.getFocusElement();
}else if(E===c||E===d){G=D.getContentElement();
}else{G=D.getContainerElement();
}
if(G){G.removeListener(E,this._dispatchEvent,this,F);
}}},destruct:function(){this.__dy=null;
},defer:function(H){qx.event.Registration.addHandler(H);
}});
})();
(function(){var g="Boolean",f="qx.ui.core.SingleSelectionManager",e="__mP",d="__mO",c="__mN",b="changeSelected",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(h){qx.core.Object.call(this);
this.__mN=h;
},events:{"changeSelected":a},properties:{allowEmptySelection:{check:g,init:true,apply:e}},members:{__mO:null,__mN:null,getSelected:function(){return this.__mO;
},setSelected:function(j){if(!this.__mR(j)){throw new Error("Could not select "+j+", because it is not a child element!");
}this.__mQ(j);
},resetSelected:function(){this.__mQ(null);
},isSelected:function(k){if(!this.__mR(k)){throw new Error("Could not check if "+k+" is selected,"+" because it is not a child element!");
}return this.__mO===k;
},isSelectionEmpty:function(){return this.__mO==null;
},getSelectables:function(l){var m=this.__mN.getItems();
var n=[];

for(var i=0;i<m.length;i++){if(this.__mN.isItemSelectable(m[i])){n.push(m[i]);
}}if(!l){for(var i=n.length-1;i>=0;i--){if(!n[i].getEnabled()){n.splice(i,1);
}}}return n;
},__mP:function(o,p){if(!o){this.__mQ(this.__mO);
}},__mQ:function(q){var t=this.__mO;
var s=q;

if(s!=null&&t===s){return;
}
if(!this.isAllowEmptySelection()&&s==null){var r=this.getSelectables(true)[0];

if(r){s=r;
}}this.__mO=s;
this.fireDataEvent(b,s,t);
},__mR:function(u){var v=this.__mN.getItems();

for(var i=0;i<v.length;i++){if(v[i]===u){return true;
}}return false;
}},destruct:function(){if(this.__mN.toHashCode){this._disposeObjects(c);
}else{this.__mN=null;
}this._disposeObjects(d);
}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__jp,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__jp:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__jp,this);
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(b){return arguments.length==1;
},removeFromSelection:function(c){return arguments.length==1;
}}});
})();
(function(){var f="scrollbar-x",d="scrollbar-y",c="qx.ui.core.scroll.MWheelHandling",b="x",a="y";
qx.Mixin.define(c,{members:{_onMouseWheel:function(e){var l=this._isChildControlVisible(f);
var m=this._isChildControlVisible(d);
var q=m?this.getChildControl(d,true):null;
var p=l?this.getChildControl(f,true):null;
var j=e.getWheelDelta(a);
var i=e.getWheelDelta(b);
var k=!m;
var n=!l;
if(q){var o=parseInt(j);

if(o!==0){q.scrollBySteps(o);
}var h=q.getPosition();
var g=q.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){k=true;
}}if(p){var o=parseInt(i);

if(o!==0){p.scrollBySteps(o);
}var h=p.getPosition();
var g=p.getMaximum();
if(o<0&&h<=0||o>0&&h>=g){n=true;
}}if(!k||!n){e.stop();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Environment.add(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){{return new qx.ui.core.scroll.NativeScrollBar(c);
};
}}});
})();
(function(){var k="scrollbar-y",j="scrollbar-x",i="pane",h="auto",g="corner",f="os.scrollBarOverlayed",d="scrollbar-",c="on",b="_computeScrollbars",a="getDocument",F="changeVisibility",E="off",D="x",C="scroll",B="touchmove",A="scrollY",z="Left",y="mousewheel",x="scrollbarX",w="event.touch",r="scrollarea",s="y",p="vertical",q="scrollX",n="touchstart",o="horizontal",l="qx.ui.core.scroll.AbstractScrollArea",m="abstract",t="update",u="scrollbarY",v="Top";
qx.Class.define(l,{extend:qx.ui.core.Widget,include:[qx.ui.core.scroll.MScrollBarFactory,qx.ui.core.scroll.MWheelHandling],type:m,construct:function(){qx.ui.core.Widget.call(this);

if(qx.core.Environment.get(f)){this._setLayout(new qx.ui.layout.Canvas());
}else{var G=new qx.ui.layout.Grid();
G.setColumnFlex(0,1);
G.setRowFlex(0,1);
this._setLayout(G);
}this.addListener(y,this._onMouseWheel,this);
if(qx.core.Environment.get(w)){this.addListener(B,this._onTouchMove,this);
this.addListener(n,function(){this.__cQ={"x":0,"y":0};
},this);
this.__cQ={};
this.__rk={};
}},properties:{appearance:{refine:true,init:r},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbarY:{check:[h,c,E],init:h,themeable:true,apply:b},scrollbar:{group:[x,u]}},members:{__cQ:null,__rk:null,_createChildControlImpl:function(H,I){var J;

switch(H){case i:J=new qx.ui.core.scroll.ScrollPane();
J.addListener(t,this._computeScrollbars,this);
J.addListener(q,this._onScrollPaneX,this);
J.addListener(A,this._onScrollPaneY,this);

if(qx.core.Environment.get(f)){this._add(J,{edge:0});
}else{this._add(J,{row:0,column:0});
}break;
case j:J=this._createScrollBar(o);
J.setMinWidth(0);
J.exclude();
J.addListener(C,this._onScrollBarX,this);
J.addListener(F,this._onChangeScrollbarXVisibility,this);

if(qx.core.Environment.get(f)){J.setMinHeight(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{bottom:0,right:0,left:0});
}else{this._add(J,{row:1,column:0});
}break;
case k:J=this._createScrollBar(p);
J.setMinHeight(0);
J.exclude();
J.addListener(C,this._onScrollBarY,this);
J.addListener(F,this._onChangeScrollbarYVisibility,this);

if(qx.core.Environment.get(f)){J.setMinWidth(qx.bom.element.Overflow.DEFAULT_SCROLLBAR_WIDTH);
this._add(J,{right:0,bottom:0,top:0});
}else{this._add(J,{row:0,column:1});
}break;
case g:J=new qx.ui.core.Widget();
J.setWidth(0);
J.setHeight(0);
J.exclude();

if(!qx.core.Environment.get(f)){this._add(J,{row:1,column:1});
}break;
}return J||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,H);
},getPaneSize:function(){return this.getChildControl(i).getInnerSize();
},getItemTop:function(K){return this.getChildControl(i).getItemTop(K);
},getItemBottom:function(L){return this.getChildControl(i).getItemBottom(L);
},getItemLeft:function(M){return this.getChildControl(i).getItemLeft(M);
},getItemRight:function(N){return this.getChildControl(i).getItemRight(N);
},scrollToX:function(O){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollTo(O);
},scrollByX:function(P){qx.ui.core.queue.Manager.flush();
this.getChildControl(j).scrollBy(P);
},getScrollX:function(){var Q=this.getChildControl(j,true);
return Q?Q.getPosition():0;
},scrollToY:function(R){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollTo(R);
},scrollByY:function(S){qx.ui.core.queue.Manager.flush();
this.getChildControl(k).scrollBy(S);
},getScrollY:function(){var T=this.getChildControl(k,true);
return T?T.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(i).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(i).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onTouchMove:function(e){this._onTouchMoveDirectional(D,e);
this._onTouchMoveDirectional(s,e);
e.stop();
},_onTouchMoveDirectional:function(U,e){var V=(U==D?z:v);
var X=this.getChildControl(d+U,true);
var Y=this._isChildControlVisible(d+U);

if(Y&&X){if(this.__cQ[U]==0){var W=0;
}else{var W=-(e[a+V]()-this.__cQ[U]);
}this.__cQ[U]=e[a+V]();
X.scrollBy(W);
if(this.__rk[U]){clearTimeout(this.__rk[U]);
this.__rk[U]=null;
}this.__rk[U]=setTimeout(qx.lang.Function.bind(function(ba){this.__rl(ba,U);
},this,W),100);
}},__rl:function(bb,bc){this.__rk[bc]=null;
var be=this._isChildControlVisible(d+bc);

if(bb==0||!be){return;
}if(bb>0){bb=Math.max(0,bb-3);
}else{bb=Math.min(0,bb+3);
}this.__rk[bc]=setTimeout(qx.lang.Function.bind(function(bf,bg){this.__rl(bf,bg);
},this,bb,bc),20);
var bd=this.getChildControl(d+bc,true);
bd.scrollBy(bb);
},_onChangeScrollbarXVisibility:function(e){var bh=this._isChildControlVisible(j);
var bi=this._isChildControlVisible(k);

if(!bh){this.scrollToX(0);
}bh&&bi?this._showChildControl(g):this._excludeChildControl(g);
},_onChangeScrollbarYVisibility:function(e){var bj=this._isChildControlVisible(j);
var bk=this._isChildControlVisible(k);

if(!bk){this.scrollToY(0);
}bj&&bk?this._showChildControl(g):this._excludeChildControl(g);
},_computeScrollbars:function(){var br=this.getChildControl(i);
var content=br.getChildren()[0];

if(!content){this._excludeChildControl(j);
this._excludeChildControl(k);
return;
}var bl=this.getInnerSize();
var bq=br.getInnerSize();
var bo=br.getScrollSize();
if(!bq||!bo){return;
}var bs=this.getScrollbarX();
var bt=this.getScrollbarY();

if(bs===h&&bt===h){var bp=bo.width>bl.width;
var bu=bo.height>bl.height;
if((bp||bu)&&!(bp&&bu)){if(bp){bu=bo.height>bq.height;
}else if(bu){bp=bo.width>bq.width;
}}}else{var bp=bs===c;
var bu=bt===c;
if(bo.width>(bp?bq.width:bl.width)&&bs===h){bp=true;
}
if(bo.height>(bp?bq.height:bl.height)&&bt===h){bu=true;
}}if(bp){var bn=this.getChildControl(j);
bn.show();
bn.setMaximum(Math.max(0,bo.width-bq.width));
bn.setKnobFactor((bo.width===0)?0:bq.width/bo.width);
}else{this._excludeChildControl(j);
}
if(bu){var bm=this.getChildControl(k);
bm.show();
bm.setMaximum(Math.max(0,bo.height-bq.height));
bm.setKnobFactor((bo.height===0)?0:bq.height/bo.height);
}else{this._excludeChildControl(k);
}}}});
})();
(function(){var m="horizontal",k="qx.event.type.Data",j="vertical",h="",g="qx.ui.form.List",f="text",d="Enter",c="one",b="addChildWidget",a="_applySpacing",A="Boolean",z="Integer",y="action",x="keyinput",w="addItem",v="removeChildWidget",u="_applyOrientation",t="__oK",s="single",r="keypress",p="list",q="label",n="pane",o="removeItem";
qx.Class.define(g,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(B){qx.ui.core.scroll.AbstractScrollArea.call(this);
this.__oK=this._createListItemContainer();
this.__oK.addListener(b,this._onAddChild,this);
this.__oK.addListener(v,this._onRemoveChild,this);
this.getChildControl(n).add(this.__oK);
if(B){this.setOrientation(m);
}else{this.initOrientation();
}this.addListener(r,this._onKeyPress);
this.addListener(x,this._onKeyInput);
this.__pJ=h;
},events:{addItem:k,removeItem:k},properties:{appearance:{refine:true,init:p},focusable:{refine:true,init:true},orientation:{check:[m,j],init:j,apply:u},spacing:{check:z,init:0,apply:a,themeable:true},enableInlineFind:{check:A,init:true}},members:{__pJ:null,__pK:null,__oK:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__oK;
},_onAddChild:function(e){this.fireDataEvent(w,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(o,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_createListItemContainer:function(){return new qx.ui.container.Composite;
},_applyOrientation:function(C,D){var E=C===m;
var F=E?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__oK;
content.setLayout(F);
content.setAllowGrowX(!E);
content.setAllowGrowY(E);
this._applySpacing(this.getSpacing());
},_applySpacing:function(G,H){this.__oK.getLayout().setSpacing(G);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==d&&!e.isAltPressed()){var I=this.getSelection();

for(var i=0;i<I.length;i++){I[i].fireEvent(y);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var J=this.getSelectionMode();

if(!(J===s||J===c)){return;
}if(((new Date).valueOf()-this.__pK)>1000){this.__pJ=h;
}this.__pJ+=e.getChar();
var K=this.findItemByLabelFuzzy(this.__pJ);
if(K){this.setSelection([K]);
}this.__pK=(new Date).valueOf();
},findItemByLabelFuzzy:function(L){L=L.toLowerCase();
var M=this.getChildren();
for(var i=0,l=M.length;i<l;i++){var N=M[i].getLabel();
if(N&&N.toLowerCase().indexOf(L)==0){return M[i];
}}return null;
},findItem:function(O,P){if(P!==false){O=O.toLowerCase();
}var S=this.getChildren();
var U;
for(var i=0,l=S.length;i<l;i++){U=S[i];
var T;

if(U.isRich()){var Q=U.getChildControl(q,true);

if(Q){var R=Q.getContentElement().getDomElement();

if(R){T=qx.bom.element.Attribute.get(R,f);
}}}else{T=U.getLabel();
}
if(T!=null){if(T.translate){T=T.translate();
}
if(P!==false){T=T.toLowerCase();
}
if(T.toString()==O.toString()){return U;
}}}return null;
}},destruct:function(){this._disposeObjects(t);
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__hU=u;
this.length=u.length;
},members:{$$isString:true,length:0,__hU:null,toString:function(){return this.__hU;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__jn=c;
this.__jo=d;
},members:{__jn:null,__jo:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__jn,this.__jo);
}}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var m="changeValue",l="focused",k="hovered",j="selected",i=")",h="Invalid (",g="Hovered",f="Focused",d="Disabled",c="Selected",a="widgetbrowser.MControls",b="Invalid";
qx.Mixin.define(a,{members:{initControls:function(n,o){o=o||{};
var s=new qx.ui.container.Composite;
s.setLayout(new qx.ui.layout.HBox(10));
this.add(s);

if(o.disabled){var p=new qx.ui.form.ToggleButton(d);
p.addListener(m,function(){n.forEach(function(v,w){if(v.setEnabled){v.setEnabled(!this.getValue());
}},this);
});
s.add(p);
}
if(o.hovered){var u=new qx.ui.form.ToggleButton(g);
u.addListener(m,function(){n.forEach(function(x,y){if(this.getValue()){x.addState(k);
}else{x.removeState(k);
}},this);
});
s.add(u);
}
if(o.selected){var q=new qx.ui.form.ToggleButton(c);
q.addListener(m,function(){n.forEach(function(z,A){if(this.getValue()){z.addState(j);
}else{z.removeState(j);
}},this);
});
s.add(q);
}
if(o.focused){var r=new qx.ui.form.ToggleButton(f);
r.addListener(m,function(e){n.forEach(function(B,C){if(this.getValue()){B.addState(l);
}else{B.removeState(l);
}},this);
});
s.add(r);
}
if(o.invalid){var t=new qx.ui.form.ToggleButton(b);
t.addListener(m,function(e){n.forEach(function(D,E){if(D.setInvalidMessage&&D.setValid){D.setInvalidMessage(h+E+i);
D.setValid(!this.getValue());
}},this);
});
s.add(t);
}}}});
})();
(function(){var k="appear",j="50%",i="excluded",h="widgetbrowser.view.TabPage",g="widgetbrowser/loading66.gif",f="browser.version",e="opera",d="11.0",c=".",b="browser.name",a="pane";
qx.Class.define(h,{extend:qx.ui.tabview.Page,include:widgetbrowser.MControls,construct:function(l,m,n){qx.ui.tabview.Page.call(this);
this.setLabel(l);
this.setLayout(new qx.ui.layout.Canvas());
this.addListenerOnce(k,function(){var p=m.split(c).pop().toLowerCase();
qx.Part.require(p,function(){var r=qx.Class.getByName(m);
var q=new r();
this.add(q,{top:40,edge:0});
if(qx.core.Environment.get(b)==e&&qx.core.Environment.get(f)==d){var scroll=qx.core.Init.getApplication().getScroll().getChildControl(a).getContentElement().getDomElement();
q.addListenerOnce(k,function(){if(scroll){scroll.scrollTop=0;
}});
}this.initControls(q.getWidgets(),n);
o.setVisibility(i);
},this);
},this);
var o=new qx.ui.basic.Image(g);
o.setMarginTop(-33);
o.setMarginLeft(-33);
this.add(o,{left:j,top:j});
},members:{}});
})();
(function(){var h="error",g="initialized",f="loading",e="complete",d="webkit",c="success",b="qx.io.part.Package",a="cached";
qx.Bootstrap.define(b,{construct:function(i,j,k){this.__mn=k?e:g;
this.__mo=i;
this.__cq=j;
},members:{__mn:null,__mo:null,__cq:null,__mp:null,__mq:null,__ht:null,__mr:null,getId:function(){return this.__cq;
},getReadyState:function(){return this.__mn;
},getUrls:function(){return this.__mo;
},saveClosure:function(l){if(this.__mn==h){return;
}this.__mp=l;

if(!this.__mq){this.execute();
}else{clearTimeout(this.__ht);
this.__mn=a;
this.__mr(this);
}},execute:function(){if(this.__mp){this.__mp();
delete this.__mp;
}
if(qx.$$packageData[this.__cq]){this.__mt(qx.$$packageData[this.__cq]);
delete qx.$$packageData[this.__cq];
}this.__mn=e;
},loadClosure:function(m,self){if(this.__mn!==g){return;
}this.__mq=true;
this.__mn=f;
this.__mr=qx.Bootstrap.bind(m,self);
this.__ms(this.__mo,function(){},function(){this.__mn=h;
m.call(self,this);
},this);
var n=this;
this.__ht=setTimeout(function(){n.__mn=h;
m.call(self,n);
},qx.Part.TIMEOUT);
},load:function(o,self){if(this.__mn!==g){return;
}this.__mq=false;
this.__mn=f;
this.__ms(this.__mo,function(){this.__mn=e;
this.execute();
o.call(self,this);
},function(){this.__mn=h;
o.call(self,this);
},this);
},__ms:function(p,q,r,self){if(p.length==0){q.call(self);
return;
}var t=0;
var self=this;
var s=function(u){if(t>=p.length){q.call(self);
return;
}var v=new qx.io.ScriptLoader();
v.load(u.shift(),function(status){t+=1;
v.dispose();

if(status!==c){if(self.__mn==f){clearTimeout(self.__ht);
return r.call(self);
}}if((qx.bom.client.Engine.getName()==d)){setTimeout(function(){s.call(self,u,q,self);
},0);
}else{s.call(self,u,q,self);
}},self);
};
s(p.concat());
},__mt:qx.$$loader.importPackageData}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
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
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="qx.ui.form.RepeatButton",d="release",a="interval",c="__lh",b="execute";
qx.Class.define(f,{extend:qx.ui.form.Button,construct:function(o,p){qx.ui.form.Button.call(this,o,p);
this.__lh=new qx.event.AcceleratingTimer();
this.__lh.addListener(a,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__om:null,__lh:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__on();
}this.removeState(m);
this.addState(n);
}},release:function(q){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__om){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__oo();
},_applyEnabled:function(r,s){qx.ui.form.Button.prototype._applyEnabled.call(this,r,s);

if(!r){this.removeState(n);
this.removeState(m);
this.__oo();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__lh.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__lh.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__on();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__om){this.execute();
}}this.__oo();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__om){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__oo();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__on();
}},_onInterval:function(e){this.__om=true;
this.fireEvent(b);
},__on:function(){this.fireEvent(g);
this.__om=false;
this.__lh.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__oo:function(){this.fireEvent(d);
this.__lh.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__dj=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__dk=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__dl:null,__dj:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__dl);
this.__dl=null;
}else if(p){this.__dl=window.setInterval(this.__dj,this.getInterval());
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
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__dl){window.clearInterval(this.__dl);
}this.__dl=this.__dj=null;
}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var c="os.scrollBarOverlayed",b="osx",a="qx.bom.client.Scroll";
qx.Bootstrap.define(a,{statics:{scrollBarOverlayed:function(){var d=qx.bom.element.Overflow.getScrollbarWidth();
var e=qx.bom.client.OperatingSystem.getName()===b;
var f=true;
return d==0&&e&&f;
}},defer:function(g){qx.core.Environment.add(c,g.scrollBarOverlayed);
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignY(p);
}
if(q){this.setSeparator(q);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__ld:null,__le:null,__lf:null,__kv:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lg:function(){var w=this._getLayoutChildren();
var length=w.length;
var s=false;
var r=this.__ld&&this.__ld.length!=length&&this.__le&&this.__ld;
var u;
var t=r?this.__ld:new Array(length);
var v=r?this.__le:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.height!=null){t[i]=parseFloat(u.height)/100;
}
if(u.flex!=null){v[i]=u.flex;
s=true;
}else{v[i]=0;
}}if(!r){this.__ld=t;
this.__le=v;
}this.__lf=s;
this.__kv=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__lg();
}var F=this.__kv;
var length=F.length;
var P=qx.ui.layout.Util;
var O=this.getSpacing();
var S=this.getSeparator();

if(S){var C=P.computeVerticalSeparatorGaps(F,O,S);
}else{var C=P.computeVerticalGaps(F,O,true);
}var i,A,B,J;
var K=[];
var Q=C;

for(i=0;i<length;i+=1){J=this.__ld[i];
B=J!=null?Math.floor((y-C)*J):F[i].getSizeHint().height;
K.push(B);
Q+=B;
}if(this.__lf&&Q!=y){var H={};
var N,R;

for(i=0;i<length;i+=1){N=this.__le[i];

if(N>0){G=F[i].getSizeHint();
H[i]={min:G.minHeight,value:K[i],max:G.maxHeight,flex:N};
}}var D=P.computeFlexOffsets(H,y,Q);

for(i in D){R=D[i].offset;
K[i]+=R;
Q+=R;
}}var top=F[0].getMarginTop();
if(Q<y&&this.getAlignY()!=m){top=y-Q;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var G,U,L,B,I,M,E;
this._clearSeparators();
if(S){var T=qx.theme.manager.Decoration.getInstance().resolve(S).getInsets();
var z=T.top+T.bottom;
}for(i=0;i<length;i+=1){A=F[i];
B=K[i];
G=A.getSizeHint();
M=A.getMarginLeft();
E=A.getMarginRight();
L=Math.max(G.minWidth,Math.min(x-M-E,G.maxWidth));
U=P.computeHorizontalAlignOffset(A.getAlignX()||this.getAlignX(),L,x,M,E);
if(i>0){if(S){top+=I+O;
this._renderSeparator(S,{top:top,left:0,height:z,width:x});
top+=z+O+A.getMarginTop();
}else{top+=P.collapseMargins(O,I,A.getMarginTop());
}}A.renderLayout(U,top,L,B);
top+=B;
I=A.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lg();
}var bc=qx.ui.layout.Util;
var bk=this.__kv;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__le[i];
var Y=this.__ld[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__ld=this.__le=this.__kv=null;
}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__hK:[],add:function(c){var d=this.__hK;

if(qx.lang.Array.contains(d,c)){return;
}d.unshift(c);
qx.ui.core.queue.Manager.scheduleFlush(b);
},isEmpty:function(){return this.__hK.length==0;
},flush:function(){var e=this.__hK;

for(var i=e.length-1;i>=0;i--){var f=e[i];
e.splice(i,1);
f.dispose();
}if(e.length!=0){return;
}this.__hK=[];
}}});
})();
(function(){var j="nonScaled",i="scaled",h="alphaScaled",g=".png",f="div",e="replacement",d="qx.event.type.Event",c="engine.name",b="hidden",a="Boolean",z="px",y="engine.version",x="scale",w="changeSource",v="qx.ui.basic.Image",u="loaded",t="-disabled.$1",s="loadingFailed",r="String",q="_applySource",o="img",p="__lE",m="image",n="mshtml",k="_applyScale",l="no-repeat";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(A){this.__lE={};
qx.ui.core.Widget.call(this);

if(A){this.setSource(A);
}},properties:{source:{check:r,init:null,nullable:true,event:w,apply:q,themeable:true},scale:{check:a,init:false,themeable:true,apply:k},appearance:{refine:true,init:m},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},events:{loadingFailed:d,loaded:d},members:{__lF:null,__lG:null,__eK:null,__lE:null,getContentElement:function(){return this.__lK();
},_createContentElement:function(){return this.__lK();
},_getContentHint:function(){return {width:this.__lF||0,height:this.__lG||0};
},_applyEnabled:function(B,C){qx.ui.core.Widget.prototype._applyEnabled.call(this,B,C);

if(this.getSource()){this._styleSource();
}},_applySource:function(D){this._styleSource();
},_applyScale:function(E){this._styleSource();
},__lH:function(F){this.__eK=F;
},__lI:function(){if(this.__eK==null){var H=this.getSource();
var G=false;

if(H!=null){G=qx.lang.String.endsWith(H,g);
}
if(this.getScale()&&G&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__eK=h;
}else if(this.getScale()){this.__eK=i;
}else{this.__eK=j;
}}return this.__eK;
},__lJ:function(I){var J;
var K;

if(I==h){J=true;
K=f;
}else if(I==j){J=false;
K=f;
}else{J=true;
K=o;
}var L=new qx.html.Image(K);
L.setScale(J);
L.setStyles({"overflowX":b,"overflowY":b});
return L;
},__lK:function(){var M=this.__lI();

if(this.__lE[M]==null){this.__lE[M]=this.__lJ(M);
}return this.__lE[M];
},_styleSource:function(){var N=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!N){this.getContentElement().resetSource();
return;
}this.__lL(N);

if((qx.core.Environment.get(c)==n)&&parseInt(qx.core.Environment.get(y),10)<9){var O=this.getScale()?x:l;
this.getContentElement().tagNameHint=qx.bom.element.Decoration.getTagName(O,N);
}if(qx.util.ResourceManager.getInstance().has(N)){this.__lN(this.getContentElement(),N);
}else if(qx.io.ImageLoader.isLoaded(N)){this.__lO(this.getContentElement(),N);
}else{this.__lP(this.getContentElement(),N);
}},__lL:qx.core.Environment.select(c,{"mshtml":function(P){var R=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var Q=qx.lang.String.endsWith(P,g);

if(R&&Q){if(this.getScale()&&this.__lI()!=h){this.__lH(h);
}else if(!this.getScale()&&this.__lI()!=j){this.__lH(j);
}}else{if(this.getScale()&&this.__lI()!=i){this.__lH(i);
}else if(!this.getScale()&&this.__lI()!=j){this.__lH(j);
}}this.__lM(this.__lK());
},"default":function(S){if(this.getScale()&&this.__lI()!=i){this.__lH(i);
}else if(!this.getScale()&&this.__lI(j)){this.__lH(j);
}this.__lM(this.__lK());
}}),__lM:function(T){var W=this.getContainerElement();
var X=W.getChild(0);

if(X!=T){if(X!=null){var ba=z;
var U={};
var V=this.getInnerSize();

if(V!=null){U.width=V.width+ba;
U.height=V.height+ba;
}var Y=this.getInsets();
U.left=Y.left+ba;
U.top=Y.top+ba;
U.zIndex=10;
T.setStyles(U,true);
T.setSelectable(this.getSelectable());
}W.removeAt(0);
W.addAt(T,0);
}},__lN:function(bb,bc){var be=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var bd=bc.replace(/\.([a-z]+)$/,t);

if(be.has(bd)){bc=bd;
this.addState(e);
}else{this.removeState(e);
}}if(bb.getSource()===bc){return;
}bb.setSource(bc);
this.__lR(be.getImageWidth(bc),be.getImageHeight(bc));
},__lO:function(bf,bg){var bi=qx.io.ImageLoader;
bf.setSource(bg);
var bh=bi.getWidth(bg);
var bj=bi.getHeight(bg);
this.__lR(bh,bj);
},__lP:function(bk,bl){var self;
var bm=qx.io.ImageLoader;
if(!bm.isFailed(bl)){bm.load(bl,this.__lQ,this);
}else{if(bk!=null){bk.resetSource();
}}},__lQ:function(bn,bo){if(this.$$disposed===true){return;
}if(bn!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(bo.failed){this.warn("Image could not be loaded: "+bn);
this.fireEvent(s);
}else if(bo.aborted){return ;
}else{this.fireEvent(u);
}this._styleSource();
},__lR:function(bp,bq){if(bp!==this.__lF||bq!==this.__lG){this.__lF=bp;
this.__lG=bq;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(p);
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
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bH=c;
this.__bI=d||b;
this.__bJ=e===undefined?-1:e;
},members:{__bH:null,__bI:null,__bJ:null,toString:function(){return this.__bH;
},getUri:function(){return this.__bI;
},getLineNumber:function(){return this.__bJ;
}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var f="hovered",e="mouseover",d="mouseout",c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(g,h,i){qx.ui.basic.Atom.call(this,g,h);

if(i!=null){this.setModel(i);
}this.addListener(e,this._onMouseOver,this);
this.addListener(d,this._onMouseOut,this);
},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true},_onMouseOver:function(){this.addState(f);
},_onMouseOut:function(){this.removeState(f);
}},destruct:function(){this.removeListener(e,this._onMouseOver,this);
this.removeListener(d,this._onMouseOut,this);
}});
})();
(function(){var a="qx.application.Standalone";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Application(document);
}}});
})();
(function(){var k="file",j="strict",h="anchor",g="div",f="query",e="source",d="password",c="host",b="protocol",a="user",A="directory",z="loose",y="relative",x="queryKey",w="qx.util.Uri",v="",u="path",t="authority",s='">0</a>',r="&",p="port",q='<a href="',l="userInfo",n="?";
qx.Class.define(w,{statics:{parseUri:function(B,C){var D={key:[e,b,t,l,a,d,c,p,y,u,A,k,f,h],q:{name:x,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=D,m=D.parser[C?j:z].exec(B),E={},i=14;

while(i--){E[o.key[i]]=m[i]||v;
}E[o.q.name]={};
E[o.key[12]].replace(o.q.parser,function(F,G,H){if(G){E[o.q.name][G]=H;
}});
return E;
},appendParamsToUrl:function(I,J){if(J===undefined){return I;
}
if(qx.lang.Type.isObject(J)){J=qx.lang.Object.toUriParameter(J);
}
if(!J){return I;
}return I+=(/\?/).test(I)?r+J:n+J;
},getAbsolute:function(K){var L=document.createElement(g);
L.innerHTML=q+K+s;
return L.firstChild.href;
}}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var i="=",h="",g=";path=",f=";domain=",e=";expires=Thu, 01-Jan-1970 00:00:01 GMT",d="qx.bom.Cookie",c=";expires=",b=";",a=";secure";
qx.Class.define(d,{statics:{get:function(j){var k=document.cookie.indexOf(j+i);
var m=k+j.length+1;

if((!k)&&(j!=document.cookie.substring(0,j.length))){return null;
}
if(k==-1){return null;
}var l=document.cookie.indexOf(b,m);

if(l==-1){l=document.cookie.length;
}return unescape(document.cookie.substring(m,l));
},set:function(n,o,p,q,r,s){var t=[n,i,escape(o)];

if(p){var u=new Date();
u.setTime(u.getTime());
t.push(c,new Date(u.getTime()+(p*1000*60*60*24)).toGMTString());
}
if(q){t.push(g,q);
}
if(r){t.push(f,r);
}
if(s){t.push(a);
}document.cookie=t.join(h);
},del:function(v,w,x){if(!qx.bom.Cookie.get(v)){return;
}var y=[v,i];

if(w){y.push(g,w);
}
if(x){y.push(f,x);
}y.push(e);
document.cookie=y.join(h);
}}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__hK:[],remove:function(c){qx.lang.Array.remove(this.__hK,c);
},add:function(d){var e=this.__hK;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__hK;
var g;

for(var i=f.length-1;i>=0;i--){g=f[i];
f.splice(i,1);
g.syncWidget();
}if(f.length!=0){return;
}this.__hK=[];
}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Font",d="_dynamic",c="Theme",b="changeTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:c,nullable:true,apply:f,event:b}},members:{resolveDynamic:function(g){var h=this._dynamic;
return g instanceof qx.bom.Font?g:h[g];
},resolve:function(i){var l=this._dynamic;
var j=l[i];

if(j){return j;
}var k=this.getTheme();

if(k!==null&&k.fonts[i]){var m=this.__jr(k.fonts[i]);
return l[i]=(new m).set(k.fonts[i]);
}return i;
},isDynamic:function(n){var q=this._dynamic;

if(n&&(n instanceof qx.bom.Font||q[n]!==undefined)){return true;
}var p=this.getTheme();

if(p!==null&&n&&p.fonts[n]){var o=this.__jr(p.fonts[n]);
q[n]=(new o).set(p.fonts[n]);
return true;
}return false;
},__jq:function(r,s){if(r[s].include){var t=r[r[s].include];
r[s].include=null;
delete r[s].include;
r[s]=qx.lang.Object.mergeWith(r[s],t,false);
this.__jq(r,s);
}},_applyTheme:function(u){var v=this._getDynamic();

for(var y in v){if(v[y].themed){v[y].dispose();
delete v[y];
}}
if(u){var w=u.fonts;

for(var y in w){if(w[y].include&&w[w[y].include]){this.__jq(w,y);
}var x=this.__jr(w[y]);
v[y]=(new x).set(w[y]);
v[y].themed=true;
}}this._setDynamic(v);
},__jr:function(z){if(z.sources){return qx.bom.webfonts.WebFont;
}return qx.bom.Font;
}},destruct:function(){this._disposeMap(d);
}});
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
},initialize:function(){var u=qx.core.Environment;
var s,t;
s=u.get(e);

if(s){t=qx.Theme.getByName(s);

if(!t){throw new Error("The theme to use is not available: "+s);
}this.setTheme(t);
}}},environment:{"qx.theme":c}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cy=j.getWindow();
this.__cA=k;
j.addListener(this.__cy,f,this.releaseCapture,this);
j.addListener(this.__cy,e,this.releaseCapture,this);
j.addListener(this.__cy,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cA:null,__fA:null,__fB:true,__cy:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__fA&&this.__fC[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fB||!qx.dom.Hierarchy.contains(this.__fA,o)){o=this.__fA;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__fC:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__fA===q&&this.__fB==r){return;
}
if(this.__fA){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__fB=r;
this.__fA=q;
this.__cA.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fA;
},releaseCapture:function(){var s=this.__fA;

if(!s){return;
}this.__fA=null;
this.__cA.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fA=this.__cy=this.__cA=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:function(p){var q=(p||window).document;
return (p||window).pageXOffset||q.documentElement.scrollLeft||q.body.scrollLeft;
},getScrollTop:function(r){var s=(r||window).document;
return (r||window).pageYOffset||s.documentElement.scrollTop||s.body.scrollTop;
},__dQ:function(){var t=this.getWidth()>this.getHeight()?90:0;
var u=window.orientation;

if(u==null||Math.abs(u%180)==t){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dR:null,getOrientation:function(v){var w=(v||window).orientation;

if(w==null){w=this.getWidth(v)>this.getHeight(v)?90:0;
}else{w=this.__dR[w];
}return w;
},isLandscape:function(x){return Math.abs(this.getOrientation(x))==90;
},isPortrait:function(y){return Math.abs(this.getOrientation(y))!==90;
}},defer:function(z){z.__dR=z.__dQ();
}});
})();
(function(){var e="qx.theme.manager.Icon",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{_applyTheme:function(f,g){var i=qx.util.AliasManager.getInstance();

if(g){for(var h in g.aliases){i.remove(h);
}}
if(f){for(var h in f.aliases){i.add(h,f.aliases[h]);
}}}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__hF();
}else if(this.isHex3String(m)){return this.__hH();
}else if(this.isHex6String(m)){return this.__hI();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__hF();
}else if(this.isRgbaString(n)){return this.__hG();
}else if(this.isHex3String(n)){return this.__hH();
}else if(this.isHex6String(n)){return this.__hI();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return (this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v)||this.isRgbaString(v));
},isCssString:function(w){return (this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__hF:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__hG:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__hH:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__hI:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__hH(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__hI(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__hH(P);
}
if(this.isHex6String(P)){return this.__hI(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
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
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__hJ={};
this.add(a,h);
},members:{__hJ:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__hJ[k]){return this.__hJ[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__hJ[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__hJ[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__hJ[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__hJ){v[w]=this.__hJ[w];
}return v;
}},destruct:function(){this.__hJ=null;
}});
})();
(function(){var k="color",j="qx.dynlocale",i="Boolean",h="enabled",g="changeLocale",f="_applyTextAlign",d="qx.ui.core.Widget",c="nowrap",b="changeStatus",a="changeTextAlign",E="_applyWrap",D="changeValue",C="qx.ui.basic.Label",B="whiteSpace",A="css.textoverflow",z="html.xul",y="_applyValue",x="center",w="_applyBuddy",v="String",r="textAlign",s="right",p="justify",q="changeRich",n="normal",o="_applyRich",l="click",m="label",t="left",u="A";
qx.Class.define(C,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(F){qx.ui.core.Widget.call(this);

if(F!=null){this.setValue(F);
}
if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().addListener(g,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:q,apply:o},wrap:{check:i,init:true,apply:E},value:{check:v,apply:y,event:D,nullable:true},buddy:{check:d,apply:w,nullable:true,init:null,dereference:true},textAlign:{check:[t,x,s,p],nullable:true,themeable:true,apply:f,event:a},appearance:{refine:true,init:m},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__gs:null,__li:null,__lj:null,__lk:null,__gt:null,_getContentHint:function(){if(this.__li){this.__ll=this.__lm();
delete this.__li;
}return {width:this.__ll.width,height:this.__ll.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(G){if(!qx.core.Environment.get(A)&&qx.core.Environment.get(z)){if(G&&!this.isRich()){return;
}}qx.ui.core.Widget.prototype._applySelectable.call(this,G);
},_getContentHeightForWidth:function(H){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__lm(H).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(I,J){this.getContentElement().setStyle(r,I);
},_applyTextColor:function(K,L){if(K){this.getContentElement().setStyle(k,qx.theme.manager.Color.getInstance().resolve(K));
}else{this.getContentElement().removeStyle(k);
}},__ll:{width:0,height:0},_applyFont:function(M,N){if(N&&this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
this.__gt=null;
}var O;

if(M){this.__gs=qx.theme.manager.Font.getInstance().resolve(M);

if(this.__gs instanceof qx.bom.webfonts.WebFont){this.__gt=this.__gs.addListener(b,this._onWebFontStatusChange,this);
}O=this.__gs.getStyles();
}else{this.__gs=null;
O=qx.bom.Font.getDefaultStyles();
}if(this.getTextColor()!=null){delete O[k];
}this.getContentElement().setStyles(O);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
},__lm:function(P){var T=qx.bom.Label;
var R=this.getFont();
var Q=R?this.__gs.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||u;
var S=this.getRich();
return S?T.getHtmlSize(content,Q,P):T.getTextSize(content,Q);
},_applyBuddy:function(U,V){if(V!=null){V.removeBinding(this.__lj);
this.__lj=null;
this.removeListenerById(this.__lk);
this.__lk=null;
}
if(U!=null){this.__lj=U.bind(h,this,h);
this.__lk=this.addListener(l,function(){if(U.isFocusable()){U.focus.apply(U);
}},this);
}},_applyRich:function(W){this.getContentElement().setRich(W);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(X,Y){if(X&&!this.isRich()){}
if(this.isRich()){var ba=X?n:c;
this.getContentElement().setStyle(B,ba);
}},_onChangeLocale:qx.core.Environment.select(j,{"true":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"false":null}),_onWebFontStatusChange:function(bb){if(bb.getData().valid===true){this.__li=true;
qx.ui.core.queue.Layout.add(this);
}},_applyValue:function(bc,bd){this.getContentElement().setValue(bc);
this.__li=true;
qx.ui.core.queue.Layout.add(this);
}},destruct:function(){if(qx.core.Environment.get(j)){qx.locale.Manager.getInstance().removeListener(g,this._onChangeLocale,this);
}if(this.__lj!=null){var be=this.getBuddy();

if(be!=null&&!be.isDisposed()){be.removeBinding(this.__lj);
}}
if(this.__gs&&this.__gt){this.__gs.removeListenerById(this.__gt);
}this.__gs=this.__lj=null;
}});
})();
(function(){var l="",k="audio",j="video",i="undefined",h="number",g="function",f="html.video.h264",d="html.element.contains",c='video/ogg; codecs="theora, vorbis"',b="html.console",bh="html.xul",bg="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",bf="html.video.ogg",be="http://www.w3.org/TR/SVG11/feature#BasicStructure",bd="html.storage.local",bc='audio',bb='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',ba="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",Y="html.audio",X="audio/mpeg",s="org.w3c.dom.svg",t="html.classlist",q="html.video",r="html.geolocation",o="DOMTokenList",p="html.storage.session",m="1.1",n="html.image.naturaldimensions",x="html.audio.aif",y="audio/x-wav",G="html.canvas",E="audio/ogg",N="html.audio.mp3",I="html.element.compareDocumentPosition",T="audio/x-aiff",R="html.audio.au",A="img",W="html.xpath",V="qx.bom.client.Html",U='video',z="span",C="html.element.textcontent",D="mshtml",F="html.vml",H="html.svg",J="html.audio.ogg",O="label",S='video/webm; codecs="vp8, vorbis"',u="html.dataurl",w="html.webworker",B="html.dataset",M="1.0",L="html.audio.wav",K="html.filereader",Q="audio/basic",P="html.video.webm";
qx.Bootstrap.define(V,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(bc).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(E);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(X);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(y);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(Q);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(T);
},getVideo:function(){return !!document.createElement(U).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(c);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(bb);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(S);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(bi){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(bj){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===o);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(bg,O);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(s,M)||document.implementation.hasFeature(be,m));
},getVml:function(){return qx.bom.client.Engine.getName()==D;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(bk){var bl=new Image();
bl.onload=bl.onerror=function(){window.setTimeout(function(){bk.call(null,(bl.width==1&&bl.height==1));
},0);
};
bl.src=ba;
},getDataset:function(){return !!document.documentElement.dataset;
},getContains:function(){return (typeof document.documentElement.contains!==i);
},getCompareDocumentPosition:function(){return (typeof document.documentElement.compareDocumentPosition===g);
},getTextContent:function(){var bm=document.createElement(z);
return (typeof bm.textContent!==i);
},getConsole:function(){return typeof window.console!==i;
},getNaturalDimensions:function(){var bn=document.createElement(A);
return typeof bn.naturalHeight===h&&typeof bn.naturalWidth===h;
}},defer:function(bo){qx.core.Environment.add(w,bo.getWebWorker),qx.core.Environment.add(K,bo.getFileReader),qx.core.Environment.add(r,bo.getGeoLocation),qx.core.Environment.add(Y,bo.getAudio),qx.core.Environment.add(J,bo.getAudioOgg),qx.core.Environment.add(N,bo.getAudioMp3),qx.core.Environment.add(L,bo.getAudioWav),qx.core.Environment.add(R,bo.getAudioAu),qx.core.Environment.add(x,bo.getAudioAif),qx.core.Environment.add(q,bo.getVideo),qx.core.Environment.add(bf,bo.getVideoOgg),qx.core.Environment.add(f,bo.getVideoH264),qx.core.Environment.add(P,bo.getVideoWebm),qx.core.Environment.add(bd,bo.getLocalStorage),qx.core.Environment.add(p,bo.getSessionStorage),qx.core.Environment.add(t,bo.getClassList),qx.core.Environment.add(W,bo.getXPath),qx.core.Environment.add(bh,bo.getXul),qx.core.Environment.add(G,bo.getCanvas),qx.core.Environment.add(H,bo.getSvg),qx.core.Environment.add(F,bo.getVml),qx.core.Environment.add(B,bo.getDataset),qx.core.Environment.addAsync(u,bo.getDataUrl);
qx.core.Environment.add(d,bo.getContains);
qx.core.Environment.add(I,bo.getCompareDocumentPosition);
qx.core.Environment.add(C,bo.getTextContent);
qx.core.Environment.add(b,bo.getConsole);
qx.core.Environment.add(n,bo.getNaturalDimensions);
}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",A="'",z="htmlFor",y="longDesc",x="cellSpacing",w="frameBorder",v="='",u="useMap",t="innerText",s="innerHTML",r="tabIndex",p="dateTime",q="maxLength",n="html.element.textcontent",o="mshtml",l="cellPadding",m="browser.documentmode",k="colSpan";
qx.Class.define(e,{statics:{__fz:{names:{"class":b,"for":z,html:s,text:qx.core.Environment.get(n)?a:t,colspan:k,rowspan:d,valign:c,datetime:p,accesskey:f,tabindex:r,maxlength:q,readonly:g,longdesc:y,cellpadding:l,cellspacing:x,frameborder:w,usemap:u},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(B){var C=[];
var E=this.__fz.runtime;

for(var D in B){if(!E[D]){C.push(D,v,B[D],A);
}}return C.join(j);
},get:function(F,name){var H=this.__fz;
var G;
name=H.names[name]||name;
if(qx.core.Environment.get(h)==o&&parseInt(qx.core.Environment.get(m),10)<8&&H.original[name]){G=F.getAttribute(name,2);
}else if(H.property[name]){G=F[name];

if(typeof H.propertyDefault[name]!==i&&G==H.propertyDefault[name]){if(typeof H.bools[name]===i){return null;
}else{return G;
}}}else{G=F.getAttribute(name);
}if(H.bools[name]){return !!G;
}return G;
},set:function(I,name,J){if(typeof J===i){return;
}var K=this.__fz;
name=K.names[name]||name;
if(K.bools[name]){J=!!J;
}if(K.property[name]&&(!(I[name]===undefined)||K.qxProperties[name])){if(J==null){if(K.removeableProperties[name]){I.removeAttribute(name);
return;
}else if(typeof K.propertyDefault[name]!==i){J=K.propertyDefault[name];
}}I[name]=J;
}else{if(J===true){I.setAttribute(name,name);
}else if(J===false||J===null){I.removeAttribute(name);
}else{I.setAttribute(name,J);
}}},reset:function(L,name){this.set(L,name,null);
}}});
})();
(function(){var t="checked",s="keypress",r="Boolean",q="Right",p="label",o="Left",n="_applyValue",m="changeValue",l="Up",k="value",d="qx.ui.form.RadioButton",j="radiobutton",h="toolTipText",c="enabled",b="qx.ui.form.RadioGroup",g="Down",f="_applyGroup",i="menu",a="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty],implement:[qx.ui.form.IRadioItem,qx.ui.form.IForm,qx.ui.form.IBooleanForm,qx.ui.form.IModel],construct:function(u){qx.ui.form.Button.call(this,u);
this.addListener(a,this._onExecute);
this.addListener(s,this._onKeyPress);
},properties:{group:{check:b,nullable:true,apply:f},value:{check:r,nullable:true,event:m,apply:n,init:false},appearance:{refine:true,init:j},allowGrowX:{refine:true,init:false}},members:{_forwardStates:{checked:true,focused:true,invalid:true,hovered:true},_bindableProperties:[c,p,h,k,i],_applyValue:function(v,w){v?this.addState(t):this.removeState(t);
},_applyGroup:function(x,y){if(y){y.remove(this);
}
if(x){x.add(this);
}},_onExecute:function(e){var z=this.getGroup();

if(z&&z.getAllowEmptySelection()){this.toggleValue();
}else{this.setValue(true);
}},_onKeyPress:function(e){var A=this.getGroup();

if(!A){return;
}
switch(e.getKeyIdentifier()){case o:case l:A.selectPrevious();
break;
case q:case g:A.selectNext();
break;
}}}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__dy",b="qx.ui.window.MDesktop",a="__op";
qx.Mixin.define(b,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__op:null,__dy:null,getWindowManager:function(){if(!this.__dy){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__dy;
},supportsMaximize:function(){return true;
},setWindowManager:function(j){if(this.__dy){this.__dy.setDesktop(null);
}j.setDesktop(this);
this.__dy=j;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(k,l){this.getWindowManager().changeActiveWindow(k,l);
this.getWindowManager().updateStack();
},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(m){if(qx.Class.isDefined(i)&&m instanceof qx.ui.window.Window){this._addWindow(m);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(o){if(qx.Class.isDefined(i)&&o instanceof qx.ui.window.Window){this._removeWindow(o);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__op){this.__op=[];
}return this.__op;
}},destruct:function(){this._disposeArray(a);
this._disposeObjects(c);
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
(function(){var k="px",j="div",i="img",h="",g="engine.name",f="no-repeat",d="scale-x",c="scale",b="mshtml",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__lS:{},__lT:(qx.core.Environment.get(g)==b)&&qx.core.Environment.get(D)<9,__lU:qx.core.Environment.select(g,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lV:{"scale-x":i,"scale-y":i,"scale":i,"repeat":j,"no-repeat":j,"repeat-x":j,"repeat-y":j},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===i){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=h&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=h&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__lT){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===i){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if(X&&this.__lT&&this.__lU[W]&&qx.lang.String.endsWith(X,F)){return j;
}return this.__lV[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(g)==b)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(g)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__lT&&this.__lU[ba]&&bd===q){bc=this.__lY(bb,ba,Y);
}else{if(ba===c){bc=this.__ma(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__mb(bb,ba,Y);
}else{bc=this.__me(bb,ba,Y);
}}return bc;
},__lW:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__lX:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__lY:function(bl,bm,bn){var bq=this.__lX(bn);
bl=this.__lW(bl,bq.width,bq.height);
var bp=bm==f?E:c;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=h;
return {style:bl};
},__ma:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__lX(bt);
br=this.__lW(br,bv.width,bv.height);
return {src:bu,style:br};
},__mb:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__lX(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__mc(bw,bD,bE.height);
}else{bw=this.__md(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__mc:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__md:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__me:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__lX(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=0;
var bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__lW(bN,ca.width,ca.height);
bN=this.__mf(bN,bP,bO);
return {style:bN};
}},__mf:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=h;
}return cb;
},__mg:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__lS[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__lS[ci]=true;
}}},isAlphaImageLoaderEnabled:function(){return qx.bom.element.Decoration.__lT;
}}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__hK:[],remove:function(c){qx.lang.Array.remove(this.__hK,c);
},add:function(d){var e=this.__hK;

if(qx.lang.Array.contains(e,d)){return;
}e.unshift(d);
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(f){return qx.lang.Array.contains(this.__hK,f);
},flush:function(){var j=qx.ui.core.queue.Visibility;
var g=this.__hK;
var h;

for(var i=g.length-1;i>=0;i--){h=g[i];
g.splice(i,1);
if(j.isVisible(h)){h.syncAppearance();
}else{h.$$stateChanges=true;
}}}}});
})();
(function(){var f="__na",e="_applyBlockerColor",d="Number",c="qx.ui.core.MBlocker",b="_applyBlockerOpacity",a="Color";
qx.Mixin.define(c,{construct:function(){this.__na=this._createBlocker();
},properties:{blockerColor:{check:a,init:null,nullable:true,apply:e,themeable:true},blockerOpacity:{check:d,init:1,apply:b,themeable:true}},members:{__na:null,_createBlocker:function(){return new qx.ui.core.Blocker(this);
},_applyBlockerColor:function(g,h){this.__na.setColor(g);
},_applyBlockerOpacity:function(i,j){this.__na.setOpacity(i);
},block:function(){this.__na.block();
},isBlocked:function(){return this.__na.isBlocked();
},unblock:function(){this.__na.unblock();
},forceUnblock:function(){this.__na.forceUnblock();
},blockContent:function(k){this.__na.blockContent(k);
},isContentBlocked:function(){return this.__na.isContentBlocked();
},unblockContent:function(){this.__na.unblockContent();
},forceUnblockContent:function(){this.__na.forceUnblockContent();
},getBlocker:function(){return this.__na;
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var u="help",t="contextmenu",s="changeGlobalCursor",r="engine.name",q="keypress",p="Boolean",o="root",n="",m=" !important",l="input",d="_applyGlobalCursor",k="Space",h="_applyNativeHelp",c=";",b="event.help",g="qx.ui.root.Abstract",f="abstract",i="textarea",a="String",j="*";
qx.Class.define(g,{type:f,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){qx.ui.core.Widget.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
this.addListener(q,this.__rb,this);
},properties:{appearance:{refine:true,init:o},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:a,nullable:true,themeable:true,apply:d,event:s},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:p,init:false,apply:h}},members:{__ra:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Environment.select(r,{"mshtml":function(v,w){},"default":function(x,y){var z=qx.bom.Stylesheet;
var A=this.__ra;

if(!A){this.__ra=A=z.createElement();
}z.removeAllRules(A);

if(x){z.addRule(A,j,qx.bom.element.Cursor.compile(x).replace(c,n)+m);
}}}),_applyNativeContextMenu:function(B,C){if(B){this.removeListener(t,this._onNativeContextMenu,this,true);
}else{this.addListener(t,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},__rb:function(e){if(e.getKeyIdentifier()!==k){return;
}var E=e.getTarget();
var D=qx.ui.core.FocusHandler.getInstance();

if(!D.isFocused(E)){return;
}var F=E.getContentElement().getNodeName();

if(F===l||F===i){return;
}e.preventDefault();
},_applyNativeHelp:function(G,H){if(qx.core.Environment.get(b)){if(H===false){qx.bom.Event.removeNativeListener(document,u,qx.lang.Function.returnFalse);
}
if(G===false){qx.bom.Event.addNativeListener(document,u,qx.lang.Function.returnFalse);
}}}},destruct:function(){this.__ra=null;
},defer:function(I,J){qx.ui.core.MChildrenHandling.remap(J);
}});
})();
(function(){var n="resize",m="engine.name",l="position",k="0px",j="webkit",i="paddingLeft",h="$$widget",g="qx.ui.root.Application",f="hidden",d="div",a="paddingTop",c="100%",b="absolute";
qx.Class.define(g,{extend:qx.ui.root.Abstract,construct:function(o){this.__cy=qx.dom.Node.getWindow(o);
this.__nO=o;
qx.ui.root.Abstract.call(this);
qx.event.Registration.addListener(this.__cy,n,this._onResize,this);
this._setLayout(new qx.ui.layout.Canvas());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
this.getContentElement().disableScrolling();
},members:{__cy:null,__nO:null,_createContainerElement:function(){var p=this.__nO;
if((qx.core.Environment.get(m)==j)){if(!p.body){alert("The application could not be started due to a missing body tag in the HTML file!");
}}var t=p.documentElement.style;
var q=p.body.style;
t.overflow=q.overflow=f;
t.padding=t.margin=q.padding=q.margin=k;
t.width=t.height=q.width=q.height=c;
var s=p.createElement(d);
p.body.appendChild(s);
var r=new qx.html.Root(s);
r.setStyle(l,b);
r.setAttribute(h,this.toHashCode());
return r;
},_onResize:function(e){qx.ui.core.queue.Layout.add(this);
if(qx.ui.popup&&qx.ui.popup.Manager){qx.ui.popup.Manager.getInstance().hideAll();
}if(qx.ui.menu&&qx.ui.menu.Manager){qx.ui.menu.Manager.getInstance().hideAll();
}},_computeSizeHint:function(){var u=qx.bom.Viewport.getWidth(this.__cy);
var v=qx.bom.Viewport.getHeight(this.__cy);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},_applyPadding:function(w,x,name){if(w&&(name==a||name==i)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}qx.ui.root.Abstract.prototype._applyPadding.call(this,w,x,name);
},_applyDecorator:function(y,z){qx.ui.root.Abstract.prototype._applyDecorator.call(this,y,z);

if(!y){return;
}var A=this.getDecoratorElement().getInsets();

if(A.left||A.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__cy=this.__nO=null;
}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var l="zIndex",k="px",j="keydown",h="deactivate",g="resize",f="keyup",d="keypress",c="backgroundColor",b="_applyOpacity",a="Boolean",x="__na",w="__lh",v="__qo",u="opacity",t="interval",s="Tab",r="Color",q="qx.ui.root.Page",p="Number",o="qx.ui.core.Blocker",m="qx.ui.root.Application",n="_applyColor";
qx.Class.define(o,{extend:qx.core.Object,construct:function(y){qx.core.Object.call(this);
this._widget=y;
this._isPageRoot=(qx.Class.isDefined(q)&&y instanceof qx.ui.root.Page);

if(this._isPageRoot){y.addListener(g,this.__qq,this);
}
if(qx.Class.isDefined(m)&&y instanceof qx.ui.root.Application){this.setKeepBlockerActive(true);
}this.__qk=[];
this.__ql=[];
this.__qm=[];
},properties:{color:{check:r,init:null,nullable:true,apply:n,themeable:true},opacity:{check:p,init:1,apply:b,themeable:true},keepBlockerActive:{check:a,init:false}},members:{__na:null,__qn:0,__qo:null,__qm:null,__qk:null,__ql:null,__qp:null,__lh:null,_isPageRoot:false,_widget:null,__qq:function(e){var z=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:z.width,height:z.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:z.width,height:z.height});
}},_applyColor:function(A,B){var C=qx.theme.manager.Color.getInstance().resolve(A);
this.__qr(c,C);
},_applyOpacity:function(D,E){this.__qr(u,D);
},__qr:function(F,G){var H=[];
this.__na&&H.push(this.__na);
this.__qo&&H.push(this.__qo);

for(var i=0;i<H.length;i++){H[i].setStyle(F,G);
}},_backupActiveWidget:function(){var I=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__qk.push(I.getActive());
this.__ql.push(I.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var L=this.__qk.length;

if(L>0){var K=this.__qk[L-1];

if(K){qx.bom.Element.activate(K);
}this.__qk.pop();
}var J=this.__ql.length;

if(J>0){var K=this.__ql[J-1];

if(K){qx.bom.Element.focus(this.__ql[J-1]);
}this.__ql.pop();
}},__qs:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},getBlockerElement:function(){if(!this.__na){this.__na=this.__qs();
this.__na.setStyle(l,15);
this._widget.getContainerElement().add(this.__na);
this.__na.exclude();
}return this.__na;
},block:function(){this.__qn++;

if(this.__qn<2){this._backupActiveWidget();
var M=this.getBlockerElement();
M.include();
M.activate();
M.addListener(h,this.__qx,this);
M.addListener(d,this.__qw,this);
M.addListener(j,this.__qw,this);
M.addListener(f,this.__qw,this);
}},isBlocked:function(){return this.__qn>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__qn--;

if(this.__qn<1){this.__qt();
this.__qn=0;
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__qn=0;
this.__qt();
},__qt:function(){this._restoreActiveWidget();
var N=this.getBlockerElement();
N.removeListener(h,this.__qx,this);
N.removeListener(d,this.__qw,this);
N.removeListener(j,this.__qw,this);
N.removeListener(f,this.__qw,this);
N.exclude();
},getContentBlockerElement:function(){if(!this.__qo){this.__qo=this.__qs();
this._widget.getContentElement().add(this.__qo);
this.__qo.exclude();
}return this.__qo;
},blockContent:function(O){var P=this.getContentBlockerElement();
P.setStyle(l,O);
this.__qm.push(O);

if(this.__qm.length<2){P.include();

if(this._isPageRoot){if(!this.__lh){this.__lh=new qx.event.Timer(300);
this.__lh.addListener(t,this.__qv,this);
}this.__lh.start();
this.__qv();
}}},isContentBlocked:function(){return this.__qm.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qm.pop();
var Q=this.__qm[this.__qm.length-1];
var R=this.getContentBlockerElement();
R.setStyle(l,Q);

if(this.__qm.length<1){this.__qu();
this.__qm=[];
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__qm=[];
var S=this.getContentBlockerElement();
S.setStyle(l,null);
this.__qu();
},__qu:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__lh.stop();
}},__qv:function(){var T=this._widget.getContainerElement().getDomElement();
var U=qx.dom.Node.getDocument(T);
this.getContentBlockerElement().setStyles({height:U.documentElement.scrollHeight+k,width:U.documentElement.scrollWidth+k});
},__qw:function(e){if(e.getKeyIdentifier()==s){e.stop();
}},__qx:function(){if(this.getKeepBlockerActive()){this.getBlockerElement().activate();
}}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(g,this.__qq,this);
}this._disposeObjects(v,x,w);
this.__qp=this.__qk=this.__ql=this._widget=this.__qm=null;
}});
})();
(function(){var d="qxc.ui.versionlabel.VersionLabel",c="qx.version",b="qooxdoo",a=" ";
qx.Class.define(d,{extend:qx.ui.basic.Label,construct:function(e){var g;

if(!e){g=b;
}else{g=e;
}var f=qx.core.Environment.get(c);
g+=a+f;
qx.ui.basic.Label.call(this,g);
}});
})();
(function(){var o="close-button",n="middle",m="left",l="icon",k="label",j="right",i="click",h="Boolean",g="bottom",f="qx.ui.tabview.TabButton",c="center",e="_applyShowCloseButton",d="top",b="close",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.ui.form.RadioButton,implement:qx.ui.form.IRadioItem,construct:function(){qx.ui.form.RadioButton.call(this);
var p=new qx.ui.layout.Grid(2,0);
p.setRowAlign(0,m,n);
p.setColumnAlign(0,j,n);
this._getLayout().dispose();
this._setLayout(p);
this.initShowCloseButton();
},events:{"close":a},properties:{showCloseButton:{check:h,init:false,apply:e}},members:{_forwardStates:{focused:true,checked:true},_applyIconPosition:function(q,r){var s={icon:this.getChildControl(l),label:this.getChildControl(k),closeButton:this.getShowCloseButton()?this.getChildControl(o):null};
for(var t in s){if(s[t]){this._remove(s[t]);
}}
switch(q){case d:this._add(s.label,{row:3,column:2});
this._add(s.icon,{row:1,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case g:this._add(s.label,{row:1,column:2});
this._add(s.icon,{row:3,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case m:this._add(s.label,{row:0,column:2});
this._add(s.icon,{row:0,column:0});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
case j:this._add(s.label,{row:0,column:0});
this._add(s.icon,{row:0,column:2});

if(s.closeButton){this._add(s.closeButton,{row:0,column:4});
}break;
}},_createChildControlImpl:function(u,v){var w;

switch(u){case k:var w=new qx.ui.basic.Label(this.getLabel());
w.setAnonymous(true);
this._add(w,{row:0,column:2});
this._getLayout().setColumnFlex(2,1);
break;
case l:w=new qx.ui.basic.Image(this.getIcon());
w.setAnonymous(true);
this._add(w,{row:0,column:0});
break;
case o:w=new qx.ui.form.Button();
w.setFocusable(false);
w.setKeepActive(true);
w.addListener(i,this._onCloseButtonClick,this);
this._add(w,{row:0,column:4});

if(!this.getShowCloseButton()){w.exclude();
}break;
}return w||qx.ui.form.RadioButton.prototype._createChildControlImpl.call(this,u);
},_onCloseButtonClick:function(){this.fireDataEvent(b,this);
},_applyShowCloseButton:function(x,y){if(x){this._showChildControl(o);
}else{this._excludeChildControl(o);
}},_applyCenter:function(z){var A=this._getLayout();

if(z){A.setColumnAlign(2,c,n);
}else{A.setColumnAlign(2,m,n);
}}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(c){this.assertNumber(c);
},scrollBy:function(d){this.assertNumber(d);
},scrollBySteps:function(e){this.assertNumber(e);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
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
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
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
qx.event.Registration.fireNonBubblingEvent(parent,j);
}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var g="html.element.contains",f="html.element.compareDocumentPosition",e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(h){var i=0;

while(h&&(h=h.previousSibling)){i++;
}return i;
},getElementIndex:function(j){var k=0;
var l=qx.dom.Node.ELEMENT;

while(j&&(j=j.previousSibling)){if(j.nodeType==l){k++;
}}return k;
},getNextElementSibling:function(m){while(m&&(m=m.nextSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},getPreviousElementSibling:function(n){while(n&&(n=n.previousSibling)&&!qx.dom.Node.isElement(n)){continue;
}return n||null;
},contains:function(o,p){if(qx.core.Environment.get(g)){if(qx.dom.Node.isDocument(o)){var q=qx.dom.Node.getDocument(p);
return o&&q==o;
}else if(qx.dom.Node.isDocument(p)){return false;
}else{return o.contains(p);
}}else if(qx.core.Environment.get(f)){return !!(o.compareDocumentPosition(p)&16);
}else{while(p){if(o==p){return true;
}p=p.parentNode;
}return false;
}},isRendered:function(r){var s=r.ownerDocument||r.document;

if(qx.core.Environment.get(g)){if(!r.parentNode||!r.offsetParent){return false;
}return s.body.contains(r);
}else if(qx.core.Environment.get(f)){return !!(s.compareDocumentPosition(r)&16);
}else{while(r){if(r==s.body){return true;
}r=r.parentNode;
}return false;
}},isDescendantOf:function(t,u){return this.contains(u,t);
},getCommonParent:function(v,w){if(v===w){return v;
}
if(qx.core.Environment.get(g)){while(v&&qx.dom.Node.isElement(v)){if(v.contains(w)){return v;
}v=v.parentNode;
}return null;
}else{var x={};
var A=qx.core.ObjectRegistry;
var z,y;

while(v||w){if(v){z=A.toHashCode(v);

if(x[z]){return x[z];
}x[z]=v;
v=v.parentNode;
}
if(w){y=A.toHashCode(w);

if(x[y]){return x[y];
}x[y]=w;
w=w.parentNode;
}}return null;
}},getAncestors:function(B){return this._recursivelyCollect(B,b);
},getChildElements:function(C){C=C.firstChild;

if(!C){return [];
}var D=this.getNextSiblings(C);

if(C.nodeType===1){D.unshift(C);
}return D;
},getDescendants:function(E){return qx.lang.Array.fromCollection(E.getElementsByTagName(a));
},getFirstDescendant:function(F){F=F.firstChild;

while(F&&F.nodeType!=1){F=F.nextSibling;
}return F;
},getLastDescendant:function(G){G=G.lastChild;

while(G&&G.nodeType!=1){G=G.previousSibling;
}return G;
},getPreviousSiblings:function(H){return this._recursivelyCollect(H,d);
},getNextSiblings:function(I){return this._recursivelyCollect(I,c);
},_recursivelyCollect:function(J,K){var L=[];

while(J=J[K]){if(J.nodeType==1){L.push(J);
}}return L;
},getSiblings:function(M){return this.getPreviousSiblings(M).reverse().concat(this.getNextSiblings(M));
},isEmpty:function(N){N=N.firstChild;

while(N){if(N.nodeType===qx.dom.Node.ELEMENT||N.nodeType===qx.dom.Node.TEXT){return false;
}N=N.nextSibling;
}return true;
},cleanWhitespace:function(O){var P=O.firstChild;

while(P){var Q=P.nextSibling;

if(P.nodeType==3&&!/\S/.test(P.nodeValue)){O.removeChild(P);
}P=Q;
}}}});
})();
(function(){var b="qx.ui.core.queue.Layout",a="layout";
qx.Class.define(b,{statics:{__hK:{},remove:function(c){delete this.__hK[c.$$hash];
},add:function(d){this.__hK[d.$$hash]=d;
qx.ui.core.queue.Manager.scheduleFlush(a);
},isScheduled:function(e){return !!this.__hK[e.$$hash];
},flush:function(){var f=this.__lp();
for(var i=f.length-1;i>=0;i--){var g=f[i];
if(g.hasValidLayout()){continue;
}if(g.isRootWidget()&&!g.hasUserBounds()){var j=g.getSizeHint();
g.renderLayout(0,0,j.width,j.height);
}else{var h=g.getBounds();
g.renderLayout(h.left,h.top,h.width,h.height);
}}},getNestingLevel:function(k){var l=this.__lo;
var n=0;
var parent=k;
while(true){if(l[parent.$$hash]!=null){n+=l[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
n+=1;
}var m=n;

while(k&&k!==parent){l[k.$$hash]=m--;
k=k.$$parent;
}return n;
},__ln:function(){var t=qx.ui.core.queue.Visibility;
this.__lo={};
var s=[];
var r=this.__hK;
var o,q;

for(var p in r){o=r[p];

if(t.isVisible(o)){q=this.getNestingLevel(o);
if(!s[q]){s[q]={};
}s[q][p]=o;
delete r[p];
}}return s;
},__lp:function(){var x=[];
var z=this.__ln();

for(var w=z.length-1;w>=0;w--){if(!z[w]){continue;
}
for(var v in z[w]){var u=z[w][v];
if(w==0||u.isRootWidget()||u.hasUserBounds()){x.push(u);
u.invalidateLayoutCache();
continue;
}var B=u.getSizeHint(false);

if(B){u.invalidateLayoutCache();
var y=u.getSizeHint();
var A=(!u.getBounds()||B.minWidth!==y.minWidth||B.width!==y.width||B.maxWidth!==y.maxWidth||B.minHeight!==y.minHeight||B.height!==y.height||B.maxHeight!==y.maxHeight);
}else{A=true;
}
if(A){var parent=u.getLayoutParent();

if(!z[w-1]){z[w-1]={};
}z[w-1][parent.$$hash]=parent;
}else{x.push(u);
}}}return x;
}}});
})();
(function(){var l="",k="pdf",h="wmv",g="divx",f="quicktime",e="mshtml",d="silverlight",c="Silverlight",b="plugin.silverlight.version",a="function",H="QuickTimeCheckObject.QuickTimeCheck.1",G="Adobe Acrobat",F="plugin.windowsmedia",E="QuickTime",D="plugin.silverlight",C="qx.bom.client.Plugin",B="plugin.divx",A="Chrome PDF Viewer",z="Windows Media",y="plugin.gears",s="plugin.quicktime",t="plugin.windowsmedia.version",q="DivX Web Player",r="AgControl.AgControl",o="plugin.pdf",p="plugin.pdf.version",m="plugin.divx.version",n="WMPlayer.OCX.7",u="AcroPDF.PDF",v="plugin.activex",x="plugin.quicktime.version",w="npdivx.DivXBrowserPlugin.1";
qx.Bootstrap.define(C,{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},getActiveX:function(){return (typeof window.ActiveXObject===a);
},__fD:{quicktime:{plugin:[E],control:H},wmv:{plugin:[z],control:n},divx:{plugin:[q],control:w},silverlight:{plugin:[c],control:r},pdf:{plugin:[A,G],control:u}},getQuicktimeVersion:function(){var I=qx.bom.client.Plugin.__fD[f];
return qx.bom.client.Plugin.__fE(I.control,I.plugin);
},getWindowsMediaVersion:function(){var J=qx.bom.client.Plugin.__fD[h];
return qx.bom.client.Plugin.__fE(J.control,J.plugin);
},getDivXVersion:function(){var K=qx.bom.client.Plugin.__fD[g];
return qx.bom.client.Plugin.__fE(K.control,K.plugin);
},getSilverlightVersion:function(){var L=qx.bom.client.Plugin.__fD[d];
return qx.bom.client.Plugin.__fE(L.control,L.plugin);
},getPdfVersion:function(){var M=qx.bom.client.Plugin.__fD[k];
return qx.bom.client.Plugin.__fE(M.control,M.plugin);
},getQuicktime:function(){var N=qx.bom.client.Plugin.__fD[f];
return qx.bom.client.Plugin.__fF(N.control,N.plugin);
},getWindowsMedia:function(){var O=qx.bom.client.Plugin.__fD[h];
return qx.bom.client.Plugin.__fF(O.control,O.plugin);
},getDivX:function(){var P=qx.bom.client.Plugin.__fD[g];
return qx.bom.client.Plugin.__fF(P.control,P.plugin);
},getSilverlight:function(){var Q=qx.bom.client.Plugin.__fD[d];
return qx.bom.client.Plugin.__fF(Q.control,Q.plugin);
},getPdf:function(){var R=qx.bom.client.Plugin.__fD[k];
return qx.bom.client.Plugin.__fF(R.control,R.plugin);
},__fE:function(S,T){var U=qx.bom.client.Plugin.__fF(S,T);
if(!U){return l;
}if(qx.bom.client.Engine.getName()==e){var V=new ActiveXObject(S);

try{var Y=V.versionInfo;

if(Y!=undefined){return Y;
}Y=V.version;

if(Y!=undefined){return Y;
}Y=V.settings.version;

if(Y!=undefined){return Y;
}}catch(bb){return l;
}return l;
}else{var ba=navigator.plugins;
var X=/([0-9]\.[0-9])/g;

for(var i=0;i<ba.length;i++){var W=ba[i];

for(var j=0;j<T.length;j++){if(W.name.indexOf(T[j])!==-1){if(X.test(W.name)||X.test(W.description)){return RegExp.$1;
}}}}return l;
}},__fF:function(bc,bd){if(qx.bom.client.Engine.getName()==e){var be=window.ActiveXObject;

if(!be){return false;
}
try{new ActiveXObject(bc);
}catch(bg){return false;
}return true;
}else{var bf=navigator.plugins;

if(!bf){return false;
}var name;

for(var i=0;i<bf.length;i++){name=bf[i].name;

for(var j=0;j<bd.length;j++){if(name.indexOf(bd[j])!==-1){return true;
}}}return false;
}}},defer:function(bh){qx.core.Environment.add(y,bh.getGears);
qx.core.Environment.add(s,bh.getQuicktime);
qx.core.Environment.add(x,bh.getQuicktimeVersion);
qx.core.Environment.add(F,bh.getWindowsMedia);
qx.core.Environment.add(t,bh.getWindowsMediaVersion);
qx.core.Environment.add(B,bh.getDivX);
qx.core.Environment.add(m,bh.getDivXVersion);
qx.core.Environment.add(D,bh.getSilverlight);
qx.core.Environment.add(b,bh.getSilverlightVersion);
qx.core.Environment.add(o,bh.getPdf);
qx.core.Environment.add(p,bh.getPdfVersion);
qx.core.Environment.add(v,bh.getActiveX);
}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="0",d="engine.name",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",A="PositiveNumber",z="engine.version",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="__qy",r="PositiveInteger",p="mshtml",q="mouseup",n="Number",o="_applyPosition",l="scrollbar",m="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){qx.ui.core.Widget.call(this);
this.addState(m);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if((qx.core.Environment.get(d)==t)&&parseFloat(qx.core.Environment.get(z))<11.5){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:l},orientation:{check:[k,h],init:k,apply:v},maximum:{check:r,apply:w,init:100},position:{check:n,init:0,apply:o,event:i},singleStep:{check:y,init:20},knobFactor:{check:A,nullable:true}},members:{__mW:null,__qy:null,_getScrollPaneElement:function(){if(!this.__qy){this.__qy=new qx.html.Element();
}return this.__qy;
},renderLayout:function(C,top,D,E){var F=qx.ui.core.Widget.prototype.renderLayout.call(this,C,top,D,E);
this._updateScrollBar();
return F;
},_getContentHint:function(){var G=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__mW?100:G,maxWidth:this.__mW?null:G,minWidth:this.__mW?null:G,height:this.__mW?G:100,maxHeight:this.__mW?G:null,minHeight:this.__mW?G:null};
},_applyEnabled:function(H,I){qx.ui.core.Widget.prototype._applyEnabled.call(this,H,I);
this._updateScrollBar();
},_applyMaximum:function(J){this._updateScrollBar();
},_applyPosition:function(K){var content=this.getContentElement();

if(this.__mW){content.scrollToX(K);
}else{content.scrollToY(K);
}},_applyOrientation:function(L,M){var N=this.__mW=L===k;
this.set({allowGrowX:N,allowShrinkX:N,allowGrowY:!N,allowShrinkY:!N});

if(N){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:N?i:c,overflowY:N?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var P=this.__mW;
var Q=this.getBounds();

if(!Q){return;
}
if(this.isEnabled()){var R=P?Q.width:Q.height;
var O=this.getMaximum()+R;
}else{O=0;
}if((qx.core.Environment.get(d)==p)){var Q=this.getBounds();
this.getContentElement().setStyles({left:P?f:g,top:P?g:f,width:(P?Q.width:Q.width+1)+j,height:(P?Q.height+1:Q.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(P?O:1)+j,height:(P?1:O)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(S){this.setPosition(Math.max(0,Math.min(this.getMaximum(),S)));
},scrollBy:function(T){this.scrollTo(this.getPosition()+T);
},scrollBySteps:function(U){var V=this.getSingleStep();
this.scrollBy(U*V);
},_onScroll:function(e){var X=this.getContentElement();
var W=this.__mW?X.getScrollX():X.getScrollY();
this.setPosition(W);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(s);
}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=").",y=") to the object '",x="Integer",w=" of object ",v="qx.data.SingleValueBinding",t="Binding property ",u="PositiveNumber",r="Binding from '",s="PositiveInteger",p="Binding does not exist!",q="Date",n=" not possible: No event available. ";
qx.Class.define(v,{statics:{__bg:{},bind:function(F,G,H,I,J){var U=this.__bi(F,G,H,I,J);
var P=G.split(d);
var L=this.__bo(P);
var T=[];
var Q=[];
var R=[];
var N=[];
var O=F;
try{for(var i=0;i<P.length;i++){if(L[i]!==l){N.push(g);
}else{N.push(this.__bj(O,P[i]));
}T[i]=O;
if(i==P.length-1){if(L[i]!==l){var Y=L[i]===h?O.length-1:L[i];
var K=O.getItem(Y);
this.__bn(K,H,I,J,F);
R[i]=this.__bp(O,N[i],H,I,J,L[i]);
}else{if(P[i]!=null&&O[m+qx.lang.String.firstUp(P[i])]!=null){var K=O[m+qx.lang.String.firstUp(P[i])]();
this.__bn(K,H,I,J,F);
}R[i]=this.__bp(O,N[i],H,I,J);
}}else{var V={index:i,propertyNames:P,sources:T,listenerIds:R,arrayIndexValues:L,targetObject:H,targetPropertyChain:I,options:J,listeners:Q};
var S=qx.lang.Function.bind(this.__bh,this,V);
Q.push(S);
R[i]=O.addListener(N[i],S);
}if(O[m+qx.lang.String.firstUp(P[i])]==null){O=null;
}else if(L[i]!==l){O=O[m+qx.lang.String.firstUp(P[i])](L[i]);
}else{O=O[m+qx.lang.String.firstUp(P[i])]();
}
if(!O){break;
}}}catch(ba){for(var i=0;i<T.length;i++){if(T[i]&&R[i]){T[i].removeListenerById(R[i]);
}}var X=U.targets;
var M=U.listenerIds[i];
for(var i=0;i<X.length;i++){if(X[i]&&M[i]){X[i].removeListenerById(M[i]);
}}throw ba;
}var W={type:E,listenerIds:R,sources:T,targetListenerIds:U.listenerIds,targets:U.targets};
this.__bq(W,F,G,H,I);
return W;
},__bh:function(bb){if(bb.options&&bb.options.onUpdate){bb.options.onUpdate(bb.sources[bb.index],bb.targetObject);
}for(var j=bb.index+1;j<bb.propertyNames.length;j++){var bf=bb.sources[j];
bb.sources[j]=null;

if(!bf){continue;
}bf.removeListenerById(bb.listenerIds[j]);
}var bf=bb.sources[bb.index];
for(var j=bb.index+1;j<bb.propertyNames.length;j++){if(bb.arrayIndexValues[j-1]!==l){bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])](bb.arrayIndexValues[j-1]);
}else{bf=bf[m+qx.lang.String.firstUp(bb.propertyNames[j-1])]();
}bb.sources[j]=bf;
if(!bf){this.__bk(bb.targetObject,bb.targetPropertyChain);
break;
}if(j==bb.propertyNames.length-1){if(qx.Class.implementsInterface(bf,qx.data.IListData)){var bg=bb.arrayIndexValues[j]===h?bf.length-1:bb.arrayIndexValues[j];
var bd=bf.getItem(bg);
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
bb.listenerIds[j]=this.__bp(bf,g,bb.targetObject,bb.targetPropertyChain,bb.options,bb.arrayIndexValues[j]);
}else{if(bb.propertyNames[j]!=null&&bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]!=null){var bd=bf[m+qx.lang.String.firstUp(bb.propertyNames[j])]();
this.__bn(bd,bb.targetObject,bb.targetPropertyChain,bb.options,bb.sources[bb.index]);
}var be=this.__bj(bf,bb.propertyNames[j]);
bb.listenerIds[j]=this.__bp(bf,be,bb.targetObject,bb.targetPropertyChain,bb.options);
}}else{if(bb.listeners[j]==null){var bc=qx.lang.Function.bind(this.__bh,this,bb);
bb.listeners.push(bc);
}if(qx.Class.implementsInterface(bf,qx.data.IListData)){var be=g;
}else{var be=this.__bj(bf,bb.propertyNames[j]);
}bb.listenerIds[j]=bf.addListener(be,bb.listeners[j]);
}}},__bi:function(bh,bi,bj,bk,bl){var bp=bk.split(d);
var bn=this.__bo(bp);
var bu=[];
var bt=[];
var br=[];
var bq=[];
var bo=bj;
for(var i=0;i<bp.length-1;i++){if(bn[i]!==l){bq.push(g);
}else{try{bq.push(this.__bj(bo,bp[i]));
}catch(e){break;
}}bu[i]=bo;
var bs=function(){for(var j=i+1;j<bp.length-1;j++){var bx=bu[j];
bu[j]=null;

if(!bx){continue;
}bx.removeListenerById(br[j]);
}var bx=bu[i];
for(var j=i+1;j<bp.length-1;j++){var bv=qx.lang.String.firstUp(bp[j-1]);
if(bn[j-1]!==l){var by=bn[j-1]===h?bx.getLength()-1:bn[j-1];
bx=bx[m+bv](by);
}else{bx=bx[m+bv]();
}bu[j]=bx;
if(bt[j]==null){bt.push(bs);
}if(qx.Class.implementsInterface(bx,qx.data.IListData)){var bw=g;
}else{try{var bw=qx.data.SingleValueBinding.__bj(bx,bp[j]);
}catch(e){break;
}}br[j]=bx.addListener(bw,bt[j]);
}qx.data.SingleValueBinding.updateTarget(bh,bi,bj,bk,bl);
};
bt.push(bs);
br[i]=bo.addListener(bq[i],bs);
var bm=qx.lang.String.firstUp(bp[i]);
if(bo[m+bm]==null){bo=null;
}else if(bn[i]!==l){bo=bo[m+bm](bn[i]);
}else{bo=bo[m+bm]();
}
if(!bo){break;
}}return {listenerIds:br,targets:bu};
},updateTarget:function(bz,bA,bB,bC,bD){var bE=this.getValueFromObject(bz,bA);
bE=qx.data.SingleValueBinding.__br(bE,bB,bC,bD,bz);
this.__bl(bB,bC,bE);
},getValueFromObject:function(o,bF){var bJ=this.__bm(o,bF);
var bH;

if(bJ!=null){var bL=bF.substring(bF.lastIndexOf(d)+1,bF.length);
if(bL.charAt(bL.length-1)==f){var bG=bL.substring(bL.lastIndexOf(k)+1,bL.length-1);
var bI=bL.substring(0,bL.lastIndexOf(k));
var bK=bJ[m+qx.lang.String.firstUp(bI)]();

if(bG==h){bG=bK.length-1;
}
if(bK!=null){bH=bK.getItem(bG);
}}else{bH=bJ[m+qx.lang.String.firstUp(bL)]();
}}return bH;
},__bj:function(bM,bN){var bO=this.__bs(bM,bN);
if(bO==null){if(qx.Class.supportsEvent(bM.constructor,bN)){bO=bN;
}else if(qx.Class.supportsEvent(bM.constructor,g+qx.lang.String.firstUp(bN))){bO=g+qx.lang.String.firstUp(bN);
}else{throw new qx.core.AssertionError(t+bN+w+bM+n);
}}return bO;
},__bk:function(bP,bQ){var bR=this.__bm(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(d)+1,bQ.length);
if(bS.charAt(bS.length-1)==f){this.__bl(bP,bQ,null);
return;
}if(bR[C+qx.lang.String.firstUp(bS)]!=undefined){bR[C+qx.lang.String.firstUp(bS)]();
}else{bR[a+qx.lang.String.firstUp(bS)](null);
}}},__bl:function(bT,bU,bV){var ca=this.__bm(bT,bU);

if(ca!=null){var cb=bU.substring(bU.lastIndexOf(d)+1,bU.length);
if(cb.charAt(cb.length-1)==f){var bW=cb.substring(cb.lastIndexOf(k)+1,cb.length-1);
var bY=cb.substring(0,cb.lastIndexOf(k));
var bX=bT;

if(!qx.Class.implementsInterface(bX,qx.data.IListData)){bX=ca[m+qx.lang.String.firstUp(bY)]();
}
if(bW==h){bW=bX.length-1;
}
if(bX!=null){bX.setItem(bW,bV);
}}else{ca[a+qx.lang.String.firstUp(cb)](bV);
}}},__bm:function(cc,cd){var cg=cd.split(d);
var ch=cc;
for(var i=0;i<cg.length-1;i++){try{var cf=cg[i];
if(cf.indexOf(f)==cf.length-1){var ce=cf.substring(cf.indexOf(k)+1,cf.length-1);
cf=cf.substring(0,cf.indexOf(k));
}if(cf!=l){ch=ch[m+qx.lang.String.firstUp(cf)]();
}if(ce!=null){if(ce==h){ce=ch.length-1;
}ch=ch.getItem(ce);
ce=null;
}}catch(ci){return null;
}}return ch;
},__bn:function(cj,ck,cl,cm,cn){cj=this.__br(cj,ck,cl,cm,cn);
if(cj===undefined){this.__bk(ck,cl);
}if(cj!==undefined){try{this.__bl(ck,cl,cj);
if(cm&&cm.onUpdate){cm.onUpdate(cn,ck,cj);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cm&&cm.onSetFail){cm.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cj+" on "+ck+". Error message: "+e);
}}}},__bo:function(co){var cp=[];
for(var i=0;i<co.length;i++){var name=co[i];
if(qx.lang.String.endsWith(name,f)){var cq=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cq!==h){if(cq==l||isNaN(parseInt(cq,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){co[i]=name.substring(0,name.indexOf(k));
cp[i]=l;
cp[i+1]=cq;
co.splice(i+1,0,D);
i++;
}else{cp[i]=cq;
co.splice(i,1,D);
}}else{cp[i]=l;
}}return cp;
},__bp:function(cr,cs,ct,cu,cv,cw){var cx;
var cz=function(cA,e){if(cA!==l){if(cA===h){cA=cr.length-1;
}var cD=cr.getItem(cA);
if(cD===undefined){qx.data.SingleValueBinding.__bk(ct,cu);
}var cB=e.getData().start;
var cC=e.getData().end;

if(cA<cB||cA>cC){return;
}}else{var cD=e.getData();
}cD=qx.data.SingleValueBinding.__br(cD,ct,cu,cv,cr);
try{if(cD!==undefined){qx.data.SingleValueBinding.__bl(ct,cu,cD);
}else{qx.data.SingleValueBinding.__bk(ct,cu);
}if(cv&&cv.onUpdate){cv.onUpdate(cr,ct,cD);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cv&&cv.onSetFail){cv.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cD+" on "+ct+". Error message: "+e);
}}};
if(!cw){cw=l;
}cz=qx.lang.Function.bind(cz,cr,cw);
var cy=cr.addListener(cs,cz);
return cy;
},__bq:function(cE,cF,cG,cH,cI){if(this.__bg[cF.toHashCode()]===undefined){this.__bg[cF.toHashCode()]=[];
}this.__bg[cF.toHashCode()].push([cE,cF,cG,cH,cI]);
},__br:function(cJ,cK,cL,cM,cN){if(cM&&cM.converter){var cP;

if(cK.getModel){cP=cK.getModel();
}return cM.converter(cJ,cP,cN,cK);
}else{var cR=this.__bm(cK,cL);
var cS=cL.substring(cL.lastIndexOf(d)+1,cL.length);
if(cR==null){return cJ;
}var cQ=qx.Class.getPropertyDefinition(cR.constructor,cS);
var cO=cQ==null?l:cQ.check;
return this.__bt(cJ,cO);
}},__bs:function(cT,cU){var cV=qx.Class.getPropertyDefinition(cT.constructor,cU);

if(cV==null){return null;
}return cV.event;
},__bt:function(cW,cX){var cY=qx.lang.Type.getClass(cW);
if((cY==c||cY==b)&&(cX==x||cX==s)){cW=parseInt(cW,10);
}if((cY==A||cY==c||cY==q)&&cX==b){cW=cW+l;
}if((cY==c||cY==b)&&(cX==c||cX==u)){cW=parseFloat(cW);
}return cW;
},removeBindingFromObject:function(da,db){if(db.type==E){for(var i=0;i<db.sources.length;i++){if(db.sources[i]){db.sources[i].removeListenerById(db.listenerIds[i]);
}}for(var i=0;i<db.targets.length;i++){if(db.targets[i]){db.targets[i].removeListenerById(db.targetListenerIds[i]);
}}}else{da.removeListenerById(db);
}var dc=this.__bg[da.toHashCode()];
if(dc!=undefined){for(var i=0;i<dc.length;i++){if(dc[i][0]==db){qx.lang.Array.remove(dc,dc[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(dd){var de=this.__bg[dd.toHashCode()];

if(de!=undefined){for(var i=de.length-1;i>=0;i--){this.removeBindingFromObject(dd,de[i][0]);
}}},getAllBindingsForObject:function(df){if(this.__bg[df.toHashCode()]===undefined){this.__bg[df.toHashCode()]=[];
}return this.__bg[df.toHashCode()];
},removeAllBindings:function(){for(var dh in this.__bg){var dg=qx.core.ObjectRegistry.fromHashCode(dh);
if(dg==null){delete this.__bg[dh];
continue;
}this.removeAllBindingsForObject(dg);
}this.__bg={};
},getAllBindings:function(){return this.__bg;
},showBindingInLog:function(di,dj){var dl;
for(var i=0;i<this.__bg[di.toHashCode()].length;i++){if(this.__bg[di.toHashCode()][i][0]==dj){dl=this.__bg[di.toHashCode()][i];
break;
}}
if(dl===undefined){var dk=p;
}else{var dk=r+dl[1]+B+dl[2]+y+dl[3]+B+dl[4]+z;
}qx.log.Logger.debug(dk);
},showAllBindingsInLog:function(){for(var dn in this.__bg){var dm=qx.core.ObjectRegistry.fromHashCode(dn);

for(var i=0;i<this.__bg[dn].length;i++){this.showBindingInLog(dm,this.__bg[dn][i][0]);
}}}}});
})();
(function(){var k="source",j="scale",i="engine.name",h="no-repeat",g="",f="mshtml",e="backgroundImage",d="webkit",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{tagNameHint:null,_applyProperty:function(name,l){qx.html.Element.prototype._applyProperty.call(this,name,l);

if(name===k){var p=this.getDomElement();
var m=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(e)){m.backgroundPosition=null;
m.backgroundRepeat=null;
}var n=this._getProperty(k);
var o=this._getProperty(j);
var q=o?j:h;
if(n!=null){n=n||null;
qx.bom.element.Decoration.update(p,n,q,m);
}}},_removeProperty:function(r,s){if(r==k){this._setProperty(r,g,s);
}else{this._setProperty(r,null,s);
}},_createDomElement:function(){var u=this._getProperty(j);
var v=u?j:h;

if((qx.core.Environment.get(i)==f)){var t=this._getProperty(k);

if(this.tagNameHint!=null){this.setNodeName(this.tagNameHint);
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v,t));
}}else{this.setNodeName(qx.bom.element.Decoration.getTagName(v));
}return qx.html.Element.prototype._createDomElement.call(this);
},_copyData:function(w){return qx.html.Element.prototype._copyData.call(this,true);
},setSource:function(x){this._setProperty(k,x);
return this;
},getSource:function(){return this._getProperty(k);
},resetSource:function(){if((qx.core.Environment.get(i)==d)){this._setProperty(k,a);
}else{this._removeProperty(k,true);
}return this;
},setScale:function(y){this._setProperty(j,y);
return this;
},getScale:function(){return this._getProperty(j);
}}});
})();
(function(){var p="head",o="text/css",n="html.stylesheet.removeimport",m="html.stylesheet.deleterule",l="stylesheet",k="html.stylesheet.addimport",j="html.stylesheet.insertrule",h="}",g="html.stylesheet.createstylesheet",f='@import "',c="{",e='";',d="qx.bom.Stylesheet",b="link",a="style";
qx.Bootstrap.define(d,{statics:{includeFile:function(q,r){if(!r){r=document;
}var s=r.createElement(b);
s.type=o;
s.rel=l;
var u=qx.util.ResourceManager.getInstance().toUri(q);

if(u!==q){qx.log.Logger.warn("qx.bom.Stylesheet.includeFile: Resource IDs will no "+"longer be resolved, please call this method "+"with a valid URI as the first argument!");
}s.href=u;
var t=r.getElementsByTagName(p)[0];
t.appendChild(s);
},createElement:function(v){if(qx.core.Environment.get(g)){var w=document.createStyleSheet();

if(v){w.cssText=v;
}return w;
}else{var x=document.createElement(a);
x.type=o;

if(v){x.appendChild(document.createTextNode(v));
}document.getElementsByTagName(p)[0].appendChild(x);
return x.sheet;
}},addRule:function(y,z,A){if(qx.core.Environment.get(j)){y.insertRule(z+c+A+h,y.cssRules.length);
}else{y.addRule(z,A);
}},removeRule:function(B,C){if(qx.core.Environment.get(m)){var D=B.cssRules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.deleteRule(i);
}}}else{var D=B.rules;
var E=D.length;

for(var i=E-1;i>=0;--i){if(D[i].selectorText==C){B.removeRule(i);
}}}},removeAllRules:function(F){if(qx.core.Environment.get(m)){var G=F.cssRules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.deleteRule(i);
}}else{var G=F.rules;
var H=G.length;

for(var i=H-1;i>=0;i--){F.removeRule(i);
}}},addImport:function(I,J){if(qx.core.Environment.get(k)){I.addImport(J);
}else{I.insertRule(f+J+e,I.cssRules.length);
}},removeImport:function(K,L){if(qx.core.Environment.get(n)){var M=K.imports;
var O=M.length;

for(var i=O-1;i>=0;i--){if(M[i].href==L||M[i].href==qx.util.Uri.getAbsolute(L)){K.removeImport(i);
}}}else{var N=K.cssRules;
var O=N.length;

for(var i=O-1;i>=0;i--){if(N[i].href==L){K.deleteRule(i);
}}}},removeAllImports:function(P){if(qx.core.Environment.get(n)){var Q=P.imports;
var S=Q.length;

for(var i=S-1;i>=0;i--){P.removeImport(i);
}}else{var R=P.cssRules;
var S=R.length;

for(var i=S-1;i>=0;i--){if(R[i].type==R[i].IMPORT_RULE){P.deleteRule(i);
}}}}}});
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
(function(){var k="popup",j="list",i="popupOpen",h="",g="mousewheel",f="PageUp",d="blur",c="mousedown",b="one",a="Escape",x="_applyMaxListHeight",w="Function",v="visible",u="changeSelection",t="middle",s="qx.ui.form.AbstractSelectBox",r="resize",q="changeVisibility",p="keypress",o="PageDown",m="mouseup",n="abstract",l="Number";
qx.Class.define(s,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.form.MForm],implement:[qx.ui.form.IForm],type:n,construct:function(){qx.ui.core.Widget.call(this);
var z=new qx.ui.layout.HBox();
this._setLayout(z);
z.setAlignY(t);
this.addListener(p,this._onKeyPress);
this.addListener(d,this._onBlur,this);
var y=qx.core.Init.getApplication().getRoot();
y.addListener(g,this._onMousewheel,this,true);
this.addListener(r,this._onResize,this);
},properties:{focusable:{refine:true,init:true},width:{refine:true,init:120},maxListHeight:{check:l,apply:x,nullable:true,init:200},format:{check:w,init:function(A){return this._defaultFormat(A);
},nullable:true}},members:{_createChildControlImpl:function(B,C){var D;

switch(B){case j:D=new qx.ui.form.List().set({focusable:false,keepFocus:true,height:null,width:null,maxHeight:this.getMaxListHeight(),selectionMode:b,quickSelection:true});
D.addListener(u,this._onListChangeSelection,this);
D.addListener(c,this._onListMouseDown,this);
break;
case k:D=new qx.ui.popup.Popup(new qx.ui.layout.VBox);
D.setAutoHide(false);
D.setKeepActive(true);
D.addListener(m,this.close,this);
D.add(this.getChildControl(j));
D.addListener(q,this._onPopupChangeVisibility,this);
break;
}return D||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,B);
},_applyMaxListHeight:function(E,F){this.getChildControl(j).setMaxHeight(E);
},getChildrenContainer:function(){return this.getChildControl(j);
},open:function(){var G=this.getChildControl(k);
G.placeToWidget(this,true);
G.show();
},close:function(){this.getChildControl(k).hide();
},toggle:function(){var H=this.getChildControl(k).isVisible();

if(H){this.close();
}else{this.open();
}},_defaultFormat:function(I){var J=I?I.getLabel():h;
var K=I?I.getRich():false;

if(K){J=J.replace(/<[^>]+?>/g,h);
J=qx.bom.String.unescape(J);
}return J;
},_onBlur:function(e){this.close();
},_onKeyPress:function(e){var L=e.getKeyIdentifier();
var M=this.getChildControl(k);
if(M.isHidden()&&(L==o||L==f)){e.stopPropagation();
}else if(!M.isHidden()&&L==a){this.close();
e.stop();
}else{this.getChildControl(j).handleKeyPress(e);
}},_onMousewheel:function(e){var O=e.getTarget();
var N=this.getChildControl(k,true);

if(N==null){return;
}
if(qx.ui.core.Widget.contains(N,O)){e.preventDefault();
}else{this.close();
}},_onResize:function(e){this.getChildControl(k).setMinWidth(e.getData().width);
},_onListChangeSelection:function(e){throw new Error("Abstract method: _onListChangeSelection()");
},_onListMouseDown:function(e){throw new Error("Abstract method: _onListMouseDown()");
},_onPopupChangeVisibility:function(e){e.getData()==v?this.addState(i):this.removeState(i);
}},destruct:function(){var P=qx.core.Init.getApplication().getRoot();

if(P){P.removeListener(g,this._onMousewheel,this,true);
}}});
})();
(function(){var e="Integer",d="interval",c="__lh",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__lh=new qx.event.Timer(this.getInterval());
this.__lh.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__lh:null,__oJ:null,start:function(){this.__lh.setInterval(this.getFirstInterval());
this.__lh.start();
},stop:function(){this.__lh.stop();
this.__oJ=null;
},_onInterval:function(){this.__lh.stop();

if(this.__oJ==null){this.__oJ=this.getInterval();
}this.__oJ=Math.max(this.getMinimum(),this.__oJ-this.getDecrease());
this.__lh.setInterval(this.__oJ);
this.__lh.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var g="'",f="qx.bom.webfonts.WebFont",e="",d="changeStatus",c=" ",b="_applySources",a="qx.event.type.Data";
qx.Class.define(f,{extend:qx.bom.Font,events:{"changeStatus":a},properties:{sources:{nullable:true,apply:b}},members:{__lq:null,_applySources:function(h,j){var n=[];

for(var i=0,l=h.length;i<l;i++){var m=this._quoteFontFamily(h[i].family);
n.push(m);
var k=h[i].source;
qx.bom.webfonts.Manager.getInstance().require(m,k,this._onWebFontChangeStatus,this);
}this.setFamily(n.concat(this.getFamily()));
},_onWebFontChangeStatus:function(o){var p=o.getData();
this.fireDataEvent(d,p);
},_quoteFontFamily:function(q){q=q.replace(/["']/g,e);

if(q.indexOf(c)>0){q=g+q+g;
}return q;
}}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var s="plugin.activex",r="MSXML2.DOMDocument.3.0",q="",p='<\?xml version="1.0" encoding="utf-8"?>\n<',o="qx.xml.Document",n=" />",m="xml.domparser",k="SelectionLanguage",j="'",h="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",g="xml.implementation",f=" xmlns='",b="text/xml",a="XPath",e="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(o,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(t){if(t.nodeType===9){return t.documentElement.nodeName!==d;
}else if(t.ownerDocument){return this.isXmlDocument(t.ownerDocument);
}else{return false;
}},create:function(u,v){if(qx.core.Environment.get(s)){var w=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==r){w.setProperty(k,a);
}
if(v){var x=p;
x+=v;

if(u){x+=f+u+j;
}x+=n;
w.loadXML(x);
}return w;
}
if(qx.core.Environment.get(g)){return document.implementation.createDocument(u||q,v||q,null);
}throw new Error("No XML implementation available!");
},fromString:function(y){if(qx.core.Environment.get(s)){var A=qx.xml.Document.create();
A.loadXML(y);
return A;
}
if(qx.core.Environment.get(m)){var z=new DOMParser();
return z.parseFromString(y,b);
}throw new Error("No XML implementation available!");
}},defer:function(B){if(qx.core.Environment.get(s)){var C=[e,r];
var D=[c,h];

for(var i=0,l=C.length;i<l;i++){try{new ActiveXObject(C[i]);
new ActiveXObject(D[i]);
}catch(E){continue;
}B.DOMDOC=C[i];
B.XMLHTTP=D[i];
break;
}}}});
})();
(function(){var b="qx.ui.core.queue.Visibility",a="visibility";
qx.Class.define(b,{statics:{__hK:[],__cP:{},remove:function(c){delete this.__cP[c.$$hash];
qx.lang.Array.remove(this.__hK,c);
},isVisible:function(d){return this.__cP[d.$$hash]||false;
},__hL:function(e){var g=this.__cP;
var f=e.$$hash;
var h;
if(e.isExcluded()){h=false;
}else{var parent=e.$$parent;

if(parent){h=this.__hL(parent);
}else{h=e.isRootWidget();
}}return g[f]=h;
},add:function(j){var k=this.__hK;

if(qx.lang.Array.contains(k,j)){return;
}k.unshift(j);
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var o=this.__hK;
var p=this.__cP;
for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;

if(p[n]!=null){o[i].addChildrenToQueue(o);
}}var l={};

for(var i=o.length-1;i>=0;i--){var n=o[i].$$hash;
l[n]=p[n];
p[n]=null;
}for(var i=o.length-1;i>=0;i--){var m=o[i];
var n=m.$$hash;
o.splice(i,1);
if(p[n]==null){this.__hL(m);
}if(p[n]&&p[n]!=l[n]){m.checkAppearanceNeeds();
}}this.__hK=[];
}}});
})();
(function(){var r="left",q="top",p="_applyLayoutChange",o="hAlign",n="flex",m="vAlign",h="Integer",g="minWidth",f="width",e="minHeight",b="qx.ui.layout.Grid",d="height",c="maxHeight",a="maxWidth";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(s,t){qx.ui.layout.Abstract.call(this);
this.__js=[];
this.__jt=[];

if(s){this.setSpacingX(s);
}
if(t){this.setSpacingY(t);
}},properties:{spacingX:{check:h,init:0,apply:p},spacingY:{check:h,init:0,apply:p}},members:{__ju:null,__js:null,__jt:null,__jv:null,__jw:null,__jx:null,__jy:null,__jz:null,__jA:null,verifyLayoutProperty:null,__jB:function(){var B=[];
var A=[];
var C=[];
var w=-1;
var v=-1;
var E=this._getLayoutChildren();

for(var i=0,l=E.length;i<l;i++){var z=E[i];
var D=z.getLayoutProperties();
var F=D.row;
var u=D.column;
D.colSpan=D.colSpan||1;
D.rowSpan=D.rowSpan||1;
if(F==null||u==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+z+"' must be defined!");
}
if(B[F]&&B[F][u]){throw new Error("Cannot add widget '"+z+"'!. "+"There is already a widget '"+B[F][u]+"' in this cell ("+F+", "+u+") for '"+this+"'");
}
for(var x=u;x<u+D.colSpan;x++){for(var y=F;y<F+D.rowSpan;y++){if(B[y]==undefined){B[y]=[];
}B[y][x]=z;
v=Math.max(v,x);
w=Math.max(w,y);
}}
if(D.rowSpan>1){C.push(z);
}
if(D.colSpan>1){A.push(z);
}}for(var y=0;y<=w;y++){if(B[y]==undefined){B[y]=[];
}}this.__ju=B;
this.__jv=A;
this.__jw=C;
this.__jx=w;
this.__jy=v;
this.__jz=null;
this.__jA=null;
delete this._invalidChildrenCache;
},_setRowData:function(G,H,I){var J=this.__js[G];

if(!J){this.__js[G]={};
this.__js[G][H]=I;
}else{J[H]=I;
}},_setColumnData:function(K,L,M){var N=this.__jt[K];

if(!N){this.__jt[K]={};
this.__jt[K][L]=M;
}else{N[L]=M;
}},setSpacing:function(O){this.setSpacingY(O);
this.setSpacingX(O);
return this;
},setColumnAlign:function(P,Q,R){this._setColumnData(P,o,Q);
this._setColumnData(P,m,R);
this._applyLayoutChange();
return this;
},getColumnAlign:function(S){var T=this.__jt[S]||{};
return {vAlign:T.vAlign||q,hAlign:T.hAlign||r};
},setRowAlign:function(U,V,W){this._setRowData(U,o,V);
this._setRowData(U,m,W);
this._applyLayoutChange();
return this;
},getRowAlign:function(X){var Y=this.__js[X]||{};
return {vAlign:Y.vAlign||q,hAlign:Y.hAlign||r};
},getCellWidget:function(ba,bb){if(this._invalidChildrenCache){this.__jB();
}var ba=this.__ju[ba]||{};
return ba[bb]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__jB();
}return this.__jx+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__jB();
}return this.__jy+1;
},getCellAlign:function(bc,bd){var bj=q;
var bh=r;
var bi=this.__js[bc];
var bf=this.__jt[bd];
var be=this.__ju[bc][bd];

if(be){var bg={vAlign:be.getAlignY(),hAlign:be.getAlignX()};
}else{bg={};
}if(bg.vAlign){bj=bg.vAlign;
}else if(bi&&bi.vAlign){bj=bi.vAlign;
}else if(bf&&bf.vAlign){bj=bf.vAlign;
}if(bg.hAlign){bh=bg.hAlign;
}else if(bf&&bf.hAlign){bh=bf.hAlign;
}else if(bi&&bi.hAlign){bh=bi.hAlign;
}return {vAlign:bj,hAlign:bh};
},setColumnFlex:function(bk,bl){this._setColumnData(bk,n,bl);
this._applyLayoutChange();
return this;
},getColumnFlex:function(bm){var bn=this.__jt[bm]||{};
return bn.flex!==undefined?bn.flex:0;
},setRowFlex:function(bo,bp){this._setRowData(bo,n,bp);
this._applyLayoutChange();
return this;
},getRowFlex:function(bq){var br=this.__js[bq]||{};
var bs=br.flex!==undefined?br.flex:0;
return bs;
},setColumnMaxWidth:function(bt,bu){this._setColumnData(bt,a,bu);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(bv){var bw=this.__jt[bv]||{};
return bw.maxWidth!==undefined?bw.maxWidth:Infinity;
},setColumnWidth:function(bx,by){this._setColumnData(bx,f,by);
this._applyLayoutChange();
return this;
},getColumnWidth:function(bz){var bA=this.__jt[bz]||{};
return bA.width!==undefined?bA.width:null;
},setColumnMinWidth:function(bB,bC){this._setColumnData(bB,g,bC);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(bD){var bE=this.__jt[bD]||{};
return bE.minWidth||0;
},setRowMaxHeight:function(bF,bG){this._setRowData(bF,c,bG);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(bH){var bI=this.__js[bH]||{};
return bI.maxHeight||Infinity;
},setRowHeight:function(bJ,bK){this._setRowData(bJ,d,bK);
this._applyLayoutChange();
return this;
},getRowHeight:function(bL){var bM=this.__js[bL]||{};
return bM.height!==undefined?bM.height:null;
},setRowMinHeight:function(bN,bO){this._setRowData(bN,e,bO);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(bP){var bQ=this.__js[bP]||{};
return bQ.minHeight||0;
},__jC:function(bR){var bV=bR.getSizeHint();
var bU=bR.getMarginLeft()+bR.getMarginRight();
var bT=bR.getMarginTop()+bR.getMarginBottom();
var bS={height:bV.height+bT,width:bV.width+bU,minHeight:bV.minHeight+bT,minWidth:bV.minWidth+bU,maxHeight:bV.maxHeight+bT,maxWidth:bV.maxWidth+bU};
return bS;
},_fixHeightsRowSpan:function(bW){var ce=this.getSpacingY();

for(var i=0,l=this.__jw.length;i<l;i++){var cl=this.__jw[i];
var ch=this.__jC(cl);
var ca=cl.getLayoutProperties();
var cg=ca.row;
var cq=ce*(ca.rowSpan-1);
var bX=cq;
var cb={};

for(var j=0;j<ca.rowSpan;j++){var cf=ca.row+j;
var cp=bW[cf];
var cr=this.getRowFlex(cf);

if(cr>0){cb[cf]={min:cp.minHeight,value:cp.height,max:cp.maxHeight,flex:cr};
}cq+=cp.height;
bX+=cp.minHeight;
}if(cq<ch.height){if(!qx.lang.Object.isEmpty(cb)){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.height,cq);

for(var k=0;k<ca.rowSpan;k++){var cn=cc[cg+k]?cc[cg+k].offset:0;
bW[cg+k].height+=cn;
}}else{var ck=ce*(ca.rowSpan-1);
var ci=ch.height-ck;
var co=Math.floor(ci/ca.rowSpan);
var cm=0;
var bY=0;

for(var k=0;k<ca.rowSpan;k++){var cd=bW[cg+k].height;
cm+=cd;

if(cd<co){bY++;
}}var cj=Math.floor((ci-cm)/bY);
for(var k=0;k<ca.rowSpan;k++){if(bW[cg+k].height<co){bW[cg+k].height+=cj;
}}}}if(bX<ch.minHeight){var cc=qx.ui.layout.Util.computeFlexOffsets(cb,ch.minHeight,bX);

for(var j=0;j<ca.rowSpan;j++){var cn=cc[cg+j]?cc[cg+j].offset:0;
bW[cg+j].minHeight+=cn;
}}}},_fixWidthsColSpan:function(cs){var cw=this.getSpacingX();

for(var i=0,l=this.__jv.length;i<l;i++){var ct=this.__jv[i];
var cv=this.__jC(ct);
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
}}}},_getRowHeights:function(){if(this.__jz!=null){return this.__jz;
}var cP=[];
var cI=this.__jx;
var cH=this.__jy;

for(var cQ=0;cQ<=cI;cQ++){var cJ=0;
var cL=0;
var cK=0;

for(var cO=0;cO<=cH;cO++){var cG=this.__ju[cQ][cO];

if(!cG){continue;
}var cM=cG.getLayoutProperties().rowSpan||0;

if(cM>1){continue;
}var cN=this.__jC(cG);

if(this.getRowFlex(cQ)>0){cJ=Math.max(cJ,cN.minHeight);
}else{cJ=Math.max(cJ,cN.height);
}cL=Math.max(cL,cN.height);
}var cJ=Math.max(cJ,this.getRowMinHeight(cQ));
var cK=this.getRowMaxHeight(cQ);

if(this.getRowHeight(cQ)!==null){var cL=this.getRowHeight(cQ);
}else{var cL=Math.max(cJ,Math.min(cL,cK));
}cP[cQ]={minHeight:cJ,height:cL,maxHeight:cK};
}
if(this.__jw.length>0){this._fixHeightsRowSpan(cP);
}this.__jz=cP;
return cP;
},_getColWidths:function(){if(this.__jA!=null){return this.__jA;
}var cV=[];
var cS=this.__jy;
var cU=this.__jx;

for(var db=0;db<=cS;db++){var cY=0;
var cX=0;
var cT=Infinity;

for(var dc=0;dc<=cU;dc++){var cR=this.__ju[dc][db];

if(!cR){continue;
}var cW=cR.getLayoutProperties().colSpan||0;

if(cW>1){continue;
}var da=this.__jC(cR);

if(this.getColumnFlex(db)>0){cX=Math.max(cX,da.minWidth);
}else{cX=Math.max(cX,da.width);
}cY=Math.max(cY,da.width);
}cX=Math.max(cX,this.getColumnMinWidth(db));
cT=this.getColumnMaxWidth(db);

if(this.getColumnWidth(db)!==null){var cY=this.getColumnWidth(db);
}else{var cY=Math.max(cX,Math.min(cY,cT));
}cV[db]={minWidth:cX,width:cY,maxWidth:cT};
}
if(this.__jv.length>0){this._fixWidthsColSpan(cV);
}this.__jA=cV;
return cV;
},_getColumnFlexOffsets:function(dd){var de=this.getSizeHint();
var di=dd-de.width;

if(di==0){return {};
}var dg=this._getColWidths();
var df={};

for(var i=0,l=dg.length;i<l;i++){var dj=dg[i];
var dh=this.getColumnFlex(i);

if((dh<=0)||(dj.width==dj.maxWidth&&di>0)||(dj.width==dj.minWidth&&di<0)){continue;
}df[i]={min:dj.minWidth,value:dj.width,max:dj.maxWidth,flex:dh};
}return qx.ui.layout.Util.computeFlexOffsets(df,dd,de.width);
},_getRowFlexOffsets:function(dk){var dl=this.getSizeHint();
var dp=dk-dl.height;

if(dp==0){return {};
}var dq=this._getRowHeights();
var dm={};

for(var i=0,l=dq.length;i<l;i++){var dr=dq[i];
var dn=this.getRowFlex(i);

if((dn<=0)||(dr.height==dr.maxHeight&&dp>0)||(dr.height==dr.minHeight&&dp<0)){continue;
}dm[i]={min:dr.minHeight,value:dr.height,max:dr.maxHeight,flex:dn};
}return qx.ui.layout.Util.computeFlexOffsets(dm,dk,dl.height);
},renderLayout:function(ds,dt){if(this._invalidChildrenCache){this.__jB();
}var dH=qx.ui.layout.Util;
var dv=this.getSpacingX();
var dB=this.getSpacingY();
var dM=this._getColWidths();
var dL=this._getColumnFlexOffsets(ds);
var dw=[];
var dO=this.__jy;
var du=this.__jx;
var dN;

for(var dP=0;dP<=dO;dP++){dN=dL[dP]?dL[dP].offset:0;
dw[dP]=dM[dP].width+dN;
}var dE=this._getRowHeights();
var dG=this._getRowFlexOffsets(dt);
var dV=[];

for(var dC=0;dC<=du;dC++){dN=dG[dC]?dG[dC].offset:0;
dV[dC]=dE[dC].height+dN;
}var dW=0;

for(var dP=0;dP<=dO;dP++){var top=0;

for(var dC=0;dC<=du;dC++){var dJ=this.__ju[dC][dP];
if(!dJ){top+=dV[dC]+dB;
continue;
}var dx=dJ.getLayoutProperties();
if(dx.row!==dC||dx.column!==dP){top+=dV[dC]+dB;
continue;
}var dU=dv*(dx.colSpan-1);

for(var i=0;i<dx.colSpan;i++){dU+=dw[dP+i];
}var dK=dB*(dx.rowSpan-1);

for(var i=0;i<dx.rowSpan;i++){dK+=dV[dC+i];
}var dy=dJ.getSizeHint();
var dS=dJ.getMarginTop();
var dI=dJ.getMarginLeft();
var dF=dJ.getMarginBottom();
var dA=dJ.getMarginRight();
var dD=Math.max(dy.minWidth,Math.min(dU-dI-dA,dy.maxWidth));
var dT=Math.max(dy.minHeight,Math.min(dK-dS-dF,dy.maxHeight));
var dQ=this.getCellAlign(dC,dP);
var dR=dW+dH.computeHorizontalAlignOffset(dQ.hAlign,dD,dU,dI,dA);
var dz=top+dH.computeVerticalAlignOffset(dQ.vAlign,dT,dK,dS,dF);
dJ.renderLayout(dR,dz,dD,dT);
top+=dV[dC]+dB;
}dW+=dw[dP]+dv;
}},invalidateLayoutCache:function(){qx.ui.layout.Abstract.prototype.invalidateLayoutCache.call(this);
this.__jA=null;
this.__jz=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jB();
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
}},destruct:function(){this.__ju=this.__js=this.__jt=this.__jv=this.__jw=this.__jA=this.__jz=null;
}});
})();
(function(){var j="borderTopWidth",i="borderLeftWidth",h="engine.name",g="scroll",f="engine.version",e="marginTop",d="marginLeft",c="border-box",b="borderBottomWidth",a="borderRightWidth",E="auto",D="padding",C="browser.quirksmode",B="qx.bom.element.Location",A="paddingLeft",z="static",y="marginBottom",x="visible",w="BODY",v="opera",q="paddingBottom",r="paddingTop",o="gecko",p="marginRight",m="mshtml",n="position",k="margin",l="overflow",s="paddingRight",t="browser.documentmode",u="border";
qx.Class.define(B,{statics:{__ly:function(F,G){return qx.bom.element.Style.get(F,G,qx.bom.element.Style.COMPUTED_MODE,false);
},__lz:function(H,I){return parseInt(qx.bom.element.Style.get(H,I,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__lA:function(J){var M=0,top=0;
if(J.getBoundingClientRect&&qx.core.Environment.get(h)!=v){var L=qx.dom.Node.getWindow(J);
M-=qx.bom.Viewport.getScrollLeft(L);
top-=qx.bom.Viewport.getScrollTop(L);
}else{var K=qx.dom.Node.getDocument(J).body;
J=J.parentNode;
while(J&&J!=K){M+=J.scrollLeft;
top+=J.scrollTop;
J=J.parentNode;
}}return {left:M,top:top};
},__lB:qx.core.Environment.select(h,{"mshtml":function(N){var P=qx.dom.Node.getDocument(N);
var O=P.body;
var Q=0;
var top=0;
Q-=O.clientLeft+P.documentElement.clientLeft;
top-=O.clientTop+P.documentElement.clientTop;

if(!qx.core.Environment.get(C)){Q+=this.__lz(O,i);
top+=this.__lz(O,j);
}return {left:Q,top:top};
},"webkit":function(R){var T=qx.dom.Node.getDocument(R);
var S=T.body;
var U=S.offsetLeft;
var top=S.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<530.17){U+=this.__lz(S,i);
top+=this.__lz(S,j);
}return {left:U,top:top};
},"gecko":function(V){var W=qx.dom.Node.getDocument(V).body;
var X=W.offsetLeft;
var top=W.offsetTop;
if(parseFloat(qx.core.Environment.get(f))<1.9){X+=this.__lz(W,d);
top+=this.__lz(W,e);
}if(qx.bom.element.BoxSizing.get(W)!==c){X+=this.__lz(W,i);
top+=this.__lz(W,j);
}return {left:X,top:top};
},"default":function(Y){var ba=qx.dom.Node.getDocument(Y).body;
var bb=ba.offsetLeft;
var top=ba.offsetTop;
return {left:bb,top:top};
}}),__lC:qx.core.Environment.select(h,{"mshtml|webkit":function(bc){var be=qx.dom.Node.getDocument(bc);
if(bc.getBoundingClientRect){var bf=bc.getBoundingClientRect();
var bg=bf.left;
var top=bf.top;
}else{var bg=bc.offsetLeft;
var top=bc.offsetTop;
bc=bc.offsetParent;
var bd=be.body;
while(bc&&bc!=bd){bg+=bc.offsetLeft;
top+=bc.offsetTop;
bg+=this.__lz(bc,i);
top+=this.__lz(bc,j);
bc=bc.offsetParent;
}}return {left:bg,top:top};
},"gecko":function(bh){if(bh.getBoundingClientRect){var bk=bh.getBoundingClientRect();
var bl=Math.round(bk.left);
var top=Math.round(bk.top);
}else{var bl=0;
var top=0;
var bi=qx.dom.Node.getDocument(bh).body;
var bj=qx.bom.element.BoxSizing;

if(bj.get(bh)!==c){bl-=this.__lz(bh,i);
top-=this.__lz(bh,j);
}
while(bh&&bh!==bi){bl+=bh.offsetLeft;
top+=bh.offsetTop;
if(bj.get(bh)!==c){bl+=this.__lz(bh,i);
top+=this.__lz(bh,j);
}if(bh.parentNode&&this.__ly(bh.parentNode,l)!=x){bl+=this.__lz(bh.parentNode,i);
top+=this.__lz(bh.parentNode,j);
}bh=bh.offsetParent;
}}return {left:bl,top:top};
},"default":function(bm){var bo=0;
var top=0;
var bn=qx.dom.Node.getDocument(bm).body;
while(bm&&bm!==bn){bo+=bm.offsetLeft;
top+=bm.offsetTop;
bm=bm.offsetParent;
}return {left:bo,top:top};
}}),get:function(bp,bq){if(bp.tagName==w){var location=this.__lD(bp);
var bx=location.left;
var top=location.top;
}else{var br=this.__lB(bp);
var bw=this.__lC(bp);
var scroll=this.__lA(bp);
var bx=bw.left+br.left-scroll.left;
var top=bw.top+br.top-scroll.top;
}var bs=bx+bp.offsetWidth;
var bt=top+bp.offsetHeight;

if(bq){if(bq==D||bq==g){var bu=qx.bom.element.Overflow.getX(bp);

if(bu==g||bu==E){bs+=bp.scrollWidth-bp.offsetWidth+this.__lz(bp,i)+this.__lz(bp,a);
}var bv=qx.bom.element.Overflow.getY(bp);

if(bv==g||bv==E){bt+=bp.scrollHeight-bp.offsetHeight+this.__lz(bp,j)+this.__lz(bp,b);
}}
switch(bq){case D:bx+=this.__lz(bp,A);
top+=this.__lz(bp,r);
bs-=this.__lz(bp,s);
bt-=this.__lz(bp,q);
case g:bx-=bp.scrollLeft;
top-=bp.scrollTop;
bs-=bp.scrollLeft;
bt-=bp.scrollTop;
case u:bx+=this.__lz(bp,i);
top+=this.__lz(bp,j);
bs-=this.__lz(bp,a);
bt-=this.__lz(bp,b);
break;
case k:bx-=this.__lz(bp,d);
top-=this.__lz(bp,e);
bs+=this.__lz(bp,p);
bt+=this.__lz(bp,y);
break;
}}return {left:bx,top:top,right:bs,bottom:bt};
},__lD:function(by){var top=by.offsetTop;
var bz=by.offsetLeft;

if(qx.core.Environment.get(h)!==m||!((parseFloat(qx.core.Environment.get(f))<8||qx.core.Environment.get(t)<8)&&!qx.core.Environment.get(C))){top+=this.__lz(by,e);
bz+=this.__lz(by,d);
}
if(qx.core.Environment.get(h)===o){top+=this.__lz(by,i);
bz+=this.__lz(by,j);
}return {left:bz,top:top};
},getLeft:function(bA,bB){return this.get(bA,bB).left;
},getTop:function(bC,bD){return this.get(bC,bD).top;
},getRight:function(bE,bF){return this.get(bE,bF).right;
},getBottom:function(bG,bH){return this.get(bG,bH).bottom;
},getRelative:function(bI,bJ,bK,bL){var bN=this.get(bI,bK);
var bM=this.get(bJ,bL);
return {left:bN.left-bM.left,top:bN.top-bM.top,right:bN.right-bM.right,bottom:bN.bottom-bM.bottom};
},getPosition:function(bO){return this.getRelative(bO,this.getOffsetParent(bO));
},getOffsetParent:function(bP){var bR=bP.offsetParent||document.body;
var bQ=qx.bom.element.Style;

while(bR&&(!/^body|html$/i.test(bR.tagName)&&bQ.get(bR,n)===z)){bR=bR.offsetParent;
}return bR;
}}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
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
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.type.Array";
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(b){qx.type.BaseArray.apply(this,arguments);
},members:{clone:qx.type.BaseArray.prototype.concat,insertAt:function(c,i){this.splice(i,0,c);
return this;
},insertBefore:function(d,e){var i=this.indexOf(e);

if(i==-1){this.push(d);
}else{this.splice(i,0,d);
}return this;
},insertAfter:function(f,g){var i=this.indexOf(g);

if(i==-1||i==(this.length-1)){this.push(f);
}else{this.splice(i+1,0,f);
}return this;
},removeAt:function(i){return this.splice(i,1)[0];
},removeAll:function(){this.length=0;
return this;
},append:function(h){var j=h;
if(h instanceof qx.type.Array){j=[];

for(var i=0;i<h.length;i++){j[i]=h[i];
}}Array.prototype.push.apply(this,j);
return this;
},remove:function(k){var i=this.indexOf(k);

if(i!=-1){this.splice(i,1);
return k;
}},contains:function(l){return this.indexOf(l)!==-1;
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__jD=qx.$$translations||{};
this.__jE=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__jF=m;
this.setLocale(m||this.__jG);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__jG:f,__jH:null,__jI:null,__jD:null,__jE:null,__jF:null,getLanguage:function(){return this.__jI;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(B){var D=[];

for(var C in this.__jE){if(C!=this.__jG){if(this.__jE[C]===null&&!B){continue;
}D.push(C);
}}return D;
},__jJ:function(E){var G;

if(E==null){return null;
}var F=E.indexOf(l);

if(F==-1){G=E;
}else{G=E.substring(0,F);
}return G;
},_applyLocale:function(H,I){this.__jH=H;
this.__jI=this.__jJ(H);
},addTranslation:function(J,K){var L=this.__jD;

if(L[J]){for(var M in K){L[J][M]=K[M];
}}else{L[J]=K;
}},addLocale:function(N,O){var P=this.__jE;

if(P[N]){for(var Q in O){P[N][Q]=O[Q];
}}else{P[N]=O;
}},translate:function(R,S,T){var U=this.__jD;
return this.__jK(U,R,S,T);
},localize:function(V,W,X){var Y=this.__jE;
return this.__jK(Y,V,W,X);
},__jK:function(ba,bb,bc,bd){var be;

if(!ba){return bb;
}
if(bd){var bg=this.__jJ(bd);
}else{bd=this.__jH;
bg=this.__jI;
}if(!be&&ba[bd]){be=ba[bd][bb];
}if(!be&&ba[bg]){be=ba[bg][bb];
}if(!be&&ba[this.__jG]){be=ba[this.__jG][bb];
}
if(!be){be=bb;
}
if(bc.length>0){var bf=[];

for(var i=0;i<bc.length;i++){var bh=bc[i];

if(bh&&bh.translate){bf[i]=bh.translate();
}else{bf[i]=bh;
}}be=qx.lang.String.format(be,bf);
}
if(qx.core.Environment.get(d)){be=new qx.locale.LocalizedString(be,bb,bc);
}return be;
}},destruct:function(){this.__jD=this.__jE=null;
}});
})();
(function(){var j="css.textoverflow",i="html.xul",h="auto",g="0",f="inherit",e="text",d="value",c="",b="hidden",a="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",B="nowrap",A="div",z="normal",y="engine.name",x="block",w="label",v="px",u="crop",t="gecko",s="end",q="100%",r="visible",o="qx.bom.Label",p="ellipsis",m="engine.version",n="mshtml",k="-1000px",l="absolute";
qx.Class.define(o,{statics:{__iF:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__iG:function(){var C=this.__iI(false);
document.body.insertBefore(C,document.body.firstChild);
return this._textElement=C;
},__iH:function(){var D=this.__iI(true);
document.body.insertBefore(D,document.body.firstChild);
return this._htmlElement=D;
},__iI:function(E){var F=qx.bom.Element.create(A);
var G=F.style;
G.width=G.height=h;
G.left=G.top=k;
G.visibility=b;
G.position=l;
G.overflow=r;
G.display=x;

if(E){G.whiteSpace=z;
}else{G.whiteSpace=B;

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var H=document.createElementNS(a,w);
var G=H.style;
G.padding=g;
G.margin=g;
G.width=h;

for(var I in this.__iF){G[I]=f;
}F.appendChild(H);
}}return F;
},__iJ:function(J){var K={};

if(J){K.whiteSpace=z;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){K.display=x;
}else{K.overflow=b;
K.whiteSpace=B;
K[qx.core.Environment.get(j)]=p;
}return K;
},create:function(content,L,M){if(!M){M=window;
}var N=M.document.createElement(A);

if(L){N.useHtml=true;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){var P=M.document.createElementNS(a,w);
var O=P.style;
O.cursor=f;
O.color=f;
O.overflow=b;
O.maxWidth=q;
O.padding=g;
O.margin=g;
O.width=h;
for(var Q in this.__iF){P.style[Q]=f;
}P.setAttribute(u,s);
N.appendChild(P);
}else{qx.bom.element.Style.setStyles(N,this.__iJ(L));
}
if(content){this.setValue(N,content);
}return N;
},setValue:function(R,S){S=S||c;

if(R.useHtml){R.innerHTML=S;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){R.firstChild.setAttribute(d,S);
}else{qx.bom.element.Attribute.set(R,e,S);
}},getValue:function(T){if(T.useHtml){return T.innerHTML;
}else if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){return T.firstChild.getAttribute(d)||c;
}else{return qx.bom.element.Attribute.get(T,e);
}},getHtmlSize:function(content,U,V){var W=this._htmlElement||this.__iH();
W.style.width=V!=undefined?V+v:h;
W.innerHTML=content;
return this.__iK(W,U);
},getTextSize:function(X,Y){var ba=this._textElement||this.__iG();

if(!qx.core.Environment.get(j)&&qx.core.Environment.get(i)){ba.firstChild.setAttribute(d,X);
}else{qx.bom.element.Attribute.set(ba,e,X);
}return this.__iK(ba,Y);
},__iK:function(bb,bc){var bd=this.__iF;

if(!bc){bc={};
}
for(var be in bd){bb.style[be]=bc[be]||c;
}var bf=qx.bom.element.Dimension.getSize(bb);
if((qx.core.Environment.get(y)==t)){bf.width++;
}if((qx.core.Environment.get(y)==n)&&parseFloat(qx.core.Environment.get(m))>=9){bf.width++;
}return bf;
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__mI=qx.Bootstrap.bind(this.__mM,this);
this.__mJ=document.createElement(f);
},statics:{TIMEOUT:15},members:{__mK:null,__mL:null,__bD:null,__bE:null,__mI:null,__mJ:null,load:function(q,r,s){if(this.__mK){throw new Error("Another request is still running!");
}this.__mK=true;
this.__mL=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__mJ;
this.__bD=r||null;
this.__bE=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__mI;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__mK){this.dispose(a);
}},dispose:function(status){if(this.__mL){return;
}this.__mL=true;
var x=this.__mJ;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__mK;
if(this.__bD){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bD.call(self.__bE,status);
delete self.__bD;
}),0);
}else{this.__bD.call(this.__bE,status);
delete this.__bD;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__mM:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__mJ.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cP:null,__cQ:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cP=b;
this.__cQ=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cP=this.__cP;
f.__cQ=this.__cQ;
return f;
},getData:function(){return this.__cP;
},getOldData:function(){return this.__cQ;
}},destruct:function(){this.__cP=this.__cQ=null;
}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__ef:null,__eg:null,__eh:null,__ei:null,__ej:null,__ek:null,__el:null,__em:null,__en:null,__eo:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__eC(S);

if(T){this.setActive(T);
}},__dH:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__ep:function(){if(this._windowFocused){this._windowFocused=false;
this.__dH(this._window,null,g,false);
}},__eq:function(){if(!this._windowFocused){this._windowFocused=true;
this.__dH(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__ef=qx.lang.Function.listener(this.__ew,this);
this.__eg=qx.lang.Function.listener(this.__ex,this);
this.__eh=qx.lang.Function.listener(this.__ev,this);
this.__ei=qx.lang.Function.listener(this.__eu,this);
this.__ej=qx.lang.Function.listener(this.__er,this);
qx.bom.Event.addNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eh,true);
qx.bom.Event.addNativeListener(this._window,g,this.__ei,true);
qx.bom.Event.addNativeListener(this._window,y,this.__ej,true);
},"mshtml":function(){this.__ef=qx.lang.Function.listener(this.__ew,this);
this.__eg=qx.lang.Function.listener(this.__ex,this);
this.__el=qx.lang.Function.listener(this.__es,this);
this.__em=qx.lang.Function.listener(this.__et,this);
this.__ek=qx.lang.Function.listener(this.__ez,this);
qx.bom.Event.addNativeListener(this._document,i,this.__ef);
qx.bom.Event.addNativeListener(this._document,h,this.__eg);
qx.bom.Event.addNativeListener(this._document,b,this.__el);
qx.bom.Event.addNativeListener(this._document,a,this.__em);
qx.bom.Event.addNativeListener(this._document,d,this.__ek);
},"webkit":function(){this.__ef=qx.lang.Function.listener(this.__ew,this);
this.__eg=qx.lang.Function.listener(this.__ex,this);
this.__em=qx.lang.Function.listener(this.__et,this);
this.__eh=qx.lang.Function.listener(this.__ev,this);
this.__ei=qx.lang.Function.listener(this.__eu,this);
this.__ek=qx.lang.Function.listener(this.__ez,this);
qx.bom.Event.addNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.addNativeListener(this._document,d,this.__ek,false);
qx.bom.Event.addNativeListener(this._window,c,this.__em,true);
qx.bom.Event.addNativeListener(this._window,f,this.__eh,true);
qx.bom.Event.addNativeListener(this._window,g,this.__ei,true);
},"opera":function(){this.__ef=qx.lang.Function.listener(this.__ew,this);
this.__eg=qx.lang.Function.listener(this.__ex,this);
this.__el=qx.lang.Function.listener(this.__es,this);
this.__em=qx.lang.Function.listener(this.__et,this);
qx.bom.Event.addNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.addNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.addNativeListener(this._window,z,this.__el,true);
qx.bom.Event.addNativeListener(this._window,c,this.__em,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eh,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__ei,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__ej,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__ef);
qx.bom.Event.removeNativeListener(this._document,h,this.__eg);
qx.bom.Event.removeNativeListener(this._document,b,this.__el);
qx.bom.Event.removeNativeListener(this._document,a,this.__em);
qx.bom.Event.removeNativeListener(this._document,d,this.__ek);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__ek,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__em,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__eh,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__ei,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__ef,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__eg,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__el,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__em,true);
}}),__er:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__eD(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__es:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__eq();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__eB(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__eq();

if(this.__en){this.setFocus(this.__en);
delete this.__en;
}
if(this.__eo){this.setActive(this.__eo);
delete this.__eo;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__eD(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__et:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__ep();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__ep();
this.__en=this.getFocus();
this.__eo=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__eu:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__ep();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__ep();
this.__en=this.getFocus();
this.__eo=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__ev:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__eq();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__eq();

if(this.__en){this.setFocus(this.__en);
delete this.__en;
}
if(this.__eo){this.setActive(this.__eo);
delete this.__eo;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__ew:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__eB(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__eB(bB);

if(bA){if(!this.__eD(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__eD(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__eB(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__eB(bK);

if(!this.__eD(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__ex:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__ey(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__ey(bQ));
},"default":null})),__ey:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__ez:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__eD(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__eA:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__eB:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__eA(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__eC:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__eD:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__dH(cg,cf,v,true);
}
if(cf){this.__dH(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__dH(ci,ch,a,true);
}
if(ch){this.__dH(ch,ci,b,true);
}if(ci){this.__dH(ci,ch,g,false);
}
if(ch){this.__dH(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__eE=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var d="event.pointer",c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(e,f){var g={position:a,top:0,left:0};

if(qx.core.Environment.get(d)){g.pointerEvents=c;
}qx.html.Element.call(this,null,g);
this.__hM=e;
this.__cq=f||e.toHashCode();
this.useMarkup(e.getMarkup());
},members:{__cq:null,__hM:null,getId:function(){return this.__cq;
},getDecorator:function(){return this.__hM;
},resize:function(h,i){this.__hM.resize(this.getDomElement(),h,i);
},tint:function(j){this.__hM.tint(this.getDomElement(),j);
},getInsets:function(){return this.__hM.getInsets();
}},destruct:function(){this.__hM=null;
}});
})();
(function(){var g="",f="<br",e=" &nbsp;",d="<br>",c=" ",b="\n",a="qx.bom.String";
qx.Class.define(a,{statics:{TO_CHARCODE:{"quot":34,"amp":38,"lt":60,"gt":62,"nbsp":160,"iexcl":161,"cent":162,"pound":163,"curren":164,"yen":165,"brvbar":166,"sect":167,"uml":168,"copy":169,"ordf":170,"laquo":171,"not":172,"shy":173,"reg":174,"macr":175,"deg":176,"plusmn":177,"sup2":178,"sup3":179,"acute":180,"micro":181,"para":182,"middot":183,"cedil":184,"sup1":185,"ordm":186,"raquo":187,"frac14":188,"frac12":189,"frac34":190,"iquest":191,"Agrave":192,"Aacute":193,"Acirc":194,"Atilde":195,"Auml":196,"Aring":197,"AElig":198,"Ccedil":199,"Egrave":200,"Eacute":201,"Ecirc":202,"Euml":203,"Igrave":204,"Iacute":205,"Icirc":206,"Iuml":207,"ETH":208,"Ntilde":209,"Ograve":210,"Oacute":211,"Ocirc":212,"Otilde":213,"Ouml":214,"times":215,"Oslash":216,"Ugrave":217,"Uacute":218,"Ucirc":219,"Uuml":220,"Yacute":221,"THORN":222,"szlig":223,"agrave":224,"aacute":225,"acirc":226,"atilde":227,"auml":228,"aring":229,"aelig":230,"ccedil":231,"egrave":232,"eacute":233,"ecirc":234,"euml":235,"igrave":236,"iacute":237,"icirc":238,"iuml":239,"eth":240,"ntilde":241,"ograve":242,"oacute":243,"ocirc":244,"otilde":245,"ouml":246,"divide":247,"oslash":248,"ugrave":249,"uacute":250,"ucirc":251,"uuml":252,"yacute":253,"thorn":254,"yuml":255,"fnof":402,"Alpha":913,"Beta":914,"Gamma":915,"Delta":916,"Epsilon":917,"Zeta":918,"Eta":919,"Theta":920,"Iota":921,"Kappa":922,"Lambda":923,"Mu":924,"Nu":925,"Xi":926,"Omicron":927,"Pi":928,"Rho":929,"Sigma":931,"Tau":932,"Upsilon":933,"Phi":934,"Chi":935,"Psi":936,"Omega":937,"alpha":945,"beta":946,"gamma":947,"delta":948,"epsilon":949,"zeta":950,"eta":951,"theta":952,"iota":953,"kappa":954,"lambda":955,"mu":956,"nu":957,"xi":958,"omicron":959,"pi":960,"rho":961,"sigmaf":962,"sigma":963,"tau":964,"upsilon":965,"phi":966,"chi":967,"psi":968,"omega":969,"thetasym":977,"upsih":978,"piv":982,"bull":8226,"hellip":8230,"prime":8242,"Prime":8243,"oline":8254,"frasl":8260,"weierp":8472,"image":8465,"real":8476,"trade":8482,"alefsym":8501,"larr":8592,"uarr":8593,"rarr":8594,"darr":8595,"harr":8596,"crarr":8629,"lArr":8656,"uArr":8657,"rArr":8658,"dArr":8659,"hArr":8660,"forall":8704,"part":8706,"exist":8707,"empty":8709,"nabla":8711,"isin":8712,"notin":8713,"ni":8715,"prod":8719,"sum":8721,"minus":8722,"lowast":8727,"radic":8730,"prop":8733,"infin":8734,"ang":8736,"and":8743,"or":8744,"cap":8745,"cup":8746,"int":8747,"there4":8756,"sim":8764,"cong":8773,"asymp":8776,"ne":8800,"equiv":8801,"le":8804,"ge":8805,"sub":8834,"sup":8835,"sube":8838,"supe":8839,"oplus":8853,"otimes":8855,"perp":8869,"sdot":8901,"lceil":8968,"rceil":8969,"lfloor":8970,"rfloor":8971,"lang":9001,"rang":9002,"loz":9674,"spades":9824,"clubs":9827,"hearts":9829,"diams":9830,"OElig":338,"oelig":339,"Scaron":352,"scaron":353,"Yuml":376,"circ":710,"tilde":732,"ensp":8194,"emsp":8195,"thinsp":8201,"zwnj":8204,"zwj":8205,"lrm":8206,"rlm":8207,"ndash":8211,"mdash":8212,"lsquo":8216,"rsquo":8217,"sbquo":8218,"ldquo":8220,"rdquo":8221,"bdquo":8222,"dagger":8224,"Dagger":8225,"permil":8240,"lsaquo":8249,"rsaquo":8250,"euro":8364},escape:function(h){return qx.util.StringEscape.escape(h,qx.bom.String.FROM_CHARCODE);
},unescape:function(i){return qx.util.StringEscape.unescape(i,qx.bom.String.TO_CHARCODE);
},fromText:function(j){return qx.bom.String.escape(j).replace(/(  |\n)/g,function(k){var l={"  ":e,"\n":d};
return l[k]||k;
});
},toText:function(m){return qx.bom.String.unescape(m.replace(/\s+|<([^>])+>/gi,function(n){if(n.indexOf(f)===0){return b;
}else if(n.length>0&&n.replace(/^\s*/,g).replace(/\s*$/,g)==g){return c;
}else{return g;
}}));
}},defer:function(o){o.FROM_CHARCODE=qx.lang.Object.invert(o.TO_CHARCODE);
}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var c="function",b="qx.Part",a="complete";
qx.Bootstrap.define(b,{construct:function(d){var e=d.parts[d.boot][0];
this.__mA=d;
this.__mB={};
this.__mC={};
this.__mD={};
this.__mE={};

for(var j in d.packages){var h=new qx.io.part.Package(this.__mH(d.packages[j].uris),j,j==e);
this.__mE[j]=h;
}this.__mF={};
var g=d.parts;
var f=d.closureParts||{};

for(var name in g){var m=g[name];
var l=[];

for(var i=0;i<m.length;i++){l.push(this.__mE[m[i]]);
}if(f[name]){var k=new qx.io.part.ClosurePart(name,l,this);
}else{var k=new qx.io.part.Part(name,l,this);
}this.__mF[name]=k;
}},statics:{TIMEOUT:7500,getInstance:function(){if(!this.$$instance){this.$$instance=new this(qx.$$loader);
}return this.$$instance;
},require:function(n,o,self){this.getInstance().require(n,o,self);
},preload:function(p){this.getInstance().preload(p);
},$$notifyLoad:function(q,r){this.getInstance().saveClosure(q,r);
}},members:{__mA:null,__mE:null,__mF:null,__mD:null,addToPackage:function(s){this.__mE[s.getId()]=s;
},addClosurePackageListener:function(t,u){var v=t.getId();

if(!this.__mD[v]){this.__mD[v]=[];
}this.__mD[v].push(u);
},saveClosure:function(w,x){var z=this.__mE[w];
if(!z){throw new Error("Package not available: "+w);
}z.saveClosure(x);
var y=this.__mD[w];

if(!y){return;
}
for(var i=0;i<y.length;i++){y[i](a,w);
}this.__mD[w]=[];
},getParts:function(){return this.__mF;
},require:function(A,B,self){var B=B||function(){};
var self=self||window;

if(qx.Bootstrap.isString(A)){A=[A];
}var E=[];

for(var i=0;i<A.length;i++){E.push(this.__mF[A[i]]);
}var D=0;
var C=function(){D+=1;
if(D>=E.length){var F=[];

for(var i=0;i<E.length;i++){F.push(E[i].getReadyState());
}B.call(self,F);
}};

for(var i=0;i<E.length;i++){E[i].load(C,this);
}},preload:function(G,H,self){if(qx.Bootstrap.isString(G)){G=[G];
}var I=0;

for(var i=0;i<G.length;i++){this.__mF[G[i]].preload(function(){I++;

if(I>=G.length){var J=[];

for(var i=0;i<G.length;i++){J.push(this.__mF[G[i]].getReadyState());
}
if(H){H.call(self,J);
}}},this);
}},__mG:function(){var K=this.__mA.packages;
var L=[];

for(var M in K){L.push(this.__mH(K[M].uris));
}return L;
},__mH:qx.$$loader.decodeUris,__mB:null,addPartListener:function(N,O){var P=N.getName();

if(!this.__mB[P]){this.__mB[P]=[];
}this.__mB[P].push(O);
},onpart:null,notifyPartResult:function(Q){var S=Q.getName();
var R=this.__mB[S];

if(R){for(var i=0;i<R.length;i++){R[i](Q.getReadyState());
}this.__mB[S]=[];
}
if(typeof this.onpart==c){this.onpart(Q);
}},__mC:null,addPackageListener:function(T,U){var V=T.getId();

if(!this.__mC[V]){this.__mC[V]=[];
}this.__mC[V].push(U);
},notifyPackageResult:function(W){var Y=W.getId();
var X=this.__mC[Y];

if(!X){return;
}
for(var i=0;i<X.length;i++){X[i](W.getReadyState());
}this.__mC[Y]=[];
}}});
})();
(function(){var f="mousedown",d="__nA",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__nA=[];
qx.event.Registration.addListener(document.documentElement,f,this.__nC,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__nA:null,add:function(g){this.__nA.push(g);
this.__nB();
},remove:function(h){if(this.__nA){qx.lang.Array.remove(this.__nA,h);
this.__nB();
}},hideAll:function(){var j;
var k=this.__nA;

if(k){for(var i=0,l=k.length;i<l;i++){var j=k[i];
j.getAutoHide()&&j.exclude();
}}},__nB:function(){var m=1e7;

for(var i=0;i<this.__nA.length;i++){this.__nA[i].setZIndex(m++);
}},__nC:function(e){var o=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var p=this.__nA;

for(var i=0;i<p.length;i++){var n=p[i];

if(!n.getAutoHide()||o==n||qx.ui.core.Widget.contains(n,o)){continue;
}n.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__nC,this,true);
this._disposeArray(d);
}});
})();
(function(){var j="engine.name",i="0px",h="mshtml",g="engine.version",f="qx.bom.element.Dimension",e="paddingRight",d="paddingLeft",c="opera",b="paddingBottom",a="paddingTop";
qx.Class.define(f,{statics:{getWidth:qx.core.Environment.select(j,{"gecko":function(k){if(k.getBoundingClientRect){var l=k.getBoundingClientRect();
return Math.round(l.right)-Math.round(l.left);
}else{return k.offsetWidth;
}},"default":function(m){return m.offsetWidth;
}}),getHeight:qx.core.Environment.select(j,{"gecko":function(n){if(n.getBoundingClientRect){var o=n.getBoundingClientRect();
return Math.round(o.bottom)-Math.round(o.top);
}else{return n.offsetHeight;
}},"default":function(p){return p.offsetHeight;
}}),getSize:function(q){return {width:this.getWidth(q),height:this.getHeight(q)};
},__jL:{visible:true,hidden:true},getContentWidth:function(r){var s=qx.bom.element.Style;
var t=qx.bom.element.Overflow.getX(r);
var u=parseInt(s.get(r,d)||i,10);
var x=parseInt(s.get(r,e)||i,10);

if(this.__jL[t]){var w=r.clientWidth;

if((qx.core.Environment.get(j)==c)||qx.dom.Node.isBlockNode(r)){w=w-u-x;
}return w;
}else{if(r.clientWidth>=r.scrollWidth){return Math.max(r.clientWidth,r.scrollWidth)-u-x;
}else{var v=r.scrollWidth-u;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)>=6){v-=x;
}return v;
}}},getContentHeight:function(y){var z=qx.bom.element.Style;
var C=qx.bom.element.Overflow.getY(y);
var B=parseInt(z.get(y,a)||i,10);
var A=parseInt(z.get(y,b)||i,10);

if(this.__jL[C]){return y.clientHeight-B-A;
}else{if(y.clientHeight>=y.scrollHeight){return Math.max(y.clientHeight,y.scrollHeight)-B-A;
}else{var D=y.scrollHeight-B;
if(qx.core.Environment.get(j)==h&&qx.core.Environment.get(g)==6){D-=A;
}return D;
}}},getContentSize:function(E){return {width:this.getContentWidth(E),height:this.getContentHeight(E)};
}}});
})();
(function(){var h=",",g="interval",f="changeStatus",e="qx.event.type.Data",d="qx.bom.webfonts.Validator",c="_applyFontFamily",b="span",a="Integer";
qx.Class.define(d,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);

if(i){this.setFontFamily(i);
}this.__hN=this._getRequestedHelpers();
},statics:{COMPARISON_FONTS:{sans:["Arial","Helvetica","sans-serif"],serif:["Times New Roman","Georgia","serif"]},HELPER_CSS:{position:"absolute",margin:"0",padding:"0",top:"-1000px",left:"-1000px",fontSize:"350px",width:"auto",height:"auto",lineHeight:"normal",fontVariant:"normal"},COMPARISON_STRING:"WEei",__hO:null,__hP:null,removeDefaultHelperElements:function(){var j=qx.bom.webfonts.Validator.__hP;

if(j){for(var k in j){document.body.removeChild(j[k]);
}}delete qx.bom.webfonts.Validator.__hP;
}},properties:{fontFamily:{nullable:true,init:null,apply:c},timeout:{check:a,init:5000}},events:{"changeStatus":e},members:{__hN:null,__hQ:null,__hR:null,validate:function(){this.__hR=new Date().getTime();

if(this.__hQ){this.__hQ.restart();
}else{this.__hQ=new qx.event.Timer(100);
this.__hQ.addListener(g,this.__hS,this);
qx.event.Timer.once(function(){this.__hQ.start();
},this,0);
}},_reset:function(){if(this.__hN){for(var m in this.__hN){var l=this.__hN[m];
document.body.removeChild(l);
}this.__hN=null;
}},_isFontValid:function(){if(!qx.bom.webfonts.Validator.__hO){this.__bf();
}
if(!this.__hN){this.__hN=this._getRequestedHelpers();
}var o=qx.bom.element.Dimension.getWidth(this.__hN.sans);
var n=qx.bom.element.Dimension.getWidth(this.__hN.serif);
var p=qx.bom.webfonts.Validator;

if(o!==p.__hO.sans&&n!==p.__hO.serif){return true;
}return false;
},_getRequestedHelpers:function(){var q=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.sans);
var r=[this.getFontFamily()].concat(qx.bom.webfonts.Validator.COMPARISON_FONTS.serif);
return {sans:this._getHelperElement(q),serif:this._getHelperElement(r)};
},_getHelperElement:function(s){var t=qx.lang.Object.clone(qx.bom.webfonts.Validator.HELPER_CSS);

if(s){if(t.fontFamily){t.fontFamily+=h+s.join(h);
}else{t.fontFamily=s.join(h);
}}var u=document.createElement(b);
u.innerHTML=qx.bom.webfonts.Validator.COMPARISON_STRING;
qx.bom.element.Style.setStyles(u,t);
document.body.appendChild(u);
return u;
},_applyFontFamily:function(v,w){if(v!==w){this._reset();
}},__bf:function(){var x=qx.bom.webfonts.Validator;

if(!x.__hP){x.__hP={sans:this._getHelperElement(x.COMPARISON_FONTS.sans),serif:this._getHelperElement(x.COMPARISON_FONTS.serif)};
}x.__hO={sans:qx.bom.element.Dimension.getWidth(x.__hP.sans),serif:qx.bom.element.Dimension.getWidth(x.__hP.serif)};
},__hS:function(){if(this._isFontValid()){this.__hQ.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:true});
}else{var y=new Date().getTime();

if(y-this.__hR>=this.getTimeout()){this.__hQ.stop();
this._reset();
this.fireDataEvent(f,{family:this.getFontFamily(),valid:false});
}}}},destruct:function(){this._reset();
this.__hQ.stop();
this.__hQ.removeListener(g,this.__hS,this);
this._disposeObjects(this.__hQ);
}});
})();
(function(){var e="error",d="initialized",c="loading",b="qx.io.part.ClosurePart",a="complete";
qx.Bootstrap.define(b,{extend:qx.io.part.Part,construct:function(name,f,g){qx.io.part.Part.call(this,name,f,g);
},members:{__my:0,preload:function(h,self){var j=0;
var l=this;

for(var i=0;i<this._packages.length;i++){var k=this._packages[i];

if(k.getReadyState()==d){k.loadClosure(function(m){j++;
l._loader.notifyPackageResult(m);
if(j>=l._packages.length&&h){h.call(self);
}},this._loader);
}}},load:function(n,self){if(this._checkCompleteLoading(n,self)){return;
}this._readyState=c;

if(n){this._appendPartListener(n,self,this);
}this.__my=this._packages.length;

for(var i=0;i<this._packages.length;i++){var p=this._packages[i];
var o=p.getReadyState();
if(o==d){p.loadClosure(this._loader.notifyPackageResult,this._loader);
}if(o==d||o==c){this._loader.addPackageListener(p,qx.Bootstrap.bind(this._onPackageLoad,this,p));
}else if(o==e){this._markAsCompleted(e);
return;
}else{this.__my--;
}}if(this.__my<=0){this.__mz();
}},__mz:function(){for(var i=0;i<this._packages.length;i++){this._packages[i].execute();
}this._markAsCompleted(a);
},_onPackageLoad:function(q){if(this._readyState==e){return;
}if(q.getReadyState()==e){this._markAsCompleted(e);
return;
}this.__my--;

if(this.__my<=0){this.__mz();
}}}});
})();
(function(){var k="list",j="atom",i="pressed",h="abandoned",g="popup",f="hovered",d="changeLabel",c="changeIcon",b="arrow",a="",A="spacer",z="Enter",y="one",x="mouseout",w="Space",v="key",u="mousewheel",t="keyinput",s="changeSelection",r="y",p="qx.ui.form.SelectBox",q="mouseover",n="selectbox",o="click",l="quick",m=" ";
qx.Class.define(p,{extend:qx.ui.form.AbstractSelectBox,implement:[qx.ui.core.ISingleSelection,qx.ui.form.IModelSelection],include:[qx.ui.core.MSingleSelectionHandling,qx.ui.form.MModelSelection],construct:function(){qx.ui.form.AbstractSelectBox.call(this);
this._createChildControl(j);
this._createChildControl(A);
this._createChildControl(b);
this.addListener(q,this._onMouseOver,this);
this.addListener(x,this._onMouseOut,this);
this.addListener(o,this._onClick,this);
this.addListener(u,this._onMouseWheel,this);
this.addListener(t,this._onKeyInput,this);
this.addListener(s,this.__fJ,this);
},properties:{appearance:{refine:true,init:n}},members:{__CF:null,_createChildControlImpl:function(B,C){var D;

switch(B){case A:D=new qx.ui.core.Spacer();
this._add(D,{flex:1});
break;
case j:D=new qx.ui.basic.Atom(m);
D.setCenter(false);
D.setAnonymous(true);
this._add(D,{flex:1});
break;
case b:D=new qx.ui.basic.Image();
D.setAnonymous(true);
this._add(D);
break;
}return D||qx.ui.form.AbstractSelectBox.prototype._createChildControlImpl.call(this,B);
},_forwardStates:{focused:true},_getItems:function(){return this.getChildrenContainer().getChildren();
},_isAllowEmptySelection:function(){return this.getChildrenContainer().getSelectionMode()!==y;
},__fJ:function(e){var F=e.getData()[0];
var E=this.getChildControl(k);

if(E.getSelection()[0]!=F){if(F){E.setSelection([F]);
}else{E.resetSelection();
}}this.__Gu();
this.__Gv();
},__Gu:function(){var H=this.getChildControl(k).getSelection()[0];
var I=this.getChildControl(j);
var G=H?H.getIcon():a;
G==null?I.resetIcon():I.setIcon(G);
},__Gv:function(){var L=this.getChildControl(k).getSelection()[0];
var M=this.getChildControl(j);
var K=L?L.getLabel():a;
var J=this.getFormat();

if(J!=null){K=J.call(this,L);
}if(K&&K.translate){K=K.translate();
}K==null?M.resetLabel():M.setLabel(K);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(h)){this.removeState(h);
this.addState(i);
}this.addState(f);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(f);

if(this.hasState(i)){this.removeState(i);
this.addState(h);
}},_onClick:function(e){this.toggle();
},_onMouseWheel:function(e){if(this.getChildControl(g).isVisible()){return;
}var O=e.getWheelDelta(r)>0?1:-1;
var Q=this.getSelectables();
var P=this.getSelection()[0];

if(!P){P=Q[0];
}var N=Q.indexOf(P)+O;
var R=Q.length-1;
if(N<0){N=0;
}else if(N>=R){N=R;
}this.setSelection([Q[N]]);
e.stopPropagation();
e.preventDefault();
},_onKeyPress:function(e){var S=e.getKeyIdentifier();

if(S==z||S==w){if(this.__CF){this.setSelection([this.__CF]);
this.__CF=null;
}this.toggle();
}else{qx.ui.form.AbstractSelectBox.prototype._onKeyPress.call(this,e);
}},_onKeyInput:function(e){var T=e.clone();
T.setTarget(this._list);
T.setBubbles(false);
this.getChildControl(k).dispatchEvent(T);
},_onListMouseDown:function(e){if(this.__CF){this.setSelection([this.__CF]);
this.__CF=null;
}},_onListChangeSelection:function(e){var U=e.getData();
var X=e.getOldData();
if(X&&X.length>0){X[0].removeListener(c,this.__Gu,this);
X[0].removeListener(d,this.__Gv,this);
}
if(U.length>0){var W=this.getChildControl(g);
var V=this.getChildControl(k);
var Y=V.getSelectionContext();

if(W.isVisible()&&(Y==l||Y==v)){this.__CF=U[0];
}else{this.setSelection([U[0]]);
this.__CF=null;
}U[0].addListener(c,this.__Gu,this);
U[0].addListener(d,this.__Gv,this);
}else{this.resetSelection();
}},_onPopupChangeVisibility:function(e){qx.ui.form.AbstractSelectBox.prototype._onPopupChangeVisibility.call(this,e);
var bb=this.getChildControl(g);

if(!bb.isVisible()){var bd=this.getChildControl(k);
if(bd.hasChildren()){bd.setSelection(this.getSelection());
}}else{var ba=bb.getLayoutLocation(this);
var bf=qx.bom.Viewport.getHeight();
var be=ba.top;
var bg=bf-ba.bottom;
var bc=be>bg?be:bg;
var bh=this.getMaxListHeight();
var bd=this.getChildControl(k);

if(bh==null||bh>bc){bd.setMaxHeight(bc);
}else if(bh<bc){bd.setMaxHeight(bh);
}}}},destruct:function(){this.__CF=null;
}});
})();
(function(){var m="value",l="default",k="black",j="app-header-label",i=" Theme",h="index.html?qx.theme=",g="qx.theme.Classic",f="2%",e="Widget Browser",d="widgetbrowser.view.Header",a="changeSelection",c="Theme",b="app-header";
qx.Class.define(d,{extend:qx.ui.container.Composite,construct:function(){qx.ui.container.Composite.call(this);
this.setLayout(new qx.ui.layout.HBox);
this.setAppearance(b);
var q=new qx.ui.basic.Label(e);
var n=new qxc.ui.versionlabel.VersionLabel();
n.setFont(l);
n.setAppearance(j);
var p=new qx.ui.form.SelectBox(c);
qx.core.Init.getApplication().getThemes().forEach(function(r){var name=qx.Bootstrap.getKeys(r)[0];
var s=new qx.ui.form.ListItem(name+i);
s.setUserData(m,r[name]);
p.add(s);
var t=r[name];

if(t==g){p.setSelection([s]);
}});
p.setFont(l);
var o=p.getSelectables().filter(function(u){if(window.location.search){return window.location.search.match(u.getUserData(m));
}})[0];
if(o){p.setSelection([o]);
}p.setTextColor(k);
p.addListener(a,function(v){var x=v.getData()[0];
var w=h+x.getUserData(m);
window.location=w;
});
this.add(q);
this.add(new qx.ui.core.Spacer,{flex:1});
this.add(p);
this.add(new qx.ui.core.Spacer,{width:f});
this.add(n);
}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var d="_applyDynamic",c="changeSelection",b="Boolean",a="qx.ui.container.Stack";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:[qx.ui.core.MSingleSelectionHandling,qx.ui.core.MChildrenHandling],construct:function(){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(c,this.__fJ,this);
},properties:{dynamic:{check:b,init:false,apply:d}},members:{_applyDynamic:function(f){var h=this._getChildren();
var g=this.getSelection()[0];
var j;

for(var i=0,l=h.length;i<l;i++){j=h[i];

if(j!=g){if(f){h[i].exclude();
}else{h[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(k){return true;
},__fJ:function(e){var m=e.getOldData()[0];
var n=e.getData()[0];

if(m){if(this.isDynamic()){m.exclude();
}else{m.hide();
}}
if(n){n.show();
}},_afterAddChild:function(o){var p=this.getSelection()[0];

if(!p){this.setSelection([o]);
}else if(p!==o){if(this.isDynamic()){o.exclude();
}else{o.hide();
}}},_afterRemoveChild:function(q){if(this.getSelection()[0]===q){var r=this._getChildren()[0];

if(r){this.setSelection([r]);
}else{this.resetSelection();
}}},previous:function(){var u=this.getSelection()[0];
var s=this._indexOf(u)-1;
var v=this._getChildren();

if(s<0){s=v.length-1;
}var t=v[s];
this.setSelection([t]);
},next:function(){var x=this.getSelection()[0];
var w=this._indexOf(x)+1;
var y=this._getChildren();
var z=y[w]||y[0];
this.setSelection([z]);
}}});
})();
(function(){var b="pane",a="qx.ui.container.Scroll";
qx.Class.define(a,{extend:qx.ui.core.scroll.AbstractScrollArea,include:[qx.ui.core.MContentPadding],construct:function(content){qx.ui.core.scroll.AbstractScrollArea.call(this);

if(content){this.add(content);
}},members:{add:function(c){this.getChildControl(b).add(c);
},remove:function(d){this.getChildControl(b).remove(d);
},getChildren:function(){return this.getChildControl(b).getChildren();
},_getContentPaddingTarget:function(){return this.getChildControl(b);
}}});
})();
(function(){var p="Boolean",o="focusout",n="interval",m="mouseover",l="mouseout",k="mousemove",j="widget",i="qx.ui.tooltip.ToolTip",h="_applyCurrent",g="qx.ui.tooltip.Manager",c="__pO",f="tooltip-error",d="__pL",b="singleton",a="__pM";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
qx.event.Registration.addListener(document.body,m,this.__pV,this,true);
this.__pL=new qx.event.Timer();
this.__pL.addListener(n,this.__pS,this);
this.__pM=new qx.event.Timer();
this.__pM.addListener(n,this.__pT,this);
this.__pN={left:0,top:0};
},properties:{current:{check:i,nullable:true,apply:h},showInvalidToolTips:{check:p,init:true},showToolTips:{check:p,init:true}},members:{__pN:null,__pM:null,__pL:null,__pO:null,__pP:null,__pQ:function(){if(!this.__pO){this.__pO=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__pO;
},__pR:function(){if(!this.__pP){this.__pP=new qx.ui.tooltip.ToolTip().set({appearance:f});
this.__pP.syncAppearance();
}return this.__pP;
},_applyCurrent:function(q,r){if(r&&qx.ui.core.Widget.contains(r,q)){return;
}if(r){if(!r.isDisposed()){r.exclude();
}this.__pL.stop();
this.__pM.stop();
}var t=qx.event.Registration;
var s=document.body;
if(q){this.__pL.startWith(q.getShowTimeout());
t.addListener(s,l,this.__pW,this,true);
t.addListener(s,o,this.__pX,this,true);
t.addListener(s,k,this.__pU,this,true);
}else{t.removeListener(s,l,this.__pW,this,true);
t.removeListener(s,o,this.__pX,this,true);
t.removeListener(s,k,this.__pU,this,true);
}},__pS:function(e){var u=this.getCurrent();

if(u&&!u.isDisposed()){this.__pM.startWith(u.getHideTimeout());

if(u.getPlaceMethod()==j){u.placeToWidget(u.getOpener());
}else{u.placeToPoint(this.__pN);
}u.show();
}this.__pL.stop();
},__pT:function(e){var v=this.getCurrent();

if(v&&!v.isDisposed()){v.exclude();
}this.__pM.stop();
this.resetCurrent();
},__pU:function(e){var w=this.__pN;
w.left=e.getDocumentLeft();
w.top=e.getDocumentTop();
},__pV:function(e){var z=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!z){return;
}var A,B,y,x;
while(z!=null){A=z.getToolTip();
B=z.getToolTipText()||null;
y=z.getToolTipIcon()||null;

if(qx.Class.hasInterface(z.constructor,qx.ui.form.IForm)&&!z.isValid()){x=z.getInvalidMessage();
}
if(A||B||y||x){break;
}z=z.getLayoutParent();
}if(!z||!z.getEnabled()||z.isBlockToolTip()||(!x&&!this.getShowToolTips())||(x&&!this.getShowInvalidToolTips())){return;
}
if(x){A=this.__pR().set({label:x});
}
if(!A){A=this.__pQ().set({label:B,icon:y});
}this.setCurrent(A);
A.setOpener(z);
},__pW:function(e){var C=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!C){return;
}var D=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!D){return;
}var E=this.getCurrent();
if(E&&(D==E||qx.ui.core.Widget.contains(E,D))){return;
}if(D&&C&&qx.ui.core.Widget.contains(C,D)){return;
}if(E&&!D){this.setCurrent(null);
}else{this.resetCurrent();
}},__pX:function(e){var F=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!F){return;
}var G=this.getCurrent();
if(G&&G==F.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,m,this.__pV,this,true);
this._disposeObjects(d,a,c);
this.__pN=null;
}});
})();
(function(){var e="qx.theme.Modern",d="qx.theme.Simple",c="north",b="qx.theme.Classic",a="widgetbrowser.Application";
qx.Class.define(a,{extend:qx.application.Standalone,construct:function(){qx.application.Standalone.call(this);
},members:{__pw:null,__Ls:null,__sv:null,main:function(){qx.application.Standalone.prototype.main.call(this);
var f=this.getRoot();
var g=new qx.ui.layout.Dock();
var h=new qx.ui.container.Composite(g);
f.add(h,{edge:0});
this.__pw=new widgetbrowser.view.Header();
h.add(this.__pw,{edge:c});
var scroll=this.__sv=new qx.ui.container.Scroll();
h.add(scroll);
this.__Ls=this._createTabView();
this.__Ls.set({minWidth:800,minHeight:800,padding:15});
scroll.add(this.__Ls);
},_createTabView:function(){this.__Ls=new widgetbrowser.view.TabView();
return this.__Ls;
},getScroll:function(){return this.__sv;
},getThemes:function(){return ([{"Modern":e},{"Simple":d},{"Classic":b}]);
}}});
})();
(function(){var k="cursor",j="100%",i="repeat",h="mousedown",g="url(",f=")",d="mouseout",c="div",b="dblclick",a="mousewheel",w="qx.html.Blocker",v="mousemove",u="mouseover",t="appear",s="click",r="mshtml",q="engine.name",p="mouseup",o="contextmenu",n="disappear",l="qx/static/blank.gif",m="absolute";
qx.Class.define(w,{extend:qx.html.Element,construct:function(x,y){var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
var z={position:m,width:j,height:j,opacity:y||0,backgroundColor:x};
if((qx.core.Environment.get(q)==r)){z.backgroundImage=g+qx.util.ResourceManager.getInstance().toUri(l)+f;
z.backgroundRepeat=i;
}qx.html.Element.call(this,c,z);
this.addListener(h,this._stopPropagation,this);
this.addListener(p,this._stopPropagation,this);
this.addListener(s,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(v,this._stopPropagation,this);
this.addListener(u,this._stopPropagation,this);
this.addListener(d,this._stopPropagation,this);
this.addListener(a,this._stopPropagation,this);
this.addListener(o,this._stopPropagation,this);
this.addListener(t,this.__ny,this);
this.addListener(n,this.__ny,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__ny:function(){var A=this.getStyle(k);
this.setStyle(k,null,true);
this.setStyle(k,A,true);
}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
var g=new qx.event.Timer(this.getTimeoutInterval());
g.addListener(f,this._onInterval,this);
g.start();
this.__lh=g;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__lh:null,_applyTimeoutInterval:function(h){this.__lh.setInterval(h);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__lh){this.__lh.stop();
}this.__lh=null;
}});
})();
(function(){var h="object",g="function",f="qx.bom.client.Stylesheet",e="html.stylesheet.deleterule",d="html.stylesheet.insertrule",c="html.stylesheet.createstylesheet",b="html.stylesheet.addimport",a="html.stylesheet.removeimport";
qx.Bootstrap.define(f,{statics:{__iL:function(){if(!qx.bom.client.Stylesheet.__iM){qx.bom.client.Stylesheet.__iM=qx.bom.Stylesheet.createElement();
}return qx.bom.client.Stylesheet.__iM;
},getCreateStyleSheet:function(){return typeof document.createStyleSheet===h;
},getInsertRule:function(){return typeof qx.bom.client.Stylesheet.__iL().insertRule===g;
},getDeleteRule:function(){return typeof qx.bom.client.Stylesheet.__iL().deleteRule===g;
},getAddImport:function(){return (typeof qx.bom.client.Stylesheet.__iL().addImport===h);
},getRemoveImport:function(){return (typeof qx.bom.client.Stylesheet.__iL().removeImport===h);
}},defer:function(i){qx.core.Environment.add(c,i.getCreateStyleSheet),qx.core.Environment.add(d,i.getInsertRule),qx.core.Environment.add(e,i.getDeleteRule),qx.core.Environment.add(b,i.getAddImport);
qx.core.Environment.add(a,i.getRemoveImport);
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
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__eF(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__eF(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__eF(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__eF(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__eF(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__eF(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__eF(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__eF(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__eF(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__eF:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
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
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var h="useraction",g="touchend",f='ie',d="browser.version",c="event.touch",b="qx.ui.core.queue.Manager",a="browser.name";
qx.Class.define(b,{statics:{__ix:false,__iy:{},__iz:0,MAX_RETRIES:10,scheduleFlush:function(i){var self=qx.ui.core.queue.Manager;
self.__iy[i]=true;

if(!self.__ix){self.__iE.schedule();
self.__ix=true;
}},flush:function(){if(qx.ui.core.queue.Manager.PAUSE){return;
}var self=qx.ui.core.queue.Manager;
if(self.__iA){return;
}self.__iA=true;
self.__iE.cancel();
var j=self.__iy;
self.__iB(function(){while(j.visibility||j.widget||j.appearance||j.layout||j.element){if(j.widget){delete j.widget;
{qx.ui.core.queue.Widget.flush();
};
}
if(j.visibility){delete j.visibility;
{qx.ui.core.queue.Visibility.flush();
};
}
if(j.appearance){delete j.appearance;
{qx.ui.core.queue.Appearance.flush();
};
}if(j.widget||j.visibility||j.appearance){continue;
}
if(j.layout){delete j.layout;
{qx.ui.core.queue.Layout.flush();
};
}if(j.widget||j.visibility||j.appearance||j.layout){continue;
}
if(j.element){delete j.element;
qx.html.Element.flush();
}}},function(){self.__ix=false;
});
self.__iB(function(){if(j.dispose){delete j.dispose;
{qx.ui.core.queue.Dispose.flush();
};
}},function(){self.__iA=false;
});
self.__iz=0;
},__iB:function(k,l){var self=qx.ui.core.queue.Manager;

try{k();
}catch(e){self.__ix=false;
self.__iA=false;
self.__iz+=1;
if(qx.core.Environment.get(a)==f&&qx.core.Environment.get(d)<=7){l();
}
if(self.__iz<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__iz-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{l();
}},__iC:function(e){var m=qx.ui.core.queue.Manager;
if(e.getData()==g){m.PAUSE=true;

if(m.__iD){window.clearTimeout(m.__iD);
}m.__iD=window.setTimeout(function(){m.PAUSE=false;
m.__iD=null;
m.flush();
},500);
}else{m.flush();
}}},defer:function(n){n.__iE=new qx.util.DeferredCall(n.flush);
qx.html.Element._scheduleFlush=n.scheduleFlush;
qx.event.Registration.addListener(window,h,qx.core.Environment.get(c)?n.__iC:n.flush);
}});
})();
(function(){var c="html.image.naturaldimensions",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cP:{},__jM:{width:null,height:null},__jN:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__cP[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__cP[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__cP[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__cP[k];
return m?m.format:null;
},getSize:function(n){var o=this.__cP[n];
return o?{width:o.width,height:o.height}:this.__jM;
},getWidth:function(p){var q=this.__cP[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__cP[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__cP[t];

if(!w){w=this.__cP[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__jO,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__cP[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__cP[z]=null;
},__jO:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__cP[E];
if(event.type===b){F.loaded=true;
F.width=this.__jP(D);
F.height=this.__jQ(D);
var G=this.__jN.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__jP:function(I){return qx.core.Environment.get(c)?I.naturalWidth:I.width;
},__jQ:function(J){return qx.core.Environment.get(c)?J.naturalHeight:J.height;
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var s="_applyLayoutChange",r="left",q="top",p="Decorator",o="Integer",n="x",m="y",l="auto",k="qx.ui.layout.Dock",j="_applySort",c="west",h="north",f="south",b="center",a="east",e="Boolean",d="bottom",g="right";
qx.Class.define(k,{extend:qx.ui.layout.Abstract,construct:function(t,u,v,w){qx.ui.layout.Abstract.call(this);

if(t){this.setSpacingX(t);
}
if(u){this.setSpacingY(u);
}
if(v){this.setSeparatorX(v);
}
if(w){this.setSeparatorY(w);
}},properties:{sort:{check:[l,m,n],init:l,apply:j},separatorX:{check:p,nullable:true,apply:s},separatorY:{check:p,nullable:true,apply:s},connectSeparators:{check:e,init:false,apply:s},spacingX:{check:o,init:0,apply:s},spacingY:{check:o,init:0,apply:s}},members:{__kv:null,__pj:null,verifyLayoutProperty:null,_applySort:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__pk:{north:1,south:2,west:3,east:4,center:5},__pl:{1:q,2:d,3:r,4:g},__lg:function(){var x=this._getLayoutChildren();
var F,z;
var length=x.length;
var B=[];
var E=[];
var C=[];
var y=this.getSort()===m;
var D=this.getSort()===n;

for(var i=0;i<length;i++){F=x[i];
C=F.getLayoutProperties().edge;

if(C===b){if(z){throw new Error("It is not allowed to have more than one child aligned to 'center'!");
}z=F;
}else if(D||y){if(C===h||C===f){y?B.push(F):E.push(F);
}else if(C===c||C===a){y?E.push(F):B.push(F);
}}else{B.push(F);
}}var G=B.concat(E);

if(z){G.push(z);
}this.__kv=G;
var A=[];

for(var i=0;i<length;i++){C=G[i].getLayoutProperties().edge;
A[i]=this.__pk[C]||5;
}this.__pj=A;
delete this._invalidChildrenCache;
},renderLayout:function(H,I){if(this._invalidChildrenCache){this.__lg();
}var bc=qx.ui.layout.Util;
var O=this.__kv;
var bd=this.__pj;
var length=O.length;
var R,K,Q,W,X,bi,U,L,bf;
var bm=[];
var T=[];
var bl=this._getSeparatorWidths();
var bq=this.getSpacingX();
var bp=this.getSpacingY();
var P=-bq;
var be=-bp;

if(bl.x){P-=bl.x+bq;
}
if(bl.y){be-=bl.y+bp;
}
for(var i=0;i<length;i++){K=O[i];
W=K.getLayoutProperties();
Q=K.getSizeHint();
U=Q.width;
L=Q.height;

if(W.width!=null){U=Math.floor(H*parseFloat(W.width)/100);

if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}}
if(W.height!=null){L=Math.floor(I*parseFloat(W.height)/100);

if(L<Q.minHeight){L=Q.minHeight;
}else if(L>Q.maxHeight){L=Q.maxHeight;
}}bm[i]=U;
T[i]=L;
switch(bd[i]){case 1:case 2:be+=L+K.getMarginTop()+K.getMarginBottom()+bp;

if(bl.y){be+=bl.y+bp;
}break;
case 3:case 4:P+=U+K.getMarginLeft()+K.getMarginRight()+bq;

if(bl.x){P+=bl.x+bq;
}break;
default:P+=U+K.getMarginLeft()+K.getMarginRight()+bq;
be+=L+K.getMarginTop()+K.getMarginBottom()+bp;

if(bl.x){P+=bl.x+bq;
}
if(bl.y){be+=bl.y+bp;
}}}if(P!=H){R={};
bi=P<H;

for(var i=0;i<length;i++){K=O[i];

switch(bd[i]){case 3:case 4:case 5:X=K.getLayoutProperties().flex;
if(X==null&&bd[i]==5){X=1;
}
if(X>0){Q=K.getSizeHint();
R[i]={min:Q.minWidth,value:bm[i],max:Q.maxWidth,flex:X};
}}}var M=bc.computeFlexOffsets(R,H,P);

for(var i in M){bf=M[i].offset;
bm[i]+=bf;
P+=bf;
}}if(be!=I){R={};
bi=be<I;

for(var i=0;i<length;i++){K=O[i];

switch(bd[i]){case 1:case 2:case 5:X=K.getLayoutProperties().flex;
if(X==null&&bd[i]==5){X=1;
}
if(X>0){Q=K.getSizeHint();
R[i]={min:Q.minHeight,value:T[i],max:Q.maxHeight,flex:X};
}}}var M=bc.computeFlexOffsets(R,I,be);

for(var i in M){bf=M[i].offset;
T[i]+=bf;
be+=bf;
}}this._clearSeparators();
var bj=this.getSeparatorX(),bk=this.getSeparatorY();
var bn=this.getConnectSeparators();
var ba=0,bh=0;
var bu,top,U,L,Y,br;
var bb,bo,bt,J;
var bs,S,V,N;
var bg=this.__pl;

for(var i=0;i<length;i++){K=O[i];
br=bd[i];
Q=K.getSizeHint();
bs=K.getMarginTop();
S=K.getMarginBottom();
V=K.getMarginLeft();
N=K.getMarginRight();
switch(br){case 1:case 2:U=H-V-N;
if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}L=T[i];
top=ba+bc.computeVerticalAlignOffset(bg[br],L,I,bs,S);
bu=bh+bc.computeHorizontalAlignOffset(K.getAlignX()||r,U,H,V,N);
if(bl.y){if(br==1){bo=ba+L+bs+bp+S;
}else{bo=ba+I-L-bs-bp-S-bl.y;
}bb=bu;
bt=H;

if(bn&&bb>0){bb-=bq+V;
bt+=(bq)*2;
}else{bb-=V;
}this._renderSeparator(bk,{left:bb,top:bo,width:bt,height:bl.y});
}Y=L+bs+S+bp;

if(bl.y){Y+=bl.y+bp;
}I-=Y;
if(br==1){ba+=Y;
}break;
case 3:case 4:L=I-bs-S;
if(L<Q.minHeight){L=Q.minHeight;
}else if(L>Q.maxHeight){L=Q.maxHeight;
}U=bm[i];
bu=bh+bc.computeHorizontalAlignOffset(bg[br],U,H,V,N);
top=ba+bc.computeVerticalAlignOffset(K.getAlignY()||q,L,I,bs,S);
if(bl.x){if(br==3){bb=bh+U+V+bq+N;
}else{bb=bh+H-U-V-bq-N-bl.x;
}bo=top;
J=I;

if(bn&&bo>0){bo-=bp+bs;
J+=(bp)*2;
}else{bo-=bs;
}this._renderSeparator(bj,{left:bb,top:bo,width:bl.x,height:J});
}Y=U+V+N+bq;

if(bl.x){Y+=bl.x+bq;
}H-=Y;
if(br==3){bh+=Y;
}break;
default:U=H-V-N;
L=I-bs-S;
if(U<Q.minWidth){U=Q.minWidth;
}else if(U>Q.maxWidth){U=Q.maxWidth;
}if(L<Q.minHeight){L=Q.minHeight;
}else if(L>Q.maxHeight){L=Q.maxHeight;
}bu=bh+bc.computeHorizontalAlignOffset(K.getAlignX()||r,U,H,V,N);
top=ba+bc.computeVerticalAlignOffset(K.getAlignY()||q,L,I,bs,S);
}K.renderLayout(bu,top,U,L);
}},_getSeparatorWidths:function(){var bw=this.getSeparatorX(),bv=this.getSeparatorY();

if(bw||bv){var bB=qx.theme.manager.Decoration.getInstance();
}
if(bw){var bC=bB.resolve(bw);
var by=bC.getInsets();
var bz=by.left+by.right;
}
if(bv){var bD=bB.resolve(bv);
var bx=bD.getInsets();
var bA=bx.top+bx.bottom;
}return {x:bz||0,y:bA||0};
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lg();
}var bH=this.__kv;
var bR=this.__pj;
var length=bH.length;
var bL,bS;
var bN,bM;
var bO=0,ca=0;
var bE=0,bU=0;
var bP=0,bY=0;
var bF=0,bT=0;
var bV=this._getSeparatorWidths();
var bX=this.getSpacingX(),bW=this.getSpacingY();
var bJ=-bX,bI=-bW;

if(bV.x){bJ-=bV.x+bX;
}
if(bV.y){bI-=bV.y+bW;
}for(var i=0;i<length;i++){bS=bH[i];
bL=bS.getSizeHint();
bN=bS.getMarginLeft()+bS.getMarginRight();
bM=bS.getMarginTop()+bS.getMarginBottom();
switch(bR[i]){case 1:case 2:bP=Math.max(bP,bL.width+bO+bN);
bY=Math.max(bY,bL.minWidth+ca+bN);
bF+=bL.height+bM;
bT+=bL.minHeight+bM;
bI+=bW;

if(bV.y){bI+=bV.y+bW;
}break;
case 3:case 4:bE=Math.max(bE,bL.height+bF+bM);
bU=Math.max(bU,bL.minHeight+bT+bM);
bO+=bL.width+bN;
ca+=bL.minWidth+bN;
bJ+=bX;

if(bV.x){bJ+=bV.x+bX;
}break;
default:bO+=bL.width+bN;
ca+=bL.minWidth+bN;
bF+=bL.height+bM;
bT+=bL.minHeight+bM;
bJ+=bX;

if(bV.x){bJ+=bV.x+bX;
}bI+=bW;

if(bV.y){bI+=bV.y+bW;
}}}var bK=Math.max(ca,bY)+bJ;
var cb=Math.max(bO,bP)+bJ;
var bQ=Math.max(bU,bT)+bI;
var bG=Math.max(bE,bF)+bI;
return {minWidth:bK,width:cb,minHeight:bQ,height:bG};
}},destruct:function(){this.__pj=this.__kv=null;
}});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){qx.ui.layout.Abstract.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__mk:null,__le:null,__lf:null,__kv:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__lg:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__mk&&this.__mk.length!=length&&this.__le&&this.__mk;
var u;
var s=r?this.__mk:new Array(length);
var v=r?this.__le:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__mk=s;
this.__le=v;
}this.__lf=t;
this.__kv=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__lg();
}var E=this.__kv;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__mk[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__lf&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__le[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__lg();
}var bc=qx.ui.layout.Util;
var bk=this.__kv;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__le[i];
var X=this.__mk[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__mk=this.__le=this.__kv=null;
}});
})();
(function(){var f="-",e="",d="qx.bom.client.Locale",c="locale",b="android",a="locale.variant";
qx.Bootstrap.define(d,{statics:{getLocale:function(){var g=qx.bom.client.Locale.__mj();
var h=g.indexOf(f);

if(h!=-1){g=g.substr(0,h);
}return g;
},getVariant:function(){var i=qx.bom.client.Locale.__mj();
var k=e;
var j=i.indexOf(f);

if(j!=-1){k=i.substr(j+1);
}return k;
},__mj:function(){var l=(navigator.userLanguage||navigator.language||e);
if(qx.bom.client.OperatingSystem.getName()==b){var m=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(m){l=m[0];
}}return l.toLowerCase();
}},defer:function(n){qx.core.Environment.add(c,n.getLocale);
qx.core.Environment.add(a,n.getVariant);
}});
})();
(function(){var j="",i="mshtml",h="msie",g="maple",f=")(/| )([0-9]+\.[0-9])",e="(",d="ce",c="CSS1Compat",b="android",a="operamini",H="gecko",G="browser.quirksmode",F="browser.name",E="mobile chrome",D="iemobile",C="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",B="opera mobi",A="Mobile Safari",z="Maple",y="operamobile",q="ie",r="mobile safari",o="IEMobile|Maxthon|MSIE",p="qx.bom.client.Browser",m="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",n="opera mini",k="browser.version",l="opera",s="Opera Mini|Opera Mobi|Opera",t="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",v="webkit",u="browser.documentmode",x="5.0",w="Mobile/";
qx.Bootstrap.define(p,{statics:{getName:function(){var L=navigator.userAgent;
var K=new RegExp(e+qx.bom.client.Browser.__dP+f);
var J=L.match(K);

if(!J){return j;
}var name=J[1].toLowerCase();
var I=qx.bom.client.Engine.getName();

if(I===v){if(name===b){name=E;
}else if(L.indexOf(A)!==-1||L.indexOf(w)!==-1){name=r;
}}else if(I===i){if(name===h){name=q;
if(qx.bom.client.OperatingSystem.getVersion()===d){name=D;
}}}else if(I===l){if(name===B){name=y;
}else if(name===n){name=a;
}}else if(I===H){if(L.indexOf(z)!==-1){name=g;
}}return name;
},getVersion:function(){var P=navigator.userAgent;
var O=new RegExp(e+qx.bom.client.Browser.__dP+f);
var N=P.match(O);

if(!N){return j;
}var name=N[1].toLowerCase();
var M=N[3];
if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){M=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==i){M=qx.bom.client.Engine.getVersion();

if(name===h&&qx.bom.client.OperatingSystem.getVersion()==d){M=x;
}}
if(qx.bom.client.Browser.getName()==g){O=new RegExp(m);
N=P.match(O);

if(!N){return j;
}M=N[2];
}return M;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==i&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==c;
}},__dP:{"webkit":t,"gecko":C,"mshtml":o,"opera":s}[qx.bom.client.Engine.getName()]},defer:function(Q){qx.core.Environment.add(F,Q.getName),qx.core.Environment.add(k,Q.getVersion),qx.core.Environment.add(u,Q.getDocumentMode),qx.core.Environment.add(G,Q.getQuirksMode);
}});
})();
(function(){var v="horizontal",u="scrollpane",t="button-backward",s="button-forward",r="vertical",q="content",p="execute",o="qx.ui.container.SlideBar",n="engine.version",m="engine.name",f="removeChildWidget",l="scrollX",i="scrollY",c="_applyOrientation",b="mousewheel",h="gecko",g="x",j="y",a="Integer",k="slidebar",d="update";
qx.Class.define(o,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling],construct:function(w){qx.ui.core.Widget.call(this);
var x=this.getChildControl(u);
this._add(x,{flex:1});

if(w!=null){this.setOrientation(w);
}else{this.initOrientation();
}this.addListener(b,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:k},orientation:{check:[v,r],init:v,apply:c},scrollStep:{check:a,init:15,themeable:true}},members:{getChildrenContainer:function(){return this.getChildControl(q);
},_createChildControlImpl:function(y,z){var A;

switch(y){case s:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteForward,this);
A.setFocusable(false);
this._addAt(A,2);
break;
case t:A=new qx.ui.form.RepeatButton;
A.addListener(p,this._onExecuteBackward,this);
A.setFocusable(false);
this._addAt(A,0);
break;
case q:A=new qx.ui.container.Composite();
if(qx.core.Environment.get(m)==h&&parseInt(qx.core.Environment.get(n))<2){A.addListener(f,this._onRemoveChild,this);
}this.getChildControl(u).add(A);
break;
case u:A=new qx.ui.core.scroll.ScrollPane();
A.addListener(d,this._onResize,this);
A.addListener(l,this._onScroll,this);
A.addListener(i,this._onScroll,this);
break;
}return A||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,y);
},_forwardStates:{barLeft:true,barTop:true,barRight:true,barBottom:true},scrollBy:function(B){var C=this.getChildControl(u);

if(this.getOrientation()===v){C.scrollByX(B);
}else{C.scrollByY(B);
}},scrollTo:function(D){var E=this.getChildControl(u);

if(this.getOrientation()===v){E.scrollToX(D);
}else{E.scrollToY(D);
}},_applyEnabled:function(F,G,name){qx.ui.core.Widget.prototype._applyEnabled.call(this,F,G,name);
this._updateArrowsEnabled();
},_applyOrientation:function(H,I){var L=[this.getLayout(),this._getLayout()];
var K=this.getChildControl(s);
var J=this.getChildControl(t);
if(I==r){K.removeState(r);
J.removeState(r);
K.addState(v);
J.addState(v);
}else if(I==v){K.removeState(v);
J.removeState(v);
K.addState(r);
J.addState(r);
}
if(H==v){this._setLayout(new qx.ui.layout.HBox());
this.setLayout(new qx.ui.layout.HBox());
}else{this._setLayout(new qx.ui.layout.VBox());
this.setLayout(new qx.ui.layout.VBox());
}
if(L[0]){L[0].dispose();
}
if(L[1]){L[1].dispose();
}},_onMouseWheel:function(e){var M=0;

if(this.getOrientation()===v){M=e.getWheelDelta(g);
}else{M=e.getWheelDelta(j);
}this.scrollBy(M*this.getScrollStep());
e.stop();
},_onScroll:function(){this._updateArrowsEnabled();
},_onResize:function(e){var content=this.getChildControl(u).getChildren()[0];

if(!content){return;
}var N=this.getInnerSize();
var P=content.getBounds();
var O=(this.getOrientation()===v)?P.width>N.width:P.height>N.height;

if(O){this._showArrows();
this._updateArrowsEnabled();
}else{this._hideArrows();
}},_onExecuteBackward:function(){this.scrollBy(-this.getScrollStep());
},_onExecuteForward:function(){this.scrollBy(this.getScrollStep());
},_onRemoveChild:function(){qx.event.Timer.once(function(){var Q=this.getChildControl(u);

if(!Q.isDisposed()){this.scrollBy(Q.getScrollX());
}},this,50);
},_updateArrowsEnabled:function(){if(!this.getEnabled()){this.getChildControl(t).setEnabled(false);
this.getChildControl(s).setEnabled(false);
return;
}var S=this.getChildControl(u);

if(this.getOrientation()===v){var R=S.getScrollX();
var T=S.getScrollMaxX();
}else{var R=S.getScrollY();
var T=S.getScrollMaxY();
}this.getChildControl(t).setEnabled(R>0);
this.getChildControl(s).setEnabled(R<T);
},_showArrows:function(){this._showChildControl(s);
this._showChildControl(t);
},_hideArrows:function(){this._excludeChildControl(s);
this._excludeChildControl(t);
this.scrollTo(0);
}}});
})();


qx.$$loader.init();

